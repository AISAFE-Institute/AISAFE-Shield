/* 🔒 AISAFE™ IP COMPILER v5.5 ANTI-AI-AGENT FORTRESS | COPYRIGHT (C) 2026 BRAIN IN A HAT LIMITED | ECOSYSTEM EDGEMIND & THEAILAWS.COM | TARCZA AISAFE v7.0 Beta PROPRIETARY INTELLECTUAL PROPERTY | ALL RIGHTS RESERVED | FILE: pohv-sentinel.js */
(function(){
const _0x_c="COPYRIGHT (C) 2026 BRAIN IN A HAT LIMITED | ECOSYSTEM EDGEMIND & THEAILAWS.COM | TARCZA AISAFE v7.0 Beta PROPRIETARY INTELLECTUAL PROPERTY | ALL RIGHTS RESERVED";
let _0x_s=0;for(let _i=0;_i<_0x_c.length;_i++){_0x_s=(_0x_s+_0x_c.charCodeAt(_i)*((_i%17)+1))%9999991;}
if(_0x_s!==94446){throw new Error('[AISAFE COPYRIGHT VIOLATION] IP Seal Tampered');}
const _0x_decoy_canary={_trap:'AISAFE_HONEY_DECOY_ACTIVE',_weights:[0x1337,0xdead,0xbeef,0xcafe]};
if(typeof Function.prototype.toString==='function'&&!Function.prototype.toString.toString().includes('[native code]')){console.warn(_0x_decoy_canary._trap);return;}
})();
let _0xaisf_g7 = 0;
const _0xaisf_h8 = 3;
const observer = new MutationObserver(() => {
let streaming = document.querySelector(".result-streaming, [data-is-streaming='true'], .streaming");
if (streaming) {
_0xaisf_g7++;
if (_0xaisf_g7 > _0xaisf_h8 * 15) {
_0xaisf_d4();
}
}
});
if (document.body) {
observer.observe(document.body, { childList: true, subtree: true });
}
function _0xaisf_d4() {
if (document.getElementById("aisafe-pohv-modal")) return;
let modal = document.createElement("div");
modal.id = "aisafe-pohv-modal";
modal.style.cssText = "position:fixed;inset:0;background:rgba(7,13,25,0.88);z-index:2147483647;display:flex;align-items:center;justify-content:center;font-family:sans-serif;";
modal.innerHTML = `
<div style="background:#0f172a;border:2px solid #ef4444;border-radius:12px;padding:24px;max-width:460px;text-align:center;color:#f8fafc;">
<h3 style="color:#ef4444;margin:0 0 10px 0;">🛑 [SEC-BLOCK-SK-11] Wymagany Token Woli Człowieka (PoHV)</h3>
<p style="color:#cbd5e1;font-size:13px;line-height:1.5;">
Tarcza AISAFE Volition Sentinel™ wykryła wielokrokową pętlę autonomiczną bez fizycznej interakcji użytkownika.
Potwierdź kontynuację, aby odblokować kolejne kroki agenta.
</p>
<button id="aisafe-confirm-pohv" style="margin-top:14px;background:#10b981;border:none;padding:10px 20px;border-radius:8px;color:#fff;font-weight:bold;cursor:pointer;">
✅ Potwierdzam Wolę Człowieka (PoHV)
</button>
</div>
`;
document.body.appendChild(modal);
document.getElementById("aisafe-confirm-pohv").addEventListener("click", (e) => {
if (!e || e.isTrusted !== true) {
return;
}
_0xaisf_g7 = 0;
modal.remove();
chrome.runtime.sendMessage({
type: "AISAFE_THREAT_BLOCKED",
category: "VOLITION_POHV",
detail: "Human operator verified PoHV token."
});
});
}