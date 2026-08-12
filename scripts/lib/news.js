// AI 热点新闻抓取与维护(data/news.js)
// 每日抓取多源 AI 新闻:TechCrunch AI / The Verge AI / Hacker News Algolia / 极客公园 / InfoQ。
// 流程:抓取 -> 解析(RSS/Atom/JSON)-> AI 关键词过滤 -> 与旧文件合并去重 -> 保留最近 N 天
//       -> 每源每日上限 + 总量上限 -> 差异写入 data/news.js(window.NEWS)。
// 与 seen.js 同模式:在 fetch_all.js 末尾旁路调用,不进基准 registry(避免污染 quality.js 完整性校验)。
// fail-soft:单源失败不影响其余源;全部失败时保留旧文件(由 writers.writeFileIfChanged 保证)。
"use strict";
const CONFIG = require("./config");
const transport = require("./transport");
const writers = require("./writers");

// ===== 文本工具 =====
// 剥 HTML 标签 + 反转义 + 数字实体解码 + 压缩空白(含 CDATA 标记剥离)
function cleanText(s) {
  return transport.htmlDecode(String(s || ""))
    .replace(/<!\[CDATA\[|\]\]>/g, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/&#x([0-9a-fA-F]+);/g, function (m, h) { return String.fromCodePoint(parseInt(h, 16)); })
    .replace(/&#(\d+);/g, function (m, d) { return String.fromCodePoint(Number(d)); })
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

// 摘要截断:超长时在词边界截断并追加省略号
function truncate(s, maxLen) {
  s = String(s || "");
  if (s.length <= maxLen) return s;
  return s.slice(0, maxLen).replace(/[\s,.;:!?，。；：、]+$/, "") + "…";
}

// 日期归一:支持 RFC 2822 / ISO 8601 / 36氪 "YYYY-MM-DD HH:MM:SS ±ZZZZ" 等,
// 解析失败回退为 fallback;统一返回 UTC 日期串 YYYY-MM-DD(与 CONFIG.TODAY 口径一致)。
function normalizeDate(raw, fallback) {
  var s = String(raw || "").trim();
  if (!s) return fallback;
  // 36kr 非标准格式:"2026-08-11 21:26:26 +0800" -> "2026-08-11T21:26:26+08:00"
  var m = s.match(/^(\d{4}-\d{2}-\d{2})\s+(\d{2}:\d{2}:\d{2})\s*([+-]\d{2}):?(\d{2})?$/);
  if (m) s = m[1] + "T" + m[2] + m[3] + (m[4] ? ":" + m[4] : ":00");
  var t = Date.parse(s);
  if (isNaN(t)) return fallback;
  return new Date(t).toISOString().slice(0, 10);
}

// ===== RSS / Atom 解析 =====
// 提取 <item>/(RSS 2.0)或 <entry>(Atom)条目,返回 [{title, link, dateRaw, desc}]
function parseFeed(xml, type) {
  var blockRe = type === "atom" ? /<entry[\s\S]*?<\/entry>/g : /<item[\s\S]*?<\/item>/g;
  var blocks = xml.match(blockRe) || [];
  return blocks.map(function (b) {
    // 字段提取:优先取标签内文本;link 兼容 Atom 的 href 属性与 RSS 的标签内 URL
    function field(tag) {
      var m = b.match(new RegExp("<" + tag + "[^>]*>([\\s\\S]*?)<\\/" + tag + ">"));
      return m ? cleanText(m[1]) : "";
    }
    var hrefM = b.match(/<link[^>]*href\s*=\s*["']([^"']+)["']/);
    var link = hrefM ? hrefM[1] : field("link");
    var title = field("title");
    var dateRaw = field(type === "atom" ? "published" : "pubDate") || field("updated");
    var desc = field(type === "atom" ? "summary" : "description");
    if (!title || !link) return null;
    return { title: title, link: link, dateRaw: dateRaw, desc: desc };
  }).filter(Boolean);
}

// ===== Hacker News Algolia JSON 解析 =====
function parseHN(jsonText) {
  var data = JSON.parse(jsonText);
  return (data.hits || []).map(function (h) {
    return {
      title: cleanText(h.title || ""),
      link: h.url || ("https://news.ycombinator.com/item?id=" + h.objectID),
      dateRaw: h.created_at || "",
      desc: ""
    };
  }).filter(function (p) { return p.title; });
}

// ===== AI 相关性过滤 =====
// 纯 ASCII 关键词加词边界并兼容复数(如 agent/agents),避免 "ai" 误命中 email/said/available 等;
// 中文关键词(含 CJK)不做边界处理。
function buildKeywordRegex() {
  var kws = CONFIG.news.keywords || [];
  var parts = kws.map(function (k) {
    k = String(k).trim();
    if (!k) return "";
    if (/^[a-zA-Z0-9 ]+$/.test(k)) {
      var kw = k.replace(/\s+/g, "\\s+");
      return "\\b" + kw + (kw.slice(-1) === "s" ? "" : "s?") + "\\b";
    }
    return k;
  }).filter(Boolean);
  if (!parts.length) return null;
  return new RegExp(parts.join("|"), "i");
}

// ===== 保留策略 =====
// 日期串均为 YYYY-MM-DD,字典序即时间序
function addDays(dateStr, delta) {
  var d = new Date(dateStr + "T00:00:00Z");
  d.setUTCDate(d.getUTCDate() + delta);
  return d.toISOString().slice(0, 10);
}
function dedupeByUrl(items) {
  var seen = {}, out = [];
  items.forEach(function (it) {
    if (seen[it.url]) return;
    seen[it.url] = true;
    out.push(it);
  });
  return out;
}
// 每源每天上限(先按日期降序排序,保留每源每天最新的若干条)
function applyPerDayCaps(items) {
  var count = {};
  return items.filter(function (it) {
    var k = it.source + "|" + it.date;
    count[k] = (count[k] || 0) + 1;
    return count[k] <= CONFIG.news.maxPerDayPerSource;
  });
}

// ===== 单源抓取 =====
// 返回 { name, total, kept, items };内部 try/catch,失败不影响其余源
async function fetchSource(src, today) {
  try {
    var text = await transport.fetchWithRetry(src.url, { retries: 2 });
    var parsed = src.type === "hn" ? parseHN(text) : parseFeed(text, src.type);
    var re = buildKeywordRegex();
    var items = [];
    parsed.forEach(function (p) {
      var text2 = (p.title + " " + p.desc).trim();
      if (!re || re.test(text2)) {
        items.push({
          date: normalizeDate(p.dateRaw, today),
          title: truncate(p.title, 120),
          brief: p.desc ? truncate(p.desc, 140) : truncate(p.title, 140),
          url: p.link,
          source: src.name
        });
      }
    });
    console.log("  [news][" + src.name + "] 解析 " + parsed.length + " 条,保留 " + items.length + " 条");
    return { name: src.name, items: items };
  } catch (e) {
    console.log("  [news][" + src.name + "] 抓取失败: " + e.message);
    return { name: src.name, items: [] };
  }
}

// ===== 翻译(英文 -> 中文) =====
// 是否已含中文字符(CJK 统一表意文字);含中文则无需翻译
function hasCJK(s) { return /[\u4e00-\u9fff]/.test(String(s || "")); }

// 调用免费翻译接口(依次尝试 config.news.translate.endpoints);
// 成功返回译文;失败或配额耗尽返回 null(由调用方保留原文)
async function translateToZh(text) {
  var cfg = CONFIG.news.translate || {};
  var q = encodeURIComponent(text);
  for (var i = 0; i < (cfg.endpoints || []).length; i++) {
    try {
      var resp = await transport.fetchWithRetry(cfg.endpoints[i].url + q, { retries: 1 });
      var data = JSON.parse(resp);
      if (data && data.quotaFinished === true) return null; // 配额耗尽,停止尝试
      if (data && data.responseData && data.responseData.translatedText) {
        var out = cleanText(data.responseData.translatedText);
        if (out) return out;
      }
    } catch (e) { /* 接口失败,尝试下一个 */ }
  }
  return null;
}

// ===== 新闻类型分类 =====
// 依 config.news.types 顺序优先匹配(标题+简要命中关键词即归类);
// model 类型需同时命中 modelHints(模型特征词);未命中归入 fallbackType
function classifyType(item) {
  var types = CONFIG.news.types || [];
  var fallback = CONFIG.news.fallbackType || "行业动态";
  var text = (item.title + " " + item.brief).toLowerCase();
  for (var i = 0; i < types.length; i++) {
    var t = types[i];
    if (!t.keywords) continue;
    if (!new RegExp(t.keywords, "i").test(text)) continue;
    if (t.modelHints && !new RegExp(t.modelHints, "i").test(text)) continue;
    return t.label;
  }
  return fallback;
}

// 每类型上限:按(已按日期降序的)顺序保留每类型最新若干条
function applyTypeCaps(items, maxPerType) {
  var count = {};
  return items.filter(function (it) {
    var k = it.type || CONFIG.news.fallbackType || "行业动态";
    count[k] = (count[k] || 0) + 1;
    return count[k] <= maxPerType;
  });
}

// ===== 主入口:抓取 -> 合并去重 -> 2 天裁剪 -> 分类 -> 每类型上限 -> 翻译 -> 差异写入 =====
async function updateNews() {
  console.log("[news] 抓取 AI 热点新闻 data/news.js");
  var cfg = CONFIG.news;
  var today = CONFIG.TODAY;

  // 1) 并发抓取各源(transport 层负责全局并发与 per-host 限流)
  var results = await Promise.all(cfg.sources.map(function (src) { return fetchSource(src, today); }));
  var fresh = [];
  results.forEach(function (r) { fresh = fresh.concat(r.items); });

  // 2) 与旧文件合并 -> 按 URL 去重(新条目优先,覆盖旧条目)
  var old = writers.loadJsGlobal(cfg.outFile, cfg.windowVar);
  var oldItems = (old && Array.isArray(old.items)) ? old.items : [];
  var merged = dedupeByUrl(fresh.concat(oldItems));

  // 3) 保留最近 retentionDays 个自然日(含今天)
  var cutoff = addDays(today, -(cfg.retentionDays - 1));
  merged = merged.filter(function (it) { return it.date >= cutoff; });

  // 4) 按日期降序 -> 每源每天上限
  merged.sort(function (a, b) { return a.date === b.date ? 0 : (a.date > b.date ? -1 : 1); });
  merged = applyPerDayCaps(merged);

  // 5) 类型分类(在翻译前对原文分类,减少待翻译条目) -> 每类型上限 -> 总量兜底
  merged.forEach(function (it) { it.type = classifyType(it); });
  merged = applyTypeCaps(merged, cfg.maxPerType);
  if (merged.length > cfg.maxTotal) merged = merged.slice(0, cfg.maxTotal);

  // 6) 英文条目翻译为中文(复用旧文件已翻译文本,减少配额;失败保留原文)
  var translateCfg = cfg.translate || {};
  var transCount = 0, reuseCount = 0, failCount = 0;
  if (translateCfg.enabled && merged.length) {
    // 旧文件中已含中文的条目按 URL 建索引,同 URL 新条目直接复用其译文
    var oldMap = {};
    oldItems.forEach(function (it) { if (hasCJK(it.title)) oldMap[it.url] = it; });
    for (var i = 0; i < merged.length; i++) {
      var it = merged[i];
      if (hasCJK(it.title)) continue; // 已是中文(中文源或历史已翻译)
      var cached = oldMap[it.url];
      if (cached) { it.title = cached.title; it.brief = cached.brief; reuseCount++; continue; }
      var origTitle = it.title, origBrief = it.brief;
      var tTitle = await translateToZh(origTitle);
      if (!tTitle) { failCount++; continue; }
      it.title = tTitle;
      if (origBrief && origBrief !== origTitle) {
        var tBrief = await translateToZh(origBrief);
        it.brief = tBrief || origBrief; // 摘要翻译失败时保留原文摘要
      } else {
        it.brief = tTitle; // 无独立摘要(如 Hacker News),直接用标题译文
      }
      transCount++;
    }
    console.log("[news] 翻译:" + transCount + " 条成功,复用 " + reuseCount + " 条,失败 " + failCount + " 条");
  }

  // 7) 差异写入(内容不变时不提交)
  var payload = {
    updated: today,
    retentionDays: cfg.retentionDays,
    types: (cfg.typeDisplayOrder || []).slice(), // 前端按此顺序分类型展示
    items: merged
  };
  var header =
    "// AI 热点新闻快照(由 scripts/lib/news.js 每日抓取维护,每日 2 次)\n" +
    "// 来源:TechCrunch AI / The Verge AI / Hacker News / 极客公园 / InfoQ;仅保留最近 " + cfg.retentionDays + " 天\n" +
    "// 字段说明:date=新闻日期(UTC);title=标题;brief=简要;url=详情链接;source=来源;type=新闻类型\n";
  // 单引号序列化:先转义值内撇号再替换双引号,保证 "OpenAI's ..." 等标题语法安全
  var body = JSON.stringify(payload, null, 2).replace(/'/g, "\\'").replace(/"/g, "'");
  writers.writeWindowVar(cfg.outFile, cfg.windowVar, header + "window." + cfg.windowVar + " = " + body + ";\n");
  console.log("[news] 完成:保留 " + merged.length + " 条(今日新抓 " + fresh.length + " 条)");
  return merged;
}

module.exports = {
  updateNews: updateNews,
  // 导出解析工具,便于单测
  cleanText: cleanText,
  truncate: truncate,
  normalizeDate: normalizeDate,
  parseFeed: parseFeed,
  parseHN: parseHN,
  buildKeywordRegex: buildKeywordRegex,
  hasCJK: hasCJK,
  translateToZh: translateToZh,
  classifyType: classifyType,
  applyTypeCaps: applyTypeCaps
};
