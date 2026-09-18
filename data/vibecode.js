// 数据源2:Vibe Code Bench 基准快照(云端抓取)
// 来源:https://www.vals.ai/benchmarks/vibe-code  (更新于 2026-09-18)
// 字段说明:name=模型显示名;harness=运行框架;score=整体准确率(%);ci=置信区间(±);
//          cost=单测成本($);latencyS=延迟(秒)
// 注:解析页面内嵌 RSC payload 的 tasks.overall 块;显示名经 slug->名称表映射。
window.VIBECODE = {
  source: "Vibe Code Bench",
  url: "https://www.vals.ai/benchmarks/vibe-code",
  updated: "2026-09-18",
  refreshedAt: "2026-09-18 13:35",
  version: "v1.1",
  totalSystems: 96,
  note: "共 96 系统,展示 overall 视图全部 11 个有记录系统",
  desc: "评测模型能否从零构建完整 Web 应用,通过点对点测试衡量端到端可用性。",
  models: [
  {
    'name': 'GPT 5.1',
    'harness': 'OpenHands',
    'score': 24.61,
    'ci': 4.25,
    'cost': 2.57,
    'latencyS': 1836
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
    'name': 'GPT 5',
    'harness': 'OpenHands',
    'score': 20.09,
    'ci': 3.41,
    'cost': 1.53,
    'latencyS': 1852
  },
  {
    'name': 'Gemini 3 Pro Preview',
    'harness': 'OpenHands',
    'score': 14.3,
    'ci': 3.06,
    'cost': 6.42,
    'latencyS': 10399
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
    'name': 'Gemini 2.5 Pro',
    'harness': 'OpenHands',
    'score': 0.4,
    'ci': 0.4,
    'cost': 1.22,
    'latencyS': 2097
  },
  {
    'name': 'Grok 4 Fast',
    'harness': 'OpenHands',
    'score': 0,
    'ci': 0,
    'cost': 0.13,
    'latencyS': 1449
  }
]
};
