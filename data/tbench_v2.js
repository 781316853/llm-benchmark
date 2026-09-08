// 数据源:Terminal-Bench 2.1(斯坦福/Laude)终端命令行 Agent 评测(全网权威数据汇总,快照于 2026-09-07)
// 来源:https://llm-stats.com/benchmarks/terminal-bench-2.1
// 字段说明:model=模型名;score=得分(%);agent=Agent 框架;effort=推理强度;ci=95% 置信区间;date=发布日期;tokens=总 tokens;cost=成本($)
// 用途:计入总览页综合分与命中数(与 4.0/3.0/2.0 合并为一个基准组,取值优先级 4.0>3.0>2.1>2.0);「权威基准测试」页完整展示。
// 注:此处采用 llm-stats 的 2.1 榜单(33 个模型级条目),为 0-1 归一化**自报分数**,已换算为百分比,
//    与官方 agent×model 解决率口径不同;agent/effort/date/tokens/cost 源站未给出,置空。
window.TBENCH_V21 = {
  'source': 'Terminal-Bench',
  'url': 'https://llm-stats.com/benchmarks/terminal-bench-2.1',
  'version': '2.1',
  'updated': '2026-09-07',
  'refreshedAt': '2026-09-07 12:47',
  'stats': {
    'tasks': 89,
    'entries': 33
  },
  'desc': 'Terminal-Bench 2.1:在真实命令行环境中评测编码 Agent(89 个任务,修复 2.0 中 28 个任务问题)。本快照采用 llm-stats 模型级 0-1 归一化自报分(换算为百分比),越高越好。',
  'models': [
    {
      'rank': 1,
      'model': 'GPT-5.6 Sol',
      'agent': null,
      'effort': null,
      'score': 88.8,
      'ci': null,
      'date': null,
      'tokens': null,
      'cost': null
    },
    {
      'rank': 2,
      'model': 'Kimi K3',
      'agent': null,
      'effort': null,
      'score': 88.3,
      'ci': null,
      'date': null,
      'tokens': null,
      'cost': null
    },
    {
      'rank': 3,
      'model': 'GLM-5.3',
      'agent': null,
      'effort': null,
      'score': 88.2,
      'ci': null,
      'date': null,
      'tokens': null,
      'cost': null
    },
    {
      'rank': 4,
      'model': 'DeepSeek-V4-Pro-0813',
      'agent': null,
      'effort': null,
      'score': 87.9,
      'ci': null,
      'date': null,
      'tokens': null,
      'cost': null
    },
    {
      'rank': 5,
      'model': 'GPT-5.6 Terra',
      'agent': null,
      'effort': null,
      'score': 87.4,
      'ci': null,
      'date': null,
      'tokens': null,
      'cost': null
    },
    {
      'rank': 6,
      'model': 'Qwen3.8 Max',
      'agent': null,
      'effort': null,
      'score': 86.6,
      'ci': null,
      'date': null,
      'tokens': null,
      'cost': null
    },
    {
      'rank': 7,
      'model': 'Gemini 3.7 Flash',
      'agent': null,
      'effort': null,
      'score': 85.8,
      'ci': null,
      'date': null,
      'tokens': null,
      'cost': null
    },
    {
      'rank': 8,
      'model': 'Hy4 Preview',
      'agent': null,
      'effort': null,
      'score': 85.4,
      'ci': null,
      'date': null,
      'tokens': null,
      'cost': null
    },
    {
      'rank': 9,
      'model': 'GPT-5.6 Luna',
      'agent': null,
      'effort': null,
      'score': 84.7,
      'ci': null,
      'date': null,
      'tokens': null,
      'cost': null
    },
    {
      'rank': 10,
      'model': 'GLM-5.3-Flash',
      'agent': null,
      'effort': null,
      'score': 84.3,
      'ci': null,
      'date': null,
      'tokens': null,
      'cost': null
    },
    {
      'rank': 11,
      'model': 'Fable 5',
      'agent': null,
      'effort': null,
      'score': 84.3,
      'ci': null,
      'date': null,
      'tokens': null,
      'cost': null
    },
    {
      'rank': 12,
      'model': 'DeepSeek-V4-Flash-Vision-Exp',
      'agent': null,
      'effort': null,
      'score': 83.9,
      'ci': null,
      'date': null,
      'tokens': null,
      'cost': null
    },
    {
      'rank': 13,
      'model': 'Grok 4.5',
      'agent': null,
      'effort': null,
      'score': 83.3,
      'ci': null,
      'date': null,
      'tokens': null,
      'cost': null
    },
    {
      'rank': 14,
      'model': 'Muse Spark 1.2',
      'agent': null,
      'effort': null,
      'score': 82.9,
      'ci': null,
      'date': null,
      'tokens': null,
      'cost': null
    },
    {
      'rank': 15,
      'model': 'GLM-5.2',
      'agent': null,
      'effort': null,
      'score': 82.7,
      'ci': null,
      'date': null,
      'tokens': null,
      'cost': null
    },
    {
      'rank': 16,
      'model': 'DeepSeek-V4-Flash-0731',
      'agent': null,
      'effort': null,
      'score': 82.7,
      'ci': null,
      'date': null,
      'tokens': null,
      'cost': null
    },
    {
      'rank': 17,
      'model': 'Muse Spark 1.1',
      'agent': null,
      'effort': null,
      'score': 80.0,
      'ci': null,
      'date': null,
      'tokens': null,
      'cost': null
    },
    {
      'rank': 18,
      'model': 'Gemini 3.6 Flash',
      'agent': null,
      'effort': null,
      'score': 78.0,
      'ci': null,
      'date': null,
      'tokens': null,
      'cost': null
    },
    {
      'rank': 19,
      'model': 'Qwen3.8-27B',
      'agent': null,
      'effort': null,
      'score': 73.0,
      'ci': null,
      'date': null,
      'tokens': null,
      'cost': null
    },
    {
      'rank': 20,
      'model': 'Hy3',
      'agent': null,
      'effort': null,
      'score': 71.7,
      'ci': null,
      'date': null,
      'tokens': null,
      'cost': null
    },
    {
      'rank': 21,
      'model': 'Seed 2.1 Pro',
      'agent': null,
      'effort': null,
      'score': 71.0,
      'ci': null,
      'date': null,
      'tokens': null,
      'cost': null
    },
    {
      'rank': 22,
      'model': 'Laguna S 2.1',
      'agent': null,
      'effort': null,
      'score': 70.2,
      'ci': null,
      'date': null,
      'tokens': null,
      'cost': null
    },
    {
      'rank': 23,
      'model': 'Seed 2.1 Turbo',
      'agent': null,
      'effort': null,
      'score': 67.6,
      'ci': null,
      'date': null,
      'tokens': null,
      'cost': null
    },
    {
      'rank': 24,
      'model': 'MiniMax M3',
      'agent': null,
      'effort': null,
      'score': 66.0,
      'ci': null,
      'date': null,
      'tokens': null,
      'cost': null
    },
    {
      'rank': 25,
      'model': 'Inkling-Small',
      'agent': null,
      'effort': null,
      'score': 64.7,
      'ci': null,
      'date': null,
      'tokens': null,
      'cost': null
    },
    {
      'rank': 26,
      'model': 'MAI-Code-1.1-Flash',
      'agent': null,
      'effort': null,
      'score': 62.9,
      'ci': null,
      'date': null,
      'tokens': null,
      'cost': null
    },
    {
      'rank': 27,
      'model': 'Solar Pro 4',
      'agent': null,
      'effort': null,
      'score': 57.0,
      'ci': null,
      'date': null,
      'tokens': null,
      'cost': null
    },
    {
      'rank': 28,
      'model': 'Nemotron 3 Ultra (550B A55B)',
      'agent': null,
      'effort': null,
      'score': 56.4,
      'ci': null,
      'date': null,
      'tokens': null,
      'cost': null
    },
    {
      'rank': 29,
      'model': 'Gemini 3.5 Flash-Lite',
      'agent': null,
      'effort': null,
      'score': 54.0,
      'ci': null,
      'date': null,
      'tokens': null,
      'cost': null
    },
    {
      'rank': 30,
      'model': 'Muse Glimmer-30B',
      'agent': null,
      'effort': null,
      'score': 51.7,
      'ci': null,
      'date': null,
      'tokens': null,
      'cost': null
    },
    {
      'rank': 31,
      'model': 'IBM Granite 4.2 30B',
      'agent': null,
      'effort': null,
      'score': 29.2,
      'ci': null,
      'date': null,
      'tokens': null,
      'cost': null
    },
    {
      'rank': 32,
      'model': 'Nemotron 3.5 Lightning (30B A3B)',
      'agent': null,
      'effort': null,
      'score': 24.6,
      'ci': null,
      'date': null,
      'tokens': null,
      'cost': null
    },
    {
      'rank': 33,
      'model': 'IBM Granite 4.2 8B',
      'agent': null,
      'effort': null,
      'score': 20.6,
      'ci': null,
      'date': null,
      'tokens': null,
      'cost': null
    }
  ]
};