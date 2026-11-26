// AI 热点新闻快照(由 scripts/lib/news.js 每日抓取维护,每日 4 次)
// 来源:「橘鸦AI早报」官方 RSS https://daily.juya.uk/rss.xml(每日整篇早报拆成逐条);仅保留最近 2 天
// 字段说明:date=新闻日期(UTC);title=标题;brief=简要;url=详情链接;source=来源;type=新闻类型(早报正文分类)
window.NEWS = {
  'updated': '2026-11-26',
  'retentionDays': 2,
  'types': [
    '要闻',
    '开发生态',
    '模型发布',
    '技术与洞察',
    '产品应用'
  ],
  'items': [
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
    },
    {
      'date': '2026-11-25',
      'title': 'ChatGPT 合并 Chat 和 Work，部分用户率先体验',
      'brief': 'OpenAI 团队成员表示， ChatGPT 开始向一小部分 Pro 用户推出合并后的 Chat 和 Work 模式。',
      'url': 'https://x.com/thsottiaux/status/2125284868414394550',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-11-25',
      'title': 'OpenAI 员工宣布 Business 套餐 Fast mode 免费至年底',
      'brief': 'OpenAI 员工 Tibo 发帖称， ChatGPT Business 用户可获得一次 banked reset ，并可免费使用 Fast mode 至 12 月 31 日 。他的个人资料显示其在 OpenAI 从事 Codex 与 ChatGPT 相关工作。',
      'url': 'https://x.com/thsottiaux/status/2125299248782778588',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-11-25',
      'title': 'OpenAI 改进 Dots 审核，减少任务中的额外审批',
      'brief': 'OpenAI 改进了 Dots 的自动审核安全检查，减少执行任务时要求用户审批的次数。',
      'url': 'https://x.com/frits__vp/status/2125285321491259626',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-11-25',
      'title': 'Cognition 发布编码模型 SWE-2.1',
      'brief': 'Cognition 发布编码模型 SWE-2.1 ，称其基于 Kimi K3 用纯强化学习训练，在 FrontierCode 2.0 、 Terminal-Bench 4.1 等多项基准上较 SWE-2 大幅提升。新模型已在 Devin Cloud 、 Devin Desktop 和 Devin CLI 上线，未来两周对 Devin Pro 、 Max 和 Teams 免费。',
      'url': 'https://cognition.com/blog/swe-2-1',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-11-25',
      'title': '腾讯混元发布并开源第三代翻译模型 Hy MT3',
      'brief': '腾讯混元 发布并开源第三代翻译模型 Hy MT3 ，提供 1.8B 、 7B 、 30B-A3B 三个尺寸，支持语种从 38 种 增至 102 种 ，已上线 Hy 翻译 App 和小程序。',
      'url': 'https://huggingface.co/collections/tencent/hy-mt3',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    }
  ]
};
