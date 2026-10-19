// 数据源:Coding Plan 对比(codingplan.fyi)「额度/价格对比」快速对比,更新于 2026-10-19
// 来源:https://www.codingplan.fyi/model-comparison-presets.json + plans.json + plan-models.json + models.json + platforms.json(官方:https://www.codingplan.fyi/?view=usage)
// 字段说明:groups[]=固定精选模型分组(kind single=单模型列/multi=多模型列);row=比价行
//   (platform 平台/plan 套餐/qualifier 谷峰等档位标签/price 折算人民币月价按量行计「按量」/
//    unit 综合单价 ¥/亿/usage 实测月用量/featured 是否精选平台);排序=综合单价升序。
// 口径:综合单价与月用量为源站实测/计算值(95% 缓存命中率、0.5% 输出占比),美元按 6.8 折算;
// 用途:「套餐对比」页展示;action 推广跳转已丢弃,购买请前往源站。
window.CODINGPLAN = {
  'source': 'Coding Plan 对比(codingplan.fyi)',
  'url': 'https://www.codingplan.fyi/plan-models.json',
  'officialUrl': 'https://www.codingplan.fyi/?view=usage',
  'updated': '2026-10-19',
  'siteUpdated': '2026.10.13',
  'refreshedAt': '2026-10-20 00:34',
  'usdToCnyRate': 6.8,
  'stats': {
    'groups': 2,
    'rows': 296,
    'points': 1361
  },
  'presetTitle': '精选模型价格与用量',
  'presetDesc': '订阅套餐与按量 API 使用同一口径比较综合单价；用量为参考值，各模型额度不相加。',
  'caliberNote': '统一口径：有具体输入、输出、缓存价格的为计算得出，其余的除了Kimi套餐没有购买到之外，均为实测数据，实测尽量构造95%缓存命中率和0.5%的输出占比。',
  'desc': 'codingplan.fyi「额度/价格对比」快速对比快照:按固定精选模型分列的套餐比价(月价 / 综合单价 / 实测月用量)。',
  'groups': [
    {
      'id': 'high-volume-models',
      'title': '甜品级模型',
      'kind': 'multi',
      'desc': '包含：DeepSeek-V4.1-Flash、DeepSeek-V4-Flash-0731、GLM-5.3-Flash、GPT-6-Luna、Kimi-K2.8-Preview、minimax-m3-1-flash-preview',
      'rows': [
        {
          'platform': 'Codex',
          'model': 'GPT-6-Luna',
          'plan': 'Pro $200',
          'qualifier': '',
          'price': '¥1,360 / 月',
          'unit': '¥0.68 / 亿',
          'usage': '1,920亿',
          'featured': true
        },
        {
          'platform': 'Command Code',
          'model': 'DeepSeek-V4.1-Flash',
          'plan': 'Go',
          'qualifier': '[谷]',
          'price': '¥6.8 / 月',
          'unit': '¥0.884 / 亿',
          'usage': '7.52亿',
          'featured': false
        },
        {
          'platform': 'OpenCode',
          'model': 'DeepSeek-V4.1-Flash',
          'plan': 'Go',
          'qualifier': '[谷]',
          'price': '¥68 / 月',
          'unit': '¥1.156 / 亿',
          'usage': '60.2亿',
          'featured': true
        },
        {
          'platform': 'Codex',
          'model': 'GPT-6-Luna',
          'plan': 'Plus',
          'qualifier': '',
          'price': '¥136 / 月',
          'unit': '¥1.428 / 亿',
          'usage': '96亿',
          'featured': true
        },
        {
          'platform': 'Codex',
          'model': 'GPT-6-Luna',
          'plan': 'Pro $100',
          'qualifier': '',
          'price': '¥680 / 月',
          'unit': '¥1.428 / 亿',
          'usage': '480亿',
          'featured': true
        },
        {
          'platform': 'Command Code',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': 'Go',
          'qualifier': '[谷]',
          'price': '¥6.8 / 月',
          'unit': '¥1.496 / 亿',
          'usage': '4.51亿',
          'featured': false
        },
        {
          'platform': 'Command Code',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': 'GOAT',
          'qualifier': '[谷]',
          'price': '¥68 / 月',
          'unit': '¥1.496 / 亿',
          'usage': '45.1亿',
          'featured': false
        },
        {
          'platform': 'Command Code',
          'model': 'DeepSeek-V4.1-Flash',
          'plan': 'GOAT',
          'qualifier': '[谷]',
          'price': '¥68 / 月',
          'unit': '¥1.496 / 亿',
          'usage': '45.1亿',
          'featured': false
        },
        {
          'platform': 'Command Code',
          'model': 'DeepSeek-V4.1-Flash',
          'plan': 'Go',
          'qualifier': '[峰]',
          'price': '¥6.8 / 月',
          'unit': '¥1.836 / 亿',
          'usage': '3.76亿',
          'featured': false
        },
        {
          'platform': 'Command Code',
          'model': 'GPT-6-Luna',
          'plan': 'Go',
          'qualifier': '[≤272K]',
          'price': '¥6.8 / 月',
          'unit': '¥1.904 / 亿',
          'usage': '3.55亿',
          'featured': false
        },
        {
          'platform': 'OpenCode',
          'model': 'DeepSeek-V4.1-Flash',
          'plan': 'Go',
          'qualifier': '[峰]',
          'price': '¥68 / 月',
          'unit': '¥2.244 / 亿',
          'usage': '30.1亿',
          'featured': true
        },
        {
          'platform': 'OpenCode',
          'model': 'DeepSeek-V4.1-Flash',
          'plan': 'Go Plus',
          'qualifier': '[谷]',
          'price': '¥272 / 月',
          'unit': '¥2.244 / 亿',
          'usage': '120.3亿',
          'featured': true
        },
        {
          'platform': 'Command Code',
          'model': 'GLM-5.3-Flash',
          'plan': 'Go',
          'qualifier': '',
          'price': '¥6.8 / 月',
          'unit': '¥2.584 / 亿',
          'usage': '2.61亿',
          'featured': false
        },
        {
          'platform': 'Command Code',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': 'Pro',
          'qualifier': '[谷]',
          'price': '¥136 / 月',
          'unit': '¥2.584 / 亿',
          'usage': '52.6亿',
          'featured': false
        },
        {
          'platform': 'Command Code',
          'model': 'DeepSeek-V4.1-Flash',
          'plan': 'Pro',
          'qualifier': '[谷]',
          'price': '¥136 / 月',
          'unit': '¥2.584 / 亿',
          'usage': '52.6亿',
          'featured': false
        },
        {
          'platform': 'Command Code',
          'model': 'DeepSeek-V4.1-Flash',
          'plan': 'Go',
          'qualifier': '[Fast] [谷]',
          'price': '¥6.8 / 月',
          'unit': '¥2.924 / 亿',
          'usage': '2.31亿',
          'featured': false
        },
        {
          'platform': 'Command Code',
          'model': 'DeepSeek-V4.1-Flash',
          'plan': 'GOAT',
          'qualifier': '[Fast] [谷]',
          'price': '¥68 / 月',
          'unit': '¥2.924 / 亿',
          'usage': '23.1亿',
          'featured': false
        },
        {
          'platform': 'Command Code',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': 'Go',
          'qualifier': '[峰]',
          'price': '¥6.8 / 月',
          'unit': '¥2.992 / 亿',
          'usage': '2.26亿',
          'featured': false
        },
        {
          'platform': 'Command Code',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': 'GOAT',
          'qualifier': '[峰]',
          'price': '¥68 / 月',
          'unit': '¥2.992 / 亿',
          'usage': '22.6亿',
          'featured': false
        },
        {
          'platform': 'Command Code',
          'model': 'DeepSeek-V4.1-Flash',
          'plan': 'GOAT',
          'qualifier': '[峰]',
          'price': '¥68 / 月',
          'unit': '¥2.992 / 亿',
          'usage': '22.6亿',
          'featured': false
        },
        {
          'platform': 'OpenCode',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': 'Go',
          'qualifier': '[谷]',
          'price': '¥68 / 月',
          'unit': '¥2.992 / 亿',
          'usage': '22.6亿',
          'featured': true
        },
        {
          'platform': 'OpenCode',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': 'Go Plus',
          'qualifier': '[谷]',
          'price': '¥272 / 月',
          'unit': '¥2.992 / 亿',
          'usage': '90.2亿',
          'featured': true
        },
        {
          'platform': 'Ollama',
          'model': 'DeepSeek-V4.1-Flash',
          'plan': 'Pro',
          'qualifier': '[谷]',
          'price': '¥136 / 月',
          'unit': '¥2.992 / 亿',
          'usage': '45.1亿',
          'featured': false
        },
        {
          'platform': 'Ollama',
          'model': 'DeepSeek-V4.1-Flash',
          'plan': 'Max',
          'qualifier': '[谷]',
          'price': '¥680 / 月',
          'unit': '¥2.992 / 亿',
          'usage': '225.6亿',
          'featured': false
        },
        {
          'platform': 'Command Code',
          'model': 'GPT-6-Luna',
          'plan': 'Go',
          'qualifier': '[>272K]',
          'price': '¥6.8 / 月',
          'unit': '¥3.672 / 亿',
          'usage': '1.84亿',
          'featured': false
        },
        {
          'platform': 'Command Code',
          'model': 'GLM-5.3-Flash',
          'plan': 'GOAT',
          'qualifier': '',
          'price': '¥68 / 月',
          'unit': '¥4.352 / 亿',
          'usage': '15.7亿',
          'featured': false
        },
        {
          'platform': 'OpenCode',
          'model': 'GLM-5.3-Flash',
          'plan': 'Go',
          'qualifier': '',
          'price': '¥68 / 月',
          'unit': '¥4.352 / 亿',
          'usage': '15.7亿',
          'featured': true
        },
        {
          'platform': 'OpenCode',
          'model': 'DeepSeek-V4.1-Flash',
          'plan': 'Go Plus',
          'qualifier': '[峰]',
          'price': '¥272 / 月',
          'unit': '¥4.488 / 亿',
          'usage': '60.2亿',
          'featured': true
        },
        {
          'platform': 'Command Code',
          'model': 'DeepSeek-V4.1-Flash',
          'plan': 'Pro',
          'qualifier': '[Fast] [谷]',
          'price': '¥136 / 月',
          'unit': '¥5.032 / 亿',
          'usage': '26.9亿',
          'featured': false
        },
        {
          'platform': 'Command Code',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': 'Pro',
          'qualifier': '[峰]',
          'price': '¥136 / 月',
          'unit': '¥5.168 / 亿',
          'usage': '26.3亿',
          'featured': false
        },
        {
          'platform': 'Command Code',
          'model': 'DeepSeek-V4.1-Flash',
          'plan': 'Pro',
          'qualifier': '[峰]',
          'price': '¥136 / 月',
          'unit': '¥5.168 / 亿',
          'usage': '26.3亿',
          'featured': false
        },
        {
          'platform': 'Command Code',
          'model': 'GPT-6-Luna',
          'plan': 'GOAT',
          'qualifier': '[≤272K]',
          'price': '¥68 / 月',
          'unit': '¥5.78 / 亿',
          'usage': '11.8亿',
          'featured': false
        },
        {
          'platform': 'OpenCode',
          'model': 'GLM-5.3-Flash',
          'plan': 'Go Plus',
          'qualifier': '',
          'price': '¥272 / 月',
          'unit': '¥5.78 / 亿',
          'usage': '47亿',
          'featured': true
        },
        {
          'platform': 'GitHub',
          'model': 'GPT-6-Luna',
          'plan': 'Max',
          'qualifier': '[≤272K]',
          'price': '¥680 / 月',
          'unit': '¥5.78 / 亿',
          'usage': '118.2亿',
          'featured': false
        },
        {
          'platform': 'Command Code',
          'model': 'DeepSeek-V4.1-Flash',
          'plan': 'Go',
          'qualifier': '[Fast] [峰]',
          'price': '¥6.8 / 月',
          'unit': '¥5.916 / 亿',
          'usage': '1.16亿',
          'featured': false
        },
        {
          'platform': 'Command Code',
          'model': 'DeepSeek-V4.1-Flash',
          'plan': 'GOAT',
          'qualifier': '[Fast] [峰]',
          'price': '¥68 / 月',
          'unit': '¥5.916 / 亿',
          'usage': '11.5亿',
          'featured': false
        },
        {
          'platform': 'Command Code',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': 'Max 10×',
          'qualifier': '[谷]',
          'price': '¥680 / 月',
          'unit': '¥6.052 / 亿',
          'usage': '112.8亿',
          'featured': false
        },
        {
          'platform': 'Command Code',
          'model': 'DeepSeek-V4.1-Flash',
          'plan': 'Max 10×',
          'qualifier': '[谷]',
          'price': '¥680 / 月',
          'unit': '¥6.052 / 亿',
          'usage': '112.8亿',
          'featured': false
        },
        {
          'platform': 'Command Code',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': 'Max 20×',
          'qualifier': '[谷]',
          'price': '¥1,360 / 月',
          'unit': '¥6.052 / 亿',
          'usage': '225.6亿',
          'featured': false
        },
        {
          'platform': 'Command Code',
          'model': 'DeepSeek-V4.1-Flash',
          'plan': 'Max 20×',
          'qualifier': '[谷]',
          'price': '¥1,360 / 月',
          'unit': '¥6.052 / 亿',
          'usage': '225.6亿',
          'featured': false
        },
        {
          'platform': 'OpenCode',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': 'Go',
          'qualifier': '[峰]',
          'price': '¥68 / 月',
          'unit': '¥6.052 / 亿',
          'usage': '11.3亿',
          'featured': true
        },
        {
          'platform': 'OpenCode',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': 'Go Plus',
          'qualifier': '[峰]',
          'price': '¥272 / 月',
          'unit': '¥6.052 / 亿',
          'usage': '45.1亿',
          'featured': true
        },
        {
          'platform': 'Ollama',
          'model': 'DeepSeek-V4.1-Flash',
          'plan': 'Pro',
          'qualifier': '[峰]',
          'price': '¥136 / 月',
          'unit': '¥6.052 / 亿',
          'usage': '22.6亿',
          'featured': false
        },
        {
          'platform': 'Ollama',
          'model': 'DeepSeek-V4.1-Flash',
          'plan': 'Max',
          'qualifier': '[峰]',
          'price': '¥680 / 月',
          'unit': '¥6.052 / 亿',
          'usage': '112.8亿',
          'featured': false
        },
        {
          'platform': 'GitHub',
          'model': 'GPT-6-Luna',
          'plan': 'Pro+',
          'qualifier': '[≤272K]',
          'price': '¥265.2 / 月',
          'unit': '¥6.392 / 亿',
          'usage': '41.4亿',
          'featured': false
        },
        {
          'platform': '智谱AI',
          'model': 'GLM-5.3-Flash',
          'plan': '新Max',
          'qualifier': '[谷]',
          'price': '¥1,078 / 月',
          'unit': '¥6.58 / 亿',
          'usage': '163.8亿',
          'featured': true
        },
        {
          'platform': '字节·方舟 Coding Plan',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': 'Lite',
          'qualifier': '',
          'price': '¥40 / 月',
          'unit': '¥6.67 / 亿',
          'usage': '6亿',
          'featured': true
        },
        {
          'platform': '字节·方舟 Coding Plan',
          'model': 'GLM-5.3-Flash',
          'plan': 'Lite',
          'qualifier': '',
          'price': '¥40 / 月',
          'unit': '¥6.67 / 亿',
          'usage': '6亿',
          'featured': true
        },
        {
          'platform': '字节·方舟 Coding Plan',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': 'Pro',
          'qualifier': '',
          'price': '¥200 / 月',
          'unit': '¥6.67 / 亿',
          'usage': '30亿',
          'featured': true
        },
        {
          'platform': '字节·方舟 Coding Plan',
          'model': 'GLM-5.3-Flash',
          'plan': 'Pro',
          'qualifier': '',
          'price': '¥200 / 月',
          'unit': '¥6.67 / 亿',
          'usage': '30亿',
          'featured': true
        },
        {
          'platform': '智谱国际版',
          'model': 'GLM-5.3-Flash',
          'plan': '新Max',
          'qualifier': '[谷]',
          'price': '¥1,142.4 / 月',
          'unit': '¥7.004 / 亿',
          'usage': '163.8亿',
          'featured': false
        },
        {
          'platform': '共绩算力',
          'model': 'DeepSeek-V4.1-Flash',
          'plan': '按量 API',
          'qualifier': '',
          'price': '按量',
          'unit': '¥7.09 / 亿',
          'usage': '—',
          'featured': false
        },
        {
          'platform': 'Command Code',
          'model': 'GLM-5.3-Flash',
          'plan': 'Pro',
          'qualifier': '',
          'price': '¥136 / 月',
          'unit': '¥7.412 / 亿',
          'usage': '18.3亿',
          'featured': false
        },
        {
          'platform': '智谱AI',
          'model': 'GLM-5.3-Flash',
          'plan': '新Pro',
          'qualifier': '[谷]',
          'price': '¥538 / 月',
          'unit': '¥7.66 / 亿',
          'usage': '70.2亿',
          'featured': true
        },
        {
          'platform': 'Command Code',
          'model': 'GPT-6-Luna',
          'plan': 'Pro',
          'qualifier': '[≤272K]',
          'price': '¥136 / 月',
          'unit': '¥7.684 / 亿',
          'usage': '17.7亿',
          'featured': false
        },
        {
          'platform': 'Command Code',
          'model': 'GPT-6-Luna',
          'plan': 'Max 10×',
          'qualifier': '[≤272K]',
          'price': '¥680 / 月',
          'unit': '¥7.684 / 亿',
          'usage': '88.6亿',
          'featured': false
        },
        {
          'platform': 'Command Code',
          'model': 'GPT-6-Luna',
          'plan': 'Max 20×',
          'qualifier': '[≤272K]',
          'price': '¥1,360 / 月',
          'unit': '¥7.684 / 亿',
          'usage': '177.2亿',
          'featured': false
        },
        {
          'platform': 'OpenCode',
          'model': 'GPT-6-Luna',
          'plan': 'Go',
          'qualifier': '[272K]',
          'price': '¥68 / 月',
          'unit': '¥7.684 / 亿',
          'usage': '8.86亿',
          'featured': true
        },
        {
          'platform': 'OpenCode',
          'model': 'GPT-6-Luna',
          'plan': 'Go Plus',
          'qualifier': '[272K]',
          'price': '¥272 / 月',
          'unit': '¥7.684 / 亿',
          'usage': '35.4亿',
          'featured': true
        },
        {
          'platform': 'GitHub',
          'model': 'GPT-6-Luna',
          'plan': 'Pro',
          'qualifier': '[≤272K]',
          'price': '¥68 / 月',
          'unit': '¥7.684 / 亿',
          'usage': '8.86亿',
          'featured': false
        },
        {
          'platform': '智谱国际版',
          'model': 'GLM-5.3-Flash',
          'plan': '新Pro',
          'qualifier': '[谷]',
          'price': '¥544 / 月',
          'unit': '¥7.752 / 亿',
          'usage': '70.2亿',
          'featured': false
        },
        {
          'platform': 'Ollama',
          'model': 'GLM-5.3-Flash',
          'plan': 'Pro',
          'qualifier': '',
          'price': '¥136 / 月',
          'unit': '¥8.704 / 亿',
          'usage': '15.7亿',
          'featured': false
        },
        {
          'platform': 'Ollama',
          'model': 'GLM-5.3-Flash',
          'plan': 'Max',
          'qualifier': '',
          'price': '¥680 / 月',
          'unit': '¥8.704 / 亿',
          'usage': '78.3亿',
          'featured': false
        },
        {
          'platform': 'DeepSeek',
          'model': 'DeepSeek-V4.1-Flash',
          'plan': '按量 API',
          'qualifier': '[谷]',
          'price': '按量',
          'unit': '¥8.87 / 亿',
          'usage': '—',
          'featured': true
        },
        {
          'platform': '字节·方舟 Agent Plan',
          'model': 'GLM-5.3-Flash',
          'plan': 'Small',
          'qualifier': '',
          'price': '¥40 / 月',
          'unit': '¥10 / 亿',
          'usage': '4亿',
          'featured': false
        },
        {
          'platform': '字节·方舟 Agent Plan',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': 'Small',
          'qualifier': '',
          'price': '¥40 / 月',
          'unit': '¥10 / 亿',
          'usage': '4亿',
          'featured': false
        },
        {
          'platform': '字节·方舟 Agent Plan',
          'model': 'GLM-5.3-Flash',
          'plan': 'Medium',
          'qualifier': '',
          'price': '¥200 / 月',
          'unit': '¥10 / 亿',
          'usage': '20亿',
          'featured': false
        },
        {
          'platform': '字节·方舟 Agent Plan',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': 'Medium',
          'qualifier': '',
          'price': '¥200 / 月',
          'unit': '¥10 / 亿',
          'usage': '20亿',
          'featured': false
        },
        {
          'platform': '字节·方舟 Agent Plan',
          'model': 'GLM-5.3-Flash',
          'plan': 'Large',
          'qualifier': '',
          'price': '¥500 / 月',
          'unit': '¥10 / 亿',
          'usage': '50亿',
          'featured': false
        },
        {
          'platform': '字节·方舟 Agent Plan',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': 'Large',
          'qualifier': '',
          'price': '¥500 / 月',
          'unit': '¥10 / 亿',
          'usage': '50亿',
          'featured': false
        },
        {
          'platform': '字节·方舟 Agent Plan',
          'model': 'GLM-5.3-Flash',
          'plan': 'Max',
          'qualifier': '',
          'price': '¥1,000 / 月',
          'unit': '¥10 / 亿',
          'usage': '100亿',
          'featured': false
        },
        {
          'platform': '字节·方舟 Agent Plan',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': 'Max',
          'qualifier': '',
          'price': '¥1,000 / 月',
          'unit': '¥10 / 亿',
          'usage': '100亿',
          'featured': false
        },
        {
          'platform': 'Command Code',
          'model': 'DeepSeek-V4.1-Flash',
          'plan': 'Pro',
          'qualifier': '[Fast] [峰]',
          'price': '¥136 / 月',
          'unit': '¥10.064 / 亿',
          'usage': '13.5亿',
          'featured': false
        },
        {
          'platform': '智谱AI',
          'model': 'GLM-5.3-Flash',
          'plan': '新Lite',
          'qualifier': '[谷]',
          'price': '¥118 / 月',
          'unit': '¥10.09 / 亿',
          'usage': '11.7亿',
          'featured': true
        },
        {
          'platform': '智谱国际版',
          'model': 'GLM-5.3-Flash',
          'plan': '新Lite',
          'qualifier': '[谷]',
          'price': '¥122.4 / 月',
          'unit': '¥10.472 / 亿',
          'usage': '11.7亿',
          'featured': false
        },
        {
          'platform': 'Command Code',
          'model': 'GPT-6-Luna',
          'plan': 'GOAT',
          'qualifier': '[>272K]',
          'price': '¥68 / 月',
          'unit': '¥11.084 / 亿',
          'usage': '6.13亿',
          'featured': false
        },
        {
          'platform': 'GitHub',
          'model': 'GPT-6-Luna',
          'plan': 'Max',
          'qualifier': '[>272K]',
          'price': '¥680 / 月',
          'unit': '¥11.084 / 亿',
          'usage': '61.3亿',
          'featured': false
        },
        {
          'platform': 'TRAE 国际版',
          'model': 'GPT-6-Luna',
          'plan': 'Lite',
          'qualifier': '[≤272K]',
          'price': '¥54.4 / 月',
          'unit': '¥11.492 / 亿',
          'usage': '4.73亿',
          'featured': false
        },
        {
          'platform': 'TRAE 国际版',
          'model': 'GPT-6-Luna',
          'plan': 'Pro',
          'qualifier': '[≤272K]',
          'price': '¥136 / 月',
          'unit': '¥11.492 / 亿',
          'usage': '11.8亿',
          'featured': false
        },
        {
          'platform': 'TRAE 国际版',
          'model': 'GPT-6-Luna',
          'plan': 'Pro+',
          'qualifier': '[≤272K]',
          'price': '¥408 / 月',
          'unit': '¥11.492 / 亿',
          'usage': '35.4亿',
          'featured': false
        },
        {
          'platform': 'TRAE 国际版',
          'model': 'GPT-6-Luna',
          'plan': 'Ultra',
          'qualifier': '[≤272K]',
          'price': '¥1,360 / 月',
          'unit': '¥11.492 / 亿',
          'usage': '118.2亿',
          'featured': false
        },
        {
          'platform': 'Command Code',
          'model': 'DeepSeek-V4.1-Flash',
          'plan': 'Max 10×',
          'qualifier': '[Fast] [谷]',
          'price': '¥680 / 月',
          'unit': '¥11.764 / 亿',
          'usage': '57.7亿',
          'featured': false
        },
        {
          'platform': 'Command Code',
          'model': 'DeepSeek-V4.1-Flash',
          'plan': 'Max 20×',
          'qualifier': '[Fast] [谷]',
          'price': '¥1,360 / 月',
          'unit': '¥11.764 / 亿',
          'usage': '115.5亿',
          'featured': false
        },
        {
          'platform': 'Command Code',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': 'Max 10×',
          'qualifier': '[峰]',
          'price': '¥680 / 月',
          'unit': '¥12.036 / 亿',
          'usage': '56.4亿',
          'featured': false
        },
        {
          'platform': 'Command Code',
          'model': 'DeepSeek-V4.1-Flash',
          'plan': 'Max 10×',
          'qualifier': '[峰]',
          'price': '¥680 / 月',
          'unit': '¥12.036 / 亿',
          'usage': '56.4亿',
          'featured': false
        },
        {
          'platform': 'Command Code',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': 'Max 20×',
          'qualifier': '[峰]',
          'price': '¥1,360 / 月',
          'unit': '¥12.036 / 亿',
          'usage': '112.8亿',
          'featured': false
        },
        {
          'platform': 'Command Code',
          'model': 'DeepSeek-V4.1-Flash',
          'plan': 'Max 20×',
          'qualifier': '[峰]',
          'price': '¥1,360 / 月',
          'unit': '¥12.036 / 亿',
          'usage': '112.8亿',
          'featured': false
        },
        {
          'platform': 'GitHub',
          'model': 'GPT-6-Luna',
          'plan': 'Pro+',
          'qualifier': '[>272K]',
          'price': '¥265.2 / 月',
          'unit': '¥12.376 / 亿',
          'usage': '21.5亿',
          'featured': false
        },
        {
          'platform': '智谱AI',
          'model': 'GLM-5.3-Flash',
          'plan': '新Max',
          'qualifier': '[峰]',
          'price': '¥1,078 / 月',
          'unit': '¥13.16 / 亿',
          'usage': '81.9亿',
          'featured': true
        },
        {
          'platform': '智谱国际版',
          'model': 'GLM-5.3-Flash',
          'plan': '新Max',
          'qualifier': '[峰]',
          'price': '¥1,142.4 / 月',
          'unit': '¥13.94 / 亿',
          'usage': '81.9亿',
          'featured': false
        },
        {
          'platform': 'Command Code',
          'model': 'GPT-6-Luna',
          'plan': 'Pro',
          'qualifier': '[>272K]',
          'price': '¥136 / 月',
          'unit': '¥14.756 / 亿',
          'usage': '9.2亿',
          'featured': false
        },
        {
          'platform': 'Command Code',
          'model': 'GPT-6-Luna',
          'plan': 'Max 10×',
          'qualifier': '[>272K]',
          'price': '¥680 / 月',
          'unit': '¥14.756 / 亿',
          'usage': '46亿',
          'featured': false
        },
        {
          'platform': 'Command Code',
          'model': 'GPT-6-Luna',
          'plan': 'Max 20×',
          'qualifier': '[>272K]',
          'price': '¥1,360 / 月',
          'unit': '¥14.756 / 亿',
          'usage': '92亿',
          'featured': false
        },
        {
          'platform': 'OpenCode',
          'model': 'GPT-6-Luna',
          'plan': 'Go',
          'qualifier': '',
          'price': '¥68 / 月',
          'unit': '¥14.756 / 亿',
          'usage': '4.6亿',
          'featured': true
        },
        {
          'platform': 'OpenCode',
          'model': 'GPT-6-Luna',
          'plan': 'Go Plus',
          'qualifier': '',
          'price': '¥272 / 月',
          'unit': '¥14.756 / 亿',
          'usage': '18.4亿',
          'featured': true
        },
        {
          'platform': 'GitHub',
          'model': 'GPT-6-Luna',
          'plan': 'Pro',
          'qualifier': '[>272K]',
          'price': '¥68 / 月',
          'unit': '¥14.756 / 亿',
          'usage': '4.6亿',
          'featured': false
        },
        {
          'platform': '智谱AI',
          'model': 'GLM-5.3-Flash',
          'plan': '新Pro',
          'qualifier': '[峰]',
          'price': '¥538 / 月',
          'unit': '¥15.33 / 亿',
          'usage': '35.1亿',
          'featured': true
        },
        {
          'platform': '智谱国际版',
          'model': 'GLM-5.3-Flash',
          'plan': '新Pro',
          'qualifier': '[峰]',
          'price': '¥544 / 月',
          'unit': '¥15.504 / 亿',
          'usage': '35.1亿',
          'featured': false
        },
        {
          'platform': '字节·方舟 Coding Plan',
          'model': 'DeepSeek-V4.1-Flash',
          'plan': 'Lite',
          'qualifier': '',
          'price': '¥40 / 月',
          'unit': '¥16.67 / 亿',
          'usage': '2.4亿',
          'featured': true
        },
        {
          'platform': '字节·方舟 Coding Plan',
          'model': 'DeepSeek-V4.1-Flash',
          'plan': 'Pro',
          'qualifier': '',
          'price': '¥200 / 月',
          'unit': '¥16.67 / 亿',
          'usage': '12亿',
          'featured': true
        },
        {
          'platform': 'Command Code',
          'model': 'GLM-5.3-Flash',
          'plan': 'Max 10×',
          'qualifier': '',
          'price': '¥680 / 月',
          'unit': '¥17.34 / 亿',
          'usage': '39.1亿',
          'featured': false
        },
        {
          'platform': 'Command Code',
          'model': 'GLM-5.3-Flash',
          'plan': 'Max 20×',
          'qualifier': '',
          'price': '¥1,360 / 月',
          'unit': '¥17.34 / 亿',
          'usage': '78.3亿',
          'featured': false
        },
        {
          'platform': 'DeepSeek',
          'model': 'DeepSeek-V4.1-Flash',
          'plan': '按量 API',
          'qualifier': '[峰]',
          'price': '按量',
          'unit': '¥17.73 / 亿',
          'usage': '—',
          'featured': true
        },
        {
          'platform': '腾讯云',
          'model': 'DeepSeek-V4.1-Flash',
          'plan': 'Lite',
          'qualifier': '',
          'price': '¥39 / 月',
          'unit': '¥17.73 / 亿',
          'usage': '2.2亿',
          'featured': false
        },
        {
          'platform': '腾讯云',
          'model': 'DeepSeek-V4.1-Flash',
          'plan': 'Standard',
          'qualifier': '',
          'price': '¥99 / 月',
          'unit': '¥17.73 / 亿',
          'usage': '5.58亿',
          'featured': false
        },
        {
          'platform': '腾讯云',
          'model': 'DeepSeek-V4.1-Flash',
          'plan': 'Pro',
          'qualifier': '',
          'price': '¥299 / 月',
          'unit': '¥17.73 / 亿',
          'usage': '16.9亿',
          'featured': false
        },
        {
          'platform': '腾讯云',
          'model': 'DeepSeek-V4.1-Flash',
          'plan': 'Max',
          'qualifier': '',
          'price': '¥599 / 月',
          'unit': '¥17.73 / 亿',
          'usage': '33.8亿',
          'featured': false
        },
        {
          'platform': 'TRAE 国际版',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': 'Lite',
          'qualifier': '',
          'price': '¥54.4 / 月',
          'unit': '¥18.088 / 亿',
          'usage': '3.01亿',
          'featured': false
        },
        {
          'platform': 'TRAE 国际版',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': 'Pro',
          'qualifier': '',
          'price': '¥136 / 月',
          'unit': '¥18.088 / 亿',
          'usage': '7.52亿',
          'featured': false
        },
        {
          'platform': 'TRAE 国际版',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': 'Pro+',
          'qualifier': '',
          'price': '¥408 / 月',
          'unit': '¥18.088 / 亿',
          'usage': '22.6亿',
          'featured': false
        },
        {
          'platform': 'TRAE 国际版',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': 'Ultra',
          'qualifier': '',
          'price': '¥1,360 / 月',
          'unit': '¥18.088 / 亿',
          'usage': '75.2亿',
          'featured': false
        },
        {
          'platform': '腾讯云',
          'model': 'GLM-5.3-Flash',
          'plan': 'Lite',
          'qualifier': '',
          'price': '¥39 / 月',
          'unit': '¥18.98 / 亿',
          'usage': '2.05亿',
          'featured': false
        },
        {
          'platform': '腾讯云',
          'model': 'GLM-5.3-Flash',
          'plan': 'Standard',
          'qualifier': '',
          'price': '¥99 / 月',
          'unit': '¥18.98 / 亿',
          'usage': '5.22亿',
          'featured': false
        },
        {
          'platform': '腾讯云',
          'model': 'GLM-5.3-Flash',
          'plan': 'Pro',
          'qualifier': '',
          'price': '¥299 / 月',
          'unit': '¥18.98 / 亿',
          'usage': '15.8亿',
          'featured': false
        },
        {
          'platform': '腾讯云',
          'model': 'GLM-5.3-Flash',
          'plan': 'Max',
          'qualifier': '',
          'price': '¥599 / 月',
          'unit': '¥18.98 / 亿',
          'usage': '31.6亿',
          'featured': false
        },
        {
          'platform': '智谱AI',
          'model': 'GLM-5.3-Flash',
          'plan': '新Lite',
          'qualifier': '[峰]',
          'price': '¥118 / 月',
          'unit': '¥20.17 / 亿',
          'usage': '5.85亿',
          'featured': true
        },
        {
          'platform': '智谱国际版',
          'model': 'GLM-5.3-Flash',
          'plan': '新Lite',
          'qualifier': '[峰]',
          'price': '¥122.4 / 月',
          'unit': '¥20.944 / 亿',
          'usage': '5.85亿',
          'featured': false
        },
        {
          'platform': '共绩算力',
          'model': 'GLM-5.3-Flash',
          'plan': '按量 API',
          'qualifier': '',
          'price': '按量',
          'unit': '¥21.7 / 亿',
          'usage': '—',
          'featured': false
        },
        {
          'platform': 'TRAE 国际版',
          'model': 'GPT-6-Luna',
          'plan': 'Lite',
          'qualifier': '[>272K]',
          'price': '¥54.4 / 月',
          'unit': '¥22.168 / 亿',
          'usage': '2.45亿',
          'featured': false
        },
        {
          'platform': 'TRAE 国际版',
          'model': 'GPT-6-Luna',
          'plan': 'Pro',
          'qualifier': '[>272K]',
          'price': '¥136 / 月',
          'unit': '¥22.168 / 亿',
          'usage': '6.13亿',
          'featured': false
        },
        {
          'platform': 'TRAE 国际版',
          'model': 'GPT-6-Luna',
          'plan': 'Pro+',
          'qualifier': '[>272K]',
          'price': '¥408 / 月',
          'unit': '¥22.168 / 亿',
          'usage': '18.4亿',
          'featured': false
        },
        {
          'platform': 'TRAE 国际版',
          'model': 'GPT-6-Luna',
          'plan': 'Ultra',
          'qualifier': '[>272K]',
          'price': '¥1,360 / 月',
          'unit': '¥22.168 / 亿',
          'usage': '61.3亿',
          'featured': false
        },
        {
          'platform': 'Command Code',
          'model': 'DeepSeek-V4.1-Flash',
          'plan': 'Max 10×',
          'qualifier': '[Fast] [峰]',
          'price': '¥680 / 月',
          'unit': '¥23.528 / 亿',
          'usage': '28.9亿',
          'featured': false
        },
        {
          'platform': 'Command Code',
          'model': 'DeepSeek-V4.1-Flash',
          'plan': 'Max 20×',
          'qualifier': '[Fast] [峰]',
          'price': '¥1,360 / 月',
          'unit': '¥23.528 / 亿',
          'usage': '57.7亿',
          'featured': false
        },
        {
          'platform': '京东云 · Token Plan',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': 'Lite',
          'qualifier': '[≤32K]',
          'price': '¥69 / 月',
          'unit': '¥24.24 / 亿',
          'usage': '2.85亿',
          'featured': false
        },
        {
          'platform': '京东云 · Token Plan',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': 'Standard',
          'qualifier': '[≤32K]',
          'price': '¥199 / 月',
          'unit': '¥24.24 / 亿',
          'usage': '8.21亿',
          'featured': false
        },
        {
          'platform': '京东云 · Token Plan',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': 'Pro',
          'qualifier': '[≤32K]',
          'price': '¥599 / 月',
          'unit': '¥24.24 / 亿',
          'usage': '24.7亿',
          'featured': false
        },
        {
          'platform': '京东云 · Token Plan',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': 'Max',
          'qualifier': '[≤32K]',
          'price': '¥999 / 月',
          'unit': '¥24.24 / 亿',
          'usage': '41.2亿',
          'featured': false
        },
        {
          'platform': '字节·方舟 Agent Plan',
          'model': 'DeepSeek-V4.1-Flash',
          'plan': 'Small',
          'qualifier': '',
          'price': '¥40 / 月',
          'unit': '¥25 / 亿',
          'usage': '1.6亿',
          'featured': false
        },
        {
          'platform': '字节·方舟 Agent Plan',
          'model': 'DeepSeek-V4.1-Flash',
          'plan': 'Medium',
          'qualifier': '',
          'price': '¥200 / 月',
          'unit': '¥25 / 亿',
          'usage': '8亿',
          'featured': false
        },
        {
          'platform': '字节·方舟 Agent Plan',
          'model': 'DeepSeek-V4.1-Flash',
          'plan': 'Large',
          'qualifier': '',
          'price': '¥500 / 月',
          'unit': '¥25 / 亿',
          'usage': '20亿',
          'featured': false
        },
        {
          'platform': '字节·方舟 Agent Plan',
          'model': 'DeepSeek-V4.1-Flash',
          'plan': 'Max',
          'qualifier': '',
          'price': '¥1,000 / 月',
          'unit': '¥25 / 亿',
          'usage': '40亿',
          'featured': false
        },
        {
          'platform': '优云智算',
          'model': 'GLM-5.3-Flash',
          'plan': 'Ultra',
          'qualifier': '',
          'price': '¥999 / 月',
          'unit': '¥42.69 / 亿',
          'usage': '23.4亿',
          'featured': false
        },
        {
          'platform': '优云智算',
          'model': 'GLM-5.3-Flash',
          'plan': 'Max',
          'qualifier': '',
          'price': '¥799 / 月',
          'unit': '¥42.96 / 亿',
          'usage': '18.6亿',
          'featured': false
        },
        {
          'platform': '优云智算',
          'model': 'GLM-5.3-Flash',
          'plan': 'Mini',
          'qualifier': '',
          'price': '¥49 / 月',
          'unit': '¥42.98 / 亿',
          'usage': '1.14亿',
          'featured': false
        },
        {
          'platform': '优云智算',
          'model': 'GLM-5.3-Flash',
          'plan': 'Lite',
          'qualifier': '',
          'price': '¥99 / 月',
          'unit': '¥43.42 / 亿',
          'usage': '2.28亿',
          'featured': false
        },
        {
          'platform': '优云智算',
          'model': 'GLM-5.3-Flash',
          'plan': 'Basic',
          'qualifier': '',
          'price': '¥199 / 月',
          'unit': '¥43.64 / 亿',
          'usage': '4.56亿',
          'featured': false
        },
        {
          'platform': '优云智算',
          'model': 'GLM-5.3-Flash',
          'plan': 'Pro',
          'qualifier': '',
          'price': '¥499 / 月',
          'unit': '¥43.77 / 亿',
          'usage': '11.4亿',
          'featured': false
        },
        {
          'platform': '京东云 · Token Plan',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': 'Lite',
          'qualifier': '[32K<输入≤64K]',
          'price': '¥69 / 月',
          'unit': '¥48.12 / 亿',
          'usage': '1.43亿',
          'featured': false
        },
        {
          'platform': '京东云 · Token Plan',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': 'Standard',
          'qualifier': '[32K<输入≤64K]',
          'price': '¥199 / 月',
          'unit': '¥48.12 / 亿',
          'usage': '4.14亿',
          'featured': false
        },
        {
          'platform': '京东云 · Token Plan',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': 'Pro',
          'qualifier': '[32K<输入≤64K]',
          'price': '¥599 / 月',
          'unit': '¥48.12 / 亿',
          'usage': '12.4亿',
          'featured': false
        },
        {
          'platform': '京东云 · Token Plan',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': 'Max',
          'qualifier': '[32K<输入≤64K]',
          'price': '¥999 / 月',
          'unit': '¥48.12 / 亿',
          'usage': '20.8亿',
          'featured': false
        },
        {
          'platform': '字节·方舟 Coding Plan',
          'model': 'Kimi-K2.8-Preview',
          'plan': 'Lite',
          'qualifier': '',
          'price': '¥40 / 月',
          'unit': '¥64 / 亿',
          'usage': '0.625亿',
          'featured': true
        },
        {
          'platform': '字节·方舟 Coding Plan',
          'model': 'Kimi-K2.8-Preview',
          'plan': 'Pro',
          'qualifier': '',
          'price': '¥200 / 月',
          'unit': '¥64 / 亿',
          'usage': '3.13亿',
          'featured': true
        },
        {
          'platform': '优云智算',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': 'Ultra',
          'qualifier': '',
          'price': '¥999 / 月',
          'unit': '¥64.04 / 亿',
          'usage': '15.6亿',
          'featured': false
        },
        {
          'platform': '优云智算',
          'model': 'DeepSeek-V4.1-Flash',
          'plan': 'Ultra',
          'qualifier': '',
          'price': '¥999 / 月',
          'unit': '¥64.04 / 亿',
          'usage': '15.6亿',
          'featured': false
        },
        {
          'platform': '优云智算',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': 'Max',
          'qualifier': '',
          'price': '¥799 / 月',
          'unit': '¥64.44 / 亿',
          'usage': '12.4亿',
          'featured': false
        },
        {
          'platform': '优云智算',
          'model': 'DeepSeek-V4.1-Flash',
          'plan': 'Max',
          'qualifier': '',
          'price': '¥799 / 月',
          'unit': '¥64.44 / 亿',
          'usage': '12.4亿',
          'featured': false
        },
        {
          'platform': '优云智算',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': 'Mini',
          'qualifier': '',
          'price': '¥49 / 月',
          'unit': '¥64.47 / 亿',
          'usage': '0.76亿',
          'featured': false
        },
        {
          'platform': '优云智算',
          'model': 'DeepSeek-V4.1-Flash',
          'plan': 'Mini',
          'qualifier': '',
          'price': '¥49 / 月',
          'unit': '¥64.47 / 亿',
          'usage': '0.76亿',
          'featured': false
        },
        {
          'platform': '优云智算',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': 'Lite',
          'qualifier': '',
          'price': '¥99 / 月',
          'unit': '¥65.13 / 亿',
          'usage': '1.52亿',
          'featured': false
        },
        {
          'platform': '优云智算',
          'model': 'DeepSeek-V4.1-Flash',
          'plan': 'Lite',
          'qualifier': '',
          'price': '¥99 / 月',
          'unit': '¥65.13 / 亿',
          'usage': '1.52亿',
          'featured': false
        },
        {
          'platform': '优云智算',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': 'Basic',
          'qualifier': '',
          'price': '¥199 / 月',
          'unit': '¥65.46 / 亿',
          'usage': '3.04亿',
          'featured': false
        },
        {
          'platform': '优云智算',
          'model': 'DeepSeek-V4.1-Flash',
          'plan': 'Basic',
          'qualifier': '',
          'price': '¥199 / 月',
          'unit': '¥65.46 / 亿',
          'usage': '3.04亿',
          'featured': false
        },
        {
          'platform': '优云智算',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': 'Pro',
          'qualifier': '',
          'price': '¥499 / 月',
          'unit': '¥65.66 / 亿',
          'usage': '7.6亿',
          'featured': false
        },
        {
          'platform': '优云智算',
          'model': 'DeepSeek-V4.1-Flash',
          'plan': 'Pro',
          'qualifier': '',
          'price': '¥499 / 月',
          'unit': '¥65.66 / 亿',
          'usage': '7.6亿',
          'featured': false
        },
        {
          'platform': '百度·千帆',
          'model': 'DeepSeek-V4.1-Flash',
          'plan': 'Max',
          'qualifier': '',
          'price': '¥600 / 月',
          'unit': '¥85.71 / 亿',
          'usage': '7亿',
          'featured': false
        },
        {
          'platform': '百度·千帆',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': 'Max',
          'qualifier': '',
          'price': '¥600 / 月',
          'unit': '¥85.71 / 亿',
          'usage': '7亿',
          'featured': false
        },
        {
          'platform': '百度·千帆',
          'model': 'GLM-5.3-Flash',
          'plan': 'Max',
          'qualifier': '',
          'price': '¥600 / 月',
          'unit': '¥85.71 / 亿',
          'usage': '7亿',
          'featured': false
        },
        {
          'platform': '百度·千帆',
          'model': 'DeepSeek-V4.1-Flash',
          'plan': 'Pro',
          'qualifier': '',
          'price': '¥200 / 月',
          'unit': '¥86.96 / 亿',
          'usage': '2.3亿',
          'featured': false
        },
        {
          'platform': '百度·千帆',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': 'Pro',
          'qualifier': '',
          'price': '¥200 / 月',
          'unit': '¥86.96 / 亿',
          'usage': '2.3亿',
          'featured': false
        },
        {
          'platform': '百度·千帆',
          'model': 'GLM-5.3-Flash',
          'plan': 'Pro',
          'qualifier': '',
          'price': '¥200 / 月',
          'unit': '¥86.96 / 亿',
          'usage': '2.3亿',
          'featured': false
        },
        {
          'platform': '华为云',
          'model': 'DeepSeek-V4.1-Flash',
          'plan': 'Max',
          'qualifier': '',
          'price': '¥799 / 月',
          'unit': '¥90.8 / 亿',
          'usage': '8.8亿',
          'featured': false
        },
        {
          'platform': '华为云',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': 'Max',
          'qualifier': '',
          'price': '¥799 / 月',
          'unit': '¥90.8 / 亿',
          'usage': '8.8亿',
          'featured': false
        },
        {
          'platform': '腾讯云',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': 'Max',
          'qualifier': '',
          'price': '¥599 / 月',
          'unit': '¥92.15 / 亿',
          'usage': '6.5亿',
          'featured': false
        },
        {
          'platform': '腾讯云',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': 'Pro',
          'qualifier': '',
          'price': '¥299 / 月',
          'unit': '¥93.44 / 亿',
          'usage': '3.2亿',
          'featured': false
        },
        {
          'platform': '百度·千帆',
          'model': 'DeepSeek-V4.1-Flash',
          'plan': 'Lite',
          'qualifier': '',
          'price': '¥40 / 月',
          'unit': '¥95.24 / 亿',
          'usage': '0.42亿',
          'featured': false
        },
        {
          'platform': '百度·千帆',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': 'Lite',
          'qualifier': '',
          'price': '¥40 / 月',
          'unit': '¥95.24 / 亿',
          'usage': '0.42亿',
          'featured': false
        },
        {
          'platform': '百度·千帆',
          'model': 'GLM-5.3-Flash',
          'plan': 'Lite',
          'qualifier': '',
          'price': '¥40 / 月',
          'unit': '¥95.24 / 亿',
          'usage': '0.42亿',
          'featured': false
        },
        {
          'platform': '京东云 · Token Plan',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': 'Lite',
          'qualifier': '[>64K]',
          'price': '¥69 / 月',
          'unit': '¥95.88 / 亿',
          'usage': '0.72亿',
          'featured': false
        },
        {
          'platform': '京东云 · Token Plan',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': 'Standard',
          'qualifier': '[>64K]',
          'price': '¥199 / 月',
          'unit': '¥95.88 / 亿',
          'usage': '2.08亿',
          'featured': false
        },
        {
          'platform': '京东云 · Token Plan',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': 'Pro',
          'qualifier': '[>64K]',
          'price': '¥599 / 月',
          'unit': '¥95.88 / 亿',
          'usage': '6.25亿',
          'featured': false
        },
        {
          'platform': '京东云 · Token Plan',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': 'Max',
          'qualifier': '[>64K]',
          'price': '¥999 / 月',
          'unit': '¥95.88 / 亿',
          'usage': '10.4亿',
          'featured': false
        },
        {
          'platform': '字节·方舟 Agent Plan',
          'model': 'Kimi-K2.8-Preview',
          'plan': 'Small',
          'qualifier': '',
          'price': '¥40 / 月',
          'unit': '¥96 / 亿',
          'usage': '0.417亿',
          'featured': false
        },
        {
          'platform': '字节·方舟 Agent Plan',
          'model': 'Kimi-K2.8-Preview',
          'plan': 'Medium',
          'qualifier': '',
          'price': '¥200 / 月',
          'unit': '¥96 / 亿',
          'usage': '2.08亿',
          'featured': false
        },
        {
          'platform': '字节·方舟 Agent Plan',
          'model': 'Kimi-K2.8-Preview',
          'plan': 'Large',
          'qualifier': '',
          'price': '¥500 / 月',
          'unit': '¥96 / 亿',
          'usage': '5.21亿',
          'featured': false
        },
        {
          'platform': '字节·方舟 Agent Plan',
          'model': 'Kimi-K2.8-Preview',
          'plan': 'Max',
          'qualifier': '',
          'price': '¥1,000 / 月',
          'unit': '¥96 / 亿',
          'usage': '10.4亿',
          'featured': false
        },
        {
          'platform': '百度·千帆',
          'model': 'DeepSeek-V4.1-Flash',
          'plan': 'Mini',
          'qualifier': '',
          'price': '¥9.9 / 月',
          'unit': '¥99 / 亿',
          'usage': '0.1亿',
          'featured': false
        },
        {
          'platform': '百度·千帆',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': 'Mini',
          'qualifier': '',
          'price': '¥9.9 / 月',
          'unit': '¥99 / 亿',
          'usage': '0.1亿',
          'featured': false
        },
        {
          'platform': '百度·千帆',
          'model': 'GLM-5.3-Flash',
          'plan': 'Mini',
          'qualifier': '',
          'price': '¥9.9 / 月',
          'unit': '¥99 / 亿',
          'usage': '0.1亿',
          'featured': false
        },
        {
          'platform': '腾讯云',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': 'Standard',
          'qualifier': '',
          'price': '¥99 / 月',
          'unit': '¥99 / 亿',
          'usage': '1亿',
          'featured': false
        },
        {
          'platform': '天翼云',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': 'Token 680M（存量续订）',
          'qualifier': '',
          'price': '¥699 / 月',
          'unit': '¥102.79 / 亿',
          'usage': '6.8亿',
          'featured': false
        },
        {
          'platform': '华为云',
          'model': 'DeepSeek-V4.1-Flash',
          'plan': 'Pro',
          'qualifier': '',
          'price': '¥399 / 月',
          'unit': '¥105 / 亿',
          'usage': '3.8亿',
          'featured': false
        },
        {
          'platform': '华为云',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': 'Pro',
          'qualifier': '',
          'price': '¥399 / 月',
          'unit': '¥105 / 亿',
          'usage': '3.8亿',
          'featured': false
        },
        {
          'platform': '天翼云',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': 'Token 380M（存量续订）',
          'qualifier': '',
          'price': '¥399 / 月',
          'unit': '¥105 / 亿',
          'usage': '3.8亿',
          'featured': false
        },
        {
          'platform': '天翼云',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': 'Token 180M（存量续订）',
          'qualifier': '',
          'price': '¥199 / 月',
          'unit': '¥110.56 / 亿',
          'usage': '1.8亿',
          'featured': false
        },
        {
          'platform': '天翼云',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': 'Token 80M（存量续订）',
          'qualifier': '',
          'price': '¥89 / 月',
          'unit': '¥111.25 / 亿',
          'usage': '0.8亿',
          'featured': false
        },
        {
          'platform': '腾讯云',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': 'Lite',
          'qualifier': '',
          'price': '¥39 / 月',
          'unit': '¥111.43 / 亿',
          'usage': '0.35亿',
          'featured': false
        },
        {
          'platform': '华为云',
          'model': 'DeepSeek-V4.1-Flash',
          'plan': 'Standard',
          'qualifier': '',
          'price': '¥149 / 月',
          'unit': '¥114.62 / 亿',
          'usage': '1.3亿',
          'featured': false
        },
        {
          'platform': '华为云',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': 'Standard',
          'qualifier': '',
          'price': '¥149 / 月',
          'unit': '¥114.62 / 亿',
          'usage': '1.3亿',
          'featured': false
        },
        {
          'platform': '天翼云',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': 'Token 25M（存量续订）',
          'qualifier': '',
          'price': '¥29 / 月',
          'unit': '¥116 / 亿',
          'usage': '0.25亿',
          'featured': false
        },
        {
          'platform': '华为云',
          'model': 'DeepSeek-V4.1-Flash',
          'plan': 'Lite',
          'qualifier': '',
          'price': '¥59 / 月',
          'unit': '¥118 / 亿',
          'usage': '0.5亿',
          'featured': false
        },
        {
          'platform': '华为云',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': 'Lite',
          'qualifier': '',
          'price': '¥59 / 月',
          'unit': '¥118 / 亿',
          'usage': '0.5亿',
          'featured': false
        },
        {
          'platform': '天翼云 · 积分制',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': '100000积分',
          'qualifier': '',
          'price': '¥699 / 月',
          'unit': '¥211.82 / 亿',
          'usage': '3.3亿',
          'featured': false
        },
        {
          'platform': '天翼云 · 积分制',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': '25000积分',
          'qualifier': '',
          'price': '¥199 / 月',
          'unit': '¥241.21 / 亿',
          'usage': '0.825亿',
          'featured': false
        },
        {
          'platform': '天翼云 · 积分制',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': '50000积分',
          'qualifier': '',
          'price': '¥399 / 月',
          'unit': '¥241.82 / 亿',
          'usage': '1.65亿',
          'featured': false
        },
        {
          'platform': '天翼云 · 积分制',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': '10000积分',
          'qualifier': '',
          'price': '¥89 / 月',
          'unit': '¥269.7 / 亿',
          'usage': '0.33亿',
          'featured': false
        },
        {
          'platform': '天翼云 · 积分制',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': '3000积分',
          'qualifier': '',
          'price': '¥29 / 月',
          'unit': '¥292.93 / 亿',
          'usage': '0.099亿',
          'featured': false
        }
      ]
    },
    {
      'id': 'sota-models',
      'title': '头部级模型',
      'kind': 'multi',
      'desc': '包含：GPT-6-Astra、GPT-6.1-Sol、Claude Opus 5.5、GLM-5.3、Kimi-K3',
      'rows': [
        {
          'platform': '智谱AI',
          'model': 'GLM-5.3',
          'plan': '新Max',
          'qualifier': '[谷]',
          'price': '¥1,078 / 月',
          'unit': '¥19.93 / 亿',
          'usage': '54.1亿',
          'featured': true
        },
        {
          'platform': '智谱国际版',
          'model': 'GLM-5.3',
          'plan': '新Max',
          'qualifier': '[谷]',
          'price': '¥1,142.4 / 月',
          'unit': '¥21.148 / 亿',
          'usage': '54.1亿',
          'featured': false
        },
        {
          'platform': 'Kimi',
          'model': 'Kimi-K3',
          'plan': 'Allegretto（老套餐）',
          'qualifier': '[256K]',
          'price': '¥199 / 月',
          'unit': '¥22.11 / 亿',
          'usage': '9亿',
          'featured': true
        },
        {
          'platform': 'Command Code',
          'model': 'GLM-5.3',
          'plan': 'Go',
          'qualifier': '',
          'price': '¥6.8 / 月',
          'unit': '¥22.916 / 亿',
          'usage': '0.296亿',
          'featured': false
        },
        {
          'platform': '智谱AI',
          'model': 'GLM-5.3',
          'plan': '新Pro',
          'qualifier': '[谷]',
          'price': '¥538 / 月',
          'unit': '¥23.2 / 亿',
          'usage': '23.2亿',
          'featured': true
        },
        {
          'platform': '智谱国际版',
          'model': 'GLM-5.3',
          'plan': '新Pro',
          'qualifier': '[谷]',
          'price': '¥544 / 月',
          'unit': '¥23.46 / 亿',
          'usage': '23.2亿',
          'featured': false
        },
        {
          'platform': 'Kimi',
          'model': 'Kimi-K3',
          'plan': 'Allegro（老套餐）',
          'qualifier': '[256K]',
          'price': '¥699 / 月',
          'unit': '¥29.13 / 亿',
          'usage': '24亿',
          'featured': true
        },
        {
          'platform': '智谱AI',
          'model': 'GLM-5.3',
          'plan': '新Lite',
          'qualifier': '[谷]',
          'price': '¥118 / 月',
          'unit': '¥30.54 / 亿',
          'usage': '3.86亿',
          'featured': true
        },
        {
          'platform': '智谱国际版',
          'model': 'GLM-5.3',
          'plan': '新Lite',
          'qualifier': '[谷]',
          'price': '¥122.4 / 月',
          'unit': '¥31.688 / 亿',
          'usage': '3.86亿',
          'featured': false
        },
        {
          'platform': 'Kimi',
          'model': 'Kimi-K3',
          'plan': 'Allegretto（老套餐）',
          'qualifier': '',
          'price': '¥199 / 月',
          'unit': '¥33.17 / 亿',
          'usage': '6亿',
          'featured': true
        },
        {
          'platform': '智谱AI',
          'model': 'GLM-5.3',
          'plan': '新Max',
          'qualifier': '[峰]',
          'price': '¥1,078 / 月',
          'unit': '¥39.85 / 亿',
          'usage': '27.1亿',
          'featured': true
        },
        {
          'platform': '智谱国际版',
          'model': 'GLM-5.3',
          'plan': '新Max',
          'qualifier': '[峰]',
          'price': '¥1,142.4 / 月',
          'unit': '¥42.228 / 亿',
          'usage': '27.1亿',
          'featured': false
        },
        {
          'platform': 'Codex',
          'model': 'GPT-6-Astra',
          'plan': 'Pro $200',
          'qualifier': '',
          'price': '¥1,360 / 月',
          'unit': '¥42.5 / 亿',
          'usage': '32亿',
          'featured': true
        },
        {
          'platform': 'Command Code',
          'model': 'Kimi-K3',
          'plan': 'Go',
          'qualifier': '',
          'price': '¥6.8 / 月',
          'unit': '¥43.18 / 亿',
          'usage': '0.158亿',
          'featured': false
        },
        {
          'platform': 'Kimi',
          'model': 'Kimi-K3',
          'plan': 'Allegro（老套餐）',
          'qualifier': '',
          'price': '¥699 / 月',
          'unit': '¥43.69 / 亿',
          'usage': '16亿',
          'featured': true
        },
        {
          'platform': '智谱AI',
          'model': 'GLM-5.3',
          'plan': '新Pro',
          'qualifier': '[峰]',
          'price': '¥538 / 月',
          'unit': '¥46.41 / 亿',
          'usage': '11.6亿',
          'featured': true
        },
        {
          'platform': '智谱国际版',
          'model': 'GLM-5.3',
          'plan': '新Pro',
          'qualifier': '[峰]',
          'price': '¥544 / 月',
          'unit': '¥46.92 / 亿',
          'usage': '11.6亿',
          'featured': false
        },
        {
          'platform': '字节·方舟 Coding Plan',
          'model': 'GLM-5.3',
          'plan': 'Lite',
          'qualifier': '',
          'price': '¥40 / 月',
          'unit': '¥60 / 亿',
          'usage': '0.667亿',
          'featured': true
        },
        {
          'platform': '字节·方舟 Coding Plan',
          'model': 'GLM-5.3',
          'plan': 'Pro',
          'qualifier': '',
          'price': '¥200 / 月',
          'unit': '¥60 / 亿',
          'usage': '3.33亿',
          'featured': true
        },
        {
          'platform': '智谱AI',
          'model': 'GLM-5.3',
          'plan': '新Lite',
          'qualifier': '[峰]',
          'price': '¥118 / 月',
          'unit': '¥61.07 / 亿',
          'usage': '1.93亿',
          'featured': true
        },
        {
          'platform': '智谱国际版',
          'model': 'GLM-5.3',
          'plan': '新Lite',
          'qualifier': '[峰]',
          'price': '¥122.4 / 月',
          'unit': '¥63.376 / 亿',
          'usage': '1.93亿',
          'featured': false
        },
        {
          'platform': '字节·方舟 Coding Plan',
          'model': 'Kimi-K3',
          'plan': 'Lite',
          'qualifier': '',
          'price': '¥40 / 月',
          'unit': '¥66.67 / 亿',
          'usage': '0.6亿',
          'featured': true
        },
        {
          'platform': '字节·方舟 Coding Plan',
          'model': 'Kimi-K3',
          'plan': 'Pro',
          'qualifier': '',
          'price': '¥200 / 月',
          'unit': '¥66.67 / 亿',
          'usage': '3亿',
          'featured': true
        },
        {
          'platform': 'OpenCode',
          'model': 'GLM-5.3',
          'plan': 'Go Plus',
          'qualifier': '',
          'price': '¥272 / 月',
          'unit': '¥76.5 / 亿',
          'usage': '3.56亿',
          'featured': true
        },
        {
          'platform': 'Ollama',
          'model': 'GLM-5.3',
          'plan': 'Pro',
          'qualifier': '',
          'price': '¥136 / 月',
          'unit': '¥76.5 / 亿',
          'usage': '1.78亿',
          'featured': false
        },
        {
          'platform': 'Ollama',
          'model': 'GLM-5.3',
          'plan': 'Max',
          'qualifier': '',
          'price': '¥680 / 月',
          'unit': '¥76.5 / 亿',
          'usage': '8.89亿',
          'featured': false
        },
        {
          'platform': 'GitHub',
          'model': 'GPT-6.1-Sol',
          'plan': 'Max',
          'qualifier': '[≤272K]',
          'price': '¥680 / 月',
          'unit': '¥82.96 / 亿',
          'usage': '8.2亿',
          'featured': false
        },
        {
          'platform': 'Codex',
          'model': 'GPT-6-Astra',
          'plan': 'Plus',
          'qualifier': '',
          'price': '¥136 / 月',
          'unit': '¥85 / 亿',
          'usage': '1.6亿',
          'featured': true
        },
        {
          'platform': 'Codex',
          'model': 'GPT-6-Astra',
          'plan': 'Pro $100',
          'qualifier': '',
          'price': '¥680 / 月',
          'unit': '¥85 / 亿',
          'usage': '8亿',
          'featured': true
        },
        {
          'platform': '百度·千帆',
          'model': 'GLM-5.3',
          'plan': 'Max',
          'qualifier': '',
          'price': '¥600 / 月',
          'unit': '¥85.71 / 亿',
          'usage': '7亿',
          'featured': false
        },
        {
          'platform': '百度·千帆',
          'model': 'GLM-5.3',
          'plan': 'Pro',
          'qualifier': '',
          'price': '¥200 / 月',
          'unit': '¥86.96 / 亿',
          'usage': '2.3亿',
          'featured': false
        },
        {
          'platform': '字节·方舟 Agent Plan',
          'model': 'GLM-5.3',
          'plan': 'Small',
          'qualifier': '',
          'price': '¥40 / 月',
          'unit': '¥90 / 亿',
          'usage': '0.444亿',
          'featured': false
        },
        {
          'platform': '字节·方舟 Agent Plan',
          'model': 'GLM-5.3',
          'plan': 'Medium',
          'qualifier': '',
          'price': '¥200 / 月',
          'unit': '¥90 / 亿',
          'usage': '2.22亿',
          'featured': false
        },
        {
          'platform': '字节·方舟 Agent Plan',
          'model': 'GLM-5.3',
          'plan': 'Large',
          'qualifier': '',
          'price': '¥500 / 月',
          'unit': '¥90 / 亿',
          'usage': '5.56亿',
          'featured': false
        },
        {
          'platform': '字节·方舟 Agent Plan',
          'model': 'GLM-5.3',
          'plan': 'Max',
          'qualifier': '',
          'price': '¥1,000 / 月',
          'unit': '¥90 / 亿',
          'usage': '11.1亿',
          'featured': false
        },
        {
          'platform': '华为云',
          'model': 'GLM-5.3',
          'plan': 'Max',
          'qualifier': '',
          'price': '¥799 / 月',
          'unit': '¥90.8 / 亿',
          'usage': '8.8亿',
          'featured': false
        },
        {
          'platform': 'GitHub',
          'model': 'GPT-6.1-Sol',
          'plan': 'Pro+',
          'qualifier': '[≤272K]',
          'price': '¥265.2 / 月',
          'unit': '¥92.48 / 亿',
          'usage': '2.87亿',
          'featured': false
        },
        {
          'platform': '百度·千帆',
          'model': 'GLM-5.3',
          'plan': 'Lite',
          'qualifier': '',
          'price': '¥40 / 月',
          'unit': '¥95.24 / 亿',
          'usage': '0.42亿',
          'featured': false
        },
        {
          'platform': '百度·千帆',
          'model': 'GLM-5.3',
          'plan': 'Mini',
          'qualifier': '',
          'price': '¥9.9 / 月',
          'unit': '¥99 / 亿',
          'usage': '0.1亿',
          'featured': false
        },
        {
          'platform': '字节·方舟 Agent Plan',
          'model': 'Kimi-K3',
          'plan': 'Medium',
          'qualifier': '',
          'price': '¥200 / 月',
          'unit': '¥100 / 亿',
          'usage': '2亿',
          'featured': false
        },
        {
          'platform': '字节·方舟 Agent Plan',
          'model': 'Kimi-K3',
          'plan': 'Large',
          'qualifier': '',
          'price': '¥500 / 月',
          'unit': '¥100 / 亿',
          'usage': '5亿',
          'featured': false
        },
        {
          'platform': '字节·方舟 Agent Plan',
          'model': 'Kimi-K3',
          'plan': 'Max',
          'qualifier': '',
          'price': '¥1,000 / 月',
          'unit': '¥100 / 亿',
          'usage': '10亿',
          'featured': false
        },
        {
          'platform': '华为云',
          'model': 'GLM-5.3',
          'plan': 'Pro',
          'qualifier': '',
          'price': '¥399 / 月',
          'unit': '¥105 / 亿',
          'usage': '3.8亿',
          'featured': false
        },
        {
          'platform': '华为云',
          'model': 'GLM-5.3',
          'plan': 'Standard',
          'qualifier': '',
          'price': '¥149 / 月',
          'unit': '¥114.62 / 亿',
          'usage': '1.3亿',
          'featured': false
        },
        {
          'platform': 'Command Code',
          'model': 'GLM-5.3',
          'plan': 'GOAT',
          'qualifier': '',
          'price': '¥68 / 月',
          'unit': '¥114.716 / 亿',
          'usage': '0.593亿',
          'featured': false
        },
        {
          'platform': 'Ollama',
          'model': 'Kimi-K3',
          'plan': 'Pro',
          'qualifier': '',
          'price': '¥136 / 月',
          'unit': '¥115.124 / 亿',
          'usage': '1.18亿',
          'featured': false
        },
        {
          'platform': 'Ollama',
          'model': 'Kimi-K3',
          'plan': 'Max',
          'qualifier': '',
          'price': '¥680 / 月',
          'unit': '¥115.124 / 亿',
          'usage': '5.91亿',
          'featured': false
        },
        {
          'platform': 'Kimi',
          'model': 'Kimi-K3',
          'plan': 'Moderato（老套餐）',
          'qualifier': '[256K]',
          'price': '¥99 / 月',
          'unit': '¥117.86 / 亿',
          'usage': '0.84亿',
          'featured': true
        },
        {
          'platform': '华为云',
          'model': 'GLM-5.3',
          'plan': 'Lite',
          'qualifier': '',
          'price': '¥59 / 月',
          'unit': '¥118 / 亿',
          'usage': '0.5亿',
          'featured': false
        },
        {
          'platform': '腾讯云',
          'model': 'GLM-5.3',
          'plan': 'Lite',
          'qualifier': '',
          'price': '¥39 / 月',
          'unit': '¥133.57 / 亿',
          'usage': '0.292亿',
          'featured': false
        },
        {
          'platform': '腾讯云',
          'model': 'GLM-5.3',
          'plan': 'Standard',
          'qualifier': '',
          'price': '¥99 / 月',
          'unit': '¥133.57 / 亿',
          'usage': '0.741亿',
          'featured': false
        },
        {
          'platform': '腾讯云',
          'model': 'GLM-5.3',
          'plan': 'Pro',
          'qualifier': '',
          'price': '¥299 / 月',
          'unit': '¥133.57 / 亿',
          'usage': '2.24亿',
          'featured': false
        },
        {
          'platform': '腾讯云',
          'model': 'GLM-5.3',
          'plan': 'Max',
          'qualifier': '',
          'price': '¥599 / 月',
          'unit': '¥133.57 / 亿',
          'usage': '4.49亿',
          'featured': false
        },
        {
          'platform': 'Command Code',
          'model': 'GLM-5.3',
          'plan': 'Pro',
          'qualifier': '',
          'price': '¥136 / 月',
          'unit': '¥152.932 / 亿',
          'usage': '0.889亿',
          'featured': false
        },
        {
          'platform': 'Command Code',
          'model': 'GLM-5.3',
          'plan': 'Max 10×',
          'qualifier': '',
          'price': '¥680 / 月',
          'unit': '¥152.932 / 亿',
          'usage': '4.45亿',
          'featured': false
        },
        {
          'platform': 'Command Code',
          'model': 'GLM-5.3',
          'plan': 'Max 20×',
          'qualifier': '',
          'price': '¥1,360 / 月',
          'unit': '¥152.932 / 亿',
          'usage': '8.89亿',
          'featured': false
        },
        {
          'platform': 'OpenCode',
          'model': 'GLM-5.3',
          'plan': 'Go',
          'qualifier': '',
          'price': '¥68 / 月',
          'unit': '¥152.932 / 亿',
          'usage': '0.445亿',
          'featured': true
        },
        {
          'platform': 'GitHub',
          'model': 'GPT-6.1-Sol',
          'plan': 'Max',
          'qualifier': '[>272K]',
          'price': '¥680 / 月',
          'unit': '¥157.42 / 亿',
          'usage': '4.32亿',
          'featured': false
        },
        {
          'platform': 'Command Code',
          'model': 'GPT-6.1-Sol',
          'plan': 'Max 10×',
          'qualifier': '',
          'price': '¥680 / 月',
          'unit': '¥165.92 / 亿',
          'usage': '4.1亿',
          'featured': false
        },
        {
          'platform': 'Command Code',
          'model': 'GPT-6.1-Sol',
          'plan': 'Max 20×',
          'qualifier': '',
          'price': '¥1,360 / 月',
          'unit': '¥165.92 / 亿',
          'usage': '8.2亿',
          'featured': false
        },
        {
          'platform': 'GitHub',
          'model': 'Claude Opus 5.5',
          'plan': 'Max',
          'qualifier': '',
          'price': '¥680 / 月',
          'unit': '¥165.92 / 亿',
          'usage': '4.1亿',
          'featured': false
        },
        {
          'platform': 'Command Code',
          'model': 'Kimi-K3',
          'plan': 'GOAT',
          'qualifier': '',
          'price': '¥68 / 月',
          'unit': '¥172.652 / 亿',
          'usage': '0.394亿',
          'featured': false
        },
        {
          'platform': 'GitHub',
          'model': 'Kimi-K3',
          'plan': 'Max',
          'qualifier': '',
          'price': '¥680 / 月',
          'unit': '¥172.652 / 亿',
          'usage': '3.94亿',
          'featured': false
        },
        {
          'platform': 'GitHub',
          'model': 'GPT-6.1-Sol',
          'plan': 'Pro+',
          'qualifier': '[>272K]',
          'price': '¥265.2 / 月',
          'unit': '¥175.44 / 亿',
          'usage': '1.51亿',
          'featured': false
        },
        {
          'platform': 'GitHub',
          'model': 'Claude Opus 5.5',
          'plan': 'Pro+',
          'qualifier': '',
          'price': '¥265.2 / 月',
          'unit': '¥184.892 / 亿',
          'usage': '1.43亿',
          'featured': false
        },
        {
          'platform': 'GitHub',
          'model': 'Kimi-K3',
          'plan': 'Pro+',
          'qualifier': '',
          'price': '¥265.2 / 月',
          'unit': '¥192.372 / 亿',
          'usage': '1.38亿',
          'featured': false
        },
        {
          'platform': '共绩算力',
          'model': 'GLM-5.3',
          'plan': '按量 API',
          'qualifier': '',
          'price': '按量',
          'unit': '¥194.28 / 亿',
          'usage': '—',
          'featured': false
        },
        {
          'platform': 'Command Code',
          'model': 'Kimi-K3',
          'plan': 'Pro',
          'qualifier': '',
          'price': '¥136 / 月',
          'unit': '¥230.248 / 亿',
          'usage': '0.591亿',
          'featured': false
        },
        {
          'platform': 'Command Code',
          'model': 'Kimi-K3',
          'plan': 'Max 10×',
          'qualifier': '',
          'price': '¥680 / 月',
          'unit': '¥230.248 / 亿',
          'usage': '2.95亿',
          'featured': false
        },
        {
          'platform': 'Command Code',
          'model': 'Kimi-K3',
          'plan': 'Max 20×',
          'qualifier': '',
          'price': '¥1,360 / 月',
          'unit': '¥230.248 / 亿',
          'usage': '5.91亿',
          'featured': false
        },
        {
          'platform': 'OpenCode',
          'model': 'Kimi-K3',
          'plan': 'Go',
          'qualifier': '',
          'price': '¥68 / 月',
          'unit': '¥230.248 / 亿',
          'usage': '0.295亿',
          'featured': true
        },
        {
          'platform': 'OpenCode',
          'model': 'Kimi-K3',
          'plan': 'Go Plus',
          'qualifier': '',
          'price': '¥272 / 月',
          'unit': '¥230.248 / 亿',
          'usage': '1.18亿',
          'featured': true
        },
        {
          'platform': 'GitHub',
          'model': 'Kimi-K3',
          'plan': 'Pro',
          'qualifier': '',
          'price': '¥68 / 月',
          'unit': '¥230.248 / 亿',
          'usage': '0.295亿',
          'featured': false
        },
        {
          'platform': '腾讯云',
          'model': 'Kimi-K3',
          'plan': 'Lite',
          'qualifier': '',
          'price': '¥39 / 月',
          'unit': '¥253.91 / 亿',
          'usage': '0.154亿',
          'featured': false
        },
        {
          'platform': '腾讯云',
          'model': 'Kimi-K3',
          'plan': 'Standard',
          'qualifier': '',
          'price': '¥99 / 月',
          'unit': '¥253.91 / 亿',
          'usage': '0.39亿',
          'featured': false
        },
        {
          'platform': '腾讯云',
          'model': 'Kimi-K3',
          'plan': 'Pro',
          'qualifier': '',
          'price': '¥299 / 月',
          'unit': '¥253.91 / 亿',
          'usage': '1.18亿',
          'featured': false
        },
        {
          'platform': '腾讯云',
          'model': 'Kimi-K3',
          'plan': 'Max',
          'qualifier': '',
          'price': '¥599 / 月',
          'unit': '¥253.91 / 亿',
          'usage': '2.36亿',
          'featured': false
        },
        {
          'platform': '共绩算力',
          'model': 'Kimi-K3',
          'plan': '按量 API',
          'qualifier': '',
          'price': '按量',
          'unit': '¥270.84 / 亿',
          'usage': '—',
          'featured': false
        },
        {
          'platform': 'Command Code',
          'model': 'Claude Opus 5.5',
          'plan': 'Max 10×',
          'qualifier': '',
          'price': '¥680 / 月',
          'unit': '¥331.908 / 亿',
          'usage': '2.05亿',
          'featured': false
        },
        {
          'platform': 'Command Code',
          'model': 'Claude Opus 5.5',
          'plan': 'Max 20×',
          'qualifier': '',
          'price': '¥1,360 / 月',
          'unit': '¥331.908 / 亿',
          'usage': '4.1亿',
          'featured': false
        },
        {
          'platform': 'TRAE 国际版',
          'model': 'Kimi-K3',
          'plan': 'Lite',
          'qualifier': '',
          'price': '¥54.4 / 月',
          'unit': '¥345.304 / 亿',
          'usage': '0.158亿',
          'featured': false
        },
        {
          'platform': 'TRAE 国际版',
          'model': 'Kimi-K3',
          'plan': 'Pro',
          'qualifier': '',
          'price': '¥136 / 月',
          'unit': '¥345.304 / 亿',
          'usage': '0.394亿',
          'featured': false
        },
        {
          'platform': 'TRAE 国际版',
          'model': 'Kimi-K3',
          'plan': 'Pro+',
          'qualifier': '',
          'price': '¥408 / 月',
          'unit': '¥345.304 / 亿',
          'usage': '1.18亿',
          'featured': false
        },
        {
          'platform': 'TRAE 国际版',
          'model': 'Kimi-K3',
          'plan': 'Ultra',
          'qualifier': '',
          'price': '¥1,360 / 月',
          'unit': '¥345.304 / 亿',
          'usage': '3.94亿',
          'featured': false
        },
        {
          'platform': 'GitHub',
          'model': 'GPT-6-Astra',
          'plan': 'Max',
          'qualifier': '[≤272K]',
          'price': '¥680 / 月',
          'unit': '¥575.552 / 亿',
          'usage': '1.18亿',
          'featured': false
        },
        {
          'platform': 'GitHub',
          'model': 'GPT-6-Astra',
          'plan': 'Pro+',
          'qualifier': '[≤272K]',
          'price': '¥265.2 / 月',
          'unit': '¥641.308 / 亿',
          'usage': '0.414亿',
          'featured': false
        },
        {
          'platform': 'GitHub',
          'model': 'GPT-6-Astra',
          'plan': 'Max',
          'qualifier': '[>272K]',
          'price': '¥680 / 月',
          'unit': '¥1,108.604 / 亿',
          'usage': '0.613亿',
          'featured': false
        },
        {
          'platform': 'TRAE 国际版',
          'model': 'GPT-6-Astra',
          'plan': 'Lite',
          'qualifier': '[≤272K]',
          'price': '¥54.4 / 月',
          'unit': '¥1,151.104 / 亿',
          'usage': '0.047亿',
          'featured': false
        },
        {
          'platform': 'TRAE 国际版',
          'model': 'GPT-6-Astra',
          'plan': 'Pro',
          'qualifier': '[≤272K]',
          'price': '¥136 / 月',
          'unit': '¥1,151.104 / 亿',
          'usage': '0.118亿',
          'featured': false
        },
        {
          'platform': 'TRAE 国际版',
          'model': 'GPT-6-Astra',
          'plan': 'Pro+',
          'qualifier': '[≤272K]',
          'price': '¥408 / 月',
          'unit': '¥1,151.104 / 亿',
          'usage': '0.354亿',
          'featured': false
        },
        {
          'platform': 'TRAE 国际版',
          'model': 'GPT-6-Astra',
          'plan': 'Ultra',
          'qualifier': '[≤272K]',
          'price': '¥1,360 / 月',
          'unit': '¥1,151.104 / 亿',
          'usage': '1.18亿',
          'featured': false
        },
        {
          'platform': 'Command Code',
          'model': 'GPT-6-Astra',
          'plan': 'Max 10×',
          'qualifier': '',
          'price': '¥680 / 月',
          'unit': '¥1,151.104 / 亿',
          'usage': '0.591亿',
          'featured': false
        },
        {
          'platform': 'Command Code',
          'model': 'GPT-6-Astra',
          'plan': 'Max 20×',
          'qualifier': '',
          'price': '¥1,360 / 月',
          'unit': '¥1,151.104 / 亿',
          'usage': '1.18亿',
          'featured': false
        },
        {
          'platform': 'GitHub',
          'model': 'GPT-6-Astra',
          'plan': 'Pro+',
          'qualifier': '[>272K]',
          'price': '¥265.2 / 月',
          'unit': '¥1,235.288 / 亿',
          'usage': '0.215亿',
          'featured': false
        },
        {
          'platform': 'TRAE 国际版',
          'model': 'GPT-6-Astra',
          'plan': 'Lite',
          'qualifier': '[>272K]',
          'price': '¥54.4 / 月',
          'unit': '¥2,217.14 / 亿',
          'usage': '0.025亿',
          'featured': false
        },
        {
          'platform': 'TRAE 国际版',
          'model': 'GPT-6-Astra',
          'plan': 'Pro',
          'qualifier': '[>272K]',
          'price': '¥136 / 月',
          'unit': '¥2,217.14 / 亿',
          'usage': '0.061亿',
          'featured': false
        },
        {
          'platform': 'TRAE 国际版',
          'model': 'GPT-6-Astra',
          'plan': 'Pro+',
          'qualifier': '[>272K]',
          'price': '¥408 / 月',
          'unit': '¥2,217.14 / 亿',
          'usage': '0.184亿',
          'featured': false
        },
        {
          'platform': 'TRAE 国际版',
          'model': 'GPT-6-Astra',
          'plan': 'Ultra',
          'qualifier': '[>272K]',
          'price': '¥1,360 / 月',
          'unit': '¥2,217.14 / 亿',
          'usage': '0.613亿',
          'featured': false
        }
      ]
    }
  ]
};
