// 数据源:Terminal-Bench-Science 0.1(斯坦福/Laude 科研工作流评测)
// 站点:https://www.terminal-bench-science.ai/(官方公告;榜单托管在 Harbor Hub)
// 主源:Harbor Hub 数据集榜单
//   https://hub.harborframework.com/datasets/terminal-bench-science/terminal-bench-science/latest?tab=leaderboard&leaderboard=v0-1-eval
//   页面为 Next.js 客户端渲染:榜单行由 Server Action「fetchLeaderboardWithRows」异步取回,
//   原始 HTML 不含数据。本源从页面 RSC 数据提取榜单 id,再从页面脚本块自发现 action id
//   (id 随构建变化,不能写死),POST 后解析 RSC 流里的 rows[];每条含
//   model/agent/accuracy/accuracy_stderr/reasoning_effort/release_date/total_tokens/total_cost_usd。
// 回退:explainx 博客镜像表(T3,仅 9 条旧模型,与官方公告 0.1 数值一致)。
// 补充:厂商官方发布种子(T2)与 AI Release Tracker 聚合(T3),两者都只补官方榜未收录的模型。
// 性质:agent×model 组合条目(70 科研任务 × 3 次试验);仅「权威基准测试」页展示,不计入综合分/命中。
// 输出:data/tbscience.js(window.TBSCIENCE)。
"use strict";
const BaseSource = require("../lib/BaseSource");
const registry = require("../lib/registry");
const transport = require("../lib/transport");
const normalizer = require("../lib/normalizer");
const writers = require("../lib/writers");
const officialSeeds = require("../lib/official-seeds");
const art = require("../lib/aireleasetracker");
const { normKey } = require("../lib/mergeByTier");
const CONFIG = require("../lib/config");

const TASKS = 70;
const TRIALS_PER_TASK = 3;
const ACTION_NAME = "fetchLeaderboardWithRows";

function round1(v) { return v == null ? null : Math.round(Number(v) * 10) / 10; }
function round2(v) { return v == null ? null : Math.round(Number(v) * 100) / 100; }

// 页面内 RSC flight 文本是二次转义的 JSON 字符串,先还原常见转义再匹配结构
function unescapeFlight(html) {
  return String(html || "").replace(/\\"/g, '"').replace(/\\\\/g, "\\");
}

// 从页面 RSC 数据里取榜单 id。页面可能挂着多个榜单,优先名字与配置一致的 v0-1-eval
function extractLeaderboard(html, wanted) {
  const plain = unescapeFlight(html);
  const re = /"id":"([0-9a-f-]{36})","package_id":"[^"]*","dataset_version_ids":\[[^\]]*\],"name":"([^"]+)"/g;
  let m;
  const found = [];
  while ((m = re.exec(plain)) !== null) found.push({ id: m[1], name: m[2] });
  const hit = found.filter(function (x) { return x.name === wanted; })[0];
  if (hit) return hit;
  // 仅一个榜单时仍可用(源站可能改名);多个且无匹配时直接失败,避免静默取错版本
  if (found.length === 1) {
    console.log("  [tbscience] 榜单名 " + found[0].name + " 与配置 " + wanted + " 不一致,按唯一榜单继续");
    return found[0];
  }
  throw new Error("页面中未找到榜单 " + wanted + "(站点改版?)");
}

// Server Action id 只在客户端脚本块里出现,且随构建变化:抓取页面引用的脚本块逐个查找。
// 同 host 限流会拖慢 20+ 个脚本块的抓取,这里用更小的间隔(只读静态资源,压力可忽略)。
async function findActionId(html, pageUrl) {
  const scripts = [];
  const re = /<script[^>]+src="([^"]+)"/g;
  let m;
  while ((m = re.exec(html)) !== null) scripts.push(m[1]);
  if (!scripts.length) throw new Error("页面未引用客户端脚本块");
  const texts = await Promise.all(scripts.map(function (src) {
    const u = new URL(src, pageUrl).href;
    return transport.fetchWithRetry(u, { retries: 1, timeoutMs: 30000, rateLimitMs: 120 })
      .catch(function () { return ""; });
  }));
  // 形如 (0,tw.createServerReference)("40775d...",tw.callServer,void 0,tw.findSourceMapURL,"fetchLeaderboardWithRows")
  const refRe = /createServerReference\)?\(\s*"([0-9a-f]{40,})"[^)]{0,300}"fetchLeaderboardWithRows"/;
  for (let i = 0; i < texts.length; i++) {
    const hit = texts[i].match(refRe);
    if (hit) return hit[1];
  }
  throw new Error("未在客户端脚本中找到 " + ACTION_NAME + " 动作 id(站点改版?)");
}

