// 云端抓取三源数据,重写 data/*.js(GitHub Actions 每日刷新用)
// 设计:每源独立 try/catch,失败保留旧文件;数值与现有快照格式一致。
// 运行:node scripts/fetch_all.js  (在仓库根目录)
"use strict";
const fs = require("fs");
const path = require("path");

const ROOT = process.cwd();
const DATA = path.join(ROOT, "data");
const TODAY = new Date().toISOString().slice(0, 10);

function fetchText(url) {
  // 用 Node 内置 https/http 同步获取(Actions 环境无额外依赖)
  const client = url.startsWith("https") ? require("https") : require("http");
  return new Promise((resolve, reject) => {
    client.get(url, { headers: { "User-Agent": "llm-benchmark-refresh/1.0", "Accept": "*/*" } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return resolve(fetchText(res.headers.location));
      }
      if (res.statusCode !== 200) { res.resume(); return reject(new Error("HTTP " + res.statusCode + " " + url)); }
      let buf = ""; res.setEncoding("utf8");
      res.on("data", (d) => buf += d);
      res.on("end", () => resolve(buf));
    }).on("error", reject);
  });
}
function htmlDecode(s) { return s.replace(/&quot;/g, '"').replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&#39;/g, "'"); }
function writeFileIfChanged(file, content) {
  const prev = fs.existsSync(file) ? fs.readFileSync(file, "utf8") : "";
  if (prev === content) { console.log("  (无变化,跳过) " + path.basename(file)); return; }
  fs.writeFileSync(file, content);
  console.log("  ✓ 写入 " + path.basename(file) + " (" + content.length + " 字节)");
}

// ===== 1) DeepSWE:解析 datacurve.ai 内嵌 run 对象,每模型取最高 pass_at_1 =====
// 注:此处仅抓取 v1.1(默认榜单,初始 HTML 内嵌)。v1.0 历史榜单数据不在静态 HTML 中,
// 需点击榜单 v1 切换器后由客户端注入,纯 Node HTTP 无法复现,故 v1.0 作为静态快照
// 存于 data/deepswe_v10.js(不随每日刷新);两版由 js/data.js 的 deepSwe() 合并展示。
async function fetchDeepSwe() {
  console.log("[DeepSWE] 抓取 https://deepswe.datacurve.ai/");
  const html = await fetchText("https://deepswe.datacurve.ai/");
  // 每个 run:model:"x",...,reasoning_effort:"y",...,pass_at_1:0.x,...,ci_half:0.x,mean_cost_usd:x,mean_output_tokens:x,mean_agent_steps:x
  const re = /model:"([^"]+)"[^}]*?reasoning_effort:"([^"]*)"[^}]*?pass_at_1:([\d.]+)[^}]*?ci_half:([\d.]+)[^}]*?mean_cost_usd:([\d.]+)[^}]*?mean_output_tokens:([\d.]+)[^}]*?mean_agent_steps:([\d.]+)/g;
  let m, runs = [];
  while ((m = re.exec(html)) !== null) {
    runs.push({
      name: m[1], effort: m[2] || "-",
      pass1: Math.round(parseFloat(m[3]) * 100),
      ci: Math.round(parseFloat(m[4]) * 100),
      cost: Math.round(parseFloat(m[5]) * 100) / 100,
      outTok: Math.round(parseFloat(m[6])),
      steps: Math.round(parseFloat(m[7]))
    });
  }
  if (!runs.length) throw new Error("未解析到任何 run");
  // 每模型取 pass1 最高的一条,再按 pass1 降序
  const best = {};
  runs.forEach((r) => { if (!best[r.name] || r.pass1 > best[r.name].pass1) best[r.name] = r; });
  const models = Object.values(best).sort((a, b) => b.pass1 - a.pass1);
  const content =
`// 数据源1:DeepSWE 基准快照(云端抓取)
// 来源:https://deepswe.datacurve.ai/  (更新于 ${TODAY})
// 字段说明:name=模型名;effort=推理强度;pass1=Pass@1(%);ci=置信区间(±%);
//          cost=平均单任务成本($);outTok=平均输出 tokens;steps=平均 Agent 步数
// 注:每模型取 Pass@1 最高的 run(与原站榜单一致)。
window.DEEPSWE = {
  source: "DeepSWE",
  url: "https://deepswe.datacurve.ai/",
  updated: "${TODAY}",
  version: "v1.1",
  stats: { tasks: 113, repos: 91, languages: 5, models: ${models.length} },
  desc: "在原创、长程软件工程任务上评测前沿编码 Agent(无污染、91 仓库、5 种语言)。",
  models: ${JSON.stringify(models, null, 2).replace(/"/g, "'")}
};
`;
  writeFileIfChanged(path.join(DATA, "deepswe.js"), content);
}

