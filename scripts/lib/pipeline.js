// 编排器:加载全部注册源 -> 按 host-parallel/serial 模式运行 -> 生成质量报告
// fail-soft:每源独立 try/catch,失败保留旧文件(由 writers.writeFileIfChanged 保证),
//            失败信息进入质量报告的 alerts/sources.errors。
"use strict";
const fs = require("fs");
const path = require("path");
const CONFIG = require("./config");
const registry = require("./registry");
const qualityReport = require("./quality-report");
const writers = require("./writers");

// 加载所有 sources/*.js(触发自注册)。require 的副作用即注册。
function loadSources() {
  const dir = CONFIG.SOURCES_DIR;
  if (!fs.existsSync(dir)) return;
  fs.readdirSync(dir).forEach(function (f) {
    if (!/\.js$/.test(f) || f.startsWith("_")) return;
    require(path.join(dir, f));
  });
}

// 运行单个源,返回 run 元数据(不含 standard——standard 单独收集)
async function runOne(entry) {
  var inst;
  try {
    var SourceClass = entry.SourceClass;
    inst = new SourceClass();
    var t0 = Date.now();
    var result = await inst.run();
    var elapsed = Date.now() - t0;
    if (result.skipped) {
      return { id: entry.id, name: entry.name, ok: false, skipped: true, elapsed: elapsed };
    }
    return {
      id: entry.id, name: entry.name, ok: true, elapsed: elapsed,
      updated: CONFIG.TODAY,
      modelCount: result.standard ? result.standard.length : 0,
      standard: result.standard || [],
      attempts: 1
    };
  } catch (e) {
    console.log("[" + entry.name + "] 抓取失败,保留旧文件: " + e.message);
    // 失败时:尝试读取旧文件的 updated 与 modelCount 供质量报告时效性判定
    var stale = readStaleMeta(inst);
    return {
      id: entry.id, name: entry.name, ok: false, elapsed: 0,
      updated: stale.updated, modelCount: stale.modelCount,
      standard: [], error: e.message, attempts: 1
    };
  }
}

// 失败时读取既有 data/*.js 的 updated/modelCount(用于时效性判定:旧数据可能已过期)
function readStaleMeta(inst) {
  if (!inst || !inst.cfg) return {};
  try {
    var cfg = inst.cfg;
    if (!cfg.outFile || !cfg.windowVar) return {};
    var data = writers.loadJsGlobal(cfg.outFile, cfg.windowVar);
    if (!data) return {};
    var updated = data.updated || (data.captured) || null;
    var modelCount = Array.isArray(data.models) ? data.models.length
      : (data.months ? Object.keys(data.months).length : null);
    return { updated: updated, modelCount: modelCount };
  } catch (e) { return {}; }
}

// 主入口
async function runPipeline(opts) {
  opts = opts || {};
  var mode = opts.mode || CONFIG.pipelineMode;
  loadSources();
  var entries = registry.enabled();
  console.log("[pipeline] 模式=" + mode + ";启用源 " + entries.length + " 个:" +
    entries.map(function (e) { return e.id; }).join(", "));

  var results;
  if (mode === "serial") {
    results = [];
    for (var i = 0; i < entries.length; i++) {
      results.push(await runOne(entries[i]));
    }
  } else {
    // host-parallel / parallel:并发运行(transport 层负责 per-host 限流与全局并发)
    results = await Promise.all(entries.map(function (e) { return runOne(e); }));
  }

  // 聚合:sourceRuns {id -> meta} + recordsBySource {id -> [record]}
  var sourceRuns = {};
  var recordsBySource = {};
  results.forEach(function (r) {
    sourceRuns[r.id] = {
      ok: !!r.ok, name: r.name, updated: r.updated,
      modelCount: r.modelCount, attempts: r.attempts,
      error: r.error || null
    };
    if (r.standard && r.standard.length) recordsBySource[r.id] = r.standard;
  });

  // 生成质量报告
  qualityReport.generate({ sourceRuns: sourceRuns, recordsBySource: recordsBySource });

  // 汇总
  var okCount = results.filter(function (r) { return r.ok; }).length;
  console.log("[pipeline] 完成:" + okCount + "/" + results.length + " 源成功");
  return results;
}

module.exports = { runPipeline: runPipeline, loadSources: loadSources };
