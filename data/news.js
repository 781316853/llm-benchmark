// AI 热点新闻快照(由 scripts/lib/news.js 每日抓取维护,每日 4 次)
// 来源:「橘鸦AI早报」官方 RSS https://daily.juya.uk/rss.xml(每日整篇早报拆成逐条);仅保留最近 2 天
// 字段说明:date=新闻日期(UTC);title=标题;brief=简要;url=详情链接;source=来源;type=新闻类型(早报正文分类)
window.NEWS = {
  'updated': '2026-11-25',
  'retentionDays': 2,
  'types': [
    '要闻',
    '开发生态',
    '模型发布',
    '产品应用'
  ],
  'items': [
    {
      'date': '2026-11-25',
      'title': 'ChatGPT 合并 Chat 和 Work，部分用户率先体验',
      'brief': 'OpenAI 团队成员表示， ChatGPT 开始向一小部分 Pro 用户推出合并后的 Chat 和 Work 模式。',
      'url': 'https://x.com/thsottiaux/status/2125284868414394550',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-11-25',
      'title': 'OpenAI 员工宣布 Business 套餐 Fast mode 免费至年底',
      'brief': 'OpenAI 员工 Tibo 发帖称， ChatGPT Business 用户可获得一次 banked reset ，并可免费使用 Fast mode 至 12 月 31 日 。他的个人资料显示其在 OpenAI 从事 Codex 与 ChatGPT 相关工作。',
      'url': 'https://x.com/thsottiaux/status/2125299248782778588',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-11-25',
      'title': 'OpenAI 改进 Dots 审核，减少任务中的额外审批',
      'brief': 'OpenAI 改进了 Dots 的自动审核安全检查，减少执行任务时要求用户审批的次数。',
      'url': 'https://x.com/frits__vp/status/2125285321491259626',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-11-25',
      'title': 'Antigravity 新版非必要审批减半，Neon 任务快 17%',
      'brief': 'Antigravity 负责人 Varun Mohan 发文称， Antigravity 新版本把 Auto 模式中的非必要审批减少了 50% ，带来一次明显的体验提升，之后还会在这一方向带来更多改进。',
      'url': 'https://x.com/_mohansolo/status/2125337132021780867',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-11-25',
      'title': 'Anthropic 推出测试功能：artifacts 可装成桌面应用',
      'brief': 'Anthropic 为 Claude 推出 Install as app 功能的测试版，Mac 和 Windows 用户可把 Claude 生成的 artifacts 安装成桌面应用。应用在独立窗口打开，可使用 Claude 和 connectors ，经授权可发送通知或添加菜单栏项目，并随原 artifact 编辑自动更新。',
      'url': 'https://claude.com/resources/articles/install-as-app',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-11-25',
      'title': 'Cognition 发布编码模型 SWE-2.1',
      'brief': 'Cognition 发布编码模型 SWE-2.1 ，称其基于 Kimi K3 用纯强化学习训练，在 FrontierCode 2.0 、 Terminal-Bench 4.1 等多项基准上较 SWE-2 大幅提升。新模型已在 Devin Cloud 、 Devin Desktop 和 Devin CLI 上线，未来两周对 Devin Pro 、 Max 和 Teams 免费。',
      'url': 'https://cognition.com/blog/swe-2-1',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-11-25',
      'title': '腾讯混元发布并开源第三代翻译模型 Hy MT3',
      'brief': '腾讯混元 发布并开源第三代翻译模型 Hy MT3 ，提供 1.8B 、 7B 、 30B-A3B 三个尺寸，支持语种从 38 种 增至 102 种 ，已上线 Hy 翻译 App 和小程序。',
      'url': 'https://huggingface.co/collections/tencent/hy-mt3',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-11-25',
      'title': 'LlamaIndex 开放文档解析模型 OCRia-1 权重',
      'brief': 'LlamaIndex 宣布在 Hugging Face 和 Ollama 开放文档解析模型 OCRia-1 的权重。 OCRia-1 是基于 Qwen3.5-4B 的 4B 视觉语言模型，能把页面图像转成 Markdown，表格和图表数据写成 HTML 表格。 LlamaIndex 称其为两个 ParseBench 榜单上得分最高的开放权重模型； LlamaIndex CEO Jerry Liu 称，其准确率与成本在多个基准上处于 4B…',
      'url': 'https://ollama.com/llamaindex/ocria-1',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-11-25',
      'title': '百灵大模型发布并开源 Ling-3.2-air',
      'brief': '百灵大模型团队发布并开源 Ling-3.2-air ，权重已上架 Hugging Face 和 ModelScope 。',
      'url': 'https://huggingface.co/inclusionAI/Ling-3.2-air',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-11-25',
      'title': '蚂蚁百灵团队发布并开源生理信号基础模型 LingSante-Pulse',
      'brief': '蚂蚁百灵团队 发布生理信号基础模型 LingSante-Pulse ，已按 MIT 许可证开放权重与代码。该模型在超过 15 万小时 多场景生理数据上预训练，用单个冻结编码器统一处理心电、脑电、肌电等信号，并支持连续血糖（ CGM ）分析，权重可在 Hugging Face 获取。',
      'url': 'https://huggingface.co/inclusionAI/LingSante-Pulse-1.0',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-11-24',
      'title': 'ChatGPT 宣布 12 月 23 日下线 GPT-5.6 Sol 与 Terra',
      'brief': 'ChatGPT 官方在 X 上发文宣布，将于 12 月 23 日 在 Chat 服务中下线 GPT-5.6 Sol ，并在 Work 和 Codex 服务中下线 GPT-5.6 Sol 与 Terra 两款模型。',
      'url': 'https://x.com/ChatGPT/status/2124981905380569283',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-11-24',
      'title': 'OpenAI：ChatGPT Business 新工作空间可享双倍用量',
      'brief': 'OpenAI 的 Codex 与 ChatGPT 团队成员 Tibo 在 X 上宣布， 11 月 30 日 前创建的 ChatGPT Business 工作空间，可在 12 月 31 日 前获得双倍包含用量，适用所有席位类型。',
      'url': 'https://x.com/thsottiaux/status/2124922313019953319',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-11-24',
      'title': 'Antigravity 开放 Orchestrator 模型组合自定义',
      'brief': 'Varun Mohan 在 X 平台表示， Antigravity 用户现在可为 Orchestrator 显式设置模型组合和思考级别，他自己已设为 Neon High 与 Hydrogen High 。',
      'url': 'https://antigravity.google/docs/models',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-11-24',
      'title': '谷歌为 Gemini API 推出文件切片控制，仅按实际处理内容付费',
      'brief': '谷歌 宣布 Gemini API 新增文件切片控制功能，直接支持 PDF 、 Word 、 PowerPoint 、 Excel 及 OpenDocument 文件。',
      'url': 'https://blog.google/innovation-and-ai/technology/developers-tools/file-slicing-controls/',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-11-24',
      'title': 'Anthropic 重新设计 Claude Code 桌面端侧边栏',
      'brief': 'ClaudeDevs 宣布重新设计 Claude Code 桌面端侧边栏。 Files 、 Changes 、 Terminal 等工具现在以标签页形式显示在会话旁边，用户可以移动标签并排查看多个工具，也可以把标签弹出为独立窗口。',
      'url': 'https://x.com/ClaudeDevs/status/2124978802006851961',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-11-24',
      'title': 'Claude 的 Connectors 与 Skills 整合为 plugins',
      'brief': 'Anthropic 宣布将 Claude 的 Connectors 与 Skills 整合为 plugins ，用户此后通过同一种方式连接工具或教 Claude 新技能。',
      'url': 'https://support.claude.com/en/articles/13837440-use-plugins-in-claude',
      'source': '橘鸦AI早报',
      'type': '产品应用'
    }
  ]
};
