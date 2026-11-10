// 数据源:FrontierSWE v2(Epoch AI / The Proximal Team · 超长周期软件工程评测)
// 站点:https://www.frontierswe.com/(方法学:https://www.frontierswe.com/blog/v2)
// 数据形态:Next.js 页面。榜单表只服务端渲染「每厂商最佳」10 行(带 mean@5/worst@5/best@5),
//   全部模型(2026-11-10 实测 24 个)的完整成绩在 RSC 流(self.__next_f.push 的文本块)里:
//   同一批模型分别挂在 "best" / "mean" / "worst" 三个数组,每条含
//   model / harness / vendor / overall / implementation / performance / research /
//   avgCostUsd / costCaveat / avgDurationSeconds。本源拼接全部 RSC 文本块后,
//   按 "best":[{"model": / "mean":[{"model": / "worst":[{"model": 三个锚点做括号配对提取,
//   再按模型名合并 —— 主指标取 mean 数组的 overall(官方页面行值与散点图均为 mean@5)。
//   ⚠ 散点图与主表偶有源站内部出入(2026-11-10 实测 Claude Fable 5.1: 散点 56.53 / 主表 56.30,
//   Claude Fable 5: 47.20 / 46.96;成本亦略有差异),本表以主表所用 mean 数组为准。
// 口径:FrontierSWE v2(2026 年 9 月版)含 34 个真实技术领域的超长周期任务
//   (实现 / 性能优化 / 科学计算 / 视觉推理 / AI 研究,如用 Zig 重写 git、从 MEG 脑记录解码语音、
//   训练中期天气预报模型);每任务 5 次试验、单次最长 20 小时;分数 0-100%,
//   主指标 mean@5 = 每任务五次试验均值再跨任务平均;所有模型在基准自带的极简 agent harness
//   「proximus」内以最高推理强度运行(harness 统一,口径可比性强)。
// 渠道:该榜即 Epoch AI 自建自测的官方榜(T1),无更高优先级渠道可合并。
// 性质:仅展示,不计入综合分与命中数(超长周期任务集,量纲与其他基准不可比)。
// 输出:data/frontierswe.js(window.FRONTIERSWE)。
"use strict";
const BaseSource = require("../lib/BaseSource");
const registry = require("../lib/registry");
const transport = require("../lib/transport");
const normalizer = require("../lib/normalizer");
const writers = require("../lib/writers");
const CONFIG = require("../lib/config");

// 三个成绩数组的起始锚点(唯一出现;普通 "mean":" 字段会命中大量无关对象,不能直接用)
const ARRAY_ANCHORS = {
  best: '"best":[{"model":',
  mean: '"mean":[{"model":',
  worst: '"worst":[{"model":'
};
// 热力图任务清单锚点:用于取任务数,站点改版导致缺失时回退 v2 的 34
const TASKS_ANCHOR = '"best":{"tasks":[';
const DEFAULT_TASKS = 34;
const TRIALS_PER_TASK = 5;

function round1(v) { return v == null ? null : Math.round(Number(v) * 10) / 10; }
function round2(v) { return v == null ? null : Math.round(Number(v) * 100) / 100; }

