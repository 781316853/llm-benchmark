// 数据源:ARC-AGI-3(ARC Prize 交互式智能体推理评测)
// 站点:官方 arcprize.org/leaderboard 默认表缺 2026-07 后新成绩。
// 渠道层级(T2 厂商官方发布 > T3 第三方聚合):主源 datalearner 详情页
//   (内嵌 results JSON,厂商官方发布成绩,Standard harness 口径);
//   补充源 llm-stats.com 聚合表(服务端渲染,#|Model|Score(0-1)|Size|Context|Cost|License)。
// 合并策略:见 scripts/lib/mergeByTier.js——高层级分数不被低层级覆盖,低层级仅补缺失模型与字段。
// 量纲:datalearner evalResult 与 llm-stats 均为百分制 RHAE 得分(如 62.70 / 0.8 / 0.0045),直接采用。
// 性质:模型级条目(135 环境,RHAE 相对人类行动效率评分);仅「权威基准测试」页展示。
// 输出:data/arcagi3.js(window.ARCAGI3)。
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

class ArcAgi3Source extends BaseSource {
  constructor() {
    super({
      id: "arcagi3", name: "ARC-AGI-3", type: "html",
      url: CONFIG.sources.arcagi3.url, host: CONFIG.sources.arcagi3.host,
      officialUrl: CONFIG.sources.arcagi3.officialUrl,
      outFile: "arcagi3.js", windowVar: "ARCAGI3"
    });
  }
  async fetch() {
    // 主源(datalearner 厂商官方发布)+ 补充源(llm-stats)并行抓取
    const [vendor, primary] = await Promise.all([
      transport.fetchWithRetry(CONFIG.sources.datalearner_arcagi3.url),
      transport.fetchWithRetry(this.cfg.url)
    ]);
    return { primary: primary, vendor: vendor };
  }
  parse(raw) {
    const primary = parseLlmStats.parse(raw.primary, { name: "ARC-AGI-3", tasks: 135 }).models;
    // datalearner evalResult 已是百分制 RHAE 得分(如 62.70 / 0.8 / 0.0045),直接采用不换算
    const vendor = parseDataLearnerBench(raw.vendor).map(function (m) {
      return { model: m.name, org: m.org, score: m.score, license: m.license, effort: m.mode || null, date: m.date || null };
    });
    // 按渠道层级合并:主源(T2 厂商发布)优先入表,llm-stats(T3)仅补缺与回填字段
    const merger = createTierMerger({});
    merger.add(vendor, "datalearner");
    merger.add(primary, "llm-stats");
    const models = merger.values();
    return { environments: 135, models: models };
  }
  toStandard(parsed) {
    return normalizer.fromArray(this.cfg.id, parsed.models, function (m, idx) {
      return { name: m.model, score: m.score, rank: idx, updated: CONFIG.TODAY, metrics: {}, meta: { org: m.org, src: m.src } };
    });
  }
  writeContent(parsed) {
    const T = CONFIG.TODAY, R = CONFIG.REFRESHED_AT, n = parsed.models.length;
    return writers.windowVarTemplate("ARCAGI3",
      "// 数据源:ARC-AGI-3(ARC Prize 交互式智能体推理评测,更新于 " + T + ")\n" +
      "// 主渠道:https://www.datalearner.com/benchmarks/arc-agi-3(厂商官方发布成绩,Standard harness 口径)\n" +
      "// 补充:" + this.cfg.url + "(官方:" + this.cfg.officialUrl + ")\n" +
      "// " + CONFIG.channelPolicy + "\n" +
      "// 字段说明:model=模型名;score=RHAE 相对人类行动效率(%);org=厂商;size=参数量;context=上下文;cost=API 价格;license=许可;src=数据来源渠道(datalearner/llm-stats)\n" +
      "// 用途:「权威基准测试」页展示,仅参考,不计入综合分/命中数。\n",
      {
        source: "ARC-AGI-3",
        url: this.cfg.url,
        officialUrl: this.cfg.officialUrl,
        channelPolicy: CONFIG.channelPolicy,
        updated: T,
        refreshedAt: R,
        stats: { environments: parsed.environments, entries: n },
        desc: "ARC-AGI-3:ARC Prize 第三代抽象推理基准,把智能体放入无说明书的 64×64 交互式游戏环境(135 个环境,25 公开/55 半私/55 私),考察探索、世界建模、目标推断与规划;评分指标为 RHAE(相对人类行动效率,人类基线 100%)。",
        models: parsed.models
      }
    );
  }
}

module.exports = registry.register(ArcAgi3Source);
