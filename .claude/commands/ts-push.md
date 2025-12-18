# Push to Platform: $ARGUMENTS

Deploy to a managed hosting platform.

## Usage

```
/ts-push <target> [environment]
```

### Examples
```
/ts-push vercel              # Frontend to Vercel (preview)
/ts-push vercel production   # Frontend to Vercel (production)
/ts-push netlify             # Frontend to Netlify
/ts-push railway             # Backend/Full-stack to Railway
/ts-push fly                 # Backend to Fly.io
/ts-push neon                # Database on Neon
/ts-push supabase            # Database + Auth on Supabase
/ts-push railway full        # Full-stack to Railway
```

## Supported Targets

### Frontend
| Target | CLI Required | Free Tier |
|--------|--------------|-----------|
| `vercel` | vercel | ✅ |
| `netlify` | netlify | ✅ |
| `cloudflare` | wrangler | ✅ |

### Backend
| Target | CLI Required | Free Tier |
|--------|--------------|-----------|
| `railway` | railway | ✅ Limited |
| `fly` | flyctl | ✅ Limited |
| `render` | API | ✅ Limited |

### Database
| Target | Method | Free Tier |
|--------|--------|-----------|
| `neon` | API | ✅ |
| `planetscale` | pscale | ✅ |
| `supabase` | supabase | ✅ |
| `turso` | turso | ✅ |

### Full-Stack
| Target | Includes |
|--------|----------|
| `railway full` | FE + BE + DB |
| `render full` | FE + BE + DB |

## Process

1. Read the active project file from `.claude/pipeline/projects/`

2. Gate Check:
   - Code must exist in `output/[project]/`
   - Minimum: Stage 3 complete (development done)
   - Platform token must exist in `.env`

3. Parse arguments:
   - Target: vercel, netlify, railway, fly, neon, etc.
   - Environment: preview (default) or production

4. Use the **sre-deploy-engineer** subagent to:
   - Verify prerequisites
   - Check/install CLI if needed
   - Execute deployment
   - Capture deployment URL
   - Configure environment variables
   - Verify deployment health

5. Update project file:
   - Add deployment to Stage 5 section
   - Record URL and timestamp
   - Add to Audit Log

6. On complete:

### Success
"🚀 Deployed to [TARGET]!

**URL:** [deployment-url]
**Environment:** [preview/production]
**Status:** ✅ Live

Next:
- `/ts-live-status` - Check all deployments
- `/ts-domain [target] [domain]` - Add custom domain
- `/ts-monitor` - Set up monitoring"

### Failure
"❌ Deployment to [TARGET] failed.

**Error:** [error message]

**Troubleshooting:**
1. Check token: `echo $[TARGET]_TOKEN`
2. Verify CLI installed: `[cli] --version`
3. Check logs: `/ts-logs [target]`"

## Required Tokens (.env)

```bash
# Frontend
VERCEL_TOKEN=
NETLIFY_AUTH_TOKEN=
CLOUDFLARE_API_TOKEN=

# Backend
RAILWAY_TOKEN=
FLY_API_TOKEN=
RENDER_API_KEY=

# Database
NEON_API_KEY=
PLANETSCALE_TOKEN=
SUPABASE_ACCESS_TOKEN=
TURSO_TOKEN=
```
