// 清洗与标准化管道:把各源特定结构转换为统一 schema,供交叉验证引擎消费
//
// 统一 schema:
//   {
//     sourceId: string,        // 源标识(如 "deepswe_v11")
//     name: string,            // 原始模型名
//     canonId: string,         // 经别名表归并后的 canonical id
//     score: number | null,    // 统一为 0-100 百分制
//     rank: number | null,     // 源内排名(0=头名)
//     updated: string,         // YYYY-MM-DD
//     metrics: { cost, latencyS, steps, outTok, ci, ... },  // 源特有,可缺
//     meta:   { vendor, license, params, releaseDate }      // 可选
//   }
"use strict";
const modelMap = require("./model-map");

// 构造一条标准化记录(字段缺省值兜底)
function record(fields) {
  var r = fields || {};
  var name = r.name || "";
  var c = modelMap.canon(name);
  return {
    sourceId: r.sourceId || "",
    name: name,
    canonId: c.id,
    vendor: c.vendor,
    color: c.color,
    score: r.score != null ? Number(r.score) : null,
    rank: r.rank != null ? r.rank : null,
    updated: r.updated || "",
    metrics: r.metrics || {},
    meta: r.meta || {}
  };
}

// 数值钳制到 [lo, hi];非法返回 null(用于清洗异常 score)
function clampNum(v, lo, hi) {
  var n = Number(v);
  if (!isFinite(n)) return null;
  if (n < lo) n = lo;
  if (n > hi) n = hi;
  return n;
}

// 把任意分数归一为 0-100 百分制
// - 已是 0-100:直接返回
// - 0-1 小数:×100
// - 0-4/0-5 等级制:×(100/max)
function toPercent(v, max) {
  if (v == null || v === "") return null;
  var n = Number(v);
  if (!isFinite(n)) return null;
  if (max != null && max > 0) return Math.round(n / max * 1000) / 10;   // 显式等级制
  if (n >= 0 && n <= 1.5) return Math.round(n * 1000) / 10;             // 视为 0-1
  return Math.round(n * 10) / 10;                                       // 视为已是百分制
}

// 批量构造(源特定数组 -> 标准记录数组)
// mapFn(item, idx) -> fields object
function fromArray(sourceId, items, mapFn) {
  return (items || []).map(function (item, idx) {
    var f = mapFn(item, idx) || {};
    f.sourceId = sourceId;
    if (f.rank == null) f.rank = idx;
    return record(f);
  });
}

module.exports = {
  record: record,
  clampNum: clampNum,
  toPercent: toPercent,
  fromArray: fromArray
};
