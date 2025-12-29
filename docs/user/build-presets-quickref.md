# Build Presets + Stage Skipping - Quick Reference

## 🚀 Essential Commands

```bash
# ULTRA-FAST ARCHITECTURE (1-2 min) - Design exploration only
/ts-turbo arch-study "todo app" --build-skip-stage=product --build-skip-stage=development

# LIGHTNING PROTOTYPE (1-2 min) - Skip product planning
/ts-turbo quick-demo "todo app" --build=prototype --build-skip-stage=product

# PROTOTYPE (3-5 min) - Working code, minimal polish
/ts-turbo demo-app "todo app prototype" --build=prototype

# MVP (15-20 min) - Production ready, professional quality
/ts-turbo real-app "todo app with auth" --build=mvp

# PRODUCTION (45-60 min) - Enterprise grade, full compliance
/ts-turbo enterprise-app "todo system" --build=production
```

## ⚡ Speed Comparison

| Mode | Time | Use When | You Get |
|------|------|----------|---------|
| **🏃‍♂️ Architecture Only** | **1-2 min** | Design exploration, feasibility | System design, tech decisions |
| **⚡ Lightning Prototype** | **1-2 min** | Ultra-fast demos | Working app, no planning overhead |
| **🚀 Prototype** | **3-5 min** | Demos, rapid testing | Working app, basic features |
| **📦 MVP** | **15-20 min** | Real launches, clients | Production-ready, professional |
| **🏢 Production** | **45-60 min** | Enterprise, critical systems | Full compliance, optimization |

## 🎛️ Stage Skipping

Skip specific workflow stages for ultimate control:

| Skip Flag | Saves | Use Case |
|-----------|-------|----------|
| `--build-skip-stage=product` | 3-5 min | Skip planning, go straight to development |
| `--build-skip-stage=development` | 10-20 min | Architecture + docs only |
| `--build-skip-stage=release` | 5-10 min | Code without documentation |

## 🎯 Auto-Detection Keywords

**Prototype triggers:** "rapid", "prototype", "demo", "quick", "test", "POC"
**Production triggers:** "enterprise", "mission-critical", "compliant", "scalable"

## 🔥 Fastest Builds

```bash
# Absolute fastest - architecture only (1-2 min)
/ts-turbo arch-fast "payment system" --build-skip-stage=product --build-skip-stage=development

# Lightning prototype (1-2 min)
/ts-turbo lightning "simple app" --build=prototype --build-skip-stage=product

# Fast static site (1-3 min)
/ts-turbo landing "simple website" --build=prototype --preset=static

# Fast full-stack (3-5 min)
/ts-turbo webapp "basic app" --build=prototype --preset=fullstack-js
```

## 🎛️ All Options

```bash
/ts-turbo [name] "[description]" \
  --build=[prototype|mvp|production] \
  --preset=[preset-name] \
  --build-skip-stage=[stage-name]
```

**Build Presets:** `prototype`, `mvp`, `production`
**Architecture Presets:** `static`, `embedded`, `cli-tool`, `fullstack-js`, `baas`, `microservice`
**Skip Stages:** `product`, `development`, `release` (can use multiple times)

## 📊 What You Get

### Prototype Output
```
✅ Working code
✅ Basic Docker setup
✅ Simple README
❌ No comprehensive tests
❌ No production security
❌ No detailed docs
```

### MVP Output
```
✅ Everything from Prototype
✅ Professional UI/UX
✅ Comprehensive testing
✅ Security hardening
✅ API documentation
✅ CI/CD pipelines
```

### Production Output
```
✅ Everything from MVP
✅ Enterprise architecture
✅ Advanced monitoring
✅ Compliance documentation
✅ Multi-environment support
✅ Disaster recovery plans
```

---

## 🎉 Getting Started

```bash
# Start with ultra-fast architecture exploration (1-2 min):
/ts-turbo my-first-arch "simple app" --build-skip-stage=product --build-skip-stage=development

# Try lightning prototype (1-2 min):
/ts-turbo my-lightning "simple app" --build=prototype --build-skip-stage=product

# Then standard prototype (3-5 min):
/ts-turbo my-test "simple app prototype" --build=prototype
```

**💡 Pro Tip:** Combine `--build=prototype --build-skip-stage=product` for **20x faster** project generation!