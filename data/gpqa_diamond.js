// 数据源:GPQA Diamond(研究生级科学问答,198 题子集,更新于 2026-11-27)
// 主源:https://www.datalearner.com/api/get-benchmark-detail/gpqa-diamond(T2 厂商官方发布成绩转录,单请求取全量)
// 补充:https://benchlm.ai/benchmarks/gpqa-diamond(T3 第三方镜像,只补主源未收录的模型)
// 渠道优先级:基准官方实测榜 > 厂商官方发布(论文/发布页)> 第三方聚合与镜像;低层级仅补缺失模型与字段,不覆盖高层级分数
// 口径:只收「无工具」行;datalearner 同模型多档取最高;benchlm 未逐行标注 harness,
//   protocolNote 里注明来自 benchlm 镜像,两源模型池互补(开源小模型 + 部分闭源)
// 字段:model=模型名;score=正确率(%);org=厂商;src=数据来源(datalearner/benchlm);protocolNote=口径原文
// 用途:「权威基准测试」页展示 + 总览矩阵计分列,计入综合分与命中数(2026-11-26 起)
window.GPQA_DIAMOND = {
  'source': 'GPQA Diamond',
  'url': 'https://benchlm.ai/benchmarks/gpqa-diamond',
  'apiUrl': 'https://www.datalearner.com/api/get-benchmark-detail/gpqa-diamond',
  'officialUrl': 'https://github.com/idavidrein/gpqa',
  'channelPolicy': '渠道优先级:基准官方实测榜 > 厂商官方发布(论文/发布页)> 第三方聚合与镜像;低层级仅补缺失模型与字段,不覆盖高层级分数',
  'updated': '2026-11-27',
  'refreshedAt': '2026-11-27 16:53',
  'stats': {
    'tasks': 198,
    'entries': 251,
    'datalearner': 280,
    'benchlm': 90
  },
  'desc': 'GPQA Diamond:研究生级科学问答基准的 198 题高质量子集(生物 / 物理 / 化学),题目由领域专家编写、四选一随机猜测基线 25%;本表 score 为正确率(%),统一无工具口径。主源为 datalearner 转录的厂商官方发布成绩(292 条,覆盖开源与部分闭源);benchlm.ai 镜像只补主源未收录的模型(90 条),两源模型池互补。',
  'models': [
    {
      'model': 'GPT-6.2 Astra',
      'org': 'OpenAI',
      'score': 97,
      'license': '不开源',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 1
    },
    {
      'model': 'Gemini 4 Argon',
      'org': 'Google DeepMind',
      'score': 96.4015,
      'license': '不开源',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 2
    },
    {
      'model': 'GPT-6 Astra',
      'org': 'OpenAI',
      'score': 96.2626,
      'license': '不开源',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 3
    },
    {
      'model': 'GPT-6.2 Sol',
      'org': 'OpenAI',
      'score': 96,
      'license': '不开源',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 4
    },
    {
      'model': 'Claude Sonnet 5.5',
      'org': 'Anthropic',
      'score': 95.5808,
      'license': '不开源',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 5
    },
    {
      'model': 'Sakana Fugu-Ultra',
      'org': 'Sakana AI',
      'score': 95.5,
      'src': 'benchlm',
      'rank': 6,
      'protocol': '无工具'
    },
    {
      'model': 'Sakana Fugu',
      'org': 'Sakana AI',
      'score': 95.5,
      'src': 'benchlm',
      'rank': 7,
      'protocol': '无工具'
    },
    {
      'model': 'GPT-6.1 Sol',
      'org': 'OpenAI',
      'score': 95.3914,
      'license': '不开源',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 8
    },
    {
      'model': 'Gemini 3.8 Flash',
      'org': 'Google DeepMind',
      'score': 95.2525,
      'license': '不开源',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 9
    },
    {
      'model': 'Gemini 3.7 Flash',
      'org': 'Google DeepMind',
      'score': 94.8232,
      'license': '不开源',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 10
    },
    {
      'model': 'GPT-5.4 Pro',
      'org': 'OpenAI',
      'score': 94.6,
      'license': '不开源',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 11
    },
    {
      'model': 'Claude Mythos Preview',
      'org': 'Anthropic',
      'score': 94.6,
      'license': '不开源',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 12
    },
    {
      'model': 'GPT-6 Sol',
      'org': 'OpenAI',
      'score': 94.3182,
      'license': '不开源',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 13
    },
    {
      'model': 'GPT-6.1 Terra',
      'org': 'OpenAI',
      'score': 94.3182,
      'license': '不开源',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 14
    },
    {
      'model': 'Gemini 3.1 Pro Preview',
      'org': 'Google DeepMind',
      'score': 94.3,
      'license': '不开源',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 15
    },
    {
      'model': 'Gemini 3.1 Pro',
      'org': 'Google',
      'score': 94.3,
      'src': 'benchlm',
      'rank': 16,
      'protocol': '无工具'
    },
    {
      'model': 'Opus 4.7',
      'org': 'Anthropic',
      'score': 94.2,
      'license': '不开源',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 17
    },
    {
      'model': 'Kimi K3.1 Pro',
      'org': 'Moonshot AI',
      'score': 94.2,
      'license': '有条件免费商用授权',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 18
    },
    {
      'model': 'GPT-5.6 Sol',
      'org': 'OpenAI',
      'score': 94.1414,
      'license': '不开源',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 19
    },
    {
      'model': 'Muse Spark 1.3',
      'org': 'Facebook AI研究实验室',
      'score': 94.1414,
      'license': '不开源',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 20
    },
    {
      'model': 'Gemini 3.6 Flash',
      'org': 'Google DeepMind',
      'score': 94.1288,
      'license': '不开源',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 21
    },
    {
      'model': 'GPT-5.5',
      'org': 'OpenAI',
      'score': 94.0025,
      'license': '不开源',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 22
    },
    {
      'model': 'Grok 4.6',
      'org': 'xAI',
      'score': 94.0025,
      'license': '不开源',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 23
    },
    {
      'model': 'GPT-5.5 Pro',
      'org': 'OpenAI',
      'score': 93.9214,
      'license': '不开源',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 24
    },
    {
      'model': 'Claude Fable 5.2',
      'org': 'Anthropic',
      'score': 93.8763,
      'license': '不开源',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 25
    },
    {
      'model': 'Gemini 3.0 Pro (Preview 11-2025)',
      'org': 'Google DeepMind',
      'score': 93.8,
      'license': '不开源',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 26
    },
    {
      'model': 'Claude Opus 5',
      'org': 'Anthropic',
      'score': 93.7374,
      'license': '不开源',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 27
    },
    {
      'model': 'Claude Fable 5.1',
      'org': 'Anthropic',
      'score': 93.7374,
      'license': '不开源',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 28
    },
    {
      'model': 'Claude Opus 4.8',
      'org': 'Anthropic',
      'score': 93.6,
      'license': '不开源',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 29
    },
    {
      'model': 'Kimi K3',
      'org': 'Moonshot AI',
      'score': 93.5354,
      'license': '有条件免费商用授权',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 30
    },
    {
      'model': 'Qwen3.8-2.4T-A95B',
      'org': '阿里巴巴',
      'score': 93.5354,
      'license': '有条件免费商用授权',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 31
    },
    {
      'model': 'Step 5 Preview',
      'org': 'StepFunAI',
      'score': 93.5,
      'license': '有条件免费商用授权（Apache-2.0 风格，附署名与商用许可条件）',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 32
    },
    {
      'model': 'Grok 4.5',
      'org': 'xAI',
      'score': 93.4343,
      'license': '不开源',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 33
    },
    {
      'model': 'GPT-5.6 Terra',
      'org': 'OpenAI',
      'score': 93.3081,
      'license': '不开源',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 34
    },
    {
      'model': 'GPT-5.2',
      'org': 'OpenAI',
      'score': 93.2,
      'license': '不开源',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 35
    },
    {
      'model': 'GPT-5.2 Pro',
      'org': 'OpenAI',
      'score': 93.2,
      'license': '不开源',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 36
    },
    {
      'model': 'DeepSeek-V4.1-Flash-1017',
      'org': 'DeepSeek-AI',
      'score': 93.1818,
      'license': '免费商用授权',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 37
    },
    {
      'model': 'Inkling 2 Small',
      'org': 'Thinking Machines Lab',
      'score': 93,
      'license': '免费商用授权',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 38
    },
    {
      'model': 'Gemini 3.5 Flash',
      'org': 'Google DeepMind',
      'score': 92.803,
      'license': '不开源',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 39
    },
    {
      'model': 'Ornith-1.5-397B',
      'org': 'Ornith AI',
      'score': 92.8,
      'src': 'benchlm',
      'rank': 40,
      'protocol': '无工具'
    },
    {
      'model': 'Qwen3.8-Max',
      'org': '阿里巴巴',
      'score': 92.6,
      'license': '有条件免费商用授权',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 41
    },
    {
      'model': 'Qwen3.7 Max',
      'org': '阿里巴巴',
      'score': 92.4,
      'license': '不开源',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 42
    },
    {
      'model': 'Pareto 26.10 Preview',
      'org': 'Unbiased',
      'score': 92.4,
      'src': 'benchlm',
      'rank': 43,
      'protocol': '无工具'
    },
    {
      'model': 'Hy4 preview',
      'org': '腾讯AI实验室',
      'score': 92.3,
      'license': '免费商用授权',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 44
    },
    {
      'model': 'GLM-5.2',
      'org': '智谱AI',
      'score': 91.8561,
      'license': '免费商用授权',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 45
    },
    {
      'model': 'Qwen3.8-Flash-Next',
      'org': '阿里巴巴',
      'score': 91.7,
      'license': '有条件免费商用授权',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 46
    },
    {
      'model': 'GPT-5.6 Luna',
      'org': 'OpenAI',
      'score': 91.6035,
      'license': '不开源',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 47
    },
    {
      'model': 'Claude Opus 4.6',
      'org': 'Anthropic',
      'score': 91.31,
      'license': '不开源',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 48
    },
    {
      'model': 'Qwen3.8-Omni-Flash',
      'org': 'Alibaba',
      'score': 91,
      'src': 'benchlm',
      'rank': 49,
      'protocol': '无工具'
    },
    {
      'model': 'DeepSeek-V4.1-Flash',
      'org': 'DeepSeek-AI',
      'score': 90.9,
      'license': '免费商用授权',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 50
    },
    {
      'model': 'Beam 1.0 501B-A23B',
      'org': 'Reflection AI',
      'score': 90.6,
      'src': 'benchlm',
      'rank': 51,
      'protocol': '无工具'
    },
    {
      'model': 'Claude Sonnet 5',
      'org': 'Anthropic',
      'score': 90.5303,
      'license': '不开源',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 52
    },
    {
      'model': 'Kimi K2.6',
      'org': 'Moonshot AI',
      'score': 90.5,
      'license': '免费商用授权',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 53
    },
    {
      'model': 'Gemini 3.0 Flash',
      'org': 'Google DeepMind',
      'score': 90.4,
      'license': '不开源',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 54
    },
    {
      'model': 'Qwen 3.6 Plus Preview',
      'org': '阿里巴巴',
      'score': 90.4,
      'license': '不开源',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 55
    },
    {
      'model': 'Hy3',
      'org': '腾讯AI实验室',
      'score': 90.4,
      'license': '免费商用授权',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 56
    },
    {
      'model': 'Particle-1',
      'org': 'Particle AI',
      'score': 90.4,
      'src': 'benchlm',
      'rank': 57,
      'protocol': '无工具'
    },
    {
      'model': 'Beam 1.0 501B-A23B FP8',
      'org': 'Reflection AI',
      'score': 90.3,
      'src': 'benchlm',
      'rank': 58,
      'protocol': '无工具'
    },
    {
      'model': 'GLM-5.3-Flash',
      'org': '智谱AI',
      'score': 90.1515,
      'license': '免费商用授权',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 59
    },
    {
      'model': 'Claude Sonnet 4.6',
      'org': 'Anthropic',
      'score': 89.9,
      'license': '不开源',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 60
    },
    {
      'model': 'Interfaze Beta',
      'org': 'Interfaze',
      'score': 89.9,
      'src': 'benchlm',
      'rank': 61,
      'protocol': '无工具'
    },
    {
      'model': 'Nemotron 3.5 Super VL 120B A12B NVFP4',
      'org': 'NVIDIA',
      'score': 89.9,
      'src': 'benchlm',
      'rank': 62,
      'protocol': '无工具'
    },
    {
      'model': 'GPT-5.4',
      'org': 'OpenAI',
      'score': 89.899,
      'license': '不开源',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 63
    },
    {
      'model': 'Nemotron 3.5 Super VL 120B A12B',
      'org': 'NVIDIA',
      'score': 89.52,
      'src': 'benchlm',
      'rank': 64,
      'protocol': '无工具'
    },
    {
      'model': 'Muse Spark',
      'org': 'Facebook AI研究实验室',
      'score': 89.5,
      'license': '不开源',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 65
    },
    {
      'model': 'Inkling-Small',
      'org': 'Thinking Machines Lab',
      'score': 89.5,
      'src': 'benchlm',
      'rank': 66,
      'protocol': '无工具'
    },
    {
      'model': 'Beam 1.0 501B-A23B NVFP4',
      'org': 'Reflection AI',
      'score': 89.3,
      'src': 'benchlm',
      'rank': 67,
      'protocol': '无工具'
    },
    {
      'model': 'Mercury 3',
      'org': 'Inception',
      'score': 89.23,
      'src': 'benchlm',
      'rank': 68,
      'protocol': '无工具'
    },
    {
      'model': 'Qwen3.8-27B',
      'org': '阿里巴巴',
      'score': 89.2,
      'license': '免费商用授权',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 69
    },
    {
      'model': 'Ornith-1.5-35B-A3B',
      'org': 'Ornith AI',
      'score': 89.2,
      'src': 'benchlm',
      'rank': 70,
      'protocol': '无工具'
    },
    {
      'model': 'DeepSeek V4 Pro (High)',
      'org': 'DeepSeek',
      'score': 89.1,
      'src': 'benchlm',
      'rank': 71,
      'protocol': '无工具'
    },
    {
      'model': 'Muse Spark Open',
      'org': 'Facebook AI研究实验室',
      'score': 89,
      'license': '有条件免费商用；提供模型服务且连续12个月合计营收超过2000万美元须与Meta另签协议',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 72
    },
    {
      'model': 'Solar Pro 4',
      'org': 'Upstage',
      'score': 89,
      'src': 'benchlm',
      'rank': 73,
      'protocol': '无工具'
    },
    {
      'model': 'Grok 4 Heavy',
      'org': 'xAI',
      'score': 88.9,
      'license': '不开源',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 74
    },
    {
      'model': 'Nemotron 3.5 Bolt 74B-A9B BF16',
      'org': 'NVIDIA',
      'score': 88.83,
      'src': 'benchlm',
      'rank': 75,
      'protocol': '无工具'
    },
    {
      'model': 'Grok 4.3 Beta',
      'org': 'xAI',
      'score': 88.8258,
      'license': '不开源',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 76
    },
    {
      'model': 'Grok 4.20',
      'org': 'xAI',
      'score': 88.5,
      'src': 'benchlm',
      'rank': 77,
      'protocol': '无工具'
    },
    {
      'model': 'GPT-5-Pro',
      'org': 'OpenAI',
      'score': 88.4,
      'license': '不开源',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 78
    },
    {
      'model': 'Qwen3.5-397B-A17B',
      'org': '阿里巴巴',
      'score': 88.4,
      'license': '免费商用授权',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 79
    },
    {
      'model': 'OrcaCyber-Nano-1.0',
      'org': 'OrcaRouter',
      'score': 88.28,
      'src': 'benchlm',
      'rank': 80,
      'protocol': '无工具'
    },
    {
      'model': 'Inkling',
      'org': 'Thinking Machines Lab',
      'score': 88.2576,
      'license': '免费商用授权',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 81
    },
    {
      'model': 'GPT-5.1',
      'org': 'OpenAI',
      'score': 88.1,
      'license': '不开源',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 82
    },
    {
      'model': 'DeepSeek V4 Flash 0731',
      'org': 'DeepSeek',
      'score': 88.1,
      'src': 'benchlm',
      'rank': 83,
      'protocol': '无工具'
    },
    {
      'model': 'Qwen3.6-27B',
      'org': '阿里巴巴',
      'score': 87.8,
      'license': '免费商用授权',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 84
    },
    {
      'model': 'Kimi K2.5',
      'org': 'Moonshot AI',
      'score': 87.6,
      'license': '免费商用授权',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 85
    },
    {
      'model': 'Qwen3-Max-Thinking',
      'org': '阿里巴巴',
      'score': 87.4,
      'license': '不开源',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 86
    },
    {
      'model': 'DeepSeek V4 Flash (High)',
      'org': 'DeepSeek',
      'score': 87.4,
      'src': 'benchlm',
      'rank': 87,
      'protocol': '无工具'
    },
    {
      'model': 'Hy3 Preview',
      'org': 'Tencent',
      'score': 87.2,
      'src': 'benchlm',
      'rank': 88,
      'protocol': '无工具'
    },
    {
      'model': 'Grok 4',
      'org': 'xAI',
      'score': 87,
      'license': '不开源',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 89
    },
    {
      'model': 'Opus 4.5',
      'org': 'Anthropic',
      'score': 87,
      'license': '不开源',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 90
    },
    {
      'model': 'MiniMax M2.7',
      'org': 'MiniMax',
      'score': 87,
      'src': 'benchlm',
      'rank': 91,
      'protocol': '无工具'
    },
    {
      'model': 'Nemotron 3 Ultra',
      'org': 'NVIDIA',
      'score': 87,
      'src': 'benchlm',
      'rank': 92,
      'protocol': '无工具'
    },
    {
      'model': 'Inkling 2 Mini',
      'org': 'Thinking Machines Lab',
      'score': 86.6,
      'src': 'benchlm',
      'rank': 93,
      'protocol': '无工具'
    },
    {
      'model': 'Nemotron 3.5 Bolt 74B-A9B',
      'org': 'NVIDIA',
      'score': 86.43,
      'src': 'benchlm',
      'rank': 94,
      'protocol': '无工具'
    },
    {
      'model': 'Gemini 2.5-Pro',
      'org': 'Google DeepMind',
      'score': 86.4,
      'license': '不开源',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 95
    },
    {
      'model': 'Ornith-1.5-9B',
      'org': 'Ornith AI',
      'score': 86.4,
      'src': 'benchlm',
      'rank': 96,
      'protocol': '无工具'
    },
    {
      'model': 'ERNIE 5.0',
      'org': '百度',
      'score': 86.36,
      'license': '不开源',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 97
    },
    {
      'model': 'Solar Open 2',
      'org': 'Upstage',
      'score': 86.3,
      'src': 'benchlm',
      'rank': 98,
      'protocol': '无工具'
    },
    {
      'model': 'GLM 5.1',
      'org': '智谱AI',
      'score': 86.2,
      'license': '免费商用授权',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 99
    },
    {
      'model': 'GPT-5',
      'org': 'OpenAI',
      'score': 86.1742,
      'license': '不开源',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 100
    },
    {
      'model': 'GLM-5',
      'org': '智谱AI',
      'score': 86,
      'license': '免费商用授权',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 101
    },
    {
      'model': 'Claude Fable 5',
      'org': 'Anthropic',
      'score': 85.8586,
      'license': '不开源',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 102
    },
    {
      'model': 'Ternary Bonsai 2 27B',
      'org': 'Prism ML',
      'score': 85.76,
      'src': 'benchlm',
      'rank': 103,
      'protocol': '无工具'
    },
    {
      'model': 'Grok 4 Fast',
      'org': 'xAI',
      'score': 85.7,
      'license': '不开源',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 104
    },
    {
      'model': 'GLM-4.7',
      'org': '智谱AI',
      'score': 85.7,
      'license': '免费商用授权',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 105
    },
    {
      'model': 'A.X K2',
      'org': 'SK Telecom',
      'score': 85.6,
      'src': 'benchlm',
      'rank': 106,
      'protocol': '无工具'
    },
    {
      'model': 'Qwen3.5-27B',
      'org': '阿里巴巴',
      'score': 85.5,
      'license': '免费商用授权',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 107
    },
    {
      'model': 'MiniMax M2.5',
      'org': 'MiniMaxAI',
      'score': 85.2,
      'license': '免费商用授权',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 108
    },
    {
      'model': 'Ripple-65B Preview',
      'org': 'Ricursive Intelligence',
      'score': 85.2,
      'src': 'benchlm',
      'rank': 109,
      'protocol': '无工具'
    },
    {
      'model': 'Ling 3.0 Flash',
      'org': 'InclusionAI',
      'score': 84.97,
      'src': 'benchlm',
      'rank': 110,
      'protocol': '无工具'
    },
    {
      'model': 'Qwen3.6-35B-A3B',
      'org': '阿里巴巴',
      'score': 84.8485,
      'license': '免费商用授权',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 111
    },
    {
      'model': 'Claude Sonnet 3.7',
      'org': 'Anthropic',
      'score': 84.8,
      'license': '不开源',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 112
    },
    {
      'model': 'Grok-3 - Reasoning Beta',
      'org': 'xAI',
      'score': 84.6,
      'license': '不开源',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 113
    },
    {
      'model': 'Kimi K2 Thinking',
      'org': 'Moonshot AI',
      'score': 84.5,
      'license': '免费商用授权',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 114
    },
    {
      'model': 'Gemma 4 31B',
      'org': 'Google DeepMind',
      'score': 84.3,
      'license': '免费商用授权',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 115
    },
    {
      'model': 'MAI-Thinking-1',
      'org': '微软',
      'score': 84.2,
      'license': '不开源',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 116
    },
    {
      'model': 'Grok-3 mini - Reasoning',
      'org': 'xAI',
      'score': 84,
      'license': '不开源',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 117
    },
    {
      'model': 'Gemini 2.5 Pro Experimental 03-25',
      'org': 'Google DeepMind',
      'score': 84,
      'license': '不开源',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 118
    },
    {
      'model': 'o3-pro',
      'org': 'OpenAI',
      'score': 84,
      'license': '不开源',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 119
    },
    {
      'model': 'Ling 3.0 Flash FP8',
      'org': 'InclusionAI',
      'score': 84,
      'src': 'benchlm',
      'rank': 120,
      'protocol': '无工具'
    },
    {
      'model': 'Muse Glimmer-30B',
      'org': 'Facebook AI研究实验室',
      'score': 83.5,
      'license': '免费商用授权',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 121
    },
    {
      'model': 'Gemini 3.5 Flash-Lite',
      'org': 'Google DeepMind',
      'score': 83.3333,
      'license': '不开源',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 122
    },
    {
      'model': 'OpenAI o3',
      'org': 'OpenAI',
      'score': 83.3,
      'license': '不开源',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 123
    },
    {
      'model': 'Gemini-2.5-Pro-Preview-05-06',
      'org': 'Google DeepMind',
      'score': 83,
      'license': '不开源',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 124
    },
    {
      'model': 'Gemini 2.5 Flash',
      'org': 'Google DeepMind',
      'score': 82.8,
      'license': '不开源',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 125
    },
    {
      'model': 'DeepSeek V3.2',
      'org': 'DeepSeek-AI',
      'score': 82.4,
      'license': '免费商用授权',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 126
    },
    {
      'model': 'Gemma 4 26B A4B',
      'org': 'Google DeepMind',
      'score': 82.3,
      'license': '免费商用授权',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 127
    },
    {
      'model': 'K-EXAONE 2.0',
      'org': 'LG AI Research',
      'score': 82.2,
      'src': 'benchlm',
      'rank': 128,
      'protocol': '无工具'
    },
    {
      'model': 'Qwen3.7-Plus',
      'org': '阿里巴巴',
      'score': 81.8182,
      'license': '不开源',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 129
    },
    {
      'model': 'Gemini 3.1 Flash-Lite',
      'org': 'Google DeepMind',
      'score': 81.8182,
      'license': '不开源',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 130
    },
    {
      'model': 'Qwen3.5-9B',
      'org': '阿里巴巴',
      'score': 81.7,
      'license': '免费商用授权',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 131
    },
    {
      'model': 'OpenAI o4 - mini',
      'org': 'OpenAI',
      'score': 81.4,
      'license': '不开源',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 132
    },
    {
      'model': 'MiniMax M3',
      'org': 'MiniMaxAI',
      'score': 81.3131,
      'license': '不可以商用',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 133
    },
    {
      'model': 'Qwen3-235B-A22B-Thinking-2507',
      'org': '阿里巴巴',
      'score': 81.1,
      'license': '免费商用授权',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 134
    },
    {
      'model': 'DeepSeek-R1-0528',
      'org': 'DeepSeek-AI',
      'score': 81,
      'license': '免费商用授权',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 135
    },
    {
      'model': 'Opus 4.1',
      'org': 'Anthropic',
      'score': 81,
      'license': '不开源',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 136
    },
    {
      'model': 'GLM-4.6',
      'org': '智谱AI',
      'score': 81,
      'license': '免费商用授权',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 137
    },
    {
      'model': 'M2.1',
      'org': 'MiniMaxAI',
      'score': 81,
      'license': '免费商用授权',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 138
    },
    {
      'model': 'DeepSeek-V3.1 Terminus',
      'org': 'DeepSeek-AI',
      'score': 80.7,
      'license': '免费商用授权',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 139
    },
    {
      'model': 'Grok 3',
      'org': 'xAI',
      'score': 80.4,
      'license': '不开源',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 140
    },
    {
      'model': 'GPT OSS 120B',
      'org': 'OpenAI',
      'score': 80.1,
      'license': '免费商用授权',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 141
    },
    {
      'model': 'DeepSeek-V3.1',
      'org': 'DeepSeek-AI',
      'score': 80.1,
      'license': '免费商用授权',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 142
    },
    {
      'model': 'DeepSeek V3.2-Exp',
      'org': 'DeepSeek-AI',
      'score': 79.9,
      'license': '免费商用授权',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 143
    },
    {
      'model': 'OpenAI o3-mini (high)',
      'org': 'OpenAI',
      'score': 79.7,
      'license': '不开源',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 144
    },
    {
      'model': 'GLM-4.5',
      'org': '智谱AI',
      'score': 79.1,
      'license': '免费商用授权',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 145
    },
    {
      'model': 'Mercury 2.5',
      'org': 'Inception',
      'score': 79,
      'src': 'benchlm',
      'rank': 146,
      'protocol': '无工具'
    },
    {
      'model': 'Gemma 4 12B',
      'org': 'Google',
      'score': 78.8,
      'src': 'benchlm',
      'rank': 147,
      'protocol': '无工具'
    },
    {
      'model': 'MiniMax M2',
      'org': 'MiniMaxAI',
      'score': 78,
      'license': '免费商用授权',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 148
    },
    {
      'model': 'Qwen3-235B-A22B-2507',
      'org': '阿里巴巴',
      'score': 77.5,
      'license': '免费商用授权',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 149
    },
    {
      'model': 'OpenAI o1',
      'org': 'OpenAI',
      'score': 77.3,
      'license': '不开源',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 150
    },
    {
      'model': 'Intern-S1',
      'org': '上海人工智能实验室',
      'score': 77.3,
      'license': '免费商用授权',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 151
    },
    {
      'model': 'Spark-X2.6-4B',
      'org': 'SparkLLM',
      'score': 77.1,
      'src': 'benchlm',
      'rank': 152,
      'protocol': '无工具'
    },
    {
      'model': 'ERNIE-4.5-VL-424B-A47B-Base',
      'org': '百度',
      'score': 76.8,
      'license': '免费商用授权',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 153
    },
    {
      'model': 'Trinity-Large-Thinking',
      'org': 'Arcee AI',
      'score': 76.3,
      'src': 'benchlm',
      'rank': 154,
      'protocol': '无工具'
    },
    {
      'model': 'Nemotron 3.5 Lightning 30B A3B NVFP4',
      'org': 'NVIDIA',
      'score': 75.57,
      'src': 'benchlm',
      'rank': 155,
      'protocol': '无工具'
    },
    {
      'model': 'Claude Sonnet 4',
      'org': 'Anthropic',
      'score': 75.4,
      'license': '不开源',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 156
    },
    {
      'model': 'GLM-4.7-Flash',
      'org': '智谱AI',
      'score': 75.2,
      'license': '免费商用授权',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 157
    },
    {
      'model': 'Kimi K2',
      'org': 'Moonshot AI',
      'score': 75.1,
      'license': '免费商用授权',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 158
    },
    {
      'model': 'GLM-4.5-Air',
      'org': '智谱AI',
      'score': 75,
      'license': '免费商用授权',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 159
    },
    {
      'model': 'LFM2.5-24B-A2B',
      'org': 'LiquidAI',
      'score': 74.42,
      'src': 'benchlm',
      'rank': 160,
      'protocol': '无工具'
    },
    {
      'model': 'Llama 4 Behemoth Instruct',
      'org': 'Facebook AI研究实验室',
      'score': 73.7,
      'license': '免费商用授权',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 161
    },
    {
      'model': 'Pangu Pro MoE',
      'org': '华为',
      'score': 73.7,
      'license': '免费商用授权',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 162
    },
    {
      'model': 'Claude Sonnet 4.5',
      'org': 'Anthropic',
      'score': 73.7,
      'license': '不开源',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 163
    },
    {
      'model': 'Mercury 2',
      'org': 'Inception',
      'score': 73.6,
      'src': 'benchlm',
      'rank': 164,
      'protocol': '无工具'
    },
    {
      'model': 'Haiku 4.5',
      'org': 'Anthropic',
      'score': 73.3,
      'license': '不开源',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 165
    },
    {
      'model': 'Step3',
      'org': 'StepFunAI',
      'score': 73,
      'license': '免费商用授权',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 166
    },
    {
      'model': 'DeepSeek-V4-Pro',
      'org': 'DeepSeek-AI',
      'score': 72.9,
      'license': '免费商用授权',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 167
    },
    {
      'model': 'GPT-5.4 nano',
      'org': 'OpenAI',
      'score': 72.2222,
      'license': '不开源',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 168
    },
    {
      'model': 'Nemotron 3 Nano Omni 30B A3B',
      'org': 'NVIDIA',
      'score': 72.2,
      'src': 'benchlm',
      'rank': 169,
      'protocol': '无工具'
    },
    {
      'model': 'DeepSeek-R1',
      'org': 'DeepSeek-AI',
      'score': 71.5,
      'license': '免费商用授权',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 170
    },
    {
      'model': 'gpt-oss-20b',
      'org': 'OpenAI',
      'score': 71.5,
      'license': '免费商用授权',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 171
    },
    {
      'model': 'GPT-4.5',
      'org': 'OpenAI',
      'score': 71.4,
      'license': '不开源',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 172
    },
    {
      'model': 'Hunyuan-A13B-Instruct',
      'org': '腾讯AI实验室',
      'score': 71.2,
      'license': '免费商用授权',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 173
    },
    {
      'model': 'DeepSeek-V4-Flash',
      'org': 'DeepSeek-AI',
      'score': 71.2,
      'license': '免费商用授权',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 174
    },
    {
      'model': 'Qwen3-235B-A22B',
      'org': '阿里巴巴',
      'score': 71.1,
      'license': '免费商用授权',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 175
    },
    {
      'model': 'ZAYA1-8B',
      'org': 'Zyphra',
      'score': 71,
      'src': 'benchlm',
      'rank': 176,
      'protocol': '无工具'
    },
    {
      'model': 'Magistral-Medium-2506',
      'org': 'MistralAI',
      'score': 70.83,
      'license': '不开源',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 177
    },
    {
      'model': 'OpenAI o3-mini',
      'org': 'OpenAI',
      'score': 70.6,
      'license': '不开源',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 178
    },
    {
      'model': 'Qwen3-30B-A3B-2507',
      'org': '阿里巴巴',
      'score': 70.4,
      'license': '免费商用授权',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 179
    },
    {
      'model': 'MiniCPM5-2B',
      'org': 'OpenBMB',
      'score': 70.2,
      'src': 'benchlm',
      'rank': 180,
      'protocol': '无工具'
    },
    {
      'model': 'GPT-4o',
      'org': 'OpenAI',
      'score': 70.1,
      'license': '不开源',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 181
    },
    {
      'model': 'Claude Opus 4',
      'org': 'Anthropic',
      'score': 70.1,
      'license': '不开源',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 182
    },
    {
      'model': 'MiniMax-M1-80k',
      'org': 'MiniMaxAI',
      'score': 70,
      'license': '免费商用授权',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 183
    },
    {
      'model': 'Llama 4 Maverick Instruct',
      'org': 'Facebook AI研究实验室',
      'score': 69.8,
      'license': '免费商用授权',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 184
    },
    {
      'model': 'LongCat-Flash-Lite-Sparse',
      'org': 'Meituan',
      'score': 69.49,
      'src': 'benchlm',
      'rank': 185,
      'protocol': '无工具'
    },
    {
      'model': 'Hunyuan-T1',
      'org': '腾讯AI实验室',
      'score': 69.3,
      'license': '不开源',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 186
    },
    {
      'model': 'MiniMax-M1-40k',
      'org': 'MiniMaxAI',
      'score': 69.2,
      'license': '免费商用授权',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 187
    },
    {
      'model': 'GPT-5-mini',
      'org': 'OpenAI',
      'score': 69,
      'license': '不开源',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 188
    },
    {
      'model': 'DeepSeek-V3-0324',
      'org': 'DeepSeek-AI',
      'score': 68.4,
      'license': '免费商用授权',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 189
    },
    {
      'model': 'Qwen3-32B',
      'org': '阿里巴巴',
      'score': 68.4,
      'license': '免费商用授权',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 190
    },
    {
      'model': 'Magistral-Small-2506',
      'org': 'MistralAI',
      'score': 68.18,
      'license': '免费商用授权',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 191
    },
    {
      'model': 'GPT-4o(2025-03-27)',
      'org': 'OpenAI',
      'score': 66.9,
      'license': '不开源',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 192
    },
    {
      'model': 'Gemini 2.5 Flash-Lite',
      'org': 'Google DeepMind',
      'score': 66.7,
      'license': '不开源',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 193
    },
    {
      'model': 'GPT-4.1',
      'org': 'OpenAI',
      'score': 66.3,
      'license': '不开源',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 194
    },
    {
      'model': 'Grok 3 mini',
      'org': 'xAI',
      'score': 66.2,
      'license': '不开源',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 195
    },
    {
      'model': 'Qwen3-4B-Thinking-2507',
      'org': '阿里巴巴',
      'score': 65.8,
      'license': '免费商用授权',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 196
    },
    {
      'model': 'Gemini 2.0 Flash Experimental',
      'org': 'Google DeepMind',
      'score': 65.2,
      'license': '不开源',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 197
    },
    {
      'model': 'DeepSeek-R1-Distill-Llama-70B',
      'org': 'DeepSeek-AI',
      'score': 65.2,
      'license': '免费商用授权',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 198
    },
    {
      'model': 'Claude 3.5 Sonnet New',
      'org': 'Anthropic',
      'score': 65,
      'license': '不开源',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 199
    },
    {
      'model': 'GPT-4.1 mini',
      'org': 'OpenAI',
      'score': 65,
      'license': '不开源',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 200
    },
    {
      'model': 'Gemini 2.0 Pro Experimental',
      'org': 'Google DeepMind',
      'score': 64.7,
      'license': '不开源',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 201
    },
    {
      'model': 'Mellum2.1-12B-A2.5B-Thinking',
      'org': 'JetBrains',
      'score': 64.6,
      'src': 'benchlm',
      'rank': 202,
      'protocol': '无工具'
    },
    {
      'model': 'GPT-5.4 mini',
      'org': 'OpenAI',
      'score': 64.1414,
      'license': '不开源',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 203
    },
    {
      'model': 'LFM3-1.7B',
      'org': 'LiquidAI',
      'score': 63.37,
      'src': 'benchlm',
      'rank': 204,
      'protocol': '无工具'
    },
    {
      'model': 'Trinity-Large-Preview',
      'org': 'Arcee AI',
      'score': 63.3,
      'src': 'benchlm',
      'rank': 205,
      'protocol': '无工具'
    },
    {
      'model': 'Qwen3-8B',
      'org': '阿里巴巴',
      'score': 62,
      'license': '免费商用授权',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 206
    },
    {
      'model': 'Qwen3-4B-2507',
      'org': '阿里巴巴',
      'score': 62,
      'license': '免费商用授权',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 207
    },
    {
      'model': 'Hunyuan-7B',
      'org': '腾讯AI实验室',
      'score': 60.1,
      'license': '免费商用授权',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 208
    },
    {
      'model': 'OpenAI o1-mini',
      'org': 'OpenAI',
      'score': 60,
      'license': '不开源',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 209
    },
    {
      'model': 'Claude 3.5 Sonnet',
      'org': 'Anthropic',
      'score': 59.4,
      'license': '不开源',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 210
    },
    {
      'model': 'DeepSeek-V3',
      'org': 'DeepSeek-AI',
      'score': 59.1,
      'license': '免费商用授权',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 211
    },
    {
      'model': 'Gemma 4 E4B',
      'org': 'Google DeepMind',
      'score': 58.6,
      'license': '免费商用授权',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 212
    },
    {
      'model': 'QwQ-32B',
      'org': '阿里巴巴',
      'score': 58,
      'license': '免费商用授权',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 213
    },
    {
      'model': 'Mellum2-12B-A2.5B-Thinking',
      'org': 'JetBrains',
      'score': 57.6,
      'src': 'benchlm',
      'rank': 214,
      'protocol': '无工具'
    },
    {
      'model': 'GPT-5-Nano',
      'org': 'OpenAI',
      'score': 57.5758,
      'license': '不开源',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 215
    },
    {
      'model': 'Hunyuan-TurboS',
      'org': '腾讯AI实验室',
      'score': 57.5,
      'license': '不开源',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 216
    },
    {
      'model': 'ZAYA1-74B-Preview',
      'org': 'Zyphra',
      'score': 57.3,
      'src': 'benchlm',
      'rank': 217,
      'protocol': '无工具'
    },
    {
      'model': 'Llama 4 Scout Instruct',
      'org': 'Facebook AI研究实验室',
      'score': 57.2,
      'license': '免费商用授权',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 218
    },
    {
      'model': 'Grok 2',
      'org': 'xAI',
      'score': 56,
      'license': '免费商用授权',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 219
    },
    {
      'model': 'Qwen3-30B-A3B',
      'org': '阿里巴巴',
      'score': 54.8,
      'license': '免费商用授权',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 220
    },
    {
      'model': 'Gemini 1.5 Pro',
      'org': 'Google DeepMind',
      'score': 53.5,
      'license': '不开源',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 221
    },
    {
      'model': 'Gemini 2.0 Flash-Lite',
      'org': 'Google DeepMind',
      'score': 51.5,
      'license': '不开源',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 222
    },
    {
      'model': 'Llama3.3-70B-Instruct',
      'org': 'Facebook AI研究实验室',
      'score': 50.5,
      'license': '免费商用授权',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 223
    },
    {
      'model': 'Claude3-Opus',
      'org': 'Anthropic',
      'score': 50.4,
      'license': '不开源',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 224
    },
    {
      'model': 'GPT-4.1 nano',
      'org': 'OpenAI',
      'score': 50.3,
      'license': '不开源',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 225
    },
    {
      'model': 'DeepSeek-R1-Distill-Qwen-7B',
      'org': 'DeepSeek-AI',
      'score': 49.5,
      'license': '免费商用授权',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 226
    },
    {
      'model': 'Llama3.1-405B Instruct',
      'org': 'Facebook AI研究实验室',
      'score': 49,
      'license': '免费商用授权',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 227
    },
    {
      'model': 'Phi-4-instruct (reasoning-trained)',
      'org': '微软',
      'score': 49,
      'license': '不开源',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 228
    },
    {
      'model': 'Llama3.1-70B-Instruct',
      'org': 'Facebook AI研究实验室',
      'score': 48,
      'license': '免费商用授权',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 229
    },
    {
      'model': 'Mistral-Small-3.2',
      'org': 'MistralAI',
      'score': 46.13,
      'license': '免费商用授权',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 230
    },
    {
      'model': 'Mistral-Small-3.1-24B-Instruct-2503',
      'org': 'MistralAI',
      'score': 45.96,
      'license': '免费商用授权',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 231
    },
    {
      'model': 'Qwen2.5-72B',
      'org': '阿里巴巴',
      'score': 45.9,
      'license': '免费商用授权',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 232
    },
    {
      'model': 'LLaDA2.2-mini',
      'org': 'InclusionAI',
      'score': 44.41,
      'src': 'benchlm',
      'rank': 233,
      'protocol': '无工具'
    },
    {
      'model': 'Soofi S 30B-A3B',
      'org': 'Soofi Project',
      'score': 43.4,
      'src': 'benchlm',
      'rank': 234,
      'protocol': '无工具'
    },
    {
      'model': 'Gemma 3 - 27B (IT)',
      'org': 'Google DeepMind',
      'score': 42.4,
      'license': '免费商用授权',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 235
    },
    {
      'model': 'Claude 3.5 Haiku',
      'org': 'Anthropic',
      'score': 41.6,
      'license': '不开源',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 236
    },
    {
      'model': 'GPT-4o mini',
      'org': 'OpenAI',
      'score': 41.1,
      'license': '不开源',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 237
    },
    {
      'model': 'Gemma 3 - 12B (IT)',
      'org': 'Google DeepMind',
      'score': 40.9,
      'license': '免费商用授权',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 238
    },
    {
      'model': 'Mellum2-12B-A2.5B-Instruct',
      'org': 'JetBrains',
      'score': 40.9,
      'src': 'benchlm',
      'rank': 239,
      'protocol': '无工具'
    },
    {
      'model': 'Qwen2.5-7B',
      'org': '阿里巴巴',
      'score': 36.4,
      'license': '免费商用授权',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 240
    },
    {
      'model': 'Phi-4-mini-instruct (3.8B)',
      'org': '微软',
      'score': 36,
      'license': '免费商用授权',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 241
    },
    {
      'model': 'Grok-1.5',
      'org': 'xAI',
      'score': 35.9,
      'license': '不开源',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 242
    },
    {
      'model': 'C4AI Aya Vision 32B',
      'org': 'CohereAI',
      'score': 33.84,
      'license': '不可以商用',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 243
    },
    {
      'model': 'Gemma 2 - 9B',
      'org': 'Google Research',
      'score': 32.8,
      'license': '免费商用授权',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 244
    },
    {
      'model': 'Llama-3.2-3B',
      'org': 'Facebook AI研究实验室',
      'score': 26.6,
      'license': '免费商用授权',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 245
    },
    {
      'model': 'Llama3.1-8B-Instruct',
      'org': 'Facebook AI研究实验室',
      'score': 26.3,
      'license': '免费商用授权',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 246
    },
    {
      'model': 'MiniCPM5-1B',
      'org': 'OpenBMB',
      'score': 26.26,
      'license': '免费商用授权',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 247
    },
    {
      'model': 'Llama3.1-8B',
      'org': 'Facebook AI研究实验室',
      'score': 25.8,
      'license': '免费商用授权',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 248
    },
    {
      'model': 'LFM2.5-230M',
      'org': 'LiquidAI',
      'score': 25.41,
      'src': 'benchlm',
      'rank': 249,
      'protocol': '无工具'
    },
    {
      'model': 'Mistral-7B-Instruct-v0.3',
      'org': 'MistralAI',
      'score': 24.7,
      'license': '免费商用授权',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 250
    },
    {
      'model': 'Qwen2.5-3B',
      'org': '阿里巴巴',
      'score': 24.3,
      'license': '免费商用授权',
      'protocol': '无工具',
      'src': 'datalearner',
      'rank': 251
    }
  ]
};
