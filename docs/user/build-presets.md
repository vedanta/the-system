# Build Presets & Stage Skipping - User Guide

**Speed up your development with automated build modes and granular workflow control that adapt to your needs.**

---

## 🎯 What are Build Presets?

Build Presets are automated workflow modes that **automatically adjust the complexity and speed** of project generation based on your goals. Instead of always running the full enterprise-grade workflow, you can choose the right balance of speed vs. quality for your specific needs.

### Three Build Modes

| Mode | Target Time | Best For | Quality Level |
|------|-------------|----------|---------------|
| **🚀 Prototype** | **3-5 minutes** | Demos, rapid iteration, proof-of-concepts | Working code, minimal polish |
| **📦 MVP** | **15-20 minutes** | Production launches, client projects | Professional quality |
| **🏢 Production** | **45-60 minutes** | Enterprise applications, critical systems | Enterprise-grade, fully optimized |

### 🎛️ Stage Skipping for Ultimate Control

**NEW:** Take control even further with `--build-skip-stage` flags that allow you to skip specific workflow stages:

| Stage | Skip Flag | Result | Use Cases |
|-------|-----------|--------|-----------|
| **Product** | `--build-skip-stage=product` | Skip product planning, MVP definition | Architecture-only, direct development |
| **Development** | `--build-skip-stage=development` | Skip code generation | Architecture + docs only |
| **Release** | `--build-skip-stage=release` | Skip documentation, security scans | Quick development iteration |

**Combine with Build Presets:**
```bash
# Fast architecture-only (1-2 min)
/ts-turbo arch-test "simple calculator" --build=prototype --build-skip-stage=product

# Skip multiple stages for custom workflows
/ts-turbo docs-only "payment system" --build-skip-stage=development --build-skip-stage=release
```

---

## 🚀 Quick Start

### Method 1: Build Presets (Recommended)

```bash
# Fast prototyping (3-5 min)
/ts-turbo my-prototype "simple todo app" --build=prototype

# Professional MVP (15-20 min)
/ts-turbo my-mvp "todo app with auth" --build=mvp

# Enterprise production (45-60 min)
/ts-turbo my-enterprise "todo app" --build=production
```

### Method 2: Stage Skipping (Ultimate Control)

```bash
# Fast architecture design only (1-2 min)
/ts-turbo quick-arch "payment system" --build-skip-stage=product --build-skip-stage=development

# Skip product planning, go straight to development (8-12 min)
/ts-turbo dev-direct "calculator app" --build-skip-stage=product

# Skip documentation and security for rapid iteration (10-15 min)
/ts-turbo iterate-fast "user dashboard" --build-skip-stage=release
```

### Method 3: Combining Build Presets + Stage Skipping

```bash
# Fastest possible: prototype mode + skip product stage (1-2 min)
/ts-turbo lightning-fast "demo app" --build=prototype --build-skip-stage=product

# Custom MVP: skip release docs for faster delivery (12-15 min)
/ts-turbo mvp-fast "saas platform" --build=mvp --build-skip-stage=release
```

### Method 4: Keyword Detection

The system automatically detects your intent from your description:

```bash
# These phrases trigger PROTOTYPE mode:
/ts-turbo demo-app "rapid prototype for client demo"
/ts-turbo poc-app "quick proof of concept to test the idea"
/ts-turbo sketch-app "basic prototype to validate approach"

# These phrases trigger MVP mode (default):
/ts-turbo todo-app "todo application with user authentication"
/ts-turbo blog-app "blog platform with comments"

# These phrases trigger PRODUCTION mode:
/ts-turbo enterprise-app "mission-critical todo system with full compliance"
/ts-turbo scale-app "todo app that needs to handle enterprise workloads"
```

---

## ⚡ Performance Comparison

### Real Performance Gains

Build Presets + Stage Skipping deliver **up to 20x faster** project generation:

