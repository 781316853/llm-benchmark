// window.X 文件写入器与通用工具(迁移自原 fetch_all.js)
// 提供差异写入、沙箱读取、seen 维护等共享能力。
"use strict";
const fs = require("fs");
const path = require("path");
const CONFIG = require("./config");

// 仅当内容变化时写入,避免无意义提交(迁移自原 writeFileIfChanged)
function writeFileIfChanged(file, content) {
  const prev = fs.existsSync(file) ? fs.readFileSync(file, "utf8") : "";
  if (prev === content) {
    console.log("  (无变化,跳过) " + path.basename(file));
    return false;
  }
  fs.writeFileSync(file, content);
  console.log("  ✓ 写入 " + path.basename(file) + " (" + content.length + " 字节)");
  return true;
}

// 把内容作为 window.X = <contentBody>; 形式写入 data/<file>
// 注:contentBody 应为完整对象字面量(不含 window.X = 前缀与末尾分号)
function writeWindowVar(outFile, windowVar, contentBody) {
  const file = path.join(CONFIG.DATA_DIR, outFile);
  writeFileIfChanged(file, contentBody);
}

// 沙箱读取 data/*.js 中某个 window 全局变量(避免 require 缓存污染,迁移自 loadJsGlobal)
function loadJsGlobal(file, varName) {
  const p = path.join(CONFIG.DATA_DIR, file);
  if (!fs.existsSync(p)) return null;
  const txt = fs.readFileSync(p, "utf8");
  const sandbox = { window: {} };
  try { new Function("window", txt)(sandbox.window); }
  catch (e) { console.log("  ! 解析 " + file + " 失败:" + e.message); return null; }
  return sandbox.window[varName];
}

// 读取既有 seen.js -> {since, updated, entries};文件不存在视为首启(迁移自 loadSeen)
function loadSeen() {
  const p = path.join(CONFIG.DATA_DIR, "seen.js");
  if (!fs.existsSync(p)) return null;
  const txt = fs.readFileSync(p, "utf8");
  const m = txt.match(/window\.SEEN\s*=\s*(\{[\s\S]*\})\s*;?\s*$/);
  if (!m) return null;
  try { return eval("(" + m[1] + ")"); }   // eslint-disable-line no-eval
  catch (e) { return null; }
}

// 写出 window.X = <obj>; 文件的便捷构造器
// 自动把 JSON 中的双引号替换为单引号(与原脚本输出一致,避免在 window.X = 赋值上下文的语法问题)
function windowVarTemplate(windowVar, headerComment, obj) {
  const body = JSON.stringify(obj, null, 2).replace(/"/g, "'");
  return (headerComment || "") + "window." + windowVar + " = " + body + ";\n";
}

module.exports = {
  writeFileIfChanged: writeFileIfChanged,
  writeWindowVar: writeWindowVar,
  loadJsGlobal: loadJsGlobal,
  loadSeen: loadSeen,
  windowVarTemplate: windowVarTemplate
};
