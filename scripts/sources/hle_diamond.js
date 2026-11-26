// 数据源:HLE-Diamond(Humanity's Last Exam 的 1,000 题精炼子集)
// 站点:benchlm.ai/benchmarks/hle-diamond(主源) · 原源 lastexam.ai/blog/hle-diamond
// 口径:1,000 题(500 推理 + 500 知识)、无工具、high reasoning;主题集与原 HLE(2500 题全量)/
//       HLE-Rolling / HLE-Verified 均不同,分数不可直接比较(benchlm 口径原文见 variantNote)。
// 为何以 benchlm 为主源而不是补充源:原源只有博客图、无结构化接口,benchlm 是唯一提供全量结构化榜单的渠道。
// 性质:模型级条目;2026-11-26 起取代原 HLE 在总览矩阵的计分位(原 data/hle.js 保留但不再加载)。
// 输出:data/hle_diamond.js(window.HLE_DIAMOND)。
"use strict";
const { makeBenchlmBoardSource } = require("../lib/benchlmBoardSource");

module.exports = makeBenchlmBoardSource({
  id: "hle_diamond",
  name: "HLE-Diamond",
  cfgKey: "hle_diamond",
  windowVar: "HLE_DIAMOND",
  outFile: "hle_diamond.js",
  header: function (T, c) {
    return "// 数据源:HLE-Diamond(Humanity's Last Exam 1,000 题精炼子集,更新于 " + T + ")\n" +
      "// 来源:" + c.url + "(主源,内嵌 __NEXT_DATA__ 全量榜) · " + c.officialUrl + "(题集发布博文)\n" +
      "// " + require("../lib/config").channelPolicy + "\n" +
      "// 口径:1,000 题(500 推理 + 500 知识),无工具、high reasoning;与 2500 题全量 HLE 不是同一题集,\n" +
      "//   两者分数不可直接比较(原 HLE 表已降为备用文件 data/hle.js,前端不再加载)。\n" +
      "// 字段:model=模型名;score=准确率(%);overallScore=榜内标准分(0-100);org=厂商;\n" +
      "//   effort=推理档位;harness=工具口径;context=上下文;license=开源情况;src=数据来源渠道\n" +
      "// 用途:「权威基准测试」页展示 + 总览矩阵计分列,计入综合分与命中数(2026-11-26 起)。\n";
  },
  desc: function (meta) {
    return "HLE-Diamond:Humanity's Last Exam 的 1,000 题精炼子集(500 道推理题 + 500 道知识题)," +
      "用作原 2500 题全量集饱和后的更高区分度版本;本表统一为无工具、high reasoning 口径。" +
      "⚠️ 它与原 HLE(2500 题)、HLE-Rolling、HLE-Verified 是不同题集,分数不可直接比较;" +
      "benchlm.ai 为目前唯一提供全量结构化榜单的渠道,数据源为 lastexam.ai 发布的题集榜。" +
      (meta && meta.variantNote ? "源站口径原文:" + meta.variantNote : "");
  },
  // HLE-Diamond 全榜统一「无工具 · high」,把 harness/effort 原文带进 protocolNote 以便核对
  protocolOf: function (m) {
    return {
      protocol: /no tools/i.test(String(m.harness || "")) ? "无工具" : "未标注",
      protocolNote: [m.harness || "No tools", m.effort ? m.effort + " reasoning" : null]
        .filter(Boolean).join(" · ")
    };
  }
});
