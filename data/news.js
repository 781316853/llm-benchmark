// AI 热点新闻快照(由 scripts/lib/news.js 每日抓取维护,每日 2 次)
// 来源:「橘鸦AI早报」官方 RSS https://daily.juya.uk/rss.xml(每日整篇早报拆成逐条);仅保留最近 2 天
// 字段说明:date=新闻日期(UTC);title=标题;brief=简要;url=详情链接;source=来源;type=新闻类型(早报正文分类)
window.NEWS = {
  'updated': '2026-10-22',
  'retentionDays': 2,
  'types': [
    '要闻',
    '开发生态',
    '模型发布',
    '产品应用'
  ],
  'items': [
    {
      'date': '2026-10-22',
      'title': 'Claude Duet 开放研究预览，主动提醒并在后台办事',
      'brief': 'Anthropic 开放 Claude Duet 研究预览。这款基于 Claude Opus 5.5 的主动式 Agent 应用面向专业人士和小企业主，每天早晨汇总已连接应用中最重要的事项，此后每隔几小时检查一次，只在需要用户关注时发消息；用户可用文字或语音交办安排会议、制作仪表盘、财务预测等任务，它在自带浏览器的云端虚拟机中执行，手机和电脑无需开机。',
      'url': 'https://claude.com/resources/articles/claude-duet',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-10-22',
      'title': 'Tibo 称 Codex 登录用户缓存永久保留',
      'brief': 'OpenAI Codex 连续 28 天 改进计划进入第 16 天 。',
      'url': 'https://developers.openai.com/api/docs/guides/prompt-caching',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-10-22',
      'title': 'PHP 两项严重漏洞获修复，OpenAI 协助发现与修复',
      'brief': 'OpenAI 披露，其 Patch the Planet 计划协助研究人员发现 PHP 严重安全漏洞，并参与了持续约 2 个月 的协调修复。',
      'url': 'https://openai.com/index/coordinated-disclosure-of-critical-vulnerabilities',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-10-22',
      'title': 'eMudhra 因弱密钥撤销 8 枚中间证书',
      'brief': 'eMudhra 披露， 8 枚中间 CA 证书因密钥生成缺陷被撤销； Mozilla 的调查显示，相关私钥均为小于 256 的整数，可被轻易恢复，其中 6 枚证书用于 TLS 、 2 枚用于代码签名。',
      'url': 'https://emudhra.com/en/post/certificate-security-incident',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-10-22',
      'title': 'LiteLLM 遭供应链攻击，恶意版本下架',
      'brief': 'LiteLLM 披露发布流水线遭供应链攻击，攻击者发布了含恶意代码的 1.107.0 版本，目前事件得到控制，调查仍在进行。受影响的 PyPI 软件包在线约 2 小时 后被撤下， Docker Hub 和 GHCR 上涉及 v1.107.0 、 latest 、 main-latest 、 main-stable 标签的恶意镜像也被撤下或替换。',
      'url': 'https://docs.litellm.ai/blog/security-incident-oct-21-2026',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-10-22',
      'title': 'Qoder 国际版新增 Lite 档，续费按档位加赠',
      'brief': 'Qoder 国际版推出 Lite 订阅方案，每月 10 美元 含 1,000 Credits ，面向按需使用、用量不大的用户，保留全系产品功能，但可用模型范围和每月用量与其他付费档位不同。',
      'url': 'https://docs.qoder.cn/events/bogo',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-10-22',
      'title': 'Claude API 推出自 2023 年以来首个正式新版',
      'brief': 'Anthropic 发布 Claude API 2026-10-21 版本，称这是其自 2023 年以来首次正式发布 API 版本，并计划提高发布频率，让开发者在新模型要求变更前处理不兼容变化； 2023-06-01 版本仍未弃用。',
      'url': 'https://platform.claude.com/docs/en/release-notes/overview',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-10-22',
      'title': 'Recursive 发布开源编码模型 Flint',
      'brief': 'AI 创业公司 Recursive 发布面向本地编码 Agent 的开源模型 Flint ，权重以 Apache 2.0 许可证开放，支持 llama.cpp 等工具和框架。',
      'url': 'https://recursive.com/updates/introducing-recursive-flint',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-10-22',
      'title': 'Baseten 发布并开源两款决策模型',
      'brief': 'Baseten 发布并开源决策模型 mammoth-1 和 elephant-1 ，参数量分别为 270 亿 和 90 亿 。两款模型不生成文本，而是返回各候选答案的概率，可用于工单分流、垃圾邮件和钓鱼检测等任务。',
      'url': 'https://www.baseten.co/blog/the-best-decision-models-in-the-world-mammoth-1-and-elephant-1/',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-10-22',
      'title': 'IBM 发布 20 亿参数语音新模型',
      'brief': 'IBM 在 Hugging Face 发布 20 亿参数 语音模型 granite-speech-5.0-2b ，并更新系列中的 Turbo CTC 和 4.1 2B Plus 模型，均采用 Apache 2.0 许可证。',
      'url': 'https://huggingface.co/blog/ibm-granite/granite-speech-5',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
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
    }
  ]
};
