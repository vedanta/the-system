# Teardown Deployment: $ARGUMENTS

Remove a deployment from a platform.

## Usage

```
/ts-teardown <target>                    # Teardown specific target
/ts-teardown all                         # Teardown all deployments
```

### Examples
```
/ts-teardown vercel                      # Remove Vercel deployment
/ts-teardown railway                     # Remove Railway deployment
/ts-teardown neon                        # Delete Neon database
/ts-teardown all                         # Remove everything
```

## Process

1. Read the active project file from `.claude/pipeline/projects/`

2. Get deployment info for target from Stage 5 section

3. Display warning and require confirmation:

```
╔══════════════════════════════════════════════════════════════════╗
║           ⚠️  TEARDOWN WARNING: [TARGET]                         ║
╚══════════════════════════════════════════════════════════════════╝

This will PERMANENTLY DELETE:

┌─────────────────────────────────────────────────────────────────┐
│ WILL BE REMOVED                                                 │
├─────────────────────────────────────────────────────────────────┤
│ ✗ Deployment                                                    │
│ ✗ Environment variables                                         │
│ ✗ Domain associations                                           │
│ ✗ Deployment history                                            │
│ ✗ Logs                                                          │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│ WILL BE PRESERVED                                               │
├─────────────────────────────────────────────────────────────────┤
│ ✓ Local source code (output/[project]/)                         │
│ ✓ Project configuration                                         │
│ ✓ Git history                                                   │
└─────────────────────────────────────────────────────────────────┘

⚠️  FOR DATABASE TARGETS (neon, supabase, planetscale):
This will DELETE ALL DATA. This action is IRREVERSIBLE.

To confirm, type: teardown [project]-[target]
```

4. Use the **sre-deploy-engineer** subagent to execute teardown:

```bash
# Vercel
vercel remove [project] --yes --token $VERCEL_TOKEN

# Netlify
netlify sites:delete --force

# Railway
railway delete --yes

# Fly
fly apps destroy [app-name] --yes

# Neon
curl -X DELETE "https://console.neon.tech/api/v2/projects/[id]" \
  -H "Authorization: Bearer $NEON_API_KEY"

# Supabase
supabase projects delete [ref]
```

5. On complete:

```
╔══════════════════════════════════════════════════════════════════╗
║           ✅ TEARDOWN COMPLETE: [TARGET]                         ║
╚══════════════════════════════════════════════════════════════════╝

Removed:
- Deployment: [url]
- Environment variables: 4 removed
- Domains: app.example.com (unlinked)

Local code preserved: output/[project]/

To redeploy: /ts-push [target]
```

6. Update project file:
   - Remove deployment from Stage 5 section
   - Add to Audit Log: "SRE Deploy Engineer: Teardown [target]"

## Teardown All

When using `/ts-teardown all`:

```
╔══════════════════════════════════════════════════════════════════╗
║           ⚠️  TEARDOWN ALL DEPLOYMENTS                           ║
╚══════════════════════════════════════════════════════════════════╝

The following will be PERMANENTLY DELETED:

┌──────────┬────────────────────────────────┬─────────────────────┐
│ Target   │ URL                            │ Data                │
├──────────┼────────────────────────────────┼─────────────────────┤
│ vercel   │ https://app.vercel.app         │ Deployment only     │
│ railway  │ https://api.railway.app        │ Deployment only     │
│ neon     │ postgresql://...               │ ⚠️  ALL DATABASE DATA│
└──────────┴────────────────────────────────┴─────────────────────┘

⚠️  DATABASE DATA WILL BE LOST AND CANNOT BE RECOVERED

To confirm, type: teardown-all [project]
```
