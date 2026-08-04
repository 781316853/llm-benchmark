## 修复目标

"DeepSeek V4 Flash 0731" 与 "DeepSeek V4 Flash preview" 被误归并为同一模型（实际都归并到 "DeepSeek V4 Flash"）。根因是 `normLight()` 的宽松匹配把 "preview" 当 effort 后缀剥离、并把任意括号内容（含日期戳 `(0731)`）无条件剥离。按用户决策：**所有 preview 变体一律独立为各自模型**，日期构建版本独立。

## 修改文件

### 1. `js/data.js`（前端归一化核心）
- `normLight()`（行 41-46）两处收紧：
  - 括号剥离 `/([^)]*)/g` → `/(high|max|medium|xhigh|low|think|thinking)/gi` 只剥 effort 注解括号，保留 `(0731)` 等日期戳（括号会折叠为连字符，与无括号写法同键）
  - 剥离词表去掉 `preview`，保留 `high|max|medium|xhigh|low|think`
- `cleanDisplay()`（行 65-71）：括号剥离同步改为只剥 effort 注解括号，避免日期戳被从显示名中抹掉

### 2. `scripts/lib/model-map.js`（抓取端镜像，与 js/data.js 逐字节同步）
- `normLight()`（行 18-25）、`cleanDisplay()`（行 54-60）：同步相同修改

### 3. `data/models.js`（别名登记表）
- 新增 7 个独立 canonical（preview/日期构建变体，vendor 与配色取同系列邻近色）：
  - `DeepSeek V4 Flash preview`（aliases: "DeepSeek V4 Flash preview", "DeepSeek-V4-Flash-Preview"）
  - `DeepSeek V4 Flash 0731`（aliases: "DeepSeek V4 Flash 0731", "DeepSeek V4 Flash (0731)"）
  - `Gemini 3.1 Pro Preview`（aliases: "gemini-3-1-pro-preview", "Gemini 3.1 Pro Preview"）
  - `Gemini 3 Flash Preview`（aliases: "gemini-3-flash-preview", "Gemini 3 Flash Preview"）
  - `Gemini 3 Pro Preview`（aliases: "gemini-3-pro-preview", "Gemini 3 Pro Preview"）
  - `Kimi K2.6 Code Preview`（aliases: "K2.6-code-preview", "Kimi K2.6 Code Preview"）
  - `Tencent Hy3 Preview`（aliases: "Tencent Hy3 Preview"）
- 从现有条目删除被移走的 preview 别名：Gemini 3 Flash（行 30）、Gemini 3 Pro（行 32）、Kimi-K2.6（行 34）、Tencent Hy3（行 50）

### 4. `scripts/sources/vibecode.js`（抓取端 slug→显示名映射，行 32-33）
- `"google/gemini-3.1-pro-preview": "Gemini 3.1 Pro"` → `"Gemini 3.1 Pro Preview"`
- `"google/gemini-3-flash-preview": "Gemini 3 Flash"` → `"Gemini 3 Flash Preview"`
- `"google/gemini-3-pro-preview": "Gemini 3 Pro"` → `"Gemini 3 Pro Preview"`

### 不改动
- 剥离词表其余 effort 词（high/max/medium/xhigh/low/think）——它们是配置注解，应继续剥离
- `data/quality.js`、`data/seen.js` 等已生成数据：下次 `npm run refresh` 时自动重算 canonId

## 验证（修改后执行）

1. 用 node 加载 `scripts/lib/model-map.js`（含 reload 读取更新后的 models.js），断言关键行为：
   - `DeepSeek V4 Flash preview` → 独立 "DeepSeek V4 Flash preview"
   - `DeepSeek V4 Flash (0731)` / `DeepSeek V4 Flash 0731` → 独立 "DeepSeek V4 Flash 0731"，且两者归并到一起
   - `DeepSeek V4 Flash (max)` / `DeepSeek-V4-Flash-Max` → 仍归并 "DeepSeek V4 Flash"
   - `gemini-3.1-pro-preview` → "Gemini 3.1 Pro Preview"；`gemini-3-flash-preview` → "Gemini 3 Flash Preview"；`K2.6-code-preview` → "Kimi K2.6 Code Preview"；`Tencent Hy3 Preview` → "Tencent Hy3 Preview"
2. 回归：对 `data/` 全部数据文件的模型名跑修改前后 canon 对比，确认仅上述 preview/日期变体变化，其余模型归并关系零变化
3. 前端 `js/data.js` 的 normLight/cleanDisplay 与 model-map.js 逐字节一致，用同一 node 模拟验证其输出