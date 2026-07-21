// 数据源:llm2014 code_v3 基准(GitHub 仓库,逐月 CSV)
// 迁移自原 fetch_all.js 的 fetchLlm + parseCsv。
// 流程:读 datasets.json -> 过滤 code_v3 总榜 -> 逐月抓取 CSV -> 解析为 {projects, rows}
// CDN(jsDelivr)优先,失败回退 raw.githubusercontent.com;单月失败跳过不影响其他月份。
// 输出格式与原脚本逐字节等价(window.LLM2014)。
"use strict";
const BaseSource = require("../lib/BaseSource");
const registry = require("../lib/registry");
const transport = require("../lib/transport");
const normalizer = require("../lib/normalizer");
const writers = require("../lib/writers");
const CONFIG = require("../lib/config");

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
      console.log("  [llm2014] 抓取 " + csvName + ".csv (reportDate=" + d.reportDate + ")");
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
      const projects = header.slice(1, 1 + projCount).map(function (h) {
        return h.replace(/\s*\([A-Z]\)\s*$/, "");
      });
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
      months[csvName] = { projects: projects, rows: dataRows };
      console.log("  [llm2014] " + csvName + ": " + dataRows.length + " 模型, " + projects.length + " 任务");
    }
    if (!Object.keys(months).length) throw new Error("未解析到任何有效月份");
    return { months: months };
  }
  toStandard(parsed) {
    // 把所有月份所有模型平铺为标准记录(score 字段为原始单元格值,无法直接百分化;这里用 null,
    // 一致性校验主要面向已有百分制的 deepswe/vibe/aaci/swebench/aider/livecode)。
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
    const T = CONFIG.TODAY;
    const monthKeys = Object.keys(parsed.months).sort();
    const latest = monthKeys[monthKeys.length - 1];
    const body = JSON.stringify(parsed.months, null, 2).replace(/"/g, "'");
    return `// 数据源3:llm2014 code_v3 基准快照(中文个人私有题库,按月归档)
// 来源:https://llm2014.github.io/llm_benchmark/  (raw: github.com/llm2014/llm_benchmark)
// 单元格原始值形如 "7/A"(耗时分钟 / 字母等级),或 Pass / Failed(n/m) / Skip / Pending。
// 数值化规则在 js/data.js 中统一处理。
// 注:2026-01 为旧评分制(原始分钟数 + "总扣分",无字母等级),口径不兼容,已排除。
window.LLM2014 = {
  source: "llm2014 编程榜 code_v3",
  url: "https://llm2014.github.io/llm_benchmark/#category=code_v3&dataset=code_v3%7C${latest}%7C0",
  updated: "${T}",
  desc: "个人私有滚动题库的长期跟踪评测,要求从零构建实际应用(MacOS/Flutter/Web/Game/Rust 等)并按通过情况评级。",
  // 月份 -> { projects: 任务列名数组, rows: [{model, cells:[原始值...], ide, think, unprompted}] }
  months: ${body}
};
`;
  }
}

module.exports = registry.register(Llm2014Source);
