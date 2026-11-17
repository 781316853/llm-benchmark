// ModelDial 订阅额度(modeldial.com/subscriptions,view=catalog)
// 站点的套餐数据服务端渲染在 Next.js 页面里,没有独立 JSON 接口:
//   1) 抓订阅页 HTML,取出本次构建引用的 /_next/static/chunks/*.js;
//   2) 找到同时含 monthly_api_equivalent_usd 与 x-subscription 的 chunk;
//   3) chunk 内有两个数据块:
//      a. o.exports=JSON.parse('[...]'):首批厂商套餐×模型记录(含周/月/五小时额度、
//         API 等值、实测/估算口径与来源),当前展示 7 个平台(OpenAI/Claude/Grok/GLM/Kimi/MiMo/MiniMax);
//      b. 一段自包含的 JS 数组(第三方订阅平台:Cursor/Copilot/Factory/Devin/Kiro/Antigravity/
//         WorkBuddy/百炼/火山/OpenCode/Command Code/Cline/OpenDesign/Ollama),含各档月/周额度。
//   只取「当前、非归档、非 historical」记录;月额度统一换算为百万 Token,单值放在 95% 档。
// 输出:data/modeldial-subs.js(window.MODELDIAL_SUBS)。抓取失败由 fetch_all 兜底保留旧文件。
// 注意:订阅额度数据没有随雷达数据一起声明 CC BY;页面公开可抓,输出仅保留事实数据并在站内标注来源。
"use strict";
const vm = require("vm");
const CONFIG = require("./config");
const transport = require("./transport");
const writers = require("./writers");

const CACHE_RATIOS = [0, 0.5, 0.95, 0.99];
const MONTHLY_FACTOR_WEEK = 52 / 12;
// 订阅页默认展示的首批厂商平台;Google 由第三方 Antigravity 覆盖,Step/Tencent/Alibaba 不入目录。
const FIRST_PARTY_GROUPS = ["OpenAI", "Claude", "Grok", "GLM", "Kimi", "MiMo", "MiniMax"];
// 首批记录里的模型名常省略厂商(K3.1 Pro / Opus 5.5 / Sonnet 5.5),品牌直接取平台归属。
const FIRST_PARTY_BRAND = {
  OpenAI: "ChatGPT", Claude: "Claude", Grok: "Grok", GLM: "智谱 GLM",
  Kimi: "Kimi", MiMo: "小米 MiMo", MiniMax: "MiniMax"
};
// 第三方目录里 Claude Code 与首批 Claude 套餐重复,跳过。
const SKIP_PLATFORM_IDS = { "claude-code": true };
// ModelDial 套餐 → codingplan 已有套餐 slug:页面把 ModelDial 额度并入这些套餐,
// 不再单独展示。只映射名称/平台/月价能确认同款的档位;月价差异大或无对应平台的留空,
// 由前端作为新套餐追加(如百炼 Token Plan Pro ¥499、小米 MiMo 国际版、Kiro/WorkBuddy 等)。
const PLAN_ALIASES = {
  "md-openai-plus": "codex-plus",
  "md-openai-pro-100": "codex-pro5",
  "md-openai-pro-200": "codex-pro20",
  "md-openai-pro-500": "codex-pro500",
  "md-claude-pro-oct-2026": "claude-pro",
  "md-claude-max-5x-oct-2026": "claude-max5",
  "md-claude-max-20x-oct-2026": "claude-max20",
  "md-grok-supergrok": "ra-xai-grok-supergrok",
  "md-grok-supergrok-plus": "ra-xai-grok-supergrok-plus",
  "md-grok-supergrok-heavy": "ra-xai-grok-supergrok-heavy",
  "md-glm-lite-china": "zhipu-token-lite",
  "md-glm-pro-china": "zhipu-token-pro",
  "md-glm-max-china": "zhipu-token-max",
  "md-glm-lite-international": "zai-new-lite",
  "md-glm-pro-international": "zai-new-pro",
  "md-glm-max-international": "zai-new-max",
  "md-kimi-plus": "kimi-plus-2026",
  "md-kimi-pro": "kimi-pro-2026",
  "md-kimi-max": "kimi-max-2026",
  "md-kimi-ultra": "kimi-ultra-2026",
  "md-mimo-cn-lite": "mimo-lite",
  "md-mimo-cn-standard": "mimo-standard",
  "md-mimo-cn-pro": "mimo-pro",
  "md-mimo-cn-max": "mimo-max",
  "md-minimax-cn-go": "minimax-mplan-go",
  "md-minimax-cn-explore": "minimax-mplan-explore",
  "md-minimax-cn-build": "minimax-mplan-build",
  "md-minimax-go": "ra-minimax-minimax-token-plan-plus-global",
  "md-minimax-explore": "ra-minimax-minimax-token-plan-max-global",
  "md-minimax-build": "ra-minimax-minimax-token-plan-ultra-global",
  "md-bailian-token-plan-lite": "aliyun-token-personal-lite",
  "md-bailian-token-plan-essential": "aliyun-token-personal-essential",
  "md-bailian-token-plan-standard": "aliyun-token-personal-standard",
  "md-ark-coding-plan-lite": "volcengine-coding-lite",
  "md-ark-coding-plan-pro": "volcengine-coding-pro",
  "md-command-code-goat": "commandcode-goat",
  "md-devin-pro": "ra-devin-devin-pro",
  "md-devin-max": "ra-devin-devin-max",
  "md-factory-pro": "ra-factory-droid-droid-pro",
  "md-factory-max": "ra-factory-droid-droid-max",
  "md-copilot-pro": "github-token-plan-pro",
  "md-copilot-pro-2": "github-token-plan-pro-2",
  "md-copilot-max": "github-token-plan-max",
  "md-antigravity-ai-pro": "ra-google-google-ai-pro",
  "md-antigravity-ai-ultra-5": "ra-google-google-ai-ultra-5x",
  "md-antigravity-ai-ultra-20": "ra-google-google-ai-ultra-20x",
  "md-ollama-pro": "ollama-coding-plan-pro",
  "md-ollama-max": "ollama-coding-plan-max",
  "md-opencode-go": "opencode-go"
};
const MODEL_NAMES = {
  "grok-4.7": ["Grok 4.7", "Grok 4.7"],
  "composer-2.5": ["Composer 2.5", "Composer 2.5"],
  "opus-5.5": ["Claude Opus 5.5", "Claude Opus 5.5"],
  "sonnet-5.5": ["Claude Sonnet 5.5", "Claude Sonnet 5.5"],
  "gemini-4-argon": ["Gemini 4 Argon", "Gemini 4 Argon"],
  "gemini-4-carbon": ["Gemini 4 Carbon", "Gemini 4 Carbon"],
  "gemini-4-hydrogen": ["Gemini 4 Hydrogen", "Gemini 4 Hydrogen"],
  "gemini-3.8-flash": ["Gemini 3.8 Flash", "Gemini 3.8 Flash"],
  "deepseek-1017": ["DeepSeek V4.1 Flash 1017", "DeepSeek V4.1 Flash 1017"]
};

