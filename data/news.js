// AI 热点新闻快照(由 scripts/lib/news.js 每日抓取维护,每日 4 次)
// 来源:「橘鸦AI早报」官方 RSS https://daily.juya.uk/rss.xml(每日整篇早报拆成逐条);仅保留最近 2 天
// 字段说明:date=新闻日期(UTC);title=标题;brief=简要;url=详情链接;source=来源;type=新闻类型(早报正文分类)
window.NEWS = {
  'updated': '2026-11-15',
  'retentionDays': 2,
  'types': [
    '要闻',
    '开发生态',
    '模型发布',
    '技术与洞察',
    '行业动态'
  ],
  'items': [
    {
      'date': '2026-11-15',
      'title': 'Grok Bot 多项优化上线，订阅用量增约 7%',
      'brief': 'Grok Bot 团队成员 Sam Sokolin 发文称，本周已完成多项 Grok Bot harness 优化，订阅方案用量预计可增加约 7% ，日常运行最多可增加约 15% 。',
      'url': 'https://x.com/mattyp/status/2121624592326480311',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-11-15',
      'title': 'Claude Code 桌面版推出 mods 自定义主题',
      'brief': 'Anthropic 宣布， Claude Code 桌面版现已支持通过 mods 构建自定义主题，用户可以调整颜色、添加动画背景。构建主题时可以直接告诉 Claude 想要的外观，也可以使用官方提供的 theme-examples 插件快速开始。想自己动手的开发者可以参考官方发布的配套文档。该功能需要更新到最新版桌面应用，目前在本地会话中生效，云端会话支持即将推出。',
      'url': 'https://code.claude.com/docs/en/plugins/mods/interface',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-11-15',
      'title': '谷歌 300 美元赠金将不再覆盖 Gemini 调用费用',
      'brief': 'Google Cloud 官方文档显示， 2026 年 11 月 16 日 或之后注册免费试用或升级为付费结算账号的用户，其 300 美元 迎新赠金将无法用于支付 Gemini Platform （含 Vertex AI ）、 AI Studio 中的 Gemini API ，以及以模型即服务形式提供的生成式 AI 合作伙伴模型的费用，只能用于免费试用计划涵盖的其他 Google Cloud 产品和服务。',
      'url': 'https://docs.cloud.google.com/free/docs/free-cloud-features',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-11-15',
      'title': 'Cloudflare 开源 Kitesurf 浏览器，支持自行部署',
      'brief': 'Cloudflare 将专为 AI agent 设计的浏览器 Kitesurf 在 GitHub 开源，采用 Apache 2.0 许可证。',
      'url': 'https://blog.cloudflare.com/kitesurf-open-source/',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-11-15',
      'title': 'Claude 发布 always-on agents 指南',
      'brief': 'Claude 团队发布 Building always-on agents 指南，介绍如何搭建能跨会话管理状态、无需直接监督就主动行动的 always-on agents 。指南说明，这类 agent 大部分时间休眠，收到事件后执行一次 run 并保存状态，其架构包含 event inbox 、 timers 、 memory 、 permissions 和 outbox 五个核心模块。',
      'url': 'https://claude.com/resources/articles/building-always-on-agents',
      'source': '橘鸦AI早报',
      'type': '技术与洞察'
    },
    {
      'date': '2026-11-15',
      'title': 'Anthropic 发布 10 项安全评测建议',
      'brief': 'Anthropic 在工程博客发布 10 项安全评测建议。',
      'url': 'https://anthropic.com/research/building-strong-safety-evaluations',
      'source': '橘鸦AI早报',
      'type': '技术与洞察'
    },
    {
      'date': '2026-11-15',
      'title': 'Cursor 披露安全事件：密钥泄露致部分数据外泄',
      'brief': 'Cursor 发布安全事件更新：攻击者利用 Fireworks 泄露的访问密钥，复制了部分智能体链路追踪数据，少量数据含未脱敏凭证，API 凭证遭泄露的客户不到 0.01% 。攻击者借此入侵了 Cursor 使用的部分 SaaS 工具。',
      'url': 'https://cursor.com/blog/security-incident-update',
      'source': '橘鸦AI早报',
      'type': '行业动态'
    },
    {
      'date': '2026-11-14',
      'title': 'DeepSeek 开放 TTS、ASR 和 OCR 等 API',
      'brief': 'DeepSeek 开放全家桶应用 API，将 Search 、 Fetch 、 OCR 、 ASR 和 TTS 等能力提供为独立接口，开发者可单独或组合调用搜索、网页抓取、文字识别、语音识别和合成，接入自己的工作流。',
      'url': 'https://api-docs.deepseek.com/guides/build_a_chatbot',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-11-14',
      'title': 'OpenAI 推出 ChatGPT Wallet 支付功能',
      'brief': 'OpenAI 宣布推出支付功能 ChatGPT Wallet ，与 American Express 、 Mastercard 和 Visa 合作，让旗下的 dot 智能体代替用户完成购物。',
      'url': 'https://openai.com/index/introducing-chatgpt-wallet/',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-11-14',
      'title': 'Antigravity 重置用户 Gemini 使用额度',
      'brief': 'Google Antigravity 负责人 Varun Mohan 宣布， Antigravity 正在重置所有用户的 Gemini 使用额度，以纪念一周内的密集发布。',
      'url': 'https://x.com/_mohansolo/status/2121380918355234957',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-11-14',
      'title': '腾讯发布混元实时语音模型 Hy Realtime',
      'brief': '腾讯 发布全新实时语音模型 Hy Realtime ，在语音理解、指令遵循和拟人化表达等基础能力上升级，并新增 Agentic 工具调用与唱歌能力。模型可结合对话上下文判断是否执行联网搜索，统一搜索决策、调用工具与生成回答。',
      'url': 'https://mp.weixin.qq.com/s/bFxAT04ohJs9hPcjjin3bg',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-11-14',
      'title': 'Antigravity 推出 Dynamic Workflows 功能',
      'brief': 'Google Antigravity 在 App 和 CLI 中推出 Dynamic Workflows 。用户输入 /run-workflow 或用自己的话描述任务后，agent 会为任务编写 Python 脚本，协调并行或顺序运行的 subagent ，提供确定性的控制流程，避免 prompt 漂移。脚本在运行前会先交给用户确认，也可以保存下来随时重新运行。 Varun Mohan 表示，该功能在内部使用非常频繁，模型应能像 swa…',
      'url': 'https://antigravity.google/docs/dynamic-workflows',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    }
  ]
};
