# 🏢 The System - ASDO Framework (Autonomous Software Development Organization)

**The Definitive Reference for Framework Development**

---

## Framework Overview

**The System** is an agentic framework that simulates a complete software development organization. It orchestrates 19 specialized AI agents across 5 departments to take ideas from concept to production, with you as the founder making key decisions at human-in-the-loop (HITL) gates.

### Current Framework Status
- **Agents:** 19
- **Commands:** 49
- **Stages:** 5 (Architecture → Product → Development → Release → Go Live)
- **HITL Gates:** 8
- **Status:** Production-ready framework with comprehensive documentation and help system

---

## Company Structure

```
👤 Human Founder (You)
     │
     ▼
🎩 Founder-Advisor
     │
     ├──────────────┬──────────────┬──────────────┬──────────────┐
     ▼              ▼              ▼              ▼              ▼
📐 Architecture  📦 Product    💻 Development  🚀 Release     🌐 Go Live
   Department       Department     Department      Department     (Optional)
     │              │              │              │              │
     │              ├── 👔 Product ├── 👨‍💼 Principal├── 📝 Writer  ├── 🚀 SRE Deploy
     │              │    Lead      │    Developer │              │
     │              ├── 📅 Planner ├── 🧪 QA      ├── 🔐 Security├── 🛡️ SRE Ops
     │              │              │    Engineer  │    Engineer  │
     │              └── 💼 Analyst ├── 🗄️ DB Dev  ├── 📦 Release │
     │                             │              │    Engineer  │
     └── 🏗️ Architect              ├── ⚙️ BE Dev  └── 🚀 DevOps  │
                                   │                             │
                                   ├── 🎨 FE Dev                 │
                                   │                             │
                                   └── 🔗 Integration            │
                                   │
                                   └── 🐛 Bug Fixer (Utility)
```

---

## Departments & Agents (19 Total)

### 🎩 Founder-Advisor
Your chief of staff. All communication flows through this agent.

### 📐 Architecture Department (Stage 1)
- **🏗️ Solution Architect** - System design, technical architecture, ADRs, Project Explorer (legacy analysis)

### 📦 Product Department (Stage 2)
- **👔 Product Lead** - MVP definition, user stories, PRD
- **📅 Project Planner** - Roadmap, sprints, estimates
- **💼 Business Analyst** - Market analysis, revenue model, GTM (JSA)

### 💻 Development Department (Stage 3)
- **👨‍💼 Principal Developer** - Implementation planning, code review, quality gate
- **🧪 QA Engineer** - Test planning, reviews, integration testing, sign-off
- **🗄️ Database Developer** - Schema, models, migrations
- **⚙️ Backend Developer** - APIs, services, business logic
- **🎨 Frontend Developer** - Components, pages, state management
- **🔗 Integration Engineer** - Connects components, E2E verification

### 🚀 Release & Deployment Department (Stage 4)
- **📝 Technical Writer** - Architecture docs, guides, README
- **🔐 Security Engineer** - Security validation, compliance, scanning
- **📦 Release Engineer** - Versioning, changelog, artifacts
- **🚀 DevOps Engineer** - IaC, CI/CD, deployment, monitoring

### 🌐 Go Live & Operate (Stage 5 - Optional)
- **🚀 SRE Deploy Engineer** - Quick deploy to managed platforms
- **🛡️ SRE Ops Engineer** - Monitoring, alerting, incidents, SLOs

### 🔧 Utility Agents
- **🐛 Bug Fixer** - Standalone utility for systematic error diagnosis and fixing

---

## Commands Reference (48 Total)

### Core Project Management (8)
| Command | Purpose |
|---------|---------|
| `/ts-new-project <name>` | Start a new project |
| `/ts-status` | Check current project status |
| `/ts-view [section]` | View project file sections |
| `/ts-brief` | Get executive summary |
| `/ts-ask <question>` | Ask Founder-Advisor a question |
| `/ts-exec-summary` | Full executive summary |
| `/ts-approve <gate>` | Approve at HITL gate |
| `/ts-review <stage>` | Request stage review |

### Stage 1: Architecture (2)
| Command | Agent | Purpose |
|---------|-------|---------|
| `/ts-assess` | Solution Architect | Assess project requirements and recommend architecture; Analyze existing/legacy codebases |
| `/ts-architect` | Solution Architect | Run architecture design phase |

### Stage 2: Product (3)
| Command | Agent | Purpose |
|---------|-------|---------|
| `/ts-product` | Product Lead | Define MVP and user stories |
| `/ts-plan` | Project Planner | Create roadmap and sprints |
| `/ts-analyze` | Business Analyst | Market and business analysis (JSA) |

