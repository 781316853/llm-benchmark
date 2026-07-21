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
    swebench: {
      url: "https://www.swebench.com/",
      host: "www.swebench.com"
    },
    aider: {
      url: "https://aider.chat/docs/leaderboards/",
      host: "aider.chat"
    },
    livecode: {
      // BigCodeBench leaderboard API(分页 JSON REST)
      url: "https://bigcode-bench.github.io/results.json",
      host: "bigcode-bench.github.io"
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
  }
};
