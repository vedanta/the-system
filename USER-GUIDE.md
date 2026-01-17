# The System User Guide
**Complete Reference for Autonomous Software Development Organization**

> *Comprehensive documentation for mastering The System's full capabilities*

This guide contains all the detailed information, workflows, commands, and advanced features for using The System effectively.

---

## 📖 Table of Contents

1. [Getting Started](#getting-started)
2. [Complete Installation Guide](#complete-installation-guide)
3. [The Organization](#the-organization)
4. [Design Department](#design-department) **NEW**
5. [Complete Workflow](#complete-workflow)
6. [Build Presets](#build-presets)
7. [Commands Reference](#commands-reference)
8. [HITL Gates](#hitl-gates)
9. [Quick Deploy Targets](#quick-deploy-targets)
10. [Framework Structure](#framework-structure)
11. [Configuration](#configuration)
12. [Advanced Usage](#advanced-usage)
13. [Example Projects](#example-projects)
14. [Verification & Health Checks](#verification-health-checks)
15. [Troubleshooting](#troubleshooting)
16. [Updates & Maintenance](#updates-maintenance)
17. [Best Practices](#best-practices)

---

## Getting Started

### What is The System?

The System is an agentic framework that simulates a complete software development organization. It orchestrates **19 specialized AI agents** across **5 departments** to take your idea from concept to production—with you as the founder making key decisions at human-in-the-loop (HITL) gates.

### Key Value Propositions

| **Traditional Development** | **The System (ASDO)** |
|----------------------------|----------------------|
| You write all the code | Agents write code, you review and approve |
| Context switching between tasks | Specialized agents handle each domain expertly |
| Forgetting architectural decisions | Decisions documented in ADRs and project files |
| Inconsistent code quality | QA engineer reviews every component systematically |
| Manual deployment setup | DevOps agent generates Infrastructure as Code |
| You make every micro-decision | You make *strategic* decisions at HITL gates |
| Single tech stack expertise | Multi-stack expertise across all modern technologies |
| Solo development bottlenecks | 19 agents working in parallel coordination |

---

## Complete Installation Guide

### Prerequisites

- **[Claude Code](https://claude.ai/code)** - The AI-powered development environment
- **Git** - For version control and submodule management
- **Node.js 18+** - For frontend projects (automatically detected)
- **Python 3.10+** - For backend projects (automatically detected)

### Option A: Submodule Installation (Recommended)

Use The System as a submodule to keep it updated while maintaining your project independence:

```bash
# Create your project directory
mkdir my-project && cd my-project
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

### Option B: Direct Clone

For standalone use or framework development:

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/the-system.git
cd the-system

# Verify installation
./scripts/verify-the-system.sh

# Create project directories
mkdir -p input output
```

### Option C: Manual Setup

Extract The System into your existing project:

```bash
# In your existing project directory
git clone https://github.com/YOUR_USERNAME/the-system.git .the-system

# Create symbolic links
ln -s .the-system/.claude .claude
ln -s .the-system/CLAUDE.md CLAUDE.md

# Update .gitignore
echo "output/" >> .gitignore
echo "input/" >> .gitignore
echo ".the-system/" >> .gitignore

# Verify setup
.the-system/scripts/verify-the-system.sh
```

### Updating The System

When using submodules (recommended), update The System:

```bash
# Pull latest changes to The System submodule
git submodule update --remote .the-system

# Commit the update
git add .the-system
git commit -m "Update The System to latest version"
```

---

## The Organization

### Company Structure

```
👤 You (Founder)
     │
🎩 Founder-Advisor ────────── Your Strategic Partner
     │
     ├──────────────┬──────────────┬──────────────┬──────────────┐
     ▼              ▼              ▼              ▼              ▼
📐 Architecture  📦 Product    💻 Development  🚀 Release     🌐 Operations
   Department       Department     Department      Department     Department
     │              │              │              │              │
     │              │              │              │              │
🏗️ Enterprise    👔 Product      👨‍💼 Principal   📝 Technical    🚀 SRE Deploy
   Architect        Lead          Developer       Writer         Engineer
                    │              │              │              │
🔍 Solution      📅 Project      🧪 QA           🔐 Security      🛡️ SRE Ops
   Architect        Planner        Engineer       Engineer       Engineer
                    │              │              │
                 💼 Business     🗄️ Database     📦 Release
                    Analyst        Developer      Engineer
                                   │              │
                                 ⚙️ Backend      🚀 DevOps
                                   Developer      Engineer
                                   │
                                 🎨 Frontend
                                   Developer
                                   │
                                 🔗 Integration
                                   Engineer
```

### The 19 Specialists

#### 🎩 Strategic Layer (1)
- **Founder-Advisor** - Your chief of staff and communication hub

#### 📐 Architecture Department (2)
- **Enterprise Architect** - System design, technical architecture, ADRs
- **Solution Architect** - Technology assessment, stack selection, preset recommendations

#### 📦 Product Department (3)
- **Product Lead** - MVP definition, user stories, PRD
- **Project Planner** - Roadmap, sprints, estimates
- **Business Analyst** - Market analysis, revenue model, GTM

#### 💻 Development Department (6)
- **Principal Developer** - Implementation planning, code review, quality gates
- **QA Engineer** - Test planning, reviews, integration testing, sign-off
- **Database Developer** - Schema, models, migrations
- **Backend Developer** - APIs, services, business logic
- **Frontend Developer** - Components, pages, state management
- **Integration Engineer** - Connects components, E2E verification

#### 🚀 Release Department (4)
- **Technical Writer** - Architecture docs, guides, README
- **Security Engineer** - Security validation, compliance, scanning
- **Release Engineer** - Versioning, changelog, artifacts
- **DevOps Engineer** - IaC, CI/CD, deployment, monitoring

#### 🌐 Operations Department (2)
- **SRE Deploy Engineer** - Quick deploy to managed platforms
- **SRE Ops Engineer** - Monitoring, alerting, incidents, SLOs

#### 🔧 Utility Agents (1)
- **Bug Fixer** - Standalone utility for systematic error diagnosis

---

## Design Department

### 🎨 Prototype-First Design Pipeline **NEW**

The Design Department transforms the traditional UX workflow by delivering **80% of stakeholder value in 25% of the time** through rapid prototype creation with optional comprehensive analysis packages.

#### Core Philosophy: Prototype-First Approach

Instead of requiring comprehensive analysis before seeing results, the Design Department creates working interactive demos immediately, then adds analysis only when needed.

```
Traditional UX Process:           Design Department Approach:
┌─────────────────────────────┐  ┌─────────────────────────────┐
│ 1. Analysis      (3-4 min) │  │ 1. Prototypes   (3-4 min) │
│ 2. Wireframes    (2-3 min) │  │ ✓ Demo ready!              │
│ 3. Prototypes    (4-6 min) │  │                             │
│ 4. Documentation (1-2 min) │  │ Optional:                   │
│ ────────────────────────────│  │ 2. Analysis     (+2-3 min) │
│ Total: 10-15 minutes        │  │ 3. Wireframes   (+2-3 min) │
│ First demo: 10+ minutes     │  │ 4. Documentation (+1 min)  │
└─────────────────────────────┘  └─────────────────────────────┘
```

#### Key Capabilities

| Feature | Default Mode | With Handoff | With Analysis |
|---------|-------------|-------------|---------------|
| **Duration** | 3-4 minutes | +3-6 minutes | +8-12 minutes |
| **Prototypes** | ✅ Interactive demos | ✅ + Dev specs | ✅ + Complete analysis |
| **Content** | ✅ Realistic data | ✅ Domain-optimized | ✅ API-driven content |
| **Styling** | ✅ Professional | ✅ Design tokens | ✅ Design system |
| **Mobile** | ✅ Responsive | ✅ Touch-optimized | ✅ Multi-device specs |
| **Analytics** | ✅ Available | ✅ Behavior tracking | ✅ UX recommendations |

#### Quick Commands

```bash
# Default: Rapid stakeholder demo (3-4 minutes)
/ts-design-turbo input/my-app

# Domain-optimized for specific industries
/ts-design-turbo input/fintech-app --domain=fintech --fidelity=high --review-server
/ts-design-turbo input/ecommerce-store --domain=ecommerce --mobile --analytics

# Development handoff packages (opt-in)
/ts-design-turbo input/production-app --handoff=minimal     # +30 seconds
/ts-design-turbo input/production-app --handoff=detailed    # +3-4 minutes
/ts-design-turbo input/production-app --handoff=comprehensive # +5-6 minutes

# Complete analysis pipeline for complex projects
/ts-design-turbo input/legacy-system --all --handoff=comprehensive  # 12-15 minutes
```

#### Integration with The System

The Design Department integrates seamlessly between Architecture and Development stages:

```
Stage 1: Architecture → Stage 1.5: Design → Stage 2: Product → Development
```

**Benefits for Development Agents:**
- **Frontend Development**: Component specifications, TypeScript interfaces, design tokens
- **Backend Development**: API requirements, realistic test data, integration patterns
- **QA Testing**: User scenarios, interaction patterns, accessibility requirements

👉 **[Complete Design Department Guide →](README_DESIGN_DEPT.md)**

---

## Complete Workflow

### The Five-Stage Development Cycle

| Stage | Department | Focus | Duration | Key Agents | Output |
|-------|------------|-------|----------|------------|--------|
| **Stage 1** | 📐 Architecture | System Design | 2-5 min | Enterprise Architect, Solution Architect | Locked tech stack & architecture |
| **Stage 2** | 📦 Product | Business Strategy | 3-8 min | Product Lead, Planner, Analyst | MVP definition & business plan |
| **Stage 3** | 💻 Development | Implementation | 10-30 min | All development team | Working application |
| **Stage 4** | 🚀 Release | Deployment Ready | 5-15 min | Release team | Production deployment package |
| **Stage 5** | 🌐 Operations | Go Live | 5-10 min | SRE team | Live, monitored application |

### Standard Workflow (Supervised)

The complete human-in-the-loop workflow with strategic decision points:

```bash
# 1. Project Initiation
/ts-new-project my-app
# → Share your idea with Founder-Advisor
# → Get preliminary technology assessment

# 2. Architecture & Planning (Stage 1)
/ts-approve architecture-start          # Gate 1: Begin design
/ts-assess                              # Solution Architect: Technology assessment
/ts-architect                           # Enterprise Architect: System design
/ts-review architecture
/ts-approve architecture-lock           # Gate 2: Lock technical decisions

# 3. Product & Business (Stage 2)
/ts-product                            # Product Lead: MVP definition
/ts-plan                               # Project Planner: Roadmap & sprints
/ts-analyze                            # Business Analyst: Market & revenue
/ts-review product
/ts-approve green-light                # Gate 3: 🚦 Authorize development

# 4. Development & Implementation (Stage 3)
/ts-develop                            # Principal Developer: Implementation plan
/ts-test-plan                          # QA Engineer: Test strategy
/ts-build database                     # Database Developer: Schema & models
/ts-test database                      # QA Engineer: Test database layer
/ts-build backend                      # Backend Developer: APIs & services
/ts-test backend                       # QA Engineer: Test backend
/ts-build frontend                     # Frontend Developer: UI & components
/ts-test frontend                      # QA Engineer: Test frontend
/ts-integrate                          # Integration Engineer: Connect components
/ts-test integration                   # QA Engineer: E2E testing
/ts-gate                               # Principal Developer: Quality review
/ts-signoff                            # QA Engineer: Final sign-off
/ts-review development
/ts-approve development                # Gate 4: Code complete

# 5. Release & Deployment (Stage 4)
/ts-docs                               # Technical Writer: Documentation
/ts-security                           # Security Engineer: Security scan
/ts-release                            # Release Engineer: Release package
/ts-infra                              # DevOps Engineer: Infrastructure code
/ts-pipeline                           # DevOps Engineer: CI/CD workflows
/ts-review release
/ts-approve release                    # Gate 5: Release package approved
/ts-deploy staging                     # DevOps Engineer: Deploy to staging
/ts-verify staging                     # DevOps Engineer: Verify staging
/ts-approve staging                    # Gate 6: Staging verified
/ts-deploy production                  # DevOps Engineer: Deploy to production
/ts-verify production                  # DevOps Engineer: Verify production
/ts-approve production                 # Gate 7: Production ready
/ts-approve launch                     # Gate 8: 🚀 Go live!

# 6. Operations & Go Live (Stage 5) - Optional
/ts-push neon                          # Deploy database to Neon
/ts-push railway                       # Deploy backend to Railway
/ts-push vercel                        # Deploy frontend to Vercel
/ts-live-status                        # Check deployment status
/ts-domain vercel my-app.com           # Configure custom domain
/ts-monitor                            # SRE Ops: Setup monitoring
/ts-alerts                             # SRE Ops: Configure alerts
/ts-slo                                # SRE Ops: Define SLOs
/ts-status-page                        # SRE Ops: Public status page
```

### Build Presets

Control the speed vs. completeness trade-off with build presets:

| **Build Preset** | **Duration** | **Agent Usage** | **Best For** |
|------------------|-------------|----------------|--------------|
| **🏃‍♂️ Prototype + Skip Product** | **1-2 min** | **2-19 agents** | Architecture design only, rapid validation |
| **🚀 Prototype** | **3-5 min** | **3-19 agents** | Working app, basic features, rapid iteration |
| **📦 MVP** | **15-20 min** | **7-19 agents** | Production-ready, professional quality, proper testing |
| **📦 MVP + Skip Release** | **12-15 min** | **6-19 agents** | Production-ready without docs/security scans |
| **🏢 Production** | **45-60 min** | **12-19 agents** | Enterprise-grade, full compliance, comprehensive docs |

#### Preset Detection

Build presets are automatically detected from your project description:

**Prototype Triggers:**
- Keywords: "rapid", "demo", "prototype", "quick test", "POC", "experiment"
- Time phrases: "in 5 minutes", "quickly", "fast"
- Casual language: "just want to try", "simple app"

**Production Triggers:**
- Keywords: "enterprise", "mission-critical", "compliant", "scalable"
- Compliance: "HIPAA", "SOC2", "GDPR", "financial"
- Scale: "high-traffic", "production-grade", "enterprise"

#### Manual Preset Override

```bash
# Explicit preset selection
/ts-turbo my-app "todo app with auth" --build=prototype
/ts-turbo my-app "todo app with auth" --build=mvp
/ts-turbo my-app "todo app with auth" --build=production

# Skip stages
/ts-turbo my-app "todo app with auth" --skip=product
/ts-turbo my-app "todo app with auth" --skip=release
```

---

## Commands Reference

The System provides **49 commands** organized by stage and function:

### Core Project Management (8)

| Command | Purpose | Usage |
|---------|---------|-------|
| `/ts-new-project <name>` | Start a new project | `/ts-new-project my-app` |
| `/ts-status` | Check current project status | `/ts-status` |
| `/ts-view [section]` | View project file sections | `/ts-view architecture` |
| `/ts-brief` | Get executive summary | `/ts-brief` |
| `/ts-ask <question>` | Ask Founder-Advisor a question | `/ts-ask "How do I add auth?"` |
| `/ts-exec-summary` | Full executive summary | `/ts-exec-summary` |
| `/ts-approve <gate>` | Approve at HITL gate | `/ts-approve green-light` |
| `/ts-review <stage>` | Request stage review | `/ts-review architecture` |

### Stage 1: Architecture (2)

| Command | Agent | Purpose |
|---------|-------|---------|
| `/ts-assess` | Solution Architect | Technology assessment and preset recommendation |
| `/ts-architect` | Enterprise Architect | Run architecture design phase |

### Stage 2: Product (3)

| Command | Agent | Purpose |
|---------|-------|---------|
| `/ts-product` | Product Lead | Define MVP and user stories |
| `/ts-plan` | Project Planner | Create roadmap and sprints |
| `/ts-analyze` | Business Analyst | Market and business analysis |

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
| `/ts-rollback <env>` | DevOps Engineer | Rollback deployment |

### Stage 5: Operations (12)

| Command | Agent | Purpose |
|---------|-------|---------|
| `/ts-push <target>` | SRE Deploy | Deploy to managed platform |
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

### Utility Commands (5)

| Command | Agent | Purpose |
|---------|-------|---------|
| `/ts-fix [type]` | Bug Fixer | Fix build errors systematically |
| `/ts-validate [layer]` | QA Engineer | Run build verification |
| `/ts-turbo <name> "<idea>"` | System | Run Stages 1-4 autonomously |
| `/ts-turbo-quick <name> "<idea>"` | System | Quick turbo mode |
| `/ts-self-document` | System | Generate framework documentation |

### Special Commands (1)

| Command | Purpose |
|---------|---------|
| `/ts-user-docs-update` | Update user documentation with accurate counts |

---

## HITL Gates

You maintain control through **8 Human-in-the-Loop Gates**:

| Gate # | Gate Name | Command | Decision Point |
|--------|-----------|---------|----------------|
| **1** | Architecture Start | `/ts-approve architecture-start` | Begin design phase |
| **2** | Architecture Lock | `/ts-approve architecture-lock` | Lock technical decisions |
| **3** | 🚦 Green Light | `/ts-approve green-light` | **Authorize development start** |
| **4** | Development Done | `/ts-approve development` | Code complete, ready for release |
| **5** | Release Ready | `/ts-approve release` | Release package approved |
| **6** | Staging Verified | `/ts-approve staging` | Staging deployment OK |
| **7** | Production Ready | `/ts-approve production` | Production deployment approved |
| **8** | 🚀 Launch | `/ts-approve launch` | **Go live to users!** |

### Gate Philosophy

**Strategic Control**: You make high-level decisions while agents handle detailed execution.

| **Traditional Development** | **The System Gates** |
|----------------------------|---------------------|
| You decide every implementation detail | Agents handle implementation, you approve direction |
| Context switching between tasks | Focus only on strategic decisions |
| Micromanaging code quality | Trust QA processes, approve outcomes |
| Manual deployment coordination | Approve deployments, not deployment mechanics |

### Gate Bypass Options

```bash
# Standard mode - all gates required
/ts-architect
# ... requires /ts-approve architecture-lock

# Turbo mode - bypass all gates automatically
/ts-turbo my-app "simple blog"
# ... runs through all stages autonomously

# Hybrid mode - selective gate bypass
/ts-turbo my-app "simple blog" --gates=critical-only
# ... only requires green-light and launch approval
```

---

## Quick Deploy Targets

Skip Infrastructure as Code and deploy directly to managed platforms in Stage 5:

### Frontend Platforms

| Platform | Command | Free Tier | Best For |
|----------|---------|-----------|----------|
| **Vercel** | `/ts-push vercel` | ✅ Generous | Next.js, React, Vue, Static sites |
| **Netlify** | `/ts-push netlify` | ✅ | JAMstack, Static sites, Form handling |
| **Cloudflare Pages** | `/ts-push cloudflare` | ✅ | Global CDN, Edge computing, Fast builds |

### Backend Platforms

| Platform | Command | Free Tier | Best For |
|----------|---------|-----------|----------|
| **Railway** | `/ts-push railway` | ✅ Limited | Full-stack apps, Databases included |
| **Fly.io** | `/ts-push fly` | ✅ Limited | Global deployment, Docker containers |
| **Render** | `/ts-push render` | ✅ Limited | Simple deployment, Background jobs |

### Database Platforms

| Platform | Command | Free Tier | Best For |
|----------|---------|-----------|----------|
| **Neon** | `/ts-push neon` | ✅ | PostgreSQL, Serverless, Branching |
| **PlanetScale** | `/ts-push planetscale` | ✅ | MySQL, Branching, Connection pooling |
| **Supabase** | `/ts-push supabase` | ✅ | PostgreSQL + Auth + Real-time |
| **Turso** | `/ts-push turso` | ✅ | SQLite, Edge deployment |

### Full-Stack Platforms

| Platform | Command | Includes |
|----------|---------|----------|
| **Railway** | `/ts-push railway full` | Frontend + Backend + Database |
| **Render** | `/ts-push render full` | Frontend + Backend + Database |

### Deployment Workflow

```bash
# Stage 5: Quick Deploy (after Stage 4 completion)

# Option A: Traditional separation
/ts-push neon              # Database
/ts-push railway           # Backend
/ts-push vercel            # Frontend

# Option B: Full-stack platform
/ts-push railway full      # Everything in one platform

# Post-deployment setup
/ts-live-status            # Verify all deployments
/ts-domain vercel my-app.com  # Custom domain
/ts-monitor                # Setup monitoring
/ts-alerts                 # Configure alerts

# 🎉 You're live!
```

### Environment Management

```bash
# Manage environment variables
/ts-live-env vercel           # View Vercel env vars
/ts-live-env railway set DATABASE_URL="..."
/ts-live-env neon get         # Get Neon connection strings

# Health monitoring
/ts-health                    # Check all deployments
/ts-logs vercel              # View Vercel logs
/ts-logs railway             # View Railway logs
```

---

## Framework Structure

### Directory Layout

```
the-system/
├── .claude/                   # Framework core
│   ├── agents/                # 19 agent definitions
│   │   ├── founder-advisor.md
│   │   ├── enterprise-architect.md
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
│   ├── commands/              # 49 command definitions
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
│   │   └── ts-user-docs-update.md
│   │
│   ├── config/
│   │   ├── preferences.yaml    # Tech stack defaults
│   │   ├── presets.yaml       # Build preset definitions
│   │   └── builds.yaml        # Build configuration
│   │
│   ├── knowledge/
│   │   ├── architecture-standards.md
│   │   └── gitignore-template.md
│   │
│   ├── hooks/
│   │   └── checkpoint.sh      # Auto-save hooks
│   │
│   └── pipeline/
│       └── projects/
│           └── TEMPLATE.md    # Project template
│
├── input/                     # Reference materials (gitignored)
├── output/                    # Generated projects (gitignored)
├── docs/                      # Generated documentation
├── scripts/                   # Utility scripts
├── diagrams/                  # Mermaid diagrams
├── CLAUDE.md                  # Framework instructions
├── README.md                  # User-facing documentation
├── USER-GUIDE.md             # This comprehensive guide
└── QUICKSTART.md             # 5-minute onboarding
```

---

## Configuration

### Technology Stack Preferences

Configure your default technology preferences in `.claude/config/preferences.yaml`:

```yaml
# Technology Stack Defaults
technology:
  frontend:
    default: "nextjs"
    options: ["nextjs", "react", "vue", "svelte"]

  backend:
    default: "nextjs-api"
    options: ["nextjs-api", "fastapi", "express", "nestjs"]

  database:
    default: "postgresql"
    options: ["postgresql", "sqlite", "mysql", "mongodb"]

  auth:
    default: "nextauth"
    options: ["nextauth", "clerk", "lucia", "firebase"]

# Build Preferences
builds:
  default_preset: "mvp"
  auto_detect: true
  skip_confirmations: false

# Deployment Preferences
deployment:
  preferred_platforms:
    frontend: "vercel"
    backend: "railway"
    database: "neon"

  auto_domain: true
  monitoring_enabled: true
```

### Build Presets Configuration

Customize build presets in `.claude/config/presets.yaml`:

```yaml
presets:
  prototype:
    description: "Fast iteration, basic features"
    target_duration: "3-5 min"
    agent_strategy: "minimal"
    skip_stages: []
    skip_agents: ["security-engineer", "technical-writer"]

  mvp:
    description: "Production-ready, professional quality"
    target_duration: "15-20 min"
    agent_strategy: "optimized"
    skip_stages: []
    skip_agents: []

  production:
    description: "Enterprise-grade, full compliance"
    target_duration: "45-60 min"
    agent_strategy: "comprehensive"
    skip_stages: []
    skip_agents: []
```

### Build Configuration

Control build behavior in `.claude/config/builds.yaml`:

```yaml
# Build System Configuration
build_system:
  default_mode: "mvp"

  modes:
    prototype:
      time_target: "3-5 minutes"
      quality_level: "working_demo"
      documentation: "minimal"
      testing: "basic"

    mvp:
      time_target: "15-20 minutes"
      quality_level: "production_ready"
      documentation: "essential"
      testing: "comprehensive"

    production:
      time_target: "45-60 minutes"
      quality_level: "enterprise_grade"
      documentation: "complete"
      testing: "exhaustive"

# Agent Coordination
coordination:
  parallel_execution: true
  dependency_tracking: true
  quality_gates: true
```

---

## Advanced Usage

### Custom Agent Development

Add your own specialized agents:

```markdown
---
name: custom-agent
description: My custom agent for specific tasks
tools: Read, Write, Bash
model: inherit
---

# Custom Agent

Instructions for your custom agent...
```

### Custom Command Development

Create custom commands:

```markdown
# Custom Command: $ARGUMENTS

Description of what this command does.

## Usage
```
/ts-custom-command <args>
```

## Process
1. Step one
2. Step two
3. Step three
```

### Integration with Existing Workflows

Use The System in existing development workflows:

```bash
# Integrate with existing project
cd my-existing-project
git submodule add https://github.com/YOUR_USERNAME/the-system.git .the-system
ln -s .the-system/.claude .claude

# Generate components for existing codebase
/ts-new-project existing-enhancement
/ts-build frontend    # Generate new components
# Copy generated components to existing project
```

---

## Example Projects

### Quick Prototypes (3-5 minutes)

```bash
# Simple web app prototypes
/ts-turbo todo-prototype "simple todo app with local storage" --build=prototype
/ts-turbo blog-prototype "personal blog with markdown posts" --build=prototype
/ts-turbo calculator-prototype "scientific calculator web app" --build=prototype

# CLI tool prototypes
/ts-turbo file-organizer-cli "CLI tool to organize files by type" --build=prototype
/ts-turbo json-formatter-cli "CLI JSON formatter and validator" --build=prototype
```

### Production MVPs (15-20 minutes)

```bash
# E-commerce applications
/ts-turbo shop-mvp "e-commerce platform with Stripe payments and inventory" --build=mvp
/ts-turbo marketplace-mvp "multi-vendor marketplace with user auth" --build=mvp

# SaaS applications
/ts-turbo analytics-mvp "SaaS analytics dashboard with API integrations" --build=mvp
/ts-turbo project-mgmt-mvp "project management tool with team collaboration" --build=mvp

# Content platforms
/ts-turbo cms-mvp "headless CMS with admin panel and API" --build=mvp
/ts-turbo forum-mvp "community forum with moderation and voting" --build=mvp
```

### Enterprise Systems (45-60 minutes)

```bash
# Compliance-heavy applications
/ts-turbo healthcare-system "patient management with HIPAA compliance" --build=production
/ts-turbo fintech-platform "trading platform with SOC2 compliance" --build=production
/ts-turbo hr-system "HR management with GDPR compliance" --build=production

# High-scale applications
/ts-turbo social-platform "social media platform with real-time features" --build=production
/ts-turbo iot-dashboard "IoT device management with real-time monitoring" --build=production
```

---

## Verification & Health Checks

### Installation Verification

```bash
# Verify The System installation
./scripts/verify-the-system.sh

# Expected output:
✅ Framework structure validated
✅ All 19 agents found
✅ All 49 commands found
✅ Configuration files valid
✅ The System ready for use
```

### Project Health Checks

```bash
# Check current project status
/ts-status

# Validate build setup
/ts-validate

# Health check all services
/ts-health

# Fix common issues automatically
/ts-fix
```

### Build Verification

The System includes automatic build verification:

```bash
# Manual build verification
/ts-validate frontend    # Verify frontend builds
/ts-validate backend     # Verify backend builds
/ts-validate database    # Verify database setup
/ts-validate integration # Verify full integration

# Automatic verification (runs before QA sign-off)
# TypeScript compilation must pass
# Tests must pass
# Linting must pass
# No critical security issues
```

### Framework Verification

```bash
# Count agents and commands
ls .claude/agents/*.md | wc -l      # Should show 19 agent files
ls .claude/commands/*.md | wc -l    # Should show 49 command files

# Verify specific components
ls .claude/agents/                  # List all agents
ls .claude/commands/               # List all commands

# Test core functionality
/ts-new-project test-verification
/ts-status                         # Should show project initialized
```

---

## Troubleshooting

### Common Issues

| Issue | Symptoms | Solution |
|-------|----------|----------|
| **Command not found** | `/ts-*` commands fail | Check `.claude/commands/` directory exists |
| **Agent missing** | "Agent not found" errors | Verify `.claude/agents/` has all 19 files |
| **Build failures** | Generated code won't compile | Run `/ts-fix` for automatic diagnosis |
| **Deployment errors** | `/ts-deploy` or `/ts-push` fails | Check platform credentials and quotas |

### Diagnostic Commands

```bash
# Check framework installation
./scripts/verify-the-system.sh

# Check project status
/ts-status
/ts-brief

# Fix build issues
/ts-fix                    # General error fixing
/ts-fix typescript         # TypeScript-specific issues
/ts-fix dependencies       # Dependency conflicts

# Validate layers individually
/ts-validate database      # Test database setup
/ts-validate backend       # Test backend compilation
/ts-validate frontend      # Test frontend build
```

### Framework Issues

```bash
# Verify framework structure
find .claude -name "*.md" | wc -l   # Should show 65+ files

# Check for missing components
test -f .claude/agents/founder-advisor.md && echo "✅ Core agent found"
test -f .claude/commands/ts-status.md && echo "✅ Core command found"

# Reinstall framework (submodule)
git submodule deinit .the-system
git submodule update --init --recursive .the-system
```

### Agent Communication Issues

```bash
# Test agent communication
/ts-ask "Can you hear me?"         # Test Founder-Advisor
/ts-status                         # Test project state reading

# Clear project state (if corrupted)
rm .claude/pipeline/projects/*.md
/ts-new-project fresh-start        # Reinitialize
```

---

## Updates & Maintenance

### Updating The System

When using submodules (recommended):

```bash
# Check current version
cd .the-system && git describe --tags

# Update to latest version
git submodule update --remote .the-system
git add .the-system
git commit -m "Update The System framework"

# Update documentation
/ts-user-docs-update
```

### Version Management

```bash
# Pin to specific version
cd .the-system
git checkout v1.2.0
cd ..
git add .the-system
git commit -m "Pin The System to v1.2.0"

# Return to latest
git submodule update --remote .the-system
```

### Maintenance Commands

```bash
# Update framework documentation
/ts-self-document              # Regenerate all docs
/ts-user-docs-update          # Update user documentation

# Clean up old projects
rm -rf output/old-project-*

# Verify framework integrity
./scripts/verify-the-system.sh
```

---

## Best Practices

### Project Organization

```bash
# Use descriptive project names
/ts-new-project ecommerce-mvp          # ✅ Clear purpose
/ts-new-project my-app                 # ❌ Generic name

# Organize related projects
mkdir projects/ecommerce
cd projects/ecommerce
/ts-new-project customer-portal
/ts-new-project admin-dashboard
/ts-new-project mobile-app
```

### Workflow Optimization

```bash
# Use appropriate build presets
/ts-turbo demo "quick demo app" --build=prototype        # For demos
/ts-turbo mvp "production app" --build=mvp              # For launches
/ts-turbo enterprise "critical system" --build=production # For compliance

# Skip unnecessary stages when appropriate
/ts-turbo api-only "REST API service" --skip=frontend   # API-only projects
/ts-turbo static "marketing site" --skip=backend       # Static sites
```

### Quality Control

```bash
# Always run validation before important deployments
/ts-validate                    # Before /ts-signoff
/ts-security                   # Before production deploy
/ts-health                     # After deployment

# Use proper approval workflow
/ts-approve green-light        # Don't skip product approval
/ts-approve production         # Always verify production deployment
```

### Deployment Strategy

```bash
# Test staging first
/ts-deploy staging
/ts-verify staging
/ts-approve staging           # Only then deploy production

# Use appropriate platforms
/ts-push vercel              # For frontend (fast, reliable)
/ts-push railway             # For backend (includes database)
/ts-push neon                # For database (PostgreSQL, scalable)
```

### Development Efficiency

```bash
# Use /ts-ask for guidance
/ts-ask "What's the best auth solution for this project?"
/ts-ask "How should I structure the database for multi-tenancy?"
/ts-ask "What's the recommended deployment strategy?"

# Leverage automatic error fixing
/ts-fix                      # Run when build fails
/ts-validate                 # Verify fixes worked
```

### Documentation Habits

```bash
# Keep documentation fresh
/ts-docs                     # Generate technical documentation
/ts-self-document           # Update framework documentation
/ts-user-docs-update        # Update user guides

# Use built-in documentation
/ts-view architecture       # Review system design
/ts-brief                   # Quick project overview
/ts-status                  # Current progress status
```

---

## 🎯 Quick Reference Summary

### Essential Commands
```bash
/ts-new-project <name>       # Start new project
/ts-status                   # Check progress
/ts-turbo <name> "<idea>"   # Full autonomous build
/ts-ask "<question>"        # Get help
/ts-fix                     # Fix errors automatically
```

### Standard Workflow
```bash
Architecture → Product → Development → Release → Operations
   1-2 min     3-8 min     10-30 min     5-15 min    5-10 min
```

### Quick Deploy
```bash
/ts-push neon|railway|vercel    # Deploy to managed platforms
/ts-domain <platform> <domain>  # Configure custom domain
/ts-monitor                     # Setup monitoring
```

---

*This User Guide covers all features of The System. For quick onboarding, see [QUICKSTART.md](QUICKSTART.md). For framework development, see [CLAUDE.md](CLAUDE.md).*

**Ready to build production software with The System!** 🚀