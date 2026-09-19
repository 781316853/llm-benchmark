# 大模型编码基准整合门户

聚合 **DeepSWE** · **llm2014 Agentic**(原 code_v3) · **Code Arena · WebDev** 三大编码评测、**AI 能力专项测试**(前端/后端方向分)、**Terminal-Bench(4.0/3.0/2.1)** 与 **ModelDial 雷达**,并设「权威基准测试」页收纳 **DeepSWE / Terminal-Bench-Science 0.1 / OSWorld 2.0 / Agents' Last Exam / ARC-AGI-3 / BenchCAD / GPQA Diamond / HLE / NL2Repo-Bench** 等权威基准,聚焦跨基准模型对比。榜单数据统一按**渠道优先级**合并:基准官方实测榜 > 厂商官方发布(论文/发布页)> 第三方聚合与镜像,低层级仅补缺失模型与字段、不覆盖高层级分数。

## 在线访问

- <https://781316853.github.io/llm-benchmark/>

## 功能

- **总览矩阵**:同一模型在多项基准中的成绩并排对比(含 AI 能力前端/后端方向分,合并单列、前后端并列展示;以及 Terminal-Bench 4.0/3.0/2.1 合并单列);两级表头分「榜单基准」(DeepSWE / Terminal-Bench,基准官方实测榜口径)与「实测与竞技场」(ModelDial 第三方独立实测 / Code Arena · WebDev 社区盲测 Elo / llm2014 私有题库 / AI 能力专项测试)两组;**仅命中≥4 个榜单的模型参与排名并编号**,命中 3 个及以下的模型不计算综合分、不显示排名序号(序号与梯队列均为「—」),仅展示各榜数据——其中命中 2-3 榜的「参考」模型按各榜成绩与排名模型比对,插入到排名行之间的合理位置(仅前30区间内显示);勾选「显示全部」则展开**全部在任一基准组有成绩的模型**——命中=1 的「单榜」不计算综合分、不参与排名(梯队列与序号列均显示「—」),统一排在末尾并标注「仅单榜」,保证"榜上有数据、总览也能看到"
- **DeepSWE**:长程软件工程任务 Pass\@1 排行 / 成本-成绩散点
- **llm2014 Agentic**:综合分(支持按月份切换);页面脚注引入源站官方「档位说明」与「项目说明」
- **AI 能力专项测试**(atmeplz 四方向榜):门户收录「前端处理能力」与「后端处理能力」两个编码方向的方向分(0-100);前端/后端各占综合分权重 12%(合计 24%),并在总览交叉矩阵以单列并列展示;总览页另设 AI 能力卡片,可经卡片「原站 ↗」与页脚链接跳转源站
- **Terminal-Bench(4.0/3.0/2.1)**(斯坦福/Laude):终端命令行 Agent 评测成绩;多版本**合并为一个基准组**计入综合分(权重 12%)与命中数,总览矩阵设单列展示——**优先以最高版本为代表**(4.0>3.0>2.1,版本内取各模型最优成绩),单元数字旁附版本标签(v4.0/v3.0/v2.1);由于各版本难度不同(版本越高越难、原始分越低),计入综合分时按**各版本内 min-max 归一化到 0-100** 的口径(以该模型代表版本的归一化分),使各版本最优模型都接近 100、跨版本可比,列表展示的仍是该代表版本的原始分;口径:4.0/3.0 为官方 agent×model 解决率(4.0 每日抓取 tbench.ai、3.0 每日抓取 snorkel.ai 全量 12 条),2.1 为 datalearner 厂商官方发布成绩(主源)+ llm-stats 归一化自报分(补充)按渠道层级合并
- **NL2Repo-Bench**(长程仓库生成,自 2026-09-19 起**仅展示**):给定单一 NL 需求文档从零生成可安装 Python 库(103 任务),test-pass-rate(%);主源官方论文评测表(arxiv)与 datalearner 厂商官方发布 + 补充源 llm-stats 聚合表与 benchlm.ai 镜像**按渠道优先级合并**。原为第 7 个计分组(权重 9%),2026-09-19 已从综合分与命中数移出、并移出总览矩阵,改为仅在「权威基准测试」页展示
- **ModelDial 雷达**(新标签页,第三方独立实测):modeldial.com 的编码智能体能力榜,分后端与测试、前端与交互、知识与推理三类能力分别评测,综合分按**后端 40% + 前端 30% + 知识 30%** 加权(三分项均 0-100);同一模型按**推理强度**分档多次测试,主榜取该模型**最高分配置**入榜(23 个模型 / 52 条 config)。门户以官方 JSON feed 单请求抓取,计入综合分(**权重 12%**)与命中数(命中分母 6);页面含成本×综合分散点与可展开的 52 条 config 明细。⚠️ 费用与耗时取自源站**后端单轴**口径,低于源站主榜显示的三轴汇总值(源站紧凑 feed 无费用完整度字段,故不做「≥ / 部分费用」标记)
- **权威基准测试**(新标签页,11 大权威基准):DeepSWE(长程软件工程,同时保留独立标签页)、Terminal-Bench(4.0/3.0/2.1,单章节内切换版本查看、默认 4.0,三版合并计入总览)、Terminal-Bench-Science 0.1(科研工作流)、OSWorld 2.0(长时程桌面计算机使用)、Agents' Last Exam(真实专业工作流)、ARC-AGI-3(交互式智能体推理 RHAE)、BenchCAD(程序化 CAD 生成)、GPQA Diamond(研究生级科学问答)、HLE(前沿知识广度)、NL2Repo-Bench(长程仓库生成);除 DeepSWE / Terminal-Bench 三版合并外均不计入综合分与命中数(NL2Repo-Bench 自 2026-09-19 起由「计入」改为仅展示);各表模型名后按渠道挂「官方榜 / 厂商发布 / 第三方」来源徽标(仅多渠道表逐行标注)
- **套餐对比**(新标签页,展示型参考):接入 codingplan.fyi「额度/价格对比」视图的**快速对比**板块——按固定精选模型分列(DeepSeek V4 Flash 0731 / DeepSeek V4.1 Flash / GLM 5.3 Flash / GPT 5.6 Luna + 甜品级、SOTA 两组多模型对比),每列按综合单价升序比价各平台套餐(折算月价 / 综合单价 ¥/亿 / 实测月用量,含 谷/峰 档位),支持「仅显示精选平台 / 显示所有平台」切换;已去除源站推广跳转链接,完整套餐筛选请前往源站

