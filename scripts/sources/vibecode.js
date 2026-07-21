// 数据源:Vibe Code Bench(vals.ai)
// 迁移自原 fetch_all.js 的 fetchVibe + VIBE_NAMES + vibeNameFromSlug。
// 解析页面内嵌 RSC payload 的 tasks.overall 块;显示名经 slug->名称表映射。
// 输出格式与原脚本逐字节等价(window.VIBECODE)。
"use strict";
const BaseSource = require("../lib/BaseSource");
const registry = require("../lib/registry");
const transport = require("../lib/transport");
const normalizer = require("../lib/normalizer");
const writers = require("../lib/writers");
const CONFIG = require("../lib/config");

// slug(真实 provider 前缀)-> 显示名(迁移自原脚本 VIBE_NAMES,保持完整一致)
const VIBE_NAMES = {
  "anthropic/claude-fable-5": "Claude Fable 5", "anthropic/claude-opus-4-8": "Claude Opus 4.8",
  "anthropic/claude-opus-4-8-claude-code": "Claude Opus 4.8", "anthropic/claude-opus-4-7": "Claude Opus 4.7",
  "anthropic/claude-opus-4-6": "Claude Opus 4.6", "anthropic/claude-opus-4-6-thinking": "Claude Opus 4.6",
  "anthropic/claude-opus-4-5-20251101-thinking": "Claude Opus 4.5", "anthropic/claude-sonnet-5": "Claude Sonnet 5",
  "anthropic/claude-sonnet-4-6": "Claude Sonnet 4.6", "anthropic/claude-sonnet-4-6-claude-code": "Claude Sonnet 4.6",
  "anthropic/claude-sonnet-4-5-20250929-thinking": "Claude Sonnet 4.5",
  "anthropic/claude-haiku-4-5-20251001-thinking": "Claude Haiku 4.5",
  "openai/gpt-5.5": "GPT 5.5", "openai/gpt-5.5-codex": "GPT 5.5 Codex", "openai/gpt-5.5-factory": "GPT 5.5",
  "openai/gpt-5.6-sol": "GPT 5.6 Sol", "openai/gpt-5.6-terra": "GPT 5.6 Terra", "openai/gpt-5.6-luna": "GPT 5.6 Luna",
  "openai/gpt-5.4": "GPT 5.4", "openai/gpt-5.4-2026-03-05": "GPT 5.4", "openai/gpt-5.4-mini-2026-03-17": "GPT 5.4 Mini",
  "openai/gpt-5.4-nano-2026-03-17": "GPT 5.4 Nano", "openai/gpt-5.3-codex": "GPT 5.3 Codex",
  "openai/gpt-5.2-2025-12-11": "GPT 5.2", "openai/gpt-5.2-codex": "GPT 5.2 Codex",
  "openai/gpt-5.1-2025-11-13": "GPT 5.1", "openai/gpt-5.1-codex": "GPT 5.1 Codex", "openai/gpt-5.1-codex-max": "GPT 5.1 Codex",
  "openai/gpt-5-2025-08-07": "GPT 5", "openai/gpt-5-mini-2025-08-07": "GPT 5 Mini",
  "grok/grok-4.5": "Grok 4.5", "grok/grok-4.3": "Grok 4.3", "grok/grok-4.20-0309-reasoning": "Grok 4.20",
  "grok/grok-4-1-fast-reasoning": "Grok 4.1 Fast", "grok/grok-4-fast-reasoning": "Grok 4 Fast", "grok/grok-build-0.1": "Grok Build",
  "zai/glm-5.2": "GLM 5.2", "zai/glm-5.1": "GLM 5.1", "zai/glm-5-thinking": "GLM 5", "zai/glm-4.6": "GLM 4.6",
  "google/gemini-3.5-flash": "Gemini 3.5 Flash", "google/gemini-3.1-pro-preview": "Gemini 3.1 Pro",
  "google/gemini-3-flash-preview": "Gemini 3 Flash", "google/gemini-3-pro-preview": "Gemini 3 Pro",
  "google/gemini-3.1-flash-lite-preview": "Gemini 3.1 Flash Lite", "google/gemini-2.5-pro": "Gemini 2.5 Pro",
  "deepseek/deepseek-v4-pro": "DeepSeek V4 Pro", "fireworks/deepseek-v3p2-thinking": "DeepSeek V3.2",
  "alibaba/qwen3.7-max": "Qwen3.7-Max", "alibaba/qwen3.7-plus": "Qwen3.7-Plus", "alibaba/qwen3.6-plus": "Qwen3.6-Plus",
  "alibaba/qwen3.6-27b": "Qwen3.6-27B", "alibaba/qwen3.5-plus-thinking": "Qwen3.5-Plus", "alibaba/qwen3-max": "Qwen3-Max",
  "kimi/kimi-k2.7-code": "Kimi K2.7-Code", "kimi/kimi-k2.6": "Kimi K2.6", "kimi/kimi-k2.5-thinking": "Kimi K2.5", "kimi/kimi-k3": "Kimi K3",
  "cursor/composer-2.5": "Composer 2.5", "devin/swe-1-6-fast": "Devin SWE-1.6 Fast",
  "xiaomi/mimo-v2.5": "MiMo v2.5", "xiaomi/mimo-v2.5-pro": "MiMo v2.5 Pro",
  "meta/muse_spark": "Meta Muse Spark", "meta/muse_spark_1_1": "Meta Muse Spark 1.1", "minimax/MiniMax-M2.5": "MiniMax M2.5",
  "minimax/MiniMax-M2.7": "MiniMax M2.7", "minimax/MiniMax-M3": "MiniMax M3",
  "mistralai/mistral-medium-3.5": "Mistral Medium 3.5", "mistralai/mistral-small-2603": "Mistral Small",
  "nvidia/nemotron-3-ultra-550b-a55b": "Nemotron 3 Ultra",
  "poolside/laguna-m.1": "Laguna M.1", "poolside/laguna-xs.2": "Laguna XS.2",
  "cohere/command-a-plus-05-2026": "Command A+"
};
function vibeNameFromSlug(slug) {
  if (VIBE_NAMES[slug]) return VIBE_NAMES[slug];
  const tail = slug.split("/").pop().replace(/-/g, " ");
  return tail.charAt(0).toUpperCase() + tail.slice(1) + " [新]";
}

