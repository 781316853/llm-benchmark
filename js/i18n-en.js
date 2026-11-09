// 英文站翻译字典(由 js/i18n.js 在渲染后应用到 <html lang="en"> 页面)
// 维护方式:
//   dict  —— 纯文本或单个属性值,key 为中文原文(空白折叠后)精确匹配;新增中文文案后在此补译
//   rules —— 带变量的模板文案,按声明顺序取第一条匹配;替换串里的 $1..$9 对应捕获组
//   html  —— 含内联标签的整块文案(少数语序必须整体重排时使用),key 为整块 textContent
// 数字容错:dict 里 key 含数字(日期/价格/条数)时会自动按数字位模糊匹配,译文按顺序复用当前数字,
//   所以快照刷新后不必逐日改字典;但译文里的数字出现顺序必须与原文一致。
// 未收录的中文会原样保留(英文页可能出现中文),补译后刷新即可。
(function () {
  "use strict";

  function boardName(s) {
    return s === "亿模亿样" ? "Arena of Bias" : s;
  }

  var CONFIG = {
    "最高（工具）": "highest (with tools)",
    "最高（无工具）": "highest (no tools)",
    "思考模式（工具）": "thinking (with tools)",
    "思考模式（无工具）": "thinking (no tools)",
    "思考模式 High（工具）": "thinking High (with tools)",
    "思考模式 High（无工具）": "thinking High (no tools)",
    "思考模式 Low（无工具）": "thinking Low (no tools)",
    "思考模式 Medium（无工具）": "thinking Medium (no tools)",
    "极高强度思考（工具）": "extra-high thinking (with tools)",
    "极高强度思考（无工具）": "extra-high thinking (no tools)",
    "深度思考模式（工具）": "deep-thinking mode (with tools)",
    "深度思考模式（无工具）": "deep-thinking mode (no tools)",
    "思考档位未公开（工具）": "effort undisclosed (with tools)",
    "思考档位未公开（无工具）": "effort undisclosed (no tools)"
  };

  function fmtTokens(n) {
    var v = parseFloat(String(n).replace(/,/g, "")) * 1e8;
    var unit = v >= 1e9 ? [1e9, "B"] : v >= 1e6 ? [1e6, "M"] : [1e3, "K"];
    var x = Math.round(v / unit[0] * 10) / 10;
    return x + unit[1] + " tokens";
  }

  // 推理强度取值:多数是 Max/High 这类英文枚举,数据里也有「开启」这种中文值
  function effortLabel(s) {
    return CONFIG[s] || DICT_ALIAS[s] || s;
  }
  var DICT_ALIAS = { "开启": "On", "关闭": "Off" };

  // Terminal-Bench 三版说明里的任务口径片段(含标点,整体替换避免半句残留)
  var TASK_PHRASES = [
    ["校准资源并移除饱和任务", "resources calibrated and saturated tasks removed"],
    ["含更长周期/多容器/GPU 环境", "including longer-horizon, multi-container and GPU environments"],
    ["当前主站 agent×model 榜单", "the current main-site agent×model board"],
    ["snorkel.ai 权威镜像", "snorkel.ai's authoritative mirror"],
    ["每日自动抓取(agent×model)", "collected daily (agent×model)"],
    ["datalearner 厂商官方发布成绩为主源", "datalearner's vendor-published scores are the primary source"],
    ["llm-stats 归一化自报分为补充", "llm-stats normalised self-reports supplement them"]
  ];
  function taskPhrase(s) {
    for (var i = 0; i < TASK_PHRASES.length; i++) {
      s = s.split(TASK_PHRASES[i][0]).join(TASK_PHRASES[i][1]);
    }
    return s;
  }

  var RULES = [
    // ===== 页头快照 =====
    ["^快照数据 · (.+) · 刷新于 (.+)\\(北京时间\\)$", "Snapshot · $1 · refreshed $2 (Beijing time)"],

    // ===== 总览矩阵提示 =====
    ["^综合分 ([\\d.]+)\\(榜内相对分:50 = 全池中位,每 15 分 = 1 个榜内稳健标准差;不可跨日直接比较\\)$",
      "Composite $1 (board-relative: 50 = median of the pool, 15 points = 1 robust SD within the board; not comparable across days)"],
    ["^综合排名前 20 中性价比指数最高:综合分 ([\\d.]+) ÷ ¥([\\d.]+)/M = ([\\d.]+)$",
      "Best value in the top 20: composite $1 ÷ ¥$2/M = $3"],

    // ===== 总览:矩阵行数提示(app.js 拼装,数字随筛选变化) =====
    ["^当前显示排名前 (\\d+) 的模型,以及 (\\d+) 个跻身前 30 区间的「参考」模型\\(命中 3 榜,不计算综合分、不排名\\)。\\s*其余参考模型与命中 ≤2 榜的模型,勾选「显示全部模型」查看。(?:\\s*当前高亮 (\\d+) 个国产模型。)?\\s*Terminal-Bench 三版合并计分;ModelDial、亿模亿样、AI Coding Daily 为第三方实测;Agent Arena 为 LMArena 真实智能体会话净提升;HLE 及其余权威基准仅参考。$",
      function (m, ranked, ref, dom) {
        return "Showing the top " + ranked + " models plus " + ref + " “reference” " +
          (ref === "1" ? "model" : "models") + " inside the top-30 band (3 boards, no composite, unranked). " +
          "Other reference models and models covering ≤2 boards are behind “Show all models”. " +
          (dom ? dom + " Chinese models highlighted. " : "") +
          "Terminal-Bench 4.0/3.0/2.1 score as one board; ModelDial, Arena of Bias and AI Coding Daily are third-party tests; " +
          "Agent Arena is net gain on LMArena real agent sessions; HLE and the remaining reference benchmarks are reference only.";
      }],
    ["^当前显示全部 (\\d+) 个有成绩的模型:排名 (\\d+) · 参考 (\\d+) · 单榜 (\\d+)。\\s*命中 ≤3 榜的模型不计算综合分、不参与排名;参考行混排,单榜行置末。(?:\\s*当前高亮 (\\d+) 个国产模型。)?\\s*Terminal-Bench 三版合并计分;ModelDial、亿模亿样、AI Coding Daily 为第三方实测;Agent Arena 为 LMArena 真实智能体会话净提升;HLE 及其余权威基准仅参考。$",
      function (m, total, ranked, ref, single, dom) {
        return "Showing all " + total + " scoring models: ranked " + ranked + " · reference " + ref + " · single-board " + single + ". " +
          "Models covering ≤3 boards get no composite and no rank; reference rows are interleaved and single-board rows go last. " +
          (dom ? dom + " Chinese models highlighted. " : "") +
          "Terminal-Bench 4.0/3.0/2.1 score as one board; ModelDial, Arena of Bias and AI Coding Daily are third-party tests; " +
          "Agent Arena is net gain on LMArena real agent sessions; HLE and the remaining reference benchmarks are reference only.";
      }],
    ["^搜索「(.+?)」在全部 ([\\d,]+) 个有成绩的模型中命中 ([\\d,]+) 个(?::排名 ([\\d,]+) · 参考 ([\\d,]+) · 单榜 ([\\d,]+)。|。)\\s*搜索不套用默认视图的前 30 / 参考区间截断,含「参考」与「仅单榜」行;清空搜索框或按 Esc 返回当前视图。(?:\\s*当前高亮 (\\d+) 个国产模型。)?(?:\\s*Terminal-Bench 三版合并计分;ModelDial、亿模亿样、AI Coding Daily 为第三方实测;Agent Arena 为 LMArena 真实智能体会话净提升;HLE 及其余权威基准仅参考。)?$",
      function (m, query, total, hits, ranked, ref, single, dom) {
        return "“" + query + "” matches " + hits + " of " + total + " scoring models" +
          (ranked ? ": ranked " + ranked + " · reference " + ref + " · single-board " + single + "." : ".") +
          " Search ignores the default top-30 / reference band cut and includes “reference” and “single-board” rows; clear the box or press Esc to return.";
      }],

    // ===== ModelDial 配置提示 =====
    ["^后端 ([\\d.]+) · 前端 ([\\d.]+) · 知识 ([\\d.]+)(?: · 审美 ([\\d.]+))?(?: · 可维护 ([\\d.]+))?(?: · 旧三轴 ([\\d.]+))?(?: · 强度 (\\S+))?(?: · 耗时 (.+?))?(?: · 费用 (\\$[\\d.]+)\\(综合口径\\))?(?: · (\\d+) 个配置取最高)?(?: · (外部产品评测\\(源站标为非 API 排名\\)))?$",
      function (m, be, fe, kn, ae, mt, ta, eff, lat, cost, cfgs, ext) {
        var out = "Backend " + be + " · Frontend " + fe + " · Knowledge " + kn;
        if (ae) out += " · Aesthetic " + ae;
        if (mt) out += " · Maintainability " + mt;
        if (ta) out += " · legacy 3-axis " + ta;
        if (eff) out += " · effort " + effortLabel(eff);
        if (lat) out += " · latency " + lat;
        if (cost) out += " · cost " + cost + " (five-axis)";
        if (cfgs) out += " · best of " + cfgs + " configs";
        if (ext) out += " · external product evaluation (not in API ranking)";
        return out;
      }],

    // ===== 榜内名次 =====
    ["^(.+?) 榜内名次 #(\\d+) / 共 ([\\d,]+) 条上榜记录$", function (m, b, r, n) {
      return boardName(b) + " rank #" + r + " of " + n + " entries";
    }],
    ["^官方 #(\\d+) · ([\\d,]+) 场独立会话 · ([\\d,]+) 次信号观测 · (.+?) · 净提升相对 Arena 基线,可为负;同一模型取最高分档$",
      "Official #$1 · $2 independent sessions · $3 signal observations · $4 · net gain vs the Arena baseline, may be negative; highest config per model"],
    ["^官方 #(\\d+) · ([\\d,]+) 场独立会话 · (.+?) · 净提升相对 Arena 基线,可为负;同一模型取最高分档$",
      "Official #$1 · $2 independent sessions · $3 · net gain vs the Arena baseline, may be negative; highest config per model"],
    ["^排名 #(\\d+) · 强度 (\\S+) · ([\\d,]+) 场有效比较 · 胜率 ([\\d.]+)% · (\\d+) 个档位取最高( · 源站标「暂定」\\(有效比较 < 30 次\\))?$",
      function (m, rank, eff, cmp, win, cfg, prov) {
        return "Rank #" + rank + " · effort " + effortLabel(eff) + " · " + cmp + " comparisons · " + win +
          "% win rate · best of " + cfg + " configs" +
          (prov ? " · marked provisional on source (< 30 comparisons)" : "");
      }],
    ["^排名 #(\\d+) · ([\\d,]+) 场有效比较 · 胜率 ([\\d.]+)% · (\\d+) 个档位取最高( · 源站标「暂定」\\(有效比较 < 30 次\\))?$",
      function (m, rank, cmp, win, cfg, prov) {
        return "Rank #" + rank + " · " + cmp + " comparisons · " + win + "% win rate · best of " + cfg + " configs" +
          (prov ? " · marked provisional on source (< 30 comparisons)" : "");
      }],
    ["^harness OpenHands · 成本 (\\$[\\d.]+)/测试 · 耗时 (.+?)/测试$",
      "OpenHands harness · $1/test · $2/test"],
    ["^HLE 权威基准 · 仅参考,不计入综合分与命中数 · 排名 #(\\d+)$",
      "HLE reference benchmark · reference only, not counted in composite or coverage · rank #$1"],

    // ===== 版本徽标 / 时间 =====
    ["^榜单版本 (v[\\d.]+)$", "Board version $1"],
    ["^(v[\\d.]+) · (.+)$", function (m, v, cfg) {
      return v + " · " + (CONFIG[cfg] || cfg);
    }],
    ["^更新 (\\d{4}-\\d{2}-\\d{2})$", "Updated $1"],
    ["^源站更新 ([\\d.]+) · 本站抓取 ([\\d\\- :]+)$", "Source updated $1 · fetched $2"],
    ["^源站发布 ([\\d\\-]+) · 本站抓取 ([\\d\\- :]+)( · 批次 (\\S+))?$",
      function (m, pub, fetched, junk, batch) {
        return "Source published " + pub + " · fetched " + fetched + (batch ? " · batch " + batch : "");
      }],
    ["^源站发布 ([\\d\\-]+) · 本站抓取 ([\\d\\- :]+) · 收录 ([\\d,]+) 个模型 · ([\\d,]+) 条配置 · ([\\d,]+) 次有效比较$",
      "Source published $1 · fetched $2 · $3 models · $4 configs · $5 valid comparisons"],
    ["^源站发布 ([\\d\\-]+) · 本站抓取 ([\\d\\- :]+) · 收录 ([\\d,]+) 个模型 / ([\\d,]+) 条实测配置$",
      "Source published $1 · fetched $2 · $3 models / $4 tested configs"],
    ["^源站发布 ([\\d\\-]+) · 本站抓取 ([\\d\\- :]+) · 收录 ([\\d,]+) 个模型$",
      "Source published $1 · fetched $2 · $3 models"],
    ["^源站 ([\\d.]+) · 本站抓取 ([\\d\\- :]+) · 美元按汇率 6.8 折算人民币$",
      "Source $1 · fetched $2 · USD converted to CNY at 6.8"],

    // ===== 价格 / 用量 =====
    ["^¥([\\d,.]+) / 月$", "¥$1 / mo"],
    ["^¥([\\d,.]+) / 亿$", "¥$1 / 100M"],
    ["^([\\d,.]+)亿$", function (m, n) { return fmtTokens(n); }],

    // ===== 取值提示(总览矩阵 / 各榜明细) =====
    ["^性价比 ([\\d.]+) = 综合分 ([\\d.]+) ÷ ¥([\\d.]+)/M · 输入 ¥([\\d.]+) / 缓存输入 ¥([\\d.]+) / 输出 ¥([\\d.]+)\\(¥/百万 token\\)· 综合成本 = 95% 缓存输入 \\+ 4\\.5% 未缓存输入 \\+ 0\\.5% 输出\\(按 1M token 实际编程比例折算\\);单价来源 (.+)$",
      "Value $1 = composite $2 ÷ ¥$3/M · input ¥$4 / cached input ¥$5 / output ¥$6 (¥ per 1M tokens) · blended cost = 95% cached input + 4.5% uncached input + 0.5% output (1M-token coding mix); prices from $7"],
    ["^Laravel ([\\d.]+) · React-TS ([\\d.]+) · Bug Finding ([\\d.]+) · Edge-case ([\\d.]+) · harness (.+?)(?: · 档位 (\\S+))? · 耗时 (.+?)/prompt(?: · 费用 (\\$[\\d.]+)/prompt)? · (\\d+) 个配置取最高$",
      function (m, lar, rts, bug, edge, harness, effort, latency, cost, cfgs) {
        return "Laravel " + lar + " · React-TS " + rts + " · Bug Finding " + bug + " · Edge-case " + edge +
          " · harness " + harness + (effort ? " · effort " + effortLabel(effort) : "") +
          " · latency " + latency + "/prompt" +
          (cost ? " · cost " + cost + "/prompt" : "") + " · best of " + cfgs + " configs";
      }],
    ["^(.+) · 月度 (\\d{4}-\\d{2})$", "$1 · month $2"],

    // ===== 条数 =====
    ["^共 ([\\d,]+) 条$", "$1 entries"],
    ["^([\\d,]+) 条$", "$1 entries"],
    ["^([\\d,]+) 节$", "$1 sections"],
    ["^共 ([\\d,]+) 条 config\\(模型 × 推理强度(?:;不含 Bot)?\\)$", "$1 configs (model × effort; excludes bots)"],
    ["^共 ([\\d,]+) 条实测配置\\(模型 × 推理档位 × harness\\)$", "$1 tested configs (model × effort × harness)"],

    // ===== 总览矩阵:单元格悬浮提示(app.js 拼装,字段按是否缺测增减) =====
    ["^(Laravel .+?) · harness (.+?) · (?:档位 (\\S+) · )?耗时 (.+?)/prompt · 费用 (.+?)/prompt · (\\d+) 个配置取最高$",
      function (m, axes, harness, effort, lat, cost, cfgs) {
        return axes + " · harness " + harness + (effort ? " · effort " + effort : "") +
          " · latency " + lat + "/prompt · cost " + cost + "/prompt · best of " + cfgs + " configs";
      }],
    ["^harness (.+?) · 成本 (.+?)/测试 · 耗时 (.+?)/测试$",
      "OpenHands harness · cost $1/test · latency $2/test"],
    ["^仅命中一榜:不计算综合分、不计排名,统一排在末尾;勾选下方「显示全部模型」可见$",
      "Single board only: no composite, no rank, always sorted last; tick “Show all models” to see it"],

    // ===== 套餐页「包含」清单(模型名保留原文,顿号改逗号) =====
    ["^包含：(.+)$", function (m, list) {
      return "Includes: " + list.replace(/、/g, ", ");
    }],
    // 图表轴名带参数(总分上限随题数变化)
    ["^总分\\(0-(\\d+)\\)$", "Total (0-$1)"],
    ["^仅显示命中≥2榜的 (\\d+)/(\\d+) 个模型\\(勾选「显示全部模型」可展开\\)。$",
      "Showing only the $1/$2 models covering ≥2 boards (tick “Show all models” to expand)."],
    // 引用弹窗元信息
    ["^数据快照 ([\\d\\-]+) · 数值随每日刷新变化,引用请保留快照日期。$",
      "Snapshot $1 · values change with the daily refresh; keep the snapshot date when citing."],
    ["^数据快照 ([\\d\\-]+) · (\\d{4}-\\d{2}-\\d{2})$", "Snapshot $1 · $2"],

    // ===== 权威基准页:页头说明与动态快照时间 =====
    ["^各基准由本站每 2 小时自动抓取合并,当前快照刷新于 ([\\d\\- :]+)\\(北京时间\\);$",
      "Each benchmark is collected and merged automatically every 2 hours; the current snapshot was refreshed at $1 (Beijing time);"],
    ["^Terminal-Bench ([\\d.]+) 解决率排行\\(agent×model Top 25\\)$",
      "Terminal-Bench $1 solve rate (agent×model, top 25)"],

    // ===== 权威基准页:各榜 source-note(URL / 日期 / 条数随抓取变化) =====
    ["^(.+?) 主渠道:(https?://\\S+?)\\(官方实测榜 T1\\)· 补充:datalearner\\(厂商官方发布 T2,只补缺\\)· Qwen 官方博客/模型卡\\(T2 厂商发布,仅补缺,effort 未标注·协议不可比·仅供参考\\) · v1\\.1 更新 ([\\d\\-]+) · v1\\.0 历史快照\\(([\\d\\-]+)\\) · 共 (\\d+) 个模型\\(v1\\.1: (\\d+) / v1\\.0 独有: (\\d+)\\)(?: · v1\\.1 (\\d+) 任务 / (\\d+) 仓库)?。.*本榜属「榜单基准」组,计入总览综合分\\(权重 (\\d+)%\\)与命中数。$",
      function (m, desc, url, upd, hist, total, v11, v10, tasks, repos, w) {
        return "Evaluates frontier coding agents on original, long-horizon software engineering tasks (uncontaminated, 91 repositories, 5 languages). Primary channel: " + url + " (official measured board, T1) · supplements: datalearner (vendor release, T2, gaps only) · Qwen official blog / model card (T2 vendor release, gaps only; effort unlabelled, protocol not comparable, reference only) · v1.1 updated " + upd + " · v1.0 historical snapshot (" + hist + ") · " + total + " models (v1.1: " + v11 + " / v1.0 only: " + v10 + ")" + (tasks ? " · v1.1 " + tasks + " tasks / " + repos + " repositories" : "") + ". Channel priority: official measured board > vendor release (paper / release page) > third-party aggregators and mirrors; lower tiers only fill missing models and fields and never override higher-tier scores. This board belongs to the “Leaderboard benchmarks” group and counts toward the overview composite (weight " + w + "%) and coverage.";
      }],
    ["^来源:(https?://\\S+?) · 更新 ([\\d\\-]+) · (\\d+) 个任务(.*),得分越高越好。.*权重 (\\d+)%\\)与命中数,优先以最高版本为代表\\(4\\.0>3\\.0>2\\.1\\);其中 2\\.1 为厂商发布/归一化自报分口径,与 4\\.0/3\\.0 的官方 agent×model 解决率不同。$",
      function (m, url, upd, tasks, detail, w) {
        return "Source: " + url + " · updated " + upd + " · " + tasks + " tasks" + taskPhrase(detail) +
          "; higher is better. The three versions merge into one benchmark group that counts toward the overview composite (in the “Leaderboard benchmarks” group, weight " + w + "%) and coverage, represented by the highest version (4.0 > 3.0 > 2.1); 2.1 uses vendor-published / normalised self-reported scores, unlike the official agent×model solve rates of 4.0 and 3.0.";
      }],
    ["^来源:(https?://\\S+?)\\(官方:(https?://\\S+?)\\) · 版本 ([\\d.]+) · 更新 ([\\d\\-]+) · (\\d+) 个来自真实科研流程的任务\\(每任务 (\\d+) 次独立试验\\),解决率越高越好。.*本榜仅展示,不计入综合分。$",
      function (m, url, official, ver, upd, tasks, trials) {
        return "Source: " + url + " (official: " + official + ") · version " + ver + " · updated " + upd + " · " + tasks + " tasks drawn from real research workflows (" + trials + " independent trials each); higher solve rate is better. Channel priority: official measured board > vendor release (paper / release page) > third-party aggregators and mirrors; lower tiers only fill missing models and fields and never override higher-tier scores (the primary source explainx is a T3 mirror; vendor self-reported T2 scores only fill models the mirror lacks). Shown for reference only, not counted in the composite.";
      }],
    ["^主渠道:datalearner\\(厂商官方发布 partial 口径\\)· 补充:(https?://\\S+?)\\(官方:(https?://\\S+?),系统级条目仅追加\\) · 更新 ([\\d\\-]+) · (\\d+) 个长时程桌面工作流\\(人类中位耗时约 ([\\d.]+) 小时\\),部分得分\\(检查点达成比例\\)越高越好;二进制完成率极低,故按部分得分排序。.*本榜仅展示,不计入综合分。$",
      function (m, url, official, upd, flows, hours) {
        return "Primary channel: datalearner (vendor release, partial credit) · supplement: " + url + " (official: " + official + "; system-level entries are appended only) · updated " + upd + " · " + flows + " long-horizon desktop workflows (human median about " + hours + " hours); higher partial score (share of checkpoints met) is better, and since binary completion rates are extremely low the board is sorted by partial score. Channel priority: official measured board > vendor release (paper / release page) > third-party aggregators and mirrors; lower tiers only fill missing models and fields and never override higher-tier scores. Shown for reference only, not counted in the composite.";
      }],
    ["^主渠道:datalearner\\(厂商官方发布\\)· 补充:(https?://\\S+?)\\(官方:(https?://\\S+?),Qwen 官方发布 T2 仅补缺\\) · 更新 ([\\d\\-]+) · ([\\d,+]+) 个真实专业工作流任务\\((\\d+) 子行业\\),Pass@1 为完美得分运行占比,越高越好。.*本榜仅展示,不计入综合分。$",
      function (m, url, official, upd, tasks, inds) {
        return "Primary channel: datalearner (vendor release) · supplement: " + url + " (official: " + official + "; Qwen's T2 release fills gaps only) · updated " + upd + " · " + tasks + " real professional-workflow tasks (" + inds + " sub-industries), where Pass@1 is the share of runs scoring perfectly; higher is better. Channel priority: official measured board > vendor release (paper / release page) > third-party aggregators and mirrors; lower tiers only fill missing models and fields and never override higher-tier scores. Shown for reference only, not counted in the composite.";
      }],
    ["^主渠道:datalearner\\(厂商官方发布\\)· 补充:(https?://\\S+?)\\(官方:(https?://\\S+?),原始 HTML 只服务端渲染 Top 10、主榜另用私有 held-out 集,故官方页仅作来源链接\\)· benchlm\\.ai 镜像 · 更新 ([\\d\\-]+) · (\\d+) 个公开任务 / (\\d+) 个模拟 SaaS 工具 / (\\d+) 个业务域\\(([^)]+)\\):.*?本榜仅展示,不计入综合分。$",
      function (m, url, official, upd, tasks, tools, domains, doms) {
        return "Primary channel: datalearner (vendor release) · supplement: " + url + " (official: " + official + "; the raw HTML only server-renders the top 10 and the main board uses a private held-out set, so the official page serves as a source link only) · benchlm.ai mirror · updated " + upd + " · " + tasks + " public tasks / " + tools + " simulated SaaS tools / " + domains + " business domains (Sales / Marketing / Operations / Support / Finance / HR): a real operations request is handed to the agent and a deterministic assertion checks the final environment state (no reading of reply text, no LLM-as-judge); the primary metric task_completed_correctly is the strict all-pass rate, higher is better (scores run low, mainly because agents claim completion while the environment state is wrong). Note: datalearner transcript rows without provenance (evidence missing sourceUrl) enter at the lowest tier — they only fill missing models and never override sourced data (flagged with a row-level “no source” badge), so conflicting values cannot beat llm-stats·benchlm. Channel priority: official measured board > vendor release (paper / release page) > third-party aggregators and mirrors; lower tiers only fill missing models and fields and never override higher-tier scores. Shown for reference only, not counted in the composite.";
      }],
    ["^主渠道:datalearner\\(厂商官方发布,Standard harness 口径\\)· 补充:(https?://\\S+?)\\(官方:(https?://\\S+?)\\) · 更新 ([\\d\\-]+) · (\\d+) 个交互式游戏环境,RHAE\\(相对人类行动效率,人类基线 (\\d+)%\\)越高越好。.*本榜仅展示,不计入综合分。$",
      function (m, url, official, upd, envs, base) {
        return "Primary channel: datalearner (vendor release, Standard harness) · supplement: " + url + " (official: " + official + ") · updated " + upd + " · " + envs + " interactive game environments; higher RHAE (relative human action efficiency, human baseline " + base + "%) is better. Channel priority: official measured board > vendor release (paper / release page) > third-party aggregators and mirrors; lower tiers only fill missing models and fields and never override higher-tier scores. Shown for reference only, not counted in the composite.";
      }],
    ["^来源:(https?://\\S+?)\\(榜单:(https?://\\S+?)\\) · 抓取于 ([\\d\\-]+) · ([\\d,]+) 个执行验证的 CadQuery 程序 / (\\d+) 类工业零件 / (\\d+) 项工程标准\\(([^)]+)\\);total 为 0-1 综合分,越高越好。本榜仅展示,不计入综合分。$",
      function (m, url, board, at, progs, parts, stds, names) {
        return "Source: " + url + " (board: " + board + ") · fetched " + at + " · " + progs + " execution-verified CadQuery programs / " + parts + " industrial part types / " + stds + " engineering standards (" + names + "); total is a 0–1 composite, higher is better. Shown for reference only, not counted in the composite.";
      }],
    ["^来源:(https?://\\S+?)\\(官方:(https?://\\S+?)\\) · 更新 ([\\d\\-]+) · APEX-1\\(AI Productivity Index,Mercor\\):.*本榜仅展示,不计入综合分与命中数。$",
      function (m, url, official, upd) {
        return "Source: " + url + " (official: " + official + ") · updated " + upd + " · APEX-1 (AI Productivity Index, Mercor): four kinds of real professional work — investment banking / consulting / law / general practice — on a hidden held-out set of 400 tasks (100 each), 8 attempts per model per task, graded by expert rubrics plus an LM judge; Mean Score is the average share of passing criteria across tasks (the primary ordering metric) and Pass@1 is the share of tasks scoring full marks in a single attempt; higher is better. Shown for reference only, not counted in the composite or coverage.";
      }],
    ["^主渠道:datalearner\\(厂商官方发布无工具成绩\\)· 补充:AA 无工具复测 · 更新 ([\\d\\-]+) · (\\d+) 道专家撰写、无联网可检索解的前沿题\\(([^)]+)\\),闭卷得分越高越好;.*本榜仅展示,不计入综合分。$",
      function (m, upd, n, fields) {
        return "Primary channel: datalearner (vendor-published no-tool scores) · supplement: AA no-tool retest · updated " + upd + " · " + n + " expert-written frontier questions that cannot be answered by searching the web (maths / science / humanities etc.); higher closed-book scores are better. Channel priority: official measured board > vendor release (paper / release page) > third-party aggregators and mirrors; lower tiers only fill missing models and fields and never override higher-tier scores. This table uses one no-tool (closed-book) basis throughout: entries where the vendor explicitly says no tools take priority, and the AA no-tool retest only fills models the official channels lack, flagged with a row-level “AA retest” badge; models with only tool-assisted scores or no stated protocol are excluded, so scores in the table are directly comparable. Shown for reference only, not counted in the composite.";
      }],
    ["^主渠道:官方论文评测表\\(arxiv\\)与 datalearner\\(厂商官方发布\\)· 补充:llm-stats 聚合表与 benchlm\\.ai 镜像、Qwen 官方发布\\(T2,仅补缺\\) · 更新 ([\\d\\-]+) · 给定单一 NL 需求文档从零生成可安装 Python 库\\(约 (\\d+) 个任务\\),test-pass-rate 越高越好;.*本榜仅展示。$",
      function (m, upd, tasks) {
        return "Primary channel: official paper tables (arXiv) and datalearner (vendor release) · supplements: the llm-stats aggregator and benchlm.ai mirror, plus Qwen's release (T2, gaps only) · updated " + upd + " · given a single NL requirements document, generate an installable Python library from scratch (about " + tasks + " tasks); higher test-pass-rate is better. Channel priority: official measured board > vendor release (paper / release page) > third-party aggregators and mirrors; lower tiers only fill missing models and fields and never override higher-tier scores. Since 2026-09-19 this board no longer counts toward the overview composite or coverage (formerly 9%) and is shown for reference only.";
      }],
    ["^来源:(https?://\\S+?)\\(官方:(https?://\\S+?),([^)]+)\\)· 补充镜像 vals\\.ai · 双源按模型合并取最高 · 更新 ([\\d\\-]+) · 仅给编译后二进制与文档,.*本榜仅展示,不计入综合分与命中数\\(主指标整体 0-7 分,区分度极低\\)。$",
      function (m, url, official, org, upd) {
        return "Source: " + url + " (official: " + official + ", " + org + ") · supplement: vals.ai mirror · merged per model taking the higher value · updated " + upd + " · agents get only the compiled binary and its docs and must rebuild 200 real open-source projects from scratch, reproducing the original behaviour (behaviour-level hidden tests; no network, decompilation forbidden); Fully Resolved is the primary metric with Almost (≥95% of behaviour tests passing) and Raw Pass Rate (vals mirror) as secondary, all higher-is-better. Shown for reference only, not counted in the composite or coverage (the primary metric spans 0–7 overall, so discrimination is very low).";
      }],
    ["^来源:(https?://\\S+?)\\(Vals AI 官方榜\\)· 版本 ([\\d.]+) · 更新 ([\\d\\-]+) · 共 (\\d+) 个模型 · (\\d+) 个真实仓库\\((\\d+) 个 CLI \\+ (\\d+) 个 COBOL\\)跨语言重写,由隐藏测试判定是否保持行为等价;准确率越高越好。源站未公开 harness 字段。本榜仅展示,不计入综合分与命中数。$",
      function (m, url, ver, upd, models, repos, cli, cobol) {
        return "Source: " + url + " (official Vals AI board) · version " + ver + " · updated " + upd + " · " + models + " models · " + repos + " real repositories (" + cli + " CLI + " + cobol + " COBOL) rewritten across languages, with hidden tests judging whether behaviour stays equivalent; higher accuracy is better. The source does not publish a harness field. Shown for reference only, not counted in the composite or coverage.";
      }],
    ["^来源:(https?://\\S+?)\\(官方:(https?://\\S+?),([^)]+)\\)· 版本 ([\\w. ]+?) · 更新 ([\\d\\-]+) · 共 (\\d+) 个模型 / (\\d+) 条 model×档位配置 · 在 Cursor 自家 agent harness 上评测来自真实 Cursor 会话的「模糊、跨文件」任务\\(([^)]+)\\),agentic grader 判定、允许多种正确答案;.*本榜仅展示,不计入综合分与命中数\\(harness 口径与其他基准不可比\\)。$",
      function (m, url, official, org, ver, upd, models, rows, kinds) {
        return "Source: " + url + " (official: " + official + ", " + org + ") · version " + ver + " · updated " + upd + " · " + models + " models / " + rows + " model×config rows · evaluated on Cursor's own agent harness with “fuzzy, cross-file” tasks drawn from real Cursor sessions (editing / refactoring / debugging / intent understanding / long-task management / design consistency), judged by an agentic grader that allows several correct answers; this table is the model-level main board (best configuration per model, same basis as the official scatter), and expanding it shows every configuration; cost is the average per-task cost converted from each model's published price. Shown for reference only, not counted in the composite or coverage (the harness basis is not comparable with other benchmarks).";
      }],
    ["^来源:(https?://\\S+?)\\(榜单页:(https?://\\S+?),(Cognition) 官方\\)· 版本 ([\\w. ]+?) · 更新 ([\\d\\-]+) · 共 (\\d+) 个模型\\(main (\\d+) 题口径\\) · 任务由 ([\\d+]+) 资深开发者制作\\(每任务投入 ([\\d+]+) 小时\\),.*本榜仅展示,不计入综合分与命中数\\(harness 口径不可比\\)。$",
      function (m, url, page, org, ver, upd, models, tasks, devs, hours) {
        return "Source: " + url + " (board page: " + page + ", " + org + " official) · version " + ver + " · updated " + upd + " · " + models + " models (main " + tasks + "-task basis) · tasks authored by " + devs + " senior developers (" + hours + " hours each), scored on correctness / test quality / change scope / style / adherence to codebase conventions to assess end-to-end “mergeability” rather than whether it merely runs; “Standard score” is the best effort level on the main subset (matching the official main board, verified row by row), Pass Rate is raw correctness, and the harness is each vendor's own CLI (devin / claude-code / codex etc.). Shown for reference only, not counted in the composite or coverage (the harness basis is not comparable).";
      }],
    ["^来源:(https?://\\S+?)\\(方法学:(https?://\\S+?)\\) · 更新 ([\\d\\-]+) · 共 (\\d+) 条配置 / (\\d+) 个 Agent · Index v([\\d.]+) = FrontierCode v([\\d.]+)\\((\\d+) 题\\)\\+ Terminal-Bench ([\\d.]+)\\((\\d+) 题\\)\\+ SWE-Atlas-QnA-AA\\((\\d+) 题\\)三项等权平均,每项取每题三次尝试的均值;榜单粒度为 agent × model × 推理档位,分数同时反映模型能力与 Agent 脚手架;成本/耗时为每任务平均值。本榜仅展示,不计入综合分与命中数。$",
      function (m, url, method, upd, cfgs, agents, idx, fcVer, fcTasks, tbVer, tbTasks, swTasks) {
        return "Source: " + url + " (methodology: " + method + ") · updated " + upd + " · " + cfgs + " configs / " + agents + " agents · Index v" + idx + " = equal-weight average of FrontierCode v" + fcVer + " (" + fcTasks + " tasks) + Terminal-Bench " + tbVer + " (" + tbTasks + " tasks) + SWE-Atlas-QnA-AA (" + swTasks + " tasks), each averaged over three attempts per task; rows are agent × model × effort, so scores reflect both model ability and agent scaffold. Cost/latency are per-task averages. Shown for reference only, not counted in the composite or coverage.";
      }],
    ["^数据来源:Kimi 官方发布博客自测转录\\(T2\\)·reasoning effort=max、temperature=1\\.0/top-p=0\\.95,TB 4\\.0 用 Claude Code 框架,与基准官方实测榜不保证可比,仅补缺失模型,仅供参考$",
      "Source: transcript of Kimi's self-reported results from its official release blog (T2) · reasoning effort=max, temperature=1.0 / top-p=0.95, Terminal-Bench 4.0 uses the Claude Code scaffold; not guaranteed comparable with the official measured board; fills missing models only, for reference"]
  ];

  window.I18N_EN = {
    // 语境覆盖:按容器标注改写同形异义词。app.js 在基准卡片的统计标签外套了
    // data-i18n-ctx="card-stats"(见 benchSummary),那里「模型/任务/会话」跟在数字后应为复数。
    ctx: {
      "card-stats": {
        "模型": "models", "任务": "tasks", "会话": "sessions", "场景": "scenarios",
        "条目": "entries", "有效比较": "comparisons", "版本": "versions", "配置": "configs"
      },
      "card-weight": { "权重": "weight" }
    },
    dict: {
      // ===== 页头 / 页脚 =====
      "大模型编码基准整合门户": "LLM Coding Benchmark Portal",
      "聚合 DeepSWE · llm2014 Agentic · Code Arena·WebDev · Agent Arena · 亿模亿样前端盲评 · Terminal-Bench(4.0/3.0/2.1) · ModelDial 雷达 · AI Coding Daily 独立实测 · AA Coding Agent Index · Code Migration · NL2Repo-Bench · CursorBench · FrontierCode 等编码评测,聚焦跨基准模型对比":
        "Aggregating DeepSWE · llm2014 Agentic · Code Arena·WebDev · Agent Arena · Arena of Bias frontend blind test · Terminal-Bench (4.0/3.0/2.1) · ModelDial Radar · AI Coding Daily · AA Coding Agent Index · Code Migration · NL2Repo-Bench · CursorBench · FrontierCode and more, focused on cross-benchmark model comparison",
      "数据快照": "Data snapshot",
      "数据为快照,详见各页脚注": "Snapshot data — see the footnote on each page",
      "计分基准": "Scored benchmarks",
      "权威基准": "Reference benchmarks",
      "刷新间隔": "Refresh interval",
      "正在加载数据...": "Loading data…",
      "仅用于学习与对比展示 · 数据版权归原作者 · 各榜单数据以其官方页面为准":
        "For study and comparison only · Data © original authors · Each leaderboard's official page prevails",
      "数据随每日刷新变化;引用或转载请保留快照日期与来源链接":
        "Numbers change with the daily refresh; keep the snapshot date and source link when citing or reposting",
      "中文": "中文",

      // ===== 总览:阅读说明正文(加粗小标题后接整句) =====
      "按可见序金字塔分 12 档(S+ 至 E),高档少、低档多,边界随数据浮动;悬停徽标看精确综合分,勾选「显示综合分」直接显示。":
        "Tiers follow the visible order on a 12-level pyramid (S+ to E): few at the top, many at the bottom, with boundaries floating with the data. Hover a badge for the exact composite, or tick “Show composite score” to display it inline.",
      "各榜原生分先做榜内稳健标准化(z 值,截断 ±3),再按权重归一为 50 + 15 × 加权 z。50 为全池中位,是相对分,不可跨日比较;缺测榜权重自动回流,不奖不罚。":
        "Each board's native score is first robustly standardized within that board (z-score, clipped at ±3), then normalized by weight to 50 + 15 × weighted z. 50 is the median of the pool, so this is a relative score and not comparable across days; weights of missing boards flow back automatically — no bonus, no penalty.",
      "8 个计分基准组中进入榜单的数量:DeepSWE / llm2014 / Code Arena·WebDev / Agent Arena / Terminal-Bench(4.0·3.0·2.1) / ModelDial / 亿模亿样 / AI Coding Daily;HLE 仅参考,不计分。":
        "How many of the 8 scored benchmark groups the model appears on: DeepSWE / llm2014 / Code Arena·WebDev / Agent Arena / Terminal-Bench (4.0·3.0·2.1) / ModelDial / Arena of Bias / AI Coding Daily. HLE is reference only and does not score.",
      "综合分相差不到 1.5 分视为同档;同档依次按共榜支配 → 命中数 → 共榜净胜 → 综合分排列。":
        "Models within 1.5 composite points count as the same tier; within a tier, ordering goes by shared-board dominance → coverage → shared-board net wins → composite score.",
      "「第三方实测」组各列数值前的 #N 为该模型在对应榜单中的实际序号(取源站榜单名次;WebDev 源站无序号,按原始条目 Elo 并列计名次),悬浮名次可见榜内上榜条目总数。":
        "In the “Third-party tests” group, the #N before each value is the model's actual position on that board (taken from the source leaderboard; WebDev has no source rank, so ties are ranked by raw entry Elo). Hover the rank to see the board's total entry count.",
      "综合分 ÷ 每百万 token 综合成本(95% 缓存输入 + 4.5% 输入 + 0.5% 输出,价格优先取自 codingplan.fyi,排名模型缺价由 models.dev 补齐);仅对命中 ≥4 榜的排名模型计算。":
        "Composite ÷ blended cost per million tokens (95% cached input + 4.5% input + 0.5% output; prices taken from codingplan.fyi first, with missing prices for ranked models filled from models.dev). Computed only for ranked models covering at least 4 boards.",
      "绿底为排名模型;灰蓝 +「参考」为命中 2-3 榜,混排展示但不排名;淡灰 +「仅单榜」为命中 1 榜,勾选「显示全部模型」才出现;NEW 为近 7 天首次上榜;「最佳性价比」只标在排名前 20 的排名行(不含参考/仅单榜)中性价比指数最高者。":
        "Green background = ranked model; blue-grey with “Ref” = covers 2–3 boards, shown inline but not ranked; pale grey with “Single” = covers 1 board, only appears when “Show all models” is ticked; NEW = first appeared within the last 7 days; “Best value” marks the highest value index among the top-20 ranked rows only (reference and single-board rows excluded).",
      "DeepSWE 14% · Code Arena·WebDev 18% · Terminal-Bench 9% · ModelDial 14% · llm2014 10% · 亿模亿样 10% · AI Coding Daily 8% · Agent Arena 9%(合计 0.92,按在场榜归一;缺测权重回流)。":
        "DeepSWE 14% · Code Arena·WebDev 18% · Terminal-Bench 9% · ModelDial 14% · llm2014 10% · Arena of Bias 10% · AI Coding Daily 8% · Agent Arena 9% (sums to 0.92 and is renormalized over the boards present; missing weights flow back).",
      "DeepSWE 为 Pass@1 %;Code Arena·WebDev 取原始 Elo;Agent Arena 为相对 Arena 基线的净提升 %(可为负,IPS/因果追踪口径);Terminal-Bench 取 4.0/3.0/2.1 最高版本,3.0/2.1 按共有模型折算 4.0 等效分(2.1 的 88 分约等于 4.0 的 26 分);ModelDial 为五轴 20/25/35/10/10 加权;llm2014 为等级映射 0-100;亿模亿样为 Elo(1000 为平均水平);AI Coding Daily 为四轴总分 0-70。":
        "DeepSWE is Pass@1 %; Code Arena·WebDev uses raw Elo; Agent Arena is net gain % versus the Arena baseline (may be negative, IPS/causal-tracing basis); Terminal-Bench uses the highest of 4.0/3.0/2.1, with 3.0/2.1 converted to a 4.0-equivalent score via shared models (2.1's 88 ≈ 4.0's 26); ModelDial is five-axis 20/25/35/10/10; llm2014 maps grade levels to 0–100; Arena of Bias is Elo (1000 = average); AI Coding Daily is a four-axis total out of 70.",
      "12 级按 1 / 3 / 5 / 7 / 9 / 11 / 13 / 15 / 17 / 19 / 21 / 剩余 的金字塔权重依次分配。":
        "The 12 levels are allocated pyramid weights of 1 / 3 / 5 / 7 / 9 / 11 / 13 / 15 / 17 / 19 / 21 / the remainder, in order.",
      "每百万 token 综合成本按 95% 缓存输入 + 4.5% 未缓存输入 + 0.5% 输出折算,美元按 6.8 折合人民币(models.dev 补齐价同汇率折算);指数与综合分同源,不可跨日/跨快照比较。":
        "Blended cost per million tokens is 95% cached input + 4.5% uncached input + 0.5% output, with USD converted to CNY at 6.8 (models.dev fill-in prices use the same rate). The index shares its source with the composite and is not comparable across days or snapshots.",
      "按 官方实测 > 厂商发布 > 第三方聚合 的优先级合并,低层级只补缺;数据为快照,仅用于学习与对比展示,不代表绝对评价。":
        "Merged by priority of official measurements > vendor releases > third-party aggregators, where lower tiers only fill gaps. Data is a snapshot, used for study and comparison only, and does not constitute an absolute verdict.",

      // ===== 总览:矩阵表头提示 =====
      "性价比指数 = 综合分 ÷ 每百万 token 综合成本(¥/M)。成本按 1M token 实际编程比例折算:95% 缓存输入 + 4.5% 未缓存输入 + 0.5% 输出;单价优先取 codingplan.fyi,排名模型缺价时由 models.dev 补齐(美元按 6.8 折人民币),仅命中≥4榜的排名模型计算,悬浮可见来源与输入/缓存输入/输出三档单价 点击按此列排序":
        "Value index = composite ÷ blended cost per million tokens (¥/M). Cost follows a real coding mix per 1M tokens: 95% cached input + 4.5% uncached input + 0.5% output. Prices come from codingplan.fyi first, with missing prices for ranked models filled from models.dev (USD at 6.8); computed only for ranked models covering at least 4 boards. Hover to see the source and the input / cached input / output prices · Click to sort by this column",
      "榜单基准:基准官方实测榜(DeepSWE 14% / Terminal-Bench 4.0/3.0/2.1 9%)计入综合分与命中数;组尾 HLE 为权威基准仅参考列,不计入综合分与命中数;各榜先按榜内稳健标准分(中位数与 1.4826×MAD 定标、截断 ±3σ)定标后按权重加权,再按渠道层级合并数据(基准官方实测榜 > 厂商官方发布 > 第三方聚合与镜像)":
        "Leaderboard benchmarks: the official measured boards (DeepSWE 14% / Terminal-Bench 4.0/3.0/2.1 9%) count toward the composite and coverage; the trailing HLE column is a reference benchmark only and counts toward neither. Each board is standardized by its in-board robust score (median and 1.4826×MAD scaling, clipped at ±3σ) before weighting, and data is merged by channel tier (official measured board > vendor release > third-party aggregator or mirror)",
      "第三方实测:第三方独立实测(ModelDial 雷达,五轴 20/25/35/10/10 合成分,权重 14%;AI Coding Daily 编码榜,7 项目 27 prompt 实测、总分 0-70,权重 8%,注:各模型跑在各自 agent harness 上)、社区盲评与真实使用(Code Arena · WebDev 18% / Agent Arena 净提升 9% / 亿模亿样 10%)与站主实测口径(llm2014 私有题库 10%);六组同纲计入综合分与命中数,合计占权重约 69%;综合分为各榜榜内相对分的加权,未测榜按该模型自身水平填补;各列数值前的 #N 为该模型在对应榜单中的实际名次(WebDev 源站无序号,按原始条目 Elo 并列计名次),悬浮可见榜内条目总数":
        "Third-party tests: independent third-party evaluation (ModelDial Radar, five-axis 20/25/35/10/10 composite, weight 14%; AI Coding Daily coding board, 7 projects × 27 prompts, total out of 70, weight 8% — note each model runs on its own agent harness), community blind tests and real-world usage (Code Arena · WebDev 18% / Agent Arena net gain 9% / Arena of Bias 10%) and the maintainer's own suite (llm2014 private benchmark 10%). All six count toward the composite and coverage on the same footing, together about 69% of the weight. The composite is a weighted sum of in-board relative scores, with untested boards imputed from the model's own level. The #N before each value is the model's actual position on that board (WebDev has no source rank, so ties are ranked by raw entry Elo); hover to see the board's total entry count",
      "LMArena Agent Arena 净提升(%):IPS(因果追踪)估计模型在真实智能体会话中相对 Arena 基线的提升,可为负;同一模型按推理强度分档多次上榜时取最高分;另记 95% 区间、独立会话数与观测数;计入综合分(权重 9%)与命中数 点击按此列排序":
        "LMArena Agent Arena net gain (%): IPS (causal tracing) estimate of a model's improvement over the Arena baseline in real agent sessions, may be negative. When a model appears at several effort levels, its highest score is used. Also records the 95% interval, independent sessions and observation counts; counts toward the composite (weight 9%) and coverage · Click to sort by this column",
      "亿模亿样前端作品社区盲评 Elo(1000 为平均水平,高 400 分约等于被偏好机会高十倍):同一道题匿名盲评两件作品,按 Bradley-Terry 估计偏好强度;同一模型按推理强度分档多次测试后取最高分档入榜;计入综合分(权重 10%)与命中数 点击按此列排序":
        "Arena of Bias community blind-test Elo for frontend builds (1000 = average; +400 points ≈ ten times the odds of being preferred): two builds on the same prompt are judged anonymously and Bradley-Terry estimates the preference strength. When a model is tested at several effort levels, its highest-scoring configuration enters the board; counts toward the composite (weight 10%) and coverage · Click to sort by this column",
      "AI Coding Daily 总分(0-70):独立第三方(aicodingdaily.com)实测,每模型 7 个真实项目 / 27 个 prompt,总分 = Laravel 20 + React-TS 20 + Bug Finding 10 + Edge-case 20;同一模型按推理档位与 harness 多次实测后取最高分配置入榜。注:各模型跑在各自 agent harness(Codex CLI / Claude Code / OpenCode 等)上,分数混杂模型与脚手架质量;计入综合分(权重 8%)与命中数,完整榜单见「AI Coding Daily」页 点击按此列排序":
        "AI Coding Daily total (0–70): independent third-party testing (aicodingdaily.com), 7 real projects and 27 prompts per model, total = Laravel 20 + React-TS 20 + Bug Finding 10 + Edge-case 20. When a model is tested at several effort levels and harnesses, its highest-scoring configuration enters the board. Note each model runs on its own agent harness (Codex CLI / Claude Code / OpenCode etc.), so scores mix model and scaffold quality; counts toward the composite (weight 8%) and coverage. Full board on the “AI Coding Daily” page · Click to sort by this column",
      "Vibe Code Bench 1-100(Vals AI)准确率(%):50 个真实 Web 应用迭代场景,从可运行应用起步、最多追加 10 轮产品需求,隐藏测试判定;全部模型跑在固定 OpenHands harness 上,跨模型可比性更好;另记每测试平均成本与耗时;计入综合分(权重 7%)与命中数 点击按此列排序":
        "Vibe Code Bench 1-100 (Vals AI) accuracy (%): 50 real web-app iteration scenarios that start from a working app and add up to 10 rounds of product requests, judged by hidden tests. All models run on a fixed OpenHands harness, so cross-model comparability is better. Also records average cost and time per test; counts toward the composite (weight 7%) and coverage · Click to sort by this column",

      // ===== 导航 =====
      "总览": "Overview",
      "亿模亿样": "Arena of Bias",
      "权威基准测试": "Reference Benchmarks",
      "套餐对比": "Plans",
      "Agent工具更新日志": "Agent tool changelog",

      // ===== 总览 =====
      "核心基准速览": "Benchmarks at a glance",
      "9 大基准榜单关键指标": "Key metrics across 9 leaderboards",
      "交叉模型矩阵": "Cross-benchmark matrix",
      "同一模型在多项基准中的成绩;默认按综合分降序,仅命中 ≥4 个基准组的模型参与排名并编号。点击表头可按该列排序,右侧搜索框可直接检索模型或厂商,开关控制显示范围、国产高亮与综合分显示。排名前 20 中性价比指数最高者标注「最佳性价比」。":
        "Each model's results across multiple benchmarks. Sorted by composite score; only models covering at least 4 benchmark groups are ranked and numbered. Click a header to sort by that column, use the search box to filter by model or vendor, and use the switches to widen the list, highlight Chinese vendors or show exact scores. Among the top 20 ranked models, the best value index is marked “Best value”.",
      "搜索模型或厂商…": "Search models or vendors…",
      "搜索交叉模型矩阵中的模型或厂商": "Search models or vendors in the cross-benchmark matrix",
      "清空搜索": "Clear search",
      "默认显示命中≥4个基准组且排名前30的模型与跻身前30区间的「参考」模型;勾选可展开全部在任一基准组有成绩的模型(含「参考」与「仅单榜」行)":
        "By default shows models covering at least 4 benchmark groups and ranked in the top 30, plus “reference” models inside that range. Tick to expand to every model with a score in any benchmark group (including “reference” and “single-board” rows).",
      "显示全部模型": "Show all models",
      "勾选后以醒目底色高亮国产厂商(智谱/月之暗面/深度求索/阿里/腾讯/MiniMax/字节/小米)的模型":
        "Highlight models from Chinese vendors (Zhipu / Moonshot / DeepSeek / Alibaba / Tencent / MiniMax / ByteDance / Xiaomi).",
      "高亮国产模型": "Highlight Chinese models",
      "默认仅显示梯队,勾选后在梯队旁显示精确综合分(榜内相对分:50 = 全池中位,不可跨日比较)":
        "Tiers are shown by default; tick to show the exact composite score next to each tier (board-relative: 50 = median of the pool, not comparable across days).",
      "显示综合分": "Show composite score",
      "阅读说明": "How to read",
      "先看要点;完整计分口径可展开": "Key points first; expand for the full scoring method",
      "展开详细口径与数据来源": "Show the full methodology and data sources",

      // 要点标签
      "梯队": "Tier",
      "综合分": "Composite score",
      "命中": "Coverage",
      "排序": "Ordering",
      "榜内名次": "Rank within a board",
      "性价比": "Value index",
      "行与徽标": "Rows & badges",
      "权重": "Weights",
      "各榜口径": "Per-board metrics",
      "梯队分配": "Tier sizes",
      "性价比换算": "Value calculation",
      "数据来源": "Data sources",

      // ===== 各榜单页共用 =====
      "个人私有题库": "Private benchmark",
      "月份:": "Month:",
      "月份": "Month",
      "默认显示全部模型,取消勾选仅显示命中≥2个榜单的模型":
        "Shows all models by default; untick to keep only models covering at least 2 leaderboards.",
      "模型综合分(按源排序)": "Composite score (source order)",
      "来源": "Source",
      "配置口径": "Configurations",
      "成本口径": "Cost basis",
      "计分与免责": "Scoring & disclaimer",
      "展开权重席位与费用说明": "Show the weight slot and cost notes",
      "权重席位": "Weight slot",
      "完整度": "Completeness",
      "费用示例": "Cost example",
      "分档": "Configurations",
      "指标": "Metrics",
      "展开抓取方式与区间说明": "Show the collection method and intervals",
      "抓取": "Collection",
      "区间": "Intervals",
      "分数口径": "Score basis",
      "混口径": "Mixed harnesses",
      "展开权重席位与成本说明": "Show the weight slot and cost notes",
      "成本/耗时": "Cost & time",
      "更新频率": "Update cadence",
      "口径优势": "Comparability",
      "展示范围": "Scope",
      "展开成本口径与排名说明": "Show the cost basis and ranking",
      "排名": "Ranking",
      "来源 codingplan.fyi": "Source: codingplan.fyi",
      "要点速览 · 权重与费用口径可展开": "Key points · expand for weights and cost basis",
      "要点速览 · 抓取方式可展开": "Key points · expand for the collection method",
      "要点速览 · 计分席位与口径可展开": "Key points · expand for the weight slot and metrics",
      "要点速览 · 精选模型与平台名单可展开": "Key points · expand for curated models and platforms",
      "要点速览 · 版本筛选与来源可展开": "Key points · expand for version filter and sources",
      "展开精选模型与平台名单": "Show curated models and platforms",
      "标签与范围": "Tags & scope",
      "口径": "Basis",
      "精选模型": "Curated models",
      "平台范围": "Platforms",

      // ===== llm2014 页 =====
      "个人私有滚动题库的长期跟踪评测,要求从零构建实际应用(MacOS/Flutter/Web/Game/Rust 等)并按通过情况评级。":
        "Long-running evaluation on a private rolling task suite: models build real applications from scratch (macOS / Flutter / Web / Game / Rust and more), graded by how far they get.",
      "思考": "Thinking",
      "单元格格式": "Cell format",
      "档位说明": "Grade levels",
      "项目说明": "Project codes",
      "1/A 代表扣分数/档位(数字越小越好)":
        "1/A means points deducted / grade (lower is better)",
      "2026-08 起等级单元格可含单任务测试成本,如 \"7/A+(90.52)\" 表示扣 7 分、A 档、成本 ¥90.52":
        "From 2026-08 a grade cell may also carry the per-task test cost, e.g. \"7/A+(90.52)\" = 7 points deducted, grade A, cost ¥90.52",
      "A档：几乎不犯错，只犯微小的 UI、交互类错误。":
        "A: almost no mistakes, only minor UI or interaction slips.",
      "B档：大概率会错，但只要描述错误现象，都可以1轮修复。":
        "B: likely to go wrong, but describing the symptom is enough to fix it in one round.",
      "C档：大概率错，但需要交互更多轮，模型能自主推进修复，无需人工提供辅助。":
        "C: likely wrong and needs several more rounds, but the model drives the fix itself without human help.",
      "D档：必须有人工提供大量 log、视觉描述，协助操作等才能修复问题。":
        "D: needs heavy human input — logs, visual descriptions, hands-on help — before the problem can be fixed.",
      "Failed：知识或方法论不够，即便有人帮助，也无法完成任务。":
        "Failed: lacks the knowledge or method to finish even with help.",
      "Pass：前代模型已经拿到 A，不再测试。":
        "Pass: an earlier model already reached A, so it is no longer tested.",
      "Skip：各方面原因，不进行测试。":
        "Skip: not tested, for various reasons.",
      "Pending：正在测试中。":
        "Pending: currently being tested.",
      "半档：同档位中，只有少数轮次出现问题，大部分情况表现良好时，会升半档，用 B+、C+ 来表示。":
        "Half grade: within a level, a model that only trips on a few rounds and behaves well otherwise moves up half a grade, written B+ or C+.",
      "F: Godot + 物理算法": "F: Godot + physics algorithms",
      "H: Web + 3D 建模": "H: Web + 3D modelling",
      "J: Web + 2D 动画": "J: Web + 2D animation",
      "K: 鸿蒙 App + C++ 本地插件": "K: HarmonyOS app + native C++ plugin",
      "L: Metal + 图形算法优化": "L: Metal + graphics algorithm optimisation",
      "M: 科学细节的教学可视化展示": "M: teaching visualisations of scientific detail",
      "N: Rust 桌面 App": "N: Rust desktop app",
      "表格列名括号内的字母代号(如 \"MacOS App(C)\")对应上述项目":
        "The letter codes in brackets after column names (e.g. \"MacOS App(C)\") refer to the projects above",
      "以各已测项目等级均值(A+=4.0、A=3.5 … D=0.5,Pass=4.0,Failed=0)为基础分,不归并档位":
        "Base score is the mean grade across tested projects (A+=4.0, A=3.5 … D=0.5, Pass=4.0, Failed=0), without merging levels",
      "保序口径:按源站排名强制分数严格递减、相邻名次至少差 1 分,消除「名次靠前但分数低」的倒挂":
        "Order-preserving basis: scores are forced to strictly decrease along the source ranking with at least 1 point between neighbours, removing the inversion where a higher rank has a lower score",
      "与名次矛盾处相邻模型合并取均值后按名次拉开 1 分/名;未受影响的模型保持基础分不变":
        "Where scores conflict with ranks, adjacent models are averaged and then spaced 1 point per rank; unaffected models keep their base score",

      // ===== ModelDial 页 =====
      "ModelDial Radar:第三方独立实测的编码智能体能力榜,按后端与测试 20% + 前端与交互 25% + 知识与推理 35% + 视觉审美 10% + 可维护性 10% 五轴加权,同一模型按推理强度分档多次测试后取最高分配置入榜,并保留外部产品参考条目。":
        "ModelDial Radar: an independent third-party capability board for coding agents, weighted across five axes — backend & testing 20% + frontend & interaction 25% + knowledge & reasoning 35% + visual aesthetics 10% + maintainability 10%. Each model is tested at several effort levels and its best configuration enters the board; external product reference entries are retained.",
      "综合分越高越好。": "Higher composite is better.",
      "综合分口径": "Composite basis",
      "后端与测试 20% + 前端与交互 25% + 知识与推理 35% + 视觉审美 10% + 可维护性 10%(五分项均 0-100);同一模型按推理强度分档多次测试,主榜取该模型最高分配置(与源站主榜一致)。外部产品条目保留在主榜,带「外部」标记。":
        "Backend & testing 20% + frontend & interaction 25% + knowledge & reasoning 35% + visual aesthetics 10% + maintainability 10% (each scored 0–100); each model is tested at several effort levels and the main board takes its best configuration (matching the source main board). Reference entries from external products stay on the board with an “External” badge.",
      "成本/耗时口径": "Cost / latency basis",
      "耗时与费用取源站五轴汇总口径;外部产品为自报耗时、费用常缺。本页各模型之间口径一致、可直接横向比较。":
        "Latency and cost use the source's five-axis total; external products report latency themselves and often have no cost. Values are consistent across models on this page and directly comparable.",
      "已计入总览综合分(计分组之一,权重 14%),该席位来自同期移出计分组的 NL2Repo-Bench(原 9%),2026-09-21 随「第三方实测」组整体上调(12%→16%),后随计分组扩展按比例回调至 14%;命中数分母为 8(八项基准)。上表为模型级 51 条(含外部产品 1 条),下方为全部 config 明细 102 条(不含 Bot)。":
        "Counted in the overview composite (one of the scored groups, weight 14%). The slot comes from NL2Repo-Bench (formerly 9%), which left the scored set at the same time; it rose with the whole “Third-party tests” group on 2026-09-21 (12%→16%) and was scaled back to 14% as the scored set expanded. The coverage denominator is 8. The table above holds 51 model-level rows (including 1 external product); the full config detail (102 rows, excluding bots) is below.",
      "口径说明 ↗": "Method ↗",
      "ModelDial 雷达(modeldial.com/radar)第三方独立实测,分后端与测试、前端与交互、知识与推理、视觉审美、可维护性五类评测,按 20% / 25% / 35% / 10% / 10% 加权为综合分(各 0-100)。":
        "ModelDial Radar (modeldial.com/radar) is independent third-party testing across backend & testing, frontend & interaction, knowledge & reasoning, visual aesthetics and maintainability, weighted 20% / 25% / 35% / 10% / 10% into a composite (each 0–100).",
      "同一模型按推理强度分档多次测试,主榜取最高分配置;「配置」列为源站条数,展开「全部配置明细」可看逐条成绩。源站「包含 Bot」默认关闭,本页同样不含 Bot。":
        "Each model is tested at several effort levels and the main board takes its best configuration. The “Configs” column is the source's row count; expand “All configurations” for per-row results. The source's “Include bots” toggle is off by default, and bots are excluded here too.",
      "源站主榜含外部产品参考条目(如 Gemini 4 Argon),带「外部」标记;源站标其 api_model_ranking_eligible=false,不与 API 模型排名同口径。":
        "The source main board includes external product reference entries (e.g. Gemini 4 Argon) with an “External” badge; the source marks api_model_ranking_eligible=false, so they are not on the same basis as the API model ranking.",
      "本页费用与耗时取源站五轴汇总口径;外部产品为自报耗时、费用常缺。各模型之间口径一致,可直接横向比较。":
        "Cost and latency here use the source's five-axis total; external products report latency themselves and often have no cost. Values are consistent across models and directly comparable.",
      "计入总览综合分(权重 14%)与命中数(分母 8);数据授权 CC BY 4.0,为快照,不代表绝对评价。":
        "Counts toward the overview composite (weight 14%) and coverage (denominator 8). Data is CC BY 4.0 licensed and is a snapshot, not an absolute verdict.",
      "该席位由移出计分组的 NL2Repo-Bench(原 9%)调整而来,2026-09-21 随「第三方实测」组整体上调(12%→16%),后随计分组扩展按比例回调至 14%;8 个计分组中第三方实测权重合计 69%、榜单基准 23%(按在场权重归一)。":
        "The slot comes from NL2Repo-Bench (formerly 9%), which left the scored set; it rose with the whole “Third-party tests” group on 2026-09-21 (12%→16%) and was scaled back to 14% as the scored set expanded. Across the 8 scored groups, third-party tests total 69% and leaderboard benchmarks 23% (normalized over the boards present).",
      "自 2026-09-20 起取消完整度奖励;在场榜单多少仅通过「缺失权重回流」体现。":
        "The completeness bonus was removed on 2026-09-20; how many boards a model covers now shows up only through missing weights flowing back.",
      "MiniMax-M3 本页约 $0.62(五轴汇总口径,费用完整度 partial);外部产品费用可能缺失,散点图仅画有费用条目。散点图 X 轴为参考费用(对数刻度),气泡面积编码五轴总耗时。":
        "MiniMax-M3 is about $0.62 here (five-axis total, cost coverage partial); external products may lack cost, so the scatter only plots entries with cost. The scatter's X axis is reference cost (log scale) and bubble area encodes five-axis total latency.",

      // ===== Arena of Bias 页 =====
      "前端作品社区盲评竞技场:同一道题匿名盲评两件作品,按 Bradley-Terry 估计偏好强度并折算到 Elo 刻度(1000 为平均水平)。":
        "A community blind-test arena for frontend builds: two builds for the same prompt are judged anonymously and Bradley-Terry estimates the preference strength, mapped onto an Elo scale (1000 = average).",
      "同一模型按推理强度分档多次测试,取最高分那一档计入综合分(权重 12%,属「第三方实测」组)。":
        "Each model is tested at several effort levels; its highest-scoring configuration counts toward the composite (weight 12%, in the “Third-party tests” group).",
      "推理强度": "Effort",
      "Elo 口径": "Elo basis",
      "同一道题匿名盲评两件作品,按 Bradley-Terry 估计偏好强度并折算到 Elo(1000 为平均水平,高 400 分约等于被偏好的机会高十倍);":
        "Two builds for the same prompt are judged anonymously and Bradley-Terry estimates the preference strength, mapped onto Elo (1000 = average; +400 points ≈ ten times the odds of being preferred);",
      " 为源站不确定区间。": " is the source's uncertainty interval.",
      "为源站不确定区间。": "is the source's uncertainty interval.",
      "字段说明": "Field notes",
      "「有效比较」为该档位的有效投票场次,「胜率」= 胜场 ÷ 有效比较,「覆盖任务」= 该模型在该档位参与过的题数,「档位」= 该模型在源站的配置(推理强度)条数;「暂定」表示源站标注有效比较不足 30 次。":
        "“Comparisons” is the number of valid votes for that configuration, “Win rate” = wins ÷ comparisons, “Tasks” is how many prompts the model entered at that configuration, and “Configs” is the model's configuration (effort) count on the source; “Provisional” marks source rows with fewer than 30 valid comparisons.",
      "入榜口径": "Board inclusion",
      "同一模型按推理强度分档多次测试,主榜取": "Each model is tested at several effort levels and the main board takes",
      "最高分那一档": "the highest-scoring configuration",
      "(与源站主榜一致);源站「非官方」条目(社区自跑的量化/改版权重与第三方 harness)已剔除。":
        "(matching the source main board); the source's “unofficial” entries (community-run quantised or modified weights and third-party harnesses) are excluded.",
      "已计入总览综合分(权重 10%,「第三方实测」组)与命中数,计分组共 9 组;本页展示 76 个模型、源站快照 35527 次有效比较 / 118 道题。":
        "Counted in the overview composite (weight 10%, in the “Third-party tests” group) and coverage across 9 scored groups; this page shows 76 models from a source snapshot of 35,527 valid comparisons over 118 prompts.",
      "亿模亿样 · 模型效果对比 ↗": "Arena of Bias · model comparison ↗",
      "公开 API ↗": "Public API ↗",
      "亿模亿样前端作品社区盲评:同题两件作品匿名盲评,按 Bradley-Terry 估计偏好强度折算 Elo(1000 为平均,高 400 分约等于被偏好机会高十倍),并给出 ±95% 区间。":
        "Arena of Bias is a community blind test for frontend builds: two builds for the same prompt are judged anonymously, Bradley-Terry estimates the preference strength and maps it to Elo (1000 = average; +400 points ≈ ten times the odds of being preferred), with a ±95% interval.",
      "同一模型按推理强度分档多次测试,主榜取最高分档;源站「非官方」条目(量化/改版权重、第三方 harness)已剔除。":
        "Each model is tested at several effort levels and the main board takes its highest-scoring configuration; the source's “unofficial” entries (quantised or modified weights, third-party harnesses) are excluded.",
      "有效比较为投票场次;胜率 = 胜场 ÷ 有效比较;覆盖任务为参与题数;有效比较不足 30 次标注「暂定」。":
        "Comparisons are vote counts; win rate = wins ÷ comparisons; tasks are the prompts entered; fewer than 30 comparisons is marked “Provisional”.",
      "计入总览综合分(权重 10%)与命中数(分母 8),2026-10-16 起接替下线的 AI 能力专项测试;数据为快照,不代表绝对评价。":
        "Counts toward the overview composite (weight 10%) and coverage (denominator 8), replacing the retired AI capability test from 2026-10-16. Data is a snapshot, not an absolute verdict.",
      "源站为客户端渲染的静态站,本站直接读取其公开接口": "The source is a client-rendered static site, so this site reads its public endpoint directly",
      ",按模型聚合后每日刷新。": " and aggregates per model on a daily refresh.",
      "Elo 与 ±95% 不确定区间均来自源站;主榜为配置聚合后的最高分档,「档位」列为该模型在源站的配置条数。":
        "Elo and the ±95% interval come from the source; the main board is the highest-scoring configuration after aggregating configs, and the “Configs” column is the model's configuration count on the source.",

      // ===== AI Coding Daily 页 =====
      "AI Coding Daily(Povilas Korop 个人实测站):每个模型在 7 个真实项目上跑 27 个 prompt(全站累计 2000+ 次运行),每个 prompt 从项目全新副本起步、模型看不到隐藏测试、无人工反馈;":
        "AI Coding Daily (independent site run by Povilas Korop): each model runs 27 prompts across 7 real projects (2,000+ runs on the site overall). Every prompt starts from a fresh copy of the project, the model cannot see the hidden tests, and there is no human feedback;",
      "总分为 Laravel 代码质量(20)+ React-TS 代码质量(20)+ Bug Finding(10)+ Edge-case Testing(20)四轴之和(0-70),另记每 prompt 平均成本与耗时。":
        "The total is the sum of four axes — Laravel code quality (20) + React-TS code quality (20) + Bug Finding (10) + Edge-case Testing (20) — out of 70, with average cost and time per prompt also recorded.",
      "分数越高越好,成本/耗时越低越优。": "Higher scores are better; lower cost and latency are better.",
      "总分 0-70 = Laravel 代码质量 20 + React-TS 代码质量 20 + Bug Finding 10 + Edge-case Testing 20;每个 prompt 从项目全新副本起步、模型看不到隐藏测试、无人工反馈,同一模型按推理档位与 harness 组合多次实测,主榜取最高总分配置。":
        "Total 0–70 = Laravel code quality 20 + React-TS code quality 20 + Bug Finding 10 + Edge-case Testing 20. Every prompt starts from a fresh copy of the project, the model cannot see the hidden tests, and there is no human feedback; each model is tested across effort levels and harnesses and the main board takes its highest-scoring configuration.",
      "混口径提醒": "Mixed harnesses",
      "每 prompt": "per-prompt",
      "平均值(非每模型总测试成本);源站对 8 个模型未给成本(显示「—」),这些条目不进散点图。":
        "averages (not a model's total testing cost); the source gives no cost for 8 models (shown as “—”) and those rows stay out of the scatter.",
      "已计入总览综合分(「第三方实测」计分组之一,权重 8%)与命中数(分母 8);上表为模型级 33 条,下方为全部实测配置明细 50 条。":
        "Counted in the overview composite (one of the “Third-party tests” groups, weight 8%) and coverage (denominator 8). The table above holds 33 model-level rows; all 50 tested configurations are below.",
      "方法论与计分公式 ↗": "Methodology and scoring ↗",
      "· 源站按周更新": "· updated weekly on the source",
      "AI Coding Daily(aicodingdaily.com),主办方为独立开发者 Povilas Korop,不是被评厂商之一;每个模型在 7 个真实项目上跑 27 个 prompt,源站累计 2000+ 次运行。":
        "AI Coding Daily (aicodingdaily.com) is run by independent developer Povilas Korop, who is not one of the evaluated vendors; each model runs 27 prompts across 7 real projects, 2,000+ runs in total on the source.",
      "总分 0-70 = Laravel 代码质量 20 + React-TS 代码质量 20 + Bug Finding 10 + Edge-case Testing 20;每个 prompt 从项目全新副本起步,模型看不到隐藏测试,无人工反馈。":
        "Total 0–70 = Laravel code quality 20 + React-TS code quality 20 + Bug Finding 10 + Edge-case Testing 20. Every prompt starts from a fresh copy of the project, the model cannot see the hidden tests, and there is no human feedback.",
      "的 agent harness 上(Codex CLI / Claude Code / OpenCode / Cursor / Devin / Antigravity / DeepSeek Harness),分数同时反映模型能力与脚手架质量。":
        "agent harness (Codex CLI / Claude Code / OpenCode / Cursor / Devin / Antigravity / DeepSeek Harness), so scores reflect both model and scaffold quality.",
      "计入总览综合分(权重 8%)与命中数(分母 8);数据为快照,不代表绝对评价。":
        "Counts toward the overview composite (weight 8%) and coverage (denominator 8). Data is a snapshot, not an absolute verdict.",
      "按站内判据(主办方是否被评厂商自身)独立第三方实测榜计入综合分;因 harness 逐模型混杂、且与同为编码 agent 实测的 ModelDial(14%)存在重复计量,取 8% 压低,与 2026-09-24 无机酸前端实测入组时的处理同法。":
        "Under this site's rule (is the organiser one of the evaluated vendors?), independent third-party boards count toward the composite. Because the harness varies by model and overlaps with ModelDial (14%), which also measures coding agents, the weight is lowered to 8% — the same treatment applied when the Wujisuan frontend test joined on 2026-09-24.",
      "平均值,不是每模型整轮测试成本;源站对部分模型未给成本(显示「—」),这些条目不进散点图但仍在下表。":
        "averages, not a model's cost for a full test round; the source gives no cost for some models (shown as “—”), which stay out of the scatter but remain in the table.",
      "源站按周更新,本页「源站发布」取页面 Last update 标注,「本站抓取」为每日刷新时间。":
        "The source updates weekly; “Source published” takes the page's Last update marker and “fetched” is this site's daily refresh time.",

      // ===== 权威基准页:页头说明 =====
      "以下权威基准数据按渠道优先级合并:基准官方实测榜 > 厂商官方发布(论文/发布页)> 第三方聚合与镜像,低层级仅补缺不覆盖;":
        "Reference benchmark data below is merged by channel priority: official measured board > vendor release (paper / release page) > third-party aggregators and mirrors, where lower tiers only fill gaps and never override;",
      "AI Release Tracker 聚合页(T3)亦按此只补各基准缺失模型。":
        "the AI Release Tracker aggregator (T3) likewise only fills models each benchmark is missing.",
      "其中 DeepSWE、Terminal-Bench(4.0/3.0/2.1,单章节内可切换版本查看,默认 4.0)与 ModelDial 雷达计入总览综合分与命中数(TB 优先以最高版本为代表,其中 2.1 为厂商发布/归一化自报分口径;":
        "DeepSWE, Terminal-Bench (4.0/3.0/2.1, switchable within the section, 4.0 by default) and ModelDial Radar count toward the overview composite and coverage (Terminal-Bench is represented by its highest version, and 2.1 uses vendor-published / normalised self-reported scores;",
      "ModelDial 见独立标签页),其余(APEX-1 / HLE / NL2Repo-Bench / ProgramBench / CursorBench / FrontierCode / AA Coding Agent Index / AutomationBench 及 TB-Science/OSWorld/ALE/ARC-AGI-3/BenchCAD)为展示型参考数据;":
        "see ModelDial's own tab); the rest (APEX-1 / HLE / NL2Repo-Bench / ProgramBench / CursorBench / FrontierCode / AA Coding Agent Index / AutomationBench plus TB-Science / OSWorld / ALE / ARC-AGI-3 / BenchCAD) are reference data for display;",
      "HLE 亦在总览矩阵「榜单基准」组尾以仅参考列展示(不计入综合分与命中数),NL2Repo-Bench 自 2026-09-19 起由计入改为仅展示。":
        "HLE also appears as a reference-only column at the end of the “Leaderboard benchmarks” group in the overview matrix (counted in neither the composite nor coverage), and NL2Repo-Bench moved from counted to display-only on 2026-09-19.",
      "某基准源站未发布新数据时,数字保持不变。":
        "When a benchmark's source publishes no new data, its numbers stay unchanged.",

      // ===== 权威基准页:章节小标(大纲卡片) =====
      "长程软件工程": "Long-horizon software engineering",
      "终端命令行任务": "Terminal command-line tasks",
      "科研工作流": "Research workflows",
      "长时程桌面计算机使用": "Long-horizon desktop computer use",
      "真实专业工作流": "Real professional workflows",
      "跨应用业务工作流": "Cross-app business workflows",
      "交互式智能体推理": "Interactive agent reasoning",
      "程序化 CAD 生成": "Procedural CAD generation",
      "专业工作产出": "Professional work output",
      "无工具口径": "No-tool basis",
      "长程仓库生成": "Long-horizon repository generation",
      "cleanroom 程序重建": "Cleanroom program reconstruction",
      "跨语言程序重写": "Cross-language program rewriting",
      "编码 Agent 实测": "Coding agent testing",
      "生产级代码质量": "Production-grade code quality",
      "编码 Agent 综合指数": "Coding agent composite index",
      "计": "Scored",
      "Pass@1 排行": "Pass@1 ranking",
      "成本 vs 成绩(气泡=步数)": "Cost vs score (bubble = steps)",
      "全部档位明细": "All configurations",
      "耗时/任务": "Time/task",

      // ===== 权威基准页:章节标签与版本切换 =====
      "长程软件工程 · 计入总览 · 主基准": "Long-horizon SWE · counts toward overview · primary",
      "终端命令行任务 · 计入总览 · 版本切换": "Terminal tasks · counts toward overview · versions",
      "科研工作流 · 仅展示": "Research workflows · display only",
      "长时程桌面计算机使用 · 仅展示": "Long-horizon desktop use · display only",
      "真实专业工作流 · 仅展示": "Real professional workflows · display only",
      "跨应用业务工作流 · 仅展示": "Cross-app business workflows · display only",
      "交互式智能体推理 · 仅展示": "Interactive agent reasoning · display only",
      "程序化 CAD 生成 · 仅展示": "Procedural CAD generation · display only",
      "专业工作产出 · 仅展示": "Professional work output · display only",
      "无工具口径 · 仅展示": "No-tool basis · display only",
      "长程仓库生成 · 仅展示": "Long-horizon repo generation · display only",
      "cleanroom 程序重建 · 仅展示": "Cleanroom reconstruction · display only",
      "跨语言程序重写 · 仅展示": "Cross-language rewriting · display only",
      "编码 Agent 实测 · 仅展示": "Coding agent testing · display only",
      "生产级代码质量 · 仅展示": "Production-grade code quality · display only",
      "编码 Agent 综合指数 · 仅展示": "Coding agent composite index · display only",
      "4.0 主榜": "4.0 main",
      "3.0 备选": "3.0 alt",
      "2.1 历史": "2.1 legacy",
      "Terminal-Bench 版本切换": "Terminal-Bench version switch",
      "Vision2Code(图像→CadQuery 代码,主指标 total = 64³ 体素 IoU×exec%)":
        "Vision2Code (image → CadQuery code; primary metric total = 64³ voxel IoU × exec%)",
      "Vision QA(渲染图数值几何推理)": "Vision QA (numeric geometric reasoning on renders)",
      "Code QA(CadQuery 源码数值几何推理)": "Code QA (numeric geometric reasoning on CadQuery source)",

      // ===== 套餐对比页 =====
      "codingplan.fyi「额度/价格对比」快速对比快照:按固定精选模型分列的套餐比价(月价 / 综合单价 / 实测月用量)。":
        "A quick-comparison snapshot of codingplan.fyi's quota/price view: plans side by side for fixed curated models (monthly price / blended unit price / measured monthly usage).",
      "综合单价(¥/亿 Token)与月用量为源站实测/计算值,按综合单价升序排列;完整套餐筛选与购买入口请前往源站查看。":
        "Blended unit price (¥ per 100M tokens) and monthly usage are measured or calculated by the source and sorted by unit price ascending; for full plan filtering and purchase links, see the source site.",
      "codingplan.fyi「额度/价格对比」的快速对比快照,按精选模型分列、每列按综合单价升序,随全站每日刷新。":
        "A quick-comparison snapshot of codingplan.fyi's quota/price view, one column per curated model sorted by blended unit price and refreshed with the rest of the site daily.",
      "综合单价为 ¥/亿 Token,统一按 95% 缓存命中 + 0.5% 输出构造;月价为连续包月价,按量调用行无月用量。":
        "Blended unit price is ¥ per 100M tokens, built on 95% cache hits + 0.5% output; monthly prices are recurring subscriptions, and usage-based rows have no monthly usage.",
      "[谷] / [峰] 为错峰/高峰时段档,[高速] 为高速服务档;默认仅精选平台,可切换显示全部;推广跳转链接已去除。":
        "[Off-peak] / [Peak] mark discounted or peak-hour slots and [Hi-speed] the high-speed service tier; by default only featured platforms show, with a switch to show all; referral links are stripped.",
      "DeepSeek V4 Flash 0731 / DeepSeek V4.1 Flash / GLM 5.3 Flash / GPT 5.6 Luna,以及甜品级、SOTA 两组多模型对比。":
        "DeepSeek V4 Flash 0731 / DeepSeek V4.1 Flash / GLM 5.3 Flash / GPT 5.6 Luna, plus two multi-model comparisons for sweet-spot and SOTA models.",
      "精选平台覆盖阿里·百炼 / 智谱 / 字节·方舟 / Codex / Claude / DeepSeek / Kimi / MiniMax / OpenCode 九家。价格为快照口径,可能滞后于平台官网;完整筛选与购买入口请前往":
        "Featured platforms cover nine providers: Alibaba Bailian / Zhipu / ByteDance Ark / Codex / Claude / DeepSeek / Kimi / MiniMax / OpenCode. Prices are snapshot values and may lag the platforms' own sites; for full filtering and purchase links see",

      // ===== 页头标题与榜单标签 =====
      "llm2014 Agentic 编程榜": "llm2014 Agentic Coding",
      "ModelDial 雷达": "ModelDial Radar",
      "第三方独立实测 · 综合能力分": "Independent third-party · composite capability",
      "成本 vs 综合分(气泡=耗时 · 费用为五轴汇总口径)":
        "Cost vs composite score (bubble = latency · cost on the five-axis total)",
      "全部配置明细": "All configurations",
      "亿模亿样 · 模型效果对比": "Arena of Bias · Model comparison",
      "前端作品社区盲评 Elo · 计入综合分 10%": "Community blind-test Elo for frontend builds · 10% of composite",
      "Elo 排行(前 20,完整榜单见下表;1000 为平均水平)":
        "Elo ranking (top 20; full board below; 1000 = average)",
      "独立第三方实测 · 7 项目 27 prompt · 计入综合分 8%":
        "Independent test · 7 projects, 27 prompts · 8% of composite",
      "成本 vs 总分(气泡=每 prompt 平均耗时)":
        "Cost vs total score (bubble = average time per prompt)",
      "全部实测配置明细": "All tested configurations",
      "Vals AI 独立实测 · 固定 OpenHands · 计入总览 7%":
        "Independent Vals AI test · fixed OpenHands · 7% of composite",
      "成本 vs 准确率(气泡=每测试平均耗时)":
        "Cost vs accuracy (bubble = average time per test)",
      "16 大权威基准": "16 reference benchmarks",
      "权威基准大纲预览": "Reference benchmark outline",
      "大纲预览": "Outline",
      "订阅套餐 · 额度/价格快速对比": "Coding plans · quota and price comparison",

      // ===== 意见反馈 =====
      "意见反馈": "Feedback",
      "反馈": "Feedback",
      "感谢你的反馈！提交后将跳转到 GitHub Issue 页面完成创建。":
        "Thanks for your feedback! Submitting opens a prefilled GitHub Issue.",
      "反馈类型": "Feedback type",
      "Bug 报告": "Bug report",
      "功能建议": "Feature request",
      "数据纠错": "Data correction",
      "其他": "Other",
      "反馈内容": "Details",
      "请描述你遇到的问题或建议...": "Describe the problem or suggestion…",
      "取消": "Cancel",
      "提交到 GitHub": "Submit on GitHub",

      // ===== 总览：基准卡片 =====
      "长程软件工程任务": "Long-horizon software engineering",
      "真实 GitHub issue → PR 的长程软件工程评测": "Long-horizon SWE on real GitHub issue → PR tasks",
      "任务": "tasks",
      "私有题库档位制评测,含单任务测试成本": "Private graded suite, including per-task test cost",
      "前端 Web 应用开发": "Frontend web app development",
      "LMArena 前端竞技场 · 匿名盲测 Elo": "LMArena frontend arena · anonymous blind-test Elo",
      "真实智能体会话 · 净提升": "Real agent sessions · net gain",
      "LMArena 真实智能体会话 · 净提升": "LMArena real agent sessions · net gain",
      "会话": "sessions",
      "前端作品社区盲评 Elo": "Community blind-test Elo for frontend builds",
      "前端作品社区盲评 Elo 竞技场": "Community blind-test Elo arena for frontend builds",
      "终端命令行任务 · 4.0/3.0/2.1": "Terminal command-line tasks · 4.0/3.0/2.1",
      "终端 Agent 评测 · 4.0 / 3.0 / 2.1 合并": "Terminal agent evaluation · 4.0 / 3.0 / 2.1 merged",
      "条目": "entries",
      "五轴加权 20/25/35/10/10": "Five-axis 20/25/35/10/10",
      "第三方实测 · 五轴 20/25/35/10/10": "Third-party tests · five-axis 20/25/35/10/10",
      "独立实测 · 7 项目 / 27 prompt": "Independent test · 7 projects / 27 prompts",
      "独立第三方实测 · 7 项目 27 prompt · 总分 70": "Independent test · 7 projects, 27 prompts · total 70",
      "独立实测 · 应用迭代 · 固定 OpenHands": "Independent test · app iteration · fixed OpenHands",
      "独立第三方实测 · 应用迭代 · 固定 OpenHands · 准确率":
        "Independent test · app iteration · fixed OpenHands · accuracy",
      "场景": "scenarios",
      "命中 ≥4 榜计分": "Composite (≥4 boards)",
      "榜单基准": "Leaderboard benchmarks",
      "第三方实测": "Third-party tests",
      "Terminal-Bench (解决率)": "Terminal-Bench (solve rate)",
      "ModelDial (综合分)": "ModelDial (composite)",
      "Agent Arena (净提升)": "Agent Arena (net gain)",
      "llm2014 (综合分/100)": "llm2014 (composite/100)",
      "亿模亿样 (Elo)": "Arena of Bias (Elo)",
      "AI Coding Daily (总分/70)": "AI Coding Daily (total/70)",
      "最佳性价比": "Best value",
      "综合分(/100)": "Composite (/100)",

      // ===== 表格表头与短标签 =====
      "模型": "Model",
      "样本数": "Samples",
      "厂商": "Vendor",
      "头名": "Leader",
      "更新": "Updated",
      "版本": "Version",
      "档位": "Configs",
      "配置": "Config",
      "组合": "Combo",
      "强度": "Effort",
      "步数": "Steps",
      "成本": "Cost",
      "耗时": "Latency",
      "费用": "Cost",
      "总分": "Total",
      "准确率": "Accuracy",
      "胜率": "Win rate",
      "覆盖任务": "Tasks",
      "状态": "Status",
      "有效比较": "Comparisons",
      "后端": "Backend",
      "前端": "Frontend",
      "知识": "Knowledge",
      "审美": "Aesthetic",
      "可维护": "Maintainability",
      "视觉审美": "Visual aesthetics",
      "可维护性": "Maintainability",
      "外部": "External",
      "外部产品": "External product",
      "分数": "Score",
      "说明": "Notes",
      "月用量": "Monthly usage",
      "Tokens/任务": "Tokens/task",
      "步数/任务": "Steps/task",
      "成本/任务": "Cost/task",
      "成本/测试": "Cost/test",
      "耗时/测试": "Time/test",
      "平均成本": "Avg cost",
      "输出tokens": "Output tokens",
      "参数量": "Params",
      "上下文": "Context",
      "API 价格": "API price",
      "发布日期": "Release date",
      "源站排名": "Source rank",
      "标准分": "Standard score",
      "解决率±CI": "Solve rate ±CI",
      "平台 / 模型 / 套餐": "Platform / model / plan",
      "综合单价 / 月用量": "Blended price / monthly usage",

      // 单元格取值 / 徽标
      "是": "Yes",
      "否": "No",
      "暂定": "Provisional",
      "开启": "On",
      "关闭": "Close",
      "国产": "CN",
      "参考": "Ref",
      "官方榜": "Official board",
      "厂商发布": "Vendor release",
      "vals 镜像": "vals mirror",
      "第三方": "Third-party",
      "官方": "Official",
      "最高（工具）": "Highest (with tools)",
      "最高（无工具）": "Highest (no tools)",
      "思考模式（工具）": "Thinking (with tools)",
      "思考模式（无工具）": "Thinking (no tools)",
      "思考模式 High（工具）": "Thinking High (with tools)",
      "思考模式 High（无工具）": "Thinking High (no tools)",
      "思考模式 Low（无工具）": "Thinking Low (no tools)",
      "思考模式 Medium（无工具）": "Thinking Medium (no tools)",
      "极高强度思考（工具）": "Extra-high thinking (with tools)",
      "极高强度思考（无工具）": "Extra-high thinking (no tools)",
      "深度思考模式（工具）": "Deep-thinking mode (with tools)",
      "深度思考模式（无工具）": "Deep-thinking mode (no tools)",
      "深度思考模式（无工具） · Text only": "Deep-thinking mode (no tools) · Text only",
      "思考模式 High（无工具） · Text only": "Thinking High (no tools) · Text only",
      "最高（无工具） · Text only": "Highest (no tools) · Text only",
      "思考档位未公开（工具）": "Effort undisclosed (with tools)",
      "思考档位未公开（无工具）": "Effort undisclosed (no tools)",
      "推荐": "Recommended",
      "快速": "Fast",
      "轻量/高性价比": "Light / best value",
      "新Max": "New Max",
      "新Pro": "New Pro",
      "新Lite": "New Lite",
      "按量": "Usage-based",
      "按量 API": "Usage-based API",
      "原站 ↗": "Source ↗",
      "查看源站 ↗": "View source ↗",
      "更新日志源站 ↗": "Changelog source ↗",
      "更新日志源站": "Changelog source",

      // ===== 厂商 / 平台 / 套餐 =====
      "阿里巴巴": "Alibaba",
      "字节跳动": "ByteDance",
      "腾讯云": "Tencent Cloud",
      "腾讯AI实验室": "Tencent AI Lab",
      "智谱AI": "Zhipu AI",
      "字节·方舟 Coding Plan": "ByteDance · Ark Coding Plan",
      "Allegretto（老套餐）": "Allegretto (legacy)",
      "Allegro（老套餐）": "Allegro (legacy)",
      "Moderato（老套餐）": "Moderato (legacy)",
      "甜品级模型": "Sweet-spot models",
      "头部级模型": "Frontier models",
      "精选模型价格与用量": "Curated model prices and usage",
      "仅显示精选平台": "Featured platforms",
      "显示所有平台": "All platforms",
      "对比平台范围": "Compare platform scope",
      "统一口径：有具体输入、输出、缓存价格的为计算得出，其余的除了Kimi套餐没有购买到之外，均为实测数据，实测尽量构造95%缓存命中率和0.5%的输出占比。":
        "Method: values are calculated where explicit input, output and cache prices exist; the rest are measured (except the Kimi plan, which could not be purchased), with tests built to approximate a 95% cache-hit rate and 0.5% output share.",
      "订阅套餐与按量 API 使用同一口径比较综合单价；用量为参考值，各模型额度不相加。":
        "Plans and pay-as-you-go APIs are compared on the same blended unit price; usage is indicative and model quotas are not additive.",
      "codingplan.fyi · 额度/价格对比 ↗": "codingplan.fyi · quota/price comparison ↗",

      // ===== 来源徽标 =====
      "数据来源:基准官方实测榜(T1)": "Source: official benchmark leaderboard (T1)",
      "数据来源:厂商官方发布成绩转录(T2)": "Source: vendor-published result transcript (T2)",
      "数据来源:vals.ai 官方镜像榜(T3)": "Source: official vals.ai mirror (T3)",
      "数据来源:第三方镜像 benchlm(T3)": "Source: third-party mirror benchlm (T3)",
      "数据来源:基准作者论文评测表(T2)": "Source: benchmark authors' paper table (T2)",
      "数据来源:第三方聚合站 llm-stats(T3)": "Source: third-party aggregator llm-stats (T3)",
      "数据来源:Qwen 官方博客/模型卡转录(T2)·effort 未标注、协议与官方实测榜不可比,仅补缺失模型,仅供参考":
        "Source: Qwen official blog/model-card transcript (T2) · effort unlabelled and protocol not comparable with the official leaderboard; fills missing models only, for reference",
      "数据来源:DeepSeek 官方更新页自测转录(T2)·官方标注 harness(TB 用 Claude Code、DeepSWE 用 Mini-SWE-V2),与基准官方实测榜不保证可比,仅补缺失模型,仅供参考":
        "Source: DeepSeek official update-page self-test transcript (T2) · vendor-specified harness (Claude Code for TB, Mini-SWE-V2 for DeepSWE); not guaranteed comparable with the official leaderboard; fills missing models only, for reference",
      "数据来源:腾讯混元官方发布页自测转录(T2)·DeepSWE 用 mini-SWE-agent,TB 4.0 / TB-Science 用 Claude Code 框架,与基准官方实测榜不保证可比,仅补缺失模型,仅供参考":
        "Source: Tencent Hunyuan official release-page self-test transcript (T2) · mini-SWE-agent for DeepSWE, Claude Code for TB 4.0 / TB-Science; not guaranteed comparable with the official leaderboard; fills missing models only, for reference",

      // ===== 图表轴名与气泡量纲(canvas 内文字,由 app.js 的 T() 在绘制前查表) =====
      "平均成本($)": "Avg cost ($)",
      "参考费用($)": "Reference cost ($)",
      "参考费用($后端轴)": "Reference cost ($, backend axis)",
      "每 prompt 平均成本($)": "Avg cost per prompt ($)",
      "每测试平均成本($)": "Avg cost per test ($)",
      "准确率(%)": "Accuracy (%)",
      "平均步数": "Avg steps",

      // ===== 总览矩阵:统计栏与徽标 =====
      "匹配": "Matched",
      "跨全部基准搜索": "searching every benchmark",
      "单榜": "Single",
      "仅单榜": "Single board",

      // ===== 引用弹窗 =====
      "纯文本": "Plain text",
      "复制": "Copy",
      "已复制": "Copied",
      "综合分为榜内相对分(50 = 全池中位),不可跨日或跨快照比较;数据来源按 官方实测 > 厂商发布 > 第三方聚合 合并,低层级仅补缺。引用时请保留数据快照日期。":
        "The composite is a board-relative score (50 = median of the pool) and is not comparable across days or snapshots; data is merged by priority of official measurement > vendor release > third-party aggregator, with lower tiers filling gaps only. Keep the snapshot date when citing.",

      // ===== 套餐页档位徽标(源站 qualifier 原样带方括号) =====
      "[谷]": "[Off-peak]",
      "[峰]": "[Peak]",
      "[Fast] [谷]": "[Fast] [Off-peak]",
      "[Fast] [峰]": "[Fast] [Peak]",
      "[32K<输入≤64K]": "[32K < input ≤64K]",

      // ===== 来源徽标(逐行) =====
      "AA 复测": "AA retest",
      "数据来源:Artificial Analysis 复测口径(T3,第三方自家 harness,分数口径偏严,仅供参考)":
        "Source: Artificial Analysis retest (T3, third-party's own harness, stricter scoring; reference only)",

      // ===== 通用提示 (title) =====
      "源站暂定:有效比较不足 30 次,排名与区间不稳定": "Provisional on source: fewer than 30 comparisons, rank and interval unstable",
      "源站标记": "Source flag",
      "并入总览综合分与命中数": "Counted in the overview composite and coverage",
      "多模型组合配置:无法归到单一模型,仅本榜展示":
        "Multi-model combo: cannot be attributed to a single model; shown on this board only",
      "codingplan.fyi 与 models.dev 均未匹配到该模型的 API 标价,性价比不可计算":
        "No API price found on codingplan.fyi or models.dev; value index unavailable",
      "点击按此列排序": "Click to sort by this column",
      "导出本表(当前排序与筛选后的视图)为 CSV": "Export this table (current sort and filters) as CSV",
      "命中 2-3 榜:按在场各榜的榜内稳健标准分加权(与排名行综合分同口径)与排名模型比对落入相应名次区间,不计算综合分、不计排名;序号计「—」;默认视图仅前30区间内显示,勾选「显示全部模型」可见全部":
        "2–3 boards: the model's board-relative robust z-scores are weighted (same basis as ranked composite) and placed in the matching rank band against ranked models. No composite and no rank are computed; the index shows “—”. Only bands inside the top 30 are shown by default; tick “Show all models” to see every one.",
      "Humanity's Last Exam 闭卷得分(%):2500 道专家撰写、无联网可检索解的前沿题,越高越好;权威基准·仅参考,不计入综合分与命中数,完整榜单见「权威基准测试」页":
        "Humanity's Last Exam closed-book score (%): 2,500 expert-written frontier questions that cannot be answered by searching the web; higher is better. Reference benchmark only — not counted in the composite or coverage. Full board on the “Reference Benchmarks” page.",
      "ModelDial 雷达五轴综合分(0-100):第三方独立实测,后端与测试 20% + 前端与交互 25% + 知识与推理 35% + 视觉审美 10% + 可维护性 10% 加权;同一模型按推理强度分档多次测试后取最高分配置入榜;外部产品条目带「外部」标记(源站标为非 API 排名);计入综合分(权重 14%)与命中数":
        "ModelDial Radar five-axis composite (0-100): independent third-party test weighted backend & testing 20% + frontend & interaction 25% + knowledge & reasoning 35% + visual aesthetics 10% + maintainability 10%; each model is tested at several effort levels and its best configuration enters the board; external product entries carry an “External” badge (marked as not in the API ranking); counted in the composite (weight 14%) and coverage.",

      // ===== 反馈 / 引用 =====
      "引用此榜单": "Cite this page",
      "切换到中文": "Switch to Chinese"
    },
    html: {
      // 含内联标签且中英语序不同的整块文案:key 为块内 textContent(空白折叠),
      // value 为整块 innerHTML。用于「加粗词卡在句子中间」、逐节点替换会把空格/语序拆坏的地方。
      "混口径提醒源站「Tested with」列显示各模型跑在各自的 agent harness 上(Claude Code / Codex CLI / OpenCode / DeepSeek Harness / Cursor / Devin / Antigravity),分数同时反映模型能力与脚手架质量,与站内其他基准不是同一协议;主办方为独立第三方(非被评厂商),故仍计入综合分,但按站内判据压低权重。":
        '<b>Mixed harnesses</b><span>The source\'s “Tested with” column shows each model running on <strong>its own</strong> agent harness (Claude Code / Codex CLI / OpenCode / DeepSeek Harness / Cursor / Devin / Antigravity), so scores reflect both model and scaffold quality and are not on the same protocol as other benchmarks here. The organiser is an independent third party (not one of the evaluated vendors), so it still counts toward the composite, but with a reduced weight under this site\'s criteria.</span>',
      "混口径源站「Tested with」列显示每个模型跑在各自的 agent harness 上(Codex CLI / Claude Code / OpenCode / Cursor / Devin / Antigravity / DeepSeek Harness),分数同时反映模型能力与脚手架质量。":
        '<b class="note-term">Mixed harnesses</b>The source\'s “Tested with” column shows each model running on <b>its own</b> agent harness (Codex CLI / Claude Code / OpenCode / Cursor / Devin / Antigravity / DeepSeek Harness), so scores reflect both model and scaffold quality.',
      "成本/耗时口径均为每 prompt 平均值(非每模型总测试成本);源站对 8 个模型未给成本(显示「—」),这些条目不进散点图。":
        '<b>Cost &amp; time basis</b><span>Values are <strong>per-prompt</strong> averages (not a model\'s total testing cost); the source gives no cost for 8 models (shown as “—”) and those rows stay out of the scatter.</span>',
      "成本/耗时均为每 prompt 平均值,不是每模型整轮测试成本;源站对部分模型未给成本(显示「—」),这些条目不进散点图但仍在下表。":
        '<b class="note-term">Cost &amp; time</b>Values are <b>per-prompt</b> averages, not a model\'s cost for a full test round; the source gives no cost for some models (shown as “—”), which stay out of the scatter but remain in the table.',
      "口径优势全部模型跑在固定 OpenHands harness 上(OpenHands),与 AI Coding Daily 的逐模型 harness 不同,跨模型可比性更好。":
        '<b>Comparability</b><span>All models run on <strong>a fixed</strong> OpenHands harness (OpenHands); unlike AI Coding Daily\'s per-model harnesses, this makes cross-model comparison cleaner.</span>',
      "口径优势全部模型跑在固定 OpenHands harness 上,与 AI Coding Daily 的逐模型 harness 不同,跨模型可比性更好。":
        '<b class="note-term">Comparability</b>All models run on <b>a fixed</b> OpenHands harness; unlike AI Coding Daily\'s per-model harnesses, this makes cross-model comparison cleaner.',
      "成本/耗时口径均为每测试平均值(美元 / 秒);源站对部分模型未给成本(显示「—」),这些条目不进散点图。":
        '<b>Cost &amp; time basis</b><span>Values are <strong>per-test</strong> averages (USD / seconds); the source gives no cost for some models (shown as “—”), which stay out of the scatter.</span>',
      "成本/耗时为每测试平均值(美元 / 秒);源站对部分模型未给成本(显示「—」),这些条目不进散点图。":
        '<b class="note-term">Cost &amp; time</b>Values are per-test averages (USD / seconds); the source gives no cost for some models (shown as “—”), which stay out of the scatter.',
      "入榜口径同一模型按推理强度分档多次测试,主榜取最高分那一档(与源站主榜一致);源站「非官方」条目(社区自跑的量化/改版权重与第三方 harness)已剔除。":
        '<b>Board inclusion</b><span>Each model is tested at several effort levels and the main board takes <strong>the highest-scoring configuration</strong> (matching the source main board); the source\'s “unofficial” entries (community-run quantised or modified weights and third-party harnesses) are excluded.</span>',
      "Elo 口径同一道题匿名盲评两件作品,按 Bradley-Terry 估计偏好强度并折算到 Elo(1000 为平均水平,高 400 分约等于被偏好的机会高十倍);±95% 为源站不确定区间。":
        '<b>Elo basis</b><span>Two builds for the same prompt are judged anonymously and Bradley-Terry estimates the preference strength, mapped onto Elo (1000 = average; +400 points ≈ ten times the odds of being preferred); <strong>±95%</strong> is the source\'s uncertainty interval.</span>',
      "[谷] / [峰] 为错峰/高峰时段档,[高速] 为高速服务档;默认仅精选平台,可切换显示全部;推广跳转链接已去除。":
        '<b class="note-term">Tags &amp; scope</b><b>[Off-peak]</b> / <b>[Peak]</b> mark discounted or peak-hour slots and <b>[Hi-speed]</b> the high-speed service tier; by default only featured platforms show, with a switch to show all; referral links are stripped.',
      "精选平台覆盖阿里·百炼 / 智谱 / 字节·方舟 / Codex / Claude / DeepSeek / Kimi / MiniMax / OpenCode 九家。价格为快照口径,可能滞后于平台官网;完整筛选与购买入口请前往 <a href=\"https://www.codingplan.fyi/?view=usage\" target=\"_blank\" rel=\"noopener\">codingplan.fyi ↗</a>。":
        '<b class="note-term">Platforms</b>Featured platforms cover nine providers: Alibaba Bailian / Zhipu / ByteDance Ark / Codex / Claude / DeepSeek / Kimi / MiniMax / OpenCode. Prices are snapshot values and may lag the platforms\' own sites; for full filtering and purchase links see <a href="https://www.codingplan.fyi/?view=usage" target="_blank" rel="noopener">codingplan.fyi ↗</a>.'
    },
    rules: RULES
  };
})();
