// 更新日志解析器的机器用例 / 单工具探针。
// 用法:
//   node scripts/test_changelog_parsers.js          # 离线 fixture 用例(CI 可跑)
//   node scripts/test_changelog_parsers.js --fetch # 追加新 TRAE 主源 + 备源实网探针
//
// 覆盖 2026-11-18 的变更:TraeWork 移除、新 TRAE(trae.cn/changelog)接入。
// 离线用例只断言结构契约,不依赖网络;--fetch 用于发布前交叉验证真实响应。
"use strict";
const assert = require("assert");
const https = require("https");
const ch = require("./lib/changelog");
const CONFIG = require("./lib/config");

const tool = CONFIG.changelog.tools.filter(function (t) { return t.id === "trae"; })[0];

assert.ok(tool, "config 里必须存在 trae 工具");
assert.strictEqual(tool.kind, "traecn", "trae 应使用 traecn 解析器");
assert.ok(!CONFIG.changelog.tools.some(function (t) { return t.id === "traework"; }),
  "TraeWork 已移除,不应再出现在 config");

// 最小 fixture:类名带哈希,但保留 date-/version- 前缀与正文 p/ul 结构。
const fixture = [
  '<section class="versionEntry-WiA43L">',
  '  <div class="timelineLayout-OoS9qY">',
  '    <div class="metadata-re0Htd">',
  '      <div class="metaItem-Mgnq7u date-FTRzTs">2026-11-08</div>',
  '      <div class="metaItemWrapper-aUE6IR">',
  '        <div class="metaItem-Mgnq7u version-b47QNh">v<!-- -->3.4.15</div>',
  '        <span class="metaItem-Mgnq7u type-jZDufH">TRAE</span>',
  '      </div>',
  '    </div>',
  '    <div class="contentColumn-UuFpBb"><div class="versionContent-wBRkfT">',
  '      <p><strong>新增功能</strong></p>',
  '      <ul><li>支持一键部署站点管理。</li><li>支持查看后台命令末尾输出。</li></ul>',
  '      <p><strong>问题修复</strong></p>',
  '      <ul><li>修复浏览器预览无法使用的问题。</li></ul>',
  '    </div></div>',
  '  </div>',
  "</section>"
].join("\n");

const entries = ch.parseTraeCn(fixture, tool);
assert.strictEqual(entries.length, 1, "fixture 应解析出 1 条");
assert.strictEqual(entries[0].version, "3.4.15", "版本号应对");
assert.strictEqual(entries[0].date, "2026-11-08", "日期应对");
assert.deepStrictEqual(entries[0].tags, ["新增功能", "问题修复"], "小节标签应对");
assert.ok(entries[0].body.indexOf("新增功能") === 0, "正文应从第一个小节标题开始");
assert.ok(entries[0].body.indexOf("- 支持一键部署站点管理。") >= 0, "列表项应转成 - 行");
assert.ok(entries[0].body.indexOf("type-jZDufH") < 0, "正文不应混入元数据");

assert.ok(ch.parseTraeCn("<html><body>无版本区块</body></html>", tool).length === 0,
  "无版本区块应返回空数组");

console.log("offline parser cases OK: trae fixture 1 条, traework 已移除");

function get(url) {
  return new Promise(function (resolve, reject) {
    const req = https.get(url, { headers: { "user-agent": "Mozilla/5.0 (compatible; llm-benchmark-test/1.0)" } },
      function (res) {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          return resolve(get(new URL(res.headers.location, url).href));
        }
        let body = "";
        res.setEncoding("utf8");
        res.on("data", function (d) { body += d; });
        res.on("end", function () { resolve({ status: res.statusCode, body: body }); });
      });
    req.on("error", reject);
    req.setTimeout(45000, function () { req.destroy(new Error("timeout")); });
  });
}

if (process.argv.indexOf("--fetch") >= 0) {
  (async function () {
    const primary = await get(tool.url);
    assert.strictEqual(primary.status, 200, "新 TRAE 主源应返回 200");
    const live = ch.parseTraeCn(primary.body, tool);
    assert.ok(live.length > 0, "新 TRAE 主源应解析出条目");
    assert.ok(live[0].date >= "2026-11-08", "新 TRAE 主源最新日期应 >= 2026-11-08");
    assert.ok(live[0].body.indexOf("新增功能") >= 0, "新 TRAE 正文应包含新增功能小节");

    const fallback = await get(tool.fallbackUrl);
    assert.strictEqual(fallback.status, 200, "TRAE 备源应返回 200");
    const fb = ch.parseTraeBlocks(fallback.body, tool);
    assert.ok(fb.length > 0, "TRAE 备源应解析出 TRAE 产品线条目");

    console.log("live probe OK: 主源 " + live.length + " 条,最新 " + live[0].date + " v" + live[0].version +
      ";备源 " + fb.length + " 条,最新 " + fb[0].date + " v" + fb[0].version);
  })().catch(function (e) {
    console.error("live probe FAILED: " + e.message);
    process.exit(1);
  });
}
