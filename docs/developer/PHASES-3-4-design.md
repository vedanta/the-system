# Phase 3 & 4 Design: Commands and Templates

## Phase 3: Command Updates

### Enhanced ts-turbo Command

**File:** `.claude/commands/ts-turbo.md`

**New Architecture Override Flags:**

```markdown
# Turbo Mode: $ARGUMENTS

Enhanced with architecture selection overrides.

## Usage

```bash
# Basic usage (unchanged)
/ts-turbo <project-name> "<idea-description>"

# Architecture overrides
/ts-turbo <project> "<idea>" --preset=<preset-name>
/ts-turbo <project> "<idea>" --category=<web|cli>

# Option overrides
/ts-turbo <project> "<idea>" --db=<database-option>
/ts-turbo <project> "<idea>" --auth=<auth-option>
/ts-turbo <project> "<idea>" --runtime=<cli-runtime>
/ts-turbo <project> "<idea>" --framework=<cli-framework>

# Combinations
/ts-turbo <project> "<idea>" --preset=embedded --db=duckdb --auth=clerk
```

## Architecture Override Examples

```bash
# Force microservice architecture
/ts-turbo ai-app "AI resume analyzer" --preset=microservice

# Force CLI category
/ts-turbo my-tool "Data processing utility" --category=cli

# Override database for analytics
/ts-turbo dashboard "Sales analytics dashboard" --db=duckdb

# Use managed auth
/ts-turbo saas "SaaS application" --auth=clerk

# Python CLI tool
/ts-turbo cli-tool "File processor" --runtime=python --framework=typer

# Go CLI with single binary
/ts-turbo tool "System utility" --runtime=go --framework=cobra
```

## Flag Reference

### Preset Flags
- `--preset=static` - Static site, no backend
- `--preset=embedded` - Single deployable with embedded DB
- `--preset=fullstack-js` - Standard 2-tier (default)
- `--preset=baas` - Supabase/Firebase backend
- `--preset=microservice` - 3-tier with Python backend
- `--preset=cli-script` - Single-file CLI script
- `--preset=cli-tool` - Multi-command CLI tool
- `--preset=cli-tui` - Interactive terminal UI

### Option Flags
- `--db=sqlite|duckdb|turso|d1|postgresql|mysql|lowdb`
- `--auth=nextauth|clerk|lucia|none`
- `--runtime=node|python|go|rust|deno|bun` (CLI presets)
- `--framework=commander|typer|cobra|clap|ink|textual` (CLI presets)

## Implementation

### Argument Parsing
1. Extract override flags before agent execution
2. Store in project configuration
3. Pass to Founder-Advisor and Enterprise Architect
4. Apply in selection priority order

### Override Processing
```
Command flags (highest priority)
    ↓
Config overrides (preferences.yaml)
    ↓
Signal-based selection
    ↓
Preset defaults (lowest priority)
```
```

### Enhanced ts-approve Command

**File:** `.claude/commands/ts-approve.md`

```markdown
# Add architecture gate support

## Enhanced Architecture Approval

### Basic Approval
```bash
/ts-approve architecture-lock
```

### Approval with Overrides
```bash
# Override specific options during approval
/ts-approve architecture-lock --db=sqlite
/ts-approve architecture-lock --auth=clerk
/ts-approve architecture-lock --preset=embedded

# Multiple overrides
/ts-approve architecture-lock --db=mysql --auth=clerk
```

### Use Cases
1. **Accept recommendation:** `/ts-approve architecture-lock`
2. **Change database:** `/ts-approve architecture-lock --db=mysql`
3. **Switch preset:** `/ts-approve architecture-lock --preset=microservice`
4. **Remove auth:** `/ts-approve architecture-lock --auth=none`
```

### Enhanced ts-new-project Command

```markdown
# Add preset selection support

## Usage
```bash
# Standard (let architect decide)
/ts-new-project my-app

# Force specific preset
/ts-new-project my-app --preset=embedded
/ts-new-project cli-tool --preset=cli-tool

# Set category hint
/ts-new-project my-tool --category=cli
```
```

---

## Phase 4: Template Updates

### Enhanced Project Template

**File:** `.claude/pipeline/projects/TEMPLATE.md`

```markdown
# Add complete architecture section

## Architecture

| Field | Value |
|-------|-------|
| Status | PENDING |
| Category | [web/cli] |
| Preset | [PENDING] |
| Pattern | [PENDING] |
| Tier | [PENDING] |
| Deployables | [PENDING] |

### Stack Configuration

| Layer | Technology | Selection Method | Rationale |
|-------|------------|------------------|-----------|
| Frontend | [PENDING] | | |
| Backend | [PENDING] | | |
| Database | [PENDING] | | |
| Auth | [PENDING] | | |
| Runtime | [PENDING] | | | (CLI only)
| Framework | [PENDING] | | | (CLI only)

### Deploy Targets

| Component | Target Platform | Environment |
|-----------|-----------------|-------------|
| Frontend | [PENDING] | |
| Backend | [PENDING] | |
| Database | [PENDING] | |

### Selection Log

| Decision | Default Option | Selected Option | Selection Method | Signal/Override Evidence |
|----------|---------------|-----------------|------------------|-------------------------|
| Preset | fullstack-js | [PENDING] | [KISS/Override] | [signals or flag] |
| Database | [preset-default] | [PENDING] | [Signal/Default/Override] | [evidence] |
| Auth | [preset-default] | [PENDING] | [Signal/Default/Override] | [evidence] |

### Architecture Signals

**Preset Signals Detected:**
- cli: [Yes/No] - Evidence: [quote]
- persistent_data: [Yes/No] - Evidence: [quote]
- python_ml_compute: [Yes/No] - Evidence: [quote]
- realtime_core: [Yes/No] - Evidence: [quote]
- multi_user_ha: [Yes/No] - Evidence: [quote]

**Option Signals Detected:**
- analytics: [Yes/No] - Evidence: [quote] → Triggers: duckdb
- csv_data: [Yes/No] - Evidence: [quote] → Triggers: duckdb
- edge: [Yes/No] - Evidence: [quote] → Triggers: turso
- managed_auth: [Yes/No] - Evidence: [quote] → Triggers: clerk

### Agent Configuration

**Active Agents:**
[List of agents used for this preset]

**Skipped Agents:**
[List of agents skipped for this preset with reasons]

### Directory Structure

**Generated Structure:**
```
[Generated based on preset.structure]
```

**Rationale:**
[Why this structure was chosen based on preset]
```

