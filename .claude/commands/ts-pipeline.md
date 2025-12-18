# Generate CI/CD Pipeline: $ARGUMENTS

Engage the DevOps Engineer to generate CI/CD pipeline configuration.

## Process

1. Read the active project file from `.claude/pipeline/projects/`

2. Gate Check:
   - Verify Infrastructure is generated
   - If not: "⛔ Infrastructure must be generated first. Run `/ts-infra`"

3. Read configuration:
   - `.claude/config/preferences.yaml` for CI/CD platform (github-actions, gitlab-ci, etc.)

4. Use the **devops-engineer** subagent to generate:
   - CI workflow (test, lint, build, scan)
   - Deploy staging workflow (triggered on main)
   - Deploy production workflow (triggered on release)
   - Rollback workflow (manual trigger)
   - Helper scripts

5. Output location:
   ```
   output/[project]/
   ├── .github/
   │   └── workflows/
   │       ├── ci.yml
   │       ├── deploy-staging.yml
   │       ├── deploy-production.yml
   │       └── rollback.yml
   │
   └── scripts/
       ├── deploy.sh
       ├── deploy-production.sh
       ├── rollback.sh
       ├── smoke-test.sh
       └── verify-deployment.sh
   ```

6. When complete:
   - Update project file with pipeline status
   - Add to Audit Log: "DevOps Engineer: CI/CD pipelines generated"
   - Set status to `PIPELINE_READY`
   - Prompt: "🔄 CI/CD pipelines generated. Run `/ts-review release` for Founder-Advisor review."
