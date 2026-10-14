// AI 热点新闻快照(由 scripts/lib/news.js 每日抓取维护,每日 2 次)
// 来源:「橘鸦AI早报」官方 RSS https://daily.juya.uk/rss.xml(每日整篇早报拆成逐条);仅保留最近 2 天
// 字段说明:date=新闻日期(UTC);title=标题;brief=简要;url=详情链接;source=来源;type=新闻类型(早报正文分类)
window.NEWS = {
  'updated': '2026-10-14',
  'retentionDays': 2,
  'types': [
    '要闻',
    '开发生态',
    '模型发布',
    '技术与洞察',
    '产品应用'
  ],
  'items': [
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
      'title': 'Fish Audio 发布 Drama 3，开放模型权重',
      'brief': 'Fish Audio 发布开放权重文本转语音模型 Drama 3 ，支持用自然语言控制情绪、节奏和声音，并将耳语、强调等表达限定到单个词。模型支持 83 种语言 ，已上线网页端、iOS、Android 和 API。',
      'url': 'https://fish.audio/blog/fish-audio-drama-3/',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-10-14',
      'title': 'Liquid AI 发布 LFM2.5-24B-A2B',
      'brief': 'Liquid AI 发布开放权重推理模型 LFM2.5-24B-A2B ，面向端侧 Agent 的工具调用和多步任务，总参数为 240 亿 ，每个 token 激活 20 亿 参数。相比前代，上下文窗口从 32,768 扩至 131,072 个 token ，模型会在最终回答前输出显式推理过程。',
      'url': 'https://www.liquid.ai/blog/lfm2-5-24b-a2b',
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
      'title': 'MiniMax 入驻天猫，开售三档订阅方案',
      'brief': 'MiniMax 已入驻天猫，开设首家品牌官方旗舰店，销售面向个人的 M Plan AI 订阅方案。目前店铺上架 Go 、 Explore 、 Build 3 个档位，均支持按月或按年购买。月卡首单限时 5 折 ，起售价为 24.5 元 ，优惠持续至 10 月 14 日 。',
      'url': 'https://mp.weixin.qq.com/s/fYK1sb1E8c2jVYf3lZ85Jw',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-10-14',
      'title': 'Antigravity 最高档向科研人员开放免费申请',
      'brief': 'Google 宣布，科学家和研究人员可申请获得 Antigravity 最高使用档位的 6 个月 免费使用机会。网络安全防御人员可通过 Fairwind Program 申请，该计划为符合条件的防御方提供先进模型的早期访问权限。',
      'url': 'https://x.com/Google/status/2110041308257493356',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-10-14',
      'title': 'Cursor 的 Origin 支持逾 20 项集成',
      'brief': 'Cursor 宣布，其代码托管平台 Origin 现已支持 20 多项集成，涵盖 CI 、部署、代码审查、安全、监控和项目管理。',
      'url': 'https://x.com/cursor_ai/status/2110075611633074295',
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
    },
    {
      'date': '2026-10-13',
      'title': 'Meta 发布 Muse Wonder 模型系列',
      'brief': 'Meta 发布 Muse Wonder 和 Muse Wonder Full 两款模型，称其在个人和专业 Agent 任务上达到领先水平。',
      'url': 'https://research.meta.ai/blog/muse-wonder',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-10-13',
      'title': 'The X Subscription 推出：整合Grok、Cursor 和 X Premium',
      'brief': 'SpaceX Super Intelligence 推出 The X Subscription ，将 Grok 、 Cursor 和 X Premium 合并为同一订阅、工作空间和账单。',
      'url': 'https://docs.x.ai/x-subscription/overview',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-10-13',
      'title': 'Codex 第 8 天安排：重置用量额度',
      'brief': 'Codex 负责人 Tibo 表示，28 天安排的第 8 天将进行用量额度重置。他随后称，全局重置将在太平洋标准时间 10 月 12 日结束前完成。此前，Tibo 表示，团队将在未来 28 天内，每天为多数 Codex 和 Work 用户推出一项有实际价值的明显改进，或完整重置一次用量额度。',
      'url': 'https://x.com/thsottiaux/status/2109812216212099456',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-10-13',
      'title': '智谱推出法律模型 GLM-Legal，开放测试申请',
      'brief': '智谱 推出基于 GLM-5.3-Flash 的法律模型 GLM-Legal ，面向合同审查、证据分析和合规等工作流。',
      'url': 'https://z.ai/blog/glm-legal',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-10-13',
      'title': 'OpenBMB 发布 MiniCPM-V 4.7 系列两款模型',
      'brief': 'OpenBMB 发布并开源 MiniCPM-V 4.7 ，包含 35B-A3B 和 1B 两个型号，支持单图、多图、文档和视频理解。',
      'url': 'https://github.com/openbmb/MiniCPM-V',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-10-13',
      'title': 'OpenCode Go 提供 80 美元 V4.1 Flash 额度',
      'brief': 'OpenCode 宣布推出 Operation Cheepseek 第三阶段，现在 OpenCode Go 订阅提供价值 80 美元 的 DeepSeek V4.1 Flash 使用额度。',
      'url': 'https://x.com/opencode/status/2109573342584058065',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-10-13',
      'title': 'Karpathy：LLM 能力认知差距正在扩大',
      'brief': 'Andrej Karpathy 表示，人们对 LLM 能力的认知差距正在扩大，已不只是两群人互不理解，而是形成逐层收窄的漏斗。',
      'url': 'https://x.com/karpathy/status/2109361546505966046',
      'source': '橘鸦AI早报',
      'type': '技术与洞察'
    },
    {
      'date': '2026-10-13',
      'title': 'Anthropic：小模型或数月内能实现自我复制',
      'brief': 'Anthropic 发布 AI 自我复制 研究，认为小型模型可能在数月内具备在商用 物联网 设备上自主部署和传播的能力。',
      'url': 'https://www.anthropic.com/research/self-replicating-ai',
      'source': '橘鸦AI早报',
      'type': '技术与洞察'
    }
  ]
};
