// AI 热点新闻快照(由 scripts/lib/news.js 每日抓取维护,每日 4 次)
// 来源:「橘鸦AI早报」官方 RSS https://daily.juya.uk/rss.xml(每日整篇早报拆成逐条);仅保留最近 2 天
// 字段说明:date=新闻日期(UTC);title=标题;brief=简要;url=详情链接;source=来源;type=新闻类型(早报正文分类)
window.NEWS = {
  'updated': '2026-11-23',
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
      'date': '2026-11-23',
      'title': 'OpenAI 公开内部指标 Perplexity，提议设共同开发限制',
      'brief': 'OpenAI 首席科学家 Jakub Pachocki 发文《Perplexity and Intelligence》，首次公开 OpenAI 过去五年的内部预训练评测指标 Perplexity ，并提议行业建立统一发展限制标准。',
      'url': 'https://openai.com/index/perplexity-and-intelligence',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-11-23',
      'title': '蚂蚁集团开源医疗模型 LingSante 3.1 Flash 与 air-VL',
      'brief': '蚂蚁集团 百灵大模型发布两款医疗模型 LingSante-3.1-flash 和 LingSante-3.1-air-VL 。',
      'url': 'https://huggingface.co/inclusionAI/LingSante-3.1-flash',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-11-23',
      'title': '马斯克披露 Tesla Reality View 技术细节',
      'brief': '马斯克 回复 FSD v15 体验帖，披露了 Tesla Reality View 技术细节。他称特斯拉自去年已有接近像素级的 world model ，车端部署的大幅缩小版是基于 Tesla Universal Vision Encoder 特征的 conditional mean-flow model 。',
      'url': 'https://x.com/elonmusk/status/2124458557525397780',
      'source': '橘鸦AI早报',
      'type': '技术与洞察'
    },
    {
      'date': '2026-11-23',
      'title': 'Elon Musk 预警 AI 行业明年严重资金短缺',
      'brief': 'Elon Musk 在 X 上回复 Keras 创始人 François Chollet 时表示，让如此规模的算力设备通电、冷却并稳定运行极其困难。',
      'url': 'https://x.com/elonmusk/status/2124271725927903388',
      'source': '橘鸦AI早报',
      'type': '行业动态'
    },
    {
      'date': '2026-11-23',
      'title': 'OpenRouter 终止 3 家供应商合作，移除 125 个端点的 ZDR 资格',
      'brief': 'OpenRouter 发布公告称，安全研究人员发现其平台上部分推理供应商存在数据处理问题，公司调查未发现自身遭入侵或数据泄露。该公司已终止与 3 家供应商的合作，将 125 个端点移出 Zero Data Retention（ZDR） 资格，并通知可能受影响的客户； ZDR 要求供应商不存储提示词和响应。',
      'url': 'https://openrouter.ai/blog/announcements/data-processing-incidents-on-inference-providers/',
      'source': '橘鸦AI早报',
      'type': '行业动态'
    },
    {
      'date': '2026-11-23',
      'title': '甲骨文称与 OpenAI 基础设施合同已获全额资金支持',
      'brief': '甲骨文表示，随着本月初完成一轮 200 亿美元 融资，其与 OpenAI 的基础设施合同已获得全部所需资金。',
      'url': 'https://www.oracle.com/news/announcement/oracle-statement-2026-11-20/',
      'source': '橘鸦AI早报',
      'type': '行业动态'
    },
    {
      'date': '2026-11-23',
      'title': 'OpenAI 团队：ChatGPT/Codex 桌面应用又将迎来重大更新',
      'brief': 'OpenAI 负责 ChatGPT 与 Codex 的团队成员 Tibo 发帖称， ChatGPT 与 Codex 桌面应用团队已在准备又一次重大更新，并询问用户更新后还有哪些不足。',
      'url': 'https://x.com/thsottiaux/status/2124322968499282388',
      'source': '橘鸦AI早报',
      'type': '前瞻与传闻'
    },
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
    }
  ]
};
