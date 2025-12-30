# Self Document: $ARGUMENTS

Generate comprehensive documentation for The System framework itself.

## ⚠️ Scope

Documents **The System framework only** - NOT output projects.

Reads from:
- `.claude/agents/*.md`
- `.claude/commands/*.md`
- `.claude/config/*.yaml`
- `.claude/knowledge/*.md`
- `.claude/pipeline/projects/TEMPLATE.md`
- `CLAUDE.md`
- `README.md`

Ignores:
- `output/` directory (generated projects)
- `input/` directory (external inputs, repos, reference files)
- `.claude/pipeline/projects/*.md` (except TEMPLATE.md)
- Any project-specific files

---

## Usage

```
/ts-self-document                    # Generate all docs
/ts-self-document agents             # Agents reference only
/ts-self-document commands           # Commands reference only
/ts-self-document architecture       # Architecture overview only
/ts-self-document quick              # Single-file summary
```

---

## Process

### Step 1: Inventory The System

```bash
echo "📋 THE SYSTEM INVENTORY"
echo "═══════════════════════════════════════════════════════════"

# Count agents
AGENTS=$(ls -1 .claude/agents/*.md 2>/dev/null | wc -l | tr -d ' ')
echo "Agents: $AGENTS"

# Count commands
COMMANDS=$(ls -1 .claude/commands/*.md 2>/dev/null | wc -l | tr -d ' ')
echo "Commands: $COMMANDS"

# Count knowledge files
KNOWLEDGE=$(ls -1 .claude/knowledge/*.md 2>/dev/null | wc -l | tr -d ' ')
echo "Knowledge files: $KNOWLEDGE"

# List stages
echo ""
echo "Stages:"
echo "  1. Architecture"
echo "  2. Product"
echo "  3. Development"
echo "  4. Release & Deployment"
echo "  5. Go Live & Operate"
```

### Step 2: Read All Framework Files

Read and analyze:

```
.claude/
├── agents/           → Extract name, description, role
├── commands/         → Extract usage, purpose, workflow
├── config/           → Extract configuration options
├── knowledge/        → Extract standards and templates
└── pipeline/
    └── projects/
        └── TEMPLATE.md → Extract project structure
```

**DO NOT read:**
```
output/               → Skip entirely
.claude/pipeline/projects/*.md (except TEMPLATE.md)
```

### Step 3: Generate Documentation

---

## Output: Full Documentation

Generate in `docs/` directory:

```
docs/
├── README.md              # Docs index
├── architecture.md        # How The System works
├── agents.md              # All agents reference
├── commands.md            # All commands reference
├── workflow.md            # Stage-by-stage guide
├── hitl-gates.md          # Approval gates explained
├── configuration.md       # Config options
└── customization.md       # How to extend
```

---

### docs/README.md

```markdown
# The System Documentation

ASDO — Autonomous Software Development Organization

## Contents

| Document | Description |
|----------|-------------|
| [Architecture](architecture.md) | How The System works |
| [Agents](agents.md) | All 19 agents reference |
| [Commands](commands.md) | All 46 commands reference |
| [Workflow](workflow.md) | Stage-by-stage guide |
| [HITL Gates](hitl-gates.md) | Approval gates |
| [Configuration](configuration.md) | Config options |
| [Customization](customization.md) | Extending The System |

## Quick Start

1. Install The System
2. Run `claude` in the directory
3. `/ts-new-project my-app`
4. Follow the workflow

## Stats

- **Stages:** 5
- **Agents:** [count]
- **Commands:** [count]
- **HITL Gates:** 8
```

---

### docs/architecture.md

```markdown
# Architecture

## Overview

The System simulates a software development organization with specialized AI agents.

## Core Concepts

### Agents
Specialized AI personas with specific expertise (e.g., Enterprise Architect, QA Engineer).

### Commands
Slash commands that invoke agents and workflows (e.g., `/ts-architect`, `/ts-build`).

### Pipeline
Project state tracked in markdown files at `.claude/pipeline/projects/`.

### HITL Gates
Human-in-the-loop approval points for critical decisions.

## Directory Structure

```
the-system/
├── .claude/
│   ├── agents/          # Agent definitions
│   ├── commands/        # Command definitions
│   ├── config/          # Configuration
│   ├── knowledge/       # Standards & templates
│   └── pipeline/        # Project tracking
├── input/               # External inputs (repos, references) - IGNORED
├── output/              # Generated projects - IGNORED
├── docs/                # Generated documentation
├── CLAUDE.md            # Main instructions
└── README.md            # Project readme
```

## Data Flow

```
Human → Command → Agent → Output → Human Review → Next Stage
```

## Stages

[Generate from reading agents and commands]
```

---

### docs/agents.md

```markdown
# Agents Reference

The System has [X] agents across 5 departments.

## Executive

### 🎩 Founder-Advisor
- **Role:** Chief of Staff, strategic guidance
- **Commands:** /ts-ask, /ts-review, /ts-brief
- **Invoked by:** All stages for review

## Stage 1: Architecture

### 🏗️ Enterprise Architect
- **Role:** System design, tech stack, ADRs
- **Commands:** /ts-architect
- **Outputs:** Architecture diagrams, data model, API contracts

## Stage 2: Product

### 👔 Product Lead
- **Role:** MVP definition, user stories, PRD
- **Commands:** /ts-product
- **Outputs:** MVP scope, user stories, PRD

[Continue for all agents...]
```

