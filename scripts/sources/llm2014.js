// 数据源:llm2014 code_v3 基准(GitHub 仓库,逐月 CSV)
// 源站已将该类别显示为 "Agentic"(docs/assets/i18n.js: category.code_v3 -> Agentic)。
// 迁移自原 fetch_all.js 的 fetchLlm + parseCsv。
// 流程:读 datasets.json -> 过滤 code_v3 总榜 -> 逐月抓取 CSV -> 解析为 {projects, rows}
//       -> 抓 i18n.js 提取官方"档位说明/项目说明"文案(fail-soft,失败用内嵌兜底)
// CDN(jsDelivr)优先,失败回退 raw.githubusercontent.com;单月失败跳过不影响其他月份。
"use strict";
const BaseSource = require("../lib/BaseSource");
const registry = require("../lib/registry");
const transport = require("../lib/transport");
const normalizer = require("../lib/normalizer");
const writers = require("../lib/writers");
const CONFIG = require("../lib/config");

// 官方"档位说明/项目说明"文案兜底(i18n.js 抓取/解析失败时使用;与源站 2026-08 版文案一致)
const NOTES_FALLBACK = {
  cellFormat: "1/A 代表扣分数/档位",
  grades: [
    { k: "A", t: "档：几乎不犯错，只犯微小的 UI、交互类错误。" },
    { k: "B", t: "档：大概率会错，但只要描述错误现象，都可以1轮修复。" },
    { k: "C", t: "档：大概率错，但需要交互更多轮，模型能自主推进修复，无需人工提供辅助。" },
    { k: "D", t: "档：必须有人工提供大量 log、视觉描述，协助操作等才能修复问题。" },
    { k: "Failed", t: "知识或方法论不够，即便有人帮助，也无法完成任务。" },
    { k: "Pass", t: "前代模型已经拿到 A，不再测试。" },
    { k: "Skip", t: "各方面原因，不进行测试。" },
    { k: "Pending", t: "正在测试中。" }
  ],
  halfGrade: "同档位中，只有少数轮次出现问题，大部分情况表现良好时，会升半档，用 B+、C+ 来表示。",
  projects: [
    { k: "C", t: "MacOS App + OpenGL" },
    { k: "E", t: "Web + WASM" },
    { k: "F", t: "Godot + Physics" },
    { k: "H", t: "Web + 3D Modeling" },
    { k: "I", t: "iOS App + Rust Server" },
    { k: "J", t: "Web + 2D Animation" },
    { k: "K", t: "Harmony OS App + C++ Native" }
  ]
};
const I18N_PATH = "assets/i18n.js";
const I18N_GRADE_KEYS = [["A", "gradeA"], ["B", "gradeB"], ["C", "gradeC"], ["D", "gradeD"],
  ["Failed", "failed"], ["Pass", "pass"], ["Skip", "skip"], ["Pending", "pending"]];
const I18N_PROJECT_KEYS = ["C", "E", "F", "H", "I", "J", "K"];

// 从 i18n.js 源文本提取指定 key 的 zh-CN 文案;key 形如 "codev3Note.gradeA" / "meta.codev3CellFormat"
function pickI18n(text, key) {
  const re = new RegExp('"' + key.replace(/\./g, "\\.") + '"\\s*:\\s*\\{[\\s\\S]*?"zh-CN"\\s*:\\s*"((?:[^"\\\\]|\\\\.)*)"');
  const m = String(text).match(re);
  if (!m) return null;
  try { return JSON.parse('"' + m[1] + '"'); } catch (e) { return null; }
}

// 提取全部官方说明文案;任一关键字缺失返回 null(由调用方回退兜底文案)
function parseI18nNotes(text) {
  const cellFormat = pickI18n(text, "meta.codev3CellFormat");
  const halfGrade = pickI18n(text, "codev3Note.halfGrade");
  if (!cellFormat || !halfGrade) return null;
  const grades = [];
  for (const [k, key] of I18N_GRADE_KEYS) {
    const t = pickI18n(text, "codev3Note." + key);
    if (!t) return null;
    grades.push({ k: k, t: t });
  }
  const projects = [];
  for (const k of I18N_PROJECT_KEYS) {
    const t = pickI18n(text, "codev3Note.project" + k);
    if (!t) return null;
    // 源站文案自带字母前缀(如 "C: MacOS App + OpenGL"),归一化去掉,由展示层用 k 拼装
    projects.push({ k: k, t: t.replace(/^[A-Z]\s*[:：]\s*/, "") });
  }
  return { cellFormat: cellFormat, grades: grades, halfGrade: halfGrade, projects: projects };
}

