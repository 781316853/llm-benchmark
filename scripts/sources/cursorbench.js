// 数据源:CursorBench(Cursor 官方 · 编码 Agent 实测)
// 站点:https://cursor.com/cursorbench(Cursor / Anysphere 官方)。
// 数据形态:服务端渲染 HTML 表格(rank | Model(+推理档位) | Score% | Cost/task | Tokens/task | Steps/task),
//          单请求即得全表 52 条 model×档位配置;页面散点图与折线图为「模型级」视图(每模型取最优档),
//          与表格是同一批数据的两种视图。
// 口径:CursorBench 4.0(2026-09 起的任务集)任务取自真实 Cursor 会话中「模糊、跨文件」的编辑/重构/
//      排查/意图理解/长任务管理/设计一致性场景;分数为 agentic grader 判定(允许多种正确答案),
//      绑定的 harness 即 Cursor 自家 agent,故与站内其他基准的协议不可比。
// 性质:仅展示,不计入综合分与命中数(harness 口径不可比);模型级主榜 12 条 + 该模型最优档位,
//      另存 52 条 config 明细供页面展开查看。
// 输出:data/cursorbench.js(window.CURSORBENCH)。
"use strict";
const BaseSource = require("../lib/BaseSource");
const registry = require("../lib/registry");
const transport = require("../lib/transport");
const normalizer = require("../lib/normalizer");
const writers = require("../lib/writers");
const CONFIG = require("../lib/config");

function num(v) {
  const s = String(v == null ? "" : v).replace(/[^\d.]/g, "");
  if (!/\d/.test(s)) return null;               // 无数字(如表头文案 "Score"/"$") -> null
  const n = Number(s);
  return isFinite(n) ? n : null;
}

// 模型名归一键(与 js/data.js / model-map.js 同规则)
function normKey(s) {
  return String(s || "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

// 推理档位后缀:源站表格把档位并入模型名(如 "Opus 5.5 Extra High"),需剥离为独立字段。
// 注:此处只在尾部命中「档位词表」时剥离,不改用全局子串替换(会把品牌名里的 Max 一并吃掉)。
const EFFORT_SUFFIX = /\s+(Extra High|Extra Low|Minimal|Max|High|Medium|Low)$/;

// 解析官方表格:rank | Model(+档位) | Score% | Cost/task | Tokens/task | Steps/task
// 注意:源站桌面端与移动端各渲染一份**完全相同的表格**,故按行内容去重(否则条数翻倍)。
function parseRows(raw) {
  const configs = [];
  const seen = {};
  transport.parseTableRows(raw).forEach(function (row) {
    const cells = row.text;
    if (cells.length < 6) return;                 // 表头行(6 列以下)与其它表格跳过
    const rank = Number(cells[0]);
    if (!isFinite(rank) || rank < 1) return;      // 表头行的排名列为空串("" -> 0),排除
    const score = num(cells[2]);
    if (score == null) return;
    let name = String(cells[1] || "").trim();
    if (!name || name === "Model") return;
    let effort = null;
    const em = name.match(EFFORT_SUFFIX);
    if (em) { effort = em[1].trim(); name = name.slice(0, em.index).trim(); }
    const key = rank + "|" + name + "|" + (effort || "") + "|" + score;
    if (seen[key]) return;                        // 桌面/移动两份表格的同一条目
    seen[key] = 1;
    configs.push({
      rank: rank,
      model: name,
      effort: effort,
      score: score,                 // CursorBench 4.0 分(%)
      costUsd: num(cells[3]),       // 平均每任务成本(美元,按各模型公布的分项 token 单价折算)
      tokens: num(cells[4]),        // 平均每任务 tokens
      steps: num(cells[5]),         // 平均每任务步数
      src: "official"
    });
  });
  return configs;
}

class CursorBenchSource extends BaseSource {
  constructor() {
    super({
      id: "cursorbench", name: "CursorBench", type: "html",
      url: CONFIG.sources.cursorbench.url, host: CONFIG.sources.cursorbench.host,
      officialUrl: CONFIG.sources.cursorbench.officialUrl,
      outFile: "cursorbench.js", windowVar: "CURSORBENCH"
    });
  }
  parse(raw) {
    const configs = parseRows(raw);
    if (!configs.length) throw new Error("未解析到任何 CursorBench 行");
    // 模型级主榜:每模型取分数最高的配置(与源站散点图/折线图的模型级视图同口径);
    // 同分时保留源站排名更靠前者(严格大于才替换)
    const map = {};
    configs.forEach(function (c) {
      const k = normKey(c.model);
      if (!map[k] || c.score > map[k].score) map[k] = c;
    });
    const models = Object.keys(map).map(function (k) {
      const best = map[k];
      return {
        model: best.model,
        effort: best.effort,
        score: best.score,
        costUsd: best.costUsd,
        tokens: best.tokens,
        steps: best.steps,
        configs: configs.filter(function (c) { return normKey(c.model) === k; }).length,
        src: best.src
      };
    });
    models.sort(function (a, b) { return b.score - a.score || (a.costUsd || 0) - (b.costUsd || 0); });
    models.forEach(function (m, i) { m.rank = i + 1; });
    return { version: CONFIG.sources.cursorbench.version, models: models, configs: configs };
  }
  toStandard(parsed) {
    return normalizer.fromArray(this.cfg.id, parsed.models, function (m, idx) {
      return { name: m.model, score: m.score, rank: idx, updated: CONFIG.TODAY, metrics: {}, meta: { effort: m.effort } };
    });
  }
  writeContent(parsed) {
    const T = CONFIG.TODAY, R = CONFIG.REFRESHED_AT;
    return writers.windowVarTemplate("CURSORBENCH",
      "// 数据源:CursorBench(Cursor 官方 · 编码 Agent 实测,更新于 " + T + ")\n" +
      "// 来源:" + this.cfg.url + "(官方:" + this.cfg.officialUrl + ")\n" +
      "// 字段:models[]=模型级主榜(每模型取最优档位);configs[]=源站全表 model×档位配置\n" +
      "//      score=CursorBench " + parsed.version + " 分(%);costUsd=平均每任务成本(USD);tokens/steps=每任务平均\n" +
      "// 用途:「权威基准测试」页完整展示;仅展示,不计入综合分与命中数(harness 绑定 Cursor 自家 agent,口径不可比)。\n",
      {
        source: "CursorBench",
        url: this.cfg.url,
        officialUrl: this.cfg.officialUrl,
        version: parsed.version,
        updated: T,
        refreshedAt: R,
        stats: { entries: parsed.configs.length, models: parsed.models.length },
        desc: "CursorBench " + parsed.version + "(Cursor 官方):在 Cursor 自家 agent harness 上评测来自真实 Cursor 会话的模糊、跨文件任务(编辑/重构/排查/意图理解/长任务管理/设计一致性),agentic grader 判定、允许多种正确答案;分数越高越好,成本/耗时越低越优。",
        models: parsed.models,
        configs: parsed.configs
      }
    );
  }
}

module.exports = registry.register(CursorBenchSource);
