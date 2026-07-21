// 数据源:DeepSWE 官方 JSON 端点(结构化)
// 迁移自原 fetch_all.js 的 fetchDeepSweJson。
// 注册两个实例:v1.1(默认榜单,含 datalearner 补充)+ v1.0(历史榜单)。
// 输出格式与原脚本逐字节等价(window.DEEPSWE / window.DEEPSWE_V10)。
"use strict";
const BaseSource = require("../lib/BaseSource");
const registry = require("../lib/registry");
const transport = require("../lib/transport");
const normalizer = require("../lib/normalizer");
const writers = require("../lib/writers");
const CONFIG = require("../lib/config");
const { parseDataLearner } = require("./datalearner");

// 模型名归一化(跨源去重匹配):转小写并移除非字母数字字符
// 与原脚本 normName 完全一致,确保 datalearner 补充去重结果字节等价。
function normName(s) { return String(s || "").toLowerCase().replace(/[^a-z0-9]/g, ""); }

class DeepSweBase extends BaseSource {
  // 子类通过 cfg.isV11 / cfg.version / cfg.url 区分
  async fetch() {
    return transport.fetchWithRetry(this.cfg.url, { retries: this.cfg.retries });
  }
  // 注:parse 为同步,仅做主源 JSON 解析;v1.1 的 async datalearner 补充在 run() 中处理(因涉及二次抓取)。
  parse(raw) {
    // 仅做主源 JSON 解析(同步);datalearner 补充在 run() 中已处理。
    const data = JSON.parse(raw);
    const nTasks = data.n_tasks_in_set || 113;
    const runs = (data.rows || []).map(function (r) {
      return {
        name: r.model, effort: r.reasoning_effort || "-",
        pass1: Math.round(r.pass_at_1 * 100),
        ci: Math.round(r.ci_half * 100),
        cost: Math.round(r.mean_cost_usd * 100) / 100,
        outTok: Math.round(r.mean_output_tokens),
        steps: Math.round(r.mean_agent_steps)
      };
    });
    if (!runs.length) throw new Error("未解析到任何 run");
    const best = {};
    runs.forEach(function (r) {
      if (!best[r.name] || r.pass1 > best[r.name].pass1) best[r.name] = r;
    });
    const models = Object.values(best).sort(function (a, b) { return b.pass1 - a.pass1; });
    return { nTasks: nTasks, models: models };
  }
  // 覆盖 run:在主源解析后,v1.1 异步合并 datalearner 补充,再写文件
  async run() {
    if (!this.cfg.enabled) return { standard: [], raw: null, skipped: true };
    console.log("[" + this.cfg.name + "] 抓取 " + this.cfg.url);
    const text = await this.fetch();
    let parsed = this.parse(text);
    // v1.1:补充 datalearner 未收录的模型(与原脚本逻辑一致)
    if (this.cfg.isV11) {
      try {
        console.log("  [datalearner] 抓取补充源");
        const dlHtml = await transport.fetchWithRetry(CONFIG.sources.datalearner.url);
        const dlModels = parseDataLearner(dlHtml);
        const existing = {};
        parsed.models.forEach(function (m) { existing[normName(m.name)] = true; });
        dlModels.forEach(function (dl) {
          if (!existing[normName(dl.name)]) {
            existing[normName(dl.name)] = true;
            parsed.models.push({
              name: dl.name, effort: dl.mode || "-", pass1: dl.score,
              ci: null, cost: null, outTok: null, steps: null, source: "datalearner"
            });
            console.log("  [datalearner] 补充: " + dl.name + " (" + dl.score + "%)");
          }
        });
        parsed.models.sort(function (a, b) { return b.pass1 - a.pass1; });
      } catch (e) {
        console.log("  [datalearner] DeepSWE 补充失败: " + e.message);
      }
    }
    if (!parsed.models.length) throw new Error(this.cfg.name + " 未解析到任何数据");
    const standard = this.toStandard(parsed);
    await this.write(parsed, standard);
    return { standard: standard, raw: parsed, skipped: false };
  }
  toStandard(parsed) {
    var srcId = this.cfg.id;
    return normalizer.fromArray(srcId, parsed.models, function (m, idx) {
      return {
        name: m.name,
        score: m.pass1,
        rank: idx,
        updated: CONFIG.TODAY,
        metrics: { ci: m.ci, cost: m.cost, outTok: m.outTok, steps: m.steps, effort: m.effort }
      };
    });
  }
}

