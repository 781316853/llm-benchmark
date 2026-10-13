// AI 热点新闻快照(由 scripts/lib/news.js 每日抓取维护,每日 2 次)
// 来源:「橘鸦AI早报」官方 RSS https://daily.juya.uk/rss.xml(每日整篇早报拆成逐条);仅保留最近 2 天
// 字段说明:date=新闻日期(UTC);title=标题;brief=简要;url=详情链接;source=来源;type=新闻类型(早报正文分类)
window.NEWS = {
  'updated': '2026-10-13',
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
      'date': '2026-10-13',
      'title': 'Meta 发布 Muse Wonder 模型系列',
      'brief': 'Meta 发布 Muse Wonder 和 Muse Wonder Full 两款模型，称其在个人和专业 Agent 任务上达到领先水平。',
      'url': 'https://research.meta.ai/blog/muse-wonder',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-10-13',
      'title': 'The X Subscription 推出：整合Grok、Cursor 和 X Premium',
      'brief': 'SpaceX Super Intelligence 推出 The X Subscription ，将 Grok 、 Cursor 和 X Premium 合并为同一订阅、工作空间和账单。',
      'url': 'https://docs.x.ai/x-subscription/overview',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-10-13',
      'title': 'Codex 第 8 天安排：重置用量额度',
      'brief': 'Codex 负责人 Tibo 表示，28 天安排的第 8 天将进行用量额度重置。他随后称，全局重置将在太平洋标准时间 10 月 12 日结束前完成。此前，Tibo 表示，团队将在未来 28 天内，每天为多数 Codex 和 Work 用户推出一项有实际价值的明显改进，或完整重置一次用量额度。',
      'url': 'https://x.com/thsottiaux/status/2109812216212099456',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-10-13',
      'title': '智谱推出法律模型 GLM-Legal，开放测试申请',
      'brief': '智谱 推出基于 GLM-5.3-Flash 的法律模型 GLM-Legal ，面向合同审查、证据分析和合规等工作流。',
      'url': 'https://z.ai/blog/glm-legal',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-10-13',
      'title': 'OpenBMB 发布 MiniCPM-V 4.7 系列两款模型',
      'brief': 'OpenBMB 发布并开源 MiniCPM-V 4.7 ，包含 35B-A3B 和 1B 两个型号，支持单图、多图、文档和视频理解。',
      'url': 'https://github.com/openbmb/MiniCPM-V',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-10-13',
      'title': 'OpenCode Go 提供 80 美元 V4.1 Flash 额度',
      'brief': 'OpenCode 宣布推出 Operation Cheepseek 第三阶段，现在 OpenCode Go 订阅提供价值 80 美元 的 DeepSeek V4.1 Flash 使用额度。',
      'url': 'https://x.com/opencode/status/2109573342584058065',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-10-13',
      'title': '阶跃 Step 5 Preview 上线 WorkBuddy，独家限免两周',
      'brief': '阶跃 Step 5 Preview 模型现已上线 腾讯 WorkBuddy 全场景 AI 办公工作台， 2026 年 10 月 12 日至 10 月 25 日 独家限免两周。',
      'url': 'https://mp.weixin.qq.com/s/VmJfCg7X7niy0m9JD6mCdg',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-10-13',
      'title': 'DeepSeek V4.1 Flash 在 WorkBuddy 国际版免费至 10 月 31 日',
      'brief': 'WorkBuddy 宣布， DeepSeek V4.1 Flash 将继续在其平台上提供免费访问，持续至 10 月 31 日 。 WorkBuddy 表示，这一安排是应用户要求作出的。',
      'url': 'https://x.com/WorkBuddy_AI/status/2109673559710974130',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-10-13',
      'title': 'ZCode 推出邀请活动，奖励最高累计 100 天',
      'brief': 'ZCode 推出邀请好友活动，时间为 10 月 12 日至 11 月 13 日 ，奖励卡适用于 GLM-5.3-Flash 。',
      'url': 'https://mp.weixin.qq.com/s/MFWF1gyC1Jq9FFBXZOarCA',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-10-13',
      'title': 'OpenAI Agents API 新增沙箱预热',
      'brief': 'OpenAI 的 Agents API 新增沙箱预热功能，允许开发者在创建 Agent 会话前安装依赖包、加载文件并运行初始化命令，减少任务开始时的等待。',
      'url': 'https://developers.openai.com/api/docs/guides/agents-api/environments/prewarmed',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-10-13',
      'title': 'Karpathy：LLM 能力认知差距正在扩大',
      'brief': 'Andrej Karpathy 表示，人们对 LLM 能力的认知差距正在扩大，已不只是两群人互不理解，而是形成逐层收窄的漏斗。',
      'url': 'https://x.com/karpathy/status/2109361546505966046',
      'source': '橘鸦AI早报',
      'type': '技术与洞察'
    },
    {
      'date': '2026-10-13',
      'title': 'Anthropic：小模型或数月内能实现自我复制',
      'brief': 'Anthropic 发布 AI 自我复制 研究，认为小型模型可能在数月内具备在商用 物联网 设备上自主部署和传播的能力。',
      'url': 'https://www.anthropic.com/research/self-replicating-ai',
      'source': '橘鸦AI早报',
      'type': '技术与洞察'
    },
    {
      'date': '2026-10-12',
      'title': 'GPT-6.1 Sol 在 Codex 中的默认上下文升至 500k',
      'brief': 'OpenAI Codex 负责人 Tibo 表示， GPT-6.1 Sol 通过 Codex 和 Work 使用时的默认上下文长度已从 272k 提升至 500k ，增幅约八成。他表示更长默认值能减少 compaction 的出现，更好支撑需要长时间保留大量上下文和细节的任务，该数值经过仔细测试，适合大多数用户。用户仍可自行调高或调低， GPT-6.1 Sol 最大上下文长度为 1M 。他还表示，此次调整后从订阅额度扣费时， GPT-6…',
      'url': 'https://x.com/thsottiaux/status/2109430343346581527',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-10-12',
      'title': 'Claude 为部分付费用户发放 100 美元 Projects 初始额度',
      'brief': 'Claude 近日向已通过 Projects 测试申请的订阅用户账户发放了最高 一百美元 的 Projects 初始使用额度。',
      'url': 'https://x.com/ziwenxu_/status/2108994420398051815',
      'source': '橘鸦AI早报',
      'type': '产品应用'
    },
    {
      'date': '2026-10-12',
      'title': '马斯克展示 SpaceX 人工智能部门更名为 SpaceXSI',
      'brief': '马斯克 在社交平台 X 上公开了一张已获得官方认证的主页截图，图片显示 SpaceX 的人工智能部门平台在 X 上的 ID 改为了 SpaceXSI ，名称改为 SpaceX Super Intelligence 。该认证账号已带有企业金色认证标识，标志着新名称正式启用。',
      'url': 'https://x.com/elonmusk/status/2109012639049244981',
      'source': '橘鸦AI早报',
      'type': '行业动态'
    },
    {
      'date': '2026-10-12',
      'title': '谷歌灰度测试新模型 Gemini 4 Argon',
      'brief': '据用户反馈， 谷歌 已在 Gemini 网页端和 Antigravity 悄然开启下一代旗舰模型 Gemini 4 Argon 的灰度测试。',
      'url': 'https://linux.do/t/topic/3008137',
      'source': '橘鸦AI早报',
      'type': '前瞻与传闻'
    }
  ]
};
