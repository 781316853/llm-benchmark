// 数据装载与转换层:读取 window.* 快照,统一解析、数值化、归一化、模型归一。
// 暴露全局命名空间 window.D,供 charts/compare/app 使用。
(function () {
  "use strict";

  // 字母等级 -> 数值(Pass 视为满分 4.3;Failed=0;Skip/Pending=null 不参与统计)
  var GRADE_NUM = { "A+": 4.3, A: 4.0, "B+": 3.3, B: 3.0, "C+": 2.3, C: 2.0, "D+": 1.3, D: 1.0 };
  var MAX_GRADE = 4.3;

  // ===== 单元格解析:"7/A" -> {minutes:7, grade:'A', num:4.0, status:'grade'} =====
  function parseCell(raw) {
    var s = String(raw == null ? "" : raw).trim();
    if (s === "" || /^pending$/i.test(s)) return { raw: s || "Pending", status: "pending", num: null };
    if (/^pass/i.test(s)) return { raw: "Pass", status: "pass", num: MAX_GRADE };
    if (/^skip/i.test(s)) return { raw: "Skip", status: "skip", num: null };
    if (/^fail/i.test(s)) return { raw: s, status: "failed", num: 0 }; // Failed(n/m)
    // 形如 "7/A" 或 "7/A+"
    var m = s.match(/^(\d+)\s*\/\s*([A-D]\+?)$/i);
    if (m) {
      var g = m[2].toUpperCase();
      return { raw: s, minutes: Number(m[1]), grade: g, status: "grade", num: GRADE_NUM[g] };
    }
    // 仅等级(无耗时)
    var g2 = s.match(/^([A-D]\+?)$/i);
    if (g2) { var gg = g2[1].toUpperCase(); return { raw: s, grade: gg, status: "grade", num: GRADE_NUM[gg] }; }
    // 纯数字(旧制分钟数)兜底:无等级信息,按 null 处理
    return { raw: s, status: "unknown", num: null };
  }

  // ===== 字符串归一:小写 + 去非字母数字,用于模型别名匹配 =====
  function norm(s) {
    return String(s || "").toLowerCase().replace(/[^a-z0-9]/g, "");
  }
  // 剥离 effort 后缀后再归一(兜底匹配)
  function normLight(s) {
    return String(s || "")
      .replace(/\([^)]*\)/g, "")     // 去括号注解 (high)/(max)
      .replace(/(high|max|medium|xhigh|low|think|preview)/gi, "")
      .toLowerCase().replace(/[^a-z0-9]/g, "");
  }

  // 构建别名索引
  var aliasIndex = {};   // 归一键 -> canonical 对象
  var canonList = (window.MODEL_MAP && window.MODEL_MAP.canonical) || [];
  canonList.forEach(function (c) {
    (c.aliases || []).forEach(function (a) { aliasIndex[norm(a)] = c; });
    aliasIndex[norm(c.id)] = c;          // canonical id 本身也入索引
    aliasIndex[normLight(c.id)] = c;
  });

  // 根据原始模型名解析 canonical;未命中则自成一家
  function canon(raw) {
    var c = aliasIndex[norm(raw)] || aliasIndex[normLight(raw)];
    if (c) return c;
    return { id: raw, vendor: "其他", color: (window.MODEL_MAP && window.MODEL_MAP.vendorDefaultColor) || "#8A8F98" };
  }

  // ===== DeepSWE:按 canonical 聚合(同名取最高 pass1) =====
  function deepSwe() {
    var src = window.DEEPSWE || { models: [] };
    // 按 Pass@1 降序,保证表格排名可靠(即便数据源顺序变化)
    return src.models.slice().sort(function (a, b) { return b.pass1 - a.pass1; }).map(function (m) {
      return Object.assign({}, m, { canon: canon(m.name) });
    });
  }

  // ===== Vibe Code:同名 canonical 取最高 score(Claude Opus 4.8 多 harness) =====
  function vibeCode() {
    var src = window.VIBECODE || { models: [] };
    // 按准确率降序,保证表格排名可靠
    return src.models.slice().sort(function (a, b) { return b.score - a.score; }).map(function (m) {
      return Object.assign({}, m, { canon: canon(m.name) });
    });
  }

  // ===== llm2014:解析指定月份 -> {projects, rows:[{model, canon, cells:[parseCell...], ide, think, score}]} =====
  function llmMonth(month) {
    var src = window.LLM2014 || { months: {} };
    var mo = src.months[month];
    if (!mo) return null;
    var rows = mo.rows.map(function (r) {
      var cells = r.cells.map(parseCell);
      var nums = cells.map(function (c) { return c.num; }).filter(function (n) { return n != null; });
      var mean = nums.length ? nums.reduce(function (a, b) { return a + b; }, 0) / nums.length : null;
      return { model: r.model, canon: canon(r.model), cells: cells, ide: r.ide, think: r.think,
        score: mean, norm: mean == null ? null : mean / MAX_GRADE * 100 };
    });
    return { projects: mo.projects, rows: rows };
  }
  function llmMonths() { return Object.keys((window.LLM2014 && window.LLM2014.months) || {}).sort(); }

  // ===== 统一视图:canonical -> {deepswe, vibe, llm} 用于矩阵/雷达 =====
  // deepswe/vibe:同名取最高;llm:用指定月份(默认最新)的均值
  function unified(llmMonthKey) {
    var map = {}; // canonical id -> entry
    function ensure(c) {
      if (!map[c.id]) map[c.id] = { id: c.id, vendor: c.vendor, color: c.color, benchCount: 0, deepswe: null, vibe: null, llm: null };
      return map[c.id];
    }
    // DeepSWE
    deepSwe().forEach(function (m) {
      var e = ensure(m.canon);
      if (!e.deepswe || m.pass1 > e.deepswe.pass1) e.deepswe = { pass1: m.pass1, ci: m.ci, cost: m.cost, outTok: m.outTok, steps: m.steps, name: m.name, norm: m.pass1 };
    });
    // Vibe Code
    vibeCode().forEach(function (m) {
      var e = ensure(m.canon);
      if (!e.vibe || m.score > e.vibe.score) e.vibe = { score: m.score, ci: m.ci, cost: m.cost, latencyS: m.latencyS, harness: m.harness, name: m.name, norm: m.score };
    });
    // llm2014
    var lm = llmMonth(llmMonthKey || llmMonths()[llmMonths().length - 1]);
    if (lm) {
      lm.rows.forEach(function (r) {
        var e = ensure(r.canon);
        if (!e.llm || (r.score != null && r.score > (e.llm.score == null ? -1 : e.llm.score))) {
          e.llm = { score: r.score, norm: r.norm, name: r.model };
        }
      });
    }
    Object.keys(map).forEach(function (k) {
      var e = map[k];
      if (e.deepswe) e.benchCount++;
      if (e.vibe) e.benchCount++;
      if (e.llm) e.benchCount++;
    });
    return map;
  }

  // ===== 汇总卡片信息 =====
  function benchSummary() {
    var ds = window.DEEPSWE || {}, vc = window.VIBECODE || {}, lm = window.LLM2014 || {};
    var dsTop = (ds.models || [])[0] || {};
    var vcTop = (vc.models || [])[0] || {};
    var latest = llmMonths().slice(-1)[0];
    var lmRows = latest ? llmMonth(latest).rows : [];
    var lmTop = lmRows.slice().sort(function (a, b) { return (b.score || 0) - (a.score || 0); })[0] || {};
    // llm2014 头名按 10 分制折算显示(内部 score 仍为 0-4.3 等级均值)
    var lmTopScore = lmTop.score != null ? (lmTop.score / MAX_GRADE * 10) : null;
    return [
      { key: "deepswe", name: "DeepSWE", tag: "长程软件工程任务", url: ds.url, updated: ds.updated,
        stats: [{ l: "任务", v: ds.stats && ds.stats.tasks }, { l: "模型", v: (ds.models || []).length }],
        top: dsTop.name + " · " + dsTop.pass1 + "%" },
      { key: "vibecode", name: "Vibe Code Bench", tag: "从零构建 Web 应用", url: vc.url, updated: vc.updated,
        stats: [{ l: "系统", v: vc.totalSystems }, { l: "展示", v: (vc.models || []).length }],
        top: vcTop.name + " · " + vcTop.score + "%" },
      { key: "llm2014", name: "llm2014 code_v3", tag: "个人私有题库", url: lm.url, updated: latest,
        stats: [{ l: "月份", v: latest }, { l: "模型", v: lmRows.length }],
        top: lmTop.model + " · " + (lmTopScore != null ? lmTopScore.toFixed(2) + "/10" : "—") }
    ];
  }

  // 查某 canonical 模型在指定 llm 月份下的跨榜命中数(0-3);用于"仅跨榜模型"过滤
  function hitCount(canonId, llmMonthKey) {
    var u = unified(llmMonthKey);
    var e = u[canonId];
    return e ? e.benchCount : 0;
  }

  // 暴露
  window.D = {
    MAX_GRADE: MAX_GRADE,
    // 把内部 0-4.3 等级分折算为 0-10 分制用于对外显示;null 原样返回
    to10: function (s) { return s == null ? null : s / MAX_GRADE * 10; },
    parseCell: parseCell,
    canon: canon,
    deepSwe: deepSwe,
    vibeCode: vibeCode,
    llmMonth: llmMonth,
    llmMonths: llmMonths,
    unified: unified,
    hitCount: hitCount,
    benchSummary: benchSummary,
    // DeepSWE/Vibe 原始对象(供渲染脚注)
    src: { deepswe: window.DEEPSWE, vibe: window.VIBECODE, llm: window.LLM2014 }
  };
})();
