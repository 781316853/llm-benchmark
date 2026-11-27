// 按渠道层级合并多源基准数据(统一 hle/nl2repo/tbench_v21/arcagi3/lastexam 的合并逻辑)。
// 层级定义见 CONFIG.srcTiers(数值越小越权威):
//   T1 基准官方实测榜 / 站主实测 > T2 厂商官方发布(论文/发布页)> T3 第三方聚合与镜像。
// 裁决规则(见计划文档 B 节):
//   1. 键不存在 -> 直接建条;
//   2. 来源层级更高(tier 更小)-> 覆盖 score,模型名取更长者,回填缺失字段,src 改为高层级;
//   3. 同层级 -> 保留较高分(同层内维持"取最高"现状);
//   4. 来源层级更低 -> 不改 score,仅回填高层级为 null 的字段;
//   5. 规则 2/4 触发且跨层级分差 > CONFIG.tierConflictDelta -> 控制台记录口径冲突,便于人工核对;
//   6. 保留双向后缀(≥5 字符)匹配以处理短名/全名差异;values() 按 score 降序并重编 rank。
// opts.fillOnly:纯补缺渠道(如 AI Release Tracker 聚合榜)——只新增缺失模型,
//   已存在的模型一律不动(不覆盖分数、也不回填字段),避免聚合值改动主渠道数据。
// 约定:调用方在 add() 前把各源记录映射为统一字段(model/score 必填,其余可选),
//       合并器原样保留额外字段(effort/date/agent/tokens 等)。
"use strict";
const CONFIG = require("./config");

