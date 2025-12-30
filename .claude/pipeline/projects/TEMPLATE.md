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

## 🤖 Solution Architect Assessment

### Status: NOT_STARTED

### Assessment Overview
- **Assessment Date:** [timestamp]
- **Assessment Score:** [score]/10
- **Claude Success Probability:** [percentage]%
- **Expected Debug Time:** [time estimate]
- **Confidence Level:** [High/Medium/Low]

### Technology Stack (LOCKED)
- **Build Preset:** [prototype/mvp/production]
- **Architecture Preset:** [static/embedded/fullstack-js/baas/microservice]
- **Frontend:** [technology choice]
- **Backend:** [technology choice or N/A]
- **Database:** [technology choice or N/A]
- **Authentication:** [technology choice or none]
- **Runtime:** [for CLI applications]
- **Framework:** [for CLI applications]

### Assessment Rationale
- **Signal Analysis:** [detected signals from user input]
- **AI Optimization:** [why this stack maximizes Claude Code success]
- **Risk Assessment:** [identified risks and mitigations]
- **Alternatives Considered:** [other viable options evaluated]

### Success Factors
- **Claude Success Rate:** [percentage]% build success probability
- **Technology Strengths:** [key advantages of chosen stack]
- **Optimization Strategies:** [recommended approaches for AI success]
- **Common Pitfalls:** [known failure modes and avoidance strategies]

### EA Handoff Status
- **Stack Locked:** [ ] Yes
- **EA Required:** [Yes/No]
- **EA Mode:** [skip/compressed/standard/full]
- **Skip Reason:** [if EA is skipped]
- **Handoff Date:** [timestamp]

### SA Solution Architect Handoff Data (FOR EA CONSUMPTION)
```yaml
solution_architect_handoff:
  assessment_complete: false
  recommended_stack: "[preset]"
  technology_decisions:
    frontend: "[technology]"
    backend: "[technology or null]"
    database: "[technology or null]"
    auth: "[technology or none]"
    runtime: "[for CLI - technology or null]"
    framework: "[for CLI - technology or null]"
  assessment_score: "[score]"
  success_probability: "[decimal]"
  risk_factors:
    - "[risk factor 1]"
    - "[risk factor 2]"
  success_strategies:
    - "[strategy 1]"
    - "[strategy 2]"
  ea_decision:
    skip: false
    mode: "[compressed/standard/full]"
    reason: "[rationale]"
  alternatives_considered:
    - preset: "[alternative 1]"
      score: "[score]"
      reason_not_chosen: "[rationale]"
    - preset: "[alternative 2]"
      score: "[score]"
      reason_not_chosen: "[rationale]"
```

### Architecture Lock
- **Stack Locked:** [ ] Technology stack decisions are locked
- **Lock Date:** [timestamp when stack was locked]
- **Lock Rationale:** [reason for locking these technology choices]

### SA Artifacts
- [ ] Technology assessment completed
- [ ] Risk analysis completed
- [ ] Stack recommendation generated
- [ ] EA handoff prepared
- [ ] Architecture lock confirmed

---

## 📐 Architecture Department

### Status: NOT_STARTED
### Prerequisites: Solution Architect assessment must be complete

### Architecture Configuration
- **Stack Locked:** [ ] `architecture.stack_locked = true`
- **SA Handoff Available:** [ ] SA handoff data exists in project file
- **EA Execution Mode:** [skip/compressed/standard/full] (from SA recommendation)

### Enterprise Architect Workflow
**Phase 1: Prerequisites Check**
- [ ] Read SA handoff data successfully
- [ ] Validate technology stack is locked
- [ ] Confirm EA execution mode
- [ ] Verify founder approval for architecture

**Phase 2: Requirements Analysis**
- [ ] Business context analysis (within stack constraints)
- [ ] Technology-constrained functional requirements
- [ ] Stack-informed non-functional requirements
- [ ] Technology integration constraints identified

**Phase 3: System Design (Technology-Specific)**
- [ ] System context diagram (using locked technologies)
- [ ] Component architecture (implementation-ready)
- [ ] Data architecture (database-specific)
- [ ] API design (backend framework-specific)
- [ ] Infrastructure architecture (stack-optimized)
- [ ] Security architecture (auth system-specific)

**Phase 4: Implementation Decisions**
- [ ] ADR-001: SA Technology Acceptance
- [ ] ADR-002: Component Architecture Pattern
- [ ] ADR-003: Data Flow and State Management
- [ ] ADR-004: Authentication Implementation
- [ ] ADR-005: Performance Strategy
- [ ] ADR-006: Deployment Strategy

### Architecture Artifacts
**Required for Development Handoff:**
- [ ] All 6 design artifacts completed
- [ ] Technology-specific implementation guidance
- [ ] Stack-optimized deployment strategy
- [ ] Security implementation plan
- [ ] Performance optimization strategy
- [ ] Cost estimates with technology details

### EA Skip Logic
- **Skip Conditions Met:** [ ] Simple stack + prototype build
- **Skip Reason:** [if applicable]
- **Skip Benefits:** [time saved, complexity avoided]

### Architecture Status
- [ ] **READY_FOR_REVIEW** (EA design complete)
- [ ] **LOCKED** (Architecture approved for development)

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
