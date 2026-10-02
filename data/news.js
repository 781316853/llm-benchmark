// AI 热点新闻快照(由 scripts/lib/news.js 每日抓取维护,每日 2 次)
// 来源:「橘鸦AI早报」官方 RSS https://daily.juya.uk/rss.xml(每日整篇早报拆成逐条);仅保留最近 2 天
// 字段说明:date=新闻日期(UTC);title=标题;brief=简要;url=详情链接;source=来源;type=新闻类型(早报正文分类)
window.NEWS = {
  'updated': '2026-10-02',
  'retentionDays': 2,
  'types': [
    '要闻',
    '开发生态',
    '模型发布',
    '产品应用'
  ],
  'items': [
    {
      'date': '2026-10-02',
      'title': 'OpenAI 扩容 GPT-6.1 Sol，速度将接近翻倍',
      'brief': 'OpenAI 员工 Tibo 近期表示， GPT-6.1 Sol 是 OpenAI 迄今为止在 API 和订阅端需求量最大的模型。',
      'url': 'https://x.com/thsottiaux/status/2105464274747527543',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-10-02',
      'title': 'Claude Code 开放 mods，代码定制行为与界面',
      'brief': 'Anthropic 为 Claude Code 推出 mods ，用少量 TypeScript 代码就能改变 Claude Code 的行为和界面，也可以直接让 Claude Code 自己写一个。',
      'url': 'https://claude.com/blog/claude-code-mods',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-10-02',
      'title': 'Earendil 发布 Pi 1.0 正式版与实验包 Pi Durable',
      'brief': 'Earendil 正式发布 Pi 1.0 ，将其定位为经过长期打磨、保持极简且可扩展的 agent harness 。',
      'url': 'https://earendil.com/posts/pi-1-0/',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-10-02',
      'title': 'GitHub 推出 gh-secure 一键加固公开仓库',
      'brief': 'GitHub Security Lab 推出 gh-secure ，帮助维护者在 两分钟 内为公开仓库开启安全功能。',
      'url': 'https://gh.io/gh-secure',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-10-02',
      'title': 'Stitch by Google 推出 Stitch CLI 命令行工具',
      'brief': 'Stitch by Google 发布 Stitch CLI 命令行工具，包名为 @google/stitch ，目前可以通过官方链接获取。它支持在终端里连接本地编程 Agent ，生成界面和设计系统，并把本地开发服务器的快照发送给 Stitch，也可以交给 Antigravity 这类 harness 调用。',
      'url': 'https://x.com/stitchbygoogle/status/2105695155164741984',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-10-02',
      'title': 'Black Forest Labs 正式发布 FLUX 3 Image 图像模型',
      'brief': 'Black Forest Labs 正式发布图像生成与编辑模型 FLUX 3 Image ，已经通过 BFL API 和 Playground 提供。',
      'url': 'https://bfl.ai/models/flux-3-image',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-10-02',
      'title': 'Microsoft AI 发布 3 款 MAI 语音模型',
      'brief': 'Microsoft AI 发布流式转写模型 MAI-Transcribe-2-Streaming ，同时推出两款语音合成模型 MAI-Voice-2.1 和 MAI-Voice-2.1-Flash 。',
      'url': 'https://microsoft.ai/news/our-first-streaming-transcription-model/',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-10-02',
      'title': 'Cloudflare 发布并开源 Clef 与 Clef-flash 决策模型',
      'brief': 'Cloudflare 发布 Clef 和 Clef-flash 两款决策模型，托管在 Workers AI 上提供 API，权重以 Apache 2.0 许可开源。',
      'url': 'https://blog.cloudflare.com/clef-decision-models',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-10-02',
      'title': 'Perplexity 推出 Decisions API 并开源 27B 决策模型',
      'brief': 'Perplexity 推出 Decisions API ，由多模态决策模型 pplx-decider-v1-27b 驱动，模型权重已开源。它不输出文本，而是对一组固定答案给出概率分布，官方称其在各项基准上得分 85.71% 。',
      'url': 'https://x.com/perplexitydevs/status/2105725598882832414',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-10-02',
      'title': 'Tavus 发布 Griffin 实时视频交互模型',
      'brief': 'Tavus 发布 Griffin ，官方称这是首个 Human Interaction Model ，一个能在视频通话中实时感知并回应人类行为的全双工 video-to-video 模型。',
      'url': 'https://www.tavus.io/griffin',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-10-02',
      'title': 'Claude 推出 Artifact 用量减半限时优惠',
      'brief': 'Anthropic 为 Claude 推出限时两周的 Artifact 用量优惠：在对话中创建或编辑文档、幻灯片或设计后，接下来的 10 条消息 只按一半额度计入 5 小时 会话上限，每周用量上限不变。',
      'url': 'https://support.claude.com/en/articles/17274727-artifact-usage-promotion',
      'source': '橘鸦AI早报',
      'type': '产品应用'
    },
    {
      'date': '2026-10-02',
      'title': 'ChatGPT 手机相机新增扫描合成 PDF功能',
      'brief': 'OpenAI 在 ChatGPT 手机端的相机中加入了扫描功能，用来把笔记和文档更方便地带进对话。用户可以连续拍摄多个页面， ChatGPT 会自动把它们合成一个 PDF ，供上传到聊天中使用。',
      'url': 'https://help.openai.com/en/articles/6825453-chatgpt-release-notes',
      'source': '橘鸦AI早报',
      'type': '产品应用'
    },
    {
      'date': '2026-10-01',
      'title': 'Google 发布 Gemini 4 Argon',
      'brief': 'Google 发布新一代前沿模型 Gemini 4 Argon ，目前首批通过 Fairwind Program 向一批受信任的网络安全防御者开放，并正参与美国政府的模型发布前自愿访问流程。 Google 表示，在继续收集早期测试反馈并完善安全防护后，将尽快把 Argon 扩展至开发者、企业和消费者，后续开放将从付费 API 客户和 Google AI Ultra 订阅用户开始。',
      'url': 'https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-argon/',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-10-01',
      'title': '哔哩哔哩发布并开源 Index-Translate 多语言翻译模型系列',
      'brief': '哔哩哔哩 发布并开源 Index-Translate 多语言翻译模型，目前已经开放文本模型权重、在线 Demo 和技术报告。',
      'url': 'https://index-translate.bilibili.com/',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-10-01',
      'title': '蚂蚁百灵发布 Ling-3.1-flash，开放两周免费体验',
      'brief': '百灵推出 Ling-3.1-flash ，总参数约 560B ，每个 Token 激活约 25B ，上下文窗口上限为 1M 。',
      'url': 'https://chat.ant-ling.com/chat',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-10-01',
      'title': 'WorkBuddy 两项限免延期至 10 月 31 日',
      'brief': '混元大模型 官方公告，接入 WorkBuddy 的 Hy3 模型限免和 Hy4 preview 夜间限免均延期至 10 月 31 日 。',
      'url': 'https://mp.weixin.qq.com/s/G_v9I1jO-cfJFsH4CGhX6A',
      'source': '橘鸦AI早报',
      'type': '产品应用'
    },
    {
      'date': '2026-10-01',
      'title': 'ChatGPT Sites 现已支持托管 MCP 服务器可转成插件',
      'brief': 'OpenAI 开发者账号转发了工作人员 Max Stoiber 的宣布： ChatGPT Sites 现已支持托管 MCP 服务器，包括插件扩展。',
      'url': 'https://x.com/OpenAIDevs/status/2105440399531577675',
      'source': '橘鸦AI早报',
      'type': '产品应用'
    },
    {
      'date': '2026-10-01',
      'title': 'Google 为 Gemini 推出 skills 功能',
      'brief': 'Google 在 Gemini 中推出 skills 功能，把用户为特定任务写好的指令保存下来，之后可以直接复用，目前已经面向全球用户推出， Workspace 商业、企业、非营利组织和教育客户将在未来数周内获得该功能。',
      'url': 'https://x.com/GeminiApp/status/2105327839054835886',
      'source': '橘鸦AI早报',
      'type': '产品应用'
    }
  ]
};
