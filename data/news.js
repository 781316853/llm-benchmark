// AI 热点新闻快照(由 scripts/lib/news.js 每日抓取维护,每日 2 次)
// 来源:「橘鸦AI早报」官方 RSS https://daily.juya.uk/rss.xml(每日整篇早报拆成逐条);仅保留最近 2 天
// 字段说明:date=新闻日期(UTC);title=标题;brief=简要;url=详情链接;source=来源;type=新闻类型(早报正文分类)
window.NEWS = {
  'updated': '2026-09-21',
  'retentionDays': 2,
  'types': [
    '要闻',
    '开发生态',
    '模型发布',
    '技术与洞察',
    '前瞻与传闻',
    '行业动态'
  ],
  'items': [
    {
      'date': '2026-09-21',
      'title': 'Qwen开源图形生成与编辑模型Qwen-Image-2.1',
      'brief': 'Qwen 发布 Qwen-Image-2.1 ，并开放模型权重。新版本把 文生图 和 图像编辑 整合到同一模型，视觉生成部分为 7B 参数、 32 层 Single-Stream DiT ；主要变化包括更轻量的推理架构、原生透明图像能力、更完整的图像编辑，以及文字和人物视觉表现的提升。',
      'url': 'https://qwen.ai/blog?id=qwen-image-2.1',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-09-21',
      'title': '阶跃发布 Step 5 Preview，目前已全量开放',
      'brief': '阶跃星辰 正式发布面向真实世界 Agentic 任务的旗舰基座模型 Step 5 Preview ，重点覆盖 AI 编程、软件工程、专业知识工作和金融等场景。',
      'url': 'https://www.stepfun.com/step-5-preview',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-09-21',
      'title': 'TypeSafe AI向所有用户开放Jev，新用户获赠5美元额度',
      'brief': 'TypeSafe AI 目前已通过其在线控制台向所有用户开放 Jev ，用户无需加入候补名单即可开始使用。所有用户初始均可获得 5美元 额度， TypeSafe AI 称该额度约可支持 1.2亿 token 。此次调整取消了此前的访问等待限制。',
      'url': 'https://console.typesafe.ai',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-09-21',
      'title': 'Google开源Agentic编排器AX，支持有状态任务暂停与恢复',
      'brief': 'Google 目前已在 GitHub 开源 AX ，用于在 Kubernetes 集群中声明式编排有状态的自主 Agent 工作负载。 AX 基于 Agent Substrate 执行沙箱化任务，通过 Task 、 Workspace 、 Gateway 和 Model 配置运行环境、资源、网络与模型，并支持暂停、恢复和调试。',
      'url': 'https://github.com/google/ax',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-09-21',
      'title': '腾讯开源端到端文档解析模型WeVisDoc',
      'brief': '腾讯 目前已在 GitHub 和 Hugging Face 开放端到端文档解析模型 WeVisDoc 的 2B、4B 权重以及代码和教程，用于在不同版式与采集条件下将页面图像直接转换为结构化Markdown。',
      'url': 'https://tencent.github.io/WeVisDoc/',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-09-21',
      'title': 'WebCraftBench以真实交互和代码覆盖率评估AI网页应用',
      'brief': '腾讯混元团队 联合 清华大学 、 北京大学 研究者提出 WebCraftBench ，用于评估 AI 生成网页应用的美观度、易用性和需求符合度。',
      'url': 'https://arxiv.org/abs/2609.15387',
      'source': '橘鸦AI早报',
      'type': '技术与洞察'
    },
    {
      'date': '2026-09-21',
      'title': '硅基流动完成B+轮二期和C轮融资',
      'brief': '硅基流动 近日宣布完成B+轮二期和C轮融资， 2026年度 累计股权融资额近 29亿元 ，投资方包括 中国互联网投资基金 、 国新基金 、 中国移动链长基金 等机构，部分老股东追加投资。融资资金将通过增加 推理引擎 、 异构算力调度 、 模型与芯片适配 等研发投入，强化 Token 供应平台并拓展全球市场。',
      'url': 'https://mp.weixin.qq.com/s/Y0X4FqYFYQDsTLGyLl0dzQ',
      'source': '橘鸦AI早报',
      'type': '行业动态'
    },
    {
      'date': '2026-09-21',
      'title': '智谱MaaS平台将上线数据内容不留存功能',
      'brief': '智谱 MaaS平台 近期将上线数据内容不留存功能，为企业和开发者用户提供更严格的数据隐私保护。',
      'url': 'https://mp.weixin.qq.com/s/e7kLxQKhkOrLdsmgyF5U0Q',
      'source': '橘鸦AI早报',
      'type': '行业动态'
    },
    {
      'date': '2026-09-20',
      'title': 'DeepSeek API明确节假日及调休周末全天按空闲时段计费',
      'brief': 'DeepSeek API 平台近日发布公告横幅明确，调休上班的周末及中国法定节假日全天均按空闲时段计费。即使周末因调休成为工作日，也适用这一计费时段规则。该规则面向使用 DeepSeek 官方 API 的用户。',
      'url': 'https://platform.deepseek.com/',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-09-20',
      'title': 'Tibo疑似暗示Codex banked reset',
      'brief': '有用户发帖称 OpenAI 本周没有推出此前预期的更新，因此向 Codex 负责人 Tibo 喊话：“you owe us a banked reset sorry i don’t make the rules”。 Tibo 随后回复：“OK fine. But it’s also still coming in Tuesday ”。',
      'url': 'https://x.com/thsottiaux/status/2101352781219258527',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-09-20',
      'title': 'Step 5 Preview现身Artificial Analysis网站',
      'brief': 'Artificial Analysis 收录 阶跃星辰 的 Step 5 Preview ，并完成独立评测，部分 Step Plan 用户也称已能看到并调用该模型。',
      'url': 'https://artificialanalysis.ai/models/step-5',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-09-20',
      'title': '千问发布Qwen3.8-LiveTranslate',
      'brief': '千问 目前已正式发布同声传译大模型 Qwen3.8-LiveTranslate ，面向真实对话提供 60种语言 的实时翻译。',
      'url': 'https://mp.weixin.qq.com/s/Rc3CKdHAtA_NdVRN2RLuAg',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-09-20',
      'title': '阿里巴巴达摩院开源腹部CT诊断模型RADAR，论文发表于Science',
      'brief': '阿里巴巴达摩院 在 GitHub 开源了腹部 CT 诊断通用视觉语言模型 RADAR （ Rapid Abdominal Diagnosis with AI and Radiology ），相关研究论文发表于 Science 。',
      'url': 'https://github.com/alibaba-damo-academy/damo-radar',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-09-20',
      'title': 'Cua开源小型表单填写模型cua-s1-forms',
      'brief': 'Cua 开源面向表单填写的轻量模型 cua-s1-forms 。',
      'url': 'https://huggingface.co/cua-ai/cua-s1-forms',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-09-20',
      'title': 'Android Developers推出Android Bench 2.0',
      'brief': 'Android Developers 推出 Android Bench 2.0 ，用于评估 AI 处理真实、多日的 Android 工程任务的表现。',
      'url': 'https://x.com/AndroidDev/status/2100622197253398669',
      'source': '橘鸦AI早报',
      'type': '技术与洞察'
    },
    {
      'date': '2026-09-20',
      'title': 'OpenAI等四家公司遭付费用户提起反垄断诉讼',
      'brief': '一批付费订阅用户目前在加州北区联邦地区法院起诉 Anthropic PBC 、 OpenAI OPCO LLC 、 SpaceXAI 和 Google LLC ，指控四家公司通过协调限制 AI 产品改进速度，违反 《谢尔曼反托拉斯法》第1条 。原告称，相关协调源于多名公司高管公开赞同一篇主张限制未经约束的 AI 发展速度、呼吁行业协调的文章，导致订阅者以相同价格获得改进更慢的产品。',
      'url': 'https://news.bloomberglaw.com/litigation/openai-anthropic-google-spacexai-hit-with-antitrust-lawsuit',
      'source': '橘鸦AI早报',
      'type': '行业动态'
    },
    {
      'date': '2026-09-20',
      'title': 'Anthropic 或将发布发布新模型应对Astra在企业市场的竞争',
      'brief': '路透社援引三名消息人士称， Anthropic 正考虑推出新模型，以应对 OpenAI GPT-6 Astra 获得的企业市场关注，但公司仍在评估下一款模型的安全性，尚未确定是否及何时发布。',
      'url': 'https://www.reuters.com/business/anthropic-considers-releasing-new-ai-model-ahead-ipo-sources-say-2026-09-19/',
      'source': '橘鸦AI早报',
      'type': '前瞻与传闻'
    },
    {
      'date': '2026-09-20',
      'title': 'OpenAI 或将发布 GPT-6 Sol 和 GPT-6 Luna',
      'brief': 'OpenAI 或将在下周推出新的 GPT-6 系列模型。',
      'url': 'https://x.com/thsottiaux/status/2101157729037586694',
      'source': '橘鸦AI早报',
      'type': '前瞻与传闻'
    },
    {
      'date': '2026-09-20',
      'title': 'Google 或将发布 Gemini 4 Pro',
      'brief': '多名第三方测试者和平台此前称， Gemini 4 Pro 正在Arena以其他模型名称进行隐藏测试，并通过代码生成、图像任务展现出优异能力；另有一张已被鉴定为使用 GPT-Image 生成的基准测试图流传。目前 Google 尚未确认 Gemini 4 Pro 的型号、内部代号、测试成绩、价格和公开开放时间。',
      'url': 'https://x.com/god_of_ai7/status/2101237972633063922',
      'source': '橘鸦AI早报',
      'type': '前瞻与传闻'
    }
  ]
};
