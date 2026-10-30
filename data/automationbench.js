// 数据源:AutomationBench(Zapier 跨应用业务工作流智能体基准,更新于 2026-10-30)
// 主渠道:https://www.datalearner.com/benchmarks/automation-bench(厂商官方发布成绩转录)
// 补充:https://llm-stats.com/benchmarks/automationbench(官方:https://zapier.com/benchmarks)
// 补充:https://benchlm.ai/benchmarks/automationbench(benchlm 镜像)
// 补充:https://aireleasetracker.com/benchmark/automationbench(第三方聚合 T3,只补缺失模型)
// 官方榜说明:zapier.com/benchmarks 原始 HTML 只渲染 Top 10(其余行由前端展开),且主榜用私有 held-out 集,故仅作来源链接
// 出处校验:datalearner 转录行中 evidence 缺 sourceUrl 的按最低层级处理(src=datalearner-unsourced,仅补缺、不覆盖有出处数据)
// 渠道优先级:基准官方实测榜 > 厂商官方发布(论文/发布页)> 第三方聚合与镜像;低层级仅补缺失模型与字段,不覆盖高层级分数
// 字段说明:model=模型名;score=严格全通过率 task_completed_correctly(%);org=厂商;size=参数量;context=上下文;cost=API 价格;effort=评测模式;date=发布日期;src=数据来源渠道(datalearner/datalearner-unsourced/llm-stats/benchlm/aireleasetracker)
// 用途:「权威基准测试」页展示,仅参考,不计入综合分/命中数。
window.AUTOMATIONBENCH = {
  'source': 'AutomationBench',
  'url': 'https://llm-stats.com/benchmarks/automationbench',
  'officialUrl': 'https://zapier.com/benchmarks',
  'repoUrl': 'https://github.com/zapier/AutomationBench',
  'paperUrl': 'https://arxiv.org/abs/2604.18934',
  'channelPolicy': '渠道优先级:基准官方实测榜 > 厂商官方发布(论文/发布页)> 第三方聚合与镜像;低层级仅补缺失模型与字段,不覆盖高层级分数',
  'updated': '2026-10-30',
  'refreshedAt': '2026-10-30 08:06',
  'stats': {
    'tasks': 600,
    'domains': 6,
    'tools': 47,
    'entries': 41,
    'unsourced': 6
  },
  'desc': 'AutomationBench(Zapier):跨应用业务工作流智能体基准,600 个公开任务分布在 47 个模拟 SaaS 工具、6 个业务域(销售/营销/运营/客服/财务/HR),把一个真实运营请求交给智能体、再按最终环境状态做确定性断言打分(不看回复文本、无 LLM-as-judge);主指标为严格全通过率 task_completed_correctly,越高越好。分数普遍偏低,主因是「宣称完成但环境状态错误」的假自信。',
  'models': [
    {
      'model': 'MiniMax M3.1 Flash',
      'org': 'MiniMaxAI',
      'score': 62.8,
      'license': '有条件免费商用授权',
      'effort': '最高（工具）',
      'date': '2026-10-19',
      'src': 'datalearner',
      'rank': 1
    },
    {
      'model': 'DeepSeek-V4.1-Flash-1017',
      'org': 'DeepSeek-AI',
      'score': 60.5,
      'license': '免费商用授权',
      'effort': '思考档位未公开（工具）',
      'date': '2026-10-17',
      'src': 'datalearner',
      'size': '763B',
      'context': '1.0M',
      'cost': '$ 0.30 / $ 1.20',
      'rank': 2
    },
    {
      'rank': 3,
      'model': 'Mistral Large 4',
      'org': 'Mistral AI',
      'score': 59.9,
      'size': '1.1T',
      'context': '1.0M',
      'cost': '$ 0.70 / $ 2.10',
      'license': null,
      'src': 'llm-stats'
    },
    {
      'model': 'DeepSeek-V4.1-Flash',
      'org': 'DeepSeek-AI',
      'score': 54.8,
      'license': '免费商用授权',
      'effort': '最高（工具）',
      'date': '2026-09-10',
      'src': 'datalearner',
      'size': '763B',
      'context': '1.0M',
      'cost': '$ 0.22 / $ 0.66',
      'rank': 4
    },
    {
      'model': 'Gemini 4 Carbon',
      'org': 'Google DeepMind',
      'score': 53.88,
      'license': '不开源',
      'effort': '思考模式 High（工具）',
      'date': '2026-10-28',
      'src': 'datalearner',
      'size': '—',
      'context': '—',
      'cost': '—',
      'rank': 5
    },
    {
      'model': 'Atria Dawn Preview',
      'org': 'Shanghai Artificial Intelligence Laboratory',
      'score': 53.8,
      'src': 'benchlm',
      'rank': 6
    },
    {
      'model': 'MiMo-V2.6-Pro',
      'org': '小米',
      'score': 53.1,
      'license': '免费商用授权',
      'effort': '思考模式（工具）',
      'date': '2026-09-22',
      'src': 'datalearner',
      'rank': 7
    },
    {
      'model': 'Ling 3.1 Flash',
      'org': 'InclusionAI',
      'score': 52.5,
      'src': 'benchlm',
      'rank': 8
    },
    {
      'model': 'MiMo-V2.6-Flash',
      'org': '小米',
      'score': 52.3,
      'license': '免费商用授权',
      'effort': '思考模式（工具）',
      'date': '2026-09-22',
      'src': 'datalearner',
      'rank': 9
    },
    {
      'model': 'Gemini 4 Argon',
      'org': 'Google DeepMind',
      'score': 51.3,
      'license': '不开源',
      'effort': '最高（工具）',
      'date': '2026-10-13',
      'src': 'datalearner',
      'size': '—',
      'context': '1.0M',
      'cost': '$ 2.00 / $ 10.00',
      'rank': 10
    },
    {
      'model': 'Qwen3.8-Max-0902',
      'org': '阿里巴巴',
      'score': 50.8,
      'license': '不开源',
      'effort': '极高强度思考（工具）',
      'date': '2026-09-02',
      'src': 'datalearner-unsourced',
      'rank': 11
    },
    {
      'model': 'Ultramarine 1 Flash',
      'org': 'Paper Instruments',
      'score': 50.2,
      'src': 'benchlm',
      'rank': 12
    },
    {
      'rank': 13,
      'model': 'Muse Spark 1.3',
      'org': 'Meta',
      'score': 49.4,
      'size': '—',
      'context': '1.0M',
      'cost': '$ 0.10 / $ 0.20',
      'license': '不开源',
      'src': 'llm-stats',
      'effort': '最高（工具）',
      'date': '2026-09-02'
    },
    {
      'model': 'GLM-5.3-Flash',
      'org': '智谱AI',
      'score': 48.8,
      'license': '免费商用授权',
      'effort': '最高（工具）',
      'date': '2026-08-26',
      'src': 'datalearner',
      'size': '320B',
      'context': '1.0M',
      'cost': '$ 0.15 / $ 0.50',
      'rank': 14
    },
    {
      'model': 'GLM-5.3',
      'org': '智谱AI',
      'score': 48.2,
      'license': '有条件免费商用授权',
      'effort': '最高（工具）',
      'date': '2026-08-14',
      'src': 'datalearner',
      'size': '753B',
      'context': '1.0M',
      'cost': '$ 1.20 / $ 4.00',
      'rank': 15
    },
    {
      'model': 'Claude Sonnet 5.5',
      'org': 'Anthropic',
      'score': 44.7,
      'license': '不开源',
      'effort': '最高（工具）',
      'date': '2026-09-28',
      'src': 'datalearner',
      'size': '—',
      'context': '1.0M',
      'cost': '$ 2.00 / $ 10.00',
      'rank': 16
    },
    {
      'model': 'Step 5 Preview',
      'org': 'StepFunAI',
      'score': 44,
      'license': '有条件免费商用授权（Apache-2.0 风格，附署名与商用许可条件）',
      'effort': '思考模式 High（工具）',
      'date': '2026-09-20',
      'src': 'datalearner',
      'rank': 17
    },
    {
      'model': 'GPT-6 Astra',
      'org': 'OpenAI',
      'score': 41.4,
      'license': '不开源',
      'effort': '最高（工具）',
      'date': '2026-09-03',
      'src': 'datalearner',
      'size': '—',
      'context': '1.1M',
      'cost': '$ 10.00 / $ 50.00',
      'rank': 18
    },
    {
      'model': 'LFM3-1.7B',
      'org': 'LiquidAI',
      'score': 41.29,
      'src': 'benchlm',
      'rank': 19
    },
    {
      'model': 'Claude Opus 5.5',
      'org': 'Anthropic',
      'score': 40,
      'license': '不开源',
      'effort': '最高（工具）',
      'date': '2026-09-22',
      'src': 'datalearner',
      'size': '—',
      'context': '1.0M',
      'cost': '$ 4.00 / $ 20.00',
      'rank': 20
    },
    {
      'rank': 21,
      'model': 'Beam 1.0',
      'org': 'Reflection AI',
      'score': 39.3,
      'size': '501B',
      'context': '1.0M',
      'cost': '$ 0.40 / $ 1.20',
      'license': null,
      'src': 'llm-stats'
    },
    {
      'model': 'DeepSeek-V4-Flash',
      'org': 'DeepSeek-AI',
      'score': 37.7,
      'license': '免费商用授权',
      'effort': '最高（工具）',
      'date': '2026-04-24',
      'src': 'datalearner-unsourced',
      'rank': 22
    },
    {
      'model': 'Beam',
      'org': 'Reflection AI',
      'score': 37,
      'license': '免费商用授权',
      'effort': '思考档位未公开（工具）',
      'date': '2026-10-05',
      'src': 'datalearner',
      'rank': 23
    },
    {
      'model': 'GPT-6.1 Sol',
      'org': 'OpenAI',
      'score': 36.1,
      'src': 'benchlm',
      'rank': 24
    },
    {
      'model': 'GPT-6 Sol',
      'org': 'OpenAI',
      'score': 33.2,
      'src': 'benchlm',
      'rank': 25
    },
    {
      'rank': 26,
      'model': 'Hy4 preview',
      'org': 'Tencent',
      'score': 32.1,
      'size': '770B',
      'context': '—',
      'cost': '—',
      'license': null,
      'src': 'llm-stats'
    },
    {
      'rank': 27,
      'model': 'DeepSeek-V4-Pro-0813',
      'org': 'DeepSeek',
      'score': 31.8,
      'size': '1.6T',
      'context': '1.0M',
      'cost': '$ 1.30 / $ 2.60',
      'license': null,
      'src': 'llm-stats'
    },
    {
      'rank': 28,
      'model': 'Claude Fable 5.1',
      'org': 'Anthropic',
      'score': 31.4,
      'size': '—',
      'context': '1.0M',
      'cost': '$ 10.00 / $ 50.00',
      'license': null,
      'src': 'llm-stats'
    },
    {
      'rank': 29,
      'model': 'Kimi K3',
      'org': 'Moonshot AI',
      'score': 30.8,
      'size': '2.8T',
      'context': '1.0M',
      'cost': '$ 2.85 / $ 14.25',
      'license': '有条件免费商用授权',
      'src': 'llm-stats',
      'effort': '最高（工具）',
      'date': '2026-07-16'
    },
    {
      'rank': 30,
      'model': 'Gemini 3.7 Flash',
      'org': 'Google',
      'score': 30.4,
      'size': '—',
      'context': '1.0M',
      'cost': '$ 0.75 / $ 3.75',
      'license': null,
      'src': 'llm-stats'
    },
    {
      'model': 'LFM2.5-24B-A2B',
      'org': 'LiquidAI',
      'score': 27.69,
      'src': 'benchlm',
      'rank': 31
    },
    {
      'rank': 32,
      'model': 'Qwen3.8 Max',
      'org': 'Alibaba Cloud / Qwen Team',
      'score': 27.3,
      'size': '2.4T',
      'context': '1.0M',
      'cost': '$ 1.65 / $ 4.95',
      'license': null,
      'src': 'llm-stats'
    },
    {
      'rank': 33,
      'model': 'Claude Opus 5',
      'org': 'Anthropic',
      'score': 26,
      'size': '—',
      'context': '1.0M',
      'cost': '$ 5.00 / $ 25.00',
      'license': '不开源',
      'src': 'llm-stats',
      'effort': '最高（工具）',
      'date': '2026-07-24'
    },
    {
      'rank': 34,
      'model': 'DeepSeek-V4-Flash-Vision-Exp',
      'org': 'DeepSeek',
      'score': 25.7,
      'size': '—',
      'context': '1.0M',
      'cost': '$ 0.44 / $ 1.32',
      'license': null,
      'src': 'llm-stats'
    },
    {
      'rank': 35,
      'model': 'K2 Horizon 375B-A23B',
      'org': 'Institute of Foundation Models',
      'score': 25.3,
      'size': '375B',
      'context': '—',
      'cost': '—',
      'license': null,
      'src': 'llm-stats'
    },
    {
      'rank': 36,
      'model': 'DeepSeek-V4-Flash-0731',
      'org': 'DeepSeek',
      'score': 25.1,
      'size': '304B',
      'context': '1.0M',
      'cost': '$ 0.06 / $ 0.18',
      'license': null,
      'src': 'llm-stats'
    },
    {
      'rank': 37,
      'model': 'GPT-5.6 Sol',
      'org': 'OpenAI',
      'score': 18.1,
      'size': '—',
      'context': '1.1M',
      'cost': '$ 5.00 / $ 30.00',
      'license': '不开源',
      'src': 'llm-stats',
      'effort': '最高（工具）',
      'date': '2026-06-26'
    },
    {
      'rank': 38,
      'model': 'Claude Fable 5',
      'org': 'Anthropic',
      'score': 17.4,
      'size': '—',
      'context': '1.0M',
      'cost': '$ 10.00 / $ 50.00',
      'license': null,
      'src': 'llm-stats'
    },
    {
      'rank': 39,
      'model': 'GPT-5.6 Terra',
      'org': 'OpenAI',
      'score': 15.2,
      'size': '—',
      'context': '1.1M',
      'cost': '$ 2.00 / $ 12.00',
      'license': null,
      'src': 'llm-stats'
    },
    {
      'rank': 40,
      'model': 'GPT-5.6 Luna',
      'org': 'OpenAI',
      'score': 14.9,
      'size': '—',
      'context': '1.1M',
      'cost': '$ 0.20 / $ 1.20',
      'license': null,
      'src': 'llm-stats'
    },
    {
      'rank': 41,
      'model': 'Claude Sonnet 5',
      'org': 'Anthropic',
      'score': 13.5,
      'size': '—',
      'context': '1.0M',
      'cost': '$ 2.00 / $ 10.00',
      'license': null,
      'src': 'llm-stats'
    }
  ]
};
