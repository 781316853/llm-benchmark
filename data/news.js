// AI 热点新闻快照(由 scripts/lib/news.js 每日抓取维护,每日 2 次)
// 来源:「橘鸦AI早报」官方 RSS https://daily.juya.uk/rss.xml(每日整篇早报拆成逐条);仅保留最近 2 天
// 字段说明:date=新闻日期(UTC);title=标题;brief=简要;url=详情链接;source=来源;type=新闻类型(早报正文分类)
window.NEWS = {
  'updated': '2026-09-25',
  'retentionDays': 2,
  'types': [
    '要闻',
    '开发生态',
    '模型发布',
    '产品应用'
  ],
  'items': [
    {
      'date': '2026-09-25',
      'title': 'ChatGPT 或新增每月 500 美元的 Pro Max 订阅方案',
      'brief': '据报道，尚未发布的 ChatGPT 订阅信息中出现了 Pro Max 套餐，标价每月 500 美元 ；有页面显示 600 美元 ，报道解释称差额来自增值税。',
      'url': 'https://x.com/testingcatalog/status/2103259620592542102',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-09-25',
      'title': '豆包再送30天免费订阅权益，电脑版用户可领取',
      'brief': '豆包 在此前赠送一个月订阅权益的活动基础上，再加送 30天 免费订阅。',
      'url': 'https://mp.weixin.qq.com/s/o9pcVdE06AFVyuJefmemYA',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-09-25',
      'title': '谷歌将 Colab 高级权益纳入 Google AI 订阅方案',
      'brief': '谷歌 宣布， Google AI 订阅用户将获得 Colab 高级权益，可优先使用更快的加速器和性能更高的机器。',
      'url': 'https://developers.googleblog.com/colab-is-now-part-of-your-google-ai-plan/',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-09-25',
      'title': 'WorkBuddy上线微信小程序生成与发布能力',
      'brief': 'WorkBuddy 新增微信小程序生成与发布能力，PC端升级至 5.6.1 及以上版本即可体验。',
      'url': 'https://mp.weixin.qq.com/s/27g4HBkMqfPGn40_rYBmKA',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-09-25',
      'title': 'DeepSeek Harness Desktop 版安装包被发现',
      'brief': 'DeepSeek Harness 的桌面端安装包已经可以直接下载，目前最新可见版本为 0.1.7-rc.2 ，提供 Windows x64 和 macOS arm64 版本，文件托管在 DeepSeek 自有的 download.deepseek.com 域名。官方 GitHub 仓库中也已经出现 Desktop 相关代码和版本更新记录。',
      'url': 'https://github.com/deepseek-ai/deepseek-harness/releases',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-09-25',
      'title': '硅基流动上线三款开源快速决策模型 API，10 月 8 日前免费调用',
      'brief': '硅基流动 上线 Kev-4B 、 SemIf 和 DiffusionGemma 三款开源快速决策模型，做成 Serverless 服务，通过 API 开放调用，并在 2026 年 10 月 8 日 前提供免费调用。三款模型采用不同技术路径，面向需要快速获得结构化判断的应用场景。',
      'url': 'https://mp.weixin.qq.com/s/HPbVrM8kevJXAETXbjC6ug',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-09-25',
      'title': '博查发布Bocha Jev决策模型，API限时免费测试',
      'brief': '博查 发布面向结构化决策任务的 Bocha Jev 模型，并开放API限时免费测试。开发者可使用已有的 博查 API Key接入，按当前状态、任务指令和候选项发起请求，让模型完成动作选择、内容评分或条件判断，再由业务程序读取结果并执行后续操作。',
      'url': 'https://mp.weixin.qq.com/s/P21_6xJLwFAvgziHeoxnhw',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-09-25',
      'title': 'Anthropic恢复对三类回复前拦截请求收费',
      'brief': 'Anthropic 宣布，恢复对 Claude 作出回复前被安全机制拦截的部分请求收费。此次仅涉及误判率较低的 生物学 、 蒸馏攻击 和 前沿大模型开发 三类请求。 Anthropic 称，近几周其系统遭遇一些协同攻击，恢复收费是防御措施之一。',
      'url': 'https://platform.claude.com/docs/en/build-with-claude/refusals-and-fallback',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-09-25',
      'title': 'Claude Code Projects新增本地支持，线程可在用户电脑运行',
      'brief': 'ClaudeDevs 宣布， Claude Code 的 Projects 已加入本地支持，项目线程现在可以在用户自己的电脑上运行。',
      'url': 'https://x.com/ClaudeDevs/status/2102893178273874102',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-09-25',
      'title': 'OpenRouter推出服务器工具市场，提供搜索、命令行等工具',
      'brief': 'OpenRouter 推出服务器工具市场，让开发者通过同一 API，为不同模型调用网页搜索、网页抓取、图像生成和命令行等工具，其中既有免费选项，也有付费选项。',
      'url': 'https://openrouter.ai/tools',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-09-24',
      'title': '千问发布Qwen-Audio-3.1五款模型，四款API已上线',
      'brief': '千问 发布 Qwen-Audio-3.1 系列，升级 ASR 语音识别、 TTS 语音合成和 Realtime 实时交互，并推出 ASR-Next 音频理解模型与 TTS-Next 音频创作模型，覆盖音频理解、生成、交互和创作。',
      'url': 'https://mp.weixin.qq.com/s/MW6wBdCJEdgGYX1DE9FzXQ',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-09-24',
      'title': '科大讯飞发布Spark-ASR-2.0，逐步上线讯飞输入法',
      'brief': '科大讯飞 发布语音识别大模型 Spark-ASR-2.0 ，称其基于 Spark-Audio-1.0-Preview 语音基座大模型，通过非自回归识别与 LLM 增强自回归识别协同、中英文混合文本与声学联合增强、动态上下文注入，改进中英文混合、方言、专业术语及高噪声、小音量等场景的识别效果，并让转写文本更流畅规范。',
      'url': 'https://iflytekresearch.iflytek.com/experience/spark-asr',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-09-24',
      'title': '阿里巴巴开源Logics-Parsing-V3，支持跨页解析长文档',
      'brief': '阿里巴巴 在推出并开源 Logics-Parsing-V3 ，将此前以单页识别为主的能力扩展到长文档结构化解析。',
      'url': 'https://github.com/alibaba/Logics-Parsing',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-09-24',
      'title': 'Fireworks推出Ember-1，同步推出定制训练支持',
      'brief': 'Fireworks Research 推出基于 Kimi K3 训练的专用模型 Ember-1 ，目标是在保留任务能力的同时缩短不必要的推理过程。',
      'url': 'https://fireworks.ai/blog/ember-1',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-09-24',
      'title': 'Black Forest Labs发布开放权重机器人模型FLUX 3 Action',
      'brief': 'Black Forest Labs 发布了 70亿 参数的开放权重世界动作模型 FLUX 3 Action ，并公开权重、代码、微调方案、基准测试和可复现示例，供研究者和开发者适配自己的机器人与任务。',
      'url': 'https://bfl.ai/models/flux-3-action',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-09-24',
      'title': 'Claude 手机应用现已支持多个账号',
      'brief': 'Anthropic 产品经理 Robert Bye 表示， Claude 手机应用现已支持多个账号。需要分别使用工作和个人账号的用户，可在同一应用内切换，无需每次退出后重新登录。',
      'url': 'https://x.com/RobertJBye/status/2102455638643388631',
      'source': '橘鸦AI早报',
      'type': '产品应用'
    }
  ]
};
