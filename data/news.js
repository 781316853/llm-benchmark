// AI 热点新闻快照(由 scripts/lib/news.js 每日抓取维护,每日 2 次)
// 来源:「橘鸦AI早报」官方 RSS https://daily.juya.uk/rss.xml(每日整篇早报拆成逐条);仅保留最近 2 天
// 字段说明:date=新闻日期(UTC);title=标题;brief=简要;url=详情链接;source=来源;type=新闻类型(早报正文分类)
window.NEWS = {
  'updated': '2026-10-01',
  'retentionDays': 2,
  'types': [
    '要闻',
    '开发生态',
    '模型发布',
    '产品应用'
  ],
  'items': [
    {
      'date': '2026-10-01',
      'title': 'Google 发布 Gemini 4 Argon',
      'brief': 'Google 发布新一代前沿模型 Gemini 4 Argon ，目前首批通过 Fairwind Program 向一批受信任的网络安全防御者开放，并正参与美国政府的模型发布前自愿访问流程。 Google 表示，在继续收集早期测试反馈并完善安全防护后，将尽快把 Argon 扩展至开发者、企业和消费者，后续开放将从付费 API 客户和 Google AI Ultra 订阅用户开始。',
      'url': 'https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-argon/',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-10-01',
      'title': '哔哩哔哩发布并开源 Index-Translate 多语言翻译模型系列',
      'brief': '哔哩哔哩 发布并开源 Index-Translate 多语言翻译模型，目前已经开放文本模型权重、在线 Demo 和技术报告。',
      'url': 'https://index-translate.bilibili.com/',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-10-01',
      'title': '蚂蚁百灵发布 Ling-3.1-flash，开放两周免费体验',
      'brief': '百灵推出 Ling-3.1-flash ，总参数约 560B ，每个 Token 激活约 25B ，上下文窗口上限为 1M 。',
      'url': 'https://chat.ant-ling.com/chat',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-10-01',
      'title': 'MiniMax 上线 M Plan 订阅，Token Plan 停止新购',
      'brief': 'MiniMax 推出 M Plan 订阅方案，分为 Go 、 Explore 和 Build 三档，承接并拓展 Token Plan 的订阅能力，套餐价格与文本额度保持不变。三档均支持文本、图像和音频等能力， Explore 、 Build 还支持 H3 视频模型， Go 不含视频；各模态共用套餐额度。',
      'url': 'https://platform.minimax.cn/docs/token-plan/announcements',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-10-01',
      'title': 'Space Bunny Alpha 匿名测试期延长至 10 月 5 日',
      'brief': 'OpenRouter 更新 Space Bunny Alpha 的测试进展，服务方已经推出速度和可靠性方面的改进。',
      'url': 'https://openrouter.ai/stealth/space-bunny-alpha',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-10-01',
      'title': 'Anthropic 宣布上线开发者新站点 Claude.dev',
      'brief': 'Anthropic 的开发者账号 ClaudeDevs 宣布，Claude.dev 成为面向用 Claude 做开发的人群的新站点。',
      'url': 'https://Claude.dev',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-10-01',
      'title': 'Pi v0.99.0 加入 MCP 与 ChatGPT 订阅登录功能',
      'brief': 'Pi 发布 v0.99.0 ，把 MCP 支持加入核心，而团队此前曾在官网和播客中明确宣称 Pi 不支持 MCP 。',
      'url': 'https://earendil.com/posts/you-said-no-mcp/',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-10-01',
      'title': 'Grok Bot 更新软件开发能力，可移交任务给 Cursor',
      'brief': 'Grok Bot 更新了构建软件的能力， Bot 现在可以把编码任务交给 Cursor 执行，用 GitHub 和 Origin 插件管理 PR ，并分享所构建成果的视频演示。',
      'url': 'https://x.com/bot/status/2105373767568621895',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-10-01',
      'title': 'WorkBuddy 两项限免延期至 10 月 31 日',
      'brief': '混元大模型 官方公告，接入 WorkBuddy 的 Hy3 模型限免和 Hy4 preview 夜间限免均延期至 10 月 31 日 。',
      'url': 'https://mp.weixin.qq.com/s/G_v9I1jO-cfJFsH4CGhX6A',
      'source': '橘鸦AI早报',
      'type': '产品应用'
    },
    {
      'date': '2026-10-01',
      'title': 'ChatGPT Sites 现已支持托管 MCP 服务器可转成插件',
      'brief': 'OpenAI 开发者账号转发了工作人员 Max Stoiber 的宣布： ChatGPT Sites 现已支持托管 MCP 服务器，包括插件扩展。',
      'url': 'https://x.com/OpenAIDevs/status/2105440399531577675',
      'source': '橘鸦AI早报',
      'type': '产品应用'
    },
    {
      'date': '2026-10-01',
      'title': 'Google 为 Gemini 推出 skills 功能',
      'brief': 'Google 在 Gemini 中推出 skills 功能，把用户为特定任务写好的指令保存下来，之后可以直接复用，目前已经面向全球用户推出， Workspace 商业、企业、非营利组织和教育客户将在未来数周内获得该功能。',
      'url': 'https://x.com/GeminiApp/status/2105327839054835886',
      'source': '橘鸦AI早报',
      'type': '产品应用'
    },
    {
      'date': '2026-09-30',
      'title': 'OpenAI 发布 GPT-6.1 Sol，能力逼近 Astra',
      'brief': 'OpenAI 发布 GPT-6 Sol 的升级版 GPT-6.1 Sol ，官方称其智能接近 GPT-6 Astra ，标准 API 价格约为 Astra 的五分之一。',
      'url': 'https://openai.com/index/introducing-gpt-6-1-sol/',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-09-30',
      'title': 'OpenAI 发布常驻 Agent 产品 dots，全天候替用户工作',
      'brief': 'OpenAI 发布常驻型 Agent 产品 dots ，由 GPT-6 Astra 驱动，拥有自己的云端计算机，可通过插件连接超过 4000 个应用。',
      'url': 'https://openai.com/index/introducing-dots/',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-09-30',
      'title': '至知创新研究院发布并开源 IQuest-Q1',
      'brief': '至知创新研究院 发布并开源 IQuest-Q1 ，这是一款面向 CLI 的开源智能体基座模型，权重已在 Hugging Face 开放下载。',
      'url': 'https://iquestlab.github.io/',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-09-30',
      'title': 'Liquid AI 发布首款决策模型 d1 并开放 API',
      'brief': 'Liquid AI 发布首款决策模型 d1 ，目前已通过 Liquid API 开放使用。',
      'url': 'https://x.com/liquidai/status/2105003472332693869',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    }
  ]
};
