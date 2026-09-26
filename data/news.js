// AI 热点新闻快照(由 scripts/lib/news.js 每日抓取维护,每日 2 次)
// 来源:「橘鸦AI早报」官方 RSS https://daily.juya.uk/rss.xml(每日整篇早报拆成逐条);仅保留最近 2 天
// 字段说明:date=新闻日期(UTC);title=标题;brief=简要;url=详情链接;source=来源;type=新闻类型(早报正文分类)
window.NEWS = {
  'updated': '2026-09-26',
  'retentionDays': 2,
  'types': [
    '要闻',
    '开发生态',
    '技术与洞察',
    '产品应用'
  ],
  'items': [
    {
      'date': '2026-09-26',
      'title': '美团LongCat发布LongCat-2.5-Preview',
      'brief': '美团 LongCat 发布 LongCat-2.5-Preview 模型。',
      'url': 'https://longcat.chat/platform/docs/zh/change-log',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-09-26',
      'title': 'Pixel Canary 上线 Cline 与 Vercel AI Gateway',
      'brief': '模型 Pixel Canary 以 stealth 方式发布，现已在 Cline 和 Vercel AI Gateway 两个平台开放，模型 ID 为 𝚜𝚝𝚎𝚊𝚕𝚝𝚑/𝚙𝚒𝚡𝚎𝚕-𝚌𝚊𝚗𝚊𝚛𝚢 。该模型面向 Agentic 编程和移动应用开发。',
      'url': 'https://x.com/cline/status/2103636639038026093',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-09-26',
      'title': 'OpenAI 确认 Codex 全面中断已修复，将为付费用户重置使用限额',
      'brief': 'OpenAI 旗下 AI 编程工具 Codex 在北京时间 9 月 26 日 早间出现全面服务中断，桌面端、 CLI 等入口的用户遭遇大面积 401 Unauthorized / Incorrect API key 报错。',
      'url': 'https://status.openai.com/incidents/01M3DCNWMW57HYK8FJ5FBFPA39',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-09-26',
      'title': 'Claude Code 更新：5小时限制触发时不中断任务功能',
      'brief': 'ClaudeDevs 宣布， Claude Code 新增会话限制收尾机制：当用户在任务中途触及 5 小时 会话限制时，系统不再直接在编辑过程中截断，而是尝试寻找合适的停止点，利用从每周额度中划出的一份小额固定用量，尽可能完成收尾工作。',
      'url': 'https://x.com/ClaudeDevs/status/2103561342057943314',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-09-26',
      'title': 'OpenCode 宣布 DeepSeek v4.1 Flash 的 60 美元额度转为永久',
      'brief': 'OpenCode 在 X 平台宣布，“Operation Cheepseek”第二阶段启动， DeepSeek v4.1 Flash 模型对应的 60 美元 使用额度由阶段性行动转为永久配置。',
      'url': 'https://x.com/opencode/status/2103505541871907109',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-09-26',
      'title': 'DeepSeek Harness团队承诺减少插件API破坏性更新',
      'brief': 'DeepSeek Harness 团队负责人在 X 平台发文，援引 DeepSeek 官方 API 统计数据称，约有 60% 的 DeepSeek Harness 用户使用了至少一个第三方插件。',
      'url': 'https://x.com/tianyi/status/2103534313463783831',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-09-26',
      'title': 'Anthropic 上线 Claude 插件提交门户',
      'brief': 'Anthropic 为 Claude 推出全新的插件目录提交门户，开发者可通过它向 Claude 目录提交插件并跟踪审核进度。插件可打包 MCP 连接器、 Agent Skills 或两者组合，是第三方为 Claude 构建扩展的主要方式。',
      'url': 'https://claude.com/blog/build-plugins-for-claude',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-09-26',
      'title': 'Exa 发布深度研究产品 Agent Ultra',
      'brief': 'Exa 发布深度研究产品 Agent Ultra 。该产品通过编排大规模 Agent 集群执行穷尽式研究、构建全面列表，并回答需要数千个来源才能解答的问题。',
      'url': 'https://x.com/ExaAILabs/status/2103526510355517826',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-09-26',
      'title': 'OpenAI向用户逐步推出ChatGPT网页端新版界面',
      'brief': 'ChatGPT 桌面版和网页版近期都有用户陆续收到新版界面更新。',
      'url': 'https://x.com/testingcatalog/status/2103605626731389426',
      'source': '橘鸦AI早报',
      'type': '产品应用'
    },
    {
      'date': '2026-09-26',
      'title': '微软发布 Copilot 更新：Home、Code、Autopilot 集于一体',
      'brief': '微软宣布对 Microsoft Copilot 进行迄今最大规模的更新，将其定位为跨越所有模型、设备形态和任务类型的“工作新操作系统”。',
      'url': 'https://blogs.microsoft.com/blog/2026/09/25/introducing-the-new-copilot-with-home-code-and-autopilot/',
      'source': '橘鸦AI早报',
      'type': '产品应用'
    },
    {
      'date': '2026-09-26',
      'title': 'Anthropic：Claude 以数千美元成本算出 N=4 super Yang-Mills 九圈振幅',
      'brief': '物理学者、科学作家 Matt von Hippel 上月在博客向 AI 公司发起挑战：能否用学术界可负担的计算资源，把 幅学 领域中“玩具模型”理论 planar N=4 super Yang-Mills 的散射振幅计算推进到 九圈 。',
      'url': 'https://www.anthropic.com/research/yes-claude-can-do-nine-loops',
      'source': '橘鸦AI早报',
      'type': '技术与洞察'
    },
    {
      'date': '2026-09-25',
      'title': '硅基流动上线三款开源快速决策模型 API，10 月 8 日前免费调用',
      'brief': '硅基流动 上线 Kev-4B 、 SemIf 和 DiffusionGemma 三款开源快速决策模型，做成 Serverless 服务，通过 API 开放调用，并在 2026 年 10 月 8 日 前提供免费调用。三款模型采用不同技术路径，面向需要快速获得结构化判断的应用场景。',
      'url': 'https://mp.weixin.qq.com/s/HPbVrM8kevJXAETXbjC6ug',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-09-25',
      'title': '博查发布Bocha Jev决策模型，API限时免费测试',
      'brief': '博查 发布面向结构化决策任务的 Bocha Jev 模型，并开放API限时免费测试。开发者可使用已有的 博查 API Key接入，按当前状态、任务指令和候选项发起请求，让模型完成动作选择、内容评分或条件判断，再由业务程序读取结果并执行后续操作。',
      'url': 'https://mp.weixin.qq.com/s/P21_6xJLwFAvgziHeoxnhw',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    }
  ]
};
