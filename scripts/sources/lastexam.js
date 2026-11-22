// 数据源:Agents' Last Exam(UC Berkeley RDI 真实专业工作流评测)
// 当前主榜 v1.1:官方 122 题 / 55 细分行业 / 13 行业组,官方 API(T1)+ datalearner v1.1(T2)+ llm-stats(T3,只补缺)。
// 历史 v1.0:152 题,单独输出 data/lastexam_v10.js(window.LASTEXAM_V10),仅供权威页版本切换保留,不与 v1.1 比较。
// 站点:官方 agents-last-exam.org/leaderboard 为 Next.js 客户端渲染,数据走同域
//   /api/demo/leaderboard/v1.1;datalearner 的 v1.1 页为厂商官方发布成绩转录(57 条 model×档位)。
// 合并策略:见 scripts/lib/mergeByTier.js —— 官方 T1 优先,厂商发布 T2 补缺并回填字段,
//   llm-stats T3 仅补前两层没有的模型;同模型按 canonical 归并,每模型取最高分档。
// 性质:模型级条目;仅「权威基准测试」页展示,不计入综合分与命中数。
// 输出:data/lastexam.js(window.LASTEXAM) / data/lastexam_v10.js(window.LASTEXAM_V10)。
"use strict";
const BaseSource = require("../lib/BaseSource");
const registry = require("../lib/registry");
const transport = require("../lib/transport");
const normalizer = require("../lib/normalizer");
const writers = require("../lib/writers");
const modelMap = require("../lib/model-map");
const { parseDataLearnerBench } = require("./datalearner");
const parseLlmStats = require("../lib/parseLlmStats");
const { createTierMerger } = require("../lib/mergeByTier");
const CONFIG = require("../lib/config");

const V11_TASKS = 122;
const V10_TASKS = 152;

function round1(v) {
  if (v == null || !isFinite(Number(v))) return null;
  return Math.round(Number(v) * 10) / 10;
}
// 官方 API 的分数是 0-1 小数;datalearner / llm-stats 已是百分制。
function pct1(v) { return round1(Number(v) * 100); }

// 统一显示名:命中 models.js/models-auto.js 的 canonical 时用其 id(如 Hy4 -> Tencent Hy4、
// kimi-3.1-pro -> Kimi K3.1 Pro),未登记时用清洗后的原始名。
function displayName(raw) {
  const c = modelMap.canon(raw);
  return (c && c.vendor && c.vendor !== "其他") ? c.id : modelMap.cleanDisplay(raw);
}
function orgOf(raw) {
  const c = modelMap.canon(raw);
  return (c && c.vendor && c.vendor !== "其他") ? c.vendor : null;
}

// 官方 v1.1 API:rows 为 model×harness×档位;每模型取 avgScore 最高的一条。
function parseOfficial(raw) {
  const json = JSON.parse(raw);
  const best = {};
  (json.rows || []).forEach(function (r) {
    const name = displayName(r.model);
    const score = pct1(r.avgScore);
    if (score == null) return;
    if (!best[name] || score > best[name].score) {
      best[name] = {
        model: name,
        org: orgOf(r.model),
        score: score,
        pass: pct1(r.passRate),
        harness: r.harness || null,
        effort: String(r.harnessVariant || "").replace(/^reasoning-/, "") || null,
        tasks: r.tasks || null,
        costUsd: (r.tasks && r.totalCostUsd != null)
          ? Math.round(r.totalCostUsd / r.tasks * 100) / 100 : null,
        date: null,
        src: "official"
      };
    }
  });
  return Object.values(best);
}

// datalearner 厂商发布页:同一模型可能有多个档位/日期,取最高分一条。
function parseVendor(raw, src) {
  const best = {};
  parseDataLearnerBench(raw).forEach(function (m) {
    const name = displayName(m.name);
    const score = round1(m.score);
    if (score == null) return;
    if (!best[name] || score > best[name].score) {
      best[name] = {
        model: name,
        org: orgOf(m.name),
        score: score,
        pass: null,
        harness: null,
        effort: m.mode || null,
        size: m.params || null,
        license: m.license || null,
        date: m.date || null,
        src: src
      };
    }
  });
  return Object.values(best);
}

