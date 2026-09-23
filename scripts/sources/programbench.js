// 数据源:ProgramBench(cleanroom 程序重建·编码 Agent)
// 站点:官方 https://programbench.com/(Meta Superintelligence Labs · Stanford · Harvard);
//       补充源 vals.ai 镜像(https://www.vals.ai/benchmarks/programbench,45 模型,
//       Astro 服务端渲染 props 内嵌 Fully Resolved%,Results summary 表含前 5 名 Almost/Raw Pass Rate)。
// 数据形态:官方 HTML 表格(Rank | Model(+effort) | Agent | Resolved% | Almost%);
//          vals 为 props JSON(benchmarkView.tasks.overall.<id>.accuracy)。
// 性质:agent×model 条目(200 个从零重建任务,行为级隐藏测试),主指标 Fully Resolved%(两源统一口径),
//       Almost(≥95% 隐藏测试通过)/Raw Pass Rate(vals 独有)为辅助;双源合并去重取最高,
//       仅展示(不计入综合分与命中数:官方口径 Fully Resolved 整体 0-7 分,区分度极低)。
// 输出:data/programbench.js(window.PROGRAMBENCH)。
"use strict";
const BaseSource = require("../lib/BaseSource");
const registry = require("../lib/registry");
const transport = require("../lib/transport");
const normalizer = require("../lib/normalizer");
const writers = require("../lib/writers");
const CONFIG = require("../lib/config");

function num(v) {
  const n = Number(String(v || "").replace(/[^\d.]/g, ""));
  return isFinite(n) ? n : null;
}

