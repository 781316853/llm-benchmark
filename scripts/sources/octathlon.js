// 数据源:AI 十项全能·定时挑战赛(octathlon.wendystars.com · 独立第三方限时 Agent 实测)
// 站点:https://octathlon.wendystars.com/decathlon/(主办方 wendystars,并非被评厂商之一)。
// 数据形态:Vite 静态站,榜单页为客户端渲染;本源直接抓页面运行时读取的三份公开 JSON:
//   data/models.json  参赛模型元数据(id/name/vendor/agent/effort/tested/aliases)
//   data/tasks.json   10 个类别 / 13 道题的题面元数据(权重、限时、标准评判题或主动设计题、简介)
//   data/scores.json  榜单成绩:updated/order/scores/cost_source
// 口径:每模型 13 道题独立作答,每题折算 0-100;类别权重各 10%,类内各题平分;总分 0-100。
//   7 道标准评判题由程序校验生成分数;6 道主动设计题由 Claude Opus 5.5 与 GPT 6.1 Sol 各评一次、逐项取平均。
//   每题开新会话、无人答疑、到时中止;受测模型看不到限时。
// 混口径提醒:模型连同它自己的 agent harness 一起测(Claude Code / Codex / Qwen Code / Kimi Code /
//   ZCode / OpenCode / CodeBuddy Code / MiMo Code / Grok Build / MiniMax Code / DeepSeek Harness 等),
//   分数是「模型 + 脚手架 + 推理档位」的产物;两位评分员本身也在被评名单中(设计题各占一半权重)。
// 输出:data/octathlon.js(window.OCTATHLON),供独立页与总览矩阵使用。
"use strict";
const BaseSource = require("../lib/BaseSource");
const registry = require("../lib/registry");
const transport = require("../lib/transport");
const normalizer = require("../lib/normalizer");
const writers = require("../lib/writers");
const CONFIG = require("../lib/config");

const C = CONFIG.sources.octathlon;

// 源站 updated 形如 "2026-11-23"(个别批次可能带时间或用 2026.11.23);统一为 YYYY-MM-DD
function dateOnly(s) {
  const m = String(s || "").match(/^(\d{4})[-./](\d{1,2})[-./](\d{1,2})/);
  return m ? m[1] + "-" + String(Number(m[2])).padStart(2, "0") + "-" + String(Number(m[3])).padStart(2, "0") : "";
}

// 数值字段清洗:缺失/非数返回 null;保留源站精度
function num(v) {
  if (v == null || v === "") return null;
  const n = Number(v);
  return isFinite(n) ? n : null;
}

// 类别 + 题目元数据:源站按类别分组给出,展开成
// categories[](含 taskKeys)与 tasks[](逐题,含类别名与题号)
function buildCatalog(taskGroups) {
  const categories = [];
  const tasks = [];
  (taskGroups || []).forEach(function (g) {
    if (!g || !g.key) return;
    const taskKeys = [];
    (g.tasks || []).forEach(function (t) {
      if (!t || !t.key) return;
      taskKeys.push(t.key);
      tasks.push({
        key: t.key,
        no: t.no != null ? t.no : null,
        category: g.key,
        categoryName: g.name || "",
        categoryNameEn: g.en || "",
        name: t.name || "",
        nameEn: t.name_en || "",
        short: t.short || t.name || "",
        shortEn: t.short_en || t.name_en || "",
        weight: num(t.weight),
        minutes: num(t.minutes),
        kind: t.kind || g.kind || "",
        brief: t.brief || "",
        briefEn: t.brief_en || "",
        deliverable: t.deliverable || "",
        deliverableEn: t.deliverable_en || ""
      });
    });
    categories.push({
      key: g.key,
      name: g.name || "",
      nameEn: g.en || "",
      short: g.short || g.name || "",
      shortEn: g.short_en || g.en || "",
      weight: num(g.weight),
      kind: g.kind || "",
      brief: g.brief || "",
      briefEn: g.brief_en || "",
      taskKeys: taskKeys
    });
  });
  return { categories: categories, tasks: tasks };
}

