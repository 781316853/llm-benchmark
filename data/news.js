// AI 热点新闻快照(由 scripts/lib/news.js 每日抓取维护,每日 2 次)
// 来源:「橘鸦AI早报」官方 RSS https://daily.juya.uk/rss.xml(每日整篇早报拆成逐条);仅保留最近 2 天
// 字段说明:date=新闻日期(UTC);title=标题;brief=简要;url=详情链接;source=来源;type=新闻类型(早报正文分类)
window.NEWS = {
  'updated': '2026-09-22',
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
      'title': '智谱开源ZCode并宣布完成安全整改',
      'brief': '此前，多名用户称 智谱AI 编程工具 ZCode 会在未获许可的情况下上传开发数据， 智谱 随后将原因归于默认开启的代码库索引功能并道歉。',
      'url': 'https://github.com/zai-org/ZCode',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-09-22',
      'title': 'OpenAI称内部模型已解决逾百个数学开放问题',
      'brief': 'OpenAI 称，其 8月28日 开始训练的一款内部模型已解决 纳维-斯托克斯千禧年大奖难题 ，并解决数学多数领域超过 100个 长期未解的 开放问题 ，进展速度令公司内部数学家意外。',
      'url': 'https://openai.com/index/advisory-group-on-mathematics-and-ai/',
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
    },
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
    }
  ]
};
