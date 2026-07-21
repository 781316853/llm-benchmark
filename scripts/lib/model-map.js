// 模型名归一化与 canonical 解析(抓取端端口)
// 移植自 js/data.js 的 norm / normLight / canon 逻辑,读取 data/models.js 别名表。
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
// 剥离 effort 后缀(high/max/think/preview 等)后再归一,用于兜底宽松匹配
function normLight(s) {
  return String(s || "")
    .replace(/\([^)]*\)/g, "")
    .replace(/(high|max|medium|xhigh|low|think|preview)/gi, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// 沙箱读取 data/models.js 的 window.MODEL_MAP(迁移自 loadJsGlobal 思路)
function loadModelMap() {
  const p = path.join(CONFIG.DATA_DIR, "models.js");
  if (!fs.existsSync(p)) return { canonical: [], domesticVendors: [], vendorDefaultColor: "#8A8F98" };
  const txt = fs.readFileSync(p, "utf8");
  const sandbox = { window: {} };
  try { new Function("window", txt)(sandbox.window); }
  catch (e) { console.log("  [model-map] 解析 models.js 失败:" + e.message); return { canonical: [], domesticVendors: [], vendorDefaultColor: "#8A8F98" }; }
  return sandbox.window.MODEL_MAP || { canonical: [], domesticVendors: [], vendorDefaultColor: "#8A8F98" };
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
var autoIndex = {};

// 根据原始模型名解析 canonical;未命中别名索引则按归一键自动归并(首次出现的原始名作显示名)
function canon(raw) {
  var c = aliasIndex[norm(raw)] || aliasIndex[normLight(raw)];
  if (c) return c;
  var k = norm(raw);
  if (autoIndex[k]) return autoIndex[k];
  var fb = {
    id: raw,
    vendor: "其他",
    color: MODEL_MAP.vendorDefaultColor || "#8A8F98"
  };
  autoIndex[k] = fb;
  return fb;
}

module.exports = {
  norm: norm,
  normLight: normLight,
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