### Stage 3: Development (7)
| Command | Agent | Purpose |
|---------|-------|---------|
| `/ts-develop` | Principal Developer | Create implementation plan |
| `/ts-test-plan` | QA Engineer | Define test strategy |
| `/ts-build <layer>` | Dev Team | Build database/backend/frontend layer |
| `/ts-test <layer>` | QA Engineer | Test each layer |
| `/ts-integrate` | Integration Engineer | Connect all components |
| `/ts-gate` | Principal Developer | Quality gate review |
| `/ts-signoff` | QA Engineer | Final QA sign-off |

### Stage 4: Release & Deployment (8)
| Command | Agent | Purpose |
|---------|-------|---------|
| `/ts-docs` | Technical Writer | Generate documentation |
| `/ts-security` | Security Engineer | Run security scans |
| `/ts-release` | Release Engineer | Create release package |
| `/ts-infra` | DevOps Engineer | Generate Terraform infrastructure |
| `/ts-pipeline` | DevOps Engineer | Generate CI/CD workflows |
| `/ts-deploy <env>` | DevOps Engineer | Deploy to environment |
| `/ts-verify <env>` | DevOps Engineer | Verify deployment |
| `/ts-rollback <env> [version]` | DevOps Engineer | Rollback deployment |

### Stage 5: Go Live & Operate (12)
| Command | Agent | Purpose |
|---------|-------|---------|
| `/ts-push <target> [env]` | SRE Deploy | Deploy to managed platform |
| `/ts-live-status` | SRE Deploy | Check all deployments |
| `/ts-live-env <target>` | SRE Deploy | Manage environment variables |
| `/ts-domain <target> <domain>` | SRE Deploy | Configure custom domain |
| `/ts-teardown <target>` | SRE Deploy | Remove deployment |
| `/ts-monitor` | SRE Ops | Setup monitoring stack |
| `/ts-alerts` | SRE Ops | Configure alerting |
| `/ts-logs [target]` | SRE Ops | View logs |
| `/ts-health` | SRE Ops | Health check all services |
| `/ts-status-page` | SRE Ops | Create public status page |
| `/ts-incident [action]` | SRE Ops | Incident management |
| `/ts-slo` | SRE Ops | Define and track SLOs |

### Utility Commands (8)
| Command | Agent | Purpose |
|---------|-------|---------|
| `/ts-fix [type]` | Bug Fixer | Fix build errors systematically |
| `/ts-validate [layer]` | QA Engineer | Run build verification |
| `/ts-turbo <name> "<idea>"` | System | Run Stages 1-4 autonomously |
| `/ts-turbo-quick <name> "<idea>"` | System | Quick turbo mode |
| `/ts-self-document` | System | Generate framework documentation |
| `/ts-help [command]` | System | Interactive help and command discovery |
| `/ts-quickref [--stage]` | System | Quick reference and workflow patterns |
| `/ts-user-docs-update` | System | Update user documentation |

---

## Human-in-the-Loop Gates (8)

You maintain control at critical decision points:

| Gate | Command | What You're Approving |
|------|---------|----------------------|
| Architecture Start | `/ts-approve architecture-start` | Begin design phase |
| Architecture Lock | `/ts-approve architecture-lock` | Lock technical decisions |
| 🚦 Green Light | `/ts-approve green-light` | **Approve for development** |
| Development Done | `/ts-approve development` | Code complete, ready for release |
| Release Ready | `/ts-approve release` | Release package approved |
| Staging Verified | `/ts-approve staging` | Staging deployment OK |
| Production Ready | `/ts-approve production` | Production deployment OK |
| 🚀 Launch | `/ts-approve launch` | **Go live!** |

> 💡 **Note:** Turbo Mode (`/ts-turbo`) bypasses all gates automatically.

---

## Full Workflow

### Standard Mode (Supervised)

