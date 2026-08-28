# Transport / TLS Reference

## What to check (passively)
1. **HTTPS enforced** — request `http://domain` and confirm a 301/308 redirect to `https://`.
2. **Certificate validity** — not expired, not self-signed in production, hostname matches.
3. **Protocol versions** — TLS 1.2 and 1.3 only. Flag TLS 1.0/1.1 and SSLv3 (deprecated, exploitable).
4. **HSTS** — `Strict-Transport-Security` present so browsers refuse plain HTTP.
5. **Mixed content** — an HTTPS page loading `http://` scripts, images, or styles. Breaks the security guarantee.

## Commands
Check redirect + headers:
```bash
curl -sIL http://example.com | grep -i -E 'location|strict-transport'
```

Inspect certificate + protocol (read-only):
```bash
echo | openssl s_client -connect example.com:443 -servername example.com 2>/dev/null | openssl x509 -noout -dates -subject -issuer
```

Check offered protocols (if `nmap` available, passive version scan):
```bash
nmap --script ssl-enum-ciphers -p 443 example.com
```

## Severity
- No HTTPS at all → **High**.
- Expired / self-signed cert in prod → **High**.
- TLS 1.0/1.1 enabled → **Medium**.
- Missing HSTS → **Medium**.
- Mixed content → **Medium**.

## Common fixes
- Enable HTTPS via Let's Encrypt (free) or the host's managed certs.
- Force redirect HTTP→HTTPS at the server/CDN.
- Disable old protocols in nginx/apache TLS config.
- Add HSTS header (see security-headers.md).
