// AI 热点新闻快照(由 scripts/lib/news.js 每日抓取维护,每日 2 次)
// 来源:「橘鸦AI早报」官方 RSS https://daily.juya.uk/rss.xml(每日整篇早报拆成逐条);仅保留最近 2 天
// 字段说明:date=新闻日期(UTC);title=标题;brief=简要;url=详情链接;source=来源;type=新闻类型(早报正文分类)
window.NEWS = {
  'updated': '2026-10-27',
  'retentionDays': 2,
  'types': [
    '要闻',
    '开发生态',
    '模型发布',
    '技术与洞察',
    '产品应用',
    '行业动态'
  ],
  'items': [
    {
      'date': '2026-10-27',
      'title': 'OpenAI 发布 GPT-6.1 Terra，主打电脑操作',
      'brief': 'OpenAI 发布 GPT-6.1 Terra ，这是一款侧重视觉推理、精确电脑操作和自然写作的高效模型。即日起， ChatGPT Work 和 Codex 的所有 Plus、Pro、Enterprise 和 Edu 用户可以使用，开发者可通过 API 以 gpt-6.1-terra 调用，标准价格为每百万输入 token 1 美元 、输出 5 美元 ，比 GPT-5.6 Terra 低 50% 。',
      'url': 'https://openai.com/index/introducing-gpt-6-1-terra/',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-10-27',
      'title': 'Tibo：Codex 改进计划第 22 天，Terra 用量为 Sol 的 2 倍',
      'brief': '在 Codex 的 28 天 改进计划第 21 天 ， OpenAI 成员 Tibo 发帖称，当天的重置已生效。',
      'url': 'https://x.com/thsottiaux/status/2114588174249071102',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-10-27',
      'title': 'OpenAI 宣布三项科学发现，邀请学界审查',
      'brief': 'OpenAI 宣布，其模型在数学、计算机科学和物理学领域取得 三项 新发现，并邀请外部专家组织协作组审查和解释结果。',
      'url': 'https://openai.com/index/building-scientific-understanding-with-academic-communities/',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-10-27',
      'title': 'Anthropic 提交 S-1，拟在纳斯达克上市代码 ANT',
      'brief': 'Anthropic, PBC 宣布向美国证券交易委员会（SEC）提交 S-1 注册声明，拟首次公开发行 A 类普通股，并已申请在纳斯达克全球精选市场上市，股票代码 ANT ，发行股数和价格区间尚未确定。',
      'url': 'https://anthropic.com/news/s1-sec',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-10-27',
      'title': 'ZCode 晚间活动每夜提供 3 亿免费 token',
      'brief': 'ZCode 宣布，每天向每名用户提供 3 亿 免费的 GLM-5.3-Flash token。',
      'url': 'https://x.com/zcode_ai/status/2114762939421139426',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-10-27',
      'title': 'Vercel CLI 可搜索 Connect 目录中 1000 多项服务',
      'brief': 'Vercel Developers 宣布，用户及其 agent 现可通过 CLI 发现 Vercel Connect 目录中的 1000 多项服务。',
      'url': 'https://vercel.com/changelog/discover-1000-services-on-vercel-connect-from-the-cli',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-10-27',
      'title': '豆包电脑版推出签到领额度活动，周一翻倍',
      'brief': '豆包 推出“豆包天天领额度活动”，仅在 豆包电脑版 与 豆包工作电脑版 开展，两端的签到和日常任务进度打通，奖励不重复发放。',
      'url': 'https://doubao.com/pc/agent-explore',
      'source': '橘鸦AI早报',
      'type': '产品应用'
    },
    {
      'date': '2026-10-27',
      'title': 'Anthropic 发布 Claude for Nonprofits 插件，覆盖募款与招聘',
      'brief': 'Anthropic 发布 Claude for Nonprofits 插件，这是一组与约 30 家非营利组织共同打造的技能和连接器，可帮助团队结合自身背景与政策设置 Claude ，支持从调研到报告的募款工作，并分担运营事务。',
      'url': 'https://claude.com/resources/articles/expanding-claude-for-nonprofits',
      'source': '橘鸦AI早报',
      'type': '产品应用'
    },
    {
      'date': '2026-10-27',
      'title': 'OpenAI 汇总发布说明，支持搜索和订阅',
      'brief': 'Derrick Choi 表示， OpenAI 将 ChatGPT 、 Codex 和 API 的发布说明汇总到了一个页面。',
      'url': 'https://openai.com/products/release-notes',
      'source': '橘鸦AI早报',
      'type': '产品应用'
    },
    {
      'date': '2026-10-27',
      'title': '腾讯混元发布同声传译模型 Hy-SimulMT',
      'brief': '腾讯混元 发布实时同声传译大模型 Hy-SimulMT ，支持中文与英文之间的双向语音到语音翻译，模型边听边译，同步给出译文文字与语音，并支持实时音色克隆。',
      'url': 'https://hy.tencent.com/model/open-source-model/detail?id=hy-simulmt',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-10-27',
      'title': 'OpenAI 发布 Signals 数据，展示近 100 国 ChatGPT 工作用途',
      'brief': 'OpenAI 经济研究部门发布 OpenAI Signals 数据，涵盖近 100 个国家的 165 项工作活动，按季度记录 2025 年第一季度至 2026 年第三季度 用户用 ChatGPT 处理工作的情况。研究人员可以比较不同国家的使用差异、追踪变化，并与其他经济指标对照。',
      'url': 'https://openai.com/index/chatgpt-expanding-world-of-work',
      'source': '橘鸦AI早报',
      'type': '技术与洞察'
    },
    {
      'date': '2026-10-27',
      'title': 'Artificial Analysis 推出 Code2Video-AA 视频评测',
      'brief': 'Artificial Analysis 与 HeyGen 合作推出 Code2Video-AA ，这是 HeyGen Code2Video Bench 的独立实现，用来评测模型把产品或品牌营销 Brief 写成视频的能力。',
      'url': 'https://artificialanalysis.ai/evaluations/code2video-aa',
      'source': '橘鸦AI早报',
      'type': '技术与洞察'
    },
    {
      'date': '2026-10-26',
      'title': 'Kimi.ai 致歉 K3.1 Pro 限流并重置用量',
      'brief': 'Kimi.ai 就 K3.1 Pro 订阅方案出现限流及不必要的额度消耗致歉，称这些问题由自身造成，本应更早修复。该公司为所有档位的订阅用户进行一次性用量重置，最多恢复相当于月度额度 25% 的用量；如果已用量低于 25% ，则将已用量重置为零。',
      'url': 'https://x.com/Kimi_Moonshot/status/2114450610724708492',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-10-26',
      'title': 'CapCut 插件将接入 ChatGPT，11 月开放测试',
      'brief': 'CapCut 宣布，视频编辑和生成插件即将接入 ChatGPT ，计划于 11 月 在移动端、桌面端和网页端开放测试。',
      'url': 'https://www.capcut.com/tools/capcut-x-codex',
      'source': '橘鸦AI早报',
      'type': '产品应用'
    },
    {
      'date': '2026-10-26',
      'title': 'OpenCode 披露 DeepSeek 推理机架运行数据',
      'brief': 'OpenCode 团队成员 dax 披露，新 GPU 机架上的 DeepSeek 推理配置在过去 24 小时 处理了 6.77 万亿 token ， p50 首 token 延迟为 1.16 秒 ， p50 吞吐为每秒 143 token 。',
      'url': 'https://x.com/thdxr/status/2114211145615626433',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-10-26',
      'title': 'Nanbeige 开源 33B 模型 Nanbeige4.3-33B',
      'brief': 'BOSS 直聘 LLM 团队 Nanbeige 开源 Nanbeige4.3-33B ，模型为 33B 参数的 dense 架构，支持 512K 上下文，采用 Apache-2.0 协议。',
      'url': 'https://x.com/nanbeige/status/2114328933181333798',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-10-26',
      'title': 'Anthropic 建议企业将部分 subagent 并入主 agent 循环',
      'brief': 'Anthropic 近期在 Claude 博客建议，已在 Claude Platform 上构建多 subagent 的企业，可把路由、规划和领域 subagent 整合进主 agent 循环，通过 Skills 和工具搜索按需加载上下文与工具。',
      'url': 'https://claude.com/resources/articles/building-agents-when-to-fold-subagents-into-your-main-agent-loop',
      'source': '橘鸦AI早报',
      'type': '技术与洞察'
    },
    {
      'date': '2026-10-26',
      'title': 'Elvis Presley 歌曲权利方起诉 Anthropic，索赔约 4100 万美元',
      'brief': '据 Billboard 报道， Authentic Brands Group 旗下实体与其他 Elvis Presley （猫王）权利实体起诉 Anthropic ，指控其未经授权使用 274 首歌曲训练 Claude ，侵犯歌曲版权。',
      'url': 'https://www.billboard.com/pro/elvis-presley-estate-sues-suno-anthropic/',
      'source': '橘鸦AI早报',
      'type': '行业动态'
    }
  ]
};