```
1.  /ts-new-project my-app
2.  Share your idea with founder-advisor
3.  /ts-approve architecture-start

── Stage 1: Architecture ──
4.  /ts-assess
5.  /ts-architect
6.  /ts-review architecture
7.  /ts-approve architecture-lock

── Stage 2: Product ──
8.  /ts-product
9.  /ts-plan
10. /ts-analyze
11. /ts-review product
12. /ts-approve green-light  🚦

── Stage 3: Development ──
13. /ts-develop
14. /ts-test-plan
15. /ts-build database    →  /ts-test database
16. /ts-build backend     →  /ts-test backend
17. /ts-build frontend    →  /ts-test frontend
18. /ts-integrate         →  /ts-test integration
19. /ts-gate
20. /ts-signoff
21. /ts-review development
22. /ts-approve development

── Stage 4: Release & Deployment ──
23. /ts-docs
24. /ts-security
25. /ts-release
26. /ts-infra
27. /ts-pipeline
28. /ts-review release
29. /ts-approve release
30. /ts-deploy staging
31. /ts-verify staging
32. /ts-approve staging
33. /ts-security production
34. /ts-deploy production
35. /ts-verify production
36. /ts-approve production
37. /ts-approve launch  🚀

── Stage 5: Go Live (Optional) ──
38. /ts-push neon           # Database
39. /ts-push railway        # Backend
40. /ts-push vercel         # Frontend
41. /ts-live-status
42. /ts-domain vercel app.example.com
43. /ts-monitor
44. /ts-alerts
45. /ts-slo
46. /ts-status-page
    🌐 OPERATIONAL!
```

### Turbo Mode (Autonomous)

```
/ts-turbo my-app "Build a task management app with user auth"
/ts-turbo my-app --idea=ideas/task-manager.txt

⚡ Runs Stages 1-4 automatically
⚡ Bypasses all HITL gates
⚡ Supports file-based ideas (.txt, .md, .json, .yaml)
⚡ Stops on CRITICAL security findings
⚡ Generates complete project in output/
```

### Stage 5 Quick Start

Skip Stage 4 IaC and deploy directly:

```
After Stage 3 (/ts-approve development):

/ts-push neon              → Database live
/ts-push railway           → Backend live
/ts-push vercel            → Frontend live
/ts-live-status            → Check everything
/ts-domain vercel myapp.com → Custom domain
/ts-monitor                → Set up monitoring
/ts-alerts                 → Configure alerts
/ts-health                 → Verify healthy

🌐 LIVE in minutes!
```

---

## Recent Framework Additions

### ✅ Turbo Mode (Autonomous Execution)
- **`/ts-turbo <name> "<idea>"`** - Run Stages 1-4 autonomously
- **`/ts-turbo-quick`** - Faster autonomous mode
- Bypasses HITL gates (use with caution)
- Stops on CRITICAL security findings
- Complete audit log maintained

### ✅ QA Improvements
- **`/ts-validate [layer]`** - Build verification system
- **Mandatory build checks** before QA sign-off
- **TypeScript compilation** must pass
- **Test coverage** requirements enforced
- Updated QA Engineer with strict validation

### ✅ Bug Fixer Utility
- **`/ts-fix [type]`** - Systematic error diagnosis and fixing
- **`/ts-fix typescript`** - TypeScript-specific fixes
- **`/ts-fix dependencies`** - Dependency conflict resolution
- **`/ts-fix scan`** - Diagnostic mode only
- **Standalone agent** not part of main workflow

### ✅ Self-Documentation System
- **`/ts-self-document`** - Generate framework documentation
- **Comprehensive docs** in `docs/` directory
- **8 documentation files** covering all aspects
- **Auto-generated** from framework source files

### ✅ File-Based Ideas Input
- **`/ts-new-project --idea=file`** - Read project ideas from files
- **`/ts-turbo project-name --idea=file`** - Turbo mode with file input
- **`/ts-turbo-quick project-name --idea=file`** - Quick turbo with file input
- **Multiple formats supported**: `.txt`, `.md`, `.json`, `.yaml`
- **Structured ideas**: JSON/YAML files can include build flags
- **Organized workflow**: Store ideas in `input/` or `ideas/` directories

### ✅ Project Explorer System (Legacy Analysis)
- **`/ts-assess --existing <project-name>`** - Analyze existing/legacy codebases
- **Comprehensive analysis**: Gap analysis, health assessment, security review
- **Completion strategies**: Technical debt quantification and remediation pathways
- **Multiple analysis modes**: `--gaps`, `--health`, `--security`, `--completion`, `--map`, `--report`
- **Structured output**: Analysis reports saved to `output/[project]-analysis/`
- **Strategic value**: First AI development tool with existing project analysis capabilities
- **Market expansion**: Extends framework beyond greenfield to legacy modernization

