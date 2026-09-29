// AI 热点新闻快照(由 scripts/lib/news.js 每日抓取维护,每日 2 次)
// 来源:「橘鸦AI早报」官方 RSS https://daily.juya.uk/rss.xml(每日整篇早报拆成逐条);仅保留最近 2 天
// 字段说明:date=新闻日期(UTC);title=标题;brief=简要;url=详情链接;source=来源;type=新闻类型(早报正文分类)
window.NEWS = {
  'updated': '2026-09-29',
  'retentionDays': 2,
  'types': [
    '要闻',
    '开发生态',
    '模型发布',
    '产品应用',
    '行业动态',
    '其他'
  ],
  'items': [
    {
      'date': '2026-09-29',
      'title': 'Anthropic 发布 Claude Sonnet 5.5，更快更省',
      'brief': 'Anthropic 发布 Claude Sonnet 5.5 ，这是 Claude 5.5 系列继 Opus 5.5 后的第二款模型，现已在 Claude 、 Claude Code 、 Claude Platform 以及 AWS 、 Google Cloud 和 Microsoft Azure 等平台上线。相比 Sonnet 5 ，新模型输出速度提升 30% 以上，每百万输入、输出 token 价格仍为 2 美元 和 10 美元…',
      'url': 'https://www.anthropic.com/claude-sonnet-5-5',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-09-29',
      'title': 'Manus 发布 2.0：新架构、新产品、新能力',
      'brief': 'Manus 发布 2.0 版本，这是其恢复独立运营后的首次大更新，目前已经在网页、桌面和手机端上线。',
      'url': 'https://manus.im/blog/introducing-manus-2-0',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-09-29',
      'title': 'Manus 推出个人 Agent 应用 Cue',
      'brief': 'Manus 推出个人 Agent 应用 Cue ，已在网页端、桌面端和移动端上线，iOS 版待 App Store 审核后发布。',
      'url': 'https://cue.im/',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-09-29',
      'title': 'AMD 以约 82 亿美元收购 World Labs',
      'brief': 'AMD 宣布已与 李飞飞 创办的 AI 研究公司 World Labs 签署最终收购协议，交易全部以股票完成，价值约 82 亿美元 。',
      'url': 'https://www.globenewswire.com/news-release/2026/09/28/3370256/0/en/amd-to-acquire-world-labs-to-advance-the-future-of-ai-compute.html',
      'source': '橘鸦AI早报',
      'type': '要闻'
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
      'title': 'H Company 发布 Holo4 系列 computer-use 模型',
      'brief': 'H Company 发布 Holo4 系列计算机操作模型，包含 27B 稠密版和 35B-A3B 混合专家版，分别基于 Qwen3.8 和 Qwen3.5 架构，可跨桌面、网页和移动端执行点击、输入、代码和工具调用。',
      'url': 'https://hcompany.ai/newsroom/holo4',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-09-29',
      'title': '紫东太初团队开源 ZDTaichu5.0-9B 通用多模态大模型',
      'brief': '中国科学院自动化研究所紫东太初团队 正式开源 ZDTaichu5.0-9B 通用多模态大模型，并已正式上线。官方介绍称，该模型参数规模为 9B ，定位为面向物理世界的通用多模态大模型，在九项国际空间理解测试中拿下八项同组别第一名，在同规模通用模型中实现了空间与具身理解的最强能力。',
      'url': 'https://mp.weixin.qq.com/s/-10NvG3zZhtDwgptU-WbWA',
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
    },
    {
      'date': '2026-09-28',
      'title': 'MiniMax 上线 M3.1-Flash-Preview',
      'brief': 'MiniMax 已推出 M3.1-Flash-Preview ，模型首发上线 MiniMax Code ，同时已加入 Token Plan 。该模型支持 1M 上下文、多档思考深度和包括视频在内的多模态输入，官方将其描述为更快、更轻量，面向高吞吐、低延迟工作负载。',
      'url': 'https://x.com/MiniMax_AI/status/2104256406786547800',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-09-28',
      'title': 'OpenAI 修复 GPT-6 Sol 与 Luna 识图缺陷',
      'brief': 'OpenAI 开发者账号 @OpenAIDevs 宣布，已修复一个导致图像理解能力下降的 bug ，受影响模型为 GPT-6 Sol 和 GPT-6 Luna ，修复后 API 和 Codex 中的视觉任务（包括 computer use ）应能看到更好的结果。',
      'url': 'https://x.com/OpenAIDevs/status/2104252306447544447',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-09-28',
      'title': 'Command Code 宣布调整 DeepSeek V4.1 Flash 用量',
      'brief': 'Command Code 通过其官方账号宣布，将 GOAT 订阅方案中 DeepSeek V4.1 Flash 的 60 美元 用量由限时优惠转为永久提供。',
      'url': 'https://x.com/CommandCodeAI/status/2104229776210919460',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-09-28',
      'title': 'TypeSafe AI 宣布 Jev 重新开放注册',
      'brief': 'TypeSafe AI 宣布，在其模型 Jev 扩充容量后，已重新全面开放API注册通道，用户可通过 console.typesafe.ai 注册使用。',
      'url': 'https://x.com/typesafeai/status/2104337822350221795',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-09-28',
      'title': 'ChatGPT 调整 Pro 档位名称并删除原有plus用量说明',
      'brief': '据社区用户发现， ChatGPT 定价介绍页面近日调整了 Pro 方案的档位名称：原有 5x 和 20x 分别改为“ pro standard ”和“ pro more ”，页面同时删除此前关于 5x plus 用量和 20x plus 用量的表述。相关变化目前体现在定价介绍页面的名称及用量文案中。',
      'url': 'https://linux.do/t/topic/2957030',
      'source': '橘鸦AI早报',
      'type': '产品应用'
    },
    {
      'date': '2026-09-28',
      'title': 'Qwen Studio 上线积分与订阅体系',
      'brief': '据社区用户发现， Qwen Studio 已上线订阅与积分机制，网页版用户登录 chat.qwen.ai 后，可在“用量与账单”页面查看积分使用及记录。',
      'url': 'https://chat.qwen.ai/?memberPlan=true',
      'source': '橘鸦AI早报',
      'type': '产品应用'
    },
    {
      'date': '2026-09-28',
      'title': 'Grok Bot推出Finance集成，可连接银行和投资账户',
      'brief': 'Grok Bot 推出新的 Finance 集成，用户可将银行、银行卡和投资账户连接至 Grok Bot ，并就支出管理、投资等事项向其提问。',
      'url': 'https://x.com/bot/status/2103936247995752705',
      'source': '橘鸦AI早报',
      'type': '产品应用'
    },
    {
      'date': '2026-09-28',
      'title': '澳大利亚参议院AI调查要求OpenAI和Anthropic CEO出席听证',
      'brief': '据 路透社 和《卫报》报道，澳大利亚参议院一项关于 AI 与数据中心的调查已向 OpenAI CEO Sam Altman 和 Anthropic CEO Dario Amodei 发出书面请求，要求两人出席听证。调查由澳大利亚绿党参议员 Sarah Hanson-Young 主持，公开听证定于 10月1日（周四） 在堪培拉恢复举行。',
      'url': 'https://www.reuters.com/legal/litigation/openai-anthropic-ceos-called-appear-australian-ai-probe-2026-09-27/',
      'source': '橘鸦AI早报',
      'type': '行业动态'
    },
    {
      'date': '2026-09-28',
      'title': 'Axios：特朗普白宫宴请 Anthropic CEO Dario Amodei',
      'brief': 'Axios 于当地时间 9 月 27 日 援引知情人士报道， 特朗普 计划当晚在白宫与 Anthropic CEO Dario Amodei 私下共进晚餐。',
      'url': 'https://www.axios.com/2026/09/27/anthropic-trump-dario-amodei-dinner-invite',
      'source': '橘鸦AI早报',
      'type': '其他'
    }
  ]
};
