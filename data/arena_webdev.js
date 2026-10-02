// 数据源:LMArena Code Arena | WebDev(前端 Web 开发权威竞技场,Elo 评分)
// 官方:https://arena.ai/leaderboard/code(有 Cloudflare 防护);主抓源为每日快照官方数据的权威镜像:
//     https://m.aitntnews.com/arena/code/ (更新于 2026-10-02)
// 字段说明:name=模型原始名;org=厂商;score=Elo 得分;ci=±95% 置信区间;votes=投票数(近似)
// 用途:总览页「第三方实测」组基准,计入综合分与命中数(权重 22%);前端按 canonical 取最高分归入。
window.ARENA_WEBDEV = {
  'source': 'Code Arena WebDev (LMArena)',
  'officialUrl': 'https://arena.ai/leaderboard/code',
  'url': 'https://m.aitntnews.com/arena/code/',
  'updated': '2026-10-02',
  'version': 'overall',
  'metric': 'Elo score',
  'desc': 'LMArena Code Arena 前端竞技场:社区匿名盲测投票,衡量模型生成可交互 Web 应用的能力,Elo 评分(0-2000 区间)。',
  'stats': {
    'models': 137
  },
  'models': [
    {
      'name': 'claude-opus-5.5-max',
      'org': 'Anthropic',
      'score': 1818,
      'ci': 17,
      'votes': 2000,
      'src': 'selftest'
    },
    {
      'name': 'gpt-6-astra-max',
      'org': 'OpenAI',
      'score': 1789,
      'ci': 10,
      'votes': 5900,
      'src': 'selftest'
    },
    {
      'name': 'gpt-6.1-sol-max',
      'org': 'OpenAI',
      'score': 1759,
      'ci': 19,
      'votes': 1300,
      'src': 'selftest'
    },
    {
      'name': 'claude-fable-5.1-max',
      'org': 'Anthropic',
      'score': 1751,
      'ci': 10,
      'votes': 6100,
      'src': 'selftest'
    },
    {
      'name': 'claude-sonnet-5.5-high',
      'org': 'Anthropic',
      'score': 1709,
      'ci': 16,
      'votes': 1800,
      'src': 'selftest'
    },
    {
      'name': 'claude-opus-5-max',
      'org': 'Anthropic',
      'score': 1694,
      'ci': 6,
      'votes': 16700,
      'src': 'selftest'
    },
    {
      'name': 'gpt-6-sol-max',
      'org': 'OpenAI',
      'score': 1689,
      'ci': 12,
      'votes': 3200,
      'src': 'selftest'
    },
    {
      'name': 'gemini-4-argon-high',
      'org': 'Google',
      'score': 1679,
      'ci': 14,
      'votes': 2200,
      'src': 'selftest'
    },
    {
      'name': 'qwen3.8-max',
      'org': 'Alibaba',
      'score': 1671,
      'ci': 12,
      'votes': 3500,
      'src': 'selftest'
    },
    {
      'name': 'qwen3.8-max-0902',
      'org': 'Alibaba',
      'score': 1670,
      'ci': 8,
      'votes': 8900,
      'src': 'selftest'
    },
    {
      'name': 'claude-opus-5-high',
      'org': 'Anthropic',
      'score': 1660,
      'ci': 6,
      'votes': 21100,
      'src': 'selftest'
    },
    {
      'name': 'kimi-k3-max',
      'org': 'Moonshot',
      'score': 1658,
      'ci': 6,
      'votes': 16200,
      'src': 'selftest'
    },
    {
      'name': 'muse-spark-1.3-max',
      'org': 'Meta',
      'score': 1655,
      'ci': 9,
      'votes': 7000,
      'src': 'selftest'
    },
    {
      'name': 'qwen3.8-flash-next',
      'org': 'Alibaba',
      'score': 1638,
      'ci': 9,
      'votes': 6000,
      'src': 'selftest'
    },
    {
      'name': 'grok-4.7-xhigh',
      'org': 'SpaceXAI',
      'score': 1636,
      'ci': 12,
      'votes': 3100,
      'src': 'selftest'
    },
    {
      'name': 'hy4-preview',
      'org': 'Tencent',
      'score': 1633,
      'ci': 9,
      'votes': 5100,
      'src': 'selftest'
    },
    {
      'name': 'claude-fable-5-high',
      'org': 'Anthropic',
      'score': 1626,
      'ci': 6,
      'votes': 14000,
      'src': 'selftest'
    },
    {
      'name': 'muse-spark-1.3 (xhigh)',
      'org': 'Meta',
      'score': 1623,
      'ci': 9,
      'votes': 6100,
      'src': 'selftest'
    },
    {
      'name': 'glm-5.3-max',
      'org': 'Z.ai',
      'score': 1622,
      'ci': 8,
      'votes': 7500,
      'src': 'selftest'
    },
    {
      'name': 'grok-4.6-high',
      'org': 'SpaceXAI',
      'score': 1620,
      'ci': 8,
      'votes': 8100,
      'src': 'selftest'
    },
    {
      'name': 'deepseek-v4.1-flash-max',
      'org': 'DeepSeek',
      'score': 1620,
      'ci': 10,
      'votes': 4000,
      'src': 'selftest'
    },
    {
      'name': 'gpt-5.6-sol-xhigh (codex-harness)',
      'org': 'OpenAI',
      'score': 1619,
      'ci': 6,
      'votes': 16900,
      'src': 'selftest'
    },
    {
      'name': 'mimo-v2.6-pro',
      'org': 'Xiaomi',
      'score': 1619,
      'ci': 12,
      'votes': 2700,
      'src': 'selftest'
    },
    {
      'name': 'glm-5.3-flash',
      'org': 'Z.ai',
      'score': 1615,
      'ci': 8,
      'votes': 9600,
      'src': 'selftest'
    },
    {
      'name': 'glm-5.2-max',
      'org': 'Z.ai',
      'score': 1605,
      'ci': 6,
      'votes': 14500,
      'src': 'selftest'
    },
    {
      'name': 'gemini-3.7-flash-high',
      'org': 'Google',
      'score': 1592,
      'ci': 7,
      'votes': 9400,
      'src': 'selftest'
    },
    {
      'name': 'qwen3.8-27b',
      'org': 'Alibaba',
      'score': 1590,
      'ci': 7,
      'votes': 12000,
      'src': 'selftest'
    },
    {
      'name': 'gemini-3.8-flash-high',
      'org': 'Google',
      'score': 1583,
      'ci': 8,
      'votes': 8400,
      'src': 'selftest'
    },
    {
      'name': 'deepseek-v4-pro-high-20260813',
      'org': 'DeepSeek',
      'score': 1582,
      'ci': 9,
      'votes': 4900,
      'src': 'selftest'
    },
    {
      'name': 'gpt-6-luna-max',
      'org': 'OpenAI',
      'score': 1582,
      'ci': 9,
      'votes': 5600,
      'src': 'selftest'
    },
    {
      'name': 'deepseek-v4-flash-high',
      'org': 'DeepSeek',
      'score': 1581,
      'ci': 9,
      'votes': 5000,
      'src': 'selftest'
    },
    {
      'name': 'step-5-preview-high',
      'org': 'StepFun',
      'score': 1570,
      'ci': 13,
      'votes': 2300,
      'src': 'selftest'
    },
    {
      'name': 'claude-opus-4-7-high',
      'org': 'Anthropic',
      'score': 1557,
      'ci': 6,
      'votes': 17800,
      'src': 'selftest'
    },
    {
      'name': 'claude-opus-4-7',
      'org': 'Anthropic',
      'score': 1556,
      'ci': 6,
      'votes': 17500,
      'src': 'selftest'
    },
    {
      'name': 'claude-opus-4-8-high',
      'org': 'Anthropic',
      'score': 1556,
      'ci': 6,
      'votes': 18700,
      'src': 'selftest'
    },
    {
      'name': 'grok-4.5',
      'org': 'SpaceXAI',
      'score': 1552,
      'ci': 7,
      'votes': 11400,
      'src': 'selftest'
    },
    {
      'name': 'claude-opus-4-6-high',
      'org': 'Anthropic',
      'score': 1546,
      'ci': 5,
      'votes': 19500,
      'src': 'selftest'
    },
    {
      'name': 'muse-spark-1.1',
      'org': 'Meta',
      'score': 1542,
      'ci': 8,
      'votes': 8100,
      'src': 'selftest'
    },
    {
      'name': 'claude-sonnet-5-high',
      'org': 'Anthropic',
      'score': 1540,
      'ci': 6,
      'votes': 13900,
      'src': 'selftest'
    },
    {
      'name': 'claude-opus-4-6',
      'org': 'Anthropic',
      'score': 1537,
      'ci': 5,
      'votes': 20800,
      'src': 'selftest'
    },
    {
      'name': 'gemini-3.6-flash-high',
      'org': 'Google',
      'score': 1536,
      'ci': 7,
      'votes': 8800,
      'src': 'selftest'
    },
    {
      'name': 'claude-opus-4-8',
      'org': 'Anthropic',
      'score': 1534,
      'ci': 6,
      'votes': 17600,
      'src': 'selftest'
    },
    {
      'name': 'muse-spark-1.2 (xhigh)',
      'org': 'Meta',
      'score': 1532,
      'ci': 14,
      'votes': 2200,
      'src': 'selftest'
    },
    {
      'name': 'claude-sonnet-4-6',
      'org': 'Anthropic',
      'score': 1522,
      'ci': 5,
      'votes': 22900,
      'src': 'selftest'
    },
    {
      'name': 'gpt-5.6-terra-xhigh (codex-harness)',
      'org': 'OpenAI',
      'score': 1519,
      'ci': 7,
      'votes': 12300,
      'src': 'selftest'
    },
    {
      'name': 'gpt-5.6-luna-xhigh (codex-harness)',
      'org': 'OpenAI',
      'score': 1518,
      'ci': 6,
      'votes': 12500,
      'src': 'selftest'
    },
    {
      'name': 'seed-2.1-pro-preview',
      'org': 'Bytedance',
      'score': 1517,
      'ci': 6,
      'votes': 13100,
      'src': 'selftest'
    },
    {
      'name': 'qwen3.7-max-20260517',
      'org': 'Alibaba',
      'score': 1515,
      'ci': 7,
      'votes': 8900,
      'src': 'selftest'
    },
    {
      'name': 'gpt-5.5-xhigh (codex-harness)',
      'org': 'OpenAI',
      'score': 1512,
      'ci': 6,
      'votes': 15900,
      'src': 'selftest'
    },
    {
      'name': 'kimi-k2.6',
      'org': 'Moonshot',
      'score': 1509,
      'ci': 7,
      'votes': 10200,
      'src': 'selftest'
    },
    {
      'name': 'glm-5.1',
      'org': 'Z.ai',
      'score': 1508,
      'ci': 7,
      'votes': 10800,
      'src': 'selftest'
    },
    {
      'name': 'hy3',
      'org': 'Tencent',
      'score': 1508,
      'ci': 9,
      'votes': 5700,
      'src': 'selftest'
    },
    {
      'name': 'gemini-3.5-flash-high',
      'org': 'Google',
      'score': 1499,
      'ci': 7,
      'votes': 9500,
      'src': 'selftest'
    },
    {
      'name': 'claude-opus-4-5-20251101-high-32k',
      'org': 'Anthropic',
      'score': 1493,
      'ci': 8,
      'votes': 11000,
      'src': 'selftest'
    },
    {
      'name': 'gemini-3.5-flash-medium',
      'org': 'Google',
      'score': 1490,
      'ci': 7,
      'votes': 12300,
      'src': 'selftest'
    },
    {
      'name': 'gpt-5.5-high (codex-harness)',
      'org': 'OpenAI',
      'score': 1487,
      'ci': 6,
      'votes': 18200,
      'src': 'selftest'
    },
    {
      'name': 'minimax-m3',
      'org': 'MiniMax',
      'score': 1482,
      'ci': 6,
      'votes': 17400,
      'src': 'selftest'
    },
    {
      'name': 'qwen3.6-max-preview',
      'org': 'Alibaba',
      'score': 1482,
      'ci': 13,
      'votes': 2700,
      'src': 'selftest'
    },
    {
      'name': 'mimo-v2.5-pro',
      'org': 'Xiaomi',
      'score': 1477,
      'ci': 5,
      'votes': 20100,
      'src': 'selftest'
    },
    {
      'name': 'kimi-k2.7-code',
      'org': 'Moonshot',
      'score': 1473,
      'ci': 9,
      'votes': 5000,
      'src': 'selftest'
    },
    {
      'name': 'claude-opus-4-5-20251101',
      'org': 'Anthropic',
      'score': 1468,
      'ci': 7,
      'votes': 13400,
      'src': 'selftest'
    },
    {
      'name': 'gpt-5.4-high (codex-harness)',
      'org': 'OpenAI',
      'score': 1465,
      'ci': 19,
      'votes': 1400,
      'src': 'selftest'
    },
    {
      'name': 'deepseek-v4-pro-high-preview',
      'org': 'DeepSeek',
      'score': 1463,
      'ci': 6,
      'votes': 13200,
      'src': 'selftest'
    },
    {
      'name': 'qwen3.6-plus',
      'org': 'Alibaba',
      'score': 1461,
      'ci': 6,
      'votes': 18700,
      'src': 'selftest'
    },
    {
      'name': 'gpt-5.5 (codex-harness)',
      'org': 'OpenAI',
      'score': 1455,
      'ci': 6,
      'votes': 16000,
      'src': 'selftest'
    },
    {
      'name': 'gemini-3.1-pro-preview',
      'org': 'Google',
      'score': 1446,
      'ci': 5,
      'votes': 24300,
      'src': 'selftest'
    },
    {
      'name': 'deepseek-v4-pro',
      'org': 'DeepSeek',
      'score': 1446,
      'ci': 6,
      'votes': 14000,
      'src': 'selftest'
    },
    {
      'name': 'gpt-5.4-medium (codex-harness)',
      'org': 'OpenAI',
      'score': 1443,
      'ci': 18,
      'votes': 1400,
      'src': 'selftest'
    },
    {
      'name': 'gemini-3.5-flash-lite',
      'org': 'Google',
      'score': 1440,
      'ci': 41,
      'votes': 242,
      'src': 'selftest'
    },
    {
      'name': 'gemini-3-pro',
      'org': 'Google',
      'score': 1439,
      'ci': 8,
      'votes': 14100,
      'src': 'selftest'
    },
    {
      'name': 'gemini-3-flash',
      'org': 'Google',
      'score': 1439,
      'ci': 9,
      'votes': 10900,
      'src': 'selftest'
    },
    {
      'name': 'mimo-v2.5',
      'org': 'Xiaomi',
      'score': 1438,
      'ci': 6,
      'votes': 15000,
      'src': 'selftest'
    },
    {
      'name': 'kimi-k2.5-thinking',
      'org': 'Moonshot',
      'score': 1436,
      'ci': 5,
      'votes': 20100,
      'src': 'selftest'
    },
    {
      'name': 'glm-4.7',
      'org': 'Z.ai',
      'score': 1435,
      'ci': 12,
      'votes': 4000,
      'src': 'selftest'
    },
    {
      'name': 'glm-5',
      'org': 'Z.ai',
      'score': 1434,
      'ci': 8,
      'votes': 7500,
      'src': 'selftest'
    },
    {
      'name': 'mimo-v2-pro',
      'org': 'Xiaomi',
      'score': 1433,
      'ci': 8,
      'votes': 7200,
      'src': 'selftest'
    },
    {
      'name': 'deepseek-v4-flash-high-preview',
      'org': 'DeepSeek',
      'score': 1430,
      'ci': 7,
      'votes': 10200,
      'src': 'selftest'
    },
    {
      'name': 'gpt-5-medium',
      'org': 'OpenAI',
      'score': 1417,
      'ci': 16,
      'votes': 3100,
      'src': 'selftest'
    },
    {
      'name': 'gpt-5.2',
      'org': 'OpenAI',
      'score': 1416,
      'ci': 22,
      'votes': 1100,
      'src': 'selftest'
    },
    {
      'name': 'inkling',
      'org': 'Thinky',
      'score': 1412,
      'ci': 6,
      'votes': 13500,
      'src': 'selftest'
    },
    {
      'name': 'inkling small',
      'org': 'Thinky',
      'score': 1408,
      'ci': 9,
      'votes': 5400,
      'src': 'selftest'
    },
    {
      'name': 'gpt-5.3-codex (codex-harness)',
      'org': 'OpenAI',
      'score': 1408,
      'ci': 14,
      'votes': 2600,
      'src': 'selftest'
    },
    {
      'name': 'kimi-k2.5-instant',
      'org': 'Moonshot',
      'score': 1404,
      'ci': 12,
      'votes': 3300,
      'src': 'selftest'
    },
    {
      'name': 'glm-5v-turbo',
      'org': 'Z.ai',
      'score': 1400,
      'ci': 13,
      'votes': 2400,
      'src': 'selftest'
    },
    {
      'name': 'qwen3.5-397b-a17b',
      'org': 'Alibaba',
      'score': 1400,
      'ci': 5,
      'votes': 21300,
      'src': 'selftest'
    },
    {
      'name': 'minimax-m2.7',
      'org': 'MiniMax',
      'score': 1397,
      'ci': 6,
      'votes': 16100,
      'src': 'selftest'
    },
    {
      'name': 'gpt-5.4-mini-high',
      'org': 'OpenAI',
      'score': 1397,
      'ci': 7,
      'votes': 12000,
      'src': 'selftest'
    },
    {
      'name': 'gpt-5.4',
      'org': 'OpenAI',
      'score': 1395,
      'ci': 11,
      'votes': 3700,
      'src': 'selftest'
    },
    {
      'name': 'gpt-5.1-medium',
      'org': 'OpenAI',
      'score': 1395,
      'ci': 11,
      'votes': 4900,
      'src': 'selftest'
    },
    {
      'name': 'claude-sonnet-4-5-20250929-high-32k',
      'org': 'Anthropic',
      'score': 1393,
      'ci': 8,
      'votes': 13300,
      'src': 'selftest'
    },
    {
      'name': 'claude-opus-4-1-20250805',
      'org': 'Anthropic',
      'score': 1390,
      'ci': 11,
      'votes': 6900,
      'src': 'selftest'
    },
    {
      'name': 'minimax-m2.5',
      'org': 'MiniMax',
      'score': 1386,
      'ci': 8,
      'votes': 7600,
      'src': 'selftest'
    },
    {
      'name': 'gemini-3-flash (thinking-minimal)',
      'org': 'Google',
      'score': 1384,
      'ci': 5,
      'votes': 22200,
      'src': 'selftest'
    },
    {
      'name': 'claude-sonnet-4-5-20250929',
      'org': 'Anthropic',
      'score': 1384,
      'ci': 7,
      'votes': 15700,
      'src': 'selftest'
    },
    {
      'name': 'minimax-m2.1-preview',
      'org': 'MiniMax',
      'score': 1384,
      'ci': 10,
      'votes': 7600,
      'src': 'selftest'
    },
    {
      'name': 'grok-4.20-beta-0309-reasoning',
      'org': 'SpaceXAI',
      'score': 1374,
      'ci': 6,
      'votes': 15500,
      'src': 'selftest'
    },
    {
      'name': 'gpt-5.3-codex (codex-harness)',
      'org': 'OpenAI',
      'score': 1371,
      'ci': 11,
      'votes': 3700,
      'src': 'selftest'
    },
    {
      'name': 'solar-pro4',
      'org': 'Upstage',
      'score': 1370,
      'ci': 10,
      'votes': 4900,
      'src': 'selftest'
    },
    {
      'name': 'gemma-4-31b',
      'org': 'Google',
      'score': 1365,
      'ci': 6,
      'votes': 13200,
      'src': 'selftest'
    },
    {
      'name': 'deepseek-v3.2-thinking',
      'org': 'DeepSeek',
      'score': 1362,
      'ci': 9,
      'votes': 6900,
      'src': 'selftest'
    },
    {
      'name': 'qwen3.5-122b-a10b',
      'org': 'Alibaba',
      'score': 1360,
      'ci': 8,
      'votes': 8200,
      'src': 'selftest'
    },
    {
      'name': 'gemma-4-26b-a4b',
      'org': 'Google',
      'score': 1359,
      'ci': 17,
      'votes': 1500,
      'src': 'selftest'
    },
    {
      'name': 'qwen3.5-27b',
      'org': 'Alibaba',
      'score': 1357,
      'ci': 8,
      'votes': 7800,
      'src': 'selftest'
    },
    {
      'name': 'grok-4.3',
      'org': 'SpaceXAI',
      'score': 1357,
      'ci': 6,
      'votes': 15000,
      'src': 'selftest'
    },
    {
      'name': 'hunyuan-hy3-preview',
      'org': 'Tencent',
      'score': 1356,
      'ci': 17,
      'votes': 1400,
      'src': 'selftest'
    },
    {
      'name': 'muse-glimmer',
      'org': 'Meta',
      'score': 1355,
      'ci': 16,
      'votes': 1700,
      'src': 'selftest'
    },
    {
      'name': 'laguna-m.1',
      'org': 'Poolside',
      'score': 1348,
      'ci': 9,
      'votes': 5400,
      'src': 'selftest'
    },
    {
      'name': 'gpt-5.1',
      'org': 'OpenAI',
      'score': 1341,
      'ci': 8,
      'votes': 10700,
      'src': 'selftest'
    },
    {
      'name': 'glm-4.6',
      'org': 'Z.ai',
      'score': 1339,
      'ci': 11,
      'votes': 6800,
      'src': 'selftest'
    },
    {
      'name': 'gpt-5.2-codex',
      'org': 'OpenAI',
      'score': 1339,
      'ci': 9,
      'votes': 6700,
      'src': 'selftest'
    },
    {
      'name': 'gpt-5.1-codex',
      'org': 'OpenAI',
      'score': 1337,
      'ci': 12,
      'votes': 5000,
      'src': 'selftest'
    },
    {
      'name': 'mimo-v2-flash (non-thinking)',
      'org': 'Xiaomi',
      'score': 1330,
      'ci': 10,
      'votes': 5700,
      'src': 'selftest'
    },
    {
      'name': 'claude-haiku-4-5-20251001',
      'org': 'Anthropic',
      'score': 1329,
      'ci': 5,
      'votes': 29200,
      'src': 'selftest'
    },
    {
      'name': 'deepseek-v3.2',
      'org': 'DeepSeek',
      'score': 1325,
      'ci': 8,
      'votes': 9400,
      'src': 'selftest'
    },
    {
      'name': 'kimi-k2-thinking-turbo',
      'org': 'Moonshot',
      'score': 1321,
      'ci': 7,
      'votes': 13100,
      'src': 'selftest'
    },
    {
      'name': 'laguna-xs.2',
      'org': 'Poolside',
      'score': 1302,
      'ci': 11,
      'votes': 4300,
      'src': 'selftest'
    },
    {
      'name': 'minimax-m2',
      'org': 'MiniMax',
      'score': 1297,
      'ci': 11,
      'votes': 6700,
      'src': 'selftest'
    },
    {
      'name': 'mimo-v2-flash (thinking)',
      'org': 'Xiaomi',
      'score': 1292,
      'ci': 16,
      'votes': 1700,
      'src': 'selftest'
    },
    {
      'name': 'qwen3-coder-480b-a35b-instruct',
      'org': 'Alibaba',
      'score': 1274,
      'ci': 8,
      'votes': 12700,
      'src': 'selftest'
    },
    {
      'name': 'deepseek-v3.2-exp',
      'org': 'DeepSeek',
      'score': 1272,
      'ci': 13,
      'votes': 4000,
      'src': 'selftest'
    },
    {
      'name': 'mistral-medium-3.5',
      'org': 'Mistral',
      'score': 1263,
      'ci': 15,
      'votes': 2300,
      'src': 'selftest'
    },
    {
      'name': 'gemini-3.1-flash-lite-preview',
      'org': 'Google',
      'score': 1256,
      'ci': 7,
      'votes': 14400,
      'src': 'selftest'
    },
    {
      'name': 'kat-coder-pro-v1',
      'org': '',
      'score': 1255,
      'ci': 19,
      'votes': 1500,
      'src': 'selftest'
    },
    {
      'name': 'qwen3.5-35b-a3b',
      'org': 'Alibaba',
      'score': 1253,
      'ci': 17,
      'votes': 1600,
      'src': 'selftest'
    },
    {
      'name': 'gpt-5.1-codex-mini',
      'org': 'OpenAI',
      'score': 1244,
      'ci': 22,
      'votes': 1200,
      'src': 'selftest'
    },
    {
      'name': 'qwen3.5-flash',
      'org': 'Alibaba',
      'score': 1243,
      'ci': 20,
      'votes': 1300,
      'src': 'selftest'
    },
    {
      'name': 'grok-4-1-fast-reasoning',
      'org': 'SpaceXAI',
      'score': 1241,
      'ci': 11,
      'votes': 5500,
      'src': 'selftest'
    },
    {
      'name': 'trinity-large-thinking',
      'org': '',
      'score': 1238,
      'ci': 20,
      'votes': 1400,
      'src': 'selftest'
    },
    {
      'name': 'mistral-large-3',
      'org': 'Mistral',
      'score': 1230,
      'ci': 25,
      'votes': 840,
      'src': 'selftest'
    },
    {
      'name': 'gemini-2.5-pro',
      'org': 'Google',
      'score': 1227,
      'ci': 16,
      'votes': 2700,
      'src': 'selftest'
    },
    {
      'name': 'grok-4.1-thinking',
      'org': 'SpaceXAI',
      'score': 1214,
      'ci': 25,
      'votes': 961,
      'src': 'selftest'
    },
    {
      'name': 'devstral-2',
      'org': 'Mistral',
      'score': 1196,
      'ci': 21,
      'votes': 1200,
      'src': 'selftest'
    },
    {
      'name': 'granite-4.1-8b',
      'org': 'IBM',
      'score': 1191,
      'ci': 18,
      'votes': 1800,
      'src': 'selftest'
    },
    {
      'name': 'mercury-2',
      'org': 'Inception AI',
      'score': 1170,
      'ci': 24,
      'votes': 955,
      'src': 'selftest'
    },
    {
      'name': 'grok-code-fast-1',
      'org': 'SpaceXAI',
      'score': 1167,
      'ci': 28,
      'votes': 789,
      'src': 'selftest'
    },
    {
      'name': 'grok-4-fast-reasoning',
      'org': 'SpaceXAI',
      'score': 1159,
      'ci': 27,
      'votes': 743,
      'src': 'selftest'
    },
    {
      'name': 'devstral-medium-2507',
      'org': 'Mistral',
      'score': 1076,
      'ci': 31,
      'votes': 842,
      'src': 'selftest'
    }
  ]
};
