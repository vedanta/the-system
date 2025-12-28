# 📖 The System Command Reference Guide

Complete reference for all 44 commands in The System ASDO framework.

## Command Syntax Convention

```
/command-name <required-arg> [optional-arg] [--flag]
```

- `<arg>` = Required argument
- `[arg]` = Optional argument
- `[--flag]` = Optional flag/option
- `|` = Alternative options (choose one)

---

## 🚀 Project Lifecycle Commands

### `/ts-new-project <project-name>`
Initialize a new project with the ASDO framework.

**Arguments:**
- `<project-name>` - Project identifier (alphanumeric, hyphens allowed)

**Examples:**
```bash
/ts-new-project todo-app
/ts-new-project e-commerce-platform
/ts-new-project my-blog
```

**Creates:**
- Project directory structure
- Initial project file in `.claude/pipeline/projects/`
- Basic configuration

---

### `/ts-status [project-name]`
Check current project status and stage progression.

**Arguments:**
- `[project-name]` - Optional project name (defaults to current project)

**Examples:**
```bash
/ts-status                    # Current project
/ts-status todo-app          # Specific project
```

**Output:**
- Current stage and progress
- Pending approvals
- Recent agent activities

---

### `/ts-view [section]`
View project file contents or specific sections.

**Arguments:**
- `[section]` - Optional section name

**Valid sections:**
- `architecture` - Architecture decisions and design
- `product` - MVP scope and user stories
- `development` - Implementation details
- `release` - Release notes and deployment info
- `approvals` - Approval history
- `timeline` - Project timeline

**Examples:**
```bash
/ts-view                     # Full project file
/ts-view architecture        # Architecture section only
/ts-view product            # Product section only
```

---

### `/ts-brief [project-name]`
Get executive summary of project status.

**Arguments:**
- `[project-name]` - Optional project name (defaults to current)

**Examples:**
```bash
/ts-brief
/ts-brief todo-app
```

---

### `/ts-ask "<question>"`
Ask the founder-advisor a question about the project.

**Arguments:**
- `<question>` - Question in quotes

**Examples:**
```bash
/ts-ask "What's our current technical debt?"
/ts-ask "Are we ready for Stage 3?"
/ts-ask "What are the main risks for this release?"
```

---

### `/ts-exec-summary [project-name]`
Generate comprehensive executive summary.

**Arguments:**
- `[project-name]` - Optional project name

**Examples:**
```bash
/ts-exec-summary
/ts-exec-summary my-app
```

---

## ⚡ Autonomous Mode Commands

### `/ts-turbo <project-name> "<idea-description>"`
Execute all stages autonomously without HITL gates.

**Arguments:**
- `<project-name>` - Project identifier
- `<idea-description>` - Detailed description of the application idea

**Examples:**
```bash
/ts-turbo todo-app "A task management app with user auth, categories, and due date reminders"
/ts-turbo blog-platform "A markdown-based blog with auth, posts, comments, and RSS feed"
/ts-turbo invoice-tool "Invoice generator with PDF export, client management, and payment tracking"
/ts-turbo ecommerce "Online store with product catalog, shopping cart, and Stripe integration"
```

**Executes:**
- Stage 1-4 automatically
- No human approval gates
- Complete application generation

---

### `/ts-turbo-quick <project-name> "<simple-idea>"`
Rapid prototyping mode for simple applications.

**Arguments:**
- `<project-name>` - Project identifier
- `<simple-idea>` - Brief description for MVP

**Examples:**
```bash
/ts-turbo-quick calculator "Basic calculator with history"
/ts-turbo-quick notes "Simple note-taking app"
```

---

## 🔐 Approval Commands (HITL Gates)

### `/ts-approve <gate-type> [project-name]`
Approve progression through human-in-the-loop gates.

**Gate Types:**
- `architecture-start` - Begin architecture phase
- `architecture-lock` - Lock architecture design
- `green-light` - Approve for development (🚦 critical gate)
- `development` - Approve development completion
- `release` - Approve release package
- `staging` - Approve staging deployment
- `production` - Approve production deployment
- `launch` - Final launch approval (🚀 critical gate)

**Arguments:**
- `<gate-type>` - Required gate type from list above
- `[project-name]` - Optional project name

