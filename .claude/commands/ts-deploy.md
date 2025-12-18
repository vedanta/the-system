# Deploy: $ARGUMENTS

Engage the DevOps Engineer to deploy to an environment.

## Usage

- `/ts-deploy staging` - Deploy to staging environment
- `/ts-deploy production` - Deploy to production environment

## Process

1. Read the active project file from `.claude/pipeline/projects/`

2. Gate Check based on environment:

### Staging
- Release must be approved (`/ts-approve release`)
- If not: "⛔ Release must be approved. Run `/ts-approve release`"

### Production
- Staging must be verified (`/ts-verify staging` passed)
- Security pre-prod check passed (`/ts-security production`)
- Staging approval received (`/ts-approve staging`)
- If not: "⛔ Staging must be verified and approved first"

3. Use the **devops-engineer** subagent to:
   - Verify pre-deployment checklist
   - Provision infrastructure (if not exists)
   - Run database migrations
   - Deploy services (blue/green for production)
   - Execute health checks
   - Verify deployment

4. Deployment steps:
   ```
   Pre-Deployment:
   ├── Verify release artifacts
   ├── Check infrastructure status
   ├── Backup database (production)
   └── Prepare rollback plan
   
   Deployment:
   ├── Pull images
   ├── Run migrations
   ├── Deploy backend
   ├── Deploy frontend
   └── Update load balancer
   
   Post-Deployment:
   ├── Health checks
   ├── Smoke tests
   └── Monitor logs
   ```

5. Update project file:
   - Set environment status to `DEPLOYING` → `DEPLOYED` or `FAILED`
   - Add to Audit Log

6. On complete:

### Success
"🚀 Deployment to [ENVIRONMENT] complete.

Version: v[X.Y.Z]
Status: SUCCESS

Run `/ts-verify [environment]` to verify deployment."

### Failure
"❌ Deployment to [ENVIRONMENT] failed.

Error: [error description]

Recommended action:
- Check logs
- Run `/ts-rollback [environment] [previous-version]`"
