# The System

### ASDO — Autonomous Software Development Organization
> *An AI-powered software company in your terminal*

---

<p align="center">
  <img src="https://img.shields.io/badge/Agents-17-blue?style=for-the-badge" alt="17 Agents"/>
  <img src="https://img.shields.io/badge/Commands-40-green?style=for-the-badge" alt="40 Commands"/>
  <img src="https://img.shields.io/badge/Stages-5-purple?style=for-the-badge" alt="5 Stages"/>
  <img src="https://img.shields.io/badge/HITL_Gates-10-red?style=for-the-badge" alt="10 HITL Gates"/>
</p>

---

## What is The System?

**The System** is an agentic framework that simulates a complete software development organization. It orchestrates 17 specialized AI agents across 5 departments to take your idea from concept to production—with you as the founder making key decisions at human-in-the-loop (HITL) gates.

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

## Features

- 🏢 **Organizational Structure** — 5 departments, 17 agents, clear responsibilities
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

### Core Commands

| Command | Description |
|---------|-------------|
| `/ts-new-project <n>` | Start a new project |
| `/ts-status` | Check current project status |
| `/ts-view [section]` | View project details |
| `/ts-brief` | Get executive summary |
| `/ts-ask <question>` | Ask the Founder-Advisor |
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

## Configuration

### preferences.yaml

Customize tech stack defaults, naming conventions, and deployment targets:

```yaml
# Tech stack defaults
tech_stack:
  frontend: nextjs
  backend: fastapi
  database: postgresql

# Stage 5: Quick deploy
go_live:
  targets:
    frontend: vercel
    backend: railway
    database: neon
```

### integrations.yaml

Enable external tools and services:

```yaml
integrations:
  sentry:
    enabled: true
    dsn: ${SENTRY_DSN}
  
  datadog:
    enabled: true
    api_key: ${DATADOG_API_KEY}
```

---

## Customization

### Adding a New Agent

Create `.claude/agents/my-agent.md`:

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

### Adding a New Command

Create `.claude/commands/ts-my-command.md`:

```markdown
# My Command: $ARGUMENTS

What this command does.

## Process

1. Step one
2. Step two
3. Step three
```

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

MIT

---

<p align="center">
  <strong>The System</strong><br/>
  <em>ASDO — Autonomous Software Development Organization</em><br/>
  <sub>An AI-powered software company in your terminal</sub>
</p>
