// 跨基准对比逻辑:基于 data.js 的统一视图,产出矩阵、雷达、指标卡、成本对比所需数据。
// 暴露 window.CMP;app.js 调用后渲染。
(function () {
  "use strict";

  var D = window.D;

  // 综合分容差:差距 < 此值的模型视为"同档",同档内按次级指标排序
  var SCORE_TOLERANCE = 1.5;
  // 各榜成绩取值(与矩阵列一致,值越大越好);双榜模型逐榜比对时使用
  var BOARD_VALS = {
    deepswe: function (e) { return e.deepswe ? e.deepswe.pass1 : null; },
    vibe:    function (e) { return e.vibe ? e.vibe.score : null; },
    llm:     function (e) { return (e.llm && e.llm.norm != null) ? e.llm.norm : null; },
    webdev:  function (e) { return (e.webdev && e.webdev.score != null) ? e.webdev.score : null; }
  };
  // 双榜模型命中的榜 key 列表(以实际有数据为准)
  function hitBoards(e) {
    var boards = [];
    if (e.deepswe) boards.push("deepswe");
    if (e.vibe) boards.push("vibe");
    if (e.llm && e.llm.norm != null) boards.push("llm");
    if (e.webdev && e.webdev.score != null) boards.push("webdev");
    return boards;
  }
  // 双榜模型的区间位置:对其命中的每个榜,统计该榜成绩高于它的排名行模型数,取均值。
  // 结果为 n 表示应落入第 n 与第 n+1 个排名行之间的间隔(0 = 首名之前),不计算综合分
  function dualPosition(e, ranked) {
    var boards = hitBoards(e);
    if (!boards.length) return ranked.length;
    var sum = 0;
    boards.forEach(function (b) {
      var val = BOARD_VALS[b](e);
      var above = 0;
      ranked.forEach(function (r) {
        var rv = BOARD_VALS[b](r);
        if (rv != null && rv > val) above++;
      });
      sum += above;
    });
    return sum / boards.length;
  }
  // 交叉矩阵排序:
  // ① 排名行(命中≥3榜)按"综合分容差分组"降序,同档内依次按 综合分微差→命中数→一致性,
  //    并依次编号 _posKey = 0,1,2…;
  // ② 双榜模型不计算综合分,按逐榜比对落入相应名次间隔,_posKey = dualPosition − 0.5,
  //    恰好落在两个排名行的间隔中;多个双榜模型同间隔时按位置值先后排列;
  // ③ 合并后按 _posKey 升序;命中不足 2 榜的模型追加在末尾,仅"显示全部"可见
  function matrix(llmMonthKey) {
    var map = D.unified(llmMonthKey);
    var all = Object.keys(map).map(function (k) { return map[k]; });
    var ranked = all.filter(function (e) { return e.benchCount >= 3; });
    var dual = all.filter(function (e) { return e.benchCount === 2; });
    var rest = all.filter(function (e) { return e.benchCount < 2; });
    ranked.sort(function (a, b) {
      var ca = composite(a), cb = composite(b);
      // 差距 ≥ 容差:严格按综合分降序
      if (cb - ca >= SCORE_TOLERANCE) return 1;
      if (ca - cb >= SCORE_TOLERANCE) return -1;
      // 同档内:先按综合分微差降序(综合分高者优先,即使差距小于容差)
      if (ca !== cb) return cb - ca;
      // 综合分相同:命中数降序(数据更全面者优先)
      if (a.benchCount !== b.benchCount) return b.benchCount - a.benchCount;
      // 命中数相同:一致性升序(标准差小=各榜均衡=优先)
      return variance(a) - variance(b);
    });
    ranked.forEach(function (e, i) { e._posKey = i; });
    dual.forEach(function (e) {
      var key = dualPosition(e, ranked) - 0.5;
      // 位置恰为 x.5 时键会与排名行整数键重合,微移保证双榜键严格落在两个排名行之间,
      // 避免默认渲染与表头排序(升序后反转)对重合键的先后不一致
      if (Math.abs(key - Math.round(key)) < 1e-9) key += 1e-6;
      e._posKey = key;
    });
    rest.forEach(function (e, i) { e._posKey = ranked.length + i; });
    var rows = ranked.concat(dual, rest);
    rows.sort(function (a, b) { return a._posKey - b._posKey; });
    return rows;
  }
  // 主基准组权重:DeepSWE 40%、Vibe Code 20%、llm2014 10%、WebDev 20%
  // (llm2014 为个人私有题库、等级折算制,代表性弱于第三方基准,2026-08-27 起权重由 20% 降至 10%;
  //  WebDev 与 Vibe 同属前端,合计权重 40%;avgNorm 按在场基准权重归一化,缺失权重自动回流)
  var OLD_WEIGHTS = { deepswe: 0.4, vibe: 0.2, llm: 0.1, webdev: 0.2 };
  function avgNorm(e) {
    var sum = 0, wsum = 0;
    // 按权重加权平均;缺失基准的权重自动回流至已有基准(归一化)
    if (e.deepswe) { sum += e.deepswe.norm * OLD_WEIGHTS.deepswe; wsum += OLD_WEIGHTS.deepswe; }
    if (e.vibe)    { sum += e.vibe.norm    * OLD_WEIGHTS.vibe;    wsum += OLD_WEIGHTS.vibe; }
    if (e.llm && e.llm.norm != null) { sum += e.llm.norm * OLD_WEIGHTS.llm; wsum += OLD_WEIGHTS.llm; }
    if (e.webdev && e.webdev.norm != null) { sum += e.webdev.norm * OLD_WEIGHTS.webdev; wsum += OLD_WEIGHTS.webdev; }
    return wsum > 0 ? sum / wsum : 0;
  }
  // 跨榜一致性(标准差):各基准 norm 值的离散程度
  // 数据不足 2 个基准时返回 0,避免单榜模型被误判为"最均衡"
  function variance(e) {
    var vs = [];
    if (e.deepswe) vs.push(e.deepswe.norm);
    if (e.vibe) vs.push(e.vibe.norm);
    if (e.llm && e.llm.norm != null) vs.push(e.llm.norm);
    if (e.webdev && e.webdev.norm != null) vs.push(e.webdev.norm);
    if (vs.length < 2) return 0;
    var mean = vs.reduce(function (a, b) { return a + b; }, 0) / vs.length;
    var sumSq = vs.reduce(function (s, v) { var d = v - mean; return s + d * d; }, 0);
    return Math.sqrt(sumSq / vs.length);
  }
  // 一致性折减参数:标准差越大折减越多,让各榜均衡的模型获得微优势
  var VARIANCE_WEIGHT = 0.15; // 每点标准差折减 0.15 分
  var MAX_PENALTY = 2.0;      // 折减上限 2 分,避免过度惩罚
  // 综合分:主基准组加权平均(DeepSWE 40%/Vibe Code 20%/llm2014 10%/WebDev 20%)减去一致性折减
  function composite(e) {
    var base = avgNorm(e);
    var penalty = Math.min(variance(e) * VARIANCE_WEIGHT, MAX_PENALTY);
    return base - penalty;
  }

  // 梯队标签(从高到低):用于总览页展示,替代数值综合分
  var TIER_LABELS = ["S+", "S", "A+", "A", "B+", "B", "C+", "C", "D+", "D", "E+", "E"];
  // 金字塔权重:S+ 最少(1),逐层递增(+2),E 最多(23);总和 144
  var TIER_WEIGHTS = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23];

  // 金字塔分档:按综合分严格降序排列后,按权重比例分配各梯队模型数
  // S+ 固定 1 个(冠军),其余按 round(n×w/144) 分配,E 吸收剩余
  function assignTiers(rows) {
    var n = rows.length;
    if (!n) return;
    // matrix() 的容差排序可能在同档内按命中数二次排序,此处按纯综合分重排
    var sorted = rows.slice().sort(function (a, b) {
      return composite(b) - composite(a);
    });
    var totalW = TIER_WEIGHTS.reduce(function (s, w) { return s + w; }, 0); // 144
    var pos = 0;
    for (var i = 0; i < 12; i++) {
      var count;
      if (i === 0) {
        count = Math.min(1, n); // S+ 固定 1 个(如果有模型)
      } else if (i < 11) {
        count = Math.round(n * TIER_WEIGHTS[i] / totalW); // 按权重比例分配
      } else {
        count = n - pos; // E 吸收剩余(含四舍五入误差)
      }
      count = Math.max(0, Math.min(count, n - pos)); // 不超剩余模型数
      for (var j = 0; j < count; j++) {
        sorted[pos + j].tier = TIER_LABELS[i];
      }
      pos += count;
    }
    // 兜底:四舍五入误差导致未分配的模型归入 E
    while (pos < n) { sorted[pos].tier = "E"; pos++; }
  }

  // 雷达:三轴归一化 0-100
  var INDICATORS = [
    { name: "DeepSWE", max: 100 },
    { name: "Vibe Code", max: 100 },
    { name: "llm2014", max: 100 }
  ];
  function radarSeries(ids, llmMonthKey) {
    var map = D.unified(llmMonthKey);
    var series = ids.map(function (id) {
      var e = map[id] || { id: id };
      return {
        name: id,
        value: [
          e.deepswe ? e.deepswe.norm : 0,
          e.vibe ? e.vibe.norm : 0,
          (e.llm && e.llm.norm != null) ? e.llm.norm : 0
        ],
        lineStyle: { color: e.color || undefined },
        itemStyle: { color: e.color || undefined },
        areaStyle: { color: e.color || undefined, opacity: 0.1 }
      };
    });
    return { indicators: INDICATORS, series: series };
  }

  // 指标卡:每个选中模型 -> 三榜原生指标
  function metricCards(ids, llmMonthKey) {
    var map = D.unified(llmMonthKey);
    return ids.map(function (id) {
      var e = map[id] || { id: id };
      return {
        id: id, color: e.color, vendor: e.vendor,
        deepswe: e.deepswe ? (e.deepswe.pass1 + "% · $" + e.deepswe.cost + " · " + e.deepswe.steps + "步") : "—",
        vibe: e.vibe ? (e.vibe.score + "% · $" + e.vibe.cost + " · " + Math.round(e.vibe.latencyS / 60) + "分") : "—",
        llm: e.llm && e.llm.norm != null ? (e.llm.norm.toFixed(2) + " / 100") : "-"
      };
    });
  }

  // 成本对比:DeepSWE cost 与 Vibe cost(分组柱)
  function costSeries(ids, llmMonthKey) {
    var map = D.unified(llmMonthKey);
    var cats = [], ds = [], vc = [];
    ids.forEach(function (id) {
      var e = map[id] || {};
      cats.push(id);
      ds.push(e.deepswe ? e.deepswe.cost : 0);
      vc.push(e.vibe ? e.vibe.cost : 0);
    });
    return { cats: cats, deepswe: ds, vibe: vc };
  }

  // 默认选中:三榜全命中的头部模型(取前 4 个)
  function defaultSelection(llmMonthKey) {
    var rows = matrix(llmMonthKey).filter(function (r) { return r.benchCount === 3; });
    if (!rows.length) rows = matrix(llmMonthKey).slice(0, 4);
    return rows.slice(0, 4).map(function (r) { return r.id; });
  }

  // 可选模型清单(出现于任一基准),按 benchCount 降序
  function options(llmMonthKey) {
    return matrix(llmMonthKey).map(function (r) {
      return { id: r.id, vendor: r.vendor, color: r.color, benchCount: r.benchCount };
    });
  }

  window.CMP = {
    matrix: matrix, avgNorm: avgNorm, composite: composite,
    dualPosition: dualPosition,
    assignTiers: assignTiers,
    variance: variance,
    radarSeries: radarSeries, metricCards: metricCards,
    costSeries: costSeries, defaultSelection: defaultSelection, options: options,
    INDICATORS: INDICATORS,
    SCORE_TOLERANCE: SCORE_TOLERANCE
  };
})();
