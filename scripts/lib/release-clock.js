// 厂商新模型发布时钟:汇总各数据源中的模型发布日期,按厂商取最近一次发布。
// 数据源:ModelDial models[].releaseDate / Terminal-Bench(4.0·3.0·2.1) / datalearner /
//         APEX-1 / AutomationBench / Agents' Last Exam / BenchCAD 的 date 字段,
//         以及 official_releases.js(厂商官方发布监听)。
// 口径:同一厂商取所有已收录条目中最晚的发布日期;日期相同时按来源优先级
//       官方发布 > ModelDial > 基准榜单 > 长尾展示榜。仅输出已登记厂商(vendorColors),
//       未登记厂商不参与,避免「其他」类条目污染发布时钟。
// 用途:总览页「厂商新模型发布倒计时」(data/releases.js);天数由前端按本机日期计算。
"use strict";
const CONFIG = require("./config");
const writers = require("./writers");
const modelMap = require("./model-map");

// 来源优先级:数字越大越可信;日期相同时取高优先级条目的模型名作为「上一次发布」
const SOURCES = [
  { file: "official_releases.js", global: "OFFICIAL_RELEASES", label: "Official", prio: 4,
    list: function (d) { return d.models || []; },
    name: function (m) { return m.model; }, date: function (m) { return m.date; },
    org: function (m) { return m.vendor; } },
  { file: "modeldial.js", global: "MODELDIAL", label: "ModelDial", prio: 3,
    list: function (d) { return d.models || []; },
    name: function (m) { return m.displayName || m.model; }, date: function (m) { return m.releaseDate; } },
  { file: "tbench.js", global: "TBENCH", label: "Terminal-Bench", prio: 2,
    list: function (d) { return d.models || []; },
    name: function (m) { return m.model; }, date: function (m) { return m.date; },
    org: function (m) { return m.org; } },
  { file: "tbench_v3.js", global: "TBENCH_V3", label: "Terminal-Bench", prio: 2,
    list: function (d) { return d.models || []; },
    name: function (m) { return m.model; }, date: function (m) { return m.date; },
    org: function (m) { return m.org; } },
  { file: "tbench_v2.js", global: "TBENCH_V21", label: "Terminal-Bench", prio: 2,
    list: function (d) { return d.models || []; },
    name: function (m) { return m.model; }, date: function (m) { return m.date; },
    org: function (m) { return m.org; } },
  { file: "datalearner.js", global: "DATALEARNER", label: "datalearner", prio: 2,
    list: function (d) { return d.models || []; },
    name: function (m) { return m.name; }, date: function (m) { return m.date; } },
  { file: "apex.js", global: "APEX", label: "APEX-1", prio: 2,
    list: function (d) { return d.models || []; },
    name: function (m) { return m.model; }, date: function (m) { return m.date; },
    org: function (m) { return m.org; } },
  { file: "automationbench.js", global: "AUTOMATIONBENCH", label: "AutomationBench", prio: 2,
    list: function (d) { return d.models || []; },
    name: function (m) { return m.model; }, date: function (m) { return m.date; },
    org: function (m) { return m.org; } },
  { file: "lastexam.js", global: "LASTEXAM", label: "Agents' Last Exam", prio: 1,
    list: function (d) { return d.models || []; },
    name: function (m) { return m.model; }, date: function (m) { return m.date; },
    org: function (m) { return m.org; } },
  { file: "benchcad.js", global: "BENCHCAD", label: "BenchCAD", prio: 1,
    list: function (d) { return d.models || []; },
    name: function (m) { return m.model; }, date: function (m) { return m.date; },
    org: function (m) { return m.org; } }
];

// 厂商名归一:canonical 厂商之外,源站偶见中文名或合并写法,统一折回 models.js 的键。
// (反向别名表只覆盖中文别名;微软 / MiniMaxAI 等源站写法单独列出)
const VENDOR_EXTRA = {
  "微软": "Microsoft",
  "MiniMaxAI": "MiniMax",
  "Qoder": "Alibaba",
  "Qwen": "Alibaba",
  "亚马逊": null
};

function normKey(s) {
  return String(s || "").toLowerCase().replace(/[^a-z0-9]+/g, "");
}

