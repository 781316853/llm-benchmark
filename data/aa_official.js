// 新增数据源:Artificial Analysis 官方 Coding Agent Index(云端抓取)
// 来源:https://artificialanalysis.ai/agents/coding-agents  (更新于 2026-07-24)
// 抓取方式:解析页面内嵌的 3 个 <script type='application/ld+json'> schema.org Dataset 块:
//          Coding Agent Index(0-1)/ Time per Task(秒)/ Cost per Task($),按 label 合并三维。
// label 格式:'<agent> - <model> (<effort>)';score=index*100(百分制);wallSec=平均任务耗时;costUsd=平均任务成本。
// 用途:与 DeepSWE 多源做一致性交叉验证;与镜像源 aaci.js 并存。
window.AA_OFFICIAL = {
  'source': 'Artificial Analysis Coding Agent Index (Official)',
  'url': 'https://artificialanalysis.ai/agents/coding-agents',
  'updated': '2026-07-24',
  'version': '1.1',
  'componentsList': [
    'DeepSWE',
    'Terminal-Bench v2',
    'SWE-Atlas-QnA'
  ],
  'scoreScale': '0-100 (index*100)',
  'models': [
    {
      'agent': 'Codex',
      'model': 'GPT-5.6 Sol',
      'effort': 'max',
      'score': 66.6,
      'indexRaw': 0.6656984867090491,
      'wallSec': 610,
      'costUsd': 7.08,
      'ci': null
    },
    {
      'agent': 'Claude Code',
      'model': 'Fable 5 (with fallback)',
      'effort': 'max',
      'score': 65.8,
      'indexRaw': 0.6584703662922334,
      'wallSec': 1403,
      'costUsd': 11.71,
      'ci': null
    },
    {
      'agent': 'Grok Build',
      'model': 'Grok 4.5',
      'effort': 'high',
      'score': 64.4,
      'indexRaw': 0.6443924859568593,
      'wallSec': 992,
      'costUsd': 2.59,
      'ci': null
    },
    {
      'agent': 'Kimi Code CLI',
      'model': 'Kimi K3',
      'effort': null,
      'score': 61.3,
      'indexRaw': 0.6133537089146563,
      'wallSec': 1428,
      'costUsd': 3.18,
      'ci': null
    },
    {
      'agent': 'Claude Code',
      'model': 'Opus 4.8',
      'effort': 'max',
      'score': 60.5,
      'indexRaw': 0.6054088936618197,
      'wallSec': 1388,
      'costUsd': 7.7,
      'ci': null
    },
    {
      'agent': 'Opencode',
      'model': 'Muse Spark 1.1',
      'effort': 'xhigh',
      'score': 53.5,
      'indexRaw': 0.5354216416163317,
      'wallSec': 755,
      'costUsd': 1.43,
      'ci': null
    },
    {
      'agent': 'Claude Code',
      'model': 'GLM-5.2',
      'effort': null,
      'score': 43.2,
      'indexRaw': 0.4317779252895107,
      'wallSec': 1505,
      'costUsd': 6.51,
      'ci': null
    },
    {
      'agent': 'Cursor CLI',
      'model': 'Composer 2.5 Fast',
      'effort': null,
      'score': 38.2,
      'indexRaw': 0.3819077223302173,
      'wallSec': 406,
      'costUsd': 0.55,
      'ci': null
    },
    {
      'agent': 'Claude Code',
      'model': 'DeepSeek V4 Pro',
      'effort': 'high',
      'score': 31.4,
      'indexRaw': 0.31440020420893977,
      'wallSec': 1072,
      'costUsd': 0.27,
      'ci': null
    },
    {
      'agent': 'Gemini CLI',
      'model': 'Gemini 3.1 Pro',
      'effort': 'high',
      'score': 30.3,
      'indexRaw': 0.30338470275666973,
      'wallSec': 649,
      'costUsd': 2,
      'ci': null
    }
  ]
};
