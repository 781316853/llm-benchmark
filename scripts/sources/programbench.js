// 数据源:ProgramBench(cleanroom 程序重建·编码 Agent)
// 站点:官方 https://programbench.com/(Meta Superintelligence Labs · Stanford · Harvard)。
// 数据形态:服务端渲染 HTML 表格(Rank | Model(+effort) | Agent | Resolved% | Almost%)。
// 性质:agent×model 条目(200 个从零重建任务,行为级隐藏测试),Resolved 为主指标、Almost 辅助;
//       仅「权威基准测试」页展示。
// 输出:data/programbench.js(window.PROGRAMBENCH)。
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

class ProgramBenchSource extends BaseSource {
  constructor() {
    super({
      id: "programbench", name: "ProgramBench", type: "html",
      url: CONFIG.sources.programbench.url, host: CONFIG.sources.programbench.host,
      officialUrl: CONFIG.sources.programbench.officialUrl,
      outFile: "programbench.js", windowVar: "PROGRAMBENCH"
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
      if (!isFinite(rank)) return;               // 表头行跳过(Resolved/Almost 列含 help_outline 文案)
      const resolved = num(cells[4]);
      if (resolved == null) return;
      const almost = num(cells[5]);
      let model = String(cells[2] || "").trim();
      if (!model) return;
      // 剥离尾部努力等级:形如 "Claude Opus 5 (xhigh)" -> model="Claude Opus 5", effort="xhigh"
      let effort = null;
      const em = model.match(/^(.*?)\s*\(([^()]+)\)\s*$/);
      if (em) { model = em[1].trim(); effort = em[2].trim(); }
      models.push({
        rank: rank,
        model: model,
        effort: effort,
        agent: cells[3] || null,
        score: resolved,       // Resolved 主指标
        almost: almost         // Almost 辅助(≥95% 行为测试通过)
      });
    });
    if (!models.length) throw new Error("未解析到任何 ProgramBench 行");
    models.sort(function (a, b) { return b.score - a.score || b.almost - a.almost; });  // Resolved -> Almost(与官方一致)
    return { tasks: 200, models: models };
  }
  toStandard(parsed) {
    return normalizer.fromArray(this.cfg.id, parsed.models, function (m, idx) {
      return { name: m.model, score: m.score, rank: idx, updated: CONFIG.TODAY, metrics: {}, meta: {} };
    });
  }
  writeContent(parsed) {
    const T = CONFIG.TODAY, R = CONFIG.REFRESHED_AT, n = parsed.models.length;
    return writers.windowVarTemplate("PROGRAMBENCH",
      "// 数据源:ProgramBench(cleanroom 程序重建·编码 Agent,更新于 " + T + ")\n" +
      "// 来源:" + this.cfg.url + "(官方:" + this.cfg.officialUrl + ")\n" +
      "// 字段说明:model=模型名;effort=推理档位;agent=代理;score=Resolved 完全解决率(%);almost=Almost(≥95% 行为测试通过率,%)\n" +
      "// 用途:「权威基准测试」页展示,仅参考,不计入综合分/命中数。\n",
      {
        source: "ProgramBench",
        url: this.cfg.url,
        officialUrl: this.cfg.officialUrl,
        updated: T,
        refreshedAt: R,
        stats: { tasks: parsed.tasks, entries: n },
        desc: "ProgramBench:仅给编译后二进制与文档,智能体需从零重建完整代码库并复现原程序行为(200 个真实开源项目任务,行为级隐藏测试,不联网、禁止反编译);Resolved 为主指标、Almost(≥95% 行为测试通过)为辅助,均越高越好。",
        models: parsed.models
      }
    );
  }
}

module.exports = registry.register(ProgramBenchSource);