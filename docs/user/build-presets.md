# Build Presets - User Guide

**Speed up your development with intelligent build modes that adapt to your needs.**

---

## 🎯 What are Build Presets?

Build Presets are intelligent workflow modes that **automatically adjust the complexity and speed** of project generation based on your goals. Instead of always running the full enterprise-grade workflow, you can choose the right balance of speed vs. quality for your specific needs.

### Three Build Modes

| Mode | Target Time | Best For | Quality Level |
|------|-------------|----------|---------------|
| **🚀 Prototype** | **3-5 minutes** | Demos, rapid iteration, proof-of-concepts | Working code, minimal polish |
| **📦 MVP** | **15-20 minutes** | Production launches, client projects | Professional quality |
| **🏢 Production** | **45-60 minutes** | Enterprise applications, critical systems | Enterprise-grade, fully optimized |

---

## 🚀 Quick Start

### Method 1: Explicit Build Mode (Recommended)
```bash
# Fast prototyping (3-5 min)
/ts-turbo my-prototype "simple todo app" --build=prototype

# Professional MVP (15-20 min)
/ts-turbo my-mvp "todo app with auth" --build=mvp

# Enterprise production (45-60 min)
/ts-turbo my-enterprise "todo app" --build=production
```

### Method 2: Smart Detection
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
Build Presets deliver **up to 10x faster** project generation for prototypes:

| Build Type | Time | Agents Used | What You Get |
|------------|------|-------------|--------------|
| **Prototype** | **3-5 min** | **3-5 agents** | Working app, basic features, rapid iteration |
| **MVP** | **15-20 min** | **7-10 agents** | Production-ready, professional quality, proper testing |
| **Production** | **45-60 min** | **12+ agents** | Enterprise-grade, full compliance, comprehensive docs |

### Speed Breakdown by Stage
| Stage | Prototype | MVP | Production |
|-------|-----------|-----|------------|
| **Architecture** | Compressed (inline) | Standard | Comprehensive |
| **Product** | **SKIPPED** | Full planning | Enterprise planning |
| **Development** | Minimal testing | Standard testing | Comprehensive testing |
| **Release** | Basic docs | Professional docs | Enterprise docs |

---

## 🎨 What Each Mode Delivers

### 🚀 Prototype Mode (3-5 minutes)
**Perfect for:** Demos, rapid iteration, testing ideas, client presentations

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
│   ├── app.py              # Simple Flask/FastAPI backend
│   ├── index.html          # Basic frontend
│   └── style.css           # Minimal styling
├── docker-compose.yml      # Quick development setup
├── README.md               # "Run with docker-compose up"
└── .env.example           # Basic config
```

---

### 📦 MVP Mode (15-20 minutes)
**Perfect for:** Production launches, client deliverables, professional projects

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
│   ├── backend/           # Professional API structure
│   ├── frontend/          # Component library, routing
│   └── shared/            # Types, utilities
├── tests/                 # Comprehensive test suite
├── docs/                  # API documentation
├── docker-compose.yml     # Production-ready containers
├── .github/workflows/     # CI/CD pipelines
├── README.md              # Professional setup guide
└── deployment/            # Deployment configurations
```

---

### 🏢 Production Mode (45-60 minutes)
**Perfect for:** Enterprise systems, mission-critical applications, compliance requirements

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
├── src/                   # Microservices architecture
├── tests/                 # Full test pyramid
├── docs/                  # Complete documentation suite
├── infra/                 # Terraform infrastructure
├── k8s/                   # Kubernetes manifests
├── monitoring/            # Prometheus, Grafana configs
├── security/              # Security policies, scans
├── compliance/            # Audit trails, reports
└── deployment/            # Multi-environment configs
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
# Development iteration
/ts-turbo feature-test "test new payment flow" --build=prototype

# Staging deployment
/ts-turbo staging-app "payment system" --build=mvp

# Production release
/ts-turbo payment-system "payment processing" --build=production
```

### Team Collaboration Patterns
```bash
# Designer needs quick visual prototype
/ts-turbo design-prototype "user dashboard mockup" --build=prototype

# Developer needs working MVP for user testing
/ts-turbo user-test-app "dashboard with auth" --build=mvp

# DevOps needs production-ready system
/ts-turbo production-dashboard "user dashboard" --build=production
```

---

## 🔧 Common Workflows

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

### Q: Do prototypes work for client demos?
**A:** Absolutely! Prototypes are perfect for client demos - they work end-to-end but focus on functionality over polish.

### Q: Is prototype code production-ready?
**A:** No. Prototypes prioritize speed and functionality. For production use, build the MVP or Production version.

### Q: Can I mix build modes in one project?
**A:** Each project uses one build mode, but you can build multiple versions (prototype → MVP → production) as you evolve.

---

## 🚨 Troubleshooting

### Build Taking Too Long?
```bash
# Check if build mode was detected correctly
cat output/[project]/.claude/pipeline/projects/[project].md | grep "Build Configuration"

# Force prototype mode if needed
/ts-turbo [project] "[description]" --build=prototype
```

### Not Fast Enough?
- Use **static** or **embedded** presets for maximum speed
- Check for prototype signal words in description
- Use explicit `--build=prototype` flag

### Quality Too Low?
- Use `--build=mvp` for professional quality
- Add specific requirements to description
- Consider if you actually need prototype speed

### Missing Features?
- Prototypes intentionally skip advanced features
- Use MVP mode for complete feature set
- Add specific feature requests to description

---

## 🎉 Get Started

Ready to experience **10x faster** project generation?

```bash
# Try your first prototype build (should complete in 3-5 minutes):
/ts-turbo my-first-prototype "simple todo app prototype" --build=prototype

# Then compare with MVP quality (15-20 minutes):
/ts-turbo my-first-mvp "todo app with authentication" --build=mvp
```

The speed difference will be immediately obvious! 🚀

---

**Build Presets enable you to work at the speed of thought for prototypes, while still having access to enterprise-grade quality when you need it.**