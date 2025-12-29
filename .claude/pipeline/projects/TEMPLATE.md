# Project: [PROJECT_NAME]

## Meta
- Created: [TIMESTAMP]
- Status: INTAKE
- Current Owner: founder-advisor

---

## 🎛️ Build Configuration

### Build Preset Selection
- **Build Preset:** [prototype/mvp/production] (to be determined)
- **Selection Method:** [auto-detected/CLI flag/config override]
- **Selection Rationale:** [reason for build preset choice]

### Architecture Preset Selection
- **Architecture Preset:** [static/embedded/fullstack-js/etc] (to be determined)
- **Selection Method:** [auto-detected/CLI flag/config override/KISS decision tree]
- **Selection Rationale:** [reason for architecture preset choice]

### Final Agent Configuration
- **Agent Count:** [to be determined after intersection]
- **Selected Agents:** [final agent list after build ∩ architecture]
- **Excluded Agents:** [agents skipped due to build/architecture constraints]
- **Stage Modes:**
  - Architecture: [skip/compressed/minimal/lite/standard/full]
  - Product: [skip/compressed/minimal/lite/standard/full]
  - Development: [skip/compressed/minimal/lite/standard/full]
  - Release: [skip/compressed/minimal/lite/standard/full]

### CLI Overrides
- **Override Flags:** [none or list of --flag=value pairs]
- **Flag Source:** [ts-new-project or ts-turbo command]

### Stage Skip Overrides
- **Skipped Stages:** [none or list: product, development, release, golive]
- **Skip Method:** [CLI flag: --build-skip-stage]
- **Dependency Warnings:** [none or list of dependency concerns]
- **Applied Overrides:**
  - Product Stage: [normal/SKIPPED]
  - Development Stage: [normal/SKIPPED]
  - Release Stage: [normal/SKIPPED]
  - Go Live Stage: [normal/SKIPPED]

---

## ⏱️ Performance Metrics

### Timing
- **Start Time:** [timestamp when project creation began]
- **Architecture Complete:** [timestamp when architecture locked]
- **Development Complete:** [timestamp when development done]
- **Release Complete:** [timestamp when release ready]
- **Total Duration:** [calculated total time]

### Target vs Actual
- **Target Time:** [based on build preset: 3-5min/15-20min/45-60min]
- **Actual Time:** [measured actual completion time]
- **Performance Factor:** [actual/target ratio]
- **Agent Efficiency:** [agents used vs maximum possible]

### Quality Level Achieved
- **Code Quality:** [basic/good/excellent]
- **Test Coverage:** [none/basic/comprehensive]
- **Documentation:** [minimal/standard/complete]
- **Security:** [basic/standard/enterprise]

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
