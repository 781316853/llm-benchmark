// 数据源:AI Coding Daily 编码榜(aicodingdaily.com · 独立第三方个人实测)
// 站点:https://aicodingdaily.com/leaderboard(主办方 Povilas Korop,并非被评厂商之一)。
// 数据形态:榜单页为服务端渲染的单张 HTML 表格,单请求即得全表;
//          每行 = 模型 × 推理档位 × harness 的一次实测配置。
// 列序(共 11 列,# 与 Points per project 两级表头合并后):
//   0 排名 | 1 模型(档位并入名,如 "Opus 5.5 (High)") | 2 总分(0-70) | 3 每 prompt 平均成本($)
//   4 每 prompt 平均耗时(mm:ss) | 5 Video(站内链接列,恒为空文本) | 6 所用 harness
//   7 Laravel 代码质量(满 20) | 8 React-TS 代码质量(满 20) | 9 Bug Finding(满 10) | 10 Edge-case(满 20)
// 口径:每模型 7 个真实项目 / 27 个 prompt(源站方法论页称全站累计 2000+ 次运行),每个 prompt 从项目全新副本起步,
//      模型看不到隐藏测试,无人工反馈;总分为四轴之和(0-70),分数越高越好。
// 混口径提醒:harness 逐模型不同(Codex CLI / Claude Code / OpenCode / Cursor / Devin / Antigravity /
//      DeepSeek Harness),分数是「模型 + 各家 agent」的产物,故与 ModelDial / 亿模亿样同为「第三方实测」
//      计分组、但按站内判据压低权重(综合分权重 8%);主办方非被评厂商,故不属于 CursorBench / FrontierCode
//      那类「仅展示」处理。
// 输出:data/aicodingdaily.js(window.AICODINGDAILY)。
"use strict";
const BaseSource = require("../lib/BaseSource");
const registry = require("../lib/registry");
const transport = require("../lib/transport");
const normalizer = require("../lib/normalizer");
const writers = require("../lib/writers");
const CONFIG = require("../lib/config");

const AXES = CONFIG.sources.aicodingdaily.axes;
const MAX_POINTS = CONFIG.sources.aicodingdaily.maxPoints;

function num(v) {
  const s = String(v == null ? "" : v).replace(/[^\d.]/g, "");
  if (!/\d/.test(s)) return null;               // "N/A" / 表头文案 -> null
  const n = Number(s);
  return isFinite(n) ? n : null;
}

// "$0.22" / "N/A" -> 美元数值
function usd(v) {
  const s = String(v == null ? "" : v).trim();
  if (/^n\/?a$/i.test(s)) return null;
  return num(s);
}

// "07:26" -> 446 秒;兼容 "hh:mm:ss"
function timeSec(v) {
  const parts = String(v == null ? "" : v).trim().split(":").map(function (x) { return Number(x); });
  if (!parts.length || parts.some(function (p) { return !isFinite(p); })) return null;
  if (parts.length === 2) return parts[0] * 60 + parts[1];
  if (parts.length === 3) return parts[0] * 3600 + parts[1] * 60 + parts[2];
  return null;
}

// 源站 "Last update: <b>October 17th, 2026</b>" -> "2026-10-17";解析失败返回空串
const MONTHS = { january: 1, february: 2, march: 3, april: 4, may: 5, june: 6, july: 7,
  august: 8, september: 9, october: 10, november: 11, december: 12 };
function parseUpdated(html) {
  const m = String(html || "").match(/Last update:\s*<b>([^<]+)<\/b>/i);
  if (!m) return "";
  const s = m[1].replace(/(\d)(st|nd|rd|th)/gi, "$1").trim();     // 去序数后缀
  const p = s.match(/^([A-Za-z]+)\s+(\d{1,2}),\s*(\d{4})$/);
  if (!p) return "";
  const mo = MONTHS[p[1].toLowerCase()];
  if (!mo) return "";
  const d = String(Number(p[2]));
  return p[3] + "-" + (mo < 10 ? "0" + mo : mo) + "-" + (d.length < 2 ? "0" + d : d);
}

// 模型名里的推理档位以尾部括号给出(如 "GPT-6.1-Sol (High)"),需剥离为独立字段。
// 只匹配档位词表(整括号内容即档位),避免把名字里的括注(如版本号说明)误当档位。
const EFFORT_IN_PAREN = /\s*\((Extra High|Extra Low|Xhigh|Minimal|Max|High|Medium|Low)\)\s*$/i;

// 源站「Tested with」列在 harness 名之上另起一行相对时间(如 "6 hours ago"),取表格文本时会拼到前面;
// 该时间是站内展示用的更新提示,不是 harness 的一部分,入库前剥掉。
const AGO_PREFIX = /^(?:\d+\s+(?:minute|hour|day|week|month|year)s?\s+ago|just now|yesterday)\s+/i;

