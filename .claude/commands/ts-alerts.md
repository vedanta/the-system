# Configure Alerts: $ARGUMENTS

Set up alerting rules and notification channels.

## Usage

```
/ts-alerts                               # Full alert setup
/ts-alerts add "name" "condition"        # Add custom alert
/ts-alerts list                          # List all alerts
/ts-alerts test                          # Send test alert
```

## Process

1. Read the active project file from `.claude/pipeline/projects/`

2. Gate Check:
   - Monitoring must be configured (`/ts-monitor` complete)

3. Use the **sre-ops-engineer** subagent to:

### Configure Notification Channels

```
╔══════════════════════════════════════════════════════════════════╗
║           NOTIFICATION CHANNELS                                  ║
╚══════════════════════════════════════════════════════════════════╝

┌─────────────────────────────────────────────────────────────────┐
│ CHANNEL CONFIGURATION                                           │
├────────────┬───────────────┬────────────────────────────────────┤
│ Channel    │ Type          │ Target                             │
├────────────┼───────────────┼────────────────────────────────────┤
│ #alerts    │ Slack         │ https://hooks.slack.com/...        │
│ On-Call    │ PagerDuty     │ Engineering rotation               │
│ Eng Team   │ Email         │ eng@company.com                    │
└────────────┴───────────────┴────────────────────────────────────┘

Slack Webhook: /ts-live-env set SLACK_WEBHOOK_URL=...
PagerDuty Key: /ts-live-env set PAGERDUTY_KEY=...
```

### Define Alert Rules

```
╔══════════════════════════════════════════════════════════════════╗
║           ALERT RULES                                            ║
╚══════════════════════════════════════════════════════════════════╝

┌─────────────────────────────────────────────────────────────────┐
│ 🔴 CRITICAL (Page Immediately)                                  │
├───────────────────────┬─────────────────────┬───────────────────┤
│ Alert                 │ Condition           │ Channel           │
├───────────────────────┼─────────────────────┼───────────────────┤
│ Service Down          │ uptime = 0 for 1m   │ PagerDuty         │
│ Error Rate Critical   │ errors > 5% for 2m  │ PagerDuty         │
│ Database Down         │ db_conn = 0         │ PagerDuty         │
│ API Latency Critical  │ p99 > 5s for 5m     │ PagerDuty         │
└───────────────────────┴─────────────────────┴───────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│ 🟠 WARNING (Notify Slack)                                       │
├───────────────────────┬─────────────────────┬───────────────────┤
│ Alert                 │ Condition           │ Channel           │
├───────────────────────┼─────────────────────┼───────────────────┤
│ High Error Rate       │ errors > 1% for 5m  │ Slack #alerts     │
│ High Latency          │ p95 > 500ms for 5m  │ Slack #alerts     │
│ High CPU              │ cpu > 80% for 10m   │ Slack #alerts     │
│ High Memory           │ mem > 85% for 10m   │ Slack #alerts     │
│ Disk Space Low        │ disk > 80%          │ Slack #alerts     │
│ SSL Expiring          │ ssl < 14 days       │ Slack #alerts     │
└───────────────────────┴─────────────────────┴───────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│ 🔵 INFO (Log Only)                                              │
├───────────────────────┬─────────────────────┬───────────────────┤
│ Alert                 │ Condition           │ Channel           │
├───────────────────────┼─────────────────────┼───────────────────┤
│ Deploy Started        │ deploy.start event  │ Slack #deploys    │
│ Deploy Completed      │ deploy.success      │ Slack #deploys    │
│ Scaling Event         │ replicas changed    │ Log               │
│ New Error Type        │ new exception       │ Sentry            │
└───────────────────────┴─────────────────────┴───────────────────┘
```

### Alert Configuration Files

```yaml
# output/[project]/ops/alerts/alert-rules.yaml

alerts:
  critical:
    - name: service_down
      condition: "uptime == 0"
      duration: "1m"
      channel: pagerduty
      message: "🔴 [PROJECT] is DOWN!"
      
    - name: error_rate_critical
      condition: "error_rate > 0.05"
      duration: "2m"
      channel: pagerduty
      message: "🔴 Error rate exceeded 5%"
      
  warning:
    - name: high_error_rate
      condition: "error_rate > 0.01"
      duration: "5m"
      channel: slack
      message: "⚠️ Error rate elevated: {{ value }}%"
      
    - name: high_latency
      condition: "latency_p95 > 500"
      duration: "5m"
      channel: slack
      message: "⚠️ P95 latency high: {{ value }}ms"
```

### Test Alert

```
╔══════════════════════════════════════════════════════════════════╗
║           TEST ALERT                                             ║
╚══════════════════════════════════════════════════════════════════╝

Sending test alert to all channels...

┌────────────┬───────────┬────────────────────────────────────────┐
│ Channel    │ Status    │ Result                                 │
├────────────┼───────────┼────────────────────────────────────────┤
│ Slack      │ ✅ Sent   │ Message delivered to #alerts           │
│ PagerDuty  │ ✅ Sent   │ Test incident created (auto-resolved)  │
│ Email      │ ✅ Sent   │ Delivered to eng@company.com           │
└────────────┴───────────┴────────────────────────────────────────┘

All channels working!
```

4. On complete:

"🔔 Alerts configured for [PROJECT].

**Channels:**
- Slack: #alerts ✅
- PagerDuty: On-Call ✅
- Email: eng@company.com ✅

**Rules:** 12 active
- Critical: 4 (page immediately)
- Warning: 6 (Slack notification)
- Info: 2 (log only)

**Next:** `/ts-slo` to define SLOs"

## Required Tokens (.env)

```bash
SLACK_WEBHOOK_URL=
PAGERDUTY_INTEGRATION_KEY=
```