function pos(v) {
  return typeof v === "number" && Number.isFinite(v) && v > 0 ? v : null;
}
function r1(n) { return Math.round(n * 10) / 10; }
function r2(n) { return Math.round(n * 100) / 100; }
function slugify(s) {
  return String(s || "").toLowerCase().replace(/[^a-z0-9\u4e00-\u9fff]+/g, "-")
    .replace(/^-+|-+$/g, "").slice(0, 70);
}
function brandOf(name) {
  var n = String(name || "").toLowerCase();
  var rules = (CONFIG.codingplan && CONFIG.codingplan.brandRules) || [];
  for (var i = 0; i < rules.length; i++) {
    if (n.indexOf(rules[i][0]) === 0) return rules[i][1];
  }
  return String(name || "").split(/[\s\-]/)[0] || "其他";
}
function zhLabel(v) {
  if (v == null) return "";
  if (typeof v === "string") return v;
  return String(v.zh || v.en || v.name || "");
}
function enLabel(v) {
  if (v == null) return "";
  if (typeof v === "string") return v;
  return String(v.en || v.zh || v.name || "");
}
// 计划名里「 · 旧订阅 / · Legacy」是状态标记,单独落到 legacy,名称保留主体。
function splitLegacy(zh, en) {
  var re = /(?: · (?:旧订阅|Legacy))$/;
  var legacy = re.test(zh) || re.test(en);
  return {
    name: zh.replace(re, "").trim(),
    nameEn: en.replace(re, "").trim(),
    legacy: legacy
  };
}
// 额度口径跟随 token_basis(额度本身的来源),不能用 dollar_basis:
// 例如 OpenAI Plus 的美元值来自用户样本,但 Token 额度是 scenario 估算。
// 含 projection/scenario/derived/estimate 的按估算;sample/community/observed 按实测。
function quotaBasis(r) {
  var basis = String(r.token_basis || r.dollar_basis || "");
  if (/projection|scenario|estimate|derived|lower|bound|adjust/i.test(basis)) return "estimate";
  if (/sample|observed|community|meter|measured/i.test(basis)) return "measured";
  return r.kind && r.kind !== "estimate" ? "measured" : "estimate";
}

