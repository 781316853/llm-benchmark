// 数据源:Code Migration(Vals AI · 跨语言程序重写)
// 站点:https://www.vals.ai/benchmarks/code-migration
// 数据形态:Astro 服务端渲染,props 内嵌 devalue 序列化的 benchmarkView JSON
//          (metadata + tasks.overall.<vendor/slug>),单请求即得全表;解析见 scripts/lib/vals.js。
// 口径:40 个真实仓库(30 CLI + 10 COBOL)的跨语言重写,隐藏测试判定;
//      主指标 accuracy(%),另记 cost_per_test($)与 latency(s);源站未公开 harness 字段。
// 性质:主办方 Vals AI 为独立评测机构(非被评模型厂商),该榜即其自建自测的官方榜(T1)。
// 用途:「权威基准测试」页新增章节完整展示;仅展示,不计入综合分与命中数。
// 输出:data/vals_codemigration.js(window.VALSCODEMIGRATION)。
"use strict";
const BaseSource = require("../lib/BaseSource");
const registry = require("../lib/registry");
const normalizer = require("../lib/normalizer");
const writers = require("../lib/writers");
const CONFIG = require("../lib/config");
const valsLib = require("../lib/vals");

const EXPECT_ID = "code_migration";

class ValsCodeMigrationSource extends BaseSource {
  constructor() {
    super({
      id: "vals_codemigration", name: "Code Migration", type: "html",
      url: CONFIG.sources.vals_codemigration.url, host: CONFIG.sources.vals_codemigration.host,
      officialUrl: CONFIG.sources.vals_codemigration.officialUrl,
      outFile: "vals_codemigration.js", windowVar: "VALSCODEMIGRATION"
    });
  }
  parse(raw) {
    const parsed = valsLib.parseBenchmarkView(raw);
    if (!parsed) throw new Error("未解析到 Code Migration benchmarkView(tasks.overall)");
    const meta = parsed.metadata || {};
    if (meta.benchmark_id && meta.benchmark_id !== EXPECT_ID) {
      throw new Error("benchmark_id 不匹配:" + meta.benchmark_id + " != " + EXPECT_ID);
    }
    const models = parsed.models.slice().sort(function (a, b) { return b.accuracy - a.accuracy; });
    models.forEach(function (m, i) { m.rank = i + 1; m.src = "official"; });
    if (!models.length) throw new Error("未解析到任何 Code Migration 行");
    return {
      updated: meta.updated || "",
      version: meta.version || "",
      totalModels: meta.total_models || models.length,
      models: models
    };
  }
  toStandard(parsed) {
    return normalizer.fromArray(this.cfg.id, parsed.models, function (m, idx) {
      return {
        name: m.model, score: m.accuracy, rank: idx,
        updated: parsed.updated || CONFIG.TODAY,
        metrics: { cost: m.costPerTest, latencyS: m.latencyS },
        meta: {}
      };
    });
  }
  writeContent(parsed) {
    const R = CONFIG.REFRESHED_AT;
    return writers.windowVarTemplate("VALSCODEMIGRATION",
      "// 数据源:Code Migration(Vals AI,源站更新 " + (parsed.updated || "未知") + ")\n" +
      "// 来源:" + this.cfg.url + "\n" +
      "// 字段:models[]=模型级主榜(按 accuracy 降序);accuracy=准确率(%);costPerTest=每测试平均成本($);\n" +
      "//      latencyS=每测试平均耗时(秒);harness 源站未公开\n" +
      "// 用途:「权威基准测试」页展示;仅展示,不计入综合分与命中数。\n",
      {
        source: "Code Migration",
        url: this.cfg.url,
        officialUrl: this.cfg.officialUrl,
        version: parsed.version,
        updated: parsed.updated,
        refreshedAt: R,
        stats: { models: parsed.models.length },
        desc: "Code Migration(Vals AI):把真实程序跨语言重写(40 个仓库,30 个 CLI + 10 个 COBOL),由隐藏测试判定是否保持行为等价;主指标为准确率(%),另记每测试平均成本与平均耗时。",
        models: parsed.models
      }
    );
  }
}

module.exports = registry.register(ValsCodeMigrationSource);