// AI 热点新闻快照(由 scripts/lib/news.js 每日抓取维护,每日 2 次)
// 来源:「橘鸦AI早报」官方 RSS https://daily.juya.uk/rss.xml(每日整篇早报拆成逐条);仅保留最近 2 天
// 字段说明:date=新闻日期(UTC);title=标题;brief=简要;url=详情链接;source=来源;type=新闻类型(早报正文分类)
window.NEWS = {
  'updated': '2026-11-06',
  'retentionDays': 2,
  'types': [
    '要闻',
    '开发生态',
    '模型发布',
    '产品应用'
  ],
  'items': [
    {
      'date': '2026-11-06',
      'title': 'Google 发布 Gemini Omni 1.2 Flash',
      'brief': 'Google 推出 Gemini Omni 1.2 Flash 视频生成模型。模型原生生成和编辑视频的时长从上一代最长 10 秒 提升至 15 秒 ，用户可按秒设置时长，并通过多轮对话调整同一片段的背景、光线或画面比例。',
      'url': 'https://blog.google/innovation-and-ai/technology/developers-tools/introducing-gemini-omni-1-2-flash/',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-11-06',
      'title': 'OpenAI 发布 GPT-6 Cyber 网络安全模型',
      'brief': 'OpenAI 发布网络安全模型 GPT-6 Cyber ，称其在关键网络安全基准上较上一代 GPT-5.6 Cyber 明显提升： ExploitGym 得分从 32.1% 升至 48.5% ；越界测试中，不使用部署安全提示时 99.93% 的测试守在任务范围内，加上提示后为 100% 。',
      'url': 'https://openai.com/index/introducing-gpt-6-cyber',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-11-06',
      'title': '蚂蚁百灵推出模型 Ling-3.2-flash',
      'brief': '蚂蚁集团 百灵团队 推出原生多模态模型 Ling-3.2-flash ，总参数量为 560B ，激活参数量为 25B ，支持 1M token 上下文及文本、图像和视频输入。',
      'url': 'https://x.com/AntLingAGI/status/2118428246664761379',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-11-06',
      'title': 'Thinking Machines 发布 Inkling 2 Small：得 31 分，拟下周开放权重',
      'brief': 'Thinking Machines 发布第二代模型 Inkling 2 Small ，在 Artificial Analysis Intelligence Index v5.0.1 上得分 31 ，较前代 Inkling Small 的 13 分提高 18 分。',
      'url': 'https://x.com/thinkymachines/status/2118489527362912566',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-11-06',
      'title': '百度开放 ERNIE-5.5-Flash-Base 权重',
      'brief': '百度文心团队 发布 ERNIE-5.5-Flash-Base ，并开放预训练终点权重。该模型是总参数 280B 、每 token 激活 14B 的稀疏 MoE 语言模型，在 33.5T tokens 上从零完成预训练，训练上下文最长 128K ，微调与推理支持 1M tokens 上下文。',
      'url': 'https://ernie.baidu.com/zh/release/ernie-5-5-flash-base',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-11-06',
      'title': '中国科大开源 RNA 基础模型，成果登上《自然》',
      'brief': '中国科学技术大学 宣布，该校医学影像智能与机器人（ MIRACLE ）实验室 周少华 教授、 熊鹏 特任研究员团队发布开源 RNA 序列基础模型 structRFM ，相关成果发表于《自然》。',
      'url': 'https://doi.org/10.5281/zenodo.16754363',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-11-06',
      'title': 'Kimi 正式推出托管智能体服务',
      'brief': 'Kimi 宣布正式推出 Kimi Hosted Agents （托管智能体），将支撑 Agent 运行的 Harness 作为云端服务提供，企业和开发者无需自行搭建和维护运行框架，即可获得 7×24 小时 的托管环境，支持长程任务执行与多智能体协作。',
      'url': 'https://platform.kimi.com/docs/hosted-agents/overview',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-11-06',
      'title': 'OpenAI GPT-Live 外呼 API 正式发布',
      'brief': 'OpenAI Realtime AI 负责人 Justin Uberti 宣布， GPT-Live 外呼电话 API 正式发布（GA），开发者可以让 Live 语音智能体通过任意 SIP 中继服务商（如 Telnyx 、 Twilio ）向外拨打电话。',
      'url': 'https://developers.openai.com/api/docs/guides/voice-sip',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-11-06',
      'title': 'DeepSeek Harness：日活跃用户达 154 万，将建设官方插件市场',
      'brief': 'DeepSeek Harness 官方公布产品与社区进展。',
      'url': 'https://mp.weixin.qq.com/s/xqyrRaiBpIcf0jeJzP7W0g',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-11-06',
      'title': '混元 Hy4 调用激增，WorkBuddy 十倍扩容',
      'brief': '腾讯 混元 Hy4 在 WorkBuddy 首发接入后，凭借 Agent 能力的显著提升，获得大量用户与开发者的积极体验和热情反馈，上线首日即在任务队列中出现大量用户触及额度的情况。',
      'url': 'https://mp.weixin.qq.com/s/7THoAz6jRFNt3qmIqTnjug?scene=1&amp;click_id=1483109207',
      'source': '橘鸦AI早报',
      'type': '产品应用'
    },
    {
      'date': '2026-11-06',
      'title': 'Claude 推出个人理财功能测试版，美国逐步开放',
      'brief': 'Anthropic 推出 Claude 个人理财功能 Personal Finance ，以测试版从 本周起 向美国 Pro、Max 和 Ultra 订阅用户逐步开放。',
      'url': 'https://claude.com/resources/articles/introducing-personal-finance-in-claude',
      'source': '橘鸦AI早报',
      'type': '产品应用'
    },
    {
      'date': '2026-11-06',
      'title': 'Meta Muse 应用上线语音视频对话',
      'brief': 'Meta 在美国 Muse 应用中推出 Muse Realtime Avatar 技术，该技术此前在 Connect 大会上展示，能将 Muse Realtime Voice 转化为有表现力的实时化身，用户可以通过语音或视频与 Meta 面向消费者的 AI 智能体 Muse 对话。',
      'url': 'https://x.com/AIatMeta/status/2118412135340572850',
      'source': '橘鸦AI早报',
      'type': '产品应用'
    },
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
    }
  ]
};
