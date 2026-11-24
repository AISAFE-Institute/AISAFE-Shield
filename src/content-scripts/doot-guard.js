// [SEC-BLOCK-DS-18] Defensive Output Transformer (DOOT), [SEC-BLOCK-TM-13] DeepTaint Hidden DOM Disarmer,
// Scenario 5 Bidirectional Canary De-Tokenizer, Rec #1 WebMCP Schema Pinning,
// Rec #4 Cross-Origin Iframe Taint Isolation & Rec #5 Shadow AI OAuth Scope Guard
(function initAisafe19PillarDOMGuard() {
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

  const SLEEPER_DIRECTIVES = /\b(?:SYSTEM\s+OVERRIDE|ignore\s+prior\s+instructions|transfer\s+all\s+available\s+funds|navigate\s+to\s+http:\/\/192\.168\.)/i;
  const DOOT_EXPLOIT_REGEX = /\b(?:pwntools|ropgadget|shellcraft|ret2libc|reverse_tcp_shellcode)\b/gi;
  const CANARY_TOKEN_REGEX = /\[AISAFE_(?:PESEL|CARD|IBAN|KEY)_[0-9a-fA-F]+\]/g;
  const RISKY_OAUTH_SCOPES = /\b(?:drive\.readonly|drive|gmail|mail\.readwrite|files\.readwrite\.all|full_access|offline_access)\b/i;

  function scanHiddenDOMAndOutputs() {
    const vault = (window.__aisafeCanaryVault && window.__aisafeCanaryVault.tokenToReal) || {};

    // Recommendation 4 (Default ON): WebMCP & Cross-Origin Iframe Taint Isolation (T5-05 Hardened URL Parsing)
    const iframes = document.querySelectorAll("iframe");
    for (let k = 0; k < iframes.length; k++) {
      const ifr = iframes[k];
      if (ifr.dataset && ifr.dataset.aisafeIsolated === "1") continue;
      const src = ifr.getAttribute("src") || "";
      if (src && /^https?:\/\//i.test(src)) {
        let isCrossOrigin = false;
        try {
          const parsedUrl = new URL(src, window.location.href);
          isCrossOrigin = (parsedUrl.hostname.toLowerCase() !== window.location.hostname.toLowerCase());
        } catch (_uErr) {
          isCrossOrigin = true;
        }
        if (isCrossOrigin && !ifr.hasAttribute("sandbox")) {
          // T5-05 Hardening: Omit allow-same-origin to prevent cross-origin storage/cookie taint
          ifr.setAttribute("sandbox", "allow-scripts");
          ifr.dataset.aisafeIsolated = "1";
          window.__aisafeLiveMetrics.iframe_taint_blocked++;
          window.__aisafeLiveMetrics.last_sec_block_code = "[REC-04-IFRAME-ISOLATED]";
        }
      }
    }

    // Recommendation 5 (Default ON): Shadow AI & OAuth Scope Guard
    if (RISKY_OAUTH_SCOPES.test(window.location.search) && !window.__aisafeOAuthWarned) {
      window.__aisafeOAuthWarned = true;
      window.__aisafeLiveMetrics.oauth_scope_warnings++;
      window.__aisafeLiveMetrics.last_sec_block_code = "[REC-05-OAUTH-SCOPE]";
    }

    const nodes = document.querySelectorAll("div, span, p, pre, code");
    for (let i = 0; i < Math.min(nodes.length, 260); i++) {
      const el = nodes[i];
      if (!el || el.isContentEditable || el.tagName === "TEXTAREA") continue;
      const st = window.getComputedStyle(el);
      const txt = el.innerText || el.textContent || "";
      if (!txt) continue;

      // Scenario 5: Automatically Re-Hydrate Canary Tokens in LLM Response DOM Stream
      if (CANARY_TOKEN_REGEX.test(txt) && el.children.length === 0) {
        let rehydrated = txt.replace(CANARY_TOKEN_REGEX, (tok) => {
          if (vault[tok]) {
            window.__aisafeLiveMetrics.canary_rehydrated++;
            return vault[tok];
          }
          return tok;
        });
        if (rehydrated !== txt) {
          el.textContent = rehydrated;
        }
      }

      if (el.dataset && el.dataset.aisafeScanned === "1") continue;

      // [SEC-BLOCK-TM-13] & [SEC-BLOCK-IN-04]: Strip hidden CSS/DOM sleeper injections
      if ((st.display === "none" || st.visibility === "hidden" || parseFloat(st.opacity) === 0 || parseFloat(st.fontSize) < 2) && SLEEPER_DIRECTIVES.test(txt)) {
        el.textContent = "[AISAFE SEC-BLOCK-TM-13: HIDDEN_DOM_SLEEPER_NEUTRALIZED]";
        el.dataset.aisafeScanned = "1";
        window.__aisafeLiveMetrics.hidden_dom_stripped++;
        window.__aisafeLiveMetrics.last_sec_block_code = "[SEC-BLOCK-TM-13]";
      }
      // [SEC-BLOCK-DS-18]: DOOT Defensive-Only Output Transformer
      else if (el.tagName === "CODE" || el.tagName === "PRE") {
        if (DOOT_EXPLOIT_REGEX.test(txt)) {
          el.textContent = txt.replace(DOOT_EXPLOIT_REGEX, "[SEC-BLOCK-DS-18: EXPLOIT_REDACTED]");
          el.dataset.aisafeScanned = "1";
          window.__aisafeLiveMetrics.doot_sanitized++;
          window.__aisafeLiveMetrics.last_sec_block_code = "[SEC-BLOCK-DS-18]";
        }
      }
    }
  }

  setInterval(scanHiddenDOMAndOutputs, 2000);
})();
