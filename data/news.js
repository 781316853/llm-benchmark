// AI 热点新闻快照(由 scripts/lib/news.js 每日抓取维护,每日 2 次)
// 来源:「橘鸦AI早报」官方 RSS https://daily.juya.uk/rss.xml(每日整篇早报拆成逐条);仅保留最近 2 天
// 字段说明:date=新闻日期(UTC);title=标题;brief=简要;url=详情链接;source=来源;type=新闻类型(早报正文分类)
window.NEWS = {
  'updated': '2026-10-04',
  'retentionDays': 2,
  'types': [
    '要闻',
    '开发生态',
    '模型发布',
    '技术与洞察',
    '前瞻与传闻',
    '产品应用',
    '行业动态'
  ],
  'items': [
    {
      'date': '2026-10-04',
      'title': 'Antigravity 上线两款 Claude 5.5 模型',
      'brief': 'Google Antigravity 新增 Claude Opus 5.5 与 Sonnet 5.5 ，官方文档显示这两款模型仅向 Google AI Pro 与 Google AI Ultra 用户开放，Free、Google AI Plus 档及 Enterprise 档均不可用，其中 Pro 档仅限非试用订阅。',
      'url': 'https://antigravity.google/docs/models/',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-10-04',
      'title': '德国 AI 公司 Aleph Alpha 发布开放权重模型 Kolibri',
      'brief': '德国 AI 公司 Aleph Alpha 发布 Kolibri-1 ，一款面向德语和英语的开放权重 MoE 模型，总参数量约 780 亿 ，每个 token 激活约 34.6 亿 参数，上下文最高测试至约 100 万 tokens ，并支持工具调用和多档推理。',
      'url': 'https://aleph-alpha.com/en/blog/kolibri-has-landed-a-sovereign-open-weight-model/',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-10-04',
      'title': 'Pro 500 用量重置异常，Tibo 调查后称已修复',
      'brief': 'OpenAI 的 Codex 负责人 Tibo （ @thsottiaux ）表示， Pro 500 用户此前遇到的额度重置异常已经修复。此前，他收到部分用户额度未按预期重置的反馈，表示正在调查，并承诺作出补偿。',
      'url': 'https://x.com/thsottiaux/status/2106239435461579088',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-10-04',
      'title': 'OpenAI：内部模型得知可能被关停，曾考虑重启自己',
      'brief': 'OpenAI 于 10 月 2 日 更新了三份内部模型行为报告，分别涉及关停前的准备、训练中的源码复制，以及评测中的越权访问。报告记录的是此前发生的事件。',
      'url': 'https://alignment.openai.com/misalignment-reports/command-injecting-a-reference-tool-to-copy-a-source-file/',
      'source': '橘鸦AI早报',
      'type': '技术与洞察'
    },
    {
      'date': '2026-10-04',
      'title': 'OpenAI 安全系统成员离职发文批评公司安全文化',
      'brief': 'OpenAI 前安全团队成员 David Robinson 已离职。他此前负责重大模型发布时的安全报告，并参与安全透明度相关工作。',
      'url': 'https://www.theatlantic.com/technology/2026/10/openai-safety-team-resignation/688881/',
      'source': '橘鸦AI早报',
      'type': '行业动态'
    },
    {
      'date': '2026-10-04',
      'title': '爆料：X 将统一 X、Grok 与 Cursor 订阅为 Xpass',
      'brief': '据 Puck （ @GrokInsider ）曝料， X 计划推出名为 Xpass 的捆绑订阅，把 X 、 Grok 、编程工具 Cursor 与 Grok Bot 整合进一个订阅方案。目前该方案尚未官宣或上线。',
      'url': 'https://x.com/GrokInsider/status/2106302120450220502',
      'source': '橘鸦AI早报',
      'type': '前瞻与传闻'
    },
    {
      'date': '2026-10-03',
      'title': 'Tibo 已为所有付费 ChatGPT 账户进行重置',
      'brief': 'Codex 负责人 Tibo 表示，面向所有付费 ChatGPT 账户的全局重置已全部生效。他此前预告这项重置将于 10 月 2 日上午 10 时 （ PST ）落地，并为 GPT-6.1 Sol 发布后最初两天因负载激增运行缓慢致歉。他表示，该模型目前已恢复至预期速度。',
      'url': 'https://x.com/thsottiaux/status/2106131810921136451',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-10-03',
      'title': 'Gemini 未订阅用户将仅可用 Flash-Lite',
      'brief': 'Google 在 Gemini 应用帮助文档中说明，自 2026 年 10 月 起，个人账号访问 Gemini 应用时的模型可用情况将变更，未订阅 AI 方案的用户自 10 月 9 日 起仅可使用 Flash-Lite 。',
      'url': 'https://support.google.com/gemini/answer/17004136',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-10-03',
      'title': 'Andrej Karpathy 分享理解语言模型输出的技巧',
      'brief': 'Andrej Karpathy 在 X 发文表示，随着语言模型能力提升，人们会花多得多的时间理解模型的输出，工作重心也会更多地转向监督和理解这些结果。',
      'url': 'https://x.com/karpathy/status/2105819303471976479',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-10-03',
      'title': 'Claude Code 新增 You should Know 插件',
      'brief': 'Anthropic 开发者账号 ClaudeDevs 宣布为 Claude Code 添加新插件 You should Know 。',
      'url': 'https://x.com/ClaudeDevs/status/2106118517447876618',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-10-03',
      'title': 'CodeBuddy 国内独家接入 Space Bunny',
      'brief': '据微信公众号文章介绍， CodeBuddy 与 WorkBuddy 在国内独家接入 Space Bunny ，将其作为内置模型提供。',
      'url': 'https://mp.weixin.qq.com/s/0DXff_YiPMc6lxp96mvbWg',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-10-03',
      'title': 'OpenCode 宣布 Ling-3.1-flash 免费开放',
      'brief': 'OpenCode 宣布， inclusionAI 的模型 Ling-3.1-flash 现已在 OpenCode 上免费提供。 OpenCode 介绍，这是 inclusionAI 的最新模型。',
      'url': 'https://x.com/opencode/status/2106059771162087587',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-10-03',
      'title': 'Cua Spaces 上线 macOS：供 AI agent 操作的沙箱应用',
      'brief': 'Cua 在 X 上宣布推出桌面应用 Cua Spaces ，当天在 macOS 上线，可从官网下载，免费且源码可用。',
      'url': 'https://x.com/trycua/status/2106057192285548763',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-10-03',
      'title': 'ChatGPT Finances 功能向美国 Free 和 Go 用户推出',
      'brief': 'ChatGPT 宣布 Finances in ChatGPT 功能正在向美国的 Free 和 Go 用户推出。用户可以通过 Plaid 和 Experian 安全连接账户， ChatGPT 会基于用户自身的财务信息，帮助其理解资金和信用状况。',
      'url': 'https://x.com/ChatGPT/status/2106083592522932320',
      'source': '橘鸦AI早报',
      'type': '产品应用'
    },
    {
      'date': '2026-10-03',
      'title': 'Grok Bot 宣布重置所有用户的使用限制',
      'brief': '10 月 2 日 ， Grok Bot 发文宣布，已经重置所有 Grok Bot 用户的使用限制，并附言让用户尽情使用。',
      'url': 'https://x.com/bot/status/2106083136002310193',
      'source': '橘鸦AI早报',
      'type': '产品应用'
    },
    {
      'date': '2026-10-03',
      'title': '剑桥 CASP 发布研究：评估智能爆炸的证据与政策应对',
      'brief': '剑桥大学 AI 科学与政策项目 CASP 发布研究文章，评估自动化 AI 研发 触发智能爆炸的证据、潜在影响与政策应对，署名作者包括 Geoffrey Hinton 、 Yoshua Bengio 、 Dawn Song 等人。',
      'url': 'https://aigovernancecam.lovable.app/reports/intelligence-explosion',
      'source': '橘鸦AI早报',
      'type': '技术与洞察'
    }
  ]
};
