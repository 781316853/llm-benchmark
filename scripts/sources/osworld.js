// 数据源:OSWorld 2.0(xlang-ai 长时程桌面计算机使用评测)
// 站点:官方 os-world-v2.xlang.ai(会跳转论文),以 leaderboard.steel.dev 镜像为主。
// 数据形态:服务端渲染 HTML 表格(System/Submission|Score|Organization|Reported|Source)。
// 性质:系统级(模型+工具策略)条目(108 长时程任务),按部分得分 partial 排序;
//       仅「权威基准测试」页展示,不计入综合分/命中。
// 输出:data/osworld.js(window.OSWORLD)。
"use strict";
const BaseSource = require("../lib/BaseSource");
const registry = require("../lib/registry");
const transport = require("../lib/transport");
const normalizer = require("../lib/normalizer");
const writers = require("../lib/writers");
const CONFIG = require("../lib/config");

// 单元格去尾部 "New" 徽标等附加文本
function cleanSystem(t) {
  return String(t || "").replace(/\s*New\s*$/i, "").trim();
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
    return transport.fetchWithRetry(this.cfg.url);
  }
  parse(raw) {
    const models = [];
    transport.parseTableRows(raw).forEach(function (row) {
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
        url: srcM ? srcM[1] : null
      });
    });
    if (!models.length) throw new Error("未解析到任何 OSWorld 2.0 行");
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
        meta: { org: m.org }
      };
    });
  }
  writeContent(parsed) {
    const T = CONFIG.TODAY, R = CONFIG.REFRESHED_AT, n = parsed.models.length;
    return writers.windowVarTemplate("OSWORLD",
      "// 数据源:OSWorld 2.0(xlang-ai 长时程桌面计算机使用评测,更新于 " + T + ")\n" +
      "// 来源:" + this.cfg.url + "(官方:" + this.cfg.officialUrl + ")\n" +
      "// 字段说明:system=系统/提交(模型+工具策略);score=部分得分 partial(%);org=厂商;reported=上报时间;url=来源链接\n" +
      "// 用途:「权威基准测试」页展示,仅参考,不计入综合分/命中数。\n",
      {
        source: "OSWorld 2.0",
        url: this.cfg.url,
        officialUrl: this.cfg.officialUrl,
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
