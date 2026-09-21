// 厂商官方发布成绩「种子层」(T2 渠道,src = "qwen-official")
// 用途:补齐官方实测榜(T1)未收录、但厂商在官方博客/模型卡/技术报告里公布的模型。
// 数据来源(转录):阿里云官方文档 https://developer.aliyun.com/article/1763215
//   其评测表转述自 Qwen 官方博客 https://qwen.ai/blog?id=qwen3.8-flash-next。
// 为何人工转录而非在线抓取:qwen.ai 为 SPA(curl 仅得壳),HuggingFace 在本网络被墙,
//   GitHub/arXiv 官方源无该编码表;故以唯一机器可读的官方文档为准,人工转录并内联出处。
// 口径提示:Qwen3.8-Flash-Next 为开源权重,官方称与生产版 Qwen3.8-Flash「同源」;
//   本表按项目 canonical 归一到「Qwen3.8-Flash」(见 data/models.js)。采样 temp=1.0 /
//   top_p=0.95 / 上下文 256K;各榜未逐项标注 reasoning effort,协议与基准官方实测榜不可比,仅供参考。
// 合并语义:仅「补缺失模型」——官方/高层级已收录该模型则跳过,绝不覆盖其分数。
"use strict";

// 模型名归一(与 scripts/sources/deepswe.js 的 normName 同规则):小写并移除非字母数字。
// 使 "Qwen3.8-Flash" 与 "Qwen3.8 Flash" / "qwen3.8-flash" 折叠到同一键,用于「已存在则跳过」判定。
function normName(s) { return String(s || "").toLowerCase().replace(/[^a-z0-9]/g, ""); }

const SOURCE_URL = "https://developer.aliyun.com/article/1763215";
const PUBLISH_ORIGIN = "https://qwen.ai/blog?id=qwen3.8-flash-next";
const CAVEAT = "Qwen 官方发布(Flash-Next 权重,与生产版 Flash 同源);temp=1.0/top_p=0.95/256K,effort 未标注,协议与官方实测榜不可比,仅供参考";

// 按榜单键组织。score 为统一百分制数值;各源按自身字段映射(deepswe 用 pass1,merger 源用 model/score)。
const SEEDS = {
  // DeepSWE v1.1 官方实测榜无 Qwen3.8-Flash,补之。
  deepswe_v11: [
    { name: "Qwen3.8-Flash", score: 58.7, effort: "—", src: "qwen-official", note: CAVEAT, sourceUrl: SOURCE_URL, publishOrigin: PUBLISH_ORIGIN }
  ],
  // NL2Repo-Bench:官方 datalearner/llm-stats 已收录 Flash,通常命中「已存在跳过」;此条为前向兜底。
  nl2repo: [
    { name: "Qwen3.8-Flash", score: 48.1, org: "Alibaba Cloud / Qwen Team", src: "qwen-official", note: CAVEAT, sourceUrl: SOURCE_URL, publishOrigin: PUBLISH_ORIGIN }
  ],
  // Agents' Last Exam:datalearner 已收录(Pass@1 24.3);此条为前向兜底。
  lastexam: [
    { name: "Qwen3.8-Flash", score: 24.3, org: "Alibaba Cloud / Qwen Team", effort: "未标注", src: "qwen-official", note: CAVEAT, sourceUrl: SOURCE_URL, publishOrigin: PUBLISH_ORIGIN }
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
    if (have[normName(s.name)]) { console.log("  [qwen-official] 已收录,跳过: " + s.name); return; }
    have[normName(s.name)] = true;
    const rec = { model: s.name, score: s.score, src: "qwen-official" };
    if (s.org != null) rec.org = s.org;
    if (s.effort != null) rec.effort = s.effort;
    models.push(rec);
    added++;
    console.log("  [qwen-official] 补缺: " + s.name + " (" + s.score + ")");
  });
  if (added) {
    models.sort(function (a, b) { return b.score - a.score; });
    models.forEach(function (m, i) { m.rank = i + 1; });
  }
  return added;
}

module.exports = { SEEDS: SEEDS, forBenchmark: forBenchmark, normName: normName, appendMissingSeed: appendMissingSeed };
