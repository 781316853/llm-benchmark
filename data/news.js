// AI 热点新闻快照(由 scripts/lib/news.js 每日抓取维护,每日 2 次)
// 来源:「橘鸦AI早报」官方 RSS https://daily.juya.uk/rss.xml(每日整篇早报拆成逐条);仅保留最近 2 天
// 字段说明:date=新闻日期(UTC);title=标题;brief=简要;url=详情链接;source=来源;type=新闻类型(早报正文分类)
window.NEWS = {
  'updated': '2026-10-21',
  'retentionDays': 2,
  'types': [
    '要闻',
    '开发生态',
    '模型发布',
    '产品应用'
  ],
  'items': [
    {
      'date': '2026-10-21',
      'title': 'DeepSeek 开源内部推理框架 DeepInfer',
      'brief': 'DeepSeek 开源内部推理框架 DeepInfer ，并同步开源 Token 编解码组件 deepseek-recipe 。 DeepSeek 称，其 DeepSeek V4.1 Flash 线上服务基于 DeepInfer 运行，单一集群吞吐为每天 155 万亿 token ，按谷价计算每卡每小时收入 38 美元 。',
      'url': 'https://zhuanlan.zhihu.com/p/2095560295930508953',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-10-21',
      'title': 'ChatGPT 推出锁定聊天，可用 PIN 保护',
      'brief': 'OpenAI 正为 ChatGPT 逐步推出 Locked Chats （锁定聊天），覆盖 Free、Go、Plus、Pro、Business、Enterprise 和 Edu 订阅方案。',
      'url': 'https://help.openai.com/en/articles/20001411-using-locked-chats-in-chatgpt',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-10-21',
      'title': 'Codex 改进计划第 15 天，Tibo 送上用量重置',
      'brief': 'OpenAI 的 Tibo 发帖宣布，连续改进计划第 15 天“还在忙活”，并送上一次用量重置。他此前承诺，在接下来的 28 天里，每天要么交付一项对多数 Codex 和 Work 用户有用的明确改进，要么进行一次完全的用量重置。',
      'url': 'https://x.com/thsottiaux/status/2112432076767289678',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-10-21',
      'title': 'OpenAI 修复约 4 万账户额度错配问题并补偿',
      'brief': 'OpenAI 称，周末有部分用户反映使用额度消耗快于预期，经排查约 4 万个账户 的额度计算与其实际所选套餐不一致，问题已修正，受影响用户将获得额度补偿。',
      'url': 'https://x.com/thsottiaux/status/2112592264686149749',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-10-21',
      'title': 'OpenAI API 新增 12 小时提示词缓存',
      'brief': 'OpenAI 为 Responses API 中的 GPT-5.6 及后续模型新增可选的 12 小时 提示词缓存，让间隔数小时的请求仍可复用共享指令、工具和上下文，并按缓存输入费率计费。',
      'url': 'https://x.com/OpenAIDevs/status/2112603916076781778',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-10-21',
      'title': 'Google 开源原生 PyTorch 软件栈 TorchTPU',
      'brief': 'Google 已在 GitHub 开源 TorchTPU ，让现有 PyTorch 工作负载只需少量代码修改即可在 TPU 上原生运行。该软件栈由 Google 与 Meta 的 PyTorch 团队共同开发，支持标准 PyTorch API ，可使用 eager mode 调试，再通过 torch.compile 优化 TPU 利用率并减少内存开销。',
      'url': 'https://cloud.google.com/blog/topics/ai-infrastructure/torchtpu-is-now-open-source-run-native-pytorch-on-tpus',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-10-21',
      'title': '腾讯元宝搜索对外开放，支持三种接入方式',
      'brief': '腾讯 宣布， 元宝搜索 正式通过 腾讯云 对外开放，支持 Skill 、 MCP 和 API 三种接入方式，接入可享每月 2000 次免费调用额度。',
      'url': 'https://mp.weixin.qq.com/s/DHbVEwhHjiggPI5EQ5LgkQ',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-10-21',
      'title': 'ElevenLabs 发布两款 Eleven Realtime 实时语音模型',
      'brief': 'ElevenLabs 发布语音到语音模型 Eleven Realtime v1 Mini 和 v1 Max ，分别面向低成本自然对话和复杂任务，每款模型均可作为完整的语音 Agent 使用。',
      'url': 'https://elevenlabs.io/blog/realtime',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-10-21',
      'title': 'Mistral AI 发布 Voxtral 3 语音模型系列及语音 Agent SDK',
      'brief': 'Mistral AI 发布 Voxtral 3 语音模型系列及语音 Agent SDK ，将语音转录、推理、工具调用和语音合成整合为实时流式流程。',
      'url': 'https://mistral.ai/news/voxtral-3',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-10-21',
      'title': 'OpenAI 为 ChatGPT 引入多人共管的定期任务',
      'brief': 'OpenAI 在 ChatGPT 中推出团队任务，可自动执行定期工程工作，例如每周汇总已发布内容和受阻事项，同事可共同查看结果并修改后续任务指令。',
      'url': 'https://help.openai.com/en/articles/20001540-creating-and-managing-team-tasks-in-chatgpt',
      'source': '橘鸦AI早报',
      'type': '产品应用'
    },
    {
      'date': '2026-10-21',
      'title': 'Google 为 Gemini 推出小企业主新工具',
      'brief': 'Google 宣布为 Gemini 推出一批面向小企业主的新工具，核心是一个企业落地页，作为集中入口帮助业主打理品牌、财务和客户洞察等日常事务。',
      'url': 'https://blog.google/innovation-and-ai/products/gemini-app/new-tools-small-business-owners/',
      'source': '橘鸦AI早报',
      'type': '产品应用'
    },
    {
      'date': '2026-10-21',
      'title': 'Google 向安卓车载推出 Gemini 个性化功能',
      'brief': 'Google 开始在 Android Auto 上推出 Gemini 的 Personal Intelligence ，并计划在未来几个月将其引入搭载 Google built-in 的汽车。',
      'url': 'https://blog.google/products-and-platforms/platforms/android/android-auto-cars-with-google-built-in-gemini-personal-intelligence/',
      'source': '橘鸦AI早报',
      'type': '产品应用'
    },
    {
      'date': '2026-10-20',
      'title': 'MiniMax 正式发布 M3.1 Flash',
      'brief': 'MiniMax 正式更新 M3.1 Flash ，确认此前以匿名身份处理超过 200 万亿 token 的 Space Bunny 是该模型的早期版本。',
      'url': 'https://x.com/MiniMax_AI/status/2112150867868541221',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-10-20',
      'title': '美国下令联邦文职机构禁购并移除 DeepSeek',
      'brief': '美国国土安全部 10 月 19 日 公布命令通知，部长在审阅联邦采购安全委员会的建议及相关证据后，依据《 2018 年联邦采购供应链安全法 》下令：联邦文职机构不得采购杭州深度求索（ DeepSeek ）及其关联实体开发的信息技术产品和服务；文职机构的信息技术系统须移除所有 DeepSeek 及其关联实体的产品，以及使用 DeepSeek 实现方案开发的第三方产品和服务。',
      'url': 'https://public-inspection.federalregister.gov/2026-21447.pdf',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-10-20',
      'title': '蚂蚁百灵开源 5 款 Ming-3.0 语音模型',
      'brief': '蚂蚁百灵 开源 5 款 Ming-3.0 模型，覆盖 TTS 语音生成、音频理解和 ASR 语音识别，已在 Hugging Face 和 ModelScope 提供下载。',
      'url': 'https://x.com/AntLingAGI/status/2112210811997540475',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-10-20',
      'title': 'fal 上线视频模型 FLUX 3 Max',
      'brief': 'fal 与 Black Forest Labs 合作推出视频模型 FLUX 3 Max ，已在 fal 上线，支持 720p 文生视频和图生视频。该模型基于 FLUX 3 继续训练，fal 称其在 Artificial Analysis 图生视频初步评测中获得 1,139 Elo ，并列第一。',
      'url': 'https://fal.ai/flux-3-max',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-10-20',
      'title': 'Inception 发布扩散模型 Mercury 3',
      'brief': 'Inception 发布扩散语言模型 Mercury 3 ，已上线 Inception API 、 OpenRouter 、 Baseten 和 Vercel ，兼容 OpenAI API 。',
      'url': 'https://www.inceptionlabs.ai/blog/introducing-mercury-3',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    }
  ]
};
