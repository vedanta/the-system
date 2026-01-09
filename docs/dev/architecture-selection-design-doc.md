# Architecture Selection System

## Design Document v1.0

**Problem:** #1 - Stack Architecture Selection  
**Status:** Draft  
**Author:** The System  
**Date:** December 2024

---

## 1. Problem Statement

### Current State

The System currently hardcodes a single architecture pattern (Next.js + FastAPI + PostgreSQL) for all projects via `preferences.yaml`. Every project, regardless of complexity, gets the same 3-tier microservice architecture.

### Problems

1. **Overkill for simple apps** — A tic-tac-toe game doesn't need FastAPI + PostgreSQL
2. **Wasted effort** — Agents build infrastructure that isn't needed
3. **Slower execution** — More components = more build time
4. **Higher deploy complexity** — 3 deployables vs 1

### Desired State

The System should automatically select the simplest architecture that fulfills requirements, following the KISS principle. Users can override when needed.

---

## 2. Solution Overview

### Core Principle

> **Select the simplest architecture that can fulfill the requirements. Complexity must be justified.**

### Approach

Introduce **Architecture Presets** — predefined combinations of pattern, tier, and stack that represent common architectural approaches at different complexity levels.

### Three-Level Hierarchy

```
Architecture (Pattern)
    └── Tier (Deployment Units)
            └── Stack (Technologies)
```

---

## 3. Architecture Presets

### 3.1 Preset Ladder (Simplest → Most Complex)

```
┌─────────────────────────────────────────────────────────────┐
│                    KISS COMPLEXITY LADDER                   │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  STATIC        No data                          │ Deploy: 1 │
│      │                                                      │
│      ▼                                                      │
│  EMBEDDED      SQLite / Turso / D1              │ Deploy: 1 │
│      │         (data, no external DB)                       │
│      ▼                                                      │
│  FULLSTACK-JS  PostgreSQL + Neon                │ Deploy: 2 │
│      │         (data, managed DB service)                   │
│      ▼                                                      │
│  BAAS          Supabase                         │ Deploy: 2 │
│      │         (data + realtime + auth + storage)           │
│      ▼                                                      │
│  MICROSERVICE  FastAPI + PostgreSQL             │ Deploy: 3 │
│                (separate backend service)                   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### 3.2 Preset Summary

| Preset | Pattern | Tier | Deployables | Use Case |
|--------|---------|------|-------------|----------|
| `static` | jamstack | single | 1 | No backend, content-only |
| `embedded` | monolith | single | 1 | Simple persistence, low traffic |
| `fullstack-js` | monolith | two | 2 | Standard CRUD apps (DEFAULT) |
| `baas` | monolith | two | 2 | Realtime-core features |
| `microservice` | distributed | three | 3 | Python/ML, heavy compute |

---

## 4. Preset Definitions

### 4.1 `static`

**When:** No backend logic, no database, content-only

```yaml
static:
  pattern: jamstack
  tier: single
  deployables: 1
  
  stack:
    frontend:
      framework: nextjs
      mode: static-export
      language: typescript
      styling: tailwind
    backend: none
    database: none
    auth: none
    
  deploy:
    frontend: vercel
    
  agents:
    used:
      - founder-advisor
      - enterprise-architect
      - frontend-developer
      - technical-writer
    skipped:
      - database-developer
      - backend-developer
      - integration-engineer
```

**Examples:** Landing page, documentation, portfolio, blog with external CMS

**Output Structure:**
```
my-app/
├── src/
│   └── app/
│       ├── page.tsx
│       └── components/
├── public/
├── package.json
└── vercel.json
```

---

### 4.2 `embedded`

**When:** Need persistence, but not a full database service

```yaml
embedded:
  pattern: monolith
  tier: single
  deployables: 1
  
  stack:
    frontend:
      framework: nextjs
      mode: app-router
      language: typescript
      styling: tailwind
    backend:
      runtime: node
      framework: nextjs-api-routes
      location: src/app/api/
    database:
      type: sqlite
      orm: drizzle
      host: embedded
    auth:
      provider: nextauth  # optional
      
  deploy:
    target: vercel  # or fly.io, railway with volume
    
  agents:
    used:
      - founder-advisor
      - enterprise-architect
      - database-developer
      - frontend-developer
      - integration-engineer
      - technical-writer
    skipped:
      - backend-developer
      - devops-engineer
