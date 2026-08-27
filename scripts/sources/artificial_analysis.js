// 数据源:Artificial Analysis Intelligence Index(通用智能指数,非编码专项)
// 官方 API 需 Key;免 Key 方案解析官网评测页服务端渲染的数据:
//   1) ld+json Dataset 块 "Artificial Analysis Intelligence Index: Score" -> Top N(label+分数)
//   2) 页面内嵌 RSC payload 的模型对象(slug/name/shortName/creator/intelligenceIndex,含厂商)
// 两路合并按 slug 去重取最高分。仅覆盖页面默认入选图表集(~20-30 个主流模型),
// 全量 ~175 模型为客户端加载不在静态 HTML 中。
// 注:Intelligence Index 为通用智能指数(含知识/推理/数学等),与编码专项基准不同纲,
//     前端独立展示、不计入综合分。
"use strict";
const BaseSource = require("../lib/BaseSource");
const registry = require("../lib/registry");
const transport = require("../lib/transport");
const normalizer = require("../lib/normalizer");
const CONFIG = require("../lib/config");

// 从短名提取基础名:去掉尾部括号变体,如 "Claude Opus 5 (max)" -> "Claude Opus 5"
function baseName(s) {
  return String(s || "").replace(/\s*\([^()]*\)\s*$/, "").trim();
}

// 拼接 RSC chunk(js 字符串参数),返回原始转义文本
function joinRscChunks(html) {
  const re = /self\.__next_f\.push\(\[1,"((?:[^"\\]|\\.)*)"\]\)/g;
  let m, out = "";
  while ((m = re.exec(html)) !== null) out += m[1];
  return out;
}

