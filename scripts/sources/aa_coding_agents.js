// 数据源:Artificial Analysis Coding Agent Index v2.0(AA 官方编码 Agent 综合指数)
// 站点:https://artificialanalysis.ai/agents/coding-agents
// 数据形态:Next.js App Router 页面,榜单行只存在于 RSC 流(self.__next_f.push 的文本块)里;
//   服务端仅直出前 8 行,其余行以「$32:props:...:rows:N」引用方式挂在同一 RSC 流中。
//   本源先拼接全部 RSC 文本块,再按 {"id":"<32hex>","isDefault" 逐个对象做花括号配对取出,
//   按 id 去重即得全量 30 条 agent×model×effort 配置(2026-10-27 实测 30 条)。
// 口径:Index v2.0 = FrontierCode v1.1(100 题)+ Terminal-Bench 4.0(66 题)+ SWE-Atlas-QnA-AA(124 题)
//   三项等权平均,每项取每题三次尝试的均值;indexScore / evals[].mean.reward 均为 0-1,本源 ×100 转百分制。
//   另记每任务平均 API 成本($)、agent 墙钟耗时(s)、步数、token 用量,供页面散点与明细表。
// 性质:AA 为独立第三方评测机构(非被评厂商),按 T3 第三方评测入库(src=aggregate)。
// 用途:仅收录到「权威基准测试」页展示,不计入总览综合分与命中数(用户 2026-10-27 口径;
//   因 Index 是站内已独立收录的 FrontierCode 与 Terminal-Bench 4.0 的再合成,计入会重复计量)。
// 输出:data/aa_coding_agents.js(window.AACODING)。
"use strict";
const BaseSource = require("../lib/BaseSource");
const registry = require("../lib/registry");
const normalizer = require("../lib/normalizer");
const writers = require("../lib/writers");
const CONFIG = require("../lib/config");

