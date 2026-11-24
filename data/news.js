// AI 热点新闻快照(由 scripts/lib/news.js 每日抓取维护,每日 4 次)
// 来源:「橘鸦AI早报」官方 RSS https://daily.juya.uk/rss.xml(每日整篇早报拆成逐条);仅保留最近 2 天
// 字段说明:date=新闻日期(UTC);title=标题;brief=简要;url=详情链接;source=来源;type=新闻类型(早报正文分类)
window.NEWS = {
  'updated': '2026-11-24',
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
      'date': '2026-11-24',
      'title': '智谱发布旗舰模型 GLM-5.4',
      'brief': '智谱 正式发布新一代旗舰模型 GLM-5.4 ，这是其首款采用 Loop Transformer 架构的模型，核心瞄向“泛 Coding”。官方称 GLM-5.4 对 750B 基座中的 28 层 做两轮循环，在不增加参数量的前提下实现更深度推理，智能水平达到 2–3T 级模型。在 200 个 真实场景编程实战评测中， GLM-5.4 在视觉 Coding、视觉复刻与长程任务上表现突出，并将代码能力外推至视频生成与处理、完整游戏构建…',
      'url': 'https://mp.weixin.qq.com/s/D-IZr-QaT1or_chminK8IQ',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-11-24',
      'title': 'OpenAI 在 ChatGPT 上线日常对话版 GPT-6.2 Sol',
      'brief': 'OpenAI 在 ChatGPT 的 Chat 模式推出 GPT-6.2 Sol 版本，针对日常对话优化，面向 Plus、Pro、Business 和 Enterprise 用户。官方测试中，新模型图像理解得分 71.7% ，高于 GPT-6 的 47.4% ；高难度指令遵循率 78.1% ，高于 GPT-6 的 62.5% 。它也更擅长按价格、位置等因素缩小在线比较范围，并适时提出跟进。',
      'url': 'https://help.openai.com/en/articles/6825453-chatgpt-release-notes',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-11-24',
      'title': 'Antigravity 重置所有用户 Gemini 配额并向付费 Pro 开放 Carbon',
      'brief': 'Antigravity 负责人 Varun Mohan 在 X 宣布，Antigravity 正为各层级升级模型，并重置所有用户的 Gemini 配额。此次调整后，付费 Pro 用户可获得 Carbon 访问权限， Hydrogen 按承诺向所有用户开放。',
      'url': 'https://x.com/_mohansolo/status/2124971131312734707',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-11-24',
      'title': 'Qoder 独家上线匿名模型 HungerG，免费试用 7 天',
      'brief': 'Qoder 宣布一款新的匿名模型独家上线其平台，代号 HungerG ，官方未公开它由谁打造，并邀请用户交给它真实任务，猜猜是谁开发的。该模型于 11 月 23 日至 30 日 在 Qoder 和 Qoder IDE 免费开放 7 天 。',
      'url': 'https://x.com/qoder_ai_ide/status/2124899980632822148',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-11-24',
      'title': 'ChatGPT 宣布 12 月 23 日下线 GPT-5.6 Sol 与 Terra',
      'brief': 'ChatGPT 官方在 X 上发文宣布，将于 12 月 23 日 在 Chat 服务中下线 GPT-5.6 Sol ，并在 Work 和 Codex 服务中下线 GPT-5.6 Sol 与 Terra 两款模型。',
      'url': 'https://x.com/ChatGPT/status/2124981905380569283',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-11-24',
      'title': 'OpenAI：ChatGPT Business 新工作空间可享双倍用量',
      'brief': 'OpenAI 的 Codex 与 ChatGPT 团队成员 Tibo 在 X 上宣布， 11 月 30 日 前创建的 ChatGPT Business 工作空间，可在 12 月 31 日 前获得双倍包含用量，适用所有席位类型。',
      'url': 'https://x.com/thsottiaux/status/2124922313019953319',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-11-24',
      'title': 'Antigravity 开放 Orchestrator 模型组合自定义',
      'brief': 'Varun Mohan 在 X 平台表示， Antigravity 用户现在可为 Orchestrator 显式设置模型组合和思考级别，他自己已设为 Neon High 与 Hydrogen High 。',
      'url': 'https://antigravity.google/docs/models',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-11-24',
      'title': '谷歌为 Gemini API 推出文件切片控制，仅按实际处理内容付费',
      'brief': '谷歌 宣布 Gemini API 新增文件切片控制功能，直接支持 PDF 、 Word 、 PowerPoint 、 Excel 及 OpenDocument 文件。',
      'url': 'https://blog.google/innovation-and-ai/technology/developers-tools/file-slicing-controls/',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-11-24',
      'title': 'Anthropic 重新设计 Claude Code 桌面端侧边栏',
      'brief': 'ClaudeDevs 宣布重新设计 Claude Code 桌面端侧边栏。 Files 、 Changes 、 Terminal 等工具现在以标签页形式显示在会话旁边，用户可以移动标签并排查看多个工具，也可以把标签弹出为独立窗口。',
      'url': 'https://x.com/ClaudeDevs/status/2124978802006851961',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-11-24',
      'title': 'Claude 的 Connectors 与 Skills 整合为 plugins',
      'brief': 'Anthropic 宣布将 Claude 的 Connectors 与 Skills 整合为 plugins ，用户此后通过同一种方式连接工具或教 Claude 新技能。',
      'url': 'https://support.claude.com/en/articles/13837440-use-plugins-in-claude',
      'source': '橘鸦AI早报',
      'type': '产品应用'
    },
    {
      'date': '2026-11-23',
      'title': 'OpenAI 公开内部指标 Perplexity，提议设共同开发限制',
      'brief': 'OpenAI 首席科学家 Jakub Pachocki 发文《Perplexity and Intelligence》，首次公开 OpenAI 过去五年的内部预训练评测指标 Perplexity ，并提议行业建立统一发展限制标准。',
      'url': 'https://openai.com/index/perplexity-and-intelligence',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-11-23',
      'title': '蚂蚁集团开源医疗模型 LingSante 3.1 Flash 与 air-VL',
      'brief': '蚂蚁集团 百灵大模型发布两款医疗模型 LingSante-3.1-flash 和 LingSante-3.1-air-VL 。',
      'url': 'https://huggingface.co/inclusionAI/LingSante-3.1-flash',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-11-23',
      'title': '马斯克披露 Tesla Reality View 技术细节',
      'brief': '马斯克 回复 FSD v15 体验帖，披露了 Tesla Reality View 技术细节。他称特斯拉自去年已有接近像素级的 world model ，车端部署的大幅缩小版是基于 Tesla Universal Vision Encoder 特征的 conditional mean-flow model 。',
      'url': 'https://x.com/elonmusk/status/2124458557525397780',
      'source': '橘鸦AI早报',
      'type': '技术与洞察'
    },
    {
      'date': '2026-11-23',
      'title': 'Elon Musk 预警 AI 行业明年严重资金短缺',
      'brief': 'Elon Musk 在 X 上回复 Keras 创始人 François Chollet 时表示，让如此规模的算力设备通电、冷却并稳定运行极其困难。',
      'url': 'https://x.com/elonmusk/status/2124271725927903388',
      'source': '橘鸦AI早报',
      'type': '行业动态'
    },
    {
      'date': '2026-11-23',
      'title': 'OpenRouter 终止 3 家供应商合作，移除 125 个端点的 ZDR 资格',
      'brief': 'OpenRouter 发布公告称，安全研究人员发现其平台上部分推理供应商存在数据处理问题，公司调查未发现自身遭入侵或数据泄露。该公司已终止与 3 家供应商的合作，将 125 个端点移出 Zero Data Retention（ZDR） 资格，并通知可能受影响的客户； ZDR 要求供应商不存储提示词和响应。',
      'url': 'https://openrouter.ai/blog/announcements/data-processing-incidents-on-inference-providers/',
      'source': '橘鸦AI早报',
      'type': '行业动态'
    },
    {
      'date': '2026-11-23',
      'title': '甲骨文称与 OpenAI 基础设施合同已获全额资金支持',
      'brief': '甲骨文表示，随着本月初完成一轮 200 亿美元 融资，其与 OpenAI 的基础设施合同已获得全部所需资金。',
      'url': 'https://www.oracle.com/news/announcement/oracle-statement-2026-11-20/',
      'source': '橘鸦AI早报',
      'type': '行业动态'
    },
    {
      'date': '2026-11-23',
      'title': 'OpenAI 团队：ChatGPT/Codex 桌面应用又将迎来重大更新',
      'brief': 'OpenAI 负责 ChatGPT 与 Codex 的团队成员 Tibo 发帖称， ChatGPT 与 Codex 桌面应用团队已在准备又一次重大更新，并询问用户更新后还有哪些不足。',
      'url': 'https://x.com/thsottiaux/status/2124322968499282388',
      'source': '橘鸦AI早报',
      'type': '前瞻与传闻'
    }
  ]
};