// ===== 页面与 chunk 定位 =====
function chunkUrls(html) {
  var re = /<script[^>]+src="([^"]+\.js[^"]*)"/g, m, out = [], seen = {};
  while ((m = re.exec(html))) {
    var src = m[1];
    if (src.indexOf("/_next/static/chunks/") < 0) continue;
    var url = src.charAt(0) === "/" ? "https://modeldial.com" + src : src;
    if (!seen[url]) { seen[url] = 1; out.push(url); }
  }
  return out;
}
// 从 chunk 里找 o.exports=JSON.parse('[...]') 记录数组
function extractRecords(js) {
  var best = null, idx = 0, needle = "JSON.parse(";
  while ((idx = js.indexOf(needle, idx)) >= 0) {
    var p = idx + needle.length;
    var quote = js.charAt(p);
    if (quote !== "'" && quote !== '"') { idx = p; continue; }
    var i = p + 1, esc = false;
    while (i < js.length) {
      var ch = js.charAt(i);
      if (esc) esc = false;
      else if (ch === "\\") esc = true;
      else if (ch === quote) break;
      i++;
    }
    var literal = js.slice(p, i + 1);
    try {
      var text = Function("return " + literal)();
      var val = JSON.parse(text);
      if (Array.isArray(val) && val.length && val.some(function (r) {
        return r && r.monthly_api_equivalent_usd != null && r.group && r.plan;
      })) {
        if (!best || val.length > best.length) best = val;
      }
    } catch (e) { /* 其他 JSON.parse 块与本源无关 */ }
    idx = i + 1;
  }
  return best;
}
// 第三方平台数组引用了一组同文件内的常量(WorkBuddy/百炼等的估算值),
// 因此从数组所在的声明链起点整体求值;在 vm 里限时执行,校验返回结构。
function extractEmbeddedArray(js, marker, validate) {
  var mi = js.indexOf(marker);
  if (mi < 0) return null;
  var arrStart = js.lastIndexOf("[", mi);
  if (arrStart < 0) return null;
  var depth = 0, end = -1, inStr = null, esc = false;
  for (var i = arrStart; i < js.length; i++) {
    var ch = js.charAt(i);
    if (inStr) {
      if (esc) esc = false;
      else if (ch === "\\") esc = true;
      else if (ch === inStr) inStr = null;
      continue;
    }
    if (ch === '"' || ch === "'" || ch === "`") { inStr = ch; continue; }
    if (ch === "[") depth++;
    else if (ch === "]") {
      depth--;
      if (depth === 0) { end = i; break; }
    }
  }
  if (end < 0) return null;
  var before = js.slice(Math.max(0, arrStart - 160), arrStart);
  var am = /([A-Za-z_$][\w$]*)\s*=\s*$/.exec(before);
  if (!am) return null;
  var varName = am[1];
  var regionStart = Math.max(0, arrStart - 120000);
  var re = /\b(?:let|var|const)\s+/g, cands = [], mm;
  var region = js.slice(regionStart, arrStart);
  while ((mm = re.exec(region))) cands.push(regionStart + mm.index);
  for (var k = cands.length - 1, tried = 0; k >= 0 && tried < 500; k--, tried++) {
    var snippet = js.slice(cands[k], end + 1) + ";" + varName;
    try {
      // 每次用全新上下文:失败尝试留下的 let 词法绑定会污染复用上下文。
      // 不注入任何宿主函数(console 等),并关闭 eval/Function 代码生成,
      // 避免远端 chunk 通过宿主函数构造函数逃逸到刷新进程。
      var context = vm.createContext({}, { codeGeneration: { strings: false, wasm: false } });
      var val = vm.runInContext('"use strict";' + snippet, context, { timeout: 2000 });
      if (validate(val)) return val;
    } catch (e) { /* 试更早的声明起点 */ }
  }
  return null;
}
function extractPlatformCatalog(js) {
  return extractEmbeddedArray(js, 'id:"x-subscription"', function (val) {
    return Array.isArray(val) && val.length >= 10 && val.every(function (p) {
      return p && Array.isArray(p.plans) && p.plans.length;
    });
  });
}
// 第三方平台的测量说明(日期/来源),用于行内数据日期。
function extractPlatformMeta(js) {
  return extractEmbeddedArray(js, 'id:"workbuddy"', function (val) {
    return Array.isArray(val) && val.length >= 5 && val.every(function (p) {
      return p && p.id && p.name && p.dates;
    });
  });
}

