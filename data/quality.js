// 数据质量报告(由 scripts/lib/quality-report.js 生成)
// 三维交叉验证:一致性(跨源分数标准差)/ 完整性(必填字段齐全率)/ 时效性(数据新鲜度)
// generatedAt=2026-11-25;overallScore 为各源完整性均权(0-1)
// 注:前端暂不展示,仅供抓取端记录与 CI 日志溯源。
window.QUALITY = {
  'generatedAt': '2026-11-25',
  'overallScore': 0.96,
  'sources': [
    {
      'id': 'aa_coding_agents',
      'name': 'AA Coding Agent Index v2.0',
      'status': 'error',
      'modelCount': 36,
      'updated': '2026-11-13',
      'ageDays': 12,
      'completeness': null,
      'fetchAttempts': 1,
      'errors': [
        '30 条配置中没有任何一条包含 v2.0 三项子基准'
      ]
    },
    {
      'id': 'aicodingdaily',
      'name': 'AI Coding Daily',
      'status': 'ok',
      'modelCount': 66,
      'updated': '2026-11-25',
      'ageDays': 0,
      'completeness': 1,
      'fetchAttempts': 1,
      'errors': []
    },
    {
      'id': 'apex',
      'name': 'APEX-1',
      'status': 'ok',
      'modelCount': 83,
      'updated': '2026-11-25',
      'ageDays': 0,
      'completeness': 1,
      'fetchAttempts': 1,
      'errors': []
    },
    {
      'id': 'datalearner',
      'name': 'datalearner DeepSWE 榜',
      'status': 'ok',
      'modelCount': 30,
      'updated': '2026-11-25',
      'ageDays': 0,
      'completeness': 1,
      'fetchAttempts': 1,
      'errors': []
    },
    {
      'id': 'arcagi3',
      'name': 'ARC-AGI-3',
      'status': 'ok',
      'modelCount': 28,
      'updated': '2026-11-25',
      'ageDays': 0,
      'completeness': 1,
      'fetchAttempts': 1,
      'errors': []
    },
    {
      'id': 'arena_agent',
      'name': 'Agent Arena (LMArena)',
      'status': 'ok',
      'modelCount': 69,
      'updated': '2026-11-25',
      'ageDays': 0,
      'completeness': 1,
      'fetchAttempts': 1,
      'errors': []
    },
    {
      'id': 'arena_webdev',
      'name': 'Code Arena WebDev (LMArena)',
      'status': 'ok',
      'modelCount': 158,
      'updated': '2026-11-25',
      'ageDays': 0,
      'completeness': 1,
      'fetchAttempts': 1,
      'errors': []
    },
    {
      'id': 'arenaofbias',
      'name': '亿模亿样 模型效果对比',
      'status': 'ok',
      'modelCount': 94,
      'updated': '2026-11-25',
      'ageDays': 0,
      'completeness': 1,
      'fetchAttempts': 1,
      'errors': []
    },
    {
      'id': 'automationbench',
      'name': 'AutomationBench',
      'status': 'ok',
      'modelCount': 75,
      'updated': '2026-11-25',
      'ageDays': 0,
      'completeness': 1,
      'fetchAttempts': 1,
      'errors': []
    },
    {
      'id': 'benchcad',
      'name': 'BenchCAD',
      'status': 'ok',
      'modelCount': 17,
      'updated': '2026-11-25',
      'ageDays': 0,
      'completeness': 0.824,
      'fetchAttempts': 1,
      'errors': []
    },
    {
      'id': 'cursorbench',
      'name': 'CursorBench',
      'status': 'ok',
      'modelCount': 12,
      'updated': '2026-11-25',
      'ageDays': 0,
      'completeness': 1,
      'fetchAttempts': 1,
      'errors': []
    },
    {
      'id': 'deepswe_v11',
      'name': 'DeepSWE v1.1',
      'status': 'ok',
      'modelCount': 53,
      'updated': '2026-11-25',
      'ageDays': 0,
      'completeness': 1,
      'fetchAttempts': 1,
      'errors': []
    },
    {
      'id': 'deepswe_v10',
      'name': 'DeepSWE v1.0',
      'status': 'ok',
      'modelCount': 34,
      'updated': '2026-11-25',
      'ageDays': 0,
      'completeness': 1,
      'fetchAttempts': 1,
      'errors': []
    },
    {
      'id': 'frontiercode',
      'name': 'FrontierCode',
      'status': 'ok',
      'modelCount': 36,
      'updated': '2026-11-25',
      'ageDays': 0,
      'completeness': 1,
      'fetchAttempts': 1,
      'errors': []
    },
    {
      'id': 'frontiercode_v11',
      'name': 'FrontierCode v1.1',
      'status': 'ok',
      'modelCount': 45,
      'updated': '2026-11-25',
      'ageDays': 0,
      'completeness': 1,
      'fetchAttempts': 1,
      'errors': []
    },
    {
      'id': 'frontierswe',
      'name': 'FrontierSWE',
      'status': 'ok',
      'modelCount': 28,
      'updated': '2026-11-25',
      'ageDays': 0,
      'completeness': 1,
      'fetchAttempts': 1,
      'errors': []
    },
    {
      'id': 'hle',
      'name': 'Humanity\'s Last Exam',
      'status': 'ok',
      'modelCount': 282,
      'updated': '2026-11-25',
      'ageDays': 0,
      'completeness': 1,
      'fetchAttempts': 1,
      'errors': []
    },
    {
      'id': 'lastexam',
      'name': 'Agents\' Last Exam v1.1',
      'status': 'ok',
      'modelCount': 39,
      'updated': '2026-11-25',
      'ageDays': 0,
      'completeness': 1,
      'fetchAttempts': 1,
      'errors': []
    },
    {
      'id': 'lastexam_v10',
      'name': 'Agents\' Last Exam v1.0',
      'status': 'ok',
      'modelCount': 45,
      'updated': '2026-11-25',
      'ageDays': 0,
      'completeness': 1,
      'fetchAttempts': 1,
      'errors': []
    },
    {
      'id': 'llm2014',
      'name': 'llm2014',
      'status': 'ok',
      'modelCount': 134,
      'updated': '2026-11-25',
      'ageDays': 0,
      'completeness': 0,
      'fetchAttempts': 1,
      'errors': []
    },
    {
      'id': 'modeldial',
      'name': 'ModelDial 雷达',
      'status': 'ok',
      'modelCount': 56,
      'updated': '2026-11-25',
      'ageDays': 0,
      'completeness': 1,
      'fetchAttempts': 1,
      'errors': []
    },
    {
      'id': 'nl2repo',
      'name': 'NL2Repo-Bench',
      'status': 'ok',
      'modelCount': 56,
      'updated': '2026-11-25',
      'ageDays': 0,
      'completeness': 1,
      'fetchAttempts': 1,
      'errors': []
    },
    {
      'id': 'octathlon',
      'name': 'AI 十项全能',
      'status': 'ok',
      'modelCount': 27,
      'updated': '2026-11-25',
      'ageDays': 0,
      'completeness': 1,
      'fetchAttempts': 1,
      'errors': []
    },
    {
      'id': 'osworld',
      'name': 'OSWorld 2.0',
      'status': 'ok',
      'modelCount': 77,
      'updated': '2026-11-25',
      'ageDays': 0,
      'completeness': 1,
      'fetchAttempts': 1,
      'errors': []
    },
    {
      'id': 'programbench',
      'name': 'ProgramBench',
      'status': 'ok',
      'modelCount': 79,
      'updated': '2026-11-25',
      'ageDays': 0,
      'completeness': 0.962,
      'fetchAttempts': 1,
      'errors': []
    },
    {
      'id': 'tbench',
      'name': 'Terminal-Bench 4.0',
      'status': 'ok',
      'modelCount': 108,
      'updated': '2026-11-25',
      'ageDays': 0,
      'completeness': 1,
      'fetchAttempts': 1,
      'errors': []
    },
    {
      'id': 'tbench_v21',
      'name': 'Terminal-Bench 2.1',
      'status': 'ok',
      'modelCount': 83,
      'updated': '2026-11-25',
      'ageDays': 0,
      'completeness': 1,
      'fetchAttempts': 1,
      'errors': []
    },
    {
      'id': 'tbench_v3',
      'name': 'Terminal-Bench 3.0',
      'status': 'ok',
      'modelCount': 12,
      'updated': '2026-11-25',
      'ageDays': 0,
      'completeness': 1,
      'fetchAttempts': 1,
      'errors': []
    },
    {
      'id': 'tbscience',
      'name': 'Terminal-Bench-Science 0.1',
      'status': 'ok',
      'modelCount': 20,
      'updated': '2026-11-25',
      'ageDays': 0,
      'completeness': 1,
      'fetchAttempts': 1,
      'errors': []
    },
    {
      'id': 'vals_codemigration',
      'name': 'Code Migration',
      'status': 'ok',
      'modelCount': 79,
      'updated': '2026-11-25',
      'ageDays': 0,
      'completeness': 1,
      'fetchAttempts': 1,
      'errors': []
    },
    {
      'id': 'vals_vibe_code',
      'name': 'Vibe Code Bench v1.1',
      'status': 'ok',
      'modelCount': 134,
      'updated': '2026-11-25',
      'ageDays': 0,
      'completeness': 1,
      'fetchAttempts': 1,
      'errors': []
    }
  ],
  'consistency': [
    {
      'canonId': 'Tencent Hy4 Preview',
      'name': 'Hy4 preview',
      'vendor': 'Tencent',
      'sources': [
        'deepswe_v11',
        'deepswe_v10',
        'lastexam_v10'
      ],
      'scores': {
        'deepswe_v11': 64.3,
        'deepswe_v10': 64.3,
        'lastexam_v10': 22.8
      },
      'mean': 50.5,
      'stddev': 19.56,
      'flag': 'alert'
    },
    {
      'canonId': 'DeepSeek V4.1 Flash 1017',
      'name': 'DeepSeek-V4.1-Flash-1017',
      'vendor': 'DeepSeek',
      'sources': [
        'datalearner',
        'deepswe_v11',
        'lastexam_v10'
      ],
      'scores': {
        'datalearner': 75.4,
        'deepswe_v11': 77,
        'lastexam_v10': 35.4
      },
      'mean': 62.6,
      'stddev': 19.24,
      'flag': 'alert'
    },
    {
      'canonId': 'MiMo-V2.6-Pro',
      'name': 'MiMo-V2.6-Pro',
      'vendor': 'Xiaomi',
      'sources': [
        'datalearner',
        'deepswe_v11',
        'lastexam_v10'
      ],
      'scores': {
        'datalearner': 71.9,
        'deepswe_v11': 71.9,
        'lastexam_v10': 31.6
      },
      'mean': 58.5,
      'stddev': 19,
      'flag': 'alert'
    },
    {
      'canonId': 'DeepSeek V4.1 Flash',
      'name': 'DeepSeek-V4.1-Flash',
      'vendor': 'DeepSeek',
      'sources': [
        'datalearner',
        'deepswe_v11',
        'frontiercode_v11',
        'lastexam_v10'
      ],
      'scores': {
        'datalearner': 74.2,
        'deepswe_v11': 74.2,
        'frontiercode_v11': 43.9,
        'lastexam_v10': 31.8
      },
      'mean': 56,
      'stddev': 18.67,
      'flag': 'alert'
    },
    {
      'canonId': 'Gemini 4 Argon',
      'name': 'Gemini 4 Argon',
      'vendor': 'Google',
      'sources': [
        'datalearner',
        'deepswe_v11',
        'frontiercode_v11',
        'lastexam_v10'
      ],
      'scores': {
        'datalearner': 77.9,
        'deepswe_v11': 77.9,
        'frontiercode_v11': 47.6,
        'lastexam_v10': 39.5
      },
      'mean': 60.7,
      'stddev': 17.41,
      'flag': 'alert'
    },
    {
      'canonId': 'GLM-5.3',
      'name': 'glm-5-3',
      'vendor': 'zAI',
      'sources': [
        'deepswe_v11',
        'frontiercode_v11',
        'lastexam_v10'
      ],
      'scores': {
        'deepswe_v11': 69,
        'frontiercode_v11': 40.1,
        'lastexam_v10': 28.5
      },
      'mean': 45.9,
      'stddev': 17.03,
      'flag': 'alert'
    },
    {
      'canonId': 'DeepSeek V4 Flash 0731',
      'name': 'DeepSeek-V4-Flash-0731',
      'vendor': 'DeepSeek',
      'sources': [
        'deepswe_v11',
        'deepswe_v10',
        'frontiercode_v11',
        'lastexam_v10'
      ],
      'scores': {
        'deepswe_v11': 53.7,
        'deepswe_v10': 54.4,
        'frontiercode_v11': 18.8,
        'lastexam_v10': 25.2
      },
      'mean': 38,
      'stddev': 16.19,
      'flag': 'alert'
    },
    {
      'canonId': 'GLM-5.3-Flash',
      'name': 'glm-5-3-flash',
      'vendor': 'zAI',
      'sources': [
        'deepswe_v11',
        'frontiercode_v11',
        'lastexam_v10'
      ],
      'scores': {
        'deepswe_v11': 63,
        'frontiercode_v11': 31.8,
        'lastexam_v10': 26.3
      },
      'mean': 40.4,
      'stddev': 16.16,
      'flag': 'alert'
    },
    {
      'canonId': 'Gemini 3.7 Flash',
      'name': 'gemini-3-7-flash',
      'vendor': 'Google',
      'sources': [
        'deepswe_v11',
        'frontiercode_v11',
        'lastexam_v10'
      ],
      'scores': {
        'deepswe_v11': 65,
        'frontiercode_v11': 43.6,
        'lastexam_v10': 26.3
      },
      'mean': 45,
      'stddev': 15.83,
      'flag': 'alert'
    },
    {
      'canonId': 'DeepSeek V4 Pro 0813',
      'name': 'DeepSeek V4 Pro 0813',
      'vendor': 'DeepSeek',
      'sources': [
        'deepswe_v11',
        'deepswe_v10',
        'frontiercode_v11',
        'lastexam_v10'
      ],
      'scores': {
        'deepswe_v11': 63,
        'deepswe_v10': 35.35,
        'frontiercode_v11': 23.1,
        'lastexam_v10': 27.6
      },
      'mean': 37.3,
      'stddev': 15.49,
      'flag': 'alert'
    },
    {
      'canonId': 'Gemini 3.8 Flash',
      'name': 'Gemini 3.8 Flash',
      'vendor': 'Google',
      'sources': [
        'datalearner',
        'deepswe_v11',
        'frontiercode_v11'
      ],
      'scores': {
        'datalearner': 73.75,
        'deepswe_v11': 74,
        'frontiercode_v11': 41.2
      },
      'mean': 63,
      'stddev': 15.4,
      'flag': 'alert'
    },
    {
      'canonId': 'DeepSeek V4 Flash Vision Exp',
      'name': 'DeepSeek-V4-Flash-Vision-Exp',
      'vendor': 'DeepSeek',
      'sources': [
        'deepswe_v11',
        'deepswe_v10',
        'lastexam_v10'
      ],
      'scores': {
        'deepswe_v11': 59.3,
        'deepswe_v10': 59.3,
        'lastexam_v10': 27.3
      },
      'mean': 48.6,
      'stddev': 15.08,
      'flag': 'alert'
    },
    {
      'canonId': 'Kimi K3.1 Pro',
      'name': 'Kimi K3.1 Pro',
      'vendor': 'Moonshot',
      'sources': [
        'datalearner',
        'deepswe_v11',
        'deepswe_v10',
        'lastexam_v10'
      ],
      'scores': {
        'datalearner': 75.5,
        'deepswe_v11': 75.5,
        'deepswe_v10': 75.5,
        'lastexam_v10': 43.2
      },
      'mean': 67.4,
      'stddev': 13.99,
      'flag': 'alert'
    },
    {
      'canonId': 'GPT-5.6 Terra',
      'name': 'gpt-5-6-terra',
      'vendor': 'OpenAI',
      'sources': [
        'deepswe_v11',
        'deepswe_v10',
        'frontiercode_v11',
        'lastexam_v10'
      ],
      'scores': {
        'deepswe_v11': 70,
        'deepswe_v10': 69.6,
        'frontiercode_v11': 41.3,
        'lastexam_v10': 50.7
      },
      'mean': 57.9,
      'stddev': 12.36,
      'flag': 'alert'
    },
    {
      'canonId': 'GPT-5.5',
      'name': 'gpt-5-5',
      'vendor': 'OpenAI',
      'sources': [
        'deepswe_v11',
        'deepswe_v10',
        'frontiercode_v11',
        'lastexam_v10'
      ],
      'scores': {
        'deepswe_v11': 67,
        'deepswe_v10': 70,
        'frontiercode_v11': 43,
        'lastexam_v10': 47.9
      },
      'mean': 57,
      'stddev': 11.7,
      'flag': 'alert'
    },
    {
      'canonId': 'GPT-5.6 Luna',
      'name': 'gpt-5-6-luna',
      'vendor': 'OpenAI',
      'sources': [
        'deepswe_v11',
        'deepswe_v10',
        'frontiercode_v11',
        'lastexam_v10'
      ],
      'scores': {
        'deepswe_v11': 67,
        'deepswe_v10': 67.2,
        'frontiercode_v11': 39.8,
        'lastexam_v10': 50.4
      },
      'mean': 56.1,
      'stddev': 11.62,
      'flag': 'alert'
    },
    {
      'canonId': 'GPT-5.6 Sol',
      'name': 'GPT-5.6 Sol',
      'vendor': 'OpenAI',
      'sources': [
        'datalearner',
        'deepswe_v11',
        'deepswe_v10',
        'frontiercode_v11',
        'lastexam_v10'
      ],
      'scores': {
        'datalearner': 72.7,
        'deepswe_v11': 73,
        'deepswe_v10': 72.7,
        'frontiercode_v11': 47.5,
        'lastexam_v10': 53.6
      },
      'mean': 63.9,
      'stddev': 11.07,
      'flag': 'alert'
    },
    {
      'canonId': 'SWE-2',
      'name': 'SWE-2',
      'vendor': 'Cognition',
      'sources': [
        'datalearner',
        'deepswe_v11',
        'frontiercode_v11'
      ],
      'scores': {
        'datalearner': 73,
        'deepswe_v11': 73,
        'frontiercode_v11': 50
      },
      'mean': 65.3,
      'stddev': 10.84,
      'flag': 'alert'
    },
    {
      'canonId': 'GPT-6.1 Sol',
      'name': 'GPT-6.1 Sol',
      'vendor': 'OpenAI',
      'sources': [
        'datalearner',
        'deepswe_v11',
        'frontiercode_v11',
        'lastexam_v10'
      ],
      'scores': {
        'datalearner': 75.2,
        'deepswe_v11': 75.2,
        'frontiercode_v11': 50.2,
        'lastexam_v10': 58.6
      },
      'mean': 64.8,
      'stddev': 10.82,
      'flag': 'alert'
    },
    {
      'canonId': 'Qwen3.6-Plus',
      'name': 'qwen3-6-plus',
      'vendor': 'Alibaba',
      'sources': [
        'deepswe_v10',
        'lastexam_v10'
      ],
      'scores': {
        'deepswe_v10': 3,
        'lastexam_v10': 24.6
      },
      'mean': 13.8,
      'stddev': 10.8,
      'flag': 'alert'
    },
    {
      'canonId': 'Kimi K3',
      'name': 'kimi-k3',
      'vendor': 'Moonshot',
      'sources': [
        'deepswe_v11',
        'deepswe_v10',
        'frontiercode_v11',
        'lastexam_v10'
      ],
      'scores': {
        'deepswe_v11': 69,
        'deepswe_v10': 67.5,
        'frontiercode_v11': 44.2,
        'lastexam_v10': 51.6
      },
      'mean': 58.1,
      'stddev': 10.52,
      'flag': 'alert'
    },
    {
      'canonId': 'Gemini 3.1 Pro Preview',
      'name': 'gemini-3-1-pro-preview',
      'vendor': 'Google',
      'sources': [
        'deepswe_v11',
        'deepswe_v10',
        'lastexam_v10'
      ],
      'scores': {
        'deepswe_v11': 12,
        'deepswe_v10': 10,
        'lastexam_v10': 32.7
      },
      'mean': 18.2,
      'stddev': 10.26,
      'flag': 'alert'
    },
    {
      'canonId': 'Muse Spark 1.3',
      'name': 'Muse Spark 1.3',
      'vendor': 'Meta',
      'sources': [
        'datalearner',
        'lastexam_v10'
      ],
      'scores': {
        'datalearner': 75.4,
        'lastexam_v10': 55.8
      },
      'mean': 65.6,
      'stddev': 9.8,
      'flag': 'warn'
    },
    {
      'canonId': 'Claude Opus 5',
      'name': 'Claude Opus 5',
      'vendor': 'Anthropic',
      'sources': [
        'datalearner',
        'deepswe_v11',
        'frontiercode_v11',
        'lastexam_v10'
      ],
      'scores': {
        'datalearner': 73.23,
        'deepswe_v11': 74,
        'frontiercode_v11': 53.4,
        'lastexam_v10': 55.9
      },
      'mean': 64.1,
      'stddev': 9.53,
      'flag': 'warn'
    },
    {
      'canonId': 'Grok 4.6',
      'name': 'grok-4-6',
      'vendor': 'xAI',
      'sources': [
        'deepswe_v11',
        'frontiercode_v11'
      ],
      'scores': {
        'deepswe_v11': 67,
        'frontiercode_v11': 48
      },
      'mean': 57.5,
      'stddev': 9.5,
      'flag': 'warn'
    },
    {
      'canonId': 'Claude Fable 5',
      'name': 'claude-fable-5',
      'vendor': 'Anthropic',
      'sources': [
        'deepswe_v11',
        'frontiercode_v11',
        'lastexam_v10'
      ],
      'scores': {
        'deepswe_v11': 70,
        'frontiercode_v11': 53.5,
        'lastexam_v10': 48.7
      },
      'mean': 57.4,
      'stddev': 9.12,
      'flag': 'warn'
    },
    {
      'canonId': 'GPT-6 Astra',
      'name': 'GPT-6 Astra',
      'vendor': 'OpenAI',
      'sources': [
        'datalearner',
        'deepswe_v11',
        'frontiercode_v11',
        'lastexam_v10'
      ],
      'scores': {
        'datalearner': 73.33,
        'deepswe_v11': 74,
        'frontiercode_v11': 53.3,
        'lastexam_v10': 59.3
      },
      'mean': 65,
      'stddev': 8.94,
      'flag': 'warn'
    },
    {
      'canonId': 'MiniMax M3.1 Flash',
      'name': 'MiniMax M3.1 Flash',
      'vendor': 'MiniMax',
      'sources': [
        'datalearner',
        'deepswe_v11',
        'lastexam_v10'
      ],
      'scores': {
        'datalearner': 72.9,
        'deepswe_v11': 73.7,
        'lastexam_v10': 55
      },
      'mean': 67.2,
      'stddev': 8.63,
      'flag': 'warn'
    },
    {
      'canonId': 'Claude Opus 5.5',
      'name': 'Claude Opus 5.5',
      'vendor': 'Anthropic',
      'sources': [
        'datalearner',
        'deepswe_v11',
        'frontiercode_v11',
        'lastexam_v10'
      ],
      'scores': {
        'datalearner': 74.2,
        'deepswe_v11': 74.2,
        'frontiercode_v11': 54.6,
        'lastexam_v10': 63.2
      },
      'mean': 66.6,
      'stddev': 8.23,
      'flag': 'warn'
    },
    {
      'canonId': 'GPT-5.4',
      'name': 'gpt-5-4',
      'vendor': 'OpenAI',
      'sources': [
        'deepswe_v11',
        'deepswe_v10',
        'lastexam_v10'
      ],
      'scores': {
        'deepswe_v11': 52,
        'deepswe_v10': 56,
        'lastexam_v10': 37.3
      },
      'mean': 48.4,
      'stddev': 8.04,
      'flag': 'warn'
    },
    {
      'canonId': 'GLM-5.2',
      'name': 'glm-5-2',
      'vendor': 'zAI',
      'sources': [
        'deepswe_v11',
        'deepswe_v10',
        'frontiercode_v11',
        'lastexam_v10'
      ],
      'scores': {
        'deepswe_v11': 44,
        'deepswe_v10': 42,
        'frontiercode_v11': 24.5,
        'lastexam_v10': 41.1
      },
      'mean': 37.9,
      'stddev': 7.81,
      'flag': 'warn'
    },
    {
      'canonId': 'MiniMax-M2.7',
      'name': 'minimax-m2-7',
      'vendor': 'MiniMax',
      'sources': [
        'deepswe_v10',
        'lastexam_v10'
      ],
      'scores': {
        'deepswe_v10': 0,
        'lastexam_v10': 14.2
      },
      'mean': 7.1,
      'stddev': 7.1,
      'flag': 'warn'
    },
    {
      'canonId': 'Composer 2.5',
      'name': 'Composer 2.5',
      'vendor': 'Cursor',
      'sources': [
        'frontiercode_v11',
        'lastexam_v10'
      ],
      'scores': {
        'frontiercode_v11': 25.6,
        'lastexam_v10': 39.5
      },
      'mean': 32.6,
      'stddev': 6.95,
      'flag': 'warn'
    },
    {
      'canonId': 'Qwen3.7-Max',
      'name': 'qwen3-7-max',
      'vendor': 'Alibaba',
      'sources': [
        'deepswe_v10',
        'lastexam_v10'
      ],
      'scores': {
        'deepswe_v10': 18,
        'lastexam_v10': 31.6
      },
      'mean': 24.8,
      'stddev': 6.8,
      'flag': 'warn'
    },
    {
      'canonId': 'Claude Opus 4.7',
      'name': 'claude-opus-4-7',
      'vendor': 'Anthropic',
      'sources': [
        'deepswe_v10',
        'frontiercode_v11',
        'lastexam_v10'
      ],
      'scores': {
        'deepswe_v10': 54,
        'frontiercode_v11': 38.5,
        'lastexam_v10': 42.5
      },
      'mean': 45,
      'stddev': 6.57,
      'flag': 'warn'
    },
    {
      'canonId': 'Claude Opus 4.8',
      'name': 'claude-opus-4-8',
      'vendor': 'Anthropic',
      'sources': [
        'deepswe_v11',
        'deepswe_v10',
        'frontiercode_v11',
        'lastexam_v10'
      ],
      'scores': {
        'deepswe_v11': 59,
        'deepswe_v10': 58,
        'frontiercode_v11': 46.5,
        'lastexam_v10': 45.1
      },
      'mean': 52.2,
      'stddev': 6.38,
      'flag': 'warn'
    },
    {
      'canonId': 'Gemini 3.6 Flash',
      'name': 'gemini-3-6-flash',
      'vendor': 'Google',
      'sources': [
        'deepswe_v11',
        'frontiercode_v11'
      ],
      'scores': {
        'deepswe_v11': 47,
        'frontiercode_v11': 34.4
      },
      'mean': 40.7,
      'stddev': 6.3,
      'flag': 'warn'
    },
    {
      'canonId': 'Claude Sonnet 5',
      'name': 'claude-sonnet-5',
      'vendor': 'Anthropic',
      'sources': [
        'deepswe_v11',
        'frontiercode_v11'
      ],
      'scores': {
        'deepswe_v11': 54,
        'frontiercode_v11': 42.7
      },
      'mean': 48.4,
      'stddev': 5.65,
      'flag': 'warn'
    },
    {
      'canonId': 'GLM-5.1',
      'name': 'glm-5-1',
      'vendor': 'zAI',
      'sources': [
        'deepswe_v10',
        'lastexam_v10'
      ],
      'scores': {
        'deepswe_v10': 18,
        'lastexam_v10': 28.1
      },
      'mean': 23.1,
      'stddev': 5.05,
      'flag': 'warn'
    },
    {
      'canonId': 'GPT-6 Sol',
      'name': 'GPT-6 Sol',
      'vendor': 'OpenAI',
      'sources': [
        'frontiercode_v11',
        'lastexam_v10'
      ],
      'scores': {
        'frontiercode_v11': 49.3,
        'lastexam_v10': 58.6
      },
      'mean': 54,
      'stddev': 4.65,
      'flag': 'ok'
    },
    {
      'canonId': 'Grok 4.5',
      'name': 'grok-4-5',
      'vendor': 'xAI',
      'sources': [
        'deepswe_v11',
        'deepswe_v10',
        'frontiercode_v11',
        'lastexam_v10'
      ],
      'scores': {
        'deepswe_v11': 54,
        'deepswe_v10': 53,
        'frontiercode_v11': 42.4,
        'lastexam_v10': 51.2
      },
      'mean': 50.2,
      'stddev': 4.59,
      'flag': 'ok'
    },
    {
      'canonId': 'GPT-6 Luna',
      'name': 'GPT-6 Luna',
      'vendor': 'OpenAI',
      'sources': [
        'frontiercode_v11',
        'lastexam_v10'
      ],
      'scores': {
        'frontiercode_v11': 42.4,
        'lastexam_v10': 50.9
      },
      'mean': 46.7,
      'stddev': 4.25,
      'flag': 'ok'
    },
    {
      'canonId': 'Gemini 3.5 Flash',
      'name': 'gemini-3-5-flash',
      'vendor': 'Google',
      'sources': [
        'deepswe_v11',
        'deepswe_v10'
      ],
      'scores': {
        'deepswe_v11': 36,
        'deepswe_v10': 28
      },
      'mean': 32,
      'stddev': 4,
      'flag': 'ok'
    },
    {
      'canonId': 'Qwen3.8-Flash',
      'name': 'Qwen3.8-Flash',
      'vendor': 'Alibaba',
      'sources': [
        'deepswe_v11',
        'lastexam_v10'
      ],
      'scores': {
        'deepswe_v11': 58.7,
        'lastexam_v10': 51.2
      },
      'mean': 55,
      'stddev': 3.75,
      'flag': 'ok'
    },
    {
      'canonId': 'Claude Sonnet 4.6',
      'name': 'claude-sonnet-4-6',
      'vendor': 'Anthropic',
      'sources': [
        'deepswe_v11',
        'deepswe_v10',
        'frontiercode_v11'
      ],
      'scores': {
        'deepswe_v11': 30,
        'deepswe_v10': 32,
        'frontiercode_v11': 24.3
      },
      'mean': 28.8,
      'stddev': 3.26,
      'flag': 'ok'
    },
    {
      'canonId': 'MiniMax-M3',
      'name': 'minimax-m3',
      'vendor': 'MiniMax',
      'sources': [
        'deepswe_v10',
        'frontiercode_v11'
      ],
      'scores': {
        'deepswe_v10': 20,
        'frontiercode_v11': 14.7
      },
      'mean': 17.4,
      'stddev': 2.65,
      'flag': 'ok'
    },
    {
      'canonId': 'Qwen3.8-Max',
      'name': 'qwen3-8-max',
      'vendor': 'Alibaba',
      'sources': [
        'deepswe_v11',
        'lastexam_v10'
      ],
      'scores': {
        'deepswe_v11': 57,
        'lastexam_v10': 52.5
      },
      'mean': 54.8,
      'stddev': 2.25,
      'flag': 'ok'
    },
    {
      'canonId': 'GPT-5.4 Mini',
      'name': 'gpt-5-4-mini',
      'vendor': 'OpenAI',
      'sources': [
        'deepswe_v10',
        'frontiercode_v11'
      ],
      'scores': {
        'deepswe_v10': 24,
        'frontiercode_v11': 27
      },
      'mean': 25.5,
      'stddev': 1.5,
      'flag': 'ok'
    },
    {
      'canonId': 'Kimi-K2.6',
      'name': 'kimi-k2-6',
      'vendor': 'Moonshot',
      'sources': [
        'deepswe_v10',
        'lastexam_v10'
      ],
      'scores': {
        'deepswe_v10': 24,
        'lastexam_v10': 21.7
      },
      'mean': 22.9,
      'stddev': 1.15,
      'flag': 'ok'
    },
    {
      'canonId': 'Claude Opus 4.6',
      'name': 'claude-opus-4-6',
      'vendor': 'Anthropic',
      'sources': [
        'deepswe_v10',
        'frontiercode_v11'
      ],
      'scores': {
        'deepswe_v10': 28,
        'frontiercode_v11': 26.6
      },
      'mean': 27.3,
      'stddev': 0.7,
      'flag': 'ok'
    },
    {
      'canonId': 'Muse Wonder Full',
      'name': 'Muse Wonder Full',
      'vendor': 'Meta',
      'sources': [
        'datalearner',
        'deepswe_v11'
      ],
      'scores': {
        'datalearner': 79,
        'deepswe_v11': 79
      },
      'mean': 79,
      'stddev': 0,
      'flag': 'ok'
    },
    {
      'canonId': 'Muse Wonder',
      'name': 'Muse Wonder',
      'vendor': 'Meta',
      'sources': [
        'datalearner',
        'deepswe_v11'
      ],
      'scores': {
        'datalearner': 78.8,
        'deepswe_v11': 78.8
      },
      'mean': 78.8,
      'stddev': 0,
      'flag': 'ok'
    },
    {
      'canonId': 'Qwen4-Max',
      'name': 'Qwen4-Max',
      'vendor': 'Alibaba',
      'sources': [
        'datalearner',
        'deepswe_v11'
      ],
      'scores': {
        'datalearner': 75.7,
        'deepswe_v11': 75.7
      },
      'mean': 75.7,
      'stddev': 0,
      'flag': 'ok'
    },
    {
      'canonId': 'Tencent Hy4',
      'name': 'Hy4',
      'vendor': 'Tencent',
      'sources': [
        'datalearner',
        'deepswe_v11'
      ],
      'scores': {
        'datalearner': 74.9,
        'deepswe_v11': 74.9
      },
      'mean': 74.9,
      'stddev': 0,
      'flag': 'ok'
    },
    {
      'canonId': 'Claude Fable 5.2',
      'name': 'Claude Fable 5.2',
      'vendor': 'Anthropic',
      'sources': [
        'datalearner',
        'deepswe_v11'
      ],
      'scores': {
        'datalearner': 74.3,
        'deepswe_v11': 74.3
      },
      'mean': 74.3,
      'stddev': 0,
      'flag': 'ok'
    },
    {
      'canonId': 'MAI Code 2',
      'name': 'MAI Code 2',
      'vendor': '微软',
      'sources': [
        'datalearner',
        'deepswe_v11'
      ],
      'scores': {
        'datalearner': 73.2,
        'deepswe_v11': 73.2
      },
      'mean': 73.2,
      'stddev': 0,
      'flag': 'ok'
    },
    {
      'canonId': 'Inkling 2 Small',
      'name': 'Inkling 2 Small',
      'vendor': 'Thinking Machines',
      'sources': [
        'datalearner',
        'deepswe_v11'
      ],
      'scores': {
        'datalearner': 72.1,
        'deepswe_v11': 72.1
      },
      'mean': 72.1,
      'stddev': 0,
      'flag': 'ok'
    },
    {
      'canonId': 'ERNIE 5.5 Flash Preview',
      'name': 'ERNIE 5.5 Flash Preview',
      'vendor': 'Baidu',
      'sources': [
        'datalearner',
        'deepswe_v11'
      ],
      'scores': {
        'datalearner': 71.2,
        'deepswe_v11': 71.2
      },
      'mean': 71.2,
      'stddev': 0,
      'flag': 'ok'
    },
    {
      'canonId': 'Seed 2.1 Pro',
      'name': 'Seed 2.1 Pro',
      'vendor': 'ByteDance',
      'sources': [
        'deepswe_v11',
        'deepswe_v10'
      ],
      'scores': {
        'deepswe_v11': 32.7,
        'deepswe_v10': 32.7
      },
      'mean': 32.7,
      'stddev': 0,
      'flag': 'ok'
    },
    {
      'canonId': 'Tencent Hy3',
      'name': 'Hy3',
      'vendor': 'Tencent',
      'sources': [
        'deepswe_v11',
        'deepswe_v10'
      ],
      'scores': {
        'deepswe_v11': 28,
        'deepswe_v10': 28
      },
      'mean': 28,
      'stddev': 0,
      'flag': 'ok'
    },
    {
      'canonId': 'Seed 2.1 Turbo',
      'name': 'Seed 2.1 Turbo',
      'vendor': 'ByteDance',
      'sources': [
        'deepswe_v11',
        'deepswe_v10'
      ],
      'scores': {
        'deepswe_v11': 23,
        'deepswe_v10': 23
      },
      'mean': 23,
      'stddev': 0,
      'flag': 'ok'
    }
  ],
  'completeness': {
    'aicodingdaily': {
      'rate': 1,
      'total': 66,
      'complete': 66,
      'modelCount': 66,
      'missingFields': {},
      'flag': 'ok'
    },
    'apex': {
      'rate': 1,
      'total': 83,
      'complete': 83,
      'modelCount': 83,
      'missingFields': {},
      'flag': 'ok'
    },
    'datalearner': {
      'rate': 1,
      'total': 30,
      'complete': 30,
      'modelCount': 30,
      'missingFields': {},
      'flag': 'ok'
    },
    'arcagi3': {
      'rate': 1,
      'total': 28,
      'complete': 28,
      'modelCount': 28,
      'missingFields': {},
      'flag': 'ok'
    },
    'arena_agent': {
      'rate': 1,
      'total': 69,
      'complete': 69,
      'modelCount': 69,
      'missingFields': {},
      'flag': 'ok'
    },
    'arena_webdev': {
      'rate': 1,
      'total': 158,
      'complete': 158,
      'modelCount': 158,
      'missingFields': {},
      'flag': 'ok'
    },
    'arenaofbias': {
      'rate': 1,
      'total': 94,
      'complete': 94,
      'modelCount': 94,
      'missingFields': {},
      'flag': 'ok'
    },
    'automationbench': {
      'rate': 1,
      'total': 75,
      'complete': 75,
      'modelCount': 75,
      'missingFields': {},
      'flag': 'ok'
    },
    'benchcad': {
      'rate': 0.824,
      'total': 17,
      'complete': 14,
      'modelCount': 17,
      'missingFields': {
        'score': 3
      },
      'flag': 'ok'
    },
    'cursorbench': {
      'rate': 1,
      'total': 12,
      'complete': 12,
      'modelCount': 12,
      'missingFields': {},
      'flag': 'ok'
    },
    'deepswe_v11': {
      'rate': 1,
      'total': 53,
      'complete': 53,
      'modelCount': 53,
      'missingFields': {},
      'flag': 'ok'
    },
    'deepswe_v10': {
      'rate': 1,
      'total': 34,
      'complete': 34,
      'modelCount': 34,
      'missingFields': {},
      'flag': 'ok'
    },
    'frontiercode': {
      'rate': 1,
      'total': 36,
      'complete': 36,
      'modelCount': 36,
      'missingFields': {},
      'flag': 'ok'
    },
    'frontiercode_v11': {
      'rate': 1,
      'total': 45,
      'complete': 45,
      'modelCount': 45,
      'missingFields': {},
      'flag': 'ok'
    },
    'frontierswe': {
      'rate': 1,
      'total': 28,
      'complete': 28,
      'modelCount': 28,
      'missingFields': {},
      'flag': 'ok'
    },
    'hle': {
      'rate': 1,
      'total': 282,
      'complete': 282,
      'modelCount': 282,
      'missingFields': {},
      'flag': 'ok'
    },
    'lastexam': {
      'rate': 1,
      'total': 39,
      'complete': 39,
      'modelCount': 39,
      'missingFields': {},
      'flag': 'ok'
    },
    'lastexam_v10': {
      'rate': 1,
      'total': 45,
      'complete': 45,
      'modelCount': 45,
      'missingFields': {},
      'flag': 'ok'
    },
    'llm2014': {
      'rate': 0,
      'total': 134,
      'complete': 0,
      'modelCount': 134,
      'missingFields': {
        'score': 134
      },
      'flag': 'warn'
    },
    'modeldial': {
      'rate': 1,
      'total': 56,
      'complete': 56,
      'modelCount': 56,
      'missingFields': {},
      'flag': 'ok'
    },
    'nl2repo': {
      'rate': 1,
      'total': 56,
      'complete': 56,
      'modelCount': 56,
      'missingFields': {},
      'flag': 'ok'
    },
    'octathlon': {
      'rate': 1,
      'total': 27,
      'complete': 27,
      'modelCount': 27,
      'missingFields': {},
      'flag': 'ok'
    },
    'osworld': {
      'rate': 1,
      'total': 77,
      'complete': 77,
      'modelCount': 77,
      'missingFields': {},
      'flag': 'ok'
    },
    'programbench': {
      'rate': 0.962,
      'total': 79,
      'complete': 76,
      'modelCount': 79,
      'missingFields': {
        'score': 3
      },
      'flag': 'ok'
    },
    'tbench': {
      'rate': 1,
      'total': 108,
      'complete': 108,
      'modelCount': 108,
      'missingFields': {},
      'flag': 'ok'
    },
    'tbench_v21': {
      'rate': 1,
      'total': 83,
      'complete': 83,
      'modelCount': 83,
      'missingFields': {},
      'flag': 'ok'
    },
    'tbench_v3': {
      'rate': 1,
      'total': 12,
      'complete': 12,
      'modelCount': 12,
      'missingFields': {},
      'flag': 'ok'
    },
    'tbscience': {
      'rate': 1,
      'total': 20,
      'complete': 20,
      'modelCount': 20,
      'missingFields': {},
      'flag': 'ok'
    },
    'vals_codemigration': {
      'rate': 1,
      'total': 79,
      'complete': 79,
      'modelCount': 79,
      'missingFields': {},
      'flag': 'ok'
    },
    'vals_vibe_code': {
      'rate': 1,
      'total': 134,
      'complete': 134,
      'modelCount': 134,
      'missingFields': {},
      'flag': 'ok'
    }
  },
  'timeliness': {
    'aa_coding_agents': {
      'updated': '2026-11-13',
      'ageDays': 12,
      'flag': 'alert',
      'warnAgeDays': 3,
      'alertAgeDays': 7
    },
    'aicodingdaily': {
      'updated': '2026-11-25',
      'ageDays': 0,
      'flag': 'ok',
      'warnAgeDays': 7,
      'alertAgeDays': 14
    },
    'apex': {
      'updated': '2026-11-25',
      'ageDays': 0,
      'flag': 'ok',
      'warnAgeDays': 3,
      'alertAgeDays': 7
    },
    'datalearner': {
      'updated': '2026-11-25',
      'ageDays': 0,
      'flag': 'ok',
      'warnAgeDays': 3,
      'alertAgeDays': 7
    },
    'arcagi3': {
      'updated': '2026-11-25',
      'ageDays': 0,
      'flag': 'ok',
      'warnAgeDays': 3,
      'alertAgeDays': 7
    },
    'arena_agent': {
      'updated': '2026-11-25',
      'ageDays': 0,
      'flag': 'ok',
      'warnAgeDays': 7,
      'alertAgeDays': 14
    },
    'arena_webdev': {
      'updated': '2026-11-25',
      'ageDays': 0,
      'flag': 'ok',
      'warnAgeDays': 3,
      'alertAgeDays': 7
    },
    'arenaofbias': {
      'updated': '2026-11-25',
      'ageDays': 0,
      'flag': 'ok',
      'warnAgeDays': 3,
      'alertAgeDays': 7
    },
    'automationbench': {
      'updated': '2026-11-25',
      'ageDays': 0,
      'flag': 'ok',
      'warnAgeDays': 3,
      'alertAgeDays': 7
    },
    'benchcad': {
      'updated': '2026-11-25',
      'ageDays': 0,
      'flag': 'ok',
      'warnAgeDays': 3,
      'alertAgeDays': 7
    },
    'cursorbench': {
      'updated': '2026-11-25',
      'ageDays': 0,
      'flag': 'ok',
      'warnAgeDays': 3,
      'alertAgeDays': 7
    },
    'deepswe_v11': {
      'updated': '2026-11-25',
      'ageDays': 0,
      'flag': 'ok',
      'warnAgeDays': 3,
      'alertAgeDays': 7
    },
    'deepswe_v10': {
      'updated': '2026-11-25',
      'ageDays': 0,
      'flag': 'ok',
      'warnAgeDays': 3,
      'alertAgeDays': 7
    },
    'frontiercode': {
      'updated': '2026-11-25',
      'ageDays': 0,
      'flag': 'ok',
      'warnAgeDays': 3,
      'alertAgeDays': 7
    },
    'frontiercode_v11': {
      'updated': '2026-11-25',
      'ageDays': 0,
      'flag': 'ok',
      'warnAgeDays': 3,
      'alertAgeDays': 7
    },
    'frontierswe': {
      'updated': '2026-11-25',
      'ageDays': 0,
      'flag': 'ok',
      'warnAgeDays': 3,
      'alertAgeDays': 7
    },
    'hle': {
      'updated': '2026-11-25',
      'ageDays': 0,
      'flag': 'ok',
      'warnAgeDays': 3,
      'alertAgeDays': 7
    },
    'lastexam': {
      'updated': '2026-11-25',
      'ageDays': 0,
      'flag': 'ok',
      'warnAgeDays': 3,
      'alertAgeDays': 7
    },
    'lastexam_v10': {
      'updated': '2026-11-25',
      'ageDays': 0,
      'flag': 'ok',
      'warnAgeDays': 3,
      'alertAgeDays': 7
    },
    'llm2014': {
      'updated': '2026-11-25',
      'ageDays': 0,
      'flag': 'ok',
      'warnAgeDays': 3,
      'alertAgeDays': 7
    },
    'modeldial': {
      'updated': '2026-11-25',
      'ageDays': 0,
      'flag': 'ok',
      'warnAgeDays': 3,
      'alertAgeDays': 7
    },
    'nl2repo': {
      'updated': '2026-11-25',
      'ageDays': 0,
      'flag': 'ok',
      'warnAgeDays': 3,
      'alertAgeDays': 7
    },
    'octathlon': {
      'updated': '2026-11-25',
      'ageDays': 0,
      'flag': 'ok',
      'warnAgeDays': 14,
      'alertAgeDays': 30
    },
    'osworld': {
      'updated': '2026-11-25',
      'ageDays': 0,
      'flag': 'ok',
      'warnAgeDays': 3,
      'alertAgeDays': 7
    },
    'programbench': {
      'updated': '2026-11-25',
      'ageDays': 0,
      'flag': 'ok',
      'warnAgeDays': 3,
      'alertAgeDays': 7
    },
    'tbench': {
      'updated': '2026-11-25',
      'ageDays': 0,
      'flag': 'ok',
      'warnAgeDays': 3,
      'alertAgeDays': 7
    },
    'tbench_v21': {
      'updated': '2026-11-25',
      'ageDays': 0,
      'flag': 'ok',
      'warnAgeDays': 3,
      'alertAgeDays': 7
    },
    'tbench_v3': {
      'updated': '2026-11-25',
      'ageDays': 0,
      'flag': 'ok',
      'warnAgeDays': 3,
      'alertAgeDays': 7
    },
    'tbscience': {
      'updated': '2026-11-25',
      'ageDays': 0,
      'flag': 'ok',
      'warnAgeDays': 3,
      'alertAgeDays': 7
    },
    'vals_codemigration': {
      'updated': '2026-11-25',
      'ageDays': 0,
      'flag': 'ok',
      'warnAgeDays': 14,
      'alertAgeDays': 30
    },
    'vals_vibe_code': {
      'updated': '2026-11-25',
      'ageDays': 0,
      'flag': 'ok',
      'warnAgeDays': 14,
      'alertAgeDays': 30
    }
  },
  'alerts': [
    {
      'level': 'error',
      'dimension': 'timeliness',
      'sourceId': 'aa_coding_agents',
      'message': '数据已 12 天未更新(>7 天)'
    },
    {
      'level': 'warn',
      'dimension': 'completeness',
      'sourceId': 'llm2014',
      'message': '必填字段完整率 0.0%(低于 80%)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'deepswe_v11,deepswe_v10,lastexam_v10',
      'message': 'Hy4 preview 跨源分数标准差 19.56(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'datalearner,deepswe_v11,lastexam_v10',
      'message': 'DeepSeek-V4.1-Flash-1017 跨源分数标准差 19.24(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'datalearner,deepswe_v11,lastexam_v10',
      'message': 'MiMo-V2.6-Pro 跨源分数标准差 19(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'datalearner,deepswe_v11,frontiercode_v11,lastexam_v10',
      'message': 'DeepSeek-V4.1-Flash 跨源分数标准差 18.67(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'datalearner,deepswe_v11,frontiercode_v11,lastexam_v10',
      'message': 'Gemini 4 Argon 跨源分数标准差 17.41(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'deepswe_v11,frontiercode_v11,lastexam_v10',
      'message': 'glm-5-3 跨源分数标准差 17.03(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'deepswe_v11,deepswe_v10,frontiercode_v11,lastexam_v10',
      'message': 'DeepSeek-V4-Flash-0731 跨源分数标准差 16.19(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'deepswe_v11,frontiercode_v11,lastexam_v10',
      'message': 'glm-5-3-flash 跨源分数标准差 16.16(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'deepswe_v11,frontiercode_v11,lastexam_v10',
      'message': 'gemini-3-7-flash 跨源分数标准差 15.83(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'deepswe_v11,deepswe_v10,frontiercode_v11,lastexam_v10',
      'message': 'DeepSeek V4 Pro 0813 跨源分数标准差 15.49(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'datalearner,deepswe_v11,frontiercode_v11',
      'message': 'Gemini 3.8 Flash 跨源分数标准差 15.4(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'deepswe_v11,deepswe_v10,lastexam_v10',
      'message': 'DeepSeek-V4-Flash-Vision-Exp 跨源分数标准差 15.08(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'datalearner,deepswe_v11,deepswe_v10,lastexam_v10',
      'message': 'Kimi K3.1 Pro 跨源分数标准差 13.99(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'deepswe_v11,deepswe_v10,frontiercode_v11,lastexam_v10',
      'message': 'gpt-5-6-terra 跨源分数标准差 12.36(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'deepswe_v11,deepswe_v10,frontiercode_v11,lastexam_v10',
      'message': 'gpt-5-5 跨源分数标准差 11.7(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'deepswe_v11,deepswe_v10,frontiercode_v11,lastexam_v10',
      'message': 'gpt-5-6-luna 跨源分数标准差 11.62(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'datalearner,deepswe_v11,deepswe_v10,frontiercode_v11,lastexam_v10',
      'message': 'GPT-5.6 Sol 跨源分数标准差 11.07(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'datalearner,deepswe_v11,frontiercode_v11',
      'message': 'SWE-2 跨源分数标准差 10.84(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'datalearner,deepswe_v11,frontiercode_v11,lastexam_v10',
      'message': 'GPT-6.1 Sol 跨源分数标准差 10.82(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'deepswe_v10,lastexam_v10',
      'message': 'qwen3-6-plus 跨源分数标准差 10.8(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'deepswe_v11,deepswe_v10,frontiercode_v11,lastexam_v10',
      'message': 'kimi-k3 跨源分数标准差 10.52(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'deepswe_v11,deepswe_v10,lastexam_v10',
      'message': 'gemini-3-1-pro-preview 跨源分数标准差 10.26(>10)'
    }
  ]
};
