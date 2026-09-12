// 数据源:NL2Repo-Bench(长程仓库生成·编码 Agent)
// 站点:官方 github.com/multimodal-art-projection/NL2RepoBench(字节 Seed / M-A-P 等);
//       数据以 llm-stats.com 聚合表为主(服务端渲染)。
// 数据形态:llm-stats 服务端渲染 HTML 表格(#|Model|Score(0-1)|Size|Context|Cost|License)。
// 性质:模型级条目(103 个 Python 库从零生成任务,test-pass-rate 口径);仅「权威基准测试」页展示。
// 输出:data/nl2repo.js(window.NL2REPO)。
"use strict";
const BaseSource = require("../lib/BaseSource");
const registry = require("../lib/registry");
const transport = require("../lib/transport");
const normalizer = require("../lib/normalizer");
const writers = require("../lib/writers");
const parseLlmStats = require("../lib/parseLlmStats");
const CONFIG = require("../lib/config");

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
    return transport.fetchWithRetry(this.cfg.url);
  }
  parse(raw) {
    return parseLlmStats.parse(raw, { name: "NL2Repo-Bench", tasks: 103 });
  }
  toStandard(parsed) {
    return normalizer.fromArray(this.cfg.id, parsed.models, function (m, idx) {
      return { name: m.model, score: m.score, rank: idx, updated: CONFIG.TODAY, metrics: {}, meta: { org: m.org } };
    });
  }
  writeContent(parsed) {
    const T = CONFIG.TODAY, R = CONFIG.REFRESHED_AT, n = parsed.models.length;
    return writers.windowVarTemplate("NL2REPO",
      "// 数据源:NL2Repo-Bench(长程仓库生成·编码 Agent,更新于 " + T + ")\n" +
      "// 来源:" + this.cfg.url + "(官方:" + this.cfg.officialUrl + ")\n" +
      "// 字段说明:model=模型名;score=test-pass-rate(%);org=厂商;size=参数量;context=上下文;cost=API 价格\n" +
      "// 用途:「权威基准测试」页展示,仅参考,不计入综合分/命中数。\n",
      {
        source: "NL2Repo-Bench",
        url: this.cfg.url,
        officialUrl: this.cfg.officialUrl,
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