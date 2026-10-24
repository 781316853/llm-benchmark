// 数据源:AutomationBench(Zapier 跨应用业务工作流智能体基准)
// 站点:官方 zapier.com/benchmarks 的榜单表原始 HTML 只服务端渲染 Top 10
//   (其余行由前端「See 85 more」展开),且官方主榜使用未公开的 held-out 私有任务集,
//   单请求取不到全表 → 官方页在本站仅作来源链接(见 config.sources.automationbench 注释)。
// 渠道层级(T2 厂商官方发布 > T3 第三方聚合 > T4 无出处转录):主源 datalearner 详情页
//   (内嵌 results JSON,厂商官方发布成绩转录,含评测模式/发布时间/参数量/许可/evidence 出处);
//   补充源 llm-stats 聚合表(#|Model|Score(0-1)|Size|Context|Cost|License)与
//   benchlm.ai 镜像页(内嵌 __NEXT_DATA__ JSON);
//   AI Release Tracker 聚合榜(T3)只补缺失模型,不覆盖以上渠道分数。
// 出处校验(2026-10-17 取证):datalearner 该页部分行 evidence 缺 sourceUrl(无出处、口径不可回溯),
//   其中 3 行与两条相互一致的 T3 值冲突 16~28 分(详见 parse() 内注释)。此类行一律按最低层级
//   src=datalearner-unsourced 入库 —— 仅补缺失模型、不覆盖有出处数据,行级「无出处」徽标区分。
// 合并策略:见 scripts/lib/mergeByTier.js——高层级分数不被低层级覆盖,低层级仅补缺失模型与字段。
// 口径:600 个公开任务 / 47 个模拟 SaaS 工具 / 6 个业务域(销售/营销/运营/客服/财务/HR);
//   主指标 task_completed_correctly 为严格全通过率(每条断言都须成立,无 LLM-as-judge),
//   partial_credit 仅作诊断不入榜;分数整体偏低(头部约 60%),失败主因为「宣称完成但最终环境状态错误」。
// 性质:模型级条目;仅「权威基准测试」页展示,不计入综合分/命中数。
// 输出:data/automationbench.js(window.AUTOMATIONBENCH)。
"use strict";
const BaseSource = require("../lib/BaseSource");
const registry = require("../lib/registry");
const transport = require("../lib/transport");
const normalizer = require("../lib/normalizer");
const writers = require("../lib/writers");
const parseLlmStats = require("../lib/parseLlmStats");
const { parseBenchlm } = require("../lib/parseBenchlm");
const { parseDataLearnerBench } = require("./datalearner");
const art = require("../lib/aireleasetracker");
const { createTierMerger } = require("../lib/mergeByTier");
const CONFIG = require("../lib/config");

