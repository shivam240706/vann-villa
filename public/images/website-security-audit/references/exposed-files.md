# Exposed Files & Information Leakage

Probe ONE GET request per path. Never brute-force or loop aggressively — that looks
like an attack and can trip rate limits or WAFs. A `200` (or a body that isn't your
normal 404 page) on any of these is a finding.

## High-value paths to check
| Path | If exposed | Severity |
|---|---|---|
| `/.env` | App secrets, DB creds, API keys | Critical |
| `/.git/config`, `/.git/HEAD` | Whole source + history downloadable | Critical |
| `/wp-config.php.bak`, `/config.php~`, `/config.php.save` | DB creds | Critical |
| `*.bak`, `*.old`, `*.zip`, `*.tar.gz` of source | Source / secrets | High |
| `/.DS_Store` | Directory structure leakage | Low |
| `/phpinfo.php`, `/info.php` | Full server config | High |
| `/server-status`, `/server-info` | Apache internals | Medium |
| Directory listing enabled | Browse all files | Medium |

## Example (single, polite request)
```bash
curl -s -o /dev/null -w "%{http_code}" https://example.com/.env
```
`200` = investigate immediately. `403`/`404` = good.

## Other info leakage
- **Verbose errors / stack traces** — turn off debug mode in prod (`DEBUG=False`,
  `display_errors=Off`, framework prod mode).
- **robots.txt** — sometimes lists `/admin`, `/backup` etc. Don't put secrets here;
  robots is not access control.
- **Source maps** (`*.js.map`) in prod can expose original source.

## Fixes
- Deny dotfiles and backup extensions at the web server.
- Never deploy `.git`, `.env`, or editor backup files. Add them to `.gitignore` and
  exclude from the deploy artifact.
- Rotate any credential that was ever exposed — assume it's compromised.
