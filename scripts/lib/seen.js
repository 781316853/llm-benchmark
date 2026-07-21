// 首次上榜追踪维护(data/seen.js)
// 迁移自原 fetch_all.js 的 updateSeen + loadSeen + loadJsGlobal。
// 策略:仅新增缺失键,绝不覆盖既有 firstSeen;首启写入 since。
"use strict";
const fs = require("fs");
const path = require("path");
const CONFIG = require("./config");
const writers = require("./writers");

// 维护首次上榜记录:遍历 data/*.js,记录每个(榜单,模型名)的首次上榜日。
// 各源的 window.X 文件路径与"榜单短名"映射(与前端 isNewRaw 使用的 bench key 一致)。
function updateSeen() {
  console.log("[seen] 维护首次上榜记录 data/seen.js");
  var seen = writers.loadSeen() || { since: CONFIG.TODAY, updated: CONFIG.TODAY, entries: {} };
  if (!seen.entries) seen.entries = {};
  var entries = seen.entries;
  function add(bench, name) {
    if (!name) return;
    var key = bench + "|" + String(name);
    if (!(key in entries)) entries[key] = CONFIG.TODAY;
  }
  // 各源 -> 榜单短名映射(与 js/data.js isNewRaw 的 bench key 一致)
  var map = [
    { file: "deepswe.js", varName: "DEEPSWE", bench: "deepswe", field: "models", nameField: "name" },
    { file: "deepswe_v10.js", varName: "DEEPSWE_V10", bench: "deepswe", field: "models", nameField: "name" },
    { file: "vibecode.js", varName: "VIBECODE", bench: "vibe", field: "models", nameField: "name" },
    { file: "aaci.js", varName: "AACI", bench: "aaci", field: "models", nameField: "model" },
    { file: "aa_official.js", varName: "AA_OFFICIAL", bench: "aa_official", field: "models", nameField: "model" },
    { file: "datalearner.js", varName: "DATALEARNER", bench: "datalearner", field: "models", nameField: "name" }
  ];
  map.forEach(function (m) {
    var data = writers.loadJsGlobal(m.file, m.varName);
    if (data && Array.isArray(data[m.field])) {
      data[m.field].forEach(function (row) { add(m.bench, row[m.nameField]); });
    }
  });
  // llm2014:遍历所有月份取模型并集
  var lm = writers.loadJsGlobal("llm2014.js", "LLM2014");
  if (lm && lm.months) {
    Object.keys(lm.months).forEach(function (mk) {
      var mo = lm.months[mk];
      if (mo && Array.isArray(mo.rows)) mo.rows.forEach(function (r) { add("llm", r.model); });
    });
  }
  seen.updated = CONFIG.TODAY;
  var content =
"// 首次上榜追踪记录(由 scripts/fetch_all.js 每日维护)\n" +
"// key 形如 '榜单|原始模型名',value 为首次上榜日期(YYYY-MM-DD)。\n" +
"// since=追踪起始日;firstSeen===since 的为上线即存在的存量模型,不判为新。\n" +
"// 判定:isNew = 记录存在 且 firstSeen>since 且 0<=(updated-firstSeen)<=7 天。\n" +
"window.SEEN = " + JSON.stringify(seen, null, 2).replace(/"/g, "'") + ";\n";
  writers.writeWindowVar("seen.js", "SEEN", content);
}

module.exports = { updateSeen: updateSeen };