// ===== 首批厂商套餐 =====
function buildFirstParty(records, rate) {
  var groups = new Map();
  var skipped = { archived: 0, historical: 0, missingPrice: 0, otherGroup: 0, noQuota: 0, mixed: 0 };
  records.forEach(function (r) {
    if (!r || !r.group || !r.plan) return;
    if (r.archive) { skipped.archived++; return; }
    if (r.record_status === "historical") { skipped.historical++; return; }
    if (FIRST_PARTY_GROUPS.indexOf(r.group) < 0) { skipped.otherGroup++; return; }
    if (r.monthly_price == null || (r.currency !== "USD" && r.currency !== "CNY")) { skipped.missingPrice++; return; }
    var tokens = pos(r.tokens);
    if (tokens == null) { skipped.noQuota++; return; }
    var key = r.group + ":" + r.plan;
    var entry = groups.get(key);
    if (!entry) {
      entry = {
        group: r.group, plan: r.plan,
        labelZh: r.plan_label_zh || r.plan, labelEn: r.plan_label_en || r.plan,
        fee: r.monthly_price, currency: r.currency,
        rows: []
      };
      groups.set(key, entry);
    }
    var modelZh = String(r.model_zh || r.model_en || "").trim();
    if (!modelZh || /混合模型|mixed models/i.test(modelZh)) { skipped.mixed++; return; }
    if (entry.rows.some(function (x) { return x.m === modelZh; })) return;
    entry.rows.push({
      m: modelZh,
      mEn: String(r.model_en || modelZh),
      q: [null, null, r1(tokens / 1e6), null],
      a: r.monthly_api_equivalent_usd != null && isFinite(r.monthly_api_equivalent_usd)
        ? r2(r.monthly_api_equivalent_usd) : null,
      w: quotaBasis(r),
      d: String(r.source_date || r.checked_on || "").slice(0, 10)
    });
  });

  var plans = [];
  groups.forEach(function (g) {
    if (!g.rows.length) return;
    var feeCny = r2(g.fee * (g.currency === "USD" ? rate : 1));
    var names = splitLegacy(g.labelZh, g.labelEn);
    var slug = "md-" + slugify(g.group + "-" + g.plan);
    plans.push({
      slug: slug,
      alias: PLAN_ALIASES[slug] || null,
      name: names.name,
      nameEn: names.nameEn,
      platform: g.group,
      platformEn: g.group,
      status: "open",
      billing: "subscription",
      origin: "modeldial",
      legacy: names.legacy ? 1 : 0,
      fee: g.fee,
      currency: g.currency,
      feeCny: feeCny,
      dm: g.currency === "CNY" ? 1 : 0,
      models: g.rows.map(function (row) {
        return {
          m: row.m, mEn: row.mEn, t: "", s: "m", w: row.w, d: row.d, a: row.a,
          q: row.q,
          u: row.q[2] > 0 ? r2(feeCny * 100 / row.q[2]) : null,
          b: FIRST_PARTY_BRAND[g.group] || brandOf(row.m)
        };
      })
    });
  });
  plans.sort(function (a, b) {
    var ai = FIRST_PARTY_GROUPS.indexOf(a.platform);
    var bi = FIRST_PARTY_GROUPS.indexOf(b.platform);
    return ai - bi || a.feeCny - b.feeCny || a.name.localeCompare(b.name, "zh-CN");
  });
  return { plans: plans, skipped: skipped };
}

