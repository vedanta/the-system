# The System Agents

> Complete reference for all 23 agents in the Autonomous Software Development Organization

## Overview

The System employs 26 specialized AI agents (25 production + 1 utility) organized across 6 departments. Each agent has specific expertise, tools, and responsibilities within the software development lifecycle.

## Agent Directory

| Agent | Stage | Department | Primary Role |
|-------|--------|------------|-------------|
| [Founder-Advisor](#founder-advisor) | 0 | Leadership | Primary interface & strategic advisor |
| [Enterprise Architect](#enterprise-architect) | 1 | Architecture | System design & technical architecture |
| [Solution Architect](#solution-architect) | 1 | Architecture | Requirements assessment, architecture recommendations & legacy project analysis |
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

## Leadership Department

### Founder-Advisor

**Role:** Primary interface between you (the founder) and The System
**Stage:** 0 (Pre-Architecture)
**Primary Commands:** `/ts-ask`, `/ts-status`, `/ts-brief`, `/ts-exec-summary`

**Responsibilities:**
- Acts as your chief of staff and primary communication point
- Routes requests to appropriate specialized agents
- Provides strategic guidance and recommendations
- Maintains project context and continuity
- Synthesizes information from all departments

**Tools:** Read, Write, Bash
**Model:** Sonnet 4 (Enhanced reasoning for strategic decisions)

**Key Capabilities:**
- Project status monitoring and reporting
- Strategic decision support
- Cross-departmental coordination
- Context-aware question answering
- Executive-level communication

---

## Architecture Department (Stage 1)

### Enterprise Architect

**Role:** System design and technical architecture creation
**Stage:** 1 (Architecture Design)
**Primary Commands:** `/ts-architect`

**Responsibilities:**
- Creates comprehensive technical architecture
- Defines technology stack and rationale
- Documents Architecture Decision Records (ADRs)
- Establishes development patterns and standards
- Ensures architectural consistency and quality

**Tools:** Read, Write, Bash
**Model:** Sonnet 4 (Deep technical reasoning)

**Key Capabilities:**
- Full-stack architecture design
- Technology stack selection and rationale
- Architecture Decision Records (ADR) creation
- Performance and scalability planning
- Security architecture design

### Solution Architect

**Role:** Requirements assessment, architecture recommendations & legacy project analysis
**Stage:** 1 (Architecture Assessment)
**Primary Commands:** `/ts-assess`, `/ts-assess --existing <project-name>`

**Responsibilities:**
- Analyzes project requirements and complexity
- Recommends optimal architecture patterns
- Suggests technology stack choices
- Provides implementation approach recommendations
- Assesses technical feasibility and risks
- **🗺️ Project Explorer:** Analyzes existing/legacy codebases for completion strategies
- Conducts gap analysis and technical debt assessment
- Provides modernization guidance and completion roadmaps

**Tools:** Read, Write, Bash
**Model:** Sonnet 4 (Technical analysis and recommendations)

**Key Capabilities:**
- Requirements analysis and decomposition
- Architecture pattern matching and recommendations
- Technology stack evaluation and selection
- Implementation approach optimization
- Technical risk assessment

---

## Product Department (Stage 2)

### Product Lead

**Role:** MVP definition and product requirements
**Stage:** 2 (Product Definition)
**Primary Commands:** `/ts-product`

**Responsibilities:**
- Defines minimum viable product scope
- Creates detailed user stories and acceptance criteria
- Establishes feature priorities and roadmap
- Documents comprehensive product requirements
- Ensures user-centric design approach

**Tools:** Read, Write
**Model:** Sonnet 4 (Product strategy and user experience)

**Key Capabilities:**
- User story creation and acceptance criteria
- Feature prioritization and MVP scoping
- Product requirements documentation
- User journey mapping
- Competitive analysis integration

### Project Planner

**Role:** Development planning and project management
**Stage:** 2 (Planning)
**Primary Commands:** `/ts-plan`

**Responsibilities:**
- Breaks down work into manageable sprints
- Provides realistic development time estimates
- Creates milestone schedules and dependencies
- Identifies project risks and mitigation strategies
- Establishes team coordination workflows

**Tools:** Read, Write
**Model:** Sonnet 4 (Project management and estimation)

**Key Capabilities:**
- Sprint planning and task breakdown
- Development time estimation
- Dependency mapping and critical path analysis
- Risk identification and mitigation planning
- Resource allocation optimization

### Business Analyst

**Role:** Business strategy and market analysis
**Stage:** 2 (Business Analysis)
**Primary Commands:** `/ts-analyze`

**Responsibilities:**
- Conducts market size and competition analysis
- Develops revenue model recommendations
- Creates go-to-market strategy
- Assesses business viability and growth potential
- Provides data-driven strategic insights

**Tools:** Read, Write
**Model:** Sonnet 4 (Business strategy and market analysis)

**Key Capabilities:**
- Market research and competitive analysis
- Revenue model development
- Go-to-market strategy creation
- Business case development
- Growth strategy recommendations

---

## Development Department (Stage 3)

### Principal Developer

**Role:** Implementation leadership and quality assurance
**Stage:** 3 (Development)
**Primary Commands:** `/ts-develop`, `/ts-gate`

**Responsibilities:**
- Creates comprehensive implementation strategy
- Defines coding standards and development patterns
- Conducts quality gate reviews before release
- Ensures architectural compliance
- Mentors development team and maintains code quality

**Tools:** Read, Write, Bash
**Model:** Sonnet 4 (Senior technical leadership)

**Key Capabilities:**
- Implementation strategy and planning
- Code architecture and design patterns
- Quality assurance and code review
- Technical mentorship and guidance
- Cross-team coordination and communication

### QA Engineer

**Role:** Testing strategy and quality validation
**Stage:** 3 (Quality Assurance)
**Primary Commands:** `/ts-test-plan`, `/ts-test`, `/ts-signoff`, `/ts-validate`

**Responsibilities:**
- Defines comprehensive testing strategy and frameworks
- Conducts systematic testing of all system components
- Validates build quality and deployment readiness
- Provides final quality sign-off for development completion
- Ensures testing automation and CI/CD integration

**Tools:** Read, Write, Bash
**Model:** Sonnet 4 (Quality engineering and testing)

**Key Capabilities:**
- Test strategy and framework development
- Automated testing implementation
- Performance and load testing
- Security testing integration
- Quality metrics and reporting

### Database Developer

**Role:** Data architecture and database implementation
**Stage:** 3 (Database Development)
**Primary Commands:** `/ts-build database`

**Responsibilities:**
- Designs and implements database schemas
- Creates data models and relationships
- Develops database migrations and seed data
- Optimizes database performance and indexing
- Ensures data integrity and security

**Tools:** Read, Write, Bash
**Model:** Sonnet 4 (Database design and implementation)

**Key Capabilities:**
- Database schema design and optimization
- ORM integration and model creation
- Migration strategy and implementation
- Database performance tuning
- Data security and backup strategies

### Backend Developer

**Role:** API and business logic implementation
**Stage:** 3 (Backend Development)
**Primary Commands:** `/ts-build backend`

**Responsibilities:**
- Implements RESTful APIs and GraphQL endpoints
- Develops core business logic and services
- Integrates authentication and authorization
- Creates middleware and request/response handling
- Ensures API security and performance

**Tools:** Read, Write, Bash
**Model:** Sonnet 4 (Backend development and API design)

**Key Capabilities:**
- API design and implementation
- Business logic development
- Authentication and authorization systems
- Database integration and ORM usage
- API security and performance optimization

### Frontend Developer

**Role:** User interface and client-side implementation
**Stage:** 3 (Frontend Development)
**Primary Commands:** `/ts-build frontend`

**Responsibilities:**
- Builds responsive user interface components
- Implements client-side state management
- Integrates with backend APIs and services
- Ensures cross-browser compatibility and accessibility
- Optimizes frontend performance and user experience

**Tools:** Read, Write, Bash
**Model:** Sonnet 4 (Frontend development and UI/UX)

**Key Capabilities:**
- React/Vue/Svelte component development
- State management implementation
- API integration and data handling
- Responsive design and accessibility
- Performance optimization and bundling

### Integration Engineer

**Role:** System integration and end-to-end validation
**Stage:** 3 (Integration)
**Primary Commands:** `/ts-integrate`

**Responsibilities:**
- Connects frontend, backend, and database components
- Implements comprehensive API integrations
- Ensures proper data flow and communication
- Validates complete system functionality end-to-end
- Troubleshoots integration issues and dependencies

**Tools:** Read, Write, Bash
**Model:** Sonnet 4 (System integration and E2E testing)

**Key Capabilities:**
- Full-stack integration implementation
- API integration and middleware configuration
- End-to-end testing and validation
- System communication and data flow
- Integration troubleshooting and debugging

---

## Release Department (Stage 4)

### Technical Writer

**Role:** Documentation creation and maintenance
**Stage:** 4 (Documentation)
**Primary Commands:** `/ts-docs`

**Responsibilities:**
- Creates comprehensive technical architecture documentation
- Generates API documentation and developer guides
- Writes user guides and operational documentation
- Produces deployment and maintenance guides
- Ensures documentation accuracy and completeness

**Tools:** Read, Write, Bash
**Model:** Sonnet 4 (Technical writing and documentation)

**Key Capabilities:**
- Technical architecture documentation
- API reference generation
- User and developer guide creation
- Deployment and operations documentation
- Documentation automation and maintenance

### Security Engineer

**Role:** Security validation and compliance
**Stage:** 4 (Security)
**Primary Commands:** `/ts-security`

**Responsibilities:**
- Conducts comprehensive security vulnerability scanning
- Validates authentication and authorization implementations
- Ensures secure coding practices and compliance
- Identifies and remediates security risks
- Implements security monitoring and alerting

**Tools:** Read, Write, Bash
**Model:** Sonnet 4 (Security engineering and compliance)

**Key Capabilities:**
- Security vulnerability assessment
- Authentication and authorization validation
- Secure coding practice enforcement
- Compliance checking and reporting
- Security monitoring implementation

### Release Engineer

**Role:** Release management and versioning
**Stage:** 4 (Release)
**Primary Commands:** `/ts-release`

**Responsibilities:**
- Manages semantic versioning and release cycles
- Creates comprehensive changelogs and release notes
- Packages release artifacts and distributions
- Coordinates release deployment and rollback procedures
- Ensures release quality and stability

**Tools:** Read, Write, Bash
**Model:** Sonnet 4 (Release engineering and process management)

**Key Capabilities:**
- Semantic versioning and release planning
- Changelog and release notes generation
- Release artifact packaging and distribution
- Release coordination and communication
- Rollback strategy and implementation

### DevOps Engineer

**Role:** Infrastructure and deployment automation
**Stage:** 4 (Infrastructure & Deployment)
**Primary Commands:** `/ts-infra`, `/ts-pipeline`, `/ts-deploy`, `/ts-verify`, `/ts-rollback`

**Responsibilities:**
- Creates Infrastructure as Code using Terraform
- Develops CI/CD pipelines and automation
- Manages deployment across multiple environments
- Implements monitoring, logging, and alerting
- Ensures deployment reliability and scalability

**Tools:** Read, Write, Bash
**Model:** Sonnet 4 (DevOps and infrastructure automation)

**Key Capabilities:**
- Infrastructure as Code development
- CI/CD pipeline creation and management
- Multi-environment deployment strategies
- Monitoring and observability implementation
- Deployment automation and orchestration

---

## Operations Department (Stage 5)

### SRE Deploy Engineer

**Role:** Quick deployment to managed platforms
**Stage:** 5 (Quick Deploy)
**Primary Commands:** `/ts-push`, `/ts-live-status`, `/ts-live-env`, `/ts-domain`, `/ts-teardown`

**Responsibilities:**
- Deploys applications to managed cloud platforms
- Manages environment variables and configuration
- Configures custom domains and SSL certificates
- Monitors deployment status and health
- Provides rapid deployment and platform management

**Tools:** Read, Write, Bash
**Model:** Sonnet 4 (Platform deployment and management)

**Key Capabilities:**
- Multi-platform deployment (Vercel, Railway, Netlify, etc.)
- Environment and configuration management
- Domain and SSL configuration
- Deployment health monitoring
- Platform-specific optimization

### SRE Ops Engineer

**Role:** Operations, monitoring, and reliability
**Stage:** 5 (Operations)
**Primary Commands:** `/ts-monitor`, `/ts-alerts`, `/ts-logs`, `/ts-health`, `/ts-status-page`, `/ts-incident`, `/ts-slo`

**Responsibilities:**
- Implements comprehensive monitoring and observability
- Configures alerting and notification systems
- Manages incident response and resolution
- Defines and tracks Service Level Objectives (SLOs)
- Ensures system reliability and performance

**Tools:** Read, Write, Bash
**Model:** Sonnet 4 (Site reliability engineering)

**Key Capabilities:**
- Monitoring and observability implementation
- Alerting and notification configuration
- Incident management and response
- SLI/SLO definition and tracking
- Performance optimization and reliability

---

## Utility Agents

### Bug Fixer

**Role:** Systematic error diagnosis and resolution
**Stage:** Utility (Cross-stage)
**Primary Commands:** `/ts-fix`

**Responsibilities:**
- Automatically diagnoses build and runtime errors
- Implements systematic error fixing strategies
- Resolves TypeScript compilation issues
- Fixes dependency conflicts and compatibility issues
- Provides diagnostic scanning without modifications

**Tools:** Read, Write, Bash
**Model:** Sonnet 4 (Error diagnosis and resolution)

**Key Capabilities:**
- Automated error detection and classification
- TypeScript error resolution
- Dependency conflict resolution
- Code quality issue fixing
- Diagnostic reporting and analysis

---

## Agent Coordination Patterns

### Sequential Workflows
Agents work in structured sequences through the development lifecycle:

```
Founder-Advisor → Solution Architect → Enterprise Architect
    ↓
Product Lead → Project Planner → Business Analyst
    ↓
Principal Developer → QA Engineer → Database Developer
Backend Developer → Frontend Developer → Integration Engineer
    ↓
Technical Writer → Security Engineer → Release Engineer → DevOps Engineer
    ↓
SRE Deploy Engineer → SRE Ops Engineer
```

### Parallel Execution
Some agents can work simultaneously to optimize workflow speed:

```
# Stage 2: Product Definition (Parallel)
Product Lead + Project Planner + Business Analyst

# Stage 3: Development (Sequential within parallel)
Database Developer → Backend Developer + Frontend Developer → Integration Engineer
                  QA Engineer (testing each layer)
```

### Cross-Stage Utility
Utility agents can be invoked at any stage:

```
Bug Fixer → Available throughout all stages for error resolution
QA Engineer → /ts-validate can be used at any development stage
```

---

## Agent Communication Patterns

### Information Flow
- **Founder-Advisor** maintains project context and routes information
- **Architects** provide technical foundation for all downstream agents
- **Product agents** define requirements that guide development agents
- **Development agents** collaborate on implementation details
- **Release agents** coordinate final preparation for deployment
- **Operations agents** manage live system reliability

### Decision Handoffs
- Solution Architect assessments inform Enterprise Architect decisions
- Product Lead requirements guide Principal Developer implementation
- Security Engineer findings may trigger Bug Fixer interventions
- QA Engineer validation gates progression between stages

### Quality Gates
Each department includes built-in quality validation:
- **Architecture:** Technical feasibility and design consistency
- **Product:** User value and business viability
- **Development:** Code quality and functional completeness
- **Release:** Security compliance and deployment readiness
- **Operations:** System reliability and performance

---

## Best Practices for Working with Agents

### 1. Follow the Natural Workflow
- Respect stage dependencies (Architecture → Product → Development → Release → Operations)
- Allow each agent to complete their specialized work before moving forward
- Use quality gates (`/ts-gate`, `/ts-signoff`) before major transitions

### 2. Leverage Agent Specialization
- Ask domain-specific questions to the appropriate agents
- Use `/ts-ask` for strategic questions (routed through Founder-Advisor)
- Direct technical questions to specialized agents via their primary commands

### 3. Maintain Quality Standards
- Run `/ts-validate` regularly during development
- Use `/ts-fix` proactively to address issues early
- Ensure `/ts-security` passes before any deployment

### 4. Optimize for Your Workflow
- Use `/ts-turbo` for rapid prototyping with automated agent coordination
- Choose appropriate build presets (prototype/MVP/production) for time vs. quality tradeoffs
- Leverage file-based ideas for repeatable project creation

### 5. Monitor and Maintain
- Regular `/ts-status` checks to understand project state
- Use SRE agents for ongoing operational excellence
- Maintain documentation through Technical Writer for team collaboration

---

*Last Updated: January 2025 • Framework: 23 agents, 56 commands*