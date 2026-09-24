// 数据源:无机酸 · AI 前端实测(B 站 UP 主 @无机酸-_- 的第三方独立前端实测榜)
// 站点:https://www.bilibili.com/toy/wujisuan-ai-test/index.html(每期实测视频见 CONFIG.sources.wujisuan.methodUrl)
// 站点形态:B 站 toy「外壳页」只嵌一个跨域 sandbox iframe,自身不含任何分数;
//   iframe src = https://www.bilibilitoy.com/toy/wujisuan-ai-test/<toyId>-<版本号>/index.html,
//   其中版本号随每次上传变化,故本源的 fetch() 先抓外壳页提取当期根路径(两段式抓取)。
// 数据接口:内层为静态 SPA,其 app.js 唯一的取数调用是 fetch("./data/site.json")
//   → 本源直接抓该同域静态 JSON(单请求即得全量,无需浏览器渲染)。
// 数据形态:JSON。models[] 为主榜(identity/name/model/effort/agent/vendor/total/rank/date/
//   range{lo,hi,loUncertain,hiUncertain}/video{bvid,url,platform,series}/release{date,source});
//   papers[] 为 task × prompt(short|long) × round(oneshot|final) 明细;tasks[] 为任务定义(含提示词全文);
//   gain 为长提示相对基准的增减益表。
// 量纲:单任务分 0-100,models[].total = 两任务分之和(源站自报 history.scoreRange=[0,200]),非百分制。
//   综合分侧走「榜内稳健 z 分」(尺度不变),故不折算(同 arena_webdev 的 Elo 先例)。
// ⚠️ 口径:每个模型跑在其「自家 agent harness」(cc/codex/zcode/qoder/cursor/antigravity/devin)下,
//   分数混杂模型与 harness 两者质量;且每模型 n=1、仅有源站人工标注的 lo/hi 不确定区间(非置信区间)。
//   effort 字段的「无」在源站是字符串 "null" 而非缺字段,本源统一清洗为 null。
// 性质:已计入总览综合分(「第三方实测」组计分组之一,权重 10%)与命中数(命中分母 7);
//   因量纲与主基准不可比,已列入 validation.consistency.excludedSources。
// 输出:data/wujisuan.js(window.WUJISUAN)。
"use strict";
const BaseSource = require("../lib/BaseSource");
const registry = require("../lib/registry");
const transport = require("../lib/transport");
const normalizer = require("../lib/normalizer");
const writers = require("../lib/writers");
const CONFIG = require("../lib/config");

const CFG = CONFIG.sources.wujisuan;

