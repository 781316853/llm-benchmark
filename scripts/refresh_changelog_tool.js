// 单工具刷新:只抓一个 changelog 工具,合并进现有 data/changelog.js,并重算月度汇总。
// 用途:新增/替换工具时避免跑全量 fetch_all(全量会连带抓 20+ 个基准源,耗时长且易被限流)。
// 用法:node scripts/refresh_changelog_tool.js trae
//      node scripts/refresh_changelog_tool.js trae --dry-run   # 只抓取与打印,不写盘
"use strict";
const CONFIG = require("./lib/config");
const ch = require("./lib/changelog");
const writers = require("./lib/writers");
const digest = require("./lib/changelog-digest");

const id = process.argv[2];
const dryRun = process.argv.indexOf("--dry-run") >= 0;
if (!id) {
  console.error("用法:node scripts/refresh_changelog_tool.js <toolId> [--dry-run]");
  process.exit(1);
}
const cfg = CONFIG.changelog;
const tool = cfg.tools.filter(function (t) { return t.id === id; })[0];
if (!tool) {
  console.error("config.changelog.tools 里找不到工具:" + id);
  console.error("可选:" + cfg.tools.map(function (t) { return t.id; }).join(", "));
  process.exit(1);
}

(async function () {
  const old = writers.loadJsGlobal(cfg.outFile, cfg.windowVar) || { tools: [] };
  const oldById = {};
  (old.tools || []).forEach(function (t) { oldById[t.id] = t; });

  console.log("[changelog-tool] 抓取 " + tool.name + "(" + tool.kind + ") " + tool.url);
  const r = await ch.fetchTool(tool);
  const prev = oldById[id] && oldById[id].changelogUrl === tool.changelogUrl ? oldById[id] : null;
  const merged = ch.mergeEntries(r.entries, prev ? prev.entries : []);
  const fresh = {
    id: tool.id,
    name: tool.name,
    vendor: tool.vendor,
    kind: tool.kind,
    changelogUrl: tool.changelogUrl,
    status: r.entries.length ? "ok" : (merged.length ? "stale" : "empty"),
    error: r.entries.length ? "" : (r.error || (prev && prev.error) || ""),
    lastOkAt: r.entries.length ? CONFIG.REFRESHED_AT : ((prev && prev.lastOkAt) || ""),
    entries: merged
  };
  console.log("[changelog-tool] " + tool.name + ":本轮 " + r.entries.length + " 条,合并后 " + merged.length +
    " 条,最新 " + (merged[0] ? merged[0].date + " v" + merged[0].version : "无"));

  // 按 config 顺序重建 tools:目标用新结果,其余沿用现有数据;config 里已删除的工具(如 traework)自然丢弃。
  const tools = cfg.tools.map(function (t) {
    if (t.id === id) return fresh;
    if (oldById[t.id]) return oldById[t.id];
    return {
      id: t.id, name: t.name, vendor: t.vendor, kind: t.kind,
      changelogUrl: t.changelogUrl, status: "empty", error: "尚无数据", lastOkAt: "", entries: []
    };
  });

  if (dryRun) {
    console.log("[changelog-tool] dry-run,不写盘");
    return;
  }

  const payload = {
    updated: CONFIG.TODAY,
    refreshedAt: CONFIG.REFRESHED_AT,
    uiWindowDays: cfg.uiWindowDays,
    desc: old.desc || ("12 个 Agent 工具的官方更新日志汇总(仅正式版;DeepSeek Harness 尚处开发者预览期," +
      "按官方 Release 收录预发布版);每个工具展示最近 2 条更新,早于 " + cfg.uiWindowDays +
      " 天的条目仍保留并标注「超出窗口」"),
    tools: tools
  };
  const header =
    "// AI Agent 工具更新日志快照(由 scripts/lib/changelog.js 每日抓取维护,每日 4 次)\n" +
    "// 来源:Codex/Claude Code/OpenCode/DeepSeek Harness 取 GitHub Releases;" +
    "Kimi Code 取 kimi.com 官方文档站更新日志页;" +
    "Qoder CN / Qoder CN IDE 各取 docs.qoder.cn 对应更新日志页;" +
    "TraeCode 取 docs.trae.cn 独立日志页;TRAE 取 trae.cn/changelog(抓不到时转备源 trae.ai);" +
    "ZCode/CodeBuddy/WorkBuddy 取各官网更新日志页\n" +
    "// 口径:仅正式版(不收 alpha/beta/rc);DeepSeek Harness 只发预览版,为唯一例外(收官方 Release 的预发布);" +
    "本文件存各源可得的全量条目,前端每工具展示最近 2 条(时间窗口只作「超出窗口」标注)\n" +
    "// 字段:tools[]=工具(name/vendor/changelogUrl/status ok|stale|empty/lastOkAt);entries[]=一条更新\n" +
    "//   entry 字段:version=版本号 title=标题 date=日期(UTC YYYY-MM-DD) dateRaw=源站原文日期\n" +
    "//   tags=小节/产品线标签 url=源站地址(可深链到具体版本) body=完整正文(纯文本,保留换行,不摘要)\n" +
    "//   h=英文原文哈希(仅已翻译条目携带):title/body 为中文译文,原文见 url 指向的源站页面\n" +
    "// 同目录 changelog-monthly.js 由本模块派生:按月份汇总各工具的新增功能(单工具跨版本去重、同月跨工具合并)\n";
  writers.writeWindowVar(cfg.outFile, cfg.windowVar,
    header + "window." + cfg.windowVar + " = " +
    JSON.stringify(payload, null, 2).replace(/'/g, "\\'").replace(/"/g, "'") + ";\n");

  const snapshot = tools.map(function (t) {
    return {
      id: t.id, name: t.name, vendor: t.vendor, status: t.status,
      changelogUrl: t.changelogUrl || "",
      entries: (t.entries || []).map(function (e) {
        return { version: e.version, date: e.date, url: e.url, title: e.title, body: e.body };
      })
    };
  });
  await digest.updateDigest(snapshot);
  console.log("[changelog-tool] 完成:" + tools.length + " 个工具,共 " +
    tools.reduce(function (n, t) { return n + t.entries.length; }, 0) + " 条");
})().catch(function (e) {
  console.error("[changelog-tool] 失败:" + (e && e.stack || e));
  process.exit(1);
});