---

### docs/commands.md

```markdown
# Commands Reference

The System has [X] commands.

## Core Commands

| Command | Description |
|---------|-------------|
| `/ts-new-project <name>` | Start new project |
| `/ts-status` | Check project status |
| `/ts-approve <gate>` | Approve at HITL gate |
| `/ts-view [section]` | View project details |

## Stage 1: Architecture

| Command | Agent | Description |
|---------|-------|-------------|
| `/ts-architect` | Enterprise Architect | Design system architecture |

## Stage 2: Product

| Command | Agent | Description |
|---------|-------|-------------|
| `/ts-product` | Product Lead | Define MVP and stories |
| `/ts-plan` | Project Planner | Create roadmap |
| `/ts-analyze` | Business Analyst | Market analysis |

[Continue for all commands...]
```

---

### docs/workflow.md

```markdown
# Workflow Guide

## Complete Workflow

### 1. Project Initialization
```
/ts-new-project my-app
```
Describe your idea to the Founder-Advisor.

### 2. Stage 1: Architecture
```
/ts-approve architecture-start
/ts-architect
/ts-approve architecture-lock
```

### 3. Stage 2: Product
```
/ts-product
/ts-plan
/ts-analyze
/ts-approve green-light
```

[Continue for all stages...]
```

---

### docs/hitl-gates.md

```markdown
# Human-in-the-Loop Gates

The System requires human approval at critical decision points.

## Gates

| Gate | Stage | What You're Approving |
|------|-------|----------------------|
| `architecture-start` | 1 | Begin design phase |
| `architecture-lock` | 1 | Lock technical decisions |
| `green-light` | 2 | Approve for development |
| `development` | 3 | Code complete |
| `release` | 4 | Release package |
| `staging` | 4 | Staging deployment |
| `production` | 4 | Production deployment |
| `launch` | 4 | Go live |

## How to Approve

```
/ts-approve <gate-name>
```

## How to Reject

Provide feedback and request changes before approving.
```

---

### docs/configuration.md

```markdown
# Configuration

## preferences.yaml

Located at `.claude/config/preferences.yaml`.

### Tech Stack Defaults
```yaml
tech_stack:
  frontend: nextjs
  backend: fastapi
  database: postgresql
```

### Naming Conventions
```yaml
naming:
  style: kebab-case
```

[Document all config options from preferences.yaml]

## integrations.yaml

External service integrations.

[Document from integrations.yaml]

## Environment Variables

See `.env.example` for required variables.
```

---

### docs/customization.md

```markdown
# Customization Guide

## Adding a New Agent

1. Create `.claude/agents/my-agent.md`:

```markdown
---
name: my-agent
description: What this agent does
tools: Read, Write, Bash
model: inherit
---

# My Agent

Instructions for the agent...
```

2. Reference in commands as needed.

## Adding a New Command

1. Create `.claude/commands/ts-my-command.md`:

```markdown
# My Command: $ARGUMENTS

What this command does.

## Usage
\`\`\`
/ts-my-command <args>
\`\`\`

## Process
1. Step one
2. Step two
```

## Modifying Workflow

Edit agent files to change behavior.
Edit command files to change process.

## Adding Knowledge

Add markdown files to `.claude/knowledge/` for reference material.
```

---

## Output: Quick Mode (/ts-self-document quick)

Generate single file `docs/THE-SYSTEM-REFERENCE.md`:

```markdown
# The System - Quick Reference

## Overview
ASDO — Autonomous Software Development Organization
[X] agents, [X] commands, 5 stages, 8 HITL gates

## Agents
[Table of all agents]

## Commands
[Table of all commands]

## Workflow
[Condensed stage-by-stage]

## HITL Gates
[List with descriptions]
```

---

## On Complete

```
╔══════════════════════════════════════════════════════════════════╗
║                    📚 DOCUMENTATION GENERATED                    ║
╚══════════════════════════════════════════════════════════════════╝

Location: docs/

Files created:
  ✅ docs/README.md
  ✅ docs/architecture.md
  ✅ docs/agents.md
  ✅ docs/commands.md
  ✅ docs/workflow.md
  ✅ docs/hitl-gates.md
  ✅ docs/configuration.md
  ✅ docs/customization.md

Stats documented:
  - Agents: [X]
  - Commands: [X]
  - Stages: 5
  - HITL Gates: 8

View docs:
  cat docs/README.md

Or open in browser:
  npx serve docs/
```

---

## Critical Reminders

1. **DO NOT** read or document `output/` directory
2. **DO NOT** read or document `input/` directory
3. **DO NOT** read project files (except TEMPLATE.md)
4. **DO** read all `.claude/agents/*.md`
5. **DO** read all `.claude/commands/*.md`
6. **DO** read config and knowledge files
7. Generate **framework documentation**, not project documentation