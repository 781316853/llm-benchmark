// 质量报告生成器:聚合各源运行结果 + 校验引擎输出,产出 data/quality.js(window.QUALITY)
// 前端不展示(留作后续迭代),仅供抓取端记录与 GitHub Actions 日志溯源。
"use strict";
const path = require("path");
const CONFIG = require("./config");
const writers = require("./writers");
const validator = require("./validator");

// 计算 overallScore:各源完整性均权(0-1)
function overallScore(completeness) {
  var keys = Object.keys(completeness);
  if (!keys.length) return 0;
  var sum = keys.reduce(function (s, k) { return s + (completeness[k].rate || 0); }, 0);
  return Math.round(sum / keys.length * 1000) / 1000;
}

// 生成并写入 data/quality.js
// args:
//   sourceRuns: { sourceId -> { ok, error, updated, modelCount, name, attempts } }
//   recordsBySource: { sourceId -> [record,...] }
function generate(args) {
  var sourceRuns = args.sourceRuns || {};
  var recordsBySource = args.recordsBySource || {};

  // 跑校验引擎
  var validation = validator.validate({
    recordsBySource: recordsBySource,
    sourceRuns: sourceRuns,
    today: CONFIG.TODAY
  });

  // 组装 sources[]
  var sources = Object.keys(sourceRuns).map(function (id) {
    var run = sourceRuns[id] || {};
    var comp = validation.completeness[id] || {};
    var time = validation.timeliness[id] || {};
    var status = !run.ok ? "error" : ((comp.flag === "alert" || time.flag === "alert") ? "warn" : "ok");
    return {
      id: id,
      name: run.name || id,
      status: status,
      modelCount: run.modelCount != null ? run.modelCount : (comp.modelCount || 0),
      updated: run.updated || null,
      ageDays: time.ageDays != null ? time.ageDays : null,
      completeness: comp.rate != null ? comp.rate : null,
      fetchAttempts: run.attempts || null,
      errors: run.error ? [run.error] : []
    };
  });

  var report = {
    generatedAt: CONFIG.TODAY,
    overallScore: overallScore(validation.completeness),
    sources: sources,
    consistency: validation.consistency,
    completeness: validation.completeness,
    timeliness: validation.timeliness,
    alerts: validation.alerts
  };

  // 写入 data/quality.js(window.QUALITY)
  var header =
    "// 数据质量报告(由 scripts/lib/quality-report.js 生成)\n" +
    "// 三维交叉验证:一致性(跨源分数标准差)/ 完整性(必填字段齐全率)/ 时效性(数据新鲜度)\n" +
    "// generatedAt=" + CONFIG.TODAY + ";overallScore 为各源完整性均权(0-1)\n" +
    "// 注:前端暂不展示,仅供抓取端记录与 CI 日志溯源。\n";
  var content = writers.windowVarTemplate("QUALITY", header, report);
  writers.writeWindowVar("quality.js", "QUALITY", content);

  // 汇总日志
  console.log("[quality] 总体评分 " + report.overallScore + ";源 " + sources.length +
    " 个;一致性条目 " + report.consistency.length + ";告警 " + report.alerts.length + " 条");
  report.alerts.forEach(function (a) {
    console.log("  [quality][" + a.level + "] " + a.dimension + " " + a.sourceId + ": " + a.message);
  });

  return report;
}

module.exports = { generate: generate, overallScore: overallScore };
