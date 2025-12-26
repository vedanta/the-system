# Configuration

The System is highly configurable through two main configuration files and environment variables. This allows you to customize tech stack preferences, naming conventions, and integrations.

---

## Configuration Files Overview

| File | Purpose | Lines | Key Sections |
|------|---------|-------|---------------|
| `preferences.yaml` | Tech stack defaults, conventions, SLOs | 350+ | Cloud, database, backend, frontend, testing |
| `integrations.yaml` | Third-party service configuration | 180+ | Communication, auth, monitoring, analytics |
| `.env` | Environment variables and secrets | Variable | API keys, tokens, credentials |

---

## preferences.yaml

**Location:** `.claude/config/preferences.yaml`
**Purpose:** Configures all technical decisions and preferences

### Cloud & Infrastructure

```yaml
cloud:
  provider: aws               # aws | gcp | azure
  region: us-east-1
  environments:
    - development
    - staging
    - production

infrastructure:
  orchestration: ecs          # ecs | eks | gke | aks | docker-compose
  iac: terraform             # terraform | pulumi | cloudformation | cdk
  cicd: github-actions       # github-actions | gitlab-ci | circleci
  registry: ecr              # ecr | gcr | dockerhub | ghcr
```

**Impact:** Determines cloud provider and infrastructure approach for Stage 4 deployment.

### Database Configuration

```yaml
database:
  primary: postgresql         # postgresql | mysql | mongodb
  version: "15"
  cache: redis               # redis | memcached
  search: elasticsearch      # elasticsearch | opensearch | meilisearch
  queue: redis               # redis | sqs | rabbitmq | kafka
```

**Impact:** Database Developer uses these choices for schema design and ORM selection.

### Backend Stack

```yaml
backend:
  language: python           # python | typescript | go
  version: "3.11"
  framework: fastapi         # fastapi | django | express | nestjs | gin
  orm: sqlalchemy           # sqlalchemy | prisma | typeorm | gorm
  api_style: rest           # rest | graphql | grpc
  auth: jwt                 # jwt | oauth2 | session
```

**Impact:** Backend Developer implements APIs using these technology choices.

### Frontend Stack

```yaml
frontend:
  framework: nextjs          # nextjs | react | vue | svelte
  version: "14"
  language: typescript       # typescript | javascript
  styling: tailwind         # tailwind | css-modules | styled-components
  state_management: zustand  # zustand | redux | jotai | pinia
  data_fetching: tanstack-query  # tanstack-query | swr | rtk-query
```

**Impact:** Frontend Developer builds UI using these framework choices.

### Testing Configuration

```yaml
testing:
  backend:
    unit: pytest
    api: pytest-httpx
    coverage_target: 80

  frontend:
    unit: jest
    component: testing-library
    e2e: playwright
    coverage_target: 80
```

**Impact:** QA Engineer enforces these coverage targets and tooling choices.

### Code Conventions

```yaml
conventions:
  naming:
    files: kebab-case          # my-component.tsx
    components: PascalCase     # MyComponent
    functions: camelCase       # myFunction
    variables: camelCase       # myVariable
    constants: SCREAMING_SNAKE # MY_CONSTANT
    database_tables: snake_case # user_accounts
    database_columns: snake_case # created_at
    api_endpoints: kebab-case  # /api/v1/user-accounts

  formatting:
    python:
      formatter: black
      linter: ruff
      line_length: 88
    typescript:
      formatter: prettier
      linter: eslint
      line_length: 100

  git:
    branch_naming: feature/ticket-description
    commit_style: conventional  # feat:, fix:, chore:, etc.
```

**Impact:** All developers follow these conventions for consistent code style.

### Security Defaults

```yaml
security:
  password:
    min_length: 8
    require_uppercase: true
    require_lowercase: true
    require_number: true
    require_special: false

  rate_limiting:
    enabled: true
    requests_per_minute: 60

  cors:
    allow_credentials: true
    allow_methods: ["GET", "POST", "PUT", "DELETE", "PATCH"]
```

**Impact:** Security Engineer validates implementations against these standards.

### Go Live Preferences

```yaml
go_live:
  targets:
    database: neon          # neon | planetscale | supabase | turso
    backend: railway        # railway | fly | render
    frontend: vercel        # vercel | netlify | cloudflare

  full_stack: railway       # railway | render
  default_env: preview      # preview | production
  auto_link: true          # Auto-configure env vars between services
```

**Impact:** SRE Deploy Engineer uses these as defaults for `/ts-push` commands.

### SLO Targets

```yaml
slo:
  availability: 99.9        # Percentage
  latency_p50: 100          # Milliseconds
  latency_p95: 500          # Milliseconds
  latency_p99: 1000         # Milliseconds
  error_rate: 1             # Percentage
  window_days: 30
```

**Impact:** SRE Ops Engineer configures monitoring and alerts based on these targets.

### Autonomous Mode

