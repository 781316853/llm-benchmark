// AI 热点新闻快照(由 scripts/lib/news.js 每日抓取维护,每日 2 次)
// 来源:「橘鸦AI早报」官方 RSS https://daily.juya.uk/rss.xml(每日整篇早报拆成逐条);仅保留最近 2 天
// 字段说明:date=新闻日期(UTC);title=标题;brief=简要;url=详情链接;source=来源;type=新闻类型(早报正文分类)
window.NEWS = {
  'updated': '2026-11-08',
  'retentionDays': 2,
  'types': [
    '要闻',
    '开发生态',
    '模型发布',
    '技术与洞察',
    '前瞻与传闻',
    '行业动态'
  ],
  'items': [
    {
      'date': '2026-11-08',
      'title': 'OpenAI 智能体 dots 可用验证码代用户登录',
      'brief': 'OpenAI 产品团队成员 James Sun 在 X 宣布， OpenAI 全天候智能体产品 dot 现已升级，可以使用发送到连接收件箱的登录验证码，代表用户无缝完成登录。',
      'url': 'https://x.com/JamesZmSun/status/2119147164039618879',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-11-08',
      'title': 'OpenCode 推出 Browse：AI agent 可控制你的真实浏览器',
      'brief': 'OpenCode 官方宣布， OpenCode Browse 现已上线。',
      'url': 'https://opencode.ai/product/browse',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-11-08',
      'title': 'OpenCode 创始人回应模型卡顿，正增加容量',
      'brief': '近日有用户反映 OpenCode 上的 DeepSeek V4.1 Flash 响应缓慢，连基本任务也难以完成。OpenCode 创始人 Frank Wang 回应称，正在增加大量容量，预计情况会逐步改善。另一位创始人 dax 表示，随着业务增长，他难以跟进所有事务，用户遇到推理或 Go 相关问题时可联系更专注于这些事务的 Frank Wang。',
      'url': 'https://x.com/thdxr/status/2118972258479927666',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-11-08',
      'title': 'Cua 联合 Scale AI 推出 Cua Driver Bench，评测 agent 后台执行桌面任务',
      'brief': 'Cua 宣布与 Scale AI 的 AgentEnv 联合推出 Cua Driver Bench ，评测 computer-use 工具层能否让 agent 在后台完成 macOS 桌面任务、不打扰正在操作电脑的用户。该基准目前仅覆盖 macOS ，任务和测量都基于 macOS 26 桌面，共 10 项任务，分属多应用工作流、精准交互、打断与恢复三类。',
      'url': 'https://x.com/trycua/status/2118754889329230241',
      'source': '橘鸦AI早报',
      'type': '技术与洞察'
    },
    {
      'date': '2026-11-08',
      'title': 'Anthropic 须应诉 Claude Max 宣传误导指控',
      'brief': '加州北区联邦法院治安法官 Alex Tse 裁定， Anthropic 须就原有 Claude Max 套餐“比 Pro 多 5 倍或 20 倍用量”的宣传误导指控应诉。',
      'url': 'https://courthousenews.com/anthropic-must-face-claims-its-claude-max-pitch-misled-users',
      'source': '橘鸦AI早报',
      'type': '行业动态'
    },
    {
      'date': '2026-11-08',
      'title': 'OpenAI CFO：继续考虑 2027 年上市',
      'brief': 'OpenAI 首席财务官 Sarah Friar 在接受 CNBC 采访时表示，公司将继续考虑在 2027 年 上市。',
      'url': 'https://www.cnbc.com/2026/11/06/cnbc-exclusive-transcript-openai-cfo-sarah-friar-speaks-with-cnbcs-sara-eisen-on-squawk-on-the-street-today.html',
      'source': '橘鸦AI早报',
      'type': '行业动态'
    },
    {
      'date': '2026-11-08',
      'title': 'Anthropic IPO 估值遭质疑，下周启动 IPO 路演',
      'brief': '据路透社等媒体报道， Anthropic 的 IPO 计划面临潜在投资者的估值质疑，部分投资者认为近期讨论的 1.5 万亿美元 估值处于预期高端，公司可能需要更大折价才能锁定认购。',
      'url': 'https://www.theinformation.com/briefings/anthropic-proceed-ipo-roadshow-next-week',
      'source': '橘鸦AI早报',
      'type': '前瞻与传闻'
    },
    {
      'date': '2026-11-07',
      'title': 'Qwen 发海报预热新一代旗舰模型',
      'brief': '阿里巴巴 Qwen 官方账号发布一张海报，画面写有「北冥有鱼 其名为_」，配文只有一句 The becoming begins。',
      'url': 'https://x.com/Alibaba_Qwen/status/2118674834632978755',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-11-07',
      'title': '阿里发布 MNN-Pocket-0.3B',
      'brief': '阿里 MNN 团队发布并开源 MNN-Pocket-0.3B ，面向手机应用的有限算力和内存设计。该稠密语言模型约有 3 亿 参数，支持中英文指令交互，最长支持 32K token 上下文，以 Apache 2.0 许可证开源。其 INT4 量化的 MNN 部署版本体积为 173 MB 。团队称，模型在 iPhone 18 Pro 上通过 MNN 引擎离线运行时，平均解码速度约为 350 token/s 。',
      'url': 'https://huggingface.co/taobao-mnn/MNN-Pocket-0.3B',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-11-07',
      'title': 'Qoder CN 推出匿名模型 Qoduck 限时限量免费活动',
      'brief': 'Qoder CN 面向所有新老个人用户推出匿名模型 Qoduck 限时免费活动， 11 月 7 日 起每日赠送免费使用额度，额度内调用不消耗 Credits ，该模型计费系数由 0.5× 降至 0.0× ，思考强度调至「最大」时同样免费。',
      'url': 'https://docs.qoder.cn/events/qoduck-free',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-11-07',
      'title': 'Google Antigravity 重置额度并上线语音模式',
      'brief': '当地时间周五， Google Antigravity 负责人 Varun Mohan 为所有用户重置了 Gemini 和 Argon 额度，称本周更新较多，希望大家周末继续构建，下周还有更多更新。',
      'url': 'https://antigravity.google/blog/antigravity-voice-mode',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-11-07',
      'title': 'Google 重新设计 Antigravity，推出远程任务功能',
      'brief': 'Google Antigravity 重新设计了 Antigravity 应用，称使其更加简洁流畅，使用起来也更加愉悦！',
      'url': 'https://x.com/_mohansolo/status/2118478787566588009',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    }
  ]
};
