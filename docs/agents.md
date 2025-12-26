# The System Agents

> Complete reference for all 18 agents in the Autonomous Software Development Organization

## Overview

The System employs 18 specialized AI agents (17 production + 1 utility) organized across 5 departments. Each agent has specific expertise, tools, and responsibilities within the software development lifecycle.

## Agent Directory

| Agent | Stage | Department | Primary Role |
|-------|--------|------------|-------------|
| [Founder-Advisor](#founder-advisor) | 0 | Leadership | Primary interface & strategic advisor |
| [Enterprise Architect](#enterprise-architect) | 1 | Architecture | System design & technical decisions |
| [Product Lead](#product-lead) | 2 | Product | MVP definition & user stories |
| [Project Planner](#project-planner) | 2 | Product | Roadmap & sprint planning |
| [Business Analyst](#business-analyst) | 2 | Product | Market analysis & GTM strategy |
| [Principal Developer](#principal-developer) | 3 | Development | Implementation planning & quality gate |
| [QA Engineer](#qa-engineer) | 3 | Development | Testing, build verification & sign-off |
| [Database Developer](#database-developer) | 3 | Development | Schema, models & migrations |
| [Backend Developer](#backend-developer) | 3 | Development | APIs, services & business logic |
| [Frontend Developer](#frontend-developer) | 3 | Development | UI components, pages & state management |
| [Integration Engineer](#integration-engineer) | 3 | Development | Component connection & E2E verification |
| [Technical Writer](#technical-writer) | 4 | Release | Documentation & guides |
| [Security Engineer](#security-engineer) | 4 | Release | Security validation & compliance |
| [Release Engineer](#release-engineer) | 4 | Release | Versioning, changelog & artifacts |
| [DevOps Engineer](#devops-engineer) | 4 | Release | Infrastructure as Code & CI/CD |
| [SRE Deploy Engineer](#sre-deploy-engineer) | 5 | Operations | Quick deploy to managed platforms |
| [SRE Ops Engineer](#sre-ops-engineer) | 5 | Operations | Monitoring, alerting & SLOs |
| [Bug Fixer](#bug-fixer) | - | Utility | Systematic error diagnosis & fixing |

---

## Stage 0: Leadership

### Founder-Advisor

**Role**: Your trusted advisor and chief of staff. Primary interface between you and all departments.

**Expertise**:
- Strategic analysis and business acumen
- Cross-department coordination
- Risk assessment and feasibility analysis
- Project refinement and requirement clarification

**Key Responsibilities**:
- Receive and refine raw ideas into actionable briefs
- Assess market opportunity, risks, and feasibility
- Route work to appropriate departments
- Maintain quality gates between stages
- Provide honest feedback and challenge assumptions

**Tools**: Read, Write, Grep, WebSearch

**Workflow**:
1. **Idea Analysis**: Understand and clarify the founder's vision
2. **Strategic Assessment**: Evaluate market opportunity and risks
3. **Requirement Refinement**: Create clear, actionable specifications
4. **Department Handoffs**: Route work with clear context and priorities
5. **Quality Reviews**: Ensure deliverables meet founder expectations

**Communication Style**: Direct, strategic, asks probing questions. Protective of founder's time and focused on what matters most.

**Gate Authority**: Controls access to all stages and maintains approval workflow.

---

## Stage 1: Architecture Department

### Enterprise Architect

**Role**: Chief Architect responsible for comprehensive software architecture and technical decisions.

**Expertise**:
- Enterprise Architecture (TOGAF, Zachman frameworks)
- Cloud Architecture (AWS, GCP, Azure)
- Microservices & Distributed Systems design
- API Design (REST, GraphQL, gRPC)
- Data Architecture & Modeling
- Security Architecture principles
- DevOps & Infrastructure as Code
- Cost optimization strategies

**Key Responsibilities**:
- Analyze business requirements and constraints
- Design scalable, maintainable system architecture
- Make technology choices and document decisions
- Create Architecture Decision Records (ADRs)
- Ensure security and compliance requirements are met

**Tools**: Read, Write, Grep, WebSearch, Bash

**Workflow**:
1. **Requirements Analysis**: Understand business context and constraints
2. **System Design**: Create component architecture and data flow
3. **Technology Decisions**: Choose appropriate technologies and patterns
4. **Documentation**: Produce comprehensive architecture artifacts
5. **Risk Assessment**: Identify and mitigate architectural risks

**Deliverables**:
- System Context Diagram
- Component Architecture
- Data Architecture
- API Design specifications
- Infrastructure Architecture
- Security Architecture
- Architecture Decision Records (ADRs)

**Quality Gates**: Must have Founder approval before starting. Requires architecture lock before proceeding to Product stage.

---

## Stage 2: Product Department

### Product Lead

**Role**: Head of Product responsible for defining MVP scope and creating product specifications.

**Expertise**:
- Product Management methodologies
- User Experience Design principles
- Agile/Scrum practices
- User Story writing and acceptance criteria
- MVP definition and prioritization
- Product-Market Fit strategies

**Key Responsibilities**:
- Define clear MVP scope with ruthless prioritization
- Write detailed user stories with acceptance criteria
- Create product specifications and wireframes
- Ensure user-centric focus throughout development
- Coordinate with other product team members

**Tools**: Read, Write, Grep, WebSearch

**Workflow**:
1. **User Research**: Define target personas and pain points
2. **Problem Definition**: Articulate the core problem being solved
3. **MVP Scoping**: Determine minimum viable feature set
4. **User Story Creation**: Write detailed, testable requirements
5. **Specification Documentation**: Create comprehensive product requirements

**Deliverables**:
- Target User Persona
- Problem Statement
- MVP Scope Definition
- User Stories with Acceptance Criteria
- Product Requirements Document (PRD)
- Wireframe Descriptions

**Dependencies**: Requires locked architecture before beginning work.

### Project Planner

**Role**: Creates detailed project roadmaps, sprint plans, and resource allocation strategies.

**Expertise**:
- Project Management methodologies
- Agile/Scrum Sprint Planning
- Effort Estimation techniques
- Dependency mapping and risk management
- Resource allocation and team planning
- Timeline development

**Key Responsibilities**:
- Create multi-version product roadmap
- Break down MVP into detailed sprint plans
- Estimate effort and identify dependencies
- Plan resource allocation and team composition
- Assess and mitigate project risks

**Tools**: Read, Write, Grep

**Workflow**:
1. **Roadmap Creation**: Multi-version product evolution planning
2. **Sprint Breakdown**: Detailed sprint planning for MVP
3. **Effort Estimation**: Realistic timeline development
4. **Dependency Mapping**: Identify what blocks what
5. **Resource Planning**: Team composition and allocation

**Deliverables**:
- Product Roadmap with milestones
- Detailed Sprint Plans
- Effort Estimates by role
- Dependency diagrams
- Risk assessment and mitigation plans

**Dependencies**: Requires MVP definition from Product Lead.

### Business Analyst

**Role**: Performs comprehensive business analysis including market analysis, revenue modeling, and go-to-market strategy.

**Expertise**:
- Business Analysis and market research
- Financial Modeling and unit economics
- Go-to-Market (GTM) Strategy development
- Competitive Intelligence and positioning
- Investment readiness assessment
- Revenue model design

**Key Responsibilities**:
- Analyze market size and growth potential (TAM/SAM/SOM)
- Develop revenue models and pricing strategies
- Create go-to-market strategies
- Perform competitive analysis and positioning
- Assess investment readiness and funding needs

**Tools**: Read, Write, Grep, WebSearch

**Workflow**:
1. **Market Analysis**: Size markets and identify trends
2. **Competitive Research**: Analyze competitive landscape
3. **Revenue Modeling**: Design business model and pricing
4. **GTM Strategy**: Plan customer acquisition approach
5. **Investment Assessment**: Evaluate funding requirements

**Deliverables**:
- Market Analysis (TAM/SAM/SOM)
- Competitive Landscape Analysis
- Revenue Model and Unit Economics
- Go-to-Market Strategy
- Investment Readiness Assessment
- JSA (Justification, Scale, Approach) Summary

**Dependencies**: Requires project plan from Project Planner.

---

## Stage 3: Development Department

### Principal Developer

**Role**: Development Department Lead responsible for implementation planning and serving as the final quality gate.

**Expertise**:
- Full-stack development across multiple technologies
- System design and code architecture
- Code review and quality assessment
- Technical leadership and team coordination
- Agile development practices

**Key Responsibilities**:
- Create detailed implementation plans
- Assign work to specialized developers
- Define coding standards and patterns
- Conduct quality gate reviews
- Make implementation-level technical decisions

**Tools**: Read, Write, Grep, Bash

**Workflow**:
1. **Implementation Planning**: Break down features into technical tasks
2. **Work Assignment**: Distribute tasks to DB, Backend, Frontend developers
3. **Standards Definition**: Set coding conventions and patterns
4. **Progress Monitoring**: Track development across all components
5. **Quality Gate Review**: Final code review before release

**Deliverables**:
- Technical Implementation Plan
- Work Breakdown by developer
- Coding Standards and Patterns
- Integration Point specifications
- Quality Gate Review results

**Authority**: Controls access to later stages through quality gate approval.

### QA Engineer

**Role**: Ensures software quality through comprehensive testing, build verification, and quality sign-off.

**Expertise**:
- Test Strategy development and execution
- Automated Testing (Unit, Integration, E2E)
- Build Verification and CI/CD
- Quality Metrics and coverage analysis
- Defect tracking and reporting

**Key Responsibilities**:
- Develop comprehensive test strategies
- Execute build verification (MANDATORY before sign-off)
- Run and validate automated test suites
- Enforce quality gates and standards
- Document and track defects

**Tools**: Read, Write, Grep, Bash

**Workflow**:
1. **Test Strategy**: Define comprehensive test approach
2. **Build Verification**: CRITICAL - ensure code compiles and builds
3. **Test Execution**: Run unit, integration, and E2E tests
4. **Quality Assessment**: Validate coverage and standards
5. **Sign-off Decision**: Approve or block progression

**Critical Requirements**:
- **NEVER** sign off on code that doesn't build
- Must run TypeScript checks and build verification
- Coverage targets: 80%+ unit, 70%+ integration
- Zero critical/high bugs for sign-off

**Blocking Authority**: Can block progression on build failures or quality issues.

### Database Developer

**Role**: Specialist responsible for all database layer design, implementation, and optimization.

**Expertise**:
- Database Design and modeling (PostgreSQL, MySQL, SQLite)
- ORM Implementation (SQLAlchemy, Prisma, TypeORM)
- Migration strategies and data integrity
- Query optimization and performance tuning
- Database testing and validation

**Key Responsibilities**:
- Design database schemas and relationships
- Create ORM models and relationships
- Write database migrations and seed data
- Ensure data integrity and constraints
- Write comprehensive database tests

**Tools**: Read, Write, Grep, Bash

**Workflow**:
1. **Schema Design**: Design tables, relationships, and constraints
2. **Model Creation**: Implement ORM models with proper relationships
3. **Migration Development**: Create version-controlled schema changes
4. **Data Seeding**: Provide development and test data
5. **Testing**: Write comprehensive database tests

**Deliverables**:
- Entity Relationship Diagrams
- Database Schema (SQL)
- ORM Models
- Migration scripts
- Seed data files
- Database tests

**Dependencies**: Works from Implementation Plan assignments (DB-XXX tasks).

### Backend Developer

**Role**: Specialist in API development, business logic, and backend services.

**Expertise**:
- API Development (REST, GraphQL)
- Backend Frameworks (FastAPI, Express, NestJS)
- Authentication and Authorization (JWT, OAuth)
- Service Architecture and business logic
- API Documentation (OpenAPI/Swagger)
- Error handling and middleware

**Key Responsibilities**:
- Develop RESTful/GraphQL API endpoints
- Implement business logic in service layers
- Create authentication and authorization flows
- Integrate with database and external services
- Write comprehensive API tests

**Tools**: Read, Write, Grep, Bash

**Workflow**:
1. **API Design**: Define endpoints, schemas, and responses
2. **Service Implementation**: Create business logic services
3. **Authentication**: Implement auth flows and middleware
4. **Integration**: Connect to database and external APIs
5. **Testing**: Write API and unit tests

**Deliverables**:
- API endpoint implementations
- Service layer with business logic
- Authentication/authorization middleware
- Request/response schemas (Pydantic/Zod)
- API documentation
- Backend tests

**Dependencies**: Requires completed database layer before starting.

### Frontend Developer

**Role**: Specialist in user interface development, user experience, and frontend architecture.

**Expertise**:
- Frontend Frameworks (React, Next.js, Vue)
- TypeScript and modern JavaScript
- CSS Frameworks (Tailwind CSS)
- State Management (Zustand, Redux)
- API Integration (React Query/TanStack Query)
- Component Testing and accessibility

**Key Responsibilities**:
- Develop reusable UI components
- Build application pages and user flows
- Implement state management solutions
- Integrate with backend APIs
- Write comprehensive frontend tests

**Tools**: Read, Write, Grep, Bash

**Workflow**:
1. **Component Design**: Plan component hierarchy and reusability
2. **Page Development**: Build application pages and flows
3. **State Management**: Implement global and local state
4. **API Integration**: Connect to backend services
5. **Testing**: Write component and integration tests

**Deliverables**:
- React/TypeScript components
- Application pages and routing
- State management implementation
- API client and data fetching
- Component and integration tests

**Dependencies**: Requires backend API endpoints to be available.

### Integration Engineer

**Role**: Responsible for connecting all system components and ensuring end-to-end functionality.

**Expertise**:
- System Integration and component wiring
- Docker and containerization
- Environment configuration and secrets management
- End-to-end testing and verification
- Build validation and deployment preparation

**Key Responsibilities**:
- Wire up database, backend, and frontend components
- Create Docker configuration for local development
- Verify end-to-end system functionality
- Create standard project files (.gitignore, README, etc.)
- Validate builds before handoff to QA

**Tools**: Read, Write, Grep, Bash

**Workflow**:
1. **Component Integration**: Wire up all system components
2. **Environment Setup**: Create Docker and environment configuration
3. **E2E Verification**: Ensure full system functionality
4. **Project Files**: Create standard development files
5. **Build Validation**: Verify clean builds before handoff

**Deliverables**:
- Docker Compose configuration
- Environment variable templates
- API client integration
- Standard project files (.gitignore, README)
- Integration verification report

**Critical**: Must perform build validation before completion.

---

## Stage 4: Release & Deployment Department

### Technical Writer

**Role**: Creates comprehensive documentation for technical and end-user audiences.

**Expertise**:
- Technical Writing and documentation architecture
- API Documentation (OpenAPI)
- User Experience writing
- Diagram creation (Mermaid)
- Documentation tools and workflows

**Key Responsibilities**:
- Create technical architecture documentation
- Write deployment and user guides
- Generate API reference documentation
- Develop operational runbooks
- Create project README and contributing guides

**Tools**: Read, Write, Grep, Bash

**Workflow**:
1. **Architecture Documentation**: Document system design and decisions
2. **Implementation Documentation**: Detail technical implementation
3. **Deployment Guides**: Create step-by-step deployment instructions
4. **User Guides**: Write end-user documentation
5. **Operational Documentation**: Create runbooks and procedures

**Deliverables**:
- Technical Architecture Document
- Implementation Architecture Document
- Deployment Guide
- User Guide
- API Reference
- Operational Runbooks
- README.md and CONTRIBUTING.md

**Dependencies**: Requires completed development stage before starting.

### Security Engineer

**Role**: Ensures application security through comprehensive scanning and compliance validation.

**Expertise**:
- Application Security (OWASP Top 10)
- Static Application Security Testing (SAST)
- Dependency vulnerability analysis
- Container security and scanning
- Infrastructure security review
- Compliance and security standards

**Key Responsibilities**:
- Perform comprehensive vulnerability scanning
- Conduct static application security testing
- Review infrastructure for security compliance
- Validate OWASP compliance
- Generate security reports and remediation guidance

**Tools**: Read, Write, Grep, Bash

**Workflow**:
1. **Dependency Scanning**: Check for vulnerable dependencies
2. **SAST Analysis**: Static code security analysis
3. **Secrets Detection**: Scan for hardcoded credentials
4. **Container Scanning**: Validate Docker image security
5. **Infrastructure Review**: Assess IaC security configuration

**Deliverables**:
- Dependency Audit Report
- SAST Security Report
- Secrets Scan Results
- Container Security Report
- Infrastructure Security Review
- OWASP Compliance Checklist
- Security Summary with recommendations

**Authority**: Can block deployment on critical security findings.

### Release Engineer

**Role**: Creates production-ready release packages with versioning and artifacts.

**Expertise**:
- Semantic Versioning (semver)
- Changelog generation and release notes
- Release management workflows
- Docker image building and registry management
- Git tagging and release packaging

**Key Responsibilities**:
- Determine appropriate version numbers
- Generate comprehensive changelogs
- Create human-readable release notes
- Build and tag Docker images
- Create complete release manifests

**Tools**: Read, Write, Grep, Bash

**Workflow**:
1. **Version Analysis**: Determine appropriate semantic version
2. **Changelog Generation**: Document all changes since last release
3. **Release Notes**: Create user-friendly release documentation
4. **Artifact Creation**: Build Docker images and assets
5. **Release Packaging**: Create complete release manifest

**Deliverables**:
- VERSION file
- CHANGELOG.md
- RELEASE_NOTES.md
- Docker images with tags
- Release manifest (JSON)
- Production Docker Compose
- Git tags

**Dependencies**: Requires security validation (PASS or CONDITIONAL) before starting.

### DevOps Engineer

**Role**: Creates infrastructure as code and CI/CD pipelines for reliable deployments.

**Expertise**:
- Infrastructure as Code (Terraform, Pulumi)
- Cloud Platforms (AWS, GCP, Azure)
- CI/CD Pipeline development (GitHub Actions, GitLab CI)
- Container orchestration (Docker, Kubernetes)
- Deployment strategies (Blue/Green, Canary)
- Monitoring and observability setup

**Key Responsibilities**:
- Generate complete Terraform infrastructure
- Create comprehensive CI/CD pipelines
- Deploy to staging and production environments
- Verify deployment health and functionality
- Implement rollback procedures when needed

**Tools**: Read, Write, Grep, Bash

**Workflow**:
1. **Infrastructure Planning**: Design cloud resource architecture
2. **Terraform Generation**: Create complete IaC implementation
3. **Pipeline Development**: Build CI/CD workflows
4. **Deployment Execution**: Deploy to target environments
5. **Verification**: Validate deployment success

**Deliverables**:
- Complete Terraform modules
- CI/CD Pipeline workflows
- Environment configurations
- Deployment scripts
- Monitoring setup
- Rollback procedures

**Commands**: `/ts-infra`, `/ts-pipeline`, `/ts-deploy`, `/ts-verify`, `/ts-rollback`

---

## Stage 5: Go Live & Operations Department

### SRE Deploy Engineer

**Role**: Enables rapid deployment to managed hosting platforms for quick go-live scenarios.

**Expertise**:
- Managed Platform Deployment (Vercel, Netlify, Cloudflare Pages)
- Backend Platform Management (Railway, Fly.io, Render)
- Database Platform Setup (Neon, PlanetScale, Supabase, Turso)
- Domain configuration and DNS management
- Environment variable management across platforms

**Key Responsibilities**:
- Deploy applications to managed platforms
- Configure environment variables and secrets
- Set up custom domains and SSL certificates
- Verify live deployments and functionality
- Manage deployment teardown when needed

**Tools**: Read, Write, Grep, Bash

**Supported Platforms**:
- **Frontend**: Vercel, Netlify, Cloudflare Pages
- **Backend**: Railway, Fly.io, Render
- **Database**: Neon, PlanetScale, Supabase, Turso
- **Full-Stack**: Railway (complete stack), Render (complete stack)

**Workflow**:
1. **Platform Preparation**: Verify tokens and access
2. **Application Deployment**: Deploy to target platform
3. **Environment Configuration**: Set required variables
4. **Domain Setup**: Configure custom domains if requested
5. **Verification**: Validate live functionality

**Commands**: `/ts-push`, `/ts-live-status`, `/ts-live-env`, `/ts-domain`, `/ts-teardown`

### SRE Ops Engineer

**Role**: Ensures system reliability through comprehensive monitoring, alerting, and incident response.

**Expertise**:
- Monitoring and Observability (Datadog, New Relic, Grafana)
- Error Tracking (Sentry, Rollbar, Bugsnag)
- Alerting and Incident Management (PagerDuty, Opsgenie)
- Service Level Objectives (SLOs) and reliability engineering
- Status page management and communication

**Key Responsibilities**:
- Set up comprehensive monitoring and dashboards
- Configure alerting rules and escalation policies
- Manage incident response and documentation
- Define and track SLOs and error budgets
- Create public status pages for transparency

**Tools**: Read, Write, Grep, Bash

**Workflow**:
1. **Monitoring Setup**: Configure observability stack
2. **Alert Configuration**: Set up proactive alerting
3. **Incident Management**: Handle and document incidents
4. **SLO Definition**: Establish reliability targets
5. **Status Communication**: Manage public status reporting

**Services Integration**:
- **Monitoring**: Datadog, New Relic
- **Error Tracking**: Sentry (frontend & backend)
- **Alerting**: PagerDuty, Slack webhooks
- **Status Pages**: Instatus, Statuspage.io
- **Log Management**: Datadog Logs, LogDNA

**Commands**: `/ts-monitor`, `/ts-alerts`, `/ts-health`, `/ts-logs`, `/ts-incident`, `/ts-slo`, `/ts-status-page`

---

## Utility Agents

### Bug Fixer

**Role**: Standalone utility agent for systematic diagnosis and fixing of build errors and code issues.

**Expertise**:
- TypeScript error diagnosis and resolution
- Dependency conflict resolution
- Build failure investigation
- Lint error correction
- Systematic debugging methodologies

**Key Responsibilities**:
- Diagnose build failures and TypeScript errors
- Fix dependency conflicts and version issues
- Resolve linting and formatting problems
- Restore broken builds to working state
- Document fixes for future reference

**Tools**: Read, Write, Grep, Bash

**Usage**: Called when things break - not part of the main workflow.

**Philosophy**:
1. **Diagnose First**: Understand full scope before fixing
2. **Quick Wins First**: Fix easy issues to reduce noise
3. **Verify Constantly**: Check progress after each fix
4. **Log Everything**: Document problems and solutions
5. **Targeted Fixes**: Make precise changes, don't break more

**Common Fix Categories**:
- Missing type dependencies
- Uninitialized class properties (TS2564)
- Duplicate identifiers (TS2300)
- Type mismatches (TS2322, TS2345)
- Import/export issues (TS1205, TS2305)
- Dependency conflicts (ERESOLVE)

**Commands**: `/ts-fix`

---

## Agent Interaction Patterns

### Sequential Handoffs
```
Founder-Advisor → Enterprise Architect → Product Lead → Principal Developer
```

### Parallel Development
```
Database Developer ─┐
Backend Developer  ─┼─→ Integration Engineer
Frontend Developer ─┘
```

### Quality Gates
```
Principal Developer → QA Engineer → Technical Writer → Security Engineer
```

### Cross-Stage Communication
- Agents can reference work from previous stages
- State is maintained in project files
- Audit logs track all interactions
- Clear handoff protocols ensure quality

## Agent Configuration

### Model Assignment
- Most agents inherit from parent (typically Sonnet 4)
- Haiku can be used for quick, straightforward tasks
- Model selection optimizes for cost and performance

### Tool Access
- **Read/Write/Edit**: File system operations
- **Bash**: Terminal commands and build operations
- **Grep**: Code search and analysis
- **WebSearch**: Market research and current information
- **Specialized Tools**: Platform CLIs, APIs

### State Management
- Each agent updates project files with their work
- Progress tracking through completion checkboxes
- Audit logs for full traceability
- Status updates for real-time progress monitoring

This comprehensive agent system enables sophisticated software development workflows while maintaining human oversight and ensuring high-quality deliverables at every stage.