每页提供「仅跨榜模型 / 显示全部」开关:默认收起仅出现在单一榜单的模型(总览页为命中不足 3 个榜单),聚焦跨基准可比性。

### 模型名归一(canonical)约定

各源对同一模型的命名写法差异很大(空格/连字符/大小写/effort 注解/日期构建号),`js/data.js` 用**多候选键**归一,任一命中别名索引即视为同一模型:

1. `norm(raw)`——小写 + 非字母数字折叠为连字符(原样);
2. `stripParen` 去括号注解——日期/构建号(如 `(0731)`、`(2026-03-05)`)保留,其余(`(max)`/`(xhigh)`/`(codex-harness)`)剥离;
3. `stripTailEffort` 剥离**结尾**的 effort 标记(`high`/`max`/`xhigh`/`medium`/`thinking` 等),仅在尾部且前方有分隔符时生效;
4. 上述组合(去括号后再去尾部 effort)。

⚠️ **不要用全局子串替换剥离 effort**:早期实现 `/(high|max|medium|xhigh|low|think)/gi` 会把属于模型名的 `Max` 一起吃掉(`Qwen3.8-Max-0902` → 只识别成 `Qwen3.8-0902`),并把 `minimax-m3-thinking` 削成 `minimax-m3-ing`,导致同一模型在矩阵里被拆成两条、NL2Repo 的成绩落不到正确模型上。新增数据源时若发现某模型出现「—」而榜单上明明有分,优先检查该源模型名的写法是否被 `stripTailEffort` 正确归一。

## 目录结构

```
index.html              门户入口(7 标签:总览/DeepSWE/llm2014/AI能力/ModelDial/权威基准测试/套餐对比)
css/styles.css          深色科技风样式
js/data.js              数据归一(canonical 命中映射、unified 视图、hitCount)
js/charts.js            ECharts 封装
js/compare.js           跨基准矩阵/雷达/指标卡
js/app.js               标签路由与渲染(含"仅跨榜"过滤)
data/                   多源数据快照(deepswe/deepswe_v10/llm2014/arena_webdev/models/aicap/
                         tbench/tbench_v3/tbench_v2(实时双源)/tbscience/osworld/lastexam/arcagi3/benchcad/
                         gpqa/hle/nl2repo/modeldial/news/codingplan)
scripts/fetch_all.js    云端抓取多源并重写 data/*.js(GitHub Actions 用)
.github/workflows/refresh.yml  每日定时刷新数据并提交
```

## 每日数据刷新

由 `.github/workflows/refresh.yml` 每天 UTC 01:00/13:00(≈北京 09:00/21:00)运行 `scripts/fetch_all.js`,抓取多源并重写 `data/*.js` 后提交回仓库。**渠道优先级**:各基准数据统一按「基准官方实测榜 > 厂商官方发布(论文/发布页)> 第三方聚合与镜像」合并(`scripts/lib/mergeByTier.js` + `config.srcTiers`),高层级分数不被低层级覆盖,低层级仅补缺失模型与回填字段;每条记录带 `src` 渠道标签。主要源:

