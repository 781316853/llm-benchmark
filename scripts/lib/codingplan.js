// Coding Plan 套餐快速对比抓取与维护(data/codingplan.js)
// 数据源 codingplan.fyi(V2 静态站)「额度/价格对比」视图的快速对比板块:按模型分列的套餐比价
// (平台/套餐 → 月价 → 综合单价 → 实测月用量)。算法完整复刻源站 scripts/entity-data.js 的
// buildComparisonPoints + model-comparison.js 的预置行过滤/排序/格式化,保证数值口径一致。
// 数据链:model-comparison-presets.json(固定精选模型分组)→ plan-models.json(套餐×模型行,
//   含综合单价 unitPriceCnyPerM(¥/M Token)与实测月用量 monthlyTokenInM(百万 Token))×
//   plans.json(月价/币种/billingMode)× models.json(显示名)× platforms.json(平台名);
//   美元汇率取 config.json 的 usdToCnyRate(与源站一致,当前 6.8)。
// 与 news.js 同模式:在 fetch_all.js 末尾旁路调用,不进基准 registry(避免污染 quality.js 校验)。
// 精简:丢弃 action 推广跳转链接;仅保留预置分组命中的行(约 20KB)。
// fail-soft:抓取失败抛错由 fetch_all.js 兜底,保留旧文件(由 writers.writeFileIfChanged 保证)。
"use strict";
const CONFIG = require("./config");
const transport = require("./transport");
const writers = require("./writers");

// ===== 源站常量(model-comparison.js 内置,原样复刻) =====
// 「仅显示精选平台」默认勾选,对应这 9 个平台 slug
var FEATURED_PLATFORM_SLUGS = [
  "aliyun-bailian", "zhipu", "bytedance-ark", "codex", "claude",
  "deepseek-official", "kimi", "minimax", "opencode"
];
// 「统一口径」文案(源站 model-comparison.js 内置说明,原样转载)
var CALIBER_NOTE = "统一口径：有具体输入、输出、缓存价格的为计算得出，其余的除了Kimi套餐没有购买到之外，均为实测数据，实测尽量构造95%缓存命中率和0.5%的输出占比。";

// ===== 通用工具(与源站一致) =====
function positiveNumber(value) {
  return typeof value === "number" && Number.isFinite(value) && value > 0 ? value : null;
}
// 币种 → 人民币汇率:¥/￥/CNY/RMB=1;$ /USD/US$=usdToCnyRate;其余不识别
function currencyRate(currency, usdToCnyRate) {
  var c = String(currency || "").trim().toUpperCase();
  if (["¥", "￥", "CNY", "RMB"].indexOf(c) >= 0) return 1;
  if (["$", "USD", "US$"].indexOf(c) >= 0) return usdToCnyRate;
  return null;
}
function fmtNumber(value, maxFrac) {
  var n = Number(value);
  if (!Number.isFinite(n)) return "—";
  return n.toLocaleString("zh-CN", { maximumFractionDigits: maxFrac });
}

