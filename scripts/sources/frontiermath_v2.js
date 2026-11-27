// 数据源:FrontierMath v2(Epoch AI · 私有高难数学题,Tiers 1-3)
// 站点:benchlm.ai/benchmarks/frontiermathv2tiers13(主源,内嵌 __NEXT_DATA__ 全量榜)
// 官方:epoch.ai/benchmarks/frontiermath-tiers-1-3-v2
// 口径:285 道私有数学题,难度从奥赛以上到早期研究级,允许模型用 Python 迭代求解;
//      主指标为私有集通过率(%)。同一基准另有 Tier 4(41 题极限难度)同站收录,
//      但 Tier 4 头部已饱和(前六名 95-100 分),区分度不足,站内只收 Tiers 1-3 主榜。
// 性质:模型级条目;仅「权威基准测试」页展示,不计入综合分与命中数。
// 输出:data/frontiermath_v2.js(window.FRONTIERMATH_V2)。
"use strict";
const { makeBenchlmBoardSource } = require("../lib/benchlmBoardSource");

module.exports = makeBenchlmBoardSource({
  id: "frontiermath_v2",
  name: "FrontierMath v2",
  cfgKey: "frontiermath_v2",
  windowVar: "FRONTIERMATH_V2",
  outFile: "frontiermath_v2.js",
  // benchlm 的 overallScore 是跨榜综合分(不是 FrontierMath 榜内标准分),本页不展示,不落盘
  dropOverallScore: true,
  header: function (T, c) {
    return "// 数据源:FrontierMath v2 Tiers 1-3(Epoch AI 私有高难数学题,更新于 " + T + ")\n" +
      "// 来源:" + c.url + "(主源,内嵌 __NEXT_DATA__ 全量榜) · " + c.officialUrl + "(Epoch AI 官方)\n" +
      "// " + require("../lib/config").channelPolicy + "\n" +
      "// 口径:285 道私有题,难度自奥赛以上到早期研究级,允许用 Python 迭代求解;score 为通过率(%)。\n" +
      "// 说明:同基准的 Tier 4(41 题极限难度)头部已饱和(前六名 95-100),区分度不足,站内不收。\n" +
      "// 字段:model=模型名;score=私有集通过率(%);overallScore=榜内标准分(0-100);org=厂商;\n" +
      "//   context=上下文;license=开源情况;src=数据来源渠道\n" +
      "// 用途:「权威基准测试」页展示,仅参考,不计入综合分与命中数。\n";
  },
  desc: function (meta) {
    return "FrontierMath v2(Epoch AI):285 道私有数学题,难度覆盖奥赛以上到早期研究级," +
      "题目由专业数学家编写且不公开,题目集防止污染;评测允许模型写 Python 反复迭代求解," +
      "主指标为私有集通过率(%)。站内只收 Tiers 1-3 主榜——同基准的 Tier 4(41 题极限难度)" +
      "前六名已达 95-100 分、头部饱和,单列区分度不足故不收录。" +
      (meta && meta.variantNote ? "源站口径原文:" + meta.variantNote : "");
  },
  protocolOf: function (m) {
    return {
      protocol: /python|tools/i.test(String(m.harness || "")) ? "工具" : "未标注",
      protocolNote: [m.harness, m.effort ? m.effort + " reasoning" : null].filter(Boolean).join(" · ") ||
        "源站未逐行标注 harness(基准允许 Python)"
    };
  }
});