// 成本条目:源站字段随模型而异(订阅折算/API 标价/积分制),原样保留数值,缺省为 null
function buildCost(c) {
  if (!c || typeof c !== "object") return null;
  const plan = c.plan && typeof c.plan === "object" ? {
    name: c.plan.name || "",
    price: num(c.plan.price),
    currency: c.plan.currency || "",
    period: c.plan.period || ""
  } : null;
  return {
    cny: num(c.cny),
    basis: c.basis || "",
    tokens: num(c.tokens),
    tasks: num(c.tasks),
    method: c.method || "",
    apiUsd: num(c.api_usd),
    apiCny: num(c.api_cny),
    hours: num(c.hours),
    tps: num(c.tps),
    tpsReplies: num(c.tps_replies),
    plan: plan
  };
}

class OctathlonSource extends BaseSource {
  constructor() {
    super({
      id: "octathlon", name: "AI 十项全能", type: "json",
      url: C.url, host: C.host,
      outFile: "octathlon.js", windowVar: "OCTATHLON"
    });
  }
  // 三份 JSON 并行抓取;任一失败则本轮整体失败(沿用旧 data/octathlon.js)
  async fetch() {
    const [models, tasks, scores] = await Promise.all([
      transport.fetchWithRetry(C.modelsUrl),
      transport.fetchWithRetry(C.tasksUrl),
      transport.fetchWithRetry(this.cfg.url)
    ]);
    return { models: models, tasks: tasks, scores: scores };
  }
  parse(raw) {
    let modelsJson, tasksJson, scoresJson;
    try {
      modelsJson = JSON.parse(raw.models);
      tasksJson = JSON.parse(raw.tasks);
      scoresJson = JSON.parse(raw.scores);
    } catch (e) {
      throw new Error("AI 十项全能接口不是合法 JSON(" + e.message + ")");
    }
    if (!Array.isArray(modelsJson) || !modelsJson.length) throw new Error("models.json 为空或结构变更");
    if (!Array.isArray(tasksJson) || !tasksJson.length) throw new Error("tasks.json 为空或结构变更");
    const scores = (scoresJson && scoresJson.scores) || {};
    const order = Array.isArray(scoresJson && scoresJson.order) ? scoresJson.order : Object.keys(scores);
    if (!order.length) throw new Error("scores.json 未解析到任何成绩");

    const byId = {};
    modelsJson.forEach(function (m) { if (m && m.id) byId[m.id] = m; });
    const catalog = buildCatalog(tasksJson);

    const models = [];
    order.forEach(function (id) {
      const s = scores[id];
      if (!s || num(s.total) == null) return;
      const m = byId[id] || {};
      models.push({
        slug: id,
        name: m.name || id,
        vendor: m.vendor || "",
        agent: m.agent || "",
        effort: m.effort || "",
        tested: dateOnly(m.tested),
        score: num(s.total),
        rank: s.rank != null ? s.rank : models.length + 1,
        status: s.status || "",
        done: num(s.done),
        standard: (s.kinds && num(s.kinds.standard)) || null,
        design: (s.kinds && num(s.kinds.design)) || null,
        categories: s.categories || {},
        tasks: s.tasks || {},
        cost: buildCost(s.cost),
        aliases: Array.isArray(m.aliases) ? m.aliases : []
      });
    });
    if (!models.length) throw new Error("scores.json 未解析到任何带总分的模型");
    models.sort(function (a, b) { return b.score - a.score || a.rank - b.rank; });

    const standardTasks = catalog.tasks.filter(function (t) { return t.kind === "standard"; }).length;
    const designTasks = catalog.tasks.filter(function (t) { return t.kind === "design"; }).length;
    const cs = scoresJson.cost_source || null;
    return {
      updated: dateOnly(scoresJson.updated) || CONFIG.TODAY,
      models: models,
      categories: catalog.categories,
      tasks: catalog.tasks,
      costSource: cs ? {
        name: cs.name || "",
        nameEn: cs.name_en || "",
        url: cs.url || "",
        fetched: dateOnly(cs.fetched),
        usdCny: num(cs.usd_cny)
      } : null,
      stats: {
        models: models.length,
        tasks: catalog.tasks.length,
        categories: catalog.categories.length,
        standardTasks: standardTasks,
        designTasks: designTasks
      }
    };
  }
  toStandard(parsed) {
    return normalizer.fromArray(this.cfg.id, parsed.models, function (m, idx) {
      return {
        name: m.name, score: m.score, rank: idx, updated: parsed.updated,
        metrics: {
          standard: m.standard, design: m.design, agent: m.agent, effort: m.effort,
          costCny: m.cost ? m.cost.cny : null, tokens: m.cost ? m.cost.tokens : null,
          tps: m.cost ? m.cost.tps : null, done: m.done
        },
        meta: { vendor: m.vendor }
      };
    });
  }
  writeContent(parsed) {
    const s = parsed.stats;
    return writers.windowVarTemplate("OCTATHLON",
      "// 数据源:AI 十项全能·定时挑战赛(octathlon.wendystars.com,独立第三方限时 Agent 实测;源站更新 " + parsed.updated + ")\n" +
      "// 来源:" + C.boardUrl + "(说明:" + C.aboutUrl + ";题目与评测脚本:" + C.repoUrl + ")\n" +
      "// 接口:" + C.url + " / " + C.modelsUrl + " / " + C.tasksUrl + "\n" +
      "// 字段:models[]=模型级总榜(score=总分 0-" + C.maxPoints + ",rank=源站名次,standard/design=两类题得分,\n" +
      "//      categories=10 类得分,tasks=13 题得分,cost=测试开销与 Token/TPS,agent=所用 agent harness,effort=推理档位);\n" +
      "//      categories[]=类别元数据(权重各 10%),tasks[]=逐题元数据(题号/限时/权重/类型/简介)\n" +
      "// 口径:13 题各折算 0-100,类别权重各 10%、类内平分;7 道标准评判题由程序校验,6 道主动设计题由\n" +
      "//      Claude Opus 5.5 与 GPT 6.1 Sol 各评一次取平均;每题新会话独立作答、无人答疑、到时中止。\n" +
      "// 混口径:模型连同其自己的 agent harness 一起测,分数混杂模型与脚手架质量;两位评分员本身也在被评名单中。\n" +
      "// 用途:计入总览综合分(「第三方实测」组,权重 8%)与命中数;独立页展示与总览矩阵列。\n",
      {
        source: "AI 十项全能·定时挑战赛",
        url: C.url,
        boardUrl: C.boardUrl,
        aboutUrl: C.aboutUrl,
        repoUrl: C.repoUrl,
        modelsUrl: C.modelsUrl,
        tasksUrl: C.tasksUrl,
        updated: parsed.updated,
        refreshedAt: CONFIG.REFRESHED_AT,
        maxPoints: C.maxPoints,
        costSource: parsed.costSource,
        stats: s,
        desc: "AI 十项全能·定时挑战赛(octathlon.wendystars.com):13 道题 / 10 个类别,AI 编程智能体在 60–100 分钟内独立作答、到时中止、无人答疑。7 道标准评判题由程序校验(Lean 编译、加速比、对局实力值、拆解步数、形状吻合度等),6 道主动设计题由 Claude Opus 5.5 与 GPT 6.1 Sol 各评一次取平均;每题折算 0-100,类别权重各 10%,总分 0-100。模型连同其自己的 agent harness 一起测。",
        categories: parsed.categories,
        tasks: parsed.tasks,
        models: parsed.models
      }
    );
  }
}

module.exports = registry.register(OctathlonSource);
