// 数据源4:Artificial Analysis Coding Agent Index 快照(云端抓取)
// 数据源:aitoolsreview.co.uk/benchmarks 聚合站(AA 官方数据镜像,更新于 2026-07-10)
// 官方方法学:https://artificialanalysis.ai/methodology/coding-agents-benchmarking
// AA Coding Agent Index v1.1:DeepSWE(113题)+ Terminal-Bench v2(84题)+ SWE-Atlas-QnA(124题)
// 三项 pass@1 简单平均,分数范围 0-100;评估 agent+model 组合的综合编码代理能力
// 字段说明:agent=运行框架;model=模型名;score=Coding Agent Index 分数(0-100);ci=置信区间(±)
// 合并策略:每 canonical 模型跨 agent 取最高分(前端 canon() 归并)
window.AACI = {
  source: "Artificial Analysis Coding Agent Index",
  url: "https://artificialanalysis.ai/leaderboards/coding-agents",
  updated: "2026-07-11",
  version: "1.1",
  stats: { components: 3, tasks: 321 },
  desc: "AA Coding Agent Index v1.1:DeepSWE(113)+Terminal-Bench v2(84)+SWE-Atlas-QnA(124)三项 pass@1 均值,评估 agent+model 组合的综合编码代理能力。",
  models: [
  {
    'agent': 'Codex',
    'model': 'GPT-5.6 Sol',
    'score': 80,
    'ci': null
  },
  {
    'agent': 'Claude Code',
    'model': 'Claude Fable 5',
    'score': 77,
    'ci': null
  },
  {
    'agent': 'Codex',
    'model': 'GPT-5.6 Terra',
    'score': 77,
    'ci': null
  },
  {
    'agent': 'Codex',
    'model': 'GPT-5.5',
    'score': 76,
    'ci': null
  },
  {
    'agent': 'Grok Build',
    'model': 'Grok 4.5',
    'score': 76,
    'ci': null
  },
  {
    'agent': 'Codex',
    'model': 'GPT-5.6 Luna',
    'score': 75,
    'ci': null
  },
  {
    'agent': 'Claude Code',
    'model': 'Claude Opus 4.8',
    'score': 73,
    'ci': null
  },
  {
    'agent': 'Claude Code',
    'model': 'GLM-5.2',
    'score': 58,
    'ci': null
  },
  {
    'agent': 'Cursor CLI',
    'model': 'Composer 2.5 Fast',
    'score': 52,
    'ci': null
  },
  {
    'agent': 'Claude Code',
    'model': 'DeepSeek V4 Pro',
    'score': 47,
    'ci': null
  },
  {
    'agent': 'Gemini CLI',
    'model': 'Gemini 3.1 Pro',
    'score': 43,
    'ci': null
  }
]
};
