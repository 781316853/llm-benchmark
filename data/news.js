// AI 热点新闻快照(由 scripts/lib/news.js 每日抓取维护,每日 2 次)
// 来源:「橘鸦AI早报」官方 RSS https://daily.juya.uk/rss.xml(每日整篇早报拆成逐条);仅保留最近 2 天
// 字段说明:date=新闻日期(UTC);title=标题;brief=简要;url=详情链接;source=来源;type=新闻类型(早报正文分类)
window.NEWS = {
  'updated': '2026-10-08',
  'retentionDays': 2,
  'types': [
    '要闻',
    '开发生态',
    '模型发布'
  ],
  'items': [
    {
      'date': '2026-10-08',
      'title': 'Anthropic 发布 Claude Haiku 5.5：平均成本降约 75%',
      'brief': 'Anthropic 发布 Claude Haiku 5.5 ，定位高吞吐、成本敏感和低延迟任务，包括摘要、分类、数据库查询、实时客服、浏览器操作，以及作为 Opus 5.5 、 Sonnet 5.5 的编程子智能体。',
      'url': 'https://www.anthropic.com/claude-haiku-5-5',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-10-08',
      'title': 'OpenAI 向全员推送 GPT-6，上线智能交互界面',
      'brief': 'OpenAI 开始在 ChatGPT 推出 GPT-6 和 Intelligent UI 。',
      'url': 'https://openai.com/index/gpt-6-for-everyone/',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-10-08',
      'title': 'Codex 昨日按投票重置额度，今日再送手动重置次数',
      'brief': 'OpenAI Codex 负责人 Tibo 在 28 天更新活动第二天上线四项更新后，发起是否需要重置用量额度的投票， 76% 的投票者选择重置。',
      'url': 'https://x.com/thsottiaux/status/2107913674593644711',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-10-08',
      'title': 'Claude Sonnet 5.5 缓存读取价格减半',
      'brief': 'Anthropic 宣布把 Claude Sonnet 5.5 的缓存读取价格减半，降至每百万 tokens 0.10 美元 。',
      'url': 'https://x.com/claudeai/status/2107894060229034197',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-10-08',
      'title': 'Claude 为 Max 和 Team 订阅用户发放月度 API 额度',
      'brief': 'Anthropic 开始向 Claude Max 和 Team 订阅用户按月发放 Claude Platform API 额度，正分批推出。',
      'url': 'https://platform.claude.com/docs/en/about-claude/api-credits-for-subscribers',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-10-08',
      'title': 'Claude Code 团队成员推出 html-plan skill，开放试用',
      'brief': 'Anthropic Claude Code 团队成员 Thariq 在 X 上宣布，他开发了一个让 Claude Code 生成更好的 HTML plan 的 skill ，现已通过社区插件市场开放安装。',
      'url': 'https://x.com/trq212/status/2107192901537329354',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-10-08',
      'title': 'Claude SDK 内置 computer use 与 browser use 工具集',
      'brief': 'Anthropic 宣布， computer use 和 browser use 工具集现已内置到 Claude 的 Python 和 TypeScript SDK 。',
      'url': 'https://github.com/anthropics/claude-quickstarts/tree/main/computer-toolset',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-10-08',
      'title': 'OpenRouter 上线 ElevenLabs 全线语音模型，限时 5 折',
      'brief': 'OpenRouter 宣布 ElevenLabs 正式入驻其平台，一次性上线 9 个文字转语音模型和 2 个语音转文字模型。',
      'url': 'https://openrouter.ai/blog/announcements/elevenlabs-on-openrouter/',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-10-08',
      'title': 'GitHub Copilot 开放本地沙箱，混合推理将于月底预览',
      'brief': 'GitHub Copilot 本地沙箱正式可用，覆盖 CLI 、 Copilot 应用 和 VS Code 。',
      'url': 'https://commandline.microsoft.com/local-models-sandboxed-tools-github-windows/',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-10-08',
      'title': '微软 MXC 正式可用，为 AI 智能体划定执行权限',
      'brief': '微软 宣布 Microsoft Execution Containers（MXC） 在 Windows 11 正式可用，为 AI 智能体提供受控的执行环境。',
      'url': 'https://blogs.windows.com/windowsdeveloper/2026/10/07/microsoft-execution-containers-policy-driven-containment-for-ai-agents/',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-10-08',
      'title': 'Liquid AI 开源决策模型 d1-3B 和 d1-omni-600M',
      'brief': 'Liquid AI 开源 d1 决策模型家族 的两款模型 d1-3B 和 d1-omni-600M ，权重已在 Hugging Face 提供。',
      'url': 'https://www.liquid.ai/blog/d1-open',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-10-07',
      'title': '复旦腾讯浙大开源 Prism，原生 2K 音视频联合生成',
      'brief': '复旦大学 、 腾讯混元 与 浙江大学 团队开源了 Prism ，一个用于原生 2K 音视频联合生成的动态稀疏注意力框架，技术报告、训练与推理代码和预览权重同步放出，许可证为 MIT 。',
      'url': 'https://francis-rings.github.io/Prism',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-10-07',
      'title': '亚马逊 AGI 团队开源发布 ALoDLM-8B',
      'brief': '亚马逊 AGI 团队发布扩散语言模型 ALoDLM ，在 Hugging Face 公开 ALoDLM-1.7B 与 ALoDLM-8B 权重，并在 GitHub 开源训练与推理代码。',
      'url': 'https://alo-dlm.github.io/',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-10-07',
      'title': 'Perplexity 发布决策模型 pplx-decider 新版本',
      'brief': 'Perplexity 宣布，更新的开放权重多模态决策模型 pplx-decider-v1.1-27b 现已可用，官方称其在新版 Hugging Face Decision Index 0.3 基准上得分最高，Decision API 定价降为 v1 的一半，每百万输入 token 收 0.02 美元 。',
      'url': 'https://x.com/AravSrinivas/status/2107573198145663233',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    }
  ]
};