```yaml
autonomous:
  enabled: false            # Global turbo mode toggle
  auto_approve_gates:
    architecture_start: true
    architecture_lock: true
    green_light: true
    development: true
    release: true
    staging: false          # Still require staging approval
    production: false       # Still require production approval
    launch: false           # Still require launch approval

  security:
    stop_on_critical: true  # Stop on CRITICAL findings
    stop_on_high: false     # Continue on HIGH (log only)
```

**Impact:** Controls behavior of `/ts-turbo` commands and autonomous execution.

---

## integrations.yaml

**Location:** `.claude/config/integrations.yaml`
**Purpose:** Configures third-party service integrations

### Communication Services

```yaml
communication:
  email:
    provider: sendgrid      # sendgrid | ses | postmark | mailgun
    enabled: false
    from_address: noreply@example.com
    templates:
      welcome: d-xxxxx
      password_reset: d-xxxxx

  sms:
    provider: twilio        # twilio | sns | vonage
    enabled: false
```

### Authentication Providers

```yaml
auth_providers:
  google:
    enabled: false
    scopes: [email, profile]

  github:
    enabled: false
    scopes: [user:email]

  microsoft:
    enabled: false
```

### Storage Services

```yaml
storage:
  provider: s3             # s3 | gcs | azure-blob | cloudinary
  enabled: false
  bucket_name: my-app-uploads
  max_file_size_mb: 10
  allowed_types:
    - image/jpeg
    - image/png
    - application/pdf
```

### Monitoring & Analytics

```yaml
monitoring:
  sentry:
    enabled: false
    traces_sample_rate: 0.1
    profiles_sample_rate: 0.1

  datadog:
    enabled: false
    apm_enabled: true
    logs_enabled: true

analytics:
  google_analytics:
    enabled: false
    measurement_id: G-XXXXXXXX

  mixpanel:
    enabled: false
```

### Notification Services

```yaml
notifications:
  slack:
    enabled: false
    channels:
      alerts: "#alerts"
      deployments: "#deployments"

  pagerduty:
    enabled: false
```

---

## Environment Variables

**Location:** `.env` (gitignored, use `.env.example` as template)
**Purpose:** Store secrets and environment-specific configuration

### Required Variables

```bash
# Database
DATABASE_URL=postgresql://user:pass@localhost:5432/dbname

# Authentication
JWT_SECRET=your-secret-key-here
JWT_ALGORITHM=HS256
JWT_EXPIRE_MINUTES=30

# External APIs
OPENAI_API_KEY=sk-...
ANTHROPIC_API_KEY=sk-ant-...

# Platform Tokens (for Stage 5 deployment)
VERCEL_TOKEN=your-vercel-token
RAILWAY_TOKEN=your-railway-token
NEON_API_KEY=your-neon-api-key
```

### Optional Service Configuration

```bash
# Monitoring
SENTRY_DSN=https://...@sentry.io/...
DATADOG_API_KEY=your-datadog-key

# Communication
SENDGRID_API_KEY=SG...
TWILIO_ACCOUNT_SID=AC...
TWILIO_AUTH_TOKEN=your-token

# Storage
AWS_ACCESS_KEY_ID=AKIA...
AWS_SECRET_ACCESS_KEY=your-secret
S3_BUCKET_NAME=your-bucket

# OAuth Providers
GOOGLE_CLIENT_ID=your-client-id
GOOGLE_CLIENT_SECRET=your-secret
GITHUB_CLIENT_ID=your-client-id
GITHUB_CLIENT_SECRET=your-secret
```

### Environment-Specific Variables

```bash
# Development
NODE_ENV=development
DEBUG=true
LOG_LEVEL=debug

# Staging
NODE_ENV=staging
DEBUG=false
LOG_LEVEL=info

# Production
NODE_ENV=production
DEBUG=false
LOG_LEVEL=error
```

---

## Configuration Workflow

### 1. Initial Setup

```bash
# Copy example files
cp .env.example .env
cp .claude/config/preferences.yaml.example .claude/config/preferences.yaml

# Edit configurations
vim .claude/config/preferences.yaml
vim .env
```

### 2. Customize Tech Stack

```yaml
# Example: Switch to Vue.js frontend
frontend:
  framework: vue
  version: "3"
  language: typescript
  styling: tailwind
  state_management: pinia
  data_fetching: vue-query
```

### 3. Enable Integrations

```yaml
# Example: Enable email notifications
communication:
  email:
    provider: sendgrid
    enabled: true
    from_address: noreply@myapp.com
```

```bash
# Add to .env
SENDGRID_API_KEY=SG.your-actual-key
```

### 4. Configure Deployment Targets

```yaml
# Example: Use Fly.io for backend
go_live:
  targets:
    database: neon
    backend: fly
    frontend: vercel
```

---

## Configuration by Stage

### Stage 1: Architecture

**Uses:**
- `cloud.provider` - Determines infrastructure approach
- `database.primary` - Database technology choice
- `backend.language` & `framework` - API technology
- `frontend.framework` - UI technology

