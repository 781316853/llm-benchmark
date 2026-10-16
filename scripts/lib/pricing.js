// 模型 API 标价抓取与维护(data/pricing.js)
// 数据源 codingplan.fyi(V2 静态站)plan-models.json 的 pricing 字段:每个 plan×model 的
// 输入 / 缓存输入 / 输出三档单价($/百万 token)与对应人民币值,以及顶层 workload
// (cacheHitRate / outputRatio / tokensPerRequest)。
// 用途:总览矩阵「性价比」列 —— 按 1M token 实际编程比例折算「每百万 token 综合成本」,
//   再与综合分相除得性价比指数。
//   综合成本 = cacheHitRate×缓存输入价 + (1−cacheHitRate−outputRatio)×输入价 + outputRatio×输出价
//   (源站 workload 实测为 cacheHitRate 0.95 / outputRatio 0.005,即 95% 缓存命中、0.5% 输出占比)
// 只保留可比计价:currency 为 "$"(按汇率折人民币)或 "¥" 的档位;其余 currency=null 的是
//   各平台的「积分 / Credits / AFP / Token」额度单位(inputPerM 出现 450、1000000、300000000
//   这类值),与人民币单价不同量纲,不参与折算。
// 同一 modelSlug 常有多条 pricing(不同平台 / 上下文档 ≤272K·>272K / 谷峰档 / 高速档),
//   取「(输入|缓存|输出) 三元组出现次数最多者」(并列取字典序最小)作为该模型的标准价 ——
//   实测该法能剔除 UltraSpeed 之类的高价档,得到与源站标价一致的结果。
// 与 codingplan.js 同模式:在 fetch_all.js 末尾旁路调用,不进基准 registry(避免污染
//   data/quality.js 的校验),fail-soft 失败由 fetch_all.js 兜底保留旧文件。
"use strict";
const CONFIG = require("./config");
const transport = require("./transport");
const writers = require("./writers");
const modelMap = require("./model-map");

// 币种 → 人民币汇率:¥/￥/CNY/RMB=1;$ /USD/US$=usdToCnyRate;其余(含 null/undefined)不识别
function currencyRate(currency, usdToCnyRate) {
  var c = String(currency == null ? "" : currency).trim().toUpperCase();
  if (["¥", "￥", "CNY", "RMB"].indexOf(c) >= 0) return 1;
  if (["$", "USD", "US$"].indexOf(c) >= 0) return usdToCnyRate;
  return null;
}
// 正数校验(0 不作有效单价;$0 只在免费档出现,不参与性价比计算)
function positiveNumber(value) {
  return typeof value === "number" && Number.isFinite(value) && value > 0 ? value : null;
}
// 非负校验:缓存输入价允许为 0(部分平台不计缓存价)
function nonNegativeNumber(value) {
  return typeof value === "number" && Number.isFinite(value) && value >= 0 ? value : null;
}
// 保留 6 位小数,消除浮点尾差(输出文件按值去重/比对,尾差会让每日刷新产生假变更)
function round6(n) { return Math.round(n * 1e6) / 1e6; }

// 单条 pricing 归一为人民币三档单价;不可比(币种不识别/字段缺失)返回 null
function normalizePricing(pricing, usdToCnyRate) {
  if (!pricing || typeof pricing !== "object") return null;
  var rate = currencyRate(pricing.currency, usdToCnyRate);
  if (rate == null) return null;
  var input = positiveNumber(pricing.inputPerM);
  var output = positiveNumber(pricing.outputPerM);
  var cache = nonNegativeNumber(pricing.cachePerM);
  if (input == null || output == null || cache == null) return null;
  // 源站已给人民币字段时优先直采(与源站自身口径一致),缺失再按汇率折算
  var inputCny = positiveNumber(pricing.inputCnyPerM);
  var cacheCny = (pricing.cacheCnyPerM === 0) ? 0 : positiveNumber(pricing.cacheCnyPerM);
  var outputCny = positiveNumber(pricing.outputCnyPerM);
  return {
    input: round6(inputCny != null ? inputCny : input * rate),
    cache: round6(cacheCny != null ? cacheCny : cache * rate),
    output: round6(outputCny != null ? outputCny : output * rate)
  };
}

