// 数据源:LMArena Code Arena | WebDev(前端 Web 开发权威竞技场,Elo 评分)
// 官方:https://arena.ai/leaderboard/code(有 Cloudflare 防护);主抓源为每日快照官方数据的权威镜像:
//     https://m.aitntnews.com/arena/code/ (更新于 2026-09-21)
// 字段说明:name=模型原始名;org=厂商;score=Elo 得分;ci=±95% 置信区间;votes=投票数(近似)
// 用途:总览页「第三方实测」组基准,计入综合分与命中数(权重 22%);前端按 canonical 取最高分归入。
window.ARENA_WEBDEV = {
  'source': 'Code Arena WebDev (LMArena)',
  'officialUrl': 'https://arena.ai/leaderboard/code',
  'url': 'https://m.aitntnews.com/arena/code/',
  'updated': '2026-09-21',
  'version': 'overall',
  'metric': 'Elo score',
  'desc': 'LMArena Code Arena 前端竞技场:社区匿名盲测投票,衡量模型生成可交互 Web 应用的能力,Elo 评分(0-2000 区间)。',
  'stats': {
    'models': 128
  },
  'models': [
    {
      'name': 'gpt-6-astra-max',
      'org': 'OpenAI',
      'score': 1800,
      'ci': 16,
      'votes': 2300,
      'src': 'selftest'
    },
    {
      'name': 'claude-fable-5.1-max',
      'org': 'Anthropic',
      'score': 1758,
      'ci': 14,
      'votes': 3000,
      'src': 'selftest'
    },
    {
      'name': 'claude-opus-5-max',
      'org': 'Anthropic',
      'score': 1687,
      'ci': 7,
      'votes': 12100,
      'src': 'selftest'
    },
    {
      'name': 'qwen3.8-max-0902',
      'org': 'Alibaba',
      'score': 1681,
      'ci': 15,
      'votes': 2300,
      'src': 'selftest'
    },
    {
      'name': 'kimi-k3-max',
      'org': 'Moonshot',
      'score': 1674,
      'ci': 11,
      'votes': 4500,
      'src': 'selftest'
    },
    {
      'name': 'qwen3.8-max',
      'org': 'Alibaba',
      'score': 1671,
      'ci': 12,
      'votes': 3200,
      'src': 'selftest'
    },
    {
      'name': 'claude-opus-5-high',
      'org': 'Anthropic',
      'score': 1660,
      'ci': 7,
      'votes': 12600,
      'src': 'selftest'
    },
    {
      'name': 'muse-spark-1.3-max',
      'org': 'Meta',
      'score': 1652,
      'ci': 12,
      'votes': 3000,
      'src': 'selftest'
    },
    {
      'name': 'qwen3.8-flash-next',
      'org': 'Alibaba',
      'score': 1635,
      'ci': 13,
      'votes': 2800,
      'src': 'selftest'
    },
    {
      'name': 'claude-fable-5-high',
      'org': 'Anthropic',
      'score': 1628,
      'ci': 7,
      'votes': 10100,
      'src': 'selftest'
    },
    {
      'name': 'hy4-preview',
      'org': 'Tencent',
      'score': 1624,
      'ci': 13,
      'votes': 2300,
      'src': 'selftest'
    },
    {
      'name': 'muse-spark-1.3 (xhigh)',
      'org': 'Meta',
      'score': 1623,
      'ci': 14,
      'votes': 2100,
      'src': 'selftest'
    },
    {
      'name': 'grok-4.6-high',
      'org': 'SpaceXAI',
      'score': 1618,
      'ci': 10,
      'votes': 4300,
      'src': 'selftest'
    },
    {
      'name': 'gpt-5.6-sol-xhigh (codex-harness)',
      'org': 'OpenAI',
      'score': 1617,
      'ci': 7,
      'votes': 11900,
      'src': 'selftest'
    },
    {
      'name': 'glm-5.3-max',
      'org': 'Z.ai',
      'score': 1614,
      'ci': 11,
      'votes': 3700,
      'src': 'selftest'
    },
    {
      'name': 'deepseek-v4.1-flash-max',
      'org': 'DeepSeek',
      'score': 1614,
      'ci': 17,
      'votes': 1400,
      'src': 'selftest'
    },
    {
      'name': 'glm-5.3-flash',
      'org': 'Z.ai',
      'score': 1607,
      'ci': 12,
      'votes': 2900,
      'src': 'selftest'
    },
    {
      'name': 'qwen3.8-27b',
      'org': 'Alibaba',
      'score': 1593,
      'ci': 9,
      'votes': 4900,
      'src': 'selftest'
    },
    {
      'name': 'glm-5.2-max',
      'org': 'Z.ai',
      'score': 1592,
      'ci': 7,
      'votes': 10500,
      'src': 'selftest'
    },
    {
      'name': 'gemini-3.7-flash-high',
      'org': 'Google',
      'score': 1587,
      'ci': 12,
      'votes': 3000,
      'src': 'selftest'
    },
    {
      'name': 'deepseek-v4-pro-high-20260813',
      'org': 'DeepSeek',
      'score': 1581,
      'ci': 10,
      'votes': 4300,
      'src': 'selftest'
    },
    {
      'name': 'deepseek-v4-flash-high',
      'org': 'DeepSeek',
      'score': 1580,
      'ci': 10,
      'votes': 4700,
      'src': 'selftest'
    },
    {
      'name': 'gemini-3.8-flash-high',
      'org': 'Google',
      'score': 1568,
      'ci': 12,
      'votes': 2700,
      'src': 'selftest'
    },
    {
      'name': 'claude-opus-4-8-high',
      'org': 'Anthropic',
      'score': 1559,
      'ci': 7,
      'votes': 13800,
      'src': 'selftest'
    },
    {
      'name': 'claude-opus-4-7',
      'org': 'Anthropic',
      'score': 1557,
      'ci': 6,
      'votes': 15900,
      'src': 'selftest'
    },
    {
      'name': 'claude-opus-4-7-high',
      'org': 'Anthropic',
      'score': 1555,
      'ci': 6,
      'votes': 16400,
      'src': 'selftest'
    },
    {
      'name': 'grok-4.5',
      'org': 'SpaceXAI',
      'score': 1555,
      'ci': 8,
      'votes': 8100,
      'src': 'selftest'
    },
    {
      'name': 'claude-opus-4-6-high',
      'org': 'Anthropic',
      'score': 1547,
      'ci': 6,
      'votes': 18300,
      'src': 'selftest'
    },
    {
      'name': 'muse-spark-1.1',
      'org': 'Meta',
      'score': 1542,
      'ci': 8,
      'votes': 7500,
      'src': 'selftest'
    },
    {
      'name': 'claude-opus-4-8',
      'org': 'Anthropic',
      'score': 1539,
      'ci': 6,
      'votes': 12700,
      'src': 'selftest'
    },
    {
      'name': 'claude-opus-4-6',
      'org': 'Anthropic',
      'score': 1537,
      'ci': 5,
      'votes': 19500,
      'src': 'selftest'
    },
    {
      'name': 'gemini-3.6-flash-high',
      'org': 'Google',
      'score': 1537,
      'ci': 8,
      'votes': 8300,
      'src': 'selftest'
    },
    {
      'name': 'claude-sonnet-5-high',
      'org': 'Anthropic',
      'score': 1537,
      'ci': 7,
      'votes': 9300,
      'src': 'selftest'
    },
    {
      'name': 'muse-spark-1.2 (xhigh)',
      'org': 'Meta',
      'score': 1534,
      'ci': 14,
      'votes': 2100,
      'src': 'selftest'
    },
    {
      'name': 'gpt-5.6-terra-xhigh (codex-harness)',
      'org': 'OpenAI',
      'score': 1521,
      'ci': 8,
      'votes': 7700,
      'src': 'selftest'
    },
    {
      'name': 'claude-sonnet-4-6',
      'org': 'Anthropic',
      'score': 1521,
      'ci': 5,
      'votes': 21600,
      'src': 'selftest'
    },
    {
      'name': 'gpt-5.6-luna-xhigh (codex-harness)',
      'org': 'OpenAI',
      'score': 1519,
      'ci': 8,
      'votes': 7800,
      'src': 'selftest'
    },
    {
      'name': 'seed-2.1-pro-preview',
      'org': 'Bytedance',
      'score': 1519,
      'ci': 7,
      'votes': 9300,
      'src': 'selftest'
    },
    {
      'name': 'qwen3.7-max-20260517',
      'org': 'Alibaba',
      'score': 1517,
      'ci': 8,
      'votes': 8400,
      'src': 'selftest'
    },
    {
      'name': 'hy3',
      'org': 'Tencent',
      'score': 1513,
      'ci': 11,
      'votes': 3600,
      'src': 'selftest'
    },
    {
      'name': 'gpt-5.5-xhigh (codex-harness)',
      'org': 'OpenAI',
      'score': 1510,
      'ci': 6,
      'votes': 14900,
      'src': 'selftest'
    },
    {
      'name': 'kimi-k2.6',
      'org': 'Moonshot',
      'score': 1509,
      'ci': 7,
      'votes': 9600,
      'src': 'selftest'
    },
    {
      'name': 'glm-5.1',
      'org': 'Z.ai',
      'score': 1508,
      'ci': 7,
      'votes': 10200,
      'src': 'selftest'
    },
    {
      'name': 'gemini-3.5-flash-high',
      'org': 'Google',
      'score': 1500,
      'ci': 7,
      'votes': 8900,
      'src': 'selftest'
    },
    {
      'name': 'claude-opus-4-5-20251101-high-32k',
      'org': 'Anthropic',
      'score': 1495,
      'ci': 8,
      'votes': 10600,
      'src': 'selftest'
    },
    {
      'name': 'gemini-3.5-flash-medium',
      'org': 'Google',
      'score': 1492,
      'ci': 7,
      'votes': 11400,
      'src': 'selftest'
    },
    {
      'name': 'gpt-5.5-high (codex-harness)',
      'org': 'OpenAI',
      'score': 1487,
      'ci': 6,
      'votes': 17000,
      'src': 'selftest'
    },
    {
      'name': 'minimax-m3',
      'org': 'MiniMax',
      'score': 1487,
      'ci': 6,
      'votes': 12700,
      'src': 'selftest'
    },
    {
      'name': 'qwen3.6-max-preview',
      'org': 'Alibaba',
      'score': 1479,
      'ci': 13,
      'votes': 2600,
      'src': 'selftest'
    },
    {
      'name': 'mimo-v2.5-pro',
      'org': 'Xiaomi',
      'score': 1475,
      'ci': 6,
      'votes': 15800,
      'src': 'selftest'
    },
    {
      'name': 'kimi-k2.7-code',
      'org': 'Moonshot',
      'score': 1473,
      'ci': 10,
      'votes': 4700,
      'src': 'selftest'
    },
    {
      'name': 'claude-opus-4-5-20251101',
      'org': 'Anthropic',
      'score': 1468,
      'ci': 7,
      'votes': 12900,
      'src': 'selftest'
    },
    {
      'name': 'deepseek-v4-pro-high-preview',
      'org': 'DeepSeek',
      'score': 1464,
      'ci': 6,
      'votes': 12400,
      'src': 'selftest'
    },
    {
      'name': 'gpt-5.4-high (codex-harness)',
      'org': 'OpenAI',
      'score': 1463,
      'ci': 19,
      'votes': 1300,
      'src': 'selftest'
    },
    {
      'name': 'qwen3.6-plus',
      'org': 'Alibaba',
      'score': 1461,
      'ci': 6,
      'votes': 17600,
      'src': 'selftest'
    },
    {
      'name': 'gpt-5.5 (codex-harness)',
      'org': 'OpenAI',
      'score': 1458,
      'ci': 6,
      'votes': 15000,
      'src': 'selftest'
    },
    {
      'name': 'gemini-3.1-pro-preview',
      'org': 'Google',
      'score': 1447,
      'ci': 5,
      'votes': 22900,
      'src': 'selftest'
    },
    {
      'name': 'gemini-3.5-flash-lite',
      'org': 'Google',
      'score': 1447,
      'ci': 42,
      'votes': 228,
      'src': 'selftest'
    },
    {
      'name': 'deepseek-v4-pro',
      'org': 'DeepSeek',
      'score': 1446,
      'ci': 6,
      'votes': 13200,
      'src': 'selftest'
    },
    {
      'name': 'gpt-5.4-medium (codex-harness)',
      'org': 'OpenAI',
      'score': 1443,
      'ci': 19,
      'votes': 1300,
      'src': 'selftest'
    },
    {
      'name': 'gemini-3-pro',
      'org': 'Google',
      'score': 1439,
      'ci': 9,
      'votes': 13600,
      'src': 'selftest'
    },
    {
      'name': 'gemini-3-flash',
      'org': 'Google',
      'score': 1438,
      'ci': 9,
      'votes': 10500,
      'src': 'selftest'
    },
    {
      'name': 'mimo-v2.5',
      'org': 'Xiaomi',
      'score': 1437,
      'ci': 6,
      'votes': 14100,
      'src': 'selftest'
    },
    {
      'name': 'kimi-k2.5-thinking',
      'org': 'Moonshot',
      'score': 1436,
      'ci': 5,
      'votes': 19000,
      'src': 'selftest'
    },
    {
      'name': 'glm-5',
      'org': 'Z.ai',
      'score': 1436,
      'ci': 8,
      'votes': 7100,
      'src': 'selftest'
    },
    {
      'name': 'glm-4.7',
      'org': 'Z.ai',
      'score': 1435,
      'ci': 12,
      'votes': 3800,
      'src': 'selftest'
    },
    {
      'name': 'mimo-v2-pro',
      'org': 'Xiaomi',
      'score': 1433,
      'ci': 8,
      'votes': 7000,
      'src': 'selftest'
    },
    {
      'name': 'deepseek-v4-flash-high-preview',
      'org': 'DeepSeek',
      'score': 1431,
      'ci': 7,
      'votes': 9500,
      'src': 'selftest'
    },
    {
      'name': 'gpt-5-medium',
      'org': 'OpenAI',
      'score': 1420,
      'ci': 16,
      'votes': 3000,
      'src': 'selftest'
    },
    {
      'name': 'gpt-5.2',
      'org': 'OpenAI',
      'score': 1417,
      'ci': 23,
      'votes': 1100,
      'src': 'selftest'
    },
    {
      'name': 'inkling',
      'org': 'Thinky',
      'score': 1410,
      'ci': 7,
      'votes': 9000,
      'src': 'selftest'
    },
    {
      'name': 'gpt-5.3-codex (codex-harness)',
      'org': 'OpenAI',
      'score': 1409,
      'ci': 14,
      'votes': 2500,
      'src': 'selftest'
    },
    {
      'name': 'inkling small',
      'org': 'Thinky',
      'score': 1407,
      'ci': 9,
      'votes': 5100,
      'src': 'selftest'
    },
    {
      'name': 'kimi-k2.5-instant',
      'org': 'Moonshot',
      'score': 1406,
      'ci': 12,
      'votes': 3100,
      'src': 'selftest'
    },
    {
      'name': 'glm-5v-turbo',
      'org': 'Z.ai',
      'score': 1401,
      'ci': 14,
      'votes': 2200,
      'src': 'selftest'
    },
    {
      'name': 'qwen3.5-397b-a17b',
      'org': 'Alibaba',
      'score': 1399,
      'ci': 5,
      'votes': 19900,
      'src': 'selftest'
    },
    {
      'name': 'minimax-m2.7',
      'org': 'MiniMax',
      'score': 1398,
      'ci': 6,
      'votes': 15200,
      'src': 'selftest'
    },
    {
      'name': 'gpt-5.4-mini-high',
      'org': 'OpenAI',
      'score': 1397,
      'ci': 7,
      'votes': 11300,
      'src': 'selftest'
    },
    {
      'name': 'claude-sonnet-4-5-20250929-high-32k',
      'org': 'Anthropic',
      'score': 1393,
      'ci': 8,
      'votes': 12800,
      'src': 'selftest'
    },
    {
      'name': 'gpt-5.1-medium',
      'org': 'OpenAI',
      'score': 1392,
      'ci': 12,
      'votes': 4800,
      'src': 'selftest'
    },
    {
      'name': 'claude-opus-4-1-20250805',
      'org': 'Anthropic',
      'score': 1389,
      'ci': 11,
      'votes': 6800,
      'src': 'selftest'
    },
    {
      'name': 'minimax-m2.1-preview',
      'org': 'MiniMax',
      'score': 1387,
      'ci': 10,
      'votes': 7300,
      'src': 'selftest'
    },
    {
      'name': 'gpt-5.4',
      'org': 'OpenAI',
      'score': 1387,
      'ci': 13,
      'votes': 2500,
      'src': 'selftest'
    },
    {
      'name': 'claude-sonnet-4-5-20250929',
      'org': 'Anthropic',
      'score': 1385,
      'ci': 7,
      'votes': 15200,
      'src': 'selftest'
    },
    {
      'name': 'minimax-m2.5',
      'org': 'MiniMax',
      'score': 1384,
      'ci': 8,
      'votes': 7200,
      'src': 'selftest'
    },
    {
      'name': 'gemini-3-flash (thinking-minimal)',
      'org': 'Google',
      'score': 1383,
      'ci': 5,
      'votes': 20900,
      'src': 'selftest'
    },
    {
      'name': 'grok-4.20-beta-0309-reasoning',
      'org': 'SpaceXAI',
      'score': 1374,
      'ci': 6,
      'votes': 14600,
      'src': 'selftest'
    },
    {
      'name': 'solar-pro4',
      'org': 'Upstage',
      'score': 1371,
      'ci': 17,
      'votes': 1400,
      'src': 'selftest'
    },
    {
      'name': 'gpt-5.3-codex (codex-harness)',
      'org': 'OpenAI',
      'score': 1370,
      'ci': 12,
      'votes': 3500,
      'src': 'selftest'
    },
    {
      'name': 'gemma-4-31b',
      'org': 'Google',
      'score': 1364,
      'ci': 7,
      'votes': 10100,
      'src': 'selftest'
    },
    {
      'name': 'gemma-4-26b-a4b',
      'org': 'Google',
      'score': 1361,
      'ci': 17,
      'votes': 1400,
      'src': 'selftest'
    },
    {
      'name': 'deepseek-v3.2-thinking',
      'org': 'DeepSeek',
      'score': 1361,
      'ci': 9,
      'votes': 6600,
      'src': 'selftest'
    },
    {
      'name': 'muse-glimmer',
      'org': 'Meta',
      'score': 1360,
      'ci': 16,
      'votes': 1500,
      'src': 'selftest'
    },
    {
      'name': 'qwen3.5-122b-a10b',
      'org': 'Alibaba',
      'score': 1358,
      'ci': 8,
      'votes': 7800,
      'src': 'selftest'
    },
    {
      'name': 'qwen3.5-27b',
      'org': 'Alibaba',
      'score': 1357,
      'ci': 8,
      'votes': 7400,
      'src': 'selftest'
    },
    {
      'name': 'grok-4.3',
      'org': 'SpaceXAI',
      'score': 1357,
      'ci': 6,
      'votes': 14200,
      'src': 'selftest'
    },
    {
      'name': 'hunyuan-hy3-preview',
      'org': 'Tencent',
      'score': 1356,
      'ci': 18,
      'votes': 1400,
      'src': 'selftest'
    },
    {
      'name': 'laguna-m.1',
      'org': 'Poolside',
      'score': 1347,
      'ci': 10,
      'votes': 5100,
      'src': 'selftest'
    },
    {
      'name': 'gpt-5.1',
      'org': 'OpenAI',
      'score': 1341,
      'ci': 9,
      'votes': 10300,
      'src': 'selftest'
    },
    {
      'name': 'glm-4.6',
      'org': 'Z.ai',
      'score': 1341,
      'ci': 11,
      'votes': 6600,
      'src': 'selftest'
    },
    {
      'name': 'gpt-5.2-codex',
      'org': 'OpenAI',
      'score': 1339,
      'ci': 9,
      'votes': 6400,
      'src': 'selftest'
    },
    {
      'name': 'gpt-5.1-codex',
      'org': 'OpenAI',
      'score': 1336,
      'ci': 12,
      'votes': 4900,
      'src': 'selftest'
    },
    {
      'name': 'mimo-v2-flash (non-thinking)',
      'org': 'Xiaomi',
      'score': 1331,
      'ci': 10,
      'votes': 5400,
      'src': 'selftest'
    },
    {
      'name': 'claude-haiku-4-5-20251001',
      'org': 'Anthropic',
      'score': 1329,
      'ci': 5,
      'votes': 27800,
      'src': 'selftest'
    },
    {
      'name': 'deepseek-v3.2',
      'org': 'DeepSeek',
      'score': 1325,
      'ci': 8,
      'votes': 9000,
      'src': 'selftest'
    },
    {
      'name': 'kimi-k2-thinking-turbo',
      'org': 'Moonshot',
      'score': 1323,
      'ci': 8,
      'votes': 12600,
      'src': 'selftest'
    },
    {
      'name': 'laguna-xs.2',
      'org': 'Poolside',
      'score': 1302,
      'ci': 11,
      'votes': 3900,
      'src': 'selftest'
    },
    {
      'name': 'minimax-m2',
      'org': 'MiniMax',
      'score': 1298,
      'ci': 11,
      'votes': 6500,
      'src': 'selftest'
    },
    {
      'name': 'mimo-v2-flash (thinking)',
      'org': 'Xiaomi',
      'score': 1293,
      'ci': 17,
      'votes': 1700,
      'src': 'selftest'
    },
    {
      'name': 'qwen3-coder-480b-a35b-instruct',
      'org': 'Alibaba',
      'score': 1274,
      'ci': 8,
      'votes': 12300,
      'src': 'selftest'
    },
    {
      'name': 'deepseek-v3.2-exp',
      'org': 'DeepSeek',
      'score': 1272,
      'ci': 14,
      'votes': 3900,
      'src': 'selftest'
    },
    {
      'name': 'mistral-medium-3.5',
      'org': 'Mistral',
      'score': 1265,
      'ci': 15,
      'votes': 2200,
      'src': 'selftest'
    },
    {
      'name': 'kat-coder-pro-v1',
      'org': '',
      'score': 1255,
      'ci': 20,
      'votes': 1500,
      'src': 'selftest'
    },
    {
      'name': 'gemini-3.1-flash-lite-preview',
      'org': 'Google',
      'score': 1254,
      'ci': 7,
      'votes': 13600,
      'src': 'selftest'
    },
    {
      'name': 'qwen3.5-35b-a3b',
      'org': 'Alibaba',
      'score': 1250,
      'ci': 18,
      'votes': 1500,
      'src': 'selftest'
    },
    {
      'name': 'gpt-5.1-codex-mini',
      'org': 'OpenAI',
      'score': 1244,
      'ci': 22,
      'votes': 1100,
      'src': 'selftest'
    },
    {
      'name': 'grok-4-1-fast-reasoning',
      'org': 'SpaceXAI',
      'score': 1240,
      'ci': 11,
      'votes': 5300,
      'src': 'selftest'
    },
    {
      'name': 'qwen3.5-flash',
      'org': 'Alibaba',
      'score': 1238,
      'ci': 20,
      'votes': 1300,
      'src': 'selftest'
    },
    {
      'name': 'trinity-large-thinking',
      'org': '',
      'score': 1237,
      'ci': 21,
      'votes': 1300,
      'src': 'selftest'
    },
    {
      'name': 'mistral-large-3',
      'org': 'Mistral',
      'score': 1230,
      'ci': 26,
      'votes': 812,
      'src': 'selftest'
    },
    {
      'name': 'gemini-2.5-pro',
      'org': 'Google',
      'score': 1226,
      'ci': 16,
      'votes': 2700,
      'src': 'selftest'
    },
    {
      'name': 'grok-4.1-thinking',
      'org': 'SpaceXAI',
      'score': 1211,
      'ci': 25,
      'votes': 939,
      'src': 'selftest'
    },
    {
      'name': 'devstral-2',
      'org': 'Mistral',
      'score': 1194,
      'ci': 21,
      'votes': 1100,
      'src': 'selftest'
    },
    {
      'name': 'granite-4.1-8b',
      'org': 'IBM',
      'score': 1192,
      'ci': 19,
      'votes': 1700,
      'src': 'selftest'
    },
    {
      'name': 'mercury-2',
      'org': 'Inception AI',
      'score': 1167,
      'ci': 25,
      'votes': 904,
      'src': 'selftest'
    },
    {
      'name': 'grok-code-fast-1',
      'org': 'SpaceXAI',
      'score': 1165,
      'ci': 28,
      'votes': 783,
      'src': 'selftest'
    },
    {
      'name': 'grok-4-fast-reasoning',
      'org': 'SpaceXAI',
      'score': 1161,
      'ci': 28,
      'votes': 731,
      'src': 'selftest'
    },
    {
      'name': 'devstral-medium-2507',
      'org': 'Mistral',
      'score': 1081,
      'ci': 31,
      'votes': 831,
      'src': 'selftest'
    }
  ]
};
