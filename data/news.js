// AI 热点新闻快照(由 scripts/lib/news.js 每日抓取维护,每日 2 次)
// 来源:「橘鸦AI早报」官方 RSS https://daily.juya.uk/rss.xml(每日整篇早报拆成逐条);仅保留最近 2 天
// 字段说明:date=新闻日期(UTC);title=标题;brief=简要;url=详情链接;source=来源;type=新闻类型(早报正文分类)
window.NEWS = {
  'updated': '2026-09-24',
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
      'date': '2026-09-24',
      'title': '“stealth”模型 Space Bunny Alpha 现身 OpenRouter与OpenCode',
      'brief': 'Space Bunny Alpha 已同时上线 OpenRouter 和 OpenCode ，并提供 一周 免费使用。该模型目前以匿名/ stealth 模型身份提供，支持快速推理、可调节 reasoning 、 100 万 token 上下文窗口，以及文本、图片和视频等多模态输入， OpenRouter 还提到其具备较强的代码能力。',
      'url': 'https://openrouter.ai/stealth/space-bunny-alpha',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-09-24',
      'title': '谷歌发布 Gemini 3.8 Flash TTS 和 Gemini 3.8 Flash-Lite TTS',
      'brief': '谷歌 推出 Gemini 3.8 Flash TTS 和 Gemini 3.8 Flash-Lite TTS 两款文本转语音模型，面向创作者、开发者和企业制作音频内容。两款模型支持在 一百多种 语言中定制声音，也可选用 两千多种 现成声音；用户能够逐句指导对白表现，并加入笑声等自然语音提示。',
      'url': 'https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-8-text-to-speech/',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-09-24',
      'title': 'OpenAI升级ChatGPT Voice，支持插件及GPT-6系列模型',
      'brief': 'OpenAI 宣布升级 ChatGPT Voice ，功能正通过最新版应用在全球推出。用户现在可在语音对话中调用邮件、日历、 Slack 等插件；语音功能也可由 GPT-6 Astra 、 Sol 和 Luna 提供支持。',
      'url': 'https://x.com/OpenAI/status/2102808325742322002',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-09-24',
      'title': 'Claude Code云端会话功能正式开放，订阅用户可领试用额度',
      'brief': 'ClaudeDevs 宣布， Claude Code 云端会话结束研究预览，现已正式开放。会话运行在 Anthropic 托管的基础设施上，因此用户合上电脑或关闭电脑后，任务仍可继续。',
      'url': 'https://x.com/ClaudeDevs/status/2102871550974427462',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-09-24',
      'title': '千问发布Qwen-Audio-3.1五款模型，四款API已上线',
      'brief': '千问 发布 Qwen-Audio-3.1 系列，升级 ASR 语音识别、 TTS 语音合成和 Realtime 实时交互，并推出 ASR-Next 音频理解模型与 TTS-Next 音频创作模型，覆盖音频理解、生成、交互和创作。',
      'url': 'https://mp.weixin.qq.com/s/MW6wBdCJEdgGYX1DE9FzXQ',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-09-24',
      'title': '科大讯飞发布Spark-ASR-2.0，逐步上线讯飞输入法',
      'brief': '科大讯飞 发布语音识别大模型 Spark-ASR-2.0 ，称其基于 Spark-Audio-1.0-Preview 语音基座大模型，通过非自回归识别与 LLM 增强自回归识别协同、中英文混合文本与声学联合增强、动态上下文注入，改进中英文混合、方言、专业术语及高噪声、小音量等场景的识别效果，并让转写文本更流畅规范。',
      'url': 'https://iflytekresearch.iflytek.com/experience/spark-asr',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-09-24',
      'title': '阿里巴巴开源Logics-Parsing-V3，支持跨页解析长文档',
      'brief': '阿里巴巴 在推出并开源 Logics-Parsing-V3 ，将此前以单页识别为主的能力扩展到长文档结构化解析。',
      'url': 'https://github.com/alibaba/Logics-Parsing',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-09-24',
      'title': 'Fireworks推出Ember-1，同步推出定制训练支持',
      'brief': 'Fireworks Research 推出基于 Kimi K3 训练的专用模型 Ember-1 ，目标是在保留任务能力的同时缩短不必要的推理过程。',
      'url': 'https://fireworks.ai/blog/ember-1',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-09-24',
      'title': 'Black Forest Labs发布开放权重机器人模型FLUX 3 Action',
      'brief': 'Black Forest Labs 发布了 70亿 参数的开放权重世界动作模型 FLUX 3 Action ，并公开权重、代码、微调方案、基准测试和可复现示例，供研究者和开发者适配自己的机器人与任务。',
      'url': 'https://bfl.ai/models/flux-3-action',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-09-24',
      'title': 'Claude 手机应用现已支持多个账号',
      'brief': 'Anthropic 产品经理 Robert Bye 表示， Claude 手机应用现已支持多个账号。需要分别使用工作和个人账号的用户，可在同一应用内切换，无需每次退出后重新登录。',
      'url': 'https://x.com/RobertJBye/status/2102455638643388631',
      'source': '橘鸦AI早报',
      'type': '产品应用'
    },
    {
      'date': '2026-09-23',
      'title': 'Anthropic 发布 Claude Opus 5.5：同步调整价格与订阅额度',
      'brief': 'Anthropic 发布 Claude Opus 5.5 ，这是 Claude 5.5 系列首个模型。',
      'url': 'https://www.anthropic.com/claude-opus-5-5',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-09-23',
      'title': 'OpenAI 发布 GPT-6 Sol 和 GPT-6 Luna，下调 API 价格并改进缓存',
      'brief': 'OpenAI 发布 GPT-6 Sol 和 GPT-6 Luna ，进一步扩充 GPT-6 产品线。',
      'url': 'https://openai.com/index/introducing-gpt-6-sol-and-luna/',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-09-23',
      'title': '智谱推出GLM Coding Plan双节畅享活动',
      'brief': '智谱 推出 GLM Coding Plan 双节畅享活动， 9月25日至10月7日 期间所有套餐全天按照 非高峰期倍率 消耗额度。',
      'url': 'https://mp.weixin.qq.com/s/RQ3AAN5Z65wroZqx4Hw9EA',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-09-23',
      'title': 'OpenRouter推出Batch API，70多款模型支持异步批处理',
      'brief': 'OpenRouter 推出 Batch API ，面向无需即时返回结果的批量任务，现支持 70 多款模型。',
      'url': 'https://openrouter.ai/blog/announcements/batch-api/',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-09-23',
      'title': '阶跃星辰正式开源 Step Code v0.1.0',
      'brief': '阶跃星辰 宣布开源面向真实开发任务的 Step Code v0.1.0 ，开发者可使用该工具在终端内完成代码阅读、编写、修改、调试、执行、测试验证与交付。',
      'url': 'https://mp.weixin.qq.com/s/SEykVMq4GzK_EMMdSV61YA',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-09-23',
      'title': 'Kimi Browser Extension 上线，可录制网页操作为 skill',
      'brief': 'Kimi 发布 Kimi Browser Extension ，原名 Kimi WebBridge ，现已在产品官网和 Chrome Web Store 上线。',
      'url': 'https://www.kimi.ai/products/kimi-browser-extension',
      'source': '橘鸦AI早报',
      'type': '产品应用'
    },
    {
      'date': '2026-09-23',
      'title': '火山引擎推出 Seedance 2.5 Draft 模式',
      'brief': '火山引擎 为 Seedance 2.5 API 推出 Draft（样片）模式 ，面向需要反复尝试镜头的企业和创作者。',
      'url': 'https://mp.weixin.qq.com/s/Cq42y7dJgy92LtXevulXlA',
      'source': '橘鸦AI早报',
      'type': '产品应用'
    },
    {
      'date': '2026-09-23',
      'title': 'Artificial Analysis 新增九种语言语音合成榜单',
      'brief': 'Artificial Analysis 新增九种语言的 语音合成模型榜单 ，普通话榜单由 Inworld 的 Realtime TTS-2 以 1185 Elo 排名第一， Cartesia 的 Sonic 3.6 以 1146 Elo 排名第二， StepFun 的 StepAudio 2.5 TTS 以 1130 Elo 排名第三。',
      'url': 'https://x.com/ArtificialAnlys/status/2102490353098260895',
      'source': '橘鸦AI早报',
      'type': '技术与洞察'
    }
  ]
};
