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
      'date': '2026-11-04',
      'title': 'Anthropic 开源 FlashProve，验证 AI 回复来自哪个模型',
      'brief': 'Anthropic 开源可验证推理系统 FlashProve ，目标是让用户确认 AI 回复是否由指定模型生成，同时不公开模型权重。系统分两步运行：提供方先为一组模型权重发布一个简短的加密标识，称为“承诺”，用来固定这组权重，但不公开权重本身。回复生成后，提供方再制作证明文件，证明被检查的输出符合这组权重对用户输入的计算结果。用户拿到标识、输入、回复和证明文件后，可以在自己的 CPU 上检查，无需拿到权重或重新运行整个模型。证明只说明计…',
      'url': 'https://anthropic.com/research/provable-inference',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-11-04',
      'title': 'ChatGPT Side Chats 不再过期，可长期保存',
      'brief': 'OpenAI Codex 团队成员 Brent Traut 宣布，ChatGPT 的 Side Chats 不再因重启或更新应用而过期消失。他称这是自己加入 OpenAI 时发现的 Side Chats 用户最大痛点之一，现已修复。',
      'url': 'https://x.com/btraut/status/2117696510146265089',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-11-04',
      'title': '隐身模型 Crouton Alpha 上线 OpenCode 和 OpenRouter，免费一周',
      'brief': '隐身模型 Crouton Alpha 上线 OpenCode 和 OpenRouter 两个平台。 OpenRouter 页面显示其上下文长度为 1.0M token ，输入输出价格均为每百万 token 0 美元 。 OpenCode 宣布该模型未来一周免费，支持多模态，数据不用于训练，仅限特定地区使用。有分析称，该模型的屏蔽国家列表、特定日文词汇报错和 effort 设置与 Meta 模型特征一致，这一身份关联尚未确认。',
      'url': 'https://openrouter.ai/stealth/crouton-alpha',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-11-04',
      'title': 'OpenAI 团队成员：正扩展 dots 的模型组合',
      'brief': 'OpenAI 团队成员 Tibo 表示，团队正在扩展支持 dots 的模型组合，其中包括 GPT-6 Astra 和 GPT-6.1 Terra ，未来还会加入其他模型。',
      'url': 'https://x.com/thsottiaux/status/2117283124833055196',
      'source': '橘鸦AI早报',
      'type': '产品应用'
    },
    {
      'date': '2026-11-04',
      'title': '豆包工作个人用户简单问答免费',
      'brief': '豆包工作 通过官方公众号宣布，其面向个人用户免费开放日常简单问答服务。官方称，回答日常小问题时，豆包工作比豆包的对话模式更准确、可靠。',
      'url': 'https://mp.weixin.qq.com/s/n4RUfNxJwfcxsByEWLuhfw',
      'source': '橘鸦AI早报',
      'type': '产品应用'
    },
    {
      'date': '2026-11-04',
      'title': 'MiniMax 开源 BYOB：用户自带 agent 同桌互动',
      'brief': 'MiniMax 在 GitHub 开源了名为 BYOB （Bring Your Own Bot）的项目，发布协议规范和一份 TypeScript 参考实现，采用 MIT 许可证。',
      'url': 'https://github.com/MiniMax-AI/mcode-agent-table?ref=explainx',
      'source': '橘鸦AI早报',
      'type': '产品应用'
    },
    {
      'date': '2026-11-04',
      'title': 'Claude 团队版和企业版上线插件自动连接功能',
      'brief': 'Anthropic 宣布为 Claude 团队版和企业版推出插件企业托管授权功能，管理员为整个组织授权一次后，员工首次登录 Claude 即可自动连接公司开通的插件，无需再逐个登录并确认。',
      'url': 'https://claude.com/docs/connectors/building/enterprise-managed-auth',
      'source': '橘鸦AI早报',
      'type': '产品应用'
    },
    {
      'date': '2026-11-04',
      'title': 'Google 面向学生账号上线 Guided Learning',
      'brief': 'Google 宣布在 Google Search 和 Google Classroom 中推出 Guided Learning 功能。该功能面向学生账号，当系统识别到学生在查找某类作业帮助时，会围绕主题或问题一步步讲解，并给出提示促使学生批判性思考，而不是直接给出答案。',
      'url': 'https://blog.google/products-and-platforms/products/education/guided-learning/',
      'source': '橘鸦AI早报',
      'type': '产品应用'
    },
    {
      'date': '2026-11-04',
      'title': '微信视觉团队开源 WeVisOne-VL 视觉模型',
      'brief': '腾讯微信视觉团队 开源视觉多模态模型 WeVisOne-VL ，提供 2B 和 4B 两个参数版本，模型权重、推理包、Cookbooks 与评测流程一并发布，腾讯自研代码采用 Apache 2.0 许可证。',
      'url': 'https://tencent.github.io/WeVisOne-VL/',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-11-04',
      'title': 'Claude Code 产品负责人 Cat Wu 宣布离职',
      'brief': 'Claude Code 产品负责人 Cat Wu 在 X 平台发文宣布离职，周五是她在 Anthropic 的最后一天。',
      'url': 'https://x.com/_catwu/status/2117731934340337676',
      'source': '橘鸦AI早报',
      'type': '行业动态'
    },
    {
      'date': '2026-11-04',
      'title': 'OpenAI 聘请 Uber 总裁出任首席企业事务官',
      'brief': 'OpenAI 宣布， Jill Hazelbaker 将加入公司，出任首席企业事务官，负责全球传播和企业定位。',
      'url': 'https://openai.com/index/jill-hazelbaker-chief-corporate-affairs-officer/',
      'source': '橘鸦AI早报',
      'type': '行业动态'
    },
    {
      'date': '2026-11-04',
      'title': 'OpenAI 聘请美国前陆军部长担任国家安全顾问',
      'brief': 'OpenAI 宣布聘请美国前陆军部长 Dan Driscoll 担任新设的国家安全现代化高级顾问，就利用先进 AI 加强国家和网络安全提供建议。',
      'url': 'https://openai.com/index/dan-driscoll-joins-openai/',
      'source': '橘鸦AI早报',
      'type': '行业动态'
    },
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
