// AI 热点新闻快照(由 scripts/lib/news.js 每日抓取维护,每日 2 次)
// 来源:「橘鸦AI早报」官方 RSS https://daily.juya.uk/rss.xml(每日整篇早报拆成逐条);仅保留最近 2 天
// 字段说明:date=新闻日期(UTC);title=标题;brief=简要;url=详情链接;source=来源;type=新闻类型(早报正文分类)
window.NEWS = {
  'updated': '2026-11-09',
  'retentionDays': 2,
  'types': [
    '要闻',
    '开发生态',
    '技术与洞察',
    '前瞻与传闻',
    '行业动态'
  ],
  'items': [
    {
      'date': '2026-11-09',
      'title': '恢复原价未及时公告，WorkBuddy 将返还积分差额',
      'brief': 'WorkBuddy 发布说明称， DeepSeek-V4.1 Flash 于 9 月 10 日 上线，同步开启为期两周的五折积分活动，原定 9 月 24 日 结束，此后延长至 11 月 5 日 ，并于 11 月 5 日 14:00 起恢复原价。因这一调整未及时向用户公告，WorkBuddy 表示歉意。',
      'url': 'https://mp.weixin.qq.com/s/SoYZS-V1A1ysYNxfBXlO9Q',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-11-09',
      'title': 'OpenAI 员工征询用户意见：是否增设 Pro 50 档位',
      'brief': 'OpenAI Codex 与 ChatGPT 团队成员 Tibo （@thsottiaux）发文澄清，所有 Pro 订阅方案均无 5 小时 限制。他称是看到一些混淆后作出说明，并给出各档方案相较 Plus 订阅方案的用量： Pro 100 为 10 倍 ， Pro 200 为 20 倍 ， Pro 500 为 50 倍 ，其中仅 Pro 500 包含 ultrafast 使用权限。',
      'url': 'https://x.com/thsottiaux/status/2119305294291612140',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-11-09',
      'title': 'NVIDIA 创始人黄仁勋承认对妻子不忠并道歉',
      'brief': 'NVIDIA 董事会宣布启动独立调查，审查近期媒体有关其创始人兼 CEO Jensen Huang 成为外国情报行动目标的报道。',
      'url': 'https://nvidianews.nvidia.com/news/a-message-to-our-company',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-11-09',
      'title': 'DeepSeek Harness 负责人回应插件作者：内置功能可被插件替换',
      'brief': 'DeepSeek Harness 团队负责人 Tianyi Cui 发文，回应插件作者的疑问：什么样的功能官方会做成内置，官方要做的话第三方插件是否还有意义？',
      'url': 'https://x.com/tianyi/status/2119433744671273441',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-11-09',
      'title': 'GPT-6.1 Sol 连续 3 次参与活体小鼠脑手术，定位误差减半',
      'brief': '据《WIRED》报道及生物科技公司 Exin Therapeutics 联合创始人兼 CEO Gabriel Ocana-Santero 在 X 上公布， OpenAI 旗下模型 GPT-6.1 Sol 连续参与 三次 活体小鼠脑部手术，负责定位颅骨表面的解剖标志 Bregma 和 Lambda ，每次操作后由专业外科医生纠正识别位置，模型保存图像和测量数据供下次参考。',
      'url': 'https://x.com/OcanaSantero/status/2118282298789650505',
      'source': '橘鸦AI早报',
      'type': '技术与洞察'
    },
    {
      'date': '2026-11-09',
      'title': '报道称 Anthropic 34 亿美元买燃气发电机组',
      'brief': '据英国《金融时报》报道， Anthropic 于 9 月下旬 斥资 34 亿美元 ，从美国得克萨斯州圣安东尼奥的设备供应商 OnePWR Solutions 手中接下总功率 1.7GW 的重型燃气发电机组订单，用于为数据中心供电，按已知交易记录是 AI 公司迄今规模最大的一笔发电设备采购。',
      'url': 'https://ft.com/content/41bf5c6a-9735-4f1a-a8e3-2bcccad58ba0?syn-25a6b1a6=1',
      'source': '橘鸦AI早报',
      'type': '行业动态'
    },
    {
      'date': '2026-11-09',
      'title': 'DeepMind 高管预告未来几周发布科学成果',
      'brief': 'Google DeepMind 副总裁 Pushmeet Kohli 发文称，公司在多个项目中正观察到科学发现速度出现“真正的转变”，并预告外界将在未来几周的发布中看到这一变化的缩影。',
      'url': 'https://x.com/pushmeet/status/2119373171321196892',
      'source': '橘鸦AI早报',
      'type': '前瞻与传闻'
    },
    {
      'date': '2026-11-09',
      'title': '用户反映 Grok Bot 额度消耗加快，Elon Musk 称将核查用量',
      'brief': '多名用户在 X 上反映， Grok Bot 的订阅额度消耗明显加快， Elon Musk 对此回应称将核查用量问题。用户 Derek Neighbors 称， 200 美元 方案上周全速使用可维持 7 天 ，本周中等负载下只能用 14 小时 ；另有用户表示，离每周重置还有约 3 天 就把 Ultra 套餐额度用到上限。',
      'url': 'https://x.com/elonmusk/status/2119415029812609301',
      'source': '橘鸦AI早报',
      'type': '前瞻与传闻'
    },
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
    }
  ]
};
