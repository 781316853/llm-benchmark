// 数据源:NL2Repo-Bench(长程仓库生成·编码 Agent)
// 站点:官方 github.com/multimodal-art-projection/NL2RepoBench(字节 Seed / M-A-P 等);
//       主源为 llm-stats.com 聚合表(服务端渲染),补充源为 benchlm.ai 镜像(SSG 卡片式 HTML,
//       收录 Ornith 系列 / Claude Opus 4.5 / Qwen3.6 Max preview 等 llm-stats 缺失模型)。
// 数据形态:主源 #|Model|Score(0-1)|Size|Context|Cost|License;补充源 rank|Model(Vendor)|Score%。
// 性质:模型级条目(103 个 Python 库从零生成任务,test-pass-rate 口径);双源合并去重取最高,
//       已计入总览综合分(权重 8%)与命中数。
// 输出:data/nl2repo.js(window.NL2REPO)。
"use strict";
const BaseSource = require("../lib/BaseSource");
const registry = require("../lib/registry");
const transport = require("../lib/transport");
const normalizer = require("../lib/normalizer");
const writers = require("../lib/writers");
const parseLlmStats = require("../lib/parseLlmStats");
const CONFIG = require("../lib/config");

// 模型名归一键(与 js/data.js / model-map.js 同规则):小写 + 非字母数字折叠为连字符
function normKey(s) {
  return String(s || "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

// 解析 benchlm.ai 镜像页(SSG,无 <table>,每行为卡片式 div):
//   <a class="block truncate text-sm font-semibold ..." href="/models/slug">Model Name</a>
//   + <span class="block truncate text-xs text-muted-foreground">Vendor · Open weight</span>
//   + <span class="text-xs font-mono ... text-foreground">65.4%</span>
function parseBenchlm(html) {
  const models = [];
  const parts = html.split('<a class="block truncate text-sm font-semibold');
  for (let i = 1; i < parts.length; i++) {
    const seg = parts[i];
    const nameM = seg.match(/^[^>]*>([^<]+)<\/a>/);
    if (!nameM) continue;
    const scoreM = seg.match(/text-foreground">([\d.]+)%<\/span>/);
    if (!scoreM) continue;
    const score = Number(scoreM[1]);
    if (!isFinite(score)) continue;
    let vendor = "";
    const orgM = seg.match(/text-muted-foreground">([\s\S]*?)<\/span>/);
    if (orgM) {
      vendor = orgM[1].replace(/<!--[\s\S]*?-->/g, "").trim();
      const v = vendor.match(/^([^·]+)/);
      vendor = v ? v[1].trim() : vendor;
    }
    models.push({ model: nameM[1].trim(), org: vendor || null, score: score });
  }
  return models;
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
    // 主源(llm-stats)+ 补充源(benchlm.ai)并行抓取
    const [primary, extra] = await Promise.all([
      transport.fetchWithRetry(this.cfg.url),
      transport.fetchWithRetry(CONFIG.sources.nl2repo_benchlm.url)
    ]);
    return { primary: primary, extra: extra };
  }
  parse(raw) {
    const primary = parseLlmStats.parse(raw.primary, { name: "NL2Repo-Bench", tasks: 103 });
    const extra = parseBenchlm(raw.extra);
    // 双源合并:按归一键去重,同模型取最高 score;主源字段(size/context/cost)优先
    const map = {};
    primary.models.forEach(function (m) { map[normKey(m.model)] = Object.assign({}, m, { src: "llm-stats" }); });
    extra.forEach(function (m) {
      const k = normKey(m.model);
      const e = map[k];
      if (!e) {
        map[k] = { rank: null, model: m.model, org: m.org, score: m.score, size: null, context: null, cost: null, license: null, src: "benchlm" };
      } else if (m.score > e.score) {
        e.score = m.score;
        e.model = m.model;
        e.org = m.org || e.org;
      }
    });
    const models = Object.keys(map).map(function (k) {
      const m = map[k];
      return { rank: 0, model: m.model, org: m.org, score: m.score, size: m.size, context: m.context, cost: m.cost, license: m.license };
    });
    models.sort(function (a, b) { return b.score - a.score; });
    models.forEach(function (m, i) { m.rank = i + 1; });
    return { tasks: 103, models: models };
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
      "// 来源:" + this.cfg.url + "(官方:" + this.cfg.officialUrl + ") · 补充镜像 https://www.benchlm.ai/benchmarks/nl2repo\n" +
      "// 字段说明:model=模型名;score=test-pass-rate(%);org=厂商;size=参数量;context=上下文;cost=API 价格\n" +
      "// 用途:已计入总览综合分(权重 8%)与命中数;「权威基准测试」页完整展示。\n",
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
