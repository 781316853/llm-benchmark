// 数据源:OSWorld 2.0(xlang-ai 长时程桌面计算机使用评测,更新于 2026-09-09)
// 来源:https://leaderboard.steel.dev/leaderboards/osworld-2/(官方:https://osworld-v2.xlang.ai/)
// 字段说明:system=系统/提交(模型+工具策略);score=部分得分 partial(%);org=厂商;reported=上报时间;url=来源链接
// 用途:「权威基准测试」页展示,仅参考,不计入综合分/命中数。
window.OSWORLD = {
  'source': 'OSWorld 2.0',
  'url': 'https://leaderboard.steel.dev/leaderboards/osworld-2/',
  'officialUrl': 'https://osworld-v2.xlang.ai/',
  'updated': '2026-09-09',
  'refreshedAt': '2026-09-09 13:45',
  'stats': {
    'tasks': 108,
    'entries': 22
  },
  'desc': 'OSWorld 2.0:108 个长时程、端到端的桌面计算机使用工作流(人类中位耗时约 1.6 小时,平均约 318 次工具调用),按二进制完成率与部分得分(检查点达成比例)双口径计分;因二进制完成率极低,榜单按部分得分排序。',
  'models': [
    {
      'system': 'Claude Fable 5.1',
      'note': 'Partial score (41.7% strict) on the 2026.08.08 release at 1080p, 500 steps, Opus 4.8 grader; the card states this run modified tasks and grading, so it is not directly comparable to official-settings rows. Self-reported.',
      'score': 77.9,
      'org': 'Anthropic',
      'reported': 'Sep 2026',
      'url': 'https://www-cdn.anthropic.com/0339e6a7c5c7b87f5c07798616dc32c215d14235/Claude%20Fable%205.1%20&%20Claude%20Mythos%205.1%20System%20Card.pdf'
    },
    {
      'system': 'Simular Sai',
      'note': 'Partial score (28.25% binary) at $15.70 per task for Simular\'s neuro-symbolic agent; self-reported by Simular, a benchmark co-author, against its quoted Opus 5 and Sol comparators.',
      'score': 73,
      'org': 'Simular AI',
      'reported': 'Aug 2026',
      'url': 'https://www.simular.ai/articles/sai-tops-osworld-2-0'
    },
    {
      'system': 'GPT-6 Astra',
      'note': 'Partial score on the 2026.08.08 offline subset under a latency simulation at roughly 40 minutes per task; maximum at any effort. Self-reported at launch.',
      'score': 72.6,
      'org': 'OpenAI',
      'reported': 'Sep 2026',
      'url': 'https://openai.com/index/gpt-6-astra/'
    },
    {
      'system': 'Claude Opus 5',
      'note': 'Partial score (five-run first-attempt average at 1080p, 500 steps, Opus 4.8 grader); OpenAI\'s launch table separately lists 70.2% for its author-reproduced run on the offline subset. Self-reported.',
      'score': 70.6,
      'org': 'Anthropic',
      'reported': 'Jul 2026',
      'url': 'https://www-cdn.anthropic.com/ceaf5c7ff2783855203fde8208ec311252dced5b/Claude%20Opus%205%20System%20Card.pdf'
    },
    {
      'system': 'Claude Opus 5 (Snorkel run)',
      'note': 'Partial score (31.43% binary) in Snorkel\'s independent run at max effort with batched tools under the 500-step budget; Snorkel is a benchmark co-author.',
      'score': 68.31,
      'org': 'Snorkel AI',
      'reported': 'Sep 2026',
      'url': 'https://snorkel.ai/leaderboard/os-world-2-0/'
    },
    {
      'system': 'Muse Spark 1.3',
      'note': 'Partial score (32.0% binary) at max reasoning effort on benchmark version 08.08 in Meta\'s GUI computer-control harness on a full Ubuntu desktop VM. Self-reported on the launch scorecard.',
      'score': 66.9,
      'org': 'Meta',
      'reported': 'Sep 2026',
      'url': 'https://research.meta.ai/blog/introducing-muse-spark-1-3'
    },
    {
      'system': 'Claude Fable 5',
      'note': 'Partial score from the Opus 5 card\'s comparison table, which sources competitor scores from their release posts. Self-reported.',
      'score': 66.1,
      'org': 'Anthropic',
      'reported': 'Jul 2026',
      'url': 'https://www-cdn.anthropic.com/ceaf5c7ff2783855203fde8208ec311252dced5b/Claude%20Opus%205%20System%20Card.pdf'
    },
    {
      'system': 'GPT-5.6 Sol (offline subset)',
      'note': 'Partial score on the 2026.08.08 offline subset under a latency simulation at roughly 75 minutes per task; a separate launch-post figure from the Sol row below. Self-reported.',
      'score': 65.7,
      'org': 'OpenAI',
      'reported': 'Sep 2026',
      'url': 'https://openai.com/index/gpt-6-astra/'
    },
    {
      'system': 'GPT-5.6 Sol (Snorkel run)',
      'note': 'Partial score (27.34% binary) in Snorkel\'s independent run under the 500-step budget; Snorkel is a benchmark co-author.',
      'score': 62.72,
      'org': 'Snorkel AI',
      'reported': 'Sep 2026',
      'url': 'https://snorkel.ai/leaderboard/os-world-2-0/'
    },
    {
      'system': 'GPT-5.6 Sol',
      'note': 'OpenAI self-reported at the GPT-5.6 launch; single-agent Sol (ultra multi-agent not reported on OSWorld 2.0). Partial score; binary completion not published.',
      'score': 62.6,
      'org': 'OpenAI',
      'reported': 'Jul 2026',
      'url': 'https://openai.com/index/gpt-5-6/'
    },
    {
      'system': 'Claude Opus 4.8 (Opus 5 card table)',
      'note': 'Partial score from the Opus 5 card\'s comparison table; the benchmark authors\' official-settings run of the same model reaches 54.8% partial (20.6% binary). Self-reported.',
      'score': 55.7,
      'org': 'Anthropic',
      'reported': 'Jul 2026',
      'url': 'https://www-cdn.anthropic.com/ceaf5c7ff2783855203fde8208ec311252dced5b/Claude%20Opus%205%20System%20Card.pdf'
    },
    {
      'system': 'Claude Opus 4.8 (batched tools)',
      'note': 'Author-run on the official OSWorld 2.0 harness (108 long-horizon tasks); max thinking with batched tool calls, 500-step budget. 20.6% binary completion.',
      'score': 54.8,
      'org': 'Anthropic',
      'reported': 'Jun 2026',
      'url': 'https://osworld-v2.xlang.ai/'
    },
    {
      'system': 'Qwen3.8-Flash-Next',
      'note': 'Partial score (19.4% binary) under the card\'s partial/binary reporting; benchmark release version not stated. Self-reported on the model card.',
      'score': 52.3,
      'org': 'Alibaba',
      'reported': 'Aug 2026',
      'url': 'https://huggingface.co/Qwen/Qwen3.8-Flash-Next'
    },
    {
      'system': 'GPT-5.5 (batched tools)',
      'note': 'Author-run; xhigh reasoning with batched tool calls, 500-step budget (~$2,750 per run). 13.0% binary completion, flat across 150/300/500 steps.',
      'score': 49.5,
      'org': 'OpenAI',
      'reported': 'Jun 2026',
      'url': 'https://osworld-v2.xlang.ai/'
    },
    {
      'system': 'Claude Opus 4.8',
      'note': 'Author-run; max thinking, standard tool calls, 500-step budget. 18.52% binary completion. Batched tool calls lift the same model to 54.8% partial (rank 2).',
      'score': 49.33,
      'org': 'Anthropic',
      'reported': 'Jun 2026',
      'url': 'https://osworld-v2.xlang.ai/'
    },
    {
      'system': 'Claude Opus 4.7',
      'note': 'Author-run; max thinking, standard tool calls, 500-step budget (~$3,870 per run). 13.9% binary completion.',
      'score': 49.1,
      'org': 'Anthropic',
      'reported': 'Jun 2026',
      'url': 'https://osworld-v2.xlang.ai/'
    },
    {
      'system': 'Claude Opus 4.7 (batched tools)',
      'note': 'Author-run; max thinking with batched tool calls, 500-step budget. 18.2% binary completion.',
      'score': 48.91,
      'org': 'Anthropic',
      'reported': 'Jun 2026',
      'url': 'https://osworld-v2.xlang.ai/'
    },
    {
      'system': 'Claude Sonnet 4.6 (max thinking)',
      'note': 'Author-run; max thinking, standard tool calls, 500-step budget (~$2,410 per run). 8.3% binary completion.',
      'score': 41.5,
      'org': 'Anthropic',
      'reported': 'Jun 2026',
      'url': 'https://osworld-v2.xlang.ai/'
    },
    {
      'system': 'Claude Sonnet 4.6 (medium thinking)',
      'note': 'Author-run; medium thinking, standard tool calls, 500-step budget (~$1,550 per run). 9.3% binary completion (higher binary than max thinking).',
      'score': 33.9,
      'org': 'Anthropic',
      'reported': 'Jun 2026',
      'url': 'https://osworld-v2.xlang.ai/'
    },
    {
      'system': 'MiniMax M3',
      'note': 'Author-run; reasoning enabled, standard tool calls, 500-step budget (~$259 per run). 4.6% binary completion.',
      'score': 22.3,
      'org': 'MiniMax',
      'reported': 'Jun 2026',
      'url': 'https://osworld-v2.xlang.ai/'
    },
    {
      'system': 'Kimi 2.6',
      'note': 'Author-run; reasoning enabled, standard tool calls, 500-step budget (~$708 per run). 4.6% binary completion.',
      'score': 22.1,
      'org': 'Moonshot AI',
      'reported': 'Jun 2026',
      'url': 'https://osworld-v2.xlang.ai/'
    },
    {
      'system': 'Qwen 3.7-Plus',
      'note': 'Author-run; thinking mode, standard tool calls, 500-step budget (~$412 per run). 2.8% binary completion.',
      'score': 21.5,
      'org': 'Alibaba',
      'reported': 'Jun 2026',
      'url': 'https://osworld-v2.xlang.ai/'
    }
  ]
};
