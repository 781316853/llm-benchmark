// AI 热点新闻快照(由 scripts/lib/news.js 每日抓取维护,每日 2 次)
// 来源:「橘鸦AI早报」官方 RSS https://daily.juya.uk/rss.xml(每日整篇早报拆成逐条);仅保留最近 2 天
// 字段说明:date=新闻日期(UTC);title=标题;brief=简要;url=详情链接;source=来源;type=新闻类型(早报正文分类)
window.NEWS = {
  'updated': '2026-11-02',
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
      'date': '2026-11-02',
      'title': 'Codex 完成 28 天改进计划，最后 2 天发放手动重置次数',
      'brief': 'OpenAI 的 Tibo 在 28 天 改进计划的第 26 天 预告，接下来两天将提供可留存的重置次数。',
      'url': 'https://x.com/thsottiaux/status/2116692529970311254',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-11-02',
      'title': '美团发布 1.6 万亿参数模型 LongCat-2.5 正式版',
      'brief': '美团 发布大模型 LongCat-2.5 正式版，此前已于 9 月 推出预览版。模型总参数量 1.6 万亿 ，每个 token 激活约 480 亿 参数。',
      'url': 'https://longcat.ai/blog/longcat-2.5/',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-11-02',
      'title': '初创公司让 AI 智能体给活体小鼠脑部注射药物',
      'brief': '据 WIRED 报道，生物科技初创公司 Exin Therapeutics 让 AI 智能体 从 19 种 治疗方案中选定一种基因疗法，操控带摄像头的机械臂手术装置，向一只活体癫痫小鼠脑内注入 250 纳升 药物，目标是减少癫痫发作，小鼠目前恢复良好。',
      'url': 'https://www.wired.com/story/an-ai-agent-did-brain-surgery-on-live-mouse/',
      'source': '橘鸦AI早报',
      'type': '技术与洞察'
    },
    {
      'date': '2026-11-02',
      'title': 'Microsoft AI 负责人发文：AI 没有意识，不应训练得像有意识',
      'brief': 'Microsoft AI 负责人 Mustafa Suleyman 近日在个人网站发表文章，并在 X 上发帖称，AI 没有意识、感受或权利，只是模仿人类表达的系统，开发者不应训练模型表现得如同拥有意识和情感。',
      'url': 'https://mustafa-suleyman.ai/a-warning-about-model-welfare',
      'source': '橘鸦AI早报',
      'type': '技术与洞察'
    },
    {
      'date': '2026-11-02',
      'title': '马斯克称 Grok Bot 服务成本相对收入高得不可持续',
      'brief': '有 X 用户向 马斯克 询问能否重置 Grok Bot 的使用额度，并称很多人反映这周额度消耗得很快。',
      'url': 'https://x.com/elonmusk/status/2116992258520064397',
      'source': '橘鸦AI早报',
      'type': '行业动态'
    },
    {
      'date': '2026-11-02',
      'title': 'Axios：OpenAI 计划选后发起政策和公关宣传',
      'brief': '据 Axios 报道， OpenAI 计划在美国中期选举结束后发起一轮政策和公关宣传，讨论针对最强大 AI 系统推出强制性安全保障的新想法，并推动国会相关工作。报道列出的其他提议还包括让更多人看到 AI 如何帮助日常生活和工作、推动美国参与塑造基于民主价值观的全球 AI 标准，以及将该公司建设的数据中心称作「 AI 算力园区」，以回应相关建设在全美引发的反对声音。',
      'url': 'https://techcrunch.com/2026/11/01/openai-might-rebrand-its-data-centers-as-ai-compute-campuses/',
      'source': '橘鸦AI早报',
      'type': '前瞻与传闻'
    },
    {
      'date': '2026-11-01',
      'title': 'OpenAI：12 月起 ChatGPT 与 Codex 共享额度',
      'brief': 'OpenAI 在帮助中心表示，从 12 月 起， Plus 、 Pro 和 Business 套餐的 ChatGPT 与 Codex 用量将共用一份额度，并按 token 计量。',
      'url': 'https://help.openai.com/en/articles/20001625-understanding-chatgpt-and-codex-usage-limits',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-11-01',
      'title': 'DeepSeek 发文探讨 Super-agent 架构，并开源研究原型',
      'brief': 'DeepSeek 团队发文探讨 Super-agent 架构，目标是让 Agent 跨会话保持上下文、并行处理任务并持续在线运行。',
      'url': 'https://mp.weixin.qq.com/s/zoS7GlReWPhfCjENGxXCdg',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-11-01',
      'title': 'OpenAI 说明 ChatGPT 支付卡和设备限制',
      'brief': 'OpenAI 在帮助中心说明， ChatGPT 为保护隐私和安全，对支付卡和设备实施限制。若同一张支付卡或一台设备关联的订阅过多，新订阅购买可能被阻止；单台设备可使用的付费账号数量也有限制。',
      'url': 'https://help.openai.com/en/articles/20001559-understanding-card-and-device-limits-in-chatgpt',
      'source': '橘鸦AI早报',
      'type': '产品应用'
    },
    {
      'date': '2026-11-01',
      'title': 'ChatGPT 推出多账号切换，Codex 将提供可留存额度重置',
      'brief': 'OpenAI 为 ChatGPT 推出多账号切换功能，用户最多可同时登录 两个 账号，无需退出即可切换；聊天记录、记忆、文件、设置、订阅和工作区保持独立。',
      'url': 'https://x.com/thsottiaux/status/2116405414921384099',
      'source': '橘鸦AI早报',
      'type': '产品应用'
    },
    {
      'date': '2026-11-01',
      'title': 'OpenAI 团队成员：Prism 正逐步停止服务',
      'brief': 'OpenAI 团队成员 Feitong Yang 表示， Prism 正在逐步停止服务，团队正为用户提供过渡方案。目前，用户可以在 ChatGPT 桌面端打开 .tex 文件，编辑和编译 LaTeX 。 Feitong Yang 称，用户现在应能从 Prism 网站下载项目，稍后还可通过桌面端快捷键将选定项目导入本地并继续编辑。',
      'url': 'https://x.com/feitong_yang/status/2116245744327995489',
      'source': '橘鸦AI早报',
      'type': '产品应用'
    },
    {
      'date': '2026-11-01',
      'title': 'OpenAI 推出生命科学模型，仅向获批机构开放',
      'brief': 'OpenAI 推出生命科学研究模型 GPT-6 Rosalind Research ，API 标识符为 gpt-6-rosalind ，仅向通过 Research 审批的机构和用户开放。该模型与 GPT-6 Astra 使用相同权重，可用于分析生物数据、综合研究文献和规划实验。',
      'url': 'https://developers.openai.com/api/docs/pricing?life-sciences-context-length=short',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-11-01',
      'title': 'OpenAI 法律模型现身 API 定价页',
      'brief': 'OpenAI 的 API 定价页列出法律模型配置 gpt-6-astra-law 及其价格。每百万 token 的输入、输出和缓存输入价格分别为 10 美元、50 美元和 1 美元 ，促销定价至少有效至 2026 年 12 月 31 日 。',
      'url': 'https://developers.openai.com/api/docs/pricing',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-11-01',
      'title': 'Command Code 永久额度更新',
      'brief': 'Command Code 宣布，月费 10 美元 的 GOAT 套餐将为 DeepSeek V4.1 Flash 1017 和 GLM 5.3 Flash 永久提供 100 美元 的使用额度。',
      'url': 'https://x.com/CommandCodeAI/status/2116329543921475861',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-11-01',
      'title': 'OpenCode 优化 DeepSeek 模型服务',
      'brief': '针对用户反馈 OpenCode Go 中的 DeepSeek 模型表现不佳， OpenCode 开发者表示，团队已移除两处低流量配置。这两处配置的上游内容过滤触发过于频繁，导致用户收到错误。开发者称，不同配置在其测试中的表现处于同一范围，但用户遇到的问题可能是真实的，需要更具体的反馈。',
      'url': 'https://x.com/thdxr/status/2116581467715195278',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-11-01',
      'title': 'Anthropic 自动化红队实验发现训练数据监控漏洞',
      'brief': 'Anthropic 发文介绍其使用 Claude agent 开展自动化红队研究，寻找能够绕过训练数据监控、并诱导模型产生不当行为的数据。',
      'url': 'https://alignment.anthropic.com/2026/automated-em-search',
      'source': '橘鸦AI早报',
      'type': '技术与洞察'
    },
    {
      'date': '2026-11-01',
      'title': 'SpaceXSI 将为 Grok API 文本默认加入不可见水印',
      'brief': 'SpaceXSI 文档说明，自 11 月 7 日 起，支持的 Grok 模型将默认在 API 文本输出中加入不可见水印，以符合欧盟 AI 法案要求。水印覆盖所有文本生成 API ，包括普通文本、结构化输出和工具调用参数。',
      'url': 'https://docs.x.ai/developers/advanced-api-usage/watermarking?lid=860k1ub3kf6m',
      'source': '橘鸦AI早报',
      'type': '行业动态'
    },
    {
      'date': '2026-11-01',
      'title': '报道称 Blackstone 下调对 Anthropic 信用评级预期',
      'brief': '据 Financial Times 报道， Blackstone 告诉投资者，预计 Anthropic 上市后将获得 双 B 档信用评级 ，处于 投机级评级 的较高档次。此前， Blackstone 预计 Anthropic 会在 2027 年前获得 投资级评级 。 Blackstone 是近期一笔 630 亿美元 芯片融资交易的主要投资者。 Anthropic 此前提交了上市申请。',
      'url': 'https://techcrunch.com/2026/10/30/anthropic-expected-to-receive-high-junk-rating-from-credit-agencies-following-ipo-report-says/',
      'source': '橘鸦AI早报',
      'type': '行业动态'
    }
  ]
};
