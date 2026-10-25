// 数据源:Vibe Code Bench 1-100(Vals AI,源站更新 2026-10-17)
// 来源:https://www.vals.ai/benchmarks/vcb-1-100
// 字段:models[]=模型级主榜(按 accuracy 降序);accuracy=准确率(%);costPerTest=每测试平均成本($);
//      latencyS=每测试平均耗时(秒);harness=实测所用 harness(本榜全部为 OpenHands)
// 用途:仅「VCB-1-100」独立标签页展示,不计入总览综合分与命中数(2026-10-24 起)。
window.VALSVCB = {
  'source': 'Vibe Code Bench 1-100',
  'url': 'https://www.vals.ai/benchmarks/vcb-1-100',
  'officialUrl': 'https://www.vals.ai/benchmarks/vcb-1-100',
  'version': '1.0',
  'updated': '2026-10-17',
  'refreshedAt': '2026-10-25 14:27',
  'harnesses': [
    'OpenHands'
  ],
  'stats': {
    'models': 26
  },
  'desc': 'Vibe Code Bench 1-100(Vals AI):让模型从一个能跑的 Web 应用出发,连续接住最多 10 轮产品需求(50 个真实场景);全部模型跑在固定 OpenHands harness 上,主指标为准确率(%),另记每测试平均成本与平均耗时。',
  'models': [
    {
      'id': 'meta/muse-wonder-full',
      'model': 'Muse Wonder Full',
      'accuracy': 33.98,
      'costPerTest': 19.5403,
      'latencyS': 7008.163,
      'harness': 'OpenHands',
      'avgInputTokens': null,
      'avgOutputTokens': null,
      'rank': 1,
      'src': 'official'
    },
    {
      'id': 'anthropic/claude-opus-5-5',
      'model': 'Claude Opus 5 5',
      'accuracy': 30.36,
      'costPerTest': 44.115239,
      'latencyS': 8909.323,
      'harness': 'OpenHands',
      'avgInputTokens': null,
      'avgOutputTokens': null,
      'rank': 2,
      'src': 'official'
    },
    {
      'id': 'anthropic/claude-opus-5',
      'model': 'Claude Opus 5',
      'accuracy': 28.53,
      'costPerTest': 41.49277,
      'latencyS': 4905.208,
      'harness': 'OpenHands',
      'avgInputTokens': null,
      'avgOutputTokens': null,
      'rank': 3,
      'src': 'official'
    },
    {
      'id': 'anthropic/claude-fable-5-1',
      'model': 'Claude Fable 5 1',
      'accuracy': 28,
      'costPerTest': 149.664612,
      'latencyS': 10359.295,
      'harness': 'OpenHands',
      'avgInputTokens': null,
      'avgOutputTokens': null,
      'rank': 4,
      'src': 'official'
    },
    {
      'id': 'openai/gpt-6-astra',
      'model': 'Gpt 6 Astra',
      'accuracy': 27.64,
      'costPerTest': 84.720155,
      'latencyS': 12339.625,
      'harness': 'OpenHands',
      'avgInputTokens': null,
      'avgOutputTokens': null,
      'rank': 5,
      'src': 'official'
    },
    {
      'id': 'meta/muse-wonder',
      'model': 'Muse Wonder',
      'accuracy': 26.55,
      'costPerTest': 13.721565,
      'latencyS': 1868.026,
      'harness': 'OpenHands',
      'avgInputTokens': null,
      'avgOutputTokens': null,
      'rank': 6,
      'src': 'official'
    },
    {
      'id': 'alibaba/qwen3.8-max-internal',
      'model': 'Qwen3.8 Max Internal',
      'accuracy': 24.83,
      'costPerTest': 11.589207,
      'latencyS': 9477.164,
      'harness': 'OpenHands',
      'avgInputTokens': null,
      'avgOutputTokens': null,
      'rank': 7,
      'src': 'official'
    },
    {
      'id': 'openai/gpt-5.6-luna',
      'model': 'Gpt 5.6 Luna',
      'accuracy': 22.59,
      'costPerTest': 4.914059,
      'latencyS': 7374.465,
      'harness': 'OpenHands',
      'avgInputTokens': null,
      'avgOutputTokens': null,
      'rank': 8,
      'src': 'official'
    },
    {
      'id': 'google/gemini-4-argon',
      'model': 'Gemini 4 Argon',
      'accuracy': 21.2,
      'costPerTest': 18.659304,
      'latencyS': 6179.48,
      'harness': 'OpenHands',
      'avgInputTokens': null,
      'avgOutputTokens': null,
      'rank': 9,
      'src': 'official'
    },
    {
      'id': 'meta/muse_spark_1_3_max',
      'model': 'Muse Spark 1 3 Max',
      'accuracy': 20.46,
      'costPerTest': 5.599743,
      'latencyS': 1201.545,
      'harness': 'OpenHands',
      'avgInputTokens': null,
      'avgOutputTokens': null,
      'rank': 10,
      'src': 'official'
    },
    {
      'id': 'anthropic/claude-haiku-5-5',
      'model': 'Claude Haiku 5 5',
      'accuracy': 20.41,
      'costPerTest': 8.304533,
      'latencyS': 14744.334,
      'harness': 'OpenHands',
      'avgInputTokens': null,
      'avgOutputTokens': null,
      'rank': 11,
      'src': 'official'
    },
    {
      'id': 'openai/gpt-5.6-sol',
      'model': 'Gpt 5.6 Sol',
      'accuracy': 20.01,
      'costPerTest': 47.425154,
      'latencyS': 9421.289,
      'harness': 'OpenHands',
      'avgInputTokens': null,
      'avgOutputTokens': null,
      'rank': 12,
      'src': 'official'
    },
    {
      'id': 'zai/glm-5.3',
      'model': 'Glm 5.3',
      'accuracy': 19.99,
      'costPerTest': 8.236953,
      'latencyS': 5169.473,
      'harness': 'OpenHands',
      'avgInputTokens': null,
      'avgOutputTokens': null,
      'rank': 13,
      'src': 'official'
    },
    {
      'id': 'google/gemini-3.8-flash',
      'model': 'Gemini 3.8 Flash',
      'accuracy': 18.77,
      'costPerTest': 18.906982,
      'latencyS': 3931.352,
      'harness': 'OpenHands',
      'avgInputTokens': null,
      'avgOutputTokens': null,
      'rank': 14,
      'src': 'official'
    },
    {
      'id': 'kimi/kimi-k3',
      'model': 'Kimi K3',
      'accuracy': 18.24,
      'costPerTest': 9.39737,
      'latencyS': 6487.278,
      'harness': 'OpenHands',
      'avgInputTokens': null,
      'avgOutputTokens': null,
      'rank': 15,
      'src': 'official'
    },
    {
      'id': 'deepseek/deepseek-v4-pro-0813',
      'model': 'Deepseek V4 Pro 0813',
      'accuracy': 17.53,
      'costPerTest': 5.892792,
      'latencyS': 2262.422,
      'harness': 'OpenHands',
      'avgInputTokens': null,
      'avgOutputTokens': null,
      'rank': 16,
      'src': 'official'
    },
    {
      'id': 'deepseek/deepseek-v4.1-flash',
      'model': 'Deepseek V4.1 Flash',
      'accuracy': 16.38,
      'costPerTest': 0.688342,
      'latencyS': 1701.009,
      'harness': 'OpenHands',
      'avgInputTokens': null,
      'avgOutputTokens': null,
      'rank': 17,
      'src': 'official'
    },
    {
      'id': 'zai/glm-5.3-flash',
      'model': 'Glm 5.3 Flash',
      'accuracy': 16.03,
      'costPerTest': 0.462842,
      'latencyS': 2343.096,
      'harness': 'OpenHands',
      'avgInputTokens': null,
      'avgOutputTokens': null,
      'rank': 18,
      'src': 'official'
    },
    {
      'id': 'openai/gpt-5.6-terra',
      'model': 'Gpt 5.6 Terra',
      'accuracy': 14.82,
      'costPerTest': 33.326696,
      'latencyS': 6536.122,
      'harness': 'OpenHands',
      'avgInputTokens': null,
      'avgOutputTokens': null,
      'rank': 19,
      'src': 'official'
    },
    {
      'id': 'grok/grok-4.6',
      'model': 'Grok 4.6',
      'accuracy': 14.75,
      'costPerTest': 26.271157,
      'latencyS': 7851.405,
      'harness': 'OpenHands',
      'avgInputTokens': null,
      'avgOutputTokens': null,
      'rank': 20,
      'src': 'official'
    },
    {
      'id': 'mistralai/mistral-large-4',
      'model': 'Mistral Large 4',
      'accuracy': 14.26,
      'costPerTest': 6.749045,
      'latencyS': 3593.189,
      'harness': 'OpenHands',
      'avgInputTokens': null,
      'avgOutputTokens': null,
      'rank': 21,
      'src': 'official'
    },
    {
      'id': 'anthropic/claude-sonnet-5',
      'model': 'Claude Sonnet 5',
      'accuracy': 13.82,
      'costPerTest': 71.148517,
      'latencyS': 15369.858,
      'harness': 'OpenHands',
      'avgInputTokens': null,
      'avgOutputTokens': null,
      'rank': 22,
      'src': 'official'
    },
    {
      'id': 'alibaba/qwen3.8-max',
      'model': 'Qwen3.8 Max',
      'accuracy': 12.83,
      'costPerTest': 9.675734,
      'latencyS': 5735.815,
      'harness': 'OpenHands',
      'avgInputTokens': null,
      'avgOutputTokens': null,
      'rank': 23,
      'src': 'official'
    },
    {
      'id': 'minimax/MiniMax-M3',
      'model': 'MiniMax M3',
      'accuracy': 9.22,
      'costPerTest': 3.028103,
      'latencyS': 1570.129,
      'harness': 'OpenHands',
      'avgInputTokens': null,
      'avgOutputTokens': null,
      'rank': 24,
      'src': 'official'
    },
    {
      'id': 'thinkingmachines/inkling',
      'model': 'Inkling',
      'accuracy': 7.33,
      'costPerTest': 4.997334,
      'latencyS': 3001.539,
      'harness': 'OpenHands',
      'avgInputTokens': null,
      'avgOutputTokens': null,
      'rank': 25,
      'src': 'official'
    },
    {
      'id': 'google/gemini-3.1-pro-preview',
      'model': 'Gemini 3.1 Pro Preview',
      'accuracy': 6.69,
      'costPerTest': 3.358183,
      'latencyS': 688.056,
      'harness': 'OpenHands',
      'avgInputTokens': null,
      'avgOutputTokens': null,
      'rank': 26,
      'src': 'official'
    }
  ]
};
