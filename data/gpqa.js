// 数据源:GPQA Diamond(研究生级科学问答·知识推理,更新于 2026-09-25)
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
  'updated': '2026-09-25',
  'refreshedAt': '2026-09-25 14:18',
  'stats': {
    'tasks': 198,
    'entries': 50
  },
  'desc': 'GPQA Diamond:研究生级科学多选问答(GPQA 中最难、质量最高的 198 题子集,覆盖生物/物理/化学),领域专家正确率~65%、随机基线 25%;Accuracy 越高越好。多源合并:llm-stats 与 benchlm 镜像为公开口径,AA 复测为第三方自家 harness(分数偏差 ±1 内,src=aa 区分)。',
  'models': [
    {
      'rank': 1,
      'model': 'GPT-6 Astra',
      'org': 'OpenAI',
      'score': 96,
      'size': '—',
      'context': '1.1M',
      'cost': '$ 10.00 / $ 50.00',
      'license': null,
      'src': 'llm-stats'
    },
    {
      'rank': 2,
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
      'rank': 3,
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
      'rank': 4,
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
      'rank': 5,
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
      'rank': 6,
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
      'rank': 7,
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
      'rank': 8,
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
      'rank': 9,
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
      'rank': 10,
      'model': 'Grok 4.5',
      'org': 'xAI',
      'score': 93,
      'size': '—',
      'context': '500K',
      'cost': '$ 2.00 / $ 6.00',
      'license': null,
      'src': 'llm-stats'
    },
    {
      'rank': 11,
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
      'rank': 12,
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
      'rank': 13,
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
      'rank': 14,
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
      'rank': 15,
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
      'rank': 16,
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
      'rank': 17,
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
      'rank': 18,
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
      'rank': 19,
      'model': 'Qwen3.8-Flash-Next',
      'org': 'Alibaba Cloud / Qwen Team',
      'score': 91.7,
      'size': '125B',
      'context': '—',
      'cost': '—',
      'license': null,
      'src': 'llm-stats'
    },
    {
      'rank': 20,
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
      'rank': 21,
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
      'rank': 22,
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
      'rank': 23,
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
      'rank': 24,
      'model': 'Kimi K2.6',
      'org': 'Moonshot AI',
      'score': 90.5,
      'size': '1.0T',
      'context': '262K',
      'cost': '$ 0.75 / $ 3.50',
      'license': null,
      'src': 'llm-stats'
    },
    {
      'rank': 25,
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
      'rank': 26,
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
      'rank': 27,
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
      'rank': 28,
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
      'rank': 29,
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
      'rank': 30,
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
      'rank': 31,
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
      'rank': 32,
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
      'rank': 33,
      'model': 'Qwen3.8-27B',
      'org': 'Alibaba Cloud / Qwen Team',
      'score': 89.2,
      'size': '28B',
      'context': '262K',
      'cost': '$ 0.40 / $ 3.00',
      'license': null,
      'src': 'llm-stats'
    },
    {
      'rank': 34,
      'model': 'Solar Pro 4',
      'org': 'Upstage',
      'score': 89,
      'size': '—',
      'context': '524K',
      'cost': '$ 0.30 / $ 1.20',
      'license': null,
      'src': 'llm-stats'
    },
    {
      'rank': 35,
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
      'rank': 36,
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
      'rank': 37,
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
      'rank': 38,
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
      'rank': 39,
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
      'rank': 40,
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
      'rank': 41,
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
      'rank': 42,
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
      'rank': 43,
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
      'rank': 44,
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
      'rank': 45,
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
      'rank': 46,
      'model': 'Kimi K2.5',
      'org': 'Moonshot AI',
      'score': 87.6,
      'size': '1.0T',
      'context': '—',
      'cost': '—',
      'license': null,
      'src': 'llm-stats'
    },
    {
      'rank': 47,
      'model': 'Grok-4',
      'org': 'xAI',
      'score': 87.5,
      'size': '—',
      'context': '—',
      'cost': '—',
      'license': null,
      'src': 'llm-stats'
    },
    {
      'rank': 48,
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
      'rank': 49,
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
      'rank': 50,
      'model': 'GPT-5 High',
      'org': 'OpenAI',
      'score': 87.3,
      'size': '—',
      'context': '—',
      'cost': '—',
      'license': null,
      'src': 'llm-stats'
    }
  ]
};
