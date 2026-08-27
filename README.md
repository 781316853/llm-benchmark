# 大模型编码基准整合门户

聚合 **DeepSWE** · **Vibe Code Bench** · **llm2014 Agentic**(原 code_v3) · **Code Arena · WebDev** 四大编码评测,聚焦跨基准模型对比;另收录 **Artificial Analysis Intelligence Index** 通用智能指数作独立参考榜单。

## 在线访问

- <https://781316853.github.io/llm-benchmark/>

## 功能

- **总览矩阵**:同一模型在五个基准中的成绩并排对比;默认仅显示命中≥2 个榜单的模型(可切换显示全部)
- **DeepSWE**:长程软件工程任务 Pass\@1 排行 / 成本-成绩散点
- **Vibe Code Bench**:从零构建 Web 应用 准确率排行 / Pareto 散点(完整 61 系统)
- **llm2014 Agentic**:综合分(支持按月份切换);页面脚注引入源站官方「档位说明」与「项目说明」
- **Artificial Analysis Intelligence Index**:通用智能指数独立榜单(含知识/推理/数学等评测,非编码专项),不计入综合分;覆盖页面默认入选的约 30 个主流模型,同一模型不同推理强度变体分别计分

每页提供「仅跨榜模型 / 显示全部」开关:默认收起仅出现在单一榜单的模型,聚焦跨基准可比性。

## 目录结构

```
index.html              门户入口(5 标签)
css/styles.css          深色科技风样式
js/data.js              数据归一(canonical 命中映射、unified 视图、hitCount)
js/charts.js            ECharts 封装
js/compare.js           跨基准矩阵/雷达/指标卡
js/app.js               标签路由与渲染(含"仅跨榜"过滤)
data/                   多源数据快照(deepswe/vibecode/llm2014/arena_webdev/models)
scripts/fetch_all.js    云端抓取多源并重写 data/*.js(GitHub Actions 用)
.github/workflows/refresh.yml  每日定时刷新数据并提交
```

## 每日数据刷新

由 `.github/workflows/refresh.yml` 每天 UTC 01:00(≈北京 09:00)运行 `scripts/fetch_all.js`,抓取多源并重写 `data/*.js` 后提交回仓库。主要源:

- **llm2014**:GitHub raw CSV,结构化解析;源站已将该类别显示为 Agentic,项目名保留表头字母代号,并同步抓取 i18n.js 中的官方档位/项目说明文案。
- **Vibe Code**:解析 vals.ai 页面内嵌 RSC payload(含 accuracy/latency/stderr/cost/harness);显示名经 slug→名称表映射(新模型出现时近似降级)。
- **DeepSWE**:解析 datacurve.ai 内嵌 run 对象,按"每模型最高 Pass\@1"选榜。
- **Code Arena · WebDev**:抓取权威镜像 m.aitntnews.com/arena/code/(官方 arena.ai 有 Cloudflare 防护,其 ld+json 声明 creator=LM Arena、isBasedOn=arena.ai/leaderboard/code),解析 `<tr>` 行的 Elo/CI/投票。
- **Artificial Analysis Intelligence Index**:免 Key 抓取 artificialanalysis.ai 评测页(官方 API 需 Key),解析服务端渲染的 ld+json Dataset 块与内嵌 RSC `initialModels` 模型对象(含厂商)后按 slug 合并;静态页仅内嵌约 20-30 个主流模型(全量 ~175 模型为客户端加载,不在抓取范围)。

任一源抓取失败则保留旧文件(站点不崩)。