class DeepSweV11Source extends DeepSweBase {
  constructor() {
    super({
      id: "deepswe_v11", name: "DeepSWE v1.1", type: "json",
      url: CONFIG.sources.deepswe_v11.url, host: CONFIG.sources.deepswe_v11.host,
      isV11: true, version: "v1.1",
      outFile: "deepswe.js", windowVar: "DEEPSWE"
    });
  }
  writeContent(parsed) {
    // 严格复刻原脚本 v1.1 输出模板(字节等价):外层双引号,models 数组单引号
    const T = CONFIG.TODAY, v = this.cfg.version, n = parsed.models.length;
    const body = JSON.stringify(parsed.models, null, 2).replace(/"/g, "'");
    return `// 数据源1:DeepSWE 基准快照(云端抓取)
// 来源:https://deepswe.datacurve.ai/ + https://www.datalearner.com/benchmarks/deepswe (更新于 ${T})
// 字段说明:name=模型名;effort=推理强度;pass1=Pass@1(%);ci=置信区间(±%);
//          cost=平均单任务成本($);outTok=平均输出 tokens;steps=平均 Agent 步数
// 注:主源抓取 /artifacts/v1.1/leaderboard-live.json;datalearner.com 补充未收录模型(ci/cost/outTok/steps 为 null)。
window.DEEPSWE = {
  source: "DeepSWE",
  url: "https://deepswe.datacurve.ai/",
  updated: "${T}",
  version: "${v}",
  stats: { tasks: ${parsed.nTasks}, repos: 91, languages: 5, models: ${n} },
  desc: "在原创、长程软件工程任务上评测前沿编码 Agent(无污染、91 仓库、5 种语言)。",
  models: ${body}
};
`;
  }
}

class DeepSweV10Source extends DeepSweBase {
  constructor() {
    super({
      id: "deepswe_v10", name: "DeepSWE v1.0", type: "json",
      url: CONFIG.sources.deepswe_v10.url, host: CONFIG.sources.deepswe_v10.host,
      isV11: false, version: "v1.0",
      outFile: "deepswe_v10.js", windowVar: "DEEPSWE_V10"
    });
  }
  writeContent(parsed) {
    // 严格复刻原脚本 v1.0 输出模板(字节等价)
    const T = CONFIG.TODAY, v = this.cfg.version, n = parsed.models.length;
    const body = JSON.stringify(parsed.models, null, 2).replace(/"/g, "'");
    return `// 数据源1b:DeepSWE v1.0 历史榜单快照(每日刷新)
// 来源:https://deepswe.datacurve.ai/ 榜单 "v1" 切换器
// 抓取方式:/artifacts/v1/leaderboard-live.json(结构化 JSON,由站点榜单 v1 视图在客户端请求)。
// 字段同 deepswe.js;effort 为 null 记为 "-"。与 v1.1 由 js/data.js 的 deepSwe() 合并展示。
window.DEEPSWE_V10 = {
  source: "DeepSWE",
  url: "https://deepswe.datacurve.ai/",
  version: "${v}",
  captured: "${T}",
  stats: { models: ${n} },
  desc: "DeepSWE v1.0 历史榜单(测试了更多模型),作为 v1.1 的补充数据合入展示。",
  models: ${body}
};
`;
  }
}

registry.register(DeepSweV11Source);
registry.register(DeepSweV10Source);

module.exports = { DeepSweBase: DeepSweBase, normName: normName };
