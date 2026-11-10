// 新模型自动发现与建档(data/models-auto.js)
// 目标:数据抓取完成后,把 data/models.js 尚未覆盖的模型原始名自动登记成 canonical,
//   避免新模型在页面上落成 vendor=「其他」的灰色条目,也避免同一模型的多种写法被拆散。
// 边界:
//   - 只扫描模型型榜单的模型级记录(models / configs / llm2014 months.rows / BenchCAD tasks.rows);
//     跳过 OSWorld 的 agent 系统、Vibe Code 的 model×harness 配置、Coding Plan 套餐、基线行与多模型组合。
//   - data/models.js 是人工维护的高优先级表;生成时先算它的候选键,已覆盖的写法一律不再建档。
//   - 厂商优先取记录自带的 vendor/org/creator;缺失时按模型名家族前缀推断;仍无法判断则归入「其他」并记录日志。
//   - 颜色取 data/models.js 的 vendorColors;未知厂商落 vendorDefaultColor。
//   - 输出按 id 排序、仅在内容变化时重写;models.js 手工条目的增删会自动反映到下一版 auto 文件。
"use strict";
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const CONFIG = require("./config");
const writers = require("./writers");
const modelMap = require("./model-map");

const AUTO_FILE = "models-auto.js";
const AUTO_VAR = "MODEL_MAP_AUTO";
const SKIP_FILES = new Set([
  "models.js", "models-auto.js", "seen.js", "quality.js", "changelog.js", "news.js", "pricing.js",
  "codingplan.js", "osworld.js", "vals_vibe_code.js"
]);

// 源记录里的模型名变体:ModelDial 的 model 是 slug、displayName 是展示名;
// arenaofbias 的 name 是 slug、modelName 是展示名。全部收集为别名,主名再择优。
function pickNames(r) {
  if (!r || typeof r !== "object" || r.multiModel) return [];
  const out = [];
  ["displayName", "model", "name", "modelName", "system"].forEach(function (k) {
    if (typeof r[k] === "string" && r[k].trim()) out.push(r[k].trim());
  });
  return Array.from(new Set(out));
}

function pickVendor(r) {
  if (!r || typeof r !== "object") return null;
  const v = r.vendor || r.org || r.creator ||
    (Array.isArray(r.modelCreators) && r.modelCreators[0] && (r.modelCreators[0].name || r.modelCreators[0].slug));
  if (typeof v !== "string") return null;
  const s = v.trim();
  return s && s !== "—" && s !== "-" ? s : null;
}

