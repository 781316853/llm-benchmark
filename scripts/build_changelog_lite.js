// 从现有的 data/changelog.js 重新派生 data/changelog-lite.js
// 用法:node scripts/build_changelog_lite.js
// (每日抓取时 scripts/lib/changelog.js 会自动派生,本脚本只用于手工重算/本地补建)
const writers = require("./lib/writers");
const lite = require("./lib/changelog-lite");

const payload = writers.loadJsGlobal("changelog.js", "CHANGELOG");
if (!payload || !Array.isArray(payload.tools)) {
  console.log("! 读不到 data/changelog.js 里的 window.CHANGELOG");
  process.exit(1);
}
lite.writeLite(payload);
