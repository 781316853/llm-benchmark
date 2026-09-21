// 数据源:GPQA Diamond(研究生级科学问答·知识推理,更新于 2026-09-21)
// 来源:https://llm-stats.com/benchmarks/gpqa(官方:https://epoch.ai/benchmarks/gpqa-diamond)
// 补充:https://benchlm.ai/benchmarks/gpqa(benchlm 镜像,分数与 Diamond 口径一致)· https://benchlm.ai/benchmarks/aagpqadiamond(AA 复测口径)
// 渠道优先级:基准官方实测榜 > 厂商官方发布(论文/发布页)> 第三方聚合与镜像;低层级仅补缺失模型与字段,不覆盖高层级分数
// 注:datalearner GPQA 为 448 题全量集(口径不同于 198 题 Diamond 子集),不并入;AA 复测为第三方自家 harness,src=aa 区分。
// 字段说明:model=模型名;score=Accuracy(%);org=厂商;size=参数量;context=上下文;cost=API 价格;src=数据来源渠道(llm-stats/benchlm/aa)
// 用途:「权威基准测试」页展示 + 总览矩阵参考列,仅参考,不计入综合分/命中数。
window.GPQA = {
  'source': 'GPQA Diamond',
  'url': 'https://llm-stats.com/benchmarks/gpqa',
  'officialUrl': 'https://epoch.ai/benchmarks/gpqa-diamond',
  'channelPolicy': '渠道优先级:基准官方实测榜 > 厂商官方发布(论文/发布页)> 第三方聚合与镜像;低层级仅补缺失模型与字段,不覆盖高层级分数',
  'updated': '2026-09-21',
  'refreshedAt': '2026-09-21 13:57',
  'stats': {
    'tasks': 198,
    'entries': 234
  },
  'desc': 'GPQA Diamond:研究生级科学多选问答(GPQA 中最难、质量最高的 198 题子集,覆盖生物/物理/化学),领域专家正确率~65%、随机基线 25%;Accuracy 越高越好。多源合并:llm-stats 与 benchlm 镜像为公开口径,AA 复测为第三方自家 harness(分数偏差 ±1 内,src=aa 区分)。',
  'models': [
    {
      'rank': 1,
      'model': 'GPT-6 Astra',
      'org': 'OpenAI',
      'score': 96.1,
      'size': '—',
      'context': '1.1M',
      'cost': '$ 10.00 / $ 50.00',
      'license': null,
      'src': 'aa'
    },
    {
      'model': 'Sakana Fugu-Ultra',
      'org': 'Sakana AI',
      'score': 95.5,
      'src': 'benchlm',
      'rank': 2
    },
    {
      'model': 'Sakana Fugu',
      'org': 'Sakana AI',
      'score': 95.5,
      'src': 'benchlm',
      'rank': 3
    },
    {
      'model': 'Gemini 3.8 Flash',
      'org': 'Google',
      'score': 95.3,
      'src': 'aa',
      'rank': 4
    },
    {
      'model': 'Grok 4.6',
      'org': 'xAI',
      'score': 94.9,
      'src': 'aa',
      'rank': 5
    },
    {
      'rank': 6,
      'model': 'Claude Mythos Preview',
      'org': 'Anthropic',
      'score': 94.6,
      'size': '—',
      'context': '—',
      'cost': '—',
      'license': null,
      'src': 'llm-stats'
    },
    {
      'rank': 7,
      'model': 'GPT-5.6 Sol',
      'org': 'OpenAI',
      'score': 94.6,
      'size': '—',
      'context': '1.1M',
      'cost': '$ 5.00 / $ 30.00',
      'license': null,
      'src': 'llm-stats'
    },
    {
      'model': 'Gemini 3.7 Flash',
      'org': 'Google',
      'score': 94.5,
      'src': 'aa',
      'rank': 8
    },
    {
      'rank': 9,
      'model': 'Gemini 3.1 Pro',
      'org': 'Google',
      'score': 94.3,
      'size': '—',
      'context': '1.0M',
      'cost': '$ 2.00 / $ 12.00',
      'license': null,
      'src': 'llm-stats'
    },
    {
      'rank': 10,
      'model': 'Claude Opus 4.7',
      'org': 'Anthropic',
      'score': 94.2,
      'size': '—',
      'context': '1.0M',
      'cost': '$ 5.00 / $ 25.00',
      'license': null,
      'src': 'llm-stats'
    },
    {
      'model': 'Claude Opus 4.7 (Adaptive)',
      'org': 'Anthropic',
      'score': 94.2,
      'src': 'benchlm',
      'rank': 11
    },
    {
      'model': 'Claude Fable 5.1',
      'org': 'Anthropic',
      'score': 93.7,
      'src': 'aa',
      'rank': 12
    },
    {
      'rank': 13,
      'model': 'Claude Opus 4.8',
      'org': 'Anthropic',
      'score': 93.6,
      'size': '—',
      'context': '1.0M',
      'cost': '$ 5.00 / $ 25.00',
      'license': null,
      'src': 'llm-stats'
    },
    {
      'rank': 14,
      'model': 'GPT-5.5',
      'org': 'OpenAI',
      'score': 93.6,
      'size': '—',
      'context': '1.1M',
      'cost': '$ 5.00 / $ 30.00',
      'license': null,
      'src': 'llm-stats'
    },
    {
      'rank': 15,
      'model': 'Kimi K3',
      'org': 'Moonshot AI',
      'score': 93.5,
      'size': '2.8T',
      'context': '1.0M',
      'cost': '$ 2.85 / $ 14.25',
      'license': null,
      'src': 'llm-stats'
    },
    {
      'model': 'Muse Spark 1.3',
      'org': 'Meta',
      'score': 93.5,
      'src': 'aa',
      'rank': 16
    },
    {
      'rank': 17,
      'model': 'GPT-5.2 Pro',
      'org': 'OpenAI',
      'score': 93.2,
      'size': '—',
      'context': '—',
      'cost': '—',
      'license': null,
      'src': 'llm-stats'
    },
    {
      'model': 'Claude Opus 5',
      'org': 'Anthropic',
      'score': 93.2,
      'src': 'aa',
      'rank': 18
    },
    {
      'rank': 19,
      'model': 'Grok 4.5',
      'org': 'xAI',
      'score': 93.1,
      'size': '—',
      'context': '500K',
      'cost': '$ 2.00 / $ 6.00',
      'license': null,
      'src': 'aa'
    },
    {
      'rank': 20,
      'model': 'GPT-5.6 Terra',
      'org': 'OpenAI',
      'score': 92.9,
      'size': '—',
      'context': '1.1M',
      'cost': '$ 2.00 / $ 12.00',
      'license': null,
      'src': 'llm-stats'
    },
    {
      'model': 'MiniMax M3',
      'org': 'MiniMax',
      'score': 92.9,
      'src': 'aa',
      'rank': 21
    },
    {
      'rank': 22,
      'model': 'GPT-5.4',
      'org': 'OpenAI',
      'score': 92.8,
      'size': '—',
      'context': '1.0M',
      'cost': '$ 2.50 / $ 15.00',
      'license': null,
      'src': 'llm-stats'
    },
    {
      'model': 'Ornith-1.5-397B',
      'org': 'Ornith AI',
      'score': 92.8,
      'src': 'benchlm',
      'rank': 23
    },
    {
      'model': 'DeepSeek V4 Pro 0813',
      'org': 'DeepSeek',
      'score': 92.8,
      'src': 'aa',
      'rank': 24
    },
    {
      'model': 'Gemini 3.6 Flash',
      'org': 'Google',
      'score': 92.8,
      'src': 'aa',
      'rank': 25
    },
    {
      'model': 'Qwen3.8 Max Preview',
      'org': 'Alibaba',
      'score': 92.8,
      'src': 'aa',
      'rank': 26
    },
    {
      'rank': 27,
      'model': 'Qwen3.8 Max',
      'org': 'Alibaba Cloud / Qwen Team',
      'score': 92.6,
      'size': '2.4T',
      'context': '1.0M',
      'cost': '$ 1.65 / $ 4.95',
      'license': null,
      'src': 'llm-stats'
    },
    {
      'model': 'Claude Fable 5',
      'org': 'Anthropic',
      'score': 92.6,
      'src': 'aa',
      'rank': 28
    },
    {
      'rank': 29,
      'model': 'GPT-5.2',
      'org': 'OpenAI',
      'score': 92.4,
      'size': '—',
      'context': '400K',
      'cost': '$ 1.75 / $ 14.00',
      'license': null,
      'src': 'llm-stats'
    },
    {
      'rank': 30,
      'model': 'Qwen3.7 Max',
      'org': 'Alibaba Cloud / Qwen Team',
      'score': 92.4,
      'size': '—',
      'context': '1.0M',
      'cost': '$ 1.25 / $ 3.75',
      'license': null,
      'src': 'llm-stats'
    },
    {
      'rank': 31,
      'model': 'GPT-5.6 Luna',
      'org': 'OpenAI',
      'score': 92.3,
      'size': '—',
      'context': '1.1M',
      'cost': '$ 0.20 / $ 1.20',
      'license': null,
      'src': 'llm-stats'
    },
    {
      'rank': 32,
      'model': 'Hy4 preview',
      'org': 'Tencent',
      'score': 92.3,
      'size': '770B',
      'context': '—',
      'cost': '—',
      'license': null,
      'src': 'llm-stats'
    },
    {
      'rank': 33,
      'model': 'Qwen3.8-Flash-Next',
      'org': 'Alibaba Cloud / Qwen Team',
      'score': 92.3,
      'size': '125B',
      'context': '—',
      'cost': '—',
      'license': null,
      'src': 'aa'
    },
    {
      'model': 'Gemini 3.5 Flash',
      'org': 'Google',
      'score': 92.2,
      'src': 'benchlm',
      'rank': 34
    },
    {
      'rank': 35,
      'model': 'Gemini 3 Pro',
      'org': 'Google',
      'score': 91.9,
      'size': '—',
      'context': '—',
      'cost': '—',
      'license': null,
      'src': 'llm-stats'
    },
    {
      'rank': 36,
      'model': 'Qwen3.8 Flash',
      'org': 'Alibaba Cloud / Qwen Team',
      'score': 91.7,
      'size': '125B',
      'context': '1.0M',
      'cost': '$ 0.15 / $ 0.47',
      'license': null,
      'src': 'llm-stats'
    },
    {
      'model': 'GLM-5.3',
      'org': 'Z.AI',
      'score': 91.7,
      'src': 'aa',
      'rank': 37
    },
    {
      'model': 'GPT-5.3 Codex',
      'org': 'OpenAI',
      'score': 91.5,
      'src': 'aa',
      'rank': 38
    },
    {
      'model': 'GPT-5.3-Codex-Spark',
      'org': 'OpenAI',
      'score': 91.5,
      'src': 'aa',
      'rank': 39
    },
    {
      'rank': 40,
      'model': 'Claude Opus 4.6',
      'org': 'Anthropic',
      'score': 91.3,
      'size': '—',
      'context': '1.0M',
      'cost': '$ 5.00 / $ 25.00',
      'license': null,
      'src': 'llm-stats'
    },
    {
      'rank': 41,
      'model': 'GLM-5.2',
      'org': 'Zhipu AI',
      'score': 91.2,
      'size': '753B',
      'context': '1.0M',
      'cost': '$ 0.75 / $ 2.40',
      'license': null,
      'src': 'llm-stats'
    },
    {
      'model': 'GLM-5.3-Flash',
      'org': 'Z.AI',
      'score': 91.2,
      'src': 'aa',
      'rank': 42
    },
    {
      'rank': 43,
      'model': 'Kimi K2.6',
      'org': 'Moonshot AI',
      'score': 91.1,
      'size': '1.0T',
      'context': '262K',
      'cost': '$ 0.75 / $ 3.50',
      'license': null,
      'src': 'aa'
    },
    {
      'model': 'Claude Sonnet 5',
      'org': 'Anthropic',
      'score': 91.1,
      'src': 'aa',
      'rank': 44
    },
    {
      'model': 'Qwen3.8-Omni-Flash',
      'org': 'Alibaba',
      'score': 91,
      'src': 'benchlm',
      'rank': 45
    },
    {
      'rank': 46,
      'model': 'DeepSeek-V4.1-Flash',
      'org': 'DeepSeek',
      'score': 90.9,
      'size': '763B',
      'context': '1.0M',
      'cost': '$ 0.22 / $ 0.66',
      'license': null,
      'src': 'llm-stats'
    },
    {
      'model': 'DeepSeek V4 Flash 0731',
      'org': 'DeepSeek',
      'score': 90.8,
      'src': 'aa',
      'rank': 47
    },
    {
      'rank': 48,
      'model': 'Qwen3.8-27B',
      'org': 'Alibaba Cloud / Qwen Team',
      'score': 90.5,
      'size': '28B',
      'context': '262K',
      'cost': '$ 0.40 / $ 3.00',
      'license': null,
      'src': 'aa'
    },
    {
      'rank': 49,
      'model': 'Qwen3.6 Plus',
      'org': 'Alibaba Cloud / Qwen Team',
      'score': 90.4,
      'size': '—',
      'context': '1.0M',
      'cost': '$ 0.50 / $ 3.00',
      'license': null,
      'src': 'llm-stats'
    },
    {
      'rank': 50,
      'model': 'Hy3',
      'org': 'Tencent',
      'score': 90.4,
      'size': '295B',
      'context': '262K',
      'cost': '$ 0.14 / $ 0.58',
      'license': null,
      'src': 'llm-stats'
    },
    {
      'rank': 51,
      'model': 'Gemini 3 Flash',
      'org': 'Google',
      'score': 90.4,
      'size': '—',
      'context': '1.0M',
      'cost': '$ 0.50 / $ 3.00',
      'license': null,
      'src': 'llm-stats'
    },
    {
      'model': 'Muse Spark 1.2',
      'org': 'Meta',
      'score': 90.4,
      'src': 'aa',
      'rank': 52
    },
    {
      'rank': 53,
      'model': 'Qwen3.7-Plus',
      'org': 'Alibaba Cloud / Qwen Team',
      'score': 90.3,
      'size': '—',
      'context': '—',
      'cost': '—',
      'license': null,
      'src': 'llm-stats'
    },
    {
      'rank': 54,
      'model': 'DeepSeek-V4-Pro-Max',
      'org': 'DeepSeek',
      'score': 90.1,
      'size': '1.6T',
      'context': '1.0M',
      'cost': '$ 1.30 / $ 2.60',
      'license': null,
      'src': 'llm-stats'
    },
    {
      'model': 'Grok 4.3',
      'org': 'xAI',
      'score': 90.1,
      'src': 'benchlm',
      'rank': 55
    },
    {
      'rank': 56,
      'model': 'Claude Sonnet 4.6',
      'org': 'Anthropic',
      'score': 89.9,
      'size': '—',
      'context': '1.0M',
      'cost': '$ 3.00 / $ 15.00',
      'license': null,
      'src': 'llm-stats'
    },
    {
      'model': 'Interfaze Beta',
      'org': 'Interfaze',
      'score': 89.9,
      'src': 'benchlm',
      'rank': 57
    },
    {
      'model': 'GPT-5.2-Codex',
      'org': 'OpenAI',
      'score': 89.9,
      'src': 'aa',
      'rank': 58
    },
    {
      'model': 'Muse Spark 1.1',
      'org': 'Meta',
      'score': 89.8,
      'src': 'aa',
      'rank': 59
    },
    {
      'model': 'Hy3 Preview',
      'org': 'Tencent',
      'score': 89.7,
      'src': 'aa',
      'rank': 60
    },
    {
      'model': 'Kimi K2.7 Code',
      'org': 'Moonshot AI',
      'score': 89.6,
      'src': 'aa',
      'rank': 61
    },
    {
      'model': 'Claude Opus 4.6 (Adaptive)',
      'org': 'Anthropic',
      'score': 89.6,
      'src': 'aa',
      'rank': 62
    },
    {
      'rank': 63,
      'model': 'Inkling-Small',
      'org': 'Thinking Machines Lab',
      'score': 89.5,
      'size': '276B',
      'context': '524K',
      'cost': '$ 0.30 / $ 1.20',
      'license': null,
      'src': 'llm-stats'
    },
    {
      'rank': 64,
      'model': 'Muse Spark',
      'org': 'Meta',
      'score': 89.5,
      'size': '—',
      'context': '—',
      'cost': '—',
      'license': null,
      'src': 'llm-stats'
    },
    {
      'model': 'Ornith-1.5-35B-A3B',
      'org': 'Ornith AI',
      'score': 89.2,
      'src': 'benchlm',
      'rank': 65
    },
    {
      'rank': 66,
      'model': 'Solar Pro 4',
      'org': 'Upstage',
      'score': 89.1,
      'size': '—',
      'context': '524K',
      'cost': '$ 0.30 / $ 1.20',
      'license': null,
      'src': 'aa'
    },
    {
      'rank': 67,
      'model': 'Seed 2.0 Pro',
      'org': 'ByteDance',
      'score': 88.9,
      'size': '—',
      'context': '256K',
      'cost': '$ 0.50 / $ 3.00',
      'license': null,
      'src': 'llm-stats'
    },
    {
      'model': 'Qwen 3.6 Max (preview)',
      'org': 'Alibaba',
      'score': 88.8,
      'src': 'aa',
      'rank': 68
    },
    {
      'rank': 69,
      'model': 'Qwen3.5-397B-A17B',
      'org': 'Alibaba Cloud / Qwen Team',
      'score': 88.4,
      'size': '397B',
      'context': '262K',
      'cost': '$ 0.45 / $ 3.00',
      'license': null,
      'src': 'llm-stats'
    },
    {
      'rank': 70,
      'model': 'Grok-4 Heavy',
      'org': 'xAI',
      'score': 88.4,
      'size': '—',
      'context': '—',
      'cost': '—',
      'license': null,
      'src': 'llm-stats'
    },
    {
      'model': 'Qwen3.5 397B',
      'org': 'Alibaba',
      'score': 88.4,
      'src': 'benchlm',
      'rank': 71
    },
    {
      'rank': 72,
      'model': 'DeepSeek-V4-Flash-Max',
      'org': 'DeepSeek',
      'score': 88.1,
      'size': '284B',
      'context': '1.0M',
      'cost': '$ 0.09 / $ 0.18',
      'license': null,
      'src': 'llm-stats'
    },
    {
      'rank': 73,
      'model': 'GPT-5.1 High',
      'org': 'OpenAI',
      'score': 88.1,
      'size': '—',
      'context': '—',
      'cost': '—',
      'license': null,
      'src': 'llm-stats'
    },
    {
      'rank': 74,
      'model': 'GPT-5.1 Instant',
      'org': 'OpenAI',
      'score': 88.1,
      'size': '—',
      'context': '400K',
      'cost': '$ 1.25 / $ 10.00',
      'license': null,
      'src': 'llm-stats'
    },
    {
      'rank': 75,
      'model': 'GPT-5 Medium',
      'org': 'OpenAI',
      'score': 88.1,
      'size': '—',
      'context': '—',
      'cost': '—',
      'license': null,
      'src': 'llm-stats'
    },
    {
      'rank': 76,
      'model': 'GPT-5.1 Thinking',
      'org': 'OpenAI',
      'score': 88.1,
      'size': '—',
      'context': '—',
      'cost': '—',
      'license': null,
      'src': 'llm-stats'
    },
    {
      'rank': 77,
      'model': 'GPT-5.1',
      'org': 'OpenAI',
      'score': 88.1,
      'size': '—',
      'context': '400K',
      'cost': '$ 1.25 / $ 10.00',
      'license': null,
      'src': 'llm-stats'
    },
    {
      'rank': 78,
      'model': 'GPT-5.4 mini',
      'org': 'OpenAI',
      'score': 88,
      'size': '—',
      'context': '400K',
      'cost': '$ 0.75 / $ 4.50',
      'license': null,
      'src': 'llm-stats'
    },
    {
      'rank': 79,
      'model': 'Kimi K2.5',
      'org': 'Moonshot AI',
      'score': 87.9,
      'size': '1.0T',
      'context': '—',
      'cost': '—',
      'license': null,
      'src': 'aa'
    },
    {
      'model': 'Inkling',
      'org': 'Thinking Machines Lab',
      'score': 87.9,
      'src': 'benchlm',
      'rank': 80
    },
    {
      'model': 'Kimi K2.5 (Reasoning)',
      'org': 'Moonshot AI',
      'score': 87.9,
      'src': 'aa',
      'rank': 81
    },
    {
      'rank': 82,
      'model': 'Qwen3.6-27B',
      'org': 'Alibaba Cloud / Qwen Team',
      'score': 87.8,
      'size': '28B',
      'context': '262K',
      'cost': '$ 0.32 / $ 3.20',
      'license': null,
      'src': 'llm-stats'
    },
    {
      'rank': 83,
      'model': 'Grok 4',
      'org': 'xAI',
      'score': 87.7,
      'size': '—',
      'context': '—',
      'cost': '—',
      'license': null,
      'src': 'aa'
    },
    {
      'rank': 84,
      'model': 'Qwen3 Max Thinking',
      'org': 'Alibaba Cloud / Qwen Team',
      'score': 87.4,
      'size': '1.0T',
      'context': '256K',
      'cost': '$ 1.20 / $ 6.00',
      'license': null,
      'src': 'llm-stats'
    },
    {
      'rank': 85,
      'model': 'DeepSeek-V4-Flash-0423',
      'org': 'DeepSeek',
      'score': 87.4,
      'size': '284B',
      'context': '1.0M',
      'cost': '$ 0.09 / $ 0.18',
      'license': null,
      'src': 'llm-stats'
    },
    {
      'model': 'MiniMax M2.7',
      'org': 'MiniMax',
      'score': 87.4,
      'src': 'aa',
      'rank': 86
    },
    {
      'rank': 87,
      'model': 'GPT-5 High',
      'org': 'OpenAI',
      'score': 87.3,
      'size': '—',
      'context': '—',
      'cost': '—',
      'license': null,
      'src': 'llm-stats'
    },
    {
      'model': 'Claude Opus 4.5',
      'org': 'Anthropic',
      'score': 87,
      'src': 'benchlm',
      'rank': 88
    },
    {
      'model': 'Nemotron 3 Ultra',
      'org': 'NVIDIA',
      'score': 87,
      'src': 'benchlm',
      'rank': 89
    },
    {
      'model': 'MiMo-V2-Pro',
      'org': 'Xiaomi',
      'score': 87,
      'src': 'aa',
      'rank': 90
    },
    {
      'model': 'GLM-5.1',
      'org': 'Z.AI',
      'score': 86.8,
      'src': 'aa',
      'rank': 91
    },
    {
      'model': 'Qwen3.5-122B-A10B',
      'org': 'Alibaba',
      'score': 86.6,
      'src': 'benchlm',
      'rank': 92
    },
    {
      'model': 'Claude Opus 4.5 Thinking',
      'org': 'Anthropic',
      'score': 86.6,
      'src': 'aa',
      'rank': 93
    },
    {
      'model': 'MiMo-V2.5-Pro',
      'org': 'Xiaomi',
      'score': 86.6,
      'src': 'aa',
      'rank': 94
    },
    {
      'model': 'Ornith-1.5-9B',
      'org': 'Ornith AI',
      'score': 86.4,
      'src': 'benchlm',
      'rank': 95
    },
    {
      'model': 'Apodex 1.1',
      'org': 'Apodex',
      'score': 86.4,
      'src': 'aa',
      'rank': 96
    },
    {
      'model': 'Apodex 1.1 Mini',
      'org': 'Apodex',
      'score': 86.4,
      'src': 'aa',
      'rank': 97
    },
    {
      'model': 'Ling 3.0 Flash VL',
      'org': 'InclusionAI',
      'score': 86.2,
      'src': 'aa',
      'rank': 98
    },
    {
      'model': 'Qwen3.5 397B (Reasoning)',
      'org': 'Alibaba',
      'score': 86.1,
      'src': 'aa',
      'rank': 99
    },
    {
      'model': 'GLM-5',
      'org': 'Z.AI',
      'score': 86,
      'src': 'benchlm',
      'rank': 100
    },
    {
      'model': 'Qwen3.6-35B-A3B',
      'org': 'Alibaba',
      'score': 86,
      'src': 'benchlm',
      'rank': 101
    },
    {
      'model': 'GPT-5.1-Codex',
      'org': 'OpenAI',
      'score': 86,
      'src': 'aa',
      'rank': 102
    },
    {
      'model': 'GPT-5.1-Codex-Max',
      'org': 'OpenAI',
      'score': 86,
      'src': 'aa',
      'rank': 103
    },
    {
      'model': 'GLM-4.7',
      'org': 'Z.AI',
      'score': 85.9,
      'src': 'aa',
      'rank': 104
    },
    {
      'model': 'Ternary Bonsai 2 27B',
      'org': 'Prism ML',
      'score': 85.8,
      'src': 'benchlm',
      'rank': 105
    },
    {
      'model': 'Qwen3.5-27B',
      'org': 'Alibaba',
      'score': 85.8,
      'src': 'aa',
      'rank': 106
    },
    {
      'model': 'Gemma 4 31B',
      'org': 'Google',
      'score': 85.7,
      'src': 'aa',
      'rank': 107
    },
    {
      'model': 'A.X K2',
      'org': 'SK Telecom',
      'score': 85.7,
      'src': 'aa',
      'rank': 108
    },
    {
      'model': 'Ling 3.0 Flash',
      'org': 'InclusionAI',
      'score': 85.5,
      'src': 'aa',
      'rank': 109
    },
    {
      'model': 'Ling 3.0 Flash FP8',
      'org': 'InclusionAI',
      'score': 85.5,
      'src': 'aa',
      'rank': 110
    },
    {
      'model': 'Grok 4.1 Fast (Reasoning)',
      'org': 'xAI',
      'score': 85.3,
      'src': 'aa',
      'rank': 111
    },
    {
      'model': 'MiniMax M2.5',
      'org': 'MiniMax',
      'score': 84.8,
      'src': 'aa',
      'rank': 112
    },
    {
      'model': 'GLM-5-Turbo',
      'org': 'Z.AI',
      'score': 84.7,
      'src': 'aa',
      'rank': 113
    },
    {
      'model': 'Grok 4 Fast (Reasoning)',
      'org': 'xAI',
      'score': 84.7,
      'src': 'aa',
      'rank': 114
    },
    {
      'model': 'Qwen3.5-35B-A3B',
      'org': 'Alibaba',
      'score': 84.5,
      'src': 'aa',
      'rank': 115
    },
    {
      'model': 'o3-pro',
      'org': 'OpenAI',
      'score': 84.5,
      'src': 'aa',
      'rank': 116
    },
    {
      'model': 'Gemini 2.5 Pro',
      'org': 'Google',
      'score': 84.4,
      'src': 'aa',
      'rank': 117
    },
    {
      'model': 'MAI-Thinking-1',
      'org': 'Microsoft',
      'score': 84.2,
      'src': 'benchlm',
      'rank': 118
    },
    {
      'model': 'Gemini 3.5 Flash-Lite',
      'org': 'Google',
      'score': 83.8,
      'src': 'aa',
      'rank': 119
    },
    {
      'model': 'MiMo-V2-Flash',
      'org': 'Xiaomi',
      'score': 83.7,
      'src': 'benchlm',
      'rank': 120
    },
    {
      'model': 'Muse Glimmer 30B',
      'org': 'Meta',
      'score': 83.5,
      'src': 'aa',
      'rank': 121
    },
    {
      'model': 'Claude Sonnet 4.5',
      'org': 'Anthropic',
      'score': 83.4,
      'src': 'benchlm',
      'rank': 122
    },
    {
      'model': 'K-EXAONE 2.0',
      'org': 'LG AI Research',
      'score': 82.9,
      'src': 'aa',
      'rank': 123
    },
    {
      'model': 'GPT-5.4 nano',
      'org': 'OpenAI',
      'score': 82.8,
      'src': 'benchlm',
      'rank': 124
    },
    {
      'model': 'MiMo-V2-Omni',
      'org': 'Xiaomi',
      'score': 82.8,
      'src': 'aa',
      'rank': 125
    },
    {
      'model': 'GPT-5 mini',
      'org': 'OpenAI',
      'score': 82.8,
      'src': 'aa',
      'rank': 126
    },
    {
      'model': 'o3',
      'org': 'OpenAI',
      'score': 82.7,
      'src': 'aa',
      'rank': 127
    },
    {
      'model': 'Step 3.5 Flash',
      'org': 'StepFun',
      'score': 82.6,
      'src': 'aa',
      'rank': 128
    },
    {
      'model': 'DeepSeek-R1',
      'org': 'DeepSeek',
      'score': 81.3,
      'src': 'aa',
      'rank': 129
    },
    {
      'model': 'Claude 4.1 Opus Thinking',
      'org': 'Anthropic',
      'score': 80.9,
      'src': 'aa',
      'rank': 130
    },
    {
      'model': 'GLM-5V-Turbo',
      'org': 'Z.AI',
      'score': 80.9,
      'src': 'aa',
      'rank': 131
    },
    {
      'model': 'Step 3.7 Flash',
      'org': 'StepFun',
      'score': 80.9,
      'src': 'aa',
      'rank': 132
    },
    {
      'model': 'Nemotron 3 Super 100B',
      'org': 'NVIDIA',
      'score': 80,
      'src': 'aa',
      'rank': 133
    },
    {
      'model': 'Nemotron 3 Super 120B A12B',
      'org': 'NVIDIA',
      'score': 80,
      'src': 'aa',
      'rank': 134
    },
    {
      'model': 'Gemma 4 26B A4B',
      'org': 'Google',
      'score': 79.2,
      'src': 'aa',
      'rank': 135
    },
    {
      'model': 'o1-pro',
      'org': 'OpenAI',
      'score': 79,
      'src': 'benchlm',
      'rank': 136
    },
    {
      'model': 'Gemma 4 12B',
      'org': 'Google',
      'score': 78.8,
      'src': 'benchlm',
      'rank': 137
    },
    {
      'model': 'K-Exaone',
      'org': 'LG AI Research',
      'score': 78.3,
      'src': 'aa',
      'rank': 138
    },
    {
      'model': 'GPT-OSS 120B',
      'org': 'OpenAI',
      'score': 78.2,
      'src': 'aa',
      'rank': 139
    },
    {
      'model': 'DeepSeek V3.1 (Reasoning)',
      'org': 'DeepSeek',
      'score': 77.9,
      'src': 'aa',
      'rank': 140
    },
    {
      'model': 'Qwen3 235B 2507',
      'org': 'Alibaba',
      'score': 77.5,
      'src': 'benchlm',
      'rank': 141
    },
    {
      'model': 'o3-mini',
      'org': 'OpenAI',
      'score': 77.2,
      'src': 'benchlm',
      'rank': 142
    },
    {
      'model': 'Mercury 2',
      'org': 'Inception',
      'score': 77,
      'src': 'aa',
      'rank': 143
    },
    {
      'model': 'Mistral Small 4',
      'org': 'Mistral',
      'score': 76.9,
      'src': 'aa',
      'rank': 144
    },
    {
      'model': 'Mistral Small 4 (Reasoning)',
      'org': 'Mistral',
      'score': 76.9,
      'src': 'aa',
      'rank': 145
    },
    {
      'model': 'Kimi K2',
      'org': 'Moonshot AI',
      'score': 76.6,
      'src': 'aa',
      'rank': 146
    },
    {
      'model': 'o1-preview',
      'org': 'OpenAI',
      'score': 76.5,
      'src': 'aa',
      'rank': 147
    },
    {
      'model': 'Qwen3 Max',
      'org': 'Alibaba',
      'score': 76.4,
      'src': 'aa',
      'rank': 148
    },
    {
      'model': 'Command A+',
      'org': 'Cohere',
      'score': 76.1,
      'src': 'aa',
      'rank': 149
    },
    {
      'model': 'o1',
      'org': 'OpenAI',
      'score': 75.7,
      'src': 'benchlm',
      'rank': 150
    },
    {
      'model': 'Nemotron 3 Nano 30B',
      'org': 'NVIDIA',
      'score': 75.7,
      'src': 'aa',
      'rank': 151
    },
    {
      'model': 'North Mini Code',
      'org': 'Cohere',
      'score': 75.7,
      'src': 'aa',
      'rank': 152
    },
    {
      'model': 'Nemotron 3.5 Lightning 30B A3B NVFP4',
      'org': 'NVIDIA',
      'score': 75.6,
      'src': 'benchlm',
      'rank': 153
    },
    {
      'model': 'Trinity-Large-Thinking',
      'org': 'Arcee AI',
      'score': 75.2,
      'src': 'aa',
      'rank': 154
    },
    {
      'model': 'Trinity-Large-Preview',
      'org': 'Arcee AI',
      'score': 75.2,
      'src': 'aa',
      'rank': 155
    },
    {
      'model': 'DeepSeek V3.2',
      'org': 'DeepSeek',
      'score': 75.1,
      'src': 'aa',
      'rank': 156
    },
    {
      'model': 'Mistral Medium 3.5 128B',
      'org': 'Mistral',
      'score': 74.8,
      'src': 'aa',
      'rank': 157
    },
    {
      'model': 'Sarvam 105B',
      'org': 'Sarvam',
      'score': 73.8,
      'src': 'aa',
      'rank': 158
    },
    {
      'model': 'DeepSeek V3.1',
      'org': 'DeepSeek',
      'score': 73.5,
      'src': 'aa',
      'rank': 159
    },
    {
      'model': 'Ling 3.0 Tiny',
      'org': 'InclusionAI',
      'score': 73.4,
      'src': 'aa',
      'rank': 160
    },
    {
      'model': 'GLM-4.5-Air',
      'org': 'Z.AI',
      'score': 73.3,
      'src': 'aa',
      'rank': 161
    },
    {
      'model': 'Quasar 438B',
      'org': 'Multiverse Computing',
      'score': 73.2,
      'src': 'aa',
      'rank': 162
    },
    {
      'model': 'Nemotron Ultra 253B',
      'org': 'NVIDIA',
      'score': 72.8,
      'src': 'aa',
      'rank': 163
    },
    {
      'model': 'Grok Code Fast 1',
      'org': 'xAI',
      'score': 72.7,
      'src': 'aa',
      'rank': 164
    },
    {
      'model': 'Qwen3-Omni-30B-A3B-Thinking',
      'org': 'Alibaba',
      'score': 72.6,
      'src': 'aa',
      'rank': 165
    },
    {
      'model': 'Solar Pro 3',
      'org': 'Upstage',
      'score': 72.4,
      'src': 'aa',
      'rank': 166
    },
    {
      'model': 'Nemotron 3 Nano Omni 30B A3B',
      'org': 'NVIDIA',
      'score': 72.2,
      'src': 'benchlm',
      'rank': 167
    },
    {
      'model': 'GPT-5 nano',
      'org': 'OpenAI',
      'score': 71.2,
      'src': 'benchlm',
      'rank': 168
    },
    {
      'model': 'ZAYA1-8B',
      'org': 'Zyphra',
      'score': 71,
      'src': 'benchlm',
      'rank': 169
    },
    {
      'model': 'MiniCPM5-2B',
      'org': 'OpenBMB',
      'score': 70.2,
      'src': 'aa',
      'rank': 170
    },
    {
      'model': 'MiniMax M1 80k',
      'org': 'MiniMax',
      'score': 69.7,
      'src': 'aa',
      'rank': 171
    },
    {
      'model': 'GPT-OSS 20B',
      'org': 'OpenAI',
      'score': 68.8,
      'src': 'aa',
      'rank': 172
    },
    {
      'model': 'Claude 4 Sonnet',
      'org': 'Anthropic',
      'score': 68.3,
      'src': 'aa',
      'rank': 173
    },
    {
      'model': 'Gemini 2.5 Flash',
      'org': 'Google',
      'score': 68.3,
      'src': 'aa',
      'rank': 174
    },
    {
      'model': 'Mistral Large 3',
      'org': 'Mistral',
      'score': 68,
      'src': 'aa',
      'rank': 175
    },
    {
      'model': 'Llama 4 Maverick',
      'org': 'Meta',
      'score': 67.1,
      'src': 'aa',
      'rank': 176
    },
    {
      'model': 'GPT-4.1',
      'org': 'OpenAI',
      'score': 66.6,
      'src': 'aa',
      'rank': 177
    },
    {
      'model': 'Granite 4.2 30B',
      'org': 'IBM',
      'score': 66.4,
      'src': 'benchlm',
      'rank': 178
    },
    {
      'model': 'GPT-4.1 mini',
      'org': 'OpenAI',
      'score': 66.4,
      'src': 'aa',
      'rank': 179
    },
    {
      'model': 'Granite 4.2 8B',
      'org': 'IBM',
      'score': 64.1,
      'src': 'benchlm',
      'rank': 180
    },
    {
      'model': 'Grok 4.1 Fast',
      'org': 'xAI',
      'score': 63.7,
      'src': 'aa',
      'rank': 181
    },
    {
      'model': 'Sarvam 30B',
      'org': 'Sarvam',
      'score': 63.3,
      'src': 'aa',
      'rank': 182
    },
    {
      'model': 'GLM-4.6',
      'org': 'Z.AI',
      'score': 63.2,
      'src': 'aa',
      'rank': 183
    },
    {
      'model': 'Celeris-1',
      'org': 'Celeris',
      'score': 63.1,
      'src': 'aa',
      'rank': 184
    },
    {
      'model': 'Exaone 4.0 32B',
      'org': 'LG AI Research',
      'score': 62.8,
      'src': 'aa',
      'rank': 185
    },
    {
      'model': 'Qwen3-Omni-30B-A3B-Instruct',
      'org': 'Alibaba',
      'score': 62,
      'src': 'aa',
      'rank': 186
    },
    {
      'model': 'DeepSeek R1 Distill Qwen 32B',
      'org': 'DeepSeek',
      'score': 61.5,
      'src': 'aa',
      'rank': 187
    },
    {
      'model': 'Claude 3.5 Sonnet',
      'org': 'Anthropic',
      'score': 59.4,
      'src': 'benchlm',
      'rank': 188
    },
    {
      'model': 'Ling 2.6 Flash',
      'org': 'InclusionAI',
      'score': 59.3,
      'src': 'aa',
      'rank': 189
    },
    {
      'model': 'DeepSeek V3',
      'org': 'DeepSeek',
      'score': 59.1,
      'src': 'benchlm',
      'rank': 190
    },
    {
      'model': 'Gemini 1.5 Pro',
      'org': 'Google',
      'score': 58.9,
      'src': 'aa',
      'rank': 191
    },
    {
      'model': 'Llama 4 Scout',
      'org': 'Meta',
      'score': 58.7,
      'src': 'aa',
      'rank': 192
    },
    {
      'model': 'Gemma 4 E4B',
      'org': 'Google',
      'score': 58.6,
      'src': 'benchlm',
      'rank': 193
    },
    {
      'model': 'GLM-4.7-Flash',
      'org': 'Z.AI',
      'score': 58.1,
      'src': 'aa',
      'rank': 194
    },
    {
      'model': 'Mistral Medium 3',
      'org': 'Mistral',
      'score': 57.8,
      'src': 'aa',
      'rank': 195
    },
    {
      'model': 'Mellum2-12B-A2.5B-Thinking',
      'org': 'JetBrains',
      'score': 57.6,
      'src': 'benchlm',
      'rank': 196
    },
    {
      'model': 'Phi-4',
      'org': 'Microsoft',
      'score': 57.5,
      'src': 'aa',
      'rank': 197
    },
    {
      'model': 'ZAYA1-74B-Preview',
      'org': 'Zyphra',
      'score': 57.3,
      'src': 'benchlm',
      'rank': 198
    },
    {
      'model': 'Ministral 3 14B (Reasoning)',
      'org': 'Mistral',
      'score': 57.2,
      'src': 'aa',
      'rank': 199
    },
    {
      'model': 'Ministral 3 14B',
      'org': 'Mistral',
      'score': 57.2,
      'src': 'aa',
      'rank': 200
    },
    {
      'model': 'Solar Pro 2',
      'org': 'Upstage',
      'score': 56.1,
      'src': 'aa',
      'rank': 201
    },
    {
      'model': 'Granite 4.2 3B',
      'org': 'IBM',
      'score': 55.9,
      'src': 'aa',
      'rank': 202
    },
    {
      'model': 'LFM2.5-2.6B',
      'org': 'LiquidAI',
      'score': 55.8,
      'src': 'aa',
      'rank': 203
    },
    {
      'model': 'GPT-4o',
      'org': 'OpenAI',
      'score': 54.3,
      'src': 'aa',
      'rank': 204
    },
    {
      'model': 'Llama 3.1 405B',
      'org': 'Meta',
      'score': 51.5,
      'src': 'aa',
      'rank': 205
    },
    {
      'model': 'LFM2.5-8B-A1B',
      'org': 'LiquidAI',
      'score': 51.3,
      'src': 'aa',
      'rank': 206
    },
    {
      'model': 'GPT-4.1 nano',
      'org': 'OpenAI',
      'score': 51.2,
      'src': 'aa',
      'rank': 207
    },
    {
      'model': 'Nova Pro',
      'org': 'Amazon',
      'score': 49.9,
      'src': 'aa',
      'rank': 208
    },
    {
      'model': 'Ultravox v0.6 Llama 3.3 70B',
      'org': 'Fixie AI',
      'score': 49.8,
      'src': 'aa',
      'rank': 209
    },
    {
      'model': 'Claude 3 Opus',
      'org': 'Anthropic',
      'score': 48.9,
      'src': 'aa',
      'rank': 210
    },
    {
      'model': 'Mistral Large 2',
      'org': 'Mistral',
      'score': 48.6,
      'src': 'aa',
      'rank': 211
    },
    {
      'model': 'LFM2-24B-A2B',
      'org': 'LiquidAI',
      'score': 47.4,
      'src': 'aa',
      'rank': 212
    },
    {
      'model': 'Ministral 3 8B (Reasoning)',
      'org': 'Mistral',
      'score': 47.1,
      'src': 'aa',
      'rank': 213
    },
    {
      'model': 'Ministral 3 8B',
      'org': 'Mistral',
      'score': 47.1,
      'src': 'aa',
      'rank': 214
    },
    {
      'model': 'Soofi S 30B-A3B',
      'org': 'Soofi Project',
      'score': 43.4,
      'src': 'benchlm',
      'rank': 215
    },
    {
      'model': 'Gemma 4 E2B',
      'org': 'Google',
      'score': 43.4,
      'src': 'benchlm',
      'rank': 216
    },
    {
      'model': 'Gemma 3 27B',
      'org': 'Google',
      'score': 42.8,
      'src': 'aa',
      'rank': 217
    },
    {
      'model': 'GPT-4o mini',
      'org': 'OpenAI',
      'score': 42.6,
      'src': 'aa',
      'rank': 218
    },
    {
      'model': 'Exaone 4.0 1.2B',
      'org': 'LG AI Research',
      'score': 42.4,
      'src': 'aa',
      'rank': 219
    },
    {
      'model': 'Qwen2.5 Coder 32B Instruct',
      'org': 'Alibaba',
      'score': 41.7,
      'src': 'aa',
      'rank': 220
    },
    {
      'model': 'Mellum2-12B-A2.5B-Instruct',
      'org': 'JetBrains',
      'score': 40.9,
      'src': 'benchlm',
      'rank': 221
    },
    {
      'model': 'Claude 3 Haiku',
      'org': 'Anthropic',
      'score': 37.4,
      'src': 'aa',
      'rank': 222
    },
    {
      'model': 'Ministral 3 3B (Reasoning)',
      'org': 'Mistral',
      'score': 35.8,
      'src': 'aa',
      'rank': 223
    },
    {
      'model': 'Ministral 3 3B',
      'org': 'Mistral',
      'score': 35.8,
      'src': 'aa',
      'rank': 224
    },
    {
      'model': 'LFM2.5-1.2B-Thinking',
      'org': 'LiquidAI',
      'score': 33.9,
      'src': 'aa',
      'rank': 225
    },
    {
      'model': 'LFM2.5-1.2B-Instruct',
      'org': 'LiquidAI',
      'score': 32.6,
      'src': 'aa',
      'rank': 226
    },
    {
      'model': 'Phi-4 Multimodal Instruct',
      'org': 'Microsoft',
      'score': 31.5,
      'src': 'aa',
      'rank': 227
    },
    {
      'model': 'LFM2.5-VL-1.6B-Extract',
      'org': 'LiquidAI',
      'score': 28.9,
      'src': 'aa',
      'rank': 228
    },
    {
      'model': 'Gemini 1.0 Pro',
      'org': 'Google',
      'score': 27.7,
      'src': 'aa',
      'rank': 229
    },
    {
      'model': 'Granite-4.0-H-1B',
      'org': 'IBM',
      'score': 26.3,
      'src': 'aa',
      'rank': 230
    },
    {
      'model': 'Granite-4.0-350M',
      'org': 'IBM',
      'score': 26.1,
      'src': 'aa',
      'rank': 231
    },
    {
      'model': 'LFM2.5-VL-450M',
      'org': 'LiquidAI',
      'score': 25.7,
      'src': 'benchlm',
      'rank': 232
    },
    {
      'model': 'Granite-4.0-H-350M',
      'org': 'IBM',
      'score': 25.7,
      'src': 'aa',
      'rank': 233
    },
    {
      'model': 'LFM2.5-230M',
      'org': 'LiquidAI',
      'score': 25.4,
      'src': 'benchlm',
      'rank': 234
    }
  ]
};
