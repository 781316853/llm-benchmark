// Agent 工具更新日志的「月度新增功能」派生模块(data/changelog-monthly.js)
//
// 输入是 scripts/lib/changelog.js 本轮快照(tools[].entries[]),输出按月分组的
// 新增功能条目。抽取规则按 12 个工具的真实正文结构适配,不依赖固定模板:
//   - Markdown 小节(## New Features / ### Minor Changes / ### Highlights)
//   - 扁平小节标签(新增功能 / 功能更新 / 新功能 / 体验优化 / 问题修复,可能带 "- " 前缀)
//   - 无小节标签的扁平 bullet(WorkBuddy / TraeWork),按行首动词排除修复/优化
//
// 去重口径:
//   ① 同一条目内中英双语并列时只取中文段(DeepSeek Harness);
//   ② 同工具全生命周期按归一化文本去重,保留最早日期(条目的月份 = 首次出现月);
//   ③ 同月跨工具归一化文本完全相同 -> 合并为 multi 条目,并列工具与各自源链接。
//   不做近似/语义合并:实测同月跨工具完全相同仅 2 组,近似合并的误伤大于收益。
//
// carry-forward:上一版 monthly 里已有的 (tool|url|version) 条目直接沿用其 text,
// 只对新增条目重新抽取。这样 data/changelog.js 的正文被翻译后,再构建也不会漂移。
"use strict";
const CONFIG = require("./config");
const writers = require("./writers");
const news = require("./news");
const translate = require("./translate");

// ===== 标签表 =====
const FEATURE_LABELS = new Set([
  "新增功能", "新功能", "功能", "功能更新", "功能发布", "功能新增", "新增", "新特性", "特性",
  "新增能力", "新增特性", "新能力", "新增内容", "主要更新", "功能升级", "新功能上线", "全新功能",
  "功能亮点", "亮点", "更新内容", "重要更新", "新增功能与改进",
  "new features", "new feature", "features", "feature", "highlights", "minor changes",
  "major changes", "added", "additions", "new"
]);
const OTHER_LABELS = new Set([
  "体验优化", "优化", "改进", "功能优化", "问题修复", "修复", "缺陷修复", "bug修复", "bug 修复",
  "其他变更", "其他", "文档", "文档更新", "配置", "配置更新", "重构", "测试", "性能", "安全",
  "移除", "废弃", "兼容性", "依赖更新", "已知问题", "注意事项", "公告",
  "bug fixes", "bug fix", "bugfixes", "bugfix", "fixes", "patches", "patch changes", "chores",
  "documentation", "docs", "improvements", "improvement", "refactor", "tests", "test", "ci",
  "build", "dependencies", "security", "performance", "deprecations", "miscellaneous",
  "known issues", "breaking changes", "internal"
]);

const FEATURE_VERB_ZH = /^(新增|新加|支持|添加|加入|推出|上线|引入|增加|现在支持|现已支持|允许|提供|启用|开放|可以|全新)/;
const FEATURE_VERB_EN = /^(added|add |new\b|introduced|supports?|now (?:allows|supports|shows|lets|you can)|enabled|lets you|can now|allows you|you can now|exposes?|integrates?|brings?)/i;
const FIX_VERB_ZH = /^(修复|修正|优化|改进|调整|减少|降低|移除|删掉|下线|废弃|文档|重构|测试|构建|依赖|安全|性能|回退|回滚|更新了|已知问题|注意)/;
const FIX_VERB_EN = /^(fix|fixed|fixes|bug|revert|remove|deprecat|docs?|refactor|tests?|chore|ci|build|deps?|dependenc|perf|performance|polish|bump|update|updated|changed|improve|improved|migrat)/i;

// ===== 文本工具 =====
function fnv1a(s) {
  var h = 0x811c9dc5;
  s = String(s || "");
  for (var i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = (h * 0x01000193) >>> 0;
  }
  return h.toString(16);
}

