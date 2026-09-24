// 主控:标签路由与五个页面的渲染入口。
(function () {
  "use strict";
  var D = window.D, CH = window.CH, CMP = window.CMP;
  var state = { tab: "overview", llmMonth: null,
    sortKey: null, sortDir: null, // sortKey 为 null 时使用默认综合排序
    highlightDomestic: true, // 总览页「高亮国产模型」开关:默认开启,高亮国产厂商模型
    showScore: false, // 总览页「显示综合分」开关:默认隐藏,仅显示梯队
    plansScope: "featured", // 套餐对比页平台范围:featured=仅精选平台(默认,与源站一致)/all=所有平台
    changelogDays: 14, // 更新日志页时间窗口(天):14(默认)/30/0=不限
    // 各页"仅跨榜模型"开关:false=仅显示命中≥2榜的模型,true=显示全部
    // 总览默认收起(聚焦跨榜命中),其余两页默认展开全部模型
    showAll: { overview: false, deepswe: true, llm: true } };
  // 国产厂商集合(来自 MODEL_MAP.domesticVendors):用于总览页判定模型是否为国产
  var DOMESTIC = {};
  ((window.MODEL_MAP && window.MODEL_MAP.domesticVendors) || []).forEach(function (v) { DOMESTIC[v] = 1; });
  var fmtK = function (n) { return n >= 1000 ? (n / 1000).toFixed(0) + "k" : n; };
  var esc = function (s) { return String(s == null ? "" : s).replace(/[&<>\"]/g, function (c) {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '\"': "&quot;" }[c]; }); };
  var dot = function (c) { return '<span style="display:inline-block;width:9px;height:9px;border-radius:50%;background:' + (c || "#888") + ';margin-right:7px;vertical-align:middle"></span>'; };
  // 外链协议白名单:更新日志的 url/锚点取自各源站页面,不信任非 http(s) 协议(如 javascript:),
  // 不合法就退回该工具自己的日志页地址 —— 跳转入口不能因为源站被篡改而变成可执行脚本。
  function safeUrl(u, fallback) {
    var s = String(u || "").trim();
    return /^(https?:)?\/\//i.test(s) ? s : String(fallback || "");
  }
  // 表格里的模型色点 / 厂商列文字:统一取厂商身份色,使同一厂商的模型与其厂商名同色(便于按厂商扫视归类)。
  // 模型名本身不上色(避免整表变成彩色文字墙);图表按模型区分曲线时仍用 canon.color,不走这两个助手。
  // vname 的着色键固定用 canonical 厂商(与色点同一个键),第二参给实际显示的文案 ——
  // 权威基准页的部分列表格显示来源侧 org 文案,用它当着色键会取不到色、与左侧色点脱节,故二者分离。
  var vdot = function (vendor) { return dot(D.vendorColor(vendor)); };
  var vname = function (vendor, label) {
    return '<span style="color:' + D.vendorColor(vendor) + '">' + esc(label || vendor) + '</span>';
  };
  // 榜色数值包装(榜色类见 styles.css 的 .bv-*):v 为空时返回原色占位「—」——
  // 占位符代表"该榜无此模型数据",上色会读成"这里有个值"
  var bvSpan = function (tone, v) {
    return v == null ? "—" : '<span class="bv bv-' + tone + '">' + v + '</span>';
  };
  // 给表头类数组的 [from, to] 列追加榜色类,使表头列名与格内数值同色(表头与数值共用 .bv-<tone> 绑定的 --bv-color)
  var headTone = function (headerClasses, from, to, tone) {
    for (var i = from; i <= to; i++) {
      headerClasses[i] = (headerClasses[i] ? headerClasses[i] + " " : "") + "bv bv-" + tone;
    }
    return headerClasses;
  };
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
  // 数据来源渠道徽标:official/selftest=官方榜/实测;paper/datalearner/qwen-official=厂商官方发布;其余=第三方
  var SRC_LABELS = {
    official: ["官方榜", "基准官方实测榜(T1)"],
    selftest: ["官方榜", "官方竞技场/站主实测(T1)"],
    paper: ["厂商发布", "基准作者论文评测表(T2)"],
    datalearner: ["厂商发布", "厂商官方发布成绩转录(T2)"],
    "qwen-official": ["厂商发布", "Qwen 官方博客/模型卡转录(T2)·effort 未标注、协议与官方实测榜不可比,仅补缺失模型,仅供参考"],
    "llm-stats": ["第三方", "第三方聚合站 llm-stats(T3)"],
    benchlm: ["第三方", "第三方镜像 benchlm(T3)"],
    aa: ["AA 复测", "Artificial Analysis 复测口径(T3,第三方自家 harness,分数口径偏严,仅供参考)"],
    mirror: ["第三方", "第三方镜像(T3)"],
    vals: ["vals 镜像", "vals.ai 官方镜像榜(T3)"],
    aggregate: ["第三方", "第三方评测机构(T3)"]
  };
  var srcBadge = function (src) {
    var l = SRC_LABELS[src];
    if (!l) return "";
    return ' <span class="badge-src" title="数据来源:' + esc(l[1]) + '">' + esc(l[0]) + '</span>';
  };
  // 仅当该表混合多个数据渠道时逐行标注来源徽标(单渠道表在脚注说明即可,避免视觉噪音)
  function mixedSrc(list) {
    var seen = {};
    (list || []).forEach(function (m) { if (m.src) seen[m.src] = 1; });
    return Object.keys(seen).length > 1;
  }
  // 各源 refreshedAt(定长 "YYYY-MM-DD HH:mm",字典序即时间序)取最新,作为"本站抓取"时间点;
  // 旧数据缺字段时返回 undefined,调用方须兜底不显示
  function maxRefreshedAt() {
    return [D.src.deepswe, D.src.llm, D.src.tbench, D.src.tbscience, D.src.osworld,
      D.src.lastexam, D.src.arcagi3, D.src.benchcad, D.src.gpqa, D.src.hle, D.src.nl2repo, D.src.programbench,
      D.src.cursorbench, D.src.frontiercode, D.src.wujisuan]
      .map(function (s) { return s && s.refreshedAt; })
      .filter(Boolean).sort().pop();
  }
  // 长说明按句读(。;;,全半角)分行:每句一行、保留原标点,用于页头 desc 等大段落
  // 必须先分行后 esc:先转义会把 &gt; 等实体里的半角分号误当句读;产出 HTML,调用方用 innerHTML 写入
  var paraHtml = function (text) {
    if (!text) return "";
    return String(text).replace(/([。;;])\s*/g, "$1\n").split("\n")
      .filter(function (l) { return l.trim(); }).map(esc).join("<br>");
  };

  // 基准描述文案(对齐设计稿卡片信息层级);按 benchSummary 的 key 索引
  var BENCH_DESC = {
    deepswe: "长程软件工程任务评测,覆盖真实 GitHub issue 到 PR 的完整解决链路,计入综合分权重 16%",
    llm2014: "个人私有题库的档位制评测,从零构建实际应用并按通过情况评级(含单任务测试成本),计入综合分权重 12%",
    webdev: "LMArena Code Arena 前端竞技场,社区匿名盲测 Elo,衡量模型生成可交互 Web 应用的能力,计入综合分权重 22%",
    aicap: "atmeplz 四方向榜:前端(中式建筑/体素山水/前端网页/黑洞模拟)与后端(超级 MES)方向分,前后端合并为单个计分组(取在场方向均值),合计计入综合分权重 12%",
    tbench: "斯坦福/Laude 终端命令行 Agent 评测,在真实 Shell 环境中解决编译/配置/运维等长程任务,三版合并计入综合分权重 11%",
    modeldial: "modeldial.com 第三方独立实测的编码智能体能力榜,后端与测试 40% + 前端与交互 30% + 知识与推理 30% 加权综合分,计入综合分权重 16%",
    wujisuan: "B 站 @无机酸-_- 的第三方独立前端实测:两个真实前端任务(虚构 AI 品牌站 / 体素三维场景)各按 0-100 打分后求和(0-200),每模型用其自家 agent harness 单次实测,计入综合分权重 10%"
  };

  // 毫秒 -> "34m 26s"(ModelDial 耗时展示;不足 1 分钟只显示秒)
  function fmtDur(ms) {
    if (ms == null || !isFinite(ms)) return "—";
    var s = Math.round(ms / 1000), m = Math.floor(s / 60);
    return m > 0 ? (m + "m " + (s % 60) + "s") : (s + "s");
  }
  // 美元金额(参考费用):小额保留 2 位小数,大额仍保留 2 位以免列宽跳动
  function fmtUsd(v) {
    return (v == null || !isFinite(v)) ? "—" : "$" + Number(v).toFixed(2);
  }

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

  // HLE/GPQA 仅参考查找表:{ canonId -> 条目 }:这两个权威基准在总览矩阵只作参考列展示,
  // 不进 unified、不计综合分与命中数(compare.js/命中计数零改动);数据为加载时快照,建表一次缓存
  var REF_IDX = null;
  function refIndex() {
    if (REF_IDX) return REF_IDX;
    REF_IDX = { hle: {}, gpqa: {} };
    D.hle().forEach(function (m) { if (REF_IDX.hle[m.canon.id] == null) REF_IDX.hle[m.canon.id] = m; });
    D.gpqa().forEach(function (m) { if (REF_IDX.gpqa[m.canon.id] == null) REF_IDX.gpqa[m.canon.id] = m; });
    return REF_IDX;
  }

  // 总览矩阵表的列定义:key=排序键;val=取值函数;type=数据类型;bench=是否评测列(排序时过滤无值);
  // grp=分组表头归属(bench 列须按 grp 连续排列,供两级表头 colspan 合并;grp 值即分组表头显示名:
  // "榜单基准"=权威基准榜,"第三方实测"=第三方独立实测/社区盲测与站主自测);
  // tone=该榜的数据色类后缀(bv-<tone>),表头列名与格内数值同色,色值见 styles.css 的 --bench-* ——
  // 只给评测列标注,让同一列的数值颜色与列名对应,读者能一眼确认这个数出自哪个榜
  var MATRIX_COLS = [
    { key: "model",   label: "模型", type: "text", bench: false, val: function (r) { return r.id; } },
    { key: "vendor",  label: "厂商", type: "text", bench: false, val: function (r) { return r.vendor; } },
    // 梯队:综合分按金字塔权重动态分档(S+~E);作为默认排序主键,bench=false 表示排序时不过滤无值行
    // 排序取值用 -_posKey 取负:posKey 越小越好,取负后"降序=更好在前",与默认序一致;无 _posKey 时兜底综合分
    { key: "composite", label: "梯队", type: "num", bench: false,
      val: function (r) { return -(r._posKey != null ? r._posKey : CMP.composite(r)); } },
    { key: "deepswe", label: "DeepSWE (Pass@1)", type: "num", bench: true, grp: "榜单基准", tone: "deepswe", val: function (r) { return r.deepswe ? r.deepswe.pass1 : null; } },
    // Terminal-Bench 多版本(4.0/3.0/2.1)单值列:得分%,版本内取最高、跨版本取优先级最高版本(4.0>3.0>2.1);计入综合分与命中数;完整条目见「权威基准测试」页
    { key: "tbench", label: "Terminal-Bench (解决率)", type: "num", bench: true, grp: "榜单基准", tone: "tbench",
      val: function (r) { return r.tbench ? r.tbench.score : null; } },
    // NL2Repo-Bench 自 2026-09-19 起移出总览矩阵(不再计入综合分与命中数),改由
    // 「权威基准测试」页仅展示;数据仍加载(data/nl2repo.js)供该页使用。
    // HLE / GPQA:权威知识·科学问答基准,在「榜单基准」组尾以仅参考列展示(refKey 同时驱动
    // 表头紧凑类与取值;短列头控宽,口径与「仅参考」说明放 th 悬浮提示);不进 unified、
    // 不计综合分与命中数,完整榜单见「权威基准测试」页
    { key: "hle", label: "HLE", type: "num", bench: true, grp: "榜单基准", refKey: "hle", tone: "hle",
      tip: "Humanity's Last Exam 闭卷得分(%):2500 道专家撰写、无联网可检索解的前沿题,越高越好;权威基准·仅参考,不计入综合分与命中数,完整榜单见「权威基准测试」页",
      val: function (r) { var m = refIndex().hle[r.id]; return m ? m.score : null; } },
    { key: "gpqa", label: "GPQA", type: "num", bench: true, grp: "榜单基准", refKey: "gpqa", tone: "gpqa",
      tip: "GPQA Diamond Accuracy(%):研究生级科学多选问答(198 题最难子集,生物/物理/化学),越高越好;权威基准·仅参考,不计入综合分与命中数,完整榜单见「权威基准测试」页",
      val: function (r) { var m = refIndex().gpqa[r.id]; return m ? m.score : null; } },
    // ModelDial 雷达单值列(归入「第三方实测」组首位):第三方独立实测的综合能力分
    // (0-100,后端 40%/前端 30%/知识 30% 加权);计入综合分与命中数;
    // 格内为综合分,口径与分项/耗时/费用放 th 悬浮提示;完整榜见「ModelDial」页
    { key: "modeldial", label: "ModelDial (综合分)", type: "num", bench: true, grp: "第三方实测", tone: "modeldial",
      tip: "ModelDial 雷达综合分(0-100):第三方独立实测,后端与测试 40% + 前端与交互 30% + 知识与推理 30% 加权;同一模型按推理强度分档多次测试后取最高分配置入榜;计入综合分(权重 16%)与命中数",
      val: function (r) { return r.modeldial ? r.modeldial.score : null; } },
    // Code Arena · WebDev 单值列(Elo 原值):归入「第三方实测」组(社区盲测竞技场);排序时仅显示有值的模型
    { key: "webdev", label: "WebDev (Elo)", type: "num", bench: true, grp: "第三方实测", tone: "webdev",
      val: function (r) { return (r.webdev && r.webdev.score != null) ? r.webdev.score : null; } },
    // 无机酸 · AI 前端实测单值列(0-200 = 两任务分之和):第三方实测组;格内显示总分,
    // harness/档位/不确定区间/实测日期放悬浮提示;完整榜见「无机酸实测」页
    { key: "wujisuan", label: "无机酸实测 (0-200)", type: "num", bench: true, grp: "第三方实测", tone: "wujisuan",
      tip: "无机酸 · AI 前端实测总分(0-200):独立第三方把两个真实前端任务(虚构 AI 品牌站 + 体素三维场景)各按 0-100 打分后求和;每模型用其自家 agent harness 单次实测,不计重试;计入综合分(权重 10%)与命中数",
      val: function (r) { return (r.wujisuan && r.wujisuan.score != null) ? r.wujisuan.score : null; } },
    { key: "llm",     label: "llm2014 (综合分/100)", type: "num", bench: true, grp: "第三方实测", tone: "llm", val: function (r) { return (r.llm && r.llm.norm != null) ? r.llm.norm : null; } },
    // AI 能力专项测试:前端/后端方向分合并单列展示,单元格并列两个方向分;排序用在场均值
    // 该列的 tone 只作用于表头 —— 格内两个方向分沿用 .ac-fe/.ac-be 方向色(方向信息优先于榜色)
    { key: "aicap", label: "AI 能力 (前/后端)", type: "num", bench: true, grp: "第三方实测", tone: "aicap",
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

  // ===== 总览页 AI 热点总结(仿「AI 早报」:概览目录 + 详情卡片,面板内滚动) =====
  // 从 window.NEWS 读取近 2 天新闻;按类型分组编号 #1..#N,顶部目录可跳到下方详情卡片。
  // 关键术语高亮:对已 esc 的文本单遍包 <b>,只加标签不重解释(转义实体为小写,不会被下列规则误命中)。
  // 覆盖:百分比 / 模型版本号(字母+数字,如 Qwen-Image-2.1、Step 5)/ 带单位数字(600B、5美元、100万 Token)/ 全大写缩写。
  var KW_STOP = { AI: 1 }; // 停用词:避免整屏「AI」都加粗
  var KW_RE = /(\d+(?:\.\d+)?%|[A-Za-z][\w.\-]*\d[\w.\-]*|\d+(?:\.\d+)?\s*(?:B|K|M|亿|万|美元|元|tokens?|层|个|组|条|人|倍)|[A-Z]{2,})/g;
  function hl(escaped) {
    return String(escaped).replace(KW_RE, function (m) {
      return KW_STOP[m.trim()] ? m : '<b class="news-kw">' + m + '</b>';
    });
  }
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
    // 展平成「分类顺序」的一维列表并赋全局排名 #1..#N(目录与详情卡片共用同一 rank)
    var flat = [], inFlat = {};
    var push = function (it) { if (inFlat[it.url]) return; inFlat[it.url] = 1; it._rank = flat.length + 1; flat.push(it); };
    order.forEach(function (t) { (groups[t] || []).forEach(push); });
    items.forEach(push); // 兜底:types 未覆盖到的类型条目追加在末尾
    // 翻译降级标注:标题里一个中文字符都没有,说明自动翻译没成功(英文源),标出「原文」。
    var origBadge = function (it) {
      return /[\u4e00-\u9fff]/.test(it.title || "") ? ""
        : '<span class="news-orig" title="自动翻译未成功,此处为英文原文">原文</span>';
    };
    // 1) 概览目录:按类型分组,每行 #N + 标题(单行省略),点击跳到详情卡片
    var tocHtml = order.filter(function (t) { return groups[t] && groups[t].length; }).map(function (t) {
      var links = groups[t].map(function (it) {
        return '<a class="news-toc-link" data-rank="' + it._rank + '" title="' + esc(it.title) + '">' +
          '<span class="news-toc-rank">#' + it._rank + '</span>' +
          '<span class="news-toc-title">' + esc(it.title) + '</span></a>';
      }).join("");
      return '<div class="news-toc-group">' +
        '<div class="news-toc-head">' + esc(t) + '<span class="news-toc-count">' + groups[t].length + ' 条</span></div>' +
        links + '</div>';
    }).join("");
    // 2) 详情卡片:按 rank 平铺,标题可换行 + 完整摘要(关键词加粗)+ 来源/日期/原文链接
    var cardsHtml = flat.map(function (it) {
      var date = (it.date || "").slice(5); // YYYY-MM-DD -> MM-DD
      var showBrief = it.brief && it.brief !== it.title; // HN 等无独立摘要时不重复标题
      return '<article class="news-card" id="news-card-' + it._rank + '">' +
        '<header class="news-card-head">' +
          '<span class="news-card-rank">#' + it._rank + '</span>' +
          '<h3 class="news-card-title">' + esc(it.title) + '</h3>' + origBadge(it) +
        '</header>' +
        (showBrief ? '<p class="news-card-brief">' + hl(esc(it.brief)) + '</p>' : "") +
        '<div class="news-card-meta">' +
          (it.source ? '<span class="news-card-source">' + esc(it.source) + '</span>' : "") +
          (date ? '<span class="news-card-date">' + esc(date) + '</span>' : "") +
          '<a class="news-card-link" href="' + esc(it.url) + '" target="_blank" rel="noopener">原文 ↗</a>' +
        '</div>' +
        '</article>';
    }).join("");
    inner.innerHTML = '<div class="news-toc">' + tocHtml + '</div><div class="news-cards">' + cardsHtml + '</div>';
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

    // 矩阵表:先分配梯队(基于全量排名行(命中≥4榜),按 matrix 的可见序),再选取展示行:排名行按综合分
    // 排序取前30;命中 3 榜的「参考」模型不计算综合分(展示为「—」),按在场各榜的榜内稳健标准分
    // 加权(与排名行综合分完全同口径:无豁免、无折减)比对落入相应名次间隔,仅在前30区间内混排计入
    // (序号计「—」,不占前30名额),第 30 个排名行之后的行(含参考行)一律截断;
    // 勾选"显示全部"则展开排名30之后的模型。
    // 命中 ≤2 榜的模型一律不在总览展示(默认与"显示全部"均要求命中≥3榜),请前往对应单项榜单页查看。
    var matrixRows = CMP.matrix(state.llmMonth, 3);
    CMP.assignTiers(matrixRows.filter(function (r) { return r.benchCount >= 4; }));
    var allRows = sortedMatrixRows(matrixRows);
    var rows = allRows;
    if (!state.showAll.overview) {
      rows = [];
      var ranked = 0;
      for (var ri = 0; ri < allRows.length && ranked < 30; ri++) {
        var r0 = allRows[ri];
        if (r0.benchCount >= 4) { rows.push(r0); ranked++; }
        else if (r0.benchCount >= 3) rows.push(r0);
      }
    }
    if (!rows.length) rows = allRows;
    // 排名计数器:仅对参与排名的行(命中≥4榜)递增;参考行(命中 3 榜)不参与排名,序号列固定「—」
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
      // 参考行:命中 3 个基准组,按各榜成绩与排名模型比对插入展示但不计排名、不计算综合分
      // (命中 ≤2 榜的模型不在总览展示,行集已按命中≥3榜过滤)
      var inserted = r.benchCount === 3;
      // 不参与排名的行(命中<4榜):梯队列与序号列均显示「—」
      var unranked = inserted;
      // HLE/GPQA 仅参考单元格:分数 + 悬浮(排名与「仅参考」口径说明);无数据显示「—」
      // 分数按所在榜的数据色(bv-<tone>)着色,与表头列名同色
      var refCell = function (key, label, tone) {
        var m = refIndex()[key][r.id];
        if (!m) return "—";
        var meta = [label + " 权威基准 · 仅参考,不计入综合分与命中数"];
        if (m.rank != null) meta.push("排名 #" + m.rank);
        return '<span class="bv bv-' + tone + '" title="' + esc(meta.join(" · ")) + '">' + m.score + '%</span>';
      };
      // DeepSWE 分数后标数据版本(v1.1/v1.0),便于区分历史与当前数据来源
      // 分数后追加单次任务成本($),仅当存在有效数字成本时显示
      // 分数包一层 .cell-val 固定宽度轨道:分数位数不同(74% / 69.3%)时,版本徽标仍落在整列同一 x 上
      var dsCost = (r.deepswe && typeof r.deepswe.cost === "number" && r.deepswe.cost > 0)
        ? ' <span class="cell-cost">$' + r.deepswe.cost + '</span>' : "";
      // 数值主体用 bv bv-<tone> 上该榜的数据色;±ci / $成本 / 版本徽标等辅助小字保持 .cell-cost 灰,
      // 让"榜色标数值主体、灰字标元数据"这条分工在 13 列宽表里稳定成立
      var ds = r.deepswe
        ? '<span class="cell-val bv bv-deepswe">' + r.deepswe.pass1 + '%</span>' + verBadge(r.deepswe.version) + dsCost : "—";
      var lm = (r.llm && r.llm.norm != null) ? r.llm.norm.toFixed(2) : "-";
      // Code Arena · WebDev 单值显示:原始 Elo + 可选 ±ci
      // (不再追加 norm 折算分小字:2026-09-22 起综合分改用各榜榜内稳健标准分,快照内 min-max
      //  norm 不再参与任何计算,留着只会让人误以为它是综合分输入)
      var wd = r.webdev ? r.webdev.score : null;
      var wdCi = (r.webdev && typeof r.webdev.ci === "number")
        ? '<span class="cell-cost">±' + r.webdev.ci + '</span>' : "";
      // Terminal-Bench 单元格:解决率% + 版本徽标 + agent/effort 小字(title 悬浮);悬停显示版本/Agent 与强度
      var tbMeta = [];
      if (r.tbench && r.tbench.version) tbMeta.push("v" + r.tbench.version);
      if (r.tbench && r.tbench.agent) tbMeta.push(r.tbench.agent);
      if (r.tbench && r.tbench.effort) tbMeta.push(r.tbench.effort);
      var tbTitle = tbMeta.length ? ' title="' + esc(tbMeta.join(" · ")) + '"' : "";
      var tbHtml = r.tbench
        ? '<span class="cell-val bv bv-tbench"' + tbTitle + '>' + r.tbench.score + '%</span>' + tbVerBadge(r.tbench.version) +
          ((r.tbench.agent || r.tbench.effort) ? ' <span class="cell-cost">' + esc([r.tbench.agent, r.tbench.effort].filter(Boolean).join("·")) + '</span>' : "")
        : "—";
      // ModelDial 单元格:综合分(0-100);悬浮显示三分项/推理强度/耗时/费用
      // (费用与耗时为后端(coding)单轴口径,故在提示里显式标注)
      var mdHtml = "—";
      if (r.modeldial) {
        var mdParts = [];
        if (r.modeldial.backend != null) mdParts.push("后端 " + r.modeldial.backend);
        if (r.modeldial.frontend != null) mdParts.push("前端 " + r.modeldial.frontend);
        if (r.modeldial.knowledge != null) mdParts.push("知识 " + r.modeldial.knowledge);
        if (r.modeldial.effort) mdParts.push("强度 " + r.modeldial.effort);
        if (r.modeldial.elapsedMs != null) mdParts.push("耗时 " + fmtDur(r.modeldial.elapsedMs));
        if (r.modeldial.costUsd != null) mdParts.push("费用 " + fmtUsd(r.modeldial.costUsd) + "(后端轴口径)");
        if (r.modeldial.configs) mdParts.push(r.modeldial.configs + " 个配置取最高");
        mdHtml = '<span class="bv bv-modeldial" title="' + esc(mdParts.join(" · ")) + '">' + r.modeldial.score.toFixed(1) + '</span>';
      }
      // 无机酸前端实测单元格:两任务总分(0-200);悬浮显示实测 harness / 推理档位 / 不确定区间 / 实测日期
      // (区间为源站人工标注,非置信区间;每模型 n=1,故不显示 ±)
      var wjHtml = "—";
      if (r.wujisuan) {
        var wjParts = [];
        if (r.wujisuan.agent) wjParts.push("harness " + r.wujisuan.agent);
        if (r.wujisuan.effort) wjParts.push("档位 " + r.wujisuan.effort);
        if (r.wujisuan.lo != null && r.wujisuan.hi != null) wjParts.push("不确定区间 " + r.wujisuan.lo + "–" + r.wujisuan.hi);
        if (r.wujisuan.date) wjParts.push("实测 " + r.wujisuan.date);
        wjParts.push("两任务分之和(每任务 0-100)");
        wjHtml = '<span class="bv bv-wujisuan" title="' + esc(wjParts.join(" · ")) + '">' + r.wujisuan.score.toFixed(2) + '</span>';
      }
      // NEW 判定:基于 DeepSWE/llm2014/Terminal-Bench 三基准
      var nw = D.isNewAny(r.deepswe && r.deepswe.name, r.llm && r.llm.name, r.tbench && r.tbench.name);
      // 国产高亮:开关开启且该模型厂商属于国产清单时,加行高亮类与「国产」徽标
      var dom = state.highlightDomestic && DOMESTIC[r.vendor];
      // row-hit(跨榜命中)、row-new(新上榜)、row-domestic(国产高亮)可并存;
      // CSS 中 row-domestic 置后,确保用户主动开启时国产高亮视觉优先
      var cls = (r.benchCount >= 4 ? "row-hit " : "") + (inserted ? "row-two " : "") + (nw ? "row-new " : "") + (dom ? "row-domestic" : "");
      var domBadge = dom ? ' <span class="badge-domestic">国产</span>' : "";
      var insertedBadge = inserted ? ' <span class="badge-two" title="命中 3 榜:按在场各榜的榜内稳健标准分加权(与排名行综合分同口径)与排名模型比对落入相应名次区间,不计算综合分、不计排名;序号计「—」;仅前30区间内显示">参考</span>' : "";
      // 序号列:参与排名的行(命中≥4榜)按出现顺序编号;参考行固定「—」,不参与排序
      return '<tr class="' + cls.trim() + '">' +
        '<td class="num">' + (unranked ? "—" : ++rankNo) + '</td>' +
        '<td>' + vdot(r.vendor) + esc(r.id) + (nw ? newBadge() : "") + domBadge + insertedBadge + '</td>' +
        '<td>' + vname(r.vendor) + '</td>' +
        // 梯队徽标:默认仅显示梯队标签;showScore 开启时追加精确综合分
        // 参考行不作梯队分档展示:梯队列显示「—」
        (function () {
          if (unranked) return '<td class="num"><span class="tier-na">—</span></td>';
          var score = CMP.composite(r).toFixed(1);
          var t = r.tier || "E";
          var tc = t.replace("+", "p"); // S+ -> Sp,用作 CSS 类名
          var badge = '<span class="tier-badge tier-' + tc + '" title="综合分 ' + score + '(榜内相对分:50 = 全池中位,每 15 分 = 1 个榜内稳健标准差;不可跨日直接比较)">' + t + '</span>';
          var num = state.showScore ? ' <span class="tier-score">' + score + '</span>' : "";
          return '<td class="num">' + badge + num + '</td>';
        })() +
        // ds=榜单基准组起点、wd=第三方实测组起点:grp-start 竖线与表头 th-grp 左边框对齐,须随 MATRIX_COLS 分组调整同步
        '<td class="num grp-start">' + ds + '</td>' +
        '<td class="num">' + tbHtml + '</td>' +
        // HLE/GPQA 仅参考列:属「榜单基准」组尾,组起点竖线 ds 不变
        '<td class="num ref">' + refCell("hle", "HLE", "hle") + '</td>' +
        '<td class="num ref">' + refCell("gpqa", "GPQA", "gpqa") + '</td>' +
        // ModelDial 列:第三方实测组起点,须带 grp-start(与表头 th-grp 左边框对齐);
        // 后续无机酸实测/llm2014/AI 能力 属同组中部,不再带 grp-start —— 随 MATRIX_COLS 分组同步
        '<td class="num grp-start">' + mdHtml + '</td>' +
        // WebDev 仅给 Elo 原值上色,其后的 ±ci 属元数据,保持灰
        '<td class="num">' + (wd != null ? '<span class="bv bv-webdev">' + wd + '</span>' + wdCi : "—") + '</td>' +
        '<td class="num">' + wjHtml + '</td>' +
        '<td class="num">' + (lm === "-" ? lm : '<span class="bv bv-llm">' + lm + '</span>') + '</td>' +
        // AI 能力列:格内两个方向分沿用自己的方向色(ac-fe 橙 / ac-be 蓝),不用该榜的榜色 —— 方向信息优先
        '<td class="num">' + aicapCell(r) + '</td>' +
        '<td class="num">' + r.benchCount + '/7</td></tr>';
    });
    // 两级表头:第 1 行为分组行(「榜单基准」「第三方实测」colspan 合并)与非评测列的 rowspan 纵跨格;
    // 第 2 行仅评测列(bench)的列名。可点击排序逻辑不变,激活列显示方向指示符;
    // 默认综合排序(sortKey=null)时,综合分列视为激活(降序),让默认排序依据可见
    // GROUP_TITLES 的键即 MATRIX_COLS 的 grp 值(grp 直接用作分组表头显示名)
    var GROUP_TITLES = {
      "榜单基准": "榜单基准:基准官方实测榜(DeepSWE 16% / Terminal-Bench 4.0/3.0/2.1 11%)计入综合分与命中数;组尾 HLE / GPQA 为权威基准仅参考列,不计入综合分与命中数;各榜先按榜内稳健标准分(中位数与 1.4826×MAD 定标、截断 ±3σ)定标后按权重加权,再按渠道层级合并数据(基准官方实测榜 > 厂商官方发布 > 第三方聚合与镜像)",
      "第三方实测": "第三方实测:第三方独立实测(ModelDial 雷达,后端 40%/前端 30%/知识 30% 合成分,权重 16%;无机酸 · AI 前端实测,两个真实前端任务分之和 0-200,权重 10%)、社区盲测 Elo(Code Arena · WebDev,权重 22%)与站主实测口径(llm2014 私有题库 12% / AI 能力专项测试 12%,前后端合并为单个计分组);五组同纲计入综合分与命中数,合计占权重约 73%;综合分为各榜榜内相对分的加权,未测榜按该模型自身水平填补"
    };
    function thAttr(c, extra) {
      var isDefaultComposite = state.sortKey === null && c.key === "composite";
      var active = state.sortKey === c.key || isDefaultComposite;
      var dir = state.sortKey === null ? "desc" : state.sortDir;
      var ind = active ? ' <span class="sort-ind">' + (dir === "asc" ? "▲" : "▼") + '</span>' : "";
      var classes = [];
      if (active) classes.push("sort-active");
      if (c.type === "num") classes.push("num");
      if (c.refKey) classes.push("ref"); // HLE/GPQA 仅参考列:紧凑单元格样式
      // 榜色:表头列名与格内数值同色,便于把颜色对回榜单(色值见 styles.css 的 --bench-*)
      if (c.tone) { classes.push("bv", "bv-" + c.tone); }
      if (extra) classes.push(extra);
      var cls = classes.length ? ' class="' + classes.join(" ") + '"' : "";
      var tip = (c.tip ? esc(c.tip) + " " : "") + "点击按此列排序";
      return '<th data-key="' + c.key + '"' + cls + ' title="' + tip + '">' + c.label + ind + '</th>';
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
      var grpStart = i === 0 || MATRIX_COLS[i - 1].grp !== c.grp;
      if (grpStart) {
        grpRow += '<th class="th-grp" colspan="' + span + '" title="' + GROUP_TITLES[c.grp] + '">' +
          c.grp + '</th>';
      }
      // grp-start 与 th-grp 同列:分组区隔竖线 CSS 按类选择,不依赖列号,见 styles.css
      subRow += thAttr(c, grpStart ? "th-sub grp-start" : "th-sub");
    });
    fillTableHead("matrixTable", '<tr class="grp-row">' + grpRow + '</tr><tr class="col-row">' + subRow + '</tr>');
    document.querySelector("#matrixTable tbody").innerHTML = html.join("");
    // 动态行数提示(显示全部模型开关状态;默认视图含混排的参考模型,排名数与参考数分开统计)
    var note;
    if (state.showAll.overview) {
      var rCnt = rows.filter(function (r) { return r.benchCount >= 4; }).length;
      var dCnt = rows.filter(function (r) { return r.benchCount === 3; }).length;
      note = '当前显示全部 ' + rows.length + ' 个命中≥3个基准组的模型(排名行 ' + rCnt + ' 个 + 「参考」' + dCnt +
        ' 个)。命中 3 榜的参考行不计算综合分、不参与排名、序号与梯队列均显示「—」,仅展示各榜数据;命中 ≤2 榜的模型不在总览展示,请前往对应榜单页查看。';
    } else {
      var dualCnt = rows.filter(function (r) { return r.benchCount === 3; }).length;
      note = '当前显示命中≥4个基准组且排名前 ' + (rows.length - dualCnt) + ' 的模型,以及 ' + dualCnt +
        ' 个跻身前30区间的「参考」模型(命中 3 个基准组,按各榜榜内稳健标准分加权后的同口径水平与排名模型比对落入相应区间,不计算综合分、不计排名,序号计「—」;其余 3 榜参考模型可勾选下方"显示全部"查看,命中 ≤2 榜的模型不在总览展示)。';
    }
    // 国产高亮开启时,追加国产模型数量提示
    if (state.highlightDomestic) {
      var domCnt = rows.filter(function (r) { return DOMESTIC[r.vendor]; }).length;
      note += ' · 当前高亮 ' + domCnt + ' 个国产模型。';
    }
    // Terminal-Bench(4.0/3.0/2.1)合并为一个基准组计入综合分与命中数;NL2Repo 自 2026-09-19 起移出、改仅展示;其余权威基准仅展示
    note += ' Terminal-Bench 4.0/3.0/2.1 三版合并为一个基准组计入综合分(权重 11%)与命中数,优先以最高版本为代表(4.0>3.0>2.1,版本内取各模型最优成绩),单元数字旁附版本标签;综合分按「4.0 等效分」口径折算(3.0/2.1 按跨版本共有模型折算难度系数,如 2.1 自报分 88≈4.0 官方 26),低难度版本虚高分不再追平 4.0 头名;ModelDial 雷达(权重 16%)为第三方独立实测,综合分 = 后端与测试 40% + 前端与交互 30% + 知识与推理 30%,同一模型按推理强度分档多次测试后取最高分配置入榜(格内为综合分,悬浮可见三分项与耗时/费用),亦计入综合分与命中数;NL2Repo-Bench 自 2026-09-19 起不再计入综合分与命中数,改为仅在「权威基准测试」页展示;TB-Science / OSWorld / Agents\' Last Exam / ARC-AGI-3 / BenchCAD 亦仅在「权威基准测试」页展示;GPQA Diamond / HLE 在「榜单基准」组尾以仅参考列展示(不计入综合分与命中数,「—」表示未收录于对应权威榜),完整榜单见「权威基准测试」页。';
    note += ' 榜单数据按渠道优先级合并:基准官方实测榜 > 厂商官方发布(论文/发布页)> 第三方聚合与镜像,低层级仅补缺不覆盖高层级分数。';
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
      sorted.map(function (m) { return m.pass1; }), CH.brand(), "%", { max: 80 }));
    // 散点:成本 vs pass1,气泡面积=步数;v1.1(实心)与 v1.0(空心)分两个系列,
    // 版本由图例承担,标签里不再挂 "(v1.0)" 后缀 —— 数十个点的标签空间有限,先省掉这段冗余文字。
    // 注意:标签该显示哪些由 hideOverlap 按矩形位置决定,与传点顺序无关(实测倒序结果一致),
    // 所以这里保持 pass1 降序只是为了与上表/柱状图同序,别指望它能给高分模型加权。
    var groups = [
      { name: "v1.1", points: [] },
      { name: "v1.0", points: [], style: "hollow" }
    ];
    ms.forEach(function (m) {
      var g = m.version === "v1.0" ? groups[1] : groups[0];
      g.points.push([m.cost, m.pass1, m.steps, m.name]);
    });
    CH.apply("dsScatter", CH.scatterOption(groups.filter(function (g) { return g.points.length; }), {
      xName: "平均成本($)", yName: "Pass@1(%)", bubble: true,
      xLog: true, xMin: 0.05, xMax: 30, yMin: 0, yMax: 80 }));
    // 表格:模型名后挂版本徽章(v1.1/v1.0);NEW 徽标在其后
    var html = ms.map(function (m, i) {
      var nw = D.isNewRaw("deepswe", m.name);
      return '<tr class="' + (nw ? "row-new" : "") + '"><td class="rank">' + (i + 1) + '</td><td>' + vdot(m.canon.vendor) + esc(m.name) + verBadge(m.version) + (nw ? newBadge() : "") + '</td>' +
        '<td>' + esc(m.effort) + '</td><td class="num"><span class="bv bv-deepswe">' + m.pass1 + '±' + m.ci + '%</span></td>' +
        '<td class="num">$' + m.cost + '</td><td class="num">' + fmtK(m.outTok) + '</td><td class="num">' + m.steps + '</td></tr>';
    });
    fillTable("dsTable", ["#", "模型", "强度", "Pass@1", "平均成本", "输出tokens", "步数"], html,
      ["", "", "", "num bv bv-deepswe", "num", "num", "num"]);
    // 脚注:说明 v1.1(每日刷新)+ v1.0(历史快照)的构成与计数
    var dsvc = D.deepSweVersionCounts();
    document.getElementById("dsNote").textContent = "来源:" + src.url + " · v1.1 更新 " + (src.updated || "") + " · v1.0 历史快照(" + ((window.DEEPSWE_V10 && window.DEEPSWE_V10.captured) || "") + ") · " +
      "共 " + total + " 个模型(v1.1: " + dsvc.v11 + " / v1.0 独有: " + dsvc.v10 + ")" + (src.stats ? " · v1.1 " + src.stats.tasks + " 任务 / " + src.stats.repos + " 仓库" : "") +
      (state.showAll.deepswe ? "" : " · 仅显示命中≥2榜的 " + ms.length + "/" + total + " 个模型");
  }

  // ===== 4) llm2014 =====
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

    // 综合分柱(百分制:等级均值为基础分,按源站名次保序收敛,公式见底部「综合分」说明)
    var bsorted = rows.slice().sort(function (a, b) { return (a.norm || 0) - (b.norm || 0); });
    CH.apply("lmBar", CH.barOption(bsorted.map(function (r) { return r.model; }),
      bsorted.map(function (r) { return r.norm == null ? 0 : Number(r.norm.toFixed(2)); }), CH.brand(), "", { max: 100 }));

    // 明细表
    var html = rows.map(function (r, i) {
      var nw = D.isNewRaw("llm", r.model);
      var tds = '<td class="rank">' + (i + 1) + '</td><td>' + vdot(r.canon.vendor) + esc(r.model) + (nw ? newBadge() : "") + '</td>';
      r.cells.forEach(function (c) {
        tds += '<td class="num">' + lmCellHtml(c) + '</td>';
      });
      tds += '<td class="num"><span class="bv bv-llm">' + (r.norm != null ? r.norm.toFixed(2) : "-") + '</span></td>';
      tds += '<td>' + esc(r.ide) + '</td><td class="num">' + (r.think ? "是" : "否") + '</td>';
      return '<tr class="' + (nw ? "row-new" : "") + '">' + tds + '</tr>';
    });
    // 表头:各 project 列与综合分/思考为数值列,加 num 类居中;#、模型、IDE/CLI 为文本列
    // 综合分列与格内数值同色(bv bv-llm);各 project 列保持源站的等级色(g-A/g-B/…),不覆盖为榜色
    var lmHeaders = ["#", "模型"].concat(xLabels).concat(["综合分(/100)", "IDE/CLI", "思考"]);
    var lmHeadCls = ["", ""].concat(xLabels.map(function () { return "num"; })).concat(["num bv bv-llm", "", "num"]);
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
      "以各已测项目等级均值(A+=4.0、A=3.5 … D=0.5,Pass=4.0,Failed=0)为基础分,不归并档位",
      "保序口径:按源站排名强制分数严格递减、相邻名次至少差 1 分,消除「名次靠前但分数低」的倒挂",
      "与名次矛盾处相邻模型合并取均值后按名次拉开 1 分/名;未受影响的模型保持基础分不变"
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

  // ===== 5) AI 能力专项测试(四方向榜 · 前端/后端,前后端方向分合并为单个计分组计入综合分) =====
  function renderAICap() {
    var src = D.src.aicap || {};
    var data = D.aicap();
    document.getElementById("aicapDesc").innerHTML = paraHtml(src.desc || "") +
      ((src.runCount || src.updated || src.refreshedAt) ? "<br>" +
        [(src.runCount ? esc(src.runCount) + " 次完整运行" : ""),
          (src.updated ? "源站更新 " + esc(src.updated) : ""),
          (src.refreshedAt ? "本站抓取 " + esc(src.refreshedAt) : "")]
          .filter(Boolean).join(" · ") : "");
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
        sorted.map(function (m) { return m.score; }), CH.brand(), "%", { max: 100, left: 190, labelSize: 11 }));
    });
    // 表格:模型名(厂商色圆点 + effort·platform 次要信息)/ 厂商 / 方向分 / 参考
    // 方向分沿用 .ac-fe / .ac-be 方向色(与总览矩阵格内一致),不另引入该榜的榜色 —— 方向信息优先于榜色
    function dirTable(id, models) {
      var dirCls = id === "capBeTable" ? "ac-be" : "ac-fe";
      var html = models.map(function (m, i) {
        var sub = [m.effort, m.platform].filter(Boolean).join(" · ");
        return '<tr><td class="rank">' + (i + 1) + '</td><td>' + vdot(m.canon.vendor) + esc(m.name) +
          (sub ? ' <span class="cell-cost">' + esc(sub) + '</span>' : "") + '</td>' +
          '<td>' + vname(m.canon.vendor, m.vendorDisplay || m.vendor) + '</td>' +
          '<td class="num"><span class="' + dirCls + '">' + m.score + '</span></td>' +
          '<td class="num">' + (m.pct != null ? m.pct + "%" : "—") + '</td></tr>';
      });
      fillTable(id, ["#", "模型", "厂商", "方向分", "参考"], html, ["", "", "", "num " + dirCls, "num"]);
    }
    dirTable("capFeTable", data.frontend);
    dirTable("capBeTable", data.backend);
    // 脚注:来源 + 方向权重说明
    var wfmt = function (w) { return (w || []).map(function (x) { return x[0] + " " + x[1]; }).join(" + "); };
    var fe = (src.directions && src.directions.frontend) || {};
    var be = (src.directions && src.directions.backend) || {};
    document.getElementById("aicapNote").innerHTML =
      '<div class="note-line"><b>来源</b><a href="' + esc(src.boardUrl || "") + '" target="_blank" rel="noopener">' + esc(src.boardUrl || "") + ' ↗</a></div>' +
      '<div class="note-line"><b>更新</b>源站 ' + esc(src.updated || "—") +
      (src.refreshedAt ? ' · 本站抓取 ' + esc(src.refreshedAt) : "") +
      ' · ' + esc(src.runCount || 0) + ' 次完整运行</div>' +
      '<div class="note-line"><b>前端方向分</b>' + esc(wfmt(fe.weight)) + '</div>' +
      '<div class="note-line"><b>后端方向分</b>' + esc(wfmt(be.weight)) + '</div>' +
      '<div class="note-line"><b>说明</b>已计入综合分(前端/后端方向分合并为<b>单个计分组</b>,取在场方向均值,合计占权重 12%)并进入总览交叉矩阵(合并单列、前后端方向分并列展示);方向分 0-100,越高越好。</div>';
  }

  // ===== 6) ModelDial 雷达(第三方独立实测的综合能力榜;计入综合分(计分组之一,权重 16%)与命中数) =====
  // 主榜为模型级条目(每条取该模型最高分 config,与源站主榜一致),config 明细另附折叠表(52 条)。
  function renderModeldial() {
    var src = D.src.modeldial || {};
    var ms = D.modeldial();
    var cfgs = D.modeldialConfigs();
    var w = src.weights || {};
    document.getElementById("mdDesc").innerHTML = paraHtml(src.desc || "") +
      ((src.updated || src.refreshedAt) ? "<br>" +
        [(src.updated ? "源站发布 " + esc(src.updated) : ""),
          (src.refreshedAt ? "本站抓取 " + esc(src.refreshedAt) : ""),
          (src.batchRevision != null ? "批次 r" + esc(src.batchRevision) : "")]
          .filter(Boolean).join(" · ") : "");
    if (!ms.length) {
      document.getElementById("mdNote").innerHTML =
        '<div class="note-line"><b>暂无数据</b>抓取失败或尚未生成 data/modeldial.js(待下次每日刷新后恢复)。</div>';
      return;
    }
    // 成本 vs 综合分散点:X=费用(后端轴,对数轴,跨 3 个数量级)、Y=综合分、气泡=耗时(分钟)
    var pts = ms.filter(function (m) { return m.costUsd != null && m.overall != null; })
      .map(function (m) { return [m.costUsd, m.overall, m.elapsedMs != null ? m.elapsedMs / 60000 : 1, m.canon.id]; });
    var costs = pts.map(function (p) { return p[0]; });
    var overs = pts.map(function (p) { return p[1]; });
    // 对数轴上下界收敛到 1 位有效数字(如 0.01 / 20):既给端点标签留出宽度,又让刻度读数干净
    // (直接取极值会得到 0.010781 / 28.09321 这类刻度)
    var span = function (v) { var t = Number(v.toPrecision(1)); return t > 0 ? t : v; };
    CH.apply("mdScatter", CH.scatterOption([{ name: "模型", points: pts }], {
      xName: "参考费用($" + (src.costBasis === "backend" ? "后端轴" : "") + ")", yName: "综合分",
      bubble: true, bubbleName: "耗时", bubbleScale: 2.2,
      bubbleFormat: function (min) { return fmtDur(min * 60000); },
      xFormat: fmtUsd,
      xLog: true,
      xMin: span(Math.min.apply(null, costs) / 2.2),
      xMax: span(Math.max.apply(null, costs) * 1.8),
      yMin: Math.max(0, Math.floor((Math.min.apply(null, overs) - 6) / 10) * 10),
      yMax: Math.min(100, Math.ceil((Math.max.apply(null, overs) + 5) / 5) * 5)
    }));
    // 源站决策标记转中文(源站为英文枚举 recommended/value/speed/lightweight)
    var TAG_CN = { recommended: "推荐", value: "高性价比", speed: "快速", lightweight: "轻量" };
    // 主榜表:排名 / 模型(厂商色点) / 厂商 / 综合分 / 后端 / 前端 / 知识 / 耗时 / 费用 / 配置数
    // 综合分与三个分项都是 ModelDial 自己的数值,统一上该榜数据色;耗时/费用属元数据,不上色
    var rows = ms.map(function (m) {
      var tagList = (m.tags || []).map(function (t) { return TAG_CN[t] || t; });
      var tag = tagList.length ? ' <span class="badge-two" title="源站标记">' + esc(tagList.join("/")) + '</span>' : "";
      return '<tr><td class="rank">' + m.rank + '</td>' +
        '<td>' + vdot(m.canon.vendor) + esc(m.canon.id) + tag +
          (m.effort ? ' <span class="cell-cost">' + esc(m.effort) + '</span>' : "") + '</td>' +
        '<td>' + vname(m.canon.vendor) + '</td>' +
        '<td class="num">' + bvSpan("modeldial", m.overall.toFixed(1)) + '</td>' +
        '<td class="num">' + bvSpan("modeldial", m.backend != null ? m.backend : null) + '</td>' +
        '<td class="num">' + bvSpan("modeldial", m.frontend != null ? m.frontend : null) + '</td>' +
        '<td class="num">' + bvSpan("modeldial", m.knowledge != null ? m.knowledge : null) + '</td>' +
        '<td class="num">' + fmtDur(m.elapsedMs) + '</td>' +
        '<td class="num">' + fmtUsd(m.costUsd) + '</td>' +
        '<td class="num">' + (m.configs || 1) + '</td></tr>';
    });
    fillTable("mdTable",
      ["#", "模型", "厂商", "综合分", "后端", "前端", "知识", "耗时", "费用", "配置"],
      rows, headTone(["", "", "", "num", "num", "num", "num", "num", "num", "num"], 3, 6, "modeldial"));
    // config 明细:模型 × 推理强度,按源站 config 排名升序
    var cfgRows = cfgs.map(function (c) {
      return '<tr><td class="rank">' + (c.rank != null ? c.rank : "—") + '</td>' +
        '<td>' + vdot(c.canon.vendor) + esc(c.canon.id) +
          (c.effort ? ' <span class="cell-cost">' + esc(c.effort) + '</span>' : "") + '</td>' +
        '<td>' + vname(c.canon.vendor) + '</td>' +
        '<td class="num">' + bvSpan("modeldial", c.overall != null ? c.overall.toFixed(1) : null) + '</td>' +
        '<td class="num">' + bvSpan("modeldial", c.backend != null ? c.backend : null) + '</td>' +
        '<td class="num">' + bvSpan("modeldial", c.frontend != null ? c.frontend : null) + '</td>' +
        '<td class="num">' + bvSpan("modeldial", c.knowledge != null ? c.knowledge : null) + '</td>' +
        '<td class="num">' + fmtDur(c.elapsedMs) + '</td>' +
        '<td class="num">' + fmtUsd(c.costUsd) + '</td></tr>';
    });
    fillTable("mdCfgTable",
      ["config #", "模型", "厂商", "综合分", "后端", "前端", "知识", "耗时", "费用"],
      cfgRows, headTone(["", "", "", "num", "num", "num", "num", "num", "num"], 3, 6, "modeldial"));
    document.getElementById("mdCfgCount").textContent = "共 " + cfgs.length + " 条 config(模型 × 推理强度)";
    // 脚注:口径说明 + 成本口径提醒 + 来源
    document.getElementById("mdNote").innerHTML =
      '<div class="note-line"><b>综合分口径</b>后端与测试 ' + esc(Math.round((w.backend || 0) * 100)) + '% + 前端与交互 ' +
        esc(Math.round((w.frontend || 0) * 100)) + '% + 知识与推理 ' + esc(Math.round((w.knowledge || 0) * 100)) +
        '%(三分项均 0-100);同一模型按推理强度分档多次测试,主榜取该模型最高分配置(与源站主榜一致)。</div>' +
      '<div class="note-line"><b>成本/耗时口径</b>' + esc(src.costBasisNote || "") +
        '源站主榜显示的是三轴汇总值,故此处数值低于源站显示值;本页各模型之间口径一致、可直接横向比较。</div>' +
      '<div class="note-line"><b>说明</b>已计入总览综合分(计分组之一,权重 16%),该席位来自同期移出计分组的 NL2Repo-Bench(原 9%),并于 2026-09-21 随「第三方实测」组整体加权上调(12%→16%);命中数分母为 7(七项基准,AI 能力前后端合并计一次)。上表为模型级 ' +
        ms.length + ' 条,下方为全部 config 明细 ' + cfgs.length + ' 条。</div>' +
      '<div class="note-line"><b>来源</b>' +
        '<a href="' + esc(src.url || "") + '" target="_blank" rel="noopener">' + esc(src.url || "") + ' ↗</a>' +
        (src.methodUrl ? ' · <a href="' + esc(src.methodUrl) + '" target="_blank" rel="noopener">口径说明 ↗</a>' : "") +
        (src.license ? ' · ' + esc(src.license) : "") + '</div>';
  }

  // ===== 7) 无机酸 · AI 前端实测(B 站独立第三方前端端到端实测;计入综合分(权重 10%)与命中数) =====
  // 分数为「两个真实前端任务分之和」(每任务 0-100,合计 0-200);每模型用其自家 agent harness 单次实测。
  var PROMPT_CN = { short: "短提示", long: "长提示" };
  var ROUND_CN = { oneshot: "首轮", final: "最终" };
  function renderWujisuan() {
    var src = D.src.wujisuan || {};
    var ms = D.wujisuan();
    var tasks = src.tasks || [];
    document.getElementById("wjDesc").innerHTML = paraHtml(src.desc || "") +
      ((src.updated || src.refreshedAt) ? "<br>" +
        [(src.updated ? "源站发布 " + esc(src.updated) : ""),
          (src.refreshedAt ? "本站抓取 " + esc(src.refreshedAt) : ""),
          (src.siteVersion ? "源站版本 v" + esc(src.siteVersion) : ""),
          (src.author ? "实测者 " + esc(src.author) : "")]
          .filter(Boolean).join(" · ") : "");
    if (!ms.length) {
      document.getElementById("wjNote").innerHTML =
        '<div class="note-line"><b>暂无数据</b>抓取失败或尚未生成 data/wujisuan.js(待下次每日刷新后恢复)。</div>';
      return;
    }
    // 主榜柱状图:类目=模型(按总分升序喂入,使最高分落在顶部),值=两任务总分
    var scaleMax = (src.scale && src.scale.max) || 200;
    CH.apply("wjBar", CH.barOption(
      ms.map(function (m) { return m.canon.id; }).slice().reverse(),
      ms.map(function (m) { return m.score; }).slice().reverse(),
      null, "", { max: scaleMax }));
    // 主榜表:# / 模型 / 厂商 / Harness / 总分 / 不确定区间 / 实测日期 / 实测视频
    var rows = ms.map(function (m) {
      var range = (m.lo != null && m.hi != null)
        ? m.lo + "–" + m.hi + ((m.loUncertain || m.hiUncertain) ? ' <span class="cell-cost">含人工估</span>' : "")
        : "—";
      var video = m.videoUrl
        ? '<a href="' + esc(m.videoUrl) + '" target="_blank" rel="noopener">' + esc(m.bvid || "视频") + ' ↗</a>' : "—";
      return '<tr><td class="rank">' + (m.rank != null ? m.rank : "—") + '</td>' +
        '<td>' + vdot(m.canon.vendor) + esc(m.canon.id) +
          (m.effort ? ' <span class="cell-cost">' + esc(m.effort) + '</span>' : "") + '</td>' +
        '<td>' + vname(m.canon.vendor) + '</td>' +
        '<td>' + esc(m.agent || "—") + (m.platform ? ' <span class="cell-cost">' + esc(m.platform) + '</span>' : "") + '</td>' +
        '<td class="num">' + bvSpan("wujisuan", m.score.toFixed(2)) + '</td>' +
        '<td class="num">' + range + '</td>' +
        '<td class="num">' + esc(m.date || "—") + '</td>' +
        '<td>' + video + '</td></tr>';
    });
    fillTable("wjTable",
      ["#", "模型", "厂商", "Harness", "总分", "不确定区间", "实测日期", "实测视频"],
      rows, headTone(["", "", "", "", "num", "num", "num", ""], 4, 4, "wujisuan"));
    // 任务卡:两期实测任务的题名、体裁与提示词(长提示词全文折叠)
    document.getElementById("wjTasks").innerHTML = tasks.map(function (t) {
      return '<div class="wj-task">' +
        '<p class="wj-task-head"><span class="wj-task-no">' + esc(t.number || "") + '</span>' +
          '<b>' + esc(t.name) + '</b>' +
          (t.kind ? ' <span class="tag">' + esc(t.kind) + '</span>' : "") + '</p>' +
        (t.subtitle ? '<p class="wj-task-sub">' + esc(t.subtitle) + '</p>' : "") +
        (t.description ? '<p class="wj-task-desc">' + esc(t.description) + '</p>' : "") +
        (t.promptShort ? '<p class="wj-task-prompt">' + esc(t.promptShort) + '</p>' : "") +
        (t.promptLong ? '<details class="wj-task-long"><summary>完整提示词全文</summary>' +
          '<pre class="wj-pre">' + esc(t.promptLong) + '</pre></details>' : "") +
        '</div>';
    }).join("");
    // 逐条明细:模型 × 任务 × (提示词长度 × 轮次);列组合由源站 papers 实际出现的取值动态生成
    var byId = {};
    (src.papers || []).forEach(function (p) {
      var k = p.prompt + ":" + p.round;
      (byId[p.identity] || (byId[p.identity] = {}))[p.taskId + "|" + k] = p.score;
    });
    // 列序按语义排(短提示在前、首轮在最终前),不用字典序(否则「长提示」会排在「短提示」前)
    var comboRank = function (k) {
      var pr = k.split(":")[0], rd = k.split(":")[1];
      return (pr === "short" ? 0 : pr === "long" ? 1 : 2) * 10 + (rd === "oneshot" ? 0 : rd === "final" ? 1 : 2);
    };
    var byRank = function (a, b) { return comboRank(a) - comboRank(b); };
    var combos = {};
    (src.papers || []).forEach(function (p) {
      var k = p.prompt + ":" + p.round;
      var arr = combos[p.taskId] || (combos[p.taskId] = []);
      if (arr.indexOf(k) < 0) arr.push(k);
    });
    var labels = ["模型"];
    tasks.forEach(function (t) {
      (combos[t.id] || []).sort(byRank).forEach(function (k) {
        var pr = k.split(":")[0], rd = k.split(":")[1];
        labels.push(esc(t.name) + " " + (PROMPT_CN[pr] || esc(pr)) + "·" + (ROUND_CN[rd] || esc(rd)));
      });
    });
    var pRows = ms.map(function (m) {
      var rec = byId[m.identity] || {};
      var cells = "";
      tasks.forEach(function (t) {
        (combos[t.id] || []).sort(byRank).forEach(function (k) {
          var v = rec[t.id + "|" + k];
          cells += '<td class="num">' + (v != null ? bvSpan("wujisuan", v) : "—") + '</td>';
        });
      });
      return '<tr><td>' + vdot(m.canon.vendor) + esc(m.canon.id) + '</td>' + cells + '</tr>';
    });
    fillTable("wjPaperTable", labels, pRows,
      labels.map(function (h, i) { return i === 0 ? "" : "num bv bv-wujisuan"; }));
    document.getElementById("wjPaperCount").textContent =
      "共 " + (src.papers || []).length + " 条(模型 × 任务 × 提示词长度 × 轮次;缺项为该期未测)";
    // 长提示增益表:基准 = 各任务的「短提示最终/首轮」之和,变化 = 长提示对应项之和
    var gain = src.gain || {};
    var gRows = (gain.rows || []).map(function (r) {
      var m = ms.filter(function (x) { return x.identity === r.identity; })[0];
      var cells = "";
      tasks.forEach(function (t) {
        var bt = (r.byTask || {})[t.id] || {};
        cells += '<td class="num">' + (bt.short != null ? bt.short : "—") + '</td>' +
                 '<td class="num">' + (bt.long != null ? bt.long : "—") + '</td>';
      });
      var g = r.gain;
      var gTxt = g == null ? "—" : (g > 0 ? "+" : "") + g + "%";
      return '<tr><td>' + (m ? vdot(m.canon.vendor) + esc(m.canon.id) : esc(r.identity)) +
          (r.agent ? ' <span class="cell-cost">' + esc(r.agent) + '</span>' : "") + '</td>' +
        cells +
        '<td class="num">' + (r.baseline != null ? r.baseline : "—") + '</td>' +
        '<td class="num">' + (r.improved != null ? r.improved : "—") + '</td>' +
        '<td class="num">' + gTxt + '</td></tr>';
    });
    var gLabels = ["模型"];
    tasks.forEach(function (t) { gLabels.push(esc(t.name) + " 短", esc(t.name) + " 长"); });
    gLabels.push("基准合计", "长提示合计", "增益率");
    if (gRows.length) fillTable("wjGainTable", gLabels, gRows,
      gLabels.map(function (h, i) { return i === 0 ? "" : "num"; }));
    // 脚注:量纲与口径 + 计分说明 + 来源
    document.getElementById("wjNote").innerHTML =
      '<div class="note-line"><b>量纲</b>单任务分 0-100,主榜「总分」为' + esc((src.scale && src.scale.unit) || "两任务分之和") +
        ',源站自报量程 ' + esc((src.scoreRange || []).join(" – ") || "0 – " + scaleMax) + '。</div>' +
      '<div class="note-line"><b>口径提醒</b>每个模型跑在其<b>自家 agent harness</b>(Harness 列,如 cc / codex / zcode / qoder / cursor)下,' +
        '分数同时反映模型与该脚手架的质量;每模型仅一次完整实测(n=1),「不确定区间」为源站人工标注的可达分数范围,<b>不是统计置信区间</b>。</div>' +
      (gain.formula ? '<div class="note-line"><b>增益率口径</b>' + esc(gain.metric || "") + ' = ' + esc(gain.formula || "") + '</div>' : "") +
      '<div class="note-line"><b>说明</b>已计入总览综合分(「第三方实测」组计分组之一,权重 10%)与命中数(分母 7);' +
        '因量纲(两任务分之和)与主基准原生分不可比,已排除在跨源一致性校验之外。主榜 ' + ms.length + ' 个模型,逐条明细 ' + (src.papers || []).length + ' 条。</div>' +
      '<div class="note-line"><b>来源</b>' +
        '<a href="' + esc(src.url || "") + '" target="_blank" rel="noopener">' + esc(src.url || "") + ' ↗</a>' +
        (src.methodUrl ? ' · <a href="' + esc(src.methodUrl) + '" target="_blank" rel="noopener">实测视频合集 ↗</a>' : "") +
        (src.author ? ' · ' + esc(src.author) : '') + '</div>';
  }

  // ===== 7) 权威基准测试(权威基准) =====
  // Terminal-Bench(4.0/3.0/2.1)合并为一个基准组计入总览/综合分/命中数;
  // 其余源(TB-Science/OSWorld/ALE/ARC-AGI-3/BenchCAD/GPQA/HLE)仅本页展示;
  // NL2Repo-Bench 自 2026-09-19 起由「计入综合分」改为仅本页展示
  // ----- 大纲预览相关状态 -----
  var authSecSeq = 0;        // 章节锚点序号:每次重渲染自 0 起,保证 id 稳定可复用
  var authNavItems = [];     // 当前大纲对应的章节元素(与大纲项同序一一对应)
  var authPendingTarget = null; // 平滑跳转进行中的目标 id:动画期间锁定高亮,落位/超时后解除
  var authPendingDeadline = 0;
  var authSpyRaf = 0;

  function authSectionHtml(head, tag, url, tableHtml, noteHtml) {
    authSecSeq += 1;
    return '<section class="auth-block" id="authSec' + authSecSeq + '" data-outline="' + esc(head) + '">' +
      '<h3 class="auth-title">' + esc(head) + ' <span class="tag">' + esc(tag) + '</span>' +
      (url ? ' <a class="auth-link" href="' + esc(url) + '" target="_blank" rel="noopener">原站 ↗</a>' : '') +
      '</h3>' + tableHtml +
      (noteHtml ? '<p class="source-note">' + noteHtml + '</p>' : '') +
      '</section>';
  }

  // ----- 大纲预览:快速跳转与滚动高亮 -----
  // 顶部粘性标签栏底边高度:跳转落点与滚动高亮共用的基准线(再下移 AUTH_GAP 留出间距)
  var AUTH_GAP = 16;
  function authAnchorTop() {
    var tabs = document.getElementById("tabs");
    return tabs ? tabs.getBoundingClientRect().height : 0;
  }
  function setAuthNavActive(id) {
    var list = document.getElementById("authOutlineList");
    if (!list) return;
    Array.prototype.forEach.call(list.children, function (a) {
      a.classList.toggle("active", a.getAttribute("data-target") === id);
    });
  }
  // 依据各章节相对基准线的位置判定当前章节(章节在文档中单调排列,取最后一个已越线者)
  function syncAuthNav() {
    if (state.tab !== "authority" || !authNavItems.length) return;
    // 平滑跳转动画期间:保持已点选的高亮不动,直到落位(或超时),避免高亮在中途章节间闪跳
    if (authPendingTarget) {
      var pt = document.getElementById(authPendingTarget);
      var atBottom = window.pageYOffset + window.innerHeight >= document.documentElement.scrollHeight - 2;
      var landed = !pt || atBottom ||
        Math.abs(pt.getBoundingClientRect().top - (authAnchorTop() + AUTH_GAP)) <= 2;
      if (!landed && Date.now() < authPendingDeadline) return;
      authPendingTarget = null;
    }
    var line = authAnchorTop() + AUTH_GAP, current = authNavItems[0].id;
    // 2px 容差:跳转落点常精确落在基准线上,亚像素取整会让「<=」判定漏掉当前章节
    for (var i = 0; i < authNavItems.length; i++) {
      if (authNavItems[i].getBoundingClientRect().top - line <= 2) current = authNavItems[i].id;
      else break;
    }
    // 滚动到底部时末章可能尚未越过基准线,强制高亮末章
    if (window.pageYOffset + window.innerHeight >= document.documentElement.scrollHeight - 2) {
      current = authNavItems[authNavItems.length - 1].id;
    }
    setAuthNavActive(current);
  }
  function jumpToAuthSection(id) {
    var el = document.getElementById(id);
    if (!el) return;
    flushAuthLazy(); // 先补齐下方章节表格,滚动落点基于最终布局(见 flushAuthLazy 注释)
    var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var top = el.getBoundingClientRect().top + window.pageYOffset - authAnchorTop() - AUTH_GAP;
    // 无动效偏好时动画瞬时完成,无需锁定;否则锁定至落位或最长 3s
    authPendingTarget = reduce ? null : id;
    authPendingDeadline = Date.now() + 3000;
    setAuthNavActive(id); // 立即高亮,避免平滑滚动期间高亮滞后
    window.scrollTo({ top: Math.max(0, top), behavior: reduce ? "auto" : "smooth" });
  }
  // 由已渲染的 .auth-block 生成大纲项(标题取 data-outline,副标题取 tag 首段)
  function renderAuthOutline() {
    var list = document.getElementById("authOutlineList");
    var wrap = document.getElementById("authWrap");
    if (!list || !wrap) return;
    var secs = wrap.querySelectorAll(".auth-block");
    authNavItems = [];
    list.innerHTML = secs.length ? "" : '<span class="auth-outline-empty">暂无章节</span>';
    Array.prototype.forEach.call(secs, function (sec) {
      var h = sec.querySelector(".auth-title");
      var tagTxt = h && h.querySelector(".tag") ? h.querySelector(".tag").textContent.trim() : "";
      var label = sec.getAttribute("data-outline") || (h ? h.textContent.trim() : "");
      var a = document.createElement("a");
      a.className = "auth-outline-item";
      a.href = "#" + sec.id;
      a.setAttribute("data-target", sec.id);
      a.title = label; // 名称过长被省略号截断时,悬停可见全称
      // 副标题 = 标签首段(如「终端命令行任务」「科研工作流」);含「计入总览」者打「计」标
      a.innerHTML = '<span class="ao-idx">' + (authNavItems.length + 1) + '</span>' +
        '<span class="ao-body"><span class="ao-label">' + esc(label) + '</span>' +
        (tagTxt ? '<span class="ao-sub">' + esc(tagTxt.split("·")[0].trim()) + '</span>' : "") + '</span>' +
        (tagTxt.indexOf("计入总览") >= 0
          ? '<span class="ao-badge" title="并入总览综合分与命中数">计</span>' : "");
      list.appendChild(a);
      authNavItems.push(sec);
    });
    var cnt = document.getElementById("authOutlineCount");
    if (cnt) cnt.textContent = authNavItems.length ? authNavItems.length + " 节" : "";
    // 下一帧之后再同步高亮:此时表格/图表已填充完毕,章节高度才是最终值(进入时立即正确高亮)
    scheduleAuthNavSync();
  }
  // 延迟到下一帧「之后」再同步高亮:
  // 页面刚从 display:none 切为可见时,首个 getBoundingClientRect 会触发整页强制布局(约 20ms);
  // 放在点击处理函数内会直接卡住切页反馈,双 rAF 让浏览器先按正常帧管线完成布局与首绘,此时再读即为廉价操作。
  function scheduleAuthNavSync() {
    requestAnimationFrame(function () { requestAnimationFrame(syncAuthNav); });
  }
  // TB 柱状图(升序使最高在上)延后到首帧之后再初始化:ECharts 首次 init 约 100ms,
  // 留在同步渲染里会让进入该页明显卡顿;容器高度已在 setAuthTbVer 同步设定,延后不影响布局测量。
  // 回调时若该页仍在后台(空闲预渲染场景,display:none)则不 init——对 0 尺寸容器 init 只会得到空图,
  // authChartDone 保持 false,等下次进入该页时由 renderAuthority 早退分支补挂。
  function scheduleAuthChart() {
    if (authChartQueued || !authTbMs.length) return;
    authChartQueued = true;
    requestAnimationFrame(function () { requestAnimationFrame(function () {
      authChartQueued = false;
      var page = document.getElementById("page-authority");
      if (!page || page.offsetParent === null) return;
      authChartDone = true;
      var tbSorted = authTbMs.slice().sort(function (a, b) { return a.score - b.score; }).slice(-25);
      CH.apply("authTBBar", CH.barOption(
        tbSorted.map(tbBarLabel),
        tbSorted.map(function (m) { return m.score; }),
        CH.brand(), "%", { max: 100, left: 200, labelSize: 11 }
      ));
    }); });
  }
  // 空闲时预渲染权威基准页:该页构建约 3200 个 DOM 节点,留到用户点击时同步做会卡住切页反馈。
  // requestIdleCallback 带 timeout 上限,避免页面长期忙碌时一直排不上;不支持时退化为 setTimeout。
  // 下方章节表格已改为滚动临近才填表(见 authDeferTable),预渲染本身已很轻,timeout 取短值
  // 尽量赶在用户首次点击前完成,点击时只剩首屏两个章节的同步构建。
  function scheduleAuthPrerender() {
    var go = function () {
      if (!authRendered && state.tab !== "authority") renderAuthority();
    };
    if (window.requestIdleCallback) window.requestIdleCallback(go, { timeout: 1200 });
    else setTimeout(go, 800);
  }
  // 权威基准页一次性渲染并缓存:
  // 1) 该页约 3200 个 DOM 节点,每次切页重建会造成可见卡顿(首次同步约 200ms);
  // 2) 更关键的是 wrap.innerHTML 会销毁 #authTBBar,而 CH 的实例注册表仍指向旧节点,
  //    导致 ECharts 实例与容器失联、第二次进入起图表空白。渲染一次并复用可同时修掉两者。
  // 首次渲染通常由 init 在空闲时后台预执行(见 scheduleAuthPrerender):在 display:none 的
  // 后台页构建只有解析成本、无布局/绘制成本,用户点击时内容已就绪,切页只剩正常显示布局。
  // 数据为页面加载时固定的快照(无运行时刷新),缓存安全;视口变化由 showTab 派发的 resize 事件兜底。
  var authRendered = false;
  // TB 柱状图初始化状态:DOM 已就绪但图表未必已画(后台预渲染时无法对 0 尺寸容器 init)
  var authChartDone = false, authChartQueued = false, authTbMs = [];
  // 下方章节表格懒填表:进页/预渲染只建章节骨架,表格滚动临近可视区(提前约 200px)才填充,
  // 显著降低每次进页的节点构建与布局/绘制开销(下方章节表格占整页约 3200 节点的大半);
  // 每表填充一次后即注销观察。不支持 IntersectionObserver 的环境由 authDeferTable 回退为立即填充。
  var authLazyMap = new Map(), authLazyObs = null;
  function authDeferTable(id, headers, rowsHtml, headerClasses) {
    var t = document.getElementById(id);
    if (!t) return;
    if (!("IntersectionObserver" in window)) { fillTable(id, headers, rowsHtml, headerClasses); return; }
    if (!authLazyObs) {
      authLazyObs = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (!en.isIntersecting) return;
          var spec = authLazyMap.get(en.target);
          if (!spec) return;
          authLazyObs.unobserve(en.target);
          authLazyMap.delete(en.target);
          fillTable(en.target.id, spec.headers, spec.rowsHtml, spec.headerClasses);
        });
      }, { rootMargin: "200px 0px" });
    }
    authLazyMap.set(t, { headers: headers, rowsHtml: rowsHtml, headerClasses: headerClasses });
    authLazyObs.observe(t);
  }
  // 冲刷全部待填表格(大纲跳转前调用):跳转落点按点击时刻的布局计算,若平滑滚动途中逐表
  // 填充,章节高度陆续变化会让目标位置漂移;先补齐全部表格再滚动,落点与滚动高亮都基于最终布局
  function flushAuthLazy() {
    if (!authLazyMap.size) return;
    if (authLazyObs) authLazyObs.disconnect();
    authLazyMap.forEach(function (spec, t) {
      fillTable(t.id, spec.headers, spec.rowsHtml, spec.headerClasses);
    });
    authLazyMap.clear();
  }
  // ----- Terminal-Bench 版本切换 -----
  // 会话内记住所选版本,页面刷新回默认 4.0(当前主榜);章节 DOM 一次渲染,切换只重填内容不重建
  var authTbVer = "4.0";
  // 各版本元数据:srcKey 对应 D.src 键以取各自的更新日期;dynUrl=展示链接优先取数据文件 url(4.0 随抓取更新);
  // tasks 文案描述各版任务规模与口径,抓取端调整主源时需同步
  var TB_VER_META = [
    { ver: "4.0", label: "4.0 主榜", srcKey: "tbench", dynUrl: true,
      url: "https://www.tbench.ai/leaderboard/terminal-bench/4.0",
      tasks: "66 个任务(校准资源并移除饱和任务),当前主站 agent×model 榜单" },
    { ver: "3.0", label: "3.0 备选", srcKey: "tbenchV3",
      url: "https://snorkel.ai/leaderboard/terminal-bench-3-0/",
      tasks: "74 个任务(含更长周期/多容器/GPU 环境),snorkel.ai 权威镜像,每日自动抓取(agent×model)" },
    { ver: "2.1", label: "2.1 历史", srcKey: "tbenchV21",
      url: "https://www.datalearner.com/benchmarks/terminal-bench-2-1",
      tasks: "89 个任务;datalearner 厂商官方发布成绩为主源,llm-stats 归一化自报分为补充" }
  ];
  function tbMeta(ver) {
    for (var i = 0; i < TB_VER_META.length; i++) if (TB_VER_META[i].ver === ver) return TB_VER_META[i];
    return TB_VER_META[0];
  }
  function tbVerUrl(meta) {
    var s = D.src[meta.srcKey] || {};
    return (meta.dynUrl && s.url) ? s.url : meta.url;
  }
  // 版本来源注:版本特定段(来源/更新日期/任务规模与口径)+ 公共段(多版本合并计分规则)
  function tbNoteHtml(meta) {
    var s = D.src[meta.srcKey] || {};
    return '来源:' + esc(tbVerUrl(meta)) + ' · 更新 ' + esc(s.updated || "") + ' · ' + meta.tasks +
      ',得分越高越好。三版合并为一个基准组计入总览综合分(「榜单基准」组,权重 11%)与命中数,优先以最高版本为代表(4.0>3.0>2.1);' +
      '其中 2.1 为厂商发布/归一化自报分口径,与 4.0/3.0 的官方 agent×model 解决率不同。';
  }
  // 柱状图条目标签:2.1 为模型级数据无 agent 字段,以「—」占位
  function tbBarLabel(m) {
    return m.model + "·" + (m.agent || "—") + (m.effort ? "(" + m.effort + ")" : "");
  }
  // 指定版本表格行(条目已按解决率降序;混合多渠道时逐行标注来源徽标)
  function buildTbRows(ms) {
    var mixed = mixedSrc(ms);
    return ms.map(function (m, i) {
      return '<tr><td class="rank">' + (i + 1) + '</td><td>' + vdot(m.canon.vendor) + esc(m.model) +
        (m.effort ? ' <span class="cell-cost">' + esc(m.effort) + '</span>' : "") + (mixed ? srcBadge(m.src) : "") + '</td>' +
        '<td>' + esc(m.agent || "—") + '</td><td class="num"><span class="bv bv-tbench">' + m.score + '±' + (m.ci != null ? m.ci : "—") + '%</span></td>' +
        '<td class="num">' + esc(m.date || "—") + '</td><td class="num">' + esc(m.tokens || "—") + '</td>' +
        '<td class="num">' + esc(m.cost || "—") + '</td></tr>';
    });
  }
  // 版本切换按钮组(复用套餐页胶囊按钮组样式)
  function tbSwitchHtml() {
    return '<div class="tb-ver-switch"><span class="tb-ver-label">版本</span>' +
      '<div class="qc-scope" id="authTbSwitch" role="group" aria-label="Terminal-Bench 版本切换">' +
      TB_VER_META.map(function (t) {
        var act = t.ver === authTbVer;
        return '<button type="button" class="qc-scope-btn' + (act ? " is-active" : "") +
          '" data-tb-ver="' + t.ver + '" aria-pressed="' + act + '">' + t.label + '</button>';
      }).join("") + '</div></div>';
  }
  // 版本切换单一入口:只重填表格/来源注/原站链接/柱状图,不重建章节 DOM(ECharts 实例安全)。
  // 柱状图 >25 条取 Top 25(2.1 全量 43 条,避免高度上限内挤压);已 init 则直接重画,
  // 否则(后台预渲染、图表未挂)走 scheduleAuthChart 延后补挂。
  function setAuthTbVer(ver) {
    var meta = tbMeta(ver);
    authTbVer = meta.ver;
    var ms = D.tbenchByVersion(authTbVer);
    fillTable("authTBTable", ["#", "模型", "Agent", "解决率±CI", "发布日期", "Tokens", "成本"],
      buildTbRows(ms), ["", "", "", "num bv bv-tbench", "num", "num", "num"]);
    var note = document.getElementById("authTBNote");
    if (note) note.innerHTML = tbNoteHtml(meta);
    var link = document.getElementById("authTBLink");
    if (link) link.href = tbVerUrl(meta);
    var sw = document.getElementById("authTbSwitch");
    if (sw) Array.prototype.forEach.call(sw.querySelectorAll("[data-tb-ver]"), function (b) {
      var act = b.getAttribute("data-tb-ver") === authTbVer;
      b.classList.toggle("is-active", act);
      b.setAttribute("aria-pressed", act ? "true" : "false");
    });
    authTbMs = ms;
    var tbBarEl = document.getElementById("authTBBar");
    if (tbBarEl && ms.length) {
      var shown = ms.slice().sort(function (a, b) { return a.score - b.score; }).slice(-25);
      tbBarEl.style.height = Math.min(760, Math.max(280, shown.length * 30 + 90)) + "px";
      var h3 = document.getElementById("authTBBarTitle");
      if (h3) h3.textContent = "Terminal-Bench " + authTbVer + " 解决率排行(agent×model Top 25)";
      if (authChartDone) {
        CH.apply("authTBBar", CH.barOption(
          shown.map(tbBarLabel),
          shown.map(function (m) { return m.score; }),
          CH.brand(), "%", { max: 100, left: 200, labelSize: 11 }
        ));
      } else scheduleAuthChart();
    }
  }
  function renderAuthority() {
    if (authRendered) {
      if (!authChartDone) scheduleAuthChart();
      scheduleAuthNavSync();
      return;
    }
    var S = D.src;
    var html = "";
    authSecSeq = 0;
    // 0) DeepSWE(主基准,官方实测榜 T1 + datalearner 厂商发布 T2 只补缺;v1.1 每日刷新 + v1.0 历史快照)
    var ds = S.deepswe || {};
    var dsMs = D.deepSwe();
    var dsMixed = mixedSrc(dsMs);
    var dsAuthRows = dsMs.map(function (m, i) {
      return '<tr><td class="rank">' + (i + 1) + '</td><td>' + vdot(m.canon.vendor) + esc(m.name) + verBadge(m.version) + (dsMixed ? srcBadge(m.src) : "") + '</td>' +
        '<td>' + esc(m.effort || "—") + '</td><td class="num"><span class="bv bv-deepswe">' + m.pass1 + (m.ci != null ? '±' + m.ci : "") + '%</span></td>' +
        '<td class="num">' + (m.cost != null ? '$' + m.cost : "—") + '</td>' +
        '<td class="num">' + (m.outTok != null ? fmtK(m.outTok) : "—") + '</td>' +
        '<td class="num">' + (m.steps != null ? m.steps : "—") + '</td></tr>';
    });
    var dsvc = D.deepSweVersionCounts();
    html += authSectionHtml("DeepSWE", "长程软件工程 · 计入总览 · 主基准", ds.url,
      '<div class="table-wrap"><table id="authDeepSweTable" class="data-table"></table></div>',
      '主渠道:https://deepswe.datacurve.ai/(官方实测榜 T1)· 补充:datalearner(厂商官方发布 T2,只补缺)· Qwen 官方博客/模型卡(T2 厂商发布,仅补缺,effort 未标注·协议不可比·仅供参考) · v1.1 更新 ' + esc(ds.updated || "") +
      ' · 共 ' + dsMs.length + ' 个模型(v1.1: ' + dsvc.v11 + ' / v1.0 独有: ' + dsvc.v10 + ')' +
      (ds.stats ? ' · v1.1 ' + ds.stats.tasks + ' 任务 / ' + ds.stats.repos + ' 仓库' : "") + '。' + esc(ds.channelPolicy || "") +
      '。本榜属「榜单基准」组,计入总览综合分(权重 16%)与命中数。');
    // 1) Terminal-Bench 多版本(4.0/3.0/2.1):合并为单一章节,章节内切换版本查看(默认 4.0 主榜);
    //    多版本仍合并为一个基准组计入总览,优先以最高版本为代表
    html += authSectionHtml("Terminal-Bench", "终端命令行任务 · 计入总览 · 版本切换", tbVerUrl(tbMeta(authTbVer)),
      tbSwitchHtml() +
      '<div class="chart-box"><h3 id="authTBBarTitle">Terminal-Bench ' + authTbVer + ' 解决率排行(agent×model Top 25)</h3><div id="authTBBar" class="chart"></div></div>' +
      '<div class="table-wrap"><table id="authTBTable" class="data-table"></table></div>',
      tbNoteHtml(tbMeta(authTbVer)));
    // 2) Terminal-Bench-Science 0.1
    var tbs = S.tbscience || {};
    var tbsMs = D.tbScience();
    var tbsRows = tbsMs.map(function (m, i) {
      return '<tr><td class="rank">' + (i + 1) + '</td><td>' + vdot(m.canon.vendor) + esc(m.model) + '</td>' +
        '<td>' + esc(m.agent) + '</td><td class="num">' + m.score + (m.ci != null ? '±' + m.ci + '%' : "%") + '</td></tr>';
    });
    html += authSectionHtml("Terminal-Bench-Science 0.1", "科研工作流 · 仅展示", tbs.announcementUrl || tbs.url,
      '<div class="table-wrap"><table id="authTBScienceTable" class="data-table"></table></div>',
      '来源:' + esc(tbs.url || "") + '(官方:' + esc(tbs.announcementUrl || "") + ') · 版本 ' + esc(tbs.version || "") + ' · 更新 ' + esc(tbs.updated || "") +
      ' · 70 个来自真实科研流程的任务(每任务 3 次独立试验),解决率越高越好。' + esc(tbs.channelPolicy || "") + '(本榜无更高优先级渠道)。本榜仅展示,不计入综合分。');
    // 3) OSWorld 2.0
    var os = S.osworld || {};
    var osMs = D.osworld();
    var osMixed = mixedSrc(osMs);
    var osRows = osMs.map(function (m, i) {
      return '<tr><td class="rank">' + (i + 1) + '</td><td' + (m.note ? ' title="' + esc(m.note) + '"' : "") + '>' + vdot(m.canon.vendor) + esc(m.system) + (osMixed ? srcBadge(m.src) : "") + '</td>' +
        '<td class="num">' + m.score + '%</td><td>' + (m.org ? vname(m.canon.vendor, m.org) : "—") + '</td>' +
        '<td class="num">' + esc(m.reported || "—") + '</td>' +
        '<td>' + (m.url ? '<a href="' + esc(m.url) + '" target="_blank" rel="noopener">来源 ↗</a>' : "—") + '</td></tr>';
    });
    html += authSectionHtml("OSWorld 2.0", "长时程桌面计算机使用 · 仅展示", os.officialUrl || os.url,
      '<div class="table-wrap"><table id="authOSWorldTable" class="data-table"></table></div>',
      '主渠道:datalearner(厂商官方发布 partial 口径)· 补充:' + esc(os.url || "") + '(官方:' + esc(os.officialUrl || "") + ',系统级条目仅追加) · 更新 ' + esc(os.updated || "") +
      ' · 108 个长时程桌面工作流(人类中位耗时约 1.6 小时),部分得分(检查点达成比例)越高越好;二进制完成率极低,故按部分得分排序。' + esc(os.channelPolicy || "") + '。本榜仅展示,不计入综合分。');
    // 4) Agents' Last Exam
    var ale = S.lastexam || {};
    var aleMs = D.lastExam();
    var aleMixed = mixedSrc(aleMs);
    var aleRows = aleMs.map(function (m, i) {
      return '<tr><td class="rank">' + (i + 1) + '</td><td>' + vdot(m.canon.vendor) + esc(m.model) + (aleMixed ? srcBadge(m.src) : "") + '</td>' +
        '<td>' + (m.org ? vname(m.canon.vendor, m.org) : "—") + '</td><td class="num">' + m.score + '%</td>' +
        '<td class="num">' + esc(m.size || "—") + '</td><td class="num">' + esc(m.context || "—") + '</td></tr>';
    });
    html += authSectionHtml("Agents' Last Exam", "真实专业工作流 · 仅展示", ale.officialUrl || ale.url,
      '<div class="table-wrap"><table id="authLastExamTable" class="data-table"></table></div>',
      '主渠道:datalearner(厂商官方发布)· 补充:' + esc(ale.url || "") + '(官方:' + esc(ale.officialUrl || "") + ',Qwen 官方发布 T2 仅补缺) · 更新 ' + esc(ale.updated || "") +
      ' · 1500+ 个真实专业工作流任务(55 子行业),Pass@1 为完美得分运行占比,越高越好。' + esc(ale.channelPolicy || "") + '。本榜仅展示,不计入综合分。');
    // 5) ARC-AGI-3
    var ar = S.arcagi3 || {};
    var arMs = D.arcagi3();
    var arMixed = mixedSrc(arMs);
    var arRows = arMs.map(function (m, i) {
      return '<tr><td class="rank">' + (i + 1) + '</td><td>' + vdot(m.canon.vendor) + esc(m.model) + (arMixed ? srcBadge(m.src) : "") + '</td>' +
        '<td class="num">' + m.score + '%</td><td class="num">' + esc(m.size || "—") + '</td>' +
        '<td class="num">' + esc(m.context || "—") + '</td><td class="num">' + esc(m.cost || "—") + '</td></tr>';
    });
    html += authSectionHtml("ARC-AGI-3", "交互式智能体推理 · 仅展示", ar.officialUrl || ar.url,
      '<div class="table-wrap"><table id="authARCAGI3Table" class="data-table"></table></div>',
      '主渠道:datalearner(厂商官方发布,Standard harness 口径)· 补充:' + esc(ar.url || "") + '(官方:' + esc(ar.officialUrl || "") + ') · 更新 ' + esc(ar.updated || "") +
      ' · 135 个交互式游戏环境,RHAE(相对人类行动效率,人类基线 100%)越高越好。' + esc(ar.channelPolicy || "") + '。本榜仅展示,不计入综合分。');
    // 6) BenchCAD
    var bc = S.benchcad || {};
    var bcData = D.benchcad();
    function bcTable(id, rows, cols, headCls) {
      var body = rows.map(function (m, i) {
        return '<tr><td class="rank">' + (i + 1) + '</td><td>' + vdot(m.canon.vendor) + esc(m.model) +
          (m.think ? ' <span class="cell-cost">' + esc(m.think) + '</span>' : "") + '</td><td>' + (m.org ? vname(m.canon.vendor, m.org) : "—") + '</td>' +
          cols.map(function (c) { return '<td class="num">' + (m[c] != null ? m[c] : "—") + '</td>'; }).join("") + '</tr>';
      });
      // 下方章节表格走懒填表(滚动临近才建 DOM),首屏章节(DeepSWE/TB)仍同步填
      authDeferTable(id, ["#", "模型", "厂商"].concat(cols), body, ["", "", ""].concat(headCls));
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
    var gpMixed = mixedSrc(gpMs);
    var gpRows = gpMs.map(function (m, i) {
      return '<tr><td class="rank">' + (i + 1) + '</td><td>' + vdot(m.canon.vendor) + esc(m.model) + (gpMixed ? srcBadge(m.src) : "") + '</td>' +
        '<td>' + (m.org ? vname(m.canon.vendor, m.org) : "—") + '</td><td class="num">' + bvSpan("gpqa", m.score + '%') + '</td>' +
        '<td class="num">' + esc(m.size || "—") + '</td><td class="num">' + esc(m.context || "—") + '</td>' +
        '<td class="num">' + esc(m.cost || "—") + '</td></tr>';
    });
    html += authSectionHtml("GPQA Diamond", "研究生级科学问答 · 仅展示", gp.officialUrl || gp.url,
      '<div class="table-wrap"><table id="authGpqaTable" class="data-table"></table></div>',
      '来源:' + esc(gp.url || "") + '(官方:' + esc(gp.officialUrl || "") + ') · 更新 ' + esc(gp.updated || "") +
      ' · 研究生级科学多选问答(GPQA 最难 198 题子集,生物/物理/化学),Accuracy 越高越好、领域专家约 65%、随机基线 25%。' + esc(gp.channelPolicy || "") + '(datalearner GPQA 为 448 题全量集,口径不同未并入;补充 benchlm 镜像与 AA 复测口径两源,AA 为第三方自家 harness、分数偏差 ±1 内,行级来源徽标区分)。本榜仅展示,不计入综合分。');
    // 8) HLE(Humanity's Last Exam)
    var hl = S.hle || {};
    var hlMs = D.hle();
    var hlMixed = mixedSrc(hlMs);
    var hlRows = hlMs.map(function (m, i) {
      return '<tr><td class="rank">' + (i + 1) + '</td><td>' + vdot(m.canon.vendor) + esc(m.model) + (hlMixed ? srcBadge(m.src) : "") + '</td>' +
        '<td>' + (m.org ? vname(m.canon.vendor, m.org) : "—") + '</td><td class="num">' + bvSpan("hle", m.score + '%') + '</td>' +
        '<td class="num">' + esc(m.size || "—") + '</td><td class="num">' + esc(m.context || "—") + '</td>' +
        '<td class="num">' + esc(m.cost || "—") + '</td></tr>';
    });
    html += authSectionHtml("Humanity's Last Exam", "前沿知识广度 · 仅展示", hl.officialUrl || hl.url,
      '<div class="table-wrap"><table id="authHleTable" class="data-table"></table></div>',
      '主渠道:datalearner(厂商官方发布)· 补充:llm-stats 聚合表、benchlm.ai 镜像与 AA 复测口径 · 更新 ' + esc(hl.updated || "") +
      ' · 2500 道专家撰写、无联网可检索解的前沿题(数学/科学/人文学科等),闭卷得分越高越好;' + esc(hl.channelPolicy || "") +
      '。口径注:AA 复测为第三方自家 harness(接近无工具口径),分数系统性低于官方口径约 5 分,仅补官方渠道未收录的模型,行级「AA 复测」徽标区分;重叠模型保留现有高分。本榜仅展示,不计入综合分。');
    // 9) NL2Repo-Bench
    var n2 = S.nl2repo || {};
    var n2Ms = D.nl2repo();
    var n2Mixed = mixedSrc(n2Ms);
    var n2Rows = n2Ms.map(function (m, i) {
      return '<tr><td class="rank">' + (i + 1) + '</td><td>' + vdot(m.canon.vendor) + esc(m.model) + (n2Mixed ? srcBadge(m.src) : "") + '</td>' +
        '<td>' + (m.org ? vname(m.canon.vendor, m.org) : "—") + '</td><td class="num">' + m.score + '%</td>' +
        '<td class="num">' + esc(m.size || "—") + '</td><td class="num">' + esc(m.context || "—") + '</td>' +
        '<td class="num">' + esc(m.cost || "—") + '</td></tr>';
    });
    html += authSectionHtml("NL2Repo-Bench", "长程仓库生成 · 仅展示", n2.officialUrl || n2.url,
      '<div class="table-wrap"><table id="authNl2repoTable" class="data-table"></table></div>',
      '主渠道:官方论文评测表(arxiv)与 datalearner(厂商官方发布)· 补充:llm-stats 聚合表与 benchlm.ai 镜像、Qwen 官方发布(T2,仅补缺) · 更新 ' + esc(n2.updated || "") +
      ' · 给定单一 NL 需求文档从零生成可安装 Python 库(约 103 个任务),test-pass-rate 越高越好;' + esc(n2.channelPolicy || "") +
      ',自 2026-09-19 起不再计入总览综合分与命中数(原权重 9%),本榜仅展示。');
    // 10) ProgramBench
    var pb = S.programbench || {};
    var pbMs = D.programbench();
    var pbMixed = mixedSrc(pbMs);
    var pbRows = pbMs.map(function (m, i) {
      // 显示名用 canon.id:vals 镜像的 slug 转名(如 "Claude Fable 5 1")经别名归一后回显规范名
      return '<tr><td class="rank">' + (i + 1) + '</td><td>' + vdot(m.canon.vendor) + esc(m.canon.id || m.model) +
        (m.effort ? ' <span class="cell-cost">' + esc(m.effort) + '</span>' : "") + (pbMixed ? srcBadge(m.src) : "") + '</td>' +
        '<td>' + esc(m.agent || "—") + '</td><td class="num">' + bvSpan("programbench", m.score + '%') + '</td>' +
        '<td class="num">' + (m.almost != null ? m.almost + '%' : "—") + '</td>' +
        '<td class="num">' + (m.rawPassRate != null ? m.rawPassRate + '%' : "—") + '</td></tr>';
    });
    html += authSectionHtml("ProgramBench", "cleanroom 程序重建 · 仅展示", pb.officialUrl || pb.url,
      '<div class="table-wrap"><table id="authProgrambenchTable" class="data-table"></table></div>',
      '来源:' + esc(pb.url || "") + '(官方:' + esc(pb.officialUrl || "") + ',Meta Superintelligence Labs · Stanford · Harvard)· 补充镜像 vals.ai · 双源按模型合并取最高 · 更新 ' + esc(pb.updated || "") +
      ' · 仅给编译后二进制与文档,智能体从零重建 200 个真实开源项目并复现原程序行为(行为级隐藏测试,不联网、禁止反编译);Fully Resolved 为主指标,Almost(≥95% 行为测试通过)与 Raw Pass Rate(vals 镜像)为辅助,均越高越好。本榜仅展示,不计入综合分与命中数(主指标整体 0-7 分,区分度极低)。');
    // 11) CursorBench(Cursor 官方 · 编码 Agent 实测)
    var cb = S.cursorbench || {};
    var cbMs = D.cursorbench();
    var cbRows = cbMs.map(function (m, i) {
      return '<tr><td class="rank">' + (i + 1) + '</td><td>' + vdot(m.canon.vendor) + esc(m.canon.id || m.model) + '</td>' +
        '<td>' + (m.effort ? esc(m.effort) : "—") + '</td><td class="num">' + bvSpan("cursorbench", m.score + '%') + '</td>' +
        '<td class="num">' + fmtUsd(m.costUsd) + '</td>' +
        '<td class="num">' + (m.tokens != null ? fmtK(m.tokens) : "—") + '</td>' +
        '<td class="num">' + (m.steps != null ? m.steps : "—") + '</td></tr>';
    });
    html += authSectionHtml("CursorBench", "编码 Agent 实测 · 仅展示", cb.officialUrl || cb.url,
      '<div class="table-wrap"><table id="authCursorbenchTable" class="data-table"></table></div>' +
      '<details class="md-details"><summary>全部档位明细 <span class="hint" id="cbCfgCount"></span></summary>' +
      '<div class="table-wrap"><table id="authCursorbenchCfgTable" class="data-table"></table></div></details>',
      '来源:' + esc(cb.url || "") + '(官方:' + esc(cb.officialUrl || "") + ',Cursor/Anysphere)· 版本 CursorBench ' + esc(cb.version || "") +
      ' · 更新 ' + esc(cb.updated || "") + ' · 共 ' + cbMs.length + ' 个模型 / ' + (cb.stats ? cb.stats.entries : "—") + ' 条 model×档位配置' +
      ' · 在 Cursor 自家 agent harness 上评测来自真实 Cursor 会话的「模糊、跨文件」任务(编辑/重构/排查/意图理解/长任务管理/设计一致性),agentic grader 判定、允许多种正确答案;' +
      '本表为模型级主榜(每模型取最优档位,与官方散点图同口径),展开可看全部档位明细;成本为按各模型公布单价折算的每任务平均成本。本榜仅展示,不计入综合分与命中数(harness 口径与其他基准不可比)。');
    // 12) FrontierCode(Cognition 官方 · 生产级代码质量/可合并性)
    var fc = S.frontiercode || {};
    var fcMs = D.frontiercode();
    var fcRows = fcMs.map(function (m, i) {
      return '<tr><td class="rank">' + (i + 1) + '</td><td>' + vdot(m.canon.vendor) + esc(m.canon.id || m.model) + '</td>' +
        '<td>' + esc(m.harness || "—") + '</td>' +
        (m.effort ? '<td>' + esc(m.effort) + '</td>' : '<td>—</td>') +
        '<td class="num">' + bvSpan("frontiercode", m.score + '%') + '</td>' +
        '<td class="num">' + (m.passRate != null ? m.passRate + '%' : "—") + '</td>' +
        '<td class="num">' + fmtUsd(m.costUsd) + '</td>' +
        '<td class="num">' + (m.tokens != null ? fmtK(m.tokens) : "—") + '</td></tr>';
    });
    var fcTasks = fc.stats && fc.stats.tasks;
    html += authSectionHtml("FrontierCode", "生产级代码质量 · 仅展示", fc.boardUrl || fc.officialUrl || fc.url,
      '<div class="table-wrap"><table id="authFrontiercodeTable" class="data-table"></table></div>',
      '来源:' + esc(fc.url || "") + '(榜单页:' + esc(fc.boardUrl || "") + ',Cognition 官方)· 版本 FrontierCode ' + esc(fc.version || "") +
      ' · 更新 ' + esc(fc.updated || "") + ' · 共 ' + fcMs.length + ' 个模型(main ' + (fcTasks != null ? fcTasks : "—") + ' 题口径)' +
      ' · 任务由 20+ 资深开发者制作(每任务投入 40+ 小时),按正确性/测试质量/改动范围/风格/贴合代码库规范评估端到端「可合并性」而非仅能否跑通;' +
      '「标准分」为 main 子集下各推理档位最优(与官方主榜口径一致,已逐条校验),Pass Rate 为原始正确率,harness 为各厂商自家 CLI(devin/claude-code/codex 等)。本榜仅展示,不计入综合分与命中数(harness 口径不可比)。');
    // 渲染 + 图表 + 表格
    var wrap = document.getElementById("authWrap");
    if (wrap) wrap.innerHTML = html;
    renderAuthOutline(); // 由已渲染章节生成左侧大纲预览
    fillTable("authDeepSweTable", ["#", "模型", "强度", "Pass@1±CI", "平均成本", "输出tokens", "步数"], dsAuthRows, ["", "", "", "num bv bv-deepswe", "num", "num", "num"]);
    // TB 章节:定位章节容器,给来源注与标题原站链接补 id(authSectionHtml 不支持自定义 id),供版本切换时更新
    var tbTableEl = document.getElementById("authTBTable");
    var tbSec = tbTableEl ? tbTableEl.closest(".auth-block") : null;
    if (tbSec) {
      var tbNoteEl = tbSec.querySelector(".source-note"); if (tbNoteEl) tbNoteEl.id = "authTBNote";
      var tbLinkEl = tbSec.querySelector(".auth-link"); if (tbLinkEl) tbLinkEl.id = "authTBLink";
    }
    setAuthTbVer(authTbVer); // 按当前版本填表 + 来源注 + 柱状图(默认 4.0)
    // 版本切换(事件委托绑在按钮组容器上;重填不重建 DOM,ECharts 实例安全)
    var tbSw = document.getElementById("authTbSwitch");
    if (tbSw) tbSw.onclick = function (e) {
      var btn = e.target && e.target.closest ? e.target.closest("[data-tb-ver]") : null;
      if (btn) setAuthTbVer(btn.getAttribute("data-tb-ver"));
    };
    // 首屏以下章节表格统一懒填表(见 authDeferTable 注释):进页只构建章节骨架,
    // 滚动临近时才填充,降低每次进页的构建与布局开销;不支持时自动回退为立即填充
    authDeferTable("authTBScienceTable", ["#", "模型", "Agent", "解决率"], tbsRows, ["", "", "", "num"]);
    authDeferTable("authOSWorldTable", ["#", "系统(模型·配置)", "部分得分", "厂商", "上报时间", "来源"], osRows, ["", "", "num", "", "num", ""]);
    authDeferTable("authLastExamTable", ["#", "模型", "厂商", "Pass@1", "参数量", "上下文"], aleRows, ["", "", "", "num", "num", "num"]);
    authDeferTable("authARCAGI3Table", ["#", "模型", "RHAE", "参数量", "上下文", "API 价格"], arRows, ["", "", "num", "num", "num", "num"]);
    bcTable("authBCV2CTable", v2cRows, ["exec", "IoU-score", "total"], ["num", "num", "num"]);
    bcTable("authBCVQATable", vqaRows, ["l1", "l2", "l3", "l4", "total"], ["num", "num", "num", "num", "num"]);
    bcTable("authBCCQATable", cqaRows, ["l1", "l2", "l3", "l4", "total"], ["num", "num", "num", "num", "num"]);
    authDeferTable("authGpqaTable", ["#", "模型", "厂商", "Accuracy", "参数量", "上下文", "API 价格"], gpRows, ["", "", "", "num bv bv-gpqa", "num", "num", "num"]);
    authDeferTable("authHleTable", ["#", "模型", "厂商", "Score", "参数量", "上下文", "API 价格"], hlRows, ["", "", "", "num bv bv-hle", "num", "num", "num"]);
    authDeferTable("authNl2repoTable", ["#", "模型", "厂商", "Score", "参数量", "上下文", "API 价格"], n2Rows, ["", "", "", "num", "num", "num", "num"]);
    authDeferTable("authProgrambenchTable", ["#", "模型", "Agent", "Fully Resolved", "Almost", "Raw Pass Rate"], pbRows, ["", "", "", "num bv bv-programbench", "num", "num"]);
    authDeferTable("authCursorbenchTable", ["#", "模型", "档位", "CursorBench 4.0", "成本/任务", "Tokens/任务", "步数/任务"], cbRows, ["", "", "", "num bv bv-cursorbench", "num", "num", "num"]);
    // CursorBench 档位明细(52 条 model×档位):折叠区内展示,同样懒填表
    var cbCfgMs = D.cursorbenchConfigs();
    var cbCfgRows = cbCfgMs.map(function (c) {
      return '<tr><td class="rank">' + c.rank + '</td><td>' + vdot(c.canon.vendor) + esc(c.canon.id || c.model) + '</td>' +
        '<td>' + (c.effort ? esc(c.effort) : "—") + '</td><td class="num">' + c.score + '%</td>' +
        '<td class="num">' + fmtUsd(c.costUsd) + '</td>' +
        '<td class="num">' + (c.tokens != null ? fmtK(c.tokens) : "—") + '</td>' +
        '<td class="num">' + (c.steps != null ? c.steps : "—") + '</td></tr>';
    });
    var cbCfgCnt = document.getElementById("cbCfgCount");
    if (cbCfgCnt) cbCfgCnt.textContent = "共 " + cbCfgMs.length + " 条";
    // 档位明细在折叠的 <details> 内,折叠态无布局、IntersectionObserver 不会触发,故直接同步填充
    fillTable("authCursorbenchCfgTable", ["源站排名", "模型", "档位", "CursorBench 4.0", "成本/任务", "Tokens/任务", "步数/任务"], cbCfgRows, ["", "", "", "num", "num", "num", "num"]);
    authDeferTable("authFrontiercodeTable", ["#", "模型", "Harness", "档位", "标准分", "Pass Rate", "成本/任务", "Tokens/任务"], fcRows, ["", "", "", "", "num bv bv-frontiercode", "num", "num", "num"]);
    var authRefAt = maxRefreshedAt();
    document.getElementById("authDesc").innerHTML = paraHtml(
      "以下权威基准数据按渠道优先级合并:基准官方实测榜 > 厂商官方发布(论文/发布页)> 第三方聚合与镜像,低层级仅补缺不覆盖。其中 DeepSWE、Terminal-Bench(4.0/3.0/2.1,单章节内可切换版本查看,默认 4.0)与 ModelDial 雷达计入总览综合分与命中数(TB 优先以最高版本为代表,其中 2.1 为厂商发布/归一化自报分口径;ModelDial 见独立标签页),其余(GPQA Diamond / HLE / NL2Repo-Bench / ProgramBench / CursorBench / FrontierCode 及 TB-Science/OSWorld/ALE/ARC-AGI-3/BenchCAD)为展示型参考数据;GPQA Diamond 与 HLE 亦在总览矩阵「榜单基准」组尾以仅参考列展示(不计入综合分与命中数),NL2Repo-Bench 自 2026-09-19 起由计入改为仅展示。各基准由本站每日两次自动抓取合并,当前快照刷新于 " +
      (authRefAt || "—") + "(北京时间);某基准源站未发布新数据时,数字保持不变。");
    authRendered = true; // 标记已渲染,后续切页仅复用(不再重建 DOM / 重init 图表)
  }

  // ===== 8) 套餐对比(codingplan.fyi「额度/价格对比」快速对比,按模型分列比价) =====
  // 行数据已在抓取端按综合单价升序排好,这里仅做平台范围过滤(featured=精选平台)与渲染
  function qcCardHtml(g, scope) {
    var rows = g.rows.filter(function (r) { return scope === "all" || r.featured; });
    var multi = g.kind === "multi";
    var body = rows.map(function (r) {
      // 主行:平台(+多模型列附模型名)+ 月价;副行:套餐(+单模型列附 谷/峰 等档位标签)
      var primary = '<b>' + esc(r.platform) + '</b>' +
        (multi ? '<span class="qc-model">' + esc(r.model) + '</span>' : "") +
        '<span class="qc-price">' + esc(r.price) + '</span>';
      var secondary = esc(r.plan) +
        (!multi && r.qualifier ? ' <i class="qc-tier">' + esc(r.qualifier) + '</i>' : "");
      return '<tr><td class="qc-identity"><div class="qc-primary">' + primary + '</div>' +
        '<div class="qc-secondary">' + secondary + '</div></td>' +
        '<td class="qc-metrics"><div class="qc-unit">' + esc(r.unit) + '</div>' +
        '<div class="qc-usage"><span>月用量</span><span>' + esc(r.usage) + '</span></div></td></tr>';
    }).join("");
    return '<article class="qc-card">' +
      '<header><div><h4>' + esc(g.title) + '</h4>' +
      (g.desc ? '<p>' + esc(g.desc) + '</p>' : "") + '</div>' +
      '<span class="qc-count">' + rows.length + ' 条</span></header>' +
      '<div class="qc-table-scroll"><table class="qc-table"><thead><tr><th>' +
      (multi ? "平台 / 模型 / 套餐" : "平台 / 套餐") + '</th><th>综合单价 / 月用量</th></tr></thead>' +
      '<tbody>' + (body || '<tr><td colspan="2" class="qc-empty">当前暂无可比较的套餐。</td></tr>') +
      '</tbody></table></div></article>';
  }
  function renderPlans() {
    var wrap = document.getElementById("plansWrap");
    if (!wrap) return;
    var data = D.codingplan();
    document.getElementById("plansDesc").innerHTML = data
      ? (paraHtml(data.desc || "") +
        ((data.siteUpdated || data.refreshedAt) ? "<br>" +
          [(data.siteUpdated ? "源站更新 " + esc(data.siteUpdated) : ""),
            (data.refreshedAt ? "本站抓取 " + esc(data.refreshedAt) : "")]
            .filter(Boolean).join(" · ") : ""))
      : "暂无数据:抓取失败或尚未生成 data/codingplan.js(待下次每日刷新后恢复)。";
    if (!data || !Array.isArray(data.groups) || !data.groups.length) {
      wrap.innerHTML = "";
      document.getElementById("plansNote").innerHTML = "";
      return;
    }
    var scope = state.plansScope === "all" ? "all" : "featured";
    var scopeBtn = function (value, label) {
      return '<button type="button" class="qc-scope-btn' + (scope === value ? " is-active" : "") +
        '" data-qc-scope="' + value + '" aria-pressed="' + (scope === value) + '">' + label + '</button>';
    };
    var singles = data.groups.filter(function (g) { return g.kind === "single"; });
    var multis = data.groups.filter(function (g) { return g.kind === "multi"; });
    wrap.innerHTML =
      (data.caliberNote ? '<div class="qc-note">' + esc(data.caliberNote) + '</div>' : "") +
      '<div class="qc-head"><div><h3 class="qc-title">' + esc(data.presetTitle || "快速对比") + '</h3>' +
      (data.presetDesc ? '<p class="qc-desc">' + esc(data.presetDesc) + '</p>' : "") + '</div>' +
      '<div class="qc-scope" role="group" aria-label="对比平台范围">' +
      scopeBtn("featured", "仅显示精选平台") + scopeBtn("all", "显示所有平台") +
      '</div></div>' +
      '<div class="qc-grid qc-grid--single">' + singles.map(function (g) { return qcCardHtml(g, scope); }).join("") + '</div>' +
      '<div class="qc-grid qc-grid--multi">' + multis.map(function (g) { return qcCardHtml(g, scope); }).join("") + '</div>';
    // 平台范围切换(事件委托,重渲染后仍生效)
    wrap.onclick = function (e) {
      var btn = e.target && e.target.closest ? e.target.closest("[data-qc-scope]") : null;
      if (!btn) return;
      state.plansScope = btn.getAttribute("data-qc-scope");
      renderPlans();
    };
    document.getElementById("plansNote").innerHTML =
      '<div class="note-line"><b>来源</b><a href="' + esc(data.officialUrl || "") + '" target="_blank" rel="noopener">codingplan.fyi · 额度/价格对比 ↗</a></div>' +
      '<div class="note-line"><b>更新</b>源站 ' + esc(data.siteUpdated || "—") + ' · 本站抓取 ' + esc(data.refreshedAt || data.updated || "—") + ' · 美元按汇率 ' + esc(data.usdToCnyRate) + ' 折算人民币</div>' +
      '<div class="note-line"><b>口径</b>' + esc(data.caliberNote || "") + '</div>' +
      '<div class="note-line"><b>说明</b>综合单价(¥/亿 Token)与月用量为源站实测/计算值,按综合单价升序排列;完整套餐筛选与购买入口请前往源站查看。</div>';
  }

  // ===== 9) 更新日志(9 个 AI 编程工具的官方 changelog;非分数数据,不参与综合分) =====
  // 抓取端存全量条目,D.changelog(days) 按滚动窗口过滤;本页只做目录 + 卡片渲染。
  // 正文一律完整输出到 DOM(需求要求"保留全部更新日志"),仅在超长(>900 字)时默认折叠,
  // 折叠只是视觉收起、不删任何字,点「展开全文」即可看全。
  // data/changelog.js 含 9 个工具的全量历史(实测约 2.7MB),不进首屏脚本清单:
  // 首次切到本页时才注入,避免每个访客都为低频页面付一次大文件下载与解析。
  var CL_DATA_SRC = "data/changelog.js?v=20260924e";
  var clLoadState = "idle"; // idle -> loading -> ready | failed
  var CL_FOLD_CHARS = 900;
  function clStatusBadge(t) {
    if (t.status === "stale") {
      return '<span class="cl-badge cl-badge--stale" title="本轮抓取失败,以下为上一次成功抓到的条目">' +
        '数据滞后' + (t.lastOkAt ? ' · ' + esc(t.lastOkAt) : '') + '</span>';
    }
    if (t.status === "empty") return '<span class="cl-badge cl-badge--error">抓取失败</span>';
    return "";
  }
  function clCardHtml(t, e) {
    var body = e.body || "";
    var long = body.length > CL_FOLD_CHARS;
    // 免费翻译额度按天分批补,窗口内会有尚未译出的条目;切「全部」时窗口外历史一律原文。
    // 这两种情况标出来,免得读者以为页面把英文更新漏掉了。
    var orig = (body || e.title) && !/[\u4e00-\u9fff]/.test(body + (e.title || ""));
    // 标题与版本号只差一个 v 前缀时(GitHub Atom 的 release 名常就等于 tag)不重复显示
    var showTitle = !!(e.version && e.title) &&
      String(e.title).replace(/^v/i, "") !== String(e.version).replace(/^v/i, "");
    return '<article class="cl-card">' +
      '<header class="cl-card-head">' +
        '<span class="cl-ver">' + esc(e.version ? "v" + e.version : e.title) + '</span>' +
        (showTitle ? '<span class="cl-title">' + esc(e.title) + '</span>' : "") +
        (orig ? '<span class="cl-badge cl-badge--orig" title="该条尚未译出(免费翻译额度按天分批补,或超出两周窗口),此处为源站原文">原文</span>' : "") +
        '<span class="cl-date"' + (e.dateRaw ? ' title="源站原文:' + esc(e.dateRaw) + '"' : "") + '>' + esc((e.date || "").slice(5)) + '</span>' +
      '</header>' +
      (e.tags && e.tags.length ? '<div class="cl-tags">' + e.tags.map(function (g) {
        return '<span class="cl-tag">' + esc(g) + '</span>';
      }).join("") + '</div>' : "") +
      (body ? '<div class="cl-body' + (long ? " is-clamped" : "") + '">' + esc(body) + '</div>' : "") +
      (long ? '<button type="button" class="cl-fold" data-cl-fold aria-expanded="false">展开全文(' +
        body.length + ' 字)</button>' : "") +
      '<footer class="cl-card-foot"><a class="cl-src" href="' + esc(safeUrl(e.url, t.changelogUrl)) +
        '" target="_blank" rel="noopener">查看源站 ↗</a></footer>' +
      '</article>';
  }
  function renderChangelog() {
    var wrap = document.getElementById("clWrap");
    if (!wrap) return;
    var data = D.changelog(state.changelogDays);
    var descEl = document.getElementById("clDesc");
    if (!data) {
      // 首次进入:注入数据脚本,加载完成再渲染(失败只试一次,不反复重试)
      if (clLoadState === "idle") {
        clLoadState = "loading";
        var s = document.createElement("script");
        s.src = CL_DATA_SRC;
        s.onload = function () { clLoadState = "ready"; renderChangelog(); };
        s.onerror = function () { clLoadState = "failed"; renderChangelog(); };
        document.head.appendChild(s);
        wrap.innerHTML = '<div class="cl-empty-page">正在加载更新日志数据…</div>';
        return;
      }
      if (descEl) {
        descEl.textContent = clLoadState === "failed"
          ? "更新日志数据加载失败(网络或 data/changelog.js 缺失),重试本页或等待下次每日刷新。"
          : "暂无数据:抓取失败或尚未生成 data/changelog.js(待下次每日刷新后恢复)。";
      }
      wrap.innerHTML = '<div class="cl-empty-page">' + esc(descEl ? descEl.textContent : "暂无更新日志数据。") + '</div>';
      var out0 = document.getElementById("clOutlineList");
      if (out0) out0.innerHTML = "";
      var cnt0 = document.getElementById("clOutlineCount");
      if (cnt0) cnt0.textContent = "";
      return;
    }
    // 生效窗口取 state.changelogDays(点按钮即改它再重渲染);
    // D.changelog() 只在收到 null 时才回落到数据文件的 uiWindowDays,这里始终传数字,
    // 若改读 data.uiWindowDays 会让按钮选中态与提示文案停在默认值上。
    var days = state.changelogDays;
    var badCount = data.tools.filter(function (t) { return t.status !== "ok"; }).length;
    var shownTools = data.tools.filter(function (t) { return t.entries.length; }).length;
    if (descEl) {
      descEl.innerHTML = esc(data.desc || "") + "<br>" +
        [ "更新于 " + esc(data.updated || ""),
          data.refreshedAt ? "本站抓取 " + esc(data.refreshedAt) + "(北京时间)" : "",
          shownTools + " / " + data.tools.length + " 个工具在窗口内有新版本" ]
        .filter(Boolean).join(" · ");
    }
    // 时间范围切换:决定「最近一次更新」算不算新 —— 超出范围的工具不渲染卡片,只提示其最新一版日期
    var btns = document.getElementById("clRangeBtns");
    if (btns) {
      btns.innerHTML = [[14, "近 14 天"], [30, "近 30 天"], [0, "全部"]].map(function (o) {
        var on = days === o[0];
        return '<button type="button" class="qc-scope-btn' + (on ? " is-active" : "") +
          '" data-cl-days="' + o[0] + '" aria-pressed="' + on + '">' + o[1] + '</button>';
      }).join("");
    }
    var hint = document.getElementById("clHint");
    if (hint) {
      hint.textContent = "每个工具只显示最近一次更新 · 每日刷新 2 次" +
        (days > 0 ? " · 仅计最近 " + days + " 天内的更新" : " · 当前不限时间") +
        (badCount ? " · 异常源 " + badCount + " 个(沿用上次数据并标注)" : "");
    }
    var cnt = document.getElementById("clOutlineCount");
    if (cnt) cnt.textContent = data.tools.length + " 个工具";
    // 左目录:每个工具一行(名称 + 最近一次更新日期 + 滞后标记),点击跳到该工具区块
    var out = document.getElementById("clOutlineList");
    if (out) {
      out.innerHTML = data.tools.map(function (t) {
        return '<a class="auth-outline-item" data-cl-target="cl-tool-' + esc(t.id) + '" href="#cl-tool-' + esc(t.id) + '" title="' +
          esc(t.name + "(" + t.vendor + ")· 最近一次更新 " + (t.latestDate || "—")) + '">' +
          '<span class="cl-ol-name' + (t.status !== "ok" ? " is-stale" : "") + '">' + esc(t.name) + '</span>' +
          '<span class="auth-outline-count">' + (t.entries.length ? esc(t.latestDate.slice(5)) : "—") + '</span></a>';
      }).join("");
    }
    // 右主体:每工具一个区块,只渲染最近一次更新(数据文件仍存全量历史)
    wrap.innerHTML = data.tools.map(function (t) {
      var cards = t.entries.map(function (e) { return clCardHtml(t, e); }).join("");
      var emptyLine = "";
      if (!t.entries.length) {
        emptyLine = '<p class="cl-empty">' +
          (t.status !== "ok"
            ? "抓取失败:" + esc(t.error || "未知原因") + "。"
            : (t.latestDate ? "最近一次更新在 " + esc(t.latestDate) + ",超出当前时间范围。" : "暂无可用更新条目。")) +
          ' <a class="cl-src" href="' + esc(t.changelogUrl) + '" target="_blank" rel="noopener">查看源站 ↗</a></p>';
      }
      return '<section class="cl-tool" id="cl-tool-' + esc(t.id) + '">' +
        '<header class="cl-tool-head">' +
          '<h3 class="cl-tool-name">' + esc(t.name) + '</h3>' +
          '<span class="cl-tool-vendor">' + esc(t.vendor) + '</span>' +
          clStatusBadge(t) +
          '<span class="cl-tool-count">' + (t.total > 1
            ? "全量 " + t.total + " 条 · 仅显示最近一次"
            : (t.entries.length ? "1 条更新" : "暂无更新记录")) + '</span>' +
          '<a class="cl-src cl-tool-src" href="' + esc(t.changelogUrl) + '" target="_blank" rel="noopener">更新日志源站 ↗</a>' +
        '</header>' +
        '<div class="cl-entries">' + cards + emptyLine + '</div>' +
        '</section>';
    }).join("");
  }

  // ===== 滚动与排序的轻微反馈(克制动效) =====
  // 粘性标签栏:滚动离顶后加一层抬升阴影,让"内容在其下滚动"这件事有视觉交代。
  // 与下面权威基准页的滚动高亮各用各的 rAF 节流变量,互不干扰。
  var stuckRaf = 0;
  function syncTabsStuck() {
    stuckRaf = 0;
    var t = document.getElementById("tabs");
    if (t) t.classList.toggle("is-stuck", (window.pageYOffset || 0) > 8);
  }
  function onScrollStuck() { if (!stuckRaf) stuckRaf = requestAnimationFrame(syncTabsStuck); }

  // 排序后给该列一次短暂的底色扫过,让"表格被重排了"这件事可见。
  // 总览矩阵是双行表头:非评测列 rowspan=2 纵跨、评测列被 colspan 分组,且「命中」列同样
  // 是 rowspan 却排在两个分组之后 —— 列号必须按表头结构逐格模拟累加。用「rowspan 格总数 +
  // col-row 内序号」这类简化公式会把分组之后的评测列整体错开一位(实测 WebDev 会被算到 llm2014)。
  // 时机:点击时 app.js 会 renderOverview 重建表头,手上那个 th 随即脱离文档,故同步阶段
  // 只取 data-key,待重渲染后再按 key 从新表头找回列号。
  function matrixBodyCol(tbl, key) {
    var grpRow = tbl.querySelector("thead tr.grp-row");
    if (!grpRow) return -1;
    var colRow = tbl.querySelector("thead tr.col-row");
    var evalThs = colRow ? Array.prototype.slice.call(colRow.children) : [];
    var col = 0, evalPos = 0, answer = -1;
    Array.prototype.forEach.call(grpRow.children, function (cell) {
      if (cell.hasAttribute("rowspan")) {
        if (cell.getAttribute("data-key") === key) answer = col;
        col += 1;
        return;
      }
      var cs = parseInt(cell.getAttribute("colspan") || "1", 10);
      for (var i = 0; i < cs; i++) {
        var t = evalThs[evalPos + i];
        if (t && t.getAttribute("data-key") === key) answer = col + i;
      }
      evalPos += cs;
      col += cs;
    });
    return answer;
  }
  function flashSortedColumn(key) {
    var tbl = document.getElementById("matrixTable");
    if (!tbl) return;
    var col = matrixBodyCol(tbl, key);
    if (col < 0) return;
    var tds = [];
    Array.prototype.forEach.call(tbl.querySelectorAll("tbody tr"), function (tr) {
      if (tr.children[col]) tds.push(tr.children[col]);
    });
    if (!tds.length) return;
    tds.forEach(function (td) { td.classList.remove("col-flash"); });
    void tbl.offsetWidth; // 单次强制重排即可让动画重放(逐格读 offsetWidth 会触发 N 次重排)
    tds.forEach(function (td) { td.classList.add("col-flash"); });
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
    else if (name === "llm2014") renderLlm2014(state.llmMonth);
    else if (name === "aicap") renderAICap();
    else if (name === "modeldial") renderModeldial();
    else if (name === "wujisuan") renderWujisuan();
    else if (name === "authority") renderAuthority();
    else if (name === "plans") renderPlans();
    else if (name === "changelog") renderChangelog();
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
      // 渲染完成后扫一次该列(表头已重建,故按 key 重新定位列号)
      requestAnimationFrame(function () { flashSortedColumn(key); });
    });
    // 各页"仅跨榜模型/显示全部"开关
    [
      { id: "ovShowAll", key: "overview", render: function () { renderOverview(); } },
      { id: "dsShowAll", key: "deepswe", render: function () { renderDeepSwe(); } },
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
    // 权威基准页大纲:点击条目快速跳转(事件委托挂在稳定父级 nav 上)
    var outlineList = document.getElementById("authOutlineList");
    if (outlineList) outlineList.addEventListener("click", function (e) {
      var a = e.target.closest ? e.target.closest("a[data-target]") : null;
      if (!a) return;
      e.preventDefault();
      jumpToAuthSection(a.getAttribute("data-target"));
    });
    // AI 热点总结:点击概览目录跳到对应详情卡片(事件委托,面板为最近的可滚动祖先)
    var newsInner = document.getElementById("newsTickerInner");
    if (newsInner) newsInner.addEventListener("click", function (e) {
      var a = e.target.closest ? e.target.closest(".news-toc-link[data-rank]") : null;
      if (!a) return;
      e.preventDefault();
      var card = document.getElementById("news-card-" + a.getAttribute("data-rank"));
      if (card) card.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    // 更新日志页:时间窗口切换(14/30/全部)
    var clBtns = document.getElementById("clRangeBtns");
    if (clBtns) clBtns.addEventListener("click", function (e) {
      var b = e.target.closest ? e.target.closest("[data-cl-days]") : null;
      if (!b) return;
      state.changelogDays = parseInt(b.getAttribute("data-cl-days"), 10) || 0;
      renderChangelog();
    });
    // 更新日志页:超长正文的展开/收起(事件委托 —— 卡片随窗口切换重建)
    var clWrap = document.getElementById("clWrap");
    if (clWrap) clWrap.addEventListener("click", function (e) {
      var b = e.target.closest ? e.target.closest("[data-cl-fold]") : null;
      if (!b) return;
      var body = b.parentNode && b.parentNode.querySelector(".cl-body");
      if (!body) return;
      var open = body.classList.toggle("is-clamped") === false;
      b.setAttribute("aria-expanded", open ? "true" : "false");
      b.textContent = open ? "收起" : "展开全文(" + (body.textContent || "").length + " 字)";
    });
    // 更新日志页:左侧工具目录跳到对应工具区块
    var clOutline = document.getElementById("clOutlineList");
    if (clOutline) clOutline.addEventListener("click", function (e) {
      var a = e.target.closest ? e.target.closest("a[data-cl-target]") : null;
      if (!a) return;
      e.preventDefault();
      var sec = document.getElementById(a.getAttribute("data-cl-target"));
      if (sec) sec.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    // 滚动时高亮当前基准章节(以 rAF 节流,仅在权威基准页生效)
    window.addEventListener("scroll", function () {
      if (authSpyRaf) return;
      authSpyRaf = requestAnimationFrame(function () { authSpyRaf = 0; syncAuthNav(); });
    }, { passive: true });
    // 粘性标签栏的抬升阴影(任何页面都生效)
    window.addEventListener("scroll", onScrollStuck, { passive: true });
    syncTabsStuck();
    // 用户主动滚动/按键时立即解除跳转锁定,恢复实时高亮
    ["wheel", "touchstart", "keydown"].forEach(function (ev) {
      window.addEventListener(ev, function () { authPendingTarget = null; }, { passive: true });
    });
    // 刷新时间节点:取各源 refreshedAt 最新值;旧数据缺字段时不显示
    var refreshedAt = maxRefreshedAt();
    document.getElementById("topMeta").textContent = "快照数据 · DeepSWE " + (D.src.deepswe ? D.src.deepswe.updated : "") + " / llm2014 " + (D.src.llm ? D.src.llm.updated : state.llmMonth)
      + (refreshedAt ? " · 刷新于 " + refreshedAt + "(北京时间)" : "");
    // 使用双 rAF:先让浏览器绘制 loading 指示器,再在下一帧执行重渲染并移除指示器
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        showTab("overview");
        var loading = document.getElementById("appLoading");
        if (loading) loading.remove();
        scheduleAuthPrerender(); // 首屏就绪后,空闲时后台预构建权威基准页
      });
    });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
