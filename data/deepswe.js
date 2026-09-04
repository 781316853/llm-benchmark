// 数据源1:DeepSWE 基准快照(云端抓取)
// 来源:https://deepswe.datacurve.ai/ + https://www.datalearner.com/benchmarks/deepswe (更新于 2026-09-04)
// 字段说明:name=模型名;effort=推理强度;pass1=Pass@1(%);ci=置信区间(±%);
//          cost=平均单任务成本($);outTok=平均输出 tokens;steps=平均 Agent 步数
// 注:主源抓取 /artifacts/v1.1/leaderboard-live.json;datalearner.com 补充未收录模型(ci/cost/outTok/steps 为 null)。
window.DEEPSWE = {
  source: "DeepSWE",
  url: "https://deepswe.datacurve.ai/",
  updated: "2026-09-04",
  refreshedAt: "2026-09-05 00:46",
  version: "v1.1",
  stats: { tasks: 113, repos: 91, languages: 5, models: 35 },
  desc: "在原创、长程软件工程任务上评测前沿编码 Agent(无污染、91 仓库、5 种语言)。",
  models: [
  {
    'name': 'Muse Spark 1.3',
    'effort': '最高（工具）',
    'pass1': 75.4,
    'ci': null,
    'cost': null,
    'outTok': null,
    'steps': null,
    'source': 'datalearner'
  },
  {
    'name': 'gpt-6-astra',
    'effort': 'xhigh',
    'pass1': 74,
    'ci': 3,
    'cost': 6.52,
    'outTok': 29557,
    'steps': 29
  },
  {
    'name': 'gemini-3-8-flash',
    'effort': 'high',
    'pass1': 74,
    'ci': 1,
    'cost': 2.36,
    'outTok': 143243,
    'steps': 166
  },
  {
    'name': 'claude-opus-5',
    'effort': 'max',
    'pass1': 74,
    'ci': 4,
    'cost': 11.84,
    'outTok': 117566,
    'steps': 99
  },
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
    'name': 'Qwen3.8-Max-0902',
    'effort': '极高强度思考（工具）',
    'pass1': 69.3,
    'ci': null,
    'cost': null,
    'outTok': null,
    'steps': null,
    'source': 'datalearner'
  },
  {
    'name': 'glm-5-3',
    'effort': 'max',
    'pass1': 69,
    'ci': 3,
    'cost': 3.99,
    'outTok': 80436,
    'steps': 124
  },
  {
    'name': 'kimi-k3',
    'effort': 'max',
    'pass1': 69,
    'ci': 5,
    'cost': 4.65,
    'outTok': 81500,
    'steps': 98
  },
  {
    'name': 'grok-4-6',
    'effort': 'medium',
    'pass1': 67,
    'ci': 2,
    'cost': 3.45,
    'outTok': 49764,
    'steps': 70
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
    'name': 'gemini-3-7-flash',
    'effort': 'medium',
    'pass1': 65,
    'ci': 3,
    'cost': 2.03,
    'outTok': 93991,
    'steps': 117
  },
  {
    'name': 'Hy4 preview',
    'effort': '思考模式 High（工具）',
    'pass1': 64.3,
    'ci': null,
    'cost': null,
    'outTok': null,
    'steps': null,
    'source': 'datalearner'
  },
  {
    'name': 'glm-5-3-flash',
    'effort': 'max',
    'pass1': 63,
    'ci': 4,
    'cost': 0.48,
    'outTok': 72830,
    'steps': 123
  },
  {
    'name': 'DeepSeek V4 Pro 0813',
    'effort': 'max',
    'pass1': 63,
    'ci': 6,
    'cost': 0.24,
    'outTok': 105999,
    'steps': 155
  },
  {
    'name': 'DeepSeek-V4-Pro',
    'effort': '极高强度思考（工具）',
    'pass1': 62.7,
    'ci': null,
    'cost': null,
    'outTok': null,
    'steps': null,
    'source': 'datalearner'
  },
  {
    'name': 'DeepSeek-V4-Flash-Vision-Exp',
    'effort': '最高（工具）',
    'pass1': 59.3,
    'ci': null,
    'cost': null,
    'outTok': null,
    'steps': null,
    'source': 'datalearner'
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
    'name': 'Qwen3.8-Flash-Next',
    'effort': '极高强度思考（工具）',
    'pass1': 58.7,
    'ci': null,
    'cost': null,
    'outTok': null,
    'steps': null,
    'source': 'datalearner'
  },
  {
    'name': 'qwen3-8-max',
    'effort': 'xhigh',
    'pass1': 57,
    'ci': 3,
    'cost': 3.73,
    'outTok': 95075,
    'steps': 111
  },
  {
    'name': 'muse-spark-1-2',
    'effort': 'xhigh',
    'pass1': 55,
    'ci': 2,
    'cost': 3.7,
    'outTok': 99226,
    'steps': 101
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
    'name': 'grok-4-5',
    'effort': 'high',
    'pass1': 54,
    'ci': 2,
    'cost': 2.42,
    'outTok': 35525,
    'steps': 61
  },
  {
    'name': 'deepseek-v4-flash',
    'effort': 'max',
    'pass1': 53,
    'ci': 4,
    'cost': 0.1,
    'outTok': 107687,
    'steps': 153
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
    'name': 'gpt-5-4',
    'effort': 'xhigh',
    'pass1': 52,
    'ci': 2,
    'cost': 5.65,
    'outTok': 71409,
    'steps': 70
  },
  {
    'name': 'gemini-3-6-flash',
    'effort': 'high',
    'pass1': 47,
    'ci': 4,
    'cost': 4.42,
    'outTok': 95845,
    'steps': 117
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
    'name': 'Qwen3.8-27B',
    'effort': '思考模式（工具）',
    'pass1': 42.2,
    'ci': null,
    'cost': null,
    'outTok': null,
    'steps': null,
    'source': 'datalearner'
  },
  {
    'name': 'gemini-3-5-flash',
    'effort': 'high',
    'pass1': 36,
    'ci': 4,
    'cost': 3.45,
    'outTok': 75730,
    'steps': 105
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
    'name': 'gemini-3-1-pro-preview',
    'effort': 'high',
    'pass1': 12,
    'ci': 1,
    'cost': 2.14,
    'outTok': 28369,
    'steps': 76
  }
]
};
