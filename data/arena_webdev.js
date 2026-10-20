// 数据源:LMArena Code Arena | WebDev(前端 Web 开发权威竞技场,Elo 评分)
// 官方:https://arena.ai/leaderboard/code(有 Cloudflare 防护);主抓源为每日快照官方数据的权威镜像:
//     https://m.aitntnews.com/arena/code/ (更新于 2026-10-20)
// 补充:Arena 官方公告(2026-10-19)转录 DeepSeek-V4.1-Flash-20261017 (Max) 1670 分
//     (总榜 #12、开源第一;上一版 20260910 为镜像现有的 deepseek-v4.1-flash 1618)。镜像收录后自动去重。
// 字段说明:name=模型原始名;org=厂商;score=Elo 得分;ci=±95% 置信区间;votes=投票数(近似)
// 用途:总览页「第三方实测」组基准,计入综合分与命中数(权重 22%);前端按 canonical 取最高分归入。
window.ARENA_WEBDEV = {
  'source': 'Code Arena WebDev (LMArena)',
  'officialUrl': 'https://arena.ai/leaderboard/code',
  'url': 'https://m.aitntnews.com/arena/code/',
  'updated': '2026-10-20',
  'version': 'overall',
  'metric': 'Elo score',
  'desc': 'LMArena Code Arena 前端竞技场:社区匿名盲测投票,衡量模型生成可交互 Web 应用的能力,Elo 评分(0-2000 区间)。',
  'stats': {
    'models': 146
  },
  'models': [
    {
      'name': 'claude opus 5.5 (max)',
      'org': 'Anthropic',
      'score': 1806,
      'ci': 14,
      'votes': 2900,
      'src': 'selftest'
    },
    {
      'name': 'gpt-6 astra (max)',
      'org': 'OpenAI',
      'score': 1776,
      'ci': 10,
      'votes': 6200,
      'src': 'selftest'
    },
    {
      'name': 'claude sonnet 5.5 (xhigh)',
      'org': 'Anthropic',
      'score': 1768,
      'ci': 13,
      'votes': 3300,
      'src': 'selftest'
    },
    {
      'name': 'gpt-6.1 sol (max)',
      'org': 'OpenAI',
      'score': 1754,
      'ci': 13,
      'votes': 3000,
      'src': 'selftest'
    },
    {
      'name': 'claude fable 5.1 (max)',
      'org': 'Anthropic',
      'score': 1742,
      'ci': 9,
      'votes': 7700,
      'src': 'selftest'
    },
    {
      'name': 'claude sonnet 5.5 (high)',
      'org': 'Anthropic',
      'score': 1709,
      'ci': 10,
      'votes': 5100,
      'src': 'selftest'
    },
    {
      'name': 'claude opus 5 (max)',
      'org': 'Anthropic',
      'score': 1690,
      'ci': 6,
      'votes': 18500,
      'src': 'selftest'
    },
    {
      'name': 'gpt-6 sol (max)',
      'org': 'OpenAI',
      'score': 1682,
      'ci': 10,
      'votes': 4600,
      'src': 'selftest'
    },
    {
      'name': 'gemini 4 argon (high)',
      'org': 'Google',
      'score': 1678,
      'ci': 15,
      'votes': 1800,
      'src': 'selftest'
    },
    {
      'name': 'qwen3.8-max (0902)',
      'org': 'Alibaba',
      'score': 1674,
      'ci': 7,
      'votes': 14200,
      'src': 'selftest'
    },
    {
      'name': 'qwen3.8-max',
      'org': 'Alibaba',
      'score': 1673,
      'ci': 12,
      'votes': 3400,
      'src': 'selftest'
    },
    {
      'name': 'deepseek-v4.1-flash-20261017 (max)',
      'org': 'DeepSeek',
      'score': 1670,
      'ci': 17,
      'votes': 1400,
      'src': 'selftest'
    },
    {
      'name': 'muse spark 1.3 (max)',
      'org': 'Meta',
      'score': 1659,
      'ci': 8,
      'votes': 9300,
      'src': 'selftest'
    },
    {
      'name': 'claude opus 5 (high)',
      'org': 'Anthropic',
      'score': 1658,
      'ci': 5,
      'votes': 24500,
      'src': 'selftest'
    },
    {
      'name': 'kimi k3 (max)',
      'org': 'Moonshot',
      'score': 1655,
      'ci': 6,
      'votes': 19400,
      'src': 'selftest'
    },
    {
      'name': 'muse wonder (max)',
      'org': 'Meta',
      'score': 1650,
      'ci': 14,
      'votes': 2200,
      'src': 'selftest'
    },
    {
      'name': 'grok 4.7 (xhigh)',
      'org': 'SpaceXAI',
      'score': 1638,
      'ci': 10,
      'votes': 5200,
      'src': 'selftest'
    },
    {
      'name': 'mimo-v2.6-flash',
      'org': 'Xiaomi',
      'score': 1633,
      'ci': 10,
      'votes': 5200,
      'src': 'selftest'
    },
    {
      'name': 'hy4 preview',
      'org': 'Tencent',
      'score': 1631,
      'ci': 10,
      'votes': 4800,
      'src': 'selftest'
    },
    {
      'name': 'qwen3.8-flash-next',
      'org': 'Alibaba',
      'score': 1629,
      'ci': 8,
      'votes': 8300,
      'src': 'selftest'
    },
    {
      'name': 'mimo-v2.6-pro',
      'org': 'Xiaomi',
      'score': 1626,
      'ci': 10,
      'votes': 5000,
      'src': 'selftest'
    },
    {
      'name': 'claude fable 5 (high)',
      'org': 'Anthropic',
      'score': 1624,
      'ci': 6,
      'votes': 15800,
      'src': 'selftest'
    },
    {
      'name': 'glm-5.3 (max)',
      'org': 'Z.ai',
      'score': 1622,
      'ci': 8,
      'votes': 9700,
      'src': 'selftest'
    },
    {
      'name': 'muse spark 1.3 (xhigh)',
      'org': 'Meta',
      'score': 1621,
      'ci': 8,
      'votes': 8600,
      'src': 'selftest'
    },
    {
      'name': 'deepseek-v4.1-flash-20260910 (max)',
      'org': 'DeepSeek',
      'score': 1619,
      'ci': 11,
      'votes': 3500,
      'src': 'selftest'
    },
    {
      'name': 'grok 4.6 (high)',
      'org': 'SpaceXAI',
      'score': 1617,
      'ci': 7,
      'votes': 10400,
      'src': 'selftest'
    },
    {
      'name': 'gpt-5.6 sol (xhigh, codex harness)',
      'org': 'OpenAI',
      'score': 1616,
      'ci': 6,
      'votes': 17800,
      'src': 'selftest'
    },
    {
      'name': 'glm-5.3-flash',
      'org': 'Z.ai',
      'score': 1607,
      'ci': 7,
      'votes': 18000,
      'src': 'selftest'
    },
    {
      'name': 'glm-5.2 (max)',
      'org': 'Z.ai',
      'score': 1604,
      'ci': 6,
      'votes': 16600,
      'src': 'selftest'
    },
    {
      'name': 'qwen3.8-27b',
      'org': 'Alibaba',
      'score': 1592,
      'ci': 7,
      'votes': 16200,
      'src': 'selftest'
    },
    {
      'name': 'gemini 3.7 flash (high)',
      'org': 'Google',
      'score': 1590,
      'ci': 7,
      'votes': 12500,
      'src': 'selftest'
    },
    {
      'name': 'claude haiku 5.5 (high)',
      'org': 'Anthropic',
      'score': 1586,
      'ci': 11,
      'votes': 3400,
      'src': 'selftest'
    },
    {
      'name': 'gemini 3.8 flash (high)',
      'org': 'Google',
      'score': 1586,
      'ci': 7,
      'votes': 10700,
      'src': 'selftest'
    },
    {
      'name': 'deepseek-v4-flash (high)',
      'org': 'DeepSeek',
      'score': 1582,
      'ci': 9,
      'votes': 5000,
      'src': 'selftest'
    },
    {
      'name': 'deepseek-v4-pro (high, 20260813)',
      'org': 'DeepSeek',
      'score': 1582,
      'ci': 9,
      'votes': 4700,
      'src': 'selftest'
    },
    {
      'name': 'gpt-6 luna (max)',
      'org': 'OpenAI',
      'score': 1577,
      'ci': 6,
      'votes': 20800,
      'src': 'selftest'
    },
    {
      'name': 'step 5 preview (high)',
      'org': 'StepFun',
      'score': 1565,
      'ci': 10,
      'votes': 4600,
      'src': 'selftest'
    },
    {
      'name': 'claude opus 4.7 (high)',
      'org': 'Anthropic',
      'score': 1558,
      'ci': 6,
      'votes': 17900,
      'src': 'selftest'
    },
    {
      'name': 'claude opus 4.8 (high)',
      'org': 'Anthropic',
      'score': 1556,
      'ci': 6,
      'votes': 18500,
      'src': 'selftest'
    },
    {
      'name': 'claude opus 4.7',
      'org': 'Anthropic',
      'score': 1556,
      'ci': 6,
      'votes': 18200,
      'src': 'selftest'
    },
    {
      'name': 'grok 4.5',
      'org': 'SpaceXAI',
      'score': 1553,
      'ci': 7,
      'votes': 11100,
      'src': 'selftest'
    },
    {
      'name': 'claude opus 4.6 (high)',
      'org': 'Anthropic',
      'score': 1547,
      'ci': 5,
      'votes': 19400,
      'src': 'selftest'
    },
    {
      'name': 'muse spark 1.1',
      'org': 'Meta',
      'score': 1543,
      'ci': 8,
      'votes': 8000,
      'src': 'selftest'
    },
    {
      'name': 'mistral large 4',
      'org': 'Mistral',
      'score': 1542,
      'ci': 12,
      'votes': 2700,
      'src': 'selftest'
    },
    {
      'name': 'claude sonnet 5 (high)',
      'org': 'Anthropic',
      'score': 1541,
      'ci': 6,
      'votes': 15700,
      'src': 'selftest'
    },
    {
      'name': 'gemini 3.6 flash (high)',
      'org': 'Google',
      'score': 1538,
      'ci': 7,
      'votes': 8800,
      'src': 'selftest'
    },
    {
      'name': 'claude opus 4.6',
      'org': 'Anthropic',
      'score': 1537,
      'ci': 5,
      'votes': 20600,
      'src': 'selftest'
    },
    {
      'name': 'claude opus 4.8',
      'org': 'Anthropic',
      'score': 1536,
      'ci': 6,
      'votes': 17400,
      'src': 'selftest'
    },
    {
      'name': 'muse spark 1.2 (xhigh)',
      'org': 'Meta',
      'score': 1534,
      'ci': 14,
      'votes': 2200,
      'src': 'selftest'
    },
    {
      'name': 'muse spark open (max)',
      'org': 'Meta',
      'score': 1524,
      'ci': 17,
      'votes': 1300,
      'src': 'selftest'
    },
    {
      'name': 'claude sonnet 4.6',
      'org': 'Anthropic',
      'score': 1523,
      'ci': 5,
      'votes': 22800,
      'src': 'selftest'
    },
    {
      'name': 'gpt-5.6 terra (xhigh, codex harness)',
      'org': 'OpenAI',
      'score': 1522,
      'ci': 6,
      'votes': 13900,
      'src': 'selftest'
    },
    {
      'name': 'seed2.1 pro preview',
      'org': 'Bytedance',
      'score': 1520,
      'ci': 6,
      'votes': 15000,
      'src': 'selftest'
    },
    {
      'name': 'gpt-5.6 luna (xhigh, codex harness)',
      'org': 'OpenAI',
      'score': 1519,
      'ci': 6,
      'votes': 12600,
      'src': 'selftest'
    },
    {
      'name': 'qwen3.7-max (20260517)',
      'org': 'Alibaba',
      'score': 1516,
      'ci': 7,
      'votes': 8900,
      'src': 'selftest'
    },
    {
      'name': 'gpt-5.5 (xhigh, codex harness)',
      'org': 'OpenAI',
      'score': 1513,
      'ci': 6,
      'votes': 15600,
      'src': 'selftest'
    },
    {
      'name': 'kimi k2.6',
      'org': 'Moonshot',
      'score': 1510,
      'ci': 7,
      'votes': 10200,
      'src': 'selftest'
    },
    {
      'name': 'glm-5.1',
      'org': 'Z.ai',
      'score': 1508,
      'ci': 7,
      'votes': 10700,
      'src': 'selftest'
    },
    {
      'name': 'hy3',
      'org': 'Tencent',
      'score': 1507,
      'ci': 8,
      'votes': 6200,
      'src': 'selftest'
    },
    {
      'name': 'gemini-3.5-flash',
      'org': 'Google',
      'score': 1505,
      'ci': 15,
      'votes': 1800,
      'src': 'selftest'
    },
    {
      'name': 'gemini 3.5 flash (high)',
      'org': 'Google',
      'score': 1499,
      'ci': 7,
      'votes': 9400,
      'src': 'selftest'
    },
    {
      'name': 'claude opus 4.5 (high, 32k, 20251101)',
      'org': 'Anthropic',
      'score': 1494,
      'ci': 8,
      'votes': 11000,
      'src': 'selftest'
    },
    {
      'name': 'gemini 3.5 flash (medium)',
      'org': 'Google',
      'score': 1491,
      'ci': 7,
      'votes': 12100,
      'src': 'selftest'
    },
    {
      'name': 'gpt-5.5 (high, codex harness)',
      'org': 'OpenAI',
      'score': 1487,
      'ci': 6,
      'votes': 18000,
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
      'name': 'minimax-m3',
      'org': 'MiniMax',
      'score': 1482,
      'ci': 6,
      'votes': 19700,
      'src': 'selftest'
    },
    {
      'name': 'mimo-v2.5-pro',
      'org': 'Xiaomi',
      'score': 1481,
      'ci': 5,
      'votes': 22400,
      'src': 'selftest'
    },
    {
      'name': 'kimi k2.7 code',
      'org': 'Moonshot',
      'score': 1474,
      'ci': 9,
      'votes': 5000,
      'src': 'selftest'
    },
    {
      'name': 'claude opus 4.5 (20251101)',
      'org': 'Anthropic',
      'score': 1469,
      'ci': 7,
      'votes': 13400,
      'src': 'selftest'
    },
    {
      'name': 'deepseek-v4-pro preview (high)',
      'org': 'DeepSeek',
      'score': 1465,
      'ci': 6,
      'votes': 13200,
      'src': 'selftest'
    },
    {
      'name': 'gpt-5.4 (high, codex harness)',
      'org': 'OpenAI',
      'score': 1464,
      'ci': 19,
      'votes': 1400,
      'src': 'selftest'
    },
    {
      'name': 'qwen3.6-plus',
      'org': 'Alibaba',
      'score': 1462,
      'ci': 6,
      'votes': 18600,
      'src': 'selftest'
    },
    {
      'name': 'gpt-5.5 (codex harness)',
      'org': 'OpenAI',
      'score': 1456,
      'ci': 6,
      'votes': 15900,
      'src': 'selftest'
    },
    {
      'name': 'deepseek-v4-pro',
      'org': 'DeepSeek',
      'score': 1447,
      'ci': 6,
      'votes': 14000,
      'src': 'selftest'
    },
    {
      'name': 'gemini 3.1 pro preview',
      'org': 'Google',
      'score': 1447,
      'ci': 5,
      'votes': 24200,
      'src': 'selftest'
    },
    {
      'name': 'gpt-5.4 (medium, codex harness)',
      'org': 'OpenAI',
      'score': 1444,
      'ci': 18,
      'votes': 1400,
      'src': 'selftest'
    },
    {
      'name': 'gemini 3 pro',
      'org': 'Google',
      'score': 1440,
      'ci': 8,
      'votes': 14100,
      'src': 'selftest'
    },
    {
      'name': 'gemini 3 flash',
      'org': 'Google',
      'score': 1440,
      'ci': 9,
      'votes': 10900,
      'src': 'selftest'
    },
    {
      'name': 'mimo-v2.5',
      'org': 'Xiaomi',
      'score': 1439,
      'ci': 6,
      'votes': 14900,
      'src': 'selftest'
    },
    {
      'name': 'beam-1.0-501b-a23b',
      'org': 'Reflection',
      'score': 1437,
      'ci': 13,
      'votes': 2900,
      'src': 'selftest'
    },
    {
      'name': 'kimi k2.5 (thinking)',
      'org': 'Moonshot',
      'score': 1437,
      'ci': 5,
      'votes': 20100,
      'src': 'selftest'
    },
    {
      'name': 'glm-5',
      'org': 'Z.ai',
      'score': 1436,
      'ci': 8,
      'votes': 7500,
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
      'name': 'gemini 3.5 flash-lite',
      'org': 'Google',
      'score': 1435,
      'ci': 41,
      'votes': 238,
      'src': 'selftest'
    },
    {
      'name': 'mimo-v2-pro',
      'org': 'Xiaomi',
      'score': 1434,
      'ci': 8,
      'votes': 7200,
      'src': 'selftest'
    },
    {
      'name': 'deepseek-v4-flash preview (high)',
      'org': 'DeepSeek',
      'score': 1431,
      'ci': 7,
      'votes': 10100,
      'src': 'selftest'
    },
    {
      'name': 'gpt-5 (medium)',
      'org': 'OpenAI',
      'score': 1418,
      'ci': 16,
      'votes': 3100,
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
      'score': 1414,
      'ci': 6,
      'votes': 15700,
      'src': 'selftest'
    },
    {
      'name': 'inkling-small',
      'org': 'Thinky',
      'score': 1410,
      'ci': 9,
      'votes': 5300,
      'src': 'selftest'
    },
    {
      'name': 'gpt-5.3-codex (codex harness)',
      'org': 'OpenAI',
      'score': 1407,
      'ci': 14,
      'votes': 2600,
      'src': 'selftest'
    },
    {
      'name': 'kimi k2.5 (instant)',
      'org': 'Moonshot',
      'score': 1406,
      'ci': 12,
      'votes': 3300,
      'src': 'selftest'
    },
    {
      'name': 'glm-5v-turbo',
      'org': 'Z.ai',
      'score': 1402,
      'ci': 13,
      'votes': 2400,
      'src': 'selftest'
    },
    {
      'name': 'gpt-5.4',
      'org': 'OpenAI',
      'score': 1401,
      'ci': 10,
      'votes': 4100,
      'src': 'selftest'
    },
    {
      'name': 'qwen3.5-397b-a17b',
      'org': 'Alibaba',
      'score': 1400,
      'ci': 5,
      'votes': 21200,
      'src': 'selftest'
    },
    {
      'name': 'minimax-m2.7',
      'org': 'MiniMax',
      'score': 1399,
      'ci': 6,
      'votes': 16000,
      'src': 'selftest'
    },
    {
      'name': 'gpt-5.4 mini (high)',
      'org': 'OpenAI',
      'score': 1398,
      'ci': 7,
      'votes': 11900,
      'src': 'selftest'
    },
    {
      'name': 'gpt-5.1 (medium)',
      'org': 'OpenAI',
      'score': 1396,
      'ci': 12,
      'votes': 4900,
      'src': 'selftest'
    },
    {
      'name': 'claude sonnet 4.5 (high, 32k, 20250929)',
      'org': 'Anthropic',
      'score': 1394,
      'ci': 8,
      'votes': 13300,
      'src': 'selftest'
    },
    {
      'name': 'claude opus 4.1 (20250805)',
      'org': 'Anthropic',
      'score': 1391,
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
      'name': 'claude sonnet 4.5 (20250929)',
      'org': 'Anthropic',
      'score': 1385,
      'ci': 7,
      'votes': 15700,
      'src': 'selftest'
    },
    {
      'name': 'gemini 3 flash (minimal)',
      'org': 'Google',
      'score': 1385,
      'ci': 5,
      'votes': 22100,
      'src': 'selftest'
    },
    {
      'name': 'minimax-m2.1 preview',
      'org': 'MiniMax',
      'score': 1384,
      'ci': 10,
      'votes': 7600,
      'src': 'selftest'
    },
    {
      'name': 'grok 4.20 beta (reasoning, 0309)',
      'org': 'SpaceXAI',
      'score': 1376,
      'ci': 6,
      'votes': 15400,
      'src': 'selftest'
    },
    {
      'name': 'gpt-5.3-codex (codex harness)',
      'org': 'OpenAI',
      'score': 1371,
      'ci': 11,
      'votes': 3700,
      'src': 'selftest'
    },
    {
      'name': 'solar pro 4',
      'org': 'Upstage',
      'score': 1371,
      'ci': 10,
      'votes': 4700,
      'src': 'selftest'
    },
    {
      'name': 'gemma 4 31b',
      'org': 'Google',
      'score': 1368,
      'ci': 6,
      'votes': 14600,
      'src': 'selftest'
    },
    {
      'name': 'deepseek-v3.2 (thinking)',
      'org': 'DeepSeek',
      'score': 1363,
      'ci': 9,
      'votes': 6900,
      'src': 'selftest'
    },
    {
      'name': 'qwen3.5-122b-a10b',
      'org': 'Alibaba',
      'score': 1361,
      'ci': 8,
      'votes': 8200,
      'src': 'selftest'
    },
    {
      'name': 'gemma 4 26b a4b',
      'org': 'Google',
      'score': 1360,
      'ci': 17,
      'votes': 1500,
      'src': 'selftest'
    },
    {
      'name': 'qwen3.5-27b',
      'org': 'Alibaba',
      'score': 1358,
      'ci': 8,
      'votes': 7800,
      'src': 'selftest'
    },
    {
      'name': 'grok 4.3',
      'org': 'SpaceXAI',
      'score': 1358,
      'ci': 6,
      'votes': 14900,
      'src': 'selftest'
    },
    {
      'name': 'hy3 preview',
      'org': 'Tencent',
      'score': 1357,
      'ci': 17,
      'votes': 1400,
      'src': 'selftest'
    },
    {
      'name': 'muse glimmer',
      'org': 'Meta',
      'score': 1355,
      'ci': 16,
      'votes': 1600,
      'src': 'selftest'
    },
    {
      'name': 'laguna m.1',
      'org': 'Poolside',
      'score': 1350,
      'ci': 9,
      'votes': 5400,
      'src': 'selftest'
    },
    {
      'name': 'gpt-5.1',
      'org': 'OpenAI',
      'score': 1342,
      'ci': 8,
      'votes': 10700,
      'src': 'selftest'
    },
    {
      'name': 'glm-4.6',
      'org': 'Z.ai',
      'score': 1341,
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
      'name': 'claude haiku 4.5 (20251001)',
      'org': 'Anthropic',
      'score': 1330,
      'ci': 5,
      'votes': 29100,
      'src': 'selftest'
    },
    {
      'name': 'deepseek-v3.2',
      'org': 'DeepSeek',
      'score': 1326,
      'ci': 8,
      'votes': 9400,
      'src': 'selftest'
    },
    {
      'name': 'kimi k2 thinking turbo',
      'org': 'Moonshot',
      'score': 1322,
      'ci': 7,
      'votes': 13100,
      'src': 'selftest'
    },
    {
      'name': 'laguna xs.2',
      'org': 'Poolside',
      'score': 1303,
      'ci': 11,
      'votes': 4200,
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
      'score': 1293,
      'ci': 16,
      'votes': 1700,
      'src': 'selftest'
    },
    {
      'name': 'qwen3-coder-480b-a35b-instruct',
      'org': 'Alibaba',
      'score': 1275,
      'ci': 8,
      'votes': 12700,
      'src': 'selftest'
    },
    {
      'name': 'deepseek-v3.2-exp',
      'org': 'DeepSeek',
      'score': 1272,
      'ci': 14,
      'votes': 4000,
      'src': 'selftest'
    },
    {
      'name': 'mistral medium 3.5',
      'org': 'Mistral',
      'score': 1264,
      'ci': 15,
      'votes': 2300,
      'src': 'selftest'
    },
    {
      'name': 'gemini 3.1 flash-lite preview',
      'org': 'Google',
      'score': 1257,
      'ci': 7,
      'votes': 14400,
      'src': 'selftest'
    },
    {
      'name': 'kat-coder-pro v1',
      'org': '',
      'score': 1256,
      'ci': 19,
      'votes': 1500,
      'src': 'selftest'
    },
    {
      'name': 'qwen3.5-35b-a3b',
      'org': 'Alibaba',
      'score': 1254,
      'ci': 17,
      'votes': 1600,
      'src': 'selftest'
    },
    {
      'name': 'qwen3.5-flash',
      'org': 'Alibaba',
      'score': 1244,
      'ci': 20,
      'votes': 1300,
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
      'name': 'grok 4.1 fast (reasoning)',
      'org': 'SpaceXAI',
      'score': 1242,
      'ci': 11,
      'votes': 5500,
      'src': 'selftest'
    },
    {
      'name': 'trinity large thinking',
      'org': '',
      'score': 1238,
      'ci': 20,
      'votes': 1400,
      'src': 'selftest'
    },
    {
      'name': 'mistral large 3',
      'org': 'Mistral',
      'score': 1230,
      'ci': 25,
      'votes': 839,
      'src': 'selftest'
    },
    {
      'name': 'gemini 2.5 pro',
      'org': 'Google',
      'score': 1226,
      'ci': 16,
      'votes': 2700,
      'src': 'selftest'
    },
    {
      'name': 'grok 4.1 (thinking)',
      'org': 'SpaceXAI',
      'score': 1215,
      'ci': 25,
      'votes': 961,
      'src': 'selftest'
    },
    {
      'name': 'devstral 2',
      'org': 'Mistral',
      'score': 1197,
      'ci': 21,
      'votes': 1200,
      'src': 'selftest'
    },
    {
      'name': 'granite 4.1 8b',
      'org': 'IBM',
      'score': 1193,
      'ci': 18,
      'votes': 1800,
      'src': 'selftest'
    },
    {
      'name': 'mercury 2',
      'org': 'Inception AI',
      'score': 1171,
      'ci': 25,
      'votes': 954,
      'src': 'selftest'
    },
    {
      'name': 'grok code fast 1',
      'org': 'SpaceXAI',
      'score': 1166,
      'ci': 28,
      'votes': 789,
      'src': 'selftest'
    },
    {
      'name': 'grok 4 fast (reasoning)',
      'org': 'SpaceXAI',
      'score': 1160,
      'ci': 27,
      'votes': 743,
      'src': 'selftest'
    },
    {
      'name': 'devstral medium (2507)',
      'org': 'Mistral',
      'score': 1072,
      'ci': 31,
      'votes': 842,
      'src': 'selftest'
    }
  ]
};