// ===== 第三方订阅平台 =====
function buildThirdParty(platforms, metaList, rate) {
  var metaById = {};
  (metaList || []).forEach(function (m) { if (m && m.id) metaById[m.id] = m; });
  var plans = [], skipped = 0;
  platforms.forEach(function (p) {
    if (!p || SKIP_PLATFORM_IDS[p.id]) return;
    var platformZh = zhLabel(p.name), platformEn = enLabel(p.name);
    var meta = metaById[p.id];
    (p.plans || []).forEach(function (pl) {
      var included = Array.isArray(pl.included) ? pl.included : [];
      if (!included.length) { skipped++; return; }
      var fee = pos(pl.price);
      if (fee == null) { skipped++; return; }
      var currency = pl.currency || "USD";
      if (currency !== "USD" && currency !== "CNY") { skipped++; return; }
      if (pl.period && ["week", "month", "30-days"].indexOf(pl.period) < 0) { skipped++; return; }
      var factor = pl.period === "week" ? MONTHLY_FACTOR_WEEK : 1;
      var feeCny = r2(fee * (currency === "USD" ? rate : 1));
      var nameZh = zhLabel(pl.name), nameEn = enLabel(pl.name);
      // WorkBuddy/百炼/火山等平台在源站附了作者、日期与来源,属于社区实测/换算;
      // 其余第三方平台没有逐条测量说明,按估算标注。
      var measured = !!(meta && (meta.authors > 0 || (meta.sources && meta.sources.length)));
      var rows = included.map(function (inc) {
        var tokens = pos(inc.tokens);
        if (tokens == null) return null;
        var monthly = tokens * factor;
        var q = r1(monthly / 1e6);
        var names = MODEL_NAMES[inc.model] || [inc.model, inc.model];
        var tier = [inc.effort, inc.pool ? "共享池" : ""].filter(Boolean).join(" · ");
        return {
          m: names[0], mEn: names[1], t: tier || "", s: "m", w: measured ? "measured" : "estimate",
          d: meta && meta.dates ? String(meta.dates) : "",
          a: null, q: [null, null, q, null],
          u: q > 0 ? r2(feeCny * 100 / q) : null,
          b: brandOf(names[0])
        };
      }).filter(Boolean);
      if (!rows.length) { skipped++; return; }
      var slug = "md-" + slugify(p.id + "-" + nameZh);
      var n = 2, base = slug;
      while (plans.some(function (x) { return x.slug === slug; })) slug = base + "-" + n++;
      plans.push({
        slug: slug,
        alias: PLAN_ALIASES[slug] || null,
        name: nameZh,
        nameEn: nameEn,
        platform: platformZh,
        platformEn: platformEn,
        status: "open",
        billing: "subscription",
        origin: "modeldial",
        legacy: 0,
        fee: fee,
        currency: currency,
        feeCny: feeCny,
        dm: currency === "CNY" ? 1 : 0,
        models: rows
      });
    });
  });
  plans.sort(function (a, b) {
    return a.platform.localeCompare(b.platform, "zh-CN") || a.feeCny - b.feeCny ||
      a.name.localeCompare(b.name, "zh-CN");
  });
  return { plans: plans, skipped: skipped };
}

function maxSourceDate(records) {
  var max = "";
  records.forEach(function (r) {
    [r && r.source_date, r && r.checked_on].forEach(function (v) {
      var s = String(v || "").slice(0, 10);
      if (/^\d{4}-\d{2}-\d{2}$/.test(s) && s > max) max = s;
    });
  });
  return max;
}
function platformSummary(plans) {
  var map = {};
  plans.forEach(function (p) {
    var e = map[p.platform] || (map[p.platform] = {
      name: p.platform, nameEn: p.platformEn || p.platform, plans: 0,
      firstParty: p.origin === "modeldial" && FIRST_PARTY_GROUPS.indexOf(p.platform) >= 0
    });
    e.plans++;
  });
  return Object.keys(map).map(function (k) { return map[k]; })
    .sort(function (a, b) { return b.plans - a.plans || a.name.localeCompare(b.name, "zh-CN"); });
}

async function fetchSource() {
  var cfg = CONFIG.modeldialSubs;
  var html = await transport.fetchWithRetry(cfg.pageUrl);
  var urls = chunkUrls(html);
  if (!urls.length) throw new Error("订阅页未找到 Next.js chunk");
  var records = null, platforms = null, meta = null, foundUrl = "";
  for (var i = 0; i < urls.length; i++) {
    var js = await transport.fetchWithRetry(urls[i]);
    if (js.indexOf("monthly_api_equivalent_usd") < 0 && js.indexOf('id:"x-subscription"') < 0) continue;
    records = records || extractRecords(js);
    platforms = platforms || extractPlatformCatalog(js);
    meta = meta || extractPlatformMeta(js);
    if (records && platforms) { foundUrl = urls[i]; break; }
  }
  if (!records) throw new Error("未找到订阅记录数组(页面 chunk 结构可能已变更)");
  if (!platforms) throw new Error("未找到第三方平台目录(页面 chunk 结构可能已变更)");
  return { records: records, platforms: platforms, meta: meta || [], chunkUrl: foundUrl, pageUrl: cfg.pageUrl };
}