// 去重键:大小写/全半角/标点/空白/emoji 全部归一,只留字母数字
function normalizeFeature(s) {
  return String(s || "").normalize("NFKC").toLowerCase()
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/[\p{Extended_Pictographic}\uFE0F\u200D]/gu, "")
    .replace(/[`*_~>#]/g, "")
    .replace(/[^\p{L}\p{N}]+/gu, "")
    .trim();
}

function featureKey(s) {
  var n = normalizeFeature(s);
  return n ? fnv1a(n) + "-" + n.length : "";
}

function cleanLabel(s) {
  return String(s || "")
    .replace(/[\p{Extended_Pictographic}\uFE0F\u200D]/gu, "")
    .replace(/^[\s\-*•]+/, "")
    .replace(/[：:\s]+$/, "")
    .replace(/\s+/g, " ")
    .trim();
}

// bullet 清洗:去 Markdown 链接/PR 号/hash/致谢/emoji/行首符号与行尾标点
function cleanBullet(s) {
  var t = String(s || "")
    .replace(/<[^>]+>/g, " ")
    .replace(/^[\s\-*•>]+/, "")
    .replace(/^\d+[.)]\s+/, "")
    .replace(/!?\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/https?:\/\/\S+/g, "")
    .replace(/\(?#\d+\)?/g, "")
    .replace(/\b[0-9a-f]{7,40}\b/gi, "")
    .replace(/thanks\s+@[\w-]+/ig, "")
    .replace(/co-authored-by:.*$/i, "")
    .replace(/[\p{Extended_Pictographic}\uFE0F\u200D\u200b-\u200d\ufeff]/gu, "")
    .replace(/`|~~|\*\*/g, "")
    // changesets / conventional commit 前缀:只剥 feat,fix/chore 等保留给过滤器识别
    .replace(/^(?:feat|feature)(?:\([^)]*\))?\s*:\s*/i, "")
    // "by @user in" / "by @user" / 结尾的 (thanks)
    .replace(/\s+by\s+@[\w-]+(?:\s+in)?\s*$/i, "")
    .replace(/\s*\(@[\w-]+\)\s*$/, "")
    .replace(/\s+in\s*$/i, "")
    .replace(/^[\s\-*•>]+/, "")
    .replace(/\s+/g, " ")
    .replace(/^[\s,，、;；.。:：]+/, "")
    .replace(/[\s,，、;；.。:：]+$/, "")
    .trim();
  return t;
}

// 明显不是功能的噪声(贡献者名单、测试/依赖提交、纯维护短语)
function isNoiseText(t) {
  if (/^@[\w-]+:?$/.test(t)) return true;
  if (/^@[\w-]+\s+made their first contribution/i.test(t)) return true;
  if (/^(add|added|new)\s+(tests?|test coverage|lint|types?|deps?|dependencies|docs?|ci|build|changelog)\b/i.test(t)) return true;
  if (/^(merge pull request|revert\b|bump\b|release\b)/i.test(t)) return true;
  if (/^(稳定性|性能|体验)(增加|提升|优化|改进)$/.test(t)) return true;
  if (/(问题修复|修复|优化)$/.test(t) && t.length <= 16) return true;
  // 发布产物校验和(Codex 仓库会混入 libcap 等源码镜像的 release)
  if (/\b[0-9a-f]{40,}\b/i.test(t)) return true;
  if (/^[\w.-]+\.(tar\.(gz|xz|bz2)|zip|tgz)\b/i.test(t) && /sha-?256|checksum|hash/i.test(t)) return true;
  return false;
}

function isVersionOnly(t) {
  return /^v?\d+(\.\d+){1,3}\s*(版本)?\s*(正式)?\s*(发布|更新|上线)?$/i.test(t) ||
    /^版本\s*v?\d/i.test(t) ||
    /^\d{4}[-/年]\d{1,2}[-/月]\d{1,2}日?$/.test(t);
}

