# Security Headers Reference

Recommended values to check for and suggest. A missing header is usually Medium
severity; a dangerously wrong value can be High.

| Header | Recommended value | Why |
|---|---|---|
| `Strict-Transport-Security` | `max-age=31536000; includeSubDomains; preload` | Forces HTTPS, blocks SSL-strip downgrade |
| `Content-Security-Policy` | Start: `default-src 'self'` then loosen as needed | Strongest defense against XSS / injection |
| `X-Content-Type-Options` | `nosniff` | Stops MIME-type confusion attacks |
| `X-Frame-Options` | `DENY` or `SAMEORIGIN` (or CSP `frame-ancestors`) | Prevents clickjacking |
| `Referrer-Policy` | `strict-origin-when-cross-origin` | Stops leaking full URLs to third parties |
| `Permissions-Policy` | `geolocation=(), camera=(), microphone=()` | Locks down powerful browser features |

## Leaky headers to remove or obscure
- `Server: Apache/2.4.41 (Ubuntu)` → drop the version.
- `X-Powered-By: PHP/7.2` → remove entirely.
- `X-AspNet-Version`, `X-AspNetMvc-Version` → remove.

Version banners let an attacker match your stack to known CVEs. Low/Medium on its own,
but it accelerates everything else.

## Quick check
```bash
curl -sI https://example.com
```
Look for the headers above. Anything missing → recommend adding it at the web
server / CDN / framework level (nginx `add_header`, Cloudflare Transform Rules,
Helmet.js for Express, `secure_headers` gem, Django `SECURE_*` settings, etc.).
