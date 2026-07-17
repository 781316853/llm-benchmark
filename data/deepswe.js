// 数据源1:DeepSWE 基准快照(云端抓取)
// 来源:https://deepswe.datacurve.ai/ + https://www.datalearner.com/benchmarks/deepswe (更新于 2026-07-17)
// 字段说明:name=模型名;effort=推理强度;pass1=Pass@1(%);ci=置信区间(±%);
//          cost=平均单任务成本($);outTok=平均输出 tokens;steps=平均 Agent 步数
// 注:主源抓取 /artifacts/v1.1/leaderboard-live.json;datalearner.com 补充未收录模型(ci/cost/outTok/steps 为 null)。
window.DEEPSWE = {
  source: "DeepSWE",
  url: "https://deepswe.datacurve.ai/",
  updated: "2026-07-17",
  version: "v1.1",
  stats: { tasks: 113, repos: 91, languages: 5, models: 16 },
  desc: "在原创、长程软件工程任务上评测前沿编码 Agent(无污染、91 仓库、5 种语言)。",
  models: [
  {
    'name': 'gpt-5-6-sol',
    'effort': 'max',
    'pass1': 73,
    'ci': 3,
    'cost': 8.39,
    'outTok': 60014,
    'steps': 61
  },
  {
    'name': 'claude-fable-5',
    'effort': 'xhigh',
    'pass1': 70,
    'ci': 3,
    'cost': 13.41,
    'outTok': 80352,
    'steps': 68
  },
  {
    'name': 'gpt-5-6-terra',
    'effort': 'max',
    'pass1': 70,
    'ci': 3,
    'cost': 4.95,
    'outTok': 71939,
    'steps': 76
  },
  {
    'name': 'gpt-5-6-luna',
    'effort': 'max',
    'pass1': 67,
    'ci': 4,
    'cost': 3.03,
    'outTok': 73400,
    'steps': 102
  },
  {
    'name': 'gpt-5-5',
    'effort': 'xhigh',
    'pass1': 67,
    'ci': 6,
    'cost': 7.23,
    'outTok': 46295,
    'steps': 82
  },
  {
    'name': 'claude-opus-4-8',
    'effort': 'max',
    'pass1': 59,
    'ci': 2,
    'cost': 13.22,
    'outTok': 135032,
    'steps': 120
  },
  {
    'name': 'claude-sonnet-5',
    'effort': 'max',
    'pass1': 54,
    'ci': 4,
    'cost': 26.4,
    'outTok': 214118,
    'steps': 268
  },
  {
    'name': 'muse-spark-1-1',
    'effort': 'xhigh',
    'pass1': 53,
    'ci': 3,
    'cost': 2.36,
    'outTok': 74008,
    'steps': 96
  },
  {
    'name': 'Grok 4.5',
    'effort': '思考模式 High（工具）',
    'pass1': 53,
    'ci': null,
    'cost': null,
    'outTok': null,
    'steps': null,
    'source': 'datalearner'
  },
  {
    'name': 'gpt-5-4',
    'effort': 'xhigh',
    'pass1': 52,
    'ci': 2,
    'cost': 5.65,
    'outTok': 71409,
    'steps': 70
  },
  {
    'name': 'glm-5-2',
    'effort': 'max',
    'pass1': 44,
    'ci': 2,
    'cost': 3.92,
    'outTok': 78175,
    'steps': 129
  },
  {
    'name': 'gemini-3-5-flash',
    'effort': 'medium',
    'pass1': 37,
    'ci': 2,
    'cost': 7.34,
    'outTok': 275778,
    'steps': 86
  },
  {
    'name': 'kimi-k2-7-code',
    'effort': '-',
    'pass1': 31,
    'ci': 1,
    'cost': 2.82,
    'outTok': 59297,
    'steps': 149
  },
  {
    'name': 'claude-sonnet-4-6',
    'effort': 'high',
    'pass1': 30,
    'ci': 4,
    'cost': 5.52,
    'outTok': 76160,
    'steps': 134
  },
  {
    'name': 'Hy3',
    'effort': '思考模式 High（工具）',
    'pass1': 28,
    'ci': null,
    'cost': null,
    'outTok': null,
    'steps': null,
    'source': 'datalearner'
  },
  {
    'name': 'gemini-3-1-pro-preview',
    'effort': 'high',
    'pass1': 12,
    'ci': 2,
    'cost': 9.48,
    'outTok': 196386,
    'steps': 81
  }
]
};
