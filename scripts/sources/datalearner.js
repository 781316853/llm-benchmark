// 数据源:datalearner.com 通用 HTML 表格解析器
// 迁移自原 fetch_all.js 的 fetchDataLearner。
// 用途:作为 DeepSWE v1.1 的补充数据源,合并主源未收录的模型;
//       同时作为独立注册源,产出 data/datalearner.js(window.DATALEARNER)供溯源。
// 另提供 parseDataLearnerBench:基准详情页(如 terminal-bench-2-1)结构化数据解析,
//       供 tbench(TB 4.0 补充)与 tbench_v21(TB 2.1 双源)复用。
"use strict";
const BaseSource = require("../lib/BaseSource");
const registry = require("../lib/registry");
const transport = require("../lib/transport");
const normalizer = require("../lib/normalizer");
const writers = require("../lib/writers");
const CONFIG = require("../lib/config");

// 纯解析函数(供 deepswe 源复用,避免重复抓取逻辑耦合)
// 输入:已抓取的 HTML 文本;输出:模型数组 {name, score, mode, date, params, license}
function parseDataLearner(html) {
  const trs = html.match(/<tr[\s\S]*?<\/tr>/g) || [];
  const models = [];
  trs.forEach(function (tr) {
    var nameM = tr.match(/<span class="truncate font-medium">([^<]+)<\/span>/);
    var scoreM = tr.match(/text-sm font-semibold tabular-nums[^"]*text-slate-\d+">\s*(\d+(?:\.\d+)?)\s*<\/span>/);
    if (!nameM || !scoreM) return;
    var modeM = tr.match(/title="评测模式:\s*([^"]+)"/);
    var metaMs = tr.match(/text-xs text-slate-500 tabular-nums">([^<]*)<\/td>/g) || [];
    var licM = tr.match(/text-xs font-medium rounded-full[^>]*>([^<]+)<\/span>/);
    models.push({
      name: nameM[1].trim(),
      score: Math.round(parseFloat(scoreM[1]) * 10) / 10,
      mode: modeM ? modeM[1].trim() : "",
      date: metaMs[0] ? metaMs[0].replace(/.*tabular-nums">([^<]*)<\/td>.*/, "$1").trim() : "",
      params: metaMs[1] ? metaMs[1].replace(/.*tabular-nums">([^<]*)<\/td>.*/, "$1").trim() : "",
      license: licM ? licM[1].trim() : ""
    });
  });
  if (!models.length) throw new Error("datalearner 未解析到任何模型");
  return models;
}

// 解码 Next.js RSC 流字符串转义(与 tbench.js 同规则):\" -> "、\\ -> \、\n/\r/\t、\uXXXX
function unescapeStream(s) {
  var out = "", i = 0;
  while (i < s.length) {
    var c = s[i];
    if (c !== "\\") { out += c; i++; continue; }
    var n = s[i + 1];
    if (n === '"') { out += '"'; i += 2; }
    else if (n === "\\") { out += "\\"; i += 2; }
    else if (n === "n") { out += "\n"; i += 2; }
    else if (n === "r" || n === "t") { i += 2; }
    else if (n === "u") { out += String.fromCharCode(parseInt(s.substr(i + 2, 4), 16)); i += 6; }
    else { out += n; i += 2; }
  }
  return out;
}

// 基准详情页解析器(通用):
// 页面数据以内嵌 JSON 藏于 Next.js RSC 流(\"results\":[...]),每条含
//   modelCode/modelAbbrName/evalResult/modelMode/publishTime/parameterSize(亿)/orgName/commercialUsage。
// 输出:[{name, mode, score, date, params, org, license}]
function parseDataLearnerBench(html) {
  var marker = '\\"results\\":[';
  var idx = html.indexOf(marker);
  if (idx < 0) throw new Error("datalearner 详情页未找到 results 数组(站点结构变更)");
  var i = idx + marker.length;
  var depth = 1, start = i;
  while (i < html.length && depth > 0) {
    var c = html[i];
    if (c === "\\") { i += 2; continue; }   // 转义序列(如 \")跳过
    if (c === "[" || c === "{") depth++;
    else if (c === "]" || c === "}") depth--;
    i++;
  }
  if (depth !== 0) throw new Error("datalearner results 数组未闭合");
  var rows;
  try { rows = JSON.parse(unescapeStream("[" + html.slice(start, i - 1) + "]")); }
  catch (e) { throw new Error("datalearner results JSON 解析失败: " + e.message); }
  if (!Array.isArray(rows) || !rows.length) throw new Error("datalearner results 数组为空");
  var models = [];
  rows.forEach(function (r) {
    if (!r || !r.modelAbbrName || r.evalResult == null) return;
    models.push({
      name: String(r.modelAbbrName).trim(),
      score: Math.round(parseFloat(r.evalResult) * 100) / 100,
      mode: r.modelMode ? String(r.modelMode).trim() : "",
      date: r.publishTime || null,
      params: r.parameterSize != null ? String(r.parameterSize) : null,
      org: r.orgName || null,
      license: r.commercialUsage || null
    });
  });
  if (!models.length) throw new Error("datalearner 详情页未解析到任何模型条目");
  return models;
}

class DataLearnerSource extends BaseSource {
  constructor() {
    super({
      id: "datalearner",
      name: "datalearner DeepSWE 榜",
      type: "html",
      url: CONFIG.sources.datalearner.url,
      host: CONFIG.sources.datalearner.host,
      outFile: "datalearner.js",
      windowVar: "DATALEARNER",
      enabled: true
    });
  }
  parse(html) { return parseDataLearner(html); }
  toStandard(models) {
    return normalizer.fromArray(this.cfg.id, models, function (m, idx) {
      return {
        name: m.name,
        score: m.score,
        rank: idx,
        updated: CONFIG.TODAY,
        metrics: {},
        meta: { params: m.params, license: m.license, releaseDate: m.date, mode: m.mode }
      };
    });
  }
  writeContent(models) {
    return writers.windowVarTemplate("DATALEARNER",
      "// 补充数据源:datalearner.com DeepSWE 榜单快照(云端抓取)\n" +
      "// 来源:" + this.cfg.url + "  (更新于 " + CONFIG.TODAY + ")\n" +
      "// 用途:作为 DeepSWE v1.1 的补充,合并主源未收录模型;同时独立产出供溯源。\n" +
      "// 字段说明:name=模型名;score=Pass@1(%);mode=评测模式;date=发布日期;params=参数量;license=许可证\n",
      {
        source: "datalearner.com",
        url: this.cfg.url,
        updated: CONFIG.TODAY,
        models: models
      }
    );
  }
}

module.exports = {
  DataLearnerSource: registry.register(DataLearnerSource),
  parseDataLearner: parseDataLearner,
  parseDataLearnerBench: parseDataLearnerBench
};
