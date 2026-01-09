# Architecture Selection System

## Design Document v3.0

**Problem:** #1 - Stack Architecture Selection  
**Status:** Final Draft  
**Author:** The System  
**Date:** December 2024

---

## Table of Contents

1. [Problem Statement](#1-problem-statement)
2. [Solution Overview](#2-solution-overview)
3. [Architecture Hierarchy](#3-architecture-hierarchy)
4. [Categories & Presets](#4-categories--presets)
5. [Web Presets](#5-web-presets)
6. [CLI Presets](#6-cli-presets)
7. [Option Selection](#7-option-selection)
8. [KISS Selection Algorithm](#8-kiss-selection-algorithm)
9. [Override Mechanisms](#9-override-mechanisms)
10. [Workflow Integration](#10-workflow-integration)
11. [Implementation Plan](#11-implementation-plan)
12. [File Specifications](#12-file-specifications)
13. [Testing](#13-testing)
14. [Examples](#14-examples)
15. [Open Questions](#15-open-questions)
16. [Appendix](#16-appendix)

---

## 1. Problem Statement

### 1.1 Current State

The System currently hardcodes a single architecture pattern (Next.js + FastAPI + PostgreSQL) for all projects via `preferences.yaml`. Every project, regardless of complexity, gets the same 3-tier microservice architecture.

### 1.2 Problems

| Problem | Impact |
|---------|--------|
| Overkill for simple apps | A tic-tac-toe game doesn't need FastAPI + PostgreSQL |
| No CLI support | Cannot generate command-line tools |
| No option intelligence | Always picks defaults, ignores context |
| Wasted effort | Agents build infrastructure that isn't needed |
| Slower execution | More components = more build time |
| Higher deploy complexity | 3 deployables vs 1 |

### 1.3 Desired State

The System should:

1. **Auto-select** the simplest architecture preset (KISS principle)
2. **Auto-select** the best options within that preset (database, auth, framework)
3. **Support multiple categories** (web apps, CLI tools)
4. **Allow overrides** when users need specific choices
5. **Adapt agent behavior** based on selected architecture

---

## 2. Solution Overview

### 2.1 Core Principle

> **Select the simplest architecture that fulfills requirements. Then select the best options for the specific use case. Complexity must be justified.**

### 2.2 Approach

Introduce a **three-level selection system**:

```
Level 1: CATEGORY        web vs cli
Level 2: PRESET          static, embedded, fullstack-js, etc.
Level 3: OPTIONS         sqlite vs duckdb, nextauth vs clerk, etc.
```

### 2.3 Key Design Decision

**The Enterprise Architect owns ALL stack decisions.**

```
┌─────────────────────────────────────────────────────────────┐
│                    FOUNDER-ADVISOR                          │
│  • Analyzes idea                                            │
│  • Extracts ALL signals (preset + option level)             │
│  • Passes signals to EA                                     │
└─────────────────────────────────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────────┐
│                  ENTERPRISE ARCHITECT                       │
│  • Receives signals                                         │
│  • Selects preset (KISS)                                    │
│  • Selects ALL options (database, auth, framework, etc.)    │
│  • Outputs: COMPLETE STACK RECOMMENDATION                   │
└─────────────────────────────────────────────────────────────┘
                          │
              ┌───────────┴───────────┐
              │                       │
         HITL MODE               TURBO MODE
              │                       │
              ▼                       ▼
       👤 Human Reviews         ⚡ Auto-accept
       • Accept                  Proceed with
       • Modify                  recommendation
       • Override
              │                       │
              └───────────┬───────────┘
                          │
                          ▼
              🔒 ARCHITECTURE LOCKED
```

---

## 3. Architecture Hierarchy

### 3.1 Four-Level Hierarchy

```
Category (Application Type)
    └── Preset (Named Configuration Bundle)
            └── Options (Technology Choices)
                    └── Override (User Explicit Choice)
```

### 3.2 Visual Overview

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                              CATEGORIES                                      │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│   WEB                                    CLI                                │
│   ───────────────────────                ───────────────────────            │
│   │                                      │                                  │
│   ├── static                             ├── cli-script                     │
│   │   └── [no options]                   │   └── runtime: node|python|go    │
│   │                                      │                                  │
│   ├── embedded                           ├── cli-tool                       │
│   │   ├── db: sqlite|turso|duckdb        │   ├── runtime: node|python|go    │
│   │   └── auth: nextauth|clerk|none      │   └── framework: commander|typer │
│   │                                      │                                  │
│   ├── fullstack-js                       └── cli-tui                        │
│   │   ├── db: postgresql|mysql               ├── runtime: node|python|go    │
│   │   └── auth: nextauth|clerk|lucia         └── framework: ink|textual     │
│   │                                                                         │
│   ├── baas                                                                  │
│   │   └── provider: supabase|firebase                                       │
│   │                                                                         │
│   └── microservice                                                          │
│       ├── backend: fastapi|django                                           │
│       └── db: postgresql|mysql                                              │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 4. Categories & Presets

### 4.1 Category Definitions

| Category | Description | Presets |
|----------|-------------|---------|
| `web` | Browser-based applications | static, embedded, fullstack-js, baas, microservice |
| `cli` | Command-line tools | cli-script, cli-tool, cli-tui |

### 4.2 Preset Summary

| Category | Preset | Pattern | Deployables | Use Case |
|----------|--------|---------|-------------|----------|
| **web** | `static` | jamstack | 1 | Content sites, no backend |
| **web** | `embedded` | monolith | 1 | Simple persistence, low traffic |
| **web** | `fullstack-js` | monolith | 2 | Standard CRUD (DEFAULT) |
| **web** | `baas` | monolith | 2 | Realtime features |
| **web** | `microservice` | distributed | 3 | Python/ML backend |
| **cli** | `cli-script` | script | 1 file | Quick utilities |
| **cli** | `cli-tool` | package | npm/pip | Installable tools |
| **cli** | `cli-tui` | application | binary | Terminal UIs |

### 4.3 Complexity Ladders

**Web:**
```
static → embedded → fullstack-js → baas → microservice
  (1)      (1)          (2)         (2)        (3)      ← deployables
```

**CLI:**
```
cli-script → cli-tool → cli-tui
   (1 file)    (5-20)    (20+)   ← files
```

---

## 5. Web Presets

### 5.1 Preset: `static`

**When:** No backend logic, no database, content-only

```yaml
static:
  category: web
  pattern: jamstack
  tier: single
  deployables: 1
  
  stack:
    frontend:
      framework: nextjs
      mode: static-export
      language: typescript
      styling: tailwind
    backend: null
    database: null
    auth: null
    
  options: {}  # No options for static
    
  deploy:
    frontend: vercel
```

**Examples:** Landing page, documentation, portfolio

---

### 5.2 Preset: `embedded`

**When:** Need persistence, but not a full database service

```yaml
embedded:
  category: web
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
    database:
      default: sqlite
    auth:
      default: nextauth
      optional: true
      
  options:
    database:
      sqlite:
        default: true
        orm: drizzle
        description: "General purpose embedded database"
        use_when:
          - General CRUD operations
          - Single-region deployment
        signals: []
        
      turso:
        default: false
        orm: drizzle
        description: "Distributed SQLite for edge"
        use_when:
          - Edge deployment
          - Multi-region needed
          - Vercel deployment
        signals:
          - edge
          - global
          - distributed
          - multi-region
          
      d1:
        default: false
        orm: drizzle
        description: "Cloudflare's SQLite"
        use_when:
          - Cloudflare ecosystem
        signals:
          - cloudflare
          - workers
          
      duckdb:
        default: false
        orm: drizzle
        description: "Analytics-focused embedded DB"
        use_when:
          - Analytics workloads
          - Read-heavy queries
          - CSV/Parquet processing
        signals:
          - analytics
          - dashboard
          - reports
          - csv
          - parquet
          - olap
          
      lowdb:
        default: false
        orm: null
        description: "Simple JSON file storage"
        use_when:
          - Tiny applications
          - Prototype/POC
        signals:
          - prototype
          - tiny
          - json
          
    auth:
      nextauth:
        default: true
        description: "Self-hosted, flexible auth"
        use_when:
          - Standard auth needs
          - Multiple providers
        signals: []
        
      clerk:
        default: false
        description: "Managed auth with drop-in UI"
        use_when:
          - Prefer managed solution
          - Want pre-built UI
        signals:
          - managed auth
          - drop-in
          - dont want to build auth
          
      none:
        default: false
        description: "No authentication"
        use_when:
          - Public app
          - No user accounts
        signals:
          - no auth
          - public
    
  deploy:
    frontend: vercel
```

**Examples:** Personal tools, local-first apps, analytics dashboards

---

### 5.3 Preset: `fullstack-js`

**When:** Standard web app with auth, CRUD, managed database

**This is the DEFAULT preset for web apps.**

```yaml
fullstack-js:
  category: web
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
    database:
      default: postgresql
      orm: prisma
    auth:
      default: nextauth
      
  options:
    database:
      postgresql:
        default: true
        orm: prisma
        host: neon
        description: "Standard PostgreSQL"
        use_when:
          - General purpose
          - ACID compliance needed
        signals: []
        
      mysql:
        default: false
        orm: prisma
        host: planetscale
        description: "MySQL compatible"
        use_when:
          - MySQL ecosystem
          - PlanetScale preference
        signals:
          - mysql
          - planetscale
          
    auth:
      nextauth:
        default: true
        description: "Self-hosted, flexible"
        signals: []
        
      clerk:
        default: false
        description: "Managed auth"
        signals:
          - managed auth
          - drop-in
          
      lucia:
        default: false
        description: "Lightweight, self-hosted"
        signals:
          - lightweight
          - minimal
          - simple auth
    
  deploy:
    frontend: vercel
    database: neon
```

**Examples:** Todo app, blog platform, SaaS MVP, dashboard

---

### 5.4 Preset: `baas`

**When:** Realtime is core, or want managed backend bundle

```yaml
baas:
  category: web
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
      default: supabase
    database:
      type: postgresql
      orm: supabase-js
    auth:
      provider: supabase-auth
      
  options:
    backend:
      supabase:
        default: true
        description: "Open source Firebase alternative"
        features:
          - auth
          - database
          - storage
          - realtime
          - edge-functions
        use_when:
          - Open source preference
          - PostgreSQL preference
        signals: []
        
      firebase:
        default: false
        description: "Google's BaaS platform"
        features:
          - auth
          - firestore
          - storage
          - realtime
          - functions
        use_when:
          - Google ecosystem
          - NoSQL preference
        signals:
          - firebase
          - google
          - firestore
    
  deploy:
    frontend: vercel
    backend: supabase
```

**Examples:** Chat app, collaborative tool, realtime dashboard

---

### 5.5 Preset: `microservice`

**When:** Need Python, ML, heavy compute, or separate services

```yaml
microservice:
  category: web
  pattern: distributed
  tier: three
  deployables: 3
  
  stack:
    frontend:
      framework: nextjs
      mode: app-router
      language: typescript
      styling: tailwind
    backend:
      default: fastapi
      runtime: python
      version: "3.11"
    database:
      default: postgresql
      orm: sqlalchemy
    auth:
      provider: jwt
      
  options:
    backend:
      fastapi:
        default: true
        description: "Modern, fast Python framework"
        use_when:
          - API-first design
          - High performance needed
          - Modern Python
        signals: []
        
      django:
        default: false
        description: "Batteries-included Python framework"
        use_when:
          - Admin interface needed
          - ORM preference
          - Rapid development
        signals:
          - django
          - admin
          - batteries included
          
    database:
      postgresql:
        default: true
        orm: sqlalchemy
        host: neon
        signals: []
        
      mysql:
        default: false
        orm: sqlalchemy
        host: planetscale
        signals:
          - mysql
    
  deploy:
    frontend: vercel
    backend: railway
    database: neon
```

**Examples:** AI/ML app, data platform, complex business logic

---

## 6. CLI Presets

### 6.1 Preset: `cli-script`

**When:** Quick utility, single-purpose, run directly

```yaml
cli-script:
  category: cli
  pattern: script
  tier: single
  files: 1-3
  
  stack:
    runtime:
      default: node
    language:
      default: typescript
    runner:
      default: tsx
      
  options:
    runtime:
      node:
        default: true
        language: typescript
        runner: tsx
        description: "Node.js with TypeScript"
        signals: []
        
      python:
        default: false
        language: python
        runner: python
        description: "Python script"
        signals:
          - python
          - py
          
      deno:
        default: false
        language: typescript
        runner: deno
        description: "Deno runtime"
        signals:
          - deno
          
      bun:
        default: false
        language: typescript
        runner: bun
        description: "Bun runtime"
        signals:
          - bun
          - fast
          
  distribution: null
```

**Examples:** File renamer, JSON transformer, API caller

---

### 6.2 Preset: `cli-tool`

**When:** Reusable tool, needs installation, multiple commands

```yaml
cli-tool:
  category: cli
  pattern: package
  tier: single
  files: 5-20
  
  stack:
    runtime:
      default: node
    language:
      default: typescript
    framework:
      default: commander
    bundler:
      default: tsup
      
  options:
    runtime:
      node:
        default: true
        language: typescript
        frameworks:
          - commander
          - yargs
          - oclif
        signals: []
        
      python:
        default: false
        language: python
        frameworks:
          - typer
          - click
        signals:
          - python
          
      go:
        default: false
        language: go
        frameworks:
          - cobra
        signals:
          - go
          - golang
          - single binary
          
      rust:
        default: false
        language: rust
        frameworks:
          - clap
        signals:
          - rust
          - performance
          
    framework:
      commander:
        default: true
        runtime: node
        description: "Simple, popular CLI framework"
        signals: []
        
      yargs:
        default: false
        runtime: node
        description: "Feature-rich argument parsing"
        signals:
          - complex args
          - many options
          
      oclif:
        default: false
        runtime: node
        description: "Framework for large CLIs"
        signals:
          - plugins
          - enterprise
          - extensible
          
      typer:
        default: true
        runtime: python
        description: "Modern Python CLI with type hints"
        signals:
          - python
          
      click:
        default: false
        runtime: python
        description: "Decorator-based Python CLI"
        signals:
          - python
          - flask
          
      cobra:
        default: true
        runtime: go
        description: "Standard Go CLI framework"
        signals:
          - go
          
      clap:
        default: true
        runtime: rust
        description: "Rust CLI with derive macros"
        signals:
          - rust
          
  distribution:
    npm: true
    binary: false
```

**Examples:** CLI for API, dev tooling, project generators

---

### 6.3 Preset: `cli-tui`

**When:** Interactive terminal UI, rich display, keyboard navigation

```yaml
cli-tui:
  category: cli
  pattern: application
  tier: single
  files: 20+
  
  stack:
    runtime:
      default: node
    language:
      default: typescript
    framework:
      default: ink
    bundler:
      default: tsup
      
  options:
    runtime:
      node:
        default: true
        language: typescript
        frameworks:
          - ink
          - blessed
        signals: []
        
      python:
        default: false
        language: python
        frameworks:
          - textual
          - rich
        signals:
          - python
          
      go:
        default: false
        language: go
        frameworks:
          - bubbletea
          - tview
        signals:
          - go
          
      rust:
        default: false
        language: rust
        frameworks:
          - ratatui
        signals:
          - rust
          
    framework:
      ink:
        default: true
        runtime: node
        description: "React for CLI"
        signals: []
        
      blessed:
        default: false
        runtime: node
        description: "Low-level terminal UI"
        signals:
          - low level
          - curses
          
      textual:
        default: true
        runtime: python
        description: "Modern Python TUI"
        signals:
          - python
          
      bubbletea:
        default: true
        runtime: go
        description: "Elm-inspired Go TUI"
        signals:
          - go
          
      ratatui:
        default: true
        runtime: rust
        description: "Rust terminal UI"
        signals:
          - rust
          
  distribution:
    npm: true
    binary: optional
```

**Examples:** File manager, git TUI, dashboard

---

## 7. Option Selection

### 7.1 Selection Hierarchy

```
┌─────────────────────────────────────────────────────────────┐
│                  SELECTION HIERARCHY                        │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  Priority 1: EXPLICIT OVERRIDE                              │
│              --db=duckdb, --auth=clerk                      │
│                         │                                   │
│                         ▼                                   │
│  Priority 2: CONFIG OVERRIDE                                │
│              preferences.yaml: stack.database.type: mysql   │
│                         │                                   │
│                         ▼                                   │
│  Priority 3: SIGNAL MATCH                                   │
│              "analytics dashboard" → duckdb                 │
│                         │                                   │
│                         ▼                                   │
│  Priority 4: PRESET DEFAULT                                 │
│              embedded.database.default: sqlite              │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### 7.2 Signal Definitions

#### Database Signals

| Signal | Keywords | Triggers |
|--------|----------|----------|
| `analytics` | analytics, dashboard, reports, metrics, OLAP | → duckdb |
| `csv_data` | CSV, parquet, data files, import | → duckdb |
| `edge` | edge, global, distributed, multi-region | → turso |
| `cloudflare` | cloudflare, workers, D1 | → d1 |
| `mysql` | mysql, planetscale, mariadb | → mysql |
| `prototype` | prototype, tiny, simple, POC | → lowdb |

#### Auth Signals

| Signal | Keywords | Triggers |
|--------|----------|----------|
| `managed_auth` | managed, drop-in, dont want to build auth | → clerk |
| `lightweight` | lightweight, minimal, simple auth | → lucia |
| `no_auth` | no auth, public, no users | → none |

#### Framework Signals (CLI)

| Signal | Keywords | Triggers |
|--------|----------|----------|
| `python` | python, py | → typer/textual |
| `go` | go, golang, single binary | → cobra/bubbletea |
| `rust` | rust, performance | → clap/ratatui |
| `plugins` | plugins, extensible, enterprise | → oclif |
| `complex_args` | complex args, many options | → yargs |

#### Backend Signals (Microservice)

| Signal | Keywords | Triggers |
|--------|----------|----------|
| `django` | django, admin, batteries | → django |

#### BaaS Signals

| Signal | Keywords | Triggers |
|--------|----------|----------|
| `firebase` | firebase, google, firestore | → firebase |

### 7.3 Option Selection Algorithm

```
FOR each stack layer WITH options:

  1. CHECK explicit override (--flag=value)
     → IF present: USE override, CONTINUE to next layer
     
  2. CHECK config override (preferences.yaml)
     → IF present: USE override, CONTINUE to next layer
     
  3. SCAN idea for signal keywords
     → COLLECT matching signals
     
  4. MATCH signals to options
     → IF one option matches: USE it
     → IF multiple match: USE highest priority (first in list)
     → IF none match: USE default
     
  5. VALIDATE compatibility
     → CHECK option works with deploy target
     → CHECK option works with other selections
     
  6. LOG selection with rationale
```

---

## 8. KISS Selection Algorithm

### 8.1 Master Decision Flow

```
                              START
                                │
                                ▼
                    ┌───────────────────────┐
                    │ Extract ALL signals   │
                    │ (Founder-Advisor)     │
                    └───────────────────────┘
                                │
                                ▼
                    ┌───────────────────────┐
                    │ Select PRESET (KISS)  │
                    │ (Enterprise Architect)│
                    └───────────────────────┘
                                │
                                ▼
                    ┌───────────────────────┐
                    │ Select OPTIONS        │
                    │ (Enterprise Architect)│
                    └───────────────────────┘
                                │
                                ▼
                    ┌───────────────────────┐
                    │ COMPLETE STACK        │
                    │ RECOMMENDATION        │
                    └───────────────────────┘
                                │
                ┌───────────────┴───────────────┐
                │                               │
           HITL MODE                       TURBO MODE
                │                               │
                ▼                               ▼
        👤 Human Reviews                 ⚡ Auto-accept
        • Accept                          Proceed
        • Modify
        • Override
                │                               │
                └───────────────┬───────────────┘
                                │
                                ▼
                    🔒 ARCHITECTURE LOCKED
```

### 8.2 Preset Selection: Decision Tree

```
START
  │
  ▼
┌─────────────────────────────────────────┐
│ Is this a CLI/terminal application?     │
└─────────────────────────────────────────┘
  │
  ├── YES ──→ CLI DECISION TREE
  │
  └── NO ──→ WEB DECISION TREE
```

#### CLI Decision Tree

```
CLI CATEGORY
  │
  ├── Interactive TUI needed?
  │   └── YES → cli-tui
  │   └── NO ↓
  │
  ├── Multiple commands / installable?
  │   └── YES → cli-tool
  │   └── NO → cli-script
```

#### Web Decision Tree

```
WEB CATEGORY
  │
  ├── Needs persistent data?
  │   └── NO → static
  │   └── YES ↓
  │
  ├── Needs Python/ML/compute?
  │   └── YES → microservice
  │   └── NO ↓
  │
  ├── Realtime is CORE feature?
  │   └── YES → baas
  │   └── NO ↓
  │
  ├── Multi-user / high availability?
  │   └── YES → fullstack-js
  │   └── NO → embedded
```

### 8.3 Complete Flowchart

```
                                START
                                  │
                                  ▼
                         ┌───────────────┐
                         │   CLI app?    │
                         └───────────────┘
                                  │
                    ┌─────────────┴─────────────┐
                   YES                          NO
                    │                           │
                    ▼                           ▼
           ┌───────────────┐           ┌───────────────┐
           │ Interactive   │           │   Needs DB?   │
           │    TUI?       │           └───────────────┘
           └───────────────┘                   │
                    │                 ┌────────┴────────┐
           ┌───────┴───────┐         NO                YES
          YES              NO         │                 │
           │               │          ▼                 ▼
           ▼               ▼     ┌─────────┐    ┌───────────────┐
      ┌─────────┐   ┌───────────┐│ STATIC  │    │  Python/ML?   │
      │ CLI-TUI │   │ Multiple  │└─────────┘    └───────────────┘
      └─────────┘   │ commands? │                       │
                    └───────────┘              ┌────────┴────────┐
                           │                  YES               NO
                  ┌────────┴────────┐          │                 │
                 YES               NO          ▼                 ▼
                  │                 │    ┌─────────────┐  ┌───────────────┐
                  ▼                 ▼    │MICROSERVICE │  │   Realtime?   │
             ┌──────────┐   ┌───────────┐└─────────────┘  └───────────────┘
             │ CLI-TOOL │   │CLI-SCRIPT │                        │
             └──────────┘   └───────────┘               ┌────────┴────────┐
                                                       YES               NO
                                                        │                 │
                                                        ▼                 ▼
                                                   ┌─────────┐    ┌───────────────┐
                                                   │  BAAS   │    │  Multi-user?  │
                                                   └─────────┘    └───────────────┘
                                                                         │
                                                                ┌────────┴────────┐
                                                               YES               NO
                                                                │                 │
                                                                ▼                 ▼
                                                          ┌─────────────┐  ┌──────────┐
                                                          │FULLSTACK-JS │  │ EMBEDDED │
                                                          └─────────────┘  └──────────┘
```

---

## 9. Override Mechanisms

### 9.49 command-Line Overrides

```bash
# Override preset
/ts-turbo my-app "idea" --preset=microservice

# Override category
/ts-turbo my-app "idea" --category=cli

# Override database
/ts-turbo my-app "idea" --db=mysql
/ts-turbo my-app "idea" --db=duckdb

# Override auth
/ts-turbo my-app "idea" --auth=clerk

# Override runtime (CLI)
/ts-turbo my-cli "tool" --runtime=python

# Override framework
/ts-turbo my-cli "tool" --framework=typer

# Combine
/ts-turbo my-app "idea" --preset=fullstack-js --db=mysql --auth=clerk
```

### 9.2 Config Override

```yaml
# preferences.yaml

architecture:
  # Lock to specific preset
  # preset: microservice
  
  # Enable KISS auto-selection
  auto_select: true
  
  # Stack overrides (apply to any preset)
  stack:
    database:
      type: mysql
    auth:
      provider: clerk
```

### 9.3 Override Priority

```
1. Command flag           --db=duckdb              (highest)
         │
         ▼
2. Config override        preferences.yaml
         │
         ▼
3. Signal match           "analytics" → duckdb
         │
         ▼
4. Preset default         sqlite                   (lowest)
```

---

## 10. Workflow Integration

### 10.1 Complete Selection Flow

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                              USER INPUT                                      │
├─────────────────────────────────────────────────────────────────────────────┤
│  /ts-turbo my-app "Analytics dashboard for CSV data"                        │
│  Optional: --preset=X, --db=Y, --auth=Z                                     │
└─────────────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                         PHASE 0: SETUP                                       │
├─────────────────────────────────────────────────────────────────────────────┤
│  1. Parse command arguments                                                  │
│  2. Read preferences.yaml                                                    │
│  3. Apply command-line overrides                                             │
│  4. Create PROJECT.md from template                                          │
└─────────────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                         FOUNDER-ADVISOR                                      │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  Extracts ALL signals:                                                       │
│                                                                             │
│  PRESET SIGNALS:                                                             │
│  ┌────────────────────────────────────────────────────────────────────┐     │
│  │ • persistent_data: Yes (dashboard implies saving)                  │     │
│  │ • python_ml_compute: No                                            │     │
│  │ • realtime_core: No                                                │     │
│  │ • multi_user_ha: No                                                │     │
│  └────────────────────────────────────────────────────────────────────┘     │
│                                                                             │
│  OPTION SIGNALS:                                                             │
│  ┌────────────────────────────────────────────────────────────────────┐     │
│  │ • analytics: Yes ("analytics dashboard")                           │     │
│  │ • csv_data: Yes ("CSV data")                                       │     │
│  │ • managed_auth: No                                                 │     │
│  │ • edge: No                                                         │     │
│  └────────────────────────────────────────────────────────────────────┘     │
│                                                                             │
│  Output: Strategic Assessment + All Signals                                  │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                       ENTERPRISE ARCHITECT                                   │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  STEP 1: Check for preset override                                           │
│    • --preset flag? → Use it, skip KISS                                      │
│    • config preset lock? → Use it, skip KISS                                 │
│                                                                             │
│  STEP 2: KISS Preset Selection                                               │
│    • persistent_data=Yes, others=No → embedded                               │
│                                                                             │
│  STEP 3: Option Selection                                                    │
│    ┌──────────────────────────────────────────────────────────────────┐     │
│    │ DATABASE:                                                        │     │
│    │   • Default: sqlite                                              │     │
│    │   • Signals: analytics=Yes, csv_data=Yes                         │     │
│    │   • Match: duckdb (has analytics, csv signals)                   │     │
│    │   • Selected: duckdb ✓                                           │     │
│    │                                                                  │     │
│    │ AUTH:                                                            │     │
│    │   • Default: nextauth                                            │     │
│    │   • Signals: managed_auth=No                                     │     │
│    │   • Match: none                                                  │     │
│    │   • Selected: nextauth (default) ✓                               │     │
│    └──────────────────────────────────────────────────────────────────┘     │
│                                                                             │
│  STEP 4: Validate & Output Complete Stack                                    │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                    EA STACK RECOMMENDATION                                   │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  ┌────────────────────────────────────────────────────────────────────┐     │
│  │  STACK RECOMMENDATION                                              │     │
│  ├────────────────────────────────────────────────────────────────────┤     │
│  │                                                                    │     │
│  │  Preset:    embedded (single deployable)                           │     │
│  │                                                                    │     │
│  │  Frontend:  Next.js 14 + TypeScript + Tailwind                     │     │
│  │  Backend:   Next.js API Routes                                     │     │
│  │  Database:  DuckDB + Drizzle                                       │     │
│  │  Auth:      NextAuth.js                                            │     │
│  │  Deploy:    Vercel                                                 │     │
│  │                                                                    │     │
│  ├────────────────────────────────────────────────────────────────────┤     │
│  │  WHY THIS STACK                                                    │     │
│  ├────────────────────────────────────────────────────────────────────┤     │
│  │  • Preset: embedded (simple persistence, low traffic)              │     │
│  │  • DuckDB: Optimized for analytics + CSV processing                │     │
│  │  • NextAuth: Default, no managed auth signal detected              │     │
│  └────────────────────────────────────────────────────────────────────┘     │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
                                    │
                        ┌───────────┴───────────┐
                        │                       │
                   HITL MODE               TURBO MODE
                        │                       │
                        ▼                       ▼
┌───────────────────────────────────┐ ┌───────────────────────────────────┐
│       👤 Human Reviews            │ │       ⚡ Auto-accept              │
│                                   │ │                                   │
│  Options:                         │ │  Proceeding with recommendation   │
│  • /ts-approve architecture-lock  │ │                                   │
│  • "Change to PostgreSQL"         │ │                                   │
│  • --db=sqlite override           │ │                                   │
└───────────────────────────────────┘ └───────────────────────────────────┘
                        │                       │
                        └───────────┬───────────┘
                                    │
                                    ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                      🔒 ARCHITECTURE LOCKED                                  │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  PROJECT.md updated with:                                                    │
│  • Complete stack configuration                                              │
│  • Selection rationale                                                       │
│  • Active/skipped agents list                                                │
│                                                                             │
│  Downstream agents read PROJECT.md and adapt behavior                        │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 10.2 HITL Interaction Example

```
🏗️ Enterprise Architect:

I recommend the following stack for your analytics dashboard:

┌─────────────────────────────────────────────────────────────┐
│  STACK RECOMMENDATION                                       │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  Preset:    embedded (single deployable)                    │
│                                                             │
│  Frontend:  Next.js 14 + TypeScript + Tailwind              │
│  Backend:   Next.js API Routes                              │
│  Database:  DuckDB + Drizzle                                │
│  Auth:      NextAuth.js                                     │
│  Deploy:    Vercel                                          │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│  WHY THESE CHOICES                                          │
├─────────────────────────────────────────────────────────────┤
│  • embedded: Simple persistence, single deployable          │
│  • DuckDB: Detected "analytics" + "CSV" → optimized for     │
│            analytical queries and CSV processing            │
│  • NextAuth: Default (no managed auth preference detected)  │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│  ALTERNATIVES CONSIDERED                                    │
├─────────────────────────────────────────────────────────────┤
│  Database:                                                  │
│  • SQLite - General purpose, but not analytics-optimized    │
│  • Turso - Edge-focused, not needed here                    │
│                                                             │
│  Auth:                                                      │
│  • Clerk - Would choose if "managed auth" was mentioned     │
│                                                             │
└─────────────────────────────────────────────────────────────┘

Options:
  /ts-approve architecture-lock          → Accept this stack
  /ts-approve architecture-lock --db=sqlite    → Override database
  "I prefer Clerk for auth"              → I'll revise recommendation
  "Actually need PostgreSQL"             → I'll switch to fullstack-js
```

### 10.3 Turbo Mode Output

```
🏗️ Enterprise Architect:

┌─────────────────────────────────────────────────────────────┐
│  ⚡ STACK SELECTED (Turbo Mode)                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  Preset:    embedded                                        │
│  Database:  DuckDB (analytics + csv signals detected)       │
│  Auth:      NextAuth (default)                              │
│  Deploy:    Vercel                                          │
│                                                             │
│  Proceeding to architecture design...                       │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## 11. Implementation Plan

### 11.1 Phase Overview

```
┌──────────────────────────────────────────────────────────────────────────────┐
│                          IMPLEMENTATION PHASES                                │
├──────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  PHASE 1              PHASE 2              PHASE 3              PHASE 4      │
│  ────────             ────────             ────────             ────────     │
│  Config               Agents               Commands             Templates    │
│  (foundation)         (brains)             (interface)          (output)     │
│                                                                              │
│  • presets.yaml       • founder-advisor    • ts-turbo           • TEMPLATE   │
│  • preferences.yaml   • enterprise-arch    • ts-new-project     • output     │
│                       • all dev agents     • ts-approve           structures │
│                                                                              │
│  Week 1               Week 2               Week 3               Week 4       │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
```

### 11.2 Phase 1: Configuration Layer

**Duration:** Week 1

| File | Action | Description |
|------|--------|-------------|
| `.claude/config/presets.yaml` | Create | All preset + option definitions |
| `.claude/config/preferences.yaml` | Update | Add architecture section |

### 11.3 Phase 2: Agent Updates

**Duration:** Week 2

| Agent | Changes |
|-------|---------|
| `founder-advisor` | Add preset + option signal extraction |
| `enterprise-architect` | Add KISS selection + option selection + stack recommendation |
| `database-developer` | Add skip logic + stack adaptation |
| `backend-developer` | Add skip logic + stack adaptation |
| `frontend-developer` | Add skip logic + stack adaptation |
| `integration-engineer` | Add tier awareness |
| `devops-engineer` | Add skip logic |
| `qa-engineer` | Add skip logic |
| `technical-writer` | Add preset awareness |

### 11.4 Phase 3: Command Updates

**Duration:** Week 3

| Command | Changes |
|---------|---------|
| `ts-turbo` | Add --preset, --db, --auth, --runtime, --framework flags |
| `ts-new-project` | Add --preset flag |
| `ts-approve` | Support override at architecture gates |

### 11.5 Phase 4: Template Updates

**Duration:** Week 4

| File | Changes |
|------|---------|
| `TEMPLATE.md` | Add Architecture section with selection log |
| Output structures | Document per-preset output structures |

---

## 12. File Specifications

### 12.1 presets.yaml (Complete)

**Location:** `.claude/config/presets.yaml`

```yaml
# ============================================================================
# THE SYSTEM - Architecture Presets
# ============================================================================
# Defines all presets with their options and selection signals.
# Enterprise Architect reads this to make stack recommendations.
# ============================================================================

presets:

  # ==========================================================================
  # WEB PRESETS
  # ==========================================================================

  static:
    category: web
    pattern: jamstack
    tier: single
    deployables: 1
    description: "Static site with no backend or database"
    
    use_when:
      - No user accounts or authentication
      - No persistent data storage
      - Content-only (marketing, docs, portfolio)
    
    signals:
      negative:
        - persistent_data
        - auth
        - database
    
    stack:
      frontend:
        framework: nextjs
        version: "14"
        mode: static-export
        language: typescript
        styling: tailwind
      backend: null
      database: null
      auth: null
    
    options: {}
    
    deploy:
      frontend: vercel
    
    structure:
      root: /
      frontend: src/app
    
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
        - devops-engineer
        - qa-engineer

  # --------------------------------------------------------------------------
  
  embedded:
    category: web
    pattern: monolith
    tier: single
    deployables: 1
    description: "Web app with embedded database"
    
    use_when:
      - Simple persistence needs
      - Low to medium traffic
      - Single-user or small user base
    
    signals:
      positive:
        - persistent_data
      negative:
        - python_ml_compute
        - realtime_core
        - multi_user_ha
    
    stack:
      frontend:
        framework: nextjs
        version: "14"
        mode: app-router
        language: typescript
        styling: tailwind
      backend:
        runtime: node
        framework: nextjs-api-routes
        location: src/app/api
      database:
        default: sqlite
        orm_default: drizzle
      auth:
        default: nextauth
        optional: true
    
    options:
      database:
        sqlite:
          default: true
          orm: drizzle
          host: local
          description: "General purpose embedded database"
          use_when:
            - General CRUD operations
            - Single-region deployment
          signals: []
          
        turso:
          default: false
          orm: drizzle
          host: turso
          description: "Distributed SQLite for edge"
          use_when:
            - Edge deployment
            - Multi-region needed
          signals:
            - edge
            - global
            - distributed
            - multi-region
            - vercel edge
            
        d1:
          default: false
          orm: drizzle
          host: cloudflare
          description: "Cloudflare's SQLite"
          use_when:
            - Cloudflare ecosystem
          signals:
            - cloudflare
            - workers
            - d1
            
        duckdb:
          default: false
          orm: drizzle
          host: local
          description: "Analytics-focused embedded DB"
          use_when:
            - Analytics workloads
            - Read-heavy queries
            - CSV/Parquet processing
          signals:
            - analytics
            - dashboard
            - reports
            - csv
            - parquet
            - olap
            - data processing
            
        lowdb:
          default: false
          orm: null
          host: local
          description: "Simple JSON file storage"
          use_when:
            - Tiny applications
            - Prototype/POC
          signals:
            - prototype
            - tiny
            - json
            - poc
            
      auth:
        nextauth:
          default: true
          description: "Self-hosted, flexible auth"
          use_when:
            - Standard auth needs
            - Multiple providers
          signals: []
          
        clerk:
          default: false
          description: "Managed auth with drop-in UI"
          use_when:
            - Prefer managed solution
            - Want pre-built UI components
          signals:
            - managed auth
            - drop-in
            - dont want to build auth
            - hosted auth
            
        none:
          default: false
          description: "No authentication"
          use_when:
            - Public app
            - No user accounts needed
          signals:
            - no auth
            - public
            - no users
            - no login
    
    deploy:
      frontend: vercel
    
    structure:
      root: /
      frontend: src/app
      api: src/app/api
      database: db
    
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
        - qa-engineer

  # --------------------------------------------------------------------------
  
  fullstack-js:
    category: web
    pattern: monolith
    tier: two
    deployables: 2
    default: true
    description: "Full-stack JavaScript with managed PostgreSQL"
    
    use_when:
      - Standard CRUD applications
      - Multi-user with concurrent access
      - Need managed database service
    
    signals:
      positive:
        - persistent_data
        - multi_user_ha
      negative:
        - python_ml_compute
        - realtime_core
    
    stack:
      frontend:
        framework: nextjs
        version: "14"
        mode: app-router
        language: typescript
        styling: tailwind
        state: zustand
        data-fetching: tanstack-query
      backend:
        runtime: node
        framework: nextjs-api-routes
        location: src/app/api
      database:
        default: postgresql
        orm_default: prisma
      auth:
        default: nextauth
    
    options:
      database:
        postgresql:
          default: true
          orm: prisma
          host: neon
          description: "Standard PostgreSQL"
          use_when:
            - General purpose
            - ACID compliance needed
          signals: []
          
        mysql:
          default: false
          orm: prisma
          host: planetscale
          description: "MySQL compatible"
          use_when:
            - MySQL ecosystem preference
            - PlanetScale preference
          signals:
            - mysql
            - planetscale
            - mariadb
            
      auth:
        nextauth:
          default: true
          description: "Self-hosted, flexible"
          signals: []
          
        clerk:
          default: false
          description: "Managed auth with UI"
          signals:
            - managed auth
            - drop-in
            - hosted auth
            
        lucia:
          default: false
          description: "Lightweight, minimal"
          signals:
            - lightweight
            - minimal
            - simple auth
    
    deploy:
      frontend: vercel
      database: neon
    
    structure:
      root: /
      frontend: src/app
      api: src/app/api
      database: prisma
      components: src/components
      lib: src/lib
    
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
        - devops-engineer

  # --------------------------------------------------------------------------
  
  baas:
    category: web
    pattern: monolith
    tier: two
    deployables: 2
    description: "Backend-as-a-Service (Supabase/Firebase)"
    
    use_when:
      - Realtime is a core feature
      - Need auth + database + storage bundle
      - Chat, collaboration, live features
    
    signals:
      positive:
        - persistent_data
        - realtime_core
    
    stack:
      frontend:
        framework: nextjs
        version: "14"
        mode: app-router
        language: typescript
        styling: tailwind
      backend:
        default: supabase
      database:
        type: postgresql
        orm_default: supabase-js
      auth:
        default: supabase-auth
    
    options:
      backend:
        supabase:
          default: true
          description: "Open source Firebase alternative"
          features:
            - auth
            - database
            - storage
            - realtime
            - edge-functions
          use_when:
            - Open source preference
            - PostgreSQL preference
          signals: []
          
        firebase:
          default: false
          description: "Google's BaaS platform"
          features:
            - auth
            - firestore
            - storage
            - realtime
            - functions
          use_when:
            - Google ecosystem
            - NoSQL preference
          signals:
            - firebase
            - google
            - firestore
            - gcp
    
    deploy:
      frontend: vercel
      backend: supabase
    
    structure:
      root: /
      frontend: src/app
      supabase: supabase
      migrations: supabase/migrations
      functions: supabase/functions
    
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
        - devops-engineer

  # --------------------------------------------------------------------------
  
  microservice:
    category: web
    pattern: distributed
    tier: three
    deployables: 3
    description: "Distributed architecture with Python backend"
    
    use_when:
      - Need Python ecosystem (ML, data science)
      - Heavy backend computation
      - Complex business logic
    
    signals:
      positive:
        - persistent_data
        - python_ml_compute
    
    stack:
      frontend:
        framework: nextjs
        version: "14"
        mode: app-router
        language: typescript
        styling: tailwind
        state: zustand
        data-fetching: tanstack-query
      backend:
        default: fastapi
        runtime: python
        version: "3.11"
      database:
        default: postgresql
        orm_default: sqlalchemy
      auth:
        provider: jwt
    
    options:
      backend:
        fastapi:
          default: true
          description: "Modern, fast Python framework"
          use_when:
            - API-first design
            - High performance
            - Modern Python
          signals: []
          
        django:
          default: false
          description: "Batteries-included framework"
          use_when:
            - Admin interface needed
            - Rapid development
          signals:
            - django
            - admin
            - batteries
            
      database:
        postgresql:
          default: true
          orm: sqlalchemy
          host: neon
          signals: []
          
        mysql:
          default: false
          orm: sqlalchemy
          host: planetscale
          signals:
            - mysql
    
    deploy:
      frontend: vercel
      backend: railway
      database: neon
    
    structure:
      root: /
      frontend: src/frontend
      backend: src/backend
      infra: infra
    
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
      skipped: []

  # ==========================================================================
  # CLI PRESETS
  # ==========================================================================

  cli-script:
    category: cli
    pattern: script
    tier: single
    files: 1-3
    description: "Single-file CLI script"
    
    use_when:
      - Quick one-off utility
      - Single purpose tool
      - No installation needed
    
    signals:
      positive:
        - cli
      negative:
        - multiple_commands
        - interactive_tui
    
    stack:
      runtime:
        default: node
      language:
        default: typescript
      runner:
        default: tsx
    
    options:
      runtime:
        node:
          default: true
          language: typescript
          runner: tsx
          description: "Node.js with TypeScript"
          signals: []
          
        python:
          default: false
          language: python
          runner: python
          description: "Python script"
          signals:
            - python
            - py
            
        deno:
          default: false
          language: typescript
          runner: deno
          description: "Deno runtime"
          signals:
            - deno
            
        bun:
          default: false
          language: typescript
          runner: bun
          description: "Bun runtime"
          signals:
            - bun
    
    distribution: null
    
    structure:
      root: /
      source: src
      entry: src/index.ts
    
    agents:
      used:
        - founder-advisor
        - enterprise-architect
        - backend-developer
        - technical-writer
      skipped:
        - database-developer
        - frontend-developer
        - integration-engineer
        - devops-engineer
        - qa-engineer

  # --------------------------------------------------------------------------
  
  cli-tool:
    category: cli
    pattern: package
    tier: single
    files: 5-20
    description: "Installable CLI tool with commands"
    
    use_when:
      - Reusable tool
      - Multiple subcommands
      - Needs global installation
    
    signals:
      positive:
        - cli
        - multiple_commands
      negative:
        - interactive_tui
    
    stack:
      runtime:
        default: node
      language:
        default: typescript
      framework:
        default: commander
      bundler:
        default: tsup
    
    options:
      runtime:
        node:
          default: true
          language: typescript
          frameworks:
            - commander
            - yargs
            - oclif
          signals: []
          
        python:
          default: false
          language: python
          frameworks:
            - typer
            - click
          signals:
            - python
            
        go:
          default: false
          language: go
          frameworks:
            - cobra
          signals:
            - go
            - golang
            - single binary
            
        rust:
          default: false
          language: rust
          frameworks:
            - clap
          signals:
            - rust
            - performance
            
      framework:
        commander:
          default: true
          runtime: node
          description: "Simple, popular CLI framework"
          signals: []
          
        yargs:
          default: false
          runtime: node
          description: "Feature-rich argument parsing"
          signals:
            - complex args
            - many options
            
        oclif:
          default: false
          runtime: node
          description: "Framework for large CLIs"
          signals:
            - plugins
            - enterprise
            - extensible
            
        typer:
          default: true
          runtime: python
          description: "Modern Python CLI"
          signals: []
          
        click:
          default: false
          runtime: python
          description: "Decorator-based Python CLI"
          signals:
            - flask style
            
        cobra:
          default: true
          runtime: go
          description: "Standard Go CLI framework"
          signals: []
          
        clap:
          default: true
          runtime: rust
          description: "Rust CLI with derive macros"
          signals: []
    
    distribution:
      npm: true
      binary: false
    
    structure:
      root: /
      source: src
      entry: src/index.ts
      commands: src/commands
      lib: src/lib
      bin: bin
    
    agents:
      used:
        - founder-advisor
        - enterprise-architect
        - backend-developer
        - qa-engineer
        - technical-writer
      skipped:
        - database-developer
        - frontend-developer
        - integration-engineer
        - devops-engineer

  # --------------------------------------------------------------------------
  
  cli-tui:
    category: cli
    pattern: application
    tier: single
    files: 20+
    description: "Interactive terminal UI application"
    
    use_when:
      - Interactive terminal interface
      - Rich visual display
      - Keyboard navigation
    
    signals:
      positive:
        - cli
        - interactive_tui
    
    stack:
      runtime:
        default: node
      language:
        default: typescript
      framework:
        default: ink
      bundler:
        default: tsup
    
    options:
      runtime:
        node:
          default: true
          language: typescript
          frameworks:
            - ink
            - blessed
          signals: []
          
        python:
          default: false
          language: python
          frameworks:
            - textual
            - rich
          signals:
            - python
            
        go:
          default: false
          language: go
          frameworks:
            - bubbletea
            - tview
          signals:
            - go
            
        rust:
          default: false
          language: rust
          frameworks:
            - ratatui
          signals:
            - rust
            
      framework:
        ink:
          default: true
          runtime: node
          description: "React for CLI"
          signals: []
          
        blessed:
          default: false
          runtime: node
          description: "Low-level terminal UI"
          signals:
            - low level
            - curses
            
        textual:
          default: true
          runtime: python
          description: "Modern Python TUI"
          signals: []
          
        bubbletea:
          default: true
          runtime: go
          description: "Elm-inspired Go TUI"
          signals: []
          
        ratatui:
          default: true
          runtime: rust
          description: "Rust terminal UI"
          signals: []
    
    distribution:
      npm: true
      binary: optional
    
    structure:
      root: /
      source: src
      entry: src/index.tsx
      components: src/components
      hooks: src/hooks
      lib: src/lib
      bin: bin
    
    agents:
      used:
        - founder-advisor
        - enterprise-architect
        - backend-developer
        - qa-engineer
        - technical-writer
      skipped:
        - database-developer
        - frontend-developer
        - integration-engineer
        - devops-engineer
```

---

### 12.2 preferences.yaml Additions

**Location:** `.claude/config/preferences.yaml`

```yaml
# ============================================================================
# ARCHITECTURE SELECTION
# ============================================================================
architecture:
  # Enable KISS auto-selection (default: true)
  auto_select: true
  
  # Default preset if auto-selection is ambiguous
  default_preset: fullstack-js
  
  # Lock to specific preset (uncomment to force)
  # preset: microservice
  
  # Stack overrides (apply to any preset)
  # stack:
  #   database:
  #     type: mysql
  #   auth:
  #     provider: clerk
  
  # CLI-specific overrides
  # cli:
  #   runtime: python
  #   framework: typer
```

---

### 12.3 Founder-Advisor Additions

**Location:** `.claude/agents/founder-advisor.md`

Add after existing analysis:

```markdown
---

## Signal Extraction

After analyzing the idea, extract signals for architecture selection.

### Preset Signals

| Signal | Question | Yes Indicators |
|--------|----------|----------------|
| `cli` | Is this a CLI app? | "CLI", "command line", "terminal", "script", "tool" |
| `persistent_data` | Needs to save data? | User accounts, saved content, CRUD |
| `python_ml_compute` | Needs Python/ML? | AI, ML, data processing, "Python" |
| `realtime_core` | Realtime is core? | Chat, collaboration, live updates |
| `multi_user_ha` | Multi-user/HA? | Many users, business-critical |
| `interactive_tui` | Interactive TUI? | "TUI", "interactive", "like htop" |
| `multiple_commands` | Multiple commands? | Subcommands, "install globally" |

### Option Signals

| Signal | Keywords |
|--------|----------|
| `analytics` | analytics, dashboard, reports, metrics, OLAP |
| `csv_data` | CSV, parquet, data files |
| `edge` | edge, global, distributed, multi-region |
| `cloudflare` | cloudflare, workers, D1 |
| `managed_auth` | managed auth, drop-in, hosted |
| `firebase` | firebase, google, firestore |
| `python` | python, py |
| `go` | go, golang, single binary |
| `rust` | rust, performance |

### Output Format

```markdown
## Technical Signals

### Preset Signals
| Signal | Value | Evidence |
|--------|-------|----------|
| cli | Yes/No | [evidence] |
| persistent_data | Yes/No | [evidence] |
| ... | ... | ... |

### Option Signals
| Signal | Detected | Evidence |
|--------|----------|----------|
| analytics | Yes/No | [evidence] |
| ... | ... | ... |
```
```

---

### 12.4 Enterprise Architect Additions

**Location:** `.claude/agents/enterprise-architect.md`

Add as Phase 0:

```markdown
---

## Phase 0: Stack Selection

### Step 1: Check Overrides

```
IF --preset flag exists:
  USE preset from flag
  SKIP to Step 3

IF preferences.yaml has architecture.preset:
  USE preset from config
  SKIP to Step 3
```

### Step 2: KISS Preset Selection

```
READ signals from Founder-Advisor

IF cli = Yes:
  IF interactive_tui = Yes: USE cli-tui
  ELIF multiple_commands = Yes: USE cli-tool
  ELSE: USE cli-script

ELSE (web):
  IF persistent_data = No: USE static
  ELIF python_ml_compute = Yes: USE microservice
  ELIF realtime_core = Yes: USE baas
  ELIF multi_user_ha = Yes: USE fullstack-js
  ELSE: USE embedded
```

### Step 3: Option Selection

```
FOR each option category in preset:
  
  1. CHECK --flag override → USE if present
  2. CHECK preferences.yaml override → USE if present
  3. SCAN signals for matches:
     - IF one option matches → USE it
     - IF multiple match → USE first match
     - IF none match → USE default
  4. VALIDATE compatibility
  5. LOG selection reason
```

### Step 4: Output Stack Recommendation

```markdown
## Stack Recommendation

**Preset:** [preset]

| Layer | Selection | Reason |
|-------|-----------|--------|
| Frontend | [tech] | [reason] |
| Backend | [tech] | [reason] |
| Database | [tech] | [reason] |
| Auth | [tech] | [reason] |

### Selection Rationale

**Preset:** [preset]
- [Signal that triggered this preset]

**[Option Layer]:** [selection] (not default [default])
- Signal matched: [signal]
- Evidence: [from idea]

### Alternatives Considered

| Layer | Selected | Alternatives | Why Not |
|-------|----------|--------------|---------|
| ... | ... | ... | ... |
```

### Step 5: Wait for Approval (HITL) or Proceed (Turbo)

```
IF HITL mode:
  DISPLAY recommendation
  WAIT for /ts-approve architecture-lock
  ACCEPT modifications if provided

IF Turbo mode:
  LOG recommendation
  PROCEED to architecture design
```
```

---

### 12.5 TEMPLATE.md Architecture Section

**Location:** `.claude/pipeline/projects/TEMPLATE.md`

```markdown
## Architecture

| Field | Value |
|-------|-------|
| Category | `[PENDING]` |
| Preset | `[PENDING]` |
| Pattern | `[PENDING]` |
| Tier | `[PENDING]` |
| Deployables | `[PENDING]` |

### Stack

| Layer | Technology | Selection Reason |
|-------|------------|------------------|
| Frontend | [PENDING] | |
| Backend | [PENDING] | |
| Database | [PENDING] | |
| Auth | [PENDING] | |

### Deploy Targets

| Component | Target |
|-----------|--------|
| Frontend | [PENDING] |
| Backend | [PENDING] |
| Database | [PENDING] |

### Selection Log

| Layer | Default | Selected | Method | Signal Matched |
|-------|---------|----------|--------|----------------|
| Preset | fullstack-js | [PENDING] | [PENDING] | [PENDING] |
| Database | [PENDING] | [PENDING] | [PENDING] | [PENDING] |
| Auth | [PENDING] | [PENDING] | [PENDING] | [PENDING] |

### Agents

| Status | Agents |
|--------|--------|
| Active | [PENDING] |
| Skipped | [PENDING] |
```

---

## 13. Testing

### 13.1 Preset Selection Tests

| ID | Input | Expected Preset | Signals |
|----|-------|-----------------|---------|
| P01 | "Landing page" | static | persistent_data=No |
| P02 | "Tic-tac-toe game" | static | persistent_data=No |
| P03 | "Note app with local storage" | embedded | persistent_data=Yes, multi_user=No |
| P04 | "Todo app with auth" | fullstack-js | persistent_data=Yes, multi_user=Yes |
| P05 | "Chat application" | baas | realtime_core=Yes |
| P06 | "AI resume analyzer" | microservice | python_ml_compute=Yes |
| P07 | "File renamer script" | cli-script | cli=Yes, multiple_commands=No |
| P08 | "CLI for GitHub API" | cli-tool | cli=Yes, multiple_commands=Yes |
| P09 | "Terminal file manager" | cli-tui | cli=Yes, interactive_tui=Yes |

### 13.2 Option Selection Tests

| ID | Preset | Input Keywords | Expected Option | Layer |
|----|--------|----------------|-----------------|-------|
| O01 | embedded | "analytics dashboard" | duckdb | database |
| O02 | embedded | "CSV processing" | duckdb | database |
| O03 | embedded | "edge deployment" | turso | database |
| O04 | embedded | "cloudflare workers" | d1 | database |
| O05 | embedded | "prototype" | lowdb | database |
| O06 | fullstack-js | "managed auth" | clerk | auth |
| O07 | fullstack-js | "mysql database" | mysql | database |
| O08 | baas | "firebase" | firebase | backend |
| O09 | microservice | "django admin" | django | backend |
| O10 | cli-tool | "python CLI" | typer | framework |
| O11 | cli-tool | "go single binary" | cobra | framework |

### 13.3 Override Tests

| ID | Input | Override | Expected |
|----|-------|----------|----------|
| V01 | "Todo app" | --preset=microservice | microservice |
| V02 | "Blog" | --db=mysql | fullstack-js + mysql |
| V03 | "App" | --auth=clerk | [preset] + clerk |
| V04 | "CLI" | --runtime=python | cli-tool + typer |

---

## 14. Examples

### 14.1 Analytics Dashboard

**Input:**
```bash
/ts-turbo analytics "Analytics dashboard for CSV data"
```

**Signals Extracted:**
```
Preset: persistent_data=Yes, realtime=No, multi_user=No → embedded
Option: analytics=Yes, csv_data=Yes → duckdb
```

**Stack:**
```
Preset: embedded
Database: DuckDB (signal: analytics, csv)
Auth: NextAuth (default)
```

### 14.2 Chat App

**Input:**
```bash
/ts-turbo chat "Real-time chat with presence indicators"
```

**Signals Extracted:**
```
Preset: realtime_core=Yes → baas
Option: (no firebase signal) → supabase (default)
```

**Stack:**
```
Preset: baas
Backend: Supabase (default)
Auth: Supabase Auth
```

### 14.3 Python CLI

**Input:**
```bash
/ts-turbo mycli "Python CLI to process data files"
```

**Signals Extracted:**
```
Preset: cli=Yes, multiple_commands=Yes → cli-tool
Option: python=Yes → python runtime, typer framework
```

**Stack:**
```
Preset: cli-tool
Runtime: Python
Framework: Typer
```

---

## 15. Open Questions

| ID | Question | Recommendation |
|----|----------|----------------|
| Q1 | Hybrid presets (fullstack + ML endpoint)? | Recommend external ML API |
| Q2 | CLI + Database? | Stack override within cli-tool |
| Q3 | Go/Rust full support? | Phase 2 implementation |
| Q4 | Migration between presets? | Document manual steps |

---

## 16. Appendix

### 16.1 Web Preset Comparison

| Aspect | static | embedded | fullstack-js | baas | microservice |
|--------|--------|----------|--------------|------|--------------|
| Deployables | 1 | 1 | 2 | 2 | 3 |
| Backend | ❌ | API Routes | API Routes | Supabase | FastAPI |
| Database | ❌ | SQLite/etc | PostgreSQL | Supabase | PostgreSQL |
| Auth | ❌ | NextAuth | NextAuth | Supabase | JWT |
| Realtime | ❌ | ❌ | Polling | ✅ | WebSocket |

### 16.2 CLI Preset Comparison

| Aspect | cli-script | cli-tool | cli-tui |
|--------|------------|----------|---------|
| Files | 1-3 | 5-20 | 20+ |
| Distribution | None | npm/pip | npm/binary |
| Framework | None | Commander/Typer | Ink/Textual |

### 16.3 Signal Quick Reference

**Preset Signals:**
```
static:       persistent_data=No
embedded:     persistent_data=Yes, multi_user=No
fullstack-js: persistent_data=Yes, multi_user=Yes
baas:         realtime_core=Yes
microservice: python_ml_compute=Yes
cli-script:   cli=Yes, multiple_commands=No
cli-tool:     cli=Yes, multiple_commands=Yes
cli-tui:      cli=Yes, interactive_tui=Yes
```

**Option Signals:**
```
duckdb:   analytics, csv, parquet, olap
turso:    edge, global, distributed
clerk:    managed auth, drop-in
firebase: firebase, google, firestore
python:   python, py
go:       go, golang, single binary
```

---

## Document History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | Dec 2024 | Initial web presets |
| 2.0 | Dec 2024 | Added CLI presets |
| 3.0 | Dec 2024 | Added option selection, EA owns all decisions |
