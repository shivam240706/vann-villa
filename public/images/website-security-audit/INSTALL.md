# Website Security Audit — Free Claude Skill

Scan your own website or codebase for the common security issues that actually get
sites breached — missing HTTPS, leaky headers, exposed `.env`/`.git` files, hardcoded
secrets, vulnerable dependencies, and risky code patterns — and get a prioritized,
plain-English report with exact fixes.

> ⚠️ Only scan a site you own or are authorized to test. This is a common-issues
> audit, not a full penetration test — it doesn't guarantee you're "secure."

## Install (2 steps)

**1. Move the `website-security-audit` folder into your Claude skills directory:**

- macOS / Linux:
  ```bash
  mv website-security-audit ~/.claude/skills/
  ```
- Windows (PowerShell):
  ```powershell
  Move-Item website-security-audit $HOME\.claude\skills\
  ```

(If the `~/.claude/skills/` folder doesn't exist yet, create it first:
`mkdir -p ~/.claude/skills`.)

**2. Open Claude Code and just ask:**

```
Audit my website https://yoursite.com for security issues
```
or
```
Run a security audit on this codebase
```

That's it. Claude loads the skill automatically and walks you through the audit.

## What's inside
- `SKILL.md` — the audit playbook Claude follows
- `references/` — checklists for headers, TLS, exposed files, secrets, dependencies, code patterns
- `scripts/check_headers.py` — passive header + TLS checker
- `scripts/scan_secrets.py` — local secret scanner

---
Made by claudethings.com — want the full engineering & marketing kit?
👉 https://claudethings.com
