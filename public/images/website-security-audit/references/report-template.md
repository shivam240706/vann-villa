# Report Template

```markdown
# Security Audit Report

**Target:** <url or repo>
**Date:** <YYYY-MM-DD>
**Scope:** <live URL / codebase / both>
**Risk posture:** <one line — e.g. "2 critical issues need immediate action">

## Findings by severity
🔴 Critical: N   🟠 High: N   🟡 Medium: N   🔵 Low: N

| Severity | Issue | Where | Fix |
|---|---|---|---|
| 🔴 Critical | Exposed `.env` file | https://site.com/.env | Block dotfiles at server; rotate all leaked keys |
| 🟠 High | No HTTPS redirect | http://site.com | Force 301 → HTTPS; enable HSTS |
| 🟡 Medium | Missing CSP header | all pages | Add `Content-Security-Policy: default-src 'self'` |
| 🔵 Low | `X-Powered-By` banner | response headers | Remove version banner |

## Fix these first (top 3)
1. **<highest-leverage fix>** — exact steps.
2. **<second>** — exact steps.
3. **<third>** — exact steps.

## What was checked
- Transport/TLS: ✅
- Security headers: ✅
- Exposed files: ✅
- Secrets in code: ✅ / n/a
- Dependencies (CVEs): ✅ / n/a
- Code patterns: ✅ / n/a

## Important
This audit covers the common, high-impact issues most sites get wrong. It is **not**
a full penetration test and does not guarantee the site is secure. Re-run after fixes,
and consider a professional pentest before handling sensitive data at scale.
```
