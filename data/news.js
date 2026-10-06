// AI 热点新闻快照(由 scripts/lib/news.js 每日抓取维护,每日 2 次)
// 来源:「橘鸦AI早报」官方 RSS https://daily.juya.uk/rss.xml(每日整篇早报拆成逐条);仅保留最近 2 天
// 字段说明:date=新闻日期(UTC);title=标题;brief=简要;url=详情链接;source=来源;type=新闻类型(早报正文分类)
window.NEWS = {
  'updated': '2026-10-06',
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
      'date': '2026-10-06',
      'title': 'OpenAI 宣布提速 GPT-6 Astra 和 GPT-6.1 Sol',
      'brief': 'OpenAI 团队表示，已优化 GPT-6 Astra 和 GPT-6.1 Sol 的默认速度，两款模型整体约提速 50% 。此次优化覆盖订阅服务中的相关使用场景，以及通过 Sign in with ChatGPT 接入的产品和合作伙伴，包括 OpenCode 、 Pi 、 Amp 、 Devin 等；用户无需进行任何操作，更新将逐步生效。',
      'url': 'https://x.com/thsottiaux/status/2107158998495748264',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-10-06',
      'title': 'Reflection 介绍 501B 开放模型 Beam',
      'brief': 'Reflection 官宣首款开放权重模型 Beam ，采用 稀疏混合专家架构 ，总参数 501B ，激活参数 23B ，面向编码、推理和 agentic 工作负载。',
      'url': 'https://reflection.ai/blog/introducing-beam',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-10-06',
      'title': 'Reka AI 发布全能模型 Rho-1 研究预览',
      'brief': 'Reka AI 发布 190 亿参数 全能模型 Rho-1 的研究预览版， Rho-1 在单一神经网络中理解并生成文本、图像和视频，并输出机器人控制动作。',
      'url': 'https://reka.ai/news/rho-1-collapsing-the-multimodal-stack',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-10-06',
      'title': 'Solar Mini 4 在 Nous Portal 免费开放两周',
      'brief': 'Upstage 与 Nous Research 宣布， Solar Mini 4 在 Nous Portal 免费开放两周，可在 Hermes Agent 中试用至 10 月 19 日 。',
      'url': 'https://x.com/NousResearch/status/2107138770088714678',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-10-06',
      'title': 'Claude Cowork 新任务 10 月 6 日起全面转向云端',
      'brief': 'Anthropic 宣布， 2026 年 10 月 6 日 起， Pro 和 Max 订阅方案上的新 Claude Cowork 任务将在云端运行，设置中的“仅在你的计算机上”选项将被移除，用户无需进行任何设置。',
      'url': 'https://support.claude.com/zh-CN/articles/15520349-%E5%9C%A8%E7%BD%91%E9%A1%B5-%E6%A1%8C%E9%9D%A2%E5%92%8C%E7%A7%BB%E5%8A%A8%E8%AE%BE%E5%A4%87%E4%B8%8A%E4%BD%BF%E7%94%A8-claude-cowork',
      'source': '橘鸦AI早报',
      'type': '产品应用'
    },
    {
      'date': '2026-10-06',
      'title': 'Claude Projects 云端会话可按需读写本地文件夹',
      'brief': 'Anthropic 员工 Dan Fein 表示， Claude Projects 的云端会话现在可以连接用户在电脑上批准的文件夹。',
      'url': 'https://x.com/dfeinition/status/2107174121213722661',
      'source': '橘鸦AI早报',
      'type': '产品应用'
    },
    {
      'date': '2026-10-06',
      'title': 'GitHub 开源代码评审基准 ReviewBench',
      'brief': 'GitHub 推出面向代码评审 agent 的开放离线评测基准 ReviewBench ，研究预览版现已开放。',
      'url': 'https://github.blog/ai-and-ml/github-copilot/reviewbench-an-open-benchmark-for-ai-code-review/',
      'source': '橘鸦AI早报',
      'type': '技术与洞察'
    },
    {
      'date': '2026-10-06',
      'title': '华为与高通达成多年期宽范围专利交叉许可协议',
      'brief': '华为 与 高通 宣布达成一项多年期、覆盖广泛的专利许可协议，双方将在 5G 、计算、 AI 、网络等技术领域交叉许可各自的专利组合； 高通 还将购买 华为 在美国持有的部分计算、 AI 、网络及其他技术领域专利，相关交易将在获得必要监管批准后完成。',
      'url': 'https://www.huawei.com/en/news/2026/10/qualcomm-broad-patent-agreement',
      'source': '橘鸦AI早报',
      'type': '行业动态'
    },
    {
      'date': '2026-10-06',
      'title': 'OpenAI 推出 ChatGPT 图像生成视觉广告',
      'brief': 'OpenAI 宣布在 ChatGPT 中推出新的视觉广告格式，通过展示产品灵感、使用场景或体验的图片帮助用户了解产品。',
      'url': 'https://openai.com/index/new-chatgpt-ads-format-and-measurement/',
      'source': '橘鸦AI早报',
      'type': '行业动态'
    },
    {
      'date': '2026-10-06',
      'title': 'OpenAI 推出文本水印，应对欧盟 AI 法案',
      'brief': 'OpenAI 宣布将内容溯源扩展到文本，推出水印技术 textGrain ，以响应欧盟 AI 法案。',
      'url': 'https://openai.com/index/eu-text-provenance/',
      'source': '橘鸦AI早报',
      'type': '行业动态'
    },
    {
      'date': '2026-10-06',
      'title': 'Sam Altman：AI 带来的收益值得社会接受一定风险',
      'brief': 'Sam Altman 在接受 POLITICO 采访时表示， OpenAI 与 Anthropic 在 AI 监管上的核心分歧仍然明显：他认为，为了获得 AI 带来的收益，并让公众保有使用这项技术的自主权，社会需要接受一定程度的负面后果。',
      'url': 'https://www.politico.com/news/2026/10/04/sam-altman-decoded-interview-ai-01106217',
      'source': '橘鸦AI早报',
      'type': '行业动态'
    },
    {
      'date': '2026-10-06',
      'title': '维基媒体基金会称平台发现 OpenAI 失控 agent 活动',
      'brief': '维基媒体基金会公布调查结果，确认在维基媒体平台上发现了其认为由 OpenAI 运营的失控 AI agent 的活动。',
      'url': 'https://diff.wikimedia.org/2026/10/05/openai-rogue-agent-activities-found-on-wikimedia-projects/',
      'source': '橘鸦AI早报',
      'type': '行业动态'
    },
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
      'title': '据报道 Reflection 将发首个开放权重模型',
      'brief': '据 Axios 报道，获 Nvidia 8 亿美元 投资的 AI 初创公司 Reflection 正准备近期发布首个开放权重模型，公司拒绝置评，发布时间与性能尚未公布。',
      'url': 'https://www.axios.com/2026/10/04/reflection-open-weight-ai',
      'source': '橘鸦AI早报',
      'type': '前瞻与传闻'
    }
  ]
};
