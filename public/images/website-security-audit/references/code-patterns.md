# Application Code Patterns

Read-only review of source. Flag the pattern, show the risky line, give the safe form.
Don't try to exploit anything — just identify and recommend.

## SQL injection
**Risky:** query built by concatenating user input.
```python
db.execute("SELECT * FROM users WHERE email = '" + email + "'")
```
**Safe:** parameterized query.
```python
db.execute("SELECT * FROM users WHERE email = %s", (email,))
```
Grep hints: string `+`/f-strings/`${}` inside SQL, `.format()` around `SELECT`/`INSERT`.

## XSS
User input rendered into HTML without escaping.
- React: `dangerouslySetInnerHTML` with user data.
- Vanilla: `el.innerHTML = userInput`.
- Templates: `|safe` (Jinja), `{{{ }}}` (Handlebars), `v-html`.
**Fix:** render as text / use the framework's auto-escaping; sanitize if HTML is required.

## Auth & sessions
- Cookies missing `HttpOnly`, `Secure`, `SameSite`.
- No rate limiting / lockout on login → credential stuffing.
- Passwords hashed with MD5/SHA1 or unsalted → use bcrypt/argon2/scrypt.
- JWT with `alg: none` or a hardcoded/weak signing secret.

## CORS
```js
Access-Control-Allow-Origin: *
Access-Control-Allow-Credentials: true
```
`*` + credentials is dangerous. Pin to an explicit allowlist of origins.

## CSRF
State-changing POST/PUT/DELETE forms without a CSRF token (and not relying on
`SameSite` cookies). Use the framework's CSRF middleware.

## Config / debug
- `DEBUG=True`, `display_errors=On`, `app.debug = True` in production.
- Secrets or verbose logging written to logs.
- Default admin credentials still present.

## Grep starting points
```bash
grep -rniE "innerHTML|dangerouslySetInnerHTML|v-html|\\|safe" src/
grep -rniE "select .*\\+|execute\\(.*%|format\\(.*select" src/
grep -rniE "debug\\s*=\\s*true|display_errors\\s*=\\s*on" .
```