- **llm2014**:GitHub raw CSV,结构化解析;源站已将该类别显示为 Agentic,项目名保留表头字母代号,并同步抓取 i18n.js 中的官方档位/项目说明文案。
- **DeepSWE**:解析 datacurve.ai 内嵌 run 对象(官方实测榜 T1),按"每模型最高 Pass\@1"选榜;datalearner 详情页(厂商官方发布 T2)只补缺、不覆盖官方条目。
- **Code Arena · WebDev**:抓取权威镜像 m.aitntnews.com/arena/code/(官方 arena.ai 有 Cloudflare 防护,其 ld+json 声明 creator=LM Arena、isBasedOn=arena.ai/leaderboard/code,属官方数据每日快照),解析 `<tr>` 行的 Elo/CI/投票。
- **AI 能力专项测试**:抓取 atmeplz 静态站渲染用 JSON(`data/site.json`),提取「前端处理能力」与「后端处理能力」两个方向的方向分(0-100),写入 `data/aicap.js`;计入综合分(前端/后端各 12%)并进入总览矩阵(单列并列展示),总览另设 AI 能力卡片。
- **Terminal-Bench 4.0**:解析 tbench.ai 服务端渲染 HTML 表格(agent×model 组合条目,66 任务,官方实测榜 T1),并以 datalearner 详情页(内嵌 results JSON,厂商官方发布 T2)为补充源——只补缺、不覆盖官方条目(官方口径优先);计入综合分(权重 12%)与命中数。
- **Terminal-Bench 3.0**:线上 tbench.ai 的 3.0 路由已并入 4.0,改为每日抓取 snorkel.ai 全量 12 条 agent×model 榜单(74 任务,官方 3.0 榜已下线、snorkel 为唯一 T3 镜像);与 4.0 合并为一个基准组计入综合分与命中数(优先级 4.0>3.0>2.1)。
- **Terminal-Bench 2.1**:主源 datalearner 详情页(厂商官方发布成绩 T2,含模式/发布时间/参数量)+ 补充源 llm-stats 聚合表(0-1 归一化自报分换算为%,T3)按渠道层级合并(~43 模型级条目),与 4.0/3.0 合并为一个基准组;随 `fetch_all.js` 每日重写。
- **NL2Repo-Bench**:主源官方论文评测表(arxiv 2512.12730v2 Table 2,基准作者 OpenHands 官方协议,12 条上一代模型)与 datalearner 厂商官方发布成绩(T2)+ 补充源 llm-stats.com 聚合表与 benchlm.ai 镜像(T3)按渠道优先级合并去重(~48 模型级条目,src 字段标注来源);数据照常每日抓取写入 `data/nl2repo.js`,但自 2026-09-19 起不再计入综合分与命中数(原权重 9%),改为仅在「权威基准测试」页展示。
- **ModelDial 雷达**:官方 JSON feed(`/api/v1/radar/latest.json`,OpenAPI 收录、CC BY 4.0、无鉴权,单请求即得全榜 52 条 config 与综合分);该站自建 harness 自测、无更高优先级渠道可合并,按 T3 第三方评测处理。写入 `data/modeldial.js`(模型级主榜 23 条 + config 明细 52 条);计入综合分(权重 12%)与命中数。综合分口径 40/30/30 已逐条核对与源站一致;费用/耗时为后端单轴口径(源站主榜显示三轴汇总值),且分轴与 overall 档案均不含成本字段、批次号与 feed 不对齐,故不做汇总(详见 `scripts/sources/modeldial.js` 头部说明)。
- **权威基准测试(展示型)**:DeepSWE(官方榜 T1 + datalearner T2 只补缺)、Terminal-Bench-Science 0.1(explainx 博客镜像,唯一 T3 渠道)、OSWorld 2.0(datalearner 厂商发布 partial 口径为主源 T2,steel.dev 系统级镜像 T3 仅追加未收录条目)、Agents' Last Exam(datalearner 厂商发布 T2 主源 + llm-stats T3 补充)、ARC-AGI-3(datalearner 厂商发布 Standard harness T2 主源 + llm-stats T3 补充,RHAE 百分制直采)、BenchCAD(GitHub leaderboard.json 官方榜 T1,主指标 Vision2Code total)、GPQA Diamond(llm-stats 聚合表;datalearner GPQA 为 448 题全量集、口径不同于 198 题 Diamond 子集,未并入,取单源)、HLE(datalearner 厂商发布 T2 主源 + llm-stats/benchlm T3 补充按层级合并,~84 模型级条目);除 DeepSWE / TB 三版合并 / NL2Repo 外均仅展示,不计入综合分。
- **套餐快速对比(展示型)**:codingplan.fyi 静态 JSON(model-comparison-presets.json 固定精选模型分组 + plans.json 套餐月价/币种 + plan-models.json 套餐×模型综合单价与实测月用量 + models.json/platforms.json 名称映射 + config.json 美元汇率),抓取端完整复刻源站 entity-data 的比价算法(美元按汇率折算、按量行取综合单价、订阅行取折算月价+实测月用量),按综合单价升序输出;仿 news 模式在 `fetch_all.js` 旁路调用(不进基准管线/校验器),写入 `data/codingplan.js`;已丢弃源站推广跳转链接。

任一源抓取失败则保留旧文件(站点不崩)。
