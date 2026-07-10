// 意见反馈:浮动按钮弹窗 + 跳转 GitHub Issue 提交。
// 采用 IIFE + ES5 风格,与 app.js 保持一致。
(function () {
  "use strict";

  // 项目 GitHub 仓库的 Issue 新建地址
  var ISSUE_URL = "https://github.com/781316853/llm-benchmark/issues/new";

  var modal, typeSelect, contentArea;

  // 打开弹窗:移除 hidden 属性,聚焦输入框,绑定 ESC 关闭
  function openModal() {
    modal.hidden = false;
    // 延迟聚焦,等待弹窗渲染完成
    setTimeout(function () { if (contentArea) contentArea.focus(); }, 50);
    document.addEventListener("keydown", onKeydown);
  }

  // 关闭弹窗:恢复 hidden,清空输入,移除 ESC 监听
  function closeModal() {
    modal.hidden = true;
    if (contentArea) contentArea.value = "";
    document.removeEventListener("keydown", onKeydown);
  }

  // ESC 键关闭弹窗
  function onKeydown(e) {
    if (e.key === "Escape") closeModal();
  }

  // 构造带预填参数的 GitHub Issue URL 并在新标签打开
  function submitFeedback() {
    var type = typeSelect ? typeSelect.value : "其他";
    var content = contentArea ? contentArea.value.trim() : "";
    // 标题:反馈类型 + 内容首行摘要(截断至 50 字)
    var firstLine = content ? content.split("\n")[0].slice(0, 50) : "";
    var title = "【" + type + "】" + firstLine;
    // 正文:反馈内容 + 环境信息,便于维护者定位
    var body = "### " + type + "\n\n" + content +
      "\n\n---\n页面地址: " + location.href +
      "\n提交时间: " + new Date().toLocaleString("zh-CN");
    // URL 编码后跳转,预填标题与正文
    var url = ISSUE_URL +
      "?title=" + encodeURIComponent(title) +
      "&body=" + encodeURIComponent(body);
    window.open(url, "_blank");
    closeModal();
  }

  // 绑定所有交互事件（逐个检查元素存在性，避免空指针异常）
  function bindEvents() {
    var fab = document.getElementById("feedbackFab");
    var close = document.getElementById("feedbackClose");
    var cancel = document.getElementById("feedbackCancel");
    var overlay = document.getElementById("feedbackOverlay");
    var submit = document.getElementById("feedbackSubmit");

    if (fab) fab.addEventListener("click", openModal);
    if (close) close.addEventListener("click", closeModal);
    if (cancel) cancel.addEventListener("click", closeModal);
    if (overlay) overlay.addEventListener("click", closeModal);
    if (submit) submit.addEventListener("click", submitFeedback);
  }

  // 缓存 DOM 引用并绑定事件
  function init() {
    modal = document.getElementById("feedbackModal");
    typeSelect = document.getElementById("feedbackType");
    contentArea = document.getElementById("feedbackContent");
    if (!modal) return;
    bindEvents();
  }

  if (document.readyState !== "loading") init();
  else document.addEventListener("DOMContentLoaded", init);
})();
