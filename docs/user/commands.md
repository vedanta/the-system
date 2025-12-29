# The System Commands Reference

> Complete reference for all 45 commands in the Autonomous Software Development Organization

## Overview

The System provides 45 commands that orchestrate the entire software development lifecycle from idea to production. All commands follow the `/ts-[action]` pattern and are organized by stage and function.

## Command Categories

| Category | Commands | Purpose |
|----------|----------|---------|
| **Core Project Lifecycle** | 8 | Project management and coordination |
| **Stage 1: Architecture** | 1 | System design and technical decisions |
| **Stage 2: Product** | 3 | MVP definition and business planning |
| **Stage 3: Development** | 7 | Code implementation and testing |
| **Stage 4: Release & Deployment** | 8 | Documentation, security, and deployment |
| **Stage 5: Go Live & Operations** | 12 | Quick deploy and monitoring |
| **Utility Commands** | 5 | Error fixing, validation, and autonomous modes |

---

## Core Project Lifecycle Commands

### `/ts-new-project <name>`

**Purpose**: Initialize a new project with complete structure and tracking.

**Agent**: System

**Usage**:
```bash
/ts-new-project my-awesome-app
```

**What it creates**:
- Project file at `.claude/pipeline/projects/my-awesome-app.md`
- Complete project structure with all stage sections
- Initial status tracking and audit log
- Template for all subsequent work

**Output**: Ready-to-use project file with tracking infrastructure.

**Next Steps**: Share your idea with the Founder-Advisor to begin analysis.

---

### `/ts-status`

**Purpose**: Check current project status across all stages and agents.

**Agent**: System

**Usage**:
```bash
/ts-status
```

**Information Displayed**:
- Current project stage and owner
- Completion status by department
- Active approvals and blockers
- Recent activity from audit log
- Next recommended actions

**Example Output**:
```
📊 PROJECT STATUS: my-awesome-app

Current Stage: 3 (Development)
Current Owner: principal-developer
Status: IN_PROGRESS

✅ Stage 1: Architecture (COMPLETE)
✅ Stage 2: Product (COMPLETE)
🔄 Stage 3: Development (IN_PROGRESS)
   ✅ Database Layer (COMPLETE)
   ✅ Backend Layer (COMPLETE)
   🔄 Frontend Layer (IN_PROGRESS - frontend-developer)
   ⏳ Integration (PENDING)
   ⏳ QA Testing (PENDING)

Next: Wait for frontend completion, then run /ts-integrate
```

---

### `/ts-view [section]`

**Purpose**: View project details and current state.

**Agent**: System

**Usage**:
```bash
/ts-view                    # View full project
/ts-view architecture       # View architecture section only
/ts-view product            # View product section only
/ts-view development        # View development section only
```

**Displays**:
- Project metadata and status
- All completed work by stage
- Current blockers and requirements
- Audit trail of all actions

---

### `/ts-brief`

**Purpose**: Get executive summary of current project state.

**Agent**: Founder-Advisor

**Usage**:
```bash
/ts-brief
```

**Provides**:
- High-level project overview
- Key accomplishments and milestones
- Current blockers and risks
- Strategic recommendations
- Resource and timeline status

---

### `/ts-ask <question>`

**Purpose**: Ask the Founder-Advisor strategic questions about the project.

**Agent**: Founder-Advisor

**Usage**:
```bash
/ts-ask "Should we add real-time features to the MVP?"
/ts-ask "What's our competitive advantage?"
/ts-ask "Are we ready for the next funding round?"
```

**Capabilities**:
- Strategic advice and business guidance
- Technical feasibility assessment
- Market and competitive analysis
- Risk evaluation and mitigation
- Cross-department coordination

---

### `/ts-approve <gate>`

**Purpose**: Human approval for critical project gates.

**Agent**: System (Human Authorization Required)

**Usage**:
```bash
/ts-approve architecture-start    # Begin architecture phase
/ts-approve architecture-lock     # Lock technical decisions
/ts-approve green-light           # 🚦 CRITICAL: Approve for development
/ts-approve development           # Development complete
/ts-approve release               # Release package approved
/ts-approve staging               # Staging deployment verified
/ts-approve production            # Production deployment approved
/ts-approve launch                # 🚀 Final launch approval
```

