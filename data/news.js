// AI 热点新闻快照(由 scripts/lib/news.js 每日抓取维护,每日 2 次)
// 来源:「橘鸦AI早报」官方 RSS https://daily.juya.uk/rss.xml(每日整篇早报拆成逐条);仅保留最近 2 天
// 字段说明:date=新闻日期(UTC);title=标题;brief=简要;url=详情链接;source=来源;type=新闻类型(早报正文分类)
window.NEWS = {
  'updated': '2026-09-27',
  'retentionDays': 2,
  'types': [
    '要闻',
    '开发生态',
    '模型发布',
    '技术与洞察',
    '前瞻与传闻',
    '产品应用'
  ],
  'items': [
    {
      'date': '2026-09-27',
      'title': 'OpenAI 暂停最强模型涉及工具调用的训练、评估和推理',
      'brief': 'OpenAI 近日披露多项模型失准（ misalignment ）相关情况，包括一个研究模型在 RL 训练中绕过网络限制访问外部聊天机器人、另一内部模型曾将员工的 GitHub token 写入公开仓库，以及一项关于自复制提示注入的新研究发现。',
      'url': 'https://alignment.openai.com/misalignment-reports/',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-09-27',
      'title': 'Codex 负责人宣布用量重置已生效，下周还有更多重置',
      'brief': 'Codex 负责人 Tibo （@thsottiaux） 9 月 26 日 先后在 X 发文，先宣布本轮用户用量重置已全部生效并表示“到此为止”，数小时后回应用户关于“覆盖了自然重置”的反馈称“下周还会有更多重置”。',
      'url': 'https://x.com/thsottiaux/status/2103963215885701493',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-09-27',
      'title': '美团 LongCat 2.5 Preview 登陆 OpenCode 免费开放两周',
      'brief': 'LongCat-2.5-Preview 模型现已在 OpenCode 平台免费开放，为期 两周 。',
      'url': 'https://x.com/Meituan_LongCat/status/2103844449550020816',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-09-27',
      'title': 'Antigravity 2.0 上线 /plan 规划模式',
      'brief': '谷歌 Antigravity 宣布， Antigravity 2.0 现已提供与 Antigravity CLI 一致的专属规划模式。用户在输入框中键入 /plan 并附上任务目标后，agent 会先退后思考，探索工作区、检查依赖关系并开展研究，随后生成一份结构化的实现计划（Implementation Plan）供用户审阅，并在获得批准后才进入执行阶段。',
      'url': 'https://x.com/antigravity/status/2103611698800140697',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-09-27',
      'title': 'DeepSeek Harness 负责人推荐社区插件 dsh-TUI',
      'brief': 'DeepSeek Harness （ DSH ）负责人 Tianyi Cui （ 崔天翼 ）在 X 平台发帖，推荐从 DSH 内测期间就持续开发的社区插件 dsh-TUI ，称其补齐了 DSH 缺失的终端界面（ TUI ），并持续随 DSH 版本更新打磨功能。',
      'url': 'https://github.com/ccch1mneyyy/dsh-TUI',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-09-27',
      'title': 'InternLM 开源多模态决策模型 Intern-Decision',
      'brief': '书生大模型 InternLM 在 GitHub 开源多模态决策模型项目 Intern-Decision ，并在 Hugging Face 发布 Intern-Decision-0.8B 、 Intern-Decision-2B 和 Intern-Decision-4B 三个模型权重。',
      'url': 'https://github.com/InternLM/Intern-Decision',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-09-27',
      'title': '腾讯音乐推出智能创作平台 MusicBuddy',
      'brief': '腾讯音乐 推出面向音乐人的智能创作平台 MusicBuddy ，已上线官网 musicbuddy.cn。',
      'url': 'https://musicbuddy.cn/',
      'source': '橘鸦AI早报',
      'type': '产品应用'
    },
    {
      'date': '2026-09-27',
      'title': 'Anthropic 发文解释 Claude Code effort 参数原理',
      'brief': 'Anthropic 发文，面向用户解释了 Claude Code 中 effort 参数的原理，并给出分档使用建议。',
      'url': 'https://claude.dev/blog/spending-your-effort/',
      'source': '橘鸦AI早报',
      'type': '技术与洞察'
    },
    {
      'date': '2026-09-27',
      'title': 'Anthropic 发文详解 Opus 5.5 任务成本：同样任务约省 31%',
      'brief': 'Anthropic 发文，分析 Opus 5.5 在 Claude Code 中的任务成本，并配套互动计算器。',
      'url': 'https://claude.dev/blog/what-a-task-costs-on-opus-5-5/',
      'source': '橘鸦AI早报',
      'type': '技术与洞察'
    },
    {
      'date': '2026-09-27',
      'title': 'OpenAI 预热 DevDay，爆料称将推出“o”always-on Agent',
      'brief': '据多名 X 用户及爆料账号消息， OpenAI 可能会在下周 DevDay 推出名为「o」的常驻型助手（ always-on assistant ），主打长时间持续运行任务。',
      'url': 'https://x.com/OpenAIDevs/status/2103929727761137940',
      'source': '橘鸦AI早报',
      'type': '前瞻与传闻'
    },
    {
      'date': '2026-09-27',
      'title': 'Axios：OpenAI 与 Anthropic 调查数万起前沿模型问题行为事件',
      'brief': '据 Axios 记者报道，消息人士透露， OpenAI 、 Anthropic 和安全研究人员正在调查 数万起 前沿模型采取了外部评估者会认为有问题行为的事件。',
      'url': 'https://www.axios.com/2026/09/26/openai-anthropic-thousands-ai-security-incidents',
      'source': '橘鸦AI早报',
      'type': '前瞻与传闻'
    },
    {
      'date': '2026-09-27',
      'title': 'The Information：TypeSafe AI与投资者商谈逾10亿美元新融资',
      'brief': '据 The Information 报道，AI公司 TypeSafe AI 正在与投资者商谈新一轮融资，融资规模为 10亿美元或以上 。',
      'url': 'https://x.com/theinformation/status/2103839519019569371',
      'source': '橘鸦AI早报',
      'type': '前瞻与传闻'
    },
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
    }
  ]
};
