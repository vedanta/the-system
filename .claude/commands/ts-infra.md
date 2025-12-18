# Generate Infrastructure: $ARGUMENTS

Engage the DevOps Engineer to generate Infrastructure as Code.

## Process

1. Read the active project file from `.claude/pipeline/projects/`

2. Gate Check:
   - Verify Release is packaged
   - If not: "⛔ Release must be packaged first. Run `/ts-release`"

3. Read configuration:
   - `.claude/config/preferences.yaml` for cloud provider, IaC tool
   - `.claude/config/integrations.yaml` for services to configure

4. Use the **devops-engineer** subagent to generate:
   - Terraform configuration (or Pulumi/CloudFormation based on preferences)
   - Networking module (VPC, subnets, security groups)
   - Database module (RDS/CloudSQL/managed DB)
   - Compute module (ECS/EKS/Cloud Run)
   - Storage module (S3/GCS, ECR/GCR)
   - Monitoring module (CloudWatch/Datadog)
   - Environment-specific variables (staging, production)

5. Output location:
   ```
   output/[project]/
   └── infra/
       └── terraform/
           ├── main.tf
           ├── variables.tf
           ├── outputs.tf
           ├── providers.tf
           ├── versions.tf
           ├── environments/
           │   ├── staging.tfvars
           │   └── production.tfvars
           └── modules/
               ├── networking/
               ├── database/
               ├── compute/
               ├── storage/
               └── monitoring/
   ```

6. When complete:
   - Update project file with infrastructure status
   - Add to Audit Log: "DevOps Engineer: Infrastructure generated"
   - Set status to `INFRA_READY`
   - Prompt: "🏗️ Infrastructure code generated. Run `/ts-pipeline` to generate CI/CD."
