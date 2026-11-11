// AI 热点新闻快照(由 scripts/lib/news.js 每日抓取维护,每日 4 次)
// 来源:「橘鸦AI早报」官方 RSS https://daily.juya.uk/rss.xml(每日整篇早报拆成逐条);仅保留最近 2 天
// 字段说明:date=新闻日期(UTC);title=标题;brief=简要;url=详情链接;source=来源;type=新闻类型(早报正文分类)
window.NEWS = {
  'updated': '2026-11-10',
  'retentionDays': 2,
  'types': [
    '要闻',
    '开发生态',
    '模型发布',
    '技术与洞察',
    '前瞻与传闻',
    '行业动态'
  ],
  'items': [
    {
      'date': '2026-11-10',
      'title': 'Anthropic 发布 Fable 5.2 和 Mythos 5.2，编程与科学评测提升',
      'brief': 'Anthropic 发布 Claude Fable 5.2 和 Mythos 5.2 ，称其能力提升、输出速度最高快 30% 。',
      'url': 'https://anthropic.com/claude-fable-and-mythos-5-2',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-11-10',
      'title': 'Anthropic 随 Fable 5.2 上线推出限时优惠，高阶订阅最多可获 3 次重置',
      'brief': 'Anthropic 随 Claude Fable 5.2 上线推出限时优惠，向符合条件的付费订阅用户额外提供 Fable 用量。',
      'url': 'https://support.claude.com/en/articles/17506494-claude-fable-5-2-launch-offers',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-11-10',
      'title': '字节跳动发布 Seedream 5.5，改图百轮不走样',
      'brief': '字节跳动 发布图像创作模型 Seedream 5.5 ，重点升级多轮编辑、透明素材生成和图像质量。',
      'url': 'https://seed.bytedance.com/zh/seedream5_5',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-11-10',
      'title': '阿里云 Token Plan 个人版额度上调，Pro 月费降至 312 元',
      'brief': '阿里云 宣布上调大模型订阅服务 Token Plan 个人版的额度： Lite 、 Essential 、 Standard 三档套餐月费不变，月度额度提升约 74% 至 78% ，分别达到 2 万、4.5 万和 8 万 Credits ；最高档 Pro 套餐额度由 18 万 提升至 20 万 Credits ，月费由 499 元 降至 312 元 ，降幅约 37.5% 。',
      'url': 'https://mp.weixin.qq.com/s/jHMi-kO0VpjQKqezGEiK9g',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-11-10',
      'title': 'OpenAI dot 现可连接多台电脑，按任务指定用哪台',
      'brief': 'OpenAI 宣布，其 AI 助理 dot 现可连接多台本地计算机，用户可以为任务指定它用哪台电脑执行，例如让它在专用电脑上构建和测试应用，同时在笔记本上继续编程。',
      'url': 'https://learn.chatgpt.com/docs/dots/computers-and-apps',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-11-10',
      'title': 'Meta 发布迄今最小模型 Muse Ember，专攻 agent 重复任务',
      'brief': 'Meta 发布其迄今最小、最高效的模型 Muse Ember ，模型名为 muse-ember-1.0 ，用于复杂推理以及工具调用、编码子任务、信息抽取等重复性 agent 工作。',
      'url': 'https://research.meta.ai/blog/muse-ember',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-11-10',
      'title': 'Adventists AI 开源全双工语音模型 Sophon-Realtime v1',
      'brief': 'Adventists AI 在魔搭 ModelScope 开源了全双工语音模型系列 Sophon-Realtime v1 ，包含 Tag 、 Flash 、 E2E 三个版本，代码和权重均采用 Apache-2.0 协议，允许商用。',
      'url': 'https://modelscope.ai/models/AdventistsAI/Sophon-Realtime-v1',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-11-10',
      'title': '美团开源 LongCat-2.5，MIT 协议可商用',
      'brief': '美团 LongCat 团队宣布正式开源 LongCat-2.5 ，模型权重采用 MIT 协议，支持商用推理部署与二次训练，无需额外授权。',
      'url': 'https://mp.weixin.qq.com/s/EGLDrPxND-xGTyStJIDXrw',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-11-10',
      'title': 'Inkling 2 Small 上架 OpenRouter，限时免费调用',
      'brief': 'OpenRouter 宣布， Thinking Machines 的 Inkling 2 Small 模型现已上架该平台，限时免费开放调用。',
      'url': 'https://openrouter.ai/thinkingmachines/inkling-2-small:free',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-11-10',
      'title': 'OpenAI Agents API 推出三项新功能，prompt cache 可保留 12 小时',
      'brief': 'OpenAI Agents API 团队公布三项新功能。',
      'url': 'https://x.com/AzianMike/status/2119876908066427244',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-11-10',
      'title': 'AI Studio 可用自然语言生成 Google 地图应用',
      'brief': 'Google 宣布， Google AI Studio 接入 Google Maps Platform ，用户在 AI Studio 中用自然语言描述想法， Gemini 会自动完成配置并生成地图应用，支持地图瓦片、地点、天气、路径规划、三维建筑和街景等能力。',
      'url': 'https://developers.googleblog.com/from-prompt-to-app-build-with-google-maps-in-ai-studio',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-11-10',
      'title': 'Ollama 推出使用情况页面，每日花费与 token 用量可查',
      'brief': 'Ollama 推出了新的使用情况页面，用户可以按日和按周查看自己的用量与花费。',
      'url': 'https://x.com/ollama/status/2119897229758788041',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-11-09',
      'title': 'DeepSeek Harness 负责人回应插件作者：内置功能可被插件替换',
      'brief': 'DeepSeek Harness 团队负责人 Tianyi Cui 发文，回应插件作者的疑问：什么样的功能官方会做成内置，官方要做的话第三方插件是否还有意义？',
      'url': 'https://x.com/tianyi/status/2119433744671273441',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-11-09',
      'title': 'GPT-6.1 Sol 连续 3 次参与活体小鼠脑手术，定位误差减半',
      'brief': '据《WIRED》报道及生物科技公司 Exin Therapeutics 联合创始人兼 CEO Gabriel Ocana-Santero 在 X 上公布， OpenAI 旗下模型 GPT-6.1 Sol 连续参与 三次 活体小鼠脑部手术，负责定位颅骨表面的解剖标志 Bregma 和 Lambda ，每次操作后由专业外科医生纠正识别位置，模型保存图像和测量数据供下次参考。',
      'url': 'https://x.com/OcanaSantero/status/2118282298789650505',
      'source': '橘鸦AI早报',
      'type': '技术与洞察'
    },
    {
      'date': '2026-11-09',
      'title': '报道称 Anthropic 34 亿美元买燃气发电机组',
      'brief': '据英国《金融时报》报道， Anthropic 于 9 月下旬 斥资 34 亿美元 ，从美国得克萨斯州圣安东尼奥的设备供应商 OnePWR Solutions 手中接下总功率 1.7GW 的重型燃气发电机组订单，用于为数据中心供电，按已知交易记录是 AI 公司迄今规模最大的一笔发电设备采购。',
      'url': 'https://ft.com/content/41bf5c6a-9735-4f1a-a8e3-2bcccad58ba0?syn-25a6b1a6=1',
      'source': '橘鸦AI早报',
      'type': '行业动态'
    },
    {
      'date': '2026-11-09',
      'title': 'DeepMind 高管预告未来几周发布科学成果',
      'brief': 'Google DeepMind 副总裁 Pushmeet Kohli 发文称，公司在多个项目中正观察到科学发现速度出现“真正的转变”，并预告外界将在未来几周的发布中看到这一变化的缩影。',
      'url': 'https://x.com/pushmeet/status/2119373171321196892',
      'source': '橘鸦AI早报',
      'type': '前瞻与传闻'
    },
    {
      'date': '2026-11-09',
      'title': '用户反映 Grok Bot 额度消耗加快，Elon Musk 称将核查用量',
      'brief': '多名用户在 X 上反映， Grok Bot 的订阅额度消耗明显加快， Elon Musk 对此回应称将核查用量问题。用户 Derek Neighbors 称， 200 美元 方案上周全速使用可维持 7 天 ，本周中等负载下只能用 14 小时 ；另有用户表示，离每周重置还有约 3 天 就把 Ultra 套餐额度用到上限。',
      'url': 'https://x.com/elonmusk/status/2119415029812609301',
      'source': '橘鸦AI早报',
      'type': '前瞻与传闻'
    }
  ]
};
