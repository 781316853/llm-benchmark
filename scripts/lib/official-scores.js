// 官方发布成绩自动抽取(从厂商发布页的 HTML 表格解析 HLE / GPQA 分数)
//
// 背景:厂商发布新模型时会在博客/模型卡里贴一张「基准 × 模型」对比表,HLE 与 GPQA Diamond
//       是常驻两行。这些表在 Qwen / 混元等官方博客的 JSON 正文里是规整的 <table>,
//       可以可靠解析(实测 12 篇 Qwen 文章全部解析成功,且与站内 datalearner 同型号分数一致)。
// 与 official-seeds.js 的分工:那里是人工转录的固定种子;本模块是自动抽取,产出同样形状的
//       种子对象,由 official-seeds 合并进 SEEDS,因此 hle.js / gpqa_diamond.js 无需改动。
//
// 口径把关(重要):
//   1) 只认标签行,标签必须精确是 HLE / GPQA(Diamond) —— SuperGPQA、MMLU、GPQA-Diamond-mini
//      等一律不收,避免把不同基准的数混进同一条序列;
//   2) HLE 必须是无工具口径:表头/标签里出现 w/ tools、with tools、带工具 等标记则丢弃该行;
//      无法判定的按「不收」处理(HLE 带工具能高 20~30 分,混进来会直接污染排序);
//   3) 数值必须落在 0~100 且形如 xx.x(带可选 %) —— 参数行(125B)、日期、表格脚注都不匹配。
"use strict";

