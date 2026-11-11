// AI 热点新闻快照(由 scripts/lib/news.js 每日抓取维护,每日 4 次)
// 来源:「橘鸦AI早报」官方 RSS https://daily.juya.uk/rss.xml(每日整篇早报拆成逐条);仅保留最近 2 天
// 字段说明:date=新闻日期(UTC);title=标题;brief=简要;url=详情链接;source=来源;type=新闻类型(早报正文分类)
window.NEWS = {
  'updated': '2026-11-11',
  'retentionDays': 2,
  'types': [
    '要闻',
    '开发生态',
    '模型发布'
  ],
  'items': [
    {
      'date': '2026-11-11',
      'title': '谷歌正式开放模型 Gemini 4 Carbon',
      'brief': '谷歌宣布正式开放 Gemini 4 Carbon 模型，称其为目前能力最强的模型，主打网络安全、长周期智能体工作流以及复杂软件工程与科研推理。该模型此前已先行公布，并曾通过 Fairwind Program 向部分网络安全防御人员开放，此次面向所有付费开发者和企业开放 API 。',
      'url': 'https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-carbon-now-available/',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-11-11',
      'title': 'MiniMax 发布 H3-Image 并开放权重',
      'brief': 'MiniMax 发布基于 H3 的图像生成模型 H3-Image ，并开放模型权重。模型支持文字生图、图像编辑和参考图生图，最多可使用 16 张 参考图，输出可达 4096×4096 像素 ，约 1600 万像素 。',
      'url': 'https://www.minimax.io/blog/minimax-h3-image',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-11-11',
      'title': 'Anthropic 推出 Claude Whiteboards、Claude Sheets 和 Claude Data',
      'brief': 'Anthropic 开始向付费计划用户推送 Claude Whiteboards 、 Claude Sheets 和 Claude Data ，将团队计划、表格和业务数据整合到 Claude 的协作工作流程中。',
      'url': 'https://claude.com/resources/articles/more-ways-to-work-with-claude-sheets-whiteboards-and-interactive-connectors',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-11-11',
      'title': '补偿额度多耗，Anthropic 发放免费完整重置',
      'brief': 'Anthropic 宣布，已向所有 Pro 、 Max 、 Ultra 和 Team 用户发放一次免费完整额度重置，覆盖全部模型和额度限制，须在太平洋时间 12 月 10 日下午 2 点 前使用。该公司表示，此举是为补偿近期修复的若干导致额度消耗超出预期的小问题，此前的 Fable 重置未能充分补偿已耗尽全部模型周额度的用户。',
      'url': 'https://x.com/ClaudeDevs/status/2120275296637321476',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-11-11',
      'title': 'OpenAI 开放第三方工具使用 ChatGPT Business 订阅方案',
      'brief': 'OpenAI 宣布，用户现在可以通过 Sign in with ChatGPT ，在 Notion 、 v0 、 ampcode 、 kilocode 、 Warp 、 Nous Research 的 Hermes 、 openclaw 、 opencode 等第三方工具中使用 ChatGPT Business 订阅方案。',
      'url': 'https://x.com/OpenAIDevs/status/2120212596850663712',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-11-11',
      'title': 'Google DeepMind 推出 Gemini Robotics 2.5',
      'brief': 'Google DeepMind 推出视觉-语言-动作（VLA）机器人模型 Gemini Robotics 2.5 ，称其提升了机器人的灵巧度、可靠性与安全性，目前已面向 Google 的机器人合作伙伴开放。',
      'url': 'https://deepmind.google/blog/gemini-robotics-2-5-accelerates-real-world-physical-intelligence/',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-11-11',
      'title': 'ElevenLabs 发布 Scribe v3 与 Scribe v3 Live 语音转写模型',
      'brief': 'ElevenLabs 推出语音转文字模型 Scribe v3 和 Scribe v3 Live ，官方称两者的转录与说话人区分精度在其测试过的模型中最佳。',
      'url': 'https://elevenlabs.io/blog/scribe-v3',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-11-11',
      'title': 'Amazon 开源表格基础模型 Mitra-v2',
      'brief': 'Amazon 发布第二代表格基础模型 Mitra-v2 ，支持分类和回归，预训练完全使用合成数据，不使用任何真实数据或客户数据。分类与回归两个版本以及推理、微调代码已在 Hugging Face 按 Apache-2.0 许可开源。',
      'url': 'https://huggingface.co/autogluon/mitra-classifier-2',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-11-11',
      'title': 'Google Antigravity 推出 /swarm 预览，多 agent 协作并行开发',
      'brief': 'Google Antigravity 推出新的命令 /swarm ，目前处于预览阶段，覆盖 Antigravity App 和 Antigravity CLI。',
      'url': 'https://antigravity.google/docs/swarm',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-11-11',
      'title': '美团 LongCat 2.5 在 OpenCode 免费两周',
      'brief': 'OpenCode 宣布， 美团 的 LongCat 2.5 模型目前在平台免费开放两周，支持 1M 上下文、多模态输入和零数据保留。',
      'url': 'https://x.com/opencode/status/2119789096503746751',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-11-11',
      'title': 'Tailscale OAuth apps 正式可用，Grok Bot 可访问内网 MCP 服务器',
      'brief': 'Tailscale 宣布 OAuth apps 正式可用，该功能通过标准 OAuth 2.0 授权流程，把用户在 Tailscale 上的私有网络 tailnet 与 AI agent 连接起来。',
      'url': 'https://tailscale.com/blog/oauth-apps-ga',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-11-11',
      'title': 'Chrome 联合 Firefox、Edge 和 MDN 发布 Modern Web Guidance 1.0',
      'brief': 'Chrome 联合 Firefox 、 Microsoft Edge 和 MDN 团队发布面向 AI 编程智能体的技能集 Modern Web Guidance 1.0 稳定版，该项目此前在 Google I/O 大会上开启早期预览，现由四方团队共同维护。',
      'url': 'https://developer.chrome.com/blog/modern-web-guidance-v1',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-11-10',
      'title': 'Meta 发布迄今最小模型 Muse Ember，专攻 agent 重复任务',
      'brief': 'Meta 发布其迄今最小、最高效的模型 Muse Ember ，模型名为 muse-ember-1.0 ，用于复杂推理以及工具调用、编码子任务、信息抽取等重复性 agent 工作。',
      'url': 'https://research.meta.ai/blog/muse-ember',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-11-10',
      'title': 'Adventists AI 开源全双工语音模型 Sophon-Realtime v1',
      'brief': 'Adventists AI 在魔搭 ModelScope 开源了全双工语音模型系列 Sophon-Realtime v1 ，包含 Tag 、 Flash 、 E2E 三个版本，代码和权重均采用 Apache-2.0 协议，允许商用。',
      'url': 'https://modelscope.ai/models/AdventistsAI/Sophon-Realtime-v1',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-11-10',
      'title': 'Inkling 2 Small 上架 OpenRouter，限时免费调用',
      'brief': 'OpenRouter 宣布， Thinking Machines 的 Inkling 2 Small 模型现已上架该平台，限时免费开放调用。',
      'url': 'https://openrouter.ai/thinkingmachines/inkling-2-small:free',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    }
  ]
};
