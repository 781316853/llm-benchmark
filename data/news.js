// AI 热点新闻快照(由 scripts/lib/news.js 每日抓取维护,每日 4 次)
// 来源:「橘鸦AI早报」官方 RSS https://daily.juya.uk/rss.xml(每日整篇早报拆成逐条);仅保留最近 2 天
// 字段说明:date=新闻日期(UTC);title=标题;brief=简要;url=详情链接;source=来源;type=新闻类型(早报正文分类)
window.NEWS = {
  'updated': '2026-11-17',
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
      'date': '2026-11-17',
      'title': '阿里巴巴发布 Qwen4-Max：官方称成本降 58%',
      'brief': '阿里巴巴正式发布新一代基座大模型 Qwen4-Max ，基于全新稀疏 MoE 架构，主干参数 2.4T ，每个 token 激活 71B 参数，并配有 328B N-gram Embedding 参数，支持原生视觉与百万 token 上下文窗口，预训练全程未出现 loss spike 。',
      'url': 'https://qwen.ai/blog?id=qwen4-max',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-11-17',
      'title': '腾讯混元推出 Hy4 flash，官方称迄今最高性价比',
      'brief': '腾讯混元 宣布推出 Hy4 flash ，称其为迄今为止最高性价比的 Hy 模型。该模型总参数量 224B （其中 64B Engram 参数），激活参数 12B ，支持多模态和 1M 上下文长度。',
      'url': 'https://hunyuan.tencent.com/research/100145?langVersion=zh',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-11-17',
      'title': 'Antigravity 上下文窗口翻倍，压缩次数大减',
      'brief': 'Antigravity 负责人 Varun Mohan 宣布，已将 Argon 、 Carbon 和 Hydrogen 的上下文窗口扩大一倍，每轮用户交互的压缩次数降至原先的约 1/3.5 。压缩指上下文空间不足时压缩已有内容、模型再重新读取的过程。',
      'url': 'https://x.com/_mohansolo/status/2122119826575646918',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-11-17',
      'title': 'OpenAI 启动嵌入式评估，引入外部机构审查安全',
      'brief': 'OpenAI 宣布与 Apollo Research 、 METR 、 Transluce 和 Goodfire 四家机构签署协议，启动第一阶段嵌入式评估，让外部专家深入接触内部模型和系统，长期评估模型对齐和安全防护。',
      'url': 'https://openai.com/index/our-first-phase-of-embedded-assessments',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-11-17',
      'title': '字节跳动 Seedance 2.5 4K API 全面开放',
      'brief': '字节跳动 火山引擎宣布， Seedance 2.5 4K 视频生成模型的 API 全面开放，开发者与企业客户可通过接口调用。',
      'url': 'https://mp.weixin.qq.com/s/c6pWJXD6YXf8lcwLdNu5zA',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-11-17',
      'title': '上海AI实验室开源书生-S2.1 Flash',
      'brief': '上海人工智能实验室 发布并开源科学多模态模型 书生-S2.1 Flash ，采用 3200亿参数 MoE 架构，支持分子图、晶体结构、蛋白质序列、光谱等十余类科学输入，可操作专业科研软件执行多步骤科研任务。',
      'url': 'https://internlm.github.io/Sage-S2.1-Flash/',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-11-17',
      'title': 'Tibo：Codex 容量报错或已修复',
      'brief': 'OpenAI Codex 团队成员 Tibo 在 X 平台发文称，一直困扰用户的 model at capacity 报错可能已经修复。这类报错提示模型容量已满，此前反复出现，困扰了不少 Codex 用户。 Tibo 表示， Codex 团队这次可能已经真正解决了这一问题。',
      'url': 'https://x.com/thsottiaux/status/2122206990101536852',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-11-17',
      'title': 'Claude Code 适配 iPhone Duo 模拟器',
      'brief': 'Claude Devs 宣布， Claude Code 桌面版现在以公开测试版支持在 iOS 模拟器 的 iPhone Duo 设备上测试应用，需 macOS 和 Xcode 27.1 或更高版本。',
      'url': 'https://code.claude.com/docs/en/desktop-ios-simulator',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-11-17',
      'title': 'Perplexity Monitor API 现已开放',
      'brief': 'Perplexity 正式推出 Monitor API ，可按设定周期追踪一个话题的新进展，或跟踪最多 10 个指定网页的文本变化，发现相关更新就通过 webhook 推送给应用。',
      'url': 'https://x.com/perplexitydevs/status/2122408441042149853',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-11-17',
      'title': 'Google Ultra 5X 土区涨价 用户称涨 2.4 倍',
      'brief': '据社区用户发帖， Google AI Ultra 5X 订阅在土耳其区的价格当天下午还是 1989.99 里拉 ，随后涨至 4749.99 里拉 ，有用户称刚买完礼品卡就发现价格已经变动。',
      'url': 'https://x.com/leo114119/status/2122286744263589971',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-11-17',
      'title': 'ChatGPT for Healthcare 宣布升级',
      'brief': 'OpenAI 宣布升级 ChatGPT for Healthcare ：推出能在现有医疗软件间操作的 computer-use agents ；改进 trusted clinical search ；并新增 20 多个 医疗插件。',
      'url': 'https://openai.com/index/more-ways-to-move-care-forward-with-chatgpt-for-healthcare/',
      'source': '橘鸦AI早报',
      'type': '产品应用'
    },
    {
      'date': '2026-11-17',
      'title': 'Gemini Notebook 可把笔记资料变成网站',
      'brief': 'Google 在官方博客宣布， Gemini Notebook 现在可以把用户的笔记、研究和资料来源转换成可交互、可分享的网站。',
      'url': 'https://blog.google/innovation-and-ai/products/gemini-notebook/interactive-sites/',
      'source': '橘鸦AI早报',
      'type': '产品应用'
    },
    {
      'date': '2026-11-16',
      'title': '华为云上线 openPangu-2.1-Pro 模型',
      'brief': '华为云 MaaS 模型即服务平台正式上线开源 盘古模型openPangu-2.1-Pro ，围绕 Agent 开发、 AI 编码和推理优化三大方向升级。',
      'url': 'https://mp.weixin.qq.com/s/8JfFmscBTDl_mPQMycD8Nw',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-11-16',
      'title': 'Agnes AI 开源 187.8B 多模态 MoE 模型',
      'brief': 'Agnes AI 在 Hugging Face 发布多模态混合专家模型 Agnes 2.5 Pro Theta ，总参数量约 187.8B ，上下文上限 262,144 tokens ，许可证为 Apache License 2.0 。',
      'url': 'https://huggingface.co/Agnes-AI/Agnes-2.5-Pro-Theta',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-11-16',
      'title': 'OpenCode Go 订阅现已支持微信支付付款',
      'brief': 'OpenCode 在 Console 更新日志中宣布，Go 和 Go Plus 订阅方案现已支持使用微信支付付款。用户在微信中授权一次后，订阅将按月自动续费；若在微信中取消扣款协议，下次续费时会要求重新确认。',
      'url': 'https://opencode.ai/console/changelog/wechat-pay-go',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-11-16',
      'title': 'OpenAI 开设 science blog 并发布 Standard Model 研究解读',
      'brief': 'OpenAI 宣布开设全新的 OpenAI science blog ，用于分享 OpenAI 、合作方及科研界借助 AI 推进科学发现的成果、实用方法与研究者一线经验。',
      'url': 'https://openai.com/index/our-new-blog-for-science/',
      'source': '橘鸦AI早报',
      'type': '技术与洞察'
    },
    {
      'date': '2026-11-16',
      'title': '报道称 Jensen Huang 考虑重返 NVIDIA 担任 CEO',
      'brief': '据英国《金融时报》报道， NVIDIA 前 CEO Jensen Huang 正考虑重新出任 CEO，并与几位亲信讨论过回归的可能。一位盟友称，有人正召集硅谷高管游说董事会让他复职，并争取白宫支持。',
      'url': 'https://wccftech.com/jensen-huang-considers-returning-to-nvidia-as-his-allies-assemble-a-war-room-to-lobby-on-his-behalf-and-a-petition-in-his-favor-crosses-156000-signatures',
      'source': '橘鸦AI早报',
      'type': '前瞻与传闻'
    }
  ]
};
