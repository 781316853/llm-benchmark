// benchlm.ai 榜单页「完整行」解析器
// 与 parseBenchlm.js 的区别:那个只取 {model, org, score} 三个字段(供只补缺的补充源用),
// 这里保留排行榜行的全部字段(score / overallScore / harness / reasoningEffort / 上下文 / 价格 /
// 出处 / 置信度),供「以 benchlm 为主源」的榜单(HLE-Diamond / GPQA Diamond)入库。
//
// 取数位置:props.pageProps.leaderboard(核心榜) + pageProps.benchmark / externalBenchmark(口径元数据)。
// 与 AA 镜像页不同,这里**不**去 groupedSourceTables 找 AA 组 —— 这两个榜本身就是核心榜。
"use strict";

function nextData(html) {
  const m = html.match(/<script id="__NEXT_DATA__" type="application\/json">([\s\S]*?)<\/script>/);
  if (!m) return null;
  try { return JSON.parse(m[1]); } catch (e) { return null; }
}

// 单行数值兜底:benchlm 的部分行 score 缺省为 null(仅展示 overallScore)
function num(v) {
  const n = Number(v);
  return isFinite(n) ? n : null;
}

function parseBenchlmBoard(html) {
  const data = nextData(html);
  if (!data) throw new Error("benchlm 页面未找到 __NEXT_DATA__(页面结构可能已变化)");
  const pp = data.props && data.props.pageProps;
  if (!pp) throw new Error("benchlm __NEXT_DATA__ 缺少 props.pageProps(页面结构可能已变化)");
  const lb = pp.leaderboard;
  if (!Array.isArray(lb) || !lb.length) throw new Error("benchlm pageProps.leaderboard 为空(榜单可能已下线或改版)");

  const bm = pp.benchmark || {};
  const ext = pp.externalBenchmark || {};
  const rows = [];
  lb.forEach(function (x) {
    if (!x) return;
    const name = String(x.model == null ? "" : x.model).trim();
    const score = num(x.score);
    if (!name || score == null) return;
    rows.push({
      model: name,
      slug: x.slug || null,
      org: x.creator || null,
      score: score,                                  // 主指标(准确率 %)
      overallScore: num(x.overallScore),             // 榜内标准分(0-100),部分行为 null
      confidence: num(x.scoreConfidence),
      harness: x.harness || null,                    // 如 "No tools"
      effort: x.reasoningEffort || null,             // 如 "high"
      context: x.contextWindow || null,
      inputPrice: num(x.inputPrice),
      outputPrice: num(x.outputPrice),
      license: x.licenseName || null,
      srcLabel: x.sourceLabel || null,
      srcUrl: x.externalUrl || null
    });
  });

  // 排序按源站顺序(源站已按 score 降序);rank 由调用方按最终顺序编号
  return {
    meta: {
      name: bm.name || null,
      fullName: bm.fullName || null,
      tasks: bm.tasks || null,
      variantNote: bm.variantNote || null,
      definition: bm.definition || null,
      scoreLabel: ext.scoreLabel || null,
      scoreMode: ext.scoreMode || null,
      modelCount: ext.modelCount != null ? ext.modelCount : rows.length,
      lastUpdated: pp.lastUpdated || null
    },
    rows: rows
  };
}

module.exports = { parseBenchlmBoard: parseBenchlmBoard };
