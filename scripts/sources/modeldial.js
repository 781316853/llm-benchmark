// 数据源:ModelDial 雷达(modeldial.com/radar,第三方独立实测的综合能力榜)
// 站点:https://modeldial.com/radar(口径说明 https://modeldial.com/method;官方 OpenAPI /openapi-v1.json)
// 接口:https://modeldial.com/api/v1/radar/latest.json(HTTP 200 / application/json,无鉴权、无需特殊 UA,
//   单请求即得全榜 52 条 config 与综合分;授权 CC BY 4.0)。
// 数据形态:JSON。overallRankings 为 config 粒度(model × reasoningEffort),字段:
//   rank/backendRank、id(provider:model:effort)、provider(接入渠道,非模型厂商)、model(slug)、
//   displayName、reasoningEffort、backendScore/frontendScore/knowledgeScore/overallScore(均 0-100)、
//   elapsedMs、estimatedReferenceCostUsd、decisionTags。
// 综合分口径(源站 /method):后端与测试 40% + 前端与交互 30% + 知识与推理 30%(已逐条核对与官网一致)。
// ⚠️ 成本/耗时口径:latest.json 的 elapsedMs 与 estimatedReferenceCostUsd 取自后端(coding)单轴,
//   官网主榜显示的是三轴汇总值(如 MiniMax-M3 此处 $0.3139、官网 $0.62)。本站按后端轴单轴口径使用,
//   跨模型内部一致可比,但低于官网主榜显示值,前端列名/图轴已标注「后端轴」。
//   分轴档案(/data/benchmark-snapshots/*)与 overall 档案均不含成本字段,且批次号与 latest.json 不对齐,
//   无法无损还原官网的三轴汇总值,故不做汇总。该 feed 亦无 cost_coverage 字段,不做「≥/部分费用」标记。
// 性质:已计入总览综合分(第 8 组,权重 12%)与命中数(命中分母 6 → 7)。
// 输出:data/modeldial.js(window.MODELDIAL)。
"use strict";
const BaseSource = require("../lib/BaseSource");
const registry = require("../lib/registry");
const transport = require("../lib/transport");
const normalizer = require("../lib/normalizer");
const writers = require("../lib/writers");
const CONFIG = require("../lib/config");

// 数值清洗:非法/缺失返回 null,合法值保留 6 位小数(成本最小到 $0.02 级)
function num(v) {
  const n = Number(v);
  return isFinite(n) ? Math.round(n * 1e6) / 1e6 : null;
}

// UTC ISO 时间戳 -> 北京日期(YYYY-MM-DD);官网页头「更新于」按北京时间显示,此处与其对齐
function bjDate(iso) {
  const t = Date.parse(iso);
  if (!isFinite(t)) return "";
  return new Date(t + 8 * 3600 * 1000).toISOString().slice(0, 10);
}

// 取整榜与其各分轴发布时间中的最新者作为 updated。
// 注:官网页头「更新于」显示的是 overall 档案的发布时间(可能滞后于 feed 内的整体批次),
//     而其 overall 档案的 batch_id 与 latest.json 的 overallBatch.id 并不一致(档案为更早一次发布),
//     故此处以 feed 自身的时间戳为准。
function boardTime(overallBatch, fallbackIso) {
  const srcs = (overallBatch && overallBatch.sources) || {};
  let best = overallBatch && overallBatch.publishedAt ? overallBatch.publishedAt : "";
  Object.keys(srcs).forEach(function (k) {
    const p = srcs[k] && srcs[k].publishedAt;
    if (p && (!best || Date.parse(p) > Date.parse(best))) best = p;
  });
  return best || fallbackIso || "";
}

// 单条 config -> 精简结构
function pickConfig(e) {
  return {
    rank: e.rank != null ? e.rank : null,
    provider: e.provider || "",
    model: e.model || "",
    effort: e.reasoningEffort || "default",
    displayName: e.displayName || "",
    overall: num(e.overallScore),
    backend: num(e.backendScore),
    frontend: num(e.frontendScore),
    knowledge: num(e.knowledgeScore),
    elapsedMs: num(e.elapsedMs),
    costUsd: num(e.estimatedReferenceCostUsd),
    tags: Array.isArray(e.decisionTags) ? e.decisionTags : []
  };
}

// 模型级主榜:同名 config 取 overallScore 最高的一条(与官网主榜口径一致),
// 按 overallScore 降序;同分并列采用 competition ranking(1,2,…,17,18,18,20,…),与官网显示一致。
function groupModels(configs) {
  const best = {};
  const count = {};
  configs.forEach(function (c) {
    count[c.model] = (count[c.model] || 0) + 1;
    const cur = best[c.model];
    if (!cur || (c.overall != null && (cur.overall == null || c.overall > cur.overall))) best[c.model] = c;
  });
  const models = Object.keys(best).map(function (m) {
    const b = best[m];
    return {
      model: m, provider: b.provider, effort: b.effort, displayName: b.displayName,
      overall: b.overall, backend: b.backend, frontend: b.frontend, knowledge: b.knowledge,
      elapsedMs: b.elapsedMs, costUsd: b.costUsd, tags: b.tags, configs: count[m]
    };
  });
  models.sort(function (a, b) { return b.overall - a.overall; });
  models.forEach(function (m, i) {
    m.rank = (i > 0 && m.overall === models[i - 1].overall) ? models[i - 1].rank : i + 1;
  });
  return models;
}

