// AI 热点新闻快照(由 scripts/lib/news.js 每日抓取维护,每日 4 次)
// 来源:「橘鸦AI早报」官方 RSS https://daily.juya.uk/rss.xml(每日整篇早报拆成逐条);仅保留最近 2 天
// 字段说明:date=新闻日期(UTC);title=标题;brief=简要;url=详情链接;source=来源;type=新闻类型(早报正文分类)
window.NEWS = {
  'updated': '2026-11-19',
  'retentionDays': 2,
  'types': [
    '要闻',
    '开发生态',
    '模型发布',
    '产品应用'
  ],
  'items': [
    {
      'date': '2026-11-19',
      'title': 'Google 发布 Gemini 4 Neon',
      'brief': 'Google 发布新模型 Gemini 4 Neon ，定位于 Gemini 4 Carbon 与 Hydrogen 之间，面向复杂软件工程、知识工作和科学工作流。模型支持四档思维水平调节，具备 100 万 token 上下文窗口，可处理表格、PDF、图表与音视频。',
      'url': 'https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-neon/',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-11-19',
      'title': '谷歌新版 Project Genie 开放 Genie 4',
      'brief': 'Google 宣布推出新版 Project Genie 体验，向已推出 Google AI Ultra 地区的年满 18 周岁 订阅者开放最新世界模型 Genie 4 ，Google AI Pro 会员可加入等候名单。 Genie 4 支持在探索过程中输入提示词实时修改天气、新增角色或改变剧情，并首次搭配适配场景的环境音效与角色对话。',
      'url': 'https://deepmind.google/blog/genie-4-is-now-available',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-11-19',
      'title': 'DeepSeek：模型触发的搜索和抓取不再单独计费',
      'brief': 'DeepSeek API 文档显示，自北京时间 2026 年 11 月 18 日 12:00 起，模型调用触发的服务端搜索和网页抓取不再单独计费，只按模型 token 用量收费，联网工具、 Responses API 与 Anthropic API 的 web_search 等服务端工具均会触发。',
      'url': 'https://api-docs.deepseek.com/zh-cn/guides/search/',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-11-19',
      'title': 'Antigravity Pro 免费试用仅剩 3.8 Flash',
      'brief': '社区用户发现， Google 更新 Antigravity 文档，按订阅档位划分模型权限。',
      'url': 'https://antigravity.google/docs/models',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-11-19',
      'title': 'OpenCode：10 美元购 500 美元 GLM 5.3',
      'brief': 'OpenCode 宣布，本周结束前可获得价值 500 美元 的 GLM 5.3 使用额度。这项优惠面向 OpenCode Go 订阅用户，Go 方案每月收费 10 美元 。活动最初推出时， 10 美元 对应 100 美元 额度，随后提升至 200 美元 ，再到目前的限时 500 美元 。',
      'url': 'https://x.com/opencode/status/2122969474571583885',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-11-19',
      'title': 'Perplexity 推出 Context API',
      'brief': 'Perplexity 推出 Context API ，单次调用最多读取 10 个 URL，为每个页面返回清理后的 Markdown 、 HTML 、链接和基于查询的片段。',
      'url': 'https://www.perplexity.ai/hub/blog/context-api-extracts-full-context-from-any-web-page',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-11-19',
      'title': 'ChatGPT 语音实时转文字，移除 10 分钟录音上限',
      'brief': 'OpenAI 宣布， ChatGPT 的 Dictation 功能变得更快、更可靠，并推出 Live Dictation ：说话时语音实时转成文字，减少等待转写的时间，用户可点按波形显示或隐藏文字。',
      'url': 'https://help.openai.com/en/articles/6825453-chatgpt-release-notes',
      'source': '橘鸦AI早报',
      'type': '产品应用'
    },
    {
      'date': '2026-11-19',
      'title': 'ChatGPT 推出会计插件 协助结账和对账',
      'brief': 'OpenAI 宣布 ChatGPT for Accounting 现已可用，新的 Accounting 插件和合作方插件帮助用户以更少手工操作完成结账，任务覆盖月末报告、银行对账和数据录入等。',
      'url': 'https://openai.com/business/solutions/accounting',
      'source': '橘鸦AI早报',
      'type': '产品应用'
    },
    {
      'date': '2026-11-19',
      'title': 'Artificial Analysis 推理力度可筛选',
      'brief': 'AI 分析网站 Artificial Analysis 宣布正努力在其网站展示更多推理力度。',
      'url': 'https://x.com/ArtificialAnlys/status/2123121873555013816',
      'source': '橘鸦AI早报',
      'type': '产品应用'
    },
    {
      'date': '2026-11-19',
      'title': 'Gemini app 支持低内存 Android 设备',
      'brief': 'Google 宣布 Gemini app 现已支持低内存 Android 设备，包括符合条件的 Android (Go edition) 手机。该公司重构了应用，让核心体验在低内存硬件上流畅运行，使全球 数亿 更多人能用上其个人 AI 助手。',
      'url': 'https://blog.google/innovation-and-ai/products/gemini-app/gemini-lower-memory-devices/',
      'source': '橘鸦AI早报',
      'type': '产品应用'
    },
    {
      'date': '2026-11-19',
      'title': 'Google 推出 Stitch Loop 持续改进产品',
      'brief': 'Google Labs 推出 Stitch Loop ，这是设计工具 Stitch 的新实验，定位为长期运行的产品 agent ，连接 GitHub 代码库和实时指标，持续改进已上线的软件。',
      'url': 'https://blog.google/innovation-and-ai/models-and-research/google-labs/stitch-loop/?ref=testingcatalog.com',
      'source': '橘鸦AI早报',
      'type': '产品应用'
    },
    {
      'date': '2026-11-19',
      'title': '腾讯混元开放 Hy4 flash 权重',
      'brief': '腾讯混元 宣布开源 Hy4 flash 系列模型，包含 Hy4 flash 、 Hy4 flash-FP8 和 Hy4 flash-Base ，开发者可在 GitHub 、 Hugging Face 、 ModelScope 和 GitCode 下载部署。',
      'url': 'https://mp.weixin.qq.com/s/yaFPaQL6MNVz01GD2sIlRw',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-11-18',
      'title': 'OpenAI 发布 GPT-6.2 Astra 与 Sol，分别面向复杂任务和日常工作',
      'brief': 'OpenAI 发布 GPT-6.2 Astra 和 Sol 。',
      'url': 'https://openai.com/index/introducing-gpt-6-2-astra-sol/',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-11-18',
      'title': '微软在 Ignite 上公布七款新模型',
      'brief': '微软在 Ignite 大会发布七款 MAI 新模型，主打低价高性能。',
      'url': 'https://microsoft.ai/news/microsoft-ignite-2026-mai-keynote/',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-11-18',
      'title': 'Gemini Tasks 在美日韩加澳印六国免费开放',
      'brief': 'Google 宣布， Gemini 的 Tasks 功能在 美国、日本、韩国、加拿大、澳大利亚和印度 向数亿符合条件用户免费开放，免费用户都能用新模型 Gemini 4 Hydrogen 运行任务。',
      'url': 'https://blog.google/innovation-and-ai/products/gemini-app/tasks-in-gemini-free-new-features/',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-11-18',
      'title': '可灵 AI 发布 Kling Image 4.0',
      'brief': '可灵 AI 发布图像创作模型 Kling Image 4.0 ，同时向企业客户和开发者开放 API 。',
      'url': 'https://mp.weixin.qq.com/s/p3_DIBRUUgmxShjD5Wp27w',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-11-18',
      'title': '商汤正式开源 SenseNova-Loop-9B',
      'brief': '商汤 正式开源多模态模型 SenseNova-Loop-9B ，权重和代码以 Apache 2.0 许可在 Hugging Face 和 GitHub 开放，首日提供官方 AWQ 4-bit 量化版。',
      'url': 'https://github.com/OpenSenseNova/SenseNova-Loop',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-11-18',
      'title': 'Google AI Studio 更新 Android 应用开发功能',
      'brief': 'Google AI Studio 更新 Android 应用开发功能，支持通过 Firebase 为应用添加跨设备数据同步、用户登录和 Gemini 调用。',
      'url': 'https://x.com/GoogleAIStudio/status/2122752241887068565',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    }
  ]
};
