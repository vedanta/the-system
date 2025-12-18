# Status Page: $ARGUMENTS

Create and manage public status page.

## Usage

```
/ts-status-page                          # Set up status page
/ts-status-page update <component> <status>  # Update component status
/ts-status-page incident <title>         # Post incident
/ts-status-page maintenance <title>      # Schedule maintenance
```

### Examples
```
/ts-status-page                          # Initial setup
/ts-status-page update api degraded      # Mark API as degraded
/ts-status-page incident "Database Issues"  # Post incident
/ts-status-page maintenance "Planned upgrade"  # Schedule maintenance
```

## Process

1. Read the active project file from `.claude/pipeline/projects/`

2. Use the **sre-ops-engineer** subagent to:

### Initial Setup

```
╔══════════════════════════════════════════════════════════════════╗
║           STATUS PAGE SETUP                                      ║
╚══════════════════════════════════════════════════════════════════╝

Provider: Instatus (free tier)
URL: https://status.[project].com

┌─────────────────────────────────────────────────────────────────┐
│ COMPONENTS CONFIGURED                                           │
├────────────────┬────────────────────────────┬───────────────────┤
│ Component      │ Description                │ Initial Status    │
├────────────────┼────────────────────────────┼───────────────────┤
│ Website        │ Main application           │ 🟢 Operational    │
│ API            │ Backend services           │ 🟢 Operational    │
│ Database       │ Data storage               │ 🟢 Operational    │
│ Authentication │ Login and signup           │ 🟢 Operational    │
└────────────────┴────────────────────────────┴───────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│ STATUS LEVELS                                                   │
├─────────────────────────────────────────────────────────────────┤
│ 🟢 Operational      - All systems working normally              │
│ 🟡 Degraded         - Performance issues, service slow          │
│ 🟠 Partial Outage   - Some features unavailable                 │
│ 🔴 Major Outage     - Service completely unavailable            │
│ 🔵 Maintenance      - Planned maintenance in progress           │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│ SUBSCRIBERS                                                     │
├─────────────────────────────────────────────────────────────────┤
│ Users can subscribe via:                                        │
│ - Email notifications                                           │
│ - Slack webhook                                                 │
│ - RSS feed                                                      │
└─────────────────────────────────────────────────────────────────┘

Status Page Live: https://status.[project].com
```

### Update Component Status

```
/ts-status-page update api degraded

╔══════════════════════════════════════════════════════════════════╗
║           STATUS UPDATE                                          ║
╚══════════════════════════════════════════════════════════════════╝

Component: API
Previous: 🟢 Operational
Current:  🟡 Degraded Performance

Status page updated: https://status.[project].com

Subscribers notified: 23 email, 2 Slack channels
```

### Post Incident

```
/ts-status-page incident "Database Connection Issues"

╔══════════════════════════════════════════════════════════════════╗
║           INCIDENT POSTED                                        ║
╚══════════════════════════════════════════════════════════════════╝

Title: Database Connection Issues
Status: Investigating
Affected: Database, API
Posted: [timestamp]

┌─────────────────────────────────────────────────────────────────┐
│ INCIDENT TIMELINE                                               │
├─────────────────────────────────────────────────────────────────┤
│ [10:45] Investigating - We are investigating database           │
│         connection issues affecting the API.                    │
└─────────────────────────────────────────────────────────────────┘

Update incident:
- /ts-status-page incident update "Identified the issue"
- /ts-status-page incident resolve "Issue resolved"

Status page: https://status.[project].com
```

### Schedule Maintenance

```
/ts-status-page maintenance "Database Upgrade"

╔══════════════════════════════════════════════════════════════════╗
║           MAINTENANCE SCHEDULED                                  ║
╚══════════════════════════════════════════════════════════════════╝

Title: Database Upgrade
Status: Scheduled
Affected: Database, API
Scheduled: [date/time]
Duration: 30 minutes (estimated)

┌─────────────────────────────────────────────────────────────────┐
│ MAINTENANCE NOTICE                                              │
├─────────────────────────────────────────────────────────────────┤
│ We will be performing a scheduled database upgrade.             │
│                                                                 │
│ Expected Impact:                                                │
│ - API may be unavailable for up to 30 minutes                   │
│ - Website will show maintenance page                            │
│                                                                 │
│ Start: [date/time]                                              │
│ End: [date/time] (estimated)                                    │
└─────────────────────────────────────────────────────────────────┘

Subscribers will be notified 24h and 1h before maintenance.

Status page: https://status.[project].com
```

### Status Page Providers

| Provider | Free Tier | Features |
|----------|-----------|----------|
| Instatus | ✅ Yes | Simple, clean, integrations |
| Statuspage.io | ❌ Paid | Atlassian, enterprise |
| Cachet | ✅ Self-host | Open source |
| Better Uptime | ✅ Yes | Status + monitoring |

3. Generate status page configuration in `output/[project]/ops/status-page/`

4. Required in .env:
```bash
INSTATUS_API_KEY=
# or
STATUSPAGE_API_KEY=
```
