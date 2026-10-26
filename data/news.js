// AI 热点新闻快照(由 scripts/lib/news.js 每日抓取维护,每日 2 次)
// 来源:「橘鸦AI早报」官方 RSS https://daily.juya.uk/rss.xml(每日整篇早报拆成逐条);仅保留最近 2 天
// 字段说明:date=新闻日期(UTC);title=标题;brief=简要;url=详情链接;source=来源;type=新闻类型(早报正文分类)
window.NEWS = {
  'updated': '2026-10-26',
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
      'date': '2026-10-26',
      'title': 'Kimi.ai 致歉 K3.1 Pro 限流并重置用量',
      'brief': 'Kimi.ai 就 K3.1 Pro 订阅方案出现限流及不必要的额度消耗致歉，称这些问题由自身造成，本应更早修复。该公司为所有档位的订阅用户进行一次性用量重置，最多恢复相当于月度额度 25% 的用量；如果已用量低于 25% ，则将已用量重置为零。',
      'url': 'https://x.com/Kimi_Moonshot/status/2114450610724708492',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-10-26',
      'title': 'OpenAI 28 天计划第 20 天全量重置，Tibo 称改动已传播完成',
      'brief': 'OpenAI Codex 与 ChatGPT 团队的 Tibo 表示， 28 天 计划的第 20 天 是全量重置日，相关改动随后已全部传播完成。',
      'url': 'https://x.com/thsottiaux/status/2114237083652882932',
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
    },
    {
      'date': '2026-10-25',
      'title': 'WorkBuddy 内测技能与专家付费功能',
      'brief': 'WorkBuddy 推出内测中的「收入变现」功能，开发者可在开放平台开通后发布付费技能和专家，用户购买后方可使用。',
      'url': 'https://open.workbuddy.cn/docs/monetization',
      'source': '橘鸦AI早报',
      'type': '产品应用'
    },
    {
      'date': '2026-10-25',
      'title': 'Qoder 为 1024 活动额外开启一轮补给',
      'brief': 'Qoder 宣布， 1024 Community Boost 活动原定的三轮补给提前全部解锁并发放，因此额外开启一轮，用户再共同完成 100,000 次助力即可解锁神秘补给包，具体内容将在解锁时公布。',
      'url': 'https://qoder.com/community-boost',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-10-25',
      'title': 'Claude Code 团队成员 Thariq、Anthony Morris 分别宣布离职',
      'brief': 'Anthropic 的 Claude Code 团队成员 Thariq 和 Anthony Morris 分别发文宣布离职。',
      'url': 'https://x.com/trq212/status/2113844051938054167',
      'source': '橘鸦AI早报',
      'type': '行业动态'
    },
    {
      'date': '2026-10-25',
      'title': '英国公布数亿英镑 AI 投资计划',
      'brief': '英国公布数亿英镑 AI 投资计划，支持本土产业、应对 AI 风险，并推动就业和增长机会惠及全国。',
      'url': 'https://www.gov.uk/government/news/chancellor-unveils-britains-ambitious-plan-for-ai',
      'source': '橘鸦AI早报',
      'type': '行业动态'
    }
  ]
};
