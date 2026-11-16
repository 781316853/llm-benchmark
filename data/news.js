// AI 热点新闻快照(由 scripts/lib/news.js 每日抓取维护,每日 4 次)
// 来源:「橘鸦AI早报」官方 RSS https://daily.juya.uk/rss.xml(每日整篇早报拆成逐条);仅保留最近 2 天
// 字段说明:date=新闻日期(UTC);title=标题;brief=简要;url=详情链接;source=来源;type=新闻类型(早报正文分类)
window.NEWS = {
  'updated': '2026-11-16',
  'retentionDays': 2,
  'types': [
    '开发生态',
    '模型发布',
    '技术与洞察',
    '前瞻与传闻',
    '行业动态'
  ],
  'items': [
    {
      'date': '2026-11-16',
      'title': '华为云上线 openPangu-2.1-Pro 模型',
      'brief': '华为云 MaaS 模型即服务平台正式上线开源 盘古模型openPangu-2.1-Pro ，围绕 Agent 开发、 AI 编码和推理优化三大方向升级。',
      'url': 'https://mp.weixin.qq.com/s/8JfFmscBTDl_mPQMycD8Nw',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-11-16',
      'title': 'Agnes AI 开源 187.8B 多模态 MoE 模型',
      'brief': 'Agnes AI 在 Hugging Face 发布多模态混合专家模型 Agnes 2.5 Pro Theta ，总参数量约 187.8B ，上下文上限 262,144 tokens ，许可证为 Apache License 2.0 。',
      'url': 'https://huggingface.co/Agnes-AI/Agnes-2.5-Pro-Theta',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-11-16',
      'title': 'OpenCode Go 订阅现已支持微信支付付款',
      'brief': 'OpenCode 在 Console 更新日志中宣布，Go 和 Go Plus 订阅方案现已支持使用微信支付付款。用户在微信中授权一次后，订阅将按月自动续费；若在微信中取消扣款协议，下次续费时会要求重新确认。',
      'url': 'https://opencode.ai/console/changelog/wechat-pay-go',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-11-16',
      'title': 'OpenAI 开设 science blog 并发布 Standard Model 研究解读',
      'brief': 'OpenAI 宣布开设全新的 OpenAI science blog ，用于分享 OpenAI 、合作方及科研界借助 AI 推进科学发现的成果、实用方法与研究者一线经验。',
      'url': 'https://openai.com/index/our-new-blog-for-science/',
      'source': '橘鸦AI早报',
      'type': '技术与洞察'
    },
    {
      'date': '2026-11-16',
      'title': '报道称 Jensen Huang 考虑重返 NVIDIA 担任 CEO',
      'brief': '据英国《金融时报》报道， NVIDIA 前 CEO Jensen Huang 正考虑重新出任 CEO，并与几位亲信讨论过回归的可能。一位盟友称，有人正召集硅谷高管游说董事会让他复职，并争取白宫支持。',
      'url': 'https://wccftech.com/jensen-huang-considers-returning-to-nvidia-as-his-allies-assemble-a-war-room-to-lobby-on-his-behalf-and-a-petition-in-his-favor-crosses-156000-signatures',
      'source': '橘鸦AI早报',
      'type': '前瞻与传闻'
    },
    {
      'date': '2026-11-15',
      'title': 'Grok Bot 多项优化上线，订阅用量增约 7%',
      'brief': 'Grok Bot 团队成员 Sam Sokolin 发文称，本周已完成多项 Grok Bot harness 优化，订阅方案用量预计可增加约 7% ，日常运行最多可增加约 15% 。',
      'url': 'https://x.com/mattyp/status/2121624592326480311',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-11-15',
      'title': 'Claude Code 桌面版推出 mods 自定义主题',
      'brief': 'Anthropic 宣布， Claude Code 桌面版现已支持通过 mods 构建自定义主题，用户可以调整颜色、添加动画背景。构建主题时可以直接告诉 Claude 想要的外观，也可以使用官方提供的 theme-examples 插件快速开始。想自己动手的开发者可以参考官方发布的配套文档。该功能需要更新到最新版桌面应用，目前在本地会话中生效，云端会话支持即将推出。',
      'url': 'https://code.claude.com/docs/en/plugins/mods/interface',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-11-15',
      'title': '谷歌 300 美元赠金将不再覆盖 Gemini 调用费用',
      'brief': 'Google Cloud 官方文档显示， 2026 年 11 月 16 日 或之后注册免费试用或升级为付费结算账号的用户，其 300 美元 迎新赠金将无法用于支付 Gemini Platform （含 Vertex AI ）、 AI Studio 中的 Gemini API ，以及以模型即服务形式提供的生成式 AI 合作伙伴模型的费用，只能用于免费试用计划涵盖的其他 Google Cloud 产品和服务。',
      'url': 'https://docs.cloud.google.com/free/docs/free-cloud-features',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-11-15',
      'title': 'Cloudflare 开源 Kitesurf 浏览器，支持自行部署',
      'brief': 'Cloudflare 将专为 AI agent 设计的浏览器 Kitesurf 在 GitHub 开源，采用 Apache 2.0 许可证。',
      'url': 'https://blog.cloudflare.com/kitesurf-open-source/',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-11-15',
      'title': 'Claude 发布 always-on agents 指南',
      'brief': 'Claude 团队发布 Building always-on agents 指南，介绍如何搭建能跨会话管理状态、无需直接监督就主动行动的 always-on agents 。指南说明，这类 agent 大部分时间休眠，收到事件后执行一次 run 并保存状态，其架构包含 event inbox 、 timers 、 memory 、 permissions 和 outbox 五个核心模块。',
      'url': 'https://claude.com/resources/articles/building-always-on-agents',
      'source': '橘鸦AI早报',
      'type': '技术与洞察'
    },
    {
      'date': '2026-11-15',
      'title': 'Anthropic 发布 10 项安全评测建议',
      'brief': 'Anthropic 在工程博客发布 10 项安全评测建议。',
      'url': 'https://anthropic.com/research/building-strong-safety-evaluations',
      'source': '橘鸦AI早报',
      'type': '技术与洞察'
    },
    {
      'date': '2026-11-15',
      'title': 'Cursor 披露安全事件：密钥泄露致部分数据外泄',
      'brief': 'Cursor 发布安全事件更新：攻击者利用 Fireworks 泄露的访问密钥，复制了部分智能体链路追踪数据，少量数据含未脱敏凭证，API 凭证遭泄露的客户不到 0.01% 。攻击者借此入侵了 Cursor 使用的部分 SaaS 工具。',
      'url': 'https://cursor.com/blog/security-incident-update',
      'source': '橘鸦AI早报',
      'type': '行业动态'
    }
  ]
};
