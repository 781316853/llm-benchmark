// 数据源:ARC-AGI-2(ARC Prize · 抽象与推理语料 v2)
// 站点:benchlm.ai/benchmarks/arc-agi-2(主源,内嵌 __NEXT_DATA__ 全量榜)
// 官方:arcprize.org/arc-agi/2
// 口径:半私有集(Semi-Private)120 题网格变换谜题,需从示例网格推断规则再套用到新网格;
//      源站按推理档位(Max / XHigh / High / Medium / Low)逐档报分,同模型多行,
//      故入库前按模型取最优档(与 ARC Prize 官网主榜「每模型一行」的模型级视图同口径)。
// ⚠ 与 ARC-AGI-1(同榜另一列,已饱和到 98.5)、ARC-AGI-3(交互式,站内已有独立源)是不同测试,
//   题集与评分规则均不同,分数不可互相比对。
// 性质:模型级条目;仅「权威基准测试」页展示,不计入综合分与命中数。
// 输出:data/arc_agi_2.js(window.ARC_AGI_2)。
"use strict";
const { makeBenchlmBoardSource } = require("../lib/benchlmBoardSource");

module.exports = makeBenchlmBoardSource({
  id: "arc_agi_2",
  name: "ARC-AGI-2",
  cfgKey: "arc_agi_2",
  windowVar: "ARC_AGI_2",
  outFile: "arc_agi_2.js",
  // benchlm 的 overallScore 是跨榜综合分(不是 ARC-AGI-2 榜内标准分),本页不展示,不落盘
  dropOverallScore: true,
  bestOfModel: true,
  header: function (T, c) {
    return "// 数据源:ARC-AGI-2(ARC Prize 抽象与推理语料 v2,更新于 " + T + ")\n" +
      "// 来源:" + c.url + "(主源,内嵌 __NEXT_DATA__ 全量榜) · " + c.officialUrl + "(ARC Prize 官方)\n" +
      "// " + require("../lib/config").channelPolicy + "\n" +
      "// 口径:半私有集 120 题;源站按推理档位分行,入库时按模型取最优档(effort 字段保留该档位)。\n" +
      "// ⚠ 与 ARC-AGI-1 / ARC-AGI-3 是不同测试,分数不可直接比较。\n" +
      "// 字段:model=模型名;score=半私有集准确率(%);overallScore=榜内标准分(0-100);org=厂商;\n" +
      "//   effort=最优档位;context=上下文;license=开源情况;src=数据来源渠道\n" +
      "// 用途:「权威基准测试」页展示,仅参考,不计入综合分与命中数。\n";
  },
  desc: function (meta) {
    return "ARC-AGI-2:ARC Prize 的第二代抽象与推理基准,半私有集 120 个网格变换谜题——" +
      "每题只给若干组「输入网格→输出网格」示例,模型须自行归纳变换规则并套用到新网格,考察的是" +
      "样本内规则归纳而非知识检索。本表统一取半私有集口径、每个模型取最优推理档位;" +
      "⚠️ 它与 ARC-AGI-1(同源另一列,头部已饱和)和 ARC-AGI-3(交互式游戏环境)是不同测试," +
      "题集与评分规则都不同,分数不可直接比较。源站按推理档位分行,表中 effort 标注该模型取得最高分时所用档位。" +
      (meta && meta.variantNote ? "源站口径原文:" + meta.variantNote : "");
  },
  // 源站 harness 字段填的是评测集("Semi-Private evaluation")而非工具口径,故协议统一记「未标注」
  protocolOf: function (m) {
    return {
      protocol: "未标注",
      protocolNote: [m.harness || "Semi-Private", m.effort ? m.effort + " reasoning" : null]
        .filter(Boolean).join(" · ")
    };
  }
});
