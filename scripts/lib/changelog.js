// AI Agent 工具更新日志汇总(data/changelog.js)
// 汇总 11 个 Agent 工具(Codex / Claude Code / OpenCode / Kimi Code / Qoder CN / Qoder CN IDE /
// TraeCode / TraeWork / ZCode / CodeBuddy / WorkBuddy)的官方 changelog,按工具分组展示,
// 每条保留源站完整正文(不摘要)。
// 与 news.js / codingplan.js 同模式:在 fetch_all.js 末尾旁路调用,不进基准 registry
// (避免被 validator.js 当基准源校验、污染 quality.js 与综合分口径 —— 本模块是非分数数据)。
//
// 各源 kind 与实测依据(2026-09-24 逐个验证过真实响应,详见 config.changelog.tools 注释):
//   github    双路合并:Releases REST API 分页(按 created_at 排,给深度历史)+ releases.atom
//             (按发布时间排,固定最新 10 条,补 API 排序漏掉的「建得早、发得晚」版本线)。
//             单独用 Atom 不行:它只回 10 条,openai/codex 最新 10 条只跨 1.5 天,撑不起两周窗口。
//   qoder     docs.qoder.cn 更新日志页服务端渲染的 update-label/description/content 区块;
//             Qoder CN(0.4.x)与 Qoder CN IDE(1.32.x)是两套版本编号,各占一页、各成一张卡。
//   trae      trae.cn/changelog 服务端渲染的 versionEntry 区块;备源 trae.ai/api/changelog
//             (飞书文档 block 树,带分页),仅主源解析出 0 条时启用。单页混排 TraeCode /
//             TraeWork / TRAE APP 三种产品线标签,按 tool.products 拆卡、未列出者丢弃。
//   zcode     zcode.z.ai/changelog 服务端渲染;日期是中文「2026年9月22日」。
//   codebuddy codebuddy.cn/docs 文档页(Docusaurus / VitePress)的服务端渲染标题区块,
//             标题自带 id 锚点 -> 可做版本级深链;CodeBuddy 与 WorkBuddy 共用此解析器。
//
// fail-soft:单个工具抓取/解析失败绝不影响其余工具 —— fetchTool 永不外抛,失败时用旧文件里
// 该工具的条目回填并标 status:"stale";整模块抛错由 fetch_all.js 的 try/catch 兜底,
// writers.writeFileIfChanged 保证不会写坏数据文件。
"use strict";
const CONFIG = require("./config");
const transport = require("./transport");
const writers = require("./writers");
const news = require("./news");   // 复用 normalizeDate / hasCJK / translateToZh / resetEndpointState

const ZERO_WIDTH = /[\u200b-\u200d\ufeff]/g;

// ===== 通用文本处理 =====

// HTML 实体反转义(顺序同 news.decodeEntities:& 最后处理,避免 &amp;lt; 二次解码)
function decodeEnt(s) {
  return String(s)
    .replace(/&#x([0-9a-fA-F]+);/g, function (m, h) { return String.fromCodePoint(parseInt(h, 16)); })
    .replace(/&#(\d+);/g, function (m, d) { return String.fromCodePoint(Number(d)); })
    .replace(/&nbsp;/g, " ")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&");
}

// 行内文本:去标签 + 解实体 + 压水平空白(保留单个空格,不动换行)
function inlineText(html) {
  return decodeEnt(String(html || "")
    .replace(/<[^>]+>/g, " ")
    .replace(ZERO_WIDTH, " "))
    .replace(/[ \t\u00a0]+/g, " ")
    .trim();
}

// HTML 区块 -> 纯文本正文:<li> 转 "- " 行、块级标签转换行,保留全部明细(不做摘要、不截断)
function htmlToBody(html) {
  var s = String(html || "")
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<svg[\s\S]*?<\/svg>/gi, " ")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<li\b[^>]*>/gi, "\n- ")
    .replace(/<\/(?:p|div|h[1-6]|li|ul|ol|section|article|blockquote|pre|tr)>/gi, "\n");
  s = decodeEnt(s.replace(/<[^>]+>/g, " ").replace(ZERO_WIDTH, " "));
  var lines = s.split("\n")
    .map(function (l) { return l.replace(/[ \t\u00a0]+/g, " ").trim(); })
    .filter(function (l) { return l && l !== "-"; });
  return lines.join("\n");
}

