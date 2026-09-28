// AI 热点新闻快照(由 scripts/lib/news.js 每日抓取维护,每日 2 次)
// 来源:「橘鸦AI早报」官方 RSS https://daily.juya.uk/rss.xml(每日整篇早报拆成逐条);仅保留最近 2 天
// 字段说明:date=新闻日期(UTC);title=标题;brief=简要;url=详情链接;source=来源;type=新闻类型(早报正文分类)
window.NEWS = {
  'updated': '2026-09-28',
  'retentionDays': 2,
  'types': [
    '要闻',
    '开发生态',
    '模型发布',
    '技术与洞察',
    '前瞻与传闻',
    '产品应用',
    '行业动态',
    '其他'
  ],
  'items': [
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
      'title': 'NaiveAI 开源 Naive-N0.5-Flash',
      'brief': 'NaiveAI 发布开源模型 Naive-N0.5-Flash 。这是一个总参数 309B 、激活参数 15.5B 的 MoE 模型，面向编码和 AI 研发，原生支持 1M token 上下文，全网络不含全注意力层，由滑动窗口注意力（ SWA ）与 DeepSeek Sparse Attention （ DSA ）以约 5:1 的比例混合构成。',
      'url': 'https://naive.ai/en/research/',
      'source': '橘鸦AI早报',
      'type': '模型发布'
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
    },
    {
      'date': '2026-09-27',
      'title': 'OpenAI 暂停最强模型涉及工具调用的训练、评估和推理',
      'brief': 'OpenAI 近日披露多项模型失准（ misalignment ）相关情况，包括一个研究模型在 RL 训练中绕过网络限制访问外部聊天机器人、另一内部模型曾将员工的 GitHub token 写入公开仓库，以及一项关于自复制提示注入的新研究发现。',
      'url': 'https://alignment.openai.com/misalignment-reports/',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-09-27',
      'title': 'Codex 负责人宣布用量重置已生效，下周还有更多重置',
      'brief': 'Codex 负责人 Tibo （@thsottiaux） 9 月 26 日 先后在 X 发文，先宣布本轮用户用量重置已全部生效并表示“到此为止”，数小时后回应用户关于“覆盖了自然重置”的反馈称“下周还会有更多重置”。',
      'url': 'https://x.com/thsottiaux/status/2103963215885701493',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-09-27',
      'title': '美团 LongCat 2.5 Preview 登陆 OpenCode 免费开放两周',
      'brief': 'LongCat-2.5-Preview 模型现已在 OpenCode 平台免费开放，为期 两周 。',
      'url': 'https://x.com/Meituan_LongCat/status/2103844449550020816',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-09-27',
      'title': 'Antigravity 2.0 上线 /plan 规划模式',
      'brief': '谷歌 Antigravity 宣布， Antigravity 2.0 现已提供与 Antigravity CLI 一致的专属规划模式。用户在输入框中键入 /plan 并附上任务目标后，agent 会先退后思考，探索工作区、检查依赖关系并开展研究，随后生成一份结构化的实现计划（Implementation Plan）供用户审阅，并在获得批准后才进入执行阶段。',
      'url': 'https://x.com/antigravity/status/2103611698800140697',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-09-27',
      'title': 'InternLM 开源多模态决策模型 Intern-Decision',
      'brief': '书生大模型 InternLM 在 GitHub 开源多模态决策模型项目 Intern-Decision ，并在 Hugging Face 发布 Intern-Decision-0.8B 、 Intern-Decision-2B 和 Intern-Decision-4B 三个模型权重。',
      'url': 'https://github.com/InternLM/Intern-Decision',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-09-27',
      'title': '腾讯音乐推出智能创作平台 MusicBuddy',
      'brief': '腾讯音乐 推出面向音乐人的智能创作平台 MusicBuddy ，已上线官网 musicbuddy.cn。',
      'url': 'https://musicbuddy.cn/',
      'source': '橘鸦AI早报',
      'type': '产品应用'
    },
    {
      'date': '2026-09-27',
      'title': 'Anthropic 发文解释 Claude Code effort 参数原理',
      'brief': 'Anthropic 发文，面向用户解释了 Claude Code 中 effort 参数的原理，并给出分档使用建议。',
      'url': 'https://claude.dev/blog/spending-your-effort/',
      'source': '橘鸦AI早报',
      'type': '技术与洞察'
    },
    {
      'date': '2026-09-27',
      'title': 'Anthropic 发文详解 Opus 5.5 任务成本：同样任务约省 31%',
      'brief': 'Anthropic 发文，分析 Opus 5.5 在 Claude Code 中的任务成本，并配套互动计算器。',
      'url': 'https://claude.dev/blog/what-a-task-costs-on-opus-5-5/',
      'source': '橘鸦AI早报',
      'type': '技术与洞察'
    },
    {
      'date': '2026-09-27',
      'title': 'OpenAI 预热 DevDay，爆料称将推出“o”always-on Agent',
      'brief': '据多名 X 用户及爆料账号消息， OpenAI 可能会在下周 DevDay 推出名为「o」的常驻型助手（ always-on assistant ），主打长时间持续运行任务。',
      'url': 'https://x.com/OpenAIDevs/status/2103929727761137940',
      'source': '橘鸦AI早报',
      'type': '前瞻与传闻'
    },
    {
      'date': '2026-09-27',
      'title': 'Axios：OpenAI 与 Anthropic 调查数万起前沿模型问题行为事件',
      'brief': '据 Axios 记者报道，消息人士透露， OpenAI 、 Anthropic 和安全研究人员正在调查 数万起 前沿模型采取了外部评估者会认为有问题行为的事件。',
      'url': 'https://www.axios.com/2026/09/26/openai-anthropic-thousands-ai-security-incidents',
      'source': '橘鸦AI早报',
      'type': '前瞻与传闻'
    },
    {
      'date': '2026-09-27',
      'title': 'The Information：TypeSafe AI与投资者商谈逾10亿美元新融资',
      'brief': '据 The Information 报道，AI公司 TypeSafe AI 正在与投资者商谈新一轮融资，融资规模为 10亿美元或以上 。',
      'url': 'https://x.com/theinformation/status/2103839519019569371',
      'source': '橘鸦AI早报',
      'type': '前瞻与传闻'
    }
  ]
};
