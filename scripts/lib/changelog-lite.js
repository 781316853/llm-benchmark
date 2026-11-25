// data/changelog-lite.js —— 「Agent工具更新日志」页真正加载的那份
//
// 背景:data/changelog.js 是各源的全量历史(实测 3.7MB / gzip 后 677KB),但页面**只显示每个工具最近 2 条**
// (js/data.js 的 CL_RECENT_COUNT=2),其余 95% 的正文永远不会被渲染。直接拿全量文件当页面数据源,
// 等于每个进这页的人都要下载并解析一份用不上的历史。
//
// 方案:全量文件原样保留(它是抓取端的合并基线与历史存档,updateChangelog 的 oldIndex 要读它),
// 另写一份同结构、只保留每工具最近 N 条的 changelog-lite.js 供页面使用。
// 每个工具额外带 entryCount = 全量条数,页面用它显示「全量 N 条 · 显示最近 M 条」而不失真。
const writers = require("./writers");

// 必须与 js/data.js 的 CL_RECENT_COUNT 一致,否则页面显示条数与文件内容对不上
const DISPLAY = 2;

const LITE_HEADER =
  "// 注:本文件供页面加载,由 scripts/lib/changelog.js 每次抓取后自动派生,请勿手改。\n" +
  "// 每个工具只保留最近 " + DISPLAY + " 条(页面显示上限)+ entryCount(全量条数);\n" +
  "// 全量历史见同目录 changelog.js(抓取端合并基线,页面不加载)。\n";

function buildLite(payload) {
  return {
    updated: payload.updated,
    refreshedAt: payload.refreshedAt,
    uiWindowDays: payload.uiWindowDays,
    desc: payload.desc,
    tools: (payload.tools || []).map(function (t) {
      var o = {};
      Object.keys(t).forEach(function (k) {
        if (k !== "entries") o[k] = t[k];
      });
      o.entryCount = (t.entries || []).length;
      o.entries = (t.entries || []).slice(0, DISPLAY);
      return o;
    })
  };
}

// 与 changelog.js 写主文件时同一套序列化口径(单引号字符串,避免正文里的 " 破坏语法)
function serialize(payload) {
  return JSON.stringify(buildLite(payload), null, 2).replace(/'/g, "\\'").replace(/"/g, "'");
}

function writeLite(payload) {
  var body = LITE_HEADER + "window.CHANGELOG = " + serialize(payload) + ";\n";
  writers.writeWindowVar("changelog-lite.js", "CHANGELOG", body);
  var n = (payload.tools || []).reduce(function (a, t) { return a + (t.entries || []).length; }, 0);
  console.log("[changelog-lite] 已写出:每工具最近 " + DISPLAY + " 条,共 " + (payload.tools || []).length +
    " 个工具(全量 " + n + " 条 → 精简后 " + Math.min(n, (payload.tools || []).length * DISPLAY) + " 条)");
}

module.exports = { buildLite: buildLite, writeLite: writeLite, serialize: serialize, DISPLAY: DISPLAY };
