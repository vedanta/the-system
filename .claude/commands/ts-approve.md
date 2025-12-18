# Founder Approval: $ARGUMENTS

The founder is approving a gate to proceed.

## Valid Gates

### Stage 1-2 Gates
- `architecture-start` - Approve proceeding to Architecture Department
- `architecture-lock` - Lock the architecture, proceed to Product
- `green-light` - 🚦 GREEN LIGHT: Approve proceeding to Development

### Stage 3 Gates
- `development` - Approve completed development, proceed to Stage 4

### Stage 4 Gates
- `release` - Approve release package for deployment
- `staging` - Approve staging, proceed to production
- `production` - Approve production deployment
- `launch` - 🚀 Final launch approval

## Process

1. Read the active project file from `.claude/pipeline/projects/`

2. Based on $ARGUMENTS:

---

### architecture-start
- Check the box: "Founder approved to proceed to Architecture"
- Update Status to `ARCHITECTURE`
- Update Current Owner to `enterprise-architect`
- Add to Audit Log: "Founder approved → Architecture"
- Say: "✅ Approved. Run `/ts-architect` to start architecture."

---

### architecture-lock
- Check the box: "Architecture Locked"
- Update Architecture Department Status to `COMPLETE`
- Update Product Department Status to `READY`
- Add to Audit Log: "Architecture locked by founder"
- Say: "🔒 Architecture locked. Run `/ts-product` to start product definition."

---

### green-light
- **Gate Check:** Founder-Advisor must have reviewed Product
- Check the box: "🚦 GREEN LIGHT"
- Update Status to `DEVELOPMENT`
- Update Development Department Status to `READY`
- Add to Audit Log: "🚦 GREEN LIGHT - Development approved"
- Say: "🚦 GREEN LIGHT! Run `/ts-develop` to start development."

---

### development
- **Gate Check:** QA Sign-off must be APPROVED
- Check the box: "Development Approved by Founder"
- Update Status to `READY_FOR_RELEASE`
- Add to Audit Log: "Development approved → Stage 4"
- Say: "✅ Development APPROVED!

  Run `/ts-docs` to start Stage 4 (documentation first)."

---

### release
- **Gate Check:** 
  - Documentation complete
  - Security PASS or CONDITIONAL
  - Release packaged
  - Infrastructure generated
  - CI/CD pipelines generated
  - Founder-Advisor review complete
- Check the box: "Release Approved"
- Update Status to `RELEASE_APPROVED`
- Add to Audit Log: "Release approved by founder"
- Say: "✅ Release APPROVED.

  Run `/ts-deploy staging` to deploy to staging."

---

### staging
- **Gate Check:**
  - Staging deployment verified (`/ts-verify staging` passed)
- Check the box: "Staging Approved"
- Update Status to `STAGING_APPROVED`
- Add to Audit Log: "Staging approved → Production"
- Say: "✅ Staging APPROVED.

  Pre-production checklist:
  1. Run `/ts-security production` for final security check
  2. Run `/ts-deploy production` to deploy

  Ready for production deployment."

---

### production
- **Gate Check:**
  - Pre-production security check passed
  - Production deployment verified
- Check the box: "Production Approved"
- Update Status to `PRODUCTION_APPROVED`
- Add to Audit Log: "Production approved"
- Say: "✅ Production deployment APPROVED.

  Run `/ts-approve launch` for final sign-off."

---

### launch
- **Gate Check:**
  - Production verified
  - All approvals complete
- Check the box: "🚀 LAUNCHED"
- Update Status to `LAUNCHED`
- Add to Audit Log: "🚀 LAUNCHED by founder"
- Say: "🚀 CONGRATULATIONS! [PROJECT] IS LIVE!

  ╔══════════════════════════════════════════════════════════════╗
  ║                    🎉 LAUNCH COMPLETE 🎉                     ║
  ╠══════════════════════════════════════════════════════════════╣
  ║  Project: [PROJECT_NAME]                                     ║
  ║  Version: v[X.Y.Z]                                           ║
  ║  Status:  LIVE                                               ║
  ╚══════════════════════════════════════════════════════════════╝

  Production URL: [URL]
  
  Next steps:
  - Monitor dashboards
  - Watch error rates
  - Celebrate! 🎉"

---

3. Always update the Audit Log with timestamp
