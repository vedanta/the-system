# Build Presets - Quick Reference

## 🚀 Three Commands You Need

```bash
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
| **🚀 Prototype** | **3-5 min** | Demos, rapid testing | Working app, basic features |
| **📦 MVP** | **15-20 min** | Real launches, clients | Production-ready, professional |
| **🏢 Production** | **45-60 min** | Enterprise, critical systems | Full compliance, optimization |

## 🎯 Auto-Detection Keywords

**Prototype triggers:** "rapid", "prototype", "demo", "quick", "test", "POC"
**Production triggers:** "enterprise", "mission-critical", "compliant", "scalable"

## 🔥 Fastest Builds

```bash
# Absolute fastest (1-3 min)
/ts-turbo landing "simple website" --build=prototype --preset=static

# Fast full-stack (3-5 min)
/ts-turbo webapp "basic app" --build=prototype --preset=fullstack-js
```

## 🎛️ All Options

```bash
/ts-turbo [name] "[description]" --build=[prototype|mvp|production] --preset=[preset-name]
```

**Presets:** `static`, `embedded`, `cli-tool`, `fullstack-js`, `baas`, `microservice`

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

**🎉 Start here:** `/ts-turbo my-test "simple app prototype" --build=prototype`