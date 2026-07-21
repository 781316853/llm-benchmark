// 云端抓取多源数据,重写 data/*.js + 生成 data/quality.js(GitHub Actions 每日刷新用)
// 架构(详见 .trae/documents/数据抓取优化与交叉验证体系建设.md):
//   scripts/lib/        传输层 / 基类 / 注册表 / 标准化 / 校验 / 质量报告 / 编排器
//   scripts/sources/    各数据源(自注册):deepswe / vibecode / llm2014 / aaci /
//                        datalearner(补充源)+ swebench / aider / livecode(新增)
// 传输:p-limit 全局并发 + p-retry 指数退避 + per-host 限流
// 校验:一致性(跨源分数标准差)/ 完整性(必填字段)/ 时效性(数据新鲜度)
// 运行:node scripts/fetch_all.js  (在仓库根目录)
//   首次需 npm install(安装 p-limit + p-retry);CI 已配置 npm ci。
"use strict";
const fs = require("fs");
const CONFIG = require("./lib/config");
const pipeline = require("./lib/pipeline");
const seen = require("./lib/seen");

(async () => {
  if (!fs.existsSync(CONFIG.DATA_DIR)) fs.mkdirSync(CONFIG.DATA_DIR, { recursive: true });
  // 1) 多源抓取(并发/串行由 CONFIG.pipelineMode 控制)+ 标准化 + 写入 + 质量报告
  await pipeline.runPipeline({ mode: CONFIG.pipelineMode });
  // 2) 维护首次上榜记录(读取最新写入的 data/*.js)
  try { seen.updateSeen(); }
  catch (e) { console.log("[seen] 维护失败:" + e.message); }
  console.log("完成 @ " + CONFIG.TODAY);
})();
