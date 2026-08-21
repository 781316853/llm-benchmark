// 新增数据源:Artificial Analysis 官方 Coding Agent Index(云端抓取)
// 来源:https://artificialanalysis.ai/agents/coding-agents  (更新于 2026-08-21)
// 抓取方式:解析页面内嵌的 3 个 <script type='application/ld+json'> schema.org Dataset 块:
//          Coding Agent Index(0-1)/ Time per Task(秒)/ Cost per Task($),按 label 合并三维。
// label 格式:'<agent> - <model> (<effort>)';score=index*100(百分制);wallSec=平均任务耗时;costUsd=平均任务成本。
// 用途:与 DeepSWE 多源做一致性交叉验证;与镜像源 aaci.js 并存。
window.AA_OFFICIAL = {
  'source': 'Artificial Analysis Coding Agent Index (Official)',
  'url': 'https://artificialanalysis.ai/agents/coding-agents',
  'updated': '2026-08-21',
  'version': '1.1',
  'componentsList': [
    'DeepSWE',
    'Terminal-Bench v2',
    'SWE-Atlas-QnA'
  ],
  'scoreScale': '0-100 (index*100)',
  'models': [
    {
      'agent': 'Claude Code',
      'model': 'Opus 5',
      'effort': 'xhigh',
      'score': 68.1,
      'indexRaw': 0.6814975428587521,
      'wallSec': 1422,
      'costUsd': 8.17,
      'ci': null
    },
    {
      'agent': 'Claude Code',
      'model': 'Fable 5 (with fallback)',
      'effort': 'max',
      'score': 67.2,
      'indexRaw': 0.6717276042685724,
      'wallSec': 1407,
      'costUsd': 11.69,
      'ci': null
    },
    {
      'agent': 'Codex',
      'model': 'GPT-5.6 Sol',
      'effort': 'max',
      'score': 65.1,
      'indexRaw': 0.6505240024334411,
      'wallSec': 614,
      'costUsd': 6.42,
      'ci': null
    },
    {
      'agent': 'Grok Build',
      'model': 'Grok 4.5',
      'effort': 'high',
      'score': 64.1,
      'indexRaw': 0.6408998279698193,
      'wallSec': 929,
      'costUsd': 2.44,
      'ci': null
    },
    {
      'agent': 'Kimi Code CLI',
      'model': 'Kimi K3',
      'effort': null,
      'score': 62.6,
      'indexRaw': 0.6263880112748017,
      'wallSec': 1447,
      'costUsd': 3.08,
      'ci': null
    },
    {
      'agent': 'Opencode',
      'model': 'Gemini 3.7 Flash',
      'effort': 'high',
      'score': 59.6,
      'indexRaw': 0.5962784529614886,
      'wallSec': 527,
      'costUsd': 1.27,
      'ci': null
    },
    {
      'agent': 'Codex',
      'model': 'DeepSeek V4 Flash',
      'effort': 'max',
      'score': 49.8,
      'indexRaw': 0.49757600316190503,
      'wallSec': 868,
      'costUsd': 0.06,
      'ci': null
    },
    {
      'agent': 'Claude Code',
      'model': 'GLM-5.2',
      'effort': null,
      'score': 43.3,
      'indexRaw': 0.43310157193602167,
      'wallSec': 1507,
      'costUsd': 6.66,
      'ci': null
    },
    {
      'agent': 'Cursor CLI',
      'model': 'Composer 2.5 Fast',
      'effort': null,
      'score': 38.3,
      'indexRaw': 0.3830075380367747,
      'wallSec': 472,
      'costUsd': 0.56,
      'ci': null
    }
  ]
};
