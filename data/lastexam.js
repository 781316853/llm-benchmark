// 数据源:Agents' Last Exam(UC Berkeley RDI 真实专业工作流评测,更新于 2026-09-11)
// 来源:https://llm-stats.com/benchmarks/agents-last-exam(官方:https://agents-last-exam.org/leaderboard)
// 字段说明:model=模型名;score=Pass@1(%);org=厂商;size=参数量;context=上下文;cost=API 价格
// 用途:「权威基准测试」页展示,仅参考,不计入综合分/命中数。
window.LASTEXAM = {
  'source': 'Agents\' Last Exam',
  'url': 'https://llm-stats.com/benchmarks/agents-last-exam',
  'officialUrl': 'https://agents-last-exam.org/leaderboard',
  'updated': '2026-09-11',
  'refreshedAt': '2026-09-11 13:39',
  'stats': {
    'tasks': 1490,
    'entries': 17
  },
  'desc': 'Agents\' Last Exam(ALE):UC Berkeley 主导的覆盖最广的专业工作流评测(1500+ 任务、55 子行业、300+ 领域专家共建),Pass@1 越高越好。',
  'models': [
    {
      'rank': 1,
      'model': 'GPT-6 Astra',
      'org': 'OpenAI',
      'score': 59.3,
      'size': '—',
      'context': '1.1M',
      'cost': '$ 10.00 / $ 50.00'
    },
    {
      'rank': 2,
      'model': 'GPT-5.6 Sol',
      'org': 'OpenAI',
      'score': 52.7,
      'size': '—',
      'context': '1.1M',
      'cost': '$ 5.00 / $ 30.00'
    },
    {
      'rank': 3,
      'model': 'Qwen3.8 Max',
      'org': 'Alibaba Cloud / Qwen Team',
      'score': 52.4,
      'size': '2.4T',
      'context': '1.0M',
      'cost': '$ 1.65 / $ 4.95'
    },
    {
      'rank': 4,
      'model': 'Qwen3.8-Flash-Next',
      'org': 'Alibaba Cloud / Qwen Team',
      'score': 51.2,
      'size': '125B',
      'context': '—',
      'cost': '—'
    },
    {
      'rank': 4,
      'model': 'Qwen3.8 Flash',
      'org': 'Alibaba Cloud / Qwen Team',
      'score': 51.2,
      'size': '125B',
      'context': '1.0M',
      'cost': '$ 0.15 / $ 0.47'
    },
    {
      'rank': 6,
      'model': 'GPT-5.6 Terra',
      'org': 'OpenAI',
      'score': 50.4,
      'size': '—',
      'context': '1.1M',
      'cost': '$ 2.00 / $ 12.00'
    },
    {
      'rank': 7,
      'model': 'GPT-5.6 Luna',
      'org': 'OpenAI',
      'score': 50.3,
      'size': '—',
      'context': '1.1M',
      'cost': '$ 0.20 / $ 1.20'
    },
    {
      'rank': 8,
      'model': 'Qwen3.8-27B',
      'org': 'Alibaba Cloud / Qwen Team',
      'score': 42.9,
      'size': '28B',
      'context': '262K',
      'cost': '$ 0.40 / $ 3.00'
    },
    {
      'rank': 9,
      'model': 'Seed 2.1 Pro',
      'org': 'ByteDance',
      'score': 41.4,
      'size': '—',
      'context': '—',
      'cost': '—'
    },
    {
      'rank': 10,
      'model': 'DeepSeek-V4.1-Flash',
      'org': 'DeepSeek',
      'score': 31.8,
      'size': '763B',
      'context': '1.0M',
      'cost': '$ 0.22 / $ 0.66'
    },
    {
      'rank': 11,
      'model': 'GLM-5.3',
      'org': 'Zhipu AI',
      'score': 28.5,
      'size': '753B',
      'context': '1.0M',
      'cost': '$ 1.20 / $ 4.00'
    },
    {
      'rank': 12,
      'model': 'DeepSeek-V4-Flash-Vision-Exp',
      'org': 'DeepSeek',
      'score': 27.3,
      'size': '—',
      'context': '1.0M',
      'cost': '$ 0.44 / $ 1.32'
    },
    {
      'rank': 13,
      'model': 'GLM-5.3-Flash',
      'org': 'Zhipu AI',
      'score': 26.3,
      'size': '320B',
      'context': '1.0M',
      'cost': '$ 0.15 / $ 0.50'
    },
    {
      'rank': 13,
      'model': 'Gemini 3.7 Flash',
      'org': 'Google',
      'score': 26.3,
      'size': '—',
      'context': '1.0M',
      'cost': '$ 0.75 / $ 3.75'
    },
    {
      'rank': 15,
      'model': 'DeepSeek-V4-Pro-0813',
      'org': 'DeepSeek',
      'score': 25.7,
      'size': '1.6T',
      'context': '1.0M',
      'cost': '$ 0.43 / $ 0.87'
    },
    {
      'rank': 16,
      'model': 'DeepSeek-V4-Flash-0731',
      'org': 'DeepSeek',
      'score': 25.2,
      'size': '304B',
      'context': '1.0M',
      'cost': '$ 0.06 / $ 0.18'
    },
    {
      'rank': 17,
      'model': 'Hy4 preview',
      'org': 'Tencent',
      'score': 22.8,
      'size': '770B',
      'context': '—',
      'cost': '—'
    }
  ]
};