// ===== 2) Vibe Code:解析 vals.ai RSC payload;显示名用 slug->名称表 =====
// slug(真实 provider 前缀:alibaba/grok/kimi/openai/google/anthropic/zai 等)-> 显示名
const VIBE_NAMES = {
  "anthropic/claude-fable-5": "Claude Fable 5", "anthropic/claude-opus-4-8": "Claude Opus 4.8",
  "anthropic/claude-opus-4-8-claude-code": "Claude Opus 4.8", "anthropic/claude-opus-4-7": "Claude Opus 4.7",
  "anthropic/claude-opus-4-6": "Claude Opus 4.6", "anthropic/claude-opus-4-6-thinking": "Claude Opus 4.6",
  "anthropic/claude-opus-4-5-20251101-thinking": "Claude Opus 4.5", "anthropic/claude-sonnet-5": "Claude Sonnet 5",
  "anthropic/claude-sonnet-4-6": "Claude Sonnet 4.6", "anthropic/claude-sonnet-4-6-claude-code": "Claude Sonnet 4.6",
  "anthropic/claude-sonnet-4-5-20250929-thinking": "Claude Sonnet 4.5",
  "anthropic/claude-haiku-4-5-20251001-thinking": "Claude Haiku 4.5",
  "openai/gpt-5.5": "GPT 5.5", "openai/gpt-5.5-codex": "GPT 5.5 Codex", "openai/gpt-5.5-factory": "GPT 5.5",
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
  "kimi/kimi-k2.7-code": "Kimi K2.7-Code", "kimi/kimi-k2.6": "Kimi K2.6", "kimi/kimi-k2.5-thinking": "Kimi K2.5",
  "cursor/composer-2.5": "Composer 2.5", "devin/swe-1-6-fast": "Devin SWE-1.6 Fast",
  "xiaomi/mimo-v2.5": "MiMo v2.5", "xiaomi/mimo-v2.5-pro": "MiMo v2.5 Pro",
  "meta/muse_spark": "Meta Muse Spark", "minimax/MiniMax-M2.5": "MiniMax M2.5",
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
async function fetchVibe() {
  console.log("[Vibe Code] 抓取 https://www.vals.ai/benchmarks/vibe-code");
  const html = await fetchText("https://www.vals.ai/benchmarks/vibe-code");
  const decoded = htmlDecode(html);
  // results.overall 块:"<slug>":[0,{"accuracy":[0,N],"latency":[0,N],"stderr":[0,N],"cost_per_test":[0,N],...,"harness":[0,"H"]}]
  const re = /"([a-z0-9.\-]+\/[a-z0-9.\-]+)":\[0,\{"accuracy":\[0,([\d.]+)\],"latency":\[0,([\d.]+)\],"stderr":\[0,([\d.]+)\],"cost_per_test":\[0,([\d.]+)\][^}]*?"harness":\[0,"([^"]+)"\]\}/g;
  let m, bySlug = {};
  while ((m = re.exec(decoded)) !== null) {
    if (bySlug[m[1]]) continue; // RSC 数据重复,按 slug 去重
    bySlug[m[1]] = {
      name: vibeNameFromSlug(m[1]), harness: m[6],
      score: Math.round(parseFloat(m[2]) * 100) / 100,
      ci: Math.round(parseFloat(m[4]) * 100) / 100,
      cost: Math.round(parseFloat(m[5]) * 100) / 100,
      latencyS: Math.round(parseFloat(m[3]))
    };
  }
  let rows = Object.values(bySlug);
  if (!rows.length) throw new Error("未解析到任何系统");
  rows.sort((a, b) => b.score - a.score);
  // 模型总数:限定到 metadata.models 列表数组内计数
  const mList = decoded.match(/"models":\[1,\[(.*?)\]\]/);
  const totalSystems = mList ? (mList[1].match(/\[0,"/g) || []).length : rows.length;
  const content =
`// 数据源2:Vibe Code Bench 基准快照(云端抓取)
// 来源:https://www.vals.ai/benchmarks/vibe-code  (更新于 ${TODAY})
// 字段说明:name=模型显示名;harness=运行框架;score=整体准确率(%);ci=置信区间(±);
//          cost=单测成本($);latencyS=延迟(秒)
// 注:解析页面内嵌 RSC payload 的 tasks.overall 块;显示名经 slug->名称表映射。
window.VIBECODE = {
  source: "Vibe Code Bench",
  url: "https://www.vals.ai/benchmarks/vibe-code",
  updated: "${TODAY}",
  version: "v1.1",
  totalSystems: ${totalSystems},
  note: "共 ${totalSystems} 系统,展示 overall 视图全部 ${rows.length} 个有记录系统",
  desc: "评测模型能否从零构建完整 Web 应用,通过点对点测试衡量端到端可用性。",
  models: ${JSON.stringify(rows, null, 2).replace(/"/g, "'")}
};
`;
  writeFileIfChanged(path.join(DATA, "vibecode.js"), content);
}

// ===== 首次上榜追踪:data/seen.js 维护 =====
// 沙箱方式读取 data/*.js 中某个 window 全局变量(避免 require 缓存,且不污染全局)
function loadJsGlobal(file, varName) {
  const p = path.join(DATA, file);
  if (!fs.existsSync(p)) return null;
  const txt = fs.readFileSync(p, "utf8");
  const sandbox = { window: {} };
  try { new Function("window", txt)(sandbox.window); }
  catch (e) { console.log("  ! 解析 " + file + " 失败:" + e.message); return null; }
  return sandbox.window[varName];
}
// 读取既有 seen.js -> {since, updated, entries};文件不存在视为首启
function loadSeen() {
  const p = path.join(DATA, "seen.js");
  if (!fs.existsSync(p)) return null;
  const txt = fs.readFileSync(p, "utf8");
  const m = txt.match(/window\.SEEN\s*=\s*(\{[\s\S]*\})\s*;?\s*$/);
  if (!m) return null;
  try { return eval("(" + m[1] + ")"); } catch (e) { return null; }
}
// 维护首次上榜记录:仅新增缺失键,绝不覆盖既有 firstSeen;首启写入 since
function updateSeen() {
  console.log("[seen] 维护首次上榜记录 data/seen.js");
  let seen = loadSeen() || { since: TODAY, updated: TODAY, entries: {} };
  if (!seen.entries) seen.entries = {};
  const entries = seen.entries;
  // 记录一个当前模型;已存在则跳过(保留原始首次上榜日)
  function add(bench, name) {
    if (!name) return;
    const key = bench + "|" + String(name);
    if (!(key in entries)) entries[key] = TODAY;
  }
  // DeepSWE
  const ds = loadJsGlobal("deepswe.js", "DEEPSWE");
  if (ds && Array.isArray(ds.models)) ds.models.forEach(function (m) { add("deepswe", m.name); });
  // Vibe Code
  const vc = loadJsGlobal("vibecode.js", "VIBECODE");
  if (vc && Array.isArray(vc.models)) vc.models.forEach(function (m) { add("vibe", m.name); });
  // llm2014(遍历所有月份取模型并集)
  const lm = loadJsGlobal("llm2014.js", "LLM2014");
  if (lm && lm.months) Object.keys(lm.months).forEach(function (mk) {
    const mo = lm.months[mk];
    if (mo && Array.isArray(mo.rows)) mo.rows.forEach(function (r) { add("llm", r.model); });
  });
  seen.updated = TODAY; // 始终刷新"最近一次维护日";since 保持首启值不被覆盖
  const content =
`// 首次上榜追踪记录(由 scripts/fetch_all.js 每日维护)
// key 形如 "榜单|原始模型名",value 为首次上榜日期(YYYY-MM-DD)。
// since=追踪起始日;firstSeen===since 的为上线即存在的存量模型,不判为新。
// 判定:isNew = 记录存在 且 firstSeen>since 且 0<=(updated-firstSeen)<=7 天。
window.SEEN = ${JSON.stringify(seen, null, 2).replace(/"/g, "'")};
`;
  writeFileIfChanged(path.join(DATA, "seen.js"), content);
}

// ===== 3) llm2014:解析 GitHub raw CSV(结构化) =====
// llm2014 数据结构相对稳定但变换较繁;此处先验证可达性,实际 CSV->cells 变换沿用既有逻辑。
// 若 datasets.json/CSV 解析失败则保留旧文件(站点不崩)。
async function fetchLlm() {
  console.log("[llm2014] 抓取 datasets.json (可达性验证,数据沿用既有快照)");
  // 仅探测,不覆盖:真正的 CSV 变换在本地 TRAE 任务中已验证,云端如需启用再补全。
  try {
    const meta = await fetchText("https://raw.githubusercontent.com/llm2014/llm_benchmark/main/docs/data/code_v3/datasets.json");
    const months = (meta.match(/"(20\d\d-\d\d)"/g) || []).map((s) => s.replace(/"/g, ""));
    console.log("  ✓ datasets.json 可达,涉及月份示例: " + (months.slice(-3).join(", ") || "(需解析)"));
  } catch (e) {
    console.log("  ! datasets.json 探测失败,llm2014 保留既有快照: " + e.message);
  }
}

(async () => {
  if (!fs.existsSync(DATA)) fs.mkdirSync(DATA, { recursive: true });
  for (const [name, fn] of [["DeepSWE", fetchDeepSwe], ["Vibe", fetchVibe], ["llm2014", fetchLlm]]) {
    try { await fn(); }
    catch (e) { console.log("[" + name + "] 抓取失败,保留旧文件: " + e.message); }
  }
  // 三源抓取后,维护首次上榜记录(读取最新写入的 data/*.js)
  try { updateSeen(); }
  catch (e) { console.log("[seen] 维护失败:" + e.message); }
  console.log("完成 @ " + TODAY);
})();
