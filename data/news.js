// AI 热点新闻快照(由 scripts/lib/news.js 每日抓取维护,每日 4 次)
// 来源:「橘鸦AI早报」官方 RSS https://daily.juya.uk/rss.xml(每日整篇早报拆成逐条);仅保留最近 2 天
// 字段说明:date=新闻日期(UTC);title=标题;brief=简要;url=详情链接;source=来源;type=新闻类型(早报正文分类)
window.NEWS = {
  'updated': '2026-11-12',
  'retentionDays': 2,
  'types': [
    '要闻',
    '开发生态',
    '模型发布'
  ],
  'items': [
    {
      'date': '2026-11-12',
      'title': 'Google 推出 Gemini Decisions 1 模型',
      'brief': 'Google 推出由新模型 Gemini Decision 1 驱动的 Gemini Decisions API ，通过 Gemini API 在 Google AI Studio 开放，面向工具选择、政策检查、模型路由这类只需在有限选项中做决定的场景。',
      'url': 'https://blog.google/innovation-and-ai/technology/developers-tools/gemini-decisions-api/',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-11-12',
      'title': '通义千问宣布 Qwen4 即将推出，预览版已可试用',
      'brief': '阿里通义千问 宣布新一代模型 Qwen4 即将推出，官方称其知识理解更深入、世界感知更立体，编程与 Agent 能力更强，还显著提升 EDA 、 CAD 、 Blender 、 UE5 等专业软件的操作能力。预览版 Qwen4-Max 已在阿里的 Token Plan 开放，个人版提供 Lite 到 Pro 四档套餐，月价 39 元到 312 元 ；用户也可在 QwenWork 、 Qoder 、 Qwen APP 和 QwenStud…',
      'url': 'https://mp.weixin.qq.com/s/J_zbVHa2R3mmY5KD4v3-bw',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-11-12',
      'title': 'OpenAI 成员暗示：周四或有 Codex 储备重置',
      'brief': 'OpenAI Codex 团队成员 Tibo 在 X 上发文，称已经有一段时间没有进行重置，也许自己该走出地下室了。',
      'url': 'https://x.com/thsottiaux/status/2120410006273380750',
      'source': '橘鸦AI早报',
      'type': '要闻'
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
      'title': 'Runway 开放机器人模型 Praxis-1 权重',
      'brief': 'Runway 向所有人开放世界动作模型 Praxis-1 的权重和代码，采用 Apache 2.0 许可，支持商业使用。这个 270 亿 参数模型能同时预测视频和机器人动作，开发者可在自己的硬件上运行和微调。',
      'url': 'https://runway.com/news/company-news/praxis-1-is-now-available',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-11-12',
      'title': '小红书升级语音编辑模型 dots.tts.edit',
      'brief': '小红书 升级发布开源语音编辑模型 dots.tts.edit V1.1 ，新增局部风格描述编辑能力，支持对已有录音中的词句和声音进行局部修改。用户可选中转录文本，设置文字修改或声音参数，一次生成多处编辑结果。',
      'url': 'https://github.com/studio-dots-ai/dots.tts',
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
    },
    {
      'date': '2026-11-11',
      'title': '谷歌正式开放模型 Gemini 4 Carbon',
      'brief': '谷歌宣布正式开放 Gemini 4 Carbon 模型，称其为目前能力最强的模型，主打网络安全、长周期智能体工作流以及复杂软件工程与科研推理。该模型此前已先行公布，并曾通过 Fairwind Program 向部分网络安全防御人员开放，此次面向所有付费开发者和企业开放 API 。',
      'url': 'https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-carbon-now-available/',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-11-11',
      'title': 'MiniMax 发布 H3-Image 并开放权重',
      'brief': 'MiniMax 发布基于 H3 的图像生成模型 H3-Image ，并开放模型权重。模型支持文字生图、图像编辑和参考图生图，最多可使用 16 张 参考图，输出可达 4096×4096 像素 ，约 1600 万像素 。',
      'url': 'https://www.minimax.io/blog/minimax-h3-image',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-11-11',
      'title': 'Google Antigravity 推出 /swarm 预览，多 agent 协作并行开发',
      'brief': 'Google Antigravity 推出新的命令 /swarm ，目前处于预览阶段，覆盖 Antigravity App 和 Antigravity CLI。',
      'url': 'https://antigravity.google/docs/swarm',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-11-11',
      'title': '美团 LongCat 2.5 在 OpenCode 免费两周',
      'brief': 'OpenCode 宣布， 美团 的 LongCat 2.5 模型目前在平台免费开放两周，支持 1M 上下文、多模态输入和零数据保留。',
      'url': 'https://x.com/opencode/status/2119789096503746751',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    }
  ]
};
