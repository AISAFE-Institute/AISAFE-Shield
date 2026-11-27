> **🌐 Select Language / Wybierz Język / Sprache wählen / Seleccionar Idioma / Choisir la Langue / Seleziona Lingua / Taal Kiezen / Selecionar Idioma:**
>
> **🇬🇧 English** · [🇵🇱 Polski](README.pl.md) · [🇩🇪 Deutsch](README.de.md) · [🇪🇸 Español](README.es.md) · [🇫🇷 Français](README.fr.md) · [🇮🇹 Italiano](README.it.md) · [🇳🇱 Nederlands](README.nl.md) · [🇵🇹 Português](README.pt.md)

---

# 🛡️ AISAFE™ Shield v7.0 Beta

**Local, offline runtime security for Windows that blocks prompt injections, redacts PII from your clipboard and files, and caps autonomous agent spending in real time—with zero cloud telemetry and `< 0.05 ms` overhead.**

[![License](https://img.shields.io/badge/License-Proprietary%20%2F%20Commercial-blue.svg)](LICENSE.md)
[![Edition](https://img.shields.io/badge/Edition-Tier%201%3A%207--Day%20Free%20Trial-brightgreen.svg)](https://shield.aisafeinstitute.org/pricing)
[![Privacy](https://img.shields.io/badge/Privacy-100%25%20Offline%20%C2%B7%20Zero--Cloud-purple.svg)]()
[![Compliance](https://img.shields.io/badge/Compliance-EU%20AI%20Act%20%C2%B7%20ISO%2042001-blueviolet.svg)]()
[![Platform](https://img.shields.io/badge/Platform-Windows%2010%20%2F%2011%20(x64)-informational.svg)]()

---

<!-- Replace with a 15–30s GIF or screenshot showing the Floating Shield, Live Sentinel HUD, and 1-second Hover Popover -->
<p align="center">
  <img src="[INSERT_DEMO_GIF_OR_SCREENSHOT_URL]" alt="AISAFE Shield Live Sentinel HUD and Floating Desktop Overlay" width="820" />
</p>

---

## ⚙️ Architecture & Performance Profile

Traditional firewalls and endpoint security tools inspect network packets, leaving them blind to prompt semantics, clipboard scraping, and runaway autonomous agent loops. **AISAFE Shield** sits locally as an execution boundary between your desktop applications, web browsers, and local or cloud-hosted LLMs:

* **Sub-Millisecond Deterministic Pipeline (`< 0.05 ms`):** Uses compiled native deterministic automata and heuristic rule engines rather than secondary neural guard models—eliminating inference bottlenecks.
* **Zero GPU VRAM Footprint (`0.0 MB`):** Runs entirely on CPU with minimal memory overhead, leaving 100% of your GPU VRAM available for local models (Ollama, llama.cpp, LM Studio).
* **100% Air-Gapped Processing:** All inspection, PII redaction, and cryptographic token verification occur in local RAM. Zero prompts, telemetry, or metadata ever leave your machine.

---

## ⚡ Core Security & Runtime Defense Capabilities

### 1. Ingress & Cognitive Integrity Protection
* **Real-Time Prompt Injection & Jailbreak Neutralization:** Continuous semantic and structural inspection arrests direct prompt injections, adversarial roleplay prompts, and invisible payload exploits.
* **Destructive Command Interception:** Blocks system wiper commands, shell/terminal injection attempts, and unauthorized local script dispatches.
* **Session Integrity & Anti-Drift Guard:** Analyzes multi-turn conversations to detect persona degradation, behavioral divergence, and progressive context-window bypass attacks.
* **Homoglyph & Unicode Sanitizer:** Strips zero-width spaces, Cyrillic/Greek homoglyph spoofs, and hidden bidirectional control characters used to evade LLM filters.
* **Local Model Binary Header Sentinel:** Inspects local model weight headers (`GGUF`, `SafeTensors`) prior to load time to detect malformed structures and arbitrary code execution vectors.

### 2. Zero-Leak Data Privacy & DLP
* **Data Cloak & PII Redactor:** Automatic in-memory masking of personal identifiers, national ID numbers, passwords, SSH/API keys, and financial credentials before prompts leave your machine.
* **Active Clipboard Sentinel:** Monitors and shields the Windows system clipboard from unauthorized background scraping by desktop AI clients.
* **Pre-Flight File DLP Sanitizer:** Sanitizes attached spreadsheets, documents, and JSON payloads in memory prior to cloud model upload.
* **Shadow AI OAuth Scope Guard:** Detects and restricts excessive third-party OAuth permissions and unauthorized credential transfers.
* **Browser DOM & Iframe Taint Isolation:** Prevents cross-context prompt exfiltration and browser-based cross-site data leaks.

### 3. Agentic Autonomy, Tool Governance & Spend Control
* **Transaction Velocity & Fiscal Spend Dampener:** Enforces rate limits and hourly monetary caps to stop runaway agent loops and eliminate Denial of Wallet risks (OWASP LLM10).
* **Single-Use Ephemeral Capability Gate (NanoTicket Gate):** Issues cryptographic single-use tokens (`HMAC-SHA256`) for agent tool executions, blocking replay attacks and unauthorized tool calls.
* **Proof-of-Human-Volition (PoHV):** Requires explicit, verifiable operator confirmation before executing destructive or irreversible actions.
* **Tool Schema Integrity Pinning:** Pins MCP/tool definitions at session start to prevent mid-session tool poisoning and dynamic schema mutations.
* **Target Authorization Gate:** Restricts outbound agent network calls and blocks Server-Side Request Forgery (SSRF) targeting internal networks or cloud metadata endpoints.

### 4. Continuous Monitoring & Fail-Safe Controls
* **Built-in AI Agent Monitor:** Tracks, classifies, and enforces boundaries across up to 50 concurrent AI threads and desktop processes.
* **Autonomous Fail-Safe Circuit Breaker:** Immediately isolates compromised sessions or freezes execution when critical integrity violations occur.
* **Heartbeat Visual & Auditory Pulse:** Triggers an audible chime and red pulsing shield state (10s Alarm / 5s Normal cycle) whenever protection degrades, persisting until compliance is restored.
* **Hover Status & Threat Popover:** Hovering over the floating desktop shield for 1+ seconds displays live session integrity, active process counts, and threat telemetry.
* **Holistic Assurance Certificate (HAC):** One-click export of audit dossiers (`HTML` and `PDF`) mapped to **EU AI Act** and **ISO 42001** compliance controls.

> [!WARNING]
> **Platform Risk Classification (AISAFE Levels 1–4):**  
> AISAFE Shield classifies connected AI endpoints from **Level 4 (Maximum Isolation)** down to **Level 1 (Unverified / High Exposure)**. Platforms flagged as **AISAFE 1** or **AISAFE 2** lack strict data-retention or sandbox guarantees—avoid transmitting proprietary source code or sensitive PII to those endpoints.

---

## 🚀 Quick Start & Verification

### System Requirements
* **OS:** Windows 10 (Build 19045+) or Windows 11 (64-bit)
* **Hardware:** x64 CPU · 4 GB RAM minimum · `0.0 MB` GPU VRAM required
* **Supported Environments:** Major Chromium/Gecko browsers, desktop LLM runners (Ollama, LM Studio), and local agent frameworks

### Installation & Binary Verification
1. Download `AISAFE_Shield_v7.0_Beta_Windows_Setup.exe` from the [GitHub Releases](https://github.com/AISAFE-Institute/AISAFE-Shield/releases) page.
2. Verify the installer checksum before execution:
   ```powershell
   Get-FileHash .\AISAFE_Shield_v7.0_Beta_Windows_Setup.exe -Algorithm SHA256
   ```
   *Expected SHA-256:* `[INSERT_SHA256_HASH]`
3. Run the installer, follow the setup wizard, and accept the EULA on first launch.
4. The floating metallic shield will appear on your desktop (*Always on Top*), indicating active protection.

### Controls & Clean Removal
* **Left-Click Shield:** Opens the **Live Sentinel HUD** (active AI platforms, running agent threads, and real-time event logs).
* **Right-Click Shield:** Opens the quick menu (Settings, Theme, Circuit Breaker Test, HAC Audit Export, Language).
* **Hover (1+ Second):** Displays live integrity status and current threat level.
* **Uninstall:** Remove cleanly at any time via **Windows Settings → Apps → Installed Apps → AISAFE Shield** (removes all local binaries and runtime hooks without leaving background services).

---

## 💎 Tier Comparison & Licensing

The GitHub release ships as **Tier 1 (7-Day Free Trial)** for full local evaluation. To unlock permanent usage, higher spend caps, or enterprise governance, upgrade via **[shield.aisafeinstitute.org/pricing](https://shield.aisafeinstitute.org/pricing)** and enter your key in **Settings → License Activation** (no reinstallation required).

| Capability / Feature | Tier 1: Community (GitHub) | Tier 2: Pro SOHO | Tier 3: AI Fortress | Tier 4: Enterprise Sovereign |
| :--- | :---: | :---: | :---: | :---: |
| **License Duration** | 7-Day Free Trial | Permanent Lifetime | Permanent / Annual | Dedicated Enterprise SLA |
| **AI Platform Scanner** | Top AI Portals | Expanded Portals | Dynamic 1,000+ AI Systems | Custom Internal Endpoints |
| **Agent Process Sentinel** | Standard Monitoring | Advanced Process Guard | Strict Multi-Agent Governance | Central Corporate Fleet Guard |
| **Fiscal Velocity Dampener** | Standard Rate Guard | $100 / hour Cap | **$1,000 / hour Hard Cap** | Custom Treasury & ERP Policy |
| **NanoTicket Tool Gate** | Basic Capability Check | Standard Tokenization | **HMAC-SHA256 Ephemeral Gate** | Hardware-Signed Authorization |
| **Strict Pre-Send Gate** | Manual Option | Standard Inspection | **Synchronous Enclave Gate** | Enterprise Enforced Policy |
| **Audit Dossier (HAC)** | Standard Report | Verified HAC Export | Multi-Agent Decomposition HAC | Sovereign Corporate Audit Dossier |
| **Licensing** | Included in Release | **[Upgrade to Pro](https://shield.aisafeinstitute.org/pricing)** | **[Upgrade to Fortress](https://shield.aisafeinstitute.org/pricing)** | **[Enterprise Inquiries](https://shield.aisafeinstitute.org/pricing)** |

---

**Copyright © 2026 Brain in a Hat Limited · Ecosystem EdgeMind & theAIlaws.com · All Rights Reserved.**  
*Coventry, United Kingdom · Lead Architect: Michał J Florek*