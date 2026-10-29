// 引用与导出:每个榜单页提供「引用此榜单」(纯文本 + BibTeX),每张数据表提供「CSV」按当前视图导出。
// 采用 IIFE + ES5 风格,与 app.js / feedback.js 保持一致。
// 表格由 app.js 反复重建(切页、排序、筛选、版本切换),故用 MutationObserver 监听主内容区,
// 重建后自动补回按钮;装饰幂等(已装饰的表格跳过),不会与自身写入的节点形成死循环。
(function () {
  "use strict";

  // 页签 -> 引文标题与快照日期取值的数据源(window.* 全局,updated 字段为数据日期)
  var PAGES = {
    overview: {
      title: "总览 · 交叉模型矩阵",
      src: ["DEEPSWE", "LLM2014", "ARENA_WEBDEV", "ARENA_AGENT", "TBENCH", "MODELDIAL", "ARENAOFBIAS", "AICODINGDAILY", "VALSVCB"]
    },
    llm2014: { title: "llm2014 Agentic 编程榜", src: ["LLM2014"] },
    modeldial: { title: "ModelDial 雷达", src: ["MODELDIAL"] },
    arenaofbias: { title: "亿模亿样 · 模型效果对比", src: ["ARENAOFBIAS"] },
    aicodingdaily: { title: "AI Coding Daily", src: ["AICODINGDAILY"] },
    valsvcb: { title: "VCB-1-100", src: ["VALSVCB"] },
    authority: {
      title: "权威基准测试",
      src: ["DEEPSWE", "TBENCH", "TBSCIENCE", "OSWORLD", "LASTEXAM", "ARCAGI3", "BENCHCAD", "APEX", "HLE",
        "NL2REPO", "PROGRAMBENCH", "VALSCODEMIGRATION", "CURSORBENCH", "FRONTIERCODE", "AACODING", "AUTOMATIONBENCH"]
    },
    plans: { title: "订阅套餐 · 额度/价格对比", src: ["CODINGPLAN"] },
    changelog: { title: "Agent 工具更新日志", src: ["CHANGELOG"] }
  };

  var SITE_NAME = "大模型编码基准整合门户";
  var SITE_AUTHOR = "LLM Benchmark Index";
  // 兜底站点根;正常情况下取当前页 <link rel="canonical">(每页 canonical 指向自己),
  // 换域名只改 scripts/build_pages.js 的 SITE 一处
  var FALLBACK_BASE = "https://781316853.github.io/llm-benchmark/";

  // ===== 小工具 =====
  function pad2(n) { return (n < 10 ? "0" : "") + n; }
  function ymd(d) { return d.getFullYear() + "-" + pad2(d.getMonth() + 1) + "-" + pad2(d.getDate()); }
  function compact(d) { return d.getFullYear() + pad2(d.getMonth() + 1) + pad2(d.getDate()); }

  // 页签的分享链接:每页是独立 URL,直接取本页 canonical(去掉查询串/hash)
  function pageUrl(tab) {
    var link = document.querySelector('link[rel="canonical"]');
    var href = link ? link.getAttribute("href") : "";
    if (href) return href.replace(/[?#].*$/, "");
    return FALLBACK_BASE + (tab === "overview" ? "" : tab + ".html");
  }

  // 该页数据的最新快照日期(取所辖数据源 updated 的最大值;数据未注入时返回 null)
  function snapshotDate(tab) {
    var cfg = PAGES[tab] || {};
    var max = null;
    (cfg.src || []).forEach(function (key) {
      var g = window[key];
      var u = g && g.updated;
      if (u && (!max || u > max)) max = u;
    });
    return max || null;
  }

  // 取元素纯文本;元素边界补空格,避免 #3 与 45.2 这类相邻徽标粘连;排序箭头不进 CSV
  function collectText(node, out) {
    for (var n = node.firstChild; n; n = n.nextSibling) {
      if (n.nodeType === 3) out.push(n.nodeValue);
      else if (n.nodeType === 1) {
        if (n.classList && n.classList.contains("sort-ind")) continue;
        out.push(" ");
        collectText(n, out);
      }
    }
  }
  function cellText(cell) {
    var out = [];
    collectText(cell, out);
    return out.join("").replace(/\u00a0/g, " ").replace(/\s+/g, " ").trim();
  }

  // ===== CSV =====
  // 表头展开:先按 rowspan/colspan 还原表头网格,再把同一列跨行的标签拼成「分组 / 列名」
  function headerLabels(table) {
    var rows = table.tHead ? table.tHead.rows : [];
    if (!rows.length) return [];
    var cells = [], used = {}, maxCol = 0;
    for (var r = 0; r < rows.length; r++) {
      var col = 0;
      var rowCells = rows[r].cells;
      for (var i = 0; i < rowCells.length; i++) {
        while (used[r + "," + col]) col++;
        var cell = rowCells[i];
        var rowSpan = cell.rowSpan || 1;
        if (rowSpan > rows.length - r || rowSpan <= 0) rowSpan = rows.length - r;
        var colSpan = cell.colSpan || 1;
        for (var dr = 0; dr < rowSpan; dr++) {
          for (var dc = 0; dc < colSpan; dc++) used[(r + dr) + "," + (col + dc)] = true;
        }
        cells.push({ r: r, c: col, label: cellText(cell) });
        col += colSpan;
        if (col > maxCol) maxCol = col;
      }
    }
    var labels = [];
    for (var c = 0; c < maxCol; c++) {
      var parts = [];
      for (var k = 0; k < cells.length; k++) {
        var item = cells[k];
        if (item.c !== c || !item.label) continue;
        if (item.label !== parts[parts.length - 1]) parts.push(item.label);
      }
      labels.push(parts.join(" / "));
    }
    return labels;
  }

  function csvCell(v) {
    v = v == null ? "" : String(v);
    return /[",\r\n]/.test(v) ? '"' + v.replace(/"/g, '""') + '"' : v;
  }

  // 导出表格当前视图(排序与筛选后的 DOM),UTF-8 BOM + CRLF 便于 Excel 直接打开
  function tableCsv(table) {
    var lines = [];
    var head = headerLabels(table);
    if (head.length) lines.push(head.map(csvCell).join(","));
    Array.prototype.forEach.call(table.rows, function (row) {
      if (row.parentNode && row.parentNode.tagName === "THEAD") return;
      var cells = [];
      for (var i = 0; i < row.cells.length; i++) {
        var cell = row.cells[i];
        cells.push(cellText(cell));
      }
      if (cells.length) lines.push(cells.map(csvCell).join(","));
    });
    return lines.join("\r\n") + "\r\n";
  }

  function download(name, text) {
    var blob = new Blob(["\ufeff" + text], { type: "text/csv;charset=utf-8" });
    if (window.navigator && window.navigator.msSaveBlob) { window.navigator.msSaveBlob(blob, name); return; }
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url;
    a.download = name;
    a.style.display = "none";
    document.body.appendChild(a);
    a.click();
    setTimeout(function () { document.body.removeChild(a); URL.revokeObjectURL(url); }, 0);
  }

  // ===== 弹窗(复用反馈弹窗的样式类)=====
  var modal = null;

  function ensureModal() {
    if (modal) return modal;
    modal = document.createElement("div");
    modal.id = "citeModal";
    modal.className = "feedback-modal cite-modal";
    modal.hidden = true;
    modal.innerHTML =
      '<div class="feedback-overlay" data-cite-close></div>' +
      '<div class="feedback-dialog" role="dialog" aria-modal="true" aria-labelledby="citeTitle">' +
        '<button class="feedback-close" type="button" data-cite-close aria-label="关闭">&times;</button>' +
        '<h3 class="feedback-title" id="citeTitle">引用此榜单</h3>' +
        '<p class="feedback-desc" id="citeMeta"></p>' +
        '<label class="feedback-label" for="citeText">纯文本</label>' +
        '<textarea class="feedback-textarea cite-text" id="citeText" rows="3" readonly></textarea>' +
        '<div class="cite-copy-row"><button class="btn cite-btn" type="button" data-copy="citeText">复制</button></div>' +
        '<label class="feedback-label" for="citeBib">BibTeX</label>' +
        '<textarea class="feedback-textarea cite-text" id="citeBib" rows="8" readonly></textarea>' +
        '<div class="cite-copy-row"><button class="btn cite-btn" type="button" data-copy="citeBib">复制</button></div>' +
        '<p class="cite-foot">综合分为榜内相对分(50 = 全池中位),不可跨日或跨快照比较;数据来源按 官方实测 &gt; 厂商发布 &gt; 第三方聚合 合并,低层级仅补缺。引用时请保留数据快照日期。</p>' +
      '</div>';
    document.body.appendChild(modal);
    bindModal();
    return modal;
  }

  function bindModal() {
    modal.addEventListener("click", function (e) {
      var t = e.target;
      if (t.closest("[data-cite-close]")) { closeModal(); return; }
      var btn = t.closest("[data-copy]");
      if (!btn) return;
      var field = document.getElementById(btn.getAttribute("data-copy"));
      if (field) copyText(field.value, btn);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && modal && !modal.hidden) closeModal();
    });
  }

  function copyText(text, btn) {
    var label = btn.textContent;
    function done() {
      btn.textContent = "已复制";
      btn.disabled = true;
      setTimeout(function () { btn.textContent = label; btn.disabled = false; }, 1200);
    }
    function fallback() {
      var ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      try { if (document.execCommand("copy")) done(); } catch (err) { /* 留作手动复制 */ }
      document.body.removeChild(ta);
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done, fallback);
    } else {
      fallback();
    }
  }

  function closeModal() {
    if (!modal) return;
    modal.hidden = true;
    decorate(); // 弹窗打开期间跳过的装饰在关闭后补一次
  }

  function openCite(tab) {
    var cfg = PAGES[tab] || { title: tab };
    var m = ensureModal();
    var snap = snapshotDate(tab);
    var url = pageUrl(tab);
    var today = ymd(new Date());
    var title = SITE_NAME + " — " + cfg.title;

    var plain = SITE_NAME + ".「" + cfg.title + "」. " +
      (snap ? "数据快照 " + snap + ". " : "") +
      url + " (访问于 " + today + ").";

    var key = "llmbench-" + tab + (snap ? "-" + snap.replace(/-/g, "") : "");
    var bib = "@misc{" + key + ",\n" +
      "  author       = {{" + SITE_AUTHOR + "}},\n" +
      "  title        = {" + title + "},\n" +
      "  year         = {" + today.slice(0, 4) + "},\n" +
      "  howpublished = {\\url{" + url + "}},\n" +
      "  note         = {" + (snap ? "数据快照 " + snap + ";" : "") + "访问于 " + today + "},\n" +
      "  language     = {chinese}\n" +
      "}";

    document.getElementById("citeText").value = plain;
    document.getElementById("citeBib").value = bib;
    document.getElementById("citeMeta").textContent =
      (snap ? "数据快照 " + snap + " · " : "") + "数值随每日刷新变化,引用请保留快照日期。";
    m.hidden = false;
  }

  // ===== 装饰页面 =====
  function activeTab() {
    var page = document.querySelector(".page.active");
    return page && /^page-/.test(page.id) ? page.id.slice(5) : null;
  }

  // 页面级「引用」条:插在页头之后(总览页头是矩阵工具区,插在矩阵标题之后)
  function addCiteBar(page, tab) {
    if (page.querySelector(".cite-bar")) return;
    var head = page.querySelector(".page-head") || page.querySelector(".matrix-head");
    if (!head) return;
    var bar = document.createElement("div");
    bar.className = "cite-bar";
    bar.innerHTML =
      '<p class="cite-bar-note">数据随每日刷新变化;引用或转载请保留快照日期与来源链接</p>' +
      '<button class="btn cite-btn" type="button" data-cite-tab="' + tab + '">引用此榜单</button>';
    head.parentNode.insertBefore(bar, head.nextSibling);
  }

  // 表格右上角 CSV 按钮;插在表格容器内,导出的是当前排序/筛选后的视图
  function addTableButtons(page, tab) {
    var tables = page.querySelectorAll("table");
    for (var i = 0; i < tables.length; i++) {
      var table = tables[i];
      if (!table.tBodies[0] || !table.rows.length) continue;
      var wrap = table.closest(".table-wrap") || table.closest(".qc-table-scroll") || table.parentNode;
      if (!wrap || wrap.querySelector(".tbl-tools")) continue;
      var tools = document.createElement("div");
      tools.className = "tbl-tools";
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "tbl-csv";
      btn.textContent = "CSV";
      btn.title = "导出本表(当前排序与筛选后的视图)为 CSV";
      btn.setAttribute("data-csv-table", tab + "|" + i);
      btn._table = table;
      tools.appendChild(btn);
      wrap.insertBefore(tools, wrap.firstChild);
    }
  }

  function decorate() {
    if (modal && !modal.hidden) return; // 弹窗打开时页面元素被重置也无妨,关闭后再补
    var tab = activeTab();
    if (!tab || !PAGES[tab]) return;
    var page = document.getElementById("page-" + tab);
    if (!page) return;
    addCiteBar(page, tab);
    addTableButtons(page, tab);
  }

  // 事件委托:按钮会被页面重建时移除,故挂在 document 上
  function onClick(e) {
    var cite = e.target.closest ? e.target.closest("[data-cite-tab]") : null;
    if (cite) { openCite(cite.getAttribute("data-cite-tab")); return; }
    var csv = e.target.closest ? e.target.closest("[data-csv-table]") : null;
    if (!csv || !csv._table) return;
    var parts = csv.getAttribute("data-csv-table").split("|");
    var tab = parts[0], idx = parts[1];
    var page = document.getElementById("page-" + tab);
    var tables = page ? page.querySelectorAll("table") : [];
    var table = csv._table && csv._table.isConnected ? csv._table : tables[Number(idx)];
    if (!table) return;
    var name = "llm-benchmark_" + tab + "_" + (table.id || "table" + (Number(idx) + 1)) +
      "_" + compact(new Date()) + ".csv";
    download(name, tableCsv(table));
  }

  function init() {
    if (!document.querySelector(".content")) return;
    document.addEventListener("click", onClick);
    var target = document.querySelector(".content");
    if (target && window.MutationObserver) {
      var pending = false;
      var obs = new MutationObserver(function () {
        if (pending) return;
        pending = true;
        (window.requestAnimationFrame || function (f) { return setTimeout(f, 16); })(function () {
          pending = false;
          decorate();
        });
      });
      obs.observe(target, { childList: true, subtree: true });
    }
    decorate();
  }

  // 供 app.js 切页后立即补一次(不必等 MutationObserver 的下一帧)
  window.EXP = { decorate: decorate };

  if (document.readyState !== "loading") init();
  else document.addEventListener("DOMContentLoaded", init);
})();
