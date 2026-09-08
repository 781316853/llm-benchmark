// 数据源:ARC-AGI-3(ARC Prize 交互式智能体推理评测,更新于 2026-09-08)
// 来源:https://llm-stats.com/benchmarks/arc-agi-3(官方:https://arcprize.org/leaderboard)
// 字段说明:model=模型名;score=RHAE 相对人类行动效率(%);size=参数量;context=上下文;cost=API 价格;license=许可
// 用途:「权威基准测试」页展示,仅参考,不计入综合分/命中数。
window.ARCAGI3 = {
  'source': 'ARC-AGI-3',
  'url': 'https://llm-stats.com/benchmarks/arc-agi-3',
  'officialUrl': 'https://arcprize.org/leaderboard',
  'updated': '2026-09-08',
  'refreshedAt': '2026-09-08 13:39',
  'stats': {
    'environments': 135,
    'entries': 5
  },
  'desc': 'ARC-AGI-3:ARC Prize 第三代抽象推理基准,把智能体放入无说明书的 64×64 交互式游戏环境(135 个环境,25 公开/55 半私/55 私),考察探索、世界建模、目标推断与规划;评分指标为 RHAE(相对人类行动效率,人类基线 100%)。',
  'models': [
    {
      'rank': 1,
      'model': 'GPT-6 Astra',
      'org': 'OpenAI',
      'score': 99.9,
      'size': '—',
      'context': '1.1M',
      'cost': '$ 10.00 / $ 50.00',
      'license': null
    },
    {
      'rank': 2,
      'model': 'Claude Opus 5',
      'org': 'Anthropic',
      'score': 30.2,
      'size': '—',
      'context': '1.0M',
      'cost': '$ 5.00 / $ 25.00',
      'license': null
    },
    {
      'rank': 3,
      'model': 'GPT-5.6 Sol',
      'org': 'OpenAI',
      'score': 7.8,
      'size': '—',
      'context': '1.1M',
      'cost': '$ 5.00 / $ 30.00',
      'license': null
    },
    {
      'rank': 4,
      'model': 'GPT-5.6 Terra',
      'org': 'OpenAI',
      'score': 0.8,
      'size': '—',
      'context': '1.1M',
      'cost': '$ 2.00 / $ 12.00',
      'license': null
    },
    {
      'rank': 5,
      'model': 'GPT-5.6 Luna',
      'org': 'OpenAI',
      'score': 0.2,
      'size': '—',
      'context': '1.1M',
      'cost': '$ 0.20 / $ 1.20',
      'license': null
    }
  ]
};
