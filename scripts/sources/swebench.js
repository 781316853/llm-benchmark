// 新增数据源:SWE-bench Verified 榜单
// 类型:HTML 表格(与 DeepSWE 同属长程 SWE 域,用于一致性交叉验证)
// 解析 swebench.com 官网榜单表格,提取模型名与 pass@1 分数。
// 输出 data/swebench.js(window.SWEBENCH)。
// 设计:fail-soft,站点结构变更时抛错被 pipeline 捕获,保留旧文件。
"use strict";
const BaseSource = require("../lib/BaseSource");
const registry = require("../lib/registry");
const transport = require("../lib/transport");
const normalizer = require("../lib/normalizer");
const writers = require("../lib/writers");
const CONFIG = require("../lib/config");

class SwebenchSource extends BaseSource {
  constructor() {
    super({
      id: "swebench", name: "SWE-bench Verified", type: "html",
      url: CONFIG.sources.swebench.url, host: CONFIG.sources.swebench.host,
      outFile: "swebench.js", windowVar: "SWEBENCH"
    });
  }
  async fetch() {
    const html = await transport.fetchWithRetry(this.cfg.url);
    return transport.htmlDecode(html);
  }
  parse(html) {
    // 通用 HTML 表格解析:遍历 <tr>,从单元格中提取模型名与百分制分数。
    // 兼容多种榜单结构:取首个含百分数列的表格,模型名取首列文本,分数取百分数单元格。
    const trs = html.match(/<tr[\s\S]*?<\/tr>/g) || [];
    const models = [];
    function clean(s) {
      return s.replace(/<[^>]+>/g, " ").replace(/&amp;/g, "&").replace(/&nbsp;/g, " ").replace(/\s+/g, " ").trim();
    }
    trs.forEach(function (tr) {
      const tds = tr.match(/<t[dh][^>]*>([\s\S]*?)<\/t[dh]>/g) || [];
      if (tds.length < 2) return;
      // 模型名:首个非空单元格(去除常见装饰:角标/链接内多余文本)
      var name = clean(tds[0]);
      if (!name || /^(rank|模型|model|#)/i.test(name)) return;
      // 分数:在其余单元格中找首个百分数(如 "72.3%" 或 "72.3")
      var score = null;
      for (var i = 1; i < tds.length; i++) {
        var c = clean(tds[i]);
        var m = c.match(/(\d+(?:\.\d+)?)\s*%/);
        if (!m) m = c.match(/^(\d+(?:\.\d+)?)$/);
        if (m) { score = parseFloat(m[1]); break; }
      }
      if (score == null || score <= 0 || score > 100) return;
      // 去除模型名常见后缀污染(如 "(link)"、agent 标注)
      name = name.replace(/\s*\(.*?\)\s*$/g, "").replace(/\s+/g, " ").trim();
      models.push({ name: name, score: Math.round(score * 10) / 10 });
    });
    if (!models.length) throw new Error("SWE-bench 未解析到数据(站点结构可能变更)");
    // 按分数降序
    models.sort(function (a, b) { return b.score - a.score; });
    return models;
  }
  toStandard(models) {
    var srcId = this.cfg.id;
    return normalizer.fromArray(srcId, models, function (m, idx) {
      return { name: m.name, score: m.score, rank: idx, updated: CONFIG.TODAY, metrics: {}, meta: {} };
    });
  }
  writeContent(models) {
    return writers.windowVarTemplate("SWEBENCH",
      "// 新增数据源:SWE-bench Verified 榜单快照(云端抓取)\n" +
      "// 来源:" + this.cfg.url + "  (更新于 " + CONFIG.TODAY + ")\n" +
      "// 用途:与 DeepSWE 同属长程软件工程域,用于一致性交叉验证。\n" +
      "// 字段说明:name=模型名;score=pass@1(%)\n",
      {
        source: "SWE-bench Verified",
        url: this.cfg.url,
        updated: CONFIG.TODAY,
        models: models
      }
    );
  }
}

module.exports = registry.register(SwebenchSource);
