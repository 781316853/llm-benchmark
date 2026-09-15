// 数据源:Humanity's Last Exam(前沿知识广度,更新于 2026-09-15)
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
  'updated': '2026-09-15',
  'refreshedAt': '2026-09-15 17:16',
  'stats': {
    'tasks': 2500,
    'entries': 220
  },
  'desc': 'Humanity\'s Last Exam(HLE):CAIS 与 Scale AI 推出的前沿知识广度基准,2500 道由各领域专家撰写、无网络可检索解的问题(数学/科学/人文学科等),目的在衡量模型逼近人类专家知识天花板;得分越高越好。多源合并:datalearner/llm-stats/benchlm 为公开口径,AA 复测为第三方自家 harness(接近无工具口径,系统性偏低约 5 分,src=aa 区分,仅补缺失模型)。',
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
      'model': 'GPT-5.6 Sol',
      'org': 'OpenAI',
      'score': 49.5,
      'src': 'aa',
      'rank': 35
    },
    {
      'rank': 36,
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
      'model': 'Muse Spark 1.3',
      'org': 'Meta',
      'score': 48.7,
      'src': 'aa',
      'rank': 37
    },
    {
      'rank': 38,
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
      'rank': 39,
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
      'rank': 40,
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
      'model': 'Gemini 3.7 Flash',
      'org': 'Google',
      'score': 47.9,
      'src': 'aa',
      'rank': 41
    },
    {
      'model': 'Inkling-Small',
      'org': 'Thinking Machines Lab',
      'score': 47.8,
      'src': 'benchlm',
      'rank': 42
    },
    {
      'model': 'Gemini 3.8 Flash',
      'org': 'Google',
      'score': 47.8,
      'src': 'aa',
      'rank': 43
    },
    {
      'model': 'Agents-A1',
      'org': 'InternScience',
      'score': 47.6,
      'src': 'benchlm',
      'rank': 44
    },
    {
      'rank': 45,
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
      'rank': 46,
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
      'rank': 47
    },
    {
      'rank': 48,
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
      'model': 'Muse Spark 1.2',
      'org': 'Meta',
      'score': 45.5,
      'src': 'aa',
      'rank': 49
    },
    {
      'rank': 50,
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
      'rank': 51
    },
    {
      'rank': 52,
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
      'model': 'Qwen3.8 Max Preview',
      'org': 'Alibaba',
      'score': 43,
      'src': 'aa',
      'rank': 53
    },
    {
      'model': 'GPT-5.6 Terra',
      'org': 'OpenAI',
      'score': 42.9,
      'src': 'aa',
      'rank': 54
    },
    {
      'model': 'Grok 4.6',
      'org': 'xAI',
      'score': 42.9,
      'src': 'aa',
      'rank': 55
    },
    {
      'rank': 56,
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
      'rank': 57,
      'model': 'Gemini 3.5 Flash',
      'org': 'Google',
      'score': 42.7,
      'size': '—',
      'context': '1.0M',
      'cost': '$ 1.50 / $ 9.00',
      'license': null,
      'src': 'aa'
    },
    {
      'model': 'Grok 4.5',
      'org': 'xAI',
      'score': 42.7,
      'src': 'aa',
      'rank': 58
    },
    {
      'model': 'GPT-5.3 Codex',
      'org': 'OpenAI',
      'score': 42.5,
      'src': 'aa',
      'rank': 59
    },
    {
      'model': 'GPT-5.3-Codex-Spark',
      'org': 'OpenAI',
      'score': 42.5,
      'src': 'aa',
      'rank': 60
    },
    {
      'model': 'GPT-5.4 mini',
      'org': 'OpenAI',
      'score': 41.5,
      'src': 'benchlm',
      'rank': 61
    },
    {
      'rank': 62,
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
      'rank': 63,
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
      'model': 'Gemini 3.6 Flash',
      'org': 'Google',
      'score': 40.8,
      'src': 'aa',
      'rank': 64
    },
    {
      'rank': 65,
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
      'rank': 66,
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
      'model': 'Claude Opus 4.6 (Adaptive)',
      'org': 'Anthropic',
      'score': 39.9,
      'src': 'aa',
      'rank': 67
    },
    {
      'model': 'GPT-5.6 Luna',
      'org': 'OpenAI',
      'score': 39.5,
      'src': 'aa',
      'rank': 68
    },
    {
      'rank': 69,
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
      'model': 'MiniMax M3',
      'org': 'MiniMax',
      'score': 39,
      'src': 'aa',
      'rank': 70
    },
    {
      'model': 'DeepSeek V4 Flash 0731',
      'org': 'DeepSeek',
      'score': 38.6,
      'src': 'aa',
      'rank': 71
    },
    {
      'rank': 72,
      'model': 'Qwen3.8-Flash-Next',
      'org': 'Alibaba Cloud / Qwen Team',
      'score': 38,
      'size': '125B',
      'context': '—',
      'cost': '—',
      'license': null,
      'src': 'aa'
    },
    {
      'rank': 73,
      'model': 'GPT-5.2',
      'org': 'OpenAI',
      'score': 37.7,
      'size': '—',
      'context': '400K',
      'cost': '$ 1.75 / $ 14.00',
      'license': null,
      'src': 'aa'
    },
    {
      'model': 'GPT-5.4 nano',
      'org': 'OpenAI',
      'score': 37.7,
      'src': 'benchlm',
      'rank': 74
    },
    {
      'rank': 75,
      'model': 'Kimi K2.6',
      'org': 'Moonshot AI',
      'score': 37.5,
      'size': '1.0T',
      'context': '262K',
      'cost': '$ 0.75 / $ 3.50',
      'license': null,
      'src': 'aa'
    },
    {
      'rank': 76,
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
      'model': 'Grok 4.3',
      'org': 'xAI',
      'score': 37.2,
      'src': 'aa',
      'rank': 77
    },
    {
      'rank': 78,
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
      'rank': 79,
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
      'model': 'GPT-5.2-Codex',
      'org': 'OpenAI',
      'score': 35.7,
      'src': 'aa',
      'rank': 80
    },
    {
      'rank': 81,
      'model': 'Qwen3.7 Plus',
      'org': 'Alibaba Cloud / Qwen Team',
      'score': 35.6,
      'size': '—',
      'context': '—',
      'cost': '—',
      'license': null,
      'src': 'aa'
    },
    {
      'model': 'Kimi K2.7 Code',
      'org': 'Moonshot AI',
      'score': 35,
      'src': 'aa',
      'rank': 82
    },
    {
      'model': 'Apodex 1.1 Mini',
      'org': 'Apodex',
      'score': 34.1,
      'src': 'aa',
      'rank': 83
    },
    {
      'model': 'Qwen3.8-27B',
      'org': 'Alibaba',
      'score': 33.9,
      'src': 'aa',
      'rank': 84
    },
    {
      'model': 'Hy3 Preview',
      'org': 'Tencent',
      'score': 33.5,
      'src': 'aa',
      'rank': 85
    },
    {
      'model': 'Hy3',
      'org': 'Tencent',
      'score': 33.5,
      'src': 'aa',
      'rank': 86
    },
    {
      'model': 'Claude Opus 4.5',
      'org': 'Anthropic',
      'score': 30.8,
      'src': 'benchlm',
      'rank': 87
    },
    {
      'model': 'Qwen 3.6 Max (preview)',
      'org': 'Alibaba',
      'score': 30.8,
      'src': 'aa',
      'rank': 88
    },
    {
      'model': 'Kimi K2.5 (Reasoning)',
      'org': 'Moonshot AI',
      'score': 30.7,
      'src': 'aa',
      'rank': 89
    },
    {
      'model': 'MiMo-V2-Pro',
      'org': 'Xiaomi',
      'score': 30.4,
      'src': 'aa',
      'rank': 90
    },
    {
      'model': 'Claude Opus 4.5 Thinking',
      'org': 'Anthropic',
      'score': 30.1,
      'src': 'aa',
      'rank': 91
    },
    {
      'model': 'A.X K2',
      'org': 'SK Telecom',
      'score': 29.6,
      'src': 'aa',
      'rank': 92
    },
    {
      'model': 'MiniMax M2.7',
      'org': 'MiniMax',
      'score': 29.6,
      'src': 'aa',
      'rank': 93
    },
    {
      'model': 'Solar Pro 4',
      'org': 'Upstage',
      'score': 29.2,
      'src': 'aa',
      'rank': 94
    },
    {
      'model': 'Qwen3.6 Plus',
      'org': 'Alibaba',
      'score': 28.8,
      'src': 'benchlm',
      'rank': 95
    },
    {
      'model': 'Qwen3.5 397B',
      'org': 'Alibaba',
      'score': 28.7,
      'src': 'benchlm',
      'rank': 96
    },
    {
      'model': 'GPT-5.1',
      'org': 'OpenAI',
      'score': 28.5,
      'src': 'aa',
      'rank': 97
    },
    {
      'model': 'GPT-5 (high)',
      'org': 'OpenAI',
      'score': 28.5,
      'src': 'aa',
      'rank': 98
    },
    {
      'model': 'Nemotron 3 Ultra',
      'org': 'NVIDIA',
      'score': 28.4,
      'src': 'aa',
      'rank': 99
    },
    {
      'model': 'GLM-5-Turbo',
      'org': 'Z.AI',
      'score': 27.8,
      'src': 'aa',
      'rank': 100
    },
    {
      'model': 'Gemma 4 31B',
      'org': 'Google',
      'score': 26.5,
      'src': 'benchlm',
      'rank': 101
    },
    {
      'model': 'GPT-5.1-Codex',
      'org': 'OpenAI',
      'score': 25.7,
      'src': 'aa',
      'rank': 102
    },
    {
      'model': 'GPT-5.1-Codex-Max',
      'org': 'OpenAI',
      'score': 25.7,
      'src': 'aa',
      'rank': 103
    },
    {
      'model': 'Ornith-1.5-35B-A3B',
      'org': 'Ornith AI',
      'score': 25.6,
      'src': 'benchlm',
      'rank': 104
    },
    {
      'model': 'GPT-5 (medium)',
      'org': 'OpenAI',
      'score': 25.4,
      'src': 'aa',
      'rank': 105
    },
    {
      'model': 'Step 3.5 Flash',
      'org': 'StepFun',
      'score': 24.5,
      'src': 'aa',
      'rank': 106
    },
    {
      'model': 'Qwen3.6-27B',
      'org': 'Alibaba',
      'score': 24,
      'src': 'benchlm',
      'rank': 107
    },
    {
      'model': 'Ling 3.0 Flash',
      'org': 'InclusionAI',
      'score': 23.7,
      'src': 'aa',
      'rank': 108
    },
    {
      'model': 'Ling 3.0 Flash FP8',
      'org': 'InclusionAI',
      'score': 23.7,
      'src': 'aa',
      'rank': 109
    },
    {
      'model': 'Gemini 2.5 Pro',
      'org': 'Google',
      'score': 22.5,
      'src': 'aa',
      'rank': 110
    },
    {
      'model': 'Qwen3.6-35B-A3B',
      'org': 'Alibaba',
      'score': 22.2,
      'src': 'aa',
      'rank': 111
    },
    {
      'model': 'MiMo-V2-Omni',
      'org': 'Xiaomi',
      'score': 22.1,
      'src': 'aa',
      'rank': 112
    },
    {
      'model': 'Muse Glimmer 30B',
      'org': 'Meta',
      'score': 22,
      'src': 'aa',
      'rank': 113
    },
    {
      'model': 'Ling 3.0 Flash VL',
      'org': 'InclusionAI',
      'score': 22,
      'src': 'aa',
      'rank': 114
    },
    {
      'model': 'GPT-5 mini',
      'org': 'OpenAI',
      'score': 21.5,
      'src': 'aa',
      'rank': 115
    },
    {
      'model': 'Step 3.7 Flash',
      'org': 'StepFun',
      'score': 21.4,
      'src': 'aa',
      'rank': 116
    },
    {
      'model': 'Nemotron 3 Super 100B',
      'org': 'NVIDIA',
      'score': 20.8,
      'src': 'aa',
      'rank': 117
    },
    {
      'model': 'Nemotron 3 Super 120B A12B',
      'org': 'NVIDIA',
      'score': 20.8,
      'src': 'aa',
      'rank': 118
    },
    {
      'model': 'MiniMax M2.5',
      'org': 'MiniMax',
      'score': 20.5,
      'src': 'aa',
      'rank': 119
    },
    {
      'model': 'Ornith-1.5-9B',
      'org': 'Ornith AI',
      'score': 20.2,
      'src': 'benchlm',
      'rank': 120
    },
    {
      'model': 'o3',
      'org': 'OpenAI',
      'score': 20.1,
      'src': 'aa',
      'rank': 121
    },
    {
      'model': 'Qwen3.5 397B (Reasoning)',
      'org': 'Alibaba',
      'score': 19.8,
      'src': 'aa',
      'rank': 122
    },
    {
      'model': 'GPT-OSS 120B',
      'org': 'OpenAI',
      'score': 19.6,
      'src': 'aa',
      'rank': 123
    },
    {
      'model': 'Gemma 4 26B A4B',
      'org': 'Google',
      'score': 19.3,
      'src': 'aa',
      'rank': 124
    },
    {
      'model': 'Grok 4.1 Fast (Reasoning)',
      'org': 'xAI',
      'score': 19.3,
      'src': 'aa',
      'rank': 125
    },
    {
      'model': 'Grok 4 Fast (Reasoning)',
      'org': 'xAI',
      'score': 19.1,
      'src': 'aa',
      'rank': 126
    },
    {
      'model': 'Gemini 3.5 Flash-Lite',
      'org': 'Google',
      'score': 18.8,
      'src': 'aa',
      'rank': 127
    },
    {
      'model': 'Quasar 438B',
      'org': 'Multiverse Computing',
      'score': 18.7,
      'src': 'aa',
      'rank': 128
    },
    {
      'model': 'K-EXAONE 2.0',
      'org': 'LG AI Research',
      'score': 18.6,
      'src': 'aa',
      'rank': 129
    },
    {
      'model': 'GLM-5V-Turbo',
      'org': 'Z.AI',
      'score': 17.1,
      'src': 'aa',
      'rank': 130
    },
    {
      'model': 'Mercury 2',
      'org': 'Inception',
      'score': 17.1,
      'src': 'aa',
      'rank': 131
    },
    {
      'model': 'DeepSeek-R1',
      'org': 'DeepSeek',
      'score': 15.8,
      'src': 'aa',
      'rank': 132
    },
    {
      'model': 'Trinity-Large-Thinking',
      'org': 'Arcee AI',
      'score': 15.8,
      'src': 'aa',
      'rank': 133
    },
    {
      'model': 'Trinity-Large-Preview',
      'org': 'Arcee AI',
      'score': 15.8,
      'src': 'aa',
      'rank': 134
    },
    {
      'model': 'Gemma 4 12B',
      'org': 'Google',
      'score': 15.7,
      'src': 'aa',
      'rank': 135
    },
    {
      'model': 'DeepSeek V3.1 (Reasoning)',
      'org': 'DeepSeek',
      'score': 14.3,
      'src': 'aa',
      'rank': 136
    },
    {
      'model': 'K-Exaone',
      'org': 'LG AI Research',
      'score': 13.9,
      'src': 'aa',
      'rank': 137
    },
    {
      'model': 'Mistral Medium 3.5 128B',
      'org': 'Mistral',
      'score': 13.8,
      'src': 'aa',
      'rank': 138
    },
    {
      'model': 'Claude 4.1 Opus Thinking',
      'org': 'Anthropic',
      'score': 12.5,
      'src': 'aa',
      'rank': 139
    },
    {
      'model': 'Command A+',
      'org': 'Cohere',
      'score': 12,
      'src': 'aa',
      'rank': 140
    },
    {
      'model': 'Qwen3 Max',
      'org': 'Alibaba',
      'score': 11.9,
      'src': 'aa',
      'rank': 141
    },
    {
      'model': 'Nemotron 3 Nano 30B',
      'org': 'NVIDIA',
      'score': 11.4,
      'src': 'aa',
      'rank': 142
    },
    {
      'model': 'Granite 4.2 30B',
      'org': 'IBM',
      'score': 11.2,
      'src': 'aa',
      'rank': 143
    },
    {
      'model': 'North Mini Code',
      'org': 'Cohere',
      'score': 11.1,
      'src': 'aa',
      'rank': 144
    },
    {
      'model': 'GPT-OSS 20B',
      'org': 'OpenAI',
      'score': 11,
      'src': 'aa',
      'rank': 145
    },
    {
      'model': 'Sarvam 105B',
      'org': 'Sarvam',
      'score': 11,
      'src': 'aa',
      'rank': 146
    },
    {
      'model': 'Nemotron 3.5 Lightning 30B A3B NVFP4',
      'org': 'NVIDIA',
      'score': 10.6,
      'src': 'aa',
      'rank': 147
    },
    {
      'model': 'Solar Pro 3',
      'org': 'Upstage',
      'score': 10.3,
      'src': 'aa',
      'rank': 148
    },
    {
      'model': 'Mistral Small 4',
      'org': 'Mistral',
      'score': 9.9,
      'src': 'aa',
      'rank': 149
    },
    {
      'model': 'Mistral Small 4 (Reasoning)',
      'org': 'Mistral',
      'score': 9.9,
      'src': 'aa',
      'rank': 150
    },
    {
      'model': 'Granite 4.2 8B',
      'org': 'IBM',
      'score': 9.7,
      'src': 'aa',
      'rank': 151
    },
    {
      'model': 'GPT-5 nano',
      'org': 'OpenAI',
      'score': 9.5,
      'src': 'aa',
      'rank': 152
    },
    {
      'model': 'Ling 3.0 Tiny',
      'org': 'InclusionAI',
      'score': 9.3,
      'src': 'aa',
      'rank': 153
    },
    {
      'model': 'MiniCPM5-2B',
      'org': 'OpenBMB',
      'score': 8.9,
      'src': 'benchlm',
      'rank': 154
    },
    {
      'model': 'MiniMax M1 80k',
      'org': 'MiniMax',
      'score': 8.9,
      'src': 'aa',
      'rank': 155
    },
    {
      'model': 'MiMo-V2-Flash',
      'org': 'Xiaomi',
      'score': 8.6,
      'src': 'aa',
      'rank': 156
    },
    {
      'model': 'Grok Code Fast 1',
      'org': 'xAI',
      'score': 8,
      'src': 'aa',
      'rank': 157
    },
    {
      'model': 'o3-mini',
      'org': 'OpenAI',
      'score': 7.9,
      'src': 'aa',
      'rank': 158
    },
    {
      'model': 'GLM-4.7-Flash',
      'org': 'Z.AI',
      'score': 7.6,
      'src': 'aa',
      'rank': 159
    },
    {
      'model': 'Sarvam 30B',
      'org': 'Sarvam',
      'score': 7.5,
      'src': 'aa',
      'rank': 160
    },
    {
      'model': 'Qwen3-Omni-30B-A3B-Thinking',
      'org': 'Alibaba',
      'score': 7.5,
      'src': 'aa',
      'rank': 161
    },
    {
      'model': 'Kimi K2',
      'org': 'Moonshot AI',
      'score': 7.4,
      'src': 'aa',
      'rank': 162
    },
    {
      'model': 'Nemotron Ultra 253B',
      'org': 'NVIDIA',
      'score': 7.4,
      'src': 'aa',
      'rank': 163
    },
    {
      'model': 'o1',
      'org': 'OpenAI',
      'score': 7,
      'src': 'aa',
      'rank': 164
    },
    {
      'model': 'GLM-4.5-Air',
      'org': 'Z.AI',
      'score': 7,
      'src': 'aa',
      'rank': 165
    },
    {
      'model': 'LFM2.5-8B-A1B',
      'org': 'LiquidAI',
      'score': 6.9,
      'src': 'aa',
      'rank': 166
    },
    {
      'model': 'Celeris-1',
      'org': 'Celeris',
      'score': 6.8,
      'src': 'aa',
      'rank': 167
    },
    {
      'model': 'DeepSeek V3.1',
      'org': 'DeepSeek',
      'score': 6.7,
      'src': 'aa',
      'rank': 168
    },
    {
      'model': 'LFM2.5-1.2B-Instruct',
      'org': 'LiquidAI',
      'score': 6.7,
      'src': 'aa',
      'rank': 169
    },
    {
      'model': 'Granite 4.2 3B',
      'org': 'IBM',
      'score': 6.6,
      'src': 'aa',
      'rank': 170
    },
    {
      'model': 'Granite-4.0-H-350M',
      'org': 'IBM',
      'score': 6.4,
      'src': 'aa',
      'rank': 171
    },
    {
      'model': 'Ling 2.6 Flash',
      'org': 'InclusionAI',
      'score': 6.3,
      'src': 'aa',
      'rank': 172
    },
    {
      'model': 'LFM2.5-2.6B',
      'org': 'LiquidAI',
      'score': 6.2,
      'src': 'aa',
      'rank': 173
    },
    {
      'model': 'LFM2.5-1.2B-Thinking',
      'org': 'LiquidAI',
      'score': 6.2,
      'src': 'aa',
      'rank': 174
    },
    {
      'model': 'Exaone 4.0 1.2B',
      'org': 'LG AI Research',
      'score': 5.7,
      'src': 'aa',
      'rank': 175
    },
    {
      'model': 'GLM-4.6',
      'org': 'Z.AI',
      'score': 5.5,
      'src': 'aa',
      'rank': 176
    },
    {
      'model': 'Granite-4.0-350M',
      'org': 'IBM',
      'score': 5.5,
      'src': 'aa',
      'rank': 177
    },
    {
      'model': 'Ministral 3 3B (Reasoning)',
      'org': 'Mistral',
      'score': 5.4,
      'src': 'aa',
      'rank': 178
    },
    {
      'model': 'Ministral 3 3B',
      'org': 'Mistral',
      'score': 5.4,
      'src': 'aa',
      'rank': 179
    },
    {
      'model': 'Grok 4.1 Fast',
      'org': 'xAI',
      'score': 5.1,
      'src': 'aa',
      'rank': 180
    },
    {
      'model': 'LFM2.5-VL-1.6B-Extract',
      'org': 'LiquidAI',
      'score': 5.1,
      'src': 'aa',
      'rank': 181
    },
    {
      'model': 'Exaone 4.0 32B',
      'org': 'LG AI Research',
      'score': 5,
      'src': 'aa',
      'rank': 182
    },
    {
      'model': 'GPT-4.1 mini',
      'org': 'OpenAI',
      'score': 5,
      'src': 'aa',
      'rank': 183
    },
    {
      'model': 'Granite-4.0-H-1B',
      'org': 'IBM',
      'score': 5,
      'src': 'aa',
      'rank': 184
    },
    {
      'model': 'Phi-4 Multimodal Instruct',
      'org': 'Microsoft',
      'score': 5,
      'src': 'aa',
      'rank': 185
    },
    {
      'model': 'Llama 4 Maverick',
      'org': 'Meta',
      'score': 4.9,
      'src': 'aa',
      'rank': 186
    },
    {
      'model': 'Nemotron 3 Nano Omni 30B A3B',
      'org': 'NVIDIA',
      'score': 4.8,
      'src': 'aa',
      'rank': 187
    },
    {
      'model': 'Gemma 4 E2B',
      'org': 'Google',
      'score': 4.8,
      'src': 'aa',
      'rank': 188
    },
    {
      'model': 'Granite-4.0-1B',
      'org': 'IBM',
      'score': 4.8,
      'src': 'aa',
      'rank': 189
    },
    {
      'model': 'Gemini 2.5 Flash',
      'org': 'Google',
      'score': 4.7,
      'src': 'aa',
      'rank': 190
    },
    {
      'model': 'Gemini 1.5 Pro',
      'org': 'Google',
      'score': 4.6,
      'src': 'aa',
      'rank': 191
    },
    {
      'model': 'Qwen3-Omni-30B-A3B-Instruct',
      'org': 'Alibaba',
      'score': 4.6,
      'src': 'aa',
      'rank': 192
    },
    {
      'model': 'DeepSeek R1 Distill Qwen 32B',
      'org': 'DeepSeek',
      'score': 4.6,
      'src': 'aa',
      'rank': 193
    },
    {
      'model': 'Ministral 3 14B (Reasoning)',
      'org': 'Mistral',
      'score': 4.6,
      'src': 'aa',
      'rank': 194
    },
    {
      'model': 'Ministral 3 14B',
      'org': 'Mistral',
      'score': 4.6,
      'src': 'aa',
      'rank': 195
    },
    {
      'model': 'Gemma 3 27B',
      'org': 'Google',
      'score': 4.4,
      'src': 'aa',
      'rank': 196
    },
    {
      'model': 'Claude 4 Sonnet',
      'org': 'Anthropic',
      'score': 4.3,
      'src': 'aa',
      'rank': 197
    },
    {
      'model': 'Ministral 3 8B (Reasoning)',
      'org': 'Mistral',
      'score': 4.3,
      'src': 'aa',
      'rank': 198
    },
    {
      'model': 'Ministral 3 8B',
      'org': 'Mistral',
      'score': 4.3,
      'src': 'aa',
      'rank': 199
    },
    {
      'model': 'Mistral Large 3',
      'org': 'Mistral',
      'score': 4.2,
      'src': 'aa',
      'rank': 200
    },
    {
      'model': 'GPT-4.1',
      'org': 'OpenAI',
      'score': 4.2,
      'src': 'aa',
      'rank': 201
    },
    {
      'model': 'GPT-4o mini',
      'org': 'OpenAI',
      'score': 4.2,
      'src': 'aa',
      'rank': 202
    },
    {
      'model': 'Gemini 1.0 Pro',
      'org': 'Google',
      'score': 4.2,
      'src': 'aa',
      'rank': 203
    },
    {
      'model': 'LFM2-24B-A2B',
      'org': 'LiquidAI',
      'score': 4.2,
      'src': 'aa',
      'rank': 204
    },
    {
      'model': 'Mistral Medium 3',
      'org': 'Mistral',
      'score': 4.1,
      'src': 'aa',
      'rank': 205
    },
    {
      'model': 'Claude 3 Haiku',
      'org': 'Anthropic',
      'score': 4.1,
      'src': 'aa',
      'rank': 206
    },
    {
      'model': 'Llama 3.1 405B',
      'org': 'Meta',
      'score': 4,
      'src': 'aa',
      'rank': 207
    },
    {
      'model': 'Gemma 4 E4B',
      'org': 'Google',
      'score': 3.8,
      'src': 'aa',
      'rank': 208
    },
    {
      'model': 'Llama 4 Scout',
      'org': 'Meta',
      'score': 3.8,
      'src': 'aa',
      'rank': 209
    },
    {
      'model': 'GPT-4.1 nano',
      'org': 'OpenAI',
      'score': 3.8,
      'src': 'aa',
      'rank': 210
    },
    {
      'model': 'Phi-4',
      'org': 'Microsoft',
      'score': 3.8,
      'src': 'aa',
      'rank': 211
    },
    {
      'model': 'Solar Pro 2',
      'org': 'Upstage',
      'score': 3.7,
      'src': 'aa',
      'rank': 212
    },
    {
      'model': 'Ultravox v0.6 Llama 3.3 70B',
      'org': 'Fixie AI',
      'score': 3.6,
      'src': 'aa',
      'rank': 213
    },
    {
      'model': 'Qwen2.5 Coder 32B Instruct',
      'org': 'Alibaba',
      'score': 3.5,
      'src': 'aa',
      'rank': 214
    },
    {
      'model': 'Mistral Large 2',
      'org': 'Mistral',
      'score': 3.3,
      'src': 'aa',
      'rank': 215
    },
    {
      'model': 'Nova Pro',
      'org': 'Amazon',
      'score': 3.2,
      'src': 'aa',
      'rank': 216
    },
    {
      'model': 'GPT-4 Turbo',
      'org': 'OpenAI',
      'score': 3.1,
      'src': 'aa',
      'rank': 217
    },
    {
      'model': 'DeepSeek V3',
      'org': 'DeepSeek',
      'score': 2.9,
      'src': 'aa',
      'rank': 218
    },
    {
      'model': 'Claude 3 Opus',
      'org': 'Anthropic',
      'score': 2.8,
      'src': 'aa',
      'rank': 219
    },
    {
      'model': 'GPT-4o',
      'org': 'OpenAI',
      'score': 2.4,
      'src': 'aa',
      'rank': 220
    }
  ]
};