### Output Structure Documentation

**File:** `docs/OUTPUT-STRUCTURES-by-preset.md`

```markdown
# Output Directory Structures by Preset

## static Preset
```
output/project-name/
├── src/
│   └── app/                    # Next.js app directory
│       ├── globals.css
│       ├── layout.tsx
│       └── page.tsx
├── public/                     # Static assets
├── next.config.js              # Static export config
├── package.json
├── tailwind.config.js
└── tsconfig.json
```

## embedded Preset
```
output/project-name/
├── src/
│   └── app/                    # Next.js app + API routes
│       ├── api/                # Backend API routes
│       ├── globals.css
│       ├── layout.tsx
│       └── page.tsx
├── db/                         # Database files
│   ├── schema.ts               # Drizzle schema
│   └── data.db                 # SQLite database
├── drizzle.config.ts
├── package.json
├── tailwind.config.js
└── tsconfig.json
```

## fullstack-js Preset
```
output/project-name/
├── src/
│   ├── app/                    # Next.js frontend
│   ├── components/             # React components
│   └── lib/                    # Utilities
├── prisma/                     # Database schema
│   ├── schema.prisma
│   └── migrations/
├── package.json
├── tailwind.config.js
├── next.config.js
└── tsconfig.json
```

## microservice Preset
```
output/project-name/
├── src/
│   ├── frontend/               # Next.js app
│   └── backend/                # FastAPI app
│       ├── app/
│       ├── models/
│       ├── routers/
│       └── main.py
├── docker-compose.yml          # Multi-service setup
├── infra/                      # Terraform
└── .github/workflows/          # CI/CD
```

## cli-script Preset
```
output/project-name/
├── src/
│   └── index.ts                # Main script
├── package.json
├── tsconfig.json
└── README.md
```

## cli-tool Preset
```
output/project-name/
├── src/
│   ├── index.ts                # CLI entry point
│   ├── commands/               # Subcommands
│   └── lib/                    # Utilities
├── bin/                        # Executable scripts
├── package.json
├── tsconfig.json
├── README.md
└── CHANGELOG.md
```

## cli-tui Preset
```
output/project-name/
├── src/
│   ├── index.tsx               # TUI entry point
│   ├── components/             # UI components
│   └── hooks/                  # Custom hooks
├── bin/                        # Executable
├── package.json
├── tsconfig.json
└── README.md
```
```

### Agent Behavior Matrix

**File:** `docs/AGENT-BEHAVIOR-by-preset.md`

```markdown
# Agent Behavior by Preset

| Agent | static | embedded | fullstack-js | baas | microservice | cli-script | cli-tool | cli-tui |
|-------|--------|----------|--------------|------|--------------|------------|----------|---------|
| Founder-Advisor | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Enterprise Architect | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Database Developer | ❌ | ✓ | ✓ | ✓ | ✓ | ❌ | ❌ | ❌ |
| Backend Developer | ❌ | ❌ | ❌ | ❌ | ✓ | ✓ | ✓ | ✓ |
| Frontend Developer | ✓ | ✓ | ✓ | ✓ | ✓ | ❌ | ❌ | ❌ |
| Integration Engineer | ❌ | ✓ | ✓ | ✓ | ✓ | ❌ | ❌ | ❌ |
| DevOps Engineer | ❌ | ❌ | ❌ | ❌ | ✓ | ❌ | ❌ | ❌ |
| QA Engineer | ❌ | ❌ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Technical Writer | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |

## Rationale

### static
- No backend/database → Skip backend/DB agents
- Simple deployment → Skip DevOps
- No complex logic → Skip QA/Integration

### embedded
- API routes handle backend → Skip Backend Developer
- Single deployable → Skip DevOps
- Simple enough → Skip QA

### fullstack-js
- API routes handle backend → Skip Backend Developer
- Two-tier is standard → Skip DevOps
- Multiple users → Include QA

### microservice
- All agents needed for complex 3-tier architecture
- Python backend → Dedicated Backend Developer
- Multiple services → DevOps for orchestration

### CLI presets
- No frontend → Skip Frontend Developer
- No database → Skip Database Developer
- Single binary → Skip Integration/DevOps
```
```

## Implementation Timeline

### Week 3: Commands
- Day 1-2: Enhanced ts-turbo with architecture flags
- Day 3-4: Enhanced ts-approve with override support
- Day 5: Updated command documentation

### Week 4: Templates
- Day 1-2: Enhanced project template
- Day 3: Output structure documentation
- Day 4-5: Agent behavior documentation and testing

This completes the design for Phases 3 and 4, providing the user interface and documentation needed for the Architecture Selection System.