// ===== points 构造(复刻 entity-data.buildComparisonPoints) =====
function buildComparisonPoints(docs, usdToCnyRate) {
  var planBySlug = new Map(docs.plans.map(function (p) { return [p.slug, p]; }));
  var modelBySlug = new Map(docs.models.map(function (m) { return [m.slug, m]; }));
  var platformBySlug = new Map(docs.platforms.map(function (p) { return [p.slug, p]; }));
  var points = [];
  docs.planModels.forEach(function (relation) {
    var plan = planBySlug.get(relation.planSlug);
    var model = modelBySlug.get(relation.modelSlug);
    if (!plan || !model) return;
    var platform = platformBySlug.get(plan.platformSlug);
    if (!platform) return;
    var usage = relation.usage || {};
    var unit = positiveNumber(usage.unitPriceCnyPerM);
    var monthly = positiveNumber(usage.monthlyTokenInM);
    var fee = positiveNumber(plan.comparisonMonthlyPrice != null ? plan.comparisonMonthlyPrice : plan.monthlyPrice);
    var rate = currencyRate(plan.currency || "¥", usdToCnyRate);
    var monthlyFeeCny = fee && rate ? Math.round(fee * rate * 1e6) / 1e6 : null;
    var billingMode = plan.billingMode;
    // 入选条件:按量行须有综合单价;订阅行须有(折算月价+月用量)或综合单价
    if (billingMode === "payg" ? !unit : !((monthlyFeeCny && monthly) || unit)) return;
    points.push({
      slug: relation.slug,
      platformSlug: platform.slug,
      modelSlug: model.slug,
      platformName: platform.name,
      planName: plan.comparisonName || plan.name,
      modelName: model.name,
      // 时间档/上下文档/服务档标签,如 "[谷]" "[峰]" "[高速]"
      tierLabel: [relation.serviceTier, relation.contextTier, relation.timeTier]
        .filter(Boolean).map(function (t) { return "[" + t + "]"; }).join(" "),
      billingMode: billingMode,
      monthlyFeeCny: billingMode === "subscription" ? monthlyFeeCny : null,
      monthlyTokenInM: billingMode === "subscription" ? monthly : null,
      unitPriceCnyPerM: unit
    });
  });
  return points;
}

// ===== 显示格式化(复刻 model-comparison.js 的 formatUnitPrice/formatTokenAmount) =====
// 综合单价:¥/M → ¥/亿(×100),最多 4 位小数,如 "¥2.992 / 亿"
function fmtUnitPrice(unitPerM) {
  var n = positiveNumber(unitPerM);
  if (n == null) return "—";
  return "¥" + fmtNumber(n * 100, 4) + " / 亿";
}
// 月用量:百万 Token → 亿(÷100);<1 亿 3 位、<10 亿 2 位、其余 1 位小数;缺失(如按量行)为 "—"
function fmtTokenAmount(tokenInM) {
  var n = positiveNumber(tokenInM);
  if (n == null) return "—";
  var yi = n / 100;
  var digits = yi < 1 ? 3 : yi < 10 ? 2 : 1;
  return fmtNumber(yi, digits) + "亿";
}

// ===== 预置分组行(复刻 buildPresetComparisonRows:过滤 + 综合单价升序) =====
function buildPresetRows(points, modelSlugs) {
  var wanted = new Set(modelSlugs);
  var featured = new Set(FEATURED_PLATFORM_SLUGS);
  return points
    .filter(function (p) {
      return (p.billingMode === "subscription" || p.billingMode === "payg") &&
        wanted.has(p.modelSlug) &&
        positiveNumber(p.unitPriceCnyPerM) != null &&
        (p.billingMode === "payg" || (
          positiveNumber(p.monthlyFeeCny) != null && positiveNumber(p.monthlyTokenInM) != null));
    })
    .sort(function (a, b) { return a.unitPriceCnyPerM - b.unitPriceCnyPerM; })
    .map(function (p) {
      return {
        platform: p.platformName,
        model: p.modelName,
        plan: p.planName || (p.billingMode === "payg" ? "按量 API" : "订阅"),
        qualifier: p.tierLabel || "",
        // 月价:按量行显示"按量",订阅行显示折算人民币月价
        price: p.billingMode === "payg" ? "按量" : "¥" + fmtNumber(p.monthlyFeeCny, 2) + " / 月",
        unit: fmtUnitPrice(p.unitPriceCnyPerM),
        usage: fmtTokenAmount(p.monthlyTokenInM),
        featured: featured.has(p.platformSlug)
      };
    });
}

