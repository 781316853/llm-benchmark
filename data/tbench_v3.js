// 数据源:Terminal-Bench 3.0(斯坦福/Laude)终端命令行 Agent 评测(更新于 2026-09-26)
// 来源:https://snorkel.ai/leaderboard/terminal-bench-3-0/(线上 tbench.ai 3.0 路由已并入 4.0,以 snorkel.ai 权威镜像为主,每日自动抓取)
// 渠道优先级:基准官方实测榜 > 厂商官方发布(论文/发布页)> 第三方聚合与镜像;低层级仅补缺失模型与字段,不覆盖高层级分数(本榜无更高优先级渠道,snorkel.ai 为唯一可用镜像)
// 字段说明:model=模型名;effort=推理强度(max/high/xhigh 等);agent=Agent 框架(Codex/Claude Code 等);
//          score=解决率(%);ci=95% 置信区间;date=模型发布日期;tokens=总 tokens;cost=总成本($);src=数据来源渠道(mirror)
// 用途:计入总览页综合分与命中数(与 4.0 合并为一个基准组,取值优先级 4.0>3.0>2.1);「权威基准测试」页完整展示。
window.TBENCH_V3 = {
  'source': 'Terminal-Bench',
  'url': 'https://www.tbench.ai/leaderboard/terminal-bench/3.0',
  'channelPolicy': '渠道优先级:基准官方实测榜 > 厂商官方发布(论文/发布页)> 第三方聚合与镜像;低层级仅补缺失模型与字段,不覆盖高层级分数',
  'version': '3.0',
  'updated': '2026-09-26',
  'refreshedAt': '2026-09-26 14:17',
  'stats': {
    'tasks': 74,
    'entries': 12
  },
  'desc': 'Terminal-Bench 3.0:在真实命令行环境中评测编码 Agent(74 个任务,含更长周期、多容器/GPU 环境与更广泛领域),按 agent×model 组合计分,解决率越高越好。',
  'models': [
    {
      'rank': 1,
      'model': 'Opus 5',
      'agent': 'max',
      'effort': null,
      'score': 0,
      'ci': null,
      'date': '42.7% ±1.6',
      'tokens': '2026-07-24',
      'cost': '7.3B',
      'src': 'mirror'
    },
    {
      'rank': 2,
      'model': 'GPT-5.6 Sol',
      'agent': 'max',
      'effort': null,
      'score': 0,
      'ci': null,
      'date': '34.6% ±1.6',
      'tokens': '2026-07-09',
      'cost': '5.8B',
      'src': 'mirror'
    },
    {
      'rank': 3,
      'model': 'Fable 5',
      'agent': 'max',
      'effort': null,
      'score': 0,
      'ci': null,
      'date': '34.1% ±1.7',
      'tokens': '2026-06-09',
      'cost': '3.6B',
      'src': 'mirror'
    },
    {
      'rank': 4,
      'model': 'GLM 5.3',
      'agent': 'max',
      'effort': null,
      'score': 0,
      'ci': null,
      'date': '32.4% ±1.5',
      'tokens': '2026-08-14',
      'cost': '5.6B',
      'src': 'mirror'
    },
    {
      'rank': 5,
      'model': 'Grok 4.6',
      'agent': 'high',
      'effort': null,
      'score': 0,
      'ci': null,
      'date': '26.5% ±1.5',
      'tokens': '2026-08-12',
      'cost': '2.9B',
      'src': 'mirror'
    },
    {
      'rank': 6,
      'model': 'Opus 4.8',
      'agent': 'max',
      'effort': null,
      'score': 0,
      'ci': null,
      'date': '21.1% ±1.6',
      'tokens': '2026-05-28',
      'cost': '5.2B',
      'src': 'mirror'
    },
    {
      'rank': 7,
      'model': 'GPT-5.6 Terra',
      'agent': 'max',
      'effort': null,
      'score': 0,
      'ci': null,
      'date': '20.8% ±1.4',
      'tokens': '2026-07-09',
      'cost': '7.0B',
      'src': 'mirror'
    },
    {
      'rank': 8,
      'model': 'SWE-1.7 Lightning',
      'agent': null,
      'effort': null,
      'score': 0,
      'ci': null,
      'date': '18.6% ±1.5',
      'tokens': '2026-07-08',
      'cost': '3.6B',
      'src': 'mirror'
    },
    {
      'rank': 9,
      'model': 'Grok 4.5',
      'agent': 'xhigh',
      'effort': null,
      'score': 0,
      'ci': null,
      'date': '15.7% ±1.5',
      'tokens': '2026-07-08',
      'cost': '1.2B',
      'src': 'mirror'
    },
    {
      'rank': 10,
      'model': 'Sonnet 5',
      'agent': 'max',
      'effort': null,
      'score': 0,
      'ci': null,
      'date': '14.6% ±1.5',
      'tokens': '2026-06-30',
      'cost': '17.9B',
      'src': 'mirror'
    },
    {
      'rank': 11,
      'model': 'GPT-5.6 Luna',
      'agent': 'max',
      'effort': null,
      'score': 0,
      'ci': null,
      'date': '14.3% ±1.3',
      'tokens': '2026-07-09',
      'cost': '11.9B',
      'src': 'mirror'
    },
    {
      'rank': 12,
      'model': 'GLM 5.2',
      'agent': 'max',
      'effort': null,
      'score': 0,
      'ci': null,
      'date': '4.6% ±1',
      'tokens': '2026-06-13',
      'cost': '3.3B',
      'src': 'mirror'
    }
  ]
};
