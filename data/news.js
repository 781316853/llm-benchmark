// AI 热点新闻快照(由 scripts/lib/news.js 每日抓取维护,每日 2 次)
// 来源:「橘鸦AI早报」官方 RSS https://daily.juya.uk/rss.xml(每日整篇早报拆成逐条);仅保留最近 2 天
// 字段说明:date=新闻日期(UTC);title=标题;brief=简要;url=详情链接;source=来源;type=新闻类型(早报正文分类)
window.NEWS = {
  'updated': '2026-10-31',
  'retentionDays': 2,
  'types': [
    '要闻',
    '开发生态',
    '模型发布',
    '产品应用',
    '行业动态'
  ],
  'items': [
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
      'title': 'Qoder 支持局域网内多设备互联并分派任务',
      'brief': 'Qoder 在手机远程控制之后再次升级连接能力，支持同一局域网内的设备互联。用户在常用的 Qoder 客户端里，通过配对码连接其他设备，即可向其分派任务，省去 SSH 配置和远程桌面切换。',
      'url': 'https://mp.weixin.qq.com/s/4hFWL1RkQ4wWeUzWlddYKg',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-10-31',
      'title': 'OpenAI Agents API 推出五项功能更新',
      'brief': 'OpenAI Agents API 团队推出 五项 更新，涵盖命令审核、会话处理和提示缓存。 Auto Review 会在命令执行前检查潜在不当行为，异步压缩则允许压缩在后台进行。实验性时间感知功能让模型感知时间流逝，会话中的工具也可随时更新。系统提示现在会跨会话自动缓存， OpenAI 称这可以节省时间和费用。',
      'url': 'https://x.com/stevendcoffey/status/2116303789649236048',
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
    },
    {
      'date': '2026-10-31',
      'title': 'OpenAI 承诺定期发布社区安全报告，首期计划 2027 年初推出',
      'brief': 'OpenAI 承诺于 2027 年初 发布首期社区安全报告，覆盖 2026 年下半年 ，此后每半年更新。报告将介绍公司如何识别和应对社区安全问题，以及保护措施的效果。 OpenAI 称， 2026 年第三季度 向执法部门提供了 200 余次 线索转介。',
      'url': 'https://openai.com/index/community-safety-report-and-new-protections-for-teens/',
      'source': '橘鸦AI早报',
      'type': '行业动态'
    },
    {
      'date': '2026-10-30',
      'title': 'OpenAI 将 Pro 各档与 Business Premium 用量翻倍，dots 继续提供单独用量',
      'brief': 'OpenAI 宣布，即日起 Pro 100 、 Pro 200 、 Pro 500 和 Business Premium 的所有用量上限翻倍。 OpenAI 称听取了用户反馈，不再下调 Pro 200 的用量上限， Work 和 Codex 用量保持不变。',
      'url': 'https://x.com/thsottiaux/status/2115850175868727621',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-10-30',
      'title': 'Gemini 应用支持在聊天中生成、预览和编辑PDF等文件',
      'brief': 'Google 宣布， Gemini 应用现在支持在聊天中直接生成、预览和编辑文档、 PDF 、演示文稿、电子表格、 Markdown 文件、 TXT 文件和代码。',
      'url': 'https://blog.google/innovation-and-ai/products/gemini-app/edit-files-directly/',
      'source': '橘鸦AI早报',
      'type': '产品应用'
    },
    {
      'date': '2026-10-30',
      'title': 'Gemini Notebook 新增数百本免费教科书',
      'brief': 'Google 宣布， Gemini Notebook 新增 数百本 教科书，学生可以免费直接在 Notebook 内浏览、选择，并上传为资料来源，用于准备考试。教科书来自 S Chand Publishing 、 OpenStax 和 Open Textbook Library 等出版方。 Google 在博客中称，用户添加教科书后，可以生成自定义的学习指南和测验。',
      'url': 'https://blog.google/innovation-and-ai/products/gemini-notebook/new-access-textbooks/',
      'source': '橘鸦AI早报',
      'type': '产品应用'
    },
    {
      'date': '2026-10-30',
      'title': 'Claude 移动应用更新：多账号切换、CarPlay 语音',
      'brief': 'Anthropic 旗下的 Claude 本周更新移动应用。在 iPad 和 iPhone Duo 上， Claude 生成的内容改为在聊天旁侧打开，需要细看时可全屏显示； iOS 和 Android 支持登录多个账号并切换，无需退出登录。应用界面语言新增 24 种，共 33 种，覆盖 web 、桌面端、 iOS 和 Android 。 iOS 和 Android 的语音模式响应更快， iPhone 上的语音模式支持 Apple Car…',
      'url': 'https://x.com/claudeai/status/2115859377488072879',
      'source': '橘鸦AI早报',
      'type': '产品应用'
    },
    {
      'date': '2026-10-30',
      'title': 'Anthropic 为 Claude Enterprise 推出智能报告',
      'brief': 'Anthropic 为 Claude Enterprise 推出智能报告功能，管理者选定团队、最长 28 天 的时间范围和 Claude 产品后，可查看团队的工作流、产出内容、对应开销和常见阻碍。每个组织每月可免费生成 10 份 报告，达到上限后无法新建，需联系客户团队。',
      'url': 'https://claude.com/resources/articles/smart-reports-surveys-pooled-budgets',
      'source': '橘鸦AI早报',
      'type': '产品应用'
    }
  ]
};
