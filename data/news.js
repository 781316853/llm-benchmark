// AI 热点新闻快照(由 scripts/lib/news.js 每日抓取维护,每日 2 次)
// 来源:「橘鸦AI早报」官方 RSS https://daily.juya.uk/rss.xml(每日整篇早报拆成逐条);仅保留最近 2 天
// 字段说明:date=新闻日期(UTC);title=标题;brief=简要;url=详情链接;source=来源;type=新闻类型(早报正文分类)
window.NEWS = {
  'updated': '2026-10-30',
  'retentionDays': 2,
  'types': [
    '要闻',
    '开发生态',
    '产品应用'
  ],
  'items': [
    {
      'date': '2026-10-30',
      'title': 'OpenAI 将 Pro 各档与 Business Premium 用量翻倍，dots 继续提供单独用量',
      'brief': 'OpenAI 宣布，即日起 Pro 100 、 Pro 200 、 Pro 500 和 Business Premium 的所有用量上限翻倍。 OpenAI 称听取了用户反馈，不再下调 Pro 200 的用量上限， Work 和 Codex 用量保持不变。',
      'url': 'https://x.com/thsottiaux/status/2115850175868727621',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-10-30',
      'title': 'Claude Code 命令行工具恢复 ultrathink 功能',
      'brief': 'Claude Code 命令行工具（ CC CLI ）恢复了 ultrathink 功能。 Adam Wolff 称，团队此前曾暂时关闭它，因为它有些奇怪，也可能造成混淆。他介绍，启用 ultrathink 后，单轮的 effort 会提升到 xhigh ，该轮生成的 subagents 同样以 xhigh 运行，这一轮结束后恢复为此前的设定。 Adam Wolff 还称，该功能很快会登陆 Claude Desktop 。',
      'url': 'https://x.com/dmwlff/status/2115614417689944066',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-10-30',
      'title': 'Google 宣布异步编程 agent Jules 将关停',
      'brief': 'Jules 团队在 X 上宣布， Jules 将进入关停流程。',
      'url': 'https://jules.google/docs/changelog/2026-10-29',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-10-30',
      'title': 'Google Antigravity 推出 Plugin Marketplace',
      'brief': 'Google Antigravity 推出 Plugin Marketplace，这是一个集中浏览和安装第三方与 Google 构建插件的目录，覆盖 Antigravity App 和 Antigravity CLI。',
      'url': 'https://antigravity.google/docs/marketplace',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-10-30',
      'title': 'Herdr Labs 推出开源 herdr-core 与桌面应用 herdr-app',
      'brief': 'Herdr Labs 在 X 上宣布推出开源的 herdr-core ，以及基于它构建的桌面应用 herdr-app 。 Herdr 称，应用内所有内容都是 ~/.config/herdr-app 下的本地文件，其中的 AGENTS.md 会告诉 agent 可以修改什么，用户提出需求即可让 agent 编辑。',
      'url': 'https://github.com/herdrdev/herdr-app',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-10-30',
      'title': 'Factory 发布 Droid 1.0，默认采用程序化工具调用',
      'brief': 'Factory 发布 Droid 1.0 ，作为其 agent 的新引擎，面向复杂项目和日常开发。',
      'url': 'https://factory.com/news/frontier-harness',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-10-30',
      'title': 'Gemini 应用支持在聊天中生成、预览和编辑PDF等文件',
      'brief': 'Google 宣布， Gemini 应用现在支持在聊天中直接生成、预览和编辑文档、 PDF 、演示文稿、电子表格、 Markdown 文件、 TXT 文件和代码。',
      'url': 'https://blog.google/innovation-and-ai/products/gemini-app/edit-files-directly/',
      'source': '橘鸦AI早报',
      'type': '产品应用'
    },
    {
      'date': '2026-10-30',
      'title': 'Gemini Notebook 新增数百本免费教科书',
      'brief': 'Google 宣布， Gemini Notebook 新增 数百本 教科书，学生可以免费直接在 Notebook 内浏览、选择，并上传为资料来源，用于准备考试。教科书来自 S Chand Publishing 、 OpenStax 和 Open Textbook Library 等出版方。 Google 在博客中称，用户添加教科书后，可以生成自定义的学习指南和测验。',
      'url': 'https://blog.google/innovation-and-ai/products/gemini-notebook/new-access-textbooks/',
      'source': '橘鸦AI早报',
      'type': '产品应用'
    },
    {
      'date': '2026-10-30',
      'title': 'Claude 移动应用更新：多账号切换、CarPlay 语音',
      'brief': 'Anthropic 旗下的 Claude 本周更新移动应用。在 iPad 和 iPhone Duo 上， Claude 生成的内容改为在聊天旁侧打开，需要细看时可全屏显示； iOS 和 Android 支持登录多个账号并切换，无需退出登录。应用界面语言新增 24 种，共 33 种，覆盖 web 、桌面端、 iOS 和 Android 。 iOS 和 Android 的语音模式响应更快， iPhone 上的语音模式支持 Apple Car…',
      'url': 'https://x.com/claudeai/status/2115859377488072879',
      'source': '橘鸦AI早报',
      'type': '产品应用'
    },
    {
      'date': '2026-10-30',
      'title': 'Anthropic 为 Claude Enterprise 推出智能报告',
      'brief': 'Anthropic 为 Claude Enterprise 推出智能报告功能，管理者选定团队、最长 28 天 的时间范围和 Claude 产品后，可查看团队的工作流、产出内容、对应开销和常见阻碍。每个组织每月可免费生成 10 份 报告，达到上限后无法新建，需联系客户团队。',
      'url': 'https://claude.com/resources/articles/smart-reports-surveys-pooled-budgets',
      'source': '橘鸦AI早报',
      'type': '产品应用'
    },
    {
      'date': '2026-10-29',
      'title': 'Google 推出 Gemini 4 Carbon，先向部分用户开放',
      'brief': 'Google 发布新一代前沿模型 Gemini 4 Carbon ，称其为目前最强的模型，在网络安全和长时程任务上达到业界最高水平，距 Gemini 4 Argon 发布仅 两周 。',
      'url': 'https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-carbon/',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-10-29',
      'title': 'OpenAI 向 ChatGPT Pro 和 Business 订阅用户发放 API 额度',
      'brief': 'OpenAI Developers 宣布，符合条件的 ChatGPT Pro 和 Business 订阅用户即日起可领取每月最高 500 美元 的 API 额度，用于开发应用和 agent 。',
      'url': 'https://x.com/OpenAIDevs/status/2115583698074755078',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-10-29',
      'title': 'OpenAI 员工：ChatGPT 的 Chat 与 Work 整合今年推出',
      'brief': 'OpenAI Codex 与 ChatGPT 团队的 Tibo 在 X 上表示，团队正在筹备整合 ChatGPT 中 Chat 与 Work 的能力，但目前尚未推出，并为造成的误解致歉。',
      'url': 'https://x.com/thsottiaux/status/2115588390414581916',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-10-29',
      'title': 'Tibo：28 天计划第 23 天为重置，已完成',
      'brief': 'OpenAI 的 Codex 团队成员 Tibo 于昨日表示， 28 天 更新计划第 23 天 的内容是一次重置，该重置已于昨日下午完成。',
      'url': 'https://x.com/thsottiaux/status/2115330127886463244',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-10-29',
      'title': 'Google 将 AI Mode 广告扩展到 10 国',
      'brief': 'Google 宣布， AI Mode 中的广告扩展到澳大利亚、加拿大、印度、Kenya、马来西亚、新西兰、Nigeria、巴基斯坦、菲律宾和新加坡。同时， Google 在美国推出 multi-turn ads ，让用户在 AI Mode 中继续追问时，也能展示广告。 Google 计划在 2026 年第四季度 扩展到巴西、墨西哥和英国等更多地区，广告将明确标注“Sponsored”。 Google 商务负责人 Philipp Schi…',
      'url': 'https://blog.google/products/ads-commerce/ads-in-ai-mode-global/',
      'source': '橘鸦AI早报',
      'type': '产品应用'
    }
  ]
};
