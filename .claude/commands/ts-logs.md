# View Logs: $ARGUMENTS

View and search logs from deployed services.

## Usage

```
/ts-logs                                 # Recent logs (all services)
/ts-logs <target>                        # Logs for specific target
/ts-logs <target> --error                # Errors only
/ts-logs <target> --since 1h             # Last hour
/ts-logs <target> --search "query"       # Search logs
/ts-logs <target> --follow               # Stream live logs
```

### Examples
```
/ts-logs                                 # All recent logs
/ts-logs vercel                          # Vercel deployment logs
/ts-logs railway --error                 # Railway errors only
/ts-logs fly --since 30m                 # Fly.io last 30 minutes
/ts-logs railway --search "timeout"      # Search for timeouts
```

## Process

1. Read the active project file from `.claude/pipeline/projects/`

2. Parse arguments:
   - Target: vercel, railway, fly, etc. (or all)
   - Filters: --error, --since, --search, --follow

3. Use the **sre-ops-engineer** subagent to query logs:

### Platform Commands

```bash
# Vercel
vercel logs [deployment-url] --follow

# Netlify
netlify functions:log

# Railway
railway logs --follow

# Fly.io
fly logs --app [app-name]

# Render
# Via dashboard or API
```

### Log Output

```
╔══════════════════════════════════════════════════════════════════╗
║           LOGS: [TARGET]                                         ║
╚══════════════════════════════════════════════════════════════════╝

Filter: --since 1h --error
Showing: 23 log entries

┌─────────────────────────────────────────────────────────────────┐
│ 2024-01-15 10:45:23 [ERROR] backend                             │
├─────────────────────────────────────────────────────────────────┤
│ Database connection timeout after 30s                           │
│ Stack: ConnectionError at db/client.py:45                       │
│        in connect() at db/client.py:23                          │
│        in get_users() at api/users.py:67                        │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│ 2024-01-15 10:42:11 [WARN] backend                              │
├─────────────────────────────────────────────────────────────────┤
│ Slow query detected: 2.3s                                       │
│ Query: SELECT * FROM users WHERE...                             │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│ 2024-01-15 10:38:55 [ERROR] frontend                            │
├─────────────────────────────────────────────────────────────────┤
│ Failed to fetch /api/users: NetworkError                        │
│ Component: UserList at pages/users.tsx:34                       │
└─────────────────────────────────────────────────────────────────┘

── Showing 3 of 23 entries ──

Commands:
- More logs: /ts-logs [target] --limit 50
- Live stream: /ts-logs [target] --follow
- Search: /ts-logs [target] --search "error message"
```

### Log Patterns

```
╔══════════════════════════════════════════════════════════════════╗
║           LOG PATTERNS (Last 24h)                                ║
╚══════════════════════════════════════════════════════════════════╝

┌────────────────────────────────┬───────┬──────────┬─────────────┐
│ Pattern                        │ Count │ Severity │ Trend       │
├────────────────────────────────┼───────┼──────────┼─────────────┤
│ Database timeout               │ 23    │ High     │ ↑ +15       │
│ Auth token expired             │ 156   │ Low      │ → same      │
│ Rate limit exceeded            │ 45    │ Medium   │ ↓ -10       │
│ 404 Not Found                  │ 1,234 │ Low      │ → same      │
└────────────────────────────────┴───────┴──────────┴─────────────┘

Recommendation: Investigate "Database timeout" pattern - trending up
```

### Datadog Log Search

If using Datadog:
```
Query: service:[project]-api status:error @http.status_code:>=500
Timeframe: Last 1 hour
```

4. On complete:

Display logs with formatting and recommendations for any patterns detected.
