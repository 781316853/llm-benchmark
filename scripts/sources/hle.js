// 数据源:Humanity's Last Exam(HLE,前沿知识广度)
// 站点:官方 lastexam.ai(CAIS/Scale AI);本榜无可用官方实测榜,按渠道层级合并:
//   T2 厂商官方发布 > T3 第三方聚合。主源 datalearner 详情页(内嵌 results JSON,转录厂商官方发布成绩,
//   含 GPT-6 Astra / Hy4 preview 等);补充源 llm-stats 聚合表(服务端渲染)、benchlm.ai 镜像
//   (SSG 卡片式 HTML,55 模型)与 AA 复测口径 benchlm 镜像页(181 模型,src=aa)。
// AA 口径注意:AA 为 Artificial Analysis 自家 harness 复测(接近无工具口径),分数系统性低于
//   官方口径约 5 分(头部 Fable 5.1 59.1 vs 官方口径 65);仅补官方渠道未收录的缺失模型
//   (GPT-5.6 Terra/Luna、Grok 4.6、Gemini 3.8/3.7 Flash、Muse Spark 1.3 等),src=aa 徽标区分;
//   同层取最高,重叠模型保留现有高分,不被 AA 低分覆盖。
// 数据形态:datalearner results JSON(name/mode/score/date/params/org/license);
//   llm-stats #|Model|Score(0-1)|Size|Context|Cost|License;benchlm/AA 页卡片式 div。
// 合并策略:见 scripts/lib/mergeByTier.js——高层级分数不被低层级覆盖,低层级仅补缺失模型与字段。
// 性质:模型级条目(2500 题,数学/科学/人文学科,闭卷得分口径);
//       仅「权威基准测试」页与总览参考列展示,不计入综合分/命中数。
// 输出:data/hle.js(window.HLE)。
"use strict";
const BaseSource = require("../lib/BaseSource");
const registry = require("../lib/registry");
const transport = require("../lib/transport");
const normalizer = require("../lib/normalizer");
const writers = require("../lib/writers");
const parseLlmStats = require("../lib/parseLlmStats");
const { parseBenchlm } = require("../lib/parseBenchlm");
const { parseDataLearnerBench } = require("./datalearner");
const { createTierMerger } = require("../lib/mergeByTier");
const CONFIG = require("../lib/config");

// 跨源别名归并:两源对同一模型命名不同时归并到同一键(避免重复条目)
const KEY_ALIASES = {
  // benchlm "Claude Mythos 5" 与 llm-stats "Claude Mythos Preview" 为同一模型(64.5 vs 64.7)
  "claude-mythos-5": "claude-mythos-preview"
  // 注:datalearner "DeepSeek-V4-Flash"(51.5, 0424 发布)与 llm-stats "DeepSeek-V4-Flash-0423"
  //   (40.3)分差过大,疑似 harness 口径不同,不归并——两条并存,src 字段区分来源。
};

class HleSource extends BaseSource {
  constructor() {
    super({
      id: "hle", name: "Humanity's Last Exam", type: "html",
      url: CONFIG.sources.hle.url, host: CONFIG.sources.hle.host,
      officialUrl: CONFIG.sources.hle.officialUrl,
      outFile: "hle.js", windowVar: "HLE"
    });
  }
  async fetch() {
    // 主源(datalearner 厂商官方发布)+ 补充源(llm-stats / benchlm.ai / AA 复测镜像)并行抓取
    const [vendor, primary, bench, aa] = await Promise.all([
      transport.fetchWithRetry(CONFIG.sources.datalearner_hle.url),
      transport.fetchWithRetry(this.cfg.url),
      transport.fetchWithRetry(CONFIG.sources.hle_benchlm.url),
      transport.fetchWithRetry(CONFIG.sources.hle_aa.url)
    ]);
    return { primary: primary, bench: bench, aa: aa, vendor: vendor };
  }
  parse(raw) {
    const primary = parseLlmStats.parse(raw.primary, { name: "Humanity's Last Exam", tasks: 2500 });
    const bench = parseBenchlm(raw.bench);
    const aa = parseBenchlm(raw.aa);
    const vendor = parseDataLearnerBench(raw.vendor).map(function (m) {
      return { model: m.name, org: m.org, score: m.score, license: m.license };
    });
    // 按渠道层级合并:主源(T2)优先入表,补充源(T3)仅补缺与回填字段;AA 低分不覆盖已有条目
    const merger = createTierMerger({ aliases: KEY_ALIASES });
    merger.add(vendor, "datalearner");
    merger.add(primary.models, "llm-stats");
    merger.add(bench, "benchlm");
    merger.add(aa, "aa");
    const models = merger.values();
    return { tasks: 2500, models: models };
  }
  toStandard(parsed) {
    return normalizer.fromArray(this.cfg.id, parsed.models, function (m, idx) {
      return { name: m.model, score: m.score, rank: idx, updated: CONFIG.TODAY, metrics: {}, meta: { org: m.org, src: m.src } };
    });
  }
  writeContent(parsed) {
    const T = CONFIG.TODAY, R = CONFIG.REFRESHED_AT, n = parsed.models.length;
    return writers.windowVarTemplate("HLE",
      "// 数据源:Humanity's Last Exam(前沿知识广度,更新于 " + T + ")\n" +
      "// 来源:" + this.cfg.url + "(官方:" + this.cfg.officialUrl + ")\n" +
      "// 主渠道:https://www.datalearner.com/benchmarks/hle(厂商官方发布成绩转录)\n" +
      "// 补充:llm-stats 聚合表 · https://benchlm.ai/benchmarks/hle(benchlm 镜像) · https://benchlm.ai/benchmarks/aahle(AA 复测口径)\n" +
      "// " + CONFIG.channelPolicy + "\n" +
      "// 口径注:AA 复测为第三方自家 harness(接近无工具口径),分数系统性低于官方口径约 5 分,\n" +
      "//   仅补官方渠道未收录的模型,src=aa 区分;重叠模型保留现有高分,不被 AA 低分覆盖。\n" +
      "// 字段说明:model=模型名;score=闭卷得分(%);org=厂商;size=参数量;context=上下文;cost=API 价格;src=数据来源渠道(datalearner/llm-stats/benchlm/aa)\n" +
      "// 用途:「权威基准测试」页展示 + 总览矩阵参考列,仅参考,不计入综合分/命中数。\n",
      {
        source: "Humanity's Last Exam",
        url: this.cfg.url,
        officialUrl: this.cfg.officialUrl,
        channelPolicy: CONFIG.channelPolicy,
        updated: T,
        refreshedAt: R,
        stats: { tasks: parsed.tasks, entries: n },
        desc: "Humanity's Last Exam(HLE):CAIS 与 Scale AI 推出的前沿知识广度基准,2500 道由各领域专家撰写、无网络可检索解的问题(数学/科学/人文学科等),目的在衡量模型逼近人类专家知识天花板;得分越高越好。多源合并:datalearner/llm-stats/benchlm 为公开口径,AA 复测为第三方自家 harness(接近无工具口径,系统性偏低约 5 分,src=aa 区分,仅补缺失模型)。",
        models: parsed.models
      }
    );
  }
}

module.exports = registry.register(HleSource);
