// 数据源:Artificial Analysis Coding Agent Index(aitoolsreview.co.uk 镜像)
// 迁移自原 fetch_all.js 的 fetchAACI。
// 解析 Full comparison HTML 表格;每条 {agent, model, score, ci:null}。
// 输出格式与原脚本逐字节等价(window.AACI)。
"use strict";
const BaseSource = require("../lib/BaseSource");
const registry = require("../lib/registry");
const transport = require("../lib/transport");
const normalizer = require("../lib/normalizer");
const writers = require("../lib/writers");
const CONFIG = require("../lib/config");

class AaciSource extends BaseSource {
  constructor() {
    super({
      id: "aaci", name: "AA Coding Agent Index", type: "html",
      url: CONFIG.sources.aaci.url, host: CONFIG.sources.aaci.host,
      outFile: "aaci.js", windowVar: "AACI"
    });
  }
  parse(html) {
    const models = [];
    try {
      const trs = html.match(/<tr>[\s\S]*?<\/tr>/g) || [];
      trs.forEach(function (tr) {
        const tds = tr.match(/<td[^>]*>([\s\S]*?)<\/td>/g) || [];
        if (tds.length < 3) return;
        function clean(s) {
          return s.replace(/<[^>]+>/g, " ").replace(/&amp;/g, "&").replace(/&nbsp;/g, " ").replace(/\s+/g, " ").trim();
        }
        var modelRaw = clean(tds[0]);
        var codingRaw = clean(tds[2]);
        var codingMatch = codingRaw.match(/^(\d+)\s*(.*)$/);
        if (!codingMatch) return;
        var score = parseInt(codingMatch[1], 10);
        var agent = codingMatch[2].trim();
        var modelName = modelRaw.replace(/New$/i, "").replace(/\s*·\s*.*$/, "").trim();
        if (!modelName || isNaN(score)) return;
        models.push({ agent: agent, model: modelName, score: score, ci: null });
        console.log("  [aitoolsreview] " + modelName + " · " + agent + " = " + score);
      });
    } catch (e) {
      console.log("  [aitoolsreview] 抓取失败: " + e.message);
    }
    if (!models.length) throw new Error("AA Coding Agent Index 未解析到数据");
    models.sort(function (a, b) { return b.score - a.score; });
    return models;
  }
  toStandard(models) {
    var srcId = this.cfg.id;
    return normalizer.fromArray(srcId, models, function (m, idx) {
      return {
        name: m.model,        // 用 model 字段作为模型名(跨 agent 去重键)
        score: m.score,
        rank: idx,
        updated: CONFIG.TODAY,
        metrics: { ci: m.ci, agent: m.agent }
      };
    });
  }
  writeContent(models) {
    // 严格复刻原脚本输出模板(字节等价):外层双引号,models 数组单引号
    const T = CONFIG.TODAY;
    const body = JSON.stringify(models, null, 2).replace(/"/g, "'");
    return `// 数据源4:Artificial Analysis Coding Agent Index 快照(云端抓取)
// 数据源:aitoolsreview.co.uk/benchmarks 聚合站(AA 官方数据镜像)
// 官方方法学:https://artificialanalysis.ai/methodology/coding-agents-benchmarking
// AA Coding Agent Index v1.1:DeepSWE(113题)+ Terminal-Bench v2(84题)+ SWE-Atlas-QnA(124题)
// 三项 pass@1 简单平均,分数范围 0-100;评估 agent+model 组合的综合编码代理能力
// 字段说明:agent=运行框架;model=模型名;score=Coding Agent Index 分数(0-100);ci=置信区间(±)
// 合并策略:每 canonical 模型跨 agent 取最高分(前端 canon() 归并)
window.AACI = {
  source: "Artificial Analysis Coding Agent Index",
  url: "https://artificialanalysis.ai/leaderboards/coding-agents",
  updated: "${T}",
  version: "1.1",
  stats: { components: 3, tasks: 321 },
  desc: "AA Coding Agent Index v1.1:DeepSWE(113)+Terminal-Bench v2(84)+SWE-Atlas-QnA(124)三项 pass@1 均值,评估 agent+model 组合的综合编码代理能力。",
  models: ${body}
};
`;
  }
}

module.exports = registry.register(AaciSource);