// 简易 CSV 解析:支持双引号包裹字段(含 "Failed(2/12)" 等特殊字符值)。迁移自原 parseCsv。
function parseCsv(text) {
  const rows = [];
  const lines = text.replace(/\r/g, "").split("\n").filter(function (l) { return l.trim(); });
  for (const line of lines) {
    const fields = [];
    let cur = "", inQ = false;
    for (let i = 0; i < line.length; i++) {
      const ch = line[i];
      if (ch === '"') {
        if (inQ && line[i + 1] === '"') { cur += '"'; i++; }
        else inQ = !inQ;
      } else if (ch === "," && !inQ) {
        fields.push(cur); cur = "";
      } else {
        cur += ch;
      }
    }
    fields.push(cur);
    rows.push(fields);
  }
  return rows;
}

class Llm2014Source extends BaseSource {
  constructor() {
    super({
      id: "llm2014", name: "llm2014", type: "csv",
      url: "(datasets.json + 逐月 CSV)",  // 多文件源,展示用
      host: CONFIG.sources.llm2014.host,
      outFile: "llm2014.js", windowVar: "LLM2014"
    });
  }
  // fetch 返回 datasets.json 文本(主入口)
  async fetch() {
    this._fetchGh = this._makeFetchGh();  // 携带 CDN/raw 回退的抓取器
    console.log("[llm2014] 抓取 datasets.json");
    return this._fetchGh(CONFIG.sources.llm2014.metaPath);
  }
  _makeFetchGh() {
    const baseCdn = CONFIG.sources.llm2014.baseCdn;
    const baseRaw = CONFIG.sources.llm2014.baseRaw;
    return async function (relPath) {
      try { return await transport.fetchWithRetry(baseCdn + relPath); }
      catch (e) {
        console.log("  [llm2014] jsDelivr 失败,回退 raw: " + e.message);
        return await transport.fetchWithRetry(baseRaw + relPath);
      }
    };
  }
  // parse 为 async:逐月抓取并解析 CSV(与原脚本一致)
  async parse(metaText) {
    const meta = JSON.parse(metaText);
    const codeV3 = (meta.datasets || []).filter(function (d) {
      return d.category === "code_v3" && d.tableIndex === 0;
    }).sort(function (a, b) { return a.reportDate < b.reportDate ? -1 : 1; });
    if (!codeV3.length) throw new Error("datasets.json 未找到 code_v3 条目");
    const months = {};
    for (const d of codeV3) {
      const csvName = d.csv.split("/").pop().replace(/\.csv$/, "");
      if (csvName === "2026-01") { console.log("  [llm2014] 跳过旧评分制: " + csvName); continue; }
      console.log("  [llm2014] 抓取 " + csvName + ".csv → 月份 " + d.reportDate);
      let rows;
      try {
        const csvText = await this._fetchGh(d.csv);
        rows = parseCsv(csvText);
        if (rows.length < 2) throw new Error(csvName + " 解析行数不足");
      } catch (e) {
        console.log("  [llm2014] " + csvName + " 抓取失败,跳过: " + e.message);
        continue;
      }
      const header = rows[0];
      const projCount = header.length - 4;
      // 项目名保留源站表头原样(含字母代号,如 "MacOS App(C)"),用于对应"项目说明"
      const projects = header.slice(1, 1 + projCount).map(function (h) { return h.trim(); });
      const dataRows = [];
      for (let r = 1; r < rows.length; r++) {
        const cells = rows[r];
        if (!cells[0] || cells[0] === "Model") continue;
        dataRows.push({
          model: cells[0].trim(),
          cells: cells.slice(1, 1 + projCount),
          unprompted: parseInt(cells[1 + projCount], 10) || 0,
          ide: (cells[2 + projCount] || "").trim(),
          think: parseInt(cells[3 + projCount], 10) || 0
        });
      }
      // 月份键用报告月(reportDate),与新版站点数据集键一致(csv 文件名可能与报告月不一致,
      // 如 reportDate=2026-06 对应 data/code_v3/2026-05.csv),保证"原站↗"链接指向真实网页。
      months[d.reportDate] = { projects: projects, rows: dataRows };
      console.log("  [llm2014] " + d.reportDate + ": " + dataRows.length + " 模型, " + projects.length + " 任务");
    }
    if (!Object.keys(months).length) throw new Error("未解析到任何有效月份");
    // 抓取官方"档位说明/项目说明"文案(fail-soft:失败保留内嵌兜底,不影响月度数据)
    let notes = null;
    try {
      console.log("  [llm2014] 抓取 i18n.js 提取档位/项目说明");
      notes = parseI18nNotes(await this._fetchGh(I18N_PATH));
      if (!notes) console.log("  [llm2014] i18n.js 说明文案解析不全,使用内嵌兜底");
    } catch (e) {
      console.log("  [llm2014] i18n.js 抓取失败,使用内嵌兜底: " + e.message);
    }
    return { months: months, notes: notes || NOTES_FALLBACK };
  }
  toStandard(parsed) {
    // 把所有月份所有模型平铺为标准记录(score 字段为原始单元格值,无法直接百分化;这里用 null,
    // 一致性校验主要面向已有百分制的 deepswe/vibe/swebench/aider/livecode)。
    var srcId = this.cfg.id;
    var out = [];
    Object.keys(parsed.months).forEach(function (mk) {
      var mo = parsed.months[mk];
      mo.rows.forEach(function (r, idx) {
        out.push(normalizer.record({
          sourceId: srcId, name: r.model, score: null, rank: idx, updated: mk,
          metrics: { ide: r.ide, think: r.think, unprompted: r.unprompted },
          meta: {}
        }));
      });
    });
    return out;
  }
  writeContent(parsed) {
    // 严格复刻原脚本输出模板(字节等价):外层双引号,months 单引号
    const T = CONFIG.TODAY, R = CONFIG.REFRESHED_AT;
    const monthKeys = Object.keys(parsed.months).sort();
    const latest = monthKeys[monthKeys.length - 1];
    const body = JSON.stringify(parsed.months, null, 2).replace(/"/g, "'");
    const notes = JSON.stringify(parsed.notes, null, 2).replace(/"/g, "'");
    return `// 数据源3:llm2014 Agentic(原 code_v3)基准快照(中文个人私有题库,按月归档)
// 来源:https://llm2014.github.io/llm_benchmark/  (raw: github.com/llm2014/llm_benchmark)
// 源站已把该类别显示为 "Agentic";档位/项目说明文案来自源站 docs/assets/i18n.js(每日刷新时同步)。
// 单元格原始值形如 "7/A"(扣分数 / 字母等级,数字越小越好),或 Pass / Failed(n/m) / Skip / Pending;
// 2026-08 起等级单元格可带单任务测试成本括号,如 "7/A+(90.52)"(成本 ¥)。
// 项目列表名保留源站字母代号(如 "MacOS App(C)"),对应 notes.projects 的项目说明。
// 数值化规则在 js/data.js 中统一处理。
// 注:月份键为报告月(reportDate),与新版站点数据集键一致;2026-04 报告月(csv 2026-01)
// 为旧评分制(原始分钟数 + "总扣分",无字母等级),口径不兼容,已排除。
window.LLM2014 = {
  source: "llm2014 Agentic",
  url: "https://llm2014.github.io/llm_benchmark/#category=code_v3&dataset=code_v3%7C${latest}%7C0",
  updated: "${T}",
  refreshedAt: "${R}",
  desc: "个人私有滚动题库的长期跟踪评测,要求从零构建实际应用(MacOS/Flutter/Web/Game/Rust 等)并按通过情况评级。",
  // 官方说明文案(源站 i18n.js):grades=档位说明,projects=项目说明(字母代号 -> 项目构成)
  notes: ${notes},
  // 月份 -> { projects: 任务列名数组(含字母代号), rows: [{model, cells:[原始值...], ide, think, unprompted}] }
  months: ${body}
};
`;
  }
}

module.exports = registry.register(Llm2014Source);
