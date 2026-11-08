// AI 热点新闻快照(由 scripts/lib/news.js 每日抓取维护,每日 2 次)
// 来源:「橘鸦AI早报」官方 RSS https://daily.juya.uk/rss.xml(每日整篇早报拆成逐条);仅保留最近 2 天
// 字段说明:date=新闻日期(UTC);title=标题;brief=简要;url=详情链接;source=来源;type=新闻类型(早报正文分类)
window.NEWS = {
  'updated': '2026-11-08',
  'retentionDays': 2,
  'types': [
    '开发生态',
    '模型发布'
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
    }
  ]
};
