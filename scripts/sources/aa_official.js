// 新增数据源:Artificial Analysis 官方 Coding Agent Index
// 数据源:artificialanalysis.ai/agents/coding-agents(AA 官方原始页,比镜像更新)
// 数据形态:页面内嵌 3 个 <script type="application/ld+json"> 的 schema.org Dataset 块:
//   1) name:"Coding Agent Index"        data:[{label, codingAgentsIndex:0-1}]
//   2) name:"Time per Task"             data:[{label, codingAgentsMeanAgentWallTimeSec}]
//   3) name:"Cost per Task"             data:[{label, codingAgentsMeanCostUsd}]
// label 格式:"<agent> - <model> (<effort>)" 或多行 "<agent> - <model>\n(<vendor>)"
// 输出 data/aa_official.js(window.AA_OFFICIAL),按模型(canonical)合并三维数据。
// 与镜像源 aaci.js 并存,均参与 DeepSWE 的交叉验证。
"use strict";
const BaseSource = require("../lib/BaseSource");
const registry = require("../lib/registry");
const transport = require("../lib/transport");
const normalizer = require("../lib/normalizer");
const writers = require("../lib/writers");
const CONFIG = require("../lib/config");

// 从 label 解析 agent / model / vendor
// 形如:"Codex - GPT-5.6 Sol (max)"  或  "Claude Code - Fable 5 (max) (with fallback)"
//      或多行 "Codex - GPT-5.6 Sol (max)\n(OpenAI)"
function parseLabel(label) {
  // 去除多行 vendor 后缀,保留主行
  var main = String(label || "").split("\\n")[0].split("\n")[0].trim();
  // 以 " - " 分隔 agent 与 model
  var dashIdx = main.indexOf(" - ");
  var agent = "", rest = main;
  if (dashIdx > 0) {
    agent = main.slice(0, dashIdx).trim();
    rest = main.slice(dashIdx + 3).trim();
  }
  // rest 形如 "GPT-5.6 Sol (max) (with fallback)":model 名 + 若干括号后缀
  // 剥离 effort 后缀 (max)/(high)/(xhigh)/(low) 等
  var effort = null;
  var effortM = rest.match(/\((max|high|xhigh|medium|low|adaptive reasoning[^)]*)\)/i);
  if (effortM) effort = effortM[1];
  var model = rest.replace(/\((max|high|xhigh|medium|low|adaptive reasoning[^)]*)\)/i, "").replace(/\s+/g, " ").trim();
  // "with fallback" 等额外后缀保留在 model 名里(影响 canonical 匹配,但 normalizer 会归并)
  return { agent: agent, model: model, effort: effort };
}

// 从 HTML 中提取所有 application/ld+json 块并按 name 索引
function extractDatasets(html) {
  const blocks = html.match(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/g) || [];
  var byName = {};
  blocks.forEach(function (b) {
    var inner = b.replace(/^<script[^>]*>/, "").replace(/<\/script>$/, "");
    try {
      var obj = JSON.parse(inner);
      if (obj && obj.name && Array.isArray(obj.data)) byName[obj.name] = obj.data;
    } catch (e) { /* 忽略非数据块 */ }
  });
  return byName;
}

