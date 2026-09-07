// 数据源:ARC-AGI-3(ARC Prize 交互式智能体推理评测)
// 站点:官方 arcprize.org/leaderboard 默认表缺 2026-07 后新成绩,以 llm-stats.com 聚合表为主。
// 数据形态:llm-stats 服务端渲染 HTML 表格(#|Model|Score(0-1)|Size|Context|Cost|License)。
// 性质:模型级条目(135 环境,RHAE 相对人类行动效率评分);仅「权威基准测试」页展示。
// 输出:data/arcagi3.js(window.ARCAGI3)。
"use strict";
const BaseSource = require("../lib/BaseSource");
const registry = require("../lib/registry");
const transport = require("../lib/transport");
const normalizer = require("../lib/normalizer");
const writers = require("../lib/writers");
const CONFIG = require("../lib/config");

class ArcAgi3Source extends BaseSource {
  constructor() {
    super({
      id: "arcagi3", name: "ARC-AGI-3", type: "html",
      url: CONFIG.sources.arcagi3.url, host: CONFIG.sources.arcagi3.host,
      officialUrl: CONFIG.sources.arcagi3.officialUrl,
      outFile: "arcagi3.js", windowVar: "ARCAGI3"
    });
  }
  async fetch() {
    return transport.fetchWithRetry(this.cfg.url);
  }
  parse(raw) {
    // 正则转义(用于从模型单元格文本中剥离厂商名)
    function escapeRegExp(s) { return String(s || "").replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); }
    const models = [];
    transport.parseTableRows(raw).forEach(function (row) {
      const cells = row.text;
      if (cells.length < 3) return;
      const rank = Number(cells[0]);
      if (!isFinite(rank)) return;
      const score01 = Number(cells[2]);
      if (!isFinite(score01)) return;
      // 模型单元格形如 "GPT-6 Astra New OpenAI"(模型名 + New 徽标 + 厂商名);厂商取 <img alt>
      const orgM = (row.html[1] || "").match(/<img[^>]*alt="([^"]*)"/);
      const org = orgM ? transport.htmlDecode(orgM[1]) : null;
      let model = String(cells[1] || "").trim();
      if (org) model = model.replace(new RegExp("\\s*" + escapeRegExp(org) + "\\s*$"), "");
      model = model.replace(/\s*New\s*$/i, "").trim();
      if (!model) return;
      models.push({
        rank: rank,
        model: model,
        org: org,
        score: Math.round(score01 * 1000) / 10,   // 0-1 -> 0-100
        size: cells[3] || null,
        context: cells[4] || null,
        cost: cells[5] || null,
        license: cells[6] || null
      });
    });
    if (!models.length) throw new Error("未解析到任何 ARC-AGI-3 行");
    models.sort(function (a, b) { return a.rank - b.rank; });
    return { environments: 135, models: models };
  }
  toStandard(parsed) {
    return normalizer.fromArray(this.cfg.id, parsed.models, function (m, idx) {
      return {
        name: m.model,
        score: m.score,
        rank: idx,
        updated: CONFIG.TODAY,
        metrics: {},
        meta: {}
      };
    });
  }
  writeContent(parsed) {
    const T = CONFIG.TODAY, R = CONFIG.REFRESHED_AT, n = parsed.models.length;
    return writers.windowVarTemplate("ARCAGI3",
      "// 数据源:ARC-AGI-3(ARC Prize 交互式智能体推理评测,更新于 " + T + ")\n" +
      "// 来源:" + this.cfg.url + "(官方:" + this.cfg.officialUrl + ")\n" +
      "// 字段说明:model=模型名;score=RHAE 相对人类行动效率(%);size=参数量;context=上下文;cost=API 价格;license=许可\n" +
      "// 用途:「权威基准测试」页展示,仅参考,不计入综合分/命中数。\n",
      {
        source: "ARC-AGI-3",
        url: this.cfg.url,
        officialUrl: this.cfg.officialUrl,
        updated: T,
        refreshedAt: R,
        stats: { environments: parsed.environments, entries: n },
        desc: "ARC-AGI-3:ARC Prize 第三代抽象推理基准,把智能体放入无说明书的 64×64 交互式游戏环境(135 个环境,25 公开/55 半私/55 私),考察探索、世界建模、目标推断与规划;评分指标为 RHAE(相对人类行动效率,人类基线 100%)。",
        models: parsed.models
      }
    );
  }
}

module.exports = registry.register(ArcAgi3Source);
