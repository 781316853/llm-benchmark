// 厂商新模型发布时钟(由 scripts/lib/release-clock.js 生成)
// 汇总各数据源中的模型发布日期(ModelDial releaseDate / Terminal-Bench / datalearner / APEX-1 /
//   AutomationBench / Agents' Last Exam / BenchCAD 的 date 字段,以及厂商官方发布监听),
//   按 canonical 厂商取最近一次发布;同日按来源优先级 官方发布 > ModelDial > 基准榜单 > 长尾展示榜。
// 用途:总览页「厂商新模型发布倒计时」;天数由前端按本机日期计算。
// 字段:vendors[]={vendor=厂商, date=发布日期, model=canonical 模型名, src=数据来源}。
window.RELEASES = {
  'updated': '2026-11-24',
  'refreshedAt': '2026-11-24 08:09',
  'sources': [
    'Official',
    'ModelDial',
    'Terminal-Bench',
    'datalearner',
    'APEX-1',
    'AutomationBench',
    'Agents\' Last Exam'
  ],
  'stats': {
    'vendors': 26,
    'datedEntries': 363,
    'latestDate': '2026-11-23'
  },
  'vendors': [
    {
      'vendor': 'zAI',
      'date': '2026-11-23',
      'model': 'GLM-5.4',
      'src': 'ModelDial'
    },
    {
      'vendor': 'Google',
      'date': '2026-11-19',
      'model': 'Gemini 4 Neon',
      'src': 'ModelDial'
    },
    {
      'vendor': 'OpenAI',
      'date': '2026-11-18',
      'model': 'GPT-6.2 Astra',
      'src': 'ModelDial'
    },
    {
      'vendor': 'Microsoft',
      'date': '2026-11-17',
      'model': 'MAI Code 2',
      'src': 'Terminal-Bench'
    },
    {
      'vendor': 'Alibaba',
      'date': '2026-11-16',
      'model': 'Qwen4-Max',
      'src': 'Official'
    },
    {
      'vendor': 'Tencent',
      'date': '2026-11-16',
      'model': 'Tencent Hy4 Flash',
      'src': 'Official'
    },
    {
      'vendor': 'Baidu',
      'date': '2026-11-11',
      'model': 'ERNIE 5.5 Flash Preview',
      'src': 'ModelDial'
    },
    {
      'vendor': 'Anthropic',
      'date': '2026-11-10',
      'model': 'Claude Fable 5.2',
      'src': 'ModelDial'
    },
    {
      'vendor': 'Meta',
      'date': '2026-11-09',
      'model': 'Muse Ember',
      'src': 'APEX-1'
    },
    {
      'vendor': 'inclusionAI',
      'date': '2026-11-06',
      'model': 'Ling-3.2-flash',
      'src': 'ModelDial'
    },
    {
      'vendor': 'Thinking Machines',
      'date': '2026-11-05',
      'model': 'Inkling 2 Small',
      'src': 'Terminal-Bench'
    },
    {
      'vendor': 'Cognition',
      'date': '2026-11-04',
      'model': 'SWE-2 Flash',
      'src': 'Terminal-Bench'
    },
    {
      'vendor': 'STEALTH',
      'date': '2026-11-04',
      'model': 'crouton-alpha',
      'src': 'ModelDial'
    },
    {
      'vendor': 'Meituan',
      'date': '2026-11-02',
      'model': 'LongCat 2.5',
      'src': 'ModelDial'
    },
    {
      'vendor': 'Moonshot',
      'date': '2026-10-24',
      'model': 'Kimi K3.1 Pro',
      'src': 'ModelDial'
    },
    {
      'vendor': 'Inception',
      'date': '2026-10-19',
      'model': 'Mercury 3',
      'src': 'Terminal-Bench'
    },
    {
      'vendor': 'MiniMax',
      'date': '2026-10-19',
      'model': 'MiniMax M3.1 Flash',
      'src': 'ModelDial'
    },
    {
      'vendor': 'DeepSeek',
      'date': '2026-10-17',
      'model': 'DeepSeek V4.1 Flash 1017',
      'src': 'ModelDial'
    },
    {
      'vendor': 'NVIDIA',
      'date': '2026-10-15',
      'model': 'Nemotron 3.5 Super VL',
      'src': 'Terminal-Bench'
    },
    {
      'vendor': 'Mistral',
      'date': '2026-10-06',
      'model': 'Mistral Large 4',
      'src': 'APEX-1'
    },
    {
      'vendor': 'Reflection AI',
      'date': '2026-10-05',
      'model': 'Beam',
      'src': 'Terminal-Bench'
    },
    {
      'vendor': 'Xiaomi',
      'date': '2026-09-22',
      'model': 'MiMo-V2.6-Pro',
      'src': 'ModelDial'
    },
    {
      'vendor': 'xAI',
      'date': '2026-09-21',
      'model': 'Grok 4.7',
      'src': 'ModelDial'
    },
    {
      'vendor': 'StepFun',
      'date': '2026-09-20',
      'model': 'Step 5 Preview',
      'src': 'ModelDial'
    },
    {
      'vendor': 'ByteDance',
      'date': '2026-09-15',
      'model': 'Seed 2.1 Pro',
      'src': 'ModelDial'
    },
    {
      'vendor': 'Shanghai AI Lab',
      'date': '2026-09-09',
      'model': 'Intern-S2-397B',
      'src': 'Terminal-Bench'
    }
  ]
};
