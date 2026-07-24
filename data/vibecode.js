// 数据源2:Vibe Code Bench 基准快照(云端抓取)
// 来源:https://www.vals.ai/benchmarks/vibe-code  (更新于 2026-07-24)
// 字段说明:name=模型显示名;harness=运行框架;score=整体准确率(%);ci=置信区间(±);
//          cost=单测成本($);latencyS=延迟(秒)
// 注:解析页面内嵌 RSC payload 的 tasks.overall 块;显示名经 slug->名称表映射。
window.VIBECODE = {
  source: "Vibe Code Bench",
  url: "https://www.vals.ai/benchmarks/vibe-code",
  updated: "2026-07-24",
  version: "v1.1",
  totalSystems: 75,
  note: "共 75 系统,展示 overall 视图全部 72 个有记录系统",
  desc: "评测模型能否从零构建完整 Web 应用,通过点对点测试衡量端到端可用性。",
  models: [
  {
    'name': 'Claude Fable 5',
    'harness': 'OpenHands',
    'score': 90.35,
    'ci': 2.1,
    'cost': 41.71,
    'latencyS': 3711
  },
  {
    'name': 'Kimi K3',
    'harness': 'OpenHands',
    'score': 84.96,
    'ci': 2.69,
    'cost': 17.59,
    'latencyS': 5203
  },
  {
    'name': 'Claude Opus 4.8',
    'harness': 'OpenHands',
    'score': 82.73,
    'ci': 3.08,
    'cost': 5.09,
    'latencyS': 4549
  },
  {
    'name': 'Claude Sonnet 5',
    'harness': 'OpenHands',
    'score': 81.33,
    'ci': 3.05,
    'cost': 38.08,
    'latencyS': 4001
  },
  {
    'name': 'GPT 5.6 Sol',
    'harness': 'OpenHands',
    'score': 80.5,
    'ci': 3.72,
    'cost': 33.4,
    'latencyS': 2033
  },
  {
    'name': 'Claude Opus 4.8',
    'harness': 'Claude Code',
    'score': 77.49,
    'ci': 3.74,
    'cost': 6.86,
    'latencyS': 1142
  },
  {
    'name': 'GPT 5.6 Luna',
    'harness': 'OpenHands',
    'score': 77.06,
    'ci': 3.07,
    'cost': 3.63,
    'latencyS': 1552
  },
  {
    'name': 'Meta Muse Spark 1.1',
    'harness': 'OpenHands',
    'score': 72.16,
    'ci': 3.33,
    'cost': 0.92,
    'latencyS': 615
  },
  {
    'name': 'Claude Opus 4.7',
    'harness': 'OpenHands',
    'score': 71,
    'ci': 4.51,
    'cost': 21.41,
    'latencyS': 2142
  },
  {
    'name': 'GPT 5.5',
    'harness': 'OpenHands',
    'score': 69.85,
    'ci': 4.54,
    'cost': 16.66,
    'latencyS': 1912
  },
  {
    'name': 'Grok 4.5',
    'harness': 'OpenHands',
    'score': 69,
    'ci': 4.48,
    'cost': 4.1,
    'latencyS': 830
  },
  {
    'name': 'GPT 5.6 Terra',
    'harness': 'OpenHands',
    'score': 67.84,
    'ci': 5.1,
    'cost': 10.82,
    'latencyS': 959
  },
  {
    'name': 'GPT 5.4',
    'harness': 'OpenHands',
    'score': 67.42,
    'ci': 4.84,
    'cost': 10.69,
    'latencyS': 5175
  },
  {
    'name': 'GPT 5.5',
    'harness': 'Factory',
    'score': 67.39,
    'ci': 4.75,
    'cost': 5.93,
    'latencyS': 1177
  },
  {
    'name': 'GLM 5.2',
    'harness': 'OpenHands',
    'score': 63.96,
    'ci': 4.8,
    'cost': 8.49,
    'latencyS': 3748
  },
  {
    'name': 'GPT 5.3 Codex',
    'harness': 'OpenHands',
    'score': 61.77,
    'ci': 4.71,
    'cost': 11.91,
    'latencyS': 4548
  },
  {
    'name': 'GPT 5.5 Codex',
    'harness': 'Codex',
    'score': 58.19,
    'ci': 4.93,
    'cost': 3.63,
    'latencyS': 709
  },
  {
    'name': 'Claude Opus 4.6',
    'harness': 'OpenHands',
    'score': 57.57,
    'ci': 4.37,
    'cost': 8.69,
    'latencyS': 1279
  },
  {
    'name': 'Gemini 3.6 flash [新]',
    'harness': 'OpenHands',
    'score': 57.32,
    'ci': 5.05,
    'cost': 3.04,
    'latencyS': 1523
  },
  {
    'name': 'Claude Sonnet 4.6',
    'harness': 'Claude Code',
    'score': 55.77,
    'ci': 4.68,
    'cost': 7.35,
    'latencyS': 2982
  },
  {
    'name': 'GPT 5.2',
    'harness': 'OpenHands',
    'score': 53.5,
    'ci': 5.07,
    'cost': 17.75,
    'latencyS': 4971
  },
  {
    'name': 'Claude Opus 4.6',
    'harness': 'OpenHands',
    'score': 53.5,
    'ci': 4.68,
    'cost': 8.28,
    'latencyS': 1386
  },
  {
    'name': 'Claude Sonnet 4.6',
    'harness': 'OpenHands',
    'score': 51.48,
    'ci': 4.64,
    'cost': 5.91,
    'latencyS': 1572
  },
  {
    'name': 'DeepSeek V4 Pro',
    'harness': 'OpenHands',
    'score': 49.93,
    'ci': 4.77,
    'cost': 2.21,
    'latencyS': 3419
  },
  {
    'name': 'Composer 2.5',
    'harness': 'Cursor CLI',
    'score': 49.61,
    'ci': 4.97,
    'cost': 0.5,
    'latencyS': 593
  },
  {
    'name': 'Gemini 3.5 Flash',
    'harness': 'OpenHands',
    'score': 48.68,
    'ci': 4.73,
    'cost': 2.54,
    'latencyS': 893
  },
  {
    'name': 'GPT 5.4',
    'harness': 'Codex',
    'score': 48.47,
    'ci': 5.07,
    'cost': 7.51,
    'latencyS': 1075
  },
  {
    'name': 'GPT 5.4 Mini',
    'harness': 'OpenHands',
    'score': 47.97,
    'ci': 5.61,
    'cost': 1.19,
    'latencyS': 2055
  },
  {
    'name': 'Qwen3.7-Max',
    'harness': 'OpenHands',
    'score': 47.67,
    'ci': 4.63,
    'cost': 11.4,
    'latencyS': 4690
  },
  {
    'name': 'Kimi K2.7-Code',
    'harness': 'OpenHands',
    'score': 47.21,
    'ci': 5.19,
    'cost': 3.84,
    'latencyS': 10318
  },
  {
    'name': 'Qwen3.7-Plus',
    'harness': 'OpenHands',
    'score': 46.39,
    'ci': 4.61,
    'cost': 1.08,
    'latencyS': 2232
  },
  {
    'name': 'MiMo v2.5',
    'harness': 'OpenHands',
    'score': 42.17,
    'ci': 4.57,
    'cost': 0.07,
    'latencyS': 1580
  },
  {
    'name': 'GPT 5.2 Codex',
    'harness': 'OpenHands',
    'score': 37.91,
    'ci': 4.58,
    'cost': 4.15,
    'latencyS': 1935
  },
  {
    'name': 'Kimi K2.6',
    'harness': 'OpenHands',
    'score': 37.89,
    'ci': 4.91,
    'cost': 1.93,
    'latencyS': 2968
  },
  {
    'name': 'Gemini 3.5 flash lite [新]',
    'harness': 'OpenHands',
    'score': 37.16,
    'ci': 4.63,
    'cost': 0.83,
    'latencyS': 502
  },
  {
    'name': 'MiMo v2.5 Pro',
    'harness': 'OpenHands',
    'score': 34.11,
    'ci': 4.53,
    'cost': 0.17,
    'latencyS': 2404
  },
  {
    'name': 'Gemini 3.1 Pro',
    'harness': 'OpenHands',
    'score': 32.03,
    'ci': 4.34,
    'cost': 3.83,
    'latencyS': 1212
  },
  {
    'name': 'GLM 5.1',
    'harness': 'OpenHands',
    'score': 31.46,
    'ci': 4.55,
    'cost': 2.89,
    'latencyS': 2015
  },
  {
    'name': 'GPT 5.4 Nano',
    'harness': 'OpenHands',
    'score': 26.1,
    'ci': 5.08,
    'cost': 1.28,
    'latencyS': 3276
  },
  {
    'name': 'Qwen3.6-Plus',
    'harness': 'OpenHands',
    'score': 25.57,
    'ci': 3.91,
    'cost': 5.45,
    'latencyS': 2290
  },
  {
    'name': 'GPT 5.1',
    'harness': 'OpenHands',
    'score': 24.61,
    'ci': 4.25,
    'cost': 2.57,
    'latencyS': 1836
  },
  {
    'name': 'GLM 5',
    'harness': 'OpenHands',
    'score': 23.36,
    'ci': 4.03,
    'cost': 40.27,
    'latencyS': 13456
  },
  {
    'name': 'Claude Sonnet 4.5',
    'harness': 'OpenHands',
    'score': 22.62,
    'ci': 3.73,
    'cost': 6.66,
    'latencyS': 2962
  },
  {
    'name': 'GPT 5.1 Codex',
    'harness': 'OpenHands',
    'score': 22.17,
    'ci': 3.84,
    'cost': 7.32,
    'latencyS': 31183
  },
  {
    'name': 'Claude Opus 4.5',
    'harness': 'OpenHands',
    'score': 20.63,
    'ci': 3.16,
    'cost': 32.87,
    'latencyS': 2283
  },
  {
    'name': 'Gemini 3 Flash',
    'harness': 'OpenHands',
    'score': 20.2,
    'ci': 3.95,
    'cost': 0.94,
    'latencyS': 807
  },
  {
    'name': 'GPT 5',
    'harness': 'OpenHands',
    'score': 20.09,
    'ci': 3.41,
    'cost': 1.53,
    'latencyS': 1852
  },
  {
    'name': 'Meta Muse Spark',
    'harness': 'OpenHands',
    'score': 19.67,
    'ci': 3.97,
    'cost': 0.58,
    'latencyS': 981
  },
  {
    'name': 'Grok 4.3',
    'harness': 'OpenHands',
    'score': 19.4,
    'ci': 4.24,
    'cost': 1.28,
    'latencyS': 589
  },
  {
    'name': 'Inkling [新]',
    'harness': 'OpenHands',
    'score': 19.21,
    'ci': 3.66,
    'cost': 0,
    'latencyS': 1105
  },
  {
    'name': 'Kimi K2.5',
    'harness': 'OpenHands',
    'score': 17.54,
    'ci': 3.26,
    'cost': 0.88,
    'latencyS': 2570
  },
  {
    'name': 'Qwen3.5-Plus',
    'harness': 'OpenHands',
    'score': 15.74,
    'ci': 3.18,
    'cost': 3.8,
    'latencyS': 3016
  },
  {
    'name': 'Gemini 3 Pro',
    'harness': 'OpenHands',
    'score': 14.3,
    'ci': 3.06,
    'cost': 6.42,
    'latencyS': 10399
  },
  {
    'name': 'GPT 5 Mini',
    'harness': 'OpenHands',
    'score': 14.17,
    'ci': 3.54,
    'cost': 0.25,
    'latencyS': 698
  },
  {
    'name': 'Grok Build',
    'harness': 'Grok Build',
    'score': 13.35,
    'ci': 3.82,
    'cost': 0,
    'latencyS': 395
  },
  {
    'name': 'GPT 5.1 Codex',
    'harness': 'OpenHands',
    'score': 13.12,
    'ci': 3.16,
    'cost': 3.8,
    'latencyS': 3026
  },
  {
    'name': 'Qwen3.6-27B',
    'harness': 'OpenHands',
    'score': 11.94,
    'ci': 3.41,
    'cost': 4.66,
    'latencyS': 9763
  },
  {
    'name': 'Claude Haiku 4.5',
    'harness': 'OpenHands',
    'score': 11.39,
    'ci': 3.13,
    'cost': 1.31,
    'latencyS': 776
  },
  {
    'name': 'Laguna M.1',
    'harness': 'OpenHands',
    'score': 11.04,
    'ci': 2.82,
    'cost': 2.06,
    'latencyS': 2382
  },
  {
    'name': 'Nemotron 3 Ultra',
    'harness': 'OpenHands',
    'score': 7.64,
    'ci': 2.78,
    'cost': 0,
    'latencyS': 2217
  },
  {
    'name': 'Devin SWE-1.6 Fast',
    'harness': 'Devin CLI',
    'score': 7.22,
    'ci': 2.64,
    'cost': 0,
    'latencyS': 189
  },
  {
    'name': 'Laguna XS.2',
    'harness': 'OpenHands',
    'score': 5.21,
    'ci': 2.18,
    'cost': 0.98,
    'latencyS': 2199
  },
  {
    'name': 'DeepSeek V3.2',
    'harness': 'OpenHands',
    'score': 5.11,
    'ci': 2.13,
    'cost': 2.47,
    'latencyS': 3366
  },
  {
    'name': 'Grok 4.20',
    'harness': 'OpenHands',
    'score': 4.06,
    'ci': 2.06,
    'cost': 0.77,
    'latencyS': 302
  },
  {
    'name': 'Qwen3-Max',
    'harness': 'OpenHands',
    'score': 3.51,
    'ci': 1.29,
    'cost': 6.02,
    'latencyS': 3465
  },
  {
    'name': 'GLM 4.6',
    'harness': 'OpenHands',
    'score': 3.09,
    'ci': 1.16,
    'cost': 10.85,
    'latencyS': 10002
  },
  {
    'name': 'Mistral Medium 3.5',
    'harness': 'OpenHands',
    'score': 2.89,
    'ci': 1.71,
    'cost': 16.74,
    'latencyS': 2471
  },
  {
    'name': 'Grok 4.1 Fast',
    'harness': 'OpenHands',
    'score': 1.2,
    'ci': 1.2,
    'cost': 0.21,
    'latencyS': 528
  },
  {
    'name': 'Gemini 2.5 Pro',
    'harness': 'OpenHands',
    'score': 0.4,
    'ci': 0.4,
    'cost': 1.22,
    'latencyS': 2097
  },
  {
    'name': 'Gemini 3.1 Flash Lite',
    'harness': 'OpenHands',
    'score': 0,
    'ci': 0,
    'cost': 0.51,
    'latencyS': 573
  },
  {
    'name': 'Grok 4 Fast',
    'harness': 'OpenHands',
    'score': 0,
    'ci': 0,
    'cost': 0.13,
    'latencyS': 1449
  },
  {
    'name': 'Mistral Small',
    'harness': 'OpenHands',
    'score': 0,
    'ci': 0,
    'cost': 6.47,
    'latencyS': 1815
  }
]
};
