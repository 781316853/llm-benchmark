// 数据源:Humanity's Last Exam(HLE,前沿知识广度)
// 站点:官方 lastexam.ai(CAIS/Scale AI);数据以 llm-stats.com 聚合表为主(服务端渲染)。
// 补充源:1) benchlm.ai 镜像(SSG 卡片式 HTML,55 模型,收录 GPT-5.4 Pro / Apodex 1.1 / GLM-5 /
//            Inkling / Ornith 系列 / Gemma 4 / Gemini 2.5 Pro 等 llm-stats 缺失模型);
//         2) datalearner 详情页(内嵌 results JSON,厂商官方发布成绩,含 GPT-6 Astra / Hy4 preview 等)。
// 数据形态:主源 #|Model|Score(0-1)|Size|Context|Cost|License;benchlm rank|Model(Vendor)|Score%;
//   datalearner results JSON(name/mode/score/date/params/org/license)。
// 性质:模型级条目(2500 题,数学/科学/人文学科,闭卷得分口径);多源合并去重取最高;
//       仅「权威基准测试」页展示,不计入综合分/命中数。
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
const CONFIG = require("../lib/config");

// 模型名归一键(与 js/data.js / model-map.js 同规则):小写 + 非字母数字折叠为连字符
function normKey(s) {
  return String(s || "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

// 跨源别名归并:两源对同一模型命名不同时归并到同一键(避免重复条目)
const KEY_ALIASES = {
  // benchlm "Claude Mythos 5" 与 llm-stats "Claude Mythos Preview" 为同一模型(64.5 vs 64.7)
  "claude-mythos-5": "claude-mythos-preview"
  // 注:datalearner "DeepSeek-V4-Flash"(51.5, 0424 发布)与 llm-stats "DeepSeek-V4-Flash-0423"
  //   (40.3)分差过大,疑似 harness 口径不同,不归并——两条并存,src 字段区分来源。
};
function aliasKey(k) { return KEY_ALIASES[k] || k; }

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
    // 主源(llm-stats)+ 补充源(benchlm.ai / datalearner)并行抓取
    const [primary, bench, vendor] = await Promise.all([
      transport.fetchWithRetry(this.cfg.url),
      transport.fetchWithRetry(CONFIG.sources.hle_benchlm.url),
      transport.fetchWithRetry(CONFIG.sources.datalearner_hle.url)
    ]);
    return { primary: primary, bench: bench, vendor: vendor };
  }
  parse(raw) {
    const primary = parseLlmStats.parse(raw.primary, { name: "Humanity's Last Exam", tasks: 2500 });
    const bench = parseBenchlm(raw.bench);
    const vendor = parseDataLearnerBench(raw.vendor);
    // 多源合并:按归一键去重,同模型取最高 score;主源字段(size/context/cost)优先
    const map = {};
    primary.models.forEach(function (m) {
      map[aliasKey(normKey(m.model))] = Object.assign({}, m, { src: "llm-stats" });
    });
    function merge(models, src) {
      models.forEach(function (m) {
        const name = m.model || m.name;
        const k = aliasKey(normKey(name));
        let e = map[k];
        // 后缀匹配:datalearner 等源可能用短名(如 "Opus 4.7"),与主源全名("Claude Opus 4.7")
        // 归一键不同,按双向后缀(≥5 字符)命中同一模型,避免重复条目
        if (!e && normKey(name).length >= 5) {
          const nk = normKey(name);
          const hit = Object.keys(map).filter(function (key) {
            const ek = normKey(map[key].model);
            return (ek.length >= 5 && nk.endsWith(ek)) || (ek.length >= 5 && ek.endsWith(nk));
          })[0];
          if (hit) e = map[hit];
        }
        if (!e) {
          map[k] = { rank: null, model: name, org: m.org, score: m.score, size: null, context: null, cost: null, license: m.license || null, src: src };
        } else if (m.score > e.score) {
          e.score = m.score;
          // 保留更完整的模型名(全名优先,如主源 "Claude Opus 4.7" 不被短名 "Opus 4.7" 覆盖)
          if (name.length >= e.model.length) e.model = name;
          e.org = m.org || e.org;
          e.src = src;
        }
      });
    }
    merge(bench, "benchlm");
    merge(vendor, "datalearner");
    const models = Object.keys(map).map(function (k) {
      const m = map[k];
      return { rank: 0, model: m.model, org: m.org, score: m.score, size: m.size, context: m.context, cost: m.cost, license: m.license, src: m.src };
    });
    models.sort(function (a, b) { return b.score - a.score; });
    models.forEach(function (m, i) { m.rank = i + 1; });
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
      "// 补充:https://benchlm.ai/benchmarks/hle(benchlm 镜像) · https://www.datalearner.com/benchmarks/hle(厂商官方发布)\n" +
      "// 字段说明:model=模型名;score=闭卷得分(%);org=厂商;size=参数量;context=上下文;cost=API 价格;src=数据来源(llm-stats/benchlm/datalearner)\n" +
      "// 用途:「权威基准测试」页展示,仅参考,不计入综合分/命中数。\n",
      {
        source: "Humanity's Last Exam",
        url: this.cfg.url,
        officialUrl: this.cfg.officialUrl,
        updated: T,
        refreshedAt: R,
        stats: { tasks: parsed.tasks, entries: n },
        desc: "Humanity's Last Exam(HLE):CAIS 与 Scale AI 推出的前沿知识广度基准,2500 道由各领域专家撰写、无网络可检索解的问题(数学/科学/人文学科等),目的在衡量模型逼近人类专家知识天花板;得分越高越好。",
        models: parsed.models
      }
    );
  }
}

module.exports = registry.register(HleSource);