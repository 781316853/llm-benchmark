// 跨基准对比逻辑:基于 data.js 的统一视图,产出矩阵、雷达、指标卡、成本对比所需数据。
// 暴露 window.CMP;app.js 调用后渲染。
(function () {
  "use strict";

  var D = window.D;

  // 交叉矩阵:按"出现基准数"降序,再按三榜可用分综合排序
  function matrix(llmMonthKey) {
    var map = D.unified(llmMonthKey);
    var rows = Object.keys(map).map(function (k) { return map[k]; });
    rows.sort(function (a, b) {
      if (b.benchCount !== a.benchCount) return b.benchCount - a.benchCount;
      return avgNorm(b) - avgNorm(a);
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
    matrix: matrix, avgNorm: avgNorm,
    radarSeries: radarSeries, metricCards: metricCards,
    costSeries: costSeries, defaultSelection: defaultSelection, options: options,
    INDICATORS: INDICATORS
  };
})();
