# Turbo Quick: $ARGUMENTS

Minimal output version of turbo mode. Just builds, no verbose status.

## Usage

```
/ts-turbo-quick <project-name> "<idea>"
```

## Process

Same as `/ts-turbo` but with minimal output. Only show:
- Stage transitions
- Errors (if any)
- Final summary

Execute silently:

1. **Stage 1**: Architecture
   - founder-advisor: analyze
   - enterprise-architect: full design
   - → auto-approve

2. **Stage 2**: Product
   - product-lead: MVP
   - project-planner: roadmap
   - business-analyst: analysis
   - → auto-approve green-light

3. **Stage 3**: Development
   - principal-developer: plan
   - qa-engineer: test plan
   - database-developer: build
   - backend-developer: build
   - frontend-developer: build
   - integration-engineer: connect
   - → auto-approve development

4. **Stage 4**: Release
   - technical-writer: docs
   - security-engineer: scan
   - release-engineer: package
   - devops-engineer: infra + pipeline
   - → auto-approve release

## Output Format

```
🚀 TURBO QUICK: [project-name]

[Stage 1] Architecture ... ✅
[Stage 2] Product ... ✅
[Stage 3] Development ... ✅
[Stage 4] Release ... ✅

✅ Complete: output/[project-name]/

Quick deploy:
  /ts-push neon && /ts-push railway && /ts-push vercel
```
