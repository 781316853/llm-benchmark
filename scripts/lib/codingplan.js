// Coding Plan 套餐数据抓取与维护(data/codingplan.js)
// 数据源:① codingplan.fyi(开源 MIT)plans.json(套餐月价 + 内嵌 planModels);
//   ② realapipricing.com(开源 MIT)points.json,补充实测月额度并补入 codingplan 未收录的套餐。
// 输出:groups[]=既有「精选模型对比」(按模型分列,综合单价升序);plans[]=新增「全部套餐」目录
//   (在售/受限,排除已下架;每模型 0/50/95/99% 四档缓存占比下的月可用额度,单位百万 Token)。
// 口径:输出固定 0.5%,余量为未缓存输入;codingplan 以 95% 月额度按混合价换算,
//   realapi 用其 list_blended 混合价反推同一预算再换算。action 推广链接一律丢弃。
// 仿 news 模式:在 fetch_all.js 旁路调用,不进 registry/校验器;失败由 fetch_all 兜底保留旧文件。
"use strict";
const CONFIG = require("./config");
const transport = require("./transport");
const writers = require("./writers");
const realapi = require("./realapi");

var CACHE_RATIOS = realapi.CACHE_RATIOS;   // [0, 0.5, 0.95, 0.99]
var OUT = 0.005;
var FEATURED_PLATFORM_SLUGS = [
  "aliyun-bailian", "zhipu", "bytedance-ark", "codex", "claude",
  "deepseek-official", "kimi", "minimax", "opencode"
];

function pos(v) { return typeof v === "number" && Number.isFinite(v) && v > 0 ? v : null; }
function nonNeg(v) { return typeof v === "number" && Number.isFinite(v) && v >= 0 ? v : null; }
function r1(n) { return Math.round(n * 10) / 10; }
function r2(n) { return Math.round(n * 100) / 100; }
function r4(n) { return Math.round(n * 1e4) / 1e4; }
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
function slugify(s) {
  return String(s || "").toLowerCase().replace(/[^a-z0-9\u4e00-\u9fff]+/g, "-")
    .replace(/^-+|-+$/g, "").slice(0, 60);
}
function normSlug(s) { return String(s || "").toLowerCase().replace(/\./g, "-"); }
// 模型品牌:按显示名前缀匹配 config.codingplan.brandRules;未命中回退厂商,再回退名称首词
function brandOf(name, fallback) {
  var n = String(name || "").toLowerCase();
  var rules = CONFIG.codingplan.brandRules || [];
  for (var i = 0; i < rules.length; i++) {
    if (n.indexOf(rules[i][0]) === 0) return rules[i][1];
  }
  var fb = String(fallback || "").trim();
  if (fb) return fb;
  return String(name || "").split(/[\s\-]/)[0] || "其他";
}
// codingplan 行的官方三段价 → 人民币 [输入, 缓存, 输出] ¥/百万 token
function officialCoding(row, usdToCnyRate) {
  var pr = row && row.pricing;
  if (!pr) return null;
  var inC = pos(pr.inputCnyPerM), caC = nonNeg(pr.cacheCnyPerM), outC = pos(pr.outputCnyPerM);
  if (inC != null && caC != null && outC != null) return [r4(inC), r4(caC), r4(outC)];
  var rate = currencyRate(pr.currency, usdToCnyRate);
  if (rate == null) return null;
  var i = nonNeg(pr.inputPerM), c = nonNeg(pr.cachePerM), o = nonNeg(pr.outputPerM);
  if (i == null || c == null || o == null) return null;
  return [r4(i * rate), r4(c * rate), r4(o * rate)];
}
// 补充源套餐是否国内可直接购买(平台白名单;名称含 Global / Alibaba Cloud 的按海外)
function domesticRealapi(sp) {
  if (/Global|Alibaba Cloud/i.test(sp.plan)) return 0;
  return (CONFIG.realapi.domesticPlatforms || []).indexOf(sp.platform) >= 0 ? 1 : 0;
}