// 外壳页内指向内层 toy 应用的 iframe src(捕获组 = 应用根路径,不含尾部 /index.html)
const IFRAME_RE = /<iframe[^>]+src=["'](https:\/\/www\.bilibilitoy\.com\/toy\/wujisuan-ai-test\/[^"'?#]+?)\/index\.html/i;
// toy 域名对非浏览器 UA 的裸请求同样放行,但带上常规 UA + Referer 与真实访问形态一致,抗后续收紧
const BROWSER_UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36";

// 数值清洗:非法/缺失返回 null,合法值保留 4 位小数(源站分数最小到 0.01 级)
function num(v) {
  const n = Number(v);
  return isFinite(n) ? Math.round(n * 1e4) / 1e4 : null;
}

// 源站用字符串 "null" 表示「无推理档位」,统一清洗为 null,避免前端显示字面量 null
function optStr(v) {
  if (v == null || v === "" || v === "null") return null;
  return String(v);
}

// papers 的 task×prompt 组合键(supernovai_short)-> 按任务归并的 {short, long}
function pickByTask(row, taskIds) {
  const byTask = {};
  taskIds.forEach(function (t) {
    const short = num(row[t + "_short"]);
    const long = num(row[t + "_long"]);
    if (short != null || long != null) byTask[t] = { short: short, long: long };
  });
  return byTask;
}

class WujisuanSource extends BaseSource {
  constructor() {
    super({
      id: "wujisuan", name: "无机酸 · AI 前端实测", type: "json",
      url: CFG.url, host: CFG.host,
      outFile: "wujisuan.js", windowVar: "WUJISUAN"
    });
  }
  // fetch 返回内层应用根路径(真实数据在 parse 阶段按该路径二次抓取,同 llm2014 的分工)
  async fetch() {
    console.log("[wujisuan] 抓外壳页提取当期版本路径");
    const html = await transport.fetchWithRetry(CFG.url, {
      headers: { "User-Agent": BROWSER_UA, "Referer": "https://www.bilibili.com/" }
    });
    const m = html.match(IFRAME_RE);
    if (!m) throw new Error("外壳页未找到 bililitoy iframe src(源站结构可能已变更)");
    return m[1];
  }
  async parse(appBase) {
    const apiUrl = appBase + CFG.dataPath;
    console.log("  [wujisuan] 抓取 " + apiUrl);
    const text = await transport.fetchWithRetry(apiUrl, {
      headers: { "User-Agent": BROWSER_UA, "Referer": appBase + "/index.html" }
    });
    let d;
    try { d = JSON.parse(text); }
    catch (e) { throw new Error("无机酸 site.json 不是合法 JSON(" + e.message + ")"); }

    const rows = d && d.models;
    if (!Array.isArray(rows) || !rows.length) throw new Error("无机酸 site.json 的 models 为空或结构变更");
    const tasks = Array.isArray(d.tasks) ? d.tasks : [];
    if (!tasks.length) throw new Error("无机酸 site.json 的 tasks 为空或结构变更");
    const updated = /^\d{4}-\d{2}-\d{2}$/.test(d.updated) ? d.updated : "";
    if (!updated) throw new Error("无机酸 site.json 缺少 updated 字段");

    const taskIds = tasks.map(function (t) { return t.id; });
    const models = rows.map(function (r) {
      const range = r.range || {};
      const video = r.video || {};
      const release = r.release || {};
      return {
        rank: r.rank != null ? r.rank : null,
        identity: r.identity || "",
        name: r.name || "",
        model: r.model || "",
        effort: optStr(r.effort),
        agent: optStr(r.agent),
        vendor: optStr(r.vendor),
        score: num(r.total),
        lo: num(range.lo),
        hi: num(range.hi),
        loUncertain: !!range.loUncertain,
        hiUncertain: !!range.hiUncertain,
        date: r.date || "",
        releaseDate: release.date || "",
        bvid: video.bvid || "",
        videoUrl: video.url || "",
        platform: video.platform || "",
        series: video.series || ""
      };
    }).filter(function (m) { return m.name && m.score != null; })
      .sort(function (a, b) { return b.score - a.score; });
    if (!models.length) throw new Error("无机酸 site.json 未解析到有效的模型分数");

    const papers = (Array.isArray(d.papers) ? d.papers : []).map(function (p) {
      return {
        identity: p.identity || "",
        taskId: p.task_id || "",
        prompt: optStr(p.prompt) || "",
        round: optStr(p.round) || "",
        dated: p.dated || "",
        score: num(p.total)
      };
    }).filter(function (p) { return p.identity && p.taskId && p.score != null; });

    const taskList = tasks.map(function (t) {
      const prompts = t.prompts || {};
      return {
        id: t.id || "", name: t.name || "", subtitle: t.subtitle || "",
        kind: optStr(t.kind) || "", number: optStr(t.number) || "",
        description: t.description || "",
        promptShort: prompts.short || "", promptLong: prompts.long || ""
      };
    });

    const gainSrc = d.gain || {};
    const gainRows = (Array.isArray(gainSrc.rows) ? gainSrc.rows : []).map(function (r) {
      return {
        identity: r.identity || "",
        effort: optStr(r.effort),
        agent: optStr(r.agent),
        byTask: pickByTask(r, taskIds),
        baseline: num(r.baseline),
        improved: num(r.improved),
        gain: num(r.gain),
        status: optStr(r.status) || ""
      };
    });

    return {
      updated: updated,
      siteVersion: optStr(d.version) || "",
      author: optStr(d.author) || "",
      appBase: appBase,
      apiUrl: apiUrl,
      videoCollection: d.videoCollection || "",
      currentIdentity: optStr(d.currentModelId) || "",
      scoreRange: (d.history && Array.isArray(d.history.scoreRange)) ? d.history.scoreRange : [],
      dateRange: (d.history && Array.isArray(d.history.dateRange)) ? d.history.dateRange : [],
      models: models,
      tasks: taskList,
      papers: papers,
      gain: {
        method: optStr(gainSrc.method) || "",
        metric: optStr(gainSrc.metric) || "",
        formula: optStr(gainSrc.formula) || "",
        rows: gainRows
      },
      counts: { models: models.length, papers: papers.length, tasks: taskList.length, gainRows: gainRows.length }
    };
  }
  toStandard(parsed) {
    const T = parsed.updated;
    return normalizer.fromArray(this.cfg.id, parsed.models, function (m, idx) {
      return {
        // name 用源站展示名(纯模型名,如 "GPT-6 Sol"):交给别名表归一。
        // 不拼接 effort / agent 后缀,避免被 effort 剥离规则误伤(见 README 的 stripTailEffort 告诫)。
        name: m.name, score: m.score, rank: idx, updated: T,
        metrics: { lo: m.lo, hi: m.hi, videoBvid: m.bvid, testedDate: m.date },
        meta: { vendor: m.vendor, effort: m.effort, agent: m.agent, releaseDate: m.releaseDate }
      };
    });
  }
  writeContent(parsed) {
    const T = parsed.updated, R = CONFIG.REFRESHED_AT, C = parsed.counts;
    return writers.windowVarTemplate("WUJISUAN",
      "// 数据源:无机酸 · AI 前端实测(" + T + " 更新;" + (parsed.author || "第三方独立实测") + ",B 站 UP 主前端端到端实测榜)\n" +
      "// 站点:" + CFG.boardUrl + "\n" +
      "// 接口:" + parsed.apiUrl + "(外壳页内嵌 iframe 的 <toyId>-<版本号> 路径每期变化,本源先抓外壳页提取)\n" +
      "// 实测视频合集:" + (parsed.videoCollection || "(无)") + "\n" +
      "// 量纲:单任务分 0-100;models[].score = 两任务分之和(源站自报区间 0-200),非百分制\n" +
      "// ⚠️ 口径:每模型跑在其自家 agent harness(agent 字段,如 cc/codex/zcode/qoder/cursor)下,\n" +
      "//   分数混杂模型与 harness 两者质量;每模型 n=1,lo/hi 为源站人工标注的不确定区间(非置信区间)。\n" +
      "// 字段说明:rank=源站名次;identity=源站 slug(agent 后缀);name=模型展示名;effort=推理档位(null 表示无);\n" +
      "//          agent=harness;vendor=厂商;score=两任务总分;lo/hi + loUncertain/hiUncertain=不确定区间;\n" +
      "//          date=实测日期;releaseDate=源站核实的模型发布日;bvid/videoUrl=该期实测视频;\n" +
      "//          platform=源站记录的运行环境;series=源站视频专栏\n" +
      "// 结构:models=主榜;tasks=任务定义(含短/长提示词全文);papers=模型×任务×短长提示×首轮/最终明细;\n" +
      "//        gain=长提示相对基准的增减益(byTask 按任务 id 给出 short/long 四项子分)\n" +
      "// 用途:已计入总览综合分(「第三方实测」组计分组之一,权重 10%)与命中数(分母 7);「无机酸实测」页完整展示。\n",
      {
        source: "无机酸 · AI 前端实测",
        url: CFG.boardUrl,
        apiUrl: parsed.apiUrl,
        methodUrl: CFG.methodUrl,
        author: parsed.author,
        siteVersion: parsed.siteVersion,
        updated: T,
        refreshedAt: R,
        scale: { min: 0, max: 200, unit: "两任务分之和(每任务 0-100)" },
        scoreRange: parsed.scoreRange,
        dateRange: parsed.dateRange,
        currentIdentity: parsed.currentIdentity,
        stats: { models: C.models, papers: C.papers, tasks: C.tasks, gainRows: C.gainRows },
        channelPolicy: CONFIG.channelPolicy,
        desc: "B 站 UP 主 @无机酸-_- 的第三方独立前端实测:每个模型用其原生 agent harness 在两个真实前端任务(虚构 AI 品牌站 SupernovAI、体素三维场景《云山巨城》)上端到端交付,按短提示与长提示各跑首轮与最终,任务分 0-100、总分为两任务之和;另有长提示相对基准的增益率。分数混杂模型与 harness 质量,且每模型仅一次实测。",
        models: parsed.models,
        tasks: parsed.tasks,
        papers: parsed.papers,
        gain: parsed.gain
      }
    );
  }
}

module.exports = registry.register(WujisuanSource);
