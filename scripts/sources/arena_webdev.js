// 数据源:LMArena Code Arena | WebDev(前端 Web 开发权威竞技场)
// 官方:https://arena.ai/leaderboard/code —— 有 Cloudflare 防护,直接抓取返 403;
// 主抓源采用权威镜像 https://m.aitntnews.com/arena/code/(其 ld+json 声明
//   creator=LM Arena、isBasedOn=https://arena.ai/leaderboard/code,每日快照官方 Elo 榜单)。
// 数据形态:镜像页 HTML 内 <tr data-... class="main-row"> 行,属性含:
//   data-name   模型原始名(如 "claude-opus-5-max")
//   data-org    厂商(如 "Anthropic")
//   data-score  独占 Elo 得分(如 "1691.000")
//   data-detail-votes 投票数(如 "8.1K")
//   行内 <span class="score-ci-inline">±N</span> 为 95% 置信区间。
// 输出:data/arena_webdev.js(window.ARENA_WEBDEV),按模型(canonical)取最高分。
"use strict";
const BaseSource = require("../lib/BaseSource");
const registry = require("../lib/registry");
const transport = require("../lib/transport");
const normalizer = require("../lib/normalizer");
const writers = require("../lib/writers");
const CONFIG = require("../lib/config");

// 从镜像页 HTML 解析模型行数组
// 每行:{name, org, score(整数 Elo), ci(±), votes(去掉 K 后缀的近似整数)}
function parseArenaWebdev(html) {
  const rows = html.match(/<tr[^>]*class\s*=\s*"main-row"[\s\S]*?<\/td>\s*<\/tr>/g) || [];
  const models = [];
  rows.forEach(function (tr) {
    // tr 开标签内:data-name / data-org / data-score / data-detail-votes
    const openTag = tr.slice(0, tr.indexOf(">") + 1);
    const nameM = openTag.match(/data-name\s*=\s*"([^"]+)"/);
    const orgM = openTag.match(/data-org\s*=\s*"([^"]+)"/);
    const scoreM = openTag.match(/data-score\s*=\s*"([\d.]+)"/);
    const votesM = openTag.match(/data-detail-votes\s*=\s*"([^"]+)"/);
    if (!nameM || !scoreM) return;
    // 置信区间:行内 <span class="score-ci-inline">±N</span>
    const ciM = tr.match(/class="score-ci-inline"[^>]*>\s*±([\d.]+)/);
    // 投票数 "8.1K" / "3.2K" / 纯数字 -> 近似整数(千分)
    let votes = null;
    if (votesM && votesM[1]) {
      const v = votesM[1].trim();
      const km = v.match(/^([\d.]+)K$/i);
      votes = km ? Math.round(parseFloat(km[1]) * 1000) : (isFinite(Number(v)) ? Number(v) : null);
    }
    models.push({
      name: nameM[1].trim(),
      org: orgM ? orgM[1].trim() : "",
      score: Math.round(parseFloat(scoreM[1]) * 1000) / 1000,   // 保留原精度,Elo 整数
      ci: ciM ? parseFloat(ciM[1]) : null,
      votes: votes
    });
  });
  if (!models.length) throw new Error("镜像页未解析到 main-row 数据(站点结构变更)");
  // 按 Elo 降序
  models.sort(function (a, b) { return b.score - a.score; });
  return models;
}

class ArenaWebdevSource extends BaseSource {
  constructor() {
    super({
      id: "arena_webdev", name: "Code Arena WebDev (LMArena)", type: "html",
      url: CONFIG.sources.arena_webdev.url, host: CONFIG.sources.arena_webdev.host,
      outFile: "arena_webdev.js", windowVar: "ARENA_WEBDEV"
    });
    this.officialUrl = CONFIG.sources.arena_webdev.officialUrl;
  }
  async fetch() {
    // 主抓日常镜像(m.aitntnews.com);若镜像整体不可用则尝试官方(大概率 403,失败保留旧文件 fail-soft)。
    try {
      return await transport.fetchWithRetry(this.cfg.url);
    } catch (e) {
      console.log("  [arena_webdev] 镜像抓取失败,尝试官方(" + e.message + ")");
      return transport.fetchWithRetry(this.officialUrl);
    }
  }
  parse(html) {
    return parseArenaWebdev(html);
  }
  toStandard(models) {
    var srcId = this.cfg.id;
    return normalizer.fromArray(srcId, models, function (m, idx) {
      return {
        name: m.name, score: m.score, rank: idx, updated: CONFIG.TODAY,
        metrics: { ci: m.ci, votes: m.votes, org: m.org },
        meta: {}
      };
    });
  }
  writeContent(models) {
    return writers.windowVarTemplate("ARENA_WEBDEV",
      "// 数据源:LMArena Code Arena | WebDev(前端 Web 开发权威竞技场,Elo 评分)\n" +
      "// 官方:https://arena.ai/leaderboard/code(有 Cloudflare 防护);主抓源为每日快照官方数据的权威镜像:\n" +
      "//     " + this.cfg.url + " (更新于 " + CONFIG.TODAY + ")\n" +
      "// 字段说明:name=模型原始名;org=厂商;score=Elo 得分;ci=±95% 置信区间;votes=投票数(近似)\n" +
      "// 用途:总览页第 5 个基准,与 Vibe Code 同等地位参与综合分主基准组;前端按 canonical 取最高分归入。\n",
      {
        source: "Code Arena WebDev (LMArena)",
        officialUrl: this.officialUrl,
        url: this.cfg.url,
        updated: CONFIG.TODAY,
        version: "overall",
        metric: "Elo score",
        desc: "LMArena Code Arena 前端竞技场:社区匿名盲测投票,衡量模型生成可交互 Web 应用的能力,Elo 评分(0-2000 区间)。",
        stats: { models: models.length },
        models: models
      }
    );
  }
}

module.exports = registry.register(ArenaWebdevSource);