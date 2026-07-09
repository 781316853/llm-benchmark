// ECharts 封装:统一清新自然风(浅色)主题、实例管理、窗口自适应,并提供各图表类型的 option 构建器。
// 暴露 window.CH;app/compare 调用 CH.apply(id, option) 渲染。
(function () {
  "use strict";
  if (!window.echarts) { console.warn("ECharts 未加载,图表功能降级"); }

  // 浅色主题常量:与 css/styles.css 的设计 token 保持一致
  var C = {
    text: "#1A2332", textDim: "#4A5568", textTertiary: "#718096",
    border: "#D1DDD6", split: "rgba(26,35,50,.06)", brand: "#2D9D78"
  };
  var registry = {};
  // 全局坐标轴样式(浅色):轴线、刻度文字、分隔线统一浅灰
  var AXIS = { axisLine: { lineStyle: { color: C.border } },
    axisLabel: { color: C.textTertiary }, splitLine: { lineStyle: { color: C.split } } };

  // 获取/创建实例;若 ECharts 缺失则返回 null
  function inst(id) {
    if (!window.echarts) return null;
    var dom = document.getElementById(id);
    if (!dom) return null;
    if (!registry[id]) registry[id] = window.echarts.init(dom, null, { renderer: "canvas" });
    return registry[id];
  }

  // 应用 option(合并基础浅色样式)
  function apply(id, option) {
    var c = inst(id);
    if (!c) return;
    option = option || {};
    option.textStyle = Object.assign({ color: C.text }, option.textStyle || {});
    // tooltip:白底 + 浅边框 + 浅阴影,文字深色
    option.tooltip = Object.assign({ trigger: "item", backgroundColor: "#fff",
      borderColor: C.border, borderWidth: 1, padding: [8, 12],
      extraCssText: "box-shadow: 0 8px 24px rgba(26,35,50,.08); border-radius: 8px;",
      textStyle: { color: C.text } }, option.tooltip || {});
    c.setOption(option, true);
  }

  // ===== 横向柱状(用于 Pass@1 / 准确率 / 综合分排行) =====
  function barOption(cats, values, color, unit, opts) {
    opts = opts || {};
    var lw = opts.left || 140; // 左侧留给类目标签的宽度,标签在其内自动换行
    return {
      grid: { left: lw, right: 48, top: 16, bottom: 24, containLabel: false },
      xAxis: { type: "value", max: opts.max, name: unit || "", nameTextStyle: { color: C.textTertiary },
        axisLine: { lineStyle: { color: C.border } }, axisLabel: { color: C.textTertiary },
        splitLine: { lineStyle: { color: C.split } } },
      // inverse:false + 升序数据 => 最高分位于顶部
      // interval:0 强制显示全部类目;width+overflow=break 使过长名称在指定宽度内自动换行,避免被省略截断
      yAxis: { type: "category", data: cats, inverse: false,
        axisLabel: { color: C.textDim, fontSize: opts.labelSize || 12, interval: 0,
          width: lw - 12, overflow: "break" },
        axisLine: { lineStyle: { color: C.border } }, splitLine: { show: false } },
      tooltip: { trigger: "axis", axisPointer: { type: "shadow" },
        formatter: function (p) { return p[0].name + "<br/><b>" + p[0].value + (unit || "") + "</b>"; } },
      series: [{
        type: "bar", data: values.map(function (v, i) {
          return { value: v, itemStyle: { color: color, borderRadius: [0, 4, 4, 0] } };
        }),
        barWidth: "58%",
        label: { show: true, position: "right", color: C.textDim, formatter: function (p) { return p.value + (unit || ""); } }
      }]
    };
  }

  // ===== 雷达(三轴归一化 0-100) =====
  function radarOption(indicators, series) {
    return {
      tooltip: {},
      legend: { bottom: 0, textStyle: { color: C.textDim }, type: "scroll" },
      radar: {
        indicator: indicators,
        radius: "62%", center: ["50%", "48%"],
        axisName: { color: C.textDim, fontSize: 12 },
        splitLine: { lineStyle: { color: "rgba(26,35,50,.08)" } },
        splitArea: { areaStyle: { color: ["rgba(45,157,120,.02)", "rgba(45,157,120,.05)"] } },
        axisLine: { lineStyle: { color: "rgba(26,35,50,.1)" } }
      },
      series: [{ type: "radar", data: series, symbolSize: 5,
        areaStyle: { opacity: 0.12 }, lineStyle: { width: 2 } }]
    };
  }

  // ===== 散点(成本 vs 成绩;可带气泡大小与颜色) =====
  function scatterOption(points, opts) {
    opts = opts || {};
    return {
      grid: { left: 60, right: 30, top: 30, bottom: 56 },
      tooltip: { formatter: function (p) {
        var d = p.data; return d[3] + "<br/>" + (opts.xName || "X") + ": " + d[0] + "<br/>" + (opts.yName || "Y") + ": " + d[1]; } },
      xAxis: Object.assign({ type: "value", name: opts.xName, nameLocation: "middle", nameGap: 30,
        nameTextStyle: { color: C.textTertiary } }, AXIS),
      yAxis: Object.assign({ type: "value", name: opts.yName, nameTextStyle: { color: C.textTertiary },
        max: opts.yMax, min: opts.yMin }, AXIS),
      series: [{
        type: "scatter", data: points,
        // 气泡模式按 d[2] 缩放;上限调小(26)避免高延迟/多步数时圆点过大互相遮挡
        symbolSize: function (d) { return opts.bubble ? Math.max(6, Math.min(26, d[2] / (opts.bubbleDiv || 6))) : 12; },
        // 统一品牌色(薄荷绿);半透明以区分重叠点
        itemStyle: { color: C.brand, opacity: 0.8 },
        // label 默认显示;数据量大时调用方可传 opts.label=false 关闭以免重叠
        label: { show: opts.label !== false, formatter: function (p) { return p.data[3]; }, position: "top", color: C.textTertiary, fontSize: 10 }
      }]
    };
  }

  // ===== 热力图(项目 × 模型) =====
  // 注:颜色由调用方在每条数据项的 itemStyle.color 中按等级/状态显式指定,
  // 故此处不使用 visualMap(连续映射会覆盖每点颜色,且与离散等级语义不符)。
  function heatmapOption(xLabels, yLabels, data, max) {
    return {
      tooltip: { position: "top",
        formatter: function (p) { return yLabels[p.value[1]] + " · " + xLabels[p.value[0]] + "<br/>" + (p.value[3] || "—"); } },
      grid: { left: 140, right: 30, top: 30, bottom: 56 },
      // interval:0 强制显示全部项目名,rotate 防止多列时重叠
      xAxis: { type: "category", data: xLabels, axisLabel: { color: C.textTertiary, fontSize: 11, interval: 0, rotate: 28 },
        splitArea: { show: true, areaStyle: { color: ["rgba(26,35,50,.015)", "rgba(26,35,50,.03)"] } }, axisLine: { lineStyle: { color: C.border } } },
      yAxis: { type: "category", data: yLabels, inverse: true, axisLabel: { color: C.textDim, fontSize: 11 },
        splitArea: { show: true, areaStyle: { color: ["rgba(26,35,50,.015)", "rgba(26,35,50,.03)"] } }, axisLine: { lineStyle: { color: C.border } } },
      series: [{ type: "heatmap", data: data,
        // 文字加阴影,保证在任意底色(尤其黄/琥珀)上都清晰可读
        label: { show: true, color: "#fff", fontSize: 10,
          textShadowColor: "rgba(0,0,0,.45)", textShadowBlur: 2,
          formatter: function (p) { return p.value[3]; } },
        emphasis: { itemStyle: { shadowBlur: 8, shadowColor: "rgba(26,35,50,.25)" } } }]
    };
  }

  // 窗口自适应
  window.addEventListener("resize", function () {
    Object.keys(registry).forEach(function (id) { registry[id].resize(); });
  });

  window.CH = {
    apply: apply, inst: inst,
    barOption: barOption, radarOption: radarOption,
    scatterOption: scatterOption, heatmapOption: heatmapOption
  };
})();