function parseLlmStatsSource(raw) {
  return parseLlmStats.parse(raw, { name: "Agents' Last Exam", tasks: V11_TASKS })
    .models.map(function (m) {
      return {
        model: displayName(m.model),
        org: m.org || orgOf(m.model),
        score: round1(m.score),
        pass: null,
        size: m.size || null,
        context: m.context || null,
        cost: m.cost || null,
        license: m.license || null,
        src: "llm-stats"
      };
    });
}

function mergedModels(official, vendor, ls) {
  const merger = createTierMerger({});
  merger.add(official, "official");
  merger.add(vendor, "datalearner");
  merger.add(ls, "llm-stats");
  return merger.values();
}

class LastExamV11Source extends BaseSource {
  constructor() {
    super({
      id: "lastexam", name: "Agents' Last Exam v1.1", type: "json",
      url: CONFIG.sources.lastexam.officialUrl, host: CONFIG.sources.lastexam.host,
      officialUrl: CONFIG.sources.lastexam.officialUrl,
      outFile: "lastexam.js", windowVar: "LASTEXAM"
    });
  }
  // 官方 API(T1)+ datalearner v1.1(T2)+ llm-stats(T3)并行;任一失败不阻断其余层级。
  async fetch() {
    const urls = [
      CONFIG.sources.lastexam.apiUrl,
      CONFIG.sources.datalearner_lastexam_v11.url,
      CONFIG.sources.lastexam.url
    ];
    const rs = await Promise.allSettled(urls.map(function (u) {
      return transport.fetchWithRetry(u, { retries: CONFIG.transport.retries });
    }));
    function val(r, label) {
      if (r.status === "fulfilled") return r.value;
      console.log("  [lastexam] " + label + " 抓取失败: " + (r.reason && r.reason.message));
      return null;
    }
    return {
      official: val(rs[0], "官方 API"),
      vendor: val(rs[1], "datalearner v1.1"),
      ls: val(rs[2], "llm-stats")
    };
  }
  parse(raw) {
    let official = [], vendor = [], ls = [];
    try { official = raw.official ? parseOfficial(raw.official) : []; }
    catch (e) { console.log("  [lastexam] 官方 API 解析失败: " + e.message); }
    try { vendor = raw.vendor ? parseVendor(raw.vendor, "datalearner") : []; }
    catch (e) { console.log("  [lastexam] datalearner v1.1 解析失败: " + e.message); }
    try { ls = raw.ls ? parseLlmStatsSource(raw.ls) : []; }
    catch (e) { console.log("  [lastexam] llm-stats 解析失败: " + e.message); }
    if (!official.length && !vendor.length && !ls.length) {
      throw new Error("Agents' Last Exam v1.1 未解析到任何数据");
    }
    const models = mergedModels(official, vendor, ls);
    models.forEach(function (m) { m.version = "v1.1"; });
    return {
      tasks: V11_TASKS,
      models: models,
      channels: { official: official.length, datalearner: vendor.length, llmStats: ls.length }
    };
  }
  toStandard(parsed) {
    return normalizer.fromArray(this.cfg.id, parsed.models, function (m, idx) {
      return {
        name: m.model, score: m.score, rank: idx, updated: CONFIG.TODAY,
        metrics: { pass: m.pass, harness: m.harness, effort: m.effort },
        meta: { org: m.org, src: m.src }
      };
    });
  }
  writeContent(parsed) {
    const T = CONFIG.TODAY, R = CONFIG.REFRESHED_AT;
    const cfg = CONFIG.sources.lastexam;
    return writers.windowVarTemplate("LASTEXAM",
      "// 数据源:Agents' Last Exam v1.1(UC Berkeley RDI 真实专业工作流评测,更新于 " + T + ")\n" +
      "// 主渠道:" + cfg.apiUrl + "(官方 API,T1;榜单页:" + cfg.officialUrl + ")\n" +
      "// 补充:" + CONFIG.sources.datalearner_lastexam_v11.url + "(厂商官方发布 T2,只补缺)\n" +
      "// 补充:" + cfg.url + "(llm-stats 聚合 T3,只补缺)\n" +
      "// " + CONFIG.channelPolicy + "\n" +
      "// 口径:v1.1 为 122 个公开任务、55 细分行业 / 13 行业组;平均得分(0-100)与完美通过率分别记录,越高越好。\n" +
      "// 注:官方 slug qwen-4 即 Qwen4-Max(datalearner 同名同分:通过率 46.7 / 平均分 74.4),已并回同一 canonical。\n" +
      "// 字段:model=模型名;score=得分(%);pass=完美通过率(%);harness=官方榜所用 agent harness;effort=推理档位;\n" +
      "//      tasks=该条运行的任务数(Fable 5.2 为 113,其余 122);costUsd=每任务平均成本(USD);src=数据来源渠道\n" +
      "// 用途:「权威基准测试」页展示,仅参考,不计入综合分/命中数;v1.0 历史榜见 data/lastexam_v10.js。\n",
      {
        source: "Agents' Last Exam",
        url: cfg.officialUrl,
        officialUrl: cfg.officialUrl,
        version: "v1.1",
        updated: T,
        refreshedAt: R,
        stats: { tasks: parsed.tasks, entries: parsed.models.length, channels: parsed.channels },
        channelPolicy: CONFIG.channelPolicy,
        desc: "Agents' Last Exam v1.1:UC Berkeley RDI 主导的 122 个公开专业工作流任务(55 细分行业 / 13 行业组),模型思考档位与运行 harness 分开记录;榜单同时记录平均得分与完美通过率,越高越好。",
        models: parsed.models
      }
    );
  }
}