// v2.0 的三个子基准(datasetIndexName);缺失任一即视为口径变更,宁可失败也不写错数据
const EXPECT_DATASETS = {
  "frontiercode-v1.1-main": "frontiercode",
  "terminal-bench-v4": "terminalBench",
  "swe-atlas-qna": "sweAtlas"
};
// 行对象起点:不依赖字段顺序,先按 id 定位再整对象配对;随后按 evals/indexScore 校验是否为榜单行
const ROW_START_RE = /\{"id":"([0-9a-f]{32})"/g;

// 从 RSC 流中取出一个完整 JSON 对象(从 startIdx 的 "{" 开始做括号配对,跳过字符串内括号)
function extractObject(src, startIdx) {
  let depth = 0, inStr = false, esc = false;
  for (let i = startIdx; i < src.length; i++) {
    const c = src[i];
    if (inStr) {
      if (esc) esc = false;
      else if (c === "\\") esc = true;
      else if (c === '"') inStr = false;
      continue;
    }
    if (c === '"') inStr = true;
    else if (c === "{") depth++;
    else if (c === "}") {
      depth--;
      if (depth === 0) return src.slice(startIdx, i + 1);
    }
  }
  return null;
}

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

// 源站 modelCreators 的厂商名与站内 vendorColors 的 canonical 名不一致的映射;
// 未列出的原样使用(OpenAI/Anthropic/Google/Meta/DeepSeek/Alibaba/StepFun/Cognition 等已一致)
const VENDOR_MAP = { "Z AI": "zAI", "SpaceXAI": "xAI", "Kimi": "Moonshot", "Reflection": "Reflection AI" };

function round1(v) { return v == null ? null : Math.round(Number(v) * 10) / 10; }
function round2(v) { return v == null ? null : Math.round(Number(v) * 100) / 100; }

// 推理档位:优先取 model 名尾部的 (max)/(xhigh)/(high)/(medium)/(low)/(none);
// Step 5 之类的额外配置不在档位字段里,保留在 displayLabel 供页面展示
function parseEffort(model) {
  const m = String(model || "").match(/\((xhigh|high|max|medium|low|none)\)\s*$/i);
  return m ? m[1].toLowerCase() : null;
}

class AaCodingAgentsSource extends BaseSource {
  constructor() {
    super({
      id: "aa_coding_agents", name: "AA Coding Agent Index v2.0", type: "rsc",
      url: CONFIG.sources.aa_coding_agents.url,
      host: CONFIG.sources.aa_coding_agents.host,
      officialUrl: CONFIG.sources.aa_coding_agents.officialUrl,
      outFile: "aa_coding_agents.js", windowVar: "AACODING"
    });
  }

  parse(html) {
    const payload = buildRscPayload(html);
    if (!payload) throw new Error("未解析到 Next.js RSC 数据流");

    const byId = new Map();
    let m;
    ROW_START_RE.lastIndex = 0;
    while ((m = ROW_START_RE.exec(payload)) !== null) {
      if (byId.has(m[1])) continue;
      const raw = extractObject(payload, m.index);
      if (!raw) continue;
      let row;
      try { row = JSON.parse(raw); } catch (e) { continue; }
      if (row && row.id && Array.isArray(row.evals) && row.indexScore != null) byId.set(row.id, row);
    }
    const rows = [...byId.values()];
    if (rows.length < 5) throw new Error("RSC 流中只解析到 " + rows.length + " 条配置,疑似站点改版");

    // 子基准完整性:每条配置都应含 v2.0 的三项;缺项配置直接丢弃(不猜口径)
    const models = [];
    rows.forEach(function (row) {
      const comp = {};
      row.evals.forEach(function (ev) {
        const key = EXPECT_DATASETS[ev.datasetIndexName];
        if (key && ev.mean && ev.mean.reward != null) comp[key] = round1(ev.mean.reward * 100);
      });
      if (Object.keys(comp).length !== Object.keys(EXPECT_DATASETS).length) return;
      const display = row.display || {};
      const mean = row.mean || {};
      const creators = row.modelCreators || [];
      models.push({
        id: row.id,
        agent: display.agent || row.agentName || "—",
        model: display.model || "—",
        displayLabel: row.displayLabel || ((display.agent || "") + " - " + (display.model || "")).trim(),
        // 多模型组合(如 Devin Fusion 的「Claude Opus 5.5 Max + GPT-6 Luna High」)
        // 无法归到单一 canonical,模型级归并时跳过;本页照常展示
        multiModel: /\s\+\s/.test(display.model || ""),
        effort: parseEffort(display.model),
        provider: row.provider || "",
        vendor: VENDOR_MAP[(creators[0] && creators[0].name) || ""] ||
          VENDOR_MAP[(row.agentCreator && row.agentCreator.name) || ""] ||
          (creators[0] && creators[0].name) || (row.agentCreator && row.agentCreator.name) || row.provider || "其他",
        indexScore: round1(row.indexScore * 100),
        frontiercode: comp.frontiercode,
        terminalBench: comp.terminalBench,
        sweAtlas: comp.sweAtlas,
        costUsd: mean.costUsd != null ? round2(mean.costUsd) : null,
        wallTimeSec: mean.agentWallTimeSec != null ? round1(mean.agentWallTimeSec) : null,
        steps: mean.steps != null ? round1(mean.steps) : null,
        totalTokens: mean.totalTokens != null ? Math.round(mean.totalTokens) : null,
        src: "aggregate"
      });
    });
    if (!models.length) throw new Error("30 条配置中没有任何一条包含 v2.0 三项子基准");

    models.sort(function (a, b) { return b.indexScore - a.indexScore; });
    models.forEach(function (mm, i) { mm.rank = i + 1; });

    // 源站数据版本:页面文案里的 “Coding Agent Index v2.0”;抓不到时用配置默认值
    const vm = payload.match(/Coding Agent Index (v\d+(?:\.\d+)?)/);
    const indexVersion = vm ? vm[1] : (CONFIG.sources.aa_coding_agents.version || "v2.0");

    // 更新时间:取各配置 rewardHacking/materializedAt 的最大日期(AA 每日重跑任务)
    let updated = "";
    rows.forEach(function (row) {
      (row.evals || []).forEach(function (ev) {
        const t = ev.rewardHacking && ev.rewardHacking.materializedAt;
        if (t && t.slice(0, 10) > updated) updated = t.slice(0, 10);
      });
    });

    return { indexVersion, updated, models };
  }

  toStandard(parsed) {
    return normalizer.fromArray(this.cfg.id, parsed.models, function (mm, idx) {
      return {
        name: mm.model, score: mm.indexScore, rank: idx,
        updated: parsed.updated || CONFIG.TODAY,
        metrics: {
          cost: mm.costUsd, latencyS: mm.wallTimeSec, steps: mm.steps,
          frontiercode: mm.frontiercode, terminalBench: mm.terminalBench, sweAtlas: mm.sweAtlas
        },
        meta: { harness: mm.agent, effort: mm.effort }
      };
    });
  }

  writeContent(parsed) {
    const R = CONFIG.REFRESHED_AT;
    const agents = [];
    parsed.models.forEach(function (mm) { if (mm.agent && agents.indexOf(mm.agent) < 0) agents.push(mm.agent); });
    // 模型级去重:同一模型的不同推理档位(GPT-6.1 Terra 的 max/xhigh/high/medium/low/none)只算一个
    const modelNames = {};
    parsed.models.forEach(function (mm) {
      if (mm.multiModel) return;
      const base = String(mm.model).replace(/\([^)]*\)/g, "")
        .replace(/[\s\-_/.]+(?:xhigh|high|max|medium|low|thinking|think)\s*$/i, "").trim();
      if (base) modelNames[base] = 1;
    });
    return writers.windowVarTemplate("AACODING",
      "// 数据源:Artificial Analysis Coding Agent Index " + parsed.indexVersion + "(源站更新 " + (parsed.updated || "未知") + ")\n" +
      "// 来源:" + this.cfg.url + "\n" +
      "// 字段:models[]=agent×model×推理档位配置(按 indexScore 降序);indexScore=综合指数(%);\n" +
      "//      frontiercode/terminalBench/sweAtlas=三项子基准得分(%);costUsd=每任务平均 API 成本($);\n" +
      "//      wallTimeSec=每任务 agent 墙钟耗时(秒);steps/totalTokens=每任务平均步数与 token;\n" +
      "//      multiModel=true 表示模型列是多个模型的组合(仅在权威页展示)。\n" +
      "// 用途:仅收录到「权威基准测试」页展示,不计入总览综合分与命中数。\n",
      {
        source: "Artificial Analysis Coding Agent Index",
        url: this.cfg.url,
        officialUrl: this.cfg.officialUrl,
        methodUrl: CONFIG.sources.aa_coding_agents.methodUrl,
        version: parsed.indexVersion,
        updated: parsed.updated,
        refreshedAt: R,
        channelPolicy: CONFIG.channelPolicy,
        agents: agents,
        indexComponents: [
          { name: "FrontierCode v1.1", tasks: 100, weight: 1 / 3 },
          { name: "Terminal-Bench 4.0", tasks: 66, weight: 1 / 3 },
          { name: "SWE-Atlas-QnA-AA", tasks: 124, weight: 1 / 3 }
        ],
        stats: { configs: parsed.models.length, models: Object.keys(modelNames).length, agents: agents.length },
        desc: "Artificial Analysis Coding Agent Index " + parsed.indexVersion + ":由 FrontierCode v1.1 + Terminal-Bench 4.0 + SWE-Atlas-QnA-AA 三项等权合成的编码 Agent 综合指数(每项取每题三次尝试的均值);榜单粒度为 agent × model × 推理档位配置,另记每任务平均成本、墙钟耗时、步数与 token。",
        models: parsed.models
      }
    );
  }
}

module.exports = registry.register(AaCodingAgentsSource);
