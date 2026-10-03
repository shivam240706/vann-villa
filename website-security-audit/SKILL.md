---
name: website-security-audit
description: Run a practical security audit of YOUR OWN website or codebase and produce a prioritized, plain-English report. Use when the user asks to "audit my site", "check my website security", "scan for vulnerabilities", "find security issues", review HTTPS/SSL/TLS or security headers, look for exposed secrets, files, or .env leaks, check dependencies for known CVEs, or harden a web app before launch. Covers a live URL you own, a local codebase, or both.
---

# Website Security Audit

Run a focused, high-signal security audit on a site or codebase the user owns, and
deliver a prioritized report a non-expert can act on. Optimize for the issues that
actually get small/mid-size sites breached — not an exhaustive academic checklist.

## CRITICAL: Authorization first (do this before anything else)

Active scanning of a website you do not own or have written permission to test is
illegal in many places (unauthorized-access / computer-misuse laws).

Before any **network** request to a live URL, confirm ownership:

> "I'll only scan a site you own or have explicit written permission to test. Can you
> confirm you own / are authorized to test **<domain>**?"

- If the user confirms ownership → proceed.
- If they don't, or it's clearly a third party (a competitor, a bank, a random site) →
  **refuse the network scan.** Offer the safe alternatives instead: audit their own
  codebase locally, or review configuration they paste in.

Local codebase review (reading files the user already gave you) needs no network
authorization — but still only review code the user has shared with you.

Keep all checks **passive / read-only**. Do NOT attempt exploitation, brute force,
injection payloads, denial-of-service, or anything that could alter or disrupt the
target. This is an audit, not a penetration test.

## What this audit honestly is (and isn't)

Say this to the user up front, in your own words:

- ✅ It catches the **common, high-impact misconfigurations** most sites get wrong.
- ❌ It is **not** a full penetration test and does **not** guarantee you're "secure."

Never tell a user they are "safe" or "fully secured." Say what you checked and what
you found.

## Scope the audit

Ask which target applies (or infer if obvious from what they gave you):

1. **Live URL** — a deployed site they own. → headers, TLS, exposed files, info leakage.
2. **Codebase / repo** — local source. → secrets, dependencies, code-level patterns, config.
3. **Both** — do the live checks, then the code checks. Best coverage.

## The audit checklist

Work through the relevant sections. For depth on any item, read the matching file in
`references/`. Record every finding with: **severity**, **what it is**, **why it matters**,
**how to fix** (concrete, copy-pasteable where possible).

### A. Transport security (live URL)
- HTTPS enforced; HTTP redirects to HTTPS (301).
- Valid, non-expired certificate; not self-signed in prod.
- HSTS header present (`Strict-Transport-Security`).
- No mixed content (HTTP assets on an HTTPS page).
- TLS 1.2+ only (flag TLS 1.0/1.1, SSLv3).
→ details: `references/transport-tls.md`

### B. Security headers (live URL)
Check for presence and sane values:
- `Content-Security-Policy`
- `Strict-Transport-Security`
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options` / CSP `frame-ancestors`
- `Referrer-Policy`
- `Permissions-Policy`
- Server/version banners that leak stack info (`Server`, `X-Powered-By`).
→ details + recommended values: `references/security-headers.md`

### C. Exposed files & information leakage (live URL)
Politely probe (single GET each, never brute force) for commonly-leaked paths:
- `/.env`, `/.git/config`, `/.git/HEAD`
- `/wp-config.php.bak`, `/config.php~`, backup/`.bak`/`.old`/`.zip` files
- `/.DS_Store`, `/phpinfo.php`, `/server-status`
- Directory listing enabled
- `robots.txt` / `sitemap.xml` leaking sensitive paths
- Verbose error pages / stack traces
→ details: `references/exposed-files.md`

### D. Secrets in code (codebase)
- Hardcoded API keys, tokens, passwords, private keys.
- `.env` or credentials committed to the repo.
- Secrets in git history (not just current files).
- Use the helper: `scripts/scan_secrets.py <path>`
→ patterns: `references/secrets-patterns.md`

### E. Dependencies & known CVEs (codebase)
- Run the ecosystem auditor: `npm audit`, `pip-audit`, `bundler-audit`, etc.
- Flag outdated/abandoned packages and known-vulnerable versions.
→ details: `references/dependencies.md`

### F. Application code patterns (codebase)
- SQL built by string concatenation (injection risk) vs parameterized queries.
- User input rendered without escaping (XSS).
- Auth/session: weak cookies (no `HttpOnly`/`Secure`/`SameSite`), no rate limiting on login.
- CORS set to `*` with credentials.
- Debug mode / verbose logging enabled in production config.
- Missing CSRF protection on state-changing forms.
→ details: `references/code-patterns.md`

### G. Access control & config (both)
- Admin panels exposed without auth or IP restriction.
- Default credentials.
- Open cloud storage buckets referenced in code.
- Overly permissive file permissions in deploy config.

## How to run the live checks

Prefer simple, passive tooling already on the user's machine. Example header check:

```bash
curl -sI https://example.com
```

For a fuller header + redirect view:

```bash
curl -sIL https://example.com
```

Use `scripts/check_headers.py <url>` for a structured header + TLS summary. If a
needed tool isn't installed, tell the user the one command to install it rather than
silently skipping the check.

## Deliver the report

Produce a clean report in this structure (also see `references/report-template.md`):

1. **Summary** — target, date, one-line risk posture, counts by severity.
2. **Findings table** — Severity | Issue | Where | Fix. Sort Critical → Low.
3. **Top 3 fix-now items** — the highest-leverage actions, with exact steps.
4. **What was checked** — so the user knows the scope (and its limits).
5. **Reminder** — this is a common-issues audit, not a guarantee of security.

Severity guide:
- **Critical** — exposed secret, exposed `.git`/`.env`, known-exploited CVE, no auth on admin.
- **High** — no HTTPS, injection-prone code, secrets in history.
- **Medium** — missing security headers, outdated deps without known exploit, weak cookies.
- **Low** — info leakage (banners), missing best-practice hardening.

Offer to write the report to a file (e.g. `security-audit-report.md`) if the user wants
to keep it.