// ===== 旧视图:points(plans.json 的 planModels 拼平后补 planSlug) =====
function flattenPlans(plans) {
  var rows = [];
  plans.forEach(function (p) {
    (p.planModels || []).forEach(function (r) {
      rows.push(Object.assign({ planSlug: p.slug }, r));
    });
  });
  return rows;
}
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
    var unit = pos(usage.unitPriceCnyPerM);
    var monthly = pos(usage.monthlyTokenInM);
    var fee = pos(plan.comparisonMonthlyPrice != null ? plan.comparisonMonthlyPrice : plan.monthlyPrice);
    var rate = currencyRate(plan.currency || "¥", usdToCnyRate);
    var feeCny = fee && rate ? Math.round(fee * rate * 1e6) / 1e6 : null;
    var billingMode = plan.billingMode;
    if (billingMode === "payg" ? !unit : !((feeCny && monthly) || unit)) return;
    points.push({
      platformSlug: platform.slug,
      modelSlug: model.slug,
      platformName: platform.name,
      planName: plan.comparisonName || plan.name,
      modelName: model.name,
      tierLabel: [relation.serviceTier, relation.contextTier, relation.timeTier]
        .filter(Boolean).map(function (t) { return "[" + t + "]"; }).join(" "),
      billingMode: billingMode,
      monthlyFeeCny: billingMode === "subscription" ? feeCny : null,
      monthlyTokenInM: billingMode === "subscription" ? monthly : null,
      unitPriceCnyPerM: unit
    });
  });
  return points;
}
function fmtUnitPrice(unitPerM) {
  var n = pos(unitPerM);
  return n == null ? "—" : "¥" + fmtNumber(n * 100, 4) + " / 亿";
}
function fmtTokenAmount(tokenInM) {
  var n = pos(tokenInM);
  if (n == null) return "—";
  var yi = n / 100;
  return fmtNumber(yi, yi < 1 ? 3 : yi < 10 ? 2 : 1) + "亿";
}
function buildPresetRows(points, modelSlugs) {
  var wanted = new Set(modelSlugs);
  var featured = new Set(FEATURED_PLATFORM_SLUGS);
  return points.filter(function (p) {
    return wanted.has(p.modelSlug) && pos(p.unitPriceCnyPerM) != null &&
      (p.billingMode === "payg" ||
        (pos(p.monthlyFeeCny) != null && pos(p.monthlyTokenInM) != null));
  }).sort(function (a, b) { return a.unitPriceCnyPerM - b.unitPriceCnyPerM; })
    .map(function (p) {
      return {
        platform: p.platformName,
        model: p.modelName,
        plan: p.planName || (p.billingMode === "payg" ? "按量 API" : "订阅"),
        qualifier: p.tierLabel || "",
        price: p.billingMode === "payg" ? "按量" : "¥" + fmtNumber(p.monthlyFeeCny, 2) + " / 月",
        unit: fmtUnitPrice(p.unitPriceCnyPerM),
        usage: fmtTokenAmount(p.monthlyTokenInM),
        featured: featured.has(p.platformSlug)
      };
    });
}

// ===== 全部套餐目录 =====
function blendedPrice(pr, h) {
  return h * pr.cachePerM + (1 - h - OUT) * pr.inputPerM + OUT * pr.outputPerM;
}
function codingQuotas(row) {
  var q95 = pos(row.usage && row.usage.monthlyTokenInM);
  if (q95 == null) return null;
  var pr = row.pricing;
  if (pr && pos(pr.inputPerM) != null && nonNeg(pr.cachePerM) != null && pos(pr.outputPerM) != null) {
    var b95 = blendedPrice(pr, 0.95);
    if (b95 > 0) {
      return CACHE_RATIOS.map(function (h) {
        var b = blendedPrice(pr, h);
        return b > 0 ? r1(q95 * b95 / b) : null;
      });
    }
  }
  return [null, null, r1(q95), null];
}
function tierLabel(row) {
  return [row.serviceTier, row.contextTier, row.timeTier]
    .filter(Boolean).map(function (t) { return "[" + t + "]"; }).join(" ");
}
function planFeeCny(plan, usdToCnyRate) {
  var fee = pos(plan.monthlyPrice);
  var rate = currencyRate(plan.currency || "¥", usdToCnyRate);
  return fee && rate ? r2(fee * rate) : null;
}
function realapiRow(m, feeCny) {
  var row = {
    m: m.name,
    t: "",
    u: m.q[2] != null && m.q[2] > 0 ? r4(feeCny / m.q[2]) : null,
    q: m.q,
    s: "r",
    w: m.w,
    b: brandOf(m.name, m.v),
    p: m.p || null
  };
  if (m.x) row.x = 1;
  if (m.d) row.d = m.d;
  return row;
}

