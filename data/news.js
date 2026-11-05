// AI 热点新闻快照(由 scripts/lib/news.js 每日抓取维护,每日 2 次)
// 来源:「橘鸦AI早报」官方 RSS https://daily.juya.uk/rss.xml(每日整篇早报拆成逐条);仅保留最近 2 天
// 字段说明:date=新闻日期(UTC);title=标题;brief=简要;url=详情链接;source=来源;type=新闻类型(早报正文分类)
window.NEWS = {
  'updated': '2026-11-05',
  'retentionDays': 2,
  'types': [
    '要闻',
    '开发生态',
    '模型发布',
    '产品应用',
    '行业动态'
  ],
  'items': [
    {
      'date': '2026-11-05',
      'title': 'OpenAI 发布 Images 2.6：支持动画 GIF 生成，提速 50%',
      'brief': 'OpenAI 发布图像模型 Images 2.6 ，在 ChatGPT 、 Codex 和 API 端同步上线。新模型能把文字提示或上传的照片变成动画 GIF ，生成后可调整播放速度、逐帧编辑，还能把自己、宠物或角色的图片存为参考图反复使用，无需重复上传。',
      'url': 'https://openai.com/index/introducing-images-2-6/',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-11-05',
      'title': '腾讯混元 Hy4 正式版发布',
      'brief': '腾讯混元发布最新一代大语言模型 Hy4 正式版，官方称 Hy 首次跻身最强开源模型之列。相比 Hy4 preview （总参数 770B 、激活参数 49B 、上下文 1M ）， Hy4 首次引入视觉能力和电脑操作，能结合命令行与图形界面完成专业任务。',
      'url': 'https://hy.tencent.com/research/hy4',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-11-05',
      'title': '报道称 OpenAI 高管 Tibo 接手内部安全项目',
      'brief': '据路透社报道，OpenAI 负责产品开发的高管 Thibault Sottiaux ，也就是 Tibo ，近期接手了一项保护公司内部系统的项目。一名知情人士称，他此前调配了四分之一的生产工程师改善安全基础设施。',
      'url': 'https://x.com/ajambrosino/status/2117793530076946814',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-11-05',
      'title': 'Cat Wu 宣布加入 OpenAI，负责 Core Products 产品管理',
      'brief': 'Cat Wu 在 X 平台发文宣布加入 OpenAI ，负责 Core Products 的产品管理工作。她表示将与 Tibo 、出色的产品管理团队以及 OpenAI 各团队共事，一起打造支持用户和团队、并保持用户控制的 agents ，让用户把更多时间留给自己热爱的人和事。',
      'url': 'https://x.com/TheRealAdamG/status/2118139840554254829',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-11-05',
      'title': 'Claude Code 调整游戏限制：提现有游戏不再被拒，复刻原作仍禁',
      'brief': 'Anthropic 工程师 Addy Osmani 宣布， Claude Code 2.1.317 版本调整了 Claude Opus 5.5 的游戏开发限制：用户现在可以直接提及某款现有游戏，让 Claude 参考其玩法机制开发同类型的原创游戏，不再因此被直接拒绝；如果明确要求复制原作，Claude 仍会拒绝复刻，转而建议开发一款具有类似体验的游戏。',
      'url': 'https://x.com/addyosmani/status/2117848568535106001',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-11-05',
      'title': 'Antigravity CLI 1.5.0 发布：agy acp 内置',
      'brief': 'Antigravity CLI 发布 1.5.0 版本，将 agy acp 内置进 CLI，它可作为一个 Agent Client Protocol（ACP） 服务器通过 stdio 运行。通过 SSH 连接或没有浏览器的终端，还能用 agy acp --login 完成 Google 登录。',
      'url': 'https://x.com/shengzheyao/status/2117899282733044063',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-11-05',
      'title': 'Google 上线 Gemini 3.8 Flash TTS Voice Remixing 功能',
      'brief': 'Google 宣布， Gemini 3.8 Flash TTS 的 Voice Remixing 功能在 Google AI Studio 和 Gemini API 上线。用户可从 2000 多种 预设声音或自定义设计的声音起步，用自然语言提示词微调音色、音高、语速和口音，官方示例包括加上一点美国南方口音。',
      'url': 'https://x.com/Google/status/2118027058794148099',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-11-05',
      'title': 'ChatGPT dots 更新：iOS 与 Windows 体验优化',
      'brief': 'OpenAI ChatGPT 团队成员 samir 宣布， dots 功能在最新版应用中迎来一批更新，他表示团队近期一直专注于让 dots 更快、更可靠。',
      'url': 'https://x.com/_samirism/status/2118103057980690771',
      'source': '橘鸦AI早报',
      'type': '产品应用'
    },
    {
      'date': '2026-11-05',
      'title': 'Claude 桌面版新增 Storage 面板',
      'brief': 'Anthropic 更新 Claude 桌面应用至 v3.1623.0 ，在设置中新增 Storage 面板，并支持 /storage 命令，可查看应用在本机占用的磁盘空间。',
      'url': 'https://x.com/lydiahallie/status/2118045439803195567',
      'source': '橘鸦AI早报',
      'type': '产品应用'
    },
    {
      'date': '2026-11-05',
      'title': 'Ricursive Intelligence 发布 65B 稠密模型 Ripple-65B Preview',
      'brief': 'Ricursive Intelligence 发布其首个模型 Ripple-65B Preview ，这是一个从零预训练 12 万亿 token 的 65B 稠密 LLM ，支持最长 100 万 token 上下文。',
      'url': 'https://ricursive.com/ripple',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-11-05',
      'title': 'Cognition 推出 SWE-2 Flash，称胜过所有美国开放权重模型',
      'brief': 'Cognition 推出全新编程模型 SWE-2 Flash ，称其在领先评测中的表现优于所有美国开放权重模型，甚至包括参数量大 3 倍 的模型。',
      'url': 'https://cognition.com/blog/swe-2-flash',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-11-05',
      'title': '字节跳动开源 Axion 1.0 Agent 模型',
      'brief': '字节跳动 发布开源 Agent 基础模型 Axion 1.0 ，同时公开论文、训练代码、训练数据和评测脚本，整体遵循 Apache 2.0 协议。该模型面向科学推理、信息搜寻和工具增强的问题求解，提供 35B 和 122B 两个 MoE 版本，分别激活 3B 和 10B 参数。',
      'url': 'https://axion1-0.github.io/',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-11-04',
      'title': 'Anthropic 开源 FlashProve，验证 AI 回复来自哪个模型',
      'brief': 'Anthropic 开源可验证推理系统 FlashProve ，目标是让用户确认 AI 回复是否由指定模型生成，同时不公开模型权重。系统分两步运行：提供方先为一组模型权重发布一个简短的加密标识，称为“承诺”，用来固定这组权重，但不公开权重本身。回复生成后，提供方再制作证明文件，证明被检查的输出符合这组权重对用户输入的计算结果。用户拿到标识、输入、回复和证明文件后，可以在自己的 CPU 上检查，无需拿到权重或重新运行整个模型。证明只说明计…',
      'url': 'https://anthropic.com/research/provable-inference',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-11-04',
      'title': 'ChatGPT Side Chats 不再过期，可长期保存',
      'brief': 'OpenAI Codex 团队成员 Brent Traut 宣布，ChatGPT 的 Side Chats 不再因重启或更新应用而过期消失。他称这是自己加入 OpenAI 时发现的 Side Chats 用户最大痛点之一，现已修复。',
      'url': 'https://x.com/btraut/status/2117696510146265089',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-11-04',
      'title': '隐身模型 Crouton Alpha 上线 OpenCode 和 OpenRouter，免费一周',
      'brief': '隐身模型 Crouton Alpha 上线 OpenCode 和 OpenRouter 两个平台。 OpenRouter 页面显示其上下文长度为 1.0M token ，输入输出价格均为每百万 token 0 美元 。 OpenCode 宣布该模型未来一周免费，支持多模态，数据不用于训练，仅限特定地区使用。有分析称，该模型的屏蔽国家列表、特定日文词汇报错和 effort 设置与 Meta 模型特征一致，这一身份关联尚未确认。',
      'url': 'https://openrouter.ai/stealth/crouton-alpha',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-11-04',
      'title': 'OpenAI 团队成员：正扩展 dots 的模型组合',
      'brief': 'OpenAI 团队成员 Tibo 表示，团队正在扩展支持 dots 的模型组合，其中包括 GPT-6 Astra 和 GPT-6.1 Terra ，未来还会加入其他模型。',
      'url': 'https://x.com/thsottiaux/status/2117283124833055196',
      'source': '橘鸦AI早报',
      'type': '产品应用'
    },
    {
      'date': '2026-11-04',
      'title': '豆包工作个人用户简单问答免费',
      'brief': '豆包工作 通过官方公众号宣布，其面向个人用户免费开放日常简单问答服务。官方称，回答日常小问题时，豆包工作比豆包的对话模式更准确、可靠。',
      'url': 'https://mp.weixin.qq.com/s/n4RUfNxJwfcxsByEWLuhfw',
      'source': '橘鸦AI早报',
      'type': '产品应用'
    },
    {
      'date': '2026-11-04',
      'title': 'MiniMax 开源 BYOB：用户自带 agent 同桌互动',
      'brief': 'MiniMax 在 GitHub 开源了名为 BYOB （Bring Your Own Bot）的项目，发布协议规范和一份 TypeScript 参考实现，采用 MIT 许可证。',
      'url': 'https://github.com/MiniMax-AI/mcode-agent-table?ref=explainx',
      'source': '橘鸦AI早报',
      'type': '产品应用'
    },
    {
      'date': '2026-11-04',
      'title': '微信视觉团队开源 WeVisOne-VL 视觉模型',
      'brief': '腾讯微信视觉团队 开源视觉多模态模型 WeVisOne-VL ，提供 2B 和 4B 两个参数版本，模型权重、推理包、Cookbooks 与评测流程一并发布，腾讯自研代码采用 Apache 2.0 许可证。',
      'url': 'https://tencent.github.io/WeVisOne-VL/',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-11-04',
      'title': 'Claude Code 产品负责人 Cat Wu 宣布离职',
      'brief': 'Claude Code 产品负责人 Cat Wu 在 X 平台发文宣布离职，周五是她在 Anthropic 的最后一天。',
      'url': 'https://x.com/_catwu/status/2117731934340337676',
      'source': '橘鸦AI早报',
      'type': '行业动态'
    },
    {
      'date': '2026-11-04',
      'title': 'OpenAI 聘请 Uber 总裁出任首席企业事务官',
      'brief': 'OpenAI 宣布， Jill Hazelbaker 将加入公司，出任首席企业事务官，负责全球传播和企业定位。',
      'url': 'https://openai.com/index/jill-hazelbaker-chief-corporate-affairs-officer/',
      'source': '橘鸦AI早报',
      'type': '行业动态'
    },
    {
      'date': '2026-11-04',
      'title': 'OpenAI 聘请美国前陆军部长担任国家安全顾问',
      'brief': 'OpenAI 宣布聘请美国前陆军部长 Dan Driscoll 担任新设的国家安全现代化高级顾问，就利用先进 AI 加强国家和网络安全提供建议。',
      'url': 'https://openai.com/index/dan-driscoll-joins-openai/',
      'source': '橘鸦AI早报',
      'type': '行业动态'
    }
  ]
};
