// 新增数据源:BigCodeBench 排行榜
// 类型:JSON REST API(分页/单文件 JSON,演示真正的 API 抓取)
// 解析 bigcode-bench.github.io/results.json 结构化数据。
// 输出 data/livecode.js(window.LIVECODE)。
"use strict";
const BaseSource = require("../lib/BaseSource");
const registry = require("../lib/registry");
const transport = require("../lib/transport");
const normalizer = require("../lib/normalizer");
const writers = require("../lib/writers");
const CONFIG = require("../lib/config");

class LiveCodeSource extends BaseSource {
  constructor() {
    super({
      id: "livecode", name: "BigCodeBench", type: "api",
      url: CONFIG.sources.livecode.url, host: CONFIG.sources.livecode.host,
      outFile: "livecode.js", windowVar: "LIVECODE"
    });
  }
  parse(text) {
    // BigCodeBench results.json:可能为 数组 或 {models:[...]} 或 {results:{name:{...}}}
    // 通用兼容:提取"模型 -> 分数"映射,分数取百分制。
    var data;
    try { data = JSON.parse(text); }
    catch (e) { throw new Error("BigCodeBench JSON 解析失败: " + e.message); }
    var entries = [];   // [{name, score, ...}]
    function pushScore(name, score, extra) {
      if (name == null || score == null) return;
      var n = Number(score);
      if (!isFinite(n)) return;
      // 兼容 0-1 小数
      if (n >= 0 && n <= 1.5) n = n * 100;
      if (n < 0 || n > 100) return;
      entries.push(Object.assign({ name: String(name), score: Math.round(n * 10) / 10 }, extra || {}));
    }
    // 形态1:数组 of {model/name, score/average/pass_rate, ...}
    if (Array.isArray(data)) {
      data.forEach(function (item) {
        if (!item || typeof item !== "object") return;
        var name = item.model || item.name || item.model_name;
        var score = item.average != null ? item.average
          : item.score != null ? item.score
            : item.pass_rate != null ? item.pass_rate
              : (item.results && item.results.average != null ? item.results.average : null);
        pushScore(name, score, { meta: item });
      });
    }
    // 形态2:对象 {models:[...]} 或 {results:{...}}
    else if (data && typeof data === "object") {
      var list = data.models || data.leaderboard || data.results;
      if (Array.isArray(list)) {
        list.forEach(function (item) {
          if (!item || typeof item !== "object") return;
          var name = item.model || item.name || item.model_name;
          var score = item.average != null ? item.average
            : item.score != null ? item.score
              : item.pass_rate != null ? item.pass_rate : null;
          pushScore(name, score, { meta: item });
        });
      } else if (list && typeof list === "object") {
        // {name: {average/score/pass_rate}} 形态
        Object.keys(list).forEach(function (k) {
          var v = list[k];
          if (!v || typeof v !== "object") return;
          var score = v.average != null ? v.average
            : v.score != null ? v.score
              : v.pass_rate != null ? v.pass_rate : null;
          pushScore(k, score, { meta: v });
        });
      }
    }
    if (!entries.length) throw new Error("BigCodeBench 未解析到数据(接口结构可能变更)");
    // 同名取最高
    var best = {};
    entries.forEach(function (e) {
      if (!best[e.name] || e.score > best[e.name].score) best[e.name] = e;
    });
    return Object.values(best).sort(function (a, b) { return b.score - a.score; });
  }
  toStandard(models) {
    var srcId = this.cfg.id;
    return normalizer.fromArray(srcId, models, function (m, idx) {
      return { name: m.name, score: m.score, rank: idx, updated: CONFIG.TODAY, metrics: {}, meta: m.meta || {} };
    });
  }
  writeContent(models) {
    return writers.windowVarTemplate("LIVECODE",
      "// 新增数据源:BigCodeBench 排行榜快照(云端抓取)\n" +
      "// 来源:" + this.cfg.url + "  (更新于 " + CONFIG.TODAY + ")\n" +
      "// 用途:竞争性代码生成能力评测,REST API 数据源。\n" +
      "// 字段说明:name=模型名;score=综合分(%)\n",
      {
        source: "BigCodeBench",
        url: this.cfg.url,
        updated: CONFIG.TODAY,
        models: models
      }
    );
  }
}

module.exports = registry.register(LiveCodeSource);
