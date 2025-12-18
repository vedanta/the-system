# 🏢 The System - Software Company Agent System

An agentic system that simulates a software company with specialized departments.

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
```

---

## Departments & Agents (17 Total)

### 🎩 Founder-Advisor
Your chief of staff. All communication flows through this agent.

### 📐 Architecture Department (Stage 1)
- **🏗️ Enterprise Architect** - System design, technical architecture, ADRs

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

---

## Commands

### Project Lifecycle
| Command | Purpose |
|---------|---------|
| `/ts-new-project <n>` | Start a new project |
| `/ts-status` | Check current status |
| `/ts-view [section]` | View project file |
| `/ts-brief` | Get executive summary |
| `/ts-ask <question>` | Ask advisor a question |
| `/ts-exec-summary` | Full executive summary |

### Approvals (Human Gates)
| Command | Purpose |
|---------|---------|
| `/ts-approve architecture-start` | Begin architecture |
| `/ts-approve architecture-lock` | Lock architecture |
| `/ts-approve green-light` | 🚦 Approve for development |
| `/ts-approve development` | Approve for Stage 4 |
| `/ts-approve release` | Approve release package |
| `/ts-approve staging` | Approve staging → production |
| `/ts-approve production` | Approve production |
| `/ts-approve launch` | 🚀 Final launch! |

### Stage 1: Architecture
| Command | Purpose |
|---------|---------|
| `/ts-architect` | Run architecture phase |
| `/ts-review architecture` | Review architecture |

### Stage 2: Product
| Command | Purpose |
|---------|---------|
| `/ts-product` | Define MVP (Product Lead) |
| `/ts-plan` | Create roadmap (Planner) |
| `/ts-analyze` | Business analysis (JSA) |
| `/ts-review product` | Review product (Green Light) |

### Stage 3: Development
| Command | Purpose |
|---------|---------|
| `/ts-develop` | Create implementation plan |
| `/ts-test-plan` | QA creates test strategy |
| `/ts-build database` | Build database layer |
| `/ts-test database` | QA reviews database |
| `/ts-build backend` | Build backend layer |
| `/ts-test backend` | QA reviews backend |
| `/ts-build frontend` | Build frontend layer |
| `/ts-test frontend` | QA reviews frontend |
| `/ts-integrate` | Connect all components |
| `/ts-test integration` | QA E2E testing |
| `/ts-gate` | Principal Developer review |
| `/ts-signoff` | QA final sign-off |
| `/ts-review development` | Founder-Advisor review |

### Stage 4: Release & Deployment
| Command | Purpose |
|---------|---------|
| `/ts-docs` | Generate documentation |
| `/ts-security` | Security validation |
| `/ts-release` | Create release package |
| `/ts-infra` | Generate infrastructure (Terraform) |
| `/ts-pipeline` | Generate CI/CD pipelines |
| `/ts-review release` | Review release package |
| `/ts-deploy staging` | Deploy to staging |
| `/ts-verify staging` | Verify staging deployment |
| `/ts-deploy production` | Deploy to production |
| `/ts-verify production` | Verify production |
| `/ts-rollback [env] [ver]` | Rollback deployment |

### Stage 5: Go Live & Operate (Optional)
| Command | Purpose |
|---------|---------|
| `/ts-push <target> [env]` | Deploy to managed platform |
| `/ts-live-status` | Check all deployments |
| `/ts-live-env <target>` | Manage environment variables |
| `/ts-domain <target> <domain>` | Configure custom domain |
| `/ts-teardown <target>` | Remove deployment |
| `/ts-monitor` | Set up monitoring stack |
| `/ts-alerts` | Configure alerting |
| `/ts-logs [target]` | View logs |
| `/ts-health` | Health check all services |
| `/ts-status-page` | Create public status page |
| `/ts-incident [action]` | Incident management |
| `/ts-slo` | Define and track SLOs |

---

## Full Workflow

```
1.  /ts-new-project my-app
2.  Share your idea with founder-advisor
3.  /ts-approve architecture-start

── Stage 1: Architecture ──
4.  /ts-architect
5.  /ts-review architecture
6.  /ts-approve architecture-lock

── Stage 2: Product ──
7.  /ts-product
8.  /ts-plan
9.  /ts-analyze
10. /ts-review product
11. /ts-approve green-light  🚦

── Stage 3: Development ──
12. /ts-develop
13. /ts-test-plan
14. /ts-build database    →  /ts-test database
15. /ts-build backend     →  /ts-test backend
16. /ts-build frontend    →  /ts-test frontend
17. /ts-integrate         →  /ts-test integration
18. /ts-gate
19. /ts-signoff
20. /ts-review development
21. /ts-approve development

── Stage 4: Release & Deployment ──
22. /ts-docs
23. /ts-security
24. /ts-release
25. /ts-infra
26. /ts-pipeline
27. /ts-review release
28. /ts-approve release
29. /ts-deploy staging
30. /ts-verify staging
31. /ts-approve staging
32. /ts-security production
33. /ts-deploy production
34. /ts-verify production
35. /ts-approve production
36. /ts-approve launch  🚀

── Stage 5: Go Live (Optional) ──
37. /ts-push neon           # Database
38. /ts-push railway        # Backend
39. /ts-push vercel         # Frontend
40. /ts-live-status
41. /ts-domain vercel app.example.com
42. /ts-monitor
43. /ts-alerts
44. /ts-slo
45. /ts-status-page
    🌐 OPERATIONAL!
```

---

## Stage 5 Quick Start

Skip Stage 4 and go straight to managed platforms:

```
After Stage 3 (/ts-approve development):

/ts-push neon              → Database live
/ts-push railway           → Backend live
/ts-push vercel            → Frontend live
/ts-live-status            → Check everything
/ts-domain vercel myapp.com → Custom domain
/ts-monitor                → Set up Sentry + Datadog
/ts-alerts                 → Configure alerts
/ts-health                 → Verify all healthy

🌐 LIVE in minutes!
```

---

## Stage 5 Targets

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
| Turso | `/ts-push turso` | ✅ |

### Full-Stack
| Target | Command | Includes |
|--------|---------|----------|
| Railway | `/ts-push railway full` | FE + BE + DB |
| Render | `/ts-push render full` | FE + BE + DB |

---

## Stages Summary

| Stage | Agents | Purpose | Required |
|-------|--------|---------|----------|
| Stage 1 | 2 | Foundation + Architecture | ✅ |
| Stage 2 | 3 | Product | ✅ |
| Stage 3 | 6 | Development | ✅ |
| Stage 4 | 4 | Release & Deployment (IaC) | Optional* |
| Stage 5 | 2 | Go Live & Operate (managed) | Optional |
| **Total** | **17** | | |

*Stage 4 or Stage 5 required for launch

---

## HITL Gates Summary

| Gate | Command | Blocker |
|------|---------|---------|
| Architecture Start | `/ts-approve architecture-start` | Human |
| Architecture Lock | `/ts-approve architecture-lock` | Human |
| Green Light | `/ts-approve green-light` | Human |
| Development Done | `/ts-approve development` | Human |
| Security Check | `/ts-security` | FAIL blocks |
| Release Approved | `/ts-approve release` | Human |
| Staging Approved | `/ts-approve staging` | Human |
| Pre-Prod Security | `/ts-security production` | CRITICAL blocks |
| Production Approved | `/ts-approve production` | Human |
| Launch | `/ts-approve launch` | Human |
