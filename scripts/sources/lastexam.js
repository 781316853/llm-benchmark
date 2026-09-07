// 数据源:Agents' Last Exam(UC Berkeley RDI 真实专业工作流评测)
// 站点:官方 agents-last-exam.org/leaderboard 为 Next.js 客户端渲染(原始 HTML 无数据),
//       以 llm-stats 聚合表为主(#|Model|Score(0-1)|Size|Context|Cost|License)。
// 性质:模型级条目(1500+ 任务、55 子行业,Pass@1 口径);仅「权威基准测试」页展示。
// 输出:data/lastexam.js(window.LASTEXAM)。
"use strict";
const BaseSource = require("../lib/BaseSource");
const registry = require("../lib/registry");
const transport = require("../lib/transport");
const normalizer = require("../lib/normalizer");
const writers = require("../lib/writers");
const CONFIG = require("../lib/config");

// 正则转义(用于从模型单元格文本中剥离厂商名)
function escapeRegExp(s) { return String(s || "").replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); }

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
    return transport.fetchWithRetry(this.cfg.url);
  }
  parse(raw) {
    const models = [];
    transport.parseTableRows(raw).forEach(function (row) {
      const cells = row.text;
      if (cells.length < 3) return;
      const rank = Number(cells[0]);
      if (!isFinite(rank)) return;              // 表头行跳过
      const score01 = Number(cells[2]);
      if (!isFinite(score01)) return;
      // 模型单元格形如 "GPT-6 Astra New OpenAI"(模型名 + New 徽标 + 厂商名);厂商取 <img alt>
      const orgM = (row.html[1] || "").match(/<img[^>]*alt="([^"]*)"/);
      const org = orgM ? transport.htmlDecode(orgM[1]) : null;
      let model = String(cells[1] || "").trim();
      // 先剥离末尾厂商名,再剥离 "New" 徽标(次序:org 在 New 之后)
      if (org) model = model.replace(new RegExp("\\s*" + escapeRegExp(org) + "\\s*$"), "");
      model = model.replace(/\s*New\s*$/i, "").trim();
      if (!model) return;
      models.push({
        rank: rank,
        model: model,
        org: org,
        score: Math.round(score01 * 1000) / 10,  // 0-1 -> 0-100
        size: cells[3] || null,
        context: cells[4] || null,
        cost: cells[5] || null
      });
    });
    if (!models.length) throw new Error("未解析到任何 Agents' Last Exam 行");
    models.sort(function (a, b) { return b.score - a.score; });
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
        meta: { org: m.org }
      };
    });
  }
  writeContent(parsed) {
    const T = CONFIG.TODAY, R = CONFIG.REFRESHED_AT, n = parsed.models.length;
    return writers.windowVarTemplate("LASTEXAM",
      "// 数据源:Agents' Last Exam(UC Berkeley RDI 真实专业工作流评测,更新于 " + T + ")\n" +
      "// 来源:" + this.cfg.url + "(官方:" + this.cfg.officialUrl + ")\n" +
      "// 字段说明:model=模型名;score=Pass@1(%);org=厂商;size=参数量;context=上下文;cost=API 价格\n" +
      "// 用途:「权威基准测试」页展示,仅参考,不计入综合分/命中数。\n",
      {
        source: "Agents' Last Exam",
        url: this.cfg.url,
        officialUrl: this.cfg.officialUrl,
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
