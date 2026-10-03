#!/usr/bin/env python3
"""Passive security-header + redirect checker for a site you own.

Usage:
    python3 check_headers.py https://example.com

Read-only: sends GET/HEAD requests only. Does NOT probe paths, brute force, or
attempt exploitation. Only run against a domain you own or are authorized to test.
"""
import sys
import ssl
import socket
import urllib.request
from urllib.parse import urlparse
from datetime import datetime

RECOMMENDED = {
    "strict-transport-security": "Enforces HTTPS (HSTS). Add: max-age=31536000; includeSubDomains",
    "content-security-policy": "Strongest XSS defense. Start with: default-src 'self'",
    "x-content-type-options": "Should be: nosniff",
    "x-frame-options": "Anti-clickjacking. Use DENY or SAMEORIGIN (or CSP frame-ancestors)",
    "referrer-policy": "Recommended: strict-origin-when-cross-origin",
    "permissions-policy": "Lock down camera/mic/geolocation features",
}
LEAKY = ["server", "x-powered-by", "x-aspnet-version", "x-aspnetmvc-version"]


def fetch(url):
    req = urllib.request.Request(url, method="GET", headers={"User-Agent": "security-audit-skill/1.0"})
    ctx = ssl.create_default_context()
    resp = urllib.request.urlopen(req, timeout=15, context=ctx)
    return resp.status, {k.lower(): v for k, v in resp.headers.items()}, resp.geturl()


def check_cert(host):
    try:
        ctx = ssl.create_default_context()
        with ctx.wrap_socket(socket.socket(), server_hostname=host) as s:
            s.settimeout(15)
            s.connect((host, 443))
            cert = s.getpeercert()
        exp = datetime.strptime(cert["notAfter"], "%b %d %H:%M:%S %Y %Z")
        days = (exp - datetime.utcnow()).days
        return f"valid, expires in {days} days ({cert['notAfter']})" if days > 0 else f"EXPIRED ({cert['notAfter']})"
    except Exception as e:
        return f"could not verify ({e})"


def main():
    if len(sys.argv) != 2:
        print(__doc__)
        sys.exit(1)
    url = sys.argv[1]
    if not url.startswith(("http://", "https://")):
        url = "https://" + url
    host = urlparse(url).hostname

    print(f"\n=== Security check: {url} ===\n")

    # HTTPS redirect
    try:
        http_url = "http://" + host
        _, _, final = fetch(http_url)
        ok = final.startswith("https://")
        print(f"[{'OK ' if ok else 'WARN'}] HTTP -> HTTPS redirect: {'yes' if ok else 'NO — http stays plain (HIGH)'} ({final})")
    except Exception as e:
        print(f"[INFO] HTTP redirect check failed: {e}")

    # Certificate
    print(f"[INFO] TLS certificate: {check_cert(host)}\n")

    # Headers
    try:
        status, headers, _ = fetch(url)
    except Exception as e:
        print(f"[ERROR] Could not fetch {url}: {e}")
        sys.exit(1)

    print(f"HTTP status: {status}\n--- Security headers ---")
    for h, advice in RECOMMENDED.items():
        if h in headers:
            print(f"[OK ] {h}: {headers[h][:80]}")
        else:
            print(f"[MISSING] {h}  ->  {advice}")

    print("\n--- Information leakage ---")
    leaked = False
    for h in LEAKY:
        if h in headers:
            print(f"[WARN] {h}: {headers[h]}  ->  remove/obscure version banner")
            leaked = True
    if not leaked:
        print("[OK ] no obvious version banners")

    print("\nNote: passive header/TLS check only. Not a full audit or pentest.")


if __name__ == "__main__":
    main()