// 模型名归一键(与 js/data.js / model-map.js 同规则):小写 + 非字母数字折叠为连字符
function normKey(s) {
  return String(s || "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

// 层级查表(未知 src 归为最低层级 T3)
function tierOf(src) {
  var t = CONFIG.srcTiers[src];
  return t == null ? 3 : t;
}

// 回填:仅填 existing 为 null/undefined 的字段(score/model/rank 不在此处理)
function fillNulls(existing, incoming) {
  Object.keys(incoming).forEach(function (f) {
    if (f === "score" || f === "model" || f === "rank" || f === "src") return;
    if (existing[f] == null && incoming[f] != null) existing[f] = incoming[f];
  });
}

function createTierMerger(opts) {
  opts = opts || {};
  var aliases = opts.aliases || {};
  var conflictDelta = opts.conflictDelta != null ? opts.conflictDelta : CONFIG.tierConflictDelta;
  var entries = {}; // key -> { rec, tier, src }

  function aliasKey(k) { return aliases[k] || k; }

  // 词序无关键(仅作 findKey 的最后兜底):同一模型在不同渠道常换词序书写
  // (「Claude Opus 4.5」vs「Opus 4.5」vs「Claude 4.5 Opus」、「Gemma 4 31B」vs「Gemma4-31B」),
  // 精确键与后缀匹配都认不出,会留下同模型两行。
  // 规则:
  //   1) 纯厂商前缀词(claude/anthropic/openai/google)视为可省略——渠道常省写厂商名;
  //      只放真正的厂商名,模型名(gemma/qwen/glm/gpt 等)绝不能进这张表,否则会误并;
  //   2) 字母词按字典序排列(词序无关),数字保持原出现顺序(版本号顺序有意义,
  //      「GPT-5.4」得到 5-4、「GPT-4.5」得到 4-5,不会被误并);
  //   3) 纯数字/符号名返回 null(没有字母词可依据,合并风险大于收益)。
  // ⚠ 该键只在分数相同时启用(见 findKey):同模型不同来源给不同分属口径差异,
  //   强行合并会掩盖分歧,只合并「分数完全一致」的纯写法重复。
  const VENDOR_WORDS = { claude: 1, anthropic: 1, openai: 1, google: 1 };

  function variantKey(name) {
    // 先把小数点折成连字符:findKey 收到的键来自 normKey(点号已折叠),
    // 而比对对象是原始模型名(仍带点),不统一会出现「4-5」与「4.5」对不上。
    var s = String(name || "").toLowerCase().replace(/\./g, "-");
    var words = (s.match(/[a-z]+/g) || []).filter(function (w) { return !VENDOR_WORDS[w]; });
    if (!words.length) return null;
    var nums = (s.match(/[0-9]+/g) || []).join("-");
    return words.sort().join("") + "|" + nums;
  }

  // 命中已有条目的键:先精确(经别名),再双向后缀匹配(≥5 字符),最后词序无关兜底。
  // score 仅用于词序兜底:分数不同时不做词序合并,保留两行供人工核对口径。
  function findKey(nk, score) {
    var k = aliasKey(nk);
    if (entries[k]) return k;
    if (nk.length >= 5) {
      var hit = Object.keys(entries).filter(function (key) {
        var ek = normKey(entries[key].rec.model);
        return (ek.length >= 5 && nk.endsWith(ek)) || (ek.length >= 5 && ek.endsWith(nk));
      })[0];
      if (hit) return hit;
    }
    var vk = variantKey(nk);
    if (vk) {
      var hitV = Object.keys(entries).filter(function (key) {
        var e = entries[key];
        if (score != null && e.rec.score !== score) return false;
        return variantKey(e.rec.model) === vk;
      })[0];
      if (hitV) return hitV;
    }
    return null;
  }

  function logConflict(ex, name, score, src) {
    var d = Math.abs(score - ex.rec.score);
    if (d > conflictDelta) {
      console.log("  [tier] 口径冲突 " + name + ": " + ex.src + " " + ex.rec.score +
        " vs " + src + " " + score + "(Δ" + Math.round(d * 10) / 10 + ",取高层级 " + ex.src + ")");
    }
  }

  // 加入一路数据源:records 需已含 model/score;src 为渠道标签(据此定级)
  // opts.fillOnly=true 时只补缺失模型,已存在条目原样保留
  function add(records, src, opts) {
    var tier = tierOf(src);
    var fillOnly = !!(opts && opts.fillOnly);
    (records || []).forEach(function (m) {
      var name = String(m.model != null ? m.model : m.name).trim();
      if (!name) return;
      var score = m.score;
      if (score == null || !isFinite(score)) return;
      var nk = normKey(name);
      var k = findKey(nk, score);
      if (!k) {
        var rec = Object.assign({}, m, { model: name, score: score, src: src });
        delete rec.name;
        entries[aliasKey(nk)] = { rec: rec, tier: tier, src: src };
        return;
      }
      if (fillOnly) return;
      var ex = entries[k];
      if (tier < ex.tier) {
        // 高层级覆盖:改 score,模型名取更长者,回填缺失字段,升级 src/tier
        logConflict(ex, name, score, src);
        ex.rec.score = score;
        if (name.length >= ex.rec.model.length) ex.rec.model = name;
        fillNulls(ex.rec, m);
        ex.tier = tier; ex.src = src; ex.rec.src = src;
      } else if (tier === ex.tier) {
        // 同层级:保留较高分
        if (score > ex.rec.score) {
          ex.rec.score = score;
          if (name.length >= ex.rec.model.length) ex.rec.model = name;
          fillNulls(ex.rec, m);
          ex.src = src; ex.rec.src = src;
        } else {
          fillNulls(ex.rec, m);
        }
      } else {
        // 低层级:不改 score,仅回填 null 字段;分差过大时记录
        logConflict(ex, name, score, src);
        if (name.length > ex.rec.model.length) ex.rec.model = name;
        fillNulls(ex.rec, m);
      }
    });
  }

  // 输出:按 score 降序排序并重编 rank(从 1 起);每条含 src 字段
  function values() {
    var list = Object.keys(entries).map(function (k) { return entries[k].rec; });
    list.sort(function (a, b) { return b.score - a.score; });
    list.forEach(function (m, i) { m.rank = i + 1; });
    return list;
  }

  return { add: add, values: values, entries: entries, normKey: normKey };
}

module.exports = { createTierMerger: createTierMerger, normKey: normKey, tierOf: tierOf };
