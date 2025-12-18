# Incident Management: $ARGUMENTS

Manage incidents with structured response process.

## Usage

```
/ts-incident start <severity> "<title>"  # Start new incident
/ts-incident update "<message>"          # Add update
/ts-incident resolve "<resolution>"      # Resolve incident
/ts-incident postmortem                  # Generate postmortem
/ts-incident list                        # List recent incidents
```

### Examples
```
/ts-incident start sev1 "API completely down"
/ts-incident update "Identified database connection issue"
/ts-incident update "Fix deployed, monitoring"
/ts-incident resolve "Database connection pool increased"
/ts-incident postmortem
```

## Severity Levels

| Level | Description | Response Time | Escalation |
|-------|-------------|---------------|------------|
| SEV1 | Complete outage | Immediate | Page on-call + leadership |
| SEV2 | Major feature broken | 15 min | Page on-call |
| SEV3 | Minor issue | 1 hour | Slack notification |

## Process

### Start Incident

```
/ts-incident start sev1 "API completely down"

╔══════════════════════════════════════════════════════════════════╗
║           🚨 INCIDENT STARTED: INC-2024-0042                     ║
╚══════════════════════════════════════════════════════════════════╝

┌─────────────────────────────────────────────────────────────────┐
│ INCIDENT DETAILS                                                │
├─────────────────────────────────────────────────────────────────┤
│ ID:        INC-2024-0042                                        │
│ Severity:  🔴 SEV1 - Critical                                   │
│ Title:     API completely down                                  │
│ Status:    🔴 ACTIVE                                            │
│ Started:   2024-01-15 10:45:00 UTC                              │
│ Duration:  0 minutes                                            │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│ ACTIONS TAKEN                                                   │
├─────────────────────────────────────────────────────────────────┤
│ ✅ Incident declared                                            │
│ ✅ On-call paged (PagerDuty)                                    │
│ ✅ Slack channel created: #inc-2024-0042                        │
│ ✅ Status page updated                                          │
│ ✅ Leadership notified (SEV1)                                   │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│ TIMELINE                                                        │
├─────────────────────────────────────────────────────────────────┤
│ 10:45:00  Incident declared                                     │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│ INCIDENT COMMANDER                                              │
├─────────────────────────────────────────────────────────────────┤
│ Assigned: On-call engineer                                      │
│ Slack: #inc-2024-0042                                           │
└─────────────────────────────────────────────────────────────────┘

Commands:
- /ts-incident update "message"    Add update
- /ts-incident resolve "message"   Resolve incident
```

### Update Incident

```
/ts-incident update "Identified database connection pool exhausted"

╔══════════════════════════════════════════════════════════════════╗
║           📝 INCIDENT UPDATE: INC-2024-0042                      ║
╚══════════════════════════════════════════════════════════════════╝

┌─────────────────────────────────────────────────────────────────┐
│ TIMELINE                                                        │
├─────────────────────────────────────────────────────────────────┤
│ 10:45:00  Incident declared                                     │
│ 10:48:00  Investigating - Checking logs and metrics             │
│ 10:52:00  Identified - Database connection pool exhausted       │ ← NEW
└─────────────────────────────────────────────────────────────────┘

Duration: 7 minutes
Status page updated: https://status.[project].com
Slack channel notified: #inc-2024-0042
```

### Resolve Incident