class ModeldialSource extends BaseSource {
  constructor() {
    super({
      id: "modeldial", name: "ModelDial 雷达", type: "json",
      url: CONFIG.sources.modeldial.url, host: CONFIG.sources.modeldial.host,
      version: "1.1",
      outFile: "modeldial.js", windowVar: "MODELDIAL"
    });
  }
  parse(raw) {
    let d;
    try { d = JSON.parse(raw); }
    catch (e) { throw new Error("ModelDial latest.json 不是合法 JSON(" + e.message + ")"); }
    const rows = d && d.overallRankings;
    if (!Array.isArray(rows) || !rows.length) throw new Error("ModelDial overallRankings 为空或结构变更");
    const configs = rows.map(pickConfig);
    const models = groupModels(configs);
    const batch = d.batch || {}, ob = d.overallBatch || {};
    return {
      schemaVersion: d.schemaVersion || "",
      batchId: ob.id || batch.id || "",
      batchRevision: batch.revision != null ? batch.revision : null,
      batchPublishedAt: ob.publishedAt || d.generatedAt || "",
      updated: bjDate(boardTime(ob, d.generatedAt)),
      weights: d.weights || {},
      configs: configs,
      models: models,
      counts: { configs: configs.length, models: models.length }
    };
  }
  toStandard(parsed) {
    const T = parsed.updated || CONFIG.TODAY;
    return normalizer.fromArray(this.cfg.id, parsed.models, function (m, idx) {
      return {
        // name 用原始 slug(如 qwen3.8-flash):交给别名表归一。
        // 不拼接 effort 后缀,避免被 effort 剥离规则误伤。
        name: m.model, score: m.overall, rank: idx, updated: T,
        metrics: {
          backend: m.backend, frontend: m.frontend, knowledge: m.knowledge,
          elapsedMs: m.elapsedMs, costUsd: m.costUsd, configs: m.configs
        },
        meta: { provider: m.provider, effort: m.effort, displayName: m.displayName }
      };
    });
  }
  writeContent(parsed) {
    const T = parsed.updated || CONFIG.TODAY, R = CONFIG.REFRESHED_AT, C = parsed.counts;
    return writers.windowVarTemplate("MODELDIAL",
      "// 数据源:ModelDial 雷达(" + (parsed.updated || "?") + " 更新;第三方独立实测的综合能力榜)\n" +
      "// 站点:" + this.cfg.url.replace("/api/v1/radar/latest.json", "/radar") + "(口径说明 https://modeldial.com/method)\n" +
      "// 接口:https://modeldial.com/api/v1/radar/latest.json(schemaVersion " + parsed.schemaVersion + ",batch " + parsed.batchId + ")\n" +
      "// 授权:CC BY 4.0 · 用途:仅学习与对比展示\n" +
      "// 综合分口径:后端与测试 40% + 前端与交互 30% + 知识与推理 30%(各分项均 0-100)\n" +
      "// ⚠️ 成本/耗时:elapsedMs 与 costUsd 取自后端(coding)单轴;官网主榜显示的是三轴汇总值\n" +
      "//   (如 MiniMax-M3 此处 $0.3139、官网 $0.62)。本站统一用后端轴口径,跨模型内部可比但低于官网显示值。\n" +
      "// 字段说明:model=模型 slug;provider=接入渠道(非模型厂商);effort=推理强度;overall=综合分;\n" +
      "//          backend/frontend/knowledge=三分项分;elapsedMs=耗时(毫秒);costUsd=参考费用(美元);\n" +
      "//          configs=该模型在源码中的 config 条数;tags=源站标记(recommended/value/speed/lightweight)\n" +
      "// 结构:models=模型级主榜(每条取该模型最高分 config,与官网主榜一致);configs=全部 config 明细\n" +
      "// 用途:已计入总览综合分(第 8 组,权重 12%)与命中数(分母 7);「ModelDial」页完整展示。\n",
      {
        source: "ModelDial",
        url: "https://modeldial.com/radar",
        methodUrl: "https://modeldial.com/method",
        apiUrl: "https://modeldial.com/api/v1/radar/latest.json",
        license: "CC BY 4.0",
        schemaVersion: parsed.schemaVersion,
        batchId: parsed.batchId,
        batchRevision: parsed.batchRevision,
        batchPublishedAt: parsed.batchPublishedAt,
        updated: T,
        refreshedAt: R,
        weights: parsed.weights,
        costBasis: "backend",
        costBasisNote: "成本与耗时为后端(coding)单轴口径;官网主榜显示的是三轴汇总值,故本站数值低于官网显示值。",
        stats: { configs: C.configs, models: C.models },
        desc: "ModelDial Radar:第三方独立实测的编码智能体能力榜,分后端与测试(40%)、前端与交互(30%)、知识与推理(30%)三类能力,同一模型按推理强度分档多次测试后取最高分配置入榜;综合分越高越好。",
        models: parsed.models,
        configs: parsed.configs
      }
    );
  }
}

module.exports = registry.register(ModeldialSource);
