// AI 热点新闻快照(由 scripts/lib/news.js 每日抓取维护,每日 2 次)
// 来源:「橘鸦AI早报」官方 RSS https://daily.juya.uk/rss.xml(每日整篇早报拆成逐条);仅保留最近 2 天
// 字段说明:date=新闻日期(UTC);title=标题;brief=简要;url=详情链接;source=来源;type=新闻类型(早报正文分类)
window.NEWS = {
  'updated': '2026-10-19',
  'retentionDays': 2,
  'types': [
    '要闻',
    '开发生态',
    '技术与洞察',
    '前瞻与传闻',
    '产品应用'
  ],
  'items': [
    {
      'date': '2026-10-19',
      'title': 'Anthropic 设公益基金，先投 5% 股份',
      'brief': 'Anthropic 宣布设立全资的 Anthropic Public Benefit Fund ，作为随公司成长而扩大持股的公益实体。基金初始投入公司 5% 的股份，须经股东批准；此后公司估值每较设定基准增长 50% ，董事会可酌情追加 2% ，据 Reuters 报道该基准尚未披露。',
      'url': 'https://www.anthropic.com/news/public-benefit-fund',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-10-19',
      'title': '开源模型背后的训练算力：Wolf 估算累计已近 10 亿美元',
      'brief': 'Hugging Face 联合创始人 Thomas Wolf 公布了一份粗略估算： Meta 、 NVIDIA 、 阿里巴巴 、 DeepSeek 、 Moonshot 、 Mistral 等约 35 家机构在 Hugging Face Hub 上开源了模型，训练这些模型消耗的算力按当前 GPU 租用价格折算，累计价值接近 10 亿美元 ，而这些模型全部免费下载； 2023 年底 这一数字还不到 4000 万美元 。',
      'url': 'https://x.com/Thom_Wolf/status/2111828314851598745',
      'source': '橘鸦AI早报',
      'type': '技术与洞察'
    },
    {
      'date': '2026-10-19',
      'title': 'OpenAI 据称出现 3 个新模型 ID',
      'brief': '多位 X 用户发现， OpenAI API 中短暂出现 aurora-red-alpha 、 aurora-green-alpha 和 aurora-blue-alpha 这 3 个新模型ID。 TestingCatalog 称，这些模型引用随后已从 API 中移除。',
      'url': 'https://x.com/testingcatalog/status/2111724606927028578',
      'source': '橘鸦AI早报',
      'type': '前瞻与传闻'
    },
    {
      'date': '2026-10-19',
      'title': '报道称 Anthropic 正与律所商讨 AI 谈判规范',
      'brief': '据《金融时报》报道， Anthropic 正与律所等法律机构磋商，为代表用户砍价、处理纠纷或协商薪酬的 AI Agent 研究谈判规范。消息人士称，该公司希望了解律师如何在代表客户利益的同时兼顾公平结果。',
      'url': 'https://the-decoder.com/anthropic-consults-law-firms-to-set-fair-negotiation-norms-before-ai-agents-start-cutting-deals/',
      'source': '橘鸦AI早报',
      'type': '前瞻与传闻'
    },
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
    }
  ]
};
