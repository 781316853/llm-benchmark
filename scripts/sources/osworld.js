// 数据源:OSWorld 2.0(xlang-ai 长时程桌面计算机使用评测)
// 站点:官方 os-world-v2.xlang.ai(会跳转论文)。
// 渠道层级(T2 厂商官方发布 > T3 第三方镜像):主源 datalearner 详情页
//   (内嵌 results JSON,厂商官方发布成绩,partial score 口径,模型级条目);
//   补充源 leaderboard.steel.dev 镜像(服务端渲染 HTML:System/Submission|Score|Organization|Reported|Source)。
// 合并策略:镜像条目为「系统级(模型+工具策略)」粒度,与主源模型级不同口径,
//   故不参与同键合并——仅追加主源未收录的系统条目,src 标注 mirror。
// 性质:仅「权威基准测试」页展示,不计入综合分/命中。
// 输出:data/osworld.js(window.OSWORLD)。
"use strict";
const BaseSource = require("../lib/BaseSource");
const registry = require("../lib/registry");
const transport = require("../lib/transport");
const normalizer = require("../lib/normalizer");
const writers = require("../lib/writers");
const { parseDataLearnerBench } = require("./datalearner");
const { normKey } = require("../lib/mergeByTier");
const CONFIG = require("../lib/config");

// 单元格去尾部 "New" 徽标等附加文本
function cleanSystem(t) {
  return String(t || "").replace(/\s*New\s*$/i, "").trim();
}

// 解析 steel.dev 镜像表(System/Submission|Score|Organization|Reported|Source)
function parseMirror(html) {
  const models = [];
  transport.parseTableRows(html).forEach(function (row) {
    const cells = row.text;
    if (cells.length < 4) return;
    const scoreM = String(cells[1] || "").match(/(\d+(?:\.\d+)?)\s*%/);
    if (!scoreM) return;
    const sys = cleanSystem(cells[0]);
    if (!sys || /^(System|Score|#)$/i.test(sys)) return;   // 表头
    // system 单元格 = 名称 + " New " + 备注;名称取 " New " 之前,备注另行存放(避免长文混入表格)
    const sp = sys.split(/\s+New\s+/i);
    const name = sp[0].trim();
    const note = sp.length > 1 ? sp.slice(1).join(" ").trim() : "";
    if (!name) return;
    // 来源链接:取第 5 列(Source)中第一个 <a href>
    const srcM = (row.html[4] || "").match(/href\s*=\s*["']([^"']+)["']/i);
    models.push({
      system: name,
      note: note || null,
      score: Number(scoreM[1]),
      org: cells[2] || null,
      reported: cells[3] || null,
      url: srcM ? srcM[1] : null,
      src: "mirror"
    });
  });
  if (!models.length) throw new Error("未解析到任何 OSWorld 2.0 行(steel.dev 镜像)");
  return models;
}

class OSWorldSource extends BaseSource {
  constructor() {
    super({
      id: "osworld", name: "OSWorld 2.0", type: "html",
      url: CONFIG.sources.osworld.url, host: CONFIG.sources.osworld.host,
      officialUrl: CONFIG.sources.osworld.officialUrl,
      outFile: "osworld.js", windowVar: "OSWORLD"
    });
  }
  async fetch() {
    // 主源(datalearner 厂商官方发布)+ 补充镜像(steel.dev)并行抓取
    const [vendor, mirror] = await Promise.all([
      transport.fetchWithRetry(CONFIG.sources.datalearner_osworld.url),
      transport.fetchWithRetry(this.cfg.url)
    ]);
    return { mirror: mirror, vendor: vendor };
  }
  parse(raw) {
    // 主源:模型级(厂商官方发布,partial 口径)
    const models = parseDataLearnerBench(raw.vendor).map(function (m) {
      return {
        system: m.name, note: m.mode ? m.mode : null, score: m.score,
        org: m.org, reported: m.date, url: null, src: "datalearner"
      };
    });
    if (!models.length) throw new Error("未解析到任何 OSWorld 2.0 行(datalearner)");
    models.sort(function (a, b) { return b.score - a.score; });
    // 补充镜像:系统级条目,仅追加主源未收录者(双向后缀 ≥5 字符匹配去重)
    const known = models.map(function (m) { return normKey(m.system); });
    function isKnown(name) {
      const n = normKey(name);
      return known.some(function (k) {
        return k === n || (k.length >= 5 && n.endsWith(k)) || (n.length >= 5 && k.endsWith(n));
      });
    }
    parseMirror(raw.mirror).forEach(function (mm) {
      if (isKnown(mm.system)) return;
      known.push(normKey(mm.system));
      models.push(mm);
    });
    models.sort(function (a, b) { return b.score - a.score; });
    return { tasks: 108, models: models };
  }
  toStandard(parsed) {
    // 展示源:名称取 system(可能含配置后缀),score 为部分得分
    return normalizer.fromArray(this.cfg.id, parsed.models, function (m, idx) {
      return {
        name: m.system,
        score: m.score,
        rank: idx,
        updated: CONFIG.TODAY,
        metrics: {},
        meta: { org: m.org, src: m.src }
      };
    });
  }
  writeContent(parsed) {
    const T = CONFIG.TODAY, R = CONFIG.REFRESHED_AT, n = parsed.models.length;
    return writers.windowVarTemplate("OSWORLD",
      "// 数据源:OSWorld 2.0(xlang-ai 长时程桌面计算机使用评测,更新于 " + T + ")\n" +
      "// 主渠道:https://www.datalearner.com/benchmarks/osworld-2(厂商官方发布成绩,partial 口径)\n" +
      "// 补充:" + this.cfg.url + "(官方:" + this.cfg.officialUrl + ",系统级条目仅追加主源未收录者)\n" +
      "// " + CONFIG.channelPolicy + "\n" +
      "// 字段说明:system=系统/提交(模型+工具策略);score=部分得分 partial(%);org=厂商;reported=上报时间;url=来源链接;src=数据来源渠道(datalearner/mirror)\n" +
      "// 用途:「权威基准测试」页展示,仅参考,不计入综合分/命中数。\n",
      {
        source: "OSWorld 2.0",
        url: this.cfg.url,
        officialUrl: this.cfg.officialUrl,
        channelPolicy: CONFIG.channelPolicy,
        updated: T,
        refreshedAt: R,
        stats: { tasks: parsed.tasks, entries: n },
        desc: "OSWorld 2.0:108 个长时程、端到端的桌面计算机使用工作流(人类中位耗时约 1.6 小时,平均约 318 次工具调用),按二进制完成率与部分得分(检查点达成比例)双口径计分;因二进制完成率极低,榜单按部分得分排序。",
        models: parsed.models
      }
    );
  }
}

module.exports = registry.register(OSWorldSource);
