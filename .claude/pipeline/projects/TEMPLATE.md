# Project: [PROJECT_NAME]

## Meta
- Created: [TIMESTAMP]
- Status: INTAKE
- Current Owner: founder-advisor

---

## 🎩 Founder Input

### Original Idea
[Human founder's raw idea goes here]

### Founder Goals
- Business Goal: 
- Target Users: 
- Timeline: 
- Budget Constraints: 

---

## 🎩 Founder-Advisor Analysis

### Idea Refinement
[Founder-advisor's refined understanding]

### Strategic Assessment
- Market Opportunity: 
- Competitive Landscape: 
- Key Risks: 
- Success Criteria: 

### Recommendation
[GO / NEEDS_CLARIFICATION / PIVOT / HOLD]

### Questions for Founder (if any)
1. 

### Handoff Notes for Architecture
[What the architecture team needs to know]

#### Approval
- [ ] Founder approved to proceed to Architecture

---

## 📐 Architecture Department

### Status: NOT_STARTED

[Architecture content...]

---

## 📦 Product Department

### Status: BLOCKED (waiting for architecture)

[Product content...]

---

## 💻 Development Department

### Status: BLOCKED (waiting for green light)

[Development content...]

---

## 🚀 Stage 4: Release & Deployment

### Status: BLOCKED (waiting for development approval)

[Release & Deployment content...]

---

## 🌐 Stage 5: Go Live & Operate (Optional)

### Status: BLOCKED (waiting for Stage 4 OR Stage 3)

This stage is optional. Use for quick deployment to managed platforms.

---

### 🚀 SRE Deploy Engineer

#### Deployments

| Target | Service | URL | Environment | Deployed |
|--------|---------|-----|-------------|----------|
| | | | | |

#### Deployment Commands
```
/ts-push vercel              # Frontend
/ts-push railway             # Backend
/ts-push neon                # Database
/ts-live-status              # Check all
```

#### Custom Domains

| Domain | Target | SSL | Status |
|--------|--------|-----|--------|
| | | | |

#### Deployment Artifacts
- [ ] Frontend deployed
- [ ] Backend deployed
- [ ] Database deployed
- [ ] Custom domains configured
- [ ] Environment variables set

---

### 🛡️ SRE Ops Engineer

#### Monitoring Stack

| Tool | Purpose | Status |
|------|---------|--------|
| Sentry | Error tracking | ⏳ |
| Datadog | APM + Logs | ⏳ |

#### Monitoring Artifacts
- [ ] Sentry configured
- [ ] Datadog configured
- [ ] Dashboard created

#### Alerting

| Channel | Type | Target |
|---------|------|--------|
| | | |

#### Alert Rules

| Alert | Severity | Condition | Status |
|-------|----------|-----------|--------|
| | | | |

#### Alerting Artifacts
- [ ] Alert channels configured
- [ ] Critical alerts defined
- [ ] Warning alerts defined
- [ ] Test alert sent

#### SLOs

| SLO | Target | Current | Status |
|-----|--------|---------|--------|
| Availability | 99.9% | | ⏳ |
| Latency (p95) | < 500ms | | ⏳ |
| Error Rate | < 1% | | ⏳ |

#### Error Budget
- Allowed: 43.2 min/month
- Used: 
- Remaining: 

#### SLO Artifacts
- [ ] SLOs defined
- [ ] Error budget policy set
- [ ] SLO dashboard created

#### Status Page
- URL: 
- [ ] Status page created
- [ ] Components configured
- [ ] Subscribers enabled

#### Incidents

| ID | Severity | Title | Duration | Status |
|----|----------|-------|----------|--------|
| | | | | |

#### Operations Artifacts
- [ ] Monitoring complete
- [ ] Alerting complete
- [ ] SLOs defined
- [ ] Status page live
- [ ] Runbooks created

---

### Stage 5 Status

- [ ] Deployments complete
- [ ] Monitoring configured
- [ ] Alerting configured
- [ ] SLOs defined
- [ ] Status page live
- [ ] **🌐 OPERATIONAL**

---

## 📋 Audit Log

| Timestamp | Agent | Action | Notes |
|-----------|-------|--------|-------|
