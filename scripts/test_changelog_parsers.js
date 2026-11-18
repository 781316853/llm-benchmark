// 更新日志解析器的机器用例 / 单工具探针。
// 用法:
//   node scripts/test_changelog_parsers.js          # 离线 fixture 用例(CI 可跑)
//   node scripts/test_changelog_parsers.js --fetch # 追加新 TRAE 主源 + 备源、Kimi Code 文档站实网探针
//
// 覆盖 2026-11-18 的变更:TraeWork 移除、新 TRAE(trae.cn/changelog)接入、
// Kimi Code 数据源由 GitHub Releases 改为 kimi.com 文档站更新日志页。
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

// ===== Kimi Code:kimi.com 文档站(VitePress 标题区块) =====
const kimi = CONFIG.changelog.tools.filter(function (t) { return t.id === "kimi-code"; })[0];
assert.ok(kimi, "config 里必须存在 kimi-code 工具");
assert.strictEqual(kimi.kind, "kimi", "kimi-code 应使用文档站解析器");
assert.strictEqual(kimi.url, "https://www.kimi.com/code/docs/kimi-code-cli/changelog.html",
  "kimi-code 主源应为官方文档站更新日志页");
assert.strictEqual(kimi.kind === "github", false, "kimi-code 不应再走 GitHub Releases");

const kimiFixture = [
  '<h1 id="变更记录" tabindex="-1">变更记录</h1>',
  '<h2 id="_2-6-3-2026-11-17" tabindex="-1">2.6.3（2026-11-17）' +
    '<a class="header-anchor" href="#_2-6-3-2026-11-17">\u200b</a></h2>',
  '<h3 id="修复" tabindex="-1">修复</h3>',
  '<ul><li>修复前台 Shell 命令输出重复的问题。</li><li>修复后台通知误停任务的问题。</li></ul>',
  '<h2 id="_2-6-2-2026-11-14" tabindex="-1">2.6.2（2026-11-14）</h2>',
  '<h3 id="新功能" tabindex="-1">新功能</h3>',
  '<ul><li>新增自定义 registry provider 支持。</li></ul>'
].join("\n");

const kimiEntries = ch.parseDocHeadings(kimiFixture, kimi);
assert.strictEqual(kimiEntries.length, 2, "Kimi fixture 应解析出 2 条");
assert.strictEqual(kimiEntries[0].version, "2.6.3", "Kimi 版本号应对");
assert.strictEqual(kimiEntries[0].date, "2026-11-17", "全角括号内的日期应对");
assert.deepStrictEqual(kimiEntries[0].tags, ["修复"], "Kimi 小节标签应对");
assert.strictEqual(kimiEntries[0].url, kimi.changelogUrl + "#_2-6-3-2026-11-17",
  "Kimi 条目应深链到版本锚点");
assert.ok(kimiEntries[0].body.indexOf("- 修复前台 Shell 命令输出重复的问题。") >= 0,
  "Kimi 列表项应转成 - 行");
assert.ok(kimiEntries[0].body.indexOf("2.6.2") < 0,
  "正文不应混入下一个版本标题");
assert.strictEqual(ch.parseDocHeadings("<html><body>无版本区块</body></html>", kimi).length, 0,
  "Kimi 无版本区块应返回空数组");

console.log("offline parser cases OK: trae fixture 1 条, traework 已移除; kimi fixture 2 条");

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

    const kimiLive = await get(kimi.url);
    assert.strictEqual(kimiLive.status, 200, "Kimi Code 文档站应返回 200");
    const kl = ch.parseDocHeadings(kimiLive.body, kimi);
    assert.ok(kl.length > 0, "Kimi Code 文档站应解析出条目");
    assert.ok(kl[0].date >= "2026-11-17", "Kimi Code 最新日期应 >= 2026-11-17");
    assert.ok(kl.length < 2 || kl[0].body.indexOf(kl[1].title) < 0,
      "Kimi 正文不应混入下一个版本标题");

    console.log("live probe OK: 主源 " + live.length + " 条,最新 " + live[0].date + " v" + live[0].version +
      ";备源 " + fb.length + " 条,最新 " + fb[0].date + " v" + fb[0].version +
      ";Kimi " + kl.length + " 条,最新 " + kl[0].date + " v" + kl[0].version);
  })().catch(function (e) {
    console.error("live probe FAILED: " + e.message);
    process.exit(1);
  });
}
