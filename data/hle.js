// 数据源:Humanity's Last Exam(前沿知识广度,更新于 2026-09-14)
// 来源:https://llm-stats.com/benchmarks/humanity%27s-last-exam(官方:https://lastexam.ai/)
// 主渠道:https://www.datalearner.com/benchmarks/hle(厂商官方发布成绩转录)
// 补充:llm-stats 聚合表 · https://benchlm.ai/benchmarks/hle(benchlm 镜像)
// 渠道优先级:基准官方实测榜 > 厂商官方发布(论文/发布页)> 第三方聚合与镜像;低层级仅补缺失模型与字段,不覆盖高层级分数
// 字段说明:model=模型名;score=闭卷得分(%);org=厂商;size=参数量;context=上下文;cost=API 价格;src=数据来源渠道(datalearner/llm-stats/benchlm)
// 用途:「权威基准测试」页展示,仅参考,不计入综合分/命中数。
window.HLE = {
  'source': 'Humanity\'s Last Exam',
  'url': 'https://llm-stats.com/benchmarks/humanity%27s-last-exam',
  'officialUrl': 'https://lastexam.ai/',
  'channelPolicy': '渠道优先级:基准官方实测榜 > 厂商官方发布(论文/发布页)> 第三方聚合与镜像;低层级仅补缺失模型与字段,不覆盖高层级分数',
  'updated': '2026-09-14',
  'refreshedAt': '2026-09-15 02:22',
  'stats': {
    'tasks': 2500,
    'entries': 82
  },
  'desc': 'Humanity\'s Last Exam(HLE):CAIS 与 Scale AI 推出的前沿知识广度基准,2500 道由各领域专家撰写、无网络可检索解的问题(数学/科学/人文学科等),目的在衡量模型逼近人类专家知识天花板;得分越高越好。',
  'models': [
    {
      'model': 'Claude Fable 5.1',
      'org': 'Anthropic',
      'score': 65,
      'license': '不开源',
      'src': 'datalearner',
      'size': '—',
      'context': '1.0M',
      'cost': '$ 10.00 / $ 50.00',
      'rank': 1
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
      'rank': 2
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
      'rank': 3
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
      'rank': 4
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
      'rank': 5
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
      'rank': 6
    },
    {
      'rank': 7,
      'model': 'DeepSeek-V4-Pro-0813',
      'org': 'DeepSeek',
      'score': 60,
      'size': '1.6T',
      'context': '1.0M',
      'cost': '$ 0.43 / $ 0.87',
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
      'rank': 8
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
      'rank': 9
    },
    {
      'model': 'GPT-5.4 Pro',
      'org': 'OpenAI',
      'score': 58.7,
      'license': '不开源',
      'src': 'datalearner',
      'rank': 10
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
      'rank': 11
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
      'rank': 12
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
      'rank': 13
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
      'rank': 14
    },
    {
      'model': 'GPT-6 Astra',
      'org': 'OpenAI',
      'score': 57.2,
      'license': '不开源',
      'src': 'datalearner',
      'rank': 15
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
      'rank': 16
    },
    {
      'model': 'Apodex 1.1',
      'org': 'Apodex',
      'score': 56.1,
      'src': 'benchlm',
      'rank': 17
    },
    {
      'rank': 18,
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
      'rank': 19
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
      'rank': 20
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
      'rank': 21
    },
    {
      'model': 'GLM-5.2',
      'org': '智谱AI',
      'score': 54.7,
      'license': '免费商用授权',
      'src': 'datalearner',
      'size': '753B',
      'context': '1.0M',
      'cost': '$ 0.75 / $ 2.40',
      'rank': 22
    },
    {
      'model': 'Claude Opus 4.7 (Adaptive)',
      'org': 'Anthropic',
      'score': 54.7,
      'src': 'benchlm',
      'rank': 23
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
      'model': 'dots3-note Preview',
      'org': 'Dots Studio',
      'score': 52.6,
      'src': 'benchlm',
      'rank': 26
    },
    {
      'rank': 27,
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
      'rank': 28,
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
      'rank': 29,
      'model': 'GPT-5.4',
      'org': 'OpenAI',
      'score': 52.1,
      'size': '—',
      'context': '1.0M',
      'cost': '$ 2.50 / $ 15.00',
      'license': null,
      'src': 'benchlm'
    },
    {
      'rank': 30,
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
      'rank': 31,
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
      'rank': 32,
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
      'model': 'GLM-5',
      'org': 'Z.AI',
      'score': 50.4,
      'src': 'benchlm',
      'rank': 33
    },
    {
      'rank': 34,
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
      'rank': 35,
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
      'rank': 36,
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
      'rank': 37,
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
      'rank': 38,
      'model': 'MiMo-V2.5-Pro',
      'org': 'Xiaomi',
      'score': 48,
      'size': '1.0T',
      'context': '1.0M',
      'cost': '$ 0.43 / $ 0.87',
      'license': null,
      'src': 'benchlm'
    },
    {
      'model': 'Inkling-Small',
      'org': 'Thinking Machines Lab',
      'score': 47.8,
      'src': 'benchlm',
      'rank': 39
    },
    {
      'model': 'Agents-A1',
      'org': 'InternScience',
      'score': 47.6,
      'src': 'benchlm',
      'rank': 40
    },
    {
      'rank': 41,
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
      'rank': 42,
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
      'model': 'Inkling',
      'org': 'Thinking Machines Lab',
      'score': 46,
      'src': 'benchlm',
      'rank': 43
    },
    {
      'rank': 44,
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
      'rank': 45,
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
      'model': 'Ornith-1.5-397B',
      'org': 'Ornith AI',
      'score': 44.6,
      'src': 'benchlm',
      'rank': 46
    },
    {
      'rank': 47,
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
      'rank': 48,
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
      'model': 'GPT-5.4 mini',
      'org': 'OpenAI',
      'score': 41.5,
      'src': 'benchlm',
      'rank': 49
    },
    {
      'rank': 50,
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
      'rank': 51,
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
      'rank': 52,
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
      'rank': 53,
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
      'rank': 54,
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
      'rank': 55,
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
      'model': 'GPT-5.4 nano',
      'org': 'OpenAI',
      'score': 37.7,
      'src': 'benchlm',
      'rank': 56
    },
    {
      'rank': 57,
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
      'rank': 58,
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
      'rank': 59,
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
      'rank': 60,
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
      'rank': 61,
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
      'model': 'Grok 4.3',
      'org': 'xAI',
      'score': 35,
      'src': 'benchlm',
      'rank': 62
    },
    {
      'model': 'DeepSeek V4 Flash 0731',
      'org': 'DeepSeek',
      'score': 34.8,
      'src': 'benchlm',
      'rank': 63
    },
    {
      'rank': 64,
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
      'rank': 65,
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
      'model': 'Claude Opus 4.5',
      'org': 'Anthropic',
      'score': 30.8,
      'src': 'benchlm',
      'rank': 66
    },
    {
      'model': 'Qwen3.8-27B',
      'org': 'Alibaba',
      'score': 30.8,
      'src': 'benchlm',
      'rank': 67
    },
    {
      'model': 'Qwen3.6 Plus',
      'org': 'Alibaba',
      'score': 28.8,
      'src': 'benchlm',
      'rank': 68
    },
    {
      'model': 'Qwen3.5 397B',
      'org': 'Alibaba',
      'score': 28.7,
      'src': 'benchlm',
      'rank': 69
    },
    {
      'model': 'A.X K2',
      'org': 'SK Telecom',
      'score': 27.8,
      'src': 'benchlm',
      'rank': 70
    },
    {
      'model': 'Nemotron 3 Ultra',
      'org': 'NVIDIA',
      'score': 26.7,
      'src': 'benchlm',
      'rank': 71
    },
    {
      'model': 'Gemma 4 31B',
      'org': 'Google',
      'score': 26.5,
      'src': 'benchlm',
      'rank': 72
    },
    {
      'model': 'Ornith-1.5-35B-A3B',
      'org': 'Ornith AI',
      'score': 25.6,
      'src': 'benchlm',
      'rank': 73
    },
    {
      'model': 'Hy3 Preview',
      'org': 'Tencent',
      'score': 25.5,
      'src': 'benchlm',
      'rank': 74
    },
    {
      'model': 'Qwen3.6-27B',
      'org': 'Alibaba',
      'score': 24,
      'src': 'benchlm',
      'rank': 75
    },
    {
      'model': 'Ling 3.0 Flash',
      'org': 'InclusionAI',
      'score': 22.7,
      'src': 'benchlm',
      'rank': 76
    },
    {
      'model': 'Qwen3.6-35B-A3B',
      'org': 'Alibaba',
      'score': 21.4,
      'src': 'benchlm',
      'rank': 77
    },
    {
      'model': 'Ornith-1.5-9B',
      'org': 'Ornith AI',
      'score': 20.2,
      'src': 'benchlm',
      'rank': 78
    },
    {
      'model': 'Gemini 2.5 Pro',
      'org': 'Google',
      'score': 18.8,
      'src': 'benchlm',
      'rank': 79
    },
    {
      'model': 'K-EXAONE 2.0',
      'org': 'LG AI Research',
      'score': 18.3,
      'src': 'benchlm',
      'rank': 80
    },
    {
      'model': 'Gemma 4 26B A4B',
      'org': 'Google',
      'score': 17.2,
      'src': 'benchlm',
      'rank': 81
    },
    {
      'model': 'MiniCPM5-2B',
      'org': 'OpenBMB',
      'score': 8.9,
      'src': 'benchlm',
      'rank': 82
    }
  ]
};