function buildVendorResolver() {
  const MM = modelMap.MODEL_MAP();
  const known = MM.vendorColors || {};
  const byNorm = {};
  Object.keys(known).forEach(function (v) { byNorm[normKey(v)] = v; });
  const byAlias = {};
  Object.keys(MM.vendorAliases || {}).forEach(function (canon) {
    (MM.vendorAliases[canon] || []).forEach(function (a) { byAlias[a] = canon; });
  });
  return function resolve(vendor, org) {
    if (vendor && Object.prototype.hasOwnProperty.call(VENDOR_EXTRA, vendor)) return VENDOR_EXTRA[vendor];
    if (vendor && known[vendor]) return vendor;
    if (org && known[org]) return org;
    if (vendor && byAlias[vendor]) return byAlias[vendor];
    if (vendor && byNorm[normKey(vendor)]) return byNorm[normKey(vendor)];
    if (org && byAlias[org]) return byAlias[org];
    if (org && byNorm[normKey(org)]) return byNorm[normKey(org)];
    return null;
  };
}

function isDate(s) {
  return /^\d{4}-\d{2}-\d{2}$/.test(String(s || ""));
}

function collect() {
  const resolveVendor = buildVendorResolver();
  const latest = {};
  const usedSources = {};
  let entries = 0;

  SOURCES.forEach(function (src) {
    const data = writers.loadJsGlobal(src.file, src.global);
    if (!data) return;
    const rows = src.list(data);
    if (!rows.length) return;
    usedSources[src.label] = 1;
    rows.forEach(function (m) {
      const date = src.date(m);
      if (!isDate(date)) return;
      const name = String(src.name(m) || "").trim();
      if (!name) return;
      const vendor = resolveVendor(modelMap.canon(name).vendor, src.org ? src.org(m) : null);
      if (!vendor) return;
      entries++;
      const c = modelMap.canon(name);
      const row = {
        vendor: vendor,
        date: date,
        model: c.id,
        src: src.label,
        prio: src.prio,
        // 日期与来源都相同时,手工登记模型优先于自动建档条目
        manual: c.auto ? 0 : 1
      };
      const cur = latest[vendor];
      if (!cur || row.date > cur.date ||
          (row.date === cur.date && (row.prio > cur.prio ||
            (row.prio === cur.prio && row.manual > cur.manual)))) {
        latest[vendor] = row;
      }
    });
  });

  const vendors = Object.keys(latest).map(function (v) {
    const r = latest[v];
    return { vendor: r.vendor, date: r.date, model: r.model, src: r.src };
  }).sort(function (a, b) {
    return a.date === b.date ? a.vendor.localeCompare(b.vendor) : (a.date < b.date ? 1 : -1);
  });

  if (!vendors.length) throw new Error("[release-clock] 未解析到任何带发布日期的厂商");
  return { vendors: vendors, sources: Object.keys(usedSources), entries: entries };
}

function updateReleases() {
  // 自动建档表在本轮 fetch 中刚被重写;重新加载以覆盖当天新增的模型名
  modelMap.reload();
  const data = collect();
  const latestDate = data.vendors.reduce(function (m, v) { return v.date > m ? v.date : m; }, "");
  const obj = {
    updated: CONFIG.TODAY,
    refreshedAt: CONFIG.REFRESHED_AT,
    sources: data.sources,
    stats: { vendors: data.vendors.length, datedEntries: data.entries, latestDate: latestDate },
    vendors: data.vendors
  };
  const header =
    "// 厂商新模型发布时钟(由 scripts/lib/release-clock.js 生成)\n" +
    "// 汇总各数据源中的模型发布日期(ModelDial releaseDate / Terminal-Bench / datalearner / APEX-1 /\n" +
    "//   AutomationBench / Agents' Last Exam / BenchCAD 的 date 字段,以及厂商官方发布监听),\n" +
    "//   按 canonical 厂商取最近一次发布;同日按来源优先级 官方发布 > ModelDial > 基准榜单 > 长尾展示榜。\n" +
    "// 用途:总览页「厂商新模型发布倒计时」;天数由前端按本机日期计算。\n" +
    "// 字段:vendors[]={vendor=厂商, date=发布日期, model=canonical 模型名, src=数据来源}。\n";
  writers.writeWindowVar("releases.js", "RELEASES", writers.windowVarTemplate("RELEASES", header, obj));
  console.log("  [release-clock] " + data.vendors.length + " 家厂商 / " + data.entries + " 条带日期记录");
  return obj;
}

module.exports = { updateReleases: updateReleases };
