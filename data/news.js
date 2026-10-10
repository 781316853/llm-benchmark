// AI 热点新闻快照(由 scripts/lib/news.js 每日抓取维护,每日 2 次)
// 来源:「橘鸦AI早报」官方 RSS https://daily.juya.uk/rss.xml(每日整篇早报拆成逐条);仅保留最近 2 天
// 字段说明:date=新闻日期(UTC);title=标题;brief=简要;url=详情链接;source=来源;type=新闻类型(早报正文分类)
window.NEWS = {
  'updated': '2026-10-10',
  'retentionDays': 2,
  'types': [
    '要闻',
    '开发生态',
    '模型发布',
    '产品应用'
  ],
  'items': [
    {
      'date': '2026-10-10',
      'title': 'OpenAI dot 更新：手机端可创建并接管 Codex',
      'brief': 'OpenAI 为 ChatGPT 中的 dot 带来一批更新：用户现在可以在 ChatGPT 手机应用（iOS 和 Android）中直接创建 dot ，包括命名、自定义外观和连接插件。',
      'url': 'https://learn.chatgpt.com/docs/whats-new/dots-october-9-2026',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-10-10',
      'title': 'OpenAI 为 Codex 推出下一条消息预测测试版',
      'brief': 'OpenAI 宣布 Codex 的 composer predictions 功能进入测试版。 Codex 回复结束后，输入框会根据当前对话和用户的表达方式建议下一条消息，按 Tab 采纳后可编辑再发送，也可忽略建议自行输入。',
      'url': 'https://help.openai.com/en/articles/20001601-composer-predictions-in-codex',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-10-10',
      'title': 'TraeWork 与 TraeCode 统一为 TRAE',
      'brief': 'Trae 官方宣布， TraeWork 与 TraeCode 已融合升级为统一的 TRAE ：新入口覆盖桌面端、Web 端和移动端，支持在面向任务推进的 Agent 模式与面向深度编码调试的 IDE 模式之间无缝切换。',
      'url': 'https://docs.trae.cn/ide_traework-to-traecode-data-migration',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-10-10',
      'title': '阶跃星辰将增加 Step Plan 供应并调整权益',
      'brief': '阶跃星辰 宣布，自 2026 年 10 月 14 日 起增加 Step Plan 供应，官方称 Step 5 Preview 推出后订阅需求超出预期，此前曾采取限售措施。',
      'url': 'https://linux.do/t/topic/3000890',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-10-10',
      'title': 'Claude Code Projects 候补用户全部获准加入',
      'brief': 'Anthropic 宣布， Claude Code Projects 候补名单上的 Pro 和 Max 用户已全部获准加入。该功能仍处于公开测试阶段，官方将按容量继续放行新报名用户， Team 和 Enterprise 订阅方案暂不可用。',
      'url': 'https://x.com/ClaudeDevs/status/2108621476538781878',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-10-10',
      'title': 'Claude Design独立版站点12月14日关闭',
      'brief': 'Anthropic 设计团队成员 Nate Parrott 表示，用户对集成在 Claude 内的 Design 和 Slides 使用更频繁，团队将集中投入集成版，独立版 Claude Design 站点将于 2026 年 12 月 14 日 关闭，在此之前仍可正常使用，之后原网址会跳转至 Claude 。',
      'url': 'https://support.claude.com/en/articles/17440474-migrate-from-standalone-claude-design-to-claude',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-10-10',
      'title': 'Grok Bot 推出用户专属邮箱',
      'brief': 'SpaceXAI 为 Grok Bot 推出专属邮箱，官方称 Bot 可用它代用户注册服务、联系商家以及安排日程。',
      'url': 'https://x.com/bot/status/2108607640318206037',
      'source': '橘鸦AI早报',
      'type': '产品应用'
    },
    {
      'date': '2026-10-10',
      'title': '豆包新增生活缴费：语音打字即可唤出缴费卡片',
      'brief': '据《读佳》报道， 豆包 App 新增“生活缴费”功能，用户语音或打字下达缴电费、交水费等指令后，豆包会弹出对应服务卡片，跳转至专属缴费页面。',
      'url': 'https://mp.weixin.qq.com/s/L3YD7w1CB3qk1QzS7UEuYQ',
      'source': '橘鸦AI早报',
      'type': '产品应用'
    },
    {
      'date': '2026-10-10',
      'title': '豆包工作新增画布功能，同步更新两款模型',
      'brief': '豆包工作 宣布任务模式新增画布功能，素材、方案和创作成果可铺在同一张无限画布上，随时查看、对比和整理，生成之后还能继续调整文字、配色与布局。',
      'url': 'https://mp.weixin.qq.com/s/5gAQiVgI2WQs9vlh-SpVzw',
      'source': '橘鸦AI早报',
      'type': '产品应用'
    },
    {
      'date': '2026-10-10',
      'title': 'Perplexity 上线免费百科网站 Alexandria',
      'brief': 'Perplexity CEO Aravind Srinivas 宣布推出免费百科网站 Alexandria ，网站定位为“一部可以追溯来源的百科”，条目中的每句话都能点开查看出处。 Alexandria 由 Perplexity 的 AI 产品 Computer 扫描并整合 348,980 个来源生成，发布时共收录 66,574 个附带来源的条目。 Srinivas 称整个项目耗资 25,000 美元（250 万 credits） ，后…',
      'url': 'https://alexandria.pplx.app',
      'source': '橘鸦AI早报',
      'type': '产品应用'
    },
    {
      'date': '2026-10-10',
      'title': 'LM Studio 发布新版提供决策模型 API',
      'brief': 'LM Studio 发布 0.4.26 版本，新增兼容 Jev （ TypeSafe AI ）的 /v1/systemone 端点和兼容 OpenAI 的 /v1/decisions 端点。',
      'url': 'https://lmstudio.ai/changelog/lmstudio/lmstudio-v0.4.26',
      'source': '橘鸦AI早报',
      'type': '产品应用'
    },
    {
      'date': '2026-10-09',
      'title': 'JetBrains 开源 Mellum2.1，强化学习主打编程 Agent',
      'brief': 'JetBrains 发布编程模型 Mellum2.1 ，模型权重已上架 Hugging Face ，采用 Apache 2.0 许可。 Mellum2.1 架构与此前开源的 Mellum2 相同，总参数 12B 、每 token 激活 2.5B ，改动集中在后训练，强化学习从收尾阶段变为训练主体，模型在带 shell 和文件编辑工具的真实代码仓库中训练，测试通过才获得奖励。',
      'url': 'https://blog.jetbrains.com/ai/2026/10/mellum2-1-gets-to-work-a-fast-open-model-for-coding-agents/',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-10-09',
      'title': 'Hugging Face 开源基因注释模型 Carbon-A',
      'brief': 'Hugging Face 生物学研究团队 HuggingFaceBio 开源基因注释模型 Carbon-A ，并同步发布用 Carbon-A 构建的注释数据库 Carbon Annotation Database 。 Carbon-A 有 12 亿 参数，直接从 DNA 序列预测真核生物的蛋白编码区，单一模型覆盖哺乳动物、植物、真菌和原生生物等类群；官方称在 42 个基准基因组上宏平均核苷酸 F1 达 0.944 ，在核苷酸、外显子和基…',
      'url': 'https://huggingface.co/blog/HuggingFaceBio/carbon-annotator-genbank-genome-annotation',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-10-09',
      'title': 'LightOnAI 开源 LightOnOCR-3',
      'brief': 'LightOn 发布端到端 OCR 模型系列 LightOnOCR-3 ，提供 0.8B、1B、4B 三个尺寸，采用 Apache 2.0 许可，可用于研究和商业用途。',
      'url': 'https://www.lighton.ai/research/lightonocr-3',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-10-09',
      'title': 'Odyssey 发布世界模型 Odyssey-3',
      'brief': 'Odyssey 发布基础世界模型 Odyssey-3 ，称其为迄今最强大的世界模型，研究预览现已免费开放体验。',
      'url': 'https://odyssey.systems/meet-odyssey-3',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-10-09',
      'title': 'Grok Imagine Video 1.5 Lite 上线，1080p 每秒 0.14 美元',
      'brief': 'Grok Imagine 宣布，视频生成模型 Video 1.5 Lite 已在 Grok Imagine API 上线，用于文本生成视频和图像生成视频。价格按分辨率按秒计费： 480p 每秒 0.02 美元 ， 720p 每秒 0.03 美元 ， 1080p 每秒 0.14 美元 。',
      'url': 'https://x.com/imagine/status/2108280250673352929',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    }
  ]
};
