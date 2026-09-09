// 数据质量报告(由 scripts/lib/quality-report.js 生成)
// 三维交叉验证:一致性(跨源分数标准差)/ 完整性(必填字段齐全率)/ 时效性(数据新鲜度)
// generatedAt=2026-09-09;overallScore 为各源完整性均权(0-1)
// 注:前端暂不展示,仅供抓取端记录与 CI 日志溯源。
window.QUALITY = {
  'generatedAt': '2026-09-09',
  'overallScore': 0.91,
  'sources': [
    {
      'id': 'ai_capability',
      'name': 'AI 能力专项测试',
      'status': 'ok',
      'modelCount': 62,
      'updated': '2026-09-09',
      'ageDays': 0,
      'completeness': 1,
      'fetchAttempts': 1,
      'errors': []
    },
    {
      'id': 'arcagi3',
      'name': 'ARC-AGI-3',
      'status': 'ok',
      'modelCount': 5,
      'updated': '2026-09-09',
      'ageDays': 0,
      'completeness': 1,
      'fetchAttempts': 1,
      'errors': []
    },
    {
      'id': 'arena_webdev',
      'name': 'Code Arena WebDev (LMArena)',
      'status': 'ok',
      'modelCount': 126,
      'updated': '2026-09-09',
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
      'updated': '2026-09-09',
      'ageDays': 0,
      'completeness': 0.824,
      'fetchAttempts': 1,
      'errors': []
    },
    {
      'id': 'datalearner',
      'name': 'datalearner DeepSWE 榜',
      'status': 'ok',
      'modelCount': 30,
      'updated': '2026-09-09',
      'ageDays': 0,
      'completeness': 1,
      'fetchAttempts': 1,
      'errors': []
    },
    {
      'id': 'deepswe_v11',
      'name': 'DeepSWE v1.1',
      'status': 'ok',
      'modelCount': 34,
      'updated': '2026-09-09',
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
      'updated': '2026-09-09',
      'ageDays': 0,
      'completeness': 1,
      'fetchAttempts': 1,
      'errors': []
    },
    {
      'id': 'lastexam',
      'name': 'Agents\' Last Exam',
      'status': 'ok',
      'modelCount': 16,
      'updated': '2026-09-09',
      'ageDays': 0,
      'completeness': 1,
      'fetchAttempts': 1,
      'errors': []
    },
    {
      'id': 'llm2014',
      'name': 'llm2014',
      'status': 'ok',
      'modelCount': 80,
      'updated': '2026-09-09',
      'ageDays': 0,
      'completeness': 0,
      'fetchAttempts': 1,
      'errors': []
    },
    {
      'id': 'osworld',
      'name': 'OSWorld 2.0',
      'status': 'ok',
      'modelCount': 22,
      'updated': '2026-09-09',
      'ageDays': 0,
      'completeness': 1,
      'fetchAttempts': 1,
      'errors': []
    },
    {
      'id': 'tbench',
      'name': 'Terminal-Bench 4.0',
      'status': 'ok',
      'modelCount': 18,
      'updated': '2026-09-09',
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
      'updated': '2026-09-09',
      'ageDays': 0,
      'completeness': 1,
      'fetchAttempts': 1,
      'errors': []
    },
    {
      'id': 'vibecode',
      'name': 'Vibe Code',
      'status': 'ok',
      'modelCount': 90,
      'updated': '2026-09-09',
      'ageDays': 0,
      'completeness': 1,
      'fetchAttempts': 1,
      'errors': []
    }
  ],
  'consistency': [
    {
      'canonId': 'DeepSeek V4 Pro 0813',
      'name': 'DeepSeek-V4-Pro',
      'vendor': 'DeepSeek',
      'sources': [
        'datalearner',
        'deepswe_v11',
        'deepswe_v10',
        'vibecode'
      ],
      'scores': {
        'datalearner': 62.7,
        'deepswe_v11': 62.85,
        'deepswe_v10': 8,
        'vibecode': 66.11
      },
      'mean': 49.9,
      'stddev': 24.24,
      'flag': 'alert'
    },
    {
      'canonId': 'GLM-5.3-Flash',
      'name': 'glm-5.3-flash',
      'vendor': 'zAI',
      'sources': [
        'ai_capability',
        'datalearner',
        'deepswe_v11',
        'vibecode'
      ],
      'scores': {
        'ai_capability': 83.35,
        'datalearner': 63.4,
        'deepswe_v11': 63,
        'vibecode': 30.76
      },
      'mean': 60.1,
      'stddev': 18.85,
      'flag': 'alert'
    },
    {
      'canonId': 'Qwen3.8-Flash',
      'name': 'qwen3.8-flash',
      'vendor': 'Alibaba',
      'sources': [
        'ai_capability',
        'datalearner',
        'deepswe_v11'
      ],
      'scores': {
        'ai_capability': 92.55,
        'datalearner': 58.7,
        'deepswe_v11': 58.7
      },
      'mean': 70,
      'stddev': 15.96,
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
      'name': 'Claude Sonnet 5',
      'vendor': 'Anthropic',
      'sources': [
        'datalearner',
        'deepswe_v11',
        'vibecode'
      ],
      'scores': {
        'datalearner': 54,
        'deepswe_v11': 54,
        'vibecode': 81.33
      },
      'mean': 63.1,
      'stddev': 12.88,
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
        'datalearner': 70,
        'deepswe_v11': 70,
        'vibecode': 90.35
      },
      'mean': 81.7,
      'stddev': 11.84,
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
        'datalearner': 74.1,
        'deepswe_v11': 74,
        'vibecode': 89.59
      },
      'mean': 84.6,
      'stddev': 11.31,
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
        'datalearner',
        'deepswe_v11',
        'vibecode'
      ],
      'scores': {
        'ai_capability': 77.05,
        'datalearner': 54.4,
        'deepswe_v11': 53,
        'vibecode': 74.74
      },
      'mean': 64.8,
      'stddev': 11.14,
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
      'canonId': 'Meta Muse Spark 1.2',
      'name': 'muse-spark-1.2-contributor',
      'vendor': 'Meta',
      'sources': [
        'ai_capability',
        'datalearner',
        'deepswe_v11',
        'vibecode'
      ],
      'scores': {
        'ai_capability': 76.4,
        'datalearner': 59.3,
        'deepswe_v11': 55,
        'vibecode': 79.1
      },
      'mean': 67.4,
      'stddev': 10.46,
      'flag': 'alert'
    },
    {
      'canonId': 'Tencent Hy4 Preview',
      'name': 'hy4-preview',
      'vendor': 'Tencent',
      'sources': [
        'ai_capability',
        'datalearner',
        'deepswe_v11'
      ],
      'scores': {
        'ai_capability': 86.4,
        'datalearner': 64.3,
        'deepswe_v11': 64.3
      },
      'mean': 71.7,
      'stddev': 10.42,
      'flag': 'alert'
    },
    {
      'canonId': 'Gemini 3.6 Flash',
      'name': 'gemini-3.6-flash',
      'vendor': 'Google',
      'sources': [
        'ai_capability',
        'datalearner',
        'deepswe_v11',
        'vibecode'
      ],
      'scores': {
        'ai_capability': 71.9,
        'datalearner': 49,
        'deepswe_v11': 47,
        'vibecode': 64.01
      },
      'mean': 58,
      'stddev': 10.38,
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
        'datalearner': 68.8,
        'deepswe_v11': 74,
        'vibecode': 88.4
      },
      'mean': 80.9,
      'stddev': 9.81,
      'flag': 'warn'
    },
    {
      'canonId': 'Claude Opus 4.8',
      'name': 'Claude Opus 4.8',
      'vendor': 'Anthropic',
      'sources': [
        'datalearner',
        'deepswe_v11',
        'deepswe_v10',
        'vibecode'
      ],
      'scores': {
        'datalearner': 59,
        'deepswe_v11': 59,
        'deepswe_v10': 58,
        'vibecode': 80.11
      },
      'mean': 64,
      'stddev': 9.29,
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
        'datalearner': 66.9,
        'deepswe_v11': 69,
        'vibecode': 78.13
      },
      'mean': 76,
      'stddev': 9.09,
      'flag': 'warn'
    },
    {
      'canonId': 'GLM-5.2',
      'name': 'GLM-5.2',
      'vendor': 'zAI',
      'sources': [
        'datalearner',
        'deepswe_v11',
        'deepswe_v10',
        'vibecode'
      ],
      'scores': {
        'datalearner': 44,
        'deepswe_v11': 44,
        'deepswe_v10': 42,
        'vibecode': 63.96
      },
      'mean': 48.5,
      'stddev': 8.97,
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
        'datalearner': 62.95,
        'deepswe_v11': 63.15,
        'vibecode': 64.7
      },
      'mean': 68.2,
      'stddev': 8.01,
      'flag': 'warn'
    },
    {
      'canonId': 'Kimi K3',
      'name': 'kimi-k3',
      'vendor': 'Moonshot',
      'sources': [
        'ai_capability',
        'datalearner',
        'deepswe_v11',
        'vibecode'
      ],
      'scores': {
        'ai_capability': 82.55,
        'datalearner': 67.5,
        'deepswe_v11': 69,
        'vibecode': 84.96
      },
      'mean': 76,
      'stddev': 7.82,
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
      'canonId': 'Gemini 3.7 Flash',
      'name': 'gemini-3.7-flash',
      'vendor': 'Google',
      'sources': [
        'ai_capability',
        'datalearner',
        'deepswe_v11',
        'vibecode'
      ],
      'scores': {
        'ai_capability': 83.45,
        'datalearner': 65.3,
        'deepswe_v11': 65,
        'vibecode': 70.4
      },
      'mean': 71,
      'stddev': 7.48,
      'flag': 'warn'
    },
    {
      'canonId': 'Grok 4.5',
      'name': 'Grok 4.5',
      'vendor': 'xAI',
      'sources': [
        'datalearner',
        'deepswe_v11',
        'vibecode'
      ],
      'scores': {
        'datalearner': 53,
        'deepswe_v11': 54,
        'vibecode': 69
      },
      'mean': 58.7,
      'stddev': 7.32,
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
        'datalearner': 65.9,
        'deepswe_v11': 67,
        'vibecode': 76.24
      },
      'mean': 72.8,
      'stddev': 6.7,
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
        'datalearner': 72.7,
        'deepswe_v11': 73,
        'vibecode': 80.5
      },
      'mean': 77.7,
      'stddev': 5.01,
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
        'datalearner': 73.7,
        'deepswe_v11': 74,
        'vibecode': 78.65
      },
      'mean': 77.4,
      'stddev': 3.89,
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
      'name': 'Muse Spark 1.1',
      'vendor': 'Meta',
      'sources': [
        'datalearner',
        'deepswe_v11',
        'vibecode'
      ],
      'scores': {
        'datalearner': 53.3,
        'deepswe_v11': 53,
        'vibecode': 45.92
      },
      'mean': 50.7,
      'stddev': 3.41,
      'flag': 'ok'
    },
    {
      'canonId': 'GPT-5.4',
      'name': 'GPT-5.4',
      'vendor': 'OpenAI',
      'sources': [
        'datalearner',
        'deepswe_v11',
        'deepswe_v10',
        'vibecode'
      ],
      'scores': {
        'datalearner': 52,
        'deepswe_v11': 52,
        'deepswe_v10': 56,
        'vibecode': 57.95
      },
      'mean': 54.5,
      'stddev': 2.58,
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
    },
    {
      'canonId': 'DeepSeek-V4-Flash-Vision-Exp',
      'name': 'DeepSeek-V4-Flash-Vision-Exp',
      'vendor': '其他',
      'sources': [
        'datalearner',
        'deepswe_v11'
      ],
      'scores': {
        'datalearner': 59.3,
        'deepswe_v11': 59.3
      },
      'mean': 59.3,
      'stddev': 0,
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
    'arcagi3': {
      'rate': 1,
      'total': 5,
      'complete': 5,
      'modelCount': 5,
      'missingFields': {},
      'flag': 'ok'
    },
    'arena_webdev': {
      'rate': 1,
      'total': 126,
      'complete': 126,
      'modelCount': 126,
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
    'datalearner': {
      'rate': 1,
      'total': 30,
      'complete': 30,
      'modelCount': 30,
      'missingFields': {},
      'flag': 'ok'
    },
    'deepswe_v11': {
      'rate': 1,
      'total': 34,
      'complete': 34,
      'modelCount': 34,
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
    'lastexam': {
      'rate': 1,
      'total': 16,
      'complete': 16,
      'modelCount': 16,
      'missingFields': {},
      'flag': 'ok'
    },
    'llm2014': {
      'rate': 0,
      'total': 80,
      'complete': 0,
      'modelCount': 80,
      'missingFields': {
        'score': 80
      },
      'flag': 'warn'
    },
    'osworld': {
      'rate': 1,
      'total': 22,
      'complete': 22,
      'modelCount': 22,
      'missingFields': {},
      'flag': 'ok'
    },
    'tbench': {
      'rate': 1,
      'total': 18,
      'complete': 18,
      'modelCount': 18,
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
      'total': 90,
      'complete': 90,
      'modelCount': 90,
      'missingFields': {},
      'flag': 'ok'
    }
  },
  'timeliness': {
    'ai_capability': {
      'updated': '2026-09-09',
      'ageDays': 0,
      'flag': 'ok'
    },
    'arcagi3': {
      'updated': '2026-09-09',
      'ageDays': 0,
      'flag': 'ok'
    },
    'arena_webdev': {
      'updated': '2026-09-09',
      'ageDays': 0,
      'flag': 'ok'
    },
    'benchcad': {
      'updated': '2026-09-09',
      'ageDays': 0,
      'flag': 'ok'
    },
    'datalearner': {
      'updated': '2026-09-09',
      'ageDays': 0,
      'flag': 'ok'
    },
    'deepswe_v11': {
      'updated': '2026-09-09',
      'ageDays': 0,
      'flag': 'ok'
    },
    'deepswe_v10': {
      'updated': '2026-09-09',
      'ageDays': 0,
      'flag': 'ok'
    },
    'lastexam': {
      'updated': '2026-09-09',
      'ageDays': 0,
      'flag': 'ok'
    },
    'llm2014': {
      'updated': '2026-09-09',
      'ageDays': 0,
      'flag': 'ok'
    },
    'osworld': {
      'updated': '2026-09-09',
      'ageDays': 0,
      'flag': 'ok'
    },
    'tbench': {
      'updated': '2026-09-09',
      'ageDays': 0,
      'flag': 'ok'
    },
    'tbscience': {
      'updated': '2026-09-09',
      'ageDays': 0,
      'flag': 'ok'
    },
    'vibecode': {
      'updated': '2026-09-09',
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
      'sourceId': 'datalearner,deepswe_v11,deepswe_v10,vibecode',
      'message': 'DeepSeek-V4-Pro 跨源分数标准差 24.24(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'ai_capability,datalearner,deepswe_v11,vibecode',
      'message': 'glm-5.3-flash 跨源分数标准差 18.85(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'ai_capability,datalearner,deepswe_v11',
      'message': 'qwen3.8-flash 跨源分数标准差 15.96(>10)'
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
      'sourceId': 'datalearner,deepswe_v11,vibecode',
      'message': 'Claude Sonnet 5 跨源分数标准差 12.88(>10)'
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
      'message': 'claude-fable-5 跨源分数标准差 11.84(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'ai_capability,datalearner,deepswe_v11,vibecode',
      'message': 'gpt-6-astra 跨源分数标准差 11.31(>10)'
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
      'sourceId': 'ai_capability,datalearner,deepswe_v11,vibecode',
      'message': 'DSV4F0731 跨源分数标准差 11.14(>10)'
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
      'sourceId': 'ai_capability,datalearner,deepswe_v11,vibecode',
      'message': 'muse-spark-1.2-contributor 跨源分数标准差 10.46(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'ai_capability,datalearner,deepswe_v11',
      'message': 'hy4-preview 跨源分数标准差 10.42(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'ai_capability,datalearner,deepswe_v11,vibecode',
      'message': 'gemini-3.6-flash 跨源分数标准差 10.38(>10)'
    }
  ]
};