// 从 Server Action 的 RSC 响应里取 rows[]:每行形如 `1:{...json...}`
function parseActionRows(text) {
  const lines = String(text || "").split("\n");
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const colon = line.indexOf(":");
    if (colon <= 0) continue;
    const payload = line.slice(colon + 1);
    if (payload.indexOf('"rows"') < 0) continue;
    try {
      const obj = JSON.parse(payload);
      if (Array.isArray(obj.rows)) return obj.rows;
    } catch (e) { /* 落到下方括号配对兜底 */ }
  }
  const anchor = String(text || "").indexOf('"rows"');
  if (anchor >= 0) {
    const arr = bracketArray(text, anchor);
    if (arr) {
      try { return JSON.parse(arr) || []; } catch (e) { /* ignore */ }
    }
  }
  return [];
}

// 从 anchor 附近第一个 "[" 起做括号配对,返回数组原文
function bracketArray(text, anchor) {
  const start = text.indexOf("[", anchor);
  if (start < 0) return null;
  let depth = 0, inStr = false, esc = false;
  for (let j = start; j < text.length; j++) {
    const c = text[j];
    if (inStr) {
      if (esc) esc = false;
      else if (c === "\\") esc = true;
      else if (c === '"') inStr = false;
      continue;
    }
    if (c === '"') inStr = true;
    else if (c === "[") depth++;
    else if (c === "]") {
      depth--;
      if (depth === 0) return text.slice(start, j + 1);
    }
  }
  return null;
}

// Harbor 的 Anthropic 条目只写「Opus 5.5」等短名,补回品牌前缀与站内 canonical id 对齐
function displayName(label, org) {
  const s = String(label || "").trim();
  if (/^anthropic$/i.test(String(org || "")) && !/^claude(\s|$)/i.test(s)) return "Claude " + s;
  return s;
}

function officialModels(rows) {
  const models = [];
  rows.forEach(function (r) {
    if (!r || r.status === "hidden") return; // 站点公开视图不展示隐藏行
    const md = r.metadata || {}, mt = r.metrics || {};
    const label = md.model_display && md.model_display.label;
    if (!label || mt.accuracy == null) return;
    const modelOrg = (md.model_org && md.model_org.label) || null;
    models.push({
      model: displayName(label, modelOrg),
      agent: (md.agent_display && md.agent_display.label) || null,
      score: round1(mt.accuracy),
      ci: round1(mt.accuracy_stderr),
      effort: md.reasoning_effort || null,
      releaseDate: md.model_release_date || null,
      costUsd: round2(mt.total_cost_usd),
      totalTokens: mt.total_tokens != null ? Math.round(mt.total_tokens) : null,
      runs: mt.tasks != null ? mt.tasks : null,     // 该条目总运行数(70 任务 × 3 次)
      passes: mt.passes != null ? mt.passes : null,
      agentOrg: (md.agent_org && md.agent_org.label) || null,
      modelOrg: modelOrg,
      src: "official",
      rank: r.rank != null ? r.rank : null
    });
  });
  return models;
}

// explainx 镜像回退:定位表头含 Harness + Resolution rate 的表格,取其后 模型|Harness|解决率 行
function mirrorModels(html) {
  const tables = (String(html || "").match(/<table[\s\S]*?<\/table>/gi) || []);
  let target = null;
  tables.forEach(function (t) {
    if (target) return;
    const head = (t.match(/<th[^>]*>([\s\S]*?)<\/th>/gi) || []).map(function (h) {
      return h.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
    }).join("|");
    if (/Harness/i.test(head) && /Resolution/i.test(head)) target = t;
  });
  if (!target) throw new Error("未找到 Resolution rate 表格(站点结构变更)");
  const models = [];
  const trRe = /<tr[^>]*>([\s\S]*?)<\/tr>/gi;
  let m;
  while ((m = trRe.exec(target)) !== null) {
    const cells = [];
    const tdRe = /<t[dh][^>]*>([\s\S]*?)<\/t[dh]>/gi;
    let c;
    while ((c = tdRe.exec(m[1])) !== null) {
      cells.push(transport.htmlDecode(c[1].replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim()));
    }
    if (cells.length < 3) continue;
    if (/^(Model|Harness)$/i.test(cells[0]) || /^(Model|Harness)$/i.test(cells[1])) continue; // 表头
    const scoreM = String(cells[2] || "").match(/(\d+(?:\.\d+)?)\s*%/);
    if (!scoreM) continue;
    const model = cells[0], harness = cells[1];
    if (!model || !harness) continue;
    models.push({ model: model, agent: harness, score: Number(scoreM[1]), src: "mirror" });
  }
  return models;
}

