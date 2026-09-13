// 数据源:NL2Repo-Bench(长程仓库生成·编码 Agent)
// 站点:官方 github.com/multimodal-art-projection/NL2RepoBench(字节 Seed / M-A-P 等);
//   主源为 llm-stats.com 聚合表(服务端渲染),三路补充:
//   1) benchlm.ai 镜像(SSG 卡片式 HTML,收录 Ornith 系列 / Claude Opus 4.5 / Qwen3.6 Max preview 等);
//   2) 官方论文评测表(arxiv 2512.12730v2 Table 2,基准作者官方 OpenHands 协议,12 条上一代模型:
//      Claude-Sonnet-4.5 / GPT-5 / Kimi-k2 / DeepSeek-V3.1/V3.2 / GLM-4.6 / Qwen3 系列等);
//   3) datalearner 详情页(厂商官方发布成绩,当前与 llm-stats 重复,前向补充新发布)。
// 数据形态:主源 #|Model|Score(0-1)|Size|Context|Cost|License;benchlm rank|Model(Vendor)|Score%;
//   论文表 Model|Overall Pass@1(%)|Count|Easy|Medium|Hard;datalearner 内嵌 results JSON。
// 性质:模型级条目(103 个 Python 库从零生成任务,test-pass-rate 口径);多源合并去重取最高,
//       已计入总览综合分(权重 8%)与命中数。
// 输出:data/nl2repo.js(window.NL2REPO)。
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
  // datalearner 用 "DeepSeek-V4-Flash/V4-Pro",llm-stats 用 "...-0731"/"...-0813"(同官方成绩)
  "deepseek-v4-flash": "deepseek-v4-flash-0731",
  "deepseek-v4-pro": "deepseek-v4-pro-0813"
};
function aliasKey(k) { return KEY_ALIASES[k] || k; }

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
    // 主源(llm-stats)+ 三路补充(benchlm.ai / 官方论文 / datalearner 厂商发布)并行抓取
    const [primary, extra, paper, vendor] = await Promise.all([
      transport.fetchWithRetry(this.cfg.url),
      transport.fetchWithRetry(CONFIG.sources.nl2repo_benchlm.url),
      transport.fetchWithRetry(CONFIG.sources.nl2repo_paper.url),
      transport.fetchWithRetry(CONFIG.sources.datalearner_nl2repo.url)
    ]);
    return { primary: primary, extra: extra, paper: paper, vendor: vendor };
  }
  parse(raw) {
    const primary = parseLlmStats.parse(raw.primary, { name: "NL2Repo-Bench", tasks: 103 });
    const extra = parseBenchlm(raw.extra);
    const paper = parsePaper(raw.paper);
    const vendor = parseDataLearnerBench(raw.vendor);
    // 多源合并:按归一键去重,同模型取最高 score;主源字段(size/context/cost)优先
    const map = {};
    primary.models.forEach(function (m) { map[aliasKey(normKey(m.model))] = Object.assign({}, m, { src: "llm-stats" }); });
    // 补充源通用合并:同模型取最高,新模型按 src 建条
    function merge(models, src, extraFields) {
      models.forEach(function (m) {
        const k = aliasKey(normKey(m.model));
        const e = map[k];
        if (!e) {
          map[k] = Object.assign({ rank: null, model: m.model, org: m.org || null, score: m.score, size: null, context: null, cost: null, license: null, src: src }, extraFields ? extraFields(m) : null);
        } else if (m.score > e.score) {
          e.score = m.score;
          e.model = m.model;
          e.org = m.org || e.org;
          e.src = src;
        }
      });
    }
    merge(extra, "benchlm");
    merge(paper, "paper");
    // datalearner 返回字段为 name(非 model),先映射再合并
    merge(vendor.map(function (m) { return { model: m.name, org: m.org, score: m.score, license: m.license }; }), "datalearner");
    const models = Object.keys(map).map(function (k) {
      const m = map[k];
      return { rank: 0, model: m.model, org: m.org, score: m.score, size: m.size, context: m.context, cost: m.cost, license: m.license, src: m.src };
    });
    models.sort(function (a, b) { return b.score - a.score; });
    models.forEach(function (m, i) { m.rank = i + 1; });
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
      "// 补充:https://www.benchlm.ai/benchmarks/nl2repo(benchlm 镜像) · 官方论文评测表 https://arxiv.org/html/2512.12730v2(Table 2) · https://www.datalearner.com/benchmarks/nl2repo-bench(厂商官方发布)\n" +
      "// 字段说明:model=模型名;score=test-pass-rate(%);org=厂商;size=参数量;context=上下文;cost=API 价格;src=数据来源(llm-stats/benchlm/paper/datalearner)\n" +
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
