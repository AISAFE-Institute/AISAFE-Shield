#!/usr/bin/env python3
"""
Tarcza AISAFE™ v5.0 — Local Host Add-On Companion (GITHUB_7DAY_TRIAL)
Provides local hardware HWID extraction, installation verification, 8-language support,
and direct purchase dispatch to the selected License Generation Server.
"""

import json
import time
import hmac
import hashlib
import platform
import urllib.request
from pathlib import Path

CHANNEL = "GITHUB_7DAY_TRIAL"
DEFAULT_TIER = "TIER_1_TRIAL"
SUPPORTED_LANGUAGES = ["pl", "en", "de", "es", "fr", "it", "nl", "pt"]
HWID_SALT = b"AISAFE_SOVEREIGN_HARDWARE_INTEGRITY_SALT_2026"


def get_unit_installation_info() -> dict:
    raw = f"{platform.system()}|{platform.machine()}|{platform.node()}|{platform.processor()}".encode("utf-8")
    hwid = hmac.new(HWID_SALT, raw, hashlib.sha256).hexdigest()
    inst_id = f"INST-{CHANNEL[:4]}-{hwid[:12].upper()}"
    return {
        "installation_id": inst_id,
        "hwid": hwid,
        "channel": CHANNEL,
        "tier": DEFAULT_TIER,
        "supported_languages": SUPPORTED_LANGUAGES,
        "status": "COMPLETED_INSTALLATION_ACTIVE"
    }


def request_license_purchase(server_url: str, email: str, tier: str = DEFAULT_TIER, customer_name: str = "AISAFE User") -> dict:
    import urllib.parse
    parsed = urllib.parse.urlparse(server_url.strip())
    if parsed.scheme.lower() not in ("http", "https") or not parsed.netloc:
        raise ValueError(f"UNSAFE_URL_SCHEME_BLOCKED: Only http:// and https:// server URLs are permitted (got '{parsed.scheme}')")
    unit = get_unit_installation_info()
    payload = {
        "installation_id": unit["installation_id"],
        "hwid": unit["hwid"],
        "tier": tier,
        "billing_cycle": "ANNUAL",
        "channel": CHANNEL,
        "customer_name": customer_name,
        "email": email
    }
    req = urllib.request.Request(
        server_url.strip().rstrip("/") + "/api/v1/purchase-license",
        data=json.dumps(payload).encode("utf-8"),
        headers={"Content-Type": "application/json"},
        method="POST"
    )
    with urllib.request.urlopen(req, timeout=8.0) as resp:
        return json.loads(resp.read().decode("utf-8"))


if __name__ == "__main__":
    info = get_unit_installation_info()
    print(f"[Tarcza AISAFE Add-On Host - {CHANNEL}] Ready:", json.dumps(info, indent=2))
