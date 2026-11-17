// 数据源:LMArena Agent Arena(真实智能体会话的净提升榜)
// 官方:https://arena.ai/leaderboard/agent —— 有 Cloudflare 防护,直接抓取返 403。
// 主抓源采用 LM Arena 官方发布的排行榜数据集(lmarena-ai/leaderboard-dataset,config=agent,
//   split=latest),其 agent 子集用 IPS(因果追踪)估计模型相对 Arena 基线的净提升:
//   score=IPS τ̂(小数,可为负)、score_ci_lower/upper=95% 区间、observation_count=信号观测数、
//   session_count=独立会话数、rank=官方名次、leaderboard_publish_date=官方发布日。
//   数据集以 parquet 发布,三源并行抓取:ModelScope / Hugging Face / hf-mirror,
//   按 leaderboard_publish_date 选最新批次;ModelScope 镜像可能滞后(2026-11-17 实测仍停 11-11,
//   HF 已到 11-15),不能只在主源失败时才切备源。
// ⚠ 不发 m.aitntnews.com 的 HTML 快照:它把负的净提升显示成正数(2026-10-26 核对:
//   官方 Solar Pro 4 为 -19.61%、镜像显示 20.25%),符号丢失后排名与分数都不可用。
// 补缺:官网榜单领先于数据集快照时,按 ANNOUNCED 人工转录种子,仅补缺失模型、数据集收录后自动去重。
// 输出:data/arena_agent.js(window.ARENA_AGENT),按原始条目写盘(同一 canonical 的多个
//   推理强度档由前端取最高分),供总览「第三方实测」组第 9 计分组(权重 9%)与矩阵单列使用。
"use strict";
const BaseSource = require("../lib/BaseSource");
const registry = require("../lib/registry");
const transport = require("../lib/transport");
const normalizer = require("../lib/normalizer");
const writers = require("../lib/writers");
const CONFIG = require("../lib/config");

// 只取渲染与计分需要的列;rank/observation_count/session_count 在 parquet 里是 Int64,
// hyparquet 会解成 BigInt,统一转 Number(这些量级远小于 2^53,无精度风险)。
const COLUMNS = [
  "model_name", "organization", "license", "score",
  "score_ci_lower", "score_ci_upper",
  "observation_count", "session_count", "rank",
  "category", "leaderboard_publish_date"
];

function round2(n) { return Math.round(n * 100) / 100; }
function toNum(v) {
  if (typeof v === "bigint") return Number(v);
  return v == null ? null : Number(v);
}
function byScoreName(a, b) {
  return b.score - a.score || (a.name < b.name ? -1 : a.name > b.name ? 1 : 0);
}

// 官方数据集快照滞后于官网榜单时,由官网榜单人工转录补缺(与 Code Arena·WebDev 的 ANNOUNCED 同法):
// 仅补缺失模型、绝不覆盖数据集条目;数据集收录同名条目后按 seedKey 自动去重失效。
// 2026-10-23 核实:DeepSeek-V4.1-Flash-20261017 (Max) 在官网 Agent Arena 为 4.37% ±0.86%、
// 34,721 场独立会话、总榜 #13(官方数据集 2026-10-20 快照尚未收录)。
const ANNOUNCED = [
  { name: "deepseek-v4.1-flash-20261017 (max)", org: "deepseek", license: "MIT",
    score: 4.37, ci: 0.86, sessions: 34721, observations: null, srcRank: 13,
    category: "overall", date: "2026-10-23", src: "announced",
    sourceUrl: "https://arena.ai/leaderboard/agent" },
  // Qwen 官方发布图(2026-11-16)AgentArena 净提升 7.5;官方数据集批次未收录,先补缺,收录后自动去重。
  { name: "qwen4-max (xhigh)", org: "alibaba", license: "Proprietary",
    score: 7.5, ci: null, sessions: null, observations: null, srcRank: null,
    category: "overall", date: "2026-11-16", src: "qwen-official",
    sourceUrl: "https://qwen.ai/blog?id=qwen4-max" },
  // Google 官方博客(2026-11-12)称 Gemini 4 Hydrogen (High) Agent Arena 排名第 5;
  // Arena 榜单 2026-11-14 转录净提升 +14.8%、约 6,500 场真实智能体会话。
  // 官方数据集 2026-11-11 快照尚未收录,先补缺,收录后自动去重。
  { name: "gemini-4-hydrogen (high)", org: "google", license: "Proprietary",
    score: 14.8, ci: null, sessions: 6500, observations: null, srcRank: 5,
    category: "overall", date: "2026-11-14", src: "google-official",
    sourceUrl: "https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-hydrogen/" }
];