// 模型名归一键(与 js/data.js / model-map.js 同规则)
function normKey(s) {
  return String(s || "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

// 解析官方表格:仅取 11 列的数据行(两级表头行分别 8 列与 4 列,天然被排除)
function parseRows(raw) {
  const configs = [];
  const seen = {};
  transport.parseTableRows(raw).forEach(function (row) {
    const cells = row.text;
    if (cells.length < 11) return;
    const rank = Number(cells[0]);
    if (!isFinite(rank) || rank < 1) return;                 // 表头行排名列为空串("" -> 0)
    const total = num(cells[2]);
    if (total == null) return;
    const rawName = String(cells[1] || "").trim();
    if (!rawName || rawName === "Model") return;
    let model = rawName, effort = null;
    const em = rawName.match(EFFORT_IN_PAREN);
    if (em) { effort = em[1]; model = rawName.slice(0, em.index).trim(); }
    const harness = String(cells[6] || "").replace(AGO_PREFIX, "").trim() || null;
    const key = rank + "|" + normKey(model) + "|" + (effort || "") + "|" + total + "|" + (harness || "");
    if (seen[key]) return;                                    // 防御源站重复渲染同表(桌面/移动两份)
    seen[key] = 1;
    configs.push({
      rank: rank,
      model: model,
      effort: effort,
      score: total,                        // 总分(0-70)
      costUsd: usd(cells[3]),              // 每 prompt 平均成本(USD)
      timeSec: timeSec(cells[4]),          // 每 prompt 平均耗时(秒)
      timeStr: String(cells[4] || "").trim() || null,
      harness: harness,
      laravel: num(cells[7]),
      reactTs: num(cells[8]),
      bugFinding: num(cells[9]),
      edgeCase: num(cells[10]),
      src: CONFIG.sources.aicodingdaily.src
    });
  });
  return configs;
}

class AICodingDailySource extends BaseSource {
  constructor() {
    super({
      id: "aicodingdaily", name: "AI Coding Daily", type: "html",
      url: CONFIG.sources.aicodingdaily.url, host: CONFIG.sources.aicodingdaily.host,
      methodUrl: CONFIG.sources.aicodingdaily.methodUrl,
      outFile: "aicodingdaily.js", windowVar: "AICODINGDAILY"
    });
  }
  parse(raw) {
    const configs = parseRows(raw);
    if (!configs.length) throw new Error("未解析到任何 AI Coding Daily 行");
    // 模型级主榜:每模型取总分最高的配置(同分时保留源站排名更靠前者,严格大于才替换)
    const map = {};
    configs.forEach(function (c) {
      const k = normKey(c.model);
      if (!map[k] || c.score > map[k].score) map[k] = c;
    });
    const models = Object.keys(map).map(function (k) {
      const best = map[k];
      return Object.assign({}, best, {
        configs: configs.filter(function (c) { return normKey(c.model) === k; }).length
      });
    });
    models.sort(function (a, b) { return b.score - a.score || (a.costUsd == null ? 1 : 0) - (b.costUsd == null ? 1 : 0); });
    models.forEach(function (m, i) { m.rank = i + 1; });
    return { updated: parseUpdated(raw), models: models, configs: configs };
  }
  toStandard(parsed) {
    return normalizer.fromArray(this.cfg.id, parsed.configs, function (c, idx) {
      return {
        name: c.model, score: c.score, rank: idx,
        updated: parsed.updated || CONFIG.TODAY,
        metrics: { cost: c.costUsd, latencyS: c.timeSec },
        meta: { effort: c.effort, harness: c.harness }
      };
    });
  }
  writeContent(parsed) {
    const R = CONFIG.REFRESHED_AT;
    return writers.windowVarTemplate("AICODINGDAILY",
      "// 数据源:AI Coding Daily 编码榜(独立第三方实测,源站更新 " + (parsed.updated || "未知") + ")\n" +
      "// 来源:" + this.cfg.url + "(方法论:" + this.cfg.methodUrl + ")\n" +
      "// 字段:configs[]=源站全表(模型 × 推理档位 × harness);models[]=模型级主榜(每模型取最高总分配置)\n" +
      "//      score=总分(0-" + MAX_POINTS + "),四轴 laravel(" + AXES.laravel + ")/reactTs(" + AXES.reactTs +
      ")/bugFinding(" + AXES.bugFinding + ")/edgeCase(" + AXES.edgeCase + ");costUsd=每 prompt 平均成本(USD,源站未给为 null)\n" +
      "//      timeSec=每 prompt 平均耗时(秒);harness=该次实测所用 agent 命令行(逐模型不同)\n" +
      "// 用途:独立第三方实测(主办方非被评厂商)→ 计入总览综合分(权重 8%)与命中数;完整榜见「AI Coding Daily」页。\n",
      {
        source: "AI Coding Daily",
        url: this.cfg.url,
        methodUrl: this.cfg.methodUrl,
        maxPoints: MAX_POINTS,
        axes: AXES,
        updated: parsed.updated,
        refreshNote: "源站按周更新",
        refreshedAt: R,
        stats: { entries: parsed.configs.length, models: parsed.models.length },
        desc: "AI Coding Daily(Povilas Korop 个人实测站):每个模型在 7 个真实项目上跑 27 个 prompt(全站累计 2000+ 次运行),每个 prompt 从项目全新副本起步、模型看不到隐藏测试、无人工反馈;总分为 Laravel 代码质量(20)+ React-TS 代码质量(20)+ Bug Finding(10)+ Edge-case Testing(20)四轴之和(0-70),另记每 prompt 平均成本与耗时。分数越高越好,成本/耗时越低越优。",
        models: parsed.models,
        configs: parsed.configs
      }
    );
  }
}

module.exports = registry.register(AICodingDailySource);
