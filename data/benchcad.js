// 数据源:BenchCAD(程序化 CAD 生成基准,抓取于 2026-09-07)
// 来源:https://github.com/BenchCAD/BenchCAD-main(leaderboard.json;榜单页:https://benchcad.com/)
// 字段说明:vision2code=图像→CadQuery 代码生成(主指标 total=64³ 体素 IoU×exec%,0-1);
//          visionqa/codeqa=数值几何推理(2,400 题,L1-L4 四能力等级 + total)
// 用途:「权威基准测试」页展示,仅参考,不计入综合分/命中数。
window.BENCHCAD = {
  'source': 'BenchCAD',
  'url': 'https://github.com/BenchCAD/BenchCAD-main',
  'boardUrl': 'https://benchcad.com/',
  'updated': '2026-09-07',
  'refreshedAt': '2026-09-07 13:25',
  'stats': {
    'partFamilies': 106,
    'programs': 17900,
    'standards': 47
  },
  'desc': 'BenchCAD:程序化 CAD 基准,评估模型理解与编写参数化 CAD(CadQuery)代码的能力,17,900 个执行验证程序、106 类工业零件、47 项工程标准;执行落地、确定性评分(无 LLM 裁判)。',
  'tasks': {
    'vision2code': {
      'label': 'Vision2Code',
      'blurb': 'Image → CadQuery. Four canonical orthographic views in, a CadQuery program out, re-executed and scored against the ground-truth STEP. IoU-score↑ = 64³ voxel IoU × exec% (non-executing parts count as 0) · exec% runs cleanly · total↑ composite.',
      'primary': 'total',
      'rows': [
        {
          'model': 'GPT-4o',
          'org': 'OpenAI',
          'class': 'proprietary',
          'exec': 91,
          'total': 0.2393,
          'date': '2024-05',
          'tested': '2026-06',
          'iou_score': 0.1823
        },
        {
          'model': 'GPT-5.3',
          'org': 'OpenAI',
          'class': 'proprietary',
          'exec': 81.5,
          'total': 0.2465,
          'date': '2026-04',
          'tested': '2026-06',
          'iou_score': 0.1873
        },
        {
          'model': 'GPT-5.3',
          'think': 'thinking',
          'org': 'OpenAI',
          'class': 'proprietary',
          'exec': 82,
          'total': 0.2497,
          'date': '2026-04',
          'tested': '2026-06',
          'iou_score': 0.1793
        },
        {
          'model': 'Claude Sonnet 4.6',
          'org': 'Anthropic',
          'class': 'proprietary',
          'exec': 79.5,
          'total': 0.2599,
          'date': '2026-01',
          'tested': '2026-06',
          'iou_score': 0.192
        },
        {
          'model': 'Claude Sonnet 4.6',
          'think': 'thinking-high',
          'org': 'Anthropic',
          'class': 'proprietary',
          'exec': 86.5,
          'total': 0.2979,
          'date': '2026-01',
          'tested': '2026-06',
          'iou_score': 0.222
        },
        {
          'model': 'Claude Opus 4.7',
          'org': 'Anthropic',
          'class': 'proprietary',
          'exec': 95.5,
          'total': 0.3075,
          'date': '2026-03',
          'tested': '2026-06',
          'iou_score': 0.2617
        },
        {
          'model': 'Claude Opus 4.7',
          'think': 'thinking',
          'org': 'Anthropic',
          'class': 'proprietary',
          'exec': 96.5,
          'total': 0.3238,
          'date': '2026-03',
          'tested': '2026-06',
          'iou_score': 0.2692
        },
        {
          'model': 'Gemini 3.1 Pro',
          'org': 'Google',
          'class': 'proprietary',
          'exec': 88.5,
          'total': 0.3315,
          'date': '2026-05',
          'tested': '2026-06',
          'iou_score': 0.2779
        },
        {
          'model': 'Gemini 3.1 Pro',
          'think': 'thinking',
          'org': 'Google',
          'class': 'proprietary',
          'exec': 81.5,
          'total': 0.3457,
          'date': '2026-05',
          'tested': '2026-06',
          'iou_score': 0.289
        },
        {
          'model': 'OpenAI o3',
          'org': 'OpenAI',
          'class': 'proprietary',
          'exec': 54,
          'total': 0.1978,
          'date': '2025-04',
          'tested': '2026-06',
          'iou_score': 0.1218
        },
        {
          'model': 'Moonshot v1-128k',
          'org': 'Moonshot',
          'class': 'open',
          'exec': 12.5,
          'total': 0.0609,
          'date': '2025-02',
          'tested': '2026-06',
          'iou_score': 0.016
        },
        {
          'model': 'Moonshot v1-8k',
          'org': 'Moonshot',
          'class': 'open',
          'exec': 10,
          'total': 0.0595,
          'date': '2025-02',
          'tested': '2026-06',
          'iou_score': 0.0127
        },
        {
          'model': 'Qwen3-VL-2B (baseline)',
          'org': 'Qwen',
          'class': 'open',
          'exec': 14.6,
          'total': 0.0084,
          'date': '2025-09',
          'tested': '2026-06',
          'iou_score': 0.0005
        },
        {
          'model': 'GPT-4o',
          'think': 'blank img',
          'org': 'OpenAI',
          'class': 'control',
          'exec': 87,
          'total': 0.1102,
          'date': '—',
          'tested': '2026-06',
          'iou_score': 0.0698
        },
        {
          'model': 'Claude Mythos 5',
          'think': 'thinking',
          'org': 'Anthropic',
          'class': 'proprietary',
          'date': '—',
          'tested': '—',
          'exec': null,
          'iou_score': 0.384,
          'total': null,
          'self_reported': true
        },
        {
          'model': 'Claude Mythos Preview',
          'think': 'thinking',
          'org': 'Anthropic',
          'class': 'proprietary',
          'date': '—',
          'tested': '—',
          'exec': null,
          'iou_score': 0.355,
          'total': null,
          'self_reported': true
        },
        {
          'model': 'Claude Opus 4.8',
          'think': 'thinking',
          'org': 'Anthropic',
          'class': 'proprietary',
          'date': '2026-05',
          'tested': '2026-06',
          'exec': null,
          'iou_score': 0.273,
          'total': null,
          'self_reported': true
        }
      ]
    },
    'visionqa': {
      'label': 'Vision QA',
      'blurb': 'Numeric geometric reasoning from multi-view renders, broken out along the four-level capability hierarchy. ±5% tolerance for ratios, exact match for integers. Same 2,400 questions as Code QA — the matched-pair gap isolates visual recognition from reasoning.',
      'primary': 'total',
      'rows': [
        {
          'model': 'Gemini 3.1 Pro',
          'org': 'Google',
          'class': 'proprietary',
          'l1': 0.75,
          'l2': 0.462,
          'l3': 0.536,
          'l4': 0.688,
          'total': 0.587,
          'date': '2026-05',
          'tested': '2026-05'
        },
        {
          'model': 'Gemini 3.1 Pro',
          'think': 'thinking',
          'org': 'Google',
          'class': 'proprietary',
          'l1': 0.722,
          'l2': 0.426,
          'l3': 0.551,
          'l4': 0.669,
          'total': 0.576,
          'date': '2026-05',
          'tested': '2026-05'
        },
        {
          'model': 'Claude Opus 4.7',
          'think': 'thinking',
          'org': 'Anthropic',
          'class': 'proprietary',
          'l1': 0.715,
          'l2': 0.485,
          'l3': 0.421,
          'l4': 0.614,
          'total': 0.53,
          'date': '2026-03',
          'tested': '2026-05'
        },
        {
          'model': 'Claude Opus 4.7',
          'org': 'Anthropic',
          'class': 'proprietary',
          'l1': 0.699,
          'l2': 0.464,
          'l3': 0.426,
          'l4': 0.668,
          'total': 0.526,
          'date': '2026-03',
          'tested': '2026-05'
        },
        {
          'model': 'GPT-5.3',
          'think': 'thinking',
          'org': 'OpenAI',
          'class': 'proprietary',
          'l1': 0.65,
          'l2': 0.429,
          'l3': 0.482,
          'l4': 0.534,
          'total': 0.514,
          'date': '2026-04',
          'tested': '2026-05'
        },
        {
          'model': 'GPT-5.3',
          'org': 'OpenAI',
          'class': 'proprietary',
          'l1': 0.636,
          'l2': 0.423,
          'l3': 0.488,
          'l4': 0.548,
          'total': 0.513,
          'date': '2026-04',
          'tested': '2026-05'
        },
        {
          'model': 'GPT-4o',
          'org': 'OpenAI',
          'class': 'proprietary',
          'l1': 0.599,
          'l2': 0.408,
          'l3': 0.431,
          'l4': 0.396,
          'total': 0.464,
          'date': '2024-05',
          'tested': '2026-05'
        },
        {
          'model': 'Moonshot v1-8k',
          'org': 'Moonshot',
          'class': 'open',
          'l1': 0.6,
          'l2': 0.246,
          'l3': 0.465,
          'l4': 0.181,
          'total': 0.447,
          'date': '2025-02',
          'tested': '2026-05'
        },
        {
          'model': 'Moonshot v1-128k',
          'org': 'Moonshot',
          'class': 'open',
          'l1': 0.556,
          'l2': 0.387,
          'l3': 0.427,
          'l4': 0.334,
          'total': 0.442,
          'date': '2025-02',
          'tested': '2026-05'
        },
        {
          'model': 'OpenAI o3',
          'org': 'OpenAI',
          'class': 'proprietary',
          'l1': 0.328,
          'l2': 0.188,
          'l3': 0.398,
          'l4': 0.56,
          'total': 0.327,
          'date': '2025-04',
          'tested': '2026-05'
        },
        {
          'model': 'blank-image baseline',
          'org': '—',
          'class': 'control',
          'l1': 0.376,
          'l2': 0.325,
          'l3': 0.418,
          'l4': 0.296,
          'total': 0.375,
          'date': '—',
          'tested': '2026-05'
        }
      ]
    },
    'codeqa': {
      'label': 'Code QA',
      'blurb': 'The same 2,400 numeric questions as Vision QA, but conditioned on CadQuery source instead of renders. Best Code QA reaches 0.838 while best Vision QA caps at 0.587 — a ~25 pt modality gap on identical questions (the Holistic Spatial & Detailing Deficit).',
      'primary': 'total',
      'rows': [
        {
          'model': 'Gemini 3.1 Pro',
          'think': 'thinking',
          'org': 'Google',
          'class': 'proprietary',
          'l1': 0.907,
          'l2': 0.783,
          'l3': 0.876,
          'l4': 0.537,
          'total': 0.838,
          'date': '2026-05',
          'tested': '2026-05'
        },
        {
          'model': 'Gemini 3.1 Pro',
          'org': 'Google',
          'class': 'proprietary',
          'l1': 0.914,
          'l2': 0.782,
          'l3': 0.867,
          'l4': 0.537,
          'total': 0.836,
          'date': '2026-05',
          'tested': '2026-05'
        },
        {
          'model': 'Claude Opus 4.7',
          'think': 'thinking',
          'org': 'Anthropic',
          'class': 'proprietary',
          'l1': 0.891,
          'l2': 0.781,
          'l3': 0.851,
          'l4': 0.632,
          'total': 0.829,
          'date': '2026-03',
          'tested': '2026-05'
        },
        {
          'model': 'GPT-5.3',
          'org': 'OpenAI',
          'class': 'proprietary',
          'l1': 0.879,
          'l2': 0.805,
          'l3': 0.815,
          'l4': 0.731,
          'total': 0.823,
          'date': '2026-04',
          'tested': '2026-05'
        },
        {
          'model': 'GPT-5.3',
          'think': 'thinking',
          'org': 'OpenAI',
          'class': 'proprietary',
          'l1': 0.885,
          'l2': 0.802,
          'l3': 0.811,
          'l4': 0.73,
          'total': 0.821,
          'date': '2026-04',
          'tested': '2026-05'
        },
        {
          'model': 'Claude Opus 4.7',
          'org': 'Anthropic',
          'class': 'proprietary',
          'l1': 0.868,
          'l2': 0.8,
          'l3': 0.793,
          'l4': 0.595,
          'total': 0.801,
          'date': '2026-03',
          'tested': '2026-05'
        },
        {
          'model': 'GPT-4o',
          'org': 'OpenAI',
          'class': 'proprietary',
          'l1': 0.865,
          'l2': 0.593,
          'l3': 0.732,
          'l4': 0.688,
          'total': 0.726,
          'date': '2024-05',
          'tested': '2026-05'
        },
        {
          'model': 'OpenAI o3',
          'org': 'OpenAI',
          'class': 'proprietary',
          'l1': 0.804,
          'l2': 0.701,
          'l3': 0.689,
          'l4': 0.492,
          'total': 0.708,
          'date': '2025-04',
          'tested': '2026-05'
        },
        {
          'model': 'Moonshot v1-128k',
          'org': 'Moonshot',
          'class': 'open',
          'l1': 0.842,
          'l2': 0.551,
          'l3': 0.692,
          'l4': 0.792,
          'total': 0.7,
          'date': '2025-02',
          'tested': '2026-05'
        },
        {
          'model': 'gpt-oss-120b',
          'org': 'OpenAI',
          'class': 'open',
          'l1': 0.79,
          'l2': 0.732,
          'l3': 0.656,
          'l4': 0.379,
          'total': 0.689,
          'date': '2025-08',
          'tested': '2026-05'
        },
        {
          'model': 'Nemotron-3 120B',
          'org': 'NVIDIA',
          'class': 'open',
          'l1': 0.771,
          'l2': 0.66,
          'l3': 0.661,
          'l4': 0.293,
          'total': 0.671,
          'date': '2026-01',
          'tested': '2026-05'
        },
        {
          'model': 'Gemma-4-31B-it',
          'org': 'Google',
          'class': 'open',
          'l1': 0.791,
          'l2': 0.674,
          'l3': 0.606,
          'l4': 0.528,
          'total': 0.664,
          'date': '2026-02',
          'tested': '2026-05'
        },
        {
          'model': 'Moonshot v1-8k',
          'org': 'Moonshot',
          'class': 'open',
          'l1': 0.772,
          'l2': 0.603,
          'l3': 0.555,
          'l4': 0.536,
          'total': 0.62,
          'date': '2025-02',
          'tested': '2026-05'
        },
        {
          'model': 'blank-code baseline',
          'org': '—',
          'class': 'control',
          'l1': 0.04,
          'l2': 0.257,
          'l3': 0.29,
          'l4': 0.42,
          'total': 0.223,
          'date': '—',
          'tested': '2026-05'
        }
      ]
    }
  }
};
