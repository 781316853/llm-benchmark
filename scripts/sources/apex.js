// 数据源:APEX-1(AI Productivity Index,Mercor)
// 官方榜:https://www.mercor.com/apex/apex-v1-leaderboard/(官方说明:https://arxiv.org/abs/2509.25721)
// 数据形态:页面为 Next.js,榜单在 <script id="__NEXT_DATA__"> 的
//   props.pageProps.leaderboardData 中,每行含 model_name / score.mean-score /
//   score.pass-1 / error / effort / providerName / release_date / n_samples。
// 口径:隐藏 held-out 集 400 题(投行、咨询、律所、全科医生各 100),每题每模型 8 次,
//   LM judge 按专家 rubric 评分;Mean Score = 所有任务通过标准比例的平均(主排序指标),
//   Pass@1 = 单次尝试拿到满分的任务比例。
// 性质:模型级条目,仅「权威基准测试」页展示,不计入综合分/命中数。
// 输出:data/apex.js(window.APEX)。
"use strict";
const BaseSource = require("../lib/BaseSource");
const registry = require("../lib/registry");
const transport = require("../lib/transport");
const normalizer = require("../lib/normalizer");
const writers = require("../lib/writers");
const CONFIG = require("../lib/config");

class ApexSource extends BaseSource {
  constructor() {
    super({
      id: "apex", name: "APEX-1", type: "html",
      url: CONFIG.sources.apex.url, host: CONFIG.sources.apex.host,
      officialUrl: CONFIG.sources.apex.officialUrl,
      outFile: "apex.js", windowVar: "APEX"
    });
  }
  async fetch() {
    return transport.fetchWithRetry(this.cfg.url);
  }
  parse(html) {
    const m = html.match(/<script id="__NEXT_DATA__" type="application\/json"[^>]*>([\s\S]*?)<\/script>/);
    if (!m) throw new Error("APEX 页面未找到 __NEXT_DATA__(站点结构变更)");
    let data;
    try { data = JSON.parse(m[1]); }
    catch (e) { throw new Error("APEX __NEXT_DATA__ JSON 解析失败: " + e.message); }
    const pp = data && data.props && data.props.pageProps;
    const rows = pp && pp.leaderboardData;
    if (!Array.isArray(rows) || !rows.length) throw new Error("APEX leaderboardData 为空(站点结构变更)");
    const b = pp.benchmark || {};
    const harness = (b.availableHarnesses && b.availableHarnesses[0] && b.availableHarnesses[0].value) || "singleshot_agent";
    const models = [];
    rows.forEach(function (r) {
      const mean = r.score && r.score["mean-score"] && r.score["mean-score"][harness];
      const pass1 = r.score && r.score["pass-1"] && r.score["pass-1"][harness];
      if (!r.model_name || mean == null || !isFinite(mean)) return;
      models.push({
        model: String(r.model_name).trim(),
        org: r.providerName || r.company || null,
        score: Number(mean),
        pass1: pass1 == null ? null : Number(pass1),
        meanErr: (r.error && r.error["mean-score"] && r.error["mean-score"][harness] != null) ? Number(r.error["mean-score"][harness]) : null,
        pass1Err: (r.error && r.error["pass-1"] && r.error["pass-1"][harness] != null) ? Number(r.error["pass-1"][harness]) : null,
        effort: r.effort || null,
        date: r.release_date || null,
        n: r.n_samples != null ? Number(r.n_samples) : null,
        src: "official"
      });
    });
    if (!models.length) throw new Error("APEX 未解析到任何模型条目");
    models.sort(function (a, b) { return b.score - a.score || (b.pass1 || 0) - (a.pass1 || 0); });
    models.forEach(function (m, i) { m.rank = i + 1; });
    return {
      tasks: 400,
      harness: harness,
      benchmarkId: b.benchmarkId || "apex-v1",
      displayName: b.displayName || "APEX-1",
      paperUrl: b.paperLink || null,
      dataUrl: b.dataLink || null,
      models: models
    };
  }
  toStandard(parsed) {
    return normalizer.fromArray(this.cfg.id, parsed.models, function (m, idx) {
      return { name: m.model, score: m.score, rank: idx, updated: CONFIG.TODAY, metrics: {}, meta: { org: m.org, src: m.src } };
    });
  }
  writeContent(parsed) {
    const T = CONFIG.TODAY, R = CONFIG.REFRESHED_AT, n = parsed.models.length;
    return writers.windowVarTemplate("APEX",
      "// 数据源:APEX-1(AI Productivity Index,Mercor,更新于 " + T + ")\n" +
      "// 官方榜:" + this.cfg.url + "\n" +
      "// 口径:隐藏 held-out 集 400 题(投行 / 咨询 / 律所 / 全科医生各 100),每题每模型 8 次,\n" +
      "//   LM judge 按专家 rubric 评分;Mean Score = 所有任务通过标准比例的平均(主排序指标),\n" +
      "//   Pass@1 = 单次尝试拿到满分的任务比例。\n" +
      "// 字段说明:model=模型名;score=Mean Score(%);pass1=Pass@1(%);meanErr/pass1Err=95%误差;\n" +
      "//   effort=推理强度;org=厂商;n=样本数;date=发布日期;src=数据来源(官方榜)\n" +
      "// 用途:「权威基准测试」页展示,仅参考,不计入综合分/命中数。\n",
      {
        source: "APEX-1",
        url: this.cfg.url,
        officialUrl: this.cfg.officialUrl,
        updated: T,
        refreshedAt: R,
        stats: { tasks: parsed.tasks, entries: n },
        benchmarkId: parsed.benchmarkId,
        harness: parsed.harness,
        paperUrl: parsed.paperUrl,
        dataUrl: parsed.dataUrl,
        desc: "APEX-1(AI Productivity Index,Mercor):用投行、咨询、律所、全科医生四类真实专业工作评估模型产出质量;隐藏 held-out 集 400 题,每题每模型 8 次,由专家 rubric + LM judge 评分。Mean Score 为主排序指标,Pass@1 衡量单次尝试的端到端可靠性;越高越好。",
        models: parsed.models
      }
    );
  }
}

module.exports = registry.register(ApexSource);
