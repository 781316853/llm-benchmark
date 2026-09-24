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
  // 去掉括号注解:括号内容为日期/构建号(如 0731、2025-08-07)时保留,
  // 其余括号注解 (high)/(max)/(with fallback) 等剥离;且 preview 是真实变体名
  // (如 "DeepSeek V4 Flash preview")不再剥离。
  function stripParen(s) {
    return String(s || "").replace(/\(([^)]*)\)/g, function (m, inner) {
      return /^[\d\s\-/.年月日]+$/.test(inner.trim()) ? m : "";
    });
  }
  // 剥离"结尾"的 effort 标记(high/max/xhigh/thinking 等)。
  // 只在结尾且前方有分隔符时剥离 —— 早期实现用全局子串替换
  // (/(high|max|medium|xhigh|low|think)/gi),会把 "Qwen3.8-Max-0902" 里属于模型名的
  // Max 一并吃掉,并把 "minimax-m3-thinking" 削成 "minimax-m3-ing",
  // 导致同一模型被拆成两条、NL2Repo 的数据落不到正确模型上。
  // 末尾 \s* 用于吸收「去括号注解后残留的尾随空格」(如 "gpt-5.4-medium (codex-harness)"),
  // 否则 $ 锚点会失效、effort 标记剥不掉。
  function stripTailEffort(s) {
    return String(s || "").replace(/[\s\-_/.]+(?:xhigh|high|max|medium|low|thinking|think)\s*$/i, "");
  }
  // 剥离 effort 后缀后再归一(兜底匹配,用于别名命中后的宽松匹配)
  function normLight(s) {
    return norm(stripTailEffort(stripParen(s)));
  }
  // 匹配候选键:同一原始名的多种写法策略取并集,任一命中别名索引即视为同一模型。
  // 依次为:原样归一 / 去括号+去尾部 effort / 仅去括号 / 去括号后再去尾部 effort。
  function keyCandidates(raw) {
    var base = stripParen(raw);
    return [norm(raw), normLight(raw), norm(base), norm(stripTailEffort(base))];
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
    var cs = keyCandidates(raw), i, c;
    for (i = 0; i < cs.length; i++) { c = cs[i] && aliasIndex[cs[i]]; if (c) return c; }
    // 自动匹配:逐个候选键查已建档的未登记模型
    for (i = 0; i < cs.length; i++) { c = cs[i] && autoIndex[cs[i]]; if (c) return c; }
    // 首次出现:清洗后的原始名作为显示名,全候选键建档供后续任意写法命中
    var fb = { id: cleanDisplay(raw), vendor: "其他", color: (window.MODEL_MAP && window.MODEL_MAP.vendorDefaultColor) || "#8A8F98" };
    cs.forEach(function (k) { if (k) autoIndex[k] = fb; });
    return fb;
  }

  // 厂商身份色(表格里的模型色点与「厂商」列文字共用):取 MODEL_MAP.vendorColors,
  // 未登记的厂商(含自动建档的「其他」)落 vendorDefaultColor。与 canon().color 分工不同 ——
  // 后者是模型身份色,仍由图表按模型区分曲线时使用。
  function vendorColor(vendor) {
    var map = (window.MODEL_MAP && window.MODEL_MAP.vendorColors) || {};
    return map[vendor] || (window.MODEL_MAP && window.MODEL_MAP.vendorDefaultColor) || "#8A8F98";
  }

  // ===== DeepSWE:v1.1(每日刷新)与 v1.0(历史静态快照)合并 =====
  // 策略:v1.1 优先,同名模型按 canonical 去重只保留 v1.1;v1.0 独有的模型追加进来。
  // v1.1 内同 canonical 的多版本变体(如 Qwen3.8-Max 与其 0902 版)取最高 Pass@1 合为一条。
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
    // 同 canonical 只保留最高 Pass@1 的一条
    var best = {};
    merged.forEach(function (m) {
      if (!best[m.canon.id] || m.pass1 > best[m.canon.id].pass1) best[m.canon.id] = m;
    });
    // 按 Pass@1 降序,保证表格排名可靠
    return Object.keys(best).map(function (k) { return best[k]; })
      .sort(function (a, b) { return b.pass1 - a.pass1; });
  }

  // 版本构成计数:返回合并集中 v1.1 / v1.0 独有的模型数,供脚注展示
  function deepSweVersionCounts() {
    var counts = { v11: 0, v10: 0 };
    deepSwe().forEach(function (m) {
      if (m.version === "v1.0") counts.v10++; else counts.v11++;
    });
    return counts;
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
  // 综合分(norm,0-100)= 等级均值基础分 + 按源站行序的保序收敛:
  // 1) 基础分 = 各已测项目等级均值(A+=4.0..D=0.5,Pass=4.0,Failed=0),不做档位归并;
  // 2) 绝对等级映射(mean/4.0×100):直接按满分4.0线性折算,跨月可比;
  //    不做月内 min-max 归一化(避免当月极端高分撑大区间、把低分段挤到零点造成失真);
  // 3) 均值完全相同的模型同组,组内按源排名(rank 0=第一)每退一名递减 0.01;
  // 4) 组顶受上一组最低分压制(天花板链),保证基础分跨组不倒挂、全员互异;
  // 5) 全 Skip/Pending(mean=null)不计分,综合分显示 "-";
  // 6) 保序收敛(2026-09-15):以源站行序为准,对基础分求「沿名次严格递减、相邻至少差
  //    1 分」的最小二乘解(PAVA),消除「名次靠前但分数低」的倒挂;
  //    未被合并的模型保持基础分不变,矛盾处相邻合并取均值后按名次拉开 1 分/名。
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
        // 绝对等级映射:mean/满分4.0×100,与当月其它模型分数无关,跨月稳定可比
        var base = Math.round(g[0].mean / MAX_GRADE * 10000);
        var head = Math.min(base + (g.length - 1), ceiling);
        g.forEach(function (r, j) { r._cents = head - j; });
        ceiling = head - g.length;
      });
      // 兜底:极端拥挤月份若被天花板链压出负分,整体平移补差(保持互异)
      var lowest = Math.min.apply(null, order.map(function (r) { return r._cents; }));
      if (lowest < 0) order.forEach(function (r) { r._cents -= lowest; });
      // ===== 保序收敛:源站行序为准,消除「名次靠前但分数低」的倒挂 =====
      // 以上述均值分为基础分,求「沿名次严格递减、相邻至少差 RANK_GAP」的最小二乘解:
      // 反序变换 y_i = 基础分 − RANK_GAP·i 后做非递减 PAVA(相邻违反者合并取加权均值),
      // 再回变换 c_i = y + RANK_GAP·i;未被合并的模型保持基础分不变,合并块内每退一名 −1 分。
      var RANK_GAP = 100; // 相邻名次最小分差(百分点,即 1 分)
      var byRank = order.slice().sort(function (a, b) { return a.rank - b.rank; });
      var nR = byRank.length, ys = [];
      for (var ri = 0; ri < nR; ri++) ys.push(byRank[nR - 1 - ri]._cents - RANK_GAP * ri);
      var stack = [];
      for (var ri = 0; ri < nR; ri++) {
        stack.push({ sum: ys[ri], n: 1 });
        while (stack.length > 1) {
          var pa = stack[stack.length - 2], pb = stack[stack.length - 1];
          if (pb.sum / pb.n < pa.sum / pa.n) { pa.sum += pb.sum; pa.n += pb.n; stack.pop(); } else break;
        }
      }
      var fin = new Array(nR), fi = 0;
      stack.forEach(function (blk) {
        var mean = Math.round(blk.sum / blk.n);
        for (var j = 0; j < blk.n; j++, fi++) fin[fi] = mean + RANK_GAP * fi;
      });
      // 兜底:极端拥挤月份若被保序压出负分,整体平移补差(保持顺序与间隔)
      var minFin = Math.min.apply(null, fin);
      if (minFin < 0) for (var ri = 0; ri < nR; ri++) fin[ri] -= minFin;
      for (var ri = 0; ri < nR; ri++) byRank[nR - 1 - ri].norm = fin[ri] / 100;
    }
    return { projects: mo.projects, rows: rows };
  }
  function llmMonths() { return Object.keys((window.LLM2014 && window.LLM2014.months) || {}).sort(); }

  // ===== AI 能力专项测试(atmeplz)四方向榜:前端/后端方向分 =====
  // 独立榜单展示,不计入综合分;按 score 降序,并附加 canonical 与颜色
  function aicap() {
    var src = window.AICAP || { directions: {} };
    var out = { frontend: [], backend: [] };
    ["frontend", "backend"].forEach(function (key) {
      var dir = (src.directions && src.directions[key]) || {};
      (dir.models || []).forEach(function (m) {
        out[key].push(Object.assign({}, m, { canon: canon(m.name) }));
      });
      out[key].sort(function (a, b) { return b.score - a.score; });
    });
    return out;
  }

  // ===== Terminal-Bench 多版本(4.0/3.0/2.1):每 canonical 模型按版本优先级取最高版本解决率 =====
  // 优先级:4.0 > 3.0 > 2.1;同版本内有多个 agent/effort 条目时取最高解决率。
  // 供总览矩阵/综合分使用(多版本合并为一个基准组);权威页完整展示用 tbenchByVersion(ver)。
  var TB_VERSIONS = [
    { ver: "4.0", src: function () { return window.TBENCH || { models: [] }; } },
    { ver: "3.0", src: function () { return window.TBENCH_V3 || { models: [] }; } },
    { ver: "2.1", src: function () { return window.TBENCH_V21 || { models: [] }; } }
  ];

  // 指定版本原始条目(agent×model,权威页完整表格用),附 version
  function tbenchByVersion(ver) {
    var i, v = null;
    for (i = 0; i < TB_VERSIONS.length; i++) if (TB_VERSIONS[i].ver === ver) { v = TB_VERSIONS[i]; break; }
    var arr = v ? v.src().models.slice() : [];
    return arr.sort(function (a, b) { return b.score - a.score; })
      .map(function (m) { return Object.assign({}, m, { version: ver, canon: canon(m.model) }); });
  }

  // Terminal-Bench 4.0 原始条目(agent×model),供兼容/局部引用
  function tbenchAll() {
    return tbenchByVersion("4.0");
  }

  // 聚合:每 canonical 模型以「最高版本」为代表(版本优先级 4.0>3.0>2.1),版本内取该模型最优原始分。
  // 归一口径:以最新 4.0 为基准做跨版本难度折算 —— 非基准版本 X 的难度系数
  //   k_X = Σ(共有模型在 4.0 的分) / Σ(共有模型在 X 的分),共有 = 与 4.0 同 canonical 都有成绩,
  // 该版分数 × k_X 即「4.0 等效分」(clamp 0-100);全池等效分统一 min-max 到 0-100 作 norm。
  // 原因:各版本难度与口径不同(如 2.1 为厂商自报分,88 分只相当于 4.0 官方 26 分左右),
  // 版本内 min-max 会让低难度版本的虚高分追平 4.0 头名;按共有模型折算后跨版本才可比。
  // 兜底:若 X 与 4.0 直接共有模型不足 3 个,则与低一档版本求系数并乘以该档累计系数(链式折算);
  //       实在无法折算时系数记 1(等效分 = 原始分)。
  function tbench() {
    var REF = "4.0";
    // 每版本按 canonical 取最优分
    var byVer = {};
    TB_VERSIONS.forEach(function (v) {
      var byModel = {};
      v.src().models.forEach(function (m) {
        var c = canon(m.model);
        if (!byModel[c.id] || m.score > byModel[c.id].score) byModel[c.id] = m;
      });
      byVer[v.ver] = byModel;
    });
    // 版本难度系数:4.0 恒为 1,其余对基准(或链式对低一档)按共有模型分和之比折算
    function sharedRatio(a, b) {
      var sumA = 0, sumB = 0, n = 0;
      Object.keys(byVer[a]).forEach(function (id) {
        if (byVer[b][id]) { sumA += byVer[a][id].score; sumB += byVer[b][id].score; n++; }
      });
      return (n >= 3 && sumA > 0) ? { k: sumB / sumA, n: n } : null;
    }
    var coef = {}, coefN = {};
    TB_VERSIONS.forEach(function (v, vi) {
      if (v.ver === REF) { coef[v.ver] = 1; coefN[v.ver] = byVer[v.ver] ? Object.keys(byVer[v.ver]).length : 0; return; }
      var r = sharedRatio(v.ver, REF), k = null, n = 0;
      if (r) { k = r.k; n = r.n; }
      else if (vi > 1) {
        var lower = TB_VERSIONS[vi - 1].ver;
        var rl = sharedRatio(v.ver, lower);
        if (rl && coef[lower] != null) { k = rl.k * coef[lower]; n = rl.n; }
      }
      coef[v.ver] = (k != null) ? k : 1;
      coefN[v.ver] = n;
    });
    // 每模型代表:最高版本优先(已登记更高版本不覆盖);等效分 = 原始分 × 所在版本难度系数
    var best = {};
    TB_VERSIONS.forEach(function (v) {
      var byModel = byVer[v.ver];
      Object.keys(byModel).forEach(function (id) {
        if (best[id]) return;
        var m = byModel[id];
        var equiv = Math.max(0, Math.min(100, m.score * coef[v.ver]));
        best[id] = Object.assign({}, m, { version: v.ver, equiv: equiv, coef: coef[v.ver], coefN: coefN[v.ver], canon: canon(m.model) });
      });
    });
    // 全池等效分 min-max → 0-100
    var keys = Object.keys(best), min = Infinity, max = -Infinity, i;
    for (i = 0; i < keys.length; i++) {
      var s = best[keys[i]].equiv;
      if (s < min) min = s;
      if (s > max) max = s;
    }
    keys.forEach(function (id) {
      best[id].norm = (max > min) ? ((best[id].equiv - min) / (max - min)) * 100 : 100;
    });
    return keys.map(function (id) { return best[id]; })
      .sort(function (a, b) { return b.equiv - a.equiv; });
  }

  // ===== 权威基准测试(仅展示,不计入综合分/命中):TB-Science / OSWorld / ALE / ARC-AGI-3 / BenchCAD =====
  function tbScience() {
    var src = window.TBSCIENCE || { models: [] };
    return src.models.slice().sort(function (a, b) { return b.score - a.score; })
      .map(function (m) { return Object.assign({}, m, { canon: canon(m.model) }); });
  }
  function osworld() {
    var src = window.OSWORLD || { models: [] };
    return src.models.slice().sort(function (a, b) { return b.score - a.score; })
      .map(function (m) { return Object.assign({}, m, { canon: canon(m.system) }); });
  }
  function lastExam() {
    var src = window.LASTEXAM || { models: [] };
    return src.models.slice().sort(function (a, b) { return b.pass - a.pass; })
      .map(function (m) { return Object.assign({}, m, { canon: canon(m.model) }); });
  }
  function arcagi3() {
    var src = window.ARCAGI3 || { models: [] };
    return src.models.slice().sort(function (a, b) { return a.rank - b.rank; })
      .map(function (m) { return Object.assign({}, m, { canon: canon(m.model) }); });
  }
  function benchcad() {
    var src = window.BENCHCAD || { tasks: {} };
    var out = {};
    ["vision2code", "visionqa", "codeqa"].forEach(function (k) {
      var t = src.tasks[k] || {};
      out[k] = {
        label: t.label || k,
        blurb: t.blurb || "",
        primary: t.primary || "total",
        rows: (t.rows || []).map(function (m) { return Object.assign({}, m, { canon: canon(m.model) }); })
      };
    });
    return out;
  }

  // ===== 新引入权威基准(仅展示,不计入综合分/命中/矩阵):GPQA Diamond / HLE / NL2Repo-Bench / ProgramBench =====
  function gpqa() {
    var src = window.GPQA || { models: [] };
    return src.models.slice().sort(function (a, b) { return b.score - a.score; })
      .map(function (m) { return Object.assign({}, m, { canon: canon(m.model) }); });
  }
  function hle() {
    var src = window.HLE || { models: [] };
    return src.models.slice().sort(function (a, b) { return b.score - a.score; })
      .map(function (m) { return Object.assign({}, m, { canon: canon(m.model) }); });
  }
  function nl2repo() {
    var src = window.NL2REPO || { models: [] };
    return src.models.slice().sort(function (a, b) { return b.score - a.score; })
      .map(function (m) { return Object.assign({}, m, { canon: canon(m.model) }); });
  }
  function programbench() {
    var src = window.PROGRAMBENCH || { models: [] };
    return (src.models || []).slice().sort(function (a, b) { return b.score - a.score || (b.almost || 0) - (a.almost || 0); })
      .map(function (m) { return Object.assign({}, m, { canon: canon(m.model) }); });
  }
  // CursorBench:模型级主榜(每模型取最优档位),按分数降序
  function cursorbench() {
    var src = window.CURSORBENCH || { models: [] };
    return (src.models || []).slice().sort(function (a, b) { return b.score - a.score; })
      .map(function (m) { return Object.assign({}, m, { canon: canon(m.model) }); });
  }
  // CursorBench 配置明细(model × 推理档位,共 52 条):按源站排名升序,供章节内展开查看
  function cursorbenchConfigs() {
    var src = window.CURSORBENCH || { configs: [] };
    return (src.configs || []).slice().sort(function (a, b) { return (a.rank || 0) - (b.rank || 0); })
      .map(function (c) { return Object.assign({}, c, { canon: canon(c.model) }); });
  }
  // FrontierCode:模型级主榜(main 子集下各档位最优),按分数降序
  function frontiercode() {
    var src = window.FRONTIERCODE || { models: [] };
    return (src.models || []).slice().sort(function (a, b) { return b.score - a.score; })
      .map(function (m) { return Object.assign({}, m, { canon: canon(m.model) }); });
  }

  // ===== ModelDial 雷达(独立页;计入综合分(「第三方实测」组计分组之一,权重 16%)与命中数) =====
  // 主榜为模型级条目:每条取该模型最高分 config(与源站主榜一致),按综合分降序;
  // 综合分口径 = 后端与测试 40% + 前端与交互 30% + 知识与推理 30%(各分项 0-100)。
  // 源站模型标识为 slug(如 qwen3.8-flash),经 canon() 归一到 canonical 显示名。
  function modeldial() {
    var src = window.MODELDIAL || { models: [] };
    return (src.models || []).slice().sort(function (a, b) { return b.overall - a.overall; })
      .map(function (m) { return Object.assign({}, m, { canon: canon(m.model) }); });
  }
  // config 明细(model × 推理强度,共 52 条):按源站排名升序,供「ModelDial」页明细表展示
  function modeldialConfigs() {
    var src = window.MODELDIAL || { configs: [] };
    return (src.configs || []).slice().sort(function (a, b) { return (a.rank || 0) - (b.rank || 0); })
      .map(function (c) { return Object.assign({}, c, { canon: canon(c.model) }); });
  }

  // ===== 无机酸 · AI 前端实测(独立页;计入综合分(「第三方实测」组计分组之一,权重 10%)与命中数) =====
  // 主榜为模型级条目(源站按两任务总分排名);score = 两任务分之和,单任务 0-100,故量纲 0-200。
  // 每模型跑在其「自家 agent harness」(agent 字段:cc/codex/zcode/qoder/cursor/antigravity/devin)下,
  // n=1 单次实测;lo/hi 为源站人工标注的不确定区间(非置信区间)。模型名源站已是纯展示名(不含档位),
  // 直接喂 canon()。
  function wujisuan() {
    var src = window.WUJISUAN || { models: [] };
    return (src.models || []).slice().sort(function (a, b) { return b.score - a.score; })
      .map(function (m) { return Object.assign({}, m, { canon: canon(m.name) }); });
  }

  // ===== 统一视图:canonical -> {deepswe, llm, webdev, tbench, aicapFe, aicapBe, modeldial, wujisuan} 用于矩阵/雷达 =====
  // deepswe:同名取最高;llm:用指定月份(默认最新)的均值;webdev:同名取最高;
  // tbench:同名取最高(计入综合分与命中数);modeldial:同名取最高(2026-09 起计入综合分与命中数);
  // nl2repo 自 2026-09-19 起与 benchcad 等其余权威基准一样仅展示、不进统一视图;
  // aicap:前端/后端方向分分别取最高(0-100,直接作 norm);跨榜命中合并为「AI 能力」单一基准计数
  function unified(llmMonthKey) {
    var map = {}; // canonical id -> entry
    function ensure(c) {
      if (!map[c.id]) map[c.id] = { id: c.id, vendor: c.vendor, color: c.color, benchCount: 0, deepswe: null, llm: null, webdev: null, tbench: null, aicapFe: null, aicapBe: null, modeldial: null, wujisuan: null };
      return map[c.id];
    }
    // DeepSWE(合并后每条带 version:v1.1/v1.0,供总览矩阵标注数据版本)
    // 综合分口径:按合并快照内 min-max 归一到 0-100(norm),与 tbench 等 0-100 基准同量纲,
    // 不再直接用 Pass@1 原始值(头名约 74,量纲低于 0-100)。矩阵 DeepSWE 列展示仍用 pass1 原始值。
    var dsAll = deepSwe();
    var dsMin = Infinity, dsMax = -Infinity;
    dsAll.forEach(function (m) { if (m.pass1 < dsMin) dsMin = m.pass1; if (m.pass1 > dsMax) dsMax = m.pass1; });
    var dsSpan = (dsMax - dsMin) || 1;
    dsAll.forEach(function (m) {
      var e = ensure(m.canon);
      if (!e.deepswe || m.pass1 > e.deepswe.pass1) e.deepswe = { pass1: m.pass1, ci: m.ci, cost: m.cost, outTok: m.outTok, steps: m.steps, name: m.name, version: m.version, norm: (m.pass1 - dsMin) / dsSpan * 100 };
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
    // Terminal-Bench 多版本(4.0/3.0/2.1):合并为一个基准组,优先以最高版本为代表(4.0>3.0>2.1);
    // 计入综合分与命中数。归一口径:以 4.0 为基准,3.0/2.1 按共有模型折算难度系数得「4.0 等效分」
    // (如 2.1 自报分 88 ≈ 4.0 官方 26 分),再全池统一 min-max 到 0-100;矩阵展示的仍是代表版本原始分。
    tbench().forEach(function (m) {
      var e = ensure(m.canon);
      if (!e.tbench || m.score > e.tbench.score) e.tbench = { score: m.score, ci: m.ci, version: m.version, agent: m.agent, effort: m.effort, equiv: m.equiv, name: m.model, norm: m.norm };
    });
    // AI 能力专项测试:前端/后端方向分(0-100,直接作 norm);前端/后端各自同名取最高
    var ac = aicap();
    ac.frontend.forEach(function (m) {
      var e = ensure(m.canon);
      if (!e.aicapFe || m.score > e.aicapFe.score)
        e.aicapFe = { score: m.score, norm: m.score, name: m.name, platform: m.platform, effort: m.effort, vendor: m.vendor };
    });
    ac.backend.forEach(function (m) {
      var e = ensure(m.canon);
      if (!e.aicapBe || m.score > e.aicapBe.score)
        e.aicapBe = { score: m.score, norm: m.score, name: m.name, platform: m.platform, effort: m.effort, vendor: m.vendor };
    });
    // NL2Repo-Bench 自 2026-09-19 起移出统一视图(不再计入综合分与命中数、不再进总览矩阵),
    // 仅在「权威基准测试」页经 D.nl2repo() 直接展示,故此处不再写入。
    // ModelDial 雷达:综合分(0-100,直接作 norm,同 AI 能力口径);同名取最高分 config
    modeldial().forEach(function (m) {
      if (m.overall == null) return;
      var e = ensure(m.canon);
      if (!e.modeldial || m.overall > e.modeldial.overall)
        e.modeldial = {
          score: m.overall, norm: m.overall, overall: m.overall,
          backend: m.backend, frontend: m.frontend, knowledge: m.knowledge,
          elapsedMs: m.elapsedMs, costUsd: m.costUsd, configs: m.configs,
          name: m.model, effort: m.effort, provider: m.provider
        };
    });
    // 无机酸 · AI 前端实测:两任务总分(0-200)。综合分自 2026-09-22 起走「榜内稳健 z 分」(尺度不变),
    // 故此处不折算成百分制(同 webdev 列直接取 Elo 原值的先例);同名取最高分条目。
    wujisuan().forEach(function (m) {
      if (m.score == null) return;
      var e = ensure(m.canon);
      if (!e.wujisuan || m.score > e.wujisuan.score)
        e.wujisuan = {
          score: m.score, lo: m.lo, hi: m.hi, rank: m.rank,
          agent: m.agent, effort: m.effort, name: m.name, date: m.date
        };
    });
    // 统计跨榜命中数:DeepSWE / llm2014 / WebDev / Terminal-Bench / AI 能力 / ModelDial / 无机酸前端实测
    // 共 7 基准组;AI 能力前端/后端合并为「AI 能力」单一基准计数(上限 7),矩阵中仍分别两列展示;
    // 其余权威基准(TB-Science/OSWorld/ALE/ARC-AGI-3/BenchCAD/GPQA/HLE/NL2Repo)仅展示不计命中。
    Object.keys(map).forEach(function (k) {
      var e = map[k];
      if (e.deepswe) e.benchCount++;
      if (e.llm) e.benchCount++;
      if (e.webdev) e.benchCount++;
      if (e.tbench) e.benchCount++;
      if (e.aicapFe || e.aicapBe) e.benchCount++;
      if (e.modeldial) e.benchCount++;
      if (e.wujisuan) e.benchCount++;
    });
    return map;
  }

  // ===== 汇总卡片信息(DeepSWE / llm2014 / WebDev / AI 能力 / Terminal-Bench / ModelDial / 无机酸前端实测 共 7 张) =====
  function benchSummary() {
    var ds = window.DEEPSWE || {}, lm = window.LLM2014 || {}, wd = window.ARENA_WEBDEV || {}, ac = window.AICAP || {}, tb = window.TBENCH || {}, md = window.MODELDIAL || {}, wj = window.WUJISUAN || {};
    var dsTop = (ds.models || [])[0] || {};
    var wdTop = wd.models ? webdev()[0] || {} : {};
    var tbTop = tbench()[0] || {};
    var mdTop = modeldial()[0] || {};
    var wjTop = wujisuan()[0] || {};
    var tbN = (tb.models || []).length + ((window.TBENCH_V3 || {}).models || []).length + ((window.TBENCH_V21 || {}).models || []).length;
    var latest = llmMonths().slice(-1)[0];
    var lmRows = latest ? llmMonth(latest).rows : [];
    // llm2014 头名 = 源排序第一名(rank 0),展示其综合分(按等级均值归一化,未必恰为 100)
    var lmTop = lmRows[0] || {};
    var lmTopScore = lmTop.norm != null ? lmTop.norm : null;
    // AI 能力:前端/后端方向分头名(各方向按 score 降序取首)
    var acFe = (ac.directions && ac.directions.frontend) || {};
    var acBe = (ac.directions && ac.directions.backend) || {};
    var acFeTop = (acFe.models || [])[0] || {};
    var acBeTop = (acBe.models || [])[0] || {};
    return [
      { key: "deepswe", name: "DeepSWE", tag: "长程软件工程任务", url: ds.url, updated: ds.updated,
        stats: [{ l: "任务", v: ds.stats && ds.stats.tasks }, { l: "模型", v: (ds.models || []).length }],
        top: dsTop.name + " · " + dsTop.pass1 + "%" },
      { key: "llm2014", name: "llm2014 Agentic", tag: "个人私有题库", url: lm.url, updated: lm.updated || latest,
        stats: [{ l: "月份", v: latest }, { l: "模型", v: lmRows.length }],
        top: lmTop.model + " · " + (lmTopScore != null ? lmTopScore.toFixed(2) + "/100" : "—") },
      { key: "webdev", name: "Code Arena · WebDev", tag: "前端 Web 应用开发", url: wd.officialUrl || wd.url, updated: wd.updated,
        stats: [{ l: "模型", v: (wd.models || []).length }, { l: "Elo", v: (wdTop.score != null ? wdTop.score : "—") }],
        top: (wdTop.name || "—") + " · " + (wdTop.score != null ? wdTop.score + " Elo" : "") },
      { key: "aicap", name: "AI 能力专项测试", tag: "前端/后端方向分", url: ac.boardUrl || ac.url || "", updated: ac.updated,
        stats: [{ l: "方向", v: 2 }, { l: "模型", v: ac.runCount != null ? ac.runCount : 0 }],
        top: [acFeTop.name, acBeTop.name].filter(Boolean).join(" / ") },
      { key: "tbench", name: "Terminal-Bench", tag: "终端命令行任务 · 4.0/3.0/2.1", url: tb.url, updated: tb.updated,
        stats: [{ l: "版本", v: "4.0/3.0/2.1" }, { l: "条目", v: tbN }],
        top: tbTop.model + (tbTop.version ? " · v" + tbTop.version : "") + " · " + (tbTop.score != null ? tbTop.score + "%" : "—") },
      // ModelDial 的模型标识是 slug,卡片展示用 canon() 归一后的显示名(与矩阵一致)
      { key: "modeldial", name: "ModelDial 雷达", tag: "后端 40% / 前端 30% / 知识 30%", url: md.url, updated: md.updated,
        stats: [{ l: "模型", v: (md.models || []).length }, { l: "配置", v: (md.configs || []).length }],
        top: (mdTop.canon ? mdTop.canon.id : mdTop.model) + " · " + (mdTop.overall != null ? mdTop.overall + " / 100" : "—") },
      // 无机酸前端实测:总分 = 两任务分之和(每任务 0-100),卡片标注实测所用 harness
      { key: "wujisuan", name: "无机酸 · AI 前端实测", tag: "两个真实前端任务 · 总分 0-200", url: wj.url, updated: wj.updated,
        stats: [{ l: "模型", v: (wj.models || []).length }, { l: "任务", v: (wj.tasks || []).length }],
        top: (wjTop.canon ? wjTop.canon.id : wjTop.name) + " · " + (wjTop.score != null ? wjTop.score + " / 200" : "—") }
    ];
  }

  // 查某 canonical 模型在指定 llm 月份下的跨榜命中数(0-7);用于"仅跨榜模型"过滤
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
  // 矩阵行判定:模型在已有基准上"新"即为真(DeepSWE / llm2014 / Terminal-Bench 4.0)
  function isNewAny(dsName, llmName, tbName) {
    if (dsName && isNewRaw("deepswe", dsName)) return true;
    if (llmName && isNewRaw("llm", llmName)) return true;
    if (tbName && isNewRaw("tbench", tbName)) return true;
    return false;
  }

  // ===== AI 编程工具更新日志(「编程工具更新日志」页;非分数数据,不参与综合分与命中数) =====
  // 抓取端在 data/changelog.js 存各源可得的全量条目,页面**每个工具只渲染最近一次更新**;
  // days 是「这次更新是否还算新」的门槛(前端 14/30/全部 切换),不是条目条数的裁剪。
  // days<=0 表示不限。窗口基准取真实的今天而非 data 的 updated:
  // 否则 CI 连续几天不落地时,窗口会跟着数据一起滞后,把早已过期的条目算进窗口内。
  function dayOffset(dateStr, delta) {
    var t = parseDay(dateStr) + delta * 86400000;
    return isFinite(t) ? new Date(t).toISOString().slice(0, 10) : "";
  }
  function changelog(days) {
    var src = window.CHANGELOG;
    if (!src || !Array.isArray(src.tools)) return null;
    var win = days == null ? (src.uiWindowDays || 14) : Number(days);
    var cutoff = win > 0 ? dayOffset(new Date().toISOString().slice(0, 10), -(win - 1)) : "";
    var tools = src.tools.map(function (t) {
      // 条目在抓取端已按日期降序排好,首条即该工具最近一次更新
      var all = t.entries || [];
      var latest = all[0] || null;
      var inWindow = latest && (!cutoff || latest.date >= cutoff);
      return Object.assign({}, t, {
        entries: inWindow ? [latest] : [],
        total: all.length,
        latestDate: latest ? latest.date : ""
      });
    });
    return {
      updated: src.updated, refreshedAt: src.refreshedAt, desc: src.desc,
      uiWindowDays: src.uiWindowDays || 14, windowDays: win, cutoff: cutoff, tools: tools
    };
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
    vendorColor: vendorColor,
    deepSwe: deepSwe,
    deepSweVersionCounts: deepSweVersionCounts,
    webdev: webdev,
    aicap: aicap,
    llmMonth: llmMonth,
    llmMonths: llmMonths,
    tbench: tbench,
    tbenchAll: tbenchAll,
    tbenchByVersion: tbenchByVersion,
    tbScience: tbScience,
    osworld: osworld,
    lastExam: lastExam,
    arcagi3: arcagi3,
    benchcad: benchcad,
    gpqa: gpqa,
    hle: hle,
    nl2repo: nl2repo,
    programbench: programbench,
    cursorbench: cursorbench,
    cursorbenchConfigs: cursorbenchConfigs,
    frontiercode: frontiercode,
    modeldial: modeldial,
    modeldialConfigs: modeldialConfigs,
    wujisuan: wujisuan,
    // codingplan.fyi 推荐分组快照(「套餐对比」页;文件缺失/加载失败时返回 null)
    codingplan: function () { return window.CODINGPLAN || null; },
    // AI 编程工具更新日志(「编程工具更新日志」页;无数据文件时返回 null)
    changelog: changelog,
    unified: unified,
    hitCount: hitCount,
    benchSummary: benchSummary,
    // "7 天内新上榜"判定
    isNewRaw: isNewRaw,
    isNewAny: isNewAny,
    seenRef: function () { return window.SEEN || { since: null, updated: null, entries: null }; },
    // 各源原始对象(供渲染脚注)
    src: { deepswe: window.DEEPSWE, llm: window.LLM2014, webdev: window.ARENA_WEBDEV, aicap: window.AICAP,
      tbench: window.TBENCH, tbenchV3: window.TBENCH_V3, tbenchV21: window.TBENCH_V21, tbscience: window.TBSCIENCE, osworld: window.OSWORLD, lastexam: window.LASTEXAM,
      arcagi3: window.ARCAGI3, benchcad: window.BENCHCAD, gpqa: window.GPQA, hle: window.HLE, nl2repo: window.NL2REPO, programbench: window.PROGRAMBENCH,
      cursorbench: window.CURSORBENCH, frontiercode: window.FRONTIERCODE, modeldial: window.MODELDIAL, wujisuan: window.WUJISUAN }
  };
})();
