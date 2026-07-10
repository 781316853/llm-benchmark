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

// ===== 1) DeepSWE:抓取官方 JSON 端点(结构化,比解析 HTML 稳健)=====
// 端点规律:/artifacts/<version>/leaderboard-live.json,由榜单 v1/v1.1 切换器在客户端请求。
// v1.1(默认榜单,每日刷新)写入 data/deepswe.js;v1.0(历史榜单,同样每日刷新)写入 data/deepswe_v10.js。
// 两版 schema 一致;每模型取 Pass@1 最高的 run(与原站榜单一致)。
// 抓取单个版本:解析 rows -> 每模型最高 pass_at_1 -> 按 pass1 降序
// urlSlug=URL 路径段(站点用 v1 / v1.1);version=展示版本号(v1.0 / v1.1)
async function fetchDeepSweJson(urlSlug, opts) {
  opts = opts || {};
  const version = opts.version || urlSlug;
  const url = "https://deepswe.datacurve.ai/artifacts/" + urlSlug + "/leaderboard-live.json";
  console.log("[DeepSWE " + version + "] 抓取 " + url);
  const text = await fetchText(url);
  const data = JSON.parse(text);
  const nTasks = data.n_tasks_in_set || 113;
  // 字段映射:JSON -> 站点榜单展示字段;effort 为 null 记为 "-"
  const runs = (data.rows || []).map((r) => ({
    name: r.model, effort: r.reasoning_effort || "-",
    pass1: Math.round(r.pass_at_1 * 100),
    ci: Math.round(r.ci_half * 100),
    cost: Math.round(r.mean_cost_usd * 100) / 100,
    outTok: Math.round(r.mean_output_tokens),
    steps: Math.round(r.mean_agent_steps)
  }));
  if (!runs.length) throw new Error("未解析到任何 run");
  // 每模型取 pass1 最高的一条,再按 pass1 降序
  const best = {};
  runs.forEach((r) => { if (!best[r.name] || r.pass1 > best[r.name].pass1) best[r.name] = r; });
  const models = Object.values(best).sort((a, b) => b.pass1 - a.pass1);
  let content;
  if (opts.isV11) {
    // v1.1 -> data/deepswe.js (window.DEEPSWE)
    content =
`// 数据源1:DeepSWE 基准快照(云端抓取)
// 来源:https://deepswe.datacurve.ai/  (更新于 ${TODAY})
// 字段说明:name=模型名;effort=推理强度;pass1=Pass@1(%);ci=置信区间(±%);
//          cost=平均单任务成本($);outTok=平均输出 tokens;steps=平均 Agent 步数
// 注:抓取 /artifacts/v1.1/leaderboard-live.json;每模型取 Pass@1 最高的 run(与原站榜单一致)。
window.DEEPSWE = {
  source: "DeepSWE",
  url: "https://deepswe.datacurve.ai/",
  updated: "${TODAY}",
  version: "${version}",
  stats: { tasks: ${nTasks}, repos: 91, languages: 5, models: ${models.length} },
  desc: "在原创、长程软件工程任务上评测前沿编码 Agent(无污染、91 仓库、5 种语言)。",
  models: ${JSON.stringify(models, null, 2).replace(/"/g, "'")}
};
`;
    writeFileIfChanged(path.join(DATA, "deepswe.js"), content);
  } else {
    // v1.0 -> data/deepswe_v10.js (window.DEEPSWE_V10)
    content =
`// 数据源1b:DeepSWE v1.0 历史榜单快照(每日刷新)
// 来源:https://deepswe.datacurve.ai/ 榜单 "v1" 切换器
// 抓取方式:/artifacts/v1/leaderboard-live.json(结构化 JSON,由站点榜单 v1 视图在客户端请求)。
// 字段同 deepswe.js;effort 为 null 记为 "-"。与 v1.1 由 js/data.js 的 deepSwe() 合并展示。
window.DEEPSWE_V10 = {
  source: "DeepSWE",
  url: "https://deepswe.datacurve.ai/",
  version: "${version}",
  captured: "${TODAY}",
  stats: { models: ${models.length} },
  desc: "DeepSWE v1.0 历史榜单(测试了更多模型),作为 v1.1 的补充数据合入展示。",
  models: ${JSON.stringify(models, null, 2).replace(/"/g, "'")}
};
`;
    writeFileIfChanged(path.join(DATA, "deepswe_v10.js"), content);
  }
  return models.length;
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
  // DeepSWE v1.1
  const ds = loadJsGlobal("deepswe.js", "DEEPSWE");
  if (ds && Array.isArray(ds.models)) ds.models.forEach(function (m) { add("deepswe", m.name); });
  // DeepSWE v1.0(历史榜单模型也纳入首次上榜追踪)
  const ds10 = loadJsGlobal("deepswe_v10.js", "DEEPSWE_V10");
  if (ds10 && Array.isArray(ds10.models)) ds10.models.forEach(function (m) { add("deepswe", m.name); });
  // Vibe Code
  const vc = loadJsGlobal("vibecode.js", "VIBECODE");
  if (vc && Array.isArray(vc.models)) vc.models.forEach(function (m) { add("vibe", m.name); });
  // llm2014(遍历所有月份取模型并集)
  const lm = loadJsGlobal("llm2014.js", "LLM2014");
  if (lm && lm.months) Object.keys(lm.months).forEach(function (mk) {
    const mo = lm.months[mk];
    if (mo && Array.isArray(mo.rows)) mo.rows.forEach(function (r) { add("llm", r.model); });
  });
  // SWE-bench Pro
  const swe = loadJsGlobal("swebench.js", "SWEBENCH");
  if (swe && Array.isArray(swe.models)) swe.models.forEach(function (m) { add("swebench", m.name); });
  // Terminal-Bench 2.1
  const tb = loadJsGlobal("tbench.js", "TBENCH");
  if (tb && Array.isArray(tb.models)) tb.models.forEach(function (m) { add("tbench", m.model); });
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

// ===== 4) SWE-bench Pro:llm-stats.com vendor 聚合榜 =====
// 数据源:llm-stats.com —— 厂商自报分数聚合(顶级 ~80%,含 Fable5/Opus4.8/GLM-5.2 等 35 个模型)
// 注:Scale SEAL 标准化榜单(labs.scale.com)受 Cloudflare 保护(返回 403),已移除以规避反爬风险。
//     llm-stats 作为聚合源已覆盖足够多的模型,数据来源于各厂商公开报告。
async function fetchSweBench() {
  console.log("[SWE-bench Pro] 抓取 https://llm-stats.com/benchmarks/swe-bench-pro");
  const lsHtml = await fetchText("https://llm-stats.com/benchmarks/swe-bench-pro");
  const trs = lsHtml.match(/<tr[\s\S]*?<\/tr>/g) || [];
  const models = [];
  trs.forEach((tr) => {
    // 提取 <a href="/models/xxx">模型名</a> 与紧随其后的厂商文本
    const nameM = tr.match(/<a[^>]*href="\/models\/[^"]*"[^>]*>([^<]+)<\/a>/);
    const vendorM = tr.match(/<\/a>\s*<\/td>\s*<td[^>]*>([^<]+)/);
    // 提取 score(0.xxx 小数格式,llm-stats 使用 0-1 区间)
    const scoreM = tr.match(/>\s*(0\.\d{3})\s*</);
    if (nameM && scoreM) {
      models.push({
        name: nameM[1].trim(),
        source: "llm-stats",
        score: Math.round(parseFloat(scoreM[1]) * 1000) / 10,
        vendor: vendorM ? vendorM[1].trim() : ""
      });
    }
  });
  if (!models.length) throw new Error("SWE-bench Pro 未解析到任何模型");
  console.log("  [llm-stats] 解析到 " + models.length + " 个模型");
  // 按分数降序
  models.sort((a, b) => b.score - a.score);

  const content =
`// 数据源4:SWE-bench Pro 快照(云端抓取)
// 数据源:llm-stats.com vendor 聚合榜(厂商自报分数聚合)
// 更新于 ${TODAY}
// SWE-bench Pro:731 题,41 仓库,4 语言(Py/Go/TS/JS),统一 scaffold 评分,抗污染设计,远难于 Verified
// llm-stats:聚合各厂商公开报告的 Pass@1 分数(顶级 ~80%,含 Fable5/Opus4.8/GLM-5.2 等 35 个模型)
// 字段说明:name=模型名;score=Pass@1(%);source=数据来源;vendor=厂商
window.SWEBENCH = {
  source: "SWE-bench Pro",
  url: "https://llm-stats.com/benchmarks/swe-bench-pro",
  updated: "${TODAY}",
  variant: "Pro (llm-stats aggregate)",
  stats: { tasks: 731, repos: 41, languages: 4, models: ${models.length} },
  desc: "Scale AI SWE-bench Pro:731 题公开集,41 个专业仓库,4 种语言(Py/Go/TS/JS),统一 scaffold 评分,抗污染设计,远难于 Verified。数据源为 llm-stats.com 厂商自报分数聚合。",
  models: ${JSON.stringify(models, null, 2).replace(/"/g, "'")}
};
`;
  writeFileIfChanged(path.join(DATA, "swebench.js"), content);
}

// ===== 5) Terminal-Bench 2.1:多源聚合(tbench.ai 官方榜 + roybench.org OMP 榜) =====
// 数据源1:tbench.ai 官方排行榜 —— Agent+Model 组合条目(官方验证,13 条)
// 数据源2:roybench.org OMP 排行榜 —— 开源 JSON API,38 条(更多模型组合)
// 合并策略:全部保留(含 agent/model 组合),前端按 canonical 取最高分归入
async function fetchTBench() {
  console.log("[Terminal-Bench 2.1] 多源聚合抓取");

  // --- 源1:tbench.ai 官方排行榜 ---
  const tbModels = [];
  try {
    console.log("  [tbench.ai] 抓取 https://www.tbench.ai/leaderboard/terminal-bench/2.1");
    const html = await fetchText("https://www.tbench.ai/leaderboard/terminal-bench/2.1");
    const cleaned = html.replace(/<!--\s*-->/g, "");
    const re = /<span>([^<]+)<\/span><\/td>\s*<td[^>]*><span>([^<]+)<\/span><\/td>\s*<td[^>]*>(\d{4}-\d{2}-\d{2})<\/td>\s*<td[^>]*>([^<]*)<\/td>\s*<td[^>]*>(?:<span>)?([^<]*)(?:<\/span>)?<\/td>\s*<td[^>]*>(?:<p[^>]*>)?<span[^>]*>(\d+(?:\.\d+)?)%<\/span>\s*<span[^>]*>±\s*(\d+(?:\.\d+)?)/g;
    let m;
    while ((m = re.exec(cleaned)) !== null) {
      tbModels.push({
        source: "tbench.ai",
        agent: htmlDecode(m[1].trim()),
        model: htmlDecode(m[2].trim()),
        date: m[3].trim(),
        agentOrg: htmlDecode(m[4].trim()),
        modelOrg: htmlDecode(m[5].trim()),
        score: Math.round(parseFloat(m[6]) * 100) / 100,
        ci: Math.round(parseFloat(m[7]) * 100) / 100
      });
    }
    console.log("  [tbench.ai] 解析到 " + tbModels.length + " 条记录");
  } catch (e) {
    console.log("  [tbench.ai] 抓取失败,跳过: " + e.message);
  }

  // --- 源2:roybench.org OMP 排行榜(JSON API) ---
  console.log("  [roybench] 抓取 https://roybench.org/data/leaderboard.json");
  const rbModels = [];
  try {
    const rbJson = await fetchText("https://roybench.org/data/leaderboard.json");
    const rbData = JSON.parse(rbJson);
    (rbData.items || []).forEach((it) => {
      // 只收录有通过任务数的记录(passed_count > 0),避免配置失败的零分噪音
      if (!it.passed_count || it.passed_count <= 0) return;
      const total = it.terminal_count || 88;
      rbModels.push({
        source: "roybench OMP",
        agent: it.harness || "OMP",
        model: it.model,
        score: Math.round((it.passed_count / total) * 1000) / 10,
        ci: null,
        backend: it.backend,
        think: it.reasoning_effort,
        passed: it.passed_count,
        total: total
      });
    });
    console.log("  [roybench] 解析到 " + rbModels.length + " 条记录");
  } catch (e) {
    console.log("  [roybench] 抓取失败,跳过: " + e.message);
  }

  const models = tbModels.concat(rbModels);
  if (!models.length) throw new Error("Terminal-Bench 两源均未解析到数据");
  // 按分数降序
  models.sort((a, b) => b.score - a.score);
  const content =
`// 数据源5:Terminal-Bench 2.1 多源聚合快照(云端抓取)
// 数据源:tbench.ai 官方排行榜 + roybench.org OMP 排行榜
// 更新于 ${TODAY}
// tbench.ai:89 个终端任务,确定性评分(exit code / 文件 diff / 输出 regex),官方验证条目
// roybench OMP:开源多模型批量评测,更多模型组合(kimi-k2.7-code/deepseek-v4-pro/grok-4.3 等)
// 合并策略:全部保留(含 agent/model 组合),前端按 canonical 取最高分归入
// 字段说明:agent=运行框架;model=模型名;score=准确率(%);ci=置信区间(±%);source=数据来源;date/orgs=元数据
window.TBENCH = {
  source: "Terminal-Bench 2.1",
  url: "https://www.tbench.ai/leaderboard/terminal-bench/2.1",
  updated: "${TODAY}",
  version: "2.1",
  stats: { tasks: 89, entries: ${models.length} },
  desc: "Terminal-Bench 2.1:89 个终端任务,在 Linux 沙箱中用 bash 命令完成多步骤任务,确定性评分。聚合 tbench.ai 官方榜与 roybench.org OMP 榜。",
  models: ${JSON.stringify(models, null, 2).replace(/"/g, "'")}
};
`;
  writeFileIfChanged(path.join(DATA, "tbench.js"), content);
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
  // DeepSWE:v1.1(默认榜单)与 v1.0(历史榜单)分别抓取,各自独立容错
  // 注意 URL 路径段:v1.1 用 "v1.1",v1.0 用 "v1"(站点命名);展示版本号分别为 v1.1 / v1.0
  const deepJobs = [
    ["DeepSWE v1.1", () => fetchDeepSweJson("v1.1", { isV11: true, version: "v1.1" })],
    ["DeepSWE v1.0", () => fetchDeepSweJson("v1", { isV11: false, version: "v1.0" })]
  ];
  for (const [name, fn] of deepJobs) {
    try { await fn(); }
    catch (e) { console.log("[" + name + "] 抓取失败,保留旧文件: " + e.message); }
  }
  // 其余四源(Vibe / llm2014 / SWE-bench Pro / Terminal-Bench)
  for (const [name, fn] of [["Vibe", fetchVibe], ["llm2014", fetchLlm], ["SWE-bench Pro", fetchSweBench], ["Terminal-Bench", fetchTBench]]) {
    try { await fn(); }
    catch (e) { console.log("[" + name + "] 抓取失败,保留旧文件: " + e.message); }
  }
  // 三源抓取后,维护首次上榜记录(读取最新写入的 data/*.js)
  try { updateSeen(); }
  catch (e) { console.log("[seen] 维护失败:" + e.message); }
  console.log("完成 @ " + TODAY);
})();