// 拼接全部 self.__next_f.push([1,"..."]) 文本块;单块解析失败时退化为原文拼接
function buildRscPayload(html) {
  const re = /self\.__next_f\.push\(\[1,("(?:[^"\\]|\\.)*")\]\)/g;
  const parts = [];
  let m;
  while ((m = re.exec(html)) !== null) {
    try { parts.push(JSON.parse(m[1])); } catch (e) { parts.push(m[1]); }
  }
  return parts.join("");
}

// 从锚点后的 "[" 开始做括号配对,返回解析后的数组;锚点缺失或解析失败返回 null
function extractArray(payload, anchor) {
  const i = payload.indexOf(anchor);
  if (i < 0) return null;
  const start = i + anchor.indexOf("[");
  let depth = 0, inStr = false, esc = false;
  for (let j = start; j < payload.length; j++) {
    const c = payload[j];
    if (inStr) {
      if (esc) esc = false;
      else if (c === "\\") esc = true;
      else if (c === '"') inStr = false;
      continue;
    }
    if (c === '"') inStr = true;
    else if (c === "[") depth++;
    else if (c === "]") {
      depth--;
      if (depth === 0) {
        try { return JSON.parse(payload.slice(start, j + 1)); } catch (e) { return null; }
      }
    }
  }
  return null;
}

// 按模型名建索引;同名重复直接报错(宁可失败,也不静默取最后一条)
function indexByModel(rows, label) {
  const map = new Map();
  rows.forEach(function (r) {
    if (!r || typeof r.model !== "string" || !r.model) return;
    if (map.has(r.model)) throw new Error(label + " 数组存在重复模型:" + r.model);
    map.set(r.model, r);
  });
  return map;
}

class FrontierSweSource extends BaseSource {
  constructor() {
    super({
      id: "frontierswe", name: "FrontierSWE", type: "rsc",
      url: CONFIG.sources.frontierswe.url, host: CONFIG.sources.frontierswe.host,
      version: CONFIG.sources.frontierswe.version,
      officialUrl: CONFIG.sources.frontierswe.officialUrl,
      outFile: "frontierswe.js", windowVar: "FRONTIERSWE"
    });
  }
  // 官方页约 870KB 且响应偏慢,30s 默认超时不够(实测单次需 30s+);单次给到 90s
  fetch() {
    return transport.fetchWithRetry(this.cfg.url, { retries: this.cfg.retries, timeoutMs: 90000 });
  }
  parse(html) {
    const payload = buildRscPayload(html);
    if (!payload) throw new Error("未解析到 Next.js RSC 数据流");

    const arrays = {};
    Object.keys(ARRAY_ANCHORS).forEach(function (k) {
      arrays[k] = extractArray(payload, ARRAY_ANCHORS[k]);
    });
    if (!arrays.mean || !arrays.best || !arrays.worst) {
      throw new Error("RSC 流中缺少 best/mean/worst 成绩数组(站点改版?)");
    }
    if (arrays.mean.length < 10) {
      throw new Error("mean 数组仅 " + arrays.mean.length + " 条,疑似站点改版");
    }
    if (arrays.best.length !== arrays.mean.length || arrays.worst.length !== arrays.mean.length) {
      throw new Error("best/mean/worst 条数不一致:" + arrays.best.length + "/" + arrays.mean.length + "/" + arrays.worst.length);
    }
    const bestMap = indexByModel(arrays.best, "best");
    const worstMap = indexByModel(arrays.worst, "worst");

    const models = [];
    arrays.mean.forEach(function (r) {
      if (!r || !r.model || r.overall == null) return;
      const b = bestMap.get(r.model), w = worstMap.get(r.model);
      if (!b || !w || b.overall == null || w.overall == null) {
        throw new Error("模型 " + r.model + " 在 best/worst 数组中缺成绩");
      }
      models.push({
        model: r.model,
        harness: r.harness || null,
        vendor: r.vendor || null,
        score: round1(r.overall),                 // 主指标 mean@5(%)
        best: round1(b.overall),                  // 五次试验最好(%)
        worst: round1(w.overall),                 // 五次试验最差(%)
        costUsd: round2(r.avgCostUsd),            // 每任务平均成本($)
        durationS: r.avgDurationSeconds != null ? Math.round(r.avgDurationSeconds) : null, // 每任务平均墙钟(s)
        costCaveat: r.costCaveat || null,         // 成本口径提示(如缓存命中率异常)
        src: "official"
      });
    });
    if (!models.length) throw new Error("未解析到任何 FrontierSWE 行");
    models.sort(function (a, b) { return b.score - a.score; });
    models.forEach(function (m, i) { m.rank = i + 1; });

    const taskRows = extractArray(payload, TASKS_ANCHOR) || [];
    return {
      tasks: taskRows.length || DEFAULT_TASKS,
      trials: TRIALS_PER_TASK,
      models: models
    };
  }
  toStandard(parsed) {
    return normalizer.fromArray(this.cfg.id, parsed.models, function (m, idx) {
      return {
        name: m.model, score: m.score, rank: idx, updated: CONFIG.TODAY,
        metrics: { cost: m.costUsd, latencyS: m.durationS },
        meta: { harness: m.harness, vendor: m.vendor }
      };
    });
  }
  writeContent(parsed) {
    const T = CONFIG.TODAY, R = CONFIG.REFRESHED_AT, cfg = CONFIG.sources.frontierswe;
    return writers.windowVarTemplate("FRONTIERSWE",
      "// 数据源:FrontierSWE " + cfg.version + "(Epoch AI 官方 · 超长周期软件工程评测,更新于 " + T + ")\n" +
      "// 来源:" + cfg.url + "(方法学:" + cfg.blogUrl + ")\n" +
      "// 补充参考:" + cfg.epochUrl + "\n" +
      "// 字段:score=mean@5(%);best/worst=每任务五次试验的最优/最差均值(%);\n" +
      "//      costUsd=每任务平均成本($,costCaveat 为源站成本口径提示);durationS=每任务平均墙钟耗时(s);\n" +
      "//      harness=评测脚手架(统一为 proximus);vendor=源站厂商 slug\n" +
      "// 用途:「权威基准测试」页展示,仅参考,不计入综合分/命中数。\n",
      {
        source: "FrontierSWE",
        url: cfg.url,
        officialUrl: cfg.officialUrl,
        blogUrl: cfg.blogUrl,
        epochUrl: cfg.epochUrl,
        version: cfg.version,
        updated: T,
        refreshedAt: R,
        stats: { tasks: parsed.tasks, entries: parsed.models.length, trialsPerTask: parsed.trials },
        desc: "FrontierSWE " + cfg.version + "(Epoch AI):" + parsed.tasks + " 个来自真实技术领域的超长周期软件工程任务(实现 / 性能优化 / 科学计算 / 视觉推理 / AI 研究),每任务 " + parsed.trials + " 次试验、单次最长 20 小时;所有模型在基准自带的极简 agent harness「proximus」内以最高推理强度运行。主指标 mean@5 = 每任务五次试验均值再跨任务平均,分数越高越好。",
        models: parsed.models
      }
    );
  }
}

module.exports = registry.register(FrontierSweSource);
