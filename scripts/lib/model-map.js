// 模型名归一化与 canonical 解析(抓取端端口)
// 移植自 js/data.js 的 norm / normLight / cleanDisplay / canon 逻辑,读取 data/models.js 别名表。
// 用途:让抓取端的标准化结果可按 canonical 聚合,供交叉验证引擎使用。
"use strict";
const fs = require("fs");
const path = require("path");
const CONFIG = require("./config");

// ===== 字符串归一(与 js/data.js 保持一致,确保前后端匹配口径一致) =====
// 连续非字母数字 -> 单个 "-",再去首尾;保留数字分组避免 5.6 与 56 混淆。
function norm(s) {
  return String(s || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
// 剥离括号注解:括号内容为日期/构建号(如 0731、2025-08-07)时保留,其余括号注解
// (max)/(high)/(with fallback) 等剥离;且 preview 是真实变体名
// (如 "DeepSeek V4 Flash preview")不再剥离。(与 js/data.js 的 stripParen 一致)
function stripParen(s) {
  return String(s || "").replace(/\(([^)]*)\)/g, function (m, inner) {
    return /^[\d\s\-/.年月日]+$/.test(inner.trim()) ? m : "";
  });
}
// 剥离"结尾"的 effort 标记(high/max/xhigh/thinking 等),且要求前方有分隔符。
// ⚠ 不可改回全局子串替换:早期实现用 /(high|max|medium|xhigh|low|think)/gi 无锚点全局替换,
// 会把 "Qwen3.8-Max-0902" 里属于模型名的 Max、以及品牌名 "MiniMax-M3" 的 Max 一并吃掉
// (minimax-m3 -> mini-m3),并把 "kimi-k2.5-thinking" 削成 "kimi-k2-5-ing"、
// "minimax-m3-thinking" 削成 "mini-m3-ing"、"Claude Opus 4.5 Thinking" 削成 "...-4-5-ing",
// 导致同一模型被拆成两条、源间归并与交叉验证全部失效。前端 js/data.js 早已按尾部剥离实现,
// 此处对齐。(与 js/data.js 的 stripTailEffort 一致)
function stripTailEffort(s) {
  return String(s || "").replace(/[\s\-_/.]+(?:xhigh|high|max|medium|low|thinking|think)\s*$/i, "");
}
// 剥离 effort 后缀后再归一(兜底匹配,用于别名命中后的宽松匹配)
function normLight(s) {
  return norm(stripTailEffort(stripParen(s)));
}
// 匹配候选键(与 js/data.js 的 keyCandidates 一致):同一原始名的多种写法策略取并集,
// 任一命中别名索引即视为同一模型。
// 依次为:原样归一 / 去括号+去尾部 effort / 仅去括号 / 去括号后再去尾部 effort
function keyCandidates(raw) {
  var base = stripParen(raw);
  return [norm(raw), normLight(raw), norm(base), norm(stripTailEffort(base))];
}

// 沙箱读取 data/models.js 的 window.MODEL_MAP(迁移自 loadJsGlobal 思路)
// ⚠ 缺表/解析失败/表为空一律抛错,不做「返回空别名表」的静默兜底:
// 空别名表下 canon() 会让**每一个**模型都退化成 vendor=「其他」的自动建档条目,
// 交叉验证与源间归并随即在幽灵条目上互相比对,而管线不报任何错。
function loadModelMap() {
  const p = path.join(CONFIG.DATA_DIR, "models.js");
  if (!fs.existsSync(p)) {
    throw new Error("[model-map] 找不到别名表 " + p +
      "(CONFIG.DATA_DIR 是否错位?根目录应由 scripts/lib/config.js 位置推导,不随启动目录变化)");
  }
  const txt = fs.readFileSync(p, "utf8");
  const sandbox = { window: {} };
  try {
    new Function("window", txt)(sandbox.window);
  } catch (e) {
    throw new Error("[model-map] 解析 " + p + " 失败:" + e.message);
  }
  const map = sandbox.window.MODEL_MAP;
  if (!map || !Array.isArray(map.canonical) || !map.canonical.length) {
    throw new Error("[model-map] " + p + " 未导出非空的 window.MODEL_MAP.canonical");
  }
  return map;
}

var MODEL_MAP = loadModelMap();

// 别名索引:归一键 -> canonical 对象(与 js/data.js 构建方式一致)
var aliasIndex = {};
(MODEL_MAP.canonical || []).forEach(function (c) {
  (c.aliases || []).forEach(function (a) { aliasIndex[norm(a)] = c; });
  aliasIndex[norm(c.id)] = c;
  aliasIndex[normLight(c.id)] = c;
});

// 未登记模型自动归并缓存:归一键 -> canonical 对象
// 建档/命中同时使用 norm 精确键与 normLight 宽松键,使 "claude-opus-5" 与
// "Claude Opus 5 (max)" 这类 effort 注解写法自动归并为同一模型(与 js/data.js 一致)。
var autoIndex = {};

// 未登记模型的显示名清洗:去括号注解 (max)/(high)/(with fallback) 等(日期/构建号如 (0731) 保留)、去 vibe 降级标记 [新]、压缩空白
function cleanDisplay(raw) {
  return String(raw || "")
    .replace(/\(([^)]*)\)/g, function (m, inner) {
      return /^[\d\s\-/.年月日]+$/.test(inner.trim()) ? m : "";
    })
    .replace(/\[新\]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

// 根据原始模型名解析 canonical;未命中别名索引则按归一键自动归并
function canon(raw) {
  var cs = keyCandidates(raw), i, c;
  // 别名索引:逐个候选键探测(与 js/data.js 一致,前端探 4 个键)
  for (i = 0; i < cs.length; i++) { c = cs[i] && aliasIndex[cs[i]]; if (c) return c; }
  // 自动匹配:逐个候选键查已建档的未登记模型
  for (i = 0; i < cs.length; i++) { c = cs[i] && autoIndex[cs[i]]; if (c) return c; }
  // 首次出现:清洗后的原始名作为显示名,全候选键建档供后续任意写法命中
  var fb = {
    id: cleanDisplay(raw),
    vendor: "其他",
    color: MODEL_MAP.vendorDefaultColor || "#8A8F98"
  };
  cs.forEach(function (k) { if (k) autoIndex[k] = fb; });
  return fb;
}

module.exports = {
  norm: norm,
  normLight: normLight,
  stripParen: stripParen,
  stripTailEffort: stripTailEffort,
  keyCandidates: keyCandidates,
  cleanDisplay: cleanDisplay,
  canon: canon,
  // 重新加载(测试或 models.js 变更后调用)
  reload: function () {
    MODEL_MAP = loadModelMap();
    aliasIndex = {};
    (MODEL_MAP.canonical || []).forEach(function (c) {
      (c.aliases || []).forEach(function (a) { aliasIndex[norm(a)] = c; });
      aliasIndex[norm(c.id)] = c;
      aliasIndex[normLight(c.id)] = c;
    });
    autoIndex = {};
  },
  MODEL_MAP: function () { return MODEL_MAP; }
};
