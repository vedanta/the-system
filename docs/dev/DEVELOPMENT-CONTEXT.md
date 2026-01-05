# The System - Development Context

> **Handoff document for continuing development in Claude Code**

---

## What is The System?

**ASDO** — Autonomous Software Development Organization

An agentic framework that simulates a complete software company with 17 AI agents across 5 departments. Takes ideas from concept to production.

---

## Current State

### Completed
- ✅ Stage 1: Architecture Department (1 agent)
- ✅ Stage 2: Product Department (3 agents)
- ✅ Stage 3: Development Department (6 agents)
- ✅ Stage 4: Release & Deployment (4 agents)
- ✅ Stage 5: Go Live & Operate (2 agents)
- ✅ Turbo Mode (`/ts-turbo`) for autonomous execution
- ✅ QA Improvements (mandatory build verification)
- ✅ Bug Fixer utility (`/ts-fix`)
- ✅ Self-documentation (`/ts-self-document`)

### Stats
- **Agents:** 17 + 1 utility (bug-fixer)
- **Commands:** ~42
- **Stages:** 5
- **HITL Gates:** 10

---

## Directory Structure

```
the-system/
├── .claude/
│   ├── agents/              # 17 agent definitions
│   ├── commands/            # ~42 commands
│   ├── config/
│   │   ├── preferences.yaml
│   │   └── integrations.yaml
│   ├── knowledge/
│   │   ├── architecture-standards.md
│   │   └── gitignore-template.md
│   ├── hooks/
│   │   └── checkpoint.sh
│   └── pipeline/
│       └── projects/
│           └── TEMPLATE.md
├── input/                   # External inputs (ignored)
├── output/                  # Generated projects (ignored)
├── docs/                    # Documentation
├── diagrams/                # Mermaid diagrams (8)
├── CLAUDE.md
├── README.md
├── .gitignore
└── verify-the-system.sh
```

---

## Recent Additions

### Turbo Mode
- `/ts-turbo <name> "<idea>"` - Run Stages 1-4 autonomously
- `the-system-on-turbo.sh` - Shell script for CLI execution
- Bypasses HITL gates (use with caution)

### QA Improvements
- `/ts-validate` - Run all build checks
- Updated `/ts-test` - Build verification first
- Updated `/ts-signoff` - Requires validation
- Updated `qa-engineer.md` - Mandatory build checks
- Updated `integration-engineer.md` - Build validation phase

### Bug Fixer (Standalone Utility)
- `/ts-fix` - Systematically fix build errors
- `/ts-fix typescript` - TypeScript only
- `/ts-fix dependencies` - Dependency conflicts
- `/ts-fix scan` - Diagnostic only
- `bug-fixer.md` agent

### Self Documentation
- `/ts-self-document` - Generate framework docs
- Ignores `output/` and `input/`

---

## TODO / Backlog

### Agents to Add
| Agent | Purpose | Priority |
|-------|---------|----------|
| UI Engineer | Design system, polish, a11y, responsive | Medium |

### Improvements
- [ ] Better error handling in generated code
- [ ] More robust QA testing (run actual builds)
- [ ] UI Engineer for design polish
- [ ] More deployment targets

---

## Key Decisions Made

### Architecture
- "Prompt-as-program" approach - workflows embedded in markdown
- Queue files for state tracking
- Project file is single source of truth
- Generic framework (works with any coding agent)

### Workflow
- QA reviews each developer individually, not just integrated result
- Build verification is mandatory (TypeScript must compile)
- Security FAIL stops turbo mode
- Deployment always requires human oversight

### Naming
- Commands: `/ts-*` prefix
- Agents: Descriptive role names
- Framework: "The System" / ASDO

---

## How to Continue Development

### Adding a New Agent

```bash
claude

> Create a new agent called "ui-engineer" that focuses on:
> - Design systems
> - Visual polish
> - Accessibility
> - Responsive design
> 
> Create .claude/agents/ui-engineer.md
> Create .claude/commands/ts-build-ui.md
> Follow the patterns in existing agents
```

### Adding a New Command

```bash
claude

> Create a new command /ts-something that does X
> Read existing commands in .claude/commands/ for patterns
> Create .claude/commands/ts-something.md
```

### Modifying Workflow

```bash
claude

> Read .claude/agents/qa-engineer.md
> Add a new check for [X] during the test phase
> Update the agent file
```

### Testing Changes

```bash
# Create a test project
claude
> /ts-new-project test-app
> [describe a simple app]
> [run through workflow]
> [verify changes work]
```

---

## Known Issues

### Generated Code Quality
- Sometimes creates duplicate class members
- TypeScript strict mode violations common
- Need to run `/ts-fix` after generation

### Dependency Conflicts
- vitest/coverage version mismatches
- Solution: Use `--legacy-peer-deps` or align versions

---

## Files to Read First

When continuing development, read these:

1. `CLAUDE.md` - Main system instructions
2. `.claude/agents/founder-advisor.md` - Core routing agent
3. `.claude/commands/ts-new-project.md` - Project initialization
4. `.claude/config/preferences.yaml` - Configuration options
5. `README.md` - User-facing documentation

---

## Quick Commands for Development

```bash
# See all agents
ls -la .claude/agents/

# See all commands
ls -la .claude/commands/

# Search for patterns
grep -r "HITL" .claude/
grep -r "subagent" .claude/

# Test the system
./verify-the-system.sh

# Generate docs
claude -p "/ts-self-document"
```

---

## Contact Points in Code

| Concept | Location |
|---------|----------|
| Project creation | `.claude/commands/ts-new-project.md` |
| Stage workflow | `.claude/commands/ts-*.md` |
| Agent behavior | `.claude/agents/*.md` |
| Tech stack defaults | `.claude/config/preferences.yaml` |
| Project template | `.claude/pipeline/projects/TEMPLATE.md` |
| Build verification | `.claude/commands/ts-validate.md` |
| Error fixing | `.claude/agents/bug-fixer.md` |

---

*Last updated: December 2024*
