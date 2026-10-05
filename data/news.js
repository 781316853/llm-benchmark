// AI 热点新闻快照(由 scripts/lib/news.js 每日抓取维护,每日 2 次)
// 来源:「橘鸦AI早报」官方 RSS https://daily.juya.uk/rss.xml(每日整篇早报拆成逐条);仅保留最近 2 天
// 字段说明:date=新闻日期(UTC);title=标题;brief=简要;url=详情链接;source=来源;type=新闻类型(早报正文分类)
window.NEWS = {
  'updated': '2026-10-05',
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
      'date': '2026-10-05',
      'title': 'Tibo 称 Codex 团队承诺 28 天每日改进或全额重置',
      'brief': 'OpenAI Codex 负责人 Tibo 表示，未来 28 天 内，团队每天要么上线一项对多数 Codex 和 Work 用户有实际价值的明显改进，要么完整重置一次用量额度。',
      'url': 'https://x.com/thsottiaux/status/2106845241357824205',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-10-05',
      'title': '崔添翼：一切皆插件是 DeepSeek Harness 初心',
      'brief': 'DeepSeek Harness 近日发布 v0.2.1-alpha.1 预发布版本，新增实验性 Claude Code Mods 兼容层。官方在发布说明中写明，该阶段主要目的是验证 Claude Code Mods API 的功能大致为 DeepSeek Harness 插件能力的一个子集，而非为用户提供实际的完整兼容性。',
      'url': 'https://www.zhihu.com/question/2089740005770008568/answer/2090104616759325588',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-10-05',
      'title': '马斯克回应确认SpaceXAI将更名为SpaceXSI',
      'brief': '马斯克 在 X 平台回复网友关于 SpaceXAI 是否会更名为 SpaceXSI 的提问时，明确表示会的，我们会做出改变，并随后发帖称 SpaceX 是一家超级智能公司。',
      'url': 'https://x.com/elonmusk/status/2106665679361618173',
      'source': '橘鸦AI早报',
      'type': '行业动态'
    },
    {
      'date': '2026-10-05',
      'title': '据报道 Reflection 将发首个开放权重模型',
      'brief': '据 Axios 报道，获 Nvidia 8 亿美元 投资的 AI 初创公司 Reflection 正准备近期发布首个开放权重模型，公司拒绝置评，发布时间与性能尚未公布。',
      'url': 'https://www.axios.com/2026/10/04/reflection-open-weight-ai',
      'source': '橘鸦AI早报',
      'type': '前瞻与传闻'
    },
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
    }
  ]
};
