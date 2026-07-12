// 数据源1b:DeepSWE v1.0 历史榜单快照(每日刷新)
// 来源:https://deepswe.datacurve.ai/ 榜单 "v1" 切换器
// 抓取方式:/artifacts/v1/leaderboard-live.json(结构化 JSON,由站点榜单 v1 视图在客户端请求)。
// 字段同 deepswe.js;effort 为 null 记为 "-"。与 v1.1 由 js/data.js 的 deepSwe() 合并展示。
window.DEEPSWE_V10 = {
  source: "DeepSWE",
  url: "https://deepswe.datacurve.ai/",
  version: "v1.0",
  captured: "2026-07-12",
  stats: { models: 21 },
  desc: "DeepSWE v1.0 历史榜单(测试了更多模型),作为 v1.1 的补充数据合入展示。",
  models: [
  {
    'name': 'gpt-5-5',
    'effort': 'xhigh',
    'pass1': 70,
    'ci': 3,
    'cost': 6.61,
    'outTok': 46977,
    'steps': 79
  },
  {
    'name': 'claude-opus-4-8',
    'effort': 'max',
    'pass1': 58,
    'ci': 2,
    'cost': 12.58,
    'outTok': 136262,
    'steps': 108
  },
  {
    'name': 'gpt-5-4',
    'effort': 'xhigh',
    'pass1': 56,
    'ci': 2,
    'cost': 4.38,
    'outTok': 71060,
    'steps': 69
  },
  {
    'name': 'claude-opus-4-7',
    'effort': 'max',
    'pass1': 54,
    'ci': 5,
    'cost': 18.19,
    'outTok': 103428,
    'steps': 203
  },
  {
    'name': 'glm-5-2',
    'effort': 'max',
    'pass1': 42,
    'ci': 3,
    'cost': 3.95,
    'outTok': 81513,
    'steps': 125
  },
  {
    'name': 'claude-sonnet-4-6',
    'effort': 'high',
    'pass1': 32,
    'ci': 2,
    'cost': 5.52,
    'outTok': 76182,
    'steps': 129
  },
  {
    'name': 'gemini-3-5-flash',
    'effort': 'medium',
    'pass1': 28,
    'ci': 4,
    'cost': 7.42,
    'outTok': 189024,
    'steps': 75
  },
  {
    'name': 'claude-opus-4-6',
    'effort': 'max',
    'pass1': 28,
    'ci': 4,
    'cost': 5.39,
    'outTok': 44481,
    'steps': 103
  },
  {
    'name': 'gpt-5-4-mini',
    'effort': 'xhigh',
    'pass1': 24,
    'ci': 3,
    'cost': 2.08,
    'outTok': 134516,
    'steps': 86
  },
  {
    'name': 'kimi-k2-6',
    'effort': '-',
    'pass1': 24,
    'ci': 2,
    'cost': 3.16,
    'outTok': 84416,
    'steps': 147
  },
  {
    'name': 'minimax-m3',
    'effort': '-',
    'pass1': 20,
    'ci': 4,
    'cost': 5.57,
    'outTok': 97542,
    'steps': 314
  },
  {
    'name': 'mimo-v2-5-pro',
    'effort': '-',
    'pass1': 19,
    'ci': 2,
    'cost': 1.99,
    'outTok': 49321,
    'steps': 121
  },
  {
    'name': 'qwen3-7-max',
    'effort': '-',
    'pass1': 18,
    'ci': 1,
    'cost': 2.12,
    'outTok': 42447,
    'steps': 110
  },
  {
    'name': 'glm-5-1',
    'effort': '-',
    'pass1': 18,
    'ci': 1,
    'cost': 7.46,
    'outTok': 49157,
    'steps': 177
  },
  {
    'name': 'grok-build-0-1',
    'effort': '-',
    'pass1': 13,
    'ci': 2,
    'cost': 6.6,
    'outTok': 51896,
    'steps': 176
  },
  {
    'name': 'gemini-3-1-pro-preview',
    'effort': '-',
    'pass1': 10,
    'ci': 3,
    'cost': 1.84,
    'outTok': 52991,
    'steps': 74
  },
  {
    'name': 'deepseek-v4-pro',
    'effort': '-',
    'pass1': 8,
    'ci': 3,
    'cost': 4.22,
    'outTok': 49949,
    'steps': 111
  },
  {
    'name': 'gemini-3-flash-preview',
    'effort': '-',
    'pass1': 5,
    'ci': 2,
    'cost': 1.53,
    'outTok': 233062,
    'steps': 71
  },
  {
    'name': 'qwen3-6-plus',
    'effort': '-',
    'pass1': 3,
    'ci': 1,
    'cost': 4.25,
    'outTok': 66893,
    'steps': 164
  },
  {
    'name': 'claude-haiku-4-5',
    'effort': '-',
    'pass1': 0,
    'ci': 0,
    'cost': 0.84,
    'outTok': 39188,
    'steps': 109
  },
  {
    'name': 'minimax-m2-7',
    'effort': '-',
    'pass1': 0,
    'ci': 0,
    'cost': 0.7,
    'outTok': 60023,
    'steps': 136
  }
]
};
