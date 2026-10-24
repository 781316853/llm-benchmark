// 数据源:Terminal-Bench 3.0(斯坦福/Laude 终端命令行 Agent 评测)
// 站点:https://snorkel.ai/leaderboard/terminal-bench-3-0/(线上 tbench.ai 3.0 路由已并入 4.0)
// 渠道:官方 3.0 榜已下线、无厂商发布渠道,snorkel.ai 为唯一可用 T3 镜像。
// 数据形态:服务端渲染 HTML 表格(Rank | Model | Effort | Agent | Resolution±CI | Date | Tokens | Cost);
//   2026-10 起源站在 Model 后新增独立 Effort 列(共 8 列),故按表头动态定位列,兼容旧 7 列布局。
// 补充:AI Release Tracker 的 terminal-bench-3.0 榜(T3,只补镜像未收录的模型)。
// 性质:agent×model 组合条目(74 终端任务);与 4.0/2.1 合并为一个基准组计入总览综合分与命中数
//       (取值优先级 4.0>3.0>2.1),「权威基准测试」页完整展示。
// 输出:data/tbench_v3.js(window.TBENCH_V3),与既有静态快照结构一致,每日自动重写。
"use strict";
const BaseSource = require("../lib/BaseSource");
const registry = require("../lib/registry");
const transport = require("../lib/transport");
const normalizer = require("../lib/normalizer");
const writers = require("../lib/writers");
const art = require("../lib/aireleasetracker");
const { normKey } = require("../lib/mergeByTier");
const CONFIG = require("../lib/config");

// 空单元格不能当 0:Number("") === 0,会把缺列静默写成 0 分
function num(v) {
  const s = String(v == null ? "" : v).trim();
  if (!/\d/.test(s)) return null;
  const n = Number(s.replace(/[^\d.]/g, ""));
  return isFinite(n) ? n : null;
}

// 按表头动态定位列;表头缺失时回退到 7 列旧布局
const COL_ALIASES = {
  rank: ["rank"], model: ["model"], effort: ["effort"], agent: ["agent"],
  res: ["resolutionrate", "resolution", "score"], date: ["releasedate", "date"],
  tokens: ["tokens"], cost: ["cost"]
};
function columnMap(row) {
  const cols = { rank: 0, model: 1, effort: -1, agent: 2, res: 3, date: 4, tokens: 5, cost: 6 };
  if (!row) return cols;
  const head = row.text.map(function (h) { return String(h).toLowerCase().replace(/[^a-z]/g, ""); });
  Object.keys(COL_ALIASES).forEach(function (k) {
    const i = head.indexOf(COL_ALIASES[k][0]) >= 0 ? head.indexOf(COL_ALIASES[k][0])
      : COL_ALIASES[k].slice(1).reduce(function (hit, name) {
        return hit >= 0 ? hit : head.indexOf(name);
      }, -1);
    if (i >= 0) cols[k] = i;
  });
  return cols;
}

