// 数据质量报告(由 scripts/lib/quality-report.js 生成)
// 三维交叉验证:一致性(跨源分数标准差)/ 完整性(必填字段齐全率)/ 时效性(数据新鲜度)
// generatedAt=2026-09-14;overallScore 为各源完整性均权(0-1)
// 注:前端暂不展示,仅供抓取端记录与 CI 日志溯源。
window.QUALITY = {
  'generatedAt': '2026-09-14',
  'overallScore': 0.935,
  'sources': [
    {
      'id': 'ai_capability',
      'name': 'AI 能力专项测试',
      'status': 'ok',
      'modelCount': 62,
      'updated': '2026-09-14',
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
      'updated': '2026-09-14',
      'ageDays': 0,
      'completeness': 1,
      'fetchAttempts': 1,
      'errors': []
    },
    {
      'id': 'arcagi3',
      'name': 'ARC-AGI-3',
      'status': 'ok',
      'modelCount': 12,
      'updated': '2026-09-14',
      'ageDays': 0,
      'completeness': 1,
      'fetchAttempts': 1,
      'errors': []
    },
    {
      'id': 'arena_webdev',
      'name': 'Code Arena WebDev (LMArena)',
      'status': 'ok',
      'modelCount': 128,
      'updated': '2026-09-14',
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
      'updated': '2026-09-14',
      'ageDays': 0,
      'completeness': 0.824,
      'fetchAttempts': 1,
      'errors': []
    },
    {
      'id': 'deepswe_v11',
      'name': 'DeepSWE v1.1',
      'status': 'ok',
      'modelCount': 31,
      'updated': '2026-09-14',
      'ageDays': 0,
      'completeness': 1,
      'fetchAttempts': 1,
      'errors': []
    },
    {
      'id': 'deepswe_v10',
      'name': 'DeepSWE v1.0',
      'status': 'ok',
      'modelCount': 21,
      'updated': '2026-09-14',
      'ageDays': 0,
      'completeness': 1,
      'fetchAttempts': 1,
      'errors': []
    },
    {
      'id': 'gpqa',
      'name': 'GPQA Diamond',
      'status': 'ok',
      'modelCount': 50,
      'updated': '2026-09-14',
      'ageDays': 0,
      'completeness': 1,
      'fetchAttempts': 1,
      'errors': []
    },
    {
      'id': 'hle',
      'name': 'Humanity\'s Last Exam',
      'status': 'ok',
      'modelCount': 82,
      'updated': '2026-09-14',
      'ageDays': 0,
      'completeness': 1,
      'fetchAttempts': 1,
      'errors': []
    },
    {
      'id': 'lastexam',
      'name': 'Agents\' Last Exam',
      'status': 'ok',
      'modelCount': 21,
      'updated': '2026-09-14',
      'ageDays': 0,
      'completeness': 1,
      'fetchAttempts': 1,
      'errors': []
    },
    {
      'id': 'llm2014',
      'name': 'llm2014',
      'status': 'ok',
      'modelCount': 81,
      'updated': '2026-09-14',
      'ageDays': 0,
      'completeness': 0,
      'fetchAttempts': 1,
      'errors': []
    },
    {
      'id': 'nl2repo',
      'name': 'NL2Repo-Bench',
      'status': 'ok',
      'modelCount': 48,
      'updated': '2026-09-14',
      'ageDays': 0,
      'completeness': 1,
      'fetchAttempts': 1,
      'errors': []
    },
    {
      'id': 'osworld',
      'name': 'OSWorld 2.0',
      'status': 'ok',
      'modelCount': 26,
      'updated': '2026-09-14',
      'ageDays': 0,
      'completeness': 1,
      'fetchAttempts': 1,
      'errors': []
    },
    {
      'id': 'tbench',
      'name': 'Terminal-Bench 4.0',
      'status': 'ok',
      'modelCount': 22,
      'updated': '2026-09-14',
      'ageDays': 0,
      'completeness': 1,
      'fetchAttempts': 1,
      'errors': []
    },
    {
      'id': 'tbench_v21',
      'name': 'Terminal-Bench 2.1',
      'status': 'ok',
      'modelCount': 44,
      'updated': '2026-09-14',
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
      'updated': '2026-09-14',
      'ageDays': 0,
      'completeness': 1,
      'fetchAttempts': 1,
      'errors': []
    },
    {
      'id': 'tbscience',
      'name': 'Terminal-Bench-Science 0.1',
      'status': 'ok',
      'modelCount': 9,
      'updated': '2026-09-14',
      'ageDays': 0,
      'completeness': 1,
      'fetchAttempts': 1,
      'errors': []
    },
    {
      'id': 'vibecode',
      'name': 'Vibe Code',
      'status': 'ok',
      'modelCount': 91,
      'updated': '2026-09-14',
      'ageDays': 0,
      'completeness': 1,
      'fetchAttempts': 1,
      'errors': []
    }
  ],
  'consistency': [
    {
      'canonId': 'DeepSeek V4 Pro 0813',
      'name': 'DeepSeek V4 Pro 0813',
      'vendor': 'DeepSeek',
      'sources': [
        'deepswe_v11',
        'deepswe_v10',
        'vibecode'
      ],
      'scores': {
        'deepswe_v11': 63,
        'deepswe_v10': 8,
        'vibecode': 66.11
      },
      'mean': 45.7,
      'stddev': 26.69,
      'flag': 'alert'
    },
    {
      'canonId': 'GLM-5.3-Flash',
      'name': 'glm-5.3-flash',
      'vendor': 'zAI',
      'sources': [
        'ai_capability',
        'deepswe_v11',
        'vibecode'
      ],
      'scores': {
        'ai_capability': 83.35,
        'deepswe_v11': 63,
        'vibecode': 30.76
      },
      'mean': 59,
      'stddev': 21.65,
      'flag': 'alert'
    },
    {
      'canonId': 'Qwen3.7-Max',
      'name': 'qwen3-7-max',
      'vendor': 'Alibaba',
      'sources': [
        'deepswe_v10',
        'vibecode'
      ],
      'scores': {
        'deepswe_v10': 18,
        'vibecode': 47.67
      },
      'mean': 32.8,
      'stddev': 14.84,
      'flag': 'alert'
    },
    {
      'canonId': 'Inkling',
      'name': 'inkling',
      'vendor': 'Thinking Machines',
      'sources': [
        'ai_capability',
        'vibecode'
      ],
      'scores': {
        'ai_capability': 48.25,
        'vibecode': 19.21
      },
      'mean': 33.7,
      'stddev': 14.52,
      'flag': 'alert'
    },
    {
      'canonId': 'Claude Opus 4.6',
      'name': 'claude-opus-4-6',
      'vendor': 'Anthropic',
      'sources': [
        'deepswe_v10',
        'vibecode'
      ],
      'scores': {
        'deepswe_v10': 28,
        'vibecode': 55.54
      },
      'mean': 41.8,
      'stddev': 13.77,
      'flag': 'alert'
    },
    {
      'canonId': 'Claude Sonnet 5',
      'name': 'claude-sonnet-5',
      'vendor': 'Anthropic',
      'sources': [
        'deepswe_v11',
        'vibecode'
      ],
      'scores': {
        'deepswe_v11': 54,
        'vibecode': 81.33
      },
      'mean': 67.7,
      'stddev': 13.67,
      'flag': 'alert'
    },
    {
      'canonId': 'GPT-5.4 Mini',
      'name': 'gpt-5-4-mini',
      'vendor': 'OpenAI',
      'sources': [
        'deepswe_v10',
        'vibecode'
      ],
      'scores': {
        'deepswe_v10': 24,
        'vibecode': 47.97
      },
      'mean': 36,
      'stddev': 11.99,
      'flag': 'alert'
    },
    {
      'canonId': 'Claude Fable 5',
      'name': 'claude-fable-5',
      'vendor': 'Anthropic',
      'sources': [
        'ai_capability',
        'datalearner',
        'deepswe_v11',
        'vibecode'
      ],
      'scores': {
        'ai_capability': 96.25,
        'datalearner': 69.4,
        'deepswe_v11': 70,
        'vibecode': 90.35
      },
      'mean': 81.5,
      'stddev': 11.98,
      'flag': 'alert'
    },
    {
      'canonId': 'GPT-6 Astra',
      'name': 'gpt-6-astra',
      'vendor': 'OpenAI',
      'sources': [
        'ai_capability',
        'datalearner',
        'deepswe_v11',
        'vibecode'
      ],
      'scores': {
        'ai_capability': 100.85,
        'datalearner': 72.24,
        'deepswe_v11': 74,
        'vibecode': 89.59
      },
      'mean': 84.2,
      'stddev': 11.76,
      'flag': 'alert'
    },
    {
      'canonId': 'Qwen3.6-Plus',
      'name': 'qwen3-6-plus',
      'vendor': 'Alibaba',
      'sources': [
        'deepswe_v10',
        'vibecode'
      ],
      'scores': {
        'deepswe_v10': 3,
        'vibecode': 25.57
      },
      'mean': 14.3,
      'stddev': 11.29,
      'flag': 'alert'
    },
    {
      'canonId': 'DeepSeek V4 Flash 0731',
      'name': 'DSV4F0731',
      'vendor': 'DeepSeek',
      'sources': [
        'ai_capability',
        'deepswe_v11',
        'vibecode'
      ],
      'scores': {
        'ai_capability': 77.05,
        'deepswe_v11': 53,
        'vibecode': 74.74
      },
      'mean': 68.3,
      'stddev': 10.83,
      'flag': 'alert'
    },
    {
      'canonId': 'Meta Muse Spark 1.2',
      'name': 'muse-spark-1.2-contributor',
      'vendor': 'Meta',
      'sources': [
        'ai_capability',
        'deepswe_v11',
        'vibecode'
      ],
      'scores': {
        'ai_capability': 76.4,
        'deepswe_v11': 55,
        'vibecode': 79.1
      },
      'mean': 70.2,
      'stddev': 10.78,
      'flag': 'alert'
    },
    {
      'canonId': 'Claude Fable 5.1',
      'name': 'Claude Fable 5.1',
      'vendor': 'Anthropic',
      'sources': [
        'datalearner',
        'deepswe_v11',
        'vibecode'
      ],
      'scores': {
        'datalearner': 67.4,
        'deepswe_v11': 67.4,
        'vibecode': 90.26
      },
      'mean': 75,
      'stddev': 10.78,
      'flag': 'alert'
    },
    {
      'canonId': 'Claude Sonnet 4.6',
      'name': 'claude-sonnet-4-6',
      'vendor': 'Anthropic',
      'sources': [
        'deepswe_v11',
        'deepswe_v10',
        'vibecode'
      ],
      'scores': {
        'deepswe_v11': 30,
        'deepswe_v10': 32,
        'vibecode': 53.63
      },
      'mean': 38.5,
      'stddev': 10.7,
      'flag': 'alert'
    },
    {
      'canonId': 'Gemini 3.6 Flash',
      'name': 'gemini-3.6-flash',
      'vendor': 'Google',
      'sources': [
        'ai_capability',
        'deepswe_v11',
        'vibecode'
      ],
      'scores': {
        'ai_capability': 71.9,
        'deepswe_v11': 47,
        'vibecode': 64.01
      },
      'mean': 61,
      'stddev': 10.39,
      'flag': 'alert'
    },
    {
      'canonId': 'Claude Opus 4.8',
      'name': 'claude-opus-4-8',
      'vendor': 'Anthropic',
      'sources': [
        'deepswe_v11',
        'deepswe_v10',
        'vibecode'
      ],
      'scores': {
        'deepswe_v11': 59,
        'deepswe_v10': 58,
        'vibecode': 80.11
      },
      'mean': 65.7,
      'stddev': 10.2,
      'flag': 'alert'
    },
    {
      'canonId': 'Gemini 3.1 Pro Preview',
      'name': 'gemini-3-1-pro-preview',
      'vendor': 'Google',
      'sources': [
        'deepswe_v11',
        'deepswe_v10',
        'vibecode'
      ],
      'scores': {
        'deepswe_v11': 12,
        'deepswe_v10': 10,
        'vibecode': 32.03
      },
      'mean': 18,
      'stddev': 9.95,
      'flag': 'warn'
    },
    {
      'canonId': 'GLM-5.2',
      'name': 'glm-5-2',
      'vendor': 'zAI',
      'sources': [
        'deepswe_v11',
        'deepswe_v10',
        'vibecode'
      ],
      'scores': {
        'deepswe_v11': 44,
        'deepswe_v10': 42,
        'vibecode': 63.96
      },
      'mean': 50,
      'stddev': 9.91,
      'flag': 'warn'
    },
    {
      'canonId': 'Claude Opus 5',
      'name': 'claude-opus-5',
      'vendor': 'Anthropic',
      'sources': [
        'ai_capability',
        'datalearner',
        'deepswe_v11',
        'vibecode'
      ],
      'scores': {
        'ai_capability': 92.5,
        'datalearner': 72.15,
        'deepswe_v11': 74,
        'vibecode': 88.4
      },
      'mean': 81.8,
      'stddev': 8.83,
      'flag': 'warn'
    },
    {
      'canonId': 'GLM-5.3',
      'name': 'glm-5.3',
      'vendor': 'zAI',
      'sources': [
        'ai_capability',
        'datalearner',
        'deepswe_v11',
        'vibecode'
      ],
      'scores': {
        'ai_capability': 89.93,
        'datalearner': 69,
        'deepswe_v11': 69,
        'vibecode': 78.13
      },
      'mean': 76.5,
      'stddev': 8.59,
      'flag': 'warn'
    },
    {
      'canonId': 'Gemini 3.5 Flash',
      'name': 'gemini-3-5-flash',
      'vendor': 'Google',
      'sources': [
        'deepswe_v11',
        'deepswe_v10',
        'vibecode'
      ],
      'scores': {
        'deepswe_v11': 36,
        'deepswe_v10': 28,
        'vibecode': 48.68
      },
      'mean': 37.6,
      'stddev': 8.51,
      'flag': 'warn'
    },
    {
      'canonId': 'Claude Opus 4.7',
      'name': 'claude-opus-4-7',
      'vendor': 'Anthropic',
      'sources': [
        'deepswe_v10',
        'vibecode'
      ],
      'scores': {
        'deepswe_v10': 54,
        'vibecode': 71
      },
      'mean': 62.5,
      'stddev': 8.5,
      'flag': 'warn'
    },
    {
      'canonId': 'Kimi-K2.7-Code',
      'name': 'kimi-k2-7-code',
      'vendor': 'Moonshot',
      'sources': [
        'deepswe_v11',
        'vibecode'
      ],
      'scores': {
        'deepswe_v11': 31,
        'vibecode': 47.21
      },
      'mean': 39.1,
      'stddev': 8.11,
      'flag': 'warn'
    },
    {
      'canonId': 'Gemini 3.7 Flash',
      'name': 'gemini-3.7-flash',
      'vendor': 'Google',
      'sources': [
        'ai_capability',
        'deepswe_v11',
        'vibecode'
      ],
      'scores': {
        'ai_capability': 83.45,
        'deepswe_v11': 65,
        'vibecode': 70.4
      },
      'mean': 73,
      'stddev': 7.74,
      'flag': 'warn'
    },
    {
      'canonId': 'Kimi K3',
      'name': 'Kimi K3',
      'vendor': 'Moonshot',
      'sources': [
        'datalearner',
        'deepswe_v11',
        'vibecode'
      ],
      'scores': {
        'datalearner': 68.5,
        'deepswe_v11': 69,
        'vibecode': 84.96
      },
      'mean': 74.2,
      'stddev': 7.64,
      'flag': 'warn'
    },
    {
      'canonId': 'Gemini 3 Flash Preview',
      'name': 'gemini-3-flash-preview',
      'vendor': 'Google',
      'sources': [
        'deepswe_v10',
        'vibecode'
      ],
      'scores': {
        'deepswe_v10': 5,
        'vibecode': 20.2
      },
      'mean': 12.6,
      'stddev': 7.6,
      'flag': 'warn'
    },
    {
      'canonId': 'MiMo-V2.5-Pro',
      'name': 'mimo-v2-5-pro',
      'vendor': 'Xiaomi',
      'sources': [
        'deepswe_v10',
        'vibecode'
      ],
      'scores': {
        'deepswe_v10': 19,
        'vibecode': 34.11
      },
      'mean': 26.6,
      'stddev': 7.56,
      'flag': 'warn'
    },
    {
      'canonId': 'Grok 4.5',
      'name': 'grok-4-5',
      'vendor': 'xAI',
      'sources': [
        'deepswe_v11',
        'vibecode'
      ],
      'scores': {
        'deepswe_v11': 54,
        'vibecode': 69
      },
      'mean': 61.5,
      'stddev': 7.5,
      'flag': 'warn'
    },
    {
      'canonId': 'Qwen3.8-Max',
      'name': 'qwen3.8-max-0902',
      'vendor': 'Alibaba',
      'sources': [
        'ai_capability',
        'datalearner',
        'deepswe_v11',
        'vibecode'
      ],
      'scores': {
        'ai_capability': 82.03,
        'datalearner': 69.3,
        'deepswe_v11': 63.15,
        'vibecode': 64.7
      },
      'mean': 69.8,
      'stddev': 7.42,
      'flag': 'warn'
    },
    {
      'canonId': 'Kimi-K2.6',
      'name': 'kimi-k2-6',
      'vendor': 'Moonshot',
      'sources': [
        'deepswe_v10',
        'vibecode'
      ],
      'scores': {
        'deepswe_v10': 24,
        'vibecode': 37.89
      },
      'mean': 30.9,
      'stddev': 6.95,
      'flag': 'warn'
    },
    {
      'canonId': 'GLM-5.1',
      'name': 'glm-5-1',
      'vendor': 'zAI',
      'sources': [
        'deepswe_v10',
        'vibecode'
      ],
      'scores': {
        'deepswe_v10': 18,
        'vibecode': 31.46
      },
      'mean': 24.7,
      'stddev': 6.73,
      'flag': 'warn'
    },
    {
      'canonId': 'Grok 4.6',
      'name': 'grok-4.6',
      'vendor': 'xAI',
      'sources': [
        'ai_capability',
        'datalearner',
        'deepswe_v11',
        'vibecode'
      ],
      'scores': {
        'ai_capability': 82.1,
        'datalearner': 67.5,
        'deepswe_v11': 67,
        'vibecode': 76.24
      },
      'mean': 73.2,
      'stddev': 6.31,
      'flag': 'warn'
    },
    {
      'canonId': 'Claude Haiku 4.5',
      'name': 'claude-haiku-4-5',
      'vendor': 'Anthropic',
      'sources': [
        'deepswe_v10',
        'vibecode'
      ],
      'scores': {
        'deepswe_v10': 0,
        'vibecode': 11.39
      },
      'mean': 5.7,
      'stddev': 5.7,
      'flag': 'warn'
    },
    {
      'canonId': 'GPT-5.6 Sol',
      'name': 'gpt-5.6-sol-0829',
      'vendor': 'OpenAI',
      'sources': [
        'ai_capability',
        'datalearner',
        'deepswe_v11',
        'vibecode'
      ],
      'scores': {
        'ai_capability': 84.45,
        'datalearner': 71.6,
        'deepswe_v11': 73,
        'vibecode': 80.5
      },
      'mean': 77.4,
      'stddev': 5.3,
      'flag': 'warn'
    },
    {
      'canonId': 'DeepSeek V4.1 Flash',
      'name': 'deepseek-v4.1-flash-e0910',
      'vendor': 'DeepSeek',
      'sources': [
        'ai_capability',
        'datalearner',
        'deepswe_v11',
        'vibecode'
      ],
      'scores': {
        'ai_capability': 84.55,
        'datalearner': 74.2,
        'deepswe_v11': 74.2,
        'vibecode': 84.74
      },
      'mean': 79.4,
      'stddev': 5.22,
      'flag': 'warn'
    },
    {
      'canonId': 'GPT-5.6 Luna',
      'name': 'GPT-5.6 Luna',
      'vendor': 'OpenAI',
      'sources': [
        'datalearner',
        'deepswe_v11',
        'vibecode'
      ],
      'scores': {
        'datalearner': 67.2,
        'deepswe_v11': 67,
        'vibecode': 77.06
      },
      'mean': 70.4,
      'stddev': 4.7,
      'flag': 'ok'
    },
    {
      'canonId': 'Gemini 3.8 Flash',
      'name': 'gemini-3.8-flash',
      'vendor': 'Google',
      'sources': [
        'ai_capability',
        'datalearner',
        'deepswe_v11',
        'vibecode'
      ],
      'scores': {
        'ai_capability': 83.2,
        'datalearner': 72.83,
        'deepswe_v11': 74,
        'vibecode': 78.65
      },
      'mean': 77.2,
      'stddev': 4.11,
      'flag': 'ok'
    },
    {
      'canonId': 'Muse Spark 1.3',
      'name': 'muse-spark-1.3',
      'vendor': 'Meta',
      'sources': [
        'ai_capability',
        'datalearner',
        'vibecode'
      ],
      'scores': {
        'ai_capability': 80.75,
        'datalearner': 75.4,
        'vibecode': 84.36
      },
      'mean': 80.2,
      'stddev': 3.68,
      'flag': 'ok'
    },
    {
      'canonId': 'Meta Muse Spark 1.1',
      'name': 'muse-spark-1-1',
      'vendor': 'Meta',
      'sources': [
        'deepswe_v11',
        'vibecode'
      ],
      'scores': {
        'deepswe_v11': 53,
        'vibecode': 45.92
      },
      'mean': 49.5,
      'stddev': 3.54,
      'flag': 'ok'
    },
    {
      'canonId': 'GPT-5.4',
      'name': 'gpt-5-4',
      'vendor': 'OpenAI',
      'sources': [
        'deepswe_v11',
        'deepswe_v10',
        'vibecode'
      ],
      'scores': {
        'deepswe_v11': 52,
        'deepswe_v10': 56,
        'vibecode': 57.95
      },
      'mean': 55.3,
      'stddev': 2.47,
      'flag': 'ok'
    },
    {
      'canonId': 'GPT-5.6 Terra',
      'name': 'GPT-5.6 Terra',
      'vendor': 'OpenAI',
      'sources': [
        'datalearner',
        'deepswe_v11',
        'vibecode'
      ],
      'scores': {
        'datalearner': 69.6,
        'deepswe_v11': 70,
        'vibecode': 74.59
      },
      'mean': 71.4,
      'stddev': 2.26,
      'flag': 'ok'
    },
    {
      'canonId': 'GPT-5.5',
      'name': 'GPT-5.5',
      'vendor': 'OpenAI',
      'sources': [
        'datalearner',
        'deepswe_v11',
        'deepswe_v10',
        'vibecode'
      ],
      'scores': {
        'datalearner': 67,
        'deepswe_v11': 67,
        'deepswe_v10': 70,
        'vibecode': 68.62
      },
      'mean': 68.2,
      'stddev': 1.25,
      'flag': 'ok'
    },
    {
      'canonId': 'Grok Build',
      'name': 'grok-build-0-1',
      'vendor': 'xAI',
      'sources': [
        'deepswe_v10',
        'vibecode'
      ],
      'scores': {
        'deepswe_v10': 13,
        'vibecode': 13.35
      },
      'mean': 13.2,
      'stddev': 0.17,
      'flag': 'ok'
    }
  ],
  'completeness': {
    'ai_capability': {
      'rate': 1,
      'total': 62,
      'complete': 62,
      'modelCount': 62,
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
      'total': 12,
      'complete': 12,
      'modelCount': 12,
      'missingFields': {},
      'flag': 'ok'
    },
    'arena_webdev': {
      'rate': 1,
      'total': 128,
      'complete': 128,
      'modelCount': 128,
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
    'deepswe_v11': {
      'rate': 1,
      'total': 31,
      'complete': 31,
      'modelCount': 31,
      'missingFields': {},
      'flag': 'ok'
    },
    'deepswe_v10': {
      'rate': 1,
      'total': 21,
      'complete': 21,
      'modelCount': 21,
      'missingFields': {},
      'flag': 'ok'
    },
    'gpqa': {
      'rate': 1,
      'total': 50,
      'complete': 50,
      'modelCount': 50,
      'missingFields': {},
      'flag': 'ok'
    },
    'hle': {
      'rate': 1,
      'total': 82,
      'complete': 82,
      'modelCount': 82,
      'missingFields': {},
      'flag': 'ok'
    },
    'lastexam': {
      'rate': 1,
      'total': 21,
      'complete': 21,
      'modelCount': 21,
      'missingFields': {},
      'flag': 'ok'
    },
    'llm2014': {
      'rate': 0,
      'total': 81,
      'complete': 0,
      'modelCount': 81,
      'missingFields': {
        'score': 81
      },
      'flag': 'warn'
    },
    'nl2repo': {
      'rate': 1,
      'total': 48,
      'complete': 48,
      'modelCount': 48,
      'missingFields': {},
      'flag': 'ok'
    },
    'osworld': {
      'rate': 1,
      'total': 26,
      'complete': 26,
      'modelCount': 26,
      'missingFields': {},
      'flag': 'ok'
    },
    'tbench': {
      'rate': 1,
      'total': 22,
      'complete': 22,
      'modelCount': 22,
      'missingFields': {},
      'flag': 'ok'
    },
    'tbench_v21': {
      'rate': 1,
      'total': 44,
      'complete': 44,
      'modelCount': 44,
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
      'total': 9,
      'complete': 9,
      'modelCount': 9,
      'missingFields': {},
      'flag': 'ok'
    },
    'vibecode': {
      'rate': 1,
      'total': 91,
      'complete': 91,
      'modelCount': 91,
      'missingFields': {},
      'flag': 'ok'
    }
  },
  'timeliness': {
    'ai_capability': {
      'updated': '2026-09-14',
      'ageDays': 0,
      'flag': 'ok'
    },
    'datalearner': {
      'updated': '2026-09-14',
      'ageDays': 0,
      'flag': 'ok'
    },
    'arcagi3': {
      'updated': '2026-09-14',
      'ageDays': 0,
      'flag': 'ok'
    },
    'arena_webdev': {
      'updated': '2026-09-14',
      'ageDays': 0,
      'flag': 'ok'
    },
    'benchcad': {
      'updated': '2026-09-14',
      'ageDays': 0,
      'flag': 'ok'
    },
    'deepswe_v11': {
      'updated': '2026-09-14',
      'ageDays': 0,
      'flag': 'ok'
    },
    'deepswe_v10': {
      'updated': '2026-09-14',
      'ageDays': 0,
      'flag': 'ok'
    },
    'gpqa': {
      'updated': '2026-09-14',
      'ageDays': 0,
      'flag': 'ok'
    },
    'hle': {
      'updated': '2026-09-14',
      'ageDays': 0,
      'flag': 'ok'
    },
    'lastexam': {
      'updated': '2026-09-14',
      'ageDays': 0,
      'flag': 'ok'
    },
    'llm2014': {
      'updated': '2026-09-14',
      'ageDays': 0,
      'flag': 'ok'
    },
    'nl2repo': {
      'updated': '2026-09-14',
      'ageDays': 0,
      'flag': 'ok'
    },
    'osworld': {
      'updated': '2026-09-14',
      'ageDays': 0,
      'flag': 'ok'
    },
    'tbench': {
      'updated': '2026-09-14',
      'ageDays': 0,
      'flag': 'ok'
    },
    'tbench_v21': {
      'updated': '2026-09-14',
      'ageDays': 0,
      'flag': 'ok'
    },
    'tbench_v3': {
      'updated': '2026-09-14',
      'ageDays': 0,
      'flag': 'ok'
    },
    'tbscience': {
      'updated': '2026-09-14',
      'ageDays': 0,
      'flag': 'ok'
    },
    'vibecode': {
      'updated': '2026-09-14',
      'ageDays': 0,
      'flag': 'ok'
    }
  },
  'alerts': [
    {
      'level': 'warn',
      'dimension': 'completeness',
      'sourceId': 'llm2014',
      'message': '必填字段完整率 0.0%(低于 80%)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'deepswe_v11,deepswe_v10,vibecode',
      'message': 'DeepSeek V4 Pro 0813 跨源分数标准差 26.69(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'ai_capability,deepswe_v11,vibecode',
      'message': 'glm-5.3-flash 跨源分数标准差 21.65(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'deepswe_v10,vibecode',
      'message': 'qwen3-7-max 跨源分数标准差 14.84(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'ai_capability,vibecode',
      'message': 'inkling 跨源分数标准差 14.52(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'deepswe_v10,vibecode',
      'message': 'claude-opus-4-6 跨源分数标准差 13.77(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'deepswe_v11,vibecode',
      'message': 'claude-sonnet-5 跨源分数标准差 13.67(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'deepswe_v10,vibecode',
      'message': 'gpt-5-4-mini 跨源分数标准差 11.99(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'ai_capability,datalearner,deepswe_v11,vibecode',
      'message': 'claude-fable-5 跨源分数标准差 11.98(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'ai_capability,datalearner,deepswe_v11,vibecode',
      'message': 'gpt-6-astra 跨源分数标准差 11.76(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'deepswe_v10,vibecode',
      'message': 'qwen3-6-plus 跨源分数标准差 11.29(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'ai_capability,deepswe_v11,vibecode',
      'message': 'DSV4F0731 跨源分数标准差 10.83(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'ai_capability,deepswe_v11,vibecode',
      'message': 'muse-spark-1.2-contributor 跨源分数标准差 10.78(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'datalearner,deepswe_v11,vibecode',
      'message': 'Claude Fable 5.1 跨源分数标准差 10.78(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'deepswe_v11,deepswe_v10,vibecode',
      'message': 'claude-sonnet-4-6 跨源分数标准差 10.7(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'ai_capability,deepswe_v11,vibecode',
      'message': 'gemini-3.6-flash 跨源分数标准差 10.39(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'deepswe_v11,deepswe_v10,vibecode',
      'message': 'claude-opus-4-8 跨源分数标准差 10.2(>10)'
    }
  ]
};
