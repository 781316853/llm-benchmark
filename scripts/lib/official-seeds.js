// 厂商官方发布成绩「种子层」(T2 渠道,src 由每条种子自带,如 "qwen-official"/"deepseek-official")
// 用途:补齐官方实测榜(T1)未收录、但厂商在官方博客/模型卡/技术报告里公布的模型。
// 为何人工转录而非在线抓取:厂商发布页多为 SPA(curl 仅得壳)、HuggingFace 在本网络被墙、
//   GitHub/arXiv 官方源常无该编码表;故以唯一机器可读的官方文档为准,人工转录并内联出处。
// ⚠ 加种子前先核对「口径可比」:同榜不同 harness/子集的分数差几十分钟(见下方 DeepSeek 取舍),
//   不可比的宁可不录,否则总览参考列与跨源一致性校验会产出假差距/假告警。
// 合并语义:仅「补缺失模型」——官方/高层级已收录该模型则跳过,绝不覆盖其分数。
"use strict";

// 模型名归一(与 scripts/sources/deepswe.js 的 normName 同规则):小写并移除非字母数字。
// 使 "Qwen3.8-Flash" 与 "Qwen3.8 Flash" / "qwen3.8-flash" 折叠到同一键,用于「已存在则跳过」判定。
function normName(s) { return String(s || "").toLowerCase().replace(/[^a-z0-9]/g, ""); }

// 每条种子的来源渠道标签(缺省沿用历史值,兼容既有 Qwen 种子写法)。
function srcOf(seed) { return (seed && seed.src) || "qwen-official"; }

const SOURCE_URL = "https://developer.aliyun.com/article/1763215";
const PUBLISH_ORIGIN = "https://qwen.ai/blog?id=qwen3.8-flash-next";
const CAVEAT = "Qwen 官方发布(Flash-Next 权重,与生产版 Flash 同源);temp=1.0/top_p=0.95/256K,effort 未标注,协议与官方实测榜不可比,仅供参考";

// DeepSeek 官方更新日志(站内 DeepSeek 厂商官方发布的唯一转录出处,以后新增版本都来这页找):
//   https://api-docs.deepseek.com/zh-cn/updates  (2026-10-17 条目:V4.1 Flash 升级至 V4.1-Flash-1017)
const DS_UPDATES_URL = "https://api-docs.deepseek.com/zh-cn/updates";
const DS_CAVEAT = "DeepSeek 官方发布自测成绩(V4.1-Flash-1017,2026-10-17);官方标注 Terminal-Bench 用 Claude Code 框架、DeepSWE 用 Mini-SWE-V2 框架,协议与基准官方实测榜不保证可比";
// 官方同页还给了 HLE(w/o tools)42.6、ProgramBench 29.1,以及与站内无榜的 5 项
// (Automation-Bench v1.0.6 60.5 / Apex Bench v1.1 72.1 / Chartography 83.0 / BabyVision 92.5 /
//  ZeroBench-main Pass@5 51.0)。HLE 自 2026-10-19 起统一为无工具口径,该 42.6 已作为种子转录;
//  ProgramBench 来自 vals 镜像是 0.5,与官方 29.1 差 58 倍,属口径不可比,仍不转录。

