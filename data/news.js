// AI 热点新闻快照(由 scripts/lib/news.js 每日抓取维护,每日 4 次)
// 来源:「橘鸦AI早报」官方 RSS https://daily.juya.uk/rss.xml(每日整篇早报拆成逐条);仅保留最近 2 天
// 字段说明:date=新闻日期(UTC);title=标题;brief=简要;url=详情链接;source=来源;type=新闻类型(早报正文分类)
window.NEWS = {
  'updated': '2026-11-13',
  'retentionDays': 2,
  'types': [
    '要闻',
    '开发生态',
    '模型发布'
  ],
  'items': [
    {
      'date': '2026-11-13',
      'title': 'Google 推出 Gemini 4 Hydrogen',
      'brief': 'Google 发布 Gemini 4 Hydrogen ，主打日常编码和 Agent 任务。官方称，其完成任务比 Gemini 3.8 Flash 快 2.5 倍 。',
      'url': 'https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-hydrogen/',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-11-13',
      'title': 'Google Antigravity 推出 Orchestrator 选项',
      'brief': 'Google 在 Antigravity 中推出 Orchestrator 功能和 Gemini 4 Hydrogen 模型。',
      'url': 'https://antigravity.google/blog/gemini-4-hydrogen-in-google-antigravity',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-11-13',
      'title': 'Jensen Huang 辞任英伟达 CEO',
      'brief': '英伟达 董事会宣布， Jensen Huang 辞去总裁、CEO 及董事会成员职务，即刻生效。执行副总裁兼 CFO Colette Kress 出任临时 CEO，并继续保留 CFO 职务，直至公司任命永久人选。',
      'url': 'https://nvidianews.nvidia.com/news/nvidia-announces-ceo-transition',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-11-13',
      'title': 'ChatGPT dot 更新：支持自定义指令和行为规则',
      'brief': 'OpenAI 官方宣布， ChatGPT 的 dot 现已支持更快回复、更少术语和更好的任务跟进，并能遵循用户自定义指令。',
      'url': 'https://learn.chatgpt.com/docs/dots/controls',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-11-13',
      'title': 'Tibo 确认 banked reset 已开始发放',
      'brief': 'OpenAI Codex 与 ChatGPT 团队成员 Tibo 此前发文称，已经很久没有发放用量重置，也许自己该从地下室里出来了，并预告周四感觉颇有 codex 味道，或许适合发放一次 banked reset 。',
      'url': 'https://x.com/thsottiaux/status/2120999993079451919',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-11-13',
      'title': 'Inkling 2 Small 权重正式开放',
      'brief': 'Thinking Machines 宣布在 Hugging Face 以 Apache 2.0 许可开放 Inkling 2 Small 模型权重。该模型是多模态 MoE 模型，总参数 594B 、激活 17B ，支持图文输入与最长 1M token 上下文，提供 NVFP4 和 MXFP8 两种精度， NVFP4 版需至少 500GB 显存。',
      'url': 'https://x.com/thinkymachines/status/2120982625582195011',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-11-13',
      'title': 'IBM 发布 LLMON 标记语言降低提示注入风险',
      'brief': 'IBM 发布 LLMON 标记语言及 GitHub 工具库，并在 Hugging Face 开源基于 Granite 4.1 微调的 3B 、 8B 两个实验预览模型，采用 Apache 2.0 许可。',
      'url': 'https://huggingface.co/blog/ibm-granite/llmon-an-llm-native-markup-language-now-in-granite',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-11-13',
      'title': 'OpenAI 推出两款 AI 网络安全防御工具',
      'brief': 'OpenAI 在 Cyber at the Frontier 主题演讲中发布 Daybreak Red Team 和 Daybreak Defense Factory 两款网络安全工具。',
      'url': 'https://openai.com/zh-Hans-CN/cyber-at-the-frontier/',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-11-12',
      'title': 'Google DeepMind 发布 AlphaGenome 2',
      'brief': 'Google DeepMind 发布新一代 DNA 序列模型 AlphaGenome 2 ，可输入 100 万 字母长度的 DNA 序列和目标细胞状态，按细胞类型预测 DNA 变异的效应。该模型基于 68 种组织的超 1 亿 个单细胞图谱训练，该公司称其识别的可改变细胞基因表达的变异数量接近前代两倍；在覆盖 28 类原代免疫细胞的 TenK10K 数据集上，因果变异识别占比达 30% 、基因效应方向判断准确率达 43% ，初代 Alph…',
      'url': 'https://deepmind.google/blog/alphagenome-2-deciphering-how-cells-read-dna-to-better-understand-disease',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-11-12',
      'title': '上海创智学院开源 Nex-N2.6',
      'brief': '上海创智学院 宣布推出并开源多模态 agent 模型 Nex-N2.6 。模型基于 GLM-5.3-Flash 构建，参数量约 321B ，支持文本、图片和视频输入。 FP8 量化权重已在 GitHub 和 Hugging Face 开放。',
      'url': 'https://mp.weixin.qq.com/s/66z00kTlSRPMsc1jSDlX3Q',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-11-12',
      'title': '百度发布 ERNIE 5.5 Flash Preview，API 已上线千帆',
      'brief': '百度 发布 ERNIE 5.5 Flash Preview ，这是基于此前发布的 Base 模型的首个后训练版本。模型总参数 280B ，每 token 激活参数 14B ，支持 1M tokens 长上下文，百度称全新架构兼顾智能水平与推理效率，生成速度为每秒超过 200 tokens 。',
      'url': 'https://ernie.baidu.com/research',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-11-12',
      'title': '阿里发布 Qwen Code 1.0 Preview',
      'brief': '阿里 发布 Qwen Code 1.0 Preview ，把在 Qoder 中打磨的 Harness 能力融入同一套开源内核，代码继续采用 Apache 2.0 许可证，为开发者提供可嵌入自身产品的 Agent 运行基础。该项目提供终端 CLI 与 SDK ，集成 SubAgents 、 MCP 等特性，通过统一事件机制连接入口与任务，支持 OpenAI 、 Anthropic 、 Gemini 、 Qwen 等多协议模型接入与动态工作…',
      'url': 'https://mp.weixin.qq.com/s/CXUnh_CP0S4gKV5MYwWWtw',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-11-12',
      'title': 'Google Antigravity 推出 Browser use',
      'brief': 'Google Antigravity 宣布， Browser use 功能开始向 Antigravity 用户逐步推送，agent 可以通过浏览器查阅资料、与运行中的应用交互，并验证代码修复结果。',
      'url': 'https://antigravity.google/docs/browser',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-11-12',
      'title': 'Gemini API Managed Agents 支持接入自托管 Linux 沙箱',
      'brief': 'Google AI Studio 宣布，使用 Gemini API Managed Agents 的开发者现在可以接入自托管的 Linux 沙箱，让 agent 在自己控制的基础设施中执行工具操作。',
      'url': 'https://x.com/GoogleAIStudio/status/2120610219235660183',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    }
  ]
};
