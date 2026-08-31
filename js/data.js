// 数据装载与转换层:读取 window.* 快照,统一解析、数值化、归一化、模型归一。
// 暴露全局命名空间 window.D,供 charts/compare/app 使用。
(function () {
  "use strict";

  // 字母等级 -> 数值(0.5 等差间隔:Pass 视为满分 4.0;Failed=0;Skip/Pending=null 不参与统计)
  var GRADE_NUM = { "A+": 4.0, A: 3.5, "B+": 3.0, B: 2.5, "C+": 2.0, C: 1.5, "D+": 1.0, D: 0.5 };
  var MAX_GRADE = 4.0;

  // ===== 单元格解析:"7/A" -> {deduction:7, grade:'A', num:4.0, status:'grade'} =====
  // 2026-08 起等级单元格可带单任务测试成本括号:"7/A+(90.52)" -> {grade:'A+', num:4.0, cost:90.52}
  function parseCell(raw) {
    var s = String(raw == null ? "" : raw).trim();
    if (s === "" || /^pending$/i.test(s)) return { raw: s || "Pending", status: "pending", num: null };
    if (/^pass/i.test(s)) return { raw: "Pass", status: "pass", num: MAX_GRADE };
    if (/^skip/i.test(s)) return { raw: "Skip", status: "skip", num: null };
    if (/^fail/i.test(s)) return { raw: s, status: "failed", num: 0 }; // Failed(n/m)
    // 形如 "7/A"、"7/A+" 或 2026-08 起 "7/A+(90.52)"(扣分数 / 字母等级,括号内为测试成本 ¥)
    var m = s.match(/^(\d+)\s*\/\s*([A-D]\+?)(?:\(\s*(\d+(?:\.\d+)?)\s*\))?$/i);
    if (m) {
      var g = m[2].toUpperCase();
      return { raw: s, deduction: Number(m[1]), grade: g, status: "grade", num: GRADE_NUM[g],
        cost: m[3] != null ? Number(m[3]) : null };
    }
    // 仅等级(无耗时)
    var g2 = s.match(/^([A-D]\+?)$/i);
    if (g2) { var gg = g2[1].toUpperCase(); return { raw: s, grade: gg, status: "grade", num: GRADE_NUM[gg] }; }
    // 纯数字(旧制扣分数)兜底:无等级信息,按 null 处理
    return { raw: s, status: "unknown", num: null };
  }

  // ===== 字符串归一:小写 + 统一分隔符,用于模型别名匹配 =====
  // 将连续的非字母数字字符(空格、-、_、. 等)统一折叠为单个 "-",再去除首尾连字符。
  // 这样 "gpt-5-6-sol"、"Gpt 5.6 sol"、"gpt_5_6_sol" 均归一为 "gpt-5-6-sol",保证不同写法可匹配;
  // 同时因保留了数字分组,可避免 "5-6"(版本5.6)与 "56"(版本56)被误判为同一模型。
  function norm(s) {
    return String(s || "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")  // 连续非字母数字 -> 单个连字符
      .replace(/^-+|-+$/g, "");      // 去除首尾连字符
  }
  // 剥离 effort 后缀后再归一(兜底匹配,用于别名命中后的宽松匹配)
  // 注:括号内容为日期/构建号(如 0731、2025-08-07)时保留,其余括号注解 (high)/(with fallback) 等剥离;
  // 且 preview 是真实变体名(如 "DeepSeek V4 Flash preview")不再剥离。
  function normLight(s) {
    return String(s || "")
      .replace(/\(([^)]*)\)/g, function (m, inner) {
        return /^[\d\s\-/.年月日]+$/.test(inner.trim()) ? m : "";
      })
      .replace(/(high|max|medium|xhigh|low|think)/gi, "")
      .toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
  }

  // 构建别名索引
  var aliasIndex = {};   // 归一键 -> canonical 对象
  var canonList = (window.MODEL_MAP && window.MODEL_MAP.canonical) || [];
  canonList.forEach(function (c) {
    (c.aliases || []).forEach(function (a) { aliasIndex[norm(a)] = c; });
    aliasIndex[norm(c.id)] = c;          // canonical id 本身也入索引
    aliasIndex[normLight(c.id)] = c;
  });

  // 未登记模型自动归并缓存:归一键 -> canonical 对象
  // 未在 MODEL_MAP 登记的模型,按归一键自动合并:仅分隔符/大小写不同的写法
  // (如 "gpt-5-6-sol" 与 "Gpt 5.6 sol")复用首次出现时建立的 canonical,实现自动匹配。
  // 建档/命中同时使用 norm 精确键与 normLight 宽松键,使 "claude-opus-5" 与
  // "Claude Opus 5 (max)" 这类 effort 注解写法自动归并为同一模型,无需手工登记别名。
  var autoIndex = {};

  // 未登记模型的显示名清洗:去括号注解 (max)/(high)/(with fallback) 等(日期/构建号如 (0731) 保留)、去 vibe 降级标记 [新]、压缩空白
  function cleanDisplay(raw) {
    return String(raw || "")
      .replace(/\(([^)]*)\)/g, function (m, inner) {
        return /^[\d\s\-/.年月日]+$/.test(inner.trim()) ? m : "";
      })
      .replace(/\[新\]/g, "")
      .replace(/\s+/g, " ")
      .trim();
  }

  // 根据原始模型名解析 canonical;未命中别名索引则按归一键自动归并
  function canon(raw) {
    var c = aliasIndex[norm(raw)] || aliasIndex[normLight(raw)];
    if (c) return c;
    // 自动匹配:先按精确归一键,再按剥离 effort 注解的宽松键归并
    var k = norm(raw);
    var fb = autoIndex[k] || autoIndex[normLight(raw)];
    if (fb) return fb;
    // 首次出现:清洗后的原始名作为显示名,双键建档供后续任意写法命中
    fb = { id: cleanDisplay(raw), vendor: "其他", color: (window.MODEL_MAP && window.MODEL_MAP.vendorDefaultColor) || "#8A8F98" };
    autoIndex[k] = fb;
    autoIndex[normLight(raw)] = fb;
    return fb;
  }

  // ===== DeepSWE:v1.1(每日刷新)与 v1.0(历史静态快照)合并 =====
  // 策略:v1.1 优先,同名模型按 canonical 去重只保留 v1.1;v1.0 独有的模型追加进来。
  // 每条附带 version 字段("v1.1"/"v1.0"),供前端挂版本徽章;最终按 pass1 降序。
  function deepSwe() {
    var v11Src = window.DEEPSWE || { models: [] };
    var v10Src = window.DEEPSWE_V10 || { models: [] };
    // v1.1 为基底:附加版本标记与 canonical
    var merged = v11Src.models.map(function (m) {
      return Object.assign({}, m, { version: "v1.1", canon: canon(m.name) });
    });
    // 用 canonical id 去重:v1.1 已收录的同模型不再重复加入 v1.0
    var seen = {};
    merged.forEach(function (m) { seen[m.canon.id] = true; });
    v10Src.models.forEach(function (m) {
      var c = canon(m.name);
      if (!seen[c.id]) {
        merged.push(Object.assign({}, m, { version: "v1.0", canon: c }));
        seen[c.id] = true;
      }
    });
    // 按 Pass@1 降序,保证表格排名可靠
    return merged.sort(function (a, b) { return b.pass1 - a.pass1; });
  }

  // 版本构成计数:返回合并集中 v1.1 / v1.0 独有的模型数,供脚注展示
  function deepSweVersionCounts() {
    var counts = { v11: 0, v10: 0 };
    deepSwe().forEach(function (m) {
      if (m.version === "v1.0") counts.v10++; else counts.v11++;
    });
    return counts;
  }

  // ===== Vibe Code:同名 canonical 取最高 score(Claude Opus 4.8 多 harness) =====
  function vibeCode() {
    var src = window.VIBECODE || { models: [] };
    // 按准确率降序,保证表格排名可靠
    return src.models.slice().sort(function (a, b) { return b.score - a.score; }).map(function (m) {
      return Object.assign({}, m, { canon: canon(m.name) });
    });
  }

  // ===== Code Arena · WebDev(LMArena):每 canonical 模型取最高 Elo,并做快照内 min-max 归一化到 0-100 =====
  // Elo 原值(约 1079-1692)存于 score 供矩阵列展示;norm 供综合分主基准组使用。
  function webdev() {
    var src = window.ARENA_WEBDEV || { models: [] };
    var best = {};
    src.models.forEach(function (m) {
      var c = canon(m.name);
      if (!best[c.id] || m.score > best[c.id].score) {
        best[c.id] = Object.assign({}, m, { canon: c });
      }
    });
    var list = Object.keys(best).map(function (k) { return best[k]; });
    if (!list.length) return [];
    // 快照内 min-max 归一化:norm = (elo - min)/(max - min) * 100
    var min = list.reduce(function (a, m) { return Math.min(a, m.score); }, Infinity);
    var max = list.reduce(function (a, m) { return Math.max(a, m.score); }, -Infinity);
    var span = (max - min) || 1;
    list.forEach(function (m) { m.norm = Math.round((m.score - min) / span * 1000) / 10; });
    return list.sort(function (a, b) { return b.score - a.score; });
  }

  // ===== llm2014:解析指定月份 -> {projects, rows:[{model, canon, cells:[parseCell...], ide, think, norm, rank}]} =====
  // 综合分(norm,0-100)按等级均值连续映射,同月人人不同分:
  // 1) 基数 = 各已测项目等级均值(A+=4.0..D=0.5,Pass=4.0,Failed=0),不做档位归并;
  // 2) 月内 min-max 归一化:均值最高 100、最低 0,中间按等级差距线性分布(与 WebDev 榜一致);
  // 3) 均值完全相同的模型同组,组内按源排名(rank 0=第一)每退一名递减 0.01;
  // 4) 组顶受上一组最低分压制(天花板链),保证跨组不倒挂、全员互异;
  // 5) 全 Skip/Pending(mean=null)不计分,综合分显示 "-"。
  // 综合分与明细单元格等级着色解耦。
  function llmMonth(month) {
    var src = window.LLM2014 || { months: {} };
    var mo = src.months[month];
    if (!mo) return null;
    var rows = mo.rows.map(function (r, idx) {
      var cells = r.cells.map(parseCell);
      // 精确等级均值(仅计已测等级项),不归并档位
      var nums = cells.map(function (c) { return c.num; }).filter(function (n) { return n != null; });
      var mean = nums.length ? nums.reduce(function (a, b) { return a + b; }, 0) / nums.length : null;
      return { model: r.model, canon: canon(r.model), cells: cells, ide: r.ide, think: r.think,
        rank: idx, mean: mean };
    });
    // 赋分全程用整数"百分点"(1 点 = 0.01 分),避免浮点误差造成显示层同分
    var scored = rows.filter(function (r) { return r.mean != null; });
    if (scored.length) {
      var min = scored.reduce(function (a, r) { return Math.min(a, r.mean); }, Infinity);
      var max = scored.reduce(function (a, r) { return Math.max(a, r.mean); }, -Infinity);
      var span = max - min;
      var order = scored.slice().sort(function (a, b) {
        return b.mean - a.mean || a.rank - b.rank;
      });
      // 按均值精确相等分组(均值降序、同组按源排名)
      var groups = [];
      order.forEach(function (r) {
        var g = groups[groups.length - 1];
        if (g && g[0].mean === r.mean) g.push(r); else groups.push([r]);
      });
      var ceiling = 10000; // 上一组最低分 - 1(百分点),防跨组倒挂
      groups.forEach(function (g) {
        var base = span > 0 ? Math.round((g[0].mean - min) / span * 10000) : 10000;
        var head = Math.min(base + (g.length - 1), ceiling);
        g.forEach(function (r, j) { r._cents = head - j; });
        ceiling = head - g.length;
      });
      // 兜底:极端拥挤月份若被天花板链压出负分,整体平移补差(保持互异)
      var lowest = Math.min.apply(null, order.map(function (r) { return r._cents; }));
      if (lowest < 0) order.forEach(function (r) { r._cents -= lowest; });
      order.forEach(function (r) { r.norm = r._cents / 100; });
    }
    return { projects: mo.projects, rows: rows };
  }
  function llmMonths() { return Object.keys((window.LLM2014 && window.LLM2014.months) || {}).sort(); }

  // ===== Artificial Analysis Intelligence Index:通用智能指数(独立榜单,不计入综合分) =====
  // 每 canonical 模型取最高分;附带 vendor(源自页面 creator)与 version 供展示
  function artificialAnalysis() {
    var src = window.ARTIFICIAL_ANALYSIS || { models: [] };
    var best = {};
    (src.models || []).slice().sort(function (a, b) { return b.score - a.score; }).forEach(function (m) {
      var c = canon(m.name);
      if (!best[c.id] || m.score > best[c.id].score) {
        best[c.id] = Object.assign({}, m, { canon: c, vendorAA: m.vendor || c.vendor });
      }
    });
    return Object.keys(best).map(function (k) { return best[k]; })
      .sort(function (a, b) { return b.score - a.score; });
  }

  // ===== 统一视图:canonical -> {deepswe, vibe, llm, webdev} 用于矩阵/雷达 =====
  // deepswe/vibe:同名取最高;llm:用指定月份(默认最新)的均值;webdev:同名取最高
  function unified(llmMonthKey) {
    var map = {}; // canonical id -> entry
    function ensure(c) {
      if (!map[c.id]) map[c.id] = { id: c.id, vendor: c.vendor, color: c.color, benchCount: 0, deepswe: null, vibe: null, llm: null, webdev: null };
      return map[c.id];
    }
    // DeepSWE(合并后每条带 version:v1.1/v1.0,供总览矩阵标注数据版本)
    deepSwe().forEach(function (m) {
      var e = ensure(m.canon);
      if (!e.deepswe || m.pass1 > e.deepswe.pass1) e.deepswe = { pass1: m.pass1, ci: m.ci, cost: m.cost, outTok: m.outTok, steps: m.steps, name: m.name, version: m.version, norm: m.pass1 };
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
        // 取首现(CSV 行序最优排名),不再按最高分覆盖
        if (!e.llm) {
          e.llm = { norm: r.norm, name: r.model };
        }
      });
    }
    // Code Arena · WebDev:同名取最高 Elo(前端已做快照内 min-max 归一化到 0-100)
    webdev().forEach(function (m) {
      var e = ensure(m.canon);
      if (!e.webdev || m.score > e.webdev.score) e.webdev = { score: m.score, ci: m.ci, votes: m.votes, org: m.org, name: m.name, norm: m.norm };
    });
    // 统计跨榜命中数:DeepSWE / Vibe Code / llm2014 / WebDev 共 4 榜
    Object.keys(map).forEach(function (k) {
      var e = map[k];
      if (e.deepswe) e.benchCount++;
      if (e.vibe) e.benchCount++;
      if (e.llm) e.benchCount++;
      if (e.webdev) e.benchCount++;
    });
    return map;
  }

  // ===== 汇总卡片信息 =====
  function benchSummary() {
    var ds = window.DEEPSWE || {}, vc = window.VIBECODE || {}, lm = window.LLM2014 || {}, wd = window.ARENA_WEBDEV || {};
    var dsTop = (ds.models || [])[0] || {};
    var vcTop = (vc.models || [])[0] || {};
    var wdTop = wd.models ? webdev()[0] || {} : {};
    var latest = llmMonths().slice(-1)[0];
    var lmRows = latest ? llmMonth(latest).rows : [];
    // llm2014 头名 = 源排序第一名(rank 0),展示其综合分(按等级均值归一化,未必恰为 100)
    var lmTop = lmRows[0] || {};
    var lmTopScore = lmTop.norm != null ? lmTop.norm : null;
    return [
      { key: "deepswe", name: "DeepSWE", tag: "长程软件工程任务", url: ds.url, updated: ds.updated,
        stats: [{ l: "任务", v: ds.stats && ds.stats.tasks }, { l: "模型", v: (ds.models || []).length }],
        top: dsTop.name + " · " + dsTop.pass1 + "%" },
      { key: "vibecode", name: "Vibe Code Bench", tag: "从零构建 Web 应用", url: vc.url, updated: vc.updated,
        stats: [{ l: "系统", v: vc.totalSystems }, { l: "展示", v: (vc.models || []).length }],
        top: vcTop.name + " · " + vcTop.score + "%" },
      { key: "llm2014", name: "llm2014 Agentic", tag: "个人私有题库", url: lm.url, updated: lm.updated || latest,
        stats: [{ l: "月份", v: latest }, { l: "模型", v: lmRows.length }],
        top: lmTop.model + " · " + (lmTopScore != null ? lmTopScore.toFixed(2) + "/100" : "—") },
      { key: "webdev", name: "Code Arena · WebDev", tag: "前端 Web 应用开发", url: wd.officialUrl || wd.url, updated: wd.updated,
        stats: [{ l: "模型", v: (wd.models || []).length }, { l: "Elo", v: (wdTop.score != null ? wdTop.score : "—") }],
        top: (wdTop.name || "—") + " · " + (wdTop.score != null ? wdTop.score + " Elo" : "") }
    ];
  }

  // 查某 canonical 模型在指定 llm 月份下的跨榜命中数(0-3);用于"仅跨榜模型"过滤
  function hitCount(canonId, llmMonthKey) {
    var u = unified(llmMonthKey);
    var e = u[canonId];
    return e ? e.benchCount : 0;
  }

  // ===== "7 天内新上榜"判定(基于 window.SEEN 首次上榜记录) =====
  var SEEN_WINDOW = 7; // 高亮窗口(天)
  // YYYY-MM-DD -> UTC 0 点时间戳;非法返回 NaN
  function parseDay(s) { return new Date(String(s) + "T00:00:00Z").getTime(); }
  // 两个日期字符串的天数差(向下取整,可为负);任一非法返回 NaN
  function dayDiff(a, b) { return Math.floor((parseDay(b) - parseDay(a)) / 86400000); }
  // 单榜判定:某原始模型名是否在指定榜单上"近 7 天内首次上榜"
  // 规则:记录存在 且 firstSeen>since(排除上线存量) 且 0<=(updated-firstSeen)<=7 天
  function isNewRaw(bench, rawName) {
    var seen = window.SEEN;
    if (!seen || !seen.entries || !seen.updated || !seen.since || rawName == null) return false;
    var firstSeen = seen.entries[bench + "|" + rawName];
    if (!firstSeen) return false;
    if (!(firstSeen > seen.since)) return false; // 守卫:首启存量(firstSeen===since)不算新
    var d = dayDiff(firstSeen, seen.updated);
    return d >= 0 && d <= SEEN_WINDOW;
  }
  // 矩阵行判定:模型在已有基准上"新"即为真
  function isNewAny(dsName, vcName, llmName) {
    if (dsName && isNewRaw("deepswe", dsName)) return true;
    if (vcName && isNewRaw("vibe", vcName)) return true;
    if (llmName && isNewRaw("llm", llmName)) return true;
    return false;
  }

  // 暴露
  window.D = {
    MAX_GRADE: MAX_GRADE,
    // 把内部 0-4.0 等级分折算为 0-10 分制用于对外显示;null 原样返回
    to10: function (s) { return s == null ? null : s / MAX_GRADE * 10; },
    // 百分制折算:0-4.0 等级分 -> 0-100;null 原样返回
    to100: function (s) { return s == null ? null : s / MAX_GRADE * 100; },
    parseCell: parseCell,
    canon: canon,
    deepSwe: deepSwe,
    deepSweVersionCounts: deepSweVersionCounts,
    vibeCode: vibeCode,
    webdev: webdev,
    artificialAnalysis: artificialAnalysis,
    llmMonth: llmMonth,
    llmMonths: llmMonths,
    unified: unified,
    hitCount: hitCount,
    benchSummary: benchSummary,
    // "7 天内新上榜"判定
    isNewRaw: isNewRaw,
    isNewAny: isNewAny,
    seenRef: function () { return window.SEEN || { since: null, updated: null, entries: null }; },
    // DeepSWE/Vibe 原始对象(供渲染脚注)
    src: { deepswe: window.DEEPSWE, vibe: window.VIBECODE, llm: window.LLM2014, webdev: window.ARENA_WEBDEV, aa: window.ARTIFICIAL_ANALYSIS }
  };
})();