**Outputs:** Architecture Decision Records referencing these choices

### Stage 2: Product

**Uses:**
- `defaults.api_version` - API versioning strategy
- `conventions.naming` - Naming standards for features
- `slo` targets - Performance requirements

**Outputs:** Technical requirements aligned with configuration

### Stage 3: Development

**Uses:**
- All `backend.*` settings - Implementation choices
- All `frontend.*` settings - UI implementation
- `testing.*` settings - QA requirements
- `conventions.*` - Code style enforcement

**Outputs:** Code implementing configured tech stack

### Stage 4: Release

**Uses:**
- `infrastructure.*` - IaC generation
- `cloud.*` - Deployment target
- `security.*` - Security validation
- `monitoring.*` - Observability setup

**Outputs:** Infrastructure and pipelines matching configuration

### Stage 5: Go Live

**Uses:**
- `go_live.targets` - Platform deployment choices
- `monitoring.*` - Service integration
- `slo.*` - Monitoring targets
- Environment variables for API keys

**Outputs:** Live services on configured platforms

---

## Advanced Configuration

### Custom Tech Stacks

```yaml
# Example: Go backend with Svelte frontend
backend:
  language: go
  framework: gin
  orm: gorm

frontend:
  framework: svelte
  styling: tailwind
  state_management: writable-stores
```

### Multi-Environment Setup

```yaml
# Development
cloud:
  provider: local
infrastructure:
  orchestration: docker-compose

# Production
cloud:
  provider: aws
infrastructure:
  orchestration: ecs
```

### Custom Conventions

```yaml
conventions:
  naming:
    # Custom naming for specific domain
    components: kebab-case    # my-component instead of MyComponent
    constants: camelCase      # myConstant instead of MY_CONSTANT

  git:
    branch_naming: jira/PROJ-123-description
    commit_style: none        # Disable conventional commits
```

### Integration Profiles

```yaml
# Startup profile - minimal integrations
monitoring:
  sentry: { enabled: true }  # Just error tracking

# Enterprise profile - full observability
monitoring:
  sentry: { enabled: true }
  datadog: { enabled: true }
  prometheus: { enabled: true }
```

---

## Configuration Validation

### Validation Rules

The System validates configuration on startup:

1. **Required fields:** Must be present
2. **Valid options:** Must be from allowed enum values
3. **Dependencies:** Some options require others
4. **Compatibility:** Some combinations are incompatible

### Common Validation Errors

```yaml
# Error: Invalid cloud provider
cloud:
  provider: digital-ocean  # ❌ Not supported

# Fix: Use supported provider
cloud:
  provider: aws           # ✅ Supported
```

```yaml
# Error: Incompatible ORM choice
backend:
  language: python
  orm: typeorm           # ❌ TypeScript ORM with Python

# Fix: Use compatible ORM
backend:
  language: python
  orm: sqlalchemy        # ✅ Python ORM
```

### Configuration Testing

```bash
# Validate configuration
/ts-validate config

# Test with specific project
/ts-new-project test-config
/ts-architect  # Will use your configuration
```

---

## Migration Between Configurations

### Upgrading Tech Stack

When updating major versions:

```yaml
# Old configuration
frontend:
  framework: nextjs
  version: "13"

# New configuration
frontend:
  framework: nextjs
  version: "14"
```

**Impact:** Agents will use updated versions in new projects

### Changing Deployment Strategy

```yaml
# From Stage 4 (IaC) to Stage 5 (managed)
infrastructure:
  iac: terraform      # Remove this section

go_live:              # Add this section
  targets:
    frontend: vercel
    backend: railway
```

### Adding Integrations Mid-Project

```bash
# Update configuration
vim .claude/config/integrations.yaml

# Apply to existing project
/ts-monitor          # Re-run monitoring setup
/ts-alerts           # Re-configure alerts
```

---

## Configuration Best Practices

### Security

1. **Never commit secrets:** Use `.env` files (gitignored)
2. **Use secure defaults:** Enable security features by default
3. **Rotate credentials:** Regularly update API keys
4. **Principle of least privilege:** Minimal required permissions

### Maintainability

1. **Document changes:** Comment configuration modifications
2. **Version control:** Track configuration changes in git
3. **Environment parity:** Keep dev/staging/production aligned
4. **Validation:** Test configuration changes before applying

### Performance

1. **Resource sizing:** Match infrastructure to expected load
2. **Caching strategy:** Configure appropriate cache layers
3. **CDN setup:** Enable content delivery for static assets
4. **Monitoring thresholds:** Set realistic SLO targets

### Team Coordination

1. **Shared preferences:** Align team on tech stack choices
2. **Local overrides:** Allow individual developer customization
3. **Documentation:** Keep configuration documentation updated
4. **Change management:** Process for configuration updates

---

This comprehensive configuration system allows The System to adapt to virtually any technology preference while maintaining consistency and best practices across all generated code and infrastructure.