// 数据源:ProgramBench(cleanroom 程序重建·编码 Agent,更新于 2026-09-12)
// 来源:https://programbench.com/(官方:https://programbench.com/)
// 字段说明:model=模型名;effort=推理档位;agent=代理;score=Resolved 完全解决率(%);almost=Almost(≥95% 行为测试通过率,%)
// 用途:「权威基准测试」页展示,仅参考,不计入综合分/命中数。
window.PROGRAMBENCH = {
  'source': 'ProgramBench',
  'url': 'https://programbench.com/',
  'officialUrl': 'https://programbench.com/',
  'updated': '2026-09-12',
  'refreshedAt': '2026-09-12 10:45',
  'stats': {
    'tasks': 200,
    'entries': 21
  },
  'desc': 'ProgramBench:仅给编译后二进制与文档,智能体需从零重建完整代码库并复现原程序行为(200 个真实开源项目任务,行为级隐藏测试,不联网、禁止反编译);Resolved 为主指标、Almost(≥95% 行为测试通过)为辅助,均越高越好。',
  'models': [
    {
      'rank': 1,
      'model': 'Claude Opus 5',
      'effort': 'xhigh',
      'agent': 'mini-SWE-agent',
      'score': 4.5,
      'almost': 37
    },
    {
      'rank': 2,
      'model': 'GPT-5.6 Sol',
      'effort': 'xhigh',
      'agent': 'mini-SWE-agent',
      'score': 1,
      'almost': 15.5
    },
    {
      'rank': 3,
      'model': 'GPT 5.5',
      'effort': 'xhigh',
      'agent': 'mini-SWE-agent',
      'score': 0.5,
      'almost': 13.5
    },
    {
      'rank': 4,
      'model': 'GPT 5.5',
      'effort': 'high',
      'agent': 'mini-SWE-agent',
      'score': 0.5,
      'almost': 5
    },
    {
      'rank': 5,
      'model': 'Gemini 3.6 Flash',
      'effort': null,
      'agent': 'mini-SWE-agent',
      'score': 0.5,
      'almost': 4
    },
    {
      'rank': 6,
      'model': 'GPT-5.6 Sol',
      'effort': null,
      'agent': 'mini-SWE-agent',
      'score': 0.5,
      'almost': 2.5
    },
    {
      'rank': 7,
      'model': 'Claude Opus 4.8',
      'effort': 'xhigh',
      'agent': 'mini-SWE-agent',
      'score': 0,
      'almost': 16.5
    },
    {
      'rank': 8,
      'model': 'GLM-5.2',
      'effort': null,
      'agent': 'mini-SWE-agent',
      'score': 0,
      'almost': 8.5
    },
    {
      'rank': 9,
      'model': 'Gemini 3.7 Flash',
      'effort': null,
      'agent': 'mini-SWE-agent',
      'score': 0,
      'almost': 5.5
    },
    {
      'rank': 10,
      'model': 'Claude Opus 4.7',
      'effort': 'xhigh',
      'agent': 'mini-SWE-agent',
      'score': 0,
      'almost': 4.5
    },
    {
      'rank': 11,
      'model': 'Gemini 3.5 Flash',
      'effort': null,
      'agent': 'mini-SWE-agent',
      'score': 0,
      'almost': 3
    },
    {
      'rank': 12,
      'model': 'Claude Opus 4.7',
      'effort': null,
      'agent': 'mini-SWE-agent',
      'score': 0,
      'almost': 3
    },
    {
      'rank': 13,
      'model': 'Claude Opus 4.6',
      'effort': null,
      'agent': 'mini-SWE-agent',
      'score': 0,
      'almost': 2.5
    },
    {
      'rank': 14,
      'model': 'GPT 5.5',
      'effort': null,
      'agent': 'mini-SWE-agent',
      'score': 0,
      'almost': 1.5
    },
    {
      'rank': 15,
      'model': 'Claude Sonnet 4.6',
      'effort': null,
      'agent': 'mini-SWE-agent',
      'score': 0,
      'almost': 1
    },
    {
      'rank': 16,
      'model': 'GPT 5.4',
      'effort': null,
      'agent': 'mini-SWE-agent',
      'score': 0,
      'almost': 0
    },
    {
      'rank': 17,
      'model': 'Gemini 3.1 Pro',
      'effort': null,
      'agent': 'mini-SWE-agent',
      'score': 0,
      'almost': 0
    },
    {
      'rank': 18,
      'model': 'Gemini 3 Flash',
      'effort': null,
      'agent': 'mini-SWE-agent',
      'score': 0,
      'almost': 0
    },
    {
      'rank': 19,
      'model': 'Claude Haiku 4.5',
      'effort': null,
      'agent': 'mini-SWE-agent',
      'score': 0,
      'almost': 0
    },
    {
      'rank': 20,
      'model': 'GPT 5.4 mini',
      'effort': null,
      'agent': 'mini-SWE-agent',
      'score': 0,
      'almost': 0
    },
    {
      'rank': 21,
      'model': 'GPT 5 mini',
      'effort': null,
      'agent': 'mini-SWE-agent',
      'score': 0,
      'almost': 0
    }
  ]
};
