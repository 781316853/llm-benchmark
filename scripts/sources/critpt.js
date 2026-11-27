// 数据源:CritPt(Critical Physics Tasks · 研究级物理推理)
// 站点:benchlm.ai/benchmarks/critpt(主源,内嵌 __NEXT_DATA__ 全量榜)
// 口径:研究级物理题,主指标为正确率(%)。该指标由 Artificial Analysis(独立第三方评测机构)
//      自建自测、经 benchlm 转录;AA 官网在本机网络下持续超时(2026-11-27 实测),
//      故只挂 benchlm 榜页作来源,不填未核实过的官方地址。
// 性质:模型级条目;仅「权威基准测试」页展示,不计入综合分与命中数。
// 输出:data/critpt.js(window.CRITPT)。
"use strict";
const { makeBenchlmBoardSource } = require("../lib/benchlmBoardSource");

module.exports = makeBenchlmBoardSource({
  id: "critpt",
  name: "CritPt",
  cfgKey: "critpt",
  windowVar: "CRITPT",
  outFile: "critpt.js",
  // benchlm 的 overallScore 是跨榜综合分(不是 CritPt 榜内标准分),本页不展示,不落盘
  dropOverallScore: true,
  header: function (T, c) {
    return "// 数据源:CritPt(Critical Physics Tasks 研究级物理推理,更新于 " + T + ")\n" +
      "// 来源:" + c.url + "(主源,内嵌 __NEXT_DATA__ 全量榜;指标由 Artificial Analysis 自建自测)\n" +
      "// " + require("../lib/config").channelPolicy + "\n" +
      "// 口径:研究级物理题正确率(%);源站未逐行标注 harness 与推理档位。\n" +
      "// 字段:model=模型名;score=正确率(%);overallScore=榜内标准分(0-100);org=厂商;\n" +
      "//   context=上下文;license=开源情况;src=数据来源渠道\n" +
      "// 用途:「权威基准测试」页展示,仅参考,不计入综合分与命中数。\n";
  },
  desc: function (meta) {
    return "CritPt(Critical Physics Tasks):研究级物理推理评测,题目面向科研场景而非教科书习题," +
      "主指标为正确率(%)。该指标由独立第三方评测机构 Artificial Analysis 自建自测、经 benchlm 转录," +
      "与厂商自报口径不同,分数整体偏低(榜首约 35 分)。源站未逐行标注 harness 与推理档位," +
      "故本表不做跨模型工具口径的严格比较。";
  },
  protocolOf: function (m) {
    return {
      protocol: "未标注",
      protocolNote: m.harness || "源站未标注 harness"
    };
  }
});
