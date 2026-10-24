// AI Release Tracker(aireleasetracker.com)聚合榜解析
// 数据形态:Next.js 服务端渲染页面 /benchmark/<slug>,排名行为
//   <a class="group/row" href="/model/<org>/<model>"> ... <span ...>模型名</span> ... <span ...>79%</span> ... </a>
// 源站自述:「Scores are collected from published lab reports and benchmark sources … We do not re-run the evaluations.」
// 渠道:第三方聚合(T3),只用于补充站内各基准缺失的模型,不覆盖既有分数。
// 反爬:Vercel 会按 TLS 指纹做机器人挑战(Node 原生 https / undici fetch 即使带浏览器 UA
//   也返回 429 Security Checkpoint,curl 可正常拿到 SSR 页面),故用 curl 子进程抓取。
//   参数以数组传入 execFile,不经 shell,slug 来自本地配置。
"use strict";
const { execFile } = require("child_process");
const { promisify } = require("util");
const transport = require("./transport");
const CONFIG = require("./config");

const execFileAsync = promisify(execFile);
const ART = CONFIG.sources.aireleasetracker;

// 进程内缓存:同一基准页一次抓取供多处使用;失败不缓存,便于下次重试
const cache = {};
const RETRIES = 2;
function sleep(ms) { return new Promise(function (r) { setTimeout(r, ms); }); }

// 抓取串行化:管线会并发跑各源,同一 host 的 9 个榜单不能同时打(否则触发 Vercel 限流)
let chain = Promise.resolve();
let lastAt = 0;
function queuedFetch(url) {
  const next = chain.then(async function () {
    const wait = Math.max(0, lastAt + 1200 - Date.now());
    if (wait) await sleep(wait);
    lastAt = Date.now();
    return fetchPage(url);
  });
  chain = next.then(function () {}, function () {});
  return next;
}

// curl 抓取:HTTP 状态码附在末尾一行,非 200 抛错供重试
async function fetchPage(url) {
  const args = [
    "-sS", "-m", "60", "--compressed",
    "-A", ART.userAgent,
    "-H", "Accept: text/html,application/xhtml+xml",
    "-H", "Accept-Language: en-US,en;q=0.9",
    "-w", "\n%{http_code}",
    url
  ];
  const res = await execFileAsync("curl", args, { timeout: 70000, maxBuffer: 16 * 1024 * 1024 });
  const out = res.stdout;
  const i = out.lastIndexOf("\n");
  const code = Number(out.slice(i + 1));
  if (code !== 200) throw new Error("HTTP " + code + " " + url);
  return out.slice(0, i);
}

// "79%" / "99.9%" -> 79 / 99.9;无数字返回 null(空单元格不可当 0)
function parseScore(raw) {
  const m = String(raw == null ? "" : raw).match(/-?\d+(?:\.\d+)?/);
  if (!m) return null;
  const n = Number(m[0]);
  return isFinite(n) ? n : null;
}

// 只解析「Rankings」区段:FAQ、侧边栏、页脚同样有 /benchmark 与 /model 链接,不能全页扫
function parseRanking(html) {
  const text = String(html || "");
  const start = text.indexOf("Rankings</h2>");
  const end = text.indexOf("frequently asked questions", start);
  const seg = start >= 0 ? text.slice(start, end > start ? end : text.length) : text;
  const rows = [];
  const rowRe = /<a class="group\/row[^"]*" href="([^"]+)">([\s\S]*?)<\/a>/g;
  let m;
  while ((m = rowRe.exec(seg)) !== null) {
    const href = m[1];
    const body = m[2];
    const nm = body.match(/<span class="font-medium text-gray-200[^"]*">([^<]+)<\/span>/);
    const sc = body.match(/<span class="text-lg font-medium tabular-nums[^"]*">([^<]+)<\/span>/);
    if (!nm || !sc) continue;
    const score = parseScore(sc[1]);
    if (score == null) continue;
    const rk = body.match(/<span class="w-6[^"]*">([^<]+)<\/span>/);
    rows.push({
      rank: rk ? parseScore(rk[1]) : null,
      model: transport.htmlDecode(nm[1]).trim(),
      score: score,
      // OW = open weights(源站行内开源权重徽标),仅作展示参考
      openWeights: /(?:^|>)OW</.test(body),
      path: href
    });
  }
  return rows;
}

// 抓取并解析某个站内基准对应的源站榜单;benchId 为站内源 id(config.sources.aireleasetracker.slugs 的键)
async function fetchModels(benchId) {
  const slug = ART.slugs[benchId];
  if (!slug) throw new Error("[aireleasetracker] 未配置基准 " + benchId + " 的 slug");
  if (cache[benchId]) return cache[benchId];
  const url = ART.baseUrl + ART.pagePath + slug;
  cache[benchId] = (async function () {
    let lastErr = null;
    for (let attempt = 0; attempt <= RETRIES; attempt++) {
      try { return await queuedFetch(url); }
      catch (e) {
        lastErr = e;
        if (attempt < RETRIES) {
          console.log("  [aireleasetracker] 重试 " + (attempt + 1) + "/" + RETRIES + " : " + e.message);
          await sleep(1500 * (attempt + 1));
        }
      }
    }
    throw lastErr;
  })().then(function (html) {
    const models = parseRanking(html);
    if (!models.length) throw new Error("[aireleasetracker] " + slug + " 未解析到任何排名行(页面结构可能已变化)");
    return { url: url, slug: slug, models: models };
  }).catch(function (err) {
    delete cache[benchId];
    throw err;
  });
  return cache[benchId];
}

// 补充渠道失败不拖垮主榜:抓取/解析失败只记日志并返回 null,调用方按「无补充」处理
async function fetchModelsSafe(benchId) {
  try {
    return await fetchModels(benchId);
  } catch (e) {
    console.log("  [aireleasetracker] " + benchId + " 补充失败,跳过: " + e.message);
    return null;
  }
}

module.exports = {
  parseScore: parseScore,
  parseRanking: parseRanking,
  fetchModels: fetchModels,
  fetchModelsSafe: fetchModelsSafe
};
