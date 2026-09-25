// 数据源:ARC-AGI-3(ARC Prize 交互式智能体推理评测,更新于 2026-09-25)
// 主渠道:https://www.datalearner.com/benchmarks/arc-agi-3(厂商官方发布成绩,Standard harness 口径)
// 补充:https://llm-stats.com/benchmarks/arc-agi-3(官方:https://arcprize.org/leaderboard)
// 渠道优先级:基准官方实测榜 > 厂商官方发布(论文/发布页)> 第三方聚合与镜像;低层级仅补缺失模型与字段,不覆盖高层级分数
// 字段说明:model=模型名;score=RHAE 相对人类行动效率(%);org=厂商;size=参数量;context=上下文;cost=API 价格;license=许可;src=数据来源渠道(datalearner/llm-stats)
// 用途:「权威基准测试」页展示,仅参考,不计入综合分/命中数。
window.ARCAGI3 = {
  'source': 'ARC-AGI-3',
  'url': 'https://llm-stats.com/benchmarks/arc-agi-3',
  'officialUrl': 'https://arcprize.org/leaderboard',
  'channelPolicy': '渠道优先级:基准官方实测榜 > 厂商官方发布(论文/发布页)> 第三方聚合与镜像;低层级仅补缺失模型与字段,不覆盖高层级分数',
  'updated': '2026-09-25',
  'refreshedAt': '2026-09-25 22:40',
  'stats': {
    'environments': 135,
    'entries': 15
  },
  'desc': 'ARC-AGI-3:ARC Prize 第三代抽象推理基准,把智能体放入无说明书的 64×64 交互式游戏环境(135 个环境,25 公开/55 半私/55 私),考察探索、世界建模、目标推断与规划;评分指标为 RHAE(相对人类行动效率,人类基线 100%)。',
  'models': [
    {
      'model': 'GPT-6 Astra',
      'org': 'OpenAI',
      'score': 62.71,
      'license': '不开源',
      'effort': '最高（无工具）',
      'date': '2026-09-03',
      'src': 'datalearner',
      'size': '—',
      'context': '1.1M',
      'cost': '$ 10.00 / $ 50.00',
      'rank': 1
    },
    {
      'model': 'Claude Opus 5',
      'org': 'Anthropic',
      'score': 30.2,
      'license': '不开源',
      'effort': '思考模式 High（无工具）',
      'date': '2026-07-24',
      'src': 'datalearner',
      'size': '—',
      'context': '1.0M',
      'cost': '$ 5.00 / $ 25.00',
      'rank': 2
    },
    {
      'model': 'Gemini 3.8 Flash',
      'org': 'Google DeepMind',
      'score': 10.37,
      'license': '不开源',
      'effort': '思考模式 High（无工具）',
      'date': '2026-09-02',
      'src': 'datalearner',
      'rank': 3
    },
    {
      'model': 'GPT-5.6 Sol',
      'org': 'OpenAI',
      'score': 7.78,
      'license': '不开源',
      'effort': '最高（无工具）',
      'date': '2026-06-26',
      'src': 'datalearner',
      'size': '—',
      'context': '1.1M',
      'cost': '$ 5.00 / $ 30.00',
      'rank': 4
    },
    {
      'model': 'Grok 4.6',
      'org': 'xAI',
      'score': 2.11,
      'license': '不开源',
      'effort': '极高强度思考（无工具）',
      'date': '2026-08-12',
      'src': 'datalearner',
      'rank': 5
    },
    {
      'model': 'Claude Opus 4.8',
      'org': 'Anthropic',
      'score': 1.52,
      'license': '不开源',
      'effort': '思考模式 High（无工具）',
      'date': '2026-05-28',
      'src': 'datalearner',
      'rank': 6
    },
    {
      'model': 'GPT-5.6 Terra',
      'org': 'OpenAI',
      'score': 0.8,
      'license': '不开源',
      'effort': '最高（无工具）',
      'date': '2026-06-26',
      'src': 'datalearner',
      'size': '—',
      'context': '1.1M',
      'cost': '$ 2.00 / $ 12.00',
      'rank': 7
    },
    {
      'model': 'Claude Opus 4.6',
      'org': 'Anthropic',
      'score': 0.51,
      'license': '不开源',
      'effort': '最高（无工具）',
      'date': '2026-02-05',
      'src': 'datalearner',
      'rank': 8
    },
    {
      'model': 'GPT-5.5',
      'org': 'OpenAI',
      'score': 0.43,
      'license': '不开源',
      'effort': '思考模式 High（无工具）',
      'date': '2026-04-23',
      'src': 'datalearner',
      'rank': 9
    },
    {
      'model': 'Gemini 3.1 Pro Preview',
      'org': 'Google DeepMind',
      'score': 0.42,
      'license': '不开源',
      'effort': '思考模式 High（无工具）',
      'date': '2026-02-20',
      'src': 'datalearner',
      'rank': 10
    },
    {
      'model': 'Grok 4.5',
      'org': 'xAI',
      'score': 0.32,
      'license': '不开源',
      'effort': '思考模式 Medium（无工具）',
      'date': '2026-07-08',
      'src': 'datalearner',
      'rank': 11
    },
    {
      'model': 'GPT-5.4',
      'org': 'OpenAI',
      'score': 0.21,
      'license': '不开源',
      'effort': '思考模式 High（无工具）',
      'date': '2026-03-05',
      'src': 'datalearner',
      'rank': 12
    },
    {
      'model': 'GPT-5.6 Luna',
      'org': 'OpenAI',
      'score': 0.2,
      'license': '不开源',
      'effort': '最高（无工具）',
      'date': '2026-06-26',
      'src': 'datalearner',
      'size': '—',
      'context': '1.1M',
      'cost': '$ 0.20 / $ 1.20',
      'rank': 13
    },
    {
      'model': 'GPT-6 Luna',
      'org': 'OpenAI',
      'score': 0.19,
      'license': '不开源',
      'effort': '思考模式 Medium（无工具）',
      'date': '2026-09-22',
      'src': 'datalearner',
      'rank': 14
    },
    {
      'model': 'Opus 4.7',
      'org': 'Anthropic',
      'score': 0.18,
      'license': '不开源',
      'effort': '思考模式 High（无工具）',
      'date': '2026-04-16',
      'src': 'datalearner',
      'rank': 15
    }
  ]
};
