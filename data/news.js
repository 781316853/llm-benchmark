// AI 热点新闻快照(由 scripts/lib/news.js 每日抓取维护,每日 2 次)
// 来源:「橘鸦AI早报」官方 RSS https://daily.juya.uk/rss.xml(每日整篇早报拆成逐条);仅保留最近 2 天
// 字段说明:date=新闻日期(UTC);title=标题;brief=简要;url=详情链接;source=来源;type=新闻类型(早报正文分类)
window.NEWS = {
  'updated': '2026-09-30',
  'retentionDays': 2,
  'types': [
    '要闻',
    '开发生态',
    '模型发布'
  ],
  'items': [
    {
      'date': '2026-09-30',
      'title': 'OpenAI 发布 GPT-6.1 Sol，能力逼近 Astra',
      'brief': 'OpenAI 发布 GPT-6 Sol 的升级版 GPT-6.1 Sol ，官方称其智能接近 GPT-6 Astra ，标准 API 价格约为 Astra 的五分之一。',
      'url': 'https://openai.com/index/introducing-gpt-6-1-sol/',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-09-30',
      'title': 'OpenAI 发布常驻 Agent 产品 dots，全天候替用户工作',
      'brief': 'OpenAI 发布常驻型 Agent 产品 dots ，由 GPT-6 Astra 驱动，拥有自己的云端计算机，可通过插件连接超过 4000 个应用。',
      'url': 'https://openai.com/index/introducing-dots/',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-09-30',
      'title': 'OpenAI 推出 ChatGPT Space 协作空间',
      'brief': 'OpenAI 推出 ChatGPT Space ，把团队文件、页面和共享工作集中到一个空间， ChatGPT 、 Codex 和 dot 都能被拉进来协作。',
      'url': 'https://chatgpt.com/features/space/',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-09-30',
      'title': 'OpenAI 发布 Pages：面向人与 Agent 协作的新文档',
      'brief': 'OpenAI 在 DevDay 2026 上发布新文档类型 Pages ，定位为面向人与 Agent 协作的文档。官方称，在 ChatGPT 里能做的事都可以在页面上完成，包括写作、研究、生成图表、创建图片和信息可视化，还可以邀请团队成员一起贡献想法和反馈。',
      'url': 'https://learn.chatgpt.com/docs/space/pages',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-09-30',
      'title': 'OpenAI 发布 Pro 500 套餐并重开 Pro 200 订阅',
      'brief': 'OpenAI 推出每月 500 美元 的 Pro 500 套餐，提供三个 Pro 套餐中最高的使用额度，达到 Plus 的 25 倍 ，并独享 Astra Ultrafast 加速服务。',
      'url': 'https://help.openai.com/en/articles/6825453-chatgpt-release-notes#pro-500-and-pro-200-september-29-2026',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-09-30',
      'title': '至知创新研究院发布并开源 IQuest-Q1',
      'brief': '至知创新研究院 发布并开源 IQuest-Q1 ，这是一款面向 CLI 的开源智能体基座模型，权重已在 Hugging Face 开放下载。',
      'url': 'https://iquestlab.github.io/',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-09-30',
      'title': 'Liquid AI 发布首款决策模型 d1 并开放 API',
      'brief': 'Liquid AI 发布首款决策模型 d1 ，目前已通过 Liquid API 开放使用。',
      'url': 'https://x.com/liquidai/status/2105003472332693869',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-09-30',
      'title': 'OpenCode：space bunny 免费期再延长 5 天至 10 月 5 日',
      'brief': 'OpenCode 宣布 space bunny 在周末完成升级，并且另一项升级很快就会推出。',
      'url': 'https://x.com/opencode/status/2104987000004821128',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-09-30',
      'title': 'Claude Sonnet 5.5 登上 Arena，Direct Mode 限时开放直测',
      'brief': 'Arena.ai 宣布， Claude Sonnet 5.5 从 太平洋时间 9 月 30 日上午 8 点 起可以在 Arena 上直接测试。用户进入 Direct Mode 后，在下拉菜单中选择该模型即可使用。',
      'url': 'https://x.com/arena/status/2105070817688309951',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-09-29',
      'title': '可灵 AI 宣布 Kling 4.0 将于 10 月上线，Flash 版已向年卡会员开放',
      'brief': '可灵 AI 官方宣布，视频生成模型 Kling 4.0 将于 10 月 正式上线， Kling 4.0 Flash 面向高频创作场景、生成速度快且更具性价比，已于 9 月 28 日 率先向黑金年卡会员开放小范围体验。',
      'url': 'https://mp.weixin.qq.com/s/APQmZKfIXo-HDmKHunlH5Q',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-09-29',
      'title': '小米 MiMo-V2.6 修复工具调用复读问题',
      'brief': '小米 MiMo 团队修复了 MiMo-V2.6 在 MiMo Desktop、MiMo Code、OpenCode 等场景中反复发起相同或相似工具调用的问题。官方复盘称，内部测试中 Response 级别复读率超过 0.05% 。',
      'url': 'https://mimo.xiaomi.com/zh/blog/mimo-v2-6-tool-call-repetition',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-09-29',
      'title': 'ElevenLabs 发布 Eleven v4 系列语音模型',
      'brief': 'ElevenLabs 发布 Eleven v4 和 Eleven v4 Turbo 两个文本转语音模型，已在应用、API 和 Agent 产品中开放。',
      'url': 'https://elevenlabs.io/v4',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-09-29',
      'title': '智谱ZCode就此前的仓库上传快照事件发布活动与补偿',
      'brief': '在经历被质疑上传用户代码的风波后， 智谱 ZCode 宣布开源，并发布后续公告：仓库快照上传链路已移除，涉事云端数据已删除，智谱表示第三方核查已确认删除结果。',
      'url': 'https://mp.weixin.qq.com/s/Zia38bgBIcNlAXkA2I9pxw',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-09-29',
      'title': 'OpenCode 上线 Go Plus 订阅：每月 40 美元',
      'brief': 'OpenCode 官方宣布上线 Go Plus 订阅方案，每月 40 美元 ，提供比每月 10 美元 的 Go 更高的使用额度，目前已可订阅。',
      'url': 'https://opencode.ai/zh/go',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    }
  ]
};
