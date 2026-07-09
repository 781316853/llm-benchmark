// 规范化模型映射:把三个基准中同一模型的不同命名归一到 canonical 名,并附厂商与配色。
// 别名数组列出各数据文件中出现的"原始模型名"字面值;data.js 会再做兜底归一(去空格/小写/剥离 effort 后缀)。
window.MODEL_MAP = {
  canonical: [
    { id: "Claude Fable 5",   vendor: "Anthropic", color: "#D97757", aliases: ["claude-fable-5", "Claude Fable 5", "Fable-5 (high)", "Fable-5"] },
    { id: "Claude Opus 4.8",  vendor: "Anthropic", color: "#E29060", aliases: ["claude-opus-4.8", "Claude Opus 4.8", "Claude Opus 4.8 (high)"] },
    { id: "Claude Sonnet 5",  vendor: "Anthropic", color: "#C58A6B", aliases: ["claude-sonnet-5", "Claude Sonnet 5", "Claude Sonnet 5 (high)"] },
    { id: "Claude Opus 4.7",  vendor: "Anthropic", color: "#B07B5C", aliases: ["Claude Opus 4.7"] },
    { id: "Claude Opus 4.6",  vendor: "Anthropic", color: "#A06E51", aliases: ["Claude Opus 4.6"] },
    { id: "Claude Sonnet 4.6",vendor: "Anthropic", color: "#90614A", aliases: ["claude-sonnet-4.6", "Claude Sonnet 4.6", "Claude Sonnet 4.6 (high)", "Sonnet 4.6"] },
    { id: "Claude Haiku 4.5", vendor: "Anthropic", color: "#704936", aliases: ["claude-haiku-4-5", "claude-haiku-4.5", "Claude Haiku 4.5"] },
    { id: "Claude Opus 4.5",  vendor: "Anthropic", color: "#805443", aliases: ["Claude Opus 4.5", "Opus 4.5"] },
    { id: "GPT-5.5",          vendor: "OpenAI",    color: "#10A37F", aliases: ["gpt-5.5", "GPT 5.5", "GPT-5.5 (high)", "GPT-5.5(high)"] },
    { id: "GPT-5.4",          vendor: "OpenAI",    color: "#1FB892", aliases: ["gpt-5.4", "GPT 5.4", "GPT 5.4 (xhigh)", "GPT-5.4 (high)", "GPT-5.4(high)"] },
    { id: "GPT-5.4 Mini",     vendor: "OpenAI",    color: "#3FC9A6", aliases: ["gpt-5-4-mini", "GPT 5.4 Mini", "gpt-5.4-mini"] },
    { id: "GLM-5.2",          vendor: "zAI",       color: "#5B6CFF", aliases: ["glm-5.2", "GLM 5.2", "GLM-5.2(max)"] },
    { id: "GLM-5.1",          vendor: "zAI",       color: "#7485FF", aliases: ["GLM-5.1"] },
    { id: "Gemini 3.5 Flash", vendor: "Google",    color: "#4285F4", aliases: ["gemini-3.5-flash", "Gemini 3.5 Flash", "Gemini 3.5 Flash (high)"] },
    { id: "Gemini 3 Flash",   vendor: "Google",    color: "#6EA6F7", aliases: ["gemini-3-flash-preview", "gemini-3-flash", "Gemini 3 Flash"] },
    { id: "Gemini 3.1 Pro",   vendor: "Google",    color: "#5A95F5", aliases: ["gemini-3.1-pro"] },
    { id: "Kimi-K2.7-Code",   vendor: "Moonshot",  color: "#7C5CFF", aliases: ["kimi-k2.7-code", "Kimi-K2.7-Code"] },
    { id: "Kimi-K2.6",        vendor: "Moonshot",  color: "#8E6EFF", aliases: ["Kimi-K2.6 (Think)", "K2.6-code-preview"] },
    { id: "DeepSeek V4 Pro",  vendor: "DeepSeek",  color: "#4D6BFE", aliases: ["DeepSeek V4 Pro (max)", "DeepSeek V4 Pro (high)"] },
    { id: "DeepSeek V4 Flash",vendor: "DeepSeek",  color: "#6A82FE", aliases: ["DeepSeek V4 Flash (max)"] },
    { id: "Qwen3.7-Max",      vendor: "Alibaba",   color: "#FF6A00", aliases: ["Qwen3.7-Max"] },
    { id: "Qwen3.6-Plus",     vendor: "Alibaba",   color: "#FF8533", aliases: ["Qwen3.6-Plus(Think)", "Qwen3.6-Plus"] },
    { id: "Grok 4.5",         vendor: "xAI",       color: "#9AA3AF", aliases: ["Grok 4.5"] },
    { id: "Grok Build",       vendor: "xAI",       color: "#B8BFC6", aliases: ["grok-build-0-1", "grok-build-0.1", "Grok Build"] },
    { id: "Tencent Hy3",      vendor: "Tencent",   color: "#12B7F5", aliases: ["Tencent Hy3 (high)", "Tencent Hy3 Preview"] },
    { id: "MiniMax-M3",       vendor: "MiniMax",   color: "#FF5C8A", aliases: ["MiniMax-M3", "minimax-m3"] },
    { id: "MiniMax-M2.7",     vendor: "MiniMax",   color: "#FF7DA3", aliases: ["minimax-m2-7", "MiniMax-M2.7", "MiniMax M2.7"] },
    { id: "Doubao-Seed-2.0-Code", vendor: "ByteDance", color: "#3C8CFF", aliases: ["Doubao-Seed-2.0-Code (high)", "Seed-2.0-Code(high)"] },
    { id: "MiMo-V2.5-Pro",    vendor: "Xiaomi",    color: "#FF6900", aliases: ["MiMo-V2.5-Pro"] }
  ],
  // 厂商默认色(用于未登记模型的兜底着色)
  vendorDefaultColor: "#8A8F98"
};
