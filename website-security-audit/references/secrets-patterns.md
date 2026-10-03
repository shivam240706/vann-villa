# Secrets in Code — Patterns

Use `scripts/scan_secrets.py` for the automated pass, then eyeball anything it flags
(it errs toward recall, so expect some false positives like example/test keys).

## High-confidence patterns
- AWS access key: `AKIA[0-9A-Z]{16}`
- AWS secret key: 40-char base64 near an AWS key or `aws_secret`
- Google API key: `AIza[0-9A-Za-z\-_]{35}`
- Slack token: `xox[baprs]-[0-9A-Za-z-]+`
- Stripe live key: `sk_live_[0-9A-Za-z]{24,}`
- GitHub token: `ghp_[0-9A-Za-z]{36}`, `github_pat_[0-9A-Za-z_]+`
- Private key block: `-----BEGIN (RSA |EC |OPENSSH |)PRIVATE KEY-----`
- Generic: `password|passwd|secret|api_key|apikey|token` assigned a long literal string

## Don't forget git history
A secret deleted from the current files may still be in history:
```bash
git log -p | grep -i -E 'api_key|secret|password|AKIA|BEGIN PRIVATE KEY'
```
If found in history → **Critical**, and the credential must be rotated. Removing it
from HEAD is not enough; anyone with the repo has the old commits.

## Fixes
- Move secrets to environment variables / a secrets manager.
- Add `.env`, `*.pem`, `*.key` to `.gitignore`.
- **Rotate** every exposed secret — treat it as already leaked.
- For history cleanup: `git filter-repo` (or BFG), then force-push and rotate.
