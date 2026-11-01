// AI 热点新闻快照(由 scripts/lib/news.js 每日抓取维护,每日 2 次)
// 来源:「橘鸦AI早报」官方 RSS https://daily.juya.uk/rss.xml(每日整篇早报拆成逐条);仅保留最近 2 天
// 字段说明:date=新闻日期(UTC);title=标题;brief=简要;url=详情链接;source=来源;type=新闻类型(早报正文分类)
window.NEWS = {
  'updated': '2026-11-01',
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
      'date': '2026-11-01',
      'title': 'OpenAI：12 月起 ChatGPT 与 Codex 共享额度',
      'brief': 'OpenAI 在帮助中心表示，从 12 月 起， Plus 、 Pro 和 Business 套餐的 ChatGPT 与 Codex 用量将共用一份额度，并按 token 计量。',
      'url': 'https://help.openai.com/en/articles/20001625-understanding-chatgpt-and-codex-usage-limits',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-11-01',
      'title': 'DeepSeek 发文探讨 Super-agent 架构，并开源研究原型',
      'brief': 'DeepSeek 团队发文探讨 Super-agent 架构，目标是让 Agent 跨会话保持上下文、并行处理任务并持续在线运行。',
      'url': 'https://mp.weixin.qq.com/s/zoS7GlReWPhfCjENGxXCdg',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-11-01',
      'title': 'OpenAI 说明 ChatGPT 支付卡和设备限制',
      'brief': 'OpenAI 在帮助中心说明， ChatGPT 为保护隐私和安全，对支付卡和设备实施限制。若同一张支付卡或一台设备关联的订阅过多，新订阅购买可能被阻止；单台设备可使用的付费账号数量也有限制。',
      'url': 'https://help.openai.com/en/articles/20001559-understanding-card-and-device-limits-in-chatgpt',
      'source': '橘鸦AI早报',
      'type': '产品应用'
    },
    {
      'date': '2026-11-01',
      'title': 'ChatGPT 推出多账号切换，Codex 将提供可留存额度重置',
      'brief': 'OpenAI 为 ChatGPT 推出多账号切换功能，用户最多可同时登录 两个 账号，无需退出即可切换；聊天记录、记忆、文件、设置、订阅和工作区保持独立。',
      'url': 'https://x.com/thsottiaux/status/2116405414921384099',
      'source': '橘鸦AI早报',
      'type': '产品应用'
    },
    {
      'date': '2026-11-01',
      'title': 'OpenAI 团队成员：Prism 正逐步停止服务',
      'brief': 'OpenAI 团队成员 Feitong Yang 表示， Prism 正在逐步停止服务，团队正为用户提供过渡方案。目前，用户可以在 ChatGPT 桌面端打开 .tex 文件，编辑和编译 LaTeX 。 Feitong Yang 称，用户现在应能从 Prism 网站下载项目，稍后还可通过桌面端快捷键将选定项目导入本地并继续编辑。',
      'url': 'https://x.com/feitong_yang/status/2116245744327995489',
      'source': '橘鸦AI早报',
      'type': '产品应用'
    },
    {
      'date': '2026-11-01',
      'title': 'OpenAI 推出生命科学模型，仅向获批机构开放',
      'brief': 'OpenAI 推出生命科学研究模型 GPT-6 Rosalind Research ，API 标识符为 gpt-6-rosalind ，仅向通过 Research 审批的机构和用户开放。该模型与 GPT-6 Astra 使用相同权重，可用于分析生物数据、综合研究文献和规划实验。',
      'url': 'https://developers.openai.com/api/docs/pricing?life-sciences-context-length=short',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-11-01',
      'title': 'OpenAI 法律模型现身 API 定价页',
      'brief': 'OpenAI 的 API 定价页列出法律模型配置 gpt-6-astra-law 及其价格。每百万 token 的输入、输出和缓存输入价格分别为 10 美元、50 美元和 1 美元 ，促销定价至少有效至 2026 年 12 月 31 日 。',
      'url': 'https://developers.openai.com/api/docs/pricing',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-11-01',
      'title': 'Command Code 永久额度更新',
      'brief': 'Command Code 宣布，月费 10 美元 的 GOAT 套餐将为 DeepSeek V4.1 Flash 1017 和 GLM 5.3 Flash 永久提供 100 美元 的使用额度。',
      'url': 'https://x.com/CommandCodeAI/status/2116329543921475861',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-11-01',
      'title': 'OpenCode 优化 DeepSeek 模型服务',
      'brief': '针对用户反馈 OpenCode Go 中的 DeepSeek 模型表现不佳， OpenCode 开发者表示，团队已移除两处低流量配置。这两处配置的上游内容过滤触发过于频繁，导致用户收到错误。开发者称，不同配置在其测试中的表现处于同一范围，但用户遇到的问题可能是真实的，需要更具体的反馈。',
      'url': 'https://x.com/thdxr/status/2116581467715195278',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-11-01',
      'title': 'Anthropic 自动化红队实验发现训练数据监控漏洞',
      'brief': 'Anthropic 发文介绍其使用 Claude agent 开展自动化红队研究，寻找能够绕过训练数据监控、并诱导模型产生不当行为的数据。',
      'url': 'https://alignment.anthropic.com/2026/automated-em-search',
      'source': '橘鸦AI早报',
      'type': '技术与洞察'
    },
    {
      'date': '2026-11-01',
      'title': 'SpaceXSI 将为 Grok API 文本默认加入不可见水印',
      'brief': 'SpaceXSI 文档说明，自 11 月 7 日 起，支持的 Grok 模型将默认在 API 文本输出中加入不可见水印，以符合欧盟 AI 法案要求。水印覆盖所有文本生成 API ，包括普通文本、结构化输出和工具调用参数。',
      'url': 'https://docs.x.ai/developers/advanced-api-usage/watermarking?lid=860k1ub3kf6m',
      'source': '橘鸦AI早报',
      'type': '行业动态'
    },
    {
      'date': '2026-11-01',
      'title': '报道称 Blackstone 下调对 Anthropic 信用评级预期',
      'brief': '据 Financial Times 报道， Blackstone 告诉投资者，预计 Anthropic 上市后将获得 双 B 档信用评级 ，处于 投机级评级 的较高档次。此前， Blackstone 预计 Anthropic 会在 2027 年前获得 投资级评级 。 Blackstone 是近期一笔 630 亿美元 芯片融资交易的主要投资者。 Anthropic 此前提交了上市申请。',
      'url': 'https://techcrunch.com/2026/10/30/anthropic-expected-to-receive-high-junk-rating-from-credit-agencies-following-ipo-report-says/',
      'source': '橘鸦AI早报',
      'type': '行业动态'
    },
    {
      'date': '2026-10-31',
      'title': 'Anthropic 更名 Claude 订阅方案，逐步取消已验证 Ultra 账户五小时限制',
      'brief': 'Anthropic 宣布将 Claude Max 5x 更名为 Max、 Max 20x 更名为 Ultra，月费分别维持 100 美元 和 200 美元 。',
      'url': 'https://support.claude.com/en/articles/17728952-what-is-the-ultra-plan',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-10-31',
      'title': 'OpenCode Go 为 DeepSeek V4.1 Flash 提供每月 100 美元额度',
      'brief': 'OpenCode 发布 Operation Cheepseek Phase 4 ，为 OpenCode Go 订阅用户提供 DeepSeek V4.1 Flash 每月 100 美元 的使用额度。',
      'url': 'https://x.com/opencode/status/2116209960673800474',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-10-31',
      'title': 'Anthropic 为 Claude Code 加入游戏重制限制',
      'brief': 'Anthropic 技术团队成员 Addy Osmani 确认， Claude Code 为 Opus 5.5 的提示词加入两句规则，避免重制别人的特定游戏。',
      'url': 'https://x.com/addyosmani/status/2116213240363729013',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-10-31',
      'title': 'Cursor 确认扩展市场出现恶意 Claude Code 版本',
      'brief': 'Cursor 确认，其 VS Code 扩展市场曾提供遭恶意篡改的 Claude Code 扩展 2.1.312 和 2.1.313 版本，影响 Windows 和 macOS。这些版本并非 Anthropic 开发，会收集主机信息并尝试安装持久化 SSH 后门。',
      'url': 'https://cursor.com/blog/claude-code-extension-security-notice',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-10-31',
      'title': '豆包推出免费福利，新用户可领 30 天订阅体验',
      'brief': '豆包 于 10 月 30 日 推出免费福利活动，面向新用户和所有用户分别提供权益。',
      'url': 'https://mp.weixin.qq.com/s/SyRyGyX-5O_v--1z3msLgg',
      'source': '橘鸦AI早报',
      'type': '产品应用'
    },
    {
      'date': '2026-10-31',
      'title': '商汤开源 SenseNova-Loop-9B-Preview 多模态模型',
      'brief': '商汤 推出并开源多模态模型 SenseNova-Loop-9B-Preview ，面向长上下文和 agent 工作流。',
      'url': 'https://huggingface.co/sensenova/SenseNova-Loop-9B-Preview',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-10-31',
      'title': '苹果宣布首批 Apple 智能在中国推出，接入千问',
      'brief': '苹果 宣布首批 Apple 智能功能将在中国推出，现有 Siri、写作工具和视觉智能将接入 阿里巴巴 的 千问 。',
      'url': 'https://www.apple.com.cn/newsroom/2026/10/apple-intelligence-features-are-coming-to-users-in-china/',
      'source': '橘鸦AI早报',
      'type': '行业动态'
    },
    {
      'date': '2026-10-31',
      'title': '四家 AI 公司支持通用训练偏好标记',
      'brief': 'OpenAI 、 Google 、 Microsoft 和 Anthropic 宣布支持一种通用训练偏好标记，让网站通过 robots.txt 向多家参与的 AI 服务商表达内容是否可用于训练的偏好。',
      'url': 'https://openai.com/index/helping-websites-express-ai-training-preferences/',
      'source': '橘鸦AI早报',
      'type': '行业动态'
    },
    {
      'date': '2026-10-31',
      'title': 'OpenAI 推出 Private Intelligence，保护商业客户数据',
      'brief': 'OpenAI 推出 Private Intelligence ，为商业客户处理敏感工作提供数据保护，并让客户控制 agent 的行为。客户拥有包括输入和输出在内的业务数据，可以决定 agent 能访问什么、执行哪些操作，以及何时需要审批。',
      'url': 'https://openai.com/business/private-intelligence',
      'source': '橘鸦AI早报',
      'type': '行业动态'
    }
  ]
};