**Examples:**
```bash
/ts-approve architecture-start
/ts-approve green-light todo-app
/ts-approve release
/ts-approve launch my-blog
```

---

## 🏗️ Stage 1: Architecture Commands

### `/ts-architect [project-name]`
Execute architecture phase with Enterprise Architect.

**Arguments:**
- `[project-name]` - Optional project name

**Examples:**
```bash
/ts-architect
/ts-architect todo-app
```

**Generates:**
- System context diagram
- Component architecture
- Data model design
- API contracts
- Architecture Decision Records (ADRs)
- Tech stack selection

---

### `/ts-review architecture [project-name]`
Review architecture decisions and design.

**Arguments:**
- `[project-name]` - Optional project name

**Examples:**
```bash
/ts-review architecture
/ts-review architecture my-app
```

---

## 📦 Stage 2: Product Commands

### `/ts-product [project-name]`
Define MVP with Product Lead.

**Arguments:**
- `[project-name]` - Optional project name

**Examples:**
```bash
/ts-product
/ts-product ecommerce-app
```

**Generates:**
- MVP scope definition
- User stories with acceptance criteria
- Product Requirements Document (PRD)
- Feature prioritization

---

### `/ts-plan [project-name]`
Create roadmap and sprint planning.

**Arguments:**
- `[project-name]` - Optional project name

**Examples:**
```bash
/ts-plan
/ts-plan todo-app
```

**Generates:**
- Development roadmap
- Sprint breakdown
- Effort estimates
- Timeline projections

---

### `/ts-analyze [project-name]`
Business analysis with JSA (Job-to-be-done, Scale, Architecture).

**Arguments:**
- `[project-name]` - Optional project name

**Examples:**
```bash
/ts-analyze
/ts-analyze blog-platform
```

**Generates:**
- Market analysis
- Revenue model assessment
- Go-to-market strategy
- Competitive analysis

---

### `/ts-review product [project-name]`
Review product definition for green-light approval.

**Arguments:**
- `[project-name]` - Optional project name

**Examples:**
```bash
/ts-review product
/ts-review product my-app
```

---

## 💻 Stage 3: Development Commands

### `/ts-develop [project-name]`
Create implementation plan with Principal Developer.

**Arguments:**
- `[project-name]` - Optional project name

**Examples:**
```bash
/ts-develop
/ts-develop todo-app
```

**Generates:**
- Technical implementation strategy
- Development task breakdown
- Code organization plan

---

### `/ts-test-plan [project-name]`
Create test strategy with QA Engineer.

**Arguments:**
- `[project-name]` - Optional project name

**Examples:**
```bash
/ts-test-plan
/ts-test-plan ecommerce
```

**Generates:**
- Test strategy document
- Test case specifications
- QA review criteria

---

### `/ts-build <component> [project-name]`
Build specific application components.

**Component Types:**
- `database` - Database schema, models, migrations
- `backend` - APIs, services, business logic
- `frontend` - UI components, pages, state management

**Arguments:**
- `<component>` - Required component type
- `[project-name]` - Optional project name

**Examples:**
```bash
/ts-build database
/ts-build backend todo-app
/ts-build frontend
```

**Database builds:**
- PostgreSQL schema
- SQLAlchemy models
- Alembic migrations
- Database seed data

**Backend builds:**
- FastAPI application
- API routes and endpoints
- Authentication system
- Business logic services
- Data validation

**Frontend builds:**
- React/Next.js application
- UI components library
- State management (Zustand/Redux)
- Routing configuration
- Styling (Tailwind CSS)

---

### `/ts-test <component> [project-name]`
QA testing and review for specific components.

**Component Types:**
- `database` - Database layer review
- `backend` - Backend API testing
- `frontend` - Frontend component testing
- `integration` - End-to-end testing

**Arguments:**
- `<component>` - Required component type
- `[project-name]` - Optional project name

**Examples:**
```bash
/ts-test database
/ts-test backend todo-app
/ts-test integration
```

**Testing includes:**
- Code quality review
- Security validation
- Performance assessment
- Integration verification

---

### `/ts-integrate [project-name]`
Connect all components with Integration Engineer.

**Arguments:**
- `[project-name]` - Optional project name

**Examples:**
```bash
/ts-integrate
/ts-integrate my-app
```

**Integration includes:**
- Component connectivity
- Docker configuration
- Environment setup
- End-to-end verification

