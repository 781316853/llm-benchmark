// 数据源:ModelDial 雷达(modeldial.com/radar,第三方独立实测的综合能力榜)
// 站点:https://modeldial.com/radar(口径说明 https://modeldial.com/method;官方 OpenAPI /openapi-v1.json)
// 接口:https://modeldial.com/data/overview.json(HTTP 200 / application/json,无鉴权、无需特殊 UA)
// 数据形态:JSON。雷达页主榜使用 snapshot.entries(不再使用 latest.json 的 overallRankings 3 轴精简榜):
//   - 五轴加权:后端与测试 20% + 前端与交互 25% + 知识与推理 35% + 视觉审美 10% + 可维护性 10%;
//     overall_score 即该五轴加权分(score_policy=five-axis-b20-f25-k35-a10-m10-cube-half_up-v3),
//     three_axis_overall_score 为旧 3 轴分(部分新条目为 null),仅作参考;
//   - 默认展示 51 个模型 / 102 个配置:剔除 overall_score 为空、product_kind=bot
//     (源站「包含 Bot」开关默认关闭)与 hiddenModelIds 条目;
//   - 外部产品评测也进入主榜:如 Gemini 4 Argon(productEvaluation,api_model_ranking_eligible=false),
//     数据保留 external/apiRankEligible 标记,前端以「外部」徽标提示;
//   - 同一模型按 reasoning effort 分档,主榜取 overall_score 最高的 config;
//   - 耗时/费用取 metrics[candidate_id].overall(五轴汇总口径);外部产品为自报耗时、费用常缺。
// 输出:data/modeldial.js(window.MODELDIAL)。
"use strict";
const BaseSource = require("../lib/BaseSource");
const registry = require("../lib/registry");
const normalizer = require("../lib/normalizer");
const writers = require("../lib/writers");
const CONFIG = require("../lib/config");

// 数值清洗:非法/缺失返回 null,合法值保留 6 位小数(成本最小到 $0.02 级)
function num(v) {
  if (v == null || v === "") return null;
  const n = Number(v);
  return isFinite(n) ? Math.round(n * 1e6) / 1e6 : null;
}

// 剥离源站 model_id 的厂商命名空间前缀(如 "anthropic/claude-sonnet-5.5" -> "claude-sonnet-5.5")
// 站内以模型名作为跨源归并与别名表的查找键;展示名由 displayNames/productEvaluation 提供。
const NAMESPACE_RE = /^[A-Za-z0-9._+-]+\//;
function bareSlug(s) {
  return String(s || "").replace(NAMESPACE_RE, "");
}

// UTC ISO 时间戳 -> 北京日期(YYYY-MM-DD);官网页头「数据快照」按北京时间显示,此处与其对齐
function bjDate(iso) {
  const t = Date.parse(iso);
  if (!isFinite(t)) return "";
  return new Date(t + 8 * 3600 * 1000).toISOString().slice(0, 10);
}

// 从 score_policy 解析五轴权重(如 b20-f25-k35-a10-m10 -> 0.20/0.25/0.35/0.10/0.10)
const DEFAULT_WEIGHTS = { backend: 0.2, frontend: 0.25, knowledge: 0.35, aesthetic: 0.1, maintainability: 0.1 };
function policyWeights(policy) {
  const m = /b(\d+)-f(\d+)-k(\d+)-a(\d+)-m(\d+)/.exec(String(policy || ""));
  if (!m) return Object.assign({}, DEFAULT_WEIGHTS);
  const vals = m.slice(1).map(Number);
  const sum = vals.reduce(function (a, b) { return a + b; }, 0);
  if (!sum) return Object.assign({}, DEFAULT_WEIGHTS);
  return {
    backend: vals[0] / sum, frontend: vals[1] / sum, knowledge: vals[2] / sum,
    aesthetic: vals[3] / sum, maintainability: vals[4] / sum
  };
}

// 同一 overall_score 并列时采用 competition ranking(1,2,2,4…),与源站主榜一致
function assignRanks(list, key) {
  let prev = null, prevRank = 0;
  list.forEach(function (item, i) {
    const r = (prev != null && item[key] === prev) ? prevRank : i + 1;
    item.rank = r; prev = item[key]; prevRank = r;
  });
}

