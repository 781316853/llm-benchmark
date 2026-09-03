// 数据质量报告(由 scripts/lib/quality-report.js 生成)
// 三维交叉验证:一致性(跨源分数标准差)/ 完整性(必填字段齐全率)/ 时效性(数据新鲜度)
// generatedAt=2026-09-03;overallScore 为各源完整性均权(0-1)
// 注:前端暂不展示,仅供抓取端记录与 CI 日志溯源。
window.QUALITY = {
  'generatedAt': '2026-09-03',
  'overallScore': 0.857,
  'sources': [
    {
      'id': 'arena_webdev',
      'name': 'Code Arena WebDev (LMArena)',
      'status': 'ok',
      'modelCount': 124,
      'updated': '2026-09-03',
      'ageDays': 0,
      'completeness': 1,
      'fetchAttempts': 1,
      'errors': []
    },
    {
      'id': 'artificial_analysis',
      'name': 'Artificial Analysis II',
      'status': 'ok',
      'modelCount': 31,
      'updated': '2026-09-03',
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
      'updated': '2026-09-03',
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
      'updated': '2026-09-03',
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
      'updated': '2026-09-03',
      'ageDays': 0,
      'completeness': 1,
      'fetchAttempts': 1,
      'errors': []
    },
    {
      'id': 'llm2014',
      'name': 'llm2014',
      'status': 'ok',
      'modelCount': 79,
      'updated': '2026-09-03',
      'ageDays': 0,
      'completeness': 0,
      'fetchAttempts': 1,
      'errors': []
    },
    {
      'id': 'vibecode',
      'name': 'Vibe Code',
      'status': 'ok',
      'modelCount': 87,
      'updated': '2026-09-03',
      'ageDays': 0,
      'completeness': 1,
      'fetchAttempts': 1,
      'errors': []
    }
  ],
  'consistency': [
    {
      'canonId': 'DeepSeek V4 Pro 0813',
      'name': 'DeepSeek V4 Pro 0813 (max)',
      'vendor': 'DeepSeek',
      'sources': [
        'artificial_analysis',
        'datalearner',
        'deepswe_v11',
        'deepswe_v10',
        'vibecode'
      ],
      'scores': {
        'artificial_analysis': 53.2,
        'datalearner': 62.7,
        'deepswe_v11': 62.85,
        'deepswe_v10': 8,
        'vibecode': 66.11
      },
      'mean': 50.6,
      'stddev': 21.72,
      'flag': 'alert'
    },
    {
      'canonId': 'Nemotron 3 Ultra',
      'name': 'Nemotron 3 Ultra',
      'vendor': 'NVIDIA',
      'sources': [
        'artificial_analysis',
        'vibecode'
      ],
      'scores': {
        'artificial_analysis': 38.32,
        'vibecode': 7.64
      },
      'mean': 23,
      'stddev': 15.34,
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
      'canonId': 'Mistral Medium 3.5',
      'name': 'Mistral Medium 3.5',
      'vendor': 'Mistral',
      'sources': [
        'artificial_analysis',
        'vibecode'
      ],
      'scores': {
        'artificial_analysis': 30.39,
        'vibecode': 2.89
      },
      'mean': 16.6,
      'stddev': 13.75,
      'flag': 'alert'
    },
    {
      'canonId': 'Claude Fable 5.1',
      'name': 'Claude Fable 5.1 (max with fallback)',
      'vendor': 'Anthropic',
      'sources': [
        'artificial_analysis',
        'vibecode'
      ],
      'scores': {
        'artificial_analysis': 63.35,
        'vibecode': 90.26
      },
      'mean': 76.8,
      'stddev': 13.45,
      'flag': 'alert'
    },
    {
      'canonId': 'GLM-5.3-Flash',
      'name': 'GLM-5.3-Flash',
      'vendor': 'zAI',
      'sources': [
        'artificial_analysis',
        'datalearner',
        'deepswe_v11',
        'vibecode'
      ],
      'scores': {
        'artificial_analysis': 57.46,
        'datalearner': 63.4,
        'deepswe_v11': 63,
        'vibecode': 30.76
      },
      'mean': 53.7,
      'stddev': 13.43,
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
      'canonId': 'MiniMax-M3',
      'name': 'MiniMax-M3',
      'vendor': 'MiniMax',
      'sources': [
        'artificial_analysis',
        'deepswe_v10'
      ],
      'scores': {
        'artificial_analysis': 45.4,
        'deepswe_v10': 20
      },
      'mean': 32.7,
      'stddev': 12.7,
      'flag': 'alert'
    },
    {
      'canonId': 'Claude Haiku 4.5',
      'name': 'Claude 4.5 Haiku',
      'vendor': 'Anthropic',
      'sources': [
        'artificial_analysis',
        'deepswe_v10',
        'vibecode'
      ],
      'scores': {
        'artificial_analysis': 29.89,
        'deepswe_v10': 0,
        'vibecode': 11.39
      },
      'mean': 13.8,
      'stddev': 12.32,
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
      'canonId': 'Inkling',
      'name': 'Inkling',
      'vendor': 'Thinking Machines',
      'sources': [
        'artificial_analysis',
        'vibecode'
      ],
      'scores': {
        'artificial_analysis': 42.29,
        'vibecode': 19.21
      },
      'mean': 30.8,
      'stddev': 11.54,
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
      'name': 'Muse Spark 1.2',
      'vendor': 'Meta',
      'sources': [
        'datalearner',
        'deepswe_v11',
        'vibecode'
      ],
      'scores': {
        'datalearner': 59.3,
        'deepswe_v11': 55,
        'vibecode': 79.1
      },
      'mean': 64.5,
      'stddev': 10.5,
      'flag': 'alert'
    },
    {
      'canonId': 'Claude Fable 5',
      'name': 'Claude Fable 5 (with fallback)',
      'vendor': 'Anthropic',
      'sources': [
        'artificial_analysis',
        'datalearner',
        'deepswe_v11',
        'vibecode'
      ],
      'scores': {
        'artificial_analysis': 62.07,
        'datalearner': 70,
        'deepswe_v11': 70,
        'vibecode': 90.35
      },
      'mean': 73.1,
      'stddev': 10.47,
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
      'canonId': 'DeepSeek V4 Flash 0731',
      'name': 'DeepSeek-V4-Flash',
      'vendor': 'DeepSeek',
      'sources': [
        'datalearner',
        'deepswe_v11',
        'vibecode'
      ],
      'scores': {
        'datalearner': 54.4,
        'deepswe_v11': 53,
        'vibecode': 74.74
      },
      'mean': 60.7,
      'stddev': 9.93,
      'flag': 'warn'
    },
    {
      'canonId': 'Claude Opus 5',
      'name': 'Claude Opus 5 (max)',
      'vendor': 'Anthropic',
      'sources': [
        'artificial_analysis',
        'datalearner',
        'deepswe_v11',
        'vibecode'
      ],
      'scores': {
        'artificial_analysis': 62.35,
        'datalearner': 68.8,
        'deepswe_v11': 74,
        'vibecode': 88.4
      },
      'mean': 73.4,
      'stddev': 9.6,
      'flag': 'warn'
    },
    {
      'canonId': 'Qwen3.8-27B',
      'name': 'Qwen3.8 27B (xhigh)',
      'vendor': 'Alibaba',
      'sources': [
        'artificial_analysis',
        'datalearner',
        'deepswe_v11',
        'vibecode'
      ],
      'scores': {
        'artificial_analysis': 52.02,
        'datalearner': 42.2,
        'deepswe_v11': 42.2,
        'vibecode': 64.85
      },
      'mean': 50.3,
      'stddev': 9.3,
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
      'canonId': 'Kimi K3',
      'name': 'Kimi K3 (max)',
      'vendor': 'Moonshot',
      'sources': [
        'artificial_analysis',
        'datalearner',
        'deepswe_v11',
        'vibecode'
      ],
      'scores': {
        'artificial_analysis': 59.7,
        'datalearner': 67.5,
        'deepswe_v11': 69,
        'vibecode': 84.96
      },
      'mean': 70.3,
      'stddev': 9.18,
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
      'canonId': 'GPT-5.6 Luna',
      'name': 'GPT-5.6 Luna (max)',
      'vendor': 'OpenAI',
      'sources': [
        'artificial_analysis',
        'datalearner',
        'deepswe_v11',
        'vibecode'
      ],
      'scores': {
        'artificial_analysis': 52.32,
        'datalearner': 67.2,
        'deepswe_v11': 67,
        'vibecode': 77.06
      },
      'mean': 65.9,
      'stddev': 8.83,
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
      'canonId': 'Gemini 3.6 Flash',
      'name': 'Gemini 3.6 Flash',
      'vendor': 'Google',
      'sources': [
        'datalearner',
        'deepswe_v11',
        'vibecode'
      ],
      'scores': {
        'datalearner': 49,
        'deepswe_v11': 47,
        'vibecode': 64.01
      },
      'mean': 53.3,
      'stddev': 7.59,
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
      'canonId': 'Gemini 3.8 Flash',
      'name': 'Gemini 3.8 Flash (high)',
      'vendor': '其他',
      'sources': [
        'artificial_analysis',
        'datalearner',
        'deepswe_v11',
        'vibecode'
      ],
      'scores': {
        'artificial_analysis': 58.68,
        'datalearner': 73.7,
        'deepswe_v11': 74,
        'vibecode': 78.65
      },
      'mean': 71.3,
      'stddev': 7.52,
      'flag': 'warn'
    },
    {
      'canonId': 'Gemini 3.5 Flash',
      'name': 'Gemini 3.5 Flash',
      'vendor': 'Google',
      'sources': [
        'datalearner',
        'deepswe_v11',
        'deepswe_v10',
        'vibecode'
      ],
      'scores': {
        'datalearner': 37,
        'deepswe_v11': 36,
        'deepswe_v10': 28,
        'vibecode': 48.68
      },
      'mean': 37.4,
      'stddev': 7.38,
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
      'canonId': 'GPT-5.6 Sol',
      'name': 'GPT-5.6 Sol (max)',
      'vendor': 'OpenAI',
      'sources': [
        'artificial_analysis',
        'datalearner',
        'deepswe_v11',
        'vibecode'
      ],
      'scores': {
        'artificial_analysis': 60.93,
        'datalearner': 72.7,
        'deepswe_v11': 73,
        'vibecode': 80.5
      },
      'mean': 71.8,
      'stddev': 7,
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
      'canonId': 'GPT-5.6 Terra',
      'name': 'GPT-5.6 Terra (max)',
      'vendor': 'OpenAI',
      'sources': [
        'artificial_analysis',
        'datalearner',
        'deepswe_v11',
        'vibecode'
      ],
      'scores': {
        'artificial_analysis': 56.58,
        'datalearner': 69.6,
        'deepswe_v11': 70,
        'vibecode': 74.59
      },
      'mean': 67.7,
      'stddev': 6.71,
      'flag': 'warn'
    },
    {
      'canonId': 'GLM-5.3',
      'name': 'GLM-5.3 (max)',
      'vendor': 'zAI',
      'sources': [
        'artificial_analysis',
        'datalearner',
        'deepswe_v11',
        'vibecode'
      ],
      'scores': {
        'artificial_analysis': 59.51,
        'datalearner': 66.9,
        'deepswe_v11': 69,
        'vibecode': 78.13
      },
      'mean': 68.4,
      'stddev': 6.64,
      'flag': 'warn'
    },
    {
      'canonId': 'Muse Spark 1.3',
      'name': 'Muse Spark 1.3 (max)',
      'vendor': '其他',
      'sources': [
        'artificial_analysis',
        'datalearner',
        'deepswe_v11'
      ],
      'scores': {
        'artificial_analysis': 61.44,
        'datalearner': 75.4,
        'deepswe_v11': 75.4
      },
      'mean': 70.7,
      'stddev': 6.58,
      'flag': 'warn'
    },
    {
      'canonId': 'Grok 4.6',
      'name': 'Grok 4.6 (high)',
      'vendor': 'xAI',
      'sources': [
        'artificial_analysis',
        'datalearner',
        'deepswe_v11',
        'vibecode'
      ],
      'scores': {
        'artificial_analysis': 60.92,
        'datalearner': 65.9,
        'deepswe_v11': 67,
        'vibecode': 76.24
      },
      'mean': 67.5,
      'stddev': 5.53,
      'flag': 'warn'
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
      'canonId': 'Gemini 3.7 Flash',
      'name': 'Gemini 3.7 Flash',
      'vendor': 'Google',
      'sources': [
        'datalearner',
        'deepswe_v11',
        'vibecode'
      ],
      'scores': {
        'datalearner': 65.3,
        'deepswe_v11': 65,
        'vibecode': 70.4
      },
      'mean': 66.9,
      'stddev': 2.48,
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
      'canonId': 'Qwen3.8-Max',
      'name': 'Qwen3.8-Max-0902',
      'vendor': 'Alibaba',
      'sources': [
        'datalearner',
        'deepswe_v11',
        'vibecode'
      ],
      'scores': {
        'datalearner': 62.95,
        'deepswe_v11': 63.15,
        'vibecode': 64.7
      },
      'mean': 63.6,
      'stddev': 0.78,
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
      'canonId': 'Gemini 3.5 Flash Lite',
      'name': 'Gemini 3.5 Flash-Lite',
      'vendor': 'Google',
      'sources': [
        'artificial_analysis',
        'vibecode'
      ],
      'scores': {
        'artificial_analysis': 37.44,
        'vibecode': 37.16
      },
      'mean': 37.3,
      'stddev': 0.14,
      'flag': 'ok'
    },
    {
      'canonId': 'Hy4 preview',
      'name': 'Hy4 preview',
      'vendor': '其他',
      'sources': [
        'datalearner',
        'deepswe_v11'
      ],
      'scores': {
        'datalearner': 64.3,
        'deepswe_v11': 64.3
      },
      'mean': 64.3,
      'stddev': 0,
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
    },
    {
      'canonId': 'Qwen3.8-Flash-Next',
      'name': 'Qwen3.8-Flash-Next',
      'vendor': '其他',
      'sources': [
        'datalearner',
        'deepswe_v11'
      ],
      'scores': {
        'datalearner': 58.7,
        'deepswe_v11': 58.7
      },
      'mean': 58.7,
      'stddev': 0,
      'flag': 'ok'
    }
  ],
  'completeness': {
    'arena_webdev': {
      'rate': 1,
      'total': 124,
      'complete': 124,
      'modelCount': 124,
      'missingFields': {},
      'flag': 'ok'
    },
    'artificial_analysis': {
      'rate': 1,
      'total': 31,
      'complete': 31,
      'modelCount': 31,
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
    'llm2014': {
      'rate': 0,
      'total': 79,
      'complete': 0,
      'modelCount': 79,
      'missingFields': {
        'score': 79
      },
      'flag': 'warn'
    },
    'vibecode': {
      'rate': 1,
      'total': 87,
      'complete': 87,
      'modelCount': 87,
      'missingFields': {},
      'flag': 'ok'
    }
  },
  'timeliness': {
    'arena_webdev': {
      'updated': '2026-09-03',
      'ageDays': 0,
      'flag': 'ok'
    },
    'artificial_analysis': {
      'updated': '2026-09-03',
      'ageDays': 0,
      'flag': 'ok'
    },
    'datalearner': {
      'updated': '2026-09-03',
      'ageDays': 0,
      'flag': 'ok'
    },
    'deepswe_v11': {
      'updated': '2026-09-03',
      'ageDays': 0,
      'flag': 'ok'
    },
    'deepswe_v10': {
      'updated': '2026-09-03',
      'ageDays': 0,
      'flag': 'ok'
    },
    'llm2014': {
      'updated': '2026-09-03',
      'ageDays': 0,
      'flag': 'ok'
    },
    'vibecode': {
      'updated': '2026-09-03',
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
      'sourceId': 'artificial_analysis,datalearner,deepswe_v11,deepswe_v10,vibecode',
      'message': 'DeepSeek V4 Pro 0813 (max) 跨源分数标准差 21.72(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'artificial_analysis,vibecode',
      'message': 'Nemotron 3 Ultra 跨源分数标准差 15.34(>10)'
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
      'sourceId': 'deepswe_v10,vibecode',
      'message': 'claude-opus-4-6 跨源分数标准差 13.77(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'artificial_analysis,vibecode',
      'message': 'Mistral Medium 3.5 跨源分数标准差 13.75(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'artificial_analysis,vibecode',
      'message': 'Claude Fable 5.1 (max with fallback) 跨源分数标准差 13.45(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'artificial_analysis,datalearner,deepswe_v11,vibecode',
      'message': 'GLM-5.3-Flash 跨源分数标准差 13.43(>10)'
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
      'sourceId': 'artificial_analysis,deepswe_v10',
      'message': 'MiniMax-M3 跨源分数标准差 12.7(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'artificial_analysis,deepswe_v10,vibecode',
      'message': 'Claude 4.5 Haiku 跨源分数标准差 12.32(>10)'
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
      'sourceId': 'artificial_analysis,vibecode',
      'message': 'Inkling 跨源分数标准差 11.54(>10)'
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
      'sourceId': 'deepswe_v11,deepswe_v10,vibecode',
      'message': 'claude-sonnet-4-6 跨源分数标准差 10.7(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'datalearner,deepswe_v11,vibecode',
      'message': 'Muse Spark 1.2 跨源分数标准差 10.5(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'artificial_analysis,datalearner,deepswe_v11,vibecode',
      'message': 'Claude Fable 5 (with fallback) 跨源分数标准差 10.47(>10)'
    }
  ]
};
