# Configuration Guide

This directory contains configuration files that guide agents in making technology and architecture decisions.

## Files

| File | Purpose | Committed? |
|------|---------|------------|
| `preferences.yaml` | Tech stack, cloud provider, coding conventions | ✅ Yes |
| `integrations.yaml` | Third-party service configurations | ✅ Yes |
| `../../.env.example` | Secrets template | ✅ Yes |
| `../../.env` | Actual secrets | ❌ No (gitignored) |

## How Agents Use These Files

### preferences.yaml

Agents read this file to determine:
- Which cloud provider to use (AWS, GCP, Azure)
- Which frameworks to use (FastAPI, Next.js, etc.)
- Coding conventions and naming standards
- Default configurations

**Example usage in agents:**
```markdown
## Required Reading
Before generating code, read:
- `.claude/config/preferences.yaml` - Technology preferences
```

### integrations.yaml

Agents check this file to:
- See which integrations are enabled
- Get configuration for third-party services
- Know which webhooks to set up

### .env / .env.example

- `.env.example` is the template (committed to git)
- `.env` contains actual secrets (never committed)
- Agents reference environment variable names but never hardcode secrets

## Customizing for Your Project

### 1. Set Your Cloud Provider

Edit `preferences.yaml`:
```yaml
cloud:
  provider: aws  # Change to: gcp, azure
  region: us-west-2
```

### 2. Set Your Tech Stack

Edit `preferences.yaml`:
```yaml
backend:
  language: python
  framework: fastapi
  
frontend:
  framework: nextjs
  styling: tailwind
```

### 3. Enable Integrations

Edit `integrations.yaml`:
```yaml
financial:
  plaid:
    enabled: true
    environment: sandbox
```

### 4. Add Your Secrets

```bash
# Copy template
cp .env.example .env

# Edit with your values
nano .env
```

## Security Notes

1. **Never commit `.env`** - It's in `.gitignore`
2. **Rotate secrets regularly** - Especially in production
3. **Use different secrets per environment** - Dev, staging, prod
4. **Use secret managers in production** - AWS Secrets Manager, HashiCorp Vault, etc.

## Adding New Configuration

### New Preference Category

Add to `preferences.yaml`:
```yaml
my_category:
  setting1: value1
  setting2: value2
```

### New Integration

Add to `integrations.yaml`:
```yaml
my_integration:
  provider: my-provider
  enabled: false
  api_version: v1
```

### New Secret

1. Add to `.env.example` with empty value:
   ```
   MY_NEW_SECRET=
   ```

2. Add actual value to `.env`:
   ```
   MY_NEW_SECRET=actual-secret-value
   ```

3. Reference in code via environment variable:
   ```python
   import os
   my_secret = os.getenv("MY_NEW_SECRET")
   ```
