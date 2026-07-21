// 数据源:Artificial Analysis Coding Agent Index(aitoolsreview.co.uk 镜像)
// 迁移自原 fetch_all.js 的 fetchAACI(保持原始解析逻辑)。
// 期望:Full comparison HTML 表格的 Coding 列(AA 官方综合分,0-100)。
// 2026-07 站点改版:原 Coding 综合分列已被 SWE-bench Pro / Terminal-Bench 2.1 / GDPval-AA 等分量取代,
//                  这些分量非官方 AA 口径,已弃用。本源保持原始期望,fail-soft 保留旧 data/aaci.js,
//                  用历史综合分数据参与 DeepSWE 的交叉验证(时效性告警会提示数据陈旧)。
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
    // 原始解析逻辑:Full comparison 表格行
    // 期望列:Model | Intelligence | Coding(分数+agent)
    // Coding 列格式:<td>...<br>...<br>...</td>,含整数分数与 agent 名
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
        // Coding 列:可能为 "—" 或 "分数 agent"(如 "77 Claude Code");只取有分数的行
        var codingMatch = codingRaw.match(/^(\d+)\s*(.*)$/);
        if (!codingMatch) return;
        var score = parseInt(codingMatch[1], 10);
        var agent = codingMatch[2].trim();
        // 模型名清理:去除 "New" 后缀、厂商后缀(如 "Anthropic · max, with fallback")
        var modelName = modelRaw.replace(/New$/i, "").replace(/\s*·\s*.*$/, "").trim();
        if (!modelName || isNaN(score)) return;
        models.push({ agent: agent, model: modelName, score: score, ci: null });
        console.log("  [aitoolsreview] " + modelName + " · " + agent + " = " + score);
      });
    } catch (e) {
      console.log("  [aitoolsreview] 抓取失败: " + e.message);
    }

    if (!models.length) throw new Error("AA Coding Agent Index 未解析到数据(站点结构变更,保留旧文件供交叉验证)");
    models.sort(function (a, b) { return b.score - a.score; });
    return models;
  }
  toStandard(models) {
    var srcId = this.cfg.id;
    return normalizer.fromArray(srcId, models, function (m, idx) {
      return {
        name: m.model,        // canonical 匹配键用 model 名
        score: m.score, rank: idx, updated: CONFIG.TODAY,
        metrics: { ci: m.ci, agent: m.agent },
        meta: {}
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
// 注:2026-07 站点改版,官方综合分已下线;fail-soft 保留旧文件参与交叉验证。
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
