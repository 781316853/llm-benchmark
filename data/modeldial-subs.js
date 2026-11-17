// 数据源:ModelDial 订阅额度(源站 2026-11-13;https://modeldial.com/subscriptions?period=week&view=catalog)
// 抓取方式:订阅页 HTML → Next.js chunk 内嵌数据(套餐记录 + 第三方平台目录);页面结构变更会 fail-soft 保留旧文件。
// 字段:plans[]={slug/alias 可合并到的 codingplan slug/name/nameEn/platform/platformEn/fee/currency/feeCny/dm/legacy/models[]};
//   models[]={m 模型名/mEn 英文名/t 档位/u ¥每亿/q 四档月额度(仅 95% 单值)/s=m/w 实测|estimate/d 数据日期/a API 等值(USD/月)}。
// 口径:月额度 = 源站月均可用 Token;周额度 × 52/12;美元按 6.8 折算;不参与缓存档位换算。
// 授权:公开页面事实数据,引用请标注 ModelDial;https://modeldial.com/subscriptions?period=week&view=catalog
window.MODELDIAL_SUBS = {
  'source': 'ModelDial 订阅额度',
  'pageUrl': 'https://modeldial.com/subscriptions?period=week&view=catalog',
  'url': 'https://modeldial.com/subscriptions?period=week&view=catalog',
  'host': 'modeldial.com',
  'license': '见源站;引用请标注 ModelDial',
  'updated': '2026-11-17',
  'sourceUpdated': '2026-11-13',
  'refreshedAt': '2026-11-18 05:10',
  'usdToCnyRate': 6.8,
  'monthlyFactorWeek': 4.333,
  'cacheRatios': [
    0,
    0.5,
    0.95,
    0.99
  ],
  'stats': {
    'platforms': 21,
    'plans': 68,
    'rows': 133,
    'measuredRows': 31,
    'estimatedRows': 102,
    'firstPartyPlans': 34,
    'thirdPartyPlans': 34,
    'aliasedPlans': 49,
    'appendedPlans': 19,
    'skippedRecords': {
      'archived': 21,
      'historical': 33,
      'missingPrice': 4,
      'otherGroup': 39,
      'noQuota': 10,
      'mixed': 0
    },
    'skippedThirdPartyPlans': 0
  },
  'platforms': [
    {
      'name': 'MiMo',
      'nameEn': 'MiMo',
      'plans': 8,
      'firstParty': true
    },
    {
      'name': 'GLM',
      'nameEn': 'GLM',
      'plans': 6,
      'firstParty': true
    },
    {
      'name': 'MiniMax',
      'nameEn': 'MiniMax',
      'plans': 6,
      'firstParty': true
    },
    {
      'name': '阿里云百炼',
      'nameEn': 'Alibaba Bailian',
      'plans': 4,
      'firstParty': false
    },
    {
      'name': 'Kimi',
      'nameEn': 'Kimi',
      'plans': 4,
      'firstParty': true
    },
    {
      'name': 'Kiro',
      'nameEn': 'Kiro',
      'plans': 4,
      'firstParty': false
    },
    {
      'name': 'OpenAI',
      'nameEn': 'OpenAI',
      'plans': 4,
      'firstParty': true
    },
    {
      'name': 'X Subscription · Cursor',
      'nameEn': 'X Subscription · Cursor',
      'plans': 4,
      'firstParty': false
    },
    {
      'name': 'Claude',
      'nameEn': 'Claude',
      'plans': 3,
      'firstParty': true
    },
    {
      'name': 'GitHub Copilot',
      'nameEn': 'GitHub Copilot',
      'plans': 3,
      'firstParty': false
    },
    {
      'name': 'Google Antigravity',
      'nameEn': 'Google Antigravity',
      'plans': 3,
      'firstParty': false
    },
    {
      'name': 'Grok',
      'nameEn': 'Grok',
      'plans': 3,
      'firstParty': true
    },
    {
      'name': 'Ollama',
      'nameEn': 'Ollama',
      'plans': 3,
      'firstParty': false
    },
    {
      'name': 'WorkBuddy',
      'nameEn': 'WorkBuddy',
      'plans': 3,
      'firstParty': false
    },
    {
      'name': '火山方舟',
      'nameEn': 'Volcengine Ark',
      'plans': 2,
      'firstParty': false
    },
    {
      'name': 'Devin',
      'nameEn': 'Devin',
      'plans': 2,
      'firstParty': false
    },
    {
      'name': 'Factory Droid',
      'nameEn': 'Factory Droid',
      'plans': 2,
      'firstParty': false
    },
    {
      'name': 'Cline',
      'nameEn': 'Cline',
      'plans': 1,
      'firstParty': false
    },
    {
      'name': 'Command Code',
      'nameEn': 'Command Code',
      'plans': 1,
      'firstParty': false
    },
    {
      'name': 'OpenCode',
      'nameEn': 'OpenCode',
      'plans': 1,
      'firstParty': false
    },
    {
      'name': 'OpenDesign',
      'nameEn': 'OpenDesign',
      'plans': 1,
      'firstParty': false
    }
  ],
  'plans': [
    {
      'slug': 'md-openai-plus',
      'alias': 'codex-plus',
      'name': 'Plus',
      'nameEn': 'Plus',
      'platform': 'OpenAI',
      'platformEn': 'OpenAI',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'modeldial',
      'legacy': 0,
      'fee': 20,
      'currency': 'USD',
      'feeCny': 136,
      'dm': 0,
      'models': [
        {
          'm': 'GPT-6 Astra',
          'mEn': 'GPT-6 Astra',
          't': '',
          's': 'm',
          'w': 'estimate',
          'd': '',
          'a': 286,
          'q': [
            null,
            null,
            185,
            null
          ],
          'u': 73.51,
          'b': 'ChatGPT'
        },
        {
          'm': 'GPT-6.1 Sol',
          'mEn': 'GPT-6.1 Sol',
          't': '',
          's': 'm',
          'w': 'estimate',
          'd': '',
          'a': 202.8,
          'q': [
            null,
            null,
            1029.4,
            null
          ],
          'u': 13.21,
          'b': 'ChatGPT'
        },
        {
          'm': 'GPT-6 Sol',
          'mEn': 'GPT-6 Sol',
          't': '',
          's': 'm',
          'w': 'estimate',
          'd': '',
          'a': 286,
          'q': [
            null,
            null,
            1123.3,
            null
          ],
          'u': 12.11,
          'b': 'ChatGPT'
        },
        {
          'm': 'GPT-5.6 Sol',
          'mEn': 'GPT-5.6 Sol',
          't': '',
          's': 'm',
          'w': 'estimate',
          'd': '',
          'a': 374.4,
          'q': [
            null,
            null,
            715,
            null
          ],
          'u': 19.02,
          'b': 'ChatGPT'
        },
        {
          'm': 'GPT-6.1 Terra',
          'mEn': 'GPT-6.1 Terra',
          't': '',
          's': 'm',
          'w': 'estimate',
          'd': '2026-10-31',
          'a': 202.8,
          'q': [
            null,
            null,
            2058.9,
            null
          ],
          'u': 6.61,
          'b': 'ChatGPT'
        }
      ]
    },
    {
      'slug': 'md-openai-pro-100',
      'alias': 'codex-pro5',
      'name': 'Pro 100',
      'nameEn': 'Pro 100',
      'platform': 'OpenAI',
      'platformEn': 'OpenAI',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'modeldial',
      'legacy': 0,
      'fee': 100,
      'currency': 'USD',
      'feeCny': 680,
      'dm': 0,
      'models': [
        {
          'm': 'GPT-6 Astra',
          'mEn': 'GPT-6 Astra',
          't': '',
          's': 'm',
          'w': 'estimate',
          'd': '2026-10-31',
          'a': 4168.67,
          'q': [
            null,
            null,
            1964.6,
            null
          ],
          'u': 34.61,
          'b': 'ChatGPT'
        },
        {
          'm': 'GPT-6.1 Sol',
          'mEn': 'GPT-6.1 Sol',
          't': '',
          's': 'm',
          'w': 'estimate',
          'd': '2026-10-31',
          'a': 2990.32,
          'q': [
            null,
            null,
            15179.3,
            null
          ],
          'u': 4.48,
          'b': 'ChatGPT'
        },
        {
          'm': 'GPT-6 Sol',
          'mEn': 'GPT-6 Sol',
          't': '',
          's': 'm',
          'w': 'estimate',
          'd': '2026-10-31',
          'a': 4217.11,
          'q': [
            null,
            null,
            16563.7,
            null
          ],
          'u': 4.11,
          'b': 'ChatGPT'
        },
        {
          'm': 'GPT-5.6 Sol',
          'mEn': 'GPT-5.6 Sol',
          't': '',
          's': 'm',
          'w': 'estimate',
          'd': '2026-10-31',
          'a': 5226,
          'q': [
            null,
            null,
            9980.9,
            null
          ],
          'u': 6.81,
          'b': 'ChatGPT'
        },
        {
          'm': 'GPT-6.1 Terra',
          'mEn': 'GPT-6.1 Terra',
          't': '',
          's': 'm',
          'w': 'estimate',
          'd': '2026-10-31',
          'a': 2990.32,
          'q': [
            null,
            null,
            30358.6,
            null
          ],
          'u': 2.24,
          'b': 'ChatGPT'
        }
      ]
    },
    {
      'slug': 'md-openai-pro-200',
      'alias': 'codex-pro20',
      'name': 'Pro 200',
      'nameEn': 'Pro 200',
      'platform': 'OpenAI',
      'platformEn': 'OpenAI',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'modeldial',
      'legacy': 0,
      'fee': 200,
      'currency': 'USD',
      'feeCny': 1360,
      'dm': 0,
      'models': [
        {
          'm': 'GPT-6 Astra',
          'mEn': 'GPT-6 Astra',
          't': '',
          's': 'm',
          'w': 'estimate',
          'd': '2026-10-31',
          'a': 5794,
          'q': [
            null,
            null,
            3800,
            null
          ],
          'u': 35.79,
          'b': 'ChatGPT'
        },
        {
          'm': 'GPT-6.1 Sol',
          'mEn': 'GPT-6.1 Sol',
          't': '',
          's': 'm',
          'w': 'estimate',
          'd': '2026-10-31',
          'a': 4168,
          'q': [
            null,
            null,
            20400,
            null
          ],
          'u': 6.67,
          'b': 'ChatGPT'
        },
        {
          'm': 'GPT-6 Sol',
          'mEn': 'GPT-6 Sol',
          't': '',
          's': 'm',
          'w': 'estimate',
          'd': '2026-10-31',
          'a': 5757.63,
          'q': [
            null,
            null,
            22614.4,
            null
          ],
          'u': 6.01,
          'b': 'ChatGPT'
        },
        {
          'm': 'GPT-5.6 Sol',
          'mEn': 'GPT-5.6 Sol',
          't': '',
          's': 'm',
          'w': 'estimate',
          'd': '2026-10-31',
          'a': 8146.19,
          'q': [
            null,
            null,
            15558,
            null
          ],
          'u': 8.74,
          'b': 'ChatGPT'
        },
        {
          'm': 'GPT-6.1 Terra',
          'mEn': 'GPT-6.1 Terra',
          't': '',
          's': 'm',
          'w': 'estimate',
          'd': '2026-10-31',
          'a': 4168,
          'q': [
            null,
            null,
            40800,
            null
          ],
          'u': 3.33,
          'b': 'ChatGPT'
        }
      ]
    },
    {
      'slug': 'md-openai-pro-500',
      'alias': 'codex-pro500',
      'name': 'Pro 500',
      'nameEn': 'Pro 500',
      'platform': 'OpenAI',
      'platformEn': 'OpenAI',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'modeldial',
      'legacy': 0,
      'fee': 500,
      'currency': 'USD',
      'feeCny': 3400,
      'dm': 0,
      'models': [
        {
          'm': 'GPT-6 Astra',
          'mEn': 'GPT-6 Astra',
          't': '',
          's': 'm',
          'w': 'estimate',
          'd': '2026-10-31',
          'a': 13910,
          'q': [
            null,
            null,
            9200,
            null
          ],
          'u': 36.96,
          'b': 'ChatGPT'
        },
        {
          'm': 'GPT-6.1 Sol',
          'mEn': 'GPT-6.1 Sol',
          't': '',
          's': 'm',
          'w': 'estimate',
          'd': '2026-10-31',
          'a': 10772,
          'q': [
            null,
            null,
            52600,
            null
          ],
          'u': 6.46,
          'b': 'ChatGPT'
        },
        {
          'm': 'GPT-6 Sol',
          'mEn': 'GPT-6 Sol',
          't': '',
          's': 'm',
          'w': 'estimate',
          'd': '2026-10-31',
          'a': 14845.66,
          'q': [
            null,
            null,
            58309.7,
            null
          ],
          'u': 5.83,
          'b': 'ChatGPT'
        },
        {
          'm': 'GPT-5.6 Sol',
          'mEn': 'GPT-5.6 Sol',
          't': '',
          's': 'm',
          'w': 'estimate',
          'd': '2026-10-31',
          'a': 21004.39,
          'q': [
            null,
            null,
            40115.3,
            null
          ],
          'u': 8.48,
          'b': 'ChatGPT'
        },
        {
          'm': 'GPT-6.1 Terra',
          'mEn': 'GPT-6.1 Terra',
          't': '',
          's': 'm',
          'w': 'estimate',
          'd': '2026-10-31',
          'a': 10772,
          'q': [
            null,
            null,
            105200,
            null
          ],
          'u': 3.23,
          'b': 'ChatGPT'
        }
      ]
    },
    {
      'slug': 'md-claude-pro-oct-2026',
      'alias': 'claude-pro',
      'name': 'Pro',
      'nameEn': 'Pro',
      'platform': 'Claude',
      'platformEn': 'Claude',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'modeldial',
      'legacy': 0,
      'fee': 20,
      'currency': 'USD',
      'feeCny': 136,
      'dm': 0,
      'models': [
        {
          'm': 'Sonnet 5.5',
          'mEn': 'Sonnet 5.5',
          't': '',
          's': 'm',
          'w': 'estimate',
          'd': '2026-10-05',
          'a': 1241,
          'q': [
            null,
            null,
            4200,
            null
          ],
          'u': 3.24,
          'b': 'Claude'
        },
        {
          'm': 'Opus 5.5',
          'mEn': 'Opus 5.5',
          't': '',
          's': 'm',
          'w': 'estimate',
          'd': '2026-10-05',
          'a': 1178,
          'q': [
            null,
            null,
            2900,
            null
          ],
          'u': 4.69,
          'b': 'Claude'
        }
      ]
    },
    {
      'slug': 'md-claude-max-5x-oct-2026',
      'alias': 'claude-max5',
      'name': 'Max',
      'nameEn': 'Max',
      'platform': 'Claude',
      'platformEn': 'Claude',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'modeldial',
      'legacy': 0,
      'fee': 100,
      'currency': 'USD',
      'feeCny': 680,
      'dm': 0,
      'models': [
        {
          'm': 'Sonnet 5.5',
          'mEn': 'Sonnet 5.5',
          't': '',
          's': 'm',
          'w': 'estimate',
          'd': '2026-10-05',
          'a': 5919,
          'q': [
            null,
            null,
            20000,
            null
          ],
          'u': 3.4,
          'b': 'Claude'
        },
        {
          'm': 'Opus 5.5',
          'mEn': 'Opus 5.5',
          't': '',
          's': 'm',
          'w': 'estimate',
          'd': '2026-10-05',
          'a': 5725,
          'q': [
            null,
            null,
            14000,
            null
          ],
          'u': 4.86,
          'b': 'Claude'
        },
        {
          'm': 'Fable 5.1',
          'mEn': 'Fable 5.1',
          't': '',
          's': 'm',
          'w': 'estimate',
          'd': '2026-10-05',
          'a': 1273,
          'q': [
            null,
            null,
            1600,
            null
          ],
          'u': 42.5,
          'b': 'Claude'
        },
        {
          'm': 'Fable 5.2',
          'mEn': 'Fable 5.2',
          't': '',
          's': 'm',
          'w': 'estimate',
          'd': '2026-11-10',
          'a': 1564.77,
          'q': [
            null,
            null,
            1993.3,
            null
          ],
          'u': 34.11,
          'b': 'Claude'
        }
      ]
    },
    {
      'slug': 'md-claude-max-20x-oct-2026',
      'alias': 'claude-max20',
      'name': 'Ultra',
      'nameEn': 'Ultra',
      'platform': 'Claude',
      'platformEn': 'Claude',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'modeldial',
      'legacy': 0,
      'fee': 200,
      'currency': 'USD',
      'feeCny': 1360,
      'dm': 0,
      'models': [
        {
          'm': 'Sonnet 5.5',
          'mEn': 'Sonnet 5.5',
          't': '',
          's': 'm',
          'w': 'estimate',
          'd': '2026-10-05',
          'a': 12529,
          'q': [
            null,
            null,
            42300,
            null
          ],
          'u': 3.22,
          'b': 'Claude'
        },
        {
          'm': 'Opus 5.5',
          'mEn': 'Opus 5.5',
          't': '',
          's': 'm',
          'w': 'estimate',
          'd': '2026-10-05',
          'a': 11726,
          'q': [
            null,
            null,
            28600,
            null
          ],
          'u': 4.76,
          'b': 'Claude'
        },
        {
          'm': 'Fable 5.1',
          'mEn': 'Fable 5.1',
          't': '',
          's': 'm',
          'w': 'estimate',
          'd': '2026-10-05',
          'a': 2485,
          'q': [
            null,
            null,
            3200,
            null
          ],
          'u': 42.5,
          'b': 'Claude'
        },
        {
          'm': 'Fable 5.2',
          'mEn': 'Fable 5.2',
          't': '',
          's': 'm',
          'w': 'estimate',
          'd': '2026-11-10',
          'a': 3054.57,
          'q': [
            null,
            null,
            3900,
            null
          ],
          'u': 34.87,
          'b': 'Claude'
        }
      ]
    },
    {
      'slug': 'md-grok-supergrok',
      'alias': 'ra-xai-grok-supergrok',
      'name': 'SuperGrok',
      'nameEn': 'SuperGrok',
      'platform': 'Grok',
      'platformEn': 'Grok',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'modeldial',
      'legacy': 1,
      'fee': 30,
      'currency': 'USD',
      'feeCny': 204,
      'dm': 0,
      'models': [
        {
          'm': 'Grok 4.7',
          'mEn': 'Grok 4.7',
          't': '',
          's': 'm',
          'w': 'measured',
          'd': '',
          'a': 196.1,
          'q': [
            null,
            null,
            485.3,
            null
          ],
          'u': 42.04,
          'b': 'Grok'
        }
      ]
    },
    {
      'slug': 'md-grok-supergrok-plus',
      'alias': 'ra-xai-grok-supergrok-plus',
      'name': 'SuperGrok Plus',
      'nameEn': 'SuperGrok Plus',
      'platform': 'Grok',
      'platformEn': 'Grok',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'modeldial',
      'legacy': 1,
      'fee': 100,
      'currency': 'USD',
      'feeCny': 680,
      'dm': 0,
      'models': [
        {
          'm': 'Grok 4.7',
          'mEn': 'Grok 4.7',
          't': '',
          's': 'm',
          'w': 'measured',
          'd': '',
          'a': 524.76,
          'q': [
            null,
            null,
            1273.4,
            null
          ],
          'u': 53.4,
          'b': 'Grok'
        }
      ]
    },
    {
      'slug': 'md-grok-supergrok-heavy',
      'alias': 'ra-xai-grok-supergrok-heavy',
      'name': 'SuperGrok Heavy',
      'nameEn': 'SuperGrok Heavy',
      'platform': 'Grok',
      'platformEn': 'Grok',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'modeldial',
      'legacy': 1,
      'fee': 300,
      'currency': 'USD',
      'feeCny': 2040,
      'dm': 0,
      'models': [
        {
          'm': 'Grok 4.7',
          'mEn': 'Grok 4.7',
          't': '',
          's': 'm',
          'w': 'measured',
          'd': '',
          'a': 1735.5,
          'q': [
            null,
            null,
            3973.8,
            null
          ],
          'u': 51.34,
          'b': 'Grok'
        }
      ]
    },
    {
      'slug': 'md-glm-lite-china',
      'alias': 'zhipu-token-lite',
      'name': '国内 · Lite',
      'nameEn': 'CN · Lite',
      'platform': 'GLM',
      'platformEn': 'GLM',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'modeldial',
      'legacy': 0,
      'fee': 118,
      'currency': 'CNY',
      'feeCny': 118,
      'dm': 1,
      'models': [
        {
          'm': 'GLM-5.3',
          'mEn': 'GLM-5.3',
          't': '',
          's': 'm',
          'w': 'measured',
          'd': '2026-11-05',
          'a': null,
          'q': [
            null,
            null,
            442.2,
            null
          ],
          'u': 26.68,
          'b': '智谱 GLM'
        },
        {
          'm': 'GLM-5.3-Flash',
          'mEn': 'GLM-5.3-Flash',
          't': '',
          's': 'm',
          'w': 'measured',
          'd': '2026-11-05',
          'a': null,
          'q': [
            null,
            null,
            1386.1,
            null
          ],
          'u': 8.51,
          'b': '智谱 GLM'
        }
      ]
    },
    {
      'slug': 'md-glm-lite-international',
      'alias': 'zai-new-lite',
      'name': '国际 · Lite',
      'nameEn': 'Intl · Lite',
      'platform': 'GLM',
      'platformEn': 'GLM',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'modeldial',
      'legacy': 0,
      'fee': 18,
      'currency': 'USD',
      'feeCny': 122.4,
      'dm': 0,
      'models': [
        {
          'm': 'GLM-5.3',
          'mEn': 'GLM-5.3',
          't': '',
          's': 'm',
          'w': 'measured',
          'd': '2026-11-05',
          'a': null,
          'q': [
            null,
            null,
            442.2,
            null
          ],
          'u': 27.68,
          'b': '智谱 GLM'
        },
        {
          'm': 'GLM-5.3-Flash',
          'mEn': 'GLM-5.3-Flash',
          't': '',
          's': 'm',
          'w': 'measured',
          'd': '2026-11-05',
          'a': null,
          'q': [
            null,
            null,
            1386.1,
            null
          ],
          'u': 8.83,
          'b': '智谱 GLM'
        }
      ]
    },
    {
      'slug': 'md-glm-pro-china',
      'alias': 'zhipu-token-pro',
      'name': '国内 · Pro',
      'nameEn': 'CN · Pro',
      'platform': 'GLM',
      'platformEn': 'GLM',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'modeldial',
      'legacy': 0,
      'fee': 538,
      'currency': 'CNY',
      'feeCny': 538,
      'dm': 1,
      'models': [
        {
          'm': 'GLM-5.3',
          'mEn': 'GLM-5.3',
          't': '',
          's': 'm',
          'w': 'measured',
          'd': '2026-11-05',
          'a': null,
          'q': [
            null,
            null,
            3900,
            null
          ],
          'u': 13.79,
          'b': '智谱 GLM'
        },
        {
          'm': 'GLM-5.3-Flash',
          'mEn': 'GLM-5.3-Flash',
          't': '',
          's': 'm',
          'w': 'measured',
          'd': '2026-11-05',
          'a': null,
          'q': [
            null,
            null,
            12133.3,
            null
          ],
          'u': 4.43,
          'b': '智谱 GLM'
        }
      ]
    },
    {
      'slug': 'md-glm-pro-international',
      'alias': 'zai-new-pro',
      'name': '国际 · Pro',
      'nameEn': 'Intl · Pro',
      'platform': 'GLM',
      'platformEn': 'GLM',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'modeldial',
      'legacy': 0,
      'fee': 80,
      'currency': 'USD',
      'feeCny': 544,
      'dm': 0,
      'models': [
        {
          'm': 'GLM-5.3',
          'mEn': 'GLM-5.3',
          't': '',
          's': 'm',
          'w': 'measured',
          'd': '2026-11-05',
          'a': null,
          'q': [
            null,
            null,
            3900,
            null
          ],
          'u': 13.95,
          'b': '智谱 GLM'
        },
        {
          'm': 'GLM-5.3-Flash',
          'mEn': 'GLM-5.3-Flash',
          't': '',
          's': 'm',
          'w': 'measured',
          'd': '2026-11-05',
          'a': null,
          'q': [
            null,
            null,
            12133.3,
            null
          ],
          'u': 4.48,
          'b': '智谱 GLM'
        }
      ]
    },
    {
      'slug': 'md-glm-max-china',
      'alias': 'zhipu-token-max',
      'name': '国内 · Max',
      'nameEn': 'CN · Max',
      'platform': 'GLM',
      'platformEn': 'GLM',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'modeldial',
      'legacy': 0,
      'fee': 1078,
      'currency': 'CNY',
      'feeCny': 1078,
      'dm': 1,
      'models': [
        {
          'm': 'GLM-5.3',
          'mEn': 'GLM-5.3',
          't': '',
          's': 'm',
          'w': 'measured',
          'd': '2026-11-05',
          'a': null,
          'q': [
            null,
            null,
            8233.3,
            null
          ],
          'u': 13.09,
          'b': '智谱 GLM'
        },
        {
          'm': 'GLM-5.3-Flash',
          'mEn': 'GLM-5.3-Flash',
          't': '',
          's': 'm',
          'w': 'measured',
          'd': '2026-11-05',
          'a': null,
          'q': [
            null,
            null,
            25133.3,
            null
          ],
          'u': 4.29,
          'b': '智谱 GLM'
        }
      ]
    },
    {
      'slug': 'md-glm-max-international',
      'alias': 'zai-new-max',
      'name': '国际 · Max',
      'nameEn': 'Intl · Max',
      'platform': 'GLM',
      'platformEn': 'GLM',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'modeldial',
      'legacy': 0,
      'fee': 168,
      'currency': 'USD',
      'feeCny': 1142.4,
      'dm': 0,
      'models': [
        {
          'm': 'GLM-5.3',
          'mEn': 'GLM-5.3',
          't': '',
          's': 'm',
          'w': 'measured',
          'd': '2026-11-05',
          'a': null,
          'q': [
            null,
            null,
            8233.3,
            null
          ],
          'u': 13.88,
          'b': '智谱 GLM'
        },
        {
          'm': 'GLM-5.3-Flash',
          'mEn': 'GLM-5.3-Flash',
          't': '',
          's': 'm',
          'w': 'measured',
          'd': '2026-11-05',
          'a': null,
          'q': [
            null,
            null,
            25133.3,
            null
          ],
          'u': 4.55,
          'b': '智谱 GLM'
        }
      ]
    },
    {
      'slug': 'md-kimi-plus',
      'alias': 'kimi-plus-2026',
      'name': 'Plus',
      'nameEn': 'Plus',
      'platform': 'Kimi',
      'platformEn': 'Kimi',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'modeldial',
      'legacy': 0,
      'fee': 99,
      'currency': 'CNY',
      'feeCny': 99,
      'dm': 1,
      'models': [
        {
          'm': 'K3.1 Pro',
          'mEn': 'K3.1 Pro',
          't': '',
          's': 'm',
          'w': 'estimate',
          'd': '',
          'a': 74.5,
          'q': [
            null,
            null,
            219,
            null
          ],
          'u': 45.21,
          'b': 'Kimi'
        },
        {
          'm': 'K3',
          'mEn': 'K3',
          't': '',
          's': 'm',
          'w': 'estimate',
          'd': '2026-10-31',
          'a': 119.8,
          'q': [
            null,
            null,
            229.8,
            null
          ],
          'u': 43.08,
          'b': 'Kimi'
        },
        {
          'm': 'K3-256K',
          'mEn': 'K3-256K',
          't': '',
          's': 'm',
          'w': 'estimate',
          'd': '2026-10-31',
          'a': 239.61,
          'q': [
            null,
            null,
            459.6,
            null
          ],
          'u': 21.54,
          'b': 'Kimi'
        }
      ]
    },
    {
      'slug': 'md-kimi-pro',
      'alias': 'kimi-pro-2026',
      'name': 'Pro',
      'nameEn': 'Pro',
      'platform': 'Kimi',
      'platformEn': 'Kimi',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'modeldial',
      'legacy': 0,
      'fee': 199,
      'currency': 'CNY',
      'feeCny': 199,
      'dm': 1,
      'models': [
        {
          'm': 'K3.1 Pro',
          'mEn': 'K3.1 Pro',
          't': '',
          's': 'm',
          'w': 'estimate',
          'd': '',
          'a': 147.29,
          'q': [
            null,
            null,
            432.9,
            null
          ],
          'u': 45.97,
          'b': 'Kimi'
        },
        {
          'm': 'K3.1 Pro Highspeed',
          'mEn': 'K3.1 Pro Highspeed',
          't': '',
          's': 'm',
          'w': 'estimate',
          'd': '',
          'a': 108.31,
          'q': [
            null,
            null,
            216.5,
            null
          ],
          'u': 91.92,
          'b': 'Kimi'
        },
        {
          'm': 'K3',
          'mEn': 'K3',
          't': '',
          's': 'm',
          'w': 'estimate',
          'd': '2026-10-31',
          'a': 236.87,
          'q': [
            null,
            null,
            454.3,
            null
          ],
          'u': 43.8,
          'b': 'Kimi'
        },
        {
          'm': 'K3-256K',
          'mEn': 'K3-256K',
          't': '',
          's': 'm',
          'w': 'estimate',
          'd': '2026-10-31',
          'a': 473.73,
          'q': [
            null,
            null,
            908.7,
            null
          ],
          'u': 21.9,
          'b': 'Kimi'
        }
      ]
    },
    {
      'slug': 'md-kimi-max',
      'alias': 'kimi-max-2026',
      'name': 'Max',
      'nameEn': 'Max',
      'platform': 'Kimi',
      'platformEn': 'Kimi',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'modeldial',
      'legacy': 0,
      'fee': 699,
      'currency': 'CNY',
      'feeCny': 699,
      'dm': 1,
      'models': [
        {
          'm': 'K3.1 Pro',
          'mEn': 'K3.1 Pro',
          't': '',
          's': 'm',
          'w': 'estimate',
          'd': '',
          'a': 521.49,
          'q': [
            null,
            null,
            1532.8,
            null
          ],
          'u': 45.6,
          'b': 'Kimi'
        },
        {
          'm': 'K3.1 Pro Highspeed',
          'mEn': 'K3.1 Pro Highspeed',
          't': '',
          's': 'm',
          'w': 'estimate',
          'd': '',
          'a': 383.47,
          'q': [
            null,
            null,
            766.4,
            null
          ],
          'u': 91.21,
          'b': 'Kimi'
        },
        {
          'm': 'K3',
          'mEn': 'K3',
          't': '',
          's': 'm',
          'w': 'estimate',
          'd': '2026-10-31',
          'a': 838.62,
          'q': [
            null,
            null,
            1608.5,
            null
          ],
          'u': 43.46,
          'b': 'Kimi'
        },
        {
          'm': 'K3-256K',
          'mEn': 'K3-256K',
          't': '',
          's': 'm',
          'w': 'estimate',
          'd': '2026-10-31',
          'a': 1677.24,
          'q': [
            null,
            null,
            3217.1,
            null
          ],
          'u': 21.73,
          'b': 'Kimi'
        }
      ]
    },
    {
      'slug': 'md-kimi-ultra',
      'alias': 'kimi-ultra-2026',
      'name': 'Ultra',
      'nameEn': 'Ultra',
      'platform': 'Kimi',
      'platformEn': 'Kimi',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'modeldial',
      'legacy': 0,
      'fee': 1399,
      'currency': 'CNY',
      'feeCny': 1399,
      'dm': 1,
      'models': [
        {
          'm': 'K3.1 Pro',
          'mEn': 'K3.1 Pro',
          't': '',
          's': 'm',
          'w': 'estimate',
          'd': '',
          'a': 1042.98,
          'q': [
            null,
            null,
            3065.6,
            null
          ],
          'u': 45.64,
          'b': 'Kimi'
        },
        {
          'm': 'K3.1 Pro Highspeed',
          'mEn': 'K3.1 Pro Highspeed',
          't': '',
          's': 'm',
          'w': 'estimate',
          'd': '',
          'a': 766.94,
          'q': [
            null,
            null,
            1532.8,
            null
          ],
          'u': 91.27,
          'b': 'Kimi'
        },
        {
          'm': 'K3',
          'mEn': 'K3',
          't': '',
          's': 'm',
          'w': 'estimate',
          'd': '2026-10-31',
          'a': 1677.24,
          'q': [
            null,
            null,
            3217.1,
            null
          ],
          'u': 43.49,
          'b': 'Kimi'
        },
        {
          'm': 'K3-256K',
          'mEn': 'K3-256K',
          't': '',
          's': 'm',
          'w': 'estimate',
          'd': '2026-10-31',
          'a': 3354.48,
          'q': [
            null,
            null,
            6434.2,
            null
          ],
          'u': 21.74,
          'b': 'Kimi'
        }
      ]
    },
    {
      'slug': 'md-mimo-cn-lite',
      'alias': 'mimo-lite',
      'name': '国内 · Lite',
      'nameEn': 'CN · Lite',
      'platform': 'MiMo',
      'platformEn': 'MiMo',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'modeldial',
      'legacy': 0,
      'fee': 39,
      'currency': 'CNY',
      'feeCny': 39,
      'dm': 1,
      'models': [
        {
          'm': 'MiMo V2.6 Flash',
          'mEn': 'MiMo V2.6 Flash',
          't': '',
          's': 'm',
          'w': 'estimate',
          'd': '2026-10-31',
          'a': 6.11,
          'q': [
            null,
            null,
            447.6,
            null
          ],
          'u': 8.71,
          'b': '小米 MiMo'
        },
        {
          'm': 'MiMo V2.6 Pro',
          'mEn': 'MiMo V2.6 Pro',
          't': '',
          's': 'm',
          'w': 'estimate',
          'd': '2026-10-31',
          'a': 6.11,
          'q': [
            null,
            null,
            169.2,
            null
          ],
          'u': 23.05,
          'b': '小米 MiMo'
        }
      ]
    },
    {
      'slug': 'md-mimo-lite',
      'alias': null,
      'name': '国际 · Lite',
      'nameEn': 'Intl · Lite',
      'platform': 'MiMo',
      'platformEn': 'MiMo',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'modeldial',
      'legacy': 0,
      'fee': 6,
      'currency': 'USD',
      'feeCny': 40.8,
      'dm': 0,
      'models': [
        {
          'm': 'MiMo V2.6 Flash',
          'mEn': 'MiMo V2.6 Flash',
          't': '',
          's': 'm',
          'w': 'estimate',
          'd': '2026-10-31',
          'a': 5.74,
          'q': [
            null,
            null,
            447.6,
            null
          ],
          'u': 9.12,
          'b': '小米 MiMo'
        },
        {
          'm': 'MiMo V2.6 Pro',
          'mEn': 'MiMo V2.6 Pro',
          't': '',
          's': 'm',
          'w': 'estimate',
          'd': '2026-10-31',
          'a': 5.94,
          'q': [
            null,
            null,
            169.2,
            null
          ],
          'u': 24.11,
          'b': '小米 MiMo'
        }
      ]
    },
    {
      'slug': 'md-mimo-cn-standard',
      'alias': 'mimo-standard',
      'name': '国内 · Standard',
      'nameEn': 'CN · Standard',
      'platform': 'MiMo',
      'platformEn': 'MiMo',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'modeldial',
      'legacy': 0,
      'fee': 99,
      'currency': 'CNY',
      'feeCny': 99,
      'dm': 1,
      'models': [
        {
          'm': 'MiMo V2.6 Flash',
          'mEn': 'MiMo V2.6 Flash',
          't': '',
          's': 'm',
          'w': 'estimate',
          'd': '2026-10-31',
          'a': 16.39,
          'q': [
            null,
            null,
            1200.9,
            null
          ],
          'u': 8.24,
          'b': '小米 MiMo'
        },
        {
          'm': 'MiMo V2.6 Pro',
          'mEn': 'MiMo V2.6 Pro',
          't': '',
          's': 'm',
          'w': 'estimate',
          'd': '2026-10-31',
          'a': 16.39,
          'q': [
            null,
            null,
            454.1,
            null
          ],
          'u': 21.8,
          'b': '小米 MiMo'
        }
      ]
    },
    {
      'slug': 'md-mimo-standard',
      'alias': null,
      'name': '国际 · Standard',
      'nameEn': 'Intl · Standard',
      'platform': 'MiMo',
      'platformEn': 'MiMo',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'modeldial',
      'legacy': 0,
      'fee': 16,
      'currency': 'USD',
      'feeCny': 108.8,
      'dm': 0,
      'models': [
        {
          'm': 'MiMo V2.6 Flash',
          'mEn': 'MiMo V2.6 Flash',
          't': '',
          's': 'm',
          'w': 'estimate',
          'd': '2026-10-31',
          'a': 15.4,
          'q': [
            null,
            null,
            1200.9,
            null
          ],
          'u': 9.06,
          'b': '小米 MiMo'
        },
        {
          'm': 'MiMo V2.6 Pro',
          'mEn': 'MiMo V2.6 Pro',
          't': '',
          's': 'm',
          'w': 'estimate',
          'd': '2026-10-31',
          'a': 15.94,
          'q': [
            null,
            null,
            454.1,
            null
          ],
          'u': 23.96,
          'b': '小米 MiMo'
        }
      ]
    },
    {
      'slug': 'md-mimo-cn-pro',
      'alias': 'mimo-pro',
      'name': '国内 · Pro',
      'nameEn': 'CN · Pro',
      'platform': 'MiMo',
      'platformEn': 'MiMo',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'modeldial',
      'legacy': 0,
      'fee': 329,
      'currency': 'CNY',
      'feeCny': 329,
      'dm': 1,
      'models': [
        {
          'm': 'MiMo V2.6 Flash',
          'mEn': 'MiMo V2.6 Flash',
          't': '',
          's': 'm',
          'w': 'estimate',
          'd': '2026-10-31',
          'a': 56.6,
          'q': [
            null,
            null,
            4148.5,
            null
          ],
          'u': 7.93,
          'b': '小米 MiMo'
        },
        {
          'm': 'MiMo V2.6 Pro',
          'mEn': 'MiMo V2.6 Pro',
          't': '',
          's': 'm',
          'w': 'estimate',
          'd': '2026-10-31',
          'a': 56.6,
          'q': [
            null,
            null,
            1568.6,
            null
          ],
          'u': 20.97,
          'b': '小米 MiMo'
        }
      ]
    },
    {
      'slug': 'md-mimo-pro',
      'alias': null,
      'name': '国际 · Pro',
      'nameEn': 'Intl · Pro',
      'platform': 'MiMo',
      'platformEn': 'MiMo',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'modeldial',
      'legacy': 0,
      'fee': 50,
      'currency': 'USD',
      'feeCny': 340,
      'dm': 0,
      'models': [
        {
          'm': 'MiMo V2.6 Flash',
          'mEn': 'MiMo V2.6 Flash',
          't': '',
          's': 'm',
          'w': 'estimate',
          'd': '2026-10-31',
          'a': 53.2,
          'q': [
            null,
            null,
            4148.5,
            null
          ],
          'u': 8.2,
          'b': '小米 MiMo'
        },
        {
          'm': 'MiMo V2.6 Pro',
          'mEn': 'MiMo V2.6 Pro',
          't': '',
          's': 'm',
          'w': 'estimate',
          'd': '2026-10-31',
          'a': 55.06,
          'q': [
            null,
            null,
            1568.6,
            null
          ],
          'u': 21.68,
          'b': '小米 MiMo'
        }
      ]
    },
    {
      'slug': 'md-mimo-cn-max',
      'alias': 'mimo-max',
      'name': '国内 · Max',
      'nameEn': 'CN · Max',
      'platform': 'MiMo',
      'platformEn': 'MiMo',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'modeldial',
      'legacy': 0,
      'fee': 659,
      'currency': 'CNY',
      'feeCny': 659,
      'dm': 1,
      'models': [
        {
          'm': 'MiMo V2.6 Flash',
          'mEn': 'MiMo V2.6 Flash',
          't': '',
          's': 'm',
          'w': 'estimate',
          'd': '2026-10-31',
          'a': 122.15,
          'q': [
            null,
            null,
            8952,
            null
          ],
          'u': 7.36,
          'b': '小米 MiMo'
        },
        {
          'm': 'MiMo V2.6 Pro',
          'mEn': 'MiMo V2.6 Pro',
          't': '',
          's': 'm',
          'w': 'estimate',
          'd': '2026-10-31',
          'a': 122.15,
          'q': [
            null,
            null,
            3384.9,
            null
          ],
          'u': 19.47,
          'b': '小米 MiMo'
        }
      ]
    },
    {
      'slug': 'md-mimo-max',
      'alias': null,
      'name': '国际 · Max',
      'nameEn': 'Intl · Max',
      'platform': 'MiMo',
      'platformEn': 'MiMo',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'modeldial',
      'legacy': 0,
      'fee': 100,
      'currency': 'USD',
      'feeCny': 680,
      'dm': 0,
      'models': [
        {
          'm': 'MiMo V2.6 Flash',
          'mEn': 'MiMo V2.6 Flash',
          't': '',
          's': 'm',
          'w': 'estimate',
          'd': '2026-10-31',
          'a': 114.8,
          'q': [
            null,
            null,
            8952,
            null
          ],
          'u': 7.6,
          'b': '小米 MiMo'
        },
        {
          'm': 'MiMo V2.6 Pro',
          'mEn': 'MiMo V2.6 Pro',
          't': '',
          's': 'm',
          'w': 'estimate',
          'd': '2026-10-31',
          'a': 118.82,
          'q': [
            null,
            null,
            3384.9,
            null
          ],
          'u': 20.09,
          'b': '小米 MiMo'
        }
      ]
    },
    {
      'slug': 'md-minimax-cn-go',
      'alias': 'minimax-mplan-go',
      'name': '国内 · Go',
      'nameEn': 'CN · Go',
      'platform': 'MiniMax',
      'platformEn': 'MiniMax',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'modeldial',
      'legacy': 0,
      'fee': 49,
      'currency': 'CNY',
      'feeCny': 49,
      'dm': 1,
      'models': [
        {
          'm': 'MiniMax M3.1 Flash',
          'mEn': 'MiniMax M3.1 Flash',
          't': '',
          's': 'm',
          'w': 'estimate',
          'd': '2026-10-31',
          'a': 92.14,
          'q': [
            null,
            null,
            831.6,
            null
          ],
          'u': 5.89,
          'b': 'MiniMax'
        }
      ]
    },
    {
      'slug': 'md-minimax-cn-explore',
      'alias': 'minimax-mplan-explore',
      'name': '国内 · Explore',
      'nameEn': 'CN · Explore',
      'platform': 'MiniMax',
      'platformEn': 'MiniMax',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'modeldial',
      'legacy': 0,
      'fee': 119,
      'currency': 'CNY',
      'feeCny': 119,
      'dm': 1,
      'models': [
        {
          'm': 'MiniMax M3.1 Flash',
          'mEn': 'MiniMax M3.1 Flash',
          't': '',
          's': 'm',
          'w': 'estimate',
          'd': '2026-10-31',
          'a': 276.41,
          'q': [
            null,
            null,
            2494.7,
            null
          ],
          'u': 4.77,
          'b': 'MiniMax'
        }
      ]
    },
    {
      'slug': 'md-minimax-go',
      'alias': 'ra-minimax-minimax-token-plan-plus-global',
      'name': '国际 · Go',
      'nameEn': 'Intl · Go',
      'platform': 'MiniMax',
      'platformEn': 'MiniMax',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'modeldial',
      'legacy': 0,
      'fee': 22,
      'currency': 'USD',
      'feeCny': 149.6,
      'dm': 0,
      'models': [
        {
          'm': 'MiniMax M3.1 Flash',
          'mEn': 'MiniMax M3.1 Flash',
          't': '',
          's': 'm',
          'w': 'estimate',
          'd': '2026-10-26',
          'a': 153.37,
          'q': [
            null,
            null,
            6787.1,
            null
          ],
          'u': 2.2,
          'b': 'MiniMax'
        }
      ]
    },
    {
      'slug': 'md-minimax-explore',
      'alias': 'ra-minimax-minimax-token-plan-max-global',
      'name': '国际 · Explore',
      'nameEn': 'Intl · Explore',
      'platform': 'MiniMax',
      'platformEn': 'MiniMax',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'modeldial',
      'legacy': 0,
      'fee': 55,
      'currency': 'USD',
      'feeCny': 374,
      'dm': 0,
      'models': [
        {
          'm': 'MiniMax M3.1 Flash',
          'mEn': 'MiniMax M3.1 Flash',
          't': '',
          's': 'm',
          'w': 'estimate',
          'd': '2026-10-26',
          'a': 460.11,
          'q': [
            null,
            null,
            20361.3,
            null
          ],
          'u': 1.84,
          'b': 'MiniMax'
        }
      ]
    },
    {
      'slug': 'md-minimax-cn-build',
      'alias': 'minimax-mplan-build',
      'name': '国内 · Build',
      'nameEn': 'CN · Build',
      'platform': 'MiniMax',
      'platformEn': 'MiniMax',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'modeldial',
      'legacy': 0,
      'fee': 469,
      'currency': 'CNY',
      'feeCny': 469,
      'dm': 1,
      'models': [
        {
          'm': 'MiniMax M3.1 Flash',
          'mEn': 'MiniMax M3.1 Flash',
          't': '',
          's': 'm',
          'w': 'estimate',
          'd': '2026-10-31',
          'a': 1105.62,
          'q': [
            null,
            null,
            9978.8,
            null
          ],
          'u': 4.7,
          'b': 'MiniMax'
        }
      ]
    },
    {
      'slug': 'md-minimax-build',
      'alias': 'ra-minimax-minimax-token-plan-ultra-global',
      'name': '国际 · Build',
      'nameEn': 'Intl · Build',
      'platform': 'MiniMax',
      'platformEn': 'MiniMax',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'modeldial',
      'legacy': 0,
      'fee': 132,
      'currency': 'USD',
      'feeCny': 897.6,
      'dm': 0,
      'models': [
        {
          'm': 'MiniMax M3.1 Flash',
          'mEn': 'MiniMax M3.1 Flash',
          't': '',
          's': 'm',
          'w': 'estimate',
          'd': '2026-10-26',
          'a': 1150.26,
          'q': [
            null,
            null,
            50903.1,
            null
          ],
          'u': 1.76,
          'b': 'MiniMax'
        }
      ]
    },
    {
      'slug': 'md-bailian-token-plan-lite',
      'alias': 'aliyun-token-personal-lite',
      'name': 'Token Plan Lite',
      'nameEn': 'Token Plan Lite',
      'platform': '阿里云百炼',
      'platformEn': 'Alibaba Bailian',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'modeldial',
      'legacy': 0,
      'fee': 39,
      'currency': 'CNY',
      'feeCny': 39,
      'dm': 1,
      'models': [
        {
          'm': 'DeepSeek V4.1 Flash 1017',
          'mEn': 'DeepSeek V4.1 Flash 1017',
          't': '',
          's': 'm',
          'w': 'measured',
          'd': '2026.10.30–10.31',
          'a': null,
          'q': [
            null,
            null,
            331.3,
            null
          ],
          'u': 11.77,
          'b': 'DeepSeek'
        }
      ]
    },
    {
      'slug': 'md-bailian-token-plan-essential',
      'alias': 'aliyun-token-personal-essential',
      'name': 'Token Plan Essential',
      'nameEn': 'Token Plan Essential',
      'platform': '阿里云百炼',
      'platformEn': 'Alibaba Bailian',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'modeldial',
      'legacy': 0,
      'fee': 79,
      'currency': 'CNY',
      'feeCny': 79,
      'dm': 1,
      'models': [
        {
          'm': 'DeepSeek V4.1 Flash 1017',
          'mEn': 'DeepSeek V4.1 Flash 1017',
          't': '',
          's': 'm',
          'w': 'measured',
          'd': '2026.10.30–10.31',
          'a': null,
          'q': [
            null,
            null,
            734.7,
            null
          ],
          'u': 10.75,
          'b': 'DeepSeek'
        }
      ]
    },
    {
      'slug': 'md-bailian-token-plan-standard',
      'alias': 'aliyun-token-personal-standard',
      'name': 'Token Plan Standard',
      'nameEn': 'Token Plan Standard',
      'platform': '阿里云百炼',
      'platformEn': 'Alibaba Bailian',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'modeldial',
      'legacy': 0,
      'fee': 139,
      'currency': 'CNY',
      'feeCny': 139,
      'dm': 1,
      'models': [
        {
          'm': 'DeepSeek V4.1 Flash 1017',
          'mEn': 'DeepSeek V4.1 Flash 1017',
          't': '',
          's': 'm',
          'w': 'measured',
          'd': '2026.10.30–10.31',
          'a': null,
          'q': [
            null,
            null,
            1296.5,
            null
          ],
          'u': 10.72,
          'b': 'DeepSeek'
        }
      ]
    },
    {
      'slug': 'md-bailian-token-plan-pro',
      'alias': null,
      'name': 'Token Plan Pro',
      'nameEn': 'Token Plan Pro',
      'platform': '阿里云百炼',
      'platformEn': 'Alibaba Bailian',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'modeldial',
      'legacy': 0,
      'fee': 499,
      'currency': 'CNY',
      'feeCny': 499,
      'dm': 1,
      'models': [
        {
          'm': 'DeepSeek V4.1 Flash 1017',
          'mEn': 'DeepSeek V4.1 Flash 1017',
          't': '',
          's': 'm',
          'w': 'measured',
          'd': '2026.10.30–10.31',
          'a': null,
          'q': [
            null,
            null,
            5186.2,
            null
          ],
          'u': 9.62,
          'b': 'DeepSeek'
        }
      ]
    },
    {
      'slug': 'md-ark-coding-plan-lite',
      'alias': 'volcengine-coding-lite',
      'name': 'Coding Plan Lite',
      'nameEn': 'Coding Plan Lite',
      'platform': '火山方舟',
      'platformEn': 'Volcengine Ark',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'modeldial',
      'legacy': 0,
      'fee': 40,
      'currency': 'CNY',
      'feeCny': 40,
      'dm': 1,
      'models': [
        {
          'm': 'DeepSeek V4.1 Flash 1017',
          'mEn': 'DeepSeek V4.1 Flash 1017',
          't': '',
          's': 'm',
          'w': 'measured',
          'd': '2026.10.26–10.31',
          'a': null,
          'q': [
            null,
            null,
            190.1,
            null
          ],
          'u': 21.04,
          'b': 'DeepSeek'
        }
      ]
    },
    {
      'slug': 'md-ark-coding-plan-pro',
      'alias': 'volcengine-coding-pro',
      'name': 'Coding Plan Pro',
      'nameEn': 'Coding Plan Pro',
      'platform': '火山方舟',
      'platformEn': 'Volcengine Ark',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'modeldial',
      'legacy': 0,
      'fee': 200,
      'currency': 'CNY',
      'feeCny': 200,
      'dm': 1,
      'models': [
        {
          'm': 'DeepSeek V4.1 Flash 1017',
          'mEn': 'DeepSeek V4.1 Flash 1017',
          't': '',
          's': 'm',
          'w': 'measured',
          'd': '2026.10.26–10.31',
          'a': null,
          'q': [
            null,
            null,
            950.7,
            null
          ],
          'u': 21.04,
          'b': 'DeepSeek'
        }
      ]
    },
    {
      'slug': 'md-cline-pass',
      'alias': null,
      'name': 'Pass',
      'nameEn': 'Pass',
      'platform': 'Cline',
      'platformEn': 'Cline',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'modeldial',
      'legacy': 0,
      'fee': 9.99,
      'currency': 'USD',
      'feeCny': 67.93,
      'dm': 0,
      'models': [
        {
          'm': 'DeepSeek V4.1 Flash 1017',
          'mEn': 'DeepSeek V4.1 Flash 1017',
          't': '',
          's': 'm',
          'w': 'measured',
          'd': '2026.10.29',
          'a': null,
          'q': [
            null,
            null,
            5007.9,
            null
          ],
          'u': 1.36,
          'b': 'DeepSeek'
        }
      ]
    },
    {
      'slug': 'md-command-code-goat',
      'alias': 'commandcode-goat',
      'name': 'GOAT',
      'nameEn': 'GOAT',
      'platform': 'Command Code',
      'platformEn': 'Command Code',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'modeldial',
      'legacy': 0,
      'fee': 10,
      'currency': 'USD',
      'feeCny': 68,
      'dm': 0,
      'models': [
        {
          'm': 'DeepSeek V4.1 Flash 1017',
          'mEn': 'DeepSeek V4.1 Flash 1017',
          't': '',
          's': 'm',
          'w': 'measured',
          'd': '2026.09.20–10.16',
          'a': null,
          'q': [
            null,
            null,
            3866.7,
            null
          ],
          'u': 1.76,
          'b': 'DeepSeek'
        }
      ]
    },
    {
      'slug': 'md-devin-pro',
      'alias': 'ra-devin-devin-pro',
      'name': 'Pro',
      'nameEn': 'Pro',
      'platform': 'Devin',
      'platformEn': 'Devin',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'modeldial',
      'legacy': 0,
      'fee': 20,
      'currency': 'USD',
      'feeCny': 136,
      'dm': 0,
      'models': [
        {
          'm': 'Claude Opus 5.5',
          'mEn': 'Claude Opus 5.5',
          't': 'High',
          's': 'm',
          'w': 'estimate',
          'd': '',
          'a': null,
          'q': [
            null,
            null,
            95.3,
            null
          ],
          'u': 142.71,
          'b': 'Claude'
        }
      ]
    },
    {
      'slug': 'md-devin-max',
      'alias': 'ra-devin-devin-max',
      'name': 'Max',
      'nameEn': 'Max',
      'platform': 'Devin',
      'platformEn': 'Devin',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'modeldial',
      'legacy': 0,
      'fee': 200,
      'currency': 'USD',
      'feeCny': 1360,
      'dm': 0,
      'models': [
        {
          'm': 'Claude Opus 5.5',
          'mEn': 'Claude Opus 5.5',
          't': 'High',
          's': 'm',
          'w': 'estimate',
          'd': '',
          'a': null,
          'q': [
            null,
            null,
            1863.3,
            null
          ],
          'u': 72.99,
          'b': 'Claude'
        }
      ]
    },
    {
      'slug': 'md-factory-pro',
      'alias': 'ra-factory-droid-droid-pro',
      'name': 'Pro',
      'nameEn': 'Pro',
      'platform': 'Factory Droid',
      'platformEn': 'Factory Droid',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'modeldial',
      'legacy': 0,
      'fee': 20,
      'currency': 'USD',
      'feeCny': 136,
      'dm': 0,
      'models': [
        {
          'm': 'Grok 4.7',
          'mEn': 'Grok 4.7',
          't': '共享池',
          's': 'm',
          'w': 'estimate',
          'd': '',
          'a': null,
          'q': [
            null,
            null,
            700,
            null
          ],
          'u': 19.43,
          'b': 'Grok'
        },
        {
          'm': 'Claude Opus 5.5',
          'mEn': 'Claude Opus 5.5',
          't': 'Medium · 共享池',
          's': 'm',
          'w': 'estimate',
          'd': '',
          'a': null,
          'q': [
            null,
            null,
            350,
            null
          ],
          'u': 38.86,
          'b': 'Claude'
        }
      ]
    },
    {
      'slug': 'md-factory-max',
      'alias': 'ra-factory-droid-droid-max',
      'name': 'Max',
      'nameEn': 'Max',
      'platform': 'Factory Droid',
      'platformEn': 'Factory Droid',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'modeldial',
      'legacy': 0,
      'fee': 200,
      'currency': 'USD',
      'feeCny': 1360,
      'dm': 0,
      'models': [
        {
          'm': 'Grok 4.7',
          'mEn': 'Grok 4.7',
          't': '共享池',
          's': 'm',
          'w': 'estimate',
          'd': '',
          'a': null,
          'q': [
            null,
            null,
            5000,
            null
          ],
          'u': 27.2,
          'b': 'Grok'
        },
        {
          'm': 'Claude Opus 5.5',
          'mEn': 'Claude Opus 5.5',
          't': 'High · 共享池',
          's': 'm',
          'w': 'estimate',
          'd': '',
          'a': null,
          'q': [
            null,
            null,
            2500,
            null
          ],
          'u': 54.4,
          'b': 'Claude'
        }
      ]
    },
    {
      'slug': 'md-copilot-pro',
      'alias': 'github-token-plan-pro',
      'name': 'Pro',
      'nameEn': 'Pro',
      'platform': 'GitHub Copilot',
      'platformEn': 'GitHub Copilot',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'modeldial',
      'legacy': 0,
      'fee': 10,
      'currency': 'USD',
      'feeCny': 68,
      'dm': 0,
      'models': [
        {
          'm': 'Grok 4.7',
          'mEn': 'Grok 4.7',
          't': '',
          's': 'm',
          'w': 'estimate',
          'd': '',
          'a': null,
          'q': [
            null,
            null,
            15.2,
            null
          ],
          'u': 447.37,
          'b': 'Grok'
        }
      ]
    },
    {
      'slug': 'md-copilot-pro-2',
      'alias': 'github-token-plan-pro-2',
      'name': 'Pro+',
      'nameEn': 'Pro+',
      'platform': 'GitHub Copilot',
      'platformEn': 'GitHub Copilot',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'modeldial',
      'legacy': 0,
      'fee': 39,
      'currency': 'USD',
      'feeCny': 265.2,
      'dm': 0,
      'models': [
        {
          'm': 'Grok 4.7',
          'mEn': 'Grok 4.7',
          't': '共享池',
          's': 'm',
          'w': 'estimate',
          'd': '',
          'a': null,
          'q': [
            null,
            null,
            71,
            null
          ],
          'u': 373.52,
          'b': 'Grok'
        },
        {
          'm': 'Claude Opus 5.5',
          'mEn': 'Claude Opus 5.5',
          't': '共享池',
          's': 'm',
          'w': 'estimate',
          'd': '',
          'a': null,
          'q': [
            null,
            null,
            53,
            null
          ],
          'u': 500.38,
          'b': 'Claude'
        }
      ]
    },
    {
      'slug': 'md-copilot-max',
      'alias': 'github-token-plan-max',
      'name': 'Max',
      'nameEn': 'Max',
      'platform': 'GitHub Copilot',
      'platformEn': 'GitHub Copilot',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'modeldial',
      'legacy': 0,
      'fee': 100,
      'currency': 'USD',
      'feeCny': 680,
      'dm': 0,
      'models': [
        {
          'm': 'Grok 4.7',
          'mEn': 'Grok 4.7',
          't': '共享池',
          's': 'm',
          'w': 'estimate',
          'd': '',
          'a': null,
          'q': [
            null,
            null,
            203,
            null
          ],
          'u': 334.98,
          'b': 'Grok'
        },
        {
          'm': 'Claude Opus 5.5',
          'mEn': 'Claude Opus 5.5',
          't': '共享池',
          's': 'm',
          'w': 'estimate',
          'd': '',
          'a': null,
          'q': [
            null,
            null,
            152,
            null
          ],
          'u': 447.37,
          'b': 'Claude'
        }
      ]
    },
    {
      'slug': 'md-antigravity-ai-pro',
      'alias': 'ra-google-google-ai-pro',
      'name': 'AI Pro',
      'nameEn': 'AI Pro',
      'platform': 'Google Antigravity',
      'platformEn': 'Google Antigravity',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'modeldial',
      'legacy': 0,
      'fee': 19.99,
      'currency': 'USD',
      'feeCny': 135.93,
      'dm': 0,
      'models': [
        {
          'm': 'Gemini 4 Argon',
          'mEn': 'Gemini 4 Argon',
          't': 'Medium',
          's': 'm',
          'w': 'estimate',
          'd': '',
          'a': null,
          'q': [
            null,
            null,
            138.7,
            null
          ],
          'u': 98,
          'b': 'Gemini'
        },
        {
          'm': 'Gemini 3.8 Flash',
          'mEn': 'Gemini 3.8 Flash',
          't': 'High',
          's': 'm',
          'w': 'estimate',
          'd': '',
          'a': null,
          'q': [
            null,
            null,
            3250,
            null
          ],
          'u': 4.18,
          'b': 'Gemini'
        },
        {
          'm': 'Claude Sonnet 5.5',
          'mEn': 'Claude Sonnet 5.5',
          't': 'Medium · 共享池',
          's': 'm',
          'w': 'estimate',
          'd': '',
          'a': null,
          'q': [
            null,
            null,
            60.7,
            null
          ],
          'u': 223.94,
          'b': 'Claude'
        },
        {
          'm': 'Claude Opus 5.5',
          'mEn': 'Claude Opus 5.5',
          't': 'Medium · 共享池',
          's': 'm',
          'w': 'estimate',
          'd': '',
          'a': null,
          'q': [
            null,
            null,
            34.2,
            null
          ],
          'u': 397.46,
          'b': 'Claude'
        }
      ]
    },
    {
      'slug': 'md-antigravity-ai-ultra-5',
      'alias': 'ra-google-google-ai-ultra-5x',
      'name': 'AI Ultra 5×',
      'nameEn': 'AI Ultra 5×',
      'platform': 'Google Antigravity',
      'platformEn': 'Google Antigravity',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'modeldial',
      'legacy': 0,
      'fee': 99.99,
      'currency': 'USD',
      'feeCny': 679.93,
      'dm': 0,
      'models': [
        {
          'm': 'Gemini 4 Argon',
          'mEn': 'Gemini 4 Argon',
          't': 'Medium · 共享池',
          's': 'm',
          'w': 'estimate',
          'd': '',
          'a': null,
          'q': [
            null,
            null,
            2946.7,
            null
          ],
          'u': 23.07,
          'b': 'Gemini'
        },
        {
          'm': 'Gemini 3.8 Flash',
          'mEn': 'Gemini 3.8 Flash',
          't': 'High · 共享池',
          's': 'm',
          'w': 'estimate',
          'd': '',
          'a': null,
          'q': [
            null,
            null,
            18633.3,
            null
          ],
          'u': 3.65,
          'b': 'Gemini'
        },
        {
          'm': 'Claude Sonnet 5.5',
          'mEn': 'Claude Sonnet 5.5',
          't': 'Medium · 共享池',
          's': 'm',
          'w': 'estimate',
          'd': '',
          'a': null,
          'q': [
            null,
            null,
            411.7,
            null
          ],
          'u': 165.15,
          'b': 'Claude'
        },
        {
          'm': 'Claude Opus 5.5',
          'mEn': 'Claude Opus 5.5',
          't': 'Medium · 共享池',
          's': 'm',
          'w': 'estimate',
          'd': '',
          'a': null,
          'q': [
            null,
            null,
            229.7,
            null
          ],
          'u': 296.01,
          'b': 'Claude'
        }
      ]
    },
    {
      'slug': 'md-antigravity-ai-ultra-20',
      'alias': 'ra-google-google-ai-ultra-20x',
      'name': 'AI Ultra 20×',
      'nameEn': 'AI Ultra 20×',
      'platform': 'Google Antigravity',
      'platformEn': 'Google Antigravity',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'modeldial',
      'legacy': 0,
      'fee': 199.99,
      'currency': 'USD',
      'feeCny': 1359.93,
      'dm': 0,
      'models': [
        {
          'm': 'Gemini 4 Argon',
          'mEn': 'Gemini 4 Argon',
          't': 'Medium · 共享池',
          's': 'm',
          'w': 'estimate',
          'd': '',
          'a': null,
          'q': [
            null,
            null,
            11266.7,
            null
          ],
          'u': 12.07,
          'b': 'Gemini'
        },
        {
          'm': 'Gemini 3.8 Flash',
          'mEn': 'Gemini 3.8 Flash',
          't': 'High · 共享池',
          's': 'm',
          'w': 'estimate',
          'd': '',
          'a': null,
          'q': [
            null,
            null,
            73666.7,
            null
          ],
          'u': 1.85,
          'b': 'Gemini'
        },
        {
          'm': 'Claude Sonnet 5.5',
          'mEn': 'Claude Sonnet 5.5',
          't': 'Medium · 共享池',
          's': 'm',
          'w': 'estimate',
          'd': '',
          'a': null,
          'q': [
            null,
            null,
            693.3,
            null
          ],
          'u': 196.15,
          'b': 'Claude'
        },
        {
          'm': 'Claude Opus 5.5',
          'mEn': 'Claude Opus 5.5',
          't': 'Medium · 共享池',
          's': 'm',
          'w': 'estimate',
          'd': '',
          'a': null,
          'q': [
            null,
            null,
            359.7,
            null
          ],
          'u': 378.07,
          'b': 'Claude'
        }
      ]
    },
    {
      'slug': 'md-kiro-pro',
      'alias': null,
      'name': 'Pro',
      'nameEn': 'Pro',
      'platform': 'Kiro',
      'platformEn': 'Kiro',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'modeldial',
      'legacy': 0,
      'fee': 20,
      'currency': 'USD',
      'feeCny': 136,
      'dm': 0,
      'models': [
        {
          'm': 'Claude Opus 5.5',
          'mEn': 'Claude Opus 5.5',
          't': '',
          's': 'm',
          'w': 'estimate',
          'd': '',
          'a': null,
          'q': [
            null,
            null,
            78,
            null
          ],
          'u': 174.36,
          'b': 'Claude'
        }
      ]
    },
    {
      'slug': 'md-kiro-pro-2',
      'alias': null,
      'name': 'Pro+',
      'nameEn': 'Pro+',
      'platform': 'Kiro',
      'platformEn': 'Kiro',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'modeldial',
      'legacy': 0,
      'fee': 40,
      'currency': 'USD',
      'feeCny': 272,
      'dm': 0,
      'models': [
        {
          'm': 'Claude Opus 5.5',
          'mEn': 'Claude Opus 5.5',
          't': '',
          's': 'm',
          'w': 'estimate',
          'd': '',
          'a': null,
          'q': [
            null,
            null,
            156,
            null
          ],
          'u': 174.36,
          'b': 'Claude'
        }
      ]
    },
    {
      'slug': 'md-kiro-pro-max',
      'alias': null,
      'name': 'Pro Max',
      'nameEn': 'Pro Max',
      'platform': 'Kiro',
      'platformEn': 'Kiro',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'modeldial',
      'legacy': 0,
      'fee': 100,
      'currency': 'USD',
      'feeCny': 680,
      'dm': 0,
      'models': [
        {
          'm': 'Claude Opus 5.5',
          'mEn': 'Claude Opus 5.5',
          't': '',
          's': 'm',
          'w': 'estimate',
          'd': '',
          'a': null,
          'q': [
            null,
            null,
            390,
            null
          ],
          'u': 174.36,
          'b': 'Claude'
        }
      ]
    },
    {
      'slug': 'md-kiro-power',
      'alias': null,
      'name': 'Power',
      'nameEn': 'Power',
      'platform': 'Kiro',
      'platformEn': 'Kiro',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'modeldial',
      'legacy': 0,
      'fee': 200,
      'currency': 'USD',
      'feeCny': 1360,
      'dm': 0,
      'models': [
        {
          'm': 'Claude Opus 5.5',
          'mEn': 'Claude Opus 5.5',
          't': '',
          's': 'm',
          'w': 'estimate',
          'd': '',
          'a': null,
          'q': [
            null,
            null,
            780,
            null
          ],
          'u': 174.36,
          'b': 'Claude'
        }
      ]
    },
    {
      'slug': 'md-ollama-pro',
      'alias': 'ollama-coding-plan-pro',
      'name': 'Pro',
      'nameEn': 'Pro',
      'platform': 'Ollama',
      'platformEn': 'Ollama',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'modeldial',
      'legacy': 0,
      'fee': 20,
      'currency': 'USD',
      'feeCny': 136,
      'dm': 0,
      'models': [
        {
          'm': 'DeepSeek V4.1 Flash 1017',
          'mEn': 'DeepSeek V4.1 Flash 1017',
          't': '',
          's': 'm',
          'w': 'measured',
          'd': '2026.09.13',
          'a': null,
          'q': [
            null,
            null,
            5384.2,
            null
          ],
          'u': 2.53,
          'b': 'DeepSeek'
        }
      ]
    },
    {
      'slug': 'md-ollama-max',
      'alias': 'ollama-coding-plan-max',
      'name': 'Max',
      'nameEn': 'Max',
      'platform': 'Ollama',
      'platformEn': 'Ollama',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'modeldial',
      'legacy': 0,
      'fee': 100,
      'currency': 'USD',
      'feeCny': 680,
      'dm': 0,
      'models': [
        {
          'm': 'DeepSeek V4.1 Flash 1017',
          'mEn': 'DeepSeek V4.1 Flash 1017',
          't': '',
          's': 'm',
          'w': 'measured',
          'd': '2026.09.13',
          'a': null,
          'q': [
            null,
            null,
            26921.1,
            null
          ],
          'u': 2.53,
          'b': 'DeepSeek'
        }
      ]
    },
    {
      'slug': 'md-ollama-team-共享',
      'alias': null,
      'name': 'Team（共享）',
      'nameEn': 'Team (shared)',
      'platform': 'Ollama',
      'platformEn': 'Ollama',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'modeldial',
      'legacy': 0,
      'fee': 500,
      'currency': 'USD',
      'feeCny': 3400,
      'dm': 0,
      'models': [
        {
          'm': 'DeepSeek V4.1 Flash 1017',
          'mEn': 'DeepSeek V4.1 Flash 1017',
          't': '',
          's': 'm',
          'w': 'measured',
          'd': '2026.09.13',
          'a': null,
          'q': [
            null,
            null,
            89736.8,
            null
          ],
          'u': 3.79,
          'b': 'DeepSeek'
        }
      ]
    },
    {
      'slug': 'md-opencode-go',
      'alias': 'opencode-go',
      'name': 'Go',
      'nameEn': 'Go',
      'platform': 'OpenCode',
      'platformEn': 'OpenCode',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'modeldial',
      'legacy': 0,
      'fee': 10,
      'currency': 'USD',
      'feeCny': 68,
      'dm': 0,
      'models': [
        {
          'm': 'DeepSeek V4.1 Flash 1017',
          'mEn': 'DeepSeek V4.1 Flash 1017',
          't': '',
          's': 'm',
          'w': 'measured',
          'd': '2026.10.05–10.27',
          'a': null,
          'q': [
            null,
            null,
            4593.9,
            null
          ],
          'u': 1.48,
          'b': 'DeepSeek'
        }
      ]
    },
    {
      'slug': 'md-opendesign-go',
      'alias': null,
      'name': 'Go',
      'nameEn': 'Go',
      'platform': 'OpenDesign',
      'platformEn': 'OpenDesign',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'modeldial',
      'legacy': 0,
      'fee': 10,
      'currency': 'USD',
      'feeCny': 68,
      'dm': 0,
      'models': [
        {
          'm': 'DeepSeek V4.1 Flash 1017',
          'mEn': 'DeepSeek V4.1 Flash 1017',
          't': '',
          's': 'm',
          'w': 'measured',
          'd': '2026.10.19–10.20',
          'a': null,
          'q': [
            null,
            null,
            5871.9,
            null
          ],
          'u': 1.16,
          'b': 'DeepSeek'
        }
      ]
    },
    {
      'slug': 'md-workbuddy-标准版',
      'alias': null,
      'name': '标准版',
      'nameEn': 'Standard',
      'platform': 'WorkBuddy',
      'platformEn': 'WorkBuddy',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'modeldial',
      'legacy': 0,
      'fee': 70,
      'currency': 'CNY',
      'feeCny': 70,
      'dm': 1,
      'models': [
        {
          'm': 'DeepSeek V4.1 Flash 1017',
          'mEn': 'DeepSeek V4.1 Flash 1017',
          't': '',
          's': 'm',
          'w': 'measured',
          'd': '2026.10.17–10.31',
          'a': null,
          'q': [
            null,
            null,
            3208.5,
            null
          ],
          'u': 2.18,
          'b': 'DeepSeek'
        }
      ]
    },
    {
      'slug': 'md-workbuddy-高级版',
      'alias': null,
      'name': '高级版',
      'nameEn': 'Advanced',
      'platform': 'WorkBuddy',
      'platformEn': 'WorkBuddy',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'modeldial',
      'legacy': 0,
      'fee': 140,
      'currency': 'CNY',
      'feeCny': 140,
      'dm': 1,
      'models': [
        {
          'm': 'DeepSeek V4.1 Flash 1017',
          'mEn': 'DeepSeek V4.1 Flash 1017',
          't': '',
          's': 'm',
          'w': 'measured',
          'd': '2026.10.17–10.31',
          'a': null,
          'q': [
            null,
            null,
            7219.1,
            null
          ],
          'u': 1.94,
          'b': 'DeepSeek'
        }
      ]
    },
    {
      'slug': 'md-workbuddy-旗舰版',
      'alias': null,
      'name': '旗舰版',
      'nameEn': 'Flagship',
      'platform': 'WorkBuddy',
      'platformEn': 'WorkBuddy',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'modeldial',
      'legacy': 0,
      'fee': 700,
      'currency': 'CNY',
      'feeCny': 700,
      'dm': 1,
      'models': [
        {
          'm': 'DeepSeek V4.1 Flash 1017',
          'mEn': 'DeepSeek V4.1 Flash 1017',
          't': '',
          's': 'm',
          'w': 'measured',
          'd': '2026.10.17–10.31',
          'a': null,
          'q': [
            null,
            null,
            40106,
            null
          ],
          'u': 1.75,
          'b': 'DeepSeek'
        }
      ]
    },
    {
      'slug': 'md-x-subscription-plus',
      'alias': null,
      'name': 'Plus',
      'nameEn': 'Plus',
      'platform': 'X Subscription · Cursor',
      'platformEn': 'X Subscription · Cursor',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'modeldial',
      'legacy': 0,
      'fee': 8,
      'currency': 'USD',
      'feeCny': 54.4,
      'dm': 0,
      'models': [
        {
          'm': 'Grok 4.7',
          'mEn': 'Grok 4.7',
          't': 'Medium · 共享池',
          's': 'm',
          'w': 'estimate',
          'd': '',
          'a': null,
          'q': [
            null,
            null,
            247,
            null
          ],
          'u': 22.02,
          'b': 'Grok'
        },
        {
          'm': 'Composer 2.5',
          'mEn': 'Composer 2.5',
          't': 'Standard · 共享池',
          's': 'm',
          'w': 'estimate',
          'd': '',
          'a': null,
          'q': [
            null,
            null,
            606.7,
            null
          ],
          'u': 8.97,
          'b': 'Cursor'
        }
      ]
    },
    {
      'slug': 'md-x-subscription-premium',
      'alias': null,
      'name': 'Premium',
      'nameEn': 'Premium',
      'platform': 'X Subscription · Cursor',
      'platformEn': 'X Subscription · Cursor',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'modeldial',
      'legacy': 0,
      'fee': 30,
      'currency': 'USD',
      'feeCny': 204,
      'dm': 0,
      'models': [
        {
          'm': 'Grok 4.7',
          'mEn': 'Grok 4.7',
          't': 'Medium · 共享池',
          's': 'm',
          'w': 'estimate',
          'd': '',
          'a': null,
          'q': [
            null,
            null,
            866.7,
            null
          ],
          'u': 23.54,
          'b': 'Grok'
        },
        {
          'm': 'Composer 2.5',
          'mEn': 'Composer 2.5',
          't': 'Standard · 共享池',
          's': 'm',
          'w': 'estimate',
          'd': '',
          'a': null,
          'q': [
            null,
            null,
            3076.7,
            null
          ],
          'u': 6.63,
          'b': 'Cursor'
        }
      ]
    },
    {
      'slug': 'md-x-subscription-super',
      'alias': null,
      'name': 'Super',
      'nameEn': 'Super',
      'platform': 'X Subscription · Cursor',
      'platformEn': 'X Subscription · Cursor',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'modeldial',
      'legacy': 0,
      'fee': 100,
      'currency': 'USD',
      'feeCny': 680,
      'dm': 0,
      'models': [
        {
          'm': 'Grok 4.7',
          'mEn': 'Grok 4.7',
          't': 'Medium · 共享池',
          's': 'm',
          'w': 'estimate',
          'd': '',
          'a': null,
          'q': [
            null,
            null,
            3033.3,
            null
          ],
          'u': 22.42,
          'b': 'Grok'
        },
        {
          'm': 'Composer 2.5',
          'mEn': 'Composer 2.5',
          't': 'Standard · 共享池',
          's': 'm',
          'w': 'estimate',
          'd': '',
          'a': null,
          'q': [
            null,
            null,
            13000,
            null
          ],
          'u': 5.23,
          'b': 'Cursor'
        }
      ]
    },
    {
      'slug': 'md-x-subscription-ultra',
      'alias': null,
      'name': 'Ultra',
      'nameEn': 'Ultra',
      'platform': 'X Subscription · Cursor',
      'platformEn': 'X Subscription · Cursor',
      'status': 'open',
      'billing': 'subscription',
      'origin': 'modeldial',
      'legacy': 0,
      'fee': 200,
      'currency': 'USD',
      'feeCny': 1360,
      'dm': 0,
      'models': [
        {
          'm': 'Grok 4.7',
          'mEn': 'Grok 4.7',
          't': 'Medium · 共享池',
          's': 'm',
          'w': 'estimate',
          'd': '',
          'a': null,
          'q': [
            null,
            null,
            6933.3,
            null
          ],
          'u': 19.62,
          'b': 'Grok'
        },
        {
          'm': 'Composer 2.5',
          'mEn': 'Composer 2.5',
          't': 'Standard · 共享池',
          's': 'm',
          'w': 'estimate',
          'd': '',
          'a': null,
          'q': [
            null,
            null,
            27300,
            null
          ],
          'u': 4.98,
          'b': 'Cursor'
        }
      ]
    }
  ],
  'notes': {
    'quota': '月额度为源站月均口径;周额度按 52/12 折算为月,五小时额度不直接参与月度排名。',
    'basis': 'ModelDial 记录含实测、样本外推与估算口径,行内「实测/估算」沿用源站字段;API 等值为源站按模型官方价折算。',
    'scope': '首批厂商套餐 + 第三方订阅平台目录;首批目录与 ModelDial 订阅页一致,第三方平台含共享额度池,模型额度不一定可相加。'
  },
  'sourceNote': '数据来自 ModelDial 订阅额度公开页面,仅保留事实数据并在行内标注口径;订阅额度数据未随雷达数据声明 CC BY,许可见源站。'
};
