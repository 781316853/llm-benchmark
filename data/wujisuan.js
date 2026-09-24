// 数据源:无机酸 · AI 前端实测(2026-09-24 更新;@无机酸-_-,B 站 UP 主前端端到端实测榜)
// 站点:https://www.bilibili.com/toy/wujisuan-ai-test/index.html
// 接口:https://www.bilibilitoy.com/toy/wujisuan-ai-test/36188744578048-v17769/data/site.json(外壳页内嵌 iframe 的 <toyId>-<版本号> 路径每期变化,本源先抓外壳页提取)
// 实测视频合集:https://space.bilibili.com/521186488/channel/collectiondetail?sid=8786711
// 量纲:单任务分 0-100;models[].score = 两任务分之和(源站自报区间 0-200),非百分制
// ⚠️ 口径:每模型跑在其自家 agent harness(agent 字段,如 cc/codex/zcode/qoder/cursor)下,
//   分数混杂模型与 harness 两者质量;每模型 n=1,lo/hi 为源站人工标注的不确定区间(非置信区间)。
// 字段说明:rank=源站名次;identity=源站 slug(agent 后缀);name=模型展示名;effort=推理档位(null 表示无);
//          agent=harness;vendor=厂商;score=两任务总分;lo/hi + loUncertain/hiUncertain=不确定区间;
//          date=实测日期;releaseDate=源站核实的模型发布日;bvid/videoUrl=该期实测视频;
//          platform=源站记录的运行环境;series=源站视频专栏
// 结构:models=主榜;tasks=任务定义(含短/长提示词全文);papers=模型×任务×短长提示×首轮/最终明细;
//        gain=长提示相对基准的增减益(byTask 按任务 id 给出 short/long 四项子分)
// 用途:已计入总览综合分(「第三方实测」组计分组之一,权重 10%)与命中数(分母 7);「无机酸实测」页完整展示。
window.WUJISUAN = {
  'source': '无机酸 · AI 前端实测',
  'url': 'https://www.bilibili.com/toy/wujisuan-ai-test/index.html',
  'apiUrl': 'https://www.bilibilitoy.com/toy/wujisuan-ai-test/36188744578048-v17769/data/site.json',
  'methodUrl': 'https://space.bilibili.com/521186488/channel/collectiondetail?sid=8786711',
  'author': '@无机酸-_-',
  'siteVersion': '2.1',
  'updated': '2026-09-24',
  'refreshedAt': '2026-09-24 22:16',
  'scale': {
    'min': 0,
    'max': 200,
    'unit': '两任务分之和(每任务 0-100)'
  },
  'scoreRange': [
    0,
    200
  ],
  'dateRange': [
    '2026-08-01',
    '2026-10-05'
  ],
  'currentIdentity': 'gpt-6-luna:max:codex',
  'stats': {
    'models': 12,
    'papers': 72,
    'tasks': 2,
    'gainRows': 12
  },
  'channelPolicy': '渠道优先级:基准官方实测榜 > 厂商官方发布(论文/发布页)> 第三方聚合与镜像;低层级仅补缺失模型与字段,不覆盖高层级分数',
  'desc': 'B 站 UP 主 @无机酸-_- 的第三方独立前端实测:每个模型用其原生 agent harness 在两个真实前端任务(虚构 AI 品牌站 SupernovAI、体素三维场景《云山巨城》)上端到端交付,按短提示与长提示各跑首轮与最终,任务分 0-100、总分为两任务之和;另有长提示相对基准的增益率。分数混杂模型与 harness 质量,且每模型仅一次实测。',
  'models': [
    {
      'rank': 1,
      'identity': 'claude-opus-5-5(cc)',
      'name': 'Claude Opus 5.5',
      'model': 'claude-opus-5-5',
      'effort': 'max',
      'agent': 'cc',
      'vendor': 'anthropic',
      'score': 177.84,
      'lo': 171,
      'hi': 195,
      'loUncertain': false,
      'hiUncertain': true,
      'date': '2026-09-22',
      'releaseDate': '2026-09-23',
      'bvid': 'BV1NRhp6XEiq',
      'videoUrl': 'https://www.bilibili.com/video/BV1NRhp6XEiq/',
      'platform': 'Claude Code / 网页参与',
      'series': '前端专项'
    },
    {
      'rank': 2,
      'identity': 'gpt-6-astra(codex)',
      'name': 'GPT-6 Astra',
      'model': 'gpt-6-astra',
      'effort': 'max',
      'agent': 'codex',
      'vendor': 'openai',
      'score': 172.26,
      'lo': 168,
      'hi': 180,
      'loUncertain': false,
      'hiUncertain': true,
      'date': '2026-09-20',
      'releaseDate': '2026-09-03',
      'bvid': 'BV1oyeB6xEZX',
      'videoUrl': 'https://www.bilibili.com/video/BV1oyeB6xEZX/',
      'platform': 'Windows 11 + Codex',
      'series': '前端专项'
    },
    {
      'rank': 3,
      'identity': 'gpt-6-sol(codex)',
      'name': 'GPT-6 Sol',
      'model': 'gpt-6-sol',
      'effort': 'max',
      'agent': 'codex',
      'vendor': 'openai',
      'score': 137.7,
      'lo': 119.6,
      'hi': 145,
      'loUncertain': false,
      'hiUncertain': true,
      'date': '2026-09-23',
      'releaseDate': '2026-09-23',
      'bvid': 'BV1Xeh86JEwG',
      'videoUrl': 'https://www.bilibili.com/video/BV1Xeh86JEwG/',
      'platform': 'Windows 11 + Codex',
      'series': '前端专项'
    },
    {
      'rank': 4,
      'identity': 'swe-2(devin)',
      'name': 'SWE-2',
      'model': 'swe-2',
      'effort': 'max',
      'agent': 'devin',
      'vendor': 'cognition',
      'score': 129.49,
      'lo': 92,
      'hi': 132.69,
      'loUncertain': false,
      'hiUncertain': false,
      'date': '2026-09-19',
      'releaseDate': '2026-09-10',
      'bvid': 'BV17geh6iEFk',
      'videoUrl': 'https://www.bilibili.com/video/BV17geh6iEFk/',
      'platform': 'Windows 11 + Devin Desktop',
      'series': '前端专项'
    },
    {
      'rank': 5,
      'identity': 'mimo-v2.6-pro(zcode)',
      'name': 'MiMo V2.6 Pro',
      'model': 'mimo-v2.6-pro',
      'effort': null,
      'agent': 'zcode',
      'vendor': 'xiaomi',
      'score': 123.8,
      'lo': 108,
      'hi': 130,
      'loUncertain': false,
      'hiUncertain': true,
      'date': '2026-09-23',
      'releaseDate': '2026-09-21',
      'bvid': 'BV1xuhn61Ezx',
      'videoUrl': 'https://www.bilibili.com/video/BV1xuhn61Ezx/',
      'platform': 'Windows 11 + ZCode',
      'series': '前端专项'
    },
    {
      'rank': 6,
      'identity': 'qwen3.8-flash(qoder)',
      'name': 'Qwen3.8-Flash',
      'model': 'qwen3.8-flash',
      'effort': 'xhigh',
      'agent': 'qoder',
      'vendor': 'qwen',
      'score': 119.18,
      'lo': 100.2,
      'hi': 142,
      'loUncertain': false,
      'hiUncertain': true,
      'date': '2026-09-17',
      'releaseDate': '2026-08-26',
      'bvid': 'BV1YLtW6tET4',
      'videoUrl': 'https://www.bilibili.com/video/BV1YLtW6tET4/',
      'platform': 'Windows 11 + Qoder',
      'series': '六项能力测试'
    },
    {
      'rank': 7,
      'identity': 'gemini-3.8-flash(antigravity)',
      'name': 'Gemini 3.8 Flash',
      'model': 'gemini-3.8-flash',
      'effort': 'high',
      'agent': 'antigravity',
      'vendor': 'google',
      'score': 113.54,
      'lo': 90,
      'hi': 130,
      'loUncertain': false,
      'hiUncertain': true,
      'date': '2026-09-21',
      'releaseDate': '',
      'bvid': 'BV1attD6PET4',
      'videoUrl': 'https://www.bilibili.com/video/BV1attD6PET4/',
      'platform': 'Windows 11 + Antigravity',
      'series': '六项能力测试'
    },
    {
      'rank': 8,
      'identity': 'glm-5.3(zcode)',
      'name': 'GLM-5.3',
      'model': 'glm-5.3',
      'effort': 'max',
      'agent': 'zcode',
      'vendor': 'zhipu',
      'score': 110.84,
      'lo': 80,
      'hi': 115,
      'loUncertain': true,
      'hiUncertain': true,
      'date': '2026-09-22',
      'releaseDate': '2026-08-14',
      'bvid': 'BV1b8bR6GEKv',
      'videoUrl': 'https://www.bilibili.com/video/BV1b8bR6GEKv/',
      'platform': 'Windows 11 + ZCode',
      'series': '六项能力测试'
    },
    {
      'rank': 9,
      'identity': 'step-5-preview(zcode)',
      'name': 'Step 5 Preview',
      'model': 'step-5-preview',
      'effort': 'high',
      'agent': 'zcode',
      'vendor': 'stepfun',
      'score': 109.59,
      'lo': 80,
      'hi': 128,
      'loUncertain': true,
      'hiUncertain': false,
      'date': '2026-09-21',
      'releaseDate': '2026-09-20',
      'bvid': 'BV1SThe6sEWV',
      'videoUrl': 'https://www.bilibili.com/video/BV1SThe6sEWV/',
      'platform': 'MacOS 27.1 Beta 1 + ZCode',
      'series': '前端专项'
    },
    {
      'rank': 10,
      'identity': 'gpt-6-luna(codex)',
      'name': 'GPT-6 Luna',
      'model': 'gpt-6-luna',
      'effort': 'max',
      'agent': 'codex',
      'vendor': 'openai',
      'score': 103.21,
      'lo': 79.08,
      'hi': 108,
      'loUncertain': true,
      'hiUncertain': false,
      'date': '2026-09-24',
      'releaseDate': '2026-09-23',
      'bvid': 'BV1fQhZ6rEjX',
      'videoUrl': 'https://www.bilibili.com/video/BV1fQhZ6rEjX/',
      'platform': 'Windows 11 + Codex',
      'series': '前端专项'
    },
    {
      'rank': 11,
      'identity': 'grok-4.7(cursor)',
      'name': 'Grok 4.7',
      'model': 'grok-4.7',
      'effort': 'xhigh',
      'agent': 'cursor',
      'vendor': 'xai',
      'score': 79.08,
      'lo': 73.5,
      'hi': 90,
      'loUncertain': false,
      'hiUncertain': true,
      'date': '2026-09-22',
      'releaseDate': '2026-09-21',
      'bvid': 'BV1nZhr6YEnG',
      'videoUrl': 'https://www.bilibili.com/video/BV1nZhr6YEnG/',
      'platform': 'Windows 11 + Cursor Pro',
      'series': '前端专项'
    },
    {
      'rank': 12,
      'identity': 'dots3-note-prev(zcode)',
      'name': 'Dots3-note-prev',
      'model': 'dots3-note-prev',
      'effort': null,
      'agent': 'zcode',
      'vendor': 'dots',
      'score': 45.46,
      'lo': 0,
      'hi': 46.46,
      'loUncertain': false,
      'hiUncertain': false,
      'date': '2026-09-18',
      'releaseDate': '2026-08-14',
      'bvid': 'BV15T8F6YETm',
      'videoUrl': 'https://www.bilibili.com/video/BV15T8F6YETm/',
      'platform': 'Windows 11 + ZCode + 官 API',
      'series': '六项能力测试'
    }
  ],
  'tasks': [
    {
      'id': 'supernovai',
      'name': 'SupernovAI',
      'subtitle': '把一个想法，变成一个品牌。',
      'kind': '网页构建',
      'number': '01',
      'description': '品牌、产品体验、套餐与 API。从视觉表达，到完整交互。',
      'promptShort': '帮虚构 AI 品牌 SupernovAI 做一个高级、克制、专业、全面的网站，介绍它在科研、创新、编程、教育和内容创作中能做什么，让人能试用产品、选套餐、体验 API。\n这些功能都用本地模拟并标明，电脑和手机都要能用，最后给出完整项目和启动方法。\n',
      'promptLong': '请为虚构 AI 品牌 **SupernovAI** 设计并实现一个品牌宣传与产品体验网站，整体要求是：**高级、克制、专业、全面**。\n\n网站面向科研、创新、编程、教育和内容创作领域，让访客了解产品的用途，并能实际完成产品试用、套餐选择与 API 演示。\n\n### 品牌与产品内容\n- 介绍品牌、产品及其适用人群，展示五个领域中的具体用途和应用示例。\n- 网站各处的产品名称、能力说明、套餐信息保持一致。\n- 区分产品设想、虚构案例和实际可用的演示功能，不编造真实客户、合作关系、认证或效果数据。\n\n### 产品试用\n- 允许访客选择应用场景、输入内容并提交，获得与所选场景及输入相关的演示结果。\n- 提供处理中、完成和失败状态；输入无效时说明原因，失败后允许修改并重试。\n- 明确标注结果为本地模拟，不冒充真实 AI 生成。\n\n### 套餐选择\n- 展示套餐价格、额度和权益，支持比较、选择、核对与确认模拟订单。\n- 确认前不生成订单，失败时不显示成功；订单结果与所选套餐一致。\n- 明确说明不会扣款，不要求注册、登录或提供付款信息。\n\n### API 演示\n- 展示调用示例，允许修改场景、输入内容和输出详略，执行后查看对应的请求、结果或错误。\n- 展示的参数与实际执行内容保持一致，并明确标注为本地模拟调用。\n\n### 运行与交付\n- 桌面和手机均能浏览网站并完成上述主要操作。\n- 业务功能在浏览器内模拟，不接入真实 AI、支付或业务后端，不要求密钥和数据库。\n- 交付完整可运行的项目，附安装、启动、操作与失败重试说明；如实记录已执行的检查和未验证的部分，不以图片或设计说明代替网站。\n'
    },
    {
      'id': 'yunshan',
      'name': '云山巨城',
      'subtitle': '在山水之间，造一座城。',
      'kind': '体素模拟',
      'number': '02',
      'description': '山岭、古城与流动的瀑布。一场昼夜交替的三维游览。',
      'promptShort': '请设计并实现一个可在浏览器中交互游览的三维体素作品《云山巨城》：宏伟的中式古城顺应重重山岭与溪谷错落延展，瀑布旁设标志性建筑，山顶设亭子，以连通道路串联游览，突出震撼尺度与中式山水意境。\n体素限制使用 0.2m/voxel 的大小。\n实现可自动推进、手动调节和暂停的连续24小时昼夜循环，使日月、天空、光照与城市灯火协调变化，并交付完整可运行的项目及简短操作说明。\n',
      'promptLong': '请设计并实现一个可在浏览器中实时运行、可交互游览的三维体素风格作品：\n\n《云山巨城》\n\n【创作目标】\n\n崇山峻岭之间，云雾穿行，一座超级宏伟、规模巨大的中式古风城市横跨重重山岭与溪谷。庞大的建筑群顺应山势，在不同山腰、山脊、谷地与水岸层层展开，飞檐叠嶂，楼阁相望，街巷与桥梁连接各片城区。山顶有可登临的亭子，一处壮观瀑布旁依山傍水建有这座大型城市的标志性中式建筑。\n\n请创造一幅可以走入、可以游览、可以经历昼夜变化的体素山水巨城长卷。首先要有令人震撼的城市尺度、恢宏气势和建筑群层次，同时具备值得靠近探索的细节与中式山水意境。\n\n这不是把大量房屋集中摆在一个山丘上，也不是以远山为背景、在平地上排列建筑。山水必须真正穿行于各片城区之间，整座城市沿多重山势向远处延展。\n\n【场景要求】\n\n1. 群山、水系与城市尺度\n\n场景应具有多重山峰、山脊与谷地，形成清晰的高低起伏和远近关系。规模庞大的建筑群分布在不同山体及其间的谷地、水岸，构成彼此联系的城区，而非全部集中于同一座山头或同一块平台。\n\n城市的巨大应通过跨山延展的范围、多片城区、丰富的空间纵深及建筑层级体现，不能仅靠放大几栋建筑，或用远景贴图制造规模感。\n\n设置一处可清楚观赏的壮观瀑布，水流与下游溪流或潭水自然衔接。依傍瀑布建造具有宏大体量、鲜明轮廓和中式建筑美感的城市标志性建筑，其具体形制及单体或建筑群形式由你设计。它应与瀑布、山崖、水岸及城市道路共同形成具有震撼力的景观，既足以成为视觉焦点，又属于整座城市，而不是孤立摆件。\n\n山、水、林木、云雾和建筑共同构成景观。具体地形、水系走向、城区布局及地标位置由你自主设计。\n\n2. 中式体素建筑群\n\n采用明确、统一的体素艺术风格，以中式建筑为主体，体现飞檐、屋顶轮廓、院落及大型建筑群组合的美感。山顶设有可抵达的亭子。\n\n城市应具有超级宏伟的整体规模，但不以房屋数量代替设计。建筑沿地形错落分布，形成疏密、主次和高低层次，并给山林、水系与视野留下空间。避免把全城组织成等间距、同行同列的房屋矩阵；局部街巷或院落可以规整，但整体应顺应山势。\n\n允许复用建筑构件和样式，但组合后应有可信的用途、体量和空间差异，不能主要依靠少数整栋房屋模板的大量复制来表现城市。变化应服务于整体美感，而不是简单随机缩放、旋转或换色。\n\n不规定建筑数量或具体建模方法。建筑应有合理的落脚点，与山体及周边空间自然衔接。体素尺寸使用 0.2m/voxel 的单位。\n\n3. 道路与游览\n\n道路、街巷、石阶、桥梁等应根据地形合理组织，使主要城区、瀑布旁的标志性建筑、水岸和山顶亭子相互连通。不同城区之间应具有可理解的交通联系，道路与建筑入口或活动空间要实际衔接，不能只是装饰线。\n\n提供能够沿道路观察场景的游览方式，至少可以从低处城区经过瀑布旁的标志性建筑，继续登临山顶亭子；同时允许自由查看全景与局部。\n\n具体操控方式由你设计，不要求复杂角色或交通模拟。游览应让人感受到这座巨城的尺度、空间和景致变化，而不只是镜头从屋顶上空飞过。\n\n4. 完整的日月系统\n\n实现连续的 24 小时昼夜循环，而不只是白天与夜晚两个预设。\n\n时间能够自动推进，也能由用户手动调节至一天中的任意时刻，并可暂停。\n\n日月位置、天空、环境光照和城市夜间灯火应随时间协调变化，让清晨、正午、黄昏和深夜各有氛围。夜晚应保有可辨识的山城层次，并展现庞大城市的灯火景观，不应只是把整个场景调暗。\n\n不要求天文学级精确，但变化应连续、合理、视觉可信。\n\n【审美与体验】\n\n宏伟、美感与意境是核心要求，不是完成功能后的附加装饰。\n\n请自主决定构图、色彩、体素细节、建筑语言、光影、植被、云雾和水体的表现方式。希望看到重峦叠嶂与庞大古城相互映衬的中式意境：整体气势磅礴，局部有细节和韵味，而不是建筑填满画面、所有区域同样密集、所有细节同样突出。\n\n体素风格不等于粗糙堆积。请发挥它在形体概括、色块组织和层次表达上的可能性，形成统一而有辨识度的艺术方向。不指定配色、渲染算法、框架或组件库。\n\n场景不能只在一个固定镜头或某个时刻成立。全景、近景及不同时间下都应值得观看。云雾应营造空间和氛围，而不是长期遮住城市主体或掩盖缺乏细节的区域。\n\n界面应简洁，不喧宾夺主，让游览与时间控制容易理解。打开作品即可看到经过设计、能体现群山与巨城气势的初始画面。请合理平衡场景规模、细节和运行流畅度。\n\n【交付】\n\n交付完整、可运行的项目，而不是效果图、视频或设计说明。附简短的启动方法和操作说明。\n\n如进行了实际运行或测试，请如实说明；未验证的部分不要声称已经验证。\n'
    }
  ],
  'papers': [
    {
      'identity': 'claude-opus-5-5(cc)',
      'taskId': 'supernovai',
      'prompt': 'short',
      'round': 'final',
      'dated': '2026-09-22',
      'score': 88.65
    },
    {
      'identity': 'gpt-6-astra(codex)',
      'taskId': 'supernovai',
      'prompt': 'short',
      'round': 'final',
      'dated': '2026-09-18',
      'score': 86.45
    },
    {
      'identity': 'gpt-6-sol(codex)',
      'taskId': 'supernovai',
      'prompt': 'short',
      'round': 'final',
      'dated': '2026-09-23',
      'score': 71.7
    },
    {
      'identity': 'qwen3.8-flash(qoder)',
      'taskId': 'supernovai',
      'prompt': 'short',
      'round': 'final',
      'dated': '2026-09-17',
      'score': 69.7
    },
    {
      'identity': 'gemini-3.8-flash(antigravity)',
      'taskId': 'supernovai',
      'prompt': 'short',
      'round': 'final',
      'dated': '2026-09-20',
      'score': 64.8
    },
    {
      'identity': 'mimo-v2.6-pro(zcode)',
      'taskId': 'supernovai',
      'prompt': 'short',
      'round': 'final',
      'dated': '2026-09-22',
      'score': 64.7
    },
    {
      'identity': 'swe-2(devin)',
      'taskId': 'supernovai',
      'prompt': 'short',
      'round': 'final',
      'dated': '2026-09-18',
      'score': 63.61
    },
    {
      'identity': 'gpt-6-luna(codex)',
      'taskId': 'supernovai',
      'prompt': 'short',
      'round': 'final',
      'dated': '2026-09-24',
      'score': 62
    },
    {
      'identity': 'glm-5.3(zcode)',
      'taskId': 'supernovai',
      'prompt': 'short',
      'round': 'final',
      'dated': '2026-09-22',
      'score': 60.2
    },
    {
      'identity': 'step-5-preview(zcode)',
      'taskId': 'supernovai',
      'prompt': 'short',
      'round': 'final',
      'dated': '2026-09-21',
      'score': 59
    },
    {
      'identity': 'grok-4.7(cursor)',
      'taskId': 'supernovai',
      'prompt': 'short',
      'round': 'final',
      'dated': '2026-09-22',
      'score': 41.75
    },
    {
      'identity': 'dots3-note-prev(zcode)',
      'taskId': 'supernovai',
      'prompt': 'short',
      'round': 'final',
      'dated': '2026-09-18',
      'score': 38.3
    },
    {
      'identity': 'gpt-6-astra(codex)',
      'taskId': 'supernovai',
      'prompt': 'long',
      'round': 'final',
      'dated': '2026-09-20',
      'score': 90.75
    },
    {
      'identity': 'claude-opus-5-5(cc)',
      'taskId': 'supernovai',
      'prompt': 'long',
      'round': 'final',
      'dated': '2026-09-22',
      'score': 85.26
    },
    {
      'identity': 'gpt-6-sol(codex)',
      'taskId': 'supernovai',
      'prompt': 'long',
      'round': 'final',
      'dated': '2026-09-23',
      'score': 73
    },
    {
      'identity': 'gpt-6-luna(codex)',
      'taskId': 'supernovai',
      'prompt': 'long',
      'round': 'final',
      'dated': '2026-09-24',
      'score': 69.85
    },
    {
      'identity': 'gemini-3.8-flash(antigravity)',
      'taskId': 'supernovai',
      'prompt': 'long',
      'round': 'final',
      'dated': '2026-09-20',
      'score': 65.1
    },
    {
      'identity': 'mimo-v2.6-pro(zcode)',
      'taskId': 'supernovai',
      'prompt': 'long',
      'round': 'final',
      'dated': '2026-09-22',
      'score': 64
    },
    {
      'identity': 'swe-2(devin)',
      'taskId': 'supernovai',
      'prompt': 'long',
      'round': 'final',
      'dated': '2026-09-18',
      'score': 63.16
    },
    {
      'identity': 'qwen3.8-flash(qoder)',
      'taskId': 'supernovai',
      'prompt': 'long',
      'round': 'final',
      'dated': '2026-09-17',
      'score': 61.8
    },
    {
      'identity': 'glm-5.3(zcode)',
      'taskId': 'supernovai',
      'prompt': 'long',
      'round': 'final',
      'dated': '2026-09-22',
      'score': 61
    },
    {
      'identity': 'step-5-preview(zcode)',
      'taskId': 'supernovai',
      'prompt': 'long',
      'round': 'final',
      'dated': '2026-09-21',
      'score': 60.15
    },
    {
      'identity': 'dots3-note-prev(zcode)',
      'taskId': 'supernovai',
      'prompt': 'long',
      'round': 'final',
      'dated': '2026-09-18',
      'score': 40.6
    },
    {
      'identity': 'grok-4.7(cursor)',
      'taskId': 'supernovai',
      'prompt': 'long',
      'round': 'final',
      'dated': '2026-09-22',
      'score': 37.5
    },
    {
      'identity': 'claude-opus-5-5(cc)',
      'taskId': 'yunshan',
      'prompt': 'short',
      'round': 'oneshot',
      'dated': '2026-09-22',
      'score': 89.82
    },
    {
      'identity': 'gpt-6-astra(codex)',
      'taskId': 'yunshan',
      'prompt': 'short',
      'round': 'oneshot',
      'dated': '2026-09-17',
      'score': 80.04
    },
    {
      'identity': 'gpt-6-sol(codex)',
      'taskId': 'yunshan',
      'prompt': 'short',
      'round': 'oneshot',
      'dated': '2026-09-23',
      'score': 65.15
    },
    {
      'identity': 'swe-2(devin)',
      'taskId': 'yunshan',
      'prompt': 'short',
      'round': 'oneshot',
      'dated': '2026-09-19',
      'score': 59.98
    },
    {
      'identity': 'mimo-v2.6-pro(zcode)',
      'taskId': 'yunshan',
      'prompt': 'short',
      'round': 'oneshot',
      'dated': '2026-09-22',
      'score': 59.57
    },
    {
      'identity': 'glm-5.3(zcode)',
      'taskId': 'yunshan',
      'prompt': 'short',
      'round': 'oneshot',
      'dated': '2026-09-21',
      'score': 55.97
    },
    {
      'identity': 'gemini-3.8-flash(antigravity)',
      'taskId': 'yunshan',
      'prompt': 'short',
      'round': 'oneshot',
      'dated': '2026-09-20',
      'score': 45.05
    },
    {
      'identity': 'step-5-preview(zcode)',
      'taskId': 'yunshan',
      'prompt': 'short',
      'round': 'oneshot',
      'dated': '2026-09-21',
      'score': 41.69
    },
    {
      'identity': 'qwen3.8-flash(qoder)',
      'taskId': 'yunshan',
      'prompt': 'short',
      'round': 'oneshot',
      'dated': '2026-09-17',
      'score': 35.9
    },
    {
      'identity': 'gpt-6-luna(codex)',
      'taskId': 'yunshan',
      'prompt': 'short',
      'round': 'oneshot',
      'dated': '2026-09-23',
      'score': 35.28
    },
    {
      'identity': 'grok-4.7(cursor)',
      'taskId': 'yunshan',
      'prompt': 'short',
      'round': 'oneshot',
      'dated': '2026-09-22',
      'score': 33.95
    },
    {
      'identity': 'dots3-note-prev(zcode)',
      'taskId': 'yunshan',
      'prompt': 'short',
      'round': 'oneshot',
      'dated': '2026-09-18',
      'score': 0
    },
    {
      'identity': 'claude-opus-5-5(cc)',
      'taskId': 'yunshan',
      'prompt': 'short',
      'round': 'final',
      'dated': '2026-09-22',
      'score': 90.31
    },
    {
      'identity': 'gpt-6-astra(codex)',
      'taskId': 'yunshan',
      'prompt': 'short',
      'round': 'final',
      'dated': '2026-09-19',
      'score': 83
    },
    {
      'identity': 'gpt-6-sol(codex)',
      'taskId': 'yunshan',
      'prompt': 'short',
      'round': 'final',
      'dated': '2026-09-23',
      'score': 68.56
    },
    {
      'identity': 'mimo-v2.6-pro(zcode)',
      'taskId': 'yunshan',
      'prompt': 'short',
      'round': 'final',
      'dated': '2026-09-22',
      'score': 60.49
    },
    {
      'identity': 'swe-2(devin)',
      'taskId': 'yunshan',
      'prompt': 'short',
      'round': 'final',
      'dated': '2026-09-19',
      'score': 60.28
    },
    {
      'identity': 'glm-5.3(zcode)',
      'taskId': 'yunshan',
      'prompt': 'short',
      'round': 'final',
      'dated': '2026-09-22',
      'score': 57.78
    },
    {
      'identity': 'gemini-3.8-flash(antigravity)',
      'taskId': 'yunshan',
      'prompt': 'short',
      'round': 'final',
      'dated': '2026-09-21',
      'score': 46.81
    },
    {
      'identity': 'qwen3.8-flash(qoder)',
      'taskId': 'yunshan',
      'prompt': 'short',
      'round': 'final',
      'dated': '2026-09-17',
      'score': 43.3
    },
    {
      'identity': 'step-5-preview(zcode)',
      'taskId': 'yunshan',
      'prompt': 'short',
      'round': 'final',
      'dated': '2026-09-21',
      'score': 41.69
    },
    {
      'identity': 'gpt-6-luna(codex)',
      'taskId': 'yunshan',
      'prompt': 'short',
      'round': 'final',
      'dated': '2026-09-23',
      'score': 35.17
    },
    {
      'identity': 'grok-4.7(cursor)',
      'taskId': 'yunshan',
      'prompt': 'short',
      'round': 'final',
      'dated': '2026-09-22',
      'score': 34.69
    },
    {
      'identity': 'dots3-note-prev(zcode)',
      'taskId': 'yunshan',
      'prompt': 'short',
      'round': 'final',
      'dated': '2026-09-18',
      'score': 11
    },
    {
      'identity': 'claude-opus-5-5(cc)',
      'taskId': 'yunshan',
      'prompt': 'long',
      'round': 'oneshot',
      'dated': '2026-09-22',
      'score': 91.47
    },
    {
      'identity': 'gpt-6-astra(codex)',
      'taskId': 'yunshan',
      'prompt': 'long',
      'round': 'oneshot',
      'dated': '2026-09-14',
      'score': 85.2
    },
    {
      'identity': 'swe-2(devin)',
      'taskId': 'yunshan',
      'prompt': 'long',
      'round': 'oneshot',
      'dated': '2026-09-19',
      'score': 72.06
    },
    {
      'identity': 'qwen3.8-flash(qoder)',
      'taskId': 'yunshan',
      'prompt': 'long',
      'round': 'oneshot',
      'dated': '2026-09-17',
      'score': 65.25
    },
    {
      'identity': 'gpt-6-sol(codex)',
      'taskId': 'yunshan',
      'prompt': 'long',
      'round': 'oneshot',
      'dated': '2026-09-23',
      'score': 63.64
    },
    {
      'identity': 'step-5-preview(zcode)',
      'taskId': 'yunshan',
      'prompt': 'long',
      'round': 'oneshot',
      'dated': '2026-09-21',
      'score': 58.32
    },
    {
      'identity': 'mimo-v2.6-pro(zcode)',
      'taskId': 'yunshan',
      'prompt': 'long',
      'round': 'oneshot',
      'dated': '2026-09-23',
      'score': 57.65
    },
    {
      'identity': 'gemini-3.8-flash(antigravity)',
      'taskId': 'yunshan',
      'prompt': 'long',
      'round': 'oneshot',
      'dated': '2026-09-21',
      'score': 51.77
    },
    {
      'identity': 'grok-4.7(cursor)',
      'taskId': 'yunshan',
      'prompt': 'long',
      'round': 'oneshot',
      'dated': '2026-09-22',
      'score': 44.48
    },
    {
      'identity': 'glm-5.3(zcode)',
      'taskId': 'yunshan',
      'prompt': 'long',
      'round': 'oneshot',
      'dated': '2026-09-22',
      'score': 42.74
    },
    {
      'identity': 'gpt-6-luna(codex)',
      'taskId': 'yunshan',
      'prompt': 'long',
      'round': 'oneshot',
      'dated': '2026-09-23',
      'score': 38.65
    },
    {
      'identity': 'dots3-note-prev(zcode)',
      'taskId': 'yunshan',
      'prompt': 'long',
      'round': 'oneshot',
      'dated': '2026-09-18',
      'score': 0
    },
    {
      'identity': 'claude-opus-5-5(cc)',
      'taskId': 'yunshan',
      'prompt': 'long',
      'round': 'final',
      'dated': '2026-09-22',
      'score': 91.9
    },
    {
      'identity': 'gpt-6-astra(codex)',
      'taskId': 'yunshan',
      'prompt': 'long',
      'round': 'final',
      'dated': '2026-09-14',
      'score': 86.4
    },
    {
      'identity': 'swe-2(devin)',
      'taskId': 'yunshan',
      'prompt': 'long',
      'round': 'final',
      'dated': '2026-09-19',
      'score': 72.06
    },
    {
      'identity': 'qwen3.8-flash(qoder)',
      'taskId': 'yunshan',
      'prompt': 'long',
      'round': 'final',
      'dated': '2026-09-17',
      'score': 69.27
    },
    {
      'identity': 'gpt-6-sol(codex)',
      'taskId': 'yunshan',
      'prompt': 'long',
      'round': 'final',
      'dated': '2026-09-23',
      'score': 64.04
    },
    {
      'identity': 'mimo-v2.6-pro(zcode)',
      'taskId': 'yunshan',
      'prompt': 'long',
      'round': 'final',
      'dated': '2026-09-23',
      'score': 60.1
    },
    {
      'identity': 'step-5-preview(zcode)',
      'taskId': 'yunshan',
      'prompt': 'long',
      'round': 'final',
      'dated': '2026-09-21',
      'score': 58.32
    },
    {
      'identity': 'gemini-3.8-flash(antigravity)',
      'taskId': 'yunshan',
      'prompt': 'long',
      'round': 'final',
      'dated': '2026-09-21',
      'score': 50.71
    },
    {
      'identity': 'grok-4.7(cursor)',
      'taskId': 'yunshan',
      'prompt': 'long',
      'round': 'final',
      'dated': '2026-09-22',
      'score': 44.68
    },
    {
      'identity': 'glm-5.3(zcode)',
      'taskId': 'yunshan',
      'prompt': 'long',
      'round': 'final',
      'dated': '2026-09-22',
      'score': 44.48
    },
    {
      'identity': 'gpt-6-luna(codex)',
      'taskId': 'yunshan',
      'prompt': 'long',
      'round': 'final',
      'dated': '2026-09-24',
      'score': 40
    },
    {
      'identity': 'dots3-note-prev(zcode)',
      'taskId': 'yunshan',
      'prompt': 'long',
      'round': 'final',
      'dated': '2026-09-18',
      'score': 13.03
    }
  ],
  'gain': {
    'method': 'relative-percent',
    'metric': '基准=SupernovAI短最终+云山短首轮；变化=SupernovAI长最终+云山长首轮',
    'formula': '(变化分-基准分)/基准分×100%',
    'rows': [
      {
        'identity': 'qwen3.8-flash(qoder)',
        'effort': 'xhigh',
        'agent': 'qoder',
        'byTask': {
          'supernovai': {
            'short': 69.7,
            'long': 61.8
          },
          'yunshan': {
            'short': 35.9,
            'long': 65.25
          }
        },
        'baseline': 105.6,
        'improved': 127.05,
        'gain': 20.31,
        'status': 'complete'
      },
      {
        'identity': 'step-5-preview(zcode)',
        'effort': 'high',
        'agent': 'zcode',
        'byTask': {
          'supernovai': {
            'short': 59,
            'long': 60.15
          },
          'yunshan': {
            'short': 41.69,
            'long': 58.32
          }
        },
        'baseline': 100.69,
        'improved': 118.47,
        'gain': 17.66,
        'status': 'complete'
      },
      {
        'identity': 'gpt-6-luna(codex)',
        'effort': 'max',
        'agent': 'codex',
        'byTask': {
          'supernovai': {
            'short': 62,
            'long': 69.85
          },
          'yunshan': {
            'short': 35.28,
            'long': 38.65
          }
        },
        'baseline': 97.28,
        'improved': 108.5,
        'gain': 11.53,
        'status': 'complete'
      },
      {
        'identity': 'swe-2(devin)',
        'effort': 'max',
        'agent': 'devin',
        'byTask': {
          'supernovai': {
            'short': 63.61,
            'long': 63.16
          },
          'yunshan': {
            'short': 59.98,
            'long': 72.06
          }
        },
        'baseline': 123.59,
        'improved': 135.22,
        'gain': 9.41,
        'status': 'complete'
      },
      {
        'identity': 'grok-4.7(cursor)',
        'effort': 'xhigh',
        'agent': 'cursor',
        'byTask': {
          'supernovai': {
            'short': 41.75,
            'long': 37.5
          },
          'yunshan': {
            'short': 33.95,
            'long': 44.48
          }
        },
        'baseline': 75.7,
        'improved': 81.98,
        'gain': 8.3,
        'status': 'complete'
      },
      {
        'identity': 'gemini-3.8-flash(antigravity)',
        'effort': 'high',
        'agent': 'antigravity',
        'byTask': {
          'supernovai': {
            'short': 64.8,
            'long': 65.1
          },
          'yunshan': {
            'short': 45.05,
            'long': 51.77
          }
        },
        'baseline': 109.85,
        'improved': 116.87,
        'gain': 6.39,
        'status': 'complete'
      },
      {
        'identity': 'dots3-note-prev(zcode)',
        'effort': null,
        'agent': 'zcode',
        'byTask': {
          'supernovai': {
            'short': 38.3,
            'long': 40.6
          },
          'yunshan': {
            'short': 0,
            'long': 0
          }
        },
        'baseline': 38.3,
        'improved': 40.6,
        'gain': 6.01,
        'status': 'complete'
      },
      {
        'identity': 'gpt-6-astra(codex)',
        'effort': 'max',
        'agent': 'codex',
        'byTask': {
          'supernovai': {
            'short': 86.45,
            'long': 90.75
          },
          'yunshan': {
            'short': 80.04,
            'long': 85.2
          }
        },
        'baseline': 166.49,
        'improved': 175.95,
        'gain': 5.68,
        'status': 'complete'
      },
      {
        'identity': 'gpt-6-sol(codex)',
        'effort': 'max',
        'agent': 'codex',
        'byTask': {
          'supernovai': {
            'short': 71.7,
            'long': 73
          },
          'yunshan': {
            'short': 65.15,
            'long': 63.64
          }
        },
        'baseline': 136.85,
        'improved': 136.64,
        'gain': -0.15,
        'status': 'complete'
      },
      {
        'identity': 'claude-opus-5-5(cc)',
        'effort': 'max',
        'agent': 'cc',
        'byTask': {
          'supernovai': {
            'short': 88.65,
            'long': 85.26
          },
          'yunshan': {
            'short': 89.82,
            'long': 91.47
          }
        },
        'baseline': 178.47,
        'improved': 176.73,
        'gain': -0.97,
        'status': 'complete'
      },
      {
        'identity': 'mimo-v2.6-pro(zcode)',
        'effort': null,
        'agent': 'zcode',
        'byTask': {
          'supernovai': {
            'short': 64.7,
            'long': 64
          },
          'yunshan': {
            'short': 59.57,
            'long': 57.65
          }
        },
        'baseline': 124.27,
        'improved': 121.65,
        'gain': -2.11,
        'status': 'complete'
      },
      {
        'identity': 'glm-5.3(zcode)',
        'effort': 'max',
        'agent': 'zcode',
        'byTask': {
          'supernovai': {
            'short': 60.2,
            'long': 61
          },
          'yunshan': {
            'short': 55.97,
            'long': 42.74
          }
        },
        'baseline': 116.17,
        'improved': 103.74,
        'gain': -10.7,
        'status': 'complete'
      }
    ]
  }
};
