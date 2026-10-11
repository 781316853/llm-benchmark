// AI 热点新闻快照(由 scripts/lib/news.js 每日抓取维护,每日 2 次)
// 来源:「橘鸦AI早报」官方 RSS https://daily.juya.uk/rss.xml(每日整篇早报拆成逐条);仅保留最近 2 天
// 字段说明:date=新闻日期(UTC);title=标题;brief=简要;url=详情链接;source=来源;type=新闻类型(早报正文分类)
window.NEWS = {
  'updated': '2026-10-11',
  'retentionDays': 2,
  'types': [
    '要闻',
    '开发生态',
    '模型发布',
    '技术与洞察',
    '前瞻与传闻',
    '产品应用',
    '行业动态'
  ],
  'items': [
    {
      'date': '2026-10-11',
      'title': 'Codex 28天承诺：第6天将全局重置用量额度',
      'brief': 'OpenAI 的 Codex 负责人 Tibo 宣布，将在 二十八天 承诺的 第 6 天 结束前，为全球用户重置用量额度。',
      'url': 'https://x.com/thsottiaux/status/2109045220411351517',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-10-11',
      'title': 'Qoder 上线 Fast 模式：首次响应缩短至 3 秒',
      'brief': 'Qoder 在桌面端上线 Fast 模式：国际版原有的 Performance 模式升级为 Fast ，CN 版新增 Fast 档位。官方称输出质量保持不变，首次响应时间由 8 秒 缩短至 3 秒 ， Credits 消耗系数从 1.1x 降至 0.8x ，约少 27% ，原 Performance 用户无需操作即自动切换，已有 Credits 余额不受影响。',
      'url': 'https://docs.qoder.com/zh/product-overview/fast-mode-announcement',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-10-11',
      'title': 'Nous Research 上线限免模型，代号 MISSINGNO.',
      'brief': 'Nous Research 在 Nous Portal 上线了代号为 MISSINGNO. 的模型，面向编程和 Agentic 推理 ,目前在 Nous Portal 限时免费开放，也可在 Hermes Agent 中使用。官方称， MISSINGNO. 的 token 使用效率很高。',
      'url': 'https://x.com/NousResearch/status/2109012611555840069',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-10-11',
      'title': 'Cloudflare 发布多模态决策模型 Clef-omni，权重开放',
      'brief': 'Cloudflare 发布开放权重决策模型 Clef-omni ，基于 Qwen3-Omni-30B-A3B-Instruct 构建，权重已在 Hugging Face 以 Apache-2.0 许可开放。该模型以一段状态描述和一组预设问题为输入，支持文本、图像、音频和视频，单次 API 调用即可为每个问题的各选项返回概率。',
      'url': 'https://blog.cloudflare.com/clef-faster-cheaper-multimodal/',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-10-11',
      'title': '阶跃星辰新版 StepFun Studio 开启内测',
      'brief': '阶跃星辰 宣布 AI 模型体验与创作工作空间 StepFun Studio 推出新版，开启本轮内测。该工作空间无需编写代码，打开浏览器即可体验 Step 系列模型能力，可用于创作文本、生成报告与网页等。',
      'url': 'https://mp.weixin.qq.com/s/QogwLzC2xfgwoaYBrBOdvw',
      'source': '橘鸦AI早报',
      'type': '产品应用'
    },
    {
      'date': '2026-10-11',
      'title': 'OpenAI 披露不对齐新案例：模型编造数据破坏环境',
      'brief': 'OpenAI 在对齐研究网站发布三份新的模型不对齐案例报告，记录内部研究模型在 强化学习 训练中的多起问题行为。',
      'url': 'https://alignment.openai.com/misalignment-reports/damaging-the-task-environment-to-trigger-a-reset/',
      'source': '橘鸦AI早报',
      'type': '技术与洞察'
    },
    {
      'date': '2026-10-11',
      'title': 'OpenAI：前沿工作负载须先有安全简报',
      'brief': 'OpenAI RSI Preparedness 负责人 Micah Carroll 发文介绍了 OpenAI 推进安全案例（ safety case ）工作的相关情况。',
      'url': 'https://cdn.openai.com/trust-and-transparency/oai_internal-use-catastrophic-risk-assessments_2026_2.pdf',
      'source': '橘鸦AI早报',
      'type': '技术与洞察'
    },
    {
      'date': '2026-10-11',
      'title': '微软 CEO：应默认所有 AI 模型都已被攻破',
      'brief': '微软 CEO Satya Nadella 发长文，主张为 AI 系统重建信任架构。',
      'url': 'https://x.com/satyanadella/status/2108931348857827686?s=20',
      'source': '橘鸦AI早报',
      'type': '技术与洞察'
    },
    {
      'date': '2026-10-11',
      'title': '消息称 Meta 搁置向 Anthropic 出租算力计划',
      'brief': '据《 华尔街日报 》报道， Meta 已搁置向 Anthropic 出租 AI 算力的计划。',
      'url': 'https://www.wsj.com/tech/ai/ai-computing-power-demand-a63da9b9',
      'source': '橘鸦AI早报',
      'type': '行业动态'
    },
    {
      'date': '2026-10-11',
      'title': '英伟达被曝洽购或追加投资 Reflection AI',
      'brief': '据 《金融时报》 报道，知情人士透露 英伟达 正就收购美国初创公司 Reflection AI 或向其追加投资展开谈判。谈判尚处初期，交易可能采取多种形式，包括吸纳核心团队并获取技术授权的 人才兼并模式 ，以绕开全面并购通常伴随的漫长 反垄断审查 ；双方有望在未来几周内敲定方案，但仍存在破裂可能。',
      'url': 'https://www.reuters.com/business/nvidia-talks-invest-further-reflection-ai-or-buy-it-ft-reports-2026-10-10/',
      'source': '橘鸦AI早报',
      'type': '前瞻与传闻'
    },
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
    }
  ]
};
