// benchlm.ai 榜单源工厂
// HLE-Diamond / GPQA Diamond 两个榜共用:同一网站、同一 __NEXT_DATA__ 结构、同一套输出字段,
// 差别只在源 id / 窗口变量 / 口径文案。把它们写成两个独立源文件(各 ~30 行)而非一个双榜源,
// 是因为 pipeline 的「单源失败不影响其他源」语义要能单独生效:一个榜改版不应连带另一个丢数。
"use strict";
const BaseSource = require("./BaseSource");
const registry = require("./registry");
const normalizer = require("./normalizer");
const writers = require("./writers");
const { parseBenchlmBoard } = require("./parseBenchlmBoard");
const CONFIG = require("./config");

function makeBenchlmBoardSource(opts) {
  // opts: { id, name, cfgKey, windowVar, outFile, header(函数->字符串), desc(函数), protocolOf(函数) }
  class Src extends BaseSource {
    constructor() {
      const c = CONFIG.sources[opts.cfgKey];
      super({
        id: opts.id, name: opts.name, type: "html",
        url: c.url, host: c.host,
        officialUrl: c.officialUrl,
        outFile: opts.outFile, windowVar: opts.windowVar
      });
    }

    parse(raw) {
      const { meta, rows } = parseBenchlmBoard(raw);
      // 源站已按分数降序;只是防御性地再排一次(同分保留源站序)
      const models = rows.slice().sort(function (a, b) { return b.score - a.score; });
      models.forEach(function (m, i) { m.rank = i + 1; });
      return { meta: meta, models: models };
    }

    toStandard(parsed) {
      return normalizer.fromArray(this.cfg.id, parsed.models, function (m, idx) {
        return {
          name: m.model,
          score: m.score,
          rank: idx,
          updated: CONFIG.TODAY,
          metrics: { overallScore: m.overallScore, confidence: m.confidence },
          meta: { org: m.org, effort: m.effort, harness: m.harness }
        };
      });
    }

    writeContent(parsed) {
      const T = CONFIG.TODAY, R = CONFIG.REFRESHED_AT;
      const c = CONFIG.sources[opts.cfgKey];
      const models = parsed.models.map(function (m) {
        const rec = {
          rank: m.rank,
          model: m.model,
          org: m.org,
          score: m.score,
          effort: m.effort,
          harness: m.harness,
          context: m.context,
          license: m.license,
          src: c.src
        };
        if (m.overallScore != null) rec.overallScore = m.overallScore;
        if (m.confidence != null) rec.confidence = m.confidence;
        if (m.srcLabel) rec.srcLabel = m.srcLabel;
        if (m.srcUrl) rec.srcUrl = m.srcUrl;
        Object.assign(rec, opts.protocolOf(m));
        return rec;
      });

      return writers.windowVarTemplate(opts.windowVar, opts.header(T, c), {
        source: opts.name,
        url: c.url,
        officialUrl: c.officialUrl,
        channelPolicy: CONFIG.channelPolicy,
        version: c.version || null,
        updated: T,
        refreshedAt: R,
        dataDate: parsed.meta.lastUpdated || null,
        scoreLabel: parsed.meta.scoreLabel || null,
        stats: { tasks: c.tasks || parsed.meta.tasks || null, entries: models.length },
        variantNote: parsed.meta.variantNote || null,
        desc: opts.desc(parsed.meta),
        models: models
      });
    }
  }
  return registry.register(Src);
}

module.exports = { makeBenchlmBoardSource: makeBenchlmBoardSource };
