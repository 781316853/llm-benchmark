// AI 热点新闻快照(由 scripts/lib/news.js 每日抓取维护,每日 2 次)
// 来源:「橘鸦AI早报」官方 RSS https://daily.juya.uk/rss.xml(每日整篇早报拆成逐条);仅保留最近 2 天
// 字段说明:date=新闻日期(UTC);title=标题;brief=简要;url=详情链接;source=来源;type=新闻类型(早报正文分类)
window.NEWS = {
  'updated': '2026-10-28',
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
      'date': '2026-10-28',
      'title': 'Google DeepMind 发布世界模型 Genie 4 研究预览，可实时改场景',
      'brief': 'Google DeepMind 发布新一代世界模型 Genie 4 ，它借助 Gemini Omni 让模拟贴近真实世界的外观和行为，并由其他 Gemini 模型保持模拟的连贯。用户可随时用文字提示改变天气、镜头或加入新的人物和物体，模型能模拟空气动力学、碰撞等物理效果，人物动作自然。',
      'url': 'https://deepmind.google/blog/genie-4-a-new-generation-of-world-simulation',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-10-28',
      'title': 'Cursor Design Mode 上线 Annotate 标注功能',
      'brief': 'Cursor 在 Design Mode 中推出 Annotate 功能，用户可在浏览器中点选元素、在页面上绘图，向 agent 提供视觉提示，并在不同屏幕尺寸下审阅设计。按 Cmd+Shift+D 即可开启。',
      'url': 'https://cursor.com/docs/agent/design-mode',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-10-28',
      'title': 'Google 开始向 Antigravity IDE 用户推送 Gemini 4 Argon',
      'brief': 'Google Antigravity 团队成员 Rody Davis 表示， Google 正开始向 Antigravity IDE 用户逐步推送 Gemini 4 Argon ，用户可在接下来的 24 小时 内留意更新。',
      'url': 'https://gemini.google/desktop/',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-10-28',
      'title': '蚂蚁百灵开源 Ling-3.1-flash-1019 及基座模型',
      'brief': '蚂蚁百灵 开源了此前发布的 Ling-3.1-flash-1019 ，并开放用于进一步训练的 Ling-3.1-flash-base 基座模型。',
      'url': 'https://huggingface.co/inclusionAI/Ling-3.1-flash-1019',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-10-28',
      'title': '微软发布 MAI-Image-2.7-Preview 图片编辑模型',
      'brief': 'Microsoft AI 推出图片编辑模型 MAI-Image-2.7-Preview ，接替 8 月 发布的 MAI-Image-2.6 ，目前已在 MAI Playground 上线，仅支持图片编辑，据称文生图功能即将推出。',
      'url': 'https://microsoft.ai/news/mai-image-2-7-debut/',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-10-28',
      'title': 'Microsoft 通过 MDASH 发布 MAI Cyber 1.1 Flash 安全模型',
      'brief': 'Microsoft 通过 MDASH 发布网络安全模型 MAI Cyber 1.1 Flash 。该公司称，在内部 MDASH 漏洞扫描评估集上，新模型与 MAI Cyber 1 Flash 性能相当，单次扫描成本降低 18% 。',
      'url': 'https://microsoft.ai/news/mai-cyber-1-1-flash',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-10-28',
      'title': '商汤开源 SenseNova 6.8 Code2Video 视频模型',
      'brief': '商汤 开源 SenseNova 6.8 Code2Video ，这是一款由代码驱动的视频创作模型，基于 Qwen3.8-27B 微调，支持 512K 上下文。',
      'url': 'https://github.com/OpenSenseNova/SenseNova-6.8-Code2Video',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-10-28',
      'title': '百度开源 Unlimited OCR 2，支持长文档解析',
      'brief': '百度 开源长文档解析模型 Unlimited OCR 2 ，模型权重已在 Hugging Face 公开。该模型采用 SR-SWA 机制，将文本与图像之间的注意力交互压缩为固定数量的工作参考，在有限上下文窗口内解析长文档。',
      'url': 'https://github.com/baidu/Unlimited-OCR',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-10-27',
      'title': 'OpenAI 发布 GPT-6.1 Terra，主打电脑操作',
      'brief': 'OpenAI 发布 GPT-6.1 Terra ，这是一款侧重视觉推理、精确电脑操作和自然写作的高效模型。即日起， ChatGPT Work 和 Codex 的所有 Plus、Pro、Enterprise 和 Edu 用户可以使用，开发者可通过 API 以 gpt-6.1-terra 调用，标准价格为每百万输入 token 1 美元 、输出 5 美元 ，比 GPT-5.6 Terra 低 50% 。',
      'url': 'https://openai.com/index/introducing-gpt-6-1-terra/',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-10-27',
      'title': 'Tibo：Codex 改进计划第 22 天，Terra 用量为 Sol 的 2 倍',
      'brief': '在 Codex 的 28 天 改进计划第 21 天 ， OpenAI 成员 Tibo 发帖称，当天的重置已生效。',
      'url': 'https://x.com/thsottiaux/status/2114588174249071102',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-10-27',
      'title': 'OpenAI 宣布三项科学发现，邀请学界审查',
      'brief': 'OpenAI 宣布，其模型在数学、计算机科学和物理学领域取得 三项 新发现，并邀请外部专家组织协作组审查和解释结果。',
      'url': 'https://openai.com/index/building-scientific-understanding-with-academic-communities/',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-10-27',
      'title': 'Anthropic 提交 S-1，拟在纳斯达克上市代码 ANT',
      'brief': 'Anthropic, PBC 宣布向美国证券交易委员会（SEC）提交 S-1 注册声明，拟首次公开发行 A 类普通股，并已申请在纳斯达克全球精选市场上市，股票代码 ANT ，发行股数和价格区间尚未确定。',
      'url': 'https://anthropic.com/news/s1-sec',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-10-27',
      'title': 'ZCode 晚间活动每夜提供 3 亿免费 token',
      'brief': 'ZCode 宣布，每天向每名用户提供 3 亿 免费的 GLM-5.3-Flash token。',
      'url': 'https://x.com/zcode_ai/status/2114762939421139426',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-10-27',
      'title': 'Vercel CLI 可搜索 Connect 目录中 1000 多项服务',
      'brief': 'Vercel Developers 宣布，用户及其 agent 现可通过 CLI 发现 Vercel Connect 目录中的 1000 多项服务。',
      'url': 'https://vercel.com/changelog/discover-1000-services-on-vercel-connect-from-the-cli',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-10-27',
      'title': '豆包电脑版推出签到领额度活动，周一翻倍',
      'brief': '豆包 推出“豆包天天领额度活动”，仅在 豆包电脑版 与 豆包工作电脑版 开展，两端的签到和日常任务进度打通，奖励不重复发放。',
      'url': 'https://doubao.com/pc/agent-explore',
      'source': '橘鸦AI早报',
      'type': '产品应用'
    },
    {
      'date': '2026-10-27',
      'title': 'Anthropic 发布 Claude for Nonprofits 插件，覆盖募款与招聘',
      'brief': 'Anthropic 发布 Claude for Nonprofits 插件，这是一组与约 30 家非营利组织共同打造的技能和连接器，可帮助团队结合自身背景与政策设置 Claude ，支持从调研到报告的募款工作，并分担运营事务。',
      'url': 'https://claude.com/resources/articles/expanding-claude-for-nonprofits',
      'source': '橘鸦AI早报',
      'type': '产品应用'
    },
    {
      'date': '2026-10-27',
      'title': 'OpenAI 汇总发布说明，支持搜索和订阅',
      'brief': 'Derrick Choi 表示， OpenAI 将 ChatGPT 、 Codex 和 API 的发布说明汇总到了一个页面。',
      'url': 'https://openai.com/products/release-notes',
      'source': '橘鸦AI早报',
      'type': '产品应用'
    },
    {
      'date': '2026-10-27',
      'title': 'OpenAI 发布 Signals 数据，展示近 100 国 ChatGPT 工作用途',
      'brief': 'OpenAI 经济研究部门发布 OpenAI Signals 数据，涵盖近 100 个国家的 165 项工作活动，按季度记录 2025 年第一季度至 2026 年第三季度 用户用 ChatGPT 处理工作的情况。研究人员可以比较不同国家的使用差异、追踪变化，并与其他经济指标对照。',
      'url': 'https://openai.com/index/chatgpt-expanding-world-of-work',
      'source': '橘鸦AI早报',
      'type': '技术与洞察'
    },
    {
      'date': '2026-10-27',
      'title': 'Artificial Analysis 推出 Code2Video-AA 视频评测',
      'brief': 'Artificial Analysis 与 HeyGen 合作推出 Code2Video-AA ，这是 HeyGen Code2Video Bench 的独立实现，用来评测模型把产品或品牌营销 Brief 写成视频的能力。',
      'url': 'https://artificialanalysis.ai/evaluations/code2video-aa',
      'source': '橘鸦AI早报',
      'type': '技术与洞察'
    }
  ]
};
