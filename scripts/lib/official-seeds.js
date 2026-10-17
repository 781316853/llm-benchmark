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
//  ZeroBench-main Pass@5 51.0),**刻意不转录**:站内 HLE 该模型来自 datalearner 的闭卷口径是 63.9、
//  ProgramBench 来自 vals 镜像是 0.5,与官方数字差 21 分和 58 倍,属口径不可比,并列表格只会造假差距。

// 按榜单键组织。score 为统一百分制数值;各源按自身字段映射(deepswe 用 pass1,merger 源用 model/score)。
const SEEDS = {
  // DeepSWE v1.1 官方实测榜无 Qwen3.8-Flash,补之。
  deepswe_v11: [
    { name: "Qwen3.8-Flash", score: 58.7, effort: "—", src: "qwen-official", note: CAVEAT, sourceUrl: SOURCE_URL, publishOrigin: PUBLISH_ORIGIN },
    // DeepSeek 官方 2026-10-17 更新页自测(Mini-SWE-V2 框架);站内该模型的 datalearner 条目属上一版(0910)。
    { name: "DeepSeek-V4.1-Flash-1017", score: 77.0, effort: "—", src: "deepseek-official", note: DS_CAVEAT, sourceUrl: DS_UPDATES_URL }
  ],
  // Terminal-Bench 4.0:官方榜(tbench.ai RSC 流)与 datalearner 补充均无 DeepSeek 条目,由种子补入。
  // 官方标注使用 Claude Code 框架,故带 agent 字段(见 tbench 源的种子钩子)。
  tbench_v40: [
    { name: "DeepSeek-V4.1-Flash-1017", score: 42.3, agent: "Claude Code", date: "2026-10-17", src: "deepseek-official", note: DS_CAVEAT, sourceUrl: DS_UPDATES_URL }
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
    ["org", "effort", "agent", "date"].forEach(function (k) { if (s[k] != null) rec[k] = s[k]; });
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
