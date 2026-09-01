// 数据源3:llm2014 Agentic(原 code_v3)基准快照(中文个人私有题库,按月归档)
// 来源:https://llm2014.github.io/llm_benchmark/  (raw: github.com/llm2014/llm_benchmark)
// 源站已把该类别显示为 "Agentic";档位/项目说明文案来自源站 docs/assets/i18n.js(每日刷新时同步)。
// 单元格原始值形如 "7/A"(扣分数 / 字母等级,数字越小越好),或 Pass / Failed(n/m) / Skip / Pending;
// 2026-08 起等级单元格可带单任务测试成本括号,如 "7/A+(90.52)"(成本 ¥)。
// 项目列表名保留源站字母代号(如 "MacOS App(C)"),对应 notes.projects 的项目说明;
// 2026-08 起项目含新增 "Metal(L)" 与 "Rust App(G)",模型名可能不带厂商前缀(如 "Opus 5 (max)")。
// 数值化规则在 js/data.js 中统一处理。
// 注:月份键为报告月(reportDate),与新版站点数据集键一致;2026-04 报告月(csv 2026-01)
// 为旧评分制(原始分钟数 + "总扣分",无字母等级),口径不兼容,已排除。
window.LLM2014 = {
  source: "llm2014 Agentic",
  url: "https://llm2014.github.io/llm_benchmark/#category=code_v3&dataset=code_v3%7C2026-09%7C0",
  updated: "2026-09-01",
  refreshedAt: "2026-09-01 14:04",
  desc: "个人私有滚动题库的长期跟踪评测,要求从零构建实际应用(MacOS/Flutter/Web/Game/Rust 等)并按通过情况评级。",
  // 官方说明文案(源站 i18n.js):grades=档位说明,projects=项目说明(字母代号 -> 项目构成)
  notes: {
  'cellFormat': '1/A 代表扣分数/档位',
  'grades': [
    {
      'k': 'A',
      't': '档：几乎不犯错，只犯微小的 UI、交互类错误。'
    },
    {
      'k': 'B',
      't': '档：大概率会错，但只要描述错误现象，都可以1轮修复。'
    },
    {
      'k': 'C',
      't': '档：大概率错，但需要交互更多轮，模型能自主推进修复，无需人工提供辅助。'
    },
    {
      'k': 'D',
      't': '档：必须有人工提供大量 log、视觉描述，协助操作等才能修复问题。'
    },
    {
      'k': 'Failed',
      't': '知识或方法论不够，即便有人帮助，也无法完成任务。'
    },
    {
      'k': 'Pass',
      't': '：前代模型已经拿到 A，不再测试。'
    },
    {
      'k': 'Skip',
      't': '：各方面原因，不进行测试。'
    },
    {
      'k': 'Pending',
      't': '：正在测试中。'
    }
  ],
  'halfGrade': '同档位中，只有少数轮次出现问题，大部分情况表现良好时，会升半档，用 B+、C+ 来表示。',
  'projects': [
    {
      'k': 'C',
      't': 'MacOS App + OpenGL'
    },
    {
      'k': 'E',
      't': 'Web + WASM'
    },
    {
      'k': 'F',
      't': 'Godot + 物理算法'
    },
    {
      'k': 'G',
      't': 'Rust App'
    },
    {
      'k': 'H',
      't': 'Web + 3D 建模'
    },
    {
      'k': 'I',
      't': 'iOS App + Rust Server'
    },
    {
      'k': 'J',
      't': 'Web + 2D 动画'
    },
    {
      'k': 'K',
      't': '鸿蒙 App + C++ 本地插件'
    },
    {
      'k': 'L',
      't': 'Metal + 图形算法优化'
    }
  ]
},
  // 月份 -> { projects: 任务列名数组(含字母代号), rows: [{model, cells:[原始值...], ide, think, unprompted}] }
  months: {
  '2026-06': {
    'projects': [
      'MacOS App(C)',
      'Flutter(D)',
      'Web(E)',
      'Game(F)',
      'Rust App(G)'
    ],
    'rows': [
      {
        'model': 'GPT-5.5 (high)',
        'cells': [
          '7/A',
          '6/A',
          '2/A',
          '12/A',
          '47/C'
        ],
        'unprompted': 1,
        'ide': 'Codex App',
        'think': 1
      },
      {
        'model': 'Opus 4.8 (high)',
        'cells': [
          'Pass',
          'Pass',
          '10/B+',
          '7/A',
          '20/B'
        ],
        'unprompted': 2,
        'ide': 'Claude Code',
        'think': 1
      },
      {
        'model': 'GLM-5.2 (max)',
        'cells': [
          '16/B+',
          '6/A',
          '8/A',
          '8/A',
          '43/C'
        ],
        'unprompted': 0,
        'ide': 'Claude Code',
        'think': 1
      },
      {
        'model': 'GPT-5.4 (high)',
        'cells': [
          '9/A',
          '10/A',
          '8/B',
          '18/B',
          '58/C'
        ],
        'unprompted': 1,
        'ide': 'Codex CLI',
        'think': 1
      },
      {
        'model': 'Opus 4.6',
        'cells': [
          '9/A',
          '11/A',
          '12/B+',
          '15/B',
          '66/C'
        ],
        'unprompted': 4,
        'ide': 'Claude Code',
        'think': 0
      },
      {
        'model': 'Opus 4.5',
        'cells': [
          '9/B',
          '14/B',
          '18/B',
          'Skip',
          'Skip'
        ],
        'unprompted': 4,
        'ide': 'Claude Code',
        'think': 0
      },
      {
        'model': 'Sonnet 5 (high)',
        'cells': [
          'Pass',
          'Pass',
          '18/B',
          '14/B+',
          'Pending'
        ],
        'unprompted': 0,
        'ide': 'Claude Code',
        'think': 1
      },
      {
        'model': 'Hy3 (high)',
        'cells': [
          '11/B',
          '12/B',
          '12/B',
          '13/B',
          'Pending'
        ],
        'unprompted': 0,
        'ide': 'Claude Code',
        'think': 1
      },
      {
        'model': 'Sonnet 4.6 (high)',
        'cells': [
          'Pass',
          'Pass',
          'Pass',
          '26/C+',
          '69/C'
        ],
        'unprompted': 1,
        'ide': 'Claude Code',
        'think': 1
      },
      {
        'model': 'Gemini 3.5 Flash (high)',
        'cells': [
          '21/C',
          '15/B',
          '20/C',
          '17/B',
          'Skip'
        ],
        'unprompted': 3,
        'ide': 'Gemini CLI',
        'think': 1
      },
      {
        'model': 'GLM-5.1',
        'cells': [
          '20/C+',
          '14/B',
          '15/B',
          '60/D',
          'Failed(2/9)'
        ],
        'unprompted': 3,
        'ide': 'Claude Code',
        'think': 1
      },
      {
        'model': 'DeepSeek V4 Pro (max)',
        'cells': [
          '16/C',
          '8/B',
          '21/C',
          '36/C',
          'Failed(0/9)'
        ],
        'unprompted': 0,
        'ide': 'Claude Code',
        'think': 1
      },
      {
        'model': 'Qwen3.7-Max',
        'cells': [
          'Failed(2/12)',
          '14/B',
          '17/C+',
          '46/D',
          'Skip'
        ],
        'unprompted': 0,
        'ide': 'Claude Code',
        'think': 1
      },
      {
        'model': 'Kimi-K2.7-Code',
        'cells': [
          '30/C',
          '18/C',
          '26/C',
          '55/D',
          'Skip'
        ],
        'unprompted': 0,
        'ide': 'Kimi Code',
        'think': 1
      },
      {
        'model': 'DeepSeek V4 Pro (high)',
        'cells': [
          '37/C',
          '20/C',
          '41/D',
          '41/D',
          'Skip'
        ],
        'unprompted': 1,
        'ide': 'Claude Code',
        'think': 1
      },
      {
        'model': 'Kimi-K2.6 (Think)',
        'cells': [
          '49/D',
          '17/C',
          '33/C',
          'Failed(8/9)',
          'Failed(6/9)'
        ],
        'unprompted': 0,
        'ide': 'Kimi Code',
        'think': 1
      },
      {
        'model': 'DeepSeek V4 Flash (max)',
        'cells': [
          'Failed(5/12)',
          '19/C',
          '32/C',
          '48/D',
          'Skip'
        ],
        'unprompted': 0,
        'ide': 'Claude Code',
        'think': 1
      },
      {
        'model': 'Hy3 Preview',
        'cells': [
          '42/D',
          '27/C',
          '34/C',
          'Skip',
          'Failed(0/9)'
        ],
        'unprompted': 0,
        'ide': 'Claude Code',
        'think': 1
      },
      {
        'model': 'MiniMax-M3',
        'cells': [
          'Skip',
          '19/C+',
          '51/D+',
          'Skip',
          'Skip'
        ],
        'unprompted': 1,
        'ide': 'Claude Code',
        'think': 1
      },
      {
        'model': 'Qwen3.6-Plus (Think)',
        'cells': [
          'Failed(5/12)',
          '16/C',
          '43/D+',
          'Failed(3/9)',
          'Failed(0/9)'
        ],
        'unprompted': 0,
        'ide': 'Claude Code',
        'think': 1
      },
      {
        'model': 'Seed-2.0-Code (high)',
        'cells': [
          'Failed(7/12)',
          '40/C',
          '39/C',
          'Failed(3/9)',
          'Skip'
        ],
        'unprompted': 1,
        'ide': 'TRAE',
        'think': 1
      },
      {
        'model': 'MiMo-V2.5-Pro',
        'cells': [
          'Skip',
          'Failed(6/9)',
          '42/C',
          'Skip',
          'Skip'
        ],
        'unprompted': 0,
        'ide': 'Claude Code',
        'think': 1
      },
      {
        'model': 'MiniMax-M2.5',
        'cells': [
          'Failed(7/12)',
          '29/D+',
          '57/D',
          'Failed(2/9)',
          'Skip'
        ],
        'unprompted': 0,
        'ide': 'Claude Code',
        'think': 1
      }
    ]
  },
  '2026-07': {
    'projects': [
      'MacOS App(C)',
      'Flutter(D)',
      'Web(E)',
      'Game(F)',
      'Rust App(G)',
      'Simple Model(H)',
      'iOS+Server(I)'
    ],
    'rows': [
      {
        'model': 'Fable 5 (high)',
        'cells': [
          'Pass',
          'Pass',
          'Pass',
          'Pass',
          'Pending',
          '2/A+',
          '3/A+'
        ],
        'unprompted': 1,
        'ide': 'Claude Code',
        'think': 1
      },
      {
        'model': 'GPT-5.6 Sol (max)',
        'cells': [
          'Pass',
          'Pass',
          'Pass',
          'Pass',
          '15/B+',
          '4/A',
          '8/A'
        ],
        'unprompted': 1,
        'ide': 'Codex App',
        'think': 1
      },
      {
        'model': 'Opus 5 (max)',
        'cells': [
          'Pass',
          'Pass',
          '8/B+',
          'Pass',
          '15/B+',
          '4/A',
          '1/A+'
        ],
        'unprompted': 2,
        'ide': 'Claude Code',
        'think': 1
      },
      {
        'model': 'Kimi-K3 (max)',
        'cells': [
          '7/A',
          'Pass',
          '12/B',
          '15/B',
          '18/B',
          '6/A',
          '5/A'
        ],
        'unprompted': 1,
        'ide': 'Claude Code',
        'think': 1
      },
      {
        'model': 'GPT-5.5 (high)',
        'cells': [
          '7/A',
          '6/A',
          '2/A+',
          '12/A',
          '47/C',
          'Skip',
          'Skip'
        ],
        'unprompted': 1,
        'ide': 'Codex App',
        'think': 1
      },
      {
        'model': 'Opus 4.8 (high)',
        'cells': [
          'Pass',
          'Pass',
          '10/B+',
          '7/A',
          '20/B',
          '10/B',
          'Pending'
        ],
        'unprompted': 2,
        'ide': 'Claude Code',
        'think': 1
      },
      {
        'model': 'Grok 4.5 (high)',
        'cells': [
          '12/B+',
          'Skip',
          '7/A',
          'Pending',
          'Pending',
          '16/B',
          '7/B+'
        ],
        'unprompted': 1,
        'ide': 'Grok Build',
        'think': 1
      },
      {
        'model': 'GLM-5.2 (max)',
        'cells': [
          '16/B',
          '6/A',
          '8/A',
          '8/A',
          '43/C',
          '14/B',
          '15/C+'
        ],
        'unprompted': 0,
        'ide': 'Claude Code',
        'think': 1
      },
      {
        'model': 'Opus 4.6',
        'cells': [
          '9/A',
          '11/A',
          '12/B+',
          '15/B',
          '66/C',
          'Skip',
          'Skip'
        ],
        'unprompted': 4,
        'ide': 'Claude Code',
        'think': 0
      },
      {
        'model': 'Sonnet 5 (high)',
        'cells': [
          'Pass',
          'Pass',
          '18/B',
          '14/B+',
          'Pending',
          '22/C',
          '16/C+'
        ],
        'unprompted': 1,
        'ide': 'Claude Code',
        'think': 1
      },
      {
        'model': 'Hy3 (high)',
        'cells': [
          '11/B',
          '12/B',
          '12/B',
          '13/B',
          'Failed(5/9)',
          '10/B',
          '20/C+'
        ],
        'unprompted': 0,
        'ide': 'Claude Code',
        'think': 1
      },
      {
        'model': 'Gemini 3.5 Flash (high)',
        'cells': [
          '21/C',
          '15/B',
          '20/C',
          '17/B',
          'Skip',
          'Skip',
          'Pending'
        ],
        'unprompted': 3,
        'ide': 'Gemini CLI',
        'think': 1
      },
      {
        'model': 'DeepSeek V4 Pro (max)',
        'cells': [
          '16/C',
          '8/B',
          '21/C',
          '36/C',
          'Failed(0/9)',
          '31/C',
          '28/C'
        ],
        'unprompted': 0,
        'ide': 'Claude Code',
        'think': 1
      },
      {
        'model': 'Qwen3.7-Max',
        'cells': [
          'Failed(2/12)',
          '14/B',
          '17/C+',
          '46/D',
          'Skip',
          '26/C',
          'Pending'
        ],
        'unprompted': 0,
        'ide': 'Claude Code',
        'think': 1
      },
      {
        'model': 'Kimi-K2.7-Code',
        'cells': [
          '30/C',
          '18/C',
          '26/C',
          '55/D',
          'Skip',
          '30/C',
          'Pending'
        ],
        'unprompted': 0,
        'ide': 'Kimi Code',
        'think': 1
      },
      {
        'model': 'DeepSeek V4 Flash (max)',
        'cells': [
          'Failed(5/12)',
          '19/C',
          '32/C',
          '48/D',
          'Skip',
          'Skip',
          'Pending'
        ],
        'unprompted': 0,
        'ide': 'Claude Code',
        'think': 1
      },
      {
        'model': 'MiniMax-M3',
        'cells': [
          'Skip',
          '19/C+',
          '51/D+',
          'Skip',
          'Skip',
          'Skip',
          'Skip'
        ],
        'unprompted': 1,
        'ide': 'Claude Code',
        'think': 1
      },
      {
        'model': 'Qwen3.6-Plus (Think)',
        'cells': [
          'Failed(5/12)',
          '16/C',
          '43/D+',
          'Failed(3/9)',
          'Failed(0/9)',
          'Skip',
          'Skip'
        ],
        'unprompted': 0,
        'ide': 'Claude Code',
        'think': 1
      },
      {
        'model': 'Seed-2.0-Code (high)',
        'cells': [
          'Failed(7/12)',
          '40/C',
          '39/C',
          'Failed(3/9)',
          'Skip',
          'Skip',
          'Skip'
        ],
        'unprompted': 1,
        'ide': 'TRAE',
        'think': 1
      },
      {
        'model': 'MiMo-V2.5-Pro',
        'cells': [
          'Skip',
          'Failed(6/9)',
          '42/C',
          'Skip',
          'Skip',
          'Skip',
          'Skip'
        ],
        'unprompted': 0,
        'ide': 'Claude Code',
        'think': 1
      }
    ]
  },
  '2026-08': {
    'projects': [
      'MacOS App(C)',
      'Web(E)',
      'Game(F)',
      'Rust App(G)',
      'Simple Model(H)',
      'iOS+Server(I)',
      'Animation(J)',
      'Data Process(K)',
      'Metal(L)'
    ],
    'rows': [
      {
        'model': 'Fable 5 (high)',
        'cells': [
          'Pass',
          'Pass',
          'Pass',
          'Pending',
          '2/A+(90.52)',
          '3/A+(103.95)',
          '7/A(59.02)',
          'Pending',
          'Pending'
        ],
        'unprompted': 1,
        'ide': 'Claude Code',
        'think': 1
      },
      {
        'model': 'Opus 5 (max)',
        'cells': [
          'Pass',
          'Skip',
          'Pass',
          'Pending',
          '4/A(123.94)',
          '1/A+(122.57)',
          '12/B+(573.18)',
          '16/D(304.84)',
          '18/C(233.48)'
        ],
        'unprompted': 4,
        'ide': 'Claude Code',
        'think': 1
      },
      {
        'model': 'GPT-5.6 Sol (max)',
        'cells': [
          'Pass',
          'Pass',
          'Pass',
          '15/B+(683.21)',
          '4/A(63.86)',
          '8/A(26.97)',
          '23/B(97.98)',
          '8/B(770.41)',
          '13/C(125.51)'
        ],
        'unprompted': 3,
        'ide': 'Codex App',
        'think': 1
      },
      {
        'model': 'Kimi-K3 (max)',
        'cells': [
          '7/A(122.87)',
          '12/B(171.72)',
          '15/B(126.40)',
          '18/B(771.86)',
          '6/A(29.59)',
          '5/A(43.22)',
          '22/B(43.23)',
          '28/D+(383.49)',
          '25/D(193.42)'
        ],
        'unprompted': 2,
        'ide': 'Claude Code',
        'think': 1
      },
      {
        'model': 'GLM-5.3 (max)',
        'cells': [
          'Skip',
          'Pass',
          'Pass',
          'Skip',
          '8/B+(11.48)',
          '7/A(25.25)',
          '20/C+(90.76)',
          '30/D(83.29)',
          '24/D(343.68)'
        ],
        'unprompted': 0,
        'ide': 'Claude Code',
        'think': 1
      },
      {
        'model': 'Qwen3.8-Max (max)',
        'cells': [
          'Skip',
          'Skip',
          '8/B(293.87)',
          'Skip',
          '11/B(33.16)',
          '10/B(50.86)',
          '15/B(48.94)',
          'Skip',
          'Skip'
        ],
        'unprompted': 0,
        'ide': 'Claude Code',
        'think': 1
      },
      {
        'model': 'Gemini 3.7 Flash (high)',
        'cells': [
          'Skip',
          '12/B(38.76)',
          'Skip',
          'Skip',
          '14/B(9.38)',
          '8/B(16.84)',
          '14/B(14.28)',
          '34/D(28.93)',
          'Skip'
        ],
        'unprompted': 4,
        'ide': 'OpenCode CLI',
        'think': 1
      },
      {
        'model': 'Grok 4.6 (high)',
        'cells': [
          'Skip',
          'Pass',
          'Skip',
          'Skip',
          '16/C+(17.67)',
          '7/B+(18.69)',
          '20/C+(23.19)',
          'Skip',
          'Skip'
        ],
        'unprompted': 1,
        'ide': 'Grok Build',
        'think': 1
      },
      {
        'model': 'GLM-5.3-Flash (max)',
        'cells': [
          'Skip',
          'Skip',
          'Skip',
          'Skip',
          '9/B(2.11)',
          '13/B(3.31)',
          'Failed',
          'Skip',
          'Skip'
        ],
        'unprompted': 0,
        'ide': 'Claude Code',
        'think': 1
      },
      {
        'model': 'Grok 4.5 (high)',
        'cells': [
          '12/B+(55.98)',
          '7/A(91.51)',
          'Skip',
          'Skip',
          '16/B(23.12)',
          '7/B+(15.98)',
          'Failed',
          'Skip',
          'Skip'
        ],
        'unprompted': 1,
        'ide': 'Grok Build',
        'think': 1
      },
      {
        'model': 'GLM-5.2 (max)',
        'cells': [
          '16/B(58.92)',
          '8/A(79.17)',
          '8/A(51.98)',
          '43/C(266.62)',
          '14/B(10.75)',
          '15/C+(28.61)',
          '30/C(26.76)',
          'Skip',
          'Skip'
        ],
        'unprompted': 0,
        'ide': 'Claude Code',
        'think': 1
      },
      {
        'model': 'DeepSeek V4 Pro 0813 (max)',
        'cells': [
          'Skip',
          'Skip',
          'Skip',
          'Skip',
          '14/B(13.46)',
          '16/C(12.73)',
          'Failed',
          '16/B(18.64)',
          '27/D(69.58)'
        ],
        'unprompted': 0,
        'ide': 'Claude Code',
        'think': 1
      },
      {
        'model': 'Muse Spark 1.2 (xhigh)',
        'cells': [
          'Skip',
          'Skip',
          '19/B(134.29)',
          'Skip',
          '26/C(15.82)',
          '11/B(17.76)',
          'Failed',
          'Skip',
          'Skip'
        ],
        'unprompted': 0,
        'ide': 'Claude Code',
        'think': 1
      },
      {
        'model': 'DeepSeek V4 Flash 0731 (max)',
        'cells': [
          'Skip',
          '8/A(5.33)',
          '9/A(7.62)',
          '44/D+(12.41)',
          '17/B(7.38)',
          '24/D+(4.79)',
          'Failed',
          'Failed',
          'Skip'
        ],
        'unprompted': 2,
        'ide': 'Claude Code',
        'think': 1
      },
      {
        'model': 'Sonnet 5 (high)',
        'cells': [
          'Skip',
          '18/B(192.63)',
          '14/B+(144.10)',
          'Skip',
          '22/C(154.97)',
          '16/C+(72.34)',
          'Failed',
          'Skip',
          'Skip'
        ],
        'unprompted': 1,
        'ide': 'Claude Code',
        'think': 1
      },
      {
        'model': 'Hy3 (high)',
        'cells': [
          '11/B(8.06)',
          '12/B(8.68)',
          '13/B(11.04)',
          'Failed(5/9)',
          '10/B(2.01)',
          '20/C+(13.29)',
          'Failed',
          'Failed',
          'Skip'
        ],
        'unprompted': 0,
        'ide': 'Claude Code',
        'think': 1
      },
      {
        'model': 'GPT-5.6 Luna (max)',
        'cells': [
          'Skip',
          'Skip',
          'Skip',
          'Skip',
          '27/C(3.84)',
          '21/C(4.90)',
          'Failed',
          'Skip',
          'Skip'
        ],
        'unprompted': 0,
        'ide': 'Codex',
        'think': 1
      },
      {
        'model': 'Gemini 3.5 Flash (high)',
        'cells': [
          '21/C',
          '20/C',
          '17/B',
          'Skip',
          'Skip',
          'Skip',
          'Skip',
          'Skip',
          'Skip'
        ],
        'unprompted': 3,
        'ide': 'Gemini CLI',
        'think': 1
      },
      {
        'model': 'MiniMax-M3',
        'cells': [
          'Skip',
          '51/D+',
          'Skip',
          'Skip',
          'Skip',
          'Skip',
          'Skip',
          'Skip',
          'Skip'
        ],
        'unprompted': 1,
        'ide': 'Claude Code',
        'think': 1
      }
    ]
  },
  '2026-09': {
    'projects': [
      'Simple Model(H)',
      'iOS+Server(I)',
      'Animation(J)',
      'Data Process(K)',
      'Metal(L)'
    ],
    'rows': [
      {
        'model': 'Fable 5 (high)',
        'cells': [
          '2/A+(90.52)',
          '3/A+(103.95)',
          '7/A(59.02)',
          'Skip',
          'Skip'
        ],
        'unprompted': 1,
        'ide': 'Claude Code',
        'think': 1
      },
      {
        'model': 'Opus 5 (max)',
        'cells': [
          '4/A(123.94)',
          '1/A+(122.57)',
          '12/B+(573.18)',
          '16/D(304.84)',
          '18/C(233.48)'
        ],
        'unprompted': 4,
        'ide': 'Claude Code',
        'think': 1
      },
      {
        'model': 'GPT-5.6 Sol (max)',
        'cells': [
          '4/A(49.32)',
          '8/A(20.08)',
          '23/B(75.54)',
          '8/B(607.30)',
          '13/C(98.19)'
        ],
        'unprompted': 3,
        'ide': 'Codex App',
        'think': 1
      },
      {
        'model': 'Kimi-K3 (max)',
        'cells': [
          '6/A(29.59)',
          '5/A(43.22)',
          '22/B(43.23)',
          '28/D+(383.49)',
          '25/D(193.42)'
        ],
        'unprompted': 2,
        'ide': 'Claude Code',
        'think': 1
      },
      {
        'model': 'GLM-5.3 (max)',
        'cells': [
          '8/B+(11.48)',
          '7/A(25.25)',
          '20/C+(90.76)',
          '30/D(83.29)',
          '24/D(343.68)'
        ],
        'unprompted': 0,
        'ide': 'Claude Code',
        'think': 1
      },
      {
        'model': 'Qwen3.8-Max (max)',
        'cells': [
          '11/B(33.16)',
          '10/B(50.86)',
          '15/B(48.94)',
          'Skip',
          'Skip'
        ],
        'unprompted': 0,
        'ide': 'Claude Code',
        'think': 1
      },
      {
        'model': 'Gemini 3.7 Flash (high)',
        'cells': [
          '14/B(9.38)',
          '8/B(16.84)',
          '14/B(14.28)',
          '34/D(28.93)',
          'Skip'
        ],
        'unprompted': 4,
        'ide': 'OpenCode CLI',
        'think': 1
      },
      {
        'model': 'Grok 4.6 (high)',
        'cells': [
          '16/C+(17.67)',
          '7/B+(18.69)',
          '20/C+(23.19)',
          'Skip',
          'Skip'
        ],
        'unprompted': 1,
        'ide': 'Grok Build',
        'think': 1
      },
      {
        'model': 'GLM-5.3-Flash (max)',
        'cells': [
          '9/B(2.11)',
          '13/B(3.31)',
          'Failed',
          'Skip',
          'Skip'
        ],
        'unprompted': 0,
        'ide': 'Claude Code',
        'think': 1
      },
      {
        'model': 'DeepSeek V4 Pro 0813 (max)',
        'cells': [
          '14/B(13.46)',
          '16/C(12.73)',
          'Failed',
          '16/B(18.64)',
          '27/D(69.58)'
        ],
        'unprompted': 0,
        'ide': 'Claude Code',
        'think': 1
      },
      {
        'model': 'Muse Spark 1.2 (xhigh)',
        'cells': [
          '26/C(15.82)',
          '11/B(17.76)',
          'Failed',
          'Skip',
          'Skip'
        ],
        'unprompted': 0,
        'ide': 'Claude Code',
        'think': 1
      },
      {
        'model': 'DeepSeek V4 Flash 0731 (max)',
        'cells': [
          '17/B(7.38)',
          '24/D+(4.79)',
          'Failed',
          'Failed',
          'Skip'
        ],
        'unprompted': 2,
        'ide': 'Claude Code',
        'think': 1
      },
      {
        'model': 'Sonnet 5 (high)',
        'cells': [
          '22/C(154.97)',
          '16/C+(72.34)',
          'Failed',
          'Skip',
          'Skip'
        ],
        'unprompted': 1,
        'ide': 'Claude Code',
        'think': 1
      },
      {
        'model': 'Hy3 (high)',
        'cells': [
          '10/B(2.01)',
          '20/C+(13.29)',
          'Failed',
          'Failed',
          'Skip'
        ],
        'unprompted': 0,
        'ide': 'Claude Code',
        'think': 1
      },
      {
        'model': 'GPT-5.6 Luna (max)',
        'cells': [
          '27/C(3.84)',
          '21/C(4.90)',
          'Failed',
          'Skip',
          'Skip'
        ],
        'unprompted': 0,
        'ide': 'Codex',
        'think': 1
      },
      {
        'model': 'MiniMax-M3',
        'cells': [
          '30/D(2.42)',
          '17/C+(8.28)',
          'Failed',
          'Skip',
          'Skip'
        ],
        'unprompted': 1,
        'ide': 'Claude Code',
        'think': 1
      }
    ]
  }
}
};
