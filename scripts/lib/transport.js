// HTTP 传输层:重试 + 限流 + 并发 + 重定向跟随
// 设计:
//   - fetchWithRetry(url, opts):基于 p-retry 的指数退避重试,可配置次数/超时/重试条件
//   - per-host 限流:同域名请求最小间隔,不同 host 互不阻塞(自定义轻量实现,避免引入 p-queue)
//   - 全局并发:p-limit 包裹所有出站请求(默认 5),防瞬时打满 socket
//   - 重定向:递归跟随 3xx(迁移自原 fetchText)
// 运行:Node 内置 https/http,无额外依赖(p-limit/p-retry 除外)
"use strict";
const http = require("http");
const https = require("https");
const pLimit = require("p-limit");
const pRetry = require("p-retry");

const CONFIG = require("./config");

// 全局并发池:限制同时进行的出站请求数
const globalLimit = pLimit(CONFIG.transport.concurrency);

// ===== per-host 限流器 =====
// 每个 host 维护"下次允许请求的时间戳";请求前 sleep 到该时刻,再把下次时刻后推 intervalMs。
// 不同 host 的链互不阻塞,实现按域名隔离的速率控制。
const hostNextReady = {};          // host -> 下次允许请求的 ms 时间戳
const hostLocks = {};              // host -> Promise 链(串行化同 host 的"占位"操作)
function sleep(ms) { return new Promise(function (r) { setTimeout(r, ms); }); }
function hostOf(url) {
  try { return new URL(url).host; } catch (e) { return url; }
}
// 对同一 host 串行化"排队等待 + 占位下次时刻",避免同 host 多请求并发计算错乱
function acquireHost(host) {
  // 确保 host 有自己的 Promise 链尾
  if (!hostLocks[host]) hostLocks[host] = Promise.resolve();
  const tail = hostLocks[host];
  let release;
  hostLocks[host] = new Promise(function (r) { release = r; });
  return tail.then(function () {
    const now = Date.now();
    const readyAt = hostNextReady[host] || now;
    const wait = Math.max(0, readyAt - now);
    return (wait > 0 ? sleep(wait) : Promise.resolve()).then(function () {
      // 占位:下次允许时刻 = 当前 + 间隔
      hostNextReady[host] = Date.now() + CONFIG.transport.rateLimitMs;
      return function done() { release(); };
    });
  });
}

// ===== 底层单次抓取(无重试,迁移自原 fetchText) =====
// 30s 超时 + 3xx 重定向跟随 + 非 200 抛错(供 p-retry 判定是否重试)
function fetchOnce(url, opts) {
  opts = opts || {};
  const timeoutMs = opts.timeoutMs || CONFIG.transport.timeoutMs;
  const client = url.startsWith("https") ? https : http;
  return new Promise(function (resolve, reject) {
    const req = client.get(url, {
      headers: {
        "User-Agent": CONFIG.transport.userAgent,
        "Accept": "*/*"
      }
    }, function (res) {
      // 3xx 重定向:递归跟随(最多由外层 p-retry 的总尝试次数兜底)
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        res.resume();
        const loc = res.headers.location;
        const next = loc.startsWith("http") ? loc : new URL(loc, url).href;
        return resolve(fetchOnce(next, opts));
      }
      if (res.statusCode !== 200) {
        res.resume();
        return reject(new Error("HTTP " + res.statusCode + " " + url));
      }
      var buf = "";
      res.setEncoding("utf8");
      res.on("data", function (d) { buf += d; });
      res.on("end", function () { resolve(buf); });
    });
    req.on("error", reject);
    req.setTimeout(timeoutMs, function () {
      req.destroy();
      reject(new Error("timeout " + url));
    });
  });
}

// ===== 对外接口:带重试 + 限流 + 全局并发的抓取 =====
// opts:
//   retries        重试次数(默认 config.retries)
//   timeoutMs      单次超时
//   rateLimitMs    覆盖同 host 最小间隔(可选)
//   onFailedAttempt p-retry 钩子,用于日志
//   shouldRetry    自定义重试条件函数(err) => bool(可选,默认 4xx 不重试)
// 注:为兼容 p-retry v4(无 shouldRetry 选项),不可重试的错误直接抛 AbortError 终止。
function isRetryable(err) {
  var msg = String(err && err.message || "");
  // 4xx 客户端错误(如 404)不可重试;其余(网络/超时/5xx)可重试
  if (/HTTP 4\d\d/.test(msg)) return false;
  return true;
}
function fetchWithRetry(url, opts) {
  opts = opts || {};
  const retries = opts.retries != null ? opts.retries : CONFIG.transport.retries;
  const customRetry = opts.shouldRetry;
  return globalLimit(function () {
    return pRetry(function () {
      const host = hostOf(url);
      return acquireHost(host).then(function (release) {
        return fetchOnce(url, opts).then(
          function (ok) { release(); return ok; },
          function (err) {
            release();
            // 不可重试的错误包装为 AbortError(兼容 p-retry v4+ 的终止机制)
            var retryable = customRetry ? customRetry(err) : isRetryable(err);
            if (!retryable) throw new pRetry.AbortError(err.message);
            throw err;
          }
        );
      });
    }, {
      retries: retries,
      factor: 2,                 // 指数退避倍数
      minTimeout: 1000,          // 首次重试等待基数 1s
      maxTimeout: 15000,         // 单次最大等待 15s
      randomize: true,           // 加入抖动,避免雷鸣群
      onFailedAttempt: opts.onFailedAttempt || function (error) {
        console.log("  [transport] 重试 " + error.attemptNumber + "/" + (error.retriesLeft + error.attemptNumber) + " : " + error.message);
      }
    });
  });
}

// HTML 实体反转义(迁移自原 fetch_all.js)
function htmlDecode(s) {
  return String(s || "")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&#39;/g, "'");
}

module.exports = {
  fetchWithRetry: fetchWithRetry,
  fetchOnce: fetchOnce,
  htmlDecode: htmlDecode,
  // 暴露限流内部(仅用于测试/调试)
  _hostNextReady: hostNextReady,
  _globalLimit: globalLimit
};
