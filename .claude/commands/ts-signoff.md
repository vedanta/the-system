# QA Final Sign-off: $ARGUMENTS

QA Engineer provides final quality sign-off before handoff to Stage 4.

## Process

1. Read the active project file

2. Gate Check:
   - Principal Developer Gate: APPROVED
   - If not: "⛔ Principal Developer must approve first. Run `gate`"

3. Use the **qa-engineer** subagent (in sign-off mode) to:
   - Review all test results
   - Verify all bugs resolved
   - Final regression check
   - Compile quality metrics
   - Provide sign-off decision

4. QA Engineer evaluates:

   **Test Results Summary:**
   - Unit Tests: [X/Y passed]
   - Integration Tests: [X/Y passed]
   - E2E Tests: [X/Y passed]
   - Overall Coverage: [X%]

   **Bug Summary:**
   - Critical: [X] (must be 0)
   - High: [X] (must be 0)
   - Medium: [X]
   - Low: [X]

   **Quality Metrics:**
   | Metric | Target | Actual | Status |
   |--------|--------|--------|--------|
   | Test Coverage | >80% | | |
   | Critical Bugs | 0 | | |
   | High Bugs | 0 | | |

5. Decision:

### APPROVED

- Update status to `QA_SIGNOFF`
- Check "QA Final Sign-off: APPROVED"
- Add to Audit Log: "QA signed off on development"
- Prepare handoff package:
  ```
  output/[project]/
  ├── handoff/
  │   ├── deployment-specs.md
  │   ├── environment-config.md
  │   ├── release-checklist.md
  │   └── test-report.md
  ```
- Say: "✅ QA SIGNED OFF.

  Quality Summary:
  - All tests passing
  - No critical/high bugs
  - Coverage: [X%]
  
  Development complete! 
  
  Run `review development` for Founder-Advisor final review."

### NOT APPROVED

- Document blocking issues
- Route back to team
- Add to Audit Log: "QA sign-off blocked: [reason]"
- Say: "🔴 QA CANNOT SIGN OFF.

  Blocking Issues:
  1. [Issue]
  2. [Issue]
  
  Required before sign-off:
  1. [Action]
  2. [Action]
  
  Address issues and re-run `signoff`"
