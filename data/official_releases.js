// 官方发布监听(由 scripts/lib/official-releases.js 生成)
// 来源:Qwen 官方博客 / 腾讯混元官方博客的公开列表 API;只收录最近 120 天发布。
// 用途:models[] 供 scripts/lib/model-auto.js 自动建档;benchmarks[] 标记该发布提到的基准,便于后续种子转录。
// 注:发布页分数图表多为图片,本文件不含分数;分数以 official-seeds.js 的人工转录(T2)为准。
window.OFFICIAL_RELEASES = {
  'updated': '2026-11-16',
  'refreshedAt': '2026-11-16 20:02',
  'sources': [
    'qwen-official',
    'tencent-official'
  ],
  'stats': {
    'releases': 12,
    'models': 11
  },
  'models': [
    {
      'model': 'Hy4',
      'vendor': 'Tencent',
      'src': 'tencent-official',
      'date': '2026-11-04',
      'title': 'Introducing Hy4',
      'url': 'https://hy.tencent.com/research/hy4'
    },
    {
      'model': 'Hy4 flash',
      'vendor': 'Tencent',
      'src': 'tencent-official',
      'date': '2026-11-16',
      'title': 'Introducing Hy4 flash: Ultimate cost-efficiency for everyday productivity',
      'url': 'https://hy.tencent.com/research/hy4-flash'
    },
    {
      'model': 'Hy4 preview',
      'vendor': 'Tencent',
      'src': 'tencent-official',
      'date': '2026-08-28',
      'title': 'Introducing Hy4 preview',
      'url': 'https://hy.tencent.com/research/hy4-preview'
    },
    {
      'model': 'Qwen-Drive-1.0',
      'vendor': 'Alibaba',
      'src': 'qwen-official',
      'date': '2026-09-03',
      'title': 'Qwen-Drive-1.0：迈向自动驾驶视觉-语言基础模型的初步探索',
      'url': 'https://qwen.ai/blog?id=qwen-drive-1.0'
    },
    {
      'model': 'Qwen-Image-2.1',
      'vendor': 'Alibaba',
      'src': 'qwen-official',
      'date': '2026-09-20',
      'title': 'Qwen-Image-2.1：小模强效，创改一体',
      'url': 'https://qwen.ai/blog?id=qwen-image-2.1'
    },
    {
      'model': 'Qwen-Image-3.0',
      'vendor': 'Alibaba',
      'src': 'qwen-official',
      'date': '2026-07-21',
      'title': 'Qwen-Image-3.0: 内容丰实、细节真实、知识厚实',
      'url': 'https://qwen.ai/blog?id=qwen-image-3.0'
    },
    {
      'model': 'Qwen3.8-Flash-Next',
      'vendor': 'Alibaba',
      'src': 'qwen-official',
      'date': '2026-08-26',
      'title': 'Qwen3.8-Flash-Next：全新架构，迈向极致性价比',
      'url': 'https://qwen.ai/blog?id=qwen3.8-flash-next'
    },
    {
      'model': 'Qwen3.8-LiveTranslate',
      'vendor': 'Alibaba',
      'src': 'qwen-official',
      'date': '2026-09-18',
      'title': 'Qwen3.8-LiveTranslate：知其人，传其义',
      'url': 'https://qwen.ai/blog?id=qwen3.8-livetranslate'
    },
    {
      'model': 'Qwen3.8-Max',
      'vendor': 'Alibaba',
      'src': 'qwen-official',
      'date': '2026-08-03',
      'title': 'Qwen3.8-Max：编程与办公，全面跃升',
      'url': 'https://qwen.ai/blog?id=qwen3.8'
    },
    {
      'model': 'Qwen3.8-Omni-Flash',
      'vendor': 'Alibaba',
      'src': 'qwen-official',
      'date': '2026-09-18',
      'title': 'Qwen3.8-Omni-Flash：耳聪目明，办事得力',
      'url': 'https://qwen.ai/blog?id=qwen3.8-omni-flash'
    },
    {
      'model': 'Qwen4-Max',
      'vendor': 'Alibaba',
      'src': 'qwen-official',
      'date': '2026-11-16',
      'title': 'Qwen4-Max：新同事，已就位',
      'url': 'https://qwen.ai/blog?id=qwen4-max'
    }
  ],
  'releases': [
    {
      'src': 'tencent-official',
      'vendor': 'Tencent',
      'title': 'Introducing Hy4 flash: Ultimate cost-efficiency for everyday productivity',
      'date': '2026-11-16',
      'url': 'https://hy.tencent.com/research/hy4-flash',
      'models': [
        'Hy4 flash'
      ],
      'benchmarks': [
        'DeepSWE',
        'Terminal-Bench 4.0',
        'ProgramBench',
        'HLE',
        'OSWorld',
        'APEX',
        'AutomationBench',
        'WorkIndex'
      ],
      'cover': 'https://hy-model-ap-prod-1258344703.cos.ap-guangzhou.myqcloud.com/llm-blog/default/9a5ea02f/2026111517490716_6d0b8dd02dcfff6174ba34e437a09247.png',
      'images': [
        'https://hy-model-ap-prod-1258344703.cos.ap-guangzhou.myqcloud.com/llm-blog/default/9a5ea02f/2026111517490716_6d0b8dd02dcfff6174ba34e437a09247.png'
      ]
    },
    {
      'src': 'qwen-official',
      'vendor': 'Alibaba',
      'title': 'Qwen4-Max：新同事，已就位',
      'date': '2026-11-16',
      'url': 'https://qwen.ai/blog?id=qwen4-max',
      'models': [
        'Qwen4-Max'
      ],
      'benchmarks': [
        'Terminal-Bench 4.0',
        'APEX',
        'AutomationBench',
        'Code Arena · WebDev',
        'Agent Arena',
        'Chartography',
        'JobBench',
        'HLAB-Vals',
        'AA-Briefcase',
        'Work360'
      ],
      'cover': 'https://img.alicdn.com/imgextra/i1/O1CN01MbincoVLKeC29R4a_!!6000000005084-2-tps-1060-636.png',
      'images': [
        'https://img.alicdn.com/imgextra/i3/O1CN01d8WOyjWDWEKAxlwO_!!6000000007934-2-tps-5400-3600.png',
        'https://img.alicdn.com/imgextra/i1/O1CN010VgwbmS9yHH6DCXk_!!6000000004985-2-tps-3060-1440.png',
        'https://qianwen-res.oss-cn-beijing.aliyuncs.com/Qwen4-Max/architecture.png#center',
        'https://qianwen-res.oss-cn-beijing.aliyuncs.com/Qwen4-Max/training-loss.png#center',
        'https://qianwen-res.oss-cn-beijing.aliyuncs.com/Qwen4-Max/pretraining-evaluation.png#center',
        'https://img.alicdn.com/imgextra/i3/O1CN01xc6uwQLYf2L5CGEC_!!6000000002565-0-tps-2560-1440.jpg',
        'https://img.alicdn.com/imgextra/i1/O1CN01dwb6hpx72DB5CGEC_!!6000000002777-0-tps-2560-1440.jpg',
        'https://img.alicdn.com/imgextra/i3/O1CN01UbfdH8wgPOD5CGEC_!!6000000000383-0-tps-2560-1440.jpg'
      ]
    },
    {
      'src': 'tencent-official',
      'vendor': 'Tencent',
      'title': 'Introducing Hy4',
      'date': '2026-11-04',
      'url': 'https://hy.tencent.com/research/hy4',
      'models': [
        'Hy4'
      ],
      'benchmarks': [],
      'cover': 'https://hy-model-ap-prod-1258344703.cos.ap-guangzhou.myqcloud.com/llm-blog/default/a951c950/2026110219294526_20bbdf2a313c4cad81b3fdb22932e7ff.mov',
      'images': [
        'https://hy-model-ap-prod-1258344703.cos.ap-guangzhou.myqcloud.com/llm-blog/default/a951c950/2026110219294526_20bbdf2a313c4cad81b3fdb22932e7ff.mov',
        'https://hy-model-ap-prod-1258344703.cos.ap-guangzhou.myqcloud.com/llm-blog/default/a951c950/2026110412350446_2f755945ab99ef0048c13fe3df876f23.mp4',
        'https://hy-model-ap-prod-1258344703.cos.ap-guangzhou.myqcloud.com/llm-blog/default/a951c950/2026110412392226_8c6cea5f8cc23b5d6912d4c49e7d4972.mp4',
        'https://hy-model-ap-prod-1258344703.cos.ap-guangzhou.myqcloud.com/llm-blog/default/a951c950/2026110412411758_7325d50a2ba30f0bc3554f4072af3c0a.mov',
        'https://hy-model-ap-prod-1258344703.cos.ap-guangzhou.myqcloud.com/llm-blog/default/a951c950/2026110412445566_0454178fc24779d62779d54189cc09b6.mp4',
        'https://hy-model-ap-prod-1258344703.cos.ap-guangzhou.myqcloud.com/llm-blog/default/a951c950/2026110412465138_06a7dcecc91817b5110b719a51ad9721.mp4',
        'https://hy-model-ap-prod-1258344703.cos.ap-guangzhou.myqcloud.com/llm-blog/default/a951c950/2026110412511919_f17bce0d9b1eeca86a7263a03ac20d93.mp4',
        'https://hy-model-ap-prod-1258344703.cos.ap-guangzhou.myqcloud.com/llm-blog/default/a951c950/2026110412525050_d5e4b6b53df1e281b054a61dffbbcb81.mp4'
      ]
    },
    {
      'src': 'qwen-official',
      'vendor': 'Alibaba',
      'title': 'Qwen-Image-2.1：小模强效，创改一体',
      'date': '2026-09-20',
      'url': 'https://qwen.ai/blog?id=qwen-image-2.1',
      'models': [
        'Qwen-Image-2.1'
      ],
      'benchmarks': [],
      'cover': 'https://img.alicdn.com/imgextra/i1/O1CN01XLHYPGwKvuI29R4a_!!6000000005961-2-tps-1060-636.png',
      'images': [
        'https://qianwen-res.oss-accelerate.aliyuncs.com/Qwen-Image/image2.1/banner_zh.jpg',
        'https://qianwen-res.oss-accelerate.aliyuncs.com/Qwen-Image/image2.1/images/example-01.png',
        'https://qianwen-res.oss-accelerate.aliyuncs.com/Qwen-Image/image2.1/images/example-03.png',
        'https://qianwen-res.oss-accelerate.aliyuncs.com/Qwen-Image/image2.1/images/example-04.png',
        'https://qianwen-res.oss-accelerate.aliyuncs.com/Qwen-Image/image2.1/images/example-05.png',
        'https://qianwen-res.oss-accelerate.aliyuncs.com/Qwen-Image/image2.1/images/example-06.png',
        'https://qianwen-res.oss-accelerate.aliyuncs.com/Qwen-Image/image2.1/images/example-07.png',
        'https://qianwen-res.oss-accelerate.aliyuncs.com/Qwen-Image/image2.1/images/example-09.png?v=ee4de1b5241d'
      ]
    },
    {
      'src': 'qwen-official',
      'vendor': 'Alibaba',
      'title': 'Qwen3.8-LiveTranslate：知其人，传其义',
      'date': '2026-09-18',
      'url': 'https://qwen.ai/blog?id=qwen3.8-livetranslate',
      'models': [
        'Qwen3.8-LiveTranslate'
      ],
      'benchmarks': [],
      'cover': 'https://img.alicdn.com/imgextra/i1/O1CN01WiBmdpYSfUD29R4a_!!6000000000594-2-tps-1060-636.png',
      'images': [
        'https://qianwen-res.oss-accelerate.aliyuncs.com/Qwen3.8-LiveTranslate/main_v3_zh.png',
        'https://qianwen-res.oss-accelerate.aliyuncs.com/Qwen3.8-LiveTranslate/features-loop-hd.gif',
        'https://qianwen-res.oss-accelerate.aliyuncs.com/Qwen3.8-LiveTranslate/architecture-loop-zh-2x.webp',
        'https://qianwen-res.oss-accelerate.aliyuncs.com/Qwen3.8-LiveTranslate/multispk_zh.png',
        'https://qianwen-res.oss-accelerate.aliyuncs.com/Qwen3.8-LiveTranslate/fleurs_zh.png'
      ]
    },
    {
      'src': 'qwen-official',
      'vendor': 'Alibaba',
      'title': 'Qwen3.8-Omni-Flash：耳聪目明，办事得力',
      'date': '2026-09-18',
      'url': 'https://qwen.ai/blog?id=qwen3.8-omni-flash',
      'models': [
        'Qwen3.8-Omni-Flash'
      ],
      'benchmarks': [
        'DeepSWE',
        'HLE',
        'OSWorld'
      ],
      'cover': 'https://img.alicdn.com/imgextra/i1/O1CN01OvSn2RXYZRD29R4a_!!6000000000892-2-tps-1060-636.png',
      'images': [
        'https://qianwen-res.oss-cn-beijing.aliyuncs.com/Qwen3.8-Omni-Flash/banner-latest.png',
        'https://qianwen-res.oss-cn-beijing.aliyuncs.com/Qwen3.8-Omni-Flash/production-overview-v2.png#center',
        'https://qianwen-res.oss-cn-beijing.aliyuncs.com/Qwen3.8-Omni-Flash/performance-overview-v2.png?v=20260916-2204',
        'https://qianwen-res.oss-cn-beijing.aliyuncs.com/Qwen3.8-Omni-Flash/mm-plugins-install-20260917.zh.png',
        'https://qianwen-res.oss-cn-beijing.aliyuncs.com/Qwen3.8-Omni-Flash/fig3.png?v=20260916-2053#center'
      ]
    },
    {
      'src': 'qwen-official',
      'vendor': 'Alibaba',
      'title': 'E-Commerce Bench：长程经营，多维评估',
      'date': '2026-09-03',
      'url': 'https://qwen.ai/blog?id=e-commerce-bench',
      'models': [],
      'benchmarks': [],
      'cover': 'https://img.alicdn.com/imgextra/i1/O1CN01QlThshCJ7uE3E9bs_!!6000000000358-2-tps-1590-954.png',
      'images': [
        'https://qianwen-res.oss-accelerate-overseas.aliyuncs.com/EC-Bench/banner.jpg#center',
        'https://qianwen-res.oss-accelerate-overseas.aliyuncs.com/EC-Bench/fig1_overview.png',
        'https://qianwen-res.oss-accelerate-overseas.aliyuncs.com/EC-Bench/fig2_demand_model.png',
        'https://qianwen-res.oss-accelerate-overseas.aliyuncs.com/EC-Bench/fig3_negotiation_kernel.png',
        'https://qianwen-res.oss-accelerate-overseas.aliyuncs.com/EC-Bench/fig4_final_assets.png',
        'https://qianwen-res.oss-accelerate-overseas.aliyuncs.com/EC-Bench/fig5_balance_all18.png',
        'https://qianwen-res.oss-accelerate-overseas.aliyuncs.com/EC-Bench/fig6_bankruptcy.png',
        'https://qianwen-res.oss-accelerate-overseas.aliyuncs.com/EC-Bench/fig7_seven_axes.png'
      ]
    },
    {
      'src': 'qwen-official',
      'vendor': 'Alibaba',
      'title': 'Qwen-Drive-1.0：迈向自动驾驶视觉-语言基础模型的初步探索',
      'date': '2026-09-03',
      'url': 'https://qwen.ai/blog?id=qwen-drive-1.0',
      'models': [
        'Qwen-Drive-1.0'
      ],
      'benchmarks': [
        'MMMU-Pro'
      ],
      'cover': 'https://img.alicdn.com/imgextra/i2/O1CN01BEtEP74nVrF3E9bs_!!6000000002925-2-tps-1590-954.png',
      'images': [
        'https://qianwen-res.oss-accelerate-overseas.aliyuncs.com/Qwen-Drive/blog_banner.png',
        'https://qianwen-res.oss-accelerate-overseas.aliyuncs.com/Qwen-Drive/qwendrive_overview.png',
        'https://qianwen-res.oss-accelerate-overseas.aliyuncs.com/Qwen-Drive/intro.png'
      ]
    },
    {
      'src': 'tencent-official',
      'vendor': 'Tencent',
      'title': 'Introducing Hy4 preview',
      'date': '2026-08-28',
      'url': 'https://hy.tencent.com/research/hy4-preview',
      'models': [
        'Hy4 preview'
      ],
      'benchmarks': [],
      'cover': 'https://hy-model-ap-prod-1258344703.cos.ap-guangzhou.myqcloud.com/llm-blog/default/9a5ea02f/2026082716220649_1437ddb3b346a01a5e603f2a607d250c.png',
      'images': [
        'https://hy-model-ap-prod-1258344703.cos.ap-guangzhou.myqcloud.com/llm-blog/default/9a5ea02f/2026082716220649_1437ddb3b346a01a5e603f2a607d250c.png',
        'https://hy-model-ap-prod-1258344703.cos.ap-guangzhou.myqcloud.com/llm-blog/default/a951c950/2026082809243397_4ed20a20575db183c706008f94266b28.mp4',
        'https://hy-model-ap-prod-1258344703.cos.ap-guangzhou.myqcloud.com/llm-blog/default/a951c950/2026082809241621_2953ca509f52e49c51cbc85540a82a95.mp4',
        'https://hy-model-ap-prod-1258344703.cos.ap-guangzhou.myqcloud.com/llm-blog/default/a951c950/2026082809244419_ead3e2e5418d31da5ee183f0eeb78acd.mp4',
        'https://hy-model-ap-prod-1258344703.cos.ap-guangzhou.myqcloud.com/llm-blog/default/9a5ea02f/2026082812461923_efb742fb48c26d7eaf5c5ad865fd3188.mp4',
        'https://hy-model-ap-prod-1258344703.cos.ap-guangzhou.myqcloud.com/llm-blog/default/9a5ea02f/2026082812375712_4bc904523b8bcc37e67fdae6c401eb16.mp4',
        'https://hy-model-ap-prod-1258344703.cos.ap-guangzhou.myqcloud.com/llm-blog/default/a951c950/2026082809354790_6d512011649cd81abd12720eb8124af1.mp4',
        'https://hy-model-ap-prod-1258344703.cos.ap-guangzhou.myqcloud.com/llm-blog/default/a951c950/2026082809325931_2e3539f1d78f75568838c2a647a7e9ff.mp4'
      ]
    },
    {
      'src': 'qwen-official',
      'vendor': 'Alibaba',
      'title': 'Qwen3.8-Flash-Next：全新架构，迈向极致性价比',
      'date': '2026-08-26',
      'url': 'https://qwen.ai/blog?id=qwen3.8-flash-next',
      'models': [
        'Qwen3.8-Flash-Next'
      ],
      'benchmarks': [
        'DeepSWE',
        'HLE',
        'OSWorld',
        'Agents\' Last Exam',
        'JobBench'
      ],
      'cover': 'https://img.alicdn.com/imgextra/i1/O1CN01ZxcR5nZsP9E3E9bs_!!6000000003536-2-tps-1590-954.png',
      'images': [
        'https://qianwen-res.oss-accelerate.aliyuncs.com/Qwen3.8-Flash-Next/Qwen3.8-flash_banner_zh.jpg#center',
        'https://qianwen-res.oss-accelerate.aliyuncs.com/Qwen3.8-Flash-Next/architecture.png#center',
        'https://qianwen-res.oss-accelerate.aliyuncs.com/Qwen3.8-Flash-Next/qsa_arch.png#center',
        'https://qianwen-res.oss-accelerate.aliyuncs.com/Qwen3.8-Flash-Next/throughput.png#center',
        'https://qianwen-res.oss-accelerate.aliyuncs.com/Qwen3.8-Flash-Next/qwen-work-cn.png#center'
      ]
    },
    {
      'src': 'qwen-official',
      'vendor': 'Alibaba',
      'title': 'Qwen3.8-Max：编程与办公，全面跃升',
      'date': '2026-08-03',
      'url': 'https://qwen.ai/blog?id=qwen3.8',
      'models': [
        'Qwen3.8-Max'
      ],
      'benchmarks': [
        'DeepSWE',
        'Terminal-Bench 4.0',
        'HLE',
        'OSWorld',
        'Agents\' Last Exam',
        'MMMU-Pro',
        'ZeroBench',
        'JobBench',
        'HealthBench'
      ],
      'cover': 'https://img.alicdn.com/imgextra/i1/O1CN01ITn7j2cu9OF3E9bs_!!6000000000314-2-tps-1590-954.png',
      'images': [
        'https://qianwen-res.oss-cn-beijing.aliyuncs.com/Qwen3.8/performance.png',
        'https://qianwen-res.oss-cn-beijing.aliyuncs.com/Qwen3.8/work_showcases/training-score-vs-envs-scale.png#center',
        'https://qianwen-res.oss-cn-beijing.aliyuncs.com/Qwen3.8/work_showcases/harness-generalization-3.8.png#center'
      ]
    },
    {
      'src': 'qwen-official',
      'vendor': 'Alibaba',
      'title': 'Qwen-Image-3.0: 内容丰实、细节真实、知识厚实',
      'date': '2026-07-21',
      'url': 'https://qwen.ai/blog?id=qwen-image-3.0',
      'models': [
        'Qwen-Image-3.0'
      ],
      'benchmarks': [],
      'cover': 'https://img.alicdn.com/imgextra/i4/O1CN01xIf9ZH22o5MUhuDYF_!!6000000007166-2-tps-1590-954.png',
      'images': [
        'https://qianwen-res.oss-accelerate.aliyuncs.com/Qwen-Image/image3/banner.png#center',
        'https://qianwen-res.oss-accelerate.aliyuncs.com/Qwen-Image/image3/update1.png',
        'https://qianwen-res.oss-accelerate.aliyuncs.com/Qwen-Image/image3/update2.png',
        'https://qianwen-res.oss-accelerate.aliyuncs.com/Qwen-Image/image3/3fa25ce8ca621bc3642b431d6724ecc3.png',
        'https://qianwen-res.oss-accelerate.aliyuncs.com/Qwen-Image/image3/whale.jpg',
        'https://qianwen-res.oss-accelerate.aliyuncs.com/Qwen-Image/image3/cca131fe-4ba1-409e-9da0-2358ee2bbb41.png#center',
        'https://qianwen-res.oss-accelerate.aliyuncs.com/Qwen-Image/image3/update5.png',
        'https://qianwen-res.oss-accelerate.aliyuncs.com/Qwen-Image/image3/update6.jpeg'
      ]
    }
  ]
};