```
/ts-incident resolve "Increased connection pool size from 20 to 50"

╔══════════════════════════════════════════════════════════════════╗
║           ✅ INCIDENT RESOLVED: INC-2024-0042                    ║
╚══════════════════════════════════════════════════════════════════╝

┌─────────────────────────────────────────────────────────────────┐
│ INCIDENT SUMMARY                                                │
├─────────────────────────────────────────────────────────────────┤
│ ID:         INC-2024-0042                                       │
│ Severity:   SEV1                                                │
│ Duration:   25 minutes                                          │
│ Resolution: Increased connection pool size from 20 to 50        │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│ TIMELINE                                                        │
├─────────────────────────────────────────────────────────────────┤
│ 10:45:00  Incident declared                                     │
│ 10:48:00  Investigating                                         │
│ 10:52:00  Identified - DB connection pool exhausted             │
│ 10:58:00  Fix deployed - Pool size increased                    │
│ 11:05:00  Monitoring - Services recovering                      │
│ 11:10:00  Resolved - All services healthy                       │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│ IMPACT                                                          │
├─────────────────────────────────────────────────────────────────┤
│ Users affected:  ~2,500                                         │
│ Requests failed: ~15,000                                        │
│ Revenue impact:  ~$500 (estimated)                              │
│ Data loss:       None                                           │
└─────────────────────────────────────────────────────────────────┘

Status page updated: Resolved
Postmortem due: 2024-01-18

Generate postmortem: /ts-incident postmortem
```

### Generate Postmortem

```
/ts-incident postmortem

╔══════════════════════════════════════════════════════════════════╗
║           POSTMORTEM: INC-2024-0042                              ║
╚══════════════════════════════════════════════════════════════════╝

## Incident Postmortem

**Incident:** INC-2024-0042 - API completely down
**Date:** 2024-01-15
**Duration:** 25 minutes
**Severity:** SEV1
**Author:** [auto-generated]

### Summary

The API became completely unavailable for 25 minutes due to 
database connection pool exhaustion during a traffic spike.

### Impact

- ~2,500 users unable to access the service
- ~15,000 failed API requests
- ~$500 estimated revenue impact

### Timeline

| Time | Event |
|------|-------|
| 10:45 | Alerts fired for API 5xx errors |
| 10:45 | Incident declared (SEV1) |
| 10:48 | On-call engineer began investigation |
| 10:52 | Root cause identified: connection pool exhausted |
| 10:58 | Fix deployed: pool size 20 → 50 |
| 11:05 | Services began recovering |
| 11:10 | All services healthy, incident resolved |

### Root Cause

Traffic spike from marketing campaign exhausted the database 
connection pool (limit: 20). New requests queued and eventually 
timed out, causing cascading failures.

### Resolution

Increased database connection pool from 20 to 50 connections.

### Action Items

| Priority | Action | Owner | Due |
|----------|--------|-------|-----|
| P0 | Add connection pool monitoring | SRE | 2024-01-16 |
| P1 | Set up auto-scaling for traffic spikes | Backend | 2024-01-22 |
| P1 | Add runbook for DB connection issues | SRE | 2024-01-19 |
| P2 | Review all connection pool settings | Backend | 2024-01-25 |

### Lessons Learned

**What went well:**
- Fast detection (alerts fired immediately)
- Quick root cause identification (7 minutes)
- Clear communication in Slack channel

**What could be improved:**
- No monitoring on connection pool usage
- Default pool size was too low
- No runbook for this scenario

### Prevention

1. Add dashboard for connection pool metrics
2. Set alert for pool usage > 80%
3. Document pool sizing guidelines
4. Add load testing before marketing campaigns

---

Postmortem saved: output/[project]/ops/incidents/INC-2024-0042-postmortem.md
```

### List Incidents

```
/ts-incident list

╔══════════════════════════════════════════════════════════════════╗
║           RECENT INCIDENTS                                       ║
╚══════════════════════════════════════════════════════════════════╝

┌────────────────┬──────┬───────────────────────┬──────────┬────────┐
│ ID             │ Sev  │ Title                 │ Duration │ Status │
├────────────────┼──────┼───────────────────────┼──────────┼────────┤
│ INC-2024-0042  │ SEV1 │ API completely down   │ 25m      │ ✅     │
│ INC-2024-0038  │ SEV2 │ Login slow            │ 45m      │ ✅     │
│ INC-2024-0035  │ SEV3 │ Intermittent 500s     │ 15m      │ ✅     │
└────────────────┴──────┴───────────────────────┴──────────┴────────┘

Last 30 days:
- SEV1: 1 incident
- SEV2: 2 incidents
- SEV3: 5 incidents
- MTTR: 28 minutes average
```
