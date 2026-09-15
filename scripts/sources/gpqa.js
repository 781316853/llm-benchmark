// 数据源:GPQA Diamond(研究生级科学问答·知识推理)
// 站点:官方 epoch.ai/benchmarks/gpqa-diamond;按渠道层级合并(三源均 T3,同层取最高,分差超阈值打日志):
//   1) llm-stats.com 聚合表(服务端渲染,原主源);
//   2) benchlm.ai 镜像(82 模型;页面简介写"448 题"系照抄 GPQA 原论文描述,分数经核对与 Diamond
//      完全一致:榜首 GPT-6 Astra 96 / GPT-5.6 Sol 94.6 与 llm-stats 相同);
//   3) AA 复测口径 benchlm 镜像页(181 模型,src=aa;Artificial Analysis 自家 harness 复测,
//      与官方公开分偏差 ±1 内,覆盖 llm-stats 缺失的新前沿模型:Gemini 3.8 Flash / Grok 4.6 /
//      GPT-5.6 Terra / Muse Spark 1.3 等)。
// 渠道说明:datalearner 的 /benchmarks/gpqa 为 448 题全量集(榜首 Nemotron 3 Ultra 87、含小模型),
//   与 Diamond 198 题口径不同,不并入。
// 合并策略:见 scripts/lib/mergeByTier.js——同层保留较高分;跨层级低层级仅补缺不覆盖。
// 数据形态:llm-stats #|Model|Score(0-1)|Size|Context|Cost|License;benchlm/AA 页卡片式 div。
// 性质:模型级条目(198 题,生物/物理/化学,Accuracy 口径);仅「权威基准测试」页与总览参考列展示。
// 输出:data/gpqa.js(window.GPQA)。
"use strict";
const BaseSource = require("../lib/BaseSource");
const registry = require("../lib/registry");
const transport = require("../lib/transport");
const normalizer = require("../lib/normalizer");
const writers = require("../lib/writers");
const parseLlmStats = require("../lib/parseLlmStats");
const { parseBenchlm } = require("../lib/parseBenchlm");
const { createTierMerger } = require("../lib/mergeByTier");
const CONFIG = require("../lib/config");

// 跨源别名归并:两源对同一模型命名不同时归并到同一键(避免重复条目)
const KEY_ALIASES = {
  // benchlm "Claude Mythos 5" 与 llm-stats "Claude Mythos Preview" 为同一模型(与 HLE 同款命名差异)
  "claude-mythos-5": "claude-mythos-preview"
};

class GpqaSource extends BaseSource {
  constructor() {
    super({
      id: "gpqa", name: "GPQA Diamond", type: "html",
      url: CONFIG.sources.gpqa.url, host: CONFIG.sources.gpqa.host,
      officialUrl: CONFIG.sources.gpqa.officialUrl,
      outFile: "gpqa.js", windowVar: "GPQA"
    });
  }
  async fetch() {
    // 主源(llm-stats)+ 补充源(benchlm 镜像 / AA 复测镜像)并行抓取
    const [primary, bench, aa] = await Promise.all([
      transport.fetchWithRetry(this.cfg.url),
      transport.fetchWithRetry(CONFIG.sources.gpqa_benchlm.url),
      transport.fetchWithRetry(CONFIG.sources.gpqa_aa.url)
    ]);
    return { primary: primary, bench: bench, aa: aa };
  }
  parse(raw) {
    const primary = parseLlmStats.parse(raw.primary, { name: "GPQA Diamond", tasks: 198 });
    const bench = parseBenchlm(raw.bench);
    const aa = parseBenchlm(raw.aa);
    // 三源均 T3,同层合并取最高;benchlm/AA 补缺 llm-stats 未收录的模型
    const merger = createTierMerger({ aliases: KEY_ALIASES });
    merger.add(primary.models, "llm-stats");
    merger.add(bench, "benchlm");
    merger.add(aa, "aa");
    return { tasks: 198, models: merger.values() };
  }
  toStandard(parsed) {
    return normalizer.fromArray(this.cfg.id, parsed.models, function (m, idx) {
      return { name: m.model, score: m.score, rank: idx, updated: CONFIG.TODAY, metrics: {}, meta: { org: m.org, src: m.src } };
    });
  }
  writeContent(parsed) {
    const T = CONFIG.TODAY, R = CONFIG.REFRESHED_AT, n = parsed.models.length;
    return writers.windowVarTemplate("GPQA",
      "// 数据源:GPQA Diamond(研究生级科学问答·知识推理,更新于 " + T + ")\n" +
      "// 来源:" + this.cfg.url + "(官方:" + this.cfg.officialUrl + ")\n" +
      "// 补充:https://benchlm.ai/benchmarks/gpqa(benchlm 镜像,分数与 Diamond 口径一致)· https://benchlm.ai/benchmarks/aagpqadiamond(AA 复测口径)\n" +
      "// " + CONFIG.channelPolicy + "\n" +
      "// 注:datalearner GPQA 为 448 题全量集(口径不同于 198 题 Diamond 子集),不并入;AA 复测为第三方自家 harness,src=aa 区分。\n" +
      "// 字段说明:model=模型名;score=Accuracy(%);org=厂商;size=参数量;context=上下文;cost=API 价格;src=数据来源渠道(llm-stats/benchlm/aa)\n" +
      "// 用途:「权威基准测试」页展示 + 总览矩阵参考列,仅参考,不计入综合分/命中数。\n",
      {
        source: "GPQA Diamond",
        url: this.cfg.url,
        officialUrl: this.cfg.officialUrl,
        channelPolicy: CONFIG.channelPolicy,
        updated: T,
        refreshedAt: R,
        stats: { tasks: parsed.tasks, entries: n },
        desc: "GPQA Diamond:研究生级科学多选问答(GPQA 中最难、质量最高的 198 题子集,覆盖生物/物理/化学),领域专家正确率~65%、随机基线 25%;Accuracy 越高越好。多源合并:llm-stats 与 benchlm 镜像为公开口径,AA 复测为第三方自家 harness(分数偏差 ±1 内,src=aa 区分)。",
        models: parsed.models
      }
    );
  }
}

module.exports = registry.register(GpqaSource);
