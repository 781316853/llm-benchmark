// 数据源:Coding Plan 对比(codingplan.fyi)「额度/价格对比」快速对比,更新于 2026-09-16
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
  'updated': '2026-09-16',
  'siteUpdated': '2026.9.11',
  'refreshedAt': '2026-09-16 13:41',
  'usdToCnyRate': 6.8,
  'stats': {
    'groups': 6,
    'rows': 169,
    'points': 403
  },
  'presetTitle': '快速对比',
  'presetDesc': '固定精选常用模型与套餐，帮助快速找到值得进一步比较的选项。',
  'caliberNote': '统一口径：有具体输入、输出、缓存价格的为计算得出，其余的除了Kimi套餐没有购买到之外，均为实测数据，实测尽量构造95%缓存命中率和0.5%的输出占比。',
  'desc': 'codingplan.fyi「额度/价格对比」快速对比快照:按固定精选模型分列的套餐比价(月价 / 综合单价 / 实测月用量)。',
  'groups': [
    {
      'id': 'deepseek-v4-flash-0731',
      'title': 'DeepSeek V4 Flash 0731',
      'kind': 'single',
      'desc': '',
      'rows': [
        {
          'platform': 'Command Code',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': 'Go',
          'qualifier': '[谷]',
          'price': '¥6.8 / 月',
          'unit': '¥1.428 / 亿',
          'usage': '4.79亿',
          'featured': false
        },
        {
          'platform': 'Command Code',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': 'GOAT',
          'qualifier': '[谷]',
          'price': '¥68 / 月',
          'unit': '¥2.38 / 亿',
          'usage': '28.8亿',
          'featured': false
        },
        {
          'platform': 'Command Code',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': 'Go',
          'qualifier': '[峰]',
          'price': '¥6.8 / 月',
          'unit': '¥2.856 / 亿',
          'usage': '2.4亿',
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
          'platform': 'Command Code',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': 'Pro',
          'qualifier': '[谷]',
          'price': '¥136 / 月',
          'unit': '¥4.08 / 亿',
          'usage': '33.6亿',
          'featured': false
        },
        {
          'platform': 'Command Code',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': 'GOAT',
          'qualifier': '[峰]',
          'price': '¥68 / 月',
          'unit': '¥4.76 / 亿',
          'usage': '14.4亿',
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
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': 'Pro',
          'qualifier': '',
          'price': '¥200 / 月',
          'unit': '¥6.67 / 亿',
          'usage': '30亿',
          'featured': true
        },
        {
          'platform': 'Command Code',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': 'Pro',
          'qualifier': '[峰]',
          'price': '¥136 / 月',
          'unit': '¥8.092 / 亿',
          'usage': '16.8亿',
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
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': 'Max',
          'qualifier': '',
          'price': '¥1,000 / 月',
          'unit': '¥10 / 亿',
          'usage': '100亿',
          'featured': false
        },
        {
          'platform': '阿里·百炼 Token Plan',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': 'Pro',
          'qualifier': '[谷]',
          'price': '¥499 / 月',
          'unit': '¥11.87 / 亿',
          'usage': '42亿',
          'featured': true
        },
        {
          'platform': '阿里·百炼 Token Plan',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': 'Standard',
          'qualifier': '[谷]',
          'price': '¥139 / 月',
          'unit': '¥13.23 / 亿',
          'usage': '10.5亿',
          'featured': true
        },
        {
          'platform': '阿里·百炼 Token Plan',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': 'Lite',
          'qualifier': '[谷]',
          'price': '¥39 / 月',
          'unit': '¥14.85 / 亿',
          'usage': '2.63亿',
          'featured': true
        },
        {
          'platform': '阿里·百炼 Token Plan',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': 'Pro',
          'qualifier': '[峰]',
          'price': '¥499 / 月',
          'unit': '¥23.75 / 亿',
          'usage': '21亿',
          'featured': true
        },
        {
          'platform': '阿里·百炼 Token Plan',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': 'Standard',
          'qualifier': '[峰]',
          'price': '¥139 / 月',
          'unit': '¥26.46 / 亿',
          'usage': '5.25亿',
          'featured': true
        },
        {
          'platform': '阿里·百炼 Token Plan',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': 'Lite',
          'qualifier': '[峰]',
          'price': '¥39 / 月',
          'unit': '¥29.69 / 亿',
          'usage': '1.31亿',
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
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': 'Pro',
          'qualifier': '',
          'price': '¥499 / 月',
          'unit': '¥65.66 / 亿',
          'usage': '7.6亿',
          'featured': false
        }
      ]
    },
    {
      'id': 'deepseek-v4-1-flash',
      'title': 'DeepSeek V4.1 Flash',
      'kind': 'single',
      'desc': '',
      'rows': [
        {
          'platform': 'OpenCode',
          'model': 'DeepSeek-V4.1-Flash',
          'plan': 'Go',
          'qualifier': '[谷]',
          'price': '¥68 / 月',
          'unit': '¥1.496 / 亿',
          'usage': '45.1亿',
          'featured': true
        },
        {
          'platform': 'OpenCode',
          'model': 'DeepSeek-V4.1-Flash',
          'plan': 'Go',
          'qualifier': '[峰]',
          'price': '¥68 / 月',
          'unit': '¥2.992 / 亿',
          'usage': '22.6亿',
          'featured': true
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
          'platform': 'DeepSeek',
          'model': 'DeepSeek-V4.1-Flash',
          'plan': '按量 API',
          'qualifier': '[峰]',
          'price': '按量',
          'unit': '¥17.73 / 亿',
          'usage': '—',
          'featured': true
        }
      ]
    },
    {
      'id': 'glm-5-3-flash',
      'title': 'GLM 5.3 Flash',
      'kind': 'single',
      'desc': '',
      'rows': [
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
          'platform': '字节·方舟 Coding Plan',
          'model': 'GLM-5.3-Flash',
          'plan': 'Lite',
          'qualifier': '',
          'price': '¥40 / 月',
          'unit': '¥3.33 / 亿',
          'usage': '12亿',
          'featured': true
        },
        {
          'platform': '字节·方舟 Coding Plan',
          'model': 'GLM-5.3-Flash',
          'plan': 'Pro',
          'qualifier': '',
          'price': '¥200 / 月',
          'unit': '¥3.33 / 亿',
          'usage': '60亿',
          'featured': true
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
          'platform': '字节·方舟 Agent Plan',
          'model': 'GLM-5.3-Flash',
          'plan': 'Small',
          'qualifier': '',
          'price': '¥40 / 月',
          'unit': '¥5 / 亿',
          'usage': '8亿',
          'featured': false
        },
        {
          'platform': '字节·方舟 Agent Plan',
          'model': 'GLM-5.3-Flash',
          'plan': 'Medium',
          'qualifier': '',
          'price': '¥200 / 月',
          'unit': '¥5 / 亿',
          'usage': '40亿',
          'featured': false
        },
        {
          'platform': '字节·方舟 Agent Plan',
          'model': 'GLM-5.3-Flash',
          'plan': 'Large',
          'qualifier': '',
          'price': '¥500 / 月',
          'unit': '¥5 / 亿',
          'usage': '100亿',
          'featured': false
        },
        {
          'platform': '字节·方舟 Agent Plan',
          'model': 'GLM-5.3-Flash',
          'plan': 'Max',
          'qualifier': '',
          'price': '¥1,000 / 月',
          'unit': '¥5 / 亿',
          'usage': '200亿',
          'featured': false
        },
        {
          'platform': 'Command Code',
          'model': 'GLM-5.3-Flash',
          'plan': 'GOAT',
          'qualifier': '',
          'price': '¥68 / 月',
          'unit': '¥6.528 / 亿',
          'usage': '10.4亿',
          'featured': false
        },
        {
          'platform': '智谱AI',
          'model': 'GLM-5.3-Flash',
          'plan': 'Max',
          'qualifier': '[谷]',
          'price': '¥1,078 / 月',
          'unit': '¥6.58 / 亿',
          'usage': '163.8亿',
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
          'platform': '智谱AI',
          'model': 'GLM-5.3-Flash',
          'plan': 'Pro',
          'qualifier': '[谷]',
          'price': '¥538 / 月',
          'unit': '¥7.66 / 亿',
          'usage': '70.2亿',
          'featured': true
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
          'platform': '智谱AI',
          'model': 'GLM-5.3-Flash',
          'plan': 'Lite',
          'qualifier': '[谷]',
          'price': '¥118 / 月',
          'unit': '¥10.09 / 亿',
          'usage': '11.7亿',
          'featured': true
        },
        {
          'platform': 'Command Code',
          'model': 'GLM-5.3-Flash',
          'plan': 'Pro',
          'qualifier': '',
          'price': '¥136 / 月',
          'unit': '¥10.404 / 亿',
          'usage': '13亿',
          'featured': false
        },
        {
          'platform': '共绩算力',
          'model': 'GLM-5.3-Flash',
          'plan': '按量 API',
          'qualifier': '',
          'price': '按量',
          'unit': '¥10.47 / 亿',
          'usage': '—',
          'featured': false
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
          'platform': '智谱AI',
          'model': 'GLM-5.3-Flash',
          'plan': 'Max',
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
          'platform': '智谱AI',
          'model': 'GLM-5.3-Flash',
          'plan': 'Pro',
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
          'platform': '智谱AI',
          'model': 'GLM-5.3-Flash',
          'plan': 'Lite',
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
        }
      ]
    },
    {
      'id': 'gpt-5-6-luna',
      'title': 'GPT 5.6 Luna',
      'kind': 'single',
      'desc': '',
      'rows': [
        {
          'platform': 'Codex',
          'model': 'GPT-5.6-Luna',
          'plan': 'Pro *20',
          'qualifier': '',
          'price': '¥1,360 / 月',
          'unit': '¥1.428 / 亿',
          'usage': '960亿',
          'featured': true
        },
        {
          'platform': 'Command Code',
          'model': 'GPT-5.6-Luna',
          'plan': 'Go',
          'qualifier': '',
          'price': '¥6.8 / 月',
          'unit': '¥2.38 / 亿',
          'usage': '2.87亿',
          'featured': false
        },
        {
          'platform': 'Codex',
          'model': 'GPT-5.6-Luna',
          'plan': 'Plus',
          'qualifier': '',
          'price': '¥136 / 月',
          'unit': '¥2.856 / 亿',
          'usage': '48亿',
          'featured': true
        },
        {
          'platform': 'Codex',
          'model': 'GPT-5.6-Luna',
          'plan': 'Pro *5',
          'qualifier': '',
          'price': '¥680 / 月',
          'unit': '¥2.856 / 亿',
          'usage': '240亿',
          'featured': true
        },
        {
          'platform': 'Command Code',
          'model': 'GPT-5.6-Luna',
          'plan': 'GOAT',
          'qualifier': '',
          'price': '¥68 / 月',
          'unit': '¥11.832 / 亿',
          'usage': '5.74亿',
          'featured': false
        },
        {
          'platform': 'Command Code',
          'model': 'GPT-5.6-Luna',
          'plan': 'Pro',
          'qualifier': '',
          'price': '¥136 / 月',
          'unit': '¥15.776 / 亿',
          'usage': '8.61亿',
          'featured': false
        },
        {
          'platform': 'OpenCode',
          'model': 'GPT-5.6-Luna',
          'plan': 'Go',
          'qualifier': '[272K]',
          'price': '¥68 / 月',
          'unit': '¥15.776 / 亿',
          'usage': '4.3亿',
          'featured': true
        },
        {
          'platform': 'OpenCode',
          'model': 'GPT-5.6-Luna',
          'plan': 'Go',
          'qualifier': '',
          'price': '¥68 / 月',
          'unit': '¥30.26 / 亿',
          'usage': '2.25亿',
          'featured': true
        }
      ]
    },
    {
      'id': 'high-volume-models',
      'title': '甜品级模型对比',
      'kind': 'multi',
      'desc': '包含：DeepSeek-V4.1-Flash、DeepSeek-V4-Flash-0731、GLM-5.3-Flash、GPT-5.6-Luna',
      'rows': [
        {
          'platform': 'Codex',
          'model': 'GPT-5.6-Luna',
          'plan': 'Pro *20',
          'qualifier': '',
          'price': '¥1,360 / 月',
          'unit': '¥1.428 / 亿',
          'usage': '960亿',
          'featured': true
        },
        {
          'platform': 'Command Code',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': 'Go',
          'qualifier': '[谷]',
          'price': '¥6.8 / 月',
          'unit': '¥1.428 / 亿',
          'usage': '4.79亿',
          'featured': false
        },
        {
          'platform': 'OpenCode',
          'model': 'DeepSeek-V4.1-Flash',
          'plan': 'Go',
          'qualifier': '[谷]',
          'price': '¥68 / 月',
          'unit': '¥1.496 / 亿',
          'usage': '45.1亿',
          'featured': true
        },
        {
          'platform': 'Command Code',
          'model': 'GPT-5.6-Luna',
          'plan': 'Go',
          'qualifier': '',
          'price': '¥6.8 / 月',
          'unit': '¥2.38 / 亿',
          'usage': '2.87亿',
          'featured': false
        },
        {
          'platform': 'Command Code',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': 'GOAT',
          'qualifier': '[谷]',
          'price': '¥68 / 月',
          'unit': '¥2.38 / 亿',
          'usage': '28.8亿',
          'featured': false
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
          'platform': 'Codex',
          'model': 'GPT-5.6-Luna',
          'plan': 'Plus',
          'qualifier': '',
          'price': '¥136 / 月',
          'unit': '¥2.856 / 亿',
          'usage': '48亿',
          'featured': true
        },
        {
          'platform': 'Codex',
          'model': 'GPT-5.6-Luna',
          'plan': 'Pro *5',
          'qualifier': '',
          'price': '¥680 / 月',
          'unit': '¥2.856 / 亿',
          'usage': '240亿',
          'featured': true
        },
        {
          'platform': 'Command Code',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': 'Go',
          'qualifier': '[峰]',
          'price': '¥6.8 / 月',
          'unit': '¥2.856 / 亿',
          'usage': '2.4亿',
          'featured': false
        },
        {
          'platform': 'OpenCode',
          'model': 'DeepSeek-V4.1-Flash',
          'plan': 'Go',
          'qualifier': '[峰]',
          'price': '¥68 / 月',
          'unit': '¥2.992 / 亿',
          'usage': '22.6亿',
          'featured': true
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
          'platform': '字节·方舟 Coding Plan',
          'model': 'GLM-5.3-Flash',
          'plan': 'Lite',
          'qualifier': '',
          'price': '¥40 / 月',
          'unit': '¥3.33 / 亿',
          'usage': '12亿',
          'featured': true
        },
        {
          'platform': '字节·方舟 Coding Plan',
          'model': 'GLM-5.3-Flash',
          'plan': 'Pro',
          'qualifier': '',
          'price': '¥200 / 月',
          'unit': '¥3.33 / 亿',
          'usage': '60亿',
          'featured': true
        },
        {
          'platform': 'Command Code',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': 'Pro',
          'qualifier': '[谷]',
          'price': '¥136 / 月',
          'unit': '¥4.08 / 亿',
          'usage': '33.6亿',
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
          'platform': 'Command Code',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': 'GOAT',
          'qualifier': '[峰]',
          'price': '¥68 / 月',
          'unit': '¥4.76 / 亿',
          'usage': '14.4亿',
          'featured': false
        },
        {
          'platform': '字节·方舟 Agent Plan',
          'model': 'GLM-5.3-Flash',
          'plan': 'Small',
          'qualifier': '',
          'price': '¥40 / 月',
          'unit': '¥5 / 亿',
          'usage': '8亿',
          'featured': false
        },
        {
          'platform': '字节·方舟 Agent Plan',
          'model': 'GLM-5.3-Flash',
          'plan': 'Medium',
          'qualifier': '',
          'price': '¥200 / 月',
          'unit': '¥5 / 亿',
          'usage': '40亿',
          'featured': false
        },
        {
          'platform': '字节·方舟 Agent Plan',
          'model': 'GLM-5.3-Flash',
          'plan': 'Large',
          'qualifier': '',
          'price': '¥500 / 月',
          'unit': '¥5 / 亿',
          'usage': '100亿',
          'featured': false
        },
        {
          'platform': '字节·方舟 Agent Plan',
          'model': 'GLM-5.3-Flash',
          'plan': 'Max',
          'qualifier': '',
          'price': '¥1,000 / 月',
          'unit': '¥5 / 亿',
          'usage': '200亿',
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
          'platform': 'Command Code',
          'model': 'GLM-5.3-Flash',
          'plan': 'GOAT',
          'qualifier': '',
          'price': '¥68 / 月',
          'unit': '¥6.528 / 亿',
          'usage': '10.4亿',
          'featured': false
        },
        {
          'platform': '智谱AI',
          'model': 'GLM-5.3-Flash',
          'plan': 'Max',
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
          'model': 'DeepSeek-V4-Flash-0731',
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
          'platform': '智谱AI',
          'model': 'GLM-5.3-Flash',
          'plan': 'Pro',
          'qualifier': '[谷]',
          'price': '¥538 / 月',
          'unit': '¥7.66 / 亿',
          'usage': '70.2亿',
          'featured': true
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
          'platform': 'Command Code',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': 'Pro',
          'qualifier': '[峰]',
          'price': '¥136 / 月',
          'unit': '¥8.092 / 亿',
          'usage': '16.8亿',
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
          'plan': 'Lite',
          'qualifier': '[谷]',
          'price': '¥118 / 月',
          'unit': '¥10.09 / 亿',
          'usage': '11.7亿',
          'featured': true
        },
        {
          'platform': 'Command Code',
          'model': 'GLM-5.3-Flash',
          'plan': 'Pro',
          'qualifier': '',
          'price': '¥136 / 月',
          'unit': '¥10.404 / 亿',
          'usage': '13亿',
          'featured': false
        },
        {
          'platform': '共绩算力',
          'model': 'GLM-5.3-Flash',
          'plan': '按量 API',
          'qualifier': '',
          'price': '按量',
          'unit': '¥10.47 / 亿',
          'usage': '—',
          'featured': false
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
          'model': 'GPT-5.6-Luna',
          'plan': 'GOAT',
          'qualifier': '',
          'price': '¥68 / 月',
          'unit': '¥11.832 / 亿',
          'usage': '5.74亿',
          'featured': false
        },
        {
          'platform': '阿里·百炼 Token Plan',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': 'Pro',
          'qualifier': '[谷]',
          'price': '¥499 / 月',
          'unit': '¥11.87 / 亿',
          'usage': '42亿',
          'featured': true
        },
        {
          'platform': '智谱AI',
          'model': 'GLM-5.3-Flash',
          'plan': 'Max',
          'qualifier': '[峰]',
          'price': '¥1,078 / 月',
          'unit': '¥13.16 / 亿',
          'usage': '81.9亿',
          'featured': true
        },
        {
          'platform': '阿里·百炼 Token Plan',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': 'Standard',
          'qualifier': '[谷]',
          'price': '¥139 / 月',
          'unit': '¥13.23 / 亿',
          'usage': '10.5亿',
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
          'platform': '阿里·百炼 Token Plan',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': 'Lite',
          'qualifier': '[谷]',
          'price': '¥39 / 月',
          'unit': '¥14.85 / 亿',
          'usage': '2.63亿',
          'featured': true
        },
        {
          'platform': '智谱AI',
          'model': 'GLM-5.3-Flash',
          'plan': 'Pro',
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
          'platform': 'Command Code',
          'model': 'GPT-5.6-Luna',
          'plan': 'Pro',
          'qualifier': '',
          'price': '¥136 / 月',
          'unit': '¥15.776 / 亿',
          'usage': '8.61亿',
          'featured': false
        },
        {
          'platform': 'OpenCode',
          'model': 'GPT-5.6-Luna',
          'plan': 'Go',
          'qualifier': '[272K]',
          'price': '¥68 / 月',
          'unit': '¥15.776 / 亿',
          'usage': '4.3亿',
          'featured': true
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
          'platform': '智谱AI',
          'model': 'GLM-5.3-Flash',
          'plan': 'Lite',
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
          'platform': '阿里·百炼 Token Plan',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': 'Pro',
          'qualifier': '[峰]',
          'price': '¥499 / 月',
          'unit': '¥23.75 / 亿',
          'usage': '21亿',
          'featured': true
        },
        {
          'platform': '阿里·百炼 Token Plan',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': 'Standard',
          'qualifier': '[峰]',
          'price': '¥139 / 月',
          'unit': '¥26.46 / 亿',
          'usage': '5.25亿',
          'featured': true
        },
        {
          'platform': '阿里·百炼 Token Plan',
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': 'Lite',
          'qualifier': '[峰]',
          'price': '¥39 / 月',
          'unit': '¥29.69 / 亿',
          'usage': '1.31亿',
          'featured': true
        },
        {
          'platform': 'OpenCode',
          'model': 'GPT-5.6-Luna',
          'plan': 'Go',
          'qualifier': '',
          'price': '¥68 / 月',
          'unit': '¥30.26 / 亿',
          'usage': '2.25亿',
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
          'model': 'DeepSeek-V4-Flash-0731',
          'plan': 'Pro',
          'qualifier': '',
          'price': '¥499 / 月',
          'unit': '¥65.66 / 亿',
          'usage': '7.6亿',
          'featured': false
        }
      ]
    },
    {
      'id': 'sota-models',
      'title': 'SOTA模型对比',
      'kind': 'multi',
      'desc': '包含：GPT-6-Astra、Claude Opus 5、GPT-5.6-Sol、GLM-5.3、Kimi-K3',
      'rows': [
        {
          'platform': 'Codex',
          'model': 'GPT-5.6-Sol',
          'plan': 'Pro *20',
          'qualifier': '',
          'price': '¥1,360 / 月',
          'unit': '¥14.144 / 亿',
          'usage': '96亿',
          'featured': true
        },
        {
          'platform': '智谱AI',
          'model': 'GLM-5.3',
          'plan': 'Max',
          'qualifier': '[谷]',
          'price': '¥1,078 / 月',
          'unit': '¥19.93 / 亿',
          'usage': '54.1亿',
          'featured': true
        },
        {
          'platform': 'Claude',
          'model': 'Claude Opus 5',
          'plan': 'Max *5',
          'qualifier': '',
          'price': '¥680 / 月',
          'unit': '¥20.332 / 亿',
          'usage': '33.4亿',
          'featured': true
        },
        {
          'platform': 'Claude',
          'model': 'Claude Opus 5',
          'plan': 'Max *20',
          'qualifier': '',
          'price': '¥1,360 / 月',
          'unit': '¥20.332 / 亿',
          'usage': '66.9亿',
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
          'plan': 'Allegretto',
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
          'plan': 'Pro',
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
          'platform': 'Codex',
          'model': 'GPT-5.6-Sol',
          'plan': 'Plus',
          'qualifier': '',
          'price': '¥136 / 月',
          'unit': '¥28.356 / 亿',
          'usage': '4.8亿',
          'featured': true
        },
        {
          'platform': 'Codex',
          'model': 'GPT-5.6-Sol',
          'plan': 'Pro *5',
          'qualifier': '',
          'price': '¥680 / 月',
          'unit': '¥28.356 / 亿',
          'usage': '24亿',
          'featured': true
        },
        {
          'platform': 'Kimi',
          'model': 'Kimi-K3',
          'plan': 'Allegro',
          'qualifier': '[256K]',
          'price': '¥699 / 月',
          'unit': '¥29.13 / 亿',
          'usage': '24亿',
          'featured': true
        },
        {
          'platform': '智谱AI',
          'model': 'GLM-5.3',
          'plan': 'Lite',
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
          'plan': 'Allegretto',
          'qualifier': '',
          'price': '¥199 / 月',
          'unit': '¥33.17 / 亿',
          'usage': '6亿',
          'featured': true
        },
        {
          'platform': 'Claude',
          'model': 'Claude Opus 5',
          'plan': 'Pro',
          'qualifier': '',
          'price': '¥136 / 月',
          'unit': '¥33.864 / 亿',
          'usage': '4.01亿',
          'featured': true
        },
        {
          'platform': 'Command Code',
          'model': 'Kimi-K3',
          'plan': 'Go',
          'qualifier': '',
          'price': '¥6.8 / 月',
          'unit': '¥34.544 / 亿',
          'usage': '0.197亿',
          'featured': false
        },
        {
          'platform': '智谱AI',
          'model': 'GLM-5.3',
          'plan': 'Max',
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
          'plan': 'Pro *20',
          'qualifier': '',
          'price': '¥1,360 / 月',
          'unit': '¥42.5 / 亿',
          'usage': '32亿',
          'featured': true
        },
        {
          'platform': 'Kimi',
          'model': 'Kimi-K3',
          'plan': 'Allegro',
          'qualifier': '',
          'price': '¥699 / 月',
          'unit': '¥43.69 / 亿',
          'usage': '16亿',
          'featured': true
        },
        {
          'platform': '智谱AI',
          'model': 'GLM-5.3',
          'plan': 'Pro',
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
          'plan': 'Lite',
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
          'platform': 'Command Code',
          'model': 'GPT-5.6-Sol',
          'plan': 'GOAT',
          'qualifier': '',
          'price': '¥68 / 月',
          'unit': '¥84.66 / 亿',
          'usage': '0.803亿',
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
          'plan': 'Pro *5',
          'qualifier': '',
          'price': '¥680 / 月',
          'unit': '¥85 / 亿',
          'usage': '8亿',
          'featured': true
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
          'platform': 'Kimi',
          'model': 'Kimi-K3',
          'plan': 'Moderato',
          'qualifier': '[256K]',
          'price': '¥99 / 月',
          'unit': '¥117.86 / 亿',
          'usage': '0.84亿',
          'featured': true
        },
        {
          'platform': 'Command Code',
          'model': 'GPT-5.6-Sol',
          'plan': 'Pro',
          'qualifier': '',
          'price': '¥136 / 月',
          'unit': '¥148.104 / 亿',
          'usage': '0.918亿',
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
          'platform': '共绩算力',
          'model': 'Kimi-K3',
          'plan': '按量 API',
          'qualifier': '',
          'price': '按量',
          'unit': '¥270.84 / 亿',
          'usage': '—',
          'featured': false
        }
      ]
    }
  ]
};