### ✅ Comprehensive Help System
- **`/ts-help`** - Interactive command browser with 49 commands grouped by category
- **`/ts-help <command>`** - Detailed help for any specific command
- **`/ts-help --stage <stage>`** - Stage-specific command suggestions
- **`/ts-help --search <term>`** - Search commands by keyword
- **`--help` flag support** - Quick usage for any command (e.g. `/ts-turbo --help`)
- **`/ts-quickref`** - Compact quick reference with workflow patterns
- **Context-aware suggestions** - Smart next-step recommendations
- **Error guidance** - Helpful hints when commands fail

---

## Framework Architecture & Key Decisions

### Design Philosophy
- **"Prompt-as-Program"** - Workflows embedded in markdown files
- **Single Source of Truth** - Project file maintains all state
- **Agent Specialization** - Each agent has deep domain expertise
- **Human-in-the-Loop** - Critical decisions require founder approval
- **Progressive Autonomy** - Can run supervised or autonomous

### Technical Architecture
- **Queue-based State** - Project file tracks progress through stages
- **Markdown-based Config** - All agent instructions in `.md` files
- **Generic Framework** - Works with any Claude Code-compatible agent
- **Modular Design** - Agents and commands are independently extensible

### Critical Workflows
- **QA reviews each layer individually** (not just integrated result)
- **Build verification is mandatory** (TypeScript must compile)
- **Security FAIL stops execution** (especially in turbo mode)
- **Deployment always requires human oversight** (unless turbo)

### Naming Conventions
- **Commands:** `/ts-*` prefix (The System)
- **Agents:** Descriptive role names (e.g., `product-lead`)
- **Framework:** "The System" / ASDO (Autonomous Software Development Organization)
- **Files:** kebab-case for files, PascalCase for components

---

## Directory Structure

```
the-system/
├── .claude/
│   ├── agents/              # 19 agent definitions
│   │   ├── founder-advisor.md
│   │   ├── solution-architect.md
│   │   ├── product-lead.md
│   │   ├── project-planner.md
│   │   ├── business-analyst.md
│   │   ├── principal-developer.md
│   │   ├── qa-engineer.md
│   │   ├── database-developer.md
│   │   ├── backend-developer.md
│   │   ├── frontend-developer.md
│   │   ├── integration-engineer.md
│   │   ├── technical-writer.md
│   │   ├── security-engineer.md
│   │   ├── release-engineer.md
│   │   ├── devops-engineer.md
│   │   ├── sre-deploy-engineer.md
│   │   ├── sre-ops-engineer.md
│   │   └── bug-fixer.md
│   │
│   ├── commands/            # 49 command definitions
│   │   ├── ts-new-project.md
│   │   ├── ts-status.md
│   │   ├── ts-view.md
│   │   ├── ts-brief.md
│   │   ├── ts-ask.md
│   │   ├── ts-exec-summary.md
│   │   ├── ts-approve.md
│   │   ├── ts-review.md
│   │   ├── ts-assess.md
│   │   ├── ts-architect.md
│   │   ├── ts-product.md
│   │   ├── ts-plan.md
│   │   ├── ts-analyze.md
│   │   ├── ts-develop.md
│   │   ├── ts-test-plan.md
│   │   ├── ts-build.md
│   │   ├── ts-test.md
│   │   ├── ts-integrate.md
│   │   ├── ts-gate.md
│   │   ├── ts-signoff.md
│   │   ├── ts-docs.md
│   │   ├── ts-security.md
│   │   ├── ts-release.md
│   │   ├── ts-infra.md
│   │   ├── ts-pipeline.md
│   │   ├── ts-deploy.md
│   │   ├── ts-verify.md
│   │   ├── ts-rollback.md
│   │   ├── ts-push.md
│   │   ├── ts-live-status.md
│   │   ├── ts-live-env.md
│   │   ├── ts-domain.md
│   │   ├── ts-teardown.md
│   │   ├── ts-monitor.md
│   │   ├── ts-alerts.md
│   │   ├── ts-logs.md
│   │   ├── ts-health.md
│   │   ├── ts-status-page.md
│   │   ├── ts-incident.md
│   │   ├── ts-slo.md
│   │   ├── ts-fix.md
│   │   ├── ts-validate.md
│   │   ├── ts-turbo.md
│   │   ├── ts-turbo-quick.md
│   │   ├── ts-self-document.md
│   │   ├── ts-user-docs-update.md
│   │   └── ts-quickref.md
│   │
│   ├── config/
│   │   ├── preferences.yaml  # Tech stack defaults, conventions
│   │   └── integrations.yaml # Third-party service configuration
│   │
│   ├── knowledge/
│   │   ├── architecture-standards.md
│   │   └── gitignore-template.md
│   │
│   ├── hooks/
│   │   └── checkpoint.sh     # Auto-save hooks
│   │
│   └── pipeline/
│       └── projects/
│           └── TEMPLATE.md   # Project template
│
├── input/                   # Reference materials (gitignored)
├── output/                  # Generated projects (gitignored)
├── docs/                    # Generated documentation
│   ├── README.md
│   ├── architecture.md
│   ├── agents.md
│   ├── commands.md
│   ├── workflow.md
│   ├── hitl-gates.md
│   ├── configuration.md
│   └── customization.md
├── diagrams/                # Mermaid diagrams (8)
├── CLAUDE.md               # This file - framework instructions
├── README.md               # User-facing documentation
├── user-guide.md           # Installation and usage guide
├── DEVELOPMENT-CONTEXT.md  # Development handoff notes
├── .env.example            # Environment template
├── .gitignore             # Git ignore rules
└── scripts/verify-the-system.sh   # Installation verification
```

