// 数据源:Humanity's Last Exam(HLE,前沿知识广度)
// 站点:官方 lastexam.ai(CAIS/Scale AI);数据以 llm-stats.com 聚合表为主(服务端渲染)。
// 数据形态:llm-stats 服务端渲染 HTML 表格(#|Model|Score(0-1)|Size|Context|Cost|License)。
// 性质:模型级条目(2500 题,数学/科学/人文学科,闭卷得分口径);仅「权威基准测试」页展示。
// 输出:data/hle.js(window.HLE)。
"use strict";
const BaseSource = require("../lib/BaseSource");
const registry = require("../lib/registry");
const transport = require("../lib/transport");
const normalizer = require("../lib/normalizer");
const writers = require("../lib/writers");
const parseLlmStats = require("../lib/parseLlmStats");
const CONFIG = require("../lib/config");

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
    return transport.fetchWithRetry(this.cfg.url);
  }
  parse(raw) {
    return parseLlmStats.parse(raw, { name: "Humanity's Last Exam", tasks: 2500 });
  }
  toStandard(parsed) {
    return normalizer.fromArray(this.cfg.id, parsed.models, function (m, idx) {
      return { name: m.model, score: m.score, rank: idx, updated: CONFIG.TODAY, metrics: {}, meta: { org: m.org } };
    });
  }
  writeContent(parsed) {
    const T = CONFIG.TODAY, R = CONFIG.REFRESHED_AT, n = parsed.models.length;
    return writers.windowVarTemplate("HLE",
      "// 数据源:Humanity's Last Exam(前沿知识广度,更新于 " + T + ")\n" +
      "// 来源:" + this.cfg.url + "(官方:" + this.cfg.officialUrl + ")\n" +
      "// 字段说明:model=模型名;score=闭卷得分(%);org=厂商;size=参数量;context=上下文;cost=API 价格\n" +
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