// ===== 主入口 =====
async function updateCodingplan() {
  var cfg = CONFIG.codingplan;
  // 同 host 请求由 transport 自动串行限流;按依赖顺序抓取
  var texts = {};
  for (var key of ["configUrl", "plansUrl", "platformsUrl", "modelsUrl", "planModelsUrl", "presetsUrl"]) {
    texts[key] = await transport.fetchWithRetry(cfg[key]);
  }
  var config = JSON.parse(texts.configUrl);
  var plansDoc = JSON.parse(texts.plansUrl);
  var platformsDoc = JSON.parse(texts.platformsUrl);
  var modelsDoc = JSON.parse(texts.modelsUrl);
  var planModelsDoc = JSON.parse(texts.planModelsUrl);
  var presets = JSON.parse(texts.presetsUrl);

  var usdToCnyRate = positiveNumber(config && config.usdToCnyRate) || 6.8;
  var groupsRaw = presets && Array.isArray(presets.groups) ? presets.groups : [];
  if (!groupsRaw.length) throw new Error("model-comparison-presets.json 未解析到分组");

  var points = buildComparisonPoints({
    plans: plansDoc.plans || [],
    platforms: platformsDoc.platforms || [],
    models: modelsDoc.models || [],
    planModels: planModelsDoc.planModels || []
  }, usdToCnyRate);

  var rowCount = 0;
  var groups = groupsRaw
    .filter(function (g) { return g && g.enabled !== false && Array.isArray(g.modelSlugs) && g.modelSlugs.length; })
    .map(function (g) {
      var rows = buildPresetRows(points, g.modelSlugs);
      rowCount += rows.length;
      return {
        id: g.id || g.title,
        title: g.title || "",
        kind: g.kind === "multi" ? "multi" : "single",
        // multi 列副标题:包含的模型显示名
        desc: g.kind === "multi"
          ? "包含：" + g.modelSlugs.map(function (slug) {
              var hit = points.find(function (p) { return p.modelSlug === slug; });
              return hit ? hit.modelName : slug;
            }).join("、")
          : "",
        rows: rows
      };
    });

  // 源站更新日:header.updateDate 形如 "更新日期 2026.9.11 | ..." -> 提取 "2026.9.11"
  var updateRaw = (config.header && config.header.updateDate) || "";
  var um = String(updateRaw).match(/(\d{4}\.\d{1,2}\.\d{1,2})/);
  var siteUpdated = um ? um[1] : String(updateRaw).slice(0, 40);

  var obj = {
    source: "Coding Plan 对比(codingplan.fyi)",
    url: cfg.planModelsUrl,
    officialUrl: cfg.officialUrl,
    updated: CONFIG.TODAY,
    siteUpdated: siteUpdated,
    refreshedAt: CONFIG.REFRESHED_AT,
    usdToCnyRate: usdToCnyRate,
    stats: { groups: groups.length, rows: rowCount, points: points.length },
    presetTitle: String(presets.title || "快速对比"),
    presetDesc: String(presets.description || ""),
    caliberNote: CALIBER_NOTE,
    desc: "codingplan.fyi「额度/价格对比」快速对比快照:按固定精选模型分列的套餐比价(月价 / 综合单价 / 实测月用量)。",
    groups: groups
  };
  var header =
    "// 数据源:Coding Plan 对比(codingplan.fyi)「额度/价格对比」快速对比,更新于 " + CONFIG.TODAY + "\n" +
    "// 来源:" + cfg.presetsUrl + " + plans.json + plan-models.json + models.json + platforms.json(官方:" + cfg.officialUrl + ")\n" +
    "// 字段说明:groups[]=固定精选模型分组(kind single=单模型列/multi=多模型列);row=比价行\n" +
    "//   (platform 平台/plan 套餐/qualifier 谷峰等档位标签/price 折算人民币月价按量行计「按量」/\n" +
    "//    unit 综合单价 ¥/亿/usage 实测月用量/featured 是否精选平台);排序=综合单价升序。\n" +
    "// 口径:综合单价与月用量为源站实测/计算值(95% 缓存命中率、0.5% 输出占比),美元按 " + usdToCnyRate + " 折算;\n" +
    "// 用途:「套餐对比」页展示;action 推广跳转已丢弃,购买请前往源站。\n";
  writers.writeWindowVar(cfg.outFile, cfg.windowVar, writers.windowVarTemplate(cfg.windowVar, header, obj));
  console.log("[codingplan] ✓ " + groups.length + " 个分组 " + rowCount + " 行比价(源站更新 " + siteUpdated + ",汇率 " + usdToCnyRate + ")");
}

module.exports = { updateCodingplan: updateCodingplan };
