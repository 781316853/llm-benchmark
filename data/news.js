// AI 热点新闻快照(由 scripts/lib/news.js 每日抓取维护,每日 4 次)
// 来源:「橘鸦AI早报」官方 RSS https://daily.juya.uk/rss.xml(每日整篇早报拆成逐条);仅保留最近 2 天
// 字段说明:date=新闻日期(UTC);title=标题;brief=简要;url=详情链接;source=来源;type=新闻类型(早报正文分类)
window.NEWS = {
  'updated': '2026-11-24',
  'retentionDays': 2,
  'types': [
    '要闻',
    '模型发布',
    '技术与洞察',
    '前瞻与传闻',
    '行业动态'
  ],
  'items': [
    {
      'date': '2026-11-23',
      'title': 'OpenAI 公开内部指标 Perplexity，提议设共同开发限制',
      'brief': 'OpenAI 首席科学家 Jakub Pachocki 发文《Perplexity and Intelligence》，首次公开 OpenAI 过去五年的内部预训练评测指标 Perplexity ，并提议行业建立统一发展限制标准。',
      'url': 'https://openai.com/index/perplexity-and-intelligence',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-11-23',
      'title': '蚂蚁集团开源医疗模型 LingSante 3.1 Flash 与 air-VL',
      'brief': '蚂蚁集团 百灵大模型发布两款医疗模型 LingSante-3.1-flash 和 LingSante-3.1-air-VL 。',
      'url': 'https://huggingface.co/inclusionAI/LingSante-3.1-flash',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-11-23',
      'title': '马斯克披露 Tesla Reality View 技术细节',
      'brief': '马斯克 回复 FSD v15 体验帖，披露了 Tesla Reality View 技术细节。他称特斯拉自去年已有接近像素级的 world model ，车端部署的大幅缩小版是基于 Tesla Universal Vision Encoder 特征的 conditional mean-flow model 。',
      'url': 'https://x.com/elonmusk/status/2124458557525397780',
      'source': '橘鸦AI早报',
      'type': '技术与洞察'
    },
    {
      'date': '2026-11-23',
      'title': 'Elon Musk 预警 AI 行业明年严重资金短缺',
      'brief': 'Elon Musk 在 X 上回复 Keras 创始人 François Chollet 时表示，让如此规模的算力设备通电、冷却并稳定运行极其困难。',
      'url': 'https://x.com/elonmusk/status/2124271725927903388',
      'source': '橘鸦AI早报',
      'type': '行业动态'
    },
    {
      'date': '2026-11-23',
      'title': 'OpenRouter 终止 3 家供应商合作，移除 125 个端点的 ZDR 资格',
      'brief': 'OpenRouter 发布公告称，安全研究人员发现其平台上部分推理供应商存在数据处理问题，公司调查未发现自身遭入侵或数据泄露。该公司已终止与 3 家供应商的合作，将 125 个端点移出 Zero Data Retention（ZDR） 资格，并通知可能受影响的客户； ZDR 要求供应商不存储提示词和响应。',
      'url': 'https://openrouter.ai/blog/announcements/data-processing-incidents-on-inference-providers/',
      'source': '橘鸦AI早报',
      'type': '行业动态'
    },
    {
      'date': '2026-11-23',
      'title': '甲骨文称与 OpenAI 基础设施合同已获全额资金支持',
      'brief': '甲骨文表示，随着本月初完成一轮 200 亿美元 融资，其与 OpenAI 的基础设施合同已获得全部所需资金。',
      'url': 'https://www.oracle.com/news/announcement/oracle-statement-2026-11-20/',
      'source': '橘鸦AI早报',
      'type': '行业动态'
    },
    {
      'date': '2026-11-23',
      'title': 'OpenAI 团队：ChatGPT/Codex 桌面应用又将迎来重大更新',
      'brief': 'OpenAI 负责 ChatGPT 与 Codex 的团队成员 Tibo 发帖称， ChatGPT 与 Codex 桌面应用团队已在准备又一次重大更新，并询问用户更新后还有哪些不足。',
      'url': 'https://x.com/thsottiaux/status/2124322968499282388',
      'source': '橘鸦AI早报',
      'type': '前瞻与传闻'
    }
  ]
};
