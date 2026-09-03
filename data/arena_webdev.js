// 数据源:LMArena Code Arena | WebDev(前端 Web 开发权威竞技场,Elo 评分)
// 官方:https://arena.ai/leaderboard/code(有 Cloudflare 防护);主抓源为每日快照官方数据的权威镜像:
//     https://m.aitntnews.com/arena/code/ (更新于 2026-09-03)
// 字段说明:name=模型原始名;org=厂商;score=Elo 得分;ci=±95% 置信区间;votes=投票数(近似)
// 用途:总览页第 5 个基准,与 Vibe Code 同等地位参与综合分主基准组;前端按 canonical 取最高分归入。
window.ARENA_WEBDEV = {
  'source': 'Code Arena WebDev (LMArena)',
  'officialUrl': 'https://arena.ai/leaderboard/code',
  'url': 'https://m.aitntnews.com/arena/code/',
  'updated': '2026-09-03',
  'version': 'overall',
  'metric': 'Elo score',
  'desc': 'LMArena Code Arena 前端竞技场:社区匿名盲测投票,衡量模型生成可交互 Web 应用的能力,Elo 评分(0-2000 区间)。',
  'stats': {
    'models': 124
  },
  'models': [
    {
      'name': 'claude-fable-5.1-max',
      'org': 'Anthropic',
      'score': 1765,
      'ci': 23,
      'votes': 1100
    },
    {
      'name': 'qwen3.8-max-0902',
      'org': 'Alibaba',
      'score': 1688,
      'ci': 18,
      'votes': 1500
    },
    {
      'name': 'claude-opus-5-max',
      'org': 'Anthropic',
      'score': 1687,
      'ci': 8,
      'votes': 10600
    },
    {
      'name': 'kimi-k3-max',
      'org': 'Moonshot',
      'score': 1674,
      'ci': 11,
      'votes': 4500
    },
    {
      'name': 'qwen3.8-max',
      'org': 'Alibaba',
      'score': 1669,
      'ci': 12,
      'votes': 3200
    },
    {
      'name': 'claude-opus-5-high',
      'org': 'Anthropic',
      'score': 1661,
      'ci': 7,
      'votes': 10500
    },
    {
      'name': 'grok-4.6-high',
      'org': 'SpaceXAI',
      'score': 1629,
      'ci': 17,
      'votes': 1500
    },
    {
      'name': 'claude-fable-5',
      'org': 'Anthropic',
      'score': 1628,
      'ci': 8,
      'votes': 9200
    },
    {
      'name': 'hy4-preview',
      'org': 'Tencent',
      'score': 1626,
      'ci': 17,
      'votes': 1500
    },
    {
      'name': 'qwen3.8-flash-next',
      'org': 'Alibaba',
      'score': 1622,
      'ci': 15,
      'votes': 2000
    },
    {
      'name': 'gpt-5.6-sol-xhigh (codex-harness)',
      'org': 'OpenAI',
      'score': 1616,
      'ci': 7,
      'votes': 10800
    },
    {
      'name': 'glm-5.3-max',
      'org': 'Z.ai',
      'score': 1609,
      'ci': 13,
      'votes': 2700
    },
    {
      'name': 'glm-5.3-flash',
      'org': 'Z.ai',
      'score': 1604,
      'ci': 16,
      'votes': 1800
    },
    {
      'name': 'qwen3.8-27b',
      'org': 'Alibaba',
      'score': 1597,
      'ci': 11,
      'votes': 3300
    },
    {
      'name': 'gemini-3.7-flash-high',
      'org': 'Google',
      'score': 1587,
      'ci': 12,
      'votes': 3000
    },
    {
      'name': 'glm-5.2-max',
      'org': 'Z.ai',
      'score': 1585,
      'ci': 7,
      'votes': 9700
    },
    {
      'name': 'deepseek-v4-pro-high-20260813',
      'org': 'DeepSeek',
      'score': 1582,
      'ci': 11,
      'votes': 3400
    },
    {
      'name': 'deepseek-v4-flash-high',
      'org': 'DeepSeek',
      'score': 1581,
      'ci': 10,
      'votes': 4000
    },
    {
      'name': 'gemini-3.8-flash-high',
      'org': 'Google',
      'score': 1567,
      'ci': 12,
      'votes': 2700
    },
    {
      'name': 'claude-opus-4-8-high',
      'org': 'Anthropic',
      'score': 1563,
      'ci': 7,
      'votes': 12700
    },
    {
      'name': 'claude-opus-4-7',
      'org': 'Anthropic',
      'score': 1557,
      'ci': 6,
      'votes': 15500
    },
    {
      'name': 'claude-opus-4-7-high',
      'org': 'Anthropic',
      'score': 1557,
      'ci': 6,
      'votes': 16000
    },
    {
      'name': 'grok-4.5',
      'org': 'SpaceXAI',
      'score': 1556,
      'ci': 8,
      'votes': 7200
    },
    {
      'name': 'claude-opus-4-6-high',
      'org': 'Anthropic',
      'score': 1546,
      'ci': 6,
      'votes': 18000
    },
    {
      'name': 'muse-spark-1.1',
      'org': 'Meta',
      'score': 1540,
      'ci': 8,
      'votes': 7200
    },
    {
      'name': 'claude-opus-4-8',
      'org': 'Anthropic',
      'score': 1540,
      'ci': 7,
      'votes': 11600
    },
    {
      'name': 'gemini-3.6-flash-high',
      'org': 'Google',
      'score': 1538,
      'ci': 8,
      'votes': 7900
    },
    {
      'name': 'claude-sonnet-5-high',
      'org': 'Anthropic',
      'score': 1537,
      'ci': 8,
      'votes': 8200
    },
    {
      'name': 'claude-opus-4-6',
      'org': 'Anthropic',
      'score': 1536,
      'ci': 6,
      'votes': 19200
    },
    {
      'name': 'muse-spark-1.2 (xhigh)',
      'org': 'Meta',
      'score': 1534,
      'ci': 14,
      'votes': 2100
    },
    {
      'name': 'claude-sonnet-4-6',
      'org': 'Anthropic',
      'score': 1522,
      'ci': 5,
      'votes': 21300
    },
    {
      'name': 'seed-2.1-pro-preview',
      'org': 'Bytedance',
      'score': 1522,
      'ci': 8,
      'votes': 8500
    },
    {
      'name': 'gpt-5.6-luna-xhigh (codex-harness)',
      'org': 'OpenAI',
      'score': 1519,
      'ci': 8,
      'votes': 6700
    },
    {
      'name': 'gpt-5.6-terra-xhigh (codex-harness)',
      'org': 'OpenAI',
      'score': 1519,
      'ci': 8,
      'votes': 6700
    },
    {
      'name': 'qwen3.7-max-20260517',
      'org': 'Alibaba',
      'score': 1517,
      'ci': 8,
      'votes': 8400
    },
    {
      'name': 'hy3',
      'org': 'Tencent',
      'score': 1511,
      'ci': 11,
      'votes': 3100
    },
    {
      'name': 'gpt-5.5-xhigh (codex-harness)',
      'org': 'OpenAI',
      'score': 1509,
      'ci': 6,
      'votes': 14600
    },
    {
      'name': 'kimi-k2.6',
      'org': 'Moonshot',
      'score': 1509,
      'ci': 7,
      'votes': 9600
    },
    {
      'name': 'glm-5.1',
      'org': 'Z.ai',
      'score': 1508,
      'ci': 7,
      'votes': 10000
    },
    {
      'name': 'gemini-3.5-flash-high',
      'org': 'Google',
      'score': 1501,
      'ci': 8,
      'votes': 8500
    },
    {
      'name': 'claude-opus-4-5-20251101-high-32k',
      'org': 'Anthropic',
      'score': 1495,
      'ci': 8,
      'votes': 10600
    },
    {
      'name': 'gemini-3.5-flash-medium',
      'org': 'Google',
      'score': 1492,
      'ci': 7,
      'votes': 11000
    },
    {
      'name': 'minimax-m3',
      'org': 'MiniMax',
      'score': 1487,
      'ci': 7,
      'votes': 11600
    },
    {
      'name': 'gpt-5.5-high (codex-harness)',
      'org': 'OpenAI',
      'score': 1486,
      'ci': 6,
      'votes': 16600
    },
    {
      'name': 'qwen3.6-max-preview',
      'org': 'Alibaba',
      'score': 1479,
      'ci': 13,
      'votes': 2600
    },
    {
      'name': 'mimo-v2.5-pro',
      'org': 'Xiaomi',
      'score': 1475,
      'ci': 6,
      'votes': 14900
    },
    {
      'name': 'kimi-k2.7-code',
      'org': 'Moonshot',
      'score': 1473,
      'ci': 10,
      'votes': 4700
    },
    {
      'name': 'claude-opus-4-5-20251101',
      'org': 'Anthropic',
      'score': 1468,
      'ci': 7,
      'votes': 12900
    },
    {
      'name': 'deepseek-v4-pro-high-preview',
      'org': 'DeepSeek',
      'score': 1464,
      'ci': 7,
      'votes': 12400
    },
    {
      'name': 'gpt-5.4-high (codex-harness)',
      'org': 'OpenAI',
      'score': 1463,
      'ci': 19,
      'votes': 1300
    },
    {
      'name': 'qwen3.6-plus',
      'org': 'Alibaba',
      'score': 1460,
      'ci': 6,
      'votes': 17300
    },
    {
      'name': 'gpt-5.5 (codex-harness)',
      'org': 'OpenAI',
      'score': 1457,
      'ci': 6,
      'votes': 14700
    },
    {
      'name': 'gemini-3.5-flash-lite',
      'org': 'Google',
      'score': 1449,
      'ci': 42,
      'votes': 228
    },
    {
      'name': 'gemini-3.1-pro-preview',
      'org': 'Google',
      'score': 1446,
      'ci': 5,
      'votes': 22500
    },
    {
      'name': 'deepseek-v4-pro',
      'org': 'DeepSeek',
      'score': 1446,
      'ci': 7,
      'votes': 13200
    },
    {
      'name': 'gpt-5.4-medium (codex-harness)',
      'org': 'OpenAI',
      'score': 1442,
      'ci': 19,
      'votes': 1300
    },
    {
      'name': 'gemini-3-pro',
      'org': 'Google',
      'score': 1438,
      'ci': 9,
      'votes': 13600
    },
    {
      'name': 'mimo-v2.5',
      'org': 'Xiaomi',
      'score': 1438,
      'ci': 6,
      'votes': 13800
    },
    {
      'name': 'gemini-3-flash',
      'org': 'Google',
      'score': 1438,
      'ci': 9,
      'votes': 10500
    },
    {
      'name': 'kimi-k2.5-thinking',
      'org': 'Moonshot',
      'score': 1436,
      'ci': 5,
      'votes': 19100
    },
    {
      'name': 'glm-5',
      'org': 'Z.ai',
      'score': 1436,
      'ci': 8,
      'votes': 7100
    },
    {
      'name': 'glm-4.7',
      'org': 'Z.ai',
      'score': 1434,
      'ci': 12,
      'votes': 3800
    },
    {
      'name': 'mimo-v2-pro',
      'org': 'Xiaomi',
      'score': 1433,
      'ci': 8,
      'votes': 7000
    },
    {
      'name': 'deepseek-v4-flash-high-preview',
      'org': 'DeepSeek',
      'score': 1431,
      'ci': 7,
      'votes': 9500
    },
    {
      'name': 'gpt-5-medium',
      'org': 'OpenAI',
      'score': 1419,
      'ci': 16,
      'votes': 3000
    },
    {
      'name': 'gpt-5.2',
      'org': 'OpenAI',
      'score': 1416,
      'ci': 23,
      'votes': 1100
    },
    {
      'name': 'inkling',
      'org': 'Thinky',
      'score': 1408,
      'ci': 8,
      'votes': 7900
    },
    {
      'name': 'gpt-5.3-codex (codex-harness)',
      'org': 'OpenAI',
      'score': 1408,
      'ci': 14,
      'votes': 2500
    },
    {
      'name': 'kimi-k2.5-instant',
      'org': 'Moonshot',
      'score': 1405,
      'ci': 12,
      'votes': 3100
    },
    {
      'name': 'inkling small',
      'org': 'Thinky',
      'score': 1405,
      'ci': 10,
      'votes': 4700
    },
    {
      'name': 'glm-5v-turbo',
      'org': 'Z.ai',
      'score': 1400,
      'ci': 14,
      'votes': 2200
    },
    {
      'name': 'minimax-m2.7',
      'org': 'MiniMax',
      'score': 1398,
      'ci': 6,
      'votes': 14900
    },
    {
      'name': 'qwen3.5-397b-a17b',
      'org': 'Alibaba',
      'score': 1398,
      'ci': 5,
      'votes': 19600
    },
    {
      'name': 'gpt-5.4-mini-high',
      'org': 'OpenAI',
      'score': 1397,
      'ci': 7,
      'votes': 11300
    },
    {
      'name': 'claude-sonnet-4-5-20250929-high-32k',
      'org': 'Anthropic',
      'score': 1392,
      'ci': 8,
      'votes': 12800
    },
    {
      'name': 'gpt-5.1-medium',
      'org': 'OpenAI',
      'score': 1391,
      'ci': 12,
      'votes': 4800
    },
    {
      'name': 'claude-opus-4-1-20250805',
      'org': 'Anthropic',
      'score': 1389,
      'ci': 11,
      'votes': 6800
    },
    {
      'name': 'gpt-5.4',
      'org': 'OpenAI',
      'score': 1388,
      'ci': 13,
      'votes': 2200
    },
    {
      'name': 'minimax-m2.1-preview',
      'org': 'MiniMax',
      'score': 1387,
      'ci': 10,
      'votes': 7300
    },
    {
      'name': 'claude-sonnet-4-5-20250929',
      'org': 'Anthropic',
      'score': 1385,
      'ci': 7,
      'votes': 15200
    },
    {
      'name': 'minimax-m2.5',
      'org': 'MiniMax',
      'score': 1384,
      'ci': 8,
      'votes': 7200
    },
    {
      'name': 'gemini-3-flash (thinking-minimal)',
      'org': 'Google',
      'score': 1383,
      'ci': 5,
      'votes': 20900
    },
    {
      'name': 'grok-4.20-beta-0309-reasoning',
      'org': 'SpaceXAI',
      'score': 1374,
      'ci': 6,
      'votes': 14600
    },
    {
      'name': 'solar-pro4',
      'org': 'Upstage',
      'score': 1371,
      'ci': 17,
      'votes': 1400
    },
    {
      'name': 'gpt-5.3-codex (codex-harness)',
      'org': 'OpenAI',
      'score': 1370,
      'ci': 12,
      'votes': 3500
    },
    {
      'name': 'gemma-4-31b',
      'org': 'Google',
      'score': 1363,
      'ci': 7,
      'votes': 9500
    },
    {
      'name': 'gemma-4-26b-a4b',
      'org': 'Google',
      'score': 1361,
      'ci': 17,
      'votes': 1400
    },
    {
      'name': 'deepseek-v3.2-thinking',
      'org': 'DeepSeek',
      'score': 1361,
      'ci': 9,
      'votes': 6600
    },
    {
      'name': 'muse-glimmer',
      'org': 'Meta',
      'score': 1360,
      'ci': 16,
      'votes': 1500
    },
    {
      'name': 'qwen3.5-122b-a10b',
      'org': 'Alibaba',
      'score': 1358,
      'ci': 8,
      'votes': 7800
    },
    {
      'name': 'qwen3.5-27b',
      'org': 'Alibaba',
      'score': 1357,
      'ci': 8,
      'votes': 7400
    },
    {
      'name': 'grok-4.3',
      'org': 'SpaceXAI',
      'score': 1357,
      'ci': 6,
      'votes': 13900
    },
    {
      'name': 'hunyuan-hy3-preview',
      'org': 'Tencent',
      'score': 1356,
      'ci': 18,
      'votes': 1400
    },
    {
      'name': 'laguna-m.1',
      'org': 'Poolside',
      'score': 1347,
      'ci': 10,
      'votes': 5100
    },
    {
      'name': 'gpt-5.1',
      'org': 'OpenAI',
      'score': 1341,
      'ci': 9,
      'votes': 10300
    },
    {
      'name': 'glm-4.6',
      'org': 'Z.ai',
      'score': 1340,
      'ci': 11,
      'votes': 6600
    },
    {
      'name': 'gpt-5.2-codex',
      'org': 'OpenAI',
      'score': 1338,
      'ci': 9,
      'votes': 6400
    },
    {
      'name': 'gpt-5.1-codex',
      'org': 'OpenAI',
      'score': 1336,
      'ci': 12,
      'votes': 4900
    },
    {
      'name': 'mimo-v2-flash (non-thinking)',
      'org': 'Xiaomi',
      'score': 1331,
      'ci': 10,
      'votes': 5400
    },
    {
      'name': 'claude-haiku-4-5-20251001',
      'org': 'Anthropic',
      'score': 1329,
      'ci': 5,
      'votes': 27500
    },
    {
      'name': 'deepseek-v3.2',
      'org': 'DeepSeek',
      'score': 1325,
      'ci': 8,
      'votes': 9000
    },
    {
      'name': 'kimi-k2-thinking-turbo',
      'org': 'Moonshot',
      'score': 1322,
      'ci': 7,
      'votes': 12600
    },
    {
      'name': 'laguna-xs.2',
      'org': 'Poolside',
      'score': 1302,
      'ci': 11,
      'votes': 3900
    },
    {
      'name': 'minimax-m2',
      'org': 'MiniMax',
      'score': 1297,
      'ci': 11,
      'votes': 6500
    },
    {
      'name': 'mimo-v2-flash (thinking)',
      'org': 'Xiaomi',
      'score': 1293,
      'ci': 17,
      'votes': 1700
    },
    {
      'name': 'qwen3-coder-480b-a35b-instruct',
      'org': 'Alibaba',
      'score': 1274,
      'ci': 8,
      'votes': 12300
    },
    {
      'name': 'deepseek-v3.2-exp',
      'org': 'DeepSeek',
      'score': 1271,
      'ci': 14,
      'votes': 3900
    },
    {
      'name': 'mistral-medium-3.5',
      'org': 'Mistral',
      'score': 1265,
      'ci': 15,
      'votes': 2200
    },
    {
      'name': 'gemini-3.1-flash-lite-preview',
      'org': 'Google',
      'score': 1254,
      'ci': 7,
      'votes': 13600
    },
    {
      'name': 'kat-coder-pro-v1',
      'org': '',
      'score': 1254,
      'ci': 20,
      'votes': 1500
    },
    {
      'name': 'qwen3.5-35b-a3b',
      'org': 'Alibaba',
      'score': 1250,
      'ci': 18,
      'votes': 1500
    },
    {
      'name': 'gpt-5.1-codex-mini',
      'org': 'OpenAI',
      'score': 1243,
      'ci': 22,
      'votes': 1100
    },
    {
      'name': 'grok-4-1-fast-reasoning',
      'org': 'SpaceXAI',
      'score': 1240,
      'ci': 11,
      'votes': 5300
    },
    {
      'name': 'qwen3.5-flash',
      'org': 'Alibaba',
      'score': 1238,
      'ci': 20,
      'votes': 1300
    },
    {
      'name': 'trinity-large-thinking',
      'org': '',
      'score': 1238,
      'ci': 20,
      'votes': 1300
    },
    {
      'name': 'mistral-large-3',
      'org': 'Mistral',
      'score': 1229,
      'ci': 26,
      'votes': 812
    },
    {
      'name': 'gemini-2.5-pro',
      'org': 'Google',
      'score': 1225,
      'ci': 16,
      'votes': 2700
    },
    {
      'name': 'grok-4.1-thinking',
      'org': 'SpaceXAI',
      'score': 1211,
      'ci': 25,
      'votes': 939
    },
    {
      'name': 'devstral-2',
      'org': 'Mistral',
      'score': 1194,
      'ci': 21,
      'votes': 1100
    },
    {
      'name': 'granite-4.1-8b',
      'org': 'IBM',
      'score': 1191,
      'ci': 19,
      'votes': 1700
    },
    {
      'name': 'mercury-2',
      'org': 'Inception AI',
      'score': 1166,
      'ci': 25,
      'votes': 908
    },
    {
      'name': 'grok-code-fast-1',
      'org': 'SpaceXAI',
      'score': 1165,
      'ci': 28,
      'votes': 783
    },
    {
      'name': 'grok-4-fast-reasoning',
      'org': 'SpaceXAI',
      'score': 1162,
      'ci': 28,
      'votes': 731
    },
    {
      'name': 'devstral-medium-2507',
      'org': 'Mistral',
      'score': 1080,
      'ci': 31,
      'votes': 831
    }
  ]
};
