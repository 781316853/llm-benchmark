// 数据源4:SWE-bench Pro 多源聚合快照(云端抓取)
// 数据源:Scale AI SEAL 标准化榜单(scale.com) + llm-stats.com vendor 聚合榜
// 更新于 2026-07-10
// Scale SEAL:731 题,41 仓库,4 语言(Py/Go/TS/JS),统一 scaffold 评分(顶级 ~59%,抗污染)
// llm-stats:厂商自报分数聚合(顶级 ~80%,含更多模型如 Fable5/Opus4.8/GLM-5.2 等)
// 合并策略:同一模型取两源最高分(保留最优公开成绩);source 字段标注数据来源
// 字段说明:name=模型名;score=Pass@1(%);ci=置信区间(±%);harness=评测 scaffold;source=数据来源;vendor=厂商
window.SWEBENCH = {
  source: "SWE-bench Pro",
  url: "https://scale.com/leaderboard/swe_bench_pro_public",
  updated: "2026-07-10",
  variant: "Pro Public (multi-source)",
  stats: { tasks: 731, repos: 41, languages: 4, models: 35 },
  desc: "Scale AI SWE-bench Pro:731 题公开集,41 个专业仓库,4 种语言(Py/Go/TS/JS),统一 scaffold 评分,抗污染设计,远难于 Verified。聚合 Scale SEAL 标准化分与 llm-stats vendor 聚合分,取最高。",
  models: [
  {
    'name': 'Claude Fable 5',
    'source': 'llm-stats',
    'score': 80,
    'vendor': ''
  },
  {
    'name': 'Claude Mythos Preview',
    'source': 'llm-stats',
    'score': 77.8,
    'vendor': ''
  },
  {
    'name': 'Claude Opus 4.8',
    'source': 'llm-stats',
    'score': 69.2,
    'vendor': ''
  },
  {
    'name': 'Claude Opus 4.7',
    'source': 'llm-stats',
    'score': 64.3,
    'vendor': ''
  },
  {
    'name': 'Claude Sonnet 5',
    'source': 'llm-stats',
    'score': 63.2,
    'vendor': ''
  },
  {
    'name': 'GLM-5.2',
    'source': 'llm-stats',
    'score': 62.1,
    'vendor': ''
  },
  {
    'name': 'Qwen3.7 Max',
    'source': 'llm-stats',
    'score': 60.6,
    'vendor': ''
  },
  {
    'name': 'MiniMax M3',
    'source': 'llm-stats',
    'score': 59,
    'vendor': ''
  },
  {
    'name': 'Kimi K2.6',
    'source': 'llm-stats',
    'score': 58.6,
    'vendor': ''
  },
  {
    'name': 'GPT-5.5',
    'source': 'llm-stats',
    'score': 58.6,
    'vendor': ''
  },
  {
    'name': 'GLM-5.1',
    'source': 'llm-stats',
    'score': 58.4,
    'vendor': ''
  },
  {
    'name': 'GPT-5.4',
    'source': 'llm-stats',
    'score': 57.7,
    'vendor': ''
  },
  {
    'name': 'Qwen3.7-Plus',
    'source': 'llm-stats',
    'score': 57.6,
    'vendor': ''
  },
  {
    'name': 'Seed 2.1 Pro',
    'source': 'llm-stats',
    'score': 57.5,
    'vendor': ''
  },
  {
    'name': 'MiMo-V2.5-Pro',
    'source': 'llm-stats',
    'score': 57.2,
    'vendor': ''
  },
  {
    'name': 'Seed 2.1 Turbo',
    'source': 'llm-stats',
    'score': 57,
    'vendor': ''
  },
  {
    'name': 'GPT-5.3 Codex',
    'source': 'llm-stats',
    'score': 56.8,
    'vendor': ''
  },
  {
    'name': 'Qwen3.6 Plus',
    'source': 'llm-stats',
    'score': 56.6,
    'vendor': ''
  },
  {
    'name': 'GPT-5.2 Codex',
    'source': 'llm-stats',
    'score': 56.4,
    'vendor': ''
  },
  {
    'name': 'MiniMax M2.7',
    'source': 'llm-stats',
    'score': 56.2,
    'vendor': ''
  },
  {
    'name': 'MiMo-V2.5',
    'source': 'llm-stats',
    'score': 56.1,
    'vendor': ''
  },
  {
    'name': 'MiniMax M2.5',
    'source': 'llm-stats',
    'score': 55.4,
    'vendor': ''
  },
  {
    'name': 'DeepSeek-V4-Pro-Max',
    'source': 'llm-stats',
    'score': 55.4,
    'vendor': ''
  },
  {
    'name': 'Gemini 3.5 Flash',
    'source': 'llm-stats',
    'score': 55.1,
    'vendor': ''
  },
  {
    'name': 'GPT-5.4 mini',
    'source': 'llm-stats',
    'score': 54.4,
    'vendor': ''
  },
  {
    'name': 'Gemini 3.1 Pro',
    'source': 'llm-stats',
    'score': 54.2,
    'vendor': ''
  },
  {
    'name': 'Qwen3.6-27B',
    'source': 'llm-stats',
    'score': 53.5,
    'vendor': ''
  },
  {
    'name': 'MAI-Thinking-1',
    'source': 'llm-stats',
    'score': 52.8,
    'vendor': ''
  },
  {
    'name': 'DeepSeek-V4-Flash-Max',
    'source': 'llm-stats',
    'score': 52.6,
    'vendor': ''
  },
  {
    'name': 'Muse Spark',
    'source': 'llm-stats',
    'score': 52.4,
    'vendor': ''
  },
  {
    'name': 'GPT-5.4 nano',
    'source': 'llm-stats',
    'score': 52.4,
    'vendor': ''
  },
  {
    'name': 'MAI-Code-1-Flash',
    'source': 'llm-stats',
    'score': 51.2,
    'vendor': ''
  },
  {
    'name': 'Kimi K2.5',
    'source': 'llm-stats',
    'score': 50.7,
    'vendor': ''
  },
  {
    'name': 'Qwen3.6-35B-A3B',
    'source': 'llm-stats',
    'score': 49.5,
    'vendor': ''
  },
  {
    'name': 'North Mini Code 1.0',
    'source': 'llm-stats',
    'score': 40.2,
    'vendor': ''
  }
]
};
