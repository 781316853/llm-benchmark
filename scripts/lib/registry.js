// 数据源注册表(插件机制)
// 每个 sources/*.js 文件 require 时自注册:module.exports = register(class extends BaseSource {...})
// fetch_all.js 只需 require('./sources/*') 即装载全部源。
"use strict";
const CONFIG = require("./config");

var registry = [];   // [{id, name, SourceClass, host, ...cfg}]

function register(SourceClass) {
  // 实例化以读取 cfg(SourceClass 构造函数中 super(cfg) 已设置)
  var inst;
  try { inst = new SourceClass(); }
  catch (e) { console.log("[registry] 实例化失败: " + e.message); return SourceClass; }
  var cfg = inst.cfg || {};
  registry.push({
    id: cfg.id,
    name: cfg.name || cfg.id,
    host: cfg.host || cfg.id,
    SourceClass: SourceClass,
    enabled: cfg.enabled !== false
  });
  return SourceClass;
}

function all() { return registry.slice(); }
function enabled() { return registry.filter(function (r) { return r.enabled; }); }
function byId(id) { return registry.filter(function (r) { return r.id === id; })[0]; }
function clear() { registry = []; }

module.exports = {
  register: register,
  all: all,
  enabled: enabled,
  byId: byId,
  clear: clear
};
