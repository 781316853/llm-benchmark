// 规格书皮肤动效:首屏入场、滚动揭示、表格/列表 stagger、跑马灯与吸顶导航兜底。
// 只加 class 与 CSS 变量,不改数据与渲染;减少动态效果时由 CSS 统一降级。
(function () {
  "use strict";
  var doc = document.documentElement;

  function markReady() { doc.classList.add("oct-ready"); }

  if (document.fonts && document.fonts.ready && document.fonts.ready.then) {
    document.fonts.ready.then(function () {
      requestAnimationFrame(function () { requestAnimationFrame(markReady); });
    });
  } else {
    setTimeout(markReady, 60);
  }
  setTimeout(markReady, 1800);

  function setStagger(sel, cap) {
    var nodes = document.querySelectorAll(sel);
    for (var i = 0; i < nodes.length; i++) {
      nodes[i].style.setProperty("--i", Math.min(i, cap));
    }
  }

  function init() {
    if (doc.getAttribute("data-oct-init") === "1") return;
    doc.setAttribute("data-oct-init", "1");

    var track = document.querySelector(".oct-ticker-track");
    var group = track && track.firstElementChild;
    if (group && !track.querySelector("[data-clone]")) {
      var clone = group.cloneNode(true);
      clone.setAttribute("aria-hidden", "true");
      clone.setAttribute("data-clone", "1");
      track.appendChild(clone);
    }

    setStagger(".news-toc-link, .news-card", 12);
    setStagger(".bench-item", 9);
    setStagger("#matrixTable tbody tr", 14);
    setStagger(".release-bar-row", 14);

    var fadeSel = ".page-head, .chart-box, .table-wrap, .auth-layout, .qc-hero, .cl-toolbar, .octa-sec, .notes-section, .md-details";
    var sections = document.querySelectorAll(
      ".overview-top, .matrix-section, .release-section, .footer, " + fadeSel
    );
    Array.prototype.forEach.call(sections, function (el) {
      el.classList.add("oct-reveal");
      if (el.matches && el.matches(fadeSel)) el.classList.add("oct-fade");
      if (!("IntersectionObserver" in window)) {
        el.classList.add("oct-in", "oct-stagger");
        return;
      }
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("oct-in", "oct-stagger");
          io.unobserve(entry.target);
          setTimeout(function () { entry.target.classList.remove("oct-stagger"); }, 1800);
        });
      }, { rootMargin: "0px 0px -10% 0px", threshold: 0.06 });
      io.observe(el);
    });

    var tabs = document.getElementById("tabs");
    if (tabs) {
      var sync = function () { tabs.classList.toggle("is-stuck", window.scrollY > 4); };
      window.addEventListener("scroll", sync, { passive: true });
      sync();
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () { setTimeout(init, 0); });
  } else {
    setTimeout(init, 0);
  }
})();