```

**Database Options:**

| Option | Type | Best For | Deploy Target |
|--------|------|----------|---------------|
| `sqlite` | File | Single-instance apps | Fly.io, Railway |
| `turso` | Distributed SQLite | Multi-region, edge | Vercel + Turso |
| `d1` | Cloudflare SQLite | Edge-first | Cloudflare Pages |
| `duckdb` | File (analytics) | Read-heavy | Fly.io, Railway |
| `lowdb` | JSON file | Tiny apps, prototypes | Anywhere |

**Examples:** Personal tools, local-first apps, prototypes with persistence

**Output Structure:**
```
my-app/
├── src/
│   └── app/
│       ├── api/
│       │   └── tasks/
│       │       └── route.ts
│       └── page.tsx
├── db/
│   ├── schema.ts
│   ├── index.ts
│   └── data.db          # gitignored
├── drizzle.config.ts
├── package.json
└── vercel.json
```

---

### 4.3 `fullstack-js`

**When:** Standard web app with auth, CRUD, managed database

**This is the DEFAULT preset.**

```yaml
fullstack-js:
  pattern: monolith
  tier: two
  deployables: 2
  
  stack:
    frontend:
      framework: nextjs
      mode: app-router
      language: typescript
      styling: tailwind
      state: zustand
      data-fetching: tanstack-query
    backend:
      runtime: node
      framework: nextjs-api-routes
      location: src/app/api/
    database:
      type: postgresql
      orm: prisma
      host: neon
    auth:
      provider: nextauth
      
  deploy:
    frontend: vercel
    database: neon
    
  agents:
    used:
      - founder-advisor
      - enterprise-architect
      - database-developer
      - frontend-developer
      - integration-engineer
      - qa-engineer
      - technical-writer
    skipped:
      - backend-developer  # No separate backend service
```

**Examples:** Todo app, blog platform, invoice tool, SaaS MVP, dashboard

**Output Structure:**
```
my-app/
├── src/
│   └── app/
│       ├── api/
│       │   ├── auth/
│       │   ├── tasks/
│       │   └── users/
│       ├── (auth)/
│       ├── dashboard/
│       └── page.tsx
├── prisma/
│   └── schema.prisma
├── package.json
└── vercel.json
```

---

### 4.4 `baas`

**When:** Realtime is core, or want managed backend bundle

```yaml
baas:
  pattern: monolith
  tier: two
  deployables: 2
  
  stack:
    frontend:
      framework: nextjs
      mode: app-router
      language: typescript
      styling: tailwind
    backend:
      provider: supabase
      features:
        - auth
        - database
        - storage
        - realtime
        - edge-functions
    database:
      type: postgresql
      orm: supabase-js
      host: supabase
    auth:
      provider: supabase-auth
      
  deploy:
    frontend: vercel
    backend: supabase
    
  agents:
    used:
      - founder-advisor
      - enterprise-architect
      - database-developer
      - frontend-developer
      - integration-engineer
      - qa-engineer
      - technical-writer
    skipped:
      - backend-developer
```

**Examples:** Chat app, collaborative tool, social feed, realtime dashboard

**Output Structure:**
```
my-app/
├── src/
│   └── app/
│       ├── page.tsx
│       └── dashboard/
├── supabase/
│   ├── migrations/
│   └── functions/
├── lib/
│   └── supabase.ts
├── package.json
└── vercel.json
```

---

### 4.5 `microservice`

**When:** Need Python, ML, heavy compute, or separate services

```yaml
microservice:
  pattern: distributed
  tier: three
  deployables: 3
  
  stack:
    frontend:
      framework: nextjs
      mode: app-router
      language: typescript
      styling: tailwind
      state: zustand
      data-fetching: tanstack-query
    backend:
      runtime: python
      version: "3.11"
      framework: fastapi
      orm: sqlalchemy
    database:
      type: postgresql
      version: "15"
      host: neon
    auth:
      provider: jwt
      
  deploy:
    frontend: vercel
    backend: railway
    database: neon
    
  agents:
    used:
      - founder-advisor
      - enterprise-architect
      - database-developer
      - backend-developer
      - frontend-developer
      - integration-engineer
      - qa-engineer
      - technical-writer
      - devops-engineer
    skipped:
      - none
