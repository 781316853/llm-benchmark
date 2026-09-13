// 数据源:ProgramBench(cleanroom 程序重建·编码 Agent,更新于 2026-09-13)
// 来源:https://programbench.com/(官方:https://programbench.com/) · 补充镜像 https://www.vals.ai/benchmarks/programbench
// 字段说明:model=模型名;effort=推理档位;agent=代理;score=Fully Resolved 完全解决率(%);almost=Almost(≥95% 行为测试通过率,%);rawPassRate=隐藏测试平均通过率(vals 独有,%)
// 用途:已计入总览综合分(权重 8%)与命中数;「权威基准测试」页完整展示。
window.PROGRAMBENCH = {
  'source': 'ProgramBench',
  'url': 'https://programbench.com/',
  'officialUrl': 'https://programbench.com/',
  'updated': '2026-09-13',
  'refreshedAt': '2026-09-13 13:43',
  'stats': {
    'tasks': 200,
    'entries': 52
  },
  'desc': 'ProgramBench:仅给编译后二进制与文档,智能体需从零重建完整代码库并复现原程序行为(200 个真实开源项目任务,行为级隐藏测试,不联网、禁止反编译);Fully Resolved 为主指标、Almost(≥95% 行为测试通过)与 Raw Pass Rate(vals 镜像)为辅助,均越高越好。',
  'models': [
    {
      'model': 'Claude Fable 5 1',
      'org': null,
      'agent': 'mini-SWE-agent',
      'effort': null,
      'score': 7,
      'almost': 53.5,
      'rawPassRate': 82.7,
      'src': 'vals',
      'rank': 1
    },
    {
      'model': 'Gpt 6 Astra',
      'org': null,
      'agent': 'mini-SWE-agent',
      'effort': null,
      'score': 5.5,
      'almost': 50,
      'rawPassRate': 85.4,
      'src': 'vals',
      'rank': 2
    },
    {
      'rank': 3,
      'model': 'Claude Opus 5',
      'effort': 'xhigh',
      'agent': 'mini-SWE-agent',
      'score': 4.5,
      'almost': 41.5,
      'rawPassRate': 82.3,
      'src': 'official'
    },
    {
      'model': 'Claude Fable 5',
      'org': null,
      'agent': 'mini-SWE-agent',
      'effort': null,
      'score': 2,
      'almost': 33,
      'rawPassRate': 76.8,
      'src': 'vals',
      'rank': 4
    },
    {
      'model': 'Kimi K3',
      'org': null,
      'agent': 'mini-SWE-agent',
      'effort': null,
      'score': 2,
      'almost': null,
      'rawPassRate': null,
      'src': 'vals',
      'rank': 5
    },
    {
      'rank': 6,
      'model': 'GPT-5.6 Sol',
      'effort': 'xhigh',
      'agent': 'mini-SWE-agent',
      'score': 1.5,
      'almost': 23,
      'rawPassRate': 77.6,
      'src': 'official'
    },
    {
      'model': 'Glm 5.3',
      'org': null,
      'agent': 'mini-SWE-agent',
      'effort': null,
      'score': 1.5,
      'almost': null,
      'rawPassRate': null,
      'src': 'vals',
      'rank': 7
    },
    {
      'rank': 8,
      'model': 'Claude Opus 4.8',
      'effort': 'xhigh',
      'agent': 'mini-SWE-agent',
      'score': 1,
      'almost': 16.5,
      'rawPassRate': null,
      'src': 'official'
    },
    {
      'model': 'Gemini 3.8 Flash',
      'org': null,
      'agent': 'mini-SWE-agent',
      'effort': null,
      'score': 1,
      'almost': null,
      'rawPassRate': null,
      'src': 'vals',
      'rank': 9
    },
    {
      'rank': 10,
      'model': 'GPT 5.5',
      'effort': 'xhigh',
      'agent': 'mini-SWE-agent',
      'score': 0.5,
      'almost': 13.5,
      'rawPassRate': null,
      'src': 'official'
    },
    {
      'rank': 11,
      'model': 'GLM-5.2',
      'effort': null,
      'agent': 'mini-SWE-agent',
      'score': 0.5,
      'almost': 8.5,
      'rawPassRate': null,
      'src': 'official'
    },
    {
      'rank': 12,
      'model': 'Gemini 3.6 Flash',
      'effort': null,
      'agent': 'mini-SWE-agent',
      'score': 0.5,
      'almost': 4,
      'rawPassRate': null,
      'src': 'official'
    },
    {
      'rank': 13,
      'model': 'Claude Sonnet 4.6',
      'effort': null,
      'agent': 'mini-SWE-agent',
      'score': 0.5,
      'almost': 1,
      'rawPassRate': null,
      'src': 'official'
    },
    {
      'model': 'Gpt 5.6 Terra',
      'org': null,
      'agent': 'mini-SWE-agent',
      'effort': null,
      'score': 0.5,
      'almost': null,
      'rawPassRate': null,
      'src': 'vals',
      'rank': 14
    },
    {
      'model': 'Gpt 5.4 2026 03 05 High',
      'org': null,
      'agent': 'mini-SWE-agent',
      'effort': null,
      'score': 0.5,
      'almost': null,
      'rawPassRate': null,
      'src': 'vals',
      'rank': 15
    },
    {
      'model': 'Inkling Small',
      'org': null,
      'agent': 'mini-SWE-agent',
      'effort': null,
      'score': 0.5,
      'almost': null,
      'rawPassRate': null,
      'src': 'vals',
      'rank': 16
    },
    {
      'rank': 17,
      'model': 'Gemini 3.7 Flash',
      'effort': null,
      'agent': 'mini-SWE-agent',
      'score': 0,
      'almost': 5.5,
      'rawPassRate': null,
      'src': 'official'
    },
    {
      'rank': 18,
      'model': 'Claude Opus 4.7',
      'effort': 'xhigh',
      'agent': 'mini-SWE-agent',
      'score': 0,
      'almost': 4.5,
      'rawPassRate': null,
      'src': 'official'
    },
    {
      'rank': 19,
      'model': 'Gemini 3.5 Flash',
      'effort': null,
      'agent': 'mini-SWE-agent',
      'score': 0,
      'almost': 3,
      'rawPassRate': null,
      'src': 'official'
    },
    {
      'rank': 20,
      'model': 'Claude Opus 4.6',
      'effort': null,
      'agent': 'mini-SWE-agent',
      'score': 0,
      'almost': 2.5,
      'rawPassRate': null,
      'src': 'official'
    },
    {
      'rank': 21,
      'model': 'GPT 5.4',
      'effort': null,
      'agent': 'mini-SWE-agent',
      'score': 0,
      'almost': 0,
      'rawPassRate': null,
      'src': 'official'
    },
    {
      'rank': 22,
      'model': 'Gemini 3.1 Pro',
      'effort': null,
      'agent': 'mini-SWE-agent',
      'score': 0,
      'almost': 0,
      'rawPassRate': null,
      'src': 'official'
    },
    {
      'rank': 23,
      'model': 'Gemini 3 Flash',
      'effort': null,
      'agent': 'mini-SWE-agent',
      'score': 0,
      'almost': 0,
      'rawPassRate': null,
      'src': 'official'
    },
    {
      'rank': 24,
      'model': 'Claude Haiku 4.5',
      'effort': null,
      'agent': 'mini-SWE-agent',
      'score': 0,
      'almost': 0,
      'rawPassRate': null,
      'src': 'official'
    },
    {
      'rank': 25,
      'model': 'GPT 5.4 mini',
      'effort': null,
      'agent': 'mini-SWE-agent',
      'score': 0,
      'almost': 0,
      'rawPassRate': null,
      'src': 'official'
    },
    {
      'rank': 26,
      'model': 'GPT 5 mini',
      'effort': null,
      'agent': 'mini-SWE-agent',
      'score': 0,
      'almost': 0,
      'rawPassRate': null,
      'src': 'official'
    },
    {
      'model': 'Deepseek V4 Pro 0813',
      'org': null,
      'agent': 'mini-SWE-agent',
      'effort': null,
      'score': 0,
      'almost': null,
      'rawPassRate': null,
      'src': 'vals',
      'rank': 27
    },
    {
      'model': 'Claude Sonnet 5',
      'org': null,
      'agent': 'mini-SWE-agent',
      'effort': null,
      'score': 0,
      'almost': null,
      'rawPassRate': null,
      'src': 'vals',
      'rank': 28
    },
    {
      'model': 'Qwen3.8 Max',
      'org': null,
      'agent': 'mini-SWE-agent',
      'effort': null,
      'score': 0,
      'almost': null,
      'rawPassRate': null,
      'src': 'vals',
      'rank': 29
    },
    {
      'model': 'Gpt 5.6 Luna',
      'org': null,
      'agent': 'mini-SWE-agent',
      'effort': null,
      'score': 0,
      'almost': null,
      'rawPassRate': null,
      'src': 'vals',
      'rank': 30
    },
    {
      'model': 'Deepseek V4 Flash 0731',
      'org': null,
      'agent': 'mini-SWE-agent',
      'effort': null,
      'score': 0,
      'almost': null,
      'rawPassRate': null,
      'src': 'vals',
      'rank': 31
    },
    {
      'model': 'Gpt 5.4 2026 03 05',
      'org': null,
      'agent': 'mini-SWE-agent',
      'effort': null,
      'score': 0,
      'almost': null,
      'rawPassRate': null,
      'src': 'vals',
      'rank': 32
    },
    {
      'model': 'Grok 4.5',
      'org': null,
      'agent': 'mini-SWE-agent',
      'effort': null,
      'score': 0,
      'almost': null,
      'rawPassRate': null,
      'src': 'vals',
      'rank': 33
    },
    {
      'model': 'Gpt 5.4 Mini 2026 03 17',
      'org': null,
      'agent': 'mini-SWE-agent',
      'effort': null,
      'score': 0,
      'almost': null,
      'rawPassRate': null,
      'src': 'vals',
      'rank': 34
    },
    {
      'model': 'Muse Spark 1 1',
      'org': null,
      'agent': 'mini-SWE-agent',
      'effort': null,
      'score': 0,
      'almost': null,
      'rawPassRate': null,
      'src': 'vals',
      'rank': 35
    },
    {
      'model': 'Glm 5.1',
      'org': null,
      'agent': 'mini-SWE-agent',
      'effort': null,
      'score': 0,
      'almost': null,
      'rawPassRate': null,
      'src': 'vals',
      'rank': 36
    },
    {
      'model': 'Gemini 3.1 Pro Preview',
      'org': null,
      'agent': 'mini-SWE-agent',
      'effort': null,
      'score': 0,
      'almost': null,
      'rawPassRate': null,
      'src': 'vals',
      'rank': 37
    },
    {
      'model': 'Qwen3.6 Plus',
      'org': null,
      'agent': 'mini-SWE-agent',
      'effort': null,
      'score': 0,
      'almost': null,
      'rawPassRate': null,
      'src': 'vals',
      'rank': 38
    },
    {
      'model': 'Qwen3.8 27b',
      'org': null,
      'agent': 'mini-SWE-agent',
      'effort': null,
      'score': 0,
      'almost': null,
      'rawPassRate': null,
      'src': 'vals',
      'rank': 39
    },
    {
      'model': 'Kimi K2.7 Code',
      'org': null,
      'agent': 'mini-SWE-agent',
      'effort': null,
      'score': 0,
      'almost': null,
      'rawPassRate': null,
      'src': 'vals',
      'rank': 40
    },
    {
      'model': 'Kimi K2.6',
      'org': null,
      'agent': 'mini-SWE-agent',
      'effort': null,
      'score': 0,
      'almost': null,
      'rawPassRate': null,
      'src': 'vals',
      'rank': 41
    },
    {
      'model': 'Nemotron 3 Ultra 550b A55b',
      'org': null,
      'agent': 'mini-SWE-agent',
      'effort': null,
      'score': 0,
      'almost': null,
      'rawPassRate': null,
      'src': 'vals',
      'rank': 42
    },
    {
      'model': 'Deepseek V4 Pro',
      'org': null,
      'agent': 'mini-SWE-agent',
      'effort': null,
      'score': 0,
      'almost': null,
      'rawPassRate': null,
      'src': 'vals',
      'rank': 43
    },
    {
      'model': 'Gemini 3 Flash Preview',
      'org': null,
      'agent': 'mini-SWE-agent',
      'effort': null,
      'score': 0,
      'almost': null,
      'rawPassRate': null,
      'src': 'vals',
      'rank': 44
    },
    {
      'model': 'Gemini 3.5 Flash Lite',
      'org': null,
      'agent': 'mini-SWE-agent',
      'effort': null,
      'score': 0,
      'almost': null,
      'rawPassRate': null,
      'src': 'vals',
      'rank': 45
    },
    {
      'model': 'Claude Haiku 4 5 20251001 Thinking',
      'org': null,
      'agent': 'mini-SWE-agent',
      'effort': null,
      'score': 0,
      'almost': null,
      'rawPassRate': null,
      'src': 'vals',
      'rank': 46
    },
    {
      'model': 'Grok 4.3',
      'org': null,
      'agent': 'mini-SWE-agent',
      'effort': null,
      'score': 0,
      'almost': null,
      'rawPassRate': null,
      'src': 'vals',
      'rank': 47
    },
    {
      'model': 'Laguna Xs.2',
      'org': null,
      'agent': 'mini-SWE-agent',
      'effort': null,
      'score': 0,
      'almost': null,
      'rawPassRate': null,
      'src': 'vals',
      'rank': 48
    },
    {
      'model': 'Inkling',
      'org': null,
      'agent': 'mini-SWE-agent',
      'effort': null,
      'score': 0,
      'almost': null,
      'rawPassRate': null,
      'src': 'vals',
      'rank': 49
    },
    {
      'model': 'Laguna M.1',
      'org': null,
      'agent': 'mini-SWE-agent',
      'effort': null,
      'score': 0,
      'almost': null,
      'rawPassRate': null,
      'src': 'vals',
      'rank': 50
    },
    {
      'model': 'Gemini 3.1 Flash Lite Preview',
      'org': null,
      'agent': 'mini-SWE-agent',
      'effort': null,
      'score': 0,
      'almost': null,
      'rawPassRate': null,
      'src': 'vals',
      'rank': 51
    },
    {
      'model': 'MiniMax M2.7',
      'org': null,
      'agent': 'mini-SWE-agent',
      'effort': null,
      'score': 0,
      'almost': null,
      'rawPassRate': null,
      'src': 'vals',
      'rank': 52
    }
  ]
};
