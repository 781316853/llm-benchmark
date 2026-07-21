// 三维交叉验证引擎:一致性 / 完整性 / 时效性
// 输入:各源 run() 产出的 standard 记录数组聚合 { sourceId -> [record,...] }
//        以及各源运行结果 { sourceId -> { ok, error, updated, ... } }
// 输出:{ consistency[], completeness{sourceId->rate}, timeliness{sourceId->ageDays/flag}, alerts[] }
"use strict";
const CONFIG = require("./config");

// ===== 一致性:同 canonical 模型跨源 score 标准差 =====
// 移植自 js/compare.js variance() 的标准差算法;仅对 score 非 null 且命中 ≥2 源的模型计算。
function consistency(recordsBySource) {
  // 先聚合:canonId -> [{sourceId, score}]
  var byCanon = {};
  Object.keys(recordsBySource).forEach(function (srcId) {
    (recordsBySource[srcId] || []).forEach(function (r) {
      if (r.score == null) return;          // 缺分数的记录不参与一致性
      if (!byCanon[r.canonId]) byCanon[r.canonId] = { canonId: r.canonId, name: r.name, vendor: r.vendor, samples: [] };
      byCanon[r.canonId].samples.push({ sourceId: srcId, score: r.score });
    });
  });
  var th = CONFIG.validation.consistency;
  var out = [];
  Object.keys(byCanon).forEach(function (k) {
    var e = byCanon[k];
    if (e.samples.length < 2) return;       // 单源无法做一致性
    var vs = e.samples.map(function (s) { return s.score; });
    var mean = vs.reduce(function (a, b) { return a + b; }, 0) / vs.length;
    var sumSq = vs.reduce(function (s, v) { var d = v - mean; return s + d * d; }, 0);
    var stddev = Math.sqrt(sumSq / vs.length);
    var flag = stddev <= th.okMaxStddev ? "ok" : (stddev <= th.warnMaxStddev ? "warn" : "alert");
    var scores = {};
    e.samples.forEach(function (s) { scores[s.sourceId] = s.score; });
    out.push({
      canonId: e.canonId, name: e.name, vendor: e.vendor,
      sources: e.samples.map(function (s) { return s.sourceId; }),
      scores: scores, mean: Math.round(mean * 10) / 10,
      stddev: Math.round(stddev * 100) / 100, flag: flag
    });
  });
  // 按标准差降序(最不一致的在前)
  out.sort(function (a, b) { return b.stddev - a.stddev; });
  return out;
}

// ===== 完整性:每条记录必填字段齐全率 + 源模型数 =====
function completeness(recordsBySource) {
  var req = CONFIG.validation.completeness.requiredFields;
  var th = CONFIG.validation.completeness;
  var per = {};       // sourceId -> { rate, total, complete, modelCount, missingFields }
  Object.keys(recordsBySource).forEach(function (srcId) {
    var recs = recordsBySource[srcId] || [];
    var total = recs.length;
    var complete = 0;
    var missField = {};
    recs.forEach(function (r) {
      var ok = true;
      req.forEach(function (f) {
        if (r[f] == null || r[f] === "") { ok = false; missField[f] = (missField[f] || 0) + 1; }
      });
      if (ok) complete++;
    });
    var rate = total ? complete / total : 0;
    per[srcId] = {
      rate: Math.round(rate * 1000) / 1000,
      total: total, complete: complete,
      modelCount: total,
      missingFields: missField,
      flag: (!total || total < th.minModels) ? "alert" : (rate < th.minFieldRate ? "warn" : "ok")
    };
  });
  return per;
}

// ===== 时效性:源 updated 与今天的天数差 =====
function parseDay(s) { return new Date(String(s) + "T00:00:00Z").getTime(); }
function dayDiff(a, b) { return Math.floor((parseDay(b) - parseDay(a)) / 86400000); }

function timeliness(sourceRuns, today) {
  var th = CONFIG.validation.timeliness;
  var per = {};
  Object.keys(sourceRuns).forEach(function (srcId) {
    var run = sourceRuns[srcId] || {};
    var updated = run.updated;
    var ageDays = null, flag = "ok";
    if (updated) {
      var d = dayDiff(updated, today);
      if (isFinite(d)) {
        ageDays = d;
        flag = d > th.alertAgeDays ? "alert" : (d > th.warnAgeDays ? "warn" : "ok");
      } else {
        flag = "warn";   // 非法日期
      }
    } else {
      flag = "warn";     // 缺 updated 字段
    }
    per[srcId] = { updated: updated, ageDays: ageDays, flag: flag };
  });
  return per;
}

// ===== 汇总告警 =====
function buildAlerts(cons, comp, time, sourceRuns) {
  var alerts = [];
  // 时效性告警
  Object.keys(time).forEach(function (srcId) {
    var t = time[srcId];
    if (t.flag === "alert") {
      alerts.push({ level: "error", dimension: "timeliness", sourceId: srcId,
        message: "数据已 " + t.ageDays + " 天未更新(>" + CONFIG.validation.timeliness.alertAgeDays + " 天)" });
    } else if (t.flag === "warn") {
      alerts.push({ level: "warn", dimension: "timeliness", sourceId: srcId,
        message: "数据已 " + (t.ageDays != null ? t.ageDays + " 天" : "未知时间") + "未更新" });
    }
  });
  // 完整性告警
  Object.keys(comp).forEach(function (srcId) {
    var c = comp[srcId];
    if (c.flag === "alert") {
      alerts.push({ level: "error", dimension: "completeness", sourceId: srcId,
        message: "模型数 " + c.modelCount + "(低于最小要求 " + CONFIG.validation.completeness.minModels + ")" });
    } else if (c.flag === "warn") {
      alerts.push({ level: "warn", dimension: "completeness", sourceId: srcId,
        message: "必填字段完整率 " + (c.rate * 100).toFixed(1) + "%(低于 " + (CONFIG.validation.completeness.minFieldRate * 100) + "%)" });
    }
  });
  // 一致性告警(只记 alert 级,warn 级信息在报告中但不重复进 alerts)
  cons.forEach(function (c) {
    if (c.flag === "alert") {
      alerts.push({ level: "error", dimension: "consistency", sourceId: c.sources.join(","),
        message: c.name + " 跨源分数标准差 " + c.stddev + "(>" + CONFIG.validation.consistency.warnMaxStddev + ")" });
    }
  });
  return alerts;
}

// 主入口:对全部源的运行结果做三维校验
function validate(args) {
  // recordsBySource:{ sourceId -> [record,...] }
  // sourceRuns:     { sourceId -> { ok, error, updated, modelCount, ... } }
  // today:          YYYY-MM-DD
  var recordsBySource = args.recordsBySource || {};
  var sourceRuns = args.sourceRuns || {};
  var today = args.today;
  var cons = consistency(recordsBySource);
  var comp = completeness(recordsBySource);
  var time = timeliness(sourceRuns, today);
  var alerts = buildAlerts(cons, comp, time, sourceRuns);
  return {
    consistency: cons,
    completeness: comp,
    timeliness: time,
    alerts: alerts
  };
}

module.exports = {
  validate: validate,
  consistency: consistency,
  completeness: completeness,
  timeliness: timeliness,
  buildAlerts: buildAlerts
};
