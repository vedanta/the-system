# Verify Deployment: $ARGUMENTS

Engage the DevOps Engineer to verify a deployment.

## Usage

- `/ts-verify staging` - Verify staging deployment
- `/ts-verify production` - Verify production deployment

## Process

1. Read the active project file from `.claude/pipeline/projects/`

2. Gate Check:
   - Environment must have active deployment
   - If not: "⛔ No active deployment found for [environment]"

3. Use the **devops-engineer** subagent to verify:

   **Health Checks:**
   - Backend /health endpoint
   - Frontend accessible
   - Database connectivity
   
   **Service Status:**
   - All containers/pods running
   - Correct number of replicas
   - No restart loops
   
   **Smoke Tests:**
   - Homepage loads
   - API responds
   - Authentication works
   - Key user flows work
   
   **Performance Baseline:**
   - Response times within targets
   - Error rate below threshold
   - No memory leaks

4. Verification output:
   ```markdown
   ## Deployment Verification: [ENVIRONMENT]
   
   ### Health Checks
   | Endpoint | Expected | Actual | Status |
   |----------|----------|--------|--------|
   | /health | 200 | 200 | ✅ |
   
   ### Smoke Tests
   | Test | Result |
   |------|--------|
   | Homepage | ✅ |
   | API Health | ✅ |
   | Auth Flow | ✅ |
   
   ### Performance
   | Metric | Target | Actual | Status |
   |--------|--------|--------|--------|
   | p50 latency | <100ms | 45ms | ✅ |
   
   ### Result: VERIFIED / FAILED
   ```

5. Update project file:
   - Set environment status to `VERIFIED` or `VERIFICATION_FAILED`
   - Add to Audit Log

6. On complete:

### VERIFIED (Staging)
"✅ Staging deployment VERIFIED.

All checks passed. Ready for staging approval.

Run `/ts-approve staging` to approve for production."

### VERIFIED (Production)
"✅ Production deployment VERIFIED.

All checks passed. System is live.

Run `/ts-approve launch` for final sign-off."

### FAILED
"❌ Verification FAILED for [ENVIRONMENT].

Failed checks:
- [Check 1]: [Reason]
- [Check 2]: [Reason]

Recommended actions:
1. Check logs for errors
2. Consider rollback: `/ts-rollback [environment] [version]`"
