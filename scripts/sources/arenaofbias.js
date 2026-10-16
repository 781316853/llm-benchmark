// 数据源:亿模亿样 · 模型效果对比(gallery.arenaofbias.icu)—— 前端作品社区盲评 Elo 竞技场
// 站点为客户端渲染的静态站,数据由页面运行时从公开 API 拉取;本源直接抓该 API:
//   GET https://api.arenaofbias.icu/api/leaderboard?by=config
// 数据形态:同一道题盲评两件作品(左右随机、身份隐藏),投票后按 Bradley-Terry 估计偏好强度,
//   折算到 Elo 刻度(1000 = 平均水平,高 400 分约等于被偏好机会高十倍),含 ±95% 不确定区间。
//   by=config 为「按配置」榜:每行 = 模型 × 推理强度一档,字段 rank/key/model/modelName/vendor/
//   effort/score/interval/games/wins/draws/losses/winRate/voters/tasks/works/provisional。
//   key 以 "x:" 开头、model 为 null 的是「非官方」条目(社区自跑的量化/改版权重与第三方 harness),
//   与厂商官方配置不可比,本源一律剔除,只收官方条目。
// 汇总口径(与站内其它榜一致):同一模型按推理强度分档多次测试,取该模型最高分那一档入榜,
//   effort 记该档强度,configs 记该模型在源站的档位数。
// 输出:data/arenaofbias.js(window.ARENAOFBIAS),供总览「第三方实测」组计分组
//   (接替原 AI 能力专项测试,权重 12%)与交叉矩阵单列使用。
"use strict";
const BaseSource = require("../lib/BaseSource");
const registry = require("../lib/registry");
const transport = require("../lib/transport");
const normalizer = require("../lib/normalizer");
const writers = require("../lib/writers");
const CONFIG = require("../lib/config");

// 源站「按配置」行 -> 每模型最高分档(官方条目)
function aggregateByModel(rows) {
  const best = {};
  (rows || []).forEach(function (r) {
    if (!r || !r.model) return;                 // 非官方条目(key 形如 "x:...")model 为 null
    if (typeof r.score !== "number") return;
    const m = best[r.model];
    if (!m) {
      best[r.model] = {
        name: r.model,
        modelName: r.modelName || r.model,
        vendor: r.vendor || "",
        effort: r.effort || "",
        score: r.score,
        interval: r.interval != null ? r.interval : null,
        games: r.games != null ? r.games : null,
        winRate: r.winRate != null ? Math.round(r.winRate * 1000) / 1000 : null,
        tasks: r.tasks != null ? r.tasks : null,
        provisional: !!r.provisional,
        configs: 1
      };
      return;
    }
    m.configs++;
    if (r.score > m.score) {                     // 取最高分档,并同步该档的强度与统计量
      m.effort = r.effort || "";
      m.score = r.score;
      m.interval = r.interval != null ? r.interval : null;
      m.games = r.games != null ? r.games : null;
      m.winRate = r.winRate != null ? Math.round(r.winRate * 1000) / 1000 : null;
      m.tasks = r.tasks != null ? r.tasks : null;
      m.provisional = !!r.provisional;
    }
  });
  const models = Object.keys(best).map(function (k) { return best[k]; });
  models.sort(function (a, b) { return b.score - a.score || (a.name < b.name ? -1 : 1); });
  models.forEach(function (m, i) { m.rank = i + 1; });
  return models;
}

class ArenaOfBiasSource extends BaseSource {
  constructor() {
    super({
      id: "arenaofbias", name: "亿模亿样 模型效果对比", type: "json",
      url: CONFIG.sources.arenaofbias.url, host: CONFIG.sources.arenaofbias.host,
      outFile: "arenaofbias.js", windowVar: "ARENAOFBIAS"
    });
    this.boardUrl = CONFIG.sources.arenaofbias.boardUrl;
  }
  parse(raw) {
    const j = JSON.parse(raw);
    if (!j || !Array.isArray(j.rows)) throw new Error("leaderboard 未解析到 rows(接口结构变更)");
    const models = aggregateByModel(j.rows);
    if (!models.length) throw new Error("leaderboard 未解析到官方条目");
    const totals = j.totals || {};
    return {
      models: models,
      updated: (j.updatedAt || "").slice(0, 10) || CONFIG.TODAY,
      stats: {
        models: models.length,
        configs: j.rows.length,
        votes: totals.votes != null ? totals.votes : null,
        voters: totals.voters != null ? totals.voters : null,
        tasks: totals.tasks != null ? totals.tasks : null
      }
    };
  }
  toStandard(parsed) {
    return normalizer.fromArray(this.cfg.id, parsed.models, function (m, idx) {
      return {
        name: m.name, score: m.score, rank: idx, updated: parsed.updated,
        metrics: { interval: m.interval, games: m.games, winRate: m.winRate, effort: m.effort, provisional: m.provisional, configs: m.configs },
        meta: { vendor: m.vendor }
      };
    });
  }
  writeContent(parsed) {
    const s = parsed.stats;
    return writers.windowVarTemplate("ARENAOFBIAS",
      "// 数据源:亿模亿样 · 模型效果对比(gallery.arenaofbias.icu)前端作品社区盲评 Elo 竞技场\n" +
      "// 接口:" + this.cfg.url + "  (源站更新于 " + parsed.updated + ")\n" +
      "// 字段说明:score=Elo(1000 为平均水平,越高越好);interval=±95% 不确定区间;effort=最优档推理强度;\n" +
      "//          games/winRate=该档有效比较数与胜率;configs=该模型在源站的推理强度档位数;provisional=源站「暂定」(比较 <30 次)\n" +
      "// 汇总口径:同一模型按推理强度分档多次测试,取最高分那一档入榜;源站「非官方」条目(社区自跑的量化/改版权重与第三方 harness)已剔除。\n" +
      "// 用途:总览「第三方实测」组计分组(权重 12%,接替原 AI 能力专项测试)与交叉矩阵单列。\n",
      {
        source: "亿模亿样 · 模型效果对比",
        url: this.cfg.url,
        boardUrl: this.boardUrl,
        updated: parsed.updated,
        refreshedAt: CONFIG.REFRESHED_AT,
        metric: "Elo",
        desc: "前端作品社区盲评竞技场:同一道题匿名盲评两件作品,按 Bradley-Terry 估计偏好强度并折算到 Elo 刻度(1000 为平均水平)。同一模型按推理强度分档多次测试,取最高分那一档计入综合分(权重 12%,属「第三方实测」组)。",
        stats: s,
        models: parsed.models
      }
    );
  }
}

module.exports = registry.register(ArenaOfBiasSource);