// 同一 modelSlug 的多条单价取众数:键为三元组,并列时取字典序最小(结果确定,不随抓取顺序漂移)
function pickMode(list) {
  var bucket = {};
  list.forEach(function (p) {
    var k = p.input + "|" + p.cache + "|" + p.output;
    if (!bucket[k]) bucket[k] = { key: k, n: 0, price: p };
    bucket[k].n++;
  });
  var keys = Object.keys(bucket).sort();
  var best = null;
  keys.forEach(function (k) {
    var b = bucket[k];
    if (!best || b.n > best.n) best = b;
  });
  return best ? best.price : null;
}

// 主入口
async function updatePricing() {
  var cfg = CONFIG.pricing;
  // 汇率与单价表分属两个 URL,由 transport 按 host 自动串行限流
  var texts = {};
  for (var key of ["configUrl", "planModelsUrl"]) {
    texts[key] = await transport.fetchWithRetry(cfg[key]);
  }
  var config = JSON.parse(texts.configUrl);
  var doc = JSON.parse(texts.planModelsUrl);

  var usdToCnyRate = positiveNumber(config && config.usdToCnyRate) || cfg.fallbackUsdToCny;

  // 折算系数:优先用源站 workload(口径变了要看得见,不能静默沿用旧常量)
  var wl = (doc && doc.workload) || {};
  var cacheHitRate = (typeof wl.cacheHitRate === "number" && Number.isFinite(wl.cacheHitRate))
    ? wl.cacheHitRate : cfg.fallbackCacheHitRate;
  var outputRatio = (typeof wl.outputRatio === "number" && Number.isFinite(wl.outputRatio))
    ? wl.outputRatio : cfg.fallbackOutputRatio;
  if (cacheHitRate !== cfg.fallbackCacheHitRate || outputRatio !== cfg.fallbackOutputRatio) {
    console.warn("[pricing] ⚠ 源站 workload 口径已变化:cacheHitRate=" + cacheHitRate +
      " outputRatio=" + outputRatio + "(原为 " + cfg.fallbackCacheHitRate + " / " +
      cfg.fallbackOutputRatio + "),已按源站新口径折算");
  }
  var restRatio = 1 - cacheHitRate - outputRatio;   // 未命中缓存的输入占比,当前 0.045

  var rows = Array.isArray(doc && doc.planModels) ? doc.planModels : [];
  if (!rows.length) throw new Error("plan-models.json 未解析到 planModels");

  var withPricing = 0;
  var bySlug = {};
  var comparable = 0;
  rows.forEach(function (r) {
    if (!r || !r.pricing) return;
    withPricing++;
    var p = normalizePricing(r.pricing, usdToCnyRate);
    if (!p) return;
    comparable++;
    if (!r.modelSlug) return;
    (bySlug[r.modelSlug] = bySlug[r.modelSlug] || []).push(p);
  });

  var models = [];
  var unresolved = 0;
  var overLimit = [];
  Object.keys(bySlug).forEach(function (slug) {
    var p = pickMode(bySlug[slug]);
    if (!p) return;
    var canon = modelMap.canon(slug);
    var costPerM = round6(p.cache * cacheHitRate + p.input * restRatio + p.output * outputRatio);
    if (costPerM > cfg.costPerMSanityLimit) overLimit.push(slug + "(" + costPerM + ")");
    // 未登记进别名表的 slug 会走自动建档(vendor=其他),其 id 与前端榜单展示名不一致、
    // 前端永远查不到;这类条目仍写入(前端查不到自然忽略),但计数出来便于发现源头改名。
    if (!canon || canon.vendor === "其他") unresolved++;
    models.push({
      id: canon.id,
      slug: slug,
      inputCnyPerM: p.input,
      cacheCnyPerM: p.cache,
      outputCnyPerM: p.output,
      costPerM: costPerM
    });
  });
  // 同一 canonical 命中多个 slug 时(连字符写法差异)取成本更低者,保证 id 唯一
  var byId = {};
  models.forEach(function (m) {
    if (!byId[m.id] || m.costPerM < byId[m.id].costPerM) byId[m.id] = m;
  });
  var unique = Object.keys(byId).map(function (k) { return byId[k]; });
  unique.sort(function (a, b) { return b.costPerM - a.costPerM || (a.id < b.id ? -1 : 1); });

  var obj = {
    source: "Coding Plan 对比(codingplan.fyi)",
    url: cfg.planModelsUrl,
    officialUrl: cfg.officialUrl,
    updated: CONFIG.TODAY,
    refreshedAt: CONFIG.REFRESHED_AT,
    usdToCnyRate: usdToCnyRate,
    workload: { cacheHitRate: cacheHitRate, outputRatio: outputRatio },
    formula: "综合成本(¥/百万token) = cacheHitRate×缓存输入价 + (1−cacheHitRate−outputRatio)×输入价 + outputRatio×输出价",
    stats: {
      planModels: rows.length,
      withPricing: withPricing,
      comparable: comparable,
      models: unique.length,
      unresolved: unresolved
    },
    desc: "codingplan.fyi plan-models.json 的模型 API 标价快照(输入 / 缓存输入 / 输出三档单价,¥/百万 token)," +
      "按源站统一工作负载(95% 缓存命中、0.5% 输出占比)折算每百万 token 综合成本,供总览矩阵「性价比」列使用。",
    models: unique
  };
  var header =
    "// 数据源:模型 API 标价(codingplan.fyi plan-models.json 的 pricing 字段),更新于 " + CONFIG.TODAY + "\n" +
    "// 来源:" + cfg.planModelsUrl + " + config.json(汇率;官方:" + cfg.officialUrl + ")\n" +
    "// 字段说明:models[]=模型级标准价(id=canonical 模型名/slug=源站 slug/\n" +
    "//   inputCnyPerM·cacheCnyPerM·outputCnyPerM=输入·缓存输入·输出单价(人民币/百万 token)/\n" +
    "//   costPerM=每百万 token 综合成本);按 costPerM 降序。\n" +
    "// 口径:" + obj.formula + ";\n" +
    "//   折算系数取自源站 workload(cacheHitRate=" + cacheHitRate + ", outputRatio=" + outputRatio + "),\n" +
    "//   仅收 $" + " / ¥ 计价档位(积分·Credits·AFP·Token 额度单位不可比,已丢弃),\n" +
    "//   同 slug 取 (输入|缓存|输出) 三元组众数;美元按汇率 " + usdToCnyRate + " 折算人民币。\n" +
    "// 用途:总览矩阵「性价比」列(综合分 ÷ costPerM);价格为快照口径,可能滞后于平台官网。\n";
  writers.writeWindowVar(cfg.outFile, cfg.windowVar, writers.windowVarTemplate(cfg.windowVar, header, obj));

  var costs = unique.map(function (m) { return m.costPerM; });
  var min = costs.length ? Math.min.apply(null, costs) : 0;
  var max = costs.length ? Math.max.apply(null, costs) : 0;
  console.log("[pricing] ✓ " + unique.length + " 个模型有可比标价(planModels " + rows.length +
    " 条,pricing " + withPricing + " 条,可比 " + comparable + " 条;costPerM " + min + " ~ " + max + ")");
  if (unresolved) console.log("[pricing] ! " + unresolved + " 个 slug 未命中别名表(vendor=其他),前端将忽略");
  if (overLimit.length) console.warn("[pricing] ⚠ costPerM 超过哨兵上限 " + cfg.costPerMSanityLimit + ":" + overLimit.join(", "));
}

module.exports = { updatePricing: updatePricing };