**Gate Descriptions**:
- **architecture-start**: Permission to begin system design
- **architecture-lock**: Lock in technical decisions, proceed to product
- **green-light**: Critical decision to invest in full development
- **development**: Code is complete and ready for release prep
- **release**: Release package is ready for deployment
- **staging**: Staging environment verified, ready for production
- **production**: Production deployment approved
- **launch**: Final go-live approval

---

### `/ts-review <stage>`

**Purpose**: Founder-Advisor review of stage deliverables.

**Agent**: Founder-Advisor

**Usage**:
```bash
/ts-review architecture     # Review system design
/ts-review product          # Review MVP definition
/ts-review development      # Review completed code
/ts-review release          # Review release package
```

**Process**:
- Comprehensive review of stage deliverables
- Assessment against original requirements
- Quality and completeness validation
- Approval or feedback for improvements
- Recommendation for next steps

---

### `/ts-exec-summary`

**Purpose**: Generate comprehensive executive summary of entire project.

**Agent**: Multiple (coordinated)

**Usage**:
```bash
/ts-exec-summary
```

**Comprehensive Report**:
- Project overview and objectives
- Architecture summary
- Product definition and market analysis
- Development progress and quality metrics
- Release readiness and deployment plan
- Timeline and resource utilization
- Risk assessment and mitigation
- Strategic recommendations

---

## Stage 1: Architecture Commands

### `/ts-architect`

**Purpose**: Complete system architecture and design phase.

**Agent**: Enterprise Architect

**Usage**:
```bash
/ts-architect
```

**Process**:
1. Business requirements analysis
2. System design and component architecture
3. Technology decisions and rationale
4. Architecture Decision Records (ADRs)
5. Security and scalability planning

**Deliverables**:
- System Context Diagram
- Component Architecture
- Data Architecture
- API Design
- Infrastructure Architecture
- Security Architecture
- Architecture Decision Records (ADRs)

**Requirements**: Must have `/ts-approve architecture-start` before execution.

**Next Steps**: `/ts-review architecture` → `/ts-approve architecture-lock`

---

## Stage 2: Product Commands

### `/ts-product`

**Purpose**: Define MVP scope, user stories, and product requirements.

**Agent**: Product Lead

**Usage**:
```bash
/ts-product
```