| Build Type | Time | Agents Used | What You Get |
|------------|------|-------------|--------------|
| **🏃‍♂️ Prototype + Skip Product** | **1-2 min** | **2-26 agents** | Architecture design only, fast validation |
| **🚀 Prototype** | **3-5 min** | **3-26 agents** | Working app, basic features, rapid iteration |
| **📦 MVP** | **15-20 min** | **7-26 agents** | Production-ready, professional quality, proper testing |
| **📦 MVP + Skip Release** | **12-15 min** | **6-26 agents** | Production-ready without docs/security scans |
| **🏢 Production** | **45-60 min** | **12+ agents** | Enterprise-grade, full compliance, comprehensive docs |

### Stage Skipping Performance

| Skip Configuration | Time Savings | Use Case |
|-------------------|--------------|----------|
| `--build-skip-stage=product` | **Save 3-5 min** | Skip planning, go straight to development |
| `--build-skip-stage=development` | **Save 10-20 min** | Architecture + docs only |
| `--build-skip-stage=release` | **Save 5-10 min** | Skip docs/security for rapid iteration |
| **Multiple skips** | **Save 15-30 min** | Custom workflows, specific deliverables |

### Speed Breakdown by Stage

| Stage | Prototype | MVP | Production | Skip Option |
|-------|-----------|-----|------------|-------------|
| **Architecture** | Compressed (inline) | Standard | Comprehensive | ❌ Cannot skip |
| **Product** | **SKIPPED** | Full planning | Enterprise planning | ✅ `--build-skip-stage=product` |
| **Development** | Minimal testing | Standard testing | Comprehensive testing | ✅ `--build-skip-stage=development` |
| **Release** | Basic docs | Professional docs | Enterprise docs | ✅ `--build-skip-stage=release` |

**⚡ Fast Combinations:**
- **Architecture Only:** `--build-skip-stage=product --build-skip-stage=development` (1-2 min)
- **No Documentation:** `--build-skip-stage=release` (save 5-10 min)
- **Direct Development:** `--build-skip-stage=product` (save 3-5 min)

---

## 🎨 What Each Mode Delivers

### 🚀 Prototype Mode (3-5 minutes)

**Optimal for:** Demos, rapid iteration, testing ideas, client presentations

**You Get:**
- ✅ **Working application** with core functionality
- ✅ **Basic UI** - functional but minimal styling
- ✅ **Simple authentication** (often hardcoded for demos)
- ✅ **Docker setup** for easy running
- ✅ **Basic README** with quick start instructions

**You Don't Get:**
- ❌ Comprehensive testing
- ❌ Production security hardening
- ❌ Detailed documentation
- ❌ Performance optimization
- ❌ Enterprise patterns

**Example Output:**
```
output/my-prototype/
├── src/
│   ├── app.py           # Simple Flask/FastAPI backend
│   ├── index.html       # Basic frontend
│   └── style.css        # Minimal styling
├── docker-compose.yml   # Quick development setup
├── README.md            # "Run with docker-compose up"
└── .env.example         # Basic config
```

---

### 📦 MVP Mode (15-20 minutes)

**Optimal for:** Production launches, client deliverables, professional projects

**You Get:**
- ✅ **Production-ready application** with proper architecture
- ✅ **Professional UI** with design system and responsive layout
- ✅ **Secure authentication** with JWT/OAuth integration
- ✅ **Comprehensive testing** (unit, integration, E2E)
- ✅ **Professional documentation** (API docs, setup guide, deployment)
- ✅ **CI/CD pipelines** ready for deployment
- ✅ **Security scanning** and vulnerability assessment

**Example Output:**
```
output/my-mvp/
├── src/
│   ├── backend/         # Professional API structure
│   ├── frontend/        # Component library, routing
│   └── shared/          # Types, utilities
├── tests/               # Comprehensive test suite
├── docs/                # API documentation
├── docker-compose.yml   # Production-ready containers
├── .github/workflows/   # CI/CD pipelines
├── README.md            # Professional setup guide
└── deployment/          # Deployment configurations
```

