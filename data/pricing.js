// 数据源:模型 API 标价主源 codingplan.fyi plans.json(内嵌 planModels);排名模型缺价由 models.dev/api.json 补齐,更新于 2026-11-13
// 来源:https://www.codingplan.fyi/plans.json + config.json(汇率;https://models.dev/api.json 仅补缺;官方:https://www.codingplan.fyi/?view=usage)
// 字段说明:models[]=模型级标准价(id=canonical 模型名/slug=源站或 models.dev 键/
//   inputCnyPerM·cacheCnyPerM·outputCnyPerM=输入·缓存输入·输出单价(人民币/百万 token)/
//   costPerM=每百万 token 综合成本/priceSource=价格来源;按 costPerM 降序。
// 口径:综合成本(¥/百万token) = cacheHitRate×缓存输入价 + (1−cacheHitRate−outputRatio)×输入价 + outputRatio×输出价;
//   折算系数取自源站 workload(cacheHitRate=0.95, outputRatio=0.005),
//   主源仅收 $ / ¥ 计价档位(积分·Credits·AFP·Token 额度单位不可比,已丢弃),
//   同 slug 取 (输入|缓存|输出) 三元组众数;美元按汇率 6.8 折算人民币。
// 补缺:排名模型(总览命中≥4榜,判定复用 js/data.js 的 unified())主源无价时,
//   按 models.dev 官方 provider 优先、openrouter 兜底,用 canonical 名/别名精确匹配;
//   补价不覆盖主源;本次未匹配到或补价源不可用时沿用上一版补价;
//   仍缺价的模型按厂商官网价种子补入(OFFICIAL_PRICE_SEEDS,priceSource=official:*),
//   都无价的模型列在 missingRanked。
// 用途:总览矩阵「性价比」列(综合分 ÷ costPerM);价格为快照口径,可能滞后于平台官网。
window.PRICING = {
  'source': 'Coding Plan 对比(codingplan.fyi);排名模型缺价由 models.dev / 厂商官网价种子补齐',
  'url': 'https://www.codingplan.fyi/plans.json',
  'supplementUrl': 'https://models.dev/api.json',
  'officialUrl': 'https://www.codingplan.fyi/?view=usage',
  'updated': '2026-11-13',
  'refreshedAt': '2026-11-14 03:55',
  'usdToCnyRate': 6.8,
  'workload': {
    'cacheHitRate': 0.95,
    'outputRatio': 0.005
  },
  'formula': '综合成本(¥/百万token) = cacheHitRate×缓存输入价 + (1−cacheHitRate−outputRatio)×输入价 + outputRatio×输出价',
  'stats': {
    'planModels': 2588,
    'withPricing': 1839,
    'comparable': 1154,
    'models': 109,
    'unresolved': 16,
    'ranked': 57,
    'supplemented': 3,
    'carriedOver': 0,
    'seeded': 0,
    'missingRanked': 3
  },
  'missingRanked': [
    'Muse Wonder Full',
    'SWE-2',
    'Seed 2.1 Pro'
  ],
  'desc': '模型 API 标价快照(输入 / 缓存输入 / 输出三档单价,¥/百万 token),主源 codingplan.fyi,排名模型主源缺价时由 models.dev 官方 provider 优先补齐,仍缺价时按厂商官网标准价种子补入(priceSource 标注来源),按源站统一工作负载(95% 缓存命中、0.5% 输出占比)折算每百万 token 综合成本,供总览矩阵「性价比」列使用。',
  'models': [
    {
      'id': 'Claude Fable 5',
      'slug': 'claude-fable-5',
      'inputCnyPerM': 68,
      'cacheCnyPerM': 6.8,
      'outputCnyPerM': 340,
      'costPerM': 11.22,
      'priceSource': 'codingplan.fyi'
    },
    {
      'id': 'GPT-6 Astra',
      'slug': 'gpt-6-astra',
      'inputCnyPerM': 68,
      'cacheCnyPerM': 6.8,
      'outputCnyPerM': 340,
      'costPerM': 11.22,
      'priceSource': 'codingplan.fyi'
    },
    {
      'id': 'Grok 4.7',
      'slug': 'grok-4-7',
      'inputCnyPerM': 27.2,
      'cacheCnyPerM': 6.8,
      'outputCnyPerM': 81.6,
      'costPerM': 8.092,
      'priceSource': 'codingplan.fyi'
    },
    {
      'id': 'Claude Fable 5.1',
      'slug': 'claude-fable-5-1',
      'inputCnyPerM': 68,
      'cacheCnyPerM': 1.7,
      'outputCnyPerM': 340,
      'costPerM': 6.375,
      'priceSource': 'codingplan.fyi'
    },
    {
      'id': 'GPT-5.5',
      'slug': 'gpt-5-5',
      'inputCnyPerM': 34,
      'cacheCnyPerM': 3.4,
      'outputCnyPerM': 204,
      'costPerM': 5.78,
      'priceSource': 'codingplan.fyi'
    },
    {
      'id': 'fugu-ultra',
      'slug': 'fugu-ultra',
      'inputCnyPerM': 34,
      'cacheCnyPerM': 3.4,
      'outputCnyPerM': 204,
      'costPerM': 5.78,
      'priceSource': 'codingplan.fyi'
    },
    {
      'id': 'Claude Opus 4.6',
      'slug': 'claude-opus-4-6',
      'inputCnyPerM': 34,
      'cacheCnyPerM': 3.4,
      'outputCnyPerM': 170,
      'costPerM': 5.61,
      'priceSource': 'codingplan.fyi'
    },
    {
      'id': 'Claude Opus 4.7',
      'slug': 'claude-opus-4-7',
      'inputCnyPerM': 34,
      'cacheCnyPerM': 3.4,
      'outputCnyPerM': 170,
      'costPerM': 5.61,
      'priceSource': 'codingplan.fyi'
    },
    {
      'id': 'Claude Opus 4.8',
      'slug': 'claude-opus-4-8',
      'inputCnyPerM': 34,
      'cacheCnyPerM': 3.4,
      'outputCnyPerM': 170,
      'costPerM': 5.61,
      'priceSource': 'codingplan.fyi'
    },
    {
      'id': 'Claude Opus 5',
      'slug': 'claude-opus-5',
      'inputCnyPerM': 34,
      'cacheCnyPerM': 3.4,
      'outputCnyPerM': 170,
      'costPerM': 5.61,
      'priceSource': 'codingplan.fyi'
    },
    {
      'id': 'Claude Fable 5.2',
      'slug': 'claude-fable-5-2',
      'inputCnyPerM': 54.4,
      'cacheCnyPerM': 1.36,
      'outputCnyPerM': 272,
      'costPerM': 5.1,
      'priceSource': 'models.dev:anthropic'
    },
    {
      'id': 'qwen-3-8-max-prime',
      'slug': 'qwen-3-8-max-prime',
      'inputCnyPerM': 27.2,
      'cacheCnyPerM': 3.4,
      'outputCnyPerM': 81.6,
      'costPerM': 4.862,
      'priceSource': 'codingplan.fyi'
    },
    {
      'id': 'glm-5-2-fast',
      'slug': 'glm-5-2-fast',
      'inputCnyPerM': 20.4,
      'cacheCnyPerM': 3.4,
      'outputCnyPerM': 69.7,
      'costPerM': 4.4965,
      'priceSource': 'codingplan.fyi'
    },
    {
      'id': 'GPT-5.6 Sol',
      'slug': 'gpt-5-6-sol',
      'inputCnyPerM': 27.2,
      'cacheCnyPerM': 2.72,
      'outputCnyPerM': 136,
      'costPerM': 4.488,
      'priceSource': 'codingplan.fyi'
    },
    {
      'id': 'Qwen3.7-Max',
      'slug': 'qwen-3-7-max',
      'inputCnyPerM': 17,
      'cacheCnyPerM': 3.4,
      'outputCnyPerM': 51,
      'costPerM': 4.25,
      'priceSource': 'codingplan.fyi'
    },
    {
      'id': 'Grok 4.5',
      'slug': 'grok-4-5',
      'inputCnyPerM': 13.6,
      'cacheCnyPerM': 3.4,
      'outputCnyPerM': 40.8,
      'costPerM': 4.046,
      'priceSource': 'codingplan.fyi'
    },
    {
      'id': 'Grok 4.6',
      'slug': 'grok-4-6',
      'inputCnyPerM': 13.6,
      'cacheCnyPerM': 3.4,
      'outputCnyPerM': 40.8,
      'costPerM': 4.046,
      'priceSource': 'codingplan.fyi'
    },
    {
      'id': 'Claude Sonnet 4.6',
      'slug': 'claude-sonnet-4-6',
      'inputCnyPerM': 20.4,
      'cacheCnyPerM': 2.04,
      'outputCnyPerM': 102,
      'costPerM': 3.366,
      'priceSource': 'codingplan.fyi'
    },
    {
      'id': 'Kimi K3',
      'slug': 'kimi-k3',
      'inputCnyPerM': 20.4,
      'cacheCnyPerM': 2.04,
      'outputCnyPerM': 102,
      'costPerM': 3.366,
      'priceSource': 'codingplan.fyi'
    },
    {
      'id': 'kimi-k2-7-code-highspeed',
      'slug': 'kimi-k2-7-code-highspeed',
      'inputCnyPerM': 12.92,
      'cacheCnyPerM': 2.584,
      'outputCnyPerM': 54.4,
      'costPerM': 3.3082,
      'priceSource': 'codingplan.fyi'
    },
    {
      'id': 'Claude Opus 5.5',
      'slug': 'claude-opus-5-5',
      'inputCnyPerM': 27.2,
      'cacheCnyPerM': 1.36,
      'outputCnyPerM': 136,
      'costPerM': 3.196,
      'priceSource': 'codingplan.fyi'
    },
    {
      'id': 'Muse Wonder',
      'slug': 'muse-wonder',
      'inputCnyPerM': 27.2,
      'cacheCnyPerM': 1.36,
      'outputCnyPerM': 136,
      'costPerM': 3.196,
      'priceSource': 'codingplan.fyi'
    },
    {
      'id': 'GPT-5.4',
      'slug': 'gpt-5-4',
      'inputCnyPerM': 17,
      'cacheCnyPerM': 1.7,
      'outputCnyPerM': 102,
      'costPerM': 2.89,
      'priceSource': 'codingplan.fyi'
    },
    {
      'id': 'Qwen3.8-Max',
      'slug': 'qwen-3-8-max',
      'inputCnyPerM': 13.6,
      'cacheCnyPerM': 1.7,
      'outputCnyPerM': 40.8,
      'costPerM': 2.431,
      'priceSource': 'codingplan.fyi'
    },
    {
      'id': 'Qwen3.6-Max',
      'slug': 'qwen-3-6-max-preview',
      'inputCnyPerM': 8.84,
      'cacheCnyPerM': 1.768,
      'outputCnyPerM': 53.04,
      'costPerM': 2.3426,
      'priceSource': 'codingplan.fyi'
    },
    {
      'id': 'GPT-5.6 Terra',
      'slug': 'gpt-5-6-terra',
      'inputCnyPerM': 13.6,
      'cacheCnyPerM': 1.36,
      'outputCnyPerM': 81.6,
      'costPerM': 2.312,
      'priceSource': 'codingplan.fyi'
    },
    {
      'id': 'Gemini 3.1 Pro',
      'slug': 'gemini-3-1-pro',
      'inputCnyPerM': 13.6,
      'cacheCnyPerM': 1.36,
      'outputCnyPerM': 81.6,
      'costPerM': 2.312,
      'priceSource': 'codingplan.fyi'
    },
    {
      'id': 'GLM-5.1',
      'slug': 'glm-5-1',
      'inputCnyPerM': 9.52,
      'cacheCnyPerM': 1.768,
      'outputCnyPerM': 29.92,
      'costPerM': 2.2576,
      'priceSource': 'codingplan.fyi'
    },
    {
      'id': 'GLM-5.2',
      'slug': 'glm-5-2',
      'inputCnyPerM': 9.52,
      'cacheCnyPerM': 1.768,
      'outputCnyPerM': 29.92,
      'costPerM': 2.2576,
      'priceSource': 'codingplan.fyi'
    },
    {
      'id': 'GLM-5.3',
      'slug': 'glm-5-3',
      'inputCnyPerM': 9.52,
      'cacheCnyPerM': 1.768,
      'outputCnyPerM': 29.92,
      'costPerM': 2.2576,
      'priceSource': 'codingplan.fyi'
    },
    {
      'id': 'Claude Sonnet 5',
      'slug': 'claude-sonnet-5',
      'inputCnyPerM': 13.6,
      'cacheCnyPerM': 1.36,
      'outputCnyPerM': 68,
      'costPerM': 2.244,
      'priceSource': 'codingplan.fyi'
    },
    {
      'id': 'GPT-6 Sol',
      'slug': 'gpt-6-sol',
      'inputCnyPerM': 13.6,
      'cacheCnyPerM': 1.36,
      'outputCnyPerM': 68,
      'costPerM': 2.244,
      'priceSource': 'codingplan.fyi'
    },
    {
      'id': 'Kimi K3.1 Pro',
      'slug': 'kimi-k3-1-pro',
      'inputCnyPerM': 13.6,
      'cacheCnyPerM': 1.36,
      'outputCnyPerM': 68,
      'costPerM': 2.244,
      'priceSource': 'codingplan.fyi'
    },
    {
      'id': 'GPT-5.2',
      'slug': 'gpt-5-2',
      'inputCnyPerM': 11.9,
      'cacheCnyPerM': 1.19,
      'outputCnyPerM': 95.2,
      'costPerM': 2.142,
      'priceSource': 'codingplan.fyi'
    },
    {
      'id': 'GPT-5.3 Codex',
      'slug': 'gpt-5-3-codex',
      'inputCnyPerM': 11.9,
      'cacheCnyPerM': 1.19,
      'outputCnyPerM': 95.2,
      'costPerM': 2.142,
      'priceSource': 'codingplan.fyi'
    },
    {
      'id': 'Qwen3.6-Plus',
      'slug': 'qwen-3-6-plus',
      'inputCnyPerM': 13.6,
      'cacheCnyPerM': 1.36,
      'outputCnyPerM': 40.8,
      'costPerM': 2.108,
      'priceSource': 'codingplan.fyi'
    },
    {
      'id': 'Gemini 3.5 Flash',
      'slug': 'gemini-3-5-flash',
      'inputCnyPerM': 10.2,
      'cacheCnyPerM': 1.02,
      'outputCnyPerM': 61.2,
      'costPerM': 1.734,
      'priceSource': 'codingplan.fyi'
    },
    {
      'id': 'GLM 5',
      'slug': 'glm-5',
      'inputCnyPerM': 6.8,
      'cacheCnyPerM': 1.36,
      'outputCnyPerM': 21.76,
      'costPerM': 1.7068,
      'priceSource': 'codingplan.fyi'
    },
    {
      'id': 'Gemini 3.6 Flash',
      'slug': 'gemini-3-6-flash',
      'inputCnyPerM': 10.2,
      'cacheCnyPerM': 1.02,
      'outputCnyPerM': 51,
      'costPerM': 1.683,
      'priceSource': 'codingplan.fyi'
    },
    {
      'id': 'Gemini 3.7 Flash',
      'slug': 'gemini-3-7-flash',
      'inputCnyPerM': 10.2,
      'cacheCnyPerM': 1.02,
      'outputCnyPerM': 51,
      'costPerM': 1.683,
      'priceSource': 'codingplan.fyi'
    },
    {
      'id': 'Kimi-K2.7-Code',
      'slug': 'kimi-k2-7-code',
      'inputCnyPerM': 6.46,
      'cacheCnyPerM': 1.292,
      'outputCnyPerM': 27.2,
      'costPerM': 1.6541,
      'priceSource': 'codingplan.fyi'
    },
    {
      'id': 'Claude Sonnet 5.5',
      'slug': 'claude-sonnet-5-5',
      'inputCnyPerM': 13.6,
      'cacheCnyPerM': 0.68,
      'outputCnyPerM': 68,
      'costPerM': 1.598,
      'priceSource': 'codingplan.fyi'
    },
    {
      'id': 'GPT-6.1 Sol',
      'slug': 'gpt-6-1-sol',
      'inputCnyPerM': 13.6,
      'cacheCnyPerM': 0.68,
      'outputCnyPerM': 68,
      'costPerM': 1.598,
      'priceSource': 'codingplan.fyi'
    },
    {
      'id': 'Gemini 4 Argon',
      'slug': 'gemini-4-argon',
      'inputCnyPerM': 13.6,
      'cacheCnyPerM': 0.68,
      'outputCnyPerM': 68,
      'costPerM': 1.598,
      'priceSource': 'codingplan.fyi'
    },
    {
      'id': 'Gemini 4 Carbon',
      'slug': 'gemini-4-carbon',
      'inputCnyPerM': 13.6,
      'cacheCnyPerM': 0.68,
      'outputCnyPerM': 68,
      'costPerM': 1.598,
      'priceSource': 'models.dev:google'
    },
    {
      'id': 'Inkling',
      'slug': 'inkling',
      'inputCnyPerM': 6.8,
      'cacheCnyPerM': 1.156,
      'outputCnyPerM': 27.54,
      'costPerM': 1.5419,
      'priceSource': 'codingplan.fyi'
    },
    {
      'id': 'Composer 2.5',
      'slug': 'composer-2-5',
      'inputCnyPerM': 3.4,
      'cacheCnyPerM': 1.36,
      'outputCnyPerM': 17,
      'costPerM': 1.53,
      'priceSource': 'codingplan.fyi'
    },
    {
      'id': 'Meta Muse Spark 1.1',
      'slug': 'muse-spark-1-1',
      'inputCnyPerM': 8.5,
      'cacheCnyPerM': 1.02,
      'outputCnyPerM': 28.9,
      'costPerM': 1.496,
      'priceSource': 'codingplan.fyi'
    },
    {
      'id': 'Muse Spark 1.3',
      'slug': 'muse-spark-1-3',
      'inputCnyPerM': 8.5,
      'cacheCnyPerM': 1.02,
      'outputCnyPerM': 28.9,
      'costPerM': 1.496,
      'priceSource': 'codingplan.fyi'
    },
    {
      'id': 'Muse Spark Open',
      'slug': 'muse-spark-open',
      'inputCnyPerM': 8.5,
      'cacheCnyPerM': 1.02,
      'outputCnyPerM': 28.9,
      'costPerM': 1.496,
      'priceSource': 'codingplan.fyi'
    },
    {
      'id': 'Mistral Large 4',
      'slug': 'mistral-large-4',
      'inputCnyPerM': 9.248,
      'cacheCnyPerM': 0.952,
      'outputCnyPerM': 28.424,
      'costPerM': 1.46268,
      'priceSource': 'codingplan.fyi'
    },
    {
      'id': 'Kimi-K2.6',
      'slug': 'kimi-k2-6',
      'inputCnyPerM': 6.46,
      'cacheCnyPerM': 1.088,
      'outputCnyPerM': 27.2,
      'costPerM': 1.4603,
      'priceSource': 'codingplan.fyi'
    },
    {
      'id': 'Claude Haiku 4.5',
      'slug': 'claude-haiku-4-5',
      'inputCnyPerM': 6.8,
      'cacheCnyPerM': 0.68,
      'outputCnyPerM': 34,
      'costPerM': 1.122,
      'priceSource': 'codingplan.fyi'
    },
    {
      'id': 'Nemotron 3 Ultra',
      'slug': 'nemotron-3-ultra',
      'inputCnyPerM': 4.08,
      'cacheCnyPerM': 0.816,
      'outputCnyPerM': 16.32,
      'costPerM': 1.0404,
      'priceSource': 'codingplan.fyi'
    },
    {
      'id': 'Kimi K2.5',
      'slug': 'kimi-k2-5',
      'inputCnyPerM': 4.08,
      'cacheCnyPerM': 0.68,
      'outputCnyPerM': 20.4,
      'costPerM': 0.9316,
      'priceSource': 'codingplan.fyi'
    },
    {
      'id': 'doubao-seed-2-1-turbo',
      'slug': 'doubao-seed-2-1-turbo',
      'inputCnyPerM': 3.4,
      'cacheCnyPerM': 0.68,
      'outputCnyPerM': 17,
      'costPerM': 0.884,
      'priceSource': 'codingplan.fyi'
    },
    {
      'id': 'GPT-5.4 Mini',
      'slug': 'gpt-5-4-mini',
      'inputCnyPerM': 5.1,
      'cacheCnyPerM': 0.51,
      'outputCnyPerM': 30.6,
      'costPerM': 0.867,
      'priceSource': 'codingplan.fyi'
    },
    {
      'id': 'Inkling Small',
      'slug': 'inkling-small',
      'inputCnyPerM': 3.4,
      'cacheCnyPerM': 0.68,
      'outputCnyPerM': 8.16,
      'costPerM': 0.8398,
      'priceSource': 'codingplan.fyi'
    },
    {
      'id': 'Gemini 3.8 Flash',
      'slug': 'gemini-3-8-flash',
      'inputCnyPerM': 5.1,
      'cacheCnyPerM': 0.51,
      'outputCnyPerM': 23.8,
      'costPerM': 0.833,
      'priceSource': 'codingplan.fyi'
    },
    {
      'id': 'GPT-6.1 Terra',
      'slug': 'gpt-6-1-terra',
      'inputCnyPerM': 6.8,
      'cacheCnyPerM': 0.34,
      'outputCnyPerM': 34,
      'costPerM': 0.799,
      'priceSource': 'codingplan.fyi'
    },
    {
      'id': 'Step 5 Preview',
      'slug': 'step-5-preview',
      'inputCnyPerM': 6.8,
      'cacheCnyPerM': 0.34,
      'outputCnyPerM': 18.36,
      'costPerM': 0.7208,
      'priceSource': 'codingplan.fyi'
    },
    {
      'id': 'Qwen3.7-Plus',
      'slug': 'qwen-3-7-plus',
      'inputCnyPerM': 2.72,
      'cacheCnyPerM': 0.544,
      'outputCnyPerM': 10.88,
      'costPerM': 0.6936,
      'priceSource': 'codingplan.fyi'
    },
    {
      'id': 'glm-5-3-flashx',
      'slug': 'glm-5-3-flashx',
      'inputCnyPerM': 2.516,
      'cacheCnyPerM': 0.51,
      'outputCnyPerM': 8.5,
      'costPerM': 0.64022,
      'priceSource': 'codingplan.fyi'
    },
    {
      'id': 'Tencent Hy4',
      'slug': 'hy4',
      'inputCnyPerM': 5.6712,
      'cacheCnyPerM': 0.2856,
      'outputCnyPerM': 17.0068,
      'costPerM': 0.611558,
      'priceSource': 'codingplan.fyi'
    },
    {
      'id': 'Tencent Hy4 Preview',
      'slug': 'hy4-preview',
      'inputCnyPerM': 5.6712,
      'cacheCnyPerM': 0.2856,
      'outputCnyPerM': 17.0068,
      'costPerM': 0.611558,
      'priceSource': 'codingplan.fyi'
    },
    {
      'id': 'Gemini 3 Flash Preview',
      'slug': 'gemini-3-flash-preview',
      'inputCnyPerM': 3.4,
      'cacheCnyPerM': 0.34,
      'outputCnyPerM': 20.4,
      'costPerM': 0.578,
      'priceSource': 'codingplan.fyi'
    },
    {
      'id': 'deepseek-v4-flash-fast',
      'slug': 'deepseek-v4-flash-fast',
      'inputCnyPerM': 1.904,
      'cacheCnyPerM': 0.476,
      'outputCnyPerM': 3.808,
      'costPerM': 0.55692,
      'priceSource': 'codingplan.fyi'
    },
    {
      'id': 'MiniMax-M2.7',
      'slug': 'minimax-m2-7',
      'inputCnyPerM': 2.04,
      'cacheCnyPerM': 0.408,
      'outputCnyPerM': 8.16,
      'costPerM': 0.5202,
      'priceSource': 'codingplan.fyi'
    },
    {
      'id': 'MiniMax-M3',
      'slug': 'minimax-m3',
      'inputCnyPerM': 2.04,
      'cacheCnyPerM': 0.408,
      'outputCnyPerM': 8.16,
      'costPerM': 0.5202,
      'priceSource': 'codingplan.fyi'
    },
    {
      'id': 'Ling-3.1-Flash',
      'slug': 'ling-3-1-flash',
      'inputCnyPerM': 2.04,
      'cacheCnyPerM': 0.408,
      'outputCnyPerM': 6.12,
      'costPerM': 0.51,
      'priceSource': 'codingplan.fyi'
    },
    {
      'id': 'ling-3-1-flash-1019',
      'slug': 'ling-3-1-flash-1019',
      'inputCnyPerM': 2.04,
      'cacheCnyPerM': 0.408,
      'outputCnyPerM': 6.12,
      'costPerM': 0.51,
      'priceSource': 'codingplan.fyi'
    },
    {
      'id': 'Qwen3.8-27B',
      'slug': 'qwen-3-8-27b',
      'inputCnyPerM': 2.72,
      'cacheCnyPerM': 0.272,
      'outputCnyPerM': 20.4,
      'costPerM': 0.4828,
      'priceSource': 'codingplan.fyi'
    },
    {
      'id': 'Beam',
      'slug': 'reflection/beam-1.0-501b-a23b',
      'inputCnyPerM': 2.04,
      'cacheCnyPerM': 0.272,
      'outputCnyPerM': 6.8,
      'costPerM': 0.3842,
      'priceSource': 'models.dev:openrouter'
    },
    {
      'id': 'Gemma 4 31B',
      'slug': 'gemma-4-31b',
      'inputCnyPerM': 0.952,
      'cacheCnyPerM': 0.34,
      'outputCnyPerM': 2.72,
      'costPerM': 0.37944,
      'priceSource': 'codingplan.fyi'
    },
    {
      'id': 'Gemini 3.5 Flash Lite',
      'slug': 'gemini-3-5-flash-lite',
      'inputCnyPerM': 2.04,
      'cacheCnyPerM': 0.204,
      'outputCnyPerM': 17,
      'costPerM': 0.3706,
      'priceSource': 'codingplan.fyi'
    },
    {
      'id': 'Step 3.7 Flash',
      'slug': 'step-3-7-flash',
      'inputCnyPerM': 1.36,
      'cacheCnyPerM': 0.272,
      'outputCnyPerM': 7.82,
      'costPerM': 0.3587,
      'priceSource': 'codingplan.fyi'
    },
    {
      'id': 'Nemotron 3.5 Super VL',
      'slug': 'nemotron-3-5-super-vl',
      'inputCnyPerM': 1.36,
      'cacheCnyPerM': 0.272,
      'outputCnyPerM': 3.4,
      'costPerM': 0.3366,
      'priceSource': 'codingplan.fyi'
    },
    {
      'id': 'DeepSeek V4 Pro 0813',
      'slug': 'deepseek-v4-pro-preview',
      'inputCnyPerM': 3.6,
      'cacheCnyPerM': 0.12,
      'outputCnyPerM': 10.8,
      'costPerM': 0.33,
      'priceSource': 'codingplan.fyi'
    },
    {
      'id': 'MiniMax M2.5',
      'slug': 'minimax-m2-5',
      'inputCnyPerM': 2.04,
      'cacheCnyPerM': 0.204,
      'outputCnyPerM': 8.16,
      'costPerM': 0.3264,
      'priceSource': 'codingplan.fyi'
    },
    {
      'id': 'Gemini 3.1 Flash Lite',
      'slug': 'gemini-3-1-flash-lite',
      'inputCnyPerM': 1.7,
      'cacheCnyPerM': 0.204,
      'outputCnyPerM': 10.2,
      'costPerM': 0.3213,
      'priceSource': 'codingplan.fyi'
    },
    {
      'id': 'Tencent Hy3',
      'slug': 'hy3',
      'inputCnyPerM': 0.952,
      'cacheCnyPerM': 0.238,
      'outputCnyPerM': 3.944,
      'costPerM': 0.28866,
      'priceSource': 'codingplan.fyi'
    },
    {
      'id': 'GPT-OSS 20B',
      'slug': 'gpt-oss-20b',
      'inputCnyPerM': 0.476,
      'cacheCnyPerM': 0.238,
      'outputCnyPerM': 2.04,
      'costPerM': 0.25772,
      'priceSource': 'codingplan.fyi'
    },
    {
      'id': 'GLM-5.3-Flash',
      'slug': 'glm-5-3-flash',
      'inputCnyPerM': 1.02,
      'cacheCnyPerM': 0.204,
      'outputCnyPerM': 3.4,
      'costPerM': 0.2567,
      'priceSource': 'codingplan.fyi'
    },
    {
      'id': 'GPT-5.4 Nano',
      'slug': 'gpt-5-4-nano',
      'inputCnyPerM': 1.36,
      'cacheCnyPerM': 0.136,
      'outputCnyPerM': 8.5,
      'costPerM': 0.2329,
      'priceSource': 'codingplan.fyi'
    },
    {
      'id': 'GPT-5.6 Luna',
      'slug': 'gpt-5-6-luna',
      'inputCnyPerM': 1.36,
      'cacheCnyPerM': 0.136,
      'outputCnyPerM': 8.16,
      'costPerM': 0.2312,
      'priceSource': 'codingplan.fyi'
    },
    {
      'id': 'MAI-Code-1.1-Flash',
      'slug': 'mai-code-1-1-flash',
      'inputCnyPerM': 1.36,
      'cacheCnyPerM': 0.136,
      'outputCnyPerM': 8.16,
      'costPerM': 0.2312,
      'priceSource': 'codingplan.fyi'
    },
    {
      'id': 'ornith-1-5-122b',
      'slug': 'ornith-1-5-122b',
      'inputCnyPerM': 1.088,
      'cacheCnyPerM': 0.136,
      'outputCnyPerM': 4.352,
      'costPerM': 0.19992,
      'priceSource': 'codingplan.fyi'
    },
    {
      'id': 'MiMo-V2.5-Pro',
      'slug': 'mimo-v2-5-pro',
      'inputCnyPerM': 2.958,
      'cacheCnyPerM': 0.02465,
      'outputCnyPerM': 5.916,
      'costPerM': 0.186108,
      'priceSource': 'codingplan.fyi'
    },
    {
      'id': 'MiMo-V2.6-Pro',
      'slug': 'mimo-v2-6-pro',
      'inputCnyPerM': 2.958,
      'cacheCnyPerM': 0.02448,
      'outputCnyPerM': 5.916,
      'costPerM': 0.185946,
      'priceSource': 'codingplan.fyi'
    },
    {
      'id': 'mimo-v2-6-pro-rl',
      'slug': 'mimo-v2-6-pro-rl',
      'inputCnyPerM': 2.958,
      'cacheCnyPerM': 0.02448,
      'outputCnyPerM': 5.916,
      'costPerM': 0.185946,
      'priceSource': 'codingplan.fyi'
    },
    {
      'id': 'longcat-2-0',
      'slug': 'longcat-2-0',
      'inputCnyPerM': 2.04,
      'cacheCnyPerM': 0.0408,
      'outputCnyPerM': 8.16,
      'costPerM': 0.17136,
      'priceSource': 'codingplan.fyi'
    },
    {
      'id': 'Step 3.5 Flash',
      'slug': 'step-3-5-flash',
      'inputCnyPerM': 0.612,
      'cacheCnyPerM': 0.136,
      'outputCnyPerM': 2.04,
      'costPerM': 0.16694,
      'priceSource': 'codingplan.fyi'
    },
    {
      'id': 'Qwen3.8-Flash',
      'slug': 'qwen-3-8-flash',
      'inputCnyPerM': 1.02,
      'cacheCnyPerM': 0.1088,
      'outputCnyPerM': 3.196,
      'costPerM': 0.16524,
      'priceSource': 'codingplan.fyi'
    },
    {
      'id': 'qwen-3-8-omni-flash',
      'slug': 'qwen-3-8-omni-flash',
      'inputCnyPerM': 1.02,
      'cacheCnyPerM': 0.1088,
      'outputCnyPerM': 3.196,
      'costPerM': 0.16524,
      'priceSource': 'codingplan.fyi'
    },
    {
      'id': 'DeepSeek V4.1 Flash',
      'slug': 'deepseek-v4-1-flash',
      'inputCnyPerM': 1.02,
      'cacheCnyPerM': 0.102,
      'outputCnyPerM': 4.08,
      'costPerM': 0.1632,
      'priceSource': 'codingplan.fyi'
    },
    {
      'id': 'MiniMax M3.1 Flash',
      'slug': 'minimax-m3-1-flash',
      'inputCnyPerM': 1.02,
      'cacheCnyPerM': 0.102,
      'outputCnyPerM': 4.08,
      'costPerM': 0.1632,
      'priceSource': 'codingplan.fyi'
    },
    {
      'id': 'GPT-OSS 120B',
      'slug': 'gpt-oss-120b',
      'inputCnyPerM': 1.02,
      'cacheCnyPerM': 0.0952,
      'outputCnyPerM': 4.08,
      'costPerM': 0.15674,
      'priceSource': 'codingplan.fyi'
    },
    {
      'id': 'nemotron-3-super',
      'slug': 'nemotron-3-super',
      'inputCnyPerM': 0.102,
      'cacheCnyPerM': 0.102,
      'outputCnyPerM': 4.08,
      'costPerM': 0.12189,
      'priceSource': 'codingplan.fyi'
    },
    {
      'id': 'Claude Haiku 5.5',
      'slug': 'claude-haiku-5-5',
      'inputCnyPerM': 0.68,
      'cacheCnyPerM': 0.068,
      'outputCnyPerM': 3.4,
      'costPerM': 0.1122,
      'priceSource': 'codingplan.fyi'
    },
    {
      'id': 'GPT-6 Luna',
      'slug': 'gpt-6-luna',
      'inputCnyPerM': 0.68,
      'cacheCnyPerM': 0.068,
      'outputCnyPerM': 3.4,
      'costPerM': 0.1122,
      'priceSource': 'codingplan.fyi'
    },
    {
      'id': 'DeepSeek V4 Flash 0731',
      'slug': 'deepseek-v4-flash-0731',
      'inputCnyPerM': 1.02,
      'cacheCnyPerM': 0.0204,
      'outputCnyPerM': 4.08,
      'costPerM': 0.08568,
      'priceSource': 'codingplan.fyi'
    },
    {
      'id': 'DeepSeek V4 Flash Vision Exp',
      'slug': 'deepseek-v4-flash-vision-exp',
      'inputCnyPerM': 1.02,
      'cacheCnyPerM': 0.0204,
      'outputCnyPerM': 4.08,
      'costPerM': 0.08568,
      'priceSource': 'codingplan.fyi'
    },
    {
      'id': 'DeepSeek V4.1 Flash 1017',
      'slug': 'deepseek-v4-1-flash-1017',
      'inputCnyPerM': 1.02,
      'cacheCnyPerM': 0.0204,
      'outputCnyPerM': 4.08,
      'costPerM': 0.08568,
      'priceSource': 'codingplan.fyi'
    },
    {
      'id': 'MiMo-V2.5',
      'slug': 'mimo-v2-5',
      'inputCnyPerM': 0.952,
      'cacheCnyPerM': 0.01904,
      'outputCnyPerM': 1.904,
      'costPerM': 0.070448,
      'priceSource': 'codingplan.fyi'
    },
    {
      'id': 'MiMo-V2.6-Flash',
      'slug': 'mimo-v2-6-flash',
      'inputCnyPerM': 0.952,
      'cacheCnyPerM': 0.01904,
      'outputCnyPerM': 1.904,
      'costPerM': 0.070448,
      'priceSource': 'codingplan.fyi'
    },
    {
      'id': 'mimo-v2-6-flash-rl',
      'slug': 'mimo-v2-6-flash-rl',
      'inputCnyPerM': 0.952,
      'cacheCnyPerM': 0.01904,
      'outputCnyPerM': 1.904,
      'costPerM': 0.070448,
      'priceSource': 'codingplan.fyi'
    },
    {
      'id': 'deepseek-v4-preview',
      'slug': 'deepseek-v4-preview',
      'inputCnyPerM': 0.8,
      'cacheCnyPerM': 0.016,
      'outputCnyPerM': 3.2,
      'costPerM': 0.0672,
      'priceSource': 'codingplan.fyi'
    },
    {
      'id': 'qwen-3-7-flash',
      'slug': 'qwen-3-7-flash',
      'inputCnyPerM': 0.204,
      'cacheCnyPerM': 0.0408,
      'outputCnyPerM': 0.884,
      'costPerM': 0.05236,
      'priceSource': 'codingplan.fyi'
    },
    {
      'id': 'Meta Muse Spark 1.2',
      'slug': 'muse-spark-1-2',
      'inputCnyPerM': 0.68,
      'cacheCnyPerM': 0.0136,
      'outputCnyPerM': 1.36,
      'costPerM': 0.05032,
      'priceSource': 'codingplan.fyi'
    }
  ]
};
