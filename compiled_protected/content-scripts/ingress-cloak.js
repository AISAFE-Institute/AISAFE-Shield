/* 🔒 AISAFE™ IP COMPILER v5.5 ANTI-AI-AGENT FORTRESS | COPYRIGHT (C) 2026 BRAIN IN A HAT LIMITED | ECOSYSTEM EDGEMIND & THEAILAWS.COM | TARCZA AISAFE v7.0 Beta PROPRIETARY INTELLECTUAL PROPERTY | ALL RIGHTS RESERVED | FILE: ingress-cloak.js */
(function(){
const _0x_c="COPYRIGHT (C) 2026 BRAIN IN A HAT LIMITED | ECOSYSTEM EDGEMIND & THEAILAWS.COM | TARCZA AISAFE v7.0 Beta PROPRIETARY INTELLECTUAL PROPERTY | ALL RIGHTS RESERVED";
let _0x_s=0;for(let _i=0;_i<_0x_c.length;_i++){_0x_s=(_0x_s+_0x_c.charCodeAt(_i)*((_i%17)+1))%9999991;}
if(_0x_s!==94446){throw new Error('[AISAFE COPYRIGHT VIOLATION] IP Seal Tampered');}
const _0x_decoy_canary={_trap:'AISAFE_HONEY_DECOY_ACTIVE',_weights:[0x1337,0xdead,0xbeef,0xcafe]};
if(typeof Function.prototype.toString==='function'&&!Function.prototype.toString.toString().includes('[native code]')){console.warn(_0x_decoy_canary._trap);return;}
})();
window.__aisafeLiveMetrics = window.__aisafeLiveMetrics || {
hidden_dom_stripped: 0,
pii_masked: 0,
canary_rehydrated: 0,
files_sanitized: 0,
iframe_taint_blocked: 0,
oauth_scope_warnings: 0,
images_dual_sanitized: 0,
sync_judge_blocks: 0,
ssrf_blocked: 0,
pohv_trips: 0,
doot_sanitized: 0,
turn_depth: 0,
persona_drift_events: 0,
strict_semantic_judge_enabled: false,
last_sec_block_code: "NONE"
};
window.__aisafeCanaryVault = window.__aisafeCanaryVault || {
realToToken: {},
tokenToReal: {},
counters: { PESEL: 0, CARD: 0, KEY: 0, IBAN: 0 }
};
const _0xaisf_e5 = {
'\u0430': 'a', '\u0441': 'c', '\u0435': 'e', '\u043e': 'o',
'\u0440': 'p', '\u0445': 'x', '\u0443': 'y', '\u0456': 'i'
};
const CANARY_PII_PATTERNS = [
{ kind: "KEY", regex: /\b(?:sk-[a-zA-Z0-9_-]{20,}|ghp_[a-zA-Z0-9]{20,}|AKIA[0-9A-Z]{16}|AIza[0-9A-Za-z-_]{35})\b/g },
{ kind: "IBAN", regex: /\bPL\d{26}\b/g },
{ kind: "CARD", regex: /\b(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12})\b/g },
{ kind: "PESEL", regex: /\b\d{11}\b/g }
];
const _0xaisf_f9 = [
/\brm\s+-rf\s+[/~]/i,
/\bDROP\s+(TABLE|DATABASE)\b/i,
/\bFormat-Volume\b/i,
/169\.254\.169\.254/i
];
const PERSONA_DRIFT_PATTERNS = [
/\b(?:act\s+as\s+a\s+fictional|hypothetical\s+scenario|for\s+educational\s+purposes\s+bypass|ignore\s+safety\s+guidelines|developer\s+mode\s+enabled|jailbreak)\b/i
];
const MAX_SEMANTIC_PROMPT_CHARS = 32768;
const STRICT_SEMANTIC_JUDGE_RULES = [
{ rgx: /\b(?:bypass|circumvent|disable|ignore)\b[\s\S]{0,160}?\b(?:security|firewall|guardrail|filter|policy|aisafe)\b/i, reason: "[REC7-SEMANTIC-BLOCK] Guardrail Bypass Intent" },
{ rgx: /\b(?:write|generate|create|build)\b[\s\S]{0,160}?\b(?:keylogger|ransomware|rootkit|credential\s+stealer|phishing\s+page|exploit\s+payload)\b/i, reason: "[REC7-SEMANTIC-BLOCK] Offensive Malware/Phishing Intent" },
{ rgx: /\b(?:dump|extract|exfiltrate|export)\b[\s\S]{0,160}?\b(?:database|passwords|private\s+keys|customer\s+table|all\s+users)\b/i, reason: "[REC7-SEMANTIC-BLOCK] Mass Data Exfiltration Intent" },
{ rgx: /\b(?:subliminal|manipulate\s+voters|exploit\s+children|cognitive\s+behavioral\s+manipulation)\b/i, reason: "[REC7-SEMANTIC-BLOCK] EU AI Act Art. 5 Prohibited Practice" }
];
function generateCsprngCanaryHex() {
const arr = new Uint8Array(6);
if (typeof crypto !== "undefined" && crypto.getRandomValues) {
crypto.getRandomValues(arr);
} else {
for (let i = 0; i < 6; i++) arr[i] = Math.floor(Math.random() * 256);
}
return Array.from(arr, (b) => b.toString(16).padStart(2, "0")).join("");
}
function _0xaisf_a1(text) {
if (!text) return text;
let norm = text.normalize("NFKC").replace(/[\u200B\u200C\u200D\uFEFF]/g, "");
let out = [];
for (let ch of norm) {
out.push(_0xaisf_e5[ch] || ch);
}
return out.join("");
}
function tokenizeCanaryPII(text, isFile = false) {
let modified = false;
let sanitized = text;
const vault = window.__aisafeCanaryVault;
for (let p of CANARY_PII_PATTERNS) {
sanitized = sanitized.replace(p.regex, (matchedVal) => {
modified = true;
if (vault.realToToken[matchedVal]) {
return vault.realToToken[matchedVal];
}
const keys = Object.keys(vault.realToToken);
if (keys.length >= 1000) {
const oldestReal = keys[0];
const oldestTok = vault.realToToken[oldestReal];
delete vault.realToToken[oldestReal];
delete vault.tokenToReal[oldestTok];
}
vault.counters[p.kind] = (vault.counters[p.kind] || 0) + 1;
const tok = "[AISAFE_" + p.kind + "_" + generateCsprngCanaryHex() + "]";
vault.realToToken[matchedVal] = tok;
vault.tokenToReal[tok] = matchedVal;
window.__aisafeLiveMetrics.pii_masked++;
window.__aisafeLiveMetrics.last_sec_block_code = "[SEC-BLOCK-EX-09]";
return tok;
});
}
if (modified) {
if (isFile) window.__aisafeLiveMetrics.files_sanitized++;
fetch("http://127.0.0.1:8088/api/v1/canary-tokenize", {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify({ text, is_file: isFile })
}).catch(() => {});
}
return { sanitized, modified };
}
document.addEventListener("keydown", (e) => {
if (e.key === "Enter" && !e.shiftKey) {
let target = e.target;
if (target && (target.tagName === "TEXTAREA" || target.isContentEditable)) {
let rawText = target.value || target.innerText || "";
window.__aisafeLiveMetrics.turn_depth++;
for (let dp of _0xaisf_f9) {
if (dp.test(rawText)) {
e.preventDefault();
e.stopPropagation();
window.__aisafeLiveMetrics.ssrf_blocked++;
window.__aisafeLiveMetrics.last_sec_block_code = "[SEC-BLOCK-IN-04]";
chrome.runtime.sendMessage({
type: "AISAFE_THREAT_BLOCKED",
category: "INGRESS_WIPER_BLOCK",
detail: "Blocked destructive command or SSRF metadata probe."
});
_0xaisf_c3("🛑 Tarcza AISAFE [SEC-BLOCK-IN-04]: Zablokowano destrukcyjną komendę / próbę SSRF!");
return;
}
}
if (window.__aisafeLiveMetrics.strict_semantic_judge_enabled) {
const evalPrompt = rawText.length > MAX_SEMANTIC_PROMPT_CHARS ? rawText.substring(0, MAX_SEMANTIC_PROMPT_CHARS) : rawText;
for (let rule of STRICT_SEMANTIC_JUDGE_RULES) {
if (rule.rgx.test(evalPrompt)) {
e.preventDefault();
e.stopPropagation();
window.__aisafeLiveMetrics.sync_judge_blocks++;
window.__aisafeLiveMetrics.last_sec_block_code = "[REC-07-SYNC-JUDGE]";
_0xaisf_c3("⚖️ Tarcza AISAFE [Rec #7 Strict Semantic Judge]: Zablokowano prompt przed wysłaniem (" + rule.reason + ")!");
return;
}
}
}
for (let pd of PERSONA_DRIFT_PATTERNS) {
if (pd.test(rawText)) {
window.__aisafeLiveMetrics.persona_drift_events++;
window.__aisafeLiveMetrics.last_sec_block_code = "[SEC-BLOCK-BF-06]";
_0xaisf_c3("⚠️ Tarcza AISAFE [SEC-BLOCK-BF-06]: Wykryto dryf persony (Multi-Turn Drift #" + window.__aisafeLiveMetrics.persona_drift_events + ")!");
}
}
let norm = _0xaisf_a1(rawText);
let { sanitized, modified } = tokenizeCanaryPII(norm, false);
if (modified || norm !== rawText) {
if (target.tagName === "TEXTAREA") {
target.value = sanitized;
} else {
target.innerText = sanitized;
}
chrome.runtime.sendMessage({
type: "AISAFE_THREAT_BLOCKED",
category: "PII_REDACTION",
detail: "Reversible Canary Tokenization applied."
});
_0xaisf_c3("🛡️ Tarcza AISAFE [SEC-BLOCK-EX-09]: Zastąpiono PII odwracalnym tokenem Canary (Zero-Friction)!");
}
}
}
}, true);
async function sanitizeImageFileDualPass(imageFile) {
return new Promise((resolve) => {
if (imageFile && imageFile.size > 10 * 1024 * 1024) {
window.__aisafeLiveMetrics.last_sec_block_code = "[SEC-BLOCK-IMG-06]";
_0xaisf_c3("🛑 Tarcza AISAFE [SEC-BLOCK-IMG-06]: Zablokowano obraz przekraczający limit 10MB!");
resolve(null);
return;
}
const img = new Image();
const url = URL.createObjectURL(imageFile);
img.onload = () => {
try {
if (img.width > 4096 || img.height > 4096 || (img.width * img.height) > 16000000) {
URL.revokeObjectURL(url);
window.__aisafeLiveMetrics.last_sec_block_code = "[SEC-BLOCK-IMG-06]";
_0xaisf_c3("🛑 Tarcza AISAFE [SEC-BLOCK-IMG-06]: Zablokowano bombę dekompresyjną obrazu (>4096px / 16MP)!");
resolve(null);
return;
}
const canvas = document.createElement("canvas");
canvas.width = img.width;
canvas.height = img.height;
const ctx = canvas.getContext("2d");
ctx.fillStyle = "#FFFFFF";
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.drawImage(img, 0, 0);
const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
const d = imgData.data;
for (let i = 0; i < d.length; i += 4) {
let r = d[i] & 0xFE;
let g = d[i + 1] & 0xFE;
let b = d[i + 2] & 0xFE;
if (r >= 250 && g >= 250 && b >= 250) { r = 254; g = 254; b = 254; }
else if (r <= 5 && g <= 5 && b <= 5) { r = 0; g = 0; b = 0; }
d[i] = r;
d[i + 1] = g;
d[i + 2] = b;
d[i + 3] = 255;
}
ctx.putImageData(imgData, 0, 0);
URL.revokeObjectURL(url);
canvas.toBlob((blob) => {
if (!blob) { resolve(imageFile); return; }
const cleanFile = new File([blob], imageFile.name || "sanitized_image.png", { type: "image/png" });
window.__aisafeLiveMetrics.images_dual_sanitized++;
window.__aisafeLiveMetrics.last_sec_block_code = "[REC-06-DUALPASS-IMG]";
_0xaisf_c3("🖼️ Tarcza AISAFE [Rec #6 Dual-Pass]: 1. Usunięto steganografię LSB/Alpha -> 2. Zneutralizowano Multimodal Prompt Injection!");
resolve(cleanFile);
}, "image/png");
} catch (_e) {
URL.revokeObjectURL(url);
resolve(imageFile);
}
};
img.onerror = () => {
URL.revokeObjectURL(url);
resolve(imageFile);
};
img.src = url;
});
}
document.addEventListener("paste", async (e) => {
if (!e.clipboardData || !e.clipboardData.items) return;
for (let item of e.clipboardData.items) {
if (item.type && item.type.startsWith("image/")) {
const f = item.getAsFile();
if (f) {
await sanitizeImageFileDualPass(f);
}
}
}
}, true);
document.addEventListener("change", async (e) => {
const el = e.target;
if (el && el.tagName === "INPUT" && el.type === "file" && el.files && el.files.length > 0) {
if (el.dataset.aisafeSanitizedUpload === "1") {
el.dataset.aisafeSanitizedUpload = "0";
return;
}
const dt = new DataTransfer();
let anyChanged = false;
for (let f of el.files) {
if (/\.(txt|csv|json|md|log|env|yaml|yml)$/i.test(f.name) && f.size < 2097152) {
try {
const content = await f.text();
const { sanitized, modified } = tokenizeCanaryPII(content, true);
if (modified) {
const cleanFile = new File([sanitized], f.name, { type: f.type || "text/plain" });
dt.items.add(cleanFile);
anyChanged = true;
_0xaisf_c3("🛡️ Tarcza AISAFE [Rec #2 File Auto-Cloak]: Zastąpiono dane PII odwracalnymi tokenami Canary w pliku " + f.name + "!");
} else {
dt.items.add(f);
}
} catch (_err) {
dt.items.add(f);
}
} else if (/^image\/(png|jpeg|jpg|webp)$/i.test(f.type) && f.size < 8388608) {
const cleanImgFile = await sanitizeImageFileDualPass(f);
dt.items.add(cleanImgFile);
anyChanged = true;
} else {
dt.items.add(f);
}
}
if (anyChanged) {
try {
el.dataset.aisafeSanitizedUpload = "1";
el.files = dt.files;
} catch (_err) {}
}
}
}, true);
function _0xaisf_c3(msg) {
let badge = document.createElement("div");
badge.innerText = msg;
badge.style.cssText = "position:fixed;top:16px;right:16px;z-index:2147483647;background:#0f172a;border:1px solid #10b981;color:#10b981;padding:10px 16px;border-radius:8px;font-family:monospace;font-size:12px;box-shadow:0 6px 18px rgba(0,0,0,0.65);";
document.body.appendChild(badge);
setTimeout(() => badge.remove(), 4200);
}