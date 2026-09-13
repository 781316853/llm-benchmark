// 数据源:NL2Repo-Bench(长程仓库生成·编码 Agent,更新于 2026-09-13)
// 来源:https://llm-stats.com/benchmarks/nl2repo(官方:https://github.com/multimodal-art-projection/NL2RepoBench) · 补充镜像 https://www.benchlm.ai/benchmarks/nl2repo
// 字段说明:model=模型名;score=test-pass-rate(%);org=厂商;size=参数量;context=上下文;cost=API 价格
// 用途:已计入总览综合分(权重 8%)与命中数;「权威基准测试」页完整展示。
window.NL2REPO = {
  'source': 'NL2Repo-Bench',
  'url': 'https://llm-stats.com/benchmarks/nl2repo',
  'officialUrl': 'https://github.com/multimodal-art-projection/NL2RepoBench',
  'updated': '2026-09-13',
  'refreshedAt': '2026-09-13 13:43',
  'stats': {
    'tasks': 103,
    'entries': 32
  },
  'desc': 'NL2Repo-Bench:自然语言到完整代码仓库的长程生成基准(字节 Seed / M-A-P 等),给定单一 NL 需求文档与空工作区,智能体需自主设计架构、管理依赖、实现多模块并产出可安装的 Python 库,以测试通过率衡量;得越高越好。',
  'models': [
    {
      'rank': 1,
      'model': 'DeepSeek V4.1 Flash',
      'org': 'DeepSeek',
      'score': 65.4,
      'size': '763B',
      'context': '1.0M',
      'cost': '$ 0.22 / $ 0.66',
      'license': null
    },
    {
      'rank': 2,
      'model': 'DeepSeek-V4-Pro-0813',
      'org': 'DeepSeek',
      'score': 61.5,
      'size': '1.6T',
      'context': '1.0M',
      'cost': '$ 0.43 / $ 0.87',
      'license': null
    },
    {
      'rank': 3,
      'model': 'Ornith-1.5-397B',
      'org': 'Ornith AI',
      'score': 59.5,
      'size': null,
      'context': null,
      'cost': null,
      'license': null
    },
    {
      'rank': 4,
      'model': 'Hy4 preview',
      'org': 'Tencent',
      'score': 58.9,
      'size': '770B',
      'context': '—',
      'cost': '—',
      'license': null
    },
    {
      'rank': 5,
      'model': 'GLM-5.3',
      'org': 'Zhipu AI',
      'score': 58,
      'size': '753B',
      'context': '1.0M',
      'cost': '$ 1.20 / $ 4.00',
      'license': null
    },
    {
      'rank': 6,
      'model': 'DeepSeek-V4-Flash-Vision-Exp',
      'org': 'DeepSeek',
      'score': 57.7,
      'size': '—',
      'context': '1.0M',
      'cost': '$ 0.44 / $ 1.32',
      'license': null
    },
    {
      'rank': 7,
      'model': 'GLM-5.3-Flash',
      'org': 'Zhipu AI',
      'score': 56.3,
      'size': '320B',
      'context': '1.0M',
      'cost': '$ 0.15 / $ 0.50',
      'license': null
    },
    {
      'rank': 8,
      'model': 'Qwen3.8 Max',
      'org': 'Alibaba Cloud / Qwen Team',
      'score': 55.9,
      'size': '2.4T',
      'context': '1.0M',
      'cost': '$ 1.65 / $ 4.95',
      'license': null
    },
    {
      'rank': 9,
      'model': 'DeepSeek-V4-Flash-0731',
      'org': 'DeepSeek',
      'score': 54.2,
      'size': '304B',
      'context': '1.0M',
      'cost': '$ 0.06 / $ 0.18',
      'license': null
    },
    {
      'rank': 10,
      'model': 'dots3-note Preview',
      'org': 'Dots Studio',
      'score': 49.8,
      'size': null,
      'context': null,
      'cost': null,
      'license': null
    },
    {
      'rank': 11,
      'model': 'GLM-5.2',
      'org': 'Zhipu AI',
      'score': 48.9,
      'size': '753B',
      'context': '1.0M',
      'cost': '$ 0.75 / $ 2.40',
      'license': null
    },
    {
      'rank': 12,
      'model': 'Ornith-1.0-397B',
      'org': 'DeepReinforce AI',
      'score': 48.2,
      'size': null,
      'context': null,
      'cost': null,
      'license': null
    },
    {
      'rank': 13,
      'model': 'Qwen3.8 Flash',
      'org': 'Alibaba Cloud / Qwen Team',
      'score': 48.1,
      'size': '125B',
      'context': '1.0M',
      'cost': '$ 0.15 / $ 0.47',
      'license': null
    },
    {
      'rank': 14,
      'model': 'Qwen3.8-Flash-Next',
      'org': 'Alibaba Cloud / Qwen Team',
      'score': 48.1,
      'size': '125B',
      'context': '—',
      'cost': '—',
      'license': null
    },
    {
      'rank': 15,
      'model': 'Qwen3.7 Max',
      'org': 'Alibaba Cloud / Qwen Team',
      'score': 47.2,
      'size': '—',
      'context': '1.0M',
      'cost': '$ 1.25 / $ 3.75',
      'license': null
    },
    {
      'rank': 16,
      'model': 'Seed 2.1 Pro',
      'org': 'ByteDance',
      'score': 47,
      'size': '—',
      'context': '—',
      'cost': '—',
      'license': null
    },
    {
      'rank': 17,
      'model': 'Ornith-1.5-35B-A3B',
      'org': 'Ornith AI',
      'score': 46.2,
      'size': null,
      'context': null,
      'cost': null,
      'license': null
    },
    {
      'rank': 18,
      'model': 'Hy3',
      'org': 'Tencent',
      'score': 45.6,
      'size': '295B',
      'context': '262K',
      'cost': '$ 0.14 / $ 0.58',
      'license': null
    },
    {
      'rank': 19,
      'model': 'Seed 2.1 Turbo',
      'org': 'ByteDance',
      'score': 43.7,
      'size': '—',
      'context': '—',
      'cost': '—',
      'license': null
    },
    {
      'rank': 20,
      'model': 'Claude Opus 4.5',
      'org': 'Anthropic',
      'score': 43.2,
      'size': null,
      'context': null,
      'cost': null,
      'license': null
    },
    {
      'rank': 21,
      'model': 'Qwen 3.6 Max (preview)',
      'org': 'Alibaba',
      'score': 42.9,
      'size': null,
      'context': null,
      'cost': null,
      'license': null
    },
    {
      'rank': 22,
      'model': 'GLM-5.1',
      'org': 'Zhipu AI',
      'score': 42.7,
      'size': '754B',
      'context': '203K',
      'cost': '$ 1.05 / $ 3.50',
      'license': null
    },
    {
      'rank': 23,
      'model': 'Qwen3.8-27B',
      'org': 'Alibaba Cloud / Qwen Team',
      'score': 42.3,
      'size': '28B',
      'context': '262K',
      'cost': '$ 0.40 / $ 3.00',
      'license': null
    },
    {
      'rank': 24,
      'model': 'MiniMax M3',
      'org': 'MiniMax',
      'score': 42.1,
      'size': '428B',
      'context': '1.0M',
      'cost': '$ 0.28 / $ 1.10',
      'license': null
    },
    {
      'rank': 25,
      'model': 'Qwen3.7-Plus',
      'org': 'Alibaba Cloud / Qwen Team',
      'score': 41.1,
      'size': '—',
      'context': '—',
      'cost': '—',
      'license': null
    },
    {
      'rank': 26,
      'model': 'MiniMax M2.7',
      'org': 'MiniMax',
      'score': 39.8,
      'size': '—',
      'context': '205K',
      'cost': '$ 0.30 / $ 1.20',
      'license': null
    },
    {
      'rank': 27,
      'model': 'Qwen3.6 Plus',
      'org': 'Alibaba Cloud / Qwen Team',
      'score': 37.9,
      'size': '—',
      'context': '1.0M',
      'cost': '$ 0.50 / $ 3.00',
      'license': null
    },
    {
      'rank': 28,
      'model': 'Qwen3.6-27B',
      'org': 'Alibaba Cloud / Qwen Team',
      'score': 36.2,
      'size': '28B',
      'context': '262K',
      'cost': '$ 0.32 / $ 3.20',
      'license': null
    },
    {
      'rank': 29,
      'model': 'Ornith-1.0-35B',
      'org': 'DeepReinforce AI',
      'score': 34.6,
      'size': null,
      'context': null,
      'cost': null,
      'license': null
    },
    {
      'rank': 30,
      'model': 'Ornith-1.5-9B',
      'org': 'Ornith AI',
      'score': 32.4,
      'size': null,
      'context': null,
      'cost': null,
      'license': null
    },
    {
      'rank': 31,
      'model': 'Qwen3.6-35B-A3B',
      'org': 'Alibaba Cloud / Qwen Team',
      'score': 29.4,
      'size': '35B',
      'context': '262K',
      'cost': '$ 0.10 / $ 0.95',
      'license': null
    },
    {
      'rank': 32,
      'model': 'Ornith-1.0-9B',
      'org': 'DeepReinforce AI',
      'score': 27.2,
      'size': null,
      'context': null,
      'cost': null,
      'license': null
    }
  ]
};