---

### 🏢 Production Mode (45-60 minutes)

**Optimal for:** Enterprise systems, mission-critical applications, compliance requirements

**You Get Everything from MVP Plus:**
- ✅ **Enterprise architecture** with full scalability patterns
- ✅ **Advanced security** (RBAC, audit trails, compliance reporting)
- ✅ **Performance optimization** (caching, database optimization)
- ✅ **Multi-environment support** (dev, staging, production)
- ✅ **Monitoring & observability** (metrics, logging, tracing)
- ✅ **Disaster recovery** plans and procedures
- ✅ **Compliance documentation** (SOC2, GDPR considerations)
- ✅ **Advanced deployment** (blue/green, canary releases)

**Example Output:**
```
output/my-enterprise/
├── src/                 # Microservices architecture
├── tests/               # Full test pyramid
├── docs/                # Complete documentation suite
├── infra/               # Terraform infrastructure
├── k8s/                 # Kubernetes manifests
├── monitoring/          # Prometheus, Grafana configs
├── security/            # Security policies, scans
├── compliance/          # Audit trails, reports
└── deployment/          # Multi-environment configs
```

---

## 🎛️ When to Use Stage Skipping

Stage skipping gives you surgical control over the workflow. Here's when to use each skip option:

### Skip Product Stage (`--build-skip-stage=product`)

**Optimal for:**
- 🧩 **Architecture exploration** - "How would you design a payment system?"
- 🚀 **Technical feasibility** - "Can we build this with our current stack?"
- 👨‍💼 **Developer-driven projects** - You know exactly what to build
- 🔧 **Framework testing** - Testing new patterns or technologies
- ⚡ **Fast development** - Skip planning, go straight to coding

**Time Saved:** 3-5 minutes
**What You Skip:** Product planning, user stories, business analysis
**What Architecture Defines:** Minimal MVP requirements instead

```bash
# Architecture + Development only
/ts-turbo technical-poc "microservices payment system" --build-skip-stage=product
```

### Skip Development Stage (`--build-skip-stage=development`)

**Optimal for:**
- 📋 **Architecture documentation** - Create designs without implementation
- 📊 **Project planning** - Full planning and specs without code
- 💼 **Client proposals** - Architecture + plans for approval before development
- 🎯 **Requirements gathering** - Complete specifications first
- 🏗️ **System design practice** - Focus purely on architecture skills

**Time Saved:** 10-20 minutes
**What You Skip:** All code generation, testing, integration
**What You Get:** Complete architecture + product specs + documentation

```bash
# Architecture + Product + Documentation only
/ts-turbo client-proposal "e-commerce platform" --build-skip-stage=development
```

### Skip Release Stage (`--build-skip-stage=release`)

**Optimal for:**
- 🔄 **Rapid iteration** - Fast development cycles during feature work
- 🧪 **Development testing** - Focus on code, skip documentation
- 🏃‍♂️ **Time-constrained projects** - When docs can come later
- 🔧 **Internal tools** - Code works, documentation not critical
- ⚡ **Prototyping cycles** - Build → test → rebuild quickly

**Time Saved:** 5-10 minutes
**What You Skip:** Documentation, security scans, release packaging
**What You Get:** Working code ready for manual testing

```bash
# Fast development iteration
/ts-turbo feature-test "user dashboard improvements" --build-skip-stage=release
```

### Multiple Stage Skips

**Architecture Only** (`--build-skip-stage=product --build-skip-stage=development`):
- 🎨 **Pure system design** - Architecture patterns and decisions only
- 📚 **Learning exercises** - Study how The System approaches design
- 🔍 **Technical assessment** - "How complex would this be?"
- 💡 **Idea validation** - Is this architecturally sound?

