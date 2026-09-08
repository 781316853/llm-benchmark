// 数据源:Terminal-Bench 3.0(斯坦福/Laude)终端命令行 Agent 评测(全网权威数据汇总,快照于 2026-09-07)
// 来源:https://www.tbench.ai/news/terminal-bench-3-0 · 镜像 https://snorkel.ai/leaderboard/terminal-bench-3-0/
// 字段说明:model=模型名;effort=推理强度(max/high/xhigh 等);agent=Agent 框架(Codex/Claude Code 等);
//          score=解决率(%);ci=95% 置信区间;date=模型发布日期;tokens=总 tokens;cost=总成本($)
// 用途:计入总览页综合分与命中数(与 4.0 合并为一个基准组,取值优先级 4.0>3.0>2.1);「权威基准测试」页完整展示。
// 注:线上 tbench.ai 的 2.1/3.0 路由已并入 4.0,故此处数据由全网权威榜单抓取整理,为静态快照。
window.TBENCH_V3 = {
  'source': 'Terminal-Bench',
  'url': 'https://www.tbench.ai/leaderboard/terminal-bench/3.0',
  'version': '3.0',
  'updated': '2026-09-07',
  'refreshedAt': '2026-09-07 12:47',
  'stats': {
    'tasks': 74,
    'entries': 12
  },
  'desc': 'Terminal-Bench 3.0:在真实命令行环境中评测编码 Agent(74 个任务,含更长周期、多容器/GPU 环境与更广泛领域),按 agent×model 组合计分,解决率越高越好。',
  'models': [
    {
      'rank': 1,
      'model': 'Opus 5',
      'agent': 'mini-SWE-agent',
      'effort': 'max',
      'score': 42.7,
      'ci': 1.6,
      'date': 'Jul 24, 2026',
      'tokens': '7.3B',
      'cost': '$5.8k'
    },
    {
      'rank': 2,
      'model': 'GPT-5.6 Sol',
      'agent': 'Codex',
      'effort': 'max',
      'score': 34.6,
      'ci': 1.6,
      'date': 'Jun 26, 2026',
      'tokens': '5.8B',
      'cost': '$4.0k'
    },
    {
      'rank': 3,
      'model': 'Fable 5',
      'agent': 'Claude Code',
      'effort': 'max',
      'score': 34.1,
      'ci': 1.7,
      'date': 'Jun 9, 2026',
      'tokens': '3.6B',
      'cost': '$6.5k'
    },
    {
      'rank': 4,
      'model': 'GLM-5.3',
      'agent': 'Claude Code',
      'effort': 'max',
      'score': 32.4,
      'ci': 1.5,
      'date': 'Aug 14, 2026',
      'tokens': '5.6B',
      'cost': '$1.8k'
    },
    {
      'rank': 5,
      'model': 'Grok 4.6',
      'agent': 'Grok Build',
      'effort': 'high',
      'score': 26.5,
      'ci': 1.5,
      'date': 'Aug 12, 2026',
      'tokens': '2.9B',
      'cost': '$2.1k'
    },
    {
      'rank': 6,
      'model': 'Opus 4.8',
      'agent': 'Claude Code',
      'effort': 'max',
      'score': 21.1,
      'ci': 1.6,
      'date': 'May 28, 2026',
      'tokens': '5.2B',
      'cost': '$5.2k'
    },
    {
      'rank': 7,
      'model': 'GPT-5.6 Terra',
      'agent': 'Codex',
      'effort': 'max',
      'score': 20.8,
      'ci': 1.4,
      'date': 'Jul 9, 2026',
      'tokens': '7.0B',
      'cost': '$2.5k'
    },
    {
      'rank': 8,
      'model': 'SWE-1.7 Lightning',
      'agent': 'Devin',
      'effort': null,
      'score': 18.6,
      'ci': 1.5,
      'date': 'Jul 8, 2026',
      'tokens': '3.6B',
      'cost': '$7.2k'
    },
    {
      'rank': 9,
      'model': 'Grok 4.5',
      'agent': 'Cursor CLI',
      'effort': 'xhigh',
      'score': 15.7,
      'ci': 1.5,
      'date': 'Jul 8, 2026',
      'tokens': '1.2B',
      'cost': '$766.02'
    },
    {
      'rank': 10,
      'model': 'Sonnet 5',
      'agent': 'Claude Code',
      'effort': 'max',
      'score': 14.6,
      'ci': 1.5,
      'date': 'Jun 30, 2026',
      'tokens': '17.9B',
      'cost': '$6.9k'
    },
    {
      'rank': 11,
      'model': 'GPT-5.6 Luna',
      'agent': 'Codex',
      'effort': 'max',
      'score': 14.3,
      'ci': 1.3,
      'date': 'Jul 9, 2026',
      'tokens': '11.9B',
      'cost': '$1.6k'
    },
    {
      'rank': 12,
      'model': 'GLM-5.2',
      'agent': 'Claude Code',
      'effort': 'max',
      'score': 4.6,
      'ci': 1,
      'date': 'Jun 13, 2026',
      'tokens': '3.3B',
      'cost': '$3.4k'
    }
  ]
};