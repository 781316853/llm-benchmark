// AI 热点新闻快照(由 scripts/lib/news.js 每日抓取维护,每日 2 次)
// 来源:「橘鸦AI早报」官方 RSS https://daily.juya.uk/rss.xml(每日整篇早报拆成逐条);仅保留最近 2 天
// 字段说明:date=新闻日期(UTC);title=标题;brief=简要;url=详情链接;source=来源;type=新闻类型(早报正文分类)
window.NEWS = {
  'updated': '2026-11-07',
  'retentionDays': 2,
  'types': [
    '要闻',
    '开发生态',
    '模型发布',
    '产品应用'
  ],
  'items': [
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
    },
    {
      'date': '2026-11-07',
      'title': 'TRAE 账号将升级为豆包飞书账号，数据权益保留',
      'brief': 'TRAE 宣布，自 2026 年 11 月 18 日 起，将中国大陆个人用户的 TRAE CN 版账号自动升级为 豆包飞书 账号，企业客户不在此次升级范围内。',
      'url': 'https://docs.trae.cn/ide_important-notice-for-trae-account-upgrade-and-integration',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-11-07',
      'title': 'OpenDesign 推出 DeepSeek V4.1 Flash Eco，每月提供 220 美元额度',
      'brief': 'OpenDesign 推出 DeepSeek V4.1 Flash Eco ，适用于批量、非实时工作。',
      'url': 'https://x.com/OpenDesignDevs/status/2118659067728044361',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-11-06',
      'title': 'Google 发布 Gemini Omni 1.2 Flash',
      'brief': 'Google 推出 Gemini Omni 1.2 Flash 视频生成模型。模型原生生成和编辑视频的时长从上一代最长 10 秒 提升至 15 秒 ，用户可按秒设置时长，并通过多轮对话调整同一片段的背景、光线或画面比例。',
      'url': 'https://blog.google/innovation-and-ai/technology/developers-tools/introducing-gemini-omni-1-2-flash/',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-11-06',
      'title': 'OpenAI 发布 GPT-6 Cyber 网络安全模型',
      'brief': 'OpenAI 发布网络安全模型 GPT-6 Cyber ，称其在关键网络安全基准上较上一代 GPT-5.6 Cyber 明显提升： ExploitGym 得分从 32.1% 升至 48.5% ；越界测试中，不使用部署安全提示时 99.93% 的测试守在任务范围内，加上提示后为 100% 。',
      'url': 'https://openai.com/index/introducing-gpt-6-cyber',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-11-06',
      'title': '蚂蚁百灵推出模型 Ling-3.2-flash',
      'brief': '蚂蚁集团 百灵团队 推出原生多模态模型 Ling-3.2-flash ，总参数量为 560B ，激活参数量为 25B ，支持 1M token 上下文及文本、图像和视频输入。',
      'url': 'https://x.com/AntLingAGI/status/2118428246664761379',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-11-06',
      'title': 'Thinking Machines 发布 Inkling 2 Small：得 31 分，拟下周开放权重',
      'brief': 'Thinking Machines 发布第二代模型 Inkling 2 Small ，在 Artificial Analysis Intelligence Index v5.0.1 上得分 31 ，较前代 Inkling Small 的 13 分提高 18 分。',
      'url': 'https://x.com/thinkymachines/status/2118489527362912566',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-11-06',
      'title': '百度开放 ERNIE-5.5-Flash-Base 权重',
      'brief': '百度文心团队 发布 ERNIE-5.5-Flash-Base ，并开放预训练终点权重。该模型是总参数 280B 、每 token 激活 14B 的稀疏 MoE 语言模型，在 33.5T tokens 上从零完成预训练，训练上下文最长 128K ，微调与推理支持 1M tokens 上下文。',
      'url': 'https://ernie.baidu.com/zh/release/ernie-5-5-flash-base',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-11-06',
      'title': '中国科大开源 RNA 基础模型，成果登上《自然》',
      'brief': '中国科学技术大学 宣布，该校医学影像智能与机器人（ MIRACLE ）实验室 周少华 教授、 熊鹏 特任研究员团队发布开源 RNA 序列基础模型 structRFM ，相关成果发表于《自然》。',
      'url': 'https://doi.org/10.5281/zenodo.16754363',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-11-06',
      'title': '混元 Hy4 调用激增，WorkBuddy 十倍扩容',
      'brief': '腾讯 混元 Hy4 在 WorkBuddy 首发接入后，凭借 Agent 能力的显著提升，获得大量用户与开发者的积极体验和热情反馈，上线首日即在任务队列中出现大量用户触及额度的情况。',
      'url': 'https://mp.weixin.qq.com/s/7THoAz6jRFNt3qmIqTnjug?scene=1&amp;click_id=1483109207',
      'source': '橘鸦AI早报',
      'type': '产品应用'
    },
    {
      'date': '2026-11-06',
      'title': 'Claude 推出个人理财功能测试版，美国逐步开放',
      'brief': 'Anthropic 推出 Claude 个人理财功能 Personal Finance ，以测试版从 本周起 向美国 Pro、Max 和 Ultra 订阅用户逐步开放。',
      'url': 'https://claude.com/resources/articles/introducing-personal-finance-in-claude',
      'source': '橘鸦AI早报',
      'type': '产品应用'
    },
    {
      'date': '2026-11-06',
      'title': 'Meta Muse 应用上线语音视频对话',
      'brief': 'Meta 在美国 Muse 应用中推出 Muse Realtime Avatar 技术，该技术此前在 Connect 大会上展示，能将 Muse Realtime Voice 转化为有表现力的实时化身，用户可以通过语音或视频与 Meta 面向消费者的 AI 智能体 Muse 对话。',
      'url': 'https://x.com/AIatMeta/status/2118412135340572850',
      'source': '橘鸦AI早报',
      'type': '产品应用'
    }
  ]
};