function cleanDisplay(raw) {
  return String(raw || "")
    .replace(/\(([^)]*)\)/g, function (m, inner) {
      return /^[\d\s\-/.年月日]+$/.test(inner.trim()) ? m : "";
    })
    .replace(/\[新\]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

const VENDOR_ALIASES = {
  anthropic: "Anthropic", openai: "OpenAI", google: "Google", alphabet: "Google",
  alibaba: "Alibaba", qwen: "Alibaba", deepseek: "DeepSeek", moonshot: "Moonshot", "moonshot ai": "Moonshot",
  "z.ai": "zAI", zai: "zAI", "z ai": "zAI", zhipu: "zAI", "zhipu ai": "zAI",
  bytedance: "ByteDance", minimax: "MiniMax", tencent: "Tencent", microsoft: "Microsoft", meta: "Meta",
  xai: "xAI", spacexai: "xAI", nvidia: "NVIDIA", mistral: "Mistral", xiaomi: "Xiaomi", cohere: "Cohere",
  "lg ai research": "LG AI Research", dots: "Dots", stealth: "STEALTH",
  "thinking machines": "Thinking Machines", north: "Cohere", "motif technologies": "Motif Technologies",
  upstage: "Upstage", "sk telecom": "SK Telecom", cursor: "Cursor", cognition: "Cognition",
  stepfun: "StepFun", sensetime: "SenseTime", "shanghai ai lab": "Shanghai AI Lab",
  "china telecom": "China Telecom", meituan: "Meituan", inclusionai: "inclusionAI", qoder: "Qoder",
  "reflection ai": "Reflection AI", poolside: "Poolside", fireworks: "Fireworks",
  inception: "Inception", "inception ai": "Inception", "liquid ai": "Liquid AI", liquidai: "Liquid AI",
  ibm: "IBM", openbmb: "OpenBMB", sarvam: "Sarvam", "arcee ai": "Arcee AI", "sapiens ai": "Sapiens AI",
  huawei: "Huawei", apodex: "Apodex", "multiverse computing": "Multiverse Computing", celeris: "Celeris",
  "paper instruments": "Paper Instruments", "ricursive intelligence": "Ricursive Intelligence",
  "institute of foundation models": "Institute of Foundation Models", "simular ai": "Simular AI",
  kwaiKat: "KwaiKAT", "kwaikat": "KwaiKAT", "kwai kat": "KwaiKAT"
};

function normVendor(v) {
  if (!v) return null;
  const s = String(v).trim();
  if (!s || s === "—" || s === "-") return null;
  return VENDOR_ALIASES[s.toLowerCase()] || s;
}

const PREFIX_RULES = [
  [/^(claude|anthropic|opus|sonnet|haiku|mythos|fable)\b/i, "Anthropic"],
  [/^(gpt|chatgpt|codex|o[1-4](?:-|\b))/i, "OpenAI"],
  [/^(gemini|gemma)\b/i, "Google"],
  [/^qwen[0-9.]*/i, "Alibaba"],
  [/^qwq\b/i, "Alibaba"],
  [/^deepseek\b/i, "DeepSeek"],
  [/^(kimi|k[23](?:[.\s-]|$))/i, "Moonshot"],
  [/^glm\b/i, "zAI"],
  [/^minimax\b/i, "MiniMax"],
  [/^grok\b/i, "xAI"],
  [/^llama\b/i, "Meta"],
  [/^muse\b/i, "Meta"],
  [/^(mistral|devstral|magistral|codestral)\b/i, "Mistral"],
  [/^nemotron\b/i, "NVIDIA"],
  [/^step\b/i, "StepFun"],
  [/^mimo\b/i, "Xiaomi"],
  [/^(doubao|seed)\b/i, "ByteDance"],
  [/^(hunyuan|hy\s*[0-9])/i, "Tencent"],
  [/^minicpm\b/i, "OpenBMB"],
  [/^granite\b/i, "IBM"],
  [/^lfm\b/i, "Liquid AI"],
  [/^mercury\b/i, "Inception"],
  [/^sarvam\b/i, "Sarvam"],
  [/^solar\b/i, "Upstage"],
  [/^trinity\b/i, "Arcee AI"],
  [/^(k-exaone|exaone)\b/i, "LG AI Research"],
  [/^north\b/i, "Cohere"],
  [/^kat-coder\b/i, "KwaiKAT"],
  [/^openpangu\b/i, "Huawei"],
  [/^agnes\b/i, "Sapiens AI"],
  [/^phi\b/i, "Microsoft"],
  [/^composer\b/i, "Cursor"],
  [/^swe-[0-9]/i, "Cognition"],
  [/^beam\b/i, "Reflection AI"],
  [/^qoder\b/i, "Qoder"],
  [/^space-bunny\b/i, "MiniMax"],
  [/^ling\b/i, "inclusionAI"],
  [/^xing[0-9.]/i, "China Telecom"],
  [/^longcat\b/i, "Meituan"],
  [/^atria\b/i, "Shanghai AI Lab"],
  [/^sensenova\b/i, "SenseTime"]
];

function inferVendor(name, rawVendor) {
  const v = normVendor(rawVendor);
  if (v) return v;
  const s = cleanDisplay(name);
  for (const [re, vendor] of PREFIX_RULES) if (re.test(s)) return vendor;
  return null;
}

// 排除非模型行:基线、占位名、多模型组合、基准名、agent 产品
function isNonModel(name) {
  if (String(name).trim().length < 2) return true;
  if (/^(n\/a|unknown|none|null|human|random|average|reference|oracle|baseline)$/i.test(name)) return true;
  if (/baseline/i.test(name)) return true;
  if (/\s\+\s/.test(name)) return true;
  if (/^(FrontierCode|Terminal-Bench|SWE-Atlas)\b/i.test(name)) return true;
  if (/^Copilot\b/i.test(name)) return true;
  return false;
}

const BRAND_CASE = {
  gpt: "GPT", glm: "GLM", qwen: "Qwen", kimi: "Kimi", deepseek: "DeepSeek", gemini: "Gemini",
  claude: "Claude", grok: "Grok", minimax: "MiniMax", mimo: "MiMo", nemotron: "Nemotron",
  lfm: "LFM", swe: "SWE", qwq: "QwQ", exaone: "EXAONE", phi: "Phi", llama: "Llama", gemma: "Gemma",
  k2: "K2", k3: "K3", o1: "o1", o3: "o3", o4: "o4", nvidia: "NVIDIA", openai: "OpenAI",
  ibm: "IBM", bmw: "BMW", ai: "AI", api: "API", v: "V"
};

// 仅做展示层大小写整理,不改变归一键;未知品牌保持原样
function prettify(name) {
  return String(name || "").replace(/\s+/g, " ").trim()
    .replace(/(^|[\s-])([A-Za-z][A-Za-z0-9.]*)/g, function (m, pre, word) {
      const key = word.toLowerCase();
      if (BRAND_CASE[key]) return pre + BRAND_CASE[key];
      if (/[A-Z]/.test(word)) return pre + word;
      return pre + word.charAt(0).toUpperCase() + word.slice(1);
    });
}

function displayScore(s) {
  let score = 0;
  if (/^[A-Z]/.test(s)) score += 3;
  else if (/^[a-z]/.test(s)) score -= 2;
  if (/\s/.test(s)) score += 1;
  if (/-/.test(s)) score -= 1;
  return score;
}

function loadWindow(file) {
  const sandbox = { window: {} };
  vm.createContext(sandbox);
  vm.runInContext(fs.readFileSync(file, "utf8"), sandbox, { filename: file });
  return sandbox.window;
}

function manualKeys() {
  const keys = new Set();
  (modelMap.MODEL_MAP().canonical || []).forEach(function (c) {
    if (c.auto) return;
    [c.id].concat(c.aliases || []).forEach(function (name) {
      modelMap.keyCandidates(name).forEach(function (k) { if (k) keys.add(k); });
    });
  });
  return keys;
}

function collectGroups() {
  const manual = manualKeys();
  const keyToGroup = new Map();
  const skipped = { manual: 0, nonModel: 0, noName: 0 };

  const files = fs.readdirSync(CONFIG.DATA_DIR).filter(function (f) {
    return f.endsWith(".js") && !SKIP_FILES.has(f);
  }).sort();

  files.forEach(function (file) {
    const win = loadWindow(path.join(CONFIG.DATA_DIR, file));
    const globalKey = Object.keys(win).filter(function (k) { return k !== "window"; })[0];
    const obj = win[globalKey];
    if (!obj || typeof obj !== "object") return;
    const records = [];
    if (Array.isArray(obj.models)) records.push.apply(records, obj.models);
    if (obj.months) Object.keys(obj.months).forEach(function (mk) {
      const rows = obj.months[mk] && obj.months[mk].rows;
      if (Array.isArray(rows)) records.push.apply(records, rows);
    });
    if (obj.tasks) Object.keys(obj.tasks).forEach(function (tk) {
      const rows = obj.tasks[tk] && obj.tasks[tk].rows;
      if (Array.isArray(rows)) records.push.apply(records, rows);
    });
    records.forEach(function (r) {
      const names = pickNames(r);
      if (!names.length) { skipped.noName++; return; }
      if (names.some(isNonModel)) { skipped.nonModel++; return; }
      const keys = [];
      names.forEach(function (n) {
        modelMap.keyCandidates(n).forEach(function (k) { if (k) keys.push(k); });
      });
      const uniqueKeys = Array.from(new Set(keys));
      if (uniqueKeys.some(function (k) { return manual.has(k); })) { skipped.manual++; return; }
      let g = null;
      for (const k of uniqueKeys) {
        if (keyToGroup.has(k)) { g = keyToGroup.get(k); break; }
      }
      if (!g) g = { names: new Map(), vendors: new Map(), files: new Set() };
      names.forEach(function (n) { g.names.set(n, (g.names.get(n) || 0) + 1); });
      uniqueKeys.forEach(function (k) { keyToGroup.set(k, g); });
      const rawVendor = pickVendor(r);
      let vendor = null;
      for (const n of names) {
        vendor = inferVendor(n, rawVendor);
        if (vendor) break;
      }
      if (vendor) g.vendors.set(vendor, (g.vendors.get(vendor) || 0) + 1);
      g.files.add(file);
    });
  });
  return { groups: new Set(keyToGroup.values()), skipped: skipped };
}

function buildAutoMap() {
  const collected = collectGroups();
  const colors = modelMap.MODEL_MAP().vendorColors || {};
  const defaultColor = modelMap.MODEL_MAP().vendorDefaultColor || "#8A8F98";
  const other = [];
  const canonical = [];

  collected.groups.forEach(function (g, key) {
    const names = Array.from(g.names.keys());
    const best = names.slice().sort(function (a, b) {
      return displayScore(b) - displayScore(a) || (a < b ? -1 : 1);
    })[0];
    const id = prettify(best);
    let vendor = "其他";
    if (g.vendors.size) {
      vendor = Array.from(g.vendors.entries()).sort(function (a, b) {
        return b[1] - a[1] || (a[0] < b[0] ? -1 : 1);
      })[0][0];
    }
    if (vendor === "其他") other.push(id);
    canonical.push({
      id: id,
      vendor: vendor,
      color: colors[vendor] || defaultColor,
      aliases: Array.from(new Set([id].concat(names))).sort(),
      auto: true
    });
  });

  canonical.sort(function (a, b) { return a.id < b.id ? -1 : a.id > b.id ? 1 : 0; });
  return {
    map: {
      updated: CONFIG.TODAY,
      stats: {
        total: canonical.length,
        knownVendor: canonical.length - other.length,
        otherVendor: other.length,
        skippedManual: collected.skipped.manual,
        skippedNonModel: collected.skipped.nonModel
      },
      canonical: canonical
    },
    other: other
  };
}

function updateAutoModels(opts) {
  opts = opts || {};
  const built = buildAutoMap();
  const map = built.map;
  if (opts.dryRun) {
    console.log("[model-auto] dry-run: " + map.stats.total + " 个自动 canonical(" +
      map.stats.knownVendor + " 个可识别厂商," + map.stats.otherVendor + " 个待认领)");
    if (built.other.length) console.log("[model-auto] 待认领: " + built.other.slice(0, 30).join(", ") +
      (built.other.length > 30 ? " …" : ""));
    return map;
  }

  const header =
    "// 自动建档的 canonical 模型(由 scripts/lib/model-auto.js 生成,请勿手工编辑)\n" +
    "// 仅补 data/models.js 未覆盖的模型名;手工条目始终优先。\n" +
    "// 厂商优先取源记录 vendor/org/creator,缺失时按模型名家族推断;颜色取 models.js 的 vendorColors。\n";
  const content = writers.windowVarTemplate(AUTO_VAR, header, map);
  const prev = writers.loadJsGlobal(AUTO_FILE, AUTO_VAR);
  if (prev && JSON.stringify(prev.canonical) === JSON.stringify(map.canonical)) {
    console.log("[model-auto] 无新增模型,跳过");
    modelMap.reload();
    return map;
  }
  writers.writeWindowVar(AUTO_FILE, AUTO_VAR, content);
  console.log("[model-auto] 自动建档 " + map.stats.total + " 个模型(" +
    map.stats.knownVendor + " 个可识别厂商," + map.stats.otherVendor + " 个待认领)");
  if (built.other.length) console.log("[model-auto] 待认领: " + built.other.slice(0, 30).join(", ") +
    (built.other.length > 30 ? " …" : ""));
  modelMap.reload();
  return map;
}

module.exports = { buildAutoMap: buildAutoMap, updateAutoModels: updateAutoModels };
