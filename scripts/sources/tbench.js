// 数据源:Terminal-Bench 4.0(斯坦福/Laude 终端命令行 Agent 评测)
// 站点:https://www.tbench.ai/leaderboard/terminal-bench/4.0
// 数据形态:Next.js App Router 页面,榜单数据以 JSON 内嵌于 self.__next_f RSC 流
//   (形如 \"rows\":[{...}],引号已转义;页面可见的 <tr> 仅为骨架屏)。
// 渠道层级:主源 tbench.ai 官方实测榜 = T1(最高优先级);
//   补充源 datalearner.com/benchmarks/terminal-bench-4-0(内嵌 results JSON,厂商官方发布)= T2,
//   按"只补缺、不覆盖官方条目"策略合并官方榜未收录模型(官方口径优先)。
// 性质:agent×model 组合条目(66 终端任务);计入总览页综合分(权重 10%)与命中数。
// 输出:data/tbench.js(window.TBENCH),供「权威基准测试」页完整展示与总览矩阵。
"use strict";
const BaseSource = require("../lib/BaseSource");
const registry = require("../lib/registry");
const transport = require("../lib/transport");
const normalizer = require("../lib/normalizer");
const writers = require("../lib/writers");
const { parseDataLearnerBench } = require("./datalearner");
const CONFIG = require("../lib/config");

// 模型名归一化(补充源去重匹配):转小写并移除非字母数字字符(与 deepswe 范式一致)
function normName(s) { return String(s || "").toLowerCase().replace(/[^a-z0-9]/g, ""); }

// 解码 RSC 流字符串转义(与 JS 字符串字面量一致):\" -> "、\\ -> \、\n/\r/\t、\uXXXX
function unescapeStream(s) {
  var out = "", i = 0;
  while (i < s.length) {
    var c = s[i];
    if (c !== "\\") { out += c; i++; continue; }
    var n = s[i + 1];
    if (n === '"') { out += '"'; i += 2; }
    else if (n === "\\") { out += "\\"; i += 2; }
    else if (n === "n") { out += "\n"; i += 2; }
    else if (n === "r" || n === "t") { i += 2; }
    else if (n === "u") { out += String.fromCharCode(parseInt(s.substr(i + 2, 4), 16)); i += 6; }
    else { out += n; i += 2; }
  }
  return out;
}

// 从 RSC 流提取 \"rows\":[...] 数组的 JSON 文本(首个出现的榜单表格)
function extractRowsArray(raw) {
  var marker = '\\"rows\\":[';
  var idx = raw.indexOf(marker);
  if (idx < 0) return null;
  var i = idx + marker.length;
  var depth = 1;
  var start = i;
  while (i < raw.length && depth > 0) {
    var c = raw[i];
    if (c === "\\") { i += 2; continue; }   // 转义序列(如 \" )跳过
    if (c === "[" || c === "{") depth++;
    else if (c === "]" || c === "}") depth--;
    i++;
  }
  if (depth !== 0) return null;
  return unescapeStream("[" + raw.slice(start, i - 1) + "]");
}

// 清理显示成本:"$$3.3k" -> "$3.3k"
function cleanCost(v) {
  return String(v || "").replace(/^\$\$/, "$");
}

