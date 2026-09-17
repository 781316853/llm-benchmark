// 数据源1:DeepSWE 基准快照(云端抓取)
// 主渠道:https://deepswe.datacurve.ai/(官方实测榜 T1)
// 补充:https://www.datalearner.com/benchmarks/deepswe(厂商官方发布 T2,只补缺,官方口径优先;更新于 2026-09-17)
// 渠道优先级:基准官方实测榜 > 厂商官方发布(论文/发布页)> 第三方聚合与镜像;低层级仅补缺失模型与字段,不覆盖高层级分数
// 字段说明:name=模型名;effort=推理强度;pass1=Pass@1(%);ci=置信区间(±%);
//          cost=平均单任务成本($);outTok=平均输出 tokens;steps=平均 Agent 步数;
//          src=数据来源渠道(official=官方榜;datalearner=厂商官方发布补充条目)
// 注:主源抓取 /artifacts/v1.1/leaderboard-live.json;datalearner.com 补充未收录模型(ci/cost/outTok/steps 为 null)。
window.DEEPSWE = {
  source: "DeepSWE",
  url: "https://deepswe.datacurve.ai/",
  channelPolicy: "渠道优先级:基准官方实测榜 > 厂商官方发布(论文/发布页)> 第三方聚合与镜像;低层级仅补缺失模型与字段,不覆盖高层级分数",
  updated: "2026-09-17",
  refreshedAt: "2026-09-17 13:50",
  version: "v1.1",
  stats: { tasks: 113, repos: 91, languages: 5, models: 28 },
  desc: "在原创、长程软件工程任务上评测前沿编码 Agent(无污染、91 仓库、5 种语言)。",
  models: [
  {
    'name': 'gpt-6-astra',
    'effort': 'xhigh',
    'pass1': 74,
    'ci': 3,
    'cost': 6.52,
    'outTok': 29557,
    'steps': 29,
    'src': 'official'
  },
  {
    'name': 'gemini-3-8-flash',
    'effort': 'high',
    'pass1': 74,
    'ci': 1,
    'cost': 2.36,
    'outTok': 143243,
    'steps': 166,
    'src': 'official'
  },
  {
    'name': 'claude-opus-5',
    'effort': 'max',
    'pass1': 74,
    'ci': 4,
    'cost': 11.84,
    'outTok': 117566,
    'steps': 99,
    'src': 'official'
  },
  {
    'name': 'gpt-5-6-sol',
    'effort': 'max',
    'pass1': 73,
    'ci': 3,
    'cost': 8.39,
    'outTok': 60014,
    'steps': 61,
    'src': 'official'
  },
  {
    'name': 'claude-fable-5',
    'effort': 'xhigh',
    'pass1': 70,
    'ci': 3,
    'cost': 13.41,
    'outTok': 80352,
    'steps': 68,
    'src': 'official'
  },
  {
    'name': 'gpt-5-6-terra',
    'effort': 'max',
    'pass1': 70,
    'ci': 3,
    'cost': 4.95,
    'outTok': 71939,
    'steps': 76,
    'src': 'official'
  },
  {
    'name': 'glm-5-3',
    'effort': 'max',
    'pass1': 69,
    'ci': 3,
    'cost': 3.99,
    'outTok': 80436,
    'steps': 124,
    'src': 'official'
  },
  {
    'name': 'kimi-k3',
    'effort': 'max',
    'pass1': 69,
    'ci': 5,
    'cost': 4.65,
    'outTok': 81500,
    'steps': 98,
    'src': 'official'
  },
  {
    'name': 'grok-4-6',
    'effort': 'medium',
    'pass1': 67,
    'ci': 2,
    'cost': 3.45,
    'outTok': 49764,
    'steps': 70,
    'src': 'official'
  },
  {
    'name': 'gpt-5-6-luna',
    'effort': 'max',
    'pass1': 67,
    'ci': 4,
    'cost': 3.03,
    'outTok': 73400,
    'steps': 102,
    'src': 'official'
  },
  {
    'name': 'gpt-5-5',
    'effort': 'xhigh',
    'pass1': 67,
    'ci': 6,
    'cost': 7.23,
    'outTok': 46295,
    'steps': 82,
    'src': 'official'
  },
  {
    'name': 'gemini-3-7-flash',
    'effort': 'medium',
    'pass1': 65,
    'ci': 3,
    'cost': 2.03,
    'outTok': 93991,
    'steps': 117,
    'src': 'official'
  },
  {
    'name': 'glm-5-3-flash',
    'effort': 'max',
    'pass1': 63,
    'ci': 4,
    'cost': 0.48,
    'outTok': 72830,
    'steps': 123,
    'src': 'official'
  },
  {
    'name': 'DeepSeek V4 Pro 0813',
    'effort': 'max',
    'pass1': 63,
    'ci': 6,
    'cost': 0.24,
    'outTok': 105999,
    'steps': 155,
    'src': 'official'
  },
  {
    'name': 'claude-opus-4-8',
    'effort': 'max',
    'pass1': 59,
    'ci': 2,
    'cost': 13.22,
    'outTok': 135032,
    'steps': 120,
    'src': 'official'
  },
  {
    'name': 'qwen3-8-max',
    'effort': 'xhigh',
    'pass1': 57,
    'ci': 3,
    'cost': 3.73,
    'outTok': 95075,
    'steps': 111,
    'src': 'official'
  },
  {
    'name': 'muse-spark-1-2',
    'effort': 'xhigh',
    'pass1': 55,
    'ci': 2,
    'cost': 3.7,
    'outTok': 99226,
    'steps': 101,
    'src': 'official'
  },
  {
    'name': 'claude-sonnet-5',
    'effort': 'max',
    'pass1': 54,
    'ci': 4,
    'cost': 26.4,
    'outTok': 214118,
    'steps': 268,
    'src': 'official'
  },
  {
    'name': 'grok-4-5',
    'effort': 'high',
    'pass1': 54,
    'ci': 2,
    'cost': 2.42,
    'outTok': 35525,
    'steps': 61,
    'src': 'official'
  },
  {
    'name': 'deepseek-v4-flash',
    'effort': 'max',
    'pass1': 53,
    'ci': 4,
    'cost': 0.1,
    'outTok': 107687,
    'steps': 153,
    'src': 'official'
  },
  {
    'name': 'muse-spark-1-1',
    'effort': 'xhigh',
    'pass1': 53,
    'ci': 3,
    'cost': 2.36,
    'outTok': 74008,
    'steps': 96,
    'src': 'official'
  },
  {
    'name': 'gpt-5-4',
    'effort': 'xhigh',
    'pass1': 52,
    'ci': 2,
    'cost': 5.65,
    'outTok': 71409,
    'steps': 70,
    'src': 'official'
  },
  {
    'name': 'gemini-3-6-flash',
    'effort': 'high',
    'pass1': 47,
    'ci': 4,
    'cost': 4.42,
    'outTok': 95845,
    'steps': 117,
    'src': 'official'
  },
  {
    'name': 'glm-5-2',
    'effort': 'max',
    'pass1': 44,
    'ci': 2,
    'cost': 3.92,
    'outTok': 78175,
    'steps': 129,
    'src': 'official'
  },
  {
    'name': 'gemini-3-5-flash',
    'effort': 'high',
    'pass1': 36,
    'ci': 4,
    'cost': 3.45,
    'outTok': 75730,
    'steps': 105,
    'src': 'official'
  },
  {
    'name': 'kimi-k2-7-code',
    'effort': '-',
    'pass1': 31,
    'ci': 1,
    'cost': 2.82,
    'outTok': 59297,
    'steps': 149,
    'src': 'official'
  },
  {
    'name': 'claude-sonnet-4-6',
    'effort': 'high',
    'pass1': 30,
    'ci': 4,
    'cost': 5.52,
    'outTok': 76160,
    'steps': 134,
    'src': 'official'
  },
  {
    'name': 'gemini-3-1-pro-preview',
    'effort': 'high',
    'pass1': 12,
    'ci': 1,
    'cost': 2.14,
    'outTok': 28369,
    'steps': 76,
    'src': 'official'
  }
]
};