```bash
# 1-2 minute architecture design
/ts-turbo arch-study "distributed chat system" --build-skip-stage=product --build-skip-stage=development
```

**Custom Workflows:**
```bash
# Documentation package (Architecture + Product + Release docs)
/ts-turbo docs-package "payment API" --build-skip-stage=development

# Code only (skip planning and docs)
/ts-turbo code-only "calculator" --build-skip-stage=product --build-skip-stage=release
```

---

## 💡 Choosing the Right Mode

### Use **PROTOTYPE** when:
- 🎯 You need to **validate an idea quickly**
- 🎯 **Showing something to stakeholders** in the next hour
- 🎯 **Testing technical feasibility** before committing
- 🎯 **Iterating rapidly** on features and design
- 🎯 **Building throwaway demos** for presentations

### Use **MVP** when:
- 🚀 **Launching a real product** that users will actually use
- 🚀 **Delivering to clients** who expect professional quality
- 🚀 **Building something you'll maintain** and expand over time
- 🚀 **Need proper testing** and documentation
- 🚀 **Planning to scale** beyond initial version

### Use **PRODUCTION** when:
- 🏢 **Enterprise deployment** with compliance requirements
- 🏢 **Mission-critical systems** where downtime is costly
- 🏢 **Handling sensitive data** requiring advanced security
- 🏢 **Large-scale applications** with high performance needs
- 🏢 **Long-term maintenance** with multiple teams

---

## 🎛️ Advanced Usage

### Triple Combination: Build + Architecture + Stage Skipping

Combine all three control mechanisms for ultimate flexibility:

```bash
# Fast static site architecture (1-2 min)
/ts-turbo landing-arch "marketing site" --build=prototype --preset=static --build-skip-stage=product

# Professional full-stack without docs (12-15 min)
/ts-turbo saas-mvp "SaaS platform" --build=mvp --preset=fullstack-js --build-skip-stage=release

# Enterprise microservices design-only (3-5 min)
/ts-turbo enterprise-arch "order management" --build=production --preset=microservice --build-skip-stage=development
```

### Combining Build Modes with Architecture Presets

You can combine any build mode with any architecture preset:

```bash
# Fast static site prototype
/ts-turbo landing-demo "marketing site prototype" --build=prototype --preset=static

# Professional full-stack MVP
/ts-turbo saas-mvp "SaaS platform" --build=mvp --preset=fullstack-js

# Enterprise microservices
/ts-turbo enterprise-system "order management" --build=production --preset=microservice
```

### Environment-Specific Builds

```bash
# Development iteration (fast, no docs)
/ts-turbo feature-test "test new payment flow" --build=prototype --build-skip-stage=release

# Architecture review (design only)
/ts-turbo arch-review "payment system" --build-skip-stage=development --build-skip-stage=release

# Staging deployment
/ts-turbo staging-app "payment system" --build=mvp

# Production release
/ts-turbo payment-system "payment processing" --build=production
```

### Team Collaboration Patterns

```bash
# Architect needs system design only
/ts-turbo system-design "user dashboard architecture" --build-skip-stage=product --build-skip-stage=development

# Designer needs quick visual prototype
/ts-turbo design-prototype "user dashboard mockup" --build=prototype --build-skip-stage=release

# Product Manager needs specs without code
/ts-turbo product-specs "dashboard with auth" --build=mvp --build-skip-stage=development

# Developer needs working MVP for user testing
/ts-turbo user-test-app "dashboard with auth" --build=mvp

# DevOps needs production-ready system
/ts-turbo production-dashboard "user dashboard" --build=production
```

---

## 🔧 Common Workflows

### Fast Architecture Exploration

```bash
# 1. Architecture design only (1-2 min)
/ts-turbo arch-explore "social media scheduler" --build-skip-stage=product --build-skip-stage=development

# 2. Review architecture decisions

# 3. Add product planning (5-8 min)
/ts-turbo product-plan "social media scheduler" --build-skip-stage=development

# 4. Build full prototype (10-15 min)
/ts-turbo scheduler-proto "social media scheduler" --build=prototype
```

