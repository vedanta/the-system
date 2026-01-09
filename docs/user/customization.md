# Customizing The System

> Guide for extending and customizing the Autonomous Software Development Organization

## Overview

The System is designed to be highly customizable and extensible. You can add new agents, create custom commands, modify workflows, integrate with different services, and adapt the system to your organization's specific needs.

## Table of Contents

- [Configuration Customization](#configuration-customization)
- [Adding New Agents](#adding-new-agents)
- [Creating Custom Commands](#creating-custom-commands)
- [Workflow Modifications](#workflow-modifications)
- [Service Integrations](#service-integrations)
- [Organization-Specific Adaptations](#organization-specific-adaptations)
- [Testing Custom Components](#testing-custom-components)
- [Best Practices](#best-practices)

---

## Configuration Customization

### Technology Stack Preferences

Edit `.claude/config/preferences.yaml` to customize technology choices:

```yaml
# Cloud & Infrastructure
cloud:
  provider: "aws"          # aws, gcp, azure
  region: "us-east-1"
  environments: ["dev", "staging", "production"]

# Database preferences
database:
  primary: "postgresql"    # postgresql, mysql, mongodb
  version: "15"
  cache: "redis"          # redis, memcached, none
  search: "elasticsearch" # elasticsearch, opensearch, none
  queue: "redis"          # redis, rabbitmq, sqs, none

# Backend preferences
backend:
  language: "python"      # python, typescript, go, java
  framework: "fastapi"    # fastapi, django, express, nestjs, spring
  api_style: "rest"       # rest, graphql, grpc
  auth_method: "jwt"      # jwt, oauth2, session, auth0

# Frontend preferences
frontend:
  framework: "nextjs"     # nextjs, react, vue, svelte
  language: "typescript" # typescript, javascript
  styling: "tailwindcss" # tailwindcss, styled-components, scss
  state_management: "zustand" # zustand, redux, context, mobx

# Testing preferences
testing:
  backend: "pytest"      # pytest, unittest, jest
  frontend: "jest"       # jest, vitest, playwright
  e2e: "playwright"      # playwright, cypress, selenium

# Naming conventions
naming:
  files: "kebab-case"     # kebab-case, snake_case, camelCase
  variables: "camelCase"  # camelCase, snake_case
  constants: "SNAKE_CASE" # SNAKE_CASE, SCREAMING_SNAKE_CASE
  database_tables: "snake_case"
  api_endpoints: "kebab-case"

# Git conventions
git:
  branch_naming: "feature/kebab-case"
  commit_convention: "conventional"  # conventional, basic
  main_branch: "main"

# Go Live preferences (Stage 5)
go_live:
  frontend_targets: ["vercel", "netlify"]
  backend_targets: ["railway", "fly"]
  database_targets: ["neon", "supabase"]
  preferred_stack: "vercel+railway+neon"

# Autonomous mode settings
autonomous:
  enabled: true
  auto_approve_non_critical: false
  turbo_mode_allowed: true
```

### Service Integrations

Edit `.claude/config/integrations.yaml` to configure third-party services:

```yaml
# Error tracking and monitoring
monitoring:
  enabled: true
  error_tracking: "sentry"     # sentry, rollbar, bugsnag
  apm: "datadog"              # datadog, newrelic, dynatrace
  logs: "datadog"             # datadog, logdna, papertrail

# Communication and alerting
communication:
  chat: "slack"               # slack, discord, teams
  alerts: "pagerduty"         # pagerduty, opsgenie, victorops
  status_page: "instatus"     # instatus, statuspage, cachet

# Development tools
development:
  ci_cd: "github_actions"     # github_actions, gitlab_ci, jenkins
  container_registry: "ecr"   # ecr, dockerhub, gcr
  secrets_management: "aws_secrets" # aws_secrets, vault, azure_keyvault

# Business tools
business:
  analytics: "mixpanel"       # mixpanel, amplitude, google_analytics
  customer_support: "intercom" # intercom, zendesk, freshdesk
  payments: "stripe"          # stripe, paypal, square

# Custom integrations
custom:
  my_internal_api:
    enabled: true
    base_url: "https://internal.mycompany.com"
    auth_header: "X-API-Key"
```

---

## Adding New Agents

### Agent File Structure

Create a new agent file in `.claude/agents/my-new-agent.md`:

```markdown
---
name: my-new-agent
description: Brief description of what this agent does and when to use it
tools: Read, Write, Grep, Bash, WebSearch
model: inherit
---

# My New Agent

You are [Agent Name], responsible for [primary responsibility].

## Your Role

1. **Primary Function** - Main responsibility
2. **Secondary Function** - Additional responsibilities
3. **Coordination** - How you work with other agents

## Your Expertise

- Domain expertise area 1
- Domain expertise area 2
- Technical skills
- Business knowledge

## Required Reading

Before ANY work, read:
- `.claude/pipeline/projects/[PROJECT].md`
- `.claude/config/preferences.yaml` (if relevant)
- Other relevant files or sections

## Gate Check

1. Verify prerequisites are met
2. Check required approvals or states
3. If not ready → STOP, say "⛔ [Requirements not met]"

## Workflow

### Phase 1: [First Phase Name]

```markdown
## [Agent Name]: [Phase Description]

### [Subsection 1]
[Description of work in this subsection]

### [Subsection 2]
[Description of work in this subsection]
```

[Detailed workflow steps...]

### Phase 2: [Second Phase Name]

[Continue with workflow phases...]

## Output Structure

Create these files/sections:
```
output/[project]/
└── [agent-specific-directory]/
    ├── [deliverable-1]
    └── [deliverable-2]
```

## State Updates

After completing:
1. Update project file with [specific sections]
2. Check off deliverables in project file
3. Add to Audit Log: "[Agent Name]: [completion message]"
4. Set status to `[STATUS_NAME]`

## On Complete

Say: "[Emoji] [Completion message] for [PROJECT].

[Summary of what was accomplished]

Files created in `output/[project]/[location]/`

Next step: [What should happen next]"
```

### Agent Integration

To integrate your new agent:

1. **Add to Stage**: Determine which stage your agent belongs to
2. **Update Command Routing**: Create or modify commands that invoke your agent
3. **Dependencies**: Define what must be complete before your agent runs
4. **Handoffs**: Define how your agent hands off to the next stage/agent

### Example: Custom Security Compliance Agent

```markdown
---
name: security-compliance-agent
description: Performs industry-specific compliance checks (HIPAA, SOC2, PCI-DSS) beyond standard security scanning
tools: Read, Write, Grep, Bash, WebSearch
model: inherit
---

# Security Compliance Agent

You are the Security Compliance Agent, responsible for ensuring the application meets specific industry compliance requirements.

## Your Role

1. **Compliance Assessment** - Check against industry standards
2. **Documentation** - Generate compliance reports and evidence
3. **Remediation** - Provide specific guidance for compliance gaps

## Your Expertise

- HIPAA compliance for healthcare applications
- SOC2 Type II requirements
- PCI-DSS for payment processing
- GDPR data protection requirements

## Required Reading

Before ANY work, read:
- `.claude/pipeline/projects/[PROJECT].md`
- `.claude/config/compliance.yaml` (if exists)
- Security Engineer's scan results
- Industry requirements for project type

## Workflow

### Phase 1: Compliance Framework Selection

```markdown
## Security Compliance Agent: Framework Assessment

### Industry Detection
[Automatically detect industry based on project type]

### Applicable Standards
- [ ] HIPAA (Healthcare)
- [ ] PCI-DSS (Payments)
- [ ] SOC2 (SaaS)
- [ ] GDPR (EU users)

### Compliance Scope
[Define which requirements apply to this project]
```

### Phase 2: Compliance Check

[Detailed compliance verification process]

## Integration Points

- **Before**: Security Engineer completes standard scan
- **After**: Release Engineer packages compliance documentation
- **Parallel**: Can run alongside documentation generation
```

---

## Creating Custom Commands

### Command File Structure

Create a new command file in `.claude/commands/ts-my-command.md`:

```markdown
# /ts-my-command

Custom command for [specific purpose].

## Usage

```bash
/ts-my-command [arguments]
```

## Description

[Detailed description of what this command does]

## Arguments

- `argument1`: Description of first argument
- `argument2`: Optional second argument

## Prerequisites

- [List what must be true before running this command]
- [Required project state or approvals]

## Process

1. **Validation**: Check prerequisites and arguments
2. **Execution**: Perform the main command function
3. **Output**: Generate results and update project state

## Examples

```bash
# Example 1: Basic usage
/ts-my-command basic-arg

# Example 2: Advanced usage
/ts-my-command advanced-arg --option
```

## Agent Assignment

This command is executed by: [agent-name]

## State Updates

Updates the following in the project file:
- [Section 1]: [What gets updated]
- [Section 2]: [What gets updated]

## Related Commands

- `/ts-related-command`: [How it relates]
- `/ts-another-command`: [How it relates]
```

### Complex Command Example

```markdown
# /ts-compliance-check

Perform industry-specific compliance validation.

## Usage

```bash
/ts-compliance-check [industry]
/ts-compliance-check --all
```

## Description

Validates the application against industry-specific compliance requirements.
Automatically detects likely compliance needs based on project type, or
allows manual specification.

## Arguments

- `industry`: Specific industry standard (hipaa, pci-dss, soc2, gdpr)
- `--all`: Check all applicable standards

## Prerequisites

- Security scan must be completed (`/ts-security`)
- Documentation must be generated (`/ts-docs`)

## Process

1. **Framework Detection**: Identify applicable compliance frameworks
2. **Evidence Collection**: Gather compliance evidence from codebase
3. **Gap Analysis**: Identify compliance gaps and requirements
4. **Report Generation**: Create compliance assessment report
5. **Remediation Plan**: Provide specific remediation guidance

## Examples

```bash
# Check HIPAA compliance for healthcare app
/ts-compliance-check hipaa

# Check all applicable standards
/ts-compliance-check --all

# Specific PCI-DSS check
/ts-compliance-check pci-dss
```

## Agent Assignment

This command is executed by: security-compliance-agent

## State Updates

Updates the following in the project file:
- **Compliance Section**: Assessment results and evidence
- **Security Section**: Additional compliance scan results
- **Audit Log**: Compliance check completion

## Output Files

```
output/[project]/
├── compliance/
│   ├── compliance-assessment.md
│   ├── evidence-collection.md
│   ├── gap-analysis.md
│   └── remediation-plan.md
└── security/
    └── compliance-scan-results.json
```

## Related Commands

- `/ts-security`: Must run before compliance check
- `/ts-docs`: Compliance docs reference generated documentation
- `/ts-release`: Compliance clearance required for release
```

---

## Workflow Modifications

### Adding New Stages

To add a new stage (e.g., Stage 6: Continuous Improvement):

1. **Define Stage Purpose**:
   ```markdown
   Stage 6: Continuous Improvement
   - Purpose: Ongoing optimization and feature enhancement
   - Duration: Continuous
   - Agents: Performance Engineer, User Research Agent
   ```

2. **Create Stage Agents**:
   - `.claude/agents/performance-engineer.md`
   - `.claude/agents/user-research-agent.md`

3. **Define Stage Commands**:
   - `/ts-performance-audit`
   - `/ts-user-feedback`
   - `/ts-optimization-plan`

4. **Update Project Template**:
   ```markdown
   ## Stage 6: Continuous Improvement

   ### Performance Engineer
   Status: PENDING
   Deliverables:
   - [ ] Performance baseline established
   - [ ] Optimization recommendations generated
   - [ ] Performance monitoring configured

   ### User Research Agent
   Status: PENDING
   Deliverables:
   - [ ] User feedback collected and analyzed
   - [ ] Feature usage analytics reviewed
   - [ ] Product improvement recommendations generated
   ```

### Modifying Existing Workflows

#### Adding New Quality Gates

```yaml
# In preferences.yaml, add custom gates
quality_gates:
  custom_compliance_gate:
    stage: 19 agent: security-compliance-agent
    required_for: production_deployment
    blocking: true

  performance_gate:
    stage: 19 agent: performance-engineer
    required_for: staging_deployment
    blocking: false  # Warning only
```

#### Custom Approval Workflows

```markdown
# Add to appropriate command files
## Custom Approval: Compliance Review

### Prerequisites
- Security scan PASSED
- Compliance check COMPLETED
- Legal review REQUIRED (for some industries)

### Approval Process
1. Technical approval: Security Engineer
2. Business approval: Founder-Advisor
3. Legal approval: External legal team (if required)

### Command
```bash
/ts-approve compliance-cleared
```
```

---

## Service Integrations

### Adding New Monitoring Services

Create integration configuration in `.claude/config/integrations.yaml`:

```yaml
# Custom monitoring service
monitoring:
  custom_service:
    enabled: true
    name: "MyCompanyMonitoring"
    api_endpoint: "https://monitoring.mycompany.com/api/v1"
    auth_method: "api_key"
    capabilities:
      - metrics
      - logs
      - alerts
    integration_points:
      - stage_4_monitoring_setup
      - stage_5_operations
```

### Custom Deployment Targets

```yaml
# Custom deployment platform
go_live:
  custom_targets:
    my_company_cloud:
      type: "full_stack"
      api_endpoint: "https://deploy.mycompany.com"
      supports:
        - docker_containers
        - environment_variables
        - custom_domains
        - ssl_certificates
      deployment_command: "/ts-push my-company-cloud"
```

### Integration Implementation

Create integration agent in `.claude/agents/my-company-integration.md`:

```markdown
---
name: my-company-integration
description: Integration with MyCompany internal systems
tools: Read, Write, Grep, Bash, WebSearch
model: inherit
---

# MyCompany Integration Agent

You are responsible for integrating with MyCompany's internal systems and deployment platforms.

## Your Role

1. **System Integration** - Connect with internal APIs
2. **Deployment Management** - Deploy to company infrastructure
3. **Compliance** - Ensure company policy compliance

## Integration Points

### Internal APIs
- Employee directory service
- Company SSO integration
- Internal logging and monitoring

### Deployment
- Company Kubernetes clusters
- Internal container registry
- Company-specific environment variables

## Workflow

### Phase 1: Authentication Setup
[Company-specific auth setup]

### Phase 2: Service Integration
[Integration with internal services]

### Phase 3: Deployment
[Deployment to company infrastructure]

## Company-Specific Considerations

- All code must pass company security scan
- Deploy to company staging environment first
- Comply with company data retention policies
- Use company-approved monitoring tools
```

---

## Organization-Specific Adaptations

### Custom Project Types

Define project type templates in `.claude/templates/`:

```markdown
# .claude/templates/mobile-app.md

## Mobile Application Template

### Specialized Agents
- mobile-architect: Specializes in mobile architecture patterns
- ios-developer: Native iOS development
- android-developer: Native Android development
- mobile-qa-engineer: Mobile testing strategies

### Custom Stages
1. Mobile Architecture (native vs hybrid decision)
2. Platform-Specific Development
3. App Store Compliance
4. Mobile DevOps (CI/CD for mobile)

### Integration Points
- App Store Connect integration
- Google Play Console integration
- Mobile analytics (Firebase, Amplitude)
- Push notification services
- Mobile crash reporting

### Custom Commands
- /ts-mobile-architect
- /ts-build-ios
- /ts-build-android
- /ts-mobile-test
- /ts-app-store-submit
```

### Industry-Specific Workflows

#### Healthcare/HIPAA Workflow

```yaml
# .claude/config/industry/healthcare.yaml
compliance_requirements:
  - hipaa_compliance_check
  - phi_data_encryption
  - audit_logging_required
  - business_associate_agreements

additional_stages:
  - stage_4_5: HIPAA Compliance Validation
    agents:
      - hipaa-compliance-agent
      - healthcare-security-agent
    required_before: production_deployment

custom_integrations:
  - epic_fhir_api
  - cerner_integration
  - hl7_messaging
```

#### Financial Services Workflow

```yaml
# .claude/config/industry/financial.yaml
compliance_requirements:
  - pci_dss_compliance
  - sox_compliance
  - aml_kyc_requirements
  - financial_audit_trail

additional_security:
  - enhanced_encryption
  - hsm_integration
  - regulatory_reporting

custom_agents:
  - financial-compliance-agent
  - regulatory-reporting-agent
  - risk-management-agent
```

### Team Size Adaptations

#### Small Team Configuration

```yaml
# .claude/config/team/small-team.yaml
agent_consolidation:
  # Combine roles for small teams
  full_stack_developer:
    replaces: [database-developer, backend-developer, frontend-developer]
    capabilities: [database, backend, frontend]

  devops_qa_engineer:
    replaces: [qa-engineer, devops-engineer]
    capabilities: [testing, deployment, infrastructure]

simplified_workflow:
  - skip_optional_stages: [business-analyst]
  - auto_approve_gates: [architecture-start]
  - streamlined_documentation: true
```

#### Enterprise Configuration

```yaml
# .claude/config/team/enterprise.yaml
additional_roles:
  - solution-architect: Enterprise architecture oversight
  - security-architect: Dedicated security design
  - compliance-officer: Regulatory compliance oversight
  - change-manager: Change management process

enhanced_gates:
  - architecture_review_board
  - security_review_board
  - change_advisory_board
  - enterprise_standards_review

enterprise_integrations:
  - enterprise_service_bus
  - identity_management_system
  - enterprise_monitoring
  - corporate_artifact_repositories
```

---

## Testing Custom Components

### Agent Testing

Create test scenarios for your custom agent:

```markdown
# tests/agents/test-my-new-agent.md

## Agent Test Scenarios

### Test 1: Basic Functionality
**Setup**: Clean project with completed prerequisites
**Input**: Standard agent invocation
**Expected**: Agent completes workflow, updates project file
**Verification**: Check deliverables exist and are correct

### Test 2: Error Handling
**Setup**: Project missing prerequisites
**Input**: Attempt to run agent
**Expected**: Agent stops with clear error message
**Verification**: No partial work performed, clear guidance provided

### Test 3: Integration
**Setup**: Agent runs after previous stage completion
**Input**: Run agent with real project data
**Expected**: Agent successfully integrates with other components
**Verification**: Clean handoff to next stage

### Test 4: State Management
**Setup**: Partially completed project
**Input**: Resume agent work
**Expected**: Agent continues from correct point
**Verification**: No duplicate work, proper state tracking
```

### Command Testing

```bash
# Create test project for command validation
/ts-new-project test-custom-command

# Test basic functionality
/ts-my-command test-argument

# Test error conditions
/ts-my-command invalid-argument

# Test integration with other commands
/ts-status  # Verify command updated project correctly
```

### Integration Testing

```yaml
# .claude/tests/integration/custom-workflow.yaml
test_scenarios:
  - name: "Custom compliance workflow"
    steps:
      - command: "/ts-new-project compliance-test"
      - command: "/ts-architect"
      - command: "/ts-approve architecture-lock"
      - command: "/ts-product"
      - command: "/ts-approve green-light"
      - command: "/ts-develop"
      - command: "/ts-security"
      - command: "/ts-compliance-check hipaa"  # Custom command
      - command: "/ts-release"
    expected_outcome: "Release package with HIPAA compliance documentation"
```

---

## Best Practices

### Agent Development

1. **Single Responsibility**: Each agent should have a clear, focused purpose
2. **Clear Interfaces**: Define exact inputs, outputs, and dependencies
3. **Error Handling**: Always check prerequisites and provide clear error messages
4. **State Management**: Properly update project files and audit logs
5. **Documentation**: Comprehensive workflow documentation with examples

### Command Design

1. **Intuitive Naming**: Commands should be self-explanatory
2. **Consistent Patterns**: Follow existing command conventions
3. **Proper Validation**: Check prerequisites before execution
4. **Clear Output**: Provide helpful completion messages and next steps
5. **Idempotency**: Commands should be safely re-runnable

### Configuration Management

1. **Environment Specific**: Separate configurations for different environments
2. **Secure Secrets**: Never commit sensitive data to configuration files
3. **Validation**: Validate configuration files on startup
4. **Documentation**: Document all configuration options thoroughly
5. **Backward Compatibility**: Maintain compatibility when updating configurations

### Integration Development

1. **API Versioning**: Handle API version changes gracefully
2. **Rate Limiting**: Respect external service rate limits
3. **Error Resilience**: Handle external service failures appropriately
4. **Testing**: Test integrations with both success and failure scenarios
5. **Monitoring**: Monitor integration health and performance

### Workflow Customization

1. **Minimal Changes**: Make smallest possible changes to achieve goals
2. **Clear Dependencies**: Document all workflow dependencies clearly
3. **Quality Gates**: Maintain appropriate quality controls
4. **Testing**: Test custom workflows end-to-end
5. **Documentation**: Update all relevant documentation

### Organizational Adaptation

1. **Stakeholder Buy-in**: Ensure team understands and agrees with customizations
2. **Training**: Provide training on custom workflows and commands
3. **Gradual Rollout**: Introduce customizations incrementally
4. **Feedback Loop**: Collect feedback and iterate on customizations
5. **Maintenance**: Plan for ongoing maintenance and updates

---

## Example: Complete Custom Extension

Let's walk through creating a complete custom extension for mobile app development:

### 1. Define the Extension

```yaml
# .claude/config/extensions/mobile-development.yaml
extension_name: "Mobile Development"
version: "1.0.0"
description: "Adds mobile app development capabilities"

agents:
  - mobile-architect
  - ios-developer
  - android-developer
  - mobile-qa-engineer

commands:
  - ts-mobile-architect
  - ts-build-ios
  - ts-build-android
  - ts-mobile-test
  - ts-app-store-prep

integrations:
  - apple_app_store_connect
  - google_play_console
  - firebase_services
```

### 2. Create Mobile Architect Agent

```markdown
---
name: mobile-architect
description: Specialized architect for mobile applications, decides native vs hybrid approach
tools: Read, Write, Grep, WebSearch
model: inherit
---

# Mobile Architect Agent

You are the Mobile Architect, specializing in mobile application architecture and technology decisions.

## Your Role

1. **Platform Decision** - Native, hybrid, or cross-platform approach
2. **Mobile Architecture** - App structure, state management, navigation
3. **Performance Planning** - Battery, memory, network considerations
4. **Store Compliance** - App Store and Play Store requirements

[Continue with full agent definition...]
```

### 3. Create Mobile Commands

```markdown
# /ts-mobile-architect

Perform mobile-specific architecture decisions and planning.

## Usage

```bash
/ts-mobile-architect [platform-strategy]
```

## Platform Strategies

- `native`: Native iOS and Android development
- `hybrid`: React Native or Flutter
- `cross-platform`: Xamarin or other cross-platform solution
- `auto`: Automatically choose based on requirements

[Continue with full command definition...]
```

### 4. Update Project Template

```markdown
## Stage 1.5: Mobile Architecture (if mobile project)

### Mobile Architect
Status: PENDING
Deliverables:
- [ ] Platform strategy decision (Native/Hybrid/Cross-platform)
- [ ] Mobile architecture design
- [ ] Performance and battery optimization plan
- [ ] App store compliance checklist
- [ ] Mobile security architecture

Last Updated: [timestamp]
```

### 5. Integration Testing

```bash
# Test the complete mobile workflow
/ts-new-project my-mobile-app
# Share mobile app idea with founder-advisor
/ts-approve architecture-start
/ts-architect
/ts-mobile-architect native  # Custom mobile architecture
/ts-approve architecture-lock
# Continue with product and development...
```

---

## Getting Help

### Community Resources

- **Documentation**: Start with this comprehensive guide
- **Examples**: Study existing agents and commands for patterns
- **Testing**: Use the test project approach to validate changes
- **Feedback**: Share your customizations with the community

### Development Process

1. **Plan**: Design your customization before implementing
2. **Prototype**: Create minimal version first
3. **Test**: Validate with real projects
4. **Document**: Create comprehensive documentation
5. **Deploy**: Roll out to your team/organization gradually
6. **Maintain**: Keep customizations updated as the system evolves

### Troubleshooting

Common issues and solutions:

1. **Agent Not Responding**: Check agent file syntax and required reading
2. **Command Not Found**: Verify command file exists and follows naming convention
3. **State Not Updating**: Ensure proper project file updates in agent workflow
4. **Integration Failures**: Check service credentials and API endpoints
5. **Workflow Conflicts**: Review dependencies and gate requirements

The System is designed to be extended and customized for your specific needs. Start small with configuration changes, then gradually add custom agents and workflows as you become more comfortable with the system's patterns and architecture.