// 数据源:GPQA Diamond(研究生级科学问答,198 题子集)
// 主源:datalearner 榜单详情接口(T2 厂商官方发布成绩转录,292 条,单请求取全量)
//       接口字段:modelAbbrName / evalResult / modelMode(含「无工具」/「工具」标记)/ orgName
// 补充:benchlm.ai 榜单页(T3 第三方镜像,__NEXT_DATA__ 内嵌全量表,90 条)
//       —— 两源模型池不同(开源小模型 vs 部分闭源),按渠道层级合并:同模型取 datalearner(T2),
//       benchlm 只补它独有且 datalearner 未收录的模型,大幅提升总览矩阵该列覆盖率
// 口径:只收「无工具」行(datalearner 同模型多档取最高);benchlm 行未逐行标注 harness,
//       其 protocol 记「未标注」并在 protocolNote 注明来源
// 性质:模型级条目;2026-11-26 起计入总览矩阵与综合分(计分组之一)
// 输出:data/gpqa_diamond.js(window.GPQA_DIAMOND)
"use strict";
const BaseSource = require("../lib/BaseSource");
const registry = require("../lib/registry");
const transport = require("../lib/transport");
const normalizer = require("../lib/normalizer");
const writers = require("../lib/writers");
const { parseBenchlmBoard } = require("../lib/parseBenchlmBoard");
const { createTierMerger } = require("../lib/mergeByTier");
const CONFIG = require("../lib/config");
const officialSeeds = require("../lib/official-seeds");

const DL_LIMIT = 1000;

// 与 HLE 源一致:先判「无工具」,否则会被「工具」二字误判
function protocolFromMode(mode) {
  var s = String(mode || "");
  if (!s) return "未标注";
  if (/无工具|without\s*tools|w\/?o\s*tools/i.test(s)) return "无工具";
  if (/工具|with\s*tools|w\/?\s*tools/i.test(s)) return "工具";
  return "未标注";
}

class GpqaDiamondSource extends BaseSource {
  constructor() {
    const c = CONFIG.sources.gpqa_diamond;
    super({
      id: "gpqa_diamond", name: "GPQA Diamond", type: "api",
      url: c.url, host: c.host,
      officialUrl: c.officialUrl,
      outFile: "gpqa_diamond.js", windowVar: "GPQA_DIAMOND"
    });
  }

  // datalearner 分页取全量(当前 292 条,一次取完;超限时续抓)
  async fetchVendorRows() {
    const base = CONFIG.sources.gpqa_diamond.apiUrl;
    const rows = [];
    let total = null;
    while (total == null || rows.length < total) {
      const sep = base.indexOf("?") >= 0 ? "&" : "?";
      const url = base + sep + "limit=" + DL_LIMIT + "&offset=" + rows.length + "&locale=zh";
      const text = await transport.fetchWithRetry(url, { headers: { Accept: "application/json" } });
      let json;
      try { json = JSON.parse(text); } catch (e) { throw new Error("GPQA datalearner 接口返回非 JSON: " + e.message); }
      const page = json && json.results;
      if (!Array.isArray(page) || !page.length) throw new Error("GPQA datalearner 接口未返回 results(接口可能已变更)");
      rows.push.apply(rows, page);
      if (json.totalCount != null) total = Number(json.totalCount); else total = rows.length;
    }
    if (total != null && rows.length < total) throw new Error("GPQA datalearner 全量抓取不完整:" + rows.length + "/" + total);
    return { totalCount: total, results: rows, meta: {} };
  }

  async fetch() {
    const [vendor, benchlmHtml] = await Promise.all([
      this.fetchVendorRows(),
      transport.fetchWithRetry(CONFIG.sources.gpqa_diamond.url).catch(function (e) {
        console.log("  [GPQA] benchlm 补充源不可用,仅用 datalearner:" + e.message);
        return null;
      })
    ]);
    return { vendor: vendor, benchlm: benchlmHtml };
  }

