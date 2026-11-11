// 套餐额度补充源 realapipricing.com(开源项目,MIT):scripts/lib/codingplan.js 调用
// 数据:"订阅月费 ÷ 用户每月实际可用 token" 的套餐×模型点,含三段标价与实测/官方口径额度。
// 用途:为 codingplan.fyi 已有套餐补充实测额度;并把 codingplan 未收录的套餐(如 ChatGPT /
//   Gemini / Grok / Devin)作为独立条目补进「全部套餐」视图。
// 只采月额度与标价:其榜单分数、综合分、可信度等派生字段一律不读。
// 口径:源站按 standard(缓存 97% / 输入 2.5% / 输出 0.5%)等负载给出 monthly_yi;
//   本模块用其 list_blended_usd_per_mtok 反推"额度预算",再按本站统一的
//   0% / 50% / 95% / 99% 缓存占比换算月可用 Token(单位:百万 Token)。
//   anthropic 档的缓存写价未单列,换算时以 list_price.input 近似(见 CONFIG 注释)。
"use strict";
const CONFIG = require("./config");
const transport = require("./transport");

// 本站统一缓存档位(与 data/codingplan.js 的 cacheRatios 一致)
const CACHE_RATIOS = [0, 0.5, 0.95, 0.99];
const OUTPUT_RATIO = 0.005;

function positiveNumber(value) {
  return typeof value === "number" && Number.isFinite(value) && value > 0 ? value : null;
}
function round1(n) { return Math.round(n * 10) / 10; }
function round2(n) { return Math.round(n * 100) / 100; }

// 源站本地价形如 "¥199";只接受人民币,其余(如 "$20")交给 price_usd × 汇率
function parseCnyLocal(value) {
  if (typeof value === "number" && Number.isFinite(value) && value > 0) return value;
  if (typeof value === "string") {
    var m = value.match(/(?:¥|￥|CNY|RMB)\s*([\d,]+(?:\.\d+)?)/i);
    if (m) {
      var n = Number(m[1].replace(/,/g, ""));
      return Number.isFinite(n) && n > 0 ? n : null;
    }
  }
  if (value && typeof value === "object") {
    var cur = String(value.currency || "").toUpperCase();
    var amt = Number(value.amount != null ? value.amount : value.value);
    if ((cur === "CNY" || cur === "RMB") && Number.isFinite(amt) && amt > 0) return amt;
  }
  return null;
}

function hasListPrice(lp) {
  return !!lp && ["cached", "input", "output"].every(function (k) {
    return typeof lp[k] === "number" && Number.isFinite(lp[k]) && lp[k] >= 0;
  });
}
// 与 codingplan 相同的混合价口径:缓存占比 h,输出固定 0.5%,余量为未缓存输入
function blended(lp, h) {
  return h * lp.cached + (1 - h - OUTPUT_RATIO) * lp.input + OUTPUT_RATIO * lp.output;
}

// monthly_yi(亿) → 四档月可用 Token(百万);无 list_price 时只有 95% 单值
function quotaTiers(monthlyYi, listPrice, listBlended) {
  var yiToM = 100;
  if (hasListPrice(listPrice) && positiveNumber(listBlended)) {
    var q = CACHE_RATIOS.map(function (h) {
      var b = blended(listPrice, h);
      return b > 0 ? round1(monthlyYi * yiToM * listBlended / b) : null;
    });
    return { q: q, fixed: false };
  }
  return { q: [null, null, round1(monthlyYi * yiToM), null], fixed: true };
}

async function fetchPoints() {
  var cfg = CONFIG.realapi;
  try {
    return JSON.parse(await transport.fetchWithRetry(cfg.pointsUrl));
  } catch (e) {
    console.warn("[realapi] 补充源不可用,本次只用 codingplan:" + e.message);
    return null;
  }
}

// 源站三段标价 → 人民币 [输入, 缓存, 输出] ¥/百万 token;币种不识别则 null
function officialCny(listPrice, usdToCnyRate) {
  if (!hasListPrice(listPrice)) return null;
  var cur = String(listPrice.currency || "").toUpperCase();
  var rate = (cur === "CNY" || cur === "RMB" || cur === "¥" || cur === "￥") ? 1
    : (cur === "$" || cur === "USD" || cur === "") ? usdToCnyRate : null;
  if (rate == null) return null;
  return [
    Math.round(listPrice.input * rate * 1e4) / 1e4,
    Math.round(listPrice.cached * rate * 1e4) / 1e4,
    Math.round(listPrice.output * rate * 1e4) / 1e4
  ];
}

