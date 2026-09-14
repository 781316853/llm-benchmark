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

  // 命中已有条目的键:先精确(经别名),再双向后缀匹配(≥5 字符)
  function findKey(nk) {
    var k = aliasKey(nk);
    if (entries[k]) return k;
    if (nk.length >= 5) {
      var hit = Object.keys(entries).filter(function (key) {
        var ek = normKey(entries[key].rec.model);
        return (ek.length >= 5 && nk.endsWith(ek)) || (ek.length >= 5 && ek.endsWith(nk));
      })[0];
      if (hit) return hit;
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
  function add(records, src) {
    var tier = tierOf(src);
    (records || []).forEach(function (m) {
      var name = String(m.model != null ? m.model : m.name).trim();
      if (!name) return;
      var score = m.score;
      if (score == null || !isFinite(score)) return;
      var nk = normKey(name);
      var k = findKey(nk);
      if (!k) {
        var rec = Object.assign({}, m, { model: name, score: score, src: src });
        delete rec.name;
        entries[aliasKey(nk)] = { rec: rec, tier: tier, src: src };
        return;
      }
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
