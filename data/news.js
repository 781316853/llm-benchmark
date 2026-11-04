// AI 热点新闻快照(由 scripts/lib/news.js 每日抓取维护,每日 2 次)
// 来源:「橘鸦AI早报」官方 RSS https://daily.juya.uk/rss.xml(每日整篇早报拆成逐条);仅保留最近 2 天
// 字段说明:date=新闻日期(UTC);title=标题;brief=简要;url=详情链接;source=来源;type=新闻类型(早报正文分类)
window.NEWS = {
  'updated': '2026-11-04',
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
      'date': '2026-11-03',
      'title': '研究者称 GPT-6 Astra 直接改写模型权重',
      'brief': 'MIT 研究者 Rikiya Takehi 等人发布博客，展示他们称为权重空间编程的方法：让 GPT-6 Astra 直接检查或改写神经网络中决定计算结果的参数，而不通过训练来调整。',
      'url': 'https://rikiyat.github.io/blog/weight-space-programming/',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-11-03',
      'title': 'OpenAI 自研 Git 后端 Pando 投产，中位推送延迟降近 80%',
      'brief': 'OpenAI 发文披露，其为单体仓库打造的新 Git 后端 Pando 已经投产，目前承载着 OpenAI 单体仓库的全部开发工作，工程师和 agent 无需改变现有 Git 工作流即可使用。',
      'url': 'https://openai.com/index/scaling-git-at-openai',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-11-03',
      'title': 'Kimi 发布游戏开发与创意工作解决方案',
      'brief': 'Kimi 发布游戏开发与创意工作解决方案，方案基于 Kimi K3.1 Pro 模型、 Kimi Code 与 Kimi Work 系列 Agent ，并借助插件连接 Unity 、 Unreal Engine 、 Blender 等专业软件，可直接操作现有工程。',
      'url': 'https://mp.weixin.qq.com/s/qSwHJXAuAyrjeYXGC3XnFA',
      'source': '橘鸦AI早报',
      'type': '产品应用'
    },
    {
      'date': '2026-11-03',
      'title': '商汤推出 SenseNova 6.8 Flash 正式版，目前限时免费',
      'brief': '商汤 推出 日日新 SenseNova 6.8 Flash 正式版，支持跨任务、跨会话协作，可生成静态网页、动态内容及兼具审美表达与实用价值的设计成果。',
      'url': 'https://www.sensenova.cn/flash-6-8',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-11-03',
      'title': 'TRAE 宝开启限时免费：问答与任务不消耗积分',
      'brief': 'TRAE 宣布，开发者个人助理 TRAE 宝 开启限时免费，即日起至 11 月 8 日 23:59 ，登录 TRAE 桌面端最新版进行问答、下达任务均不消耗积分。',
      'url': 'https://mp.weixin.qq.com/s/7MGo9-U0oxLZ1fNW2AZOeQ?nwr_flag=1',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-11-03',
      'title': 'ZCode 上线三款官方插件，网页项目一键部署',
      'brief': 'ZCode 更新至 3.17.1 版本，正式上线 Computer Use 、 Browser Use 和 ZCode Sites 三款官方插件。',
      'url': 'https://mp.weixin.qq.com/s/dkGAhKckTpN_Yku_mQ7sUQ',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-11-03',
      'title': 'Anthropic Message API 推出 message threads 公测',
      'brief': 'Anthropic 在 Messages API 推出 message threads 公开测试版，开发者开启线程后，每轮只需发送新增消息和上一条消息 ID，由服务端缓存对话，无需重复发送全部历史。',
      'url': 'https://x.com/ClaudeDevs/status/2117332452603527535',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-11-03',
      'title': 'OpenAI 发布 LifeVal 基准，衡量 AI 完成日常任务的能力',
      'brief': 'OpenAI 发布 LifeVal 基准，用于衡量 AI 帮助人们完成日常任务的能力，任务覆盖照护、健康、教育、家庭行政、个人财务、购物和获取政府服务等领域。',
      'url': 'https://openai.com/index/lifeval',
      'source': '橘鸦AI早报',
      'type': '技术与洞察'
    },
    {
      'date': '2026-11-03',
      'title': 'OpenAI 部署激活分类器，实时拦截模型违规输出',
      'brief': 'OpenAI 介绍了激活分类器的训练与部署方法，并表示从 GPT-5.6 开始，这类分类器已用于监测所有助手回复，作为现有文本分类器之外的一层安全防线。',
      'url': 'https://alignment.openai.com/training-activation-classifiers/',
      'source': '橘鸦AI早报',
      'type': '技术与洞察'
    },
    {
      'date': '2026-11-03',
      'title': '腾讯混元发布 Hyra 2.0：从解题到造工具',
      'brief': '腾讯混元 发布自动化科研系统 Hyra 2.0 ，将重点从让 agent 直接解决科学问题，转向由 agent 研发和升级可复用的科学模型、研究工作流与软件工具。',
      'url': 'https://mp.weixin.qq.com/s?__biz=MzkwODU2OTQyNQ%3D%3D&amp;mid=2247498763&amp;idx=1&amp;sn=279f8fb4e43a987fdc0aa2af0b0f7958',
      'source': '橘鸦AI早报',
      'type': '技术与洞察'
    },
    {
      'date': '2026-11-03',
      'title': 'SemiAnalysis 发布 GDPx 基准，最佳模型仅得 12%',
      'brief': 'SemiAnalysis 发布面向 AI agent 的新基准 GDPx ，覆盖芯片设计、网络安全、生物、金融、法律、量化交易等 11 个领域 共 206 项任务 ，由 14 家 专业数据伙伴协作搭建，各领域权重相同。',
      'url': 'https://newsletter.semianalysis.com/p/gdpx-measuring-frontier-model-capabilities',
      'source': '橘鸦AI早报',
      'type': '技术与洞察'
    },
    {
      'date': '2026-11-03',
      'title': 'Anthropic 三季度营收 169.6 亿美元，同比增长 1127%',
      'brief': '在推进 IPO 之际， Anthropic 向 美国证券交易委员会 提交修正后的 S-1 上市文件，披露 2026 年第三季度 营收 169.6 亿美元 ，同比增长 1127% ，前九个月营收合计 332.4 亿美元 。',
      'url': 'https://www.sec.gov/Archives/edgar/data/2130357/000162828026068676/anthropicpbc-sx1ax1.htm',
      'source': '橘鸦AI早报',
      'type': '行业动态'
    }
  ]
};