class LastExamV10Source extends BaseSource {
  constructor() {
    super({
      id: "lastexam_v10", name: "Agents' Last Exam v1.0", type: "html",
      url: CONFIG.sources.datalearner_lastexam.url, host: CONFIG.sources.datalearner_lastexam.host,
      officialUrl: CONFIG.sources.lastexam.officialUrl,
      outFile: "lastexam_v10.js", windowVar: "LASTEXAM_V10"
    });
  }
  parse(raw) {
    const models = parseVendor(raw, "datalearner");
    if (!models.length) throw new Error("Agents' Last Exam v1.0 未解析到任何数据");
    models.forEach(function (m) { m.version = "v1.0"; });
    return { tasks: V10_TASKS, models: models };
  }
  toStandard(parsed) {
    return normalizer.fromArray(this.cfg.id, parsed.models, function (m, idx) {
      return {
        name: m.model, score: m.score, rank: idx, updated: CONFIG.TODAY,
        metrics: { effort: m.effort },
        meta: { org: m.org, src: m.src }
      };
    });
  }
  writeContent(parsed) {
    const T = CONFIG.TODAY, R = CONFIG.REFRESHED_AT;
    const cfg = CONFIG.sources.datalearner_lastexam;
    return writers.windowVarTemplate("LASTEXAM_V10",
      "// 数据源:Agents' Last Exam v1.0 历史榜(152 题,厂商官方发布口径,抓取于 " + T + ")\n" +
      "// 来源:" + cfg.url + "(官方:" + CONFIG.sources.lastexam.officialUrl + ")\n" +
      "// 用途:权威页版本切换保留;v1.0 与 v1.1(122 题)任务集不同,分数不可直接比较。\n" +
      "// 字段同 data/lastexam.js;src=datalearner 为厂商官方发布转录。\n",
      {
        source: "Agents' Last Exam",
        url: cfg.url,
        officialUrl: CONFIG.sources.lastexam.officialUrl,
        version: "v1.0",
        updated: T,
        refreshedAt: R,
        stats: { tasks: parsed.tasks, entries: parsed.models.length },
        channelPolicy: CONFIG.channelPolicy,
        desc: "Agents' Last Exam v1.0 历史榜:152 个任务,厂商官方发布口径;与 v1.1(122 题)任务集不同,仅供版本切换对照。",
        models: parsed.models
      }
    );
  }
}

registry.register(LastExamV11Source);
registry.register(LastExamV10Source);

module.exports = { LastExamV11Source: LastExamV11Source, LastExamV10Source: LastExamV10Source };
