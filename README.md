# The System
**ASDO — Autonomous Software Development Organization**

> *An AI-powered software company in your terminal*

Transform your ideas into production-ready software with 18 specialized AI agents across 5 departments, all working under your strategic guidance.

---

<p align="center">
  <img src="https://img.shields.io/badge/Agents-18-blue?style=for-the-badge" alt="18 Agents"/>
  <img src="https://img.shields.io/badge/Commands-45-green?style=for-the-badge" alt="45 Commands"/>
  <img src="https://img.shields.io/badge/Stages-5-purple?style=for-the-badge" alt="5 Stages"/>
  <img src="https://img.shields.io/badge/HITL_Gates-8-red?style=for-the-badge" alt="8 HITL Gates"/>
  <img src="https://img.shields.io/badge/Deploy_Targets-13+-orange?style=for-the-badge" alt="13+ Deploy Targets"/>
  <img src="https://img.shields.io/badge/License-LGPL--3.0-lightgreen?style=for-the-badge" alt="LGPL-3.0 License"/>
</p>

---

## 🚀 What is The System?

The System is an agentic framework that simulates a complete software development organization. It orchestrates 18 specialized AI agents across 5 departments to take your idea from concept to production—with you as the founder making key decisions at human-in-the-loop (HITL) gates.

### The Complete Software Company

```
💡 Your Idea
     ↓
🏢 The System (ASDO)
     ├── 📐 Architecture Department → System design & technical decisions
     ├── 📦 Product Department → MVP definition & business strategy
     ├── 💻 Development Department → Implementation & quality assurance
     ├── 🚀 Release Department → Documentation, security & deployment
     └── 🌐 Operations Department → Monitoring & live operations
     ↓
🚀 Production-Ready Software
```

### Why Choose The System?

| **Traditional Development** | **The System (ASDO)** |
|----------------------------|----------------------|
| You write all the code | Agents write code, you review and approve |
| Context switching between tasks | Specialized agents handle each domain expertly |
| Forgetting architectural decisions | Decisions documented in ADRs and project files |
| Inconsistent code quality | QA engineer reviews every component systematically |
| Manual deployment setup | DevOps agent generates Infrastructure as Code |
| You make every micro-decision | You make *strategic* decisions at HITL gates |
| Single tech stack expertise | Multi-stack expertise across all modern technologies |
| Solo development bottlenecks | 18 agents working in parallel coordination |

---

## ⚡ Quick Start

### Prerequisites

