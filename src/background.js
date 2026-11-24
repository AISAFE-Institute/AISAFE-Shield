// Tarcza AISAFE™ v5.5 Service Worker — Channel: GITHUB_7DAY_TRIAL (WASM Kernel + Key-Gated Vault)
let _aisafeWasmExports = null;

async function initAisafeWasmKernel() {
  try {
    const wasmUrl = chrome.runtime.getURL("wasm/aisafe_core_kernel.wasm");
    const resp = await fetch(wasmUrl);
    const buf = await resp.arrayBuffer();
    const mod = await WebAssembly.instantiate(buf, {});
    _aisafeWasmExports = mod.instance.exports;
  } catch (_e) {
    _aisafeWasmExports = null;
  }
}
initAisafeWasmKernel();

function generateDeterministicUnitId() {
  const nav = (typeof navigator !== "undefined") ? (navigator.userAgent + "|" + navigator.language + "|" + navigator.platform) : "AISAFE_UNIT";
  let h1 = 0xdeadbeef ^ nav.length, h2 = 0x41c6ce57 ^ nav.length;
  for (let i = 0, ch; i < nav.length; i++) {
    ch = nav.charCodeAt(i);
    h1 = Math.imul(h1 ^ ch, 2654435761);
    h2 = Math.imul(h2 ^ ch, 1597334677);
  }
  h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
  h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
  const hex = (h1 >>> 0).toString(16).padStart(8, "0") + (h2 >>> 0).toString(16).padStart(8, "0");
  return {
    installation_id: "INST-GITH-" + hex.toUpperCase().substring(0, 12),
    hwid: (hex + hex + hex + hex).substring(0, 64)
  };
}

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.get("aisafe_state", (res) => {
    if (!res.aisafe_state) {
      const unit = generateDeterministicUnitId();
      const now = Math.floor(Date.now() / 1000);
      const initialState = {
        channel: "GITHUB_7DAY_TRIAL",
        tier: "TIER_1_TRIAL",
        lang: "pl",
        installation_id: unit.installation_id,
        hwid: unit.hwid,
        installed_at: now,
        trial_expires_at: now + (7 * 86400),
        threats_blocked_count: 0,
        pii_redacted_count: 0,
        ssrf_blocked_count: 0,
        pohv_volition_trips: 0
      };
      chrome.storage.local.set({ aisafe_state: initialState });
    }
  });
});

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.type === "AISAFE_THREAT_BLOCKED") {
    chrome.storage.local.get("aisafe_state", (res) => {
      let st = res.aisafe_state || {};
      st.threats_blocked_count = (st.threats_blocked_count || 0) + 1;
      if (msg.category === "PII_REDACTION") st.pii_redacted_count = (st.pii_redacted_count || 0) + 1;
      if (msg.category === "SSRF_AIRGAP" || msg.category === "INGRESS_WIPER_BLOCK") st.ssrf_blocked_count = (st.ssrf_blocked_count || 0) + 1;
      if (msg.category === "VOLITION_POHV") st.pohv_volition_trips = (st.pohv_volition_trips || 0) + 1;
      chrome.storage.local.set({ aisafe_state: st }, () => {
        sendResponse({ status: "ACK", state: st });
      });
    });
    return true;
  }
});
