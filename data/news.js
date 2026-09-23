// AI 热点新闻快照(由 scripts/lib/news.js 每日抓取维护,每日 2 次)
// 来源:「橘鸦AI早报」官方 RSS https://daily.juya.uk/rss.xml(每日整篇早报拆成逐条);仅保留最近 2 天
// 字段说明:date=新闻日期(UTC);title=标题;brief=简要;url=详情链接;source=来源;type=新闻类型(早报正文分类)
window.NEWS = {
  'updated': '2026-09-23',
  'retentionDays': 2,
  'types': [
    '要闻',
    '开发生态',
    '模型发布',
    '技术与洞察',
    '产品应用',
    '行业动态'
  ],
  'items': [
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
      'title': 'Tibo：为 Plus、Pro 和 Business 用户发放手动重置次数',
      'brief': 'Codex 负责人 Tibo 表示，正向所有 Plus、Pro 和 Business 用户账户增加一次可手动使用的重置（ banked reset ）。他此前曾承诺在（当地时间） 周二 提供重置；最新发言明确了重置形式和适用的订阅方案，但没有说明各账户的具体到账时间。',
      'url': 'https://x.com/thsottiaux/status/2102463847714247142',
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
      'title': '腾讯混元发布专业级生图模型 Hy Image3.5 preview',
      'brief': '腾讯混元 正式发布专业级生图模型 Hy Image3.5 preview ，面向生活、学习、生产力及专业视觉创作场景，支持 文生图 、 图生图 、 多轮对话编辑 、最多 5 张 参考图 、多种尺寸比例和最高 2K 分辨率输出。',
      'url': 'https://hy.tencent.com/research/hy-image35-preview',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-09-23',
      'title': '蚂蚁百灵发布Ming-Image两款60亿参数图像模型',
      'brief': 'Ant Ling 宣布开源 Ming-Image-0.1-Design 系列，包含 Ming-Image-0.1-Design 、 Ming-Image-0.1-Design-Layer 两款 60亿参数 模型，以及 Ling UI Design Skill 和 Image-to-Editable-PPT Skill 。',
      'url': 'https://github.com/inclusionAI/Ming-Image',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-09-23',
      'title': 'PixVerse公布实时世界模型R2，支持提示词控制与编辑',
      'brief': 'PixVerse 在社交平台公布实时世界模型 PixVerse R2 ，称用户可通过提示词探索、控制和编辑动态世界，决定故事走向，并与能够记忆和回应的角色互动。',
      'url': 'https://x.com/PixVerse/status/2102404266484989983',
      'source': '橘鸦AI早报',
      'type': '模型发布'
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
    },
    {
      'date': '2026-09-22',
      'title': '小米发布并开源MiMo-V2.6系列模型',
      'brief': '小米 MiMo 正式发布并开源 MiMo-V2.6 系列，将这次升级的重点放在大规模强化学习和模型自我改进上。',
      'url': 'https://mimo.mi.com/docs/zh-CN/news/latest/v2-6',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-09-22',
      'title': 'SpaceXAI 推出 Grok 4.7 与 Fast 版本',
      'brief': 'SpaceXAI 发布 Grok 4.7 ，定位于编程、 Agent 任务和知识工作。官方称，相比 Grok 4.6 ，新模型采用更大的基础模型，并在更困难、偏向多小时任务的数据上进行了更长时间的强化学习训练，重点提升长任务执行、自我检查和长上下文管理能力，同时引入新的安全防护体系；标准版价格和速度与 Grok 4.6 保持一致。',
      'url': 'https://x.ai/news/grok-4-7',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-09-22',
      'title': '硅基流动上线Xing4.0-29B-A4B并开放免费调用',
      'brief': '硅基流动 上线 中电信 开源的 Xing4.0-29B-A4B ，并开放免费调用。',
      'url': 'https://mp.weixin.qq.com/s/riEDXhYDymGC7Q98NXucpA',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-09-22',
      'title': 'Gemini Notebook 开放 Interactive Learning Overviews',
      'brief': 'Gemini Notebook 宣布 Interactive Learning Overviews 现已向所有用户开放，该功能位于 Reports 板块下，可将来源摘要与 studio artifacts 汇聚成一个交互式中心，用于复习或对新主题做一站式深入了解。',
      'url': 'https://x.com/Gemini_Notebook/status/2102112369677844967',
      'source': '橘鸦AI早报',
      'type': '产品应用'
    },
    {
      'date': '2026-09-22',
      'title': 'HeyGen发布Code2Video基准',
      'brief': 'HeyGen 发布 Code2Video Benchmark 及配套的成对比较 Judge 模型，用于评估 LLM Agent 把提示词转化为动效代码后的成片质量。',
      'url': 'https://www.heygen.com/research/introducing-code2video-benchmark',
      'source': '橘鸦AI早报',
      'type': '技术与洞察'
    },
    {
      'date': '2026-09-22',
      'title': 'OpenAI呼吁制定全球前沿AI技术标准',
      'brief': 'OpenAI 提出，由美国牵头与各国制定全球前沿 AI 技术标准，重点覆盖 模型能力评测 、 自动化AI研究 和 RSI 的 风险管理 。',
      'url': 'https://openai.com/index/building-standards-next-phase-ai/',
      'source': '橘鸦AI早报',
      'type': '行业动态'
    },
    {
      'date': '2026-09-22',
      'title': 'Qwen：用户保留Qwen-Image-2.1生成内容权利',
      'brief': 'Qwen 澄清了 Qwen-Image-2.1 的许可范围：该模型采用的研究许可证约束的是模型权重、代码、文档等 Materials ，这些材料目前仅限 非商业使用 ，商业使用模型需另行取得许可；用户用模型生成的图片等内容则不属于 Materials ，相关权利由用户保留。',
      'url': 'https://x.com/QwenDevs/status/2101917379785838660',
      'source': '橘鸦AI早报',
      'type': '行业动态'
    }
  ]
};
