# Phase 2: Agent Updates for Architecture Selection

## Overview
This document demonstrates the key agent updates needed for Phase 2 of the Architecture Selection System implementation.

---

## 1. Founder-Advisor Updates

### New Signal Extraction Section

Add after existing analysis in `.claude/agents/founder-advisor.md`:

```markdown
---

## Signal Extraction for Architecture Selection

After analyzing the idea, extract signals for preset and option selection.

### Preset Signal Analysis

| Signal | Question | Yes Indicators | Example |
|--------|----------|----------------|---------|
| `cli` | Is this a CLI application? | "CLI", "command line", "terminal", "script", "tool" | "Build a CLI tool" |
| `persistent_data` | Needs to save data? | User accounts, saved content, CRUD, database | "Todo app with user accounts" |
| `python_ml_compute` | Needs Python/ML? | AI, ML, data processing, analytics | "AI resume analyzer" |
| `realtime_core` | Realtime is core feature? | Chat, collaboration, live updates, websocket | "Real-time chat app" |
| `multi_user_ha` | Multi-user/high availability? | Many users, business-critical, concurrent | "Team collaboration tool" |
| `interactive_tui` | Interactive terminal UI? | "TUI", "interactive", "like htop", ncurses | "Terminal file manager" |
| `multiple_commands` | Multiple CLI commands? | Subcommands, "install globally", command suite | "CLI with multiple subcommands" |

### Option Signal Analysis

| Signal | Keywords/Phrases | Triggered Option | Example |
|--------|------------------|------------------|---------|
| `analytics` | analytics, dashboard, reports, metrics, OLAP | duckdb | "Analytics dashboard" |
| `csv_data` | CSV, parquet, data files, import data | duckdb | "Process CSV files" |
| `edge` | edge, global, distributed, multi-region | turso | "Global edge deployment" |
| `cloudflare` | cloudflare, workers, D1, edge runtime | d1 | "Deploy on Cloudflare" |
| `managed_auth` | managed auth, drop-in, hosted auth | clerk | "Don't want to build auth" |
| `firebase` | firebase, google, firestore, realtime db | firebase | "Use Firebase backend" |
| `python` | python, py, ML, data science | python runtime | "Python CLI tool" |
| `go` | go, golang, single binary, performance | go runtime | "Single binary tool" |
| `rust` | rust, performance, systems programming | rust runtime | "High-performance tool" |

### Signal Extraction Process

```markdown
## Technical Signal Analysis

### Preset Signals Detected
| Signal | Value | Evidence from Idea |
|--------|-------|-------------------|
| cli | Yes/No | [quote from user idea] |
| persistent_data | Yes/No | [evidence] |
| python_ml_compute | Yes/No | [evidence] |
| realtime_core | Yes/No | [evidence] |
| multi_user_ha | Yes/No | [evidence] |
| interactive_tui | Yes/No | [evidence] |
| multiple_commands | Yes/No | [evidence] |

### Option Signals Detected
| Signal | Detected | Evidence | Triggered Selection |
|--------|----------|----------|-------------------|
| analytics | Yes/No | [quote] | duckdb/default |
| csv_data | Yes/No | [quote] | duckdb/default |
| edge | Yes/No | [quote] | turso/default |
| managed_auth | Yes/No | [quote] | clerk/default |
| [... other signals] | | | |

### Signal Summary for Enterprise Architect
**Preset Recommendation:** Based on signals → [preset]
**Option Overrides:** [list of non-default options triggered]
```
```

---

## 2. Enterprise Architect Updates

### New Phase 0: Stack Selection

Add as the first phase in `.claude/agents/enterprise-architect.md`:

```markdown
## Phase 0: Architecture Stack Selection

### Overview
The Enterprise Architect is responsible for ALL technology stack decisions. This phase uses the KISS principle (Keep It Simple, Stupid) to select the minimal viable architecture preset, then optimizes options within that preset.

### Input Sources
1. **Signals from Founder-Advisor** - Technical requirements extracted from user idea
2. **Command-line overrides** - Explicit user flags (--preset, --db, --auth, etc.)
3. **Configuration overrides** - Settings in preferences.yaml
4. **Default fallbacks** - Preset defaults when no signals detected

### Step 1: Check Override Sources

```
Priority Order:
1. Command flags (--preset, --db, --auth) → USE immediately
2. Config overrides (preferences.yaml) → USE if no flags
3. Continue to signal-based selection
```

**Implementation:**
```
IF command has --preset flag:
  selected_preset = flag_value
  SKIP to Step 3 (Option Selection)

