// 英文站运行时翻译:以中文原文为 key,渲染后遍历 DOM 替换文本与提示属性。
// 为什么放在渲染之后做:站点内容主要由 app.js 动态生成,逐处改源码代价大且易漏;
// 这里用一张「中文原文 → 英文」表 + 正则规则统一处理,未收录的字符串原样保留(渐进补译)。
// 仅当 <html lang="en"> 且已加载 js/i18n-en.js 时生效,中文站零开销。
//
// 字典分两种:
//   dict —— 纯文本(文本节点或单个属性值),按「去首尾空白 + 空白折叠」后的原文精确匹配
//   html —— 含内联标签(<b>/<a>/<code> 等)的整块文案,key 为实现后 textContent 的折叠结果,
//           命中时整体替换 innerHTML,避免中文语序下的片段拆译
// rules —— [正则, 替换] 处理带变量的模板文案(日期、名次、价格等),按声明顺序取第一条匹配
(function () {
  "use strict";
  var EN = window.I18N_EN;
  var lang = (document.documentElement.getAttribute("lang") || "").toLowerCase();
  if (!EN || lang.indexOf("en") !== 0) return;

  var DICT = EN.dict || {};
  var HTML = EN.html || {};
  var CTX = EN.ctx || {};
  var RULES = (EN.rules || []).map(function (r) { return [new RegExp(r[0]), r[1]]; });
  var ATTRS = ["title", "placeholder", "aria-label", "alt"];
  var CJK = /[\u4e00-\u9fa5]/;
  var NUM = /\d+(?:[.,]\d+)*/g;
  var NUM_IDX = null;

  function norm(s) {
    return String(s).replace(/\s+/g, " ").trim();
  }

  function applyRules(s) {
    for (var i = 0; i < RULES.length; i++) {
      if (!RULES[i][0].test(s)) continue;
      var rep = RULES[i][1];
      return typeof rep === "function" ? s.replace(RULES[i][0], rep) : s.replace(RULES[i][0], rep);
    }
    return null;
  }

  // 数字容错:快照日期、价格、条数每天/每次刷新都在变,不宜逐条写死。
  // 这里把数字位映射成占位符查同一张表,再把当前数字按出现顺序填回译文的数字位。
  function masked(s) {
    if (!NUM_IDX) {
      NUM_IDX = {};
      Object.keys(DICT).forEach(function (k) {
        var mk = k.replace(NUM, "\u0001");
        if (!Object.prototype.hasOwnProperty.call(NUM_IDX, mk)) NUM_IDX[mk] = k;
      });
    }
    var zhKey = NUM_IDX[s.replace(NUM, "\u0001")];
    if (!zhKey) return null;
    var nums = s.match(NUM) || [];
    var i = 0;
    return DICT[zhKey].replace(NUM, function (m) { return i < nums.length ? nums[i++] : m; });
  }

  function lookup(s) {
    if (Object.prototype.hasOwnProperty.call(DICT, s)) return DICT[s];
    // 表头提示由 app.js 在列说明后统一拼「点击按此列排序」:先译主体再补后缀
    if (/ 点击按此列排序$/.test(s)) {
      var base = lookup(s.replace(/ 点击按此列排序$/, ""));
      if (base !== null) return base + " · Click to sort by this column";
    }
    var out = applyRules(s);
    if (out !== null) return out;
    return masked(s);
  }

  function translateText(node) {
    var raw = node.nodeValue;
    if (!raw || !CJK.test(raw)) return;
    var trimmed = raw.trim();
    if (!trimmed) return;
    // 语境覆盖:同一中文在不同版面语义不同(卡片统计里的「模型」是复数、表头是单数)
    var ctx = node.parentElement && node.parentElement.closest && node.parentElement.closest("[data-i18n-ctx]");
    if (ctx) {
      var scope = CTX[ctx.getAttribute("data-i18n-ctx")];
      if (scope && Object.prototype.hasOwnProperty.call(scope, trimmed)) {
        node.nodeValue = raw.replace(trimmed, scope[trimmed]);
        return;
      }
    }
    var out = lookup(norm(trimmed));
    if (out === null || out === trimmed) return;
    node.nodeValue = raw.replace(trimmed, out);
  }

  function translateEl(el) {
    for (var i = 0; i < ATTRS.length; i++) {
      var a = ATTRS[i];
      var v = el.getAttribute(a);
      if (!v || !CJK.test(v)) continue;
      var out = lookup(norm(v));
      if (out && out !== v) el.setAttribute(a, out);
    }
  }

  function htmlFor(el) {
    if (!el.querySelector || !el.querySelector("*")) return null;
    var key = norm(el.textContent || "");
    if (!key || !CJK.test(key) || !Object.prototype.hasOwnProperty.call(HTML, key)) return null;
    return HTML[key];
  }

  function walk(root) {
    if (!root) return;
    if (root.nodeType === 3) { translateText(root); return; }
    if (root.nodeType !== 1 && root.nodeType !== 9 && root.nodeType !== 11) return;

    // 整块文案(含内联标签)先替换:自上而下,外层命中后其子树已是英文,不再重复处理
    var all = root.querySelectorAll ? root.querySelectorAll("*") : [];
    for (var i = 0; i < all.length; i++) {
      var el = all[i];
      if (!el.isConnected || el.closest("[data-i18n-html]")) continue;
      var out = htmlFor(el);
      if (out === null) continue;
      el.innerHTML = out;
      el.setAttribute("data-i18n-html", "1");
    }

    var w = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT);
    var n;
    while ((n = w.nextNode())) {
      if (n.nodeType === 3) translateText(n);
      else if (n.tagName !== "SCRIPT" && n.tagName !== "STYLE") translateEl(n);
    }
  }

  var scheduled = false;
  function schedule() {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(function () {
      scheduled = false;
      walk(document.body);
    });
  }

  function mutated(muts) {
    for (var i = 0; i < muts.length; i++) {
      var m = muts[i];
      if (m.type === "characterData") {
        if (CJK.test(m.target.nodeValue || "")) return true;
      } else if (m.type === "childList") {
        for (var j = 0; j < m.addedNodes.length; j++) {
          var n = m.addedNodes[j];
          if (n.nodeType === 3) {
            if (CJK.test(n.nodeValue || "")) return true;
          } else if (n.nodeType === 1 && CJK.test(n.textContent || "")) return true;
        }
      }
    }
    return false;
  }

  function reveal() {
    document.documentElement.classList.remove("i18n-pending");
  }

  function start() {
    walk(document.body);
    // 先译静态骨架,再让出两帧给 app.js 的首屏渲染,随后淡入;动态表格由 MutationObserver 补齐
    requestAnimationFrame(function () {
      setTimeout(reveal, 120);
    });
    if (!window.MutationObserver) return;
    new MutationObserver(function (muts) {
      // 自身替换产生的英文变更不含中文,不会再次排队,避免自激循环
      if (mutated(muts)) schedule();
    }).observe(document.body, { childList: true, subtree: true, characterData: true });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start);
  else start();

  window.I18N = { walk: walk, lookup: lookup };
})();
