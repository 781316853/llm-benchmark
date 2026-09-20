// 跨基准对比逻辑:基于 data.js 的统一视图,产出矩阵、雷达、指标卡、成本对比所需数据。
// 暴露 window.CMP;app.js 调用后渲染。
(function () {
  "use strict";

  var D = window.D;

  // 综合分容差(同档跨度上限):同一「档」内任意两个模型的综合分差距都 < 此值,档内最大跨度被封顶;
  // 档内不再按综合分微差排,改为按次级指标(命中数 → 一致性)排。
  // 不用「成对比较器」实现:成对比较器非传递,会把 76.83 与 79.32 这类差距 2.5 分的模型
  // 经相邻链(1.2 + 0.15 + 0.04 + 1.10)串成同一档,档宽随数据分布不可控。
  var SCORE_TOLERANCE = 1.5;
  // 各榜成绩取值(与矩阵列一致,值越大越好);供单榜行稳定排序使用。
  // Terminal-Bench 用跨版本校准后的 norm(0-100):原始分跨版本不可比(2.1 自报分 88 ≈ 4.0 官方 26),
  // 直接数原始分高低会把 2.1 代表的参考行整体抬到官方实测 4.0 模型之上
  // 「AI 能力」作为单一基准参与:取前端/后端在场方向分的均值
  // Terminal-Bench / ModelDial 计入综合分与命中;NL2Repo 与其余权威基准(仅展示)不参与任何定位
  var BOARD_VALS = {
    deepswe: function (e) { return e.deepswe ? e.deepswe.pass1 : null; },
    llm:     function (e) { return (e.llm && e.llm.norm != null) ? e.llm.norm : null; },
    webdev:  function (e) { return (e.webdev && e.webdev.score != null) ? e.webdev.score : null; },
    tbench:  function (e) { return e.tbench ? e.tbench.norm : null; },
    modeldial: function (e) { return e.modeldial ? e.modeldial.score : null; },
    aicap:   function (e) { return aicapNorm(e); }
  };
  // 参考行(命中 3 榜)的区间位置:按其「参考综合分」在排名行综合分序列中的应处名次。
  // 参考综合分与排名行同口径(即 composite:一榜豁免 − 一致性折减;参考行最多 4 组,
  // 同样享受一榜豁免,落位口径偏乐观),仅用于落入名次间隔,展示上仍不显示综合分、不计排名。
  // 结果为 n 表示应落入第 n 与第 n+1 个排名行之间的间隔(0 = 首名之前)。
  // 原因:旧的「逐榜数高于它的排名行、以最弱榜为准」口径会把单榜偏弱的整体强参考行过度下压
  // (如 Claude Fable 5.1 的 DeepSWE 中游抹平了 WebDev 第 2 / TB 校准分第 2,被压到第 10 间隔),
  // 与各榜加权后的整体水平不符;按加权综合分比对与排名行的排序依据一致,缺失榜由权重回流自然处理。
  function refPosition(e, ranked) {
    var c = composite(e), above = 0;
    ranked.forEach(function (r) { if (composite(r) > c) above++; });
    return above;
  }
  // 交叉矩阵排序(默认仅含命中≥2榜的模型;minHits=1 时把仅命中一榜的模型也带上;总览页传 3 仅收命中≥3榜):
  // ① 排名行(命中≥4榜)先按综合分降序取基准序,再按「同档跨度 < 容差」划档(每行与档内首名比,
  //    故档内跨度恒 < 1.5),档内依次按 命中数 → 一致性 → 综合分 排序,最后依次编号 _posKey = 0,1,2…;
  //    注:命中分母 2026-09-19 起为 6(NL2Repo 移出、ModelDial 加入),门槛仍取 4,保持与历史排名的可比性;
  // ② 参考行(命中=3)不计算综合分、不参与排名,按「参考综合分」在排名行综合分序列的应处名次落入
  //    相应名次间隔,_posKey = refPosition − 0.5,恰好落在两个排名行的间隔中(仅显示数据,序号计「—」);
  //    同一间隔内多个参考行按参考综合分降序先后排列;
  // ③ 单榜行(命中=1)不计算综合分、无可比对区间,统一排在全部 ①② 之后(_posKey > ranked.length),
  //    既不占用前 30 名额,也不扰乱跨榜模型的名次间隔;
  // ④ 合并后按 _posKey 升序
  function matrix(llmMonthKey, minHits) {
    var floor = minHits == null ? 2 : minHits;
    var map = D.unified(llmMonthKey);
    var all = Object.keys(map).map(function (k) { return map[k]; })
      .filter(function (e) { return e.benchCount >= floor; });
    var ranked = all.filter(function (e) { return e.benchCount >= 4; });
    var inserted = all.filter(function (e) { return e.benchCount >= 2 && e.benchCount <= 3; }); // 命中 2-3 榜:不参与名次、不计算综合分
    var single = all.filter(function (e) { return e.benchCount === 1; });   // 单榜:仅「显示全部」时出现
    // 基准序:综合分降序(同分依次 命中数降序 → 一致性升序),作为划档输入
    ranked.sort(function (a, b) {
      var ca = composite(a), cb = composite(b);
      if (ca !== cb) return cb - ca;
      if (a.benchCount !== b.benchCount) return b.benchCount - a.benchCount;
      return variance(a) - variance(b);
    });
    // 划档:与档内首名(本档最高分)差距 ≥ 容差即另起一档 —— 档内跨度因此恒 < SCORE_TOLERANCE
    var tiers = [], curTier = null;
    ranked.forEach(function (e) {
      var c = composite(e);
      if (!curTier || (curTier.anchor - c) >= SCORE_TOLERANCE) { curTier = { anchor: c, items: [] }; tiers.push(curTier); }
      curTier.items.push(e);
    });
    // 档内重排:命中数降序(数据更全面者优先)→ 一致性升序(各榜更均衡者优先)→ 综合分降序(兜底确定性)
    var ordered = [];
    tiers.forEach(function (t) {
      t.items.sort(function (a, b) {
        if (a.benchCount !== b.benchCount) return b.benchCount - a.benchCount;
        var d = variance(a) - variance(b);
        if (d) return d;
        return composite(b) - composite(a);
      });
      ordered = ordered.concat(t.items);
    });
    ordered.forEach(function (e, i) { e._posKey = i; });
    // 参考行按参考综合分降序预排,再落入各自间隔:同间隔内的先后即综合分先后,
    // i*1e-6 仅作同间隔内次序微移(间隔半宽 0.5,微移不会跨间隔)
    inserted.sort(function (a, b) { return composite(b) - composite(a); });
    inserted.forEach(function (e, i) { e._posKey = refPosition(e, ranked) - 0.5 + i * 1e-6; });
    // 单榜行统一排在参考行之后:按在场榜单成绩降序(不同榜量纲不可比,仅作为稳定次序)
    single.forEach(function (e) { e._posKey = ranked.length + 0.5; });
    single.sort(function (a, b) { return bestBoardVal(b) - bestBoardVal(a); });
    single.forEach(function (e, i) { e._posKey = ranked.length + 0.5 + i * 1e-6; });
    var rows = ordered.concat(inserted, single);
    rows.sort(function (a, b) { return a._posKey - b._posKey; });
    return rows;
  }
  // 单榜行的"最好成绩":取该模型在场所命中榜单上的原始分(用于排序;量纲不同,仅作稳定次序)
  function bestBoardVal(e) {
    var best = -Infinity;
    Object.keys(BOARD_VALS).forEach(function (k) {
      var v = BOARD_VALS[k](e);
      if (v != null && v > best) best = v;
    });
    return best === -Infinity ? 0 : best;
  }
  // 计分组权重(2026-09-20 口径):权威第三方榜加权、个人自测口径减权
  //  DeepSWE 20%(权威第三方编码榜,113 任务/91 仓库,权重最高)
  //  Code Arena·WebDev 18%(权威第三方,社区匿名盲测投票)
  //  Terminal-Bench 14%(权威第三方终端 Agent 榜,4.0/3.0/2.1 多版本合并为一组)
  //  ModelDial 12%(第三方独立实测综合能力榜,后端 40%/前端 30%/知识 30% 合成分)
  //  llm2014 10%(个人私有题库、等级折算制,代表性弱于第三方基准)
  //  AI 能力 10%(个人专项自测口径;前端/后端方向分合并为**单个**计分组,取在场方向均值)
  // 历史沿革:2026-09 移除 Vibe Code Bench(其 14% 按比例回流至其余基准);
  //  ProgramBench 已移除(官方 harness 口径 Fully Resolved 整体 0-7 分,区分度极低);
  //  NL2Repo-Bench(原权重 9%)2026-09-19 移出综合分与命中数,改为「权威基准测试」页仅展示;
  //  2026-09-20 起:①取消完整度奖励(原 7 组全勤 +3 分、6 组 +1.5 分),因「多一榜」已由
  //  「一榜豁免 + 缺失权重回流」体现,再按组数发奖励属对数据完整度的重复计罚;
  //  ②AI 能力由「前端/后端两组」合并为单组 —— 原口径一块榜按两组计(合计 24%)重于旗舰榜
  //  DeepSWE(18%),且与命中数口径不一致(data.js 的 benchCount 早把两方向合并计一次)。
  //  avgNorm 按在场权重归一化(豁免最弱一组后),缺失基准的权重自动回流,故上列权重无需凑满 100%
  var WEIGHTS = { deepswe: 0.20, webdev: 0.18, tbench: 0.14, modeldial: 0.12, llm: 0.10, aicap: 0.10 };
  // AI 能力方向分合并:取前端/后端在场方向分的均值(仅测一侧则取该侧);
  // 与 BOARD_VALS.aicap 及 data.js 的 benchCount「合并计一次」口径一致
  function aicapNorm(e) {
    var vals = [];
    if (e.aicapFe && e.aicapFe.norm != null) vals.push(e.aicapFe.norm);
    if (e.aicapBe && e.aicapBe.norm != null) vals.push(e.aicapBe.norm);
    return vals.length ? vals.reduce(function (a, b) { return a + b; }, 0) / vals.length : null;
  }
  // 在场基准组列表(6 个计分组,键与 WEIGHTS 一致;norm 为各组 0-100 归一化分)
  function presentGroups(e) {
    var gs = [];
    if (e.deepswe) gs.push({ key: "deepswe", w: WEIGHTS.deepswe, v: e.deepswe.norm });
    if (e.llm && e.llm.norm != null) gs.push({ key: "llm", w: WEIGHTS.llm, v: e.llm.norm });
    if (e.webdev && e.webdev.norm != null) gs.push({ key: "webdev", w: WEIGHTS.webdev, v: e.webdev.norm });
    if (e.tbench && e.tbench.norm != null) gs.push({ key: "tbench", w: WEIGHTS.tbench, v: e.tbench.norm });
    var ac = aicapNorm(e);
    if (ac != null) gs.push({ key: "aicap", w: WEIGHTS.aicap, v: ac });
    if (e.modeldial && e.modeldial.norm != null) gs.push({ key: "modeldial", w: WEIGHTS.modeldial, v: e.modeldial.norm });
    return gs;
  }
  // 一榜豁免:在场组按 norm 升序后剔除最弱一组(单组在场则不豁免),缓解"单榜失常拖垮整体"
  function exemptedGroups(e) {
    var gs = presentGroups(e).slice().sort(function (a, b) { return a.v - b.v; });
    if (gs.length > 1) gs.shift();
    return gs;
  }
  // 豁免后的加权平均:缺失基准的权重仍自动回流至在场组(豁免组的权重一并剔除)
  function avgNorm(e) {
    var gs = exemptedGroups(e);
    var sum = 0, wsum = 0;
    gs.forEach(function (g) { sum += g.v * g.w; wsum += g.w; });
    return wsum > 0 ? sum / wsum : 0;
  }
  // 跨榜一致性(标准差):对豁免后剩余各组的 norm 计算离散程度
  // 数据不足 2 组时返回 0,避免单组模型被误判为"最均衡"
  function variance(e) {
    var vs = exemptedGroups(e).map(function (g) { return g.v; });
    if (vs.length < 2) return 0;
    var mean = vs.reduce(function (a, b) { return a + b; }, 0) / vs.length;
    var sumSq = vs.reduce(function (s, v) { var d = v - mean; return s + d * d; }, 0);
    return Math.sqrt(sumSq / vs.length);
  }
  // 一致性折减参数:标准差越大折减越多,让各榜均衡的模型获得微优势
  var VARIANCE_WEIGHT = 0.15; // 每点标准差折减 0.15 分
  var MAX_PENALTY = 1.0;      // 折减上限 1 分(2026-09-14 由 2 分下调:单榜失常已由豁免位兜底,不再双重惩罚)
  // 综合分 = 豁免最弱一组后的加权均值 − 一致性折减(封顶 100,保持百分制量纲)
  // 2026-09-20 起取消完整度奖励:在场组数不再额外加减分,「多一榜」只通过
  // 「一榜豁免 + 缺失权重回流」体现(缺一榜的模型不再被扣两次)
  function composite(e) {
    var base = avgNorm(e);
    var penalty = Math.min(variance(e) * VARIANCE_WEIGHT, MAX_PENALTY);
    return Math.min(100, base - penalty);
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
    { name: "WebDev", max: 100 },
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
          (e.webdev && e.webdev.norm != null) ? e.webdev.norm : 0,
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
        webdev: (e.webdev && e.webdev.score != null) ? (e.webdev.score + " Elo · " + e.webdev.votes + " 票") : "—",
        llm: e.llm && e.llm.norm != null ? (e.llm.norm.toFixed(2) + " / 100") : "-"
      };
    });
  }

  // 成本对比:DeepSWE 单次任务平均成本(单序列;WebDev 为 Elo 投票榜,无成本口径)
  function costSeries(ids, llmMonthKey) {
    var map = D.unified(llmMonthKey);
    var cats = [], ds = [];
    ids.forEach(function (id) {
      var e = map[id] || {};
      cats.push(id);
      ds.push(e.deepswe ? e.deepswe.cost : 0);
    });
    return { cats: cats, deepswe: ds };
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
    refPosition: refPosition,
    assignTiers: assignTiers,
    variance: variance,
    radarSeries: radarSeries, metricCards: metricCards,
    costSeries: costSeries, defaultSelection: defaultSelection, options: options,
    INDICATORS: INDICATORS,
    SCORE_TOLERANCE: SCORE_TOLERANCE
  };
})();
