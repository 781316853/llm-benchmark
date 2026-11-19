// 数据源:Humanity's Last Exam(前沿知识广度,更新于 2026-11-18)
// 来源:https://www.datalearner.com/api/get-benchmark-detail/hle(主渠道,厂商官方发布全量无工具成绩;页面首屏仅 30 条) · https://benchlm.ai/benchmarks/aahle(AA 无工具复测镜像)
// 补充:https://aireleasetracker.com/benchmark/hle-no-tools(第三方聚合 T3,只补缺失模型)
// 官方:https://lastexam.ai/
// 渠道优先级:基准官方实测榜 > 厂商官方发布(论文/发布页)> 第三方聚合与镜像;低层级仅补缺失模型与字段,不覆盖高层级分数
// 口径:统一无工具(闭卷)——datalearner 同模型只取「无工具」行(多条取最高),官方种子补充厂商 w/o tools 成绩,
//   AA 无工具复测仅补官方渠道未收录的模型;仅带工具分或未声明协议的条目已剔除,表内分数可直接比较。
// 字段说明:model=模型名;score=闭卷得分(%);org=厂商;size=参数量;context=上下文;cost=API 价格;src=数据来源渠道(datalearner/厂商官方种子/aa/aireleasetracker);protocol=工具口径(统一为无工具);protocolNote=口径原文/说明
// 用途:「权威基准测试」页展示 + 总览矩阵计分列,计入综合分与命中数(2026-11-15 起)。
window.HLE = {
  'source': 'Humanity\'s Last Exam',
  'url': 'https://www.datalearner.com/benchmarks/hle',
  'officialUrl': 'https://lastexam.ai/',
  'channelPolicy': '渠道优先级:基准官方实测榜 > 厂商官方发布(论文/发布页)> 第三方聚合与镜像;低层级仅补缺失模型与字段,不覆盖高层级分数',
  'updated': '2026-11-18',
  'refreshedAt': '2026-11-19 04:46',
  'stats': {
    'tasks': 2500,
    'entries': 282
  },
  'desc': 'Humanity\'s Last Exam(HLE):CAIS 与 Scale AI 推出的前沿知识广度基准,2500 道由各领域专家撰写、无网络可检索解的问题(数学/科学/人文学科等),目的在衡量模型逼近人类专家知识天花板;得分越高越好。本表统一为无工具(闭卷)口径:厂商明确标注无工具的条目优先,AA 无工具复测仅补官方渠道未收录的模型;仅带工具分或未声明协议的模型不收录,表内分数可直接比较。',
  'models': [
    {
      'model': 'Claude Fable 5.2',
      'org': 'Anthropic',
      'score': 73.2,
      'license': '不开源',
      'mode': '最高（无工具）',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 1,
      'protocolNote': '最高（无工具）'
    },
    {
      'model': 'Claude Opus 5.5',
      'org': 'Anthropic',
      'score': 61.3531,
      'license': '不开源',
      'mode': '最高（无工具） · Text only',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 2,
      'protocolNote': '最高（无工具） · Text only'
    },
    {
      'model': 'Claude Fable 5.1',
      'org': 'Anthropic',
      'score': 60.9,
      'license': '不开源',
      'mode': '最高（无工具）',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 3,
      'protocolNote': '最高（无工具）'
    },
    {
      'model': 'Claude Fable 5',
      'org': 'Anthropic',
      'score': 59,
      'license': '不开源',
      'mode': '深度思考模式（无工具）',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 4,
      'protocolNote': '深度思考模式（无工具）'
    },
    {
      'model': 'Gemini 4 Argon',
      'org': 'Google DeepMind',
      'score': 57.0899,
      'license': '不开源',
      'mode': '思考模式 High（无工具） · Text only',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 5,
      'protocolNote': '思考模式 High（无工具） · Text only'
    },
    {
      'model': 'Claude Sonnet 5.5',
      'org': 'Anthropic',
      'score': 56.9,
      'license': '不开源',
      'mode': '最高（无工具）',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 6,
      'protocolNote': '最高（无工具）'
    },
    {
      'model': 'Claude Mythos Preview',
      'org': 'Anthropic',
      'score': 56.8,
      'license': '不开源',
      'mode': '扩展（无工具）',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 7,
      'protocolNote': '扩展（无工具）'
    },
    {
      'model': 'Claude Opus 5',
      'org': 'Anthropic',
      'score': 56.3,
      'license': '不开源',
      'mode': '最高（无工具）',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 8,
      'protocolNote': '最高（无工具）'
    },
    {
      'model': 'GPT-6 Astra',
      'org': 'OpenAI',
      'score': 54.6803,
      'license': '不开源',
      'mode': '最高（无工具） · Text only',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 9,
      'protocolNote': '最高（无工具） · Text only'
    },
    {
      'model': 'Muse Wonder Full',
      'org': 'Facebook AI研究实验室',
      'score': 53.6145,
      'license': '不开源',
      'mode': '最高（无工具） · Text only',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 10,
      'protocolNote': '最高（无工具） · Text only'
    },
    {
      'model': 'GPT-6.1 Sol',
      'org': 'OpenAI',
      'score': 52.9194,
      'license': '不开源',
      'mode': '最高（无工具） · Text only',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 11,
      'protocolNote': '最高（无工具） · Text only'
    },
    {
      'model': 'Kimi K3.1 Pro',
      'org': 'Moonshot AI',
      'score': 52.456,
      'license': '有条件免费商用授权',
      'mode': '最高（无工具） · Text only',
      'protocol': '无工具',
      'src': 'datalearner',
      'sourceUrl': 'https://www.kimi.com/en/blog/kimi-k3-1-pro',
      'rank': 12,
      'protocolNote': '最高（无工具） · Text only'
    },
    {
      'model': 'Qwen4-Max',
      'org': '阿里巴巴',
      'score': 51.7,
      'license': '不开源',
      'mode': '最高（无工具）',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 13,
      'protocolNote': '最高（无工具）'
    },
    {
      'model': 'Muse Spark',
      'org': 'Facebook AI研究实验室',
      'score': 50.2,
      'license': '不开源',
      'mode': '深度思考（无工具、并行）',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 14,
      'protocolNote': '深度思考（无工具、并行）'
    },
    {
      'model': 'Muse Wonder',
      'org': 'Meta',
      'score': 50.1,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 15,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'Claude Opus 4.8',
      'org': 'Anthropic',
      'score': 49.8,
      'license': '不开源',
      'mode': '扩展（无工具）',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 16,
      'protocolNote': '扩展（无工具）'
    },
    {
      'model': 'MiMo-V2.6-Pro',
      'org': 'Xiaomi',
      'score': 49.4,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 17,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'Muse Spark 1.3',
      'org': 'Meta',
      'score': 48.7,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 18,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'Gemini 3 Deep Think - 2620',
      'org': 'Google DeepMind',
      'score': 48.4,
      'license': '不开源',
      'mode': '思考模式（无工具）',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 19,
      'protocolNote': '思考模式（无工具）'
    },
    {
      'model': 'MiniMax M3.1 Flash',
      'org': 'MiniMax',
      'score': 48,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 20,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'Gemini 3.7 Flash',
      'org': 'Google',
      'score': 47.9,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 21,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'GPT-6 Sol',
      'org': 'OpenAI',
      'score': 47.9,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 22,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'Gemini 3.8 Flash',
      'org': 'Google',
      'score': 47.8,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 23,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'Gemini 3.1 Pro',
      'org': 'Google',
      'score': 47,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 24,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'Claude Opus 4.7',
      'org': 'Anthropic',
      'score': 46.9,
      'license': '不开源',
      'mode': '扩展（无工具）',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 25,
      'protocolNote': '扩展（无工具）'
    },
    {
      'model': 'Step 5 Preview',
      'org': 'StepFunAI',
      'score': 46.5,
      'license': '有条件免费商用授权（Apache-2.0 风格，附署名与商用许可条件）',
      'mode': '思考模式 High（无工具）',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 26,
      'protocolNote': '思考模式 High（无工具）'
    },
    {
      'model': 'Gemini 3.1 Pro Preview',
      'org': 'Google DeepMind',
      'score': 46.44,
      'license': '不开源',
      'mode': '思考模式 High（无工具）',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 27,
      'protocolNote': '思考模式 High（无工具）'
    },
    {
      'model': 'ERNIE 5.5 Flash Preview',
      'org': '百度',
      'score': 46.4,
      'license': '已宣布开源（权重待发布）',
      'mode': '思考模式 High（无工具）',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 28,
      'protocolNote': '思考模式 High（无工具）'
    },
    {
      'model': 'Muse Spark 1.1',
      'org': 'Meta',
      'score': 46.2,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 29,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'GPT-6.1 Terra',
      'org': 'OpenAI',
      'score': 46.2,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 30,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'Claude Haiku 5.5',
      'org': 'Anthropic',
      'score': 45.9,
      'license': '不开源',
      'mode': '最高（无工具）',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 31,
      'protocolNote': '最高（无工具）'
    },
    {
      'model': 'Muse Spark 1.2',
      'org': 'Meta',
      'score': 45.5,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 32,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'GPT-5.6 Sol',
      'org': 'OpenAI',
      'score': 44.5,
      'license': '不开源',
      'mode': '最高（无工具）',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 33,
      'protocolNote': '最高（无工具）'
    },
    {
      'model': 'Inkling 2 Small',
      'org': 'Thinking Machines Lab',
      'score': 44.1149,
      'license': '免费商用授权',
      'mode': '极高强度思考（无工具） · Text only',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 34,
      'protocolNote': '极高强度思考（无工具） · Text only'
    },
    {
      'model': 'Qwen3.8-Max-0902',
      'org': '阿里巴巴',
      'score': 43.9,
      'license': '不开源',
      'mode': '最高（无工具）',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 35,
      'protocolNote': '最高（无工具）'
    },
    {
      'model': 'Muse Spark Open',
      'org': 'Meta',
      'score': 43.9,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 36,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'Qwen3.8-Max',
      'org': '阿里巴巴',
      'score': 43.6,
      'license': '有条件免费商用授权',
      'mode': '极高强度思考（无工具）',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 37,
      'protocolNote': '极高强度思考（无工具）'
    },
    {
      'model': 'Kimi K3',
      'org': 'Moonshot AI',
      'score': 43.5,
      'license': '有条件免费商用授权',
      'mode': '最高（无工具）',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 38,
      'protocolNote': '最高（无工具）'
    },
    {
      'model': 'Hy4 preview',
      'org': '腾讯AI实验室',
      'score': 43.4,
      'license': '免费商用授权',
      'mode': '思考模式 High（无工具）',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 39,
      'protocolNote': '思考模式 High（无工具）'
    },
    {
      'model': 'DeepSeek-V4.1-Flash-1017',
      'org': 'DeepSeek-AI',
      'score': 43.3272,
      'license': '免费商用授权',
      'mode': '最高（无工具）',
      'protocol': '无工具',
      'src': 'datalearner',
      'sourceUrl': 'https://api-docs.deepseek.com/zh-cn/updates',
      'rank': 40,
      'protocolNote': '最高（无工具）'
    },
    {
      'model': 'Claude Sonnet 5',
      'org': 'Anthropic',
      'score': 43.2,
      'license': '不开源',
      'mode': '极高强度思考（无工具）',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 41,
      'protocolNote': '极高强度思考（无工具）'
    },
    {
      'model': 'GPT-5.5 Pro',
      'org': 'OpenAI',
      'score': 43.1,
      'license': '不开源',
      'mode': '极高强度思考（无工具）',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 42,
      'protocolNote': '极高强度思考（无工具）'
    },
    {
      'model': 'Grok 4.7',
      'org': 'xAI',
      'score': 43.1,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 43,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'Qwen3.8 Max Preview',
      'org': 'Alibaba',
      'score': 43.1,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 44,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'GLM-5.3',
      'org': '智谱AI',
      'score': 43,
      'license': '有条件免费商用授权',
      'mode': '最高（无工具）',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 45,
      'protocolNote': '最高（无工具）'
    },
    {
      'model': 'GPT-5.6 Terra',
      'org': 'OpenAI',
      'score': 42.9,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 46,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'Grok 4.6',
      'org': 'xAI',
      'score': 42.9,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 47,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'GPT-5.4 Pro',
      'org': 'OpenAI',
      'score': 42.7,
      'license': '不开源',
      'mode': '思考模式 High（无工具）',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 48,
      'protocolNote': '思考模式 High（无工具）'
    },
    {
      'model': 'DeepSeek V4 Pro 0813',
      'org': 'DeepSeek-AI',
      'score': 42.7,
      'license': '免费商用授权',
      'mode': '最高（无工具）',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 49,
      'protocolNote': '最高（无工具）'
    },
    {
      'model': 'Gemini 3.5 Flash',
      'org': 'Google',
      'score': 42.7,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 50,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'Grok 4.5',
      'org': 'xAI',
      'score': 42.7,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 51,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'GPT-5.3 Codex',
      'org': 'OpenAI',
      'score': 42.5,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 52,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'GPT-5.3-Codex-Spark',
      'org': 'OpenAI',
      'score': 42.5,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 53,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'GPT-5.5',
      'org': 'OpenAI',
      'score': 41.4,
      'license': '不开源',
      'mode': '思考模式 High（无工具）',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 54,
      'protocolNote': '思考模式 High（无工具）'
    },
    {
      'model': 'Qwen3.7 Max',
      'org': '阿里巴巴',
      'score': 41.4,
      'license': '不开源',
      'mode': '最高（无工具）',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 55,
      'protocolNote': '最高（无工具）'
    },
    {
      'model': 'Gemini 3.0 Pro (Preview 11-2025)',
      'org': 'Google DeepMind',
      'score': 41,
      'license': '不开源',
      'mode': '并行思考模式（无工具）',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 56,
      'protocolNote': '并行思考模式（无工具）'
    },
    {
      'model': 'Gemini 3.6 Flash',
      'org': 'Google',
      'score': 40.8,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 57,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'GLM-5.2',
      'org': '智谱AI',
      'score': 40.5,
      'license': '免费商用授权',
      'mode': '思考模式（无工具）',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 58,
      'protocolNote': '思考模式（无工具）'
    },
    {
      'model': 'Claude Opus 4.6 (Adaptive)',
      'org': 'Anthropic',
      'score': 39.9,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 59,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'Gemini 3 Pro',
      'org': 'Google',
      'score': 39.7,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 60,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'GPT-5.6 Luna',
      'org': 'OpenAI',
      'score': 39.5,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 61,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'Ling 3.1 Flash',
      'org': 'InclusionAI',
      'score': 39.4,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 62,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'MiniMax M3',
      'org': 'MiniMax',
      'score': 39,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 63,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'GPT-6 Luna',
      'org': 'OpenAI',
      'score': 38.5,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 64,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'DeepSeek V4 Flash 0731',
      'org': 'DeepSeek-AI',
      'score': 37.8,
      'license': '免费商用授权',
      'mode': '最高（无工具）',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 65,
      'protocolNote': '最高（无工具）'
    },
    {
      'model': 'DeepSeek-V4-Pro',
      'org': 'DeepSeek-AI',
      'score': 37.7,
      'license': '免费商用授权',
      'mode': '最高（无工具）',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 66,
      'protocolNote': '最高（无工具）'
    },
    {
      'model': 'Grok 4.3',
      'org': 'xAI',
      'score': 37.2,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 67,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'Hy3',
      'org': '腾讯AI实验室',
      'score': 37,
      'license': '免费商用授权',
      'mode': '思考模式 High（无工具）',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 68,
      'protocolNote': '思考模式 High（无工具）'
    },
    {
      'model': 'DeepSeek-V4.1-Flash',
      'org': 'DeepSeek-AI',
      'score': 36.8,
      'license': '免费商用授权',
      'mode': '最高（无工具）',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 69,
      'protocolNote': '最高（无工具）'
    },
    {
      'model': 'GPT-5.2 Pro',
      'org': 'OpenAI',
      'score': 36.6,
      'license': '不开源',
      'mode': '思考模式（无工具）',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 70,
      'protocolNote': '思考模式（无工具）'
    },
    {
      'model': 'GPT-5.4',
      'org': 'OpenAI',
      'score': 36.24,
      'license': '不开源',
      'mode': '极高强度思考（无工具）',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 71,
      'protocolNote': '极高强度思考（无工具）'
    },
    {
      'model': 'Qwen3.8-Flash-Next',
      'org': '阿里巴巴',
      'score': 35.9,
      'license': '有条件免费商用授权',
      'mode': '极高强度思考（无工具）',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 72,
      'protocolNote': '极高强度思考（无工具）'
    },
    {
      'model': 'GPT-5.2-Codex',
      'org': 'OpenAI',
      'score': 35.7,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 73,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'MiMo-V2.5-Pro',
      'org': 'Xiaomi',
      'score': 35.7,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 74,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'Qwen3.7 Plus',
      'org': 'Alibaba',
      'score': 35.6,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 75,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'DeepSeek V4 Pro (High)',
      'org': 'DeepSeek',
      'score': 35.2,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 76,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'MiMo-V2.6-Flash',
      'org': 'Xiaomi',
      'score': 35.1,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 77,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'Kimi K2.7 Code',
      'org': 'Moonshot AI',
      'score': 35,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 78,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'Gemini 2.5 Deep Think',
      'org': 'Google DeepMind',
      'score': 34.8,
      'license': '不开源',
      'mode': '深度思考模式（无工具）',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 79,
      'protocolNote': '深度思考模式（无工具）'
    },
    {
      'model': 'DeepSeek-V4-Flash',
      'org': 'DeepSeek-AI',
      'score': 34.8,
      'license': '免费商用授权',
      'mode': '最高（无工具）',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 80,
      'protocolNote': '最高（无工具）'
    },
    {
      'model': 'Kimi K2.6',
      'org': 'Moonshot AI',
      'score': 34.7,
      'license': '免费商用授权',
      'mode': '思考模式（无工具）',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 81,
      'protocolNote': '思考模式（无工具）'
    },
    {
      'model': 'Beam 1.0 501B-A23B',
      'org': 'Reflection AI',
      'score': 34.7,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 82,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'GPT-5.2',
      'org': 'OpenAI',
      'score': 34.5,
      'license': '不开源',
      'mode': '极高强度思考（无工具）',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 83,
      'protocolNote': '极高强度思考（无工具）'
    },
    {
      'model': 'Claude Opus 4.6',
      'org': 'Anthropic',
      'score': 34.44,
      'license': '不开源',
      'mode': '最高（无工具）',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 84,
      'protocolNote': '最高（无工具）'
    },
    {
      'model': 'Apodex 1.1',
      'org': 'Apodex',
      'score': 34.1,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 85,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'Apodex 1.1 Mini',
      'org': 'Apodex',
      'score': 34.1,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 86,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'Gemini 3.0 Flash',
      'org': 'Google DeepMind',
      'score': 33.7,
      'license': '不开源',
      'mode': '思考模式（无工具）',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 87,
      'protocolNote': '思考模式（无工具）'
    },
    {
      'model': 'Hy3 Preview',
      'org': 'Tencent',
      'score': 33.5,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 88,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'Inkling-Small',
      'org': 'Thinking Machines Lab',
      'score': 33.3,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 89,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'Claude Sonnet 4.6',
      'org': 'Anthropic',
      'score': 33.2,
      'license': '不开源',
      'mode': '思考模式（无工具）',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 90,
      'protocolNote': '思考模式（无工具）'
    },
    {
      'model': 'GLM 5.1',
      'org': '智谱AI',
      'score': 31,
      'license': '免费商用授权',
      'mode': '思考模式（无工具）',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 91,
      'protocolNote': '思考模式（无工具）'
    },
    {
      'model': 'Claude Opus 4.5',
      'org': 'Anthropic',
      'score': 30.8,
      'license': '不开源',
      'mode': '扩展（无工具）',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 92,
      'protocolNote': '扩展（无工具）'
    },
    {
      'model': 'Qwen3.8-27B',
      'org': '阿里巴巴',
      'score': 30.8,
      'license': '免费商用授权',
      'mode': '思考模式（无工具）',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 93,
      'protocolNote': '思考模式（无工具）'
    },
    {
      'model': 'Qwen 3.6 Max (preview)',
      'org': 'Alibaba',
      'score': 30.8,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 94,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'GPT-5-Pro',
      'org': 'OpenAI',
      'score': 30.7,
      'license': '不开源',
      'mode': '思考模式（无工具）',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 95,
      'protocolNote': '思考模式（无工具）'
    },
    {
      'model': 'Nemotron 3.5 Super VL 120B A12B',
      'org': 'NVIDIA',
      'score': 30.7,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 96,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'Nemotron 3.5 Super VL 120B A12B NVFP4',
      'org': 'NVIDIA',
      'score': 30.7,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 97,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'DeepSeek V3.2 Speciale',
      'org': 'DeepSeek-AI',
      'score': 30.6,
      'license': '免费商用授权',
      'mode': '思考模式（无工具）',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 98,
      'protocolNote': '思考模式（无工具）'
    },
    {
      'model': 'GLM-5',
      'org': '智谱AI',
      'score': 30.5,
      'license': '免费商用授权',
      'mode': '思考模式（无工具）',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 99,
      'protocolNote': '思考模式（无工具）'
    },
    {
      'model': 'MiMo-V2-Pro',
      'org': 'Xiaomi',
      'score': 30.4,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 100,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'Qwen3-Max-Thinking',
      'org': '阿里巴巴',
      'score': 30.2,
      'license': '不开源',
      'mode': '思考模式（无工具）',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 101,
      'protocolNote': '思考模式（无工具）'
    },
    {
      'model': 'Kimi K2.5',
      'org': 'Moonshot AI',
      'score': 30.1,
      'license': '免费商用授权',
      'mode': '思考模式（无工具）',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 102,
      'protocolNote': '思考模式（无工具）'
    },
    {
      'model': 'Claude Opus 4.5 Thinking',
      'org': 'Anthropic',
      'score': 30.1,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 103,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'Solar Pro 4',
      'org': 'Upstage',
      'score': 29.8,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 104,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'Inkling',
      'org': 'Thinking Machines Lab',
      'score': 29.7,
      'license': '免费商用授权',
      'mode': '思考模式（无工具）',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 105,
      'protocolNote': '思考模式（无工具）'
    },
    {
      'model': 'A.X K2',
      'org': 'SK Telecom',
      'score': 29.6,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 106,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'Qwen3.5 397B',
      'org': 'Alibaba',
      'score': 29,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 107,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'Qwen 3.6 Plus Preview',
      'org': '阿里巴巴',
      'score': 28.8,
      'license': '不开源',
      'mode': '思考模式（无工具）',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 108,
      'protocolNote': '思考模式（无工具）'
    },
    {
      'model': 'Qwen3.5-397B-A17B',
      'org': '阿里巴巴',
      'score': 28.7,
      'license': '免费商用授权',
      'mode': '思考模式（无工具）',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 109,
      'protocolNote': '思考模式（无工具）'
    },
    {
      'model': 'GPT-5.4 mini',
      'org': 'OpenAI',
      'score': 28.2,
      'license': '不开源',
      'mode': '极高强度思考（无工具）',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 110,
      'protocolNote': '极高强度思考（无工具）'
    },
    {
      'model': 'MiniMax-M2.7',
      'org': 'MiniMaxAI',
      'score': 28,
      'license': '不可以商用',
      'mode': '思考模式（无工具）',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 111,
      'protocolNote': '思考模式（无工具）'
    },
    {
      'model': 'Qwen3.6 Plus',
      'org': 'Alibaba',
      'score': 27.8,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 112,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'GLM-5-Turbo',
      'org': 'Z.AI',
      'score': 27.8,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 113,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'Nemotron 3 Ultra',
      'org': 'NVIDIA',
      'score': 26.7,
      'license': '免费商用授权',
      'mode': '思考模式（无工具）',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 114,
      'protocolNote': '思考模式（无工具）'
    },
    {
      'model': 'GPT-5.1',
      'org': 'OpenAI',
      'score': 26.5,
      'license': '不开源',
      'mode': '思考模式（无工具）',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 115,
      'protocolNote': '思考模式（无工具）'
    },
    {
      'model': 'ERNIE 5.0',
      'org': '百度',
      'score': 25.81,
      'license': '不开源',
      'mode': '思考模式（无工具）',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 116,
      'protocolNote': '思考模式（无工具）'
    },
    {
      'model': 'GPT-5.1-Codex',
      'org': 'OpenAI',
      'score': 25.7,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 117,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'GPT-5.1-Codex-Max',
      'org': 'OpenAI',
      'score': 25.7,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 118,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'Grok 4',
      'org': 'xAI',
      'score': 25.4,
      'license': '不开源',
      'mode': '思考模式（无工具）',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 119,
      'protocolNote': '思考模式（无工具）'
    },
    {
      'model': 'GPT-5',
      'org': 'OpenAI',
      'score': 25.32,
      'license': '不开源',
      'mode': '思考模式 High（无工具）',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 120,
      'protocolNote': '思考模式 High（无工具）'
    },
    {
      'model': 'Qwen3.5-122B-A10B',
      'org': 'Alibaba',
      'score': 25.2,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 121,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'DeepSeek V3.2',
      'org': 'DeepSeek-AI',
      'score': 25.1,
      'license': '免费商用授权',
      'mode': '思考模式（无工具）',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 122,
      'protocolNote': '思考模式（无工具）'
    },
    {
      'model': 'GLM-4.7',
      'org': '智谱AI',
      'score': 24.8,
      'license': '免费商用授权',
      'mode': '思考模式（无工具）',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 123,
      'protocolNote': '思考模式（无工具）'
    },
    {
      'model': 'Nemotron 3.5 Bolt 74B-A9B',
      'org': 'NVIDIA',
      'score': 24.7,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 124,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'Step 3.5 Flash',
      'org': 'StepFun',
      'score': 24.5,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 125,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'Qwen3.5-27B',
      'org': '阿里巴巴',
      'score': 24.3,
      'license': '免费商用授权',
      'mode': '思考模式（无工具）',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 126,
      'protocolNote': '思考模式（无工具）'
    },
    {
      'model': 'GPT-5.4 nano',
      'org': 'OpenAI',
      'score': 24.3,
      'license': '不开源',
      'mode': '极高强度思考（无工具）',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 127,
      'protocolNote': '极高强度思考（无工具）'
    },
    {
      'model': 'Qwen3.6-27B',
      'org': '阿里巴巴',
      'score': 24,
      'license': '免费商用授权',
      'mode': '思考模式（无工具）',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 128,
      'protocolNote': '思考模式（无工具）'
    },
    {
      'model': 'Kimi K2 Thinking',
      'org': 'Moonshot AI',
      'score': 23.9,
      'license': '免费商用授权',
      'mode': '思考模式（无工具）',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 129,
      'protocolNote': '思考模式（无工具）'
    },
    {
      'model': 'Ling 3.0 Flash',
      'org': 'InclusionAI',
      'score': 23.7,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 130,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'MiMo-V2-Omni',
      'org': 'Xiaomi',
      'score': 22.1,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 131,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'M2.1',
      'org': 'MiniMaxAI',
      'score': 22,
      'license': '免费商用授权',
      'mode': '思考模式（无工具）',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 132,
      'protocolNote': '思考模式（无工具）'
    },
    {
      'model': 'Muse Glimmer-30B',
      'org': 'Facebook AI研究实验室',
      'score': 22,
      'license': '免费商用授权',
      'mode': '思考模式 High（无工具）',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 133,
      'protocolNote': '思考模式 High（无工具）'
    },
    {
      'model': 'Ling 3.0 Flash VL',
      'org': 'InclusionAI',
      'score': 22,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 134,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'DeepSeek-V3.1 Terminus',
      'org': 'DeepSeek-AI',
      'score': 21.7,
      'license': '免费商用授权',
      'mode': '常规模式（无工具）',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 135,
      'protocolNote': '常规模式（无工具）'
    },
    {
      'model': 'Gemini 2.5-Pro',
      'org': 'Google DeepMind',
      'score': 21.6,
      'license': '不开源',
      'mode': '思考模式（无工具）',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 136,
      'protocolNote': '思考模式（无工具）'
    },
    {
      'model': 'Qwen3.6-35B-A3B',
      'org': '阿里巴巴',
      'score': 21.4,
      'license': '免费商用授权',
      'mode': '思考模式（无工具）',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 137,
      'protocolNote': '思考模式（无工具）'
    },
    {
      'model': 'Step 3.7 Flash',
      'org': 'StepFun',
      'score': 21.4,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 138,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'o3-pro',
      'org': 'OpenAI',
      'score': 21,
      'license': '不开源',
      'mode': '常规模式（无工具）',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 139,
      'protocolNote': '常规模式（无工具）'
    },
    {
      'model': 'Qwen3.5-35B-A3B',
      'org': 'Alibaba',
      'score': 21,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 140,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'OpenAI o3',
      'org': 'OpenAI',
      'score': 20.32,
      'license': '不开源',
      'mode': '思考模式（无工具）',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 141,
      'protocolNote': '思考模式（无工具）'
    },
    {
      'model': 'o3',
      'org': 'OpenAI',
      'score': 20.1,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 142,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'Grok 4 Fast',
      'org': 'xAI',
      'score': 20,
      'license': '不开源',
      'mode': '思考模式（无工具）',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 143,
      'protocolNote': '思考模式（无工具）'
    },
    {
      'model': 'DeepSeek V3.2-Exp',
      'org': 'DeepSeek-AI',
      'score': 19.8,
      'license': '免费商用授权',
      'mode': '思考模式（无工具）',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 144,
      'protocolNote': '思考模式（无工具）'
    },
    {
      'model': 'Gemma 4 31B',
      'org': 'Google DeepMind',
      'score': 19.5,
      'license': '免费商用授权',
      'mode': '思考模式（无工具）',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 145,
      'protocolNote': '思考模式（无工具）'
    },
    {
      'model': 'MiniMax M2.5',
      'org': 'MiniMaxAI',
      'score': 19.4,
      'license': '免费商用授权',
      'mode': '思考模式（无工具）',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 146,
      'protocolNote': '思考模式（无工具）'
    },
    {
      'model': 'Grok 4.1 Fast (Reasoning)',
      'org': 'xAI',
      'score': 19.3,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 147,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'Grok 4 Fast (Reasoning)',
      'org': 'xAI',
      'score': 19.1,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 148,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'Gemini 2.5 Pro Experimental 03-25',
      'org': 'Google DeepMind',
      'score': 18.8,
      'license': '不开源',
      'mode': '常规模式（无工具）',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 149,
      'protocolNote': '常规模式（无工具）'
    },
    {
      'model': 'Gemini 3.5 Flash-Lite',
      'org': 'Google',
      'score': 18.8,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 150,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'Quasar 438B',
      'org': 'Multiverse Computing',
      'score': 18.7,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 151,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'K-EXAONE 2.0',
      'org': 'LG AI Research',
      'score': 18.6,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 152,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'Qwen3-235B-A22B-Thinking-2507',
      'org': '阿里巴巴',
      'score': 18.2,
      'license': '免费商用授权',
      'mode': '思考模式（无工具）',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 153,
      'protocolNote': '思考模式（无工具）'
    },
    {
      'model': 'OpenAI o4 - mini',
      'org': 'OpenAI',
      'score': 18.08,
      'license': '不开源',
      'mode': '思考模式 High（无工具）',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 154,
      'protocolNote': '思考模式 High（无工具）'
    },
    {
      'model': 'Gemini-2.5-Pro-Preview-05-06',
      'org': 'Google DeepMind',
      'score': 17.8,
      'license': '不开源',
      'mode': '常规模式（无工具）',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 155,
      'protocolNote': '常规模式（无工具）'
    },
    {
      'model': 'DeepSeek-R1-0528',
      'org': 'DeepSeek-AI',
      'score': 17.7,
      'license': '免费商用授权',
      'mode': '思考模式（无工具）',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 156,
      'protocolNote': '思考模式（无工具）'
    },
    {
      'model': 'Claude Sonnet 4.5',
      'org': 'Anthropic',
      'score': 17.7,
      'license': '不开源',
      'mode': '思考模式（无工具）',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 157,
      'protocolNote': '思考模式（无工具）'
    },
    {
      'model': 'Grok 4.1 Fast',
      'org': 'xAI',
      'score': 17.6,
      'license': '不开源',
      'mode': '思考模式（无工具）',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 158,
      'protocolNote': '思考模式（无工具）'
    },
    {
      'model': 'GLM-4.6',
      'org': '智谱AI',
      'score': 17.2,
      'license': '免费商用授权',
      'mode': '思考模式（无工具）',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 159,
      'protocolNote': '思考模式（无工具）'
    },
    {
      'model': 'GLM-5V-Turbo',
      'org': 'Z.AI',
      'score': 17.1,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 160,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'Mercury 2',
      'org': 'Inception',
      'score': 17.1,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 161,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'DeepSeek-V3.1',
      'org': 'DeepSeek-AI',
      'score': 15.9,
      'license': '免费商用授权',
      'mode': '思考模式（无工具）',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 162,
      'protocolNote': '思考模式（无工具）'
    },
    {
      'model': 'DeepSeek-R1',
      'org': 'DeepSeek',
      'score': 15.8,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 163,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'Trinity-Large-Thinking',
      'org': 'Arcee AI',
      'score': 15.8,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 164,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'Trinity-Large-Preview',
      'org': 'Arcee AI',
      'score': 15.8,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 165,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'Gemma 4 12B',
      'org': 'Google',
      'score': 15.7,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 166,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'Gemini 3 Flash',
      'org': 'Google',
      'score': 15,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 167,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'GPT OSS 120B',
      'org': 'OpenAI',
      'score': 14.9,
      'license': '免费商用授权',
      'mode': '思考模式（无工具）',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 168,
      'protocolNote': '思考模式（无工具）'
    },
    {
      'model': 'GLM-4.5',
      'org': '智谱AI',
      'score': 14.4,
      'license': '免费商用授权',
      'mode': '思考模式（无工具）',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 169,
      'protocolNote': '思考模式（无工具）'
    },
    {
      'model': 'GLM-4.7-Flash',
      'org': '智谱AI',
      'score': 14.4,
      'license': '免费商用授权',
      'mode': '思考模式（无工具）',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 170,
      'protocolNote': '思考模式（无工具）'
    },
    {
      'model': 'K-Exaone',
      'org': 'LG AI Research',
      'score': 13.9,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 171,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'Mistral Medium 3.5 128B',
      'org': 'Mistral',
      'score': 13.8,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 172,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'OpenAI o3-mini',
      'org': 'OpenAI',
      'score': 13.4,
      'license': '不开源',
      'mode': '思考模式（无工具）',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 173,
      'protocolNote': '思考模式（无工具）'
    },
    {
      'model': 'MiniMax M2',
      'org': 'MiniMaxAI',
      'score': 12.5,
      'license': '免费商用授权',
      'mode': '思考模式（无工具）',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 174,
      'protocolNote': '思考模式（无工具）'
    },
    {
      'model': 'Spark-X2.5-4B',
      'org': '科大讯飞',
      'score': 12.3,
      'license': '免费商用授权',
      'mode': '思考模式（无工具）',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 175,
      'protocolNote': '思考模式（无工具）'
    },
    {
      'model': 'Claude 4 Opus Thinking',
      'org': 'Anthropic',
      'score': 12.3,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 176,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'Command A+',
      'org': 'Cohere',
      'score': 12,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 177,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'Qwen3 Max',
      'org': 'Alibaba',
      'score': 11.9,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 178,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'Mercury 2.5',
      'org': 'Inception',
      'score': 11.8,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 179,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'Opus 4.1',
      'org': 'Anthropic',
      'score': 11.52,
      'license': '不开源',
      'mode': '思考模式（无工具）',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 180,
      'protocolNote': '思考模式（无工具）'
    },
    {
      'model': 'Granite 4.2 30B',
      'org': 'IBM',
      'score': 11.2,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 181,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'Qwen3 Max (Preview)',
      'org': '阿里巴巴',
      'score': 11.1,
      'license': '不开源',
      'mode': '常规模式（无工具）',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 182,
      'protocolNote': '常规模式（无工具）'
    },
    {
      'model': 'North Mini Code',
      'org': 'Cohere',
      'score': 11.1,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 183,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'Gemini 2.5 Flash',
      'org': 'Google DeepMind',
      'score': 11,
      'license': '不开源',
      'mode': '思考模式（无工具）',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 184,
      'protocolNote': '思考模式（无工具）'
    },
    {
      'model': 'Sarvam 105B',
      'org': 'Sarvam',
      'score': 11,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 185,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'gpt-oss-20b',
      'org': 'OpenAI',
      'score': 10.9,
      'license': '免费商用授权',
      'mode': '思考模式（无工具）',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 186,
      'protocolNote': '思考模式（无工具）'
    },
    {
      'model': 'Claude Opus 4',
      'org': 'Anthropic',
      'score': 10.72,
      'license': '不开源',
      'mode': '思考模式（无工具）',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 187,
      'protocolNote': '思考模式（无工具）'
    },
    {
      'model': 'GLM-4.5-Air',
      'org': '智谱AI',
      'score': 10.6,
      'license': '免费商用授权',
      'mode': '思考模式（无工具）',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 188,
      'protocolNote': '思考模式（无工具）'
    },
    {
      'model': 'Nemotron 3.5 Lightning 30B A3B NVFP4',
      'org': 'NVIDIA',
      'score': 10.6,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 189,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'Claude Sonnet 3.7',
      'org': 'Anthropic',
      'score': 10.3,
      'license': '不开源',
      'mode': '思考模式（无工具）',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 190,
      'protocolNote': '思考模式（无工具）'
    },
    {
      'model': 'Solar Pro 3',
      'org': 'Upstage',
      'score': 10.3,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 191,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'Qwen3.5-4B',
      'org': 'Alibaba',
      'score': 9.9,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 192,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'Mistral Small 4',
      'org': 'Mistral',
      'score': 9.9,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 193,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'Qwen3-30B-A3B-2507',
      'org': '阿里巴巴',
      'score': 9.8,
      'license': '免费商用授权',
      'mode': '思考模式（无工具）',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 194,
      'protocolNote': '思考模式（无工具）'
    },
    {
      'model': 'Magistral Medium',
      'org': 'Mistral',
      'score': 9.8,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 195,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'Haiku 4.5',
      'org': 'Anthropic',
      'score': 9.7,
      'license': '不开源',
      'mode': '扩展（无工具）',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 196,
      'protocolNote': '扩展（无工具）'
    },
    {
      'model': 'Claude 3.7 Sonnet Thinking',
      'org': 'Anthropic',
      'score': 9.7,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 197,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'Granite 4.2 8B',
      'org': 'IBM',
      'score': 9.7,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 198,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'Claude Sonnet 4',
      'org': 'Anthropic',
      'score': 9.6,
      'license': '不开源',
      'mode': '思考模式（无工具）',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 199,
      'protocolNote': '思考模式（无工具）'
    },
    {
      'model': 'GPT-5 nano',
      'org': 'OpenAI',
      'score': 9.5,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 200,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'Ling 3.0 Tiny',
      'org': 'InclusionAI',
      'score': 9.3,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 201,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'OpenAI o1',
      'org': 'OpenAI',
      'score': 9.1,
      'license': '不开源',
      'mode': '常规模式（无工具）',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 202,
      'protocolNote': '常规模式（无工具）'
    },
    {
      'model': 'MiniCPM5-2B',
      'org': 'OpenBMB',
      'score': 8.9,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 203,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'Gemma 4 26B A4B',
      'org': 'Google DeepMind',
      'score': 8.7,
      'license': '免费商用授权',
      'mode': '思考模式（无工具）',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 204,
      'protocolNote': '思考模式（无工具）'
    },
    {
      'model': 'MiMo-V2-Flash',
      'org': 'Xiaomi',
      'score': 8.6,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 205,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'MiniMax-M1-80k',
      'org': 'MiniMaxAI',
      'score': 8.4,
      'license': '免费商用授权',
      'mode': '常规模式（无工具）',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 206,
      'protocolNote': '常规模式（无工具）'
    },
    {
      'model': 'Grok Code Fast 1',
      'org': 'xAI',
      'score': 8,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 207,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'Qwen3-235B-A22B',
      'org': '阿里巴巴',
      'score': 7.6,
      'license': '免费商用授权',
      'mode': '常规模式（无工具）',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 208,
      'protocolNote': '常规模式（无工具）'
    },
    {
      'model': 'Magistral Small',
      'org': 'Mistral',
      'score': 7.6,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 209,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'Sarvam 30B',
      'org': 'Sarvam',
      'score': 7.5,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 210,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'Qwen3-Omni-30B-A3B-Thinking',
      'org': 'Alibaba',
      'score': 7.5,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 211,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'Nemotron Ultra 253B',
      'org': 'NVIDIA',
      'score': 7.4,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 212,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'QwQ-32B',
      'org': 'Alibaba',
      'score': 7.4,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 213,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'MiniMax-M1-40k',
      'org': 'MiniMaxAI',
      'score': 7.2,
      'license': '免费商用授权',
      'mode': '常规模式（无工具）',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 214,
      'protocolNote': '常规模式（无工具）'
    },
    {
      'model': 'o1',
      'org': 'OpenAI',
      'score': 7,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 215,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'Gemini 2.5 Flash-Lite',
      'org': 'Google DeepMind',
      'score': 6.9,
      'license': '不开源',
      'mode': '常规模式（无工具）',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 216,
      'protocolNote': '常规模式（无工具）'
    },
    {
      'model': 'LFM2.5-8B-A1B',
      'org': 'LiquidAI',
      'score': 6.9,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 217,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'Celeris-1',
      'org': 'Celeris',
      'score': 6.8,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 218,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'LFM2.5-1.2B-Instruct',
      'org': 'LiquidAI',
      'score': 6.7,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 219,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'Granite 4.2 3B',
      'org': 'IBM',
      'score': 6.6,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 220,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'Granite-4.0-H-350M',
      'org': 'IBM',
      'score': 6.4,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 221,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'Ling 2.6 Flash',
      'org': 'InclusionAI',
      'score': 6.3,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 222,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'Claude 4 Opus',
      'org': 'Anthropic',
      'score': 6.2,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 223,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'LFM2.5-2.6B',
      'org': 'LiquidAI',
      'score': 6.2,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 224,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'LFM2.5-1.2B-Thinking',
      'org': 'LiquidAI',
      'score': 6.2,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 225,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'Exaone 4.0 1.2B',
      'org': 'LG AI Research',
      'score': 5.7,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 226,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'Granite-4.0-350M',
      'org': 'IBM',
      'score': 5.5,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 227,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'GPT-4.5',
      'org': 'OpenAI',
      'score': 5.44,
      'license': '不开源',
      'mode': '常规模式（无工具）',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 228,
      'protocolNote': '常规模式（无工具）'
    },
    {
      'model': 'Ministral 3 3B',
      'org': 'Mistral',
      'score': 5.4,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 229,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'GPT-4o',
      'org': 'OpenAI',
      'score': 5.3,
      'license': '不开源',
      'mode': '常规模式（无工具）',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 230,
      'protocolNote': '常规模式（无工具）'
    },
    {
      'model': 'DeepSeek-V3-0324',
      'org': 'DeepSeek-AI',
      'score': 5.2,
      'license': '免费商用授权',
      'mode': '常规模式（无工具）',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 231,
      'protocolNote': '常规模式（无工具）'
    },
    {
      'model': 'Gemini 2.0 Flash Experimental',
      'org': 'Google DeepMind',
      'score': 5.1,
      'license': '不开源',
      'mode': '常规模式（无工具）',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 232,
      'protocolNote': '常规模式（无工具）'
    },
    {
      'model': 'LFM2.5-VL-1.6B-Extract',
      'org': 'LiquidAI',
      'score': 5.1,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 233,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'GPT-5-mini',
      'org': 'OpenAI',
      'score': 5,
      'license': '不开源',
      'mode': '思考模式（无工具）',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 234,
      'protocolNote': '思考模式（无工具）'
    },
    {
      'model': 'Exaone 4.0 32B',
      'org': 'LG AI Research',
      'score': 5,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 235,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'GPT-4.1 mini',
      'org': 'OpenAI',
      'score': 5,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 236,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'Granite-4.0-H-1B',
      'org': 'IBM',
      'score': 5,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 237,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'Phi-4 Multimodal Instruct',
      'org': 'Microsoft',
      'score': 5,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 238,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'Llama 4 Maverick',
      'org': 'Meta',
      'score': 4.9,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 239,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'Nemotron 3 Nano Omni 30B A3B',
      'org': 'NVIDIA',
      'score': 4.8,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 240,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'Gemma 4 E2B',
      'org': 'Google',
      'score': 4.8,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 241,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'Kimi K2',
      'org': 'Moonshot AI',
      'score': 4.7,
      'license': '免费商用授权',
      'mode': '常规模式（无工具）',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 242,
      'protocolNote': '常规模式（无工具）'
    },
    {
      'model': 'Nemotron 3 Nano 30B',
      'org': 'NVIDIA',
      'score': 4.6,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 243,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'Gemini 1.5 Pro',
      'org': 'Google',
      'score': 4.6,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 244,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'Qwen3-Omni-30B-A3B-Instruct',
      'org': 'Alibaba',
      'score': 4.6,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 245,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'DeepSeek R1 Distill Qwen 32B',
      'org': 'DeepSeek',
      'score': 4.6,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 246,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'Ministral 3 14B',
      'org': 'Mistral',
      'score': 4.6,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 247,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'Amazon Nova Pro',
      'org': '亚马逊',
      'score': 4.4,
      'license': '不开源',
      'mode': '常规模式（无工具）',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 248,
      'protocolNote': '常规模式（无工具）'
    },
    {
      'model': 'Gemma 3 27B',
      'org': 'Google',
      'score': 4.4,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 249,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'Claude 4 Sonnet',
      'org': 'Anthropic',
      'score': 4.3,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 250,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'Llama 3.1 8B',
      'org': 'Meta',
      'score': 4.3,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 251,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'Gemini 2.0 Flash',
      'org': 'Google',
      'score': 4.3,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 252,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'Mistral Small 3.1',
      'org': 'Mistral',
      'score': 4.3,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 253,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'Ministral 3 8B',
      'org': 'Mistral',
      'score': 4.3,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 254,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'Claude 3.7 Sonnet',
      'org': 'Anthropic',
      'score': 4.2,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 255,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'Mistral Large 3',
      'org': 'Mistral',
      'score': 4.2,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 256,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'GPT-4o mini',
      'org': 'OpenAI',
      'score': 4.2,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 257,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'Gemini 1.0 Pro',
      'org': 'Google',
      'score': 4.2,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 258,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'LFM2-24B-A2B',
      'org': 'LiquidAI',
      'score': 4.2,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 259,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'Mistral Medium 3',
      'org': 'Mistral',
      'score': 4.1,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 260,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'Claude 3 Haiku',
      'org': 'Anthropic',
      'score': 4.1,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 261,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'Llama 3.1 405B',
      'org': 'Meta',
      'score': 4,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 262,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'Gemma 4 E4B',
      'org': 'Google',
      'score': 3.8,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 263,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'Phi-4',
      'org': 'Microsoft',
      'score': 3.8,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 264,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'Llama 4 Scout',
      'org': 'Meta',
      'score': 3.8,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 265,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'Phi-4-reasoning',
      'org': 'Microsoft',
      'score': 3.8,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 266,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'Devstral Small',
      'org': 'Mistral',
      'score': 3.8,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 267,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'GPT-4.1 nano',
      'org': 'OpenAI',
      'score': 3.8,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 268,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'Claude 3.5 Sonnet New',
      'org': 'Anthropic',
      'score': 3.7,
      'license': '不开源',
      'mode': '常规模式（无工具） · Text only',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 269,
      'protocolNote': '常规模式（无工具） · Text only'
    },
    {
      'model': 'GPT-4.1',
      'org': 'OpenAI',
      'score': 3.7,
      'license': '不开源',
      'mode': '常规模式（无工具）',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 270,
      'protocolNote': '常规模式（无工具）'
    },
    {
      'model': 'Solar Pro 2',
      'org': 'Upstage',
      'score': 3.7,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 271,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'Amazon Nova Lite',
      'org': '亚马逊',
      'score': 3.64,
      'license': '不开源',
      'mode': '常规模式（无工具）',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 272,
      'protocolNote': '常规模式（无工具）'
    },
    {
      'model': 'Llama 3.3 70B',
      'org': 'Meta',
      'score': 3.6,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 273,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'Llama 3.1 70B',
      'org': 'Meta',
      'score': 3.6,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 274,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'o1-mini',
      'org': 'OpenAI',
      'score': 3.6,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 275,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'Claude 3.5 Haiku',
      'org': 'Anthropic',
      'score': 3.6,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 276,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'Qwen2.5 Coder 32B Instruct',
      'org': 'Alibaba',
      'score': 3.5,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 277,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'Mistral Large 2',
      'org': 'Mistral',
      'score': 3.3,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 278,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'Gemini 1.5 Flash',
      'org': 'Google',
      'score': 3.2,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 279,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'GPT-4 Turbo',
      'org': 'OpenAI',
      'score': 3.1,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 280,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'DeepSeek V3',
      'org': 'DeepSeek',
      'score': 2.9,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 281,
      'protocolNote': 'Artificial Analysis 无工具复测'
    },
    {
      'model': 'Claude 3 Opus',
      'org': 'Anthropic',
      'score': 2.8,
      'protocol': '无工具',
      'src': 'aa',
      'rank': 282,
      'protocolNote': 'Artificial Analysis 无工具复测'
    }
  ]
};
