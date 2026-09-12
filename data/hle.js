// 数据源:Humanity's Last Exam(前沿知识广度,更新于 2026-09-12)
// 来源:https://llm-stats.com/benchmarks/humanity%27s-last-exam(官方:https://lastexam.ai/)
// 字段说明:model=模型名;score=闭卷得分(%);org=厂商;size=参数量;context=上下文;cost=API 价格
// 用途:「权威基准测试」页展示,仅参考,不计入综合分/命中数。
window.HLE = {
  'source': 'Humanity\'s Last Exam',
  'url': 'https://llm-stats.com/benchmarks/humanity%27s-last-exam',
  'officialUrl': 'https://lastexam.ai/',
  'updated': '2026-09-12',
  'refreshedAt': '2026-09-13 00:02',
  'stats': {
    'tasks': 2500,
    'entries': 50
  },
  'desc': 'Humanity\'s Last Exam(HLE):CAIS 与 Scale AI 推出的前沿知识广度基准,2500 道由各领域专家撰写、无网络可检索解的问题(数学/科学/人文学科等),目的在衡量模型逼近人类专家知识天花板;得分越高越好。',
  'models': [
    {
      'rank': 1,
      'model': 'Claude Fable 5.1',
      'org': 'Anthropic',
      'score': 65,
      'size': '—',
      'context': '1.0M',
      'cost': '$ 10.00 / $ 50.00',
      'license': null
    },
    {
      'rank': 2,
      'model': 'Claude Opus 5',
      'org': 'Anthropic',
      'score': 64.7,
      'size': '—',
      'context': '1.0M',
      'cost': '$ 5.00 / $ 25.00',
      'license': null
    },
    {
      'rank': 2,
      'model': 'Claude Mythos Preview',
      'org': 'Anthropic',
      'score': 64.7,
      'size': '—',
      'context': '—',
      'cost': '—',
      'license': null
    },
    {
      'rank': 4,
      'model': 'Claude Fable 5',
      'org': 'Anthropic',
      'score': 64.5,
      'size': '—',
      'context': '1.0M',
      'cost': '$ 10.00 / $ 50.00',
      'license': null
    },
    {
      'rank': 5,
      'model': 'GLM-5.3',
      'org': 'Zhipu AI',
      'score': 62.5,
      'size': '753B',
      'context': '1.0M',
      'cost': '$ 1.20 / $ 4.00',
      'license': null
    },
    {
      'rank': 6,
      'model': 'Muse Spark 1.1',
      'org': 'Meta',
      'score': 62.1,
      'size': '—',
      'context': '1.0M',
      'cost': '$ 1.25 / $ 4.25',
      'license': null
    },
    {
      'rank': 7,
      'model': 'DeepSeek-V4-Pro-0813',
      'org': 'DeepSeek',
      'score': 60,
      'size': '1.6T',
      'context': '1.0M',
      'cost': '$ 0.43 / $ 0.87',
      'license': null
    },
    {
      'rank': 8,
      'model': 'Muse Spark',
      'org': 'Meta',
      'score': 58.4,
      'size': '—',
      'context': '—',
      'cost': '—',
      'license': null
    },
    {
      'rank': 9,
      'model': 'Claude Opus 4.8',
      'org': 'Anthropic',
      'score': 57.9,
      'size': '—',
      'context': '1.0M',
      'cost': '$ 5.00 / $ 25.00',
      'license': null
    },
    {
      'rank': 10,
      'model': 'Claude Sonnet 5',
      'org': 'Anthropic',
      'score': 57.4,
      'size': '—',
      'context': '1.0M',
      'cost': '$ 2.00 / $ 10.00',
      'license': null
    },
    {
      'rank': 11,
      'model': 'GPT-5.5 Pro',
      'org': 'OpenAI',
      'score': 57.2,
      'size': '—',
      'context': '—',
      'cost': '—',
      'license': null
    },
    {
      'rank': 12,
      'model': 'Kimi K3',
      'org': 'Moonshot AI',
      'score': 56,
      'size': '2.8T',
      'context': '1.0M',
      'cost': '$ 2.85 / $ 14.25',
      'license': null
    },
    {
      'rank': 13,
      'model': 'Seed 2.1 Pro',
      'org': 'ByteDance',
      'score': 55.7,
      'size': '—',
      'context': '—',
      'cost': '—',
      'license': null
    },
    {
      'rank': 14,
      'model': 'GLM-5.3-Flash',
      'org': 'Zhipu AI',
      'score': 55.3,
      'size': '320B',
      'context': '1.0M',
      'cost': '$ 0.15 / $ 0.50',
      'license': null
    },
    {
      'rank': 15,
      'model': 'Claude Opus 4.7',
      'org': 'Anthropic',
      'score': 54.7,
      'size': '—',
      'context': '1.0M',
      'cost': '$ 5.00 / $ 25.00',
      'license': null
    },
    {
      'rank': 15,
      'model': 'GLM-5.2',
      'org': 'Zhipu AI',
      'score': 54.7,
      'size': '753B',
      'context': '1.0M',
      'cost': '$ 0.75 / $ 2.40',
      'license': null
    },
    {
      'rank': 17,
      'model': 'Seed 2.1 Turbo',
      'org': 'ByteDance',
      'score': 54.6,
      'size': '—',
      'context': '—',
      'cost': '—',
      'license': null
    },
    {
      'rank': 18,
      'model': 'Claude Opus 4.6',
      'org': 'Anthropic',
      'score': 53.1,
      'size': '—',
      'context': '1.0M',
      'cost': '$ 5.00 / $ 25.00',
      'license': null
    },
    {
      'rank': 19,
      'model': 'GLM-5.1',
      'org': 'Zhipu AI',
      'score': 52.3,
      'size': '754B',
      'context': '203K',
      'cost': '$ 1.05 / $ 3.50',
      'license': null
    },
    {
      'rank': 20,
      'model': 'GPT-5.5',
      'org': 'OpenAI',
      'score': 52.2,
      'size': '—',
      'context': '1.1M',
      'cost': '$ 5.00 / $ 30.00',
      'license': null
    },
    {
      'rank': 21,
      'model': 'Gemini 3.1 Pro',
      'org': 'Google',
      'score': 51.4,
      'size': '—',
      'context': '1.0M',
      'cost': '$ 2.00 / $ 12.00',
      'license': null
    },
    {
      'rank': 22,
      'model': 'Kimi K2-Thinking-0905',
      'org': 'Moonshot AI',
      'score': 51,
      'size': '1.0T',
      'context': '—',
      'cost': '—',
      'license': null
    },
    {
      'rank': 23,
      'model': 'Grok-4 Heavy',
      'org': 'xAI',
      'score': 50.7,
      'size': '—',
      'context': '—',
      'cost': '—',
      'license': null
    },
    {
      'rank': 24,
      'model': 'Kimi K2.5',
      'org': 'Moonshot AI',
      'score': 50.2,
      'size': '1.0T',
      'context': '—',
      'cost': '—',
      'license': null
    },
    {
      'rank': 25,
      'model': 'Claude Sonnet 4.6',
      'org': 'Anthropic',
      'score': 49,
      'size': '—',
      'context': '1.0M',
      'cost': '$ 3.00 / $ 15.00',
      'license': null
    },
    {
      'rank': 26,
      'model': 'Qwen3.5-27B',
      'org': 'Alibaba Cloud / Qwen Team',
      'score': 48.5,
      'size': '27B',
      'context': '262K',
      'cost': '$ 0.26 / $ 2.60',
      'license': null
    },
    {
      'rank': 27,
      'model': 'DeepSeek-V4-Pro-Max',
      'org': 'DeepSeek',
      'score': 48.2,
      'size': '1.6T',
      'context': '1.0M',
      'cost': '$ 1.30 / $ 2.60',
      'license': null
    },
    {
      'rank': 28,
      'model': 'Qwen3.5-122B-A10B',
      'org': 'Alibaba Cloud / Qwen Team',
      'score': 47.5,
      'size': '122B',
      'context': '262K',
      'cost': '$ 0.29 / $ 2.40',
      'license': null
    },
    {
      'rank': 29,
      'model': 'Qwen3.5-35B-A3B',
      'org': 'Alibaba Cloud / Qwen Team',
      'score': 47.4,
      'size': '35B',
      'context': '262K',
      'cost': '$ 0.14 / $ 1.00',
      'license': null
    },
    {
      'rank': 30,
      'model': 'Gemini 3 Pro',
      'org': 'Google',
      'score': 45.8,
      'size': '—',
      'context': '—',
      'cost': '—',
      'license': null
    },
    {
      'rank': 31,
      'model': 'DeepSeek-V4-Flash-Max',
      'org': 'DeepSeek',
      'score': 45.1,
      'size': '284B',
      'context': '1.0M',
      'cost': '$ 0.09 / $ 0.18',
      'license': null
    },
    {
      'rank': 32,
      'model': 'Qwen3.8 Max',
      'org': 'Alibaba Cloud / Qwen Team',
      'score': 43.6,
      'size': '2.4T',
      'context': '1.0M',
      'cost': '$ 1.65 / $ 4.95',
      'license': null
    },
    {
      'rank': 33,
      'model': 'Gemini 3 Flash',
      'org': 'Google',
      'score': 43.5,
      'size': '—',
      'context': '1.0M',
      'cost': '$ 0.50 / $ 3.00',
      'license': null
    },
    {
      'rank': 34,
      'model': 'GLM-4.7',
      'org': 'Zhipu AI',
      'score': 42.8,
      'size': '358B',
      'context': '203K',
      'cost': '$ 0.40 / $ 1.75',
      'license': null
    },
    {
      'rank': 35,
      'model': 'Qwen3.7 Max',
      'org': 'Alibaba Cloud / Qwen Team',
      'score': 41.4,
      'size': '—',
      'context': '1.0M',
      'cost': '$ 1.25 / $ 3.75',
      'license': null
    },
    {
      'rank': 36,
      'model': 'DeepSeek-V3.2',
      'org': 'DeepSeek',
      'score': 40.8,
      'size': '685B',
      'context': '164K',
      'cost': '$ 0.26 / $ 0.38',
      'license': null
    },
    {
      'rank': 37,
      'model': 'DeepSeek-V4-Flash-0423',
      'org': 'DeepSeek',
      'score': 40.3,
      'size': '284B',
      'context': '1.0M',
      'cost': '$ 0.09 / $ 0.18',
      'license': null
    },
    {
      'rank': 38,
      'model': 'Gemini 3.5 Flash',
      'org': 'Google',
      'score': 40.2,
      'size': '—',
      'context': '1.0M',
      'cost': '$ 1.50 / $ 9.00',
      'license': null
    },
    {
      'rank': 39,
      'model': 'Grok-4',
      'org': 'xAI',
      'score': 40,
      'size': '—',
      'context': '—',
      'cost': '—',
      'license': null
    },
    {
      'rank': 40,
      'model': 'GPT-5.4',
      'org': 'OpenAI',
      'score': 39.8,
      'size': '—',
      'context': '1.0M',
      'cost': '$ 2.50 / $ 15.00',
      'license': null
    },
    {
      'rank': 41,
      'model': 'ERNIE 5.0',
      'org': 'Baidu',
      'score': 39,
      'size': '—',
      'context': '—',
      'cost': '—',
      'license': null
    },
    {
      'rank': 42,
      'model': 'Nemotron 3 Ultra (550B A55B)',
      'org': 'NVIDIA',
      'score': 37.4,
      'size': '550B',
      'context': '262K',
      'cost': '$ 0.50 / $ 2.20',
      'license': null
    },
    {
      'rank': 43,
      'model': 'DeepSeek-V4.1-Flash',
      'org': 'DeepSeek',
      'score': 36.8,
      'size': '763B',
      'context': '1.0M',
      'cost': '$ 0.22 / $ 0.66',
      'license': null
    },
    {
      'rank': 44,
      'model': 'GPT-5.2 Pro',
      'org': 'OpenAI',
      'score': 36.6,
      'size': '—',
      'context': '—',
      'cost': '—',
      'license': null
    },
    {
      'rank': 45,
      'model': 'Kimi K2.6',
      'org': 'Moonshot AI',
      'score': 36.4,
      'size': '1.0T',
      'context': '262K',
      'cost': '$ 0.75 / $ 3.50',
      'license': null
    },
    {
      'rank': 46,
      'model': 'Qwen3.8 Flash',
      'org': 'Alibaba Cloud / Qwen Team',
      'score': 35.9,
      'size': '125B',
      'context': '1.0M',
      'cost': '$ 0.15 / $ 0.47',
      'license': null
    },
    {
      'rank': 46,
      'model': 'Qwen3.8-Flash-Next',
      'org': 'Alibaba Cloud / Qwen Team',
      'score': 35.9,
      'size': '125B',
      'context': '—',
      'cost': '—',
      'license': null
    },
    {
      'rank': 48,
      'model': 'Qwen3.7-Plus',
      'org': 'Alibaba Cloud / Qwen Team',
      'score': 34.7,
      'size': '—',
      'context': '—',
      'cost': '—',
      'license': null
    },
    {
      'rank': 49,
      'model': 'GPT-5.2',
      'org': 'OpenAI',
      'score': 34.5,
      'size': '—',
      'context': '400K',
      'cost': '$ 1.75 / $ 14.00',
      'license': null
    },
    {
      'rank': 50,
      'model': 'MiMo-V2.5-Pro',
      'org': 'Xiaomi',
      'score': 34,
      'size': '1.0T',
      'context': '1.0M',
      'cost': '$ 0.43 / $ 0.87',
      'license': null
    }
  ]
};
