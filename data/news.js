// AI 热点新闻快照(由 scripts/lib/news.js 每日抓取维护,每日 2 次)
// 来源:「橘鸦AI早报」官方 RSS https://daily.juya.uk/rss.xml(每日整篇早报拆成逐条);仅保留最近 2 天
// 字段说明:date=新闻日期(UTC);title=标题;brief=简要;url=详情链接;source=来源;type=新闻类型(早报正文分类)
window.NEWS = {
  'updated': '2026-10-15',
  'retentionDays': 2,
  'types': [
    '要闻',
    '开发生态',
    '模型发布',
    '产品应用'
  ],
  'items': [
    {
      'date': '2026-10-15',
      'title': 'Claude Code 桌面版更新优化多会话体验',
      'brief': 'Anthropic 更新 Claude Code 桌面应用，围绕多会话并行改进会话启动、工作拆分和状态查看。',
      'url': 'https://x.com/ClaudeDevs/status/2110445844675838148',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-10-15',
      'title': 'Claude Code 新增闲置会话自动压缩',
      'brief': 'Anthropic 为 Claude Code 终端加入闲置会话自动压缩功能：默认达到 200K token 的对话闲置约 54 分钟 后，会在 1 小时 的 prompt cache 过期前压缩为摘要。',
      'url': 'https://x.com/lydiahallie/status/2110484840256819380',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-10-15',
      'title': 'TypeSafe AI 更新 Jev，开放图像与长上下文功能',
      'brief': 'TypeSafe AI 发布 Jev 1.14.0 ，通过 jev-preview 提供，并开放图像输入、 box 类型和长上下文等实验性功能，需通过 API 请求头中的 danger zone 标记主动开启，官方尚不建议用于生产场景。',
      'url': 'https://typesafe.ai/blog/jev-1-14',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-10-15',
      'title': 'SpaceXSI 发布端到端语音模型 Grok Voice 3.0',
      'brief': 'SpaceXSI 发布 Grok Voice 3.0 端到端语音模型，已通过 Voice Agent API 开放，维持前代每分钟 0.08 美元 的价格，使用 grok-voice-latest 的应用已自动切换。',
      'url': 'https://x.ai/news/grok-voice-3',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-10-15',
      'title': '蚂蚁百灵开源 Ling-3.1-flash 模型',
      'brief': '蚂蚁百灵 宣布开源 Ling-3.1-flash ，总参数约 5600 亿 ，每个 token 激活约 250 亿参数 ，支持最高 100 万 token 上下文。权重与文档已在 Hugging Face 和 ModelScope 提供。',
      'url': 'https://x.com/AntLingAGI/status/2110390124743970952',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-10-15',
      'title': '昆仑万维发布并开源 Matrix-Game 4.0',
      'brief': '昆仑万维 发布并开源 Matrix-Game 4.0 ，由 游戏引擎 维护状态和交互规则， 视频模型 将简化的几何画面实时转化为精细画面。官方称，系统可在单张 NVIDIA RTX 5090 上以 480p 、 60 FPS 运行，按键到首帧响应的端到端延迟低于 150 毫秒 。',
      'url': 'https://matrix-game-v4-0.github.io/page/',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-10-15',
      'title': 'OpenCode Go 上线 Gemini 4 Argon',
      'brief': 'OpenCode Go 已上线 Gemini 4 Argon Contributor ，月费 10 美元 的 Go 订阅方案可获得该模型价值 60 美元 的月度使用额度。该额度由 30 美元 限时翻倍，活动截至 11 月 30 日 。使用仍受分时限额约束，每 5 小时 和每周分别可使用月度额度的 20% 和 50% 。官方文档注明，用户提示词和模型回复可能用于训练未来的 Google 模型，且该版本不提供零数据保留。',
      'url': 'https://x.com/opencode/status/2110274311043072352',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-10-15',
      'title': 'Qoder 国际版极致档位推出夜间 2 折优惠',
      'brief': 'Qoder 国际版的「极致」模型档位加入夜间折扣， 10 月 14 日至 30 日 ，每天北京时间 22:00 至次日 08:00 ， Credits 消耗倍率从 2 倍 降至 0.4 倍 ，即原价的 2 折 。 Pro Trial 试用及付费用户可享受，选择该档位后自动生效， Service Account 的优惠时段另有规定。',
      'url': 'http://docs.qoder.com/events/offpeakrate',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-10-15',
      'title': 'OpenAI 公布部分 GPT-4 模型退役安排',
      'brief': 'OpenAI 更新模型的 API 下线安排， GPT-4o 、 GPT-4o mini 、 GPT-4.1 和 GPT-4.1 mini 将于 2027 年 1 月 14 日 停用，并推荐迁移到替代模型 gpt-6-luna 。这些模型的微调版本也将随基础模型同步停用。',
      'url': 'https://developers.openai.com/api/docs/deprecations',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-10-15',
      'title': 'Claude Platform 支持导出 OpenTelemetry 追踪',
      'brief': 'Anthropic 宣布， Claude Platform 的 OpenTelemetry 追踪功能进入公开测试，支持从 Messages API 、 Claude Managed Agents 和 Claude SDK 向用户已有的可观测性系统发送追踪数据。',
      'url': 'https://claude.com/resources/articles/agent-observability-on-the-claude-platform',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-10-15',
      'title': '企业微信接入 WorkBuddy，侧边栏可领用',
      'brief': '企业微信 与 WorkBuddy 联合推出新版本，升级至 企业微信 5.0.12 后，可在侧边栏领用 WorkBuddy 机器人，通过聊天下达任务并查看结果。',
      'url': 'https://work.weixin.qq.com/nl/index/workbuddy',
      'source': '橘鸦AI早报',
      'type': '产品应用'
    },
    {
      'date': '2026-10-15',
      'title': '豆包手机助手将逐步开放第三方应用自动化操作',
      'brief': '豆包手机助手 宣布，《屏幕自动化操作声明协议》（ SAEP ）的 30 天 公示期已结束，将逐步放开第三方应用的屏幕自动化操作权限。该协议允许应用开发者声明接受或禁止 Agent 操作的范围，已明确拒绝的应用不会被操作。',
      'url': 'https://o.doubao.com/developer',
      'source': '橘鸦AI早报',
      'type': '产品应用'
    },
    {
      'date': '2026-10-14',
      'title': 'Google 全球开放 Gemini 4 Argon',
      'brief': 'Google 已向全球开放 Gemini 4 Argon 。',
      'url': 'https://deepmind.google/blog/introducing-gemini-4-argon/',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-10-14',
      'title': 'OpenAI 优化 ChatGPT 桌面应用存储占用',
      'brief': 'OpenAI 的 ChatGPT 与 Codex 团队成员 Tibo 表示， ChatGPT 桌面应用已优化状态数据在磁盘上的存储方式。他预计，这项调整可将该应用在磁盘上的存储量减少 60% 。此次优化回应了重度用户关于磁盘空间不足的反馈。',
      'url': 'https://x.com/thsottiaux/status/2110151780478927344',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-10-14',
      'title': 'Cat Jam 匿名编程模型免费上线 OpenCode',
      'brief': 'OpenCode 宣布上线匿名模型 Cat Jam ，用户目前可在 OpenCode 中免费使用。',
      'url': 'https://x.com/opencode/status/2110068008945381853',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-10-14',
      'title': 'Command Code 推出 GOAT 限时额度优惠',
      'brief': 'Command Code 宣布，GOAT 订阅方案中的 DeepSeek V4.1 Flash 在为期 3 天 的优惠期间提供 100 美元 使用额度，之后该模型额度将调整为 80 美元 。GOAT 订阅价格为每月 10 美元 ，支持超过 30 个 开放及闭源模型，额度因模型而异。',
      'url': 'https://x.com/CommandCodeAI/status/2110023209416630626',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-10-14',
      'title': 'Google Play 新增私人应用功能',
      'brief': 'Google Play 新增私人应用功能，用户可通过 Google AI Studio 用 AI 创建自定义 Android 应用，再用普通 Google 账户 在自己的设备上运行，无需开发者账户。',
      'url': 'https://blog.google/products-and-platforms/platforms/google-play/google-play-updates-october-2026/',
      'source': '橘鸦AI早报',
      'type': '产品应用'
    },
    {
      'date': '2026-10-14',
      'title': 'llama.cpp 推出 Windows 桌面应用 Llama Windows',
      'brief': 'llama.cpp 推出 Windows 11 原生配套应用 Llama Windows ，用户无需使用命令行，即可下载并在本地运行模型。应用支持从 Hugging Face Hub 浏览和下载推荐模型，通过系统托盘访问模型，或按 Alt+Space 与已加载的模型聊天。目前提供 x64 和 ARM64 安装包，官方项目说明称， 提示词 和 推理 均留在本机，应用不发送遥测数据。 NVIDIA 表示，该应用已针对 RTX Spark 进…',
      'url': 'https://huggingface.co/blog/huggingface/llama-windows',
      'source': '橘鸦AI早报',
      'type': '产品应用'
    },
    {
      'date': '2026-10-14',
      'title': 'Arena 推出 Agent 版 Max 模型路由器',
      'brief': 'Arena 推出 Agent 版 Max 模型路由器 ，基于超过 250 万次 真实 Agent Arena 会话，按任务复杂度、类型和成本动态选择模型，覆盖聊天、工作和编程任务。 Arena 称， Max 在实测期间位列 Agent Arena 第 1 ，每项任务的成本中位数为 3.27 美元 ，相比当时排名第 1 的公开模型 Fable 5.1（Max） ，表现高出 0.3% ，成本降低 37.5% 。目前，采用 Fable 5.1…',
      'url': 'https://arena.ai/blog/max-router-tops-agent-arena',
      'source': '橘鸦AI早报',
      'type': '产品应用'
    }
  ]
};