---

### `/ts-gate [project-name]`
Principal Developer quality gate review.

**Arguments:**
- `[project-name]` - Optional project name

**Examples:**
```bash
/ts-gate
/ts-gate todo-app
```

---

### `/ts-signoff [project-name]`
QA Engineer final development sign-off.

**Arguments:**
- `[project-name]` - Optional project name

**Examples:**
```bash
/ts-signoff
/ts-signoff my-app
```

---

### `/ts-review development [project-name]`
Founder-Advisor development review.

**Arguments:**
- `[project-name]` - Optional project name

**Examples:**
```bash
/ts-review development
/ts-review development ecommerce
```

---

## 🚀 Stage 4: Release & Deployment Commands

### `/ts-docs [project-name]`
Generate comprehensive documentation.

**Arguments:**
- `[project-name]` - Optional project name

**Examples:**
```bash
/ts-docs
/ts-docs todo-app
```

**Generates:**
- Architecture documentation
- API reference
- User guides
- Deployment instructions
- README files

---

### `/ts-security [environment] [project-name]`
Security validation and scanning.

**Environment Types:**
- `staging` - Staging environment security check
- `production` - Production security validation

**Arguments:**
- `[environment]` - Optional environment (defaults to staging)
- `[project-name]` - Optional project name

**Examples:**
```bash
/ts-security                 # Staging security scan
/ts-security production      # Production security scan
/ts-security staging my-app  # Specific project staging scan
```

**Security checks:**
- Dependency vulnerability scan
- Static Application Security Testing (SAST)
- Secrets detection
- Compliance validation

---

### `/ts-release [project-name]`
Create release package.

**Arguments:**
- `[project-name]` - Optional project name

**Examples:**
```bash
/ts-release
/ts-release todo-app
```

**Generates:**
- Version determination
- CHANGELOG.md
- Release notes
- Build artifacts

---

### `/ts-infra [project-name]`
Generate Infrastructure as Code.

**Arguments:**
- `[project-name]` - Optional project name

**Examples:**
```bash
/ts-infra
/ts-infra ecommerce
```

**Generates:**
- Terraform modules
- AWS/GCP/Azure configurations
- Infrastructure documentation

---

### `/ts-pipeline [project-name]`
Generate CI/CD pipelines.

**Arguments:**
- `[project-name]` - Optional project name

**Examples:**
```bash
/ts-pipeline
/ts-pipeline my-blog
```

**Generates:**
- GitHub Actions workflows
- Build and test automation
- Deployment pipelines

---

### `/ts-deploy <environment> [project-name]`
Deploy to specified environment.

**Environment Types:**
- `staging` - Deploy to staging environment
- `production` - Deploy to production environment

**Arguments:**
- `<environment>` - Required environment type
- `[project-name]` - Optional project name

**Examples:**
```bash
/ts-deploy staging
/ts-deploy production todo-app
```

---

### `/ts-verify <environment> [project-name]`
Verify deployment in environment.

**Environment Types:**
- `staging` - Verify staging deployment
- `production` - Verify production deployment

**Arguments:**
- `<environment>` - Required environment type
- `[project-name]` - Optional project name

**Examples:**
```bash
/ts-verify staging
/ts-verify production my-app
```

---

### `/ts-rollback [environment] [version] [project-name]`
Rollback deployment to previous version.

**Arguments:**
- `[environment]` - Optional environment (defaults to staging)
- `[version]` - Optional specific version (defaults to previous)
- `[project-name]` - Optional project name

**Examples:**
```bash
/ts-rollback                     # Rollback staging to previous version
/ts-rollback production          # Rollback production to previous version
/ts-rollback staging v1.2.0      # Rollback staging to specific version
/ts-rollback production v1.1.0 my-app  # Rollback specific project
```

---

### `/ts-review release [project-name]`
Review release package before approval.

**Arguments:**
- `[project-name]` - Optional project name

**Examples:**
```bash
/ts-review release
/ts-review release todo-app
```

---

## 🌐 Stage 5: Go Live & Operations Commands

### `/ts-push <target> [environment] [project-name]`
Deploy to managed platforms (quick deploy).

**Target Platforms:**

**Frontend Targets:**
- `vercel` - Deploy to Vercel
- `netlify` - Deploy to Netlify
- `cloudflare` - Deploy to Cloudflare Pages

