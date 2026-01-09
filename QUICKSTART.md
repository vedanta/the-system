# The System - 5-Minute Quickstart

Get from idea to deployed application in 5 minutes.

## What is The System?

An autonomous software development framework with 19 AI agents that builds production apps from your ideas.

## Quick Install

```bash
# Clone the framework
git clone https://github.com/vedanta/the-system.git
cd the-system

# Verify installation
./scripts/verify-the-system.sh
```

## 5-Minute App Creation

### Option 1: Supervised Mode (Recommended for first time)

```bash
# Start Claude Code in framework directory
claude

# Create new project
/ts-new-project my-app
# Describe your app idea when prompted

# Quick approval workflow
/ts-approve architecture-start
/ts-assess
/ts-architect
/ts-approve architecture-lock
/ts-approve green-light

# Auto-build complete application
/ts-turbo-continue my-app
```

### Option 2: Fully Autonomous (Turbo Mode)

```bash
claude

# One command - complete app
/ts-turbo my-app "A task management app with user authentication and categories"

# ⚡ Runs all 5 stages automatically
# ⚡ Bypasses 8 HITL gates
# ⚡ Generates complete project in output/my-app/
```

## Deploy in 30 Seconds

```bash
# Deploy to managed platforms
/ts-push vercel        # Frontend to Vercel
/ts-push railway       # Backend to Railway
/ts-push neon          # Database to Neon

# Check deployment
/ts-live-status
```

## What You Get

After 5 minutes, you have:

- ✅ **Full-stack application** with chosen tech stack
- ✅ **Production-ready code** with TypeScript, tests, documentation
- ✅ **Database schema** with migrations and models
- ✅ **Authentication system** integrated and configured
- ✅ **Deployment configuration** for major platforms
- ✅ **CI/CD pipelines** ready to use
- ✅ **Comprehensive documentation** including API reference

## Technology Stacks Available

| Frontend | Backend | Database | Auth |
|----------|---------|----------|------|
| Next.js | FastAPI | PostgreSQL | Clerk |
| React | Node.js | SQLite | NextAuth |
| Vue/Nuxt | Express | DuckDB | Custom JWT |
| Svelte | Python | MongoDB | |

## Common Commands

```bash
/ts-status              # Check current project status
/ts-help               # Browse all 49 commands
/ts-turbo --help       # Autonomous mode help
/ts-push --help        # Deployment options
```

## Next Steps

- **Tutorial:** [USER-GUIDE.md](USER-GUIDE.md) - Complete framework guide
- **Commands:** [COMMAND-REFERENCE.md](COMMAND-REFERENCE.md) - All 49 commands
- **Architecture:** [docs/user/architecture.md](docs/user/architecture.md) - Technical details

## Need Help?

```bash
claude
> /ts-help                    # Interactive command browser
> /ts-help turbo              # Specific command help
> /ts-quickref                # Quick reference card
```

**Time to first deployed app: 5 minutes** ⚡
