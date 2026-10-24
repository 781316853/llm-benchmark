// 数据源:Vibe Code Bench v1.1(Vals AI · 从零构建 Web 应用的编码 Agent 实测)
// 站点:https://www.vals.ai/benchmarks/vibe-code
// 数据形态:Astro 服务端渲染,props 内嵌 devalue 序列化的 benchmarkView JSON
//          (metadata + tasks.overall.<vendor/slug>),单请求即得全表;解析见 scripts/lib/vals.js。
// 口径:每份非技术语言写的 Web 应用规格配 20-60 条自动化测试(人工三重校验),模型在隔离容器里
//      从零构建应用、最多跑 5 小时或 1000 轮,由隐藏测试判定;主指标 accuracy(%)。
//      benchmarkView 的 models[] 含全部 118 条 model×harness 记录:多数为 OpenHands,
//      另有少量 Claude Code / Codex / Factory / Cursor CLI / Grok Build / Devin CLI 条目。
// 性质:主办方 Vals AI 为独立评测机构(非被评模型厂商),该榜即其自建自测的官方榜(T1)。
// 用途:计入总览综合分(「第三方实测」第 8 组,权重 8%)与命中数。
// 输出:data/vals_vibe_code.js(window.VALSVIBECODE)。
"use strict";
const BaseSource = require("../lib/BaseSource");
const registry = require("../lib/registry");
const normalizer = require("../lib/normalizer");
const writers = require("../lib/writers");
const CONFIG = require("../lib/config");
const valsLib = require("../lib/vals");

const EXPECT_ID = "vibe_code_bench";

class ValsVibeCodeSource extends BaseSource {
  constructor() {
    super({
      id: "vals_vibe_code", name: "Vibe Code Bench v1.1", type: "html",
      url: CONFIG.sources.vals_vibe_code.url, host: CONFIG.sources.vals_vibe_code.host,
      officialUrl: CONFIG.sources.vals_vibe_code.officialUrl,
      outFile: "vals_vibe_code.js", windowVar: "VALSVIBECODE"
    });
  }
  parse(raw) {
    const parsed = valsLib.parseBenchmarkView(raw);
    if (!parsed) throw new Error("未解析到 Vibe Code Bench benchmarkView(tasks.overall)");
    const meta = parsed.metadata || {};
    // benchmark_id 与页面不一致说明抓到的不是这张榜(如源站改版/重定向),宁可失败不写错数据
    if (meta.benchmark_id && meta.benchmark_id !== EXPECT_ID) {
      throw new Error("benchmark_id 不匹配:" + meta.benchmark_id + " != " + EXPECT_ID);
    }
    const models = parsed.models.slice().sort(function (a, b) { return b.accuracy - a.accuracy; });
    models.forEach(function (m, i) { m.rank = i + 1; m.src = "official"; });
    if (!models.length) throw new Error("未解析到任何 Vibe Code Bench 行");
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
    return writers.windowVarTemplate("VALSVIBECODE",
      "// 数据源:Vibe Code Bench v1.1(Vals AI,源站更新 " + (parsed.updated || "未知") + ")\n" +
      "// 来源:" + this.cfg.url + "\n" +
      "// 字段:models[]=模型级主榜(按 accuracy 降序);accuracy=准确率(%);costPerTest=每测试平均成本($);\n" +
      "//      latencyS=每测试平均耗时(秒);harness=实测所用 harness(源站以 " + (harnesses.join("/") || "未知") + " 为主)\n" +
      "// 用途:计入总览综合分(「第三方实测」第 8 组,权重 8%)与命中数。\n",
      {
        source: "Vibe Code Bench v1.1",
        url: this.cfg.url,
        officialUrl: this.cfg.officialUrl,
        version: parsed.version,
        updated: parsed.updated,
        refreshedAt: R,
        harnesses: harnesses,
        stats: { models: parsed.models.length },
        desc: "Vibe Code Bench v1.1(Vals AI):从零构建 Web 应用的真实编码 Agent 实测,每份应用规格配 20-60 条隐藏自动化测试,模型在隔离容器中最多跑 5 小时或 1000 轮;多数模型跑在 OpenHands harness 上,源站另含少量 Claude Code / Codex / Factory 等 harness 条目,主指标为准确率(%),另记每测试平均成本与平均耗时。",
        models: parsed.models
      }
    );
  }
}

module.exports = registry.register(ValsVibeCodeSource);
