// benchlm.ai 榜单源工厂
// HLE-Diamond / GPQA Diamond 两个榜共用:同一网站、同一 __NEXT_DATA__ 结构、同一套输出字段,
// 差别只在源 id / 窗口变量 / 口径文案。把它们写成两个独立源文件(各 ~30 行)而非一个双榜源,
// 是因为 pipeline 的「单源失败不影响其他源」语义要能单独生效:一个榜改版不应连带另一个丢数。
// 2026-11-27 追加 ARC-AGI-2 / FrontierMath v2 / CritPt:同站点同结构,但 ARC-AGI-2 按推理档位
// 分行(148 个模型 317 行),需先按模型取最优档,故新增 opts.bestOfModel。
"use strict";
const BaseSource = require("./BaseSource");
const registry = require("./registry");
const normalizer = require("./normalizer");
const writers = require("./writers");
const { parseBenchlmBoard } = require("./parseBenchlmBoard");
const CONFIG = require("./config");

// 模型名尾部的推理档位括号注解:"GPT-6.2 Astra (Max)" -> 名字 + effort=max
// 只匹配档位词表,不做全局子串替换(会把 Qwen3.8-Max 里的 Max 一起吃掉)。
const EFFORT_IN_NAME = /\s*\((Max|XHigh|Extra High|High|Medium|Low|Minimal|None)\)\s*$/i;

// 同模型多档位 -> 每模型取最高分(与源站散点图的模型级视图同口径)
function bestOfModel(rows) {
  var map = {}, order = [];
  rows.forEach(function (r) {
    var name = r.model, effort = r.effort || null;
    var m = String(name).match(EFFORT_IN_NAME);
    if (m) { effort = effort || m[1]; name = String(name).slice(0, m.index).trim(); }
    var key = name.toLowerCase();
    if (!map[key]) { map[key] = Object.assign({}, r, { model: name, effort: effort, variants: 1 }); order.push(key); return; }
    map[key].variants += 1;
    if (r.score > map[key].score) {
      var keep = map[key].variants;
      map[key] = Object.assign({}, r, { model: name, effort: effort, variants: keep });
    }
  });
  return order.map(function (k) { return map[k]; });
}

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
      // 源站已按分数降序;只是防御性地再排一次(同分保留源站序)。
      // opts.bestOfModel:按模型取最优档(ARC-AGI-2 每题按推理档位分行),否则原样入表。
      const list = opts.bestOfModel ? bestOfModel(rows) : rows.slice();
      const models = list.slice().sort(function (a, b) { return b.score - a.score; });
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
        // overallScore 是 benchlm 自家「跨榜综合分」(同一模型在各榜取值完全相同,
        // 如 Claude Fable 5.2 在 HLE / FrontierMath / CritPt 三榜都是 93.3),不是榜内标准分,
        // 且大量模型该值为 0。opts.dropOverallScore=true 的源不落盘该字段。
        if (!opts.dropOverallScore && m.overallScore != null) rec.overallScore = m.overallScore;
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
        stats: {
          // 题数只认数字:部分 benchlm 榜的 meta.tasks 是文字描述("285 disciplines"),
          // 直接塞进 stats.tasks 会让页面显示成「285 disciplines 道题」。
          tasks: c.tasks || (typeof parsed.meta.tasks === "number" ? parsed.meta.tasks : null),
          entries: models.length
        },
        variantNote: parsed.meta.variantNote || null,
        desc: opts.desc(parsed.meta),
        models: models
      });
    }
  }
  return registry.register(Src);
}

module.exports = { makeBenchlmBoardSource: makeBenchlmBoardSource };
