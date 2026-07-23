// 数据源3:llm2014 code_v3 基准快照(中文个人私有题库,按月归档)
// 来源:https://llm2014.github.io/llm_benchmark/  (raw: github.com/llm2014/llm_benchmark)
// 单元格原始值形如 "7/A"(耗时分钟 / 字母等级),或 Pass / Failed(n/m) / Skip / Pending。
// 数值化规则在 js/data.js 中统一处理。
// 注:2026-01 为旧评分制(原始分钟数 + "总扣分",无字母等级),口径不兼容,已排除。
window.LLM2014 = {
  source: "llm2014 编程榜 code_v3",
  url: "https://llm2014.github.io/llm_benchmark/#category=code_v3&dataset=code_v3%7C2026-07%7C0",
  updated: "2026-07-23",
  desc: "个人私有滚动题库的长期跟踪评测,要求从零构建实际应用(MacOS/Flutter/Web/Game/Rust 等)并按通过情况评级。",
  // 月份 -> { projects: 任务列名数组, rows: [{model, cells:[原始值...], ide, think, unprompted}] }
  months: {
  '2026-05': {
    'projects': [
      'MacOS App',
      'Flutter',
      'Web',
      'Game',
      'Rust App'
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
        'model': 'Claude Opus 4.8 (high)',
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
        'model': 'GLM-5.2(max)',
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
        'model': 'Claude Opus 4.6',
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
        'model': 'Claude Opus 4.5',
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
        'model': 'Claude Sonnet 5 (high)',
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
        'model': 'Tencent Hy3 (high)',
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
        'model': 'Claude Sonnet 4.6 (high)',
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
        'model': 'Tencent Hy3 Preview',
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
        'model': 'Qwen3.6-Plus(Think)',
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
        'model': 'Doubao-Seed-2.0-Code  (high)',
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
      'MacOS App',
      'Flutter',
      'Web',
      'Game',
      'Rust App',
      'Simple Model',
      'iOS+Server'
    ],
    'rows': [
      {
        'model': 'Fable-5 (high)',
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
        'model': 'GPT-5.6-Sol (max)',
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
        'model': 'Claude Opus 4.8 (high)',
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
        'model': 'GLM-5.2(max)',
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
        'model': 'Claude Opus 4.6',
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
        'model': 'Claude Sonnet 5 (high)',
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
        'model': 'Tencent Hy3 (high)',
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
        'model': 'Qwen3.6-Plus(Think)',
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
        'model': 'Doubao-Seed-2.0-Code  (high)',
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
  }
}
};
