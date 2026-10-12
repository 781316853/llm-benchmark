// AI 热点新闻快照(由 scripts/lib/news.js 每日抓取维护,每日 2 次)
// 来源:「橘鸦AI早报」官方 RSS https://daily.juya.uk/rss.xml(每日整篇早报拆成逐条);仅保留最近 2 天
// 字段说明:date=新闻日期(UTC);title=标题;brief=简要;url=详情链接;source=来源;type=新闻类型(早报正文分类)
window.NEWS = {
  'updated': '2026-10-12',
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
      'date': '2026-10-12',
      'title': 'GPT-6.1 Sol 在 Codex 中的默认上下文升至 500k',
      'brief': 'OpenAI Codex 负责人 Tibo 表示， GPT-6.1 Sol 通过 Codex 和 Work 使用时的默认上下文长度已从 272k 提升至 500k ，增幅约八成。他表示更长默认值能减少 compaction 的出现，更好支撑需要长时间保留大量上下文和细节的任务，该数值经过仔细测试，适合大多数用户。用户仍可自行调高或调低， GPT-6.1 Sol 最大上下文长度为 1M 。他还表示，此次调整后从订阅额度扣费时， GPT-6…',
      'url': 'https://x.com/thsottiaux/status/2109430343346581527',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-10-12',
      'title': 'Tibo 调查 Pro 用户用量偏好：周额度翻倍或取消 5 小时限制',
      'brief': 'OpenAI Codex 负责人 Tibo 在社交平台针对 ChatGPT Pro 订阅用户发起公开投票，征求配额调整方案的偏好。一种方案是保留现行的 每五小时 限制，但将 每周总用量翻倍 ；另一种方案则是彻底取消 每五小时 的频次限制，维持现有 每周总用量不变 。',
      'url': 'https://x.com/thsottiaux/status/2109152716954222849',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-10-12',
      'title': 'Claude 为部分付费用户发放 100 美元 Projects 初始额度',
      'brief': 'Claude 近日向已通过 Projects 测试申请的订阅用户账户发放了最高 一百美元 的 Projects 初始使用额度。',
      'url': 'https://x.com/ziwenxu_/status/2108994420398051815',
      'source': '橘鸦AI早报',
      'type': '产品应用'
    },
    {
      'date': '2026-10-12',
      'title': '马斯克展示 SpaceX 人工智能部门更名为 SpaceXSI',
      'brief': '马斯克 在社交平台 X 上公开了一张已获得官方认证的主页截图，图片显示 SpaceX 的人工智能部门平台在 X 上的 ID 改为了 SpaceXSI ，名称改为 SpaceX Super Intelligence 。该认证账号已带有企业金色认证标识，标志着新名称正式启用。',
      'url': 'https://x.com/elonmusk/status/2109012639049244981',
      'source': '橘鸦AI早报',
      'type': '行业动态'
    },
    {
      'date': '2026-10-12',
      'title': '谷歌灰度测试新模型 Gemini 4 Argon',
      'brief': '据用户反馈， 谷歌 已在 Gemini 网页端和 Antigravity 悄然开启下一代旗舰模型 Gemini 4 Argon 的灰度测试。',
      'url': 'https://linux.do/t/topic/3008137',
      'source': '橘鸦AI早报',
      'type': '前瞻与传闻'
    },
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
    }
  ]
};
