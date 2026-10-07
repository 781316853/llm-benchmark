// AI 热点新闻快照(由 scripts/lib/news.js 每日抓取维护,每日 2 次)
// 来源:「橘鸦AI早报」官方 RSS https://daily.juya.uk/rss.xml(每日整篇早报拆成逐条);仅保留最近 2 天
// 字段说明:date=新闻日期(UTC);title=标题;brief=简要;url=详情链接;source=来源;type=新闻类型(早报正文分类)
window.NEWS = {
  'updated': '2026-10-07',
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
      'date': '2026-10-07',
      'title': 'Mistral Large 4 上线，月底开放权重',
      'brief': 'Mistral AI 发布 Mistral Large 4 公开预览版，昵称 Le Chonk ，即日起通过 API 向所有用户开放，开源权重计划本月底放出， Hugging Face 页面显示预计 10 月 31 日 上线。',
      'url': 'https://mistral.ai/news/mistral-large-4/',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-10-07',
      'title': 'Google 发布 Nano Banana 2.1，图像生成与编辑全面升级',
      'brief': 'Google 发布图像生成与对话式编辑模型 Nano Banana 2.1 ，模型代码 gemini-nano-banana-2.1 ，已在 Gemini API 正式可用，并陆续推送到 Gemini 应用、搜索 AI Mode 、 Google AI Studio 、 Flow 等产品。该模型是 Nano Banana 2 的升级版，官方称在视觉质量、提示词遵循、多轮角色一致性和文本渲染上显著改进，输出覆盖 1K 、 2K 、 4K…',
      'url': 'https://deepmind.google/models/gemini-image/flash/',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-10-07',
      'title': '谷歌开源 EmbeddingGemma 2 多模态嵌入模型',
      'brief': '谷歌 DeepMind 发布开源嵌入模型 EmbeddingGemma 2 ，将上一代的纯文本能力扩展为原生多模态，把文本、代码、图像、视频和音频统一映射到 768 维向量空间 。',
      'url': 'https://blog.google/innovation-and-ai/technology/developers-tools/embeddinggemma-2/',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-10-07',
      'title': 'OpenAI 公开内部前沿模型的一批数学研究成果',
      'brief': 'OpenAI 发布一批由内部前沿模型产出的新数学成果， 722 份手稿按 372 个成果族整理后公开在 GitHub 仓库，并附论文修订与引用协议。',
      'url': 'https://openai.com/index/sharing-ai-progress-in-mathematics/',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-10-07',
      'title': 'OpenAI 免费开放 Auto-review，不占订阅额度',
      'brief': 'OpenAI 负责 Codex 与 ChatGPT 的 Tibo 宣布， Auto-review 现在对所有通过 ChatGPT 账号登录的用户免费开放，且不消耗订阅方案的用量，可在设置 → 权限 → auto-review 中开启。',
      'url': 'https://x.com/thsottiaux/status/2107368734981517634',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-10-07',
      'title': 'OpenAI 向所有开发者开放 Decisions API 公测',
      'brief': 'OpenAI 宣布 Decisions API 进入公开测试，向所有开发者开放，用于让应用在近实时条件下选择合适的模型、工具或动作。该接口由 GPT-6 Luna 驱动，接受文本和图像输入，支持三类输出： Predicates 估算陈述为真的概率， Choices 从预定义选项中选择并给出置信度， Scores 按数值区间评估输入。',
      'url': 'https://x.com/OpenAIDevs/status/2107573382229188645',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-10-07',
      'title': 'OpenAI 将 API 付费层级从五档精简为三档',
      'brief': 'OpenAI 宣布降低获取更高 API 速率限制的门槛，五个付费用量层级合并为 Build、Launch 和 Grow 三档。新的最高层级 Grow 只需累计 500 美元 API 付款即可获得资格，此前最高层级的要求是 1000 美元 。已在付费层级上的组织会自动迁移到对应的新层级，无需手动操作。各层级的资格条件与速率限制详情发布在 OpenAI 平台的组织限制设置页。',
      'url': 'https://x.com/OpenAIDevs/status/2107539647392096384',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-10-07',
      'title': 'Space Bunny 免费期将结束，OpenCode 赞助再免费几天',
      'brief': 'Space Bunny 模型的免费期即将结束。开源编程 Agent OpenCode 在 X 上宣布，将在自家免费档位中赞助 Space Bunny ，让它再免费提供几天。 OpenCode 同时透露，这款模型正在调优，正式亮相之前还会继续调整。',
      'url': 'https://x.com/opencode/status/2107398361733104102',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-10-07',
      'title': 'Anthropic扩展CVP：三档开放高级网络能力',
      'brief': 'Anthropic 发布扩展版 Cyber Verification Program （ CVP ），把此前并行运行的 Project Glasswing 与 CVP 整合为一个项目，向通过审核的安全从业者分三档开放，各档均可用 Claude Opus 5.5 、 Claude Sonnet 5.5 、 Claude Mythos 5.1 及后续新模型。',
      'url': 'https://www.anthropic.com/news/cyber-verification-program',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-10-07',
      'title': '复旦腾讯浙大开源 Prism，原生 2K 音视频联合生成',
      'brief': '复旦大学 、 腾讯混元 与 浙江大学 团队开源了 Prism ，一个用于原生 2K 音视频联合生成的动态稀疏注意力框架，技术报告、训练与推理代码和预览权重同步放出，许可证为 MIT 。',
      'url': 'https://francis-rings.github.io/Prism',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-10-07',
      'title': '亚马逊 AGI 团队开源发布 ALoDLM-8B',
      'brief': '亚马逊 AGI 团队发布扩散语言模型 ALoDLM ，在 Hugging Face 公开 ALoDLM-1.7B 与 ALoDLM-8B 权重，并在 GitHub 开源训练与推理代码。',
      'url': 'https://alo-dlm.github.io/',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-10-07',
      'title': 'Perplexity 发布决策模型 pplx-decider 新版本',
      'brief': 'Perplexity 宣布，更新的开放权重多模态决策模型 pplx-decider-v1.1-27b 现已可用，官方称其在新版 Hugging Face Decision Index 0.3 基准上得分最高，Decision API 定价降为 v1 的一半，每百万输入 token 收 0.02 美元 。',
      'url': 'https://x.com/AravSrinivas/status/2107573198145663233',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
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
    }
  ]
};
