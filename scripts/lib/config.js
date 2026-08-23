// 集中配置:数据源 URL / 传输参数 / 校验阈值
// 所有硬编码常量收口于此,便于维护与调参。
"use strict";
const path = require("path");

const ROOT = process.cwd();
const DATA_DIR = path.join(ROOT, "data");
const SOURCES_DIR = path.join(ROOT, "scripts", "sources");

// 今日日期(UTC,与原脚本一致)
const TODAY = new Date().toISOString().slice(0, 10);

module.exports = {
  ROOT: ROOT,
  DATA_DIR: DATA_DIR,
  SOURCES_DIR: SOURCES_DIR,
  TODAY: TODAY,

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
    aaci: {
      url: "https://aitoolsreview.co.uk/benchmarks",
      host: "aitoolsreview.co.uk"
    },
    aa_official: {
      // AA 官方 Coding Agent Index:数据内嵌在 /agents/coding-agents 页的
      // <script type="application/ld+json"> 块(schema.org Dataset 格式),
      // 含三个维度:codingAgentsIndex / codingAgentsMeanAgentWallTimeSec / codingAgentsMeanCostUsd
      url: "https://artificialanalysis.ai/agents/coding-agents",
      host: "artificialanalysis.ai"
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
    }
  },

  // ===== 交叉验证阈值 =====
  validation: {
    consistency: {
      // 跨源同模型 score 标准差阈值(百分制)
      okMaxStddev: 5,
      warnMaxStddev: 10
      // > warnMaxStddev -> alert
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
  }
};