// Kimi 官方发布页(模型发布博客,TB 4.0 自测分的唯一转录出处):
//   https://www.kimi.com/en/blog/kimi-k3-1-pro  (2026-10-24 条目:Kimi K3.1 Pro)
const MS_BLOG_URL = "https://www.kimi.com/en/blog/kimi-k3-1-pro";
const MS_CAVEAT = "Kimi 官方博客自测(K3.1 Pro,2026-10-24);官方标注 reasoning effort=max、temperature=1.0、top-p=0.95,TB 4.0 用 Claude Code 框架,与基准官方实测榜不保证可比";
// 同页 BenchCAD(1,000-file subset,带工具/不带工具 Voxel IoU 92.7/72.8)与站内 BenchCAD
// Vision2Code(全量 17,900 程序,64³ 体素 IoU×exec% 的 total)口径不同,不转录;
// ProgramBench 只给了 Almost 口径(binary ≥95%)31.5、没给 Fully Resolved 主指标,故不入主表;
// Agents' Last Exam 是官方 v1.1 的 122 题子集(站内为 1500+ 题版本)、OSWorld 是 V2.1 且用 Kimi Agent
// harness(站内为 2.0/steel.dev)、APEX-Agents 与站内 APEX-1、Automation Bench-AA 与站内 Zapier
// AutomationBench 均非同一榜单,口径不可比;Kimi Code Bench、Internal Finance、Hallu Bench、
// xdev-bench-hard、OfficeQA Pro、Frontier Finance、SWE-Marathon、PostTrainBench 等站内无对应榜。

// 按榜单键组织。score 为统一百分制数值;各源按自身字段映射(deepswe 用 pass1,merger 源用 model/score)。
const SEEDS = {
  // DeepSWE v1.1 官方实测榜无 Qwen3.8-Flash,补之。
  deepswe_v11: [
    { name: "Qwen3.8-Flash", score: 58.7, effort: "—", src: "qwen-official", note: CAVEAT, sourceUrl: SOURCE_URL, publishOrigin: PUBLISH_ORIGIN },
    // DeepSeek 官方 2026-10-17 更新页自测(Mini-SWE-V2 框架);站内该模型的 datalearner 条目属上一版(0910)。
    { name: "DeepSeek-V4.1-Flash-1017", score: 77.0, effort: "—", src: "deepseek-official", note: DS_CAVEAT, sourceUrl: DS_UPDATES_URL },
    // Kimi 发布博客:75.5(Claude Code 框架);官方 datalearner/官方榜均尚无 K3.1 Pro。
    { name: "Kimi K3.1 Pro", score: 75.5, effort: "max", src: "moonshot-official", note: MS_CAVEAT, sourceUrl: MS_BLOG_URL }
  ],
  // Terminal-Bench 4.0:官方榜(tbench.ai RSC 流)与 datalearner 补充均无 DeepSeek 条目,由种子补入。
  // 官方标注使用 Claude Code 框架,故带 agent 字段(见 tbench 源的种子钩子)。
  tbench_v40: [
    { name: "DeepSeek-V4.1-Flash-1017", score: 42.3, agent: "Claude Code", date: "2026-10-17", src: "deepseek-official", note: DS_CAVEAT, sourceUrl: DS_UPDATES_URL },
    // Kimi 官方博客 65.7%(Claude Code 框架);tbench.ai 官方榜与 datalearner 均尚无 K3.1 Pro。
    { name: "Kimi K3.1 Pro", score: 65.7, agent: "Claude Code", effort: "max", date: "2026-10-24", src: "moonshot-official", note: MS_CAVEAT, sourceUrl: MS_BLOG_URL }
  ],
  // Terminal-Bench-Science 0.1:站内主源为 explainx 博客镜像(仅 9 条旧模型),补 Kimi 官方自测。
  tbscience: [
    { name: "Kimi K3.1 Pro", score: 38.1, agent: "Claude Code", effort: "max", date: "2026-10-24", src: "moonshot-official", note: MS_CAVEAT, sourceUrl: MS_BLOG_URL }
  ],
  // ProgramBench:博客只报 binary/Almost(≥95%)31.5,未给 Fully Resolved 主指标 → 只补一行 Almost,
  // score 留空(前端 Fully Resolved 显示「—」),不参与主指标排序。
  programbench: [
    { name: "Kimi K3.1 Pro", almost: 31.5, agent: "Claude Code", effort: "max", src: "moonshot-official",
      note: "Kimi 官方博客 ProgramBench binary score(Almost,≥95%)31.5;未公布 Fully Resolved", sourceUrl: MS_BLOG_URL }
  ],
  // NL2Repo-Bench:官方 datalearner/llm-stats 已收录 Flash,通常命中「已存在跳过」;此条为前向兜底。
  nl2repo: [
    { name: "Qwen3.8-Flash", score: 48.1, org: "Alibaba Cloud / Qwen Team", src: "qwen-official", note: CAVEAT, sourceUrl: SOURCE_URL, publishOrigin: PUBLISH_ORIGIN },
    { name: "DeepSeek-V4.1-Flash-1017", score: 68.2, org: "DeepSeek-AI", src: "deepseek-official", note: DS_CAVEAT, sourceUrl: DS_UPDATES_URL }
  ],
  // Agents' Last Exam:datalearner 已收录(Pass@1 24.3);此条为前向兜底。
  lastexam: [
    { name: "Qwen3.8-Flash", score: 24.3, org: "Alibaba Cloud / Qwen Team", effort: "未标注", src: "qwen-official", note: CAVEAT, sourceUrl: SOURCE_URL, publishOrigin: PUBLISH_ORIGIN },
    { name: "DeepSeek-V4.1-Flash-1017", score: 35.4, org: "DeepSeek-AI", effort: "未标注", date: "2026-10-17", src: "deepseek-official", note: DS_CAVEAT, sourceUrl: DS_UPDATES_URL }
  ],
  // HLE:官方更新页明确标注 w/o tools(42.6);HLE 源统一无工具口径后以 T2 入表,
  // 覆盖 AA 复测同模型的 39.2,避免官方分被第三方无工具分顶掉。
  hle: [
    { name: "DeepSeek-V4.1-Flash-1017", score: 42.6, org: "DeepSeek-AI", src: "deepseek-official",
      note: "DeepSeek 官方更新页 HLE (w/o tools) 42.6(纯文本 44.0),2026-10-17", sourceUrl: DS_UPDATES_URL },
    // HLE-Full 无工具 51.1(全量 2500 题,未标 * 即非纯文本子集);同页带工具 70.0 按站内口径不收录。
    { name: "Kimi K3.1 Pro", score: 51.1, org: "Moonshot AI", src: "moonshot-official",
      note: "Kimi 官方博客 HLE-Full (w/o tools) 51.1,2026-10-24;带工具 70.0 未采用", sourceUrl: MS_BLOG_URL }
  ]
};

