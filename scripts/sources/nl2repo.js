// 数据源:NL2Repo-Bench(长程仓库生成·编码 Agent)
// 站点:官方 github.com/multimodal-art-projection/NL2RepoBench(字节 Seed / M-A-P 等);
//   按渠道层级合并(T2 厂商官方发布 > T3 第三方聚合):
//   主源 1)官方论文评测表(arxiv 2512.12730v2 Table 2,基准作者官方 OpenHands 协议,12 条上一代模型:
//     Claude-Sonnet-4.5 / GPT-5 / Kimi-k2 / DeepSeek-V3.1/V3.2 / GLM-4.6 / Qwen3 系列等);
//   主源 2)datalearner 详情页(厂商官方发布成绩,如 DeepSeek-V4-Flash 54.2);
//   补充源 3)llm-stats.com 聚合表(服务端渲染);4)benchlm.ai 镜像(收录 Ornith 系列 /
//     Claude Opus 4.5 / Qwen3.6 Max preview 等缺失模型)。
// 数据形态:论文表 Model|Overall Pass@1(%)|Count|Easy|Medium|Hard;datalearner 内嵌 results JSON;
//   llm-stats #|Model|Score(0-1)|Size|Context|Cost|License;benchlm rank|Model(Vendor)|Score%。
// 合并策略:见 scripts/lib/mergeByTier.js——高层级分数不被低层级覆盖,低层级仅补缺失模型与字段。
// 性质:模型级条目(103 个 Python 库从零生成任务,test-pass-rate 口径);
//       自 2026-09-19 起不再计入总览综合分与命中数(原权重 9%,已移出总览矩阵),
//       改为仅在「权威基准测试」页展示;抓取与写入照旧。
// 输出:data/nl2repo.js(window.NL2REPO)。
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
const officialSeeds = require("../lib/official-seeds");

// 跨源别名归并:两源对同一模型命名不同时归并到同一键(避免重复条目)
const KEY_ALIASES = {
  // datalearner 用 "DeepSeek-V4-Flash/V4-Pro",llm-stats 用 "...-0731"/"...-0813"(同官方成绩)
  "deepseek-v4-flash": "deepseek-v4-flash-0731",
  "deepseek-v4-pro": "deepseek-v4-pro-0813"
};

// 解析官方论文评测表(arxiv HTML Table 2:Model|Overall Pass@1(%)|Count|Easy|Medium|Hard):
//   前两行为表头(multirow),模型行形如 <td>Claude-Sonnet-4.5 (Claude Code)</td><td>40.2</td><td>3</td>...
// 输出:[{model, org:null, score}]
function parsePaper(html) {
  const tables = html.match(/<table[\s\S]*?<\/table>/g) || [];
  for (const t of tables) {
    if (!/Overall/.test(t) || !/Pass@1/i.test(t)) continue;
    const rows = t.match(/<tr[\s\S]*?<\/tr>/g) || [];
    const models = [];
    rows.forEach(function (r) {
      const cells = (r.match(/<t[dh][\s\S]*?<\/t[dh]>/g) || [])
        .map(function (c) { return c.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim(); });
      if (cells.length < 2) return;
      const score = parseFloat(cells[1]);
      if (!isFinite(score)) return;               // 表头行跳过
      const model = cells[0];
      if (!model || /Model|Score/i.test(model)) return;
      models.push({ model: model, org: null, score: score });
    });
    if (models.length) return models;
  }
  throw new Error("NL2Repo 论文页未解析到评测表(结构变更)");
}

