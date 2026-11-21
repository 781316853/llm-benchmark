// AI 热点新闻快照(由 scripts/lib/news.js 每日抓取维护,每日 4 次)
// 来源:「橘鸦AI早报」官方 RSS https://daily.juya.uk/rss.xml(每日整篇早报拆成逐条);仅保留最近 2 天
// 字段说明:date=新闻日期(UTC);title=标题;brief=简要;url=详情链接;source=来源;type=新闻类型(早报正文分类)
window.NEWS = {
  'updated': '2026-11-20',
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
      'date': '2026-11-20',
      'title': 'ChatGPT dots 向 Business Standard 用户以及部分 Plus 开放',
      'brief': 'OpenAI 员工 Tibo 发文宣布，已开始向少量 ChatGPT Plus 用户测试 dots 功能。此外， dots 将从今日起向所有 ChatGPT Business Standard 用户开放。',
      'url': 'https://x.com/thsottiaux/status/2123556256392847657',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-11-20',
      'title': 'ChatGPT 健康功能扩展至桌面端、Android 和 dots',
      'brief': 'OpenAI 宣布 ChatGPT 健康功能 Health 扩展至桌面应用、 Android 、 dots 和 Sites ，并支持通过 Android Health Connect 连接健康数据。',
      'url': 'https://help.openai.com/en/articles/6825453-chatgpt-release-notes',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-11-20',
      'title': 'Antigravity 桌面应用新增 SSH 连接功能',
      'brief': 'Google Antigravity 桌面应用推出 SSH 连接功能，可从侧边栏或命令面板连接远程 64 位 Linux 机器。',
      'url': 'https://antigravity.google/docs/ssh',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-11-20',
      'title': 'Mac 版 Gemini 应用上线 computer use 功能',
      'brief': 'Google 宣布 Mac 版 Gemini 应用上线 computer use 功能，AI 能在后台导航本地文件、桌面应用和网页，完成原本需要几十次点击的多步任务。',
      'url': 'https://blog.google/innovation-and-ai/products/gemini-app/computer-use-mac/',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-11-20',
      'title': 'Gemini API 预览推出工具按需加载功能',
      'brief': 'Google 在 Gemini API 预览推出 Tool Retrieval 功能，AI agent 可按需加载工具参数结构，无需每次请求发送完整工具定义，支持接入数百种工具并减少 tokens 消耗。',
      'url': 'https://blog.google/innovation-and-ai/technology/developers-tools/gemini-api-tool-retrieval/',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-11-20',
      'title': 'Qoder 免费用户不能再领每日 100 Credits',
      'brief': 'Qoder 调整每日领取 100 通用 Credits 活动的适用范围，自 11 月 19 日 10 时 起，体验版（免费）用户不再开放领取。',
      'url': 'https://docs.qoder.cn/events/100credits',
      'source': '橘鸦AI早报',
      'type': '开发生态'
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
    },
    {
      'date': '2026-11-19',
      'title': 'Google 发布 Gemini 4 Neon',
      'brief': 'Google 发布新模型 Gemini 4 Neon ，定位于 Gemini 4 Carbon 与 Hydrogen 之间，面向复杂软件工程、知识工作和科学工作流。模型支持四档思维水平调节，具备 100 万 token 上下文窗口，可处理表格、PDF、图表与音视频。',
      'url': 'https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-neon/',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-11-19',
      'title': 'DeepSeek：模型触发的搜索和抓取不再单独计费',
      'brief': 'DeepSeek API 文档显示，自北京时间 2026 年 11 月 18 日 12:00 起，模型调用触发的服务端搜索和网页抓取不再单独计费，只按模型 token 用量收费，联网工具、 Responses API 与 Anthropic API 的 web_search 等服务端工具均会触发。',
      'url': 'https://api-docs.deepseek.com/zh-cn/guides/search/',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-11-19',
      'title': 'Antigravity Pro 免费试用仅剩 3.8 Flash',
      'brief': '社区用户发现， Google 更新 Antigravity 文档，按订阅档位划分模型权限。',
      'url': 'https://antigravity.google/docs/models',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-11-19',
      'title': 'OpenCode：10 美元购 500 美元 GLM 5.3',
      'brief': 'OpenCode 宣布，本周结束前可获得价值 500 美元 的 GLM 5.3 使用额度。这项优惠面向 OpenCode Go 订阅用户，Go 方案每月收费 10 美元 。活动最初推出时， 10 美元 对应 100 美元 额度，随后提升至 200 美元 ，再到目前的限时 500 美元 。',
      'url': 'https://x.com/opencode/status/2122969474571583885',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-11-19',
      'title': 'ChatGPT 推出会计插件 协助结账和对账',
      'brief': 'OpenAI 宣布 ChatGPT for Accounting 现已可用，新的 Accounting 插件和合作方插件帮助用户以更少手工操作完成结账，任务覆盖月末报告、银行对账和数据录入等。',
      'url': 'https://openai.com/business/solutions/accounting',
      'source': '橘鸦AI早报',
      'type': '产品应用'
    },
    {
      'date': '2026-11-19',
      'title': 'Artificial Analysis 推理力度可筛选',
      'brief': 'AI 分析网站 Artificial Analysis 宣布正努力在其网站展示更多推理力度。',
      'url': 'https://x.com/ArtificialAnlys/status/2123121873555013816',
      'source': '橘鸦AI早报',
      'type': '产品应用'
    },
    {
      'date': '2026-11-19',
      'title': '腾讯混元开放 Hy4 flash 权重',
      'brief': '腾讯混元 宣布开源 Hy4 flash 系列模型，包含 Hy4 flash 、 Hy4 flash-FP8 和 Hy4 flash-Base ，开发者可在 GitHub 、 Hugging Face 、 ModelScope 和 GitCode 下载部署。',
      'url': 'https://mp.weixin.qq.com/s/yaFPaQL6MNVz01GD2sIlRw',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-11-19',
      'title': 'OpenAI 披露 AI 芯片设计进展，AMD GPU 电路指标最高改善 14%',
      'brief': 'OpenAI 披露，其模型提出的电路优化方案通过了该公司首款定制推理芯片 Jalapeño 的实际芯片验证。 OpenAI 估计，这些方案使芯片向量单元和矩阵单元的标准单元面积分别减少约 13% 和 10% 。',
      'url': 'https://openai.com/index/advancing-chip-design-with-our-models',
      'source': '橘鸦AI早报',
      'type': '技术与洞察'
    }
  ]
};