---

## Stage 5: Quick Deploy Targets

### Frontend Platforms
| Target | Command | Free Tier | Best For |
|--------|---------|-----------|----------|
| Vercel | `/ts-push vercel` | ✅ | Next.js, React, Vue |
| Netlify | `/ts-push netlify` | ✅ | Static sites, JAMstack |
| Cloudflare Pages | `/ts-push cloudflare` | ✅ | Global CDN, fast builds |

### Backend Platforms
| Target | Command | Free Tier | Best For |
|--------|---------|-----------|----------|
| Railway | `/ts-push railway` | ✅ Limited | Full-stack, databases |
| Fly.io | `/ts-push fly` | ✅ Limited | Global deployment |
| Render | `/ts-push render` | ✅ Limited | Simple deployment |

### Database Platforms
| Target | Command | Free Tier | Best For |
|--------|---------|-----------|----------|
| Neon | `/ts-push neon` | ✅ | PostgreSQL, serverless |
| PlanetScale | `/ts-push planetscale` | ✅ | MySQL, branching |
| Supabase | `/ts-push supabase` | ✅ | PostgreSQL + Auth |
| Turso | `/ts-push turso` | ✅ | SQLite, edge |

### Full-Stack Platforms
| Target | Command | Includes |
|--------|---------|----------|
| Railway | `/ts-push railway full` | Frontend + Backend + Database |
| Render | `/ts-push render full` | Frontend + Backend + Database |

---

## Development Workflow

### Adding a New Agent

1. **Create agent file:**
```bash
cp .claude/agents/template.md .claude/agents/my-agent.md
```

2. **Define agent:**
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

3. **Add to verification script:**
```bash
# Add to scripts/verify-the-system.sh
"my-agent" # in appropriate stage section
```

4. **Test the agent:**
```bash
claude
> /ts-my-command test-project
```

### Adding a New Command

1. **Create command file:**
```bash
cp .claude/commands/template.md .claude/commands/ts-my-command.md
```

2. **Define command:**
```markdown
# My Command: $ARGUMENTS

What this command does.

## Usage
```
/ts-my-command <args>
```

## Process
1. Step one
2. Step two
3. Step three
```

3. **Add to verification script:**
```bash
# Add to scripts/verify-the-system.sh
"ts-my-command" # in appropriate section
```

4. **Test the command:**
```bash
claude
> /ts-my-command test-args
```

### Modifying Existing Workflows

1. **Identify the component:**
- Agents: `.claude/agents/*.md`
- Commands: `.claude/commands/*.md`
- Config: `.claude/config/*.yaml`

2. **Read existing patterns:**
```bash
claude
> Read .claude/agents/qa-engineer.md and show me the current validation process
```

3. **Make incremental changes:**
```bash
claude
> Update the QA Engineer to add a new check for [X] during the test phase
```

4. **Test thoroughly:**
```bash
# Run verification
./scripts/verify-the-system.sh

# Test with real project
claude
> /ts-new-project test-changes
> [run through workflow to test changes]
```

### Framework Testing

```bash
# Quick verification
./scripts/verify-the-system.sh

# Full framework test
claude
> /ts-turbo test-full "Simple todo app with auth"
> Check output/test-full/ for results

# Component-specific test
claude
> /ts-new-project test-component
> [test specific workflow changes]
```

---

## TODO / Backlog

### High Priority
- [ ] **UI Engineer Agent** - Design systems, visual polish, accessibility
- [ ] **Better error handling** in generated code templates
- [ ] **Robust build testing** - Actually run `npm run build` in QA
- [ ] **Command validation** - Ensure all 49 commands work correctly