```

**Examples:** AI/ML app, data platform, fintech, multi-service system

**Output Structure:**
```
my-app/
├── src/
│   ├── frontend/
│   │   └── app/
│   │       └── page.tsx
│   └── backend/
│       ├── api/
│       │   └── routes/
│       ├── models/
│       ├── services/
│       ├── main.py
│       └── requirements.txt
├── prisma/
├── docker-compose.yml
└── infra/
```

---

## 5. KISS Selection Algorithm

### 5.1 Decision Tree

```
START
  │
  ▼
Needs persistent data? ─── No ──→ STATIC
  │
  Yes
  │
  ▼
Needs Python/ML/heavy compute? ─── Yes ──→ MICROSERVICE
  │
  No
  │
  ▼
Realtime is CORE feature? ─── Yes ──→ BAAS
  │
  No
  │
  ▼
Multi-user concurrent writes? ─── Yes ──→ FULLSTACK-JS
High availability required?
  │
  No
  │
  ▼
EMBEDDED
```

### 5.2 Signal Definitions

**Persistent Data Signals:**
- User accounts / authentication
- Saving user-generated content
- Any CRUD operations
- State that survives browser refresh

**Python/ML/Heavy Compute Signals:**
- Machine learning models
- Data processing pipelines
- Scientific computing (pandas, numpy)
- Complex algorithms
- Explicit mention of Python

**Realtime Core Signals:**
- Chat / messaging
- Collaborative editing
- Live cursors / presence
- Push notifications (not just polling)
- Multiplayer games
- Live feeds / streams

**Multi-user / High Availability Signals:**
- Many concurrent users
- Business-critical data
- Transactions / payments
- Multi-region requirements

### 5.3 KISS Principles for Turbo Mode

```markdown
When running in TURBO MODE (no HITL):

1. Apply KISS decision tree strictly
2. Default to simpler option when ambiguous
3. DO NOT escalate based on "might need later"
4. Log selection rationale to PROJECT.md

Bias Order (when uncertain):
  embedded > fullstack-js > baas > microservice
```

---

## 6. Override Mechanisms

### 6.1 Override Priority (Highest → Lowest)

1. **Command-line flag** — Explicit override at execution
2. **Config lock** — Persistent override in preferences.yaml
3. **Idea hints** — Keywords in user's description
4. **KISS auto-selection** — Default behavior

### 6.49 command-Line Override

```bash
# Override preset entirely
/ts-turbo my-app "idea" --preset=microservice

# Override specific stack component
/ts-turbo my-app "idea" --db=mysql
/ts-turbo my-app "idea" --db=turso

# Combine
/ts-turbo my-app "idea" --preset=fullstack-js --db=mysql
```

### 6.3 Config Lock Override

```yaml
# preferences.yaml

architecture:
  preset: microservice        # Always use this preset
  auto_select: false          # Disable KISS selection
```

### 6.4 Partial Stack Override

```yaml
# preferences.yaml

architecture:
  preset: fullstack-js        # Use this preset
  auto_select: true           # But allow KISS to change it
  
  # Override specific stack choices (applies to any preset)
  stack:
    database:
      type: mysql             # Instead of postgresql
    auth:
      provider: clerk         # Instead of nextauth
```

---

## 7. Workflow Integration

### 7.1 Selection Flow

```
┌────────────────────────────────────────────────────────────┐
│                        INPUT                               │
├────────────────────────────────────────────────────────────┤
│  /ts-turbo my-app "A todo app with auth"                   │
│  Optional: --preset=X, --db=Y                              │
└────────────────────────────────────────────────────────────┘
                          │
                          ▼
