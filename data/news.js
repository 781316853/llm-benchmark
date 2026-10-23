// AI 热点新闻快照(由 scripts/lib/news.js 每日抓取维护,每日 2 次)
// 来源:「橘鸦AI早报」官方 RSS https://daily.juya.uk/rss.xml(每日整篇早报拆成逐条);仅保留最近 2 天
// 字段说明:date=新闻日期(UTC);title=标题;brief=简要;url=详情链接;source=来源;type=新闻类型(早报正文分类)
window.NEWS = {
  'updated': '2026-10-23',
  'retentionDays': 2,
  'types': [
    '要闻',
    '开发生态',
    '模型发布'
  ],
  'items': [
    {
      'date': '2026-10-23',
      'title': 'OpenAI 开放 Decisions API',
      'brief': 'OpenAI 宣布正式开放 Decisions API ，开发者可通过专用 API 接口调用，或在 OpenAI 平台的 Playground 中试用。该接口目前仅支持 gpt-6-luna ，可评估文本、图像和 JSON ，返回条件成立的概率、预设选项或评分，用于内容分类、请求分流和确定后续动作。',
      'url': 'https://openai.com/index/decisions-api',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-10-23',
      'title': 'Codex 负责人：第 17 天完成用量额度重置',
      'brief': 'OpenAI 的 Codex 负责人 Tibo 表示，连续改进计划的 第 17 天 为用量额度重置日，目前重置已经完成。',
      'url': 'https://daily.juya.uk/issues/2026-10-05/',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-10-23',
      'title': 'Anthropic 捐赠 Agent Skills 标准',
      'brief': 'Anthropic 宣布将 Agent Skills 开放标准捐赠给 Linux Foundation 旗下的 Agentic AI Foundation（AAIF） ，承诺保持开放、社区驱动和厂商中立。',
      'url': 'https://www.anthropic.com/news/donating-agent-skills-to-the-agentic-ai-foundation',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-10-23',
      'title': 'Google Cloud 新增 Anthropic 托管版 Claude',
      'brief': 'Anthropic 宣布，Claude Models on Google Cloud（Anthropic managed）正式可用， Google Cloud 用户可访问完整 Claude API，新功能和 Beta 版与原生 Claude Platform 同日推出。',
      'url': 'https://claude.com/resources/articles/claude-models-on-google-cloud-anthropic-managed',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-10-23',
      'title': 'Gemini API CLI 开放实验性预览',
      'brief': 'Google 推出 Gemini API CLI （ gemini-api ）实验性预览版，让开发者和具备 shell 访问权限的 Agent 直接调用 Gemini API 。',
      'url': 'https://aistudio.google.com/learn/introducing-the-gemini-api-cli',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-10-23',
      'title': '科大讯飞发布星火 X2.6 端云一体大模型',
      'brief': '科大讯飞 在全球 1024 开发者节发布讯飞星火 X2.6 端云一体大模型，并开源 X2.6-4B 端侧模型，系列模型目前在讯飞星火官网开放试用。',
      'url': 'https://xinghuo.xfyun.cn/sparkapi',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-10-23',
      'title': '上海人工智能实验室发布 Sage-A1.5',
      'brief': '上海人工智能实验室 发布 书生-A1.5（Sage-A1.5） 并开放模型权重，重点提升智能体编排、自主验证与开放式科学探索能力。',
      'url': 'https://mp.weixin.qq.com/s/bI8C7L8Bb4uD81d45N1zVA',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-10-23',
      'title': 'Canva 发布其首款自研图像模型 Craft',
      'brief': 'Canva 发布其首款自研图像生成模型 Canva Craft ，向全球所有 Canva 用户开放，并通过 Public API 向开发者提供。',
      'url': 'https://www.canva.com/newsroom/news/canva-craft/',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-10-23',
      'title': 'Ideogram 发布矢量模型 Ideogram Vector',
      'brief': 'Ideogram 发布其首款矢量模型 Ideogram Vector ，现已在 Ideogram 平台和 API 上线。',
      'url': 'https://ideogram.ai/models/vector/',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-10-23',
      'title': 'Hugging Face 发布开源 DNA 模型 Carbon-X',
      'brief': 'Hugging Face 发布开源 DNA 与自然语言模型 Carbon-X ，拥有 148 亿 参数，支持在普通对话中输入原始 DNA 序列并获得英语回答，可用于预测突变影响、识别序列特征和预测后续碱基。',
      'url': 'https://github.com/huggingface/carbon/tree/main',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-10-22',
      'title': 'Claude Duet 开放研究预览，主动提醒并在后台办事',
      'brief': 'Anthropic 开放 Claude Duet 研究预览。这款基于 Claude Opus 5.5 的主动式 Agent 应用面向专业人士和小企业主，每天早晨汇总已连接应用中最重要的事项，此后每隔几小时检查一次，只在需要用户关注时发消息；用户可用文字或语音交办安排会议、制作仪表盘、财务预测等任务，它在自带浏览器的云端虚拟机中执行，手机和电脑无需开机。',
      'url': 'https://claude.com/resources/articles/claude-duet',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-10-22',
      'title': 'Tibo 称 Codex 登录用户缓存永久保留',
      'brief': 'OpenAI Codex 连续 28 天 改进计划进入第 16 天 。',
      'url': 'https://developers.openai.com/api/docs/guides/prompt-caching',
      'source': '橘鸦AI早报',
      'type': '要闻'
    }
  ]
};
