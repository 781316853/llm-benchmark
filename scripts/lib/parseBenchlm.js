// benchlm.ai 镜像页共享解析器
// benchlm 各基准页(如 /benchmarks/nl2repo、/benchmarks/hle)为 SSG 服务端渲染,
// 无 <table>,每行为卡片式 div:
//   <a class="block truncate text-sm font-semibold ..." href="/models/slug">Model Name</a>
//   + <span class="block truncate text-xs text-muted-foreground">Vendor · Open weight</span>
//   + <span class="text-xs font-mono ... text-foreground">65.4%</span>
// 输出:[{model, org, score}]
"use strict";
function parseBenchlm(html) {
  const models = [];
  const parts = html.split('<a class="block truncate text-sm font-semibold');
  for (let i = 1; i < parts.length; i++) {
    const seg = parts[i];
    const nameM = seg.match(/^[^>]*>([^<]+)<\/a>/);
    if (!nameM) continue;
    const scoreM = seg.match(/text-foreground">([\d.]+)%<\/span>/);
    if (!scoreM) continue;
    const score = Number(scoreM[1]);
    if (!isFinite(score)) continue;
    let vendor = "";
    const orgM = seg.match(/text-muted-foreground">([\s\S]*?)<\/span>/);
    if (orgM) {
      vendor = orgM[1].replace(/<!--[\s\S]*?-->/g, "").trim();
      const v = vendor.match(/^([^·]+)/);
      vendor = v ? v[1].trim() : vendor;
    }
    models.push({ model: nameM[1].trim(), org: vendor || null, score: score });
  }
  return models;
}

module.exports = { parseBenchlm: parseBenchlm };
