// 规范化模型映射:把五个基准中同一模型的不同命名归一到 canonical 名,并附厂商与配色。
// 别名数组列出各数据文件中出现的"原始模型名"字面值;data.js 会再做兜底归一(去空格/小写/剥离 effort 后缀)。
window.MODEL_MAP = {
  canonical: [
    { id: "Claude Fable 5",   vendor: "Anthropic", color: "#D97757", aliases: ["claude-fable-5", "Claude Fable 5", "Fable-5 (high)", "Fable-5", "Claude 5 Fable"] },
    { id: "Claude Fable 5.1", vendor: "Anthropic", color: "#E0977B", aliases: ["claude-fable-5.1", "claude-fable-5-1", "Claude Fable 5.1", "Claude Fable 5.1 (high)", "Fable-5.1", "Fable-5.1 (high)", "Fable 5.1", "Claude 5.1 Fable"] },
    { id: "Claude Mythos Preview", vendor: "Anthropic", color: "#C66040", aliases: ["Claude Mythos Preview", "Claude Mythos 5"] },
    { id: "Claude Opus 4.8",  vendor: "Anthropic", color: "#E29060", aliases: ["claude-opus-4.8", "Claude Opus 4.8", "Claude Opus 4.8 (high)", "claude-opus-4-8", "Opus 4.8", "Opus 4.8 (max)"] },
    { id: "Claude Sonnet 5",  vendor: "Anthropic", color: "#C58A6B", aliases: ["claude-sonnet-5", "Claude Sonnet 5", "Claude Sonnet 5 (high)", "Sonnet 5", "Sonnet 5 (high)", "sonnet-5", "sonnet-5-high"] },
    { id: "Claude Opus 4.7",  vendor: "Anthropic", color: "#B07B5C", aliases: ["Claude Opus 4.7", "claude-opus-4-7"] },
    { id: "Claude Opus 4.6",  vendor: "Anthropic", color: "#A06E51", aliases: ["Claude Opus 4.6", "claude-opus-4-6 (thinking)", "claude-opus-4-6"] },
    { id: "Claude Sonnet 4.6",vendor: "Anthropic", color: "#90614A", aliases: ["claude-sonnet-4.6", "Claude Sonnet 4.6", "Claude Sonnet 4.6 (high)", "Sonnet 4.6"] },
    { id: "Claude Sonnet 4.5",vendor: "Anthropic", color: "#A07050", aliases: ["claude-4-5-Sonnet", "Claude Sonnet 4.5"] },
    { id: "Claude Haiku 4.5", vendor: "Anthropic", color: "#704936", aliases: ["claude-haiku-4-5", "claude-haiku-4.5", "Claude Haiku 4.5", "claude-4-5-haiku", "Claude Haiku 4 5 20251001 Thinking"] },
    { id: "Claude Opus 4.5",  vendor: "Anthropic", color: "#805443", aliases: ["Claude Opus 4.5", "Opus 4.5", "claude-opus-4-5-20251101"] },
    { id: "GPT-5.6 Sol",      vendor: "OpenAI",    color: "#0A8F6A", aliases: ["gpt-5-6-sol", "gpt-5.6-sol-0829", "GPT 5.6 Sol"] },
    { id: "GPT-5.6 Terra",    vendor: "OpenAI",    color: "#0FA37E", aliases: ["gpt-5-6-terra", "GPT 5.6 Terra"] },
    { id: "GPT-5.6 Luna",     vendor: "OpenAI",    color: "#15B893", aliases: ["gpt-5-6-luna", "GPT 5.6 Luna"] },
    { id: "GPT-5.5",          vendor: "OpenAI",    color: "#10A37F", aliases: ["gpt-5.5", "GPT 5.5", "GPT-5.5 (high)", "GPT-5.5(high)"] },
    { id: "GPT-5.4",          vendor: "OpenAI",    color: "#1FB892", aliases: ["gpt-5.4", "GPT 5.4", "GPT 5.4 (xhigh)", "GPT-5.4 (high)", "GPT-5.4(high)", "gpt-5.4 (xHigh)", "Gpt 5.4 2026 03 05", "Gpt 5.4 2026 03 05 High"] },
    { id: "GPT-5.4 Mini",     vendor: "OpenAI",    color: "#3FC9A6", aliases: ["gpt-5-4-mini", "GPT 5.4 Mini", "gpt-5.4-mini", "GPT-5.4 mini", "Gpt 5.4 Mini 2026 03 17"] },
    { id: "GPT-5.4 Nano",     vendor: "OpenAI",    color: "#4FD4B8", aliases: ["GPT-5.4 nano", "gpt-5.4-nano"] },
    { id: "GPT-5.3 Codex",    vendor: "OpenAI",    color: "#28BFA8", aliases: ["GPT-5.3 Codex", "gpt-5.3-codex-spark"] },
    { id: "GPT-5.2",          vendor: "OpenAI",    color: "#2EC9B0", aliases: ["gpt-5.2", "GPT 5.2"] },
    { id: "GPT-5.2 Codex",    vendor: "OpenAI",    color: "#28BFA8", aliases: ["gpt-5.2-codex", "GPT 5.2 Codex"] },
    { id: "GPT-5",            vendor: "OpenAI",    color: "#40D4BE", aliases: ["gpt-5-2025-08-07 (High)", "GPT 5"] },
    { id: "GLM-5.2",          vendor: "zAI",       color: "#5B6CFF", aliases: ["glm-5.2", "GLM 5.2", "GLM-5.2(max)"] },
    { id: "GLM-5.1",          vendor: "zAI",       color: "#7485FF", aliases: ["GLM-5.1", "GLM 5.1"] },
    { id: "GLM 4.6",          vendor: "zAI",       color: "#94A3FF", aliases: ["glm-4.6"] },
    { id: "Gemini 3.5 Flash", vendor: "Google",    color: "#4285F4", aliases: ["gemini-3.5-flash", "Gemini 3.5 Flash", "Gemini 3.5 Flash (high)"] },
    { id: "Gemini 3 Flash",   vendor: "Google",    color: "#6EA6F7", aliases: ["gemini-3-flash", "Gemini 3 Flash"] },
    { id: "Gemini 3 Flash Preview", vendor: "Google", color: "#62A2F0", aliases: ["gemini-3-flash-preview", "Gemini 3 Flash Preview"] },
    { id: "Gemini 3.1 Pro",   vendor: "Google",    color: "#5A95F5", aliases: ["gemini-3.1-pro", "gemini-3.1-pro (thinking)", "Gemini 3.1 Pro"] },
    { id: "Gemini 3.1 Pro Preview", vendor: "Google", color: "#4E8BF0", aliases: ["gemini-3-1-pro-preview", "Gemini 3.1 Pro Preview"] },
    { id: "Gemini 3 Pro",     vendor: "Google",    color: "#7AB0F8", aliases: ["Gemini 3 Pro"] },
    { id: "Gemini 3 Pro Preview", vendor: "Google", color: "#7BB5F5", aliases: ["gemini-3-pro-preview", "Gemini 3 Pro Preview"] },
    { id: "Kimi-K2.7-Code",   vendor: "Moonshot",  color: "#7C5CFF", aliases: ["kimi-k2.7-code", "Kimi-K2.7-Code"] },
    { id: "Kimi-K2.6",        vendor: "Moonshot",  color: "#8E6EFF", aliases: ["Kimi-K2.6 (Think)", "Kimi K2.6", "Kimi 2.6"] },
    { id: "Kimi K2.6 Code Preview", vendor: "Moonshot", color: "#9C82FF", aliases: ["K2.6-code-preview", "Kimi K2.6 Code Preview"] },
    { id: "Kimi K2.5",        vendor: "Moonshot",  color: "#A08FFF", aliases: ["Kimi K2.5", "kimi-k2-instruct", "Kimi K2 Instruct"] },
    { id: "Kimi K3",          vendor: "Moonshot",  color: "#6A4CFF", aliases: ["Kimi K3", "kimi-k3", "Kimi-K3", "Kimi-K3 (max)", "k3"] },
    // Kimi K2 世代的历史变体:原先未建档,由 canon() 兜底自动建档(厂商被记为「其他」、颜色取默认灰),
    // 且 id 会随加载顺序漂移(如同一个「Kimi K2」可能被登记为 "Kimi K2" 或 "Kimi-k2")。
    // 四个变体按独立模型建档 —— 沿用 kimi-for-coding 的判断原则:未证实的同一性不合并。
    { id: "Kimi K2",          vendor: "Moonshot",  color: "#B3A6FF", aliases: ["Kimi K2", "kimi-k2", "Kimi-k2"] },
    { id: "Kimi K2-Thinking-0905", vendor: "Moonshot", color: "#BCB0FF", aliases: ["Kimi K2-Thinking-0905"] },
    { id: "Kimi-K2-Thinking-Turbo", vendor: "Moonshot", color: "#C5BAFF", aliases: ["kimi-k2-thinking-turbo", "Kimi-K2-Thinking-Turbo"] },
    { id: "Kimi-K2.5-Instant", vendor: "Moonshot", color: "#AFA0FF", aliases: ["kimi-k2.5-instant", "Kimi-K2.5-Instant"] },
    { id: "DeepSeek V4 Pro 0813", vendor: "DeepSeek", color: "#5A74FE", aliases: ["DeepSeek V4 Pro", "DeepSeek V4 Pro (max)", "DeepSeek V4 Pro (high)", "DeepSeek-V4-Pro-Max", "deepseek-v4-pro", "deepseek-v4-pro-high-20260813", "DeepSeek V4 Pro preview", "DeepSeek V4 Pro preview(max)", "deepseek-v4-pro-high-preview", "DeepSeek V4 Pro 0813", "DeepSeek V4 Pro 0813 (max)", "DeepSeek-V4-Pro-0813", "DeepSeek-V4-Pro-0813-Max", "deepseek-v4-pro-0813"] },
    { id: "DeepSeek V4 Flash 0731", vendor: "DeepSeek", color: "#6286FE", aliases: ["DeepSeek V4 Flash", "DeepSeek V4 Flash (max)", "DeepSeek-V4-Flash-Max", "deepseek-v4-flash", "deepseek-v4-flash-high", "DeepSeek V4 Flash preview", "DeepSeek-V4-Flash-Preview", "deepseek-v4-flash-high-preview", "DeepSeek V4 Flash 0731", "DeepSeek V4 Flash (0731)", "DeepSeek-V4-Flash-0731", "DSV4F0731"] },
    { id: "DeepSeek V3.2",    vendor: "DeepSeek",  color: "#7A92FE", aliases: ["deepseek-v3p2"] },
    { id: "Qwen3.7-Max",      vendor: "Alibaba",   color: "#FF6A00", aliases: ["Qwen3.7-Max", "Qwen3.7 Max", "qwen3.7-max-20260517"] },
    { id: "Qwen3.7-Plus",     vendor: "Alibaba",   color: "#FF7A14", aliases: ["Qwen3.7-Plus"] },
    { id: "Qwen3.6-Plus",     vendor: "Alibaba",   color: "#FF8533", aliases: ["Qwen3.6-Plus(Think)", "Qwen3.6-Plus", "Qwen3.6 Plus"] },
    { id: "Qwen3.6-27B",      vendor: "Alibaba",   color: "#FF9547", aliases: ["Qwen3.6-27B"] },
    { id: "Qwen3.6-35B-A3B",  vendor: "Alibaba",   color: "#FFA05A", aliases: ["Qwen3.6-35B-A3B"] },
    { id: "Qwen3-Coder 480B", vendor: "Alibaba",   color: "#FF9A4D", aliases: ["qwen3-coder-480b-a35b"] },
    { id: "Qwen3 235B",       vendor: "Alibaba",   color: "#FFAC66", aliases: ["qwen3-235b-a22b"] },
    { id: "Grok 4.5",         vendor: "xAI",       color: "#9AA3AF", aliases: ["Grok 4.5", "grok-4.5"] },
    { id: "Grok 4.3",         vendor: "xAI",       color: "#AEB5BC", aliases: ["grok-4.3"] },
    { id: "Grok Build",       vendor: "xAI",       color: "#B8BFC6", aliases: ["grok-build-0-1", "grok-build-0.1", "Grok Build"] },
    { id: "Tencent Hy3",      vendor: "Tencent",   color: "#12B7F5", aliases: ["Tencent Hy3 (high)", "Hy3"] },
    { id: "Tencent Hy3 Preview", vendor: "Tencent", color: "#1FC4FF", aliases: ["Tencent Hy3 Preview"] },
    { id: "MiniMax-M3",       vendor: "MiniMax",   color: "#FF5C8A", aliases: ["MiniMax-M3", "minimax-m3", "MiniMax M3"] },
    { id: "MiniMax-M2.7",     vendor: "MiniMax",   color: "#FF7DA3", aliases: ["minimax-m2-7", "MiniMax-M2.7", "MiniMax M2.7"] },
    { id: "MiniMax M2.5",     vendor: "MiniMax",   color: "#FF9EBB", aliases: ["MiniMax M2.5", "minimax-m2-5"] },
    { id: "MiniMax M2.1",     vendor: "MiniMax",   color: "#FFB0CC", aliases: ["minimax-2.1"] },
    { id: "Seed 2.1 Pro",     vendor: "ByteDance", color: "#3C8CFF", aliases: ["Seed 2.1 Pro", "seed-2.1-pro-preview"] },
    { id: "Seed 2.1 Turbo",   vendor: "ByteDance", color: "#5A9DFF", aliases: ["Seed 2.1 Turbo"] },
    { id: "Doubao-Seed-2.0-Code", vendor: "ByteDance", color: "#3C8CFF", aliases: ["Doubao-Seed-2.0-Code (high)", "Seed-2.0-Code(high)"] },
    { id: "MiMo-V2.5-Pro",    vendor: "Xiaomi",    color: "#FF6900", aliases: ["MiMo-V2.5-Pro"] },
    { id: "MiMo-V2.5",        vendor: "Xiaomi",    color: "#FF831A", aliases: ["MiMo-V2.5"] },
    { id: "Meta Muse Spark 1.1",  vendor: "Meta",      color: "#0866FF", aliases: ["Muse Spark", "meta/muse_spark", "Muse Spark 1.1", "Meta Muse Spark", "Meta Muse Spark 1.1"] },
    { id: "MAI-Thinking-1",   vendor: "Microsoft", color: "#0078D4", aliases: ["MAI-Thinking-1"] },
    { id: "MAI-Code-1-Flash", vendor: "Microsoft", color: "#2A9DE8", aliases: ["MAI-Code-1-Flash"] },
    { id: "Gemma 3 27B",      vendor: "Google",    color: "#9AC4FA", aliases: ["gemma-3-27b-it"] },
    { id: "Llama 3.1 405B",   vendor: "Meta",      color: "#4171E0", aliases: ["llama3-1-405b-instruct"] },
    { id: "Llama 4 Maverick", vendor: "Meta",      color: "#5B85E8", aliases: ["llama4-maverick-17b-instruct"] },
    { id: "Codestral",        vendor: "Mistral",   color: "#FF7043", aliases: ["codestral-2405"] },
    { id: "GPT-OSS 120B",     vendor: "OpenAI",    color: "#50D4C8", aliases: ["gpt-oss-120b"] },
    { id: "North Mini Code 1.0", vendor: "North",  color: "#8A8F98", aliases: ["North Mini Code 1.0"] },
    // ===== Code Arena · WebDev(LMArena)上榜补充的纯前端方向新模型(2026-08) =====
    { id: "Claude Opus 5",    vendor: "Anthropic", color: "#B3603F", aliases: ["Claude Opus 5", "claude-opus-5-max", "claude-opus-5-high", "claude-opus-5", "Opus 5", "Opus 5 (max)", "opus-5", "opus-5-max"] },
    { id: "Qwen3.8-Max",      vendor: "Alibaba",   color: "#FF6A00", aliases: ["Qwen3.8-Max", "qwen3.8-max", "Qwen3.8-Max-0902", "qwen3.8-max-0902", "Qwen3.8-Max (0902)", "Qwen3.8 Max 0902"] },
    { id: "Qwen3.8-27B",      vendor: "Alibaba",   color: "#FF7A14", aliases: ["Qwen3.8-27B", "qwen3.8-27b"] },
    { id: "Grok 4.6",         vendor: "xAI",       color: "#9099A4", aliases: ["Grok 4.6", "grok-4.6-high", "grok-4.6"] },
    { id: "GLM-5.3",          vendor: "zAI",       color: "#5B6CFF", aliases: ["GLM-5.3", "glm-5.3-max", "GLM-5.3(max)", "GLM 5.3"] },
    { id: "Gemini 3.7 Flash", vendor: "Google",    color: "#4285F4", aliases: ["Gemini 3.7 Flash", "gemini-3.7-flash-high"] },
    { id: "Gemini 3.6 Flash", vendor: "Google",    color: "#5A95F5", aliases: ["Gemini 3.6 Flash", "gemini-3.6-flash-high"] },
    { id: "Meta Muse Spark 1.2", vendor: "Meta",   color: "#0870FF", aliases: ["Meta Muse Spark 1.2", "muse-spark-1.2", "muse-spark-1.2 (xhigh)", "muse-spark-1.2-contributor"] },
    { id: "Muse Spark 1.3",     vendor: "Meta",    color: "#0878FF", aliases: ["Muse Spark 1.3", "muse-spark-1-3", "muse-spark-1-3-xhigh", "Muse Spark 1.3 (max)", "Muse Spark 1.3 (xhigh)"] },
    { id: "Qwen3.6-Max",      vendor: "Alibaba",   color: "#FF7A14", aliases: ["Qwen3.6-Max", "Qwen3.6-Max Preview", "qwen3.6-max-preview", "Qwen 3.6 Max", "Qwen 3.6 Max (preview)"] },
    // ===== 各源新上榜补充登记的模型(2026-08) =====
    { id: "Qwen3.8 2.4T A95B", vendor: "Alibaba",  color: "#FF8533", aliases: ["Qwen3.8 2.4T A95B", "qwen3-8-2-4t-a95b"] },
    { id: "GLM-5.3-Flash",    vendor: "zAI",       color: "#6C7DFF", aliases: ["GLM-5.3-Flash", "glm-5-3-flash", "GLM 5.3 Flash", "GLM5.3 Flash", "GLM5.3Flash"] },
    { id: "Motif 3",          vendor: "Motif Technologies", color: "#8A8F98", aliases: ["Motif 3", "motif-3"] },
    { id: "Inkling",          vendor: "Thinking Machines", color: "#9AA5B1", aliases: ["Inkling", "inkling"] },
    { id: "Nemotron 3 Ultra", vendor: "NVIDIA",    color: "#76B900", aliases: ["Nemotron 3 Ultra", "nvidia-nemotron-3-ultra-550b-a55b", "Nemotron 3 Ultra 550B", "Nemotron 3 Ultra 550b A55b", "Nemotron 3 Ultra (550B A55B)"] },
    { id: "Gemini 3.5 Flash Lite", vendor: "Google", color: "#7AB0F8", aliases: ["Gemini 3.5 Flash-Lite", "gemini-3-5-flash-lite", "Gemini 3.5 Flash Lite"] },
    { id: "Solar Open2 250B", vendor: "Upstage",   color: "#8A8F98", aliases: ["Solar Open2 250B", "solar-open2-250b"] },
    { id: "Muse Glimmer",     vendor: "Meta",      color: "#2E90FF", aliases: ["Muse Glimmer", "muse-glimmer", "Muse Glimmer (high)"] },
    { id: "A.X-K2",           vendor: "SK Telecom", color: "#8A8F98", aliases: ["A.X-K2", "a-x-k2", "A.X K2"] },
    { id: "K-EXAONE 2.0",     vendor: "LG AI Research", color: "#A14233", aliases: ["K-EXAONE 2.0", "k-exaone-2-0-0803", "K-EXAONE 2.0 (0803)"] },
    { id: "Mistral Medium 3.5", vendor: "Mistral", color: "#FF8053", aliases: ["Mistral Medium 3.5", "mistral-medium-3-5"] },
    { id: "Nemotron 3.5 Lightning", vendor: "NVIDIA", color: "#86C40A", aliases: ["Nemotron 3.5 Lightning", "nemotron-3-5-lightning"] },
    { id: "Command A+",       vendor: "Cohere",    color: "#39594D", aliases: ["Command A+", "command-a-plus"] },
    // ===== AI 能力专项测试(atmeplz)前端/后端方向榜补充的新模型(2026-09) =====
    { id: "Gemini 3.8 Flash", vendor: "Google",    color: "#4E8BF0", aliases: ["Gemini 3.8 Flash", "gemini-3.8-flash", "gemini-3.8-flash-high"] },
    { id: "Qwen3.8-Flash",    vendor: "Alibaba",   color: "#FF7A14", aliases: ["Qwen3.8-Flash", "qwen3.8-flash", "Qwen3.8 Flash", "Qwen3.8-Flash-Next", "qwen3.8-flash-next", "Qwen3.8 Flash Next"] },
    { id: "Tencent Hy4 Preview", vendor: "Tencent", color: "#2BD0FF", aliases: ["Tencent Hy4 Preview", "hy4-preview"] },
    { id: "Ox-Alpha",         vendor: "STEALTH",   color: "#5B6CFF", aliases: ["Ox-Alpha", "ox-alpha"] },
    { id: "DOTS3-Note-Prev",  vendor: "Dots",      color: "#E0552A", aliases: ["DOTS3-Note-Prev", "dots3-note-prev", "dots3-note Preview", "dots3-note-preview"] },
    { id: "DeepSeek V4 Pro 0821 灰测", vendor: "DeepSeek", color: "#6B86FE", aliases: ["DeepSeek V4 Pro 0821 凌晨灰测", "deepseek-v4-pro-0821凌晨灰测"] },
    { id: "DSV4F-VE-ocgo",    vendor: "DeepSeek",  color: "#7A92FE", aliases: ["DSV4F-VE-ocgo"] },
    // ===== 权威基准测试(2026-09)补充登记的模型 =====
    { id: "GPT-6 Astra",      vendor: "OpenAI",    color: "#0A8F6A", aliases: ["GPT-6 Astra", "gpt-6-astra", "GPT-6 Astra (max)"] },
    { id: "GPT-5.3",          vendor: "OpenAI",    color: "#1FB892", aliases: ["GPT-5.3", "gpt-5.3"] },
    { id: "OpenAI o3",        vendor: "OpenAI",    color: "#3FC9A6", aliases: ["OpenAI o3", "o3", "OpenAI o3 (thinking)"] },
    { id: "GPT-4o",           vendor: "OpenAI",    color: "#5FD4C8", aliases: ["GPT-4o", "gpt-4o"] },
    { id: "Moonshot v1-128k", vendor: "Moonshot",  color: "#A08FFF", aliases: ["Moonshot v1-128k", "moonshot-v1-128k"] },
    { id: "Moonshot v1-8k",   vendor: "Moonshot",  color: "#B0A0FF", aliases: ["Moonshot v1-8k", "moonshot-v1-8k"] },
    { id: "Qwen3-VL-2B",      vendor: "Qwen",      color: "#FF8A3D", aliases: ["Qwen3-VL-2B", "Qwen3-VL-2B (baseline)", "qwen3-vl-2b"] },
    // ===== NL2Repo / AI 能力 榜上此前未登记(被自动建档为「其他」厂商)的模型(2026-09) =====
    { id: "DeepSeek V4.1 Flash", vendor: "DeepSeek", color: "#5A74FE", aliases: ["DeepSeek V4.1 Flash", "DeepSeek V4.1 Flash (max)", "DeepSeek-V4.1-Flash", "deepseek-v4.1-flash", "deepseek-v4.1-flash-e0910", "deepseek-v4.1-flash-expires-on-0910"] },
    { id: "DeepSeek V4 Flash Vision Exp", vendor: "DeepSeek", color: "#6286FE", aliases: ["DeepSeek-V4-Flash-Vision-Exp", "DeepSeek V4 Flash Vision Exp", "deepseek-v4-flash-vision-exp"] },
    { id: "Gemini 3.1 Flash Lite", vendor: "Google", color: "#7AB0F8", aliases: ["Gemini 3.1 Flash Lite", "gemini-3.1-flash-lite", "Gemini 3.1 Flash Lite Preview", "gemini-3.1-flash-lite-preview"] },
    { id: "GPT-5.1",          vendor: "OpenAI",    color: "#28BFA8", aliases: ["GPT 5.1", "gpt-5.1"] },
    { id: "GPT-5.1 Codex",    vendor: "OpenAI",    color: "#2EC9B0", aliases: ["GPT 5.1 Codex", "gpt-5.1-codex"] },
    { id: "GPT-5 Mini",       vendor: "OpenAI",    color: "#4FD4B8", aliases: ["GPT 5 Mini", "GPT 5 mini", "gpt-5-mini"] },
    { id: "GPT-5.6 Cyber",    vendor: "OpenAI",    color: "#15B893", aliases: ["GPT-5.6 Cyber", "gpt-5.6-cyber"] },
    { id: "GLM 5",            vendor: "zAI",       color: "#7485FF", aliases: ["GLM 5", "glm-5"] },
    { id: "Kimi-K2.8-Preview", vendor: "Moonshot", color: "#7C5CFF", aliases: ["Kimi-K2.8-Preview", "kimi-k2.8-preview"] },
    { id: "Inkling Small",    vendor: "Thinking Machines", color: "#9AA5B1", aliases: ["Inkling Small", "Inkling small", "inkling-small"] },
    { id: "omen-alpha",       vendor: "STEALTH",   color: "#6C7DFF", aliases: ["omen-alpha", "OMEN-ALPHA"] },
    { id: "union-alpha",      vendor: "STEALTH",   color: "#7C8CFF", aliases: ["union-alpha", "UNION-ALPHA"] },
    // ModelDial 榜中的 "kimi-for-coding" 与该站的 "k3" 并列且分数不同(64.2 vs 72.5),
    // 是否同一底层模型未证实,故单独建档,不并入 Kimi K3。
    { id: "kimi-for-coding",  vendor: "Moonshot",  color: "#8B72FF", aliases: ["kimi-for-coding"] }
  ],
  // 厂商默认色(用于未登记模型的兜底着色)
  // 该色现在是「模型色点 + 厂商列文字」里未登记厂商(「其他」)所用的色,故按文字色标准取到常态 ≥4.5:1
  // (提亮自 #8A8F98:原值当文字在行状态底色上只有 4.31:1);同时保持"未登记 < North < xAI"的灰阶次序
  vendorDefaultColor: "#9298A1",
  // 厂商色:表格里的模型色点与「厂商」列文字共用同一色,使同一厂商的模型与厂商名颜色一致。
  // 与上面逐模型的 color 分工不同 —— color 是模型身份色(图表/雷达按模型区分曲线时仍用它),
  // vendorColors 是厂商身份色(只用于表格里的色点与厂商列)。新增厂商时在此补一行即可,漏补则落 vendorDefaultColor 灰。
  // 两条约束:
  // 1) 全部取值按文字色标准取对比度 —— 因为厂商色会用在小号文字上,不能沿用只当色点用的深色。
  //    实测(暗底下最小对比度):常态六种底(表格底 / 表头底 / 四种行状态底色)全部 ≥4.5:1;
  //    悬停行底色(alpha .26)会把任何彩色文字的上限压到约 4,故悬停态守 3:1(瞬时态 + 行首 3px 竖条定位)。
  //    改这些色值前先按同一口径核算,尤其是深色品牌色(如 Cohere #39594D 当文字只有 2.2:1,必须提亮);
  // 2) 26 家厂商无法两两色相独立(蓝系天然 7 家),同一色相带内按明度分档;
  //    色点始终紧贴厂商文字,近似色不影响识别,颜色承担的是扫视归类与跨列呼应。
  vendorColors: {
    "OpenAI": "#35C7A4",            // 品牌青绿提亮
    "Anthropic": "#E0855F",         // 品牌陶橙提亮
    "Google": "#6BA5F7",            // 品牌蓝提亮
    "Alibaba": "#FF9A3D",           // 品牌橙提亮
    "DeepSeek": "#6E8CFF",          // 品牌蓝提亮
    "Moonshot": "#B79CFF",          // 紫罗兰提亮
    "zAI": "#818DE7",               // 靛蓝:压深一档与 DeepSeek 浅蓝区分;再提亮至常态 ≥4.5:1
    "ByteDance": "#C77DFF",         // 品紫:自蓝系移出色相带,避开 7 家蓝系撞色
    "MiniMax": "#FF6F9E",           // 品牌粉
    "Tencent": "#23C6E6",           // 品牌青
    "Microsoft": "#3FA8F0",         // 品牌天蓝提亮
    "Meta": "#6791F2",              // 钴蓝:提亮至常态 ≥4.5:1
    "xAI": "#B4BCC8",               // 中性浅灰(与品牌调性一致,且亮于未登记厂商的兜底灰)
    "NVIDIA": "#9FD12C",            // 品牌黄绿提亮
    "Mistral": "#FF8A66",           // 暖橙红:与 Anthropic 错开明度
    "Xiaomi": "#FFB84D",            // 亮琥珀橙:与 Alibaba 同带错明度
    "Cohere": "#4FC08D",            // 品牌深绿提亮
    "LG AI Research": "#E67070",    // 砖红:提亮至常态 ≥4.5:1
    "Dots": "#EF7A5C",              // 珊瑚橙红
    "Qwen": "#FF9A3D",              // 与 Alibaba 同色:该 vendor 实为阿里模型(qwen3-vl-2b)单独建档所致
    "STEALTH": "#9AA0C8",           // 匿名实验室:中性板岩紫,不主张品牌识别
    "Thinking Machines": "#9FB4C4", // 板岩青灰
    "North": "#A8B0BC",             // 灰
    "Motif Technologies": "#C08FE0", // 淡紫
    "Upstage": "#6FBFB0",           // 灰绿
    "SK Telecom": "#EA6C81"         // 玫红:提亮至常态 ≥4.5:1
  },
  // 国产(中国大陆)厂商清单:用于总览页「高亮国产模型」开关判定
  domesticVendors: ["zAI", "Moonshot", "DeepSeek", "Alibaba", "Tencent", "MiniMax", "ByteDance", "Xiaomi"]
};