class AaOfficialSource extends BaseSource {
  constructor() {
    super({
      id: "aa_official", name: "AA Coding Agent Index (官方)", type: "spa-json",
      url: CONFIG.sources.aa_official.url, host: CONFIG.sources.aa_official.host,
      outFile: "aa_official.js", windowVar: "AA_OFFICIAL"
    });
  }
  parse(html) {
    var datasets = extractDatasets(html);
    var indexData = datasets["Coding Agent Index"] || [];
    var timeData = datasets["Time per Task"] || [];
    var costData = datasets["Cost per Task"] || [];
    if (!indexData.length) throw new Error("AA 官方页未找到 'Coding Agent Index' 数据块(站点结构变更)");

    // label 跨数据集格式不一:
    //   index 块:"Codex - GPT-5.6 Sol (max)"(无厂商)
    //   time/cost 块:"Codex - GPT-5.6 Sol (max)\n(OpenAI)"(多行末尾带厂商)
    // 归一:取首行、去掉尾部括号厂商,以"agent - model (effort)"作为合并键
    function normLabel(label) {
      return String(label || "")
        .split("\n")[0].trim()       // 取首行(去掉 \n(vendor) 后缀)
        .replace(/\s+/g, " ");
    }

    // 以归一 label 为键,合并三维
    var byLabel = {};
    function ensure(label) {
      var k = normLabel(label);
      if (!byLabel[k]) byLabel[k] = { label: k };
      return byLabel[k];
    }
    indexData.forEach(function (d) {
      if (!d || !d.label || d.codingAgentsIndex == null) return;
      ensure(d.label).index = Number(d.codingAgentsIndex);
    });
    timeData.forEach(function (d) {
      if (!d || !d.label || d.codingAgentsMeanAgentWallTimeSec == null) return;
      ensure(d.label).wallSec = Number(d.codingAgentsMeanAgentWallTimeSec);
    });
    costData.forEach(function (d) {
      if (!d || !d.label || d.codingAgentsMeanCostUsd == null) return;
      ensure(d.label).costUsd = Number(d.codingAgentsMeanCostUsd);
    });

    var entries = Object.values(byLabel).filter(function (e) { return e.index != null; });
    if (!entries.length) throw new Error("AA 官方 Coding Agent Index 无有效 index 条目");

    // 解析 label -> agent/model/effort,组装输出
    var models = entries.map(function (e) {
      var p = parseLabel(e.label);
      return {
        agent: p.agent || "-",
        model: p.model || e.label,
        effort: p.effort || null,
        // index 0-1 -> 0-100 百分制(与旧 AACI schema 一致,便于交叉验证)
        score: Math.round(e.index * 1000) / 10,
        indexRaw: e.index,
        wallSec: e.wallSec != null ? Math.round(e.wallSec) : null,
        costUsd: e.costUsd != null ? Math.round(e.costUsd * 100) / 100 : null,
        ci: null
      };
    });
    // 按 score 降序
    models.sort(function (a, b) { return b.score - a.score; });
    return models;
  }
  toStandard(models) {
    var srcId = this.cfg.id;
    return normalizer.fromArray(srcId, models, function (m, idx) {
      return {
        name: m.model, score: m.score, rank: idx, updated: CONFIG.TODAY,
        metrics: { ci: m.ci, agent: m.agent, effort: m.effort, wallSec: m.wallSec, costUsd: m.costUsd },
        meta: {}
      };
    });
  }
  writeContent(models) {
    return writers.windowVarTemplate("AA_OFFICIAL",
      "// 新增数据源:Artificial Analysis 官方 Coding Agent Index(云端抓取)\n" +
      "// 来源:" + this.cfg.url + "  (更新于 " + CONFIG.TODAY + ")\n" +
      "// 抓取方式:解析页面内嵌的 3 个 <script type='application/ld+json'> schema.org Dataset 块:\n" +
      "//          Coding Agent Index(0-1)/ Time per Task(秒)/ Cost per Task($),按 label 合并三维。\n" +
      "// label 格式:'<agent> - <model> (<effort>)';score=index*100(百分制);wallSec=平均任务耗时;costUsd=平均任务成本。\n" +
      "// 用途:与 DeepSWE 多源做一致性交叉验证;与镜像源 aaci.js 并存。\n",
      {
        source: "Artificial Analysis Coding Agent Index (Official)",
        url: this.cfg.url,
        updated: CONFIG.TODAY,
        version: "1.1",
        componentsList: ["DeepSWE", "Terminal-Bench v2", "SWE-Atlas-QnA"],
        scoreScale: "0-100 (index*100)",
        models: models
      }
    );
  }
}

module.exports = registry.register(AaOfficialSource);
