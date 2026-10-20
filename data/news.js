// AI 热点新闻快照(由 scripts/lib/news.js 每日抓取维护,每日 2 次)
// 来源:「橘鸦AI早报」官方 RSS https://daily.juya.uk/rss.xml(每日整篇早报拆成逐条);仅保留最近 2 天
// 字段说明:date=新闻日期(UTC);title=标题;brief=简要;url=详情链接;source=来源;type=新闻类型(早报正文分类)
window.NEWS = {
  'updated': '2026-10-20',
  'retentionDays': 2,
  'types': [
    '要闻',
    '开发生态',
    '模型发布',
    '技术与洞察',
    '前瞻与传闻'
  ],
  'items': [
    {
      'date': '2026-10-20',
      'title': 'MiniMax 正式发布 M3.1 Flash',
      'brief': 'MiniMax 正式更新 M3.1 Flash ，确认此前以匿名身份处理超过 200 万亿 token 的 Space Bunny 是该模型的早期版本。',
      'url': 'https://x.com/MiniMax_AI/status/2112150867868541221',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-10-20',
      'title': '美国下令联邦文职机构禁购并移除 DeepSeek',
      'brief': '美国国土安全部 10 月 19 日 公布命令通知，部长在审阅联邦采购安全委员会的建议及相关证据后，依据《 2018 年联邦采购供应链安全法 》下令：联邦文职机构不得采购杭州深度求索（ DeepSeek ）及其关联实体开发的信息技术产品和服务；文职机构的信息技术系统须移除所有 DeepSeek 及其关联实体的产品，以及使用 DeepSeek 实现方案开发的第三方产品和服务。',
      'url': 'https://public-inspection.federalregister.gov/2026-21447.pdf',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-10-20',
      'title': 'OpenCode 更新 DeepSeek V4.1 Flash',
      'brief': 'OpenCode 宣布， Go 订阅方案和 Free 中的 DeepSeek V4.1 Flash 已更新至 1017 版本，用户无需进行任何操作。',
      'url': 'https://x.com/opencode/status/2112220734768779441',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-10-20',
      'title': 'Qoder 限时免费开放 DeepSeek 新模型',
      'brief': 'Qoder 宣布开启 1024 预热活动，国际版和 CN 版中的 DeepSeek V4.1-Flash-1017 即日起至 10 月 24 日 限时免费，面向个人版免费用户和付费用户同步开放。',
      'url': 'https://mp.weixin.qq.com/s/ejQ3QP7WhuWcoZswlZlSag',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-10-20',
      'title': 'Command Code 上线 MiniMax M3.1 Flash',
      'brief': 'Command Code 已上线代号为 Space Bunny 的 MiniMax M3.1 Flash ，所有订阅方案的用户均可限时免费使用。',
      'url': 'https://x.com/CommandCodeAI/status/2112188292078952773',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-10-20',
      'title': 'TRAE 公布程序员节活动，设百万积分大奖',
      'brief': 'TRAE 宣布推出 1024 程序员节 系列活动，涵盖签到抽奖、社区活动和主题影片。',
      'url': 'https://mp.weixin.qq.com/s/obNwXPaKKNcr3jQbrsLiiA',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-10-20',
      'title': 'Devin 推出按使用效率自动提额机制',
      'brief': 'Cognition 为 Devin 推出 Efficiency Score 、 Devin Coach 和基于效率的自动审批，用于按工程师的使用效率管理 AI 支出。',
      'url': 'https://devin.ai/blog/efficiency-based-cost-controls',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-10-20',
      'title': '蚂蚁百灵开源 5 款 Ming-3.0 语音模型',
      'brief': '蚂蚁百灵 开源 5 款 Ming-3.0 模型，覆盖 TTS 语音生成、音频理解和 ASR 语音识别，已在 Hugging Face 和 ModelScope 提供下载。',
      'url': 'https://x.com/AntLingAGI/status/2112210811997540475',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-10-20',
      'title': 'fal 上线视频模型 FLUX 3 Max',
      'brief': 'fal 与 Black Forest Labs 合作推出视频模型 FLUX 3 Max ，已在 fal 上线，支持 720p 文生视频和图生视频。该模型基于 FLUX 3 继续训练，fal 称其在 Artificial Analysis 图生视频初步评测中获得 1,139 Elo ，并列第一。',
      'url': 'https://fal.ai/flux-3-max',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-10-20',
      'title': 'Inception 发布扩散模型 Mercury 3',
      'brief': 'Inception 发布扩散语言模型 Mercury 3 ，已上线 Inception API 、 OpenRouter 、 Baseten 和 Vercel ，兼容 OpenAI API 。',
      'url': 'https://www.inceptionlabs.ai/blog/introducing-mercury-3',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-10-20',
      'title': 'Decision 3.0 多模态决策模型发布',
      'brief': 'vLLM Semantic Router 团队推出 Decision 3.0（D3） 多模态决策模型系列，包含 0.6B、0.8B、2B、4B、9B 和 27B 六种规模，全系部署配方已合并至 vLLM Recipes ，目前可使用 vLLM nightly 版本，通过 System One API 在自有基础设施上运行。',
      'url': 'https://huggingface.co/collections/vllm-sr/decision-30',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-10-20',
      'title': 'Xing4.0-29B-Intent 开源：同时识别意图与提取参数',
      'brief': '中电信人工智能科技有限公司 星辰通用人工智能实验室开源 Xing4.0-29B-Intent ，同步开放训练语料和推理 SDK 。该模型总参数约 290 亿 ，每个 token 激活约 40 亿 ，可按预先定义的类别和字段同时识别意图、提取参数，以统一 JSON 格式返回结果，支持中文和英文。',
      'url': 'https://github.com/XingChen-AGI/Xing4.0-29B-Intent',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-10-19',
      'title': 'Anthropic 设公益基金，先投 5% 股份',
      'brief': 'Anthropic 宣布设立全资的 Anthropic Public Benefit Fund ，作为随公司成长而扩大持股的公益实体。基金初始投入公司 5% 的股份，须经股东批准；此后公司估值每较设定基准增长 50% ，董事会可酌情追加 2% ，据 Reuters 报道该基准尚未披露。',
      'url': 'https://www.anthropic.com/news/public-benefit-fund',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-10-19',
      'title': '开源模型背后的训练算力：Wolf 估算累计已近 10 亿美元',
      'brief': 'Hugging Face 联合创始人 Thomas Wolf 公布了一份粗略估算： Meta 、 NVIDIA 、 阿里巴巴 、 DeepSeek 、 Moonshot 、 Mistral 等约 35 家机构在 Hugging Face Hub 上开源了模型，训练这些模型消耗的算力按当前 GPU 租用价格折算，累计价值接近 10 亿美元 ，而这些模型全部免费下载； 2023 年底 这一数字还不到 4000 万美元 。',
      'url': 'https://x.com/Thom_Wolf/status/2111828314851598745',
      'source': '橘鸦AI早报',
      'type': '技术与洞察'
    },
    {
      'date': '2026-10-19',
      'title': 'OpenAI 据称出现 3 个新模型 ID',
      'brief': '多位 X 用户发现， OpenAI API 中短暂出现 aurora-red-alpha 、 aurora-green-alpha 和 aurora-blue-alpha 这 3 个新模型ID。 TestingCatalog 称，这些模型引用随后已从 API 中移除。',
      'url': 'https://x.com/testingcatalog/status/2111724606927028578',
      'source': '橘鸦AI早报',
      'type': '前瞻与传闻'
    },
    {
      'date': '2026-10-19',
      'title': '报道称 Anthropic 正与律所商讨 AI 谈判规范',
      'brief': '据《金融时报》报道， Anthropic 正与律所等法律机构磋商，为代表用户砍价、处理纠纷或协商薪酬的 AI Agent 研究谈判规范。消息人士称，该公司希望了解律师如何在代表客户利益的同时兼顾公平结果。',
      'url': 'https://the-decoder.com/anthropic-consults-law-firms-to-set-fair-negotiation-norms-before-ai-agents-start-cutting-deals/',
      'source': '橘鸦AI早报',
      'type': '前瞻与传闻'
    }
  ]
};