  parse(raw) {
    // 主源:datalearner,只取无工具行(同模型多档取最高)
    const vendor = ((raw.vendor && raw.vendor.results) || []).map(function (m) {
      return {
        model: m.modelAbbrName, org: m.orgName, score: m.evalResult,
        license: m.commercialUsage, mode: m.modelMode || null,
        protocol: protocolFromMode(m.modelMode)
      };
    }).filter(function (m) { return m.protocol === "无工具" && isFinite(m.score); });
    if (!vendor.length) throw new Error("GPQA datalearner 主源未解析到任何无工具口径数据(接口结构可能已变化)");

    // 补充源:benchlm(内嵌 __NEXT_DATA__)
    let bmRows = [];
    if (raw.benchlm) {
      try {
        bmRows = parseBenchlmBoard(raw.benchlm).rows.map(function (m) {
          return { model: m.model, org: m.org, score: m.score, protocolNote: "benchlm 镜像 · 源站未标注工具口径" };
        });
      } catch (e) { console.log("  [GPQA] benchlm 解析失败:" + e.message); }
    }

    const merger = createTierMerger({});
    merger.add(vendor, "datalearner");
    merger.add(bmRows, "benchlm", { fillOnly: true });

    const models = merger.values().map(function (m) {
      const src = m.src;
      const note = src === "datalearner"
        ? String(m.mode || "厂商发布(无工具)")
        : String(m.protocolNote || "benchlm 镜像");
      const rec = Object.assign({}, m, { protocol: "无工具", protocolNote: note });
      delete rec.mode; delete rec.protocolNote;
      return rec;
    });

    models.sort(function (a, b) { return b.score - a.score; });
    models.forEach(function (m, i) { m.rank = i + 1; });

    // 厂商官方发布成绩种子层(T2):补 datalearner / benchlm 都未收录、但厂商在发布页
    // 表格里公布的模型。只补缺失,不覆盖已有分数;自动解析的条目由 official-seeds 并入。
    const seedAdded = officialSeeds.appendMissingSeed(models, "gpqa");
    if (seedAdded) {
      models.sort(function (a, b) { return b.score - a.score; });
      models.forEach(function (m, i) { m.rank = i + 1; });
    }

    return {
      tasks: 198,
      models: models,
      stats: { datalearner: vendor.length, benchlm: bmRows.length, merged: models.length, seeds: seedAdded }
    };
  }

  toStandard(parsed) {
    return normalizer.fromArray(this.cfg.id, parsed.models, function (m, idx) {
      return {
        name: m.model, score: m.score, rank: idx, updated: CONFIG.TODAY,
        metrics: { protocol: m.protocol }, meta: { org: m.org, src: m.src }
      };
    });
  }

  writeContent(parsed) {
    const T = CONFIG.TODAY, R = CONFIG.REFRESHED_AT, n = parsed.models.length;
    const c = CONFIG.sources.gpqa_diamond;
    return writers.windowVarTemplate("GPQA_DIAMOND",
      "// 数据源:GPQA Diamond(研究生级科学问答,198 题子集,更新于 " + T + ")\n" +
      "// 主源:" + c.apiUrl + "(T2 厂商官方发布成绩转录,单请求取全量)\n" +
      "// 补充:" + c.url + "(T3 第三方镜像,只补主源未收录的模型)\n" +
      "// " + CONFIG.channelPolicy + "\n" +
      "// 口径:只收「无工具」行;datalearner 同模型多档取最高;benchlm 未逐行标注 harness,\n" +
      "//   protocolNote 里注明来自 benchlm 镜像,两源模型池互补(开源小模型 + 部分闭源)\n" +
      "// 字段:model=模型名;score=正确率(%);org=厂商;src=数据来源(datalearner/benchlm);protocolNote=口径原文\n" +
      "// 用途:「权威基准测试」页展示 + 总览矩阵计分列,计入综合分与命中数(2026-11-26 起)\n",
      {
        source: "GPQA Diamond",
        url: c.url,
        apiUrl: c.apiUrl,
        officialUrl: c.officialUrl,
        channelPolicy: CONFIG.channelPolicy,
        updated: T,
        refreshedAt: R,
        stats: { tasks: parsed.tasks, entries: n, datalearner: parsed.stats.datalearner, benchlm: parsed.stats.benchlm },
        desc: "GPQA Diamond:研究生级科学问答基准的 198 题高质量子集(生物 / 物理 / 化学),题目由领域专家编写、" +
          "四选一随机猜测基线 25%;本表 score 为正确率(%),统一无工具口径。" +
          "主源为 datalearner 转录的厂商官方发布成绩(292 条,覆盖开源与部分闭源);benchlm.ai 镜像只补主源未收录的模型(90 条),两源模型池互补。",
        models: parsed.models
      }
    );
  }
}

module.exports = registry.register(GpqaDiamondSource);