async function updateModeldialSubs() {
  var cfg = CONFIG.modeldialSubs;
  var raw = await fetchSource();
  var rate = pos(cfg.usdToCnyRate) || 6.8;
  var first = buildFirstParty(raw.records, rate);
  var third = buildThirdParty(raw.platforms, raw.meta, rate);
  if (!first.plans.length) throw new Error("首批厂商套餐为空(记录字段可能已变更)");
  if (!third.plans.length) throw new Error("第三方平台目录为空(平台结构可能已变更)");
  var all = first.plans.concat(third.plans);
  var rows = 0, measured = 0;
  all.forEach(function (p) {
    p.models.forEach(function (r) {
      rows++;
      if (r.w === "measured") measured++;
    });
  });
  var sourceUpdated = maxSourceDate(raw.records);
  var obj = {
    source: "ModelDial 订阅额度",
    pageUrl: cfg.pageUrl,
    url: cfg.pageUrl,
    host: cfg.host,
    license: "见源站;引用请标注 ModelDial",
    updated: CONFIG.TODAY,
    sourceUpdated: sourceUpdated,
    refreshedAt: CONFIG.REFRESHED_AT,
    usdToCnyRate: rate,
    monthlyFactorWeek: r1(MONTHLY_FACTOR_WEEK * 100) / 100,
    cacheRatios: CACHE_RATIOS,
    stats: {
      platforms: platformSummary(all).length,
      plans: all.length,
      rows: rows,
      measuredRows: measured,
      estimatedRows: rows - measured,
      firstPartyPlans: first.plans.length,
      thirdPartyPlans: third.plans.length,
      aliasedPlans: all.filter(function (p) { return !!p.alias; }).length,
      appendedPlans: all.filter(function (p) { return !p.alias; }).length,
      skippedRecords: first.skipped,
      skippedThirdPartyPlans: third.skipped
    },
    platforms: platformSummary(all),
    plans: all,
    notes: {
      quota: "月额度为源站月均口径;周额度按 52/12 折算为月,五小时额度不直接参与月度排名。",
      basis: "ModelDial 记录含实测、样本外推与估算口径,行内「实测/估算」沿用源站字段;API 等值为源站按模型官方价折算。",
      scope: "首批厂商套餐 + 第三方订阅平台目录;首批目录与 ModelDial 订阅页一致,第三方平台含共享额度池,模型额度不一定可相加。"
    },
    sourceNote: "数据来自 ModelDial 订阅额度公开页面,仅保留事实数据并在行内标注口径;订阅额度数据未随雷达数据声明 CC BY,许可见源站。"
  };
  var header =
    "// 数据源:ModelDial 订阅额度(源站 " + (sourceUpdated || CONFIG.TODAY) + ";" + cfg.pageUrl + ")\n" +
    "// 抓取方式:订阅页 HTML → Next.js chunk 内嵌数据(套餐记录 + 第三方平台目录);页面结构变更会 fail-soft 保留旧文件。\n" +
    "// 字段:plans[]={slug/alias 可合并到的 codingplan slug/name/nameEn/platform/platformEn/fee/currency/feeCny/dm/legacy/models[]};\n" +
    "//   models[]={m 模型名/mEn 英文名/t 档位/u ¥每亿/q 四档月额度(仅 95% 单值)/s=m/w 实测|estimate/d 数据日期/a API 等值(USD/月)}。\n" +
    "// 口径:月额度 = 源站月均可用 Token;周额度 × 52/12;美元按 " + rate + " 折算;不参与缓存档位换算。\n" +
    "// 授权:公开页面事实数据,引用请标注 ModelDial;" + cfg.pageUrl + "\n";
  writers.writeWindowVar(cfg.outFile, cfg.windowVar, writers.windowVarTemplate(cfg.windowVar, header, obj));
  console.log("[modeldial-subs] ✓ " + obj.stats.platforms + " 个平台 / " + obj.stats.plans +
    " 个套餐 / " + rows + " 行(" + measured + " 行实测,源站日期 " + (sourceUpdated || "—") +
    ",汇率 " + rate + ")");
  return obj;
}

module.exports = {
  updateModeldialSubs: updateModeldialSubs,
  extractRecords: extractRecords,
  extractPlatformCatalog: extractPlatformCatalog,
  extractPlatformMeta: extractPlatformMeta
};
