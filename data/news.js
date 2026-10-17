// AI 热点新闻快照(由 scripts/lib/news.js 每日抓取维护,每日 2 次)
// 来源:「橘鸦AI早报」官方 RSS https://daily.juya.uk/rss.xml(每日整篇早报拆成逐条);仅保留最近 2 天
// 字段说明:date=新闻日期(UTC);title=标题;brief=简要;url=详情链接;source=来源;type=新闻类型(早报正文分类)
window.NEWS = {
  'updated': '2026-10-17',
  'retentionDays': 2,
  'types': [
    '要闻',
    '开发生态',
    '模型发布',
    '产品应用'
  ],
  'items': [
    {
      'date': '2026-10-17',
      'title': '有关部门拟增列AI技术进入出口管制目录',
      'brief': '有关部门发布公告，就修订《中国禁止出口限制出口技术目录》公开征求意见，拟增列人工智能、生物医药、光伏三个领域共 40 项 技术，其中人工智能 23 项 ，涵盖大模型、 Agent 、算力集群和信息处理，意见征集截至 11 月 15 日 。',
      'url': 'https://aqygzj.mofcom.gov.cn/flzc/gzjgfxwj/art/2026/art_c99f95ca0cd043829ac9991495fc283c.html',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-10-17',
      'title': 'OpenAI 宣布优化 Codex 提升用户有效使用量',
      'brief': 'OpenAI 的 Codex 负责人 Tibo 表示， Codex 和 Work 已完成改进，提高用户可获得的有效使用量。具体措施包括在子 Agent 之间复用上下文、延长上下文缓存时间，以及优化请求路由以提高缓存命中率。这些改进主要围绕上下文复用和提高缓存命中率展开',
      'url': 'https://x.com/thsottiaux/status/2111244596131111253',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-10-17',
      'title': 'DeepSeek 整合多支团队成立产品部',
      'brief': '据“赛博禅心”报道， DeepSeek 最近将 Harness、Web、App、Platform 团队整合为产品部，负责公司所有产品、设计和研发工作，由 崔添翼 担任负责人。 崔添翼 已向澎湃新闻确认这一消息属实。',
      'url': 'https://mp.weixin.qq.com/s/oHvOQB8QfOS_FKieyPgQAg',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-10-17',
      'title': 'DeepSeek 新增搜索与抓取 API 并按次收费',
      'brief': 'DeepSeek 为网页搜索和抓取提供独立的 Search 、 Fetch API ，按搜索、抓取请求次数计算费用。',
      'url': 'https://api-docs.deepseek.com/zh-cn/guides/search/',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-10-17',
      'title': 'Google AI Studio 向 Pro 订阅用户开放 Gemini 4 Argon',
      'brief': 'Google 已在 AI Studio 向 Google AI Pro 订阅者开放 Gemini 4 Argon ，支持在 AI Studio 的 Build 和 Playground 中使用。官方文档显示， Pro 和 Ultra 订阅方案均可访问该模型，免费方案不提供访问权限。',
      'url': 'https://x.com/GoogleAIStudio/status/2111240722426802258',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-10-17',
      'title': 'WorkBuddy 公布 DeepSeek 故障补偿',
      'brief': 'WorkBuddy 针对 DeepSeek 服务故障公布积分返还及赠送方案，此前该故障导致端内 DeepSeek 模型无法正常使用，部分用户受到影响。',
      'url': 'https://mp.weixin.qq.com/s/dGd6Nz03MF4-1ua1CMmZxA',
      'source': '橘鸦AI早报',
      'type': '产品应用'
    },
    {
      'date': '2026-10-17',
      'title': 'Antigravity 为全体用户重置模型用量限额',
      'brief': 'Google Antigravity 团队成员 Varun Mohan 在 X 上表示，Antigravity 正为所有用户重置 Argon 和 Gemini 模型用量，并鼓励用户在周末继续使用。',
      'url': 'https://x.com/_mohansolo/status/2111220356178751860',
      'source': '橘鸦AI早报',
      'type': '产品应用'
    },
    {
      'date': '2026-10-17',
      'title': 'ChatGPT 为 dot 推出 iOS 小组件与快捷指令支持',
      'brief': 'ChatGPT 在 iOS 上为 dot 推出主屏幕小组件，并支持通过苹果快捷指令和操作按钮打开对话或通话。',
      'url': 'https://x.com/ChatGPT/status/2111210005617889406',
      'source': '橘鸦AI早报',
      'type': '产品应用'
    },
    {
      'date': '2026-10-17',
      'title': 'OpenAI 上线 ChatGPT Slides',
      'brief': 'OpenAI 开始在 ChatGPT 网页版和桌面 App 中逐步推出 Slides 功能，面向符合条件且可使用 Space 的 Pro 、 Business 和 Enterprise 用户。',
      'url': 'https://help.openai.com/en/articles/6825453-chatgpt-release-notes',
      'source': '橘鸦AI早报',
      'type': '产品应用'
    },
    {
      'date': '2026-10-17',
      'title': 'OpenCode 免费提供 GLM 5.3 Flash',
      'brief': 'OpenCode 宣布， GLM 5.3 Flash 模型现已在其平台免费提供。',
      'url': 'https://x.com/opencode/status/2110986357539754114',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-10-17',
      'title': 'Claude Code 压缩对话，缩短响应等待',
      'brief': 'Anthropic 优化了 Claude Code 的响应等待时间：每轮发送的对话内容现在会经过 gzip 压缩，云端会话也会在用户开始输入时启动。',
      'url': 'https://x.com/ClaudeDevs/status/2111209208012210409',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-10-17',
      'title': 'Qoder CN 大使计划开放申请',
      'brief': 'Qoder CN 大使计划焕新升级，现已开放申请，面向愿意持续使用 Qoder CN 、分享真实体验并参与社区共创的用户。',
      'url': 'https://mp.weixin.qq.com/s/_vVPGBW-6AJmT0D2JcAilA',
      'source': '橘鸦AI早报',
      'type': '开发生态'
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
    }
  ]
};
