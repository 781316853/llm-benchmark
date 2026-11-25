/* ============================================================================
   矩阵三层悬停联动 · 全站共用（事件委托，不依赖渲染时序）
   1) 数字悬停  2) 整行点亮  3) 整列点亮 + 列头加强  4) 非交叉区压暗
   任意 class="data-table" 的表格自动生效；加 class="no-mx" 可豁免。
   app.js 排序 / 筛选 / 导出后重渲染无需重新绑定：每次悬停都现查 DOM。
   ============================================================================ */
(function () {
  "use strict";
  if (window.__mxRestyle) return;
  window.__mxRestyle = true;

  var hotRow = null, hotCells = [], hotHeads = [], curCol = -1;

  function isTarget(table) {
    return !!table && table.classList &&
      table.classList.contains("data-table") &&
      !table.classList.contains("no-mx");
  }

  function clear() {
    if (!hotRow && !hotCells.length && !hotHeads.length) return;
    var i;
    if (hotRow) hotRow.classList.remove("is-hot");
    for (i = 0; i < hotCells.length; i++) hotCells[i].classList.remove("is-hot");
    for (i = 0; i < hotHeads.length; i++) hotHeads[i].classList.remove("is-hot");
    var on = document.querySelectorAll(".data-table.mx-on.is-hot, .data-table.mx-on.has-hot, .data-table.mx-on td.is-hot, .data-table.mx-on th.is-hot");
    for (i = 0; i < on.length; i++) {
      on[i].classList.remove("has-hot");
      on[i].classList.remove("is-hot");
    }
    hotRow = null; hotCells = []; hotHeads = []; curCol = -1;
  }

  function onOver(e) {
    var t = e.target;
    var td = t && t.closest ? t.closest("td, th") : null;
    if (!td || td.tagName !== "TD") {
      // 移到表头或表格外：保留列头高亮意义不大，直接清
      if (hotRow) clear();
      return;
    }
    var table = td.closest("table");
    if (!isTarget(table)) { if (hotRow) clear(); return; }

    var tr = td.parentNode;
    var col = td.cellIndex;
    if (tr === hotRow && col === curCol) return;

    clear();
    if (!table.classList.contains("mx-on")) table.classList.add("mx-on");
    table.classList.add("has-hot");
    hotRow = tr;
    tr.classList.add("is-hot");

    // 只有数值列（td.num）才做整列联动，文字列不参与
    if (!td.classList.contains("num")) { curCol = -1; return; }
    curCol = col;

    var body = table.tBodies[0];
    if (body) {
      for (var r = 0; r < body.rows.length; r++) {
        var c = body.rows[r].cells[col];
        if (c && c.classList.contains("num")) {
          c.classList.add("is-hot");
          hotCells.push(c);
        }
      }
    }

    // 列头：仅当表头列数与表体一致（无 rowspan/colspan 错位）时才对齐高亮
    var head = table.querySelector("thead tr:last-child");
    var bodyLen = body && body.rows.length ? body.rows[0].cells.length : 0;
    if (head && bodyLen && head.cells.length === bodyLen && head.cells[col]) {
      head.cells[col].classList.add("is-hot");
      hotHeads.push(head.cells[col]);
    }
  }

  document.addEventListener("mouseover", onOver, { passive: true });
  document.addEventListener("mouseleave", clear, true);
})();