class TBScienceSource extends BaseSource {
  constructor() {
    super({
      id: "tbscience", name: "Terminal-Bench-Science 0.1", type: "html",
      url: CONFIG.sources.tbscience.url, host: CONFIG.sources.tbscience.host,
      version: CONFIG.sources.tbscience.version,
      leaderboard: CONFIG.sources.tbscience.leaderboard,
      datasetUrl: CONFIG.sources.tbscience.datasetUrl,
      officialUrl: CONFIG.sources.tbscience.officialUrl,
      announcementUrl: CONFIG.sources.tbscience.announcementUrl,
      explainxUrl: CONFIG.sources.tbscience.explainxUrl,
      outFile: "tbscience.js", windowVar: "TBSCIENCE"
    });
  }
  async fetch() {
    const artP = art.fetchModelsSafe("tbscience");
    let official = null;
    try {
      official = await this.fetchOfficial();
    } catch (e) {
      console.log("  [tbscience] Harbor 官方榜抓取失败,回退 explainx 镜像: " + e.message);
      const prev = writers.loadJsGlobal("tbscience.js", "TBSCIENCE");
      this.actionId = (prev && prev.actionId) || null; // 保留缓存,下次仍先复用
    }
    const mirror = official ? null : await transport.fetchWithRetry(this.cfg.explainxUrl, { retries: this.cfg.retries });
    return { official: official, mirror: mirror, art: await artP };
  }
  async fetchOfficial() {
    const pageUrl = this.cfg.url;
    const html = await transport.fetchWithRetry(pageUrl, { retries: this.cfg.retries, timeoutMs: 60000 });
    const lb = extractLeaderboard(html, this.cfg.leaderboard);
    // action id 只在客户端脚本块里出现,而站点对 27 个脚本块的并发抓取有节流(实测近 90s)。
    // 优先复用上次写入数据文件的 id(同一构建内有效);站点重新部署后 POST 失败再重新发现。
    const prev = writers.loadJsGlobal("tbscience.js", "TBSCIENCE");
    const cached = prev && prev.actionId;
    let actionId = cached || null;
    let rows = null;
    if (cached) {
      try {
        rows = await this.postLeaderboard(pageUrl, cached, lb.id);
      } catch (e) {
        console.log("  [tbscience] 缓存的 action id 已失效,重新发现: " + e.message);
      }
    }
    if (!rows) {
      actionId = await findActionId(html, pageUrl);
      rows = await this.postLeaderboard(pageUrl, actionId, lb.id);
    }
    this.actionId = actionId;
    return { leaderboard: lb.name, actionId: actionId, rows: rows };
  }
  async postLeaderboard(pageUrl, actionId, leaderboardId) {
    const text = await transport.fetchWithRetry(pageUrl, {
      method: "POST",
      body: JSON.stringify([leaderboardId]),
      headers: {
        "Next-Action": actionId,
        "Content-Type": "text/plain;charset=UTF-8",
        "Accept": "text/x-component"
      },
      retries: 1, timeoutMs: 60000
    });
    const rows = parseActionRows(text);
    if (!rows.length) throw new Error("Server Action 未返回榜单行");
    // 行结构校验:字段改名时尽早失败,让 fetch 层回退 explainx,而不是到 parse 才整体失败
    const shaped = rows.some(function (r) {
      return r && r.metadata && r.metadata.model_display && r.metadata.model_display.label &&
        r.metrics && r.metrics.accuracy != null;
    });
    if (!shaped) throw new Error("Server Action 返回的行结构不符合预期(字段改名?)");
    return rows;
  }
  parse(raw) {
    let models;
    if (raw.official) {
      models = officialModels(raw.official.rows);
      if (!models.length) throw new Error("Harbor 官方榜未解析到任何行");
    } else {
      models = mirrorModels(raw.mirror);
      if (!models.length) throw new Error("未解析到任何 Terminal-Bench-Science 行");
    }
    // 官方榜单按解决率降序
    models.sort(function (a, b) { return b.score - a.score; });
    models.forEach(function (m, i) { if (m.rank == null) m.rank = i + 1; });
    // 厂商官方发布种子(T2):仅补榜单未收录的模型,rank 留空、不重排既有名次
    officialSeeds.forBenchmark("tbscience").forEach(function (s) {
      const tag = officialSeeds.srcOf(s);
      const key = officialSeeds.normName(s.name);
      if (models.some(function (m) { return officialSeeds.normName(m.model) === key; })) {
        console.log("  [" + tag + "] 已收录,跳过: " + s.name); return;
      }
      const rec = { model: s.name, agent: s.agent || null, score: s.score, src: tag, rank: null };
      if (s.effort) rec.effort = s.effort;
      if (s.date) rec.releaseDate = s.date;
      if (s.cost != null) rec.costUsd = s.cost;
      models.push(rec);
      console.log("  [" + tag + "] 补缺: " + s.name + " (" + s.score + "%)");
    });
    // AI Release Tracker(T3)最后补缺:厂商种子(T2)优先,已收录的模型一律不改分
    const known = models.map(function (m) { return normKey(m.model); });
    function isKnown(name) {
      const n = normKey(name);
      return known.some(function (k) {
        return k === n || (k.length >= 5 && n.endsWith(k)) || (n.length >= 5 && k.endsWith(n));
      });
    }
    (raw.art ? raw.art.models : []).forEach(function (m) {
      if (isKnown(m.model)) return;
      known.push(normKey(m.model));
      models.push({ model: m.model, agent: null, score: m.score, src: "aireleasetracker", rank: null });
      console.log("  [aireleasetracker] 补充: " + m.model + " (" + m.score + "%)");
    });
    return { tasks: TASKS, trials: TRIALS_PER_TASK, leaderboard: raw.official ? raw.official.leaderboard : "mirror", actionId: this.actionId || null, models: models };
  }
  toStandard(parsed) {
    return normalizer.fromArray(this.cfg.id, parsed.models, function (m, idx) {
      return {
        name: m.model,
        score: m.score,
        rank: idx,
        updated: CONFIG.TODAY,
        metrics: { ci: m.ci, cost: m.costUsd, totalTokens: m.totalTokens },
        meta: { agent: m.agent, effort: m.effort, releaseDate: m.releaseDate, modelOrg: m.modelOrg }
      };
    });
  }
  writeContent(parsed) {
    const T = CONFIG.TODAY, R = CONFIG.REFRESHED_AT, v = this.cfg.version, n = parsed.models.length;
    return writers.windowVarTemplate("TBSCIENCE",
      "// 数据源:Terminal-Bench-Science " + v + "(斯坦福/Laude 科研工作流评测,更新于 " + T + ")\n" +
      "// 来源:" + this.cfg.url + "(官方:" + this.cfg.announcementUrl + ")\n" +
      "// 回退:" + this.cfg.explainxUrl + "(explainx 博客镜像 T3,仅官方榜不可用时使用)\n" +
      "// 补充:https://aireleasetracker.com/benchmark/terminal-bench-science-0.1(第三方聚合 T3,只补缺失模型)\n" +
      "// " + CONFIG.channelPolicy + "(主源 Harbor Hub 官方榜 T1;厂商官方发布自测分走种子层 T2,仅补缺)\n" +
      "// 字段说明:model=模型名;agent=Agent 框架;score=解决率(%);ci=标准误(±%);effort=推理档位;\n" +
      "//   releaseDate=模型发布日期;costUsd/totalTokens=整轮 210 次运行的总成本/总 tokens;runs/passes=运行数/通过数;\n" +
      "//   agentOrg/modelOrg=Agent / 模型的厂商;\n" +
      "//   src=数据来源渠道(official/mirror/moonshot-official/tencent-official/anthropic-official/aireleasetracker)\n" +
      "// actionId=Harbor Server Action 的构建标识(仅网络层缓存,非榜单数据;站点重新部署后自动重发现)\n" +
      "// 用途:「权威基准测试」页展示,仅参考,不计入综合分/命中数。\n",
      {
        source: "Terminal-Bench-Science",
        url: this.cfg.url,
        datasetUrl: this.cfg.datasetUrl,
        announcementUrl: this.cfg.announcementUrl,
        explainxUrl: this.cfg.explainxUrl,
        channelPolicy: CONFIG.channelPolicy,
        version: v,
        leaderboard: parsed.leaderboard,
        actionId: parsed.actionId || undefined,
        updated: T,
        refreshedAt: R,
        stats: { tasks: parsed.tasks, trialsPerTask: parsed.trials, entries: n },
        desc: "Terminal-Bench-Science 0.1:由斯坦福与 Laude 团队联合各学科专家构建的科研工作流评测(70 个任务,来自真实研究流程,每任务 3 次独立试验),解决率越高越好。",
        models: parsed.models
      }
    );
  }
}

module.exports = registry.register(TBScienceSource);
