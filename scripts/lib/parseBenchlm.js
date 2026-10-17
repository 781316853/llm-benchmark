// benchlm.ai 镜像页共享解析器
// 2026-09-23 起 benchlm 改为 Next.js 渲染:榜单数据在页面内嵌的
// <script id="__NEXT_DATA__" type="application/json"> 里,旧版卡片式 div 标记已不再输出。
// 取数位置:
//   - 核心基准页:props.pageProps.leaderboard;
//   - AA 镜像页:AA 自测榜在 props.pageProps.groupedSourceTables 中 key 以 aa 开头的组,
//     leaderboard 只是该页同时展示的核心榜,不能当 AA 口径使用。
// 解析顺序:
//   1) __NEXT_DATA__ JSON(现网格式,含 model/creator/score 等完整字段);
//   2) 旧卡片式 HTML(向后兼容:每行
//      <a class="block truncate text-sm font-semibold ..." href="/models/slug">Model Name</a>
//      + <span class="block truncate text-xs text-muted-foreground">Vendor · Open weight</span>
//      + <span class="text-xs font-mono ... text-foreground">65.4%</span>)。
// 输出:[{model, org, score}]
"use strict";

function mapNextRows(rows) {
  const models = [];
  rows.forEach(function (x) {
    if (!x) return;
    const name = String(x.model == null ? "" : x.model).trim();
    const score = Number(x.score);
    if (!name || !isFinite(score)) return;
    models.push({ model: name, org: x.creator || null, score: score });
  });
  return models;
}

// 现网格式:直接从内嵌 JSON 取榜单,避免依赖会随前端改版漂移的 CSS 类名
function parseNextData(html) {
  const m = html.match(/<script id="__NEXT_DATA__" type="application\/json">([\s\S]*?)<\/script>/);
  if (!m) return null;
  let data;
  try { data = JSON.parse(m[1]); } catch (e) { return null; }
  const pp = data && data.props && data.props.pageProps;
  if (!pp) return null;
  const groups = Array.isArray(pp.groupedSourceTables) ? pp.groupedSourceTables : null;
  const aa = groups && groups.find(function (g) {
    return g && Array.isArray(g.entries) && g.entries.length &&
      (/^aa/i.test(String(g.key || "")) || /^AA-/i.test(String(g.title || "")));
  });
  if (aa) return mapNextRows(aa.entries);
  if (!Array.isArray(pp.leaderboard)) return null;
  return mapNextRows(pp.leaderboard);
}

// 旧格式:卡片式 div 的兜底解析
function parseCards(html) {
  const models = [];
  const parts = html.split('<a class="block truncate text-sm font-semibold');
  for (let i = 1; i < parts.length; i++) {
    const seg = parts[i];
    const nameM = seg.match(/^[^>]*>([^<]+)<\/a>/);
    if (!nameM) continue;
    const scoreM = seg.match(/text-foreground">([\d.]+)%<\/span>/);
    if (!scoreM) continue;
    const score = Number(scoreM[1]);
    if (!isFinite(score)) continue;
    let vendor = "";
    const orgM = seg.match(/text-muted-foreground">([\s\S]*?)<\/span>/);
    if (orgM) {
      vendor = orgM[1].replace(/<!--[\s\S]*?-->/g, "").trim();
      const v = vendor.match(/^([^·]+)/);
      vendor = v ? v[1].trim() : vendor;
    }
    models.push({ model: nameM[1].trim(), org: vendor || null, score: score });
  }
  return models;
}

function parseBenchlm(html) {
  const next = parseNextData(html);
  if (next && next.length) return next;
  return parseCards(html);
}

module.exports = { parseBenchlm: parseBenchlm };