class AutomationBenchSource extends BaseSource {
  constructor() {
    super({
      id: "automationbench", name: "AutomationBench", type: "html",
      url: CONFIG.sources.automationbench.url, host: CONFIG.sources.automationbench.host,
      officialUrl: CONFIG.sources.automationbench.officialUrl,
      outFile: "automationbench.js", windowVar: "AUTOMATIONBENCH"
    });
  }
  async fetch() {
    // 主源(datalearner 厂商官方发布)+ 补充源(llm-stats / benchlm.ai)并行抓取
    const [vendor, primary, bench, artData] = await Promise.all([
      transport.fetchWithRetry(CONFIG.sources.datalearner_automationbench.url),
      transport.fetchWithRetry(this.cfg.url),
      transport.fetchWithRetry(CONFIG.sources.automationbench_benchlm.url),
      art.fetchModelsSafe("automationbench")
    ]);
    return { art: artData, primary: primary, bench: bench, vendor: vendor };
  }
  parse(raw) {
    const primary = parseLlmStats.parse(raw.primary, { name: "AutomationBench", tasks: 600 });
    const bench = parseBenchlm(raw.bench);
    // datalearner 的 params 以「亿」为单位、与 llm-stats 的 size(763B / 1.1T)量纲不同,
    // 故不并入参数量列(与 lastexam/arcagi3 同处理),仅保留模式/发布日期等文字字段。
    const vendorAll = parseDataLearnerBench(raw.vendor, { withEvidence: true });
    // 出处分流(2026-10-17 取证):本页 29 行里有 7 行 evidence 缺 sourceUrl(无出处,口径无法回溯),
    //   其中 Claude Opus 5 50.3 / Kimi K3 46.7 / GPT-5.6 Sol 45.8 与 llm-stats、benchlm.ai 两条
    //   相互一致的 T3 源值 26.0 / 30.8 / 18.1 相差 16~28 分;GPT-5.6 Sol 的 18.1 在 datalearner 自身
    //   还有一条带出处(openai.com/index/gpt-6-astra/)的重复行 —— 无出处行既无据可回溯、又与有据值冲突。
    //   处理:有出处 → T2「厂商官方发布」;无出处 → T4「datalearner-unsourced」(仅补缺,
    //   行级「无出处」徽标),不再让无据值压过 llm-stats/benchlm 等可回溯来源。
    // 注:datalearner 的 params 以「亿」为单位、与 llm-stats 的 size(763B / 1.1T)量纲不同,
    //   故不并入参数量列(与 lastexam/arcagi3 同处理),仅保留模式/发布日期等文字字段。
    const vendor = [], unsourced = [];
    vendorAll.forEach(function (m) {
      const ev = m.evidence || {};
      const rec = { model: m.name, org: m.org, score: m.score, license: m.license, effort: m.mode || null, date: m.date || null };
      if (ev.sourceUrl) vendor.push(rec); else unsourced.push(rec);
    });
    if (unsourced.length) {
      console.log("  [AutomationBench] 无出处转录行(降为仅补缺、不覆盖有出处数据):" +
        unsourced.map(function (m) { return m.model + " " + m.score; }).join(", "));
    }
    // 任一渠道解析为空 = 页面结构大概率又变了:必须让本源失败并保留旧文件,否则合并会静默丢数。
    if (!vendorAll.length) throw new Error("AutomationBench datalearner 主源未解析到任何数据(页面结构可能已变化)");
    if (!primary.models.length) throw new Error("AutomationBench llm-stats 主源未解析到任何数据(页面结构可能已变化)");
    if (!bench.length) throw new Error("AutomationBench benchlm 补充源未解析到任何数据(页面结构可能已变化)");
    // 按渠道层级合并:有出处的 datalearner(T2)> llm-stats / benchlm(T3)> 无出处转录(T4,仅补缺)
    const merger = createTierMerger({});
    merger.add(vendor, "datalearner");
    merger.add(primary.models, "llm-stats");
    merger.add(bench, "benchlm");
    merger.add(unsourced, "datalearner-unsourced");
    // AI Release Tracker(T3)只补缺失模型:以上渠道已收录的模型一律不改分
    const artModels = (raw.art ? raw.art.models : []).map(function (m) {
      return { model: m.model, score: m.score, org: null };
    });
    merger.add(artModels, "aireleasetracker", { fillOnly: true });
    const models = merger.values();
    return { tasks: 600, models: models, unsourced: unsourced.length };
  }
  toStandard(parsed) {
    return normalizer.fromArray(this.cfg.id, parsed.models, function (m, idx) {
      return { name: m.model, score: m.score, rank: idx, updated: CONFIG.TODAY, metrics: {}, meta: { org: m.org, src: m.src } };
    });
  }
  writeContent(parsed) {
    const T = CONFIG.TODAY, R = CONFIG.REFRESHED_AT, n = parsed.models.length;
    return writers.windowVarTemplate("AUTOMATIONBENCH",
      "// 数据源:AutomationBench(Zapier 跨应用业务工作流智能体基准,更新于 " + T + ")\n" +
      "// 主渠道:https://www.datalearner.com/benchmarks/automation-bench(厂商官方发布成绩转录)\n" +
      "// 补充:" + this.cfg.url + "(官方:" + this.cfg.officialUrl + ")\n" +
      "// 补充:https://benchlm.ai/benchmarks/automationbench(benchlm 镜像)\n" +
      "// 补充:https://aireleasetracker.com/benchmark/automationbench(第三方聚合 T3,只补缺失模型)\n" +
      "// 官方榜说明:zapier.com/benchmarks 原始 HTML 只渲染 Top 10(其余行由前端展开),且主榜用私有 held-out 集,故仅作来源链接\n" +
      "// 出处校验:datalearner 转录行中 evidence 缺 sourceUrl 的按最低层级处理(src=datalearner-unsourced,仅补缺、不覆盖有出处数据)\n" +
      "// " + CONFIG.channelPolicy + "\n" +
      "// 字段说明:model=模型名;score=严格全通过率 task_completed_correctly(%);org=厂商;size=参数量;context=上下文;cost=API 价格;effort=评测模式;date=发布日期;src=数据来源渠道(datalearner/datalearner-unsourced/llm-stats/benchlm/aireleasetracker)\n" +
      "// 用途:「权威基准测试」页展示,仅参考,不计入综合分/命中数。\n",
      {
        source: "AutomationBench",
        url: this.cfg.url,
        officialUrl: this.cfg.officialUrl,
        repoUrl: CONFIG.sources.automationbench.repoUrl,
        paperUrl: "https://arxiv.org/abs/2604.18934",
        channelPolicy: CONFIG.channelPolicy,
        updated: T,
        refreshedAt: R,
        stats: { tasks: parsed.tasks, domains: 6, tools: 47, entries: n, unsourced: parsed.unsourced },
        desc: "AutomationBench(Zapier):跨应用业务工作流智能体基准,600 个公开任务分布在 47 个模拟 SaaS 工具、6 个业务域(销售/营销/运营/客服/财务/HR),把一个真实运营请求交给智能体、再按最终环境状态做确定性断言打分(不看回复文本、无 LLM-as-judge);主指标为严格全通过率 task_completed_correctly,越高越好。分数普遍偏低,主因是「宣称完成但环境状态错误」的假自信。",
        models: parsed.models
      }
    );
  }
}

module.exports = registry.register(AutomationBenchSource);
