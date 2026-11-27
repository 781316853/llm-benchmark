// 数据质量报告(由 scripts/lib/quality-report.js 生成)
// 三维交叉验证:一致性(跨源分数标准差)/ 完整性(必填字段齐全率)/ 时效性(数据新鲜度)
// generatedAt=2026-11-27;overallScore 为各源完整性均权(0-1)
// 注:前端暂不展示,仅供抓取端记录与 CI 日志溯源。
window.QUALITY = {
  'generatedAt': '2026-11-27',
  'overallScore': 0.962,
  'sources': [
    {
      'id': 'aa_coding_agents',
      'name': 'AA Coding Agent Index v2.0',
      'status': 'error',
      'modelCount': 36,
      'updated': '2026-11-13',
      'ageDays': 14,
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
      'modelCount': 69,
      'updated': '2026-11-27',
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
      'updated': '2026-11-27',
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
      'updated': '2026-11-27',
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
      'updated': '2026-11-27',
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
      'updated': '2026-11-27',
      'ageDays': 0,
      'completeness': 1,
      'fetchAttempts': 1,
      'errors': []
    },
    {
      'id': 'arena_webdev',
      'name': 'Code Arena WebDev (LMArena)',
      'status': 'ok',
      'modelCount': 114,
      'updated': '2026-11-27',
      'ageDays': 0,
      'completeness': 1,
      'fetchAttempts': 1,
      'errors': []
    },
    {
      'id': 'arenaofbias',
      'name': '亿模亿样 模型效果对比',
      'status': 'ok',
      'modelCount': 95,
      'updated': '2026-11-27',
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
      'updated': '2026-11-27',
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
      'updated': '2026-11-27',
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
      'updated': '2026-11-27',
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
      'updated': '2026-11-27',
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
      'updated': '2026-11-27',
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
      'updated': '2026-11-27',
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
      'updated': '2026-11-27',
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
      'updated': '2026-11-27',
      'ageDays': 0,
      'completeness': 1,
      'fetchAttempts': 1,
      'errors': []
    },
    {
      'id': 'gpqa_diamond',
      'name': 'GPQA Diamond',
      'status': 'ok',
      'modelCount': 251,
      'updated': '2026-11-27',
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
      'updated': '2026-11-27',
      'ageDays': 0,
      'completeness': 1,
      'fetchAttempts': 1,
      'errors': []
    },
    {
      'id': 'hle_diamond',
      'name': 'HLE-Diamond',
      'status': 'ok',
      'modelCount': 25,
      'updated': '2026-11-27',
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
      'updated': '2026-11-27',
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
      'updated': '2026-11-27',
      'ageDays': 0,
      'completeness': 1,
      'fetchAttempts': 1,
      'errors': []
    },
    {
      'id': 'llm2014',
      'name': 'llm2014',
      'status': 'ok',
      'modelCount': 135,
      'updated': '2026-11-27',
      'ageDays': 0,
      'completeness': 0,
      'fetchAttempts': 1,
      'errors': []
    },
    {
      'id': 'modeldial',
      'name': 'ModelDial 雷达',
      'status': 'ok',
      'modelCount': 57,
      'updated': '2026-11-27',
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
      'updated': '2026-11-27',
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
      'updated': '2026-11-27',
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
      'updated': '2026-11-27',
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
      'updated': '2026-11-27',
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
      'updated': '2026-11-27',
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
      'updated': '2026-11-27',
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
      'updated': '2026-11-27',
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
      'updated': '2026-11-27',
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
      'updated': '2026-11-27',
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
      'updated': '2026-11-27',
      'ageDays': 0,
      'completeness': 1,
      'fetchAttempts': 1,
      'errors': []
    }
  ],
  'consistency': [
    {
      'canonId': 'MiniMax-M2.7',
      'name': 'minimax-m2-7',
      'vendor': 'MiniMax',
      'sources': [
        'deepswe_v10',
        'gpqa_diamond',
        'lastexam_v10'
      ],
      'scores': {
        'deepswe_v10': 0,
        'gpqa_diamond': 87,
        'lastexam_v10': 14.2
      },
      'mean': 33.7,
      'stddev': 38.11,
      'flag': 'alert'
    },
    {
      'canonId': 'Inkling',
      'name': 'Inkling',
      'vendor': 'Thinking Machines',
      'sources': [
        'frontiercode_v11',
        'gpqa_diamond'
      ],
      'scores': {
        'frontiercode_v11': 14,
        'gpqa_diamond': 88.26
      },
      'mean': 51.1,
      'stddev': 37.13,
      'flag': 'alert'
    },
    {
      'canonId': 'Nemotron 3 Ultra',
      'name': 'Nemotron 3 Ultra',
      'vendor': 'NVIDIA',
      'sources': [
        'frontiercode_v11',
        'gpqa_diamond'
      ],
      'scores': {
        'frontiercode_v11': 13.6,
        'gpqa_diamond': 87
      },
      'mean': 50.3,
      'stddev': 36.7,
      'flag': 'alert'
    },
    {
      'canonId': 'Qwen3.7-Plus',
      'name': 'Qwen 3.7 Plus',
      'vendor': 'Alibaba',
      'sources': [
        'frontiercode_v11',
        'gpqa_diamond'
      ],
      'scores': {
        'frontiercode_v11': 10.2,
        'gpqa_diamond': 81.82
      },
      'mean': 46,
      'stddev': 35.81,
      'flag': 'alert'
    },
    {
      'canonId': 'Gemini 3.1 Pro Preview',
      'name': 'gemini-3-1-pro-preview',
      'vendor': 'Google',
      'sources': [
        'deepswe_v11',
        'deepswe_v10',
        'gpqa_diamond',
        'lastexam_v10'
      ],
      'scores': {
        'deepswe_v11': 12,
        'deepswe_v10': 10,
        'gpqa_diamond': 94.3,
        'lastexam_v10': 32.7
      },
      'mean': 37.3,
      'stddev': 34.12,
      'flag': 'alert'
    },
    {
      'canonId': 'Qwen3.7-Max',
      'name': 'qwen3-7-max',
      'vendor': 'Alibaba',
      'sources': [
        'deepswe_v10',
        'gpqa_diamond',
        'lastexam_v10'
      ],
      'scores': {
        'deepswe_v10': 18,
        'gpqa_diamond': 92.4,
        'lastexam_v10': 31.6
      },
      'mean': 47.3,
      'stddev': 32.35,
      'flag': 'alert'
    },
    {
      'canonId': 'Muse Spark Open',
      'name': 'Muse Spark Open',
      'vendor': 'Meta',
      'sources': [
        'gpqa_diamond',
        'hle_diamond'
      ],
      'scores': {
        'gpqa_diamond': 89,
        'hle_diamond': 24.9
      },
      'mean': 57,
      'stddev': 32.05,
      'flag': 'alert'
    },
    {
      'canonId': 'Step 5 Preview',
      'name': 'Step 5 Preview',
      'vendor': 'StepFun',
      'sources': [
        'gpqa_diamond',
        'lastexam_v10'
      ],
      'scores': {
        'gpqa_diamond': 93.5,
        'lastexam_v10': 29.5
      },
      'mean': 61.5,
      'stddev': 32,
      'flag': 'alert'
    },
    {
      'canonId': 'Kimi-K2.6',
      'name': 'kimi-k2-6',
      'vendor': 'Moonshot',
      'sources': [
        'deepswe_v10',
        'gpqa_diamond',
        'lastexam_v10'
      ],
      'scores': {
        'deepswe_v10': 24,
        'gpqa_diamond': 90.5,
        'lastexam_v10': 21.7
      },
      'mean': 45.4,
      'stddev': 31.9,
      'flag': 'alert'
    },
    {
      'canonId': 'MiniMax-M3',
      'name': 'minimax-m3',
      'vendor': 'MiniMax',
      'sources': [
        'deepswe_v10',
        'frontiercode_v11',
        'gpqa_diamond'
      ],
      'scores': {
        'deepswe_v10': 20,
        'frontiercode_v11': 14.7,
        'gpqa_diamond': 81.31
      },
      'mean': 38.7,
      'stddev': 30.23,
      'flag': 'alert'
    },
    {
      'canonId': 'Claude Opus 4.6',
      'name': 'claude-opus-4-6',
      'vendor': 'Anthropic',
      'sources': [
        'deepswe_v10',
        'frontiercode_v11',
        'gpqa_diamond'
      ],
      'scores': {
        'deepswe_v10': 28,
        'frontiercode_v11': 26.6,
        'gpqa_diamond': 91.31
      },
      'mean': 48.6,
      'stddev': 30.18,
      'flag': 'alert'
    },
    {
      'canonId': 'GLM-5.1',
      'name': 'glm-5-1',
      'vendor': 'zAI',
      'sources': [
        'deepswe_v10',
        'gpqa_diamond',
        'lastexam_v10'
      ],
      'scores': {
        'deepswe_v10': 18,
        'gpqa_diamond': 86.2,
        'lastexam_v10': 28.1
      },
      'mean': 44.1,
      'stddev': 30.05,
      'flag': 'alert'
    },
    {
      'canonId': 'Tencent Hy3',
      'name': 'Hy3',
      'vendor': 'Tencent',
      'sources': [
        'deepswe_v11',
        'deepswe_v10',
        'gpqa_diamond'
      ],
      'scores': {
        'deepswe_v11': 28,
        'deepswe_v10': 28,
        'gpqa_diamond': 90.4
      },
      'mean': 48.8,
      'stddev': 29.42,
      'flag': 'alert'
    },
    {
      'canonId': 'Gemini 3.5 Flash',
      'name': 'gemini-3-5-flash',
      'vendor': 'Google',
      'sources': [
        'deepswe_v11',
        'deepswe_v10',
        'gpqa_diamond'
      ],
      'scores': {
        'deepswe_v11': 36,
        'deepswe_v10': 28,
        'gpqa_diamond': 92.8
      },
      'mean': 52.3,
      'stddev': 28.85,
      'flag': 'alert'
    },
    {
      'canonId': 'Claude Sonnet 4.6',
      'name': 'claude-sonnet-4-6',
      'vendor': 'Anthropic',
      'sources': [
        'deepswe_v11',
        'deepswe_v10',
        'frontiercode_v11',
        'gpqa_diamond'
      ],
      'scores': {
        'deepswe_v11': 30,
        'deepswe_v10': 32,
        'frontiercode_v11': 24.3,
        'gpqa_diamond': 89.9
      },
      'mean': 44.1,
      'stddev': 26.62,
      'flag': 'alert'
    },
    {
      'canonId': 'Claude Sonnet 5.5',
      'name': 'Claude Sonnet 5.5',
      'vendor': 'Anthropic',
      'sources': [
        'frontiercode_v11',
        'gpqa_diamond',
        'hle_diamond'
      ],
      'scores': {
        'frontiercode_v11': 52.1,
        'gpqa_diamond': 95.58,
        'hle_diamond': 33.1
      },
      'mean': 60.3,
      'stddev': 26.15,
      'flag': 'alert'
    },
    {
      'canonId': 'Muse Spark 1.3',
      'name': 'Muse Spark 1.3',
      'vendor': 'Meta',
      'sources': [
        'datalearner',
        'gpqa_diamond',
        'hle_diamond',
        'lastexam_v10'
      ],
      'scores': {
        'datalearner': 75.4,
        'gpqa_diamond': 94.14,
        'hle_diamond': 24.6,
        'lastexam_v10': 55.8
      },
      'mean': 62.5,
      'stddev': 25.73,
      'flag': 'alert'
    },
    {
      'canonId': 'Gemini 3.6 Flash',
      'name': 'gemini-3-6-flash',
      'vendor': 'Google',
      'sources': [
        'deepswe_v11',
        'frontiercode_v11',
        'gpqa_diamond'
      ],
      'scores': {
        'deepswe_v11': 47,
        'frontiercode_v11': 34.4,
        'gpqa_diamond': 94.13
      },
      'mean': 58.5,
      'stddev': 25.71,
      'flag': 'alert'
    },
    {
      'canonId': 'GLM-5.3-Flash',
      'name': 'glm-5-3-flash',
      'vendor': 'zAI',
      'sources': [
        'deepswe_v11',
        'frontiercode_v11',
        'gpqa_diamond',
        'lastexam_v10'
      ],
      'scores': {
        'deepswe_v11': 63,
        'frontiercode_v11': 31.8,
        'gpqa_diamond': 90.15,
        'lastexam_v10': 26.3
      },
      'mean': 52.8,
      'stddev': 25.7,
      'flag': 'alert'
    },
    {
      'canonId': 'Gemini 3.7 Flash',
      'name': 'gemini-3-7-flash',
      'vendor': 'Google',
      'sources': [
        'deepswe_v11',
        'frontiercode_v11',
        'gpqa_diamond',
        'lastexam_v10'
      ],
      'scores': {
        'deepswe_v11': 65,
        'frontiercode_v11': 43.6,
        'gpqa_diamond': 94.82,
        'lastexam_v10': 26.3
      },
      'mean': 57.4,
      'stddev': 25.57,
      'flag': 'alert'
    },
    {
      'canonId': 'Tencent Hy4 Preview',
      'name': 'Hy4 preview',
      'vendor': 'Tencent',
      'sources': [
        'deepswe_v11',
        'deepswe_v10',
        'gpqa_diamond',
        'lastexam_v10'
      ],
      'scores': {
        'deepswe_v11': 64.3,
        'deepswe_v10': 64.3,
        'gpqa_diamond': 92.3,
        'lastexam_v10': 22.8
      },
      'mean': 60.9,
      'stddev': 24.8,
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
        'gpqa_diamond',
        'hle_diamond',
        'lastexam_v10'
      ],
      'scores': {
        'deepswe_v11': 63,
        'deepswe_v10': 35.35,
        'frontiercode_v11': 23.1,
        'gpqa_diamond': 81,
        'hle_diamond': 13.4,
        'lastexam_v10': 27.6
      },
      'mean': 40.6,
      'stddev': 23.72,
      'flag': 'alert'
    },
    {
      'canonId': 'Qwen3.8-27B',
      'name': 'Qwen3.8-27B',
      'vendor': 'Alibaba',
      'sources': [
        'gpqa_diamond',
        'lastexam_v10'
      ],
      'scores': {
        'gpqa_diamond': 89.2,
        'lastexam_v10': 42.9
      },
      'mean': 66.1,
      'stddev': 23.15,
      'flag': 'alert'
    },
    {
      'canonId': 'Gemini 3.8 Flash',
      'name': 'Gemini 3.8 Flash',
      'vendor': 'Google',
      'sources': [
        'datalearner',
        'deepswe_v11',
        'frontiercode_v11',
        'gpqa_diamond',
        'hle_diamond'
      ],
      'scores': {
        'datalearner': 73.75,
        'deepswe_v11': 74,
        'frontiercode_v11': 41.2,
        'gpqa_diamond': 95.25,
        'hle_diamond': 33.3
      },
      'mean': 63.5,
      'stddev': 22.95,
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
        'gpqa_diamond',
        'lastexam_v10'
      ],
      'scores': {
        'deepswe_v11': 53.7,
        'deepswe_v10': 54.4,
        'frontiercode_v11': 18.8,
        'gpqa_diamond': 82.23,
        'lastexam_v10': 25.2
      },
      'mean': 46.9,
      'stddev': 22.85,
      'flag': 'alert'
    },
    {
      'canonId': 'GLM-5.2',
      'name': 'glm-5-2',
      'vendor': 'zAI',
      'sources': [
        'deepswe_v11',
        'deepswe_v10',
        'frontiercode_v11',
        'gpqa_diamond',
        'lastexam_v10'
      ],
      'scores': {
        'deepswe_v11': 44,
        'deepswe_v10': 42,
        'frontiercode_v11': 24.5,
        'gpqa_diamond': 91.86,
        'lastexam_v10': 41.1
      },
      'mean': 48.7,
      'stddev': 22.68,
      'flag': 'alert'
    },
    {
      'canonId': 'GPT-6 Sol',
      'name': 'GPT-6 Sol',
      'vendor': 'OpenAI',
      'sources': [
        'frontiercode_v11',
        'gpqa_diamond',
        'hle_diamond',
        'lastexam_v10'
      ],
      'scores': {
        'frontiercode_v11': 49.3,
        'gpqa_diamond': 94.32,
        'hle_diamond': 32.8,
        'lastexam_v10': 58.6
      },
      'mean': 58.8,
      'stddev': 22.52,
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
        'gpqa_diamond',
        'hle_diamond',
        'lastexam_v10'
      ],
      'scores': {
        'deepswe_v11': 69,
        'deepswe_v10': 67.5,
        'frontiercode_v11': 44.2,
        'gpqa_diamond': 93.54,
        'hle_diamond': 21.7,
        'lastexam_v10': 51.6
      },
      'mean': 57.9,
      'stddev': 22.45,
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
        'gpqa_diamond',
        'hle_diamond',
        'lastexam_v10'
      ],
      'scores': {
        'datalearner': 75.5,
        'deepswe_v11': 75.5,
        'deepswe_v10': 75.5,
        'gpqa_diamond': 94.2,
        'hle_diamond': 29.5,
        'lastexam_v10': 43.2
      },
      'mean': 65.6,
      'stddev': 22.05,
      'flag': 'alert'
    },
    {
      'canonId': 'Claude Opus 4.7',
      'name': 'claude-opus-4-7',
      'vendor': 'Anthropic',
      'sources': [
        'deepswe_v10',
        'frontiercode_v11',
        'gpqa_diamond',
        'lastexam_v10'
      ],
      'scores': {
        'deepswe_v10': 54,
        'frontiercode_v11': 38.5,
        'gpqa_diamond': 94.2,
        'lastexam_v10': 42.5
      },
      'mean': 57.3,
      'stddev': 22.05,
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
        'gpqa_diamond',
        'lastexam_v10'
      ],
      'scores': {
        'datalearner': 74.2,
        'deepswe_v11': 74.2,
        'frontiercode_v11': 43.9,
        'gpqa_diamond': 90.9,
        'lastexam_v10': 31.8
      },
      'mean': 63,
      'stddev': 21.76,
      'flag': 'alert'
    },
    {
      'canonId': 'DeepSeek V4.1 Flash 1017',
      'name': 'DeepSeek-V4.1-Flash-1017',
      'vendor': 'DeepSeek',
      'sources': [
        'datalearner',
        'deepswe_v11',
        'gpqa_diamond',
        'lastexam_v10'
      ],
      'scores': {
        'datalearner': 75.4,
        'deepswe_v11': 77,
        'gpqa_diamond': 93.18,
        'lastexam_v10': 35.4
      },
      'mean': 70.2,
      'stddev': 21.29,
      'flag': 'alert'
    },
    {
      'canonId': 'Muse Wonder',
      'name': 'Muse Wonder',
      'vendor': 'Meta',
      'sources': [
        'datalearner',
        'deepswe_v11',
        'hle_diamond'
      ],
      'scores': {
        'datalearner': 78.8,
        'deepswe_v11': 78.8,
        'hle_diamond': 34.7
      },
      'mean': 64.1,
      'stddev': 20.79,
      'flag': 'alert'
    },
    {
      'canonId': 'Claude Sonnet 5',
      'name': 'claude-sonnet-5',
      'vendor': 'Anthropic',
      'sources': [
        'deepswe_v11',
        'frontiercode_v11',
        'gpqa_diamond'
      ],
      'scores': {
        'deepswe_v11': 54,
        'frontiercode_v11': 42.7,
        'gpqa_diamond': 90.53
      },
      'mean': 62.4,
      'stddev': 20.41,
      'flag': 'alert'
    },
    {
      'canonId': 'Claude Fable 5.1',
      'name': 'Claude Fable 5.1',
      'vendor': 'Anthropic',
      'sources': [
        'frontiercode_v11',
        'gpqa_diamond',
        'hle_diamond'
      ],
      'scores': {
        'frontiercode_v11': 50.9,
        'gpqa_diamond': 93.74,
        'hle_diamond': 51.6
      },
      'mean': 65.4,
      'stddev': 20.03,
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
        'gpqa_diamond',
        'hle_diamond',
        'lastexam_v10'
      ],
      'scores': {
        'datalearner': 77.9,
        'deepswe_v11': 77.9,
        'frontiercode_v11': 47.6,
        'gpqa_diamond': 96.4,
        'hle_diamond': 56.9,
        'lastexam_v10': 39.5
      },
      'mean': 66,
      'stddev': 19.71,
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
        'gpqa_diamond',
        'hle_diamond',
        'lastexam_v10'
      ],
      'scores': {
        'datalearner': 72.7,
        'deepswe_v11': 73,
        'deepswe_v10': 72.7,
        'frontiercode_v11': 47.5,
        'gpqa_diamond': 94.14,
        'hle_diamond': 30.4,
        'lastexam_v10': 53.6
      },
      'mean': 63.4,
      'stddev': 19.45,
      'flag': 'alert'
    },
    {
      'canonId': 'GPT-5.4',
      'name': 'gpt-5-4',
      'vendor': 'OpenAI',
      'sources': [
        'deepswe_v11',
        'deepswe_v10',
        'gpqa_diamond',
        'lastexam_v10'
      ],
      'scores': {
        'deepswe_v11': 52,
        'deepswe_v10': 56,
        'gpqa_diamond': 89.9,
        'lastexam_v10': 37.3
      },
      'mean': 58.8,
      'stddev': 19.26,
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
      'canonId': 'Grok 4.6',
      'name': 'grok-4-6',
      'vendor': 'xAI',
      'sources': [
        'deepswe_v11',
        'frontiercode_v11',
        'gpqa_diamond'
      ],
      'scores': {
        'deepswe_v11': 67,
        'frontiercode_v11': 48,
        'gpqa_diamond': 94
      },
      'mean': 69.7,
      'stddev': 18.87,
      'flag': 'alert'
    },
    {
      'canonId': 'GPT-6.2 Sol',
      'name': 'GPT-6.2 Sol',
      'vendor': 'OpenAI',
      'sources': [
        'gpqa_diamond',
        'hle_diamond'
      ],
      'scores': {
        'gpqa_diamond': 96,
        'hle_diamond': 58.3
      },
      'mean': 77.2,
      'stddev': 18.85,
      'flag': 'alert'
    },
    {
      'canonId': 'GPT-5.4 Mini',
      'name': 'gpt-5-4-mini',
      'vendor': 'OpenAI',
      'sources': [
        'deepswe_v10',
        'frontiercode_v11',
        'gpqa_diamond'
      ],
      'scores': {
        'deepswe_v10': 24,
        'frontiercode_v11': 27,
        'gpqa_diamond': 64.14
      },
      'mean': 38.4,
      'stddev': 18.26,
      'flag': 'alert'
    },
    {
      'canonId': 'Meta Muse Spark 1.1',
      'name': 'muse-spark-1-1',
      'vendor': 'Meta',
      'sources': [
        'deepswe_v11',
        'gpqa_diamond'
      ],
      'scores': {
        'deepswe_v11': 53,
        'gpqa_diamond': 89.5
      },
      'mean': 71.3,
      'stddev': 18.25,
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
        'gpqa_diamond',
        'lastexam_v10'
      ],
      'scores': {
        'deepswe_v11': 67,
        'deepswe_v10': 70,
        'frontiercode_v11': 43,
        'gpqa_diamond': 94,
        'lastexam_v10': 47.9
      },
      'mean': 64.4,
      'stddev': 18.14,
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
        'gpqa_diamond',
        'lastexam_v10'
      ],
      'scores': {
        'deepswe_v11': 70,
        'deepswe_v10': 69.6,
        'frontiercode_v11': 41.3,
        'gpqa_diamond': 93.31,
        'lastexam_v10': 50.7
      },
      'mean': 65,
      'stddev': 17.96,
      'flag': 'alert'
    },
    {
      'canonId': 'Qwen3.8-Max',
      'name': 'qwen3-8-max',
      'vendor': 'Alibaba',
      'sources': [
        'deepswe_v11',
        'gpqa_diamond',
        'lastexam_v10'
      ],
      'scores': {
        'deepswe_v11': 57,
        'gpqa_diamond': 92.6,
        'lastexam_v10': 52.5
      },
      'mean': 67.4,
      'stddev': 17.94,
      'flag': 'alert'
    },
    {
      'canonId': 'GLM-5.3',
      'name': 'glm-5-3',
      'vendor': 'zAI',
      'sources': [
        'deepswe_v11',
        'frontiercode_v11',
        'hle_diamond',
        'lastexam_v10'
      ],
      'scores': {
        'deepswe_v11': 69,
        'frontiercode_v11': 40.1,
        'hle_diamond': 22.3,
        'lastexam_v10': 28.5
      },
      'mean': 40,
      'stddev': 17.93,
      'flag': 'alert'
    },
    {
      'canonId': 'Claude Opus 5',
      'name': 'Claude Opus 5',
      'vendor': 'Anthropic',
      'sources': [
        'datalearner',
        'deepswe_v11',
        'frontiercode_v11',
        'gpqa_diamond',
        'hle_diamond',
        'lastexam_v10'
      ],
      'scores': {
        'datalearner': 73.23,
        'deepswe_v11': 74,
        'frontiercode_v11': 53.4,
        'gpqa_diamond': 93.74,
        'hle_diamond': 38.1,
        'lastexam_v10': 55.9
      },
      'mean': 64.7,
      'stddev': 17.87,
      'flag': 'alert'
    },
    {
      'canonId': 'Grok 4.5',
      'name': 'grok-4-5',
      'vendor': 'xAI',
      'sources': [
        'deepswe_v11',
        'deepswe_v10',
        'frontiercode_v11',
        'gpqa_diamond',
        'lastexam_v10'
      ],
      'scores': {
        'deepswe_v11': 54,
        'deepswe_v10': 53,
        'frontiercode_v11': 42.4,
        'gpqa_diamond': 93.43,
        'lastexam_v10': 51.2
      },
      'mean': 58.8,
      'stddev': 17.79,
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
        'gpqa_diamond',
        'lastexam_v10'
      ],
      'scores': {
        'deepswe_v11': 67,
        'deepswe_v10': 67.2,
        'frontiercode_v11': 39.8,
        'gpqa_diamond': 91.6,
        'lastexam_v10': 50.4
      },
      'mean': 63.2,
      'stddev': 17.6,
      'flag': 'alert'
    },
    {
      'canonId': 'Qwen3.8-Flash',
      'name': 'Qwen3.8-Flash',
      'vendor': 'Alibaba',
      'sources': [
        'deepswe_v11',
        'gpqa_diamond',
        'lastexam_v10'
      ],
      'scores': {
        'deepswe_v11': 58.7,
        'gpqa_diamond': 91.7,
        'lastexam_v10': 51.2
      },
      'mean': 67.2,
      'stddev': 17.59,
      'flag': 'alert'
    },
    {
      'canonId': 'Claude Opus 4.8',
      'name': 'claude-opus-4-8',
      'vendor': 'Anthropic',
      'sources': [
        'deepswe_v11',
        'deepswe_v10',
        'frontiercode_v11',
        'gpqa_diamond',
        'lastexam_v10'
      ],
      'scores': {
        'deepswe_v11': 59,
        'deepswe_v10': 58,
        'frontiercode_v11': 46.5,
        'gpqa_diamond': 93.6,
        'lastexam_v10': 45.1
      },
      'mean': 60.4,
      'stddev': 17.53,
      'flag': 'alert'
    },
    {
      'canonId': 'GPT-6.1 Terra',
      'name': 'GPT-6.1 Terra',
      'vendor': 'OpenAI',
      'sources': [
        'gpqa_diamond',
        'lastexam_v10'
      ],
      'scores': {
        'gpqa_diamond': 94.32,
        'lastexam_v10': 60
      },
      'mean': 77.2,
      'stddev': 17.16,
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
        'gpqa_diamond',
        'hle_diamond',
        'lastexam_v10'
      ],
      'scores': {
        'datalearner': 75.2,
        'deepswe_v11': 75.2,
        'frontiercode_v11': 50.2,
        'gpqa_diamond': 95.39,
        'hle_diamond': 53.2,
        'lastexam_v10': 58.6
      },
      'mean': 68,
      'stddev': 15.7,
      'flag': 'alert'
    },
    {
      'canonId': 'GPT-6.2 Astra',
      'name': 'GPT-6.2 Astra',
      'vendor': 'OpenAI',
      'sources': [
        'gpqa_diamond',
        'hle_diamond'
      ],
      'scores': {
        'gpqa_diamond': 97,
        'hle_diamond': 66.6
      },
      'mean': 81.8,
      'stddev': 15.2,
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
      'canonId': 'Claude Fable 5',
      'name': 'claude-fable-5',
      'vendor': 'Anthropic',
      'sources': [
        'deepswe_v11',
        'frontiercode_v11',
        'gpqa_diamond',
        'lastexam_v10'
      ],
      'scores': {
        'deepswe_v11': 70,
        'frontiercode_v11': 53.5,
        'gpqa_diamond': 85.86,
        'lastexam_v10': 48.7
      },
      'mean': 64.5,
      'stddev': 14.64,
      'flag': 'alert'
    },
    {
      'canonId': 'GPT-6 Astra',
      'name': 'GPT-6 Astra',
      'vendor': 'OpenAI',
      'sources': [
        'datalearner',
        'deepswe_v11',
        'frontiercode_v11',
        'gpqa_diamond',
        'hle_diamond',
        'lastexam_v10'
      ],
      'scores': {
        'datalearner': 73.33,
        'deepswe_v11': 74,
        'frontiercode_v11': 53.3,
        'gpqa_diamond': 96.26,
        'hle_diamond': 59.9,
        'lastexam_v10': 59.3
      },
      'mean': 69.3,
      'stddev': 14.2,
      'flag': 'alert'
    },
    {
      'canonId': 'Claude Haiku 5.5',
      'name': 'Claude Haiku 5.5',
      'vendor': 'Anthropic',
      'sources': [
        'frontiercode_v11',
        'hle_diamond'
      ],
      'scores': {
        'frontiercode_v11': 46.4,
        'hle_diamond': 20.8
      },
      'mean': 33.6,
      'stddev': 12.8,
      'flag': 'alert'
    },
    {
      'canonId': 'Grok 4.7',
      'name': 'Grok 4.7',
      'vendor': 'xAI',
      'sources': [
        'frontiercode_v11',
        'hle_diamond'
      ],
      'scores': {
        'frontiercode_v11': 47.6,
        'hle_diamond': 22.8
      },
      'mean': 35.2,
      'stddev': 12.4,
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
      'canonId': 'Inkling 2 Small',
      'name': 'Inkling 2 Small',
      'vendor': 'Thinking Machines',
      'sources': [
        'datalearner',
        'deepswe_v11',
        'gpqa_diamond'
      ],
      'scores': {
        'datalearner': 72.1,
        'deepswe_v11': 72.1,
        'gpqa_diamond': 93
      },
      'mean': 79.1,
      'stddev': 9.85,
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
        'hle_diamond',
        'lastexam_v10'
      ],
      'scores': {
        'datalearner': 74.2,
        'deepswe_v11': 74.2,
        'frontiercode_v11': 54.6,
        'hle_diamond': 54.6,
        'lastexam_v10': 63.2
      },
      'mean': 64.2,
      'stddev': 8.78,
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
      'canonId': 'Claude Fable 5.2',
      'name': 'Claude Fable 5.2',
      'vendor': 'Anthropic',
      'sources': [
        'datalearner',
        'deepswe_v11',
        'gpqa_diamond',
        'hle_diamond'
      ],
      'scores': {
        'datalearner': 74.3,
        'deepswe_v11': 74.3,
        'gpqa_diamond': 93.88,
        'hle_diamond': 74.3
      },
      'mean': 79.2,
      'stddev': 8.48,
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
      'total': 69,
      'complete': 69,
      'modelCount': 69,
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
      'total': 114,
      'complete': 114,
      'modelCount': 114,
      'missingFields': {},
      'flag': 'ok'
    },
    'arenaofbias': {
      'rate': 1,
      'total': 95,
      'complete': 95,
      'modelCount': 95,
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
    'gpqa_diamond': {
      'rate': 1,
      'total': 251,
      'complete': 251,
      'modelCount': 251,
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
    'hle_diamond': {
      'rate': 1,
      'total': 25,
      'complete': 25,
      'modelCount': 25,
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
      'total': 135,
      'complete': 0,
      'modelCount': 135,
      'missingFields': {
        'score': 135
      },
      'flag': 'warn'
    },
    'modeldial': {
      'rate': 1,
      'total': 57,
      'complete': 57,
      'modelCount': 57,
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
      'ageDays': 14,
      'flag': 'alert',
      'warnAgeDays': 3,
      'alertAgeDays': 7
    },
    'aicodingdaily': {
      'updated': '2026-11-27',
      'ageDays': 0,
      'flag': 'ok',
      'warnAgeDays': 7,
      'alertAgeDays': 14
    },
    'apex': {
      'updated': '2026-11-27',
      'ageDays': 0,
      'flag': 'ok',
      'warnAgeDays': 3,
      'alertAgeDays': 7
    },
    'datalearner': {
      'updated': '2026-11-27',
      'ageDays': 0,
      'flag': 'ok',
      'warnAgeDays': 3,
      'alertAgeDays': 7
    },
    'arcagi3': {
      'updated': '2026-11-27',
      'ageDays': 0,
      'flag': 'ok',
      'warnAgeDays': 3,
      'alertAgeDays': 7
    },
    'arena_agent': {
      'updated': '2026-11-27',
      'ageDays': 0,
      'flag': 'ok',
      'warnAgeDays': 7,
      'alertAgeDays': 14
    },
    'arena_webdev': {
      'updated': '2026-11-27',
      'ageDays': 0,
      'flag': 'ok',
      'warnAgeDays': 3,
      'alertAgeDays': 7
    },
    'arenaofbias': {
      'updated': '2026-11-27',
      'ageDays': 0,
      'flag': 'ok',
      'warnAgeDays': 3,
      'alertAgeDays': 7
    },
    'automationbench': {
      'updated': '2026-11-27',
      'ageDays': 0,
      'flag': 'ok',
      'warnAgeDays': 3,
      'alertAgeDays': 7
    },
    'benchcad': {
      'updated': '2026-11-27',
      'ageDays': 0,
      'flag': 'ok',
      'warnAgeDays': 3,
      'alertAgeDays': 7
    },
    'cursorbench': {
      'updated': '2026-11-27',
      'ageDays': 0,
      'flag': 'ok',
      'warnAgeDays': 3,
      'alertAgeDays': 7
    },
    'deepswe_v11': {
      'updated': '2026-11-27',
      'ageDays': 0,
      'flag': 'ok',
      'warnAgeDays': 3,
      'alertAgeDays': 7
    },
    'deepswe_v10': {
      'updated': '2026-11-27',
      'ageDays': 0,
      'flag': 'ok',
      'warnAgeDays': 3,
      'alertAgeDays': 7
    },
    'frontiercode': {
      'updated': '2026-11-27',
      'ageDays': 0,
      'flag': 'ok',
      'warnAgeDays': 3,
      'alertAgeDays': 7
    },
    'frontiercode_v11': {
      'updated': '2026-11-27',
      'ageDays': 0,
      'flag': 'ok',
      'warnAgeDays': 3,
      'alertAgeDays': 7
    },
    'frontierswe': {
      'updated': '2026-11-27',
      'ageDays': 0,
      'flag': 'ok',
      'warnAgeDays': 3,
      'alertAgeDays': 7
    },
    'gpqa_diamond': {
      'updated': '2026-11-27',
      'ageDays': 0,
      'flag': 'ok',
      'warnAgeDays': 3,
      'alertAgeDays': 7
    },
    'hle': {
      'updated': '2026-11-27',
      'ageDays': 0,
      'flag': 'ok',
      'warnAgeDays': 3,
      'alertAgeDays': 7
    },
    'hle_diamond': {
      'updated': '2026-11-27',
      'ageDays': 0,
      'flag': 'ok',
      'warnAgeDays': 3,
      'alertAgeDays': 7
    },
    'lastexam': {
      'updated': '2026-11-27',
      'ageDays': 0,
      'flag': 'ok',
      'warnAgeDays': 3,
      'alertAgeDays': 7
    },
    'lastexam_v10': {
      'updated': '2026-11-27',
      'ageDays': 0,
      'flag': 'ok',
      'warnAgeDays': 3,
      'alertAgeDays': 7
    },
    'llm2014': {
      'updated': '2026-11-27',
      'ageDays': 0,
      'flag': 'ok',
      'warnAgeDays': 3,
      'alertAgeDays': 7
    },
    'modeldial': {
      'updated': '2026-11-27',
      'ageDays': 0,
      'flag': 'ok',
      'warnAgeDays': 3,
      'alertAgeDays': 7
    },
    'nl2repo': {
      'updated': '2026-11-27',
      'ageDays': 0,
      'flag': 'ok',
      'warnAgeDays': 3,
      'alertAgeDays': 7
    },
    'octathlon': {
      'updated': '2026-11-27',
      'ageDays': 0,
      'flag': 'ok',
      'warnAgeDays': 14,
      'alertAgeDays': 30
    },
    'osworld': {
      'updated': '2026-11-27',
      'ageDays': 0,
      'flag': 'ok',
      'warnAgeDays': 3,
      'alertAgeDays': 7
    },
    'programbench': {
      'updated': '2026-11-27',
      'ageDays': 0,
      'flag': 'ok',
      'warnAgeDays': 3,
      'alertAgeDays': 7
    },
    'tbench': {
      'updated': '2026-11-27',
      'ageDays': 0,
      'flag': 'ok',
      'warnAgeDays': 3,
      'alertAgeDays': 7
    },
    'tbench_v21': {
      'updated': '2026-11-27',
      'ageDays': 0,
      'flag': 'ok',
      'warnAgeDays': 3,
      'alertAgeDays': 7
    },
    'tbench_v3': {
      'updated': '2026-11-27',
      'ageDays': 0,
      'flag': 'ok',
      'warnAgeDays': 3,
      'alertAgeDays': 7
    },
    'tbscience': {
      'updated': '2026-11-27',
      'ageDays': 0,
      'flag': 'ok',
      'warnAgeDays': 3,
      'alertAgeDays': 7
    },
    'vals_codemigration': {
      'updated': '2026-11-27',
      'ageDays': 0,
      'flag': 'ok',
      'warnAgeDays': 14,
      'alertAgeDays': 30
    },
    'vals_vibe_code': {
      'updated': '2026-11-27',
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
      'message': '数据已 14 天未更新(>7 天)'
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
      'sourceId': 'deepswe_v10,gpqa_diamond,lastexam_v10',
      'message': 'minimax-m2-7 跨源分数标准差 38.11(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'frontiercode_v11,gpqa_diamond',
      'message': 'Inkling 跨源分数标准差 37.13(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'frontiercode_v11,gpqa_diamond',
      'message': 'Nemotron 3 Ultra 跨源分数标准差 36.7(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'frontiercode_v11,gpqa_diamond',
      'message': 'Qwen 3.7 Plus 跨源分数标准差 35.81(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'deepswe_v11,deepswe_v10,gpqa_diamond,lastexam_v10',
      'message': 'gemini-3-1-pro-preview 跨源分数标准差 34.12(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'deepswe_v10,gpqa_diamond,lastexam_v10',
      'message': 'qwen3-7-max 跨源分数标准差 32.35(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'gpqa_diamond,hle_diamond',
      'message': 'Muse Spark Open 跨源分数标准差 32.05(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'gpqa_diamond,lastexam_v10',
      'message': 'Step 5 Preview 跨源分数标准差 32(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'deepswe_v10,gpqa_diamond,lastexam_v10',
      'message': 'kimi-k2-6 跨源分数标准差 31.9(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'deepswe_v10,frontiercode_v11,gpqa_diamond',
      'message': 'minimax-m3 跨源分数标准差 30.23(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'deepswe_v10,frontiercode_v11,gpqa_diamond',
      'message': 'claude-opus-4-6 跨源分数标准差 30.18(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'deepswe_v10,gpqa_diamond,lastexam_v10',
      'message': 'glm-5-1 跨源分数标准差 30.05(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'deepswe_v11,deepswe_v10,gpqa_diamond',
      'message': 'Hy3 跨源分数标准差 29.42(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'deepswe_v11,deepswe_v10,gpqa_diamond',
      'message': 'gemini-3-5-flash 跨源分数标准差 28.85(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'deepswe_v11,deepswe_v10,frontiercode_v11,gpqa_diamond',
      'message': 'claude-sonnet-4-6 跨源分数标准差 26.62(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'frontiercode_v11,gpqa_diamond,hle_diamond',
      'message': 'Claude Sonnet 5.5 跨源分数标准差 26.15(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'datalearner,gpqa_diamond,hle_diamond,lastexam_v10',
      'message': 'Muse Spark 1.3 跨源分数标准差 25.73(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'deepswe_v11,frontiercode_v11,gpqa_diamond',
      'message': 'gemini-3-6-flash 跨源分数标准差 25.71(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'deepswe_v11,frontiercode_v11,gpqa_diamond,lastexam_v10',
      'message': 'glm-5-3-flash 跨源分数标准差 25.7(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'deepswe_v11,frontiercode_v11,gpqa_diamond,lastexam_v10',
      'message': 'gemini-3-7-flash 跨源分数标准差 25.57(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'deepswe_v11,deepswe_v10,gpqa_diamond,lastexam_v10',
      'message': 'Hy4 preview 跨源分数标准差 24.8(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'deepswe_v11,deepswe_v10,frontiercode_v11,gpqa_diamond,hle_diamond,lastexam_v10',
      'message': 'DeepSeek V4 Pro 0813 跨源分数标准差 23.72(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'gpqa_diamond,lastexam_v10',
      'message': 'Qwen3.8-27B 跨源分数标准差 23.15(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'datalearner,deepswe_v11,frontiercode_v11,gpqa_diamond,hle_diamond',
      'message': 'Gemini 3.8 Flash 跨源分数标准差 22.95(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'deepswe_v11,deepswe_v10,frontiercode_v11,gpqa_diamond,lastexam_v10',
      'message': 'DeepSeek-V4-Flash-0731 跨源分数标准差 22.85(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'deepswe_v11,deepswe_v10,frontiercode_v11,gpqa_diamond,lastexam_v10',
      'message': 'glm-5-2 跨源分数标准差 22.68(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'frontiercode_v11,gpqa_diamond,hle_diamond,lastexam_v10',
      'message': 'GPT-6 Sol 跨源分数标准差 22.52(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'deepswe_v11,deepswe_v10,frontiercode_v11,gpqa_diamond,hle_diamond,lastexam_v10',
      'message': 'kimi-k3 跨源分数标准差 22.45(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'datalearner,deepswe_v11,deepswe_v10,gpqa_diamond,hle_diamond,lastexam_v10',
      'message': 'Kimi K3.1 Pro 跨源分数标准差 22.05(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'deepswe_v10,frontiercode_v11,gpqa_diamond,lastexam_v10',
      'message': 'claude-opus-4-7 跨源分数标准差 22.05(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'datalearner,deepswe_v11,frontiercode_v11,gpqa_diamond,lastexam_v10',
      'message': 'DeepSeek-V4.1-Flash 跨源分数标准差 21.76(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'datalearner,deepswe_v11,gpqa_diamond,lastexam_v10',
      'message': 'DeepSeek-V4.1-Flash-1017 跨源分数标准差 21.29(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'datalearner,deepswe_v11,hle_diamond',
      'message': 'Muse Wonder 跨源分数标准差 20.79(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'deepswe_v11,frontiercode_v11,gpqa_diamond',
      'message': 'claude-sonnet-5 跨源分数标准差 20.41(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'frontiercode_v11,gpqa_diamond,hle_diamond',
      'message': 'Claude Fable 5.1 跨源分数标准差 20.03(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'datalearner,deepswe_v11,frontiercode_v11,gpqa_diamond,hle_diamond,lastexam_v10',
      'message': 'Gemini 4 Argon 跨源分数标准差 19.71(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'datalearner,deepswe_v11,deepswe_v10,frontiercode_v11,gpqa_diamond,hle_diamond,lastexam_v10',
      'message': 'GPT-5.6 Sol 跨源分数标准差 19.45(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'deepswe_v11,deepswe_v10,gpqa_diamond,lastexam_v10',
      'message': 'gpt-5-4 跨源分数标准差 19.26(>10)'
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
      'sourceId': 'deepswe_v11,frontiercode_v11,gpqa_diamond',
      'message': 'grok-4-6 跨源分数标准差 18.87(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'gpqa_diamond,hle_diamond',
      'message': 'GPT-6.2 Sol 跨源分数标准差 18.85(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'deepswe_v10,frontiercode_v11,gpqa_diamond',
      'message': 'gpt-5-4-mini 跨源分数标准差 18.26(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'deepswe_v11,gpqa_diamond',
      'message': 'muse-spark-1-1 跨源分数标准差 18.25(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'deepswe_v11,deepswe_v10,frontiercode_v11,gpqa_diamond,lastexam_v10',
      'message': 'gpt-5-5 跨源分数标准差 18.14(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'deepswe_v11,deepswe_v10,frontiercode_v11,gpqa_diamond,lastexam_v10',
      'message': 'gpt-5-6-terra 跨源分数标准差 17.96(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'deepswe_v11,gpqa_diamond,lastexam_v10',
      'message': 'qwen3-8-max 跨源分数标准差 17.94(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'deepswe_v11,frontiercode_v11,hle_diamond,lastexam_v10',
      'message': 'glm-5-3 跨源分数标准差 17.93(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'datalearner,deepswe_v11,frontiercode_v11,gpqa_diamond,hle_diamond,lastexam_v10',
      'message': 'Claude Opus 5 跨源分数标准差 17.87(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'deepswe_v11,deepswe_v10,frontiercode_v11,gpqa_diamond,lastexam_v10',
      'message': 'grok-4-5 跨源分数标准差 17.79(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'deepswe_v11,deepswe_v10,frontiercode_v11,gpqa_diamond,lastexam_v10',
      'message': 'gpt-5-6-luna 跨源分数标准差 17.6(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'deepswe_v11,gpqa_diamond,lastexam_v10',
      'message': 'Qwen3.8-Flash 跨源分数标准差 17.59(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'deepswe_v11,deepswe_v10,frontiercode_v11,gpqa_diamond,lastexam_v10',
      'message': 'claude-opus-4-8 跨源分数标准差 17.53(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'gpqa_diamond,lastexam_v10',
      'message': 'GPT-6.1 Terra 跨源分数标准差 17.16(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'datalearner,deepswe_v11,frontiercode_v11,gpqa_diamond,hle_diamond,lastexam_v10',
      'message': 'GPT-6.1 Sol 跨源分数标准差 15.7(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'gpqa_diamond,hle_diamond',
      'message': 'GPT-6.2 Astra 跨源分数标准差 15.2(>10)'
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
      'sourceId': 'deepswe_v11,frontiercode_v11,gpqa_diamond,lastexam_v10',
      'message': 'claude-fable-5 跨源分数标准差 14.64(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'datalearner,deepswe_v11,frontiercode_v11,gpqa_diamond,hle_diamond,lastexam_v10',
      'message': 'GPT-6 Astra 跨源分数标准差 14.2(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'frontiercode_v11,hle_diamond',
      'message': 'Claude Haiku 5.5 跨源分数标准差 12.8(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'frontiercode_v11,hle_diamond',
      'message': 'Grok 4.7 跨源分数标准差 12.4(>10)'
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
      'sourceId': 'deepswe_v10,lastexam_v10',
      'message': 'qwen3-6-plus 跨源分数标准差 10.8(>10)'
    }
  ]
};
