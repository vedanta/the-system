# Live Environment Variables: $ARGUMENTS

Manage environment variables on deployed platforms.

## Usage

```
/ts-live-env <target>                    # List env vars
/ts-live-env <target> set KEY=value      # Set env var
/ts-live-env <target> remove KEY         # Remove env var
/ts-live-env <target> sync               # Sync from .env
```

### Examples
```
/ts-live-env vercel                      # List Vercel env vars
/ts-live-env railway set DATABASE_URL=...  # Set on Railway
/ts-live-env fly remove OLD_SECRET       # Remove from Fly
/ts-live-env railway sync                # Sync .env to Railway
```

## Process

1. Read the active project file from `.claude/pipeline/projects/`

2. Parse arguments:
   - Target: vercel, railway, fly, etc.
   - Action: list (default), set, remove, sync
   - Value: KEY=value for set

3. Use the **sre-deploy-engineer** subagent to:

### List
```bash
# Vercel
vercel env ls

# Railway
railway variables

# Fly
fly secrets list
```

### Set
```bash
# Vercel
vercel env add KEY production

# Railway
railway variables set KEY=value

# Fly
fly secrets set KEY=value
```

### Remove
```bash
# Vercel
vercel env rm KEY production

# Railway
railway variables remove KEY

# Fly
fly secrets unset KEY
```

### Sync (from .env)
```bash
# Read .env and set all variables
while IFS='=' read -r key value; do
  [platform] env set "$key=$value"
done < .env
```

4. Display result:

```
╔══════════════════════════════════════════════════════════════════╗
║           ENVIRONMENT VARIABLES: [TARGET]                        ║
╚══════════════════════════════════════════════════════════════════╝

┌────────────────────┬────────────────────────────┬───────────────┐
│ Name               │ Value                      │ Environment   │
├────────────────────┼────────────────────────────┼───────────────┤
│ DATABASE_URL       │ ••••••••••••               │ production    │
│ JWT_SECRET         │ ••••••••••••               │ production    │
│ CORS_ORIGINS       │ https://app.example.com    │ production    │
│ SENTRY_DSN         │ https://sentry.io/...      │ all           │
└────────────────────┴────────────────────────────┴───────────────┘

Total: 4 variables

Commands:
- Set: /ts-live-env [target] set KEY=value
- Remove: /ts-live-env [target] remove KEY
- Sync all: /ts-live-env [target] sync
```

## Security Note

- Secrets are masked in output (••••••••••••)
- Use `/ts-live-env [target] set` for sensitive values
- Never commit actual secrets to project file
