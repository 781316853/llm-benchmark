// 数据源:NL2Repo-Bench(长程仓库生成·编码 Agent,更新于 2026-09-19)
// 来源:https://llm-stats.com/benchmarks/nl2repo(官方:https://github.com/multimodal-art-projection/NL2RepoBench)
// 主渠道:官方论文评测表 https://arxiv.org/html/2512.12730v2(Table 2) · https://www.datalearner.com/benchmarks/nl2repo-bench(厂商官方发布)
// 补充:llm-stats 聚合表 · https://www.benchlm.ai/benchmarks/nl2repo(benchlm 镜像)
// 渠道优先级:基准官方实测榜 > 厂商官方发布(论文/发布页)> 第三方聚合与镜像;低层级仅补缺失模型与字段,不覆盖高层级分数
// 字段说明:model=模型名;score=test-pass-rate(%);org=厂商;size=参数量;context=上下文;cost=API 价格;src=数据来源渠道(paper/datalearner/llm-stats/benchlm)
// 用途:已计入总览综合分(权重 8%)与命中数;「权威基准测试」页完整展示。
window.NL2REPO = {
  'source': 'NL2Repo-Bench',
  'url': 'https://llm-stats.com/benchmarks/nl2repo',
  'officialUrl': 'https://github.com/multimodal-art-projection/NL2RepoBench',
  'channelPolicy': '渠道优先级:基准官方实测榜 > 厂商官方发布(论文/发布页)> 第三方聚合与镜像;低层级仅补缺失模型与字段,不覆盖高层级分数',
  'updated': '2026-09-19',
  'refreshedAt': '2026-09-19 13:31',
  'stats': {
    'tasks': 103,
    'entries': 49
  },
  'desc': 'NL2Repo-Bench:自然语言到完整代码仓库的长程生成基准(字节 Seed / M-A-P 等),给定单一 NL 需求文档与空工作区,智能体需自主设计架构、管理依赖、实现多模块并产出可安装的 Python 库,以测试通过率衡量;得越高越好。',
  'models': [
    {
      'model': 'Claude Opus 5',
      'org': 'Anthropic',
      'score': 75.3,
      'license': '不开源',
      'src': 'datalearner',
      'rank': 1
    },
    {
      'model': 'DeepSeek-V4.1-Flash',
      'org': 'DeepSeek-AI',
      'score': 65.4,
      'license': '免费商用授权',
      'src': 'datalearner',
      'size': '763B',
      'context': '1.0M',
      'cost': '$ 0.22 / $ 0.66',
      'rank': 2
    },
    {
      'model': 'Qwen3.8-Max-0902',
      'org': '阿里巴巴',
      'score': 64.9,
      'license': '不开源',
      'src': 'datalearner',
      'rank': 3
    },
    {
      'model': 'DeepSeek-V4-Pro-0813',
      'org': 'DeepSeek-AI',
      'score': 61.5,
      'license': '免费商用授权',
      'src': 'datalearner',
      'size': '1.6T',
      'context': '1.0M',
      'cost': '$ 0.43 / $ 0.87',
      'rank': 4
    },
    {
      'model': 'Ornith-1.5-397B',
      'org': 'Ornith AI',
      'score': 59.5,
      'src': 'benchlm',
      'rank': 5
    },
    {
      'model': 'Hy4 preview',
      'org': '腾讯AI实验室',
      'score': 58.9,
      'license': '免费商用授权',
      'src': 'datalearner',
      'size': '770B',
      'context': '—',
      'cost': '—',
      'rank': 6
    },
    {
      'model': 'Kimi K3',
      'org': 'Moonshot AI',
      'score': 58,
      'license': '有条件免费商用授权',
      'src': 'datalearner',
      'rank': 7
    },
    {
      'model': 'GLM-5.3',
      'org': '智谱AI',
      'score': 58,
      'license': '有条件免费商用授权',
      'src': 'datalearner',
      'size': '753B',
      'context': '1.0M',
      'cost': '$ 1.20 / $ 4.00',
      'rank': 8
    },
    {
      'model': 'DeepSeek-V4-Flash-Vision-Exp',
      'org': 'DeepSeek-AI',
      'score': 57.7,
      'license': '免费商用授权',
      'src': 'datalearner',
      'size': '—',
      'context': '1.0M',
      'cost': '$ 0.44 / $ 1.32',
      'rank': 9
    },
    {
      'model': 'GPT-5.6 Sol',
      'org': 'OpenAI',
      'score': 56.8,
      'license': '不开源',
      'src': 'datalearner',
      'rank': 10
    },
    {
      'model': 'GLM-5.3-Flash',
      'org': '智谱AI',
      'score': 56.3,
      'license': '免费商用授权',
      'src': 'datalearner',
      'size': '320B',
      'context': '1.0M',
      'cost': '$ 0.15 / $ 0.50',
      'rank': 11
    },
    {
      'model': 'Qwen3.8-Max',
      'org': '阿里巴巴',
      'score': 55.9,
      'license': '有条件免费商用授权',
      'src': 'datalearner',
      'size': '2.4T',
      'context': '1.0M',
      'cost': '$ 1.65 / $ 4.95',
      'rank': 12
    },
    {
      'model': 'DeepSeek-V4-Flash-0731',
      'org': 'DeepSeek-AI',
      'score': 54.2,
      'license': '免费商用授权',
      'src': 'datalearner',
      'size': '304B',
      'context': '1.0M',
      'cost': '$ 0.06 / $ 0.18',
      'rank': 13
    },
    {
      'model': 'dots3-note Preview',
      'org': 'Dots Studio',
      'score': 49.8,
      'src': 'benchlm',
      'rank': 14
    },
    {
      'model': 'GLM-5.2',
      'org': '智谱AI',
      'score': 48.9,
      'license': '免费商用授权',
      'src': 'datalearner',
      'size': '753B',
      'context': '1.0M',
      'cost': '$ 0.75 / $ 2.40',
      'rank': 15
    },
    {
      'model': 'Qwen3.8-Omni-Flash',
      'org': 'Alibaba',
      'score': 48.9,
      'src': 'benchlm',
      'rank': 16
    },
    {
      'model': 'Ornith-1.0-397B',
      'org': 'DeepReinforce AI',
      'score': 48.2,
      'src': 'benchlm',
      'rank': 17
    },
    {
      'model': 'Qwen3.8-Flash-Next',
      'org': '阿里巴巴',
      'score': 48.1,
      'license': '有条件免费商用授权',
      'src': 'datalearner',
      'size': '125B',
      'context': '—',
      'cost': '—',
      'rank': 18
    },
    {
      'rank': 19,
      'model': 'Qwen3.8 Flash',
      'org': 'Alibaba Cloud / Qwen Team',
      'score': 48.1,
      'size': '125B',
      'context': '1.0M',
      'cost': '$ 0.15 / $ 0.47',
      'license': null,
      'src': 'llm-stats'
    },
    {
      'rank': 20,
      'model': 'Qwen3.7 Max',
      'org': 'Alibaba Cloud / Qwen Team',
      'score': 47.2,
      'size': '—',
      'context': '1.0M',
      'cost': '$ 1.25 / $ 3.75',
      'license': null,
      'src': 'llm-stats'
    },
    {
      'rank': 21,
      'model': 'Seed 2.1 Pro',
      'org': 'ByteDance',
      'score': 47,
      'size': '—',
      'context': '—',
      'cost': '—',
      'license': null,
      'src': 'llm-stats'
    },
    {
      'model': 'Ornith-1.5-35B-A3B',
      'org': 'Ornith AI',
      'score': 46.2,
      'src': 'benchlm',
      'rank': 22
    },
    {
      'rank': 23,
      'model': 'Hy3',
      'org': 'Tencent',
      'score': 45.6,
      'size': '295B',
      'context': '262K',
      'cost': '$ 0.14 / $ 0.58',
      'license': null,
      'src': 'llm-stats'
    },
    {
      'rank': 24,
      'model': 'Seed 2.1 Turbo',
      'org': 'ByteDance',
      'score': 43.7,
      'size': '—',
      'context': '—',
      'cost': '—',
      'license': null,
      'src': 'llm-stats'
    },
    {
      'model': 'Claude Opus 4.5',
      'org': 'Anthropic',
      'score': 43.2,
      'src': 'benchlm',
      'rank': 25
    },
    {
      'model': 'Qwen 3.6 Max (preview)',
      'org': 'Alibaba',
      'score': 42.9,
      'src': 'benchlm',
      'rank': 26
    },
    {
      'rank': 27,
      'model': 'GLM-5.1',
      'org': 'Zhipu AI',
      'score': 42.7,
      'size': '754B',
      'context': '203K',
      'cost': '$ 1.05 / $ 3.50',
      'license': null,
      'src': 'llm-stats'
    },
    {
      'model': 'Qwen3.8-27B',
      'org': '阿里巴巴',
      'score': 42.3,
      'license': '免费商用授权',
      'src': 'datalearner',
      'size': '28B',
      'context': '262K',
      'cost': '$ 0.40 / $ 3.00',
      'rank': 28
    },
    {
      'rank': 29,
      'model': 'MiniMax M3',
      'org': 'MiniMax',
      'score': 42.1,
      'size': '428B',
      'context': '1.0M',
      'cost': '$ 0.28 / $ 1.10',
      'license': null,
      'src': 'llm-stats'
    },
    {
      'rank': 30,
      'model': 'Qwen3.7-Plus',
      'org': 'Alibaba Cloud / Qwen Team',
      'score': 41.1,
      'size': '—',
      'context': '—',
      'cost': '—',
      'license': null,
      'src': 'llm-stats'
    },
    {
      'model': 'Claude-Sonnet-4.5 (Claude Code)',
      'org': null,
      'score': 40.2,
      'src': 'paper',
      'rank': 31
    },
    {
      'model': 'Claude-Sonnet-4.5',
      'org': null,
      'score': 39.9,
      'src': 'paper',
      'rank': 32
    },
    {
      'model': 'MiniMax-M2.7',
      'org': 'MiniMaxAI',
      'score': 39.8,
      'license': '不可以商用',
      'src': 'datalearner',
      'size': '—',
      'context': '205K',
      'cost': '$ 0.30 / $ 1.20',
      'rank': 33
    },
    {
      'model': 'Claude-Sonnet-4.5 (Cursor)',
      'org': null,
      'score': 39.2,
      'src': 'paper',
      'rank': 34
    },
    {
      'rank': 35,
      'model': 'Qwen3.6 Plus',
      'org': 'Alibaba Cloud / Qwen Team',
      'score': 37.9,
      'size': '—',
      'context': '1.0M',
      'cost': '$ 0.50 / $ 3.00',
      'license': null,
      'src': 'llm-stats'
    },
    {
      'model': 'Claude-Sonnet-4',
      'org': null,
      'score': 37,
      'src': 'paper',
      'rank': 36
    },
    {
      'rank': 37,
      'model': 'Qwen3.6-27B',
      'org': 'Alibaba Cloud / Qwen Team',
      'score': 36.2,
      'size': '28B',
      'context': '262K',
      'cost': '$ 0.32 / $ 3.20',
      'license': null,
      'src': 'llm-stats'
    },
    {
      'model': 'Ornith-1.0-35B',
      'org': 'DeepReinforce AI',
      'score': 34.6,
      'src': 'benchlm',
      'rank': 38
    },
    {
      'model': 'Gemini-3-pro (Cursor)',
      'org': null,
      'score': 34.2,
      'src': 'paper',
      'rank': 39
    },
    {
      'model': 'Ornith-1.5-9B',
      'org': 'Ornith AI',
      'score': 32.4,
      'src': 'benchlm',
      'rank': 40
    },
    {
      'rank': 41,
      'model': 'Qwen3.6-35B-A3B',
      'org': 'Alibaba Cloud / Qwen Team',
      'score': 29.4,
      'size': '35B',
      'context': '262K',
      'cost': '$ 0.10 / $ 0.95',
      'license': null,
      'src': 'llm-stats'
    },
    {
      'model': 'DeepSeek-V3.2',
      'org': null,
      'score': 27.6,
      'src': 'paper',
      'rank': 42
    },
    {
      'model': 'Ornith-1.0-9B',
      'org': 'DeepReinforce AI',
      'score': 27.2,
      'src': 'benchlm',
      'rank': 43
    },
    {
      'model': 'Kimi-k2',
      'org': null,
      'score': 22.7,
      'src': 'paper',
      'rank': 44
    },
    {
      'model': 'DeepSeek-V3.1',
      'org': null,
      'score': 22.2,
      'src': 'paper',
      'rank': 45
    },
    {
      'model': 'GPT-5',
      'org': null,
      'score': 21.7,
      'src': 'paper',
      'rank': 46
    },
    {
      'model': 'Qwen3-Instruct',
      'org': null,
      'score': 17.9,
      'src': 'paper',
      'rank': 47
    },
    {
      'model': 'GLM-4.6',
      'org': null,
      'score': 17.5,
      'src': 'paper',
      'rank': 48
    },
    {
      'model': 'Qwen3-thinking',
      'org': null,
      'score': 13.8,
      'src': 'paper',
      'rank': 49
    }
  ]
};
