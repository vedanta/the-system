# Set Up Monitoring: $ARGUMENTS

Configure monitoring stack for deployed application.

## Usage

```
/ts-monitor                              # Full monitoring setup
/ts-monitor sentry                       # Sentry only
/ts-monitor datadog                      # Datadog only
/ts-monitor status                       # Check monitoring status
```

## Process

1. Read the active project file from `.claude/pipeline/projects/`

2. Gate Check:
   - At least one deployment must exist (Stage 5)
   - Required tokens in .env

3. Read monitoring preferences from `.claude/config/integrations.yaml`

4. Use the **sre-ops-engineer** subagent to:

### Sentry Setup (Error Tracking)

```
╔══════════════════════════════════════════════════════════════════╗
║           SENTRY CONFIGURATION                                   ║
╚══════════════════════════════════════════════════════════════════╝

Project: [PROJECT]
DSN: https://xxx@sentry.io/xxx

┌─────────────────────────────────────────────────────────────────┐
│ FRONTEND INTEGRATION                                            │
├─────────────────────────────────────────────────────────────────┤
│ File: src/frontend/lib/sentry.ts                                │
│                                                                 │
│ import * as Sentry from "@sentry/nextjs";                       │
│                                                                 │
│ Sentry.init({                                                   │
│   dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,                      │
│   tracesSampleRate: 0.1,                                        │
│ });                                                             │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│ BACKEND INTEGRATION                                             │
├─────────────────────────────────────────────────────────────────┤
│ File: src/backend/sentry.py                                     │
│                                                                 │
│ import sentry_sdk                                               │
│ sentry_sdk.init(dsn=os.getenv("SENTRY_DSN"))                    │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│ ENVIRONMENT VARIABLES TO SET                                    │
├─────────────────────────────────────────────────────────────────┤
│ Frontend: NEXT_PUBLIC_SENTRY_DSN                                │
│ Backend:  SENTRY_DSN                                            │
│                                                                 │
│ Set via: /ts-live-env [target] set SENTRY_DSN=https://...       │
└─────────────────────────────────────────────────────────────────┘

Dashboard: https://sentry.io/organizations/[org]/projects/[project]/
```

### Datadog Setup (APM + Logs)

```
╔══════════════════════════════════════════════════════════════════╗
║           DATADOG CONFIGURATION                                  ║
╚══════════════════════════════════════════════════════════════════╝

API Key: dd-api-key-***
App Key: dd-app-key-***

┌─────────────────────────────────────────────────────────────────┐
│ BACKEND APM                                                     │
├─────────────────────────────────────────────────────────────────┤
│ pip install ddtrace                                             │
│                                                                 │
│ # Run with tracing                                              │
│ ddtrace-run python main.py                                      │
│                                                                 │
│ # Or in Dockerfile                                              │
│ CMD ["ddtrace-run", "uvicorn", "main:app"]                      │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│ ENVIRONMENT VARIABLES                                           │
├─────────────────────────────────────────────────────────────────┤
│ DD_API_KEY=your-api-key                                         │
│ DD_SITE=datadoghq.com                                           │
│ DD_SERVICE=[project]-api                                        │
│ DD_ENV=production                                               │
│ DD_LOGS_ENABLED=true                                            │
└─────────────────────────────────────────────────────────────────┘

Dashboard: https://app.datadoghq.com/dashboard/xxx
```

### Dashboard Creation

```
╔══════════════════════════════════════════════════════════════════╗
║           MONITORING DASHBOARD                                   ║
╚══════════════════════════════════════════════════════════════════╝

Dashboard: [PROJECT] Overview

┌─────────────────────────────────────────────────────────────────┐
│  Requests/sec     Error Rate        P95 Latency      Apdex     │
│  ┌─────────┐      ┌─────────┐      ┌─────────┐     ┌─────────┐ │
│  │  1.2k   │      │  0.02%  │      │  145ms  │     │  0.95   │ │
│  └─────────┘      └─────────┘      └─────────┘     └─────────┘ │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  Request Volume (24h)                                           │
│  ▁▂▃▄▅▆▇█▇▆▅▄▃▂▁▂▃▄▅▆▇█▇▆▅▄▃▂▁                               │
│                                                                 │
│  Error Rate (24h)                                               │
│  ▁▁▁▁▁▁▁▂▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁                               │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘

Widgets:
- Request rate
- Error rate
- Latency percentiles (p50, p95, p99)
- Database query time
- Top errors
- Active users
```

5. Generate monitoring configuration files in `output/[project]/ops/monitoring/`

6. On complete:

"🛡️ Monitoring configured for [PROJECT].

**Stack:**
- Error Tracking: Sentry ✅
- APM: Datadog ✅
- Logs: Datadog Logs ✅

**Dashboards:**
- Sentry: https://sentry.io/...
- Datadog: https://app.datadoghq.com/...

**Next:** `/ts-alerts` to configure alerting"

## Required Tokens (.env)

```bash
SENTRY_DSN=
DATADOG_API_KEY=
DATADOG_APP_KEY=
```
