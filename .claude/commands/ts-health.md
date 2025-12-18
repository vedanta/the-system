# Health Check: $ARGUMENTS

Run health checks across all deployed services.

## Usage

```
/ts-health                               # Check all services
/ts-health <target>                      # Check specific target
/ts-health --deep                        # Deep health check (includes dependencies)
```

## Process

1. Read the active project file from `.claude/pipeline/projects/`

2. Get all deployments from Stage 5 section

3. Use the **sre-ops-engineer** subagent to:

### Run Health Checks

```
╔══════════════════════════════════════════════════════════════════╗
║           HEALTH CHECK: [PROJECT]                                ║
╚══════════════════════════════════════════════════════════════════╝

Overall Status: 🟢 Healthy
Checked: [timestamp]

┌─────────────────────────────────────────────────────────────────┐
│ SERVICE STATUS                                                  │
├───────────┬───────────┬──────────────────────────┬──────────────┤
│ Service   │ Status    │ Endpoint                 │ Latency      │
├───────────┼───────────┼──────────────────────────┼──────────────┤
│ Frontend  │ 🟢 UP     │ https://app.example.com  │ 45ms         │
│ Backend   │ 🟢 UP     │ https://api.example.com  │ 120ms        │
│ Database  │ 🟢 UP     │ postgresql://...         │ 15ms         │
│ Cache     │ 🟢 UP     │ redis://...              │ 5ms          │
└───────────┴───────────┴──────────────────────────┴──────────────┘

┌─────────────────────────────────────────────────────────────────┐
│ ENDPOINT CHECKS                                                 │
├────────────────────┬────────┬──────────┬──────────┬─────────────┤
│ Endpoint           │ Method │ Expected │ Actual   │ Status      │
├────────────────────┼────────┼──────────┼──────────┼─────────────┤
│ /                  │ GET    │ 200      │ 200      │ ✅          │
│ /health            │ GET    │ 200      │ 200      │ ✅          │
│ /api/v1/health     │ GET    │ 200      │ 200      │ ✅          │
│ /api/v1/users      │ GET    │ 200      │ 200      │ ✅          │
│ /api/v1/auth/login │ POST   │ 401      │ 401      │ ✅          │
└────────────────────┴────────┴──────────┴──────────┴─────────────┘

┌─────────────────────────────────────────────────────────────────┐
│ RESOURCE UTILIZATION                                            │
├─────────────┬──────────────┬────────────┬───────────────────────┤
│ Resource    │ Current      │ Limit      │ Status                │
├─────────────┼──────────────┼────────────┼───────────────────────┤
│ CPU         │ 45%          │ 100%       │ 🟢 OK                 │
│ Memory      │ 62%          │ 100%       │ 🟢 OK                 │
│ Disk        │ 34%          │ 100%       │ 🟢 OK                 │
│ Connections │ 23           │ 100        │ 🟢 OK                 │
└─────────────┴──────────────┴────────────┴───────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│ SSL CERTIFICATES                                                │
├─────────────────────┬─────────────┬────────────┬────────────────┤
│ Domain              │ Issuer      │ Expires    │ Status         │
├─────────────────────┼─────────────┼────────────┼────────────────┤
│ app.example.com     │ Let's Enc.  │ 2024-04-15 │ ✅ Valid (89d) │
│ api.example.com     │ Let's Enc.  │ 2024-04-15 │ ✅ Valid (89d) │
└─────────────────────┴─────────────┴────────────┴────────────────┘
```

### Deep Health Check (--deep)

```
┌─────────────────────────────────────────────────────────────────┐
│ DEPENDENCY CHECKS                                               │
├────────────────────┬───────────┬──────────────┬─────────────────┤
│ Dependency         │ Status    │ Latency      │ Notes           │
├────────────────────┼───────────┼──────────────┼─────────────────┤
│ Stripe API         │ 🟢 UP     │ 230ms        │                 │
│ SendGrid           │ 🟢 UP     │ 180ms        │                 │
│ AWS S3             │ 🟢 UP     │ 45ms         │                 │
│ OpenAI API         │ 🟢 UP     │ 890ms        │ Slow            │
└────────────────────┴───────────┴──────────────┴─────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│ DATABASE HEALTH                                                 │
├─────────────────────────────────────────────────────────────────┤
│ Connection pool: 23/100 (23%)                                   │
│ Active queries: 2                                               │
│ Slowest query: 120ms                                            │
│ Replication lag: N/A (single instance)                          │
│ Disk usage: 1.2GB / 10GB (12%)                                  │
└─────────────────────────────────────────────────────────────────┘
```

### Unhealthy Response

```
╔══════════════════════════════════════════════════════════════════╗
║           HEALTH CHECK: [PROJECT]                                ║
╚══════════════════════════════════════════════════════════════════╝

Overall Status: 🔴 UNHEALTHY
Checked: [timestamp]

┌─────────────────────────────────────────────────────────────────┐
│ 🔴 ISSUES DETECTED                                              │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│ 1. Backend /health returning 503                                │
│    - Last successful: 5 minutes ago                             │
│    - Error: "Database connection refused"                       │
│    - Action: Check database status                              │
│                                                                 │
│ 2. High memory usage (92%)                                      │
│    - Threshold: 85%                                             │
│    - Action: Consider scaling or investigating memory leak      │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘

Recommendations:
1. Check database: /ts-logs railway --error
2. View memory usage: /ts-logs railway --search "memory"
3. Consider restart: Railway dashboard → Restart service
```

4. Return appropriate status based on results:
   - 🟢 All healthy
   - 🟡 Degraded (warnings)
   - 🔴 Unhealthy (failures)
