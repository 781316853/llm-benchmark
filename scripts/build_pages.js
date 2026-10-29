// 把 pages/shell.html 拆成 9 个独立页面(index.html + 8 个榜单页)并生成 sitemap.xml
// 为什么要拆:标签页原先只切换 CSS class,全站只有 1 个 URL,搜索引擎无法单独收录某个榜单,
//   分享/引用也只能落到首页。拆成独立文件后每个榜单有自己的 URL、title、description 与 canonical,
//   导航变成真链接(站内互链),同时每页只保留自己那一段 DOM(避免 9 份重复内容互相稀释)。
// 用法:node scripts/build_pages.js        (改完 pages/shell.html 后执行)
//       node scripts/build_pages.js --check (CI/本地自检:产物与模板不一致时退出码 1)
"use strict";
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const SHELL = path.join(ROOT, "pages", "shell.html");
const SITE = "https://781316853.github.io/llm-benchmark/";
const BANNER = "  <!-- 本文件由 scripts/build_pages.js 从 pages/shell.html 生成,请勿直接编辑;" +
  "改完模板执行 npm run pages -->";

// 页签 -> 输出文件与该页的 title / description(description 会同步到 og:description 与 twitter:description)
const PAGES = [
  {
    id: "overview", file: "index.html",
    title: "大模型编码基准整合门户 · 跨基准模型对比",
    desc: "聚合 DeepSWE、Terminal-Bench、Code Arena·WebDev、ModelDial、llm2014 等 25 个编码与 Agent 基准,按渠道优先级交叉校验,提供跨基准模型对比、综合分与性价比。每日自动刷新。"
  },
  {
    id: "llm2014", file: "llm2014.html",
    title: "llm2014 Agentic 编程榜 · 综合分与月份对比",
    desc: "llm2014 私有题库的 Agentic 编程实测成绩,支持按月份切换,查看综合分、等级与单任务成本。"
  },
  {
    id: "modeldial", file: "modeldial.html",
    title: "ModelDial 雷达 · 第三方编码智能体实测",
    desc: "ModelDial 第三方独立实测:后端 40% + 前端 30% + 知识 30% 合成的编码智能体综合能力分,含成本×成绩散点与全部配置明细。"
  },
  {
    id: "arenaofbias", file: "arenaofbias.html",
    title: "亿模亿样 · 前端作品社区盲评 Elo 排行",
    desc: "前端作品匿名盲评的 Bradley-Terry Elo 排行(1000 为平均水平),含 ±95% 区间、有效比较场次与胜率。"
  },
  {
    id: "aicodingdaily", file: "aicodingdaily.html",
    title: "AI Coding Daily 编码榜 · 7 项目 27 prompt 实测",
    desc: "独立第三方编码实测:每个模型在 7 个真实项目上跑 27 个 prompt,总分 0-70,含每 prompt 成本与耗时。"
  },
  {
    id: "valsvcb", file: "valsvcb.html",
    title: "VCB-1-100 排行 · 固定 OpenHands 的编码 Agent 实测",
    desc: "Vals AI 的 50 个真实 Web 应用迭代场景,全部模型跑在固定 OpenHands harness 上,主指标为隐藏测试准确率。"
  },
  {
    id: "authority", file: "authority.html",
    title: "权威基准测试 · DeepSWE / Terminal-Bench / OSWorld 等 16 项",
    desc: "16 项权威基准的成绩与明细:DeepSWE、Terminal-Bench 4.0/3.0/2.1、OSWorld 2.0、HLE、ARC-AGI-3、BenchCAD、CursorBench、FrontierCode、AA Coding Agent Index 等。"
  },
  {
    id: "plans", file: "plans.html",
    title: "订阅套餐比价 · 额度与综合单价对比",
    desc: "codingplan.fyi 套餐快速对比快照:按精选模型分列,对比各平台月价、综合单价(¥/亿 token)与实测月用量。"
  },
  {
    id: "changelog", file: "changelog.html",
    title: "Agent 工具更新日志 · 12 个工具的官方 Release",
    desc: "Codex、Claude Code、OpenCode、Kimi Code、Qoder、Trae、ZCode、CodeBuddy 等 12 个 Agent 工具的官方更新日志汇总,只收正式版。"
  }
];

// 从模板里按行切成「每个页面一段」:页面 section 顶格缩进 4 空格,内嵌 section 更深,
// 故以 ^    </section> 作为结束边界;上方紧邻的 4 空格注释行属于该段,一并带上。
function splitSections(lines) {
  const sections = [];
  for (let i = 0; i < lines.length; i++) {
    if (!/^    <section class="page(?: active)?" id="page-([a-z0-9]+)">/.test(lines[i])) continue;
    const id = /id="page-([a-z0-9]+)"/.exec(lines[i])[1];
    let start = i;
    while (start > 0 && /^    <!--/.test(lines[start - 1])) start--;
    let end = i;
    while (end < lines.length && !/^    <\/section>/.test(lines[end])) end++;
    if (end >= lines.length) throw new Error("页面 section 未闭合: " + id);
    sections.push({ id: id, start: start, end: end });
    i = end;
  }
  return sections;
}

