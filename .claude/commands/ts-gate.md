# Principal Developer Gate: $ARGUMENTS

Principal Developer reviews all integrated code before release.

## Process

1. Read the active project file

2. Gate Check:
   - Integration QA Review: PASS
   - If not: "⛔ Integration must pass QA first. Run `test integration`"

3. Use the **principal-developer** subagent (in gate review mode) to:
   - Review all generated code
   - Check architecture compliance
   - Verify coding standards followed
   - Assess code quality
   - Review test coverage
   - Check security considerations

4. Principal Developer evaluates:

   **Architecture Compliance:**
   - [ ] Follows system architecture
   - [ ] Proper separation of concerns
   - [ ] No architectural violations

   **Code Quality:**
   - [ ] Follows coding standards
   - [ ] Clean, readable code
   - [ ] No code smells
   - [ ] Proper error handling

   **Testing:**
   - [ ] Adequate test coverage
   - [ ] All tests pass
   - [ ] Edge cases covered

   **Security:**
   - [ ] No security vulnerabilities
   - [ ] Proper input validation
   - [ ] Authentication/authorization correct

5. Decision:

### APPROVED

- Update status to `GATE_PASSED`
- Check "Principal Developer Gate: APPROVED"
- Add to Audit Log: "Principal Developer approved code"
- Say: "✅ Principal Developer APPROVED.

  Code quality standards met. Architecture compliance verified.
  
  Run `signoff` for QA final sign-off."

### FEEDBACK

- Document specific issues found
- Route back to relevant developer
- Add to Audit Log: "Principal Developer feedback: [summary]"
- Say: "🔄 Principal Developer FEEDBACK.

  Issues found:
  1. [Issue] → [Developer to fix]
  2. [Issue] → [Developer to fix]
  
  Developers must address feedback, then run:
  - `build [component]` to revise
  - `test [component]` for re-review
  - `integrate` to re-integrate
  - `test integration` for QA
  - `gate` to re-submit for gate review"