IF preferences.yaml has architecture.preset:
  selected_preset = config_value
  SKIP to Step 3 (Option Selection)
```

### Step 2: KISS Preset Selection

Apply decision tree based on extracted signals:

```
PRESET SELECTION DECISION TREE:

1. Category Detection:
   IF cli = Yes:
     → GO TO CLI Decision Tree
   ELSE:
     → GO TO Web Decision Tree

2. CLI Decision Tree:
   IF interactive_tui = Yes:
     → SELECT cli-tui
   ELIF multiple_commands = Yes:
     → SELECT cli-tool
   ELSE:
     → SELECT cli-script

3. Web Decision Tree:
   IF persistent_data = No:
     → SELECT static
   ELIF python_ml_compute = Yes:
     → SELECT microservice
   ELIF realtime_core = Yes:
     → SELECT baas
   ELIF multi_user_ha = Yes:
     → SELECT fullstack-js
   ELSE:
     → SELECT embedded
```

### Step 3: Option Selection

For each option category in the selected preset:

```
FOR each option_category in selected_preset.options:

  1. CHECK command flag override:
     IF --{option_category}=value exists:
       USE flag_value
       CONTINUE to next category

  2. CHECK config override:
     IF preferences.architecture.stack.{option_category} exists:
       USE config_value
       CONTINUE to next category

  3. SIGNAL MATCHING:
     detected_signals = []
     FOR each signal in founder_advisor_signals:
       FOR each option in option_category:
         IF signal in option.signals:
           detected_signals.append(option)

     IF len(detected_signals) == 1:
       USE detected_signals[0]
     ELIF len(detected_signals) > 1:
       USE detected_signals[0]  # First match wins
     ELSE:
       USE option_category.default

  4. VALIDATE compatibility:
     ENSURE selected option works with:
       - Deploy targets
       - Other selected options
       - Preset constraints

  5. LOG selection rationale:
     RECORD why this option was chosen
```

### Step 4: Output Complete Stack Recommendation

```markdown
## 🏗️ Architecture Stack Recommendation

**Selected Preset:** {preset_name} ({preset.description})

### Stack Configuration
| Layer | Technology | Selection Method | Rationale |
|-------|------------|------------------|-----------|
| Frontend | {tech} | {method} | {reason} |
| Backend | {tech} | {method} | {reason} |
| Database | {tech} | {method} | {reason} |
| Auth | {tech} | {method} | {reason} |

### Selection Details

**Preset Selection:** {preset_name}
- **Decision Path:** {decision_logic}
- **Triggering Signals:** {signals_that_led_here}

**Option Selections:**
- **Database:** {selected_db} (not default: {default_db})
  - **Reason:** Signal '{signal}' matched: "{evidence_from_idea}"
- **Auth:** {selected_auth} (default)
  - **Reason:** No overriding signals detected

### Deployment Configuration
| Component | Target Platform |
|-----------|-----------------|
| Frontend | {deploy_target} |
| Backend | {deploy_target} |
| Database | {deploy_target} |

### Architecture Characteristics
- **Pattern:** {preset.pattern}
- **Tier:** {preset.tier}
- **Deployables:** {preset.deployables}
- **Complexity:** {simple/moderate/complex}

### Agent Coordination
**Active Agents:** {preset.agents.used}
**Skipped Agents:** {preset.agents.skipped}

### Alternatives Considered
| Layer | Selected | Alternatives | Why Not Selected |
|-------|----------|--------------|------------------|
| Preset | {selected} | {alternatives} | {reasons} |
| Database | {selected} | {alternatives} | {reasons} |
```

### Step 5: HITL Gate or Auto-Proceed

```
MODE DETECTION:
IF turbo_mode = true:
  LOG recommendation to PROJECT.md
  PROCEED to architecture design (existing Phase 1)

IF hitl_mode = true:
  DISPLAY recommendation to user
  WAIT FOR approval command:
    - /ts-approve architecture-lock → PROCEED
    - /ts-approve architecture-lock --db=override → APPLY override, PROCEED
    - "Change to X" → REVISE recommendation
    - "Use Y instead" → APPLY change, PROCEED
