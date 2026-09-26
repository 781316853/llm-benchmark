// 数据源:Humanity's Last Exam(前沿知识广度,更新于 2026-09-26)
// 来源:https://llm-stats.com/benchmarks/humanity%27s-last-exam(官方:https://lastexam.ai/)
// 主渠道:https://www.datalearner.com/benchmarks/hle(厂商官方发布成绩转录)
// 补充:llm-stats 聚合表 · https://benchlm.ai/benchmarks/hle(benchlm 镜像) · https://benchlm.ai/benchmarks/aahle(AA 复测口径)
// 渠道优先级:基准官方实测榜 > 厂商官方发布(论文/发布页)> 第三方聚合与镜像;低层级仅补缺失模型与字段,不覆盖高层级分数
// 口径注:AA 复测为第三方自家 harness(接近无工具口径),分数系统性低于官方口径约 5 分,
//   仅补官方渠道未收录的模型,src=aa 区分;重叠模型保留现有高分,不被 AA 低分覆盖。
// 字段说明:model=模型名;score=闭卷得分(%);org=厂商;size=参数量;context=上下文;cost=API 价格;src=数据来源渠道(datalearner/llm-stats/benchlm/aa)
// 用途:「权威基准测试」页展示 + 总览矩阵参考列,仅参考,不计入综合分/命中数。
window.HLE = {
  'source': 'Humanity\'s Last Exam',
  'url': 'https://llm-stats.com/benchmarks/humanity%27s-last-exam',
  'officialUrl': 'https://lastexam.ai/',
  'channelPolicy': '渠道优先级:基准官方实测榜 > 厂商官方发布(论文/发布页)> 第三方聚合与镜像;低层级仅补缺失模型与字段,不覆盖高层级分数',
  'updated': '2026-09-26',
  'refreshedAt': '2026-09-26 14:17',
  'stats': {
    'tasks': 2500,
    'entries': 55
  },
  'desc': 'Humanity\'s Last Exam(HLE):CAIS 与 Scale AI 推出的前沿知识广度基准,2500 道由各领域专家撰写、无网络可检索解的问题(数学/科学/人文学科等),目的在衡量模型逼近人类专家知识天花板;得分越高越好。多源合并:datalearner/llm-stats/benchlm 为公开口径,AA 复测为第三方自家 harness(接近无工具口径,系统性偏低约 5 分,src=aa 区分,仅补缺失模型)。',
  'models': [
    {
      'model': 'Claude Opus 5.5',
      'org': 'Anthropic',
      'score': 67.7,
      'license': '不开源',
      'src': 'datalearner',
      'rank': 1
    },
    {
      'model': 'Claude Fable 5.1',
      'org': 'Anthropic',
      'score': 65,
      'license': '不开源',
      'src': 'datalearner',
      'size': '—',
      'context': '1.0M',
      'cost': '$ 10.00 / $ 50.00',
      'rank': 2
    },
    {
      'model': 'Claude Mythos Preview',
      'org': 'Anthropic',
      'score': 64.7,
      'license': '不开源',
      'src': 'datalearner',
      'size': '—',
      'context': '—',
      'cost': '—',
      'rank': 3
    },
    {
      'model': 'DeepSeek-V4.1-Flash',
      'org': 'DeepSeek-AI',
      'score': 63.9,
      'license': '免费商用授权',
      'src': 'datalearner',
      'size': '763B',
      'context': '1.0M',
      'cost': '$ 0.22 / $ 0.66',
      'rank': 4
    },
    {
      'model': 'Claude Opus 5',
      'org': 'Anthropic',
      'score': 63.6,
      'license': '不开源',
      'src': 'datalearner',
      'size': '—',
      'context': '1.0M',
      'cost': '$ 5.00 / $ 25.00',
      'rank': 5
    },
    {
      'model': 'GLM-5.3',
      'org': '智谱AI',
      'score': 62.5,
      'license': '有条件免费商用授权',
      'src': 'datalearner',
      'size': '753B',
      'context': '1.0M',
      'cost': '$ 1.20 / $ 4.00',
      'rank': 6
    },
    {
      'model': 'Muse Spark 1.1',
      'org': 'Facebook AI研究实验室',
      'score': 62.1,
      'license': '不开源',
      'src': 'datalearner',
      'size': '—',
      'context': '1.0M',
      'cost': '$ 1.25 / $ 4.25',
      'rank': 7
    },
    {
      'rank': 8,
      'model': 'DeepSeek-V4-Pro-0813',
      'org': 'DeepSeek',
      'score': 60,
      'size': '1.6T',
      'context': '1.0M',
      'cost': '$ 1.30 / $ 2.60',
      'license': null,
      'src': 'llm-stats'
    },
    {
      'model': 'Kimi K3',
      'org': 'Moonshot AI',
      'score': 59.8,
      'license': '有条件免费商用授权',
      'src': 'datalearner',
      'size': '2.8T',
      'context': '1.0M',
      'cost': '$ 2.85 / $ 14.25',
      'rank': 9
    },
    {
      'model': 'Step 5 Preview',
      'org': 'StepFunAI',
      'score': 59.4,
      'license': '不开源',
      'src': 'datalearner',
      'rank': 10
    },
    {
      'model': 'Claude Fable 5',
      'org': 'Anthropic',
      'score': 59,
      'license': '不开源',
      'src': 'datalearner',
      'size': '—',
      'context': '1.0M',
      'cost': '$ 10.00 / $ 50.00',
      'rank': 11
    },
    {
      'model': 'GPT-5.4 Pro',
      'org': 'OpenAI',
      'score': 58.7,
      'license': '不开源',
      'src': 'datalearner',
      'rank': 12
    },
    {
      'model': 'Muse Spark',
      'org': 'Facebook AI研究实验室',
      'score': 58,
      'license': '不开源',
      'src': 'datalearner',
      'size': '—',
      'context': '—',
      'cost': '—',
      'rank': 13
    },
    {
      'model': 'Claude Opus 4.8',
      'org': 'Anthropic',
      'score': 57.9,
      'license': '不开源',
      'src': 'datalearner',
      'size': '—',
      'context': '1.0M',
      'cost': '$ 5.00 / $ 25.00',
      'rank': 14
    },
    {
      'model': 'Claude Sonnet 5',
      'org': 'Anthropic',
      'score': 57.4,
      'license': '不开源',
      'src': 'datalearner',
      'size': '—',
      'context': '1.0M',
      'cost': '$ 2.00 / $ 10.00',
      'rank': 15
    },
    {
      'model': 'GPT-5.5 Pro',
      'org': 'OpenAI',
      'score': 57.2,
      'license': '不开源',
      'src': 'datalearner',
      'size': '—',
      'context': '—',
      'cost': '—',
      'rank': 16
    },
    {
      'model': 'GPT-6 Astra',
      'org': 'OpenAI',
      'score': 57.2,
      'license': '不开源',
      'src': 'datalearner',
      'rank': 17
    },
    {
      'model': 'Qwen3.8-Max',
      'org': '阿里巴巴',
      'score': 56.2,
      'license': '有条件免费商用授权',
      'src': 'datalearner',
      'size': '2.4T',
      'context': '1.0M',
      'cost': '$ 1.65 / $ 4.95',
      'rank': 18
    },
    {
      'rank': 19,
      'model': 'Seed 2.1 Pro',
      'org': 'ByteDance',
      'score': 55.7,
      'size': '—',
      'context': '—',
      'cost': '—',
      'license': null,
      'src': 'llm-stats'
    },
    {
      'model': 'Hy4 preview',
      'org': '腾讯AI实验室',
      'score': 55.4,
      'license': '免费商用授权',
      'src': 'datalearner',
      'rank': 20
    },
    {
      'model': 'GLM-5.3-Flash',
      'org': '智谱AI',
      'score': 55.3,
      'license': '免费商用授权',
      'src': 'datalearner',
      'size': '320B',
      'context': '1.0M',
      'cost': '$ 0.15 / $ 0.50',
      'rank': 21
    },
    {
      'model': 'Claude Opus 4.7',
      'org': 'Anthropic',
      'score': 54.7,
      'license': '不开源',
      'src': 'datalearner',
      'size': '—',
      'context': '1.0M',
      'cost': '$ 5.00 / $ 25.00',
      'rank': 22
    },
    {
      'rank': 23,
      'model': 'GLM-5.2',
      'org': 'Zhipu AI',
      'score': 54.7,
      'size': '753B',
      'context': '1.0M',
      'cost': '$ 0.75 / $ 2.40',
      'license': null,
      'src': 'llm-stats'
    },
    {
      'rank': 24,
      'model': 'Seed 2.1 Turbo',
      'org': 'ByteDance',
      'score': 54.6,
      'size': '—',
      'context': '—',
      'cost': '—',
      'license': null,
      'src': 'llm-stats'
    },
    {
      'rank': 25,
      'model': 'Claude Opus 4.6',
      'org': 'Anthropic',
      'score': 53.1,
      'size': '—',
      'context': '1.0M',
      'cost': '$ 5.00 / $ 25.00',
      'license': null,
      'src': 'llm-stats'
    },
    {
      'rank': 26,
      'model': 'GLM-5.1',
      'org': 'Zhipu AI',
      'score': 52.3,
      'size': '754B',
      'context': '203K',
      'cost': '$ 1.05 / $ 3.50',
      'license': null,
      'src': 'llm-stats'
    },
    {
      'rank': 27,
      'model': 'GPT-5.5',
      'org': 'OpenAI',
      'score': 52.2,
      'size': '—',
      'context': '1.1M',
      'cost': '$ 5.00 / $ 30.00',
      'license': null,
      'src': 'llm-stats'
    },
    {
      'rank': 28,
      'model': 'Gemini 3.1 Pro',
      'org': 'Google',
      'score': 51.4,
      'size': '—',
      'context': '1.0M',
      'cost': '$ 2.00 / $ 12.00',
      'license': null,
      'src': 'llm-stats'
    },
    {
      'rank': 29,
      'model': 'Kimi K2-Thinking-0905',
      'org': 'Moonshot AI',
      'score': 51,
      'size': '1.0T',
      'context': '—',
      'cost': '—',
      'license': null,
      'src': 'llm-stats'
    },
    {
      'rank': 30,
      'model': 'Grok-4 Heavy',
      'org': 'xAI',
      'score': 50.7,
      'size': '—',
      'context': '—',
      'cost': '—',
      'license': null,
      'src': 'llm-stats'
    },
    {
      'rank': 31,
      'model': 'Kimi K2.5',
      'org': 'Moonshot AI',
      'score': 50.2,
      'size': '1.0T',
      'context': '—',
      'cost': '—',
      'license': null,
      'src': 'llm-stats'
    },
    {
      'rank': 32,
      'model': 'Claude Sonnet 4.6',
      'org': 'Anthropic',
      'score': 49,
      'size': '—',
      'context': '1.0M',
      'cost': '$ 3.00 / $ 15.00',
      'license': null,
      'src': 'llm-stats'
    },
    {
      'rank': 33,
      'model': 'Qwen3.5-27B',
      'org': 'Alibaba Cloud / Qwen Team',
      'score': 48.5,
      'size': '27B',
      'context': '262K',
      'cost': '$ 0.26 / $ 2.60',
      'license': null,
      'src': 'llm-stats'
    },
    {
      'rank': 34,
      'model': 'DeepSeek-V4-Pro-Max',
      'org': 'DeepSeek',
      'score': 48.2,
      'size': '1.6T',
      'context': '1.0M',
      'cost': '$ 1.30 / $ 2.60',
      'license': null,
      'src': 'llm-stats'
    },
    {
      'rank': 35,
      'model': 'Qwen3.5-122B-A10B',
      'org': 'Alibaba Cloud / Qwen Team',
      'score': 47.5,
      'size': '122B',
      'context': '262K',
      'cost': '$ 0.29 / $ 2.40',
      'license': null,
      'src': 'llm-stats'
    },
    {
      'rank': 36,
      'model': 'Qwen3.5-35B-A3B',
      'org': 'Alibaba Cloud / Qwen Team',
      'score': 47.4,
      'size': '35B',
      'context': '262K',
      'cost': '$ 0.14 / $ 1.00',
      'license': null,
      'src': 'llm-stats'
    },
    {
      'rank': 37,
      'model': 'Gemini 3 Pro',
      'org': 'Google',
      'score': 45.8,
      'size': '—',
      'context': '—',
      'cost': '—',
      'license': null,
      'src': 'llm-stats'
    },
    {
      'rank': 38,
      'model': 'DeepSeek-V4-Flash-Max',
      'org': 'DeepSeek',
      'score': 45.1,
      'size': '284B',
      'context': '1.0M',
      'cost': '$ 0.09 / $ 0.18',
      'license': null,
      'src': 'llm-stats'
    },
    {
      'rank': 39,
      'model': 'Gemini 3 Flash',
      'org': 'Google',
      'score': 43.5,
      'size': '—',
      'context': '1.0M',
      'cost': '$ 0.50 / $ 3.00',
      'license': null,
      'src': 'llm-stats'
    },
    {
      'rank': 40,
      'model': 'GLM-4.7',
      'org': 'Zhipu AI',
      'score': 42.8,
      'size': '358B',
      'context': '203K',
      'cost': '$ 0.40 / $ 1.75',
      'license': null,
      'src': 'llm-stats'
    },
    {
      'rank': 41,
      'model': 'Qwen3.7 Max',
      'org': 'Alibaba Cloud / Qwen Team',
      'score': 41.4,
      'size': '—',
      'context': '1.0M',
      'cost': '$ 1.25 / $ 3.75',
      'license': null,
      'src': 'llm-stats'
    },
    {
      'rank': 42,
      'model': 'DeepSeek-V3.2',
      'org': 'DeepSeek',
      'score': 40.8,
      'size': '685B',
      'context': '164K',
      'cost': '$ 0.26 / $ 0.38',
      'license': null,
      'src': 'llm-stats'
    },
    {
      'rank': 43,
      'model': 'DeepSeek-V4-Flash-0423',
      'org': 'DeepSeek',
      'score': 40.3,
      'size': '284B',
      'context': '1.0M',
      'cost': '$ 0.09 / $ 0.18',
      'license': null,
      'src': 'llm-stats'
    },
    {
      'rank': 44,
      'model': 'Gemini 3.5 Flash',
      'org': 'Google',
      'score': 40.2,
      'size': '—',
      'context': '1.0M',
      'cost': '$ 1.50 / $ 9.00',
      'license': null,
      'src': 'llm-stats'
    },
    {
      'rank': 45,
      'model': 'Grok-4',
      'org': 'xAI',
      'score': 40,
      'size': '—',
      'context': '—',
      'cost': '—',
      'license': null,
      'src': 'llm-stats'
    },
    {
      'rank': 46,
      'model': 'GPT-5.4',
      'org': 'OpenAI',
      'score': 39.8,
      'size': '—',
      'context': '1.0M',
      'cost': '$ 2.50 / $ 15.00',
      'license': null,
      'src': 'llm-stats'
    },
    {
      'rank': 47,
      'model': 'ERNIE 5.0',
      'org': 'Baidu',
      'score': 39,
      'size': '—',
      'context': '—',
      'cost': '—',
      'license': null,
      'src': 'llm-stats'
    },
    {
      'rank': 48,
      'model': 'Nemotron 3 Ultra (550B A55B)',
      'org': 'NVIDIA',
      'score': 37.4,
      'size': '550B',
      'context': '262K',
      'cost': '$ 0.50 / $ 2.20',
      'license': null,
      'src': 'llm-stats'
    },
    {
      'rank': 49,
      'model': 'GPT-5.2 Pro',
      'org': 'OpenAI',
      'score': 36.6,
      'size': '—',
      'context': '—',
      'cost': '—',
      'license': null,
      'src': 'llm-stats'
    },
    {
      'rank': 50,
      'model': 'Kimi K2.6',
      'org': 'Moonshot AI',
      'score': 36.4,
      'size': '1.0T',
      'context': '262K',
      'cost': '$ 0.75 / $ 3.50',
      'license': null,
      'src': 'llm-stats'
    },
    {
      'rank': 51,
      'model': 'Qwen3.8-Flash-Next',
      'org': 'Alibaba Cloud / Qwen Team',
      'score': 35.9,
      'size': '125B',
      'context': '—',
      'cost': '—',
      'license': null,
      'src': 'llm-stats'
    },
    {
      'rank': 52,
      'model': 'Qwen3.8 Flash',
      'org': 'Alibaba Cloud / Qwen Team',
      'score': 35.9,
      'size': '125B',
      'context': '1.0M',
      'cost': '$ 0.15 / $ 0.47',
      'license': null,
      'src': 'llm-stats'
    },
    {
      'rank': 53,
      'model': 'Qwen3.7-Plus',
      'org': 'Alibaba Cloud / Qwen Team',
      'score': 34.7,
      'size': '—',
      'context': '—',
      'cost': '—',
      'license': null,
      'src': 'llm-stats'
    },
    {
      'rank': 54,
      'model': 'GPT-5.2',
      'org': 'OpenAI',
      'score': 34.5,
      'size': '—',
      'context': '400K',
      'cost': '$ 1.75 / $ 14.00',
      'license': null,
      'src': 'llm-stats'
    },
    {
      'rank': 55,
      'model': 'MiMo-V2.5-Pro',
      'org': 'Xiaomi',
      'score': 34,
      'size': '1.0T',
      'context': '1.0M',
      'cost': '$ 0.43 / $ 0.87',
      'license': null,
      'src': 'llm-stats'
    }
  ]
};
