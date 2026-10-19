// 数据源:Humanity's Last Exam(HLE,前沿知识广度)
// 站点:官方 lastexam.ai(CAIS/Scale AI);本榜无可用官方实测榜,按渠道层级合并:
//   T2 厂商官方发布 > T3 第三方。主源 datalearner 详情页(内嵌 results JSON,转录厂商官方发布成绩);
//   官方种子层补充厂商文档明确标注 w/o tools 的成绩(见 official-seeds.js);
//   补充源 AA 无工具复测 benchlm 镜像页(内嵌 JSON,236 模型,src=aa)。
// 口径:统一无工具(闭卷)。datalearner 同一模型常有多条评测模式,只取「无工具」行(多条取最高);
//   AA 复测为第三方无工具 harness,仅补官方渠道未收录的模型,src=aa 徽标区分。
//   仅带工具分或未声明协议的条目一律不收录——旧版混入工具/未标注口径,表内分数不可直接比较。
// 数据形态:datalearner results JSON(name/mode/score/date/params/org/license);
//   benchlm/AA 页内嵌 __NEXT_DATA__ JSON。
// 合并策略:见 scripts/lib/mergeByTier.js——高层级分数不被低层级覆盖,低层级仅补缺失模型与字段。
// 性质:模型级条目(2500 题,数学/科学/人文学科,闭卷得分口径);
//       仅「权威基准测试」页与总览参考列展示,不计入综合分/命中数。
// 输出:data/hle.js(window.HLE)。
"use strict";
const BaseSource = require("../lib/BaseSource");
const registry = require("../lib/registry");
const transport = require("../lib/transport");
const normalizer = require("../lib/normalizer");
const writers = require("../lib/writers");
const { parseBenchlm } = require("../lib/parseBenchlm");
const { parseDataLearnerBench } = require("./datalearner");
const officialSeeds = require("../lib/official-seeds");
const { createTierMerger, normKey } = require("../lib/mergeByTier");
const CONFIG = require("../lib/config");

// 跨源别名归并:两源对同一模型命名不同时归并到同一键(避免重复条目)
const KEY_ALIASES = {
  // benchlm/AA "Claude Mythos 5" 与 datalearner "Claude Mythos Preview" 为同一模型
  "claude-mythos-5": "claude-mythos-preview"
};

// 评测协议标记:先从 mode 判定,只有「无工具」的行才进入 HLE 表。
// datalearner 的 mode 形如 "最高（工具）"、"最高（无工具） · Text only"、
// "极高强度思考（工具+联网）";必须先判「无工具」,否则会被其中的「工具」二字误判。
function protocolFromMode(mode) {
  var s = String(mode || "");
  if (!s) return "未标注";
  if (/无工具|without\s*tools|w\/?o\s*tools/i.test(s)) return "无工具";
  if (/工具|with\s*tools|w\/?\s*tools/i.test(s)) return "工具";
  return "未标注";
}

