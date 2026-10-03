# Dependency / Known-CVE Auditing

Detect the ecosystem from the lockfile, then run its native auditor. These are
read-only and safe.

| Ecosystem | Detect | Command |
|---|---|---|
| Node / npm | `package-lock.json` | `npm audit` |
| Node / yarn | `yarn.lock` | `yarn npm audit` |
| Node / pnpm | `pnpm-lock.yaml` | `pnpm audit` |
| Python | `requirements.txt`, `poetry.lock` | `pip-audit` (or `safety check`) |
| Ruby | `Gemfile.lock` | `bundle audit` (gem `bundler-audit`) |
| PHP | `composer.lock` | `composer audit` |
| Go | `go.sum` | `govulncheck ./...` |
| Rust | `Cargo.lock` | `cargo audit` |

If the tool isn't installed, give the user the one install line (e.g.
`pip install pip-audit`) rather than skipping the check.

## Interpreting results
- Map each vuln to a severity. A **known-exploited** CVE in a reachable package → **Critical**.
- A high-severity CVE with no known exploit → **High**.
- Outdated but no known CVE → **Medium**, "update when convenient."

## Fixes
- Prefer the minimum version bump that clears the advisory.
- For transitive deps, bump the direct parent or add an override/resolution.
- Flag abandoned packages (no release in years) for replacement.