// 套餐平台:源站的 vendor 指实际服务模型的厂商,按套餐名前缀归类,未命中用 vendor 兜底
function planPlatform(planName, vendor) {
  var rules = (CONFIG.realapi.planPlatformRules || []);
  for (var i = 0; i < rules.length; i++) {
    if (String(planName).indexOf(rules[i][0]) === 0) return rules[i][1];
  }
  return String(vendor || "其他").trim();
}

// 把 points.json 按套餐聚合成 plans[];失败/无数据返回 null
function buildSupplement(doc, usdToCnyRate) {
  var cfg = CONFIG.realapi;
  var points = doc && Array.isArray(doc.points) ? doc.points : [];
  if (!points.length) return null;

  var groups = {};
  var skipped = 0;
  points.forEach(function (p) {
    if (!p || p.billing !== "subscription") { skipped++; return; }
    if (p.unmetered) { skipped++; return; }
    if (p.promo_until && String(p.promo_until) < CONFIG.TODAY) { skipped++; return; }
    var yi = positiveNumber(p.monthly_yi);
    if (yi == null) { skipped++; return; }
    var feeCny = parseCnyLocal(p.local_price);
    if (feeCny == null) {
      var usd = positiveNumber(p.price_usd);
      feeCny = usd != null ? round2(usd * usdToCnyRate) : null;
    }
    if (feeCny == null) { skipped++; return; }
    var planName = String(p.plan || "").trim();
    var code = String(p.model || "").trim();
    if (!planName || !code) { skipped++; return; }

    var g = groups[planName] || (groups[planName] = {
      plan: planName,
      vendor: String(p.vendor || "其他").trim(),
      platform: planPlatform(planName, p.vendor),
      feeCounts: {},
      models: {}
    });
    g.feeCounts[feeCny] = (g.feeCounts[feeCny] || 0) + 1;
    if (g.models[code]) return; // 同套餐同模型的重复点只留第一条
    var tiers = quotaTiers(yi, p.list_price, p.list_blended_usd_per_mtok);
    g.models[code] = {
      code: code,
      name: String(p.model_display || p.model || code).trim(),
      q: tiers.q,
      x: tiers.fixed ? 1 : 0,
      w: String(p.workload || "measured"),
      d: p.data_date ? String(p.data_date) : "",
      v: String(p.vendor || "").trim(),
      p: officialCny(p.list_price, usdToCnyRate)
    };
  });

  var raw = Object.keys(groups).map(function (k) {
    var g = groups[k];
    // 同一套餐名偶尔出现多个价格(币种/档位差异):取出现最多的价格,并列取较小值
    var fees = Object.keys(g.feeCounts).map(Number).sort(function (a, b) {
      return g.feeCounts[b] - g.feeCounts[a] || a - b;
    });
    return {
      plan: g.plan,
      vendor: g.vendor,
      platform: g.platform,
      feeCny: fees[0],
      models: Object.keys(g.models).map(function (c) { return g.models[c]; })
    };
  }).filter(function (p) { return p.models.length; });

  // 去重:同厂商 + 同月价 + 同模型集合视为同款(如 "Kimi 会员 99" 与 "Kimi Plus 99"),
  // 优先保留命中别名表的组,其次保留可换算四档的行更多的一组。
  var aliases = CONFIG.realapi.planAliases || {};
  var bySig = {};
  raw.forEach(function (p) {
    var sig = p.platform + "|" + p.feeCny + "|" +
      p.models.map(function (m) { return m.code; }).sort().join(",");
    var prev = bySig[sig];
    if (!prev) { bySig[sig] = p; return; }
    var aliased = function (x) { return aliases[x.plan] ? 1 : 0; };
    var score = function (x) { return x.models.filter(function (m) { return !m.x; }).length; };
    if (aliased(p) > aliased(prev) || (aliased(p) === aliased(prev) && score(p) > score(prev))) {
      bySig[sig] = p;
    }
  });
  var plans = Object.keys(bySig).map(function (k) { return bySig[k]; });

  var rows = 0;
  var fixed = 0;
  plans.forEach(function (p) {
    rows += p.models.length;
    p.models.forEach(function (m) { if (m.x) fixed++; });
  });

  return {
    plans: plans,
    stats: {
      points: points.length,
      plans: plans.length,
      rows: rows,
      fixed: fixed,
      duplicates: raw.length - plans.length,
      skipped: skipped
    }
  };
}

module.exports = {
  fetchPoints: fetchPoints,
  buildSupplement: buildSupplement,
  // 供单元排查
  _quotaTiers: quotaTiers,
  CACHE_RATIOS: CACHE_RATIOS
};