// 模型名归一键(与 js/data.js / model-map.js 同规则)
function normKey(s) {
  return String(s || "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

// vals 模型 ID("vendor/slug") -> 可读显示名(下划线转连字符、单词首字母大写;命中前端 MODEL_MAP 别名时仍会回显规范名)
function valsName(id) {
  const slug = String(id || "").split("/").pop();
  return slug.replace(/_/g, "-").split("-").map(function (w) {
    if (!w) return w;
    return /^[0-9]/.test(w) ? w : w.charAt(0).toUpperCase() + w.slice(1);
  }).join(" ");
}

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

// 从 vals 页面 HTML 提取首个含 benchmarkView 的 props JSON 并解码
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

// 解析 vals.ai 镜像:45 模型 Fully Resolved%(tasks.overall.*.accuracy)
// + Results summary 表格前 5 名 Almost(count)/Raw Pass Rate(%)
function parseVals(html) {
  const view = extractBenchmarkView(html);
  if (!view || !view.tasks || !view.tasks.overall) return [];
  const overall = view.tasks.overall;
  const models = Object.keys(overall).map(function (id) {
    const d = overall[id] || {};
    const score = d.accuracy != null ? Math.round(d.accuracy * 100) / 100 : null;
    return {
      model: valsName(id), org: null, agent: "mini-SWE-agent", effort: null,
      score: score,          // Fully Resolved%
      almost: null,          // Almost 由 summary 表补充
      rawPassRate: null,
      src: "vals"
    };
  });
  // Results summary 表(前 5 名,含 Raw Pass Rate / Almost Resolved / Fully Resolved)
  transport.parseTableRows(html).forEach(function (row) {
    const cells = row.text;
    if (cells.length < 4) return;
    const nameM = (row.html[0] || "").match(/>([^<>]+)<\/a>/);
    if (!nameM) return;
    const name = nameM[1].trim();
    const k = normKey(name);
    const hit = models.filter(function (m) { return normKey(m.model) === k; })[0];
    if (!hit) return;
    const raw = num(cells[1]);
    const almost = num(cells[2]);
    if (raw != null) hit.rawPassRate = raw;
    if (almost != null) hit.almost = Math.round(almost / 200 * 1000) / 10; // count -> %
  });
  return models.filter(function (m) { return m.score != null; });
}

// 解析官方 programbench.com 榜单(rank/model(+effort)/agent/Resolved%/Almost%)
function parseOfficial(raw) {
  const models = [];
  transport.parseTableRows(raw).forEach(function (row) {
    const cells = row.text;
    if (cells.length < 5) return;
    const rank = Number(cells[0]);
    if (!isFinite(rank)) return;               // 表头行跳过(Resolved/Almost 列含 help_outline 文案)
    const resolved = num(cells[4]);
    if (resolved == null) return;
    const almost = num(cells[5]);
    let model = String(cells[2] || "").trim();
    if (!model) return;
    // 剥离尾部努力等级:形如 "Claude Opus 5 (xhigh)" -> model="Claude Opus 5", effort="xhigh"
    let effort = null;
    const em = model.match(/^(.*?)\s*\(([^()]+)\)\s*$/);
    if (em) { model = em[1].trim(); effort = em[2].trim(); }
    models.push({
      rank: rank,
      model: model,
      effort: effort,
      agent: cells[3] || null,
      score: resolved,       // Fully Resolved 主指标
      almost: almost,        // Almost 辅助(≥95% 行为测试通过)
      rawPassRate: null,
      src: "official"
    });
  });
  return models;
}

class ProgramBenchSource extends BaseSource {
  constructor() {
    super({
      id: "programbench", name: "ProgramBench", type: "html",
      url: CONFIG.sources.programbench.url, host: CONFIG.sources.programbench.host,
      officialUrl: CONFIG.sources.programbench.officialUrl,
      outFile: "programbench.js", windowVar: "PROGRAMBENCH"
    });
  }
  async fetch() {
    // 主源(官方)+ 补充源(vals.ai 镜像)并行抓取
    const [primary, extra] = await Promise.all([
      transport.fetchWithRetry(this.cfg.url),
      transport.fetchWithRetry(CONFIG.sources.programbench_vals.url)
    ]);
    return { primary: primary, extra: extra };
  }
  parse(raw) {
    const official = parseOfficial(raw.primary);
    const vals = parseVals(raw.extra);
    // 双源合并:按归一键去重,主指标 Fully Resolved% 取最高;almost/rawPassRate 取在场最高
    const map = {};
    official.forEach(function (m) {
      const k = normKey(m.model);
      if (!map[k] || m.score > map[k].score) {
        map[k] = Object.assign({}, m, { rank: 0 });
      }
    });
    vals.forEach(function (m) {
      const k = normKey(m.model);
      const e = map[k];
      if (!e) {
        map[k] = Object.assign({}, m, { rank: 0 });
      } else {
        if (m.score > e.score) e.score = m.score;
        if (m.almost != null && (e.almost == null || m.almost > e.almost)) e.almost = m.almost;
        if (m.rawPassRate != null && (e.rawPassRate == null || m.rawPassRate > e.rawPassRate)) e.rawPassRate = m.rawPassRate;
        if (!e.agent) e.agent = m.agent;
      }
    });
    const models = Object.keys(map).map(function (k) { return map[k]; });
    models.sort(function (a, b) { return b.score - a.score || (b.almost - a.almost) || (b.rawPassRate - a.rawPassRate); });
    models.forEach(function (m, i) { m.rank = i + 1; });
    if (!models.length) throw new Error("未解析到任何 ProgramBench 行");
    return { tasks: 200, models: models };
  }
  toStandard(parsed) {
    return normalizer.fromArray(this.cfg.id, parsed.models, function (m, idx) {
      return { name: m.model, score: m.score, rank: idx, updated: CONFIG.TODAY, metrics: {}, meta: { agent: m.agent, effort: m.effort } };
    });
  }
  writeContent(parsed) {
    const T = CONFIG.TODAY, R = CONFIG.REFRESHED_AT, n = parsed.models.length;
    return writers.windowVarTemplate("PROGRAMBENCH",
      "// 数据源:ProgramBench(cleanroom 程序重建·编码 Agent,更新于 " + T + ")\n" +
      "// 来源:" + this.cfg.url + "(官方:" + this.cfg.officialUrl + ") · 补充镜像 https://www.vals.ai/benchmarks/programbench\n" +
      "// 字段说明:model=模型名;effort=推理档位;agent=代理;score=Fully Resolved 完全解决率(%);almost=Almost(≥95% 行为测试通过率,%);rawPassRate=隐藏测试平均通过率(vals 独有,%)\n" +
      "// 用途:「权威基准测试」页完整展示;仅展示,不计入综合分与命中数(区分度极低)。\n",
      {
        source: "ProgramBench",
        url: this.cfg.url,
        officialUrl: this.cfg.officialUrl,
        updated: T,
        refreshedAt: R,
        stats: { tasks: parsed.tasks, entries: n },
        desc: "ProgramBench:仅给编译后二进制与文档,智能体需从零重建完整代码库并复现原程序行为(200 个真实开源项目任务,行为级隐藏测试,不联网、禁止反编译);Fully Resolved 为主指标、Almost(≥95% 行为测试通过)与 Raw Pass Rate(vals 镜像)为辅助,均越高越好。",
        models: parsed.models
      }
    );
  }
}

module.exports = registry.register(ProgramBenchSource);
