// AI 热点新闻快照(由 scripts/lib/news.js 每日抓取维护,每日 4 次)
// 来源:「橘鸦AI早报」官方 RSS https://daily.juya.uk/rss.xml(每日整篇早报拆成逐条);仅保留最近 2 天
// 字段说明:date=新闻日期(UTC);title=标题;brief=简要;url=详情链接;source=来源;type=新闻类型(早报正文分类)
window.NEWS = {
  'updated': '2026-11-21',
  'retentionDays': 2,
  'types': [
    '要闻',
    '开发生态',
    '模型发布',
    '产品应用'
  ],
  'items': [
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
      'title': 'Codex WebSocket 请求上限提至 128 MB',
      'brief': 'OpenAI 团队成员 Charlie Marsh 发文称， Codex 已将模型请求的 WebSocket 大小上限从 16 MB 提高到 128 MB ，让大型轮次不再回退到 HTTP ，整体 HTTP 回退率降低约 20% 。',
      'url': 'https://x.com/charliermarsh/status/2123849871480463669',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-11-21',
      'title': 'OpenAI API 为 GPT-6.2 启用跨轮推理复用',
      'brief': 'OpenAI 宣布，在 Responses API 中使用 GPT-6.2 的 Agent 可跨轮复用推理，以减少 token 消耗并提升缓存命中率。',
      'url': 'https://developers.openai.com/api/docs/guides/keep-prefix-unchanged',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-11-21',
      'title': 'Google 在 Gemini API 开放语音编辑预览',
      'brief': 'Google 宣布， Gemini 3.5 Transcribe 的语音编辑能力已通过 Gemini API 在 Google AI Studio 和 Gemini for business 开启公开预览。开发者可以借此构建让用户只用语音编辑、改写和翻译已有文本的体验，这套技术也用于 Gboard 的 Rambler 和 macOS 版 Gemini App 。',
      'url': 'https://aistudio.google.com/docs/models/gemini-3.5-transcribe',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-11-21',
      'title': 'Google 黑五早鸟优惠上线，AI 订阅最高五折',
      'brief': 'Google Gemini 订阅产品负责人 Vikas Kansal 发文表示， Google 面向现有 AI 和存储订阅用户开启黑色星期五早鸟优惠， Google AI Plus 和 Pro 年度方案即日起至当地时间 11 月 26 日 最高可享五折。',
      'url': 'https://x.com/vikaskansalHQ/status/2123833450297995624',
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
    },
    {
      'date': '2026-11-20',
      'title': 'ChatGPT dots 向 Business Standard 用户以及部分 Plus 开放',
      'brief': 'OpenAI 员工 Tibo 发文宣布，已开始向少量 ChatGPT Plus 用户测试 dots 功能。此外， dots 将从今日起向所有 ChatGPT Business Standard 用户开放。',
      'url': 'https://x.com/thsottiaux/status/2123556256392847657',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-11-20',
      'title': 'ChatGPT 推出新移动端界面，首批面向部分 Pro 用户',
      'brief': 'OpenAI 员工表示， ChatGPT 正在推出新的移动端界面，首先面向拥有 dot 或符合创建条件的 Pro 用户。',
      'url': 'https://x.com/thsottiaux/status/2123557171321561133',
      'source': '橘鸦AI早报',
      'type': '产品应用'
    },
    {
      'date': '2026-11-20',
      'title': 'Google AI Studio 上线元素周期表式模型选择器',
      'brief': 'Google AI Studio 团队成员 Ammaar Reshi 发文确认， Model Selection 模型选择功能已正式上线。新界面以元素周期表式的网格展示可选模型，其中包含 Gemini 4 等多个模型选项。',
      'url': 'https://x.com/ammaar/status/2123209472227061800',
      'source': '橘鸦AI早报',
      'type': '产品应用'
    },
    {
      'date': '2026-11-20',
      'title': 'Grok Bot 社区目录上线一天收到超 1200 个提交',
      'brief': 'SpaceXSI 工作人员 Eric Zakariasson 发帖介绍了社区目录 Grok Bot Directory ，用户可在上面浏览并安装他人为 Grok Bot 制作的机器人和应用，也能提交自己的作品。',
      'url': 'https://grok-bot.directory',
      'source': '橘鸦AI早报',
      'type': '产品应用'
    },
    {
      'date': '2026-11-20',
      'title': 'Google 将 Genie 4 上线 Gemini API 和 AI Studio',
      'brief': 'Google 将 Genie 4 上线 Gemini API 和 Google AI Studio ，支持根据文字或图片生成交互世界。该模型输出 720p 、 24 帧每秒 的画面和同步的 48 kHz 立体声音频，用户可以通过 WASD 、方向键和文字实时控制场景。',
      'url': 'https://blog.google/innovation-and-ai/technology/developers-tools/genie-4-in-gemini-api/',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-11-20',
      'title': '火山引擎上线豆包实时音视频通话模型API服务',
      'brief': '火山引擎 宣布，豆包实时音视频通话模型 SeedRealtime 1.0 的 API 服务正式上线。',
      'url': 'https://mp.weixin.qq.com/s/fyNH7Y6o32kxc4GeK8Qb3A',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-11-20',
      'title': 'GPT-Live-1.1 上线 API，新增待机选项',
      'brief': 'OpenAI 宣布， GPT-Live-1.1 现已在 API 中可用，该模型此前已用于 ChatGPT Plus 和 Pro 版语音功能。',
      'url': 'https://developers.openai.com/api/docs/models/gpt-live-1.1',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    }
  ]
};