┌────────────────────────────────────────────────────────────┐
│                   PHASE 0: SETUP                           │
├────────────────────────────────────────────────────────────┤
│  1. Read preferences.yaml (defaults + any config lock)     │
│  2. Apply command-line overrides                           │
│  3. Create PROJECT.md from template                        │
└────────────────────────────────────────────────────────────┘
                          │
                          ▼
┌────────────────────────────────────────────────────────────┐
│                 FOUNDER-ADVISOR                            │
├────────────────────────────────────────────────────────────┤
│  Extracts technical signals from idea:                     │
│  • Auth required?                                          │
│  • Database needed?                                        │
│  • Realtime core?                                          │
│  • Python/ML/compute?                                      │
│                                                            │
│  Output: Strategic Assessment + Technical Signals          │
└────────────────────────────────────────────────────────────┘
                          │
                          ▼
┌────────────────────────────────────────────────────────────┐
│               ENTERPRISE ARCHITECT                         │
├────────────────────────────────────────────────────────────┤
│                                                            │
│  STEP 1: Check for explicit override                       │
│    └── If --preset flag → Skip to STEP 4                   │
│                                                            │
│  STEP 2: KISS Analysis                                     │
│    └── Apply decision tree with signals                    │
│    └── Select simplest viable preset                       │
│                                                            │
│  STEP 3: Apply stack overrides (--db=X, etc.)              │
│                                                            │
│  STEP 4: Resolve final configuration                       │
│    • Pattern                                               │
│    • Tier                                                  │
│    • Stack (all technologies)                              │
│                                                            │
│  STEP 5: Write to PROJECT.md                               │
│                                                            │
└────────────────────────────────────────────────────────────┘
                          │
                          ▼
┌────────────────────────────────────────────────────────────┐
│              PROJECT.MD (Locked)                           │
├────────────────────────────────────────────────────────────┤
│  ## Architecture                                           │
│                                                            │
│  Preset: fullstack-js                                      │
│  Pattern: monolith                                         │
│  Tier: two                                                 │
│                                                            │
│  ### Stack                                                 │
│  | Layer    | Technology          |                        │
│  |----------|---------------------|                        │
│  | Frontend | Next.js 14 + TS     |                        │
│  | Backend  | Next.js API Routes  |                        │
│  | Database | PostgreSQL + Prisma |                        │
│  | Auth     | NextAuth.js         |                        │
│  | Deploy   | Vercel + Neon       |                        │
│                                                            │
│  ### Selection Rationale                                   │
│  KISS: Standard CRUD + auth, no compute/realtime signals   │
└────────────────────────────────────────────────────────────┘
                          │
                          ▼
┌────────────────────────────────────────────────────────────┐
│              DOWNSTREAM AGENTS                             │
├────────────────────────────────────────────────────────────┤
│  Each agent reads PROJECT.md → Architecture section        │
│  Adapts behavior based on preset/stack                     │
│                                                            │
│  Example: Database Developer                               │
│  • If static → Skip                                        │
│  • If embedded → Drizzle + SQLite                          │
│  • If fullstack-js → Prisma + PostgreSQL                   │
│  • If baas → Supabase migrations                           │
│  • If microservice → SQLAlchemy + PostgreSQL               │
└────────────────────────────────────────────────────────────┘
```

### 7.2 HITL Mode Gates

In HITL mode, humans can intervene at two points:

| Gate | Name | Human Can |
|------|------|-----------|
| Gate 0 | `architecture-start` | Accept/override preset recommendation |
| Gate 1 | `architecture-lock` | Accept/revise detailed architecture |

```
Founder-Advisor recommends preset
         │
         ▼
    👤 GATE 0: Accept or override preset
         │
         ▼
Enterprise Architect designs full architecture
         │
         ▼
    👤 GATE 1: Accept or request changes
         │
         ▼
    🔒 Architecture Locked → Proceed to build
```

### 7.3 Turbo Mode Behavior

In Turbo mode, KISS selection runs automatically:

```
Founder-Advisor extracts signals
         │
         ▼