### Rapid Prototyping Workflow

```bash
# 1. Quick prototype (3-5 min)
/ts-turbo idea-test "social media scheduler" --build=prototype

# 2. Test with users, get feedback

# 3. Build MVP with learnings (15-20 min)
/ts-turbo scheduler-mvp "social media scheduler with analytics" --build=mvp

# 4. Deploy and scale

# 5. Enterprise version when needed (45-60 min)
/ts-turbo scheduler-enterprise "enterprise social media platform" --build=production
```

### Client Project Workflow

```bash
# 1. Demo prototype for client approval (3-5 min)
/ts-turbo client-demo "e-commerce prototype" --build=prototype

# 2. Build production version after approval (15-20 min)
/ts-turbo client-ecommerce "e-commerce platform" --build=mvp
```

### Iterative Development Workflow (NEW)

```bash
# 1. Architecture exploration (1-2 min)
/ts-turbo payment-arch "payment integration" --build-skip-stage=product --build-skip-stage=development

# 2. Add product specs (3-5 min)
/ts-turbo payment-specs "payment system with Stripe" --build-skip-stage=development

# 3. Rapid development iteration (8-12 min)
/ts-turbo payment-dev "payment system" --build-skip-stage=release

# 4. Final version with docs (15-20 min)
/ts-turbo payment-final "payment system" --build=mvp
```

### Feature Development Workflow

```bash
# 1. Prototype new feature quickly
/ts-turbo payment-prototype "payment integration test" --build=prototype

# 2. Integrate learnings into main app
/ts-turbo main-app "add payment system" --build=mvp
```

---

## 🎯 Signal Detection Keywords

The system automatically detects build modes from your project description:

### Prototype Triggers
- **Speed**: "rapid", "quick", "fast", "immediate"
- **Purpose**: "prototype", "demo", "proof of concept", "POC", "sketch"
- **Iteration**: "test", "try", "experiment", "validate"
- **Scope**: "simple", "basic", "minimal", "lightweight"

### Production Triggers
- **Scale**: "enterprise", "large-scale", "high-volume", "production-grade"
- **Compliance**: "secure", "compliant", "audit", "SOC2", "GDPR"
- **Performance**: "optimized", "high-performance", "scalable"
- **Quality**: "mission-critical", "robust", "comprehensive"

---

## 📊 Performance Metrics

### Typical Build Times

Based on real-world usage:

| Project Type | Prototype | MVP | Production |
|--------------|-----------|-----|------------|
| **Simple Web App** | 2-3 min | 12-15 min | 35-45 min |
| **Full-Stack SaaS** | 3-4 min | 15-18 min | 45-55 min |
| **E-commerce** | 4-5 min | 18-22 min | 50-65 min |
| **Enterprise System** | 3-5 min | 20-25 min | 60-75 min |

### Agent Participation

| Build Mode | Agents Used | Skipped Work |
|------------|-------------|--------------|
| **Prototype** | 3-5 (core only) | Product planning, comprehensive testing, enterprise patterns |
| **MVP** | 7-10 (standard) | Enterprise optimization, compliance docs, advanced monitoring |
| **Production** | 12+ (all agents) | Nothing skipped - full enterprise workflow |

---

## ❓ FAQ

### Q: Can I upgrade from prototype to MVP?
**A:** Yes! Build the prototype first, then create the MVP version with the same name + "-mvp" suffix. You can copy over the core logic and database design.

### Q: What if I need something between MVP and Production?
**A:** Use MVP mode and manually add specific enterprise features you need. Production mode includes everything, which might be overkill.

### Q: Can I customize build modes?
**A:** Yes! Modify `.claude/config/builds.yaml` to adjust which agents participate and their behavior modes.

