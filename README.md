# 大模型编码基准整合门户

聚合 **DeepSWE** · **Vibe Code Bench** · **llm2014 code\_v3** 三大编码评测,聚焦跨基准模型对比。

## 在线访问

- <https://781316853.github.io/llm-benchmark/>

## 功能

- **总览矩阵**:同一模型在三个基准中的成绩并排对比;默认仅显示命中≥2 个榜单的模型(可切换显示全部)
- **DeepSWE**:长程软件工程任务 Pass\@1 排行 / 成本-成绩散点
- **Vibe Code Bench**:从零构建 Web 应用 准确率排行 / Pareto 散点(完整 61 系统)
- **llm2014 code\_v3**:项目 × 模型热力图 + 综合分(支持按月份切换)

每页提供「仅跨榜模型 / 显示全部」开关:默认收起仅出现在单一榜单的模型,聚焦跨基准可比性。

## 目录结构

```
index.html              门户入口(5 标签)
css/styles.css          深色科技风样式
js/data.js              数据归一(canonical 命中映射、unified 视图、hitCount)
js/charts.js            ECharts 封装
js/compare.js           跨基准矩阵/雷达/指标卡
js/app.js               标签路由与渲染(含"仅跨榜"过滤)
data/                   三源数据快照(deepswe/vibecode/llm2014/models)
scripts/fetch_all.js    云端抓取三源并重写 data/*.js(GitHub Actions 用)
.github/workflows/refresh.yml  每日定时刷新数据并提交
```

## 每日数据刷新

由 `.github/workflows/refresh.yml` 每天 UTC 01:00(≈北京 09:00)运行 `scripts/fetch_all.js`,抓取三源并重写 `data/*.js` 后提交回仓库。三源:

- **llm2014**:GitHub raw CSV,结构化解析。
- **Vibe Code**:解析 vals.ai 页面内嵌 RSC payload(含 accuracy/latency/stderr/cost/harness);显示名经 slug→名称表映射(新模型出现时近似降级)。
- **DeepSWE**:解析 datacurve.ai 内嵌 run 对象,按"每模型最高 Pass\@1"选榜。

任一源抓取失败则保留旧文件(站点不崩)。
