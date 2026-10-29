// AI 热点新闻快照(由 scripts/lib/news.js 每日抓取维护,每日 2 次)
// 来源:「橘鸦AI早报」官方 RSS https://daily.juya.uk/rss.xml(每日整篇早报拆成逐条);仅保留最近 2 天
// 字段说明:date=新闻日期(UTC);title=标题;brief=简要;url=详情链接;source=来源;type=新闻类型(早报正文分类)
window.NEWS = {
  'updated': '2026-10-29',
  'retentionDays': 2,
  'types': [
    '要闻',
    '开发生态',
    '模型发布',
    '产品应用'
  ],
  'items': [
    {
      'date': '2026-10-29',
      'title': 'Google 推出 Gemini 4 Carbon，先向部分用户开放',
      'brief': 'Google 发布新一代前沿模型 Gemini 4 Carbon ，称其为目前最强的模型，在网络安全和长时程任务上达到业界最高水平，距 Gemini 4 Argon 发布仅 两周 。',
      'url': 'https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-carbon/',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-10-29',
      'title': 'OpenAI 向 ChatGPT Pro 和 Business 订阅用户发放 API 额度',
      'brief': 'OpenAI Developers 宣布，符合条件的 ChatGPT Pro 和 Business 订阅用户即日起可领取每月最高 500 美元 的 API 额度，用于开发应用和 agent 。',
      'url': 'https://x.com/OpenAIDevs/status/2115583698074755078',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-10-29',
      'title': 'OpenAI 员工：ChatGPT 的 Chat 与 Work 整合今年推出',
      'brief': 'OpenAI Codex 与 ChatGPT 团队的 Tibo 在 X 上表示，团队正在筹备整合 ChatGPT 中 Chat 与 Work 的能力，但目前尚未推出，并为造成的误解致歉。',
      'url': 'https://x.com/thsottiaux/status/2115588390414581916',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-10-29',
      'title': 'Tibo：28 天计划第 23 天为重置，已完成',
      'brief': 'OpenAI 的 Codex 团队成员 Tibo 于昨日表示， 28 天 更新计划第 23 天 的内容是一次重置，该重置已于昨日下午完成。',
      'url': 'https://x.com/thsottiaux/status/2115330127886463244',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-10-29',
      'title': 'Google 将 AI Mode 广告扩展到 10 国',
      'brief': 'Google 宣布， AI Mode 中的广告扩展到澳大利亚、加拿大、印度、Kenya、马来西亚、新西兰、Nigeria、巴基斯坦、菲律宾和新加坡。同时， Google 在美国推出 multi-turn ads ，让用户在 AI Mode 中继续追问时，也能展示广告。 Google 计划在 2026 年第四季度 扩展到巴西、墨西哥和英国等更多地区，广告将明确标注“Sponsored”。 Google 商务负责人 Philipp Schi…',
      'url': 'https://blog.google/products/ads-commerce/ads-in-ai-mode-global/',
      'source': '橘鸦AI早报',
      'type': '产品应用'
    },
    {
      'date': '2026-10-29',
      'title': 'Gemini Notebook 的 Live Chat 向所有移动端用户开放',
      'brief': 'Gemini Notebook 宣布， Live Chat 功能此前已向移动端 Ultra 用户 100% 推出，现在已向所有移动端用户开放。该功能支持用户与自己的 notebook 进行实时语音对话，覆盖约 100 种语言。',
      'url': 'https://x.com/Gemini_Notebook/status/2115582082340860324',
      'source': '橘鸦AI早报',
      'type': '产品应用'
    },
    {
      'date': '2026-10-29',
      'title': 'Gemini 应用推出沉浸式探索功能',
      'brief': 'Google 在 Gemini 应用中推出沉浸式探索功能，提供一个交互式、可视化的内容库，让用户逐层探索话题，主题包括丝绸之路贸易路线、喷气发动机内部和闪电物理等。',
      'url': 'https://blog.google/innovation-and-ai/products/gemini-app/immersive-explorations-student-hub/',
      'source': '橘鸦AI早报',
      'type': '产品应用'
    },
    {
      'date': '2026-10-29',
      'title': 'Chrome 增强自动填充可从 Gmail 提取信息',
      'brief': 'Google 宣布， Chrome 的增强自动填充功能开始支持从 Gmail 中提取信息，并在用户填写网页表单时给出建议。该功能由带 Personal Intelligence 的 Gemini 驱动，可提供订单号、追踪信息和航班预订号等内容。',
      'url': 'https://blog.google/products-and-platforms/products/chrome/enhanced-autofill-gmail/',
      'source': '橘鸦AI早报',
      'type': '产品应用'
    },
    {
      'date': '2026-10-29',
      'title': 'Google 与 XREAL 推出 Android XR 眼镜 AURA',
      'brief': 'Google 与 XREAL 宣布正式推出 XREAL AURA ， Google 称这是首款搭载 Android XR 的有线 XR 眼镜。',
      'url': 'https://blog.google/products-and-platforms/platforms/android/xreal-aura/',
      'source': '橘鸦AI早报',
      'type': '产品应用'
    },
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
    }
  ]
};
