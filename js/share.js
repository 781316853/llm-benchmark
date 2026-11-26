// 分享榜单(总览页):引用条新增「分享榜单」按钮,打开弹层用 canvas 生成分享图。
// 三种版式:榜单图(前 10 / 前 25 / 全部长图,可高亮一个模型)、单模型成绩卡、
//   厂商新模型发布倒计时(主要 / 全部厂商,行高随行数压缩,长图);
// 支持深/浅色卡、1:1 / 4:5、复制图片、下载 PNG、复制结果链接。
// 发布倒计时区块自带「分享此数据」入口,直接以该版式打开同一弹层。
// 数据口径与总览矩阵完全一致:排名行 = 命中≥4 榜,CMP.composite 相对分(50 = 全池中位)。
// 采用 IIFE + ES5 风格,与 app.js / export.js / feedback.js 保持一致。
(function () {
  "use strict";

  if (!document.querySelector(".content")) return;
  var PAGE = (document.body && document.body.getAttribute("data-page")) || "";
  if (PAGE !== "overview") return; // 首批仅总览页;其余榜单页后续按同款适配
  if (!window.CMP) return;

  var EN = /^en/i.test((document.documentElement.lang || "").toLowerCase());

  // ===== 文案 =====
  var S = EN ? {
    tagline: "Cross-benchmark comparison",
    boardKicker: "Overview · Cross-benchmark composite",
    boardTitle: "Cross-Benchmark Leaderboard",
    boardSub: function (n) { return "10 scored benchmarks · " + n + " ranked models · Relative scale, 50 = pool median"; },
    colModel: "Model", colScore: "Composite / 100",
    snap: "Snapshot ",
    footNote: "Composite = weighted within-board robust z-scores · 50 = pool median",
    legend: "Benchmarks & weights",
    modelKicker: "Model scorecard · Overview composite",
    rankLine: function (i, n, vendor, hits) {
      return "Rank #" + i + " / " + n + " · " + vendor + " · Hits " + hits + " / 10 benchmarks";
    },
    scoreLabel: "Composite (relative scale, 50 = pool median)",
    bench: {
      deepswe: "DeepSWE", llm: "llm2014 all-history", webdev: "WebDev Elo",
      agentarena: "Agent Arena", tbench: "Terminal-Bench", modeldial: "ModelDial",
      arenaofbias: "Arena of Bias Elo", aicodingdaily: "AI Coding Daily",
      octathlon: "AI Decathlon", hle: "HLE"
    },
    dialogTitle: "Share leaderboard", dialogDesc: "Pick a layout, then copy or save the image.",
    mode: "Content", modeBoard: "Leaderboard", modeModel: "Scorecard",
    count: "Rows", countTen: "Top 10", count25: "Top 25", countAll: "All",
    countHint: "Long images grow with content; aspect ratio is fixed.",
    highlight: "Highlight model", none: "None",
    pick: "Model",
    ratio: "Aspect ratio", ratio11: "Square 1:1", ratio45: "Portrait 4:5",
    theme: "Card theme", dark: "Dark", light: "Light",
    viewRaw: "View original", copyImg: "Copy image", dlImg: "Download image",
    viewResult: "View result", copyLink: "Copy result link",
    copiedImg: "Image copied", copyImgFail: "Copy failed, use download",
    copiedLink: "Link copied", copyLinkFail: "Copy failed",
    btn: "Share leaderboard",
    modeRelease: "Release clock",
    releaseKicker: "Overview · New-model release clock",
    releaseTitle: "New-Model Release Clock",
    releaseSub: function (n) { return n + " vendors · days since each vendor's latest release"; },
    releaseFoot: "Latest model per vendor · ModelDial / official release watch",
    releaseBtn: "Share this data",
    scope: "Vendors", scopeMain: "Main vendors", scopeAll: "All vendors",
    sortLabel: "Order", sortRecent: "Most recent", sortStale: "Longest wait",
    colVendor: "Vendor", colDays: "Days since last release", colLast: "Latest model · date"
  } : {
    tagline: "跨基准模型对比",
    boardKicker: "总览 · 跨基准综合分",
    boardTitle: "跨基准模型综合榜",
    boardSub: function (n) { return "10 项计分基准 · " + n + " 个排名模型 · 相对分口径,50 = 全池中位"; },
    colModel: "模型", colScore: "综合分 / 100",
    snap: "数据快照 ",
    footNote: "综合分 = 各榜榜内稳健标准分加权 · 50 = 全池中位",
    legend: "计分基准与权重",
    modelKicker: "模型成绩卡 · 总览综合分",
    rankLine: function (i, n, vendor, hits) {
      return "排名 #" + i + " / " + n + " · " + vendor + " · 命中 " + hits + " / 10 项计分基准";
    },
    scoreLabel: "综合分(相对分,50 = 全池中位)",
    bench: {
      deepswe: "DeepSWE", llm: "llm2014 全历史", webdev: "WebDev Elo",
      agentarena: "Agent Arena", tbench: "Terminal-Bench", modeldial: "ModelDial",
      arenaofbias: "亿模亿样 Elo", aicodingdaily: "AI Coding Daily",
      octathlon: "AI 十项全能", hle: "HLE"
    },
    dialogTitle: "分享榜单", dialogDesc: "选择版式,复制或保存图片。",
    mode: "分享内容", modeBoard: "榜单图", modeModel: "成绩卡",
    count: "展示数量", countTen: "前 10", count25: "前 25", countAll: "全部",
    countHint: "长图按内容自动高度,图片比例不可选。",
    highlight: "高亮模型", none: "不高亮",
    pick: "选择模型",
    ratio: "图片比例", ratio11: "方形 1:1", ratio45: "竖版 4:5",
    theme: "卡片主题", dark: "深色", light: "浅色",
    viewRaw: "查看原图", copyImg: "复制图片", dlImg: "下载图片",
    viewResult: "查看对应结果", copyLink: "复制结果链接",
    copiedImg: "已复制图片", copyImgFail: "复制失败,请下载",
    copiedLink: "已复制链接", copyLinkFail: "复制失败",
    btn: "分享榜单",
    modeRelease: "发布倒计时",
    releaseKicker: "总览 · 厂商新模型发布倒计时",
    releaseTitle: "厂商新模型发布倒计时",
    releaseSub: function (n) { return n + " 家厂商 · 天数为本机日期与厂商最近一次发布日期的自然日差"; },
    releaseFoot: "每家厂商取最近一次发布 · 来源:ModelDial / 厂商官方发布监听 / 基准榜单",
    releaseBtn: "分享此数据",
    scope: "厂商范围", scopeMain: "主要厂商", scopeAll: "全部厂商",
    sortLabel: "排序", sortRecent: "最近发布", sortStale: "最久未发",
    colVendor: "厂商", colDays: "距上次发布天数", colLast: "上次发布的模型 · 日期"
  };

  // ===== 卡片绘制 =====
  var FONT = '"DM Sans","PingFang SC","Noto Sans SC","Microsoft YaHei","Segoe UI",sans-serif';
  var MONO = '"Cascadia Mono","SF Mono",Consolas,"Liberation Mono",monospace';

  var THEMES = {
    dark: {
      bg1: "#0A0C11", bg2: "#0B0B0C", glow: "rgba(77,107,254,.22)",
      text: "#F2F4F7", dim: "rgba(242,244,247,.62)", faint: "rgba(242,244,247,.38)",
      divider: "rgba(255,255,255,.10)", track: "rgba(255,255,255,.07)",
      bar1: "#4D6BFE", bar2: "#7C9BFF", accent: "#8FA9FF",
      rowHi: "rgba(124,155,255,.10)", cellBg: "rgba(255,255,255,.03)", cellBd: "rgba(255,255,255,.07)",
      pillBg: "rgba(255,255,255,.04)", pillBd: "rgba(255,255,255,.14)"
    },
    light: {
      bg1: "#FBFBFD", bg2: "#F3F5FA", glow: "rgba(77,107,254,.10)",
      text: "#16181D", dim: "rgba(22,24,29,.62)", faint: "rgba(22,24,29,.40)",
      divider: "#E6E8EC", track: "#E9ECF3",
      bar1: "#2F55D4", bar2: "#4D6BFE", accent: "#2F55D4",
      rowHi: "rgba(47,85,212,.07)", cellBg: "rgba(255,255,255,.72)", cellBd: "#E6E8EC",
      pillBg: "rgba(22,24,29,.03)", pillBd: "rgba(22,24,29,.16)"
    }
  };

  // 计分基准与权重(与 app.js BENCH_WEIGHT 一致,十组之和 1.00);缺测显示「—」,不是「—%」
  function pc(v) { return v == null || !isFinite(v) ? "—" : Number(v).toFixed(1) + "%"; }
  var BENCH = [
    { key: "deepswe", weight: "12.9%", fmt: pc },
    { key: "llm", weight: "9.2%", fmt: function (v) { return n1(v); } },
    { key: "webdev", weight: "16.6%", fmt: function (v) { return v == null ? "—" : String(Math.round(v)); } },
    { key: "agentarena", weight: "8.3%", fmt: function (v) { return v == null ? "—" : (v > 0 ? "+" : "") + n1(v) + "%"; } },
    { key: "tbench", weight: "8.3%", fmt: pc },
    { key: "modeldial", weight: "12.9%", fmt: function (v) { return n1(v); } },
    { key: "arenaofbias", weight: "9.2%", fmt: function (v) { return v == null ? "—" : String(Math.round(v)); } },
    { key: "aicodingdaily", weight: "7.4%", fmt: function (v) { return v == null ? "—" : n1(v) + "/70"; } },
    { key: "octathlon", weight: "8%", fmt: function (v) { return v == null ? "—" : n1(v) + "/100"; } },
    { key: "hle", weight: "7.4%", fmt: pc }
  ];

  function n1(v) { return v == null || !isFinite(v) ? "—" : Number(v).toFixed(1); }

  function rr(ctx, x, y, w, h, r) {
    r = Math.min(r, w / 2, h / 2);
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y, x + w, y + h, r);
    ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r);
    ctx.arcTo(x, y, x + w, y, r);
    ctx.closePath();
  }

  function setFont(ctx, size, weight, mono) {
    ctx.font = (weight || 400) + " " + size + "px " + (mono ? MONO : FONT);
  }

  function fitFont(ctx, text, maxW, size, weight, min) {
    while (size > (min || 28)) {
      setFont(ctx, size, weight);
      if (ctx.measureText(text).width <= maxW) break;
      size -= 2;
    }
    return size;
  }

  function ellipsis(ctx, text, maxW) {
    if (ctx.measureText(text).width <= maxW) return text;
    var t = text;
    while (t.length > 1 && ctx.measureText(t + "…").width > maxW) t = t.slice(0, -1);
    return t + "…";
  }

  function paintBg(ctx, W, H, T) {
    var g = ctx.createLinearGradient(0, 0, 0, H);
    g.addColorStop(0, T.bg1);
    g.addColorStop(1, T.bg2);
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, W, H);
    var glow = ctx.createRadialGradient(W / 2, -160, 40, W / 2, -160, W * 0.72);
    glow.addColorStop(0, T.glow);
    glow.addColorStop(1, "rgba(0,0,0,0)");
    ctx.fillStyle = glow;
    ctx.fillRect(0, 0, W, H * 0.5);
  }

  function paintHeader(ctx, W, T, meta) {
    setFont(ctx, 18, 600, true);
    var label = "LLM BENCHMARK INDEX";
    if ("letterSpacing" in ctx) ctx.letterSpacing = "2.4px";
    var pillW = ctx.measureText(label).width + 40;
    if ("letterSpacing" in ctx) ctx.letterSpacing = "0px";
    ctx.fillStyle = T.pillBg;
    ctx.strokeStyle = T.pillBd;
    ctx.lineWidth = 1.5;
    rr(ctx, 64, 58, pillW, 44, 22);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = T.dim;
    ctx.textBaseline = "middle";
    ctx.textAlign = "left";
    ctx.fillText(label, 84, 81);
    ctx.textBaseline = "alphabetic";

    setFont(ctx, 21);
    ctx.fillStyle = T.faint;
    ctx.textAlign = "right";
    ctx.fillText(S.tagline, W - 64, 81);

    ctx.strokeStyle = T.divider;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(64, 136);
    ctx.lineTo(W - 64, 136);
    ctx.stroke();

    setFont(ctx, 22, 600);
    ctx.fillStyle = T.accent;
    ctx.textAlign = "left";
    ctx.fillText(meta.kicker, 64, 186);

    setFont(ctx, 60, 700);
    ctx.fillStyle = T.text;
    ctx.fillText(meta.title, 64, 258);

    // 副标题与右上角快照同行:先量出快照宽,副标题按剩余宽度截断,避免中英文长文案互相压字
    var snapText = S.snap + meta.snap;
    setFont(ctx, 19, 500, true);
    var snapW = ctx.measureText(snapText).width;

    setFont(ctx, 23);
    ctx.fillStyle = T.dim;
    ctx.fillText(ellipsis(ctx, meta.subtitle, W - 64 - snapW - 100), 64, 308);

    setFont(ctx, 19, 500, true);
    ctx.fillStyle = T.faint;
    ctx.textAlign = "right";
    ctx.fillText(snapText, W - 64, 308);
  }

  function paintFooter(ctx, W, H, T, meta) {
    ctx.textBaseline = "alphabetic";
    ctx.strokeStyle = T.divider;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(64, H - 150);
    ctx.lineTo(W - 64, H - 150);
    ctx.stroke();

    setFont(ctx, 24, 700);
    ctx.fillStyle = T.text;
    ctx.textAlign = "left";
    ctx.fillText("LLM BENCHMARK INDEX", 64, H - 96);

    // 访问地址:带协议头的完整地址 + 提亮,转发后能直接认出/照抄;右侧快照与脚注让位
    setFont(ctx, 18, 500, true);
    ctx.fillStyle = T.dim;
    ctx.textAlign = "left";
    var urlText = "https://781316853.github.io/llm-benchmark";
    ctx.fillText(urlText, 64, H - 62);
    var urlW = ctx.measureText(urlText).width;

    setFont(ctx, 22, 600, true);
    ctx.fillStyle = T.dim;
    ctx.textAlign = "right";
    ctx.fillText(S.snap + meta.snap, W - 64, H - 96);

    // 脚注按左侧 URL 之后的剩余宽度截断,长文案不会压到站点地址
    setFont(ctx, 18);
    ctx.fillStyle = T.faint;
    ctx.fillText(ellipsis(ctx, meta.footNote, W - 64 - (64 + urlW + 32)), W - 64, H - 62);
  }

  function paintTicks(ctx, T, x, w, y) {
    ctx.textBaseline = "alphabetic";
    setFont(ctx, 16, 400, true);
    ctx.fillStyle = T.faint;
    ctx.textAlign = "center";
    ctx.fillText("0", x, y);
    ctx.fillText("50", x + w / 2, y);
    ctx.fillText("100", x + w, y);
    ctx.textAlign = "left";
  }

  function drawBoard(ctx, opts) {
    var data = opts.data, T = THEMES[opts.theme], W = 1200;
    var rows = data.top.slice(0, opts.count === "all" ? data.top.length : opts.count);
    var long = rows.length > 12;
    var ratio45 = opts.ratio === "4:5" && !long;
    var rowH = long ? (rows.length > 30 ? 44 : 50) : (ratio45 ? 64 : 56);
    var top = 384;
    var footH = 190;
    var ticksH = 54;
    var H = long ? top + rows.length * rowH + ticksH + footH : (ratio45 ? 1500 : 1200);
    var meta = {
      kicker: S.boardKicker,
      title: S.boardTitle,
      subtitle: S.boardSub(data.rankedCount),
      snap: data.snap,
      footNote: S.footNote
    };

    ctx.canvas.width = W;
    ctx.canvas.height = H;
    paintBg(ctx, W, H, T);
    paintHeader(ctx, W, T, meta);

    setFont(ctx, 19);
    ctx.fillStyle = T.faint;
    ctx.textAlign = "left";
    ctx.fillText(S.colModel, 136, 372);
    ctx.textAlign = "right";
    ctx.fillText(S.colScore, W - 64, 372);

    var barX = 610, barW = 330;
    var barGrad = ctx.createLinearGradient(barX, 0, barX + barW, 0);
    barGrad.addColorStop(0, T.bar1);
    barGrad.addColorStop(1, T.bar2);

    rows.forEach(function (r, i) {
      var y = top + i * rowH;
      var cy = y + rowH / 2;
      var hi = opts.highlight && r.id === opts.highlight;
      if (hi) {
        ctx.fillStyle = T.rowHi;
        rr(ctx, 56, y + 2, W - 112, rowH - 4, 14);
        ctx.fill();
        ctx.fillStyle = T.bar2;
        rr(ctx, 56, y + 14, 4, rowH - 28, 2);
        ctx.fill();
      }
      setFont(ctx, long ? 18 : 21, 500, true);
      ctx.fillStyle = T.faint;
      ctx.textAlign = "right";
      ctx.textBaseline = "middle";
      ctx.fillText(("0" + (i + 1)).slice(-2), 118, cy - (long ? 0 : 8));

      setFont(ctx, long ? 23 : 27, 600);
      ctx.fillStyle = T.text;
      ctx.textAlign = "left";
      ctx.fillText(ellipsis(ctx, r.id, 430), 136, long ? cy : cy - 9);

      if (!long) {
        setFont(ctx, 16);
        ctx.fillStyle = r.color || T.faint;
        ctx.beginPath();
        ctx.arc(141, cy + 11, 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = T.faint;
        ctx.fillText(ellipsis(ctx, r.vendor, 380), 153, cy + 16);
      }

      var bh = long ? 10 : 14;
      ctx.fillStyle = T.track;
      rr(ctx, barX, cy - bh / 2, barW, bh, bh / 2);
      ctx.fill();
      var pct = Math.max(0, Math.min(100, r.score || 0)) / 100;
      if (pct > 0) {
        ctx.fillStyle = hi ? T.bar2 : barGrad;
        rr(ctx, barX, cy - bh / 2, Math.max(bh, barW * pct), bh, bh / 2);
        ctx.fill();
      }

      setFont(ctx, long ? 22 : 27, 700, true);
      ctx.fillStyle = hi ? T.accent : T.text;
      ctx.textAlign = "right";
      ctx.fillText(r.score == null ? "—" : Number(r.score).toFixed(1), W - 64, cy);
    });

    paintTicks(ctx, T, barX, barW, top + rows.length * rowH + 34);

    if (ratio45) {
      // 4:5 竖版留白较多:补一条计分口径说明条(真实权重)
      var legendY = H - 300;
      setFont(ctx, 19, 600);
      ctx.fillStyle = T.faint;
      ctx.textAlign = "left";
      ctx.fillText(S.legend, 64, legendY);
      setFont(ctx, 19);
      ctx.fillStyle = T.dim;
      var line1 = "DeepSWE 12.9% · llm2014 9.2% · WebDev 16.6% · Agent Arena 8.3% · Terminal-Bench 8.3%";
      var line2 = "ModelDial 12.9% · " + S.bench.arenaofbias.replace(" Elo", "") + " 9.2% · AI Coding Daily 7.4% · " +
        S.bench.octathlon + " 8% · HLE 7.4%";
      ctx.fillText(line1, 64, legendY + 38);
      ctx.fillText(line2, 64, legendY + 70);
    }

    paintFooter(ctx, W, H, T, meta);
  }

  function drawModel(ctx, opts) {
    var data = opts.data, T = THEMES[opts.theme], W = 1200;
    var idx = 0, row = null;
    for (var i = 0; i < data.top.length; i++) {
      if (data.top[i].id === opts.modelId) { row = data.top[i]; idx = i; break; }
    }
    if (!row) { row = data.top[0]; idx = 0; }
    if (!row) return;
    var ratio45 = opts.ratio === "4:5";
    var H = ratio45 ? 1500 : 1200;
    var meta = {
      kicker: S.modelKicker,
      title: row.id,
      subtitle: S.rankLine(idx + 1, data.rankedCount, row.vendor, row.hits),
      snap: data.snap,
      footNote: S.footNote
    };

    ctx.canvas.width = W;
    ctx.canvas.height = H;
    paintBg(ctx, W, H, T);

    // 头部(标题按模型名自适应字号)
    setFont(ctx, 18, 600, true);
    var label = "LLM BENCHMARK INDEX";
    if ("letterSpacing" in ctx) ctx.letterSpacing = "2.4px";
    var pillW = ctx.measureText(label).width + 40;
    if ("letterSpacing" in ctx) ctx.letterSpacing = "0px";
    ctx.fillStyle = T.pillBg;
    ctx.strokeStyle = T.pillBd;
    ctx.lineWidth = 1.5;
    rr(ctx, 64, 58, pillW, 44, 22);
    ctx.fill();
    ctx.stroke();
    ctx.textBaseline = "middle";
    ctx.textAlign = "left";
    setFont(ctx, 18, 600, true);
    ctx.fillStyle = T.dim;
    ctx.fillText(label, 84, 81);
    ctx.textBaseline = "alphabetic";

    setFont(ctx, 21);
    ctx.fillStyle = T.faint;
    ctx.textAlign = "right";
    ctx.fillText(S.tagline, W - 64, 81);

    ctx.strokeStyle = T.divider;
    ctx.beginPath();
    ctx.moveTo(64, 136);
    ctx.lineTo(W - 64, 136);
    ctx.stroke();

    setFont(ctx, 22, 600);
    ctx.fillStyle = T.accent;
    ctx.textAlign = "left";
    ctx.fillText(meta.kicker, 64, 186);

    var nameSize = fitFont(ctx, row.id, W - 128, 62, 700, 36);
    setFont(ctx, nameSize, 700);
    ctx.fillStyle = T.text;
    ctx.fillText(row.id, 64, 264);

    setFont(ctx, 22);
    ctx.fillStyle = T.dim;
    ctx.fillText(meta.subtitle, 64, 314);

    setFont(ctx, 19, 500, true);
    ctx.fillStyle = T.faint;
    ctx.textAlign = "right";
    ctx.fillText(S.snap + data.snap, W - 64, 314);

    // 综合分
    var scoreY = ratio45 ? 560 : 520;
    setFont(ctx, ratio45 ? 172 : 150, 700, false);
    if ("letterSpacing" in ctx) ctx.letterSpacing = "-3px";
    ctx.fillStyle = T.bar2;
    ctx.textAlign = "left";
    ctx.fillText(Number(row.score).toFixed(1), 64, scoreY);
    if ("letterSpacing" in ctx) ctx.letterSpacing = "0px";

    setFont(ctx, 22);
    ctx.fillStyle = T.dim;
    ctx.fillText(S.scoreLabel, 64, scoreY + 46);

    // 分项 3 列 × N 行;10 项时 1:1 版按可用高度压缩行高,避免压到页脚
    var gridTop = ratio45 ? 720 : 660;
    var gap = ratio45 ? 20 : 16;
    var rows = Math.ceil(BENCH.length / 3);
    var cellW = (W - 128 - gap * 2) / 3;
    var avail = (H - 180) - gridTop;
    var cellH = Math.min(ratio45 ? 124 : 100, Math.floor((avail - gap * (rows - 1)) / rows));
    var compact = cellH < 90;
    BENCH.forEach(function (b, i) {
      var cx = 64 + (i % 3) * (cellW + gap);
      var cy = gridTop + Math.floor(i / 3) * (cellH + gap);
      ctx.fillStyle = T.cellBg;
      ctx.strokeStyle = T.cellBd;
      ctx.lineWidth = 1;
      rr(ctx, cx, cy, cellW, cellH, 16);
      ctx.fill();
      ctx.stroke();
      setFont(ctx, compact ? 16 : 19);
      ctx.fillStyle = T.faint;
      ctx.textAlign = "left";
      ctx.fillText(S.bench[b.key] + "  " + b.weight, cx + 20, cy + (compact ? 26 : 36));
      setFont(ctx, compact ? 28 : (ratio45 ? 38 : 34), 600, true);
      ctx.fillStyle = T.text;
      ctx.fillText(b.fmt(row[b.key]), cx + 20, cy + cellH - (compact ? 18 : 34));
    });

    paintFooter(ctx, W, H, T, meta);
  }

  // 发布倒计时:每行一家厂商 —— 色点 + 厂商名 / 按天数等比的条形 / 天数 / 上次发布的模型与日期。
  // 行高随行数压缩(主要厂商 ~13 家最舒展,全量 26 家压到 38px);条形长度按当前行集最大天数等比。
  // 天数 ≤7 的「刚发布」行用强调色 + 行底高亮,与页面 is-fresh 口径一致;>60 天条形降透明度,对应 is-stale。
  function drawRelease(ctx, opts) {
    var data = opts.data, T = THEMES[opts.theme], W = 1200;
    var rows = opts.scope === "all" ? data.rows : (data.primary.length ? data.primary : data.rows);
    var n = rows.length;
    var dense = n > 12;
    var rowH = n > 26 ? 38 : (n > 16 ? 44 : (dense ? 50 : 58));
    var top = 384;
    var ticksH = 46;
    var footH = 190;
    var H = top + n * rowH + ticksH + footH;
    var maxDays = rows.reduce(function (m, r) { return Math.max(m, r.days); }, 0);
    var scaleMax = Math.max(1, maxDays);
    var meta = {
      kicker: S.releaseKicker,
      title: S.releaseTitle,
      subtitle: S.releaseSub(n),
      snap: data.snap,
      footNote: S.releaseFoot
    };

    ctx.canvas.width = W;
    ctx.canvas.height = H;
    paintBg(ctx, W, H, T);
    paintHeader(ctx, W, T, meta);

    var vendorX = 64, vendorW = 214;
    var barX = 280, barW = 330;
    var daysRight = 696;
    var modelX = 712, modelW = 262;
    var dateRight = W - 64;

    setFont(ctx, 19);
    ctx.fillStyle = T.faint;
    ctx.textAlign = "left";
    ctx.fillText(S.colVendor, vendorX, 372);
    ctx.fillText(S.colDays, barX, 372);
    ctx.textAlign = "right";
    ctx.fillText(S.colLast, dateRight, 372);

    rows.forEach(function (r, i) {
      var y = top + i * rowH;
      var cy = y + rowH / 2;
      var fresh = r.days <= 7;
      if (fresh) {
        ctx.fillStyle = T.rowHi;
        rr(ctx, 56, y + 2, W - 112, rowH - 4, 12);
        ctx.fill();
        ctx.fillStyle = T.bar2;
        rr(ctx, 56, y + 12, 4, rowH - 24, 2);
        ctx.fill();
      }

      ctx.fillStyle = r.color;
      ctx.beginPath();
      ctx.arc(vendorX + 6, cy, dense ? 4 : 5, 0, Math.PI * 2);
      ctx.fill();

      setFont(ctx, dense ? 19 : 23, 600);
      ctx.fillStyle = T.text;
      ctx.textAlign = "left";
      ctx.textBaseline = "middle";
      ctx.fillText(ellipsis(ctx, r.vendor, vendorW - 26), vendorX + 20, cy);

      var bh = dense ? 10 : 13;
      ctx.fillStyle = T.track;
      rr(ctx, barX, cy - bh / 2, barW, bh, bh / 2);
      ctx.fill();
      var pw = barW * Math.max(0.008, Math.min(1, r.days / scaleMax));
      if (r.days > 60) ctx.globalAlpha = 0.45;
      ctx.fillStyle = fresh ? T.accent : r.color;
      rr(ctx, barX, cy - bh / 2, Math.max(bh, pw), bh, bh / 2);
      ctx.fill();
      ctx.globalAlpha = 1;

      setFont(ctx, dense ? 20 : 24, fresh ? 700 : 600, true);
      ctx.fillStyle = fresh ? T.accent : T.text;
      ctx.textAlign = "right";
      ctx.fillText(r.days + (EN ? " d" : " 天"), daysRight, cy);

      setFont(ctx, dense ? 18 : 20, 500);
      ctx.fillStyle = T.dim;
      ctx.textAlign = "left";
      ctx.fillText(ellipsis(ctx, r.model || "—", modelW), modelX, cy);

      setFont(ctx, dense ? 18 : 20, 500, true);
      ctx.fillStyle = T.faint;
      ctx.textAlign = "right";
      ctx.fillText(r.date, dateRight, cy);
    });
    ctx.textBaseline = "alphabetic";

    setFont(ctx, 16, 400, true);
    ctx.fillStyle = T.faint;
    ctx.textAlign = "center";
    var ty = top + n * rowH + 32;
    ctx.fillText("0", barX + 10, ty);
    ctx.fillText(String(Math.round(scaleMax / 2)), barX + barW / 2, ty);
    ctx.fillText(maxDays + (EN ? " d" : " 天"), barX + barW - 10, ty);
    ctx.textAlign = "left";

    paintFooter(ctx, W, H, T, meta);
  }

  function draw(canvas, opts) {
    var ctx = canvas.getContext("2d");
    opts.theme = opts.theme === "light" ? "light" : "dark";
    if (opts.mode === "model") drawModel(ctx, opts);
    else if (opts.mode === "release") {
      if (!opts.relData) return;
      drawRelease(ctx, { data: opts.relData, theme: opts.theme, scope: opts.scope });
    } else drawBoard(ctx, opts);
  }

  // ===== 数据(与总览矩阵同口径)=====
  function collectData() {
    var rows = window.CMP.matrix(null).filter(function (r) { return r.benchCount >= 4; });
    var top = rows.map(function (r) {
      return {
        id: r.id, vendor: r.vendor, color: r.color, hits: r.benchCount,
        score: Math.round(window.CMP.composite(r) * 10) / 10,
        deepswe: r.deepswe ? r.deepswe.pass1 : null,
        tbench: r.tbench ? r.tbench.score : null,
        hle: r.hle ? r.hle.score : null,
        modeldial: r.modeldial ? r.modeldial.score : null,
        webdev: r.webdev ? r.webdev.score : null,
        agentarena: r.agentarena ? r.agentarena.score : null,
        llm: r.llm ? r.llm.norm : null,
        arenaofbias: r.arenaofbias ? r.arenaofbias.score : null,
        aicodingdaily: r.aicodingdaily ? r.aicodingdaily.score : null,
        octathlon: r.octathlon ? r.octathlon.score : null
      };
    });
    var keys = ["DEEPSWE", "LLM2014", "ARENA_WEBDEV", "ARENA_AGENT", "TBENCH",
      "MODELDIAL", "ARENAOFBIAS", "AICODINGDAILY", "OCTATHLON", "HLE"];
    var snap = null;
    keys.forEach(function (k) {
      var g = window[k];
      var u = g && g.updated;
      if (u && (!snap || u > snap)) snap = u;
    });
    return { top: top, rankedCount: top.length, snap: snap || "" };
  }

  // 发布倒计时(与总览区块同口径):数据来自 window.RELEASES,天数按本机日期计算;
  // 排序跟随弹层内的「排序」选择,厂商范围按主要厂商(MODEL_MAP.mainVendors)/全部切分,
  // 主要厂商清单缺失时兜底取前 12 家,保证卡片不出空图。
  function collectRelease() {
    var g = window.RELEASES;
    if (!g || !Array.isArray(g.vendors) || !g.vendors.length) return null;
    var now = new Date();
    var today = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());
    var mm = window.MODEL_MAP || {};
    var colors = mm.vendorColors || {};
    var defColor = mm.vendorDefaultColor || "#9298A1";
    var rows = g.vendors.map(function (v) {
      var t = Date.parse(v.date + "T00:00:00Z");
      var days = isFinite(t) ? Math.max(0, Math.round((today - t) / 86400000)) : 0;
      return {
        vendor: v.vendor, date: v.date, model: v.model, src: v.src,
        days: days, color: colors[v.vendor] || defColor
      };
    });
    rows.sort(function (a, b) {
      if (a.days !== b.days) return state.releaseSort === "stale" ? b.days - a.days : a.days - b.days;
      return a.vendor < b.vendor ? -1 : (a.vendor > b.vendor ? 1 : 0);
    });
    var main = {};
    (mm.mainVendors || []).forEach(function (v) { main[v] = 1; });
    var primary = rows.filter(function (r) { return main[r.vendor]; });
    if (!primary.length) primary = rows.slice(0, 12);
    return { rows: rows, primary: primary, snap: g.updated || "" };
  }

  // 结果链接:取本页 canonical(与 export.js 同口径),去掉查询串/hash;
  // 没有 canonical 时回落到线上站点根 —— 不能用 location.href,避免把本机地址当分享链接
  function pageUrl() {
    var link = document.querySelector('link[rel="canonical"]');
    var href = link ? link.getAttribute("href") : "";
    if (href) return href.replace(/[?#].*$/, "");
    return "https://781316853.github.io/llm-benchmark/";
  }

  // ===== 弹层 =====
  var state = {
    mode: "board", count: "10", ratio: "1:1",
    theme: document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark",
    highlight: "", modelId: null,
    releaseScope: "primary", releaseSort: "recent"
  };
  var data = null, relData = null;
  var modal = null, canvas = null, sizeEl = null, hintEl = null;
  var lastFocus = null;

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }

  function seg(name, options) {
    return '<div class="share-seg" data-seg="' + name + '">' + options.map(function (o, i) {
      return '<button type="button" data-val="' + o[0] + '"' + (i === 0 ? ' class="is-on"' : "") + '>' +
        esc(o[1]) + '</button>';
    }).join("") + "</div>";
  }

  function field(label, body, when) {
    return '<div class="share-field"' + (when ? ' data-when="' + when + '" hidden' : "") + '>' +
      '<span class="share-label">' + esc(label) + '</span>' + body + "</div>";
  }

  function buildModal() {
    if (modal) return modal;
    modal = document.createElement("div");
    modal.className = "share-modal";
    modal.hidden = true;
    modal.innerHTML =
      '<div class="share-overlay" data-share-close></div>' +
      '<div class="share-dialog" role="dialog" aria-modal="true" aria-labelledby="shareTitle">' +
        '<div class="share-preview"><canvas id="shareCanvas" width="1200" height="1200"></canvas></div>' +
        '<aside class="share-panel">' +
          '<header class="share-panel-head">' +
            '<div><h3 id="shareTitle">' + esc(S.dialogTitle) + '</h3>' +
            '<p>' + esc(S.dialogDesc) + '</p></div>' +
            '<button class="share-close" type="button" data-share-close aria-label="' + esc(S.dialogTitle) + '">&times;</button>' +
          '</header>' +
          '<div class="share-body">' +
            field(S.mode, seg("mode", [["board", S.modeBoard], ["model", S.modeModel], ["release", S.modeRelease]])) +
            field(S.count, seg("count", [["10", S.countTen], ["25", S.count25], ["all", S.countAll]]) +
              '<p class="share-hint" id="shareCountHint" hidden>' + esc(S.countHint) + '</p>', "board") +
            field(S.highlight, '<select class="share-select" id="shareHl"></select>', "board") +
            field(S.pick, '<select class="share-select" id="sharePick"></select>', "model") +
            field(S.ratio, seg("ratio", [["1:1", S.ratio11], ["4:5", S.ratio45]]), "board") +
            field(S.ratio, seg("ratio2", [["1:1", S.ratio11], ["4:5", S.ratio45]]), "model") +
            field(S.scope, seg("scope", [["primary", S.scopeMain], ["all", S.scopeAll]]), "release") +
            field(S.sortLabel, seg("rsort", [["recent", S.sortRecent], ["stale", S.sortStale]]), "release") +
            field(S.theme, seg("theme", [["dark", S.dark], ["light", S.light]])) +
          '</div>' +
          '<footer class="share-foot">' +
            '<div class="share-meta"><span id="shareSize">1200 × 1200 · PNG</span>' +
            '<button class="share-link" type="button" id="shareRaw">' + esc(S.viewRaw) + '</button></div>' +
            '<div class="share-actions">' +
              '<button class="share-btn" type="button" id="shareCopyImg">' + esc(S.copyImg) + '</button>' +
              '<button class="share-btn is-primary" type="button" id="shareDl">' + esc(S.dlImg) + '</button>' +
            '</div>' +
            '<div class="share-links">' +
              '<a class="share-link" id="shareResult" target="_blank" rel="noopener" href="' + esc(pageUrl()) + '">' +
                esc(S.viewResult) + '</a>' +
              '<button class="share-link" type="button" id="shareCopyLink">' + esc(S.copyLink) + '</button>' +
            '</div>' +
          '</footer>' +
        '</aside>' +
      '</div>';
    document.body.appendChild(modal);
    canvas = document.getElementById("shareCanvas");
    sizeEl = document.getElementById("shareSize");
    hintEl = document.getElementById("shareCountHint");
    bindModal();
    return modal;
  }

  // modeHint:入口按钮可直接指定初始版式(release-tools 的「分享此数据」走倒计时卡片)
  function openModal(modeHint) {
    if (modeHint) state.mode = modeHint;
    data = collectData();
    relData = collectRelease();
    // 倒计时数据缺失时回落到榜单图,避免 draw 里拿不到数据留下空白画布
    if (state.mode === "release" && !relData) state.mode = "board";
    if (state.mode !== "release" && (!data || !data.top.length)) {
      if (relData) state.mode = "release";
      else return;
    }
    if (data && data.top.length &&
      (!state.modelId || !data.top.some(function (r) { return r.id === state.modelId; }))) {
      state.modelId = data.top[0].id;
    }
    buildModal();
    fillSelects();
    syncSegs();
    lastFocus = document.activeElement;
    modal.hidden = false;
    render();
    var closeBtn = modal.querySelector(".share-close");
    if (closeBtn) closeBtn.focus();
  }

  function closeModal() {
    if (!modal) return;
    modal.hidden = true;
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  function fillSelects() {
    var hl = document.getElementById("shareHl");
    var pick = document.getElementById("sharePick");
    if (!data || !data.top.length) return;
    var opts = data.top.map(function (r, i) {
      return '<option value="' + esc(r.id) + '">#' + (i + 1) + ' · ' + esc(r.id) + "</option>";
    }).join("");
    hl.innerHTML = '<option value="">' + esc(S.none) + "</option>" + opts;
    hl.value = state.highlight || "";
    pick.innerHTML = opts;
    pick.value = state.modelId || (data.top[0] && data.top[0].id) || "";
  }

  function isLong() { return state.mode === "board" && state.count !== "10"; }

  function render() {
    draw(canvas, {
      mode: state.mode,
      theme: state.theme,
      ratio: state.ratio,
      count: state.count === "all" ? "all" : Number(state.count),
      highlight: state.highlight,
      modelId: state.modelId,
      data: data,
      relData: relData,
      scope: state.releaseScope
    });
    sizeEl.textContent = canvas.width + " × " + canvas.height + " · PNG";
    hintEl.hidden = !isLong();
    Array.prototype.forEach.call(modal.querySelectorAll('[data-seg="ratio"] button, [data-seg="ratio2"] button'), function (b) {
      b.disabled = isLong();
    });
    Array.prototype.forEach.call(modal.querySelectorAll("[data-when]"), function (el) {
      el.hidden = el.getAttribute("data-when") !== state.mode;
    });
  }

  function setSeg(name, val) {
    var normalized = name === "ratio2" ? "ratio"
      : (name === "scope" ? "releaseScope" : (name === "rsort" ? "releaseSort" : name));
    state[normalized] = val;
    Array.prototype.forEach.call(modal.querySelectorAll('[data-seg="' + name + '"] button'), function (b) {
      b.classList.toggle("is-on", b.getAttribute("data-val") === val);
    });
    if (name === "ratio" || name === "ratio2") {
      var other = name === "ratio" ? "ratio2" : "ratio";
      Array.prototype.forEach.call(modal.querySelectorAll('[data-seg="' + other + '"] button'), function (b) {
        b.classList.toggle("is-on", b.getAttribute("data-val") === val);
      });
    }
  }

  // 弹层里的分段控件初始态要与 state 一致(主题可能跟随站点、上次数值会跨次保留)
  function syncSegs() {
    setSeg("mode", state.mode);
    setSeg("count", state.count);
    setSeg("theme", state.theme);
    setSeg("ratio", state.ratio);
    setSeg("scope", state.releaseScope);
    setSeg("rsort", state.releaseSort);
  }

  function flash(btn, text) {
    var label = btn.getAttribute("data-label") || btn.textContent;
    btn.setAttribute("data-label", label);
    btn.textContent = text;
    setTimeout(function () { btn.textContent = label; }, 1400);
  }

  function toBlob() {
    return new Promise(function (resolve) {
      if (canvas.toBlob) canvas.toBlob(resolve, "image/png");
      else {
        var bin = atob(canvas.toDataURL("image/png").split(",")[1]);
        var arr = new Uint8Array(bin.length);
        for (var i = 0; i < bin.length; i++) arr[i] = bin.charCodeAt(i);
        resolve(new Blob([arr], { type: "image/png" }));
      }
    });
  }

  function fileName() {
    var base = state.mode === "model" ? state.modelId
      : (state.mode === "release" ? "release-clock" + (state.releaseScope === "all" ? "-all" : "") : "overview-leaderboard");
    var snapSrc = state.mode === "release" ? relData : data;
    var snap = snapSrc && snapSrc.snap ? "_" + snapSrc.snap.replace(/-/g, "") : "";
    return "llm-benchmark_" + String(base).replace(/[\\/:*?"<>|\s]+/g, "-") + snap + ".png";
  }

  function bindModal() {
    modal.addEventListener("click", function (e) {
      var t = e.target;
      if (t.closest("[data-share-close]")) { closeModal(); return; }
      var b = t.closest('[data-seg] button');
      if (b && !b.disabled) { setSeg(t.closest("[data-seg]").getAttribute("data-seg"), b.getAttribute("data-val")); render(); return; }
      if (t.closest("#shareDl")) {
        toBlob().then(function (blob) {
          var a = document.createElement("a");
          a.href = URL.createObjectURL(blob);
          a.download = fileName();
          document.body.appendChild(a);
          a.click();
          a.remove();
          setTimeout(function () { URL.revokeObjectURL(a.href); }, 1000);
        });
        return;
      }
      if (t.closest("#shareCopyImg")) {
        var btn = t.closest("#shareCopyImg");
        toBlob().then(function (blob) {
          if (!navigator.clipboard || !window.ClipboardItem) { flash(btn, S.copyImgFail); return; }
          navigator.clipboard.write([new ClipboardItem({ "image/png": blob })]).then(
            function () { flash(btn, S.copiedImg); },
            function () { flash(btn, S.copyImgFail); }
          );
        });
        return;
      }
      if (t.closest("#shareRaw")) {
        toBlob().then(function (blob) {
          window.open(URL.createObjectURL(blob), "_blank", "noopener");
        });
        return;
      }
      if (t.closest("#shareCopyLink")) {
        var linkBtn = t.closest("#shareCopyLink");
        var url = pageUrl();
        (navigator.clipboard && navigator.clipboard.writeText
          ? navigator.clipboard.writeText(url)
          : Promise.reject()).then(
            function () { flash(linkBtn, S.copiedLink); },
            function () { flash(linkBtn, S.copyLinkFail); }
          );
      }
    });
    modal.addEventListener("change", function (e) {
      if (e.target.id === "shareHl") { state.highlight = e.target.value; render(); }
      else if (e.target.id === "sharePick") { state.modelId = e.target.value; render(); }
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && modal && !modal.hidden) closeModal();
    });
  }

  // ===== 入口按钮 =====
  function addButton() {
    var page = document.getElementById("page-overview");
    if (!page) return;
    var bar = page.querySelector(".cite-bar");
    if (!bar) { setTimeout(addButton, 300); return; } // 引用条由 export.js 注入,稍后补
    if (bar.querySelector(".share-open-btn")) return;
    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "btn cite-btn share-open-btn";
    btn.textContent = S.btn;
    btn.title = EN ? "Generate a shareable leaderboard image" : "生成可分享的榜单图 / 单模型成绩卡";
    var cite = bar.querySelector("[data-cite-tab]");
    bar.insertBefore(btn, cite || null);
    btn.addEventListener("click", function () {
      if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { openModal("board"); });
      else openModal("board");
    });
  }

  // 发布倒计时区块的入口:挂在 release-tools 里(排序控件之后),直接以「发布倒计时」版式打开同一弹层。
  // 区块是 lazyRender 延迟渲染的,但工具条在 section 里始终存在,DOM 就绪后即可注入。
  function addReleaseButton() {
    var tools = document.querySelector(".release-tools");
    if (!tools) { setTimeout(addReleaseButton, 300); return; }
    if (tools.querySelector(".release-share-btn")) return;
    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "release-share-btn";
    btn.textContent = S.releaseBtn;
    btn.title = EN ? "Generate a shareable release-clock image" : "生成可分享的发布倒计时图";
    tools.appendChild(btn);
    btn.addEventListener("click", function () {
      if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { openModal("release"); });
      else openModal("release");
    });
  }

  function boot() { addButton(); addReleaseButton(); }

  if (document.readyState !== "loading") boot();
  else document.addEventListener("DOMContentLoaded", boot);
})();