class Nl2RepoSource extends BaseSource {
  constructor() {
    super({
      id: "nl2repo", name: "NL2Repo-Bench", type: "html",
      url: CONFIG.sources.nl2repo.url, host: CONFIG.sources.nl2repo.host,
      officialUrl: CONFIG.sources.nl2repo.officialUrl,
      outFile: "nl2repo.js", windowVar: "NL2REPO"
    });
  }
  async fetch() {
    // 主源(论文表 / datalearner 厂商发布)+ 补充源(llm-stats / benchlm.ai)并行抓取
    const [paper, vendor, primary, extra] = await Promise.all([
      transport.fetchWithRetry(CONFIG.sources.nl2repo_paper.url),
      transport.fetchWithRetry(CONFIG.sources.datalearner_nl2repo.url),
      transport.fetchWithRetry(this.cfg.url),
      transport.fetchWithRetry(CONFIG.sources.nl2repo_benchlm.url)
    ]);
    return { primary: primary, extra: extra, paper: paper, vendor: vendor };
  }
  parse(raw) {
    const paper = parsePaper(raw.paper);
    const vendor = parseDataLearnerBench(raw.vendor).map(function (m) {
      return { model: m.name, org: m.org, score: m.score, license: m.license };
    });
    const primary = parseLlmStats.parse(raw.primary, { name: "NL2Repo-Bench", tasks: 103 });
    const extra = parseBenchlm(raw.extra);
    // 按渠道层级合并:主源(T2 论文/厂商发布)优先入表,补充源(T3)仅补缺与回填字段
    const merger = createTierMerger({ aliases: KEY_ALIASES });
    merger.add(paper, "paper");
    merger.add(vendor, "datalearner");
    merger.add(primary.models, "llm-stats");
    merger.add(extra, "benchlm");
    const models = merger.values();
    // Qwen 官方发布种子层(T2):仅补缺失模型,不覆盖既有官方/厂商条目。
    officialSeeds.appendMissingSeed(models, "nl2repo");
    return { tasks: 103, models: models };
  }
  toStandard(parsed) {
    return normalizer.fromArray(this.cfg.id, parsed.models, function (m, idx) {
      return { name: m.model, score: m.score, rank: idx, updated: CONFIG.TODAY, metrics: {}, meta: { org: m.org, src: m.src } };
    });
  }
  writeContent(parsed) {
    const T = CONFIG.TODAY, R = CONFIG.REFRESHED_AT, n = parsed.models.length;
    return writers.windowVarTemplate("NL2REPO",
      "// 数据源:NL2Repo-Bench(长程仓库生成·编码 Agent,更新于 " + T + ")\n" +
      "// 来源:" + this.cfg.url + "(官方:" + this.cfg.officialUrl + ")\n" +
      "// 主渠道:官方论文评测表 https://arxiv.org/html/2512.12730v2(Table 2) · https://www.datalearner.com/benchmarks/nl2repo-bench(厂商官方发布)\n" +
      "// 补充:llm-stats 聚合表 · https://www.benchlm.ai/benchmarks/nl2repo(benchlm 镜像)\n" +
      "// 补充:Qwen 官方博客/模型卡(厂商官方发布 T2,人工转录,仅补缺失模型,见 https://developer.aliyun.com/article/1763215)\n" +
      "// " + CONFIG.channelPolicy + "\n" +
      "// 字段说明:model=模型名;score=test-pass-rate(%);org=厂商;size=参数量;context=上下文;cost=API 价格;src=数据来源渠道(paper/datalearner/qwen-official/llm-stats/benchlm)\n" +
      "// 用途:自 2026-09-19 起不再计入总览综合分与命中数,仅「权威基准测试」页完整展示。\n",
      {
        source: "NL2Repo-Bench",
        url: this.cfg.url,
        officialUrl: this.cfg.officialUrl,
        channelPolicy: CONFIG.channelPolicy,
        updated: T,
        refreshedAt: R,
        stats: { tasks: parsed.tasks, entries: n },
        desc: "NL2Repo-Bench:自然语言到完整代码仓库的长程生成基准(字节 Seed / M-A-P 等),给定单一 NL 需求文档与空工作区,智能体需自主设计架构、管理依赖、实现多模块并产出可安装的 Python 库,以测试通过率衡量;得越高越好。",
        models: parsed.models
      }
    );
  }
}

module.exports = registry.register(Nl2RepoSource);