### Q: Which stages can I skip?
**A:** You can skip Product (`--build-skip-stage=product`), Development (`--build-skip-stage=development`), or Release (`--build-skip-stage=release`). Architecture cannot be skipped as it defines the tech stack.

### Q: What happens when I skip Product stage?
**A:** Architecture defines minimal MVP requirements instead of the Product team. This saves 3-5 minutes but you lose detailed user stories and business analysis.

### Q: Can I skip multiple stages?
**A:** Yes! Use multiple flags: `--build-skip-stage=product --build-skip-stage=development` for architecture-only builds (1-2 min).

### Q: Do prototypes work for client demos?
**A:** Absolutely! Prototypes are optimal for client demos - they work end-to-end but focus on functionality over polish.

### Q: Is prototype code production-ready?
**A:** No. Prototypes prioritize speed and functionality. For production use, build the MVP or Production version.

### Q: Can I mix build modes and stage skipping?
**A:** Yes! Combine them freely: `--build=prototype --build-skip-stage=product` for fast builds (1-2 min).

---

## 🚨 Troubleshooting

### Build Taking Too Long?

```bash
# Check if build mode was detected correctly
cat output/[project]/.claude/pipeline/projects/[project].md | grep "Build Configuration"

# Force prototype mode if needed
/ts-turbo [project] "[description]" --build=prototype

# Skip stages for maximum speed
/ts-turbo [project] "[description]" --build=prototype --build-skip-stage=product
```

### Not Fast Enough?
- Use **static** or **embedded** presets for maximum speed
- Skip Product stage: `--build-skip-stage=product` (save 3-5 min)
- Skip Release stage: `--build-skip-stage=release` (save 5-10 min)
- Architecture-only: `--build-skip-stage=product --build-skip-stage=development` (1-2 min)
- Check for prototype signal words in description
- Use explicit `--build=prototype` flag

### Stage Skipping Not Working?

```bash
# Check if skip flags were applied
cat output/[project]/.claude/pipeline/projects/[project].md | grep "Stage Skip Overrides"

# Valid skip flags are:
--build-skip-stage=product
--build-skip-stage=development
--build-skip-stage=release
# (Architecture cannot be skipped)
```

### Quality Too Low?
- Use `--build=mvp` for professional quality
- Don't skip Release stage if you need documentation
- Add specific requirements to description
- Consider if you actually need prototype speed

### Missing Features?
- Prototypes intentionally skip advanced features
- Skipped stages remove their deliverables
- Use MVP mode for complete feature set
- Add specific feature requests to description

---

## 🎉 Get Started

Ready to experience **up to 20x faster** project generation?

```bash
# Start with fast architecture exploration (1-2 minutes):
/ts-turbo arch-first "simple todo app" --build-skip-stage=product --build-skip-stage=development

# Try your first prototype build (3-5 minutes):
/ts-turbo my-first-prototype "simple todo app prototype" --build=prototype

# Compare with lightning-fast prototype + skip (1-2 minutes):
/ts-turbo lightning-prototype "todo app" --build=prototype --build-skip-stage=product

# Then see MVP quality (15-20 minutes):
/ts-turbo my-first-mvp "todo app with authentication" --build=mvp
```

The speed difference will be immediately obvious! 🚀

### 🎯 Quick Reference Card

| Goal | Time | Command Pattern |
|------|------|----------------|
| **Architecture Study** | 1-2 min | `--build-skip-stage=product --build-skip-stage=development` |
| **Fast Prototype** | 1-2 min | `--build=prototype --build-skip-stage=product` |
| **Standard Prototype** | 3-5 min | `--build=prototype` |
| **Fast Development** | 8-12 min | `--build-skip-stage=product` |
| **Professional Quality** | 15-20 min | `--build=mvp` |
| **Enterprise System** | 45-60 min | `--build=production` |

---

**Build Presets + Stage Skipping enable you to configure speed vs quality for exploration and prototypes, while still having access to enterprise-grade quality when you need it.**