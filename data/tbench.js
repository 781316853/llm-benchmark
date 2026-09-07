// 数据源:Terminal-Bench 4.0(斯坦福/Laude)终端命令行 Agent 评测(更新于 2026-09-07)
// 来源:https://www.tbench.ai/leaderboard/terminal-bench/4.0
// 字段说明:model=模型名;effort=推理强度(max/high 等);agent=Agent 框架(Codex/Claude Code 等);
//          score=解决率(%);ci=95% 置信区间;date=模型发布日期;tokens=总 tokens;cost=总成本($)
// 用途:计入总览页综合分(权重 10%)与命中数;「权威基准测试」页完整展示 agent×model 条目。
window.TBENCH = {
  'source': 'Terminal-Bench',
  'url': 'https://www.tbench.ai/leaderboard/terminal-bench/4.0',
  'version': '4.0',
  'updated': '2026-09-07',
  'refreshedAt': '2026-09-07 12:47',
  'stats': {
    'tasks': 66,
    'entries': 18
  },
  'desc': 'Terminal-Bench 4.0:在真实命令行环境中评测编码 Agent(66 个任务,校准了时间/CPU/内存资源并移除饱和任务),按 agent×model 组合计分,解决率越高越好。',
  'models': [
    {
      'rank': 1,
      'model': 'GPT-6 Astra',
      'agent': 'Codex',
      'effort': 'max',
      'score': 58.2,
      'ci': 2.8,
      'date': 'Sep 3, 2026',
      'tokens': '1.5B',
      'cost': '$3.3k'
    },
    {
      'rank': 2,
      'model': 'Fable 5.1',
      'agent': 'Claude Code',
      'effort': 'max',
      'score': 57.9,
      'ci': 3.8,
      'date': 'Sep 1, 2026',
      'tokens': '2.7B',
      'cost': '$6.2k'
    },
    {
      'rank': 2,
      'model': 'GPT-6 Astra',
      'agent': 'Codex',
      'effort': 'xhigh',
      'score': 57.9,
      'ci': 2.7,
      'date': 'Sep 3, 2026',
      'tokens': '1.2B',
      'cost': '$2.4k'
    },
    {
      'rank': 2,
      'model': 'GPT-6 Astra',
      'agent': 'Codex',
      'effort': 'high',
      'score': 57.9,
      'ci': 3,
      'date': 'Sep 3, 2026',
      'tokens': '1.2B',
      'cost': '$2.3k'
    },
    {
      'rank': 5,
      'model': 'GPT-6 Astra',
      'agent': 'Codex',
      'effort': 'medium',
      'score': 54.2,
      'ci': 2.7,
      'date': 'Sep 3, 2026',
      'tokens': '1.1B',
      'cost': '$1.9k'
    },
    {
      'rank': 6,
      'model': 'Opus 5',
      'agent': 'Claude Code',
      'effort': 'max',
      'score': 51.8,
      'ci': 3.4,
      'date': 'Jul 24, 2026',
      'tokens': '6.5B',
      'cost': '$6.0k'
    },
    {
      'rank': 7,
      'model': 'GPT-6 Astra',
      'agent': 'Codex',
      'effort': 'low',
      'score': 50.6,
      'ci': 2.8,
      'date': 'Sep 3, 2026',
      'tokens': '889.8M',
      'cost': '$1.6k'
    },
    {
      'rank': 8,
      'model': 'Fable 5',
      'agent': 'Claude Code',
      'effort': 'max',
      'score': 44.6,
      'ci': 3.9,
      'date': 'Jun 9, 2026',
      'tokens': '3.8B',
      'cost': '$7.3k'
    },
    {
      'rank': 9,
      'model': 'GLM-5.3',
      'agent': 'Claude Code',
      'effort': 'max',
      'score': 41.8,
      'ci': 3.2,
      'date': 'Aug 14, 2026',
      'tokens': '8.7B',
      'cost': '$2.7k'
    },
    {
      'rank': 10,
      'model': 'GPT-5.6 Sol',
      'agent': 'Codex',
      'effort': 'max',
      'score': 37.3,
      'ci': 3.8,
      'date': 'Jun 26, 2026',
      'tokens': '4.4B',
      'cost': '$2.5k'
    },
    {
      'rank': 11,
      'model': 'Opus 4.8',
      'agent': 'Claude Code',
      'effort': 'max',
      'score': 23.6,
      'ci': 3.6,
      'date': 'May 28, 2026',
      'tokens': '6.4B',
      'cost': '$6.5k'
    },
    {
      'rank': 12,
      'model': 'GPT-5.6 Terra',
      'agent': 'Codex',
      'effort': 'max',
      'score': 21.5,
      'ci': 3.3,
      'date': 'Jun 26, 2026',
      'tokens': '5.7B',
      'cost': '$1.7k'
    },
    {
      'rank': 13,
      'model': 'Grok 4.6',
      'agent': 'Grok Build',
      'effort': 'high',
      'score': 20.3,
      'ci': 3.1,
      'date': 'Aug 12, 2026',
      'tokens': '4.0B',
      'cost': '$3.6k'
    },
    {
      'rank': 14,
      'model': 'Gemini 3.8 Flash',
      'agent': 'mini-SWE-agent',
      'effort': 'high',
      'score': 19.1,
      'ci': 3.4,
      'date': 'Sep 2, 2026',
      'tokens': '17.2B',
      'cost': '$1.8k'
    },
    {
      'rank': 15,
      'model': 'GPT-5.6 Luna',
      'agent': 'Codex',
      'effort': 'max',
      'score': 17.3,
      'ci': 2.9,
      'date': 'Jun 26, 2026',
      'tokens': '11.6B',
      'cost': '$346.67'
    },
    {
      'rank': 16,
      'model': 'Grok 4.5',
      'agent': 'Grok Build',
      'effort': 'high',
      'score': 12.4,
      'ci': 2.6,
      'date': 'Jul 16, 2026',
      'tokens': '3.4B',
      'cost': '$2.1k'
    },
    {
      'rank': 16,
      'model': 'Sonnet 5',
      'agent': 'Claude Code',
      'effort': 'max',
      'score': 12.4,
      'ci': 3.1,
      'date': 'Jun 30, 2026',
      'tokens': '21.6B',
      'cost': '$9.6k'
    },
    {
      'rank': 18,
      'model': 'Gemini 3.7 Flash',
      'agent': 'mini-SWE-agent',
      'effort': 'high',
      'score': 11.2,
      'ci': 2.5,
      'date': 'Aug 13, 2026',
      'tokens': '11.1B',
      'cost': '$1.3k'
    }
  ]
};