Enterprise Architect applies KISS
         │
         ▼
    ⚡ Auto-select simplest preset
         │
         ▼
    ⚡ Auto-lock architecture
         │
         ▼
    Proceed to build
```

---

## 8. Implementation Plan

### 8.1 Phase 1: Configuration Updates

**File:** `.claude/config/preferences.yaml`

```yaml
# Add architecture section
architecture:
  # Auto-selection (KISS) enabled by default
  auto_select: true
  
  # Default preset (used if auto_select produces ambiguous result)
  default_preset: fullstack-js
  
  # Preset definitions (reference, not usually edited)
  presets:
    static: { ... }
    embedded: { ... }
    fullstack-js: { ... }
    baas: { ... }
    microservice: { ... }
  
  # Stack overrides (optional, applies to selected preset)
  stack:
    # database:
    #   type: mysql
    # auth:
    #   provider: clerk
```

### 8.2 Phase 2: Agent Updates

**Agents requiring updates:**

| Agent | Changes |
|-------|---------|
| `founder-advisor` | Extract technical signals, recommend preset |
| `enterprise-architect` | KISS decision tree, architecture resolution |
| `database-developer` | Conditional: Prisma vs Drizzle vs SQLAlchemy vs Supabase |
| `backend-developer` | Conditional: Skip if not microservice |
| `frontend-developer` | Adapt API calls based on backend type |
| `integration-engineer` | Adapt based on tier (1, 2, or 3 services) |
| `devops-engineer` | Adapt infra based on preset |

**Agent Prompt Addition (all agents):**

```markdown
## Architecture Awareness

Before starting work, read PROJECT.md → Architecture section.

Adapt your output based on:
- `preset`: Which architectural pattern
- `tier`: How many deployables
- `stack`: Specific technologies to use

If your role is not applicable for this preset, state:
"Skipping [agent-name]: Not required for [preset] architecture."
```

### 8.3 Phase 3: Command Updates

**Commands requiring updates:**

| Command | Changes |
|---------|---------|
| `ts-turbo` | Add `--preset` and `--db` flags |
| `ts-new-project` | Add `--preset` flag |
| `ts-architect` | Implement KISS selection |
| `ts-approve` | Handle `architecture-start` with override |

**New Command Flags:**

```markdown
## Flags

--preset=<name>    Override architecture preset
                   Options: static, embedded, fullstack-js, baas, microservice

--db=<type>        Override database technology
                   Options: none, sqlite, turso, d1, postgresql, mysql, mongodb

--auth=<provider>  Override auth provider
                   Options: none, nextauth, clerk, supabase-auth, jwt
```

### 8.4 Phase 4: Template Updates

**File:** `.claude/pipeline/projects/TEMPLATE.md`

Add Architecture section:

```markdown
## Architecture

| Field | Value |
|-------|-------|
| Preset | `[PENDING]` |
| Pattern | `[PENDING]` |
| Tier | `[PENDING]` |

### Stack

| Layer | Technology | Notes |
|-------|------------|-------|
| Frontend | [PENDING] | |
| Backend | [PENDING] | |
| Database | [PENDING] | |
| Auth | [PENDING] | |

### Selection Rationale

[PENDING - KISS analysis results]

### Signals Detected