class ModeldialSource extends BaseSource {
  constructor() {
    super({
      id: "modeldial", name: "ModelDial 雷达", type: "json",
      url: CONFIG.sources.modeldial.url, host: CONFIG.sources.modeldial.host,
      version: "overview-v1",
      outFile: "modeldial.js", windowVar: "MODELDIAL"
    });
  }
  parse(raw) {
    let d;
    try { d = JSON.parse(raw); }
    catch (e) { throw new Error("ModelDial overview.json 不是合法 JSON(" + e.message + ")"); }
    const snap = d && d.snapshot, entries = snap && snap.entries;
    if (!Array.isArray(entries) || !entries.length) throw new Error("ModelDial snapshot.entries 为空或结构变更");

    const displayNames = d.displayNames || {};
    const effortNames = d.effortDisplayNames || {};
    const releaseDates = d.modelReleaseDates || {};
    const newSet = new Set(d.newModelIds || []);
    const hidden = new Set(d.hiddenModelIds || []);
    const metrics = d.metrics || {};
    const policy = (d.qualityPublication && d.qualityPublication.policy_id) || "";
    const weights = policyWeights(policy);

    const configs = [];
    let bots = 0, hiddenSkipped = 0, nullSkipped = 0;
    entries.forEach(function (e) {
      if (!e || e.overall_score == null) { nullSkipped++; return; }
      if (e.product_kind === "bot") { bots++; return; }
      if (hidden.has(e.model_id) || hidden.has(e.candidate_id)) { hiddenSkipped++; return; }
      const pe = (e.productEvaluation && Object.keys(e.productEvaluation).length) ? e.productEvaluation : null;
      const effortMap = effortNames[e.model_id] || {};
      const axis = (metrics[e.candidate_id] && metrics[e.candidate_id].overall) || {};
      configs.push({
        rank: null,
        candidateId: e.candidate_id,
        model: bareSlug(e.model_id),
        modelId: e.model_id,
        displayName: displayNames[e.model_id] || (pe && pe.product_name) || e.model_id,
        provider: e.connection_id || "",
        effort: effortMap[e.reasoning_effort] || e.reasoning_effort || "default",
        overall: num(e.overall_score),
        backend: num(e.backend_score),
        frontend: num(e.frontend_score),
        knowledge: num(e.knowledge_score),
        aesthetic: num(e.aesthetic_score),
        maintainability: num(e.maintainability_score),
        threeAxis: num(e.three_axis_overall_score),
        external: !!pe,
        apiRankEligible: pe ? !!(pe.api_model_ranking_eligible) : true,
        productName: pe ? (pe.product_name || null) : null,
        releaseDate: releaseDates[e.model_id] || null,
        isNew: newSet.has(e.model_id),
        elapsedMs: num(axis.elapsed_ms),
        costUsd: num(axis.estimated_api_cost_usd),
        tokens: num(axis.token_total),
        costCoverage: axis.cost_coverage || null
      });
    });
    if (!configs.length) throw new Error("ModelDial 未解析到任何有效 config");

    const sortedConfigs = configs.slice().sort(function (a, b) { return b.overall - a.overall; });
    assignRanks(sortedConfigs, "overall");

    // 模型级主榜:同一 modelId 取 overall_score 最高的 config;configs 记该模型档位数
    const best = {}, count = {};
    sortedConfigs.forEach(function (c) {
      count[c.modelId] = (count[c.modelId] || 0) + 1;
      if (!best[c.modelId] || c.overall > best[c.modelId].overall) best[c.modelId] = c;
    });
    const models = Object.keys(best).map(function (k) {
      return Object.assign({}, best[k], { configs: count[k] });
    }).sort(function (a, b) { return b.overall - a.overall; });
    assignRanks(models, "overall");

    return {
      updated: bjDate(snap.published_at) || CONFIG.TODAY,
      batchId: snap.batch_id || "",
      batchPublishedAt: snap.published_at || "",
      batchRevision: (d.highlights && d.highlights.revision != null) ? d.highlights.revision : null,
      publicationKey: d.publicationKey || "",
      viewKey: d.viewKey || "",
      scorePolicy: policy,
      weights: weights,
      models: models,
      configs: sortedConfigs,
      counts: {
        models: models.length, configs: sortedConfigs.length,
        externalProducts: models.filter(function (m) { return m.external; }).length,
        botsExcluded: bots, hiddenExcluded: hiddenSkipped, nullExcluded: nullSkipped
      }
    };
  }
  toStandard(parsed) {
    const T = parsed.updated || CONFIG.TODAY;
    return normalizer.fromArray(this.cfg.id, parsed.models, function (m) {
      return {
        name: m.model, score: m.overall, rank: m.rank - 1, updated: T,
        metrics: {
          backend: m.backend, frontend: m.frontend, knowledge: m.knowledge,
          aesthetic: m.aesthetic, maintainability: m.maintainability, threeAxis: m.threeAxis,
          elapsedMs: m.elapsedMs, costUsd: m.costUsd, tokens: m.tokens,
          configs: m.configs, external: m.external, apiRankEligible: m.apiRankEligible
        },
        meta: {
          provider: m.provider, effort: m.effort, displayName: m.displayName,
          productName: m.productName, releaseDate: m.releaseDate
        }
      };
    });
  }
  writeContent(parsed) {
    const R = CONFIG.REFRESHED_AT, W = parsed.weights, C = parsed.counts;
    const pct = function (v) { return Math.round((v || 0) * 100); };
    return writers.windowVarTemplate("MODELDIAL",
      "// 数据源:ModelDial 雷达(源站快照 " + (parsed.updated || "?") + ";第三方独立实测的综合能力榜)\n" +
      "// 站点:https://modeldial.com/radar(口径说明 https://modeldial.com/method)\n" +
      "// 接口:https://modeldial.com/data/overview.json(snapshot " + parsed.batchId + ",policy " + parsed.scorePolicy + ")\n" +
      "// 授权:CC BY 4.0 · 用途:仅学习与对比展示\n" +
      "// 综合分口径:后端与测试 " + pct(W.backend) + "% + 前端与交互 " + pct(W.frontend) + "% + 知识与推理 " + pct(W.knowledge) +
      "% + 视觉审美 " + pct(W.aesthetic) + "% + 可维护性 " + pct(W.maintainability) + "%(五分项均 0-100);\n" +
      "//   overall=五轴加权分;threeAxis=源站旧 3 轴分(部分新条目为空),仅作参考。\n" +
      "// 覆盖口径:默认 " + C.models + " 个模型 / " + C.configs + " 个配置;剔除 overall 为空、bot 与 hidden 条目;\n" +
      "//   外部产品评测(external=true,apiRankEligible=false)保留在主榜,如 Gemini 4 Argon。\n" +
      "// 成本/耗时:取 metrics[candidateId].overall 五轴汇总口径;外部产品为自报耗时,费用常缺。\n" +
      "// 字段:models[]=模型级主榜(每模型取 overall 最高档);configs[]=全部 config 明细;\n" +
      "//       backend/frontend/knowledge/aesthetic/maintainability=五轴分;configs=该模型档位数;\n" +
      "//       external=外部产品参考条目;apiRankEligible=是否进入源站 API 模型排名。\n" +
      "// 用途:计入总览综合分(「第三方实测」组计分组之一,权重 14%)与命中数。\n",
      {
        source: "ModelDial",
        url: "https://modeldial.com/radar",
        methodUrl: "https://modeldial.com/method",
        apiUrl: "https://modeldial.com/data/overview.json",
        license: "CC BY 4.0",
        batchId: parsed.batchId,
        batchRevision: parsed.batchRevision,
        batchPublishedAt: parsed.batchPublishedAt,
        publicationKey: parsed.publicationKey,
        viewKey: parsed.viewKey,
        scorePolicy: parsed.scorePolicy,
        updated: parsed.updated,
        refreshedAt: R,
        weights: W,
        costBasis: "overall",
        costBasisNote: "耗时与费用取源站五轴汇总口径;外部产品为自报耗时、费用常缺。",
        stats: {
          models: C.models, configs: C.configs, externalProducts: C.externalProducts,
          botsExcluded: C.botsExcluded, hiddenExcluded: C.hiddenExcluded
        },
        desc: "ModelDial Radar:第三方独立实测的编码智能体能力榜,按后端与测试 20% + 前端与交互 25% + 知识与推理 35% + 视觉审美 10% + 可维护性 10% 五轴加权,同一模型按推理强度分档多次测试后取最高分配置入榜,并保留外部产品参考条目。",
        models: parsed.models,
        configs: parsed.configs
      }
    );
  }
}

module.exports = registry.register(ModeldialSource);
