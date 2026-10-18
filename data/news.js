// AI 热点新闻快照(由 scripts/lib/news.js 每日抓取维护,每日 2 次)
// 来源:「橘鸦AI早报」官方 RSS https://daily.juya.uk/rss.xml(每日整篇早报拆成逐条);仅保留最近 2 天
// 字段说明:date=新闻日期(UTC);title=标题;brief=简要;url=详情链接;source=来源;type=新闻类型(早报正文分类)
window.NEWS = {
  'updated': '2026-10-18',
  'retentionDays': 2,
  'types': [
    '要闻',
    '开发生态',
    '产品应用'
  ],
  'items': [
    {
      'date': '2026-10-18',
      'title': 'DeepSeek 更新 V4.1 Flash 模型并开放搜索接口',
      'brief': '10月17日 ， DeepSeek 发布并开源 DeepSeek-V4.1-Flash-1017 ，官方网页端、App 与 API 已同步切换到新版本， API 调用方式和价格不变，继续使用 deepseek-flash 即可访问。',
      'url': 'https://api-docs.deepseek.com/zh-cn/news/news261017',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-10-18',
      'title': 'OpenCode 披露安全事件，部分用户受影响',
      'brief': 'OpenCode 披露一起安全事件。',
      'url': 'https://x.com/opencode/status/2111519637049319818',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-10-18',
      'title': 'Codex 28 天活动第 13 天完整重置用量',
      'brief': 'OpenAI Codex 负责人 Tibo 宣布，在此前启动的 28 天 活动第 13 天 ，完整重置用量限制。此次重置已于北京时间 10 月 18 日 早上约 5 点 完成。',
      'url': 'https://x.com/thsottiaux/status/2111566005684289735',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-10-18',
      'title': 'Tibo 回应产品改进建议：其中两项在做',
      'brief': 'OpenAI Codex 负责人 Tibo 在 X 上回复用户 AI Fun 的产品改进建议，称其中两项正在开发，但没有说明是哪两项。 AI Fun 提出的 5 项建议包括： Plus 取消 5 小时限制、向 Plus 用户开放 dot 、将 ultrafast 改为提升 15 倍速度， Pro20x 用量翻倍，以及将 6.1 Sol 的 TPS 至少提升至 50 。',
      'url': 'https://x.com/thsottiaux/status/2111339932614861298',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-10-18',
      'title': 'WorkBuddy 国际版接入最新 DeepSeek 模型，限时免费',
      'brief': 'WorkBuddy 宣布， WorkBuddy 国际版已更新至最新的 DeepSeek 模型，并免费开放至 10 月 31 日 。 DeepSeek 发布模型时表示，此次新版 DeepSeek-V4.1-Flash-1017 模型专门针对 WorkBuddy 等平台进行了优化。',
      'url': 'https://x.com/WorkBuddy_AI/status/2111404103402430558',
      'source': '橘鸦AI早报',
      'type': '产品应用'
    },
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
    }
  ]
};