function forBenchmark(benchKey) { return SEEDS[benchKey] || []; }

// 为走 createTierMerger 的源做「后处理补缺」:仅追加 seed 中尚未出现的模型,
// 不改动既有条目的分数/来源;追加后按 score 降序重排并重编 rank(从 1 起)。
// nameOf: 从已合并记录取模型名的函数(merger 源记录用 .model)。返回新增条数。
function appendMissingSeed(models, benchKey, nameOf) {
  const seeds = forBenchmark(benchKey);
  if (!seeds.length) return 0;
  const have = {};
  (models || []).forEach(function (m) { have[normName(nameOf ? nameOf(m) : m.model)] = true; });
  let added = 0;
  seeds.forEach(function (s) {
    if (have[normName(s.name)]) { console.log("  [" + srcOf(s) + "] 已收录,跳过: " + s.name); return; }
    have[normName(s.name)] = true;
    const rec = { model: s.name, score: s.score, src: srcOf(s) };
    ["org", "effort", "agent", "date", "size", "context", "cost", "license"].forEach(function (k) { if (s[k] != null) rec[k] = s[k]; });
    models.push(rec);
    added++;
    console.log("  [" + srcOf(s) + "] 补缺: " + s.name + " (" + s.score + ")");
  });
  if (added) {
    models.sort(function (a, b) { return b.score - a.score; });
    models.forEach(function (m, i) { m.rank = i + 1; });
  }
  return added;
}

module.exports = { SEEDS: SEEDS, forBenchmark: forBenchmark, normName: normName, srcOf: srcOf, appendMissingSeed: appendMissingSeed };
