// AI 热点新闻快照(由 scripts/lib/news.js 每日抓取维护,每日 2 次)
// 来源:「橘鸦AI早报」官方 RSS https://daily.juya.uk/rss.xml(每日整篇早报拆成逐条);仅保留最近 2 天
// 字段说明:date=新闻日期(UTC);title=标题;brief=简要;url=详情链接;source=来源;type=新闻类型(早报正文分类)
window.NEWS = {
  'updated': '2026-10-24',
  'retentionDays': 2,
  'types': [
    '要闻',
    '开发生态',
    '模型发布'
  ],
  'items': [
    {
      'date': '2026-10-24',
      'title': '月之暗面发布 Kimi K3.1 Pro',
      'brief': '月之暗面 发布 K3.1 系列首个模型 Kimi K3.1 Pro 。这款 3 万亿级 参数模型支持 100 万 token 上下文，重点提升代码、 3D 创作、金融研究和长程 Agent 能力；同步推出的高速版 Kimi K3.1 Pro Highspeed 输出速度约为标准版的 2 至 3 倍 。',
      'url': 'https://www.kimi.ai/blog/kimi-k3-1-pro',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-10-24',
      'title': 'Codex 28 天改进第 18、19 天',
      'brief': 'OpenAI 的 Codex 28 天 改进计划第 18 天 ， Tibo 宣布将重置额度，并已于今日凌晨完成。',
      'url': 'https://x.com/thsottiaux/status/2113492187770175603',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-10-24',
      'title': 'ZCode 推出限时免费 token 活动',
      'brief': 'ZCode 宣布面向 1024 程序员节推出限时免费 token 活动，共提供 20 万份 额度包、总计 5 亿 token ，先到先得，其中 GLM-5.3 额度为 2 亿 token ， GLM-5.3-Flash 额度为 3 亿 token 。',
      'url': 'https://mp.weixin.qq.com/s/HlKksm48CSf6Ed-Yo04BFg',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-10-24',
      'title': 'Qoder 模型限免再延长 7 天',
      'brief': 'Qoder 宣布， DeepSeek-Flash 在 Qoder 中的免费使用期限再延长 7 天 ，至 10 月 31 日 。',
      'url': 'https://mp.weixin.qq.com/s/_l2bquNPCiQ_F1hm0eNYFA',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-10-24',
      'title': 'Google Pro 用户反馈 Antigravity 可用 Argon',
      'brief': '据用户反馈， Antigravity 部分 Pro 用户此前无法使用的 Gemini 4 Argon 和 Claude Opus 5.5 现可选择，相关截图显示两款模型出现在模型菜单中。',
      'url': 'https://antigravity.google/docs/models',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-10-24',
      'title': 'Cursor 新增桌面控制能力，可测试开发中的功能',
      'brief': 'Cursor 宣布新增 Computer Use 能力， Agent 可在桌面应用中点击、输入，操作 iOS Simulator 等应用来测试自己开发的功能，而不只是在浏览器中操作。',
      'url': 'https://x.com/cursor_ai/status/2113661506634305834',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-10-24',
      'title': 'MiniMax 开放 M3.1 Flash 权重',
      'brief': 'MiniMax 宣布开放 M3.1 Flash 模型权重，用户可通过 Hugging Face 和魔搭社区下载，Together AI 同步上线该模型。',
      'url': 'https://huggingface.co/MiniMaxAI/MiniMax-M3.1-Flash',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-10-24',
      'title': 'Seedance 2.5 4K 上线，目前限部分企业试用',
      'brief': '火山引擎 发布 Seedance 2.5 4K 版本，目前仅供部分企业客户试用，后续或将逐步扩大开放范围。该模型支持 Draft （样片）模式，用户可先用 480P 样片验证分镜、打磨镜头，确定效果后再生成 4K 正片。',
      'url': 'https://bjnews.com.cn/detail/1792642976129728.html',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-10-24',
      'title': 'NVIDIA 发布小模型 Nemotron-3.5',
      'brief': 'NVIDIA 推出小型开放模型 Nemotron-3.5-Bolt-E4B-4GB ，面向本地语音与设备助手、互动角色及机器人，重点支持多轮对话和工具调用。该模型基于 Gemma-4-E4B-it 后训练而来，总参数量 80 亿 、有效参数量 40 亿 ，支持最高 64K token 上下文，据 Unsloth 的部署指南可在约 4GB 显存或约 6GB 系统内存下运行。',
      'url': 'https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-10-24',
      'title': '腾讯混元开源交互式视频世界模型 Hy-Nomas',
      'brief': '腾讯混元 发布并开源交互式视频世界模型 Hy-Nomas ，支持通过文本提示词和相机轨迹进行自由形式交互。',
      'url': 'https://hy-nomas.hy.tencent.com/',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-10-24',
      'title': 'Block 发布纯语音训练模型 Dessa',
      'brief': 'Block 发布全双工语音模型 Dessa ，称其仅使用人类语音对话从零训练，未使用文本数据或预训练模型。',
      'url': 'https://block.xyz/dessa',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    }
  ]
};
