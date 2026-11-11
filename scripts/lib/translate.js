// 批量翻译(月度新增功能汇总专用)
// 通道顺序:
//   ① OpenAI 兼容模型接口(默认 GitHub Models;可用 TRANSLATE_BASE_URL / TRANSLATE_MODEL 覆盖)
//   ② MyMemory 免费接口(复用 news.translateToZh 的端点转移与熔断)
//   ③ 两者都不可用 -> 返回空结果,调用方保留英文
// 只负责「批量文本 -> 中文」,不关心缓存;缓存与断点续传由 changelog-digest.js 负责。
"use strict";
const CONFIG = require("./config");
const news = require("./news");

const EN_STOP = /[A-Za-z]{3}/;

function pickToken(cfg) {
  var names = cfg.tokenEnvs || [];
  for (var i = 0; i < names.length; i++) {
    var v = process.env[names[i]];
    if (v) return { name: names[i], value: v };
  }
  return null;
}

// 模型批量翻译的一次请求;失败抛错(带 status,便于区分鉴权失败与限流)
async function callModel(texts, cfg, provider) {
  var base = String(provider.baseUrl || "").replace(/\/+$/, "");
  var ac = new AbortController();
  var timer = setTimeout(function () { ac.abort(); }, cfg.requestTimeoutMs || 60000);
  try {
    var resp = await fetch(base + "/chat/completions", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "authorization": "Bearer " + provider.token
      },
      body: JSON.stringify({
        model: provider.model,
        temperature: 0,
        messages: [
          {
            role: "system",
            content: "你是技术文档翻译。把用户给出的 JSON 字符串数组中的每条英文更新说明翻译成简体中文。" +
              "要求:保留产品名、命令、代码标识符、文件路径、URL 和版本号原样;不增删信息;不添加解释;" +
              "每条译文保持单行;只输出与输入长度相同的 JSON 字符串数组,不要输出任何其他文字。"
          },
          { role: "user", content: JSON.stringify(texts) }
        ]
      }),
      signal: ac.signal
    });
    if (!resp.ok) {
      var err = new Error("HTTP " + resp.status);
      err.status = resp.status;
      throw err;
    }
    var data = await resp.json();
    var content = data && data.choices && data.choices[0] &&
      data.choices[0].message && data.choices[0].message.content;
    return parseArray(content, texts.length);
  } finally {
    clearTimeout(timer);
  }
}

// 容忍 ```json 围栏、前后解释文字与 {"translations":[...]} 包装
function parseArray(content, expected) {
  var s = String(content || "").trim()
    .replace(/^```(?:json)?\s*/i, "")
    .replace(/\s*```$/i, "")
    .trim();
  var start = s.indexOf("["), end = s.lastIndexOf("]");
  var arr = null;
  if (start >= 0 && end > start) {
    try { arr = JSON.parse(s.slice(start, end + 1)); } catch (e) { arr = null; }
  }
  if (!arr) {
    var os = s.indexOf("{"), oe = s.lastIndexOf("}");
    if (os >= 0 && oe > os) {
      try {
        var obj = JSON.parse(s.slice(os, oe + 1));
        arr = obj.translations || obj.result || obj.data;
      } catch (e) { arr = null; }
    }
  }
  if (!Array.isArray(arr) || arr.length !== expected) {
    throw new Error("模型返回条数不符(期望 " + expected + ",实际 " + (Array.isArray(arr) ? arr.length : "非数组") + ")");
  }
  var out = arr.map(function (v) {
    var t = String(v == null ? "" : v).replace(/\s+/g, " ").trim();
    if (!t) throw new Error("模型返回空译文");
    return t;
  });
  var zhCount = out.filter(function (t) { return news.hasCJK(t); }).length;
  if (zhCount < Math.max(1, Math.floor(expected * 0.6))) {
    throw new Error("模型返回中文比例过低(" + zhCount + "/" + expected + ")");
  }
  return out;
}

