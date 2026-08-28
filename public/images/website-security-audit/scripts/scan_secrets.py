#!/usr/bin/env python3
"""Scan a local codebase for hardcoded secrets.

Usage:
    python3 scan_secrets.py /path/to/repo

Read-only. Walks files (skipping common vendor/build dirs), flags lines matching
known secret patterns. Errs toward recall — review hits manually; example/test
keys will show up as false positives.
"""
import sys
import os
import re

PATTERNS = {
    "AWS access key": re.compile(r"AKIA[0-9A-Z]{16}"),
    "Google API key": re.compile(r"AIza[0-9A-Za-z\-_]{35}"),
    "Slack token": re.compile(r"xox[baprs]-[0-9A-Za-z-]{10,}"),
    "Stripe live key": re.compile(r"sk_live_[0-9A-Za-z]{24,}"),
    "GitHub token": re.compile(r"gh[pousr]_[0-9A-Za-z]{36,}"),
    "Private key block": re.compile(r"-----BEGIN (?:RSA |EC |OPENSSH |DSA |)PRIVATE KEY-----"),
    "Generic secret assignment": re.compile(
        r"(?i)(password|passwd|secret|api[_-]?key|apikey|token|access[_-]?key)\s*[:=]\s*['\"][^'\"]{8,}['\"]"
    ),
}

SKIP_DIRS = {".git", "node_modules", "vendor", "dist", "build", ".venv", "venv",
             "__pycache__", ".next", "target", ".idea", "coverage"}
SKIP_EXT = {".min.js", ".lock", ".map", ".png", ".jpg", ".jpeg", ".gif", ".svg",
            ".woff", ".woff2", ".ttf", ".ico", ".pdf", ".zip", ".gz"}
MAX_BYTES = 2_000_000


def should_skip(path):
    return any(path.endswith(e) for e in SKIP_EXT)


def main():
    if len(sys.argv) != 2:
        print(__doc__)
        sys.exit(1)
    root = sys.argv[1]
    if not os.path.isdir(root):
        print(f"Not a directory: {root}")
        sys.exit(1)

    hits = 0
    for dirpath, dirnames, filenames in os.walk(root):
        dirnames[:] = [d for d in dirnames if d not in SKIP_DIRS]
        for fn in filenames:
            fp = os.path.join(dirpath, fn)
            if should_skip(fp):
                continue
            try:
                if os.path.getsize(fp) > MAX_BYTES:
                    continue
                with open(fp, "r", encoding="utf-8", errors="ignore") as f:
                    for lineno, line in enumerate(f, 1):
                        if len(line) > 500:
                            continue
                        for name, pat in PATTERNS.items():
                            if pat.search(line):
                                rel = os.path.relpath(fp, root)
                                snippet = line.strip()[:100]
                                print(f"[{name}] {rel}:{lineno}  {snippet}")
                                hits += 1
            except (OSError, UnicodeDecodeError):
                continue

    print(f"\n{hits} potential secret(s) found. Review each — rotate anything real and "
          f"move it to env vars / a secrets manager.")
    if hits == 0:
        print("Tip: also check git history — a deleted secret can still live in old commits.")


if __name__ == "__main__":
    main()