- **[Claude Code](https://claude.ai/code)** - The AI-powered development environment
- **Git** - For version control and submodule management
- **Node.js 18+** - For frontend projects (automatically detected)
- **Python 3.10+** - For backend projects (automatically detected)

### Installation Methods

#### Option A: Submodule (Recommended)
Use The System as a submodule to keep it updated while maintaining your project independence:

```bash
# Create your project directory
mkdir my-awesome-project && cd my-awesome-project
git init

# Add The System as a submodule
git submodule add https://github.com/YOUR_USERNAME/the-system.git .the-system
git submodule update --init --recursive

# Create symbolic links
ln -s .the-system/.claude .claude
ln -s .the-system/CLAUDE.md CLAUDE.md

# Create essential directories
mkdir -p input output

# Configure .gitignore
cat >> .gitignore << 'EOF'
# The System outputs and inputs
output/
input/
.claude/pipeline/projects/*.md
!.claude/pipeline/projects/TEMPLATE.md
.env
.env.local
EOF

# Verify installation and commit
.the-system/scripts/verify-the-system.sh
git add .
git commit -m "Add The System framework"
```

#### Option B: Direct Clone
For standalone use or framework development:

```bash
git clone https://github.com/YOUR_USERNAME/the-system.git
cd the-system
mkdir -p input output
./scripts/verify-the-system.sh
```

### Your First Project

```bash
# Launch Claude Code in your project directory
claude

# Start a new project
> /ts-new-project my-awesome-app

# Describe your idea to the Founder-Advisor
> "I want to build a task management app with AI-powered prioritization,
  user authentication, team collaboration, and real-time sync"

# Begin the structured development process
> /ts-approve architecture-start
```

**That's it!** The System guides you through each stage with clear next steps.

---

## ⚡ Build Presets - Work at the Speed of Thought

**New!** Choose the perfect balance of speed vs. quality for your project needs:

### Three Intelligent Build Modes

```bash
# 🚀 PROTOTYPE (3-5 min) - Fast iteration, demos, proof-of-concepts
/ts-turbo demo-app "simple todo app prototype" --build=prototype

# 📦 MVP (15-20 min) - Production launches, professional quality
/ts-turbo todo-app "todo app with authentication" --build=mvp

# 🏢 PRODUCTION (45-60 min) - Enterprise-grade, full compliance
/ts-turbo enterprise-app "mission-critical todo system" --build=production
```

### Smart Detection
The system automatically detects your intent from keywords:

- **Prototype**: "rapid", "demo", "prototype", "quick test", "POC"
- **Production**: "enterprise", "mission-critical", "compliant", "scalable"

### Performance Gains
- **Prototype builds**: Up to **10x faster** (3-5 min vs 45-60 min)
- **Fewer agents**: Prototype uses 3-5 agents vs 12+ for production
- **Quality scaling**: Each mode delivers appropriate quality for its use case

👉 **[Complete Build Presets Guide →](docs/user/build-presets.md)**
👉 **[Quick Reference →](docs/user/build-presets-quickref.md)**

---

## 🏗️ The Organization

### Organizational Structure

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
    │   ├── 🔗 Integration Engineer
    │   └── 🐛 Bug Fixer (Utility)
    │
    ├── 🚀 Release & Deployment Department
    │   ├── 📝 Technical Writer
    │   ├── 🔐 Security Engineer
    │   ├── 📦 Release Engineer
    │   └── 🚀 DevOps Engineer
    │
    └── 🌐 Operations Department
        ├── 🚀 SRE Deploy Engineer
        └── 🛡️ SRE Ops Engineer
```

### Agent Specializations

Each agent brings deep domain expertise:

- **🏗️ Enterprise Architect** - System design, technology selection, architectural decisions
- **👔 Product Lead** - MVP definition, user stories, product requirements
- **📅 Project Planner** - Roadmap creation, sprint planning, timeline estimation
- **💼 Business Analyst** - Market analysis, revenue modeling, go-to-market strategy
- **👨‍💼 Principal Developer** - Implementation planning, code review, technical leadership
- **🧪 QA Engineer** - Test strategy, quality gates, validation protocols
- **🗄️ Database Developer** - Schema design, migrations, data modeling
- **⚙️ Backend Developer** - API development, business logic, service architecture
- **🎨 Frontend Developer** - UI/UX implementation, state management, user experience
- **🔗 Integration Engineer** - Component integration, E2E testing, system verification
- **📝 Technical Writer** - Documentation, architecture guides, API references
- **🔐 Security Engineer** - Security scanning, vulnerability assessment, compliance
- **📦 Release Engineer** - Versioning, changelog generation, release packaging
- **🚀 DevOps Engineer** - Infrastructure as Code, CI/CD, deployment automation
- **🚀 SRE Deploy Engineer** - Quick deployment to managed platforms
- **🛡️ SRE Ops Engineer** - Monitoring, alerting, incident response, SLOs

---

## 🔄 Complete Workflow

### The Five-Stage Development Process

| Stage | Department | Focus | Key Outputs |
|-------|------------|-------|-------------|
| **Stage 1** | 📐 Architecture | System Design | Architecture Decision Records, Tech Stack Selection |
| **Stage 2** | 📦 Product | Business Strategy | MVP Definition, User Stories, Business Analysis |
| **Stage 3** | 💻 Development | Implementation | Database, Backend, Frontend, Integration |
| **Stage 4** | 🚀 Release | Deployment | Documentation, Security, Infrastructure, CI/CD |
| **Stage 5** | 🌐 Operations | Go Live | Quick Deploy, Monitoring, Alerting, SLOs |

### Standard Workflow (Supervised)

```
/ts-new-project my-app
├── Describe your idea to Founder-Advisor
│
┌─[ Stage 1: Architecture ]─────────────────────────┐
│ /ts-architect                                     │
│ /ts-approve architecture-lock                     │
└───────────────────────────────────────────────────┘
│
┌─[ Stage 2: Product ]──────────────────────────────┐
│ /ts-product     → Define MVP & user stories       │
│ /ts-plan        → Create roadmap & sprints        │
│ /ts-analyze     → Business & market analysis      │
│ /ts-approve green-light 🚦 → APPROVE FOR DEV      │
└───────────────────────────────────────────────────┘
│
┌─[ Stage 3: Development ]──────────────────────────┐
│ /ts-develop     → Implementation planning         │
│ /ts-test-plan   → QA strategy definition          │
│                                                   │
│ Build Phase:                                      │
│ /ts-build database  → /ts-test database           │
│ /ts-build backend   → /ts-test backend            │
│ /ts-build frontend  → /ts-test frontend           │
│ /ts-integrate       → /ts-test integration        │
│                                                   │
│ /ts-gate        → Principal Developer review      │
│ /ts-signoff     → QA final approval               │
│ /ts-approve development → READY FOR RELEASE       │
└───────────────────────────────────────────────────┘
│
┌─[ Stage 4: Release & Deployment ]─────────────────┐
│ /ts-docs        → Documentation generation        │
│ /ts-security    → Security scanning               │
│ /ts-release     → Release package creation        │
│ /ts-infra       → Terraform infrastructure        │
│ /ts-pipeline    → CI/CD workflow generation       │
│ /ts-deploy staging → Deploy to staging            │
│ /ts-verify staging → Verify staging deployment    │
│ /ts-approve staging → STAGING VERIFIED            │
│ /ts-deploy production → Deploy to production      │
│ /ts-verify production → Verify production         │
│ /ts-approve launch 🚀 → GO LIVE!                  │
└───────────────────────────────────────────────────┘
│
┌─[ Stage 5: Operations (Optional Quick Deploy) ]───┐
│ /ts-push vercel     → Frontend to Vercel          │
│ /ts-push railway    → Backend to Railway           │
│ /ts-push neon       → Database to Neon            │
│ /ts-domain vercel myapp.com → Custom domain       │
│ /ts-monitor         → Monitoring setup            │
│ /ts-alerts          → Alerting configuration      │
│ /ts-slo            → SLO definition & tracking    │
│ /ts-health         → Health check verification    │
└───────────────────────────────────────────────────┘
│
🎉 PRODUCTION READY
```

### Turbo Mode (Autonomous)

For rapid prototyping or experimentation, bypass all approval gates:

```bash
/ts-turbo my-app "Build a task management app with user auth and team collaboration"
```

**⚡ Turbo Mode runs Stages 1-4 automatically:**
- Architecture decisions made autonomously
- MVP scope defined without approval
- Complete development cycle executed
- All release artifacts generated
- Stops at deployment (requires manual approval)

**⚠️ Use Responsibly:**
- Perfect for learning, prototypes, and experiments
- Review all outputs before deploying to production
- Not recommended for production or client projects
- All changes isolated to `output/` directory

---

## 🎮 Commands Reference

### Core Project Management

| Command | Description | Usage |
|---------|-------------|-------|
| `/ts-new-project <name>` | Start a new project | `/ts-new-project ecommerce-app` |
| `/ts-status` | Check current project status | `/ts-status` |
| `/ts-view [section]` | View project details | `/ts-view architecture` |
| `/ts-brief` | Get executive summary | `/ts-brief` |
| `/ts-ask "<question>"` | Ask the Founder-Advisor | `/ts-ask "How do I add authentication?"` |
| `/ts-approve <gate>` | Approve at HITL gate | `/ts-approve green-light` |
| `/ts-review <stage>` | Request stage review | `/ts-review development` |
| `/ts-turbo <name> "<idea>"` | ⚡ Autonomous execution with Build Presets | `/ts-turbo blog "Personal blog with CMS" --build=mvp` |

### Stage 1: Architecture (1 command)

| Command | Agent | Description |
|---------|-------|-------------|
| `/ts-architect` | Enterprise Architect | Design complete system architecture |

### Stage 2: Product (3 commands)

| Command | Agent | Description |
|---------|-------|-------------|
| `/ts-product` | Product Lead | Define MVP and detailed user stories |
| `/ts-plan` | Project Planner | Create roadmap, sprints, and estimates |
| `/ts-analyze` | Business Analyst | Market analysis and business strategy |

### Stage 3: Development (7 commands)

| Command | Agent | Description |
|---------|-------|-------------|
| `/ts-develop` | Principal Developer | Create comprehensive implementation plan |
| `/ts-test-plan` | QA Engineer | Define testing strategy and protocols |
| `/ts-build <layer>` | Development Team | Build database/backend/frontend layers |
| `/ts-test <layer>` | QA Engineer | Test each layer systematically |
| `/ts-integrate` | Integration Engineer | Connect and verify all components |
| `/ts-gate` | Principal Developer | Quality gate review and approval |
| `/ts-signoff` | QA Engineer | Final quality assurance sign-off |

### Stage 4: Release & Deployment (8 commands)

| Command | Agent | Description |
|---------|-------|-------------|
| `/ts-docs` | Technical Writer | Generate comprehensive documentation |
| `/ts-security` | Security Engineer | Security scanning and vulnerability assessment |
| `/ts-release` | Release Engineer | Create release package with versioning |
| `/ts-infra` | DevOps Engineer | Generate Terraform infrastructure code |
| `/ts-pipeline` | DevOps Engineer | Create CI/CD workflow automation |
| `/ts-deploy <env>` | DevOps Engineer | Deploy to specified environment |
| `/ts-verify <env>` | DevOps Engineer | Verify deployment health and functionality |
| `/ts-rollback <env>` | DevOps Engineer | Rollback deployment if needed |

### Stage 5: Operations (12 commands)

| Command | Agent | Description |
|---------|-------|-------------|
| `/ts-push <target>` | SRE Deploy | Quick deploy to managed platforms |
| `/ts-live-status` | SRE Deploy | Check status of all deployments |
| `/ts-live-env <target>` | SRE Deploy | Manage environment variables |
| `/ts-domain <target> <domain>` | SRE Deploy | Configure custom domains |
| `/ts-teardown <target>` | SRE Deploy | Remove deployment cleanly |
| `/ts-monitor` | SRE Ops | Set up monitoring and observability |
| `/ts-alerts` | SRE Ops | Configure alerting and notifications |
| `/ts-logs [target]` | SRE Ops | View and analyze application logs |
| `/ts-health` | SRE Ops | Health check all services |
| `/ts-status-page` | SRE Ops | Create public status page |
| `/ts-incident [action]` | SRE Ops | Incident response and management |
| `/ts-slo` | SRE Ops | Define and track Service Level Objectives |

### Utility Commands (5 commands)

| Command | Agent | Description |
|---------|-------|-------------|
| `/ts-fix [type]` | Bug Fixer | Systematic error diagnosis and fixing |
| `/ts-validate [layer]` | QA Engineer | Build verification and validation |
| `/ts-turbo <name> "<idea>"` | System | Autonomous execution with Build Presets (Stages 1-4) |
| `/ts-turbo-quick <name> "<idea>"` | System | Fast autonomous mode |
| `/ts-self-document` | System | Generate framework documentation |

---

## 🚦 Human-in-the-Loop Gates

You maintain strategic control at 8 critical decision points:

| Gate | Command | What You're Approving | Blocking Conditions |
|------|---------|----------------------|-------------------|
| **Architecture Start** | `/ts-approve architecture-start` | Begin system design phase | None |
| **Architecture Lock** | `/ts-approve architecture-lock` | Lock technical decisions | Incomplete ADRs |
| **🚦 Green Light** | `/ts-approve green-light` | **Authorize development start** | No MVP definition |
| **Development Done** | `/ts-approve development` | Code complete, ready for release | Failed tests, build errors |
| **Release Ready** | `/ts-approve release` | Release package approved | Security FAIL |
| **Staging Verified** | `/ts-approve staging` | Staging deployment successful | Failed verification |
| **Production Ready** | `/ts-approve production` | Production deployment approved | Staging not verified |
| **🚀 Launch** | `/ts-approve launch` | **Go live to users!** | Production not verified |

### Gate Philosophy

- **You remain in control** of all strategic decisions
- **Agents handle execution** while you focus on direction
- **Quality gates ensure** nothing proceeds with critical issues
- **Flexible workflow** allows skipping or repeating stages

---

## 🚀 Quick Deploy Targets (Stage 5)

Skip Infrastructure as Code and deploy directly to managed platforms:

### Frontend Platforms

| Platform | Command | Free Tier | Best For |
|----------|---------|-----------|----------|
| **Vercel** | `/ts-push vercel` | ✅ Generous | Next.js, React, Vue, static sites |
| **Netlify** | `/ts-push netlify` | ✅ Good | JAMstack, static sites, forms |
| **Cloudflare Pages** | `/ts-push cloudflare` | ✅ Unlimited | Global CDN, edge computing |

### Backend Platforms

| Platform | Command | Free Tier | Best For |
|----------|---------|-----------|----------|
| **Railway** | `/ts-push railway` | ✅ Limited | Full-stack apps, databases included |
| **Fly.io** | `/ts-push fly` | ✅ Limited | Global deployment, edge locations |
| **Render** | `/ts-push render` | ✅ Limited | Simple deployment, managed services |

### Database Platforms

| Platform | Command | Free Tier | Database Type |
|----------|---------|-----------|---------------|
| **Neon** | `/ts-push neon` | ✅ 3GB | PostgreSQL (serverless, branching) |
| **PlanetScale** | `/ts-push planetscale` | ✅ 5GB | MySQL (serverless, branching) |
| **Supabase** | `/ts-push supabase` | ✅ 500MB | PostgreSQL + Auth + Storage |
| **Turso** | `/ts-push turso` | ✅ 9GB | SQLite (edge, distributed) |

### Full-Stack Options

| Platform | Command | What's Included |
|----------|---------|-----------------|
| **Railway** | `/ts-push railway full` | Frontend + Backend + Database |
| **Supabase** | `/ts-push supabase full` | Frontend + Backend + Auth + Database |

### Quick Deploy Workflow

```bash
# After Stage 3 (Development Complete)
/ts-approve development

# Skip Stage 4 IaC and go directly to managed platforms
/ts-push neon          # Database live in ~2 minutes
/ts-push railway       # Backend live in ~3 minutes
/ts-push vercel        # Frontend live in ~1 minute

# Configure and monitor
/ts-domain vercel myapp.com    # Custom domain
/ts-live-status               # Check all deployments
/ts-monitor                   # Set up monitoring
/ts-alerts                    # Configure alerts

# 🎉 Production ready in under 10 minutes!
```

---

## 📁 Framework Structure

```
the-system/
├── .claude/                    # Claude Code configuration
│   ├── agents/                 # 18 agent definitions
│   │   ├── founder-advisor.md
│   │   ├── enterprise-architect.md
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
│   ├── commands/               # 45 command definitions
│   │   ├── ts-new-project.md
│   │   ├── ts-status.md
│   │   ├── ts-architect.md
│   │   ├── ts-turbo.md
│   │   ├── ... (41 more commands)
│   │   └── ts-slo.md
│   │
│   ├── config/                 # System configuration
│   │   ├── preferences.yaml    # Tech stack defaults
│   │   └── integrations.yaml   # External service config
│   │
│   ├── knowledge/              # Shared knowledge base
│   │   ├── architecture-standards.md
│   │   └── gitignore-template.md
│   │
│   ├── hooks/                  # Automation hooks
│   │   └── checkpoint.sh       # Auto-save project state
│   │
│   └── pipeline/               # Project tracking
│       └── projects/           # Active project files
│           └── TEMPLATE.md     # Project template
│
├── docs/                       # Documentation
│   ├── user/                   # User-facing guides and references
│   │   ├── agents.md           # Complete agent reference
│   │   ├── commands.md         # Complete command reference
│   │   ├── workflow.md         # Step-by-step guides
│   │   ├── hitl-gates.md       # Approval gate documentation
│   │   ├── architecture.md     # System design and concepts
│   │   ├── configuration.md    # Configuration options
│   │   └── customization.md    # Extending The System
│   │
│   ├── developer/              # Development docs and proposals
│   │   ├── THE_SYSTEM_TODO.md  # Framework roadmap
│   │   ├── AGENT_ENHANCEMENT_PROPOSAL.md
│   │   ├── DEVELOPMENT-CONTEXT.md
│   │   └── ... (phase reports, design docs)
│   │
│   └── README.md               # Documentation index
│
├── diagrams/                   # Visual documentation
│   ├── 01-org-structure.mermaid
│   ├── 02-full-workflow.mermaid
│   ├── 03-simplified-linear-flow.mermaid
│   ├── 04-hitl-gates-flow.mermaid
│   ├── 05-stage3-build-test-cycle.mermaid
│   ├── 06-stage4-deployment-flow.mermaid
│   ├── 07-stage5-quick-deploy-flow.mermaid
│   └── 08-all-18-agents.mermaid
│
├── scripts/                    # Utility scripts
│   └── verify-the-system.sh    # Installation verification
│
├── input/                      # Reference materials (gitignored)
├── output/                     # Generated projects (gitignored)
│
├── README.md                   # This comprehensive guide
├── CLAUDE.md                   # Framework instructions for Claude Code
├── CHANGELOG.md                # Version history and release notes
├── .env.example                # Environment template
├── .gitignore                  # Git ignore configuration
├── VERSION                     # Current version
└── version.json                # Version metadata
```

---

## ⚙️ Configuration

### Tech Stack Preferences

Customize default technology choices in `.claude/config/preferences.yaml`:

```yaml
# Backend Configuration
backend:
  language: python              # python | typescript | go | rust
  framework: fastapi            # fastapi | django | express | nestjs | gin

# Database Configuration
database:
  primary: postgresql           # postgresql | mysql | mongodb | sqlite
  orm: sqlalchemy              # sqlalchemy | prisma | mongoose | gorm

# Frontend Configuration
frontend:
  framework: nextjs             # nextjs | react | vue | svelte | angular
  language: typescript          # typescript | javascript
  styling: tailwindcss          # tailwindcss | styled-components | scss

# Infrastructure Preferences
infrastructure:
  provider: aws                 # aws | gcp | azure | digital_ocean
  container: docker             # docker | podman
  orchestration: kubernetes     # kubernetes | docker-compose

# Stage 5 Quick Deploy Defaults
go_live:
  targets:
    frontend: vercel            # vercel | netlify | cloudflare
    backend: railway            # railway | fly | render
    database: neon              # neon | planetscale | supabase | turso
    monitoring: sentry          # sentry | datadog | newrelic
```

### External Service Integrations

Configure external services in `.claude/config/integrations.yaml`:

```yaml
# Monitoring & Observability
monitoring:
  sentry:
    enabled: true
    dsn: ${SENTRY_DSN}
  datadog:
    enabled: false
    api_key: ${DATADOG_API_KEY}

# Communication & Notifications
communication:
  slack:
    enabled: true
    channels:
      alerts: "#alerts"
      deployments: "#deployments"
  discord:
    enabled: false
    webhook_url: ${DISCORD_WEBHOOK}

# Authentication & Security
authentication:
  auth0:
    enabled: false
    domain: ${AUTH0_DOMAIN}
    client_id: ${AUTH0_CLIENT_ID}
  clerk:
    enabled: true
    publishable_key: ${CLERK_PUBLISHABLE_KEY}
    secret_key: ${CLERK_SECRET_KEY}

# Payment Processing
payments:
  stripe:
    enabled: false
    publishable_key: ${STRIPE_PUBLISHABLE_KEY}
    secret_key: ${STRIPE_SECRET_KEY}
```

---

## 🔧 Advanced Usage

### Custom Agent Development

Create specialized agents for your domain:

```bash
# Create custom agent
touch .claude/agents/my-specialist.md
```

```markdown
---
name: my-specialist
description: Specialized agent for my domain
tools: Read, Write, Bash, WebSearch
model: inherit
---

# My Specialist Agent

You are a specialized agent for [your domain].

## Responsibilities
- Specific task 1
- Specific task 2
- Domain expertise

## Process
1. Analyze requirements
2. Apply domain expertise
3. Generate specialized output
```

### Custom Command Creation

Add domain-specific commands:

```bash
# Create custom command
touch .claude/commands/ts-my-workflow.md
```

```markdown
# My Workflow: $ARGUMENTS

Execute my custom workflow process.

## Usage
```
/ts-my-workflow <parameters>
```

## Process
1. Validate inputs
2. Execute workflow steps
3. Generate outputs
4. Update project state

## Example
```
/ts-my-workflow user-onboarding --platform mobile
```
```

### Input Directory Usage

Provide reference materials for agents:

```bash
# Add reference materials
mkdir -p input
cd input

# Clone reference repositories
git clone https://github.com/company/style-guide.git
git clone https://github.com/company/component-library.git

# Add documentation
cp ~/Documents/requirements.pdf .
cp ~/Documents/brand-guidelines.pdf .
```

Use in Claude Code:
```bash
claude
> Read input/style-guide/README.md and apply these patterns
> Use input/component-library/src/Button.tsx as a reference
> Follow the requirements in input/requirements.pdf
```

---

## 🔍 Verification & Health Checks

### Installation Verification

Ensure The System is properly installed:

```bash
./scripts/verify-the-system.sh
```

**Expected Output:**
```
╔══════════════════════════════════════════════════════════════════╗
║           THE SYSTEM IS CORRECTLY INSTALLED (Stage 1-5)          ║
╚══════════════════════════════════════════════════════════════════╝

Framework Components:
  ✅ Agents: 18/18    (.claude/agents/)
  ✅ Commands: 45/45    (.claude/commands/)
  ✅ Config Files:     2/2      (.claude/config/)
  ✅ Knowledge Base:   2/2      (.claude/knowledge/)
  ✅ Documentation:    15/15    (docs/)
  ✅ Diagrams:         8/8      (diagrams/)
  ✅ Scripts:          1/1      (scripts/)

Project Structure:
  ✅ Input Directory:  Created   (input/)
  ✅ Output Directory: Created   (output/)
  ✅ Git Repository:   Valid     (.git/)

  Passed:   79
  Failed:   0
  Warnings: 0

🚀 Ready to build amazing software!
```

### Health Monitoring

Check system health during development:

```bash
# Overall project health
/ts-status

# Specific component health
/ts-validate database
/ts-validate backend
/ts-validate frontend

# Security health
/ts-security scan

# Deployment health
/ts-health
```

---

## 🚨 Troubleshooting

### Common Issues & Solutions

#### Build Errors After Generation

```bash
# Automatic diagnosis and fixes
/ts-fix

# Specific issue types
/ts-fix typescript      # TypeScript errors
/ts-fix dependencies    # Dependency conflicts
/ts-fix scan           # Diagnostic mode only
```

#### Dependency Conflicts

```bash
cd output/my-project
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
```

#### Submodule Issues

```bash
# Re-initialize submodules
git submodule update --init --recursive

# Recreate broken symlinks
rm -f .claude CLAUDE.md
ln -s .the-system/.claude .claude
ln -s .the-system/CLAUDE.md CLAUDE.md
```

#### Claude Code Not Finding Commands

```bash
# Verify command files exist
ls -la .claude/commands/ | wc -l
# Should show 45 command files

# Ensure you're in correct directory
pwd
ls -la .claude/
```

#### Permission Denied Errors

```bash
# Make scripts executable
chmod +x scripts/verify-the-system.sh
chmod +x .claude/hooks/checkpoint.sh
```

---

## 📚 Documentation

### Complete Documentation Suite

All user documentation is available in the `docs/` directory:

- **[Architecture Guide](docs/user/architecture.md)** - How The System works internally
- **[Agent Reference](docs/user/agents.md)** - Complete guide to all 18 agents
- **[Command Reference](docs/user/commands.md)** - All 45 commands with examples
- **[Workflow Guide](docs/user/workflow.md)** - Step-by-step implementation process
- **[HITL Gates](docs/user/hitl-gates.md)** - Human approval system documentation
- **[Configuration](docs/user/configuration.md)** - System configuration options
- **[Customization](docs/user/customization.md)** - Extending and customizing The System

### Generate Fresh Documentation

```bash
/ts-self-document
```

This creates comprehensive, up-to-date documentation covering:
- Agent capabilities and workflows
- Command usage and examples
- Configuration options
- Customization guides
- Troubleshooting procedures

---

## 🎯 Example Projects

### Simple Todo App

```bash
/ts-new-project simple-todo
> "A basic todo app with user authentication, task categories, and due dates"
/ts-approve architecture-start
# ... follow workflow
```

**Generated Stack:** Next.js + FastAPI + PostgreSQL + Clerk Auth

### E-commerce Platform

```bash
/ts-turbo ecommerce "Full e-commerce platform with product catalog, shopping cart,
payment processing, order management, and admin dashboard"
```

**Generated Stack:** Next.js + FastAPI + PostgreSQL + Stripe + Admin Panel

### SaaS Analytics Dashboard

```bash
/ts-new-project analytics-saas
> "Multi-tenant analytics dashboard with real-time data visualization,
custom reports, team collaboration, and API access"
/ts-approve architecture-start
# ... follow workflow with custom requirements
```

**Generated Stack:** React + Node.js + ClickHouse + Auth0 + Charts.js

---

## 🚀 Updates & Maintenance

### Updating The System

#### Submodule Updates

```bash
cd my-project

# Update to latest version
cd .the-system
git fetch origin && git checkout main && git pull origin main
cd ..

# Commit the update
git add .the-system
git commit -m "Update The System to latest version"

# Verify update
.the-system/scripts/verify-the-system.sh
```

#### Update to Specific Version

```bash
cd .the-system
git fetch --tags
git tag --list                    # See available versions
git checkout v1.2.0              # Use specific version
cd ..
git add .the-system
git commit -m "Update The System to v1.2.0"
```

### Staying Current

- **GitHub Releases** - Subscribe to releases for notifications
- **Version Checking** - Run verification script regularly
- **Documentation Updates** - Re-run `/ts-self-document` after updates

---

## 💡 Best Practices

### Project Organization

- **Use descriptive project names** - `ecommerce-mvp` not `test-app`
- **Leverage the input directory** - Provide reference materials for agents
- **Review all HITL gates carefully** - You're making strategic decisions
- **Keep projects focused** - Use MVP scope, expand in iterations

### Development Workflow

- **Start with standard mode** - Learn the workflow before using Turbo
- **Use Stage 5 for MVPs** - Quick deploy for validation and testing
- **Use Stage 4 for production** - Full IaC for serious deployments
- **Customize thoughtfully** - Modify preferences before starting projects

### Quality Assurance

- **Trust but verify** - Review generated code before deployment
- **Test thoroughly** - Use generated test suites and add custom tests
- **Monitor actively** - Set up proper monitoring and alerting
- **Backup regularly** - Version control everything, backup databases

---

## 🌟 Philosophy

The System is built on these foundational principles:

### 1. **You Are The Founder**
AI agents work for you, not the other way around. You make strategic decisions while agents handle execution.

### 2. **Human-in-the-Loop Control**
Critical decisions require your approval. You remain in control of your project's direction and quality standards.

### 3. **Specialized Expertise**
Each agent brings deep domain knowledge. No single point of failure, no context switching overhead.

### 4. **Living Documentation**
Project state is always current and accessible. Everything is documented as decisions are made.

### 5. **Flexible Workflow**
Skip stages, customize processes, add your own agents. The framework adapts to your needs.

### 6. **Production-Ready Output**
Generated code follows best practices, includes tests, documentation, and deployment infrastructure.

### 7. **Progressive Autonomy**
Start supervised to learn the process, then use autonomous modes for rapid iteration.

### 8. **Transparency**
Full audit trail of all decisions and changes. No black boxes, everything is explainable.

---

## 🤝 Getting Help

### Within The System

```bash
# Ask the Founder-Advisor
/ts-ask "How do I add authentication to my app?"
/ts-ask "What's the best database for my use case?"
/ts-ask "How do I deploy to production?"

# Get project summary
/ts-brief
/ts-status

# Review specific stages
/ts-review architecture
/ts-review development
```

### Community & Support

- **Documentation**: Complete guides in `docs/user/`
- **GitHub Issues**: [Report bugs and request features](https://github.com/anthropics/claude-code/issues)
- **Verification**: Run `./scripts/verify-the-system.sh` for diagnostics
- **Self-Documentation**: Use `/ts-self-document` for fresh docs

---

## 📄 License

MIT License - See [LICENSE](LICENSE) file for details.

---

## 🚀 Quick Reference Card

```
┌─────────────────────────────────────────────────────────────────┐
│                    THE SYSTEM - QUICK REFERENCE                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│ 🏗️  START         /ts-new-project <name>                        │
│                                                                 │
│ 📐  ARCHITECTURE  /ts-architect                                 │
│                   /ts-approve architecture-lock                 │
│                                                                 │
│ 📦  PRODUCT       /ts-product → /ts-plan → /ts-analyze          │
│                   /ts-approve green-light 🚦                   │
│                                                                 │
│ 💻  DEVELOPMENT   /ts-build database|backend|frontend           │
│                   /ts-integrate → /ts-signoff                   │
│                   /ts-approve development                       │
│                                                                 │
│ 🚀  RELEASE       /ts-docs → /ts-security → /ts-release         │
│                   /ts-infra → /ts-pipeline → /ts-deploy         │
│                   /ts-approve launch 🚀                         │
│                                                                 │
│ 🌐  QUICK DEPLOY  /ts-push vercel|railway|neon                  │
│                   /ts-monitor → /ts-alerts                      │
│                                                                 │
│ ⚡  UTILITIES     /ts-turbo <name> "<idea>"  # Autonomous       │
│                   /ts-fix                    # Fix errors       │
│                   /ts-validate              # Run checks        │
│                   /ts-status                # Check status      │
│                   /ts-brief                 # Get summary       │
│                                                                 │
│ 🚦  HITL GATES    architecture-start | architecture-lock       │
│                   green-light | development | release           │
│                   staging | production | launch                 │
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
  <sub>Transform ideas into production-ready software with AI agents</sub><br/>
  <br/>
  <a href="docs/README.md">📚 Documentation</a> •
  <a href="CHANGELOG.md">📋 Changelog</a> •
  <a href="https://github.com/anthropics/claude-code/issues">🐛 Issues</a>
</p>