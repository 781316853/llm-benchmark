// 集中配置:数据源 URL / 传输参数 / 校验阈值
// 所有硬编码常量收口于此,便于维护与调参。
"use strict";
const path = require("path");

const ROOT = process.cwd();
const DATA_DIR = path.join(ROOT, "data");
const SOURCES_DIR = path.join(ROOT, "scripts", "sources");

// 今日日期(UTC,与原脚本一致)
const TODAY = new Date().toISOString().slice(0, 10);

// 本次抓取时间戳(北京时间 UTC+8,精确到分),写入 data/*.js 的 refreshedAt
const REFRESHED_AT = new Date(Date.now() + 8 * 3600 * 1000)
  .toISOString().slice(0, 16).replace("T", " ");

module.exports = {
  ROOT: ROOT,
  DATA_DIR: DATA_DIR,
  SOURCES_DIR: SOURCES_DIR,
  TODAY: TODAY,
  REFRESHED_AT: REFRESHED_AT,

  // ===== 传输层参数 =====
  transport: {
    userAgent: "Mozilla/5.0 (compatible; llm-benchmark-refresh/1.0)",
    timeoutMs: 30000,        // 单次请求超时(与原脚本一致)
    retries: 3,              // 失败重试次数(指数退避)
    concurrency: 5,          // 全局并发上限
    rateLimitMs: 1500        // 同 host 最小请求间隔
  },

  // ===== 编排模式 =====
  // 'host-parallel' 默认:同 host 串行(限流生效),不同 host 并行
  // 'serial' 全串行 / 'parallel' 全并行(忽略 host,仅受 concurrency 限制)
  pipelineMode: "host-parallel",

  // ===== 数据源定义 =====
  // 每源的 URL、host 分组(限流用)、传输参数覆盖
  sources: {
    deepswe_v11: {
      url: "https://deepswe.datacurve.ai/artifacts/v1.1/leaderboard-live.json",
      version: "v1.1", host: "deepswe.datacurve.ai"
    },
    deepswe_v10: {
      url: "https://deepswe.datacurve.ai/artifacts/v1/leaderboard-live.json",
      version: "v1.0", host: "deepswe.datacurve.ai"
    },
    datalearner: {
      url: "https://www.datalearner.com/benchmarks/deepswe",
      host: "www.datalearner.com"
    },
    vibecode: {
      url: "https://www.vals.ai/benchmarks/vibe-code",
      host: "www.vals.ai"
    },
    llm2014: {
      baseCdn: "https://cdn.jsdelivr.net/gh/llm2014/llm_benchmark@main/docs/",
      baseRaw: "https://raw.githubusercontent.com/llm2014/llm_benchmark/main/docs/",
      metaPath: "data/datasets.json",
      host: "cdn.jsdelivr.net"
    },
    arena_webdev: {
      // Code Arena | WebDev(LMArena):前端 Web 开发权威竞技场,Elo 评分。
      // 官方站 https://arena.ai/leaderboard/code 有 Cloudflare 防护,直接抓取返 403;
      // 故以权威镜像 m.aitntnews.com/arena/code/ 为主(其 ld+json 声明:
      //   creator=LM Arena、isBasedOn=https://arena.ai/leaderboard/code,每日快照官方数据)。
      // 解析镜像页 <tr data-name/... data-score/... data-org/...> 行,含 Elo/CI/投票。
      url: "https://m.aitntnews.com/arena/code/",
      officialUrl: "https://arena.ai/leaderboard/code",
      host: "m.aitntnews.com"
    },
    ai_capability: {
      // AI 能力专项测试(atmeplz)四方向榜:静态站,直接抓取渲染用 JSON。
      // 只取前端(FRONTEND)/后端(BACKEND)两个方向的方向分(0-100)。
      url: "https://atmeplz.github.io/ai-test-prompt/data/site.json",
      boardUrl: "https://atmeplz.github.io/ai-test-prompt/board-04.html",
      host: "atmeplz.github.io"
    },
    // ===== 权威基准测试(「权威基准测试」标签页,6 源)=====
    // 仅 Terminal-Bench 4.0 计入总览/综合分/命中数,其余 5 源仅在权威页展示。
    tbench: {
      // Terminal-Bench 4.0(斯坦福/Laude):终端命令行 Agent 评测,66 任务。
      // 服务端渲染 HTML 表格(rank/model+effort/agent/解决率±CI/日期/tokens/成本)。
      url: "https://www.tbench.ai/leaderboard/terminal-bench/4.0",
      version: "4.0", host: "www.tbench.ai"
    },
    tbscience: {
      // Terminal-Bench-Science 0.1:科研工作流 70 任务。
      // 官方/harbor 榜单为客户端渲染(原始 HTML 无数据、无公开 API),以 explainx 博客镜像表为主
      // (Model | Harness | Resolution rate,与官方公告 0.1 数值一致)。
      url: "https://www.explainx.ai/blog/terminal-bench-science-ai-scientific-research-benchmark-august-2026",
      version: "0.1", host: "www.explainx.ai",
      announcementUrl: "https://www.terminal-bench-science.ai/announcement"
    },
    osworld: {
      // OSWorld 2.0(xlang-ai):长时程桌面计算机使用 108 任务。
      // 官方站 os-world-v2.xlang.ai 会跳转论文,以 leaderboard.steel.dev 镜像为主
      // (服务端渲染 HTML 表格:System/Submission|Score|Organization|Reported|Source,按部分得分 partial 排序)。
      url: "https://leaderboard.steel.dev/leaderboards/osworld-2/",
      host: "leaderboard.steel.dev",
      officialUrl: "https://osworld-v2.xlang.ai/"
    },
    lastexam: {
      // Agents' Last Exam(UC Berkeley RDI):真实专业工作流 1500+ 任务。
      // 官方榜单 agents-last-exam.org/leaderboard 为 Next.js 客户端渲染(原始 HTML 无数据),
      // 以 llm-stats 聚合表为主(服务端渲染:#|Model|Score(0-1)|Size|Context|Cost|License)。
      url: "https://llm-stats.com/benchmarks/agents-last-exam",
      host: "llm-stats.com",
      officialUrl: "https://agents-last-exam.org/leaderboard"
    },
    arcagi3: {
      // ARC-AGI-3(ARC Prize):交互式智能体推理,135 环境,RHAE 评分。
      // 官网 arcprize.org/leaderboard 默认表缺 2026-07 后新成绩,以 llm-stats 聚合表为主(0-1→×100)。
      url: "https://llm-stats.com/benchmarks/arc-agi-3",
      host: "llm-stats.com",
      officialUrl: "https://arcprize.org/leaderboard"
    },
    benchcad: {
      // BenchCAD:程序化 CAD 生成基准(17,900 个 CadQuery 程序 / 106 类工业零件 / 47 项工程标准)。
      // 结构化 JSON:leaderboard.json,三任务 vision2code/visionqa/codeqa,主指标 Vision2Code total(0-1)。
      url: "https://raw.githubusercontent.com/BenchCAD/BenchCAD-main/main/leaderboard.json",
      repoUrl: "https://github.com/BenchCAD/BenchCAD-main",
      boardUrl: "https://benchcad.com/",
      host: "raw.githubusercontent.com"
    },
    gpqa: {
      // GPQA Diamond(研究生级科学问答·知识推理,198 题):官方 epoch.ai/benchmarks/gpqa-diamond,
      // 以 llm-stats 聚合表为主(服务端渲染:#|Model|Score(0-1)|Size|Context|Cost|License)。
      url: "https://llm-stats.com/benchmarks/gpqa",
      host: "llm-stats.com",
      officialUrl: "https://epoch.ai/benchmarks/gpqa-diamond"
    },
    hle: {
      // Humanity's Last Exam(前沿知识广度,2500 题):官方 lastexam.ai(CAIS/Scale AI),
      // 以 llm-stats 聚合表为主(服务端渲染:同上表结构)。
      url: "https://llm-stats.com/benchmarks/humanity%27s-last-exam",
      host: "llm-stats.com",
      officialUrl: "https://lastexam.ai/"
    },
    nl2repo: {
      // NL2Repo-Bench(长程仓库生成·编码 Agent,103 任务):官方 multimodal-art-projection/NL2RepoBench,
      // 以 llm-stats 聚合表为主(服务端渲染:同上表结构);benchlm.ai 为补充镜像源
      // (收录 Ornith 系列 / Claude Opus 4.5 / Qwen3.6 Max preview 等 llm-stats 缺失模型);另有
      //   1) 官方论文评测表(arxiv 2512.12730v2 Table 2,基准作者官方 OpenHands 协议,12 条上一代模型);
      //   2) datalearner 详情页(厂商官方发布成绩,如 DeepSeek-V4-Flash 54.2)
      // 两路补充,由 scripts/sources/nl2repo.js 多源合并取最高。
      url: "https://llm-stats.com/benchmarks/nl2repo",
      host: "llm-stats.com",
      officialUrl: "https://github.com/multimodal-art-projection/NL2RepoBench"
    },
    nl2repo_paper: {
      // NL2Repo 官方论文评测表(arxiv HTML 版 Table 2,Overall Pass@1 %)。
      url: "https://arxiv.org/html/2512.12730v2",
      host: "arxiv.org"
    },
    datalearner_nl2repo: {
      // datalearner NL2Repo-Bench 详情页(厂商官方发布成绩;当前与 llm-stats 条目重复,作前向补充)。
      url: "https://www.datalearner.com/benchmarks/nl2repo-bench",
      host: "www.datalearner.com"
    },
    nl2repo_benchlm: {
      // NL2Repo 补充源:benchlm.ai 镜像(SSG 服务端渲染,rank|model(vendor·closed)|score%),同模型分数与 llm-stats 一致。
      url: "https://www.benchlm.ai/benchmarks/nl2repo",
      host: "www.benchlm.ai"
    },
    programbench: {
      // ProgramBench(cleanroom 程序重建·编码 Agent,200 任务):官方 programbench.com 服务端渲染
      // HTML 表格(rank/model(+effort)/agent/Resolved%/Almost%);vals.ai 为补充镜像源
      // (45 模型,含 Raw Pass Rate / Almost / Fully 三指标),由 scripts/sources/programbench.js 双源合并取最高。
      url: "https://programbench.com/",
      host: "programbench.com",
      officialUrl: "https://programbench.com/"
    },
    programbench_vals: {
      // ProgramBench 补充源:vals.ai 官方镜像(2026-09-04 快照,45 模型,客户端渲染,需解析 RSC payload)。
      url: "https://www.vals.ai/benchmarks/programbench",
      host: "www.vals.ai"
    },
    tbench_v3: {
      // Terminal-Bench 3.0(斯坦福/Laude,74 任务):线上 tbench.ai 3.0 路由已并入 4.0,
      // 以 snorkel.ai 全量 12 条 agent×model 榜单为主(服务端渲染 HTML 表格)。
      url: "https://snorkel.ai/leaderboard/terminal-bench-3-0/",
      host: "snorkel.ai",
      version: "3.0"
    },
    tbench_v21: {
      // Terminal-Bench 2.1(斯坦福/Laude,89 任务):主源为 llm-stats 聚合表(0-1 自报分,服务端渲染);
      // 补充源为 datalearner 详情页(内嵌 results JSON,含模式/发布时间/参数量),
      // 由 scripts/sources/tbench_v21.js 双源合并取最高。
      url: "https://llm-stats.com/benchmarks/terminal-bench-2.1",
      host: "llm-stats.com",
      officialUrl: "https://www.tbench.ai/news/terminal-bench-2-1"
    },
    datalearner_tbench40: {
      // datalearner TB 4.0 详情页:作为 tbench.ai 官方榜的补充源,只补缺、不覆盖官方条目。
      url: "https://www.datalearner.com/benchmarks/terminal-bench-4-0",
      host: "www.datalearner.com"
    },
    datalearner_tbench21: {
      // datalearner TB 2.1 详情页:作为 tbench_v21 源的补充(与 llm-stats 合并取最高)。
      url: "https://www.datalearner.com/benchmarks/terminal-bench-2-1",
      host: "www.datalearner.com"
    }
  },

  // ===== 交叉验证阈值 =====
  validation: {
    consistency: {
      // 跨源同模型 score 标准差阈值(百分制)
      okMaxStddev: 5,
      warnMaxStddev: 10,
      // > warnMaxStddev -> alert
      // 不参与跨源一致性比对的源:arena_webdev 为 Elo 分(0–2000 区间),
      // 与其余源的百分制分数不同量纲,混算会产生数百级假标准差告警。
      // 权威基准 11 源(tbench/tbench_v3/tbench_v21/tbscience/osworld/lastexam/arcagi3/benchcad/gpqa/hle/nl2repo/programbench)同样排除:
      //   tbench/tbench_v3/tbench_v21/tbscience 解决率整体偏低(顶级 ~58%/42%/88%自报/30%),与 DeepSWE/Vibe 混算产生假告警;
      //   osworld/lastexam/arcagi3 为代理级/参考展示口径;benchcad 为 0-1 量纲且仅展示;
      //   gpqa/hle 为知识类口径,仅权威页展示;
      //   nl2repo/programbench 虽已计入综合分与命中数(2026-09 起),但独立量纲且整体偏低(0-64 / 0-7),
      //     与主基准混算仍会产生假告警,故保持排除。
      excludedSources: ["arena_webdev", "tbench", "tbench_v3", "tbench_v21", "tbscience", "osworld", "lastexam", "arcagi3", "benchcad", "gpqa", "hle", "nl2repo", "programbench"]
    },
    completeness: {
      // 每条记录必填字段
      requiredFields: ["name", "score"],
      // 源完整率(必填字段齐全的记录占比)低于此值告警
      minFieldRate: 0.8,
      // 源模型数为 0 视为异常
      minModels: 1
    },
    timeliness: {
      // 每日刷新源:数据 updated 与今天的天数差阈值
      warnAgeDays: 3,
      alertAgeDays: 7
    }
  },

  // ===== AI 热点新闻(scripts/lib/news.js 使用,不进基准管线) =====
  // 每日抓取多源 AI 新闻,合并去重后仅保留最近 retentionDays 天,差异写入 data/news.js。
  // 源:TechCrunch AI / The Verge AI / Hacker News Algolia / 极客公园 / InfoQ(均已实测可访问,无需 API Key)。
  // 注:36氪 RSS 对纯 Node 客户端返回反爬挑战页,已弃用;机器之心 RSS 已停更,同样弃用。
  news: {
    retentionDays: 2,        // 保留最近 N 个自然日(含今天;每日更新 2 次)
    maxPerDayPerSource: 12,  // 每源每天最多保留条数
    maxPerType: 5,           // 每个新闻类型最多保留条数
    maxTotal: 60,            // 总量上限(兜底;实际受每类型上限约束)
    outFile: "news.js",
    windowVar: "NEWS",
    // AI 相关性关键词(标题+摘要命中任一即保留;用于过滤 36kr/InfoQ/The Verge 等混合内容源)
    // 纯 ASCII 关键词在匹配时自动加词边界并兼容复数,避免 "ai" 误命中 email/said/available 等
    keywords: [
      "ai", "llm", "gpt", "claude", "gemini", "deepseek", "qwen", "kimi",
      "anthropic", "openai", "chatgpt", "sora", "llama", "mistral", "glm",
      "minimax", "agent", "model", "robot", "具身智能", "人形机器人",
      "人工智能", "大模型", "智谱", "豆包", "算力", "机器学习", "深度学习"
    ],
    // 新闻类型分类(按数组顺序优先匹配,未命中归入 fallbackType)
    // model 类型需同时命中 modelHints(模型特征词),避免把普通产品发布误判为"模型发布"
    types: [
      { id: "policy", label: "政策与安全",
        keywords: "监管|法规|合规|水印|版权|隐私|审查|法案|deepfake|深伪|漏洞|攻击|AI\\s*Act|regulation|regulat|policy|watermark|safety|security|law|legal" },
      { id: "model", label: "模型发布",
        keywords: "发布|推出|上线|首发|亮相|开源|open[-\\s]source|open[-\\s]weight|unveil|debut|launch|releas|introduc|新模型|新版本",
        modelHints: "gpt|claude|gemini|deepseek|qwen|kimi|glm|llama|mistral|minimax|模型|智谱|豆包|通义|书生|manus|sora" },
      { id: "company", label: "公司动态",
        keywords: "融资|领投|收购|投资|离职|上任|并购|IPO|上市|财报|营收|创办|成立|估值|用户|月活|招股|合作|创始|acqui|funding|fundrais|raise|invest|hires|resign|depart|CEO|COO|milestone|billion\\s*users|surges|tender|offer|\\bround\\b|\\bled\\b|\\bleads\\b|partner" },
      { id: "research", label: "技术研究",
        keywords: "研究|论文|数学|推理|基准|突破|进步|能力|智能体|机器人|具身|research|paper|reasoning|math|benchmark|breakthrough|progress|capabilit|agent" }
    ],
    fallbackType: "行业动态",  // 未命中任何类型时的兜底
    typeDisplayOrder: ["模型发布", "公司动态", "技术研究", "政策与安全", "行业动态"], // 前端展示顺序
    // 各源定义:type = rss(RSS 2.0)/ atom(Atom)/ hn(Hacker News Algolia JSON)
    sources: [
      { id: "techcrunch", name: "TechCrunch", type: "rss", host: "techcrunch.com",
        url: "https://techcrunch.com/category/artificial-intelligence/feed/" },
      { id: "verge", name: "The Verge", type: "atom", host: "www.theverge.com",
        url: "https://www.theverge.com/rss/ai-artificial-intelligence/index.xml" },
      { id: "hn", name: "Hacker News", type: "hn", host: "hn.algolia.com",
        url: "https://hn.algolia.com/api/v1/search_by_date?query=AI&tags=story&hitsPerPage=30&numericFilters=points%3E20" },
      { id: "geekpark", name: "极客公园", type: "rss", host: "www.geekpark.net",
        url: "https://www.geekpark.net/rss" },
      { id: "infoq", name: "InfoQ", type: "rss", host: "www.infoq.cn",
        url: "https://www.infoq.cn/feed" }
    ],

    // 英文新闻翻译为中文(免费接口,无需 Key;主源失败自动切换备源,全部失败保留原文)
    // MyMemory:匿名 5000 字符/天,附带 de 邮箱参数可提升至 50000 字符/天;quotaFinished 时停止请求
    translate: {
      enabled: true,
      endpoints: [
        { url: "https://api.mymemory.translated.net/get?langpair=en%7Czh-CN&de=llm-benchmark-refresh%40users.noreply.github.com&q=" }
      ]
    }
  },

  // ===== Coding Plan 套餐快速对比(scripts/lib/codingplan.js 使用,不进基准管线) =====
  // 数据源 codingplan.fyi(V2 静态站)「额度/价格对比」视图的快速对比板块,按模型分列比价:
  //   model-comparison-presets.json 固定精选模型分组(单模型列 + 甜品级/SOTA 多模型列);
  //   plans.json(套餐:月价/币种/billingMode)+ plan-models.json(套餐×模型:综合单价 unitPriceCnyPerM、
  //   实测月用量 monthlyTokenInM、timeTier 谷/峰)+ models.json(slug→显示名)+ platforms.json(平台名);
  //   config.json 提供美元汇率 usdToCnyRate。
  // 仿 news 模式:在 fetch_all.js 旁路调用,不进 registry/校验器,仅「套餐对比」页展示。
  codingplan: {
    host: "www.codingplan.fyi",
    officialUrl: "https://www.codingplan.fyi/?view=usage",
    configUrl: "https://www.codingplan.fyi/config.json",
    plansUrl: "https://www.codingplan.fyi/plans.json",
    platformsUrl: "https://www.codingplan.fyi/platforms.json",
    modelsUrl: "https://www.codingplan.fyi/models.json",
    planModelsUrl: "https://www.codingplan.fyi/plan-models.json",
    presetsUrl: "https://www.codingplan.fyi/model-comparison-presets.json",
    outFile: "codingplan.js",
    windowVar: "CODINGPLAN"
  }
};
