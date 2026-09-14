// 数据源:Agents' Last Exam(UC Berkeley RDI 真实专业工作流评测)
// 站点:官方 agents-last-exam.org/leaderboard 为 Next.js 客户端渲染(原始 HTML 无数据)。
// 渠道层级(T2 厂商官方发布 > T3 第三方聚合):主源 datalearner 详情页
//   (内嵌 results JSON,厂商官方发布成绩);补充源 llm-stats 聚合表
//   (#|Model|Score(0-1)|Size|Context|Cost|License)。
// 合并策略:见 scripts/lib/mergeByTier.js——高层级分数不被低层级覆盖,低层级仅补缺失模型与字段。
// 性质:模型级条目(1500+ 任务、55 子行业,Pass@1 口径);仅「权威基准测试」页展示。
// 输出:data/lastexam.js(window.LASTEXAM)。
"use strict";
const BaseSource = require("../lib/BaseSource");
const registry = require("../lib/registry");
const transport = require("../lib/transport");
const normalizer = require("../lib/normalizer");
const writers = require("../lib/writers");
const { parseDataLearnerBench } = require("./datalearner");
const parseLlmStats = require("../lib/parseLlmStats");
const { createTierMerger } = require("../lib/mergeByTier");
const CONFIG = require("../lib/config");

class LastExamSource extends BaseSource {
  constructor() {
    super({
      id: "lastexam", name: "Agents' Last Exam", type: "html",
      url: CONFIG.sources.lastexam.url, host: CONFIG.sources.lastexam.host,
      officialUrl: CONFIG.sources.lastexam.officialUrl,
      outFile: "lastexam.js", windowVar: "LASTEXAM"
    });
  }
  async fetch() {
    // 主源(datalearner 厂商官方发布)+ 补充源(llm-stats)并行抓取
    const [vendor, primary] = await Promise.all([
      transport.fetchWithRetry(CONFIG.sources.datalearner_lastexam.url),
      transport.fetchWithRetry(this.cfg.url)
    ]);
    return { primary: primary, vendor: vendor };
  }
  parse(raw) {
    const primary = parseLlmStats.parse(raw.primary, { name: "Agents' Last Exam", tasks: 1490 }).models;
    const vendor = parseDataLearnerBench(raw.vendor).map(function (m) {
      return { model: m.name, org: m.org, score: m.score, license: m.license, effort: m.mode || null, date: m.date || null };
    });
    // 按渠道层级合并:主源(T2 厂商发布)优先入表,llm-stats(T3)仅补缺与回填字段
    const merger = createTierMerger({});
    merger.add(vendor, "datalearner");
    merger.add(primary, "llm-stats");
    const models = merger.values();
    return { tasks: 1490, models: models };
  }
  toStandard(parsed) {
    return normalizer.fromArray(this.cfg.id, parsed.models, function (m, idx) {
      return {
        name: m.model,
        score: m.score,
        rank: idx,
        updated: CONFIG.TODAY,
        metrics: {},
        meta: { org: m.org, src: m.src }
      };
    });
  }
  writeContent(parsed) {
    const T = CONFIG.TODAY, R = CONFIG.REFRESHED_AT, n = parsed.models.length;
    return writers.windowVarTemplate("LASTEXAM",
      "// 数据源:Agents' Last Exam(UC Berkeley RDI 真实专业工作流评测,更新于 " + T + ")\n" +
      "// 主渠道:https://www.datalearner.com/benchmarks/agents-last-exam(厂商官方发布成绩转录)\n" +
      "// 补充:" + this.cfg.url + "(官方:" + this.cfg.officialUrl + ")\n" +
      "// " + CONFIG.channelPolicy + "\n" +
      "// 字段说明:model=模型名;score=Pass@1(%);org=厂商;size=参数量;context=上下文;cost=API 价格;src=数据来源渠道(datalearner/llm-stats)\n" +
      "// 用途:「权威基准测试」页展示,仅参考,不计入综合分/命中数。\n",
      {
        source: "Agents' Last Exam",
        url: this.cfg.url,
        officialUrl: this.cfg.officialUrl,
        channelPolicy: CONFIG.channelPolicy,
        updated: T,
        refreshedAt: R,
        stats: { tasks: parsed.tasks, entries: n },
        desc: "Agents' Last Exam(ALE):UC Berkeley 主导的覆盖最广的专业工作流评测(1500+ 任务、55 子行业、300+ 领域专家共建),Pass@1 越高越好。",
        models: parsed.models
      }
    );
  }
}

module.exports = registry.register(LastExamSource);