class TBenchSource extends BaseSource {
  constructor() {
    super({
      id: "tbench", name: "Terminal-Bench 4.0", type: "html",
      url: CONFIG.sources.tbench.url, host: CONFIG.sources.tbench.host,
      version: CONFIG.sources.tbench.version,
      outFile: "tbench.js", windowVar: "TBENCH"
    });
  }
  async fetch() {
    // 主源(tbench.ai 官方 RSC 流)+ 补充源(datalearner TB 4.0 详情页)并行抓取
    const [primary, extra] = await Promise.all([
      transport.fetchWithRetry(this.cfg.url),
      transport.fetchWithRetry(CONFIG.sources.datalearner_tbench40.url)
    ]);
    return { primary: primary, extra: extra };
  }
  parse(raw) {
    const json = extractRowsArray(raw.primary);
    if (!json) throw new Error("RSC 流中未找到 rows 数组(站点结构变更)");
    let rows;
    try { rows = JSON.parse(json); }
    catch (e) { throw new Error("rows JSON 解析失败: " + e.message); }
    if (!Array.isArray(rows) || !rows.length) throw new Error("rows 数组为空");
    const models = rows.map(function (r) {
      const md = r.metadata || {}, mt = r.metrics || {};
      return {
        rank: r.rank,
        model: (md.model_display && md.model_display.label) || "",
        agent: (md.agent_display && md.agent_display.label) || "",
        effort: md.reasoning_effort || null,
        score: mt.accuracy != null ? Math.round(mt.accuracy * 10) / 10 : null,
        ci: mt.accuracy_ci95_half_width != null ? Math.round(mt.accuracy_ci95_half_width * 10) / 10 : null,
        date: md.display_date || md.date || null,
        tokens: mt.display_total_tokens || null,
        cost: cleanCost(mt.display_cost),
        src: "official"
      };
    }).filter(function (m) { return m.model && m.score != null; });
    if (!models.length) throw new Error("未解析到任何 TB 4.0 条目");
    models.sort(function (a, b) { return a.rank - b.rank; });
    // datalearner 补充:官方已有条目一律不覆盖(官方口径优先),仅追加官方缺失模型。
    // 官方榜模型名为短名(如 "Fable 5.1"),datalearner 为全名("Claude Fable 5.1"),
    // 故除精确匹配外,再做双向后缀匹配(短名 ≥5 字符时)避免同模型重复入库。
    const officialNames = models.map(function (m) { return normName(m.model); });
    function isKnown(name) {
      const n = normName(name);
      return officialNames.some(function (o) {
        return o === n || (o.length >= 5 && n.endsWith(o)) || (n.length >= 5 && o.endsWith(n));
      });
    }
    let dlExtra = parseDataLearnerBench(raw.extra);
    dlExtra.forEach(function (dl) {
      if (isKnown(dl.name)) return;
      officialNames.push(normName(dl.name));
      models.push({
        rank: null,
        model: dl.name,
        agent: null,
        effort: dl.mode || null,
        score: dl.score,
        ci: null,
        date: dl.date,
        tokens: null,
        cost: null,
        src: "datalearner"
      });
      console.log("  [datalearner] 补充: " + dl.name + " (" + dl.score + "%)");
    });
    return { tasks: 66, models: models };
  }
  toStandard(parsed) {
    return normalizer.fromArray(this.cfg.id, parsed.models, function (m, idx) {
      return {
        name: m.model,
        score: m.score,
        rank: idx,
        updated: CONFIG.TODAY,
        metrics: { ci: m.ci },
        meta: { agent: m.agent, effort: m.effort }
      };
    });
  }
  writeContent(parsed) {
    const T = CONFIG.TODAY, R = CONFIG.REFRESHED_AT, v = this.cfg.version, n = parsed.models.length;
    return writers.windowVarTemplate("TBENCH",
      "// 数据源:Terminal-Bench 4.0(斯坦福/Laude)终端命令行 Agent 评测(更新于 " + T + ")\n" +
      "// 主渠道:" + this.cfg.url + "(官方实测榜 T1)\n" +
      "// 补充:https://www.datalearner.com/benchmarks/terminal-bench-4-0(厂商官方发布 T2,只补缺,官方口径优先)\n" +
      "// " + CONFIG.channelPolicy + "\n" +
      "// 字段说明:model=模型名;effort=推理强度(max 等);agent=Agent 框架(Codex/Claude Code 等);\n" +
      "//          score=解决率(%);ci=95% 置信区间;date=模型发布日期;tokens=总 tokens;cost=总成本($);\n" +
      "//          src=数据来源渠道(official=官方榜;datalearner=厂商官方发布补充条目,官方榜未收录,无 agent/ci/cost)\n" +
      "// 用途:计入总览页综合分(权重 10%)与命中数;「权威基准测试」页完整展示 agent×model 条目。\n",
      {
        source: "Terminal-Bench",
        url: this.cfg.url,
        channelPolicy: CONFIG.channelPolicy,
        version: v,
        updated: T,
        refreshedAt: R,
        stats: { tasks: parsed.tasks, entries: n },
        desc: "Terminal-Bench 4.0:在真实命令行环境中评测编码 Agent(66 个任务,校准了时间/CPU/内存资源并移除饱和任务),按 agent×model 组合计分,解决率越高越好。",
        models: parsed.models
      }
    );
  }
}

module.exports = registry.register(TBenchSource);
