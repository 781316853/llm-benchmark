// vals.ai 榜单页公共解析
// 站点为 Astro 服务端渲染:每页 HTML 的 props 属性里内嵌 devalue 序列化的 benchmarkView,
// 结构为 { metadata, tasks: { overall: { "<vendor>/<slug>": { accuracy, cost_per_test, latency, harness, ... } } } }。
// 本文件只做"HTML -> benchmarkView -> 模型数组"的纯解析,不含任何网络请求与写文件逻辑。
// 已被 programbench(镜像源)与 vals_vcb / vals_codemigration 三个源共用。
"use strict";

// ===== Astro/devalue 序列化标记解码:[0, v] -> v(原值,可嵌套标记);[1, [items]] -> 数组 =====
function deval(v) {
  if (Array.isArray(v) && v.length === 2 && typeof v[0] === "number") {
    const t = v[0], val = v[1];
    if (t === 0) return deval(val);
    if (t === 1) return val.map(deval);
    return val;
  }
  if (v !== null && typeof v === "object") {
    const out = {};
    for (const k in v) out[k] = deval(v[k]);
    return out;
  }
  return v;
}

// 从 vals 页面 HTML 提取首个含 benchmarkView 的 props JSON 并解码;找不到返回 null
function extractBenchmarkView(html) {
  let pos = 0;
  while ((pos = html.indexOf('props="', pos)) >= 0) {
    const start = pos + 7;
    let end = start, depth = 0, inStr = false;
    for (let i = start; i < html.length; i++) {
      const c = html[i];
      if (inStr) { if (c === "\\") { i++; continue; } if (c === '"') inStr = false; continue; }
      if (c === '"') inStr = true;
      else if (c === "{") depth++;
      else if (c === "}") { depth--; if (depth === 0) { end = i + 1; break; } }
    }
    const propsJson = html.slice(start, end)
      .replace(/&quot;/g, '"').replace(/&amp;/g, "&").replace(/&#39;/g, "'");
    if (propsJson.indexOf("benchmarkView") >= 0) {
      try {
        return deval(JSON.parse(propsJson).benchmarkView);
      } catch (e) { return null; }
    }
    pos = end;
  }
  return null;
}

// vals 模型 ID("vendor/slug") -> 可读显示名(下划线转连字符、单词首字母大写;命中前端别名表时仍会回显规范名)
function valsName(id) {
  const slug = String(id || "").split("/").pop();
  return slug.replace(/_/g, "-").split("-").map(function (w) {
    if (!w) return w;
    return /^[0-9]/.test(w) ? w : w.charAt(0).toUpperCase() + w.slice(1);
  }).join(" ");
}

// HTML -> { metadata, models }(models 已剔除缺 accuracy 的条目,未排序)
// latency 单位为秒(cost_per_test 为美元/测试),与页面「Duration」列一致。
function parseBenchmarkView(html) {
  const view = extractBenchmarkView(html);
  if (!view || !view.tasks || !view.tasks.overall) return null;
  const metadata = view.metadata || {};
  const overall = view.tasks.overall;
  const models = Object.keys(overall).map(function (id) {
    const d = overall[id] || {};
    return {
      id: id,
      model: valsName(id),
      accuracy: d.accuracy != null ? Math.round(Number(d.accuracy) * 100) / 100 : null,
      costPerTest: d.cost_per_test != null ? Number(d.cost_per_test) : null,
      latencyS: d.latency != null ? Number(d.latency) : null,
      harness: d.harness || null,
      avgInputTokens: d.avg_input_tokens != null ? Number(d.avg_input_tokens) : null,
      avgOutputTokens: d.avg_output_tokens != null ? Number(d.avg_output_tokens) : null
    };
  }).filter(function (m) { return m.accuracy != null; });
  return { metadata: metadata, models: models };
}

module.exports = {
  deval: deval,
  extractBenchmarkView: extractBenchmarkView,
  valsName: valsName,
  parseBenchmarkView: parseBenchmarkView
};