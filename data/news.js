// AI 热点新闻快照(由 scripts/lib/news.js 每日抓取维护,每日 4 次)
// 来源:「橘鸦AI早报」官方 RSS https://daily.juya.uk/rss.xml(每日整篇早报拆成逐条);仅保留最近 2 天
// 字段说明:date=新闻日期(UTC);title=标题;brief=简要;url=详情链接;source=来源;type=新闻类型(早报正文分类)
window.NEWS = {
  'updated': '2026-11-28',
  'retentionDays': 2,
  'types': [
    '要闻',
    '开发生态',
    '模型发布',
    '前瞻与传闻',
    '行业动态'
  ],
  'items': [
    {
      'date': '2026-11-28',
      'title': 'pi 提交新 PR 拟接入 Google AI Ultra 订阅',
      'brief': '开源编程 agent pi 的仓库成员 davidbrai 提交了 PR #12614 （Google AI plan），拟让 Google AI Ultra 订阅用户在终端通过 Google Interactions API 的按用户额度端点（ :createPerUserQuota ）调用模型，走独立每日额度而非按 token 计费。',
      'url': 'https://github.com/earendil-works/pi/pull/12614/files',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-11-28',
      'title': '豆包工作独家接入剪映官方插件',
      'brief': '豆包官方宣布， 豆包工作 独家接入 剪映 官方插件，用户把视频素材交给 豆包工作 ，一句话描述需求即可调用 剪映 完成剪辑，之后可以边看边提修改要求，也能打开多轨草稿自行细调。用户还可一句话调用 剪映 Hub ，将文稿、商品图等转化为科普动画、知识短视频、短漫剧或营销短片。',
      'url': 'https://mp.weixin.qq.com/s/gwpuHRMWvJyYcYf_EfBqzQ',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-11-28',
      'title': '知乎宣布与 DeepSeek 展开内容合作，提供内容检索',
      'brief': '知乎 宣布与 DeepSeek 展开内容合作。',
      'url': 'https://mp.weixin.qq.com/s/eMnIqTFFM3ml9WNlyCpQNw',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-11-28',
      'title': '腾讯混元发布 3D 大模型 Hy3D 3.6',
      'brief': '腾讯混元 发布新一代 3D 大模型 Hy3D 3.6 ，面向专业 3D 创作，重点优化高模和 PBR 材质贴图的生成能力，生成的几何表面整洁、结构清晰。',
      'url': 'https://mp.weixin.qq.com/s/idKcOSLWE_wd5cBloQsR_Q',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-11-28',
      'title': 'Qoder 上线 Developer Pass：开源贡献者免费享 1 个月 Ultra',
      'brief': 'Qoder 正式推出 Developer Pass ，开源维护者和活跃贡献者可申请。',
      'url': 'https://qoder.com/zh/open-source-activity',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-11-28',
      'title': 'Qoder 科研支持计划第一期开放申请：通过可获 2 万顶级模型积分',
      'brief': 'Qoder 科研支持计划第一期现已开放申请，面向全球在读硕士生、博士生、博士后，以及高校教职与科研机构研究人员。审核通过后可获 2 万 Qoder 顶级模型积分 ，定向发放至申请人的 qoder.com 个人账号，可用于数据分析、代码复现、科研工具开发等研究工作。',
      'url': 'https://alidocs.dingtalk.com/notable/share/form/v01maOgB4wyEm37KqWN_wqiGk2F_MeCQLdV?sessionid=&amp;source=link',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-11-28',
      'title': '月之暗面开放 Kimi for Science：入选最高 2 万美元 API 额度',
      'brief': '月之暗面 开放 Kimi for Science 科研支持计划申请，面向全球自然科学、工程学及相关交叉学科的科研人员，博士研究生、博士后、PI 等各职业阶段均可报名。入选者最高可获得 2 万美元 的 Kimi API 免费额度，约合 70 亿 token ，具体数额按研究需求和评审结果确定；额度按研究项目提供，可与合作者共享。',
      'url': 'https://www.kimi.com/news/kimi-for-science-program',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-11-28',
      'title': '阶跃星辰 Frontier AI4S：免费赠送 3 个月 Step Plan Pro',
      'brief': '阶跃星辰 公开重申 Frontier AI4S 计划，表示此前已持续发放免费 token 订阅，后续还将推出更大规模的 AI4S 应用。',
      'url': 'https://x.com/sheriyuo/status/2126213271204352442',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-11-28',
      'title': 'Antigravity 更新 Auto 模式不必要审批再减 15%',
      'brief': 'Antigravity 负责人 Varun Mohan 宣布新版 Antigravity 发布，称 Auto 模式中不必要的审批进一步减少了 15% ，并为开发者新增原生 GitHub 集成。他在回复用户时透露，应用内原生 browser use 已推出几周， computer use 则即将推出。',
      'url': 'https://x.com/_mohansolo/status/2126383370091556884',
      'source': '橘鸦AI早报',
      'type': '开发生态'
    },
    {
      'date': '2026-11-28',
      'title': 'Qwen 团队辟谣：后训练负责人离职文章纯属造谣，将起诉',
      'brief': '自媒体“ Top华人科创社 ”此前发布文章《Qwen 后训练负责人周浩离职》，称 Qwen 大模型团队后训练负责人 周浩 已经离职。对此， Qwen 团队在微信公众号发文辟谣，称文章纯属造谣，不仅杜撰事实，连当事人名字都是错的，其真实姓名为 周昊 。 Qwen 团队表示，将起诉追究该自媒体的法律责任。',
      'url': 'https://mp.weixin.qq.com/s/H0FrNzf4ac-R6xVoRW3ZbA',
      'source': '橘鸦AI早报',
      'type': '行业动态'
    },
    {
      'date': '2026-11-27',
      'title': 'Antigravity 为所有用户重置 Gemini 额度',
      'brief': 'Antigravity 开发者 Varun Mohan 于北京时间 11 月 26 日 15:19 发文表示，为庆祝感恩节，Antigravity 面向所有用户重置了 Gemini 额度。',
      'url': 'https://x.com/_mohansolo/status/2125851902009311306',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-11-27',
      'title': 'OpenAI 修复 GPT-6.2 计费错误，补偿已上线',
      'brief': 'OpenAI 员工 Tibo 发文称， GPT-6.2 上线时出现计费错误，导致多数用户使用 GPT-6.2 Astra 和 Sol 时的额度消耗被错误折减，这一问题现已修复。',
      'url': 'https://x.com/thsottiaux/status/2125784147889393806',
      'source': '橘鸦AI早报',
      'type': '要闻'
    },
    {
      'date': '2026-11-27',
      'title': '腾讯混元开源草稿模型 DFly2',
      'brief': '腾讯混元团队 开源了用于加速大模型生成的草稿模型 DFly2 ，同步公开权重、训练代码和技术报告，并推出适配 Hy4 flash 、 DeepSeek-V4.1-Flash 及 GLM-5.3-Flash 的 MoE 草稿模型。',
      'url': 'https://mp.weixin.qq.com/s/d1HMHrSEChCJiBRZ0tNOyg',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-11-27',
      'title': '蚂蚁百灵开源 Ming-Image-0.2-Design，并预告图层分解版',
      'brief': '蚂蚁集团 百灵团队开源图像生成模型 Ming-Image-0.2-Design ，权重以 MIT 协议托管于 ModelScope 等平台。该模型强化了复杂构图、光影与文字渲染表现，可用于电商主图、UI 设计稿与空间效果图，并在 Artificial Analysis 的 AA-Image-T2I v2.1 评测中以 1095 Elo 位列开放权重模型第一。',
      'url': 'https://modelscope.cn/models/inclusionAI/Ming-Image-0.2-Design',
      'source': '橘鸦AI早报',
      'type': '模型发布'
    },
    {
      'date': '2026-11-27',
      'title': 'Antigravity banked resets 开发中，被曝现身 CLI',
      'brief': '有用户发现， Antigravity CLI 从 v1.5.17 升级至 v1.5.18 后，已出现 banked resets 功能，包含到期时间和领取所需的使用量门槛。该发现来自 zAI 制作的 Antigravity CLI 更新追踪截图，其中显示当用户的使用量超过规定门槛后，即可领取带有到期时间的储存重置额度。',
      'url': 'https://x.com/_mohansolo/status/2124962746844565692',
      'source': '橘鸦AI早报',
      'type': '前瞻与传闻'
    },
    {
      'date': '2026-11-27',
      'title': '报道称智谱 GLM-5.5 进度受阻，智谱否认',
      'brief': '据路透社援引知情人士报道， 智谱 原计划本月发布约 3 万亿参数 的下一代旗舰模型 GLM-5.5 ，但部分受 OpenAI 与 Anthropic 反蒸馏措施以及美国新算力限制影响，开发进度受阻，原定年底前完成的训练和发布或推迟至 2027 年第一季度 及以后。',
      'url': 'https://www.reuters.com/world/china/us-chip-curbs-distillation-crackdown-threaten-chinese-ai-model-development-2026-11-26/',
      'source': '橘鸦AI早报',
      'type': '前瞻与传闻'
    },
    {
      'date': '2026-11-27',
      'title': '据报道，NVIDIA要求Dell等伙伴暂停向东南亚四国发运服务器',
      'brief': '美国商务部 AI 芯片出口新规已于 11 月 19 日 生效：向印尼、马来西亚、新加坡、泰国和巴西出口先进 AI 芯片 须申请许可，海外 数据中心 向中国等地企业远程提供大量算力也须报批，存量 数据中心 须在 90 天 内取得许可。',
      'url': 'https://www.wsj.com/tech/nvidia-tells-partners-to-pause-shipments-to-southeast-asia-5b791cb0',
      'source': '橘鸦AI早报',
      'type': '前瞻与传闻'
    }
  ]
};