function buildCatalogue(plans, platforms, models, usdToCnyRate, supplement) {
  var platformBySlug = new Map(platforms.map(function (p) { return [p.slug, p]; }));
  var modelBySlug = new Map(models.map(function (m) { return [m.slug, m]; }));
  var cat = [];
  var bySlug = new Map();

  plans.forEach(function (plan) {
    if (plan.planStatus === "delisted") return;
    var platform = platformBySlug.get(plan.platformSlug);
    var feeCny = planFeeCny(plan, usdToCnyRate);
    var entry = {
      slug: plan.slug,
      name: plan.name,
      platform: platform ? platform.name : plan.platformSlug,
      status: plan.planStatus === "restricted" ? "restricted" : "open",
      billing: plan.billingMode === "payg" ? "payg" : "subscription",
      origin: "codingplan",
      fee: pos(plan.monthlyPrice),
      currency: plan.currency || "¥",
      feeCny: feeCny,
      dm: platform && platform.supportsDomestic ? 1 : 0,
      models: []
    };
    (plan.planModels || []).forEach(function (row) {
      var q = codingQuotas(row);
      var u = pos(row.usage && row.usage.unitPriceCnyPerM);
      if (u == null && feeCny != null && q && q[2] > 0) u = r4(feeCny / q[2]);
      if (u == null && q == null) return;
      var hit = modelBySlug.get(row.modelSlug);
      var mname = hit ? hit.name : String(row.modelSlug || "");
      entry.models.push({
        c: normSlug(row.modelSlug),
        m: mname,
        t: tierLabel(row),
        u: u,
        q: q || [null, null, null, null],
        s: "c",
        w: null,
        b: brandOf(mname),
        p: officialCoding(row, usdToCnyRate)
      });
    });
    cat.push(entry);
    bySlug.set(entry.slug, entry);
  });
  // 无任何额度/单价行的套餐(源站只有月费)不进列表,只计数,避免整表出现大量空卡
  var stats = {
    aliasMatched: 0, addedPlans: 0, rowsFromRealapi: 0,
    priceMismatch: 0, skippedTiered: 0, duplicates: 0, emptyPlans: 0
  };
  // 无任何额度/单价行的套餐(源站只有月费)不进列表,只计数,避免整表出现大量空卡
  cat = cat.filter(function (p) {
    if (p.models.length) return true;
    stats.emptyPlans++;
    bySlug.delete(p.slug);
    return false;
  });

  var addedSigs = {};

  function addRealapiPlan(sp) {
    var platform = sp.platform || sp.vendor;
    var sig = platform + "|" + sp.feeCny + "|" +
      sp.models.map(function (m) { return m.code; }).sort().join(",");
    if (addedSigs[sig]) { stats.duplicates++; return; }
    addedSigs[sig] = true;
    // slug 归一后可能撞车(如 "Pro" 与 "Pro+"):追加序号保证唯一,避免展开状态联动
    var base = "ra-" + slugify(platform + "-" + sp.plan);
    var slug = base, n = 2;
    while (bySlug.has(slug)) slug = base + "-" + n++;
    var entry = {
      slug: slug,
      name: sp.plan,
      platform: platform,
      status: "open",
      billing: "subscription",
      origin: "realapi",
      fee: sp.feeCny,
      currency: "¥",
      feeCny: sp.feeCny,
      dm: domesticRealapi(sp),
      models: sp.models.map(function (m) { return realapiRow(m, sp.feeCny); })
    };
    cat.push(entry);
    bySlug.set(slug, entry);
    stats.addedPlans++;
  }

  if (supplement && supplement.plans) {
    var aliases = CONFIG.realapi.planAliases || {};
    var tolerance = CONFIG.realapi.priceTolerance || 0.1;
    supplement.plans.forEach(function (sp) {
      var target = bySlug.get(aliases[sp.plan]);
      if (target) {
        var diff = target.feeCny ? Math.abs(sp.feeCny - target.feeCny) / target.feeCny : null;
        if (diff == null || diff <= tolerance) {
          stats.aliasMatched++;
          sp.models.forEach(function (m) {
            var code = normSlug(m.code);
            var untiered = target.models.filter(function (r) { return r.c === code && !r.t; });
            if (untiered.length) {
              untiered.forEach(function (r) {
                r.q = m.q;
                r.u = m.q[2] > 0 ? r4(sp.feeCny / m.q[2]) : r.u;
                r.s = "r";
                r.w = m.w;
                if (!r.p && m.p) r.p = m.p;
                if (m.x) r.x = 1; else delete r.x;
                if (m.d) r.d = m.d;
              });
              stats.rowsFromRealapi += untiered.length;
            } else if (target.models.some(function (r) { return r.c === code; })) {
              stats.skippedTiered++;
            } else {
              target.models.push(realapiRow(m, sp.feeCny));
              stats.rowsFromRealapi++;
            }
          });
          return;
        }
        stats.priceMismatch++;
      }
      addRealapiPlan(sp);
    });
  }

  var rows = 0;
  cat.forEach(function (p) {
    p.models.forEach(function (row) { delete row.c; });
    rows += p.models.length;
  });

  return {
    plans: cat,
    stats: Object.assign(stats, {
      plans: cat.length,
      rows: rows,
      fromCodingplan: cat.filter(function (p) { return p.origin === "codingplan"; }).length,
      fromRealapi: cat.filter(function (p) { return p.origin === "realapi"; }).length
    })
  };
}
// ===== 主入口 =====
async function updateCodingplan() {
  var cfg = CONFIG.codingplan;
  var texts = {};
  for (var key of ["configUrl", "plansUrl", "platformsUrl", "modelsUrl"]) {
    texts[key] = await transport.fetchWithRetry(cfg[key]);
  }
  var config = JSON.parse(texts.configUrl);
  var plansDoc = JSON.parse(texts.plansUrl);
  var platformsDoc = JSON.parse(texts.platformsUrl);
  var modelsDoc = JSON.parse(texts.modelsUrl);

  var usdToCnyRate = pos(config && config.usdToCnyRate) || 6.8;
  var plans = plansDoc.plans || [];
  var platforms = platformsDoc.platforms || [];
  var models = modelsDoc.models || [];
  if (!plans.length) throw new Error("plans.json 未解析到套餐");

  var points = buildComparisonPoints({
    plans: plans, platforms: platforms, models: models,
    planModels: flattenPlans(plans)
  }, usdToCnyRate);

  var modelBySlug = new Map(models.map(function (m) { return [m.slug, m]; }));
  var groupsRaw = Array.isArray(cfg.presetGroups) ? cfg.presetGroups : [];
  if (!groupsRaw.length) throw new Error("config.codingplan.presetGroups 未配置");
  var rowCount = 0;
  var groups = groupsRaw.map(function (g) {
    var rows = buildPresetRows(points, g.modelSlugs);
    rowCount += rows.length;
    return {
      id: g.id || g.title,
      title: g.title || "",
      kind: g.kind === "multi" ? "multi" : "single",
      desc: g.kind === "multi"
        ? "包含：" + g.modelSlugs.map(function (slug) {
            var hit = modelBySlug.get(slug);
            return hit ? hit.name : slug;
          }).join("、")
        : "",
      rows: rows
    };
  });

  var supplementDoc = await realapi.fetchPoints();
  var supplement = supplementDoc ? realapi.buildSupplement(supplementDoc, usdToCnyRate) : null;
  var catalogue = buildCatalogue(plans, platforms, models, usdToCnyRate, supplement);

  var updateRaw = (config.header && config.header.updateDate) || "";
  var um = String(updateRaw).match(/(\d{4}\.\d{1,2}\.\d{1,2})/);
  var siteUpdated = um ? um[1] : String(updateRaw).slice(0, 40);

  var sources = [{
    id: "codingplan", name: "codingplan.fyi", url: cfg.officialUrl,
    license: "开源数据(MIT,见源站)"
  }];
  if (supplement) {
    sources.push({
      id: "realapi", name: "realapipricing.com",
      url: CONFIG.realapi.homepage, repo: CONFIG.realapi.repoUrl,
      license: CONFIG.realapi.license,
      generatedAt: (supplementDoc && supplementDoc.generatedAt) || ""
    });
  }

  var obj = {
    source: "Coding Plan 对比(codingplan.fyi)" +
      (supplement ? " + 额度补充(realapipricing.com)" : ""),
    url: cfg.plansUrl,
    officialUrl: cfg.officialUrl,
    supplementUrl: CONFIG.realapi.pointsUrl,
    updated: CONFIG.TODAY,
    siteUpdated: siteUpdated,
    refreshedAt: CONFIG.REFRESHED_AT,
    usdToCnyRate: usdToCnyRate,
    stats: Object.assign({ groups: groups.length, rows: rowCount, points: points.length },
      catalogue.stats, {
        rows: rowCount,
        plansRows: catalogue.stats.rows,
        realapi: supplement ? supplement.stats : null
      }),
    presetTitle: "精选模型价格与用量",
    presetDesc: "订阅套餐与按量 API 使用同一口径比较综合单价；用量为参考值，各模型额度不相加。",
    caliberNote: "统一口径：有具体输入、输出、缓存价格的为计算得出，其余按实测数据换算，实测尽量构造 95% 缓存命中率和 0.5% 的输出占比。",
    desc: "套餐比价快照：按用量、缓存占比、品牌、购买地区与使用时段筛选全部在售套餐，对比月费、月可用额度、每亿单价与官方价折扣；另保留精选模型分列对比。",
    cacheRatios: CACHE_RATIOS,
    workload: { cacheHitRate: 0.95, outputRatio: OUT },
    sources: sources,
    groups: groups,
    plans: catalogue.plans
  };
  var header =
    "// 数据源:套餐与月价 codingplan.fyi(开源 MIT);额度补充 realapipricing.com(开源 MIT," +
    CONFIG.realapi.repoUrl + "),更新于 " + CONFIG.TODAY + "\n" +
    "// 来源:" + cfg.plansUrl + "(内嵌 planModels)、config.json、models.json、platforms.json" +
    ";补充:" + CONFIG.realapi.pointsUrl + "\n" +
    "// 字段说明:groups[]=精选模型分组比价行(旧视图);plans[]=全部在售/受限套餐目录\n" +
    "//   (slug/name/platform/status/billing/origin/fee/currency/feeCny/models[]);\n" +
    "//   models[]={m 模型名/t 档位/u ¥每百万token/q 四档月可用额度(百万token)/\n" +
    "//   s 额度来源(c=codingplan,r=realapi)/w 源口径/x 仅单一实测值/d 数据日期};\n" +
    "//   q 顺序 = cacheRatios [0,0.5,0.95,0.99],无法换算的档位为 null。\n" +
    "// 口径:输出固定 0.5%;codingplan 以 95% 月额度按混合价换算,realapi 用 list_blended 反推;\n" +
    "//   美元按 " + usdToCnyRate + " 折算;action 推广链接已丢弃,购买请前往源站。\n";
  writers.writeWindowVar(cfg.outFile, cfg.windowVar, writers.windowVarTemplate(cfg.windowVar, header, obj));
  console.log("[codingplan] ✓ " + groups.length + " 个精选分组 " + rowCount + " 行;全部套餐 " +
    catalogue.stats.plans + " 个 " + catalogue.stats.rows + " 行(realapi 补 " +
    catalogue.stats.rowsFromRealapi + " 行,新增 " + catalogue.stats.addedPlans + " 个套餐;源站更新 " +
    siteUpdated + ",汇率 " + usdToCnyRate + ")");
}

module.exports = { updateCodingplan: updateCodingplan };
