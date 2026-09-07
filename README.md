# 大模型编码基准整合门户

聚合 **DeepSWE** · **Vibe Code Bench** · **llm2014 Agentic**(原 code_v3) · **Code Arena · WebDev** 四大编码评测、**AI 能力专项测试**(前端/后端方向分)与 **Terminal-Bench 4.0**,并设「权威基准测试」页收纳 **Terminal-Bench-Science 0.1 / OSWorld 2.0 / Agents' Last Exam / ARC-AGI-3 / BenchCAD** 等权威基准,聚焦跨基准模型对比。

## 在线访问

- <https://781316853.github.io/llm-benchmark/>

## 功能

- **总览矩阵**:同一模型在多项基准中的成绩并排对比(含 AI 能力前端/后端方向分,合并单列、前后端并列展示);默认仅显示命中≥3 个榜单的模型(可切换显示全部)
- **DeepSWE**:长程软件工程任务 Pass\@1 排行 / 成本-成绩散点
- **Vibe Code Bench**:从零构建 Web 应用 准确率排行 / Pareto 散点(完整 61 系统)
- **llm2014 Agentic**:综合分(支持按月份切换);页面脚注引入源站官方「档位说明」与「项目说明」
- **AI 能力专项测试**(atmeplz 四方向榜):门户收录「前端处理能力」与「后端处理能力」两个编码方向的方向分(0-100);前端/后端各占综合分权重 10%(合计 20%),并在总览交叉矩阵以单列并列展示;总览页另设 AI 能力卡片,可经卡片「原站 ↗」与页脚链接跳转源站
- **Terminal-Bench 4.0**(斯坦福/Laude):终端命令行 Agent 评测解决率;计入综合分(权重 10%)与命中数,总览矩阵设单列展示(取各模型最优 Agent 成绩)
- **权威基准测试**(新标签页,6 源展示型参考):Terminal-Bench 4.0(计入总览)、Terminal-Bench-Science 0.1(科研工作流)、OSWorld 2.0(长时程桌面计算机使用)、Agents' Last Exam(真实专业工作流)、ARC-AGI-3(交互式智能体推理 RHAE)、BenchCAD(程序化 CAD 生成);除 TB 4.0 外均不计入综合分与命中数

每页提供「仅跨榜模型 / 显示全部」开关:默认收起仅出现在单一榜单的模型(总览页为命中不足 3 个榜单),聚焦跨基准可比性。

## 目录结构

```
index.html              门户入口(7 标签:总览/DeepSWE/Vibe/llm2014/AI能力/权威基准测试)
css/styles.css          深色科技风样式
js/data.js              数据归一(canonical 命中映射、unified 视图、hitCount)
js/charts.js            ECharts 封装
js/compare.js           跨基准矩阵/雷达/指标卡
js/app.js               标签路由与渲染(含"仅跨榜"过滤)
data/                   多源数据快照(deepswe/vibecode/llm2014/arena_webdev/models/aicap/
                         tbench/tbscience/osworld/lastexam/arcagi3/benchcad)
scripts/fetch_all.js    云端抓取多源并重写 data/*.js(GitHub Actions 用)
.github/workflows/refresh.yml  每日定时刷新数据并提交
```

## 每日数据刷新

由 `.github/workflows/refresh.yml` 每天 UTC 01:00/13:00(≈北京 09:00/21:00)运行 `scripts/fetch_all.js`,抓取多源并重写 `data/*.js` 后提交回仓库。主要源:

- **llm2014**:GitHub raw CSV,结构化解析;源站已将该类别显示为 Agentic,项目名保留表头字母代号,并同步抓取 i18n.js 中的官方档位/项目说明文案。
- **Vibe Code**:解析 vals.ai 页面内嵌 RSC payload(含 accuracy/latency/stderr/cost/harness);显示名经 slug→名称表映射(新模型出现时近似降级)。
- **DeepSWE**:解析 datacurve.ai 内嵌 run 对象,按"每模型最高 Pass\@1"选榜。
- **Code Arena · WebDev**:抓取权威镜像 m.aitntnews.com/arena/code/(官方 arena.ai 有 Cloudflare 防护,其 ld+json 声明 creator=LM Arena、isBasedOn=arena.ai/leaderboard/code),解析 `<tr>` 行的 Elo/CI/投票。
- **AI 能力专项测试**:抓取 atmeplz 静态站渲染用 JSON(`data/site.json`),提取「前端处理能力」与「后端处理能力」两个方向的方向分(0-100),写入 `data/aicap.js`;计入综合分(前端/后端各 10%)并进入总览矩阵(单列并列展示),总览另设 AI 能力卡片。
- **Terminal-Bench 4.0**:解析 tbench.ai 服务端渲染 HTML 表格(agent×model 组合条目,66 任务);计入综合分(权重 10%)与命中数。
- **权威基准测试(展示型)**:Terminal-Bench-Science 0.1(harbor 榜单 HTML)、OSWorld 2.0(steel.dev 镜像,部分得分)、Agents' Last Exam(官方榜单 HTML,Pass Rate)、ARC-AGI-3(llm-stats 聚合表,RHAE)、BenchCAD(GitHub leaderboard.json,主指标 Vision2Code total);均仅展示,不计入综合分。

任一源抓取失败则保留旧文件(站点不崩)。