// 按条数 + 字符双限切批
function makeBatches(items, cfg) {
  var maxItems = cfg.batchItems || 40, maxChars = cfg.batchChars || 8000;
  var batches = [], cur = [], chars = 0;
  items.forEach(function (it) {
    if (cur.length && (cur.length >= maxItems || chars + it.text.length > maxChars)) {
      batches.push(cur); cur = []; chars = 0;
    }
    cur.push(it);
    chars += it.text.length;
  });
  if (cur.length) batches.push(cur);
  return batches;
}

function sleep(ms) { return new Promise(function (r) { setTimeout(r, ms); }); }

// items: [{key, text}] -> { zh: Map<key,中文>, failed, pending, usedChars, modelCalls, mymemoryCalls }
// cfg = CONFIG.changelogDigest.translate
async function translateMany(items, cfg) {
  cfg = cfg || {};
  var out = new Map(), failed = 0, usedChars = 0, modelCalls = 0, mymemoryCalls = 0;
  var todo = (items || []).filter(function (it) {
    return it && it.key && it.text && !news.hasCJK(it.text) && EN_STOP.test(it.text);
  });
  var pending = todo.slice(0, cfg.maxItemsPerRun || todo.length);
  if (!pending.length) return { zh: out, failed: 0, pending: 0, usedChars: 0, modelCalls: 0, mymemoryCalls: 0 };

  var started = Date.now();
  var provider = {
    baseUrl: process.env.TRANSLATE_BASE_URL || cfg.baseUrl || "",
    model: process.env.TRANSLATE_MODEL || cfg.model || "",
    token: (pickToken(cfg) || {}).value || ""
  };

  var modelDown = cfg.enabled === false || !provider.token || !provider.baseUrl || !provider.model;
  if (!modelDown) {
    var batches = makeBatches(pending, cfg);
    for (var i = 0; i < batches.length; i++) {
      if (Date.now() - started > (cfg.deadlineMs || Infinity)) {
        console.log("[digest] 翻译达到本轮时间预算,剩余条目留待下次刷新");
        break;
      }
      var batch = batches[i];
      var result = null, lastErr = null;
      for (var a = 0; a < 2 && !result; a++) {
        try {
          result = await callModel(batch.map(function (it) { return it.text; }), cfg, provider);
          modelCalls++;
        } catch (e) {
          lastErr = e;
          if (e.status === 401 || e.status === 403 || e.status === 404) break; // 鉴权/模型名问题,重试无意义
          if (e.status === 429) await sleep(2000);
        }
      }
      if (!result) {
        failed += batch.length;
        console.log("[digest] 模型翻译失败(" + (lastErr ? lastErr.message : "未知") + "),该批 " + batch.length + " 条留待下次");
        if (lastErr && (lastErr.status === 401 || lastErr.status === 403 || lastErr.status === 404)) {
          modelDown = true;
          break;
        }
        continue;
      }
      batch.forEach(function (it, j) {
        out.set(it.key, result[j]);
        usedChars += it.text.length;
      });
    }
  }

  // 模型通道不可用(或本轮有失败批次)时,用免费接口补剩下的;按字符预算硬停
  var remaining = pending.filter(function (it) { return !out.has(it.key); });
  var budget = cfg.mymemoryMaxCharsPerRun || 0;
  if (remaining.length && budget > 0) {
    news.resetEndpointState();
    var memCfg = Object.assign({}, CONFIG.news.translate || {}, { logTag: "digest" });
    var spent = 0;
    for (var k = 0; k < remaining.length; k++) {
      var it = remaining[k];
      if (spent + it.text.length > budget) break;
      var zh = await news.translateToZh(it.text, memCfg);
      if (!zh) break; // 端点熔断,别再空转
      out.set(it.key, zh);
      spent += it.text.length;
      mymemoryCalls++;
    }
    usedChars += spent;
  }

  return {
    zh: out,
    failed: pending.filter(function (it) { return !out.has(it.key); }).length,
    pending: todo.length - pending.length,
    usedChars: usedChars,
    modelCalls: modelCalls,
    mymemoryCalls: mymemoryCalls
  };
}

module.exports = {
  translateMany: translateMany,
  parseArray: parseArray,
  makeBatches: makeBatches,
  pickToken: pickToken
};
