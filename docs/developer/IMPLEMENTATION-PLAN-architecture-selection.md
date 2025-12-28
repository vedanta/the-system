# Implementation Plan: Architecture Selection System
## Based on Design Document v3.0

**Goal:** Implement intelligent architecture selection to replace hardcoded Next.js + FastAPI + PostgreSQL pattern with KISS-based preset and option selection.

---

## 🎯 Executive Summary

| Phase | Duration | Focus | Key Deliverables |
|-------|----------|-------|------------------|
| Phase 1 | Week 1 | Configuration Foundation | presets.yaml, preferences.yaml updates |
| Phase 2 | Week 2 | Agent Intelligence | Signal extraction, KISS selection logic |
| Phase 3 | Week 3 | Command Interface | Override flags, updated commands |
| Phase 4 | Week 4 | Template Integration | Project templates, output structures |

**Total Effort:** 4 weeks
**Risk:** Medium (significant agent behavior changes)
**Impact:** High (fundamental improvement to The System)

---

## 🏗️ Phase 1: Configuration Foundation
**Duration:** Week 1
**Priority:** Critical Path

### 1.1 Create presets.yaml
**File:** `.claude/config/presets.yaml`
**Lines of Code:** ~2,800 (comprehensive preset definitions)

**Contents:**
- 8 complete preset definitions (5 web + 3 CLI)
- All option mappings with signals
- Agent skip/use logic per preset
- Deploy target specifications

**Key Presets to Define:**
```yaml
# Web Presets
- static:      No backend/DB (landing pages)
- embedded:    Single deployable with embedded DB (personal tools)
- fullstack-js: Standard 2-tier (DEFAULT for web)
- baas:        Supabase/Firebase (realtime apps)
- microservice: 3-tier with Python backend (ML/compute)

# CLI Presets
- cli-script:   Single file utility
- cli-tool:     Multi-command installable tool
- cli-tui:      Interactive terminal interface
```

### 1.2 Update preferences.yaml
**File:** `.claude/config/preferences.yaml`
**Add Section:**
```yaml
architecture:
  auto_select: true
  default_preset: fullstack-js
  # Override mechanisms
  # stack: {}  # Global overrides
```

### 1.3 Validation Scripts
Create validation for preset definitions:
- Schema validation
- Signal consistency checks
- Deploy target compatibility

**Deliverable:** Complete configuration foundation for selection system

---

## 🧠 Phase 2: Agent Intelligence
**Duration:** Week 2
**Priority:** Critical Path

### 2.1 Founder-Advisor: Signal Extraction
**File:** `.claude/agents/founder-advisor.md`

**New Capabilities:**
- Extract preset signals from user ideas
- Extract option signals for technology selection
- Output structured signal analysis

**Signal Categories:**
```markdown
### Preset Signals
- cli: "CLI", "command line", "terminal"
- persistent_data: User accounts, saved content
- python_ml_compute: AI, ML, data processing
- realtime_core: Chat, collaboration, live updates
- multi_user_ha: Many users, business-critical

### Option Signals
- analytics: "analytics", "dashboard", "reports" → duckdb
- csv_data: "CSV", "parquet", "data files" → duckdb
- edge: "edge", "global", "distributed" → turso
- managed_auth: "managed auth", "drop-in" → clerk
```

### 2.2 Enterprise Architect: KISS Selection
**File:** `.claude/agents/enterprise-architect.md`

**New Phase 0: Stack Selection**
```markdown
## Phase 0: Stack Selection

### Step 1: Check Overrides
- Command flags (--preset, --db, --auth)
- Config overrides (preferences.yaml)

### Step 2: KISS Preset Selection
- Read signals from Founder-Advisor
- Apply decision tree logic
- Select simplest viable preset

### Step 3: Option Selection
- For each option category in preset
- Apply priority: flags > config > signals > default
- Log selection rationale

### Step 4: Output Complete Stack Recommendation
- Present to human (HITL) or auto-proceed (Turbo)
```

**Decision Tree Implementation:**
```
CLI Detection
├── Interactive TUI needed? → cli-tui
├── Multiple commands? → cli-tool
└── Simple utility? → cli-script

Web Category
├── No data persistence? → static
├── Python/ML needed? → microservice
├── Realtime core feature? → baas
├── Multi-user/HA needed? → fullstack-js
└── Simple persistence? → embedded
```

### 2.3 Development Agents: Stack Adaptation
**Files:** All development agents

**New Capabilities:**
- Read selected stack from PROJECT.md
- Skip execution if not needed for preset
- Adapt templates and code generation to selected stack

