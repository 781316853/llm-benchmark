// 数据质量报告(由 scripts/lib/quality-report.js 生成)
// 三维交叉验证:一致性(跨源分数标准差)/ 完整性(必填字段齐全率)/ 时效性(数据新鲜度)
// generatedAt=2026-08-02;overallScore 为各源完整性均权(0-1)
// 注:前端暂不展示,仅供抓取端记录与 CI 日志溯源。
window.QUALITY = {
  'generatedAt': '2026-08-02',
  'overallScore': 0.8,
  'sources': [
    {
      'id': 'aa_official',
      'name': 'AA Coding Agent Index (官方)',
      'status': 'ok',
      'modelCount': 10,
      'updated': '2026-08-02',
      'ageDays': 0,
      'completeness': 1,
      'fetchAttempts': 1,
      'errors': []
    },
    {
      'id': 'aaci',
      'name': 'AA Coding Agent Index',
      'status': 'error',
      'modelCount': 11,
      'updated': '2026-07-11',
      'ageDays': 22,
      'completeness': null,
      'fetchAttempts': 1,
      'errors': [
        'AA Coding Agent Index 未解析到数据(站点结构变更,保留旧文件供交叉验证)'
      ]
    },
    {
      'id': 'datalearner',
      'name': 'datalearner DeepSWE 榜',
      'status': 'error',
      'modelCount': 19,
      'updated': '2026-08-01',
      'ageDays': 1,
      'completeness': null,
      'fetchAttempts': 1,
      'errors': [
        'certificate has expired'
      ]
    },
    {
      'id': 'deepswe_v11',
      'name': 'DeepSWE v1.1',
      'status': 'ok',
      'modelCount': 18,
      'updated': '2026-08-02',
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
      'updated': '2026-08-02',
      'ageDays': 0,
      'completeness': 1,
      'fetchAttempts': 1,
      'errors': []
    },
    {
      'id': 'llm2014',
      'name': 'llm2014',
      'status': 'ok',
      'modelCount': 61,
      'updated': '2026-08-02',
      'ageDays': 0,
      'completeness': 0,
      'fetchAttempts': 1,
      'errors': []
    },
    {
      'id': 'vibecode',
      'name': 'Vibe Code',
      'status': 'ok',
      'modelCount': 73,
      'updated': '2026-08-02',
      'ageDays': 0,
      'completeness': 1,
      'fetchAttempts': 1,
      'errors': []
    }
  ],
  'consistency': [
    {
      'canonId': 'Meta Muse Spark 1.1',
      'name': 'Muse Spark 1.1',
      'vendor': 'Meta',
      'sources': [
        'aa_official',
        'deepswe_v11',
        'vibecode',
        'vibecode'
      ],
      'scores': {
        'aa_official': 53.5,
        'deepswe_v11': 53,
        'vibecode': 19.67
      },
      'mean': 49.6,
      'stddev': 18.92,
      'flag': 'alert'
    },
    {
      'canonId': 'DeepSeek V4 Pro',
      'name': 'DeepSeek V4 Pro',
      'vendor': 'DeepSeek',
      'sources': [
        'aa_official',
        'deepswe_v10',
        'vibecode'
      ],
      'scores': {
        'aa_official': 31.4,
        'deepswe_v10': 8,
        'vibecode': 49.93
      },
      'mean': 29.8,
      'stddev': 17.16,
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
      'canonId': 'Claude Opus 4.6',
      'name': 'claude-opus-4-6',
      'vendor': 'Anthropic',
      'sources': [
        'deepswe_v10',
        'vibecode',
        'vibecode'
      ],
      'scores': {
        'deepswe_v10': 28,
        'vibecode': 53.5
      },
      'mean': 46.4,
      'stddev': 13.09,
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
      'canonId': 'Claude Sonnet 4.6',
      'name': 'claude-sonnet-4-6',
      'vendor': 'Anthropic',
      'sources': [
        'deepswe_v11',
        'deepswe_v10',
        'vibecode',
        'vibecode'
      ],
      'scores': {
        'deepswe_v11': 30,
        'deepswe_v10': 32,
        'vibecode': 51.48
      },
      'mean': 42.3,
      'stddev': 11.44,
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
      'canonId': 'Claude Opus 4.8',
      'name': 'claude-opus-4-8',
      'vendor': 'Anthropic',
      'sources': [
        'deepswe_v11',
        'deepswe_v10',
        'vibecode',
        'vibecode'
      ],
      'scores': {
        'deepswe_v11': 59,
        'deepswe_v10': 58,
        'vibecode': 77.49
      },
      'mean': 69.3,
      'stddev': 10.97,
      'flag': 'alert'
    },
    {
      'canonId': 'Claude Fable 5',
      'name': 'Fable 5 (with fallback)',
      'vendor': 'Anthropic',
      'sources': [
        'aa_official',
        'deepswe_v11',
        'vibecode'
      ],
      'scores': {
        'aa_official': 65.8,
        'deepswe_v11': 70,
        'vibecode': 90.35
      },
      'mean': 75.4,
      'stddev': 10.72,
      'flag': 'alert'
    },
    {
      'canonId': 'Gemini 3.1 Pro',
      'name': 'Gemini 3.1 Pro',
      'vendor': 'Google',
      'sources': [
        'aa_official',
        'deepswe_v11',
        'deepswe_v10',
        'vibecode'
      ],
      'scores': {
        'aa_official': 30.3,
        'deepswe_v11': 12,
        'deepswe_v10': 10,
        'vibecode': 32.03
      },
      'mean': 21.1,
      'stddev': 10.13,
      'flag': 'alert'
    },
    {
      'canonId': 'Kimi K3',
      'name': 'Kimi K3',
      'vendor': 'Moonshot',
      'sources': [
        'aa_official',
        'deepswe_v11',
        'vibecode'
      ],
      'scores': {
        'aa_official': 61.3,
        'deepswe_v11': 69,
        'vibecode': 84.96
      },
      'mean': 71.8,
      'stddev': 9.85,
      'flag': 'warn'
    },
    {
      'canonId': 'GLM-5.2',
      'name': 'GLM-5.2',
      'vendor': 'zAI',
      'sources': [
        'aa_official',
        'deepswe_v11',
        'deepswe_v10',
        'vibecode'
      ],
      'scores': {
        'aa_official': 43.2,
        'deepswe_v11': 44,
        'deepswe_v10': 42,
        'vibecode': 63.96
      },
      'mean': 48.3,
      'stddev': 9.08,
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
      'canonId': 'Gemini 3.5 Flash',
      'name': 'gemini-3-5-flash',
      'vendor': 'Google',
      'sources': [
        'deepswe_v11',
        'deepswe_v10',
        'vibecode'
      ],
      'scores': {
        'deepswe_v11': 37,
        'deepswe_v10': 28,
        'vibecode': 48.68
      },
      'mean': 37.9,
      'stddev': 8.47,
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
      'canonId': 'Gemini 3 Flash',
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
      'canonId': 'Claude opus 5 [新]',
      'name': 'claude-opus-5',
      'vendor': '其他',
      'sources': [
        'deepswe_v11',
        'vibecode'
      ],
      'scores': {
        'deepswe_v11': 74,
        'vibecode': 88.4
      },
      'mean': 81.2,
      'stddev': 7.2,
      'flag': 'warn'
    },
    {
      'canonId': 'GPT-5.4',
      'name': 'gpt-5-4',
      'vendor': 'OpenAI',
      'sources': [
        'deepswe_v11',
        'deepswe_v10',
        'vibecode',
        'vibecode'
      ],
      'scores': {
        'deepswe_v11': 52,
        'deepswe_v10': 56,
        'vibecode': 48.47
      },
      'mean': 56,
      'stddev': 7.13,
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
      'canonId': 'Grok 4.5',
      'name': 'Grok 4.5',
      'vendor': 'xAI',
      'sources': [
        'aa_official',
        'deepswe_v11',
        'vibecode'
      ],
      'scores': {
        'aa_official': 64.4,
        'deepswe_v11': 54,
        'vibecode': 69
      },
      'mean': 62.5,
      'stddev': 6.27,
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
      'name': 'GPT-5.6 Sol',
      'vendor': 'OpenAI',
      'sources': [
        'aa_official',
        'deepswe_v11',
        'vibecode'
      ],
      'scores': {
        'aa_official': 66.6,
        'deepswe_v11': 73,
        'vibecode': 80.5
      },
      'mean': 73.4,
      'stddev': 5.68,
      'flag': 'warn'
    },
    {
      'canonId': 'GPT-5.6 Luna',
      'name': 'gpt-5-6-luna',
      'vendor': 'OpenAI',
      'sources': [
        'deepswe_v11',
        'vibecode'
      ],
      'scores': {
        'deepswe_v11': 67,
        'vibecode': 77.06
      },
      'mean': 72,
      'stddev': 5.03,
      'flag': 'warn'
    },
    {
      'canonId': 'GPT 5.1 Codex',
      'name': 'GPT 5.1 Codex',
      'vendor': '其他',
      'sources': [
        'vibecode',
        'vibecode'
      ],
      'scores': {
        'vibecode': 13.12
      },
      'mean': 17.6,
      'stddev': 4.53,
      'flag': 'ok'
    },
    {
      'canonId': 'Gemini 3.6 flash [新]',
      'name': 'gemini-3-6-flash',
      'vendor': '其他',
      'sources': [
        'deepswe_v11',
        'vibecode'
      ],
      'scores': {
        'deepswe_v11': 49,
        'vibecode': 57.32
      },
      'mean': 53.2,
      'stddev': 4.16,
      'flag': 'ok'
    },
    {
      'canonId': 'GPT-5.5',
      'name': 'gpt-5-5',
      'vendor': 'OpenAI',
      'sources': [
        'deepswe_v11',
        'deepswe_v10',
        'vibecode',
        'vibecode'
      ],
      'scores': {
        'deepswe_v11': 67,
        'deepswe_v10': 70,
        'vibecode': 67.39
      },
      'mean': 68.6,
      'stddev': 1.37,
      'flag': 'ok'
    },
    {
      'canonId': 'GPT-5.6 Terra',
      'name': 'gpt-5-6-terra',
      'vendor': 'OpenAI',
      'sources': [
        'deepswe_v11',
        'vibecode'
      ],
      'scores': {
        'deepswe_v11': 70,
        'vibecode': 67.84
      },
      'mean': 68.9,
      'stddev': 1.08,
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
    'aa_official': {
      'rate': 1,
      'total': 10,
      'complete': 10,
      'modelCount': 10,
      'missingFields': {},
      'flag': 'ok'
    },
    'deepswe_v11': {
      'rate': 1,
      'total': 18,
      'complete': 18,
      'modelCount': 18,
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
      'total': 61,
      'complete': 0,
      'modelCount': 61,
      'missingFields': {
        'score': 61
      },
      'flag': 'warn'
    },
    'vibecode': {
      'rate': 1,
      'total': 73,
      'complete': 73,
      'modelCount': 73,
      'missingFields': {},
      'flag': 'ok'
    }
  },
  'timeliness': {
    'aa_official': {
      'updated': '2026-08-02',
      'ageDays': 0,
      'flag': 'ok'
    },
    'aaci': {
      'updated': '2026-07-11',
      'ageDays': 22,
      'flag': 'alert'
    },
    'datalearner': {
      'updated': '2026-08-01',
      'ageDays': 1,
      'flag': 'ok'
    },
    'deepswe_v11': {
      'updated': '2026-08-02',
      'ageDays': 0,
      'flag': 'ok'
    },
    'deepswe_v10': {
      'updated': '2026-08-02',
      'ageDays': 0,
      'flag': 'ok'
    },
    'llm2014': {
      'updated': '2026-08-02',
      'ageDays': 0,
      'flag': 'ok'
    },
    'vibecode': {
      'updated': '2026-08-02',
      'ageDays': 0,
      'flag': 'ok'
    }
  },
  'alerts': [
    {
      'level': 'error',
      'dimension': 'timeliness',
      'sourceId': 'aaci',
      'message': '数据已 22 天未更新(>7 天)'
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
      'sourceId': 'aa_official,deepswe_v11,vibecode,vibecode',
      'message': 'Muse Spark 1.1 跨源分数标准差 18.92(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'aa_official,deepswe_v10,vibecode',
      'message': 'DeepSeek V4 Pro 跨源分数标准差 17.16(>10)'
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
      'sourceId': 'deepswe_v11,vibecode',
      'message': 'claude-sonnet-5 跨源分数标准差 13.67(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'deepswe_v10,vibecode,vibecode',
      'message': 'claude-opus-4-6 跨源分数标准差 13.09(>10)'
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
      'sourceId': 'deepswe_v11,deepswe_v10,vibecode,vibecode',
      'message': 'claude-sonnet-4-6 跨源分数标准差 11.44(>10)'
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
      'sourceId': 'deepswe_v11,deepswe_v10,vibecode,vibecode',
      'message': 'claude-opus-4-8 跨源分数标准差 10.97(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'aa_official,deepswe_v11,vibecode',
      'message': 'Fable 5 (with fallback) 跨源分数标准差 10.72(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'aa_official,deepswe_v11,deepswe_v10,vibecode',
      'message': 'Gemini 3.1 Pro 跨源分数标准差 10.13(>10)'
    }
  ]
};
