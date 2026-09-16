// 数据源:Terminal-Bench-Science 0.1(斯坦福/Laude 科研工作流评测,更新于 2026-09-16)
// 来源:https://www.explainx.ai/blog/terminal-bench-science-ai-scientific-research-benchmark-august-2026(官方:https://www.terminal-bench-science.ai/announcement)
// 渠道优先级:基准官方实测榜 > 厂商官方发布(论文/发布页)> 第三方聚合与镜像;低层级仅补缺失模型与字段,不覆盖高层级分数(本榜无更高优先级渠道,explainx 为唯一 T3 镜像)
// 字段说明:model=模型名;agent=Agent 框架;score=解决率(%);src=数据来源渠道(mirror)
// 用途:「权威基准测试」页展示,仅参考,不计入综合分/命中数。
window.TBSCIENCE = {
  'source': 'Terminal-Bench-Science',
  'url': 'https://www.explainx.ai/blog/terminal-bench-science-ai-scientific-research-benchmark-august-2026',
  'announcementUrl': 'https://www.terminal-bench-science.ai/announcement',
  'channelPolicy': '渠道优先级:基准官方实测榜 > 厂商官方发布(论文/发布页)> 第三方聚合与镜像;低层级仅补缺失模型与字段,不覆盖高层级分数',
  'version': '0.1',
  'updated': '2026-09-16',
  'refreshedAt': '2026-09-16 13:41',
  'stats': {
    'tasks': 70,
    'entries': 9
  },
  'desc': 'Terminal-Bench-Science 0.1:由斯坦福与 Laude 团队联合各学科专家构建的科研工作流评测(70 个任务,来自真实研究流程,每任务 3 次独立试验),解决率越高越好。',
  'models': [
    {
      'model': 'Claude Opus 5',
      'agent': 'Claude Code',
      'score': 30,
      'src': 'mirror',
      'rank': 1
    },
    {
      'model': 'GPT-5.6 Sol',
      'agent': 'Codex',
      'score': 22.4,
      'src': 'mirror',
      'rank': 2
    },
    {
      'model': 'Claude Fable 5',
      'agent': 'Claude Code',
      'score': 21.4,
      'src': 'mirror',
      'rank': 3
    },
    {
      'model': 'Claude Opus 4.8',
      'agent': 'Claude Code',
      'score': 10.5,
      'src': 'mirror',
      'rank': 4
    },
    {
      'model': 'GPT-5.6 Terra',
      'agent': 'Codex',
      'score': 8.6,
      'src': 'mirror',
      'rank': 5
    },
    {
      'model': 'GLM 5.3',
      'agent': 'Claude Code',
      'score': 8.1,
      'src': 'mirror',
      'rank': 6
    },
    {
      'model': 'Kimi K3',
      'agent': 'Claude Code',
      'score': 7.1,
      'src': 'mirror',
      'rank': 7
    },
    {
      'model': 'Grok 4.6',
      'agent': 'Grok Build',
      'score': 7.1,
      'src': 'mirror',
      'rank': 8
    },
    {
      'model': 'GPT-5.6 Luna',
      'agent': 'Codex',
      'score': 3.3,
      'src': 'mirror',
      'rank': 9
    }
  ]
};