```

### Integration with Existing Phases

After this Phase 0 completes:
- **Update PROJECT.md** with complete stack configuration
- **Set architecture.locked = true** in project state
- **Continue to existing Phase 1** (System Context Diagram) using selected stack
- **All subsequent phases** read stack from PROJECT.md and adapt accordingly
```

---

## 3. Development Agent Adaptations

### Universal Agent Update Pattern

All development agents need this adaptation pattern:

```markdown
## Phase 0: Stack Adaptation

### Read Architecture Configuration
```
1. READ PROJECT.md architecture section
2. EXTRACT selected preset and stack configuration
3. DETERMINE if this agent is active for this preset
4. ADAPT behavior based on stack selections
```

### Agent Activation Logic
```
IF this_agent NOT in preset.agents.used:
  OUTPUT: "Skipping {agent_name} - not required for {preset_name} preset"
  EXIT gracefully

IF this_agent in preset.agents.used:
  PROCEED with adapted behavior
```

### Stack-Specific Adaptations
```
ADAPT templates and code generation based on:
- preset.stack.database.orm → Use correct ORM
- preset.stack.frontend.framework → Use correct framework
- preset.stack.auth.provider → Use correct auth system
- preset.structure → Use correct directory structure
```
```

### Example: Database Developer Adaptation

```markdown
## Database Developer - Stack Adaptation

### Phase 0: Configuration Check
```
READ architecture.stack.database from PROJECT.md

IF database == null:
  OUTPUT: "No database required for this preset"
  SKIP all database work
  EXIT

IF database.orm == "prisma":
  USE Prisma templates and commands
  GENERATE prisma/schema.prisma

IF database.orm == "drizzle":
  USE Drizzle templates and commands
  GENERATE drizzle.config.ts and db/schema.ts

IF database.orm == "sqlalchemy":
  USE SQLAlchemy templates
  GENERATE backend/models/ and alembic migrations
```
```

### Example: Frontend Developer Adaptation

```markdown
## Frontend Developer - Stack Adaptation

### Phase 0: Configuration Check
```
READ architecture from PROJECT.md

IF preset.tier == "single":
  GENERATE monolithic structure with API routes
  USE preset.structure.api location for backend code

IF preset.tier == "two" OR "three":
  GENERATE frontend-only structure
  CONFIGURE API calls to external backend

ADAPT state management:
  IF preset.stack.state == "zustand": USE zustand templates
  IF preset.stack.state == "redux": USE redux templates
```
```

---

## 4. Integration Points

### PROJECT.md Updates

The project template needs this new section:

```markdown
## Architecture

| Field | Value |
|-------|-------|
| Status | LOCKED |
| Category | web |
| Preset | fullstack-js |
| Pattern | monolith |
| Tier | two |
| Deployables | 2 |

### Stack Configuration

| Layer | Technology | Selection Method | Rationale |
|-------|------------|------------------|-----------|
| Frontend | Next.js 14 | Preset default | Standard React framework |
| Backend | API Routes | Preset default | Monolithic architecture |
| Database | PostgreSQL | Preset default | No signals for alternatives |
| Auth | NextAuth | Preset default | No managed auth signals |

### Selection Log

| Decision | Default | Selected | Method | Signal/Override |
|----------|---------|----------|--------|-----------------|
| Preset | fullstack-js | fullstack-js | KISS | persistent_data=Yes, multi_user=Yes |
| Database | postgresql | postgresql | Default | No analytics/csv signals |
| Auth | nextauth | nextauth | Default | No managed auth signals |

### Agent Configuration

**Active Agents:**
- founder-advisor ✓
- enterprise-architect ✓
- database-developer ✓
- frontend-developer ✓
- integration-engineer ✓
- qa-engineer ✓
- technical-writer ✓

**Skipped Agents:**
- backend-developer (API routes used instead)
- devops-engineer (two-tier deployment)
```

---

## Implementation Priority

1. **Week 2.1:** Update Founder-Advisor signal extraction
2. **Week 2.2:** Implement Enterprise Architect KISS selection
3. **Week 2.3:** Update 3 core dev agents (database, frontend, integration)
4. **Week 2.4:** Update remaining agents and test integration

This Phase 2 implementation transforms The System from hardcoded architecture to intelligent, signal-based selection that scales from simple static sites to complex microservice architectures.