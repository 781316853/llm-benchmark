// 数据源:FrontierCode(Cognition 官方 · 生产级代码质量评测)
// 站点:榜单页 https://cognition.com/frontiercode;数据 http://cognition.com/data/frontiercode-leaderboard/data.json
// 数据形态:榜单页为 Next.js 客户端渲染(原始 HTML 仅 ld+json 吐 Top10 摘要),真实榜单数据在同域静态 JSON:
//          顶层 { v1, v1_1 } 两版,每版 { models[], efforts{}, harness{}, subsets{}, data{} }。
//          data[模型][档位][子集] = { new_score, correct, tokens, cost, duration_min, tool_calls, steps, flagged_rate }。
// 口径:FrontierCode 1.1(Cognition 官方 benchmark):任务由 20+ 资深开发者制作(每任务投入 40+ 小时),
//      评估端到端代码质量(正确性/测试质量/改动范围/风格/贴合代码库规范)与「可合并性」,不只看能否跑通;
//      subsets 为 main(100 题)与 extended(150 题)。站点主榜(Main)的口径经逐条反推校验为:
//        score = main 子集下各 effort 的 new_score 取最大(对官方 ld+json Top10 精确命中 10/10);
//      harness 为各厂商自家 CLI(devin/claude-code/codex/grok-build/chisel/mini-swe-agent),故口径不可比。
// 性质:仅展示,不计入综合分与命中数(harness 绑定厂商自家 CLI)。
// 输出:data/frontiercode.js(window.FRONTIERCODE)。
"use strict";
const BaseSource = require("../lib/BaseSource");
const registry = require("../lib/registry");
const transport = require("../lib/transport");
const normalizer = require("../lib/normalizer");
const writers = require("../lib/writers");
const CONFIG = require("../lib/config");

// 子集取用:站点主榜(Main)= main;此处集中一处便于将来切 extended。
const SUBSET = "main";

// 百分比保留 1 位(源站 JSON 为 0-1 小数,×100;站点 ld+json 亦以 1 位小数展示)
function pct(v) {
  if (v == null || !isFinite(Number(v))) return null;
  return Math.round(Number(v) * 1000) / 10;
}
function num(v) {
  if (v == null || !isFinite(Number(v))) return null;
  return Math.round(Number(v) * 100) / 100;
}

// 解析官方 JSON:取指定版本(v1_1,缺失回退 v1),逐模型按「main 子集下各 effort 的 new_score 取最大」聚合
function parseJson(raw, versionKey) {
  const all = JSON.parse(raw);
  const v = all[versionKey] || all.v1_1 || all.v1;
  if (!v || !v.data) return null;
  const models = [];
  (v.models || Object.keys(v.data)).forEach(function (name) {
    const rec = v.data[name];
    if (!rec) return;
    let best = null, bestEffort = null, flagged = 0;
    (v.efforts[name] || Object.keys(rec)).forEach(function (effort) {
      const sub = (rec[effort] || {})[SUBSET];
      if (!sub || sub.new_score == null) return;
      if (!best || sub.new_score > best.new_score) { best = sub; bestEffort = effort; }
      // 被判定「不公平联网/查阅含答案来源」的运行比例为 0 时才算干净;取各档最大值作为提示
      if ((sub.flagged_rate || 0) > flagged) flagged = sub.flagged_rate;
    });
    if (!best) return;
    models.push({
      model: name,
      effort: bestEffort,
      harness: (v.harness || {})[name] || null,
      score: pct(best.new_score),          // 主榜单口径:main 子集 new_score 最大值(%)
      passRate: pct(best.correct),         // 原始正确率(%)
      costUsd: num(best.cost),             // 平均每任务成本(USD)
      tokens: best.tokens != null ? Math.round(best.tokens) : null,
      steps: best.steps != null ? Math.round(best.steps) : null,
      flaggedRate: pct(flagged),
      src: "official"
    });
  });
  models.sort(function (a, b) { return b.score - a.score; });
  models.forEach(function (m, i) { m.rank = i + 1; });
  return { subset: SUBSET, tasks: (v.subsets || {})[SUBSET] || null, models: models };
}

class FrontierCodeSource extends BaseSource {
  constructor() {
    super({
      id: "frontiercode", name: "FrontierCode", type: "json",
      url: CONFIG.sources.frontiercode.url, host: CONFIG.sources.frontiercode.host,
      officialUrl: CONFIG.sources.frontiercode.officialUrl,
      outFile: "frontiercode.js", windowVar: "FRONTIERCODE"
    });
  }
  parse(raw) {
    const parsed = parseJson(raw, "v1_1");
    if (!parsed || !parsed.models.length) throw new Error("未解析到任何 FrontierCode 行");
    return parsed;
  }
  toStandard(parsed) {
    return normalizer.fromArray(this.cfg.id, parsed.models, function (m, idx) {
      return { name: m.model, score: m.score, rank: idx, updated: CONFIG.TODAY, metrics: {}, meta: { harness: m.harness, effort: m.effort } };
    });
  }
  writeContent(parsed) {
    const T = CONFIG.TODAY, R = CONFIG.REFRESHED_AT;
    const cfg = CONFIG.sources.frontiercode;
    return writers.windowVarTemplate("FRONTIERCODE",
      "// 数据源:FrontierCode(Cognition 官方 · 生产级代码质量/可合并性评测,更新于 " + T + ")\n" +
      "// 来源:" + cfg.url + "(榜单页:" + cfg.boardUrl + ")\n" +
      "// 字段:score=标准分(%," + parsed.subset + " 子集下各档位最优);passRate=原始正确率(%);harness=评测所用厂商 CLI;\n" +
      "//      costUsd/tokens/steps=该最优档位下的每任务平均成本/tokens/步数;flaggedRate=被判定不公平联网的运行比例(%)\n" +
      "// 用途:「权威基准测试」页完整展示;仅展示,不计入综合分与命中数(harness 绑定各厂商自家 CLI,口径不可比)。\n",
      {
        source: "FrontierCode",
        url: cfg.url,
        boardUrl: cfg.boardUrl,
        officialUrl: cfg.officialUrl,
        version: cfg.version,
        updated: T,
        refreshedAt: R,
        stats: { tasks: parsed.tasks, entries: parsed.models.length },
        desc: "FrontierCode " + cfg.version + "(Cognition 官方):任务由 20+ 资深开发者制作(每个任务投入 40+ 小时),不只看代码能否跑通,而是按正确性/测试质量/改动范围/风格/贴合代码库规范评估端到端「可合并性」;分 main(" + (parsed.tasks || 100) + " 题)与 extended(150 题)两个子集,本页取 main 口径、各推理档位最优;分数越高越好。",
        models: parsed.models
      }
    );
  }
}

module.exports = registry.register(FrontierCodeSource);
