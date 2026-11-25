// 数据源:套餐与月价 codingplan.fyi(开源 MIT);额度补充 realapipricing.com(开源 MIT,https://github.com/Fei2411/real-api-pricing),更新于 2026-11-25
// 来源:https://www.codingplan.fyi/plans.json(内嵌 planModels)、config.json、models.json、platforms.json;补充:https://realapipricing.com/data/points.json
// 字段说明:groups[]=精选模型分组比价行(旧视图);plans[]=全部在售/受限套餐目录
//   (slug/name/platform/status/billing/origin/fee/currency/feeCny/models[]);
//   models[]={m 模型名/t 档位/u ¥每百万token/q 四档月可用额度(百万token)/
//   s 额度来源(c=codingplan,r=realapi)/w 源口径/x 仅单一实测值/d 数据日期};
//   q 顺序 = cacheRatios [0,0.5,0.95,0.99],无法换算的档位为 null。
// 口径:输出固定 0.5%;codingplan 以 95% 月额度按混合价换算,realapi 用 list_blended 反推;
//   美元按 6.8 折算;action 推广链接已丢弃,购买请前往源站。
window.CODINGPLAN = {
  'source': 'Coding Plan 对比(codingplan.fyi) + 额度补充(realapipricing.com)',
  'url': 'https://www.codingplan.fyi/plans.json',
  'officialUrl': 'https://www.codingplan.fyi/?view=usage',
  'supplementUrl': 'https://realapipricing.com/data/points.json',
  'updated': '2026-11-25',
  'siteUpdated': '2026.11.25',
  'refreshedAt': '2026-11-25 16:56',
  'usdToCnyRate': 6.8,
  'stats': {
    'groups': 2,
    'rows': 352,
    'points': 1845,
    'aliasMatched': 17,
    'addedPlans': 50,
    'rowsFromRealapi': 139,
    'priceMismatch': 0,
    'skippedTiered': 18,
    'duplicates': 0,
    'emptyPlans': 54,
    'plans': 146,
    'fromCodingplan': 96,
    'fromRealapi': 50,
    'plansRows': 2029,
    'realapi': {
      'points': 387,
      'plans': 67,
      'rows': 309,
      'fixed': 95,
      'duplicates': 22,
      'skipped': 29
    }
  },
  'presetTitle': '精选模型价格与用量',
  'presetDesc': '订阅套餐与按量 API 使用同一口径比较综合单价；用量为参考值，各模型额度不相加。',
  'caliberNote': '统一口径：有具体输入、输出、缓存价格的为计算得出，其余按实测数据换算，实测尽量构造 95% 缓存命中率和 0.5% 的输出占比。',
  'desc': '套餐比价快照：按用量、缓存占比、平台、品牌、购买地区与使用时段筛选全部在售套餐，对比月费、月可用额度、每亿单价与官方价折扣，并支持性价比排序；另保留精选模型分列对比，ModelDial 平台与额度数据已并入全部套餐。',
  'cacheRatios': [
    0,
    0.5,
    0.95,
    0.99
  ],
  'workload': {
    'cacheHitRate': 0.95,
    'outputRatio': 0.005
  },
  'sources': [
    {
      'id': 'codingplan',
      'name': 'codingplan.fyi',
      'url': 'https://www.codingplan.fyi/?view=usage',
      'license': '开源数据(MIT,见源站)'
    },
    {
      'id': 'realapi',
      'name': 'realapipricing.com',
      'url': 'https://realapipricing.com/',
      'repo': 'https://github.com/Fei2411/real-api-pricing',
      'license': 'MIT',
      'generatedAt': '2026-11-25'
    }
  ],
  'groups': [
    {
      'id': 'high-volume-models',
      'title': '甜品级模型',
      'kind': 'multi',
      'desc': '包含：DeepSeek-V4.1-Flash、DeepSeek-V4-Flash-0731、GLM-5.3-Flash、GPT-6-Luna、Kimi-K2.8-Preview、MiniMax-M3.1-Flash-Preview',
      'rows': [
        {
          'platform': 'Codex',
          'model': 'GPT-6-Luna',
          'plan': 'Pro $100',
          'qualifier': '',
          'price': '¥680 / 月',
          'unit': '¥0.4111 / 亿',
          'usage': '1,654.1亿',
          'featured': true
        },
        {
          'platform': 'Codex',
          'model': 'GPT-6-Luna',
          'plan': 'Pro $200',
          'qualifier': '',
          'price': '¥1,360 / 月',
          'unit': '¥0.4111 / 亿',
          'usage': '3,308.2亿',
          'featured': true
        },
        {
          'platform': 'Codex',
          'model': 'GPT-6-Luna',
          'plan': 'Pro $500',
          'qualifier': '',
          'price': '¥3,400 / 月',
          'unit': '¥0.4111 / 亿',
          'usage': '8,270.6亿',
          'featured': true
        },
        {
          'platform': 'Codex',
          'model': 'GPT-6-Luna',
          'plan': 'Plus',
          'qualifier': '',
          'price': '¥136 / 月',
          'unit': '¥0.8222 / 亿',
          'usage': '165.4亿',
          'featured': true
        },
        {
          'platform': 'Codex',
          'model': 'GPT-6-Luna',
          'plan': 'Pro $100',
          'qualifier': '[Fast]',
          'price': '¥680 / 月',
          'unit': '¥1.0277 / 亿',
          'usage': '661.6亿',
          'featured': true
        },
        {
          'platform': 'Codex',
          'model': 'GPT-6-Luna',
          'plan': 'Pro $200',
          'qualifier': '[Fast]',
          'price': '¥1,360 / 月',
          'unit': '¥1.0277 / 亿',
          'usage': '1,323.3亿',
          'featured': true
        },
        {
          'platform': 'Codex',
          'model': 'GPT-6-Luna',
          'plan': 'Pro $500',
          'qualifier': '[Fast]',
          'price': '¥3,400 / 月',
          'unit': '¥1.0277 / 亿',
          'usage': '3,308.2亿',
          'featured': true
        },
        {
          'platform': 'Command Code',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': 'Go',
          'qualifier': '[谷]',
          'price': '¥6.8 / 月',
          'unit': '¥1.5071 / 亿',
          'usage': '4.51亿',
          'featured': false
        },
        {
          'platform': 'Command Code',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': 'GOAT',
          'qualifier': '[谷]',
          'price': '¥68 / 月',
          'unit': '¥1.5071 / 亿',
          'usage': '45.1亿',
          'featured': false
        },
        {
          'platform': 'Command Code',
          'model': 'GPT-6-Luna',
          'plan': 'Go',
          'qualifier': '[≤272K]',
          'price': '¥6.8 / 月',
          'unit': '¥1.9185 / 亿',
          'usage': '3.54亿',
          'featured': false
        },
        {
          'platform': 'Codex',
          'model': 'GPT-6-Luna',
          'plan': 'Plus',
          'qualifier': '[Fast]',
          'price': '¥136 / 月',
          'unit': '¥2.0555 / 亿',
          'usage': '66.2亿',
          'featured': true
        },
        {
          'platform': '阿里·百炼 Token Plan',
          'model': 'DeepSeek-V4.1-Flash',
          'plan': 'Pro',
          'qualifier': '[谷]',
          'price': '¥312 / 月',
          'unit': '¥2.5627 / 亿',
          'usage': '121.7亿',
          'featured': true
        },
        {
          'platform': 'Command Code',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': 'Pro',
          'qualifier': '[谷]',
          'price': '¥136 / 月',
          'unit': '¥2.5837 / 亿',
          'usage': '52.6亿',
          'featured': false
        },
        {
          'platform': 'Command Code',
          'model': 'GLM-5.3-Flash',
          'plan': 'Go',
          'qualifier': '',
          'price': '¥6.8 / 月',
          'unit': '¥2.6058 / 亿',
          'usage': '2.61亿',
          'featured': false
        },
        {
          'platform': 'Command Code',
          'model': 'GLM-5.3-Flash',
          'plan': 'GOAT',
          'qualifier': '',
          'price': '¥68 / 月',
          'unit': '¥2.6058 / 亿',
          'usage': '26.1亿',
          'featured': false
        },
        {
          'platform': '阿里·百炼 Token Plan',
          'model': 'DeepSeek-V4.1-Flash',
          'plan': 'Standard',
          'qualifier': '[谷]',
          'price': '¥139 / 月',
          'unit': '¥2.8543 / 亿',
          'usage': '48.7亿',
          'featured': true
        },
        {
          'platform': '阿里·百炼 Token Plan',
          'model': 'DeepSeek-V4.1-Flash',
          'plan': 'Essential',
          'qualifier': '[谷]',
          'price': '¥79 / 月',
          'unit': '¥2.8839 / 亿',
          'usage': '27.4亿',
          'featured': true
        },
        {
          'platform': 'Ollama',
          'model': 'DeepSeek-V4.1-Flash',
          'plan': 'Max',
          'qualifier': '[谷]',
          'price': '¥680 / 月',
          'unit': '¥3.0143 / 亿',
          'usage': '225.6亿',
          'featured': false
        },
        {
          'platform': 'Command Code',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': 'Go',
          'qualifier': '[峰]',
          'price': '¥6.8 / 月',
          'unit': '¥3.0143 / 亿',
          'usage': '2.26亿',
          'featured': false
        },
        {
          'platform': 'Command Code',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': 'GOAT',
          'qualifier': '[峰]',
          'price': '¥68 / 月',
          'unit': '¥3.0143 / 亿',
          'usage': '22.6亿',
          'featured': false
        },
        {
          'platform': 'Ollama',
          'model': 'DeepSeek-V4.1-Flash',
          'plan': 'Pro',
          'qualifier': '[谷]',
          'price': '¥136 / 月',
          'unit': '¥3.0143 / 亿',
          'usage': '45.1亿',
          'featured': false
        },
        {
          'platform': '阿里·百炼 Token Plan',
          'model': 'DeepSeek-V4.1-Flash',
          'plan': 'Lite',
          'qualifier': '[谷]',
          'price': '¥39 / 月',
          'unit': '¥3.2034 / 亿',
          'usage': '12.2亿',
          'featured': true
        },
        {
          'platform': 'Command Code',
          'model': 'GPT-6-Luna',
          'plan': 'Go',
          'qualifier': '[>272K]',
          'price': '¥6.8 / 月',
          'unit': '¥3.6952 / 亿',
          'usage': '1.84亿',
          'featured': false
        },
        {
          'platform': '阿里·百炼 Token Plan',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': 'Pro',
          'qualifier': '[谷]',
          'price': '¥312 / 月',
          'unit': '¥3.727 / 亿',
          'usage': '83.7亿',
          'featured': true
        },
        {
          'platform': '阿里·百炼 Token Plan',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': 'Standard',
          'qualifier': '[谷]',
          'price': '¥139 / 月',
          'unit': '¥4.1511 / 亿',
          'usage': '33.5亿',
          'featured': true
        },
        {
          'platform': '阿里·百炼 Token Plan',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': 'Essential',
          'qualifier': '[谷]',
          'price': '¥79 / 月',
          'unit': '¥4.1942 / 亿',
          'usage': '18.8亿',
          'featured': true
        },
        {
          'platform': 'OpenCode',
          'model': 'GLM-5.3-Flash',
          'plan': 'Go',
          'qualifier': '',
          'price': '¥68 / 月',
          'unit': '¥4.3429 / 亿',
          'usage': '15.7亿',
          'featured': true
        },
        {
          'platform': '阿里·百炼 Token Plan',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': 'Lite',
          'qualifier': '[谷]',
          'price': '¥39 / 月',
          'unit': '¥4.6588 / 亿',
          'usage': '8.37亿',
          'featured': true
        },
        {
          'platform': 'Command Code',
          'model': 'GLM-5.3-Flash',
          'plan': 'Pro',
          'qualifier': '',
          'price': '¥136 / 月',
          'unit': '¥4.7377 / 亿',
          'usage': '28.7亿',
          'featured': false
        },
        {
          'platform': '阿里·百炼 Token Plan',
          'model': 'DeepSeek-V4.1-Flash',
          'plan': 'Pro',
          'qualifier': '[峰]',
          'price': '¥312 / 月',
          'unit': '¥5.1254 / 亿',
          'usage': '60.9亿',
          'featured': true
        },
        {
          'platform': 'Command Code',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': 'Pro',
          'qualifier': '[峰]',
          'price': '¥136 / 月',
          'unit': '¥5.1673 / 亿',
          'usage': '26.3亿',
          'featured': false
        },
        {
          'platform': '阿里·百炼 Token Plan',
          'model': 'DeepSeek-V4.1-Flash',
          'plan': 'Standard',
          'qualifier': '[峰]',
          'price': '¥139 / 月',
          'unit': '¥5.7086 / 亿',
          'usage': '24.3亿',
          'featured': true
        },
        {
          'platform': 'Command Code',
          'model': 'GPT-6-Luna',
          'plan': 'GOAT',
          'qualifier': '[≤272K]',
          'price': '¥68 / 月',
          'unit': '¥5.7554 / 亿',
          'usage': '11.8亿',
          'featured': false
        },
        {
          'platform': 'GitHub',
          'model': 'GPT-6-Luna',
          'plan': 'Max',
          'qualifier': '[≤272K]',
          'price': '¥680 / 月',
          'unit': '¥5.7554 / 亿',
          'usage': '118.2亿',
          'featured': false
        },
        {
          'platform': '阿里·百炼 Token Plan',
          'model': 'DeepSeek-V4.1-Flash',
          'plan': 'Essential',
          'qualifier': '[峰]',
          'price': '¥79 / 月',
          'unit': '¥5.7679 / 亿',
          'usage': '13.7亿',
          'featured': true
        },
        {
          'platform': 'OpenCode',
          'model': 'GLM-5.3-Flash',
          'plan': 'Go Plus',
          'qualifier': '',
          'price': '¥272 / 月',
          'unit': '¥5.7906 / 亿',
          'usage': '47亿',
          'featured': true
        },
        {
          'platform': 'Command Code',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': 'Max 10×',
          'qualifier': '[谷]',
          'price': '¥680 / 月',
          'unit': '¥6.0285 / 亿',
          'usage': '112.8亿',
          'featured': false
        },
        {
          'platform': 'Command Code',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': 'Max 20×',
          'qualifier': '[谷]',
          'price': '¥1,360 / 月',
          'unit': '¥6.0285 / 亿',
          'usage': '225.6亿',
          'featured': false
        },
        {
          'platform': 'Ollama',
          'model': 'DeepSeek-V4.1-Flash',
          'plan': 'Max',
          'qualifier': '[峰]',
          'price': '¥680 / 月',
          'unit': '¥6.0285 / 亿',
          'usage': '112.8亿',
          'featured': false
        },
        {
          'platform': 'Ollama',
          'model': 'DeepSeek-V4.1-Flash',
          'plan': 'Pro',
          'qualifier': '[峰]',
          'price': '¥136 / 月',
          'unit': '¥6.0285 / 亿',
          'usage': '22.6亿',
          'featured': false
        },
        {
          'platform': '阿里·百炼 Token Plan',
          'model': 'DeepSeek-V4.1-Flash',
          'plan': 'Lite',
          'qualifier': '[峰]',
          'price': '¥39 / 月',
          'unit': '¥6.4067 / 亿',
          'usage': '6.09亿',
          'featured': true
        },
        {
          'platform': 'GitHub',
          'model': 'GPT-6-Luna',
          'plan': 'Pro+',
          'qualifier': '[≤272K]',
          'price': '¥265.2 / 月',
          'unit': '¥6.4131 / 亿',
          'usage': '41.4亿',
          'featured': false
        },
        {
          'platform': '智谱AI',
          'model': 'GLM-5.3-Flash',
          'plan': '新Max',
          'qualifier': '[谷]',
          'price': '¥1,078 / 月',
          'unit': '¥6.5812 / 亿',
          'usage': '163.8亿',
          'featured': true
        },
        {
          'platform': '字节·方舟 Coding Plan',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': 'Lite',
          'qualifier': '',
          'price': '¥40 / 月',
          'unit': '¥6.6667 / 亿',
          'usage': '6亿',
          'featured': true
        },
        {
          'platform': '字节·方舟 Coding Plan',
          'model': 'GLM-5.3-Flash',
          'plan': 'Lite',
          'qualifier': '',
          'price': '¥40 / 月',
          'unit': '¥6.6667 / 亿',
          'usage': '6亿',
          'featured': true
        },
        {
          'platform': '字节·方舟 Coding Plan',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': 'Pro',
          'qualifier': '',
          'price': '¥200 / 月',
          'unit': '¥6.6667 / 亿',
          'usage': '30亿',
          'featured': true
        },
        {
          'platform': '字节·方舟 Coding Plan',
          'model': 'GLM-5.3-Flash',
          'plan': 'Pro',
          'qualifier': '',
          'price': '¥200 / 月',
          'unit': '¥6.6667 / 亿',
          'usage': '30亿',
          'featured': true
        },
        {
          'platform': '智谱国际版',
          'model': 'GLM-5.3-Flash',
          'plan': '新Max',
          'qualifier': '[谷]',
          'price': '¥1,142.4 / 月',
          'unit': '¥6.9744 / 亿',
          'usage': '163.8亿',
          'featured': false
        },
        {
          'platform': '共绩算力',
          'model': 'DeepSeek-V4.1-Flash',
          'plan': '按量 API',
          'qualifier': '',
          'price': '按量',
          'unit': '¥7.0924 / 亿',
          'usage': '—',
          'featured': false
        },
        {
          'platform': '阿里·百炼 Token Plan',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': 'Pro',
          'qualifier': '[峰]',
          'price': '¥312 / 月',
          'unit': '¥7.4541 / 亿',
          'usage': '41.9亿',
          'featured': true
        },
        {
          'platform': '智谱AI',
          'model': 'GLM-5.3-Flash',
          'plan': '新Pro',
          'qualifier': '[谷]',
          'price': '¥538 / 月',
          'unit': '¥7.6639 / 亿',
          'usage': '70.2亿',
          'featured': true
        },
        {
          'platform': 'OpenCode',
          'model': 'GPT-6-Luna',
          'plan': 'Go',
          'qualifier': '[272K]',
          'price': '¥68 / 月',
          'unit': '¥7.6738 / 亿',
          'usage': '8.86亿',
          'featured': true
        },
        {
          'platform': 'OpenCode',
          'model': 'GPT-6-Luna',
          'plan': 'Go Plus',
          'qualifier': '[272K]',
          'price': '¥272 / 月',
          'unit': '¥7.6738 / 亿',
          'usage': '35.4亿',
          'featured': true
        },
        {
          'platform': 'Command Code',
          'model': 'GPT-6-Luna',
          'plan': 'Pro',
          'qualifier': '[≤272K]',
          'price': '¥136 / 月',
          'unit': '¥7.6738 / 亿',
          'usage': '17.7亿',
          'featured': false
        },
        {
          'platform': 'Command Code',
          'model': 'GPT-6-Luna',
          'plan': 'Max 10×',
          'qualifier': '[≤272K]',
          'price': '¥680 / 月',
          'unit': '¥7.6738 / 亿',
          'usage': '88.6亿',
          'featured': false
        },
        {
          'platform': 'Command Code',
          'model': 'GPT-6-Luna',
          'plan': 'Max 20×',
          'qualifier': '[≤272K]',
          'price': '¥1,360 / 月',
          'unit': '¥7.6738 / 亿',
          'usage': '177.2亿',
          'featured': false
        },
        {
          'platform': 'GitHub',
          'model': 'GPT-6-Luna',
          'plan': 'Pro',
          'qualifier': '[≤272K]',
          'price': '¥68 / 月',
          'unit': '¥7.6738 / 亿',
          'usage': '8.86亿',
          'featured': false
        },
        {
          'platform': '智谱国际版',
          'model': 'GLM-5.3-Flash',
          'plan': '新Pro',
          'qualifier': '[谷]',
          'price': '¥544 / 月',
          'unit': '¥7.7493 / 亿',
          'usage': '70.2亿',
          'featured': false
        },
        {
          'platform': 'OpenCode',
          'model': 'GLM-5.3-Flash',
          'plan': 'Go Teams',
          'qualifier': '',
          'price': '¥136 / 月',
          'unit': '¥8.0177 / 亿',
          'usage': '17亿',
          'featured': true
        },
        {
          'platform': '阿里·百炼 Token Plan',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': 'Standard',
          'qualifier': '[峰]',
          'price': '¥139 / 月',
          'unit': '¥8.3022 / 亿',
          'usage': '16.7亿',
          'featured': true
        },
        {
          'platform': '阿里·百炼 Token Plan',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': 'Essential',
          'qualifier': '[峰]',
          'price': '¥79 / 月',
          'unit': '¥8.3885 / 亿',
          'usage': '9.42亿',
          'featured': true
        },
        {
          'platform': 'Ollama',
          'model': 'GLM-5.3-Flash',
          'plan': 'Max',
          'qualifier': '',
          'price': '¥680 / 月',
          'unit': '¥8.6859 / 亿',
          'usage': '78.3亿',
          'featured': false
        },
        {
          'platform': 'Ollama',
          'model': 'GLM-5.3-Flash',
          'plan': 'Pro',
          'qualifier': '',
          'price': '¥136 / 月',
          'unit': '¥8.6859 / 亿',
          'usage': '15.7亿',
          'featured': false
        },
        {
          'platform': '阿里·百炼 Token Plan',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': 'Lite',
          'qualifier': '[峰]',
          'price': '¥39 / 月',
          'unit': '¥9.3176 / 亿',
          'usage': '4.19亿',
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
          'platform': '智谱AI',
          'model': 'GLM-5.3-Flash',
          'plan': '新Lite',
          'qualifier': '[谷]',
          'price': '¥118 / 月',
          'unit': '¥10.0855 / 亿',
          'usage': '11.7亿',
          'featured': true
        },
        {
          'platform': '智谱国际版',
          'model': 'GLM-5.3-Flash',
          'plan': '新Lite',
          'qualifier': '[谷]',
          'price': '¥122.4 / 月',
          'unit': '¥10.4616 / 亿',
          'usage': '11.7亿',
          'featured': false
        },
        {
          'platform': '超算 · Token Plan',
          'model': 'DeepSeek-V4.1-Flash',
          'plan': '旗舰版',
          'qualifier': '',
          'price': '¥899 / 月',
          'unit': '¥10.7684 / 亿',
          'usage': '83.5亿',
          'featured': false
        },
        {
          'platform': '超算 · Token Plan',
          'model': 'DeepSeek-V4.1-Flash',
          'plan': '基础版',
          'qualifier': '',
          'price': '¥30 / 月',
          'unit': '¥10.7804 / 亿',
          'usage': '2.78亿',
          'featured': false
        },
        {
          'platform': 'Command Code',
          'model': 'GPT-6-Luna',
          'plan': 'GOAT',
          'qualifier': '[>272K]',
          'price': '¥68 / 月',
          'unit': '¥11.0857 / 亿',
          'usage': '6.13亿',
          'featured': false
        },
        {
          'platform': 'GitHub',
          'model': 'GPT-6-Luna',
          'plan': 'Max',
          'qualifier': '[>272K]',
          'price': '¥680 / 月',
          'unit': '¥11.0857 / 亿',
          'usage': '61.3亿',
          'featured': false
        },
        {
          'platform': '超算 · Token Plan',
          'model': 'DeepSeek-V4.1-Flash',
          'plan': '高级版',
          'qualifier': '',
          'price': '¥310 / 月',
          'unit': '¥11.1397 / 亿',
          'usage': '27.8亿',
          'featured': false
        },
        {
          'platform': 'OpenCode',
          'model': 'GPT-6-Luna',
          'plan': 'Go Teams',
          'qualifier': '[272K]',
          'price': '¥136 / 月',
          'unit': '¥11.5107 / 亿',
          'usage': '11.8亿',
          'featured': true
        },
        {
          'platform': 'TRAE 国际版',
          'model': 'GPT-6-Luna',
          'plan': 'Lite',
          'qualifier': '[≤272K]',
          'price': '¥54.4 / 月',
          'unit': '¥11.5107 / 亿',
          'usage': '4.73亿',
          'featured': false
        },
        {
          'platform': 'TRAE 国际版',
          'model': 'GPT-6-Luna',
          'plan': 'Pro',
          'qualifier': '[≤272K]',
          'price': '¥136 / 月',
          'unit': '¥11.5107 / 亿',
          'usage': '11.8亿',
          'featured': false
        },
        {
          'platform': 'TRAE 国际版',
          'model': 'GPT-6-Luna',
          'plan': 'Pro+',
          'qualifier': '[≤272K]',
          'price': '¥408 / 月',
          'unit': '¥11.5107 / 亿',
          'usage': '35.4亿',
          'featured': false
        },
        {
          'platform': 'TRAE 国际版',
          'model': 'GPT-6-Luna',
          'plan': 'Ultra',
          'qualifier': '[≤272K]',
          'price': '¥1,360 / 月',
          'unit': '¥11.5107 / 亿',
          'usage': '118.2亿',
          'featured': false
        },
        {
          'platform': '共绩算力',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': '按量 API',
          'qualifier': '',
          'price': '按量',
          'unit': '¥11.551 / 亿',
          'usage': '—',
          'featured': false
        },
        {
          'platform': '超算 · Token Plan',
          'model': 'DeepSeek-V4.1-Flash',
          'plan': '标准版',
          'qualifier': '',
          'price': '¥130 / 月',
          'unit': '¥11.6788 / 亿',
          'usage': '11.1亿',
          'featured': false
        },
        {
          'platform': 'Command Code',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': 'Max 10×',
          'qualifier': '[峰]',
          'price': '¥680 / 月',
          'unit': '¥12.0571 / 亿',
          'usage': '56.4亿',
          'featured': false
        },
        {
          'platform': 'Command Code',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': 'Max 20×',
          'qualifier': '[峰]',
          'price': '¥1,360 / 月',
          'unit': '¥12.0571 / 亿',
          'usage': '112.8亿',
          'featured': false
        },
        {
          'platform': 'GitHub',
          'model': 'GPT-6-Luna',
          'plan': 'Pro+',
          'qualifier': '[>272K]',
          'price': '¥265.2 / 月',
          'unit': '¥12.3526 / 亿',
          'usage': '21.5亿',
          'featured': false
        },
        {
          'platform': '超算 · Token Plan',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': '旗舰版',
          'qualifier': '',
          'price': '¥899 / 月',
          'unit': '¥12.3747 / 亿',
          'usage': '72.6亿',
          'featured': false
        },
        {
          'platform': '超算 · Token Plan',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': '基础版',
          'qualifier': '',
          'price': '¥30 / 月',
          'unit': '¥12.3884 / 亿',
          'usage': '2.42亿',
          'featured': false
        },
        {
          'platform': '超算 · Token Plan',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': '高级版',
          'qualifier': '',
          'price': '¥310 / 月',
          'unit': '¥12.8014 / 亿',
          'usage': '24.2亿',
          'featured': false
        },
        {
          'platform': '超算 · Token Plan',
          'model': 'GLM-5.3-Flash',
          'plan': '旗舰版',
          'qualifier': '',
          'price': '¥899 / 月',
          'unit': '¥13.0606 / 亿',
          'usage': '68.8亿',
          'featured': false
        },
        {
          'platform': '超算 · Token Plan',
          'model': 'GLM-5.3-Flash',
          'plan': '基础版',
          'qualifier': '',
          'price': '¥30 / 月',
          'unit': '¥13.0751 / 亿',
          'usage': '2.29亿',
          'featured': false
        },
        {
          'platform': '智谱AI',
          'model': 'GLM-5.3-Flash',
          'plan': '新Max',
          'qualifier': '[峰]',
          'price': '¥1,078 / 月',
          'unit': '¥13.1625 / 亿',
          'usage': '81.9亿',
          'featured': true
        },
        {
          'platform': '超算 · Token Plan',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': '标准版',
          'qualifier': '',
          'price': '¥130 / 月',
          'unit': '¥13.4208 / 亿',
          'usage': '9.69亿',
          'featured': false
        },
        {
          'platform': '超算 · Token Plan',
          'model': 'GLM-5.3-Flash',
          'plan': '高级版',
          'qualifier': '',
          'price': '¥310 / 月',
          'unit': '¥13.5109 / 亿',
          'usage': '22.9亿',
          'featured': false
        },
        {
          'platform': '智谱国际版',
          'model': 'GLM-5.3-Flash',
          'plan': '新Max',
          'qualifier': '[峰]',
          'price': '¥1,142.4 / 月',
          'unit': '¥13.9488 / 亿',
          'usage': '81.9亿',
          'featured': false
        },
        {
          'platform': '超算 · Token Plan',
          'model': 'GLM-5.3-Flash',
          'plan': '标准版',
          'qualifier': '',
          'price': '¥130 / 月',
          'unit': '¥14.1647 / 亿',
          'usage': '9.18亿',
          'featured': false
        },
        {
          'platform': 'OpenCode',
          'model': 'GPT-6-Luna',
          'plan': 'Go',
          'qualifier': '',
          'price': '¥68 / 月',
          'unit': '¥14.7809 / 亿',
          'usage': '4.6亿',
          'featured': true
        },
        {
          'platform': 'OpenCode',
          'model': 'GPT-6-Luna',
          'plan': 'Go Plus',
          'qualifier': '',
          'price': '¥272 / 月',
          'unit': '¥14.7809 / 亿',
          'usage': '18.4亿',
          'featured': true
        },
        {
          'platform': 'Command Code',
          'model': 'GPT-6-Luna',
          'plan': 'Pro',
          'qualifier': '[>272K]',
          'price': '¥136 / 月',
          'unit': '¥14.7809 / 亿',
          'usage': '9.2亿',
          'featured': false
        },
        {
          'platform': 'Command Code',
          'model': 'GPT-6-Luna',
          'plan': 'Max 10×',
          'qualifier': '[>272K]',
          'price': '¥680 / 月',
          'unit': '¥14.7809 / 亿',
          'usage': '46亿',
          'featured': false
        },
        {
          'platform': 'Command Code',
          'model': 'GPT-6-Luna',
          'plan': 'Max 20×',
          'qualifier': '[>272K]',
          'price': '¥1,360 / 月',
          'unit': '¥14.7809 / 亿',
          'usage': '92亿',
          'featured': false
        },
        {
          'platform': 'GitHub',
          'model': 'GPT-6-Luna',
          'plan': 'Pro',
          'qualifier': '[>272K]',
          'price': '¥68 / 月',
          'unit': '¥14.7809 / 亿',
          'usage': '4.6亿',
          'featured': false
        },
        {
          'platform': '智谱AI',
          'model': 'GLM-5.3-Flash',
          'plan': '新Pro',
          'qualifier': '[峰]',
          'price': '¥538 / 月',
          'unit': '¥15.3277 / 亿',
          'usage': '35.1亿',
          'featured': true
        },
        {
          'platform': '智谱国际版',
          'model': 'GLM-5.3-Flash',
          'plan': '新Pro',
          'qualifier': '[峰]',
          'price': '¥544 / 月',
          'unit': '¥15.4987 / 亿',
          'usage': '35.1亿',
          'featured': false
        },
        {
          'platform': 'TRAE 国际版',
          'model': 'DeepSeek-V4.1-Flash',
          'plan': 'Pro+',
          'qualifier': '[谷]',
          'price': '¥408 / 月',
          'unit': '¥16.7561 / 亿',
          'usage': '24.3亿',
          'featured': false
        },
        {
          'platform': 'TRAE 国际版',
          'model': 'DeepSeek-V4.1-Flash',
          'plan': 'Lite',
          'qualifier': '[谷]',
          'price': '¥54.4 / 月',
          'unit': '¥16.7561 / 亿',
          'usage': '3.25亿',
          'featured': false
        },
        {
          'platform': 'TRAE 国际版',
          'model': 'DeepSeek-V4.1-Flash',
          'plan': 'Pro',
          'qualifier': '[谷]',
          'price': '¥136 / 月',
          'unit': '¥16.7561 / 亿',
          'usage': '8.12亿',
          'featured': false
        },
        {
          'platform': 'TRAE 国际版',
          'model': 'DeepSeek-V4.1-Flash',
          'plan': 'Ultra',
          'qualifier': '[谷]',
          'price': '¥1,360 / 月',
          'unit': '¥16.7561 / 亿',
          'usage': '81.2亿',
          'featured': false
        },
        {
          'platform': 'Command Code',
          'model': 'GLM-5.3-Flash',
          'plan': 'Max 10×',
          'qualifier': '',
          'price': '¥680 / 月',
          'unit': '¥17.3717 / 亿',
          'usage': '39.1亿',
          'featured': false
        },
        {
          'platform': 'Command Code',
          'model': 'GLM-5.3-Flash',
          'plan': 'Max 20×',
          'qualifier': '',
          'price': '¥1,360 / 月',
          'unit': '¥17.3717 / 亿',
          'usage': '78.3亿',
          'featured': false
        },
        {
          'platform': '腾讯云',
          'model': 'GLM-5.3-Flash',
          'plan': 'Lite',
          'qualifier': '',
          'price': '¥39 / 月',
          'unit': '¥18.9845 / 亿',
          'usage': '2.05亿',
          'featured': false
        },
        {
          'platform': '腾讯云',
          'model': 'GLM-5.3-Flash',
          'plan': 'Standard',
          'qualifier': '',
          'price': '¥99 / 月',
          'unit': '¥18.9845 / 亿',
          'usage': '5.21亿',
          'featured': false
        },
        {
          'platform': '腾讯云',
          'model': 'GLM-5.3-Flash',
          'plan': 'Pro',
          'qualifier': '',
          'price': '¥299 / 月',
          'unit': '¥18.9845 / 亿',
          'usage': '15.7亿',
          'featured': false
        },
        {
          'platform': '腾讯云',
          'model': 'GLM-5.3-Flash',
          'plan': 'Max',
          'qualifier': '',
          'price': '¥599 / 月',
          'unit': '¥18.9845 / 亿',
          'usage': '31.6亿',
          'featured': false
        },
        {
          'platform': '智谱AI',
          'model': 'GLM-5.3-Flash',
          'plan': '新Lite',
          'qualifier': '[峰]',
          'price': '¥118 / 月',
          'unit': '¥20.1711 / 亿',
          'usage': '5.85亿',
          'featured': true
        },
        {
          'platform': '智谱国际版',
          'model': 'GLM-5.3-Flash',
          'plan': '新Lite',
          'qualifier': '[峰]',
          'price': '¥122.4 / 月',
          'unit': '¥20.9232 / 亿',
          'usage': '5.85亿',
          'featured': false
        },
        {
          'platform': '共绩算力',
          'model': 'GLM-5.3-Flash',
          'plan': '按量 API',
          'qualifier': '',
          'price': '按量',
          'unit': '¥21.6966 / 亿',
          'usage': '—',
          'featured': false
        },
        {
          'platform': 'TRAE 国际版',
          'model': 'GPT-6-Luna',
          'plan': 'Lite',
          'qualifier': '[>272K]',
          'price': '¥54.4 / 月',
          'unit': '¥22.1714 / 亿',
          'usage': '2.45亿',
          'featured': false
        },
        {
          'platform': 'OpenCode',
          'model': 'GPT-6-Luna',
          'plan': 'Go Teams',
          'qualifier': '',
          'price': '¥136 / 月',
          'unit': '¥22.1714 / 亿',
          'usage': '6.13亿',
          'featured': true
        },
        {
          'platform': 'TRAE 国际版',
          'model': 'GPT-6-Luna',
          'plan': 'Pro',
          'qualifier': '[>272K]',
          'price': '¥136 / 月',
          'unit': '¥22.1714 / 亿',
          'usage': '6.13亿',
          'featured': false
        },
        {
          'platform': 'TRAE 国际版',
          'model': 'GPT-6-Luna',
          'plan': 'Pro+',
          'qualifier': '[>272K]',
          'price': '¥408 / 月',
          'unit': '¥22.1714 / 亿',
          'usage': '18.4亿',
          'featured': false
        },
        {
          'platform': 'TRAE 国际版',
          'model': 'GPT-6-Luna',
          'plan': 'Ultra',
          'qualifier': '[>272K]',
          'price': '¥1,360 / 月',
          'unit': '¥22.1714 / 亿',
          'usage': '61.3亿',
          'featured': false
        },
        {
          'platform': 'TRAE 国际版',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': 'Lite',
          'qualifier': '[谷]',
          'price': '¥54.4 / 月',
          'unit': '¥23.8275 / 亿',
          'usage': '2.28亿',
          'featured': false
        },
        {
          'platform': 'TRAE 国际版',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': 'Pro',
          'qualifier': '[谷]',
          'price': '¥136 / 月',
          'unit': '¥23.8275 / 亿',
          'usage': '5.71亿',
          'featured': false
        },
        {
          'platform': 'TRAE 国际版',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': 'Pro+',
          'qualifier': '[谷]',
          'price': '¥408 / 月',
          'unit': '¥23.8275 / 亿',
          'usage': '17.1亿',
          'featured': false
        },
        {
          'platform': 'TRAE 国际版',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': 'Ultra',
          'qualifier': '[谷]',
          'price': '¥1,360 / 月',
          'unit': '¥23.8275 / 亿',
          'usage': '57.1亿',
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
          'plan': 'Max',
          'qualifier': '[≤32K]',
          'price': '¥999 / 月',
          'unit': '¥24.24 / 亿',
          'usage': '41.2亿',
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
          'platform': 'TRAE 国际版',
          'model': 'DeepSeek-V4.1-Flash',
          'plan': 'Pro+',
          'qualifier': '[峰]',
          'price': '¥408 / 月',
          'unit': '¥33.5121 / 亿',
          'usage': '12.2亿',
          'featured': false
        },
        {
          'platform': 'TRAE 国际版',
          'model': 'DeepSeek-V4.1-Flash',
          'plan': 'Lite',
          'qualifier': '[峰]',
          'price': '¥54.4 / 月',
          'unit': '¥33.5121 / 亿',
          'usage': '1.62亿',
          'featured': false
        },
        {
          'platform': 'TRAE 国际版',
          'model': 'DeepSeek-V4.1-Flash',
          'plan': 'Pro',
          'qualifier': '[峰]',
          'price': '¥136 / 月',
          'unit': '¥33.5121 / 亿',
          'usage': '4.06亿',
          'featured': false
        },
        {
          'platform': 'TRAE 国际版',
          'model': 'DeepSeek-V4.1-Flash',
          'plan': 'Ultra',
          'qualifier': '[峰]',
          'price': '¥1,360 / 月',
          'unit': '¥33.5121 / 亿',
          'usage': '40.6亿',
          'featured': false
        },
        {
          'platform': 'Kimi',
          'model': 'Kimi-K2.8-Preview',
          'plan': 'Pro',
          'qualifier': '',
          'price': '¥199 / 月',
          'unit': '¥40.118 / 亿',
          'usage': '4.96亿',
          'featured': true
        },
        {
          'platform': '优云智算',
          'model': 'GLM-5.3-Flash',
          'plan': 'Ultra',
          'qualifier': '',
          'price': '¥999 / 月',
          'unit': '¥42.6923 / 亿',
          'usage': '23.4亿',
          'featured': false
        },
        {
          'platform': '优云智算',
          'model': 'GLM-5.3-Flash',
          'plan': 'Max',
          'qualifier': '',
          'price': '¥799 / 月',
          'unit': '¥42.957 / 亿',
          'usage': '18.6亿',
          'featured': false
        },
        {
          'platform': '优云智算',
          'model': 'GLM-5.3-Flash',
          'plan': 'Mini',
          'qualifier': '',
          'price': '¥49 / 月',
          'unit': '¥42.9825 / 亿',
          'usage': '1.14亿',
          'featured': false
        },
        {
          'platform': '优云智算',
          'model': 'GLM-5.3-Flash',
          'plan': 'Lite',
          'qualifier': '',
          'price': '¥99 / 月',
          'unit': '¥43.4211 / 亿',
          'usage': '2.28亿',
          'featured': false
        },
        {
          'platform': '优云智算',
          'model': 'GLM-5.3-Flash',
          'plan': 'Basic',
          'qualifier': '',
          'price': '¥199 / 月',
          'unit': '¥43.6404 / 亿',
          'usage': '4.56亿',
          'featured': false
        },
        {
          'platform': '优云智算',
          'model': 'GLM-5.3-Flash',
          'plan': 'Pro',
          'qualifier': '',
          'price': '¥499 / 月',
          'unit': '¥43.7719 / 亿',
          'usage': '11.4亿',
          'featured': false
        },
        {
          'platform': 'Kimi',
          'model': 'Kimi-K2.8-Preview',
          'plan': 'Max',
          'qualifier': '',
          'price': '¥699 / 月',
          'unit': '¥44.0365 / 亿',
          'usage': '15.9亿',
          'featured': true
        },
        {
          'platform': 'Kimi',
          'model': 'Kimi-K2.8-Preview',
          'plan': 'Ultra',
          'qualifier': '',
          'price': '¥1,399 / 月',
          'unit': '¥44.068 / 亿',
          'usage': '31.7亿',
          'featured': true
        },
        {
          'platform': 'TRAE 国际版',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': 'Lite',
          'qualifier': '[峰]',
          'price': '¥54.4 / 月',
          'unit': '¥47.6551 / 亿',
          'usage': '1.14亿',
          'featured': false
        },
        {
          'platform': 'TRAE 国际版',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': 'Pro',
          'qualifier': '[峰]',
          'price': '¥136 / 月',
          'unit': '¥47.6551 / 亿',
          'usage': '2.85亿',
          'featured': false
        },
        {
          'platform': 'TRAE 国际版',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': 'Pro+',
          'qualifier': '[峰]',
          'price': '¥408 / 月',
          'unit': '¥47.6551 / 亿',
          'usage': '8.56亿',
          'featured': false
        },
        {
          'platform': 'TRAE 国际版',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': 'Ultra',
          'qualifier': '[峰]',
          'price': '¥1,360 / 月',
          'unit': '¥47.6551 / 亿',
          'usage': '28.5亿',
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
          'unit': '¥64.0385 / 亿',
          'usage': '15.6亿',
          'featured': false
        },
        {
          'platform': '优云智算',
          'model': 'DeepSeek-V4.1-Flash',
          'plan': 'Ultra',
          'qualifier': '',
          'price': '¥999 / 月',
          'unit': '¥64.0385 / 亿',
          'usage': '15.6亿',
          'featured': false
        },
        {
          'platform': '优云智算',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': 'Max',
          'qualifier': '',
          'price': '¥799 / 月',
          'unit': '¥64.4355 / 亿',
          'usage': '12.4亿',
          'featured': false
        },
        {
          'platform': '优云智算',
          'model': 'DeepSeek-V4.1-Flash',
          'plan': 'Max',
          'qualifier': '',
          'price': '¥799 / 月',
          'unit': '¥64.4355 / 亿',
          'usage': '12.4亿',
          'featured': false
        },
        {
          'platform': '优云智算',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': 'Mini',
          'qualifier': '',
          'price': '¥49 / 月',
          'unit': '¥64.4737 / 亿',
          'usage': '0.76亿',
          'featured': false
        },
        {
          'platform': '优云智算',
          'model': 'DeepSeek-V4.1-Flash',
          'plan': 'Mini',
          'qualifier': '',
          'price': '¥49 / 月',
          'unit': '¥64.4737 / 亿',
          'usage': '0.76亿',
          'featured': false
        },
        {
          'platform': '优云智算',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': 'Lite',
          'qualifier': '',
          'price': '¥99 / 月',
          'unit': '¥65.1316 / 亿',
          'usage': '1.52亿',
          'featured': false
        },
        {
          'platform': '优云智算',
          'model': 'DeepSeek-V4.1-Flash',
          'plan': 'Lite',
          'qualifier': '',
          'price': '¥99 / 月',
          'unit': '¥65.1316 / 亿',
          'usage': '1.52亿',
          'featured': false
        },
        {
          'platform': '优云智算',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': 'Basic',
          'qualifier': '',
          'price': '¥199 / 月',
          'unit': '¥65.4605 / 亿',
          'usage': '3.04亿',
          'featured': false
        },
        {
          'platform': '优云智算',
          'model': 'DeepSeek-V4.1-Flash',
          'plan': 'Basic',
          'qualifier': '',
          'price': '¥199 / 月',
          'unit': '¥65.4605 / 亿',
          'usage': '3.04亿',
          'featured': false
        },
        {
          'platform': '优云智算',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': 'Pro',
          'qualifier': '',
          'price': '¥499 / 月',
          'unit': '¥65.6579 / 亿',
          'usage': '7.6亿',
          'featured': false
        },
        {
          'platform': '优云智算',
          'model': 'DeepSeek-V4.1-Flash',
          'plan': 'Pro',
          'qualifier': '',
          'price': '¥499 / 月',
          'unit': '¥65.6579 / 亿',
          'usage': '7.6亿',
          'featured': false
        },
        {
          'platform': '百度·千帆',
          'model': 'DeepSeek-V4.1-Flash',
          'plan': 'Max',
          'qualifier': '',
          'price': '¥600 / 月',
          'unit': '¥85.7143 / 亿',
          'usage': '7亿',
          'featured': false
        },
        {
          'platform': '百度·千帆',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': 'Max',
          'qualifier': '',
          'price': '¥600 / 月',
          'unit': '¥85.7143 / 亿',
          'usage': '7亿',
          'featured': false
        },
        {
          'platform': '百度·千帆',
          'model': 'GLM-5.3-Flash',
          'plan': 'Max',
          'qualifier': '',
          'price': '¥600 / 月',
          'unit': '¥85.7143 / 亿',
          'usage': '7亿',
          'featured': false
        },
        {
          'platform': '百度·千帆',
          'model': 'DeepSeek-V4.1-Flash',
          'plan': 'Pro',
          'qualifier': '',
          'price': '¥200 / 月',
          'unit': '¥86.9565 / 亿',
          'usage': '2.3亿',
          'featured': false
        },
        {
          'platform': '百度·千帆',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': 'Pro',
          'qualifier': '',
          'price': '¥200 / 月',
          'unit': '¥86.9565 / 亿',
          'usage': '2.3亿',
          'featured': false
        },
        {
          'platform': '百度·千帆',
          'model': 'GLM-5.3-Flash',
          'plan': 'Pro',
          'qualifier': '',
          'price': '¥200 / 月',
          'unit': '¥86.9565 / 亿',
          'usage': '2.3亿',
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
          'platform': '百度·千帆',
          'model': 'DeepSeek-V4.1-Flash',
          'plan': 'Lite',
          'qualifier': '',
          'price': '¥39 / 月',
          'unit': '¥92.8571 / 亿',
          'usage': '0.42亿',
          'featured': false
        },
        {
          'platform': '百度·千帆',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': 'Lite',
          'qualifier': '',
          'price': '¥39 / 月',
          'unit': '¥92.8571 / 亿',
          'usage': '0.42亿',
          'featured': false
        },
        {
          'platform': '百度·千帆',
          'model': 'GLM-5.3-Flash',
          'plan': 'Lite',
          'qualifier': '',
          'price': '¥39 / 月',
          'unit': '¥92.8571 / 亿',
          'usage': '0.42亿',
          'featured': false
        },
        {
          'platform': '腾讯云',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': 'Pro',
          'qualifier': '',
          'price': '¥299 / 月',
          'unit': '¥93.435 / 亿',
          'usage': '3.2亿',
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
          'platform': 'Kimi',
          'model': 'Kimi-K2.8-Preview',
          'plan': 'Plus',
          'qualifier': '',
          'price': '¥99 / 月',
          'unit': '¥99.7909 / 亿',
          'usage': '0.992亿',
          'featured': true
        },
        {
          'platform': '天翼云 · 旧 Token 套餐',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': 'Token 680M（存量续订）',
          'qualifier': '',
          'price': '¥699 / 月',
          'unit': '¥102.7941 / 亿',
          'usage': '6.8亿',
          'featured': false
        },
        {
          'platform': '天翼云 · 旧 Token 套餐',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': 'Token 380M（存量续订）',
          'qualifier': '',
          'price': '¥399 / 月',
          'unit': '¥105 / 亿',
          'usage': '3.8亿',
          'featured': false
        },
        {
          'platform': '天翼云 · 旧 Token 套餐',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': 'Token 180M（存量续订）',
          'qualifier': '',
          'price': '¥199 / 月',
          'unit': '¥110.5556 / 亿',
          'usage': '1.8亿',
          'featured': false
        },
        {
          'platform': '天翼云 · 旧 Token 套餐',
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
          'unit': '¥111.425 / 亿',
          'usage': '0.35亿',
          'featured': false
        },
        {
          'platform': '天翼云 · 旧 Token 套餐',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': 'Token 25M（存量续订）',
          'qualifier': '',
          'price': '¥29 / 月',
          'unit': '¥116 / 亿',
          'usage': '0.25亿',
          'featured': false
        },
        {
          'platform': '天翼云 · 积分制',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': '100000积分',
          'qualifier': '',
          'price': '¥699 / 月',
          'unit': '¥211.8182 / 亿',
          'usage': '3.3亿',
          'featured': false
        },
        {
          'platform': '天翼云 · 积分制',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': '25000积分',
          'qualifier': '',
          'price': '¥199 / 月',
          'unit': '¥241.2121 / 亿',
          'usage': '0.825亿',
          'featured': false
        },
        {
          'platform': '天翼云 · 积分制',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': '50000积分',
          'qualifier': '',
          'price': '¥399 / 月',
          'unit': '¥241.8182 / 亿',
          'usage': '1.65亿',
          'featured': false
        },
        {
          'platform': '天翼云 · 积分制',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': '10000积分',
          'qualifier': '',
          'price': '¥89 / 月',
          'unit': '¥269.697 / 亿',
          'usage': '0.33亿',
          'featured': false
        },
        {
          'platform': '天翼云 · 积分制',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': '3000积分',
          'qualifier': '',
          'price': '¥29 / 月',
          'unit': '¥292.9293 / 亿',
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
          'platform': 'Codex',
          'model': 'GPT-6.1-Sol',
          'plan': 'Pro $100',
          'qualifier': '',
          'price': '¥680 / 月',
          'unit': '¥6.7831 / 亿',
          'usage': '100.2亿',
          'featured': true
        },
        {
          'platform': 'Codex',
          'model': 'GPT-6.1-Sol',
          'plan': 'Pro $200',
          'qualifier': '',
          'price': '¥1,360 / 月',
          'unit': '¥6.7831 / 亿',
          'usage': '200.5亿',
          'featured': true
        },
        {
          'platform': 'Codex',
          'model': 'GPT-6.1-Sol',
          'plan': 'Pro $500',
          'qualifier': '',
          'price': '¥3,400 / 月',
          'unit': '¥6.7831 / 亿',
          'usage': '501.2亿',
          'featured': true
        },
        {
          'platform': 'Claude',
          'model': 'Claude Opus 5.5',
          'plan': 'Pro',
          'qualifier': '',
          'price': '¥136 / 月',
          'unit': '¥7.3356 / 亿',
          'usage': '18.5亿',
          'featured': true
        },
        {
          'platform': 'Claude',
          'model': 'Claude Opus 5.5',
          'plan': 'Max',
          'qualifier': '',
          'price': '¥680 / 月',
          'unit': '¥7.3356 / 亿',
          'usage': '92.7亿',
          'featured': true
        },
        {
          'platform': 'Claude',
          'model': 'Claude Opus 5.5',
          'plan': 'Ultra',
          'qualifier': '',
          'price': '¥1,360 / 月',
          'unit': '¥7.3356 / 亿',
          'usage': '185.4亿',
          'featured': true
        },
        {
          'platform': 'OpenCode',
          'model': 'GLM-5.3',
          'plan': 'Go',
          'qualifier': '',
          'price': '¥68 / 月',
          'unit': '¥11.4721 / 亿',
          'usage': '5.93亿',
          'featured': true
        },
        {
          'platform': 'Codex',
          'model': 'GPT-6.1-Sol',
          'plan': 'Plus',
          'qualifier': '',
          'price': '¥136 / 月',
          'unit': '¥13.5662 / 亿',
          'usage': '10亿',
          'featured': true
        },
        {
          'platform': 'Codex',
          'model': 'GPT-6.1-Sol',
          'plan': 'Pro $100',
          'qualifier': '[Fast]',
          'price': '¥680 / 月',
          'unit': '¥16.9577 / 亿',
          'usage': '40.1亿',
          'featured': true
        },
        {
          'platform': 'Codex',
          'model': 'GPT-6.1-Sol',
          'plan': 'Pro $200',
          'qualifier': '[Fast]',
          'price': '¥1,360 / 月',
          'unit': '¥16.9577 / 亿',
          'usage': '80.2亿',
          'featured': true
        },
        {
          'platform': 'Codex',
          'model': 'GPT-6.1-Sol',
          'plan': 'Pro $500',
          'qualifier': '[Fast]',
          'price': '¥3,400 / 月',
          'unit': '¥16.9577 / 亿',
          'usage': '200.5亿',
          'featured': true
        },
        {
          'platform': '智谱AI',
          'model': 'GLM-5.3',
          'plan': '新Max',
          'qualifier': '[谷]',
          'price': '¥1,078 / 月',
          'unit': '¥19.9257 / 亿',
          'usage': '54.1亿',
          'featured': true
        },
        {
          'platform': '智谱国际版',
          'model': 'GLM-5.3',
          'plan': '新Max',
          'qualifier': '[谷]',
          'price': '¥1,142.4 / 月',
          'unit': '¥21.116 / 亿',
          'usage': '54.1亿',
          'featured': false
        },
        {
          'platform': 'Kimi',
          'model': 'Kimi-K3',
          'plan': 'Allegretto（老套餐）',
          'qualifier': '[256K]',
          'price': '¥199 / 月',
          'unit': '¥22.1111 / 亿',
          'usage': '9亿',
          'featured': true
        },
        {
          'platform': 'OpenCode',
          'model': 'GLM-5.3',
          'plan': 'Go Teams',
          'qualifier': '',
          'price': '¥136 / 月',
          'unit': '¥22.3846 / 亿',
          'usage': '6.08亿',
          'featured': true
        },
        {
          'platform': 'OpenCode',
          'model': 'GLM-5.3',
          'plan': 'Go Plus',
          'qualifier': '',
          'price': '¥272 / 月',
          'unit': '¥22.9442 / 亿',
          'usage': '11.9亿',
          'featured': true
        },
        {
          'platform': 'Command Code',
          'model': 'GLM-5.3',
          'plan': 'Go',
          'qualifier': '',
          'price': '¥6.8 / 月',
          'unit': '¥22.9442 / 亿',
          'usage': '0.296亿',
          'featured': false
        },
        {
          'platform': '智谱AI',
          'model': 'GLM-5.3',
          'plan': '新Pro',
          'qualifier': '[谷]',
          'price': '¥538 / 月',
          'unit': '¥23.2035 / 亿',
          'usage': '23.2亿',
          'featured': true
        },
        {
          'platform': '智谱国际版',
          'model': 'GLM-5.3',
          'plan': '新Pro',
          'qualifier': '[谷]',
          'price': '¥544 / 月',
          'unit': '¥23.4623 / 亿',
          'usage': '23.2亿',
          'featured': false
        },
        {
          'platform': 'Kimi',
          'model': 'Kimi-K3',
          'plan': 'Allegro（老套餐）',
          'qualifier': '[256K]',
          'price': '¥699 / 月',
          'unit': '¥29.125 / 亿',
          'usage': '24亿',
          'featured': true
        },
        {
          'platform': '智谱AI',
          'model': 'GLM-5.3',
          'plan': '新Lite',
          'qualifier': '[谷]',
          'price': '¥118 / 月',
          'unit': '¥30.5355 / 亿',
          'usage': '3.86亿',
          'featured': true
        },
        {
          'platform': '智谱国际版',
          'model': 'GLM-5.3',
          'plan': '新Lite',
          'qualifier': '[谷]',
          'price': '¥122.4 / 月',
          'unit': '¥31.6741 / 亿',
          'usage': '3.86亿',
          'featured': false
        },
        {
          'platform': 'Command Code',
          'model': 'GLM-5.3',
          'plan': 'GOAT',
          'qualifier': '',
          'price': '¥68 / 月',
          'unit': '¥32.7775 / 亿',
          'usage': '2.07亿',
          'featured': false
        },
        {
          'platform': 'Kimi',
          'model': 'Kimi-K3',
          'plan': 'Allegretto（老套餐）',
          'qualifier': '',
          'price': '¥199 / 月',
          'unit': '¥33.1667 / 亿',
          'usage': '6亿',
          'featured': true
        },
        {
          'platform': 'Codex',
          'model': 'GPT-6.1-Sol',
          'plan': 'Plus',
          'qualifier': '[Fast]',
          'price': '¥136 / 月',
          'unit': '¥33.9155 / 亿',
          'usage': '4.01亿',
          'featured': true
        },
        {
          'platform': '阿里·百炼 Token Plan',
          'model': 'GLM-5.3',
          'plan': 'Pro',
          'qualifier': '',
          'price': '¥312 / 月',
          'unit': '¥37.8846 / 亿',
          'usage': '8.24亿',
          'featured': true
        },
        {
          'platform': '智谱AI',
          'model': 'GLM-5.3',
          'plan': '新Max',
          'qualifier': '[峰]',
          'price': '¥1,078 / 月',
          'unit': '¥39.8514 / 亿',
          'usage': '27.1亿',
          'featured': true
        },
        {
          'platform': 'Codex',
          'model': 'GPT-6-Astra',
          'plan': 'Pro $100',
          'qualifier': '',
          'price': '¥680 / 月',
          'unit': '¥41.1096 / 亿',
          'usage': '16.5亿',
          'featured': true
        },
        {
          'platform': 'Codex',
          'model': 'GPT-6-Astra',
          'plan': 'Pro $200',
          'qualifier': '',
          'price': '¥1,360 / 月',
          'unit': '¥41.1096 / 亿',
          'usage': '33.1亿',
          'featured': true
        },
        {
          'platform': 'Codex',
          'model': 'GPT-6-Astra',
          'plan': 'Pro $500',
          'qualifier': '',
          'price': '¥3,400 / 月',
          'unit': '¥41.1096 / 亿',
          'usage': '82.7亿',
          'featured': true
        },
        {
          'platform': '阿里·百炼 Token Plan',
          'model': 'GLM-5.3',
          'plan': 'Standard',
          'qualifier': '',
          'price': '¥139 / 月',
          'unit': '¥42.1952 / 亿',
          'usage': '3.29亿',
          'featured': true
        },
        {
          'platform': '智谱国际版',
          'model': 'GLM-5.3',
          'plan': '新Max',
          'qualifier': '[峰]',
          'price': '¥1,142.4 / 月',
          'unit': '¥42.2321 / 亿',
          'usage': '27.1亿',
          'featured': false
        },
        {
          'platform': '阿里·百炼 Token Plan',
          'model': 'GLM-5.3',
          'plan': 'Essential',
          'qualifier': '',
          'price': '¥79 / 月',
          'unit': '¥42.6337 / 亿',
          'usage': '1.85亿',
          'featured': true
        },
        {
          'platform': 'Command Code',
          'model': 'Kimi-K3',
          'plan': 'Go',
          'qualifier': '',
          'price': '¥6.8 / 月',
          'unit': '¥43.1651 / 亿',
          'usage': '0.158亿',
          'featured': false
        },
        {
          'platform': 'Kimi',
          'model': 'Kimi-K3',
          'plan': 'Allegro（老套餐）',
          'qualifier': '',
          'price': '¥699 / 月',
          'unit': '¥43.6875 / 亿',
          'usage': '16亿',
          'featured': true
        },
        {
          'platform': '智谱AI',
          'model': 'GLM-5.3',
          'plan': '新Pro',
          'qualifier': '[峰]',
          'price': '¥538 / 月',
          'unit': '¥46.407 / 亿',
          'usage': '11.6亿',
          'featured': true
        },
        {
          'platform': '智谱国际版',
          'model': 'GLM-5.3',
          'plan': '新Pro',
          'qualifier': '[峰]',
          'price': '¥544 / 月',
          'unit': '¥46.9245 / 亿',
          'usage': '11.6亿',
          'featured': false
        },
        {
          'platform': '阿里·百炼 Token Plan',
          'model': 'GLM-5.3',
          'plan': 'Lite',
          'qualifier': '',
          'price': '¥39 / 月',
          'unit': '¥47.3557 / 亿',
          'usage': '0.824亿',
          'featured': true
        },
        {
          'platform': 'Codex',
          'model': 'GPT-6.1-Sol',
          'plan': 'Pro $500',
          'qualifier': '[Ultrafast]',
          'price': '¥3,400 / 月',
          'unit': '¥54.2647 / 亿',
          'usage': '62.7亿',
          'featured': true
        },
        {
          'platform': 'Command Code',
          'model': 'GLM-5.3',
          'plan': 'Pro',
          'qualifier': '',
          'price': '¥136 / 月',
          'unit': '¥57.3606 / 亿',
          'usage': '2.37亿',
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
          'unit': '¥61.0709 / 亿',
          'usage': '1.93亿',
          'featured': true
        },
        {
          'platform': 'Kimi',
          'model': 'Kimi-K3',
          'plan': 'Pro',
          'qualifier': '[256K]',
          'price': '¥199 / 月',
          'unit': '¥61.302 / 亿',
          'usage': '3.25亿',
          'featured': true
        },
        {
          'platform': '智谱国际版',
          'model': 'GLM-5.3',
          'plan': '新Lite',
          'qualifier': '[峰]',
          'price': '¥122.4 / 月',
          'unit': '¥63.3481 / 亿',
          'usage': '1.93亿',
          'featured': false
        },
        {
          'platform': 'Kimi',
          'model': 'Kimi-K3',
          'plan': 'Max',
          'qualifier': '[256K]',
          'price': '¥699 / 月',
          'unit': '¥67.2897 / 亿',
          'usage': '10.4亿',
          'featured': true
        },
        {
          'platform': 'Kimi',
          'model': 'Kimi-K3',
          'plan': 'Ultra',
          'qualifier': '[256K]',
          'price': '¥1,399 / 月',
          'unit': '¥67.3379 / 亿',
          'usage': '20.8亿',
          'featured': true
        },
        {
          'platform': 'Ollama',
          'model': 'GLM-5.3',
          'plan': 'Max',
          'qualifier': '',
          'price': '¥680 / 月',
          'unit': '¥76.4807 / 亿',
          'usage': '8.89亿',
          'featured': false
        },
        {
          'platform': 'Ollama',
          'model': 'GLM-5.3',
          'plan': 'Pro',
          'qualifier': '',
          'price': '¥136 / 月',
          'unit': '¥76.4807 / 亿',
          'usage': '1.78亿',
          'featured': false
        },
        {
          'platform': 'Codex',
          'model': 'GPT-6-Astra',
          'plan': 'Plus',
          'qualifier': '',
          'price': '¥136 / 月',
          'unit': '¥82.2193 / 亿',
          'usage': '1.65亿',
          'featured': true
        },
        {
          'platform': 'GitHub',
          'model': 'GPT-6.1-Sol',
          'plan': 'Max',
          'qualifier': '[≤272K]',
          'price': '¥680 / 月',
          'unit': '¥82.9685 / 亿',
          'usage': '8.2亿',
          'featured': false
        },
        {
          'platform': '百度·千帆',
          'model': 'GLM-5.3',
          'plan': 'Max',
          'qualifier': '',
          'price': '¥600 / 月',
          'unit': '¥85.7143 / 亿',
          'usage': '7亿',
          'featured': false
        },
        {
          'platform': '百度·千帆',
          'model': 'GLM-5.3',
          'plan': 'Pro',
          'qualifier': '',
          'price': '¥200 / 月',
          'unit': '¥86.9565 / 亿',
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
          'unit': '¥90.7955 / 亿',
          'usage': '8.8亿',
          'featured': false
        },
        {
          'platform': 'GitHub',
          'model': 'GPT-6.1-Sol',
          'plan': 'Pro+',
          'qualifier': '[≤272K]',
          'price': '¥265.2 / 月',
          'unit': '¥92.4506 / 亿',
          'usage': '2.87亿',
          'featured': false
        },
        {
          'platform': '百度·千帆',
          'model': 'GLM-5.3',
          'plan': 'Lite',
          'qualifier': '',
          'price': '¥39 / 月',
          'unit': '¥92.8571 / 亿',
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
          'platform': 'Codex',
          'model': 'GPT-6-Astra',
          'plan': 'Pro $100',
          'qualifier': '[Fast]',
          'price': '¥680 / 月',
          'unit': '¥102.7741 / 亿',
          'usage': '6.62亿',
          'featured': true
        },
        {
          'platform': 'Codex',
          'model': 'GPT-6-Astra',
          'plan': 'Pro $200',
          'qualifier': '[Fast]',
          'price': '¥1,360 / 月',
          'unit': '¥102.7741 / 亿',
          'usage': '13.2亿',
          'featured': true
        },
        {
          'platform': 'Codex',
          'model': 'GPT-6-Astra',
          'plan': 'Pro $500',
          'qualifier': '[Fast]',
          'price': '¥3,400 / 月',
          'unit': '¥102.7741 / 亿',
          'usage': '33.1亿',
          'featured': true
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
          'unit': '¥114.6154 / 亿',
          'usage': '1.3亿',
          'featured': false
        },
        {
          'platform': 'Ollama',
          'model': 'Kimi-K3',
          'plan': 'Pro',
          'qualifier': '',
          'price': '¥136 / 月',
          'unit': '¥115.107 / 亿',
          'usage': '1.18亿',
          'featured': false
        },
        {
          'platform': 'Ollama',
          'model': 'Kimi-K3',
          'plan': 'Max',
          'qualifier': '',
          'price': '¥680 / 月',
          'unit': '¥115.107 / 亿',
          'usage': '5.91亿',
          'featured': false
        },
        {
          'platform': 'Kimi',
          'model': 'Kimi-K3',
          'plan': 'Moderato（老套餐）',
          'qualifier': '[256K]',
          'price': '¥99 / 月',
          'unit': '¥117.8571 / 亿',
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
          'platform': 'Kimi',
          'model': 'Kimi-K3',
          'plan': 'Pro',
          'qualifier': '',
          'price': '¥199 / 月',
          'unit': '¥122.604 / 亿',
          'usage': '1.62亿',
          'featured': true
        },
        {
          'platform': '字节·方舟 Coding Plan',
          'model': 'Kimi-K3',
          'plan': 'Lite',
          'qualifier': '',
          'price': '¥40 / 月',
          'unit': '¥133.3333 / 亿',
          'usage': '0.3亿',
          'featured': true
        },
        {
          'platform': '字节·方舟 Coding Plan',
          'model': 'Kimi-K3',
          'plan': 'Pro',
          'qualifier': '',
          'price': '¥200 / 月',
          'unit': '¥133.3333 / 亿',
          'usage': '1.5亿',
          'featured': true
        },
        {
          'platform': '腾讯云',
          'model': 'GLM-5.3',
          'plan': 'Standard',
          'qualifier': '',
          'price': '¥99 / 月',
          'unit': '¥133.5675 / 亿',
          'usage': '0.741亿',
          'featured': false
        },
        {
          'platform': '腾讯云',
          'model': 'GLM-5.3',
          'plan': 'Pro',
          'qualifier': '',
          'price': '¥299 / 月',
          'unit': '¥133.5675 / 亿',
          'usage': '2.24亿',
          'featured': false
        },
        {
          'platform': '腾讯云',
          'model': 'GLM-5.3',
          'plan': 'Lite',
          'qualifier': '',
          'price': '¥39 / 月',
          'unit': '¥133.5675 / 亿',
          'usage': '0.292亿',
          'featured': false
        },
        {
          'platform': '腾讯云',
          'model': 'GLM-5.3',
          'plan': 'Max',
          'qualifier': '',
          'price': '¥599 / 月',
          'unit': '¥133.5675 / 亿',
          'usage': '4.48亿',
          'featured': false
        },
        {
          'platform': 'Kimi',
          'model': 'Kimi-K3',
          'plan': 'Max',
          'qualifier': '',
          'price': '¥699 / 月',
          'unit': '¥134.5795 / 亿',
          'usage': '5.19亿',
          'featured': true
        },
        {
          'platform': 'Kimi',
          'model': 'Kimi-K3',
          'plan': 'Ultra',
          'qualifier': '',
          'price': '¥1,399 / 月',
          'unit': '¥134.6758 / 亿',
          'usage': '10.4亿',
          'featured': true
        },
        {
          'platform': 'Kimi',
          'model': 'Kimi-K3',
          'plan': 'Plus',
          'qualifier': '[256K]',
          'price': '¥99 / 月',
          'unit': '¥152.4849 / 亿',
          'usage': '0.649亿',
          'featured': true
        },
        {
          'platform': 'Command Code',
          'model': 'GLM-5.3',
          'plan': 'Max 10×',
          'qualifier': '',
          'price': '¥680 / 月',
          'unit': '¥152.9615 / 亿',
          'usage': '4.45亿',
          'featured': false
        },
        {
          'platform': 'Command Code',
          'model': 'GLM-5.3',
          'plan': 'Max 20×',
          'qualifier': '',
          'price': '¥1,360 / 月',
          'unit': '¥152.9615 / 亿',
          'usage': '8.89亿',
          'featured': false
        },
        {
          'platform': '超算 · Token Plan',
          'model': 'GLM-5.3',
          'plan': '旗舰版',
          'qualifier': '',
          'price': '¥899 / 月',
          'unit': '¥155.9249 / 亿',
          'usage': '5.77亿',
          'featured': false
        },
        {
          'platform': '超算 · Token Plan',
          'model': 'GLM-5.3',
          'plan': '基础版',
          'qualifier': '',
          'price': '¥30 / 月',
          'unit': '¥156.0983 / 亿',
          'usage': '0.192亿',
          'featured': false
        },
        {
          'platform': 'GitHub',
          'model': 'GPT-6.1-Sol',
          'plan': 'Max',
          'qualifier': '[>272K]',
          'price': '¥680 / 月',
          'unit': '¥157.437 / 亿',
          'usage': '4.32亿',
          'featured': false
        },
        {
          'platform': '超算 · Token Plan',
          'model': 'GLM-5.3',
          'plan': '高级版',
          'qualifier': '',
          'price': '¥310 / 月',
          'unit': '¥161.3016 / 亿',
          'usage': '1.92亿',
          'featured': false
        },
        {
          'platform': 'Command Code',
          'model': 'GPT-6.1-Sol',
          'plan': 'Max 10×',
          'qualifier': '',
          'price': '¥680 / 月',
          'unit': '¥165.937 / 亿',
          'usage': '4.1亿',
          'featured': false
        },
        {
          'platform': 'Command Code',
          'model': 'GPT-6.1-Sol',
          'plan': 'Max 20×',
          'qualifier': '',
          'price': '¥1,360 / 月',
          'unit': '¥165.937 / 亿',
          'usage': '8.2亿',
          'featured': false
        },
        {
          'platform': 'TRAE 国际版',
          'model': 'GPT-6.1-Sol',
          'plan': 'Pro',
          'qualifier': '[≤272K]',
          'price': '¥136 / 月',
          'unit': '¥165.937 / 亿',
          'usage': '0.82亿',
          'featured': false
        },
        {
          'platform': 'TRAE 国际版',
          'model': 'GPT-6.1-Sol',
          'plan': 'Ultra',
          'qualifier': '[≤272K]',
          'price': '¥1,360 / 月',
          'unit': '¥165.937 / 亿',
          'usage': '8.2亿',
          'featured': false
        },
        {
          'platform': 'GitHub',
          'model': 'Claude Opus 5.5',
          'plan': 'Max',
          'qualifier': '',
          'price': '¥680 / 月',
          'unit': '¥165.937 / 亿',
          'usage': '4.1亿',
          'featured': false
        },
        {
          'platform': 'TRAE 国际版',
          'model': 'GPT-6.1-Sol',
          'plan': 'Lite',
          'qualifier': '[≤272K]',
          'price': '¥54.4 / 月',
          'unit': '¥165.937 / 亿',
          'usage': '0.328亿',
          'featured': false
        },
        {
          'platform': 'TRAE 国际版',
          'model': 'GPT-6.1-Sol',
          'plan': 'Pro+',
          'qualifier': '[≤272K]',
          'price': '¥408 / 月',
          'unit': '¥165.937 / 亿',
          'usage': '2.46亿',
          'featured': false
        },
        {
          'platform': '超算 · Token Plan',
          'model': 'GLM-5.3',
          'plan': '标准版',
          'qualifier': '',
          'price': '¥130 / 月',
          'unit': '¥169.1065 / 亿',
          'usage': '0.769亿',
          'featured': false
        },
        {
          'platform': 'Command Code',
          'model': 'Kimi-K3',
          'plan': 'GOAT',
          'qualifier': '',
          'price': '¥68 / 月',
          'unit': '¥172.6605 / 亿',
          'usage': '0.394亿',
          'featured': false
        },
        {
          'platform': 'GitHub',
          'model': 'Kimi-K3',
          'plan': 'Max',
          'qualifier': '',
          'price': '¥680 / 月',
          'unit': '¥172.6605 / 亿',
          'usage': '3.94亿',
          'featured': false
        },
        {
          'platform': 'GitHub',
          'model': 'GPT-6.1-Sol',
          'plan': 'Pro+',
          'qualifier': '[>272K]',
          'price': '¥265.2 / 月',
          'unit': '¥175.4298 / 亿',
          'usage': '1.51亿',
          'featured': false
        },
        {
          'platform': 'GitHub',
          'model': 'Claude Opus 5.5',
          'plan': 'Pro+',
          'qualifier': '',
          'price': '¥265.2 / 月',
          'unit': '¥184.9012 / 亿',
          'usage': '1.43亿',
          'featured': false
        },
        {
          'platform': 'GitHub',
          'model': 'Kimi-K3',
          'plan': 'Pro+',
          'qualifier': '',
          'price': '¥265.2 / 月',
          'unit': '¥192.3931 / 亿',
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
          'platform': '字节·方舟 Agent Plan',
          'model': 'Kimi-K3',
          'plan': 'Medium',
          'qualifier': '',
          'price': '¥200 / 月',
          'unit': '¥200 / 亿',
          'usage': '1亿',
          'featured': false
        },
        {
          'platform': '字节·方舟 Agent Plan',
          'model': 'Kimi-K3',
          'plan': 'Large',
          'qualifier': '',
          'price': '¥500 / 月',
          'unit': '¥200 / 亿',
          'usage': '2.5亿',
          'featured': false
        },
        {
          'platform': '字节·方舟 Agent Plan',
          'model': 'Kimi-K3',
          'plan': 'Max',
          'qualifier': '',
          'price': '¥1,000 / 月',
          'unit': '¥200 / 亿',
          'usage': '5亿',
          'featured': false
        },
        {
          'platform': 'Codex',
          'model': 'GPT-6-Astra',
          'plan': 'Plus',
          'qualifier': '[Fast]',
          'price': '¥136 / 月',
          'unit': '¥205.5482 / 亿',
          'usage': '0.662亿',
          'featured': true
        },
        {
          'platform': 'OpenCode',
          'model': 'Kimi-K3',
          'plan': 'Go',
          'qualifier': '',
          'price': '¥68 / 月',
          'unit': '¥230.214 / 亿',
          'usage': '0.295亿',
          'featured': true
        },
        {
          'platform': 'OpenCode',
          'model': 'Kimi-K3',
          'plan': 'Go Plus',
          'qualifier': '',
          'price': '¥272 / 月',
          'unit': '¥230.214 / 亿',
          'usage': '1.18亿',
          'featured': true
        },
        {
          'platform': 'Command Code',
          'model': 'Kimi-K3',
          'plan': 'Pro',
          'qualifier': '',
          'price': '¥136 / 月',
          'unit': '¥230.214 / 亿',
          'usage': '0.591亿',
          'featured': false
        },
        {
          'platform': 'Command Code',
          'model': 'Kimi-K3',
          'plan': 'Max 10×',
          'qualifier': '',
          'price': '¥680 / 月',
          'unit': '¥230.214 / 亿',
          'usage': '2.95亿',
          'featured': false
        },
        {
          'platform': 'Command Code',
          'model': 'Kimi-K3',
          'plan': 'Max 20×',
          'qualifier': '',
          'price': '¥1,360 / 月',
          'unit': '¥230.214 / 亿',
          'usage': '5.91亿',
          'featured': false
        },
        {
          'platform': 'GitHub',
          'model': 'Kimi-K3',
          'plan': 'Pro',
          'qualifier': '',
          'price': '¥68 / 月',
          'unit': '¥230.214 / 亿',
          'usage': '0.295亿',
          'featured': false
        },
        {
          'platform': '超算 · Token Plan',
          'model': 'Kimi-K3',
          'plan': '旗舰版',
          'qualifier': '',
          'price': '¥899 / 月',
          'unit': '¥246.3706 / 亿',
          'usage': '3.65亿',
          'featured': false
        },
        {
          'platform': '超算 · Token Plan',
          'model': 'Kimi-K3',
          'plan': '基础版',
          'qualifier': '',
          'price': '¥30 / 月',
          'unit': '¥246.6446 / 亿',
          'usage': '0.122亿',
          'featured': false
        },
        {
          'platform': '腾讯云',
          'model': 'Kimi-K3',
          'plan': 'Lite',
          'qualifier': '',
          'price': '¥39 / 月',
          'unit': '¥253.9125 / 亿',
          'usage': '0.154亿',
          'featured': false
        },
        {
          'platform': '腾讯云',
          'model': 'Kimi-K3',
          'plan': 'Standard',
          'qualifier': '',
          'price': '¥99 / 月',
          'unit': '¥253.9125 / 亿',
          'usage': '0.39亿',
          'featured': false
        },
        {
          'platform': '腾讯云',
          'model': 'Kimi-K3',
          'plan': 'Max',
          'qualifier': '',
          'price': '¥599 / 月',
          'unit': '¥253.9125 / 亿',
          'usage': '2.36亿',
          'featured': false
        },
        {
          'platform': '腾讯云',
          'model': 'Kimi-K3',
          'plan': 'Pro',
          'qualifier': '',
          'price': '¥299 / 月',
          'unit': '¥253.9125 / 亿',
          'usage': '1.18亿',
          'featured': false
        },
        {
          'platform': '超算 · Token Plan',
          'model': 'Kimi-K3',
          'plan': '高级版',
          'qualifier': '',
          'price': '¥310 / 月',
          'unit': '¥254.8661 / 亿',
          'usage': '1.22亿',
          'featured': false
        },
        {
          'platform': '超算 · Token Plan',
          'model': 'Kimi-K3',
          'plan': '标准版',
          'qualifier': '',
          'price': '¥130 / 月',
          'unit': '¥267.1984 / 亿',
          'usage': '0.487亿',
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
          'platform': 'Kimi',
          'model': 'Kimi-K3',
          'plan': 'Plus',
          'qualifier': '',
          'price': '¥99 / 月',
          'unit': '¥304.9698 / 亿',
          'usage': '0.325亿',
          'featured': true
        },
        {
          'platform': 'TRAE 国际版',
          'model': 'GPT-6.1-Sol',
          'plan': 'Lite',
          'qualifier': '[>272K]',
          'price': '¥54.4 / 月',
          'unit': '¥314.874 / 亿',
          'usage': '0.173亿',
          'featured': false
        },
        {
          'platform': 'TRAE 国际版',
          'model': 'GPT-6.1-Sol',
          'plan': 'Pro',
          'qualifier': '[>272K]',
          'price': '¥136 / 月',
          'unit': '¥314.874 / 亿',
          'usage': '0.432亿',
          'featured': false
        },
        {
          'platform': 'TRAE 国际版',
          'model': 'GPT-6.1-Sol',
          'plan': 'Pro+',
          'qualifier': '[>272K]',
          'price': '¥408 / 月',
          'unit': '¥314.874 / 亿',
          'usage': '1.3亿',
          'featured': false
        },
        {
          'platform': 'TRAE 国际版',
          'model': 'GPT-6.1-Sol',
          'plan': 'Ultra',
          'qualifier': '[>272K]',
          'price': '¥1,360 / 月',
          'unit': '¥314.874 / 亿',
          'usage': '4.32亿',
          'featured': false
        },
        {
          'platform': 'Codex',
          'model': 'GPT-6-Astra',
          'plan': 'Pro $500',
          'qualifier': '[Ultrafast]',
          'price': '¥3,400 / 月',
          'unit': '¥328.8771 / 亿',
          'usage': '10.3亿',
          'featured': true
        },
        {
          'platform': 'Antigravity',
          'model': 'Claude Opus 5.5',
          'plan': 'Pro',
          'qualifier': '',
          'price': '¥135.93 / 月',
          'unit': '¥331.7081 / 亿',
          'usage': '0.41亿',
          'featured': false
        },
        {
          'platform': 'Antigravity',
          'model': 'Claude Opus 5.5',
          'plan': 'Ultra 5×',
          'qualifier': '',
          'price': '¥679.93 / 月',
          'unit': '¥331.8408 / 亿',
          'usage': '2.05亿',
          'featured': false
        },
        {
          'platform': 'Command Code',
          'model': 'Claude Opus 5.5',
          'plan': 'Max 10×',
          'qualifier': '',
          'price': '¥680 / 月',
          'unit': '¥331.874 / 亿',
          'usage': '2.05亿',
          'featured': false
        },
        {
          'platform': 'Command Code',
          'model': 'Claude Opus 5.5',
          'plan': 'Max 20×',
          'qualifier': '',
          'price': '¥1,360 / 月',
          'unit': '¥331.874 / 亿',
          'usage': '4.1亿',
          'featured': false
        },
        {
          'platform': 'OpenCode',
          'model': 'Kimi-K3',
          'plan': 'Go Teams',
          'qualifier': '',
          'price': '¥136 / 月',
          'unit': '¥345.321 / 亿',
          'usage': '0.394亿',
          'featured': true
        },
        {
          'platform': 'TRAE 国际版',
          'model': 'Kimi-K3',
          'plan': 'Lite',
          'qualifier': '',
          'price': '¥54.4 / 月',
          'unit': '¥345.321 / 亿',
          'usage': '0.158亿',
          'featured': false
        },
        {
          'platform': 'TRAE 国际版',
          'model': 'Kimi-K3',
          'plan': 'Pro',
          'qualifier': '',
          'price': '¥136 / 月',
          'unit': '¥345.321 / 亿',
          'usage': '0.394亿',
          'featured': false
        },
        {
          'platform': 'TRAE 国际版',
          'model': 'Kimi-K3',
          'plan': 'Pro+',
          'qualifier': '',
          'price': '¥408 / 月',
          'unit': '¥345.321 / 亿',
          'usage': '1.18亿',
          'featured': false
        },
        {
          'platform': 'TRAE 国际版',
          'model': 'Kimi-K3',
          'plan': 'Ultra',
          'qualifier': '',
          'price': '¥1,360 / 月',
          'unit': '¥345.321 / 亿',
          'usage': '3.94亿',
          'featured': false
        },
        {
          'platform': 'Antigravity',
          'model': 'Claude Opus 5.5',
          'plan': 'Ultra 20×',
          'qualifier': '',
          'price': '¥1,359.93 / 月',
          'unit': '¥395.0683 / 亿',
          'usage': '3.44亿',
          'featured': false
        },
        {
          'platform': 'GitHub',
          'model': 'GPT-6-Astra',
          'plan': 'Max',
          'qualifier': '[≤272K]',
          'price': '¥680 / 月',
          'unit': '¥575.535 / 亿',
          'usage': '1.18亿',
          'featured': false
        },
        {
          'platform': 'GitHub',
          'model': 'GPT-6-Astra',
          'plan': 'Pro+',
          'qualifier': '[≤272K]',
          'price': '¥265.2 / 月',
          'unit': '¥641.3104 / 亿',
          'usage': '0.414亿',
          'featured': false
        },
        {
          'platform': 'GitHub',
          'model': 'GPT-6-Astra',
          'plan': 'Max',
          'qualifier': '[>272K]',
          'price': '¥680 / 月',
          'unit': '¥1,108.57 / 亿',
          'usage': '0.613亿',
          'featured': false
        },
        {
          'platform': 'Command Code',
          'model': 'GPT-6-Astra',
          'plan': 'Max 10×',
          'qualifier': '',
          'price': '¥680 / 月',
          'unit': '¥1,151.07 / 亿',
          'usage': '0.591亿',
          'featured': false
        },
        {
          'platform': 'Command Code',
          'model': 'GPT-6-Astra',
          'plan': 'Max 20×',
          'qualifier': '',
          'price': '¥1,360 / 月',
          'unit': '¥1,151.07 / 亿',
          'usage': '1.18亿',
          'featured': false
        },
        {
          'platform': 'TRAE 国际版',
          'model': 'GPT-6-Astra',
          'plan': 'Lite',
          'qualifier': '[≤272K]',
          'price': '¥54.4 / 月',
          'unit': '¥1,151.07 / 亿',
          'usage': '0.047亿',
          'featured': false
        },
        {
          'platform': 'TRAE 国际版',
          'model': 'GPT-6-Astra',
          'plan': 'Pro',
          'qualifier': '[≤272K]',
          'price': '¥136 / 月',
          'unit': '¥1,151.07 / 亿',
          'usage': '0.118亿',
          'featured': false
        },
        {
          'platform': 'TRAE 国际版',
          'model': 'GPT-6-Astra',
          'plan': 'Pro+',
          'qualifier': '[≤272K]',
          'price': '¥408 / 月',
          'unit': '¥1,151.07 / 亿',
          'usage': '0.354亿',
          'featured': false
        },
        {
          'platform': 'TRAE 国际版',
          'model': 'GPT-6-Astra',
          'plan': 'Ultra',
          'qualifier': '[≤272K]',
          'price': '¥1,360 / 月',
          'unit': '¥1,151.07 / 亿',
          'usage': '1.18亿',
          'featured': false
        },
        {
          'platform': 'GitHub',
          'model': 'GPT-6-Astra',
          'plan': 'Pro+',
          'qualifier': '[>272K]',
          'price': '¥265.2 / 月',
          'unit': '¥1,235.2637 / 亿',
          'usage': '0.215亿',
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
          'plan': 'Ultra',
          'qualifier': '[>272K]',
          'price': '¥1,360 / 月',
          'unit': '¥2,217.14 / 亿',
          'usage': '0.613亿',
          'featured': false
        }
      ]
    }
  ],
  'plans': [
    {
      'slug': 'volcengine-coding-lite',
      'name': 'Lite',
      'platform': '字节·方舟 Coding Plan',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'codingplan',
      'fee': 40,
      'currency': '¥',
      'feeCny': 40,
      'dm': 1,
      'models': [
        {
          'm': 'DeepSeek-V4-Flash-0731',
          't': '',
          'u': 0.06666666666666667,
          'q': [
            null,
            null,
            600,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'Doubao-Seed-2.1-Pro',
          't': '',
          'u': 0.3333333333333333,
          'q': [
            null,
            null,
            120,
            null
          ],
          's': 'c',
          'w': null,
          'b': '豆包',
          'p': null
        },
        {
          'm': 'Doubao-Seed-2.1-Lite',
          't': '',
          'u': 0.06666666666666667,
          'q': [
            null,
            null,
            600,
            null
          ],
          's': 'c',
          'w': null,
          'b': '豆包',
          'p': null
        },
        {
          'm': 'Doubao-Seed-2.0-Mini',
          't': '',
          'u': 0.03333333333333333,
          'q': [
            null,
            null,
            1200,
            null
          ],
          's': 'c',
          'w': null,
          'b': '豆包',
          'p': null
        },
        {
          'm': 'Doubao-Seed-Evolving',
          't': '',
          'u': 0.3333333333333333,
          'q': [
            null,
            null,
            120,
            null
          ],
          's': 'c',
          'w': null,
          'b': '豆包',
          'p': null
        },
        {
          'm': 'Kimi-K2.8-Preview',
          't': '',
          'u': 0.64,
          'q': [
            null,
            null,
            62.5,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': null
        },
        {
          'm': 'Kimi-K3',
          't': '',
          'u': 1.3333333333333333,
          'q': [
            null,
            null,
            30,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': null
        },
        {
          'm': 'GLM-5.3',
          't': '',
          'u': 0.6000000000000001,
          'q': [
            null,
            null,
            66.7,
            null
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'GLM-5.3-Flash',
          't': '',
          'u': 0.06666666666666667,
          'q': [
            null,
            null,
            600,
            null
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'DeepSeek-V4-Pro-0813',
          't': '',
          'u': 0.7333333333333333,
          'q': [
            null,
            null,
            54.5,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4.1-Flash-1017',
          't': '',
          'u': 0.11666666666666667,
          'q': [
            null,
            null,
            342.9,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4.1-Flash-1017',
          't': '[Economy]',
          'u': 0.13333333333333333,
          'q': [
            null,
            null,
            300,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'Kimi-K3.1-Pro',
          't': '',
          'u': 0.4666666666666667,
          'q': [
            null,
            null,
            85.7,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': null
        }
      ]
    },
    {
      'slug': 'volcengine-coding-pro',
      'name': 'Pro',
      'platform': '字节·方舟 Coding Plan',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'codingplan',
      'fee': 200,
      'currency': '¥',
      'feeCny': 200,
      'dm': 1,
      'models': [
        {
          'm': 'DeepSeek-V4-Flash-0731',
          't': '',
          'u': 0.06666666666666667,
          'q': [
            null,
            null,
            3000,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'Doubao-Seed-2.1-Pro',
          't': '',
          'u': 0.3333333333333333,
          'q': [
            null,
            null,
            600,
            null
          ],
          's': 'c',
          'w': null,
          'b': '豆包',
          'p': null
        },
        {
          'm': 'Doubao-Seed-2.1-Lite',
          't': '',
          'u': 0.06666666666666667,
          'q': [
            null,
            null,
            3000,
            null
          ],
          's': 'c',
          'w': null,
          'b': '豆包',
          'p': null
        },
        {
          'm': 'Doubao-Seed-2.0-Mini',
          't': '',
          'u': 0.03333333333333333,
          'q': [
            null,
            null,
            6000,
            null
          ],
          's': 'c',
          'w': null,
          'b': '豆包',
          'p': null
        },
        {
          'm': 'Doubao-Seed-Evolving',
          't': '',
          'u': 0.3333333333333333,
          'q': [
            null,
            null,
            600,
            null
          ],
          's': 'c',
          'w': null,
          'b': '豆包',
          'p': null
        },
        {
          'm': 'Kimi-K2.8-Preview',
          't': '',
          'u': 0.64,
          'q': [
            null,
            null,
            312.5,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': null
        },
        {
          'm': 'Kimi-K3',
          't': '',
          'u': 1.3333333333333333,
          'q': [
            null,
            null,
            150,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': null
        },
        {
          'm': 'GLM-5.3',
          't': '',
          'u': 0.6000000000000001,
          'q': [
            null,
            null,
            333.3,
            null
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'GLM-5.3-Flash',
          't': '',
          'u': 0.06666666666666667,
          'q': [
            null,
            null,
            3000,
            null
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'DeepSeek-V4-Pro-0813',
          't': '',
          'u': 0.7333333333333333,
          'q': [
            null,
            null,
            272.7,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4.1-Flash-1017',
          't': '',
          'u': 0.11666666666666667,
          'q': [
            null,
            null,
            1714.3,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4.1-Flash-1017',
          't': '[Economy]',
          'u': 0.13333333333333333,
          'q': [
            null,
            null,
            1500,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'Kimi-K3.1-Pro',
          't': '',
          'u': 0.4666666666666667,
          'q': [
            null,
            null,
            428.6,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': null
        }
      ]
    },
    {
      'slug': 'deepseek-official-api',
      'name': '按量 API',
      'platform': 'DeepSeek',
      'status': 'open',
      'billing': 'payg',
      'origin': 'codingplan',
      'fee': null,
      'currency': '¥',
      'feeCny': null,
      'dm': 1,
      'models': [
        {
          'm': 'DeepSeek-V4.1-Flash-1017',
          't': '[谷]',
          'u': 0.08865500000000005,
          'q': [
            null,
            null,
            null,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': [
            1,
            0.02,
            4
          ]
        },
        {
          'm': 'DeepSeek-V4.1-Flash-1017',
          't': '[峰]',
          'u': 0.1773100000000001,
          'q': [
            null,
            null,
            null,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': [
            2,
            0.04,
            8
          ]
        },
        {
          'm': 'DeepSeek-V4-Pro-0813',
          't': '[谷]',
          'u': 0.43316250000000023,
          'q': [
            null,
            null,
            null,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': [
            4.5,
            0.15,
            13.5
          ]
        },
        {
          'm': 'DeepSeek-V4-Pro-0813',
          't': '[峰]',
          'u': 0.8663250000000005,
          'q': [
            null,
            null,
            null,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': [
            9,
            0.3,
            27
          ]
        }
      ]
    },
    {
      'slug': 'kimi-plus-2026',
      'name': 'Plus',
      'platform': 'Kimi',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'codingplan',
      'fee': 99,
      'currency': '¥',
      'feeCny': 99,
      'dm': 1,
      'models': [
        {
          'm': 'Kimi-K3.1-Pro',
          't': '[256K]',
          'u': 2.5922436177516412,
          'q': [
            3.3,
            6.3,
            38.2,
            69.5
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': null
        },
        {
          'm': 'Kimi-K2.8-Preview',
          't': '',
          'u': 0.99790923191138,
          'q': [
            9.2,
            17.6,
            99.2,
            168.7
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': null
        },
        {
          'm': 'Kimi-K3',
          't': '',
          'u': 0.5699,
          'q': [
            28.1,
            50.3,
            173.7,
            222.2
          ],
          's': 'r',
          'w': 'measured',
          'b': 'Kimi',
          'p': [
            20.4,
            2.04,
            102
          ],
          'd': '2026-10-27'
        },
        {
          'm': 'Kimi-K3',
          't': '[256K]',
          'u': 1.52484918691273,
          'q': [
            null,
            null,
            64.9,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': null
        },
        {
          'm': 'Kimi K2.7 Code (v2)',
          't': '',
          'u': 0.6726,
          'q': [
            37.1,
            61.2,
            147.2,
            168.2
          ],
          's': 'r',
          'w': 'measured',
          'b': 'Kimi',
          'p': [
            6.46,
            1.292,
            27.2
          ],
          'd': '2026-08-20'
        }
      ]
    },
    {
      'slug': 'kimi-pro-2026',
      'name': 'Pro',
      'platform': 'Kimi',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'codingplan',
      'fee': 199,
      'currency': '¥',
      'feeCny': 199,
      'dm': 1,
      'models': [
        {
          'm': 'Kimi-K3.1-Pro',
          't': '',
          'u': 1.0421343028940941,
          'q': [
            null,
            null,
            191,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': null
        },
        {
          'm': 'Kimi-K3.1-Pro',
          't': '[高速]',
          'u': 2.0842686057881883,
          'q': [
            null,
            null,
            95.5,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': null
        },
        {
          'm': 'Kimi-K2.8-Preview',
          't': '',
          'u': 0.40117967101083757,
          'q': [
            46,
            88,
            496,
            843.5
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': null
        },
        {
          'm': 'Kimi-K3',
          't': '',
          'u': 0.2296,
          'q': [
            140.2,
            250.9,
            866.9,
            1108.8
          ],
          's': 'r',
          'w': 'measured',
          'b': 'Kimi',
          'p': [
            20.4,
            2.04,
            102
          ],
          'd': '2026-10-27'
        },
        {
          'm': 'Kimi-K3',
          't': '[256K]',
          'u': 0.6130201781729965,
          'q': [
            null,
            null,
            324.6,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': null
        },
        {
          'm': 'Kimi-K2.7-Code-HighSpeed',
          't': '',
          'u': 2.4070780260650255,
          'q': [
            null,
            null,
            82.7,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': null
        },
        {
          'm': 'Kimi K2.7 Code (v2)',
          't': '',
          'u': 0.2708,
          'q': [
            185.2,
            305.4,
            734.8,
            839.8
          ],
          's': 'r',
          'w': 'measured',
          'b': 'Kimi',
          'p': [
            6.46,
            1.292,
            27.2
          ],
          'd': '2026-08-20'
        }
      ]
    },
    {
      'slug': 'kimi-max-2026',
      'name': 'Max',
      'platform': 'Kimi',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'codingplan',
      'fee': 699,
      'currency': '¥',
      'feeCny': 699,
      'dm': 1,
      'models': [
        {
          'm': 'Kimi-K3.1-Pro',
          't': '',
          'u': 1.1439256873790387,
          'q': [
            null,
            null,
            611.1,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': null
        },
        {
          'm': 'Kimi-K3.1-Pro',
          't': '[高速]',
          'u': 2.2878513747580773,
          'q': [
            null,
            null,
            305.5,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': null
        },
        {
          'm': 'Kimi-K2.8-Preview',
          't': '',
          'u': 0.4403652481730143,
          'q': [
            147.2,
            281.7,
            1587.3,
            2699.1
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': null
        },
        {
          'm': 'Kimi-K3',
          't': '',
          'u': 0.4134,
          'q': [
            273.5,
            489.5,
            1690.9,
            2162.8
          ],
          's': 'r',
          'w': 'standard',
          'b': 'Kimi',
          'p': [
            20.4,
            2.04,
            102
          ],
          'd': '2026-10-26~2026-11-02'
        },
        {
          'm': 'Kimi-K3',
          't': '[256K]',
          'u': 0.6728974631641403,
          'q': [
            null,
            null,
            1038.8,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': null
        },
        {
          'm': 'Kimi-K2.7-Code-HighSpeed',
          't': '',
          'u': 2.642191489038086,
          'q': [
            null,
            null,
            264.6,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': null
        },
        {
          'm': 'Kimi K2.7 Code (v2)',
          't': '',
          'u': 0.3171,
          'q': [
            555.6,
            916.3,
            2204.5,
            2519.4
          ],
          's': 'r',
          'w': 'measured',
          'b': 'Kimi',
          'p': [
            6.46,
            1.292,
            27.2
          ],
          'd': '2026-08-20'
        }
      ]
    },
    {
      'slug': 'kimi-ultra-2026',
      'name': 'Ultra',
      'platform': 'Kimi',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'codingplan',
      'fee': 1399,
      'currency': '¥',
      'feeCny': 1399,
      'dm': 1,
      'models': [
        {
          'm': 'Kimi-K3.1-Pro',
          't': '',
          'u': 1.1447439460967634,
          'q': [
            null,
            null,
            1222.1,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': null
        },
        {
          'm': 'Kimi-K3.1-Pro',
          't': '[高速]',
          'u': 2.289487892193527,
          'q': [
            null,
            null,
            611.1,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': null
        },
        {
          'm': 'Kimi-K2.8-Preview',
          't': '',
          'u': 0.4406802447739964,
          'q': [
            294.4,
            563.5,
            3174.6,
            5398.1
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': null
        },
        {
          'm': 'Kimi-K3',
          't': '',
          'u': 0.4138,
          'q': [
            546.9,
            978.7,
            3381,
            4324.5
          ],
          's': 'r',
          'w': 'standard',
          'b': 'Kimi',
          'p': [
            20.4,
            2.04,
            102
          ],
          'd': '2026-10-26~2026-11-02'
        },
        {
          'm': 'Kimi-K3',
          't': '[256K]',
          'u': 0.6733787918216254,
          'q': [
            null,
            null,
            2077.6,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': null
        },
        {
          'm': 'Kimi-K2.7-Code-HighSpeed',
          't': '',
          'u': 2.6440814686439786,
          'q': [
            null,
            null,
            529.1,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': null
        },
        {
          'm': 'Kimi K2.7 Code (v2)',
          't': '',
          'u': 0.3173,
          'q': [
            1111.1,
            1832.6,
            4409.1,
            5038.8
          ],
          's': 'r',
          'w': 'measured',
          'b': 'Kimi',
          'p': [
            6.46,
            1.292,
            27.2
          ],
          'd': '2026-08-20'
        }
      ]
    },
    {
      'slug': 'minimax-mplan-go',
      'name': 'M Plan Go',
      'platform': 'MiniMax',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'codingplan',
      'fee': 49,
      'currency': '¥',
      'feeCny': 49,
      'dm': 1,
      'models': [
        {
          'm': 'MiniMax-M3.1-Flash',
          't': '',
          'u': 0.027567826086956525,
          'q': [
            446.5,
            737,
            1777.4,
            2032.5
          ],
          's': 'c',
          'w': null,
          'b': 'MiniMax',
          'p': null
        },
        {
          'm': 'MiniMax M3.1 Flash Preview',
          't': '',
          'u': 0.0308,
          'q': [
            null,
            null,
            1598,
            null
          ],
          's': 'r',
          'w': 'measured',
          'b': 'MiniMax',
          'p': null,
          'x': 1,
          'd': '2026-10-01'
        }
      ]
    },
    {
      'slug': 'minimax-mplan-explore',
      'name': 'M Plan Explore',
      'platform': 'MiniMax',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'codingplan',
      'fee': 119,
      'currency': '¥',
      'feeCny': 119,
      'dm': 1,
      'models': [
        {
          'm': 'MiniMax-M3.1-Flash',
          't': '',
          'u': 0.0223168115942029,
          'q': [
            1339.6,
            2211,
            5332.3,
            6097.5
          ],
          's': 'c',
          'w': null,
          'b': 'MiniMax',
          'p': null
        },
        {
          'm': 'MiniMax M3.1 Flash Preview',
          't': '',
          'u': 0.0249,
          'q': [
            null,
            null,
            4794.1,
            null
          ],
          's': 'r',
          'w': 'measured',
          'b': 'MiniMax',
          'p': null,
          'x': 1,
          'd': '2026-10-01'
        }
      ]
    },
    {
      'slug': 'minimax-mplan-build',
      'name': 'M Plan Build',
      'platform': 'MiniMax',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'codingplan',
      'fee': 469,
      'currency': '¥',
      'feeCny': 469,
      'dm': 1,
      'models': [
        {
          'm': 'MiniMax-M3.1-Flash',
          't': '',
          'u': 0.0219886231884058,
          'q': [
            5358.6,
            8843.8,
            21329.2,
            24389.9
          ],
          's': 'c',
          'w': null,
          'b': 'MiniMax',
          'p': null
        },
        {
          'm': 'MiniMax M3.1 Flash Preview',
          't': '',
          'u': 0.0245,
          'q': [
            null,
            null,
            19176.4,
            null
          ],
          's': 'r',
          'w': 'measured',
          'b': 'MiniMax',
          'p': null,
          'x': 1,
          'd': '2026-10-01'
        }
      ]
    },
    {
      'slug': 'opencode-go',
      'name': 'Go',
      'platform': 'OpenCode',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'codingplan',
      'fee': 10,
      'currency': '$',
      'feeCny': 68,
      'dm': 1,
      'models': [
        {
          'm': 'Kimi-K3.1-Pro',
          't': '',
          'u': 1.3333,
          'q': [
            null,
            null,
            51,
            null
          ],
          's': 'r',
          'w': 'standard',
          'b': 'Kimi',
          'p': [
            13.6,
            1.36,
            68
          ],
          'x': 1,
          'd': '2026-10-30'
        },
        {
          'm': 'GLM-5.3-Flash',
          't': '',
          'u': 0.0428,
          'q': [
            394.8,
            653,
            1587.1,
            1818.4
          ],
          's': 'r',
          'w': 'standard',
          'b': '智谱 GLM',
          'p': [
            1.02,
            0.204,
            3.4
          ],
          'd': '2026-09-30'
        },
        {
          'm': 'GLM-5.3',
          't': '',
          'u': 0.1129,
          'q': [
            141.3,
            236.7,
            602.4,
            698.3
          ],
          's': 'r',
          'w': 'standard',
          'b': '智谱 GLM',
          'p': [
            9.52,
            1.768,
            29.92
          ],
          'd': '2026-11-18'
        },
        {
          'm': 'Kimi-K3',
          't': '',
          'u': 2.2442,
          'q': [
            4.9,
            8.8,
            30.3,
            38.7
          ],
          's': 'r',
          'w': 'standard',
          'b': 'Kimi',
          'p': [
            20.4,
            2.04,
            102
          ],
          'd': '2026-09-30'
        },
        {
          'm': 'Kimi-K2.7-Code',
          't': '',
          'u': 0.2758,
          'q': [
            62.1,
            102.5,
            246.6,
            281.8
          ],
          's': 'r',
          'w': 'standard',
          'b': 'Kimi',
          'p': [
            6.46,
            1.292,
            27.2
          ],
          'd': '2026-09-30'
        },
        {
          'm': 'Step-5-Preview',
          't': '',
          'u': 5.0746,
          'q': [
            1.4,
            2.7,
            13.4,
            20.9
          ],
          's': 'r',
          'w': 'standard',
          'b': '阶跃星辰',
          'p': [
            6.8,
            0.68,
            18.36
          ],
          'd': '2026-09-30'
        },
        {
          'm': 'MiMo-V2.6-Flash',
          't': '',
          'u': 0.0118,
          'q': [
            425.5,
            830.4,
            5779.4,
            12289.5
          ],
          's': 'r',
          'w': 'standard',
          'b': '小米 MiMo',
          'p': [
            0.952,
            0.019,
            1.904
          ],
          'd': '2026-09-30'
        },
        {
          'm': 'MiMo-V2.6-Pro',
          't': '',
          'u': 0.1242,
          'q': [
            34.2,
            67.6,
            547.4,
            1483.5
          ],
          's': 'r',
          'w': 'standard',
          'b': '小米 MiMo',
          'p': [
            2.958,
            0.0247,
            5.916
          ],
          'd': '2026-09-30'
        },
        {
          'm': 'MiniMax-M3',
          't': '[≤512K]',
          'u': 0.08799200000000003,
          'q': [
            194.2,
            320.4,
            772.8,
            883.7
          ],
          's': 'c',
          'w': null,
          'b': 'MiniMax',
          'p': [
            2.04,
            0.408,
            8.16
          ]
        },
        {
          'm': 'MiniMax-M3',
          't': '[>512K]',
          'u': 0.17598400000000006,
          'q': [
            97.1,
            160.2,
            386.4,
            441.8
          ],
          's': 'c',
          'w': null,
          'b': 'MiniMax',
          'p': [
            4.08,
            0.816,
            16.32
          ]
        },
        {
          'm': 'Muse-Spark-1.3',
          't': '[Contributor]',
          'u': 0.008914233333333339,
          'q': [
            561.7,
            1096.1,
            7628.2,
            16221
          ],
          's': 'c',
          'w': null,
          'b': 'Muse',
          'p': [
            0.68,
            0.0136,
            1.36
          ]
        },
        {
          'm': 'Muse-Spark-1.2',
          't': '[Contributor]',
          'u': 0.008914233333333339,
          'q': [
            561.7,
            1096.1,
            7628.2,
            16221
          ],
          's': 'c',
          'w': null,
          'b': 'Muse',
          'p': [
            0.68,
            0.0136,
            1.36
          ]
        },
        {
          'm': 'Qwen-3.8-Max',
          't': '',
          'u': 1.6583500000000002,
          'q': [
            7.3,
            12.8,
            41,
            51
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': [
            13.6,
            1.7,
            40.8
          ]
        },
        {
          'm': 'Qwen-3.8-Flash',
          't': '',
          'u': 0.05652273333333334,
          'q': [
            192.8,
            345.6,
            1203.1,
            1543.5
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': [
            1.02,
            0.1088,
            3.196
          ]
        },
        {
          'm': 'Qwen-3.7-Plus',
          't': '[256K]',
          'u': 0.07447133333333336,
          'q': [
            143.9,
            258.6,
            913.1,
            1178.2
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': [
            2.72,
            0.272,
            10.88
          ]
        },
        {
          'm': 'Qwen-3.7-Plus',
          't': '',
          'u': 0.223414,
          'q': [
            48,
            86.2,
            304.4,
            392.7
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': [
            8.16,
            0.816,
            32.64
          ]
        },
        {
          'm': 'DeepSeek-V4.1-Flash-1017',
          't': '[谷]',
          'u': 0.009042810000000005,
          'q': [
            622.3,
            1203.2,
            7519.8,
            14099.6
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': [
            1.02,
            0.0204,
            4.08
          ]
        },
        {
          'm': 'DeepSeek-V4.1-Flash-1017',
          't': '[峰]',
          'u': 0.01808562000000001,
          'q': [
            311.2,
            601.6,
            3759.9,
            7049.8
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': [
            2.04,
            0.0408,
            8.16
          ]
        },
        {
          'm': 'DeepSeek-V4-Pro-0813',
          't': '[谷]',
          'u': 0.28800493333333343,
          'q': [
            21.4,
            41.1,
            236.1,
            408.4
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': [
            4.488,
            0.1496,
            13.464
          ]
        },
        {
          'm': 'DeepSeek-V4-Pro-0813',
          't': '[峰]',
          'u': 0.5760098666666669,
          'q': [
            10.7,
            20.5,
            118.1,
            204.2
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': [
            8.976,
            0.2992,
            26.928
          ]
        },
        {
          'm': 'Hy4',
          't': '',
          'u': 0.1019,
          'q': [
            71.2,
            134.4,
            667.2,
            1030.1
          ],
          's': 'r',
          'w': 'standard',
          'b': '腾讯混元',
          'p': [
            5.6712,
            0.2856,
            17.0068
          ],
          'd': '2026-11-05'
        },
        {
          'm': 'Hy4-preview',
          't': '',
          'u': 0.2038,
          'q': [
            35.6,
            67.2,
            333.6,
            515
          ],
          's': 'r',
          'w': 'standard',
          'b': '腾讯混元',
          'p': [
            5.6712,
            0.2856,
            17.0068
          ],
          'd': '2026-09-30'
        },
        {
          'm': 'Hy3',
          't': '',
          'u': 0.0515,
          'q': [
            208.6,
            374.6,
            1319.2,
            1700.3
          ],
          's': 'r',
          'w': 'standard',
          'b': '腾讯混元',
          'p': [
            0.952,
            0.238,
            3.944
          ],
          'd': '2026-09-30'
        },
        {
          'm': 'Grok-4.7',
          't': '[200K]',
          'u': 2.729633333333333,
          'q': [
            7.3,
            11.7,
            24.9,
            27.7
          ],
          's': 'c',
          'w': null,
          'b': 'Grok',
          'p': [
            13.6,
            3.4,
            40.8
          ]
        },
        {
          'm': 'Grok-4.7',
          't': '',
          'u': 2.6984,
          'q': [
            7.4,
            11.8,
            25.2,
            28
          ],
          's': 'r',
          'w': 'standard',
          'b': 'Grok',
          'p': [
            27.2,
            6.8,
            81.6
          ],
          'd': '2026-09-30'
        },
        {
          'm': 'GPT-6-Luna',
          't': '[272K]',
          'u': 0.07673800000000001,
          'q': [
            143.3,
            256.5,
            886.1,
            1133.4
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            0.68,
            0.068,
            3.4
          ]
        },
        {
          'm': 'GPT-6-Luna',
          't': '',
          'u': 0.0666,
          'q': [
            null,
            null,
            1020.4,
            null
          ],
          's': 'r',
          'w': 'standard',
          'b': 'ChatGPT',
          'p': [
            1.36,
            0.136,
            5.1
          ],
          'x': 1,
          'd': '2026-09-30'
        },
        {
          'm': 'GPT-5.6-Luna',
          't': '[272K]',
          'u': 0.15800933333333336,
          'q': [
            71.4,
            127.2,
            430.4,
            546
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            1.36,
            0.136,
            8.16
          ]
        },
        {
          'm': 'GPT-5.6-Luna',
          't': '',
          'u': 0.1541,
          'q': [
            73.2,
            130.4,
            441.2,
            559.7
          ],
          's': 'r',
          'w': 'standard',
          'b': 'ChatGPT',
          'p': [
            2.72,
            0.272,
            12.24
          ],
          'd': '2026-09-30'
        },
        {
          'm': 'Claude Haiku 5.5',
          't': '[100K]',
          'u': 0.07673800000000001,
          'q': [
            143.3,
            256.5,
            886.1,
            1133.4
          ],
          's': 'c',
          'w': null,
          'b': 'Claude',
          'p': [
            0.68,
            0.068,
            3.4
          ]
        },
        {
          'm': 'Claude Haiku 5.5',
          't': '',
          'u': 0.0748,
          'q': [
            147.1,
            263.2,
            909.1,
            1162.8
          ],
          's': 'r',
          'w': 'standard',
          'b': 'Claude',
          'p': [
            3.4,
            0.34,
            17
          ],
          'd': '2026-09-30'
        },
        {
          'm': 'Gemini 4 Argon',
          't': '',
          'u': 0.5531233333333335,
          'q': [
            14.2,
            26.5,
            122.9,
            181.7
          ],
          's': 'c',
          'w': null,
          'b': 'Gemini',
          'p': [
            13.6,
            0.68,
            68
          ]
        },
        {
          'm': 'MiniMax-M3.1-Flash',
          't': '',
          'u': 0.0724,
          'q': [
            null,
            null,
            939,
            null
          ],
          's': 'r',
          'w': 'standard',
          'b': 'MiniMax',
          'p': [
            1.02,
            0.102,
            4.08
          ],
          'x': 1,
          'd': '2026-10-30'
        },
        {
          'm': 'Qwen4-Max',
          't': '',
          'u': 0.7616850000000003,
          'q': [
            9.5,
            17.9,
            89.3,
            138.1
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': [
            10.2,
            0.51,
            30.6
          ]
        },
        {
          'm': 'LongCat-2.5',
          't': '',
          'u': 0.03014270000000002,
          'q': [
            186.7,
            360.9,
            2255.9,
            4229.9
          ],
          's': 'c',
          'w': null,
          'b': 'LongCat',
          'p': [
            2.04,
            0.0408,
            8.16
          ]
        },
        {
          'm': 'GLM 5.2',
          't': '',
          'u': 0.3505,
          'q': [
            null,
            null,
            194,
            null
          ],
          's': 'r',
          'w': 'standard',
          'b': '智谱 GLM',
          'p': null,
          'x': 1,
          'd': '2026-09-30'
        },
        {
          'm': 'LongCat 2.0',
          't': '',
          'u': 0.0219,
          'q': [
            null,
            null,
            3105.6,
            null
          ],
          's': 'r',
          'w': 'standard',
          'b': 'LongCat',
          'p': null,
          'x': 1,
          'd': '2026-09-30'
        },
        {
          'm': 'MiMo V2.5',
          't': '',
          'u': 0.0086,
          'q': [
            null,
            null,
            7878.2,
            null
          ],
          's': 'r',
          'w': 'standard',
          'b': '小米 MiMo',
          'p': null,
          'x': 1,
          'd': '2026-09-30'
        },
        {
          'm': 'MiMo V2.5 Pro',
          't': '',
          'u': 0.0908,
          'q': [
            185.4,
            307,
            749.2,
            859.1
          ],
          's': 'r',
          'w': 'standard',
          'b': '小米 MiMo',
          'p': [
            6.8,
            1.36,
            20.4
          ],
          'd': '2026-09-30'
        },
        {
          'm': 'Muse Spark 1.3 Contributor',
          't': '',
          'u': 0.0062,
          'q': [
            null,
            null,
            11029.4,
            null
          ],
          's': 'r',
          'w': 'standard',
          'b': 'Muse',
          'p': null,
          'x': 1,
          'd': '2026-09-30'
        },
        {
          'm': 'Muse Spark 1.2 Contributor',
          't': '',
          'u': 0.0062,
          'q': [
            null,
            null,
            11029.4,
            null
          ],
          's': 'r',
          'w': 'standard',
          'b': 'Muse',
          'p': null,
          'x': 1,
          'd': '2026-09-30'
        },
        {
          'm': 'Qwen4 Max',
          't': '',
          'u': 4.9635,
          'q': [
            1.5,
            2.8,
            13.7,
            21.2
          ],
          's': 'r',
          'w': 'standard',
          'b': '通义千问',
          'p': [
            10,
            0.5,
            30
          ],
          'd': '2026-11-17'
        },
        {
          'm': 'Qwen3.8 Max',
          't': '',
          'u': 1.4624,
          'q': [
            null,
            null,
            46.5,
            null
          ],
          's': 'r',
          'w': 'standard',
          'b': '通义千问',
          'p': null,
          'x': 1,
          'd': '2026-09-30'
        },
        {
          'm': 'Qwen3.8 Flash',
          't': '',
          'u': 0.049,
          'q': [
            null,
            null,
            1387.6,
            null
          ],
          's': 'r',
          'w': 'standard',
          'b': '通义千问',
          'p': null,
          'x': 1,
          'd': '2026-09-30'
        },
        {
          'm': 'Qwen3.7 Plus',
          't': '',
          'u': 0.0687,
          'q': [
            248.7,
            410.5,
            990,
            1132.1
          ],
          's': 'r',
          'w': 'standard',
          'b': '通义千问',
          'p': [
            2.72,
            0.544,
            10.88
          ],
          'd': '2026-09-30'
        },
        {
          'm': 'DeepSeek V4.1 Flash',
          't': '',
          'u': 0.0086,
          'q': [
            656.1,
            1268.5,
            7928.3,
            14865.6
          ],
          's': 'r',
          'w': 'standard',
          'b': 'DeepSeek',
          'p': [
            2.04,
            0.0408,
            8.16
          ],
          'd': '2026-10-30'
        },
        {
          'm': 'DeepSeek V4 Pro',
          't': '',
          'u': 0.2742,
          'q': [
            22.5,
            43.2,
            248,
            428.9
          ],
          's': 'r',
          'w': 'standard',
          'b': 'DeepSeek',
          'p': [
            8.976,
            0.2992,
            26.928
          ],
          'd': '2026-09-30'
        },
        {
          'm': 'Gemini 4 Argon Contributor',
          't': '',
          'u': 0.8936,
          'q': [
            null,
            null,
            76.1,
            null
          ],
          's': 'r',
          'w': 'standard',
          'b': 'Gemini',
          'p': null,
          'x': 1,
          'd': '2026-09-30'
        }
      ]
    },
    {
      'slug': 'opencode-go-plus',
      'name': 'Go Plus',
      'platform': 'OpenCode',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'codingplan',
      'fee': 40,
      'currency': '$',
      'feeCny': 272,
      'dm': 1,
      'models': [
        {
          'm': 'Kimi-K3.1-Pro',
          't': '',
          'u': 1.5347600000000001,
          'q': [
            28.7,
            51.3,
            177.2,
            226.7
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': [
            13.6,
            1.36,
            68
          ]
        },
        {
          'm': 'GLM-5.3-Flash',
          't': '',
          'u': 0.05790577777777779,
          'q': [
            1168.5,
            1932.7,
            4697.3,
            5381.6
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': [
            1.02,
            0.204,
            3.4
          ]
        },
        {
          'm': 'GLM-5.3',
          't': '',
          'u': 0.22944220000000004,
          'q': [
            278.1,
            465.8,
            1185.5,
            1374.2
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': [
            9.52,
            1.768,
            29.92
          ]
        },
        {
          'm': 'Kimi-K3',
          't': '',
          'u': 2.3021400000000005,
          'q': [
            19.1,
            34.2,
            118.2,
            151.1
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': [
            20.4,
            2.04,
            102
          ]
        },
        {
          'm': 'Kimi-K2.7-Code',
          't': '',
          'u': 0.3730328888888889,
          'q': [
            183.8,
            303.1,
            729.2,
            833.3
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': [
            6.46,
            1.292,
            27.2
          ]
        },
        {
          'm': 'Step-5-Preview',
          't': '',
          'u': 0.7152466666666669,
          'q': [
            57.9,
            104.5,
            380.3,
            496.8
          ],
          's': 'c',
          'w': null,
          'b': '阶跃星辰',
          'p': [
            6.8,
            0.68,
            18.36
          ]
        },
        {
          'm': 'MiMo-V2.6-Flash',
          't': '',
          'u': 0.024959853333333344,
          'q': [
            802.4,
            1565.9,
            10897.5,
            23172.8
          ],
          's': 'c',
          'w': null,
          'b': '小米 MiMo',
          'p': [
            0.952,
            0.019,
            1.904
          ]
        },
        {
          'm': 'MiMo-V2.6-Pro',
          't': '',
          'u': 0.13336060833333344,
          'q': [
            127.7,
            252,
            2039.6,
            5519.3
          ],
          's': 'c',
          'w': null,
          'b': '小米 MiMo',
          'p': [
            2.958,
            0.0247,
            5.916
          ]
        },
        {
          'm': 'MiniMax-M3',
          't': '[≤512K]',
          'u': 0.11732266666666666,
          'q': [
            582.5,
            961.3,
            2318.4,
            2651.1
          ],
          's': 'c',
          'w': null,
          'b': 'MiniMax',
          'p': [
            2.04,
            0.408,
            8.16
          ]
        },
        {
          'm': 'MiniMax-M3',
          't': '[>512K]',
          'u': 0.23464533333333332,
          'q': [
            291.2,
            480.6,
            1159.2,
            1325.5
          ],
          's': 'c',
          'w': null,
          'b': 'MiniMax',
          'p': [
            4.08,
            0.816,
            16.32
          ]
        },
        {
          'm': 'Muse-Spark-1.3',
          't': '[Contributor]',
          'u': 0.017828466666666678,
          'q': [
            1123.4,
            2192.2,
            15256.5,
            32442
          ],
          's': 'c',
          'w': null,
          'b': 'Muse',
          'p': [
            0.68,
            0.0136,
            1.36
          ]
        },
        {
          'm': 'Muse-Spark-1.2',
          't': '[Contributor]',
          'u': 0.017828466666666678,
          'q': [
            1123.4,
            2192.2,
            15256.5,
            32442
          ],
          's': 'c',
          'w': null,
          'b': 'Muse',
          'p': [
            0.68,
            0.0136,
            1.36
          ]
        },
        {
          'm': 'Qwen-3.8-Max',
          't': '',
          'u': 1.6583500000000002,
          'q': [
            29,
            51.2,
            164,
            204
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': [
            13.6,
            1.7,
            40.8
          ]
        },
        {
          'm': 'Qwen-3.8-Flash',
          't': '',
          'u': 0.07536364444444446,
          'q': [
            578.5,
            1036.7,
            3609.2,
            4630.6
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': [
            1.02,
            0.1088,
            3.196
          ]
        },
        {
          'm': 'Qwen-3.7-Plus',
          't': '[256K]',
          'u': 0.09929511111111115,
          'q': [
            431.8,
            775.7,
            2739.3,
            3534.6
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': [
            2.72,
            0.272,
            10.88
          ]
        },
        {
          'm': 'Qwen-3.7-Plus',
          't': '',
          'u': 0.2978853333333334,
          'q': [
            143.9,
            258.6,
            913.1,
            1178.2
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': [
            8.16,
            0.816,
            32.64
          ]
        },
        {
          'm': 'DeepSeek-V4.1-Flash-1017',
          't': '[谷]',
          'u': 0.01808562000000001,
          'q': [
            1244.7,
            2406.3,
            15039.6,
            28199.2
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': [
            1.02,
            0.0204,
            4.08
          ]
        },
        {
          'm': 'DeepSeek-V4.1-Flash-1017',
          't': '[峰]',
          'u': 0.03617124000000002,
          'q': [
            622.3,
            1203.2,
            7519.8,
            14099.6
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': [
            2.04,
            0.0408,
            8.16
          ]
        },
        {
          'm': 'DeepSeek-V4-Pro-0813',
          't': '[谷]',
          'u': 0.28800493333333343,
          'q': [
            85.7,
            164.4,
            944.4,
            1633.4
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': [
            4.488,
            0.1496,
            13.464
          ]
        },
        {
          'm': 'DeepSeek-V4-Pro-0813',
          't': '[峰]',
          'u': 0.5760098666666669,
          'q': [
            42.9,
            82.2,
            472.2,
            816.7
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': [
            8.976,
            0.2992,
            26.928
          ]
        },
        {
          'm': 'Hy4',
          't': '',
          'u': 0.10618993333333339,
          'q': [
            273.5,
            516.1,
            2561.4,
            3954.4
          ],
          's': 'c',
          'w': null,
          'b': '腾讯混元',
          'p': [
            5.6712,
            0.2856,
            17.0068
          ]
        },
        {
          'm': 'Hy4-preview',
          't': '',
          'u': 0.21237986666666678,
          'q': [
            136.7,
            258.1,
            1280.7,
            1977.2
          ],
          's': 'c',
          'w': null,
          'b': '腾讯混元',
          'p': [
            5.6712,
            0.2856,
            17.0068
          ]
        },
        {
          'm': 'Hy3',
          't': '',
          'u': 0.04867525000000001,
          'q': [
            1668.2,
            2644.5,
            5588.1,
            6201.6
          ],
          's': 'c',
          'w': null,
          'b': '腾讯混元',
          'p': [
            0.952,
            0.238,
            3.944
          ]
        },
        {
          'm': 'Grok-4.7',
          't': '[200K]',
          'u': 2.729633333333333,
          'q': [
            29.4,
            46.7,
            99.6,
            110.8
          ],
          's': 'c',
          'w': null,
          'b': 'Grok',
          'p': [
            13.6,
            3.4,
            40.8
          ]
        },
        {
          'm': 'Grok-4.7',
          't': '',
          'u': 5.459266666666666,
          'q': [
            14.7,
            23.3,
            49.8,
            55.4
          ],
          's': 'c',
          'w': null,
          'b': 'Grok',
          'p': [
            27.2,
            6.8,
            81.6
          ]
        },
        {
          'm': 'GPT-6-Luna',
          't': '[272K]',
          'u': 0.07673800000000001,
          'q': [
            573.4,
            1026,
            3544.5,
            4533.7
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            0.68,
            0.068,
            3.4
          ]
        },
        {
          'm': 'GPT-6-Luna',
          't': '',
          'u': 0.14780933333333338,
          'q': [
            288.2,
            518.2,
            1840.2,
            2379.9
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            1.36,
            0.136,
            5.1
          ]
        },
        {
          'm': 'GPT-5.6-Luna',
          't': '[272K]',
          'u': 0.15800933333333336,
          'q': [
            285.5,
            508.9,
            1721.4,
            2183.9
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            1.36,
            0.136,
            8.16
          ]
        },
        {
          'm': 'GPT-5.6-Luna',
          't': '',
          'u': 0.3024186666666668,
          'q': [
            143.6,
            257.5,
            899.4,
            1155.4
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            2.72,
            0.272,
            12.24
          ]
        },
        {
          'm': 'Claude Haiku 5.5',
          't': '[100K]',
          'u': 0.07673800000000001,
          'q': [
            573.4,
            1026,
            3544.5,
            4533.7
          ],
          's': 'c',
          'w': null,
          'b': 'Claude',
          'p': [
            0.68,
            0.068,
            3.4
          ]
        },
        {
          'm': 'Claude Haiku 5.5',
          't': '',
          'u': 0.38369000000000003,
          'q': [
            114.7,
            205.2,
            708.9,
            906.7
          ],
          's': 'c',
          'w': null,
          'b': 'Claude',
          'p': [
            3.4,
            0.34,
            17
          ]
        },
        {
          'm': 'Gemini 4 Argon',
          't': '',
          'u': 0.5531233333333335,
          'q': [
            56.6,
            106,
            491.8,
            726.8
          ],
          's': 'c',
          'w': null,
          'b': 'Gemini',
          'p': [
            13.6,
            0.68,
            68
          ]
        },
        {
          'm': 'MiniMax-M3.1-Flash',
          't': '',
          'u': 0.08378025000000001,
          'q': [
            511.8,
            919.4,
            3246.6,
            4189.1
          ],
          's': 'c',
          'w': null,
          'b': 'MiniMax',
          'p': [
            1.02,
            0.102,
            4.08
          ]
        },
        {
          'm': 'Qwen4-Max',
          't': '',
          'u': 0.7616850000000003,
          'q': [
            38,
            71.8,
            357.1,
            552.4
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': [
            10.2,
            0.51,
            30.6
          ]
        },
        {
          'm': 'LongCat-2.5',
          't': '',
          'u': 0.03014270000000002,
          'q': [
            746.8,
            1443.8,
            9023.7,
            16919.5
          ],
          's': 'c',
          'w': null,
          'b': 'LongCat',
          'p': [
            2.04,
            0.0408,
            8.16
          ]
        }
      ]
    },
    {
      'slug': 'opencode-go-teams',
      'name': 'Go Teams',
      'platform': 'OpenCode',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'codingplan',
      'fee': 20,
      'currency': '$',
      'feeCny': 136,
      'dm': 1,
      'models': [
        {
          'm': 'Kimi-K3.1-Pro',
          't': '',
          'u': 2.3021400000000005,
          'q': [
            9.6,
            17.1,
            59.1,
            75.6
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': [
            13.6,
            1.36,
            68
          ]
        },
        {
          'm': 'GLM-5.3-Flash',
          't': '',
          'u': 0.08017723076923078,
          'q': [
            422,
            697.9,
            1696.2,
            1943.3
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': [
            1.02,
            0.204,
            3.4
          ]
        },
        {
          'm': 'GLM-5.3',
          't': '',
          'u': 0.22384604878048783,
          'q': [
            142.6,
            238.7,
            607.6,
            704.3
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': [
            9.52,
            1.768,
            29.92
          ]
        },
        {
          'm': 'Kimi-K3',
          't': '',
          'u': 3.4532100000000003,
          'q': [
            6.4,
            11.4,
            39.4,
            50.4
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': [
            20.4,
            2.04,
            102
          ]
        },
        {
          'm': 'Kimi-K2.7-Code',
          't': '',
          'u': 0.5165070769230768,
          'q': [
            66.4,
            109.4,
            263.3,
            300.9
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': [
            6.46,
            1.292,
            27.2
          ]
        },
        {
          'm': 'Step-5-Preview',
          't': '',
          'u': 1.0728700000000004,
          'q': [
            19.3,
            34.8,
            126.8,
            165.6
          ],
          's': 'c',
          'w': null,
          'b': '阶跃星辰',
          'p': [
            6.8,
            0.68,
            18.36
          ]
        },
        {
          'm': 'MiMo-V2.6-Flash',
          't': '',
          'u': 0.023039864615384625,
          'q': [
            434.6,
            848.2,
            5902.8,
            12552
          ],
          's': 'c',
          'w': null,
          'b': '小米 MiMo',
          'p': [
            0.952,
            0.019,
            1.904
          ]
        },
        {
          'm': 'MiMo-V2.6-Pro',
          't': '',
          'u': 0.20004091250000017,
          'q': [
            42.6,
            84,
            679.9,
            1839.8
          ],
          's': 'c',
          'w': null,
          'b': '小米 MiMo',
          'p': [
            2.958,
            0.0247,
            5.916
          ]
        },
        {
          'm': 'MiniMax-M3',
          't': '[≤512K]',
          'u': 0.16244676923076926,
          'q': [
            210.3,
            347.1,
            837.2,
            957.3
          ],
          's': 'c',
          'w': null,
          'b': 'MiniMax',
          'p': [
            2.04,
            0.408,
            8.16
          ]
        },
        {
          'm': 'MiniMax-M3',
          't': '[>512K]',
          'u': 0.3248935384615385,
          'q': [
            105.2,
            173.6,
            418.6,
            478.7
          ],
          's': 'c',
          'w': null,
          'b': 'MiniMax',
          'p': [
            4.08,
            0.816,
            16.32
          ]
        },
        {
          'm': 'Muse-Spark-1.3',
          't': '[Contributor]',
          'u': 0.016457046153846164,
          'q': [
            608.5,
            1187.4,
            8263.9,
            17572.7
          ],
          's': 'c',
          'w': null,
          'b': 'Muse',
          'p': [
            0.68,
            0.0136,
            1.36
          ]
        },
        {
          'm': 'Muse-Spark-1.2',
          't': '[Contributor]',
          'u': 0.016457046153846164,
          'q': [
            608.5,
            1187.4,
            8263.9,
            17572.7
          ],
          's': 'c',
          'w': null,
          'b': 'Muse',
          'p': [
            0.68,
            0.0136,
            1.36
          ]
        },
        {
          'm': 'Qwen-3.8-Max',
          't': '',
          'u': 2.4875250000000007,
          'q': [
            9.7,
            17.1,
            54.7,
            68
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': [
            13.6,
            1.7,
            40.8
          ]
        },
        {
          'm': 'Qwen-3.8-Flash',
          't': '',
          'u': 0.09689611428571432,
          'q': [
            225,
            403.2,
            1403.6,
            1800.8
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': [
            1.02,
            0.1088,
            3.196
          ]
        },
        {
          'm': 'Qwen-3.7-Plus',
          't': '[256K]',
          'u': 0.13748553846153852,
          'q': [
            155.9,
            280.1,
            989.2,
            1276.4
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': [
            2.72,
            0.272,
            10.88
          ]
        },
        {
          'm': 'Qwen-3.7-Plus',
          't': '',
          'u': 0.4124566153846154,
          'q': [
            52,
            93.4,
            329.7,
            425.5
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': [
            8.16,
            0.816,
            32.64
          ]
        },
        {
          'm': 'DeepSeek-V4.1-Flash-1017',
          't': '[谷]',
          'u': 0.017224400000000008,
          'q': [
            653.4,
            1263.3,
            7895.8,
            14804.6
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': [
            1.02,
            0.0204,
            4.08
          ]
        },
        {
          'm': 'DeepSeek-V4.1-Flash-1017',
          't': '[峰]',
          'u': 0.034448800000000016,
          'q': [
            326.7,
            631.7,
            3947.9,
            7402.3
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': [
            2.04,
            0.0408,
            8.16
          ]
        },
        {
          'm': 'DeepSeek-V4-Pro-0813',
          't': '[谷]',
          'u': 0.4320074000000002,
          'q': [
            28.6,
            54.8,
            314.8,
            544.5
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': [
            4.488,
            0.1496,
            13.464
          ]
        },
        {
          'm': 'DeepSeek-V4-Pro-0813',
          't': '[峰]',
          'u': 0.8640148000000004,
          'q': [
            14.3,
            27.4,
            157.4,
            272.2
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': [
            8.976,
            0.2992,
            26.928
          ]
        },
        {
          'm': 'Hy4',
          't': '',
          'u': 0.19604295384615394,
          'q': [
            74.1,
            139.8,
            693.7,
            1071
          ],
          's': 'c',
          'w': null,
          'b': '腾讯混元',
          'p': [
            5.6712,
            0.2856,
            17.0068
          ]
        },
        {
          'm': 'Hy4-preview',
          't': '',
          'u': 0.36407977142857156,
          'q': [
            39.9,
            75.3,
            373.5,
            576.7
          ],
          's': 'c',
          'w': null,
          'b': '腾讯混元',
          'p': [
            5.6712,
            0.2856,
            17.0068
          ]
        },
        {
          'm': 'Hy3',
          't': '',
          'u': 0.08986200000000001,
          'q': [
            451.8,
            716.2,
            1513.4,
            1679.6
          ],
          's': 'c',
          'w': null,
          'b': '腾讯混元',
          'p': [
            0.952,
            0.238,
            3.944
          ]
        },
        {
          'm': 'Grok-4.7',
          't': '[200K]',
          'u': 4.094449999999999,
          'q': [
            9.8,
            15.6,
            33.2,
            36.9
          ],
          's': 'c',
          'w': null,
          'b': 'Grok',
          'p': [
            13.6,
            3.4,
            40.8
          ]
        },
        {
          'm': 'Grok-4.7',
          't': '',
          'u': 8.188899999999999,
          'q': [
            4.9,
            7.8,
            16.6,
            18.5
          ],
          's': 'c',
          'w': null,
          'b': 'Grok',
          'p': [
            27.2,
            6.8,
            81.6
          ]
        },
        {
          'm': 'GPT-6-Luna',
          't': '[272K]',
          'u': 0.11510700000000003,
          'q': [
            191.1,
            342,
            1181.5,
            1511.2
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            0.68,
            0.068,
            3.4
          ]
        },
        {
          'm': 'GPT-6-Luna',
          't': '',
          'u': 0.22171400000000005,
          'q': [
            96.1,
            172.7,
            613.4,
            793.3
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            1.36,
            0.136,
            5.1
          ]
        },
        {
          'm': 'GPT-5.6-Luna',
          't': '[272K]',
          'u': 0.23701400000000006,
          'q': [
            95.2,
            169.6,
            573.8,
            728
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            1.36,
            0.136,
            8.16
          ]
        },
        {
          'm': 'GPT-5.6-Luna',
          't': '',
          'u': 0.45362800000000014,
          'q': [
            47.9,
            85.8,
            299.8,
            385.1
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            2.72,
            0.272,
            12.24
          ]
        },
        {
          'm': 'Claude Haiku 5.5',
          't': '[100K]',
          'u': 0.11510700000000003,
          'q': [
            191.1,
            342,
            1181.5,
            1511.2
          ],
          's': 'c',
          'w': null,
          'b': 'Claude',
          'p': [
            0.68,
            0.068,
            3.4
          ]
        },
        {
          'm': 'Claude Haiku 5.5',
          't': '',
          'u': 0.5755350000000001,
          'q': [
            38.2,
            68.4,
            236.3,
            302.2
          ],
          's': 'c',
          'w': null,
          'b': 'Claude',
          'p': [
            3.4,
            0.34,
            17
          ]
        },
        {
          'm': 'Gemini 4 Argon',
          't': '',
          'u': 0.9482114285714289,
          'q': [
            16.5,
            30.9,
            143.4,
            212
          ],
          's': 'c',
          'w': null,
          'b': 'Gemini',
          'p': [
            13.6,
            0.68,
            68
          ]
        },
        {
          'm': 'MiniMax-M3.1-Flash',
          't': '',
          'u': 0.1340484,
          'q': [
            159.9,
            287.3,
            1014.6,
            1309.1
          ],
          's': 'c',
          'w': null,
          'b': 'MiniMax',
          'p': [
            1.02,
            0.102,
            4.08
          ]
        },
        {
          'm': 'Qwen4-Max',
          't': '',
          'u': 1.1425275000000006,
          'q': [
            12.7,
            23.9,
            119,
            184.1
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': [
            10.2,
            0.51,
            30.6
          ]
        },
        {
          'm': 'LongCat-2.5',
          't': '',
          'u': 0.055648061538461566,
          'q': [
            202.3,
            391,
            2443.9,
            4582.4
          ],
          's': 'c',
          'w': null,
          'b': 'LongCat',
          'p': [
            2.04,
            0.0408,
            8.16
          ]
        }
      ]
    },
    {
      'slug': 'zhipu-token-lite',
      'name': '新Lite',
      'platform': '智谱AI',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'codingplan',
      'fee': 118,
      'currency': '¥',
      'feeCny': 118,
      'dm': 1,
      'models': [
        {
          'm': 'GLM-5.4',
          't': '[峰]',
          'u': 0.3978443750000001,
          'q': [
            84.8,
            135.9,
            296.6,
            331.4
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'GLM-5.4',
          't': '[谷]',
          'u': 0.19892218750000004,
          'q': [
            169.7,
            271.8,
            593.2,
            662.9
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'GLM-5.3',
          't': '[谷]',
          'u': 0.3053545000000001,
          'q': [
            113.2,
            180.2,
            386.4,
            430.2
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'GLM-5.3',
          't': '[峰]',
          'u': 0.6107090000000002,
          'q': [
            56.6,
            90.1,
            193.2,
            215.1
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'GLM-5.3-Flash',
          't': '[谷]',
          'u': 0.10085533750000002,
          'q': [
            339.4,
            541.9,
            1170,
            1304.4
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'GLM-5.3-Flash',
          't': '[峰]',
          'u': 0.20171067500000003,
          'q': [
            169.7,
            270.9,
            585,
            652.2
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        }
      ]
    },
    {
      'slug': 'zhipu-token-pro',
      'name': '新Pro',
      'platform': '智谱AI',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'codingplan',
      'fee': 538,
      'currency': '¥',
      'feeCny': 538,
      'dm': 1,
      'models': [
        {
          'm': 'GLM-5.4',
          't': '[峰]',
          'u': 0.3023167708333334,
          'q': [
            509,
            815.4,
            1779.6,
            1988.6
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'GLM-5.4',
          't': '[谷]',
          'u': 0.1511583854166667,
          'q': [
            1018,
            1630.8,
            3559.2,
            3977.2
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'GLM-5.3',
          't': '[谷]',
          'u': 0.2320349166666667,
          'q': [
            678.9,
            1081.5,
            2318.6,
            2581.1
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'GLM-5.3',
          't': '[峰]',
          'u': 0.4640698333333334,
          'q': [
            339.5,
            540.7,
            1159.3,
            1290.5
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'GLM-5.3-Flash',
          't': '[谷]',
          'u': 0.07663866041666667,
          'q': [
            2036.5,
            3251.3,
            7020,
            7826.3
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'GLM-5.3-Flash',
          't': '[峰]',
          'u': 0.15327732083333334,
          'q': [
            1018.2,
            1625.6,
            3510,
            3913.2
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        }
      ]
    },
    {
      'slug': 'zhipu-token-max',
      'name': '新Max',
      'platform': '智谱AI',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'codingplan',
      'fee': 1078,
      'currency': '¥',
      'feeCny': 1078,
      'dm': 1,
      'models': [
        {
          'm': 'GLM-5.4',
          't': '[峰]',
          'u': 0.25961031250000005,
          'q': [
            1187.7,
            1902.6,
            4152.4,
            4640.1
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'GLM-5.4',
          't': '[谷]',
          'u': 0.12980515625000003,
          'q': [
            2375.3,
            3805.3,
            8304.8,
            9280.1
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'GLM-5.3',
          't': '[谷]',
          'u': 0.19925675000000007,
          'q': [
            1584.2,
            2523.4,
            5410.1,
            6022.5
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'GLM-5.3',
          't': '[峰]',
          'u': 0.39851350000000013,
          'q': [
            792.1,
            1261.7,
            2705.1,
            3011.3
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'GLM-5.3-Flash',
          't': '[谷]',
          'u': 0.06581238125000001,
          'q': [
            4751.8,
            7586.3,
            16379.9,
            18261.5
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'GLM-5.3-Flash',
          't': '[峰]',
          'u': 0.13162476250000002,
          'q': [
            2375.9,
            3793.2,
            8189.9,
            9130.7
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        }
      ]
    },
    {
      'slug': 'codex-plus',
      'name': 'Plus',
      'platform': 'Codex',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'codingplan',
      'fee': 20,
      'currency': '$',
      'feeCny': 136,
      'dm': 0,
      'models': [
        {
          'm': 'GPT-6.1-Sol',
          't': '',
          'u': 0.13566182142857144,
          'q': [
            null,
            null,
            1002.5,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': null
        },
        {
          'm': 'GPT-6.1-Terra',
          't': '',
          'u': 0.06783091071428572,
          'q': [
            null,
            null,
            2005,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': null
        },
        {
          'm': 'GPT-6-Astra',
          't': '',
          'u': 0.8221928571428572,
          'q': [
            null,
            null,
            165.4,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': null
        },
        {
          'm': 'GPT-6-Sol',
          't': '',
          'u': 0.16443857142857143,
          'q': [
            null,
            null,
            827.1,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': null
        },
        {
          'm': 'GPT-6-Luna',
          't': '',
          'u': 0.008221928571428573,
          'q': [
            null,
            null,
            16541.1,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': null
        },
        {
          'm': 'GPT-5.6-Sol',
          't': '',
          'u': 0.21161964285714285,
          'q': [
            null,
            null,
            642.7,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': null
        },
        {
          'm': 'GPT-5.6-Luna',
          't': '',
          'u': 0.016929571428571433,
          'q': [
            null,
            null,
            8033.3,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': null
        },
        {
          'm': 'GPT-5.6-Terra',
          't': '',
          'u': 0.16929571428571433,
          'q': [
            null,
            null,
            803.3,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': null
        },
        {
          'm': 'GPT-6-Astra',
          't': '[Fast]',
          'u': 2.0554821428571426,
          'q': [
            null,
            null,
            66.2,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': null
        },
        {
          'm': 'GPT-6.1-Sol',
          't': '[Fast]',
          'u': 0.3391545535714286,
          'q': [
            null,
            null,
            401,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': null
        },
        {
          'm': 'GPT-6-Sol',
          't': '[Fast]',
          'u': 0.4110964285714286,
          'q': [
            null,
            null,
            330.8,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': null
        },
        {
          'm': 'GPT-6-Luna',
          't': '[Fast]',
          'u': 0.02055482142857143,
          'q': [
            null,
            null,
            6616.5,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': null
        },
        {
          'm': 'GPT-5.6-Sol',
          't': '[Fast]',
          'u': 0.5290491071428572,
          'q': [
            null,
            null,
            257.1,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': null
        },
        {
          'm': 'GPT-5.6-Luna',
          't': '[Fast]',
          'u': 0.04232392857142858,
          'q': [
            null,
            null,
            3213.3,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': null
        },
        {
          'm': 'GPT-5.6-Terra',
          't': '[Fast]',
          'u': 0.42323928571428576,
          'q': [
            null,
            null,
            321.3,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': null
        },
        {
          'm': 'GPT-6.1-Terra',
          't': '[Fast]',
          'u': 0.1695772767857143,
          'q': [
            null,
            null,
            802,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': null
        },
        {
          'm': 'GPT-6.2-Astra',
          't': '',
          'u': 0.6851607142857143,
          'q': [
            null,
            null,
            198.5,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': null
        },
        {
          'm': 'GPT-6.2-Astra',
          't': '[Fast]',
          'u': 1.3703214285714287,
          'q': [
            null,
            null,
            99.2,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': null
        },
        {
          'm': 'GPT-6.2-Sol',
          't': '',
          'u': 0.0904412142857143,
          'q': [
            null,
            null,
            1503.7,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': null
        },
        {
          'm': 'GPT-6.2-Sol',
          't': '[Fast]',
          'u': 0.1808824285714286,
          'q': [
            null,
            null,
            751.9,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': null
        }
      ]
    },
    {
      'slug': 'codex-pro5',
      'name': 'Pro $100',
      'platform': 'Codex',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'codingplan',
      'fee': 100,
      'currency': '$',
      'feeCny': 680,
      'dm': 0,
      'models': [
        {
          'm': 'GPT-6.1-Sol',
          't': '',
          'u': 0.06783091071428574,
          'q': [
            1621.7,
            2902,
            10024.9,
            12822.6
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': null
        },
        {
          'm': 'GPT-6.1-Terra',
          't': '',
          'u': 0.03391545535714287,
          'q': [
            null,
            null,
            20049.9,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': null
        },
        {
          'm': 'GPT-6-Astra',
          't': '',
          'u': 0.41109642857142864,
          'q': [
            267.6,
            478.8,
            1654.1,
            2115.7
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': null
        },
        {
          'm': 'GPT-6-Sol',
          't': '',
          'u': 0.08221928571428572,
          'q': [
            1337.9,
            2394.1,
            8270.6,
            10578.6
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': null
        },
        {
          'm': 'GPT-6-Luna',
          't': '',
          'u': 0.004110964285714286,
          'q': [
            26757.7,
            47882.2,
            165411.3,
            211572.6
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': null
        },
        {
          'm': 'GPT-5.6-Sol',
          't': '',
          'u': 0.10580982142857143,
          'q': [
            1065.9,
            1900,
            6426.6,
            8153.2
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': null
        },
        {
          'm': 'GPT-5.6-Luna',
          't': '',
          'u': 0.008464785714285716,
          'q': [
            13323.5,
            23750.6,
            80332.8,
            101914.8
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': null
        },
        {
          'm': 'GPT-5.6-Terra',
          't': '',
          'u': 0.08464785714285716,
          'q': [
            1332.3,
            2375.1,
            8033.3,
            10191.5
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': null
        },
        {
          'm': 'GPT-6-Astra',
          't': '[Fast]',
          'u': 1.0277410714285715,
          'q': [
            null,
            null,
            661.6,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': null
        },
        {
          'm': 'GPT-6.1-Sol',
          't': '[Fast]',
          'u': 0.16957727678571433,
          'q': [
            null,
            null,
            4010,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': null
        },
        {
          'm': 'GPT-6-Sol',
          't': '[Fast]',
          'u': 0.20554821428571432,
          'q': [
            null,
            null,
            3308.2,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': null
        },
        {
          'm': 'GPT-6-Luna',
          't': '[Fast]',
          'u': 0.010277410714285715,
          'q': [
            null,
            null,
            66164.5,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': null
        },
        {
          'm': 'GPT-5.6-Sol',
          't': '[Fast]',
          'u': 0.26452455357142857,
          'q': [
            null,
            null,
            2570.6,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': null
        },
        {
          'm': 'GPT-5.6-Luna',
          't': '[Fast]',
          'u': 0.02116196428571429,
          'q': [
            null,
            null,
            32133.1,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': null
        },
        {
          'm': 'GPT-5.6-Terra',
          't': '[Fast]',
          'u': 0.2116196428571429,
          'q': [
            null,
            null,
            3213.3,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': null
        },
        {
          'm': 'GPT-6.1-Terra',
          't': '[Fast]',
          'u': 0.08478863839285716,
          'q': [
            null,
            null,
            8019.9,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': null
        },
        {
          'm': 'GPT-6.2-Astra',
          't': '',
          'u': 0.3425803571428572,
          'q': [
            null,
            null,
            1984.9,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': null
        },
        {
          'm': 'GPT-6.2-Astra',
          't': '[Fast]',
          'u': 0.6851607142857143,
          'q': [
            null,
            null,
            992.5,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': null
        },
        {
          'm': 'GPT-6.2-Sol',
          't': '',
          'u': 0.04522060714285715,
          'q': [
            null,
            null,
            15037.4,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': null
        },
        {
          'm': 'GPT-6.2-Sol',
          't': '[Fast]',
          'u': 0.0904412142857143,
          'q': [
            null,
            null,
            7518.7,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': null
        }
      ]
    },
    {
      'slug': 'codex-pro20',
      'name': 'Pro $200',
      'platform': 'Codex',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'codingplan',
      'fee': 200,
      'currency': '$',
      'feeCny': 1360,
      'dm': 0,
      'models': [
        {
          'm': 'GPT-6.1-Sol',
          't': '',
          'u': 0.06783091071428574,
          'q': [
            3243.4,
            5803.9,
            20049.9,
            25645.2
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': null
        },
        {
          'm': 'GPT-6.1-Terra',
          't': '',
          'u': 0.03391545535714287,
          'q': [
            null,
            null,
            40099.7,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': null
        },
        {
          'm': 'GPT-6-Astra',
          't': '',
          'u': 0.41109642857142864,
          'q': [
            535.2,
            957.6,
            3308.2,
            4231.5
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': null
        },
        {
          'm': 'GPT-6-Sol',
          't': '',
          'u': 0.08221928571428572,
          'q': [
            2675.8,
            4788.2,
            16541.1,
            21157.3
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': null
        },
        {
          'm': 'GPT-6-Luna',
          't': '',
          'u': 0.004110964285714286,
          'q': [
            53515.4,
            95764.4,
            330822.6,
            423145.2
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': null
        },
        {
          'm': 'GPT-5.6-Terra',
          't': '',
          'u': 0.08464785714285716,
          'q': [
            2664.7,
            4750.1,
            16066.6,
            20383
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': null
        },
        {
          'm': 'GPT-5.6-Sol',
          't': '',
          'u': 0.10580982142857143,
          'q': [
            2131.8,
            3800.1,
            12853.2,
            16306.4
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': null
        },
        {
          'm': 'GPT-5.6-Luna',
          't': '',
          'u': 0.008464785714285716,
          'q': [
            26647,
            47501.1,
            160665.6,
            203829.5
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': null
        },
        {
          'm': 'GPT-6-Astra',
          't': '[Fast]',
          'u': 1.0277410714285715,
          'q': [
            null,
            null,
            1323.3,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': null
        },
        {
          'm': 'GPT-6.1-Sol',
          't': '[Fast]',
          'u': 0.16957727678571433,
          'q': [
            null,
            null,
            8019.9,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': null
        },
        {
          'm': 'GPT-6-Sol',
          't': '[Fast]',
          'u': 0.20554821428571432,
          'q': [
            null,
            null,
            6616.5,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': null
        },
        {
          'm': 'GPT-6-Luna',
          't': '[Fast]',
          'u': 0.010277410714285715,
          'q': [
            null,
            null,
            132329.1,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': null
        },
        {
          'm': 'GPT-5.6-Sol',
          't': '[Fast]',
          'u': 0.26452455357142857,
          'q': [
            null,
            null,
            5141.3,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': null
        },
        {
          'm': 'GPT-5.6-Luna',
          't': '[Fast]',
          'u': 0.02116196428571429,
          'q': [
            null,
            null,
            64266.2,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': null
        },
        {
          'm': 'GPT-5.6-Terra',
          't': '[Fast]',
          'u': 0.2116196428571429,
          'q': [
            null,
            null,
            6426.6,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': null
        },
        {
          'm': 'GPT-6.1-Terra',
          't': '[Fast]',
          'u': 0.08478863839285716,
          'q': [
            null,
            null,
            16039.9,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': null
        },
        {
          'm': 'GPT-6.2-Astra',
          't': '',
          'u': 0.3425803571428572,
          'q': [
            null,
            null,
            3969.9,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': null
        },
        {
          'm': 'GPT-6.2-Astra',
          't': '[Fast]',
          'u': 0.6851607142857143,
          'q': [
            null,
            null,
            1984.9,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': null
        },
        {
          'm': 'GPT-6.2-Sol',
          't': '',
          'u': 0.04522060714285715,
          'q': [
            null,
            null,
            30074.8,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': null
        },
        {
          'm': 'GPT-6.2-Sol',
          't': '[Fast]',
          'u': 0.0904412142857143,
          'q': [
            null,
            null,
            15037.4,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': null
        },
        {
          'm': 'GPT-6.2-Sol',
          't': '[Ultrafast]',
          'u': 0.27132364285714294,
          'q': [
            null,
            null,
            5012.5,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': null
        }
      ]
    },
    {
      'slug': 'codex-pro500',
      'name': 'Pro $500',
      'platform': 'Codex',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'codingplan',
      'fee': 500,
      'currency': '$',
      'feeCny': 3400,
      'dm': 0,
      'models': [
        {
          'm': 'GPT-6.1-Sol',
          't': '',
          'u': 0.06783091071428574,
          'q': [
            8108.4,
            14509.8,
            50124.6,
            64112.9
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': null
        },
        {
          'm': 'GPT-6.1-Terra',
          't': '',
          'u': 0.03391545535714287,
          'q': [
            null,
            null,
            100249.3,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': null
        },
        {
          'm': 'GPT-6-Astra',
          't': '',
          'u': 0.41109642857142864,
          'q': [
            1337.9,
            2394.1,
            8270.6,
            10578.6
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': null
        },
        {
          'm': 'GPT-6-Sol',
          't': '',
          'u': 0.08221928571428573,
          'q': [
            6689.4,
            11970.6,
            41352.8,
            52893.2
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': null
        },
        {
          'm': 'GPT-6-Luna',
          't': '',
          'u': 0.004110964285714286,
          'q': [
            133788.6,
            239411.1,
            827056.6,
            1057863
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': null
        },
        {
          'm': 'GPT-5.6-Sol',
          't': '',
          'u': 0.10580982142857144,
          'q': [
            5329.4,
            9500.2,
            32133.1,
            40765.9
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': null
        },
        {
          'm': 'GPT-5.6-Luna',
          't': '',
          'u': 0.008464785714285716,
          'q': [
            66617.4,
            118752.8,
            401664,
            509573.8
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': null
        },
        {
          'm': 'GPT-6-Astra',
          't': '[Ultrafast]',
          'u': 3.288771428571429,
          'q': [
            null,
            null,
            1033.8,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': null
        },
        {
          'm': 'GPT-6.1-Sol',
          't': '[Ultrafast]',
          'u': 0.5426472857142859,
          'q': [
            null,
            null,
            6265.6,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': null
        },
        {
          'm': 'GPT-6-Astra',
          't': '[Fast]',
          'u': 1.0277410714285715,
          'q': [
            null,
            null,
            3308.2,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': null
        },
        {
          'm': 'GPT-6.1-Sol',
          't': '[Fast]',
          'u': 0.16957727678571433,
          'q': [
            null,
            null,
            20049.9,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': null
        },
        {
          'm': 'GPT-6-Sol',
          't': '[Fast]',
          'u': 0.20554821428571432,
          'q': [
            null,
            null,
            16541.1,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': null
        },
        {
          'm': 'GPT-6-Luna',
          't': '[Fast]',
          'u': 0.010277410714285715,
          'q': [
            null,
            null,
            330822.6,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': null
        },
        {
          'm': 'GPT-5.6-Terra',
          't': '',
          'u': 0.08464785714285716,
          'q': [
            6661.7,
            11875.3,
            40166.4,
            50957.4
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': null
        },
        {
          'm': 'GPT-5.6-Sol',
          't': '[Fast]',
          'u': 0.2645245535714286,
          'q': [
            null,
            null,
            12853.2,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': null
        },
        {
          'm': 'GPT-5.6-Luna',
          't': '[Fast]',
          'u': 0.02116196428571429,
          'q': [
            null,
            null,
            160665.6,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': null
        },
        {
          'm': 'GPT-5.6-Terra',
          't': '[Fast]',
          'u': 0.2116196428571429,
          'q': [
            null,
            null,
            16066.6,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': null
        },
        {
          'm': 'GPT-6.1-Terra',
          't': '[Fast]',
          'u': 0.08478863839285716,
          'q': [
            null,
            null,
            40099.7,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': null
        },
        {
          'm': 'GPT-6.2-Astra',
          't': '',
          'u': 0.34258035714285723,
          'q': [
            null,
            null,
            9924.7,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': null
        },
        {
          'm': 'GPT-6.2-Astra',
          't': '[Fast]',
          'u': 0.6851607142857145,
          'q': [
            null,
            null,
            4962.3,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': null
        },
        {
          'm': 'GPT-6.2-Astra',
          't': '[Ultrafast]',
          'u': 2.0554821428571435,
          'q': [
            null,
            null,
            1654.1,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': null
        },
        {
          'm': 'GPT-6.2-Sol',
          't': '',
          'u': 0.04522060714285715,
          'q': [
            null,
            null,
            75187,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': null
        },
        {
          'm': 'GPT-6.2-Sol',
          't': '[Fast]',
          'u': 0.0904412142857143,
          'q': [
            null,
            null,
            37593.5,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': null
        },
        {
          'm': 'GPT-6.2-Sol',
          't': '[Ultrafast]',
          'u': 0.27132364285714294,
          'q': [
            null,
            null,
            12531.2,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': null
        }
      ]
    },
    {
      'slug': 'claude-pro',
      'name': 'Pro',
      'platform': 'Claude',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'codingplan',
      'fee': 20,
      'currency': '$',
      'feeCny': 136,
      'dm': 0,
      'models': [
        {
          'm': 'Claude Opus 5.5',
          't': '',
          'u': 0.0533,
          'q': [
            294.1,
            550.5,
            2553.5,
            3774
          ],
          's': 'r',
          'w': 'anthropic',
          'b': 'Claude',
          'p': [
            27.2,
            1.36,
            136
          ],
          'd': '2026-09-22~2026-11-07'
        },
        {
          'm': 'Claude Sonnet 5.5',
          't': '',
          'u': 0.0266,
          'q': [
            589.8,
            1103.9,
            5120.3,
            7567.8
          ],
          's': 'r',
          'w': 'anthropic',
          'b': 'Claude',
          'p': [
            13.6,
            0.68,
            68
          ],
          'd': '2026-09-22~2026-09-27'
        },
        {
          'm': 'Claude Haiku 5.5',
          't': '',
          'u': 0.0026,
          'q': [
            8595.5,
            15381.4,
            53135.9,
            67964.5
          ],
          's': 'r',
          'w': 'anthropic',
          'b': 'Claude',
          'p': [
            0.68,
            0.068,
            3.4
          ],
          'd': '2026-09-22~2026-09-27'
        },
        {
          'm': 'Claude Opus 5',
          't': '',
          'u': 0.059,
          'q': [
            373.1,
            667.7,
            2306.6,
            2950.3
          ],
          's': 'r',
          'w': 'anthropic',
          'b': 'Claude',
          'p': [
            34,
            3.4,
            170
          ],
          'd': '2026-09-14~2026-09-22'
        },
        {
          'm': 'Claude Sonnet 5',
          't': '',
          'u': 0.0236,
          'q': [
            932.8,
            1669.2,
            5766.4,
            7375.6
          ],
          's': 'r',
          'w': 'anthropic',
          'b': 'Claude',
          'p': [
            13.6,
            1.36,
            68
          ],
          'd': '2026-09-14~2026-09-22'
        },
        {
          'm': 'Claude Haiku 4.5',
          't': '',
          'u': 0.0333436946902655,
          'q': [
            null,
            null,
            4078.7,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'Claude',
          'p': null
        },
        {
          'm': 'Claude Fable 5.2',
          't': '',
          'u': 0.2196,
          'q': [
            56.9,
            109,
            619.3,
            1060.5
          ],
          's': 'r',
          'w': 'anthropic',
          'b': 'Claude',
          'p': [
            54.4,
            1.36,
            272
          ],
          'd': '2026-11-09'
        },
        {
          'm': 'Claude Opus 4.8',
          't': '',
          'u': 0.059,
          'q': [
            373.1,
            667.7,
            2306.6,
            2950.3
          ],
          's': 'r',
          'w': 'anthropic',
          'b': 'Claude',
          'p': [
            34,
            3.4,
            170
          ],
          'd': '2026-09-14~2026-09-22'
        }
      ]
    },
    {
      'slug': 'claude-max5',
      'name': 'Max',
      'platform': 'Claude',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'codingplan',
      'fee': 100,
      'currency': '$',
      'feeCny': 680,
      'dm': 0,
      'models': [
        {
          'm': 'Claude Opus 5.5',
          't': '',
          'u': 0.0442,
          'q': [
            1770.5,
            3313.6,
            15369.4,
            22715.7
          ],
          's': 'r',
          'w': 'anthropic',
          'b': 'Claude',
          'p': [
            27.2,
            1.36,
            136
          ],
          'd': '2026-09-29~2026-10-03'
        },
        {
          'm': 'Claude Sonnet 5.5',
          't': '',
          'u': 0.0221,
          'q': [
            3541,
            6627.2,
            30738.7,
            45431.4
          ],
          's': 'r',
          'w': 'anthropic',
          'b': 'Claude',
          'p': [
            13.6,
            0.68,
            68
          ],
          'd': '2026-09-29~2026-10-03'
        },
        {
          'm': 'Claude Haiku 5.5',
          't': '',
          'u': 0.0021,
          'q': [
            51601.2,
            92339,
            318989.3,
            408009.6
          ],
          's': 'r',
          'w': 'anthropic',
          'b': 'Claude',
          'p': [
            0.68,
            0.068,
            3.4
          ],
          'd': '2026-09-29~2026-10-03'
        },
        {
          'm': 'Claude Fable 5.1',
          't': '',
          'u': 0.7871,
          'q': [
            null,
            null,
            863.9,
            null
          ],
          's': 'r',
          'w': 'measured',
          'b': 'Claude',
          'p': null,
          'x': 1,
          'd': '2026-08~2026-09-05'
        },
        {
          'm': 'Claude Fable 5',
          't': '',
          'u': 0.8264,
          'q': [
            133.1,
            238.2,
            822.8,
            1052.4
          ],
          's': 'r',
          'w': 'measured',
          'b': 'Claude',
          'p': [
            68,
            6.8,
            340
          ],
          'd': '2026-08'
        },
        {
          'm': 'Claude Opus 5',
          't': '',
          'u': 0.0972,
          'q': [
            1131.3,
            2024.5,
            6993.6,
            8945.3
          ],
          's': 'r',
          'w': 'measured',
          'b': 'Claude',
          'p': [
            34,
            3.4,
            170
          ],
          'd': '2026-08'
        },
        {
          'm': 'Claude Sonnet 5',
          't': '',
          'u': 0.0389,
          'q': [
            2828.3,
            5061.2,
            17484.1,
            22363.4
          ],
          's': 'r',
          'w': 'measured',
          'b': 'Claude',
          'p': [
            13.6,
            1.36,
            68
          ],
          'd': '2026-08'
        },
        {
          'm': 'Claude Haiku 4.5',
          't': '',
          'u': 0.0333436946902655,
          'q': [
            null,
            null,
            20393.7,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'Claude',
          'p': null
        }
      ]
    },
    {
      'slug': 'claude-max20',
      'name': 'Ultra',
      'platform': 'Claude',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'codingplan',
      'fee': 200,
      'currency': '$',
      'feeCny': 1360,
      'dm': 0,
      'models': [
        {
          'm': 'Claude Opus 5.5',
          't': '',
          'u': 0.0514,
          'q': [
            3045.6,
            5700,
            26438.2,
            39075.4
          ],
          's': 'r',
          'w': 'anthropic',
          'b': 'Claude',
          'p': [
            27.2,
            1.36,
            136
          ],
          'd': '2026-09-22~2026-09-27'
        },
        {
          'm': 'Claude Sonnet 5.5',
          't': '',
          'u': 0.0257,
          'q': [
            6091.2,
            11400,
            52876.5,
            78150.8
          ],
          's': 'r',
          'w': 'anthropic',
          'b': 'Claude',
          'p': [
            13.6,
            0.68,
            68
          ],
          'd': '2026-09-22~2026-09-27'
        },
        {
          'm': 'Claude Haiku 5.5',
          't': '',
          'u': 0.0025,
          'q': [
            88764,
            158840.8,
            548722.8,
            701854.8
          ],
          's': 'r',
          'w': 'anthropic',
          'b': 'Claude',
          'p': [
            0.68,
            0.068,
            3.4
          ],
          'd': '2026-09-22~2026-09-27'
        },
        {
          'm': 'Claude Fable 5.1',
          't': '',
          'u': 0.787,
          'q': [
            null,
            null,
            1728,
            null
          ],
          's': 'r',
          'w': 'measured',
          'b': 'Claude',
          'p': null,
          'x': 1,
          'd': '2026-09-04~2026-09-05'
        },
        {
          'm': 'Claude Fable 5',
          't': '',
          'u': 1.2639,
          'q': [
            174.1,
            311.5,
            1076,
            1376.2
          ],
          's': 'r',
          'w': 'measured',
          'b': 'Claude',
          'p': [
            68,
            6.8,
            340
          ],
          'd': '2026-08'
        },
        {
          'm': 'Claude Opus 5',
          't': '',
          'u': 0.0972,
          'q': [
            2262.6,
            4048.9,
            13987.3,
            17890.7
          ],
          's': 'r',
          'w': 'measured',
          'b': 'Claude',
          'p': [
            34,
            3.4,
            170
          ],
          'd': '2026-08'
        },
        {
          'm': 'Claude Sonnet 5',
          't': '',
          'u': 0.0389,
          'q': [
            5656.6,
            10122.4,
            34968.2,
            44726.7
          ],
          's': 'r',
          'w': 'measured',
          'b': 'Claude',
          'p': [
            13.6,
            1.36,
            68
          ],
          'd': '2026-08'
        },
        {
          'm': 'Claude Haiku 4.5',
          't': '',
          'u': 0.0333436946902655,
          'q': [
            null,
            null,
            40787.3,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'Claude',
          'p': null
        },
        {
          'm': 'Claude Opus 4.8',
          't': '',
          'u': 0.0972,
          'q': [
            2262.6,
            4048.9,
            13987.3,
            17890.7
          ],
          's': 'r',
          'w': 'measured',
          'b': 'Claude',
          'p': [
            34,
            3.4,
            170
          ],
          'd': '2026-08'
        }
      ]
    },
    {
      'slug': 'google-ai-pro',
      'name': 'Pro',
      'platform': 'Antigravity',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'codingplan',
      'fee': 19.99,
      'currency': '$',
      'feeCny': 135.93,
      'dm': 0,
      'models': [
        {
          'm': 'Gemini 4 Neon',
          't': '',
          'u': 0.12439052362500001,
          'q': [
            125.9,
            235.6,
            1092.8,
            1615.1
          ],
          's': 'c',
          'w': null,
          'b': 'Gemini',
          'p': [
            20.4,
            1.02,
            102
          ]
        },
        {
          'm': 'Gemini 4 Carbon',
          't': '',
          'u': 0.20731753937500005,
          'q': [
            75.5,
            141.4,
            655.7,
            969.1
          ],
          's': 'c',
          'w': null,
          'b': 'Gemini',
          'p': [
            13.6,
            0.68,
            68
          ]
        },
        {
          'm': 'Gemini 4 Argon',
          't': '',
          'u': 0.20731753937500005,
          'q': [
            75.5,
            141.4,
            655.7,
            969.1
          ],
          's': 'c',
          'w': null,
          'b': 'Gemini',
          'p': [
            13.6,
            0.68,
            68
          ]
        },
        {
          'm': 'Gemini 4 Hydrogen',
          't': '',
          'u': 0.05923358267857144,
          'q': [
            264.4,
            494.8,
            2294.8,
            3391.8
          ],
          's': 'c',
          'w': null,
          'b': 'Gemini',
          'p': [
            10.2,
            0.51,
            51
          ]
        },
        {
          'm': 'Gemini-3.8-Flash',
          't': '',
          'u': 0.041089088035714295,
          'q': [
            535.2,
            957.6,
            3308.2,
            4231.5
          ],
          's': 'c',
          'w': null,
          'b': 'Gemini',
          'p': [
            5.1,
            0.51,
            25.5
          ]
        },
        {
          'm': 'Claude Sonnet 5.5',
          't': '',
          'u': 1.6585403150000004,
          'q': [
            9.4,
            17.7,
            82,
            121.1
          ],
          's': 'c',
          'w': null,
          'b': 'Claude',
          'p': [
            13.6,
            0.68,
            68
          ]
        },
        {
          'm': 'Claude Opus 5.5',
          't': '',
          'u': 3.317080630000001,
          'q': [
            4.7,
            8.8,
            41,
            60.6
          ],
          's': 'c',
          'w': null,
          'b': 'Claude',
          'p': [
            27.2,
            1.36,
            136
          ]
        }
      ]
    },
    {
      'slug': 'google-ai-ultra-5x',
      'name': 'Ultra 5×',
      'platform': 'Antigravity',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'codingplan',
      'fee': 99.99,
      'currency': '$',
      'feeCny': 679.93,
      'dm': 0,
      'models': [
        {
          'm': 'Gemini 4 Neon',
          't': '',
          'u': 0.10370025393750001,
          'q': [
            755.3,
            1413.6,
            6556.7,
            9690.7
          ],
          's': 'c',
          'w': null,
          'b': 'Gemini',
          'p': [
            20.4,
            1.02,
            102
          ]
        },
        {
          'm': 'Gemini 4 Carbon',
          't': '',
          'u': 0.20740050787500006,
          'q': [
            377.7,
            706.8,
            3278.4,
            4845.4
          ],
          's': 'c',
          'w': null,
          'b': 'Gemini',
          'p': [
            13.6,
            0.68,
            68
          ]
        },
        {
          'm': 'Gemini 4 Argon',
          't': '',
          'u': 0.20740050787500006,
          'q': [
            377.7,
            706.8,
            3278.4,
            4845.4
          ],
          's': 'c',
          'w': null,
          'b': 'Gemini',
          'p': [
            13.6,
            0.68,
            68
          ]
        },
        {
          'm': 'Gemini 4 Hydrogen',
          't': '',
          'u': 0.05185012696875001,
          'q': [
            1510.6,
            2827.2,
            13113.4,
            19381.5
          ],
          's': 'c',
          'w': null,
          'b': 'Gemini',
          'p': [
            10.2,
            0.51,
            51
          ]
        },
        {
          'm': 'Gemini-3.8-Flash',
          't': '',
          'u': 0.035967340406250006,
          'q': [
            3058,
            5472.3,
            18904.2,
            24179.7
          ],
          's': 'c',
          'w': null,
          'b': 'Gemini',
          'p': [
            5.1,
            0.51,
            25.5
          ]
        },
        {
          'm': 'Claude Sonnet 5.5',
          't': '',
          'u': 1.6592040630000005,
          'q': [
            47.2,
            88.4,
            409.8,
            605.7
          ],
          's': 'c',
          'w': null,
          'b': 'Claude',
          'p': [
            13.6,
            0.68,
            68
          ]
        },
        {
          'm': 'Claude Opus 5.5',
          't': '',
          'u': 3.318408126000001,
          'q': [
            23.6,
            44.2,
            204.9,
            302.8
          ],
          's': 'c',
          'w': null,
          'b': 'Claude',
          'p': [
            27.2,
            1.36,
            136
          ]
        }
      ]
    },
    {
      'slug': 'google-ai-ultra-20x',
      'name': 'Ultra 20×',
      'platform': 'Antigravity',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'codingplan',
      'fee': 199.99,
      'currency': '$',
      'feeCny': 1359.93,
      'dm': 0,
      'models': [
        {
          'm': 'Gemini 4 Neon',
          't': '',
          'u': 0.05185271973437501,
          'q': [
            3021.2,
            5654.4,
            26226.8,
            38762.9
          ],
          's': 'c',
          'w': null,
          'b': 'Gemini',
          'p': [
            20.4,
            1.02,
            102
          ]
        },
        {
          'm': 'Gemini 4 Carbon',
          't': '',
          'u': 0.10370543946875004,
          'q': [
            1510.6,
            2827.2,
            13113.4,
            19381.5
          ],
          's': 'c',
          'w': null,
          'b': 'Gemini',
          'p': [
            13.6,
            0.68,
            68
          ]
        },
        {
          'm': 'Gemini 4 Argon',
          't': '',
          'u': 0.10370543946875004,
          'q': [
            1510.6,
            2827.2,
            13113.4,
            19381.5
          ],
          's': 'c',
          'w': null,
          'b': 'Gemini',
          'p': [
            13.6,
            0.68,
            68
          ]
        },
        {
          'm': 'Gemini 4 Hydrogen',
          't': '',
          'u': 0.025926359867187505,
          'q': [
            6042.5,
            11308.8,
            52453.6,
            77525.8
          ],
          's': 'c',
          'w': null,
          'b': 'Gemini',
          'p': [
            10.2,
            0.51,
            51
          ]
        },
        {
          'm': 'Gemini-3.8-Flash',
          't': '',
          'u': 0.017984569476562504,
          'q': [
            12232.1,
            21889,
            75616.6,
            96718.9
          ],
          's': 'c',
          'w': null,
          'b': 'Gemini',
          'p': [
            5.1,
            0.51,
            25.5
          ]
        },
        {
          'm': 'Claude Sonnet 5.5',
          't': '',
          'u': 1.9753417041666677,
          'q': [
            79.3,
            148.4,
            688.5,
            1017.5
          ],
          's': 'c',
          'w': null,
          'b': 'Claude',
          'p': [
            13.6,
            0.68,
            68
          ]
        },
        {
          'm': 'Claude Opus 5.5',
          't': '',
          'u': 3.9506834083333353,
          'q': [
            39.7,
            74.2,
            344.2,
            508.8
          ],
          's': 'c',
          'w': null,
          'b': 'Claude',
          'p': [
            27.2,
            1.36,
            136
          ]
        }
      ]
    },
    {
      'slug': 'commandcode-go',
      'name': 'Go',
      'platform': 'Command Code',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'codingplan',
      'fee': 1,
      'currency': '$',
      'feeCny': 6.8,
      'dm': 1,
      'models': [
        {
          'm': 'Kimi-K3.1-Pro',
          't': '',
          'u': 0.38369000000000003,
          'q': [
            2.9,
            5.1,
            17.7,
            22.7
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': [
            13.6,
            1.36,
            68
          ]
        },
        {
          'm': 'DeepSeek-V4.1-Flash-1017',
          't': '[谷]',
          'u': 0.009042810000000004,
          'q': [
            62.2,
            120.3,
            752,
            1410
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': [
            1.02,
            0.0204,
            4.08
          ]
        },
        {
          'm': 'DeepSeek-V4.1-Flash-1017',
          't': '[峰]',
          'u': 0.018085620000000007,
          'q': [
            31.1,
            60.2,
            376,
            705
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': [
            2.04,
            0.0408,
            8.16
          ]
        },
        {
          'm': 'GLM-5.2',
          't': '',
          'u': 0.22944220000000004,
          'q': [
            7,
            11.6,
            29.6,
            34.4
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': [
            9.52,
            1.768,
            29.92
          ]
        },
        {
          'm': 'Hy3',
          't': '',
          'u': 0.029205150000000006,
          'q': [
            69.5,
            110.2,
            232.8,
            258.4
          ],
          's': 'c',
          'w': null,
          'b': '腾讯混元',
          'p': [
            0.952,
            0.238,
            3.944
          ]
        },
        {
          'm': 'Qwen-3.8-27B',
          't': '',
          'u': 0.049442800000000016,
          'q': [
            23.6,
            41.9,
            137.5,
            172.5
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': [
            2.72,
            0.272,
            20.4
          ]
        },
        {
          'm': 'Qwen-3.7-Max',
          't': '',
          'u': 0.43146,
          'q': [
            3.9,
            6.5,
            15.8,
            18.1
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': [
            17,
            3.4,
            51
          ]
        },
        {
          'm': 'Qwen-3.7-Plus',
          't': '[≤256K]',
          'u': 0.07039360000000003,
          'q': [
            24.3,
            40.1,
            96.6,
            110.5
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': [
            2.72,
            0.544,
            10.88
          ]
        },
        {
          'm': 'Qwen-3.7-Plus',
          't': '[>256K]',
          'u': 0.21118080000000003,
          'q': [
            8.1,
            13.4,
            32.2,
            36.8
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': [
            8.16,
            1.632,
            32.64
          ]
        },
        {
          'm': 'Qwen-3.6-Plus',
          't': '[≤256K]',
          'u': 0.091392,
          'q': [
            19.2,
            31.5,
            74.4,
            84.6
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': [
            3.4,
            0.68,
            20.4
          ]
        },
        {
          'm': 'Qwen-3.6-Plus',
          't': '[>256K]',
          'u': 0.21661400000000008,
          'q': [
            4.8,
            8.7,
            31.4,
            40.9
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': [
            13.6,
            1.36,
            40.8
          ]
        },
        {
          'm': 'GLM-5.3-Flash',
          't': '',
          'u': 0.026057600000000004,
          'q': [
            64.9,
            107.4,
            261,
            299
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': [
            1.02,
            0.204,
            3.4
          ]
        },
        {
          'm': 'Mistral-Large-4',
          't': '',
          'u': 0.25034766666666675,
          'q': [
            4.3,
            7.6,
            27.2,
            35.1
          ],
          's': 'c',
          'w': null,
          'b': 'Mistral AI',
          'p': [
            9.248,
            0.952,
            28.424
          ]
        },
        {
          'm': 'LongCat-2.0',
          't': '',
          'u': 0.018085620000000007,
          'q': [
            31.1,
            60.2,
            376,
            705
          ],
          's': 'c',
          'w': null,
          'b': 'LongCat',
          'p': [
            2.04,
            0.0408,
            8.16
          ]
        },
        {
          'm': 'GLM-5.3',
          't': '',
          'u': 0.22944220000000004,
          'q': [
            7,
            11.6,
            29.6,
            34.4
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': [
            9.52,
            1.768,
            29.92
          ]
        },
        {
          'm': 'Kimi-K2.7-Code',
          't': '',
          'u': 0.18651644444444443,
          'q': [
            9.2,
            15.2,
            36.5,
            41.7
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': [
            6.46,
            1.292,
            27.2
          ]
        },
        {
          'm': 'GLM-5.2-Fast',
          't': '',
          'u': 0.5085833333333334,
          'q': [
            2.9,
            4.9,
            13.4,
            15.8
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': [
            20.4,
            3.4,
            69.7
          ]
        },
        {
          'm': 'MiniMax-M3',
          't': '[≤512K]',
          'u': 0.06599400000000001,
          'q': [
            25.9,
            42.7,
            103,
            117.8
          ],
          's': 'c',
          'w': null,
          'b': 'MiniMax',
          'p': [
            2.04,
            0.408,
            8.16
          ]
        },
        {
          'm': 'MiniMax-M3',
          't': '[>512K]',
          'u': 0.06599400000000001,
          'q': [
            25.9,
            42.7,
            103,
            117.8
          ],
          's': 'c',
          'w': null,
          'b': 'MiniMax',
          'p': [
            2.04,
            0.408,
            8.16
          ]
        },
        {
          'm': 'Kimi-K3',
          't': '',
          'u': 0.43165125000000004,
          'q': [
            2.5,
            4.6,
            15.8,
            20.1
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': [
            20.4,
            2.04,
            102
          ]
        },
        {
          'm': 'DeepSeek-V4-Flash-Fast',
          't': '',
          'u': 0.07046287500000001,
          'q': [
            28.1,
            44.8,
            96.5,
            107.5
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': [
            1.904,
            0.476,
            3.808
          ]
        },
        {
          'm': 'Qwen-3.8-Max',
          't': '',
          'u': 0.35536071428571436,
          'q': [
            3.4,
            6,
            19.1,
            23.8
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': [
            13.6,
            1.7,
            40.8
          ]
        },
        {
          'm': 'Qwen-3.8-Max-0902',
          't': '',
          'u': 0.35536071428571436,
          'q': [
            3.4,
            6,
            19.1,
            23.8
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': [
            13.6,
            1.7,
            40.8
          ]
        },
        {
          'm': 'DeepSeek-V4-Flash-0731',
          't': '[谷]',
          'u': 0.01507135000000001,
          'q': [
            37.3,
            72.2,
            451.2,
            846
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': [
            1.02,
            0.0204,
            4.08
          ]
        },
        {
          'm': 'DeepSeek-V4-Flash-0731',
          't': '[峰]',
          'u': 0.03014270000000002,
          'q': [
            18.7,
            36.1,
            225.6,
            423
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': [
            2.04,
            0.0408,
            8.16
          ]
        },
        {
          'm': 'DeepSeek-V4.1-Flash-1017',
          't': '[Fast] [谷]',
          'u': 0.02944853333333334,
          'q': [
            36,
            64.8,
            230.9,
            299
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': [
            1.088,
            0.1088,
            3.944
          ]
        },
        {
          'm': 'DeepSeek-V4.1-Flash-1017',
          't': '[Fast] [峰]',
          'u': 0.05889706666666668,
          'q': [
            18,
            32.4,
            115.5,
            149.5
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': [
            2.176,
            0.2176,
            7.888
          ]
        },
        {
          'm': 'GPT-5.6-Luna',
          't': '[≤272K]',
          'u': 0.03950233333333334,
          'q': [
            28.6,
            50.9,
            172.1,
            218.4
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            1.36,
            0.136,
            8.16
          ]
        },
        {
          'm': 'GPT-5.6-Luna',
          't': '[>272K]',
          'u': 0.07560466666666668,
          'q': [
            14.4,
            25.8,
            89.9,
            115.5
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            2.72,
            0.272,
            12.24
          ]
        },
        {
          'm': 'DeepSeek-V4-Pro-0813',
          't': '[谷]',
          'u': 0.07200123333333336,
          'q': [
            8.6,
            16.4,
            94.4,
            163.3
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': [
            4.488,
            0.1496,
            13.464
          ]
        },
        {
          'm': 'DeepSeek-V4-Pro-0813',
          't': '[峰]',
          'u': 0.14400246666666672,
          'q': [
            4.3,
            8.2,
            47.2,
            81.7
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': [
            8.976,
            0.2992,
            26.928
          ]
        },
        {
          'm': 'GPT-6-Luna',
          't': '[≤272K]',
          'u': 0.019184500000000004,
          'q': [
            57.3,
            102.6,
            354.5,
            453.4
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            0.68,
            0.068,
            3.4
          ]
        },
        {
          'm': 'GPT-6-Luna',
          't': '[>272K]',
          'u': 0.03695233333333334,
          'q': [
            28.8,
            51.8,
            184,
            238
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            1.36,
            0.136,
            5.1
          ]
        },
        {
          'm': 'Qwen 3.8 Omni Flash',
          't': '',
          'u': 0.028261366666666673,
          'q': [
            38.6,
            69.1,
            240.6,
            308.7
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': [
            1.02,
            0.1088,
            3.196
          ]
        },
        {
          'm': 'Hy4-preview',
          't': '',
          'u': 0.10618993333333338,
          'q': [
            6.8,
            12.9,
            64,
            98.9
          ],
          's': 'c',
          'w': null,
          'b': '腾讯混元',
          'p': [
            5.6712,
            0.2856,
            17.0068
          ]
        },
        {
          'm': 'Qwen-3.8-Flash-Next',
          't': '',
          'u': 0.02882520000000001,
          'q': [
            36.1,
            65.2,
            235.9,
            307.5
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': [
            1.088,
            0.1088,
            3.196
          ]
        },
        {
          'm': 'GLM-5.3-FlashX',
          't': '',
          'u': 0.10829141666666665,
          'q': [
            15.8,
            26.1,
            62.8,
            71.8
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': [
            2.516,
            0.51,
            8.5
          ]
        },
        {
          'm': 'DeepSeek-V4-Flash-Vision-Exp',
          't': '[谷]',
          'u': 0.01507135000000001,
          'q': [
            37.3,
            72.2,
            451.2,
            846
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': [
            1.02,
            0.0204,
            4.08
          ]
        },
        {
          'm': 'DeepSeek-V4-Flash-Vision-Exp',
          't': '[峰]',
          'u': 0.03014270000000002,
          'q': [
            18.7,
            36.1,
            225.6,
            423
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': [
            2.04,
            0.0408,
            8.16
          ]
        },
        {
          'm': 'Muse-Spark-1.3',
          't': '[Contributor]',
          'u': 0.008914233333333339,
          'q': [
            56.2,
            109.6,
            762.8,
            1622.1
          ],
          's': 'c',
          'w': null,
          'b': 'Muse',
          'p': [
            0.68,
            0.0136,
            1.36
          ]
        },
        {
          'm': 'Muse-Spark-1.2',
          't': '[Contributor]',
          'u': 0.008914233333333339,
          'q': [
            56.2,
            109.6,
            762.8,
            1622.1
          ],
          's': 'c',
          'w': null,
          'b': 'Muse',
          'p': [
            0.68,
            0.0136,
            1.36
          ]
        },
        {
          'm': 'Kimi-K2.7-Code-HighSpeed',
          't': '[高速]',
          'u': 0.5595493333333333,
          'q': [
            3.1,
            5.1,
            12.2,
            13.9
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': [
            12.92,
            2.584,
            54.4
          ]
        },
        {
          'm': 'Grok-4.5',
          't': '',
          'u': 0.6824083333333334,
          'q': [
            2.9,
            4.7,
            10,
            11.1
          ],
          's': 'c',
          'w': null,
          'b': 'Grok',
          'p': [
            13.6,
            3.4,
            40.8
          ]
        },
        {
          'm': 'Inkling',
          't': '',
          'u': 0.26145150000000006,
          'q': [
            5.8,
            9.8,
            26,
            30.5
          ],
          's': 'c',
          'w': null,
          'b': 'Inkling',
          'p': [
            6.8,
            1.156,
            27.54
          ]
        },
        {
          'm': 'Inkling-Small',
          't': '',
          'u': 0.14212000000000002,
          'q': [
            11.7,
            19.5,
            47.8,
            55
          ],
          's': 'c',
          'w': null,
          'b': 'Inkling',
          'p': [
            3.4,
            0.68,
            8.16
          ]
        },
        {
          'm': 'MiMo-V2.6-Pro',
          't': '',
          'u': 0.03331337000000002,
          'q': [
            12.8,
            25.2,
            204.1,
            553.2
          ],
          's': 'c',
          'w': null,
          'b': '小米 MiMo',
          'p': [
            2.958,
            0.0245,
            5.916
          ]
        },
        {
          'm': 'MiMo-V2.6-Flash',
          't': '',
          'u': 0.012479926666666674,
          'q': [
            40.1,
            78.3,
            544.9,
            1158.6
          ],
          's': 'c',
          'w': null,
          'b': '小米 MiMo',
          'p': [
            0.952,
            0.019,
            1.904
          ]
        },
        {
          'm': 'Step-5-Preview',
          't': '',
          'u': 0.12524750000000004,
          'q': [
            5.7,
            10.8,
            54.3,
            84.6
          ],
          's': 'c',
          'w': null,
          'b': '阶跃星辰',
          'p': [
            6.8,
            0.34,
            18.36
          ]
        },
        {
          'm': 'step-3.7-flash',
          't': '',
          'u': 0.06064466666666668,
          'q': [
            28.9,
            47.4,
            112.1,
            127.6
          ],
          's': 'c',
          'w': null,
          'b': '阶跃星辰',
          'p': [
            1.36,
            0.272,
            7.82
          ]
        },
        {
          'm': 'step-3.5-flash',
          't': '',
          'u': 0.028200166666666672,
          'q': [
            65,
            105.6,
            241.1,
            272.2
          ],
          's': 'c',
          'w': null,
          'b': '阶跃星辰',
          'p': [
            0.612,
            0.136,
            2.04
          ]
        },
        {
          'm': 'Nemotron-3-Ultra',
          't': '',
          'u': 0.17598400000000003,
          'q': [
            9.7,
            16,
            38.6,
            44.2
          ],
          's': 'c',
          'w': null,
          'b': 'NVIDIA',
          'p': [
            4.08,
            0.816,
            16.32
          ]
        },
        {
          'm': 'Kimi-K2.6',
          't': '',
          'u': 0.24763616666666668,
          'q': [
            6.1,
            10.3,
            27.5,
            32.2
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': [
            6.46,
            1.088,
            27.2
          ]
        },
        {
          'm': 'Kimi-K2.5',
          't': '',
          'u': 0.15795833333333334,
          'q': [
            9.6,
            16.3,
            43,
            50.4
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': [
            4.08,
            0.68,
            20.4
          ]
        },
        {
          'm': 'GLM-5.1',
          't': '',
          'u': 0.38240366666666675,
          'q': [
            4.2,
            7,
            17.8,
            20.6
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': [
            9.52,
            1.768,
            29.92
          ]
        },
        {
          'm': 'GLM-5',
          't': '',
          'u': 0.2887733333333334,
          'q': [
            5.8,
            9.7,
            23.5,
            27
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': [
            6.8,
            1.36,
            21.76
          ]
        },
        {
          'm': 'Qwen-3.7-Flash',
          't': '[≤32K]',
          'u': 0.008855866666666668,
          'q': [
            193.9,
            319.6,
            767.9,
            877.2
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': [
            0.204,
            0.0408,
            0.884
          ]
        },
        {
          'm': 'Qwen-3.7-Flash',
          't': '[32K<上下文≤256K]',
          'u': 0.02933066666666667,
          'q': [
            58.2,
            96.1,
            231.8,
            265.1
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': [
            0.68,
            0.136,
            2.72
          ]
        },
        {
          'm': 'Qwen-3.7-Flash',
          't': '[>256K]',
          'u': 0.05866133333333334,
          'q': [
            29.1,
            48.1,
            115.9,
            132.6
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': [
            1.36,
            0.272,
            5.44
          ]
        },
        {
          'm': 'Qwen-3.6-Max-Preview',
          't': '',
          'u': 0.39603200000000005,
          'q': [
            4.4,
            7.3,
            17.2,
            19.5
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': [
            8.84,
            1.768,
            53.04
          ]
        },
        {
          'm': 'MiniMax-M2.7',
          't': '',
          'u': 0.08799200000000001,
          'q': [
            19.4,
            32,
            77.3,
            88.4
          ],
          's': 'c',
          'w': null,
          'b': 'MiniMax',
          'p': [
            2.04,
            0.408,
            8.16
          ]
        },
        {
          'm': 'MiniMax-M2.5',
          't': '',
          'u': 0.0558535,
          'q': [
            19.2,
            34.5,
            121.7,
            157.1
          ],
          's': 'c',
          'w': null,
          'b': 'MiniMax',
          'p': [
            2.04,
            0.204,
            8.16
          ]
        },
        {
          'm': 'Ling 3.1 Flash',
          't': '',
          'u': 0.08629200000000002,
          'q': [
            19.5,
            32.3,
            78.8,
            90.4
          ],
          's': 'c',
          'w': null,
          'b': 'inclusionAI',
          'p': [
            2.04,
            0.408,
            6.12
          ]
        },
        {
          'm': 'Ling 3.1 Flash 1019',
          't': '',
          'u': 0.08629200000000002,
          'q': [
            19.5,
            32.3,
            78.8,
            90.4
          ],
          's': 'c',
          'w': null,
          'b': 'inclusionAI',
          'p': [
            2.04,
            0.408,
            6.12
          ]
        },
        {
          'm': 'Muse Spark Open',
          't': '',
          'u': 0.255255,
          'q': [
            4.6,
            8.2,
            26.6,
            33.3
          ],
          's': 'c',
          'w': null,
          'b': 'Muse',
          'p': [
            8.5,
            1.02,
            28.9
          ]
        },
        {
          'm': 'Nemotron 3.5 Super VL',
          't': '',
          'u': 0.05696133333333335,
          'q': [
            29.3,
            48.6,
            119.4,
            137.1
          ],
          's': 'c',
          'w': null,
          'b': 'NVIDIA',
          'p': [
            1.36,
            0.272,
            3.4
          ]
        },
        {
          'm': 'MiniMax-M3.1-Flash',
          't': '',
          'u': 0.02792675,
          'q': [
            38.4,
            69,
            243.5,
            314.2
          ],
          's': 'c',
          'w': null,
          'b': 'MiniMax',
          'p': [
            1.02,
            0.102,
            4.08
          ]
        },
        {
          'm': 'Ornith 1.5 122B',
          't': '',
          'u': 0.03407366666666668,
          'q': [
            36.1,
            63.5,
            199.6,
            246.5
          ],
          's': 'c',
          'w': null,
          'b': 'Ornith',
          'p': [
            1.088,
            0.136,
            4.352
          ]
        },
        {
          'm': 'Qwen4-Max',
          't': '',
          'u': 0.19042125000000007,
          'q': [
            3.8,
            7.2,
            35.7,
            55.2
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': [
            10.2,
            0.51,
            30.6
          ]
        },
        {
          'm': 'Hy4-Flash',
          't': '',
          'u': 0.008753016666666672,
          'q': [
            81,
            153.2,
            776.9,
            1217.5
          ],
          's': 'c',
          'w': null,
          'b': '腾讯混元',
          'p': [
            0.476,
            0.0204,
            1.9108
          ]
        },
        {
          'm': 'Hy4',
          't': '',
          'u': 0.10618993333333338,
          'q': [
            6.8,
            12.9,
            64,
            98.9
          ],
          's': 'c',
          'w': null,
          'b': '腾讯混元',
          'p': [
            5.6712,
            0.2856,
            17.0068
          ]
        },
        {
          'm': 'Muse Ember',
          't': '',
          'u': 0.012756800000000004,
          'q': [
            56.4,
            106.6,
            533,
            827.1
          ],
          's': 'c',
          'w': null,
          'b': 'Muse',
          'p': [
            0.68,
            0.0272,
            3.4
          ]
        },
        {
          'm': 'Inkling 2 Mini',
          't': '',
          'u': 0.021998000000000004,
          'q': [
            77.7,
            128.2,
            309.1,
            353.5
          ],
          's': 'c',
          'w': null,
          'b': 'Inkling',
          'p': [
            0.51,
            0.102,
            2.04
          ]
        }
      ]
    },
    {
      'slug': 'commandcode-goat',
      'name': 'GOAT',
      'platform': 'Command Code',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'codingplan',
      'fee': 10,
      'currency': '$',
      'feeCny': 68,
      'dm': 1,
      'models': [
        {
          'm': 'Kimi-K3.1-Pro',
          't': '',
          'u': 1.1510700000000003,
          'q': [
            9.6,
            17.1,
            59.1,
            75.6
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': [
            13.6,
            1.36,
            68
          ]
        },
        {
          'm': 'GPT-5.6-Sol',
          't': '[≤272K]',
          'u': 2.962675,
          'q': [
            3.8,
            6.8,
            23,
            29.1
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            34,
            3.4,
            204
          ]
        },
        {
          'm': 'GPT-5.6-Sol',
          't': '[>272K]',
          'u': 5.670350000000001,
          'q': [
            1.9,
            3.4,
            12,
            15.4
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            68,
            6.8,
            306
          ]
        },
        {
          'm': 'GLM-5.2',
          't': '',
          'u': 0.3004,
          'q': [
            null,
            null,
            226.4,
            null
          ],
          's': 'r',
          'w': 'standard',
          'b': '智谱 GLM',
          'p': [
            9.52,
            1.768,
            29.92
          ],
          'x': 1,
          'd': '2026-09-30'
        },
        {
          'm': 'Hy3',
          't': '',
          'u': 0.0442,
          'q': [
            243.4,
            437.1,
            1539,
            1983.6
          ],
          's': 'r',
          'w': 'standard',
          'b': '腾讯混元',
          'p': [
            0.952,
            0.238,
            3.944
          ],
          'd': '2026-09-30'
        },
        {
          'm': 'Qwen-3.8-27B',
          't': '',
          'u': 0.07063257142857145,
          'q': [
            165.5,
            293.4,
            962.7,
            1207.7
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': [
            2.72,
            0.272,
            20.4
          ]
        },
        {
          'm': 'DeepSeek-V4-Flash-0731',
          't': '[谷]',
          'u': 0.01507135000000001,
          'q': [
            373.4,
            721.9,
            4511.9,
            8459.8
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': [
            1.02,
            0.0204,
            4.08
          ]
        },
        {
          'm': 'DeepSeek-V4-Flash-0731',
          't': '[峰]',
          'u': 0.03014270000000002,
          'q': [
            186.7,
            360.9,
            2255.9,
            4229.9
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': [
            2.04,
            0.0408,
            8.16
          ]
        },
        {
          'm': 'DeepSeek-V4.1-Flash-1017',
          't': '[谷]',
          'u': 0.009042810000000005,
          'q': [
            622.3,
            1203.2,
            7519.8,
            14099.6
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': [
            1.02,
            0.0204,
            4.08
          ]
        },
        {
          'm': 'DeepSeek-V4.1-Flash-1017',
          't': '[峰]',
          'u': 0.01808562000000001,
          'q': [
            311.2,
            601.6,
            3759.9,
            7049.8
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': [
            2.04,
            0.0408,
            8.16
          ]
        },
        {
          'm': 'DeepSeek-V4.1-Flash-1017',
          't': '[Fast] [谷]',
          'u': 0.02944853333333334,
          'q': [
            360.4,
            648.4,
            2309.1,
            2989.8
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': [
            1.088,
            0.1088,
            3.944
          ]
        },
        {
          'm': 'DeepSeek-V4.1-Flash-1017',
          't': '[Fast] [峰]',
          'u': 0.05889706666666668,
          'q': [
            180.2,
            324.2,
            1154.6,
            1494.9
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': [
            2.176,
            0.2176,
            7.888
          ]
        },
        {
          'm': 'Kimi-K2.7-Code',
          't': '',
          'u': 0.2758,
          'q': [
            62.1,
            102.5,
            246.6,
            281.8
          ],
          's': 'r',
          'w': 'standard',
          'b': 'Kimi',
          'p': [
            6.46,
            1.292,
            27.2
          ],
          'd': '2026-09-30'
        },
        {
          'm': 'GLM-5.3-Flash',
          't': '',
          'u': 0.0367,
          'q': [
            460.6,
            761.9,
            1851.7,
            2121.4
          ],
          's': 'r',
          'w': 'standard',
          'b': '智谱 GLM',
          'p': [
            1.02,
            0.204,
            3.4
          ],
          'd': '2026-10-31'
        },
        {
          'm': 'LongCat-2.0',
          't': '',
          'u': 0.0263,
          'q': [
            null,
            null,
            2588,
            null
          ],
          's': 'r',
          'w': 'standard',
          'b': 'LongCat',
          'p': [
            2.04,
            0.0408,
            8.16
          ],
          'x': 1,
          'd': '2026-09-30'
        },
        {
          'm': 'MiniMax-M3',
          't': '[≤512K]',
          'u': 0.11233021276595746,
          'q': [
            152.1,
            251,
            605.4,
            692.2
          ],
          's': 'c',
          'w': null,
          'b': 'MiniMax',
          'p': [
            2.04,
            0.408,
            8.16
          ]
        },
        {
          'm': 'MiniMax-M3',
          't': '[>512K]',
          'u': 0.11233021276595746,
          'q': [
            152.1,
            251,
            605.4,
            692.2
          ],
          's': 'c',
          'w': null,
          'b': 'MiniMax',
          'p': [
            2.04,
            0.408,
            8.16
          ]
        },
        {
          'm': 'Gemini-3.8-Flash',
          't': '',
          'u': 0.3749,
          'q': [
            null,
            null,
            181.4,
            null
          ],
          's': 'r',
          'w': 'standard',
          'b': 'Gemini',
          'p': [
            10.2,
            1.02,
            51
          ],
          'x': 1,
          'd': '2026-09-30'
        },
        {
          'm': 'Mistral-Large-4',
          't': '',
          'u': 0.7510430000000003,
          'q': [
            14.2,
            25.5,
            90.5,
            117.1
          ],
          's': 'c',
          'w': null,
          'b': 'Mistral AI',
          'p': [
            9.248,
            0.952,
            28.424
          ]
        },
        {
          'm': 'Qwen-3.7-Max',
          't': '',
          'u': 1.3074545454545454,
          'q': [
            12.9,
            21.3,
            52,
            59.6
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': [
            17,
            3.4,
            51
          ]
        },
        {
          'm': 'Qwen-3.7-Plus',
          't': '[≤256K]',
          'u': 0.21331393939393944,
          'q': [
            80.1,
            132.2,
            318.8,
            364.5
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': [
            2.72,
            0.544,
            10.88
          ]
        },
        {
          'm': 'Qwen-3.7-Plus',
          't': '[>256K]',
          'u': 0.6399418181818183,
          'q': [
            26.7,
            44.1,
            106.3,
            121.5
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': [
            8.16,
            1.632,
            32.64
          ]
        },
        {
          'm': 'Qwen-3.6-Plus',
          't': '[≤256K]',
          'u': 0.27694545454545455,
          'q': [
            63.5,
            104.1,
            245.5,
            279.3
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': [
            3.4,
            0.68,
            20.4
          ]
        },
        {
          'm': 'Qwen-3.6-Plus',
          't': '[>256K]',
          'u': 0.6564060606060608,
          'q': [
            15.9,
            28.7,
            103.6,
            134.9
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': [
            13.6,
            1.36,
            40.8
          ]
        },
        {
          'm': 'GPT-5.6-Luna',
          't': '[≤272K]',
          'u': 0.11850700000000003,
          'q': [
            95.2,
            169.6,
            573.8,
            728
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            1.36,
            0.136,
            8.16
          ]
        },
        {
          'm': 'GPT-5.6-Luna',
          't': '[>272K]',
          'u': 0.22681400000000007,
          'q': [
            47.9,
            85.8,
            299.8,
            385.1
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            2.72,
            0.272,
            12.24
          ]
        },
        {
          'm': 'Qwen-3.8-Max',
          't': '',
          'u': 1.2437625000000003,
          'q': [
            9.7,
            17.1,
            54.7,
            68
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': [
            13.6,
            1.7,
            40.8
          ]
        },
        {
          'm': 'Kimi-K3',
          't': '',
          'u': 1.6832,
          'q': [
            6.5,
            11.7,
            40.4,
            51.7
          ],
          's': 'r',
          'w': 'standard',
          'b': 'Kimi',
          'p': [
            20.4,
            2.04,
            102
          ],
          'd': '2026-09-30'
        },
        {
          'm': 'DeepSeek-V4-Pro-0813',
          't': '[谷]',
          'u': 0.2160037000000001,
          'q': [
            28.6,
            54.8,
            314.8,
            544.5
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': [
            4.488,
            0.1496,
            13.464
          ]
        },
        {
          'm': 'DeepSeek-V4-Pro-0813',
          't': '[峰]',
          'u': 0.4320074000000002,
          'q': [
            14.3,
            27.4,
            157.4,
            272.2
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': [
            8.976,
            0.2992,
            26.928
          ]
        },
        {
          'm': 'Claude Sonnet 5.5',
          't': '',
          'u': 1.5962,
          'q': [
            4.9,
            9.2,
            42.6,
            62.9
          ],
          's': 'r',
          'w': 'standard',
          'b': 'Claude',
          'p': [
            13.6,
            0.68,
            68
          ],
          'd': '2026-09-30'
        },
        {
          'm': 'Claude Haiku 5.5',
          't': '[≤100K]',
          'u': 0.057553500000000014,
          'q': [
            191.1,
            342,
            1181.5,
            1511.2
          ],
          's': 'c',
          'w': null,
          'b': 'Claude',
          'p': [
            0.68,
            0.068,
            3.4
          ]
        },
        {
          'm': 'Claude Haiku 5.5',
          't': '[>100K]',
          'u': 0.28776750000000006,
          'q': [
            38.2,
            68.4,
            236.3,
            302.2
          ],
          's': 'c',
          'w': null,
          'b': 'Claude',
          'p': [
            3.4,
            0.34,
            17
          ]
        },
        {
          'm': 'GPT-6-Luna',
          't': '[≤272K]',
          'u': 0.057553500000000014,
          'q': [
            191.1,
            342,
            1181.5,
            1511.2
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            0.68,
            0.068,
            3.4
          ]
        },
        {
          'm': 'GPT-6-Luna',
          't': '[>272K]',
          'u': 0.11085700000000002,
          'q': [
            96.1,
            172.7,
            613.4,
            793.3
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            1.36,
            0.136,
            5.1
          ]
        },
        {
          'm': 'Qwen 3.8 Omni Flash',
          't': '',
          'u': 0.08478410000000002,
          'q': [
            128.6,
            230.4,
            802,
            1029
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': [
            1.02,
            0.1088,
            3.196
          ]
        },
        {
          'm': 'Qwen-3.8-Max-0902',
          't': '',
          'u': 1.2437625000000003,
          'q': [
            9.7,
            17.1,
            54.7,
            68
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': [
            13.6,
            1.7,
            40.8
          ]
        },
        {
          'm': 'Hy4-preview',
          't': '',
          'u': 0.3058,
          'q': [
            23.7,
            44.8,
            222.4,
            343.3
          ],
          's': 'r',
          'w': 'standard',
          'b': '腾讯混元',
          'p': [
            5.6712,
            0.2856,
            17.0068
          ],
          'd': '2026-09-30'
        },
        {
          'm': 'Qwen-3.8-Flash-Next',
          't': '',
          'u': 0.08647560000000001,
          'q': [
            120.5,
            217.3,
            786.3,
            1024.9
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': [
            1.088,
            0.1088,
            3.196
          ]
        },
        {
          'm': 'GLM-5.3-FlashX',
          't': '',
          'u': 0.3001,
          'q': [
            null,
            null,
            226.6,
            null
          ],
          's': 'r',
          'w': 'standard',
          'b': '智谱 GLM',
          'p': [
            2.516,
            0.51,
            8.5
          ],
          'x': 1,
          'd': '2026-09-30'
        },
        {
          'm': 'DeepSeek-V4-Flash-Vision-Exp',
          't': '[谷]',
          'u': 0.045214050000000026,
          'q': [
            124.5,
            240.6,
            1504,
            2819.9
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': [
            1.02,
            0.0204,
            4.08
          ]
        },
        {
          'm': 'DeepSeek-V4-Flash-Vision-Exp',
          't': '[峰]',
          'u': 0.09042810000000005,
          'q': [
            62.2,
            120.3,
            752,
            1410
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': [
            2.04,
            0.0408,
            8.16
          ]
        },
        {
          'm': 'DeepSeek-V4-Flash-Fast',
          't': '',
          'u': 0.2642,
          'q': [
            null,
            null,
            257.4,
            null
          ],
          's': 'r',
          'w': 'standard',
          'b': 'DeepSeek',
          'p': [
            1.904,
            0.476,
            3.808
          ],
          'x': 1,
          'd': '2026-09-30'
        },
        {
          'm': 'GLM-5.3',
          't': '',
          'u': 0.3224,
          'q': [
            49.5,
            82.8,
            210.9,
            244.4
          ],
          's': 'r',
          'w': 'standard',
          'b': '智谱 GLM',
          'p': [
            9.52,
            1.768,
            29.92
          ],
          'd': '2026-11-13'
        },
        {
          'm': 'Muse-Spark-1.3',
          't': '',
          'u': 0.6733,
          'q': [
            null,
            null,
            101,
            null
          ],
          's': 'r',
          'w': 'standard',
          'b': 'Muse',
          'p': [
            8.5,
            1.02,
            28.9
          ],
          'x': 1,
          'd': '2026-09-30'
        },
        {
          'm': 'Muse-Spark-1.3',
          't': '[Contributor]',
          'u': 0.026742700000000015,
          'q': [
            187.2,
            365.4,
            2542.7,
            5407
          ],
          's': 'c',
          'w': null,
          'b': 'Muse',
          'p': [
            0.68,
            0.0136,
            1.36
          ]
        },
        {
          'm': 'Muse-Spark-1.2',
          't': '',
          'u': 0.6733,
          'q': [
            null,
            null,
            101,
            null
          ],
          's': 'r',
          'w': 'standard',
          'b': 'Muse',
          'p': [
            8.5,
            1.02,
            28.9
          ],
          'x': 1,
          'd': '2026-09-30'
        },
        {
          'm': 'Muse-Spark-1.2',
          't': '[Contributor]',
          'u': 0.026742700000000015,
          'q': [
            187.2,
            365.4,
            2542.7,
            5407
          ],
          's': 'c',
          'w': null,
          'b': 'Muse',
          'p': [
            0.68,
            0.0136,
            1.36
          ]
        },
        {
          'm': 'Kimi-K2.7-Code-HighSpeed',
          't': '[高速]',
          'u': 1.6786480000000001,
          'q': [
            10.2,
            16.8,
            40.5,
            46.3
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': [
            12.92,
            2.584,
            54.4
          ]
        },
        {
          'm': 'Grok-4.5',
          't': '',
          'u': 2.0988,
          'q': [
            6.5,
            11.2,
            32.4,
            39
          ],
          's': 'r',
          'w': 'standard',
          'b': 'Grok',
          'p': [
            13.6,
            3.4,
            40.8
          ],
          'd': '2026-09-30'
        },
        {
          'm': 'Grok-4.6',
          't': '[≤200K]',
          'u': 2.0472249999999996,
          'q': [
            9.8,
            15.6,
            33.2,
            36.9
          ],
          's': 'c',
          'w': null,
          'b': 'Grok',
          'p': [
            13.6,
            3.4,
            40.8
          ]
        },
        {
          'm': 'Grok-4.6',
          't': '[>200K]',
          'u': 4.094449999999999,
          'q': [
            4.9,
            7.8,
            16.6,
            18.5
          ],
          's': 'c',
          'w': null,
          'b': 'Grok',
          'p': [
            27.2,
            6.8,
            81.6
          ]
        },
        {
          'm': 'Grok-4.7',
          't': '[≤200K]',
          'u': 2.0472249999999996,
          'q': [
            9.8,
            15.6,
            33.2,
            36.9
          ],
          's': 'c',
          'w': null,
          'b': 'Grok',
          'p': [
            13.6,
            3.4,
            40.8
          ]
        },
        {
          'm': 'Grok-4.7',
          't': '[>200K]',
          'u': 4.094449999999999,
          'q': [
            4.9,
            7.8,
            16.6,
            18.5
          ],
          's': 'c',
          'w': null,
          'b': 'Grok',
          'p': [
            27.2,
            6.8,
            81.6
          ]
        },
        {
          'm': 'Gemini-3.7-Flash',
          't': '',
          'u': 0.4205,
          'q': [
            26.2,
            46.8,
            161.7,
            206.8
          ],
          's': 'r',
          'w': 'standard',
          'b': 'Gemini',
          'p': [
            10.2,
            1.02,
            51
          ],
          'd': '2026-09-30'
        },
        {
          'm': 'GLM-5.2-Fast',
          't': '',
          'u': 2.0795,
          'q': [
            null,
            null,
            32.7,
            null
          ],
          's': 'r',
          'w': 'standard',
          'b': '智谱 GLM',
          'p': [
            20.4,
            3.4,
            69.7
          ],
          'x': 1,
          'd': '2026-09-30'
        },
        {
          'm': 'Inkling',
          't': '',
          'u': 0.7143,
          'q': [
            null,
            null,
            95.2,
            null
          ],
          's': 'r',
          'w': 'standard',
          'b': 'Inkling',
          'p': [
            6.8,
            1.156,
            27.54
          ],
          'x': 1,
          'd': '2026-09-30'
        },
        {
          'm': 'Inkling-Small',
          't': '',
          'u': 0.3926,
          'q': [
            null,
            null,
            173.2,
            null
          ],
          's': 'r',
          'w': 'standard',
          'b': 'Inkling',
          'p': [
            3.4,
            0.68,
            8.16
          ],
          'x': 1,
          'd': '2026-09-30'
        },
        {
          'm': 'MiMo-V2.6-Pro',
          't': '',
          'u': 0.0931,
          'q': [
            45.7,
            90.2,
            730.7,
            1980.5
          ],
          's': 'r',
          'w': 'standard',
          'b': '小米 MiMo',
          'p': [
            2.958,
            0.0245,
            5.916
          ],
          'd': '2026-09-30'
        },
        {
          'm': 'MiMo-V2.6-Flash',
          't': '',
          'u': 0.0353,
          'q': [
            141.9,
            276.8,
            1926.5,
            4096.5
          ],
          's': 'r',
          'w': 'standard',
          'b': '小米 MiMo',
          'p': [
            0.952,
            0.019,
            1.904
          ],
          'd': '2026-09-30'
        },
        {
          'm': 'MiMo-V2.6-Pro',
          't': '[UltraSpeed]',
          'u': 1.9988022000000012,
          'q': [
            2.1,
            4.2,
            34,
            92.2
          ],
          's': 'c',
          'w': null,
          'b': '小米 MiMo',
          'p': [
            29.58,
            0.2448,
            59.16
          ]
        },
        {
          'm': 'Step-5-Preview',
          't': '',
          'u': 2.4373,
          'q': [
            3,
            5.6,
            27.9,
            43.3
          ],
          's': 'r',
          'w': 'standard',
          'b': '阶跃星辰',
          'p': [
            6.8,
            0.34,
            18.36
          ],
          'd': '2026-09-30'
        },
        {
          'm': 'step-3.7-flash',
          't': '',
          'u': 1.2143,
          'q': [
            14.5,
            23.7,
            56,
            63.6
          ],
          's': 'r',
          'w': 'standard',
          'b': '阶跃星辰',
          'p': [
            1.36,
            0.272,
            7.82
          ],
          'd': '2026-09-30'
        },
        {
          'm': 'step-3.5-flash',
          't': '',
          'u': 0.569,
          'q': [
            29.6,
            49,
            119.5,
            137
          ],
          's': 'r',
          'w': 'standard',
          'b': '阶跃星辰',
          'p': [
            0.612,
            0.136,
            2.04
          ],
          'd': '2026-09-30'
        },
        {
          'm': 'Nemotron-3-Ultra',
          't': '',
          'u': 0.4875,
          'q': [
            null,
            null,
            139.5,
            null
          ],
          's': 'r',
          'w': 'standard',
          'b': 'NVIDIA',
          'p': [
            4.08,
            0.816,
            16.32
          ],
          'x': 1,
          'd': '2026-09-30'
        },
        {
          'm': 'Kimi-K2.6',
          't': '',
          'u': 0.6766,
          'q': [
            null,
            null,
            100.5,
            null
          ],
          's': 'r',
          'w': 'standard',
          'b': 'Kimi',
          'p': [
            6.46,
            1.088,
            27.2
          ],
          'x': 1,
          'd': '2026-09-30'
        },
        {
          'm': 'Kimi-K2.5',
          't': '',
          'u': 0.4317,
          'q': [
            null,
            null,
            157.5,
            null
          ],
          's': 'r',
          'w': 'standard',
          'b': 'Kimi',
          'p': [
            4.08,
            0.68,
            20.4
          ],
          'x': 1,
          'd': '2026-09-30'
        },
        {
          'm': 'GLM-5.1',
          't': '',
          'u': 1.051,
          'q': [
            null,
            null,
            64.7,
            null
          ],
          's': 'r',
          'w': 'standard',
          'b': '智谱 GLM',
          'p': [
            9.52,
            1.768,
            29.92
          ],
          'x': 1,
          'd': '2026-09-30'
        },
        {
          'm': 'GLM-5',
          't': '',
          'u': 0.7991,
          'q': [
            null,
            null,
            85.1,
            null
          ],
          's': 'r',
          'w': 'standard',
          'b': '智谱 GLM',
          'p': [
            6.8,
            1.36,
            21.76
          ],
          'x': 1,
          'd': '2026-09-30'
        },
        {
          'm': 'Qwen-3.7-Flash',
          't': '[≤32K]',
          'u': 0.026567600000000004,
          'q': [
            646.2,
            1065.3,
            2559.5,
            2924.1
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': [
            0.204,
            0.0408,
            0.884
          ]
        },
        {
          'm': 'Qwen-3.7-Flash',
          't': '[32K<上下文≤256K]',
          'u': 0.08799200000000003,
          'q': [
            194.2,
            320.4,
            772.8,
            883.7
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': [
            0.68,
            0.136,
            2.72
          ]
        },
        {
          'm': 'Qwen-3.7-Flash',
          't': '[>256K]',
          'u': 0.17598400000000006,
          'q': [
            97.1,
            160.2,
            386.4,
            441.8
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': [
            1.36,
            0.272,
            5.44
          ]
        },
        {
          'm': 'Qwen-3.6-Max-Preview',
          't': '',
          'u': 1.188096,
          'q': [
            14.8,
            24.3,
            57.2,
            65.1
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': [
            8.84,
            1.768,
            53.04
          ]
        },
        {
          'm': 'MiniMax-M2.7',
          't': '',
          'u': 0.2601,
          'q': [
            65.7,
            108.4,
            261.4,
            298.9
          ],
          's': 'r',
          'w': 'standard',
          'b': 'MiniMax',
          'p': [
            2.04,
            0.408,
            8.16
          ],
          'd': '2026-09-30'
        },
        {
          'm': 'MiniMax-M2.5',
          't': '',
          'u': 0.1448,
          'q': [
            null,
            null,
            469.5,
            null
          ],
          's': 'r',
          'w': 'standard',
          'b': 'MiniMax',
          'p': [
            2.04,
            0.204,
            8.16
          ],
          'x': 1,
          'd': '2026-09-30'
        },
        {
          'm': 'Ling 3.1 Flash',
          't': '',
          'u': 0.0682,
          'q': [
            null,
            null,
            997.2,
            null
          ],
          's': 'r',
          'w': 'standard',
          'b': 'inclusionAI',
          'p': [
            2.04,
            0.408,
            6.12
          ],
          'x': 1,
          'd': '2026-09-30'
        },
        {
          'm': 'Ling 3.1 Flash 1019',
          't': '',
          'u': 0.0682,
          'q': [
            null,
            null,
            997.2,
            null
          ],
          's': 'r',
          'w': 'standard',
          'b': 'inclusionAI',
          'p': [
            2.04,
            0.408,
            6.12
          ],
          'x': 1,
          'd': '2026-11-04'
        },
        {
          'm': 'Muse Spark Open',
          't': '',
          'u': 0.7657650000000001,
          'q': [
            15.4,
            27.3,
            88.8,
            111
          ],
          's': 'c',
          'w': null,
          'b': 'Muse',
          'p': [
            8.5,
            1.02,
            28.9
          ]
        },
        {
          'm': 'Nemotron 3.5 Super VL',
          't': '',
          'u': 0.17088400000000004,
          'q': [
            97.8,
            162.1,
            397.9,
            457
          ],
          's': 'c',
          'w': null,
          'b': 'NVIDIA',
          'p': [
            1.36,
            0.272,
            3.4
          ]
        },
        {
          'm': 'Qwen-3.8-Max-Prime',
          't': '',
          'u': 2.4875250000000007,
          'q': [
            4.8,
            8.5,
            27.3,
            34
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': [
            27.2,
            3.4,
            81.6
          ]
        },
        {
          'm': 'MiniMax-M3.1-Flash',
          't': '',
          'u': 0.08378025000000001,
          'q': [
            127.9,
            229.8,
            811.6,
            1047.3
          ],
          's': 'c',
          'w': null,
          'b': 'MiniMax',
          'p': [
            1.02,
            0.102,
            4.08
          ]
        },
        {
          'm': 'Ornith 1.5 122B',
          't': '',
          'u': 0.10222100000000003,
          'q': [
            120.4,
            211.7,
            665.2,
            821.7
          ],
          's': 'c',
          'w': null,
          'b': 'Ornith',
          'p': [
            1.088,
            0.136,
            4.352
          ]
        },
        {
          'm': 'Qwen4-Max',
          't': '',
          'u': 0.7616850000000003,
          'q': [
            9.5,
            17.9,
            89.3,
            138.1
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': [
            10.2,
            0.51,
            30.6
          ]
        },
        {
          'm': 'Hy4-Flash',
          't': '',
          'u': 0.0334,
          'q': [
            212.3,
            401.7,
            2037.3,
            3192.9
          ],
          's': 'r',
          'w': 'standard',
          'b': '腾讯混元',
          'p': [
            0.476,
            0.0204,
            1.9108
          ],
          'd': '2026-11-17'
        },
        {
          'm': 'Hy4',
          't': '',
          'u': 0.3058,
          'q': [
            23.7,
            44.8,
            222.4,
            343.3
          ],
          's': 'r',
          'w': 'standard',
          'b': '腾讯混元',
          'p': [
            5.6712,
            0.2856,
            17.0068
          ],
          'd': '2026-11-18'
        },
        {
          'm': 'Muse Ember',
          't': '',
          'u': 0.0366,
          'q': [
            196.5,
            371.2,
            1856.1,
            2880.1
          ],
          's': 'r',
          'w': 'standard',
          'b': 'Muse',
          'p': [
            0.68,
            0.0272,
            3.4
          ],
          'd': '2026-11-10'
        },
        {
          'm': 'Inkling 2 Mini',
          't': '',
          'u': 0.08799200000000003,
          'q': [
            194.2,
            320.4,
            772.8,
            883.7
          ],
          's': 'c',
          'w': null,
          'b': 'Inkling',
          'p': [
            0.51,
            0.102,
            2.04
          ]
        },
        {
          'm': 'Qwen3.8 27B',
          't': '',
          'u': 0.062,
          'q': [
            null,
            null,
            1097.2,
            null
          ],
          's': 'r',
          'w': 'standard',
          'b': '通义千问',
          'p': null,
          'x': 1,
          'd': '2026-09-30'
        },
        {
          'm': 'DeepSeek V4.1 Flash',
          't': '',
          'u': 0.0123,
          'q': [
            459.3,
            888,
            5549.8,
            10405.9
          ],
          's': 'r',
          'w': 'standard',
          'b': 'DeepSeek',
          'p': [
            2.04,
            0.0408,
            8.16
          ],
          'd': '2026-10-31'
        },
        {
          'm': 'DeepSeek V4 Flash',
          't': '',
          'u': 0.0139,
          'q': [
            436.1,
            837.5,
            4881.3,
            8552
          ],
          's': 'r',
          'w': 'standard',
          'b': 'DeepSeek',
          'p': [
            2.992,
            0.0952,
            8.976
          ],
          'd': '2026-09-30'
        },
        {
          'm': 'DeepSeek V4.1 Flash Fast',
          't': '',
          'u': 0.0254,
          'q': [
            null,
            null,
            2676.2,
            null
          ],
          's': 'r',
          'w': 'standard',
          'b': 'DeepSeek',
          'p': null,
          'x': 1,
          'd': '2026-09-30'
        },
        {
          'm': 'Qwen3.7 Max',
          't': '',
          'u': 1.2057,
          'q': [
            null,
            null,
            56.4,
            null
          ],
          's': 'r',
          'w': 'standard',
          'b': '通义千问',
          'p': null,
          'x': 1,
          'd': '2026-09-30'
        },
        {
          'm': 'Qwen3.7 Plus',
          't': '',
          'u': 0.2102,
          'q': [
            81.3,
            134.2,
            323.5,
            370
          ],
          's': 'r',
          'w': 'standard',
          'b': '通义千问',
          'p': [
            2.72,
            0.544,
            10.88
          ],
          'd': '2026-09-30'
        },
        {
          'm': 'Qwen3.6 Plus',
          't': '',
          'u': 0.2565,
          'q': [
            null,
            null,
            265.1,
            null
          ],
          's': 'r',
          'w': 'standard',
          'b': '通义千问',
          'p': null,
          'x': 1,
          'd': '2026-09-30'
        },
        {
          'm': 'MiMo V2.5',
          't': '',
          'u': 0.0173,
          'q': [
            null,
            null,
            3939.1,
            null
          ],
          's': 'r',
          'w': 'standard',
          'b': '小米 MiMo',
          'p': null,
          'x': 1,
          'd': '2026-09-30'
        },
        {
          'm': 'DeepSeek V4 Pro',
          't': '',
          'u': 0.2057,
          'q': [
            30,
            57.5,
            330.6,
            571.8
          ],
          's': 'r',
          'w': 'standard',
          'b': 'DeepSeek',
          'p': [
            8.976,
            0.2992,
            26.928
          ],
          'd': '2026-09-30'
        },
        {
          'm': 'Qwen3.8 Max',
          't': '',
          'u': 1.0968,
          'q': [
            null,
            null,
            62,
            null
          ],
          's': 'r',
          'w': 'standard',
          'b': '通义千问',
          'p': null,
          'x': 1,
          'd': '2026-09-30'
        },
        {
          'm': 'MiMo V2.5 Pro',
          't': '',
          'u': 0.068,
          'q': [
            247.6,
            409.9,
            1000.1,
            1146.9
          ],
          's': 'r',
          'w': 'standard',
          'b': '小米 MiMo',
          'p': [
            6.8,
            1.36,
            20.4
          ],
          'd': '2026-09-30'
        },
        {
          'm': 'Qwen3.8 Omni Flash',
          't': '',
          'u': 0.0735,
          'q': [
            null,
            null,
            925.1,
            null
          ],
          's': 'r',
          'w': 'standard',
          'b': '通义千问',
          'p': null,
          'x': 1,
          'd': '2026-09-30'
        },
        {
          'm': 'Qwen3.8 Max 0902',
          't': '',
          'u': 1.0968,
          'q': [
            null,
            null,
            62,
            null
          ],
          's': 'r',
          'w': 'standard',
          'b': '通义千问',
          'p': null,
          'x': 1,
          'd': '2026-09-30'
        },
        {
          'm': 'Qwen3.8 Flash',
          't': '',
          'u': 0.0744,
          'q': [
            null,
            null,
            914.5,
            null
          ],
          's': 'r',
          'w': 'standard',
          'b': '通义千问',
          'p': null,
          'x': 1,
          'd': '2026-09-30'
        },
        {
          'm': 'DeepSeek V4.1 Flash Ultrafast',
          't': '',
          'u': 0.5255,
          'q': [
            null,
            null,
            129.4,
            null
          ],
          's': 'r',
          'w': 'standard',
          'b': 'DeepSeek',
          'p': null,
          'x': 1,
          'd': '2026-11-07'
        },
        {
          'm': 'Qwen4 Max',
          't': '',
          'u': 4.9635,
          'q': [
            1.5,
            2.8,
            13.7,
            21.2
          ],
          's': 'r',
          'w': 'standard',
          'b': '通义千问',
          'p': [
            10,
            0.5,
            30
          ],
          'd': '2026-11-17'
        },
        {
          'm': 'Muse Spark 1.3 Contributor',
          't': '',
          'u': 0.0185,
          'q': [
            null,
            null,
            3676.5,
            null
          ],
          's': 'r',
          'w': 'standard',
          'b': 'Muse',
          'p': null,
          'x': 1,
          'd': '2026-09-30'
        },
        {
          'm': 'Muse Spark 1.2 Contributor',
          't': '',
          'u': 0.0185,
          'q': [
            null,
            null,
            3676.5,
            null
          ],
          's': 'r',
          'w': 'standard',
          'b': 'Muse',
          'p': null,
          'x': 1,
          'd': '2026-09-30'
        },
        {
          'm': 'MiMo V2.6 Pro UltraSpeed',
          't': '',
          'u': 1.8579,
          'q': [
            2.3,
            4.5,
            36.6,
            99.1
          ],
          's': 'r',
          'w': 'standard',
          'b': '小米 MiMo',
          'p': [
            29.58,
            0.2448,
            59.16
          ],
          'd': '2026-09-30'
        },
        {
          'm': 'Qwen3.7 Flash',
          't': '',
          'u': 0.0245,
          'q': [
            null,
            null,
            2770.1,
            null
          ],
          's': 'r',
          'w': 'standard',
          'b': '通义千问',
          'p': null,
          'x': 1,
          'd': '2026-09-30'
        },
        {
          'm': 'Qwen3.6 Max Preview',
          't': '',
          'u': 1.1003,
          'q': [
            null,
            null,
            61.8,
            null
          ],
          's': 'r',
          'w': 'standard',
          'b': '通义千问',
          'p': null,
          'x': 1,
          'd': '2026-09-30'
        }
      ]
    },
    {
      'slug': 'commandcode-pro',
      'name': 'Pro',
      'platform': 'Command Code',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'codingplan',
      'fee': 20,
      'currency': '$',
      'feeCny': 136,
      'dm': 1,
      'models': [
        {
          'm': 'Kimi-K3.1-Pro',
          't': '',
          'u': 1.5347600000000001,
          'q': [
            14.3,
            25.7,
            88.6,
            113.3
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': [
            13.6,
            1.36,
            68
          ]
        },
        {
          'm': 'GPT-5.6-Sol',
          't': '[≤272K]',
          'u': 3.9502333333333346,
          'q': [
            5.7,
            10.2,
            34.4,
            43.7
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            34,
            3.4,
            204
          ]
        },
        {
          'm': 'GPT-5.6-Sol',
          't': '[>272K]',
          'u': 7.560466666666666,
          'q': [
            2.9,
            5.2,
            18,
            23.1
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            68,
            6.8,
            306
          ]
        },
        {
          'm': 'GLM-5.2',
          't': '',
          'u': 0.5736055000000001,
          'q': [
            55.6,
            93.2,
            237.1,
            274.8
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': [
            9.52,
            1.768,
            29.92
          ]
        },
        {
          'm': 'Hy3',
          't': '',
          'u': 0.07301287500000002,
          'q': [
            556.1,
            881.5,
            1862.7,
            2067.2
          ],
          's': 'c',
          'w': null,
          'b': '腾讯混元',
          'p': [
            0.952,
            0.238,
            3.944
          ]
        },
        {
          'm': 'Qwen-3.8-27B',
          't': '',
          'u': 0.12360700000000004,
          'q': [
            189.1,
            335.3,
            1100.3,
            1380.2
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': [
            2.72,
            0.272,
            20.4
          ]
        },
        {
          'm': 'DeepSeek-V4-Flash-0731',
          't': '[谷]',
          'u': 0.025836600000000015,
          'q': [
            435.6,
            842.2,
            5263.9,
            9869.7
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': [
            1.02,
            0.0204,
            4.08
          ]
        },
        {
          'm': 'DeepSeek-V4-Flash-0731',
          't': '[峰]',
          'u': 0.05167320000000003,
          'q': [
            217.8,
            421.1,
            2631.9,
            4934.9
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': [
            2.04,
            0.0408,
            8.16
          ]
        },
        {
          'm': 'DeepSeek-V4.1-Flash-1017',
          't': '[谷]',
          'u': 0.016441472727272737,
          'q': [
            684.6,
            1323.5,
            8271.8,
            15509.6
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': [
            1.02,
            0.0204,
            4.08
          ]
        },
        {
          'm': 'DeepSeek-V4.1-Flash-1017',
          't': '[峰]',
          'u': 0.032882945454545474,
          'q': [
            342.3,
            661.7,
            4135.9,
            7754.8
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': [
            2.04,
            0.0408,
            8.16
          ]
        },
        {
          'm': 'DeepSeek-V4.1-Flash-1017',
          't': '[Fast] [谷]',
          'u': 0.05048320000000001,
          'q': [
            420.5,
            756.5,
            2694,
            3488.1
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': [
            1.088,
            0.1088,
            3.944
          ]
        },
        {
          'm': 'DeepSeek-V4.1-Flash-1017',
          't': '[Fast] [峰]',
          'u': 0.10096640000000003,
          'q': [
            210.2,
            378.2,
            1347,
            1744
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': [
            2.176,
            0.2176,
            7.888
          ]
        },
        {
          'm': 'Kimi-K2.7-Code',
          't': '',
          'u': 0.4796137142857143,
          'q': [
            71.5,
            117.9,
            283.6,
            324.1
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': [
            6.46,
            1.292,
            27.2
          ]
        },
        {
          'm': 'GLM-5.3-Flash',
          't': '',
          'u': 0.04737745454545455,
          'q': [
            714.1,
            1181.1,
            2870.6,
            3288.7
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': [
            1.02,
            0.204,
            3.4
          ]
        },
        {
          'm': 'LongCat-2.0',
          't': '',
          'u': 0.06028540000000004,
          'q': [
            186.7,
            360.9,
            2255.9,
            4229.9
          ],
          's': 'c',
          'w': null,
          'b': 'LongCat',
          'p': [
            2.04,
            0.0408,
            8.16
          ]
        },
        {
          'm': 'MiniMax-M3',
          't': '[≤512K]',
          'u': 0.18524631578947373,
          'q': [
            184.4,
            304.4,
            734.2,
            839.5
          ],
          's': 'c',
          'w': null,
          'b': 'MiniMax',
          'p': [
            2.04,
            0.408,
            8.16
          ]
        },
        {
          'm': 'MiniMax-M3',
          't': '[>512K]',
          'u': 0.18524631578947373,
          'q': [
            184.4,
            304.4,
            734.2,
            839.5
          ],
          's': 'c',
          'w': null,
          'b': 'MiniMax',
          'p': [
            2.04,
            0.408,
            8.16
          ]
        },
        {
          'm': 'Gemini-3.8-Flash',
          't': '',
          'u': 0.6906420000000001,
          'q': [
            31.9,
            57,
            196.9,
            251.9
          ],
          's': 'c',
          'w': null,
          'b': 'Gemini',
          'p': [
            10.2,
            1.02,
            51
          ]
        },
        {
          'm': 'Mistral-Large-4',
          't': '',
          'u': 1.0013906666666672,
          'q': [
            21.3,
            38.2,
            135.8,
            175.7
          ],
          's': 'c',
          'w': null,
          'b': 'Mistral AI',
          'p': [
            9.248,
            0.952,
            28.424
          ]
        },
        {
          'm': 'Qwen-3.7-Max',
          't': '',
          'u': 2.0067906976744188,
          'q': [
            16.8,
            27.8,
            67.8,
            77.7
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': [
            17,
            3.4,
            51
          ]
        },
        {
          'm': 'Qwen-3.7-Plus',
          't': '[≤256K]',
          'u': 0.3274120930232559,
          'q': [
            104.4,
            172.2,
            415.4,
            475
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': [
            2.72,
            0.544,
            10.88
          ]
        },
        {
          'm': 'Qwen-3.7-Plus',
          't': '[>256K]',
          'u': 0.9822362790697674,
          'q': [
            34.8,
            57.4,
            138.5,
            158.3
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': [
            8.16,
            1.632,
            32.64
          ]
        },
        {
          'm': 'Qwen-3.6-Plus',
          't': '[≤256K]',
          'u': 0.42507906976744186,
          'q': [
            82.7,
            135.7,
            319.9,
            363.9
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': [
            3.4,
            0.68,
            20.4
          ]
        },
        {
          'm': 'Qwen-3.6-Plus',
          't': '[>256K]',
          'u': 1.0075069767441862,
          'q': [
            20.7,
            37.4,
            135,
            175.8
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': [
            13.6,
            1.36,
            40.8
          ]
        },
        {
          'm': 'GPT-5.6-Luna',
          't': '[≤272K]',
          'u': 0.15800933333333336,
          'q': [
            142.8,
            254.5,
            860.7,
            1091.9
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            1.36,
            0.136,
            8.16
          ]
        },
        {
          'm': 'GPT-5.6-Luna',
          't': '[>272K]',
          'u': 0.3024186666666668,
          'q': [
            71.8,
            128.8,
            449.7,
            577.7
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            2.72,
            0.272,
            12.24
          ]
        },
        {
          'm': 'Qwen-3.8-Max',
          't': '',
          'u': 1.6583500000000002,
          'q': [
            14.5,
            25.6,
            82,
            102
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': [
            13.6,
            1.7,
            40.8
          ]
        },
        {
          'm': 'Kimi-K3',
          't': '',
          'u': 2.3021400000000005,
          'q': [
            9.6,
            17.1,
            59.1,
            75.6
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': [
            20.4,
            2.04,
            102
          ]
        },
        {
          'm': 'DeepSeek-V4-Pro-0813',
          't': '[谷]',
          'u': 0.28800493333333343,
          'q': [
            42.9,
            82.2,
            472.2,
            816.7
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': [
            4.488,
            0.1496,
            13.464
          ]
        },
        {
          'm': 'DeepSeek-V4-Pro-0813',
          't': '[峰]',
          'u': 0.5760098666666669,
          'q': [
            21.4,
            41.1,
            236.1,
            408.4
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': [
            8.976,
            0.2992,
            26.928
          ]
        },
        {
          'm': 'Claude Sonnet 5.5',
          't': '',
          'u': 1.6593700000000007,
          'q': [
            9.4,
            17.7,
            82,
            121.1
          ],
          's': 'c',
          'w': null,
          'b': 'Claude',
          'p': [
            13.6,
            0.68,
            68
          ]
        },
        {
          'm': 'Claude Sonnet 5',
          't': '',
          'u': 2.3021400000000005,
          'q': [
            9.6,
            17.1,
            59.1,
            75.6
          ],
          's': 'c',
          'w': null,
          'b': 'Claude',
          'p': [
            13.6,
            1.36,
            68
          ]
        },
        {
          'm': 'Claude Sonnet 4.6',
          't': '',
          'u': 3.4532100000000003,
          'q': [
            6.4,
            11.4,
            39.4,
            50.4
          ],
          's': 'c',
          'w': null,
          'b': 'Claude',
          'p': [
            20.4,
            2.04,
            102
          ]
        },
        {
          'm': 'Claude Haiku 5.5',
          't': '[≤100K]',
          'u': 0.07673800000000001,
          'q': [
            286.7,
            513,
            1772.3,
            2266.8
          ],
          's': 'c',
          'w': null,
          'b': 'Claude',
          'p': [
            0.68,
            0.068,
            3.4
          ]
        },
        {
          'm': 'Claude Haiku 5.5',
          't': '[>100K]',
          'u': 0.38369000000000003,
          'q': [
            57.3,
            102.6,
            354.5,
            453.4
          ],
          's': 'c',
          'w': null,
          'b': 'Claude',
          'p': [
            3.4,
            0.34,
            17
          ]
        },
        {
          'm': 'Claude Haiku 4.5',
          't': '',
          'u': 1.1510700000000003,
          'q': [
            19.1,
            34.2,
            118.2,
            151.1
          ],
          's': 'c',
          'w': null,
          'b': 'Claude',
          'p': [
            6.8,
            0.68,
            34
          ]
        },
        {
          'm': 'GPT-6-Sol',
          't': '[≤272K]',
          'u': 2.3021400000000005,
          'q': [
            9.6,
            17.1,
            59.1,
            75.6
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            13.6,
            1.36,
            68
          ]
        },
        {
          'm': 'GPT-6-Sol',
          't': '[>272K]',
          'u': 4.434280000000001,
          'q': [
            4.8,
            8.6,
            30.7,
            39.7
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            27.2,
            2.72,
            102
          ]
        },
        {
          'm': 'GPT-5.6-Terra',
          't': '[≤272K]',
          'u': 2.3701400000000006,
          'q': [
            9.5,
            17,
            57.4,
            72.8
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            13.6,
            1.36,
            81.6
          ]
        },
        {
          'm': 'GPT-5.6-Terra',
          't': '[>272K]',
          'u': 4.5362800000000005,
          'q': [
            4.8,
            8.6,
            30,
            38.5
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            27.2,
            2.72,
            122.4
          ]
        },
        {
          'm': 'GPT-5.5',
          't': '',
          'u': 5.92535,
          'q': [
            3.8,
            6.8,
            23,
            29.1
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            34,
            3.4,
            204
          ]
        },
        {
          'm': 'GPT-5.4',
          't': '',
          'u': 2.962675,
          'q': [
            7.6,
            13.6,
            45.9,
            58.2
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            17,
            1.7,
            102
          ]
        },
        {
          'm': 'GPT-5.4-mini',
          't': '',
          'u': 0.8888024999999999,
          'q': [
            25.4,
            45.2,
            153,
            194.1
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            5.1,
            0.51,
            30.6
          ]
        },
        {
          'm': 'GPT-5.3-Codex',
          't': '',
          'u': 4.16245,
          'q': [
            9.7,
            15.4,
            32.7,
            36.3
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            13.6,
            3.4,
            54.4
          ]
        },
        {
          'm': 'Gemini-3.6-Flash',
          't': '',
          'u': 1.7266050000000002,
          'q': [
            12.7,
            22.8,
            78.8,
            100.7
          ],
          's': 'c',
          'w': null,
          'b': 'Gemini',
          'p': [
            10.2,
            1.02,
            51
          ]
        },
        {
          'm': 'Gemini-3.5-Flash',
          't': '',
          'u': 1.7776049999999999,
          'q': [
            12.7,
            22.6,
            76.5,
            97.1
          ],
          's': 'c',
          'w': null,
          'b': 'Gemini',
          'p': [
            10.2,
            1.02,
            61.2
          ]
        },
        {
          'm': 'Gemini-3.5-Flash-Lite',
          't': '',
          'u': 0.379321,
          'q': [
            62.8,
            111,
            358.5,
            447.1
          ],
          's': 'c',
          'w': null,
          'b': 'Gemini',
          'p': [
            2.04,
            0.204,
            17
          ]
        },
        {
          'm': 'Gemini-3.1-Flash-Lite',
          't': '',
          'u': 0.3284060000000001,
          'q': [
            76.4,
            133.8,
            414.1,
            508.9
          ],
          's': 'c',
          'w': null,
          'b': 'Gemini',
          'p': [
            1.7,
            0.204,
            10.2
          ]
        },
        {
          'm': 'Muse-Spark-1.1',
          't': '',
          'u': 1.5315300000000003,
          'q': [
            15.4,
            27.3,
            88.8,
            111
          ],
          's': 'c',
          'w': null,
          'b': 'Muse',
          'p': [
            8.5,
            1.02,
            28.9
          ]
        },
        {
          'm': 'GPT-6-Luna',
          't': '[≤272K]',
          'u': 0.07673800000000001,
          'q': [
            286.7,
            513,
            1772.3,
            2266.8
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            0.68,
            0.068,
            3.4
          ]
        },
        {
          'm': 'GPT-6-Luna',
          't': '[>272K]',
          'u': 0.14780933333333338,
          'q': [
            144.1,
            259.1,
            920.1,
            1190
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            1.36,
            0.136,
            5.1
          ]
        },
        {
          'm': 'Qwen 3.8 Omni Flash',
          't': '',
          'u': 0.11304546666666668,
          'q': [
            192.8,
            345.6,
            1203.1,
            1543.5
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': [
            1.02,
            0.1088,
            3.196
          ]
        },
        {
          'm': 'Qwen-3.8-Max-0902',
          't': '',
          'u': 1.6583500000000002,
          'q': [
            14.5,
            25.6,
            82,
            102
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': [
            13.6,
            1.7,
            40.8
          ]
        },
        {
          'm': 'Hy4-preview',
          't': '',
          'u': 0.42475973333333356,
          'q': [
            34.2,
            64.5,
            320.2,
            494.3
          ],
          's': 'c',
          'w': null,
          'b': '腾讯混元',
          'p': [
            5.6712,
            0.2856,
            17.0068
          ]
        },
        {
          'm': 'Qwen-3.8-Flash-Next',
          't': '',
          'u': 0.11530080000000004,
          'q': [
            180.7,
            326,
            1179.5,
            1537.3
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': [
            1.088,
            0.1088,
            3.196
          ]
        },
        {
          'm': 'GLM-5.3-FlashX',
          't': '',
          'u': 0.4331656666666666,
          'q': [
            79,
            130.3,
            314,
            359
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': [
            2.516,
            0.51,
            8.5
          ]
        },
        {
          'm': 'DeepSeek-V4-Flash-Vision-Exp',
          't': '[谷]',
          'u': 0.06028540000000004,
          'q': [
            186.7,
            360.9,
            2255.9,
            4229.9
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': [
            1.02,
            0.0204,
            4.08
          ]
        },
        {
          'm': 'DeepSeek-V4-Flash-Vision-Exp',
          't': '[峰]',
          'u': 0.12057080000000008,
          'q': [
            93.3,
            180.5,
            1128,
            2114.9
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': [
            2.04,
            0.0408,
            8.16
          ]
        },
        {
          'm': 'DeepSeek-V4-Flash-Fast',
          't': '',
          'u': 0.375802,
          'q': [
            105.3,
            168,
            361.9,
            403.3
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': [
            1.904,
            0.476,
            3.808
          ]
        },
        {
          'm': 'GLM-5.3',
          't': '',
          'u': 0.5736055000000001,
          'q': [
            55.6,
            93.2,
            237.1,
            274.8
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': [
            9.52,
            1.768,
            29.92
          ]
        },
        {
          'm': 'Muse-Spark-1.3',
          't': '',
          'u': 1.02102,
          'q': [
            23.2,
            41,
            133.2,
            166.5
          ],
          's': 'c',
          'w': null,
          'b': 'Muse',
          'p': [
            8.5,
            1.02,
            28.9
          ]
        },
        {
          'm': 'Muse-Spark-1.3',
          't': '[Contributor]',
          'u': 0.035656933333333356,
          'q': [
            280.8,
            548,
            3814.1,
            8110.5
          ],
          's': 'c',
          'w': null,
          'b': 'Muse',
          'p': [
            0.68,
            0.0136,
            1.36
          ]
        },
        {
          'm': 'Muse-Spark-1.2',
          't': '',
          'u': 1.02102,
          'q': [
            23.2,
            41,
            133.2,
            166.5
          ],
          's': 'c',
          'w': null,
          'b': 'Muse',
          'p': [
            8.5,
            1.02,
            28.9
          ]
        },
        {
          'm': 'Muse-Spark-1.2',
          't': '[Contributor]',
          'u': 0.035656933333333356,
          'q': [
            280.8,
            548,
            3814.1,
            8110.5
          ],
          's': 'c',
          'w': null,
          'b': 'Muse',
          'p': [
            0.68,
            0.0136,
            1.36
          ]
        },
        {
          'm': 'Kimi-K2.7-Code-HighSpeed',
          't': '[高速]',
          'u': 2.2381973333333334,
          'q': [
            15.3,
            25.3,
            60.8,
            69.4
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': [
            12.92,
            2.584,
            54.4
          ]
        },
        {
          'm': 'Grok-4.5',
          't': '',
          'u': 2.729633333333333,
          'q': [
            14.7,
            23.3,
            49.8,
            55.4
          ],
          's': 'c',
          'w': null,
          'b': 'Grok',
          'p': [
            13.6,
            3.4,
            40.8
          ]
        },
        {
          'm': 'Grok-4.6',
          't': '[≤200K]',
          'u': 2.729633333333333,
          'q': [
            14.7,
            23.3,
            49.8,
            55.4
          ],
          's': 'c',
          'w': null,
          'b': 'Grok',
          'p': [
            13.6,
            3.4,
            40.8
          ]
        },
        {
          'm': 'Grok-4.6',
          't': '[>200K]',
          'u': 5.459266666666666,
          'q': [
            7.3,
            11.7,
            24.9,
            27.7
          ],
          's': 'c',
          'w': null,
          'b': 'Grok',
          'p': [
            27.2,
            6.8,
            81.6
          ]
        },
        {
          'm': 'Grok-4.7',
          't': '[≤200K]',
          'u': 2.729633333333333,
          'q': [
            14.7,
            23.3,
            49.8,
            55.4
          ],
          's': 'c',
          'w': null,
          'b': 'Grok',
          'p': [
            13.6,
            3.4,
            40.8
          ]
        },
        {
          'm': 'Grok-4.7',
          't': '[>200K]',
          'u': 5.459266666666666,
          'q': [
            7.3,
            11.7,
            24.9,
            27.7
          ],
          's': 'c',
          'w': null,
          'b': 'Grok',
          'p': [
            27.2,
            6.8,
            81.6
          ]
        },
        {
          'm': 'Gemini-3.7-Flash',
          't': '',
          'u': 0.6906420000000001,
          'q': [
            31.9,
            57,
            196.9,
            251.9
          ],
          's': 'c',
          'w': null,
          'b': 'Gemini',
          'p': [
            10.2,
            1.02,
            51
          ]
        },
        {
          'm': 'GLM-5.2-Fast',
          't': '',
          'u': 3.0515000000000008,
          'q': [
            9.7,
            16.5,
            44.6,
            52.5
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': [
            20.4,
            3.4,
            69.7
          ]
        },
        {
          'm': 'Inkling',
          't': '',
          'u': 1.0458060000000002,
          'q': [
            29,
            49.1,
            130,
            152.3
          ],
          's': 'c',
          'w': null,
          'b': 'Inkling',
          'p': [
            6.8,
            1.156,
            27.54
          ]
        },
        {
          'm': 'Inkling-Small',
          't': '',
          'u': 0.5684800000000001,
          'q': [
            58.7,
            97.3,
            239.2,
            274.8
          ],
          's': 'c',
          'w': null,
          'b': 'Inkling',
          'p': [
            3.4,
            0.68,
            8.16
          ]
        },
        {
          'm': 'MiMo-V2.6-Pro',
          't': '',
          'u': 0.1332534800000001,
          'q': [
            63.8,
            126,
            1020.6,
            2766.2
          ],
          's': 'c',
          'w': null,
          'b': '小米 MiMo',
          'p': [
            2.958,
            0.0245,
            5.916
          ]
        },
        {
          'm': 'MiMo-V2.6-Flash',
          't': '',
          'u': 0.04991970666666669,
          'q': [
            200.6,
            391.5,
            2724.4,
            5793.2
          ],
          's': 'c',
          'w': null,
          'b': '小米 MiMo',
          'p': [
            0.952,
            0.019,
            1.904
          ]
        },
        {
          'm': 'MiMo-V2.6-Pro',
          't': '[UltraSpeed]',
          'u': 1.9988022000000012,
          'q': [
            4.3,
            8.4,
            68,
            184.4
          ],
          's': 'c',
          'w': null,
          'b': '小米 MiMo',
          'p': [
            29.58,
            0.2448,
            59.16
          ]
        },
        {
          'm': 'Step-5-Preview',
          't': '',
          'u': 0.5009900000000002,
          'q': [
            28.5,
            53.9,
            271.5,
            423.2
          ],
          's': 'c',
          'w': null,
          'b': '阶跃星辰',
          'p': [
            6.8,
            0.34,
            18.36
          ]
        },
        {
          'm': 'step-3.7-flash',
          't': '',
          'u': 0.24257866666666672,
          'q': [
            144.4,
            237.1,
            560.6,
            638.1
          ],
          's': 'c',
          'w': null,
          'b': '阶跃星辰',
          'p': [
            1.36,
            0.272,
            7.82
          ]
        },
        {
          'm': 'step-3.5-flash',
          't': '',
          'u': 0.11280066666666666,
          'q': [
            325.1,
            528.1,
            1205.7,
            1360.9
          ],
          's': 'c',
          'w': null,
          'b': '阶跃星辰',
          'p': [
            0.612,
            0.136,
            2.04
          ]
        },
        {
          'm': 'Nemotron-3-Ultra',
          't': '',
          'u': 0.7039360000000002,
          'q': [
            48.5,
            80.1,
            193.2,
            220.9
          ],
          's': 'c',
          'w': null,
          'b': 'NVIDIA',
          'p': [
            4.08,
            0.816,
            16.32
          ]
        },
        {
          'm': 'Kimi-K2.6',
          't': '',
          'u': 0.9905446666666669,
          'q': [
            30.5,
            51.7,
            137.3,
            161
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': [
            6.46,
            1.088,
            27.2
          ]
        },
        {
          'm': 'Kimi-K2.5',
          't': '',
          'u': 0.6318333333333334,
          'q': [
            48.2,
            81.5,
            215.2,
            252
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': [
            4.08,
            0.68,
            20.4
          ]
        },
        {
          'm': 'GLM-5.1',
          't': '',
          'u': 1.5296146666666672,
          'q': [
            20.9,
            34.9,
            88.9,
            103.1
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': [
            9.52,
            1.768,
            29.92
          ]
        },
        {
          'm': 'GLM-5',
          't': '',
          'u': 1.1550933333333333,
          'q': [
            29.2,
            48.4,
            117.7,
            134.9
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': [
            6.8,
            1.36,
            21.76
          ]
        },
        {
          'm': 'Qwen-3.7-Flash',
          't': '[≤32K]',
          'u': 0.035423466666666674,
          'q': [
            969.3,
            1598,
            3839.3,
            4386.1
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': [
            0.204,
            0.0408,
            0.884
          ]
        },
        {
          'm': 'Qwen-3.7-Flash',
          't': '[32K<上下文≤256K]',
          'u': 0.11732266666666669,
          'q': [
            291.2,
            480.6,
            1159.2,
            1325.5
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': [
            0.68,
            0.136,
            2.72
          ]
        },
        {
          'm': 'Qwen-3.7-Flash',
          't': '[>256K]',
          'u': 0.23464533333333337,
          'q': [
            145.6,
            240.3,
            579.6,
            662.8
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': [
            1.36,
            0.272,
            5.44
          ]
        },
        {
          'm': 'Qwen-3.6-Max-Preview',
          't': '',
          'u': 1.584128,
          'q': [
            22.2,
            36.4,
            85.9,
            97.6
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': [
            8.84,
            1.768,
            53.04
          ]
        },
        {
          'm': 'MiniMax-M2.7',
          't': '',
          'u': 0.3519680000000001,
          'q': [
            97.1,
            160.2,
            386.4,
            441.8
          ],
          's': 'c',
          'w': null,
          'b': 'MiniMax',
          'p': [
            2.04,
            0.408,
            8.16
          ]
        },
        {
          'm': 'MiniMax-M2.5',
          't': '',
          'u': 0.223414,
          'q': [
            96,
            172.4,
            608.7,
            785.5
          ],
          's': 'c',
          'w': null,
          'b': 'MiniMax',
          'p': [
            2.04,
            0.204,
            8.16
          ]
        },
        {
          'm': 'Ling 3.1 Flash',
          't': '',
          'u': 0.09413672727272729,
          'q': [
            357.6,
            592.1,
            1444.7,
            1656.8
          ],
          's': 'c',
          'w': null,
          'b': 'inclusionAI',
          'p': [
            2.04,
            0.408,
            6.12
          ]
        },
        {
          'm': 'Ling 3.1 Flash 1019',
          't': '',
          'u': 0.09413672727272729,
          'q': [
            357.6,
            592.1,
            1444.7,
            1656.8
          ],
          's': 'c',
          'w': null,
          'b': 'inclusionAI',
          'p': [
            2.04,
            0.408,
            6.12
          ]
        },
        {
          'm': 'Muse Spark Open',
          't': '',
          'u': 1.02102,
          'q': [
            23.2,
            41,
            133.2,
            166.5
          ],
          's': 'c',
          'w': null,
          'b': 'Muse',
          'p': [
            8.5,
            1.02,
            28.9
          ]
        },
        {
          'm': 'Nemotron 3.5 Super VL',
          't': '',
          'u': 0.22784533333333334,
          'q': [
            146.6,
            243.2,
            596.9,
            685.5
          ],
          's': 'c',
          'w': null,
          'b': 'NVIDIA',
          'p': [
            1.36,
            0.272,
            3.4
          ]
        },
        {
          'm': 'Qwen-3.8-Max-Prime',
          't': '',
          'u': 3.3167000000000004,
          'q': [
            7.3,
            12.8,
            41,
            51
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': [
            27.2,
            3.4,
            81.6
          ]
        },
        {
          'm': 'Gemini 4 Argon',
          't': '',
          'u': 1.6593700000000007,
          'q': [
            9.4,
            17.7,
            82,
            121.1
          ],
          's': 'c',
          'w': null,
          'b': 'Gemini',
          'p': [
            13.6,
            0.68,
            68
          ]
        },
        {
          'm': 'MiniMax-M3.1-Flash',
          't': '',
          'u': 0.111707,
          'q': [
            191.9,
            344.8,
            1217.5,
            1570.9
          ],
          's': 'c',
          'w': null,
          'b': 'MiniMax',
          'p': [
            1.02,
            0.102,
            4.08
          ]
        },
        {
          'm': 'Ornith 1.5 122B',
          't': '',
          'u': 0.13629466666666673,
          'q': [
            180.6,
            317.5,
            997.8,
            1232.6
          ],
          's': 'c',
          'w': null,
          'b': 'Ornith',
          'p': [
            1.088,
            0.136,
            4.352
          ]
        },
        {
          'm': 'GPT-6.1-Terra',
          't': '[≤272K]',
          'u': 0.8296850000000003,
          'q': [
            18.9,
            35.3,
            163.9,
            242.3
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            6.8,
            0.34,
            34
          ]
        },
        {
          'm': 'GPT-6.1-Terra',
          't': '[>272K]',
          'u': 1.5743700000000005,
          'q': [
            9.5,
            17.8,
            86.4,
            131.2
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            13.6,
            0.68,
            51
          ]
        },
        {
          'm': 'Qwen4-Max',
          't': '',
          'u': 0.9140220000000004,
          'q': [
            15.8,
            29.9,
            148.8,
            230.1
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': [
            10.2,
            0.51,
            30.6
          ]
        },
        {
          'm': 'Hy4-Flash',
          't': '',
          'u': 0.04201448000000002,
          'q': [
            337.3,
            638.3,
            3237,
            5073
          ],
          's': 'c',
          'w': null,
          'b': '腾讯混元',
          'p': [
            0.476,
            0.0204,
            1.9108
          ]
        },
        {
          'm': 'Hy4',
          't': '',
          'u': 0.42475973333333356,
          'q': [
            34.2,
            64.5,
            320.2,
            494.3
          ],
          's': 'c',
          'w': null,
          'b': '腾讯混元',
          'p': [
            5.6712,
            0.2856,
            17.0068
          ]
        },
        {
          'm': 'Muse Ember',
          't': '',
          'u': 0.05102720000000001,
          'q': [
            282.2,
            533,
            2665.2,
            4135.7
          ],
          's': 'c',
          'w': null,
          'b': 'Muse',
          'p': [
            0.68,
            0.0272,
            3.4
          ]
        },
        {
          'm': 'GPT-6.2-Sol',
          't': '',
          'u': 1.6593700000000007,
          'q': [
            9.4,
            17.7,
            82,
            121.1
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            13.6,
            0.68,
            68
          ]
        },
        {
          'm': 'Gemini 4 Carbon',
          't': '',
          'u': 1.106246666666667,
          'q': [
            14.2,
            26.5,
            122.9,
            181.7
          ],
          's': 'c',
          'w': null,
          'b': 'Gemini',
          'p': [
            13.6,
            0.68,
            68
          ]
        },
        {
          'm': 'Inkling 2 Mini',
          't': '',
          'u': 0.10559040000000003,
          'q': [
            323.6,
            534,
            1288,
            1472.8
          ],
          's': 'c',
          'w': null,
          'b': 'Inkling',
          'p': [
            0.51,
            0.102,
            2.04
          ]
        },
        {
          'm': 'Gemini 4 Neon',
          't': '',
          'u': 2.489055000000001,
          'q': [
            6.3,
            11.8,
            54.6,
            80.8
          ],
          's': 'c',
          'w': null,
          'b': 'Gemini',
          'p': [
            20.4,
            1.02,
            102
          ]
        }
      ]
    },
    {
      'slug': 'commandcode-max10',
      'name': 'Max 10×',
      'platform': 'Command Code',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'codingplan',
      'fee': 100,
      'currency': '$',
      'feeCny': 680,
      'dm': 1,
      'models': [
        {
          'm': 'Kimi-K3.1-Pro',
          't': '',
          'u': 1.5347600000000001,
          'q': [
            71.7,
            128.3,
            443.1,
            566.7
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': [
            13.6,
            1.36,
            68
          ]
        },
        {
          'm': 'Ling 3.1 Flash',
          't': '',
          'u': 0.3451680000000001,
          'q': [
            487.6,
            807.4,
            1970.1,
            2259.2
          ],
          's': 'c',
          'w': null,
          'b': 'inclusionAI',
          'p': [
            2.04,
            0.408,
            6.12
          ]
        },
        {
          'm': 'Ling 3.1 Flash 1019',
          't': '',
          'u': 0.3451680000000001,
          'q': [
            487.6,
            807.4,
            1970.1,
            2259.2
          ],
          's': 'c',
          'w': null,
          'b': 'inclusionAI',
          'p': [
            2.04,
            0.408,
            6.12
          ]
        },
        {
          'm': 'Hy4-preview',
          't': '',
          'u': 0.4247597333333335,
          'q': [
            170.9,
            322.6,
            1600.9,
            2471.5
          ],
          's': 'c',
          'w': null,
          'b': '腾讯混元',
          'p': [
            5.6712,
            0.2856,
            17.0068
          ]
        },
        {
          'm': 'Hy3',
          't': '',
          'u': 0.19470100000000004,
          'q': [
            1042.6,
            1652.8,
            3492.5,
            3876
          ],
          's': 'c',
          'w': null,
          'b': '腾讯混元',
          'p': [
            0.952,
            0.238,
            3.944
          ]
        },
        {
          'm': 'Kimi-K3',
          't': '',
          'u': 2.3021400000000005,
          'q': [
            47.8,
            85.5,
            295.4,
            377.8
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': [
            20.4,
            2.04,
            102
          ]
        },
        {
          'm': 'Kimi-K2.7-Code',
          't': '',
          'u': 1.1190986666666667,
          'q': [
            153.1,
            252.6,
            607.6,
            694.4
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': [
            6.46,
            1.292,
            27.2
          ]
        },
        {
          'm': 'Kimi-K2.7-Code-HighSpeed',
          't': '[高速]',
          'u': 2.2381973333333334,
          'q': [
            76.6,
            126.3,
            303.8,
            347.2
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': [
            12.92,
            2.584,
            54.4
          ]
        },
        {
          'm': 'Kimi-K2.6',
          't': '',
          'u': 0.9905446666666669,
          'q': [
            152.7,
            258.5,
            686.5,
            804.9
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': [
            6.46,
            1.088,
            27.2
          ]
        },
        {
          'm': 'Kimi-K2.5',
          't': '',
          'u': 0.6318333333333334,
          'q': [
            240.9,
            407.3,
            1076.2,
            1260.2
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': [
            4.08,
            0.68,
            20.4
          ]
        },
        {
          'm': 'GLM-5.3-Flash',
          't': '',
          'u': 0.17371733333333333,
          'q': [
            973.8,
            1610.6,
            3914.4,
            4484.6
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': [
            1.02,
            0.204,
            3.4
          ]
        },
        {
          'm': 'GLM-5.3-FlashX',
          't': '',
          'u': 0.4331656666666666,
          'q': [
            394.8,
            651.4,
            1569.8,
            1794.8
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': [
            2.516,
            0.51,
            8.5
          ]
        },
        {
          'm': 'GLM-5.3',
          't': '',
          'u': 1.529614666666667,
          'q': [
            104.3,
            174.7,
            444.6,
            515.3
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': [
            9.52,
            1.768,
            29.92
          ]
        },
        {
          'm': 'GLM-5.2',
          't': '',
          'u': 1.529614666666667,
          'q': [
            104.3,
            174.7,
            444.6,
            515.3
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': [
            9.52,
            1.768,
            29.92
          ]
        },
        {
          'm': 'GLM-5.2-Fast',
          't': '',
          'u': 3.0515000000000008,
          'q': [
            48.5,
            82.5,
            222.8,
            262.5
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': [
            20.4,
            3.4,
            69.7
          ]
        },
        {
          'm': 'GLM-5.1',
          't': '',
          'u': 1.529614666666667,
          'q': [
            104.3,
            174.7,
            444.6,
            515.3
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': [
            9.52,
            1.768,
            29.92
          ]
        },
        {
          'm': 'GLM-5',
          't': '',
          'u': 1.1550933333333335,
          'q': [
            146.2,
            241.8,
            588.7,
            674.7
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': [
            6.8,
            1.36,
            21.76
          ]
        },
        {
          'm': 'MiniMax-M3',
          't': '[≤512K]',
          'u': 0.35196800000000006,
          'q': [
            485.4,
            801.1,
            1932,
            2209.2
          ],
          's': 'c',
          'w': null,
          'b': 'MiniMax',
          'p': [
            2.04,
            0.408,
            8.16
          ]
        },
        {
          'm': 'MiniMax-M3',
          't': '[>512K]',
          'u': 0.35196800000000006,
          'q': [
            485.4,
            801.1,
            1932,
            2209.2
          ],
          's': 'c',
          'w': null,
          'b': 'MiniMax',
          'p': [
            2.04,
            0.408,
            8.16
          ]
        },
        {
          'm': 'MiniMax-M2.7',
          't': '',
          'u': 0.35196800000000006,
          'q': [
            485.4,
            801.1,
            1932,
            2209.2
          ],
          's': 'c',
          'w': null,
          'b': 'MiniMax',
          'p': [
            2.04,
            0.408,
            8.16
          ]
        },
        {
          'm': 'MiniMax-M2.5',
          't': '',
          'u': 0.223414,
          'q': [
            479.8,
            861.9,
            3043.7,
            3927.3
          ],
          's': 'c',
          'w': null,
          'b': 'MiniMax',
          'p': [
            2.04,
            0.204,
            8.16
          ]
        },
        {
          'm': 'DeepSeek-V4-Pro-0813',
          't': '[谷]',
          'u': 0.28800493333333343,
          'q': [
            214.3,
            410.9,
            2361.1,
            4083.6
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': [
            4.488,
            0.1496,
            13.464
          ]
        },
        {
          'm': 'DeepSeek-V4-Pro-0813',
          't': '[峰]',
          'u': 0.5760098666666669,
          'q': [
            107.1,
            205.5,
            1180.5,
            2041.8
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': [
            8.976,
            0.2992,
            26.928
          ]
        },
        {
          'm': 'DeepSeek-V4-Flash-0731',
          't': '[谷]',
          'u': 0.060285400000000024,
          'q': [
            933.5,
            1804.7,
            11279.7,
            21149.4
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': [
            1.02,
            0.0204,
            4.08
          ]
        },
        {
          'm': 'DeepSeek-V4-Flash-0731',
          't': '[峰]',
          'u': 0.12057080000000005,
          'q': [
            466.7,
            902.4,
            5639.8,
            10574.7
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': [
            2.04,
            0.0408,
            8.16
          ]
        },
        {
          'm': 'DeepSeek-V4-Flash-Vision-Exp',
          't': '[谷]',
          'u': 0.060285400000000024,
          'q': [
            933.5,
            1804.7,
            11279.7,
            21149.4
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': [
            1.02,
            0.0204,
            4.08
          ]
        },
        {
          'm': 'DeepSeek-V4-Flash-Vision-Exp',
          't': '[峰]',
          'u': 0.12057080000000005,
          'q': [
            466.7,
            902.4,
            5639.8,
            10574.7
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': [
            2.04,
            0.0408,
            8.16
          ]
        },
        {
          'm': 'DeepSeek-V4-Flash-Fast',
          't': '',
          'u': 0.3758020000000001,
          'q': [
            526.6,
            840.1,
            1809.5,
            2016.3
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': [
            1.904,
            0.476,
            3.808
          ]
        },
        {
          'm': 'DeepSeek-V4.1-Flash-1017',
          't': '[谷]',
          'u': 0.060285400000000024,
          'q': [
            933.5,
            1804.7,
            11279.7,
            21149.4
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': [
            1.02,
            0.0204,
            4.08
          ]
        },
        {
          'm': 'DeepSeek-V4.1-Flash-1017',
          't': '[峰]',
          'u': 0.12057080000000005,
          'q': [
            466.7,
            902.4,
            5639.8,
            10574.7
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': [
            2.04,
            0.0408,
            8.16
          ]
        },
        {
          'm': 'DeepSeek-V4.1-Flash-1017',
          't': '[Fast] [谷]',
          'u': 0.11779413333333336,
          'q': [
            901,
            1621,
            5772.8,
            7474.5
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': [
            1.088,
            0.1088,
            3.944
          ]
        },
        {
          'm': 'DeepSeek-V4.1-Flash-1017',
          't': '[Fast] [峰]',
          'u': 0.2355882666666667,
          'q': [
            450.5,
            810.5,
            2886.4,
            3737.2
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': [
            2.176,
            0.2176,
            7.888
          ]
        },
        {
          'm': 'Qwen 3.8 Omni Flash',
          't': '',
          'u': 0.11304546666666669,
          'q': [
            964.2,
            1727.8,
            6015.3,
            7717.6
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': [
            1.02,
            0.1088,
            3.196
          ]
        },
        {
          'm': 'Qwen-3.8-Max-0902',
          't': '',
          'u': 1.6583500000000004,
          'q': [
            72.6,
            128,
            410,
            509.9
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': [
            13.6,
            1.7,
            40.8
          ]
        },
        {
          'm': 'Qwen-3.8-Max',
          't': '',
          'u': 1.6583500000000004,
          'q': [
            72.6,
            128,
            410,
            509.9
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': [
            13.6,
            1.7,
            40.8
          ]
        },
        {
          'm': 'Qwen-3.8-27B',
          't': '',
          'u': 0.3296186666666667,
          'q': [
            354.7,
            628.6,
            2063,
            2587.8
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': [
            2.72,
            0.272,
            20.4
          ]
        },
        {
          'm': 'Qwen-3.6-Max-Preview',
          't': '',
          'u': 1.5841280000000002,
          'q': [
            111,
            182,
            429.3,
            488.2
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': [
            8.84,
            1.768,
            53.04
          ]
        },
        {
          'm': 'Qwen-3.6-Plus',
          't': '[≤256K]',
          'u': 0.60928,
          'q': [
            288.5,
            473.2,
            1116.1,
            1269.4
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': [
            3.4,
            0.68,
            20.4
          ]
        },
        {
          'm': 'Qwen-3.6-Plus',
          't': '[>256K]',
          'u': 1.4440933333333337,
          'q': [
            72.3,
            130.3,
            470.9,
            613.3
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': [
            13.6,
            1.36,
            40.8
          ]
        },
        {
          'm': 'Qwen-3.7-Max',
          't': '',
          'u': 2.8764000000000003,
          'q': [
            58.5,
            96.9,
            236.4,
            271.1
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': [
            17,
            3.4,
            51
          ]
        },
        {
          'm': 'Qwen-3.7-Plus',
          't': '[≤256K]',
          'u': 0.46929066666666674,
          'q': [
            364,
            600.8,
            1449,
            1656.9
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': [
            2.72,
            0.544,
            10.88
          ]
        },
        {
          'm': 'Qwen-3.7-Plus',
          't': '[>256K]',
          'u': 1.4078720000000002,
          'q': [
            121.3,
            200.3,
            483,
            552.3
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': [
            8.16,
            1.632,
            32.64
          ]
        },
        {
          'm': 'Qwen-3.8-Flash-Next',
          't': '',
          'u': 0.11530080000000001,
          'q': [
            903.5,
            1630,
            5897.6,
            7686.5
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': [
            1.088,
            0.1088,
            3.196
          ]
        },
        {
          'm': 'Qwen-3.7-Flash',
          't': '[≤32K]',
          'u': 0.035423466666666674,
          'q': [
            4846.3,
            7989.8,
            19196.3,
            21930.5
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': [
            0.204,
            0.0408,
            0.884
          ]
        },
        {
          'm': 'Qwen-3.7-Flash',
          't': '[32K<上下文≤256K]',
          'u': 0.11732266666666669,
          'q': [
            1456.1,
            2403.2,
            5796,
            6627.7
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': [
            0.68,
            0.136,
            2.72
          ]
        },
        {
          'm': 'Qwen-3.7-Flash',
          't': '[>256K]',
          'u': 0.23464533333333337,
          'q': [
            728.1,
            1201.6,
            2898,
            3313.8
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': [
            1.36,
            0.272,
            5.44
          ]
        },
        {
          'm': 'LongCat-2.0',
          't': '',
          'u': 0.12057080000000005,
          'q': [
            466.7,
            902.4,
            5639.8,
            10574.7
          ],
          's': 'c',
          'w': null,
          'b': 'LongCat',
          'p': [
            2.04,
            0.0408,
            8.16
          ]
        },
        {
          'm': 'Step-5-Preview',
          't': '',
          'u': 0.5009900000000002,
          'q': [
            142.7,
            269.7,
            1357.3,
            2115.8
          ],
          's': 'c',
          'w': null,
          'b': '阶跃星辰',
          'p': [
            6.8,
            0.34,
            18.36
          ]
        },
        {
          'm': 'step-3.7-flash',
          't': '',
          'u': 0.24257866666666666,
          'q': [
            722.2,
            1185.3,
            2803.2,
            3190.3
          ],
          's': 'c',
          'w': null,
          'b': '阶跃星辰',
          'p': [
            1.36,
            0.272,
            7.82
          ]
        },
        {
          'm': 'step-3.5-flash',
          't': '',
          'u': 0.11280066666666669,
          'q': [
            1625.4,
            2640.4,
            6028.3,
            6804.4
          ],
          's': 'c',
          'w': null,
          'b': '阶跃星辰',
          'p': [
            0.612,
            0.136,
            2.04
          ]
        },
        {
          'm': 'MiMo-V2.6-Pro',
          't': '',
          'u': 0.1332534800000001,
          'q': [
            319.2,
            630.1,
            5103.1,
            13831.2
          ],
          's': 'c',
          'w': null,
          'b': '小米 MiMo',
          'p': [
            2.958,
            0.0245,
            5.916
          ]
        },
        {
          'm': 'MiMo-V2.6-Pro',
          't': '[UltraSpeed]',
          'u': 1.3325348000000008,
          'q': [
            31.9,
            63,
            510.3,
            1383.1
          ],
          's': 'c',
          'w': null,
          'b': '小米 MiMo',
          'p': [
            29.58,
            0.2448,
            59.16
          ]
        },
        {
          'm': 'MiMo-V2.6-Flash',
          't': '',
          'u': 0.04991970666666669,
          'q': [
            1003,
            1957.3,
            13621.9,
            28966.1
          ],
          's': 'c',
          'w': null,
          'b': '小米 MiMo',
          'p': [
            0.952,
            0.019,
            1.904
          ]
        },
        {
          'm': 'Nemotron-3-Ultra',
          't': '',
          'u': 0.7039360000000001,
          'q': [
            242.7,
            400.5,
            966,
            1104.6
          ],
          's': 'c',
          'w': null,
          'b': 'NVIDIA',
          'p': [
            4.08,
            0.816,
            16.32
          ]
        },
        {
          'm': 'Claude Fable 5.1',
          't': '',
          'u': 6.689925000000003,
          'q': [
            9.3,
            17.9,
            101.6,
            174.1
          ],
          's': 'c',
          'w': null,
          'b': 'Claude',
          'p': [
            68,
            1.7,
            340
          ]
        },
        {
          'm': 'Claude Fable 5',
          't': '',
          'u': 11.510700000000002,
          'q': [
            9.6,
            17.1,
            59.1,
            75.6
          ],
          's': 'c',
          'w': null,
          'b': 'Claude',
          'p': [
            68,
            6.8,
            340
          ]
        },
        {
          'm': 'Claude Opus 5.5',
          't': '',
          'u': 3.3187400000000014,
          'q': [
            23.6,
            44.2,
            204.9,
            302.8
          ],
          's': 'c',
          'w': null,
          'b': 'Claude',
          'p': [
            27.2,
            1.36,
            136
          ]
        },
        {
          'm': 'Claude Opus 5',
          't': '',
          'u': 5.755350000000001,
          'q': [
            19.1,
            34.2,
            118.2,
            151.1
          ],
          's': 'c',
          'w': null,
          'b': 'Claude',
          'p': [
            34,
            3.4,
            170
          ]
        },
        {
          'm': 'Claude Opus 4.8',
          't': '',
          'u': 5.755350000000001,
          'q': [
            19.1,
            34.2,
            118.2,
            151.1
          ],
          's': 'c',
          'w': null,
          'b': 'Claude',
          'p': [
            34,
            3.4,
            170
          ]
        },
        {
          'm': 'Claude Opus 4.7',
          't': '',
          'u': 5.755350000000001,
          'q': [
            19.1,
            34.2,
            118.2,
            151.1
          ],
          's': 'c',
          'w': null,
          'b': 'Claude',
          'p': [
            34,
            3.4,
            170
          ]
        },
        {
          'm': 'Claude Opus 4.6',
          't': '',
          'u': 5.755350000000001,
          'q': [
            19.1,
            34.2,
            118.2,
            151.1
          ],
          's': 'c',
          'w': null,
          'b': 'Claude',
          'p': [
            34,
            3.4,
            170
          ]
        },
        {
          'm': 'Claude Sonnet 5.5',
          't': '',
          'u': 1.1062466666666673,
          'q': [
            70.8,
            132.5,
            614.7,
            908.5
          ],
          's': 'c',
          'w': null,
          'b': 'Claude',
          'p': [
            13.6,
            0.68,
            68
          ]
        },
        {
          'm': 'Claude Sonnet 5',
          't': '',
          'u': 2.3021400000000005,
          'q': [
            47.8,
            85.5,
            295.4,
            377.8
          ],
          's': 'c',
          'w': null,
          'b': 'Claude',
          'p': [
            13.6,
            1.36,
            68
          ]
        },
        {
          'm': 'Claude Sonnet 4.6',
          't': '',
          'u': 3.4532100000000003,
          'q': [
            31.9,
            57,
            196.9,
            251.9
          ],
          's': 'c',
          'w': null,
          'b': 'Claude',
          'p': [
            20.4,
            2.04,
            102
          ]
        },
        {
          'm': 'Claude Haiku 5.5',
          't': '[≤100K]',
          'u': 0.07673800000000001,
          'q': [
            1433.4,
            2565.1,
            8861.3,
            11334.2
          ],
          's': 'c',
          'w': null,
          'b': 'Claude',
          'p': [
            0.68,
            0.068,
            3.4
          ]
        },
        {
          'm': 'Claude Haiku 5.5',
          't': '[>100K]',
          'u': 0.38369000000000003,
          'q': [
            286.7,
            513,
            1772.3,
            2266.8
          ],
          's': 'c',
          'w': null,
          'b': 'Claude',
          'p': [
            3.4,
            0.34,
            17
          ]
        },
        {
          'm': 'Claude Haiku 4.5',
          't': '',
          'u': 1.1510700000000003,
          'q': [
            95.6,
            171,
            590.8,
            755.6
          ],
          's': 'c',
          'w': null,
          'b': 'Claude',
          'p': [
            6.8,
            0.68,
            34
          ]
        },
        {
          'm': 'GPT-6-Astra',
          't': '',
          'u': 11.510700000000002,
          'q': [
            9.6,
            17.1,
            59.1,
            75.6
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            68,
            6.8,
            340
          ]
        },
        {
          'm': 'GPT-6.1-Sol',
          't': '',
          'u': 1.6593700000000007,
          'q': [
            47.2,
            88.4,
            409.8,
            605.7
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            13.6,
            0.68,
            68
          ]
        },
        {
          'm': 'GPT-6-Sol',
          't': '[≤272K]',
          'u': 2.3021400000000005,
          'q': [
            47.8,
            85.5,
            295.4,
            377.8
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            13.6,
            1.36,
            68
          ]
        },
        {
          'm': 'GPT-6-Sol',
          't': '[>272K]',
          'u': 4.434280000000001,
          'q': [
            24,
            43.2,
            153.4,
            198.3
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            27.2,
            2.72,
            102
          ]
        },
        {
          'm': 'GPT-6-Luna',
          't': '[≤272K]',
          'u': 0.07673800000000001,
          'q': [
            1433.4,
            2565.1,
            8861.3,
            11334.2
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            0.68,
            0.068,
            3.4
          ]
        },
        {
          'm': 'GPT-6-Luna',
          't': '[>272K]',
          'u': 0.14780933333333338,
          'q': [
            720.4,
            1295.5,
            4600.5,
            5949.8
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            1.36,
            0.136,
            5.1
          ]
        },
        {
          'm': 'GPT-5.6-Sol',
          't': '[≤272K]',
          'u': 3.9502333333333337,
          'q': [
            28.6,
            50.9,
            172.1,
            218.4
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            34,
            3.4,
            204
          ]
        },
        {
          'm': 'GPT-5.6-Sol',
          't': '[>272K]',
          'u': 7.560466666666668,
          'q': [
            14.4,
            25.8,
            89.9,
            115.5
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            68,
            6.8,
            306
          ]
        },
        {
          'm': 'GPT-5.6-Terra',
          't': '[≤272K]',
          'u': 2.3701400000000006,
          'q': [
            47.6,
            84.8,
            286.9,
            364
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            13.6,
            1.36,
            81.6
          ]
        },
        {
          'm': 'GPT-5.6-Terra',
          't': '[>272K]',
          'u': 4.5362800000000005,
          'q': [
            23.9,
            42.9,
            149.9,
            192.6
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            27.2,
            2.72,
            122.4
          ]
        },
        {
          'm': 'GPT-5.6-Luna',
          't': '[≤272K]',
          'u': 0.15800933333333336,
          'q': [
            713.8,
            1272.4,
            4303.5,
            5459.7
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            1.36,
            0.136,
            8.16
          ]
        },
        {
          'm': 'GPT-5.6-Luna',
          't': '[>272K]',
          'u': 0.3024186666666668,
          'q': [
            359.1,
            643.9,
            2248.5,
            2888.4
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            2.72,
            0.272,
            12.24
          ]
        },
        {
          'm': 'GPT-5.5',
          't': '',
          'u': 5.925350000000001,
          'q': [
            19,
            33.9,
            114.8,
            145.6
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            34,
            3.4,
            204
          ]
        },
        {
          'm': 'GPT-5.4',
          't': '',
          'u': 2.9626750000000004,
          'q': [
            38.1,
            67.9,
            229.5,
            291.2
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            17,
            1.7,
            102
          ]
        },
        {
          'm': 'GPT-5.4-mini',
          't': '',
          'u': 0.8888025000000002,
          'q': [
            126.9,
            226.2,
            765.1,
            970.6
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            5.1,
            0.51,
            30.6
          ]
        },
        {
          'm': 'GPT-5.3-Codex',
          't': '',
          'u': 4.16245,
          'q': [
            48.7,
            77.2,
            163.4,
            181.4
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            13.6,
            3.4,
            54.4
          ]
        },
        {
          'm': 'Gemini-3.8-Flash',
          't': '',
          'u': 1.1510700000000003,
          'q': [
            95.6,
            171,
            590.8,
            755.6
          ],
          's': 'c',
          'w': null,
          'b': 'Gemini',
          'p': [
            10.2,
            1.02,
            51
          ]
        },
        {
          'm': 'Gemini-3.7-Flash',
          't': '',
          'u': 1.1510700000000003,
          'q': [
            95.6,
            171,
            590.8,
            755.6
          ],
          's': 'c',
          'w': null,
          'b': 'Gemini',
          'p': [
            10.2,
            1.02,
            51
          ]
        },
        {
          'm': 'Gemini-3.6-Flash',
          't': '',
          'u': 1.7266050000000002,
          'q': [
            63.7,
            114,
            393.8,
            503.7
          ],
          's': 'c',
          'w': null,
          'b': 'Gemini',
          'p': [
            10.2,
            1.02,
            51
          ]
        },
        {
          'm': 'Gemini-3.5-Flash',
          't': '',
          'u': 1.7776050000000003,
          'q': [
            63.4,
            113.1,
            382.5,
            485.3
          ],
          's': 'c',
          'w': null,
          'b': 'Gemini',
          'p': [
            10.2,
            1.02,
            61.2
          ]
        },
        {
          'm': 'Gemini-3.5-Flash-Lite',
          't': '',
          'u': 0.379321,
          'q': [
            314.2,
            555.1,
            1792.7,
            2235.7
          ],
          's': 'c',
          'w': null,
          'b': 'Gemini',
          'p': [
            2.04,
            0.204,
            17
          ]
        },
        {
          'm': 'Gemini-3.1-Flash-Lite',
          't': '',
          'u': 0.32840600000000014,
          'q': [
            381.8,
            669,
            2070.6,
            2544.5
          ],
          's': 'c',
          'w': null,
          'b': 'Gemini',
          'p': [
            1.7,
            0.204,
            10.2
          ]
        },
        {
          'm': 'Fugu-Ultra',
          't': '',
          'u': 5.925350000000001,
          'q': [
            19,
            33.9,
            114.8,
            145.6
          ],
          's': 'c',
          'w': null,
          'b': 'Fugu',
          'p': [
            34,
            3.4,
            204
          ]
        },
        {
          'm': 'Muse-Spark-1.3',
          't': '',
          'u': 1.02102,
          'q': [
            115.8,
            204.9,
            666,
            832.5
          ],
          's': 'c',
          'w': null,
          'b': 'Muse',
          'p': [
            8.5,
            1.02,
            28.9
          ]
        },
        {
          'm': 'Muse-Spark-1.3',
          't': '[Contributor]',
          'u': 0.035656933333333356,
          'q': [
            1404.2,
            2740.2,
            19070.6,
            40552.5
          ],
          's': 'c',
          'w': null,
          'b': 'Muse',
          'p': [
            0.68,
            0.0136,
            1.36
          ]
        },
        {
          'm': 'Muse-Spark-1.2',
          't': '',
          'u': 1.02102,
          'q': [
            115.8,
            204.9,
            666,
            832.5
          ],
          's': 'c',
          'w': null,
          'b': 'Muse',
          'p': [
            8.5,
            1.02,
            28.9
          ]
        },
        {
          'm': 'Muse-Spark-1.2',
          't': '[Contributor]',
          'u': 0.035656933333333356,
          'q': [
            1404.2,
            2740.2,
            19070.6,
            40552.5
          ],
          's': 'c',
          'w': null,
          'b': 'Muse',
          'p': [
            0.68,
            0.0136,
            1.36
          ]
        },
        {
          'm': 'Muse-Spark-1.1',
          't': '',
          'u': 1.5315299999999998,
          'q': [
            77.2,
            136.6,
            444,
            555
          ],
          's': 'c',
          'w': null,
          'b': 'Muse',
          'p': [
            8.5,
            1.02,
            28.9
          ]
        },
        {
          'm': 'Grok-4.7',
          't': '[≤200K]',
          'u': 2.729633333333333,
          'q': [
            73.4,
            116.7,
            249.1,
            277.1
          ],
          's': 'c',
          'w': null,
          'b': 'Grok',
          'p': [
            13.6,
            3.4,
            40.8
          ]
        },
        {
          'm': 'Grok-4.7',
          't': '[>200K]',
          'u': 5.459266666666666,
          'q': [
            36.7,
            58.4,
            124.6,
            138.5
          ],
          's': 'c',
          'w': null,
          'b': 'Grok',
          'p': [
            27.2,
            6.8,
            81.6
          ]
        },
        {
          'm': 'Grok-4.6',
          't': '[≤200K]',
          'u': 2.729633333333333,
          'q': [
            73.4,
            116.7,
            249.1,
            277.1
          ],
          's': 'c',
          'w': null,
          'b': 'Grok',
          'p': [
            13.6,
            3.4,
            40.8
          ]
        },
        {
          'm': 'Grok-4.6',
          't': '[>200K]',
          'u': 5.459266666666666,
          'q': [
            36.7,
            58.4,
            124.6,
            138.5
          ],
          's': 'c',
          'w': null,
          'b': 'Grok',
          'p': [
            27.2,
            6.8,
            81.6
          ]
        },
        {
          'm': 'Grok-4.5',
          't': '',
          'u': 2.729633333333333,
          'q': [
            73.4,
            116.7,
            249.1,
            277.1
          ],
          's': 'c',
          'w': null,
          'b': 'Grok',
          'p': [
            13.6,
            3.4,
            40.8
          ]
        },
        {
          'm': 'Mistral-Large-4',
          't': '',
          'u': 1.0013906666666672,
          'q': [
            106.3,
            191.2,
            679.1,
            878.3
          ],
          's': 'c',
          'w': null,
          'b': 'Mistral AI',
          'p': [
            9.248,
            0.952,
            28.424
          ]
        },
        {
          'm': 'Inkling',
          't': '',
          'u': 1.045806,
          'q': [
            145.2,
            245.6,
            650.2,
            761.7
          ],
          's': 'c',
          'w': null,
          'b': 'Inkling',
          'p': [
            6.8,
            1.156,
            27.54
          ]
        },
        {
          'm': 'Inkling-Small',
          't': '',
          'u': 0.5684800000000001,
          'q': [
            293.4,
            486.7,
            1196.2,
            1374.2
          ],
          's': 'c',
          'w': null,
          'b': 'Inkling',
          'p': [
            3.4,
            0.68,
            8.16
          ]
        },
        {
          'm': 'Muse Spark Open',
          't': '',
          'u': 1.02102,
          'q': [
            115.8,
            204.9,
            666,
            832.5
          ],
          's': 'c',
          'w': null,
          'b': 'Muse',
          'p': [
            8.5,
            1.02,
            28.9
          ]
        },
        {
          'm': 'Nemotron 3.5 Super VL',
          't': '',
          'u': 0.2278453333333334,
          'q': [
            733.2,
            1215.9,
            2984.5,
            3427.7
          ],
          's': 'c',
          'w': null,
          'b': 'NVIDIA',
          'p': [
            1.36,
            0.272,
            3.4
          ]
        },
        {
          'm': 'Qwen-3.8-Max-Prime',
          't': '',
          'u': 3.316700000000001,
          'q': [
            36.3,
            64,
            205,
            254.9
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': [
            27.2,
            3.4,
            81.6
          ]
        },
        {
          'm': 'Gemini 4 Argon',
          't': '',
          'u': 1.6593700000000007,
          'q': [
            47.2,
            88.4,
            409.8,
            605.7
          ],
          's': 'c',
          'w': null,
          'b': 'Gemini',
          'p': [
            13.6,
            0.68,
            68
          ]
        },
        {
          'm': 'Muse Wonder',
          't': '',
          'u': 3.3187400000000014,
          'q': [
            23.6,
            44.2,
            204.9,
            302.8
          ],
          's': 'c',
          'w': null,
          'b': 'Muse',
          'p': [
            27.2,
            1.36,
            136
          ]
        },
        {
          'm': 'MiniMax-M3.1-Flash',
          't': '',
          'u': 0.111707,
          'q': [
            959.6,
            1723.9,
            6087.4,
            7854.6
          ],
          's': 'c',
          'w': null,
          'b': 'MiniMax',
          'p': [
            1.02,
            0.102,
            4.08
          ]
        },
        {
          'm': 'Ornith 1.5 122B',
          't': '',
          'u': 0.1362946666666667,
          'q': [
            903.2,
            1587.5,
            4989.2,
            6163.1
          ],
          's': 'c',
          'w': null,
          'b': 'Ornith',
          'p': [
            1.088,
            0.136,
            4.352
          ]
        },
        {
          'm': 'GPT-6.1-Terra',
          't': '[≤272K]',
          'u': 0.8296850000000003,
          'q': [
            94.4,
            176.7,
            819.6,
            1211.3
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            6.8,
            0.34,
            34
          ]
        },
        {
          'm': 'GPT-6.1-Terra',
          't': '[>272K]',
          'u': 1.5743700000000005,
          'q': [
            47.4,
            89.2,
            431.9,
            656
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            13.6,
            0.68,
            51
          ]
        },
        {
          'm': 'Qwen4-Max',
          't': '',
          'u': 0.7616850000000003,
          'q': [
            95,
            179.4,
            892.8,
            1380.9
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': [
            10.2,
            0.51,
            30.6
          ]
        },
        {
          'm': 'Hy4-Flash',
          't': '',
          'u': 0.03501206666666669,
          'q': [
            2024.1,
            3829.6,
            19421.9,
            30437.9
          ],
          's': 'c',
          'w': null,
          'b': '腾讯混元',
          'p': [
            0.476,
            0.0204,
            1.9108
          ]
        },
        {
          'm': 'Hy4',
          't': '',
          'u': 0.4247597333333335,
          'q': [
            170.9,
            322.6,
            1600.9,
            2471.5
          ],
          's': 'c',
          'w': null,
          'b': '腾讯混元',
          'p': [
            5.6712,
            0.2856,
            17.0068
          ]
        },
        {
          'm': 'Muse Ember',
          't': '',
          'u': 0.051027200000000016,
          'q': [
            1411,
            2665.2,
            13326.2,
            20678.6
          ],
          's': 'c',
          'w': null,
          'b': 'Muse',
          'p': [
            0.68,
            0.0272,
            3.4
          ]
        },
        {
          'm': 'GPT-6.2-Astra',
          't': '',
          'u': 6.637480000000003,
          'q': [
            11.8,
            22.1,
            102.4,
            151.4
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            54.4,
            2.72,
            272
          ]
        },
        {
          'm': 'GPT-6.2-Sol',
          't': '',
          'u': 1.6593700000000007,
          'q': [
            47.2,
            88.4,
            409.8,
            605.7
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            13.6,
            0.68,
            68
          ]
        },
        {
          'm': 'Gemini 4 Carbon',
          't': '',
          'u': 1.1062466666666673,
          'q': [
            70.8,
            132.5,
            614.7,
            908.5
          ],
          's': 'c',
          'w': null,
          'b': 'Gemini',
          'p': [
            13.6,
            0.68,
            68
          ]
        },
        {
          'm': 'Inkling 2 Mini',
          't': '',
          'u': 0.08799200000000001,
          'q': [
            1941.5,
            3204.3,
            7728,
            8836.9
          ],
          's': 'c',
          'w': null,
          'b': 'Inkling',
          'p': [
            0.51,
            0.102,
            2.04
          ]
        },
        {
          'm': 'Gemini 4 Neon',
          't': '',
          'u': 2.4890550000000005,
          'q': [
            31.5,
            58.9,
            273.2,
            403.8
          ],
          's': 'c',
          'w': null,
          'b': 'Gemini',
          'p': [
            20.4,
            1.02,
            102
          ]
        }
      ]
    },
    {
      'slug': 'commandcode-max20',
      'name': 'Max 20×',
      'platform': 'Command Code',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'codingplan',
      'fee': 200,
      'currency': '$',
      'feeCny': 1360,
      'dm': 1,
      'models': [
        {
          'm': 'Kimi-K3.1-Pro',
          't': '',
          'u': 1.5347600000000001,
          'q': [
            143.3,
            256.5,
            886.1,
            1133.4
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': [
            13.6,
            1.36,
            68
          ]
        },
        {
          'm': 'Ling 3.1 Flash',
          't': '',
          'u': 0.3451680000000001,
          'q': [
            975.3,
            1614.8,
            3940.1,
            4518.5
          ],
          's': 'c',
          'w': null,
          'b': 'inclusionAI',
          'p': [
            2.04,
            0.408,
            6.12
          ]
        },
        {
          'm': 'Ling 3.1 Flash 1019',
          't': '',
          'u': 0.3451680000000001,
          'q': [
            975.3,
            1614.8,
            3940.1,
            4518.5
          ],
          's': 'c',
          'w': null,
          'b': 'inclusionAI',
          'p': [
            2.04,
            0.408,
            6.12
          ]
        },
        {
          'm': 'Hy4-preview',
          't': '',
          'u': 0.4247597333333335,
          'q': [
            341.9,
            645.2,
            3201.8,
            4943
          ],
          's': 'c',
          'w': null,
          'b': '腾讯混元',
          'p': [
            5.6712,
            0.2856,
            17.0068
          ]
        },
        {
          'm': 'Hy3',
          't': '',
          'u': 0.19470100000000004,
          'q': [
            2085.2,
            3305.6,
            6985.1,
            7752.1
          ],
          's': 'c',
          'w': null,
          'b': '腾讯混元',
          'p': [
            0.952,
            0.238,
            3.944
          ]
        },
        {
          'm': 'Kimi-K3',
          't': '',
          'u': 2.3021400000000005,
          'q': [
            95.6,
            171,
            590.8,
            755.6
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': [
            20.4,
            2.04,
            102
          ]
        },
        {
          'm': 'Kimi-K2.7-Code',
          't': '',
          'u': 1.1190986666666667,
          'q': [
            306.3,
            505.1,
            1215.3,
            1388.8
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': [
            6.46,
            1.292,
            27.2
          ]
        },
        {
          'm': 'Kimi-K2.7-Code-HighSpeed',
          't': '[高速]',
          'u': 2.2381973333333334,
          'q': [
            153.1,
            252.6,
            607.6,
            694.4
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': [
            12.92,
            2.584,
            54.4
          ]
        },
        {
          'm': 'Kimi-K2.6',
          't': '',
          'u': 0.9905446666666669,
          'q': [
            305.5,
            517.1,
            1373,
            1609.9
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': [
            6.46,
            1.088,
            27.2
          ]
        },
        {
          'm': 'Kimi-K2.5',
          't': '',
          'u': 0.6318333333333334,
          'q': [
            481.8,
            814.6,
            2152.5,
            2520.4
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': [
            4.08,
            0.68,
            20.4
          ]
        },
        {
          'm': 'GLM-5.3-Flash',
          't': '',
          'u': 0.17371733333333333,
          'q': [
            1947.5,
            3221.1,
            7828.8,
            8969.3
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': [
            1.02,
            0.204,
            3.4
          ]
        },
        {
          'm': 'GLM-5.3-FlashX',
          't': '',
          'u': 0.4331656666666666,
          'q': [
            789.5,
            1302.8,
            3139.7,
            3589.6
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': [
            2.516,
            0.51,
            8.5
          ]
        },
        {
          'm': 'GLM-5.3',
          't': '',
          'u': 1.529614666666667,
          'q': [
            208.6,
            349.3,
            889.1,
            1030.7
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': [
            9.52,
            1.768,
            29.92
          ]
        },
        {
          'm': 'GLM-5.2',
          't': '',
          'u': 1.529614666666667,
          'q': [
            208.6,
            349.3,
            889.1,
            1030.7
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': [
            9.52,
            1.768,
            29.92
          ]
        },
        {
          'm': 'GLM-5.2-Fast',
          't': '',
          'u': 3.0515000000000008,
          'q': [
            97.1,
            165,
            445.7,
            525.1
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': [
            20.4,
            3.4,
            69.7
          ]
        },
        {
          'm': 'GLM-5.1',
          't': '',
          'u': 1.529614666666667,
          'q': [
            208.6,
            349.3,
            889.1,
            1030.7
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': [
            9.52,
            1.768,
            29.92
          ]
        },
        {
          'm': 'GLM-5',
          't': '',
          'u': 1.1550933333333335,
          'q': [
            292.3,
            483.7,
            1177.4,
            1349.4
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': [
            6.8,
            1.36,
            21.76
          ]
        },
        {
          'm': 'MiniMax-M3',
          't': '[≤512K]',
          'u': 0.35196800000000006,
          'q': [
            970.8,
            1602.1,
            3864,
            4418.5
          ],
          's': 'c',
          'w': null,
          'b': 'MiniMax',
          'p': [
            2.04,
            0.408,
            8.16
          ]
        },
        {
          'm': 'MiniMax-M3',
          't': '[>512K]',
          'u': 0.35196800000000006,
          'q': [
            970.8,
            1602.1,
            3864,
            4418.5
          ],
          's': 'c',
          'w': null,
          'b': 'MiniMax',
          'p': [
            2.04,
            0.408,
            8.16
          ]
        },
        {
          'm': 'MiniMax-M2.7',
          't': '',
          'u': 0.35196800000000006,
          'q': [
            970.8,
            1602.1,
            3864,
            4418.5
          ],
          's': 'c',
          'w': null,
          'b': 'MiniMax',
          'p': [
            2.04,
            0.408,
            8.16
          ]
        },
        {
          'm': 'MiniMax-M2.5',
          't': '',
          'u': 0.223414,
          'q': [
            959.6,
            1723.9,
            6087.4,
            7854.6
          ],
          's': 'c',
          'w': null,
          'b': 'MiniMax',
          'p': [
            2.04,
            0.204,
            8.16
          ]
        },
        {
          'm': 'DeepSeek-V4-Pro-0813',
          't': '[谷]',
          'u': 0.28800493333333343,
          'q': [
            428.6,
            821.9,
            4722.1,
            8167.2
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': [
            4.488,
            0.1496,
            13.464
          ]
        },
        {
          'm': 'DeepSeek-V4-Pro-0813',
          't': '[峰]',
          'u': 0.5760098666666669,
          'q': [
            214.3,
            410.9,
            2361.1,
            4083.6
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': [
            8.976,
            0.2992,
            26.928
          ]
        },
        {
          'm': 'DeepSeek-V4-Flash-0731',
          't': '[谷]',
          'u': 0.060285400000000024,
          'q': [
            1867,
            3609.5,
            22559.4,
            42298.8
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': [
            1.02,
            0.0204,
            4.08
          ]
        },
        {
          'm': 'DeepSeek-V4-Flash-0731',
          't': '[峰]',
          'u': 0.12057080000000005,
          'q': [
            933.5,
            1804.7,
            11279.7,
            21149.4
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': [
            2.04,
            0.0408,
            8.16
          ]
        },
        {
          'm': 'DeepSeek-V4-Flash-Vision-Exp',
          't': '[谷]',
          'u': 0.060285400000000024,
          'q': [
            1867,
            3609.5,
            22559.4,
            42298.8
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': [
            1.02,
            0.0204,
            4.08
          ]
        },
        {
          'm': 'DeepSeek-V4-Flash-Vision-Exp',
          't': '[峰]',
          'u': 0.12057080000000005,
          'q': [
            933.5,
            1804.7,
            11279.7,
            21149.4
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': [
            2.04,
            0.0408,
            8.16
          ]
        },
        {
          'm': 'DeepSeek-V4-Flash-Fast',
          't': '',
          'u': 0.3758020000000001,
          'q': [
            1053.3,
            1680.2,
            3618.9,
            4032.5
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': [
            1.904,
            0.476,
            3.808
          ]
        },
        {
          'm': 'DeepSeek-V4.1-Flash-1017',
          't': '[谷]',
          'u': 0.060285400000000024,
          'q': [
            1867,
            3609.5,
            22559.4,
            42298.8
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': [
            1.02,
            0.0204,
            4.08
          ]
        },
        {
          'm': 'DeepSeek-V4.1-Flash-1017',
          't': '[峰]',
          'u': 0.12057080000000005,
          'q': [
            933.5,
            1804.7,
            11279.7,
            21149.4
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': [
            2.04,
            0.0408,
            8.16
          ]
        },
        {
          'm': 'DeepSeek-V4.1-Flash-1017',
          't': '[Fast] [谷]',
          'u': 0.11779413333333336,
          'q': [
            1802,
            3242,
            11545.6,
            14949
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': [
            1.088,
            0.1088,
            3.944
          ]
        },
        {
          'm': 'DeepSeek-V4.1-Flash-1017',
          't': '[Fast] [峰]',
          'u': 0.2355882666666667,
          'q': [
            901,
            1621,
            5772.8,
            7474.5
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': [
            2.176,
            0.2176,
            7.888
          ]
        },
        {
          'm': 'Qwen 3.8 Omni Flash',
          't': '',
          'u': 0.11304546666666669,
          'q': [
            1928.4,
            3455.6,
            12030.6,
            15435.2
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': [
            1.02,
            0.1088,
            3.196
          ]
        },
        {
          'm': 'Qwen-3.8-Max-0902',
          't': '',
          'u': 1.6583500000000004,
          'q': [
            145.1,
            256.1,
            820.1,
            1019.8
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': [
            13.6,
            1.7,
            40.8
          ]
        },
        {
          'm': 'Qwen-3.8-Max',
          't': '',
          'u': 1.6583500000000004,
          'q': [
            145.1,
            256.1,
            820.1,
            1019.8
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': [
            13.6,
            1.7,
            40.8
          ]
        },
        {
          'm': 'Qwen-3.8-27B',
          't': '',
          'u': 0.3296186666666667,
          'q': [
            709.3,
            1257.3,
            4126,
            5175.7
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': [
            2.72,
            0.272,
            20.4
          ]
        },
        {
          'm': 'Qwen-3.6-Max-Preview',
          't': '',
          'u': 1.5841280000000002,
          'q': [
            222,
            364,
            858.5,
            976.4
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': [
            8.84,
            1.768,
            53.04
          ]
        },
        {
          'm': 'Qwen-3.6-Plus',
          't': '[≤256K]',
          'u': 0.60928,
          'q': [
            577.1,
            946.4,
            2232.1,
            2538.7
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': [
            3.4,
            0.68,
            20.4
          ]
        },
        {
          'm': 'Qwen-3.6-Plus',
          't': '[>256K]',
          'u': 1.4440933333333337,
          'q': [
            144.5,
            260.7,
            941.8,
            1226.7
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': [
            13.6,
            1.36,
            40.8
          ]
        },
        {
          'm': 'Qwen-3.7-Max',
          't': '',
          'u': 2.8764000000000003,
          'q': [
            117,
            193.8,
            472.8,
            542.2
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': [
            17,
            3.4,
            51
          ]
        },
        {
          'm': 'Qwen-3.7-Plus',
          't': '[≤256K]',
          'u': 0.46929066666666674,
          'q': [
            728.1,
            1201.6,
            2898,
            3313.8
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': [
            2.72,
            0.544,
            10.88
          ]
        },
        {
          'm': 'Qwen-3.7-Plus',
          't': '[>256K]',
          'u': 1.4078720000000002,
          'q': [
            242.7,
            400.5,
            966,
            1104.6
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': [
            8.16,
            1.632,
            32.64
          ]
        },
        {
          'm': 'Qwen-3.8-Flash-Next',
          't': '',
          'u': 0.11530080000000001,
          'q': [
            1807.1,
            3260,
            11795.2,
            15372.9
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': [
            1.088,
            0.1088,
            3.196
          ]
        },
        {
          'm': 'Qwen-3.7-Flash',
          't': '[≤32K]',
          'u': 0.035423466666666674,
          'q': [
            9692.6,
            15979.6,
            38392.6,
            43861
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': [
            0.204,
            0.0408,
            0.884
          ]
        },
        {
          'm': 'Qwen-3.7-Flash',
          't': '[32K<上下文≤256K]',
          'u': 0.11732266666666669,
          'q': [
            2912.3,
            4806.4,
            11592,
            13255.4
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': [
            0.68,
            0.136,
            2.72
          ]
        },
        {
          'm': 'Qwen-3.7-Flash',
          't': '[>256K]',
          'u': 0.23464533333333337,
          'q': [
            1456.1,
            2403.2,
            5796,
            6627.7
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': [
            1.36,
            0.272,
            5.44
          ]
        },
        {
          'm': 'LongCat-2.0',
          't': '',
          'u': 0.12057080000000005,
          'q': [
            933.5,
            1804.7,
            11279.7,
            21149.4
          ],
          's': 'c',
          'w': null,
          'b': 'LongCat',
          'p': [
            2.04,
            0.0408,
            8.16
          ]
        },
        {
          'm': 'Step-5-Preview',
          't': '',
          'u': 0.5009900000000002,
          'q': [
            285.3,
            539.4,
            2714.6,
            4231.6
          ],
          's': 'c',
          'w': null,
          'b': '阶跃星辰',
          'p': [
            6.8,
            0.34,
            18.36
          ]
        },
        {
          'm': 'step-3.7-flash',
          't': '',
          'u': 0.24257866666666666,
          'q': [
            1444.4,
            2370.7,
            5606.4,
            6380.6
          ],
          's': 'c',
          'w': null,
          'b': '阶跃星辰',
          'p': [
            1.36,
            0.272,
            7.82
          ]
        },
        {
          'm': 'step-3.5-flash',
          't': '',
          'u': 0.11280066666666669,
          'q': [
            3250.9,
            5280.8,
            12056.7,
            13608.8
          ],
          's': 'c',
          'w': null,
          'b': '阶跃星辰',
          'p': [
            0.612,
            0.136,
            2.04
          ]
        },
        {
          'm': 'MiMo-V2.6-Pro',
          't': '',
          'u': 0.1332534800000001,
          'q': [
            638.4,
            1260.1,
            10206.1,
            27662.4
          ],
          's': 'c',
          'w': null,
          'b': '小米 MiMo',
          'p': [
            2.958,
            0.0245,
            5.916
          ]
        },
        {
          'm': 'MiMo-V2.6-Pro',
          't': '[UltraSpeed]',
          'u': 1.3325348000000008,
          'q': [
            63.8,
            126,
            1020.6,
            2766.2
          ],
          's': 'c',
          'w': null,
          'b': '小米 MiMo',
          'p': [
            29.58,
            0.2448,
            59.16
          ]
        },
        {
          'm': 'MiMo-V2.6-Flash',
          't': '',
          'u': 0.04991970666666669,
          'q': [
            2006,
            3914.6,
            27243.7,
            57932.1
          ],
          's': 'c',
          'w': null,
          'b': '小米 MiMo',
          'p': [
            0.952,
            0.019,
            1.904
          ]
        },
        {
          'm': 'Nemotron-3-Ultra',
          't': '',
          'u': 0.7039360000000001,
          'q': [
            485.4,
            801.1,
            1932,
            2209.2
          ],
          's': 'c',
          'w': null,
          'b': 'NVIDIA',
          'p': [
            4.08,
            0.816,
            16.32
          ]
        },
        {
          'm': 'Claude Fable 5.1',
          't': '',
          'u': 6.689925000000003,
          'q': [
            18.7,
            35.8,
            203.3,
            348.1
          ],
          's': 'c',
          'w': null,
          'b': 'Claude',
          'p': [
            68,
            1.7,
            340
          ]
        },
        {
          'm': 'Claude Fable 5',
          't': '',
          'u': 11.510700000000002,
          'q': [
            19.1,
            34.2,
            118.2,
            151.1
          ],
          's': 'c',
          'w': null,
          'b': 'Claude',
          'p': [
            68,
            6.8,
            340
          ]
        },
        {
          'm': 'Claude Opus 5.5',
          't': '',
          'u': 3.3187400000000014,
          'q': [
            47.2,
            88.4,
            409.8,
            605.7
          ],
          's': 'c',
          'w': null,
          'b': 'Claude',
          'p': [
            27.2,
            1.36,
            136
          ]
        },
        {
          'm': 'Claude Opus 5',
          't': '',
          'u': 5.755350000000001,
          'q': [
            38.2,
            68.4,
            236.3,
            302.2
          ],
          's': 'c',
          'w': null,
          'b': 'Claude',
          'p': [
            34,
            3.4,
            170
          ]
        },
        {
          'm': 'Claude Opus 4.8',
          't': '',
          'u': 5.755350000000001,
          'q': [
            38.2,
            68.4,
            236.3,
            302.2
          ],
          's': 'c',
          'w': null,
          'b': 'Claude',
          'p': [
            34,
            3.4,
            170
          ]
        },
        {
          'm': 'Claude Opus 4.7',
          't': '',
          'u': 5.755350000000001,
          'q': [
            38.2,
            68.4,
            236.3,
            302.2
          ],
          's': 'c',
          'w': null,
          'b': 'Claude',
          'p': [
            34,
            3.4,
            170
          ]
        },
        {
          'm': 'Claude Opus 4.6',
          't': '',
          'u': 5.755350000000001,
          'q': [
            38.2,
            68.4,
            236.3,
            302.2
          ],
          's': 'c',
          'w': null,
          'b': 'Claude',
          'p': [
            34,
            3.4,
            170
          ]
        },
        {
          'm': 'Claude Sonnet 5.5',
          't': '',
          'u': 1.1062466666666673,
          'q': [
            141.6,
            265.1,
            1229.4,
            1817
          ],
          's': 'c',
          'w': null,
          'b': 'Claude',
          'p': [
            13.6,
            0.68,
            68
          ]
        },
        {
          'm': 'Claude Sonnet 5',
          't': '',
          'u': 2.3021400000000005,
          'q': [
            95.6,
            171,
            590.8,
            755.6
          ],
          's': 'c',
          'w': null,
          'b': 'Claude',
          'p': [
            13.6,
            1.36,
            68
          ]
        },
        {
          'm': 'Claude Sonnet 4.6',
          't': '',
          'u': 3.4532100000000003,
          'q': [
            63.7,
            114,
            393.8,
            503.7
          ],
          's': 'c',
          'w': null,
          'b': 'Claude',
          'p': [
            20.4,
            2.04,
            102
          ]
        },
        {
          'm': 'Claude Haiku 5.5',
          't': '[≤100K]',
          'u': 0.07673800000000001,
          'q': [
            2866.9,
            5130.2,
            17722.6,
            22668.5
          ],
          's': 'c',
          'w': null,
          'b': 'Claude',
          'p': [
            0.68,
            0.068,
            3.4
          ]
        },
        {
          'm': 'Claude Haiku 5.5',
          't': '[>100K]',
          'u': 0.38369000000000003,
          'q': [
            573.4,
            1026,
            3544.5,
            4533.7
          ],
          's': 'c',
          'w': null,
          'b': 'Claude',
          'p': [
            3.4,
            0.34,
            17
          ]
        },
        {
          'm': 'Claude Haiku 4.5',
          't': '',
          'u': 1.1510700000000003,
          'q': [
            191.1,
            342,
            1181.5,
            1511.2
          ],
          's': 'c',
          'w': null,
          'b': 'Claude',
          'p': [
            6.8,
            0.68,
            34
          ]
        },
        {
          'm': 'GPT-6-Astra',
          't': '',
          'u': 11.510700000000002,
          'q': [
            19.1,
            34.2,
            118.2,
            151.1
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            68,
            6.8,
            340
          ]
        },
        {
          'm': 'GPT-6.1-Sol',
          't': '',
          'u': 1.6593700000000007,
          'q': [
            94.4,
            176.7,
            819.6,
            1211.3
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            13.6,
            0.68,
            68
          ]
        },
        {
          'm': 'GPT-6-Sol',
          't': '[≤272K]',
          'u': 2.3021400000000005,
          'q': [
            95.6,
            171,
            590.8,
            755.6
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            13.6,
            1.36,
            68
          ]
        },
        {
          'm': 'GPT-6-Sol',
          't': '[>272K]',
          'u': 4.434280000000001,
          'q': [
            48,
            86.4,
            306.7,
            396.7
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            27.2,
            2.72,
            102
          ]
        },
        {
          'm': 'GPT-6-Luna',
          't': '[≤272K]',
          'u': 0.07673800000000001,
          'q': [
            2866.9,
            5130.2,
            17722.6,
            22668.5
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            0.68,
            0.068,
            3.4
          ]
        },
        {
          'm': 'GPT-6-Luna',
          't': '[>272K]',
          'u': 0.14780933333333338,
          'q': [
            1440.9,
            2591,
            9201,
            11899.5
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            1.36,
            0.136,
            5.1
          ]
        },
        {
          'm': 'GPT-5.6-Sol',
          't': '[≤272K]',
          'u': 3.9502333333333337,
          'q': [
            57.1,
            101.8,
            344.3,
            436.8
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            34,
            3.4,
            204
          ]
        },
        {
          'm': 'GPT-5.6-Sol',
          't': '[>272K]',
          'u': 7.560466666666668,
          'q': [
            28.7,
            51.5,
            179.9,
            231.1
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            68,
            6.8,
            306
          ]
        },
        {
          'm': 'GPT-5.6-Terra',
          't': '[≤272K]',
          'u': 2.3701400000000006,
          'q': [
            95.2,
            169.6,
            573.8,
            728
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            13.6,
            1.36,
            81.6
          ]
        },
        {
          'm': 'GPT-5.6-Terra',
          't': '[>272K]',
          'u': 4.5362800000000005,
          'q': [
            47.9,
            85.8,
            299.8,
            385.1
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            27.2,
            2.72,
            122.4
          ]
        },
        {
          'm': 'GPT-5.6-Luna',
          't': '[≤272K]',
          'u': 0.15800933333333336,
          'q': [
            1427.5,
            2544.7,
            8607.1,
            10919.4
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            1.36,
            0.136,
            8.16
          ]
        },
        {
          'm': 'GPT-5.6-Luna',
          't': '[>272K]',
          'u': 0.3024186666666668,
          'q': [
            718.2,
            1287.7,
            4497.1,
            5776.9
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            2.72,
            0.272,
            12.24
          ]
        },
        {
          'm': 'GPT-5.5',
          't': '',
          'u': 5.925350000000001,
          'q': [
            38.1,
            67.9,
            229.5,
            291.2
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            34,
            3.4,
            204
          ]
        },
        {
          'm': 'GPT-5.4',
          't': '',
          'u': 2.9626750000000004,
          'q': [
            76.1,
            135.7,
            459,
            582.4
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            17,
            1.7,
            102
          ]
        },
        {
          'm': 'GPT-5.4-mini',
          't': '',
          'u': 0.8888025000000002,
          'q': [
            253.8,
            452.4,
            1530.1,
            1941.2
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            5.1,
            0.51,
            30.6
          ]
        },
        {
          'm': 'GPT-5.3-Codex',
          't': '',
          'u': 4.16245,
          'q': [
            97.4,
            154.4,
            326.7,
            362.7
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            13.6,
            3.4,
            54.4
          ]
        },
        {
          'm': 'Gemini-3.8-Flash',
          't': '',
          'u': 1.1510700000000003,
          'q': [
            191.1,
            342,
            1181.5,
            1511.2
          ],
          's': 'c',
          'w': null,
          'b': 'Gemini',
          'p': [
            10.2,
            1.02,
            51
          ]
        },
        {
          'm': 'Gemini-3.7-Flash',
          't': '',
          'u': 1.1510700000000003,
          'q': [
            191.1,
            342,
            1181.5,
            1511.2
          ],
          's': 'c',
          'w': null,
          'b': 'Gemini',
          'p': [
            10.2,
            1.02,
            51
          ]
        },
        {
          'm': 'Gemini-3.6-Flash',
          't': '',
          'u': 1.7266050000000002,
          'q': [
            127.4,
            228,
            787.7,
            1007.5
          ],
          's': 'c',
          'w': null,
          'b': 'Gemini',
          'p': [
            10.2,
            1.02,
            51
          ]
        },
        {
          'm': 'Gemini-3.5-Flash',
          't': '',
          'u': 1.7776050000000003,
          'q': [
            126.9,
            226.2,
            765.1,
            970.6
          ],
          's': 'c',
          'w': null,
          'b': 'Gemini',
          'p': [
            10.2,
            1.02,
            61.2
          ]
        },
        {
          'm': 'Gemini-3.5-Flash-Lite',
          't': '',
          'u': 0.379321,
          'q': [
            628.3,
            1110.2,
            3585.4,
            4471.4
          ],
          's': 'c',
          'w': null,
          'b': 'Gemini',
          'p': [
            2.04,
            0.204,
            17
          ]
        },
        {
          'm': 'Gemini-3.1-Flash-Lite',
          't': '',
          'u': 0.32840600000000014,
          'q': [
            763.6,
            1337.9,
            4141.2,
            5089
          ],
          's': 'c',
          'w': null,
          'b': 'Gemini',
          'p': [
            1.7,
            0.204,
            10.2
          ]
        },
        {
          'm': 'Fugu-Ultra',
          't': '',
          'u': 5.925350000000001,
          'q': [
            38.1,
            67.9,
            229.5,
            291.2
          ],
          's': 'c',
          'w': null,
          'b': 'Fugu',
          'p': [
            34,
            3.4,
            204
          ]
        },
        {
          'm': 'Muse-Spark-1.3',
          't': '',
          'u': 1.02102,
          'q': [
            231.7,
            409.8,
            1332,
            1665
          ],
          's': 'c',
          'w': null,
          'b': 'Muse',
          'p': [
            8.5,
            1.02,
            28.9
          ]
        },
        {
          'm': 'Muse-Spark-1.3',
          't': '[Contributor]',
          'u': 0.035656933333333356,
          'q': [
            2808.4,
            5480.5,
            38141.2,
            81105
          ],
          's': 'c',
          'w': null,
          'b': 'Muse',
          'p': [
            0.68,
            0.0136,
            1.36
          ]
        },
        {
          'm': 'Muse-Spark-1.2',
          't': '',
          'u': 1.02102,
          'q': [
            231.7,
            409.8,
            1332,
            1665
          ],
          's': 'c',
          'w': null,
          'b': 'Muse',
          'p': [
            8.5,
            1.02,
            28.9
          ]
        },
        {
          'm': 'Muse-Spark-1.2',
          't': '[Contributor]',
          'u': 0.035656933333333356,
          'q': [
            2808.4,
            5480.5,
            38141.2,
            81105
          ],
          's': 'c',
          'w': null,
          'b': 'Muse',
          'p': [
            0.68,
            0.0136,
            1.36
          ]
        },
        {
          'm': 'Muse-Spark-1.1',
          't': '',
          'u': 1.5315299999999998,
          'q': [
            154.4,
            273.2,
            888,
            1110
          ],
          's': 'c',
          'w': null,
          'b': 'Muse',
          'p': [
            8.5,
            1.02,
            28.9
          ]
        },
        {
          'm': 'Grok-4.7',
          't': '[≤200K]',
          'u': 2.729633333333333,
          'q': [
            146.8,
            233.4,
            498.2,
            554.1
          ],
          's': 'c',
          'w': null,
          'b': 'Grok',
          'p': [
            13.6,
            3.4,
            40.8
          ]
        },
        {
          'm': 'Grok-4.7',
          't': '[>200K]',
          'u': 5.459266666666666,
          'q': [
            73.4,
            116.7,
            249.1,
            277.1
          ],
          's': 'c',
          'w': null,
          'b': 'Grok',
          'p': [
            27.2,
            6.8,
            81.6
          ]
        },
        {
          'm': 'Grok-4.6',
          't': '[≤200K]',
          'u': 2.729633333333333,
          'q': [
            146.8,
            233.4,
            498.2,
            554.1
          ],
          's': 'c',
          'w': null,
          'b': 'Grok',
          'p': [
            13.6,
            3.4,
            40.8
          ]
        },
        {
          'm': 'Grok-4.6',
          't': '[>200K]',
          'u': 5.459266666666666,
          'q': [
            73.4,
            116.7,
            249.1,
            277.1
          ],
          's': 'c',
          'w': null,
          'b': 'Grok',
          'p': [
            27.2,
            6.8,
            81.6
          ]
        },
        {
          'm': 'Grok-4.5',
          't': '',
          'u': 2.729633333333333,
          'q': [
            146.8,
            233.4,
            498.2,
            554.1
          ],
          's': 'c',
          'w': null,
          'b': 'Grok',
          'p': [
            13.6,
            3.4,
            40.8
          ]
        },
        {
          'm': 'Mistral-Large-4',
          't': '',
          'u': 1.0013906666666672,
          'q': [
            212.6,
            382.3,
            1358.1,
            1756.6
          ],
          's': 'c',
          'w': null,
          'b': 'Mistral AI',
          'p': [
            9.248,
            0.952,
            28.424
          ]
        },
        {
          'm': 'Inkling',
          't': '',
          'u': 1.045806,
          'q': [
            290.4,
            491.3,
            1300.4,
            1523.5
          ],
          's': 'c',
          'w': null,
          'b': 'Inkling',
          'p': [
            6.8,
            1.156,
            27.54
          ]
        },
        {
          'm': 'Inkling-Small',
          't': '',
          'u': 0.5684800000000001,
          'q': [
            586.8,
            973.5,
            2392.3,
            2748.4
          ],
          's': 'c',
          'w': null,
          'b': 'Inkling',
          'p': [
            3.4,
            0.68,
            8.16
          ]
        },
        {
          'm': 'Muse Spark Open',
          't': '',
          'u': 1.02102,
          'q': [
            231.7,
            409.8,
            1332,
            1665
          ],
          's': 'c',
          'w': null,
          'b': 'Muse',
          'p': [
            8.5,
            1.02,
            28.9
          ]
        },
        {
          'm': 'Nemotron 3.5 Super VL',
          't': '',
          'u': 0.2278453333333334,
          'q': [
            1466.3,
            2431.8,
            5969,
            6855.3
          ],
          's': 'c',
          'w': null,
          'b': 'NVIDIA',
          'p': [
            1.36,
            0.272,
            3.4
          ]
        },
        {
          'm': 'Qwen-3.8-Max-Prime',
          't': '',
          'u': 3.316700000000001,
          'q': [
            72.6,
            128,
            410,
            509.9
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': [
            27.2,
            3.4,
            81.6
          ]
        },
        {
          'm': 'Gemini 4 Argon',
          't': '',
          'u': 1.6593700000000007,
          'q': [
            94.4,
            176.7,
            819.6,
            1211.3
          ],
          's': 'c',
          'w': null,
          'b': 'Gemini',
          'p': [
            13.6,
            0.68,
            68
          ]
        },
        {
          'm': 'Muse Wonder',
          't': '',
          'u': 3.3187400000000014,
          'q': [
            47.2,
            88.4,
            409.8,
            605.7
          ],
          's': 'c',
          'w': null,
          'b': 'Muse',
          'p': [
            27.2,
            1.36,
            136
          ]
        },
        {
          'm': 'MiniMax-M3.1-Flash',
          't': '',
          'u': 0.111707,
          'q': [
            1919.2,
            3447.7,
            12174.7,
            15709.3
          ],
          's': 'c',
          'w': null,
          'b': 'MiniMax',
          'p': [
            1.02,
            0.102,
            4.08
          ]
        },
        {
          'm': 'Ornith 1.5 122B',
          't': '',
          'u': 0.1362946666666667,
          'q': [
            1806.4,
            3174.9,
            9978.4,
            12326.2
          ],
          's': 'c',
          'w': null,
          'b': 'Ornith',
          'p': [
            1.088,
            0.136,
            4.352
          ]
        },
        {
          'm': 'GPT-6.1-Terra',
          't': '[≤272K]',
          'u': 0.8296850000000003,
          'q': [
            188.8,
            353.4,
            1639.2,
            2422.7
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            6.8,
            0.34,
            34
          ]
        },
        {
          'm': 'GPT-6.1-Terra',
          't': '[>272K]',
          'u': 1.5743700000000005,
          'q': [
            94.8,
            178.4,
            863.8,
            1312
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            13.6,
            0.68,
            51
          ]
        },
        {
          'm': 'Qwen4-Max',
          't': '',
          'u': 0.7616850000000003,
          'q': [
            190,
            358.8,
            1785.5,
            2761.8
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': [
            10.2,
            0.51,
            30.6
          ]
        },
        {
          'm': 'Hy4-Flash',
          't': '',
          'u': 0.03501206666666669,
          'q': [
            4048.1,
            7659.1,
            38843.8,
            60875.8
          ],
          's': 'c',
          'w': null,
          'b': '腾讯混元',
          'p': [
            0.476,
            0.0204,
            1.9108
          ]
        },
        {
          'm': 'Hy4',
          't': '',
          'u': 0.4247597333333335,
          'q': [
            341.9,
            645.2,
            3201.8,
            4943
          ],
          's': 'c',
          'w': null,
          'b': '腾讯混元',
          'p': [
            5.6712,
            0.2856,
            17.0068
          ]
        },
        {
          'm': 'Muse Ember',
          't': '',
          'u': 0.051027200000000016,
          'q': [
            2822,
            5330.5,
            26652.5,
            41357.3
          ],
          's': 'c',
          'w': null,
          'b': 'Muse',
          'p': [
            0.68,
            0.0272,
            3.4
          ]
        },
        {
          'm': 'GPT-6.2-Astra',
          't': '',
          'u': 6.637480000000003,
          'q': [
            23.6,
            44.2,
            204.9,
            302.8
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            54.4,
            2.72,
            272
          ]
        },
        {
          'm': 'GPT-6.2-Sol',
          't': '',
          'u': 1.6593700000000007,
          'q': [
            94.4,
            176.7,
            819.6,
            1211.3
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            13.6,
            0.68,
            68
          ]
        },
        {
          'm': 'Gemini 4 Carbon',
          't': '',
          'u': 1.1062466666666673,
          'q': [
            141.6,
            265.1,
            1229.4,
            1817
          ],
          's': 'c',
          'w': null,
          'b': 'Gemini',
          'p': [
            13.6,
            0.68,
            68
          ]
        },
        {
          'm': 'Inkling 2 Mini',
          't': '',
          'u': 0.08799200000000001,
          'q': [
            3883,
            6408.6,
            15456,
            17673.8
          ],
          's': 'c',
          'w': null,
          'b': 'Inkling',
          'p': [
            0.51,
            0.102,
            2.04
          ]
        },
        {
          'm': 'Gemini 4 Neon',
          't': '',
          'u': 2.4890550000000005,
          'q': [
            62.9,
            117.8,
            546.4,
            807.6
          ],
          's': 'c',
          'w': null,
          'b': 'Gemini',
          'p': [
            20.4,
            1.02,
            102
          ]
        }
      ]
    },
    {
      'slug': 'volcengine-agent-small',
      'name': 'Small',
      'platform': '字节·方舟 Agent Plan',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'codingplan',
      'fee': 40,
      'currency': '¥',
      'feeCny': 40,
      'dm': 1,
      'models': [
        {
          'm': 'Doubao-Seed-2.1-Pro',
          't': '',
          'u': 0.5,
          'q': [
            80,
            80,
            80,
            80
          ],
          's': 'c',
          'w': null,
          'b': '豆包',
          'p': null
        },
        {
          'm': 'Doubao-Seed-2.1-Lite',
          't': '',
          'u': 0.1,
          'q': [
            400,
            400,
            400,
            400
          ],
          's': 'c',
          'w': null,
          'b': '豆包',
          'p': null
        },
        {
          'm': 'Doubao-Seed-2.0-Mini',
          't': '',
          'u': 0.05,
          'q': [
            800,
            800,
            800,
            800
          ],
          's': 'c',
          'w': null,
          'b': '豆包',
          'p': null
        },
        {
          'm': 'Doubao-Seed-Evolving',
          't': '',
          'u': 0.5,
          'q': [
            80,
            80,
            80,
            80
          ],
          's': 'c',
          'w': null,
          'b': '豆包',
          'p': null
        },
        {
          'm': 'Kimi-K2.8-Preview',
          't': '',
          'u': 0.9599999999999999,
          'q': [
            41.7,
            41.7,
            41.7,
            41.7
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': null
        },
        {
          'm': 'GLM-5.3',
          't': '',
          'u': 0.8999999999999999,
          'q': [
            44.4,
            44.4,
            44.4,
            44.4
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'GLM-5.3-Flash',
          't': '',
          'u': 0.1,
          'q': [
            400,
            400,
            400,
            400
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'DeepSeek-V4-Flash-0731',
          't': '',
          'u': 0.1,
          'q': [
            400,
            400,
            400,
            400
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4-Pro-0813',
          't': '',
          'u': 1.1,
          'q': [
            36.4,
            36.4,
            36.4,
            36.4
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4.1-Flash-1017',
          't': '',
          'u': 0.17500000000000002,
          'q': [
            228.6,
            228.6,
            228.6,
            228.6
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4.1-Flash-1017',
          't': '[Economy]',
          'u': 0.2,
          'q': [
            200,
            200,
            200,
            200
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'Kimi-K3.1-Pro',
          't': '',
          'u': 0.7000000000000001,
          'q': [
            57.1,
            57.1,
            57.1,
            57.1
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': null
        },
        {
          'm': 'GLM-5.4',
          't': '',
          'u': 0.72,
          'q': [
            55.6,
            55.6,
            55.6,
            55.6
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        }
      ]
    },
    {
      'slug': 'volcengine-agent-medium',
      'name': 'Medium',
      'platform': '字节·方舟 Agent Plan',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'codingplan',
      'fee': 200,
      'currency': '¥',
      'feeCny': 200,
      'dm': 1,
      'models': [
        {
          'm': 'Doubao-Seed-2.1-Pro',
          't': '',
          'u': 0.5,
          'q': [
            400,
            400,
            400,
            400
          ],
          's': 'c',
          'w': null,
          'b': '豆包',
          'p': null
        },
        {
          'm': 'Doubao-Seed-2.1-Lite',
          't': '',
          'u': 0.1,
          'q': [
            2000,
            2000,
            2000,
            2000
          ],
          's': 'c',
          'w': null,
          'b': '豆包',
          'p': null
        },
        {
          'm': 'Doubao-Seed-2.0-Mini',
          't': '',
          'u': 0.05,
          'q': [
            4000,
            4000,
            4000,
            4000
          ],
          's': 'c',
          'w': null,
          'b': '豆包',
          'p': null
        },
        {
          'm': 'Doubao-Seed-Evolving',
          't': '',
          'u': 0.5,
          'q': [
            400,
            400,
            400,
            400
          ],
          's': 'c',
          'w': null,
          'b': '豆包',
          'p': null
        },
        {
          'm': 'Kimi-K2.8-Preview',
          't': '',
          'u': 0.96,
          'q': [
            208.3,
            208.3,
            208.3,
            208.3
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': null
        },
        {
          'm': 'Kimi-K3',
          't': '',
          'u': 2,
          'q': [
            100,
            100,
            100,
            100
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': null
        },
        {
          'm': 'GLM-5.3',
          't': '',
          'u': 0.8999999999999999,
          'q': [
            222.2,
            222.2,
            222.2,
            222.2
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'GLM-5.3-Flash',
          't': '',
          'u': 0.1,
          'q': [
            2000,
            2000,
            2000,
            2000
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'DeepSeek-V4-Flash-0731',
          't': '',
          'u': 0.1,
          'q': [
            2000,
            2000,
            2000,
            2000
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4-Pro-0813',
          't': '',
          'u': 1.1,
          'q': [
            181.8,
            181.8,
            181.8,
            181.8
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4.1-Flash-1017',
          't': '',
          'u': 0.175,
          'q': [
            1142.9,
            1142.9,
            1142.9,
            1142.9
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4.1-Flash-1017',
          't': '[Economy]',
          'u': 0.2,
          'q': [
            1000,
            1000,
            1000,
            1000
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'Kimi-K3.1-Pro',
          't': '',
          'u': 0.7,
          'q': [
            285.7,
            285.7,
            285.7,
            285.7
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': null
        },
        {
          'm': 'GLM-5.4',
          't': '',
          'u': 0.72,
          'q': [
            277.8,
            277.8,
            277.8,
            277.8
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        }
      ]
    },
    {
      'slug': 'volcengine-agent-large',
      'name': 'Large',
      'platform': '字节·方舟 Agent Plan',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'codingplan',
      'fee': 500,
      'currency': '¥',
      'feeCny': 500,
      'dm': 1,
      'models': [
        {
          'm': 'Doubao-Seed-2.1-Pro',
          't': '',
          'u': 0.5,
          'q': [
            1000,
            1000,
            1000,
            1000
          ],
          's': 'c',
          'w': null,
          'b': '豆包',
          'p': null
        },
        {
          'm': 'Doubao-Seed-2.1-Lite',
          't': '',
          'u': 0.1,
          'q': [
            5000,
            5000,
            5000,
            5000
          ],
          's': 'c',
          'w': null,
          'b': '豆包',
          'p': null
        },
        {
          'm': 'Doubao-Seed-2.0-Mini',
          't': '',
          'u': 0.05,
          'q': [
            10000,
            10000,
            10000,
            10000
          ],
          's': 'c',
          'w': null,
          'b': '豆包',
          'p': null
        },
        {
          'm': 'Doubao-Seed-Evolving',
          't': '',
          'u': 0.5,
          'q': [
            1000,
            1000,
            1000,
            1000
          ],
          's': 'c',
          'w': null,
          'b': '豆包',
          'p': null
        },
        {
          'm': 'Kimi-K2.8-Preview',
          't': '',
          'u': 0.96,
          'q': [
            520.8,
            520.8,
            520.8,
            520.8
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': null
        },
        {
          'm': 'Kimi-K3',
          't': '',
          'u': 2,
          'q': [
            250,
            250,
            250,
            250
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': null
        },
        {
          'm': 'GLM-5.3',
          't': '',
          'u': 0.9,
          'q': [
            555.6,
            555.6,
            555.6,
            555.6
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'GLM-5.3-Flash',
          't': '',
          'u': 0.1,
          'q': [
            5000,
            5000,
            5000,
            5000
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'DeepSeek-V4-Flash-0731',
          't': '',
          'u': 0.1,
          'q': [
            5000,
            5000,
            5000,
            5000
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4-Pro-0813',
          't': '',
          'u': 1.1,
          'q': [
            454.5,
            454.5,
            454.5,
            454.5
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4.1-Flash-1017',
          't': '',
          'u': 0.17500000000000002,
          'q': [
            2857.1,
            2857.1,
            2857.1,
            2857.1
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4.1-Flash-1017',
          't': '[Economy]',
          'u': 0.2,
          'q': [
            2500,
            2500,
            2500,
            2500
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'Kimi-K3.1-Pro',
          't': '',
          'u': 0.7000000000000001,
          'q': [
            714.3,
            714.3,
            714.3,
            714.3
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': null
        },
        {
          'm': 'GLM-5.4',
          't': '',
          'u': 0.7199999999999999,
          'q': [
            694.4,
            694.4,
            694.4,
            694.4
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        }
      ]
    },
    {
      'slug': 'volcengine-agent-max',
      'name': 'Max',
      'platform': '字节·方舟 Agent Plan',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'codingplan',
      'fee': 1000,
      'currency': '¥',
      'feeCny': 1000,
      'dm': 1,
      'models': [
        {
          'm': 'Doubao-Seed-2.1-Pro',
          't': '',
          'u': 0.5,
          'q': [
            2000,
            2000,
            2000,
            2000
          ],
          's': 'c',
          'w': null,
          'b': '豆包',
          'p': null
        },
        {
          'm': 'Doubao-Seed-2.1-Lite',
          't': '',
          'u': 0.1,
          'q': [
            10000,
            10000,
            10000,
            10000
          ],
          's': 'c',
          'w': null,
          'b': '豆包',
          'p': null
        },
        {
          'm': 'Doubao-Seed-2.0-Mini',
          't': '',
          'u': 0.05,
          'q': [
            20000,
            20000,
            20000,
            20000
          ],
          's': 'c',
          'w': null,
          'b': '豆包',
          'p': null
        },
        {
          'm': 'Doubao-Seed-Evolving',
          't': '',
          'u': 0.5,
          'q': [
            2000,
            2000,
            2000,
            2000
          ],
          's': 'c',
          'w': null,
          'b': '豆包',
          'p': null
        },
        {
          'm': 'Kimi-K2.8-Preview',
          't': '',
          'u': 0.96,
          'q': [
            1041.7,
            1041.7,
            1041.7,
            1041.7
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': null
        },
        {
          'm': 'Kimi-K3',
          't': '',
          'u': 2,
          'q': [
            500,
            500,
            500,
            500
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': null
        },
        {
          'm': 'GLM-5.3',
          't': '',
          'u': 0.9,
          'q': [
            1111.1,
            1111.1,
            1111.1,
            1111.1
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'GLM-5.3-Flash',
          't': '',
          'u': 0.1,
          'q': [
            10000,
            10000,
            10000,
            10000
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'DeepSeek-V4-Flash-0731',
          't': '',
          'u': 0.1,
          'q': [
            10000,
            10000,
            10000,
            10000
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4-Pro-0813',
          't': '',
          'u': 1.1,
          'q': [
            909.1,
            909.1,
            909.1,
            909.1
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4.1-Flash-1017',
          't': '',
          'u': 0.17500000000000002,
          'q': [
            5714.3,
            5714.3,
            5714.3,
            5714.3
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4.1-Flash-1017',
          't': '[Economy]',
          'u': 0.2,
          'q': [
            5000,
            5000,
            5000,
            5000
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'Kimi-K3.1-Pro',
          't': '',
          'u': 0.7000000000000001,
          'q': [
            1428.6,
            1428.6,
            1428.6,
            1428.6
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': null
        },
        {
          'm': 'GLM-5.4',
          't': '',
          'u': 0.7199999999999999,
          'q': [
            1388.9,
            1388.9,
            1388.9,
            1388.9
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        }
      ]
    },
    {
      'slug': 'zai-new-lite',
      'name': '新Lite',
      'platform': '智谱国际版',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'codingplan',
      'fee': 18,
      'currency': '$',
      'feeCny': 122.4,
      'dm': 0,
      'models': [
        {
          'm': 'GLM-5.4',
          't': '[峰]',
          'u': 0.4126792500000001,
          'q': [
            84.8,
            135.9,
            296.6,
            331.4
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'GLM-5.4',
          't': '[谷]',
          'u': 0.20633962500000005,
          'q': [
            169.7,
            271.8,
            593.2,
            662.9
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'GLM-5.3',
          't': '[谷]',
          'u': 0.31674060000000004,
          'q': [
            113.2,
            180.2,
            386.4,
            430.2
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'GLM-5.3',
          't': '[峰]',
          'u': 0.6334812000000001,
          'q': [
            56.6,
            90.1,
            193.2,
            215.1
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'GLM-5.3-Flash',
          't': '[谷]',
          'u': 0.104616045,
          'q': [
            339.4,
            541.9,
            1170,
            1304.4
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'GLM-5.3-Flash',
          't': '[峰]',
          'u': 0.20923209,
          'q': [
            169.7,
            270.9,
            585,
            652.2
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        }
      ]
    },
    {
      'slug': 'zai-new-pro',
      'name': '新Pro',
      'platform': '智谱国际版',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'codingplan',
      'fee': 80,
      'currency': '$',
      'feeCny': 544,
      'dm': 0,
      'models': [
        {
          'm': 'GLM-5.4',
          't': '[峰]',
          'u': 0.3056883333333334,
          'q': [
            509,
            815.4,
            1779.6,
            1988.6
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'GLM-5.4',
          't': '[谷]',
          'u': 0.1528441666666667,
          'q': [
            1018,
            1630.8,
            3559.2,
            3977.2
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'GLM-5.3',
          't': '[谷]',
          'u': 0.23462266666666667,
          'q': [
            678.9,
            1081.5,
            2318.6,
            2581.1
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'GLM-5.3',
          't': '[峰]',
          'u': 0.46924533333333335,
          'q': [
            339.5,
            540.7,
            1159.3,
            1290.5
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'GLM-5.3-Flash',
          't': '[谷]',
          'u': 0.07749336666666667,
          'q': [
            2036.5,
            3251.3,
            7020,
            7826.3
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'GLM-5.3-Flash',
          't': '[峰]',
          'u': 0.15498673333333335,
          'q': [
            1018.2,
            1625.6,
            3510,
            3913.2
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        }
      ]
    },
    {
      'slug': 'zai-new-max',
      'name': '新Max',
      'platform': '智谱国际版',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'codingplan',
      'fee': 168,
      'currency': '$',
      'feeCny': 1142.4,
      'dm': 0,
      'models': [
        {
          'm': 'GLM-5.4',
          't': '[峰]',
          'u': 0.2751195000000001,
          'q': [
            1187.7,
            1902.6,
            4152.4,
            4640.1
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'GLM-5.4',
          't': '[谷]',
          'u': 0.13755975000000004,
          'q': [
            2375.3,
            3805.3,
            8304.8,
            9280.1
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'GLM-5.3',
          't': '[谷]',
          'u': 0.21116040000000005,
          'q': [
            1584.2,
            2523.4,
            5410.1,
            6022.5
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'GLM-5.3',
          't': '[峰]',
          'u': 0.4223208000000001,
          'q': [
            792.1,
            1261.7,
            2705.1,
            3011.3
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'GLM-5.3-Flash',
          't': '[谷]',
          'u': 0.06974403,
          'q': [
            4751.8,
            7586.3,
            16379.9,
            18261.5
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'GLM-5.3-Flash',
          't': '[峰]',
          'u': 0.13948806,
          'q': [
            2375.9,
            3793.2,
            8189.9,
            9130.7
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        }
      ]
    },
    {
      'slug': 'gongji-api',
      'name': '按量 API',
      'platform': '共绩算力',
      'status': 'open',
      'billing': 'payg',
      'origin': 'codingplan',
      'fee': null,
      'currency': '¥',
      'feeCny': null,
      'dm': 1,
      'models': [
        {
          'm': 'Kimi-K3.1-Pro',
          't': '',
          'u': 1.7724600000000004,
          'q': [
            null,
            null,
            null,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': [
            10.4,
            1.04,
            54.4
          ]
        },
        {
          'm': 'DeepSeek-V4.1-Flash-1017',
          't': '',
          'u': 0.07092400000000004,
          'q': [
            null,
            null,
            null,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': [
            0.8,
            0.016,
            3.2
          ]
        },
        {
          'm': 'GLM-5.3-Flash',
          't': '',
          'u': 0.21696600000000005,
          'q': [
            null,
            null,
            null,
            null
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': [
            0.64,
            0.184,
            2.24
          ]
        },
        {
          'm': 'GLM-5.3',
          't': '',
          'u': 1.9428,
          'q': [
            null,
            null,
            null,
            null
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': [
            6.4,
            1.6,
            22.4
          ]
        },
        {
          'm': 'Kimi-K3',
          't': '',
          'u': 2.7084000000000006,
          'q': [
            null,
            null,
            null,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': [
            16,
            1.6,
            80
          ]
        },
        {
          'm': 'GLM-5.1',
          't': '',
          'u': 1.9428,
          'q': [
            null,
            null,
            null,
            null
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': [
            6.4,
            1.6,
            22.4
          ]
        },
        {
          'm': 'GLM-5.2',
          't': '',
          'u': 1.9428,
          'q': [
            null,
            null,
            null,
            null
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': [
            6.4,
            1.6,
            22.4
          ]
        },
        {
          'm': 'Kimi-K2.6',
          't': '',
          'u': 1.1985200000000003,
          'q': [
            null,
            null,
            null,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': [
            5.2,
            0.88,
            21.6
          ]
        },
        {
          'm': 'Qwen-3.7-Max',
          't': '',
          'u': 1.5290400000000002,
          'q': [
            null,
            null,
            null,
            null
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': [
            9.6,
            0.96,
            28.8
          ]
        },
        {
          'm': 'DeepSeek-V4-Flash-0731',
          't': '',
          'u': 0.11551000000000006,
          'q': [
            null,
            null,
            null,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': [
            1.2,
            0.04,
            3.6
          ]
        },
        {
          'm': 'DeepSeek-V4-Pro-0813',
          't': '',
          'u': 0.3465300000000001,
          'q': [
            null,
            null,
            null,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': [
            3.6,
            0.12,
            10.8
          ]
        },
        {
          'm': 'DeepSeek-V4.1-Flash',
          't': '',
          'u': 0.07092400000000004,
          'q': [
            null,
            null,
            null,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': [
            0.8,
            0.016,
            3.2
          ]
        }
      ]
    },
    {
      'slug': 'youyun-mini',
      'name': 'Mini',
      'platform': '优云智算',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'codingplan',
      'fee': 49,
      'currency': '¥',
      'feeCny': 49,
      'dm': 1,
      'models': [
        {
          'm': 'GLM-5.2',
          't': '',
          'u': 1.2894736842105263,
          'q': [
            null,
            null,
            38,
            null
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'Kimi-K2.6',
          't': '',
          'u': 1.0745614035087718,
          'q': [
            null,
            null,
            45.6,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': null
        },
        {
          'm': 'DeepSeek-V4-Flash-0731',
          't': '',
          'u': 0.6447368421052632,
          'q': [
            null,
            null,
            76,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4.1-Flash',
          't': '',
          'u': 0.6447368421052632,
          'q': [
            null,
            null,
            76,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4.1-Flash-1017',
          't': '',
          'u': 0.6447368421052632,
          'q': [
            null,
            null,
            76,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'MiniMax-M2.7',
          't': '',
          'u': 0.4298245614035088,
          'q': [
            null,
            null,
            114,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'MiniMax',
          'p': null
        },
        {
          'm': 'MiniMax-M3.1-Flash',
          't': '',
          'u': 0.4298245614035088,
          'q': [
            null,
            null,
            114,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'MiniMax',
          'p': null
        },
        {
          'm': 'GLM-5.3-Flash',
          't': '',
          'u': 0.4298245614035088,
          'q': [
            null,
            null,
            114,
            null
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'Qwen-3.8-27B',
          't': '',
          'u': 0.1074561403508772,
          'q': [
            null,
            null,
            456,
            null
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': null
        }
      ]
    },
    {
      'slug': 'youyun-lite',
      'name': 'Lite',
      'platform': '优云智算',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'codingplan',
      'fee': 99,
      'currency': '¥',
      'feeCny': 99,
      'dm': 1,
      'models': [
        {
          'm': 'GLM-5.2',
          't': '',
          'u': 1.3026315789473684,
          'q': [
            null,
            null,
            76,
            null
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'Kimi-K2.6',
          't': '',
          'u': 1.0855263157894737,
          'q': [
            null,
            null,
            91.2,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': null
        },
        {
          'm': 'DeepSeek-V4-Flash-0731',
          't': '',
          'u': 0.6513157894736842,
          'q': [
            null,
            null,
            152,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4.1-Flash',
          't': '',
          'u': 0.6513157894736842,
          'q': [
            null,
            null,
            152,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4.1-Flash-1017',
          't': '',
          'u': 0.6513157894736842,
          'q': [
            null,
            null,
            152,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'MiniMax-M2.7',
          't': '',
          'u': 0.4342105263157895,
          'q': [
            null,
            null,
            228,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'MiniMax',
          'p': null
        },
        {
          'm': 'MiniMax-M3.1-Flash',
          't': '',
          'u': 0.4342105263157895,
          'q': [
            null,
            null,
            228,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'MiniMax',
          'p': null
        },
        {
          'm': 'GLM-5.3-Flash',
          't': '',
          'u': 0.4342105263157895,
          'q': [
            null,
            null,
            228,
            null
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'Qwen-3.8-27B',
          't': '',
          'u': 0.10855263157894737,
          'q': [
            null,
            null,
            912,
            null
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': null
        }
      ]
    },
    {
      'slug': 'youyun-basic',
      'name': 'Basic',
      'platform': '优云智算',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'codingplan',
      'fee': 199,
      'currency': '¥',
      'feeCny': 199,
      'dm': 1,
      'models': [
        {
          'm': 'GLM-5.2',
          't': '',
          'u': 1.3092105263157894,
          'q': [
            null,
            null,
            152,
            null
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'Kimi-K2.6',
          't': '',
          'u': 1.0910087719298245,
          'q': [
            null,
            null,
            182.4,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': null
        },
        {
          'm': 'DeepSeek-V4-Flash-0731',
          't': '',
          'u': 0.6546052631578947,
          'q': [
            null,
            null,
            304,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4.1-Flash',
          't': '',
          'u': 0.6546052631578947,
          'q': [
            null,
            null,
            304,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4.1-Flash-1017',
          't': '',
          'u': 0.6546052631578947,
          'q': [
            null,
            null,
            304,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'MiniMax-M2.7',
          't': '',
          'u': 0.43640350877192985,
          'q': [
            null,
            null,
            456,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'MiniMax',
          'p': null
        },
        {
          'm': 'MiniMax-M3.1-Flash',
          't': '',
          'u': 0.43640350877192985,
          'q': [
            null,
            null,
            456,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'MiniMax',
          'p': null
        },
        {
          'm': 'GLM-5.3-Flash',
          't': '',
          'u': 0.43640350877192985,
          'q': [
            null,
            null,
            456,
            null
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'Qwen-3.8-27B',
          't': '',
          'u': 0.10910087719298246,
          'q': [
            null,
            null,
            1824,
            null
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': null
        }
      ]
    },
    {
      'slug': 'youyun-pro',
      'name': 'Pro',
      'platform': '优云智算',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'codingplan',
      'fee': 499,
      'currency': '¥',
      'feeCny': 499,
      'dm': 1,
      'models': [
        {
          'm': 'GLM-5.2',
          't': '',
          'u': 1.313157894736842,
          'q': [
            null,
            null,
            380,
            null
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'Kimi-K2.6',
          't': '',
          'u': 1.094298245614035,
          'q': [
            null,
            null,
            456,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': null
        },
        {
          'm': 'DeepSeek-V4-Flash-0731',
          't': '',
          'u': 0.656578947368421,
          'q': [
            null,
            null,
            760,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4.1-Flash',
          't': '',
          'u': 0.656578947368421,
          'q': [
            null,
            null,
            760,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4.1-Flash-1017',
          't': '',
          'u': 0.656578947368421,
          'q': [
            null,
            null,
            760,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'MiniMax-M2.7',
          't': '',
          'u': 0.437719298245614,
          'q': [
            null,
            null,
            1140,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'MiniMax',
          'p': null
        },
        {
          'm': 'MiniMax-M3.1-Flash',
          't': '',
          'u': 0.437719298245614,
          'q': [
            null,
            null,
            1140,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'MiniMax',
          'p': null
        },
        {
          'm': 'GLM-5.3-Flash',
          't': '',
          'u': 0.437719298245614,
          'q': [
            null,
            null,
            1140,
            null
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'Qwen-3.8-27B',
          't': '',
          'u': 0.1094298245614035,
          'q': [
            null,
            null,
            4560,
            null
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': null
        }
      ]
    },
    {
      'slug': 'youyun-max',
      'name': 'Max',
      'platform': '优云智算',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'codingplan',
      'fee': 799,
      'currency': '¥',
      'feeCny': 799,
      'dm': 1,
      'models': [
        {
          'm': 'GLM-5.2',
          't': '',
          'u': 1.288709677419355,
          'q': [
            null,
            null,
            620,
            null
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'Kimi-K2.6',
          't': '',
          'u': 1.0739247311827957,
          'q': [
            null,
            null,
            744,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': null
        },
        {
          'm': 'DeepSeek-V4-Flash-0731',
          't': '',
          'u': 0.6443548387096775,
          'q': [
            null,
            null,
            1240,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4.1-Flash',
          't': '',
          'u': 0.6443548387096775,
          'q': [
            null,
            null,
            1240,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4.1-Flash-1017',
          't': '',
          'u': 0.6443548387096775,
          'q': [
            null,
            null,
            1240,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'MiniMax-M2.7',
          't': '',
          'u': 0.4295698924731183,
          'q': [
            null,
            null,
            1860,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'MiniMax',
          'p': null
        },
        {
          'm': 'MiniMax-M3.1-Flash',
          't': '',
          'u': 0.4295698924731183,
          'q': [
            null,
            null,
            1860,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'MiniMax',
          'p': null
        },
        {
          'm': 'GLM-5.3-Flash',
          't': '',
          'u': 0.4295698924731183,
          'q': [
            null,
            null,
            1860,
            null
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'Qwen-3.8-27B',
          't': '',
          'u': 0.10739247311827957,
          'q': [
            null,
            null,
            7440,
            null
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': null
        }
      ]
    },
    {
      'slug': 'youyun-ultra',
      'name': 'Ultra',
      'platform': '优云智算',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'codingplan',
      'fee': 999,
      'currency': '¥',
      'feeCny': 999,
      'dm': 1,
      'models': [
        {
          'm': 'GLM-5.2',
          't': '',
          'u': 1.2807692307692307,
          'q': [
            null,
            null,
            780,
            null
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'Kimi-K2.6',
          't': '',
          'u': 1.0673076923076923,
          'q': [
            null,
            null,
            936,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': null
        },
        {
          'm': 'DeepSeek-V4-Flash-0731',
          't': '',
          'u': 0.6403846153846153,
          'q': [
            null,
            null,
            1560,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4.1-Flash',
          't': '',
          'u': 0.6403846153846153,
          'q': [
            null,
            null,
            1560,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4.1-Flash-1017',
          't': '',
          'u': 0.6403846153846153,
          'q': [
            null,
            null,
            1560,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'MiniMax-M2.7',
          't': '',
          'u': 0.4269230769230769,
          'q': [
            null,
            null,
            2340,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'MiniMax',
          'p': null
        },
        {
          'm': 'MiniMax-M3.1-Flash',
          't': '',
          'u': 0.4269230769230769,
          'q': [
            null,
            null,
            2340,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'MiniMax',
          'p': null
        },
        {
          'm': 'GLM-5.3-Flash',
          't': '',
          'u': 0.4269230769230769,
          'q': [
            null,
            null,
            2340,
            null
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'Qwen-3.8-27B',
          't': '',
          'u': 0.10673076923076923,
          'q': [
            null,
            null,
            9360,
            null
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': null
        }
      ]
    },
    {
      'slug': 'ollama-coding-plan-pro',
      'name': 'Pro',
      'platform': 'Ollama',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'codingplan',
      'fee': 20,
      'currency': '$',
      'feeCny': 136,
      'dm': 1,
      'models': [
        {
          'm': 'DeepSeek-V4.1-Flash',
          't': '[峰]',
          'u': 0.06028540000000004,
          'q': [
            186.7,
            360.9,
            2255.9,
            4229.9
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': [
            2.04,
            0.0408,
            8.16
          ]
        },
        {
          'm': 'DeepSeek-V4.1-Flash-1017',
          't': '[峰]',
          'u': 0.06028540000000004,
          'q': [
            186.7,
            360.9,
            2255.9,
            4229.9
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': [
            2.04,
            0.0408,
            8.16
          ]
        },
        {
          'm': 'DeepSeek-V4.1-Flash',
          't': '[谷]',
          'u': 0.03014270000000002,
          'q': [
            373.4,
            721.9,
            4511.9,
            8459.8
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': [
            1.02,
            0.0204,
            4.08
          ]
        },
        {
          'm': 'DeepSeek-V4.1-Flash-1017',
          't': '[谷]',
          'u': 0.03014270000000002,
          'q': [
            373.4,
            721.9,
            4511.9,
            8459.8
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': [
            1.02,
            0.0204,
            4.08
          ]
        },
        {
          'm': 'DeepSeek-V4-Pro-0813',
          't': '[峰]',
          'u': 0.28800493333333343,
          'q': [
            42.9,
            82.2,
            472.2,
            816.7
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': [
            8.976,
            0.2992,
            26.928
          ]
        },
        {
          'm': 'DeepSeek-V4-Pro-0813',
          't': '[谷]',
          'u': 0.14400246666666672,
          'q': [
            85.7,
            164.4,
            944.4,
            1633.4
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': [
            4.488,
            0.1496,
            13.464
          ]
        },
        {
          'm': 'Gemma-4-31B',
          't': '',
          'u': 0.127449,
          'q': [
            421.4,
            618.3,
            1067.1,
            1140.7
          ],
          's': 'c',
          'w': null,
          'b': 'Gemma',
          'p': [
            0.952,
            0.34,
            2.72
          ]
        },
        {
          'm': 'GLM-5.3',
          't': '',
          'u': 0.7526,
          'q': [
            42.4,
            71,
            180.7,
            209.4
          ],
          's': 'r',
          'w': 'standard',
          'b': '智谱 GLM',
          'p': [
            9.52,
            1.768,
            29.92
          ],
          'd': '2026-09-06'
        },
        {
          'm': 'GLM-5.3-Flash',
          't': '',
          'u': 0.0857,
          'q': [
            394.8,
            653,
            1587.1,
            1818.4
          ],
          's': 'r',
          'w': 'standard',
          'b': '智谱 GLM',
          'p': [
            1.02,
            0.204,
            3.4
          ],
          'd': '2026-09-06'
        },
        {
          'm': 'GLM-5.2',
          't': '',
          'u': 0.701,
          'q': [
            null,
            null,
            194,
            null
          ],
          's': 'r',
          'w': 'standard',
          'b': '智谱 GLM',
          'p': [
            9.52,
            1.768,
            29.92
          ],
          'x': 1,
          'd': '2026-09-06'
        },
        {
          'm': 'GPT-OSS-120B',
          't': '',
          'u': 0.05371093333333334,
          'q': [
            383.3,
            692.8,
            2532.1,
            3314.3
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            1.02,
            0.0952,
            4.08
          ]
        },
        {
          'm': 'GPT-OSS-20B',
          't': '',
          'u': 0.08628350000000004,
          'q': [
            839.6,
            1113.5,
            1576.2,
            1636.7
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            0.476,
            0.238,
            2.04
          ]
        },
        {
          'm': 'Kimi-K3.1-Pro',
          't': '',
          'u': 0.7673800000000001,
          'q': [
            28.7,
            51.3,
            177.2,
            226.7
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': [
            13.6,
            1.36,
            68
          ]
        },
        {
          'm': 'Kimi-K3',
          't': '',
          'u': 1.1212,
          'q': [
            19.6,
            35.1,
            121.3,
            155.1
          ],
          's': 'r',
          'w': 'standard',
          'b': 'Kimi',
          'p': [
            20.4,
            2.04,
            102
          ],
          'd': '2026-09-06'
        },
        {
          'm': 'Kimi-K2.7-Code',
          't': '',
          'u': 0.5515,
          'q': [
            62.1,
            102.5,
            246.6,
            281.8
          ],
          's': 'r',
          'w': 'standard',
          'b': 'Kimi',
          'p': [
            6.46,
            1.292,
            27.2
          ],
          'd': '2026-09-06'
        },
        {
          'm': 'Kimi-K2.6',
          't': '',
          'u': 0.4952723333333334,
          'q': [
            61.1,
            103.4,
            274.6,
            322
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': [
            6.46,
            1.088,
            27.2
          ]
        },
        {
          'm': 'MiniMax-M3',
          't': '',
          'u': 0.3469,
          'q': [
            98.5,
            162.6,
            392.1,
            448.4
          ],
          's': 'r',
          'w': 'standard',
          'b': 'MiniMax',
          'p': [
            4.08,
            0.816,
            16.32
          ],
          'd': '2026-09-06'
        },
        {
          'm': 'Mistral-Large-4',
          't': '',
          'u': 0.25271633333333343,
          'q': [
            82.6,
            149,
            538.2,
            701
          ],
          's': 'c',
          'w': null,
          'b': 'Mistral AI',
          'p': [
            4.76,
            0.476,
            14.28
          ]
        },
        {
          'm': 'Nemotron-3-Super',
          't': '',
          'u': 0.04062999999999999,
          'q': [
            3347.3,
            3347.3,
            3347.3,
            3347.3
          ],
          's': 'c',
          'w': null,
          'b': 'NVIDIA',
          'p': [
            0.102,
            0.102,
            4.08
          ]
        },
        {
          'm': 'Nemotron-3-Ultra',
          't': '',
          'u': 0.25953333333333334,
          'q': [
            524,
            524,
            524,
            524
          ],
          's': 'c',
          'w': null,
          'b': 'NVIDIA',
          'p': [
            0.68,
            0.68,
            20.4
          ]
        },
        {
          'm': 'Muse Spark Open',
          't': '',
          'u': 0.51051,
          'q': [
            46.3,
            82,
            266.4,
            333
          ],
          's': 'c',
          'w': null,
          'b': 'Muse',
          'p': [
            8.5,
            1.02,
            28.9
          ]
        },
        {
          'm': 'MiniMax-M3.1-Flash',
          't': '',
          'u': 0.0558535,
          'q': [
            383.8,
            689.5,
            2434.9,
            3141.9
          ],
          's': 'c',
          'w': null,
          'b': 'MiniMax',
          'p': [
            1.02,
            0.102,
            4.08
          ]
        },
        {
          'm': 'MiMo-V2.6-Flash-RL',
          't': '',
          'u': 0.024959853333333344,
          'q': [
            401.2,
            782.9,
            5448.7,
            11586.4
          ],
          's': 'c',
          'w': null,
          'b': '小米 MiMo',
          'p': [
            0.952,
            0.019,
            1.904
          ]
        },
        {
          'm': 'MiMo-V2.6-Pro-RL',
          't': '',
          'u': 0.06662674000000005,
          'q': [
            127.7,
            252,
            2041.2,
            5532.5
          ],
          's': 'c',
          'w': null,
          'b': '小米 MiMo',
          'p': [
            2.958,
            0.0245,
            5.916
          ]
        },
        {
          'm': 'Inkling 2 Small',
          't': '',
          'u': 0.10944033333333335,
          'q': [
            192.4,
            346.6,
            1242.7,
            1613.4
          ],
          's': 'c',
          'w': null,
          'b': 'Inkling',
          'p': [
            2.04,
            0.204,
            6.8
          ]
        },
        {
          'm': 'Beam 1.0',
          't': '',
          'u': 0.05076766666666669,
          'q': [
            463.7,
            821,
            2678.9,
            3353.4
          ],
          's': 'c',
          'w': null,
          'b': 'Beam',
          'p': [
            0.85,
            0.102,
            2.72
          ]
        },
        {
          'm': 'Hy4',
          't': '',
          'u': 0.21237986666666678,
          'q': [
            68.4,
            129,
            640.4,
            988.6
          ],
          's': 'c',
          'w': null,
          'b': '腾讯混元',
          'p': [
            5.6712,
            0.2856,
            17.0068
          ]
        },
        {
          'm': 'DeepSeek V4 Flash',
          't': '',
          'u': 0.045,
          'q': [
            270.2,
            518.9,
            3024.6,
            5299
          ],
          's': 'r',
          'w': 'standard',
          'b': 'DeepSeek',
          'p': [
            2.992,
            0.0952,
            8.976
          ],
          'd': '2026-09-06'
        },
        {
          'm': 'DeepSeek V4 Pro',
          't': '',
          'u': 0.1371,
          'q': [
            90,
            172.6,
            991.9,
            1715.6
          ],
          's': 'r',
          'w': 'standard',
          'b': 'DeepSeek',
          'p': [
            8.976,
            0.2992,
            26.928
          ],
          'd': '2026-09-06'
        },
        {
          'm': 'GLM 5.1',
          't': '',
          'u': 0.5327,
          'q': [
            null,
            null,
            255.3,
            null
          ],
          's': 'r',
          'w': 'standard',
          'b': '智谱 GLM',
          'p': null,
          'x': 1,
          'd': '2026-09-06'
        },
        {
          'm': 'MiniMax M2.7',
          't': '',
          'u': 0.1734,
          'q': [
            197,
            325.2,
            784.3,
            896.8
          ],
          's': 'r',
          'w': 'standard',
          'b': 'MiniMax',
          'p': [
            2.04,
            0.408,
            8.16
          ],
          'd': '2026-09-06'
        }
      ]
    },
    {
      'slug': 'ollama-coding-plan-max',
      'name': 'Max',
      'platform': 'Ollama',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'codingplan',
      'fee': 100,
      'currency': '$',
      'feeCny': 680,
      'dm': 1,
      'models': [
        {
          'm': 'DeepSeek-V4.1-Flash',
          't': '[峰]',
          'u': 0.060285400000000024,
          'q': [
            933.5,
            1804.7,
            11279.7,
            21149.4
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': [
            2.04,
            0.0408,
            8.16
          ]
        },
        {
          'm': 'DeepSeek-V4.1-Flash-1017',
          't': '[峰]',
          'u': 0.060285400000000024,
          'q': [
            933.5,
            1804.7,
            11279.7,
            21149.4
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': [
            2.04,
            0.0408,
            8.16
          ]
        },
        {
          'm': 'DeepSeek-V4.1-Flash',
          't': '[谷]',
          'u': 0.030142700000000012,
          'q': [
            1867,
            3609.5,
            22559.4,
            42298.8
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': [
            1.02,
            0.0204,
            4.08
          ]
        },
        {
          'm': 'DeepSeek-V4.1-Flash-1017',
          't': '[谷]',
          'u': 0.030142700000000012,
          'q': [
            1867,
            3609.5,
            22559.4,
            42298.8
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': [
            1.02,
            0.0204,
            4.08
          ]
        },
        {
          'm': 'DeepSeek-V4-Pro-0813',
          't': '[峰]',
          'u': 0.28800493333333343,
          'q': [
            214.3,
            410.9,
            2361.1,
            4083.6
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': [
            8.976,
            0.2992,
            26.928
          ]
        },
        {
          'm': 'DeepSeek-V4-Pro-0813',
          't': '[谷]',
          'u': 0.14400246666666672,
          'q': [
            428.6,
            821.9,
            4722.1,
            8167.2
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': [
            4.488,
            0.1496,
            13.464
          ]
        },
        {
          'm': 'Gemma-4-31B',
          't': '',
          'u': 0.12744899999999998,
          'q': [
            2107,
            3091.6,
            5335.5,
            5703.4
          ],
          's': 'c',
          'w': null,
          'b': 'Gemma',
          'p': [
            0.952,
            0.34,
            2.72
          ]
        },
        {
          'm': 'GLM-5.3',
          't': '',
          'u': 0.7525,
          'q': [
            212,
            355,
            903.6,
            1047.4
          ],
          's': 'r',
          'w': 'standard',
          'b': '智谱 GLM',
          'p': [
            9.52,
            1.768,
            29.92
          ],
          'd': '2026-09-06'
        },
        {
          'm': 'GLM-5.3-Flash',
          't': '',
          'u': 0.0857,
          'q': [
            1974.1,
            3265.1,
            7935.8,
            9091.9
          ],
          's': 'r',
          'w': 'standard',
          'b': '智谱 GLM',
          'p': [
            1.02,
            0.204,
            3.4
          ],
          'd': '2026-09-06'
        },
        {
          'm': 'GLM-5.2',
          't': '',
          'u': 0.7009,
          'q': [
            null,
            null,
            970.2,
            null
          ],
          's': 'r',
          'w': 'standard',
          'b': '智谱 GLM',
          'p': [
            9.52,
            1.768,
            29.92
          ],
          'x': 1,
          'd': '2026-09-06'
        },
        {
          'm': 'GPT-OSS-120B',
          't': '',
          'u': 0.05371093333333334,
          'q': [
            1916.7,
            3463.8,
            12660.4,
            16571.3
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            1.02,
            0.0952,
            4.08
          ]
        },
        {
          'm': 'GPT-OSS-20B',
          't': '',
          'u': 0.08628350000000003,
          'q': [
            4198,
            5567.4,
            7881,
            8183.3
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            0.476,
            0.238,
            2.04
          ]
        },
        {
          'm': 'Kimi-K3.1-Pro',
          't': '',
          'u': 0.7673800000000001,
          'q': [
            143.3,
            256.5,
            886.1,
            1133.4
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': [
            13.6,
            1.36,
            68
          ]
        },
        {
          'm': 'Kimi-K3',
          't': '',
          'u': 1.1219,
          'q': [
            98,
            175.4,
            606.1,
            775.2
          ],
          's': 'r',
          'w': 'standard',
          'b': 'Kimi',
          'p': [
            20.4,
            2.04,
            102
          ],
          'd': '2026-09-06'
        },
        {
          'm': 'Kimi-K2.7-Code',
          't': '',
          'u': 0.5515,
          'q': [
            310.7,
            512.5,
            1233,
            1409.1
          ],
          's': 'r',
          'w': 'standard',
          'b': 'Kimi',
          'p': [
            6.46,
            1.292,
            27.2
          ],
          'd': '2026-09-06'
        },
        {
          'm': 'Kimi-K2.6',
          't': '',
          'u': 0.4952723333333334,
          'q': [
            305.5,
            517.1,
            1373,
            1609.9
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': [
            6.46,
            1.088,
            27.2
          ]
        },
        {
          'm': 'MiniMax-M3',
          't': '',
          'u': 0.3468,
          'q': [
            492.6,
            813,
            1960.8,
            2242.2
          ],
          's': 'r',
          'w': 'standard',
          'b': 'MiniMax',
          'p': [
            4.08,
            0.816,
            16.32
          ],
          'd': '2026-09-06'
        },
        {
          'm': 'Mistral-Large-4',
          't': '',
          'u': 0.25271633333333343,
          'q': [
            412.9,
            744.8,
            2690.8,
            3504.8
          ],
          's': 'c',
          'w': null,
          'b': 'Mistral AI',
          'p': [
            4.76,
            0.476,
            14.28
          ]
        },
        {
          'm': 'Nemotron-3-Super',
          't': '',
          'u': 0.04062999999999999,
          'q': [
            16736.4,
            16736.4,
            16736.4,
            16736.4
          ],
          's': 'c',
          'w': null,
          'b': 'NVIDIA',
          'p': [
            0.102,
            0.102,
            4.08
          ]
        },
        {
          'm': 'Nemotron-3-Ultra',
          't': '',
          'u': 0.2595333333333333,
          'q': [
            2620.1,
            2620.1,
            2620.1,
            2620.1
          ],
          's': 'c',
          'w': null,
          'b': 'NVIDIA',
          'p': [
            0.68,
            0.68,
            20.4
          ]
        },
        {
          'm': 'Muse Spark Open',
          't': '',
          'u': 0.51051,
          'q': [
            231.7,
            409.8,
            1332,
            1665
          ],
          's': 'c',
          'w': null,
          'b': 'Muse',
          'p': [
            8.5,
            1.02,
            28.9
          ]
        },
        {
          'm': 'MiniMax-M3.1-Flash',
          't': '',
          'u': 0.0558535,
          'q': [
            1919.2,
            3447.7,
            12174.7,
            15709.3
          ],
          's': 'c',
          'w': null,
          'b': 'MiniMax',
          'p': [
            1.02,
            0.102,
            4.08
          ]
        },
        {
          'm': 'MiMo-V2.6-Flash-RL',
          't': '',
          'u': 0.024959853333333344,
          'q': [
            2006,
            3914.6,
            27243.7,
            57932.1
          ],
          's': 'c',
          'w': null,
          'b': '小米 MiMo',
          'p': [
            0.952,
            0.019,
            1.904
          ]
        },
        {
          'm': 'MiMo-V2.6-Pro-RL',
          't': '',
          'u': 0.06662674000000005,
          'q': [
            638.4,
            1260.1,
            10206.1,
            27662.4
          ],
          's': 'c',
          'w': null,
          'b': '小米 MiMo',
          'p': [
            2.958,
            0.0245,
            5.916
          ]
        },
        {
          'm': 'Inkling 2 Small',
          't': '',
          'u': 0.10944033333333335,
          'q': [
            962.2,
            1733.1,
            6213.4,
            8067.2
          ],
          's': 'c',
          'w': null,
          'b': 'Inkling',
          'p': [
            2.04,
            0.204,
            6.8
          ]
        },
        {
          'm': 'Beam 1.0',
          't': '',
          'u': 0.05076766666666669,
          'q': [
            2318.5,
            4105.1,
            13394.4,
            16766.9
          ],
          's': 'c',
          'w': null,
          'b': 'Beam',
          'p': [
            0.85,
            0.102,
            2.72
          ]
        },
        {
          'm': 'Hy4',
          't': '',
          'u': 0.21237986666666675,
          'q': [
            341.9,
            645.2,
            3201.8,
            4943
          ],
          's': 'c',
          'w': null,
          'b': '腾讯混元',
          'p': [
            5.6712,
            0.2856,
            17.0068
          ]
        },
        {
          'm': 'DeepSeek V4 Flash',
          't': '',
          'u': 0.045,
          'q': [
            1351,
            2594.6,
            15123,
            26495.4
          ],
          's': 'r',
          'w': 'standard',
          'b': 'DeepSeek',
          'p': [
            2.992,
            0.0952,
            8.976
          ],
          'd': '2026-09-06'
        },
        {
          'm': 'DeepSeek V4 Pro',
          't': '',
          'u': 0.1371,
          'q': [
            450.1,
            863.2,
            4959.7,
            8578.1
          ],
          's': 'r',
          'w': 'standard',
          'b': 'DeepSeek',
          'p': [
            8.976,
            0.2992,
            26.928
          ],
          'd': '2026-09-06'
        },
        {
          'm': 'GLM 5.1',
          't': '',
          'u': 0.5327,
          'q': [
            null,
            null,
            1276.6,
            null
          ],
          's': 'r',
          'w': 'standard',
          'b': '智谱 GLM',
          'p': null,
          'x': 1,
          'd': '2026-09-06'
        },
        {
          'm': 'MiniMax M2.7',
          't': '',
          'u': 0.1734,
          'q': [
            985.2,
            1626,
            3921.6,
            4484.3
          ],
          's': 'r',
          'w': 'standard',
          'b': 'MiniMax',
          'p': [
            2.04,
            0.408,
            8.16
          ],
          'd': '2026-09-06'
        }
      ]
    },
    {
      'slug': 'aliyun-token-personal-lite',
      'name': 'Lite',
      'platform': '阿里·百炼 Token Plan',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'codingplan',
      'fee': 39,
      'currency': '¥',
      'feeCny': 39,
      'dm': 1,
      'models': [
        {
          'm': 'Qwen-3.8-Max',
          't': '[峰]',
          'u': 0.428000625,
          'q': [
            16.1,
            28.5,
            91.1,
            113.3
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': null
        },
        {
          'm': 'Qwen-3.8-Max',
          't': '[谷]',
          'u': 0.17120025000000008,
          'q': [
            40.3,
            71.1,
            227.8,
            283.3
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': null
        },
        {
          'm': 'Qwen-3.8-Flash',
          't': '[峰]',
          'u': 0.028825875000000004,
          'q': [
            241.5,
            425.5,
            1353,
            1678.1
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': null
        },
        {
          'm': 'Qwen-3.8-Flash',
          't': '[谷]',
          'u': 0.011530350000000002,
          'q': [
            603.8,
            1063.7,
            3382.4,
            4195.3
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': null
        },
        {
          'm': 'Qwen-3.7-Max',
          't': '',
          'u': 0.5938920000000002,
          'q': [
            16.3,
            26.9,
            65.7,
            75.3
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': null
        },
        {
          'm': 'Qwen-3.7-Plus',
          't': '[256K]',
          'u': 0.10093200000000002,
          'q': [
            97.1,
            160.2,
            386.4,
            441.8
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': null
        },
        {
          'm': 'Qwen-3.7-Plus',
          't': '[1M]',
          'u': 0.302796,
          'q': [
            32.4,
            53.4,
            128.8,
            147.3
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': null
        },
        {
          'm': 'Qwen-3.6-Flash',
          't': '[256K]',
          'u': 0.06289919999999999,
          'q': [
            160.3,
            262.9,
            620,
            705.2
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': null
        },
        {
          'm': 'Qwen-3.6-Flash',
          't': '[1M]',
          'u': 0.25159679999999995,
          'q': [
            40.1,
            65.7,
            155,
            176.3
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': null
        },
        {
          'm': 'DeepSeek-V4.1-Flash',
          't': '[峰]',
          'u': 0.06406725,
          'q': [
            96,
            172.4,
            608.7,
            785.5
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4.1-Flash',
          't': '[谷]',
          'u': 0.032033625,
          'q': [
            191.9,
            344.8,
            1217.5,
            1570.9
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4-Pro-0813',
          't': '[峰]',
          'u': 0.27952762500000006,
          'q': [
            21.4,
            38.6,
            139.5,
            181.7
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4-Pro-0813',
          't': '[谷]',
          'u': 0.13976381250000003,
          'q': [
            42.8,
            77.2,
            279,
            363.5
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4-Flash-0731',
          't': '[峰]',
          'u': 0.09317587500000002,
          'q': [
            64.2,
            115.9,
            418.6,
            545.2
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4-Flash-0731',
          't': '[谷]',
          'u': 0.04658793750000001,
          'q': [
            128.5,
            231.7,
            837.1,
            1090.4
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'GLM-5.3',
          't': '',
          'u': 0.47355749999999996,
          'q': [
            24.4,
            38.8,
            82.4,
            91.5
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'GLM-5.2',
          't': '',
          'u': 0.47355749999999996,
          'q': [
            24.4,
            38.8,
            82.4,
            91.5
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'DeepSeek-V4.1-Flash-1017',
          't': '[峰]',
          'u': 0.06406725,
          'q': [
            96,
            172.4,
            608.7,
            785.5
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4.1-Flash-1017',
          't': '[谷]',
          'u': 0.032033625,
          'q': [
            191.9,
            344.8,
            1217.5,
            1570.9
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'Qwen4-Max',
          't': '',
          'u': 0.2184243750000001,
          'q': [
            19,
            35.9,
            178.6,
            276.2
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': null
        }
      ]
    },
    {
      'slug': 'aliyun-token-personal-essential',
      'name': 'Essential',
      'platform': '阿里·百炼 Token Plan',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'codingplan',
      'fee': 79,
      'currency': '¥',
      'feeCny': 79,
      'dm': 1,
      'models': [
        {
          'm': 'Qwen-3.8-Max',
          't': '[峰]',
          'u': 0.38532250000000007,
          'q': [
            36.3,
            64,
            205,
            254.9
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': null
        },
        {
          'm': 'Qwen-3.8-Max',
          't': '[谷]',
          'u': 0.15412900000000004,
          'q': [
            90.7,
            160,
            512.6,
            637.4
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': null
        },
        {
          'm': 'Qwen-3.8-Flash',
          't': '[峰]',
          'u': 0.025951500000000002,
          'q': [
            543.4,
            957.3,
            3044.1,
            3775.8
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': null
        },
        {
          'm': 'Qwen-3.8-Flash',
          't': '[谷]',
          'u': 0.010380600000000002,
          'q': [
            1358.5,
            2393.2,
            7610.4,
            9439.4
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': null
        },
        {
          'm': 'Qwen-3.7-Max',
          't': '',
          'u': 0.5346720000000001,
          'q': [
            36.6,
            60.6,
            147.8,
            169.4
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': null
        },
        {
          'm': 'Qwen-3.7-Plus',
          't': '[256K]',
          'u': 0.09086755555555558,
          'q': [
            218.4,
            360.5,
            869.4,
            994.2
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': null
        },
        {
          'm': 'Qwen-3.7-Plus',
          't': '[1M]',
          'u': 0.27260266666666666,
          'q': [
            72.8,
            120.2,
            289.8,
            331.4
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': null
        },
        {
          'm': 'Qwen-3.6-Flash',
          't': '[256K]',
          'u': 0.056627199999999996,
          'q': [
            360.7,
            591.5,
            1395.1,
            1586.7
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': null
        },
        {
          'm': 'Qwen-3.6-Flash',
          't': '[1M]',
          'u': 0.22650879999999998,
          'q': [
            90.2,
            147.9,
            348.8,
            396.7
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': null
        },
        {
          'm': 'DeepSeek-V4.1-Flash',
          't': '[峰]',
          'u': 0.05767877777777777,
          'q': [
            215.9,
            387.9,
            1369.7,
            1767.3
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4.1-Flash',
          't': '[谷]',
          'u': 0.028839388888888887,
          'q': [
            431.8,
            775.7,
            2739.3,
            3534.6
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4-Pro-0813',
          't': '[峰]',
          'u': 0.25165450000000006,
          'q': [
            48.2,
            86.9,
            313.9,
            408.9
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4-Pro-0813',
          't': '[谷]',
          'u': 0.12582725000000003,
          'q': [
            96.4,
            173.8,
            627.8,
            817.8
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4-Flash-0731',
          't': '[峰]',
          'u': 0.08388483333333335,
          'q': [
            144.5,
            260.7,
            941.8,
            1226.7
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4-Flash-0731',
          't': '[谷]',
          'u': 0.041942416666666676,
          'q': [
            289.1,
            521.3,
            1883.5,
            2453.3
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'GLM-5.3',
          't': '',
          'u': 0.4263366666666667,
          'q': [
            54.9,
            87.2,
            185.3,
            205.9
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'GLM-5.2',
          't': '',
          'u': 0.4263366666666667,
          'q': [
            54.9,
            87.2,
            185.3,
            205.9
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'DeepSeek-V4.1-Flash-1017',
          't': '[峰]',
          'u': 0.05767877777777777,
          'q': [
            215.9,
            387.9,
            1369.7,
            1767.3
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4.1-Flash-1017',
          't': '[谷]',
          'u': 0.028839388888888887,
          'q': [
            431.8,
            775.7,
            2739.3,
            3534.6
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'Qwen4-Max',
          't': '',
          'u': 0.19664416666666673,
          'q': [
            42.8,
            80.7,
            401.7,
            621.4
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': null
        }
      ]
    },
    {
      'slug': 'aliyun-token-personal-standard',
      'name': 'Standard',
      'platform': '阿里·百炼 Token Plan',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'codingplan',
      'fee': 139,
      'currency': '¥',
      'feeCny': 139,
      'dm': 1,
      'models': [
        {
          'm': 'Qwen-3.8-Max',
          't': '[峰]',
          'u': 0.38135953125000005,
          'q': [
            64.5,
            113.8,
            364.5,
            453.2
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': null
        },
        {
          'm': 'Qwen-3.8-Max',
          't': '[谷]',
          'u': 0.15254381250000007,
          'q': [
            161.3,
            284.5,
            911.2,
            1133.1
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': null
        },
        {
          'm': 'Qwen-3.8-Flash',
          't': '[峰]',
          'u': 0.025684593750000005,
          'q': [
            966,
            1701.9,
            5411.8,
            6712.5
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': null
        },
        {
          'm': 'Qwen-3.8-Flash',
          't': '[谷]',
          'u': 0.0102738375,
          'q': [
            2415.1,
            4254.7,
            13529.5,
            16781.2
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': null
        },
        {
          'm': 'Qwen-3.7-Max',
          't': '',
          'u': 0.5291730000000001,
          'q': [
            65,
            107.7,
            262.7,
            301.2
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': null
        },
        {
          'm': 'Qwen-3.7-Plus',
          't': '[256K]',
          'u': 0.08993300000000003,
          'q': [
            388.3,
            640.9,
            1545.6,
            1767.4
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': null
        },
        {
          'm': 'Qwen-3.7-Plus',
          't': '[1M]',
          'u': 0.269799,
          'q': [
            129.4,
            213.6,
            515.2,
            589.1
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': null
        },
        {
          'm': 'Qwen-3.6-Flash',
          't': '[256K]',
          'u': 0.05604479999999999,
          'q': [
            641.2,
            1051.6,
            2480.2,
            2820.8
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': null
        },
        {
          'm': 'Qwen-3.6-Flash',
          't': '[1M]',
          'u': 0.22417919999999997,
          'q': [
            160.3,
            262.9,
            620,
            705.2
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': null
        },
        {
          'm': 'DeepSeek-V4.1-Flash',
          't': '[峰]',
          'u': 0.0570855625,
          'q': [
            383.8,
            689.5,
            2434.9,
            3141.9
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4.1-Flash',
          't': '[谷]',
          'u': 0.02854278125,
          'q': [
            767.7,
            1379.1,
            4869.9,
            6283.7
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4-Pro-0813',
          't': '[峰]',
          'u': 0.24906628125000002,
          'q': [
            85.6,
            154.5,
            558.1,
            726.9
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4-Pro-0813',
          't': '[谷]',
          'u': 0.12453314062500001,
          'q': [
            171.3,
            308.9,
            1116.2,
            1453.8
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4-Flash-0731',
          't': '[峰]',
          'u': 0.08302209375000003,
          'q': [
            256.9,
            463.4,
            1674.3,
            2180.7
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4-Flash-0731',
          't': '[谷]',
          'u': 0.04151104687500001,
          'q': [
            513.9,
            926.8,
            3348.5,
            4361.5
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'GLM-5.3',
          't': '',
          'u': 0.421951875,
          'q': [
            97.6,
            155,
            329.4,
            366
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'GLM-5.2',
          't': '',
          'u': 0.421951875,
          'q': [
            97.6,
            155,
            329.4,
            366
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'DeepSeek-V4.1-Flash-1017',
          't': '[峰]',
          'u': 0.0570855625,
          'q': [
            383.8,
            689.5,
            2434.9,
            3141.9
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4.1-Flash-1017',
          't': '[谷]',
          'u': 0.02854278125,
          'q': [
            767.7,
            1379.1,
            4869.9,
            6283.7
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'Qwen4-Max',
          't': '',
          'u': 0.1946217187500001,
          'q': [
            76,
            143.5,
            714.2,
            1104.7
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': null
        }
      ]
    },
    {
      'slug': 'aliyun-token-personal-pro',
      'name': 'Pro',
      'platform': '阿里·百炼 Token Plan',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'codingplan',
      'fee': 312,
      'currency': '¥',
      'feeCny': 312,
      'dm': 1,
      'models': [
        {
          'm': 'Qwen-3.8-Max',
          't': '[峰]',
          'u': 0.34240050000000005,
          'q': [
            161.3,
            284.5,
            911.2,
            1133.1
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': null
        },
        {
          'm': 'Qwen-3.8-Max',
          't': '[谷]',
          'u': 0.1369602000000001,
          'q': [
            403.2,
            711.3,
            2278,
            2832.7
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': null
        },
        {
          'm': 'Qwen-3.8-Flash',
          't': '[峰]',
          'u': 0.0230607,
          'q': [
            2415.1,
            4254.7,
            13529.5,
            16781.2
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': null
        },
        {
          'm': 'Qwen-3.8-Flash',
          't': '[谷]',
          'u': 0.009224280000000003,
          'q': [
            6037.7,
            10636.6,
            33823.8,
            41953.1
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': null
        },
        {
          'm': 'Qwen-3.7-Max',
          't': '',
          'u': 0.4751136000000001,
          'q': [
            162.5,
            269.1,
            656.7,
            753.1
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': null
        },
        {
          'm': 'Qwen-3.7-Plus',
          't': '[256K]',
          'u': 0.08074560000000001,
          'q': [
            970.8,
            1602.1,
            3864,
            4418.5
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': null
        },
        {
          'm': 'Qwen-3.7-Plus',
          't': '[1M]',
          'u': 0.24223680000000003,
          'q': [
            323.6,
            534,
            1288,
            1472.8
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': null
        },
        {
          'm': 'Qwen-3.6-Flash',
          't': '[256K]',
          'u': 0.050319359999999994,
          'q': [
            1603,
            2629,
            6200.4,
            7052
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': null
        },
        {
          'm': 'Qwen-3.6-Flash',
          't': '[1M]',
          'u': 0.20127743999999997,
          'q': [
            400.8,
            657.2,
            1550.1,
            1763
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': null
        },
        {
          'm': 'DeepSeek-V4.1-Flash',
          't': '[峰]',
          'u': 0.0512538,
          'q': [
            959.6,
            1723.9,
            6087.4,
            7854.6
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4.1-Flash',
          't': '[谷]',
          'u': 0.0256269,
          'q': [
            1919.2,
            3447.7,
            12174.7,
            15709.3
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4-Pro-0813',
          't': '[峰]',
          'u': 0.22362210000000002,
          'q': [
            214.1,
            386.2,
            1395.2,
            1817.3
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4-Pro-0813',
          't': '[谷]',
          'u': 0.11181105000000001,
          'q': [
            428.2,
            772.3,
            2790.4,
            3634.6
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4-Flash-0731',
          't': '[峰]',
          'u': 0.07454070000000002,
          'q': [
            642.3,
            1158.5,
            4185.6,
            5451.9
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4-Flash-0731',
          't': '[谷]',
          'u': 0.03727035000000001,
          'q': [
            1284.7,
            2317,
            8371.3,
            10903.7
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'GLM-5.3',
          't': '',
          'u': 0.378846,
          'q': [
            244,
            387.6,
            823.6,
            915.1
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'GLM-5.2',
          't': '',
          'u': 0.378846,
          'q': [
            244,
            387.6,
            823.6,
            915.1
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'DeepSeek-V4.1-Flash-1017',
          't': '[峰]',
          'u': 0.0512538,
          'q': [
            959.6,
            1723.9,
            6087.4,
            7854.6
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4.1-Flash-1017',
          't': '[谷]',
          'u': 0.0256269,
          'q': [
            1919.2,
            3447.7,
            12174.7,
            15709.3
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'Qwen4-Max',
          't': '',
          'u': 0.17473950000000008,
          'q': [
            190,
            358.8,
            1785.5,
            2761.8
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': null
        }
      ]
    },
    {
      'slug': 'mimo-lite',
      'name': 'Lite',
      'platform': '小米·MiMo',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'codingplan',
      'fee': 39,
      'currency': '¥',
      'feeCny': 39,
      'dm': 1,
      'models': [
        {
          'm': 'MiMo-V2.6-Pro',
          't': '[峰]',
          'u': 0.19298460365853673,
          'q': [
            12.7,
            25,
            202.1,
            546.9
          ],
          's': 'c',
          'w': null,
          'b': '小米 MiMo',
          'p': null
        },
        {
          'm': 'MiMo-V2.6-Pro',
          't': '[谷]',
          'u': 0.1543876829268294,
          'q': [
            15.8,
            31.2,
            252.6,
            683.6
          ],
          's': 'c',
          'w': null,
          'b': '小米 MiMo',
          'p': null
        },
        {
          'm': 'MiMo-V2.6-Flash',
          't': '[峰]',
          'u': 0.07481817073170736,
          'q': [
            38.4,
            74.9,
            521.3,
            1108.4
          ],
          's': 'c',
          'w': null,
          'b': '小米 MiMo',
          'p': null
        },
        {
          'm': 'MiMo-V2.6-Flash',
          't': '[谷]',
          'u': 0.05985453658536589,
          'q': [
            48,
            93.6,
            651.6,
            1385.5
          ],
          's': 'c',
          'w': null,
          'b': '小米 MiMo',
          'p': null
        }
      ]
    },
    {
      'slug': 'mimo-standard',
      'name': 'Standard',
      'platform': '小米·MiMo',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'codingplan',
      'fee': 99,
      'currency': '¥',
      'feeCny': 99,
      'dm': 1,
      'models': [
        {
          'm': 'MiMo-V2.6-Pro',
          't': '[峰]',
          'u': 0.1825931250000001,
          'q': [
            33.9,
            67,
            542.2,
            1467.2
          ],
          's': 'c',
          'w': null,
          'b': '小米 MiMo',
          'p': null
        },
        {
          'm': 'MiMo-V2.6-Pro',
          't': '[谷]',
          'u': 0.14607450000000008,
          'q': [
            42.4,
            83.7,
            677.7,
            1834
          ],
          's': 'c',
          'w': null,
          'b': '小米 MiMo',
          'p': null
        },
        {
          'm': 'MiMo-V2.6-Flash',
          't': '[峰]',
          'u': 0.07078950000000003,
          'q': [
            103,
            201,
            1398.5,
            2973.8
          ],
          's': 'c',
          'w': null,
          'b': '小米 MiMo',
          'p': null
        },
        {
          'm': 'MiMo-V2.6-Flash',
          't': '[谷]',
          'u': 0.056631600000000025,
          'q': [
            128.7,
            251.2,
            1748.1,
            3717.3
          ],
          's': 'c',
          'w': null,
          'b': '小米 MiMo',
          'p': null
        }
      ]
    },
    {
      'slug': 'mimo-pro',
      'name': 'Pro',
      'platform': '小米·MiMo',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'codingplan',
      'fee': 329,
      'currency': '¥',
      'feeCny': 329,
      'dm': 1,
      'models': [
        {
          'm': 'MiMo-V2.6-Pro',
          't': '[峰]',
          'u': 0.17565245065789484,
          'q': [
            117.3,
            231.4,
            1873,
            5068.6
          ],
          's': 'c',
          'w': null,
          'b': '小米 MiMo',
          'p': null
        },
        {
          'm': 'MiMo-V2.6-Pro',
          't': '[谷]',
          'u': 0.14052196052631585,
          'q': [
            146.6,
            289.3,
            2341.3,
            6335.7
          ],
          's': 'c',
          'w': null,
          'b': '小米 MiMo',
          'p': null
        },
        {
          'm': 'MiMo-V2.6-Flash',
          't': '[峰]',
          'u': 0.06809867105263162,
          'q': [
            355.7,
            694.2,
            4831.2,
            10273.3
          ],
          's': 'c',
          'w': null,
          'b': '小米 MiMo',
          'p': null
        },
        {
          'm': 'MiMo-V2.6-Flash',
          't': '[谷]',
          'u': 0.054478936842105294,
          'q': [
            444.7,
            867.7,
            6039,
            12841.6
          ],
          's': 'c',
          'w': null,
          'b': '小米 MiMo',
          'p': null
        },
        {
          'm': 'MiMo-V2.6-Pro',
          't': '[高速] [峰]',
          'u': 1.7565245065789488,
          'q': [
            11.7,
            23.1,
            187.3,
            506.9
          ],
          's': 'c',
          'w': null,
          'b': '小米 MiMo',
          'p': null
        },
        {
          'm': 'MiMo-V2.6-Pro',
          't': '[高速] [谷]',
          'u': 1.4052196052631587,
          'q': [
            14.7,
            28.9,
            234.1,
            633.6
          ],
          's': 'c',
          'w': null,
          'b': '小米 MiMo',
          'p': null
        }
      ]
    },
    {
      'slug': 'mimo-max',
      'name': 'Max',
      'platform': '小米·MiMo',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'codingplan',
      'fee': 659,
      'currency': '¥',
      'feeCny': 659,
      'dm': 1,
      'models': [
        {
          'm': 'MiMo-V2.6-Pro',
          't': '[峰]',
          'u': 0.16304724847560984,
          'q': [
            253,
            499.4,
            4041.8,
            10937.4
          ],
          's': 'c',
          'w': null,
          'b': '小米 MiMo',
          'p': null
        },
        {
          'm': 'MiMo-V2.6-Pro',
          't': '[谷]',
          'u': 0.13043779878048786,
          'q': [
            316.3,
            624.3,
            5052.2,
            13671.8
          ],
          's': 'c',
          'w': null,
          'b': '小米 MiMo',
          'p': null
        },
        {
          'm': 'MiMo-V2.6-Flash',
          't': '[峰]',
          'u': 0.06321176219512199,
          'q': [
            767.6,
            1498,
            10425.3,
            22168.7
          ],
          's': 'c',
          'w': null,
          'b': '小米 MiMo',
          'p': null
        },
        {
          'm': 'MiMo-V2.6-Flash',
          't': '[谷]',
          'u': 0.05056940975609759,
          'q': [
            959.5,
            1872.5,
            13031.6,
            27710.9
          ],
          's': 'c',
          'w': null,
          'b': '小米 MiMo',
          'p': null
        },
        {
          'm': 'MiMo-V2.6-Pro',
          't': '[高速] [峰]',
          'u': 1.6304724847560987,
          'q': [
            25.3,
            49.9,
            404.2,
            1093.7
          ],
          's': 'c',
          'w': null,
          'b': '小米 MiMo',
          'p': null
        },
        {
          'm': 'MiMo-V2.6-Pro',
          't': '[高速] [谷]',
          'u': 1.3043779878048787,
          'q': [
            31.6,
            62.4,
            505.2,
            1367.2
          ],
          's': 'c',
          'w': null,
          'b': '小米 MiMo',
          'p': null
        }
      ]
    },
    {
      'slug': 'baidu-qianfan-token-plan-mini',
      'name': 'Mini',
      'platform': '百度·千帆',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'codingplan',
      'fee': 9.9,
      'currency': '¥',
      'feeCny': 9.9,
      'dm': 1,
      'models': [
        {
          'm': 'DeepSeek-V4.1-Flash',
          't': '',
          'u': 0.99,
          'q': [
            10,
            10,
            10,
            10
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4-Pro-Preview',
          't': '',
          'u': 0.99,
          'q': [
            10,
            10,
            10,
            10
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4-Pro-0813',
          't': '',
          'u': 0.99,
          'q': [
            10,
            10,
            10,
            10
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4-Flash-0731',
          't': '',
          'u': 0.99,
          'q': [
            10,
            10,
            10,
            10
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'GLM-5.3',
          't': '',
          'u': 0.99,
          'q': [
            10,
            10,
            10,
            10
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'GLM-5.3-Flash',
          't': '',
          'u': 0.99,
          'q': [
            10,
            10,
            10,
            10
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'GLM-5.2',
          't': '',
          'u': 0.99,
          'q': [
            10,
            10,
            10,
            10
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'GLM-5.1',
          't': '',
          'u': 0.99,
          'q': [
            10,
            10,
            10,
            10
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'DeepSeek-V4.1-Flash-1017',
          't': '',
          'u': 0.99,
          'q': [
            10,
            10,
            10,
            10
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        }
      ]
    },
    {
      'slug': 'baidu-qianfan-token-plan-lite',
      'name': 'Lite',
      'platform': '百度·千帆',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'codingplan',
      'fee': 39,
      'currency': '¥',
      'feeCny': 39,
      'dm': 1,
      'models': [
        {
          'm': 'DeepSeek-V4.1-Flash',
          't': '',
          'u': 0.9285714285714286,
          'q': [
            42,
            42,
            42,
            42
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4-Pro-Preview',
          't': '',
          'u': 0.9285714285714286,
          'q': [
            42,
            42,
            42,
            42
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4-Pro-0813',
          't': '',
          'u': 0.9285714285714286,
          'q': [
            42,
            42,
            42,
            42
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4-Flash-0731',
          't': '',
          'u': 0.9285714285714286,
          'q': [
            42,
            42,
            42,
            42
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'GLM-5.3',
          't': '',
          'u': 0.9285714285714286,
          'q': [
            42,
            42,
            42,
            42
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'GLM-5.3-Flash',
          't': '',
          'u': 0.9285714285714286,
          'q': [
            42,
            42,
            42,
            42
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'GLM-5.2',
          't': '',
          'u': 0.9285714285714286,
          'q': [
            42,
            42,
            42,
            42
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'GLM-5.1',
          't': '',
          'u': 0.9285714285714286,
          'q': [
            42,
            42,
            42,
            42
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'DeepSeek-V4.1-Flash-1017',
          't': '',
          'u': 0.9285714285714286,
          'q': [
            42,
            42,
            42,
            42
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        }
      ]
    },
    {
      'slug': 'baidu-qianfan-token-plan-pro',
      'name': 'Pro',
      'platform': '百度·千帆',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'codingplan',
      'fee': 200,
      'currency': '¥',
      'feeCny': 200,
      'dm': 1,
      'models': [
        {
          'm': 'DeepSeek-V4.1-Flash',
          't': '',
          'u': 0.8695652173913043,
          'q': [
            230,
            230,
            230,
            230
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4-Pro-Preview',
          't': '',
          'u': 0.8695652173913043,
          'q': [
            230,
            230,
            230,
            230
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4-Pro-0813',
          't': '',
          'u': 0.8695652173913043,
          'q': [
            230,
            230,
            230,
            230
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4-Flash-0731',
          't': '',
          'u': 0.8695652173913043,
          'q': [
            230,
            230,
            230,
            230
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'GLM-5.3',
          't': '',
          'u': 0.8695652173913043,
          'q': [
            230,
            230,
            230,
            230
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'GLM-5.3-Flash',
          't': '',
          'u': 0.8695652173913043,
          'q': [
            230,
            230,
            230,
            230
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'GLM-5.2',
          't': '',
          'u': 0.8695652173913043,
          'q': [
            230,
            230,
            230,
            230
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'GLM-5.1',
          't': '',
          'u': 0.8695652173913043,
          'q': [
            230,
            230,
            230,
            230
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'DeepSeek-V4.1-Flash-1017',
          't': '',
          'u': 0.8695652173913043,
          'q': [
            230,
            230,
            230,
            230
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        }
      ]
    },
    {
      'slug': 'baidu-qianfan-token-plan-max',
      'name': 'Max',
      'platform': '百度·千帆',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'codingplan',
      'fee': 600,
      'currency': '¥',
      'feeCny': 600,
      'dm': 1,
      'models': [
        {
          'm': 'DeepSeek-V4.1-Flash',
          't': '',
          'u': 0.8571428571428571,
          'q': [
            700,
            700,
            700,
            700
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4-Pro-Preview',
          't': '',
          'u': 0.8571428571428571,
          'q': [
            700,
            700,
            700,
            700
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4-Pro-0813',
          't': '',
          'u': 0.8571428571428571,
          'q': [
            700,
            700,
            700,
            700
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4-Flash-0731',
          't': '',
          'u': 0.8571428571428571,
          'q': [
            700,
            700,
            700,
            700
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'GLM-5.3',
          't': '',
          'u': 0.8571428571428571,
          'q': [
            700,
            700,
            700,
            700
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'GLM-5.3-Flash',
          't': '',
          'u': 0.8571428571428571,
          'q': [
            700,
            700,
            700,
            700
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'GLM-5.2',
          't': '',
          'u': 0.8571428571428571,
          'q': [
            700,
            700,
            700,
            700
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'GLM-5.1',
          't': '',
          'u': 0.8571428571428571,
          'q': [
            700,
            700,
            700,
            700
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'DeepSeek-V4.1-Flash-1017',
          't': '',
          'u': 0.8571428571428571,
          'q': [
            700,
            700,
            700,
            700
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        }
      ]
    },
    {
      'slug': 'huawei-cloud-token-plan-lite',
      'name': 'Lite',
      'platform': '华为云',
      'status': 'restricted',
      'billing': 'subscription',
      'origin': 'codingplan',
      'fee': 59,
      'currency': '¥',
      'feeCny': 59,
      'dm': 1,
      'models': [
        {
          'm': 'GLM-5.3',
          't': '',
          'u': 1.18,
          'q': [
            50,
            50,
            50,
            50
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'DeepSeek-V4.1-Flash-1017',
          't': '',
          'u': 1.18,
          'q': [
            50,
            50,
            50,
            50
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        }
      ]
    },
    {
      'slug': 'huawei-cloud-token-plan-standard',
      'name': 'Standard',
      'platform': '华为云',
      'status': 'restricted',
      'billing': 'subscription',
      'origin': 'codingplan',
      'fee': 149,
      'currency': '¥',
      'feeCny': 149,
      'dm': 1,
      'models': [
        {
          'm': 'GLM-5.3',
          't': '',
          'u': 1.146153846153846,
          'q': [
            130,
            130,
            130,
            130
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'DeepSeek-V4.1-Flash-1017',
          't': '',
          'u': 1.146153846153846,
          'q': [
            130,
            130,
            130,
            130
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        }
      ]
    },
    {
      'slug': 'huawei-cloud-token-plan-pro',
      'name': 'Pro',
      'platform': '华为云',
      'status': 'restricted',
      'billing': 'subscription',
      'origin': 'codingplan',
      'fee': 399,
      'currency': '¥',
      'feeCny': 399,
      'dm': 1,
      'models': [
        {
          'm': 'GLM-5.3',
          't': '',
          'u': 1.05,
          'q': [
            380,
            380,
            380,
            380
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'DeepSeek-V4.1-Flash-1017',
          't': '',
          'u': 1.05,
          'q': [
            380,
            380,
            380,
            380
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        }
      ]
    },
    {
      'slug': 'huawei-cloud-token-plan-max',
      'name': 'Max',
      'platform': '华为云',
      'status': 'restricted',
      'billing': 'subscription',
      'origin': 'codingplan',
      'fee': 799,
      'currency': '¥',
      'feeCny': 799,
      'dm': 1,
      'models': [
        {
          'm': 'GLM-5.3',
          't': '',
          'u': 0.9079545454545453,
          'q': [
            880,
            880,
            880,
            880
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'DeepSeek-V4.1-Flash-1017',
          't': '',
          'u': 0.9079545454545453,
          'q': [
            880,
            880,
            880,
            880
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        }
      ]
    },
    {
      'slug': 'tencent-cloud-token-plan-lite',
      'name': 'Lite',
      'platform': '腾讯云',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'codingplan',
      'fee': 39,
      'currency': '¥',
      'feeCny': 39,
      'dm': 1,
      'models': [
        {
          'm': 'Hy4',
          't': '',
          'u': 0.16801875000000005,
          'q': [
            24.7,
            46.6,
            232.1,
            359
          ],
          's': 'c',
          'w': null,
          'b': '腾讯混元',
          'p': null
        },
        {
          'm': 'DeepSeek-V4.1-Flash-1017',
          't': '[原厂直供] [峰]',
          'u': 0.1773100000000001,
          'q': [
            18.2,
            35.2,
            220,
            412.4
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4.1-Flash-1017',
          't': '[原厂直供] [谷]',
          'u': 0.08865500000000005,
          'q': [
            36.4,
            70.4,
            439.9,
            824.8
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4.1-Flash-1017',
          't': '[标准路由] [谷]',
          'u': 0.03546200000000002,
          'q': [
            91,
            176,
            1099.8,
            2062.1
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4.1-Flash-1017',
          't': '[标准路由] [峰]',
          'u': 0.07092400000000004,
          'q': [
            45.5,
            88,
            549.9,
            1031
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4-Flash-0731',
          't': '',
          'u': 1.1142500000000002,
          'q': [
            35,
            35,
            35,
            35
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4-Pro-0813',
          't': '[原厂直供]',
          'u': 1.1142500000000002,
          'q': [
            35,
            35,
            35,
            35
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4-Pro-0813',
          't': '[标准路由] [谷]',
          'u': 0.30321375000000017,
          'q': [
            11.7,
            22.4,
            128.6,
            222.5
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4-Pro-0813',
          't': '[标准路由] [峰]',
          'u': 0.6064275000000003,
          'q': [
            5.8,
            11.2,
            64.3,
            111.2
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'MiniMax-M2.7',
          't': '',
          'u': 1.1142500000000002,
          'q': [
            35,
            35,
            35,
            35
          ],
          's': 'c',
          'w': null,
          'b': 'MiniMax',
          'p': null
        },
        {
          'm': 'MiniMax-M3',
          't': '[≤512K]',
          'u': 0.5434800000000001,
          'q': [
            18,
            29.8,
            71.8,
            82.1
          ],
          's': 'c',
          'w': null,
          'b': 'MiniMax',
          'p': null
        },
        {
          'm': 'MiniMax-M3',
          't': '[>512K]',
          'u': 1.0869600000000001,
          'q': [
            9,
            14.9,
            35.9,
            41
          ],
          's': 'c',
          'w': null,
          'b': 'MiniMax',
          'p': null
        },
        {
          'm': 'GLM-5.2',
          't': '',
          'u': 1.1142500000000002,
          'q': [
            35,
            35,
            35,
            35
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'GLM-5.3',
          't': '',
          'u': 1.3356750000000004,
          'q': [
            8.7,
            13.7,
            29.2,
            32.4
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'GLM-5.3-Flash',
          't': '',
          'u': 0.18984525000000002,
          'q': [
            68.1,
            105.1,
            205.4,
            224.5
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'Kimi-K2.7-Code',
          't': '',
          'u': 1.3497600000000005,
          'q': [
            7.3,
            12,
            28.9,
            33
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': null
        },
        {
          'm': 'Kimi-K3',
          't': '',
          'u': 2.5391250000000003,
          'q': [
            2.5,
            4.4,
            15.4,
            19.6
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': null
        },
        {
          'm': 'Hy4-preview',
          't': '',
          'u': 0.47262375000000023,
          'q': [
            7.7,
            14.7,
            82.5,
            139.5
          ],
          's': 'c',
          'w': null,
          'b': '腾讯混元',
          'p': null
        },
        {
          'm': 'MiMo-V2.6-Flash',
          't': '',
          'u': 0.07865500000000003,
          'q': [
            36.5,
            71.2,
            495.8,
            1054.4
          ],
          's': 'c',
          'w': null,
          'b': '小米 MiMo',
          'p': null
        },
        {
          'm': 'Hy4-Flash',
          't': '',
          'u': 0.026890000000000008,
          'q': [
            147.2,
            279.2,
            1450.4,
            2312.5
          ],
          's': 'c',
          'w': null,
          'b': '腾讯混元',
          'p': null
        }
      ]
    },
    {
      'slug': 'tencent-cloud-token-plan-standard',
      'name': 'Standard',
      'platform': '腾讯云',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'codingplan',
      'fee': 99,
      'currency': '¥',
      'feeCny': 99,
      'dm': 1,
      'models': [
        {
          'm': 'Hy4',
          't': '',
          'u': 0.16801875000000005,
          'q': [
            62.7,
            118.4,
            589.2,
            911.4
          ],
          's': 'c',
          'w': null,
          'b': '腾讯混元',
          'p': null
        },
        {
          'm': 'DeepSeek-V4.1-Flash-1017',
          't': '[原厂直供] [峰]',
          'u': 0.1773100000000001,
          'q': [
            46.2,
            89.3,
            558.3,
            1046.9
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4.1-Flash-1017',
          't': '[原厂直供] [谷]',
          'u': 0.08865500000000005,
          'q': [
            92.4,
            178.7,
            1116.7,
            2093.8
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4.1-Flash-1017',
          't': '[标准路由] [谷]',
          'u': 0.03546200000000002,
          'q': [
            231,
            446.7,
            2791.7,
            5234.5
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4.1-Flash-1017',
          't': '[标准路由] [峰]',
          'u': 0.07092400000000004,
          'q': [
            115.5,
            223.3,
            1395.9,
            2617.2
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4-Flash-0731',
          't': '',
          'u': 0.99,
          'q': [
            100,
            100,
            100,
            100
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4-Pro-0813',
          't': '[原厂直供]',
          'u': 0.99,
          'q': [
            100,
            100,
            100,
            100
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4-Pro-0813',
          't': '[标准路由] [谷]',
          'u': 0.30321375000000017,
          'q': [
            29.6,
            56.8,
            326.5,
            564.7
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4-Pro-0813',
          't': '[标准路由] [峰]',
          'u': 0.6064275000000003,
          'q': [
            14.8,
            28.4,
            163.3,
            282.4
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'MiniMax-M2.7',
          't': '',
          'u': 0.99,
          'q': [
            100,
            100,
            100,
            100
          ],
          's': 'c',
          'w': null,
          'b': 'MiniMax',
          'p': null
        },
        {
          'm': 'MiniMax-M3',
          't': '[≤512K]',
          'u': 0.5434800000000001,
          'q': [
            45.8,
            75.5,
            182.2,
            208.3
          ],
          's': 'c',
          'w': null,
          'b': 'MiniMax',
          'p': null
        },
        {
          'm': 'MiniMax-M3',
          't': '[>512K]',
          'u': 1.0869600000000001,
          'q': [
            22.9,
            37.8,
            91.1,
            104.1
          ],
          's': 'c',
          'w': null,
          'b': 'MiniMax',
          'p': null
        },
        {
          'm': 'GLM-5.2',
          't': '',
          'u': 0.99,
          'q': [
            100,
            100,
            100,
            100
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'GLM-5.3',
          't': '',
          'u': 1.3356750000000002,
          'q': [
            22,
            34.9,
            74.1,
            82.4
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'GLM-5.3-Flash',
          't': '',
          'u': 0.18984525000000002,
          'q': [
            172.9,
            266.7,
            521.5,
            569.9
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'Kimi-K2.7-Code',
          't': '',
          'u': 1.3497600000000005,
          'q': [
            18.5,
            30.5,
            73.3,
            83.8
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': null
        },
        {
          'm': 'Kimi-K3',
          't': '',
          'u': 2.5391250000000003,
          'q': [
            6.3,
            11.3,
            39,
            49.9
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': null
        },
        {
          'm': 'Hy4-preview',
          't': '',
          'u': 0.47262375000000023,
          'q': [
            19.6,
            37.4,
            209.5,
            354.2
          ],
          's': 'c',
          'w': null,
          'b': '腾讯混元',
          'p': null
        },
        {
          'm': 'MiMo-V2.6-Flash',
          't': '',
          'u': 0.07865500000000004,
          'q': [
            92.7,
            180.9,
            1258.7,
            2676.5
          ],
          's': 'c',
          'w': null,
          'b': '小米 MiMo',
          'p': null
        },
        {
          'm': 'Hy4-Flash',
          't': '',
          'u': 0.026890000000000008,
          'q': [
            373.6,
            708.8,
            3681.7,
            5870.1
          ],
          's': 'c',
          'w': null,
          'b': '腾讯混元',
          'p': null
        }
      ]
    },
    {
      'slug': 'tencent-cloud-token-plan-pro',
      'name': 'Pro',
      'platform': '腾讯云',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'codingplan',
      'fee': 299,
      'currency': '¥',
      'feeCny': 299,
      'dm': 1,
      'models': [
        {
          'm': 'Hy4',
          't': '',
          'u': 0.16801875000000005,
          'q': [
            189.4,
            357.6,
            1779.6,
            2752.6
          ],
          's': 'c',
          'w': null,
          'b': '腾讯混元',
          'p': null
        },
        {
          'm': 'DeepSeek-V4.1-Flash-1017',
          't': '[原厂直供] [峰]',
          'u': 0.17731000000000008,
          'q': [
            139.6,
            269.8,
            1686.3,
            3161.8
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4.1-Flash-1017',
          't': '[原厂直供] [谷]',
          'u': 0.08865500000000004,
          'q': [
            279.1,
            539.6,
            3372.6,
            6323.7
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4.1-Flash-1017',
          't': '[标准路由] [谷]',
          'u': 0.03546200000000002,
          'q': [
            697.8,
            1349,
            8431.6,
            15809.2
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4.1-Flash-1017',
          't': '[标准路由] [峰]',
          'u': 0.07092400000000004,
          'q': [
            348.9,
            674.5,
            4215.8,
            7904.6
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4-Flash-0731',
          't': '',
          'u': 0.9343500000000001,
          'q': [
            320,
            320,
            320,
            320
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4-Pro-0813',
          't': '[原厂直供]',
          'u': 0.9343500000000001,
          'q': [
            320,
            320,
            320,
            320
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4-Pro-0813',
          't': '[标准路由] [谷]',
          'u': 0.30321375000000017,
          'q': [
            89.5,
            171.6,
            986.1,
            1705.5
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4-Pro-0813',
          't': '[标准路由] [峰]',
          'u': 0.6064275000000003,
          'q': [
            44.7,
            85.8,
            493.1,
            852.8
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'MiniMax-M2.7',
          't': '',
          'u': 0.9343500000000001,
          'q': [
            320,
            320,
            320,
            320
          ],
          's': 'c',
          'w': null,
          'b': 'MiniMax',
          'p': null
        },
        {
          'm': 'MiniMax-M3',
          't': '[≤512K]',
          'u': 0.5434800000000002,
          'q': [
            138.2,
            228.1,
            550.2,
            629.1
          ],
          's': 'c',
          'w': null,
          'b': 'MiniMax',
          'p': null
        },
        {
          'm': 'MiniMax-M3',
          't': '[>512K]',
          'u': 1.0869600000000004,
          'q': [
            69.1,
            114.1,
            275.1,
            314.6
          ],
          's': 'c',
          'w': null,
          'b': 'MiniMax',
          'p': null
        },
        {
          'm': 'GLM-5.2',
          't': '',
          'u': 0.9343500000000001,
          'q': [
            320,
            320,
            320,
            320
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'GLM-5.3',
          't': '',
          'u': 1.3356750000000002,
          'q': [
            66.3,
            105.3,
            223.9,
            248.7
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'GLM-5.3-Flash',
          't': '',
          'u': 0.18984525000000002,
          'q': [
            522.1,
            805.5,
            1575,
            1721.1
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'Kimi-K2.7-Code',
          't': '',
          'u': 1.3497600000000005,
          'q': [
            55.8,
            92,
            221.5,
            253.2
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': null
        },
        {
          'm': 'Kimi-K3',
          't': '',
          'u': 2.5391250000000007,
          'q': [
            19,
            34.1,
            117.8,
            150.6
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': null
        },
        {
          'm': 'Hy4-preview',
          't': '',
          'u': 0.47262375000000023,
          'q': [
            59.1,
            113,
            632.6,
            1069.8
          ],
          's': 'c',
          'w': null,
          'b': '腾讯混元',
          'p': null
        },
        {
          'm': 'MiMo-V2.6-Flash',
          't': '',
          'u': 0.07865500000000004,
          'q': [
            279.9,
            546.2,
            3801.4,
            8083.5
          ],
          's': 'c',
          'w': null,
          'b': '小米 MiMo',
          'p': null
        },
        {
          'm': 'Hy4-Flash',
          't': '',
          'u': 0.02689000000000001,
          'q': [
            1128.4,
            2140.7,
            11119.4,
            17729
          ],
          's': 'c',
          'w': null,
          'b': '腾讯混元',
          'p': null
        }
      ]
    },
    {
      'slug': 'tencent-cloud-token-plan-max',
      'name': 'Max',
      'platform': '腾讯云',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'codingplan',
      'fee': 599,
      'currency': '¥',
      'feeCny': 599,
      'dm': 1,
      'models': [
        {
          'm': 'Hy4',
          't': '',
          'u': 0.16801875000000005,
          'q': [
            379.5,
            716.3,
            3565.1,
            5514.3
          ],
          's': 'c',
          'w': null,
          'b': '腾讯混元',
          'p': null
        },
        {
          'm': 'DeepSeek-V4.1-Flash-1017',
          't': '[原厂直供] [峰]',
          'u': 0.17731000000000008,
          'q': [
            279.6,
            540.5,
            3378.3,
            6334.2
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4.1-Flash-1017',
          't': '[原厂直供] [谷]',
          'u': 0.08865500000000004,
          'q': [
            559.2,
            1081,
            6756.5,
            12668.5
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4.1-Flash-1017',
          't': '[标准路由] [谷]',
          'u': 0.03546200000000002,
          'q': [
            1397.9,
            2702.6,
            16891.3,
            31671.2
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4.1-Flash-1017',
          't': '[标准路由] [峰]',
          'u': 0.07092400000000004,
          'q': [
            699,
            1351.3,
            8445.7,
            15835.6
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4-Flash-0731',
          't': '',
          'u': 0.9214999999999999,
          'q': [
            650,
            650,
            650,
            650
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4-Pro-0813',
          't': '[原厂直供]',
          'u': 0.9214999999999999,
          'q': [
            650,
            650,
            650,
            650
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4-Pro-0813',
          't': '[标准路由] [谷]',
          'u': 0.30321375000000017,
          'q': [
            179.3,
            343.8,
            1975.5,
            3416.8
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4-Pro-0813',
          't': '[标准路由] [峰]',
          'u': 0.6064275000000003,
          'q': [
            89.6,
            171.9,
            987.8,
            1708.4
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'MiniMax-M2.7',
          't': '',
          'u': 0.9214999999999999,
          'q': [
            650,
            650,
            650,
            650
          ],
          's': 'c',
          'w': null,
          'b': 'MiniMax',
          'p': null
        },
        {
          'm': 'MiniMax-M3',
          't': '[≤512K]',
          'u': 0.5434800000000001,
          'q': [
            276.9,
            457,
            1102.2,
            1260.3
          ],
          's': 'c',
          'w': null,
          'b': 'MiniMax',
          'p': null
        },
        {
          'm': 'MiniMax-M3',
          't': '[>512K]',
          'u': 1.0869600000000001,
          'q': [
            138.4,
            228.5,
            551.1,
            630.2
          ],
          's': 'c',
          'w': null,
          'b': 'MiniMax',
          'p': null
        },
        {
          'm': 'GLM-5.2',
          't': '',
          'u': 0.9214999999999999,
          'q': [
            650,
            650,
            650,
            650
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'GLM-5.3',
          't': '',
          'u': 1.3356750000000004,
          'q': [
            132.9,
            211,
            448.5,
            498.3
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'GLM-5.3-Flash',
          't': '',
          'u': 0.18984525000000002,
          'q': [
            1045.9,
            1613.7,
            3155.2,
            3448
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'Kimi-K2.7-Code',
          't': '',
          'u': 1.3497600000000005,
          'q': [
            111.7,
            184.3,
            443.8,
            507.2
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': null
        },
        {
          'm': 'Kimi-K3',
          't': '',
          'u': 2.5391250000000003,
          'q': [
            38.2,
            68.3,
            235.9,
            301.7
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': null
        },
        {
          'm': 'Hy4-preview',
          't': '',
          'u': 0.4726237500000002,
          'q': [
            118.4,
            226.4,
            1267.4,
            2143.2
          ],
          's': 'c',
          'w': null,
          'b': '腾讯混元',
          'p': null
        },
        {
          'm': 'MiMo-V2.6-Flash',
          't': '',
          'u': 0.07865500000000004,
          'q': [
            560.7,
            1094.3,
            7615.5,
            16194
          ],
          's': 'c',
          'w': null,
          'b': '小米 MiMo',
          'p': null
        },
        {
          'm': 'Hy4-Flash',
          't': '',
          'u': 0.02689000000000001,
          'q': [
            2260.5,
            4288.6,
            22275.9,
            35517.4
          ],
          's': 'c',
          'w': null,
          'b': '腾讯混元',
          'p': null
        }
      ]
    },
    {
      'slug': 'trae-intl-lite-2026',
      'name': 'Lite',
      'platform': 'TRAE 国际版',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'codingplan',
      'fee': 8,
      'currency': '$',
      'feeCny': 54.4,
      'dm': 0,
      'models': [
        {
          'm': 'Doubao-Seed-2.1-Turbo',
          't': '',
          'u': 0.89692,
          'q': [
            15.5,
            25.4,
            60.7,
            69.2
          ],
          's': 'c',
          'w': null,
          'b': '豆包',
          'p': [
            3.4,
            0.68,
            17
          ]
        },
        {
          'm': 'GPT-6-Astra',
          't': '[≤272K]',
          'u': 11.510700000000002,
          'q': [
            0.8,
            1.4,
            4.7,
            6
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            68,
            6.8,
            340
          ]
        },
        {
          'm': 'GPT-6-Astra',
          't': '[>272K]',
          'u': 22.171400000000002,
          'q': [
            0.4,
            0.7,
            2.5,
            3.2
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            136,
            13.6,
            510
          ]
        },
        {
          'm': 'GPT-6-Sol',
          't': '[≤272K]',
          'u': 2.3021400000000005,
          'q': [
            3.8,
            6.8,
            23.6,
            30.2
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            13.6,
            1.36,
            68
          ]
        },
        {
          'm': 'GPT-6-Sol',
          't': '[>272K]',
          'u': 4.434280000000001,
          'q': [
            1.9,
            3.5,
            12.3,
            15.9
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            27.2,
            2.72,
            102
          ]
        },
        {
          'm': 'GPT-6-Luna',
          't': '[≤272K]',
          'u': 0.11510700000000003,
          'q': [
            76.5,
            136.8,
            472.6,
            604.5
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            0.68,
            0.068,
            3.4
          ]
        },
        {
          'm': 'GPT-6-Luna',
          't': '[>272K]',
          'u': 0.221714,
          'q': [
            38.4,
            69.1,
            245.4,
            317.3
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            1.36,
            0.136,
            5.1
          ]
        },
        {
          'm': 'GPT-5.6-Sol',
          't': '[≤272K]',
          'u': 4.604280000000001,
          'q': [
            1.9,
            3.4,
            11.8,
            15.1
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            27.2,
            2.72,
            136
          ]
        },
        {
          'm': 'GPT-5.6-Sol',
          't': '[>272K]',
          'u': 8.868560000000002,
          'q': [
            1,
            1.7,
            6.1,
            7.9
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            54.4,
            5.44,
            204
          ]
        },
        {
          'm': 'GPT-5.6-Terra',
          't': '[≤272K]',
          'u': 2.37014,
          'q': [
            3.8,
            6.8,
            23,
            29.1
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            13.6,
            1.36,
            81.6
          ]
        },
        {
          'm': 'GPT-5.6-Terra',
          't': '[>272K]',
          'u': 4.5362800000000005,
          'q': [
            1.9,
            3.4,
            12,
            15.4
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            27.2,
            2.72,
            122.4
          ]
        },
        {
          'm': 'GPT-5.6-Luna',
          't': '[≤272K]',
          'u': 0.23701400000000003,
          'q': [
            38.1,
            67.9,
            229.5,
            291.2
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            1.36,
            0.136,
            8.16
          ]
        },
        {
          'm': 'GPT-5.6-Luna',
          't': '[>272K]',
          'u': 0.45362800000000014,
          'q': [
            19.2,
            34.3,
            119.9,
            154.1
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            2.72,
            0.272,
            12.24
          ]
        },
        {
          'm': 'GPT-5.5',
          't': '[≤272K]',
          'u': 5.92535,
          'q': [
            1.5,
            2.7,
            9.2,
            11.6
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            34,
            3.4,
            204
          ]
        },
        {
          'm': 'GPT-5.5',
          't': '[>272K]',
          'u': 11.340700000000002,
          'q': [
            0.8,
            1.4,
            4.8,
            6.2
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            68,
            6.8,
            306
          ]
        },
        {
          'm': 'GPT-5.4',
          't': '[≤272K]',
          'u': 2.962675,
          'q': [
            3,
            5.4,
            18.4,
            23.3
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            17,
            1.7,
            102
          ]
        },
        {
          'm': 'GPT-5.4',
          't': '[>272K]',
          'u': 5.670350000000001,
          'q': [
            1.5,
            2.7,
            9.6,
            12.3
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            34,
            3.4,
            153
          ]
        },
        {
          'm': 'GPT-5.2',
          't': '',
          'u': 2.192872500000001,
          'q': [
            4.3,
            7.6,
            24.8,
            31
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            11.9,
            1.19,
            95.2
          ]
        },
        {
          'm': 'GLM-5.2',
          't': '',
          'u': 2.294422,
          'q': [
            5.6,
            9.3,
            23.7,
            27.5
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': [
            9.52,
            1.768,
            29.92
          ]
        },
        {
          'm': 'DeepSeek-V4-Flash-0731',
          't': '[峰]',
          'u': 0.4765508,
          'q': [
            17.5,
            31.6,
            114.2,
            148.7
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': [
            2.992,
            0.2992,
            8.976
          ]
        },
        {
          'm': 'Kimi-K3',
          't': '',
          'u': 3.4532100000000003,
          'q': [
            2.5,
            4.6,
            15.8,
            20.1
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': [
            20.4,
            2.04,
            102
          ]
        },
        {
          'm': 'Kimi-K2.7-Code',
          't': '',
          'u': 1.6786480000000001,
          'q': [
            8.2,
            13.5,
            32.4,
            37
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': [
            6.46,
            1.292,
            27.2
          ]
        },
        {
          'm': 'Kimi-K2.5',
          't': '',
          'u': 0.94775,
          'q': [
            12.8,
            21.7,
            57.4,
            67.2
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': [
            4.08,
            0.68,
            20.4
          ]
        },
        {
          'm': 'Gemini 3.1 Pro',
          't': '[≤200K]',
          'u': 2.37014,
          'q': [
            3.8,
            6.8,
            23,
            29.1
          ],
          's': 'c',
          'w': null,
          'b': 'Gemini',
          'p': [
            13.6,
            1.36,
            81.6
          ]
        },
        {
          'm': 'Gemini 3.1 Pro',
          't': '[>200K]',
          'u': 4.5362800000000005,
          'q': [
            1.9,
            3.4,
            12,
            15.4
          ],
          's': 'c',
          'w': null,
          'b': 'Gemini',
          'p': [
            27.2,
            2.72,
            122.4
          ]
        },
        {
          'm': 'Gemini-3-Flash-Preview',
          't': '',
          'u': 0.592535,
          'q': [
            15.2,
            27.1,
            91.8,
            116.5
          ],
          's': 'c',
          'w': null,
          'b': 'Gemini',
          'p': [
            3.4,
            0.34,
            20.4
          ]
        },
        {
          'm': 'MiniMax-M3',
          't': '[≤200K]',
          'u': 1.0559040000000002,
          'q': [
            12.9,
            21.4,
            51.5,
            58.9
          ],
          's': 'c',
          'w': null,
          'b': 'MiniMax',
          'p': [
            4.08,
            0.816,
            16.32
          ]
        },
        {
          'm': 'MiniMax-M3',
          't': '[>200K]',
          'u': 2.1118080000000004,
          'q': [
            6.5,
            10.7,
            25.8,
            29.5
          ],
          's': 'c',
          'w': null,
          'b': 'MiniMax',
          'p': [
            8.16,
            1.632,
            32.64
          ]
        },
        {
          'm': 'MiniMax-M2.7',
          't': '',
          'u': 0.5279520000000001,
          'q': [
            25.9,
            42.7,
            103,
            117.8
          ],
          's': 'c',
          'w': null,
          'b': 'MiniMax',
          'p': [
            2.04,
            0.408,
            8.16
          ]
        },
        {
          'm': 'GPT-6.1-Sol',
          't': '[≤272K]',
          'u': 1.659370000000001,
          'q': [
            3.8,
            7.1,
            32.8,
            48.5
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            13.6,
            0.68,
            68
          ]
        },
        {
          'm': 'GPT-6.1-Sol',
          't': '[>272K]',
          'u': 3.148740000000001,
          'q': [
            1.9,
            3.6,
            17.3,
            26.2
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            27.2,
            1.36,
            102
          ]
        },
        {
          'm': 'GPT-6.1-Terra',
          't': '[≤272K]',
          'u': 0.8296850000000004,
          'q': [
            7.6,
            14.1,
            65.6,
            96.9
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            6.8,
            0.34,
            34
          ]
        },
        {
          'm': 'GPT-6.1-Terra',
          't': '[>272K]',
          'u': 1.5573700000000006,
          'q': [
            3.8,
            7.1,
            34.9,
            53.4
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            13.6,
            0.68,
            47.6
          ]
        },
        {
          'm': 'DeepSeek-V4.1-Flash',
          't': '[谷]',
          'u': 0.16756050000000003,
          'q': [
            51.2,
            91.9,
            324.7,
            418.9
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': [
            1.02,
            0.102,
            4.08
          ]
        },
        {
          'm': 'DeepSeek-V4.1-Flash',
          't': '[峰]',
          'u': 0.33512100000000006,
          'q': [
            25.6,
            46,
            162.3,
            209.5
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': [
            2.04,
            0.204,
            8.16
          ]
        },
        {
          'm': 'DeepSeek-V4-Flash-0731',
          't': '[谷]',
          'u': 0.2382754,
          'q': [
            35,
            63.2,
            228.3,
            297.4
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': [
            1.496,
            0.1496,
            4.488
          ]
        },
        {
          'm': 'DeepSeek-V4-Pro-0813',
          't': '[谷]',
          'u': 0.7148262000000002,
          'q': [
            11.7,
            21.1,
            76.1,
            99.1
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': [
            4.488,
            0.4488,
            13.464
          ]
        },
        {
          'm': 'DeepSeek-V4-Pro-0813',
          't': '[峰]',
          'u': 1.4296524000000004,
          'q': [
            5.8,
            10.5,
            38.1,
            49.6
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': [
            8.976,
            0.8976,
            26.928
          ]
        },
        {
          'm': 'GPT-6.2-Astra',
          't': '[≤272K]',
          'u': 6.637480000000004,
          'q': [
            0.9,
            1.8,
            8.2,
            12.1
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            54.4,
            2.72,
            272
          ]
        },
        {
          'm': 'GPT-6.2-Astra',
          't': '[>272K]',
          'u': 12.594960000000004,
          'q': [
            0.5,
            0.9,
            4.3,
            6.6
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            108.8,
            5.44,
            408
          ]
        },
        {
          'm': 'GPT-6.2-Sol',
          't': '[≤272K]',
          'u': 1.659370000000001,
          'q': [
            3.8,
            7.1,
            32.8,
            48.5
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            13.6,
            0.68,
            68
          ]
        },
        {
          'm': 'GPT-6.2-Sol',
          't': '[>272K]',
          'u': 3.148740000000001,
          'q': [
            1.9,
            3.6,
            17.3,
            26.2
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            27.2,
            1.36,
            102
          ]
        }
      ]
    },
    {
      'slug': 'trae-intl-pro-2026',
      'name': 'Pro',
      'platform': 'TRAE 国际版',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'codingplan',
      'fee': 20,
      'currency': '$',
      'feeCny': 136,
      'dm': 0,
      'models': [
        {
          'm': 'Doubao-Seed-2.1-Turbo',
          't': '',
          'u': 0.89692,
          'q': [
            38.7,
            63.6,
            151.6,
            172.9
          ],
          's': 'c',
          'w': null,
          'b': '豆包',
          'p': [
            3.4,
            0.68,
            17
          ]
        },
        {
          'm': 'GPT-6-Astra',
          't': '[≤272K]',
          'u': 11.510700000000002,
          'q': [
            1.9,
            3.4,
            11.8,
            15.1
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            68,
            6.8,
            340
          ]
        },
        {
          'm': 'GPT-6-Astra',
          't': '[>272K]',
          'u': 22.171400000000002,
          'q': [
            1,
            1.7,
            6.1,
            7.9
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            136,
            13.6,
            510
          ]
        },
        {
          'm': 'GPT-6-Sol',
          't': '[≤272K]',
          'u': 2.3021400000000005,
          'q': [
            9.6,
            17.1,
            59.1,
            75.6
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            13.6,
            1.36,
            68
          ]
        },
        {
          'm': 'GPT-6-Sol',
          't': '[>272K]',
          'u': 4.434280000000001,
          'q': [
            4.8,
            8.6,
            30.7,
            39.7
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            27.2,
            2.72,
            102
          ]
        },
        {
          'm': 'GPT-6-Luna',
          't': '[≤272K]',
          'u': 0.11510700000000003,
          'q': [
            191.1,
            342,
            1181.5,
            1511.2
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            0.68,
            0.068,
            3.4
          ]
        },
        {
          'm': 'GPT-6-Luna',
          't': '[>272K]',
          'u': 0.22171400000000005,
          'q': [
            96.1,
            172.7,
            613.4,
            793.3
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            1.36,
            0.136,
            5.1
          ]
        },
        {
          'm': 'GPT-5.6-Sol',
          't': '[≤272K]',
          'u': 4.604280000000001,
          'q': [
            4.8,
            8.6,
            29.5,
            37.8
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            27.2,
            2.72,
            136
          ]
        },
        {
          'm': 'GPT-5.6-Sol',
          't': '[>272K]',
          'u': 8.868560000000002,
          'q': [
            2.4,
            4.3,
            15.3,
            19.8
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            54.4,
            5.44,
            204
          ]
        },
        {
          'm': 'GPT-5.6-Terra',
          't': '[≤272K]',
          'u': 2.3701400000000006,
          'q': [
            9.5,
            17,
            57.4,
            72.8
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            13.6,
            1.36,
            81.6
          ]
        },
        {
          'm': 'GPT-5.6-Terra',
          't': '[>272K]',
          'u': 4.5362800000000005,
          'q': [
            4.8,
            8.6,
            30,
            38.5
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            27.2,
            2.72,
            122.4
          ]
        },
        {
          'm': 'GPT-5.6-Luna',
          't': '[≤272K]',
          'u': 0.23701400000000006,
          'q': [
            95.2,
            169.6,
            573.8,
            728
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            1.36,
            0.136,
            8.16
          ]
        },
        {
          'm': 'GPT-5.6-Luna',
          't': '[>272K]',
          'u': 0.45362800000000014,
          'q': [
            47.9,
            85.8,
            299.8,
            385.1
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            2.72,
            0.272,
            12.24
          ]
        },
        {
          'm': 'GPT-5.5',
          't': '[≤272K]',
          'u': 5.92535,
          'q': [
            3.8,
            6.8,
            23,
            29.1
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            34,
            3.4,
            204
          ]
        },
        {
          'm': 'GPT-5.5',
          't': '[>272K]',
          'u': 11.340700000000002,
          'q': [
            1.9,
            3.4,
            12,
            15.4
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            68,
            6.8,
            306
          ]
        },
        {
          'm': 'GPT-5.4',
          't': '[≤272K]',
          'u': 2.962675,
          'q': [
            7.6,
            13.6,
            45.9,
            58.2
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            17,
            1.7,
            102
          ]
        },
        {
          'm': 'GPT-5.4',
          't': '[>272K]',
          'u': 5.670350000000001,
          'q': [
            3.8,
            6.9,
            24,
            30.8
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            34,
            3.4,
            153
          ]
        },
        {
          'm': 'GPT-5.2',
          't': '',
          'u': 2.192872500000001,
          'q': [
            10.8,
            19.1,
            62,
            77.5
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            11.9,
            1.19,
            95.2
          ]
        },
        {
          'm': 'GLM-5.2',
          't': '',
          'u': 2.2944220000000004,
          'q': [
            13.9,
            23.3,
            59.3,
            68.7
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': [
            9.52,
            1.768,
            29.92
          ]
        },
        {
          'm': 'DeepSeek-V4-Flash-0731',
          't': '[峰]',
          'u': 0.4765508,
          'q': [
            43.8,
            79,
            285.4,
            371.7
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': [
            2.992,
            0.2992,
            8.976
          ]
        },
        {
          'm': 'Kimi-K3',
          't': '',
          'u': 3.4532100000000003,
          'q': [
            6.4,
            11.4,
            39.4,
            50.4
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': [
            20.4,
            2.04,
            102
          ]
        },
        {
          'm': 'Kimi-K2.7-Code',
          't': '',
          'u': 1.6786480000000001,
          'q': [
            20.4,
            33.7,
            81,
            92.6
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': [
            6.46,
            1.292,
            27.2
          ]
        },
        {
          'm': 'Kimi-K2.5',
          't': '',
          'u': 0.94775,
          'q': [
            32.1,
            54.3,
            143.5,
            168
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': [
            4.08,
            0.68,
            20.4
          ]
        },
        {
          'm': 'Gemini 3.1 Pro',
          't': '[≤200K]',
          'u': 2.3701400000000006,
          'q': [
            9.5,
            17,
            57.4,
            72.8
          ],
          's': 'c',
          'w': null,
          'b': 'Gemini',
          'p': [
            13.6,
            1.36,
            81.6
          ]
        },
        {
          'm': 'Gemini 3.1 Pro',
          't': '[>200K]',
          'u': 4.5362800000000005,
          'q': [
            4.8,
            8.6,
            30,
            38.5
          ],
          's': 'c',
          'w': null,
          'b': 'Gemini',
          'p': [
            27.2,
            2.72,
            122.4
          ]
        },
        {
          'm': 'Gemini-3-Flash-Preview',
          't': '',
          'u': 0.5925350000000001,
          'q': [
            38.1,
            67.9,
            229.5,
            291.2
          ],
          's': 'c',
          'w': null,
          'b': 'Gemini',
          'p': [
            3.4,
            0.34,
            20.4
          ]
        },
        {
          'm': 'MiniMax-M3',
          't': '[≤200K]',
          'u': 1.055904,
          'q': [
            32.4,
            53.4,
            128.8,
            147.3
          ],
          's': 'c',
          'w': null,
          'b': 'MiniMax',
          'p': [
            4.08,
            0.816,
            16.32
          ]
        },
        {
          'm': 'MiniMax-M3',
          't': '[>200K]',
          'u': 2.111808,
          'q': [
            16.2,
            26.7,
            64.4,
            73.6
          ],
          's': 'c',
          'w': null,
          'b': 'MiniMax',
          'p': [
            8.16,
            1.632,
            32.64
          ]
        },
        {
          'm': 'MiniMax-M2.7',
          't': '',
          'u': 0.527952,
          'q': [
            64.7,
            106.8,
            257.6,
            294.6
          ],
          's': 'c',
          'w': null,
          'b': 'MiniMax',
          'p': [
            2.04,
            0.408,
            8.16
          ]
        },
        {
          'm': 'GPT-6.1-Sol',
          't': '[≤272K]',
          'u': 1.6593700000000007,
          'q': [
            9.4,
            17.7,
            82,
            121.1
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            13.6,
            0.68,
            68
          ]
        },
        {
          'm': 'GPT-6.1-Sol',
          't': '[>272K]',
          'u': 3.148740000000001,
          'q': [
            4.7,
            8.9,
            43.2,
            65.6
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            27.2,
            1.36,
            102
          ]
        },
        {
          'm': 'GPT-6.1-Terra',
          't': '[≤272K]',
          'u': 0.8296850000000003,
          'q': [
            18.9,
            35.3,
            163.9,
            242.3
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            6.8,
            0.34,
            34
          ]
        },
        {
          'm': 'GPT-6.1-Terra',
          't': '[>272K]',
          'u': 1.5573700000000004,
          'q': [
            9.5,
            17.9,
            87.3,
            133.4
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            13.6,
            0.68,
            47.6
          ]
        },
        {
          'm': 'DeepSeek-V4.1-Flash',
          't': '[谷]',
          'u': 0.16756050000000003,
          'q': [
            127.9,
            229.8,
            811.6,
            1047.3
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': [
            1.02,
            0.102,
            4.08
          ]
        },
        {
          'm': 'DeepSeek-V4.1-Flash',
          't': '[峰]',
          'u': 0.33512100000000006,
          'q': [
            64,
            114.9,
            405.8,
            523.6
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': [
            2.04,
            0.204,
            8.16
          ]
        },
        {
          'm': 'DeepSeek-V4-Flash-0731',
          't': '[谷]',
          'u': 0.2382754,
          'q': [
            87.6,
            158,
            570.8,
            743.4
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': [
            1.496,
            0.1496,
            4.488
          ]
        },
        {
          'm': 'DeepSeek-V4-Pro-0813',
          't': '[谷]',
          'u': 0.7148262000000003,
          'q': [
            29.2,
            52.7,
            190.3,
            247.8
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': [
            4.488,
            0.4488,
            13.464
          ]
        },
        {
          'm': 'DeepSeek-V4-Pro-0813',
          't': '[峰]',
          'u': 1.4296524000000006,
          'q': [
            14.6,
            26.3,
            95.1,
            123.9
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': [
            8.976,
            0.8976,
            26.928
          ]
        },
        {
          'm': 'GPT-6.2-Astra',
          't': '[≤272K]',
          'u': 6.637480000000003,
          'q': [
            2.4,
            4.4,
            20.5,
            30.3
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            54.4,
            2.72,
            272
          ]
        },
        {
          'm': 'GPT-6.2-Astra',
          't': '[>272K]',
          'u': 12.594960000000004,
          'q': [
            1.2,
            2.2,
            10.8,
            16.4
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            108.8,
            5.44,
            408
          ]
        },
        {
          'm': 'GPT-6.2-Sol',
          't': '[≤272K]',
          'u': 1.6593700000000007,
          'q': [
            9.4,
            17.7,
            82,
            121.1
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            13.6,
            0.68,
            68
          ]
        },
        {
          'm': 'GPT-6.2-Sol',
          't': '[>272K]',
          'u': 3.148740000000001,
          'q': [
            4.7,
            8.9,
            43.2,
            65.6
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            27.2,
            1.36,
            102
          ]
        }
      ]
    },
    {
      'slug': 'trae-intl-pro-plus-2026',
      'name': 'Pro+',
      'platform': 'TRAE 国际版',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'codingplan',
      'fee': 60,
      'currency': '$',
      'feeCny': 408,
      'dm': 0,
      'models': [
        {
          'm': 'Doubao-Seed-2.1-Turbo',
          't': '',
          'u': 0.89692,
          'q': [
            116,
            190.8,
            454.9,
            518.7
          ],
          's': 'c',
          'w': null,
          'b': '豆包',
          'p': [
            3.4,
            0.68,
            17
          ]
        },
        {
          'm': 'GPT-6-Astra',
          't': '[≤272K]',
          'u': 11.510700000000002,
          'q': [
            5.7,
            10.3,
            35.4,
            45.3
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            68,
            6.8,
            340
          ]
        },
        {
          'm': 'GPT-6-Astra',
          't': '[>272K]',
          'u': 22.1714,
          'q': [
            2.9,
            5.2,
            18.4,
            23.8
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            136,
            13.6,
            510
          ]
        },
        {
          'm': 'GPT-6-Sol',
          't': '[≤272K]',
          'u': 2.3021400000000005,
          'q': [
            28.7,
            51.3,
            177.2,
            226.7
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            13.6,
            1.36,
            68
          ]
        },
        {
          'm': 'GPT-6-Sol',
          't': '[>272K]',
          'u': 4.434280000000001,
          'q': [
            14.4,
            25.9,
            92,
            119
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            27.2,
            2.72,
            102
          ]
        },
        {
          'm': 'GPT-6-Luna',
          't': '[≤272K]',
          'u': 0.11510700000000003,
          'q': [
            573.4,
            1026,
            3544.5,
            4533.7
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            0.68,
            0.068,
            3.4
          ]
        },
        {
          'm': 'GPT-6-Luna',
          't': '[>272K]',
          'u': 0.22171400000000005,
          'q': [
            288.2,
            518.2,
            1840.2,
            2379.9
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            1.36,
            0.136,
            5.1
          ]
        },
        {
          'm': 'GPT-5.6-Sol',
          't': '[≤272K]',
          'u': 4.604280000000001,
          'q': [
            14.3,
            25.7,
            88.6,
            113.3
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            27.2,
            2.72,
            136
          ]
        },
        {
          'm': 'GPT-5.6-Sol',
          't': '[>272K]',
          'u': 8.868560000000002,
          'q': [
            7.2,
            13,
            46,
            59.5
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            54.4,
            5.44,
            204
          ]
        },
        {
          'm': 'GPT-5.6-Terra',
          't': '[≤272K]',
          'u': 2.3701400000000006,
          'q': [
            28.6,
            50.9,
            172.1,
            218.4
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            13.6,
            1.36,
            81.6
          ]
        },
        {
          'm': 'GPT-5.6-Terra',
          't': '[>272K]',
          'u': 4.5362800000000005,
          'q': [
            14.4,
            25.8,
            89.9,
            115.5
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            27.2,
            2.72,
            122.4
          ]
        },
        {
          'm': 'GPT-5.6-Luna',
          't': '[≤272K]',
          'u': 0.23701400000000006,
          'q': [
            285.5,
            508.9,
            1721.4,
            2183.9
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            1.36,
            0.136,
            8.16
          ]
        },
        {
          'm': 'GPT-5.6-Luna',
          't': '[>272K]',
          'u': 0.45362800000000014,
          'q': [
            143.6,
            257.5,
            899.4,
            1155.4
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            2.72,
            0.272,
            12.24
          ]
        },
        {
          'm': 'GPT-5.5',
          't': '[≤272K]',
          'u': 5.925350000000002,
          'q': [
            11.4,
            20.4,
            68.9,
            87.4
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            34,
            3.4,
            204
          ]
        },
        {
          'm': 'GPT-5.5',
          't': '[>272K]',
          'u': 11.340699999999998,
          'q': [
            5.7,
            10.3,
            36,
            46.2
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            68,
            6.8,
            306
          ]
        },
        {
          'm': 'GPT-5.4',
          't': '[≤272K]',
          'u': 2.962675000000001,
          'q': [
            22.8,
            40.7,
            137.7,
            174.7
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            17,
            1.7,
            102
          ]
        },
        {
          'm': 'GPT-5.4',
          't': '[>272K]',
          'u': 5.670349999999999,
          'q': [
            11.5,
            20.6,
            72,
            92.4
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            34,
            3.4,
            153
          ]
        },
        {
          'm': 'GPT-5.2',
          't': '',
          'u': 2.192872500000001,
          'q': [
            32.4,
            57.2,
            186.1,
            232.6
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            11.9,
            1.19,
            95.2
          ]
        },
        {
          'm': 'GLM-5.2',
          't': '',
          'u': 2.2944220000000004,
          'q': [
            41.7,
            69.9,
            177.8,
            206.1
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': [
            9.52,
            1.768,
            29.92
          ]
        },
        {
          'm': 'DeepSeek-V4-Flash-0731',
          't': '[峰]',
          'u': 0.4765508,
          'q': [
            131.4,
            237,
            856.2,
            1115.2
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': [
            2.992,
            0.2992,
            8.976
          ]
        },
        {
          'm': 'Kimi-K3',
          't': '',
          'u': 3.4532100000000003,
          'q': [
            19.1,
            34.2,
            118.2,
            151.1
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': [
            20.4,
            2.04,
            102
          ]
        },
        {
          'm': 'Kimi-K2.7-Code',
          't': '',
          'u': 1.6786480000000001,
          'q': [
            61.3,
            101,
            243.1,
            277.8
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': [
            6.46,
            1.292,
            27.2
          ]
        },
        {
          'm': 'Kimi-K2.5',
          't': '',
          'u': 0.94775,
          'q': [
            96.4,
            162.9,
            430.5,
            504.1
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': [
            4.08,
            0.68,
            20.4
          ]
        },
        {
          'm': 'Gemini 3.1 Pro',
          't': '[≤200K]',
          'u': 2.3701400000000006,
          'q': [
            28.6,
            50.9,
            172.1,
            218.4
          ],
          's': 'c',
          'w': null,
          'b': 'Gemini',
          'p': [
            13.6,
            1.36,
            81.6
          ]
        },
        {
          'm': 'Gemini 3.1 Pro',
          't': '[>200K]',
          'u': 4.5362800000000005,
          'q': [
            14.4,
            25.8,
            89.9,
            115.5
          ],
          's': 'c',
          'w': null,
          'b': 'Gemini',
          'p': [
            27.2,
            2.72,
            122.4
          ]
        },
        {
          'm': 'Gemini-3-Flash-Preview',
          't': '',
          'u': 0.5925350000000001,
          'q': [
            114.2,
            203.6,
            688.6,
            873.6
          ],
          's': 'c',
          'w': null,
          'b': 'Gemini',
          'p': [
            3.4,
            0.34,
            20.4
          ]
        },
        {
          'm': 'MiniMax-M3',
          't': '[≤200K]',
          'u': 1.0559040000000002,
          'q': [
            97.1,
            160.2,
            386.4,
            441.8
          ],
          's': 'c',
          'w': null,
          'b': 'MiniMax',
          'p': [
            4.08,
            0.816,
            16.32
          ]
        },
        {
          'm': 'MiniMax-M3',
          't': '[>200K]',
          'u': 2.1118080000000004,
          'q': [
            48.5,
            80.1,
            193.2,
            220.9
          ],
          's': 'c',
          'w': null,
          'b': 'MiniMax',
          'p': [
            8.16,
            1.632,
            32.64
          ]
        },
        {
          'm': 'MiniMax-M2.7',
          't': '',
          'u': 0.5279520000000001,
          'q': [
            194.2,
            320.4,
            772.8,
            883.7
          ],
          's': 'c',
          'w': null,
          'b': 'MiniMax',
          'p': [
            2.04,
            0.408,
            8.16
          ]
        },
        {
          'm': 'GPT-6.1-Sol',
          't': '[≤272K]',
          'u': 1.659370000000001,
          'q': [
            28.3,
            53,
            245.9,
            363.4
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            13.6,
            0.68,
            68
          ]
        },
        {
          'm': 'GPT-6.1-Sol',
          't': '[>272K]',
          'u': 3.148740000000001,
          'q': [
            14.2,
            26.8,
            129.6,
            196.8
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            27.2,
            1.36,
            102
          ]
        },
        {
          'm': 'GPT-6.1-Terra',
          't': '[≤272K]',
          'u': 0.8296850000000004,
          'q': [
            56.6,
            106,
            491.8,
            726.8
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            6.8,
            0.34,
            34
          ]
        },
        {
          'm': 'GPT-6.1-Terra',
          't': '[>272K]',
          'u': 1.5573700000000006,
          'q': [
            28.5,
            53.6,
            262,
            400.2
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            13.6,
            0.68,
            47.6
          ]
        },
        {
          'm': 'DeepSeek-V4.1-Flash',
          't': '[谷]',
          'u': 0.1675605,
          'q': [
            383.8,
            689.5,
            2434.9,
            3141.9
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': [
            1.02,
            0.102,
            4.08
          ]
        },
        {
          'm': 'DeepSeek-V4.1-Flash',
          't': '[峰]',
          'u': 0.335121,
          'q': [
            191.9,
            344.8,
            1217.5,
            1570.9
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': [
            2.04,
            0.204,
            8.16
          ]
        },
        {
          'm': 'DeepSeek-V4-Flash-0731',
          't': '[谷]',
          'u': 0.2382754,
          'q': [
            262.8,
            473.9,
            1712.3,
            2230.3
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': [
            1.496,
            0.1496,
            4.488
          ]
        },
        {
          'm': 'DeepSeek-V4-Pro-0813',
          't': '[谷]',
          'u': 0.7148262000000002,
          'q': [
            87.6,
            158,
            570.8,
            743.4
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': [
            4.488,
            0.4488,
            13.464
          ]
        },
        {
          'm': 'DeepSeek-V4-Pro-0813',
          't': '[峰]',
          'u': 1.4296524000000004,
          'q': [
            43.8,
            79,
            285.4,
            371.7
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': [
            8.976,
            0.8976,
            26.928
          ]
        },
        {
          'm': 'GPT-6.2-Astra',
          't': '[≤272K]',
          'u': 6.637480000000004,
          'q': [
            7.1,
            13.3,
            61.5,
            90.9
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            54.4,
            2.72,
            272
          ]
        },
        {
          'm': 'GPT-6.2-Astra',
          't': '[>272K]',
          'u': 12.594960000000004,
          'q': [
            3.6,
            6.7,
            32.4,
            49.2
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            108.8,
            5.44,
            408
          ]
        },
        {
          'm': 'GPT-6.2-Sol',
          't': '[≤272K]',
          'u': 1.659370000000001,
          'q': [
            28.3,
            53,
            245.9,
            363.4
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            13.6,
            0.68,
            68
          ]
        },
        {
          'm': 'GPT-6.2-Sol',
          't': '[>272K]',
          'u': 3.148740000000001,
          'q': [
            14.2,
            26.8,
            129.6,
            196.8
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            27.2,
            1.36,
            102
          ]
        }
      ]
    },
    {
      'slug': 'trae-intl-ultra-2026',
      'name': 'Ultra',
      'platform': 'TRAE 国际版',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'codingplan',
      'fee': 200,
      'currency': '$',
      'feeCny': 1360,
      'dm': 0,
      'models': [
        {
          'm': 'Doubao-Seed-2.1-Turbo',
          't': '',
          'u': 0.8969199999999999,
          'q': [
            386.5,
            635.9,
            1516.3,
            1729.1
          ],
          's': 'c',
          'w': null,
          'b': '豆包',
          'p': [
            3.4,
            0.68,
            17
          ]
        },
        {
          'm': 'GPT-6-Astra',
          't': '[≤272K]',
          'u': 11.510700000000002,
          'q': [
            19.1,
            34.2,
            118.2,
            151.1
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            68,
            6.8,
            340
          ]
        },
        {
          'm': 'GPT-6-Astra',
          't': '[>272K]',
          'u': 22.171400000000002,
          'q': [
            9.6,
            17.3,
            61.3,
            79.3
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            136,
            13.6,
            510
          ]
        },
        {
          'm': 'GPT-6-Sol',
          't': '[≤272K]',
          'u': 2.3021400000000005,
          'q': [
            95.6,
            171,
            590.8,
            755.6
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            13.6,
            1.36,
            68
          ]
        },
        {
          'm': 'GPT-6-Sol',
          't': '[>272K]',
          'u': 4.434280000000001,
          'q': [
            48,
            86.4,
            306.7,
            396.7
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            27.2,
            2.72,
            102
          ]
        },
        {
          'm': 'GPT-6-Luna',
          't': '[≤272K]',
          'u': 0.11510700000000003,
          'q': [
            1911.3,
            3420.2,
            11815.1,
            15112.3
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            0.68,
            0.068,
            3.4
          ]
        },
        {
          'm': 'GPT-6-Luna',
          't': '[>272K]',
          'u': 0.22171400000000005,
          'q': [
            960.6,
            1727.3,
            6134,
            7933
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            1.36,
            0.136,
            5.1
          ]
        },
        {
          'm': 'GPT-5.6-Sol',
          't': '[≤272K]',
          'u': 4.604280000000001,
          'q': [
            47.8,
            85.5,
            295.4,
            377.8
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            27.2,
            2.72,
            136
          ]
        },
        {
          'm': 'GPT-5.6-Sol',
          't': '[>272K]',
          'u': 8.868560000000002,
          'q': [
            24,
            43.2,
            153.4,
            198.3
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            54.4,
            5.44,
            204
          ]
        },
        {
          'm': 'GPT-5.6-Terra',
          't': '[≤272K]',
          'u': 2.3701400000000006,
          'q': [
            95.2,
            169.6,
            573.8,
            728
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            13.6,
            1.36,
            81.6
          ]
        },
        {
          'm': 'GPT-5.6-Terra',
          't': '[>272K]',
          'u': 4.5362800000000005,
          'q': [
            47.9,
            85.8,
            299.8,
            385.1
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            27.2,
            2.72,
            122.4
          ]
        },
        {
          'm': 'GPT-5.6-Luna',
          't': '[≤272K]',
          'u': 0.2370140000000001,
          'q': [
            951.7,
            1696.5,
            5738.1,
            7279.6
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            1.36,
            0.136,
            8.16
          ]
        },
        {
          'm': 'GPT-5.6-Luna',
          't': '[>272K]',
          'u': 0.45362800000000014,
          'q': [
            478.8,
            858.5,
            2998.1,
            3851.3
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            2.72,
            0.272,
            12.24
          ]
        },
        {
          'm': 'GPT-5.5',
          't': '[≤272K]',
          'u': 5.925350000000001,
          'q': [
            38.1,
            67.9,
            229.5,
            291.2
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            34,
            3.4,
            204
          ]
        },
        {
          'm': 'GPT-5.5',
          't': '[>272K]',
          'u': 11.3407,
          'q': [
            19.2,
            34.3,
            119.9,
            154.1
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            68,
            6.8,
            306
          ]
        },
        {
          'm': 'GPT-5.4',
          't': '[≤272K]',
          'u': 2.9626750000000004,
          'q': [
            76.1,
            135.7,
            459,
            582.4
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            17,
            1.7,
            102
          ]
        },
        {
          'm': 'GPT-5.4',
          't': '[>272K]',
          'u': 5.67035,
          'q': [
            38.3,
            68.7,
            239.8,
            308.1
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            34,
            3.4,
            153
          ]
        },
        {
          'm': 'GPT-5.2',
          't': '',
          'u': 2.192872500000001,
          'q': [
            107.9,
            190.8,
            620.2,
            775.2
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            11.9,
            1.19,
            95.2
          ]
        },
        {
          'm': 'GLM-5.2',
          't': '',
          'u': 2.2944220000000004,
          'q': [
            139.1,
            232.9,
            592.7,
            687.1
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': [
            9.52,
            1.768,
            29.92
          ]
        },
        {
          'm': 'DeepSeek-V4-Flash-0731',
          't': '[峰]',
          'u': 0.4765508,
          'q': [
            438,
            789.9,
            2853.8,
            3717.2
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': [
            2.992,
            0.2992,
            8.976
          ]
        },
        {
          'm': 'Kimi-K3',
          't': '',
          'u': 3.4532100000000003,
          'q': [
            63.7,
            114,
            393.8,
            503.7
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': [
            20.4,
            2.04,
            102
          ]
        },
        {
          'm': 'Kimi-K2.7-Code',
          't': '',
          'u': 1.6786480000000001,
          'q': [
            204.2,
            336.7,
            810.2,
            925.9
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': [
            6.46,
            1.292,
            27.2
          ]
        },
        {
          'm': 'Kimi-K2.5',
          't': '',
          'u': 0.9477500000000002,
          'q': [
            321.2,
            543.1,
            1435,
            1680.3
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': [
            4.08,
            0.68,
            20.4
          ]
        },
        {
          'm': 'Gemini 3.1 Pro',
          't': '[≤200K]',
          'u': 2.3701400000000006,
          'q': [
            95.2,
            169.6,
            573.8,
            728
          ],
          's': 'c',
          'w': null,
          'b': 'Gemini',
          'p': [
            13.6,
            1.36,
            81.6
          ]
        },
        {
          'm': 'Gemini 3.1 Pro',
          't': '[>200K]',
          'u': 4.5362800000000005,
          'q': [
            47.9,
            85.8,
            299.8,
            385.1
          ],
          's': 'c',
          'w': null,
          'b': 'Gemini',
          'p': [
            27.2,
            2.72,
            122.4
          ]
        },
        {
          'm': 'Gemini-3-Flash-Preview',
          't': '',
          'u': 0.5925350000000001,
          'q': [
            380.7,
            678.6,
            2295.2,
            2911.9
          ],
          's': 'c',
          'w': null,
          'b': 'Gemini',
          'p': [
            3.4,
            0.34,
            20.4
          ]
        },
        {
          'm': 'MiniMax-M3',
          't': '[≤200K]',
          'u': 1.0559040000000002,
          'q': [
            323.6,
            534,
            1288,
            1472.8
          ],
          's': 'c',
          'w': null,
          'b': 'MiniMax',
          'p': [
            4.08,
            0.816,
            16.32
          ]
        },
        {
          'm': 'MiniMax-M3',
          't': '[>200K]',
          'u': 2.1118080000000004,
          'q': [
            161.8,
            267,
            644,
            736.4
          ],
          's': 'c',
          'w': null,
          'b': 'MiniMax',
          'p': [
            8.16,
            1.632,
            32.64
          ]
        },
        {
          'm': 'MiniMax-M2.7',
          't': '',
          'u': 0.5279520000000001,
          'q': [
            647.2,
            1068.1,
            2576,
            2945.6
          ],
          's': 'c',
          'w': null,
          'b': 'MiniMax',
          'p': [
            2.04,
            0.408,
            8.16
          ]
        },
        {
          'm': 'GPT-6.1-Sol',
          't': '[≤272K]',
          'u': 1.6593700000000007,
          'q': [
            94.4,
            176.7,
            819.6,
            1211.3
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            13.6,
            0.68,
            68
          ]
        },
        {
          'm': 'GPT-6.1-Sol',
          't': '[>272K]',
          'u': 3.148740000000001,
          'q': [
            47.4,
            89.2,
            431.9,
            656
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            27.2,
            1.36,
            102
          ]
        },
        {
          'm': 'GPT-6.1-Terra',
          't': '[≤272K]',
          'u': 0.8296850000000003,
          'q': [
            188.8,
            353.4,
            1639.2,
            2422.7
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            6.8,
            0.34,
            34
          ]
        },
        {
          'm': 'GPT-6.1-Terra',
          't': '[>272K]',
          'u': 1.5573700000000006,
          'q': [
            94.9,
            178.7,
            873.3,
            1334.2
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            13.6,
            0.68,
            47.6
          ]
        },
        {
          'm': 'DeepSeek-V4.1-Flash',
          't': '[谷]',
          'u': 0.16756050000000003,
          'q': [
            1279.4,
            2298.5,
            8116.5,
            10472.9
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': [
            1.02,
            0.102,
            4.08
          ]
        },
        {
          'm': 'DeepSeek-V4.1-Flash',
          't': '[峰]',
          'u': 0.33512100000000006,
          'q': [
            639.7,
            1149.2,
            4058.2,
            5236.4
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': [
            2.04,
            0.204,
            8.16
          ]
        },
        {
          'm': 'DeepSeek-V4-Flash-0731',
          't': '[谷]',
          'u': 0.2382754,
          'q': [
            875.9,
            1579.8,
            5707.7,
            7434.4
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': [
            1.496,
            0.1496,
            4.488
          ]
        },
        {
          'm': 'DeepSeek-V4-Pro-0813',
          't': '[谷]',
          'u': 0.7148262000000003,
          'q': [
            292,
            526.6,
            1902.6,
            2478.1
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': [
            4.488,
            0.4488,
            13.464
          ]
        },
        {
          'm': 'DeepSeek-V4-Pro-0813',
          't': '[峰]',
          'u': 1.4296524000000006,
          'q': [
            146,
            263.3,
            951.3,
            1239.1
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': [
            8.976,
            0.8976,
            26.928
          ]
        },
        {
          'm': 'GPT-6.2-Astra',
          't': '[≤272K]',
          'u': 6.637480000000003,
          'q': [
            23.6,
            44.2,
            204.9,
            302.8
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            54.4,
            2.72,
            272
          ]
        },
        {
          'm': 'GPT-6.2-Astra',
          't': '[>272K]',
          'u': 12.594960000000004,
          'q': [
            11.8,
            22.3,
            108,
            164
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            108.8,
            5.44,
            408
          ]
        },
        {
          'm': 'GPT-6.2-Sol',
          't': '[≤272K]',
          'u': 1.6593700000000007,
          'q': [
            94.4,
            176.7,
            819.6,
            1211.3
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            13.6,
            0.68,
            68
          ]
        },
        {
          'm': 'GPT-6.2-Sol',
          't': '[>272K]',
          'u': 3.148740000000001,
          'q': [
            47.4,
            89.2,
            431.9,
            656
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            27.2,
            1.36,
            102
          ]
        }
      ]
    },
    {
      'slug': 'github-token-plan-pro',
      'name': 'Pro',
      'platform': 'GitHub',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'codingplan',
      'fee': 10,
      'currency': '$',
      'feeCny': 68,
      'dm': 0,
      'models': [
        {
          'm': 'GPT-5.3-Codex',
          't': '',
          'u': 1.4619150000000003,
          'q': [
            8.1,
            14.3,
            46.5,
            58.1
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            11.9,
            1.19,
            95.2
          ]
        },
        {
          'm': 'GPT-5.6-Luna',
          't': '[≤200K]',
          'u': 0.15800933333333336,
          'q': [
            71.4,
            127.2,
            430.4,
            546
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            1.36,
            0.136,
            8.16
          ]
        },
        {
          'm': 'GPT-5.6-Luna',
          't': '[>200K]',
          'u': 0.3024186666666668,
          'q': [
            35.9,
            64.4,
            224.9,
            288.8
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            2.72,
            0.272,
            12.24
          ]
        },
        {
          'm': 'GPT-6-Luna',
          't': '[≤272K]',
          'u': 0.07673800000000001,
          'q': [
            143.3,
            256.5,
            886.1,
            1133.4
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            0.68,
            0.068,
            3.4
          ]
        },
        {
          'm': 'GPT-6-Luna',
          't': '[>272K]',
          'u': 0.14780933333333338,
          'q': [
            72,
            129.5,
            460.1,
            595
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            1.36,
            0.136,
            5.1
          ]
        },
        {
          'm': 'Claude Haiku 4.5',
          't': '',
          'u': 0.7673800000000001,
          'q': [
            14.3,
            25.7,
            88.6,
            113.3
          ],
          's': 'c',
          'w': null,
          'b': 'Claude',
          'p': [
            6.8,
            0.68,
            34
          ]
        },
        {
          'm': 'Claude Haiku 5.5',
          't': '[≤100K]',
          'u': 0.07673800000000001,
          'q': [
            143.3,
            256.5,
            886.1,
            1133.4
          ],
          's': 'c',
          'w': null,
          'b': 'Claude',
          'p': [
            0.68,
            0.068,
            3.4
          ]
        },
        {
          'm': 'Claude Haiku 5.5',
          't': '[>100K]',
          'u': 0.38369000000000003,
          'q': [
            28.7,
            51.3,
            177.2,
            226.7
          ],
          's': 'c',
          'w': null,
          'b': 'Claude',
          'p': [
            3.4,
            0.34,
            17
          ]
        },
        {
          'm': 'Claude Sonnet 5',
          't': '',
          'u': 1.5347600000000001,
          'q': [
            7.2,
            12.8,
            44.3,
            56.7
          ],
          's': 'c',
          'w': null,
          'b': 'Claude',
          'p': [
            13.6,
            1.36,
            68
          ]
        },
        {
          'm': 'Claude Sonnet 5.5',
          't': '',
          'u': 1.106246666666667,
          'q': [
            7.1,
            13.3,
            61.5,
            90.9
          ],
          's': 'c',
          'w': null,
          'b': 'Claude',
          'p': [
            13.6,
            0.68,
            68
          ]
        },
        {
          'm': 'Gemini-3.8-Flash',
          't': '',
          'u': 0.5755350000000001,
          'q': [
            19.1,
            34.2,
            118.2,
            151.1
          ],
          's': 'c',
          'w': null,
          'b': 'Gemini',
          'p': [
            5.1,
            0.51,
            25.5
          ]
        },
        {
          'm': 'MAI-Code-1.1-Flash',
          't': '',
          'u': 0.15800933333333336,
          'q': [
            71.4,
            127.2,
            430.4,
            546
          ],
          's': 'c',
          'w': null,
          'b': 'Microsoft',
          'p': [
            1.36,
            0.136,
            8.16
          ]
        },
        {
          'm': 'Grok-4.5',
          't': '[≤200K]',
          'u': 2.729633333333333,
          'q': [
            7.3,
            11.7,
            24.9,
            27.7
          ],
          's': 'c',
          'w': null,
          'b': 'Grok',
          'p': [
            13.6,
            3.4,
            40.8
          ]
        },
        {
          'm': 'Grok-4.5',
          't': '[>200K]',
          'u': 5.459266666666666,
          'q': [
            3.7,
            5.8,
            12.5,
            13.9
          ],
          's': 'c',
          'w': null,
          'b': 'Grok',
          'p': [
            27.2,
            6.8,
            81.6
          ]
        },
        {
          'm': 'Grok-4.6',
          't': '[≤200K]',
          'u': 2.729633333333333,
          'q': [
            7.3,
            11.7,
            24.9,
            27.7
          ],
          's': 'c',
          'w': null,
          'b': 'Grok',
          'p': [
            13.6,
            3.4,
            40.8
          ]
        },
        {
          'm': 'Grok-4.6',
          't': '[>200K]',
          'u': 5.459266666666666,
          'q': [
            3.7,
            5.8,
            12.5,
            13.9
          ],
          's': 'c',
          'w': null,
          'b': 'Grok',
          'p': [
            27.2,
            6.8,
            81.6
          ]
        },
        {
          'm': 'Grok-4.7',
          't': '[≤200K]',
          'u': 2.729633333333333,
          'q': [
            7.3,
            11.7,
            24.9,
            27.7
          ],
          's': 'c',
          'w': null,
          'b': 'Grok',
          'p': [
            13.6,
            3.4,
            40.8
          ]
        },
        {
          'm': 'Grok-4.7',
          't': '[>200K]',
          'u': 5.459266666666666,
          'q': [
            3.7,
            5.8,
            12.5,
            13.9
          ],
          's': 'c',
          'w': null,
          'b': 'Grok',
          'p': [
            27.2,
            6.8,
            81.6
          ]
        },
        {
          'm': 'Kimi-K3',
          't': '',
          'u': 2.3021400000000005,
          'q': [
            4.8,
            8.6,
            29.5,
            37.8
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': [
            20.4,
            2.04,
            102
          ]
        },
        {
          'm': 'GPT-6.1-Terra',
          't': '[≤272K]',
          'u': 0.5531233333333335,
          'q': [
            14.2,
            26.5,
            122.9,
            181.7
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            6.8,
            0.34,
            34
          ]
        },
        {
          'm': 'GPT-6.1-Terra',
          't': '[>272K]',
          'u': 1.0495800000000002,
          'q': [
            7.1,
            13.4,
            64.8,
            98.4
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            13.6,
            0.68,
            51
          ]
        },
        {
          'm': 'Gemini 4 Hydrogen',
          't': '',
          'u': 0.8296850000000001,
          'q': [
            9.4,
            17.7,
            82,
            121.1
          ],
          's': 'c',
          'w': null,
          'b': 'Gemini',
          'p': [
            10.2,
            0.51,
            51
          ]
        },
        {
          'm': 'MAI Code 2',
          't': '',
          'u': 0.27656166666666676,
          'q': [
            28.3,
            53,
            245.9,
            363.4
          ],
          's': 'c',
          'w': null,
          'b': 'MAI',
          'p': [
            3.4,
            0.17,
            17
          ]
        },
        {
          'm': 'MAI Code 2 Flash',
          't': '',
          'u': 0.03836900000000001,
          'q': [
            286.7,
            513,
            1772.3,
            2266.8
          ],
          's': 'c',
          'w': null,
          'b': 'MAI',
          'p': [
            0.34,
            0.034,
            1.7
          ]
        }
      ]
    },
    {
      'slug': 'github-token-plan-pro-2',
      'name': 'Pro+',
      'platform': 'GitHub',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'codingplan',
      'fee': 39,
      'currency': '$',
      'feeCny': 265.2,
      'dm': 0,
      'models': [
        {
          'm': 'GPT-5.3-Codex',
          't': '',
          'u': 1.2217432500000005,
          'q': [
            37.8,
            66.8,
            217.1,
            271.3
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            11.9,
            1.19,
            95.2
          ]
        },
        {
          'm': 'GPT-5.4-nano',
          't': '',
          'u': 0.13299780000000003,
          'q': [
            332.7,
            592.6,
            1994,
            2524.8
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            1.36,
            0.136,
            8.5
          ]
        },
        {
          'm': 'GPT-5.6-Luna',
          't': '[≤200K]',
          'u': 0.13205065714285716,
          'q': [
            333.1,
            593.8,
            2008.3,
            2547.9
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            1.36,
            0.136,
            8.16
          ]
        },
        {
          'm': 'GPT-5.6-Luna',
          't': '[>200K]',
          'u': 0.25273560000000006,
          'q': [
            167.6,
            300.5,
            1049.3,
            1347.9
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            2.72,
            0.272,
            12.24
          ]
        },
        {
          'm': 'GPT-5.6-Sol',
          't': '[≤272K]',
          'u': 2.565241714285715,
          'q': [
            16.7,
            29.9,
            103.4,
            132.2
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            27.2,
            2.72,
            136
          ]
        },
        {
          'm': 'GPT-5.6-Sol',
          't': '[>272K]',
          'u': 4.941054857142857,
          'q': [
            8.4,
            15.1,
            53.7,
            69.4
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            54.4,
            5.44,
            204
          ]
        },
        {
          'm': 'GPT-6-Astra',
          't': '[≤272K]',
          'u': 6.413104285714287,
          'q': [
            6.7,
            12,
            41.4,
            52.9
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            68,
            6.8,
            340
          ]
        },
        {
          'm': 'GPT-6-Astra',
          't': '[>272K]',
          'u': 12.352637142857143,
          'q': [
            3.4,
            6,
            21.5,
            27.8
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            136,
            13.6,
            510
          ]
        },
        {
          'm': 'GPT-6-Luna',
          't': '[≤272K]',
          'u': 0.06413104285714286,
          'q': [
            668.9,
            1197.1,
            4135.3,
            5289.3
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            0.68,
            0.068,
            3.4
          ]
        },
        {
          'm': 'GPT-6-Luna',
          't': '[>272K]',
          'u': 0.12352637142857147,
          'q': [
            336.2,
            604.6,
            2146.9,
            2776.6
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            1.36,
            0.136,
            5.1
          ]
        },
        {
          'm': 'GPT-6-Sol',
          't': '[≤272K]',
          'u': 1.2826208571428575,
          'q': [
            33.4,
            59.9,
            206.8,
            264.5
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            13.6,
            1.36,
            68
          ]
        },
        {
          'm': 'GPT-6-Sol',
          't': '[>272K]',
          'u': 2.4705274285714287,
          'q': [
            16.8,
            30.2,
            107.3,
            138.8
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            27.2,
            2.72,
            102
          ]
        },
        {
          'm': 'GPT-6.1-Sol',
          't': '[≤272K]',
          'u': 0.9245061428571434,
          'q': [
            33,
            61.8,
            286.9,
            424
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            13.6,
            0.68,
            68
          ]
        },
        {
          'm': 'GPT-6.1-Sol',
          't': '[>272K]',
          'u': 1.7542980000000004,
          'q': [
            16.6,
            31.2,
            151.2,
            229.6
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            27.2,
            1.36,
            102
          ]
        },
        {
          'm': 'Claude Haiku 4.5',
          't': '',
          'u': 0.6413104285714287,
          'q': [
            66.9,
            119.7,
            413.5,
            528.9
          ],
          's': 'c',
          'w': null,
          'b': 'Claude',
          'p': [
            6.8,
            0.68,
            34
          ]
        },
        {
          'm': 'Claude Haiku 5.5',
          't': '[≤100K]',
          'u': 0.06413104285714286,
          'q': [
            668.9,
            1197.1,
            4135.3,
            5289.3
          ],
          's': 'c',
          'w': null,
          'b': 'Claude',
          'p': [
            0.68,
            0.068,
            3.4
          ]
        },
        {
          'm': 'Claude Haiku 5.5',
          't': '[>100K]',
          'u': 0.32065521428571436,
          'q': [
            133.8,
            239.4,
            827.1,
            1057.9
          ],
          's': 'c',
          'w': null,
          'b': 'Claude',
          'p': [
            3.4,
            0.34,
            17
          ]
        },
        {
          'm': 'Claude Opus 5.5',
          't': '',
          'u': 1.8490122857142868,
          'q': [
            16.5,
            30.9,
            143.4,
            212
          ],
          's': 'c',
          'w': null,
          'b': 'Claude',
          'p': [
            27.2,
            1.36,
            136
          ]
        },
        {
          'm': 'Claude Sonnet 5',
          't': '',
          'u': 1.2826208571428575,
          'q': [
            33.4,
            59.9,
            206.8,
            264.5
          ],
          's': 'c',
          'w': null,
          'b': 'Claude',
          'p': [
            13.6,
            1.36,
            68
          ]
        },
        {
          'm': 'Claude Sonnet 5.5',
          't': '',
          'u': 0.9245061428571434,
          'q': [
            33,
            61.8,
            286.9,
            424
          ],
          's': 'c',
          'w': null,
          'b': 'Claude',
          'p': [
            13.6,
            0.68,
            68
          ]
        },
        {
          'm': 'Claude Opus 4.8',
          't': '[Fast]',
          'u': 6.413104285714287,
          'q': [
            6.7,
            12,
            41.4,
            52.9
          ],
          's': 'c',
          'w': null,
          'b': 'Claude',
          'p': [
            68,
            6.8,
            340
          ]
        },
        {
          'm': 'Claude Fable 5',
          't': '',
          'u': 6.413104285714287,
          'q': [
            6.7,
            12,
            41.4,
            52.9
          ],
          's': 'c',
          'w': null,
          'b': 'Claude',
          'p': [
            68,
            6.8,
            340
          ]
        },
        {
          'm': 'Claude Fable 5.1',
          't': '',
          'u': 3.7272439285714305,
          'q': [
            6.5,
            12.5,
            71.2,
            121.8
          ],
          's': 'c',
          'w': null,
          'b': 'Claude',
          'p': [
            68,
            1.7,
            340
          ]
        },
        {
          'm': 'Gemini-3.8-Flash',
          't': '',
          'u': 0.4809828214285714,
          'q': [
            89.2,
            159.6,
            551.4,
            705.2
          ],
          's': 'c',
          'w': null,
          'b': 'Gemini',
          'p': [
            5.1,
            0.51,
            25.5
          ]
        },
        {
          'm': 'MAI-Code-1.1-Flash',
          't': '',
          'u': 0.13205065714285716,
          'q': [
            333.1,
            593.8,
            2008.3,
            2547.9
          ],
          's': 'c',
          'w': null,
          'b': 'Microsoft',
          'p': [
            1.36,
            0.136,
            8.16
          ]
        },
        {
          'm': 'Grok-4.5',
          't': '[≤200K]',
          'u': 2.2811935714285716,
          'q': [
            34.2,
            54.5,
            116.3,
            129.3
          ],
          's': 'c',
          'w': null,
          'b': 'Grok',
          'p': [
            13.6,
            3.4,
            40.8
          ]
        },
        {
          'm': 'Grok-4.5',
          't': '[>200K]',
          'u': 4.562387142857143,
          'q': [
            17.1,
            27.2,
            58.1,
            64.6
          ],
          's': 'c',
          'w': null,
          'b': 'Grok',
          'p': [
            27.2,
            6.8,
            81.6
          ]
        },
        {
          'm': 'Grok-4.6',
          't': '[≤200K]',
          'u': 2.2811935714285716,
          'q': [
            34.2,
            54.5,
            116.3,
            129.3
          ],
          's': 'c',
          'w': null,
          'b': 'Grok',
          'p': [
            13.6,
            3.4,
            40.8
          ]
        },
        {
          'm': 'Grok-4.6',
          't': '[>200K]',
          'u': 4.562387142857143,
          'q': [
            17.1,
            27.2,
            58.1,
            64.6
          ],
          's': 'c',
          'w': null,
          'b': 'Grok',
          'p': [
            27.2,
            6.8,
            81.6
          ]
        },
        {
          'm': 'Grok-4.7',
          't': '[≤200K]',
          'u': 2.2811935714285716,
          'q': [
            34.2,
            54.5,
            116.3,
            129.3
          ],
          's': 'c',
          'w': null,
          'b': 'Grok',
          'p': [
            13.6,
            3.4,
            40.8
          ]
        },
        {
          'm': 'Grok-4.7',
          't': '[>200K]',
          'u': 4.562387142857143,
          'q': [
            17.1,
            27.2,
            58.1,
            64.6
          ],
          's': 'c',
          'w': null,
          'b': 'Grok',
          'p': [
            27.2,
            6.8,
            81.6
          ]
        },
        {
          'm': 'Kimi-K3',
          't': '',
          'u': 1.9239312857142856,
          'q': [
            22.3,
            39.9,
            137.8,
            176.3
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': [
            20.4,
            2.04,
            102
          ]
        },
        {
          'm': 'Gemini 4 Argon',
          't': '',
          'u': 0.9245061428571434,
          'q': [
            33,
            61.8,
            286.9,
            424
          ],
          's': 'c',
          'w': null,
          'b': 'Gemini',
          'p': [
            13.6,
            0.68,
            68
          ]
        },
        {
          'm': 'GPT-6.1-Terra',
          't': '[≤272K]',
          'u': 0.4622530714285717,
          'q': [
            66.1,
            123.7,
            573.7,
            847.9
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            6.8,
            0.34,
            34
          ]
        },
        {
          'm': 'GPT-6.1-Terra',
          't': '[>272K]',
          'u': 0.8771490000000002,
          'q': [
            33.2,
            62.4,
            302.3,
            459.2
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            13.6,
            0.68,
            51
          ]
        },
        {
          'm': 'Gemini 4 Hydrogen',
          't': '',
          'u': 0.6933796071428574,
          'q': [
            44.1,
            82.5,
            382.5,
            565.3
          ],
          's': 'c',
          'w': null,
          'b': 'Gemini',
          'p': [
            10.2,
            0.51,
            51
          ]
        },
        {
          'm': 'Gemini 4 Carbon',
          't': '',
          'u': 0.9245061428571434,
          'q': [
            33,
            61.8,
            286.9,
            424
          ],
          's': 'c',
          'w': null,
          'b': 'Gemini',
          'p': [
            13.6,
            0.68,
            68
          ]
        },
        {
          'm': 'Claude Fable 5.2',
          't': '',
          'u': 2.9817951428571434,
          'q': [
            8.2,
            15.7,
            88.9,
            152.3
          ],
          's': 'c',
          'w': null,
          'b': 'Claude',
          'p': [
            54.4,
            1.36,
            272
          ]
        },
        {
          'm': 'GPT-6.2-Astra',
          't': '[≤272K]',
          'u': 3.6980245714285735,
          'q': [
            8.3,
            15.5,
            71.7,
            106
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            54.4,
            2.72,
            272
          ]
        },
        {
          'm': 'GPT-6.2-Astra',
          't': '[>272K]',
          'u': 7.017192000000001,
          'q': [
            4.1,
            7.8,
            37.8,
            57.4
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            108.8,
            5.44,
            408
          ]
        },
        {
          'm': 'GPT-6.2-Sol',
          't': '[≤272K]',
          'u': 0.9245061428571434,
          'q': [
            33,
            61.8,
            286.9,
            424
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            13.6,
            0.68,
            68
          ]
        },
        {
          'm': 'GPT-6.2-Sol',
          't': '[>272K]',
          'u': 1.7542980000000004,
          'q': [
            16.6,
            31.2,
            151.2,
            229.6
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            27.2,
            1.36,
            102
          ]
        },
        {
          'm': 'MAI Code 2',
          't': '',
          'u': 0.23112653571428585,
          'q': [
            132.2,
            247.4,
            1147.4,
            1695.9
          ],
          's': 'c',
          'w': null,
          'b': 'MAI',
          'p': [
            3.4,
            0.17,
            17
          ]
        },
        {
          'm': 'MAI Code 2 Flash',
          't': '',
          'u': 0.03206552142857143,
          'q': [
            1337.9,
            2394.1,
            8270.6,
            10578.6
          ],
          's': 'c',
          'w': null,
          'b': 'MAI',
          'p': [
            0.34,
            0.034,
            1.7
          ]
        },
        {
          'm': 'Gemini 4 Neon',
          't': '',
          'u': 1.3867592142857148,
          'q': [
            22,
            41.2,
            191.2,
            282.6
          ],
          's': 'c',
          'w': null,
          'b': 'Gemini',
          'p': [
            20.4,
            1.02,
            102
          ]
        }
      ]
    },
    {
      'slug': 'github-token-plan-max',
      'name': 'Max',
      'platform': 'GitHub',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'codingplan',
      'fee': 100,
      'currency': '$',
      'feeCny': 680,
      'dm': 0,
      'models': [
        {
          'm': 'GPT-5.3-Codex',
          't': '',
          'u': 1.0964362500000004,
          'q': [
            107.9,
            190.8,
            620.2,
            775.2
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            11.9,
            1.19,
            95.2
          ]
        },
        {
          'm': 'GPT-5.4-nano',
          't': '',
          'u': 0.11935700000000003,
          'q': [
            950.7,
            1693.1,
            5697.2,
            7213.6
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            1.36,
            0.136,
            8.5
          ]
        },
        {
          'm': 'GPT-5.6-Luna',
          't': '[≤200K]',
          'u': 0.11850700000000006,
          'q': [
            951.7,
            1696.5,
            5738.1,
            7279.6
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            1.36,
            0.136,
            8.16
          ]
        },
        {
          'm': 'GPT-5.6-Luna',
          't': '[>200K]',
          'u': 0.22681400000000007,
          'q': [
            478.8,
            858.5,
            2998.1,
            3851.3
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            2.72,
            0.272,
            12.24
          ]
        },
        {
          'm': 'GPT-5.6-Sol',
          't': '[≤272K]',
          'u': 2.3021400000000005,
          'q': [
            47.8,
            85.5,
            295.4,
            377.8
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            27.2,
            2.72,
            136
          ]
        },
        {
          'm': 'GPT-5.6-Sol',
          't': '[>272K]',
          'u': 4.434280000000001,
          'q': [
            24,
            43.2,
            153.4,
            198.3
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            54.4,
            5.44,
            204
          ]
        },
        {
          'm': 'GPT-6-Astra',
          't': '[≤272K]',
          'u': 5.755350000000001,
          'q': [
            19.1,
            34.2,
            118.2,
            151.1
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            68,
            6.8,
            340
          ]
        },
        {
          'm': 'GPT-6-Astra',
          't': '[>272K]',
          'u': 11.085700000000001,
          'q': [
            9.6,
            17.3,
            61.3,
            79.3
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            136,
            13.6,
            510
          ]
        },
        {
          'm': 'GPT-6-Luna',
          't': '[≤272K]',
          'u': 0.057553500000000014,
          'q': [
            1911.3,
            3420.2,
            11815.1,
            15112.3
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            0.68,
            0.068,
            3.4
          ]
        },
        {
          'm': 'GPT-6-Luna',
          't': '[>272K]',
          'u': 0.11085700000000002,
          'q': [
            960.6,
            1727.3,
            6134,
            7933
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            1.36,
            0.136,
            5.1
          ]
        },
        {
          'm': 'GPT-6-Sol',
          't': '[≤272K]',
          'u': 1.1510700000000003,
          'q': [
            95.6,
            171,
            590.8,
            755.6
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            13.6,
            1.36,
            68
          ]
        },
        {
          'm': 'GPT-6-Sol',
          't': '[>272K]',
          'u': 2.2171400000000006,
          'q': [
            48,
            86.4,
            306.7,
            396.7
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            27.2,
            2.72,
            102
          ]
        },
        {
          'm': 'GPT-6.1-Sol',
          't': '[≤272K]',
          'u': 0.8296850000000003,
          'q': [
            94.4,
            176.7,
            819.6,
            1211.3
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            13.6,
            0.68,
            68
          ]
        },
        {
          'm': 'GPT-6.1-Sol',
          't': '[>272K]',
          'u': 1.5743700000000005,
          'q': [
            47.4,
            89.2,
            431.9,
            656
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            27.2,
            1.36,
            102
          ]
        },
        {
          'm': 'Claude Haiku 4.5',
          't': '',
          'u': 0.5755350000000001,
          'q': [
            191.1,
            342,
            1181.5,
            1511.2
          ],
          's': 'c',
          'w': null,
          'b': 'Claude',
          'p': [
            6.8,
            0.68,
            34
          ]
        },
        {
          'm': 'Claude Haiku 5.5',
          't': '[≤100K]',
          'u': 0.057553500000000014,
          'q': [
            1911.3,
            3420.2,
            11815.1,
            15112.3
          ],
          's': 'c',
          'w': null,
          'b': 'Claude',
          'p': [
            0.68,
            0.068,
            3.4
          ]
        },
        {
          'm': 'Claude Haiku 5.5',
          't': '[>100K]',
          'u': 0.28776750000000006,
          'q': [
            382.3,
            684,
            2363,
            3022.5
          ],
          's': 'c',
          'w': null,
          'b': 'Claude',
          'p': [
            3.4,
            0.34,
            17
          ]
        },
        {
          'm': 'Claude Opus 5.5',
          't': '',
          'u': 1.6593700000000007,
          'q': [
            47.2,
            88.4,
            409.8,
            605.7
          ],
          's': 'c',
          'w': null,
          'b': 'Claude',
          'p': [
            27.2,
            1.36,
            136
          ]
        },
        {
          'm': 'Claude Sonnet 5',
          't': '',
          'u': 1.1510700000000003,
          'q': [
            95.6,
            171,
            590.8,
            755.6
          ],
          's': 'c',
          'w': null,
          'b': 'Claude',
          'p': [
            13.6,
            1.36,
            68
          ]
        },
        {
          'm': 'Claude Sonnet 5.5',
          't': '',
          'u': 0.8296850000000003,
          'q': [
            94.4,
            176.7,
            819.6,
            1211.3
          ],
          's': 'c',
          'w': null,
          'b': 'Claude',
          'p': [
            13.6,
            0.68,
            68
          ]
        },
        {
          'm': 'Claude Opus 4.8',
          't': '[Fast]',
          'u': 5.755350000000001,
          'q': [
            19.1,
            34.2,
            118.2,
            151.1
          ],
          's': 'c',
          'w': null,
          'b': 'Claude',
          'p': [
            68,
            6.8,
            340
          ]
        },
        {
          'm': 'Claude Fable 5',
          't': '',
          'u': 5.755350000000001,
          'q': [
            19.1,
            34.2,
            118.2,
            151.1
          ],
          's': 'c',
          'w': null,
          'b': 'Claude',
          'p': [
            68,
            6.8,
            340
          ]
        },
        {
          'm': 'Claude Fable 5.1',
          't': '',
          'u': 3.3449625000000016,
          'q': [
            18.7,
            35.8,
            203.3,
            348.1
          ],
          's': 'c',
          'w': null,
          'b': 'Claude',
          'p': [
            68,
            1.7,
            340
          ]
        },
        {
          'm': 'Gemini-3.8-Flash',
          't': '',
          'u': 0.43165125000000004,
          'q': [
            254.8,
            456,
            1575.3,
            2015
          ],
          's': 'c',
          'w': null,
          'b': 'Gemini',
          'p': [
            5.1,
            0.51,
            25.5
          ]
        },
        {
          'm': 'MAI-Code-1.1-Flash',
          't': '',
          'u': 0.11850700000000006,
          'q': [
            951.7,
            1696.5,
            5738.1,
            7279.6
          ],
          's': 'c',
          'w': null,
          'b': 'Microsoft',
          'p': [
            1.36,
            0.136,
            8.16
          ]
        },
        {
          'm': 'Grok-4.5',
          't': '[≤200K]',
          'u': 2.0472249999999996,
          'q': [
            97.8,
            155.6,
            332.2,
            369.4
          ],
          's': 'c',
          'w': null,
          'b': 'Grok',
          'p': [
            13.6,
            3.4,
            40.8
          ]
        },
        {
          'm': 'Grok-4.5',
          't': '[>200K]',
          'u': 4.094449999999999,
          'q': [
            48.9,
            77.8,
            166.1,
            184.7
          ],
          's': 'c',
          'w': null,
          'b': 'Grok',
          'p': [
            27.2,
            6.8,
            81.6
          ]
        },
        {
          'm': 'Grok-4.6',
          't': '[≤200K]',
          'u': 2.0472249999999996,
          'q': [
            97.8,
            155.6,
            332.2,
            369.4
          ],
          's': 'c',
          'w': null,
          'b': 'Grok',
          'p': [
            13.6,
            3.4,
            40.8
          ]
        },
        {
          'm': 'Grok-4.6',
          't': '[>200K]',
          'u': 4.094449999999999,
          'q': [
            48.9,
            77.8,
            166.1,
            184.7
          ],
          's': 'c',
          'w': null,
          'b': 'Grok',
          'p': [
            27.2,
            6.8,
            81.6
          ]
        },
        {
          'm': 'Grok-4.7',
          't': '[≤200K]',
          'u': 2.0472249999999996,
          'q': [
            97.8,
            155.6,
            332.2,
            369.4
          ],
          's': 'c',
          'w': null,
          'b': 'Grok',
          'p': [
            13.6,
            3.4,
            40.8
          ]
        },
        {
          'm': 'Grok-4.7',
          't': '[>200K]',
          'u': 4.094449999999999,
          'q': [
            48.9,
            77.8,
            166.1,
            184.7
          ],
          's': 'c',
          'w': null,
          'b': 'Grok',
          'p': [
            27.2,
            6.8,
            81.6
          ]
        },
        {
          'm': 'Kimi-K3',
          't': '',
          'u': 1.7266050000000002,
          'q': [
            63.7,
            114,
            393.8,
            503.7
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': [
            20.4,
            2.04,
            102
          ]
        },
        {
          'm': 'Gemini 4 Argon',
          't': '',
          'u': 0.8296850000000003,
          'q': [
            94.4,
            176.7,
            819.6,
            1211.3
          ],
          's': 'c',
          'w': null,
          'b': 'Gemini',
          'p': [
            13.6,
            0.68,
            68
          ]
        },
        {
          'm': 'GPT-6.1-Terra',
          't': '[≤272K]',
          'u': 0.41484250000000017,
          'q': [
            188.8,
            353.4,
            1639.2,
            2422.7
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            6.8,
            0.34,
            34
          ]
        },
        {
          'm': 'GPT-6.1-Terra',
          't': '[>272K]',
          'u': 0.7871850000000002,
          'q': [
            94.8,
            178.4,
            863.8,
            1312
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            13.6,
            0.68,
            51
          ]
        },
        {
          'm': 'Gemini 4 Hydrogen',
          't': '',
          'u': 0.6222637500000001,
          'q': [
            125.9,
            235.6,
            1092.8,
            1615.1
          ],
          's': 'c',
          'w': null,
          'b': 'Gemini',
          'p': [
            10.2,
            0.51,
            51
          ]
        },
        {
          'm': 'Gemini 4 Carbon',
          't': '',
          'u': 0.8296850000000003,
          'q': [
            94.4,
            176.7,
            819.6,
            1211.3
          ],
          's': 'c',
          'w': null,
          'b': 'Gemini',
          'p': [
            13.6,
            0.68,
            68
          ]
        },
        {
          'm': 'Claude Fable 5.2',
          't': '',
          'u': 2.675970000000001,
          'q': [
            23.4,
            44.7,
            254.1,
            435.1
          ],
          's': 'c',
          'w': null,
          'b': 'Claude',
          'p': [
            54.4,
            1.36,
            272
          ]
        },
        {
          'm': 'GPT-6.2-Astra',
          't': '[≤272K]',
          'u': 3.3187400000000014,
          'q': [
            23.6,
            44.2,
            204.9,
            302.8
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            54.4,
            2.72,
            272
          ]
        },
        {
          'm': 'GPT-6.2-Astra',
          't': '[>272K]',
          'u': 6.297480000000002,
          'q': [
            11.8,
            22.3,
            108,
            164
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            108.8,
            5.44,
            408
          ]
        },
        {
          'm': 'GPT-6.2-Sol',
          't': '[≤272K]',
          'u': 0.8296850000000003,
          'q': [
            94.4,
            176.7,
            819.6,
            1211.3
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            13.6,
            0.68,
            68
          ]
        },
        {
          'm': 'GPT-6.2-Sol',
          't': '[>272K]',
          'u': 1.5743700000000005,
          'q': [
            47.4,
            89.2,
            431.9,
            656
          ],
          's': 'c',
          'w': null,
          'b': 'ChatGPT',
          'p': [
            27.2,
            1.36,
            102
          ]
        },
        {
          'm': 'MAI Code 2',
          't': '',
          'u': 0.20742125000000008,
          'q': [
            377.7,
            706.8,
            3278.4,
            4845.4
          ],
          's': 'c',
          'w': null,
          'b': 'MAI',
          'p': [
            3.4,
            0.17,
            17
          ]
        },
        {
          'm': 'MAI Code 2 Flash',
          't': '',
          'u': 0.028776750000000007,
          'q': [
            3822.5,
            6840.3,
            23630.2,
            30224.7
          ],
          's': 'c',
          'w': null,
          'b': 'MAI',
          'p': [
            0.34,
            0.034,
            1.7
          ]
        },
        {
          'm': 'Gemini 4 Neon',
          't': '',
          'u': 1.2445275000000002,
          'q': [
            62.9,
            117.8,
            546.4,
            807.6
          ],
          's': 'c',
          'w': null,
          'b': 'Gemini',
          'p': [
            20.4,
            1.02,
            102
          ]
        }
      ]
    },
    {
      'slug': 'chaosuan-coding-plan-lite',
      'name': 'Lite',
      'platform': '超算',
      'status': 'restricted',
      'billing': 'subscription',
      'origin': 'codingplan',
      'fee': 20,
      'currency': '¥',
      'feeCny': 20,
      'dm': 1,
      'models': [
        {
          'm': 'MiniMax-M2.5',
          't': '',
          'u': 0.009259259259259259,
          'q': [
            null,
            null,
            2160,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'MiniMax',
          'p': null
        },
        {
          'm': 'Qwen-3-235B-A22B',
          't': '',
          'u': 0.009259259259259259,
          'q': [
            null,
            null,
            2160,
            null
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': null
        }
      ]
    },
    {
      'slug': 'chaosuan-coding-plan-pro',
      'name': 'Pro',
      'platform': '超算',
      'status': 'restricted',
      'billing': 'subscription',
      'origin': 'codingplan',
      'fee': 100,
      'currency': '¥',
      'feeCny': 100,
      'dm': 1,
      'models': [
        {
          'm': 'MiniMax-M2.5',
          't': '',
          'u': 0.009259259259259259,
          'q': [
            null,
            null,
            10800,
            null
          ],
          's': 'c',
          'w': null,
          'b': 'MiniMax',
          'p': null
        },
        {
          'm': 'Qwen-3-235B-A22B',
          't': '',
          'u': 0.009259259259259259,
          'q': [
            null,
            null,
            10800,
            null
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': null
        }
      ]
    },
    {
      'slug': 'tencent-cloud-hy-lite',
      'name': 'Lite',
      'platform': '腾讯云 · Hy',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'codingplan',
      'fee': 28,
      'currency': '¥',
      'feeCny': 28,
      'dm': 1,
      'models': [
        {
          'm': 'Hy4',
          't': '',
          'u': 0.16801875000000005,
          'q': [
            17.7,
            33.5,
            166.6,
            257.8
          ],
          's': 'c',
          'w': null,
          'b': '腾讯混元',
          'p': null
        },
        {
          'm': 'Hy4-preview',
          't': '',
          'u': 0.47262375000000023,
          'q': [
            5.5,
            10.6,
            59.2,
            100.2
          ],
          's': 'c',
          'w': null,
          'b': '腾讯混元',
          'p': null
        },
        {
          'm': 'Hy3',
          't': '[固定版本202608]',
          'u': 0.23690000000000003,
          'q': [
            45.2,
            66.9,
            118.2,
            126.8
          ],
          's': 'c',
          'w': null,
          'b': '腾讯混元',
          'p': null
        },
        {
          'm': 'Hy3',
          't': '[默认路由]',
          'u': 0.8,
          'q': [
            35,
            35,
            35,
            35
          ],
          's': 'c',
          'w': null,
          'b': '腾讯混元',
          'p': null
        },
        {
          'm': 'Hy4-Flash',
          't': '',
          'u': 0.026890000000000008,
          'q': [
            105.7,
            200.5,
            1041.3,
            1660.2
          ],
          's': 'c',
          'w': null,
          'b': '腾讯混元',
          'p': null
        }
      ]
    },
    {
      'slug': 'tencent-cloud-hy-standard',
      'name': 'Standard',
      'platform': '腾讯云 · Hy',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'codingplan',
      'fee': 78,
      'currency': '¥',
      'feeCny': 78,
      'dm': 1,
      'models': [
        {
          'm': 'Hy4',
          't': '',
          'u': 0.16801875000000005,
          'q': [
            49.4,
            93.3,
            464.2,
            718.1
          ],
          's': 'c',
          'w': null,
          'b': '腾讯混元',
          'p': null
        },
        {
          'm': 'Hy4-preview',
          't': '',
          'u': 0.47262375000000023,
          'q': [
            15.4,
            29.5,
            165,
            279.1
          ],
          's': 'c',
          'w': null,
          'b': '腾讯混元',
          'p': null
        },
        {
          'm': 'Hy3',
          't': '[固定版本202608]',
          'u': 0.2369,
          'q': [
            125.8,
            186.4,
            329.3,
            353.3
          ],
          's': 'c',
          'w': null,
          'b': '腾讯混元',
          'p': null
        },
        {
          'm': 'Hy3',
          't': '[默认路由]',
          'u': 0.78,
          'q': [
            100,
            100,
            100,
            100
          ],
          's': 'c',
          'w': null,
          'b': '腾讯混元',
          'p': null
        },
        {
          'm': 'Hy4-Flash',
          't': '',
          'u': 0.026890000000000008,
          'q': [
            294.4,
            558.5,
            2900.7,
            4625
          ],
          's': 'c',
          'w': null,
          'b': '腾讯混元',
          'p': null
        }
      ]
    },
    {
      'slug': 'tencent-cloud-hy-pro',
      'name': 'Pro',
      'platform': '腾讯云 · Hy',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'codingplan',
      'fee': 238,
      'currency': '¥',
      'feeCny': 238,
      'dm': 1,
      'models': [
        {
          'm': 'Hy4',
          't': '',
          'u': 0.16801875000000008,
          'q': [
            150.8,
            284.6,
            1416.5,
            2191
          ],
          's': 'c',
          'w': null,
          'b': '腾讯混元',
          'p': null
        },
        {
          'm': 'Hy4-preview',
          't': '',
          'u': 0.47262375000000023,
          'q': [
            47,
            90,
            503.6,
            851.6
          ],
          's': 'c',
          'w': null,
          'b': '腾讯混元',
          'p': null
        },
        {
          'm': 'Hy3',
          't': '[固定版本202608]',
          'u': 0.2369,
          'q': [
            383.9,
            568.9,
            1004.6,
            1078
          ],
          's': 'c',
          'w': null,
          'b': '腾讯混元',
          'p': null
        },
        {
          'm': 'Hy3',
          't': '[默认路由]',
          'u': 0.74375,
          'q': [
            320,
            320,
            320,
            320
          ],
          's': 'c',
          'w': null,
          'b': '腾讯混元',
          'p': null
        },
        {
          'm': 'Hy4-Flash',
          't': '',
          'u': 0.026890000000000008,
          'q': [
            898.2,
            1704,
            8850.9,
            14112.1
          ],
          's': 'c',
          'w': null,
          'b': '腾讯混元',
          'p': null
        }
      ]
    },
    {
      'slug': 'tencent-cloud-hy-max',
      'name': 'Max',
      'platform': '腾讯云 · Hy',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'codingplan',
      'fee': 468,
      'currency': '¥',
      'feeCny': 468,
      'dm': 1,
      'models': [
        {
          'm': 'Hy4',
          't': '',
          'u': 0.16801875000000008,
          'q': [
            296.5,
            559.7,
            2785.4,
            4308.4
          ],
          's': 'c',
          'w': null,
          'b': '腾讯混元',
          'p': null
        },
        {
          'm': 'Hy4-preview',
          't': '',
          'u': 0.47262375000000023,
          'q': [
            92.5,
            176.9,
            990.2,
            1674.5
          ],
          's': 'c',
          'w': null,
          'b': '腾讯混元',
          'p': null
        },
        {
          'm': 'Hy3',
          't': '[固定版本202608]',
          'u': 0.2369,
          'q': [
            754.9,
            1118.7,
            1975.5,
            2119.8
          ],
          's': 'c',
          'w': null,
          'b': '腾讯混元',
          'p': null
        },
        {
          'm': 'Hy3',
          't': '[默认路由]',
          'u': 0.72,
          'q': [
            650,
            650,
            650,
            650
          ],
          's': 'c',
          'w': null,
          'b': '腾讯混元',
          'p': null
        },
        {
          'm': 'Hy4-Flash',
          't': '',
          'u': 0.026890000000000008,
          'q': [
            1766.1,
            3350.7,
            17404.2,
            27749.8
          ],
          's': 'c',
          'w': null,
          'b': '腾讯混元',
          'p': null
        }
      ]
    },
    {
      'slug': 'ctyun-token-3000',
      'name': '3000积分',
      'platform': '天翼云 · 积分制',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'codingplan',
      'fee': 29,
      'currency': '¥',
      'feeCny': 29,
      'dm': 1,
      'models': [
        {
          'm': 'DeepSeek-V4-Pro-0813',
          't': '',
          'u': 8.787996367204288,
          'q': [
            3.3,
            3.3,
            3.3,
            3.3
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4-Flash-0731',
          't': '',
          'u': 2.9292929292929295,
          'q': [
            9.9,
            9.9,
            9.9,
            9.9
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'GLM-5.2',
          't': '',
          'u': 7.83005415499533,
          'q': [
            3.7,
            3.7,
            3.7,
            3.7
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'GLM-5.1',
          't': '[≤32K]',
          'u': 5.885753304974497,
          'q': [
            4.9,
            4.9,
            4.9,
            4.9
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'GLM-5.1',
          't': '[32K<输入≤200K]',
          'u': 7.83005415499533,
          'q': [
            3.7,
            3.7,
            3.7,
            3.7
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'Kimi-K2.6',
          't': '',
          'u': 6.3844234351386495,
          'q': [
            4.5,
            4.5,
            4.5,
            4.5
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': null
        },
        {
          'm': 'MiniMax-M3',
          't': '[≤512K]',
          'u': 2.0604258503065234,
          'q': [
            14.1,
            14.1,
            14.1,
            14.1
          ],
          's': 'c',
          'w': null,
          'b': 'MiniMax',
          'p': null
        },
        {
          'm': 'MiniMax-M3',
          't': '[>512K]',
          'u': 4.120851700613047,
          'q': [
            7,
            7,
            7,
            7
          ],
          's': 'c',
          'w': null,
          'b': 'MiniMax',
          'p': null
        }
      ]
    },
    {
      'slug': 'ctyun-token-10000',
      'name': '10000积分',
      'platform': '天翼云 · 积分制',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'codingplan',
      'fee': 89,
      'currency': '¥',
      'feeCny': 89,
      'dm': 1,
      'models': [
        {
          'm': 'DeepSeek-V4-Pro-0813',
          't': '',
          'u': 8.091017344977741,
          'q': [
            11,
            11,
            11,
            11
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4-Flash-0731',
          't': '',
          'u': 2.6969696969696977,
          'q': [
            33,
            33,
            33,
            33
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'GLM-5.2',
          't': '',
          'u': 7.209049859943977,
          'q': [
            12.3,
            12.3,
            12.3,
            12.3
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'GLM-5.1',
          't': '[≤32K]',
          'u': 5.418952180786864,
          'q': [
            16.4,
            16.4,
            16.4,
            16.4
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'GLM-5.1',
          't': '[32K<输入≤200K]',
          'u': 7.209049859943977,
          'q': [
            12.3,
            12.3,
            12.3,
            12.3
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'Kimi-K2.6',
          't': '',
          'u': 5.878072610972481,
          'q': [
            15.1,
            15.1,
            15.1,
            15.1
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': null
        },
        {
          'm': 'MiniMax-M3',
          't': '[≤512K]',
          'u': 1.8970127656270404,
          'q': [
            46.9,
            46.9,
            46.9,
            46.9
          ],
          's': 'c',
          'w': null,
          'b': 'MiniMax',
          'p': null
        },
        {
          'm': 'MiniMax-M3',
          't': '[>512K]',
          'u': 3.7940255312540807,
          'q': [
            23.5,
            23.5,
            23.5,
            23.5
          ],
          's': 'c',
          'w': null,
          'b': 'MiniMax',
          'p': null
        }
      ]
    },
    {
      'slug': 'ctyun-token-25000',
      'name': '25000积分',
      'platform': '天翼云 · 积分制',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'codingplan',
      'fee': 199,
      'currency': '¥',
      'feeCny': 199,
      'dm': 1,
      'models': [
        {
          'm': 'DeepSeek-V4-Pro-0813',
          't': '',
          'u': 7.236460456856496,
          'q': [
            27.5,
            27.5,
            27.5,
            27.5
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4-Flash-0731',
          't': '',
          'u': 2.4121212121212126,
          'q': [
            82.5,
            82.5,
            82.5,
            82.5
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'GLM-5.2',
          't': '',
          'u': 6.447644593837535,
          'q': [
            30.9,
            30.9,
            30.9,
            30.9
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'GLM-5.1',
          't': '[≤32K]',
          'u': 4.846613411130723,
          'q': [
            41.1,
            41.1,
            41.1,
            41.1
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'GLM-5.1',
          't': '[32K<输入≤200K]',
          'u': 6.447644593837535,
          'q': [
            30.9,
            30.9,
            30.9,
            30.9
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'Kimi-K2.6',
          't': '',
          'u': 5.25724247003831,
          'q': [
            37.9,
            37.9,
            37.9,
            37.9
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': null
        },
        {
          'm': 'MiniMax-M3',
          't': '[≤512K]',
          'u': 1.6966541139765439,
          'q': [
            117.3,
            117.3,
            117.3,
            117.3
          ],
          's': 'c',
          'w': null,
          'b': 'MiniMax',
          'p': null
        },
        {
          'm': 'MiniMax-M3',
          't': '[>512K]',
          'u': 3.3933082279530877,
          'q': [
            58.6,
            58.6,
            58.6,
            58.6
          ],
          's': 'c',
          'w': null,
          'b': 'MiniMax',
          'p': null
        }
      ]
    },
    {
      'slug': 'ctyun-token-50000',
      'name': '50000积分',
      'platform': '天翼云 · 积分制',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'codingplan',
      'fee': 399,
      'currency': '¥',
      'feeCny': 399,
      'dm': 1,
      'models': [
        {
          'm': 'DeepSeek-V4-Pro-0813',
          't': '',
          'u': 7.254642518305884,
          'q': [
            55,
            55,
            55,
            55
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4-Flash-0731',
          't': '',
          'u': 2.4181818181818184,
          'q': [
            165,
            165,
            165,
            165
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'GLM-5.2',
          't': '',
          'u': 6.4638447058823525,
          'q': [
            61.7,
            61.7,
            61.7,
            61.7
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'GLM-5.1',
          't': '[≤32K]',
          'u': 4.858790831761705,
          'q': [
            82.1,
            82.1,
            82.1,
            82.1
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'GLM-5.1',
          't': '[32K<输入≤200K]',
          'u': 6.4638447058823525,
          'q': [
            61.7,
            61.7,
            61.7,
            61.7
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'Kimi-K2.6',
          't': '',
          'u': 5.27045162197308,
          'q': [
            75.7,
            75.7,
            75.7,
            75.7
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': null
        },
        {
          'm': 'MiniMax-M3',
          't': '[≤512K]',
          'u': 1.7009170640116609,
          'q': [
            234.6,
            234.6,
            234.6,
            234.6
          ],
          's': 'c',
          'w': null,
          'b': 'MiniMax',
          'p': null
        },
        {
          'm': 'MiniMax-M3',
          't': '[>512K]',
          'u': 3.4018341280233217,
          'q': [
            117.3,
            117.3,
            117.3,
            117.3
          ],
          's': 'c',
          'w': null,
          'b': 'MiniMax',
          'p': null
        }
      ]
    },
    {
      'slug': 'ctyun-token-100000',
      'name': '100000积分',
      'platform': '天翼云 · 积分制',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'codingplan',
      'fee': 699,
      'currency': '¥',
      'feeCny': 699,
      'dm': 1,
      'models': [
        {
          'm': 'DeepSeek-V4-Pro-0813',
          't': '',
          'u': 6.354630476561169,
          'q': [
            110,
            110,
            110,
            110
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4-Flash-0731',
          't': '',
          'u': 2.1181818181818186,
          'q': [
            330,
            330,
            330,
            330
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'GLM-5.2',
          't': '',
          'u': 5.6619391596638655,
          'q': [
            123.5,
            123.5,
            123.5,
            123.5
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'GLM-5.1',
          't': '[≤32K]',
          'u': 4.25600851052811,
          'q': [
            164.2,
            164.2,
            164.2,
            164.2
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'GLM-5.1',
          't': '[32K<输入≤200K]',
          'u': 5.6619391596638655,
          'q': [
            123.5,
            123.5,
            123.5,
            123.5
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'Kimi-K2.6',
          't': '',
          'u': 4.616598601201983,
          'q': [
            151.4,
            151.4,
            151.4,
            151.4
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': null
        },
        {
          'm': 'MiniMax-M3',
          't': '[≤512K]',
          'u': 1.489901037273372,
          'q': [
            469.2,
            469.2,
            469.2,
            469.2
          ],
          's': 'c',
          'w': null,
          'b': 'MiniMax',
          'p': null
        },
        {
          'm': 'MiniMax-M3',
          't': '[>512K]',
          'u': 2.979802074546744,
          'q': [
            234.6,
            234.6,
            234.6,
            234.6
          ],
          's': 'c',
          'w': null,
          'b': 'MiniMax',
          'p': null
        }
      ]
    },
    {
      'slug': 'jd-cloud-token-lite',
      'name': 'Lite',
      'platform': '京东云 · Token Plan',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'codingplan',
      'fee': 69,
      'currency': '¥',
      'feeCny': 69,
      'dm': 1,
      'models': [
        {
          'm': 'GLM-5.1',
          't': '[≤32K]',
          'u': 0.804,
          'q': [
            85.8,
            85.8,
            85.8,
            85.8
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'GLM-5.1',
          't': '[32K<输入≤64K]',
          'u': 1.6,
          'q': [
            43.1,
            43.1,
            43.1,
            43.1
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'GLM-5.1',
          't': '[>64K]',
          'u': 3.192,
          'q': [
            21.6,
            21.6,
            21.6,
            21.6
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'GLM-5.2',
          't': '[≤32K]',
          'u': 0.804,
          'q': [
            85.8,
            85.8,
            85.8,
            85.8
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'GLM-5.2',
          't': '[32K<输入≤64K]',
          'u': 1.6,
          'q': [
            43.1,
            43.1,
            43.1,
            43.1
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'GLM-5.2',
          't': '[>64K]',
          'u': 3.192,
          'q': [
            21.6,
            21.6,
            21.6,
            21.6
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'Kimi-K2.6',
          't': '[≤32K]',
          'u': 0.603,
          'q': [
            114.4,
            114.4,
            114.4,
            114.4
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': null
        },
        {
          'm': 'Kimi-K2.6',
          't': '[32K<输入≤64K]',
          'u': 1.2,
          'q': [
            57.5,
            57.5,
            57.5,
            57.5
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': null
        },
        {
          'm': 'Kimi-K2.6',
          't': '[>64K]',
          'u': 2.3939999999999997,
          'q': [
            28.8,
            28.8,
            28.8,
            28.8
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': null
        },
        {
          'm': 'MiniMax-M3',
          't': '[≤32K]',
          'u': 0.402,
          'q': [
            171.6,
            171.6,
            171.6,
            171.6
          ],
          's': 'c',
          'w': null,
          'b': 'MiniMax',
          'p': null
        },
        {
          'm': 'MiniMax-M3',
          't': '[32K<输入≤64K]',
          'u': 0.8,
          'q': [
            86.3,
            86.3,
            86.3,
            86.3
          ],
          's': 'c',
          'w': null,
          'b': 'MiniMax',
          'p': null
        },
        {
          'm': 'MiniMax-M3',
          't': '[>64K]',
          'u': 1.596,
          'q': [
            43.2,
            43.2,
            43.2,
            43.2
          ],
          's': 'c',
          'w': null,
          'b': 'MiniMax',
          'p': null
        },
        {
          'm': 'DeepSeek-V4-Preview',
          't': '[≤32K]',
          'u': 0.1005,
          'q': [
            686.6,
            686.6,
            686.6,
            686.6
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4-Preview',
          't': '[32K<输入≤64K]',
          'u': 0.2,
          'q': [
            345,
            345,
            345,
            345
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4-Preview',
          't': '[>64K]',
          'u': 0.399,
          'q': [
            172.9,
            172.9,
            172.9,
            172.9
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4-Pro-Preview',
          't': '[≤32K]',
          'u': 0.804,
          'q': [
            85.8,
            85.8,
            85.8,
            85.8
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4-Pro-Preview',
          't': '[32K<输入≤64K]',
          'u': 1.6,
          'q': [
            43.1,
            43.1,
            43.1,
            43.1
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4-Pro-Preview',
          't': '[>64K]',
          'u': 3.192,
          'q': [
            21.6,
            21.6,
            21.6,
            21.6
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4-Flash-0731',
          't': '[≤32K]',
          'u': 0.24239999999999998,
          'q': [
            284.7,
            284.7,
            284.7,
            284.7
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4-Flash-0731',
          't': '[32K<输入≤64K]',
          'u': 0.4812,
          'q': [
            143.4,
            143.4,
            143.4,
            143.4
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4-Flash-0731',
          't': '[>64K]',
          'u': 0.9588,
          'q': [
            72,
            72,
            72,
            72
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4-Pro-0813',
          't': '[≤32K]',
          'u': 0.48479999999999995,
          'q': [
            142.3,
            142.3,
            142.3,
            142.3
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4-Pro-0813',
          't': '[32K<输入≤64K]',
          'u': 0.9624,
          'q': [
            71.7,
            71.7,
            71.7,
            71.7
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4-Pro-0813',
          't': '[>64K]',
          'u': 1.9176,
          'q': [
            36,
            36,
            36,
            36
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        }
      ]
    },
    {
      'slug': 'jd-cloud-token-standard',
      'name': 'Standard',
      'platform': '京东云 · Token Plan',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'codingplan',
      'fee': 199,
      'currency': '¥',
      'feeCny': 199,
      'dm': 1,
      'models': [
        {
          'm': 'GLM-5.1',
          't': '[≤32K]',
          'u': 0.804,
          'q': [
            247.5,
            247.5,
            247.5,
            247.5
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'GLM-5.1',
          't': '[32K<输入≤64K]',
          'u': 1.6,
          'q': [
            124.4,
            124.4,
            124.4,
            124.4
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'GLM-5.1',
          't': '[>64K]',
          'u': 3.192,
          'q': [
            62.3,
            62.3,
            62.3,
            62.3
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'GLM-5.2',
          't': '[≤32K]',
          'u': 0.804,
          'q': [
            247.5,
            247.5,
            247.5,
            247.5
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'GLM-5.2',
          't': '[32K<输入≤64K]',
          'u': 1.6,
          'q': [
            124.4,
            124.4,
            124.4,
            124.4
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'GLM-5.2',
          't': '[>64K]',
          'u': 3.192,
          'q': [
            62.3,
            62.3,
            62.3,
            62.3
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'Kimi-K2.6',
          't': '[≤32K]',
          'u': 0.603,
          'q': [
            330,
            330,
            330,
            330
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': null
        },
        {
          'm': 'Kimi-K2.6',
          't': '[32K<输入≤64K]',
          'u': 1.2,
          'q': [
            165.8,
            165.8,
            165.8,
            165.8
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': null
        },
        {
          'm': 'Kimi-K2.6',
          't': '[>64K]',
          'u': 2.3939999999999997,
          'q': [
            83.1,
            83.1,
            83.1,
            83.1
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': null
        },
        {
          'm': 'MiniMax-M3',
          't': '[≤32K]',
          'u': 0.402,
          'q': [
            495,
            495,
            495,
            495
          ],
          's': 'c',
          'w': null,
          'b': 'MiniMax',
          'p': null
        },
        {
          'm': 'MiniMax-M3',
          't': '[32K<输入≤64K]',
          'u': 0.8,
          'q': [
            248.8,
            248.8,
            248.8,
            248.8
          ],
          's': 'c',
          'w': null,
          'b': 'MiniMax',
          'p': null
        },
        {
          'm': 'MiniMax-M3',
          't': '[>64K]',
          'u': 1.596,
          'q': [
            124.7,
            124.7,
            124.7,
            124.7
          ],
          's': 'c',
          'w': null,
          'b': 'MiniMax',
          'p': null
        },
        {
          'm': 'DeepSeek-V4-Preview',
          't': '[≤32K]',
          'u': 0.1005,
          'q': [
            1980.1,
            1980.1,
            1980.1,
            1980.1
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4-Preview',
          't': '[32K<输入≤64K]',
          'u': 0.2,
          'q': [
            995,
            995,
            995,
            995
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4-Preview',
          't': '[>64K]',
          'u': 0.399,
          'q': [
            498.7,
            498.7,
            498.7,
            498.7
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4-Pro-Preview',
          't': '[≤32K]',
          'u': 0.804,
          'q': [
            247.5,
            247.5,
            247.5,
            247.5
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4-Pro-Preview',
          't': '[32K<输入≤64K]',
          'u': 1.6,
          'q': [
            124.4,
            124.4,
            124.4,
            124.4
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4-Pro-Preview',
          't': '[>64K]',
          'u': 3.192,
          'q': [
            62.3,
            62.3,
            62.3,
            62.3
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4-Flash-0731',
          't': '[≤32K]',
          'u': 0.24239999999999998,
          'q': [
            821,
            821,
            821,
            821
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4-Flash-0731',
          't': '[32K<输入≤64K]',
          'u': 0.48119999999999996,
          'q': [
            413.5,
            413.5,
            413.5,
            413.5
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4-Flash-0731',
          't': '[>64K]',
          'u': 0.9587999999999999,
          'q': [
            207.6,
            207.6,
            207.6,
            207.6
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4-Pro-0813',
          't': '[≤32K]',
          'u': 0.48479999999999995,
          'q': [
            410.5,
            410.5,
            410.5,
            410.5
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4-Pro-0813',
          't': '[32K<输入≤64K]',
          'u': 0.9623999999999999,
          'q': [
            206.8,
            206.8,
            206.8,
            206.8
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4-Pro-0813',
          't': '[>64K]',
          'u': 1.9175999999999997,
          'q': [
            103.8,
            103.8,
            103.8,
            103.8
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        }
      ]
    },
    {
      'slug': 'jd-cloud-token-pro',
      'name': 'Pro',
      'platform': '京东云 · Token Plan',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'codingplan',
      'fee': 599,
      'currency': '¥',
      'feeCny': 599,
      'dm': 1,
      'models': [
        {
          'm': 'GLM-5.1',
          't': '[≤32K]',
          'u': 0.8039999999999999,
          'q': [
            745,
            745,
            745,
            745
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'GLM-5.1',
          't': '[32K<输入≤64K]',
          'u': 1.6,
          'q': [
            374.4,
            374.4,
            374.4,
            374.4
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'GLM-5.1',
          't': '[>64K]',
          'u': 3.192,
          'q': [
            187.7,
            187.7,
            187.7,
            187.7
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'GLM-5.2',
          't': '[≤32K]',
          'u': 0.8039999999999999,
          'q': [
            745,
            745,
            745,
            745
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'GLM-5.2',
          't': '[32K<输入≤64K]',
          'u': 1.6,
          'q': [
            374.4,
            374.4,
            374.4,
            374.4
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'GLM-5.2',
          't': '[>64K]',
          'u': 3.192,
          'q': [
            187.7,
            187.7,
            187.7,
            187.7
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'Kimi-K2.6',
          't': '[≤32K]',
          'u': 0.603,
          'q': [
            993.4,
            993.4,
            993.4,
            993.4
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': null
        },
        {
          'm': 'Kimi-K2.6',
          't': '[32K<输入≤64K]',
          'u': 1.2,
          'q': [
            499.2,
            499.2,
            499.2,
            499.2
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': null
        },
        {
          'm': 'Kimi-K2.6',
          't': '[>64K]',
          'u': 2.3939999999999997,
          'q': [
            250.2,
            250.2,
            250.2,
            250.2
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': null
        },
        {
          'm': 'MiniMax-M3',
          't': '[≤32K]',
          'u': 0.40199999999999997,
          'q': [
            1490,
            1490,
            1490,
            1490
          ],
          's': 'c',
          'w': null,
          'b': 'MiniMax',
          'p': null
        },
        {
          'm': 'MiniMax-M3',
          't': '[32K<输入≤64K]',
          'u': 0.8,
          'q': [
            748.8,
            748.8,
            748.8,
            748.8
          ],
          's': 'c',
          'w': null,
          'b': 'MiniMax',
          'p': null
        },
        {
          'm': 'MiniMax-M3',
          't': '[>64K]',
          'u': 1.596,
          'q': [
            375.3,
            375.3,
            375.3,
            375.3
          ],
          's': 'c',
          'w': null,
          'b': 'MiniMax',
          'p': null
        },
        {
          'm': 'DeepSeek-V4-Preview',
          't': '[≤32K]',
          'u': 0.10049999999999999,
          'q': [
            5960.2,
            5960.2,
            5960.2,
            5960.2
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4-Preview',
          't': '[32K<输入≤64K]',
          'u': 0.2,
          'q': [
            2995,
            2995,
            2995,
            2995
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4-Preview',
          't': '[>64K]',
          'u': 0.399,
          'q': [
            1501.3,
            1501.3,
            1501.3,
            1501.3
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4-Pro-Preview',
          't': '[≤32K]',
          'u': 0.8039999999999999,
          'q': [
            745,
            745,
            745,
            745
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4-Pro-Preview',
          't': '[32K<输入≤64K]',
          'u': 1.6,
          'q': [
            374.4,
            374.4,
            374.4,
            374.4
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4-Pro-Preview',
          't': '[>64K]',
          'u': 3.192,
          'q': [
            187.7,
            187.7,
            187.7,
            187.7
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4-Flash-0731',
          't': '[≤32K]',
          'u': 0.2424,
          'q': [
            2471.1,
            2471.1,
            2471.1,
            2471.1
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4-Flash-0731',
          't': '[32K<输入≤64K]',
          'u': 0.48119999999999996,
          'q': [
            1244.8,
            1244.8,
            1244.8,
            1244.8
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4-Flash-0731',
          't': '[>64K]',
          'u': 0.9588,
          'q': [
            624.7,
            624.7,
            624.7,
            624.7
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4-Pro-0813',
          't': '[≤32K]',
          'u': 0.4848,
          'q': [
            1235.6,
            1235.6,
            1235.6,
            1235.6
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4-Pro-0813',
          't': '[32K<输入≤64K]',
          'u': 0.9623999999999999,
          'q': [
            622.4,
            622.4,
            622.4,
            622.4
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4-Pro-0813',
          't': '[>64K]',
          'u': 1.9176,
          'q': [
            312.4,
            312.4,
            312.4,
            312.4
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        }
      ]
    },
    {
      'slug': 'jd-cloud-token-max',
      'name': 'Max',
      'platform': '京东云 · Token Plan',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'codingplan',
      'fee': 999,
      'currency': '¥',
      'feeCny': 999,
      'dm': 1,
      'models': [
        {
          'm': 'GLM-5.1',
          't': '[≤32K]',
          'u': 0.8039999999999999,
          'q': [
            1242.5,
            1242.5,
            1242.5,
            1242.5
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'GLM-5.1',
          't': '[32K<输入≤64K]',
          'u': 1.6,
          'q': [
            624.4,
            624.4,
            624.4,
            624.4
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'GLM-5.1',
          't': '[>64K]',
          'u': 3.192,
          'q': [
            313,
            313,
            313,
            313
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'GLM-5.2',
          't': '[≤32K]',
          'u': 0.8039999999999999,
          'q': [
            1242.5,
            1242.5,
            1242.5,
            1242.5
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'GLM-5.2',
          't': '[32K<输入≤64K]',
          'u': 1.6,
          'q': [
            624.4,
            624.4,
            624.4,
            624.4
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'GLM-5.2',
          't': '[>64K]',
          'u': 3.192,
          'q': [
            313,
            313,
            313,
            313
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'Kimi-K2.6',
          't': '[≤32K]',
          'u': 0.6030000000000001,
          'q': [
            1656.7,
            1656.7,
            1656.7,
            1656.7
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': null
        },
        {
          'm': 'Kimi-K2.6',
          't': '[32K<输入≤64K]',
          'u': 1.1999999999999997,
          'q': [
            832.5,
            832.5,
            832.5,
            832.5
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': null
        },
        {
          'm': 'Kimi-K2.6',
          't': '[>64K]',
          'u': 2.3939999999999997,
          'q': [
            417.3,
            417.3,
            417.3,
            417.3
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': null
        },
        {
          'm': 'MiniMax-M3',
          't': '[≤32K]',
          'u': 0.40199999999999997,
          'q': [
            2485.1,
            2485.1,
            2485.1,
            2485.1
          ],
          's': 'c',
          'w': null,
          'b': 'MiniMax',
          'p': null
        },
        {
          'm': 'MiniMax-M3',
          't': '[32K<输入≤64K]',
          'u': 0.8,
          'q': [
            1248.8,
            1248.8,
            1248.8,
            1248.8
          ],
          's': 'c',
          'w': null,
          'b': 'MiniMax',
          'p': null
        },
        {
          'm': 'MiniMax-M3',
          't': '[>64K]',
          'u': 1.596,
          'q': [
            625.9,
            625.9,
            625.9,
            625.9
          ],
          's': 'c',
          'w': null,
          'b': 'MiniMax',
          'p': null
        },
        {
          'm': 'DeepSeek-V4-Preview',
          't': '[≤32K]',
          'u': 0.10049999999999999,
          'q': [
            9940.3,
            9940.3,
            9940.3,
            9940.3
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4-Preview',
          't': '[32K<输入≤64K]',
          'u': 0.2,
          'q': [
            4995,
            4995,
            4995,
            4995
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4-Preview',
          't': '[>64K]',
          'u': 0.399,
          'q': [
            2503.8,
            2503.8,
            2503.8,
            2503.8
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4-Pro-Preview',
          't': '[≤32K]',
          'u': 0.8039999999999999,
          'q': [
            1242.5,
            1242.5,
            1242.5,
            1242.5
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4-Pro-Preview',
          't': '[32K<输入≤64K]',
          'u': 1.6,
          'q': [
            624.4,
            624.4,
            624.4,
            624.4
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4-Pro-Preview',
          't': '[>64K]',
          'u': 3.192,
          'q': [
            313,
            313,
            313,
            313
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4-Flash-0731',
          't': '[≤32K]',
          'u': 0.24239999999999998,
          'q': [
            4121.3,
            4121.3,
            4121.3,
            4121.3
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4-Flash-0731',
          't': '[32K<输入≤64K]',
          'u': 0.4812,
          'q': [
            2076.1,
            2076.1,
            2076.1,
            2076.1
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4-Flash-0731',
          't': '[>64K]',
          'u': 0.9588,
          'q': [
            1041.9,
            1041.9,
            1041.9,
            1041.9
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4-Pro-0813',
          't': '[≤32K]',
          'u': 0.48479999999999995,
          'q': [
            2060.6,
            2060.6,
            2060.6,
            2060.6
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4-Pro-0813',
          't': '[32K<输入≤64K]',
          'u': 0.9624,
          'q': [
            1038,
            1038,
            1038,
            1038
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4-Pro-0813',
          't': '[>64K]',
          'u': 1.9176,
          'q': [
            521,
            521,
            521,
            521
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        }
      ]
    },
    {
      'slug': 'chaosuan-token-basic',
      'name': '基础版',
      'platform': '超算 · Token Plan',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'codingplan',
      'fee': 30,
      'currency': '¥',
      'feeCny': 30,
      'dm': 1,
      'models': [
        {
          'm': 'DeepSeek-V4.1-Flash',
          't': '',
          'u': 0.10780387500000005,
          'q': [
            23.4,
            45.1,
            278.3,
            514.9
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4-Flash-0731',
          't': '',
          'u': 0.12388437500000003,
          'q': [
            22,
            42.2,
            242.2,
            418.4
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4-Pro-0813',
          't': '',
          'u': 0.4122656250000002,
          'q': [
            6.7,
            12.8,
            72.8,
            124.9
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'Kimi-K3',
          't': '',
          'u': 2.4664463750000003,
          'q': [
            2,
            3.5,
            12.2,
            15.6
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': null
        },
        {
          'm': 'Kimi-K2.7-Code',
          't': '',
          'u': 0.5297838750000002,
          'q': [
            6.8,
            12.7,
            56.6,
            81.8
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': null
        },
        {
          'm': 'Kimi-K2.5',
          't': '',
          'u': 0.34147325000000006,
          'q': [
            11,
            20.5,
            87.9,
            124.3
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': null
        },
        {
          'm': 'Kimi-K2.6',
          't': '',
          'u': 0.5297838750000002,
          'q': [
            6.8,
            12.7,
            56.6,
            81.8
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': null
        },
        {
          'm': 'Qwen-3.8-Max',
          't': '',
          'u': 1.5049850000000002,
          'q': [
            3.5,
            6.2,
            19.9,
            24.8
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': null
        },
        {
          'm': 'Qwen-3.8-Flash-Next',
          't': '',
          'u': 0.09904600000000002,
          'q': [
            56.4,
            98.6,
            302.9,
            371.2
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': null
        },
        {
          'm': 'GLM-5.3',
          't': '',
          'u': 1.5609831250000004,
          'q': [
            5.7,
            9,
            19.2,
            21.4
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'GLM-5.3-Flash',
          't': '',
          'u': 0.13075112500000002,
          'q': [
            77.8,
            119.3,
            229.4,
            249.9
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'GLM-5.2',
          't': '',
          'u': 0.936764,
          'q': [
            9.5,
            15.1,
            32,
            35.6
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'GLM-5',
          't': '',
          'u': 0.6053035000000002,
          'q': [
            6.6,
            12.1,
            49.6,
            68.5
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'GLM-5.1',
          't': '',
          'u': 0.7242232500000003,
          'q': [
            4.9,
            9.1,
            41.4,
            60.4
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'MiniMax-M3',
          't': '',
          'u': 0.23094537500000006,
          'q': [
            15.9,
            29.5,
            129.9,
            186.4
          ],
          's': 'c',
          'w': null,
          'b': 'MiniMax',
          'p': null
        },
        {
          'm': 'MiniMax-M2.7',
          't': '',
          'u': 0.23094537500000006,
          'q': [
            15.9,
            29.5,
            129.9,
            186.4
          ],
          's': 'c',
          'w': null,
          'b': 'MiniMax',
          'p': null
        },
        {
          'm': 'MiniMax-M2.5',
          't': '',
          'u': 0.16066925000000004,
          'q': [
            22.6,
            42.1,
            186.7,
            268.7
          ],
          's': 'c',
          'w': null,
          'b': 'MiniMax',
          'p': null
        },
        {
          'm': 'DeepSeek-V4.1-Flash-1017',
          't': '',
          'u': 0.10780387500000005,
          'q': [
            23.4,
            45.1,
            278.3,
            514.9
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        }
      ]
    },
    {
      'slug': 'chaosuan-token-standard',
      'name': '标准版',
      'platform': '超算 · Token Plan',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'codingplan',
      'fee': 130,
      'currency': '¥',
      'feeCny': 130,
      'dm': 1,
      'models': [
        {
          'm': 'DeepSeek-V4.1-Flash',
          't': '',
          'u': 0.11678753125000005,
          'q': [
            93.4,
            180.4,
            1113.1,
            2059.7
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4-Flash-0731',
          't': '',
          'u': 0.1342080729166667,
          'q': [
            88,
            168.8,
            968.6,
            1673.7
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4-Pro-0813',
          't': '',
          'u': 0.44662109375000025,
          'q': [
            26.7,
            51.1,
            291.1,
            499.5
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'Kimi-K3',
          't': '',
          'u': 2.671983572916667,
          'q': [
            7.9,
            14.1,
            48.7,
            62.2
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': null
        },
        {
          'm': 'Kimi-K2.7-Code',
          't': '',
          'u': 0.5739325312500002,
          'q': [
            27.2,
            50.7,
            226.5,
            327.3
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': null
        },
        {
          'm': 'Kimi-K2.5',
          't': '',
          'u': 0.3699293541666668,
          'q': [
            44.2,
            81.8,
            351.4,
            497
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': null
        },
        {
          'm': 'Kimi-K2.6',
          't': '',
          'u': 0.5739325312500002,
          'q': [
            27.2,
            50.7,
            226.5,
            327.3
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': null
        },
        {
          'm': 'Qwen-3.8-Max',
          't': '',
          'u': 1.6304004166666668,
          'q': [
            14.1,
            24.9,
            79.7,
            99.1
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': null
        },
        {
          'm': 'Qwen-3.8-Flash-Next',
          't': '',
          'u': 0.10729983333333336,
          'q': [
            225.6,
            394.6,
            1211.6,
            1484.9
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': null
        },
        {
          'm': 'GLM-5.3',
          't': '',
          'u': 1.6910650520833337,
          'q': [
            22.8,
            36.2,
            76.9,
            85.4
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'GLM-5.3-Flash',
          't': '',
          'u': 0.14164705208333334,
          'q': [
            311.3,
            477.3,
            917.8,
            999.8
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'GLM-5.2',
          't': '',
          'u': 1.0148276666666667,
          'q': [
            38,
            60.3,
            128.1,
            142.3
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'GLM-5',
          't': '',
          'u': 0.6557454583333335,
          'q': [
            26.2,
            48.3,
            198.2,
            273.9
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'GLM-5.1',
          't': '',
          'u': 0.7845751875000003,
          'q': [
            19.6,
            36.6,
            165.7,
            241.5
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'MiniMax-M3',
          't': '',
          'u': 0.2501908229166667,
          'q': [
            63.4,
            117.9,
            519.6,
            745.5
          ],
          's': 'c',
          'w': null,
          'b': 'MiniMax',
          'p': null
        },
        {
          'm': 'MiniMax-M2.7',
          't': '',
          'u': 0.2501908229166667,
          'q': [
            63.4,
            117.9,
            519.6,
            745.5
          ],
          's': 'c',
          'w': null,
          'b': 'MiniMax',
          'p': null
        },
        {
          'm': 'MiniMax-M2.5',
          't': '',
          'u': 0.1740583541666667,
          'q': [
            90.5,
            168.5,
            746.9,
            1074.9
          ],
          's': 'c',
          'w': null,
          'b': 'MiniMax',
          'p': null
        },
        {
          'm': 'DeepSeek-V4.1-Flash-1017',
          't': '',
          'u': 0.11678753125000005,
          'q': [
            93.4,
            180.4,
            1113.1,
            2059.7
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        }
      ]
    },
    {
      'slug': 'chaosuan-token-advanced',
      'name': '高级版',
      'platform': '超算 · Token Plan',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'codingplan',
      'fee': 310,
      'currency': '¥',
      'feeCny': 310,
      'dm': 1,
      'models': [
        {
          'm': 'DeepSeek-V4.1-Flash',
          't': '',
          'u': 0.11139733750000005,
          'q': [
            233.6,
            451,
            2782.8,
            5149.3
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4-Flash-0731',
          't': '',
          'u': 0.12801385416666672,
          'q': [
            220.1,
            422,
            2421.6,
            4184.2
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4-Pro-0813',
          't': '',
          'u': 0.4260078125000002,
          'q': [
            66.7,
            127.8,
            727.7,
            1248.7
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'Kimi-K3',
          't': '',
          'u': 2.548661254166667,
          'q': [
            19.7,
            35.2,
            121.6,
            155.6
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': null
        },
        {
          'm': 'Kimi-K2.7-Code',
          't': '',
          'u': 0.5474433375000003,
          'q': [
            68.1,
            126.8,
            566.3,
            818.2
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': null
        },
        {
          'm': 'Kimi-K2.5',
          't': '',
          'u': 0.35285569166666675,
          'q': [
            110.4,
            204.5,
            878.5,
            1242.6
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': null
        },
        {
          'm': 'Kimi-K2.6',
          't': '',
          'u': 0.5474433375000003,
          'q': [
            68.1,
            126.8,
            566.3,
            818.2
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': null
        },
        {
          'm': 'Qwen-3.8-Max',
          't': '',
          'u': 1.555151166666667,
          'q': [
            35.3,
            62.2,
            199.3,
            247.9
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': null
        },
        {
          'm': 'Qwen-3.8-Flash-Next',
          't': '',
          'u': 0.10234753333333335,
          'q': [
            563.9,
            986.4,
            3028.9,
            3712.1
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': null
        },
        {
          'm': 'GLM-5.3',
          't': '',
          'u': 1.6130158958333334,
          'q': [
            56.9,
            90.4,
            192.2,
            213.5
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'GLM-5.3-Flash',
          't': '',
          'u': 0.13510949583333334,
          'q': [
            778.3,
            1193.4,
            2294.4,
            2499.4
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'GLM-5.2',
          't': '',
          'u': 0.9679894666666669,
          'q': [
            94.9,
            150.7,
            320.3,
            355.8
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'GLM-5',
          't': '',
          'u': 0.6254802833333336,
          'q': [
            65.6,
            120.7,
            495.6,
            684.7
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'GLM-5.1',
          't': '',
          'u': 0.7483640250000003,
          'q': [
            49,
            91.4,
            414.2,
            603.6
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'MiniMax-M3',
          't': '',
          'u': 0.23864355416666674,
          'q': [
            158.5,
            294.7,
            1299,
            1863.6
          ],
          's': 'c',
          'w': null,
          'b': 'MiniMax',
          'p': null
        },
        {
          'm': 'MiniMax-M2.7',
          't': '',
          'u': 0.23864355416666674,
          'q': [
            158.5,
            294.7,
            1299,
            1863.6
          ],
          's': 'c',
          'w': null,
          'b': 'MiniMax',
          'p': null
        },
        {
          'm': 'MiniMax-M2.5',
          't': '',
          'u': 0.1660248916666667,
          'q': [
            226.4,
            421.2,
            1867.2,
            2687.3
          ],
          's': 'c',
          'w': null,
          'b': 'MiniMax',
          'p': null
        },
        {
          'm': 'DeepSeek-V4.1-Flash-1017',
          't': '',
          'u': 0.11139733750000005,
          'q': [
            233.6,
            451,
            2782.8,
            5149.3
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        }
      ]
    },
    {
      'slug': 'chaosuan-token-flagship',
      'name': '旗舰版',
      'platform': '超算 · Token Plan',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'codingplan',
      'fee': 899,
      'currency': '¥',
      'feeCny': 899,
      'dm': 1,
      'models': [
        {
          'm': 'DeepSeek-V4.1-Flash',
          't': '',
          'u': 0.10768409291666671,
          'q': [
            700.7,
            1353,
            8348.5,
            15448
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4-Flash-0731',
          't': '',
          'u': 0.12374672569444448,
          'q': [
            660.2,
            1265.9,
            7264.8,
            12552.6
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'DeepSeek-V4-Pro-0813',
          't': '',
          'u': 0.41180755208333353,
          'q': [
            200.1,
            383.4,
            2183.1,
            3746.2
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        },
        {
          'm': 'Kimi-K3',
          't': '',
          'u': 2.463705879027778,
          'q': [
            59,
            105.6,
            364.9,
            466.7
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': null
        },
        {
          'm': 'Kimi-K2.7-Code',
          't': '',
          'u': 0.5291952262500003,
          'q': [
            204.3,
            380.5,
            1698.8,
            2454.7
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': null
        },
        {
          'm': 'Kimi-K2.5',
          't': '',
          'u': 0.3410938352777778,
          'q': [
            331.2,
            613.5,
            2635.6,
            3727.8
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': null
        },
        {
          'm': 'Kimi-K2.6',
          't': '',
          'u': 0.5291952262500003,
          'q': [
            204.3,
            380.5,
            1698.8,
            2454.7
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': null
        },
        {
          'm': 'Qwen-3.8-Max',
          't': '',
          'u': 1.5033127944444447,
          'q': [
            105.8,
            186.7,
            598,
            743.6
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': null
        },
        {
          'm': 'Qwen-3.8-Flash-Next',
          't': '',
          'u': 0.0989359488888889,
          'q': [
            1691.7,
            2959.2,
            9086.7,
            11136.4
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': null
        },
        {
          'm': 'GLM-5.3',
          't': '',
          'u': 1.5592486993055554,
          'q': [
            170.8,
            271.3,
            576.6,
            640.6
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'GLM-5.3-Flash',
          't': '',
          'u': 0.13060584597222222,
          'q': [
            2335,
            3580.1,
            6883.3,
            7498.3
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'GLM-5.2',
          't': '',
          'u': 0.9357231511111113,
          'q': [
            284.7,
            452.2,
            960.8,
            1067.5
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'GLM-5',
          't': '',
          'u': 0.6046309405555558,
          'q': [
            196.7,
            362.1,
            1486.9,
            2054.1
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'GLM-5.1',
          't': '',
          'u': 0.7234185575000002,
          'q': [
            147,
            274.3,
            1242.7,
            1810.9
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'MiniMax-M3',
          't': '',
          'u': 0.23068876902777785,
          'q': [
            475.5,
            884,
            3897,
            5590.9
          ],
          's': 'c',
          'w': null,
          'b': 'MiniMax',
          'p': null
        },
        {
          'm': 'MiniMax-M2.7',
          't': '',
          'u': 0.23068876902777785,
          'q': [
            475.5,
            884,
            3897,
            5590.9
          ],
          's': 'c',
          'w': null,
          'b': 'MiniMax',
          'p': null
        },
        {
          'm': 'MiniMax-M2.5',
          't': '',
          'u': 0.16049072861111113,
          'q': [
            679.1,
            1263.5,
            5601.6,
            8062
          ],
          's': 'c',
          'w': null,
          'b': 'MiniMax',
          'p': null
        },
        {
          'm': 'DeepSeek-V4.1-Flash-1017',
          't': '',
          'u': 0.10768409291666671,
          'q': [
            700.7,
            1353,
            8348.5,
            15448
          ],
          's': 'c',
          'w': null,
          'b': 'DeepSeek',
          'p': null
        }
      ]
    },
    {
      'slug': 'iflytek-token-standard',
      'name': '标准成员',
      'platform': '讯飞 · Astron Token Plan',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'codingplan',
      'fee': 200,
      'currency': '¥',
      'feeCny': 200,
      'dm': 1,
      'models': [
        {
          'm': 'Spark-X2.5',
          't': '[峰]',
          'u': 0.67292,
          'q': [
            60.5,
            104.1,
            297.2,
            355.9
          ],
          's': 'c',
          'w': null,
          'b': '讯飞星火',
          'p': null
        },
        {
          'm': 'Spark-X2.5',
          't': '[谷]',
          'u': 0.538336,
          'q': [
            75.6,
            130.1,
            371.5,
            444.8
          ],
          's': 'c',
          'w': null,
          'b': '讯飞星火',
          'p': null
        },
        {
          'm': 'Spark-X2-Flash',
          't': '[峰]',
          'u': 0.2488,
          'q': [
            196,
            325.5,
            803.9,
            924.6
          ],
          's': 'c',
          'w': null,
          'b': '讯飞星火',
          'p': null
        },
        {
          'm': 'Spark-X2-Flash',
          't': '[谷]',
          'u': 0.19904000000000002,
          'q': [
            245,
            406.9,
            1004.8,
            1155.8
          ],
          's': 'c',
          'w': null,
          'b': '讯飞星火',
          'p': null
        },
        {
          'm': 'GLM-5.2',
          't': '[峰]',
          'u': 2.4285,
          'q': [
            24.4,
            38.8,
            82.4,
            91.5
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'GLM-5.2',
          't': '[谷]',
          'u': 1.9427999999999999,
          'q': [
            30.5,
            48.4,
            102.9,
            114.4
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'GLM-5.1',
          't': '[峰]',
          'u': 2.0504000000000002,
          'q': [
            24.3,
            40.2,
            97.5,
            111.7
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'GLM-5.1',
          't': '[谷]',
          'u': 1.6403200000000002,
          'q': [
            30.4,
            50.3,
            121.9,
            139.6
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'GLM-5',
          't': '[峰]',
          'u': 1.5428000000000004,
          'q': [
            32.4,
            53.5,
            129.6,
            148.4
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'GLM-5',
          't': '[谷]',
          'u': 1.23424,
          'q': [
            40.5,
            66.9,
            162,
            185.5
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'Kimi-K2.6',
          't': '[峰]',
          'u': 1.6872000000000003,
          'q': [
            29.8,
            49.2,
            118.5,
            135.5
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': null
        },
        {
          'm': 'Kimi-K2.6',
          't': '[谷]',
          'u': 1.34976,
          'q': [
            37.3,
            61.5,
            148.2,
            169.4
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': null
        },
        {
          'm': 'Kimi-K2.5',
          't': '[峰]',
          'u': 1.0602,
          'q': [
            48.3,
            79.3,
            188.6,
            215
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': null
        },
        {
          'm': 'Kimi-K2.5',
          't': '[谷]',
          'u': 0.8481600000000002,
          'q': [
            60.3,
            99.2,
            235.8,
            268.7
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': null
        },
        {
          'm': 'MiniMax-M2.5',
          't': '[峰]',
          'u': 0.5434800000000002,
          'q': [
            92.5,
            152.6,
            368,
            420.8
          ],
          's': 'c',
          'w': null,
          'b': 'MiniMax',
          'p': null
        },
        {
          'm': 'MiniMax-M2.5',
          't': '[谷]',
          'u': 0.43478400000000006,
          'q': [
            115.6,
            190.7,
            460,
            526
          ],
          's': 'c',
          'w': null,
          'b': 'MiniMax',
          'p': null
        },
        {
          'm': 'Qwen3.5-397B-A17B',
          't': '[峰]',
          'u': 0.32255999999999996,
          'q': [
            160.3,
            262.9,
            620,
            705.2
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': null
        },
        {
          'm': 'Qwen3.5-397B-A17B',
          't': '[谷]',
          'u': 0.258048,
          'q': [
            200.4,
            328.6,
            775,
            881.5
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': null
        },
        {
          'm': 'Qwen3.6-35B-A3B',
          't': '[峰]',
          'u': 0.25680000000000003,
          'q': [
            194.5,
            321.4,
            778.8,
            891.6
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': null
        },
        {
          'm': 'Qwen3.6-35B-A3B',
          't': '[谷]',
          'u': 0.20544000000000004,
          'q': [
            243.1,
            401.8,
            973.5,
            1114.5
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': null
        },
        {
          'm': 'Qwen3.5-35B-A3B',
          't': '[峰]',
          'u': 0.10402000000000002,
          'q': [
            484.8,
            799.5,
            1922.7,
            2197.1
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': null
        },
        {
          'm': 'Qwen3.5-35B-A3B',
          't': '[谷]',
          'u': 0.08321600000000001,
          'q': [
            606,
            999.4,
            2403.4,
            2746.3
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': null
        },
        {
          'm': 'Qwen-3-Coder-Next',
          't': '[峰]',
          'u': 0.6470000000000001,
          'q': [
            77.7,
            128.2,
            309.1,
            353.5
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': null
        },
        {
          'm': 'Qwen-3-Coder-Next',
          't': '[谷]',
          'u': 0.5176000000000002,
          'q': [
            97.1,
            160.2,
            386.4,
            441.8
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': null
        },
        {
          'm': 'GLM-4.7-Flash',
          't': '[峰]',
          'u': 0.24630000000000002,
          'q': [
            196.4,
            326.8,
            812,
            935.5
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'GLM-4.7-Flash',
          't': '[谷]',
          'u': 0.19704000000000005,
          'q': [
            245.5,
            408.5,
            1015,
            1169.3
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        }
      ]
    },
    {
      'slug': 'iflytek-token-advanced',
      'name': '高级成员',
      'platform': '讯飞 · Astron Token Plan',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'codingplan',
      'fee': 600,
      'currency': '¥',
      'feeCny': 600,
      'dm': 1,
      'models': [
        {
          'm': 'Spark-X2.5',
          't': '[峰]',
          'u': 0.6729200000000001,
          'q': [
            181.4,
            312.4,
            891.6,
            1067.6
          ],
          's': 'c',
          'w': null,
          'b': '讯飞星火',
          'p': null
        },
        {
          'm': 'Spark-X2.5',
          't': '[谷]',
          'u': 0.538336,
          'q': [
            226.8,
            390.4,
            1114.5,
            1334.5
          ],
          's': 'c',
          'w': null,
          'b': '讯飞星火',
          'p': null
        },
        {
          'm': 'Spark-X2-Flash',
          't': '[峰]',
          'u': 0.24880000000000002,
          'q': [
            587.9,
            976.6,
            2411.6,
            2773.9
          ],
          's': 'c',
          'w': null,
          'b': '讯飞星火',
          'p': null
        },
        {
          'm': 'Spark-X2-Flash',
          't': '[谷]',
          'u': 0.19904000000000005,
          'q': [
            734.9,
            1220.7,
            3014.5,
            3467.3
          ],
          's': 'c',
          'w': null,
          'b': '讯飞星火',
          'p': null
        },
        {
          'm': 'GLM-5.2',
          't': '[峰]',
          'u': 2.4285000000000005,
          'q': [
            73.2,
            116.3,
            247.1,
            274.5
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'GLM-5.2',
          't': '[谷]',
          'u': 1.9427999999999999,
          'q': [
            91.5,
            145.3,
            308.8,
            343.1
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'GLM-5.1',
          't': '[峰]',
          'u': 2.0504000000000002,
          'q': [
            73,
            120.6,
            292.6,
            335.1
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'GLM-5.1',
          't': '[谷]',
          'u': 1.6403200000000002,
          'q': [
            91.2,
            150.8,
            365.8,
            418.9
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'GLM-5',
          't': '[峰]',
          'u': 1.5428000000000002,
          'q': [
            97.2,
            160.6,
            388.9,
            445.1
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'GLM-5',
          't': '[谷]',
          'u': 1.2342400000000002,
          'q': [
            121.5,
            200.8,
            486.1,
            556.4
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'Kimi-K2.6',
          't': '[峰]',
          'u': 1.6872000000000005,
          'q': [
            89.5,
            147.7,
            355.6,
            406.5
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': null
        },
        {
          'm': 'Kimi-K2.6',
          't': '[谷]',
          'u': 1.3497600000000003,
          'q': [
            111.9,
            184.6,
            444.5,
            508.1
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': null
        },
        {
          'm': 'Kimi-K2.5',
          't': '[峰]',
          'u': 1.0602,
          'q': [
            144.8,
            238,
            565.9,
            644.9
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': null
        },
        {
          'm': 'Kimi-K2.5',
          't': '[谷]',
          'u': 0.8481600000000002,
          'q': [
            181,
            297.5,
            707.4,
            806.2
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': null
        },
        {
          'm': 'MiniMax-M2.5',
          't': '[峰]',
          'u': 0.5434800000000001,
          'q': [
            277.4,
            457.8,
            1104,
            1262.4
          ],
          's': 'c',
          'w': null,
          'b': 'MiniMax',
          'p': null
        },
        {
          'm': 'MiniMax-M2.5',
          't': '[谷]',
          'u': 0.4347840000000001,
          'q': [
            346.7,
            572.2,
            1380,
            1578
          ],
          's': 'c',
          'w': null,
          'b': 'MiniMax',
          'p': null
        },
        {
          'm': 'Qwen3.5-397B-A17B',
          't': '[峰]',
          'u': 0.32255999999999996,
          'q': [
            480.9,
            788.7,
            1860.1,
            2115.6
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': null
        },
        {
          'm': 'Qwen3.5-397B-A17B',
          't': '[谷]',
          'u': 0.25804800000000006,
          'q': [
            601.1,
            985.9,
            2325.1,
            2644.5
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': null
        },
        {
          'm': 'Qwen3.6-35B-A3B',
          't': '[峰]',
          'u': 0.25680000000000003,
          'q': [
            583.5,
            964.3,
            2336.4,
            2674.8
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': null
        },
        {
          'm': 'Qwen3.6-35B-A3B',
          't': '[谷]',
          'u': 0.20544000000000004,
          'q': [
            729.4,
            1205.4,
            2920.6,
            3343.4
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': null
        },
        {
          'm': 'Qwen3.5-35B-A3B',
          't': '[峰]',
          'u': 0.10402000000000002,
          'q': [
            1454.4,
            2398.5,
            5768.1,
            6591.2
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': null
        },
        {
          'm': 'Qwen3.5-35B-A3B',
          't': '[谷]',
          'u': 0.08321600000000001,
          'q': [
            1818.1,
            2998.1,
            7210.2,
            8239
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': null
        },
        {
          'm': 'Qwen-3-Coder-Next',
          't': '[峰]',
          'u': 0.6469999999999999,
          'q': [
            233,
            384.5,
            927.4,
            1060.4
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': null
        },
        {
          'm': 'Qwen-3-Coder-Next',
          't': '[谷]',
          'u': 0.5176000000000001,
          'q': [
            291.2,
            480.6,
            1159.2,
            1325.5
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': null
        },
        {
          'm': 'GLM-4.7-Flash',
          't': '[峰]',
          'u': 0.24630000000000005,
          'q': [
            589.3,
            980.5,
            2436.1,
            2806.4
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'GLM-4.7-Flash',
          't': '[谷]',
          'u': 0.19704,
          'q': [
            736.6,
            1225.6,
            3045.1,
            3508
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        }
      ]
    },
    {
      'slug': 'iflytek-token-premium',
      'name': '尊享成员',
      'platform': '讯飞 · Astron Token Plan',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'codingplan',
      'fee': 2000,
      'currency': '¥',
      'feeCny': 2000,
      'dm': 1,
      'models': [
        {
          'm': 'Spark-X2.5',
          't': '[峰]',
          'u': 0.6729200000000001,
          'q': [
            604.7,
            1041.2,
            2972.1,
            3558.8
          ],
          's': 'c',
          'w': null,
          'b': '讯飞星火',
          'p': null
        },
        {
          'm': 'Spark-X2.5',
          't': '[谷]',
          'u': 0.5383360000000001,
          'q': [
            755.9,
            1301.5,
            3715.2,
            4448.5
          ],
          's': 'c',
          'w': null,
          'b': '讯飞星火',
          'p': null
        },
        {
          'm': 'Spark-X2-Flash',
          't': '[峰]',
          'u': 0.24880000000000002,
          'q': [
            1959.7,
            3255.3,
            8038.6,
            9246.3
          ],
          's': 'c',
          'w': null,
          'b': '讯飞星火',
          'p': null
        },
        {
          'm': 'Spark-X2-Flash',
          't': '[谷]',
          'u': 0.19904000000000005,
          'q': [
            2449.6,
            4069.1,
            10048.2,
            11557.8
          ],
          's': 'c',
          'w': null,
          'b': '讯飞星火',
          'p': null
        },
        {
          'm': 'GLM-5.2',
          't': '[峰]',
          'u': 2.4285,
          'q': [
            244,
            387.6,
            823.6,
            915.1
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'GLM-5.2',
          't': '[谷]',
          'u': 1.9428,
          'q': [
            305,
            484.4,
            1029.4,
            1143.8
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'GLM-5.1',
          't': '[峰]',
          'u': 2.0504000000000002,
          'q': [
            243.3,
            402.1,
            975.4,
            1117
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'GLM-5.1',
          't': '[谷]',
          'u': 1.64032,
          'q': [
            304.1,
            502.6,
            1219.3,
            1396.2
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'GLM-5',
          't': '[峰]',
          'u': 1.5428000000000002,
          'q': [
            324.1,
            535.4,
            1296.3,
            1483.8
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'GLM-5',
          't': '[谷]',
          'u': 1.2342400000000002,
          'q': [
            405.1,
            669.3,
            1620.4,
            1854.7
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'Kimi-K2.6',
          't': '[峰]',
          'u': 1.6872,
          'q': [
            298.5,
            492.4,
            1185.4,
            1354.9
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': null
        },
        {
          'm': 'Kimi-K2.6',
          't': '[谷]',
          'u': 1.3497600000000003,
          'q': [
            373.1,
            615.5,
            1481.7,
            1693.6
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': null
        },
        {
          'm': 'Kimi-K2.5',
          't': '[峰]',
          'u': 1.0602,
          'q': [
            482.6,
            793.3,
            1886.4,
            2149.8
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': null
        },
        {
          'm': 'Kimi-K2.5',
          't': '[谷]',
          'u': 0.8481600000000004,
          'q': [
            603.2,
            991.6,
            2358,
            2687.2
          ],
          's': 'c',
          'w': null,
          'b': 'Kimi',
          'p': null
        },
        {
          'm': 'MiniMax-M2.5',
          't': '[峰]',
          'u': 0.5434800000000002,
          'q': [
            924.5,
            1525.8,
            3680,
            4208.1
          ],
          's': 'c',
          'w': null,
          'b': 'MiniMax',
          'p': null
        },
        {
          'm': 'MiniMax-M2.5',
          't': '[谷]',
          'u': 0.4347840000000001,
          'q': [
            1155.7,
            1907.3,
            4600,
            5260.1
          ],
          's': 'c',
          'w': null,
          'b': 'MiniMax',
          'p': null
        },
        {
          'm': 'Qwen3.5-397B-A17B',
          't': '[峰]',
          'u': 0.32255999999999996,
          'q': [
            1603,
            2629,
            6200.4,
            7052
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': null
        },
        {
          'm': 'Qwen3.5-397B-A17B',
          't': '[谷]',
          'u': 0.25804800000000006,
          'q': [
            2003.8,
            3286.2,
            7750.5,
            8814.9
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': null
        },
        {
          'm': 'Qwen3.6-35B-A3B',
          't': '[峰]',
          'u': 0.25680000000000003,
          'q': [
            1945.1,
            3214.4,
            7788.2,
            8915.9
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': null
        },
        {
          'm': 'Qwen3.6-35B-A3B',
          't': '[谷]',
          'u': 0.20544000000000004,
          'q': [
            2431.4,
            4018,
            9735.2,
            11144.8
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': null
        },
        {
          'm': 'Qwen3.5-35B-A3B',
          't': '[峰]',
          'u': 0.10402000000000002,
          'q': [
            4848.2,
            7995,
            19227.1,
            21970.7
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': null
        },
        {
          'm': 'Qwen3.5-35B-A3B',
          't': '[谷]',
          'u': 0.08321600000000003,
          'q': [
            6060.2,
            9993.8,
            24033.8,
            27463.4
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': null
        },
        {
          'm': 'Qwen-3-Coder-Next',
          't': '[峰]',
          'u': 0.647,
          'q': [
            776.6,
            1281.7,
            3091.2,
            3534.8
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': null
        },
        {
          'm': 'Qwen-3-Coder-Next',
          't': '[谷]',
          'u': 0.5176000000000001,
          'q': [
            970.8,
            1602.1,
            3864,
            4418.5
          ],
          's': 'c',
          'w': null,
          'b': '通义千问',
          'p': null
        },
        {
          'm': 'GLM-4.7-Flash',
          't': '[峰]',
          'u': 0.24630000000000005,
          'q': [
            1964.2,
            3268.3,
            8120.2,
            9354.6
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        },
        {
          'm': 'GLM-4.7-Flash',
          't': '[谷]',
          'u': 0.19704000000000005,
          'q': [
            2455.3,
            4085.4,
            10150.2,
            11693.3
          ],
          's': 'c',
          'w': null,
          'b': '智谱 GLM',
          'p': null
        }
      ]
    },
    {
      'slug': 'ra-chatgpt-chatgpt-plus',
      'name': 'ChatGPT Plus',
      'platform': 'ChatGPT',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'realapi',
      'fee': 136,
      'currency': '¥',
      'feeCny': 136,
      'dm': 0,
      'models': [
        {
          'm': 'GPT 5.6 Sol',
          't': '',
          'u': 0.2478,
          'q': [
            88.8,
            158.9,
            548.8,
            702
          ],
          's': 'r',
          'w': 'measured',
          'b': 'ChatGPT',
          'p': [
            27.2,
            2.72,
            136
          ],
          'd': '2026-07-30'
        },
        {
          'm': 'GPT 5.6 Luna',
          't': '',
          'u': 0.0216,
          'q': [
            1046.6,
            1865.8,
            6310.7,
            8006.1
          ],
          's': 'r',
          'w': 'standard',
          'b': 'ChatGPT',
          'p': [
            1.36,
            0.136,
            8.16
          ],
          'd': '2026-09-08'
        },
        {
          'm': 'GPT-6 Astra',
          't': '',
          'u': 0.8553,
          'q': [
            null,
            null,
            159,
            null
          ],
          's': 'r',
          'w': 'measured',
          'b': 'ChatGPT',
          'p': null,
          'x': 1,
          'd': '2026-09-11'
        },
        {
          'm': 'GPT-6 Sol',
          't': '',
          'u': 0.1236,
          'q': [
            null,
            null,
            1100,
            null
          ],
          's': 'r',
          'w': 'standard',
          'b': 'ChatGPT',
          'p': null,
          'x': 1,
          'd': '2026-09-24'
        },
        {
          'm': 'GPT-6 Luna',
          't': '',
          'u': 0.0148,
          'q': [
            null,
            null,
            9203,
            null
          ],
          's': 'r',
          'w': 'standard',
          'b': 'ChatGPT',
          'p': null,
          'x': 1,
          'd': '2026-09-27~2026-09-28'
        },
        {
          'm': 'GPT-6.1 Sol',
          't': '',
          'u': 0.0897,
          'q': [
            null,
            null,
            1516,
            null
          ],
          's': 'r',
          'w': 'standard',
          'b': 'ChatGPT',
          'p': null,
          'x': 1,
          'd': '2026-11-09'
        },
        {
          'm': 'GPT 5.6 Terra',
          't': '',
          'u': 0.1277,
          'q': [
            176.7,
            315,
            1065.3,
            1351.6
          ],
          's': 'r',
          'w': 'measured',
          'b': 'ChatGPT',
          'p': [
            13.6,
            1.36,
            81.6
          ],
          'd': '2026-07-30'
        },
        {
          'm': 'GPT 5.5',
          't': '',
          'u': 0.3192,
          'q': [
            70.7,
            126,
            426.1,
            540.6
          ],
          's': 'r',
          'w': 'measured',
          'b': 'ChatGPT',
          'p': [
            34,
            3.4,
            204
          ],
          'd': '2026-07-30'
        }
      ]
    },
    {
      'slug': 'ra-chatgpt-chatgpt-pro-10x',
      'name': 'ChatGPT Pro 10x',
      'platform': 'ChatGPT',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'realapi',
      'fee': 680,
      'currency': '¥',
      'feeCny': 680,
      'dm': 0,
      'models': [
        {
          'm': 'GPT 5.6 Sol',
          't': '',
          'u': 0.1239,
          'q': [
            887.8,
            1588.6,
            5488,
            7019.5
          ],
          's': 'r',
          'w': 'measured',
          'b': 'ChatGPT',
          'p': [
            27.2,
            2.72,
            136
          ],
          'd': '2026-07-30~2026-10-30'
        },
        {
          'm': 'GPT 5.6 Luna',
          't': '',
          'u': 0.0108,
          'q': [
            10466.6,
            18657.9,
            63107.7,
            80062
          ],
          's': 'r',
          'w': 'standard',
          'b': 'ChatGPT',
          'p': [
            1.36,
            0.136,
            8.16
          ],
          'd': '2026-09-08~2026-10-30'
        },
        {
          'm': 'GPT 5.6 Terra',
          't': '',
          'u': 0.0638,
          'q': [
            1766.9,
            3149.6,
            10653.1,
            13515.2
          ],
          's': 'r',
          'w': 'measured',
          'b': 'ChatGPT',
          'p': [
            13.6,
            1.36,
            81.6
          ],
          'd': '2026-07-30~2026-10-30'
        },
        {
          'm': 'GPT 5.5',
          't': '',
          'u': 0.1596,
          'q': [
            706.7,
            1259.9,
            4261.3,
            5406.1
          ],
          's': 'r',
          'w': 'measured',
          'b': 'ChatGPT',
          'p': [
            34,
            3.4,
            204
          ],
          'd': '2026-07-30~2026-10-30'
        },
        {
          'm': 'GPT-6 Astra',
          't': '',
          'u': 0.3736,
          'q': [
            null,
            null,
            1820,
            null
          ],
          's': 'r',
          'w': 'measured',
          'b': 'ChatGPT',
          'p': null,
          'x': 1,
          'd': '2026-07-30~2026-10-30'
        }
      ]
    },
    {
      'slug': 'ra-chatgpt-chatgpt-pro-20x',
      'name': 'ChatGPT Pro 20x',
      'platform': 'ChatGPT',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'realapi',
      'fee': 1360,
      'currency': '¥',
      'feeCny': 1360,
      'dm': 0,
      'models': [
        {
          'm': 'GPT 5.6 Sol',
          't': '',
          'u': 0.1183,
          'q': [
            1859.4,
            3327.4,
            11494.5,
            14702.3
          ],
          's': 'r',
          'w': 'measured',
          'b': 'ChatGPT',
          'p': [
            27.2,
            2.72,
            136
          ],
          'd': '2026-06-10~2026-09-06'
        },
        {
          'm': 'GPT 5.6 Luna',
          't': '',
          'u': 0.0108,
          'q': [
            20933.4,
            37316.1,
            126216.3,
            160125.2
          ],
          's': 'r',
          'w': 'standard',
          'b': 'ChatGPT',
          'p': [
            1.36,
            0.136,
            8.16
          ],
          'd': '2026-09-08'
        },
        {
          'm': 'GPT-6 Astra',
          't': '',
          'u': 0.3568,
          'q': [
            null,
            null,
            3812,
            null
          ],
          's': 'r',
          'w': 'measured',
          'b': 'ChatGPT',
          'p': null,
          'x': 1,
          'd': '2026-09-07~2026-09-21'
        },
        {
          'm': 'GPT 5.6 Terra',
          't': '',
          'u': 0.061,
          'q': [
            3700.7,
            6596.9,
            22312.9,
            28307.4
          ],
          's': 'r',
          'w': 'measured',
          'b': 'ChatGPT',
          'p': [
            13.6,
            1.36,
            81.6
          ],
          'd': '2026-06-10~2026-09-06'
        },
        {
          'm': 'GPT 5.5',
          't': '',
          'u': 0.1524,
          'q': [
            1480.3,
            2638.7,
            8925.2,
            11323
          ],
          's': 'r',
          'w': 'measured',
          'b': 'ChatGPT',
          'p': [
            34,
            3.4,
            204
          ],
          'd': '2026-06-10~2026-09-06'
        }
      ]
    },
    {
      'slug': 'ra-devin-devin-max',
      'name': 'Devin Max',
      'platform': 'Devin',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'realapi',
      'fee': 1360,
      'currency': '¥',
      'feeCny': 1360,
      'dm': 0,
      'models': [
        {
          'm': 'GPT-6 Astra',
          't': '',
          'u': 2.5,
          'q': [
            null,
            null,
            544,
            null
          ],
          's': 'r',
          'w': 'standard',
          'b': 'ChatGPT',
          'p': null,
          'x': 1,
          'd': '2026-11-20~2026-11-21'
        },
        {
          'm': 'Claude Opus 5.5',
          't': '',
          'u': 0.8498,
          'q': [
            184.3,
            345,
            1600.3,
            2365.2
          ],
          's': 'r',
          'w': 'anthropic',
          'b': 'Claude',
          'p': [
            27.2,
            1.36,
            136
          ],
          'd': '2026-11-20~2026-11-21'
        },
        {
          'm': 'Gemini 4 Carbon',
          't': '',
          'u': 0.6693,
          'q': [
            234.1,
            438.1,
            2032,
            3003.3
          ],
          's': 'r',
          'w': 'gemini',
          'b': 'Gemini',
          'p': [
            13.6,
            0.68,
            68
          ],
          'd': '2026-11-20~2026-11-21'
        },
        {
          'm': 'Claude Sonnet 5.5',
          't': '',
          'u': 0.4248,
          'q': [
            368.8,
            690.2,
            3201.5,
            4731.7
          ],
          's': 'r',
          'w': 'anthropic',
          'b': 'Claude',
          'p': [
            13.6,
            0.68,
            68
          ],
          'd': '2026-11-20~2026-11-21'
        },
        {
          'm': 'Claude Fable 5.2',
          't': '',
          'u': 1.3825,
          'q': [
            90.4,
            173.2,
            983.7,
            1684.4
          ],
          's': 'r',
          'w': 'anthropic',
          'b': 'Claude',
          'p': [
            54.4,
            1.36,
            272
          ],
          'd': '2026-11-20~2026-11-21'
        },
        {
          'm': 'Gemini 4 Neon',
          't': '',
          'u': 1.0039,
          'q': [
            156.1,
            292.1,
            1354.7,
            2002.2
          ],
          's': 'r',
          'w': 'gemini',
          'b': 'Gemini',
          'p': [
            20.4,
            1.02,
            102
          ],
          'd': '2026-11-20~2026-11-21'
        },
        {
          'm': 'GPT-6.1 Sol',
          't': '',
          'u': 0.3349,
          'q': [
            null,
            null,
            4061,
            null
          ],
          's': 'r',
          'w': 'standard',
          'b': 'ChatGPT',
          'p': null,
          'x': 1,
          'd': '2026-11-20~2026-11-21'
        }
      ]
    },
    {
      'slug': 'ra-devin-devin-pro',
      'name': 'Devin Pro',
      'platform': 'Devin',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'realapi',
      'fee': 136,
      'currency': '¥',
      'feeCny': 136,
      'dm': 0,
      'models': [
        {
          'm': 'Claude Sonnet 5.5',
          't': '',
          'u': 0.2519,
          'q': [
            62.2,
            116.4,
            539.9,
            797.9
          ],
          's': 'r',
          'w': 'anthropic',
          'b': 'Claude',
          'p': [
            13.6,
            0.68,
            68
          ],
          'd': '2026-10-31'
        },
        {
          'm': 'Claude Haiku 5.5',
          't': '',
          'u': 0.0186,
          'q': [
            1183.1,
            2117.1,
            7313.5,
            9354.4
          ],
          's': 'r',
          'w': 'anthropic',
          'b': 'Claude',
          'p': [
            0.68,
            0.068,
            3.4
          ],
          'd': '2026-10-31'
        },
        {
          'm': 'Muse Wonder',
          't': '',
          'u': 0.6634,
          'q': [
            null,
            null,
            205,
            null
          ],
          's': 'r',
          'w': 'measured',
          'b': 'Muse',
          'p': null,
          'x': 1,
          'd': '2026-10-31'
        },
        {
          'm': 'Claude Fable 5.1',
          't': '',
          'u': 0.9315,
          'q': [
            null,
            null,
            146,
            null
          ],
          's': 'r',
          'w': 'anthropic',
          'b': 'Claude',
          'p': null,
          'x': 1,
          'd': '2026-10-31'
        },
        {
          'm': 'Claude Opus 5.5',
          't': '',
          'u': 0.5537,
          'q': [
            28.3,
            53,
            245.6,
            363
          ],
          's': 'r',
          'w': 'anthropic',
          'b': 'Claude',
          'p': [
            27.2,
            1.36,
            136
          ],
          'd': '2026-11-01'
        }
      ]
    },
    {
      'slug': 'ra-factory-droid-droid-max',
      'name': 'Droid Max',
      'platform': 'Factory Droid',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'realapi',
      'fee': 1360,
      'currency': '¥',
      'feeCny': 1360,
      'dm': 0,
      'models': [
        {
          'm': 'Claude Opus 5.5',
          't': '',
          'u': 0.6423,
          'q': [
            243.9,
            456.5,
            2117.5,
            3129.7
          ],
          's': 'r',
          'w': 'anthropic',
          'b': 'Claude',
          'p': [
            27.2,
            1.36,
            136
          ],
          'd': '2026-09-29'
        },
        {
          'm': 'Claude Fable 5.1',
          't': '',
          'u': 1.346,
          'q': [
            null,
            null,
            1010.4,
            null
          ],
          's': 'r',
          'w': 'anthropic',
          'b': 'Claude',
          'p': null,
          'x': 1,
          'd': '2026-09-29'
        },
        {
          'm': 'Claude Fable 5',
          't': '',
          'u': 1.5108,
          'q': [
            145.6,
            260.6,
            900.2,
            1151.4
          ],
          's': 'r',
          'w': 'anthropic',
          'b': 'Claude',
          'p': [
            68,
            6.8,
            340
          ],
          'd': '2026-09-29'
        },
        {
          'm': 'Claude Opus 5',
          't': '',
          'u': 0.7554,
          'q': [
            291.2,
            521.2,
            1800.3,
            2302.8
          ],
          's': 'r',
          'w': 'anthropic',
          'b': 'Claude',
          'p': [
            34,
            3.4,
            170
          ],
          'd': '2026-09-29'
        },
        {
          'm': 'Claude Opus 4.8',
          't': '',
          'u': 0.7554,
          'q': [
            291.2,
            521.2,
            1800.3,
            2302.8
          ],
          's': 'r',
          'w': 'anthropic',
          'b': 'Claude',
          'p': [
            34,
            3.4,
            170
          ],
          'd': '2026-09-29'
        },
        {
          'm': 'Claude Sonnet 5.5',
          't': '',
          'u': 0.3211,
          'q': [
            487.9,
            913.1,
            4235.1,
            6259.4
          ],
          's': 'r',
          'w': 'anthropic',
          'b': 'Claude',
          'p': [
            13.6,
            0.68,
            68
          ],
          'd': '2026-09-29'
        },
        {
          'm': 'GPT-6 Astra',
          't': '',
          'u': 1.346,
          'q': [
            null,
            null,
            1010.4,
            null
          ],
          's': 'r',
          'w': 'anthropic',
          'b': 'ChatGPT',
          'p': null,
          'x': 1,
          'd': '2026-09-29'
        },
        {
          'm': 'GPT-6 Sol',
          't': '',
          'u': 0.2692,
          'q': [
            null,
            null,
            5052,
            null
          ],
          's': 'r',
          'w': 'anthropic',
          'b': 'ChatGPT',
          'p': null,
          'x': 1,
          'd': '2026-09-29'
        },
        {
          'm': 'GPT-6 Luna',
          't': '',
          'u': 0.0135,
          'q': [
            null,
            null,
            101040,
            null
          ],
          's': 'r',
          'w': 'anthropic',
          'b': 'ChatGPT',
          'p': null,
          'x': 1,
          'd': '2026-09-29'
        },
        {
          'm': 'GPT 5.6 Sol',
          't': '',
          'u': 0.6043,
          'q': [
            364,
            651.4,
            2250.4,
            2878.5
          ],
          's': 'r',
          'w': 'anthropic',
          'b': 'ChatGPT',
          'p': [
            27.2,
            2.72,
            136
          ],
          'd': '2026-09-29'
        },
        {
          'm': 'GPT 5.6 Terra',
          't': '',
          'u': 0.3011,
          'q': [
            749.2,
            1335.5,
            4517.1,
            5730.6
          ],
          's': 'r',
          'w': 'anthropic',
          'b': 'ChatGPT',
          'p': [
            13.6,
            1.36,
            81.6
          ],
          'd': '2026-09-29'
        },
        {
          'm': 'GPT 5.6 Luna',
          't': '',
          'u': 0.0301,
          'q': [
            7491.7,
            13354.9,
            45170.8,
            57306.3
          ],
          's': 'r',
          'w': 'anthropic',
          'b': 'ChatGPT',
          'p': [
            1.36,
            0.136,
            8.16
          ],
          'd': '2026-09-29'
        },
        {
          'm': 'Gemini 3.8 Flash',
          't': '',
          'u': 0.101,
          'q': [
            null,
            null,
            13472,
            null
          ],
          's': 'r',
          'w': 'anthropic',
          'b': 'Gemini',
          'p': null,
          'x': 1,
          'd': '2026-09-29'
        },
        {
          'm': 'Gemini 3.7 Flash',
          't': '',
          'u': 0.1133,
          'q': [
            1942.4,
            3475.9,
            12007.8,
            15358.8
          ],
          's': 'r',
          'w': 'anthropic',
          'b': 'Gemini',
          'p': [
            5.1,
            0.51,
            25.5
          ],
          'd': '2026-09-29'
        },
        {
          'm': 'Grok 4.7',
          't': '',
          'u': 0.2835,
          'q': [
            1413.1,
            2247.5,
            4797.3,
            5335.3
          ],
          's': 'r',
          'w': 'anthropic',
          'b': 'Grok',
          'p': [
            13.6,
            3.4,
            40.8
          ],
          'd': '2026-09-29'
        },
        {
          'm': 'Grok 4.6',
          't': '',
          'u': 0.2835,
          'q': [
            1413.1,
            2247.5,
            4797.3,
            5335.3
          ],
          's': 'r',
          'w': 'anthropic',
          'b': 'Grok',
          'p': [
            13.6,
            3.4,
            40.8
          ],
          'd': '2026-09-29'
        },
        {
          'm': 'Inkling',
          't': '',
          'u': 0.1346,
          'q': [
            null,
            null,
            10104,
            null
          ],
          's': 'r',
          'w': 'anthropic',
          'b': 'Inkling',
          'p': null,
          'x': 1,
          'd': '2026-09-29'
        },
        {
          'm': 'Mistral Medium 3.5',
          't': '',
          'u': 0.2019,
          'q': [
            null,
            null,
            6736,
            null
          ],
          's': 'r',
          'w': 'anthropic',
          'b': 'Mistral AI',
          'p': null,
          'x': 1,
          'd': '2026-09-29'
        },
        {
          'm': 'GLM 5.3 Flash',
          't': '',
          'u': 0.0216,
          'q': [
            15669.2,
            25916.2,
            62988.3,
            72164.1
          ],
          's': 'r',
          'w': 'anthropic',
          'b': '智谱 GLM',
          'p': [
            1.02,
            0.204,
            3.4
          ],
          'd': '2026-09-29'
        },
        {
          'm': 'GLM 5.3',
          't': '',
          'u': 0.2023,
          'q': [
            1577.1,
            2640.9,
            6721.5,
            7791.6
          ],
          's': 'r',
          'w': 'anthropic',
          'b': '智谱 GLM',
          'p': [
            9.52,
            1.768,
            29.92
          ],
          'd': '2026-09-29'
        },
        {
          'm': 'GLM 5.2',
          't': '',
          'u': 0.1884,
          'q': [
            null,
            null,
            7217.1,
            null
          ],
          's': 'r',
          'w': 'anthropic',
          'b': '智谱 GLM',
          'p': null,
          'x': 1,
          'd': '2026-09-29'
        },
        {
          'm': 'GLM 5.2 Fast',
          't': '',
          'u': 0.2827,
          'q': [
            null,
            null,
            4811.4,
            null
          ],
          's': 'r',
          'w': 'anthropic',
          'b': '智谱 GLM',
          'p': null,
          'x': 1,
          'd': '2026-09-29'
        },
        {
          'm': 'Kimi K3',
          't': '',
          'u': 0.4532,
          'q': [
            485.4,
            868.6,
            3000.6,
            3838
          ],
          's': 'r',
          'w': 'anthropic',
          'b': 'Kimi',
          'p': [
            20.4,
            2.04,
            102
          ],
          'd': '2026-09-29'
        },
        {
          'm': 'Qwen3.8 Max',
          't': '',
          'u': 0.2692,
          'q': [
            null,
            null,
            5052,
            null
          ],
          's': 'r',
          'w': 'anthropic',
          'b': '通义千问',
          'p': null,
          'x': 1,
          'd': '2026-09-29'
        },
        {
          'm': 'Nemotron 3 Ultra',
          't': '',
          'u': 0.0808,
          'q': [
            null,
            null,
            16840,
            null
          ],
          's': 'r',
          'w': 'anthropic',
          'b': 'NVIDIA',
          'p': null,
          'x': 1,
          'd': '2026-09-29'
        },
        {
          'm': 'DeepSeek V4.1 Flash',
          't': '',
          'u': 0.0527,
          'q': [
            2134.7,
            4127.1,
            25794.6,
            48364.9
          ],
          's': 'r',
          'w': 'anthropic',
          'b': 'DeepSeek',
          'p': [
            2.04,
            0.0408,
            8.16
          ],
          'd': '2026-09-29'
        },
        {
          'm': 'MiniMax M3',
          't': '',
          'u': 0.0431,
          'q': [
            7930.6,
            13088.7,
            31566.7,
            36096.5
          ],
          's': 'r',
          'w': 'anthropic',
          'b': 'MiniMax',
          'p': [
            2.04,
            0.408,
            8.16
          ],
          'd': '2026-09-29'
        }
      ]
    },
    {
      'slug': 'ra-factory-droid-droid-pro',
      'name': 'Droid Pro',
      'platform': 'Factory Droid',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'realapi',
      'fee': 136,
      'currency': '¥',
      'feeCny': 136,
      'dm': 0,
      'models': [
        {
          'm': 'Claude Opus 5.5',
          't': '',
          'u': 0.7547,
          'q': [
            20.8,
            38.9,
            180.2,
            266.4
          ],
          's': 'r',
          'w': 'anthropic',
          'b': 'Claude',
          'p': [
            27.2,
            1.36,
            136
          ],
          'd': '2026-09-28'
        }
      ]
    },
    {
      'slug': 'ra-google-google-ai-pro',
      'name': 'Google AI Pro',
      'platform': 'Google',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'realapi',
      'fee': 135.93,
      'currency': '¥',
      'feeCny': 135.93,
      'dm': 0,
      'models': [
        {
          'm': 'Gemini 3.8 Flash',
          't': '',
          'u': 0.0434,
          'q': [
            null,
            null,
            3134,
            null
          ],
          's': 'r',
          'w': 'gemini',
          'b': 'Gemini',
          'p': null,
          'x': 1,
          'd': '2026-09-12~2026-09-27'
        },
        {
          'm': 'Gemini 3.6 Flash',
          't': '',
          'u': 0.0546,
          'q': [
            null,
            null,
            2489,
            null
          ],
          's': 'r',
          'w': 'lowCache',
          'b': 'Gemini',
          'p': null,
          'x': 1,
          'd': '2026-09-13~2026-09-27'
        },
        {
          'm': 'Gemini 4 Argon',
          't': '',
          'u': 1.9065,
          'q': [
            8.2,
            15.4,
            71.3,
            105.3
          ],
          's': 'r',
          'w': 'gemini',
          'b': 'Gemini',
          'p': [
            13.6,
            0.68,
            68
          ],
          'd': '2026-10-16'
        },
        {
          'm': 'Gemini 4 Neon',
          't': '',
          'u': 0.2346,
          'q': [
            66.7,
            124.9,
            579.3,
            856.1
          ],
          's': 'r',
          'w': 'gemini',
          'b': 'Gemini',
          'p': [
            20.4,
            1.02,
            102
          ],
          'd': '2026-11-20'
        }
      ]
    },
    {
      'slug': 'ra-google-google-ai-ultra-5x',
      'name': 'Google AI Ultra 5x',
      'platform': 'Google',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'realapi',
      'fee': 679.93,
      'currency': '¥',
      'feeCny': 679.93,
      'dm': 0,
      'models': [
        {
          'm': 'Gemini 3.8 Flash',
          't': '',
          'u': 0.0434,
          'q': [
            null,
            null,
            15670,
            null
          ],
          's': 'r',
          'w': 'gemini',
          'b': 'Gemini',
          'p': null,
          'x': 1,
          'd': '2026-09-12~2026-09-27'
        }
      ]
    },
    {
      'slug': 'ra-google-google-ai-ultra-20x',
      'name': 'Google AI Ultra 20x',
      'platform': 'Google',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'realapi',
      'fee': 1359.93,
      'currency': '¥',
      'feeCny': 1359.93,
      'dm': 0,
      'models': [
        {
          'm': 'Gemini 3.8 Flash',
          't': '',
          'u': 0.0217,
          'q': [
            null,
            null,
            62680,
            null
          ],
          's': 'r',
          'w': 'gemini',
          'b': 'Gemini',
          'p': null,
          'x': 1,
          'd': '2026-09-12~2026-09-27'
        },
        {
          'm': 'Gemini 4 Neon',
          't': '',
          'u': 0.1239,
          'q': [
            1264.1,
            2365.8,
            10973.3,
            16218.4
          ],
          's': 'r',
          'w': 'gemini',
          'b': 'Gemini',
          'p': [
            20.4,
            1.02,
            102
          ],
          'd': '2026-11-23~2026-11-24'
        }
      ]
    },
    {
      'slug': 'ra-claude-claude-team-premium',
      'name': 'Claude Team Premium',
      'platform': 'Claude',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'realapi',
      'fee': 850,
      'currency': '¥',
      'feeCny': 850,
      'dm': 0,
      'models': [
        {
          'm': 'Claude Opus 5.5',
          't': '',
          'u': 0.0804,
          'q': [
            1217.2,
            2278.2,
            10566.7,
            15617.5
          ],
          's': 'r',
          'w': 'anthropic',
          'b': 'Claude',
          'p': [
            27.2,
            1.36,
            136
          ],
          'd': '2026-09-30~2026-10-06'
        }
      ]
    },
    {
      'slug': 'ra-xai-grok-supergrok',
      'name': 'SuperGrok',
      'platform': 'xAI Grok',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'realapi',
      'fee': 204,
      'currency': '¥',
      'feeCny': 204,
      'dm': 0,
      'models': [
        {
          'm': 'Grok 4.6',
          't': '',
          'u': 0.4163,
          'q': [
            144.3,
            229.6,
            490,
            544.9
          ],
          's': 'r',
          'w': 'standard',
          'b': 'Grok',
          'p': [
            13.6,
            3.4,
            40.8
          ],
          'd': '2026-08-23~2026-09-20'
        },
        {
          'm': 'Grok 4.7',
          't': '',
          'u': 0.3756,
          'q': [
            160,
            254.5,
            543.2,
            604.1
          ],
          's': 'r',
          'w': 'standard',
          'b': 'Grok',
          'p': [
            13.6,
            3.4,
            40.8
          ],
          'd': '2026-09-22'
        },
        {
          'm': 'Grok 4.5',
          't': '',
          'u': 0.4316,
          'q': [
            94.8,
            163.6,
            472.7,
            568.1
          ],
          's': 'r',
          'w': 'standard',
          'b': 'Grok',
          'p': [
            13.6,
            2.04,
            40.8
          ],
          'd': '2026-08-23~2026-09-20'
        }
      ]
    },
    {
      'slug': 'ra-xai-grok-supergrok-plus',
      'name': 'SuperGrok Plus',
      'platform': 'xAI Grok',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'realapi',
      'fee': 680,
      'currency': '¥',
      'feeCny': 680,
      'dm': 0,
      'models': [
        {
          'm': 'Grok 4.6',
          't': '',
          'u': 0.3476,
          'q': [
            576.2,
            916.5,
            1956.1,
            2175.5
          ],
          's': 'r',
          'w': 'standard',
          'b': 'Grok',
          'p': [
            13.6,
            3.4,
            40.8
          ],
          'd': '2026-08-23~2026-09-20'
        },
        {
          'm': 'Grok 4.7',
          't': '',
          'u': 0.3127,
          'q': [
            640.5,
            1018.8,
            2174.5,
            2418.4
          ],
          's': 'r',
          'w': 'standard',
          'b': 'Grok',
          'p': [
            13.6,
            3.4,
            40.8
          ],
          'd': '2026-09-22'
        }
      ]
    },
    {
      'slug': 'ra-xai-grok-supergrok-heavy',
      'name': 'SuperGrok Heavy',
      'platform': 'xAI Grok',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'realapi',
      'fee': 2040,
      'currency': '¥',
      'feeCny': 2040,
      'dm': 0,
      'models': [
        {
          'm': 'Grok 4.6',
          't': '',
          'u': 0.4163,
          'q': [
            1443.3,
            2295.6,
            4899.8,
            5449.3
          ],
          's': 'r',
          'w': 'standard',
          'b': 'Grok',
          'p': [
            13.6,
            3.4,
            40.8
          ],
          'd': '2026-08-23~2026-09-20'
        },
        {
          'm': 'Grok 4.7',
          't': '',
          'u': 0.3756,
          'q': [
            1599.9,
            2544.7,
            5431.6,
            6040.7
          ],
          's': 'r',
          'w': 'standard',
          'b': 'Grok',
          'p': [
            13.6,
            3.4,
            40.8
          ],
          'd': '2026-09-22'
        },
        {
          'm': 'Grok 4.5',
          't': '',
          'u': 0.4316,
          'q': [
            947.7,
            1636.2,
            4726.8,
            5680.6
          ],
          's': 'r',
          'w': 'standard',
          'b': 'Grok',
          'p': [
            13.6,
            2.04,
            40.8
          ],
          'd': '2026-08-23~2026-09-20'
        }
      ]
    },
    {
      'slug': 'ra-xai-grok-supergrok-lite',
      'name': 'SuperGrok Lite',
      'platform': 'xAI Grok',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'realapi',
      'fee': 68,
      'currency': '¥',
      'feeCny': 68,
      'dm': 0,
      'models': [
        {
          'm': 'Grok 4.6',
          't': '',
          'u': 0.4775,
          'q': [
            42,
            66.7,
            142.4,
            158.4
          ],
          's': 'r',
          'w': 'measured',
          'b': 'Grok',
          'p': [
            13.6,
            3.4,
            40.8
          ],
          'd': '2026-07'
        }
      ]
    },
    {
      'slug': 'ra-cursor-cursor-ultra',
      'name': 'Cursor Ultra',
      'platform': 'Cursor',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'realapi',
      'fee': 1360,
      'currency': '¥',
      'feeCny': 1360,
      'dm': 0,
      'models': [
        {
          'm': 'Grok 4.6',
          't': '',
          'u': 0.1851,
          'q': [
            2164.1,
            3442.1,
            7346.9,
            8170.9
          ],
          's': 'r',
          'w': 'measured',
          'b': 'Grok',
          'p': [
            13.6,
            3.4,
            40.8
          ],
          'd': '2026-08-26~2026-09-05'
        },
        {
          'm': 'Grok 4.5',
          't': '',
          'u': 0.1919,
          'q': [
            1421,
            2453.4,
            7087.5,
            8517.6
          ],
          's': 'r',
          'w': 'measured',
          'b': 'Grok',
          'p': [
            13.6,
            2.04,
            40.8
          ],
          'd': '2026-08-26~2026-09-05'
        }
      ]
    },
    {
      'slug': 'ra-cursor-cursor-ultra-fast',
      'name': 'Cursor Ultra (Fast)',
      'platform': 'Cursor',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'realapi',
      'fee': 1360,
      'currency': '¥',
      'feeCny': 1360,
      'dm': 0,
      'models': [
        {
          'm': 'Grok 4.6',
          't': '',
          'u': 0.4659,
          'q': [
            859.8,
            1367.6,
            2919,
            3246.4
          ],
          's': 'r',
          'w': 'measured',
          'b': 'Grok',
          'p': [
            13.6,
            3.4,
            40.8
          ],
          'd': '2026-09-05'
        }
      ]
    },
    {
      'slug': 'ra-cursor-cursor-pro',
      'name': 'Cursor Pro',
      'platform': 'Cursor',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'realapi',
      'fee': 136,
      'currency': '¥',
      'feeCny': 136,
      'dm': 0,
      'models': [
        {
          'm': 'Grok 4.6',
          't': '',
          'u': 0.3047,
          'q': [
            131.5,
            209.1,
            446.3,
            496.4
          ],
          's': 'r',
          'w': 'measured',
          'b': 'Grok',
          'p': [
            13.6,
            3.4,
            40.8
          ],
          'd': '2026-08-27'
        }
      ]
    },
    {
      'slug': 'ra-cursor-cursor-pro-2',
      'name': 'Cursor Pro+',
      'platform': 'Cursor',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'realapi',
      'fee': 408,
      'currency': '¥',
      'feeCny': 408,
      'dm': 0,
      'models': [
        {
          'm': 'Grok 4.6',
          't': '',
          'u': 0.2082,
          'q': [
            577.1,
            917.9,
            1959.2,
            2178.9
          ],
          's': 'r',
          'w': 'measured',
          'b': 'Grok',
          'p': [
            13.6,
            3.4,
            40.8
          ],
          'd': '2026-08-26~2026-09-05'
        }
      ]
    },
    {
      'slug': 'ra-cursor-cursor-ultra-other-models',
      'name': 'Cursor Ultra (Other Models)',
      'platform': 'Cursor',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'realapi',
      'fee': 1360,
      'currency': '¥',
      'feeCny': 1360,
      'dm': 0,
      'models': [
        {
          'm': 'Claude Opus 5.5',
          't': '',
          'u': 1.8107,
          'q': [
            86.5,
            161.9,
            751.1,
            1110.1
          ],
          's': 'r',
          'w': 'anthropic',
          'b': 'Claude',
          'p': [
            27.2,
            1.36,
            136
          ],
          'd': '2026-09-14~2026-10-05'
        }
      ]
    },
    {
      'slug': 'ra-kimi-kimi-会员-49',
      'name': 'Kimi 会员 49',
      'platform': 'Kimi',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'realapi',
      'fee': 49.16,
      'currency': '¥',
      'feeCny': 49.16,
      'dm': 1,
      'models': [
        {
          'm': 'Kimi K2.7 Code (v1)',
          't': '',
          'u': 0.6725,
          'q': [
            18.4,
            30.4,
            73.1,
            83.6
          ],
          's': 'r',
          'w': 'measured',
          'b': 'Kimi',
          'p': [
            6.46,
            1.292,
            27.2
          ],
          'd': '2026-08-20'
        }
      ]
    },
    {
      'slug': 'ra-智谱ai-glm-coding-lite-老客-49-忙时',
      'name': 'GLM Coding Lite (老客 ¥49) 忙时',
      'platform': '智谱AI',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'realapi',
      'fee': 49.16,
      'currency': '¥',
      'feeCny': 49.16,
      'dm': 1,
      'models': [
        {
          'm': 'GLM 5.3 (v2)',
          't': '',
          'u': 0.2562,
          'q': [
            45,
            75.4,
            191.9,
            222.4
          ],
          's': 'r',
          'w': 'standard',
          'b': '智谱 GLM',
          'p': [
            9.52,
            1.768,
            29.92
          ],
          'd': '2026-09-03'
        },
        {
          'm': 'GLM 5.3 Flash (v2)',
          't': '',
          'u': 0.0843,
          'q': [
            145.2,
            240.1,
            583.5,
            668.5
          ],
          's': 'r',
          'w': 'standard',
          'b': '智谱 GLM',
          'p': [
            1.02,
            0.204,
            3.4
          ],
          'd': '2026-09-03'
        }
      ]
    },
    {
      'slug': 'ra-智谱ai-glm-coding-pro-老客-149-忙时',
      'name': 'GLM Coding Pro (老客 ¥149) 忙时',
      'platform': '智谱AI',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'realapi',
      'fee': 149.46,
      'currency': '¥',
      'feeCny': 149.46,
      'dm': 1,
      'models': [
        {
          'm': 'GLM 5.3 (v2)',
          't': '',
          'u': 0.1298,
          'q': [
            270.1,
            452.3,
            1151.1,
            1334.4
          ],
          's': 'r',
          'w': 'standard',
          'b': '智谱 GLM',
          'p': [
            9.52,
            1.768,
            29.92
          ],
          'd': '2026-09-03'
        },
        {
          'm': 'GLM 5.3 Flash (v2)',
          't': '',
          'u': 0.0427,
          'q': [
            871.4,
            1441.2,
            3502.9,
            4013.2
          ],
          's': 'r',
          'w': 'standard',
          'b': '智谱 GLM',
          'p': [
            1.02,
            0.204,
            3.4
          ],
          'd': '2026-09-03'
        }
      ]
    },
    {
      'slug': 'ra-智谱ai-glm-coding-max-老客-469-忙时',
      'name': 'GLM Coding Max (老客 ¥469) 忙时',
      'platform': '智谱AI',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'realapi',
      'fee': 470.49,
      'currency': '¥',
      'feeCny': 470.49,
      'dm': 1,
      'models': [
        {
          'm': 'GLM 5.3 (v2)',
          't': '',
          'u': 0.1752,
          'q': [
            630.2,
            1055.3,
            2685.9,
            3113.6
          ],
          's': 'r',
          'w': 'standard',
          'b': '智谱 GLM',
          'p': [
            9.52,
            1.768,
            29.92
          ],
          'd': '2026-09-03'
        },
        {
          'm': 'GLM 5.3 Flash (v2)',
          't': '',
          'u': 0.0576,
          'q': [
            2033.1,
            3362.6,
            8172.8,
            9363.3
          ],
          's': 'r',
          'w': 'standard',
          'b': '智谱 GLM',
          'p': [
            1.02,
            0.204,
            3.4
          ],
          'd': '2026-09-03'
        }
      ]
    },
    {
      'slug': 'ra-minimax-minimax-token-plan-plus',
      'name': 'MiniMax Token Plan Plus',
      'platform': 'MiniMax',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'realapi',
      'fee': 49.16,
      'currency': '¥',
      'feeCny': 49.16,
      'dm': 1,
      'models': [
        {
          'm': 'MiniMax M3',
          't': '',
          'u': 0.0874,
          'q': [
            141.3,
            233.2,
            562.4,
            643
          ],
          's': 'r',
          'w': 'measured',
          'b': 'MiniMax',
          'p': [
            2.04,
            0.408,
            8.16
          ],
          'd': '2026-06-01'
        },
        {
          'm': 'MiniMax M2.7',
          't': '',
          'u': 0.0874,
          'q': [
            141.3,
            233.2,
            562.4,
            643
          ],
          's': 'r',
          'w': 'measured',
          'b': 'MiniMax',
          'p': [
            2.04,
            0.408,
            8.16
          ],
          'd': '2026-06-01'
        }
      ]
    },
    {
      'slug': 'ra-minimax-minimax-token-plan-max',
      'name': 'MiniMax Token Plan Max',
      'platform': 'MiniMax',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'realapi',
      'fee': 119.34,
      'currency': '¥',
      'feeCny': 119.34,
      'dm': 1,
      'models': [
        {
          'm': 'MiniMax M3',
          't': '',
          'u': 0.0707,
          'q': [
            423.8,
            699.5,
            1687.1,
            1929.1
          ],
          's': 'r',
          'w': 'measured',
          'b': 'MiniMax',
          'p': [
            2.04,
            0.408,
            8.16
          ],
          'd': '2026-06-01'
        }
      ]
    },
    {
      'slug': 'ra-minimax-minimax-token-plan-ultra',
      'name': 'MiniMax Token Plan Ultra',
      'platform': 'MiniMax',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'realapi',
      'fee': 470.49,
      'currency': '¥',
      'feeCny': 470.49,
      'dm': 1,
      'models': [
        {
          'm': 'MiniMax M3',
          't': '',
          'u': 0.0707,
          'q': [
            1671.8,
            2759.2,
            6654.5,
            7609.4
          ],
          's': 'r',
          'w': 'measured',
          'b': 'MiniMax',
          'p': [
            2.04,
            0.408,
            8.16
          ],
          'd': '2026-08-19'
        }
      ]
    },
    {
      'slug': 'ra-minimax-minimax-token-plan-plus-global',
      'name': 'MiniMax Token Plan Plus (Global)',
      'platform': 'MiniMax',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'realapi',
      'fee': 149.6,
      'currency': '¥',
      'feeCny': 149.6,
      'dm': 0,
      'models': [
        {
          'm': 'MiniMax M3',
          't': '',
          'u': 0.0939,
          'q': [
            400.3,
            660.7,
            1593.3,
            1822
          ],
          's': 'r',
          'w': 'measured',
          'b': 'MiniMax',
          'p': [
            2.04,
            0.408,
            8.16
          ],
          'd': '2026-06-01'
        },
        {
          'm': 'MiniMax M2.7',
          't': '',
          'u': 0.0939,
          'q': [
            400.3,
            660.7,
            1593.3,
            1822
          ],
          's': 'r',
          'w': 'measured',
          'b': 'MiniMax',
          'p': [
            2.04,
            0.408,
            8.16
          ],
          'd': '2026-06-01'
        }
      ]
    },
    {
      'slug': 'ra-minimax-minimax-token-plan-max-global',
      'name': 'MiniMax Token Plan Max (Global)',
      'platform': 'MiniMax',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'realapi',
      'fee': 374,
      'currency': '¥',
      'feeCny': 374,
      'dm': 0,
      'models': [
        {
          'm': 'MiniMax M3',
          't': '',
          'u': 0.0782,
          'q': [
            1200.9,
            1982,
            4780,
            5465.9
          ],
          's': 'r',
          'w': 'measured',
          'b': 'MiniMax',
          'p': [
            2.04,
            0.408,
            8.16
          ],
          'd': '2026-06-01'
        }
      ]
    },
    {
      'slug': 'ra-minimax-minimax-token-plan-ultra-global',
      'name': 'MiniMax Token Plan Ultra (Global)',
      'platform': 'MiniMax',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'realapi',
      'fee': 897.6,
      'currency': '¥',
      'feeCny': 897.6,
      'dm': 0,
      'models': [
        {
          'm': 'MiniMax M3',
          't': '',
          'u': 0.0977,
          'q': [
            2307.6,
            3808.5,
            9185.1,
            10503.1
          ],
          's': 'r',
          'w': 'measured',
          'b': 'MiniMax',
          'p': [
            2.04,
            0.408,
            8.16
          ],
          'd': '2026-06-01'
        }
      ]
    },
    {
      'slug': 'ra-阿里-百炼-阿里云百炼-coding-plan-pro',
      'name': '阿里云百炼 Coding Plan Pro',
      'platform': '阿里·百炼',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'realapi',
      'fee': 200.6,
      'currency': '¥',
      'feeCny': 200.6,
      'dm': 1,
      'models': [
        {
          'm': 'Qwen3.7 Plus',
          't': '',
          'u': 1.0808,
          'q': [
            46.6,
            76.9,
            185.6,
            212.2
          ],
          's': 'r',
          'w': 'measured',
          'b': '通义千问',
          'p': [
            2.72,
            0.544,
            10.88
          ],
          'd': '2026-07~2026-08'
        }
      ]
    },
    {
      'slug': 'ra-阿里-百炼-alibaba-cloud-coding-plan-pro',
      'name': 'Alibaba Cloud Coding Plan Pro',
      'platform': '阿里·百炼',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'realapi',
      'fee': 340,
      'currency': '¥',
      'feeCny': 340,
      'dm': 0,
      'models': [
        {
          'm': 'Qwen3.7 Plus',
          't': '',
          'u': 1.8319,
          'q': [
            46.6,
            76.9,
            185.6,
            212.2
          ],
          's': 'r',
          'w': 'measured',
          'b': '通义千问',
          'p': [
            2.72,
            0.544,
            10.88
          ],
          'd': '2026-07~2026-08'
        }
      ]
    },
    {
      'slug': 'ra-阶跃星辰-step-plan-mini-49',
      'name': 'Step Plan Mini (¥49)',
      'platform': '阶跃星辰',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'realapi',
      'fee': 49.16,
      'currency': '¥',
      'feeCny': 49.16,
      'dm': 1,
      'models': [
        {
          'm': 'Step 3.5 Flash',
          't': '',
          'u': 0.2053,
          'q': [
            59.3,
            98.1,
            239.5,
            274.6
          ],
          's': 'r',
          'w': 'lowCache',
          'b': '阶跃星辰',
          'p': [
            0.7,
            0.14,
            2.1
          ],
          'd': '2026-09-10'
        },
        {
          'm': 'Step 3.7 Flash',
          't': '',
          'u': 0.4128,
          'q': [
            30.8,
            50.5,
            119.1,
            135.4
          ],
          's': 'r',
          'w': 'lowCache',
          'b': '阶跃星辰',
          'p': [
            1.35,
            0.27,
            8.1
          ],
          'd': '2026-09-10'
        },
        {
          'm': 'Step 5 Preview',
          't': '',
          'u': 1.4291,
          'q': [
            3.6,
            6.9,
            34.4,
            53.3
          ],
          's': 'r',
          'w': 'lowCache',
          'b': '阶跃星辰',
          'p': [
            7,
            0.35,
            20
          ],
          'd': '2026-09-21'
        }
      ]
    },
    {
      'slug': 'ra-阶跃星辰-step-plan-plus-99',
      'name': 'Step Plan Plus (¥99)',
      'platform': '阶跃星辰',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'realapi',
      'fee': 99.28,
      'currency': '¥',
      'feeCny': 99.28,
      'dm': 1,
      'models': [
        {
          'm': 'Step 3.5 Flash',
          't': '',
          'u': 0.1037,
          'q': [
            237.1,
            392.6,
            957.8,
            1098.4
          ],
          's': 'r',
          'w': 'lowCache',
          'b': '阶跃星辰',
          'p': [
            0.7,
            0.14,
            2.1
          ],
          'd': '2026-09-10'
        },
        {
          'm': 'Step 3.7 Flash',
          't': '',
          'u': 0.2084,
          'q': [
            123.1,
            201.9,
            476.3,
            541.7
          ],
          's': 'r',
          'w': 'lowCache',
          'b': '阶跃星辰',
          'p': [
            1.35,
            0.27,
            8.1
          ],
          'd': '2026-09-10'
        },
        {
          'm': 'Step 5 Preview',
          't': '',
          'u': 0.7226,
          'q': [
            14.5,
            27.5,
            137.4,
            213.4
          ],
          's': 'r',
          'w': 'lowCache',
          'b': '阶跃星辰',
          'p': [
            7,
            0.35,
            20
          ],
          'd': '2026-09-21'
        }
      ]
    },
    {
      'slug': 'ra-阶跃星辰-step-plan-pro-199',
      'name': 'Step Plan Pro (¥199)',
      'platform': '阶跃星辰',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'realapi',
      'fee': 199.65,
      'currency': '¥',
      'feeCny': 199.65,
      'dm': 1,
      'models': [
        {
          'm': 'Step 3.5 Flash',
          't': '',
          'u': 0.0417,
          'q': [
            1185.4,
            1962.8,
            4789.1,
            5492.1
          ],
          's': 'r',
          'w': 'lowCache',
          'b': '阶跃星辰',
          'p': [
            0.7,
            0.14,
            2.1
          ],
          'd': '2026-09-10'
        },
        {
          'm': 'Step 3.7 Flash',
          't': '',
          'u': 0.0838,
          'q': [
            615.7,
            1009.7,
            2381.4,
            2708.5
          ],
          's': 'r',
          'w': 'lowCache',
          'b': '阶跃星辰',
          'p': [
            1.35,
            0.27,
            8.1
          ],
          'd': '2026-09-10'
        },
        {
          'm': 'Step 5 Preview',
          't': '',
          'u': 0.2905,
          'q': [
            72.7,
            137.4,
            687.2,
            1066.9
          ],
          's': 'r',
          'w': 'lowCache',
          'b': '阶跃星辰',
          'p': [
            7,
            0.35,
            20
          ],
          'd': '2026-09-21'
        }
      ]
    },
    {
      'slug': 'ra-阶跃星辰-step-plan-max-699',
      'name': 'Step Plan Max (¥699)',
      'platform': '阶跃星辰',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'realapi',
      'fee': 701.22,
      'currency': '¥',
      'feeCny': 701.22,
      'dm': 1,
      'models': [
        {
          'm': 'Step 3.5 Flash',
          't': '',
          'u': 0.0293,
          'q': [
            5927.1,
            9813.8,
            23945.6,
            27460.5
          ],
          's': 'r',
          'w': 'lowCache',
          'b': '阶跃星辰',
          'p': [
            0.7,
            0.14,
            2.1
          ],
          'd': '2026-09-10'
        },
        {
          'm': 'Step 3.7 Flash',
          't': '',
          'u': 0.0589,
          'q': [
            3078.4,
            5048.6,
            11907.2,
            13542.5
          ],
          's': 'r',
          'w': 'lowCache',
          'b': '阶跃星辰',
          'p': [
            1.35,
            0.27,
            8.1
          ],
          'd': '2026-09-10'
        },
        {
          'm': 'Step 5 Preview',
          't': '',
          'u': 0.2041,
          'q': [
            363.6,
            686.8,
            3436.1,
            5334.4
          ],
          's': 'r',
          'w': 'lowCache',
          'b': '阶跃星辰',
          'p': [
            7,
            0.35,
            20
          ],
          'd': '2026-09-21'
        }
      ]
    },
    {
      'slug': 'ra-小米-mimo-mimo-token-plan-lite-日间',
      'name': 'MiMo Token Plan Lite 日间',
      'platform': '小米 MiMo',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'realapi',
      'fee': 39,
      'currency': '¥',
      'feeCny': 39,
      'dm': 1,
      'models': [
        {
          'm': 'MiMo V2.6 Pro',
          't': '',
          'u': 0.1799,
          'q': [
            13.6,
            26.8,
            216.8,
            587.6
          ],
          's': 'r',
          'w': 'standard',
          'b': '小米 MiMo',
          'p': [
            2.958,
            0.0245,
            5.916
          ],
          'd': '2026-09-22'
        },
        {
          'm': 'MiMo V2.6 Flash',
          't': '',
          'u': 0.0705,
          'q': [
            40.7,
            79.5,
            553.1,
            1176.2
          ],
          's': 'r',
          'w': 'standard',
          'b': '小米 MiMo',
          'p': [
            0.952,
            0.019,
            1.904
          ],
          'd': '2026-09-22'
        },
        {
          'm': 'MiMo V2.5 Pro',
          't': '',
          'u': 0.1314,
          'q': [
            73.4,
            121.6,
            296.7,
            340.3
          ],
          's': 'r',
          'w': 'standard',
          'b': '小米 MiMo',
          'p': [
            6.8,
            1.36,
            20.4
          ],
          'd': '2026-09-22'
        },
        {
          'm': 'MiMo V2.5',
          't': '',
          'u': 0.0517,
          'q': [
            null,
            null,
            754,
            null
          ],
          's': 'r',
          'w': 'standard',
          'b': '小米 MiMo',
          'p': null,
          'x': 1,
          'd': '2026-09-22'
        }
      ]
    },
    {
      'slug': 'ra-小米-mimo-mimo-token-plan-standard-日间',
      'name': 'MiMo Token Plan Standard 日间',
      'platform': '小米 MiMo',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'realapi',
      'fee': 99,
      'currency': '¥',
      'feeCny': 99,
      'dm': 1,
      'models': [
        {
          'm': 'MiMo V2.6 Pro',
          't': '',
          'u': 0.1701,
          'q': [
            36.4,
            71.9,
            582,
            1577.3
          ],
          's': 'r',
          'w': 'standard',
          'b': '小米 MiMo',
          'p': [
            2.958,
            0.0245,
            5.916
          ],
          'd': '2026-09-22'
        },
        {
          'm': 'MiMo V2.6 Flash',
          't': '',
          'u': 0.0667,
          'q': [
            109.2,
            213.1,
            1483.3,
            3154.2
          ],
          's': 'r',
          'w': 'standard',
          'b': '小米 MiMo',
          'p': [
            0.952,
            0.019,
            1.904
          ],
          'd': '2026-09-22'
        },
        {
          'm': 'MiMo V2.5 Pro',
          't': '',
          'u': 0.1243,
          'q': [
            197.2,
            326.4,
            796.5,
            913.5
          ],
          's': 'r',
          'w': 'standard',
          'b': '小米 MiMo',
          'p': [
            6.8,
            1.36,
            20.4
          ],
          'd': '2026-09-22'
        },
        {
          'm': 'MiMo V2.5',
          't': '',
          'u': 0.049,
          'q': [
            null,
            null,
            2022,
            null
          ],
          's': 'r',
          'w': 'standard',
          'b': '小米 MiMo',
          'p': null,
          'x': 1,
          'd': '2026-09-22'
        }
      ]
    },
    {
      'slug': 'ra-小米-mimo-mimo-token-plan-pro-日间',
      'name': 'MiMo Token Plan Pro 日间',
      'platform': '小米 MiMo',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'realapi',
      'fee': 329,
      'currency': '¥',
      'feeCny': 329,
      'dm': 1,
      'models': [
        {
          'm': 'MiMo V2.6 Pro',
          't': '',
          'u': 0.1636,
          'q': [
            125.8,
            248.2,
            2010.5,
            5449.3
          ],
          's': 'r',
          'w': 'standard',
          'b': '小米 MiMo',
          'p': [
            2.958,
            0.0245,
            5.916
          ],
          'd': '2026-09-22'
        },
        {
          'm': 'MiMo V2.6 Flash',
          't': '',
          'u': 0.0642,
          'q': [
            377.3,
            736.3,
            5124.1,
            10896.1
          ],
          's': 'r',
          'w': 'standard',
          'b': '小米 MiMo',
          'p': [
            0.952,
            0.019,
            1.904
          ],
          'd': '2026-09-22'
        },
        {
          'm': 'MiMo V2.5 Pro',
          't': '',
          'u': 0.1196,
          'q': [
            681.1,
            1127.8,
            2751.8,
            3155.8
          ],
          's': 'r',
          'w': 'standard',
          'b': '小米 MiMo',
          'p': [
            6.8,
            1.36,
            20.4
          ],
          'd': '2026-09-22'
        },
        {
          'm': 'MiMo V2.5',
          't': '',
          'u': 0.0471,
          'q': [
            null,
            null,
            6985,
            null
          ],
          's': 'r',
          'w': 'standard',
          'b': '小米 MiMo',
          'p': null,
          'x': 1,
          'd': '2026-09-22'
        }
      ]
    },
    {
      'slug': 'ra-小米-mimo-mimo-token-plan-max-日间',
      'name': 'MiMo Token Plan Max 日间',
      'platform': '小米 MiMo',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'realapi',
      'fee': 659,
      'currency': '¥',
      'feeCny': 659,
      'dm': 1,
      'models': [
        {
          'm': 'MiMo V2.6 Pro',
          't': '',
          'u': 0.1519,
          'q': [
            271.4,
            535.6,
            4338.4,
            11758.6
          ],
          's': 'r',
          'w': 'standard',
          'b': '小米 MiMo',
          'p': [
            2.958,
            0.0245,
            5.916
          ],
          'd': '2026-09-22'
        },
        {
          'm': 'MiMo V2.6 Flash',
          't': '',
          'u': 0.0596,
          'q': [
            814.2,
            1588.9,
            11058.1,
            23514.4
          ],
          's': 'r',
          'w': 'standard',
          'b': '小米 MiMo',
          'p': [
            0.952,
            0.019,
            1.904
          ],
          'd': '2026-09-22'
        },
        {
          'm': 'MiMo V2.5 Pro',
          't': '',
          'u': 0.111,
          'q': [
            1469.8,
            2433.6,
            5938,
            6809.6
          ],
          's': 'r',
          'w': 'standard',
          'b': '小米 MiMo',
          'p': [
            6.8,
            1.36,
            20.4
          ],
          'd': '2026-09-22'
        },
        {
          'm': 'MiMo V2.5',
          't': '',
          'u': 0.0437,
          'q': [
            null,
            null,
            15074,
            null
          ],
          's': 'r',
          'w': 'standard',
          'b': '小米 MiMo',
          'p': null,
          'x': 1,
          'd': '2026-09-22'
        }
      ]
    },
    {
      'slug': 'ra-阿里-百炼-阿里云百炼-token-plan-lite-39',
      'name': '阿里云百炼 Token Plan Lite (¥39)',
      'platform': '阿里·百炼',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'realapi',
      'fee': 39.1,
      'currency': '¥',
      'feeCny': 39.1,
      'dm': 1,
      'models': [
        {
          'm': 'Qwen4 Max',
          't': '',
          'u': 1.4218,
          'q': [
            2.9,
            5.5,
            27.5,
            42.5
          ],
          's': 'r',
          'w': 'standard',
          'b': '通义千问',
          'p': [
            10,
            0.5,
            30
          ],
          'd': '2026-11-16'
        },
        {
          'm': 'Qwen3.8 Max',
          't': '',
          'u': 0.3781,
          'q': [
            null,
            null,
            103.4,
            null
          ],
          's': 'r',
          'w': 'standard',
          'b': '通义千问',
          'p': null,
          'x': 1,
          'd': '2026-11-09'
        },
        {
          'm': 'Qwen3.8 Flash',
          't': '',
          'u': 0.0255,
          'q': [
            null,
            null,
            1532.6,
            null
          ],
          's': 'r',
          'w': 'standard',
          'b': '通义千问',
          'p': null,
          'x': 1,
          'd': '2026-11-09'
        },
        {
          'm': 'DeepSeek V4.1 Flash',
          't': '',
          'u': 0.0329,
          'q': [
            98.4,
            190.3,
            1189.2,
            2229.8
          ],
          's': 'r',
          'w': 'standard',
          'b': 'DeepSeek',
          'p': [
            2.04,
            0.0408,
            8.16
          ],
          'd': '2026-11-19'
        },
        {
          'm': 'GLM 5.3',
          't': '',
          'u': 0.4786,
          'q': [
            19.2,
            32.1,
            81.7,
            94.7
          ],
          's': 'r',
          'w': 'standard',
          'b': '智谱 GLM',
          'p': [
            9.52,
            1.768,
            29.92
          ],
          'd': '2026-11-09'
        }
      ]
    },
    {
      'slug': 'ra-阿里-百炼-阿里云百炼-token-plan-essential-79',
      'name': '阿里云百炼 Token Plan Essential (¥79)',
      'platform': '阿里·百炼',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'realapi',
      'fee': 79.22,
      'currency': '¥',
      'feeCny': 79.22,
      'dm': 1,
      'models': [
        {
          'm': 'Qwen4 Max',
          't': '',
          'u': 1.2819,
          'q': [
            6.6,
            12.4,
            61.8,
            95.6
          ],
          's': 'r',
          'w': 'standard',
          'b': '通义千问',
          'p': [
            10,
            0.5,
            30
          ],
          'd': '2026-11-16'
        },
        {
          'm': 'Qwen3.8 Max',
          't': '',
          'u': 0.3406,
          'q': [
            null,
            null,
            232.6,
            null
          ],
          's': 'r',
          'w': 'standard',
          'b': '通义千问',
          'p': null,
          'x': 1,
          'd': '2026-11-09'
        },
        {
          'm': 'Qwen3.8 Flash',
          't': '',
          'u': 0.023,
          'q': [
            null,
            null,
            3448.3,
            null
          ],
          's': 'r',
          'w': 'standard',
          'b': '通义千问',
          'p': null,
          'x': 1,
          'd': '2026-11-09'
        },
        {
          'm': 'DeepSeek V4.1 Flash',
          't': '',
          'u': 0.0296,
          'q': [
            221.4,
            428.1,
            2675.8,
            5017.1
          ],
          's': 'r',
          'w': 'standard',
          'b': 'DeepSeek',
          'p': [
            2.04,
            0.0408,
            8.16
          ],
          'd': '2026-11-09'
        },
        {
          'm': 'GLM 5.3',
          't': '',
          'u': 0.431,
          'q': [
            43.1,
            72.2,
            183.8,
            213.1
          ],
          's': 'r',
          'w': 'standard',
          'b': '智谱 GLM',
          'p': [
            9.52,
            1.768,
            29.92
          ],
          'd': '2026-11-09'
        }
      ]
    },
    {
      'slug': 'ra-阿里-百炼-阿里云百炼-token-plan-standard-139',
      'name': '阿里云百炼 Token Plan Standard (¥139)',
      'platform': '阿里·百炼',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'realapi',
      'fee': 139.47,
      'currency': '¥',
      'feeCny': 139.47,
      'dm': 1,
      'models': [
        {
          'm': 'Qwen4 Max',
          't': '',
          'u': 1.2702,
          'q': [
            11.7,
            22.1,
            109.8,
            169.9
          ],
          's': 'r',
          'w': 'standard',
          'b': '通义千问',
          'p': [
            10,
            0.5,
            30
          ],
          'd': '2026-11-16'
        },
        {
          'm': 'Qwen3.8 Max',
          't': '',
          'u': 0.3374,
          'q': [
            null,
            null,
            413.4,
            null
          ],
          's': 'r',
          'w': 'standard',
          'b': '通义千问',
          'p': null,
          'x': 1,
          'd': '2026-11-09'
        },
        {
          'm': 'Qwen3.8 Flash',
          't': '',
          'u': 0.0228,
          'q': [
            null,
            null,
            6130.3,
            null
          ],
          's': 'r',
          'w': 'standard',
          'b': '通义千问',
          'p': null,
          'x': 1,
          'd': '2026-11-09'
        },
        {
          'm': 'DeepSeek V4.1 Flash',
          't': '',
          'u': 0.0293,
          'q': [
            393.7,
            761.1,
            4757,
            8919.4
          ],
          's': 'r',
          'w': 'standard',
          'b': 'DeepSeek',
          'p': [
            2.04,
            0.0408,
            8.16
          ],
          'd': '2026-11-09'
        },
        {
          'm': 'GLM 5.3',
          't': '',
          'u': 0.4268,
          'q': [
            76.7,
            128.4,
            326.8,
            378.8
          ],
          's': 'r',
          'w': 'standard',
          'b': '智谱 GLM',
          'p': [
            9.52,
            1.768,
            29.92
          ],
          'd': '2026-11-09'
        }
      ]
    },
    {
      'slug': 'ra-阿里-百炼-阿里云百炼-token-plan-pro-312',
      'name': '阿里云百炼 Token Plan Pro (¥312)',
      'platform': '阿里·百炼',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'realapi',
      'fee': 313,
      'currency': '¥',
      'feeCny': 313,
      'dm': 1,
      'models': [
        {
          'm': 'Qwen4 Max',
          't': '',
          'u': 1.1398,
          'q': [
            29.2,
            55.2,
            274.6,
            424.7
          ],
          's': 'r',
          'w': 'standard',
          'b': '通义千问',
          'p': [
            10,
            0.5,
            30
          ],
          'd': '2026-11-16'
        },
        {
          'm': 'Qwen3.8 Max',
          't': '',
          'u': 0.3028,
          'q': [
            null,
            null,
            1033.6,
            null
          ],
          's': 'r',
          'w': 'standard',
          'b': '通义千问',
          'p': null,
          'x': 1,
          'd': '2026-11-09'
        },
        {
          'm': 'Qwen3.8 Flash',
          't': '',
          'u': 0.0204,
          'q': [
            null,
            null,
            15325.7,
            null
          ],
          's': 'r',
          'w': 'standard',
          'b': '通义千问',
          'p': null,
          'x': 1,
          'd': '2026-11-09'
        },
        {
          'm': 'DeepSeek V4.1 Flash',
          't': '',
          'u': 0.0263,
          'q': [
            984.2,
            1902.8,
            11892.5,
            22298.4
          ],
          's': 'r',
          'w': 'standard',
          'b': 'DeepSeek',
          'p': [
            2.04,
            0.0408,
            8.16
          ],
          'd': '2026-11-09'
        },
        {
          'm': 'GLM 5.3',
          't': '',
          'u': 0.3831,
          'q': [
            191.7,
            321,
            817,
            947
          ],
          's': 'r',
          'w': 'standard',
          'b': '智谱 GLM',
          'p': [
            9.52,
            1.768,
            29.92
          ],
          'd': '2026-11-09'
        }
      ]
    },
    {
      'slug': 'ra-minimax-minimax-m-plan-go-cn-annual',
      'name': 'MiniMax M Plan Go (CN Annual)',
      'platform': 'MiniMax',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'realapi',
      'fee': 40.94,
      'currency': '¥',
      'feeCny': 40.94,
      'dm': 1,
      'models': [
        {
          'm': 'MiniMax M3.1 Flash Preview',
          't': '',
          'u': 0.0256,
          'q': [
            null,
            null,
            1598,
            null
          ],
          's': 'r',
          'w': 'measured',
          'b': 'MiniMax',
          'p': null,
          'x': 1,
          'd': '2026-10-01'
        }
      ]
    },
    {
      'slug': 'ra-minimax-minimax-m-plan-explore-cn-annual',
      'name': 'MiniMax M Plan Explore (CN Annual)',
      'platform': 'MiniMax',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'realapi',
      'fee': 99.48,
      'currency': '¥',
      'feeCny': 99.48,
      'dm': 1,
      'models': [
        {
          'm': 'MiniMax M3.1 Flash Preview',
          't': '',
          'u': 0.0208,
          'q': [
            null,
            null,
            4794.1,
            null
          ],
          's': 'r',
          'w': 'measured',
          'b': 'MiniMax',
          'p': null,
          'x': 1,
          'd': '2026-10-01'
        }
      ]
    },
    {
      'slug': 'ra-minimax-minimax-m-plan-build-cn-annual',
      'name': 'MiniMax M Plan Build (CN Annual)',
      'platform': 'MiniMax',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'realapi',
      'fee': 392.09,
      'currency': '¥',
      'feeCny': 392.09,
      'dm': 1,
      'models': [
        {
          'm': 'MiniMax M3.1 Flash Preview',
          't': '',
          'u': 0.0204,
          'q': [
            null,
            null,
            19176.4,
            null
          ],
          's': 'r',
          'w': 'measured',
          'b': 'MiniMax',
          'p': null,
          'x': 1,
          'd': '2026-10-01'
        }
      ]
    },
    {
      'slug': 'ra-cursor-cursor-ultra-standard',
      'name': 'Cursor Ultra (Standard)',
      'platform': 'Cursor',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'realapi',
      'fee': 1360,
      'currency': '¥',
      'feeCny': 1360,
      'dm': 0,
      'models': [
        {
          'm': 'Composer 2.5',
          't': '',
          'u': 0.07,
          'q': [
            8571.4,
            12142.8,
            19428.5,
            20523.1
          ],
          's': 'r',
          'w': 'measured',
          'b': 'Cursor',
          'p': [
            3.4,
            1.36,
            17
          ],
          'd': '2026-08-26~2026-09-05'
        }
      ]
    },
    {
      'slug': 'ra-cursor-cursor-pro-standard',
      'name': 'Cursor Pro (Standard)',
      'platform': 'Cursor',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'realapi',
      'fee': 136,
      'currency': '¥',
      'feeCny': 136,
      'dm': 0,
      'models': [
        {
          'm': 'Composer 2.5',
          't': '',
          'u': 0.1152,
          'q': [
            520.7,
            737.7,
            1180.3,
            1246.8
          ],
          's': 'r',
          'w': 'measured',
          'b': 'Cursor',
          'p': [
            3.4,
            1.36,
            17
          ],
          'd': '2026-08-27'
        }
      ]
    },
    {
      'slug': 'ra-cursor-cursor-pro-standard-2',
      'name': 'Cursor Pro+ (Standard)',
      'platform': 'Cursor',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'realapi',
      'fee': 408,
      'currency': '¥',
      'feeCny': 408,
      'dm': 0,
      'models': [
        {
          'm': 'Composer 2.5',
          't': '',
          'u': 0.0787,
          'q': [
            2285.7,
            3238.1,
            5181,
            5472.8
          ],
          's': 'r',
          'w': 'measured',
          'b': 'Cursor',
          'p': [
            3.4,
            1.36,
            17
          ],
          'd': '2026-08-26~2026-09-05'
        }
      ]
    }
  ]
};
