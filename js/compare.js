// 跨基准对比逻辑:基于 data.js 的统一视图,产出矩阵、雷达、指标卡、成本对比所需数据。
// 暴露 window.CMP;app.js 调用后渲染。
(function () {
  "use strict";

  var D = window.D;

  // 综合分容差:差距 < 此值的模型视为"同档",同档内按次级指标排序
  var SCORE_TOLERANCE = 1.5;
  // 交叉矩阵:按"综合分容差分组"降序,同档内依次按 综合分微差→命中数→一致性 排序
  function matrix(llmMonthKey) {
    var map = D.unified(llmMonthKey);
    var rows = Object.keys(map).map(function (k) { return map[k]; });
    rows.sort(function (a, b) {
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
    return rows;
  }
  function avgNorm(e) {
    var vs = [];
    if (e.deepswe) vs.push(e.deepswe.norm);
    if (e.vibe) vs.push(e.vibe.norm);
    if (e.llm && e.llm.norm != null) vs.push(e.llm.norm);
    if (!vs.length) return 0;
    // max 选拔:取最高单项(多参加基准只可能刷高 max,不会被弱项拉低)
    return Math.max.apply(null, vs);
  }
  // 新基准(AA Coding Agent Index)的归一化值;无数据返回 null(区别于 avgNorm 的 0)
  function avgNewNorm(e) {
    return (e.aaci && e.aaci.norm != null) ? e.aaci.norm : null;
  }
  // 跨榜一致性(标准差):各基准 norm 值的离散程度
  // 数据不足 2 个基准时返回 0,避免单榜模型被误判为"最均衡"
  function variance(e) {
    var vs = [];
    if (e.deepswe) vs.push(e.deepswe.norm);
    if (e.vibe) vs.push(e.vibe.norm);
    if (e.llm && e.llm.norm != null) vs.push(e.llm.norm);
    if (e.aaci && e.aaci.norm != null) vs.push(e.aaci.norm);
    if (vs.length < 2) return 0;
    var mean = vs.reduce(function (a, b) { return a + b; }, 0) / vs.length;
    var sumSq = vs.reduce(function (s, v) { var d = v - mean; return s + d * d; }, 0);
    return Math.sqrt(sumSq / vs.length);
  }
  // 一致性折减参数:标准差越大折减越多,让各榜均衡的模型获得微优势
  var VARIANCE_WEIGHT = 0.15; // 每点标准差折减 0.15 分
  var MAX_PENALTY = 2.0;      // 折减上限 2 分,避免过度惩罚
  // 综合分:旧三基准 max(最高单项)占 90%、新基准(AA Coding Agent Index)占 10%,再减去一致性折减
  // 新基准有数据即参与 10% 计算,无数据时权重回流至旧三基准
  function composite(e) {
    var oldAvg = avgNorm(e);
    var newAvg = avgNewNorm(e);
    var base = (newAvg != null) ? (oldAvg * 0.9 + newAvg * 0.1) : oldAvg;
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
        llm: e.llm && e.llm.score != null ? (D.to100(e.llm.score).toFixed(1) + " / 100") : "-"
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
    matrix: matrix, avgNorm: avgNorm, avgNewNorm: avgNewNorm, composite: composite,
    assignTiers: assignTiers,
    variance: variance,
    radarSeries: radarSeries, metricCards: metricCards,
    costSeries: costSeries, defaultSelection: defaultSelection, options: options,
    INDICATORS: INDICATORS,
    SCORE_TOLERANCE: SCORE_TOLERANCE
  };
})();
