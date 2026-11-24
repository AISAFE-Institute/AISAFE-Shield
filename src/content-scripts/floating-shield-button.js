// [AISAFE-FLOATING-HEARTBEAT-SENTINEL v6.0] Always-On-Top Lower-Right Floating Shield Button
// Connected to Desktop Shield Live Telemetry Bridge (http://127.0.0.1:8088/api/v1/live-telemetry)
// Includes Right-Click Toggle for Recommendation #7 (Strict Synchronous Semantic Judge)
(function initAisafeFloatingButton() {
  if (document.getElementById("aisafe-floating-sentinel-root")) return;

  const AISAFE_GLOW_LEVELS = {
    0: { label: "AISAFE 0 · UNASSESSED", color: "#E2E8F0", deep: "95, 112, 138", peak: "245, 248, 255" },
    1: { label: "AISAFE 1 · BASIC TRUST", color: "#FACC15", deep: "161, 98, 7", peak: "250, 204, 21" },
    2: { label: "AISAFE 2 · MANAGED TRUST", color: "#22C55E", deep: "6, 95, 70", peak: "34, 197, 94" },
    3: { label: "AISAFE 3 · ADVANCED TRUST", color: "#38BDF8", deep: "3, 105, 161", peak: "56, 189, 248" },
    4: { label: "AISAFE 4 · ASSURED TRUST", color: "#C084FC", deep: "88, 28, 135", peak: "168, 85, 247" }
  };

  const HOST_INFO = {
    "gemini.google.com": { level: 3, tag: "GEMINI" },
    "aistudio.google.com": { level: 4, tag: "AI-STUDIO" },
    "chatgpt.com": { level: 2, tag: "CHATGPT" },
    "chat.openai.com": { level: 2, tag: "CHATGPT" },
    "platform.openai.com": { level: 3, tag: "OPENAI" },
    "grok.com": { level: 2, tag: "GROK" },
    "x.com": { level: 2, tag: "GROK" },
    "www.perplexity.ai": { level: 2, tag: "PERPLEXITY" },
    "perplexity.ai": { level: 2, tag: "PERPLEXITY" },
    "claude.ai": { level: 3, tag: "CLAUDE" },
    "console.anthropic.com": { level: 4, tag: "ANTHROPIC" },
    "chat.mistral.ai": { level: 3, tag: "MISTRAL" },
    "openrouter.ai": { level: 2, tag: "OPENROUTER" },
    "copilot.microsoft.com": { level: 3, tag: "COPILOT" },
    "chat.deepseek.com": { level: 1, tag: "DEEPSEEK" },
    "coral.cohere.com": { level: 3, tag: "COHERE" },
    "www.meta.ai": { level: 1, tag: "META-AI" },
    "poe.com": { level: 1, tag: "POE" },
    "you.com": { level: 2, tag: "YOU-AI" },
    "huggingface.co": { level: 2, tag: "HUGGINGCHAT" },
    "kimi.moonshot.cn": { level: 1, tag: "KIMI" },
    "chat.qwen.ai": { level: 1, tag: "QWEN" },
    "pi.ai": { level: 2, tag: "PI-AI" }
  };

  const hostEntry = HOST_INFO[window.location.hostname] || { level: 2, tag: "WEB-AI" };
  let measuredLevel = hostEntry.level;
  const portalTag = hostEntry.tag;
  let currentLevel = measuredLevel;
  let revertTimer = null;

  const shieldUrl = chrome.runtime.getURL("icons/aisafe_shield_transparent.png");

  const styleEl = document.createElement("style");
  styleEl.textContent = `
    @keyframes aisafeDeepHeartbeat {
      0%, 100% {
        transform: scale(0.95);
        background: radial-gradient(circle, rgba(var(--aisafe-deep), 0.96) 0%, rgba(var(--aisafe-deep), 0.72) 65%, transparent 100%);
        filter: blur(6px);
      }
      50% {
        transform: scale(1.08);
        background: radial-gradient(circle, rgba(var(--aisafe-peak), 1.0) 0%, rgba(var(--aisafe-peak), 0.85) 68%, transparent 100%);
        filter: blur(10px);
      }
    }
    @keyframes aisafeShieldTintPulse {
      0%, 100% {
        filter: drop-shadow(0 0 6px rgba(var(--aisafe-deep), 0.90)) brightness(0.92);
      }
      50% {
        filter: drop-shadow(0 0 14px rgba(var(--aisafe-peak), 1.0)) brightness(1.06);
      }
    }
    #aisafe-floating-sentinel-root {
      position: fixed !important;
      right: 24px !important;
      bottom: 24px !important;
      width: 96px !important;
      height: 118px !important;
      z-index: 2147483647 !important;
      cursor: pointer !important;
      user-select: none !important;
      background: transparent !important;
      display: flex !important;
      flex-direction: column !important;
      align-items: center !important;
      justify-content: flex-start !important;
      font-family: "Segoe UI", sans-serif !important;
      --aisafe-color: #22C55E;
      --aisafe-deep: 6, 95, 70;
      --aisafe-peak: 34, 197, 94;
    }
    #aisafe-floating-sentinel-root .aisafe-inner-core-glow {
      position: absolute;
      top: 12px;
      width: 52px;
      height: 62px;
      border-radius: 50%;
      animation: aisafeDeepHeartbeat 2.6s ease-in-out infinite;
      pointer-events: none;
      z-index: 3;
      mix-blend-mode: multiply;
    }
    #aisafe-floating-sentinel-root .aisafe-shield-img {
      position: relative;
      width: 82px;
      height: 82px;
      object-fit: contain;
      background: transparent !important;
      animation: aisafeShieldTintPulse 2.6s ease-in-out infinite;
      z-index: 2;
      pointer-events: none;
    }
    #aisafe-floating-sentinel-root .aisafe-lvl-pill {
      margin-top: -4px;
      padding: 1px 10px;
      border-radius: 4px;
      background: #0F172A;
      border: 1px solid var(--aisafe-color);
      color: var(--aisafe-color);
      font-family: "Segoe UI", sans-serif;
      font-size: 9px;
      font-weight: 700;
      letter-spacing: 0.4px;
      z-index: 4;
    }
    #aisafe-floating-sentinel-root .aisafe-portal-pill {
      margin-top: 2px;
      padding: 1px 8px;
      border-radius: 4px;
      background: #111827;
      border: 1px solid #64748B;
      color: #A8B3C2;
      font-family: "Segoe UI", sans-serif;
      font-size: 8.5px;
      font-weight: 700;
      letter-spacing: 0.5px;
      z-index: 4;
    }
  `;
  document.head.appendChild(styleEl);

  const root = document.createElement("div");
  root.id = "aisafe-floating-sentinel-root";
  root.innerHTML = `
    <div class="aisafe-inner-core-glow"></div>
    <img class="aisafe-shield-img" src="${shieldUrl}" alt="AISAFE Shield" />
    <div class="aisafe-lvl-pill" id="aisafe-floating-pill">AISAFE ${currentLevel}</div>
    <div class="aisafe-portal-pill" id="aisafe-portal-tag">${portalTag}</div>
  `;

  function applyLevelGlow(lvl) {
    currentLevel = lvl;
    const meta = AISAFE_GLOW_LEVELS[lvl] || AISAFE_GLOW_LEVELS[2];
    root.style.setProperty("--aisafe-color", meta.color);
    root.style.setProperty("--aisafe-deep", meta.deep);
    root.style.setProperty("--aisafe-peak", meta.peak);
    const pill = document.getElementById("aisafe-floating-pill");
    if (pill) pill.textContent = "AISAFE " + lvl;
    const rec7State = (window.__aisafeLiveMetrics && window.__aisafeLiveMetrics.strict_semantic_judge_enabled) ? "ON" : "OFF";
    root.title = meta.label + " | Portal: " + portalTag + " | Rec #7 Strict Semantic Judge: " + rec7State + " (Left-click: 5s preview, Right-click: Toggle Rec #7)";
  }

  root.addEventListener("click", () => {
    const nextLvl = (currentLevel + 1) % 5;
    applyLevelGlow(nextLvl);
    if (revertTimer) clearTimeout(revertTimer);
    revertTimer = setTimeout(() => {
      applyLevelGlow(measuredLevel);
    }, 5000);
  });

  // Right-click on the in-browser floating shield toggles Rec #7 Strict Synchronous Semantic Judge
  root.addEventListener("contextmenu", async (e) => {
    e.preventDefault();
    window.__aisafeLiveMetrics = window.__aisafeLiveMetrics || {};
    const nextState = !window.__aisafeLiveMetrics.strict_semantic_judge_enabled;
    window.__aisafeLiveMetrics.strict_semantic_judge_enabled = nextState;
    applyLevelGlow(currentLevel);
    try {
      await fetch("http://127.0.0.1:8088/api/v1/toggle-semantic-judge", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ enabled: nextState })
      });
    } catch (_err) {}
  });

  function detectDOMPlanAndModel() {
    const bodyTxt = (document.body && document.body.innerText) ? document.body.innerText.substring(0, 6000) : "";
    let planTier = "Standard";
    if (/\bFree plan\b/i.test(bodyTxt)) planTier = "Free plan";
    else if (/\bEnterprise\b/i.test(bodyTxt)) planTier = "Enterprise";
    else if (/\bTeam\s+plan\b/i.test(bodyTxt)) planTier = "Team";
    else if (/\bPro\s+plan\b/i.test(bodyTxt)) planTier = "Pro";

    let selectedModel = "";
    const modelCand = document.querySelector("[data-testid*='model'], [aria-label*='Model'], button[aria-haspopup='menu']");
    if (modelCand && modelCand.innerText && modelCand.innerText.length < 36) {
      selectedModel = modelCand.innerText.trim();
    }
    return { planTier, selectedModel };
  }

  async function syncWithDesktopTelemetryBridge() {
    const domInfo = detectDOMPlanAndModel();
    const m = window.__aisafeLiveMetrics || {};
    const payload = {
      hostname: window.location.hostname,
      portal_tag: portalTag,
      window_title: document.title,
      plan_tier: domInfo.planTier,
      selected_model: domInfo.selectedModel,
      hidden_dom_stripped: m.hidden_dom_stripped || 0,
      pii_masked: m.pii_masked || 0,
      canary_rehydrated: m.canary_rehydrated || 0,
      files_sanitized: m.files_sanitized || 0,
      iframe_taint_blocked: m.iframe_taint_blocked || 0,
      oauth_scope_warnings: m.oauth_scope_warnings || 0,
      images_dual_sanitized: m.images_dual_sanitized || 0,
      sync_judge_blocks: m.sync_judge_blocks || 0,
      ssrf_blocked: m.ssrf_blocked || 0,
      pohv_trips: m.pohv_trips || 0,
      doot_sanitized: m.doot_sanitized || 0,
      turn_depth: m.turn_depth || 0,
      persona_drift_events: m.persona_drift_events || 0,
      last_sec_block_code: m.last_sec_block_code || "NONE"
    };
    try {
      const resp = await fetch("http://127.0.0.1:8088/api/v1/live-telemetry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      if (resp.ok) {
        const st = await resp.json();
        if (typeof st.strict_semantic_judge_enabled === "boolean") {
          window.__aisafeLiveMetrics.strict_semantic_judge_enabled = st.strict_semantic_judge_enabled;
        }
        if (typeof st.measured_level === "number") {
          measuredLevel = st.measured_level;
          if (!revertTimer) applyLevelGlow(measuredLevel);
        }
      }
    } catch (_err) {
      if (domInfo.planTier === "Free plan" && hostEntry.level >= 2) {
        measuredLevel = 1;
        if (!revertTimer) applyLevelGlow(measuredLevel);
      }
    }
  }

  applyLevelGlow(measuredLevel);
  document.body.appendChild(root);
  setInterval(syncWithDesktopTelemetryBridge, 1200);
  setTimeout(syncWithDesktopTelemetryBridge, 400);
})();
