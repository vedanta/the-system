# Rollback Deployment: $ARGUMENTS

Engage the DevOps Engineer to rollback a deployment.

## Usage

- `/ts-rollback staging [version]` - Rollback staging to specific version
- `/ts-rollback production [version]` - Rollback production to specific version
- `/ts-rollback staging` - Rollback staging to previous version
- `/ts-rollback production` - Rollback production to previous version

## Process

1. Read the active project file from `.claude/pipeline/projects/`

2. Parse arguments:
   - Environment: staging or production
   - Version: specific version or "previous"

3. Gate Check:
   - Active deployment must exist
   - Target version must be available
   - If not: "⛔ Cannot rollback: [reason]"

4. Use the **devops-engineer** subagent to:

   **Pre-Rollback:**
   - Identify current version
   - Identify target version
   - Verify target version artifacts exist
   - Confirm rollback plan
   
   **Rollback Execution:**
   - Stop current deployment
   - Deploy target version
   - Rollback database migrations (if needed)
   - Update load balancer
   
   **Post-Rollback:**
   - Health checks
   - Smoke tests
   - Verify functionality

5. Rollback output:
   ```markdown
   ## Rollback: [ENVIRONMENT]
   
   ### Versions
   | | Version |
   |---|---------|
   | From | v1.0.1 |
   | To | v1.0.0 |
   
   ### Steps Executed
   - [x] Services rolled back
   - [x] Database rolled back
   - [x] Health checks passed
   - [x] Smoke tests passed
   
   ### Result: SUCCESS / FAILED
   ```

6. Update project file:
   - Record rollback in history
   - Update current deployed version
   - Add to Audit Log

7. On complete:

### SUCCESS
"⏪ Rollback complete for [ENVIRONMENT].

Rolled back: v[FROM] → v[TO]
Status: SUCCESS

Run `/ts-verify [environment]` to verify rollback."

### FAILED
"❌ Rollback FAILED for [ENVIRONMENT].

Error: [error description]

Current state: [describe state]

Recommended actions:
1. Check logs
2. Manual intervention may be required
3. Contact team lead"
