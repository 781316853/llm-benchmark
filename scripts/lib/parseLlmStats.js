// llm-stats.com 聚合表共享解析器
// 首页(如 /benchmarks/gpqa、/benchmarks/humanity%27s-last-exam、/benchmarks/nl2repo)
// 均为服务端渲染 HTML,表头形如:#|Model|Score(0-1)|Size|Context|Cost|License。
// 与 lastexam.js / arcagi3.js 的解析逻辑一致,抽出共享,供多个权威源复用。
// 输出:{ models:[{rank, model, org, score(0-100), size, context, cost, license}], tasks }
"use strict";
const transport = require("./transport");

function escapeRegExp(s) { return String(s || "").replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); }

// 解析 llm-stats 聚合表 HTML
// opts: { tasks: 指标说明(题目数/环境数等), maxScore: 表内分数上限(0-1 | 100), desc: 描述 }
// 返回 { tasks, models }(models 按 score 降序)
function parse(raw, opts) {
  opts = opts || {};
  const maxScore = opts.maxScore == null ? 1 : opts.maxScore;
  const models = [];
  transport.parseTableRows(raw).forEach(function (row) {
    const cells = row.text;
    if (cells.length < 3) return;
    const rank = Number(cells[0]);
    if (!isFinite(rank)) return;               // 表头行跳过
    const rawScore = Number(cells[2]);
    if (!isFinite(rawScore)) return;
    // 模型单元格形如 "GPT-6 Astra New OpenAI"(模型名 + New 徽标 + 厂商名);厂商取 <img alt>
    const orgM = (row.html[1] || "").match(/<img[^>]*alt="([^"]*)"/);
    const org = orgM ? transport.htmlDecode(orgM[1]) : null;
    let model = String(cells[1] || "").trim();
    if (org) model = model.replace(new RegExp("\\s*" + escapeRegExp(org) + "\\s*$"), "");
    model = model.replace(/\s*New\s*$/i, "").trim();
    if (!model) return;
    const score = (maxScore <= 1)
      ? Math.round(rawScore * 1000) / 10       // 0-1 -> 0-100,保留 1 位
      : rawScore;                              // 已是百分制
    models.push({
      rank: rank,
      model: model,
      org: org,
      score: score,
      size: cells[3] || null,
      context: cells[4] || null,
      cost: cells[5] || null,
      license: cells[6] || null
    });
  });
  if (!models.length) throw new Error("未解析到任何 llm-stats 行(" + (opts.name || "") + ")");
  models.sort(function (a, b) { return b.score - a.score; });
  return { tasks: opts.tasks, models: models };
}

module.exports = { parse: parse };