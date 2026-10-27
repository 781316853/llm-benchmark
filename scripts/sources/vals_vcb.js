// 数据源:Vibe Code Bench 1-100(Vals AI · 固定 OpenHands harness 的编码 Agent 实测)
// 站点:https://www.vals.ai/benchmarks/vcb-1-100
// 数据形态:Astro 服务端渲染,props 内嵌 devalue 序列化的 benchmarkView JSON
//          (metadata + tasks.overall.<vendor/slug>),单请求即得全表;解析见 scripts/lib/vals.js。
// 口径:50 个真实 Web 应用迭代场景,每个任务从可运行的 Vibe Code Bench v1.1 应用起步、
//      最多追加 10 轮产品请求;全部模型跑在固定 OpenHands harness 上(apples-to-apples);
//      主指标 accuracy(%),另记 cost_per_test($)与 latency(s)。
// 性质:主办方 Vals AI 为独立评测机构(非被评模型厂商),该榜即其自建自测的官方榜(T1)。
// 用途:计入总览综合分(「第三方实测」第 8 组,权重 7%)与命中数,同时作为「VCB-1-100」
//      标签页数据源(2026-10-27 起)。
// 输出:data/vals_vcb.js(window.VALSVCB)。
"use strict";
const BaseSource = require("../lib/BaseSource");
const registry = require("../lib/registry");
const normalizer = require("../lib/normalizer");
const writers = require("../lib/writers");
const CONFIG = require("../lib/config");
const valsLib = require("../lib/vals");

const EXPECT_ID = "vcb_1_100";

class ValsVcbSource extends BaseSource {
  constructor() {
    super({
      id: "vals_vcb", name: "Vibe Code Bench 1-100", type: "html",
      url: CONFIG.sources.vals_vcb.url, host: CONFIG.sources.vals_vcb.host,
      officialUrl: CONFIG.sources.vals_vcb.officialUrl,
      outFile: "vals_vcb.js", windowVar: "VALSVCB"
    });
  }
  parse(raw) {
    const parsed = valsLib.parseBenchmarkView(raw);
    if (!parsed) throw new Error("未解析到 VCB-1-100 benchmarkView(tasks.overall)");
    const meta = parsed.metadata || {};
    // benchmark_id 与页面不一致说明抓到的不是这张榜(如源站改版/重定向),宁可失败不写错数据
    if (meta.benchmark_id && meta.benchmark_id !== EXPECT_ID) {
      throw new Error("benchmark_id 不匹配:" + meta.benchmark_id + " != " + EXPECT_ID);
    }
    const models = parsed.models.slice().sort(function (a, b) { return b.accuracy - a.accuracy; });
    models.forEach(function (m, i) { m.rank = i + 1; m.src = "official"; });
    if (!models.length) throw new Error("未解析到任何 VCB-1-100 行");
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
        meta: { harness: m.harness }
      };
    });
  }
  writeContent(parsed) {
    const R = CONFIG.REFRESHED_AT;
    const harnesses = [];
    parsed.models.forEach(function (m) { if (m.harness && harnesses.indexOf(m.harness) < 0) harnesses.push(m.harness); });
    return writers.windowVarTemplate("VALSVCB",
      "// 数据源:Vibe Code Bench 1-100(Vals AI,源站更新 " + (parsed.updated || "未知") + ")\n" +
      "// 来源:" + this.cfg.url + "\n" +
      "// 字段:models[]=模型级主榜(按 accuracy 降序);accuracy=准确率(%);costPerTest=每测试平均成本($);\n" +
      "//      latencyS=每测试平均耗时(秒);harness=实测所用 harness(本榜全部为 " + (harnesses.join("/") || "未知") + ")\n" +
      "// 用途:计入总览综合分(「第三方实测」第 8 组,权重 7%)与命中数,并用于「VCB-1-100」标签页(2026-10-27 起)。\n",
      {
        source: "Vibe Code Bench 1-100",
        url: this.cfg.url,
        officialUrl: this.cfg.officialUrl,
        version: parsed.version,
        updated: parsed.updated,
        refreshedAt: R,
        harnesses: harnesses,
        stats: { models: parsed.models.length },
        desc: "Vibe Code Bench 1-100(Vals AI):让模型从一个能跑的 Web 应用出发,连续接住最多 10 轮产品需求(50 个真实场景);全部模型跑在固定 OpenHands harness 上,主指标为准确率(%),另记每测试平均成本与平均耗时。",
        models: parsed.models
      }
    );
  }
}

module.exports = registry.register(ValsVcbSource);