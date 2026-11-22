// 数据源:CursorBench(Cursor 官方 · 编码 Agent 实测,更新于 2026-11-22)
// 来源:https://cursor.com/cursorbench(官方:https://cursor.com/cursorbench)
// 字段:models[]=模型级主榜(每模型取最优档位);configs[]=源站全表 model×档位配置
//      score=CursorBench 4.0 分(%);costUsd=平均每任务成本(USD);tokens/steps=每任务平均
// 用途:「权威基准测试」页完整展示;仅展示,不计入综合分与命中数(harness 绑定 Cursor 自家 agent,口径不可比)。
window.CURSORBENCH = {
  'source': 'CursorBench',
  'url': 'https://cursor.com/cursorbench',
  'officialUrl': 'https://cursor.com/cursorbench',
  'version': '4.0',
  'updated': '2026-11-22',
  'refreshedAt': '2026-11-23 03:54',
  'stats': {
    'entries': 53,
    'models': 12
  },
  'desc': 'CursorBench 4.0(Cursor 官方):在 Cursor 自家 agent harness 上评测来自真实 Cursor 会话的模糊、跨文件任务(编辑/重构/排查/意图理解/长任务管理/设计一致性),agentic grader 判定、允许多种正确答案;分数越高越好,成本/耗时越低越优。',
  'models': [
    {
      'model': 'Gemini 4 Neon',
      'effort': 'Extra High',
      'score': 65.4,
      'costUsd': 10.67,
      'tokens': 136273,
      'steps': 73,
      'configs': 4,
      'src': 'official',
      'rank': 1
    },
    {
      'model': 'Gemini 4 Carbon',
      'effort': 'High',
      'score': 61.5,
      'costUsd': 8.52,
      'tokens': 114518,
      'steps': 97,
      'configs': 3,
      'src': 'official',
      'rank': 2
    },
    {
      'model': 'Gemini 4 Hydrogen',
      'effort': 'Extra High',
      'score': 61.4,
      'costUsd': 8.09,
      'tokens': 205981,
      'steps': 113,
      'configs': 4,
      'src': 'official',
      'rank': 3
    },
    {
      'model': 'Fable 5.2',
      'effort': 'Max',
      'score': 61.3,
      'costUsd': 48.11,
      'tokens': 541003,
      'steps': 295,
      'configs': 5,
      'src': 'official',
      'rank': 4
    },
    {
      'model': 'Opus 5.5',
      'effort': 'Max',
      'score': 58.1,
      'costUsd': 11.88,
      'tokens': 213070,
      'steps': 144,
      'configs': 5,
      'src': 'official',
      'rank': 5
    },
    {
      'model': 'Gemini 4 Argon',
      'effort': 'High',
      'score': 56.5,
      'costUsd': 9.14,
      'tokens': 135038,
      'steps': 118,
      'configs': 3,
      'src': 'official',
      'rank': 6
    },
    {
      'model': 'Sonnet 5.5',
      'effort': 'Max',
      'score': 54.4,
      'costUsd': 8.63,
      'tokens': 342273,
      'steps': 199,
      'configs': 5,
      'src': 'official',
      'rank': 7
    },
    {
      'model': 'Grok 4.7',
      'effort': 'Extra High',
      'score': 48.6,
      'costUsd': 10.19,
      'tokens': 90268,
      'steps': 110,
      'configs': 4,
      'src': 'official',
      'rank': 8
    },
    {
      'model': 'Haiku 5.5',
      'effort': 'Max',
      'score': 48.4,
      'costUsd': 1.14,
      'tokens': 344890,
      'steps': 166,
      'configs': 5,
      'src': 'official',
      'rank': 9
    },
    {
      'model': 'Grok 4.6',
      'effort': 'Extra High',
      'score': 44.3,
      'costUsd': 5.26,
      'tokens': 58554,
      'steps': 62,
      'configs': 4,
      'src': 'official',
      'rank': 10
    },
    {
      'model': 'Muse Spark 1.3',
      'effort': 'Max',
      'score': 41.9,
      'costUsd': 2.89,
      'tokens': 56572,
      'steps': 113,
      'configs': 6,
      'src': 'official',
      'rank': 11
    },
    {
      'model': 'GPT-5.6 Sol',
      'effort': 'Max',
      'score': 40.9,
      'costUsd': 7.6,
      'tokens': 40466,
      'steps': 100,
      'configs': 5,
      'src': 'official',
      'rank': 12
    }
  ],
  'configs': [
    {
      'rank': 1,
      'model': 'Gemini 4 Neon',
      'effort': 'Extra High',
      'score': 65.4,
      'costUsd': 10.67,
      'tokens': 136273,
      'steps': 73,
      'src': 'official'
    },
    {
      'rank': 2,
      'model': 'Gemini 4 Neon',
      'effort': 'High',
      'score': 63.7,
      'costUsd': 6.54,
      'tokens': 88596,
      'steps': 56,
      'src': 'official'
    },
    {
      'rank': 3,
      'model': 'Gemini 4 Carbon',
      'effort': 'High',
      'score': 61.5,
      'costUsd': 8.52,
      'tokens': 114518,
      'steps': 97,
      'src': 'official'
    },
    {
      'rank': 4,
      'model': 'Gemini 4 Hydrogen',
      'effort': 'Extra High',
      'score': 61.4,
      'costUsd': 8.09,
      'tokens': 205981,
      'steps': 113,
      'src': 'official'
    },
    {
      'rank': 5,
      'model': 'Fable 5.2',
      'effort': 'Max',
      'score': 61.3,
      'costUsd': 48.11,
      'tokens': 541003,
      'steps': 295,
      'src': 'official'
    },
    {
      'rank': 6,
      'model': 'Gemini 4 Carbon',
      'effort': 'Medium',
      'score': 60.4,
      'costUsd': 7.22,
      'tokens': 103189,
      'steps': 83,
      'src': 'official'
    },
    {
      'rank': 7,
      'model': 'Fable 5.2',
      'effort': 'Extra High',
      'score': 58.8,
      'costUsd': 17.84,
      'tokens': 194918,
      'steps': 122,
      'src': 'official'
    },
    {
      'rank': 8,
      'model': 'Opus 5.5',
      'effort': 'Max',
      'score': 58.1,
      'costUsd': 11.88,
      'tokens': 213070,
      'steps': 144,
      'src': 'official'
    },
    {
      'rank': 9,
      'model': 'Gemini 4 Neon',
      'effort': 'Medium',
      'score': 57.7,
      'costUsd': 3.07,
      'tokens': 47059,
      'steps': 41,
      'src': 'official'
    },
    {
      'rank': 10,
      'model': 'Gemini 4 Hydrogen',
      'effort': 'High',
      'score': 57.3,
      'costUsd': 4.57,
      'tokens': 113807,
      'steps': 77,
      'src': 'official'
    },
    {
      'rank': 11,
      'model': 'Opus 5.5',
      'effort': 'Extra High',
      'score': 56.7,
      'costUsd': 6.54,
      'tokens': 104901,
      'steps': 95,
      'src': 'official'
    },
    {
      'rank': 12,
      'model': 'Fable 5.2',
      'effort': 'High',
      'score': 56.5,
      'costUsd': 10.51,
      'tokens': 108213,
      'steps': 77,
      'src': 'official'
    },
    {
      'rank': 13,
      'model': 'Gemini 4 Argon',
      'effort': 'High',
      'score': 56.5,
      'costUsd': 9.14,
      'tokens': 135038,
      'steps': 118,
      'src': 'official'
    },
    {
      'rank': 14,
      'model': 'Gemini 4 Argon',
      'effort': 'Medium',
      'score': 55.8,
      'costUsd': 7.64,
      'tokens': 128231,
      'steps': 101,
      'src': 'official'
    },
    {
      'rank': 15,
      'model': 'Gemini 4 Carbon',
      'effort': 'Low',
      'score': 55,
      'costUsd': 8.64,
      'tokens': 48526,
      'steps': 127,
      'src': 'official'
    },
    {
      'rank': 16,
      'model': 'Opus 5.5',
      'effort': 'High',
      'score': 54.5,
      'costUsd': 3.87,
      'tokens': 56162,
      'steps': 64,
      'src': 'official'
    },
    {
      'rank': 17,
      'model': 'Sonnet 5.5',
      'effort': 'Max',
      'score': 54.4,
      'costUsd': 8.63,
      'tokens': 342273,
      'steps': 199,
      'src': 'official'
    },
    {
      'rank': 18,
      'model': 'Fable 5.2',
      'effort': 'Medium',
      'score': 54.2,
      'costUsd': 5.01,
      'tokens': 47678,
      'steps': 40,
      'src': 'official'
    },
    {
      'rank': 19,
      'model': 'Fable 5.2',
      'effort': 'Low',
      'score': 53.4,
      'costUsd': 4.26,
      'tokens': 40384,
      'steps': 34,
      'src': 'official'
    },
    {
      'rank': 20,
      'model': 'Opus 5.5',
      'effort': 'Medium',
      'score': 50,
      'costUsd': 2.85,
      'tokens': 39736,
      'steps': 52,
      'src': 'official'
    },
    {
      'rank': 21,
      'model': 'Sonnet 5.5',
      'effort': 'Extra High',
      'score': 49.9,
      'costUsd': 3.13,
      'tokens': 112299,
      'steps': 87,
      'src': 'official'
    },
    {
      'rank': 22,
      'model': 'Grok 4.7',
      'effort': 'Extra High',
      'score': 48.6,
      'costUsd': 10.19,
      'tokens': 90268,
      'steps': 110,
      'src': 'official'
    },
    {
      'rank': 23,
      'model': 'Haiku 5.5',
      'effort': 'Max',
      'score': 48.4,
      'costUsd': 1.14,
      'tokens': 344890,
      'steps': 166,
      'src': 'official'
    },
    {
      'rank': 24,
      'model': 'Gemini 4 Argon',
      'effort': 'Low',
      'score': 47.9,
      'costUsd': 7.96,
      'tokens': 40541,
      'steps': 121,
      'src': 'official'
    },
    {
      'rank': 25,
      'model': 'Gemini 4 Hydrogen',
      'effort': 'Medium',
      'score': 46.4,
      'costUsd': 1.28,
      'tokens': 43606,
      'steps': 45,
      'src': 'official'
    },
    {
      'rank': 26,
      'model': 'Grok 4.7',
      'effort': 'High',
      'score': 46,
      'costUsd': 6.88,
      'tokens': 65850,
      'steps': 84,
      'src': 'official'
    },
    {
      'rank': 27,
      'model': 'Gemini 4 Neon',
      'effort': 'Low',
      'score': 45.5,
      'costUsd': 1.26,
      'tokens': 19580,
      'steps': 26,
      'src': 'official'
    },
    {
      'rank': 28,
      'model': 'Haiku 5.5',
      'effort': 'Extra High',
      'score': 45.2,
      'costUsd': 0.56,
      'tokens': 149314,
      'steps': 94,
      'src': 'official'
    },
    {
      'rank': 29,
      'model': 'Grok 4.6',
      'effort': 'Extra High',
      'score': 44.3,
      'costUsd': 5.26,
      'tokens': 58554,
      'steps': 62,
      'src': 'official'
    },
    {
      'rank': 30,
      'model': 'Sonnet 5.5',
      'effort': 'High',
      'score': 43.8,
      'costUsd': 1.41,
      'tokens': 43088,
      'steps': 48,
      'src': 'official'
    },
    {
      'rank': 31,
      'model': 'Opus 5.5',
      'effort': 'Low',
      'score': 42.7,
      'costUsd': 1.43,
      'tokens': 19497,
      'steps': 32,
      'src': 'official'
    },
    {
      'rank': 32,
      'model': 'Grok 4.7',
      'effort': 'Medium',
      'score': 42.5,
      'costUsd': 5.52,
      'tokens': 41173,
      'steps': 70,
      'src': 'official'
    },
    {
      'rank': 33,
      'model': 'Muse Spark 1.3',
      'effort': 'Max',
      'score': 41.9,
      'costUsd': 2.89,
      'tokens': 56572,
      'steps': 113,
      'src': 'official'
    },
    {
      'rank': 34,
      'model': 'Grok 4.6',
      'effort': 'High',
      'score': 41.3,
      'costUsd': 4.28,
      'tokens': 46330,
      'steps': 52,
      'src': 'official'
    },
    {
      'rank': 35,
      'model': 'GPT-5.6 Sol',
      'effort': 'Max',
      'score': 40.9,
      'costUsd': 7.6,
      'tokens': 40466,
      'steps': 100,
      'src': 'official'
    },
    {
      'rank': 36,
      'model': 'Grok 4.6',
      'effort': 'Medium',
      'score': 38.9,
      'costUsd': 2.59,
      'tokens': 26374,
      'steps': 40,
      'src': 'official'
    },
    {
      'rank': 37,
      'model': 'Haiku 5.5',
      'effort': 'High',
      'score': 37.5,
      'costUsd': 0.31,
      'tokens': 77196,
      'steps': 61,
      'src': 'official'
    },
    {
      'rank': 38,
      'model': 'GPT-5.6 Sol',
      'effort': 'Extra High',
      'score': 37.4,
      'costUsd': 4.32,
      'tokens': 23921,
      'steps': 58,
      'src': 'official'
    },
    {
      'rank': 39,
      'model': 'Muse Spark 1.3',
      'effort': 'Extra High',
      'score': 34.6,
      'costUsd': 2.33,
      'tokens': 47142,
      'steps': 96,
      'src': 'official'
    },
    {
      'rank': 40,
      'model': 'Sonnet 5.5',
      'effort': 'Medium',
      'score': 34.3,
      'costUsd': 0.63,
      'tokens': 19144,
      'steps': 26,
      'src': 'official'
    },
    {
      'rank': 41,
      'model': 'Haiku 5.5',
      'effort': 'Medium',
      'score': 34.2,
      'costUsd': 0.17,
      'tokens': 43441,
      'steps': 41,
      'src': 'official'
    },
    {
      'rank': 42,
      'model': 'GPT-5.6 Sol',
      'effort': 'High',
      'score': 33.2,
      'costUsd': 3,
      'tokens': 16319,
      'steps': 44,
      'src': 'official'
    },
    {
      'rank': 43,
      'model': 'Grok 4.6',
      'effort': 'Low',
      'score': 33.1,
      'costUsd': 1.76,
      'tokens': 16863,
      'steps': 33,
      'src': 'official'
    },
    {
      'rank': 44,
      'model': 'Muse Spark 1.3',
      'effort': 'High',
      'score': 32.1,
      'costUsd': 1.97,
      'tokens': 36562,
      'steps': 85,
      'src': 'official'
    },
    {
      'rank': 45,
      'model': 'Sonnet 5.5',
      'effort': 'Low',
      'score': 31.8,
      'costUsd': 0.44,
      'tokens': 13798,
      'steps': 21,
      'src': 'official'
    },
    {
      'rank': 46,
      'model': 'Grok 4.7',
      'effort': 'Low',
      'score': 31.5,
      'costUsd': 2.73,
      'tokens': 14493,
      'steps': 42,
      'src': 'official'
    },
    {
      'rank': 47,
      'model': 'Muse Spark 1.3',
      'effort': 'Medium',
      'score': 31.3,
      'costUsd': 1.75,
      'tokens': 32034,
      'steps': 77,
      'src': 'official'
    },
    {
      'rank': 48,
      'model': 'GPT-5.6 Sol',
      'effort': 'Medium',
      'score': 28.7,
      'costUsd': 1.97,
      'tokens': 10554,
      'steps': 34,
      'src': 'official'
    },
    {
      'rank': 49,
      'model': 'Haiku 5.5',
      'effort': 'Low',
      'score': 27.8,
      'costUsd': 0.08,
      'tokens': 23673,
      'steps': 27,
      'src': 'official'
    },
    {
      'rank': 50,
      'model': 'Muse Spark 1.3',
      'effort': 'Low',
      'score': 27.5,
      'costUsd': 1.13,
      'tokens': 20673,
      'steps': 58,
      'src': 'official'
    },
    {
      'rank': 51,
      'model': 'Gemini 4 Hydrogen',
      'effort': 'Low',
      'score': 23.9,
      'costUsd': 0.28,
      'tokens': 10497,
      'steps': 22,
      'src': 'official'
    },
    {
      'rank': 52,
      'model': 'GPT-5.6 Sol',
      'effort': 'Low',
      'score': 23,
      'costUsd': 0.98,
      'tokens': 5206,
      'steps': 22,
      'src': 'official'
    },
    {
      'rank': 53,
      'model': 'Muse Spark 1.3',
      'effort': 'Minimal',
      'score': 21.3,
      'costUsd': 0.69,
      'tokens': 12789,
      'steps': 42,
      'src': 'official'
    }
  ]
};