- [ ] Persistent data required
- [ ] Python/ML/compute required
- [ ] Realtime core feature
- [ ] Multi-user/high-availability
```

---

## 9. Examples

### 9.1 Tic-Tac-Toe Game

**Input:** "Build a tic-tac-toe game"

**Signal Extraction:**
- Persistent data: No
- Python/ML: No
- Realtime: No

**KISS Result:** `static`

**Output:**
```
Preset: static
Deployables: 1 (Vercel)
Stack: Next.js + TypeScript + Tailwind
```

---

### 9.2 Tic-Tac-Toe with High Scores

**Input:** "Build a tic-tac-toe game that saves high scores"

**Signal Extraction:**
- Persistent data: Yes (high scores)
- Python/ML: No
- Realtime: No
- Multi-user: No (personal scores)

**KISS Result:** `embedded`

**Output:**
```
Preset: embedded
Deployables: 1 (Vercel + Turso)
Stack: Next.js + Drizzle + SQLite/Turso
```

---

### 9.3 Todo App with Auth

**Input:** "A task management app with user auth, categories, and reminders"

**Signal Extraction:**
- Persistent data: Yes (tasks, users)
- Python/ML: No
- Realtime: No
- Multi-user: Yes (user accounts)

**KISS Result:** `fullstack-js`

**Output:**
```
Preset: fullstack-js
Deployables: 2 (Vercel + Neon)
Stack: Next.js + Prisma + PostgreSQL + NextAuth
```

---

### 9.4 Collaborative Whiteboard

**Input:** "Real-time collaborative whiteboard where users can draw together"

**Signal Extraction:**
- Persistent data: Yes
- Python/ML: No
- Realtime: Yes (core feature - live drawing)
- Multi-user: Yes

**KISS Result:** `baas`

**Output:**
```
Preset: baas
Deployables: 2 (Vercel + Supabase)
Stack: Next.js + Supabase (realtime, auth, storage)
```

---

### 9.5 AI-Powered Resume Analyzer

**Input:** "An app that uses ML to analyze resumes and provide feedback"

**Signal Extraction:**
- Persistent data: Yes
- Python/ML: Yes (ML analysis)
- Realtime: No

**KISS Result:** `microservice`

**Output:**
```
Preset: microservice
Deployables: 3 (Vercel + Railway + Neon)
Stack: Next.js + FastAPI + SQLAlchemy + PostgreSQL
```

---

## 10. Success Criteria

| Metric | Target |
|--------|--------|
| Simple apps use simple architecture | 100% |
| KISS selection matches human judgment | >90% |
| Override mechanism works | 100% |
| Agents adapt to preset | 100% |
| No regression in microservice apps | 100% |

---

## 11. Open Questions

1. **Edge case: "mostly fullstack-js but one ML endpoint"**
   - Do we support hybrid presets?
   - Or recommend external ML API (Replicate, OpenAI)?

2. **BaaS provider options**
   - Currently assumes Supabase
   - Support Firebase as alternative?

3. **Embedded + Auth**
   - Does `embedded` preset support auth?
   - Or escalate to `fullstack-js` if auth needed?

4. **Migration path**
   - Can a project upgrade from `embedded` → `fullstack-js`?
   - Document migration steps?

---

## 12. Appendix

### A. Comparison Matrix

| Aspect | `static` | `embedded` | `fullstack-js` | `baas` | `microservice` |
|--------|----------|------------|----------------|--------|----------------|
| Auth | ❌ | Optional | NextAuth | Supabase | JWT |
| Database | ❌ | SQLite/Turso | PostgreSQL | Supabase PG | PostgreSQL |
| Backend | ❌ | API Routes | API Routes | Supabase | FastAPI |
| Realtime | ❌ | ❌ | Polling | ✅ Native | WebSocket |
| File Storage | ❌ | ❌ | External | ✅ Native | External |
| Deploy Units | 1 | 1 | 2 | 2 | 3 |
| Local Dev | `npm run dev` | `npm run dev` | `npm run dev` | CLI + dev | `docker-compose` |

### B. Technology Defaults by Preset

| Layer | static | embedded | fullstack-js | baas | microservice |
|-------|--------|----------|--------------|------|--------------|
| Framework | Next.js | Next.js | Next.js | Next.js | Next.js |
| Language | TypeScript | TypeScript | TypeScript | TypeScript | TS + Python |
| Styling | Tailwind | Tailwind | Tailwind | Tailwind | Tailwind |
| ORM | - | Drizzle | Prisma | Supabase-js | SQLAlchemy |
| DB Host | - | Turso | Neon | Supabase | Neon |
| Auth | - | NextAuth | NextAuth | Supabase Auth | JWT |
| Deploy FE | Vercel | Vercel | Vercel | Vercel | Vercel |
| Deploy BE | - | - | - | Supabase | Railway |