**Backend Targets:**
- `railway` - Deploy to Railway
- `fly` - Deploy to Fly.io
- `render` - Deploy to Render

**Database Targets:**
- `neon` - Deploy to Neon PostgreSQL
- `planetscale` - Deploy to PlanetScale MySQL
- `supabase` - Deploy to Supabase PostgreSQL
- `turso` - Deploy to Turso SQLite

**Full-Stack Targets:**
- `railway full` - Deploy complete stack to Railway
- `render full` - Deploy complete stack to Render

**Arguments:**
- `<target>` - Required target platform
- `[environment]` - Optional environment (staging/production, defaults to production)
- `[project-name]` - Optional project name

**Examples:**
```bash
# Individual services
/ts-push vercel              # Frontend to Vercel
/ts-push railway             # Backend to Railway
/ts-push neon               # Database to Neon

# With environment
/ts-push vercel staging      # Frontend to Vercel staging
/ts-push railway production todo-app  # Specific project backend

# Full-stack deployment
/ts-push railway full        # Complete app to Railway
/ts-push render full my-blog # Complete blog to Render
```

---

### `/ts-live-status [project-name]`
Check status of all live deployments.

**Arguments:**
- `[project-name]` - Optional project name

**Examples:**
```bash
/ts-live-status
/ts-live-status todo-app
```

**Shows:**
- Deployment health status
- URL endpoints
- Performance metrics
- Error rates

---

### `/ts-live-env <target> [project-name]`
Manage environment variables for live deployments.

**Arguments:**
- `<target>` - Required target platform
- `[project-name]` - Optional project name

**Examples:**
```bash
/ts-live-env vercel
/ts-live-env railway todo-app
```

**Operations:**
- View current environment variables
- Add/update variables
- Remove variables
- Sync with local .env

---

### `/ts-domain <target> <domain> [project-name]`
Configure custom domain for deployment.

**Arguments:**
- `<target>` - Required target platform
- `<domain>` - Required domain name
- `[project-name]` - Optional project name

**Examples:**
```bash
/ts-domain vercel myapp.com
/ts-domain netlify blog.example.com todo-app
/ts-domain railway api.myapp.com
```

**Configures:**
- DNS records
- SSL certificates
- CDN settings

---

### `/ts-teardown <target> [project-name]`
Remove deployment from platform.

**Arguments:**
- `<target>` - Required target platform
- `[project-name]` - Optional project name

**Examples:**
```bash
/ts-teardown vercel
/ts-teardown railway todo-app
/ts-teardown neon my-blog
```

**⚠️ Warning:** This permanently removes the deployment and data.

---

### `/ts-monitor [project-name]`
Set up monitoring stack.

**Arguments:**
- `[project-name]` - Optional project name

**Examples:**
```bash
/ts-monitor
/ts-monitor todo-app
```

**Sets up:**
- Application monitoring (Sentry)
- Infrastructure monitoring (Datadog)
- Uptime monitoring
- Performance tracking

---

### `/ts-alerts [project-name]`
Configure alerting system.

**Arguments:**
- `[project-name]` - Optional project name

**Examples:**
```bash
/ts-alerts
/ts-alerts ecommerce
```

**Configures:**
- Error rate alerts
- Performance degradation alerts
- Uptime alerts
- Custom business logic alerts

---

### `/ts-logs [target] [project-name]`
View logs from deployments.

**Arguments:**
- `[target]` - Optional target platform (defaults to all)
- `[project-name]` - Optional project name

**Examples:**
```bash
/ts-logs                     # All logs
/ts-logs vercel             # Vercel logs only
/ts-logs railway todo-app   # Railway logs for specific project
```

---

### `/ts-health [project-name]`
Health check all services and deployments.

**Arguments:**
- `[project-name]` - Optional project name

**Examples:**
```bash
/ts-health
/ts-health todo-app
```

**Checks:**
- Service availability
- Database connectivity
- API endpoint health
- Performance metrics

---

### `/ts-status-page [project-name]`
Create public status page.

**Arguments:**
- `[project-name]` - Optional project name

**Examples:**
```bash
/ts-status-page
/ts-status-page my-app
```

**Creates:**
- Public status dashboard
- Real-time status updates
- Historical uptime data
- Incident reporting

---