class HleSource extends BaseSource {
  constructor() {
    super({
      id: "hle", name: "Humanity's Last Exam", type: "html",
      url: CONFIG.sources.hle.url, host: CONFIG.sources.hle.host,
      officialUrl: CONFIG.sources.hle.officialUrl,
      outFile: "hle.js", windowVar: "HLE"
    });
  }
  async fetch() {
    // 主源(datalearner 厂商官方发布,仅取无工具行)+ 补充源(AA 无工具复测镜像)并行抓取
    const [vendor, aa] = await Promise.all([
      transport.fetchWithRetry(CONFIG.sources.hle.url),
      transport.fetchWithRetry(CONFIG.sources.hle_aa.url)
    ]);
    return { aa: aa, vendor: vendor };
  }
  parse(raw) {
    const aa = parseBenchlm(raw.aa);
    const vendor = parseDataLearnerBench(raw.vendor).map(function (m) {
      return { model: m.name, org: m.org, score: m.score, license: m.license,
        mode: m.mode || null, protocol: protocolFromMode(m.mode) };
    }).filter(function (m) { return m.protocol === "无工具"; });
    // 任一渠道解析为空 = 页面结构大概率又变了。必须让本源失败并保留旧文件,
    // 否则合并会静默丢数。无工具行消失同样视为源异常。
    if (!vendor.length) throw new Error("HLE datalearner 主源未解析到任何无工具口径数据(页面结构可能已变化)");
    if (!aa.length) throw new Error("HLE AA 无工具复测源未解析到任何数据(页面结构可能已变化)");
    const aaModels = aa.map(function (m) {
      return Object.assign({}, m, { protocol: "无工具" });
    });
    // 按渠道层级合并:T2 厂商行(含官方种子)优先,AA(T3)仅补缺;同层多条无工具模式取最高分
    const merger = createTierMerger({ aliases: KEY_ALIASES });
    merger.add(vendor, "datalearner");
    officialSeeds.forBenchmark("hle").forEach(function (s) {
      merger.add([{ model: s.name, score: s.score, org: s.org, note: s.note, sourceUrl: s.sourceUrl }],
        officialSeeds.srcOf(s));
    });
    merger.add(aaModels, "aa");
    const models = merger.values().map(function (m) {
      var note = "Artificial Analysis 无工具复测";
      if (m.src === "datalearner") note = String(m.mode || "厂商发布(无工具)");
      else if (m.note) note = String(m.note);
      var rec = Object.assign({}, m, { protocol: "无工具", protocolNote: note });
      delete rec.note;
      return rec;
    });
    return { tasks: 2500, models: models };
  }
  toStandard(parsed) {
    return normalizer.fromArray(this.cfg.id, parsed.models, function (m, idx) {
      return { name: m.model, score: m.score, rank: idx, updated: CONFIG.TODAY,
        metrics: { protocol: m.protocol }, meta: { org: m.org, src: m.src } };
    });
  }
  writeContent(parsed) {
    const T = CONFIG.TODAY, R = CONFIG.REFRESHED_AT, n = parsed.models.length;
    return writers.windowVarTemplate("HLE",
      "// 数据源:Humanity's Last Exam(前沿知识广度,更新于 " + T + ")\n" +
      "// 来源:" + this.cfg.url + "(主渠道,厂商官方发布无工具成绩) · " + CONFIG.sources.hle_aa.url + "(AA 无工具复测镜像)\n" +
      "// 官方:" + this.cfg.officialUrl + "\n" +
      "// " + CONFIG.channelPolicy + "\n" +
      "// 口径:统一无工具(闭卷)——datalearner 同模型只取「无工具」行(多条取最高),官方种子补充厂商 w/o tools 成绩,\n" +
      "//   AA 无工具复测仅补官方渠道未收录的模型;仅带工具分或未声明协议的条目已剔除,表内分数可直接比较。\n" +
      "// 字段说明:model=模型名;score=闭卷得分(%);org=厂商;size=参数量;context=上下文;cost=API 价格;src=数据来源渠道(datalearner/deepseek-official/aa);protocol=工具口径(统一为无工具);protocolNote=口径原文/说明\n" +
      "// 用途:「权威基准测试」页展示 + 总览矩阵参考列,仅参考,不计入综合分/命中数。\n",
      {
        source: "Humanity's Last Exam",
        url: this.cfg.url,
        officialUrl: this.cfg.officialUrl,
        channelPolicy: CONFIG.channelPolicy,
        updated: T,
        refreshedAt: R,
        stats: { tasks: parsed.tasks, entries: n },
        desc: "Humanity's Last Exam(HLE):CAIS 与 Scale AI 推出的前沿知识广度基准,2500 道由各领域专家撰写、无网络可检索解的问题(数学/科学/人文学科等),目的在衡量模型逼近人类专家知识天花板;得分越高越好。本表统一为无工具(闭卷)口径:厂商明确标注无工具的条目优先,AA 无工具复测仅补官方渠道未收录的模型;仅带工具分或未声明协议的模型不收录,表内分数可直接比较。",
        models: parsed.models
      }
    );
  }
}

module.exports = registry.register(HleSource);