// 小节标签:取区块内的小标题(h1-h4 / 整行加粗 / markdown 标题),用于前端打 chip。
// 只收 <=12 字的短标签(「新增功能」「体验优化」「BUG修复」这类),长标题不是分类。
function sectionTags(htmlOrText) {
  var s = String(htmlOrText || ""), out = [], m;
  var re = /<(h[1-4]|strong|b)\b[^>]*>([\s\S]*?)<\/\1>/gi;
  while ((m = re.exec(s))) {
    var t = inlineText(m[2]);
    if (t && t.length <= 12 && out.indexOf(t) < 0) out.push(t);
  }
  s.split("\n").forEach(function (line) {
    var mm = line.match(/^#{1,4}\s+(.+?)\s*#*$/);
    if (!mm) return;
    var t2 = inlineText(mm[1]);
    if (t2 && t2.length <= 12 && out.indexOf(t2) < 0) out.push(t2);
  });
  return out.slice(0, 6);
}

function pad2(v) { var n = parseInt(v, 10); return (n < 10 ? "0" : "") + n; }

// ===== 日期归一 -> UTC YYYY-MM-DD =====
// 各家格式差异实测:GitHub/Qoder 是 ISO8601(带 Z)、CodeBuddy 是 "4.12.1 (2026-09-20)"、
// WorkBuddy 是全角 "（2026-09-21）"、ZCode 是中文「2026年9月22日」、Trae 是裸 "2026-09-01"。
// news.normalizeDate 走 Date.parse,对中文格式必然失败 -> 中文与 YYYY-M-D 需先自行匹配。
// 解析不出日期返回 "",调用方丢弃该条(没有日期就无法参与两周窗口过滤)。
function normDate(raw) {
  var s = String(raw || "").replace(/[\uff08\uff09]/g, function (c) { return c === "\uff08" ? "(" : ")"; })
    .replace(ZERO_WIDTH, "").trim();
  if (!s) return "";
  var m = s.match(/(\d{4})\s*年\s*(\d{1,2})\s*月\s*(\d{1,2})\s*日?/);
  if (m) return m[1] + "-" + pad2(m[2]) + "-" + pad2(m[3]);
  m = s.match(/(\d{4})[-/](\d{1,2})[-/](\d{1,2})/);
  if (m) return m[1] + "-" + pad2(m[2]) + "-" + pad2(m[3]);
  return news.normalizeDate(s, "");
}

// ===== 条目构造与去重 =====
// mkEntry 统一裁掉空值字段:日期缺失由调用方判定丢弃,url 缺失回退到工具日志页
function mkEntry(tool, e) {
  var date = normDate(e.dateRaw || e.date);
  if (!date) return null;
  var version = String(e.version || "").replace(ZERO_WIDTH, "").trim();
  var body = String(e.body || "").replace(/\r\n?/g, "\n").trim();
  return {
    version: version,
    title: String(e.title || version || "").trim() || tool.name,
    date: date,
    dateRaw: String(e.dateRaw || "").replace(ZERO_WIDTH, "").trim(),
    tags: (e.tags || []).concat(),
    url: e.url || tool.changelogUrl,
    body: body
  };
}

// 条目唯一键:url + 版本 + 日期。
// 只按「版本+日期」会把同一天的不同发布误判成重复 —— openai/codex 的 rust-v0.154.0 与
// python-v0.154.0 清洗后同为 0.154.0、同日发布,丢一条就是丢一次真实更新;
// 而 Qoder 全部条目共用同一个日志页 URL,故 url 必须与版本/日期一起参与键,不能单独作键。
function entryKey(it) {
  return (it.url || "") + "|" + (it.version || it.title) + "|" + it.date;
}

// 新条目优先,旧条目仅补充新数据里没有的(源站撤下历史版本时不丢档,支撑「全量入库」)
function mergeEntries(fresh, old) {
  var map = {}, out = [];
  [].concat(fresh || [], old || []).forEach(function (it) {
    var k = entryKey(it);
    if (map[k]) return;
    map[k] = true;
    out.push(it);
  });
  out.sort(function (a, b) { return a.date === b.date ? 0 : (a.date > b.date ? -1 : 1); });
  return out;
}

// ===== 解析器:GitHub Releases =====
// 版本号清洗:npm monorepo 的 tag 形如 @scope/pkg@2.1.0(取最后一个 @ 之后的版本段),
// 另有 rust-v0.158.0 这类项目前缀;两者都要剥掉,否则页面显示成 "v@moonshot-ai/kimi-code@2.1.0"。
function cleanVersion(tag) {
  var s = String(tag || "").trim();
  var at = s.lastIndexOf("@");
  if (at > 0) s = s.slice(at + 1);
  return s.replace(/^[a-z]+-/i, "").replace(/^[vV]/, "");
}

// 预发布判定:API 的 prerelease 标记 + tag 尾缀兜底。
// codex 的 rust-v0.158.0-alpha.8 这类即便未标 prerelease 也属预发布,一律不收(见 config 口径)。
function isPrerelease(tag, flag) {
  return !!flag || /[-.](alpha|beta|rc|canary|nightly|preview|dev)([.\-_]?\d*)?$/i.test(String(tag || ""));
}

function parseGithubReleases(tool, releases) {
  var out = [];
  (releases || []).forEach(function (r) {
    if (!r || r.draft) return;
    if (!CONFIG.changelog.includePrerelease && isPrerelease(r.tag_name, r.prerelease)) return;
    var body = String(r.body || "").replace(/\r\n?/g, "\n").trim();
    out.push(mkEntry(tool, {
      version: cleanVersion(r.tag_name),
      title: inlineText(r.name || r.tag_name || ""),
      dateRaw: r.published_at || r.created_at,
      tags: sectionTags(body),
      url: r.html_url,
      body: body
    }));
  });
  // mkEntry 在日期完全解析不出时返回 null(没有日期就无法参与窗口过滤),必须剔除,
  // 否则 null 流到 mergeEntries 读 it.url 会抛错、把整个源的抓取判成失败。
  return out.filter(Boolean);
}

// ===== 解析器:Qoder(Next.js RSC payload) =====
// 页面正文不在 DOM 里,而在若干 self.__next_f.push([1,"<JS 字符串字面量>"]) 中。
// 逐个把字面量按 JSON 字符串反转义后拼接,得到 RSC 数据流;再用花括号配平扫出全部对象。
// 不能按换行切行:RSC 行索引是十六进制(如 `8a:`),且 body 里含真实换行会把行切断。
// (此解析器服务于国际版 qoder.com/changelog;CN 版见下方 parseQoderCn,当前源站配置用 CN 版。)
function collectNextPayload(html) {
  var re = /self\.__next_f\.push\(\s*\[1\s*,\s*("(?:[^"\\]|\\.)*")\s*\]\s*\)/g;
  var m, acc = "";
  while ((m = re.exec(String(html || "")))) {
    try { acc += JSON.parse(m[1]); } catch (e) { /* 单块解码失败不影响其余块 */ }
  }
  return acc;
}

// 扫描文本中所有「位于字符串之外、花括号配平」的 JSON 对象,保留含 key 的那些。
// 只在大括号层返回 0 时试解,因此数组内的同级对象也能取到,嵌套对象不会重复取。
function extractJsonObjects(text, key) {
  var out = [], depth = 0, start = -1, inStr = false, esc = false;
  for (var i = 0; i < text.length; i++) {
    var c = text.charAt(i);
    if (inStr) {
      if (esc) esc = false;
      else if (c === "\\") esc = true;
      else if (c === '"') inStr = false;
      continue;
    }
    if (c === '"') { inStr = true; continue; }
    if (c === "{") { if (depth === 0) start = i; depth++; continue; }
    if (c !== "}") continue;
    if (depth > 0 && --depth === 0 && start >= 0) {
      var slice = text.slice(start, i + 1);
      if (slice.indexOf(key) >= 0 && slice.length < 200000) {
        try {
          var obj = JSON.parse(slice);
          if (obj && typeof obj === "object" && obj[key] != null) out.push(obj);
        } catch (e) { /* 非 JSON 片段(如 JS 对象字面量)忽略 */ }
      }
      start = -1;
    }
  }
  return out;
}

function parseQoder(html, tool) {
  var text = collectNextPayload(html);
  var wanted = tool.types || [];
  var out = [], seen = {};
  extractJsonObjects(text, "tag_name").forEach(function (o) {
    if (wanted.length && wanted.indexOf(o.type) < 0) return;
    var body = String(o.body || "").replace(/\r\n?/g, "\n").trim();
    var it = mkEntry(tool, {
      version: cleanVersion(o.tag_name),
      title: inlineText(o.name || o.title || o.tag_name),
      dateRaw: o.published_at || o.created_at,
      tags: [o.type].filter(Boolean).concat(sectionTags(body)),
      url: tool.changelogUrl,   // payload 无版本级锚点,统一跳日志页
      body: body
    });
    if (!it) return;
    var k = it.url + "|" + entryKey(it);
    if (seen[k]) return;        // 同一版本在 payload 里会出现多次(多语言/多组件树)
    seen[k] = true;
    out.push(it);
  });
  return out;
}

// ===== 解析器:Qoder CN 更新日志(docs.qoder.cn/product-overview/{qoder,qoder-cn-ide}-update-log) =====
// 文档站的更新块带稳定的 data-component-part 标记,且正文本身是中文:
//   <div data-component-part="update-label">2026年09月24日</div>
//   <div data-component-part="update-description">Qoder 0.4.2</div>
//   <div data-component-part="update-content"><h3>日常优化</h3><h4>优化</h4><ul><li>…</li></ul></div>
// CN 桌面端(0.4.x)与 CN IDE(1.32.x)各占一页、两套编号,两页标记相同故共用本解析器。
function parseQoderCn(html, tool) {
  var s = String(html || "");
  // 先按 update-label 切成「一段 = 一次更新」:description/update-content 都在本段内,
  // 某段缺 description 也不会像串联正则那样错位到下一段去。
  var marks = [], re = /data-component-part="update-label"[^>]*>([\s\S]*?)<\/div>/gi, m;
  while ((m = re.exec(s))) marks.push({ dateRaw: inlineText(m[1]), at: m.index + m[0].length });
  var out = [];
  marks.forEach(function (h, i) {
    var seg = s.slice(h.at, i + 1 < marks.length ? marks[i + 1].at : Math.min(s.length, h.at + 120000));
    var desc = seg.match(/data-component-part="update-description"[^>]*>([\s\S]*?)<\/div>/i);
    var content = seg.match(/data-component-part="update-content"[^>]*>([\s\S]*)/i);
    var descText = desc ? inlineText(desc[1]) : "";
    var vm = descText.match(/\d+\.\d+(?:\.\d+)*/);
    var body = content ? htmlToBody(content[1]) : "";
    var h3 = content && content[1].match(/<h3\b[^>]*>([\s\S]*?)<\/h3>/i);
    var it = mkEntry(tool, {
      version: vm ? vm[0] : descText,
      title: h3 ? inlineText(h3[1]) : descText,
      dateRaw: h.dateRaw,
      tags: sectionTags(content ? content[1] : ""),
      url: tool.changelogUrl,
      body: body
    });
    if (it) out.push(it);
  });
  return out;
}

// ===== 解析器:Trae(trae.cn 服务端渲染) =====
// 区块结构(CSS Module 类名带哈希后缀,按稳定前缀匹配):
//   <section class="versionEntry-XXX">
//     <div class="metaItem-XXX date-XXX">2026-09-01</div>
//     <div class="metaItem-XXX version-XXX">v<!-- -->3.3.93-96</div>   <- React 注释分片
//     <span class="metaItem-XXX type-XXX">TraeCode</span>              <- 产品线,用于拆卡
//     <div class="versionContent-XXX"><ul><li>…</li></ul></div>
// 一条页面混排 TraeCode / TraeWork / TRAE APP 三条产品线,故按 tool.products 分卡:
// 列出的产品线才收(未列出的含 TRAE APP 一律丢弃),标签本身不再重复输出 —— 卡片标题已是产品线。
function traeProduct(tool, product) {
  return !tool.products || tool.products.indexOf(product) >= 0;
}

function parseTraeCn(html, tool) {
  var out = [];
  var re = /<section\b[^>]*class="[^"]*versionEntry-[^"]*"[^>]*>([\s\S]*?)<\/section>/gi, s;
  while ((s = re.exec(String(html || "")))) {
    var block = s[1];
    function field(cls) {
      var m = block.match(new RegExp('class="[^"]*' + cls + '-[^"]*"[^>]*>([\\s\\S]*?)<(?:/div|/span)>', "i"));
      return m ? inlineText(m[1].replace(/<!--[\s\S]*?-->/g, "")) : "";
    }
    var version = field("version"), dateRaw = field("date"), product = field("type");
    if (!traeProduct(tool, product)) continue;
    var content = block.match(/<div\b[^>]*class="[^"]*versionContent-[^"]*"([^>]*)>([\s\S]*)$/i);
    var it = mkEntry(tool, {
      version: version.replace(/^[vV]/, ""),
      title: version || tool.name,
      dateRaw: dateRaw,
      tags: tool.products ? [] : [product].filter(Boolean),
      url: tool.changelogUrl,
      body: content ? htmlToBody(content[2]) : ""
    });
    if (it) out.push(it);
  }
  return out;
}

// ===== 解析器:Trae 备源(trae.ai/api/changelog 飞书文档 block 树) =====
// 主源解析出 0 条时启用。实测每个版本一组块,顺序为:
//   heading1(版本号) -> divider -> table/table_cell 里的 text 单元
//     先一行表头 "date"/"version"/"tag",再一行取值 "2026-09-01"/"3.5.93-96"/"TraeCode"
//   -> bullet(block_type 12) 才是正文明细。
// 文档顺序即数组顺序,故线性扫描即可(11 页 110 条,只取第 1 页足够覆盖两周窗口)。
function blockText(block) {
  var kinds = ["heading1", "bullet", "text"];
  for (var i = 0; i < kinds.length; i++) {
    var k = block[kinds[i]];
    if (!k || !k.elements) continue;
    var t = k.elements.map(function (e) { return (e && e.text_run && e.text_run.content) || ""; }).join("");
    if (t) return t;
  }
  return "";
}

function parseTraeBlocks(jsonText, tool) {
  var data;
  try { data = JSON.parse(jsonText); } catch (e) { return []; }
  var blocks = data && data.blocks;
  if (!Array.isArray(blocks)) return [];
  var out = [], cur = null;
  function flush() {
    if (!cur) return;
    var product = cur.tags[0] || "";      // 表格 tag 列即产品线,同 parseTraeCn 的 type 字段
    if (traeProduct(tool, product)) {
      var it = mkEntry(tool, {
        version: cur.version.replace(/^[vV]/, ""),
        title: cur.version || tool.name,
        dateRaw: cur.dateRaw,
        tags: tool.products ? cur.tags.slice(1) : cur.tags,
        url: tool.changelogUrl,
        body: cur.lines.join("\n").trim()
      });
      if (it) out.push(it);
    }
    cur = null;
  }
  blocks.forEach(function (b) {
    if (!b || b.block_type === 22) return;   // 22 = 分隔线
    var t = inlineText(blockText(b));
    if (!t) return;
    if (b.heading1) {
      flush();
      cur = { version: t, lines: [], tags: [], dateRaw: "" };
      return;
    }
    if (!cur) return;
    if (b.bullet) { cur.lines.push("- " + t); return; }
    // text 单元 = 表格单元格:挑出日期与产品线标签,版本号列(与 heading1 重复)与表头丢弃
    if (!cur.dateRaw && /20\d\d-\d\d-\d\d/.test(t)) { cur.dateRaw = t; return; }
    if (["date", "version", "tag"].indexOf(t.toLowerCase()) >= 0) return;
    if (/^[\d.]+(-[\d.]+)?$/.test(t)) return;   // 版本号列(含 0.0.17-0.0.18 这类区间)
    if (t.length <= 16 && cur.tags.indexOf(t) < 0) cur.tags.push(t);
  });
  flush();
  return out;
}

// ===== 解析器:ZCode(zcode.z.ai/changelog 服务端渲染) =====
// 头部 <span class="...font-mono...">3.14.3</span><span>发布于 2026年9月22日</span>,
// 正文在其后的 <article> 里(页面自身无 id 锚点,只能跳日志页)。
function parseZcode(html, tool) {
  var s = String(html || ""), out = [];
  var re = /<span\b[^>]*class="[^"]*font-mono[^"]*"[^>]*>([^<]+)<\/span>\s*<span\b[^>]*>([\s\S]*?)<\/span>/gi;
  var hits = [], m;
  while ((m = re.exec(s))) hits.push({ version: inlineText(m[1]), dateRaw: inlineText(m[2]), at: m.index + m[0].length });
  hits.forEach(function (h, i) {
    var end = i + 1 < hits.length ? hits[i + 1].at : Math.min(s.length, h.at + 60000);
    var seg = s.slice(h.at, end);
    var art = seg.match(/<article\b[^>]*>([\s\S]*?)<\/article>/i);
    var it = mkEntry(tool, {
      version: h.version,
      title: h.version,
      dateRaw: h.dateRaw,
      tags: art ? sectionTags(art[1]) : [],
      url: tool.changelogUrl,
      body: art ? htmlToBody(art[1]) : htmlToBody(seg)
    });
    if (it) out.push(it);
  });
  return out;
}

// ===== 解析器:codebuddy.cn 文档页(CodeBuddy 与 WorkBuddy 共用) =====
// Docusaurus / VitePress 渲染的 markdown 标题区块:
//   <h3 id="_4-12-1-2026-09-20">4.12.1 (2026-09-20) <a class="header-anchor">…</a></h3>
//   <p><strong>新增功能</strong></p><ul><li>…</li></ul>
// 标题 id 即版本锚点 -> url 可深链到具体版本(比同类站点的整页链接更有用)。
// 判定「是不是版本标题」:标题文本里同时有 x.y.z 版本号与可解析日期(兼容全角括号与 🚀)。
function parseDocHeadings(html, tool) {
  var s = String(html || ""), out = [];
  var hits = [], re = /<h([2-4])\b[^>]*\bid="([^"]*)"[^>]*>([\s\S]*?)<\/h\1>/gi, m;
  while ((m = re.exec(s))) {
    var text = inlineText(m[3].replace(/<a\b[^>]*class="[^"]*header-anchor[^"]*"[\s\S]*?<\/a>/gi, " "));
    var vm = text.match(/\d+\.\d+(?:\.\d+)*/);
    var date = normDate(text);
    if (!vm || !date) continue;
    hits.push({ version: vm[0], title: text, id: m[2], dateRaw: (text.match(/20\d\d[-/]\d{1,2}[-/]\d{1,2}/) || [date])[0], at: m.index + m[0].length });
  }
  hits.forEach(function (h, i) {
    var end = i + 1 < hits.length ? hits[i + 1].at : Math.min(s.length, h.at + 60000);
    var seg = s.slice(h.at, end);
    var it = mkEntry(tool, {
      version: h.version,
      title: h.title,
      dateRaw: h.dateRaw,
      tags: sectionTags(seg),
      url: tool.changelogUrl + "#" + h.id,
      body: htmlToBody(seg)
    });
    if (it) out.push(it);
  });
  return out;
}

