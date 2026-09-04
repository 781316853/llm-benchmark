// 数据源:AI 能力专项测试(atmeplz)四方向榜 —— 前端 / 后端方向分
// 站点:https://atmeplz.github.io/ai-test-prompt/(静态站,无 Key/无反爬)
// 数据形态:页面由 assets/app.js 拉取 data/site.json 渲染;本源直接抓取该 JSON,
//   只提取"前端处理能力(FRONTEND)"与"后端处理能力(BACKEND)"两个方向的方向分。
//   方向分由成员题按既定权重合成,天然以 100 为参考(0-100),方向分越高越好。
// 输出:data/aicap.js(window.AICAP),供"AI 能力"独立榜单页展示,不计入综合分。
"use strict";
const BaseSource = require("../lib/BaseSource");
const registry = require("../lib/registry");
const transport = require("../lib/transport");
const normalizer = require("../lib/normalizer");
const writers = require("../lib/writers");
const CONFIG = require("../lib/config");

// 把源站 direction 权重(成员题 key -> 权重)映射为可读 [题目中文名, 百分比] 数组
function buildWeights(direction, tasks) {
  const w = direction.weight || {};
  return Object.keys(w).map(function (k) {
    const task = tasks[k] || {};
    return [task.zh || k, Math.round((w[k] || 0) * 100) + "%"];
  });
}

// 抽取某方向的方向分模型行(完整运行,按 value 降序)
function buildDirectionModels(rows, dirKey) {
  const models = [];
  rows.forEach(function (r) {
    const d = r.directions && r.directions[dirKey];
    if (!d || typeof d.value !== "number") return;
    models.push({
      name: r.model,
      vendor: r.vendor,
      vendorDisplay: r.vendor_display || r.vendor,
      effort: r.effort || null,
      platform: r.platform || null,
      tested: r.tested || null,
      score: Math.round(d.value * 10) / 10,
      rank: d.rank != null ? d.rank : null,
      pct: d.pct != null ? d.pct : null
    });
  });
  models.sort(function (a, b) { return b.score - a.score; });
  return models;
}

class AiCapabilitySource extends BaseSource {
  constructor() {
    super({
      id: "ai_capability", name: "AI 能力专项测试", type: "json",
      url: CONFIG.sources.ai_capability.url, host: CONFIG.sources.ai_capability.host,
      outFile: "aicap.js", windowVar: "AICAP"
    });
    this.boardUrl = CONFIG.sources.ai_capability.boardUrl;
  }
  async fetch() {
    return transport.fetchWithRetry(this.cfg.url);
  }
  parse(raw) {
    const site = JSON.parse(raw);
    if (!site || !Array.isArray(site.rows)) throw new Error("site.json 未解析到 rows(站点结构变更)");
    const tasks = site.tasks || {};
    const complete = site.rows.filter(function (r) { return r.complete; });
    const mkDir = function (key, fallback) {
      const d = (site.directions && site.directions[key]) || { zh: fallback, en: key.toUpperCase(), weight: {} };
      return {
        zh: d.zh, en: d.en,
        weight: buildWeights(d, tasks),
        models: buildDirectionModels(complete, key)
      };
    };
    return {
      meta: site.meta || {},
      updated: (site.meta && (site.meta.latest || site.meta.updated)) || CONFIG.TODAY,
      directions: {
        frontend: mkDir("frontend", "前端处理能力"),
        backend: mkDir("backend", "后端处理能力")
      }
    };
  }
  toStandard(parsed) {
    const rows = [];
    [["frontend", "aicap_frontend"], ["backend", "aicap_backend"]].forEach(function (pair) {
      const dir = parsed.directions[pair[0]];
      (dir.models || []).forEach(function (m) {
        rows.push(normalizer.record({
          sourceId: pair[1],
          name: m.name,
          score: m.score,
          rank: m.rank,
          updated: parsed.updated,
          metrics: {},
          meta: { direction: pair[0], vendor: m.vendor }
        }));
      });
    });
    return rows;
  }
  writeContent(parsed) {
    return writers.windowVarTemplate("AICAP",
      "// 数据源:AI 能力专项测试(atmeplz)四方向榜 · 前端/后端方向分(0-100)\n" +
      "// 站点:" + this.boardUrl + "  (更新于 " + parsed.updated + ")\n" +
      "// 字段说明:score=方向分(天然以 100 为参考,越高越好);rank=源站方向内排名;weight=方向分成员题权重\n" +
      "// 用途:门户「AI 能力」独立榜单页(前端/后端两个方向),独立榜单不计入综合分。\n",
      {
        source: "AI 能力专项测试 (atmeplz)",
        url: this.cfg.url,
        boardUrl: this.boardUrl,
        updated: parsed.updated,
        refreshedAt: CONFIG.REFRESHED_AT,
        runCount: parsed.meta.N_complete != null ? parsed.meta.N_complete : null,
        desc: "AI 能力专项测试四方向榜:文字/前端/后端/知识四个方向独立排名,方向分由成员题按既定权重合成。门户仅收录前端与后端两个编码方向,独立榜单展示,不计入综合分。",
        directions: parsed.directions
      }
    );
  }
}

module.exports = registry.register(AiCapabilitySource);
