// 数据源:Terminal-Bench 2.1(斯坦福/Laude 终端命令行 Agent 评测,89 任务)
// 站点:官方 https://www.tbench.ai/news/terminal-bench-2-1(线上无独立 2.1 榜单路由);
//       主源为 llm-stats.com 聚合表(服务端渲染,0-1 归一化自报分,35 模型),
//       补充源为 datalearner 详情页(内嵌 results JSON,含模式/发布时间/参数量,~30 条)。
// 数据形态:主源 #|Model|Score(0-1)|Size|Context|Cost|License;补充源 results JSON。
// 性质:模型级条目,0-1 自报分已换算为百分比,与官方 agent×model 解决率口径不同;
//       双源合并去重取最高(llm-stats 字段优先),与 4.0/3.0 合并为一个基准组计入总览综合分。
// 输出:data/tbench_v2.js(window.TBENCH_V21),供「权威基准测试」页完整展示与总览矩阵。
"use strict";
const BaseSource = require("../lib/BaseSource");
const registry = require("../lib/registry");
const transport = require("../lib/transport");
const normalizer = require("../lib/normalizer");
const writers = require("../lib/writers");
const parseLlmStats = require("../lib/parseLlmStats");
const { parseDataLearnerBench } = require("./datalearner");
const CONFIG = require("../lib/config");

// 模型名归一键(与 js/data.js / model-map.js 同规则):小写 + 非字母数字折叠为连字符
function normKey(s) {
  return String(s || "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

// 跨源别名归并:两源对同一模型命名不同时归并到同一键(避免重复条目)
const KEY_ALIASES = {
  "deepseek-v4-pro": "deepseek-v4-pro-0813",
  "deepseek-v4-flash": "deepseek-v4-flash-0731"
};
function aliasKey(k) { return KEY_ALIASES[k] || k; }

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
    // 主源(llm-stats)+ 补充源(datalearner)并行抓取
    const [primary, extra] = await Promise.all([
      transport.fetchWithRetry(this.cfg.url),
      transport.fetchWithRetry(CONFIG.sources.datalearner_tbench21.url)
    ]);
    return { primary: primary, extra: extra };
  }
  parse(raw) {
    const primary = parseLlmStats.parse(raw.primary, { name: "Terminal-Bench 2.1", tasks: 89 });
    const extra = parseDataLearnerBench(raw.extra);
    // 双源合并:按归一键去重,同模型取最高 score;主源字段(org/size/context/cost)优先
    const map = {};
    primary.models.forEach(function (m) {
      map[aliasKey(normKey(m.model))] = {
        model: m.model, org: m.org, score: m.score,
        size: m.size, context: m.context, cost: m.cost, license: m.license, src: "llm-stats"
      };
    });
    extra.forEach(function (dl) {
      const k = aliasKey(normKey(dl.name));
      const e = map[k];
      if (!e) {
        map[k] = { model: dl.name, org: dl.org, score: dl.score, size: null, context: null, cost: null, license: dl.license, src: "datalearner" };
      } else if (dl.score > e.score) {
        e.score = dl.score;
        e.model = dl.name;
        e.org = dl.org || e.org;
      }
      // datalearner 独有字段回填:模式 -> effort,发布时间 -> date
      if (dl.mode) map[k].effort = dl.mode;
      if (dl.date) map[k].date = dl.date;
    });
    const models = Object.keys(map).map(function (k) {
      const m = map[k];
      return {
        model: m.model, agent: null, effort: m.effort || null,
        score: m.score, ci: null, date: m.date || null, tokens: null, cost: m.cost || null,
        org: m.org, size: m.size, src: m.src
      };
    });
    models.sort(function (a, b) { return b.score - a.score; });
    models.forEach(function (m, i) { m.rank = i + 1; });
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
      "// 来源:" + this.cfg.url + "(官方:" + this.cfg.officialUrl + ") · 补充镜像 https://www.datalearner.com/benchmarks/terminal-bench-2-1\n" +
      "// 字段说明:model=模型名;effort=推理模式(datalearner 提供,如 最高(工具));agent=Agent 框架(源站未给出,置空);\n" +
      "//          score=得分(%);ci=95% 置信区间;date=模型发布日期;cost=API 价格(llm-stats);org/size 为厂商/参数量\n" +
      "// 用途:计入总览页综合分与命中数(与 4.0/3.0 合并为一个基准组,取值优先级 4.0>3.0>2.1);「权威基准测试」页完整展示。\n" +
      "// 注:采用 llm-stats 的 2.1 榜单(0-1 归一化自报分,已换算为百分比)+ datalearner 补充合并取最高,\n" +
      "//    与官方 agent×model 解决率口径不同;阅读时请注意口径差异。\n",
      {
        source: "Terminal-Bench",
        url: this.cfg.url,
        officialUrl: this.cfg.officialUrl,
        version: "2.1",
        updated: T,
        refreshedAt: R,
        stats: { tasks: parsed.tasks, entries: n },
        desc: "Terminal-Bench 2.1:在真实命令行环境中评测编码 Agent(89 个任务,修复 2.0 中 28 个任务问题)。本快照采用 llm-stats 模型级 0-1 归一化自报分(换算为百分比)与 datalearner 补充双源合并取最高,越高越好。",
        models: parsed.models
      }
    );
  }
}

module.exports = registry.register(TBenchV21Source);
