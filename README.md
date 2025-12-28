# The System

### ASDO — Autonomous Software Development Organization
> *An AI-powered software company in your terminal*

---

<p align="center">
  <img src="https://img.shields.io/badge/Agents-18-blue?style=for-the-badge" alt="18 Agents"/>
  <img src="https://img.shields.io/badge/Commands-44-green?style=for-the-badge" alt="44 Commands"/>
  <img src="https://img.shields.io/badge/Stages-5-purple?style=for-the-badge" alt="5 Stages"/>
  <img src="https://img.shields.io/badge/HITL_Gates-8-red?style=for-the-badge" alt="8 HITL Gates"/>
</p>

---

## Table of Contents

1. [What is The System?](#what-is-the-system)
2. [Why The System?](#why-the-system)
3. [Installation](#installation)
4. [Features](#features)
5. [The Organization](#the-organization)
6. [Stages](#stages)
7. [Quick Start](#quick-start)
8. [Workflow Overview](#workflow-overview)
9. [Turbo Mode (Autonomous Execution)](#turbo-mode-autonomous-execution)
10. [Commands Reference](#commands-reference)
11. [Command Guide](docs/COMMAND-GUIDE.md)
12. [Human-in-the-Loop Gates](#human-in-the-loop-gates)
13. [Project Structure](#project-structure)
14. [Stage 5: Quick Deploy Targets](#stage-5-quick-deploy-targets)
15. [Configuration](#configuration)
16. [Troubleshooting](#troubleshooting)
17. [Customization](#customization)
18. [Updating](#updating)
19. [Getting Help](#getting-help)
20. [Quick Reference](#quick-reference)
21. [Diagrams](#diagrams)
22. [Verification](#verification)
23. [Example Session](#example-session)
24. [Philosophy](#philosophy)
25. [Contributing](#contributing)

---

## What is The System?

**The System** is an agentic framework that simulates a complete software development organization. It orchestrates 18 specialized AI agents across 5 departments to take your idea from concept to production—with you as the founder making key decisions at human-in-the-loop (HITL) gates.

```
💡 Your Idea
     ↓
🏢 The System (ASDO)
     ├── 📐 Architecture Department
     ├── 📦 Product Department
     ├── 💻 Development Department
     ├── 🚀 Release Department
     └── 🌐 Operations Department
     ↓
🚀 Production-Ready Software
```

---

## Why The System?

| Traditional Approach | The System (ASDO) |
|---------------------|-------------------|
| You write all the code | Agents write code, you review |
| Context switching between tasks | Specialized agents handle each domain |
| Forgetting architectural decisions | Decisions documented in ADRs |
| Inconsistent quality | QA engineer reviews every component |
| Manual deployment setup | DevOps agent generates IaC & CI/CD |
| You make every decision | You make *important* decisions (HITL gates) |

---

## Installation

### Prerequisites

- **Claude Code** - [Install Claude Code](https://claude.ai/code)
  ```bash
  # Verify installation
  claude --version
  ```

- **Git** - For submodule management
- **Node.js 18+** - For frontend projects
- **Python 3.10+** - For backend projects

### Option A: Submodule (Recommended)

Use The System as a submodule in your existing project or a new project directory.

```bash
# Create or navigate to your project
mkdir my-project && cd my-project
git init

# Add The System as submodule
git submodule add https://github.com/YOUR_USERNAME/the-system.git .the-system
git submodule update --init --recursive

# Create symlinks
ln -s .the-system/.claude .claude
ln -s .the-system/CLAUDE.md CLAUDE.md

# Create directories
mkdir -p input output

# Update .gitignore
cat >> .gitignore << 'EOF'
# The System
output/
input/
.claude/pipeline/projects/*.md
!.claude/pipeline/projects/TEMPLATE.md
.env
.env.local
EOF

# Verify and commit
.the-system/verify-the-system.sh
git add .
git commit -m "Add The System as submodule"
```

### Option B: Standalone Clone

```bash
# Clone directly
git clone https://github.com/YOUR_USERNAME/the-system.git
cd the-system
mkdir -p input output
./verify-the-system.sh
```

---

## Features

- 🏢 **Organizational Structure** — 5 departments, 18 agents, clear responsibilities
- 🚦 **Human-in-the-Loop Gates** — You approve architecture, green-light development, authorize launches
- 📋 **Full SDLC Coverage** — From ideation to production monitoring
- 📝 **Living Documentation** — Project state tracked in markdown, always up-to-date
- 🔧 **Customizable** — Add your own agents, commands, and preferences
- 🚀 **Multiple Deploy Paths** — Full IaC (Stage 4) or quick deploy to Vercel/Railway (Stage 5)
- ⚡ **Turbo Mode** — Run autonomously without approval gates (use with caution)

---

## The Organization

```
👤 Human Founder (You)
│
└── 🎩 Founder-Advisor (Chief of Staff)
    │
    ├── 📐 Architecture Department
    │   └── 🏗️ Enterprise Architect
    │
    ├── 📦 Product Department
    │   ├── 👔 Product Lead
    │   ├── 📅 Project Planner
    │   └── 💼 Business Analyst
    │
    ├── 💻 Development Department
    │   ├── 👨‍💼 Principal Developer
    │   ├── 🧪 QA Engineer
    │   ├── 🗄️ Database Developer
    │   ├── ⚙️ Backend Developer
    │   ├── 🎨 Frontend Developer
    │   └── 🔗 Integration Engineer
    │
    ├── 🚀 Release & Deployment Department
    │   ├── 📝 Technical Writer
    │   ├── 🔐 Security Engineer
    │   ├── 📦 Release Engineer
    │   └── 🚀 DevOps Engineer
    │
    └── 🌐 Operations Department (Optional)
        ├── 🚀 SRE Deploy Engineer
        └── 🛡️ SRE Ops Engineer
```

---

## Stages

| Stage | Department | Agents | Purpose |
|-------|------------|--------|---------|
| **Stage 1** | Architecture | 1 | System design, tech stack, ADRs |
| **Stage 2** | Product | 3 | MVP definition, roadmap, business analysis |
| **Stage 3** | Development | 6 | Implementation, testing, integration |
| **Stage 4** | Release | 4 | Docs, security, IaC, CI/CD |
| **Stage 5** | Operations | 2 | Quick deploy, monitoring, SLOs *(optional)* |

---

## Quick Start

### Prerequisites

- [Claude Code](https://claude.ai/code) installed
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/the-system.git
cd the-system

# Verify installation
chmod +x verify-the-system.sh
./verify-the-system.sh

# Start Claude Code
claude
```

### Your First Project

```bash
# 1. Start a new project
/ts-new-project my-awesome-app

# 2. Describe your idea to the Founder-Advisor
"I want to build a task management app with AI-powered prioritization"

# 3. Approve architecture to begin
/ts-approve architecture-start

# 4. Follow the workflow...
```

---

## Workflow Overview

```
/ts-new-project my-app          # Start
        │
        ▼
   [ Stage 1: Architecture ]
   /ts-architect                 # Design system
   /ts-approve architecture-lock # Lock decisions
        │
        ▼
   [ Stage 2: Product ]
   /ts-product                   # Define MVP
   /ts-plan                      # Create roadmap
   /ts-analyze                   # Business analysis
   /ts-approve green-light 🚦    # Approve for dev
        │
        ▼
   [ Stage 3: Development ]
   /ts-develop                   # Plan implementation
   /ts-build database            # Build DB layer
   /ts-build backend             # Build API layer
   /ts-build frontend            # Build UI layer
   /ts-integrate                 # Connect everything
   /ts-approve development       # Approve for release
        │
        ▼
   [ Stage 4: Release ]
   /ts-docs                      # Generate docs
   /ts-security                  # Security scan
   /ts-release                   # Package release
   /ts-infra                     # Generate Terraform
   /ts-pipeline                  # Generate CI/CD
   /ts-deploy production         # Deploy
   /ts-approve launch 🚀         # Go live!
        │
        ▼
   [ Stage 5: Go Live ] (Optional)
   /ts-push vercel               # Quick deploy
   /ts-monitor                   # Setup monitoring
   /ts-alerts                    # Configure alerts
        │
        ▼
   🎉 PRODUCTION
```

---

## Turbo Mode (Autonomous Execution)

> ⚡ **Run The System without human approval gates**

For rapid prototyping or experimentation, use Turbo Mode to run through Stages 1-4 automatically.

### Usage

```bash
/ts-turbo <project-name> "<idea description>"
```

### Example

```bash
/ts-turbo todo-app "A task manager with user auth, categories, and due dates"
```

This will:
1. Create the project
2. Run all architecture, product, and development stages
3. Generate all release artifacts
4. Skip all HITL approval gates

### Fully Autonomous Mode

Combine with `--dangerously-skip-permissions` for zero interaction:

```bash
claude --dangerously-skip-permissions

> /ts-turbo my-app "Build a REST API for inventory management"
```

---

## ⚠️ Turbo Mode & Permissions Warning

<table>
<tr>
<td width="80">⚠️</td>
<td>

### CAUTION: Understand the Implications

**Turbo Mode (`/ts-turbo`)** bypasses all human-in-the-loop gates:
- Architecture decisions are made without your review
- MVP scope is defined without your approval
- Code is written without quality checkpoints
- Security findings may be auto-acknowledged

**`--dangerously-skip-permissions`** auto-accepts all Claude Code operations:
- File creation and modification without confirmation
- Bash command execution without approval
- Potential for unintended file system changes
- No opportunity to review actions before execution

</td>
</tr>
</table>

### When to Use

| ✅ **Appropriate** | ❌ **Not Appropriate** |
|-------------------|----------------------|
| Learning The System | Production applications |
| Quick prototypes | Projects with real users |
| Experiments | Security-sensitive systems |
| Demos | Anything with real data |
| Throwaway projects | Client/commercial work |

### Safeguards

Even in Turbo Mode, these safeguards remain:
- 🔐 Security FAIL (critical vulnerabilities) stops execution
- 📁 All output goes to `output/[project]/` (isolated)
- 📝 Full audit log is maintained
- 🚫 Actual deployment is NOT included (manual step required)

### Recommendations

1. **Always review output** before deploying anywhere
2. **Run in isolated environment** when experimenting
3. **Never use on existing codebases** without backup
4. **Start with standard mode** to understand the workflow first

---

## Commands Reference

> 📖 **For complete command documentation with arguments and examples, see [Command Guide](docs/COMMAND-GUIDE.md)**

### Core Commands

| Command | Description |
|---------|-------------|
| `/ts-new-project <n>` | Start a new project |
| `/ts-status` | Check current project status |
| `/ts-view [section]` | View project details |
| `/ts-brief` | Get executive summary |
| `/ts-ask "<question>"` | Ask the Founder-Advisor |
| `/ts-approve <gate>` | Approve at HITL gate |
| `/ts-review <stage>` | Request stage review |
| `/ts-turbo <n> "<idea>"` | ⚡ Run autonomously (Stages 1-4) |

### Stage 1: Architecture

| Command | Agent | Description |
|---------|-------|-------------|
| `/ts-architect` | Enterprise Architect | Design system architecture |

### Stage 2: Product

| Command | Agent | Description |
|---------|-------|-------------|
| `/ts-product` | Product Lead | Define MVP and user stories |
| `/ts-plan` | Project Planner | Create roadmap and sprints |
| `/ts-analyze` | Business Analyst | Market and business analysis |

### Stage 3: Development

| Command | Agent | Description |
|---------|-------|-------------|
| `/ts-develop` | Principal Developer | Create implementation plan |
| `/ts-test-plan` | QA Engineer | Define test strategy |
| `/ts-build <layer>` | Dev Team | Build database/backend/frontend |
| `/ts-test <layer>` | QA Engineer | Test each layer |
| `/ts-integrate` | Integration Engineer | Connect all components |
| `/ts-gate` | Principal Developer | Quality gate review |
| `/ts-signoff` | QA Engineer | Final QA sign-off |

### Stage 4: Release & Deployment

| Command | Agent | Description |
|---------|-------|-------------|
| `/ts-docs` | Technical Writer | Generate documentation |
| `/ts-security` | Security Engineer | Run security scans |
| `/ts-release` | Release Engineer | Create release package |
| `/ts-infra` | DevOps Engineer | Generate Terraform |
| `/ts-pipeline` | DevOps Engineer | Generate CI/CD workflows |
| `/ts-deploy <env>` | DevOps Engineer | Deploy to environment |
| `/ts-verify <env>` | DevOps Engineer | Verify deployment |
| `/ts-rollback <env>` | DevOps Engineer | Rollback if needed |

### Stage 5: Go Live & Operate (Optional)

| Command | Agent | Description |
|---------|-------|-------------|
| `/ts-push <target>` | SRE Deploy | Deploy to Vercel/Railway/etc. |
| `/ts-live-status` | SRE Deploy | Check all deployments |
| `/ts-live-env <target>` | SRE Deploy | Manage environment variables |
| `/ts-domain <target>` | SRE Deploy | Configure custom domains |
| `/ts-teardown <target>` | SRE Deploy | Remove deployment |
| `/ts-monitor` | SRE Ops | Setup monitoring stack |
| `/ts-alerts` | SRE Ops | Configure alerting |
| `/ts-logs [target]` | SRE Ops | View logs |
| `/ts-health` | SRE Ops | Health check all services |
| `/ts-status-page` | SRE Ops | Create public status page |
| `/ts-incident` | SRE Ops | Incident management |
| `/ts-slo` | SRE Ops | Define and track SLOs |

---

## Human-in-the-Loop Gates

You maintain control at critical decision points:

| Gate | Command | What You're Approving |
|------|---------|----------------------|
| Architecture Start | `/ts-approve architecture-start` | Begin design phase |
| Architecture Lock | `/ts-approve architecture-lock` | Lock technical decisions |
| Green Light 🚦 | `/ts-approve green-light` | Approve for development |
| Development Done | `/ts-approve development` | Code complete, ready for release |
| Release Ready | `/ts-approve release` | Release package approved |
| Staging Verified | `/ts-approve staging` | Staging deployment OK |
| Production Ready | `/ts-approve production` | Production deployment OK |
| Launch 🚀 | `/ts-approve launch` | Go live! |

> 💡 **Note:** Turbo Mode (`/ts-turbo`) bypasses all these gates automatically.

---

## Project Structure

```
the-system/
├── .claude/
│   ├── agents/                 # 17 agent definitions
│   │   ├── founder-advisor.md
│   │   ├── enterprise-architect.md
│   │   ├── product-lead.md
│   │   ├── ... (14 more)
│   │   └── sre-ops-engineer.md
│   │
│   ├── commands/               # 40 command definitions
│   │   ├── ts-new-project.md
│   │   ├── ts-architect.md
│   │   ├── ts-turbo.md         # ⚡ Turbo mode
│   │   ├── ... (37 more)
│   │   └── ts-slo.md
│   │
│   ├── config/
│   │   ├── preferences.yaml    # System preferences
│   │   └── integrations.yaml   # Tool integrations
│   │
│   ├── knowledge/
│   │   ├── architecture-standards.md
│   │   └── gitignore-template.md
│   │
│   ├── hooks/
│   │   └── checkpoint.sh       # Auto-save hooks
│   │
│   └── pipeline/
│       └── projects/
│           └── TEMPLATE.md     # Project template
│
├── diagrams/                   # Mermaid diagrams
│   ├── 01-org-structure.mermaid
│   ├── 02-full-workflow.mermaid
│   └── ... (6 more)
│
├── .env.example                # Environment template
├── .gitignore
├── CLAUDE.md                   # Claude Code instructions
├── README.md                   # This file
└── verify-the-system.sh        # Installation verification
```

---

## Stage 5: Quick Deploy Targets

Skip full IaC and deploy directly to managed platforms:

### Frontend
| Target | Command | Free Tier |
|--------|---------|-----------|
| Vercel | `/ts-push vercel` | ✅ |
| Netlify | `/ts-push netlify` | ✅ |
| Cloudflare Pages | `/ts-push cloudflare` | ✅ |

### Backend
| Target | Command | Free Tier |
|--------|---------|-----------|
| Railway | `/ts-push railway` | ✅ Limited |
| Fly.io | `/ts-push fly` | ✅ Limited |
| Render | `/ts-push render` | ✅ Limited |

### Database
| Target | Command | Free Tier |
|--------|---------|-----------|
| Neon | `/ts-push neon` | ✅ |
| PlanetScale | `/ts-push planetscale` | ✅ |
| Supabase | `/ts-push supabase` | ✅ |

---

## Diagrams

Visual documentation in `/diagrams/`:

| Diagram | Description |
|---------|-------------|
| `01-org-structure.mermaid` | Full organizational chart |
| `02-full-workflow.mermaid` | Complete workflow |
| `03-simplified-linear-flow.mermaid` | Linear stage overview |
| `04-hitl-gates-flow.mermaid` | Approval gates |
| `05-stage3-build-test-cycle.mermaid` | Development cycle |
| `06-stage4-deployment-flow.mermaid` | Deployment process |
| `07-stage5-quick-deploy-flow.mermaid` | Quick deploy flow |
| `08-all-17-agents.mermaid` | All agents overview |

View at [mermaid.live](https://mermaid.live) or in VS Code with Mermaid extension.

---

## Verification

Run the verification script to ensure proper installation:

```bash
./verify-the-system.sh
```

Expected output:
```
╔══════════════════════════════════════════════════════════════════╗
║           THE SYSTEM IS CORRECTLY INSTALLED (Stage 1-5)          ║
╚══════════════════════════════════════════════════════════════════╝

  Passed:   79
  Failed:   0
  Warnings: 0
```

---

## Example Session

### Standard Mode (with approvals)

```bash
$ claude

> /ts-new-project todo-app

🎩 Founder-Advisor: Project "todo-app" created. Tell me about your idea.

> I want to build a simple todo app with user authentication, 
> task categories, and due date reminders.

🎩 Founder-Advisor: Excellent. I've analyzed your idea:

**Strategic Assessment:**
- Market: Competitive but room for focused solutions
- MVP Scope: Auth + Tasks + Categories + Reminders
- Tech Recommendation: Next.js + FastAPI + PostgreSQL

Ready to proceed? 

> /ts-approve architecture-start

🎩 Founder-Advisor: Architecture phase approved. 
   Handing off to Enterprise Architect...

🏗️ Enterprise Architect: Beginning system design...
```

### Turbo Mode (autonomous)

```bash
$ claude --dangerously-skip-permissions

> /ts-turbo todo-app "A simple todo app with user auth, categories, and reminders"

🚀 TURBO MODE ACTIVATED

⚡ Stage 1: Architecture... ✅ (auto-approved)
⚡ Stage 2: Product... ✅ (auto-approved)
⚡ Stage 3: Development... ✅ (auto-approved)
⚡ Stage 4: Release... ✅ (artifacts generated)

╔══════════════════════════════════════════════════════════════════╗
║                    🚀 TURBO MODE COMPLETE                        ║
╚══════════════════════════════════════════════════════════════════╝

Output: output/todo-app/
Review recommended before deployment.
```

---

## Configuration

### preferences.yaml

Located at `.claude/config/preferences.yaml`, customize tech stack defaults:

```yaml
# Tech stack defaults
backend:
  language: python           # python | typescript | go
  framework: fastapi         # fastapi | django | express | nestjs
database:
  primary: postgresql        # postgresql | mysql | mongodb
frontend:
  framework: nextjs          # nextjs | react | vue | svelte
  language: typescript       # typescript | javascript

# Quick deploy targets (Stage 5)
go_live:
  targets:
    frontend: vercel          # vercel | netlify | cloudflare
    backend: railway          # railway | fly | render
    database: neon            # neon | planetscale | supabase
```

### integrations.yaml

Enable external services at `.claude/config/integrations.yaml`:

```yaml
monitoring:
  sentry:
    enabled: true
    dsn: ${SENTRY_DSN}
  datadog:
    enabled: false

communication:
  slack:
    enabled: false
    channels:
      alerts: "#alerts"
```

---

## Troubleshooting

### Build Errors

```bash
# Automatic error diagnosis and fixes
/ts-fix

# Specific fixes
/ts-fix typescript
/ts-fix dependencies
```

### TypeScript Errors After Generation

```bash
/ts-validate frontend
/ts-fix
/ts-validate frontend
```

### Dependency Conflicts

```bash
cd output/my-app
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
```

### Submodule Issues

```bash
# Re-initialize submodules
git submodule update --init --recursive

# Re-create broken symlinks
rm -f .claude CLAUDE.md
ln -s .the-system/.claude .claude
ln -s .the-system/CLAUDE.md CLAUDE.md
```

### Claude Code Not Finding Commands

Ensure you're in the project root with `.claude/` directory visible:

```bash
ls -la .claude/commands/  # Should show 44 command files
```

---

## Customization

### Adding Your Own Agent

Create `.the-system/.claude/agents/my-agent.md`:

```markdown
---
name: my-agent
description: What this agent does
tools: Read, Write, Bash
model: inherit
---

# My Agent

Your agent instructions here...
```

### Adding Your Own Command

Create `.the-system/.claude/commands/ts-my-command.md`:

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
```

### Using Input Directory

Put reference materials in `input/` for agents to reference:

```bash
cd input
git clone https://github.com/example/reference-app.git

# Use in Claude Code
claude
> Read input/reference-app/src/auth.ts and use similar patterns
```

---

## Updating

### Update The System Submodule

```bash
cd my-project

# Update to latest
cd .the-system
git fetch origin && git checkout main && git pull origin main
cd ..

# Commit update
git add .the-system
git commit -m "Update The System to latest version"
```

### Update to Specific Version

```bash
cd .the-system
git fetch --tags
git checkout v1.1.0
cd ..
git add .the-system
git commit -m "Update The System to v1.1.0"
```

---

## Getting Help

### In Claude Code

```bash
/ts-ask How do I add a new API endpoint?
/ts-ask What's the current project status?
/ts-brief
```

### Generate Documentation

```bash
/ts-self-document
```

Creates comprehensive docs in `docs/` directory covering:
- Complete agent reference
- All command documentation
- Workflow guides
- HITL gates
- Configuration options
- Customization guides

---

## Quick Reference

```
┌─────────────────────────────────────────────────────────────────┐
│ THE SYSTEM - QUICK REFERENCE                                    │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│ START        /ts-new-project <name>                             │
│                                                                 │
│ ARCHITECTURE /ts-architect                                      │
│              /ts-approve architecture-lock                      │
│                                                                 │
│ PRODUCT      /ts-product → /ts-plan → /ts-analyze               │
│              /ts-approve green-light 🚦                        │
│                                                                 │
│ DEVELOPMENT  /ts-build database                                 │
│              /ts-build backend                                  │
│              /ts-build frontend                                 │
│              /ts-integrate → /ts-signoff                        │
│              /ts-approve development                            │
│                                                                 │
│ RELEASE      /ts-docs → /ts-security → /ts-release              │
│              /ts-infra → /ts-pipeline → /ts-deploy              │
│              /ts-approve launch 🚀                              │
│                                                                 │
│ QUICK DEPLOY /ts-push vercel|railway|neon                       │
│                                                                 │
│ UTILITIES    /ts-fix         Fix build errors                   │
│              /ts-validate    Run all checks                     │
│              /ts-turbo       Autonomous mode                    │
│              /ts-status      Check status                       │
│              /ts-brief       Summary                            │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## Philosophy

The System is built on these principles:

1. **You are the Founder** — AI agents work for you, not the other way around
2. **Human-in-the-Loop** — Critical decisions require your approval
3. **Specialized Agents** — Each agent has deep expertise in their domain
4. **Living Documentation** — The project file is always the source of truth
5. **Flexible Workflow** — Skip stages, customize processes, add your own agents
6. **Production-Ready Output** — Generated code follows best practices
7. **Progressive Autonomy** — Start supervised, go autonomous when comfortable

---

## Contributing

Contributions welcome! Areas of interest:

- New agents for specialized domains
- Additional deployment targets
- Workflow optimizations
- Documentation improvements

---

## License

### Project License

This project is licensed under the **GNU Lesser General Public License v3.0 (LGPL-3.0)**.

📄 **[Full License Text](LICENSE)** | 🔗 **[LGPL-3.0 Summary](https://choosealicense.com/licenses/lgpl-3.0/)**

#### What this means:

**✅ You CAN:**
- Use The System commercially and privately
- Modify and distribute The System
- Link to The System from proprietary software
- Use The System as a library in your projects

**📋 You MUST:**
- Include license and copyright notice
- State changes made to The System
- Disclose source code for modifications to The System itself
- Keep The System components under LGPL-3.0

**❌ Limitations:**
- No warranty provided
- No liability accepted
- Must use same license for The System modifications

### Contributing

**🚨 Important for Contributors:**

All contributions require acceptance of our **[Contributor License Agreement (CLA)](CLA.md)**.

- **By submitting any pull request**, you automatically accept the CLA terms
- **No separate signature required** — PR submission constitutes acceptance
- **You retain copyright** to your contributions
- **You grant us license** to use contributions in the project

👉 **[Read Contributing Guidelines](CONTRIBUTING.md)** | 📋 **[Review CLA Terms](CLA.md)**

### License Compatibility

LGPL-3.0 allows The System to be used in both open-source and proprietary projects while ensuring that improvements to The System itself remain open source.

---

<p align="center">
  <strong>The System</strong><br/>
  <em>ASDO — Autonomous Software Development Organization</em><br/>
  <sub>An AI-powered software company in your terminal</sub>
</p>