**Example Agent Updates:**
```yaml
database-developer:
  skip_if: preset.database == null
  adapt_orm: preset.database.orm

backend-developer:
  skip_if: preset.backend == null
  adapt_framework: preset.backend.framework

devops-engineer:
  skip_if: preset.deployables < 3
```

**Deliverable:** Intelligent agent behavior based on architecture selection

---

## ⌨️ Phase 3: Command Interface
**Duration:** Week 3
**Priority:** High

### 3.1 Enhanced ts-turbo Command
**File:** `.claude/commands/ts-turbo.md`

**New Argument Support:**
```bash
# Preset overrides
/ts-turbo my-app "idea" --preset=microservice
/ts-turbo my-app "idea" --category=cli

# Option overrides
/ts-turbo my-app "idea" --db=mysql
/ts-turbo my-app "idea" --auth=clerk
/ts-turbo my-app "idea" --runtime=python
/ts-turbo my-app "idea" --framework=typer

# Combinations
/ts-turbo my-app "idea" --preset=fullstack-js --db=mysql --auth=clerk
```

**Argument Parsing Logic:**
- Extract override flags before agent execution
- Pass to Founder-Advisor and Enterprise Architect
- Apply in selection priority order

### 3.2 Enhanced ts-new-project Command
**File:** `.claude/commands/ts-new-project.md`

**New Arguments:**
```bash
/ts-new-project my-app --preset=embedded
```

### 3.3 Enhanced ts-approve Command
**File:** `.claude/commands/ts-approve.md`

**Architecture Gate Enhancements:**
```bash
# Accept recommendation
/ts-approve architecture-lock

# Override specific options
/ts-approve architecture-lock --db=sqlite
/ts-approve architecture-lock --preset=embedded
```

### 3.4 Command Reference Updates
**File:** `docs/COMMAND-GUIDE.md`

Update all command documentation with new architecture selection flags and examples.

**Deliverable:** User-friendly command interface for architecture selection

---

## 📋 Phase 4: Template Integration
**Duration:** Week 4
**Priority:** Medium

### 4.1 Enhanced Project Template
**File:** `.claude/pipeline/projects/TEMPLATE.md`

**New Architecture Section:**
```markdown
## Architecture

| Field | Value |
|-------|-------|
| Category | web/cli |
| Preset | fullstack-js |
| Pattern | monolith |
| Tier | two |
| Deployables | 2 |

### Stack

| Layer | Technology | Selection Reason |
|-------|------------|------------------|
| Frontend | Next.js 14 | Preset default |
| Backend | API Routes | Preset default |
| Database | PostgreSQL | Default, no signals |
| Auth | NextAuth | Default, no managed auth signal |

### Selection Log

| Layer | Method | Signal/Override | Selected |
|-------|--------|-----------------|----------|
| Preset | KISS | persistent_data=Yes, multi_user=Yes | fullstack-js |
| Database | Signal | analytics=Yes → duckdb override | postgresql |
| Auth | Default | No signals detected | nextauth |

### Agents

| Status | Agents |
|--------|--------|
| Active | founder-advisor, enterprise-architect, database-developer, frontend-developer, integration-engineer, qa-engineer |
| Skipped | backend-developer, devops-engineer |
```

### 4.2 Output Structure Documentation
**File:** `docs/OUTPUT-STRUCTURES.md`

Document expected output directory structures for each preset:

```markdown
# Output Structures by Preset

## static
```
output/project/
├── src/app/          # Next.js static site
├── public/           # Static assets
└── package.json
```

## embedded
```
output/project/
├── src/app/          # Next.js with API routes
├── db/               # SQLite database
├── drizzle.config.ts # ORM config
└── package.json
```

## fullstack-js
```
output/project/
├── src/app/          # Next.js frontend + API
├── prisma/           # Database schema
├── components/       # React components
└── lib/              # Utilities
```
```

### 4.3 Agent Behavior Documentation
**File:** `docs/AGENT-BEHAVIOR-by-PRESET.md`

Document how each agent behaves for different presets.

**Deliverable:** Complete template and documentation system

---

## 🧪 Testing Strategy

### Test Categories

**1. Preset Selection Tests**
```bash
# Test cases from design doc
/ts-turbo landing "Landing page" → static
/ts-turbo notes "Note app with local storage" → embedded
/ts-turbo todo "Todo app with auth" → fullstack-js
/ts-turbo chat "Chat application" → baas
/ts-turbo ai "AI resume analyzer" → microservice
/ts-turbo script "File renamer script" → cli-script
/ts-turbo cli "CLI for GitHub API" → cli-tool
/ts-turbo tui "Terminal file manager" → cli-tui
```

