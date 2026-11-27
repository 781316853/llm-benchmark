// AI 热点新闻快照(由 scripts/lib/news.js 每日抓取维护,每日 4 次)
// 来源:「橘鸦AI早报」官方 RSS https://daily.juya.uk/rss.xml(每日整篇早报拆成逐条);仅保留最近 2 天
// 字段说明:date=新闻日期(UTC);title=标题;brief=简要;url=详情链接;source=来源;type=新闻类型(早报正文分类)
window.NEWS = {
  'updated': '2026-11-27',
  'retentionDays': 2,
  'types': [
    '要闻',
    '开发生态',
    '模型发布',
    '技术与洞察',
    '前瞻与传闻',
    '产品应用'
  ],
  'items': [
    {
      'date': '2026-11-27',
      'title': 'Antigravity 为所有用户重置 Gemini 额度',
      'brief': 'Antigravity 开发者 Varun Mohan 于北京时间 11 月 26 日 15:19 发文表示，为庆祝感恩节，Antigravity 面向所有用户重置了 Gemini 额度。',
      'url': 'https://x.com/_mohansolo/status/2125851902009311306',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-11-27',
      'title': 'OpenAI 修复 GPT-6.2 计费错误，补偿已上线',
      'brief': 'OpenAI 员工 Tibo 发文称， GPT-6.2 上线时出现计费错误，导致多数用户使用 GPT-6.2 Astra 和 Sol 时的额度消耗被错误折减，这一问题现已修复。',
      'url': 'https://x.com/thsottiaux/status/2125784147889393806',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-11-27',
      'title': '腾讯混元开源草稿模型 DFly2',
      'brief': '腾讯混元团队 开源了用于加速大模型生成的草稿模型 DFly2 ，同步公开权重、训练代码和技术报告，并推出适配 Hy4 flash 、 DeepSeek-V4.1-Flash 及 GLM-5.3-Flash 的 MoE 草稿模型。',
      'url': 'https://mp.weixin.qq.com/s/d1HMHrSEChCJiBRZ0tNOyg',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-11-27',
      'title': '蚂蚁百灵开源 Ming-Image-0.2-Design，并预告图层分解版',
      'brief': '蚂蚁集团 百灵团队开源图像生成模型 Ming-Image-0.2-Design ，权重以 MIT 协议托管于 ModelScope 等平台。该模型强化了复杂构图、光影与文字渲染表现，可用于电商主图、UI 设计稿与空间效果图，并在 Artificial Analysis 的 AA-Image-T2I v2.1 评测中以 1095 Elo 位列开放权重模型第一。',
      'url': 'https://modelscope.cn/models/inclusionAI/Ming-Image-0.2-Design',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-11-27',
      'title': 'Antigravity banked resets 开发中，被曝现身 CLI',
      'brief': '有用户发现， Antigravity CLI 从 v1.5.17 升级至 v1.5.18 后，已出现 banked resets 功能，包含到期时间和领取所需的使用量门槛。该发现来自 zAI 制作的 Antigravity CLI 更新追踪截图，其中显示当用户的使用量超过规定门槛后，即可领取带有到期时间的储存重置额度。',
      'url': 'https://x.com/_mohansolo/status/2124962746844565692',
      'source': '橘鸦AI早报',
      'type': '前瞻与传闻'
    },
    {
      'date': '2026-11-27',
      'title': '报道称智谱 GLM-5.5 进度受阻，智谱否认',
      'brief': '据路透社援引知情人士报道， 智谱 原计划本月发布约 3 万亿参数 的下一代旗舰模型 GLM-5.5 ，但部分受 OpenAI 与 Anthropic 反蒸馏措施以及美国新算力限制影响，开发进度受阻，原定年底前完成的训练和发布或推迟至 2027 年第一季度 及以后。',
      'url': 'https://www.reuters.com/world/china/us-chip-curbs-distillation-crackdown-threaten-chinese-ai-model-development-2026-11-26/',
      'source': '橘鸦AI早报',
      'type': '前瞻与传闻'
    },
    {
      'date': '2026-11-27',
      'title': '据报道，NVIDIA要求Dell等伙伴暂停向东南亚四国发运服务器',
      'brief': '美国商务部 AI 芯片出口新规已于 11 月 19 日 生效：向印尼、马来西亚、新加坡、泰国和巴西出口先进 AI 芯片 须申请许可，海外 数据中心 向中国等地企业远程提供大量算力也须报批，存量 数据中心 须在 90 天 内取得许可。',
      'url': 'https://www.wsj.com/tech/nvidia-tells-partners-to-pause-shipments-to-southeast-asia-5b791cb0',
      'source': '橘鸦AI早报',
      'type': '前瞻与传闻'
    },
    {
      'date': '2026-11-26',
      'title': 'Antigravity 称再度提升 Neon 缓存命中率，额度内任务增 28%',
      'brief': 'Antigravity 团队的 Varun Mohan 在 X 发文称，Antigravity 中 Gemini 4 Neon 的缓存命中率再次提升 4.5% ，这意味着用户在额度内可完成的任务增加 28% 。他还表示，过去 5 天 通过缓存和运行框架改进，订阅中 Neon 的有效使用量累计提升近 75% 。他补充称，本轮改进主要来自增加缓存容量、减少长期缓存淘汰和优化路由，其余部分来自一些修复难度大得多的长尾问题。',
      'url': 'https://x.com/_mohansolo/status/2125641696377712968',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-11-26',
      'title': 'OpenAI 邮件称部分 Codex 请求少扣额度已修正，用户或更快达限额',
      'brief': '多名用户在社区发帖称，收到了 OpenAI 发来的邮件：此前部分 Codex 请求少扣了使用额度，这一错误已经修正，按原有用法可能更快达到使用限额。',
      'url': 'https://linux.do/t/topic/3239841',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-11-26',
      'title': 'Sand.ai发布MAGI-2视频模型，独家上线Higgsfield',
      'brief': 'Sand.ai 推出 AI视频生成模型``MAGI-2 ，已在 Higgsfield 平台及`API`独家上线，全球可用。它能根据文本提示和最多**20 个参考（ 10 张图像、 5 个视频、 5 段音频）生成最长 30 秒的 1080p**、 25 fps 带声视频，价格为每秒 0.08美元 。',
      'url': 'https://higgsfield.ai/announcing-magi-2',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-11-26',
      'title': 'NVIDIA 开放 Nemotron-Labs-Image-30B-A3B',
      'brief': 'NVIDIA 在 Hugging Face 开放自回归生图模型 Nemotron-Labs-Image-30B-A3B 的权重，它是 Nemotron-Labs-VisualCreation 框架的图像生成组件，采用 混合专家架构 ，总参数 300 亿 、激活 30 亿 。',
      'url': 'https://huggingface.co/nvidia/Nemotron-Labs-Image-30B-A3B',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-11-26',
      'title': 'PrismML 发布并开源 5.9 GB 三值模型 Bonsai 2.5 27B',
      'brief': 'PrismML 发布并开源三值模型 Ternary Bonsai 2.5 27B ，为上一代 Ternary Bonsai 2 27B 的升级版，基于 Qwen3.8 27B ，体积保持 5.9 GB ，约为其全精度原模型的九分之一。',
      'url': 'https://prismml.com/news/bonsai-2-5-27b',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-11-26',
      'title': 'Antigravity 工程师宣布开发 banked reset 功能',
      'brief': 'Antigravity 团队工程师 Eliza Huang 在 X 发文称，她此前发布的 hello world 帖子浏览量超过 5 万 ，让她没想到的是，粉丝数也借此突破 1000 。',
      'url': 'https://x.com/eliza_huang/status/2125509510630678798',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-11-26',
      'title': 'OpenCode 推出 Gimme Kimi：10 美元得 60 美元额度',
      'brief': 'OpenCode 宣布推出 Gimme Kimi 第一阶段（ Phase 1 ）优惠活动。',
      'url': 'https://x.com/opencode/status/2125413495629926551',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-11-26',
      'title': 'Charlie Marsh 称 ChatGPT 桌面应用基础内存降超 40%',
      'brief': 'OpenAI 员工 Charlie Marsh 在 X 上表示，过去两周，ChatGPT 桌面应用的基础内存使用量降低了超过 40% ，各版本均在 macOS 上运行五分钟后测量。',
      'url': 'https://x.com/charliermarsh/status/2125675768231727399',
      'source': '橘鸦AI早报',
      'type': '产品应用'
    },
    {
      'date': '2026-11-26',
      'title': 'Google Gemini Live Guided Vision 登陆 iOS',
      'brief': 'Google 宣布， Gemini Live 中的 Guided Vision 功能现已登陆 iOS。该功能与盲人及低视力社区共同开发，可提供对话式的实时视觉辅助。',
      'url': 'https://x.com/GeminiApp/status/2125685936344236471',
      'source': '橘鸦AI早报',
      'type': '产品应用'
    },
    {
      'date': '2026-11-26',
      'title': '阿里千问 Go 全面开放免费代打电话服务，支持订餐厅、找快递、寻失物',
      'brief': '阿里旗下 AI 智能体 千问 Go 全面开放免费代打电话服务。用户告知拨打对象和通话需求，经授权后，千问即可联系餐厅预订包间、向酒店询问遗失物品、联系快递员查询配送进度等，也可以定时代打电话，提前设置拨打时间和沟通事项。',
      'url': 'https://mp.weixin.qq.com/s/jZumD5cprhI7bgmOI7mUEw',
      'source': '橘鸦AI早报',
      'type': '产品应用'
    },
    {
      'date': '2026-11-26',
      'title': 'Anthropic CEO 驳斥向 AI 让渡人类治理权',
      'brief': '针对 Axios 关于“ Anthropic 内部有声音支持人类向超级智能 AI 让渡部分决策权”的报道， Anthropic CEO Dario Amodei 在 X 发长文公开驳斥，称自己绝不认同放弃人类自由意志，强调 AI 必须受到合法民主程序的治理。',
      'url': 'https://www.axios.com/2026/11/25/anthropic-ai-human-control-debate-free-will',
      'source': '橘鸦AI早报',
      'type': '技术与洞察'
    },
    {
      'date': '2026-11-26',
      'title': 'Anthropic 发文介绍其将 Messages API 从 Python 迁移到 Rust',
      'brief': 'Anthropic 介绍将 Claude Messages API 从 Python 迁移到 Rust 。该 API 是客户以及 Claude Code 等 Anthropic 自家应用访问 Claude 的主要通道， 2024 年初 至 2026 年秋 流量增长约 1800 倍 。',
      'url': 'https://anthropic.com/research/migrating-api-to-rust',
      'source': '橘鸦AI早报',
      'type': '技术与洞察'
    }
  ]
};