function isReleaseBoundary(line) {
  return /^\d+\.\d+(\.\d+)?\s*[（(]?\d{4}[-年]/.test(line) ||
    /^\d+\.\d+\.\d+\s*版本发布/.test(line) ||
    /^\d{4}年\d{1,2}月\d{1,2}日$/.test(line) ||
    /^v?\d+\.\d+\.\d+\s*$/i.test(line);
}

// 贡献者致谢/变更对比链接之后的内容都不属于本版本更新(OpenCode、Kimi 实测)
const STOP_LINE = /^(?:#{1,4}\s*)?\*{0,2}(thank you|full changelog|contributors?\b|community contributors)/i;

// ===== 正文分节 =====
// 返回 [{label, items[]}];label 为空表示无标签的裸 bullet 段
function sectionize(body) {
  var lines = String(body || "").replace(/\r/g, "").split("\n");
  var sections = [], current = null, seenBullet = false;

  function push(label) {
    current = { label: label, items: [] };
    sections.push(current);
  }

  for (var i = 0; i < lines.length; i++) {
    var raw = lines[i], line = raw.trim();
    if (!line) continue;
    var isBullet = /^[-*•]\s+/.test(line) || /^\d+[.)]\s+/.test(line);

    // 致谢/贡献者/Full Changelog 之后不再是本版本的功能内容
    if (!isBullet && STOP_LINE.test(line)) break;
    // 正文尾部混入下一条 release(CodeBuddy/WorkBuddy 实测),在这里截断
    if (!isBullet && seenBullet && isReleaseBoundary(line)) break;
    if (isBullet) seenBullet = true;

    var label = null;
    var hm = line.match(/^#{1,4}\s+(.+?)\s*#*$/);
    if (hm) {
      label = cleanLabel(hm[1]);
    } else {
      var bm = line.match(/^[-*•]\s+(.+)$/);
      var cand = cleanLabel(bm ? bm[1] : line);
      if (cand && cand.length <= 14 && !/[。；，,;、]$/.test(cand) && isKnownLabel(cand)) label = cand;
    }
    if (label) { push(label); continue; }

    if (isBullet) {
      if (!current) push("");
      var txt = cleanBullet(line);
      if (txt && txt.length >= 6 && !isVersionOnly(txt) && !isNoiseText(txt)) current.items.push(txt);
    } else if (current && current.items.length && /^\s+/.test(raw)) {
      // 缩进续行并回上一条(不新开条目)
      current.items[current.items.length - 1] += " " + line;
    }
  }
  return sections;
}

function isKnownLabel(s) {
  var k = s.toLowerCase();
  return FEATURE_LABELS.has(k) || OTHER_LABELS.has(k);
}

function labelIsFeature(s) { return FEATURE_LABELS.has(String(s || "").toLowerCase()); }
function labelIsOther(s) { return OTHER_LABELS.has(String(s || "").toLowerCase()); }

// 从分节中挑出「新增功能」文本
function pickFeatureTexts(sections) {
  var feat = sections.filter(function (s) {
    return s.label && labelIsFeature(s.label) && s.items.length;
  });
  if (feat.length) {
    // 双语并列:只要有一组中文新增节,就丢弃纯英文新增节(DeepSeek Harness)
    var zhFeat = feat.filter(function (s) {
      return s.items.some(function (t) { return news.hasCJK(t); });
    });
    var chosen = zhFeat.length ? zhFeat : feat;
    return chosen.reduce(function (out, s) { return out.concat(s.items); }, []);
  }

  var neutral = sections.filter(function (s) {
    return !s.label || !labelIsOther(s.label);
  });
  var hasAnyLabel = sections.some(function (s) { return !!s.label; });
  var out = [];
  neutral.forEach(function (s) {
    var list = s.items;
    if (hasAnyLabel) {
      // 中性小节(What's changed / Changelog / Core 等):按新增动词过滤
      list = list.filter(function (t) {
        return (FEATURE_VERB_ZH.test(t) || FEATURE_VERB_EN.test(t)) &&
          !(FIX_VERB_ZH.test(t) || FIX_VERB_EN.test(t));
      });
    } else {
      // 整条没有任何小节标签:全部 bullet 视为功能候选,只排除修复/优化类
      list = list.filter(function (t) {
        return !(FIX_VERB_ZH.test(t) || FIX_VERB_EN.test(t));
      });
    }
    out = out.concat(list);
  });
  return out;
}

// ===== 抽取 =====
function extractFeatures(tool, entries) {
  var out = [];
  (entries || []).forEach(function (e) {
    if (!e || !e.body || !e.date || !e.url) return;
    if (e.body.length < 20) return;
    var texts = pickFeatureTexts(sectionize(e.body));
    texts.forEach(function (text) {
      var key = featureKey(text);
      if (!key) return;
      out.push({ key: key, text: text, date: e.date, version: e.version || "", url: e.url });
    });
  });
  return out;
}

// ===== 上一版索引(carry-forward) =====
function indexPrev(prev) {
  var byEntry = new Map(), zh = (prev && prev.zh) || {};
  if (!prev || !Array.isArray(prev.months)) return { byEntry: byEntry, zh: zh };

  function add(toolId, it) {
    // date 必须参与:codex 同 tag 同版本会在相邻两天各发一次(共 5 组实测),只按 url|version 会串档
    var k = toolId + "|" + (it.url || "") + "|" + (it.version || "") + "|" + (it.date || "");
    if (!byEntry.has(k)) byEntry.set(k, []);
    byEntry.get(k).push({
      key: it.key, text: it.text, date: it.date,
      version: it.version || "", url: it.url
    });
  }
  prev.months.forEach(function (m) {
    (m.tools || []).forEach(function (t) {
      (t.items || []).forEach(function (it) { add(t.id, it); });
    });
    (m.multi || []).forEach(function (it) {
      (it.sources || []).forEach(function (src) {
        add(src.id, {
          key: it.key, text: it.text, date: src.date,
          version: src.version, url: src.url
        });
      });
    });
  });
  return { byEntry: byEntry, zh: zh };
}

function earliest(a, b) {
  if (!a) return b;
  if (!b) return a;
  return a.date < b.date ? a : (a.date > b.date ? b : (a.text.length >= b.text.length ? a : b));
}

// ===== 构建 =====
function buildDigest(opts) {
  var toolsSnapshot = opts.toolsSnapshot || [];
  var prev = indexPrev(opts.prevDigest);
  var perTool = []; // {tool, item}

  toolsSnapshot.forEach(function (tool) {
    var byKey = new Map();
    (tool.entries || []).forEach(function (e) {
      if (!e || !e.date) return;
      var ek = tool.id + "|" + (e.url || "") + "|" + (e.version || "") + "|" + (e.date || "");
      var carried = prev.byEntry.get(ek);
      var items = (carried || extractFeatures(tool, [e])).filter(function (it) {
        return !isNoiseText(it.text);   // 噪声规则升级后同样作用于 carry-forward 的旧条目
      });
      items.forEach(function (it) {
        var cur = {
          key: it.key,
          text: it.text,
          date: e.date,          // 日期以源站当前条目为准(源站修日期时同步)
          version: e.version || it.version || "",
          url: e.url || it.url
        };
        var old = byKey.get(cur.key);
        byKey.set(cur.key, earliest(old, cur));
      });
    });
    byKey.forEach(function (it) {
      perTool.push({ tool: tool, item: it });
    });
  });

  // 按月分组 + 同月跨工具合并
  var byMonth = new Map();
  perTool.forEach(function (x) {
    var mon = x.item.date.slice(0, 7);
    if (!byMonth.has(mon)) byMonth.set(mon, new Map());
    var g = byMonth.get(mon);
    if (!g.has(x.item.key)) g.set(x.item.key, []);
    g.get(x.item.key).push(x);
  });

  var toolOrder = {};
  toolsSnapshot.forEach(function (t, i) { toolOrder[t.id] = i; });

  var months = [];
  Array.from(byMonth.keys()).sort().reverse().forEach(function (mon) {
    var groups = byMonth.get(mon);
    var multi = [], toolsMap = new Map(), toolIds = new Set();

    groups.forEach(function (list, key) {
      list.sort(function (a, b) { return toolOrder[a.tool.id] - toolOrder[b.tool.id]; });
      var first = list[0];
      var texts = list.map(function (x) { return x.item.text; });
      var text = texts.sort(function (a, b) { return b.length - a.length; })[0];
      if (list.length > 1) {
        var sources = list.map(function (x) {
          return {
            id: x.tool.id, name: x.tool.name, vendor: x.tool.vendor,
            date: x.item.date, version: x.item.version, url: x.item.url
          };
        });
        multi.push({
          key: key, text: text, date: first.item.date,
          version: first.item.version, url: first.item.url, sources: sources
        });
        sources.forEach(function (s) { toolIds.add(s.id); });
      } else {
        var t = first.tool;
        if (!toolsMap.has(t.id)) {
          toolsMap.set(t.id, {
            id: t.id, name: t.name, vendor: t.vendor, status: t.status || "ok",
            changelogUrl: t.changelogUrl || "", items: []
          });
        }
        toolsMap.get(t.id).items.push({
          key: key, text: text, date: first.item.date,
          version: first.item.version, url: first.item.url
        });
        toolIds.add(t.id);
      }
    });

    var tools = Array.from(toolsMap.values()).sort(function (a, b) {
      return toolOrder[a.id] - toolOrder[b.id];
    });
    tools.forEach(function (t) {
      t.count = t.items.length;
      t.items.sort(function (a, b) {
        if (a.date !== b.date) return a.date < b.date ? 1 : -1;
        return a.key < b.key ? -1 : (a.key > b.key ? 1 : 0);
      });
    });
    multi.sort(function (a, b) {
      if (a.sources.length !== b.sources.length) return b.sources.length - a.sources.length;
      return a.key < b.key ? -1 : (a.key > b.key ? 1 : 0);
    });

    var y = mon.slice(0, 4), m = mon.slice(5, 7);
    months.push({
      month: mon,
      label: y + "年" + Number(m) + "月",
      count: tools.reduce(function (n, t) { return n + t.count; }, 0) + multi.length,
      toolCount: toolIds.size,
      multi: multi,
      tools: tools
    });
  });

  var afterToolDedupe = perTool.length;
  var afterMerge = months.reduce(function (n, m) { return n + m.count; }, 0);
  return {
    updated: opts.updated || CONFIG.TODAY,
    refreshedAt: opts.refreshedAt || CONFIG.REFRESHED_AT,
    stats: {
      months: months.length,
      afterToolDedupe: afterToolDedupe,   // 同工具跨版本去重后、跨工具合并前
      afterMerge: afterMerge,
      needsZh: 0, translated: 0, untranslated: 0
    },
    zh: {},
    months: months
  };
}

// ===== 译文合并 =====
// 机翻常见误译的固定修词(只改术语,不改句式;作用于所有来源的译文,包括历史缓存)
const ZH_FIXES = [
  [/成绩单/g, "会话记录"],          // transcript
  [/转弯/g, "轮次"],                // turn
  [/代币/g, "Token"],               // token
  [/子代理/g, "子 Agent"],          // subagent
  [/代理类型/g, "Agent 类型"],
  [/代理命令中心/g, "Agent 命令中心"],
  [/代理概述/g, "Agent 概述"],
  [/座席/g, "Agent"]                // agent(坐席/agent 混译)
];
function fixZh(s) {
  var t = String(s || "");
  ZH_FIXES.forEach(function (p) { t = t.replace(p[0], p[1]); });
  return t;
}

function collectTexts(payload) {
  var map = new Map();
  payload.months.forEach(function (m) {
    m.tools.forEach(function (t) {
      t.items.forEach(function (it) { if (!map.has(it.key)) map.set(it.key, it.text); });
    });
    m.multi.forEach(function (it) { if (!map.has(it.key)) map.set(it.key, it.text); });
  });
  return map;
}

async function applyZh(payload, prevZh, cfg) {
  var zh = Object.assign({}, prevZh || {});
  var texts = collectTexts(payload);
  var todo = [];
  texts.forEach(function (text, key) {
    if (!zh[key] && !news.hasCJK(text) && /[A-Za-z]{3}/.test(text)) todo.push({ key: key, text: text });
  });

  if (todo.length && cfg && cfg.enabled !== false) {
    var r = await translate.translateMany(todo, cfg);
    r.zh.forEach(function (v, k) { if (v && v !== texts.get(k)) zh[k] = v; });
    console.log("[digest] 翻译:待译 " + todo.length + " 条,本轮新译 " + r.zh.size +
      " 条(模型请求 " + r.modelCalls + " 次 / 免费接口 " + r.mymemoryCalls + " 次),失败 " + r.failed +
      " 条,已用 " + r.usedChars + " 字符");
  }

  // 只保留仍在汇总里的键,防止文件随历史无限膨胀
  var kept = {};
  Array.from(texts.keys()).sort().forEach(function (k) {
    if (zh[k]) kept[k] = fixZh(zh[k]);
  });
  payload.zh = kept;

  var needs = 0, translated = 0;
  texts.forEach(function (text, key) {
    if (news.hasCJK(text) || !/[A-Za-z]{3}/.test(text)) return;
    needs++;
    if (kept[key]) translated++;
  });
  payload.stats.needsZh = needs;
  payload.stats.translated = translated;
  payload.stats.untranslated = needs - translated;
  return payload;
}

// ===== 写盘 =====
function header() {
  return "// Agent 工具「月度新增功能」汇总(由 scripts/lib/changelog-digest.js 从 data/changelog.js 派生)\n" +
    "// 口径:只抽取新增功能类条目(修复/优化/文档/内部变更不计);按功能首次出现的版本日期归月;\n" +
    "//   同工具跨版本按归一化文本去重保留首次,同月跨工具完全相同合并为 multi 并保留各自源链接。\n" +
    "// 字段:months[]=month/label/count/toolCount/multi[]/tools[];\n" +
    "//   tools[].items[] 与 multi[] = key(译文缓存键)/text(源文本)/date/version/url;\n" +
    "//   multi[].sources[]=同月宣布同一功能的各工具(含各自 url);zh{} = key -> 中文译文(缺失时前端显示源文本并标「原文」)\n";
}

function writePayload(payload) {
  var cfg = CONFIG.changelogDigest;
  writers.writeWindowVar(cfg.outFile, cfg.windowVar,
    header() + "window." + cfg.windowVar + " = " +
    JSON.stringify(payload, null, 2).replace(/'/g, "\\'").replace(/"/g, "'") + ";\n");
}

// 管线入口:toolsSnapshot 必须在 applyTranslations 之前快照(保证新条目是英文原文)
async function updateDigest(toolsSnapshot) {
  var cfg = CONFIG.changelogDigest;
  var prev = writers.loadJsGlobal(cfg.outFile, cfg.windowVar);
  var payload;
  try {
    payload = buildDigest({ toolsSnapshot: toolsSnapshot, prevDigest: prev });
  } catch (e) {
    console.log("[digest] 构建失败:" + e.message);
    return null;
  }
  if (!payload.stats.afterMerge && prev && prev.months && prev.months.length) {
    console.log("[digest] 本轮抽取为空,保留上一版月度汇总不覆盖");
    return prev;
  }
  try {
    await applyZh(payload, (prev && prev.zh) || {}, cfg.translate);
  } catch (e) {
    console.log("[digest] 翻译失败,保留源文本:" + e.message);
    payload.zh = (prev && prev.zh) || {};
  }
  writePayload(payload);
  console.log("[digest] 完成:" + payload.stats.months + " 个月," + payload.stats.afterMerge +
    " 项新增(工具内去重前 " + payload.stats.afterToolDedupe + " 条),译文覆盖 " +
    payload.stats.translated + "/" + payload.stats.needsZh);
  return payload;
}

module.exports = {
  extractFeatures: extractFeatures,
  sectionize: sectionize,
  pickFeatureTexts: pickFeatureTexts,
  normalizeFeature: normalizeFeature,
  featureKey: featureKey,
  cleanBullet: cleanBullet,
  buildDigest: buildDigest,
  applyZh: applyZh,
  collectTexts: collectTexts,
  writePayload: writePayload,
  updateDigest: updateDigest,
  FEATURE_LABELS: FEATURE_LABELS,
  OTHER_LABELS: OTHER_LABELS
};
