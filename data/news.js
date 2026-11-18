// AI 热点新闻快照(由 scripts/lib/news.js 每日抓取维护,每日 4 次)
// 来源:「橘鸦AI早报」官方 RSS https://daily.juya.uk/rss.xml(每日整篇早报拆成逐条);仅保留最近 2 天
// 字段说明:date=新闻日期(UTC);title=标题;brief=简要;url=详情链接;source=来源;type=新闻类型(早报正文分类)
window.NEWS = {
  'updated': '2026-11-18',
  'retentionDays': 2,
  'types': [
    '要闻',
    '开发生态',
    '模型发布',
    '产品应用'
  ],
  'items': [
    {
      'date': '2026-11-18',
      'title': 'OpenAI 发布 GPT-6.2 Astra 与 Sol，分别面向复杂任务和日常工作',
      'brief': 'OpenAI 发布 GPT-6.2 Astra 和 Sol 。',
      'url': 'https://openai.com/index/introducing-gpt-6-2-astra-sol/',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-11-18',
      'title': '微软在 Ignite 上公布七款新模型',
      'brief': '微软在 Ignite 大会发布七款 MAI 新模型，主打低价高性能。',
      'url': 'https://microsoft.ai/news/microsoft-ignite-2026-mai-keynote/',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-11-18',
      'title': 'Gemini Tasks 在美日韩加澳印六国免费开放',
      'brief': 'Google 宣布， Gemini 的 Tasks 功能在 美国、日本、韩国、加拿大、澳大利亚和印度 向数亿符合条件用户免费开放，免费用户都能用新模型 Gemini 4 Hydrogen 运行任务。',
      'url': 'https://blog.google/innovation-and-ai/products/gemini-app/tasks-in-gemini-free-new-features/',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-11-18',
      'title': 'Antigravity 重置所有模型配额，Carbon 首词元响应提速',
      'brief': '为庆祝 Antigravity 上线一周年， Antigravity 负责人 Varun Mohan 发帖称，团队将为所有用户重置全部模型的使用配额。',
      'url': 'https://x.com/_mohansolo/status/2122836883877347836',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-11-18',
      'title': 'OpenCode Go GLM 5.3 额度升至 200 美元',
      'brief': 'OpenCode 宣布 Operation GLM 进入第二阶段，面向所有 OpenCode Go 订阅者， 10 美元 即可获得 200 美元 的 GLM 5.3 使用额度，价格维持不变，该阶段目前已生效，入口为 OpenCode Console 的 Go 页面。此前上线的第一阶段提供的额度为 100 美元 ，价格相同。',
      'url': 'https://x.com/opencode/status/2122763721923559595',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-11-18',
      'title': '可灵 AI 发布 Kling Image 4.0',
      'brief': '可灵 AI 发布图像创作模型 Kling Image 4.0 ，同时向企业客户和开发者开放 API 。',
      'url': 'https://mp.weixin.qq.com/s/p3_DIBRUUgmxShjD5Wp27w',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-11-18',
      'title': '商汤正式开源 SenseNova-Loop-9B',
      'brief': '商汤 正式开源多模态模型 SenseNova-Loop-9B ，权重和代码以 Apache 2.0 许可在 Hugging Face 和 GitHub 开放，首日提供官方 AWQ 4-bit 量化版。',
      'url': 'https://github.com/OpenSenseNova/SenseNova-Loop',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-11-18',
      'title': 'Google AI Studio 更新 Android 应用开发功能',
      'brief': 'Google AI Studio 更新 Android 应用开发功能，支持通过 Firebase 为应用添加跨设备数据同步、用户登录和 Gemini 调用。',
      'url': 'https://x.com/GoogleAIStudio/status/2122752241887068565',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-11-18',
      'title': 'Google AI Studio Build 支持自定义域名',
      'brief': 'Google AI Studio 在 Build 中推出网页应用的自定义域名功能。用户可在发布面板购买并连接域名，也可复用此前在 AI Studio 为同一 Google Cloud 项目购买的域名。',
      'url': 'https://aistudio.google.com/docs/aistudio-custom-domains',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-11-18',
      'title': 'Google DeepMind 推出机器人插件',
      'brief': 'Google DeepMind 推出 Google Antigravity 机器人插件，配合上周发布的 Gemini 4 Hydrogen 模型，可连接支持的机械臂，在 MuJoCo 仿真中练习，再用对话执行现实任务。',
      'url': 'https://x.com/GoogleDeepMind/status/2122767528933925363',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-11-18',
      'title': 'Claude Code 实验性 Code Mode 上线',
      'brief': 'ClaudeDevs 发帖介绍 Claude Code 的实验性功能 Code Mode ：Claude 不再逐个直接调用工具，而是编写 JavaScript 脚本交由 Claude Code 在会话中运行，代码可并行执行命令，长命令后台运行时还能继续与 Claude 对话。',
      'url': 'http://code.claude.com/docs/en/code-mode',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-11-18',
      'title': 'Claude Platform 上线关联计费测试版',
      'brief': 'Anthropic 在 Claude Platform 以测试版上线关联计费（ Linked billing ）。终端客户把自己的 Claude 组织与平台关联一次后，就能用自己的组织支付 Claude API 用量，无需向平台共享 API key ；平台可按请求选择付费方，且无需自建计量与开票。已支持 Asana、Linear、Ramp、Warp 等 19 个平台。客户可为每个平台设月度支出上限，并随时解除关联。客户组织须直接向 An…',
      'url': 'https://claude.com/blog/linked-billing-on-claude-platform',
      'source': '橘鸦AI早报',
      'type': '开发生态'
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
    }
  ]
};
