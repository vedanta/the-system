# Lean Deployment Template

**Purpose:** Essential deployment instructions for immediate go-live
**Target Time:** 45 seconds to generate
**Use Case:** Quick deployment guidance, platform-specific instructions

---

# {PROJECT_NAME} - Deployment Guide

## Quick Deploy

### {Primary_Platform} (Recommended)
```bash
{primary_deployment_command}
```

## Environment Variables

Required environment variables for deployment:
```bash
{required_env_vars_for_deployment}
```

Copy these to your deployment platform's environment settings.

## Platform Configuration

### {Platform_Name} Setup
{platform_specific_essential_settings}

### Custom Domain (Optional)
```bash
{domain_configuration_command}
```

## Database Setup
{database_deployment_instructions}

## Verification

After deployment, verify the application is running:
```bash
{health_check_command}
```

Expected response: `{expected_health_response}`

## Post-Deployment

### Test Key Features
- {key_feature_1_test}
- {key_feature_2_test}

### Monitor
Check logs and basic metrics on your deployment platform dashboard.

## Troubleshooting

**Common Deployment Issues:**

| Issue | Cause | Solution |
|-------|--------|----------|
| {common_issue_1} | {cause_1} | {solution_1} |
| {common_issue_2} | {cause_2} | {solution_2} |
| {common_issue_3} | {cause_3} | {solution_3} |

**Useful Commands:**
```bash
# Check deployment status
{status_check_command}

# View logs
{logs_command}

# Restart service
{restart_command}
```

## Rollback

If issues occur, rollback to previous version:
```bash
{rollback_command}
```

---

**Need advanced deployment options?** Run `/ts-docs --full` for comprehensive deployment guides including CI/CD, infrastructure as code, and multi-environment setups.