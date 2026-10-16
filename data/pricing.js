// 数据源:模型 API 标价(codingplan.fyi plan-models.json 的 pricing 字段),更新于 2026-10-16
// 来源:https://www.codingplan.fyi/plan-models.json + config.json(汇率;官方:https://www.codingplan.fyi/?view=usage)
// 字段说明:models[]=模型级标准价(id=canonical 模型名/slug=源站 slug/
//   inputCnyPerM·cacheCnyPerM·outputCnyPerM=输入·缓存输入·输出单价(人民币/百万 token)/
//   costPerM=每百万 token 综合成本);按 costPerM 降序。
// 口径:综合成本(¥/百万token) = cacheHitRate×缓存输入价 + (1−cacheHitRate−outputRatio)×输入价 + outputRatio×输出价;
//   折算系数取自源站 workload(cacheHitRate=0.95, outputRatio=0.005),
//   仅收 $ / ¥ 计价档位(积分·Credits·AFP·Token 额度单位不可比,已丢弃),
//   同 slug 取 (输入|缓存|输出) 三元组众数;美元按汇率 6.8 折算人民币。
// 用途:总览矩阵「性价比」列(综合分 ÷ costPerM);价格为快照口径,可能滞后于平台官网。
window.PRICING = {
  'source': 'Coding Plan 对比(codingplan.fyi)',
  'url': 'https://www.codingplan.fyi/plan-models.json',
  'officialUrl': 'https://www.codingplan.fyi/?view=usage',
  'updated': '2026-10-16',
  'refreshedAt': '2026-10-16 22:05',
  'usdToCnyRate': 6.8,
  'workload': {
    'cacheHitRate': 0.95,
    'outputRatio': 0.005
  },
  'formula': '综合成本(¥/百万token) = cacheHitRate×缓存输入价 + (1−cacheHitRate−outputRatio)×输入价 + outputRatio×输出价',
  'stats': {
    'planModels': 2281,
    'withPricing': 1465,
    'comparable': 1000,
    'models': 93,
    'unresolved': 19
  },
  'desc': 'codingplan.fyi plan-models.json 的模型 API 标价快照(输入 / 缓存输入 / 输出三档单价,¥/百万 token),按源站统一工作负载(95% 缓存命中、0.5% 输出占比)折算每百万 token 综合成本,供总览矩阵「性价比」列使用。',
  'models': [
    {
      'id': 'Claude Fable 5',
      'slug': 'claude-fable-5',
      'inputCnyPerM': 68,
      'cacheCnyPerM': 6.8,
      'outputCnyPerM': 340,
      'costPerM': 11.22
    },
    {
      'id': 'GPT-6 Astra',
      'slug': 'gpt-6-astra',
      'inputCnyPerM': 68,
      'cacheCnyPerM': 6.8,
      'outputCnyPerM': 340,
      'costPerM': 11.22
    },
    {
      'id': 'Grok 4.7',
      'slug': 'grok-4-7',
      'inputCnyPerM': 27.2,
      'cacheCnyPerM': 6.8,
      'outputCnyPerM': 81.6,
      'costPerM': 8.092
    },
    {
      'id': 'Claude Fable 5.1',
      'slug': 'claude-fable-5-1',
      'inputCnyPerM': 68,
      'cacheCnyPerM': 1.7,
      'outputCnyPerM': 340,
      'costPerM': 6.375
    },
    {
      'id': 'GPT-5.5',
      'slug': 'gpt-5-5',
      'inputCnyPerM': 34,
      'cacheCnyPerM': 3.4,
      'outputCnyPerM': 204,
      'costPerM': 5.78
    },
    {
      'id': 'fugu-ultra',
      'slug': 'fugu-ultra',
      'inputCnyPerM': 34,
      'cacheCnyPerM': 3.4,
      'outputCnyPerM': 204,
      'costPerM': 5.78
    },
    {
      'id': 'Claude Opus 4.6',
      'slug': 'claude-opus-4-6',
      'inputCnyPerM': 34,
      'cacheCnyPerM': 3.4,
      'outputCnyPerM': 170,
      'costPerM': 5.61
    },
    {
      'id': 'Claude Opus 4.7',
      'slug': 'claude-opus-4-7',
      'inputCnyPerM': 34,
      'cacheCnyPerM': 3.4,
      'outputCnyPerM': 170,
      'costPerM': 5.61
    },
    {
      'id': 'Claude Opus 4.8',
      'slug': 'claude-opus-4-8',
      'inputCnyPerM': 34,
      'cacheCnyPerM': 3.4,
      'outputCnyPerM': 170,
      'costPerM': 5.61
    },
    {
      'id': 'Claude Opus 5',
      'slug': 'claude-opus-5',
      'inputCnyPerM': 34,
      'cacheCnyPerM': 3.4,
      'outputCnyPerM': 170,
      'costPerM': 5.61
    },
    {
      'id': 'glm-5-2-fast',
      'slug': 'glm-5-2-fast',
      'inputCnyPerM': 20.4,
      'cacheCnyPerM': 3.4,
      'outputCnyPerM': 69.7,
      'costPerM': 4.4965
    },
    {
      'id': 'GPT-5.6 Sol',
      'slug': 'gpt-5-6-sol',
      'inputCnyPerM': 27.2,
      'cacheCnyPerM': 2.72,
      'outputCnyPerM': 136,
      'costPerM': 4.488
    },
    {
      'id': 'Qwen3.7-Max',
      'slug': 'qwen-3-7-max',
      'inputCnyPerM': 17,
      'cacheCnyPerM': 3.4,
      'outputCnyPerM': 51,
      'costPerM': 4.25
    },
    {
      'id': 'Grok 4.5',
      'slug': 'grok-4-5',
      'inputCnyPerM': 13.6,
      'cacheCnyPerM': 3.4,
      'outputCnyPerM': 40.8,
      'costPerM': 4.046
    },
    {
      'id': 'Grok 4.6',
      'slug': 'grok-4-6',
      'inputCnyPerM': 13.6,
      'cacheCnyPerM': 3.4,
      'outputCnyPerM': 40.8,
      'costPerM': 4.046
    },
    {
      'id': 'Claude Sonnet 4.6',
      'slug': 'claude-sonnet-4-6',
      'inputCnyPerM': 20.4,
      'cacheCnyPerM': 2.04,
      'outputCnyPerM': 102,
      'costPerM': 3.366
    },
    {
      'id': 'Kimi K3',
      'slug': 'kimi-k3',
      'inputCnyPerM': 20.4,
      'cacheCnyPerM': 2.04,
      'outputCnyPerM': 102,
      'costPerM': 3.366
    },
    {
      'id': 'kimi-k2-7-code-highspeed',
      'slug': 'kimi-k2-7-code-highspeed',
      'inputCnyPerM': 12.92,
      'cacheCnyPerM': 2.584,
      'outputCnyPerM': 54.4,
      'costPerM': 3.3082
    },
    {
      'id': 'Claude Opus 5.5',
      'slug': 'claude-opus-5-5',
      'inputCnyPerM': 27.2,
      'cacheCnyPerM': 1.36,
      'outputCnyPerM': 136,
      'costPerM': 3.196
    },
    {
      'id': 'GPT-5.4',
      'slug': 'gpt-5-4',
      'inputCnyPerM': 17,
      'cacheCnyPerM': 1.7,
      'outputCnyPerM': 102,
      'costPerM': 2.89
    },
    {
      'id': 'Qwen3.8-Max',
      'slug': 'qwen-3-8-max',
      'inputCnyPerM': 13.6,
      'cacheCnyPerM': 1.7,
      'outputCnyPerM': 40.8,
      'costPerM': 2.431
    },
    {
      'id': 'Qwen3.6-Max',
      'slug': 'qwen-3-6-max-preview',
      'inputCnyPerM': 8.84,
      'cacheCnyPerM': 1.768,
      'outputCnyPerM': 53.04,
      'costPerM': 2.3426
    },
    {
      'id': 'GPT-5.6 Terra',
      'slug': 'gpt-5-6-terra',
      'inputCnyPerM': 13.6,
      'cacheCnyPerM': 1.36,
      'outputCnyPerM': 81.6,
      'costPerM': 2.312
    },
    {
      'id': 'Gemini 3.1 Pro',
      'slug': 'gemini-3-1-pro',
      'inputCnyPerM': 13.6,
      'cacheCnyPerM': 1.36,
      'outputCnyPerM': 81.6,
      'costPerM': 2.312
    },
    {
      'id': 'GLM-5.1',
      'slug': 'glm-5-1',
      'inputCnyPerM': 9.52,
      'cacheCnyPerM': 1.768,
      'outputCnyPerM': 29.92,
      'costPerM': 2.2576
    },
    {
      'id': 'GLM-5.2',
      'slug': 'glm-5-2',
      'inputCnyPerM': 9.52,
      'cacheCnyPerM': 1.768,
      'outputCnyPerM': 29.92,
      'costPerM': 2.2576
    },
    {
      'id': 'GLM-5.3',
      'slug': 'glm-5-3',
      'inputCnyPerM': 9.52,
      'cacheCnyPerM': 1.768,
      'outputCnyPerM': 29.92,
      'costPerM': 2.2576
    },
    {
      'id': 'Claude Sonnet 5',
      'slug': 'claude-sonnet-5',
      'inputCnyPerM': 13.6,
      'cacheCnyPerM': 1.36,
      'outputCnyPerM': 68,
      'costPerM': 2.244
    },
    {
      'id': 'GPT-6 Sol',
      'slug': 'gpt-6-sol',
      'inputCnyPerM': 13.6,
      'cacheCnyPerM': 1.36,
      'outputCnyPerM': 68,
      'costPerM': 2.244
    },
    {
      'id': 'GPT-5.2',
      'slug': 'gpt-5-2',
      'inputCnyPerM': 11.9,
      'cacheCnyPerM': 1.19,
      'outputCnyPerM': 95.2,
      'costPerM': 2.142
    },
    {
      'id': 'GPT-5.3 Codex',
      'slug': 'gpt-5-3-codex',
      'inputCnyPerM': 11.9,
      'cacheCnyPerM': 1.19,
      'outputCnyPerM': 95.2,
      'costPerM': 2.142
    },
    {
      'id': 'Qwen3.6-Plus',
      'slug': 'qwen-3-6-plus',
      'inputCnyPerM': 13.6,
      'cacheCnyPerM': 1.36,
      'outputCnyPerM': 40.8,
      'costPerM': 2.108
    },
    {
      'id': 'Gemini 3.5 Flash',
      'slug': 'gemini-3-5-flash',
      'inputCnyPerM': 10.2,
      'cacheCnyPerM': 1.02,
      'outputCnyPerM': 61.2,
      'costPerM': 1.734
    },
    {
      'id': 'GLM 5',
      'slug': 'glm-5',
      'inputCnyPerM': 6.8,
      'cacheCnyPerM': 1.36,
      'outputCnyPerM': 21.76,
      'costPerM': 1.7068
    },
    {
      'id': 'Gemini 3.6 Flash',
      'slug': 'gemini-3-6-flash',
      'inputCnyPerM': 10.2,
      'cacheCnyPerM': 1.02,
      'outputCnyPerM': 51,
      'costPerM': 1.683
    },
    {
      'id': 'Gemini 3.7 Flash',
      'slug': 'gemini-3-7-flash',
      'inputCnyPerM': 10.2,
      'cacheCnyPerM': 1.02,
      'outputCnyPerM': 51,
      'costPerM': 1.683
    },
    {
      'id': 'Kimi-K2.7-Code',
      'slug': 'kimi-k2-7-code',
      'inputCnyPerM': 6.46,
      'cacheCnyPerM': 1.292,
      'outputCnyPerM': 27.2,
      'costPerM': 1.6541
    },
    {
      'id': 'Claude Sonnet 5.5',
      'slug': 'claude-sonnet-5-5',
      'inputCnyPerM': 13.6,
      'cacheCnyPerM': 0.68,
      'outputCnyPerM': 68,
      'costPerM': 1.598
    },
    {
      'id': 'GPT-6.1 Sol',
      'slug': 'gpt-6-1-sol',
      'inputCnyPerM': 13.6,
      'cacheCnyPerM': 0.68,
      'outputCnyPerM': 68,
      'costPerM': 1.598
    },
    {
      'id': 'Inkling',
      'slug': 'inkling',
      'inputCnyPerM': 6.8,
      'cacheCnyPerM': 1.156,
      'outputCnyPerM': 27.54,
      'costPerM': 1.5419
    },
    {
      'id': 'Composer 2.5',
      'slug': 'composer-2-5',
      'inputCnyPerM': 3.4,
      'cacheCnyPerM': 1.36,
      'outputCnyPerM': 17,
      'costPerM': 1.53
    },
    {
      'id': 'Meta Muse Spark 1.1',
      'slug': 'muse-spark-1-1',
      'inputCnyPerM': 8.5,
      'cacheCnyPerM': 1.02,
      'outputCnyPerM': 28.9,
      'costPerM': 1.496
    },
    {
      'id': 'Muse Spark 1.3',
      'slug': 'muse-spark-1-3',
      'inputCnyPerM': 8.5,
      'cacheCnyPerM': 1.02,
      'outputCnyPerM': 28.9,
      'costPerM': 1.496
    },
    {
      'id': 'Mistral Large 4',
      'slug': 'mistral-large-4',
      'inputCnyPerM': 9.248,
      'cacheCnyPerM': 0.952,
      'outputCnyPerM': 28.424,
      'costPerM': 1.46268
    },
    {
      'id': 'Kimi-K2.6',
      'slug': 'kimi-k2-6',
      'inputCnyPerM': 6.46,
      'cacheCnyPerM': 1.088,
      'outputCnyPerM': 27.2,
      'costPerM': 1.4603
    },
    {
      'id': 'Claude Haiku 4.5',
      'slug': 'claude-haiku-4-5',
      'inputCnyPerM': 6.8,
      'cacheCnyPerM': 0.68,
      'outputCnyPerM': 34,
      'costPerM': 1.122
    },
    {
      'id': 'Nemotron 3 Ultra',
      'slug': 'nemotron-3-ultra',
      'inputCnyPerM': 4.08,
      'cacheCnyPerM': 0.816,
      'outputCnyPerM': 16.32,
      'costPerM': 1.0404
    },
    {
      'id': 'Kimi K2.5',
      'slug': 'kimi-k2-5',
      'inputCnyPerM': 4.08,
      'cacheCnyPerM': 0.68,
      'outputCnyPerM': 20.4,
      'costPerM': 0.9316
    },
    {
      'id': 'doubao-seed-2-1-turbo',
      'slug': 'doubao-seed-2-1-turbo',
      'inputCnyPerM': 3.4,
      'cacheCnyPerM': 0.68,
      'outputCnyPerM': 17,
      'costPerM': 0.884
    },
    {
      'id': 'GPT-5.4 Mini',
      'slug': 'gpt-5-4-mini',
      'inputCnyPerM': 5.1,
      'cacheCnyPerM': 0.51,
      'outputCnyPerM': 30.6,
      'costPerM': 0.867
    },
    {
      'id': 'Inkling Small',
      'slug': 'inkling-small',
      'inputCnyPerM': 3.4,
      'cacheCnyPerM': 0.68,
      'outputCnyPerM': 8.16,
      'costPerM': 0.8398
    },
    {
      'id': 'Gemini 3.8 Flash',
      'slug': 'gemini-3-8-flash',
      'inputCnyPerM': 5.1,
      'cacheCnyPerM': 0.51,
      'outputCnyPerM': 23.8,
      'costPerM': 0.833
    },
    {
      'id': 'Step 5 Preview',
      'slug': 'step-5-preview',
      'inputCnyPerM': 6.8,
      'cacheCnyPerM': 0.34,
      'outputCnyPerM': 18.36,
      'costPerM': 0.7208
    },
    {
      'id': 'Qwen3.7-Plus',
      'slug': 'qwen-3-7-plus',
      'inputCnyPerM': 2.72,
      'cacheCnyPerM': 0.544,
      'outputCnyPerM': 10.88,
      'costPerM': 0.6936
    },
    {
      'id': 'glm-5-3-flashx',
      'slug': 'glm-5-3-flashx',
      'inputCnyPerM': 2.516,
      'cacheCnyPerM': 0.51,
      'outputCnyPerM': 8.5,
      'costPerM': 0.64022
    },
    {
      'id': 'Tencent Hy4 Preview',
      'slug': 'hy4-preview',
      'inputCnyPerM': 5.6712,
      'cacheCnyPerM': 0.2856,
      'outputCnyPerM': 17.0068,
      'costPerM': 0.611558
    },
    {
      'id': 'Gemini 3 Flash Preview',
      'slug': 'gemini-3-flash-preview',
      'inputCnyPerM': 3.4,
      'cacheCnyPerM': 0.34,
      'outputCnyPerM': 20.4,
      'costPerM': 0.578
    },
    {
      'id': 'deepseek-v4-flash-fast',
      'slug': 'deepseek-v4-flash-fast',
      'inputCnyPerM': 1.904,
      'cacheCnyPerM': 0.476,
      'outputCnyPerM': 3.808,
      'costPerM': 0.55692
    },
    {
      'id': 'MiniMax-M2.7',
      'slug': 'minimax-m2-7',
      'inputCnyPerM': 2.04,
      'cacheCnyPerM': 0.408,
      'outputCnyPerM': 8.16,
      'costPerM': 0.5202
    },
    {
      'id': 'MiniMax-M3',
      'slug': 'minimax-m3',
      'inputCnyPerM': 2.04,
      'cacheCnyPerM': 0.408,
      'outputCnyPerM': 8.16,
      'costPerM': 0.5202
    },
    {
      'id': 'Qwen3.8-27B',
      'slug': 'qwen-3-8-27b',
      'inputCnyPerM': 2.72,
      'cacheCnyPerM': 0.272,
      'outputCnyPerM': 20.4,
      'costPerM': 0.4828
    },
    {
      'id': 'gemma-4-31b',
      'slug': 'gemma-4-31b',
      'inputCnyPerM': 0.952,
      'cacheCnyPerM': 0.34,
      'outputCnyPerM': 2.72,
      'costPerM': 0.37944
    },
    {
      'id': 'Gemini 3.5 Flash Lite',
      'slug': 'gemini-3-5-flash-lite',
      'inputCnyPerM': 2.04,
      'cacheCnyPerM': 0.204,
      'outputCnyPerM': 17,
      'costPerM': 0.3706
    },
    {
      'id': 'Step 3.7 Flash',
      'slug': 'step-3-7-flash',
      'inputCnyPerM': 1.36,
      'cacheCnyPerM': 0.272,
      'outputCnyPerM': 7.82,
      'costPerM': 0.3587
    },
    {
      'id': 'MiniMax M2.5',
      'slug': 'minimax-m2-5',
      'inputCnyPerM': 2.04,
      'cacheCnyPerM': 0.204,
      'outputCnyPerM': 8.16,
      'costPerM': 0.3264
    },
    {
      'id': 'Gemini 3.1 Flash Lite',
      'slug': 'gemini-3-1-flash-lite',
      'inputCnyPerM': 1.7,
      'cacheCnyPerM': 0.204,
      'outputCnyPerM': 10.2,
      'costPerM': 0.3213
    },
    {
      'id': 'GPT-5 Mini',
      'slug': 'gpt-5-mini',
      'inputCnyPerM': 1.7,
      'cacheCnyPerM': 0.17,
      'outputCnyPerM': 13.6,
      'costPerM': 0.306
    },
    {
      'id': 'Tencent Hy3',
      'slug': 'hy3',
      'inputCnyPerM': 0.952,
      'cacheCnyPerM': 0.238,
      'outputCnyPerM': 3.944,
      'costPerM': 0.28866
    },
    {
      'id': 'space-bunny',
      'slug': 'space-bunny',
      'inputCnyPerM': 1.02,
      'cacheCnyPerM': 0.204,
      'outputCnyPerM': 4.08,
      'costPerM': 0.2601
    },
    {
      'id': 'gpt-oss-20b',
      'slug': 'gpt-oss-20b',
      'inputCnyPerM': 0.476,
      'cacheCnyPerM': 0.238,
      'outputCnyPerM': 2.04,
      'costPerM': 0.25772
    },
    {
      'id': 'GLM-5.3-Flash',
      'slug': 'glm-5-3-flash',
      'inputCnyPerM': 1.02,
      'cacheCnyPerM': 0.204,
      'outputCnyPerM': 3.4,
      'costPerM': 0.2567
    },
    {
      'id': 'GPT-5.4 Nano',
      'slug': 'gpt-5-4-nano',
      'inputCnyPerM': 1.36,
      'cacheCnyPerM': 0.136,
      'outputCnyPerM': 8.5,
      'costPerM': 0.2329
    },
    {
      'id': 'GPT-5.6 Luna',
      'slug': 'gpt-5-6-luna',
      'inputCnyPerM': 1.36,
      'cacheCnyPerM': 0.136,
      'outputCnyPerM': 8.16,
      'costPerM': 0.2312
    },
    {
      'id': 'MAI-Code-1.1-Flash',
      'slug': 'mai-code-1-1-flash',
      'inputCnyPerM': 1.36,
      'cacheCnyPerM': 0.136,
      'outputCnyPerM': 8.16,
      'costPerM': 0.2312
    },
    {
      'id': 'MiMo-V2.5-Pro',
      'slug': 'mimo-v2-5-pro',
      'inputCnyPerM': 2.958,
      'cacheCnyPerM': 0.02448,
      'outputCnyPerM': 5.916,
      'costPerM': 0.185946
    },
    {
      'id': 'MiMo-V2.6-Pro',
      'slug': 'mimo-v2-6-pro',
      'inputCnyPerM': 2.958,
      'cacheCnyPerM': 0.02448,
      'outputCnyPerM': 5.916,
      'costPerM': 0.185946
    },
    {
      'id': 'DeepSeek V4 Flash 0731',
      'slug': 'deepseek-v4-flash-0731',
      'inputCnyPerM': 2.04,
      'cacheCnyPerM': 0.0408,
      'outputCnyPerM': 8.16,
      'costPerM': 0.17136
    },
    {
      'id': 'longcat-2-0',
      'slug': 'longcat-2-0',
      'inputCnyPerM': 2.04,
      'cacheCnyPerM': 0.0408,
      'outputCnyPerM': 8.16,
      'costPerM': 0.17136
    },
    {
      'id': 'Qwen3.8-Flash',
      'slug': 'qwen-3-8-flash-next',
      'inputCnyPerM': 1.088,
      'cacheCnyPerM': 0.1088,
      'outputCnyPerM': 3.196,
      'costPerM': 0.1683
    },
    {
      'id': 'step-3-5-flash',
      'slug': 'step-3-5-flash',
      'inputCnyPerM': 0.612,
      'cacheCnyPerM': 0.136,
      'outputCnyPerM': 2.04,
      'costPerM': 0.16694
    },
    {
      'id': 'qwen-3-8-omni-flash',
      'slug': 'qwen-3-8-omni-flash',
      'inputCnyPerM': 1.02,
      'cacheCnyPerM': 0.1088,
      'outputCnyPerM': 3.196,
      'costPerM': 0.16524
    },
    {
      'id': 'GPT-OSS 120B',
      'slug': 'gpt-oss-120b',
      'inputCnyPerM': 1.02,
      'cacheCnyPerM': 0.0952,
      'outputCnyPerM': 4.08,
      'costPerM': 0.15674
    },
    {
      'id': 'DeepSeek V4 Pro 0813',
      'slug': 'deepseek-v4-pro-preview',
      'inputCnyPerM': 2.4,
      'cacheCnyPerM': 0.02,
      'outputCnyPerM': 4.8,
      'costPerM': 0.151
    },
    {
      'id': 'nemotron-3-super',
      'slug': 'nemotron-3-super',
      'inputCnyPerM': 0.102,
      'cacheCnyPerM': 0.102,
      'outputCnyPerM': 4.08,
      'costPerM': 0.12189
    },
    {
      'id': 'Claude Haiku 5.5',
      'slug': 'claude-haiku-5-5',
      'inputCnyPerM': 0.68,
      'cacheCnyPerM': 0.068,
      'outputCnyPerM': 3.4,
      'costPerM': 0.1122
    },
    {
      'id': 'GPT-6 Luna',
      'slug': 'gpt-6-luna',
      'inputCnyPerM': 0.68,
      'cacheCnyPerM': 0.068,
      'outputCnyPerM': 3.4,
      'costPerM': 0.1122
    },
    {
      'id': 'DeepSeek V4 Flash Vision Exp',
      'slug': 'deepseek-v4-flash-vision-exp',
      'inputCnyPerM': 1.02,
      'cacheCnyPerM': 0.0204,
      'outputCnyPerM': 4.08,
      'costPerM': 0.08568
    },
    {
      'id': 'DeepSeek V4.1 Flash',
      'slug': 'deepseek-v4-1-flash',
      'inputCnyPerM': 1.02,
      'cacheCnyPerM': 0.0204,
      'outputCnyPerM': 4.08,
      'costPerM': 0.08568
    },
    {
      'id': 'MiMo-V2.5',
      'slug': 'mimo-v2-5',
      'inputCnyPerM': 0.952,
      'cacheCnyPerM': 0.01904,
      'outputCnyPerM': 1.904,
      'costPerM': 0.070448
    },
    {
      'id': 'MiMo-V2.6-Flash',
      'slug': 'mimo-v2-6-flash',
      'inputCnyPerM': 0.952,
      'cacheCnyPerM': 0.01904,
      'outputCnyPerM': 1.904,
      'costPerM': 0.070448
    },
    {
      'id': 'deepseek-v4-preview',
      'slug': 'deepseek-v4-preview',
      'inputCnyPerM': 0.8,
      'cacheCnyPerM': 0.016,
      'outputCnyPerM': 1.6,
      'costPerM': 0.0592
    },
    {
      'id': 'qwen-3-7-flash',
      'slug': 'qwen-3-7-flash',
      'inputCnyPerM': 0.204,
      'cacheCnyPerM': 0.0408,
      'outputCnyPerM': 0.884,
      'costPerM': 0.05236
    },
    {
      'id': 'Meta Muse Spark 1.2',
      'slug': 'muse-spark-1-2',
      'inputCnyPerM': 0.68,
      'cacheCnyPerM': 0.0136,
      'outputCnyPerM': 1.36,
      'costPerM': 0.05032
    }
  ]
};
