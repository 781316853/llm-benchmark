// 跨基准对比逻辑:基于 data.js 的统一视图,产出矩阵、雷达、指标卡、成本对比所需数据。
// 暴露 window.CMP;app.js 调用后渲染。
(function () {
  "use strict";

  var D = window.D;

  // 交叉矩阵:按"综合分"降序,同分时按命中数降序兜底
  function matrix(llmMonthKey) {
    var map = D.unified(llmMonthKey);
    var rows = Object.keys(map).map(function (k) { return map[k]; });
    rows.sort(function (a, b) {
      var ca = composite(a), cb = composite(b);
      if (ca !== cb) return cb - ca;      // 综合分降序(主键)
      return b.benchCount - a.benchCount; // 同分时命中榜数降序兜底,保证排序稳定
    });
    return rows;
  }
  function avgNorm(e) {
    var vs = [];
    if (e.deepswe) vs.push(e.deepswe.norm);
    if (e.vibe) vs.push(e.vibe.norm);
    if (e.llm && e.llm.norm != null) vs.push(e.llm.norm);
    return vs.length ? vs.reduce(function (a, b) { return a + b; }, 0) / vs.length : 0;
  }
  // 新两基准(SWE-bench Pro + Terminal-Bench)的归一化均值;无数据返回 null(区别于 avgNorm 的 0)
  function avgNewNorm(e) {
    var vs = [];
    if (e.swe) vs.push(e.swe.norm);
    if (e.tbench) vs.push(e.tbench.norm);
    return vs.length ? vs.reduce(function (a, b) { return a + b; }, 0) / vs.length : null;
  }
  // 综合分:旧三基准占 80%、新两基准封顶占 20%
  // 仅当 SWE-Pro 与 Terminal-Bench 都有数据时才参与 20% 计算;否则权重全回流到旧三基准(不惩罚缺失)
  function composite(e) {
    var oldAvg = avgNorm(e);
    // 两新榜都有数据才计算新组均值;否则视为缺失,权重全部归于旧三基准
    var newAvg = (e.swe && e.tbench) ? avgNewNorm(e) : null;
    return (newAvg != null) ? (oldAvg * 0.8 + newAvg * 0.2) : oldAvg;
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
        llm: e.llm && e.llm.score != null ? (D.to10(e.llm.score).toFixed(2) + " / 10") : "—"
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
    radarSeries: radarSeries, metricCards: metricCards,
    costSeries: costSeries, defaultSelection: defaultSelection, options: options,
    INDICATORS: INDICATORS
  };
})();
