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
const officialScores = require("./official-scores");

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
      images: collectImages(content, limit),
      // 从正文的「基准 × 模型」HTML 表格抽取 HLE / GPQA 成绩
      scores: officialScores.extractAll(content)
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
      images: images,
      // 同 Qwen:从正文 HTML 表格抽取 HLE / GPQA 成绩(混元正文亦为 HTML)
      scores: officialScores.extractAll(content)
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

// 通用 HTML 列表源:抓一个普通网页(博客列表/单篇发布页),用正则切出文章块。
// 用途:不是所有厂商都提供 Qwen/混元那样的 JSON 列表接口,但绝大多数官方博客的
// HTML 里都有 <article> / <a> 结构。配置项:
//   url          要抓的页面
//   itemPattern  切分单条文章的正则(含 1 个捕获组,组内为单篇文章 HTML)
//   titlePattern 从单篇 HTML 取标题的正则(第 1 捕获组)
//   linkPattern  从单篇 HTML 取链接的正则(第 1 捕获组;可为相对路径,与 site 拼接)
//   datePattern  从单篇 HTML 取日期的正则(第 1 捕获组,YYYY-MM-DD 或 ISO)
//   maxItems     最多取几条(默认 30)
// 分数抽取对所有源一致生效(extractFromHtml),因此新接入的源只要能给出正文 HTML,
// HLE / GPQA 就会被自动解析,无需为每个厂商写解析器。
async function fetchHtmlList(src, limit) {
  const raw = await transport.fetchWithRetry(src.url, {
    headers: { "user-agent": "Mozilla/5.0 (compatible; llm-benchmark/1.0)", accept: "text/html" }
  });
  const html = String(raw || "");
  const itemRe = new RegExp(src.itemPattern, "gi");
  const out = [];
  let m, n = 0;
  while ((m = itemRe.exec(html))) {
    if (++n > (src.maxItems || 30)) break;
    const block = m[1] || m[0];
    const pick = function (re) {
      if (!re) return "";
      const r = block.match(new RegExp(re, "i"));
      return r ? String(r[1] || "").trim() : "";
    };
    const title = pick(src.titlePattern);
    let link = pick(src.linkPattern);
    if (link && !/^https?:\/\//i.test(link)) {
      link = (src.site || src.url).replace(/\/$/, "") + "/" + link.replace(/^\//, "");
    }
    const date = isoSlice(pick(src.datePattern)) || "";
    if (!title) continue;
    out.push({
      src: src.id, vendor: src.vendor, title: title, date: date,
      url: link || src.url,
      models: extractModels(title, src.vendor),
      benchmarks: extractBenchmarks(title + " " + block),
      cover: null,
      images: collectImages(block, limit),
      scores: officialScores.extractAll(block)
    });
  }
  return out;
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
      let got;
      if (src.type === "hunyuan-json") got = await fetchHunyuan(src, CFG.maxImages || 8);
      else if (src.type === "html-list") got = await fetchHtmlList(src, CFG.maxImages || 8);
      else got = await fetchQwen(src, CFG.maxImages || 8);
      got.forEach(function (r) { releases.push(r); });
      console.log("  [official-releases] " + src.id + ": " + got.length + " 条");
    } catch (e) {
      console.log("  [official-releases] " + src.id + " 失败,沿用旧数据: " + e.message);
      prevReleases.filter(function (r) { return r.src === src.id; }).forEach(function (r) { releases.push(r); });
    }
  }

  // 自动抽取 HLE / GPQA 成绩(scripts/lib/official-scores.js):
  // 在 lookbackDays / maxReleases 截断之前汇总 —— 分数只用于「补缺失模型」,
  // 历史文章的官方表格同样是有效数据源(如 Qwen3.5/3.6/3.7 系列都带 HLE/GPQA 表),
  // 若先截断再抽取,这些模型的分数会永远进不来。发布条目本身仍按窗口截断。
  // 同模型多篇发布命中时保留「日期更新」的那篇(merged 已按日期倒序)。
  const scoreIndex = {};
  releases
    .filter(function (r) { return r.scores; })
    .sort(function (a, b) { return (b.date || "").localeCompare(a.date || ""); })
    .forEach(function (r) {
      const got = r.scores;
      ["gpqa", "hle"].forEach(function (bench) {
        Object.keys(got[bench] || {}).forEach(function (name) {
          const k = normKey(name);
          if (!k) return;
          if (scoreIndex[bench + "|" + k]) return;  // 已有更新的发布日期,不覆盖
          scoreIndex[bench + "|" + k] = { name: name, score: got[bench][name], date: r.date, src: r.src, url: r.url, title: r.title };
        });
      });
    });

  const merged = releases
    .filter(function (r) { return !r.date || !cutoff || r.date >= cutoff; })
    .sort(function (a, b) { return (b.date || "").localeCompare(a.date || "") || (a.title < b.title ? -1 : 1); })
    .slice(0, CFG.maxReleases || 24);
  const models = flattenModels(merged);
  const autoScores = { gpqa: [], hle: [] };
  Object.keys(scoreIndex).forEach(function (k) {
    const v = scoreIndex[k];
    autoScores[k.split("|")[0]].push({ model: v.name, score: v.score, date: v.date, src: v.src, url: v.url, title: v.title });
  });
  Object.keys(autoScores).forEach(function (b) {
    autoScores[b].sort(function (x, y) { return y.score - x.score; });
  });
  const scoreCount = autoScores.gpqa.length + autoScores.hle.length;

  // 比对必须带上 scores:解析规则变更(如新增排除 Base 模型)后,
  // 即使发布列表本身没变,抽取出的成绩也会变,否则会一直判「无变化」而永不落盘。
  const payload = { releases: merged, models: models, scores: autoScores };
  const prevPayload = { releases: prevReleases, models: prevModels, scores: (prev && prev.scores) || { gpqa: [], hle: [] } };
  if (prev && JSON.stringify(payload) === JSON.stringify(prevPayload)) {
    console.log("[official-releases] 无变化,跳过 " + CFG.outFile);
    return { changed: false, releases: merged.length, models: models.length };
  }

  const obj = {
    updated: CONFIG.TODAY,
    refreshedAt: CONFIG.REFRESHED_AT,
    sources: (CFG.sources || []).map(function (s) { return s.id; }),
    stats: { releases: merged.length, models: models.length, gpqa: autoScores.gpqa.length, hle: autoScores.hle.length },
    models: models,
    releases: merged,
    // 从官方发布页表格自动抽取的 HLE / GPQA 成绩,供 official-seeds.js 合并进 HLE / GPQA 表。
    // 口径:HLE 仅收无工具行(带工具行在解析阶段已丢弃);GPQA 只认 GPQA(Diamond),排除 SuperGPQA。
    scores: autoScores
  };
  const header =
    "// 官方发布监听(由 scripts/lib/official-releases.js 生成)\n" +
    "// 来源:Qwen 官方博客 / 腾讯混元官方博客的公开列表 API;只收录最近 " + (CFG.lookbackDays || 120) + " 天发布。\n" +
    "// 用途:models[] 供 scripts/lib/model-auto.js 自动建档;benchmarks[] 标记该发布提到的基准;\n" +
    "//       scores[] 为从发布页 HTML 表格自动抽取的 HLE / GPQA 成绩(scripts/lib/official-scores.js),\n" +
    "//       由 official-seeds.js 并入 HLE / GPQA 表(仅补缺失模型,不覆盖官方实测榜已有分数)。\n" +
    "// 口径:HLE 只收无工具行;GPQA 只认 GPQA(Diamond),SuperGPQA / MMLU 等不入。\n" +
    "// 注:图表为图片、或表格结构非常规的发布页无法解析,其分数仍按 official-seeds.js 人工转录(T2)补充。\n";
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
