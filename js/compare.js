// 跨基准对比逻辑:基于 data.js 的统一视图,产出矩阵、雷达、指标卡、成本对比所需数据。
// 暴露 window.CMP;app.js 调用后渲染。
(function () {
  "use strict";

  var D = window.D;

  // ===== 综合分口径(2026-09-22 起:各榜榜内稳健标准分加权)=====
  // 旧口径直接加权平均各榜归一分(norm),有两个结构性缺陷:
  //  ① 各榜 norm 量纲不可比 —— 榜内标准差 DeepSWE 约 32 分、ModelDial 仅约 11 分,
  //     同样「领先 5 分」在两个榜上完全不是一回事;
  //  ② 缺测一榜等于白占一个高分位 —— 缺席不进加权(权重回流),于是「只被测到强项」的模型
  //     加权均值反而更高(2026-09 快照:Kimi K3 在四个共同榜全部高于 Qwen3.8-Flash,
  //     却因独占的 llm2014 只有 54 绝对分而被压到其后)。
  // 新口径:每榜先在「全池在场该榜的模型」内做稳健标准化(中位数 + 1.4826×MAD),
  // 再按权重对在场榜归一。缺榜即等价于「按该模型自身水平填补」,不再因未测而占便宜。
  var Z_DISPLAY_SCALE = 15;   // 1 个加权标准分 = 15 显示分;50 分 = 全池中位
  var Z_CLIP = 3;             // 单榜相对分截断 ±3 个稳健标准差,防长尾噪声主导加权均值
  // 容差档宽(同档跨度上限)= 0.10 个加权标准分,即「两模型相差不到 1/10 个榜内标准差」视为同档。
  // 写成 Z_DISPLAY_SCALE × TOL_Z 而非裸数字,是为了让档宽语义不随显示缩放漂移。
  // 划档仍用「与档内首名比」而非成对比较器:成对比较器非传递,会把相邻小差距串成失控宽档。
  var TOL_Z = 0.10;
  var SCORE_TOLERANCE = Z_DISPLAY_SCALE * TOL_Z; // = 1.5 显示分
  var N_MIN = 12;             // 榜内在场模型数低于此值则本榜不计分(统计量抽样噪声不可控)
  var H2H_TAU = 0.8;          // 共榜胜负 logistic 温度(以标准分 z 为单位)
  // 6 个计分组的键(与 WEIGHTS、总览矩阵列一致)
  var GROUPS = ["deepswe", "webdev", "tbench", "modeldial", "llm", "aicap"];

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
  // 参考综合分与排名行完全同口径(各榜榜内稳健标准分按在场权重归一,无豁免、无折减),
  // 仅用于落入名次间隔,展示上仍不显示综合分、不计排名。
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
  //    故档内跨度恒 < 1.5),档内依次按 命中数 → 共榜净胜 → 综合分 → id 排序,最后编号 _posKey = 0,1,2…;
  //    注:命中分母 2026-09-19 起为 6(NL2Repo 移出、ModelDial 加入),门槛仍取 4,保持与历史排名的可比性;
  // ② 参考行(命中=3)不计算综合分、不参与排名,按「参考综合分」在排名行综合分序列的应处名次落入
  //    相应名次间隔,_posKey = refPosition − 0.5,恰好落在两个排名行的间隔中(仅显示数据,序号计「—」);
  //    同一间隔内多个参考行按参考综合分降序先后排列;
  // ③ 单榜行(命中=1)不计算综合分、无可比对区间,统一排在全部 ①② 之后(_posKey > ranked.length),
  //    既不占用前 30 名额,也不扰乱跨榜模型的名次间隔;
  // ④ 合并后按 _posKey 升序
  function matrix(llmMonthKey, minHits) {
    var floor = minHits == null ? 2 : minHits;
    var map = scoreTable(llmMonthKey).map;
    var all = Object.keys(map).map(function (k) { return map[k]; })
      .filter(function (e) { return e.benchCount >= floor; });
    var ranked = all.filter(function (e) { return e.benchCount >= 4; });
    var inserted = all.filter(function (e) { return e.benchCount >= 2 && e.benchCount <= 3; }); // 命中 2-3 榜:不参与名次、不计算综合分
    var single = all.filter(function (e) { return e.benchCount === 1; });   // 单榜:仅「显示全部」时出现
    // 基准序:综合分降序(同分依次 命中数降序 → id 升序兜底确定性),作为划档输入
    ranked.sort(function (a, b) {
      var ca = composite(a), cb = composite(b);
      if (ca !== cb) return cb - ca;
      if (a.benchCount !== b.benchCount) return b.benchCount - a.benchCount;
      return a.id < b.id ? -1 : a.id > b.id ? 1 : 0;
    });
    // 划档:与档内首名(本档最高分)差距 ≥ 容差即另起一档 —— 档内跨度因此恒 < SCORE_TOLERANCE
    var tiers = [], curTier = null;
    ranked.forEach(function (e) {
      var c = composite(e);
      if (!curTier || (curTier.anchor - c) >= SCORE_TOLERANCE) { curTier = { anchor: c, items: [] }; tiers.push(curTier); }
      curTier.items.push(e);
    });
    // 档内重排:先按「共榜支配关系」做拓扑分层(在双方共同在场的榜上**全部更高**者,必须排在前面),
    // 同层内再依次按 命中数降序 → 共榜净胜降序 → 综合分降序 → id 升序。
    // 为什么要显式拓扑分层,而不是只把净胜当排序键:净胜是对档内所有对手的平均,
    // A 全面压住 B 却可能因对其它对手赢得少而平均更低 —— 那样就还是会出现"全赢者排后面"。
    // 成对胜负本身非传递(实测存在 A>B>C>A 的环),不能直接交给 sort;分层法保证无环时无解可依,
    // 真出现环时(不同共榜子集才可能)整层退回优先级键排序,仍是全序、结果可复现。
    // 注:该保证的边界是「同一容差档内」—— 跨档(相差 >= 0.1 个加权标准分)仍以加权综合分为主序,
    //     那里"哪个榜被测过"的差异会真实进入分数,不再由成对胜负覆盖。
    var ordered = [];
    tiers.forEach(function (t) {
      t.items.forEach(function (e) { e._pw = pairBalance(e, t.items); });
      ordered = ordered.concat(tierOrder(t.items));
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
  // 计分组权重(2026-09-21 口径):第三方实测组主导、基准组减权
  //  DeepSWE 16%(权威第三方编码榜,113 任务/91 仓库,基准组旗舰)
  //  Code Arena·WebDev 22%(权威第三方,社区匿名盲测投票;实测组权重最高)
  //  Terminal-Bench 11%(权威第三方终端 Agent 榜,4.0/3.0/2.1 多版本合并为一组)
  //  ModelDial 16%(第三方独立实测综合能力榜,后端 40%/前端 30%/知识 30% 合成分)
  //  llm2014 12%(个人私有题库、等级折算制,代表性弱于第三方基准)
  //  AI 能力 12%(个人专项自测口径;前端/后端方向分合并为**单个**计分组,取在场方向均值)
  // 历史沿革:2026-09 移除 Vibe Code Bench(其 14% 按比例回流至其余基准);
  //  ProgramBench(原权重 8%)2026-09 移出综合分与命中数(官方 harness 口径 Fully Resolved 整体
  //  0-7 分,区分度极低);2026-09-22 恢复收录于「权威基准测试」页,维持仅展示、不再计分;
  //  NL2Repo-Bench(原权重 9%)2026-09-19 移出综合分与命中数,改为「权威基准测试」页仅展示;
  //  2026-09-20 起:①取消完整度奖励(原 7 组全勤 +3 分、6 组 +1.5 分),因「多一榜」已由
  //  「一榜豁免 + 缺失权重回流」体现,再按组数发奖励属对数据完整度的重复计罚;
  //  ②AI 能力由「前端/后端两组」合并为单组 —— 原口径一块榜按两组计(合计 24%)重于旗舰榜
  //  DeepSWE(18%),且与命中数口径不一致(data.js 的 benchCount 早把两方向合并计一次)。
  //  2026-09-21 起:①「实测」组更名为「第三方实测」并整体加权 —— WebDev 18→22%、ModelDial 12→16%、
  //  llm2014 10→12%、AI 能力 10→12%;②「榜单基准」组同步减权 —— DeepSWE 20→16%、Terminal-Bench 14→11%。
  //  实测组合计 0.50→0.62、基准组 0.34→0.27,实测组占综合分由 59.5% 升至 69.7%,理由:第三方实测与
  //  社区盲测口径更贴近模型真实使用表现,官方基准榜的 agent×model 解决率与题库通过率区分度趋于饱和。
  //  2026-09-22 起:综合分改为「各榜榜内稳健标准分(z)按在场权重归一」(见文件头口径说明),
  //  同时取消一榜豁免与一致性折减;上列权重百分比未变。
  //  加权按在场权重归一化,缺失基准的权重自动回流(等价于「缺失榜按该模型自身水平填补」),
  //  故上列权重无需凑满 100%(6 组之和 0.89)。
  var WEIGHTS = { deepswe: 0.16, webdev: 0.22, tbench: 0.11, modeldial: 0.16, llm: 0.12, aicap: 0.12 };
  // AI 能力方向分合并:取前端/后端在场方向分的均值(仅测一侧则取该侧);
  // 与 BOARD_VALS.aicap 及 data.js 的 benchCount「合并计一次」口径一致
  function aicapNorm(e) {
    var vals = [];
    if (e.aicapFe && e.aicapFe.norm != null) vals.push(e.aicapFe.norm);
    if (e.aicapBe && e.aicapBe.norm != null) vals.push(e.aicapBe.norm);
    return vals.length ? vals.reduce(function (a, b) { return a + b; }, 0) / vals.length : null;
  }
  // 各榜原生分(值越大越好)。综合分不用 data.js 的 norm —— 那是各榜快照内的 min-max 相对位置,
  // 榜与榜之间量纲依旧不可比;这里直接取各榜原生量纲,由 boardStats() 在榜内做稳健定标。
  //   deepswe   Pass@1 %       webdev  Elo 原值      tbench  4.0 等效解决率 %(跨版本按共有模型折算)
  //   modeldial 源站 40/30/30 综合分    llm  等级映射综合分    aicap  前/后端方向分均值
  var BOARD_RAW = {
    deepswe: function (e) { return e.deepswe ? e.deepswe.pass1 : null; },
    webdev: function (e) { return e.webdev ? e.webdev.score : null; },
    tbench: function (e) { return e.tbench ? e.tbench.equiv : null; },
    modeldial: function (e) { return e.modeldial ? e.modeldial.overall : null; },
    llm: function (e) { return (e.llm && e.llm.norm != null) ? e.llm.norm : null; },
    aicap: function (e) { return aicapNorm(e); }
  };
  // 中位数(调用方传入已升序数组;偶数长度取两中均值 —— 朴素取下中位数会让统计量随样本 ±1 跳档)
  function median(sorted) {
    var n = sorted.length, h = n >> 1;
    return n % 2 ? sorted[h] : (sorted[h - 1] + sorted[h]) / 2;
  }
  function numSort(a, b) { return a - b; }
  // 榜内稳健统计:中心 = 中位数,尺度 = 1.4826×MAD(正态下等价于标准差,但不被长尾拉偏)。
  // 尺度退化时分层回退 MAD → IQR/1.349 → 总体标准差;仍为 0 或在场样本 < N_MIN 则该榜本轮不计分
  // (stats[g] = null,不参与任何模型的加权 —— 与其用一个失真的尺度把整榜噪声放大,不如暂不采信)。
  // ⚠️ 统计池必须是 unified() 的**全量条目**(含仅命中 1 榜的模型):
  // 只数参与排名的模型会把 MADσ 缩小约 2.7 倍、把 ±3 截断率从 2% 抬到 23%,头部模型的相对分被压平。
  function boardStats(entries) {
    var st = {};
    GROUPS.forEach(function (g) {
      var xs = [];
      entries.forEach(function (e) {
        var x = BOARD_RAW[g](e);
        if (x != null && isFinite(x)) xs.push(x);
      });
      if (xs.length < N_MIN) { st[g] = null; return; }
      xs.sort(numSort);
      var med = median(xs);
      var devs = xs.map(function (x) { return Math.abs(x - med); }).sort(numSort);
      var scale = median(devs) * 1.4826, src = "mad";
      if (!(scale > 0)) {
        var pick = function (p) { return xs[Math.max(0, Math.min(xs.length - 1, Math.round((xs.length - 1) * p)))]; };
        scale = (pick(0.75) - pick(0.25)) / 1.349; src = "iqr";
      }
      if (!(scale > 0)) {
        var mean = xs.reduce(function (a, b) { return a + b; }, 0) / xs.length;
        scale = Math.sqrt(xs.reduce(function (s, x) { var d = x - mean; return s + d * d; }, 0) / xs.length);
        src = "sd";
      }
      st[g] = (scale > 0) ? { n: xs.length, center: med, scale: scale, src: src } : null;
    });
    return st;
  }
  // 按 llm 月份缓存整张评分表:榜内统计与每模型的显示分只算一次。
  // matrix()/refPosition()/assignTiers() 的比较器会以 O(n²) 频次调用 composite(),
  // 若在 composite 内现算 unified() + 榜内排序统计,单次渲染就要重建几十次全池。
  var scoreCache = {};
  function scoreTable(llmMonthKey) {
    var ck = String(llmMonthKey == null ? "*" : llmMonthKey);
    if (scoreCache[ck]) return scoreCache[ck];
    var map = D.unified(llmMonthKey);
    var entries = Object.keys(map).map(function (k) { return map[k]; });
    var stats = boardStats(entries);
    entries.forEach(function (e) {
      var zs = {}, sum = 0, wsum = 0;
      GROUPS.forEach(function (g) {
        if (!stats[g]) return;
        var x = BOARD_RAW[g](e);
        if (x == null || !isFinite(x)) return;
        var z = (x - stats[g].center) / stats[g].scale;
        z = Math.max(-Z_CLIP, Math.min(Z_CLIP, z));
        zs[g] = z;
        sum += z * WEIGHTS[g];
        wsum += WEIGHTS[g];
      });
      e._z = zs;
      // 显示分 = 50 + 15×加权标准分,夹到 0-100:50 即全池中位,每 15 分差 = 1 个榜内稳健标准差
      e._disp = wsum > 0 ? Math.max(0, Math.min(100, 50 + Z_DISPLAY_SCALE * (sum / wsum))) : null;
    });
    scoreCache[ck] = { map: map, entries: entries, stats: stats };
    return scoreCache[ck];
  }
  // 综合分(显示分 0-100)。行对象须来自 matrix()/scoreTable()(已写入 _disp);
  // 未在任何有效榜上解决的模型(全 Skip/未收录)记 0,不参与排名展示。
  // 2026-09-22 起不再含「一榜豁免」与「一致性折减」:前者与「缺榜按自身水平填补」是同一动机的
  // 两次实现,叠加会把只挑强项参赛的模型持续抬分;后者在新量纲下(σ_z 中位约 0.7)折减不足
  // 0.2 分,已属噪声,而「各榜更均衡者优先」的语义改由档内 tie-break 明确承担。
  function composite(e) { return e._disp == null ? 0 : e._disp; }
  // 共榜成对净胜(0..1):只在双方都在场的榜上比标准分,分差经 logistic 软化以保留「赢多少」;
  // 无共榜返回 null。缺测的榜既不当 0 分也不当满分 —— 没有任何证据,就不做假设。
  function headToHead(a, b) {
    var sum = 0, wsum = 0;
    GROUPS.forEach(function (g) {
      var x = a._z && a._z[g], y = b._z && b._z[g];
      if (x == null || y == null) return;
      sum += WEIGHTS[g] / (1 + Math.exp(-(x - y) / H2H_TAU));
      wsum += WEIGHTS[g];
    });
    return wsum > 0 ? sum / wsum : null;
  }
  // 把成对胜负标量化:对 peers 内所有对手的共榜净胜求平均(无共榜对手记 0)
  function pairBalance(e, peers) {
    var sum = 0, n = 0;
    peers.forEach(function (o) {
      if (o === e) return;
      var v = headToHead(e, o);
      if (v != null) { sum += v; n++; }
    });
    return n ? sum / n : 0;
  }
  // 共榜严格支配:两模型各自在场的榜取交集,交集上每一榜都严格更高(至少 1 个共榜)即成立。
  // 支配是双向定义(共榜集合对 both 相同),故不会出现 A、B 互相支配。
  function dominatesStrict(a, b) {
    var shared = 0, i, g, x, y;
    for (i = 0; i < GROUPS.length; i++) {
      g = GROUPS[i];
      x = a._z && a._z[g]; y = b._z && b._z[g];
      if (x == null || y == null) continue;
      shared++;
      if (x <= y) return false;
    }
    return shared > 0;
  }
  // 档内全序:先按支配关系拓扑分层(被档内任一剩余模型支配者不得出层 → 支配者必然排在前面),
  // 同层内再按 命中数降序 → 共榜净胜降序 → 综合分降序 → id 升序。
  // 分层而非比较器是必须的:成对胜负非传递,交给 Array.sort 会得到依赖输入序、跨引擎不一致的结果。
  function tierOrder(items) {
    var out = [], rest = items.slice();
    while (rest.length) {
      var layer = rest.filter(function (e) {
        return !rest.some(function (o) { return o !== e && dominatesStrict(o, e); });
      });
      if (!layer.length) layer = rest.slice(); // 兜底:支配成环(仅在不同共榜子集交叉时可能)则整批按优先级键排
      layer.sort(function (a, b) {
        if (a.benchCount !== b.benchCount) return b.benchCount - a.benchCount;
        if (a._pw !== b._pw) return b._pw - a._pw;
        var d = composite(b) - composite(a);
        if (d) return d;
        return a.id < b.id ? -1 : a.id > b.id ? 1 : 0;
      });
      out = out.concat(layer);
      rest = rest.filter(function (e) { return layer.indexOf(e) < 0; });
    }
    return out;
  }

  // 梯队标签(从高到低):用于总览页展示,替代数值综合分
  var TIER_LABELS = ["S+", "S", "A+", "A", "B+", "B", "C+", "C", "D+", "D", "E+", "E"];
  // 金字塔权重:S+ 最少(1),逐层递增(+2),E 最多(23);总和 144
  var TIER_WEIGHTS = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23];

  // 金字塔分档:按传入的**可见序**(matrix 产出的 _posKey 序)依次分配各梯队模型数
  // S+ 固定 1 个(冠军),其余按 round(n×w/144) 分配,E 吸收剩余
  function assignTiers(rows) {
    var n = rows.length;
    if (!n) return;
    // 直接沿用传入顺序,不再按综合分重排:matrix() 已把容差档内的次序按 命中数 → 共榜净胜 定好,
    // 这里若重排,梯队边界就可能从同一个容差档中间劈开(表内第 k 行拿到的梯队比第 k+1 行差)。
    var sorted = rows;
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
    matrix: matrix, composite: composite,
    refPosition: refPosition,
    assignTiers: assignTiers,
    // scoreTable/headToHead/boardStats 供渲染与名次口径校验脚本复用(同一份实现,避免口径漂移)
    scoreTable: scoreTable, headToHead: headToHead, boardStats: boardStats,
    dominatesStrict: dominatesStrict,
    radarSeries: radarSeries, metricCards: metricCards,
    costSeries: costSeries, defaultSelection: defaultSelection, options: options,
    INDICATORS: INDICATORS,
    GROUPS: GROUPS, WEIGHTS: WEIGHTS, Z_DISPLAY_SCALE: Z_DISPLAY_SCALE, TOL_Z: TOL_Z,
    SCORE_TOLERANCE: SCORE_TOLERANCE
  };
})();
