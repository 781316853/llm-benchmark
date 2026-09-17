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

  // ===== 散点(成本 vs 成绩;气泡大小编码第三个量,实心/空心区分系列) =====
  // groups: [{ name, points: [[x, y, bubble, label], ...], style: "solid"|"hollow" }]
  // 点数多时下面三件事缺一不可:x 轴对数刻度展开密集区间、hideOverlap 只画放得下的标签、
  // 气泡按面积(而非直径)编码;否则数十个标签必然糊成一团,并压到坐标轴文字上。
  function scatterOption(groups, opts) {
    opts = opts || {};
    var C = palette(), A = axisStyle();
    // 标签描边取面板底色作光晕:标签压在其他气泡或网格线上时仍能读清
    var halo = tok("--panel", "#fff");
    var series = groups.map(function (g) {
      var hollow = g.style === "hollow";
      return {
        name: g.name, type: "scatter", data: g.points,
        // 面积∝气泡值 => 直径取平方根;上下限避免小值看不清、大值吞并邻居
        symbolSize: opts.bubble === false ? 12 : function (d) {
          return Math.max(6, Math.min(24, Math.sqrt(d[2]) * (opts.bubbleScale || 1.6)));
        },
        itemStyle: hollow
          ? { color: "transparent", borderColor: C.textDim, borderWidth: 1.4, opacity: 0.9 }
          : { color: C.brand, opacity: 0.78 },
        // label 只画互不重叠的那些;被挤掉的点靠 tooltip 辨认。
        // 取舍由 ECharts 按标签矩形的位置贪心决定,与数据顺序无关(实测把数据完全倒序结果一致)。
        label: { show: opts.label !== false, position: "top", distance: 5,
          formatter: function (p) { return p.data[3]; },
          color: C.textDim, fontSize: 10.5, textBorderColor: halo, textBorderWidth: 2.5 },
        labelLayout: { hideOverlap: true },
        // 悬停反馈:该点套一圈正文色描边并把标签提亮到正文色。
        // 不用 emphasis.scale —— 实测在这里(符号尺寸由函数决定)不会改变气泡大小。
        // 被 hideOverlap 隐藏的标签无法这样拉回来,靠 tooltip 兜底(名称在第一行)。
        emphasis: { itemStyle: { opacity: 1, borderColor: C.text, borderWidth: 2 },
          label: { show: true, color: C.text } }
      };
    });
    var option = {
      // top 给图例与 Y 轴标题让位,right 给最右侧高成本点的标签留余量
      grid: { left: 64, right: 56, top: groups.length > 1 ? 48 : 34, bottom: 60 },
      tooltip: { formatter: function (p) {
        var d = p.data;
        return "<b>" + d[3] + "</b>" + (p.seriesName ? " · " + p.seriesName : "") +
          "<br/>" + (opts.xName || "X") + ": " + d[0] +
          "<br/>" + (opts.yName || "Y") + ": " + d[1] +
          (d[2] == null ? "" : "<br/>平均步数: " + d[2]); } },
      // 对数轴的 min 取到数据最小值之下,避免最左的点正好压在 Y 轴上(居中标签会溢出到刻度区)
      xAxis: Object.assign({ type: opts.xLog ? "log" : "value", logBase: 10,
        min: opts.xMin, max: opts.xMax, minorTick: { show: true },
        name: opts.xName, nameLocation: "middle", nameGap: 30,
        nameTextStyle: { color: C.textTertiary } }, A),
      // 轴名移到轴顶端外侧:默认位置落在绘图区内,会和数据标签叠在一起
      yAxis: Object.assign({ type: "value", max: opts.yMax, min: opts.yMin,
        name: opts.yName, nameLocation: "end", nameGap: 14,
        nameTextStyle: { color: C.textTertiary, align: "left" } }, A),
      series: series
    };
    if (groups.length > 1) {
      option.legend = { top: 6, right: 8, itemWidth: 10, itemHeight: 10, itemGap: 16,
        textStyle: { color: C.textDim, fontSize: 11 } };
    }
    return option;
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