// ===== 抓取 GitHub Releases(分页 + 可选鉴权) =====
function ghToken() {
  var envs = CONFIG.changelog.ghTokenEnvs || ["GH_TOKEN", "GITHUB_TOKEN"];
  for (var i = 0; i < envs.length; i++) {
    var v = process.env[envs[i]];
    if (v && String(v).trim()) return String(v).trim();
  }
  return "";
}

// Releases 列表接口按 release 的 created_at 排序,不是发布时间 —— anomalyco/opencode 实测:
// v2.0.x 一路(发布日 09-17~09-23)在列表首页 100 条里根本不存在,只有 v1.18.x,因为它 v2 的
// release 对象建得早、发得晚。只用 API 会把该工具最新的版本线整条漏掉,而「两周窗口」恰恰
// 只看发布时间,故另取一路 releases.atom(Atom 按发布时间排、稳定返回最新 10 条)与之合并。
// Atom 无鉴权、不计入 API 配额;拿不到就忽略(不影响 API 那一路)。
function parseGithubAtom(tool, xml) {
  var out = [], re = /<entry>([\s\S]*?)<\/entry>/g, m;
  while ((m = re.exec(String(xml || "")))) {
    var b = m[1];
    var tag = inlineText((b.match(/<title[^>]*>([\s\S]*?)<\/title>/) || [])[1] || "");
    var link = ((b.match(/<link[^>]*href="([^"]*)"/) || [])[1] || "").trim();
    var dateRaw = (b.match(/<published>([^<]*)<\/published>/) || [])[1]
      || (b.match(/<updated>([^<]*)<\/updated>/) || [])[1] || "";
    if (!tag || !link) continue;
    // Atom 不带 prerelease 标记,只能靠 tag 尾缀判预发布(rust-v0.158.0-alpha.8 这类仍挡得住)
    if (!CONFIG.changelog.includePrerelease && isPrerelease(tag, false)) continue;
    var content = (b.match(/<content[^>]*>([\s\S]*?)<\/content>/) || [])[1] || "";
    content = content.replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1");
    out.push(mkEntry(tool, {
      version: cleanVersion(tag),
      title: tag,
      dateRaw: dateRaw,
      tags: [],
      url: transport.htmlDecode(link),
      body: htmlToBody(decodeEnt(content))
    }));
  }
  return out.filter(Boolean);
}

// 两路各自单独计时,而不是共用工具级 deadline:GitHub 不可达时,API 那一路会把整条
// deadline 全额耗光(实测 300s),让不鉴权、不计配额、本可救回最新 10 条的 Atom 兜底根本没机会跑。
async function fetchGithubReleases(tool) {
  var cfg = CONFIG.changelog;
  var token = ghToken();
  var all = [], apiError = null, atomEntries = [];

  async function apiLoop() {
    var headers = {
      "Accept": "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28"
    };
    if (token) headers.Authorization = "Bearer " + token;
    var acc = [];
    for (var page = 1; page <= (cfg.ghMaxPages || 3); page++) {
      var url = cfg.ghApiBase + "/repos/" + tool.repo + "/releases?per_page=" + (cfg.ghPerPage || 100) + "&page=" + page;
      var text = await transport.fetchWithRetry(url, { headers: headers, retries: 1, timeoutMs: 20000 });
      var list;
      try { list = JSON.parse(text); } catch (e) { throw new Error("GitHub 响应非 JSON(" + tool.repo + ")"); }
      if (!Array.isArray(list)) throw new Error("GitHub 返回异常:" + (list && list.message ? list.message : "非数组"));
      acc = acc.concat(list);
      if (list.length < (cfg.ghPerPage || 100)) break;
    }
    return acc;
  }
  async function atomLoop() {
    return parseGithubAtom(tool, await transport.fetchWithRetry(
      "https://github.com/" + tool.repo + "/releases.atom", { retries: 1, timeoutMs: 20000 }));
  }

  try {
    all = await withDeadline(apiLoop(), cfg.ghApiTimeoutMs || 150000, tool.name + " Releases API");
  } catch (e) {
    apiError = e; // 不立即抛出:Atom 还能救回最新 10 条
  }
  try {
    atomEntries = await withDeadline(atomLoop(), cfg.ghAtomTimeoutMs || 60000, tool.name + " Releases Atom");
  } catch (e) {
    if (!apiError) apiError = e;   // 两路都挂才算该源失败
  }
  if (apiError && !all.length && !atomEntries.length) throw apiError;
  if (apiError) {
    console.log("    [changelog][" + tool.name + "] Releases API 失败(" + apiError.message.slice(0, 60) +
      "),本轮仅取到 Atom 的 " + atomEntries.length + " 条");
  }
  return { releases: all, atomEntries: atomEntries };
}

// ===== 单工具抓取(永不外抛) =====
// 墙钟硬超时:GitHub 侧偶发「TCP 连接挂死且不触发 socket 超时」(本机实测:5 个国内源已返回、
// 4 个 GitHub 源刚开始时,整个 node 进程会在不打任何报错的情况下以 exit 0 退出,数据文件因此
// 根本没写出 —— 逐源 try/catch 挡不住这种事件循环层面的早退)。给每个工具一条 deadline 后,
// 到点按「该源失败」走 stale 回填,而 setTimeout 本身是活跃 handle,保证事件循环不会提前空转退出。
// 用 then 双分支包装而非直接 race:否则晚到的 rejection 会变成 unhandledRejection 反过来打死进程。
function withDeadline(promise, ms, label) {
  var guarded = promise.then(
    function (v) { return { ok: true, value: v }; },
    function (e) { return { ok: false, error: e }; }
  );
  var timer, deadline = new Promise(function (resolve) {
    timer = setTimeout(function () {
      resolve({ ok: false, error: new Error(label + " 超时 " + ms + "ms") });
    }, ms);
  });
  return Promise.race([guarded, deadline]).then(function (r) {
    clearTimeout(timer);
    if (r.ok) return r.value;
    throw r.error;
  });
}

async function fetchTool(tool) {
  var cfg = CONFIG.changelog;
  try {
    var ms = tool.kind === "github" ? (cfg.ghTimeoutMs || 180000) : (cfg.pageTimeoutMs || 45000);
    var entries = await withDeadline(fetchEntries(tool), ms, tool.name);
    if (!entries.length) throw new Error("解析出 0 条(页面结构可能已改版)");
    console.log("  [changelog][" + tool.name + "] " + entries.length + " 条");
    return { ok: true, error: "", entries: entries };
  } catch (e) {
    console.log("  [changelog][" + tool.name + "] 失败:" + e.message);
    return { ok: false, error: e.message, entries: [] };
  }
}

async function fetchEntries(tool) {
  if (tool.kind === "github") {
    var g = await fetchGithubReleases(tool);
    // API 一路在前:同一条目 API 版本带 name/tags 等更完整字段,去重时优先保留先出现的
    return mergeEntries(parseGithubReleases(tool, g.releases), g.atomEntries);
  }
  var html = await transport.fetchWithRetry(tool.url, { retries: 2 });
  if (tool.kind === "qoder") return parseQoderCn(html, tool);
  if (tool.kind === "zcode") return parseZcode(html, tool);
  if (tool.kind === "codebuddy") return parseDocHeadings(html, tool);
  if (tool.kind === "trae") {
    var entries = parseTraeCn(html, tool);
    // 主源(trae.cn 服务端渲染)解析不出条目时才走备源(trae.ai 飞书 block 树)
    if (entries.length || !tool.fallbackUrl) return entries;
    return parseTraeBlocks(await transport.fetchWithRetry(tool.fallbackUrl, { retries: 2 }), tool);
  }
  throw new Error("未知 kind: " + tool.kind);
}

// ===== 中文翻译(仅展示窗口内的英文条目) =====
// 通道复用 news.translateToZh(MyMemory + 端点失败转移 + 熔断),端点表与 news 同源。
// 三个关键约束:
//  ① 单次请求上限 ~500 字符,而 Claude Code 单条发布说明有 2.8 万字符/177 行 —— 必须按行分块打包;
//  ② 免费额度 5 万字符/天,全量英文历史 250~300 万字符补不完,故只译窗口内条目 + 按原文哈希缓存,
//     同一份发布说明一辈子只译一次(news.js 靠 URL 复用译文,这里靠 h 字段复用);
//  ③ 条目级原子:一条的任一分片失败就整条保留英文(不产生"半中半英"的正文),失败条目不写 h,下轮重试。
function textHash(s) {
  var h = 0x811c9dc5;
  s = String(s || "");
  for (var i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = (h * 0x01000193) >>> 0;
  }
  return h.toString(16);
}

// 超长子句按词边界硬拆成若干片(片间用空格拼回,单片不超过 maxChars)
function splitPiece(text, maxChars) {
  if (text.length <= maxChars) return [text];
  var words = text.split(/(\s+)/), out = [], cur = "";
  words.forEach(function (w) {
    if ((cur + w).length > maxChars && cur.trim()) { out.push(cur.trim()); cur = w.replace(/^\s+/, ""); }
    else cur += w;
  });
  if (cur.trim()) out.push(cur.trim());
  return out;
}

// 正文 -> 行段数组;剥出列表符号前缀(译完原样贴回,避免机翻把 "- " 吞掉或改成别的符号)
function toSegments(body, maxChars) {
  return String(body).split("\n").map(function (line) {
    var m = line.match(/^\s*([-*•]\s+|\d+[.)]\s+|#{1,4}\s+)/);
    var text = m ? line.slice(m[0].length) : line;
    return { mark: m ? m[0].trim() + " " : "", pieces: splitPiece(text.trim(), maxChars) };
  });
}

// 把分片按顺序装进若干包,包内用 \n 连接(不跨行合并,译文按行位置回贴)
function toPacks(segments, maxChars) {
  var packs = [], cur = [];
  segments.forEach(function (seg, si) {
    seg.pieces.forEach(function (pc, pi) {
      var size = cur.reduce(function (n, it) { return n + it.text.length + 1; }, 0);
      if (cur.length && size + pc.length + 1 > maxChars) { packs.push(cur); cur = []; }
      cur.push({ text: pc, si: si, pi: pi });
    });
  });
  if (cur.length) packs.push(cur);
  return packs;
}

// 这段文字需不需要译:含中文就跳过;纯版本号/日期(「4.12.1 (2026-09-20)」「3.14.2」「0.4.2」)
// 也跳过 —— 它们没有可译内容。缺后半条时,中文源(CodeBuddy/ZCode)会因为标题是版本号
// 而被当成待译条目,白白发一轮请求(MyMemory 按 IP 限流,浪费的是额度)。
function needsZh(text) {
  var s = String(text || "").trim();
  if (!s || news.hasCJK(s)) return false;
  if (/^[\d.\-_()\/:,\s🚀vV]+$/.test(s)) return false;   // 纯版本号 / 日期 / tag
  return /[A-Za-z]{3}/.test(s);
}

// 返回 {title, body, used, ok};ok=false 表示本条未译(保留原文)
async function translateEntry(entry, cfg, budgetLeft) {
  var needTitle = needsZh(entry.title);
  var needBody = needsZh(entry.body);
  if (!needTitle && !needBody) return { ok: false, used: 0, nothingToDo: true };
  var cost = (needTitle ? entry.title.length : 0) + (needBody ? entry.body.length : 0);
  // 用 isFinite 判定而非 >0:剩余预算被上一条打成负数时,含义是「没额度了」,不是「不限额度」
  if (isFinite(budgetLeft) && cost > budgetLeft) return { ok: false, used: 0, overBudget: true };

  var maxChars = cfg.chunkMaxChars || 450;
  var out = { title: entry.title, body: entry.body, ok: true };

  async function run(text) {
    // 短文本一发;长文本分包,包数 = 1 时也走同一条路径
    var segs = toSegments(text, maxChars), packs = toPacks(segs, maxChars);
    var trans = segs.map(function (s) { return []; });
    for (var i = 0; i < packs.length; i++) {
      var pk = packs[i];
      var want = pk.map(function (it) { return it.text; }).join("\n");
      // 包级重试:长条目要发几十上百个请求、且整条成败原子,单个请求偶发失败就会
      // 作废前面上百秒的翻译成果(Claude Code 一条 177 行实测要 81 个请求 / 123 秒)。
      var zh = null;
      for (var a = 0; a < 2 && zh === null; a++) zh = await news.translateToZh(want, cfg);
      if (!zh) return null;
      // 行数必须一一对应:机翻偶尔吞行/并行,对不上就整条放弃,不产出错位正文
      var lines = zh.split("\n").map(function (l) { return l.trim(); });
      if (lines.length !== pk.length) return null;
      pk.forEach(function (it, j) { trans[it.si][it.pi] = lines[j]; });
    }
    return segs.map(function (s, si) {
      return s.mark + (trans[si] || []).filter(Boolean).join(" ");
    }).join("\n").trim();
  }

  if (needTitle) {
    var t = await run(entry.title);
    if (!t) return { ok: false, used: 0 };
    out.title = t;
  }
  if (needBody) {
    var b = await run(entry.body);
    if (!b) return { ok: false, used: 0 };
    out.body = b;
  }
  return { ok: true, used: cost, title: out.title, body: out.body };
}

// 只译「前端真正会显示的那一条」= 每个工具最近一次更新(entries 已按日期降序,首条即最新)。
// 页面改成每工具只展示最近一次更新后,窗口内的其余条目不再渲染,给它们花额度毫无收益;
// 且不加日期门槛 —— 某工具最近一版若在三个月前,「全部」视图仍会显示它,那时就该是中文。
async function applyTranslations(tools, oldIndex) {
  var cfg = Object.assign({}, CONFIG.news.translate || {}, CONFIG.changelog.translate || {});
  if (!cfg.enabled) return;
  news.resetEndpointState();
  var budget = cfg.maxCharsPerRun > 0 ? cfg.maxCharsPerRun : Infinity;
  var used = 0, hit = 0, done = 0, fail = 0, skipped = 0;

  var targets = [];
  tools.forEach(function (t) { if (t.entries && t.entries.length) targets.push(t.entries[0]); });
  // 从新到旧:本轮第一条总是放行(单条可达 2 万字符),要放的是最新版本而非某个固定工具
  targets.sort(function (a, b) { return a.date === b.date ? 0 : (a.date > b.date ? -1 : 1); });

  for (var i = 0; i < targets.length; i++) {
    var e = targets[i];
    if (e.h) continue;                                            // 本轮已处理
    if (!needsZh(e.body) && !needsZh(e.title)) continue;          // 已是中文,或只有版本号/日期
    var key = textHash((e.title || "") + "\n" + (e.body || ""));
    var cached = oldIndex[key];
    if (cached) {                                                 // 缓存命中:同一份发布说明不重复请求
      e.title = cached.title;
      e.body = cached.body;
      e.h = key;
      hit++;
      continue;
    }
    // 本轮第一条总是放行:单条正文最长可达 2.8 万字符,若一律卡预算,它永远挤不进日额度、永远译不出来
    var r = await translateEntry(e, cfg, used === 0 ? Infinity : budget - used);
    if (r.nothingToDo) continue;
    if (r.overBudget) { skipped++; continue; }
    if (!r.ok) { fail++; continue; }
    e.title = r.title;
    e.body = r.body;
    e.h = key;
    used += r.used;
    done++;
  }
  var why = [];
  if (skipped) why.push("超预算 " + skipped);
  if (fail) why.push("请求失败 " + fail);
  console.log("[changelog] 翻译:本轮新译 " + done + " 条,复用缓存 " + hit + " 条" +
    (why.length ? ",保留英文 " + (fail + skipped) + " 条(" + why.join("、") + ")" : "") +
    ",已用 " + used + "/" + (budget === Infinity ? "∞" : budget) + " 字符");
}

// ===== 主入口 =====
async function updateChangelog() {
  var cfg = CONFIG.changelog, today = CONFIG.TODAY;
  console.log("[changelog] 抓取 Agent 工具更新日志 data/" + cfg.outFile);

  var results = await Promise.all(cfg.tools.map(function (t) { return fetchTool(t); }));

  // fail-soft:本轮失败的工具沿用旧文件条目,并标 stale(前端据此显示「数据滞后」徽标)
  var old = writers.loadJsGlobal(cfg.outFile, cfg.windowVar);
  var oldById = {};
  ((old && old.tools) || []).forEach(function (t) { oldById[t.id] = t; });
  // 译文缓存:旧条目带 h(英文原文的哈希)+ 中文 title/body,新抓到的同一份英文发布说明
  // 按同一个哈希命中,直接复用译文 —— 一条更新日志一生只请求一次翻译,不吃第二次额度。
  var oldIndex = {};
  ((old && old.tools) || []).forEach(function (t) {
    (t.entries || []).forEach(function (e) {
      if (e.h && !oldIndex[e.h]) oldIndex[e.h] = { title: e.title, body: e.body };
    });
  });

  var staleCount = 0;
  var tools = cfg.tools.map(function (tool, i) {
    var r = results[i], prev = oldById[tool.id] || {};
    // 源站换过地址(如 Qoder 由 qoder.com 改到 docs.qoder.cn)时,旧条目与新条目是两套版本编号,
    // 混在一张卡里读起来就像版本号乱跳 —— 此时丢弃旧历史,从新源站重新累积。
    var prevEntries = (prev.changelogUrl === tool.changelogUrl ? prev.entries : null) || [];
    var merged = mergeEntries(r.entries, prevEntries);
    if (cfg.maxEntriesPerTool > 0 && merged.length > cfg.maxEntriesPerTool) {
      merged = merged.slice(0, cfg.maxEntriesPerTool);   // 已按日期降序 -> 保留最新
    }
    var okEntries = r.entries.length > 0;
    if (!okEntries) staleCount++;
    return {
      id: tool.id,
      name: tool.name,
      vendor: tool.vendor,
      kind: tool.kind,
      changelogUrl: tool.changelogUrl,
      status: okEntries ? "ok" : (merged.length ? "stale" : "empty"),
      error: okEntries ? "" : (r.error || prev.error || ""),
      lastOkAt: okEntries ? CONFIG.REFRESHED_AT : (prev.lastOkAt || ""),
      entries: merged
    };
  });

  // 英文条目译成中文(只译各工具当前显示的那一条;命中缓存不重复请求,失败保留原文)
  await applyTranslations(tools, oldIndex);

  var payload = {
    updated: today,
    refreshedAt: CONFIG.REFRESHED_AT,
    uiWindowDays: cfg.uiWindowDays,
    desc: "11 个 Agent 工具的官方更新日志汇总(仅正式版);每个工具只展示最近一次更新," +
      "「最近一次更新」超出 " + cfg.uiWindowDays + " 天时不显示卡片",
    tools: tools
  };
  var header =
    "// AI Agent 工具更新日志快照(由 scripts/lib/changelog.js 每日抓取维护,每日 2 次)\n" +
    "// 来源:Codex/Claude Code/OpenCode/Kimi Code 取 GitHub Releases;" +
    "Qoder CN / Qoder CN IDE 各取 docs.qoder.cn 对应更新日志页;" +
    "TraeCode / TraeWork 同取 trae.cn/changelog 并按产品线拆分;" +
    "ZCode/CodeBuddy/WorkBuddy 取各官网更新日志页\n" +
    "// 口径:仅正式版(不收 alpha/beta/rc);本文件存各源可得的全量条目,展示窗口由前端控制\n" +
    "// 字段:tools[]=工具(name/vendor/changelogUrl/status ok|stale|empty/lastOkAt);entries[]=一条更新\n" +
    "//   entry 字段:version=版本号 title=标题 date=日期(UTC YYYY-MM-DD) dateRaw=源站原文日期\n" +
    "//   tags=小节/产品线标签 url=源站地址(可深链到具体版本) body=完整正文(纯文本,保留换行,不摘要)\n" +
    "//   h=英文原文哈希(仅已翻译条目携带):title/body 为中文译文,原文见 url 指向的源站页面\n";
  writers.writeWindowVar(cfg.outFile, cfg.windowVar,
    header + "window." + cfg.windowVar + " = " +
    JSON.stringify(payload, null, 2).replace(/'/g, "\\'").replace(/"/g, "'") + ";\n");
  console.log("[changelog] 完成:" + tools.length + " 个工具,共 " +
    tools.reduce(function (n, t) { return n + t.entries.length; }, 0) + " 条" +
    (staleCount ? ",失败/滞后工具 " + staleCount + " 个" : ""));
  return payload;
}

module.exports = {
  updateChangelog: updateChangelog,
  // 导出解析工具,便于单测
  normDate: normDate,
  htmlToBody: htmlToBody,
  inlineText: inlineText,
  sectionTags: sectionTags,
  isPrerelease: isPrerelease,
  cleanVersion: cleanVersion,
  mergeEntries: mergeEntries,
  collectNextPayload: collectNextPayload,
  extractJsonObjects: extractJsonObjects,
  parseGithubReleases: parseGithubReleases,
  parseQoder: parseQoder,
  parseQoderCn: parseQoderCn,
  parseTraeCn: parseTraeCn,
  parseTraeBlocks: parseTraeBlocks,
  parseZcode: parseZcode,
  parseDocHeadings: parseDocHeadings,
  // 翻译件,便于单测
  textHash: textHash,
  needsZh: needsZh,
  splitPiece: splitPiece,
  toSegments: toSegments,
  toPacks: toPacks,
  translateEntry: translateEntry,
  applyTranslations: applyTranslations
};
