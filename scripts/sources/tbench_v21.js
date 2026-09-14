// 数据源:Terminal-Bench 2.1(斯坦福/Laude 终端命令行 Agent 评测,89 任务)
// 站点:官方 https://www.tbench.ai/news/terminal-bench-2-1(线上无独立 2.1 榜单路由);
//   按渠道层级合并(T2 厂商官方发布 > T3 第三方聚合):主源 datalearner 详情页
//   (内嵌 results JSON,厂商官方发布成绩,含模式/发布时间/参数量,~30 条);
//   补充源 llm-stats.com 聚合表(服务端渲染,0-1 归一化自报分,35 模型)。
// 数据形态:datalearner results JSON;llm-stats #|Model|Score(0-1)|Size|Context|Cost|License。
// 合并策略:见 scripts/lib/mergeByTier.js——高层级分数不被低层级覆盖,低层级仅补缺失模型与字段。
// 性质:模型级条目,0-1 自报分已换算为百分比,与官方 agent×model 解决率口径不同;
//       与 4.0/3.0 合并为一个基准组计入总览综合分。
// 输出:data/tbench_v2.js(window.TBENCH_V21),供「权威基准测试」页完整展示与总览矩阵。
"use strict";
const BaseSource = require("../lib/BaseSource");
const registry = require("../lib/registry");
const transport = require("../lib/transport");
const normalizer = require("../lib/normalizer");
const writers = require("../lib/writers");
const parseLlmStats = require("../lib/parseLlmStats");
const { parseDataLearnerBench } = require("./datalearner");
const { createTierMerger } = require("../lib/mergeByTier");
const CONFIG = require("../lib/config");

// 跨源别名归并:两源对同一模型命名不同时归并到同一键(避免重复条目)
const KEY_ALIASES = {
  "deepseek-v4-pro": "deepseek-v4-pro-0813",
  "deepseek-v4-flash": "deepseek-v4-flash-0731"
};

class TBenchV21Source extends BaseSource {
  constructor() {
    super({
      id: "tbench_v21", name: "Terminal-Bench 2.1", type: "html",
      url: CONFIG.sources.tbench_v21.url, host: CONFIG.sources.tbench_v21.host,
      officialUrl: CONFIG.sources.tbench_v21.officialUrl,
      version: "2.1",
      outFile: "tbench_v2.js", windowVar: "TBENCH_V21"
    });
  }
  async fetch() {
    // 主源(datalearner 厂商官方发布)+ 补充源(llm-stats)并行抓取
    const [extra, primary] = await Promise.all([
      transport.fetchWithRetry(CONFIG.sources.datalearner_tbench21.url),
      transport.fetchWithRetry(this.cfg.url)
    ]);
    return { primary: primary, extra: extra };
  }
  parse(raw) {
    const primary = parseLlmStats.parse(raw.primary, { name: "Terminal-Bench 2.1", tasks: 89 });
    const extra = parseDataLearnerBench(raw.extra).map(function (dl) {
      return { model: dl.name, org: dl.org, score: dl.score, license: dl.license, effort: dl.mode || null, date: dl.date || null };
    });
    // 按渠道层级合并:主源(T2 厂商发布)优先入表,llm-stats(T3)仅补缺与回填字段
    const merger = createTierMerger({ aliases: KEY_ALIASES });
    merger.add(extra, "datalearner");
    merger.add(primary.models, "llm-stats");
    const models = merger.values().map(function (m) {
      return {
        rank: m.rank, model: m.model, agent: null, effort: m.effort || null,
        score: m.score, ci: null, date: m.date || null, tokens: null, cost: m.cost || null,
        org: m.org, size: m.size, src: m.src
      };
    });
    return { tasks: 89, models: models };
  }
  toStandard(parsed) {
    return normalizer.fromArray(this.cfg.id, parsed.models, function (m, idx) {
      return {
        name: m.model,
        score: m.score,
        rank: idx,
        updated: CONFIG.TODAY,
        metrics: {},
        meta: { org: m.org, effort: m.effort, src: m.src }
      };
    });
  }
  writeContent(parsed) {
    const T = CONFIG.TODAY, R = CONFIG.REFRESHED_AT, n = parsed.models.length;
    return writers.windowVarTemplate("TBENCH_V21",
      "// 数据源:Terminal-Bench 2.1(斯坦福/Laude)终端命令行 Agent 评测(更新于 " + T + ")\n" +
      "// 来源:" + this.cfg.url + "(官方:" + this.cfg.officialUrl + ")\n" +
      "// 主渠道:https://www.datalearner.com/benchmarks/terminal-bench-2-1(厂商官方发布成绩转录)\n" +
      "// 补充:llm-stats 聚合表(0-1 归一化自报分)\n" +
      "// " + CONFIG.channelPolicy + "\n" +
      "// 字段说明:model=模型名;effort=推理模式(datalearner 提供,如 最高(工具));agent=Agent 框架(源站未给出,置空);\n" +
      "//          score=得分(%);ci=95% 置信区间;date=模型发布日期;cost=API 价格(llm-stats);org/size 为厂商/参数量;\n" +
      "//          src=数据来源渠道(datalearner/llm-stats)\n" +
      "// 用途:计入总览页综合分与命中数(与 4.0/3.0 合并为一个基准组,取值优先级 4.0>3.0>2.1);「权威基准测试」页完整展示。\n" +
      "// 注:采用 datalearner 厂商发布成绩为主 + llm-stats 自报分补充,与官方 agent×model 解决率口径不同;阅读时请注意口径差异。\n",
      {
        source: "Terminal-Bench",
        url: this.cfg.url,
        officialUrl: this.cfg.officialUrl,
        channelPolicy: CONFIG.channelPolicy,
        version: "2.1",
        updated: T,
        refreshedAt: R,
        stats: { tasks: parsed.tasks, entries: n },
        desc: "Terminal-Bench 2.1:在真实命令行环境中评测编码 Agent(89 个任务,修复 2.0 中 28 个任务问题)。本快照以 datalearner 厂商官方发布成绩为主源、llm-stats 模型级 0-1 归一化自报分(换算为百分比)为补充源,按渠道层级合并,越高越好。",
        models: parsed.models
      }
    );
  }
}

module.exports = registry.register(TBenchV21Source);