### Medium Priority
- [ ] **Additional deployment targets** - AWS, GCP, Azure options
- [ ] **Performance optimization** - Faster generation, smaller outputs
- [ ] **Template improvements** - Better starter templates per tech stack
- [ ] **Integration testing** - E2E testing of full workflows

### Low Priority
- [ ] **Web UI** - Browser interface for The System
- [ ] **Metrics and analytics** - Usage tracking for optimization
- [ ] **Plugin system** - Third-party agent/command extensions
- [ ] **Multi-project support** - Manage multiple projects simultaneously

### Completed ✅
- [x] Stage 1-5 implementation (19 agents, 49 commands)
- [x] Turbo Mode autonomous execution
- [x] QA improvements with mandatory build verification
- [x] Bug Fixer utility agent
- [x] Self-documentation system
- [x] Comprehensive documentation suite
- [x] Verification script with accurate counts

---

## Known Issues & Solutions

### Generated Code Quality
**Issue:** Sometimes creates duplicate class members or TypeScript strict mode violations
**Solution:** Run `/ts-fix` after generation, or `/ts-fix typescript` for TS-specific issues

### Dependency Conflicts
**Issue:** vitest/coverage version mismatches, peer dependency warnings
**Solution:** Use `--legacy-peer-deps` flag or align versions manually

### Build Failures
**Issue:** Generated code doesn't compile immediately
**Solution:** `/ts-validate` before QA sign-off, `/ts-fix` to resolve automatically

### Performance
**Issue:** Large projects can be slow to generate
**Solution:** Use `/ts-turbo-quick` for faster iteration, optimize agent instructions

---

## Key File Reference

### Critical Framework Files
| File | Purpose |
|------|---------|
| `.claude/agents/founder-advisor.md` | Core routing agent |
| `.claude/commands/ts-new-project.md` | Project initialization |
| `.claude/pipeline/projects/TEMPLATE.md` | Project template |
| `.claude/config/preferences.yaml` | Tech stack defaults |
| `CLAUDE.md` | This file - framework instructions |

### Development Files
| File | Purpose |
|------|---------|
| `DEVELOPMENT-CONTEXT.md` | Development handoff notes |
| `docs/` | Generated comprehensive documentation |
| `scripts/verify-the-system.sh` | Installation verification script |
| `README.md` | User-facing documentation |

### Project Output
| Directory | Purpose |
|-----------|---------|
| `input/` | Reference materials for agents |
| `output/` | Generated project directories |

---

## Quick Development Commands

```bash
# Framework verification
./scripts/verify-the-system.sh

# See all components
ls -la .claude/agents/    # 19 agents
ls -la .claude/commands/  # 49 commands

# Search framework
grep -r "HITL" .claude/
grep -r "subagent" .claude/

# Framework help system
claude
> /ts-help                    # Browse all commands
> /ts-help turbo              # Help for specific command
> /ts-quickref                # Quick reference
> /ts-turbo --help            # Command usage

# Generate documentation
claude
> /ts-self-document

# Test framework changes
claude
> /ts-turbo test-changes "Simple blog app"
> /ts-turbo test-file-input --idea=ideas/sample-app.txt
> Check output/test-changes/

# Create idea files for testing
mkdir -p ideas/
echo "A task management app with user auth and categories" > ideas/todo.txt
echo "A blog platform with markdown posts and comments" > ideas/blog.txt

# Test with file input
claude
> /ts-turbo todo-app --idea=ideas/todo.txt
> /ts-turbo-quick blog-app --idea=ideas/blog.txt
```

---

## Framework Contact Points

| Concept | Location |
|---------|----------|
| Project creation | `.claude/commands/ts-new-project.md` |
| Workflow orchestration | `.claude/agents/founder-advisor.md` |
| Stage execution | `.claude/commands/ts-*.md` |
| Agent behavior | `.claude/agents/*.md` |
| Tech stack configuration | `.claude/config/preferences.yaml` |
| Service integrations | `.claude/config/integrations.yaml` |
| Project structure | `.claude/pipeline/projects/TEMPLATE.md` |
| Build verification | `.claude/commands/ts-validate.md` |
| Error diagnosis | `.claude/agents/bug-fixer.md` |
| Quality gates | `.claude/agents/qa-engineer.md` |
| Security validation | `.claude/agents/security-engineer.md` |

---

**Framework Version:** 1.1.0 (Sage Release)
**Last Updated:** December 2024
**Status:** Active Development