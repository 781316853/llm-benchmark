// 数据源:AI 能力专项测试(atmeplz)四方向榜 · 前端/后端方向分(0-100)
// 站点:https://atmeplz.github.io/ai-test-prompt/board-04.html  (更新于 2026-09-03)
// 字段说明:score=方向分(天然以 100 为参考,越高越好);rank=源站方向内排名;weight=方向分成员题权重
// 用途:门户「AI 能力」独立榜单页(前端/后端两个方向),独立榜单不计入综合分。
window.AICAP = {
  'source': 'AI 能力专项测试 (atmeplz)',
  'url': 'https://atmeplz.github.io/ai-test-prompt/data/site.json',
  'boardUrl': 'https://atmeplz.github.io/ai-test-prompt/board-04.html',
  'updated': '2026-09-03',
  'refreshedAt': '2026-09-05 13:19',
  'runCount': 26,
  'desc': 'AI 能力专项测试四方向榜:文字/前端/后端/知识四个方向独立排名,方向分由成员题按既定权重合成。门户仅收录前端与后端两个编码方向,独立榜单展示,不计入综合分。',
  'directions': {
    'frontend': {
      'zh': '前端处理能力',
      'en': 'FRONTEND',
      'weight': [
        [
          '中式建筑',
          '25%'
        ],
        [
          '体素山水',
          '25%'
        ],
        [
          '前端网页',
          '40%'
        ],
        [
          '黑洞模拟',
          '10%'
        ]
      ],
      'models': [
        {
          'name': 'claude-fable-5',
          'vendor': 'anthropic',
          'vendorDisplay': 'CLAUDE',
          'effort': 'max',
          'platform': 'cc',
          'tested': '2026-08-21',
          'score': 96.5,
          'rank': 1,
          'pct': 100
        },
        {
          'name': 'deepseek-v4-pro-0821凌晨灰测',
          'vendor': 'deepseek',
          'vendorDisplay': 'DEEPSEEK',
          'effort': 'max',
          'platform': 'dsh',
          'tested': '2026-08-21',
          'score': 95.2,
          'rank': 2,
          'pct': 98.6
        },
        {
          'name': 'claude-opus-5',
          'vendor': 'anthropic',
          'vendorDisplay': 'CLAUDE',
          'effort': 'max',
          'platform': 'cc',
          'tested': '2026-08-18',
          'score': 95,
          'rank': 3,
          'pct': 98.4
        },
        {
          'name': 'hy4-preview',
          'vendor': 'tencent',
          'vendorDisplay': '腾讯',
          'effort': 'high',
          'platform': 'workbuddy',
          'tested': '2026-08-28',
          'score': 93.8,
          'rank': 4,
          'pct': 97.2
        },
        {
          'name': 'qwen3.8-flash',
          'vendor': 'alibaba',
          'vendorDisplay': 'QWEN',
          'effort': 'xhigh',
          'platform': 'qoder',
          'tested': '2026-08-31',
          'score': 91.1,
          'rank': 5,
          'pct': 94.4
        },
        {
          'name': 'gemini-3.8-flash',
          'vendor': 'google',
          'vendorDisplay': 'GOOGLE',
          'effort': 'high',
          'platform': 'antigravity',
          'tested': '2026-09-03',
          'score': 89.4,
          'rank': 6,
          'pct': 92.6
        },
        {
          'name': 'gpt-5.6-sol-0829',
          'vendor': 'openai',
          'vendorDisplay': 'GPT',
          'effort': 'max',
          'platform': 'codex',
          'tested': '2026-08-29',
          'score': 88.9,
          'rank': 7,
          'pct': 92.1
        },
        {
          'name': 'gemini-3.7-flash',
          'vendor': 'google',
          'vendorDisplay': 'GOOGLE',
          'effort': 'high',
          'platform': 'antigravity',
          'tested': '2026-08-20',
          'score': 87.9,
          'rank': 8,
          'pct': 91
        },
        {
          'name': 'qwen3.8-max-0902',
          'vendor': 'alibaba',
          'vendorDisplay': 'QWEN',
          'effort': 'xhigh',
          'platform': 'qoder',
          'tested': '2026-09-02',
          'score': 87.5,
          'rank': 9,
          'pct': 90.7
        },
        {
          'name': 'kimi-k3',
          'vendor': 'moonshot',
          'vendorDisplay': 'KIMI',
          'effort': 'max',
          'platform': 'kimicode',
          'tested': '2026-08-17',
          'score': 87.1,
          'rank': 10,
          'pct': 90.3
        },
        {
          'name': 'glm-5.3-flash',
          'vendor': 'zhipu',
          'vendorDisplay': '智谱',
          'effort': 'max',
          'platform': 'zcode',
          'tested': '2026-08-30',
          'score': 85.7,
          'rank': 11,
          'pct': 88.8
        },
        {
          'name': 'glm-5.3',
          'vendor': 'zhipu',
          'vendorDisplay': '智谱',
          'effort': 'max',
          'platform': 'zcode',
          'tested': '2026-08-16',
          'score': 85.6,
          'rank': 12,
          'pct': 88.8
        },
        {
          'name': 'qwen3.8-max',
          'vendor': 'alibaba',
          'vendorDisplay': 'QWEN',
          'effort': 'xhigh',
          'platform': 'qoder',
          'tested': '2026-08-15',
          'score': 85.6,
          'rank': 13,
          'pct': 88.7
        },
        {
          'name': 'grok-4.6',
          'vendor': 'xai',
          'vendorDisplay': 'SPACEXAI',
          'effort': 'xhigh',
          'platform': 'cursor',
          'tested': '2026-08-15',
          'score': 85.2,
          'rank': 14,
          'pct': 88.3
        },
        {
          'name': 'glm-5.3',
          'vendor': 'zhipu',
          'vendorDisplay': '智谱',
          'effort': 'max',
          'platform': 'qoder',
          'tested': '2026-08-14',
          'score': 84.1,
          'rank': 15,
          'pct': 87.1
        },
        {
          'name': 'DSV4F0731',
          'vendor': 'deepseek',
          'vendorDisplay': 'DEEPSEEK',
          'effort': 'max',
          'platform': 'dsh-jspace',
          'tested': '2026-08-17',
          'score': 84.1,
          'rank': 16,
          'pct': 87.1
        },
        {
          'name': 'ox-alpha',
          'vendor': 'stealth',
          'vendorDisplay': 'STEALTH',
          'effort': 'max',
          'platform': 'opencode',
          'tested': '2026-08-22',
          'score': 81.5,
          'rank': 17,
          'pct': 84.4
        },
        {
          'name': 'muse-spark-1.2-contributor',
          'vendor': 'meta',
          'vendorDisplay': 'META',
          'effort': 'xhigh',
          'platform': 'zcode',
          'tested': '2026-08-19',
          'score': 78.8,
          'rank': 18,
          'pct': 81.6
        },
        {
          'name': 'DSV4F-VE-ocgo',
          'vendor': 'deepseek',
          'vendorDisplay': 'DEEPSEEK',
          'effort': 'max',
          'platform': 'dsh',
          'tested': '2026-08-31',
          'score': 75.6,
          'rank': 19,
          'pct': 78.3
        },
        {
          'name': 'gemini-3.6-flash',
          'vendor': 'google',
          'vendorDisplay': 'GOOGLE',
          'effort': 'high',
          'platform': 'antigravity',
          'tested': '2026-08-12',
          'score': 73.8,
          'rank': 20,
          'pct': 76.5
        },
        {
          'name': 'hy3',
          'vendor': 'tencent',
          'vendorDisplay': '腾讯',
          'effort': 'high',
          'platform': 'workbuddy',
          'tested': '2026-08-15',
          'score': 71,
          'rank': 21,
          'pct': 73.6
        },
        {
          'name': 'minimax-m3-thinking',
          'vendor': 'minimax',
          'vendorDisplay': 'MINIMAX',
          'effort': null,
          'platform': 'workbuddy',
          'tested': '2026-08-10',
          'score': 66.3,
          'rank': 22,
          'pct': 68.7
        },
        {
          'name': 'seed-2.1-pro',
          'vendor': 'bytedance',
          'vendorDisplay': 'SEED',
          'effort': null,
          'platform': 'trae',
          'tested': '2026-08-12',
          'score': 59.9,
          'rank': 23,
          'pct': 62.1
        },
        {
          'name': 'inkling',
          'vendor': 'thinking-machines',
          'vendorDisplay': 'THINKING MACHINES',
          'effort': 'max',
          'platform': 'opencode',
          'tested': '2026-08-22',
          'score': 56.5,
          'rank': 24,
          'pct': 58.5
        },
        {
          'name': 'gpt-4o',
          'vendor': 'openai',
          'vendorDisplay': 'GPT',
          'effort': null,
          'platform': 'opencode',
          'tested': '2026-08-30',
          'score': 42,
          'rank': 25,
          'pct': 43.5
        },
        {
          'name': 'dots3-note-prev',
          'vendor': 'dots',
          'vendorDisplay': 'DOTS',
          'effort': 'max',
          'platform': 'zcode',
          'tested': '2026-08-20',
          'score': 22.3,
          'rank': 26,
          'pct': 23.1
        }
      ]
    },
    'backend': {
      'zh': '后端处理能力',
      'en': 'BACKEND',
      'weight': [
        [
          '超级 MES',
          '100%'
        ]
      ],
      'models': [
        {
          'name': 'claude-fable-5',
          'vendor': 'anthropic',
          'vendorDisplay': 'CLAUDE',
          'effort': 'max',
          'platform': 'cc',
          'tested': '2026-08-21',
          'score': 96,
          'rank': 1,
          'pct': 100
        },
        {
          'name': 'deepseek-v4-pro-0821凌晨灰测',
          'vendor': 'deepseek',
          'vendorDisplay': 'DEEPSEEK',
          'effort': 'max',
          'platform': 'dsh',
          'tested': '2026-08-21',
          'score': 96,
          'rank': 1,
          'pct': 100
        },
        {
          'name': 'glm-5.3',
          'vendor': 'zhipu',
          'vendorDisplay': '智谱',
          'effort': 'max',
          'platform': 'zcode',
          'tested': '2026-08-16',
          'score': 96,
          'rank': 1,
          'pct': 100
        },
        {
          'name': 'qwen3.8-flash',
          'vendor': 'alibaba',
          'vendorDisplay': 'QWEN',
          'effort': 'xhigh',
          'platform': 'qoder',
          'tested': '2026-08-31',
          'score': 94,
          'rank': 4,
          'pct': 97.9
        },
        {
          'name': 'glm-5.3',
          'vendor': 'zhipu',
          'vendorDisplay': '智谱',
          'effort': 'max',
          'platform': 'qoder',
          'tested': '2026-08-14',
          'score': 94,
          'rank': 4,
          'pct': 97.9
        },
        {
          'name': 'claude-opus-5',
          'vendor': 'anthropic',
          'vendorDisplay': 'CLAUDE',
          'effort': 'max',
          'platform': 'cc',
          'tested': '2026-08-18',
          'score': 90,
          'rank': 6,
          'pct': 93.8
        },
        {
          'name': 'ox-alpha',
          'vendor': 'stealth',
          'vendorDisplay': 'STEALTH',
          'effort': 'max',
          'platform': 'opencode',
          'tested': '2026-08-22',
          'score': 82,
          'rank': 7,
          'pct': 85.4
        },
        {
          'name': 'glm-5.3-flash',
          'vendor': 'zhipu',
          'vendorDisplay': '智谱',
          'effort': 'max',
          'platform': 'zcode',
          'tested': '2026-08-30',
          'score': 81,
          'rank': 8,
          'pct': 84.4
        },
        {
          'name': 'qwen3.8-max-0902',
          'vendor': 'alibaba',
          'vendorDisplay': 'QWEN',
          'effort': 'xhigh',
          'platform': 'qoder',
          'tested': '2026-09-02',
          'score': 80,
          'rank': 9,
          'pct': 83.3
        },
        {
          'name': 'gpt-5.6-sol-0829',
          'vendor': 'openai',
          'vendorDisplay': 'GPT',
          'effort': 'max',
          'platform': 'codex',
          'tested': '2026-08-29',
          'score': 80,
          'rank': 9,
          'pct': 83.3
        },
        {
          'name': 'hy4-preview',
          'vendor': 'tencent',
          'vendorDisplay': '腾讯',
          'effort': 'high',
          'platform': 'workbuddy',
          'tested': '2026-08-28',
          'score': 79,
          'rank': 11,
          'pct': 82.3
        },
        {
          'name': 'gemini-3.7-flash',
          'vendor': 'google',
          'vendorDisplay': 'GOOGLE',
          'effort': 'high',
          'platform': 'antigravity',
          'tested': '2026-08-20',
          'score': 79,
          'rank': 11,
          'pct': 82.3
        },
        {
          'name': 'grok-4.6',
          'vendor': 'xai',
          'vendorDisplay': 'SPACEXAI',
          'effort': 'xhigh',
          'platform': 'cursor',
          'tested': '2026-08-15',
          'score': 79,
          'rank': 11,
          'pct': 82.3
        },
        {
          'name': 'kimi-k3',
          'vendor': 'moonshot',
          'vendorDisplay': 'KIMI',
          'effort': 'max',
          'platform': 'kimicode',
          'tested': '2026-08-17',
          'score': 78,
          'rank': 14,
          'pct': 81.3
        },
        {
          'name': 'gemini-3.8-flash',
          'vendor': 'google',
          'vendorDisplay': 'GOOGLE',
          'effort': 'high',
          'platform': 'antigravity',
          'tested': '2026-09-03',
          'score': 77,
          'rank': 15,
          'pct': 80.2
        },
        {
          'name': 'qwen3.8-max',
          'vendor': 'alibaba',
          'vendorDisplay': 'QWEN',
          'effort': 'xhigh',
          'platform': 'qoder',
          'tested': '2026-08-15',
          'score': 75,
          'rank': 16,
          'pct': 78.1
        },
        {
          'name': 'muse-spark-1.2-contributor',
          'vendor': 'meta',
          'vendorDisplay': 'META',
          'effort': 'xhigh',
          'platform': 'zcode',
          'tested': '2026-08-19',
          'score': 74,
          'rank': 17,
          'pct': 77.1
        },
        {
          'name': 'DSV4F0731',
          'vendor': 'deepseek',
          'vendorDisplay': 'DEEPSEEK',
          'effort': 'max',
          'platform': 'dsh-jspace',
          'tested': '2026-08-17',
          'score': 70,
          'rank': 18,
          'pct': 72.9
        },
        {
          'name': 'gemini-3.6-flash',
          'vendor': 'google',
          'vendorDisplay': 'GOOGLE',
          'effort': 'high',
          'platform': 'antigravity',
          'tested': '2026-08-12',
          'score': 70,
          'rank': 18,
          'pct': 72.9
        },
        {
          'name': 'seed-2.1-pro',
          'vendor': 'bytedance',
          'vendorDisplay': 'SEED',
          'effort': null,
          'platform': 'trae',
          'tested': '2026-08-12',
          'score': 64,
          'rank': 20,
          'pct': 66.7
        },
        {
          'name': 'hy3',
          'vendor': 'tencent',
          'vendorDisplay': '腾讯',
          'effort': 'high',
          'platform': 'workbuddy',
          'tested': '2026-08-15',
          'score': 64,
          'rank': 20,
          'pct': 66.7
        },
        {
          'name': 'minimax-m3-thinking',
          'vendor': 'minimax',
          'vendorDisplay': 'MINIMAX',
          'effort': null,
          'platform': 'workbuddy',
          'tested': '2026-08-10',
          'score': 62,
          'rank': 22,
          'pct': 64.6
        },
        {
          'name': 'inkling',
          'vendor': 'thinking-machines',
          'vendorDisplay': 'THINKING MACHINES',
          'effort': 'max',
          'platform': 'opencode',
          'tested': '2026-08-22',
          'score': 40,
          'rank': 23,
          'pct': 41.7
        },
        {
          'name': 'DSV4F-VE-ocgo',
          'vendor': 'deepseek',
          'vendorDisplay': 'DEEPSEEK',
          'effort': 'max',
          'platform': 'dsh',
          'tested': '2026-08-31',
          'score': 33,
          'rank': 24,
          'pct': 34.4
        },
        {
          'name': 'dots3-note-prev',
          'vendor': 'dots',
          'vendorDisplay': 'DOTS',
          'effort': 'max',
          'platform': 'zcode',
          'tested': '2026-08-20',
          'score': 32,
          'rank': 25,
          'pct': 33.3
        },
        {
          'name': 'gpt-4o',
          'vendor': 'openai',
          'vendorDisplay': 'GPT',
          'effort': null,
          'platform': 'opencode',
          'tested': '2026-08-30',
          'score': 0,
          'rank': 26,
          'pct': 0
        }
      ]
    }
  }
};
