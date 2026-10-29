// AI 热点新闻快照(由 scripts/lib/news.js 每日抓取维护,每日 2 次)
// 来源:「橘鸦AI早报」官方 RSS https://daily.juya.uk/rss.xml(每日整篇早报拆成逐条);仅保留最近 2 天
// 字段说明:date=新闻日期(UTC);title=标题;brief=简要;url=详情链接;source=来源;type=新闻类型(早报正文分类)
window.NEWS = {
  'updated': '2026-10-29',
  'retentionDays': 2,
  'types': [
    '要闻',
    '开发生态',
    '模型发布'
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
    }
  ]
};
