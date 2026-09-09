// 数据源:AI 能力专项测试(atmeplz)四方向榜 · 前端/后端方向分(0-100)
// 站点:https://atmeplz.github.io/ai-test-prompt/board-04.html  (更新于 2026-09-08)
// 字段说明:score=方向分(天然以 100 为参考,越高越好);rank=源站方向内排名;weight=方向分成员题权重
// 用途:门户「AI 能力」独立榜单页(前端/后端两个方向),独立榜单不计入综合分。
window.AICAP = {
  'source': 'AI 能力专项测试 (atmeplz)',
  'url': 'https://atmeplz.github.io/ai-test-prompt/data/site.json',
  'boardUrl': 'https://atmeplz.github.io/ai-test-prompt/board-04.html',
  'updated': '2026-09-08',
  'refreshedAt': '2026-09-10 01:03',
  'runCount': 31,
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
          'name': 'gpt-6-astra',
          'vendor': 'openai',
          'vendorDisplay': 'GPT',
          'effort': 'max',
          'platform': 'codex',
          'tested': '2026-09-05',
          'score': 98.6,
          'rank': 1,
          'pct': 100
        },
        {
          'name': 'claude-fable-5',
          'vendor': 'anthropic',
          'vendorDisplay': 'CLAUDE',
          'effort': 'max',
          'platform': 'cc',
          'tested': '2026-08-21',
          'score': 96.5,
          'rank': 2,
          'pct': 97.9
        },
        {
          'name': 'deepseek-v4-pro-0821凌晨灰测',
          'vendor': 'deepseek',
          'vendorDisplay': 'DEEPSEEK',
          'effort': 'max',
          'platform': 'dsh',
          'tested': '2026-08-21',
          'score': 95.2,
          'rank': 3,
          'pct': 96.6
        },
        {
          'name': 'claude-opus-5',
          'vendor': 'anthropic',
          'vendorDisplay': 'CLAUDE',
          'effort': 'max',
          'platform': 'cc',
          'tested': '2026-08-18',
          'score': 95,
          'rank': 4,
          'pct': 96.4
        },
        {
          'name': 'hy4-preview',
          'vendor': 'tencent',
          'vendorDisplay': '腾讯',
          'effort': 'high',
          'platform': 'workbuddy',
          'tested': '2026-08-28',
          'score': 93.8,
          'rank': 5,
          'pct': 95.2
        },
        {
          'name': 'qwen3.8-flash',
          'vendor': 'alibaba',
          'vendorDisplay': 'QWEN',
          'effort': 'xhigh',
          'platform': 'qoder',
          'tested': '2026-08-31',
          'score': 91.1,
          'rank': 6,
          'pct': 92.4
        },
        {
          'name': 'deepseek-v4.1-flash-e0910',
          'vendor': 'deepseek',
          'vendorDisplay': 'DEEPSEEK',
          'effort': 'max',
          'platform': 'dsh',
          'tested': '2026-09-08',
          'score': 89.6,
          'rank': 7,
          'pct': 90.8
        },
        {
          'name': 'gemini-3.8-flash',
          'vendor': 'google',
          'vendorDisplay': 'GOOGLE',
          'effort': 'high',
          'platform': 'antigravity',
          'tested': '2026-09-03',
          'score': 89.4,
          'rank': 8,
          'pct': 90.7
        },
        {
          'name': 'gpt-5.6-sol-0829',
          'vendor': 'openai',
          'vendorDisplay': 'GPT',
          'effort': 'max',
          'platform': 'codex',
          'tested': '2026-08-29',
          'score': 88.9,
          'rank': 9,
          'pct': 90.1
        },
        {
          'name': 'gpt-5.6-cyber',
          'vendor': 'openai',
          'vendorDisplay': 'GPT',
          'effort': 'max',
          'platform': 'codex',
          'tested': '2026-09-04',
          'score': 88.7,
          'rank': 10,
          'pct': 90
        },
        {
          'name': 'gemini-3.7-flash',
          'vendor': 'google',
          'vendorDisplay': 'GOOGLE',
          'effort': 'high',
          'platform': 'antigravity',
          'tested': '2026-08-20',
          'score': 87.9,
          'rank': 11,
          'pct': 89.1
        },
        {
          'name': 'qwen3.8-max-0902',
          'vendor': 'alibaba',
          'vendorDisplay': 'QWEN',
          'effort': 'xhigh',
          'platform': 'qoder',
          'tested': '2026-09-02',
          'score': 87.5,
          'rank': 12,
          'pct': 88.7
        },
        {
          'name': 'kimi-k3',
          'vendor': 'moonshot',
          'vendorDisplay': 'KIMI',
          'effort': 'max',
          'platform': 'kimicode',
          'tested': '2026-08-17',
          'score': 87.1,
          'rank': 13,
          'pct': 88.4
        },
        {
          'name': 'glm-5.3-flash',
          'vendor': 'zhipu',
          'vendorDisplay': '智谱',
          'effort': 'max',
          'platform': 'zcode',
          'tested': '2026-08-30',
          'score': 85.7,
          'rank': 14,
          'pct': 86.9
        },
        {
          'name': 'glm-5.3',
          'vendor': 'zhipu',
          'vendorDisplay': '智谱',
          'effort': 'max',
          'platform': 'zcode',
          'tested': '2026-08-16',
          'score': 85.6,
          'rank': 15,
          'pct': 86.9
        },
        {
          'name': 'qwen3.8-max',
          'vendor': 'alibaba',
          'vendorDisplay': 'QWEN',
          'effort': 'xhigh',
          'platform': 'qoder',
          'tested': '2026-08-15',
          'score': 85.6,
          'rank': 16,
          'pct': 86.8
        },
        {
          'name': 'grok-4.6',
          'vendor': 'xai',
          'vendorDisplay': 'SPACEXAI',
          'effort': 'xhigh',
          'platform': 'cursor',
          'tested': '2026-08-15',
          'score': 85.2,
          'rank': 17,
          'pct': 86.4
        },
        {
          'name': 'glm-5.3',
          'vendor': 'zhipu',
          'vendorDisplay': '智谱',
          'effort': 'max',
          'platform': 'qoder',
          'tested': '2026-08-14',
          'score': 84.1,
          'rank': 18,
          'pct': 85.3
        },
        {
          'name': 'DSV4F0731',
          'vendor': 'deepseek',
          'vendorDisplay': 'DEEPSEEK',
          'effort': 'max',
          'platform': 'dsh-jspace',
          'tested': '2026-08-17',
          'score': 84.1,
          'rank': 19,
          'pct': 85.3
        },
        {
          'name': 'ox-alpha',
          'vendor': 'stealth',
          'vendorDisplay': 'STEALTH',
          'effort': 'max',
          'platform': 'opencode',
          'tested': '2026-08-22',
          'score': 81.5,
          'rank': 20,
          'pct': 82.6
        },
        {
          'name': 'omen-alpha',
          'vendor': 'stealth',
          'vendorDisplay': 'STEALTH',
          'effort': 'high',
          'platform': 'opencode',
          'tested': '2026-09-07',
          'score': 79.9,
          'rank': 21,
          'pct': 81.1
        },
        {
          'name': 'muse-spark-1.2-contributor',
          'vendor': 'meta',
          'vendorDisplay': 'META',
          'effort': 'xhigh',
          'platform': 'zcode',
          'tested': '2026-08-19',
          'score': 78.8,
          'rank': 22,
          'pct': 79.9
        },
        {
          'name': 'muse-spark-1.3',
          'vendor': 'meta',
          'vendorDisplay': 'META',
          'effort': 'xhigh',
          'platform': 'opencode',
          'tested': '2026-09-03',
          'score': 78.4,
          'rank': 23,
          'pct': 79.6
        },
        {
          'name': 'DSV4F-VE-ocgo',
          'vendor': 'deepseek',
          'vendorDisplay': 'DEEPSEEK',
          'effort': 'max',
          'platform': 'dsh',
          'tested': '2026-08-31',
          'score': 75.6,
          'rank': 24,
          'pct': 76.6
        },
        {
          'name': 'gemini-3.6-flash',
          'vendor': 'google',
          'vendorDisplay': 'GOOGLE',
          'effort': 'high',
          'platform': 'antigravity',
          'tested': '2026-08-12',
          'score': 73.8,
          'rank': 25,
          'pct': 74.9
        },
        {
          'name': 'hy3',
          'vendor': 'tencent',
          'vendorDisplay': '腾讯',
          'effort': 'high',
          'platform': 'workbuddy',
          'tested': '2026-08-15',
          'score': 71,
          'rank': 26,
          'pct': 72
        },
        {
          'name': 'minimax-m3-thinking',
          'vendor': 'minimax',
          'vendorDisplay': 'MINIMAX',
          'effort': null,
          'platform': 'workbuddy',
          'tested': '2026-08-10',
          'score': 66.3,
          'rank': 27,
          'pct': 67.2
        },
        {
          'name': 'seed-2.1-pro',
          'vendor': 'bytedance',
          'vendorDisplay': 'SEED',
          'effort': null,
          'platform': 'trae',
          'tested': '2026-08-12',
          'score': 59.9,
          'rank': 28,
          'pct': 60.8
        },
        {
          'name': 'inkling',
          'vendor': 'thinking-machines',
          'vendorDisplay': 'THINKING MACHINES',
          'effort': 'max',
          'platform': 'opencode',
          'tested': '2026-08-22',
          'score': 56.5,
          'rank': 29,
          'pct': 57.3
        },
        {
          'name': 'gpt-4o',
          'vendor': 'openai',
          'vendorDisplay': 'GPT',
          'effort': null,
          'platform': 'opencode',
          'tested': '2026-08-30',
          'score': 42,
          'rank': 30,
          'pct': 42.6
        },
        {
          'name': 'dots3-note-prev',
          'vendor': 'dots',
          'vendorDisplay': 'DOTS',
          'effort': 'max',
          'platform': 'zcode',
          'tested': '2026-08-20',
          'score': 22.3,
          'rank': 31,
          'pct': 22.6
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
          'name': 'gpt-6-astra',
          'vendor': 'openai',
          'vendorDisplay': 'GPT',
          'effort': 'max',
          'platform': 'codex',
          'tested': '2026-09-05',
          'score': 103.1,
          'rank': 1,
          'pct': 100
        },
        {
          'name': 'claude-fable-5',
          'vendor': 'anthropic',
          'vendorDisplay': 'CLAUDE',
          'effort': 'max',
          'platform': 'cc',
          'tested': '2026-08-21',
          'score': 96,
          'rank': 2,
          'pct': 93.1
        },
        {
          'name': 'deepseek-v4-pro-0821凌晨灰测',
          'vendor': 'deepseek',
          'vendorDisplay': 'DEEPSEEK',
          'effort': 'max',
          'platform': 'dsh',
          'tested': '2026-08-21',
          'score': 96,
          'rank': 2,
          'pct': 93.1
        },
        {
          'name': 'glm-5.3',
          'vendor': 'zhipu',
          'vendorDisplay': '智谱',
          'effort': 'max',
          'platform': 'zcode',
          'tested': '2026-08-16',
          'score': 96,
          'rank': 2,
          'pct': 93.1
        },
        {
          'name': 'qwen3.8-flash',
          'vendor': 'alibaba',
          'vendorDisplay': 'QWEN',
          'effort': 'xhigh',
          'platform': 'qoder',
          'tested': '2026-08-31',
          'score': 94,
          'rank': 5,
          'pct': 91.2
        },
        {
          'name': 'glm-5.3',
          'vendor': 'zhipu',
          'vendorDisplay': '智谱',
          'effort': 'max',
          'platform': 'qoder',
          'tested': '2026-08-14',
          'score': 94,
          'rank': 5,
          'pct': 91.2
        },
        {
          'name': 'claude-opus-5',
          'vendor': 'anthropic',
          'vendorDisplay': 'CLAUDE',
          'effort': 'max',
          'platform': 'cc',
          'tested': '2026-08-18',
          'score': 90,
          'rank': 7,
          'pct': 87.3
        },
        {
          'name': 'muse-spark-1.3',
          'vendor': 'meta',
          'vendorDisplay': 'META',
          'effort': 'xhigh',
          'platform': 'opencode',
          'tested': '2026-09-03',
          'score': 83.1,
          'rank': 8,
          'pct': 80.6
        },
        {
          'name': 'ox-alpha',
          'vendor': 'stealth',
          'vendorDisplay': 'STEALTH',
          'effort': 'max',
          'platform': 'opencode',
          'tested': '2026-08-22',
          'score': 82,
          'rank': 9,
          'pct': 79.5
        },
        {
          'name': 'glm-5.3-flash',
          'vendor': 'zhipu',
          'vendorDisplay': '智谱',
          'effort': 'max',
          'platform': 'zcode',
          'tested': '2026-08-30',
          'score': 81,
          'rank': 10,
          'pct': 78.6
        },
        {
          'name': 'qwen3.8-max-0902',
          'vendor': 'alibaba',
          'vendorDisplay': 'QWEN',
          'effort': 'xhigh',
          'platform': 'qoder',
          'tested': '2026-09-02',
          'score': 80,
          'rank': 11,
          'pct': 77.6
        },
        {
          'name': 'omen-alpha',
          'vendor': 'stealth',
          'vendorDisplay': 'STEALTH',
          'effort': 'high',
          'platform': 'opencode',
          'tested': '2026-09-07',
          'score': 80,
          'rank': 11,
          'pct': 77.6
        },
        {
          'name': 'gpt-5.6-sol-0829',
          'vendor': 'openai',
          'vendorDisplay': 'GPT',
          'effort': 'max',
          'platform': 'codex',
          'tested': '2026-08-29',
          'score': 80,
          'rank': 11,
          'pct': 77.6
        },
        {
          'name': 'gpt-5.6-cyber',
          'vendor': 'openai',
          'vendorDisplay': 'GPT',
          'effort': 'max',
          'platform': 'codex',
          'tested': '2026-09-04',
          'score': 80,
          'rank': 11,
          'pct': 77.6
        },
        {
          'name': 'deepseek-v4.1-flash-e0910',
          'vendor': 'deepseek',
          'vendorDisplay': 'DEEPSEEK',
          'effort': 'max',
          'platform': 'dsh',
          'tested': '2026-09-08',
          'score': 79.5,
          'rank': 15,
          'pct': 77.1
        },
        {
          'name': 'hy4-preview',
          'vendor': 'tencent',
          'vendorDisplay': '腾讯',
          'effort': 'high',
          'platform': 'workbuddy',
          'tested': '2026-08-28',
          'score': 79,
          'rank': 16,
          'pct': 76.6
        },
        {
          'name': 'gemini-3.7-flash',
          'vendor': 'google',
          'vendorDisplay': 'GOOGLE',
          'effort': 'high',
          'platform': 'antigravity',
          'tested': '2026-08-20',
          'score': 79,
          'rank': 16,
          'pct': 76.6
        },
        {
          'name': 'grok-4.6',
          'vendor': 'xai',
          'vendorDisplay': 'SPACEXAI',
          'effort': 'xhigh',
          'platform': 'cursor',
          'tested': '2026-08-15',
          'score': 79,
          'rank': 16,
          'pct': 76.6
        },
        {
          'name': 'kimi-k3',
          'vendor': 'moonshot',
          'vendorDisplay': 'KIMI',
          'effort': 'max',
          'platform': 'kimicode',
          'tested': '2026-08-17',
          'score': 78,
          'rank': 19,
          'pct': 75.7
        },
        {
          'name': 'gemini-3.8-flash',
          'vendor': 'google',
          'vendorDisplay': 'GOOGLE',
          'effort': 'high',
          'platform': 'antigravity',
          'tested': '2026-09-03',
          'score': 77,
          'rank': 20,
          'pct': 74.7
        },
        {
          'name': 'qwen3.8-max',
          'vendor': 'alibaba',
          'vendorDisplay': 'QWEN',
          'effort': 'xhigh',
          'platform': 'qoder',
          'tested': '2026-08-15',
          'score': 75,
          'rank': 21,
          'pct': 72.7
        },
        {
          'name': 'muse-spark-1.2-contributor',
          'vendor': 'meta',
          'vendorDisplay': 'META',
          'effort': 'xhigh',
          'platform': 'zcode',
          'tested': '2026-08-19',
          'score': 74,
          'rank': 22,
          'pct': 71.8
        },
        {
          'name': 'DSV4F0731',
          'vendor': 'deepseek',
          'vendorDisplay': 'DEEPSEEK',
          'effort': 'max',
          'platform': 'dsh-jspace',
          'tested': '2026-08-17',
          'score': 70,
          'rank': 23,
          'pct': 67.9
        },
        {
          'name': 'gemini-3.6-flash',
          'vendor': 'google',
          'vendorDisplay': 'GOOGLE',
          'effort': 'high',
          'platform': 'antigravity',
          'tested': '2026-08-12',
          'score': 70,
          'rank': 23,
          'pct': 67.9
        },
        {
          'name': 'seed-2.1-pro',
          'vendor': 'bytedance',
          'vendorDisplay': 'SEED',
          'effort': null,
          'platform': 'trae',
          'tested': '2026-08-12',
          'score': 64,
          'rank': 25,
          'pct': 62.1
        },
        {
          'name': 'hy3',
          'vendor': 'tencent',
          'vendorDisplay': '腾讯',
          'effort': 'high',
          'platform': 'workbuddy',
          'tested': '2026-08-15',
          'score': 64,
          'rank': 25,
          'pct': 62.1
        },
        {
          'name': 'minimax-m3-thinking',
          'vendor': 'minimax',
          'vendorDisplay': 'MINIMAX',
          'effort': null,
          'platform': 'workbuddy',
          'tested': '2026-08-10',
          'score': 62,
          'rank': 27,
          'pct': 60.1
        },
        {
          'name': 'inkling',
          'vendor': 'thinking-machines',
          'vendorDisplay': 'THINKING MACHINES',
          'effort': 'max',
          'platform': 'opencode',
          'tested': '2026-08-22',
          'score': 40,
          'rank': 28,
          'pct': 38.8
        },
        {
          'name': 'DSV4F-VE-ocgo',
          'vendor': 'deepseek',
          'vendorDisplay': 'DEEPSEEK',
          'effort': 'max',
          'platform': 'dsh',
          'tested': '2026-08-31',
          'score': 33,
          'rank': 29,
          'pct': 32
        },
        {
          'name': 'dots3-note-prev',
          'vendor': 'dots',
          'vendorDisplay': 'DOTS',
          'effort': 'max',
          'platform': 'zcode',
          'tested': '2026-08-20',
          'score': 32,
          'rank': 30,
          'pct': 31
        },
        {
          'name': 'gpt-4o',
          'vendor': 'openai',
          'vendorDisplay': 'GPT',
          'effort': null,
          'platform': 'opencode',
          'tested': '2026-08-30',
          'score': 0,
          'rank': 31,
          'pct': 0
        }
      ]
    }
  }
};
