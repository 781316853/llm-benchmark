// 主控:标签路由与五个页面的渲染入口。
(function () {
  "use strict";
  var D = window.D, CH = window.CH, CMP = window.CMP;
  var state = { tab: "overview", llmMonth: null,
    sortKey: null, sortDir: null, // sortKey 为 null 时使用默认综合排序
    highlightDomestic: true, // 总览页「高亮国产模型」开关:默认开启,高亮国产厂商模型
    showScore: false, // 总览页「显示综合分」开关:默认隐藏,仅显示梯队
    // 各页"仅跨榜模型"开关:false=仅显示命中≥2榜的模型,true=显示全部
    // 总览默认收起(聚焦跨榜命中),其余三页默认展开全部模型
    showAll: { overview: false, deepswe: true, vibe: true, llm: true } };
  // 国产厂商集合(来自 MODEL_MAP.domesticVendors):用于总览页判定模型是否为国产
  var DOMESTIC = {};
  ((window.MODEL_MAP && window.MODEL_MAP.domesticVendors) || []).forEach(function (v) { DOMESTIC[v] = 1; });
  var fmtK = function (n) { return n >= 1000 ? (n / 1000).toFixed(0) + "k" : n; };
  var esc = function (s) { return String(s == null ? "" : s).replace(/[&<>\"]/g, function (c) {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '\"': "&quot;" }[c]; }); };
  var dot = function (c) { return '<span style="display:inline-block;width:9px;height:9px;border-radius:50%;background:' + (c || "#888") + ';margin-right:7px;vertical-align:middle"></span>'; };
  // "NEW" 徽标(近 7 天内首次上榜的模型);仅对判定为新的模型追加在模型名后
  var newBadge = function () { return ' <span class="badge-new">NEW</span>'; };
  // 版本徽标:区分 DeepSWE v1.1(默认每日刷新)与 v1.0(历史快照)数据来源
  var verBadge = function (v) {
    return v === "v1.0" ? ' <span class="badge-v10">v1.0</span>' : ' <span class="badge-v11">v1.1</span>';
  };
  // Terminal-Bench 版本徽标:标注该值取自的榜单版本(优先级 4.0>3.0>2.1)
  var tbVerBadge = function (v) {
    if (!v) return "";
    var cls = v === "4.0" ? "badge-tb40" : (v === "3.0" ? "badge-tb30" : "badge-tb21");
    return ' <span class="' + cls + '" title="榜单版本 v' + esc(v) + '">v' + esc(v) + '</span>';
  };

  // 三基准描述文案(对齐设计稿卡片信息层级);按 benchSummary 的 key 索引
  var BENCH_DESC = {
    deepswe: "长程软件工程任务评测,覆盖真实 GitHub issue 到 PR 的完整解决链路",
    vibecode: "从零构建 Web 应用的端到端评测,衡量模型独立完成项目的能力",
    llm2014: "个人私有题库的档位制评测,从零构建实际应用并按通过情况评级(含单任务测试成本)",
    webdev: "LMArena Code Arena 前端竞技场,社区匿名盲测 Elo,衡量模型生成可交互 Web 应用的能力",
    aicap: "atmeplz 四方向榜:前端(中式建筑/体素山水/前端网页/黑洞模拟)与后端(超级 MES)方向分,各占综合分权重 10%",
    tbench: "斯坦福/Laude 终端命令行 Agent 评测,在真实 Shell 环境中解决编译/配置/运维等长程任务,计入综合分权重 10%"
  };

  // 单元格 HTML:等级分沿用等级着色,成本用较小的次要色展示
  function lmCellHtml(c) {
    var inner;
    if (c.status === "grade" && c.cost != null) {
      inner = esc(c.raw.replace(/\(\s*\d+(?:\.\d+)?\s*\)$/, "")) + ' <span class="cell-cost">¥' + c.cost + '</span>';
    } else {
      inner = esc(c.raw);
    }
    return '<span class="' + gradeClass(c) + '">' + inner + '</span>';
  }

  // 通用表格构造;headerClasses 可选(与 headers 等长),给对应 <th> 附加类(如 "num" 使表头与数据同对齐)
  function fillTable(id, headers, rowsHtml, headerClasses) {
    var t = document.getElementById(id);
    var head = "<thead><tr>" + headers.map(function (h, i) {
      var cls = headerClasses && headerClasses[i] ? ' class="' + headerClasses[i] + '"' : "";
      return "<th" + cls + ">" + h + "</th>";
    }).join("") + "</tr></thead>";
    t.innerHTML = head + "<tbody>" + rowsHtml.join("") + "</tbody>";
  }
  // 仅设置表头(用于含 data-key/排序指示符的自定义表头);headHtml 为完整的一个或多个 <tr>;tbody 单独填充
  function fillTableHead(id, headHtml) {
    var t = document.getElementById(id);
    var thead = t.querySelector("thead");
    if (thead) thead.innerHTML = headHtml;
    else t.insertAdjacentHTML("afterbegin", "<thead>" + headHtml + "</thead>");
    if (!t.querySelector("tbody")) t.insertAdjacentHTML("beforeend", "<tbody></tbody>");
  }

  // llm 等级 -> CSS class
  function gradeClass(cell) {
    if (cell.status === "pass") return "g-Pass";
    if (cell.status === "failed") return "g-Failed";
    if (cell.status === "skip") return "g-Skip";
    if (cell.status === "pending") return "g-Pending";
    if (cell.status === "grade") {
      var g = cell.grade;
      return { "A+": "g-Ap", A: "g-A", "B+": "g-Bp", B: "g-B", "C+": "g-Cp", C: "g-C", "D+": "g-Dp", D: "g-D" }[g] || "";
    }
    return "";
  }

  // 总览矩阵表的列定义:key=排序键;val=取值函数;type=数据类型;bench=是否评测列(排序时过滤无值);
  // grp=分组表头归属(bench 列须按 grp 连续排列,供两级表头 colspan 合并:"基准"=第三方公开榜单,"实测"=站主实测)
  var MATRIX_COLS = [
    { key: "model",   label: "模型", type: "text", bench: false, val: function (r) { return r.id; } },
    { key: "vendor",  label: "厂商", type: "text", bench: false, val: function (r) { return r.vendor; } },
    // 梯队:综合分按金字塔权重动态分档(S+~E);作为默认排序主键,bench=false 表示排序时不过滤无值行
    // 排序取值用 -_posKey 取负:posKey 越小越好,取负后"降序=更好在前",与默认序一致;无 _posKey 时兜底综合分
    { key: "composite", label: "梯队", type: "num", bench: false,
      val: function (r) { return -(r._posKey != null ? r._posKey : CMP.composite(r)); } },
    { key: "deepswe", label: "DeepSWE (Pass@1)", type: "num", bench: true, grp: "基准",  val: function (r) { return r.deepswe ? r.deepswe.pass1 : null; } },
    { key: "vibe",    label: "Vibe Code (准确率)", type: "num", bench: true, grp: "基准", val: function (r) { return r.vibe ? r.vibe.score : null; } },
    // Code Arena · WebDev 单值列(Elo 原值):排序时仅显示有值的模型
    { key: "webdev", label: "WebDev (Elo)", type: "num", bench: true, grp: "基准",
      val: function (r) { return (r.webdev && r.webdev.score != null) ? r.webdev.score : null; } },
    // Terminal-Bench 多版本(4.0/3.0/2.1)单值列:得分%,版本内取最高、跨版本取优先级最高版本(4.0>3.0>2.1);计入综合分与命中数;完整条目见「权威基准测试」页
    { key: "tbench", label: "Terminal-Bench (解决率)", type: "num", bench: true, grp: "基准",
      val: function (r) { return r.tbench ? r.tbench.score : null; } },
    { key: "llm",     label: "llm2014 (综合分/100)", type: "num", bench: true, grp: "实测", val: function (r) { return (r.llm && r.llm.norm != null) ? r.llm.norm : null; } },
    // AI 能力专项测试:前端/后端方向分合并单列展示,单元格并列两个方向分;排序用在场均值
    { key: "aicap", label: "AI 能力 (前/后端)", type: "num", bench: true, grp: "实测",
      val: function (r) {
        var vals = [];
        if (r.aicapFe) vals.push(r.aicapFe.score);
        if (r.aicapBe) vals.push(r.aicapBe.score);
        return vals.length ? vals.reduce(function (a, b) { return a + b; }, 0) / vals.length : null;
      } },
    { key: "hits",    label: "命中", type: "num", bench: false, val: function (r) { return r.benchCount; } }
  ];

  // 计算点击某列后的排序方向:新列首击一律降序(高->低),同列在升序/降序间翻转
  function nextSortDir(key) {
    if (state.sortKey !== key) return "desc";
    return state.sortDir === "asc" ? "desc" : "asc";
  }

  // 对矩阵行执行 过滤(评测列去无值)+ 排序;返回新数组,不改原数据
  function sortedMatrixRows(rows) {
    if (!state.sortKey) return rows; // null => 默认综合排序,沿用 CMP.matrix 原序
    var col = MATRIX_COLS.filter(function (c) { return c.key === state.sortKey; })[0];
    if (!col) return rows;
    var list = rows.slice();
    // 评测列排序时仅保留该列有值的模型
    if (col.bench) list = list.filter(function (r) { return col.val(r) != null; });
    list.sort(function (a, b) {
      var va = col.val(a), vb = col.val(b);
      if (col.type === "text") return String(va).localeCompare(String(vb), "zh");
      return (va == null ? -1 : va) - (vb == null ? -1 : vb); // 默认升序(低→高)
    });
    if (state.sortDir === "desc") list.reverse(); // 降序(高→低):反转升序结果
    return list;
  }

  // 跨榜命中映射:{ canonId -> benchCount }(基于当前 llm 月份)
  function hitMap() {
    var u = D.unified(state.llmMonth), m = {};
    Object.keys(u).forEach(function (k) { m[k] = u[k].benchCount; });
    return m;
  }
  // 按 showAll 过滤:list=待过滤项; getId=取 canonical id; showAll=真则全量,否则仅命中≥2榜
  // 过滤后若为空(理论上不会)自动回退全量,保证页面不空
  function filterHits(list, getId, showAll) {
    if (showAll) return list;
    var m = hitMap();
    var kept = list.filter(function (it) { return (m[getId(it)] || 0) >= 2; });
    return kept.length ? kept : list;
  }

  // ===== 总览页 AI 热点总结(按类型分组,手动滚动) =====
  // 从 window.NEWS 读取近 2 天新闻;按类型分组展示(每类型≤5 条),容器 overflow-y 滚动由 CSS 控制
  function renderNews() {
    var inner = document.getElementById("newsTickerInner");
    if (!inner) return;
    var NEWS = window.NEWS || {};
    var items = (NEWS.items || []).slice().sort(function (a, b) {
      return (a.date || "") < (b.date || "") ? 1 : ((a.date || "") > (b.date || "") ? -1 : 0);
    });
    // 顶部提示:更新频率 + 保留天数 + 更新时间
    var hint = document.getElementById("newsHint");
    if (hint) {
      var base = "每日更新 2 次 · 仅保留最近 " + (NEWS.retentionDays || 2) + " 天";
      hint.textContent = NEWS.updated ? (base + " · 更新于 " + NEWS.updated) : base;
    }
    if (!items.length) {
      inner.innerHTML = '<div class="news-empty">暂无热点新闻,等待每日数据刷新…</div>';
      return;
    }
    // 按类型分组(展示顺序取数据文件中的 types 列表)
    var order = NEWS.types || ["模型发布", "公司动态", "技术研究", "政策与安全", "行业动态"];
    var groups = {};
    items.forEach(function (it) { (groups[it.type] = groups[it.type] || []).push(it); });
    var row = function (it) {
      var date = (it.date || "").slice(5); // YYYY-MM-DD -> MM-DD
      var brief = (it.brief && it.brief !== it.title) ? ' <span class="news-brief">' + esc(it.brief) + '</span>' : "";
      return '<div class="news-item">' +
        '<span class="news-date">' + esc(date) + '</span>' +
        '<span class="news-text" title="' + esc(it.title) + '"><b class="news-title">' + esc(it.title) + '</b>' + brief + '</span>' +
        (it.source ? '<span class="news-source">' + esc(it.source) + '</span>' : "") +
        '<a class="news-link" href="' + esc(it.url) + '" target="_blank" rel="noopener">详情 ↗</a>' +
        '</div>';
    };
    var html = order.filter(function (t) { return groups[t] && groups[t].length; }).map(function (t) {
      return '<div class="news-group">' +
        '<div class="news-group-head">' + esc(t) + '<span class="news-group-count">' + groups[t].length + ' 条</span></div>' +
        groups[t].map(row).join("") +
        '</div>';
    }).join("");
    inner.innerHTML = html; // 手动滚动,无自动动画
  }

  // ===== 1) 总览 =====
  function renderOverview() {
    renderNews();
    // 卡片
    var sum = D.benchSummary();
    document.getElementById("benchCards").innerHTML = sum.map(function (b) {
      return '<div class="bench-card">' +
        '<h3>' + esc(b.name) + ' <span class="bc-tag">' + esc(b.tag) + '</span></h3>' +
        '<p class="bc-desc">' + esc(BENCH_DESC[b.key] || "") + '</p>' +
        '<div class="bc-stats">' + b.stats.map(function (s) { return '<div class="bc-stat"><b>' + esc(s.v) + '</b><span> ' + esc(s.l) + '</span></div>'; }).join("") + '</div>' +
        '<div class="bc-top">头名:' + esc(b.top) + '</div>' +
        '<div class="bc-tag">更新 ' + esc(b.updated) + ' · <a href="' + b.url + '" target="_blank" rel="noopener">原站 ↗</a></div>' +
        '</div>';
    }).join("");

    // 矩阵表:先分配梯队(基于全量排名行(命中≥3榜),按原始综合分),再选取展示行:排名行按综合分
    // 排序取前30;恰好命中两榜的「双榜」模型不计算综合分,按各榜成绩与排名行模型比对落入相应
    // 名次间隔,仅在前30区间内混排计入(序号计「—」,不占前30名额),第 30 个排名行之后的行
    // (含双榜)一律截断;勾选"显示全部"则展示所有模型
    var matrixRows = CMP.matrix(state.llmMonth);
    CMP.assignTiers(matrixRows.filter(function (r) { return r.benchCount >= 3; }));
    var allRows = sortedMatrixRows(matrixRows);
    var rows = allRows;
    if (!state.showAll.overview) {
      rows = [];
      var ranked = 0;
      for (var ri = 0; ri < allRows.length && ranked < 30; ri++) {
        var r0 = allRows[ri];
        if (r0.benchCount >= 3) { rows.push(r0); ranked++; }
        else if (r0.benchCount === 2) rows.push(r0);
      }
    }
    if (!rows.length) rows = allRows;
    // 排名计数器:仅对参与排名的行(命中≥3榜)递增;双榜行不参与排名,序号列固定「—」
    var rankNo = 0;
    // AI 能力单元格:前端/后端方向分同字号并列(如 96.5 / 96),以不同颜色区分,
    // 任一侧缺失则只显示另一侧(颜色保留,便于区分方向)
    var aicapCell = function (r) {
      var fe = r.aicapFe ? r.aicapFe.score : null;
      var be = r.aicapBe ? r.aicapBe.score : null;
      if (fe == null && be == null) return "—";
      if (fe == null) return '<span class="ac-be">' + be + '</span>';
      if (be == null) return '<span class="ac-fe">' + fe + '</span>';
      return '<span class="ac-fe" title="前端">' + fe + '</span>' +
        '<span class="ac-sep"> / </span>' +
        '<span class="ac-be" title="后端">' + be + '</span>';
    };
    var html = rows.map(function (r) {
      // 双榜行:恰好命中 2 个基准组,按综合分混排插入展示但不计排名、不计入前30限制
      var inserted = r.benchCount === 2;
      // DeepSWE 分数后标数据版本(v1.1/v1.0),便于区分历史与当前数据来源
      // 分数后追加单次任务成本($),仅当存在有效数字成本时显示
      var dsCost = (r.deepswe && typeof r.deepswe.cost === "number" && r.deepswe.cost > 0)
        ? ' <span class="cell-cost">$' + r.deepswe.cost + '</span>' : "";
      var ds = r.deepswe ? r.deepswe.pass1 + "%" + verBadge(r.deepswe.version) + dsCost : "—";
      var vcCost = (r.vibe && typeof r.vibe.cost === "number" && r.vibe.cost > 0)
        ? ' <span class="cell-cost">$' + r.vibe.cost + '</span>' : "";
      var vc = r.vibe ? r.vibe.score + "%" + vcCost : "—";
      var lm = (r.llm && r.llm.norm != null) ? r.llm.norm.toFixed(2) : "-";
      // Code Arena · WebDev 单值显示:原始 Elo + 可选 ±ci,后附折算综合分(norm 0-100)
      var wd = r.webdev ? r.webdev.score : null;
      var wdCi = (r.webdev && typeof r.webdev.ci === "number")
        ? '<span class="cell-cost">±' + r.webdev.ci + '</span>' : "";
      var wdNorm = (r.webdev && r.webdev.norm != null) ? r.webdev.norm.toFixed(1) : null;
      // Terminal-Bench 单元格:解决率% + 版本徽标 + agent/effort 小字(title 悬浮);悬停显示版本/Agent 与强度
      var tbMeta = [];
      if (r.tbench && r.tbench.version) tbMeta.push("v" + r.tbench.version);
      if (r.tbench && r.tbench.agent) tbMeta.push(r.tbench.agent);
      if (r.tbench && r.tbench.effort) tbMeta.push(r.tbench.effort);
      var tbTitle = tbMeta.length ? ' title="' + esc(tbMeta.join(" · ")) + '"' : "";
      var tbHtml = r.tbench
        ? '<span' + tbTitle + '>' + r.tbench.score + '%</span>' + tbVerBadge(r.tbench.version) +
          ((r.tbench.agent || r.tbench.effort) ? ' <span class="cell-cost">' + esc([r.tbench.agent, r.tbench.effort].filter(Boolean).join("·")) + '</span>' : "")
        : "—";
      // NEW 判定:基于 DeepSWE/Vibe/llm2014/Terminal-Bench 四基准
      var nw = D.isNewAny(r.deepswe && r.deepswe.name, r.vibe && r.vibe.name, r.llm && r.llm.name, r.tbench && r.tbench.name);
      // 国产高亮:开关开启且该模型厂商属于国产清单时,加行高亮类与「国产」徽标
      var dom = state.highlightDomestic && DOMESTIC[r.vendor];
      // row-hit(跨榜命中)、row-new(新上榜)、row-domestic(国产高亮)可并存;
      // CSS 中 row-domestic 置后,确保用户主动开启时国产高亮视觉优先
      var cls = (r.benchCount >= 3 ? "row-hit " : "") + (inserted ? "row-two " : "") + (nw ? "row-new " : "") + (dom ? "row-domestic" : "");
      var domBadge = dom ? ' <span class="badge-domestic">国产</span>' : "";
      var insertedBadge = inserted ? ' <span class="badge-two" title="仅命中两榜:按各榜成绩与排名模型比对落入相应名次区间,不计算综合分、不计排名;序号计「—」;仅前30区间内显示">仅双榜</span>' : "";
      // 序号列:参与排名的行按出现顺序编号;双榜行固定「—」,不参与排序
      return '<tr class="' + cls.trim() + '">' +
        '<td class="num">' + (inserted ? "—" : ++rankNo) + '</td>' +
        '<td>' + dot(r.color) + esc(r.id) + (nw ? newBadge() : "") + domBadge + insertedBadge + '</td>' +
        '<td>' + esc(r.vendor) + '</td>' +
        // 梯队徽标:默认仅显示梯队标签;showScore 开启时追加精确综合分
        // 双榜行不作梯队分档展示:梯队列显示「—」并直接给出综合分数字(综合分仍按同一口径计算)
        (function () {
          // 双榜行不计算综合分:梯队列仅显示「—」
          if (inserted) return '<td class="num"><span class="tier-na">—</span></td>';
          var score = CMP.composite(r).toFixed(1);
          var t = r.tier || "E";
          var tc = t.replace("+", "p"); // S+ -> Sp,用作 CSS 类名
          var badge = '<span class="tier-badge tier-' + tc + '" title="综合分 ' + score + '">' + t + '</span>';
          var num = state.showScore ? ' <span class="tier-score">' + score + '</span>' : "";
          return '<td class="num">' + badge + num + '</td>';
        })() +
        '<td class="num">' + ds + '</td>' +
        '<td class="num">' + vc + '</td>' +
        '<td class="num">' + (wd != null ? wd + wdCi + (wdNorm != null ? '<span class="cell-cost"> / ' + wdNorm + '</span>' : "") : "—") + '</td>' +
        '<td class="num">' + tbHtml + '</td>' +
        '<td class="num">' + lm + '</td>' +
        '<td class="num">' + aicapCell(r) + '</td>' +
        '<td class="num">' + r.benchCount + '/6</td></tr>';
    });
    // 两级表头:第 1 行为分组行(「榜单基准」「实测」colspan 合并)与非评测列的 rowspan 纵跨格;
    // 第 2 行仅评测列(bench)的列名。可点击排序逻辑不变,激活列显示方向指示符;
    // 默认综合排序(sortKey=null)时,综合分列视为激活(降序),让默认排序依据可见
    var GROUP_TITLES = {
      "基准": "榜单基准:第三方公开基准榜单(DeepSWE / Vibe Code / WebDev / Terminal-Bench 4.0/3.0/2.1)",
      "实测": "实测:站主实测口径(llm2014 私有题库 / AI 能力专项测试)"
    };
    function thAttr(c, extra) {
      var isDefaultComposite = state.sortKey === null && c.key === "composite";
      var active = state.sortKey === c.key || isDefaultComposite;
      var dir = state.sortKey === null ? "desc" : state.sortDir;
      var ind = active ? ' <span class="sort-ind">' + (dir === "asc" ? "▲" : "▼") + '</span>' : "";
      var classes = [];
      if (active) classes.push("sort-active");
      if (c.type === "num") classes.push("num");
      if (extra) classes.push(extra);
      var cls = classes.length ? ' class="' + classes.join(" ") + '"' : "";
      return '<th data-key="' + c.key + '"' + cls + ' title="点击按此列排序">' + c.label + ind + '</th>';
    }
    // 第 1 行:非评测列 rowspan=2 纵跨两行(可排序);评测列按 grp 连续段输出分组格(colspan=组内列数)
    var grpRow = '<th class="num" rowspan="2">#</th>', subRow = "";
    MATRIX_COLS.forEach(function (c, i) {
      if (!c.bench) {
        grpRow += thAttr(c).replace("<th ", '<th rowspan="2" ');
        return;
      }
      var span = 1;
      while (i + span < MATRIX_COLS.length && MATRIX_COLS[i + span].grp === c.grp) span++;
      if (i === 0 || MATRIX_COLS[i - 1].grp !== c.grp) {
        grpRow += '<th class="th-grp" colspan="' + span + '" title="' + GROUP_TITLES[c.grp] + '">' +
          (c.grp === "基准" ? "榜单基准" : "实测") + '</th>';
      }
      subRow += thAttr(c, "th-sub");
    });
    fillTableHead("matrixTable", '<tr class="grp-row">' + grpRow + '</tr><tr class="col-row">' + subRow + '</tr>');
    document.querySelector("#matrixTable tbody").innerHTML = html.join("");
    // 动态行数提示(显示全部模型开关状态;默认视图含混排的双榜模型,排名数与双榜数分开统计)
    var note;
    if (state.showAll.overview) {
      note = '当前显示全部 ' + rows.length + ' 个命中≥2榜的模型(仅命中一榜的模型不在总览矩阵展示,详见各榜单页)';
    } else {
      var dualCnt = rows.filter(function (r) { return r.benchCount === 2; }).length;
      note = '当前显示命中≥3个基准组且排名前 ' + (rows.length - dualCnt) + ' 的模型,以及 ' + dualCnt +
        ' 个跻身前30区间的「双榜」模型(恰好命中 2 个基准组,按各榜成绩与排名模型比对落入相应区间,不计算综合分、不计排名,序号计「—」;其余双榜模型可勾选下方"显示全部"查看)。';
    }
    // 国产高亮开启时,追加国产模型数量提示
    if (state.highlightDomestic) {
      var domCnt = rows.filter(function (r) { return DOMESTIC[r.vendor]; }).length;
      note += ' · 当前高亮 ' + domCnt + ' 个国产模型。';
    }
    // Terminal-Bench(4.0/3.0/2.1)合并为一个基准组计入综合分与命中数;其余权威基准(见「权威基准测试」页)仅展示不计入
    note += ' Terminal-Bench 4.0/3.0/2.1 三版合并为一个基准组计入综合分(权重 10%)与命中数,优先以最高版本为代表(4.0>3.0>2.1,版本内取各模型最优成绩),单元数字旁附版本标签;TB-Science / OSWorld / Agents\' Last Exam / ARC-AGI-3 / BenchCAD / GPQA Diamond / HLE / NL2Repo-Bench / ProgramBench 仅在「权威基准测试」页展示。';
    document.getElementById("overviewNote").textContent = note;
  }

  // ===== 2) DeepSWE =====
  function renderDeepSwe() {
    var src = D.src.deepswe || {};
    // 仅跨榜模型过滤(命中<2榜默认收起;勾选"显示全部"恢复)
    var ms = filterHits(D.deepSwe(), function (m) { return m.canon.id; }, state.showAll.deepswe);
    var total = D.deepSwe().length;
    document.getElementById("deepsweDesc").textContent = src.desc || "";
    // 柱状(pass1 升序,使最高在上);模型名后缀版本简标便于区分数据来源
    var sorted = ms.slice().sort(function (a, b) { return a.pass1 - b.pass1; });
    // Pass@1 排行按模型数量动态加高,避免行距过小导致模型名/数值文字重叠
    var dsH = Math.min(760, Math.max(380, ms.length * 26 + 90));
    var dsBarEl = document.getElementById("dsBar");
    if (dsBarEl) { dsBarEl.style.height = dsH + "px"; var dsInst = CH.inst("dsBar"); if (dsInst) dsInst.resize(); }
    CH.apply("dsBar", CH.barOption(sorted.map(function (m) { return m.name + (m.version === "v1.0" ? " ·v1.0" : ""); }),
      sorted.map(function (m) { return m.pass1; }), "#2D9D78", "%", { max: 80 }));
    // 散点:成本 vs pass1,气泡=步数;tooltip 名称带版本后缀
    CH.apply("dsScatter", CH.scatterOption(
      ms.map(function (m) { return [m.cost, m.pass1, m.steps, m.name + "(" + (m.version || "v1.1") + ")"]; }),
      { xName: "平均成本($)", yName: "Pass@1(%)", bubble: true, bubbleDiv: 6, yMax: 80 }));
    // 表格:模型名后挂版本徽章(v1.1/v1.0);NEW 徽标在其后
    var html = ms.map(function (m, i) {
      var nw = D.isNewRaw("deepswe", m.name);
      return '<tr class="' + (nw ? "row-new" : "") + '"><td class="rank">' + (i + 1) + '</td><td>' + dot(m.canon.color) + esc(m.name) + verBadge(m.version) + (nw ? newBadge() : "") + '</td>' +
        '<td>' + esc(m.effort) + '</td><td class="num">' + m.pass1 + '±' + m.ci + '%</td>' +
        '<td class="num">$' + m.cost + '</td><td class="num">' + fmtK(m.outTok) + '</td><td class="num">' + m.steps + '</td></tr>';
    });
    fillTable("dsTable", ["#", "模型", "强度", "Pass@1", "平均成本", "输出tokens", "步数"], html,
      ["", "", "", "num", "num", "num", "num"]);
    // 脚注:说明 v1.1(每日刷新)+ v1.0(历史快照)的构成与计数
    var vc = D.deepSweVersionCounts();
    document.getElementById("dsNote").textContent = "来源:" + src.url + " · v1.1 更新 " + (src.updated || "") + " · v1.0 历史快照(" + ((window.DEEPSWE_V10 && window.DEEPSWE_V10.captured) || "") + ") · " +
      "共 " + total + " 个模型(v1.1: " + vc.v11 + " / v1.0 独有: " + vc.v10 + ")" + (src.stats ? " · v1.1 " + src.stats.tasks + " 任务 / " + src.stats.repos + " 仓库" : "") +
      (state.showAll.deepswe ? "" : " · 仅显示命中≥2榜的 " + ms.length + "/" + total + " 个模型");
  }

  // ===== 4) Vibe Code =====
  function renderVibeCode() {
    var src = D.src.vibe || {};
    // 仅跨榜模型过滤(命中<2榜默认收起;勾选"显示全部"恢复)
    var ms = filterHits(D.vibeCode(), function (m) { return m.canon.id; }, state.showAll.vibe);
    var total = D.vibeCode().length;
    document.getElementById("vcDesc").textContent = (src.desc || "") + (src.note ? "(" + src.note + ")" : "");
    // 柱状图仅显示 Top 20(数据量大时避免拥挤;表格仍展示全部),升序使最高在上
    var sorted = ms.slice().sort(function (a, b) { return a.score - b.score; });
    var topN = sorted.slice(-20);
    // left 加宽到 180 并允许标签换行,确保"模型·harness"完整显示不被截断
    CH.apply("vcBar", CH.barOption(topN.map(function (m) { return m.name + "·" + m.harness; }),
      topN.map(function (m) { return m.score; }), "#2D9D78", "%", { max: 100, left: 180, labelSize: 11 }));
    // 散点显示全部系统(分布趋势),数据多时关闭标签避免重叠
    // bubbleDiv 调大至 220,使高延迟系统气泡明显变小,避免互相遮挡
    CH.apply("vcScatter", CH.scatterOption(
      ms.map(function (m) { return [m.cost, m.score, m.latencyS, m.name + "·" + m.harness]; }),
      { xName: "单测成本($)", yName: "准确率(%)", bubble: true, bubbleDiv: 220, yMax: 100, label: false }));
    var html = ms.map(function (m, i) {
      var nw = D.isNewRaw("vibe", m.name);
      return '<tr class="' + (nw ? "row-new" : "") + '"><td class="rank">' + (i + 1) + '</td><td>' + dot(m.canon.color) + esc(m.name) + (nw ? newBadge() : "") + '</td>' +
        '<td>' + esc(m.harness) + '</td><td class="num">' + m.score + '±' + m.ci + '%</td>' +
        '<td class="num">$' + m.cost + '</td><td class="num">' + Math.round(m.latencyS / 60) + ' 分</td></tr>';
    });
    fillTable("vcTable", ["#", "模型", "Harness", "准确率", "单测成本", "延迟"], html,
      ["", "", "", "num", "num", "num"]);
    document.getElementById("vcNote").textContent = "来源:" + src.url + " · 版本 " + (src.version || "") + " · 更新 " + (src.updated || "") + (src.note ? " · " + src.note : "") +
      (state.showAll.vibe ? "" : " · 仅显示命中≥2榜的 " + ms.length + "/" + total + " 个系统");
  }

  // ===== 5) llm2014 =====
  function renderLlm2014(month) {
    var src = D.src.llm || {};
    var mo = D.llmMonth(month);
    state.llmMonth = month;
    if (!mo) return;
    document.getElementById("lmDesc").textContent = src.desc || "";
    var xLabels = mo.projects;
    // 排名按原站 CSV 行序(rank 升序),不再按均值重排
    var allRows = mo.rows.slice().sort(function (a, b) { return (a.rank || 0) - (b.rank || 0); });
    // 仅跨榜模型过滤(命中<2榜默认收起;勾选"显示全部"恢复)
    var rows = filterHits(allRows, function (r) { return r.canon.id; }, state.showAll.llm);

    // 按行数动态加高综合分柱状图,行数多时避免标签拥挤
    var lmH = Math.min(760, Math.max(380, rows.length * 26 + 90));
    ["lmBar"].forEach(function (id) {
      var el = document.getElementById(id);
      if (!el) return;
      el.style.height = lmH + "px";
      var inst = CH.inst(id);
      if (inst) inst.resize();
    });

    // 综合分柱(百分制:含完成率折扣,跳过任务过多的小样本均值会被拉低)
    var bsorted = rows.slice().sort(function (a, b) { return (a.norm || 0) - (b.norm || 0); });
    CH.apply("lmBar", CH.barOption(bsorted.map(function (r) { return r.model; }),
      bsorted.map(function (r) { return r.norm == null ? 0 : Number(r.norm.toFixed(2)); }), "#2D9D78", "", { max: 100 }));

    // 明细表
    var html = rows.map(function (r, i) {
      var nw = D.isNewRaw("llm", r.model);
      var tds = '<td class="rank">' + (i + 1) + '</td><td>' + dot(r.canon.color) + esc(r.model) + (nw ? newBadge() : "") + '</td>';
      r.cells.forEach(function (c) {
        tds += '<td class="num">' + lmCellHtml(c) + '</td>';
      });
      tds += '<td class="num">' + (r.norm != null ? r.norm.toFixed(2) : "-") + '</td>';
      tds += '<td>' + esc(r.ide) + '</td><td class="num">' + (r.think ? "是" : "否") + '</td>';
      return '<tr class="' + (nw ? "row-new" : "") + '">' + tds + '</tr>';
    });
    // 表头:各 project 列与综合分/思考为数值列,加 num 类居中;#、模型、IDE/CLI 为文本列
    var lmHeaders = ["#", "模型"].concat(xLabels).concat(["综合分(/100)", "IDE/CLI", "思考"]);
    var lmHeadCls = ["", ""].concat(xLabels.map(function () { return "num"; })).concat(["num", "", "num"]);
    fillTable("lmTable", lmHeaders, html, lmHeadCls);
    // 底部说明按结构分块:标签固定在左,内容为数组时逐行展示(档位/项目等长文案分行更易读)
    // 档位/项目说明优先用数据快照携带的源站官方文案(notes,随每日刷新同步);
    // 旧数据文件无 notes 时回退手写摘述
    var lmNotes = src.notes;
    var gradeFallback = [
      "A档:几乎不犯错,只犯微小的 UI、交互类错误。",
      "B档:大概率会错,但只要描述错误现象,都可以1轮修复。",
      "C档:大概率错,但需要交互更多轮,模型能自主推进修复,无需人工提供辅助。",
      "D档:必须有人工提供大量 log、视觉描述,协助操作等才能修复问题。",
      "Failed:知识或方法论不够,即便有人帮助,也无法完成任务。",
      "Pass:前代模型已经拿到 A,不再测试。",
      "Skip:各方面原因,不进行测试。",
      "Pending:正在测试中。",
      "半档：同档位中,只有少数轮次出现问题,大部分情况表现良好时,会升半档,用 B+、C+ 来表示。"
    ];
    var gradeLines = gradeFallback, projectLines = null;
    if (lmNotes && lmNotes.grades && lmNotes.projects) {
      // 源站文案惯例:A-D 档以"档："开头,Pass/Skip/Pending 以"："开头,Failed 无前缀
      gradeLines = lmNotes.grades.map(function (g) {
        return /^[：:]|^档/.test(g.t) ? g.k + g.t : g.k + "：" + g.t;
      });
      if (lmNotes.halfGrade) gradeLines = gradeLines.concat(["半档：" + lmNotes.halfGrade]);
      projectLines = lmNotes.projects.map(function (p) { return p.k + ": " + p.t; });
    }
    var noteParts = [
      { k: "来源", v: src.url + " · 月度 " + month },
      { k: "单元格格式", v: [
        (lmNotes && lmNotes.cellFormat ? lmNotes.cellFormat : "扣分数/档位") + "(数字越小越好)",
        "2026-08 起等级单元格可含单任务测试成本,如 \"7/A+(90.52)\" 表示扣 7 分、A 档、成本 ¥90.52"
      ] },
      { k: "档位说明", v: gradeLines }
    ];
    if (projectLines) {
      noteParts.push({ k: "项目说明", v: projectLines.concat(["表格列名括号内的字母代号(如 \"MacOS App(C)\")对应上述项目"]) });
    }
    noteParts.push({ k: "综合分", v: [
      "以各已测项目等级均值(A+=4.0、A=3.5 … D=0.5,Pass=4.0,Failed=0)为基数,不归并档位",
      "月内归一化:均值最高 100 分、最低 0 分,中间按等级差距线性分布",
      "均值完全相同的模型按源站排名先后微调区分(每退一名 -0.01),保证人人不同分"
    ] });
    // 单条说明渲染:字符串内容单行跟随标签;数组内容套 note-body 逐行展示,折行对齐
    var noteLineHtml = function (p) {
      var body = Array.isArray(p.v)
        ? '<div class="note-body">' + p.v.map(function (l) { return "<div>" + esc(l) + "</div>"; }).join("") + "</div>"
        : esc(p.v);
      return '<div class="note-line"><b>' + esc(p.k) + '</b>' + body + '</div>';
    };
    var noteHtml = noteParts.map(noteLineHtml).join("");
    if (!state.showAll.llm) {
      noteHtml += '<div class="note-line note-sub">仅显示命中≥2榜的 ' + rows.length + '/' + allRows.length + ' 个模型(勾选「显示全部模型」可展开)。</div>';
    }
    document.getElementById("lmNote").innerHTML = noteHtml;
  }

  // ===== 6) AI 能力专项测试(四方向榜 · 前端/后端,独立榜单不计入综合分) =====
  function renderAICap() {
    var src = D.src.aicap || {};
    var data = D.aicap();
    document.getElementById("aicapDesc").textContent = (src.desc || "") +
      (src.runCount ? " · " + src.runCount + " 次完整运行" : "") +
      (src.updated ? " · 更新 " + src.updated : "");
    // 柱状:前端/后端各一张,升序使最高在上;最多展示 Top 25 防止标签拥挤
    [["capFeBar", data.frontend], ["capBeBar", data.backend]].forEach(function (pair) {
      var el = document.getElementById(pair[0]);
      if (!el) return;
      var ms = pair[1];
      var sorted = ms.slice().sort(function (a, b) { return a.score - b.score; }).slice(-25);
      var h = Math.min(760, Math.max(380, ms.length * 26 + 90));
      el.style.height = h + "px";
      var inst0 = CH.inst(pair[0]);
      if (inst0) inst0.resize();
      CH.apply(pair[0], CH.barOption(sorted.map(function (m) { return m.name; }),
        sorted.map(function (m) { return m.score; }), "#2D9D78", "%", { max: 100, left: 190, labelSize: 11 }));
    });
    // 表格:模型名(厂商色圆点 + effort·platform 次要信息)/ 厂商 / 方向分 / 参考
    function dirTable(id, models) {
      var html = models.map(function (m, i) {
        var sub = [m.effort, m.platform].filter(Boolean).join(" · ");
        return '<tr><td class="rank">' + (i + 1) + '</td><td>' + dot(m.canon.color) + esc(m.name) +
          (sub ? ' <span class="cell-cost">' + esc(sub) + '</span>' : "") + '</td>' +
          '<td>' + esc(m.vendorDisplay || m.vendor) + '</td><td class="num">' + m.score + '</td>' +
          '<td class="num">' + (m.pct != null ? m.pct + "%" : "—") + '</td></tr>';
      });
      fillTable(id, ["#", "模型", "厂商", "方向分", "参考"], html, ["", "", "", "num", "num"]);
    }
    dirTable("capFeTable", data.frontend);
    dirTable("capBeTable", data.backend);
    // 脚注:来源 + 方向权重说明
    var wfmt = function (w) { return (w || []).map(function (x) { return x[0] + " " + x[1]; }).join(" + "); };
    var fe = (src.directions && src.directions.frontend) || {};
    var be = (src.directions && src.directions.backend) || {};
    document.getElementById("aicapNote").innerHTML =
      '<div class="note-line"><b>来源</b><a href="' + esc(src.boardUrl || "") + '" target="_blank" rel="noopener">' + esc(src.boardUrl || "") + ' ↗</a></div>' +
      '<div class="note-line"><b>更新</b>' + esc(src.updated || "") + ' · ' + esc(src.runCount || 0) + ' 次完整运行</div>' +
      '<div class="note-line"><b>前端方向分</b>' + esc(wfmt(fe.weight)) + '</div>' +
      '<div class="note-line"><b>后端方向分</b>' + esc(wfmt(be.weight)) + '</div>' +
      '<div class="note-line"><b>说明</b>已计入综合分(前端/后端各 10%)并进入总览交叉矩阵(合并单列、前后端方向分并列展示);方向分 0-100,越高越好。</div>';
  }

  // ===== 7) 权威基准测试(10 大权威基准) =====
  // Terminal-Bench(4.0/3.0/2.1)合并为一个基准组计入总览/综合分/命中数;其余 9 源(TB-Science/OSWorld/ALE/ARC-AGI-3/BenchCAD/GPQA/HLE/NL2Repo/ProgramBench)仅本页展示
  function authSectionHtml(head, tag, url, tableHtml, noteHtml) {
    return '<section class="auth-block">' +
      '<h3 class="auth-title">' + esc(head) + ' <span class="tag">' + esc(tag) + '</span>' +
      (url ? ' <a class="auth-link" href="' + esc(url) + '" target="_blank" rel="noopener">原站 ↗</a>' : '') +
      '</h3>' + tableHtml +
      (noteHtml ? '<p class="source-note">' + noteHtml + '</p>' : '') +
      '</section>';
  }
  function renderAuthority() {
    var S = D.src;
    var html = "";
    // 1) Terminal-Bench 多版本(4.0/3.0/2.1):合并为一个基准组计入总览,优先以最高版本为代表
    var tbVersions = [
      { ver: "4.0", tag: "计入总览 · 当前主榜", url: (S.tbench || {}).url || "", tasks: "66 个任务(校准资源并移除饱和任务),当前主站 agent×model 榜单" },
      { ver: "3.0", tag: "计入总览 · 备选参考", url: "https://www.tbench.ai/news/terminal-bench-3-0", tasks: "74 个任务(含更长周期/多容器/GPU 环境),全网权威快照(agent×model)" },
      { ver: "2.1", tag: "计入总览 · 历史版本", url: "https://llm-stats.com/benchmarks/terminal-bench-2.1", tasks: "89 个任务;llm-stats 模型级 0-1 归一化自报分(换算为%)" }
    ];
    var tbRowsByVer = {}, tbMs = D.tbenchByVersion("4.0");
    tbVersions.forEach(function (t) {
      var ms = D.tbenchByVersion(t.ver);
      tbRowsByVer[t.ver] = ms.map(function (m, i) {
        return '<tr><td class="rank">' + (i + 1) + '</td><td>' + dot(m.canon.color) + esc(m.model) +
          (m.effort ? ' <span class="cell-cost">' + esc(m.effort) + '</span>' : "") + '</td>' +
          '<td>' + esc(m.agent) + '</td><td class="num">' + m.score + '±' + (m.ci != null ? m.ci : "—") + '%</td>' +
          '<td class="num">' + esc(m.date || "—") + '</td><td class="num">' + esc(m.tokens || "—") + '</td>' +
          '<td class="num">' + esc(m.cost || "—") + '</td></tr>';
      });
      var is4 = t.ver === "4.0";
      var chartHtml = is4
        ? '<div class="chart-box"><h3>解决率排行(agent×model 全条目)</h3><div id="authTBBar" class="chart"></div></div>'
        : "";
      var tableHtml = '<div class="table-wrap"><table id="authTB' + (is4 ? "" : t.ver.replace(".", "")) + 'Table" class="data-table"></table></div>';
      html += authSectionHtml("Terminal-Bench " + t.ver, "终端命令行任务 · " + t.tag, t.url,
        chartHtml + tableHtml,
        '来源:' + esc(t.url) + ' · 更新 ' + esc((S.tbench || {}).updated || "") +
        ' · ' + t.tasks + ',得分越高越好。三版合并为一个基准组计入总览综合分与命中数,优先以最高版本为代表(4.0>3.0>2.1);其中 2.1 为归一化自报分,口径见上方来源注。');
    });
    // 2) Terminal-Bench-Science 0.1
    var tbs = S.tbscience || {};
    var tbsMs = D.tbScience();
    var tbsRows = tbsMs.map(function (m, i) {
      return '<tr><td class="rank">' + (i + 1) + '</td><td>' + dot(m.canon.color) + esc(m.model) + '</td>' +
        '<td>' + esc(m.agent) + '</td><td class="num">' + m.score + (m.ci != null ? '±' + m.ci + '%' : "%") + '</td></tr>';
    });
    html += authSectionHtml("Terminal-Bench-Science 0.1", "科研工作流 · 仅展示", tbs.announcementUrl || tbs.url,
      '<div class="table-wrap"><table id="authTBScienceTable" class="data-table"></table></div>',
      '来源:' + esc(tbs.url || "") + '(官方:' + esc(tbs.announcementUrl || "") + ') · 版本 ' + esc(tbs.version || "") + ' · 更新 ' + esc(tbs.updated || "") +
      ' · 70 个来自真实科研流程的任务(每任务 3 次独立试验),解决率越高越好。本榜仅展示,不计入综合分。');
    // 3) OSWorld 2.0
    var os = S.osworld || {};
    var osMs = D.osworld();
    var osRows = osMs.map(function (m, i) {
      return '<tr><td class="rank">' + (i + 1) + '</td><td' + (m.note ? ' title="' + esc(m.note) + '"' : "") + '>' + dot(m.canon.color) + esc(m.system) + '</td>' +
        '<td class="num">' + m.score + '%</td><td>' + esc(m.org || "—") + '</td>' +
        '<td class="num">' + esc(m.reported || "—") + '</td>' +
        '<td>' + (m.url ? '<a href="' + esc(m.url) + '" target="_blank" rel="noopener">来源 ↗</a>' : "—") + '</td></tr>';
    });
    html += authSectionHtml("OSWorld 2.0", "长时程桌面计算机使用 · 仅展示", os.officialUrl || os.url,
      '<div class="table-wrap"><table id="authOSWorldTable" class="data-table"></table></div>',
      '来源:' + esc(os.url || "") + ' · 更新 ' + esc(os.updated || "") +
      ' · 108 个长时程桌面工作流(人类中位耗时约 1.6 小时),部分得分(检查点达成比例)越高越好;二进制完成率极低,故按部分得分排序。本榜仅展示,不计入综合分。');
    // 4) Agents' Last Exam
    var ale = S.lastexam || {};
    var aleMs = D.lastExam();
    var aleRows = aleMs.map(function (m, i) {
      return '<tr><td class="rank">' + (i + 1) + '</td><td>' + dot(m.canon.color) + esc(m.model) + '</td>' +
        '<td>' + esc(m.org || "—") + '</td><td class="num">' + m.score + '%</td>' +
        '<td class="num">' + esc(m.size || "—") + '</td><td class="num">' + esc(m.context || "—") + '</td></tr>';
    });
    html += authSectionHtml("Agents' Last Exam", "真实专业工作流 · 仅展示", ale.officialUrl || ale.url,
      '<div class="table-wrap"><table id="authLastExamTable" class="data-table"></table></div>',
      '来源:' + esc(ale.url || "") + '(官方:' + esc(ale.officialUrl || "") + ') · 更新 ' + esc(ale.updated || "") +
      ' · 1500+ 个真实专业工作流任务(55 子行业),Pass@1 为完美得分运行占比,越高越好。本榜仅展示,不计入综合分。');
    // 5) ARC-AGI-3
    var ar = S.arcagi3 || {};
    var arMs = D.arcagi3();
    var arRows = arMs.map(function (m, i) {
      return '<tr><td class="rank">' + (i + 1) + '</td><td>' + dot(m.canon.color) + esc(m.model) + '</td>' +
        '<td class="num">' + m.score + '%</td><td class="num">' + esc(m.size || "—") + '</td>' +
        '<td class="num">' + esc(m.context || "—") + '</td><td class="num">' + esc(m.cost || "—") + '</td></tr>';
    });
    html += authSectionHtml("ARC-AGI-3", "交互式智能体推理 · 仅展示", ar.officialUrl || ar.url,
      '<div class="table-wrap"><table id="authARCAGI3Table" class="data-table"></table></div>',
      '来源:' + esc(ar.url || "") + '(官方:' + esc(ar.officialUrl || "") + ') · 更新 ' + esc(ar.updated || "") +
      ' · 135 个交互式游戏环境,RHAE(相对人类行动效率,人类基线 100%)越高越好。本榜仅展示,不计入综合分。');
    // 6) BenchCAD
    var bc = S.benchcad || {};
    var bcData = D.benchcad();
    function bcTable(id, rows, cols, headCls) {
      var body = rows.map(function (m, i) {
        return '<tr><td class="rank">' + (i + 1) + '</td><td>' + dot(m.canon.color) + esc(m.model) +
          (m.think ? ' <span class="cell-cost">' + esc(m.think) + '</span>' : "") + '</td><td>' + esc(m.org || "—") + '</td>' +
          cols.map(function (c) { return '<td class="num">' + (m[c] != null ? m[c] : "—") + '</td>'; }).join("") + '</tr>';
      });
      fillTable(id, ["#", "模型", "厂商"].concat(cols), body, ["", "", ""].concat(headCls));
    }
    var v2cRows = bcData.vision2code.rows.slice().sort(function (a, b) { return b.total - a.total; });
    var vqaRows = bcData.visionqa.rows.slice().sort(function (a, b) { return b.total - a.total; });
    var cqaRows = bcData.codeqa.rows.slice().sort(function (a, b) { return b.total - a.total; });
    html += authSectionHtml("BenchCAD", "程序化 CAD 生成 · 仅展示", bc.boardUrl || bc.url,
      '<div class="table-wrap"><h4 class="auth-sub">Vision2Code(图像→CadQuery 代码,主指标 total = 64³ 体素 IoU×exec%)</h4>' +
      '<table id="authBCV2CTable" class="data-table"></table></div>' +
      '<div class="table-wrap"><h4 class="auth-sub">Vision QA(渲染图数值几何推理)</h4><table id="authBCVQATable" class="data-table"></table></div>' +
      '<div class="table-wrap"><h4 class="auth-sub">Code QA(CadQuery 源码数值几何推理)</h4><table id="authBCCQATable" class="data-table"></table></div>',
      '来源:' + esc(bc.url || "") + '(榜单:' + esc(bc.boardUrl || "") + ') · 抓取于 ' + esc(bc.updated || "") +
      ' · 17,900 个执行验证的 CadQuery 程序 / 106 类工业零件 / 47 项工程标准(ISO/DIN/EN/ASME/IEC);total 为 0-1 综合分,越高越好。本榜仅展示,不计入综合分。');
    // 7) GPQA Diamond
    var gp = S.gpqa || {};
    var gpMs = D.gpqa();
    var gpRows = gpMs.map(function (m, i) {
      return '<tr><td class="rank">' + (i + 1) + '</td><td>' + dot(m.canon.color) + esc(m.model) + '</td>' +
        '<td>' + esc(m.org || "—") + '</td><td class="num">' + m.score + '%</td>' +
        '<td class="num">' + esc(m.size || "—") + '</td><td class="num">' + esc(m.context || "—") + '</td>' +
        '<td class="num">' + esc(m.cost || "—") + '</td></tr>';
    });
    html += authSectionHtml("GPQA Diamond", "研究生级科学问答 · 仅展示", gp.officialUrl || gp.url,
      '<div class="table-wrap"><table id="authGpqaTable" class="data-table"></table></div>',
      '来源:' + esc(gp.url || "") + '(官方:' + esc(gp.officialUrl || "") + ') · 更新 ' + esc(gp.updated || "") +
      ' · 研究生级科学多选问答(GPQA 最难 198 题子集,生物/物理/化学),Accuracy 越高越好、领域专家约 65%、随机基线 25%。本榜仅展示,不计入综合分。');
    // 8) HLE(Humanity's Last Exam)
    var hl = S.hle || {};
    var hlMs = D.hle();
    var hlRows = hlMs.map(function (m, i) {
      return '<tr><td class="rank">' + (i + 1) + '</td><td>' + dot(m.canon.color) + esc(m.model) + '</td>' +
        '<td>' + esc(m.org || "—") + '</td><td class="num">' + m.score + '%</td>' +
        '<td class="num">' + esc(m.size || "—") + '</td><td class="num">' + esc(m.context || "—") + '</td>' +
        '<td class="num">' + esc(m.cost || "—") + '</td></tr>';
    });
    html += authSectionHtml("Humanity's Last Exam", "前沿知识广度 · 仅展示", hl.officialUrl || hl.url,
      '<div class="table-wrap"><table id="authHleTable" class="data-table"></table></div>',
      '来源:' + esc(hl.url || "") + '(官方:' + esc(hl.officialUrl || "") + ') · 更新 ' + esc(hl.updated || "") +
      ' · 2500 道专家撰写、无联网可检索解的前沿题(数学/科学/人文学科等),闭卷得分越高越好。本榜仅展示,不计入综合分。');
    // 9) NL2Repo-Bench
    var n2 = S.nl2repo || {};
    var n2Ms = D.nl2repo();
    var n2Rows = n2Ms.map(function (m, i) {
      return '<tr><td class="rank">' + (i + 1) + '</td><td>' + dot(m.canon.color) + esc(m.model) + '</td>' +
        '<td>' + esc(m.org || "—") + '</td><td class="num">' + m.score + '%</td>' +
        '<td class="num">' + esc(m.size || "—") + '</td><td class="num">' + esc(m.context || "—") + '</td>' +
        '<td class="num">' + esc(m.cost || "—") + '</td></tr>';
    });
    html += authSectionHtml("NL2Repo-Bench", "长程仓库生成 · 仅展示", n2.officialUrl || n2.url,
      '<div class="table-wrap"><table id="authNl2repoTable" class="data-table"></table></div>',
      '来源:' + esc(n2.url || "") + '(官方:' + esc(n2.officialUrl || "") + ') · 更新 ' + esc(n2.updated || "") +
      ' · 给定单一 NL 需求文档从零生成可安装 Python 库(约 103 个任务),test-pass-rate 越高越好。本榜仅展示,不计入综合分。');
    // 10) ProgramBench
    var pb = S.programbench || {};
    var pbMs = D.programbench();
    var pbRows = pbMs.map(function (m, i) {
      return '<tr><td class="rank">' + (i + 1) + '</td><td>' + dot(m.canon.color) + esc(m.model) +
        (m.effort ? ' <span class="cell-cost">' + esc(m.effort) + '</span>' : "") + '</td>' +
        '<td>' + esc(m.agent || "—") + '</td><td class="num">' + m.score + '%</td>' +
        '<td class="num">' + (m.almost != null ? m.almost + '%' : "—") + '</td></tr>';
    });
    html += authSectionHtml("ProgramBench", "cleanroom 程序重建 · 仅展示", pb.officialUrl || pb.url,
      '<div class="table-wrap"><table id="authProgrambenchTable" class="data-table"></table></div>',
      '来源:' + esc(pb.url || "") + '(官方:' + esc(pb.officialUrl || "") + ') · 更新 ' + esc(pb.updated || "") +
      ' · 200 个从零重建任务(仅给编译后二进制与文档,行为级隐藏测试,不联网/禁反编译);Resolved 为主指标、Almost(≥95% 行为测试通过)为辅助,均越高越好。本榜仅展示,不计入综合分。');
    // 渲染 + 图表 + 表格
    var wrap = document.getElementById("authWrap");
    if (wrap) wrap.innerHTML = html;
    tbVersions.forEach(function (t) {
      fillTable("authTB" + (t.ver === "4.0" ? "" : t.ver.replace(".", "")) + "Table",
        ["#", "模型", "Agent", "解决率±CI", "发布日期", "Tokens", "成本"],
        tbRowsByVer[t.ver], ["", "", "", "num", "num", "num", "num"]);
    });
    fillTable("authTBScienceTable", ["#", "模型", "Agent", "解决率"], tbsRows, ["", "", "", "num"]);
    fillTable("authOSWorldTable", ["#", "系统(模型·配置)", "部分得分", "厂商", "上报时间", "来源"], osRows, ["", "", "num", "", "num", ""]);
    fillTable("authLastExamTable", ["#", "模型", "厂商", "Pass@1", "参数量", "上下文"], aleRows, ["", "", "", "num", "num", "num"]);
    fillTable("authARCAGI3Table", ["#", "模型", "RHAE", "参数量", "上下文", "API 价格"], arRows, ["", "", "num", "num", "num", "num"]);
    bcTable("authBCV2CTable", v2cRows, ["exec", "IoU-score", "total"], ["num", "num", "num"]);
    bcTable("authBCVQATable", vqaRows, ["l1", "l2", "l3", "l4", "total"], ["num", "num", "num", "num", "num"]);
    bcTable("authBCCQATable", cqaRows, ["l1", "l2", "l3", "l4", "total"], ["num", "num", "num", "num", "num"]);
    fillTable("authGpqaTable", ["#", "模型", "厂商", "Accuracy", "参数量", "上下文", "API 价格"], gpRows, ["", "", "", "num", "num", "num", "num"]);
    fillTable("authHleTable", ["#", "模型", "厂商", "Score", "参数量", "上下文", "API 价格"], hlRows, ["", "", "", "num", "num", "num", "num"]);
    fillTable("authNl2repoTable", ["#", "模型", "厂商", "Score", "参数量", "上下文", "API 价格"], n2Rows, ["", "", "", "num", "num", "num", "num"]);
    fillTable("authProgrambenchTable", ["#", "模型", "Agent", "Resolved", "Almost"], pbRows, ["", "", "", "num", "num"]);
    // TB 柱状图(升序使最高在上)
    var tbBarEl = document.getElementById("authTBBar");
    if (tbBarEl && tbMs.length) {
      var tbSorted = tbMs.slice().sort(function (a, b) { return a.score - b.score; });
      tbBarEl.style.height = Math.min(520, Math.max(280, tbMs.length * 30 + 90)) + "px";
      var tbInst = CH.inst("authTBBar");
      if (tbInst) tbInst.resize();
      CH.apply("authTBBar", CH.barOption(
        tbSorted.map(function (m) { return m.model + "·" + m.agent + (m.effort ? "(" + m.effort + ")" : ""); }),
        tbSorted.map(function (m) { return m.score; }),
        "#2D9D78", "%", { max: 100, left: 200, labelSize: 11 }
      ));
    }
    document.getElementById("authDesc").textContent =
      "以下为第三方权威基准测试快照,仅作参考展示;其中 Terminal-Bench(4.0/3.0/2.1)合并为一个基准组计入总览综合分与命中数(优先以最高版本为代表,其中 2.1 为归一化自报分),其余(GPQA Diamond / HLE / NL2Repo-Bench / ProgramBench 及 TB-Science/OSWorld/ALE/ARC-AGI-3/BenchCAD)为展示型参考数据。";
  }

  // ===== 标签切换 =====
  function showTab(name) {
    state.tab = name;
    Array.prototype.forEach.call(document.querySelectorAll(".tab"), function (b) {
      b.classList.toggle("active", b.dataset.tab === name);
    });
    Array.prototype.forEach.call(document.querySelectorAll(".page"), function (p) {
      p.classList.toggle("active", p.id === "page-" + name);
    });
    if (name === "overview") renderOverview();
    else if (name === "deepswe") renderDeepSwe();
    else if (name === "vibecode") renderVibeCode();
    else if (name === "llm2014") renderLlm2014(state.llmMonth);
    else if (name === "aicap") renderAICap();
    else if (name === "authority") renderAuthority();
    // 切换后重绘图表以适配可见尺寸
    setTimeout(function () { window.dispatchEvent(new Event("resize")); }, 60);
  }

  // ===== 初始化 =====
  function init() {
    state.llmMonth = D.llmMonths().slice(-1)[0]; // 默认最新月份
    // 月份下拉
    var ms = D.llmMonths();
    document.getElementById("llmMonth").innerHTML = ms.map(function (m) {
      return '<option value="' + m + '"' + (m === state.llmMonth ? " selected" : "") + ">" + m + "</option>";
    }).join("");
    document.getElementById("llmMonth").addEventListener("change", function (e) {
      renderLlm2014(e.target.value);
    });
    // 矩阵表头点击排序(事件委托挂在稳定父级 table 上)
    document.getElementById("matrixTable").addEventListener("click", function (e) {
      var th = e.target.closest ? e.target.closest("th[data-key]") : null;
      if (!th) return;
      var key = th.getAttribute("data-key");
      // 先计算方向再更新 sortKey,否则 nextSortDir 内 state.sortKey 已被覆盖,无法区分新旧列
      state.sortDir = nextSortDir(key);
      state.sortKey = key;
      renderOverview();
    });
    // 各页"仅跨榜模型/显示全部"开关
    [
      { id: "ovShowAll", key: "overview", render: function () { renderOverview(); } },
      { id: "dsShowAll", key: "deepswe", render: function () { renderDeepSwe(); } },
      { id: "vcShowAll", key: "vibe", render: function () { renderVibeCode(); } },
      { id: "lmShowAll", key: "llm", render: function () { renderLlm2014(state.llmMonth); } }
    ].forEach(function (sw) {
      var el = document.getElementById(sw.id);
      if (!el) return;
      el.addEventListener("change", function () {
        state.showAll[sw.key] = el.checked;
        sw.render();
      });
    });
    // 总览页「高亮国产模型」开关:切换后重渲染矩阵以应用/取消国产高亮
    var hdEl = document.getElementById("ovHighlightDomestic");
    if (hdEl) hdEl.addEventListener("change", function () {
      state.highlightDomestic = hdEl.checked;
      renderOverview();
    });
    // 总览页「显示综合分」开关:切换后在梯队徽标旁显示/隐藏精确综合分
    var ssEl = document.getElementById("ovShowScore");
    if (ssEl) ssEl.addEventListener("change", function () {
      state.showScore = ssEl.checked;
      renderOverview();
    });
    // 标签点击
    Array.prototype.forEach.call(document.querySelectorAll(".tab"), function (b) {
      b.addEventListener("click", function () { showTab(b.dataset.tab); });
    });
    // 刷新时间节点:refreshedAt 为定长 "YYYY-MM-DD HH:mm",字典序即时间序,取各源最新;旧数据缺字段时不显示
    var refreshedAt = [D.src.deepswe, D.src.vibe, D.src.llm, D.src.tbench, D.src.tbscience, D.src.osworld,
      D.src.lastexam, D.src.arcagi3, D.src.benchcad, D.src.gpqa, D.src.hle, D.src.nl2repo, D.src.programbench]
      .map(function (s) { return s && s.refreshedAt; })
      .filter(Boolean).sort().pop();
    document.getElementById("topMeta").textContent = "快照数据 · DeepSWE " + (D.src.deepswe ? D.src.deepswe.updated : "") + " / Vibe " + (D.src.vibe ? D.src.vibe.updated : "") + " / llm2014 " + (D.src.llm ? D.src.llm.updated : state.llmMonth)
      + (refreshedAt ? " · 刷新于 " + refreshedAt + "(北京时间)" : "");
    // 使用双 rAF:先让浏览器绘制 loading 指示器,再在下一帧执行重渲染并移除指示器
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        showTab("overview");
        var loading = document.getElementById("appLoading");
        if (loading) loading.remove();
      });
    });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
