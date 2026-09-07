// 数据源:BenchCAD(程序化 CAD 生成基准)
// 站点:https://github.com/BenchCAD/BenchCAD-main(leaderboard.json 结构化 JSON)
// 数据形态:JSON { meta, tasks: { vision2code, visionqa, codeqa } }。
// 规模:17,900 个执行验证的 CadQuery 程序 / 106 类工业零件 / 47 项工程标准(ISO/DIN/EN/ASME/IEC)。
// 性质:Vision2Code 主指标 total(0-1,64³ 体素 IoU×exec%);仅「权威基准测试」页展示。
// 输出:data/benchcad.js(window.BENCHCAD)。
"use strict";
const BaseSource = require("../lib/BaseSource");
const registry = require("../lib/registry");
const transport = require("../lib/transport");
const normalizer = require("../lib/normalizer");
const writers = require("../lib/writers");
const CONFIG = require("../lib/config");

class BenchCADSource extends BaseSource {
  constructor() {
    super({
      id: "benchcad", name: "BenchCAD", type: "json",
      url: CONFIG.sources.benchcad.url, host: CONFIG.sources.benchcad.host,
      repoUrl: CONFIG.sources.benchcad.repoUrl,
      boardUrl: CONFIG.sources.benchcad.boardUrl,
      outFile: "benchcad.js", windowVar: "BENCHCAD"
    });
  }
  async fetch() {
    return transport.fetchWithRetry(this.cfg.url);
  }
  parse(raw) {
    const data = JSON.parse(raw);
    if (!data || !data.tasks) throw new Error("leaderboard.json 未解析到 tasks(站点结构变更)");
    const tasks = {};
    ["vision2code", "visionqa", "codeqa"].forEach(function (k) {
      const t = data.tasks[k] || {};
      tasks[k] = {
        label: t.label || k,
        blurb: t.blurb || "",
        primary: t.primary || "total",
        rows: Array.isArray(t.rows) ? t.rows : []
      };
    });
    if (!tasks.vision2code.rows.length) throw new Error("Vision2Code 未解析到任何行");
    return tasks;
  }
  toStandard(parsed) {
    // 仅取主指标 Vision2Code 行(供质量报告完整性;0-1 total -> 0-100)
    return normalizer.fromArray(this.cfg.id, parsed.vision2code.rows, function (m, idx) {
      return {
        name: m.model,
        score: m.total != null ? Math.round(m.total * 1000) / 10 : null,
        rank: idx,
        updated: CONFIG.TODAY,
        metrics: { exec: m.exec, iou: m.iou_score },
        meta: { org: m.org }
      };
    });
  }
  writeContent(parsed) {
    const T = CONFIG.TODAY, R = CONFIG.REFRESHED_AT;
    const tasks = {};
    Object.keys(parsed).forEach(function (k) {
      tasks[k] = { label: parsed[k].label, blurb: parsed[k].blurb, primary: parsed[k].primary, rows: parsed[k].rows };
    });
    return writers.windowVarTemplate("BENCHCAD",
      "// 数据源:BenchCAD(程序化 CAD 生成基准,抓取于 " + T + ")\n" +
      "// 来源:" + this.cfg.repoUrl + "(leaderboard.json;榜单页:" + this.cfg.boardUrl + ")\n" +
      "// 字段说明:vision2code=图像→CadQuery 代码生成(主指标 total=64³ 体素 IoU×exec%,0-1);\n" +
      "//          visionqa/codeqa=数值几何推理(2,400 题,L1-L4 四能力等级 + total)\n" +
      "// 用途:「权威基准测试」页展示,仅参考,不计入综合分/命中数。\n",
      {
        source: "BenchCAD",
        url: this.cfg.repoUrl,
        boardUrl: this.cfg.boardUrl,
        updated: T,
        refreshedAt: R,
        stats: { partFamilies: 106, programs: 17900, standards: 47 },
        desc: "BenchCAD:程序化 CAD 基准,评估模型理解与编写参数化 CAD(CadQuery)代码的能力,17,900 个执行验证程序、106 类工业零件、47 项工程标准;执行落地、确定性评分(无 LLM 裁判)。",
        tasks: tasks
      }
    );
  }
}

module.exports = registry.register(BenchCADSource);
