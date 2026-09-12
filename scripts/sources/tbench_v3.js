// 数据源:Terminal-Bench 3.0(斯坦福/Laude 终端命令行 Agent 评测)
// 站点:https://snorkel.ai/leaderboard/terminal-bench-3-0/(线上 tbench.ai 3.0 路由已并入 4.0)
// 数据形态:服务端渲染 HTML 表格(Rank | Model(+effort) | Agent | Resolution±CI | Date | Tokens | Cost)。
// 性质:agent×model 组合条目(74 终端任务);与 4.0/2.1 合并为一个基准组计入总览综合分与命中数
//       (取值优先级 4.0>3.0>2.1),「权威基准测试」页完整展示。
// 输出:data/tbench_v3.js(window.TBENCH_V3),与既有静态快照结构一致,每日自动重写。
"use strict";
const BaseSource = require("../lib/BaseSource");
const registry = require("../lib/registry");
const transport = require("../lib/transport");
const normalizer = require("../lib/normalizer");
const writers = require("../lib/writers");
const CONFIG = require("../lib/config");

function num(v) {
  const n = Number(String(v || "").replace(/[^\d.]/g, ""));
  return isFinite(n) ? n : null;
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
    return transport.fetchWithRetry(this.cfg.url);
  }
  parse(raw) {
    const models = [];
    transport.parseTableRows(raw).forEach(function (row) {
      const cells = row.text;
      if (cells.length < 5) return;
      const rank = Number(cells[0]);
      if (!isFinite(rank)) return;               // 表头行跳过
      let model = String(cells[1] || "").trim();
      if (!model) return;
      // 剥离尾部努力等级:形如 "Claude Opus 5 (max)" -> model="Claude Opus 5", effort="max"
      let effort = null;
      const em = model.match(/^(.*?)\s*\(([^()]+)\)\s*$/);
      if (em) { model = em[1].trim(); effort = em[2].trim(); }
      // 解决率单元格形如 "42.7% ±1.6" / "42.7%" / "42.7 ±1.6"
      const res = String(cells[3] || "");
      const resM = res.match(/([\d.]+)\s*%\s*±\s*([\d.]+)/) || res.match(/([\d.]+)\s*±\s*([\d.]+)/);
      const score = resM ? num(resM[1]) : num(res);
      if (score == null) return;
      const ci = resM ? num(resM[2]) : null;
      models.push({
        rank: rank,
        model: model,
        agent: cells[2] || null,
        effort: effort,
        score: score,
        ci: ci,
        date: cells[4] || null,
        tokens: cells[5] || null,
        cost: cells[6] || null
      });
    });
    if (!models.length) throw new Error("未解析到任何 TB 3.0 行");
    models.sort(function (a, b) { return a.rank - b.rank; });
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
      "// 字段说明:model=模型名;effort=推理强度(max/high/xhigh 等);agent=Agent 框架(Codex/Claude Code 等);\n" +
      "//          score=解决率(%);ci=95% 置信区间;date=模型发布日期;tokens=总 tokens;cost=总成本($)\n" +
      "// 用途:计入总览页综合分与命中数(与 4.0 合并为一个基准组,取值优先级 4.0>3.0>2.1);「权威基准测试」页完整展示。\n",
      {
        source: "Terminal-Bench",
        url: "https://www.tbench.ai/leaderboard/terminal-bench/3.0",
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
