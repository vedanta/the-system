# SLO Management: $ARGUMENTS

Define and track Service Level Objectives.

## Usage

```
/ts-slo                                  # View current SLOs
/ts-slo define                           # Define new SLOs
/ts-slo status                           # Check SLO status & error budget
/ts-slo report                           # Generate SLO report
```

## Process

### Define SLOs

```
/ts-slo define

╔══════════════════════════════════════════════════════════════════╗
║           SLO DEFINITION                                         ║
╚══════════════════════════════════════════════════════════════════╝

┌─────────────────────────────────────────────────────────────────┐
│ AVAILABILITY SLO                                                │
├─────────────────────────────────────────────────────────────────┤
│ SLI: Percentage of successful requests (non-5xx)                │
│ Target: 99.9%                                                   │
│ Window: 30 days (rolling)                                       │
│                                                                 │
│ Error Budget:                                                   │
│ - 30 days × 24 hours × 60 min = 43,200 minutes                  │
│ - 0.1% error budget = 43.2 minutes of downtime allowed          │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│ LATENCY SLO                                                     │
├─────────────────────────────────────────────────────────────────┤
│ SLI: Request latency percentiles                                │
│                                                                 │
│ Targets:                                                        │
│ - p50 (median):  < 100ms  for 99% of requests                   │
│ - p95:           < 500ms  for 99% of requests                   │
│ - p99:           < 1000ms for 99% of requests                   │
│                                                                 │
│ Window: 30 days (rolling)                                       │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│ ERROR RATE SLO                                                  │
├─────────────────────────────────────────────────────────────────┤
│ SLI: Percentage of requests resulting in errors                 │
│ Target: < 1%                                                    │
│ Window: 30 days (rolling)                                       │
└─────────────────────────────────────────────────────────────────┘

SLOs saved to: output/[project]/ops/slo/slo-definitions.yaml
```

### View SLO Status

```
/ts-slo status

╔══════════════════════════════════════════════════════════════════╗
║           SLO STATUS: [PROJECT]                                  ║
╚══════════════════════════════════════════════════════════════════╝

Period: Last 30 days
Updated: [timestamp]

┌─────────────────────────────────────────────────────────────────┐
│ AVAILABILITY                                                    │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│ Target: 99.9%    Current: 99.95%    Status: ✅ Meeting SLO      │
│                                                                 │
│ [████████████████████████████████████████████████░░] 99.95%     │
│                                                   ↑             │
│                                              Target: 99.9%      │
│                                                                 │
│ Error Budget:                                                   │
│ ├── Allowed:   43.2 minutes                                     │
│ ├── Used:      12 minutes (1 incident)                          │
│ ├── Remaining: 31.2 minutes                                     │
│ └── Status:    [██████████████░░░░░░] 72% remaining             │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│ LATENCY                                                         │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│ Percentile │ Target  │ Current │ Status                        │
│ ───────────┼─────────┼─────────┼──────────────────────────────  │
│ p50        │ < 100ms │ 65ms    │ ✅ Meeting SLO                 │
│ p95        │ < 500ms │ 320ms   │ ✅ Meeting SLO                 │
│ p99        │ < 1s    │ 780ms   │ ✅ Meeting SLO                 │
│                                                                 │
│ Trend (7 days):                                                 │
│ p50: ─────────▁▁▁▁▁▂▂▂▃▃▃▃▃▃▃  (stable)                        │
│ p95: ─────────▂▂▂▃▃▃▃▄▄▄▄▄▄▄▄  (slight increase)               │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│ ERROR RATE                                                      │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│ Target: < 1%    Current: 0.3%    Status: ✅ Meeting SLO         │
│                                                                 │
│ [███░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░] 0.3%       │
│                                                   ↑             │
│                                              Target: 1%         │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│ SUMMARY                                                         │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│ Overall SLO Status: ✅ All SLOs Met                             │
│                                                                 │
│ Error Budget Policy:                                            │
│ ├── > 50% remaining:  ✅ Normal development                     │
│ ├── 25-50% remaining: ⚠️ Increased caution                      │
│ ├── 10-25% remaining: 🟠 Feature freeze                         │
│ ├── < 10% remaining:  🔴 Reliability sprint                     │
│ └── 0% remaining:     🚨 All hands on reliability               │
│                                                                 │
│ Current: 72% budget remaining → ✅ Normal development           │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### SLO Report

```
/ts-slo report

╔══════════════════════════════════════════════════════════════════╗
║           SLO MONTHLY REPORT: [PROJECT]                          ║
╚══════════════════════════════════════════════════════════════════╝

## SLO Report - January 2024

### Executive Summary

All SLOs met for the reporting period. Error budget at healthy 
levels with 72% remaining.

### Availability

| Metric | Target | Actual | Status |
|--------|--------|--------|--------|
| Uptime | 99.9% | 99.95% | ✅ Met |

**Incidents affecting availability:**
- INC-2024-0042: 25 min downtime (Jan 15)

**Error budget consumption:**
- Budget: 43.2 min
- Used: 12 min (28%)
- Remaining: 31.2 min (72%)

### Latency

| Percentile | Target | Actual | Status |
|------------|--------|--------|--------|
| p50 | < 100ms | 65ms | ✅ Met |
| p95 | < 500ms | 320ms | ✅ Met |
| p99 | < 1000ms | 780ms | ✅ Met |

**Trends:**
- p50: Stable (±5ms)
- p95: Slight increase (+20ms from last month)
- p99: Stable

### Error Rate

| Metric | Target | Actual | Status |
|--------|--------|--------|--------|
| Error Rate | < 1% | 0.3% | ✅ Met |

**Top errors:**
1. Database timeout (23 occurrences)
2. Rate limit exceeded (45 occurrences)
3. Auth token expired (156 occurrences)

### Recommendations

1. **Investigate p95 latency increase**
   - Action: Profile slow endpoints
   - Owner: Backend team
   
2. **Database timeout pattern**
   - Action: Review connection pool settings
   - Owner: SRE team

3. **Increase monitoring coverage**
   - Action: Add SLI dashboards
   - Owner: SRE team

### Next Month Focus

- Complete action items from INC-2024-0042 postmortem
- Add connection pool monitoring
- Review capacity for expected traffic increase

---

Report saved: output/[project]/ops/slo/reports/2024-01-slo-report.md
```

### SLO Configuration File

```yaml
# output/[project]/ops/slo/slo-definitions.yaml

slos:
  availability:
    name: "Service Availability"
    description: "Percentage of successful requests"
    sli:
      type: "availability"
      good_events: "http_status < 500"
      total_events: "all requests"
    target: 0.999  # 99.9%
    window: "30d"
    
  latency_p50:
    name: "Median Latency"
    description: "50th percentile response time"
    sli:
      type: "latency"
      percentile: 50
      threshold_ms: 100
    target: 0.99  # 99% of requests under threshold
    window: "30d"
    
  latency_p95:
    name: "95th Percentile Latency"
    sli:
      type: "latency"
      percentile: 95
      threshold_ms: 500
    target: 0.99
    window: "30d"
    
  error_rate:
    name: "Error Rate"
    description: "Percentage of failed requests"
    sli:
      type: "error_rate"
      error_condition: "http_status >= 500 OR timeout"
    target: 0.01  # < 1%
    window: "30d"

error_budget_policy:
  thresholds:
    - remaining: 0.5
      action: "normal_development"
    - remaining: 0.25
      action: "increased_caution"
    - remaining: 0.1
      action: "feature_freeze"
    - remaining: 0
      action: "reliability_sprint"
```
