// AI 热点新闻快照(由 scripts/lib/news.js 每日抓取维护,每日 4 次)
// 来源:「橘鸦AI早报」官方 RSS https://daily.juya.uk/rss.xml(每日整篇早报拆成逐条);仅保留最近 2 天
// 字段说明:date=新闻日期(UTC);title=标题;brief=简要;url=详情链接;source=来源;type=新闻类型(早报正文分类)
window.NEWS = {
  'updated': '2026-11-14',
  'retentionDays': 2,
  'types': [
    '要闻',
    '开发生态',
    '模型发布'
  ],
  'items': [
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
    },
    {
      'date': '2026-11-14',
      'title': 'Antigravity 为 Pro 用户开放 Orchestrator',
      'brief': 'Antigravity 团队的 Varun Mohan 宣布， Orchestrator 已向 Pro 订阅用户开放。',
      'url': 'https://antigravity.google/docs/models',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-11-14',
      'title': 'Google AI Studio 支持领取订阅附赠的每月 Cloud 额度',
      'brief': 'Google 宣布，订阅 Google AI Pro 或 Ultra 计划的用户现可直接在 Google AI Studio 领取每月 Google Cloud 推广额度。每月额度有效期为 12 个月 ，可绑定到自有的 Gemini API Key ，用于自己的应用和任意 Gemini 模型。',
      'url': 'https://blog.google/innovation-and-ai/technology/developers-tools/google-cloud-credits-gdp-ai-studio/',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-11-14',
      'title': 'Anthropic 更新 Claude Code Projects 功能',
      'brief': 'Anthropic 宣布更新 Claude Code 中的 Projects 功能，让协调器在项目聊天中回答问题，并更主动地汇报进行中线程的状态。',
      'url': 'https://claude.com/form/projects',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-11-14',
      'title': 'Cognition 宣布免费 SWE-2 成为 Devin 订阅用户永久权益',
      'brief': 'Cognition 升级 Devin Teams 订阅方案，团队成员无需额外购买席位即可使用 Devin Desktop ，每人可使用两个由 SWE-2 驱动的并发免费会话。',
      'url': 'https://devin.ai/blog/devin-teams-plan',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-11-13',
      'title': 'Google 推出 Gemini 4 Hydrogen',
      'brief': 'Google 发布 Gemini 4 Hydrogen ，主打日常编码和 Agent 任务。官方称，其完成任务比 Gemini 3.8 Flash 快 2.5 倍 。',
      'url': 'https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-hydrogen/',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-11-13',
      'title': 'Google Antigravity 推出 Orchestrator 选项',
      'brief': 'Google 在 Antigravity 中推出 Orchestrator 功能和 Gemini 4 Hydrogen 模型。',
      'url': 'https://antigravity.google/blog/gemini-4-hydrogen-in-google-antigravity',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-11-13',
      'title': 'Inkling 2 Small 权重正式开放',
      'brief': 'Thinking Machines 宣布在 Hugging Face 以 Apache 2.0 许可开放 Inkling 2 Small 模型权重。该模型是多模态 MoE 模型，总参数 594B 、激活 17B ，支持图文输入与最长 1M token 上下文，提供 NVFP4 和 MXFP8 两种精度， NVFP4 版需至少 500GB 显存。',
      'url': 'https://x.com/thinkymachines/status/2120982625582195011',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-11-13',
      'title': 'IBM 发布 LLMON 标记语言降低提示注入风险',
      'brief': 'IBM 发布 LLMON 标记语言及 GitHub 工具库，并在 Hugging Face 开源基于 Granite 4.1 微调的 3B 、 8B 两个实验预览模型，采用 Apache 2.0 许可。',
      'url': 'https://huggingface.co/blog/ibm-granite/llmon-an-llm-native-markup-language-now-in-granite',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    }
  ]
};