// 去重键:忽略 effort 注解,把 20261017 与 1017 折叠为同一键;0910/1017 等构建号保持区分
function seedKey(s) {
  return String(s || "").toLowerCase()
    .replace(/\([^)]*\)/g, "")
    .replace(/[\s\-_/.]+(?:xhigh|high|max|medium|low|thinking|think)\s*$/i, "")
    .replace(/2026-10-17|20261017/, "1017")
    .replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}
function mergeAnnounced(models) {
  const have = {};
  models.forEach(function (m) { have[seedKey(m.name)] = true; });
  let added = 0;
  ANNOUNCED.forEach(function (s) {
    if (have[seedKey(s.name)]) return;
    models.push(Object.assign({}, s, { rank: 0 }));
    added++;
  });
  if (added) {
    models.sort(byScoreName);
    models.forEach(function (m, i) { m.rank = i + 1; });
  }
  return models;
}

class ArenaAgentSource extends BaseSource {
  constructor() {
    super({
      id: "arena_agent", name: "Agent Arena (LMArena)", type: "parquet",
      url: CONFIG.sources.arena_agent.url, host: CONFIG.sources.arena_agent.host,
      outFile: "arena_agent.js", windowVar: "ARENA_AGENT"
    });
    this.fallbackUrl = CONFIG.sources.arena_agent.fallbackUrl;
    this.mirrorUrl = CONFIG.sources.arena_agent.mirrorUrl;
    this.datasetUrl = CONFIG.sources.arena_agent.datasetUrl;
    this.officialUrl = CONFIG.sources.arena_agent.officialUrl;
  }
  async fetch() {
    // 三源并行:ModelScope 镜像可能滞后,不能只把它当主源、失败才切备源;
    // 抓到后由 parse 按 leaderboard_publish_date 选最新批次。
    const mirrors = [
      { label: "ModelScope", url: this.cfg.url },
      { label: "Hugging Face", url: this.fallbackUrl },
      { label: "hf-mirror", url: this.mirrorUrl }
    ].filter(function (m) { return m.url; });
    const results = await Promise.allSettled(mirrors.map(async function (m) {
      // 三源冗余,单源少重试:避免 HF 被墙时 4 次 × 30s 超时拖慢整轮刷新
      return { label: m.label, buf: await transport.fetchWithRetry(m.url, { binary: true, retries: 1 }) };
    }));
    const ok = [], errs = [];
    results.forEach(function (r, i) {
      if (r.status === "fulfilled") ok.push(r.value);
      else {
        errs.push(mirrors[i].label + ": " + r.reason.message);
        console.log("  [arena_agent] " + mirrors[i].label + " 抓取失败: " + r.reason.message);
      }
    });
    if (!ok.length) throw new Error("Agent Arena 数据集全部镜像抓取失败(" + errs.join("; ") + ")");
    return ok;
  }
  async parse(raw) {
    const sources = Array.isArray(raw) ? raw : [{ label: "数据源", buf: raw }];
    const parsed = [];
    for (const s of sources) {
      try {
        parsed.push(Object.assign({ label: s.label }, await this.parseBuffer(s.buf)));
      } catch (e) {
        console.log("  [arena_agent] " + s.label + " 解析失败: " + e.message);
      }
    }
    if (!parsed.length) throw new Error("Agent Arena 数据集未解析到有效条目(所有镜像均失败)");
    // 选最新批次:ModelScope 2026-11-17 实测仍停 11-11,HF 已到 11-15;日期相同再取条目多者
    parsed.sort(function (a, b) {
      if (a.datasetUpdated !== b.datasetUpdated) return a.datasetUpdated < b.datasetUpdated ? 1 : -1;
      return b.models.length - a.models.length;
    });
    const best = parsed[0];
    parsed.slice(1).forEach(function (o) {
      if (o.datasetUpdated !== best.datasetUpdated) {
        console.log("  [arena_agent] 选用 " + best.label + "(" + best.datasetUpdated + ")," +
          o.label + " 批次较旧(" + o.datasetUpdated + ")");
      }
    });
    const ageDays = (Date.now() - new Date(best.datasetUpdated + "T00:00:00Z").getTime()) / 86400000;
    if (ageDays > 8) {
      console.log("  [arena_agent] ⚠ 数据集批次 " + best.datasetUpdated + " 已 " + Math.round(ageDays) +
        " 天未更新(历史间隔 1~8 天)");
    }
    const models = best.models;
    mergeAnnounced(models);
    const latest = models.reduce(function (d, m) { return (m.date && m.date > d) ? m.date : d; }, best.datasetUpdated);
    const sessions = models.reduce(function (s, m) { return s + (m.sessions || 0); }, 0);
    const observations = models.reduce(function (s, m) { return s + (m.observations || 0); }, 0);
    return {
      models: models,
      updated: latest,
      datasetUpdated: best.datasetUpdated,
      stats: { models: models.length, sessions: sessions, observations: observations }
    };
  }
  async parseBuffer(buf) {
    if (!Buffer.isBuffer(buf) || !buf.length) throw new Error("未取到 parquet 二进制内容");
    const { parquetReadObjects } = await import("hyparquet");
    const ab = buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
    const raw = await parquetReadObjects({ file: ab, columns: COLUMNS });
    if (!raw.length) throw new Error("agent 子集未解析到数据(数据集结构变更)");

    // 只取官方最新一次发布(防御:latest 分片若混入历史日期,按日期取最新一批)
    const dates = raw.map(function (r) { return r.leaderboard_publish_date; }).filter(Boolean).sort();
    const updated = dates[dates.length - 1] || CONFIG.TODAY;
    const rows = raw.filter(function (r) { return r.leaderboard_publish_date === updated; });

    const models = rows.map(function (r) {
      const score = r.score == null ? null : round2(toNum(r.score) * 100);
      const lo = r.score_ci_lower == null ? null : toNum(r.score_ci_lower) * 100;
      const hi = r.score_ci_upper == null ? null : toNum(r.score_ci_upper) * 100;
      return {
        name: String(r.model_name || "").trim(),
        org: String(r.organization || ""),
        license: r.license || "",
        score: score,                                            // 净提升 %,可为负
        ci: (lo != null && hi != null) ? round2((hi - lo) / 2) : null,
        observations: toNum(r.observation_count),
        sessions: toNum(r.session_count),
        srcRank: toNum(r.rank),
        category: r.category || "overall",
        date: updated
      };
    }).filter(function (m) { return m.name && m.score != null && m.category === "overall"; });

    if (!models.length) throw new Error("agent 子集未解析到有效条目");
    models.sort(byScoreName);
    models.forEach(function (m, i) { m.rank = i + 1; });         // 源内名次(原始条目;前端按 canonical 归并后重算)
    return { models: models, datasetUpdated: updated };
  }
  toStandard(parsed) {
    return normalizer.fromArray(this.cfg.id, parsed.models, function (m, idx) {
      return {
        name: m.name, score: m.score, rank: idx, updated: parsed.updated,
        metrics: { ci: m.ci, sessions: m.sessions, observations: m.observations, license: m.license, srcRank: m.srcRank },
        meta: { vendor: m.org }
      };
    });
  }
  writeContent(parsed) {
    return writers.windowVarTemplate("ARENA_AGENT",
      "// 数据源:LMArena Agent Arena(真实智能体会话的净提升榜,IPS/因果追踪口径)\n" +
      "// 官方榜:" + this.officialUrl + "(Cloudflare 防护,直抓 403)\n" +
      "// 官方数据集:" + this.datasetUrl + " · config=agent · split=latest\n" +
      "// 镜像:" + [this.cfg.url, this.fallbackUrl, this.mirrorUrl].join(" · ") + "(三源并行,按 leaderboard_publish_date 选最新批次)\n" +
      "// 数据集批次:" + parsed.datasetUpdated + "(种子可能更新,updated=" + parsed.updated + ")\n" +
      "// 字段说明:score=净提升 %(IPS τ̂ × 100,可为负);ci=±95% 半宽(百分点);sessions=独立会话数;\n" +
      "//          observations=信号观测数;license=模型许可;srcRank=官方名次;rank=源内按净提升排序的名次\n" +
      "// 种子(仅在数据集缺该模型时启用,收录同名后自动去重):DeepSeek-V4.1-Flash-20261017、Qwen4-Max、Gemini 4 Hydrogen (High)\n" +
      "// 汇总口径:同一模型按推理强度分档多次上榜,前端按 canonical 取最高分那一条入榜。\n" +
      "// 用途:总览「第三方实测」组第 9 个计分组(权重 9%)与交叉矩阵单列。\n",
      {
        source: "Agent Arena (LMArena)",
        officialUrl: this.officialUrl,
        datasetUrl: this.datasetUrl,
        url: this.cfg.url,
        updated: parsed.updated,
        datasetUpdated: parsed.datasetUpdated,
        refreshedAt: CONFIG.REFRESHED_AT,
        version: "overall",
        metric: "Net improvement (%)",
        desc: "LMArena Agent Arena:以 IPS(因果追踪)估计模型在真实智能体会话中相对 Arena 基线的净提升,可为负;另记 95% 区间、独立会话数与会话内信号观测数。分数为社区真实使用数据,不是固定题库的通过率。",
        stats: parsed.stats,
        models: parsed.models
      }
    );
  }
}

module.exports = registry.register(ArenaAgentSource);
