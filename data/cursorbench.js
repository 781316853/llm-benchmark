// 数据源:CursorBench(Cursor 官方 · 编码 Agent 实测,更新于 2026-09-24)
// 来源:https://cursor.com/cursorbench(官方:https://cursor.com/cursorbench)
// 字段:models[]=模型级主榜(每模型取最优档位);configs[]=源站全表 model×档位配置
//      score=CursorBench 4.0 分(%);costUsd=平均每任务成本(USD);tokens/steps=每任务平均
// 用途:「权威基准测试」页完整展示;仅展示,不计入综合分与命中数(harness 绑定 Cursor 自家 agent,口径不可比)。
window.CURSORBENCH = {
  'source': 'CursorBench',
  'url': 'https://cursor.com/cursorbench',
  'officialUrl': 'https://cursor.com/cursorbench',
  'version': '4.0',
  'updated': '2026-09-24',
  'refreshedAt': '2026-09-24 14:23',
  'stats': {
    'entries': 52,
    'models': 12
  },
  'desc': 'CursorBench 4.0(Cursor 官方):在 Cursor 自家 agent harness 上评测来自真实 Cursor 会话的模糊、跨文件任务(编辑/重构/排查/意图理解/长任务管理/设计一致性),agentic grader 判定、允许多种正确答案;分数越高越好,成本/耗时越低越优。',
  'models': [
    {
      'model': 'Opus 5.5',
      'effort': 'Max',
      'score': 57.8,
      'costUsd': 13.43,
      'tokens': 218363,
      'steps': 185,
      'configs': 5,
      'src': 'official',
      'rank': 1
    },
    {
      'model': 'Fable 5.1',
      'effort': 'Max',
      'score': 51.8,
      'costUsd': 17.28,
      'tokens': 117236,
      'steps': 128,
      'configs': 5,
      'src': 'official',
      'rank': 2
    },
    {
      'model': 'Opus 5',
      'effort': 'Max',
      'score': 46.6,
      'costUsd': 11.95,
      'tokens': 85384,
      'steps': 106,
      'configs': 5,
      'src': 'official',
      'rank': 3
    },
    {
      'model': 'Grok 4.7',
      'effort': 'Extra High',
      'score': 46.3,
      'costUsd': 6.01,
      'tokens': 70141,
      'steps': 88,
      'configs': 4,
      'src': 'official',
      'rank': 4
    },
    {
      'model': 'GPT-5.6 Sol',
      'effort': 'Max',
      'score': 41.7,
      'costUsd': 8.23,
      'tokens': 42944,
      'steps': 99,
      'configs': 5,
      'src': 'official',
      'rank': 5
    },
    {
      'model': 'Muse Spark 1.3',
      'effort': 'Max',
      'score': 41.6,
      'costUsd': 2.64,
      'tokens': 52005,
      'steps': 98,
      'configs': 6,
      'src': 'official',
      'rank': 6
    },
    {
      'model': 'Grok 4.6',
      'effort': 'Extra High',
      'score': 41.4,
      'costUsd': 6.1,
      'tokens': 49814,
      'steps': 56,
      'configs': 4,
      'src': 'official',
      'rank': 7
    },
    {
      'model': 'GPT-5.6 Terra',
      'effort': 'Max',
      'score': 41.3,
      'costUsd': 5.14,
      'tokens': 60814,
      'steps': 107,
      'configs': 5,
      'src': 'official',
      'rank': 8
    },
    {
      'model': 'Gemini 3.8 Flash',
      'effort': 'High',
      'score': 39.6,
      'costUsd': 4.7,
      'tokens': 162565,
      'steps': 324,
      'configs': 2,
      'src': 'official',
      'rank': 9
    },
    {
      'model': 'GPT-5.6 Luna',
      'effort': 'Max',
      'score': 35.9,
      'costUsd': 1.03,
      'tokens': 87284,
      'steps': 208,
      'configs': 5,
      'src': 'official',
      'rank': 10
    },
    {
      'model': 'Sonnet 5',
      'effort': 'Max',
      'score': 34.1,
      'costUsd': 7.17,
      'tokens': 149257,
      'steps': 140,
      'configs': 5,
      'src': 'official',
      'rank': 11
    },
    {
      'model': 'Composer 2.5',
      'effort': null,
      'score': 27.7,
      'costUsd': 0.68,
      'tokens': 17347,
      'steps': 41,
      'configs': 1,
      'src': 'official',
      'rank': 12
    }
  ],
  'configs': [
    {
      'rank': 1,
      'model': 'Opus 5.5',
      'effort': 'Max',
      'score': 57.8,
      'costUsd': 13.43,
      'tokens': 218363,
      'steps': 185,
      'src': 'official'
    },
    {
      'rank': 2,
      'model': 'Opus 5.5',
      'effort': 'Extra High',
      'score': 56,
      'costUsd': 6.98,
      'tokens': 101083,
      'steps': 109,
      'src': 'official'
    },
    {
      'rank': 3,
      'model': 'Opus 5.5',
      'effort': 'High',
      'score': 56,
      'costUsd': 3.97,
      'tokens': 53078,
      'steps': 68,
      'src': 'official'
    },
    {
      'rank': 4,
      'model': 'Opus 5.5',
      'effort': 'Medium',
      'score': 52.5,
      'costUsd': 2.91,
      'tokens': 37954,
      'steps': 54,
      'src': 'official'
    },
    {
      'rank': 5,
      'model': 'Fable 5.1',
      'effort': 'Max',
      'score': 51.8,
      'costUsd': 17.28,
      'tokens': 117236,
      'steps': 128,
      'src': 'official'
    },
    {
      'rank': 6,
      'model': 'Fable 5.1',
      'effort': 'Extra High',
      'score': 51.6,
      'costUsd': 13.01,
      'tokens': 87294,
      'steps': 101,
      'src': 'official'
    },
    {
      'rank': 7,
      'model': 'Fable 5.1',
      'effort': 'High',
      'score': 49.2,
      'costUsd': 9.08,
      'tokens': 58438,
      'steps': 77,
      'src': 'official'
    },
    {
      'rank': 8,
      'model': 'Fable 5.1',
      'effort': 'Medium',
      'score': 46.8,
      'costUsd': 7.05,
      'tokens': 45411,
      'steps': 63,
      'src': 'official'
    },
    {
      'rank': 9,
      'model': 'Opus 5',
      'effort': 'Max',
      'score': 46.6,
      'costUsd': 11.95,
      'tokens': 85384,
      'steps': 106,
      'src': 'official'
    },
    {
      'rank': 10,
      'model': 'Grok 4.7',
      'effort': 'Extra High',
      'score': 46.3,
      'costUsd': 6.01,
      'tokens': 70141,
      'steps': 88,
      'src': 'official'
    },
    {
      'rank': 11,
      'model': 'Opus 5',
      'effort': 'Extra High',
      'score': 46.1,
      'costUsd': 11.43,
      'tokens': 80094,
      'steps': 103,
      'src': 'official'
    },
    {
      'rank': 12,
      'model': 'Fable 5.1',
      'effort': 'Low',
      'score': 45.1,
      'costUsd': 5.44,
      'tokens': 34795,
      'steps': 51,
      'src': 'official'
    },
    {
      'rank': 13,
      'model': 'Opus 5',
      'effort': 'High',
      'score': 44.7,
      'costUsd': 9,
      'tokens': 61405,
      'steps': 86,
      'src': 'official'
    },
    {
      'rank': 14,
      'model': 'Grok 4.7',
      'effort': 'High',
      'score': 43.9,
      'costUsd': 4.69,
      'tokens': 56382,
      'steps': 71,
      'src': 'official'
    },
    {
      'rank': 15,
      'model': 'Opus 5.5',
      'effort': 'Low',
      'score': 43.7,
      'costUsd': 1.17,
      'tokens': 15811,
      'steps': 28,
      'src': 'official'
    },
    {
      'rank': 16,
      'model': 'Opus 5',
      'effort': 'Medium',
      'score': 43.3,
      'costUsd': 6.94,
      'tokens': 45272,
      'steps': 72,
      'src': 'official'
    },
    {
      'rank': 17,
      'model': 'GPT-5.6 Sol',
      'effort': 'Max',
      'score': 41.7,
      'costUsd': 8.23,
      'tokens': 42944,
      'steps': 99,
      'src': 'official'
    },
    {
      'rank': 18,
      'model': 'Grok 4.7',
      'effort': 'Medium',
      'score': 41.6,
      'costUsd': 3.49,
      'tokens': 36683,
      'steps': 60,
      'src': 'official'
    },
    {
      'rank': 19,
      'model': 'Muse Spark 1.3',
      'effort': 'Max',
      'score': 41.6,
      'costUsd': 2.64,
      'tokens': 52005,
      'steps': 98,
      'src': 'official'
    },
    {
      'rank': 20,
      'model': 'Grok 4.6',
      'effort': 'Extra High',
      'score': 41.4,
      'costUsd': 6.1,
      'tokens': 49814,
      'steps': 56,
      'src': 'official'
    },
    {
      'rank': 21,
      'model': 'GPT-5.6 Terra',
      'effort': 'Max',
      'score': 41.3,
      'costUsd': 5.14,
      'tokens': 60814,
      'steps': 107,
      'src': 'official'
    },
    {
      'rank': 22,
      'model': 'Opus 5',
      'effort': 'Low',
      'score': 40.7,
      'costUsd': 4.87,
      'tokens': 31995,
      'steps': 57,
      'src': 'official'
    },
    {
      'rank': 23,
      'model': 'Grok 4.6',
      'effort': 'High',
      'score': 40.4,
      'costUsd': 5.2,
      'tokens': 41387,
      'steps': 48,
      'src': 'official'
    },
    {
      'rank': 24,
      'model': 'Gemini 3.8 Flash',
      'effort': 'High',
      'score': 39.6,
      'costUsd': 4.7,
      'tokens': 162565,
      'steps': 324,
      'src': 'official'
    },
    {
      'rank': 25,
      'model': 'GPT-5.6 Sol',
      'effort': 'Extra High',
      'score': 37.7,
      'costUsd': 4.4,
      'tokens': 24729,
      'steps': 55,
      'src': 'official'
    },
    {
      'rank': 26,
      'model': 'Muse Spark 1.3',
      'effort': 'Extra High',
      'score': 37.5,
      'costUsd': 2.1,
      'tokens': 40891,
      'steps': 83,
      'src': 'official'
    },
    {
      'rank': 27,
      'model': 'Gemini 3.8 Flash',
      'effort': 'Medium',
      'score': 37.3,
      'costUsd': 4.06,
      'tokens': 128364,
      'steps': 290,
      'src': 'official'
    },
    {
      'rank': 28,
      'model': 'Grok 4.6',
      'effort': 'Medium',
      'score': 36.1,
      'costUsd': 3.48,
      'tokens': 24893,
      'steps': 40,
      'src': 'official'
    },
    {
      'rank': 29,
      'model': 'GPT-5.6 Luna',
      'effort': 'Max',
      'score': 35.9,
      'costUsd': 1.03,
      'tokens': 87284,
      'steps': 208,
      'src': 'official'
    },
    {
      'rank': 30,
      'model': 'GPT-5.6 Sol',
      'effort': 'High',
      'score': 35.7,
      'costUsd': 2.85,
      'tokens': 16174,
      'steps': 41,
      'src': 'official'
    },
    {
      'rank': 31,
      'model': 'Sonnet 5',
      'effort': 'Max',
      'score': 34.1,
      'costUsd': 7.17,
      'tokens': 149257,
      'steps': 140,
      'src': 'official'
    },
    {
      'rank': 32,
      'model': 'GPT-5.6 Terra',
      'effort': 'Extra High',
      'score': 33.6,
      'costUsd': 1.81,
      'tokens': 23436,
      'steps': 43,
      'src': 'official'
    },
    {
      'rank': 33,
      'model': 'Grok 4.6',
      'effort': 'Low',
      'score': 33.4,
      'costUsd': 2.25,
      'tokens': 16307,
      'steps': 32,
      'src': 'official'
    },
    {
      'rank': 34,
      'model': 'Muse Spark 1.3',
      'effort': 'High',
      'score': 33.4,
      'costUsd': 1.66,
      'tokens': 30654,
      'steps': 69,
      'src': 'official'
    },
    {
      'rank': 35,
      'model': 'Grok 4.7',
      'effort': 'Low',
      'score': 33.1,
      'costUsd': 1.58,
      'tokens': 15677,
      'steps': 40,
      'src': 'official'
    },
    {
      'rank': 36,
      'model': 'GPT-5.6 Luna',
      'effort': 'Extra High',
      'score': 33,
      'costUsd': 0.44,
      'tokens': 40598,
      'steps': 98,
      'src': 'official'
    },
    {
      'rank': 37,
      'model': 'Muse Spark 1.3',
      'effort': 'Medium',
      'score': 32.6,
      'costUsd': 1.49,
      'tokens': 27255,
      'steps': 64,
      'src': 'official'
    },
    {
      'rank': 38,
      'model': 'Sonnet 5',
      'effort': 'Extra High',
      'score': 32,
      'costUsd': 4.55,
      'tokens': 83373,
      'steps': 102,
      'src': 'official'
    },
    {
      'rank': 39,
      'model': 'GPT-5.6 Sol',
      'effort': 'Medium',
      'score': 31.1,
      'costUsd': 1.77,
      'tokens': 10111,
      'steps': 32,
      'src': 'official'
    },
    {
      'rank': 40,
      'model': 'Sonnet 5',
      'effort': 'High',
      'score': 30.8,
      'costUsd': 3.48,
      'tokens': 61146,
      'steps': 85,
      'src': 'official'
    },
    {
      'rank': 41,
      'model': 'GPT-5.6 Terra',
      'effort': 'High',
      'score': 30.7,
      'costUsd': 1.11,
      'tokens': 13162,
      'steps': 33,
      'src': 'official'
    },
    {
      'rank': 42,
      'model': 'GPT-5.6 Luna',
      'effort': 'High',
      'score': 29.4,
      'costUsd': 0.25,
      'tokens': 23368,
      'steps': 64,
      'src': 'official'
    },
    {
      'rank': 43,
      'model': 'Muse Spark 1.3',
      'effort': 'Low',
      'score': 29.3,
      'costUsd': 0.93,
      'tokens': 17483,
      'steps': 47,
      'src': 'official'
    },
    {
      'rank': 44,
      'model': 'Sonnet 5',
      'effort': 'Medium',
      'score': 28,
      'costUsd': 2.31,
      'tokens': 39114,
      'steps': 65,
      'src': 'official'
    },
    {
      'rank': 45,
      'model': 'Composer 2.5',
      'effort': null,
      'score': 27.7,
      'costUsd': 0.68,
      'tokens': 17347,
      'steps': 41,
      'src': 'official'
    },
    {
      'rank': 46,
      'model': 'GPT-5.6 Terra',
      'effort': 'Medium',
      'score': 27.6,
      'costUsd': 0.64,
      'tokens': 7307,
      'steps': 25,
      'src': 'official'
    },
    {
      'rank': 47,
      'model': 'GPT-5.6 Terra',
      'effort': 'Low',
      'score': 25.2,
      'costUsd': 0.52,
      'tokens': 5914,
      'steps': 23,
      'src': 'official'
    },
    {
      'rank': 48,
      'model': 'GPT-5.6 Sol',
      'effort': 'Low',
      'score': 24.6,
      'costUsd': 0.87,
      'tokens': 4885,
      'steps': 21,
      'src': 'official'
    },
    {
      'rank': 49,
      'model': 'Muse Spark 1.3',
      'effort': 'Minimal',
      'score': 24.3,
      'costUsd': 0.56,
      'tokens': 10620,
      'steps': 34,
      'src': 'official'
    },
    {
      'rank': 50,
      'model': 'Sonnet 5',
      'effort': 'Low',
      'score': 24.1,
      'costUsd': 1.39,
      'tokens': 23772,
      'steps': 46,
      'src': 'official'
    },
    {
      'rank': 51,
      'model': 'GPT-5.6 Luna',
      'effort': 'Medium',
      'score': 22.2,
      'costUsd': 0.08,
      'tokens': 7642,
      'steps': 32,
      'src': 'official'
    },
    {
      'rank': 52,
      'model': 'GPT-5.6 Luna',
      'effort': 'Low',
      'score': 16,
      'costUsd': 0.03,
      'tokens': 3288,
      'steps': 18,
      'src': 'official'
    }
  ]
};
