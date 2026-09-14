// 数据源:GPQA Diamond(研究生级科学问答·知识推理)
// 站点:官方 epoch.ai/benchmarks/gpqa-diamond;数据以 llm-stats.com 聚合表为主(T3)。
// 渠道说明:本榜无可用官方实测榜/厂商发布渠道可并入——datalearner 的 /benchmarks/gpqa 为
//   448 题 GPQA 全量集(榜首 Nemotron 3 Ultra 87、含 Qwen3-8B 等小模型),与本基准 198 题
//   Diamond 子集口径不同,并入会污染数据,故保持 llm-stats 单源。
// 数据形态:llm-stats 服务端渲染 HTML 表格(#|Model|Score(0-1)|Size|Context|Cost|License)。
// 性质:模型级条目(198 题,生物/物理/化学,Accuracy 口径);仅「权威基准测试」页展示。
// 输出:data/gpqa.js(window.GPQA)。
"use strict";
const BaseSource = require("../lib/BaseSource");
const registry = require("../lib/registry");
const transport = require("../lib/transport");
const normalizer = require("../lib/normalizer");
const writers = require("../lib/writers");
const parseLlmStats = require("../lib/parseLlmStats");
const CONFIG = require("../lib/config");

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
    return transport.fetchWithRetry(this.cfg.url);
  }
  parse(raw) {
    const parsed = parseLlmStats.parse(raw, { name: "GPQA Diamond", tasks: 198 });
    parsed.models.forEach(function (m) { m.src = "llm-stats"; });
    return parsed;
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
      "// " + CONFIG.channelPolicy + "\n" +
      "// 注:datalearner GPQA 为 448 题全量集(口径不同于 198 题 Diamond 子集),不并入;本榜取 llm-stats 单源。\n" +
      "// 字段说明:model=模型名;score=Accuracy(%);org=厂商;size=参数量;context=上下文;cost=API 价格;src=数据来源渠道(llm-stats)\n" +
      "// 用途:「权威基准测试」页展示,仅参考,不计入综合分/命中数。\n",
      {
        source: "GPQA Diamond",
        url: this.cfg.url,
        officialUrl: this.cfg.officialUrl,
        channelPolicy: CONFIG.channelPolicy,
        updated: T,
        refreshedAt: R,
        stats: { tasks: parsed.tasks, entries: n },
        desc: "GPQA Diamond:研究生级科学多选问答(GPQA 中最难、质量最高的 198 题子集,覆盖生物/物理/化学),领域专家正确率~65%、随机基线 25%;Accuracy 越高越好。",
        models: parsed.models
      }
    );
  }
}

module.exports = registry.register(GpqaSource);