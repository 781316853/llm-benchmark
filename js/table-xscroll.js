// llm2014 表格顶部横向滑动条,与表格滚动双向同步;仅在该页存在 #lmTable 时启用。
(function () {
  "use strict";
  var EN = /^en/i.test((document.documentElement.lang || "").toLowerCase());
  function init() {
    var table = document.getElementById("lmTable");
    var wrap = table && table.closest(".table-wrap");
    if (!table || !wrap) return;
    var slider = wrap.querySelector(".table-xscroll");
    if (!slider) {
      slider = document.createElement("div");
      slider.className = "table-xscroll";
      slider.setAttribute("role", "scrollbar");
      slider.setAttribute("aria-label", EN ? "Scroll table horizontally" : "横向滚动表格");
      slider.setAttribute("aria-orientation", "horizontal");
      slider.setAttribute("aria-controls", "lmTable");
      slider.setAttribute("aria-valuemin", "0");
      slider.setAttribute("aria-valuemax", "100");
      slider.setAttribute("aria-valuenow", "0");
      slider.tabIndex = 0;
      slider.innerHTML = '<div class="table-xscroll-thumb"></div>';
      wrap.insertBefore(slider, wrap.firstChild);
      wrap.classList.add("has-xscroll");
    }
    var thumb = slider.querySelector(".table-xscroll-thumb");
    function metrics() {
      var max = wrap.scrollWidth - wrap.clientWidth;
      var track = Math.max(1, slider.clientWidth - 12);
      var thumbW = max > 0 ? Math.max(48, track * wrap.clientWidth / wrap.scrollWidth) : track;
      return { max: max, track: track, thumbW: thumbW, maxLeft: Math.max(0, track - thumbW) };
    }
    function sync() {
      var ths = table.querySelectorAll("thead th");
      if (ths.length >= 2) {
        table.style.setProperty("--lm-c1", ths[0].getBoundingClientRect().width + "px");
        table.style.setProperty("--lm-c2", ths[1].getBoundingClientRect().width + "px");
      }
      var m = metrics();
      if (m.max <= 1) {
        slider.hidden = true;
        return;
      }
      slider.hidden = false;
      var left = m.max > 0 ? wrap.scrollLeft / m.max * m.maxLeft : 0;
      thumb.style.width = m.thumbW + "px";
      thumb.style.transform = "translateX(" + left + "px)";
      var pct = Math.round(wrap.scrollLeft / m.max * 100);
      slider.setAttribute("aria-valuenow", String(pct));
      slider.setAttribute("aria-valuetext", (EN ? "Table horizontal scroll " : "表格横向滚动 ") + pct + "%");
    }
    function scrollToLeft(left) {
      var m = metrics();
      wrap.scrollLeft = Math.max(0, Math.min(m.max, left));
      sync();
    }
    slider.addEventListener("pointerdown", function (e) {
      if (e.target === thumb || slider.hidden) return;
      var m = metrics();
      if (m.maxLeft <= 0) return;
      var rect = slider.getBoundingClientRect();
      var x = e.clientX - rect.left - 6 - m.thumbW / 2;
      scrollToLeft(Math.max(0, Math.min(m.maxLeft, x)) / m.maxLeft * m.max);
    });
    thumb.addEventListener("pointerdown", function (e) {
      if (slider.hidden) return;
      e.preventDefault();
      var m = metrics();
      if (m.maxLeft <= 0) return;
      var startX = e.clientX;
      var startScroll = wrap.scrollLeft;
      thumb.setPointerCapture(e.pointerId);
      function move(ev) {
        var delta = ev.clientX - startX;
        scrollToLeft(startScroll + delta / m.maxLeft * m.max);
      }
      function up() {
        thumb.removeEventListener("pointermove", move);
        thumb.removeEventListener("pointerup", up);
        thumb.removeEventListener("pointercancel", up);
      }
      thumb.addEventListener("pointermove", move);
      thumb.addEventListener("pointerup", up);
      thumb.addEventListener("pointercancel", up);
    });
    slider.addEventListener("keydown", function (e) {
      var m = metrics();
      var step = Math.max(48, wrap.clientWidth * 0.2);
      var next = wrap.scrollLeft;
      if (e.key === "ArrowLeft") next -= step;
      else if (e.key === "ArrowRight") next += step;
      else if (e.key === "PageDown") next += wrap.clientWidth;
      else if (e.key === "PageUp") next -= wrap.clientWidth;
      else if (e.key === "Home") next = 0;
      else if (e.key === "End") next = m.max;
      else return;
      e.preventDefault();
      scrollToLeft(next);
    });
    wrap.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);
    if (window.ResizeObserver) {
      var ro = new ResizeObserver(sync);
      ro.observe(wrap);
      ro.observe(table);
    }
    if (window.MutationObserver) {
      var mo = new MutationObserver(sync);
      mo.observe(table, { childList: true, subtree: true });
    }
    sync();
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
