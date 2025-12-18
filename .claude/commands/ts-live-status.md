# Live Status: $ARGUMENTS

Check deployment status across all platforms.

## Usage

```
/ts-live-status              # All deployments
/ts-live-status vercel       # Specific target
```

## Process

1. Read the active project file from `.claude/pipeline/projects/`

2. Get all deployments from Stage 5 section

3. Use the **sre-deploy-engineer** subagent to:
   - Query each platform for current status
   - Check health endpoints
   - Get current version/deployment ID
   - Check SSL certificate status
   - Get resource usage

4. Display status dashboard:

```
╔══════════════════════════════════════════════════════════════════╗
║               LIVE DEPLOYMENT STATUS: [PROJECT]                  ║
╚══════════════════════════════════════════════════════════════════╝

┌─────────────────────────────────────────────────────────────────┐
│ SERVICES                                                        │
├──────────┬──────────┬────────────────────────────┬─────────────┤
│ Target   │ Status   │ URL                        │ Version     │
├──────────┼──────────┼────────────────────────────┼─────────────┤
│ vercel   │ 🟢 Live  │ https://app.vercel.app     │ v1.0.0      │
│ railway  │ 🟢 Live  │ https://api.railway.app    │ v1.0.0      │
│ neon     │ 🟢 Live  │ postgresql://...           │ -           │
└──────────┴──────────┴────────────────────────────┴─────────────┘

┌─────────────────────────────────────────────────────────────────┐
│ HEALTH CHECKS                                                   │
├──────────────┬──────────┬──────────┬───────────────────────────┤
│ Service      │ Endpoint │ Status   │ Latency                   │
├──────────────┼──────────┼──────────┼───────────────────────────┤
│ Frontend     │ /        │ 200 OK   │ 45ms                      │
│ Backend      │ /health  │ 200 OK   │ 120ms                     │
│ Database     │ connect  │ ✅       │ 15ms                      │
└──────────────┴──────────┴──────────┴───────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│ CUSTOM DOMAINS                                                  │
├────────────────────┬──────────┬───────────┬────────────────────┤
│ Domain             │ Target   │ SSL       │ Status             │
├────────────────────┼──────────┼───────────┼────────────────────┤
│ app.example.com    │ vercel   │ ✅ Valid  │ 🟢 Active          │
│ api.example.com    │ railway  │ ✅ Valid  │ 🟢 Active          │
└────────────────────┴──────────┴───────────┴────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│ LAST DEPLOYMENTS                                                │
├──────────┬─────────────────────┬───────────────────────────────┤
│ Target   │ Time                │ Commit                        │
├──────────┼─────────────────────┼───────────────────────────────┤
│ vercel   │ 2 hours ago         │ abc1234 "Fix login bug"       │
│ railway  │ 2 hours ago         │ abc1234 "Fix login bug"       │
└──────────┴─────────────────────┴───────────────────────────────┘

Overall Status: 🟢 All Systems Operational
```

5. Status indicators:
   - 🟢 Live/Healthy
   - 🟡 Degraded
   - 🔴 Down
   - ⚪ Not deployed
