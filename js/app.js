// 主控:标签路由与五个页面的渲染入口。
(function () {
  "use strict";
  var D = window.D, CH = window.CH, CMP = window.CMP;
  var state = { tab: "overview", llmMonth: null,
    sortKey: null, sortDir: null, // sortKey 为 null 时使用默认综合排序
    // 各页"仅跨榜模型"开关:false=仅显示命中≥2榜的模型,true=显示全部
    // 总览默认收起(聚焦跨榜命中),其余三页默认展开全部模型
    showAll: { overview: false, deepswe: true, vibe: true, llm: true } };
  var fmtK = function (n) { return n >= 1000 ? (n / 1000).toFixed(0) + "k" : n; };
  var esc = function (s) { return String(s == null ? "" : s).replace(/[&<>\"]/g, function (c) {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '\"': "&quot;" }[c]; }); };
  var dot = function (c) { return '<span style="display:inline-block;width:9px;height:9px;border-radius:50%;background:' + (c || "#888") + ';margin-right:7px;vertical-align:middle"></span>'; };
  // "NEW" 徽标(近 7 天内首次上榜的模型);仅对判定为新的模型追加在模型名后
  var newBadge = function () { return ' <span class="badge-new">NEW</span>'; };

  // 三基准描述文案(对齐设计稿卡片信息层级);按 benchSummary 的 key 索引
  var BENCH_DESC = {
    deepswe: "长程软件工程任务评测,覆盖真实 GitHub issue 到 PR 的完整解决链路",
    vibecode: "从零构建 Web 应用的端到端评测,衡量模型独立完成项目的能力",
    llm2014: "个人私有编码题库,涵盖算法、数据结构、系统设计等多维度编码能力"
  };

  // ===== llm2014 单元格背景色(热力图填充 + 图例共用) =====
  // 色系与 CSS 等级着色保持一致:绿(A/Pass)→黄绿(B)→琥珀(C)→红(D/Failed),灰=无数据(Skip/Pending)
  var LM_BG = {
    "A+": "#2bb673", A: "#34c084",
    "B+": "#8fce3a", B: "#9fd84a",
    "C+": "#f0b424", C: "#f5be38",
    "D+": "#f87171", D: "#fb8585"
  };
  var LM_BG_SPECIAL = { pass: "#1fa063", failed: "#e0524a", skip: "#3a4250", pending: "#2f3744", unknown: "#3a4250" };
  // 依据单元格状态/等级返回对应背景色;供热力图 itemStyle.color 与图例色块统一使用
  function lmCellBg(cell) {
    if (cell.status === "grade") return LM_BG[cell.grade] || "#4a5466";
    return LM_BG_SPECIAL[cell.status] || "#3a4250";
  }
  // 图例色块:带背景的圆角小方块 + 文字
  function lmLegendChip(label, bg) {
    return '<span><i style="background:' + bg + ';width:13px;height:13px;border-radius:3px;display:inline-block;margin-right:5px;vertical-align:-1px"></i>' + label + '</span>';
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
  // 仅设置表头(用于含 data-key/排序指示符的自定义表头);tbody 单独填充
  function fillTableHead(id, headHtml) {
    var t = document.getElementById(id);
    var thead = t.querySelector("thead");
    var html = "<tr>" + headHtml + "</tr>";
    if (thead) thead.innerHTML = html;
    else t.insertAdjacentHTML("afterbegin", "<thead>" + html + "</thead>");
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

  // 总览矩阵表的列定义:key=排序键;val=取值函数;type=数据类型;bench=是否评测列(排序时过滤无值)
  var MATRIX_COLS = [
    { key: "model",   label: "模型", type: "text", bench: false, val: function (r) { return r.id; } },
    { key: "vendor",  label: "厂商", type: "text", bench: false, val: function (r) { return r.vendor; } },
    { key: "deepswe", label: "DeepSWE (Pass@1)", type: "num", bench: true,  val: function (r) { return r.deepswe ? r.deepswe.pass1 : null; } },
    { key: "vibe",    label: "Vibe Code (准确率)", type: "num", bench: true, val: function (r) { return r.vibe ? r.vibe.score : null; } },
    { key: "llm",     label: "llm2014 (综合分/10)", type: "num", bench: true, val: function (r) { return (r.llm && r.llm.score != null) ? r.llm.score : null; } },
    { key: "hits",    label: "命中", type: "num", bench: false, val: function (r) { return r.benchCount; } }
  ];

  // 计算点击某列后的排序方向:新列首击一律降序(高→低),同列在升序/降序间翻转
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

  // ===== 1) 总览 =====
  function renderOverview() {
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

    // 矩阵表:按当前排序状态(过滤+排序)处理行,再按"仅跨榜"开关过滤
    var allRows = sortedMatrixRows(CMP.matrix(state.llmMonth));
    var rows = state.showAll.overview ? allRows : allRows.filter(function (r) { return r.benchCount >= 2; });
    if (!rows.length) rows = allRows;
    var html = rows.map(function (r, i) {
      var ds = r.deepswe ? r.deepswe.pass1 + "%" : "—";
      var vc = r.vibe ? r.vibe.score + "%" : "—";
      var lm = (r.llm && r.llm.score != null) ? D.to10(r.llm.score).toFixed(2) : "—";
      // NEW 判定:模型在任一已收录榜单上"近 7 天内首次上榜"即为新
      var nw = D.isNewAny(r.deepswe && r.deepswe.name, r.vibe && r.vibe.name, r.llm && r.llm.name);
      // row-hit(跨榜命中)与 row-new(新上榜)可并存;CSS 中 row-new 置后以生效
      var cls = (r.benchCount >= 2 ? "row-hit " : "") + (nw ? "row-new" : "");
      return '<tr class="' + cls.trim() + '">' +
        '<td>' + dot(r.color) + esc(r.id) + (nw ? newBadge() : "") + '</td>' +
        '<td>' + esc(r.vendor) + '</td>' +
        '<td class="num">' + ds + '</td>' +
        '<td class="num">' + vc + '</td>' +
        '<td class="num">' + lm + '</td>' +
        '<td class="num">' + r.benchCount + '/3</td></tr>';
    });
    // 表头:可点击,激活列显示方向指示符;数值列追加 num 类以与数据居中对齐
    var head = MATRIX_COLS.map(function (c) {
      var active = state.sortKey === c.key;
      var ind = active ? ' <span class="sort-ind">' + (state.sortDir === "asc" ? "▲" : "▼") + '</span>' : "";
      var classes = [];
      if (active) classes.push("sort-active");
      if (c.type === "num") classes.push("num");
      var cls = classes.length ? ' class="' + classes.join(" ") + '"' : "";
      return '<th data-key="' + c.key + '"' + cls + ' title="点击按此列排序">' + c.label + ind + '</th>';
    }).join("");
    fillTableHead("matrixTable", head);
    document.querySelector("#matrixTable tbody").innerHTML = html.join("");
    document.getElementById("overviewNote").textContent =
      '说明:DeepSWE 与 Vibe Code 为百分比;llm2014 为 10 分制综合分(由等级数值折算)。"—" 表示该榜未收录此模型。点击表头按该列排序(按某评测排序时仅显示该评测有数据的模型)。模型名后 NEW 表示该模型近 7 天内首次上榜。' +
      (state.showAll.overview ? '' : ' · 当前仅显示命中≥2榜的 ' + rows.length + ' 个模型(勾选右上方"显示全部"可展开所有模型)。');
  }

  // ===== 2) DeepSWE =====
  function renderDeepSwe() {
    var src = D.src.deepswe || {};
    // 仅跨榜模型过滤(命中<2榜默认收起;勾选"显示全部"恢复)
    var ms = filterHits(D.deepSwe(), function (m) { return m.canon.id; }, state.showAll.deepswe);
    var total = D.deepSwe().length;
    document.getElementById("deepsweDesc").textContent = src.desc || "";
    // 柱状(pass1 升序,使最高在上)
    var sorted = ms.slice().sort(function (a, b) { return a.pass1 - b.pass1; });
    CH.apply("dsBar", CH.barOption(sorted.map(function (m) { return m.name; }),
      sorted.map(function (m) { return m.pass1; }), "#2D9D78", "%", { max: 80 }));
    // 散点:成本 vs pass1,气泡=步数
    CH.apply("dsScatter", CH.scatterOption(
      ms.map(function (m) { return [m.cost, m.pass1, m.steps, m.name]; }),
      { xName: "平均成本($)", yName: "Pass@1(%)", bubble: true, bubbleDiv: 6, yMax: 80 }));
    // 表格
    var html = ms.map(function (m, i) {
      var nw = D.isNewRaw("deepswe", m.name);
      return '<tr class="' + (nw ? "row-new" : "") + '"><td class="rank">' + (i + 1) + '</td><td>' + dot(m.canon.color) + esc(m.name) + (nw ? newBadge() : "") + '</td>' +
        '<td>' + esc(m.effort) + '</td><td class="num">' + m.pass1 + '±' + m.ci + '%</td>' +
        '<td class="num">$' + m.cost + '</td><td class="num">' + fmtK(m.outTok) + '</td><td class="num">' + m.steps + '</td></tr>';
    });
    fillTable("dsTable", ["#", "模型", "强度", "Pass@1", "平均成本", "输出tokens", "步数"], html,
      ["", "", "", "num", "num", "num", "num"]);
    document.getElementById("dsNote").textContent = "来源:" + src.url + " · 版本 " + (src.version || "") + " · 更新 " + (src.updated || "") + " · " + (src.stats ? src.stats.tasks + " 任务 / " + src.stats.repos + " 仓库" : "") +
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
    // 行按综合分降序
    var allRows = mo.rows.slice().sort(function (a, b) { return (b.score || 0) - (a.score || 0); });
    // 仅跨榜模型过滤(命中<2榜默认收起;勾选"显示全部"恢复)
    var rows = filterHits(allRows, function (r) { return r.canon.id; }, state.showAll.llm);
    var yLabels = rows.map(function (r) { return r.model; });

    // 热力数据:[xIndex, yIndex, num, raw];颜色按等级/状态显式指定(与图例一致),
    // Skip/Pending 用中性灰,Failed 用红,避免旧实现里"无数据"被涂成代表最差的深红
    var heat = [];
    rows.forEach(function (r, yi) {
      r.cells.forEach(function (c, xi) {
        heat.push({ value: [xi, yi, c.num == null ? 0 : c.num, c.raw],
          itemStyle: { color: lmCellBg(c), borderColor: "rgba(255,255,255,.55)", borderWidth: 1 } });
      });
    });
    CH.apply("lmHeat", CH.heatmapOption(xLabels, yLabels, heat, D.MAX_GRADE));

    // 综合分柱(10 分制:内部 0-4.3 折算为 0-10)
    var bsorted = rows.slice().sort(function (a, b) { return (a.score || 0) - (b.score || 0); });
    CH.apply("lmBar", CH.barOption(bsorted.map(function (r) { return r.model; }),
      bsorted.map(function (r) { return r.score == null ? 0 : Number(D.to10(r.score).toFixed(2)); }), "#2D9D78", "", { max: 10 }));

    // 图例:色块与热力图填充色严格一致(绿→黄绿→琥珀→红,灰=无数据)
    var legendSeq = [["A+", LM_BG["A+"]], ["A", LM_BG.A], ["B+", LM_BG["B+"]], ["B", LM_BG.B],
      ["C+", LM_BG["C+"]], ["C", LM_BG.C], ["D+", LM_BG["D+"]], ["D", LM_BG.D]];
    var legendSp = [["Pass", LM_BG_SPECIAL.pass], ["Failed", LM_BG_SPECIAL.failed],
      ["Skip", LM_BG_SPECIAL.skip], ["Pending", LM_BG_SPECIAL.pending]];
    document.getElementById("lmLegend").innerHTML =
      legendSeq.concat(legendSp).map(function (it) { return lmLegendChip(it[0], it[1]); }).join("");

    // 明细表
    var html = rows.map(function (r, i) {
      var nw = D.isNewRaw("llm", r.model);
      var tds = '<td class="rank">' + (i + 1) + '</td><td>' + dot(r.canon.color) + esc(r.model) + (nw ? newBadge() : "") + '</td>';
      r.cells.forEach(function (c) {
        tds += '<td class="num"><span class="' + gradeClass(c) + '">' + esc(c.raw) + '</span></td>';
      });
      tds += '<td class="num">' + (r.score != null ? D.to10(r.score).toFixed(2) : "—") + '</td>';
      tds += '<td>' + esc(r.ide) + '</td><td class="num">' + (r.think ? "是" : "否") + '</td>';
      return '<tr class="' + (nw ? "row-new" : "") + '">' + tds + '</tr>';
    });
    // 表头:各 project 列与综合分/思考为数值列,加 num 类居中;#、模型、IDE/CLI 为文本列
    var lmHeaders = ["#", "模型"].concat(xLabels).concat(["综合分(/10)", "IDE/CLI", "思考"]);
    var lmHeadCls = ["", ""].concat(xLabels.map(function () { return "num"; })).concat(["num", "", "num"]);
    fillTable("lmTable", lmHeaders, html, lmHeadCls);
    document.getElementById("lmNote").textContent = "来源:" + src.url + " · 月度 " + month + " · 综合分按 10 分制显示(由等级数值 A+=4.3/A=4.0/B+=3.3/B=3.0/C+=2.3/C=2.0/D+=1.3/D=1.0 折算;Pass=4.3;Failed=0;Skip/Pending 不计入)。热力图仍按单项等级(0-4.3)着色。" +
      (state.showAll.llm ? "" : " · 仅显示命中≥2榜的 " + rows.length + "/" + allRows.length + " 个模型");
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
      state.sortKey = key;
      state.sortDir = nextSortDir(key);
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
    // 标签点击
    Array.prototype.forEach.call(document.querySelectorAll(".tab"), function (b) {
      b.addEventListener("click", function () { showTab(b.dataset.tab); });
    });
    document.getElementById("topMeta").textContent = "快照数据 · DeepSWE " + (D.src.deepswe ? D.src.deepswe.updated : "") + " / Vibe " + (D.src.vibe ? D.src.vibe.updated : "") + " / llm2014 " + state.llmMonth;
    showTab("overview");
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