class TBenchV3Source extends BaseSource {
  constructor() {
    super({
      id: "tbench_v3", name: "Terminal-Bench 3.0", type: "html",
      url: CONFIG.sources.tbench_v3.url, host: CONFIG.sources.tbench_v3.host,
      version: CONFIG.sources.tbench_v3.version,
      outFile: "tbench_v3.js", windowVar: "TBENCH_V3"
    });
  }
  async fetch() {
    const [primary, artData] = await Promise.all([
      transport.fetchWithRetry(this.cfg.url),
      art.fetchModelsSafe("tbench_v3")
    ]);
    return { art: artData, primary: primary };
  }
  parse(raw) {
    const rows = transport.parseTableRows(raw.primary);
    const cols = columnMap(rows.filter(function (r) { return /^rank$/i.test(String(r.text[0] || "").trim()); })[0]);
    const models = [];
    rows.forEach(function (row) {
      const cells = row.text;
      if (cells.length <= Math.max(cols.model, cols.res)) return;
      const rank = num(cells[cols.rank]);
      if (rank == null) return;                  // 表头行跳过
      let model = String(cells[cols.model] || "").trim();
      if (!model) return;
      // 新布局 effort 为独立列;旧布局把 effort 写在模型名尾部括号里
      let effort = cols.effort >= 0 ? (String(cells[cols.effort] || "").trim() || null) : null;
      const em = model.match(/^(.*?)\s*\(([^()]+)\)\s*$/);
      if (em) { model = em[1].trim(); effort = effort || em[2].trim(); }
      // 解决率单元格形如 "42.7% ±1.6" / "42.7%" / "42.7 ±1.6"
      const res = String(cells[cols.res] || "");
      const resM = res.match(/([\d.]+)\s*%\s*±\s*([\d.]+)/) || res.match(/([\d.]+)\s*±\s*([\d.]+)/);
      const score = resM ? num(resM[1]) : num(res);
      if (score == null) return;
      const ci = resM ? num(resM[2]) : null;
      models.push({
        rank: rank,
        model: model,
        agent: cols.agent >= 0 ? (String(cells[cols.agent] || "").trim() || null) : null,
        effort: effort,
        score: score,
        ci: ci,
        date: cols.date >= 0 ? (String(cells[cols.date] || "").trim() || null) : null,
        tokens: cols.tokens >= 0 ? (String(cells[cols.tokens] || "").trim() || null) : null,
        cost: cols.cost >= 0 ? (String(cells[cols.cost] || "").trim() || null) : null,
        src: "mirror"
      });
    });
    if (!models.length) throw new Error("未解析到任何 TB 3.0 行");
    models.sort(function (a, b) { return a.rank - b.rank; });
    // AI Release Tracker(T3)只补镜像未收录的模型;源站未给 agent/effort,置空且不占名次
    const known = models.map(function (m) { return normKey(m.model); });
    function isKnown(name) {
      const n = normKey(name);
      return known.some(function (k) {
        return k === n || (k.length >= 5 && n.endsWith(k)) || (n.length >= 5 && k.endsWith(n));
      });
    }
    (raw.art ? raw.art.models : []).forEach(function (m) {
      if (isKnown(m.model)) return;
      known.push(normKey(m.model));
      models.push({
        rank: null, model: m.model, agent: null, effort: null,
        score: m.score, ci: null, date: null, tokens: null, cost: null,
        src: "aireleasetracker"
      });
      console.log("  [aireleasetracker] 补充: " + m.model + " (" + m.score + "%)");
    });
    return { tasks: 74, models: models };
  }
  toStandard(parsed) {
    return normalizer.fromArray(this.cfg.id, parsed.models, function (m, idx) {
      return {
        name: m.model,
        score: m.score,
        rank: idx,
        updated: CONFIG.TODAY,
        metrics: { ci: m.ci },
        meta: { agent: m.agent, effort: m.effort }
      };
    });
  }
  writeContent(parsed) {
    const T = CONFIG.TODAY, R = CONFIG.REFRESHED_AT, v = this.cfg.version, n = parsed.models.length;
    return writers.windowVarTemplate("TBENCH_V3",
      "// 数据源:Terminal-Bench 3.0(斯坦福/Laude)终端命令行 Agent 评测(更新于 " + T + ")\n" +
      "// 来源:" + this.cfg.url + "(线上 tbench.ai 3.0 路由已并入 4.0,以 snorkel.ai 权威镜像为主,每日自动抓取)\n" +
      "// 补充:https://aireleasetracker.com/benchmark/terminal-bench-3.0(第三方聚合 T3,只补缺失模型)\n" +
      "// " + CONFIG.channelPolicy + "(本榜无更高优先级渠道,snorkel.ai 为可用镜像)\n" +
      "// 字段说明:model=模型名;effort=推理强度(max/high/xhigh 等);agent=Agent 框架(Codex/Claude Code 等);\n" +
      "//          score=解决率(%);ci=95% 置信区间;date=模型发布日期;tokens=总 tokens;cost=总成本($);src=数据来源渠道(mirror/aireleasetracker)\n" +
      "// 用途:计入总览页综合分与命中数(与 4.0 合并为一个基准组,取值优先级 4.0>3.0>2.1);「权威基准测试」页完整展示。\n",
      {
        source: "Terminal-Bench",
        url: "https://www.tbench.ai/leaderboard/terminal-bench/3.0",
        channelPolicy: CONFIG.channelPolicy,
        version: v,
        updated: T,
        refreshedAt: R,
        stats: { tasks: parsed.tasks, entries: n },
        desc: "Terminal-Bench 3.0:在真实命令行环境中评测编码 Agent(74 个任务,含更长周期、多容器/GPU 环境与更广泛领域),按 agent×model 组合计分,解决率越高越好。",
        models: parsed.models
      }
    );
  }
}

module.exports = registry.register(TBenchV3Source);