class ArtificialAnalysisSource extends BaseSource {
  constructor() {
    super({
      id: "artificial_analysis", name: "Artificial Analysis II", type: "html",
      url: CONFIG.sources.artificial_analysis.url, host: CONFIG.sources.artificial_analysis.host,
      outFile: "artificial_analysis.js", windowVar: "ARTIFICIAL_ANALYSIS"
    });
  }
  async fetch() {
    const html = await transport.fetchWithRetry(this.cfg.url);
    // ld+json 内容可能含 HTML 实体(&quot;/&#x27; 等),统一解码;
    // RSC 内的 \" 转义是 JS 字符串数据本身,不受实体解码影响。
    return transport.htmlDecode(html);
  }
  parse(raw) {
    // ---- 路 1:ld+json Dataset 块 ----
    let ldVersion = "";
    const ldRows = [];
    const ldRe = /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g;
    let lm;
    while ((lm = ldRe.exec(raw)) !== null) {
      let d;
      try { d = JSON.parse(lm[1]); } catch (e) { continue; }
      if (!d || d["@type"] !== "Dataset") continue;
      if (/^Artificial Analysis Intelligence Index(: Score)?$/.test(d.name || "") && Array.isArray(d.data)) {
        const vm = String(d.description || "").match(/Intelligence Index (v[\d.]+)/);
        if (vm && !ldVersion) ldVersion = vm[1].replace(/^v/i, "");
        d.data.forEach(function (it) {
          const score = it["Artificial Analysis Intelligence Index"] != null
            ? Number(it["Artificial Analysis Intelligence Index"])
            : (it.intelligenceIndex != null ? Number(it.intelligenceIndex) : null);
          const slug = String(it.detailsUrl || "").replace(/^\/models\//, "").replace(/^\/+|\/+$/g, "");
          if (slug && isFinite(score)) ldRows.push({ slug: slug, label: it.label, score: score });
        });
      }
    }

    // ---- 路 2:RSC 模型对象(含厂商),在原始转义文本上匹配 ----
    const rscText = joinRscChunks(raw);
    const objRe = /\{\\"id\\":\\"[0-9a-f-]+\\",\\"slug\\":\\"([a-z0-9-]+)\\",\\"name\\":\\"((?:[^"\\\\]|\\\\.)*)\\"(?:(?!\\"intelligenceIndex\\")[^{}])*?\\"creator\\":\{[^{}]*?\}(?:(?!\\"intelligenceIndex\\").)*?\\"intelligenceIndex\\":([\d.]+)/g;
    const bySlug = {};
    let om;
    while ((om = objRe.exec(rscText)) !== null) {
      const slug = om[1];
      const fullName = om[2].split("\\u0026").join("&");
      const seg = om[0];
      const cm = seg.match(/\\"creator\\":\{\\"id\\":\\"[^"]*\\",\\"slug\\":\\"[a-z0-9-]*\\",\\"name\\":\\"([^"\\\\]*)\\"/);
      const sm = seg.match(/\\"shortName\\":\\"([^"\\\\]*)\\"/);
      const vendor = cm ? cm[1] : "";
      // 短名优先(如 "Claude Opus 5 (max)"),无短名回退去变体括号的全名
      const display = sm ? sm[1] : baseName(fullName);
      const score = Math.round(parseFloat(om[3]) * 100) / 100;
      if (bySlug[slug] && bySlug[slug].score >= score) continue;
      bySlug[slug] = {
        name: display, full: fullName, vendor: vendor,
        base: baseName(display), score: score
      };
    }
    if (!Object.keys(bySlug).length && !ldRows.length) {
      throw new Error("未解析到任何模型(ld+json 与 RSC 均为空)");
    }

    // ---- 合并:RSC 为主,ld+json 补充缺失的 slug ----
    const rows = Object.keys(bySlug).map(function (k) { return Object.assign({ slug: k }, bySlug[k]); });
    ldRows.forEach(function (r) {
      if (bySlug[r.slug]) {
        // RSC 已有该 slug:以更高者为准(RSC 分数已含)
        if (rows.some(function (x) { return x.slug === r.slug; }) === false) rows.push(r);
        return;
      }
      rows.push({
        slug: r.slug,
        name: r.label || baseName(r.label || r.slug),
        full: "", vendor: "", base: baseName(r.label || r.slug),
        score: Math.round(r.score * 100) / 100
      });
    });
    // 同 slug 去重取最高分
    const best = {};
    rows.forEach(function (r) {
      if (!best[r.slug] || r.score > best[r.slug].score) best[r.slug] = r;
    });
    const models = Object.values(best).sort(function (a, b) { return b.score - a.score; });

    // 版本号:ld 描述 > RSC > 兜底(统一去掉 v 前缀,展示时模板再补)
    let version = ldVersion;
    if (!version) {
      const vm = raw.match(/Intelligence Index (v[\d.]+)/);
      version = vm ? vm[1] : "unknown";
    }
    version = String(version).replace(/^v/i, "");
    return { models: models, version: version };
  }
  toStandard(parsed) {
    var srcId = this.cfg.id;
    return normalizer.fromArray(srcId, parsed.models, function (m, idx) {
      return {
        name: m.name,
        score: m.score,
        rank: idx,
        updated: CONFIG.TODAY,
        metrics: {},
        meta: m.vendor ? { vendor: m.vendor } : {}
      };
    });
  }
  writeContent(parsed) {
    const T = CONFIG.TODAY;
    const body = JSON.stringify(parsed.models, null, 2).replace(/"/g, "'");
    return `// 数据源:Artificial Analysis Intelligence Index 快照(免 Key 网页抓取)
// 来源:${this.cfg.url}  (更新于 ${T})
// 字段说明:name=模型短名;full=官方全名;base=去变体后的基础名;
//          vendor=厂商;score=Intelligence Index(v${parsed.version},越高越好)
// 注:通用智能指数(含知识/推理/数学等评测),非编码专项;覆盖页面默认入选的 ${parsed.models.length} 个主流模型;
//     仅用于独立榜单展示,不计入综合分。
window.ARTIFICIAL_ANALYSIS = {
  source: "Artificial Analysis Intelligence Index",
  url: "${this.cfg.url}",
  updated: "${T}",
  version: "${parsed.version}",
  note: "通用智能指数 · 覆盖 ${parsed.models.length} 个主流模型 · 独立榜单,不计入综合分",
  desc: "Artificial Analysis 独立评测的通用智能指数 v${parsed.version},汇总 GDPval-AA/τ³-Banking/Terminal-Bench/HLE/GPQA Diamond 等多项评测。",
  models: ${body}
};
`;
  }
}

module.exports = registry.register(ArtificialAnalysisSource);