### `/ts-incident <action> [incident-id] [project-name]`
Incident management operations.

**Action Types:**
- `create` - Create new incident
- `update` - Update existing incident
- `resolve` - Resolve incident
- `list` - List all incidents
- `show` - Show incident details

**Arguments:**
- `<action>` - Required action type
- `[incident-id]` - Optional incident ID (required for update/resolve/show)
- `[project-name]` - Optional project name

**Examples:**
```bash
/ts-incident create              # Create new incident
/ts-incident list                # List all incidents
/ts-incident show INC-001        # Show specific incident
/ts-incident update INC-001      # Update incident
/ts-incident resolve INC-001     # Resolve incident
```

---

### `/ts-slo [project-name]`
Define and track Service Level Objectives.

**Arguments:**
- `[project-name]` - Optional project name

**Examples:**
```bash
/ts-slo
/ts-slo todo-app
```

**Manages:**
- SLO definitions (uptime, latency, error rate)
- SLI tracking
- Error budgets
- SLO violation alerts

---

## 🔧 Utility Commands

### `/ts-fix <issue-type> [project-name]`
Automated bug fixing and problem resolution.

**Issue Types:**
- `build` - Build and compilation errors
- `dependencies` - Dependency conflicts
- `typescript` - TypeScript errors
- `tests` - Test failures
- `deployment` - Deployment issues

**Arguments:**
- `<issue-type>` - Required issue type
- `[project-name]` - Optional project name

**Examples:**
```bash
/ts-fix build
/ts-fix typescript todo-app
/ts-fix dependencies
```

---

### `/ts-validate <component> [project-name]`
Validate specific components or entire application.

**Component Types:**
- `architecture` - Validate architecture design
- `code` - Code quality validation
- `security` - Security validation
- `performance` - Performance validation
- `all` - Complete validation

**Arguments:**
- `<component>` - Required component type
- `[project-name]` - Optional project name

**Examples:**
```bash
/ts-validate architecture
/ts-validate security todo-app
/ts-validate all
```

---

### `/ts-self-document [project-name]`
Generate self-documenting code and update documentation.

**Arguments:**
- `[project-name]` - Optional project name

**Examples:**
```bash
/ts-self-document
/ts-self-document my-app
```

**Generates:**
- Code comments and docstrings
- README updates
- API documentation
- Architecture diagrams

---

## 📊 Command Categories Summary

| Category | Commands | Purpose |
|----------|----------|---------|
| **Project Lifecycle** | 6 | Project management and status |
| **Autonomous Mode** | 2 | Rapid development without gates |
| **Approvals (HITL)** | 8 | Human-in-the-loop quality gates |
| **Architecture** | 2 | System design and architecture |
| **Product** | 4 | MVP definition and planning |
| **Development** | 10 | Code implementation and testing |
| **Release** | 8 | Documentation, security, deployment |
| **Operations** | 13 | Live deployment and monitoring |
| **Utilities** | 3 | Fixes, validation, documentation |
| **TOTAL** | **44** | Complete development lifecycle |

---

## 🎯 Common Workflows

### Standard Development Flow
```bash
# 1. Initialize project
/ts-new-project my-app

# 2. Architecture phase
/ts-approve architecture-start
/ts-architect
/ts-approve architecture-lock

# 3. Product phase
/ts-product
/ts-plan
/ts-analyze
/ts-approve green-light

# 4. Development phase
/ts-develop
/ts-build database
/ts-build backend
/ts-build frontend
/ts-integrate
/ts-gate
/ts-signoff
/ts-approve development

# 5. Release phase
/ts-docs
/ts-security
/ts-release
/ts-approve release

# 6. Quick deployment
/ts-push neon
/ts-push railway
/ts-push vercel
```

### Autonomous Development
```bash
# One command for complete application
/ts-turbo my-app "A task management app with user authentication"

# Then quick deploy
/ts-push railway full
/ts-live-status
```

### Emergency Response
```bash
# Check issues
/ts-health my-app

# Create incident
/ts-incident create

# Fix critical issues
/ts-fix build
/ts-fix deployment

# Rollback if needed
/ts-rollback production v1.2.0

# Resolve incident
/ts-incident resolve INC-001
```

---

*This command guide covers all 44 commands in The System ASDO framework. For detailed examples and tutorials, see the main documentation.*