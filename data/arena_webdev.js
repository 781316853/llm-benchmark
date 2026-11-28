// 数据源:LMArena Code Arena | WebDev(前端 Web 开发权威竞技场,Elo 评分)
// 官方:https://arena.ai/leaderboard/code(Cloudflare 防护,直连 403);主抓源(2026-11-26 起):
//     https://llmbenchmark.ai/benchmarks/lmarena-webdev (源页数据日期 2026-11-28)
// 回退源:https://m.aitntnews.com/arena/code/(快照停在 2026-11-14,仅主源失败时兜底,不混排)
// 说明:updated 取源页 JSON-LD 的 dateModified/temporalCoverage(榜单数据日期),不是抓取日。
// 补充:Arena 官方公告(2026-10-19)转录 DeepSeek-V4.1-Flash-20261017 (Max) 1670 分;
//     主源已收录同名条目后按 seedKey 自动去重。
// 字段说明:name=模型原始名;org=厂商;score=Elo 得分;ci=±95% 置信区间;votes=投票数(近似)
// 用途:总览页「第三方实测」组基准之一,十组等权计入综合分与命中数;前端按 canonical 取最高分归入。
window.ARENA_WEBDEV = {
  'source': 'Code Arena WebDev (LMArena)',
  'officialUrl': 'https://arena.ai/leaderboard/code',
  'url': 'https://llmbenchmark.ai/benchmarks/lmarena-webdev',
  'updated': '2026-11-28',
  'version': 'overall',
  'metric': 'Elo score',
  'desc': 'LMArena Code Arena 前端竞技场:社区匿名盲测投票,衡量模型生成可交互 Web 应用的能力,Elo 评分(0-2000 区间)。',
  'stats': {
    'models': 114
  },
  'models': [
    {
      'name': 'Claude Fable 5.2',
      'org': 'Anthropic',
      'score': 1822,
      'ci': 15.3,
      'votes': 2159,
      'src': 'llmbenchmark'
    },
    {
      'name': 'Claude Opus 5.5',
      'org': 'Anthropic',
      'score': 1820,
      'ci': 10.7,
      'votes': 5121,
      'src': 'llmbenchmark'
    },
    {
      'name': 'Claude Sonnet 5.5',
      'org': 'Anthropic',
      'score': 1773,
      'ci': 9.1,
      'votes': 6973,
      'src': 'llmbenchmark'
    },
    {
      'name': 'Gemini 4 Carbon',
      'org': 'Google',
      'score': 1769,
      'ci': 15.4,
      'votes': 2091,
      'src': 'llmbenchmark'
    },
    {
      'name': 'Gemini 4 Neon',
      'org': 'Google',
      'score': 1765,
      'ci': 13.7,
      'votes': 2308,
      'src': 'llmbenchmark'
    },
    {
      'name': 'GPT-6 Astra',
      'org': 'OpenAI',
      'score': 1764,
      'ci': 8.1,
      'votes': 9541,
      'src': 'llmbenchmark'
    },
    {
      'name': 'GPT-6.2 Astra',
      'org': 'OpenAI',
      'score': 1761,
      'ci': 14.4,
      'votes': 2170,
      'src': 'llmbenchmark'
    },
    {
      'name': 'GPT-6.2 Sol',
      'org': 'OpenAI',
      'score': 1755,
      'ci': 13.8,
      'votes': 2336,
      'src': 'llmbenchmark'
    },
    {
      'name': 'Qwen4 Max',
      'org': 'Qwen',
      'score': 1752,
      'ci': 15.5,
      'votes': 1794,
      'src': 'llmbenchmark'
    },
    {
      'name': 'GPT-6.1 Sol',
      'org': 'OpenAI',
      'score': 1745,
      'ci': 9,
      'votes': 6737,
      'src': 'llmbenchmark'
    },
    {
      'name': 'Claude Fable 5.1',
      'org': 'Anthropic',
      'score': 1742,
      'ci': 7.5,
      'votes': 10805,
      'src': 'llmbenchmark'
    },
    {
      'name': 'Gemini 4 Hydrogen',
      'org': 'Google',
      'score': 1701,
      'ci': 14.3,
      'votes': 2012,
      'src': 'llmbenchmark'
    },
    {
      'name': 'Claude Opus 5',
      'org': 'Anthropic',
      'score': 1692,
      'ci': 6.1,
      'votes': 19435,
      'src': 'llmbenchmark'
    },
    {
      'name': 'GPT-6.1 Terra',
      'org': 'OpenAI',
      'score': 1686,
      'ci': 9.3,
      'votes': 5462,
      'src': 'llmbenchmark'
    },
    {
      'name': 'Kimi K3.1 Pro',
      'org': 'Moonshot AI',
      'score': 1683,
      'ci': 8.8,
      'votes': 6207,
      'src': 'llmbenchmark'
    },
    {
      'name': 'Gemini 4 Argon',
      'org': 'Google',
      'score': 1682,
      'ci': 8.8,
      'votes': 6227,
      'src': 'llmbenchmark'
    },
    {
      'name': 'GPT-6 Sol',
      'org': 'OpenAI',
      'score': 1675,
      'ci': 7.8,
      'votes': 8574,
      'src': 'llmbenchmark'
    },
    {
      'name': 'Qwen3.8 Max (0902)',
      'org': 'Qwen',
      'score': 1673,
      'ci': 5.8,
      'votes': 26061,
      'src': 'llmbenchmark'
    },
    {
      'name': 'DeepSeek V4.1 Flash 1017',
      'org': 'DeepSeek',
      'score': 1659,
      'ci': 6.3,
      'votes': 18638,
      'src': 'llmbenchmark'
    },
    {
      'name': 'Kimi K3',
      'org': 'Moonshot AI',
      'score': 1658,
      'ci': 5.6,
      'votes': 23561,
      'src': 'llmbenchmark'
    },
    {
      'name': 'Muse Spark 1.3',
      'org': 'Meta',
      'score': 1652,
      'ci': 6.7,
      'votes': 13627,
      'src': 'llmbenchmark'
    },
    {
      'name': 'Hy4',
      'org': 'Tencent',
      'score': 1650,
      'ci': 12,
      'votes': 2909,
      'src': 'llmbenchmark'
    },
    {
      'name': 'Muse Wonder',
      'org': 'Meta',
      'score': 1646,
      'ci': 8.4,
      'votes': 6833,
      'src': 'llmbenchmark'
    },
    {
      'name': 'Inkling 2 Small',
      'org': 'Thinking Machines',
      'score': 1642,
      'ci': 17.6,
      'votes': 1214,
      'src': 'llmbenchmark'
    },
    {
      'name': 'Grok 4.7',
      'org': 'xAI',
      'score': 1639,
      'ci': 7.4,
      'votes': 9526,
      'src': 'llmbenchmark'
    },
    {
      'name': 'MiMo-V2.6-Flash',
      'org': 'Xiaomi',
      'score': 1637,
      'ci': 7.3,
      'votes': 10215,
      'src': 'llmbenchmark'
    },
    {
      'name': 'Hy4 preview',
      'org': 'Tencent',
      'score': 1631,
      'ci': 9.8,
      'votes': 4562,
      'src': 'llmbenchmark'
    },
    {
      'name': 'Claude Fable 5',
      'org': 'Anthropic',
      'score': 1626,
      'ci': 6,
      'votes': 16844,
      'src': 'llmbenchmark'
    },
    {
      'name': 'GLM 5.3',
      'org': 'Z.ai',
      'score': 1623,
      'ci': 6.6,
      'votes': 13948,
      'src': 'llmbenchmark'
    },
    {
      'name': 'MiMo-V2.6-Pro',
      'org': 'Xiaomi',
      'score': 1622,
      'ci': 7.2,
      'votes': 10521,
      'src': 'llmbenchmark'
    },
    {
      'name': 'DeepSeek V4.1 Flash',
      'org': 'DeepSeek',
      'score': 1621,
      'ci': 11.2,
      'votes': 3359,
      'src': 'llmbenchmark'
    },
    {
      'name': 'Grok 4.6',
      'org': 'xAI',
      'score': 1618,
      'ci': 6.9,
      'votes': 12088,
      'src': 'llmbenchmark'
    },
    {
      'name': 'GPT-5.6 Sol',
      'org': 'OpenAI',
      'score': 1616,
      'ci': 5.7,
      'votes': 18750,
      'src': 'llmbenchmark'
    },
    {
      'name': 'GLM 5.3 Flash',
      'org': 'Z.ai',
      'score': 1611,
      'ci': 6,
      'votes': 25005,
      'src': 'llmbenchmark'
    },
    {
      'name': 'Muse Ember',
      'org': 'Meta',
      'score': 1607,
      'ci': 16.9,
      'votes': 1318,
      'src': 'llmbenchmark'
    },
    {
      'name': 'GLM 5.2',
      'org': 'Z.ai',
      'score': 1607,
      'ci': 5.9,
      'votes': 17818,
      'src': 'llmbenchmark'
    },
    {
      'name': 'Claude Haiku 5.5',
      'org': 'Anthropic',
      'score': 1595,
      'ci': 7.7,
      'votes': 8776,
      'src': 'llmbenchmark'
    },
    {
      'name': 'Qwen3.8 27B',
      'org': 'Qwen',
      'score': 1590,
      'ci': 5.9,
      'votes': 22378,
      'src': 'llmbenchmark'
    },
    {
      'name': 'Gemini 3.7 Flash',
      'org': 'Google',
      'score': 1589,
      'ci': 6.5,
      'votes': 14472,
      'src': 'llmbenchmark'
    },
    {
      'name': 'Gemini 3.8 Flash',
      'org': 'Google',
      'score': 1584,
      'ci': 6.3,
      'votes': 15356,
      'src': 'llmbenchmark'
    },
    {
      'name': 'DeepSeek V4 Flash 0423',
      'org': 'DeepSeek',
      'score': 1582,
      'ci': 9.4,
      'votes': 4798,
      'src': 'llmbenchmark'
    },
    {
      'name': 'MiniMax M3.1 Flash',
      'org': 'MiniMax',
      'score': 1582,
      'ci': 8.7,
      'votes': 6187,
      'src': 'llmbenchmark'
    },
    {
      'name': 'DeepSeek V4 Pro 0813',
      'org': 'DeepSeek',
      'score': 1581,
      'ci': 9.5,
      'votes': 4592,
      'src': 'llmbenchmark'
    },
    {
      'name': 'GPT-6 Luna',
      'org': 'OpenAI',
      'score': 1579,
      'ci': 5.8,
      'votes': 32623,
      'src': 'llmbenchmark'
    },
    {
      'name': 'Mistral Large 4',
      'org': 'Mistral AI',
      'score': 1572,
      'ci': 12,
      'votes': 2950,
      'src': 'llmbenchmark'
    },
    {
      'name': 'Step 5 Preview',
      'org': 'StepFun',
      'score': 1570,
      'ci': 7.8,
      'votes': 8315,
      'src': 'llmbenchmark'
    },
    {
      'name': 'Inkling 2 Mini',
      'org': 'Thinking Machines',
      'score': 1560,
      'ci': 17.2,
      'votes': 1312,
      'src': 'llmbenchmark'
    },
    {
      'name': 'Claude Opus 4.7',
      'org': 'Anthropic',
      'score': 1557,
      'ci': 5.8,
      'votes': 17544,
      'src': 'llmbenchmark'
    },
    {
      'name': 'Claude Opus 4.8',
      'org': 'Anthropic',
      'score': 1556,
      'ci': 5.8,
      'votes': 17912,
      'src': 'llmbenchmark'
    },
    {
      'name': 'Grok 4.5',
      'org': 'xAI',
      'score': 1552,
      'ci': 6.7,
      'votes': 10737,
      'src': 'llmbenchmark'
    },
    {
      'name': 'Claude Opus 4.6',
      'org': 'Anthropic',
      'score': 1546,
      'ci': 5.5,
      'votes': 19016,
      'src': 'llmbenchmark'
    },
    {
      'name': 'Muse Spark 1.1',
      'org': 'Meta',
      'score': 1541,
      'ci': 7.7,
      'votes': 7795,
      'src': 'llmbenchmark'
    },
    {
      'name': 'Claude Sonnet 5',
      'org': 'Anthropic',
      'score': 1539,
      'ci': 5.8,
      'votes': 16656,
      'src': 'llmbenchmark'
    },
    {
      'name': 'Gemini 3.6 Flash',
      'org': 'Google',
      'score': 1538,
      'ci': 7.6,
      'votes': 8454,
      'src': 'llmbenchmark'
    },
    {
      'name': 'Muse Spark 1.2',
      'org': 'Meta',
      'score': 1533,
      'ci': 13.8,
      'votes': 2112,
      'src': 'llmbenchmark'
    },
    {
      'name': 'Muse Spark Open',
      'org': 'Meta',
      'score': 1527,
      'ci': 14.1,
      'votes': 2038,
      'src': 'llmbenchmark'
    },
    {
      'name': 'Claude Sonnet 4.6',
      'org': 'Anthropic',
      'score': 1522,
      'ci': 5.2,
      'votes': 22515,
      'src': 'llmbenchmark'
    },
    {
      'name': 'GPT-5.6 Terra',
      'org': 'OpenAI',
      'score': 1520,
      'ci': 6.1,
      'votes': 15347,
      'src': 'llmbenchmark'
    },
    {
      'name': 'GPT-5.6 Luna',
      'org': 'OpenAI',
      'score': 1519,
      'ci': 6.5,
      'votes': 12115,
      'src': 'llmbenchmark'
    },
    {
      'name': 'Qwen3.7 Max',
      'org': 'Qwen',
      'score': 1516,
      'ci': 7.4,
      'votes': 8708,
      'src': 'llmbenchmark'
    },
    {
      'name': 'GPT-5.5',
      'org': 'OpenAI',
      'score': 1513,
      'ci': 6,
      'votes': 15339,
      'src': 'llmbenchmark'
    },
    {
      'name': 'Kimi K2.6',
      'org': 'Moonshot AI',
      'score': 1509,
      'ci': 7.3,
      'votes': 9993,
      'src': 'llmbenchmark'
    },
    {
      'name': 'GLM 5.1',
      'org': 'Z.ai',
      'score': 1508,
      'ci': 6.8,
      'votes': 10497,
      'src': 'llmbenchmark'
    },
    {
      'name': 'Hy3',
      'org': 'Tencent',
      'score': 1506,
      'ci': 7.7,
      'votes': 7680,
      'src': 'llmbenchmark'
    },
    {
      'name': 'Gemini 3.5 Flash',
      'org': 'Google',
      'score': 1500,
      'ci': 7.3,
      'votes': 9120,
      'src': 'llmbenchmark'
    },
    {
      'name': 'Claude Opus 4.5',
      'org': 'Anthropic',
      'score': 1494,
      'ci': 8.3,
      'votes': 10959,
      'src': 'llmbenchmark'
    },
    {
      'name': 'MiniMax M3',
      'org': 'MiniMax',
      'score': 1484,
      'ci': 5.4,
      'votes': 20926,
      'src': 'llmbenchmark'
    },
    {
      'name': 'MiMo-V2.5-Pro',
      'org': 'Xiaomi',
      'score': 1479,
      'ci': 5.3,
      'votes': 21915,
      'src': 'llmbenchmark'
    },
    {
      'name': 'Kimi K2.7 Code',
      'org': 'Moonshot AI',
      'score': 1475,
      'ci': 9.5,
      'votes': 4868,
      'src': 'llmbenchmark'
    },
    {
      'name': 'Qwen3.6 Plus',
      'org': 'Qwen',
      'score': 1462,
      'ci': 5.6,
      'votes': 18217,
      'src': 'llmbenchmark'
    },
    {
      'name': 'GPT-5.4',
      'org': 'OpenAI',
      'score': 1462,
      'ci': 18.9,
      'votes': 1336,
      'src': 'llmbenchmark'
    },
    {
      'name': 'DeepSeek V4 Pro 0423',
      'org': 'DeepSeek',
      'score': 1448,
      'ci': 6.4,
      'votes': 13737,
      'src': 'llmbenchmark'
    },
    {
      'name': 'Gemini 3.1 Pro Preview',
      'org': 'Google',
      'score': 1446,
      'ci': 5.1,
      'votes': 23798,
      'src': 'llmbenchmark'
    },
    {
      'name': 'MiMo-V2.5',
      'org': 'Xiaomi',
      'score': 1438,
      'ci': 6.1,
      'votes': 14575,
      'src': 'llmbenchmark'
    },
    {
      'name': 'Beam 1.0 501B A23B',
      'org': 'Reflection',
      'score': 1437,
      'ci': 13.7,
      'votes': 2482,
      'src': 'llmbenchmark'
    },
    {
      'name': 'Kimi K2.5',
      'org': 'Moonshot AI',
      'score': 1436,
      'ci': 5.3,
      'votes': 19769,
      'src': 'llmbenchmark'
    },
    {
      'name': 'GLM 4.7',
      'org': 'Z.ai',
      'score': 1436,
      'ci': 12.1,
      'votes': 3988,
      'src': 'llmbenchmark'
    },
    {
      'name': 'GLM 5',
      'org': 'Z.ai',
      'score': 1435,
      'ci': 8.2,
      'votes': 7429,
      'src': 'llmbenchmark'
    },
    {
      'name': 'Gemini 3.5 Flash Lite',
      'org': 'Google',
      'score': 1434,
      'ci': 41.2,
      'votes': 231,
      'src': 'llmbenchmark'
    },
    {
      'name': 'GPT-5.2',
      'org': 'OpenAI',
      'score': 1419,
      'ci': 22.7,
      'votes': 1074,
      'src': 'llmbenchmark'
    },
    {
      'name': 'GPT-5',
      'org': 'OpenAI',
      'score': 1418,
      'ci': 15.6,
      'votes': 3076,
      'src': 'llmbenchmark'
    },
    {
      'name': 'Inkling',
      'org': 'Thinking Machines',
      'score': 1414,
      'ci': 6,
      'votes': 17046,
      'src': 'llmbenchmark'
    },
    {
      'name': 'Inkling Small',
      'org': 'Thinking Machines',
      'score': 1407,
      'ci': 9.2,
      'votes': 5193,
      'src': 'llmbenchmark'
    },
    {
      'name': 'GPT-5.3-Codex',
      'org': 'OpenAI',
      'score': 1406,
      'ci': 13.7,
      'votes': 2630,
      'src': 'llmbenchmark'
    },
    {
      'name': 'Qwen3.5 397B A17B',
      'org': 'Qwen',
      'score': 1400,
      'ci': 5.2,
      'votes': 20805,
      'src': 'llmbenchmark'
    },
    {
      'name': 'GPT-5.4 Mini',
      'org': 'OpenAI',
      'score': 1398,
      'ci': 6.6,
      'votes': 11783,
      'src': 'llmbenchmark'
    },
    {
      'name': 'MiniMax M2.7',
      'org': 'MiniMax',
      'score': 1398,
      'ci': 5.8,
      'votes': 15670,
      'src': 'llmbenchmark'
    },
    {
      'name': 'GPT-5.1',
      'org': 'OpenAI',
      'score': 1397,
      'ci': 11.6,
      'votes': 4876,
      'src': 'llmbenchmark'
    },
    {
      'name': 'Claude Sonnet 4.5',
      'org': 'Anthropic',
      'score': 1394,
      'ci': 7.8,
      'votes': 13158,
      'src': 'llmbenchmark'
    },
    {
      'name': 'Claude Opus 4.1',
      'org': 'Anthropic',
      'score': 1390,
      'ci': 10.8,
      'votes': 6879,
      'src': 'llmbenchmark'
    },
    {
      'name': 'MiniMax M2.5',
      'org': 'MiniMax',
      'score': 1386,
      'ci': 8.4,
      'votes': 7588,
      'src': 'llmbenchmark'
    },
    {
      'name': 'Gemma 4 31B',
      'org': 'Google',
      'score': 1371,
      'ci': 6,
      'votes': 16532,
      'src': 'llmbenchmark'
    },
    {
      'name': 'Solar Pro 4',
      'org': 'Upstage',
      'score': 1369,
      'ci': 10.5,
      'votes': 4475,
      'src': 'llmbenchmark'
    },
    {
      'name': 'DeepSeek V3.2',
      'org': 'DeepSeek',
      'score': 1363,
      'ci': 9.2,
      'votes': 6870,
      'src': 'llmbenchmark'
    },
    {
      'name': 'Qwen3.5-122B-A10B',
      'org': 'Qwen',
      'score': 1360,
      'ci': 7.7,
      'votes': 8195,
      'src': 'llmbenchmark'
    },
    {
      'name': 'Hy3 preview',
      'org': 'Tencent',
      'score': 1359,
      'ci': 17.5,
      'votes': 1427,
      'src': 'llmbenchmark'
    },
    {
      'name': 'Gemma 4 26B A4B',
      'org': 'Google',
      'score': 1358,
      'ci': 17,
      'votes': 1487,
      'src': 'llmbenchmark'
    },
    {
      'name': 'Grok 4.3',
      'org': 'xAI',
      'score': 1357,
      'ci': 6.3,
      'votes': 14652,
      'src': 'llmbenchmark'
    },
    {
      'name': 'Qwen3.5-27B',
      'org': 'Qwen',
      'score': 1357,
      'ci': 8.1,
      'votes': 7745,
      'src': 'llmbenchmark'
    },
    {
      'name': 'GLM 4.6',
      'org': 'Z.ai',
      'score': 1342,
      'ci': 10.9,
      'votes': 6718,
      'src': 'llmbenchmark'
    },
    {
      'name': 'GPT-5.2-Codex',
      'org': 'OpenAI',
      'score': 1339,
      'ci': 9,
      'votes': 6669,
      'src': 'llmbenchmark'
    },
    {
      'name': 'GPT-5.1-Codex',
      'org': 'OpenAI',
      'score': 1338,
      'ci': 11.7,
      'votes': 4964,
      'src': 'llmbenchmark'
    },
    {
      'name': 'Claude Haiku 4.5',
      'org': 'Anthropic',
      'score': 1330,
      'ci': 5,
      'votes': 28706,
      'src': 'llmbenchmark'
    },
    {
      'name': 'MiniMax M2',
      'org': 'MiniMax',
      'score': 1299,
      'ci': 11,
      'votes': 6654,
      'src': 'llmbenchmark'
    },
    {
      'name': 'Qwen3 Coder 480B A35B',
      'org': 'Qwen',
      'score': 1274,
      'ci': 7.9,
      'votes': 12630,
      'src': 'llmbenchmark'
    },
    {
      'name': 'DeepSeek V3.2 Exp',
      'org': 'DeepSeek',
      'score': 1271,
      'ci': 13.6,
      'votes': 3936,
      'src': 'llmbenchmark'
    },
    {
      'name': 'Mistral Medium 3.5',
      'org': 'Mistral AI',
      'score': 1263,
      'ci': 14.9,
      'votes': 2274,
      'src': 'llmbenchmark'
    },
    {
      'name': 'Gemini 3.1 Flash Lite Preview',
      'org': 'Google',
      'score': 1256,
      'ci': 6.9,
      'votes': 14229,
      'src': 'llmbenchmark'
    },
    {
      'name': 'Qwen3.5-35B-A3B',
      'org': 'Qwen',
      'score': 1253,
      'ci': 17.5,
      'votes': 1610,
      'src': 'llmbenchmark'
    },
    {
      'name': 'Qwen3.5-Flash',
      'org': 'Qwen',
      'score': 1243,
      'ci': 19.7,
      'votes': 1321,
      'src': 'llmbenchmark'
    },
    {
      'name': 'GPT-5.1-Codex-Mini',
      'org': 'OpenAI',
      'score': 1243,
      'ci': 22.3,
      'votes': 1135,
      'src': 'llmbenchmark'
    },
    {
      'name': 'Trinity Large Thinking',
      'org': 'Arcee AI',
      'score': 1237,
      'ci': 20.1,
      'votes': 1346,
      'src': 'llmbenchmark'
    },
    {
      'name': 'Gemini 2.5 Pro',
      'org': 'Google',
      'score': 1226,
      'ci': 15.9,
      'votes': 2705,
      'src': 'llmbenchmark'
    },
    {
      'name': 'Mercury 2',
      'org': 'Inception',
      'score': 1170,
      'ci': 24.8,
      'votes': 939,
      'src': 'llmbenchmark'
    }
  ]
};
