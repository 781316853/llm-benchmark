// 官方发布监听(Qwen / 腾讯混元官方博客)
// 目的:厂商发布新模型后,自动发现「模型名 + 相关基准提及」并写入 data/official_releases.js,
//       再由 scripts/lib/model-auto.js 把未登记模型自动建档,避免后续榜单出现 vendor=「其他」。
// 边界:发布页的基准分数多为图表图片,本模块不解析/臆造分数;分数仍由 scripts/lib/official-seeds.js
//       按 T2 渠道人工转录(见 README「厂商官方发布成绩种子层」)。
// 失败策略:单源失败沿用上一版该源发布;全失败时保留旧文件。
"use strict";
const CONFIG = require("./config");
const transport = require("./transport");
const writers = require("./writers");
const officialSeeds = require("./official-seeds");

const CFG = CONFIG.officialReleases;
const MONTHS = {
  january: 1, february: 2, march: 3, april: 4, may: 5, june: 6,
  july: 7, august: 8, september: 9, october: 10, november: 11, december: 12
};
const BENCH_PATTERNS = [
  [/DeepSWE/i, "DeepSWE"],
  [/Terminal[\s-]*Bench(?:\s*4\.0)?/i, "Terminal-Bench 4.0"],
  [/ProgramBench/i, "ProgramBench"],
  [/Humanity['’]s Last Exam|\bHLE\b/i, "HLE"],
  [/OSWorld/i, "OSWorld"],
  [/APEX[\s-]*(?:Agents|1)/i, "APEX"],
  [/AutomationBench/i, "AutomationBench"],
  [/Code\s*Arena|WebDev/i, "Code Arena · WebDev"],
  [/Agent\s*Arena/i, "Agent Arena"],
  [/Agents['’] Last Exam|\bALE\b/i, "Agents' Last Exam"],
  [/\bMMMU(?:-Pro)?\b/i, "MMMU-Pro"],
  [/ZeroBench/i, "ZeroBench"],
  [/Chartography/i, "Chartography"],
  [/JobBench/i, "JobBench"],
  [/\bHLAB\b/i, "HLAB-Vals"],
  [/BioMysteryBench/i, "BioMysteryBench"],
  [/HealthBench/i, "HealthBench"],
  [/Video[\s-]*Index/i, "Video-Index"],
  [/AA[\s-]*Briefcase/i, "AA-Briefcase"],
  [/Work360/i, "Work360"],
  [/WorkIndex/i, "WorkIndex"]
];

function pad2(n) { return n < 10 ? "0" + n : String(n); }
function isoDate(y, m, d) { return y + "-" + pad2(m) + "-" + pad2(d); }

// "2026-11-16T10:00:00+08:00" -> "2026-11-16"
function isoSlice(s) {
  const m = String(s || "").match(/^(\d{4})-(\d{2})-(\d{2})/);
  return m ? m[1] + "-" + m[2] + "-" + m[3] : "";
}

// 混元正文封面卡日期:"November 16, 2026" / "2026年11月16日"
function parseHunyuanDate(text) {
  const raw = String(text || "");
  const m = raw.match(/date\s*=\s*"([^"]+)"/);
  if (!m) return "";
  const s = m[1].trim();
  const cn = s.match(/^(\d{4})年(\d{1,2})月(\d{1,2})日/);
  if (cn) return isoDate(Number(cn[1]), Number(cn[2]), Number(cn[3]));
  const en = s.match(/^([A-Za-z]+)\s+(\d{1,2}),\s*(\d{4})/);
  if (en) {
    const mo = MONTHS[en[1].toLowerCase()];
    if (mo) return isoDate(Number(en[3]), mo, Number(en[2]));
  }
  return isoSlice(s);
}

// 从发布标题提取模型名:
//   "Qwen4-Max：新同事,已就位" -> Qwen4-Max
//   "Introducing Hy4 flash: ..." -> Hy4 flash
//   "Qwen-Robot Suite：..." -> 跳过(无版本号,属产品线/工具而非具体模型)
function extractModels(title, vendor) {
  let s = String(title || "").replace(/^\s*Introducing\s+/i, "").trim();
  let head = (s.split(/[：:]/)[0] || s).replace(/\s+/g, " ").trim();
  let token = "";
  if (vendor === "Tencent") {
    const m = head.match(/^(Hy\d+(?:\s+[a-z][a-z0-9.\-]*)?)/i);
    token = m ? m[1] : "";
  } else {
    const m = head.match(/^(Qwen[\w.\-]*)/i);
    token = m ? m[1] : "";
  }
  token = token.replace(/[\s,，。.!！?？]+$/, "").trim();
  if (!token || !/\d/.test(token)) return [];
  if (/Bench$/i.test(token)) return [];
  return [token];
}

function collectImages(text, limit) {
  const out = [], seen = {};
  function add(u) {
    u = String(u || "").trim();
    if (!/^https?:\/\//i.test(u) || seen[u]) return;
    if (/\/(?:logo|favicon)[^/]*$/i.test(u.split("?")[0])) return;
    // 混元图表 CDN 使用带签名的临时链接:落库去掉 query(签名/SecretId 不写入仓库),原文链接仍可复核。
    if (/[?&]q-signature=/i.test(u)) u = u.split("?")[0];
    seen[u] = 1; out.push(u);
  }
  String(text || "").replace(/media_src\s*=\s*"([^"]+)"/g, function (m, u) { add(u); return m; });
  // Qwen 文章 HTML 的属性可能不带引号(src=https://...);三种写法都兼容
  String(text || "").replace(/<img[^>]+src\s*=\s*(?:"([^"]+)"|'([^']+)'|([^\s>]+))/gi, function (m, a, b, c) {
    add(a || b || c); return m;
  });
  return out.slice(0, limit);
}

function plainText(text) {
  return String(text || "")
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/@@@/g, " ")
    .replace(/[|*#`>]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function extractBenchmarks(text) {
  const src = plainText(text);
  const out = [], seen = {};
  BENCH_PATTERNS.forEach(function (p) {
    if (p[0].test(src) && !seen[p[1]]) { seen[p[1]] = 1; out.push(p[1]); }
  });
  return out;
}

async function fetchQwen(src, limit) {
  const raw = await transport.fetchWithRetry(src.url, {
    headers: { "user-agent": "Mozilla/5.0", "accept": "application/json" }
  });
  const j = JSON.parse(raw);
  const articles = (j && j.data && j.data.articles) || [];
  return articles.map(function (a) {
    const extra = a.extra || {};
    const title = String(a.title || "").trim();
    const date = isoSlice(extra.date);
    const url = src.site + encodeURIComponent(a.path || "");
    const content = String(a.content || "");
    const models = extractModels(title, src.vendor);
    return {
      src: src.id, vendor: src.vendor, title: title, date: date, url: url,
      models: models,
      benchmarks: extractBenchmarks(title + " " + content),
      cover: extra.cover_small || null,
      images: collectImages(content, limit)
    };
  }).filter(function (r) { return r.title && r.url; });
}

async function fetchHunyuan(src, limit) {
  const raw = await transport.fetchWithRetry(src.url, {
    method: "POST",
    headers: { "content-type": "application/json", "user-agent": "Mozilla/5.0", "accept": "application/json" },
    body: JSON.stringify(src.body || { pageNum: 1, pageSize: 1000, renderType: 2 })
  });
  const j = JSON.parse(raw);
  const list = (j && j.data && j.data.list) || [];
  return list.map(function (a) {
    const title = String(a.title || "").trim();
    const content = String(a.content || "");
    const customUrl = String(a.customUrl || "").trim();
    const images = collectImages(content, limit);
    return {
      src: src.id, vendor: src.vendor, title: title,
      date: parseHunyuanDate(content), url: customUrl ? src.site + customUrl : src.site,
      models: extractModels(title, src.vendor),
      benchmarks: extractBenchmarks(title + " " + content),
      cover: images[0] || null,
      images: images
    };
  }).filter(function (r) { return r.title && r.url; });
}

function normKey(s) {
  return String(s || "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

function flattenModels(releases) {
  const byKey = {};
  releases.forEach(function (r) {
    (r.models || []).forEach(function (name) {
      const k = normKey(name);
      if (!k) return;
      const cur = byKey[k];
      if (!cur || (r.date && r.date > cur.date)) {
        byKey[k] = { model: name, vendor: r.vendor, src: r.src, date: r.date, title: r.title, url: r.url };
      }
    });
  });
  return Object.keys(byKey).sort().map(function (k) { return byKey[k]; });
}

async function updateOfficialReleases() {
  const prev = writers.loadJsGlobal(CFG.outFile, CFG.windowVar);
  const prevReleases = (prev && prev.releases) || [];
  const prevModels = (prev && prev.models) || [];
  const cutoff = CONFIG.TODAY ? (function () {
    const d = new Date(CONFIG.TODAY + "T00:00:00Z");
    d.setUTCDate(d.getUTCDate() - (CFG.lookbackDays || 120));
    return d.toISOString().slice(0, 10);
  })() : "";
  const releases = [];

  for (const src of (CFG.sources || [])) {
    try {
      console.log("[official-releases] 抓取 " + src.id + " " + src.url);
      const got = src.type === "hunyuan-json"
        ? await fetchHunyuan(src, CFG.maxImages || 8)
        : await fetchQwen(src, CFG.maxImages || 8);
      got.forEach(function (r) { releases.push(r); });
      console.log("  [official-releases] " + src.id + ": " + got.length + " 条");
    } catch (e) {
      console.log("  [official-releases] " + src.id + " 失败,沿用旧数据: " + e.message);
      prevReleases.filter(function (r) { return r.src === src.id; }).forEach(function (r) { releases.push(r); });
    }
  }

  const merged = releases
    .filter(function (r) { return !r.date || !cutoff || r.date >= cutoff; })
    .sort(function (a, b) { return (b.date || "").localeCompare(a.date || "") || (a.title < b.title ? -1 : 1); })
    .slice(0, CFG.maxReleases || 24);
  const models = flattenModels(merged);

  const payload = { releases: merged, models: models };
  const prevPayload = { releases: prevReleases, models: prevModels };
  if (prev && JSON.stringify(payload) === JSON.stringify(prevPayload)) {
    console.log("[official-releases] 无变化,跳过 " + CFG.outFile);
    return { changed: false, releases: merged.length, models: models.length };
  }

  const obj = {
    updated: CONFIG.TODAY,
    refreshedAt: CONFIG.REFRESHED_AT,
    sources: (CFG.sources || []).map(function (s) { return s.id; }),
    stats: { releases: merged.length, models: models.length },
    models: models,
    releases: merged
  };
  const header =
    "// 官方发布监听(由 scripts/lib/official-releases.js 生成)\n" +
    "// 来源:Qwen 官方博客 / 腾讯混元官方博客的公开列表 API;只收录最近 " + (CFG.lookbackDays || 120) + " 天发布。\n" +
    "// 用途:models[] 供 scripts/lib/model-auto.js 自动建档;benchmarks[] 标记该发布提到的基准,便于后续种子转录。\n" +
    "// 注:发布页分数图表多为图片,本文件不含分数;分数以 official-seeds.js 的人工转录(T2)为准。\n";
  writers.writeWindowVar(CFG.outFile, CFG.windowVar, writers.windowVarTemplate(CFG.windowVar, header, obj));

  const prevSet = {};
  prevModels.forEach(function (m) { prevSet[normKey(m.model)] = 1; });
  const newModels = models.filter(function (m) { return !prevSet[normKey(m.model)]; });
  if (newModels.length) {
    console.log("[official-releases] 新发布模型: " + newModels.map(function (m) {
      return m.model + (m.date ? "(" + m.date + ")" : "");
    }).join(", "));
  }
  // 提示:最近 30 天发布提到基准、但尚无 official-seeds 条目的模型 —— 分数图表多为图片,需人工核对后补种子。
  const seeded = {};
  Object.keys(officialSeeds.SEEDS || {}).forEach(function (k) {
    (officialSeeds.SEEDS[k] || []).forEach(function (s) { seeded[officialSeeds.normName(s.name)] = 1; });
  });
  const pendingSince = (function () {
    const d = new Date(CONFIG.TODAY + "T00:00:00Z");
    d.setUTCDate(d.getUTCDate() - 30);
    return d.toISOString().slice(0, 10);
  })();
  const pending = [];
  merged.forEach(function (r) {
    if (!r.benchmarks || !r.benchmarks.length) return;
    if (r.date && r.date < pendingSince) return;
    (r.models || []).forEach(function (name) {
      if (!seeded[officialSeeds.normName(name)]) pending.push(name + "(" + r.benchmarks.join("/") + ")");
    });
  });
  if (pending.length) console.log("[official-releases] 待转录分数(无 official-seeds 条目): " + Array.from(new Set(pending)).join(", "));
  return { changed: true, releases: merged.length, models: models.length, newModels: newModels.map(function (m) { return m.model; }) };
}

module.exports = {
  updateOfficialReleases: updateOfficialReleases,
  parseHunyuanDate: parseHunyuanDate,
  extractModels: extractModels,
  extractBenchmarks: extractBenchmarks,
  flattenModels: flattenModels
};
