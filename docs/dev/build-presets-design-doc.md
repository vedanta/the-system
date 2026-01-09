# Build Presets System

## Design Document v1.0

**Problem:** #2 - Workflow Intensity Selection  
**Status:** Final Draft  
**Author:** The System  
**Date:** December 2024

---

## Table of Contents

1. [Problem Statement](#1-problem-statement)
2. [Solution Overview](#2-solution-overview)
3. [Build Presets](#3-build-presets)
4. [Agent Inclusion Matrix](#4-agent-inclusion-matrix)
5. [Default Selection](#5-default-selection)
6. [Override Mechanisms](#6-override-mechanisms)
7. [Workflow Details](#7-workflow-details)
8. [Integration with Architecture Presets](#8-integration-with-architecture-presets)
9. [Implementation Plan](#9-implementation-plan)
10. [File Specifications](#10-file-specifications)
11. [Testing](#11-testing)
12. [Examples](#12-examples)
13. [Appendix](#13-appendix)

---

## 1. Problem Statement

### 1.1 Current State

The System runs ALL agents for EVERY project in Turbo mode. A simple CLI script goes through the same 17-agent pipeline as an enterprise microservice application.

### 1.2 Problems

| Problem | Impact |
|---------|--------|
| Overkill for simple projects | CLI script gets Business Analyst, Security Engineer |
| Wasted time | Prototype waits for full documentation |
| Unnecessary artifacts | POC gets Terraform, CI/CD pipelines |
| Context bloat | PROJECT.md filled with irrelevant sections |
| User frustration | "I just want working code" |

### 1.3 Current Flow (Turbo)

```
Every Project (regardless of complexity):

Stage 1 (19 agents) → Stage 2 (19 agents) → Stage 3 (19 agents) → Stage 4 (19 agents)
     ↓                    ↓                    ↓                    ↓
 Architecture          Product             Development            Release
 
                    19 agentS ALWAYS RUN
```

### 1.4 Desired State

The System should:

1. **Offer workflow intensity options** (prototype, mvp, production)
2. **Skip irrelevant agents** based on selected intensity
3. **Produce appropriate artifacts** for the use case
4. **Default intelligently** based on execution mode

---

## 2. Solution Overview

### 2.1 Core Concept

Introduce **Build Presets** — predefined workflow configurations that control which agents run and how much ceremony is applied.

### 2.2 Two-Dimensional Selection

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                         SELECTION DIMENSIONS                                │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│   PRESET (Problem #1)                 BUILD (Problem #2)                    │
│   ───────────────────                 ──────────────────                    │
│   What to build                       How much ceremony                     │
│   (Architecture)                      (Workflow Intensity)                  │
│                                                                             │
│   • static                            • prototype                           │
│   • embedded                          • mvp                                 │
│   • fullstack-js        ×             • production                          │
│   • baas                                                                    │
│   • microservice                                                            │
│   • cli-*                                                                   │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 2.3 Key Design Decision

**Build preset controls workflow intensity. Architecture preset controls technology and agent eligibility. Both work together.**

```
Final Agents = (Agents for Build Preset) ∩ (Agents for Architecture Preset)
```

---

## 3. Build Presets

### 3.1 Build Preset Summary

| Build | Agents | Time | Use Case |
|-------|--------|------|----------|
| `prototype` | 2-5 | ~2-5 min | Experiments, spikes, learning |
| `mvp` | 7-11 | ~10-20 min | Side projects, MVPs, tools |
| `production` | 12-17 | ~30-60 min | Client work, enterprise, launch |

### 3.2 Build: `prototype`

**Goal:** Fastest path to working code

```yaml
prototype:
  description: "Fastest path to working code"
  goal: "Make it work"
  
  stages:
    stage1:
      mode: compressed        # Founder-Advisor does minimal arch inline
      agents:
        - founder-advisor     # Compressed mode
      skip:
        - enterprise-architect
        
    stage2:
      mode: skip              # Skip entirely
      agents: []
      skip:
        - product-lead
        - project-planner
        - business-analyst
        
    stage3:
      mode: minimal           # Only developers, no QA/integration
      agents:
        - database-developer  # If needed by arch preset
        - backend-developer   # If needed by arch preset
        - frontend-developer  # If needed by arch preset
      skip:
        - principal-developer
        - qa-engineer
        - integration-engineer
        
    stage4:
      mode: skip              # Skip entirely
      agents: []
      skip:
        - technical-writer
        - security-engineer
        - release-engineer
        - devops-engineer
  
  outputs:
    - working_code: true
    - tests: false
    - documentation: readme_only
    - infrastructure: false
    - security_audit: false
    
  use_when:
    - Exploring an idea
    - Hackathon
    - POC / spike
    - Learning project
    - "Just make it work"
    
  signals:
    - prototype
    - POC
    - spike
    - experiment
    - try
    - test
    - hackathon
    - quick
    - fast
```

**Prototype Flow:**

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  PROTOTYPE WORKFLOW                                                         │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│   Founder-Advisor          Developer(s)           Done                      │
│   (Compressed)             (Based on preset)                                │
│        │                        │                   │                       │
│        ▼                        ▼                   ▼                       │
│   ┌─────────┐              ┌─────────┐        ┌─────────┐                   │
│   │ Analyze │              │  Code   │        │ README  │                   │
│   │ + Arch  │─────────────►│  Only   │───────►│  Only   │                   │
│   │ Inline  │              │         │        │         │                   │
│   └─────────┘              └─────────┘        └─────────┘                   │
│                                                                             │
│   ~1 min                   ~2-4 min            ~30 sec                      │
│                                                                             │
│   TOTAL: ~3-5 minutes                                                       │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

### 3.3 Build: `mvp`

**Goal:** Ship something usable

```yaml
mvp:
  description: "Balanced workflow for shippable MVP"
  goal: "Make it good enough to ship"
  
  stages:
    stage1:
      mode: full
      agents:
        - founder-advisor
        - enterprise-architect
      skip: []
      
    stage2:
      mode: lean              # Only Product Lead
      agents:
        - product-lead        # MVP definition + user stories
      skip:
        - project-planner     # No formal sprints
        - business-analyst    # No revenue model
        
    stage3:
      mode: full              # All development agents
      agents:
        - principal-developer
        - qa-engineer
        - database-developer  # If needed by arch preset
        - backend-developer   # If needed by arch preset
        - frontend-developer  # If needed by arch preset
        - integration-engineer
      skip: []
      
    stage4:
      mode: lean              # Only documentation
      agents:
        - technical-writer    # Lite mode
      skip:
        - security-engineer   # Basic security only
        - release-engineer    # No formal versioning
        - devops-engineer     # No Terraform
  
  outputs:
    - working_code: true
    - tests: true
    - documentation: basic
    - infrastructure: false
    - security_audit: false
    
  use_when:
    - Building a real MVP
    - Side project
    - Internal tool
    - First version of a product
    
  signals:
    - MVP
    - first version
    - side project
    - tool
    - internal
    - v1
```

**MVP Flow:**

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  MVP WORKFLOW                                                               │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│   Stage 1              Stage 2           Stage 3           Stage 4          │
│   (Full)               (Lean)            (Full)            (Lean)           │
│      │                    │                 │                 │             │
│      ▼                    ▼                 ▼                 ▼             │
│   ┌──────────┐       ┌──────────┐     ┌──────────┐     ┌──────────┐        │
│   │ Founder  │       │ Product  │     │ Principal│     │ Tech     │        │
│   │ Advisor  │       │ Lead     │     │ QA       │     │ Writer   │        │
│   │          │       │          │     │ DB Dev   │     │ (lite)   │        │
│   │ Enter-   │       │ [Skip    │     │ BE Dev   │     │          │        │
│   │ prise    │       │ Planner] │     │ FE Dev   │     │ [Skip    │        │
│   │ Arch     │       │ [Skip BA]│     │ Integr.  │     │ others]  │        │
│   └──────────┘       └──────────┘     └──────────┘     └──────────┘        │
│                                                                             │
│   ~3 min               ~2 min           ~10 min           ~2 min            │
│                                                                             │
│   TOTAL: ~15-20 minutes                                                     │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

### 3.4 Build: `production`

**Goal:** Full ceremony, production-ready

```yaml
production:
  description: "Full workflow for production-ready delivery"
  goal: "Make it production-ready"
  
  stages:
    stage1:
      mode: full
      agents:
        - founder-advisor
        - enterprise-architect
      skip: []
      
    stage2:
      mode: full              # All product agents
      agents:
        - product-lead
        - project-planner
        - business-analyst
      skip: []
      
    stage3:
      mode: full              # All development agents
      agents:
        - principal-developer
        - qa-engineer
        - database-developer  # If needed by arch preset
        - backend-developer   # If needed by arch preset
        - frontend-developer  # If needed by arch preset
        - integration-engineer
      skip: []
      
    stage4:
      mode: full              # All release agents
      agents:
        - technical-writer
        - security-engineer
        - release-engineer
        - devops-engineer
      skip: []
  
  outputs:
    - working_code: true
    - tests: true
    - documentation: full
    - infrastructure: true
    - security_audit: true
    
  use_when:
    - Production deployment
    - Enterprise project
    - Client deliverable
    - Regulated industry
    - Launch
    
  signals:
    - production
    - enterprise
    - client
    - launch
    - compliance
    - security
    - regulated
```

**Production Flow:**

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  PRODUCTION WORKFLOW                                                        │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│   Stage 1              Stage 2           Stage 3           Stage 4          │
│   (Full)               (Full)            (Full)            (Full)           │
│      │                    │                 │                 │             │
│      ▼                    ▼                 ▼                 ▼             │
│   ┌──────────┐       ┌──────────┐     ┌──────────┐     ┌──────────┐        │
│   │ Founder  │       │ Product  │     │ Principal│     │ Tech     │        │
│   │ Advisor  │       │ Lead     │     │ QA       │     │ Writer   │        │
│   │          │       │          │     │ DB Dev   │     │          │        │
│   │ Enter-   │       │ Project  │     │ BE Dev   │     │ Security │        │
│   │ prise    │       │ Planner  │     │ FE Dev   │     │          │        │
│   │ Arch     │       │          │     │ Integr.  │     │ Release  │        │
│   │          │       │ Business │     │          │     │          │        │
│   │          │       │ Analyst  │     │          │     │ DevOps   │        │
│   └──────────┘       └──────────┘     └──────────┘     └──────────┘        │
│                                                                             │
│   ~5 min               ~10 min          ~20 min           ~10 min           │
│                                                                             │
│   TOTAL: ~45-60 minutes                                                     │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 4. Agent Inclusion Matrix

### 4.1 By Build Preset

| Agent | prototype | mvp | production |
|-------|:---------:|:---:|:----------:|
| **Stage 1: Architecture** |
| Founder-Advisor | ✅ compressed | ✅ | ✅ |
| Enterprise Architect | ❌ | ✅ | ✅ |
| **Stage 2: Product** |
| Product Lead | ❌ | ✅ | ✅ |
| Project Planner | ❌ | ❌ | ✅ |
| Business Analyst | ❌ | ❌ | ✅ |
| **Stage 3: Development** |
| Principal Developer | ❌ | ✅ | ✅ |
| QA Engineer | ❌ | ✅ | ✅ |
| Database Developer | ⚡ | ⚡ | ⚡ |
| Backend Developer | ⚡ | ⚡ | ⚡ |
| Frontend Developer | ⚡ | ⚡ | ⚡ |
| Integration Engineer | ❌ | ✅ | ✅ |
| **Stage 4: Release** |
| Technical Writer | ❌ | ✅ lite | ✅ |
| Security Engineer | ❌ | ❌ | ✅ |
| Release Engineer | ❌ | ❌ | ✅ |
| DevOps Engineer | ❌ | ❌ | ✅ |

✅ = Always runs  
❌ = Skipped  
⚡ = Depends on architecture preset

### 4.2 Combined with Architecture Preset

Final agent list = Build agents ∩ Architecture agents

**Example: embedded + mvp**

```
Build (mvp) agents:
  ✅ founder-advisor, enterprise-architect
  ✅ product-lead
  ✅ principal-developer, qa-engineer, database-developer, 
     backend-developer, frontend-developer, integration-engineer
  ✅ technical-writer

Architecture (embedded) agents:
  ✅ founder-advisor, enterprise-architect
  ✅ database-developer, frontend-developer, integration-engineer
  ❌ backend-developer, devops-engineer, qa-engineer

Final = Intersection:
  ✅ founder-advisor, enterprise-architect
  ✅ product-lead
  ✅ principal-developer, qa-engineer, database-developer, 
     frontend-developer, integration-engineer
  ✅ technical-writer (lite)
  
  = 19 agents
```

### 4.19 agent Count Matrix

| Preset × Build | prototype | mvp | production |
|----------------|:---------:|:---:|:----------:|
| static | 2 | 4 | 6 |
| cli-script | 2 | 3 | 5 |
| embedded | 3 | 7 | 11 |
| cli-tool | 3 | 5 | 8 |
| fullstack-js | 4 | 9 | 14 |
| baas | 4 | 9 | 14 |
| cli-tui | 4 | 6 | 9 |
| microservice | 5 | 11 | 17 |

---

## 5. Default Selection

### 5.1 Mode-Based Defaults

| Execution Mode | Default Build | Reasoning |
|----------------|---------------|-----------|
| **Turbo** | `mvp` | Fast but not reckless |
| **HITL** | `production` | Human oversight = wants quality |

```yaml
build:
  auto_select: true
  default:
    turbo: mvp
    hitl: production
```

### 5.2 Signal-Based Auto-Selection

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    BUILD AUTO-SELECTION                                     │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  Signal                              Build                                  │
│  ──────                              ─────                                  │
│  "prototype", "POC", "spike"    →    prototype                              │
│  "experiment", "try", "test"    →    prototype                              │
│  "hackathon", "quick", "fast"   →    prototype                              │
│                                                                             │
│  "MVP", "first version"         →    mvp                                    │
│  "side project", "tool"         →    mvp                                    │
│  "internal", "v1"               →    mvp                                    │
│                                                                             │
│  "production", "enterprise"     →    production                             │
│  "client", "launch"             →    production                             │
│  "compliance", "security"       →    production                             │
│  "regulated"                    →    production                             │
│                                                                             │
│  (no signal + turbo mode)       →    mvp                                    │
│  (no signal + hitl mode)        →    production                             │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 5.3 Selection Priority

```
1. Explicit override           --build=prototype         (highest)
         │
         ▼
2. Config lock                 preferences.yaml: build: prototype
         │
         ▼
3. Signal match                "quick prototype" → prototype
         │
         ▼
4. Mode default                turbo → mvp, hitl → production    (lowest)
```

---

## 6. Override Mechanisms

### 6.49 command-Line Override

```bash
# Explicit build
/ts-turbo my-app "idea" --build=prototype
/ts-turbo my-app "idea" --build=mvp
/ts-turbo my-app "idea" --build=production

# Short flags
/ts-turbo my-app "idea" -B prototype   # -B for build
/ts-turbo my-app "idea" -B p           # p = prototype
/ts-turbo my-app "idea" -B m           # m = mvp
/ts-turbo my-app "idea" -B P           # P = production

# Combined with architecture preset
/ts-turbo my-app "idea" --preset=embedded --build=prototype
/ts-turbo my-app "idea" -p embedded -B prototype
```

### 6.2 Config Override

```yaml
# preferences.yaml

build:
  auto_select: true
  default:
    turbo: mvp
    hitl: production
    
  # Lock to specific build (uncomment to force)
  # build: prototype
```

### 6.3 Per-Project Override

In PROJECT.md:

```markdown
## Configuration

| Setting | Value |
|---------|-------|
| Build | prototype |
```

---

## 7. Workflow Details

### 7.1 Prototype: Compressed Founder-Advisor

When `build=prototype`, Founder-Advisor operates in compressed mode:

```markdown
## Founder-Advisor (Prototype Mode)

### Behavior Changes

1. **Skip Strategic Assessment** - No market analysis, no competitors
2. **Inline Architecture** - Embed minimal arch decisions (no separate EA)
3. **Direct Handoff** - Pass immediately to developers
4. **Minimal Output** - Just enough context to build

### Output Format

## Prototype: [PROJECT_NAME]

**Idea:** [one line summary]
**Preset:** [auto-selected preset]
**Stack:** [key technologies from preset]

### Core Feature
[Single most important feature to build]

### Build Instructions
[Direct, actionable instructions for developers]

### Files to Create
1. [file]: [purpose]
2. [file]: [purpose]

---

Handoff to: [database-developer / backend-developer / frontend-developer]
```

### 7.2 MVP: Lite Technical Writer

When `build=mvp`, Technical Writer operates in lite mode:

```markdown
## Technical Writer (Lite Mode)

### Behavior Changes

1. **README only** - No full documentation suite
2. **Essential sections** - Setup, usage, config only
3. **No API docs** - Skip OpenAPI generation
4. **No architecture docs** - Skip diagrams

### Output

## README.md

### [Project Name]

[One paragraph description]

### Quick Start

\`\`\`bash
# Install
[install command]

# Run
[run command]
\`\`\`

### Configuration

| Variable | Description | Default |
|----------|-------------|---------|
| ... | ... | ... |

### Usage

[Basic usage examples]

### License

[License]
```

### 7.3 Stage Skipping Logic

```
FOR each stage:
  
  IF build.stages[stage].mode == "skip":
    LOG "Skipping Stage N: [reason]"
    CONTINUE to next stage
    
  IF build.stages[stage].mode == "compressed":
    RUN compressed version of first agent
    CONTINUE to next stage
    
  IF build.stages[stage].mode == "lean":
    RUN only agents in build.stages[stage].agents
    SKIP agents in build.stages[stage].skip
    
  IF build.stages[stage].mode == "full":
    RUN all agents (filtered by architecture preset)
```

---

## 8. Integration with Architecture Presets

### 8.1 Selection Flow

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                         COMPLETE SELECTION FLOW                             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│   USER INPUT                                                                │
│   /ts-turbo my-app "quick prototype for a todo app"                         │
│                                                                             │
│        │                                                                    │
│        ▼                                                                    │
│   ┌─────────────────────────────────────────────────────────────────────┐   │
│   │ SIGNAL EXTRACTION                                                   │   │
│   │                                                                     │   │
│   │ Architecture signals: persistent_data=Yes, multi_user=No            │   │
│   │ Build signals: "quick prototype" → prototype                        │   │
│   └─────────────────────────────────────────────────────────────────────┘   │
│        │                                                                    │
│        ▼                                                                    │
│   ┌─────────────────────────────────────────────────────────────────────┐   │
│   │ ARCHITECTURE PRESET SELECTION (Problem #1)                          │   │
│   │                                                                     │   │
│   │ KISS: persistent_data + !multi_user → embedded                      │   │
│   │ Stack: Next.js + Drizzle + SQLite                                   │   │
│   │ Eligible agents: [list from preset]                                 │   │
│   └─────────────────────────────────────────────────────────────────────┘   │
│        │                                                                    │
│        ▼                                                                    │
│   ┌─────────────────────────────────────────────────────────────────────┐   │
│   │ BUILD PRESET SELECTION (Problem #2)                                 │   │
│   │                                                                     │   │
│   │ Signal match: "quick prototype" → prototype                         │   │
│   │ Stages: 5 (compressed), 2 (skip), 3 (minimal), 4 (skip)             │   │
│   │ Build agents: [list from build]                                     │   │
│   └─────────────────────────────────────────────────────────────────────┘   │
│        │                                                                    │
│        ▼                                                                    │
│   ┌─────────────────────────────────────────────────────────────────────┐   │
│   │ FINAL AGENT LIST                                                    │   │
│   │                                                                     │   │
│   │ = Build agents ∩ Architecture agents                                │   │
│   │ = [founder-advisor, database-developer, frontend-developer]         │   │
│   │ = 19 agents                                                          │   │
│   └─────────────────────────────────────────────────────────────────────┘   │
│        │                                                                    │
│        ▼                                                                    │
│   EXECUTE                                                                   │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 8.2 PROJECT.md Configuration Section

```markdown
## Configuration

### Architecture (Problem #1)

| Field | Value |
|-------|-------|
| Category | web |
| Preset | embedded |
| Pattern | monolith |
| Tier | single |

### Stack

| Layer | Technology |
|-------|------------|
| Frontend | Next.js + TypeScript |
| Database | SQLite + Drizzle |
| Auth | None |

### Build (Problem #2)

| Field | Value |
|-------|-------|
| Build | prototype |
| Mode | turbo |

### Stage Execution

| Stage | Mode | Agents |
|-------|------|--------|
| 1. Architecture | compressed | founder-advisor |
| 2. Product | skip | - |
| 3. Development | minimal | database-developer, frontend-developer |
| 4. Release | skip | - |

### Agent Summary

| Status | Count | Agents |
|--------|-------|--------|
| Active | 3 | founder-advisor, database-developer, frontend-developer |
| Skipped (build) | 11 | enterprise-architect, product-lead, ... |
| Skipped (arch) | 3 | backend-developer, devops-engineer, ... |
```

---

## 9. Implementation Plan

### 9.1 Phase Overview

```
┌──────────────────────────────────────────────────────────────────────────────┐
│                          IMPLEMENTATION PHASES                                │
├──────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  PHASE 1              PHASE 2              PHASE 3              PHASE 4      │
│  ────────             ────────             ────────             ────────     │
│  Config               Agents               Commands             Integration  │
│                                                                              │
│  • builds.yaml        • founder-advisor    • ts-turbo           • Router     │
│  • preferences.yaml     (compressed mode)  • ts-new-project     • PROJECT.md │
│                       • technical-writer                                     │
│                         (lite mode)                                          │
│                       • All agents                                           │
│                         (skip check)                                         │
│                                                                              │
│  Week 1               Week 2               Week 3               Week 4       │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
```

### 9.2 Phase 1: Configuration Layer

**Deliverables:**

| File | Action |
|------|--------|
| `.claude/config/builds.yaml` | Create - Build preset definitions |
| `.claude/config/preferences.yaml` | Update - Add build section |

### 9.3 Phase 2: Agent Updates

**Deliverables:**

| Agent | Changes |
|-------|---------|
| `founder-advisor` | Add compressed mode for prototype |
| `technical-writer` | Add lite mode for mvp |
| All agents | Add build-aware skip check |

### 9.4 Phase 3: Command Updates

**Deliverables:**

| Command | Changes |
|---------|---------|
| `ts-turbo` | Add --build flag |
| `ts-new-project` | Add --build flag |

### 9.5 Phase 4: Integration

**Deliverables:**

| Component | Changes |
|-----------|---------|
| Router logic | Implement stage skipping |
| PROJECT.md template | Add Build section |
| Signal extraction | Add build signals |

---

## 10. File Specifications

### 10.1 builds.yaml

**Location:** `.claude/config/builds.yaml`

```yaml
# ============================================================================
# THE SYSTEM - Build Presets
# ============================================================================
# Controls workflow intensity: how many agents run, which stages execute.
# Works in conjunction with architecture presets (presets.yaml).
# ============================================================================

builds:

  # --------------------------------------------------------------------------
  # PROTOTYPE - Fastest path to working code
  # --------------------------------------------------------------------------
  prototype:
    description: "Fastest path to working code"
    goal: "Make it work"
    
    timing:
      estimated_minutes: 3-5
      
    stages:
      stage1_architecture:
        mode: compressed
        agents:
          - founder-advisor      # Compressed mode: inline arch
        skip:
          - enterprise-architect
          
      stage2_product:
        mode: skip
        agents: []
        skip:
          - product-lead
          - project-planner
          - business-analyst
          
      stage3_development:
        mode: minimal
        agents:
          - database-developer   # If arch preset includes
          - backend-developer    # If arch preset includes
          - frontend-developer   # If arch preset includes
        skip:
          - principal-developer
          - qa-engineer
          - integration-engineer
          
      stage4_release:
        mode: skip
        agents: []
        skip:
          - technical-writer
          - security-engineer
          - release-engineer
          - devops-engineer
    
    outputs:
      working_code: true
      tests: false
      documentation: readme_only
      infrastructure: false
      security_audit: false
      
    signals:
      - prototype
      - POC
      - proof of concept
      - spike
      - experiment
      - try
      - test idea
      - hackathon
      - quick
      - fast
      - just make it work

  # --------------------------------------------------------------------------
  # MVP - Balanced workflow for shippable product
  # --------------------------------------------------------------------------
  mvp:
    description: "Balanced workflow for shippable MVP"
    goal: "Make it good enough to ship"
    
    timing:
      estimated_minutes: 15-20
      
    stages:
      stage1_architecture:
        mode: full
        agents:
          - founder-advisor
          - enterprise-architect
        skip: []
          
      stage2_product:
        mode: lean
        agents:
          - product-lead         # MVP definition + user stories
        skip:
          - project-planner      # No formal sprints
          - business-analyst     # No revenue model
          
      stage3_development:
        mode: full
        agents:
          - principal-developer
          - qa-engineer
          - database-developer   # If arch preset includes
          - backend-developer    # If arch preset includes
          - frontend-developer   # If arch preset includes
          - integration-engineer
        skip: []
          
      stage4_release:
        mode: lean
        agents:
          - technical-writer     # Lite mode: README only
        skip:
          - security-engineer    # Basic security in code only
          - release-engineer     # No formal versioning
          - devops-engineer      # No Terraform/IaC
    
    outputs:
      working_code: true
      tests: true
      documentation: basic
      infrastructure: false
      security_audit: false
      
    signals:
      - MVP
      - minimum viable
      - first version
      - v1
      - side project
      - internal tool
      - tool
      - ship it

  # --------------------------------------------------------------------------
  # PRODUCTION - Full ceremony for production-ready delivery
  # --------------------------------------------------------------------------
  production:
    description: "Full workflow for production-ready delivery"
    goal: "Make it production-ready"
    
    timing:
      estimated_minutes: 45-60
      
    stages:
      stage1_architecture:
        mode: full
        agents:
          - founder-advisor
          - enterprise-architect
        skip: []
          
      stage2_product:
        mode: full
        agents:
          - product-lead
          - project-planner
          - business-analyst
        skip: []
          
      stage3_development:
        mode: full
        agents:
          - principal-developer
          - qa-engineer
          - database-developer   # If arch preset includes
          - backend-developer    # If arch preset includes
          - frontend-developer   # If arch preset includes
          - integration-engineer
        skip: []
          
      stage4_release:
        mode: full
        agents:
          - technical-writer
          - security-engineer
          - release-engineer
          - devops-engineer
        skip: []
    
    outputs:
      working_code: true
      tests: true
      documentation: full
      infrastructure: true
      security_audit: true
      
    signals:
      - production
      - production-ready
      - enterprise
      - client
      - customer
      - launch
      - go live
      - compliance
      - security
      - regulated
      - audit

# ============================================================================
# DEFAULTS
# ============================================================================

defaults:
  turbo: mvp
  hitl: production
```

---

### 10.2 preferences.yaml Additions

**Location:** `.claude/config/preferences.yaml`

```yaml
# ============================================================================
# BUILD CONFIGURATION
# ============================================================================
build:
  # Enable auto-selection based on signals
  auto_select: true
  
  # Mode-based defaults
  default:
    turbo: mvp
    hitl: production
  
  # Lock to specific build (uncomment to force)
  # build: prototype
```

---

### 10.3 Founder-Advisor: Compressed Mode

**Location:** `.claude/agents/founder-advisor.md`

Add section:

```markdown
---

## Compressed Mode (Prototype Build)

When build=prototype, operate in compressed mode:

### Skip
- Strategic Assessment
- Market Analysis
- Competitive Analysis
- Technical Signal deep extraction

### Do
- One-line idea summary
- Auto-select architecture preset (KISS)
- Inline minimal architecture (no separate EA)
- Direct handoff to developers

### Output Format

```markdown
## Prototype: [PROJECT_NAME]

**Idea:** [one line]

### Architecture (Inline)

| Field | Value |
|-------|-------|
| Preset | [auto-selected] |
| Stack | [key technologies] |

### Core Feature

[Single most important thing to build]

### Build Instructions

[Actionable instructions for developers]

### Files to Create

| File | Purpose |
|------|---------|
| [path] | [what it does] |

---

Proceed to: [relevant developer agent(s)]
```
```

---

### 10.4 Technical Writer: Lite Mode

**Location:** `.claude/agents/technical-writer.md`

Add section:

```markdown
---

## Lite Mode (MVP Build)

When build=mvp, operate in lite mode:

### Skip
- Full documentation suite
- API documentation
- Architecture documentation
- Deployment guides
- Contributing guides

### Do
- README.md only
- Essential sections: description, setup, usage, config

### Output Format

```markdown
# [Project Name]

[One paragraph description]

## Quick Start

\`\`\`bash
# Install dependencies
[command]

# Run development server
[command]
\`\`\`

## Configuration

| Variable | Description | Default |
|----------|-------------|---------|
| | | |

## Usage

[Basic usage examples]

## License

[License type]
```
```

---

### 10.19 agent Skip Check Template

All agents add this pre-flight check:

```markdown
---

## Pre-flight Check

Before starting, verify you should run:

### Build Check

1. Read PROJECT.md → Configuration → Build
2. Read builds.yaml → [build] → stages → [your_stage]
3. Check if this agent is in `agents` list
4. If in `skip` list:
   ```
   ⏭️ Skipping [agent-name]: Not included in [build] build preset.
   ```
   Exit.

### Architecture Check

1. Read PROJECT.md → Configuration → Architecture → Agents
2. If this agent is in `Skipped` list:
   ```
   ⏭️ Skipping [agent-name]: Not required for [preset] architecture preset.
   ```
   Exit.

### Proceed

If both checks pass, proceed with normal workflow.
```

---

### 10.6 TEMPLATE.md Build Section

**Location:** `.claude/pipeline/projects/TEMPLATE.md`

Add after Architecture section:

```markdown
## Build

| Field | Value |
|-------|-------|
| Build | `[PENDING]` |
| Mode | `[PENDING]` |
| Selection | `[PENDING]` |

### Stage Execution

| Stage | Mode | Agents |
|-------|------|--------|
| 1. Architecture | `[PENDING]` | `[PENDING]` |
| 2. Product | `[PENDING]` | `[PENDING]` |
| 3. Development | `[PENDING]` | `[PENDING]` |
| 4. Release | `[PENDING]` | `[PENDING]` |

### Agent Summary

| Status | Count | Agents |
|--------|-------|--------|
| Active | `[PENDING]` | `[PENDING]` |
| Skipped (build) | `[PENDING]` | `[PENDING]` |
| Skipped (arch) | `[PENDING]` | `[PENDING]` |
```

---

### 10.7 ts-turbo.md Updates

**Location:** `.claude/commands/ts-turbo.md`

Update flags section:

```markdown
## Flags

| Flag | Short | Description | Options |
|------|-------|-------------|---------|
| `--preset=` | `-p` | Architecture preset | static, embedded, fullstack-js, baas, microservice, cli-* |
| `--build=` | `-B` | Build preset | prototype, mvp, production |
| `--db=` | | Database override | sqlite, turso, postgresql, mysql |
| `--auth=` | | Auth override | nextauth, clerk, none |
| `--runtime=` | | CLI runtime | node, python, go, rust |

## Examples

```bash
# Default (mvp build, auto architecture)
/ts-turbo my-app "A todo app with auth"

# Quick prototype
/ts-turbo my-app "Quick test of an idea" --build=prototype
/ts-turbo my-app "Hackathon project" -B p

# Production-ready
/ts-turbo my-app "Client billing system" --build=production
/ts-turbo my-app "Enterprise dashboard" -B P

# Combined
/ts-turbo my-cli "Quick script" --preset=cli-script --build=prototype
/ts-turbo my-app "Production SaaS" --preset=fullstack-js --build=production
```
```

---

## 11. Testing

### 11.1 Build Selection Tests

| ID | Input | Mode | Expected Build |
|----|-------|------|----------------|
| B01 | "quick prototype" | turbo | prototype |
| B02 | "POC for client" | turbo | prototype |
| B03 | "hackathon project" | turbo | prototype |
| B04 | "MVP for my startup" | turbo | mvp |
| B05 | "side project" | turbo | mvp |
| B06 | "internal tool" | turbo | mvp |
| B07 | "production app" | turbo | production |
| B08 | "client deliverable" | turbo | production |
| B09 | "enterprise system" | turbo | production |
| B10 | (no signal) | turbo | mvp (default) |
| B11 | (no signal) | hitl | production (default) |

### 11.19 agent Count Tests

| ID | Preset | Build | Expected Agents |
|----|--------|-------|-----------------|
| A01 | static | prototype | 2 |
| A02 | static | mvp | 4 |
| A03 | static | production | 6 |
| A04 | embedded | prototype | 3 |
| A05 | embedded | mvp | 7 |
| A06 | fullstack-js | prototype | 4 |
| A07 | fullstack-js | mvp | 9 |
| A08 | fullstack-js | production | 14 |
| A09 | microservice | prototype | 5 |
| A10 | microservice | production | 17 |

### 11.3 Override Tests

| ID | Input | Override | Expected |
|----|-------|----------|----------|
| O01 | "enterprise app" | --build=prototype | prototype |
| O02 | "quick test" | --build=production | production |
| O03 | config lock | mvp | mvp |

### 11.4 Stage Execution Tests

| ID | Build | Stage 1 | Stage 2 | Stage 3 | Stage 4 |
|----|-------|---------|---------|---------|---------|
| S01 | prototype | compressed | skip | minimal | skip |
| S02 | mvp | full | lean | full | lean |
| S03 | production | full | full | full | full |

---

## 12. Examples

### 12.1 Example: Quick Prototype

**Input:**
```bash
/ts-turbo rename-tool "CLI to batch rename files" --build=prototype
```

**Selection:**
```
Architecture: cli-script (auto)
Build: prototype (explicit)
```

**Agents Run:** 2
1. Founder-Advisor (compressed)
2. Backend Developer

**Output:**
- `src/index.ts` - The script
- `README.md` - Basic readme
- `package.json` - Dependencies

**Time:** ~3 minutes

---

### 12.2 Example: MVP Side Project

**Input:**
```bash
/ts-turbo habit-tracker "Daily habit tracking app"
```

**Selection:**
```
Architecture: embedded (auto - persistent data, single user)
Build: mvp (default for turbo)
```

**Agents Run:** 7
1. Founder-Advisor
2. Enterprise Architect
3. Product Lead
4. Database Developer
5. Frontend Developer
6. Integration Engineer
7. Technical Writer (lite)

**Output:**
- Full working app with SQLite
- User stories in PROJECT.md
- Test files
- README.md

**Time:** ~15 minutes

---

### 12.3 Example: Production Client Project

**Input:**
```bash
/ts-turbo billing-system "Invoice management for enterprise" --build=production
```

**Selection:**
```
Architecture: fullstack-js (auto - multi-user, CRUD)
Build: production (explicit)
```

**Agents Run:** 14
- All Stage 1-19 agents (minus backend-dev for fullstack-js preset)

**Output:**
- Production-ready code
- Full test suite
- Complete documentation
- Security audit report
- CI/CD pipelines
- Terraform infrastructure

**Time:** ~45 minutes

---

## 13. Appendix

### 13.1 Build Comparison Matrix

| Aspect | prototype | mvp | production |
|--------|-----------|-----|------------|
| **Goal** | Make it work | Ship it | Production-ready |
| **Time** | 3-5 min | 15-20 min | 45-60 min |
| **Agents** | 2-5 | 7-11 | 12-17 |
| **Stage 1** | Compressed | Full | Full |
| **Stage 2** | Skip | Lean | Full |
| **Stage 3** | Minimal | Full | Full |
| **Stage 4** | Skip | Lean | Full |
| **Tests** | ❌ | ✅ | ✅ |
| **Docs** | README | Basic | Full |
| **Security** | ❌ | Basic | Full audit |
| **Infra** | ❌ | ❌ | Terraform |

### 13.2 Signal Quick Reference

```
prototype signals:
  prototype, POC, spike, experiment, try, test, hackathon, quick, fast

mvp signals:
  MVP, first version, v1, side project, internal, tool, ship it

production signals:
  production, enterprise, client, launch, compliance, security, regulated
```

### 13.3 Default Summary

```
Turbo mode (no signal)  →  mvp
HITL mode (no signal)   →  production

Explicit --build=X      →  X (always wins)
Config lock             →  locked value
Signal match            →  matched build
```

---

## Document History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | Dec 2024 | Initial build presets design |