// ===== HTML 表格 -> 二维单元格 =====
function parseTableRows(html) {
  const rows = [];
  const trRe = /<tr[^>]*>([\s\S]*?)<\/tr>/gi;
  let tr;
  while ((tr = trRe.exec(html))) {
    const cells = [];
    const cellRe = /<(td|th)([^>]*)>([\s\S]*?)<\/\1>/gi;
    let c;
    while ((c = cellRe.exec(tr[1]))) {
      const attrs = c[2] || "";
      // 跨列:colspan 记下来,避免后续列错位
      const cs = attrs.match(/colspan\s*=\s*"?(\d+)/i);
      cells.push({
        tag: c[1].toLowerCase(),
        text: cleanCellText(c[3]),
        colspan: cs ? Math.max(1, parseInt(cs[1], 10)) : 1
      });
    }
    if (cells.length) rows.push(cells);
  }
  return rows;
}

function cleanCellText(html) {
  return String(html || "")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;|&#160;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, " ")
    .trim();
}

// 表头模型名清洗:
//   "Qwen3.8- Flash" / "Qwen3.7- Plus" 这类源站排版会在连字符后多一个空格,
//   与站内 "Qwen3.8-Flash" 无法匹配,这里把「字母数字 + 连字符 + 空格 + 字母」的空格去掉;
//   "GPT5.6 Sol (max)" 的 (max) 是思考档位标注,不是模型名的一部分,剥掉。
function cleanModelName(s) {
  let t = String(s || "").replace(/\s+/g, " ").trim();
  if (!t) return "";
  t = t.replace(/([A-Za-z0-9])-\s+([A-Za-z0-9])/g, "$1-$2");
  t = t.replace(/\s*\((?:max|high|medium|low|xhigh|thinking|non-thinking|no-thinking)\)\s*$/i, "");
  t = t.replace(/\s*\((?:Max|High)\)\s*$/i, "");
  return t.trim();
}

// 是否为基座模型(Base / base / pretrain):
// 官方表格里常把 -Base 与指令模型并列,但基座不做对话评测、分数天然低一截,
// 与站内「模型能力」序列不可比,一律不收(否则 Qwen3.8-Flash-Next-Base 51.4 会混进 GPQA 中段)。
function isBaseModel(name) {
  return /(?:^|[\s\-_.])base(?:\s|$|[\-_.])/i.test(String(name || "")) ||
    /[-_ ]pretrain(?:ed)?$/i.test(String(name || ""));
}

// ===== 基准标签归一 =====
// 返回 { key, withTools } 或 null。key ∈ "hle" | "gpqa"
function benchKey(label) {
  const raw = String(label || "").replace(/\s+/g, " ").trim();
  if (!raw) return null;
  // 明确排除的近似名(先于匹配判定)
  if (/Super\s*-?\s*GPQA/i.test(raw)) return null;
  // 子集/变体:GPQA-Diamond-mini / GPQA-sub / GPQA-easy 等与 198 题 Diamond 主榜不同口径
  // (注意 GPQA-Diamond-mini 中间隔着 Diamond,故用「结尾」判定而非紧邻)
  if (/GPQA.*(?:mini|subset|easy|extended)\s*$/i.test(raw)) return null;
  if (/^GPQA[\s\-_.]*(?:sub|hard)\s*$/i.test(raw)) return null;
  if (/HLE[\s\-_]*(?:text|vision|subset|mini)/i.test(raw) && !/^HLE\s*(?:\(|$)/i.test(raw)) return null;

  const isHle = /^HLE\b/i.test(raw) || /Humanity'?s\s*Last\s*Exam/i.test(raw);
  const isGpqa = /^GPQA\b/i.test(raw) || /^GPQA\s*Diamond/i.test(raw);
  if (!isHle && !isGpqa) return null;
  // 带工具判定(任一出现即视为非闭卷口径)
  const withTools = /(w\/\s*tools?|with\s*tools?|带工具|使用工具|工具增强)/i.test(raw);
  return { key: isGpqa ? "gpqa" : "hle", withTools: withTools, label: raw };
}

// ===== 单元格数值 =====
// 只接受 0~100 的百分制数;支持 "92.4"、"92.4%"、"**92.4**";拒绝 "--"、"-"、"125B"、"397B"
function cellScore(text) {
  const s = String(text || "").replace(/[*\s]/g, "");
  if (!s || /^(?:--?|—|–|N\/?A)$/i.test(s)) return null;
  const m = s.match(/^(\d{1,3}(?:\.\d{1,3})?)\s*%?$/);
  if (!m) return null;
  const v = parseFloat(m[1]);
  if (!isFinite(v) || v < 0 || v > 100) return null;
  // 参数量等大数(125B / 397)不会被百分制匹配,但 0~100 内的纯整数仍可能是别的量;
  // 由调用方结合「该行其他列是否也是百分制」再做一次校验
  return v;
}

// ===== 从一张表抽取 { models, gpqa:{}, hle:{} } =====
function extractFromTable(html, opts) {
  const o = opts || {};
  const rows = parseTableRows(html);
  if (!rows.length) return null;

  // 表头行:第一个 th 数 >= 2 的行
  let headerIdx = -1;
  for (let i = 0; i < rows.length; i++) {
    if (rows[i].filter(c => c.tag === "th").length >= 2) { headerIdx = i; break; }
  }
  if (headerIdx < 0) return null;

  // 展开 colspan 得到列名;首列是基准名列(表头通常为空)
  const header = [];
  rows[headerIdx].forEach(c => {
    for (let k = 0; k < c.colspan; k++) header.push(c.text);
  });
  const models = header.slice(1).map(s => cleanModelName(s)).filter(function (m) {
    if (!m) return false;
    if (isBaseModel(m)) {
      if (o.onSkip) o.onSkip({ reason: "base-model", label: m });
      return false;
    }
    return true;
  });
  if (!models.length) return null;

  const out = { models: models, gpqa: {}, hle: {} };
  let any = 0;

  for (let i = headerIdx + 1; i < rows.length; i++) {
    const r = rows[i];
    if (!r.length) continue;
    const info = benchKey(r[0].text);
    if (!info) continue;
    // HLE 带工具的行直接丢弃(站内统一闭卷口径)
    if (info.key === "hle" && info.withTools) {
      if (o.onSkip) o.onSkip({ reason: "hle-with-tools", label: info.label });
      continue;
    }
    // 展开数值列
    const cells = [];
    for (let k = 1; k < r.length; k++) {
      const c = r[k];
      for (let x = 0; x < c.colspan; x++) cells.push(c.text);
    }
    // 收集本行所有百分制数,若少于 2 个则视为非成绩行(防参数行误入)
    const vals = cells.map(cellScore);
    const numericCount = vals.filter(v => v != null).length;
    if (numericCount < 2) {
      if (o.onSkip) o.onSkip({ reason: "not-a-score-row", label: info.label });
      continue;
    }
    vals.forEach((v, idx) => {
      const model = models[idx];
      if (!model || v == null) return;
      out[info.key][model] = v;
      any++;
    });
  }

  return any ? out : null;
}

// ===== 从整篇正文抽取(可能有多张表) =====
// 同一模型多表重复出现时取「最后一次」(官方越靠后的表通常越新/越完整)
function extractFromHtml(html, opts) {
  const tables = String(html || "").match(/<table[\s\S]*?<\/table>/gi) || [];
  const merged = { models: [], gpqa: {}, hle: {} };
  const seen = {};
  let any = 0;
  tables.forEach(t => {
    if (!/GPQA|HLE|Humanity/i.test(t)) return;
    const res = extractFromTable(t, opts);
    if (!res) return;
    res.models.forEach(m => { if (!seen[m]) { seen[m] = 1; merged.models.push(m); } });
    Object.keys(res.gpqa).forEach(m => { merged.gpqa[m] = res.gpqa[m]; any++; });
    Object.keys(res.hle).forEach(m => { merged.hle[m] = res.hle[m]; any++; });
  });
  return any ? merged : null;
}

// ===== 从内嵌 JSON 抽取(Next.js / Nuxt 等 SPA 把数据塞在 <script> 里) =====
// 形态(实测 Kimi 官方博客): {"benchmark":"GPQA-Diamond","scores":[{"model":"Kimi K3.1 Pro\n(max)","value":"94.2"}]}
// 比 HTML 表格更可靠(字段语义明确),但埋在整页 JS 里,需按对象边界扫描。
//
// ⚠ 已知限制:SPA 把 JSON 塞进 <script> 时,转义层数随框架/嵌套深度而异
//   (实测 Kimi 是「三层」:\\\" + \\n,本模块按 1~2 层降级处理仍未成功)。
//   该站点目前不产出分数,待后续按实际字节特征单独适配;不影响已接入的
//   Qwen / 腾讯混元(它们是 JSON 接口直接返回正文 HTML,表格解析稳定)。
function extractFromJson(html, opts) {
  const o = opts || {};
  // SPA 常把整段 JSON 作为字符串塞进 <script>(如 Next.js 的 self.__next_f.push)。
  // 实测 Kimi 博客的形态是「三层转义」:引号在源码里是 \\\" (两个反斜杠 + 引号),
  // 换行是 \\n。原因是 JSON 被塞进 JS 字符串、JS 字符串又被塞进 HTML 属性,
  // 每套一层就多一层反斜杠。这里做两轮反转义(每轮只削一层),两轮后即得合法 JSON。
  const rawSrc = String(html || "");
  const variants = [rawSrc];
  if (rawSrc.indexOf('\\"benchmark\\"') >= 0 || rawSrc.indexOf('\\\\\\"benchmark') >= 0) {
    let s = rawSrc;
    for (let pass = 0; pass < 2; pass++) {
      s = s.replace(/\\\\/g, "\\").replace(/\\"/g, '"');
    }
    variants.push(s);
  }

  const out = { models: [], gpqa: {}, hle: {} };
  const seenModel = {};
  let any = 0;

  variants.forEach(function (src) {
    // 定位所有 "benchmark" 出现处
    const re = /"benchmark"\s*:\s*"([^"]+)"/g;
    let m;
    while ((m = re.exec(src))) {
      const info = benchKey(m[1]);
      if (!info) continue;
      if (info.key === "hle" && info.withTools) continue;

      // 不从对象起点配对(整段可能嵌在更大的 JSON 里,配错就解析失败),
      // 改为从 benchmark 键往后找 "scores": [ 再配对方括号 —— 边界更小更稳。
      const rest = src.slice(m.index);
      const sm = rest.match(/"scores"\s*:\s*\[/);
      if (!sm) continue;
      const arrStart = m.index + sm.index + sm[0].length - 1;  // 指向 '['
      let depth = 0, end = -1, inStr = false, esc = false;
      for (let i = arrStart; i < src.length; i++) {
        const ch = src[i];
        if (inStr) {
          if (esc) { esc = false; }
          else if (ch === "\\") { esc = true; }
          else if (ch === '"') { inStr = false; }
          continue;
        }
        if (ch === '"') { inStr = true; continue; }
        if (ch === "[") depth++;
        else if (ch === "]") { depth--; if (depth === 0) { end = i + 1; break; } }
      }
      if (end < 0) continue;

      // 取出的数组文本可能仍是「被转义过的 JSON」,先直接 parse;
      // 失败则再削一层转义重试(不同站点嵌套层数不同,按需降级)。
      let scores = null;
      const rawArr = src.slice(arrStart, end);
      try { scores = JSON.parse(rawArr); } catch (e) {
        try { scores = JSON.parse(rawArr.replace(/\\\\/g, "\\").replace(/\\"/g, '"')); } catch (e2) { scores = null; }
      }
      if (!Array.isArray(scores) || !scores.length) continue;

      scores.forEach(function (s) {
        if (!s || !s.model) return;
        // 模型名去掉换行后的档位标注("Kimi K3.1 Pro\n(max)" -> "Kimi K3.1 Pro")
        const name = cleanModelName(String(s.model).replace(/\s+/g, " "));
        if (!name || isBaseModel(name)) return;
        const v = cellScore(String(s.value == null ? "" : s.value).replace(/[*†‡]/g, ""));
        if (v == null) return;
        if (!seenModel[name]) { seenModel[name] = 1; out.models.push(name); }
        out[info.key][name] = v;
        any++;
      });
    }
  });

  return any ? out : null;
}

// ===== 统一入口:先试 HTML 表格,再试内嵌 JSON =====
function extractAll(html, opts) {
  const fromTable = extractFromHtml(html, opts);
  const fromJson = extractFromJson(html, opts);
  if (!fromTable) return fromJson;
  if (!fromJson) return fromTable;
  // 两者都有:表格优先(官方排版的权威值),JSON 只补表格没有的模型
  const merged = { models: fromTable.models.slice(), gpqa: Object.assign({}, fromTable.gpqa), hle: Object.assign({}, fromTable.hle) };
  fromJson.models.forEach(function (name) {
    if (merged.models.indexOf(name) < 0) merged.models.push(name);
  });
  ["gpqa", "hle"].forEach(function (b) {
    Object.keys(fromJson[b]).forEach(function (name) {
      if (merged[b][name] == null) merged[b][name] = fromJson[b][name];
    });
  });
  return merged;
}

module.exports = {
  parseTableRows: parseTableRows,
  benchKey: benchKey,
  cellScore: cellScore,
  cleanModelName: cleanModelName,
  isBaseModel: isBaseModel,
  extractFromTable: extractFromTable,
  extractFromHtml: extractFromHtml,
  extractFromJson: extractFromJson,
  extractAll: extractAll
};
