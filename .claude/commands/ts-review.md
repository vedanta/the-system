# Founder-Advisor Review: $ARGUMENTS

Engage the Founder-Advisor to review department output.

## Usage

- `/ts-review architecture` - Review architecture output
- `/ts-review product` - Review product output (Green Light review)
- `/ts-review development` - Review development output
- `/ts-review release` - Review release package (Stage 4)

## Process

1. Read the active project file from `.claude/pipeline/projects/`

2. Use the **founder-advisor** subagent to review the specified output

3. Based on $ARGUMENTS:

---

### architecture
- Review Enterprise Architect's output
- Verify all 6 artifacts complete
- Check ADRs documented
- Assess technical feasibility
- Provide recommendation: APPROVE / REQUEST_CHANGES

---

### product
- Review all Product Department output:
  - Product Lead: MVP, User Stories, PRD
  - Project Planner: Roadmap, Sprints
  - Business Analyst: JSA, Green Light recommendation
- Assess overall product readiness
- **Green Light Decision:** 🟢 PROCEED / 🟡 CONDITIONAL / 🔴 NO-GO

---

### development
- Review Development Department output:
  - All code complete
  - All QA gates passed
  - Integration verified
  - Principal Developer approved
  - QA signed off
- Verify handoff package ready
- Provide recommendation: APPROVE / REQUEST_CHANGES

---

### release
- Review Stage 4 Release Department output:
  - **Documentation:** Technical Writer complete
    - Architecture docs
    - Deployment guide
    - User guide
    - README
  - **Security:** Security Engineer complete
    - Security scan results
    - Compliance status
    - Any open issues
  - **Release:** Release Engineer complete
    - Version and changelog
    - Release notes
    - Artifacts packaged
  - **Infrastructure:** DevOps Engineer complete
    - Terraform modules
    - CI/CD pipelines
    - Deployment scripts

- Assess deployment readiness:
  ```markdown
  ## Founder-Advisor: Release Review
  
  ### Documentation ✅/❌
  - [ ] Technical Architecture documented
  - [ ] Deployment Guide complete
  - [ ] User Guide complete
  - [ ] README professional
  
  ### Security ✅/❌
  - [ ] Security scan: [PASS/CONDITIONAL/FAIL]
  - [ ] Critical issues: [count]
  - [ ] High issues: [count]
  - [ ] Remediation plan: [if needed]
  
  ### Release Package ✅/❌
  - [ ] Version: v[X.Y.Z]
  - [ ] Changelog complete
  - [ ] Release notes clear
  - [ ] Artifacts ready
  
  ### Infrastructure ✅/❌
  - [ ] Terraform modules complete
  - [ ] Environments configured
  - [ ] CI/CD pipelines ready
  
  ### Deployment Readiness
  
  **Overall Assessment:** [READY / NOT READY]
  
  **Recommendation:** [APPROVE / REQUEST_CHANGES]
  
  **Notes:**
  - [Any concerns or recommendations]
  ```

---

4. Update project file with review results
5. Add to Audit Log

6. On complete:

### If APPROVE
"✅ Founder-Advisor APPROVES [section].

[Summary of what was reviewed]

Ready for founder approval. Run `/ts-approve [gate]`"

### If REQUEST_CHANGES
"🔄 Founder-Advisor requests changes to [section].

Issues:
1. [Issue 1]
2. [Issue 2]

Required actions:
1. [Action 1]
2. [Action 2]

Re-run relevant commands and `/ts-review [section]` when ready."