**Process**:
1. Target user persona definition
2. Problem statement clarification
3. MVP scope determination (what's in/out)
4. User story creation with acceptance criteria
5. Product Requirements Document (PRD) creation

**Deliverables**:
- Target User Persona
- Problem Statement
- MVP Scope Definition
- User Stories with Acceptance Criteria
- Product Requirements Document (PRD)
- Feature wireframe descriptions

**Requirements**: Architecture must be locked before starting.

---

### `/ts-plan`

**Purpose**: Create detailed project roadmap and sprint planning.

**Agent**: Project Planner

**Usage**:
```bash
/ts-plan
```

**Process**:
1. Multi-version product roadmap creation
2. MVP sprint breakdown
3. Effort estimation by role
4. Dependency identification and mapping
5. Resource allocation planning

**Deliverables**:
- Product Roadmap with milestones
- Detailed Sprint Plans
- Effort Estimates by epic and role
- Dependency mapping diagrams
- Risk assessment and mitigation plans

**Requirements**: MVP must be defined by Product Lead.

---

### `/ts-analyze`

**Purpose**: Perform comprehensive business analysis (JSA - Justification, Scale, Approach).

**Agent**: Business Analyst

**Usage**:
```bash
/ts-analyze
```

**Process**:
1. Market size analysis (TAM/SAM/SOM)
2. Competitive landscape research
3. Revenue model development
4. Go-to-market strategy creation
5. Investment readiness assessment

**Deliverables**:
- Market Analysis with sizing
- Competitive Landscape Analysis
- Revenue Model and Unit Economics
- Go-to-Market Strategy
- Investment Readiness Assessment
- JSA Summary with recommendation

**Requirements**: Project plan must be completed.

**Critical Output**: JSA recommendation (🟢 PROCEED / 🟡 CONDITIONAL / 🔴 NO-GO)

---

## Stage 3: Development Commands

### `/ts-develop`

**Purpose**: Create implementation plan and assign development work.

**Agent**: Principal Developer

**Usage**:
```bash
/ts-develop
```

**Process**:
1. Technical analysis of product requirements
2. Technology stack confirmation
3. Coding standards definition
4. Work breakdown and assignment
5. Integration point planning

**Deliverables**:
- Technical Implementation Plan
- Technology Stack confirmation
- Coding Standards and conventions
- Work assignments (DB-XXX, BE-XXX, FE-XXX tasks)
- Integration specifications
- Definition of Done criteria

**Requirements**: Must have 🚦 GREEN LIGHT approval.

---

### `/ts-test-plan`

**Purpose**: Create comprehensive test strategy and plan.

**Agent**: QA Engineer

**Usage**:
```bash
/ts-test-plan
```

**Process**:
1. Test level definition (unit, integration, E2E)
2. Test environment setup
3. Entry/exit criteria establishment
4. Coverage target setting
5. Test automation strategy

**Deliverables**:
- Test Strategy Document
- Test environment specifications
- Coverage targets by component
- Entry/Exit criteria
- Automation framework selection

---

### `/ts-build <layer>`

**Purpose**: Build specific application layers.

**Agent**: Specialized Developer (Database/Backend/Frontend)

**Usage**:
```bash
/ts-build database     # Build database layer
/ts-build backend      # Build backend layer
/ts-build frontend     # Build frontend layer
```

**Database Build**:
- Schema design and creation
- ORM model implementation
- Migration scripts
- Seed data creation
- Database tests

**Backend Build**:
- API endpoint implementation
- Service layer with business logic
- Authentication/authorization
- Request/response schemas
- API tests

**Frontend Build**:
- UI component implementation
- Application pages and routing
- State management setup
- API integration
- Component tests

---

### `/ts-test <layer>`

**Purpose**: Test specific application layers.

**Agent**: QA Engineer

**Usage**:
```bash
/ts-test database      # Test database layer
/ts-test backend       # Test backend layer
/ts-test frontend      # Test frontend layer
/ts-test integration   # Full integration testing
```

**Process**:
1. **Build Verification** (MANDATORY): Ensure code compiles
2. Test execution (unit, integration as appropriate)
3. Coverage validation
4. Quality metrics assessment
5. Issue reporting and tracking

**Critical Requirements**:
- TypeScript must compile (`npx tsc --noEmit`)
- Build must succeed (`npm run build`)
- Coverage targets must be met
- Zero critical/high bugs

---

### `/ts-integrate`

**Purpose**: Connect all system components and prepare for full testing.

**Agent**: Integration Engineer

**Usage**:
```bash
/ts-integrate
```

**Process**:
1. Component integration verification
2. Docker configuration creation
3. Environment setup
4. End-to-end verification
5. Build validation (CRITICAL)

**Deliverables**:
- Docker Compose configuration
- Environment variable templates
- API client integration
- Standard project files (.gitignore, README)
- Full integration verification

**Critical**: Must perform build validation before completion.

---

### `/ts-gate`

**Purpose**: Principal Developer quality gate review.

**Agent**: Principal Developer

**Usage**:
```bash
/ts-gate
```

**Process**:
1. Architecture compliance review
2. Code quality assessment
3. Testing validation
4. Security basic review
5. Performance evaluation

**Decision**:
- **APPROVED**: Continue to final QA
- **FEEDBACK**: Address issues and re-review

---

### `/ts-signoff`

**Purpose**: Final QA sign-off before release.

**Agent**: QA Engineer

**Usage**:
```bash
/ts-signoff
```

**Process**:
1. **Build Verification** (MANDATORY)
2. Complete test suite execution
3. Coverage validation
4. Quality metrics review
5. Final approval decision

**Sign-off Criteria**:
- All builds pass
- Coverage targets met (80%+ unit, 70%+ integration)
- No critical or high severity bugs
- All acceptance criteria met

**Authority**: Can block progression if quality standards not met.

---

### `/ts-validate [layer]`

**Purpose**: Run automated build validation to catch errors before production. **REQUIRED** before `/ts-signoff`.

**Agent**: QA Engineer

**Usage**:
```bash
/ts-validate                    # Validate all (frontend + backend)
/ts-validate frontend           # Frontend only (TypeScript, ESLint, build, tests)
/ts-validate backend            # Backend only (syntax, types, lint, tests)
/ts-validate [project-name]     # Specific project
```

**Enhanced Validation Process**:

**Frontend Validation**:
- **Dependency Installation**: Clean install with conflict resolution
- **TypeScript Check**: Catches duplicate members, type mismatches (`npx tsc --noEmit`)
- **ESLint Validation**: Code quality and style enforcement
- **Build Verification**: Full compilation test (`npm run build`)
- **Test Execution**: Unit and integration test suite

**Backend Validation**:
- **Environment Setup**: Virtual environment and dependency installation
- **Syntax Check**: Python syntax validation (`py_compile`)
- **Type Check**: MyPy static type analysis
- **Code Quality**: Ruff linting and formatting
- **Test Suite**: Pytest execution with coverage

**Comprehensive Reporting**:
- **Detailed Status**: Pass/fail for each validation step
- **Error Details**: Specific file locations and error descriptions
- **Performance Metrics**: Build times and test counts
- **Next Steps**: Clear guidance on required fixes

---

### `/ts-fix [type]`

**Purpose**: Systematically diagnose and fix build errors, TypeScript issues, dependency conflicts, and other code problems.

**Agent**: Bug Fixer (Utility)

**Usage**:
```bash
/ts-fix                    # Full diagnostic + fix all issues
/ts-fix typescript         # TypeScript errors only
/ts-fix dependencies       # Dependency conflicts only
/ts-fix lint              # Lint violations only (auto-fix)
/ts-fix scan              # Diagnostic only, no fixes
```

**Enhanced Capabilities**:
- **Systematic Error Classification**: Categorizes errors by type for targeted fixing
- **Selective Fixing Modes**: Target specific issue types for faster resolution
- **Build Verification**: Ensures fixes don't introduce new problems
- **Comprehensive Reporting**: Detailed before/after analysis with fix summary

**Process**:
1. **Diagnostic Scan**: Analyze all error types and counts
2. **Categorization**: Group errors by TypeScript codes (TS2564, TS2300, etc.)
3. **Prioritized Fixing**: Fix in optimal order (dependencies → duplicates → types)
4. **Verification**: Confirm build success and error elimination
5. **Detailed Reporting**: Show before/after status with fix details

**Fix Categories**:
- TypeScript errors
- Dependency conflicts
- Build failures
- Lint violations
- Import/export issues

---

## Stage 4: Release & Deployment Commands

### `/ts-docs`

**Purpose**: Generate comprehensive project documentation.

**Agent**: Technical Writer

**Usage**:
```bash
/ts-docs
```

**Process**:
1. Technical architecture documentation
2. Implementation documentation
3. Deployment guides
4. User guides
5. API reference generation

**Deliverables**:
- Technical Architecture Document
- Implementation Architecture Document
- Deployment Guide
- User Guide
- API Reference
- Operational Runbooks
- README.md and CONTRIBUTING.md

---

### `/ts-security`

**Purpose**: Comprehensive security validation and compliance check.

**Agent**: Security Engineer

**Usage**:
```bash
/ts-security
```

**Process**:
1. Dependency vulnerability scanning
2. Static Application Security Testing (SAST)
3. Secrets detection
4. Container security scanning
5. Infrastructure security review
6. OWASP compliance validation

**Decisions**:
- **✅ PASS**: No critical/high vulnerabilities
- **⚠️ CONDITIONAL**: High issues with mitigation plans
- **❌ FAIL**: Critical issues present - deployment BLOCKED

**Authority**: Can block deployments on critical security findings.

---

### `/ts-release`

**Purpose**: Create production-ready release package.

**Agent**: Release Engineer

**Usage**:
```bash
/ts-release
```

**Process**:
1. Semantic version determination
2. Changelog generation
3. Release notes creation
4. Docker image building and tagging
5. Release manifest creation

**Deliverables**:
- VERSION file
- CHANGELOG.md
- RELEASE_NOTES.md
- Docker images with semantic version tags
- Release manifest (JSON)
- Production Docker Compose
- Git tags

---

### `/ts-infra`

**Purpose**: Generate complete Infrastructure as Code.

**Agent**: DevOps Engineer

**Usage**:
```bash
/ts-infra
```

**Process**:
1. Infrastructure requirements analysis
2. Terraform module generation
3. Environment configuration
4. Resource estimation
5. Security configuration

**Deliverables**:
- Complete Terraform modules (networking, database, compute, storage)
- Environment configurations (staging.tfvars, production.tfvars)
- Infrastructure documentation
- Cost estimates
- Security configurations

---

### `/ts-pipeline`

**Purpose**: Generate CI/CD pipelines for automated deployment.

**Agent**: DevOps Engineer

**Usage**:
```bash
/ts-pipeline
```

**Process**:
1. CI/CD workflow design
2. GitHub Actions generation
3. Test automation integration
4. Security scanning integration
5. Deployment automation

**Deliverables**:
- CI workflow (test, build, scan)
- Staging deployment workflow
- Production deployment workflow
- Rollback workflow
- Environment secrets configuration

---

### `/ts-deploy <environment>`

**Purpose**: Deploy application to specified environment.

**Agent**: DevOps Engineer

**Usage**:
```bash
/ts-deploy staging        # Deploy to staging
/ts-deploy production     # Deploy to production
```

**Process**:
1. Pre-deployment validation
2. Infrastructure provisioning/update
3. Application deployment
4. Health check validation
5. Post-deployment verification

---

### `/ts-verify <environment>`

**Purpose**: Verify deployment health and functionality.

**Agent**: DevOps Engineer

**Usage**:
```bash
/ts-verify staging        # Verify staging deployment
/ts-verify production     # Verify production deployment
```

**Process**:
1. Health check execution
2. Smoke test validation
3. Performance baseline verification
4. Security validation
5. Comprehensive status report

---

### `/ts-rollback <environment> [version]`

**Purpose**: Rollback deployment to previous version.

**Agent**: DevOps Engineer

**Usage**:
```bash
/ts-rollback staging              # Rollback staging to previous
/ts-rollback production v1.2.1    # Rollback production to specific version
```

**Process**:
1. Version identification
2. Service rollback
3. Database rollback (if needed)
4. Health validation
5. Incident documentation

---

## Stage 5: Go Live & Operations Commands

### `/ts-push <target> [options]`

**Purpose**: Deploy to managed hosting platforms for quick go-live.

**Agent**: SRE Deploy Engineer

**Usage**:
```bash
/ts-push vercel              # Deploy frontend to Vercel
/ts-push railway             # Deploy full-stack to Railway
/ts-push neon                # Set up database on Neon
/ts-push fly                 # Deploy backend to Fly.io
/ts-push netlify --prod      # Deploy to Netlify production
```

**Supported Targets**:
- **Frontend**: vercel, netlify, cloudflare
- **Backend**: railway, fly, render
- **Database**: neon, planetscale, supabase, turso
- **Full-Stack**: railway (complete), render (complete)

---

### `/ts-live-status`

**Purpose**: Check status of all live deployments.

**Agent**: SRE Deploy Engineer

**Usage**:
```bash
/ts-live-status
```

**Information Displayed**:
- All active deployments with URLs
- Health status of each service
- Last deployment timestamps
- Current versions deployed
- Custom domain configurations

---

### `/ts-live-env <target>`

**Purpose**: Manage environment variables for deployed services.

**Agent**: SRE Deploy Engineer

**Usage**:
```bash
/ts-live-env vercel          # Manage Vercel environment variables
/ts-live-env railway         # Manage Railway environment variables
```

**Capabilities**:
- View current environment variables
- Add new environment variables
- Update existing variables
- Remove unused variables

---

### `/ts-domain <target> <domain>`

**Purpose**: Configure custom domain for deployed service.

**Agent**: SRE Deploy Engineer

**Usage**:
```bash
/ts-domain vercel app.mycompany.com     # Set custom domain for Vercel
/ts-domain railway api.mycompany.com    # Set custom domain for Railway
```

**Process**:
1. DNS configuration guidance
2. Platform domain setup
3. SSL certificate provisioning
4. Domain verification
5. Traffic routing validation

---

### `/ts-teardown <target>`

**Purpose**: Remove deployment and associated resources.

**Agent**: SRE Deploy Engineer

**Usage**:
```bash
/ts-teardown vercel          # Remove Vercel deployment
/ts-teardown railway         # Remove Railway deployment
```

**⚠️ Warning**: Permanently deletes deployment and data.

---

### `/ts-monitor`

**Purpose**: Set up comprehensive monitoring and observability.

**Agent**: SRE Ops Engineer

**Usage**:
```bash
/ts-monitor
```

**Process**:
1. Monitoring stack configuration (Datadog, Sentry)
2. Dashboard creation
3. Health check setup
4. Error tracking integration
5. Performance monitoring

**Deliverables**:
- Error tracking setup (Sentry)
- APM configuration (Datadog)
- Custom dashboards
- Health check endpoints
- Performance baselines

---

### `/ts-alerts`

**Purpose**: Configure alerting rules and notification channels.

**Agent**: SRE Ops Engineer

**Usage**:
```bash
/ts-alerts
```

**Process**:
1. Alert channel configuration (Slack, PagerDuty)
2. Alert rule definition
3. Escalation policy setup
4. On-call rotation configuration
5. Alert testing and validation

**Alert Categories**:
- **Critical**: Service down, high error rate, database issues
- **Warning**: High latency, elevated errors, resource usage
- **Info**: Deployments, scaling events

---

### `/ts-health`

**Purpose**: Perform comprehensive health check of all services.

**Agent**: SRE Ops Engineer

**Usage**:
```bash
/ts-health
```

**Health Checks**:
- Service endpoint availability
- Database connectivity
- External dependency status
- Resource utilization
- Performance metrics

---

### `/ts-logs [target] [options]`

**Purpose**: View and analyze application logs.

**Agent**: SRE Ops Engineer

**Usage**:
```bash
/ts-logs                     # All recent logs
/ts-logs backend             # Backend logs only
/ts-logs --error             # Error logs only
/ts-logs --since 1h          # Last hour logs
```

**Capabilities**:
- Real-time log streaming
- Log filtering and search
- Error pattern detection
- Performance log analysis

---

### `/ts-incident [action] [details]`

**Purpose**: Manage incident response workflow.

**Agent**: SRE Ops Engineer

**Usage**:
```bash
/ts-incident start "API response times elevated"    # Start incident
/ts-incident update "Root cause identified"         # Add update
/ts-incident resolve                                # Resolve incident
/ts-incident postmortem                             # Generate postmortem
```

**Incident Management**:
- Incident declaration and tracking
- Timeline and action item management
- Stakeholder communication
- Post-incident analysis

---

### `/ts-slo`

**Purpose**: Define and track Service Level Objectives.

**Agent**: SRE Ops Engineer

**Usage**:
```bash
/ts-slo
```

**Process**:
1. SLI (Service Level Indicator) definition
2. SLO target establishment
3. Error budget calculation
4. Burn rate monitoring setup
5. SLO dashboard creation

**Standard SLOs**:
- **Availability**: 99.9% uptime
- **Latency**: p95 < 500ms, p99 < 1000ms
- **Error Rate**: < 1% error budget

---

### `/ts-status-page`

**Purpose**: Create public status page for service transparency.

**Agent**: SRE Ops Engineer

**Usage**:
```bash
/ts-status-page
```

**Process**:
1. Status page provider setup (Instatus, Statuspage.io)
2. Component definition
3. Status level configuration
4. Auto-update integration
5. Incident template creation

---

## Utility Commands

### `/ts-turbo-quick <name> "<idea>"`

**Purpose**: Fast autonomous development mode with optimized workflow.

**Agent**: Coordinated Multi-Agent

**Usage**:
```bash
/ts-turbo-quick blog "Personal blog with CMS"
```

**Differences from Standard Turbo**:
- Streamlined architecture decisions
- Simplified MVP scope
- Faster code generation
- Basic deployment configuration

**Process**: Accelerated Stages 1-4 with reduced complexity and faster execution.

---

### `/ts-self-document`

**Purpose**: Generate comprehensive framework documentation from current configuration.

**Agent**: System Documentation

**Usage**:
```bash
/ts-self-document
```

**Generated Documentation**:
- Complete agent reference with current capabilities
- All command documentation with examples
- Workflow guides and best practices
- Configuration options and customization guides
- Architecture documentation and diagrams

**Output Location**: Updates all files in `docs/` directory with current framework state.

---

## Autonomous Modes

### `/ts-turbo <name> "<idea>"`

**Purpose**: Fully autonomous development from idea to deployment (Stages 1-4).

**Agent**: Coordinated Multi-Agent

**Usage**:
```bash
/ts-turbo my-app "A task management app for remote teams"
```

**⚠️ Warning**: Runs without human approval gates. Use only for demos or learning.

**Process**:
1. Architecture design (auto-approved)
2. Product definition (auto-approved)
3. Full development implementation
4. Complete release package generation
5. Infrastructure and CI/CD creation

**Output**: Production-ready application with full documentation.

---

### `/ts-turbo-quick <name> "<idea>"`

**Purpose**: Rapid autonomous development with minimal viable implementation.

**Agent**: Coordinated Multi-Agent

**Usage**:
```bash
/ts-turbo-quick my-app "Simple blog with user authentication"
```

**Process**: Faster than full turbo mode with streamlined implementation.

---

## Command Flow Examples

### Standard Development Flow
```bash
# Initialize project
/ts-new-project my-app

# Share idea → Founder-Advisor analysis
# Architecture phase
/ts-approve architecture-start
/ts-architect
/ts-review architecture
/ts-approve architecture-lock

# Product phase
/ts-product
/ts-plan
/ts-analyze
/ts-review product
/ts-approve green-light  🚦

# Development phase
/ts-develop
/ts-test-plan
/ts-build database
/ts-test database
/ts-build backend
/ts-test backend
/ts-build frontend
/ts-test frontend
/ts-integrate
/ts-test integration
/ts-gate
/ts-signoff
/ts-review development
/ts-approve development

# Release phase
/ts-docs
/ts-security
/ts-release
/ts-infra
/ts-pipeline
/ts-review release
/ts-approve release

# Deploy to staging
/ts-deploy staging
/ts-verify staging
/ts-approve staging

# Deploy to production
/ts-deploy production
/ts-verify production
/ts-approve production
/ts-approve launch  🚀
```

### Quick Go Live Flow
```bash
# After development is complete:
/ts-approve development

# Quick deploy instead of full infrastructure
/ts-push neon              # Database
/ts-push railway            # Backend
/ts-push vercel             # Frontend

# Setup monitoring
/ts-monitor
/ts-alerts
/ts-health

# Optional: Custom domain
/ts-domain vercel app.mycompany.com
```

### Emergency Procedures
```bash
# Fix broken build
/ts-fix

# Rollback production
/ts-rollback production v1.2.0

# Incident management
/ts-incident start "Database connection issues"
/ts-incident update "Identified connection pool exhaustion"
/ts-incident resolve

# Health monitoring
/ts-health
/ts-logs --error --since 30m
```

## Command Dependencies

### Prerequisites
- Most commands require previous stages to be complete
- Approval gates block progression until human authorization
- Security and QA can block with FAIL status
- Build verification is mandatory before QA sign-off

### Gate Requirements
- `/ts-approve architecture-start` → `/ts-architect`
- `/ts-approve architecture-lock` → `/ts-product`
- `/ts-approve green-light` → `/ts-develop`
- `/ts-approve development` → `/ts-docs`, `/ts-security`, `/ts-release`

### Quality Dependencies
- All `/ts-build` commands must pass before `/ts-integrate`
- `/ts-integrate` must pass build validation
- `/ts-gate` APPROVED required before `/ts-signoff`
- `/ts-security` PASS/CONDITIONAL required before deployment

This comprehensive command system enables sophisticated software development workflows while maintaining human oversight and ensuring high-quality deliverables at every stage.