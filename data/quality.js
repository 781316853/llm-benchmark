// 数据质量报告(由 scripts/lib/quality-report.js 生成)
// 三维交叉验证:一致性(跨源分数标准差)/ 完整性(必填字段齐全率)/ 时效性(数据新鲜度)
// generatedAt=2026-08-24;overallScore 为各源完整性均权(0-1)
// 注:前端暂不展示,仅供抓取端记录与 CI 日志溯源。
window.QUALITY = {
  'generatedAt': '2026-08-24',
  'overallScore': 0.8,
  'sources': [
    {
      'id': 'arena_webdev',
      'name': 'Code Arena WebDev (LMArena)',
      'status': 'ok',
      'modelCount': 118,
      'updated': '2026-08-24',
      'ageDays': 0,
      'completeness': 1,
      'fetchAttempts': 1,
      'errors': []
    },
    {
      'id': 'datalearner',
      'name': 'datalearner DeepSWE 榜',
      'status': 'error',
      'modelCount': 27,
      'updated': '2026-08-23',
      'ageDays': 1,
      'completeness': null,
      'fetchAttempts': 1,
      'errors': [
        'datalearner 未解析到任何模型'
      ]
    },
    {
      'id': 'deepswe_v11',
      'name': 'DeepSWE v1.1',
      'status': 'ok',
      'modelCount': 25,
      'updated': '2026-08-24',
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
      'updated': '2026-08-24',
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
      'updated': '2026-08-24',
      'ageDays': 0,
      'completeness': 0,
      'fetchAttempts': 1,
      'errors': []
    },
    {
      'id': 'vibecode',
      'name': 'Vibe Code',
      'status': 'ok',
      'modelCount': 83,
      'updated': '2026-08-24',
      'ageDays': 0,
      'completeness': 1,
      'fetchAttempts': 1,
      'errors': []
    }
  ],
  'consistency': [
    {
      'canonId': 'Claude Opus 5',
      'name': 'claude-opus-5-max',
      'vendor': 'Anthropic',
      'sources': [
        'arena_webdev',
        'arena_webdev',
        'deepswe_v11',
        'vibecode'
      ],
      'scores': {
        'arena_webdev': 1663,
        'deepswe_v11': 74,
        'vibecode': 88.4
      },
      'mean': 879.1,
      'stddev': 797.98,
      'flag': 'alert'
    },
    {
      'canonId': 'Qwen3.8-27B',
      'name': 'qwen3.8-27b',
      'vendor': 'Alibaba',
      'sources': [
        'arena_webdev',
        'vibecode'
      ],
      'scores': {
        'arena_webdev': 1595,
        'vibecode': 64.85
      },
      'mean': 829.9,
      'stddev': 765.08,
      'flag': 'alert'
    },
    {
      'canonId': 'GLM-5.3',
      'name': 'glm-5.3-max',
      'vendor': 'zAI',
      'sources': [
        'arena_webdev',
        'deepswe_v11'
      ],
      'scores': {
        'arena_webdev': 1599,
        'deepswe_v11': 69
      },
      'mean': 834,
      'stddev': 765,
      'flag': 'alert'
    },
    {
      'canonId': 'Qwen3.8-Max',
      'name': 'qwen3.8-max',
      'vendor': 'Alibaba',
      'sources': [
        'arena_webdev',
        'deepswe_v11',
        'vibecode'
      ],
      'scores': {
        'arena_webdev': 1669,
        'deepswe_v11': 57,
        'vibecode': 64.7
      },
      'mean': 596.9,
      'stddev': 758.1,
      'flag': 'alert'
    },
    {
      'canonId': 'Kimi K3',
      'name': 'kimi-k3-max',
      'vendor': 'Moonshot',
      'sources': [
        'arena_webdev',
        'deepswe_v11',
        'vibecode'
      ],
      'scores': {
        'arena_webdev': 1674,
        'deepswe_v11': 69,
        'vibecode': 84.96
      },
      'mean': 609.3,
      'stddev': 752.87,
      'flag': 'alert'
    },
    {
      'canonId': 'Claude Opus 4.7',
      'name': 'claude-opus-4-7',
      'vendor': 'Anthropic',
      'sources': [
        'arena_webdev',
        'arena_webdev',
        'deepswe_v10',
        'vibecode'
      ],
      'scores': {
        'arena_webdev': 1557,
        'deepswe_v10': 54,
        'vibecode': 71
      },
      'mean': 810,
      'stddev': 747.52,
      'flag': 'alert'
    },
    {
      'canonId': 'DeepSeek V4 Pro',
      'name': 'deepseek-v4-pro-high-20260813',
      'vendor': 'DeepSeek',
      'sources': [
        'arena_webdev',
        'arena_webdev',
        'deepswe_v10',
        'vibecode'
      ],
      'scores': {
        'arena_webdev': 1445,
        'deepswe_v10': 8,
        'vibecode': 49.93
      },
      'mean': 771.2,
      'stddev': 743.99,
      'flag': 'alert'
    },
    {
      'canonId': 'Grok 4.6',
      'name': 'grok-4.6-high',
      'vendor': 'xAI',
      'sources': [
        'arena_webdev',
        'deepswe_v11',
        'vibecode'
      ],
      'scores': {
        'arena_webdev': 1629,
        'deepswe_v11': 67,
        'vibecode': 76.24
      },
      'mean': 590.7,
      'stddev': 734.17,
      'flag': 'alert'
    },
    {
      'canonId': 'MiniMax-M3',
      'name': 'minimax-m3',
      'vendor': 'MiniMax',
      'sources': [
        'arena_webdev',
        'deepswe_v10'
      ],
      'scores': {
        'arena_webdev': 1488,
        'deepswe_v10': 20
      },
      'mean': 754,
      'stddev': 734,
      'flag': 'alert'
    },
    {
      'canonId': 'Claude Opus 4.6',
      'name': 'claude-opus-4-6-high',
      'vendor': 'Anthropic',
      'sources': [
        'arena_webdev',
        'arena_webdev',
        'deepswe_v10',
        'vibecode',
        'vibecode'
      ],
      'scores': {
        'arena_webdev': 1536,
        'deepswe_v10': 28,
        'vibecode': 53.5
      },
      'mean': 644.2,
      'stddev': 732.3,
      'flag': 'alert'
    },
    {
      'canonId': 'Claude Fable 5',
      'name': 'claude-fable-5',
      'vendor': 'Anthropic',
      'sources': [
        'arena_webdev',
        'deepswe_v11',
        'vibecode'
      ],
      'scores': {
        'arena_webdev': 1626,
        'deepswe_v11': 70,
        'vibecode': 90.35
      },
      'mean': 595.4,
      'stddev': 728.76,
      'flag': 'alert'
    },
    {
      'canonId': 'GPT-5.6 Sol',
      'name': 'gpt-5.6-sol-xhigh (codex-harness)',
      'vendor': 'OpenAI',
      'sources': [
        'arena_webdev',
        'deepswe_v11',
        'vibecode'
      ],
      'scores': {
        'arena_webdev': 1619,
        'deepswe_v11': 73,
        'vibecode': 80.5
      },
      'mean': 590.8,
      'stddev': 727.03,
      'flag': 'alert'
    },
    {
      'canonId': 'Claude Opus 4.5',
      'name': 'claude-opus-4-5-20251101',
      'vendor': 'Anthropic',
      'sources': [
        'arena_webdev',
        'vibecode'
      ],
      'scores': {
        'arena_webdev': 1468,
        'vibecode': 20.63
      },
      'mean': 744.3,
      'stddev': 723.69,
      'flag': 'alert'
    },
    {
      'canonId': 'Gemini 3.7 Flash',
      'name': 'gemini-3.7-flash-high',
      'vendor': 'Google',
      'sources': [
        'arena_webdev',
        'deepswe_v11',
        'vibecode'
      ],
      'scores': {
        'arena_webdev': 1587,
        'deepswe_v11': 65,
        'vibecode': 70.4
      },
      'mean': 574.1,
      'stddev': 716.21,
      'flag': 'alert'
    },
    {
      'canonId': 'DeepSeek V4 Flash',
      'name': 'deepseek-v4-flash-high',
      'vendor': 'DeepSeek',
      'sources': [
        'arena_webdev',
        'deepswe_v11',
        'vibecode'
      ],
      'scores': {
        'arena_webdev': 1579,
        'deepswe_v11': 53,
        'vibecode': 74.74
      },
      'mean': 568.9,
      'stddev': 714.29,
      'flag': 'alert'
    },
    {
      'canonId': 'Gemini 3.5 Flash',
      'name': 'gemini-3.5-flash-high',
      'vendor': 'Google',
      'sources': [
        'arena_webdev',
        'arena_webdev',
        'deepswe_v11',
        'deepswe_v10',
        'vibecode'
      ],
      'scores': {
        'arena_webdev': 1490,
        'deepswe_v11': 36,
        'deepswe_v10': 28,
        'vibecode': 48.68
      },
      'mean': 620.3,
      'stddev': 713.79,
      'flag': 'alert'
    },
    {
      'canonId': 'Gemini 3.5 flash lite',
      'name': 'gemini-3.5-flash-lite',
      'vendor': '其他',
      'sources': [
        'arena_webdev',
        'vibecode'
      ],
      'scores': {
        'arena_webdev': 1449,
        'vibecode': 37.16
      },
      'mean': 743.1,
      'stddev': 705.92,
      'flag': 'alert'
    },
    {
      'canonId': 'GLM 5',
      'name': 'glm-5',
      'vendor': '其他',
      'sources': [
        'arena_webdev',
        'vibecode'
      ],
      'scores': {
        'arena_webdev': 1435,
        'vibecode': 23.36
      },
      'mean': 729.2,
      'stddev': 705.82,
      'flag': 'alert'
    },
    {
      'canonId': 'Grok 4.5',
      'name': 'grok-4.5',
      'vendor': 'xAI',
      'sources': [
        'arena_webdev',
        'deepswe_v11',
        'vibecode'
      ],
      'scores': {
        'arena_webdev': 1556,
        'deepswe_v11': 54,
        'vibecode': 69
      },
      'mean': 559.7,
      'stddev': 704.54,
      'flag': 'alert'
    },
    {
      'canonId': 'GPT-5.5',
      'name': 'gpt-5.5-xhigh (codex-harness)',
      'vendor': 'OpenAI',
      'sources': [
        'arena_webdev',
        'arena_webdev',
        'arena_webdev',
        'deepswe_v11',
        'deepswe_v10',
        'vibecode',
        'vibecode'
      ],
      'scores': {
        'arena_webdev': 1458,
        'deepswe_v11': 67,
        'deepswe_v10': 70,
        'vibecode': 67.39
      },
      'mean': 675.2,
      'stddev': 700.59,
      'flag': 'alert'
    },
    {
      'canonId': 'Qwen3.7-Max',
      'name': 'qwen3.7-max-20260517',
      'vendor': 'Alibaba',
      'sources': [
        'arena_webdev',
        'deepswe_v10',
        'vibecode'
      ],
      'scores': {
        'arena_webdev': 1517,
        'deepswe_v10': 18,
        'vibecode': 47.67
      },
      'mean': 527.6,
      'stddev': 699.75,
      'flag': 'alert'
    },
    {
      'canonId': 'GLM-5.1',
      'name': 'glm-5.1',
      'vendor': 'zAI',
      'sources': [
        'arena_webdev',
        'deepswe_v10',
        'vibecode'
      ],
      'scores': {
        'arena_webdev': 1509,
        'deepswe_v10': 18,
        'vibecode': 31.46
      },
      'mean': 519.5,
      'stddev': 699.71,
      'flag': 'alert'
    },
    {
      'canonId': 'GPT-5',
      'name': 'gpt-5-medium',
      'vendor': 'OpenAI',
      'sources': [
        'arena_webdev',
        'vibecode'
      ],
      'scores': {
        'arena_webdev': 1419,
        'vibecode': 20.09
      },
      'mean': 719.5,
      'stddev': 699.46,
      'flag': 'alert'
    },
    {
      'canonId': 'Gemini 3.6 Flash',
      'name': 'gemini-3.6-flash-high',
      'vendor': 'Google',
      'sources': [
        'arena_webdev',
        'deepswe_v11',
        'vibecode'
      ],
      'scores': {
        'arena_webdev': 1539,
        'deepswe_v11': 47,
        'vibecode': 64.01
      },
      'mean': 550,
      'stddev': 699.36,
      'flag': 'alert'
    },
    {
      'canonId': 'MiniMax-M2.7',
      'name': 'minimax-m2.7',
      'vendor': 'MiniMax',
      'sources': [
        'arena_webdev',
        'deepswe_v10'
      ],
      'scores': {
        'arena_webdev': 1398,
        'deepswe_v10': 0
      },
      'mean': 699,
      'stddev': 699,
      'flag': 'alert'
    },
    {
      'canonId': 'Claude Opus 4.8',
      'name': 'claude-opus-4-8-high',
      'vendor': 'Anthropic',
      'sources': [
        'arena_webdev',
        'arena_webdev',
        'deepswe_v11',
        'deepswe_v10',
        'vibecode',
        'vibecode'
      ],
      'scores': {
        'arena_webdev': 1539,
        'deepswe_v11': 59,
        'deepswe_v10': 58,
        'vibecode': 77.49
      },
      'mean': 563.2,
      'stddev': 698.57,
      'flag': 'alert'
    },
    {
      'canonId': 'MiMo-V2.5',
      'name': 'mimo-v2.5',
      'vendor': 'Xiaomi',
      'sources': [
        'arena_webdev',
        'vibecode'
      ],
      'scores': {
        'arena_webdev': 1438,
        'vibecode': 42.17
      },
      'mean': 740.1,
      'stddev': 697.92,
      'flag': 'alert'
    },
    {
      'canonId': 'Kimi-K2.6',
      'name': 'kimi-k2.6',
      'vendor': 'Moonshot',
      'sources': [
        'arena_webdev',
        'deepswe_v10',
        'vibecode'
      ],
      'scores': {
        'arena_webdev': 1509,
        'deepswe_v10': 24,
        'vibecode': 37.89
      },
      'mean': 523.6,
      'stddev': 696.78,
      'flag': 'alert'
    },
    {
      'canonId': 'Inkling',
      'name': 'inkling',
      'vendor': '其他',
      'sources': [
        'arena_webdev',
        'vibecode'
      ],
      'scores': {
        'arena_webdev': 1408,
        'vibecode': 19.21
      },
      'mean': 713.6,
      'stddev': 694.4,
      'flag': 'alert'
    },
    {
      'canonId': 'Claude Sonnet 5',
      'name': 'claude-sonnet-5-high',
      'vendor': 'Anthropic',
      'sources': [
        'arena_webdev',
        'deepswe_v11',
        'vibecode'
      ],
      'scores': {
        'arena_webdev': 1539,
        'deepswe_v11': 54,
        'vibecode': 81.33
      },
      'mean': 558.1,
      'stddev': 693.68,
      'flag': 'alert'
    },
    {
      'canonId': 'Meta Muse Spark 1.2',
      'name': 'muse-spark-1.2 (xhigh)',
      'vendor': 'Meta',
      'sources': [
        'arena_webdev',
        'deepswe_v11',
        'vibecode'
      ],
      'scores': {
        'arena_webdev': 1534,
        'deepswe_v11': 55,
        'vibecode': 79.1
      },
      'mean': 556,
      'stddev': 691.6,
      'flag': 'alert'
    },
    {
      'canonId': 'Inkling small',
      'name': 'inkling small',
      'vendor': '其他',
      'sources': [
        'arena_webdev',
        'vibecode'
      ],
      'scores': {
        'arena_webdev': 1402,
        'vibecode': 19.05
      },
      'mean': 710.5,
      'stddev': 691.48,
      'flag': 'alert'
    },
    {
      'canonId': 'MiMo-V2.5-Pro',
      'name': 'mimo-v2.5-pro',
      'vendor': 'Xiaomi',
      'sources': [
        'arena_webdev',
        'deepswe_v10',
        'vibecode'
      ],
      'scores': {
        'arena_webdev': 1476,
        'deepswe_v10': 19,
        'vibecode': 34.11
      },
      'mean': 509.7,
      'stddev': 683.3,
      'flag': 'alert'
    },
    {
      'canonId': 'GPT-5.6 Terra',
      'name': 'gpt-5.6-terra-xhigh (codex-harness)',
      'vendor': 'OpenAI',
      'sources': [
        'arena_webdev',
        'deepswe_v11',
        'vibecode'
      ],
      'scores': {
        'arena_webdev': 1520,
        'deepswe_v11': 70,
        'vibecode': 74.59
      },
      'mean': 554.9,
      'stddev': 682.46,
      'flag': 'alert'
    },
    {
      'canonId': 'GPT-5.2',
      'name': 'gpt-5.2',
      'vendor': 'OpenAI',
      'sources': [
        'arena_webdev',
        'vibecode'
      ],
      'scores': {
        'arena_webdev': 1418,
        'vibecode': 53.5
      },
      'mean': 735.8,
      'stddev': 682.25,
      'flag': 'alert'
    },
    {
      'canonId': 'GPT-5.6 Luna',
      'name': 'gpt-5.6-luna-xhigh (codex-harness)',
      'vendor': 'OpenAI',
      'sources': [
        'arena_webdev',
        'deepswe_v11',
        'vibecode'
      ],
      'scores': {
        'arena_webdev': 1518,
        'deepswe_v11': 67,
        'vibecode': 77.06
      },
      'mean': 554,
      'stddev': 681.65,
      'flag': 'alert'
    },
    {
      'canonId': 'Qwen3.6-Plus',
      'name': 'qwen3.6-plus',
      'vendor': 'Alibaba',
      'sources': [
        'arena_webdev',
        'deepswe_v10',
        'vibecode'
      ],
      'scores': {
        'arena_webdev': 1460,
        'deepswe_v10': 3,
        'vibecode': 25.57
      },
      'mean': 496.2,
      'stddev': 681.58,
      'flag': 'alert'
    },
    {
      'canonId': 'GPT-5.4',
      'name': 'gpt-5.4-high (codex-harness)',
      'vendor': 'OpenAI',
      'sources': [
        'arena_webdev',
        'arena_webdev',
        'arena_webdev',
        'deepswe_v11',
        'deepswe_v10',
        'vibecode',
        'vibecode'
      ],
      'scores': {
        'arena_webdev': 1391,
        'deepswe_v11': 52,
        'deepswe_v10': 56,
        'vibecode': 48.47
      },
      'mean': 645.7,
      'stddev': 681.27,
      'flag': 'alert'
    },
    {
      'canonId': 'Kimi-K2.7-Code',
      'name': 'kimi-k2.7-code',
      'vendor': 'Moonshot',
      'sources': [
        'arena_webdev',
        'deepswe_v11',
        'vibecode'
      ],
      'scores': {
        'arena_webdev': 1473,
        'deepswe_v11': 31,
        'vibecode': 47.21
      },
      'mean': 517.1,
      'stddev': 675.98,
      'flag': 'alert'
    },
    {
      'canonId': 'Grok 4.3',
      'name': 'grok-4.3',
      'vendor': 'xAI',
      'sources': [
        'arena_webdev',
        'vibecode'
      ],
      'scores': {
        'arena_webdev': 1357,
        'vibecode': 19.4
      },
      'mean': 688.2,
      'stddev': 668.8,
      'flag': 'alert'
    },
    {
      'canonId': 'GLM 4.6',
      'name': 'glm-4.6',
      'vendor': 'zAI',
      'sources': [
        'arena_webdev',
        'vibecode'
      ],
      'scores': {
        'arena_webdev': 1340,
        'vibecode': 3.09
      },
      'mean': 671.5,
      'stddev': 668.46,
      'flag': 'alert'
    },
    {
      'canonId': 'Laguna M.1',
      'name': 'laguna-m.1',
      'vendor': '其他',
      'sources': [
        'arena_webdev',
        'vibecode'
      ],
      'scores': {
        'arena_webdev': 1347,
        'vibecode': 11.04
      },
      'mean': 679,
      'stddev': 667.98,
      'flag': 'alert'
    },
    {
      'canonId': 'GLM-5.2',
      'name': 'glm-5.2-max',
      'vendor': 'zAI',
      'sources': [
        'arena_webdev',
        'deepswe_v11',
        'deepswe_v10',
        'vibecode'
      ],
      'scores': {
        'arena_webdev': 1582,
        'deepswe_v11': 44,
        'deepswe_v10': 42,
        'vibecode': 63.96
      },
      'mean': 433,
      'stddev': 663.44,
      'flag': 'alert'
    },
    {
      'canonId': 'DeepSeek V3.2',
      'name': 'deepseek-v3.2',
      'vendor': 'DeepSeek',
      'sources': [
        'arena_webdev',
        'vibecode'
      ],
      'scores': {
        'arena_webdev': 1325,
        'vibecode': 5.11
      },
      'mean': 665.1,
      'stddev': 659.95,
      'flag': 'alert'
    },
    {
      'canonId': 'GPT-5.2 Codex',
      'name': 'gpt-5.2-codex',
      'vendor': 'OpenAI',
      'sources': [
        'arena_webdev',
        'vibecode'
      ],
      'scores': {
        'arena_webdev': 1338,
        'vibecode': 37.91
      },
      'mean': 688,
      'stddev': 650.05,
      'flag': 'alert'
    },
    {
      'canonId': 'Laguna XS.2',
      'name': 'laguna-xs.2',
      'vendor': '其他',
      'sources': [
        'arena_webdev',
        'vibecode'
      ],
      'scores': {
        'arena_webdev': 1302,
        'vibecode': 5.21
      },
      'mean': 653.6,
      'stddev': 648.4,
      'flag': 'alert'
    },
    {
      'canonId': 'Meta Muse Spark 1.1',
      'name': 'muse-spark-1.1',
      'vendor': 'Meta',
      'sources': [
        'arena_webdev',
        'deepswe_v11',
        'vibecode',
        'vibecode'
      ],
      'scores': {
        'arena_webdev': 1539,
        'deepswe_v11': 53,
        'vibecode': 19.67
      },
      'mean': 421,
      'stddev': 645.78,
      'flag': 'alert'
    },
    {
      'canonId': 'GPT-5.4 Mini',
      'name': 'gpt-5.4-mini-high',
      'vendor': 'OpenAI',
      'sources': [
        'arena_webdev',
        'deepswe_v10',
        'vibecode'
      ],
      'scores': {
        'arena_webdev': 1397,
        'deepswe_v10': 24,
        'vibecode': 47.97
      },
      'mean': 489.7,
      'stddev': 641.66,
      'flag': 'alert'
    },
    {
      'canonId': 'GPT 5.1',
      'name': 'gpt-5.1-medium',
      'vendor': '其他',
      'sources': [
        'arena_webdev',
        'arena_webdev',
        'vibecode'
      ],
      'scores': {
        'arena_webdev': 1341,
        'vibecode': 24.61
      },
      'mean': 918.9,
      'stddev': 632.67,
      'flag': 'alert'
    },
    {
      'canonId': 'Mistral Medium 3.5',
      'name': 'mistral-medium-3.5',
      'vendor': '其他',
      'sources': [
        'arena_webdev',
        'vibecode'
      ],
      'scores': {
        'arena_webdev': 1265,
        'vibecode': 2.89
      },
      'mean': 633.9,
      'stddev': 631.06,
      'flag': 'alert'
    },
    {
      'canonId': 'GPT-5.3 Codex',
      'name': 'gpt-5.3-codex (codex-harness)',
      'vendor': 'OpenAI',
      'sources': [
        'arena_webdev',
        'arena_webdev',
        'vibecode'
      ],
      'scores': {
        'arena_webdev': 1369,
        'vibecode': 61.77
      },
      'mean': 946.3,
      'stddev': 625.63,
      'flag': 'alert'
    },
    {
      'canonId': 'GPT 5.1 Codex',
      'name': 'gpt-5.1-codex',
      'vendor': '其他',
      'sources': [
        'arena_webdev',
        'vibecode',
        'vibecode'
      ],
      'scores': {
        'arena_webdev': 1336,
        'vibecode': 13.12
      },
      'mean': 457.1,
      'stddev': 621.49,
      'flag': 'alert'
    },
    {
      'canonId': 'Gemini 3.1 Pro Preview',
      'name': 'gemini-3.1-pro-preview',
      'vendor': 'Google',
      'sources': [
        'arena_webdev',
        'deepswe_v11',
        'deepswe_v10',
        'vibecode'
      ],
      'scores': {
        'arena_webdev': 1446,
        'deepswe_v11': 12,
        'deepswe_v10': 10,
        'vibecode': 32.03
      },
      'mean': 375,
      'stddev': 618.4,
      'flag': 'alert'
    },
    {
      'canonId': 'Gemini 2.5 Pro',
      'name': 'gemini-2.5-pro',
      'vendor': '其他',
      'sources': [
        'arena_webdev',
        'vibecode'
      ],
      'scores': {
        'arena_webdev': 1226,
        'vibecode': 0.4
      },
      'mean': 613.2,
      'stddev': 612.8,
      'flag': 'alert'
    },
    {
      'canonId': 'Claude Sonnet 4.6',
      'name': 'claude-sonnet-4-6',
      'vendor': 'Anthropic',
      'sources': [
        'arena_webdev',
        'deepswe_v11',
        'deepswe_v10',
        'vibecode',
        'vibecode'
      ],
      'scores': {
        'arena_webdev': 1522,
        'deepswe_v11': 30,
        'deepswe_v10': 32,
        'vibecode': 51.48
      },
      'mean': 338.3,
      'stddev': 591.96,
      'flag': 'alert'
    },
    {
      'canonId': 'Gemini 3 Flash',
      'name': 'gemini-3-flash',
      'vendor': 'Google',
      'sources': [
        'arena_webdev',
        'arena_webdev'
      ],
      'scores': {
        'arena_webdev': 1383
      },
      'mean': 1410.5,
      'stddev': 27.5,
      'flag': 'alert'
    },
    {
      'canonId': 'mimo-v2-flash',
      'name': 'mimo-v2-flash (non-thinking)',
      'vendor': '其他',
      'sources': [
        'arena_webdev',
        'arena_webdev'
      ],
      'scores': {
        'arena_webdev': 1292
      },
      'mean': 1311,
      'stddev': 19,
      'flag': 'alert'
    },
    {
      'canonId': 'DeepSeek V4 Pro 0813',
      'name': 'DeepSeek V4 Pro 0813',
      'vendor': 'DeepSeek',
      'sources': [
        'deepswe_v11',
        'vibecode'
      ],
      'scores': {
        'deepswe_v11': 63,
        'vibecode': 82.3
      },
      'mean': 72.7,
      'stddev': 9.65,
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
    'arena_webdev': {
      'rate': 1,
      'total': 118,
      'complete': 118,
      'modelCount': 118,
      'missingFields': {},
      'flag': 'ok'
    },
    'deepswe_v11': {
      'rate': 1,
      'total': 25,
      'complete': 25,
      'modelCount': 25,
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
      'total': 83,
      'complete': 83,
      'modelCount': 83,
      'missingFields': {},
      'flag': 'ok'
    }
  },
  'timeliness': {
    'arena_webdev': {
      'updated': '2026-08-24',
      'ageDays': 0,
      'flag': 'ok'
    },
    'datalearner': {
      'updated': '2026-08-23',
      'ageDays': 1,
      'flag': 'ok'
    },
    'deepswe_v11': {
      'updated': '2026-08-24',
      'ageDays': 0,
      'flag': 'ok'
    },
    'deepswe_v10': {
      'updated': '2026-08-24',
      'ageDays': 0,
      'flag': 'ok'
    },
    'llm2014': {
      'updated': '2026-08-24',
      'ageDays': 0,
      'flag': 'ok'
    },
    'vibecode': {
      'updated': '2026-08-24',
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
      'sourceId': 'arena_webdev,arena_webdev,deepswe_v11,vibecode',
      'message': 'claude-opus-5-max 跨源分数标准差 797.98(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'arena_webdev,vibecode',
      'message': 'qwen3.8-27b 跨源分数标准差 765.08(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'arena_webdev,deepswe_v11',
      'message': 'glm-5.3-max 跨源分数标准差 765(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'arena_webdev,deepswe_v11,vibecode',
      'message': 'qwen3.8-max 跨源分数标准差 758.1(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'arena_webdev,deepswe_v11,vibecode',
      'message': 'kimi-k3-max 跨源分数标准差 752.87(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'arena_webdev,arena_webdev,deepswe_v10,vibecode',
      'message': 'claude-opus-4-7 跨源分数标准差 747.52(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'arena_webdev,arena_webdev,deepswe_v10,vibecode',
      'message': 'deepseek-v4-pro-high-20260813 跨源分数标准差 743.99(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'arena_webdev,deepswe_v11,vibecode',
      'message': 'grok-4.6-high 跨源分数标准差 734.17(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'arena_webdev,deepswe_v10',
      'message': 'minimax-m3 跨源分数标准差 734(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'arena_webdev,arena_webdev,deepswe_v10,vibecode,vibecode',
      'message': 'claude-opus-4-6-high 跨源分数标准差 732.3(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'arena_webdev,deepswe_v11,vibecode',
      'message': 'claude-fable-5 跨源分数标准差 728.76(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'arena_webdev,deepswe_v11,vibecode',
      'message': 'gpt-5.6-sol-xhigh (codex-harness) 跨源分数标准差 727.03(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'arena_webdev,vibecode',
      'message': 'claude-opus-4-5-20251101 跨源分数标准差 723.69(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'arena_webdev,deepswe_v11,vibecode',
      'message': 'gemini-3.7-flash-high 跨源分数标准差 716.21(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'arena_webdev,deepswe_v11,vibecode',
      'message': 'deepseek-v4-flash-high 跨源分数标准差 714.29(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'arena_webdev,arena_webdev,deepswe_v11,deepswe_v10,vibecode',
      'message': 'gemini-3.5-flash-high 跨源分数标准差 713.79(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'arena_webdev,vibecode',
      'message': 'gemini-3.5-flash-lite 跨源分数标准差 705.92(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'arena_webdev,vibecode',
      'message': 'glm-5 跨源分数标准差 705.82(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'arena_webdev,deepswe_v11,vibecode',
      'message': 'grok-4.5 跨源分数标准差 704.54(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'arena_webdev,arena_webdev,arena_webdev,deepswe_v11,deepswe_v10,vibecode,vibecode',
      'message': 'gpt-5.5-xhigh (codex-harness) 跨源分数标准差 700.59(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'arena_webdev,deepswe_v10,vibecode',
      'message': 'qwen3.7-max-20260517 跨源分数标准差 699.75(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'arena_webdev,deepswe_v10,vibecode',
      'message': 'glm-5.1 跨源分数标准差 699.71(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'arena_webdev,vibecode',
      'message': 'gpt-5-medium 跨源分数标准差 699.46(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'arena_webdev,deepswe_v11,vibecode',
      'message': 'gemini-3.6-flash-high 跨源分数标准差 699.36(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'arena_webdev,deepswe_v10',
      'message': 'minimax-m2.7 跨源分数标准差 699(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'arena_webdev,arena_webdev,deepswe_v11,deepswe_v10,vibecode,vibecode',
      'message': 'claude-opus-4-8-high 跨源分数标准差 698.57(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'arena_webdev,vibecode',
      'message': 'mimo-v2.5 跨源分数标准差 697.92(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'arena_webdev,deepswe_v10,vibecode',
      'message': 'kimi-k2.6 跨源分数标准差 696.78(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'arena_webdev,vibecode',
      'message': 'inkling 跨源分数标准差 694.4(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'arena_webdev,deepswe_v11,vibecode',
      'message': 'claude-sonnet-5-high 跨源分数标准差 693.68(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'arena_webdev,deepswe_v11,vibecode',
      'message': 'muse-spark-1.2 (xhigh) 跨源分数标准差 691.6(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'arena_webdev,vibecode',
      'message': 'inkling small 跨源分数标准差 691.48(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'arena_webdev,deepswe_v10,vibecode',
      'message': 'mimo-v2.5-pro 跨源分数标准差 683.3(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'arena_webdev,deepswe_v11,vibecode',
      'message': 'gpt-5.6-terra-xhigh (codex-harness) 跨源分数标准差 682.46(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'arena_webdev,vibecode',
      'message': 'gpt-5.2 跨源分数标准差 682.25(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'arena_webdev,deepswe_v11,vibecode',
      'message': 'gpt-5.6-luna-xhigh (codex-harness) 跨源分数标准差 681.65(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'arena_webdev,deepswe_v10,vibecode',
      'message': 'qwen3.6-plus 跨源分数标准差 681.58(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'arena_webdev,arena_webdev,arena_webdev,deepswe_v11,deepswe_v10,vibecode,vibecode',
      'message': 'gpt-5.4-high (codex-harness) 跨源分数标准差 681.27(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'arena_webdev,deepswe_v11,vibecode',
      'message': 'kimi-k2.7-code 跨源分数标准差 675.98(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'arena_webdev,vibecode',
      'message': 'grok-4.3 跨源分数标准差 668.8(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'arena_webdev,vibecode',
      'message': 'glm-4.6 跨源分数标准差 668.46(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'arena_webdev,vibecode',
      'message': 'laguna-m.1 跨源分数标准差 667.98(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'arena_webdev,deepswe_v11,deepswe_v10,vibecode',
      'message': 'glm-5.2-max 跨源分数标准差 663.44(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'arena_webdev,vibecode',
      'message': 'deepseek-v3.2 跨源分数标准差 659.95(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'arena_webdev,vibecode',
      'message': 'gpt-5.2-codex 跨源分数标准差 650.05(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'arena_webdev,vibecode',
      'message': 'laguna-xs.2 跨源分数标准差 648.4(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'arena_webdev,deepswe_v11,vibecode,vibecode',
      'message': 'muse-spark-1.1 跨源分数标准差 645.78(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'arena_webdev,deepswe_v10,vibecode',
      'message': 'gpt-5.4-mini-high 跨源分数标准差 641.66(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'arena_webdev,arena_webdev,vibecode',
      'message': 'gpt-5.1-medium 跨源分数标准差 632.67(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'arena_webdev,vibecode',
      'message': 'mistral-medium-3.5 跨源分数标准差 631.06(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'arena_webdev,arena_webdev,vibecode',
      'message': 'gpt-5.3-codex (codex-harness) 跨源分数标准差 625.63(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'arena_webdev,vibecode,vibecode',
      'message': 'gpt-5.1-codex 跨源分数标准差 621.49(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'arena_webdev,deepswe_v11,deepswe_v10,vibecode',
      'message': 'gemini-3.1-pro-preview 跨源分数标准差 618.4(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'arena_webdev,vibecode',
      'message': 'gemini-2.5-pro 跨源分数标准差 612.8(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'arena_webdev,deepswe_v11,deepswe_v10,vibecode,vibecode',
      'message': 'claude-sonnet-4-6 跨源分数标准差 591.96(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'arena_webdev,arena_webdev',
      'message': 'gemini-3-flash 跨源分数标准差 27.5(>10)'
    },
    {
      'level': 'error',
      'dimension': 'consistency',
      'sourceId': 'arena_webdev,arena_webdev',
      'message': 'mimo-v2-flash (non-thinking) 跨源分数标准差 19(>10)'
    }
  ]
};