class VibeCodeSource extends BaseSource {
  constructor() {
    super({
      id: "vibecode", name: "Vibe Code", type: "rsc",
      url: CONFIG.sources.vibecode.url, host: CONFIG.sources.vibecode.host,
      outFile: "vibecode.js", windowVar: "VIBECODE"
    });
  }
  async fetch() {
    const html = await transport.fetchWithRetry(this.cfg.url);
    // 与原脚本一致:先 htmlDecode 再正则
    return transport.htmlDecode(html);
  }
  parse(decoded) {
    // RSC payload:"<slug>":[0,{"accuracy":[0,N],"latency":[0,N],"stderr":[0,N],"cost_per_test":[0,N|null],...,"harness":[0,"H"]}]
    const re = /"([a-z0-9.\-_]+\/[a-z0-9.\-_]+)":\[0,\{"accuracy":\[0,([\d.]+)\],"latency":\[0,([\d.]+)\],"stderr":\[0,([\d.]+)\],"cost_per_test":\[0,(null|[\d.]+)\][^}]*?"harness":\[0,"([^"]+)"\]\}/g;
    let m, bySlug = {};
    while ((m = re.exec(decoded)) !== null) {
      if (bySlug[m[1]]) continue;
      bySlug[m[1]] = {
        name: vibeNameFromSlug(m[1]), harness: m[6],
        score: Math.round(parseFloat(m[2]) * 100) / 100,
        ci: Math.round(parseFloat(m[4]) * 100) / 100,
        cost: m[5] === "null" ? 0 : Math.round(parseFloat(m[5]) * 100) / 100,
        latencyS: Math.round(parseFloat(m[3]))
      };
    }
    let rows = Object.values(bySlug);
    if (!rows.length) throw new Error("未解析到任何系统");
    rows.sort(function (a, b) { return b.score - a.score; });
    // 总系统数:限定到 metadata.models 列表数组内计数
    const mList = decoded.match(/"models":\[1,\[(.*?)\]\]/);
    const totalSystems = mList ? (mList[1].match(/\[0,"/g) || []).length : rows.length;
    return { rows: rows, totalSystems: totalSystems };
  }
  toStandard(parsed) {
    var srcId = this.cfg.id;
    return normalizer.fromArray(srcId, parsed.rows, function (m, idx) {
      return {
        name: m.name,
        score: m.score,
        rank: idx,
        updated: CONFIG.TODAY,
        metrics: { ci: m.ci, cost: m.cost, latencyS: m.latencyS, harness: m.harness }
      };
    });
  }
  writeContent(parsed) {
    // 严格复刻原脚本输出模板(字节等价):外层双引号,models 数组单引号
    const T = CONFIG.TODAY;
    const body = JSON.stringify(parsed.rows, null, 2).replace(/"/g, "'");
    return `// 数据源2:Vibe Code Bench 基准快照(云端抓取)
// 来源:https://www.vals.ai/benchmarks/vibe-code  (更新于 ${T})
// 字段说明:name=模型显示名;harness=运行框架;score=整体准确率(%);ci=置信区间(±);
//          cost=单测成本($);latencyS=延迟(秒)
// 注:解析页面内嵌 RSC payload 的 tasks.overall 块;显示名经 slug->名称表映射。
window.VIBECODE = {
  source: "Vibe Code Bench",
  url: "https://www.vals.ai/benchmarks/vibe-code",
  updated: "${T}",
  version: "v1.1",
  totalSystems: ${parsed.totalSystems},
  note: "共 ${parsed.totalSystems} 系统,展示 overall 视图全部 ${parsed.rows.length} 个有记录系统",
  desc: "评测模型能否从零构建完整 Web 应用,通过点对点测试衡量端到端可用性。",
  models: ${body}
};
`;
  }
}

module.exports = registry.register(VibeCodeSource);