**2. Option Selection Tests**
```bash
# Signal-based option selection
/ts-turbo dash "Analytics dashboard for CSV" → embedded + duckdb
/ts-turbo app "App with managed auth" → fullstack-js + clerk
/ts-turbo edge "Global edge app" → embedded + turso
```

**3. Override Tests**
```bash
# Command flag overrides
/ts-turbo todo "Todo app" --preset=microservice → microservice
/ts-turbo blog "Blog" --db=mysql → fullstack-js + mysql
/ts-turbo cli "CLI tool" --runtime=python → cli-tool + python
```

### Validation Scripts
Create automated tests for:
- Preset selection logic
- Option selection algorithm
- Override precedence
- Agent skip/use behavior

---

## 📊 Success Metrics

### Technical Metrics
- **Preset accuracy**: 90%+ correct KISS selection on test cases
- **Performance**: <2s additional overhead for selection
- **Coverage**: All 8 presets fully functional

### User Experience Metrics
- **Simplification**: 50% reduction in generated files for simple apps
- **Appropriateness**: Right-sized architecture for use case
- **Speed**: Faster turbo mode execution for simple presets

### Business Metrics
- **Adoption**: Users utilize override flags
- **Feedback**: Positive response to intelligent selection
- **Versatility**: CLI preset usage demonstrates expanded capability

---

## 🚨 Risks & Mitigation

| Risk | Impact | Probability | Mitigation |
|------|--------|-------------|------------|
| **Agent behavior changes break existing projects** | High | Medium | Extensive testing, feature flag |
| **KISS selection logic is inaccurate** | Medium | Medium | Comprehensive test cases, user feedback |
| **Performance degradation** | Medium | Low | Benchmark selection algorithms |
| **Preset definitions are incomplete** | Medium | Low | Thorough design review, validation |

### Mitigation Strategies
1. **Feature Flag**: Implement `architecture.auto_select: false` fallback
2. **Backward Compatibility**: Preserve existing behavior as default
3. **Gradual Rollout**: Test with power users first
4. **Monitoring**: Track selection accuracy and user feedback

---

## 📈 Implementation Timeline

### Week 1: Configuration Foundation
- [ ] Create complete presets.yaml (2,800 lines)
- [ ] Update preferences.yaml
- [ ] Create validation scripts
- [ ] **Milestone**: Configuration layer complete

### Week 2: Agent Intelligence
- [ ] Update founder-advisor signal extraction
- [ ] Implement enterprise-architect KISS selection
- [ ] Update all development agents with skip/adapt logic
- [ ] **Milestone**: Intelligent agent behavior

### Week 3: Command Interface
- [ ] Enhance ts-turbo with architecture flags
- [ ] Update ts-new-project and ts-approve
- [ ] Update command documentation
- [ ] **Milestone**: User-friendly overrides

### Week 4: Template & Testing
- [ ] Update project templates
- [ ] Create output structure docs
- [ ] Implement comprehensive test suite
- [ ] **Milestone**: Production-ready system

### Week 5: Validation & Launch
- [ ] End-to-end testing
- [ ] Performance optimization
- [ ] User acceptance testing
- [ ] **Launch**: Architecture Selection System v1.0

---

## 💡 Future Enhancements

### Phase 2 Improvements (Later)
- **Hybrid Presets**: fullstack-js + ML endpoint
- **Advanced CLI**: CLI tools with embedded databases
- **Go/Rust Support**: Full implementation for compiled languages
- **Migration Tools**: Convert between presets

### Advanced Features
- **Learning System**: Improve selection based on user corrections
- **Custom Presets**: User-defined preset configurations
- **Cost Optimization**: Select preset based on deployment cost estimates
- **Performance Profiles**: Choose stack based on performance requirements

---

## ✅ Acceptance Criteria

### Must Have (MVP)
- [ ] All 8 presets fully defined and functional
- [ ] KISS selection algorithm working for 90%+ of test cases
- [ ] Command flag overrides working
- [ ] Agent skip/use logic implemented
- [ ] No breaking changes to existing functionality

### Should Have
- [ ] Comprehensive test suite
- [ ] Performance meets targets (<2s overhead)
- [ ] Complete documentation
- [ ] User feedback collection system

### Nice to Have
- [ ] Advanced override combinations
- [ ] Preset recommendation explanations
- [ ] Architecture visualization
- [ ] Cost/performance impact estimates

---

This implementation plan transforms The System from a one-size-fits-all solution to an intelligent, adaptive development framework that matches architecture complexity to actual requirements.