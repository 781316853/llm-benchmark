// 数据源:datalearner.com 通用 HTML 表格解析器
// 迁移自原 fetch_all.js 的 fetchDataLearner。
// 用途:作为 DeepSWE v1.1 的补充数据源,合并主源未收录的模型;
//       同时作为独立注册源,产出 data/datalearner.js(window.DATALEARNER)供溯源。
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
  parseDataLearner: parseDataLearner
};
