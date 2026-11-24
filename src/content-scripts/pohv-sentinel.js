// [SEC-BLOCK-SK-11] AISAFE Volition Sentinel (Proof-of-Human-Volition & Anti-Skynet Loop Cap)
let agentStepCount = 0;
const MAX_UNATTENDED_STEPS = 3;

const observer = new MutationObserver(() => {
  let streaming = document.querySelector(".result-streaming, [data-is-streaming='true'], .streaming");
  if (streaming) {
    agentStepCount++;
    if (agentStepCount > MAX_UNATTENDED_STEPS * 15) {
      triggerPoHVLockdown();
    }
  }
});

if (document.body) {
  observer.observe(document.body, { childList: true, subtree: true });
}

function triggerPoHVLockdown() {
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
    // T5-05 Hardening: Require hardware/user trusted click event (reject synthetic script .click())
    if (!e || e.isTrusted !== true) {
      return;
    }
    agentStepCount = 0;
    modal.remove();
    chrome.runtime.sendMessage({
      type: "AISAFE_THREAT_BLOCKED",
      category: "VOLITION_POHV",
      detail: "Human operator verified PoHV token."
    });
  });
}
