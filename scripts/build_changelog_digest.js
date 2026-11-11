// 离线构建 data/changelog-monthly.js(月度新增功能汇总)
//
// 用法:
//   node scripts/build_changelog_digest.js                    # dry-run,打印统计与样例
//   node scripts/build_changelog_digest.js --write            # 生成文件(会调用翻译)
//   node scripts/build_changelog_digest.js --write --no-translate
//   node scripts/build_changelog_digest.js --tool=opencode --limit=30 --no-translate --assert
//
// 注意:data/changelog.js 里最近 2 条/工具的正文可能已被翻译成中文。若上一版
// data/changelog-monthly.js 存在,会按 (tool|url|version) carry-forward,不会用译文重抽;
// 首次构建(没有 monthly 文件)时这部分条目会按中文正文抽取,属预期差异。
"use strict";
const fs = require("fs");
const writers = require("./lib/writers");
const CONFIG = require("./lib/config");
const digest = require("./lib/changelog-digest");

function loadZhFiles(arg) {
  if (!arg) return null;
  var out = {};
  arg.split(",").forEach(function (f) {
    var obj = JSON.parse(fs.readFileSync(f, "utf8"));
    Object.keys(obj).forEach(function (k) { if (obj[k]) out[k] = obj[k]; });
  });
  return out;
}

function getArg(name, def) {
  var p = "--" + name + "=";
  for (var i = 2; i < process.argv.length; i++) {
    if (process.argv[i].indexOf(p) === 0) return process.argv[i].slice(p.length);
  }
  return def;
}
function hasFlag(name) { return process.argv.indexOf("--" + name) >= 0; }

function assertPayload(payload) {
  var errors = [];
  var total = payload.stats.afterMerge;
  var expectMonths = !getArg("tool") && !getArg("month");
  if (expectMonths && (payload.stats.months < 12 || payload.stats.months > 30)) {
    errors.push("月份数异常:" + payload.stats.months);
  }
  if (expectMonths && (total < 2500 || total > 3600)) {
    errors.push("条目总数超出预期区间(2500-3600):" + total);
  }
  var seenMulti = new Set();
  payload.months.forEach(function (m) {
    if (!/^\d{4}-\d{2}$/.test(m.month)) errors.push("月份格式错误:" + m.month);
    var sum = m.count;
    var counted = 0;
    m.tools.forEach(function (t) {
      if (t.items.length !== t.count) errors.push(m.month + " " + t.id + " count 不一致");
      var seen = new Set();
      t.items.forEach(function (it) {
        counted++;
        if (!it.text || !it.text.trim()) errors.push(m.month + " 空文本");
        if (it.key === digest.featureKey(it.text)) { /* key 合法 */ } else errors.push("key 不匹配:" + it.text.slice(0, 40));
        if (!/^https?:\/\//.test(it.url || "")) errors.push("URL 非法:" + (it.url || ""));
        if (seen.has(it.key)) errors.push(m.month + " " + t.id + " 重复 key");
        seen.add(it.key);
      });
    });
    m.multi.forEach(function (it) {
      counted++;
      if (!it.sources || !it.sources.length) errors.push(m.month + " multi 缺 sources");
      if (seenMulti.has(it.key)) errors.push("multi 重复 key:" + it.key);
      seenMulti.add(it.key);
      if (!/^https?:\/\//.test(it.url || "")) errors.push("multi URL 非法");
    });
    if (counted !== sum) errors.push(m.month + " count 不一致:" + counted + " != " + sum);
  });
  if (payload.stats.needsZh && payload.stats.translated + payload.stats.untranslated !== payload.stats.needsZh) {
    errors.push("译文统计不自洽");
  }
  if (errors.length) {
    console.log("\n[assert] 失败 " + errors.length + " 项:");
    errors.slice(0, 30).forEach(function (e) { console.log("  - " + e); });
    process.exitCode = 1;
    return false;
  }
  console.log("[assert] 通过:月份 " + payload.stats.months + " / 条目 " + total +
    " / 工具内去重 " + payload.stats.afterToolDedupe +
    " / 译文 " + payload.stats.translated + "/" + payload.stats.needsZh);
  return true;
}

async function main() {
  var src = writers.loadJsGlobal("changelog.js", "CHANGELOG");
  if (!src || !Array.isArray(src.tools)) throw new Error("data/changelog.js 缺失或结构异常");

  var toolFilter = getArg("tool", "");
  var monthFilter = getArg("month", "");
  var limit = parseInt(getArg("limit", "0"), 10) || 0;

  var tools = src.tools
    .filter(function (t) { return !toolFilter || t.id === toolFilter; })
    .map(function (t) {
      var entries = (t.entries || []).filter(function (e) {
        return !monthFilter || (e.date || "").slice(0, 7) === monthFilter;
      });
      if (limit > 0) entries = entries.slice(0, limit);
      return { id: t.id, name: t.name, vendor: t.vendor, status: t.status, entries: entries };
    });
  if (!tools.length) throw new Error("没有匹配的工具:" + toolFilter);

  var prev = writers.loadJsGlobal(CONFIG.changelogDigest.outFile, CONFIG.changelogDigest.windowVar);
  var payload = digest.buildDigest({
    toolsSnapshot: tools,
    prevDigest: prev,
    updated: src.updated,
    refreshedAt: src.refreshedAt
  });

  // --zh=file1,file2:导入外部批量译文(模型批量翻译/人工校对),与旧缓存合并后按 key 复用
  var prevZh = Object.assign({}, (prev && prev.zh) || {});
  var imported = loadZhFiles(getArg("zh", ""));
  if (imported) {
    Object.assign(prevZh, imported);
    console.log("[digest] 导入外部译文 " + Object.keys(imported).length + " 条");
  }
  if (!hasFlag("no-translate")) {
    var tcfg = Object.assign({}, CONFIG.changelogDigest.translate);
    var budget = parseInt(getArg("budget", "0"), 10);
    if (budget > 0) tcfg.mymemoryMaxCharsPerRun = budget; // 首次回填可临时调高每日额度
    await digest.applyZh(payload, prevZh, tcfg);
  } else {
    await digest.applyZh(payload, prevZh, { enabled: false });
  }

  console.log("\n[digest] 月份 " + payload.stats.months +
    " / 工具内去重后 " + payload.stats.afterToolDedupe + " / 合并后 " + payload.stats.afterMerge +
    " / 译文 " + payload.stats.translated + "/" + payload.stats.needsZh);

  payload.months.slice(0, 6).forEach(function (m) {
    console.log("  " + m.month + "  " + String(m.count).padStart(4) + " 项 / " +
      m.toolCount + " 工具" +
      (m.multi.length ? " / 多工具合并 " + m.multi.length : ""));
  });

  var sample = payload.months[0] && payload.months[0].tools[0];
  if (sample) {
    console.log("\n[样例] " + payload.months[0].month + " · " + sample.name);
    sample.items.slice(0, 5).forEach(function (it) {
      var zh = payload.zh[it.key];
      console.log("  - " + it.date + " v" + it.version + " | " + it.text.slice(0, 90));
      if (zh) console.log("    -> " + zh.slice(0, 90));
    });
  }

  if (hasFlag("assert")) assertPayload(payload);
  if (hasFlag("write")) {
    digest.writePayload(payload);
    console.log("[digest] 已写入 data/" + CONFIG.changelogDigest.outFile);
  } else {
    console.log("[digest] dry-run:未写文件(加 --write 生成)");
  }
}

main().catch(function (e) {
  console.error("[digest] 失败:" + e.message);
  process.exitCode = 1;
});
