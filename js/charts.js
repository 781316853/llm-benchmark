// ECharts 封装:主题取自 css/styles.css 的 :root 变量、实例管理、窗口自适应,并提供各图表类型的 option 构建器。
// 暴露 window.CH;app/compare 调用 CH.apply(id, option) 渲染。
// 配色一律通过 palette() 从 CSS 变量实时读取(而非模块级常量):深色主题与未来的主题切换
// 都不需要改这个文件,只改 :root 里的 --chart-* 即可。
(function () {
  "use strict";
  if (!window.echarts) { console.warn("ECharts 未加载,图表功能降级"); }

  // 读取主题变量;取不到时回落到浅色默认值,保证样式表异常时图表仍可读
  function tok(name, fallback) {
    var v = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
    return v || fallback;
  }
  function palette() {
    return {
      text: tok("--chart-text", "#1A2332"),
      textDim: tok("--chart-dim", "#4A5568"),
      textTertiary: tok("--chart-tertiary", "#718096"),
      border: tok("--chart-border", "#D1DDD6"),
      split: tok("--chart-split", "rgba(26,35,50,.06)"),
      brand: tok("--chart-brand", "#2D9D78")
    };
  }
  // 全局坐标轴样式:轴线、刻度文字、分隔线统一取主题色
  function axisStyle() {
    var C = palette();
    return { axisLine: { lineStyle: { color: C.border } },
      axisLabel: { color: C.textTertiary }, splitLine: { lineStyle: { color: C.split } } };
  }

  var registry = {};

  // 获取/创建实例;若 ECharts 缺失则返回 null
  function inst(id) {
    if (!window.echarts) return null;
    var dom = document.getElementById(id);
    if (!dom) return null;
    if (!registry[id]) registry[id] = window.echarts.init(dom, null, { renderer: "canvas" });
    return registry[id];
  }

  // 应用 option(合并主题样式 + tooltip)
  function apply(id, option) {
    var c = inst(id);
    if (!c) return;
    var C = palette();
    option = option || {};
    option.textStyle = Object.assign({ color: C.text }, option.textStyle || {});
    // tooltip:面板底 + 主题边框 + 阴影,文字随主题
    option.tooltip = Object.assign({ trigger: "item",
      backgroundColor: tok("--chart-tip-bg", "#fff"),
      borderColor: tok("--chart-tip-bd", "#D1DDD6"), borderWidth: 1, padding: [8, 12],
      extraCssText: "box-shadow: " + tok("--chart-tip-shadow", "0 8px 24px rgba(26,35,50,.08)") +
        "; border-radius: " + tok("--chart-tip-radius", "8px") + ";",
      textStyle: { color: tok("--chart-tip-text", "#1A2332") } }, option.tooltip || {});
    c.setOption(option, true);
  }

  // ===== 横向柱状(用于 Pass@1 / 准确率 / 综合分排行) =====
  function barOption(cats, values, color, unit, opts) {
    opts = opts || {};
    var C = palette(), A = axisStyle();
    return {
      // containLabel:true 让 ECharts 自动测量类目标签宽度并调整左侧空间,确保模型名完整显示
      grid: { left: 20, right: 48, top: 16, bottom: 24, containLabel: true },
      xAxis: { type: "value", max: opts.max, name: unit || "", nameTextStyle: { color: C.textTertiary },
        axisLine: { lineStyle: { color: C.border } }, axisLabel: { color: C.textTertiary },
        splitLine: { lineStyle: { color: C.split } } },
      // inverse:false + 升序数据 => 最高分位于顶部
      // interval:0 强制显示全部类目;不设 width/overflow,模型名单行完整显示不换行
      yAxis: { type: "category", data: cats, inverse: false,
        axisLabel: { color: C.textDim, fontSize: opts.labelSize || 12, interval: 0 },
        axisLine: { lineStyle: { color: C.border } }, splitLine: { show: false } },
      tooltip: { trigger: "axis", axisPointer: { type: "shadow" },
        formatter: function (p) { return p[0].name + "<br/><b>" + p[0].value + (unit || "") + "</b>"; } },
      series: [{
        type: "bar", data: values.map(function (v) {
          return { value: v, itemStyle: { color: color || C.brand, borderRadius: [0, 4, 4, 0] } };
        }),
        barWidth: "48%",
        label: { show: true, position: "right", color: A.axisLabel.color,
          formatter: function (p) { return p.value + (unit || ""); } }
      }]
    };
  }

  // ===== 雷达(三轴归一化 0-100) =====
  function radarOption(indicators, series) {
    var C = palette();
    return {
      tooltip: {},
      legend: { bottom: 0, textStyle: { color: C.textDim }, type: "scroll" },
      radar: {
        indicator: indicators,
        radius: "62%", center: ["50%", "48%"],
        axisName: { color: C.textDim, fontSize: 12 },
        splitLine: { lineStyle: { color: tok("--chart-split", "rgba(26,35,50,.08)") } },
        splitArea: { areaStyle: {
          color: [tok("--chart-area-lo", "rgba(45,157,120,.02)"), tok("--chart-area-hi", "rgba(45,157,120,.05)")] } },
        axisLine: { lineStyle: { color: tok("--chart-axis", "rgba(26,35,50,.1)") } }
      },
      series: [{ type: "radar", data: series, symbolSize: 5,
        areaStyle: { opacity: 0.12 }, lineStyle: { width: 2 } }]
    };
  }

  // ===== 散点(成本 vs 成绩;可带气泡大小与颜色) =====
  function scatterOption(points, opts) {
    opts = opts || {};
    var C = palette(), A = axisStyle();
    return {
      grid: { left: 60, right: 30, top: 30, bottom: 56 },
      tooltip: { formatter: function (p) {
        var d = p.data; return d[3] + "<br/>" + (opts.xName || "X") + ": " + d[0] + "<br/>" + (opts.yName || "Y") + ": " + d[1]; } },
      xAxis: Object.assign({ type: "value", name: opts.xName, nameLocation: "middle", nameGap: 30,
        nameTextStyle: { color: C.textTertiary } }, A),
      yAxis: Object.assign({ type: "value", name: opts.yName, nameTextStyle: { color: C.textTertiary },
        max: opts.yMax, min: opts.yMin }, A),
      series: [{
        type: "scatter", data: points,
        // 气泡模式按 d[2] 缩放;上限调小(26)避免高延迟/多步数时圆点过大互相遮挡
        symbolSize: function (d) { return opts.bubble ? Math.max(6, Math.min(26, d[2] / (opts.bubbleDiv || 6))) : 12; },
        // 统一品牌色;半透明以区分重叠点
        itemStyle: { color: C.brand, opacity: 0.8 },
        // label 默认显示;数据量大时调用方可传 opts.label=false 关闭以免重叠
        label: { show: opts.label !== false, formatter: function (p) { return p.data[3]; },
          position: "top", color: C.textTertiary, fontSize: 10 }
      }]
    };
  }

  // 窗口自适应;容器不可见(所在页 display:none,offsetParent 为 null)的图表跳过:
  // 隐藏图表保留上次可见时的正确尺寸,待其所在页再次显示时由 showTab 派发的 resize 兜底适配;
  // 这样每次切页广播的 resize 只处理当前可见页的图表,不会逐个 resize 隐藏页大图拖慢切页。
  window.addEventListener("resize", function () {
    Object.keys(registry).forEach(function (id) {
      var dom = document.getElementById(id);
      if (!dom || dom.offsetParent === null) return;
      registry[id].resize();
    });
  });

  window.CH = {
    apply: apply, inst: inst,
    barOption: barOption, radarOption: radarOption,
    scatterOption: scatterOption,
    // 供 app/compare 取当前主题的品牌色,避免把色值写死在调用方
    brand: function () { return palette().brand; }
  };
})();
