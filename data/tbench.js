// 数据源5:Terminal-Bench 2.1 多源聚合快照(云端抓取)
// 数据源:tbench.ai 官方排行榜 + roybench.org OMP 排行榜
// 更新于 2026-07-10
// tbench.ai:89 个终端任务,确定性评分(exit code / 文件 diff / 输出 regex),官方验证条目
// roybench OMP:开源多模型批量评测,更多模型组合(kimi-k2.7-code/deepseek-v4-pro/grok-4.3 等)
// 合并策略:全部保留(含 agent/model 组合),前端按 canonical 取最高分归入
// 字段说明:agent=运行框架;model=模型名;score=准确率(%);ci=置信区间(±%);source=数据来源;date/orgs=元数据
window.TBENCH = {
  source: "Terminal-Bench 2.1",
  url: "https://www.tbench.ai/leaderboard/terminal-bench/2.1",
  updated: "2026-07-10",
  version: "2.1",
  stats: { tasks: 89, entries: 51 },
  desc: "Terminal-Bench 2.1:89 个终端任务,在 Linux 沙箱中用 bash 命令完成多步骤任务,确定性评分。聚合 tbench.ai 官方榜与 roybench.org OMP 榜。",
  models: [
  {
    'source': 'roybench OMP',
    'agent': 'omp',
    'model': 'gpt-5.5',
    'score': 93.2,
    'ci': null,
    'backend': 'gpt-proxy',
    'think': 'high',
    'passed': 82,
    'total': 88
  },
  {
    'source': 'roybench OMP',
    'agent': 'omp',
    'model': 'gpt-5.5',
    'score': 92,
    'ci': null,
    'backend': 'gpt-proxy',
    'think': 'xhigh',
    'passed': 81,
    'total': 88
  },
  {
    'source': 'roybench OMP',
    'agent': 'omp',
    'model': 'gpt-5.5',
    'score': 90.9,
    'ci': null,
    'backend': 'gpt-proxy',
    'think': 'medium',
    'passed': 80,
    'total': 88
  },
  {
    'source': 'roybench OMP',
    'agent': 'omp',
    'model': 'gpt-5.5',
    'score': 87.5,
    'ci': null,
    'backend': 'gpt-proxy',
    'think': 'low',
    'passed': 77,
    'total': 88
  },
  {
    'source': 'roybench OMP',
    'agent': 'omp',
    'model': 'kimi-k2.7-code',
    'score': 84.1,
    'ci': null,
    'backend': 'kimi-code',
    'think': 'high',
    'passed': 74,
    'total': 88
  },
  {
    'source': 'tbench.ai',
    'agent': 'Codex CLI',
    'model': 'GPT-5.5',
    'date': '2026-05-01',
    'agentOrg': 'OpenAI',
    'modelOrg': 'OpenAI',
    'score': 83.4,
    'ci': 2.2
  },
  {
    'source': 'tbench.ai',
    'agent': 'Claude Code',
    'model': 'Claude 5 Fable',
    'date': '2026-06-17',
    'agentOrg': 'Anthropic',
    'modelOrg': 'Anthropic',
    'score': 83.1,
    'ci': 2
  },
  {
    'source': 'roybench OMP',
    'agent': 'omp',
    'model': 'gemini-3.5-flash',
    'score': 81.8,
    'ci': null,
    'backend': 'google-antigravity',
    'think': 'high',
    'passed': 72,
    'total': 88
  },
  {
    'source': 'roybench OMP',
    'agent': 'omp',
    'model': 'deepseek-v4-pro',
    'score': 80.7,
    'ci': null,
    'backend': 'deepseek',
    'think': 'high',
    'passed': 71,
    'total': 88
  },
  {
    'source': 'roybench OMP',
    'agent': 'omp',
    'model': 'deepseek-v4-pro',
    'score': 80.7,
    'ci': null,
    'backend': 'deepseek',
    'think': 'medium',
    'passed': 71,
    'total': 88
  },
  {
    'source': 'roybench OMP',
    'agent': 'omp',
    'model': 'gpt-5.4',
    'score': 80.7,
    'ci': null,
    'backend': 'gpt-proxy',
    'think': 'high',
    'passed': 71,
    'total': 88
  },
  {
    'source': 'roybench OMP',
    'agent': 'omp',
    'model': 'grok-4.5',
    'score': 80.7,
    'ci': null,
    'backend': 'xai',
    'think': 'xhigh',
    'passed': 71,
    'total': 88
  },
  {
    'source': 'tbench.ai',
    'agent': 'Terminus 2',
    'model': 'Claude 5 Fable',
    'date': '2026-06-17',
    'agentOrg': 'Terminal-Bench',
    'modelOrg': 'Anthropic',
    'score': 80.4,
    'ci': 2.3
  },
  {
    'source': 'roybench OMP',
    'agent': 'omp',
    'model': 'gpt-5.5',
    'score': 79.5,
    'ci': null,
    'backend': 'gpt-proxy',
    'think': 'off',
    'passed': 70,
    'total': 88
  },
  {
    'source': 'tbench.ai',
    'agent': 'Claude Code',
    'model': 'Claude Opus 4.8',
    'date': '2026-05-29',
    'agentOrg': 'Anthropic',
    'modelOrg': 'Anthropic',
    'score': 78.9,
    'ci': 2.5
  },
  {
    'source': 'tbench.ai',
    'agent': 'Terminus 2',
    'model': 'GPT-5.5',
    'date': '2026-05-01',
    'agentOrg': 'Terminal-Bench',
    'modelOrg': 'OpenAI',
    'score': 78.2,
    'ci': 2.4
  },
  {
    'source': 'roybench OMP',
    'agent': 'omp',
    'model': 'gpt-5.4',
    'score': 77.3,
    'ci': null,
    'backend': 'gpt-proxy',
    'think': 'medium',
    'passed': 68,
    'total': 88
  },
  {
    'source': 'roybench OMP',
    'agent': 'omp',
    'model': 'claude-opus-4-7',
    'score': 76.1,
    'ci': null,
    'backend': 'anthropic',
    'think': 'high',
    'passed': 67,
    'total': 88
  },
  {
    'source': 'roybench OMP',
    'agent': 'omp',
    'model': 'deepseek-v4-pro',
    'score': 76.1,
    'ci': null,
    'backend': 'deepseek',
    'think': 'low',
    'passed': 67,
    'total': 88
  },
  {
    'source': 'tbench.ai',
    'agent': 'Terminus 2',
    'model': 'Claude Opus 4.8',
    'date': '2026-05-29',
    'agentOrg': 'Terminal-Bench',
    'modelOrg': 'Anthropic',
    'score': 74.6,
    'ci': 2.4
  },
  {
    'source': 'tbench.ai',
    'agent': 'Terminus 2',
    'model': 'Gemini 3 Pro',
    'date': '2026-05-01',
    'agentOrg': 'Terminal-Bench',
    'modelOrg': 'Google',
    'score': 74.4,
    'ci': 2.6
  },
  {
    'source': 'roybench OMP',
    'agent': 'omp',
    'model': 'gemini-3.1-pro',
    'score': 73.9,
    'ci': null,
    'backend': 'google-antigravity',
    'think': 'high',
    'passed': 65,
    'total': 88
  },
  {
    'source': 'roybench OMP',
    'agent': 'omp',
    'model': 'claude-opus-4-6',
    'score': 72.7,
    'ci': null,
    'backend': 'anthropic',
    'think': 'medium',
    'passed': 64,
    'total': 88
  },
  {
    'source': 'roybench OMP',
    'agent': 'omp',
    'model': 'gemini-3.5-flash',
    'score': 72.7,
    'ci': null,
    'backend': 'google-antigravity',
    'think': 'xhigh',
    'passed': 64,
    'total': 88
  },
  {
    'source': 'roybench OMP',
    'agent': 'omp',
    'model': 'kimi-k2.7-code',
    'score': 72.7,
    'ci': null,
    'backend': 'kimi-code',
    'think': 'medium',
    'passed': 64,
    'total': 88
  },
  {
    'source': 'roybench OMP',
    'agent': 'omp',
    'model': 'gpt-5.5',
    'score': 71.6,
    'ci': null,
    'backend': 'gpt-proxy',
    'think': 'xhigh',
    'passed': 63,
    'total': 88
  },
  {
    'source': 'tbench.ai',
    'agent': 'Gemini CLI',
    'model': 'Gemini 3.1 Pro',
    'date': '2026-05-05',
    'agentOrg': 'Google',
    'modelOrg': 'Google',
    'score': 70.7,
    'ci': 2.9
  },
  {
    'source': 'tbench.ai',
    'agent': 'Terminus 2',
    'model': 'Gemini 3.1 Pro',
    'date': '2026-05-05',
    'agentOrg': 'Terminal-Bench',
    'modelOrg': 'Google',
    'score': 70.3,
    'ci': 2.9
  },
  {
    'source': 'tbench.ai',
    'agent': 'Claude Code',
    'model': 'Claude Opus 4.7',
    'date': '2026-05-01',
    'agentOrg': 'Anthropic',
    'modelOrg': 'Anthropic',
    'score': 69.7,
    'ci': 2.7
  },
  {
    'source': 'roybench OMP',
    'agent': 'omp',
    'model': 'gpt-5.5',
    'score': 69.3,
    'ci': null,
    'backend': 'gpt-proxy',
    'think': 'high',
    'passed': 61,
    'total': 88
  },
  {
    'source': 'roybench OMP',
    'agent': 'omp',
    'model': 'gemini-3.5-flash',
    'score': 68.2,
    'ci': null,
    'backend': 'google-antigravity',
    'think': 'low',
    'passed': 60,
    'total': 88
  },
  {
    'source': 'tbench.ai',
    'agent': 'Gemini CLI',
    'model': 'Gemini 3 Pro',
    'date': '2026-05-02',
    'agentOrg': 'Google',
    'modelOrg': 'Google',
    'score': 66.3,
    'ci': 2.7
  },
  {
    'source': 'tbench.ai',
    'agent': 'Terminus 2',
    'model': 'Claude Opus 4.7',
    'date': '2026-05-01',
    'agentOrg': 'Terminal-Bench',
    'modelOrg': 'Anthropic',
    'score': 66.1,
    'ci': 2.7
  },
  {
    'source': 'roybench OMP',
    'agent': 'omp',
    'model': 'gemini-3.5-flash',
    'score': 65.9,
    'ci': null,
    'backend': 'google-antigravity',
    'think': 'minimal',
    'passed': 58,
    'total': 88
  },
  {
    'source': 'roybench OMP',
    'agent': 'omp',
    'model': 'gemini-3.5-flash',
    'score': 64.8,
    'ci': null,
    'backend': 'google-antigravity',
    'think': 'medium',
    'passed': 57,
    'total': 88
  },
  {
    'source': 'roybench OMP',
    'agent': 'omp',
    'model': 'gpt-5.3-codex-spark',
    'score': 64.8,
    'ci': null,
    'backend': 'gpt-proxy',
    'think': 'low',
    'passed': 57,
    'total': 88
  },
  {
    'source': 'roybench OMP',
    'agent': 'omp',
    'model': 'gpt-5.3-codex-spark',
    'score': 64.8,
    'ci': null,
    'backend': 'gpt-proxy',
    'think': 'xhigh',
    'passed': 57,
    'total': 88
  },
  {
    'source': 'roybench OMP',
    'agent': 'omp',
    'model': 'gpt-5.3-codex-spark',
    'score': 63.6,
    'ci': null,
    'backend': 'gpt-proxy',
    'think': 'high',
    'passed': 56,
    'total': 88
  },
  {
    'source': 'roybench OMP',
    'agent': 'omp',
    'model': 'claude-opus-4-7',
    'score': 62.5,
    'ci': null,
    'backend': 'anthropic',
    'think': 'xhigh',
    'passed': 55,
    'total': 88
  },
  {
    'source': 'roybench OMP',
    'agent': 'omp',
    'model': 'gpt-5.3-codex-spark',
    'score': 62.5,
    'ci': null,
    'backend': 'gpt-proxy',
    'think': 'medium',
    'passed': 55,
    'total': 88
  },
  {
    'source': 'tbench.ai',
    'agent': 'Claude Code',
    'model': 'GLM 5.1',
    'date': '2026-05-02',
    'agentOrg': 'Anthropic',
    'modelOrg': 'Z-AI',
    'score': 58.7,
    'ci': 2.4
  },
  {
    'source': 'roybench OMP',
    'agent': 'omp',
    'model': 'gemini-3.1-pro',
    'score': 58,
    'ci': null,
    'backend': 'google-antigravity',
    'think': 'medium',
    'passed': 51,
    'total': 88
  },
  {
    'source': 'roybench OMP',
    'agent': 'omp',
    'model': 'kimi-k2.7-code',
    'score': 56.8,
    'ci': null,
    'backend': 'kimi-code',
    'think': 'low',
    'passed': 50,
    'total': 88
  },
  {
    'source': 'roybench OMP',
    'agent': 'omp',
    'model': 'gemini-3.1-pro',
    'score': 48.9,
    'ci': null,
    'backend': 'google-antigravity',
    'think': 'xhigh',
    'passed': 43,
    'total': 88
  },
  {
    'source': 'roybench OMP',
    'agent': 'omp',
    'model': 'gemini-3.1-pro',
    'score': 46.6,
    'ci': null,
    'backend': 'google-antigravity',
    'think': 'minimal',
    'passed': 41,
    'total': 88
  },
  {
    'source': 'roybench OMP',
    'agent': 'omp',
    'model': 'claude-opus-4-8',
    'score': 42,
    'ci': null,
    'backend': 'anthropic',
    'think': 'medium',
    'passed': 37,
    'total': 88
  },
  {
    'source': 'roybench OMP',
    'agent': 'omp',
    'model': 'grok-4.3',
    'score': 33,
    'ci': null,
    'backend': 'xai',
    'think': 'xhigh',
    'passed': 29,
    'total': 88
  },
  {
    'source': 'roybench OMP',
    'agent': 'omp',
    'model': 'glm-5.2',
    'score': 33,
    'ci': null,
    'backend': 'zhipu-coding-plan',
    'think': 'medium',
    'passed': 29,
    'total': 88
  },
  {
    'source': 'roybench OMP',
    'agent': 'omp',
    'model': 'claude-opus-4-8',
    'score': 31.8,
    'ci': null,
    'backend': 'anthropic',
    'think': 'xhigh',
    'passed': 28,
    'total': 88
  },
  {
    'source': 'roybench OMP',
    'agent': 'omp',
    'model': 'gemini-3.1-pro',
    'score': 27.3,
    'ci': null,
    'backend': 'google-antigravity',
    'think': 'low',
    'passed': 24,
    'total': 88
  },
  {
    'source': 'roybench OMP',
    'agent': 'omp',
    'model': 'claude-opus-4-8',
    'score': 13.6,
    'ci': null,
    'backend': 'anthropic',
    'think': 'high',
    'passed': 12,
    'total': 88
  }
]
};
