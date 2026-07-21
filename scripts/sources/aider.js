// 新增数据源:Aider Polyglot 榜单
// 类型:HTML 表格(多语言代码编辑能力,扩展交叉验证维度)
// 解析 aider.chat/docs/leaderboards 的 Markdown 渲染表格。
// 输出 data/aider.js(window.AIDER)。
"use strict";
const BaseSource = require("../lib/BaseSource");
const registry = require("../lib/registry");
const transport = require("../lib/transport");
const normalizer = require("../lib/normalizer");
const writers = require("../lib/writers");
const CONFIG = require("../lib/config");

class AiderSource extends BaseSource {
  constructor() {
    super({
      id: "aider", name: "Aider Polyglot", type: "html",
      url: CONFIG.sources.aider.url, host: CONFIG.sources.aider.host,
      outFile: "aider.js", windowVar: "AIDER"
    });
  }
  async fetch() {
    const html = await transport.fetchWithRetry(this.cfg.url);
    return transport.htmlDecode(html);
  }
  parse(html) {
    // Aider 榜单通常是 HTML <table> 或 Markdown <pre>。
    // 策略:优先解析 <table>;若无,则从 <pre>/<code> 中按行解析 "模型 | 百分数" 模式。
    const models = [];
    function clean(s) {
      return s.replace(/<[^>]+>/g, " ").replace(/&amp;/g, "&").replace(/\s+/g, " ").trim();
    }
    const trs = html.match(/<tr[\s\S]*?<\/tr>/g) || [];
    if (trs.length) {
      trs.forEach(function (tr) {
        const tds = tr.match(/<t[dh][^>]*>([\s\S]*?)<\/t[dh]>/g) || [];
        if (tds.length < 2) return;
        var name = clean(tds[0]);
        if (!name || /^(model|模型|#)/i.test(name)) return;
        // 找首个百分数
        var score = null;
        for (var i = 1; i < tds.length; i++) {
          var c = clean(tds[i]);
          var m = c.match(/(\d+(?:\.\d+)?)\s*%/);
          if (m) { score = parseFloat(m[1]); break; }
        }
        if (score == null || score <= 0 || score > 100) return;
        models.push({ name: name, score: Math.round(score * 10) / 10 });
      });
    }
    // 兜底:解析 <pre>/<code> 中的 Markdown 表格行 "| model | 72.3% |"
    if (!models.length) {
      var codeBlocks = html.match(/<(?:pre|code)[\s\S]*?>([\s\S]*?)<\/(?:pre|code)>/g) || [];
      codeBlocks.forEach(function (cb) {
        var txt = clean(cb);
        var lines = txt.split("\n");
        lines.forEach(function (line) {
          if (line.indexOf("|") < 0) return;
          var parts = line.split("|").map(function (p) { return p.trim(); }).filter(Boolean);
          if (parts.length < 2) return;
          var name = parts[0];
          if (!name || /^(model|模型|-)/i.test(name)) return;
          var score = null;
          for (var i = 1; i < parts.length; i++) {
            var m = parts[i].match(/(\d+(?:\.\d+)?)\s*%/);
            if (m) { score = parseFloat(m[1]); break; }
          }
          if (score == null || score <= 0 || score > 100) return;
          models.push({ name: name, score: Math.round(score * 10) / 10 });
        });
      });
    }
    if (!models.length) throw new Error("Aider 未解析到数据(站点结构可能变更)");
    // 同名取最高(去重)
    var best = {};
    models.forEach(function (m) {
      if (!best[m.name] || m.score > best[m.name].score) best[m.name] = m;
    });
    var dedup = Object.values(best).sort(function (a, b) { return b.score - a.score; });
    return dedup;
  }
  toStandard(models) {
    var srcId = this.cfg.id;
    return normalizer.fromArray(srcId, models, function (m, idx) {
      return { name: m.name, score: m.score, rank: idx, updated: CONFIG.TODAY, metrics: {}, meta: {} };
    });
  }
  writeContent(models) {
    return writers.windowVarTemplate("AIDER",
      "// 新增数据源:Aider Polyglot 榜单快照(云端抓取)\n" +
      "// 来源:" + this.cfg.url + "  (更新于 " + CONFIG.TODAY + ")\n" +
      "// 用途:多语言代码编辑能力评测,扩展交叉验证维度。\n" +
      "// 字段说明:name=模型名;score=编辑通过率(%)\n",
      {
        source: "Aider Polyglot",
        url: this.cfg.url,
        updated: CONFIG.TODAY,
        models: models
      }
    );
  }
}

module.exports = registry.register(AiderSource);
