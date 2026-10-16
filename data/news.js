// AI 热点新闻快照(由 scripts/lib/news.js 每日抓取维护,每日 2 次)
// 来源:「橘鸦AI早报」官方 RSS https://daily.juya.uk/rss.xml(每日整篇早报拆成逐条);仅保留最近 2 天
// 字段说明:date=新闻日期(UTC);title=标题;brief=简要;url=详情链接;source=来源;type=新闻类型(早报正文分类)
window.NEWS = {
  'updated': '2026-10-16',
  'retentionDays': 2,
  'types': [
    '要闻',
    '开发生态',
    '模型发布',
    '产品应用'
  ],
  'items': [
    {
      'date': '2026-10-16',
      'title': 'Codex 28 天活动：重置额度，增加算力投入',
      'brief': 'OpenAI Codex 负责人 Tibo 此前宣布，未来 28 天 里，团队每天要么上线一项对多数 Codex 和 Work 用户有明显价值的改进，要么完整重置一次用量额度。',
      'url': 'https://x.com/thsottiaux/status/2110750421367287996',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-10-16',
      'title': 'DeepSeek 恢复服务，赠金形式补偿 API 用户',
      'brief': 'DeepSeek 网页与 API 服务于 10月15日上午 发生故障导致服务中断约 5个小时 ，官方在当日下午恢复了相关服务，向用户致歉并宣布将 API 用户此前 7天 的消耗金额以赠金形式全额返还。',
      'url': 'https://status.deepseek.com/incidents/7086651324287',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-10-16',
      'title': 'Gemini 4 Argon 向正价付费 Google AI Pro 用户开放',
      'brief': 'Google 正在 AI 编程工具 Antigravity 中向付费 Google AI Pro 订阅用户逐步推出 Gemini 4 Argon 。 Pro 用户新增独立的 Argon 每周配额，与现有 Gemini 3.8 Flash 额度分开计算。官方文档明确， Pro 优惠试用用户、免费用户和 Google AI Plus 用户不在开放范围内。 Argon 可在 Antigravity 桌面 App、 CLI 和 IDE 扩展中使…',
      'url': 'https://x.com/antigravity/status/2110866531932316011',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-10-16',
      'title': 'Meta 发布多模态开放权重模型 Muse Spark Open',
      'brief': 'Meta 发布开放权重模型 Muse Spark Open ，面向编程和 Agent 任务，并称其为迄今能力最强的美国开放权重模型。该模型总参数量为 8160 亿 ，每个 token 激活约 420 亿 参数，支持最高 100 万 token 上下文，可接收文字、图片、视频和音频输入，输出文字。',
      'url': 'https://research.meta.ai/blog/muse-spark-open',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-10-16',
      'title': 'ChatGPT Chrome 扩展升级，可读取并控制标签页',
      'brief': 'ChatGPT 推出 Chrome 扩展升级，把 computer use 能力带入浏览器。',
      'url': 'https://learn.chatgpt.com/docs/chrome-extension',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-10-16',
      'title': 'FLUX 3 Image Klein 发布并开放权重',
      'brief': 'Black Forest Labs 发布 FLUX 3 Image Klein ，基础版和蒸馏版的权重已在 Hugging Face 提供，分别面向微调训练和低延迟生成。该模型的 图像 Transformer 为 56 亿 参数，不含独立的文本编码器，支持原生 4K 生成、最多 10 张 参考图和边界框布局控制。',
      'url': 'https://bfl.ai/blog/flux-3-image-klein',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-10-16',
      'title': '微软宣布 MAI-Base-2 完成预训练，2.8T总参数',
      'brief': '微软 AI 已完成 MAI-Base-2 的预训练，该自研 MoE 基础模型拥有 2.8 万亿 总参数、 800 亿 激活参数，并原生采用视觉与语言结合的 VLM 架构。',
      'url': 'https://microsoft.ai/news/frontier-pre-training-at-microsoft-ai/',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-10-16',
      'title': '可灵 Kling 4.0 全量上线，接入 MCP 和 CLI',
      'brief': '可灵 AI 已全量上线 Kling 4.0 ，同步升级创作页面，并接入 MCP 和 CLI 。该版本支持生成 3—30 秒 的视频，最多输入 10 张 关键帧图像，单次生成可组合使用最多 15 项 参考素材。',
      'url': 'https://mp.weixin.qq.com/s?__biz=MzU5NTkwNDU2OA==&amp;mid=2247497194&amp;idx=1&amp;sn=5ad686eba90d8332d7c49025ab39468f&amp;chksm=ff6d7094465595fa40ad92cba41a893249d223c00036fc9c097d540169441abb1aba8da7ddfc#rd',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-10-16',
      'title': '阶跃 Step 5 Preview 开放模型权重',
      'brief': '阶跃 宣布已开放 Step 5 Preview 的 BF16 和 FP8 权重，可在 Hugging Face 与 ModelScope 获取，并同步公开技术博客。',
      'url': 'https://github.com/stepfun-ai/Step-5-Preview',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-10-16',
      'title': 'PrismML 发布 Bonsai 2 系列小模型',
      'brief': 'PrismML 发布基于 Qwen3.5 的 Ternary Bonsai 2 2B、4B 和 9B ，支持推理、视觉理解和工具调用，模型权重以 Apache 2.0 许可开放。',
      'url': 'https://prismml.com/news/bonsai-2-family',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-10-15',
      'title': 'OpenCode Go 上线 Gemini 4 Argon',
      'brief': 'OpenCode Go 已上线 Gemini 4 Argon Contributor ，月费 10 美元 的 Go 订阅方案可获得该模型价值 60 美元 的月度使用额度。该额度由 30 美元 限时翻倍，活动截至 11 月 30 日 。使用仍受分时限额约束，每 5 小时 和每周分别可使用月度额度的 20% 和 50% 。官方文档注明，用户提示词和模型回复可能用于训练未来的 Google 模型，且该版本不提供零数据保留。',
      'url': 'https://x.com/opencode/status/2110274311043072352',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-10-15',
      'title': 'Qoder 国际版极致档位推出夜间 2 折优惠',
      'brief': 'Qoder 国际版的「极致」模型档位加入夜间折扣， 10 月 14 日至 30 日 ，每天北京时间 22:00 至次日 08:00 ， Credits 消耗倍率从 2 倍 降至 0.4 倍 ，即原价的 2 折 。 Pro Trial 试用及付费用户可享受，选择该档位后自动生效， Service Account 的优惠时段另有规定。',
      'url': 'http://docs.qoder.com/events/offpeakrate',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-10-15',
      'title': 'OpenAI 公布部分 GPT-4 模型退役安排',
      'brief': 'OpenAI 更新模型的 API 下线安排， GPT-4o 、 GPT-4o mini 、 GPT-4.1 和 GPT-4.1 mini 将于 2027 年 1 月 14 日 停用，并推荐迁移到替代模型 gpt-6-luna 。这些模型的微调版本也将随基础模型同步停用。',
      'url': 'https://developers.openai.com/api/docs/deprecations',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-10-15',
      'title': 'Claude Platform 支持导出 OpenTelemetry 追踪',
      'brief': 'Anthropic 宣布， Claude Platform 的 OpenTelemetry 追踪功能进入公开测试，支持从 Messages API 、 Claude Managed Agents 和 Claude SDK 向用户已有的可观测性系统发送追踪数据。',
      'url': 'https://claude.com/resources/articles/agent-observability-on-the-claude-platform',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-10-15',
      'title': '企业微信接入 WorkBuddy，侧边栏可领用',
      'brief': '企业微信 与 WorkBuddy 联合推出新版本，升级至 企业微信 5.0.12 后，可在侧边栏领用 WorkBuddy 机器人，通过聊天下达任务并查看结果。',
      'url': 'https://work.weixin.qq.com/nl/index/workbuddy',
      'source': '橘鸦AI早报',
      'type': '产品应用'
    },
    {
      'date': '2026-10-15',
      'title': '豆包手机助手将逐步开放第三方应用自动化操作',
      'brief': '豆包手机助手 宣布，《屏幕自动化操作声明协议》（ SAEP ）的 30 天 公示期已结束，将逐步放开第三方应用的屏幕自动化操作权限。该协议允许应用开发者声明接受或禁止 Agent 操作的范围，已明确拒绝的应用不会被操作。',
      'url': 'https://o.doubao.com/developer',
      'source': '橘鸦AI早报',
      'type': '产品应用'
    }
  ]
};
