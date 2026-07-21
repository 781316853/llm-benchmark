// 数据源抽象基类(模板方法模式)
// 统一所有数据源的生命周期:fetch -> parse -> toStandard -> write -> 返回标准化结果
// 子类只需实现 parse() 与 toStandard()(以及必要的 writeContent() 自定义输出格式)。
"use strict";
const CONFIG = require("./config");
const transport = require("./transport");
const writers = require("./writers");

class BaseSource {
  /**
   * @param {object} cfg  数据源配置
   *   id           源唯一标识(如 "deepswe_v11")
   *   name         展示名(如 "DeepSWE v1.1")
   *   type         类型标签(如 "json" / "html" / "csv" / "rsc" / "api")
   *   url          主 URL(多 URL 源可自行在 fetch 中处理)
   *   host         host 分组(限流用);缺省从 url 解析
   *   retries      覆盖重试次数(可选)
   *   outFile      输出 data/*.js 文件名(如 "deepswe.js");无输出文件则留空
   *   windowVar    输出的 window.X 变量名(如 "DEEPSWE")
   *   enabled      是否启用(默认 true)
   */
  constructor(cfg) {
    this.cfg = Object.assign({ enabled: true, retries: CONFIG.transport.retries }, cfg);
    if (!cfg.host && cfg.url) {
      try { this.cfg.host = new URL(cfg.url).host; } catch (e) { this.cfg.host = cfg.id; }
    }
  }

  // ===== 模板方法:抓取 -> 解析 -> 标准化 -> 写入 =====
  // 返回 { standard, raw } 供校验引擎使用;失败抛错(由 pipeline 的 try/catch 兜底)。
  // parse 可为 sync 或 async(多文件源如 llm2014 需在解析阶段抓取多个月份 CSV)。
  async run() {
    if (!this.cfg.enabled) return { standard: [], raw: null, skipped: true };
    console.log("[" + this.cfg.name + "] 抓取 " + (this.cfg.url || "(多 URL)"));
    const raw = await this.fetch();
    const parsed = await this.parse(raw);
    if (parsed == null) throw new Error(this.cfg.name + " 未解析到任何数据");
    if (Array.isArray(parsed) && parsed.length === 0) throw new Error(this.cfg.name + " 未解析到任何数据");
    if (parsed.models != null && Array.isArray(parsed.models) && parsed.models.length === 0 && parsed.months == null) {
      throw new Error(this.cfg.name + " 未解析到任何数据");
    }
    const standard = this.toStandard(parsed);
    await this.write(parsed, standard);
    return { standard: standard, raw: parsed, skipped: false };
  }

  // ===== 可被子类覆盖 =====
  // 抓取原始文本/JSON;默认对单 url 调用 fetchWithRetry
  async fetch() {
    if (!this.cfg.url) throw new Error(this.cfg.id + ": 未配置 url 且未覆盖 fetch()");
    return transport.fetchWithRetry(this.cfg.url, { retries: this.cfg.retries });
  }

  // 子类必须实现:原始文本 -> 源特定结构数组
  parse(raw) { throw new Error(this.cfg.id + ": parse() 未实现"); }

  // 子类必须实现:源特定结构 -> 统一 schema(normalizer.toStandard 默认可处理部分场景)
  toStandard(parsed) { throw new Error(this.cfg.id + ": toStandard() 未实现"); }

  // 写入 data/*.js;子类可覆盖 writeContent() 自定义输出格式。
  // 默认实现:若提供 outFile + writeContent 则调用 writers.writeWindowVar
  async write(parsed, standard) {
    if (!this.cfg.outFile || !this.cfg.windowVar) return;  // 无输出文件的源(如 datalearner 仅作补充)
    const content = this.writeContent(parsed, standard);
    if (content == null) return;
    writers.writeWindowVar(this.cfg.outFile, this.cfg.windowVar, content);
  }

  // 子类覆盖:返回完整文件内容字符串(含 window.X = {...};)
  writeContent(parsed, standard) { return null; }
}

module.exports = BaseSource;
