// 数据源:Terminal-Bench-Science 0.1(斯坦福/Laude 科研工作流评测)
// 站点:官方 https://www.terminal-bench-science.ai/(榜单为 SVG 图/客户端渲染,不可解析),
//       以 explainx 博客镜像表为主(Model | Harness | Resolution rate,数值与官方公告 0.1 一致)。
// 性质:agent×model 组合条目(70 科研任务);仅「权威基准测试」页展示,不计入综合分/命中。
// 输出:data/tbscience.js(window.TBSCIENCE)。
"use strict";
const BaseSource = require("../lib/BaseSource");
const registry = require("../lib/registry");
const transport = require("../lib/transport");
const normalizer = require("../lib/normalizer");
const writers = require("../lib/writers");
const CONFIG = require("../lib/config");

class TBScienceSource extends BaseSource {
  constructor() {
    super({
      id: "tbscience", name: "Terminal-Bench-Science 0.1", type: "html",
      url: CONFIG.sources.tbscience.url, host: CONFIG.sources.tbscience.host,
      version: CONFIG.sources.tbscience.version,
      announcementUrl: CONFIG.sources.tbscience.announcementUrl,
      outFile: "tbscience.js", windowVar: "TBSCIENCE"
    });
  }
  async fetch() {
    return transport.fetchWithRetry(this.cfg.url);
  }
  parse(raw) {
    // 定位表头含 Harness + Resolution rate 的表格,取其后 模型|Harness|解决率 行
    const tables = (raw.match(/<table[\s\S]*?<\/table>/gi) || []);
    let target = null;
    tables.forEach(function (t) {
      if (target) return;
      const head = (t.match(/<th[^>]*>([\s\S]*?)<\/th>/gi) || []).map(function (h) {
        return h.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
      }).join("|");
      if (/Harness/i.test(head) && /Resolution/i.test(head)) target = t;
    });
    if (!target) throw new Error("未找到 Resolution rate 表格(站点结构变更)");
    const models = [];
    const trRe = /<tr[^>]*>([\s\S]*?)<\/tr>/gi;
    let m;
    while ((m = trRe.exec(target)) !== null) {
      const cells = [];
      const tdRe = /<t[dh][^>]*>([\s\S]*?)<\/t[dh]>/gi;
      let c;
      while ((c = tdRe.exec(m[1])) !== null) {
        cells.push(transport.htmlDecode(c[1].replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim()));
      }
      if (cells.length < 3) continue;
      if (/^(Model|Harness)$/i.test(cells[0]) || /^(Model|Harness)$/i.test(cells[1])) continue; // 表头
      const scoreM = String(cells[2] || "").match(/(\d+(?:\.\d+)?)\s*%/);
      if (!scoreM) continue;
      const model = cells[0], harness = cells[1];
      if (!model || !harness) continue;
      models.push({ model: model, agent: harness, score: Number(scoreM[1]) });
    }
    if (!models.length) throw new Error("未解析到任何 Terminal-Bench-Science 行");
    // 官方榜单按解决率降序
    models.sort(function (a, b) { return b.score - a.score; });
    models.forEach(function (m, i) { m.rank = i + 1; });
    return { tasks: 70, models: models };
  }
  toStandard(parsed) {
    return normalizer.fromArray(this.cfg.id, parsed.models, function (m, idx) {
      return {
        name: m.model,
        score: m.score,
        rank: idx,
        updated: CONFIG.TODAY,
        metrics: {},
        meta: { agent: m.agent }
      };
    });
  }
  writeContent(parsed) {
    const T = CONFIG.TODAY, R = CONFIG.REFRESHED_AT, v = this.cfg.version, n = parsed.models.length;
    return writers.windowVarTemplate("TBSCIENCE",
      "// 数据源:Terminal-Bench-Science 0.1(斯坦福/Laude 科研工作流评测,更新于 " + T + ")\n" +
      "// 来源:" + this.cfg.url + "(官方:" + this.cfg.announcementUrl + ")\n" +
      "// 字段说明:model=模型名;agent=Agent 框架;score=解决率(%)\n" +
      "// 用途:「权威基准测试」页展示,仅参考,不计入综合分/命中数。\n",
      {
        source: "Terminal-Bench-Science",
        url: this.cfg.url,
        announcementUrl: this.cfg.announcementUrl,
        version: v,
        updated: T,
        refreshedAt: R,
        stats: { tasks: parsed.tasks, entries: n },
        desc: "Terminal-Bench-Science 0.1:由斯坦福与 Laude 团队联合各学科专家构建的科研工作流评测(70 个任务,来自真实研究流程,每任务 3 次独立试验),解决率越高越好。",
        models: parsed.models
      }
    );
  }
}

module.exports = registry.register(TBScienceSource);