// 把模板的公共部分 + 目标页 section 拼成该页 HTML,并改写 head、导航选中态与 body 的 data-page
function buildPage(shell, sections, page) {
  const target = sections.filter((s) => s.id === page.id)[0];
  if (!target) throw new Error("模板中找不到页面: " + page.id);
  const head = shell.slice(0, sections[0].start).join("\n");
  const tail = shell.slice(sections[sections.length - 1].end + 1).join("\n");
  let body = shell.slice(target.start, target.end + 1).join("\n");

  // 目标页的 section 统一带 active(单页文件里它就是唯一可见页)
  body = body.replace(/^    <section class="page(?: active)?" id="page-([a-z0-9]+)">/m, function (m, id) {
    return '    <section class="page active" id="page-' + id + '">';
  });

  let out = head + "\n" + body + "\n" + tail;

  const url = SITE + (page.file === "index.html" ? "" : page.file);
  const subs = [
    [/<title>[\s\S]*?<\/title>/, "<title>" + page.title + "</title>"],
    [/<meta name="description" content="[^"]*" \/>/, '<meta name="description" content="' + page.desc + '" />'],
    [/<link rel="canonical" href="[^"]*" \/>/, '<link rel="canonical" href="' + url + '" />'],
    [/<meta property="og:title" content="[^"]*" \/>/, '<meta property="og:title" content="' + page.title + '" />'],
    [/<meta property="og:description" content="[^"]*" \/>/, '<meta property="og:description" content="' + page.desc + '" />'],
    [/<meta property="og:url" content="[^"]*" \/>/, '<meta property="og:url" content="' + url + '" />'],
    [/<meta name="twitter:title" content="[^"]*" \/>/, '<meta name="twitter:title" content="' + page.title + '" />'],
    [/<meta name="twitter:description" content="[^"]*" \/>/, '<meta name="twitter:description" content="' + page.desc + '" />'],
    [/<body data-page="[a-z0-9]*">/, '<body data-page="' + page.id + '">']
  ];
  subs.forEach(function (pair) {
    if (!pair[0].test(out)) throw new Error("模板缺少可替换的标签: " + pair[0] + "(" + page.file + ")");
    out = out.replace(pair[0], pair[1].replace(/\$/g, "$$$$"));
  });

  // 导航选中态:所有 tab 先清空,再给当前页打上 active + aria-current
  out = out.replace(/<a class="tab([^"]*)" data-tab="([a-z0-9]+)" href="([^"]+)"[^>]*>/g,
    function (m, cls, id, href) {
      const on = id === page.id;
      return '<a class="tab' + (on ? " active" : "") + '" data-tab="' + id + '" href="' + href + '"' +
        (on ? ' aria-current="page"' : "") + ">";
    });

  // 生成物标注,避免有人直接改产物
  if (out.indexOf("scripts/build_pages.js") < 0) out = out.replace(/<head>/, "<head>\n" + BANNER);
  return out;
}

function buildSitemap(lastmod) {
  const urls = PAGES.map(function (p) {
    return "  <url>\n    <loc>" + SITE + (p.file === "index.html" ? "" : p.file) + "</loc>\n" +
      "    <lastmod>" + lastmod + "</lastmod>\n  </url>";
  }).join("\n");
  return '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' + urls + "\n</urlset>\n";
}

function stripLastmod(xml) {
  return xml.replace(/<lastmod>[^<]*<\/lastmod>/g, "<lastmod></lastmod>");
}

function normEol(text) {
  return text.replace(/\r\n/g, "\n");
}

function main() {
  const check = process.argv.indexOf("--check") >= 0;
  const shellText = fs.readFileSync(SHELL, "utf8");
  const lines = shellText.replace(/\r\n/g, "\n").split("\n");
  const sections = splitSections(lines);
  if (sections.length !== PAGES.length) {
    throw new Error("模板页面数(" + sections.length + ")与配置(" + PAGES.length + ")不一致");
  }
  const now = new Date();
  const lastmod = now.getFullYear() + "-" + String(now.getMonth() + 1).padStart(2, "0") + "-" +
    String(now.getDate()).padStart(2, "0");

  const outputs = PAGES.map(function (p) {
    return { file: path.join(ROOT, p.file), text: buildPage(lines, sections, p).replace(/\n/g, "\r\n") };
  });
  outputs.push({ file: path.join(ROOT, "sitemap.xml"), text: buildSitemap(lastmod).replace(/\n/g, "\r\n") });

  let changed = 0;
  outputs.forEach(function (o) {
    const old = fs.existsSync(o.file) ? fs.readFileSync(o.file, "utf8") : null;
    // 比对时统一换行(CI 在 Linux 上检出的是 LF,生成物是 CRLF);
    // sitemap 的 lastmod 是生成当天日期,也一并不比,否则隔天跑一次就误报
    const same = old !== null && (normEol(old) === normEol(o.text) ||
      (o.file.endsWith("sitemap.xml") &&
        stripLastmod(normEol(old)) === stripLastmod(normEol(o.text))));
    if (same) return;
    changed++;
    if (check) console.log("待更新: " + path.relative(ROOT, o.file));
    else fs.writeFileSync(o.file, o.text);
  });

  if (check) {
    if (changed) {
      console.log("产物与模板不一致(" + changed + " 个文件),请执行 npm run pages");
      process.exit(1);
    }
    console.log("页面产物已与模板同步");
    return;
  }
  console.log("已生成 " + PAGES.length + " 个页面 + sitemap.xml,变更 " + changed + " 个文件");
}

main();
