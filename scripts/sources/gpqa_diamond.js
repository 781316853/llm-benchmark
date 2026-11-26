// 数据源:GPQA Diamond(研究生级科学问答)
// 站点:benchlm.ai/benchmarks/gpqa-diamond(主源) · 原源 github.com/idavidrein/gpqa
// 口径:物理 / 化学 / 生物研究生级四选一题,专家可答搜索引擎不可答;本表 score 为原始正确率(%);
//      benchlm 行为各厂商官方发布成绩的汇总转录(source.kind=developer 等),不强制统一工具口径。
// 渠道:该榜无统一的「基准官方实测榜」,benchlm 为当前唯一全量结构化渠道,
//      按 T3 第三方镜像入库(src=benchlm);不与其他源做跨源一致性校验(知识类口径)。
// 性质:模型级条目;2026-11-26 起计入总览矩阵与综合分(新增计分组)。
// 输出:data/gpqa_diamond.js(window.GPQA_DIAMOND)。
"use strict";
const { makeBenchlmBoardSource } = require("../lib/benchlmBoardSource");

module.exports = makeBenchlmBoardSource({
  id: "gpqa_diamond",
  name: "GPQA Diamond",
  cfgKey: "gpqa_diamond",
  windowVar: "GPQA_DIAMOND",
  outFile: "gpqa_diamond.js",
  header: function (T, c) {
    return "// 数据源:GPQA Diamond(研究生级科学问答,更新于 " + T + ")\n" +
      "// 来源:" + c.url + "(主源,内嵌 __NEXT_DATA__ 全量榜) · " + c.officialUrl + "(题集仓库)\n" +
      "// " + require("../lib/config").channelPolicy + "\n" +
      "// 口径:物理/化学/生物研究生级四选一,专家可答、搜索引擎不可答;score=原始正确率(%),\n" +
      "//   overallScore=benchlm 榜内标准分(部分行为空)。各厂商发布口径的工具使用情况不统一,\n" +
      "//   源站未逐行标注 harness,故 protocol 统一记为「未标注」,不做跨源比较。\n" +
      "// 字段:model=模型名;score=正确率(%);overallScore=榜内标准分;org=厂商;effort/harness/context/license 同源站;src=渠道\n" +
      "// 用途:「权威基准测试」页展示 + 总览矩阵计分列,计入综合分与命中数(2026-11-26 起)。\n";
  },
  desc: function () {
    return "GPQA Diamond:研究生级科学问答基准(物理 / 化学 / 生物),题目由领域专家撰写," +
      "专家可以作答而即使能上网搜索也难以直接查到答案;本表 score 为原始正确率(%);" +
      "benchlm.ai 汇总各厂商官方发布的成绩,是当前唯一提供全量结构化榜单的渠道。" +
      "⚙ 各厂商发布时的工具使用口径不统一,源站未逐行标注 harness,故本表不做跨模型工具口径的严格比较。";
  },
  protocolOf: function (m) {
    return {
      protocol: "未标注",
      protocolNote: [m.srcLabel, m.effort ? m.effort + " reasoning" : null]
        .filter(Boolean).join(" · ") || "benchlm 汇总,源站未标注工具口径"
    };
  }
});
