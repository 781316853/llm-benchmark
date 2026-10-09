// AI 热点新闻快照(由 scripts/lib/news.js 每日抓取维护,每日 2 次)
// 来源:「橘鸦AI早报」官方 RSS https://daily.juya.uk/rss.xml(每日整篇早报拆成逐条);仅保留最近 2 天
// 字段说明:date=新闻日期(UTC);title=标题;brief=简要;url=详情链接;source=来源;type=新闻类型(早报正文分类)
window.NEWS = {
  'updated': '2026-10-09',
  'retentionDays': 2,
  'types': [
    '要闻',
    '开发生态',
    '模型发布',
    '产品应用'
  ],
  'items': [
    {
      'date': '2026-10-09',
      'title': 'OpenAI 为 GPT-6.1 Sol 推出 Ultrafast 模式',
      'brief': 'OpenAI 宣布为 GPT-6.1 Sol 推出 Ultrafast 模式，正在 API 、 Codex 和 ChatGPT Work 上线。官方称该模式速度最高可达 Sol Standard 的 8 倍 ，智能水平接近 Astra 。',
      'url': 'https://x.com/OpenAIDevs/status/2108262812489531498',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-10-09',
      'title': 'OpenAI 为桌面应用中的 Codex 推出更快的 steering',
      'brief': 'OpenAI 正在 ChatGPT 桌面应用中为 Codex 推出更快的 steering ，用户在任务运行时发送追加消息， Codex 能更快响应这些调整。',
      'url': 'https://help.openai.com/en/articles/6825453-chatgpt-release-notes',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-10-09',
      'title': '阶跃星辰：Step 5 Preview 多平台免费一周',
      'brief': '阶跃星辰 StepFun 宣布 Step 5 Preview 上线 OpenRouter ， OpenCode 、 Cline 、 NousResearch 、 KiloCode 等平台当天起陆续开放为期一周的免费访问。官方称这款模型面向 agentic 与专业工作提供旗舰级智能，任务成本显著更低。',
      'url': 'https://x.com/StepFun_ai/status/2108182763002278158',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-10-09',
      'title': 'Vercel AI Gateway 上线 Glyph Cluster，匿名期免费',
      'brief': 'Vercel 宣布推理模型 Glyph Cluster 以匿名模型的形式登陆 AI Gateway，面向已购买 AI Gateway 额度的 Pro 和 Enterprise 订阅方案团队，隐身期内免费使用。',
      'url': 'https://vercel.com/changelog/glyph-cluster-is-now-available-in-stealth-for-free-on-ai-gateway',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-10-09',
      'title': 'Claude 推出 Dashboards 和 Motion 两项测试功能',
      'brief': 'Anthropic 为 Claude 推出 Claude Dashboards 和 Claude Motion 两项 beta 功能。',
      'url': 'https://claude.com/resources/articles/dashboards-and-motion',
      'source': '橘鸦AI早报',
      'type': '产品应用'
    },
    {
      'date': '2026-10-09',
      'title': 'Google Cloud 发布 Gemini 工作智能体',
      'brief': 'Google Cloud 发布面向工作的通用 “ Gemini agent ”，把问答、知识工作、图像与媒体创作、编写和运行代码整合进同一个 Agent 和同一套 API ，用户委派目标后等待交付结果。',
      'url': 'https://cloud.google.com/blog/products/ai-machine-learning/welcome-to-gemini-at-work-2026',
      'source': '橘鸦AI早报',
      'type': '产品应用'
    },
    {
      'date': '2026-10-09',
      'title': '腾讯 WorkBuddy 上线独立文件浏览器',
      'brief': '腾讯 宣布旗下 AI 办公产品 WorkBuddy 正式上线独立文件浏览器。用户在文件资源管理器或 Finder 中右键选择 WorkBuddy 打开本地文件，或将其设为默认打开方式后双击，即可在独立窗口中查看文件，并通过右侧对话栏调用 Buddy 分析、修改。',
      'url': 'https://www.workbuddy.cn/docs/workbuddy/From-Beginner-to-Expert-Guide/Function-Description/File-Browser',
      'source': '橘鸦AI早报',
      'type': '产品应用'
    },
    {
      'date': '2026-10-09',
      'title': 'JetBrains 开源 Mellum2.1，强化学习主打编程 Agent',
      'brief': 'JetBrains 发布编程模型 Mellum2.1 ，模型权重已上架 Hugging Face ，采用 Apache 2.0 许可。 Mellum2.1 架构与此前开源的 Mellum2 相同，总参数 12B 、每 token 激活 2.5B ，改动集中在后训练，强化学习从收尾阶段变为训练主体，模型在带 shell 和文件编辑工具的真实代码仓库中训练，测试通过才获得奖励。',
      'url': 'https://blog.jetbrains.com/ai/2026/10/mellum2-1-gets-to-work-a-fast-open-model-for-coding-agents/',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-10-09',
      'title': 'Hugging Face 开源基因注释模型 Carbon-A',
      'brief': 'Hugging Face 生物学研究团队 HuggingFaceBio 开源基因注释模型 Carbon-A ，并同步发布用 Carbon-A 构建的注释数据库 Carbon Annotation Database 。 Carbon-A 有 12 亿 参数，直接从 DNA 序列预测真核生物的蛋白编码区，单一模型覆盖哺乳动物、植物、真菌和原生生物等类群；官方称在 42 个基准基因组上宏平均核苷酸 F1 达 0.944 ，在核苷酸、外显子和基…',
      'url': 'https://huggingface.co/blog/HuggingFaceBio/carbon-annotator-genbank-genome-annotation',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-10-09',
      'title': 'LightOnAI 开源 LightOnOCR-3',
      'brief': 'LightOn 发布端到端 OCR 模型系列 LightOnOCR-3 ，提供 0.8B、1B、4B 三个尺寸，采用 Apache 2.0 许可，可用于研究和商业用途。',
      'url': 'https://www.lighton.ai/research/lightonocr-3',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-10-09',
      'title': 'Odyssey 发布世界模型 Odyssey-3',
      'brief': 'Odyssey 发布基础世界模型 Odyssey-3 ，称其为迄今最强大的世界模型，研究预览现已免费开放体验。',
      'url': 'https://odyssey.systems/meet-odyssey-3',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-10-09',
      'title': 'Grok Imagine Video 1.5 Lite 上线，1080p 每秒 0.14 美元',
      'brief': 'Grok Imagine 宣布，视频生成模型 Video 1.5 Lite 已在 Grok Imagine API 上线，用于文本生成视频和图像生成视频。价格按分辨率按秒计费： 480p 每秒 0.02 美元 ， 720p 每秒 0.03 美元 ， 1080p 每秒 0.14 美元 。',
      'url': 'https://x.com/imagine/status/2108280250673352929',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
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
    }
  ]
};
