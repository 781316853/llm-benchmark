// AI 热点新闻快照(由 scripts/lib/news.js 每日抓取维护,每日 4 次)
// 来源:「橘鸦AI早报」官方 RSS https://daily.juya.uk/rss.xml(每日整篇早报拆成逐条);仅保留最近 2 天
// 字段说明:date=新闻日期(UTC);title=标题;brief=简要;url=详情链接;source=来源;type=新闻类型(早报正文分类)
window.NEWS = {
  'updated': '2026-11-22',
  'retentionDays': 2,
  'types': [
    '要闻',
    '开发生态',
    '模型发布',
    '技术与洞察',
    '前瞻与传闻',
    '产品应用',
    '行业动态'
  ],
  'items': [
    {
      'date': '2026-11-22',
      'title': 'Antigravity 重置全部用户的 Gemini 配额',
      'brief': 'Google Antigravity 负责人 Varun Mohan 在 X 上发文表示， Antigravity 已重置所有用户的 Gemini 配额，并完成了此前宣布的缓存改进。',
      'url': 'https://x.com/_mohansolo/status/2124070033534161407',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-11-22',
      'title': 'Google Antigravity 更新 /btw：可另开支线且不丢进度',
      'brief': 'Google Antigravity 更新了 /btw 命令，它不再只是用来在主任务运行时顺便提问。用户现在可以在主任务之外另开支线、在支线里继续探索问题，还能把支线提升为主线，而且全程不会丢失当前进度。官方同时放出演示视频，并邀请用户到命令行工具 CLI 中试用。',
      'url': 'https://x.com/antigravity/status/2123921833883840650',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-11-22',
      'title': '博主称 Cursor 即将更名为 Grok Build',
      'brief': '博主 Puck 称，AI 编程工具 Cursor 即将更名为 Grok Build ，应用运行速度也将有所提升。据其介绍， Grok Build CLI 2.0 已进入 alpha-unified 渠道，运行在 Cursor 的 agent 引擎上，支持以 Grok 或 Cursor 身份登录。他推测更名将绑定 unified 订阅方案，把 Grok 和 Cursor 纳入同一个订阅方案。他称公告还承诺更轻快的桌面与网页版应用、多 ag…',
      'url': 'https://x.com/GrokInsider/status/2123867269553938671',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-11-22',
      'title': 'OpenCode 宣布 GLM 5.3 和 DeepSeek Flash 降价 60%',
      'brief': 'OpenCode 宣布， GLM 5.3 和 DeepSeek V4.1 Flash 两款模型降价 60% 。',
      'url': 'https://x.com/thdxr/status/2124265777217802707',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-11-22',
      'title': 'OpenAI 语音团队成员宣布 Dots 通话结束后可查看文字转录',
      'brief': 'OpenAI 语音团队成员 Atty Eleti 发帖宣布，Dots 通话结束后现在可以查看文字转录。帖子原文写道，用户现在可以在 Dots 通话结束后查看 transcript ，即这次通话的文字记录。她还随帖展示了相关截图。',
      'url': 'https://x.com/athyuttamre/status/2123937435411431529',
      'source': '橘鸦AI早报',
      'type': '产品应用'
    },
    {
      'date': '2026-11-22',
      'title': 'Gemini 网页版被曝隐藏元素周期表切换器',
      'brief': '有 X 用户 Lumina 演示，在 Gemini 网页版长按模型选择器，会出现一个名为 The Periodic Table of Gemini 的元素周期表样式切换界面。界面中列有 Gemini 4 Hydrogen 、 Argon 、 Carbon 、 Neon 模型， Nano Banana 出现在钾元素的位置。有用户称自己的 Plus 账号看不到该界面，猜测它可能仅面向 Pro 和 Ultra 用户。',
      'url': 'https://x.com/LuminaBench/status/2124084959459873080',
      'source': '橘鸦AI早报',
      'type': '产品应用'
    },
    {
      'date': '2026-11-22',
      'title': 'OpenAI 开放美国以外企业在 ChatGPT 认领业务并发布 agent',
      'brief': 'OpenAI 宣布，总部位于美国境外的电商和在线服务企业现在有资格在 ChatGPT 中认领业务并发布 Business Agent 。该功能此前以测试版上线，仅向符合条件的美国企业开放。',
      'url': 'https://openai.com/business/businesses-in-chatgpt/',
      'source': '橘鸦AI早报',
      'type': '产品应用'
    },
    {
      'date': '2026-11-22',
      'title': '微信内测桌面端 AI Agent「做个小工具」，一句话做个应用',
      'brief': '微信 正在内测一款桌面端 AI Agent「做个小工具」，把微信小微中的「小工具」能力单独做成客户端，提供 macOS 和 Windows 下载，目前为 Beta 版，官网设有扫码报名入口。',
      'url': 'https://mp.weixin.qq.com/wiki/minitool',
      'source': '橘鸦AI早报',
      'type': '产品应用'
    },
    {
      'date': '2026-11-22',
      'title': 'Lean 与 Mathlib 社区认证黎曼假设证明正确',
      'brief': 'Anthropic 数学家 Levent Alpöge 发布了黎曼假设的 Lean 库证明，包含 1700 万 行代码，并称证明由他与 Claude 协作完成。',
      'url': 'https://leanprover-community.github.io/blog/posts/riemann-hypothesis/',
      'source': '橘鸦AI早报',
      'type': '技术与洞察'
    },
    {
      'date': '2026-11-22',
      'title': 'Novita AI 确认部分 MiniMax 请求曾被转发至官方 API',
      'brief': 'Novita AI 发布隐私通知，确认 5 月 28 日至 11 月 11 日 期间，部分通过 Novita 及经 OpenRouter 转入的 MiniMax 请求被转发至 MiniMax 官方 API，内容可能被第三方访问或留存。',
      'url': 'https://novita.ai/blog/minimax-requests-privacy-notice/',
      'source': '橘鸦AI早报',
      'type': '行业动态'
    },
    {
      'date': '2026-11-22',
      'title': '报道称台积电暂停中国企业 16nm 及以下先进制程订单',
      'brief': '据 AppleInsider 报道， 台积电 已通知客户，暂停中国企业 16nm 及以下先进制程芯片订单。',
      'url': 'https://appleinsider.com/articles/26/11/20/apple-supplier-tsmc-cuts-off-china-chip-orders-amid-tighter-export-controls',
      'source': '橘鸦AI早报',
      'type': '行业动态'
    },
    {
      'date': '2026-11-22',
      'title': '腾讯混元：下一代 Hy 模型将大幅扩大规模，Hy4-mini 已列入路线图',
      'brief': '腾讯混元团队 日前在 Reddit AMA 活动中表示，下一代 Hy 模型将进一步大幅扩大参数规模，同时继续投入大规模强化学习。团队确认 Hy4-mini 已列入开发路线图，一款 Flash-Lite 模型也在规划中。',
      'url': 'https://mp.weixin.qq.com/s/LHZxKjzVkEpnsCDcNlaMXw',
      'source': '橘鸦AI早报',
      'type': '前瞻与传闻'
    },
    {
      'date': '2026-11-21',
      'title': '数学家称与 Claude 合作证明黎曼猜想',
      'brief': '数学家 Levent Alpöge 在个人网站发布说明，称与 Claude 模型合作发现了数论经典难题黎曼猜想的证明，并称方法可推广至广义黎曼猜想。',
      'url': 'https://alpo.ge/remark.pdf',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-11-21',
      'title': 'Thinking Machines 发布并开源 Inkling 2 Mini',
      'brief': 'Thinking Machines 发布开源模型 Inkling 2 Mini ，总参数 26.4B 、激活参数 3.4B ，采用 looped transformer 架构，中段 12 层 对每个 token 跑三遍，以 Apache 2.0 许可开放权重。官方称其 DeepSWE v1.1 得分 48.2% ，领先所有总参数低于 100B 的开源权重模型， AA Index 得分 20.1 。该模型内存占用约 20GB ，可经 Ol…',
      'url': 'https://thinkingmachines.ai/news/inkling-2-mini/',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-11-21',
      'title': 'Antigravity 扩大 cache pool，完成后重置配额',
      'brief': 'Antigravity 负责人 Varun Mohan 表示， Antigravity 正在大幅扩大 cache pool ，以提高 Neon 的缓存命中率。',
      'url': 'https://x.com/_mohansolo/status/2123848516581892181',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-11-21',
      'title': 'OpenAI 向 Plus 用户开放 Space 协作空间',
      'brief': 'OpenAI 宣布向 ChatGPT Plus 用户开放 Space 协作空间。 Plus 用户每月支付 20 美元 即可创建空间，邀请他人共同编辑，与 ChatGPT 一起创建交互式页面、幻灯片和网站。',
      'url': 'https://x.com/ChatGPT/status/2123850912867471807',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-11-21',
      'title': '腾讯混元开源旗舰模型 Hy4：总参数 770B',
      'brief': '腾讯混元 宣布开放旗舰模型 Hy4 的权重。模型采用原生多模态 MoE 架构，语言模型主干总参数量 770B 、每个 token 激活 49B ，支持 1M 上下文，可理解文本、图像和视频。',
      'url': 'https://mp.weixin.qq.com/s/M0TIIvCzizkLw7_A3MCSjA',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-11-21',
      'title': '微信开源全模态模型系列WeMM-Video',
      'brief': '腾讯 以 Apache 2.0 协议在 GitHub 和 Hugging Face 开源中英双语全模态模型系列 WeMM-Video 。',
      'url': 'https://github.com/Tencent/WeMM-Video',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-11-21',
      'title': 'Codex 更新对话线程，改善切换与加载体验',
      'brief': 'Codex 更新了对话线程，改善状态切换和对话加载体验。',
      'url': 'https://x.com/matteing/status/2123884630654996756',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-11-21',
      'title': 'OpenAI 上线 CarPlay Dot 通话功能',
      'brief': 'OpenAI 开发者体验负责人 Romain Huet 在 X 上发文称，用户现在可以通过 Apple CarPlay 呼叫自己的 Dot，开车途中靠说话就能把事情办完。',
      'url': 'https://x.com/romainhuet/status/2123924316110966824',
      'source': '橘鸦AI早报',
      'type': '产品应用'
    }
  ]
};
