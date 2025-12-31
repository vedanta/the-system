# Quick Reference: $ARGUMENTS

Show a compact quick reference of all The System commands.

## Usage

```
/ts-quickref                # Full quick reference
/ts-quickref --compact      # Ultra-compact one-liner format
/ts-quickref --stage <stage> # Quick ref for specific stage
```

## Process

### Default Quick Reference

Show organized quick reference with all commands:

```
┌─────────────────────────────────────────────────────────────────┐
│                    THE SYSTEM - QUICK REFERENCE                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│ 🏗️  START         /ts-new-project <name> [--idea=file]          │
│                                                                 │
│ 📐  ARCHITECTURE  /ts-assess | /ts-architect                    │
│                   /ts-approve architecture-lock                 │
│                                                                 │
│ 📦  PRODUCT       /ts-product → /ts-plan → /ts-analyze          │
│                   /ts-approve green-light 🚦                   │
│                                                                 │
│ 💻  DEVELOPMENT   /ts-build database|backend|frontend           │
│                   /ts-integrate → /ts-signoff                   │
│                   /ts-approve development                       │
│                                                                 │
│ 🚀  RELEASE       /ts-docs → /ts-security → /ts-release         │
│                   /ts-infra → /ts-pipeline → /ts-deploy         │
│                   /ts-approve launch 🚀                         │
│                                                                 │
│ 🌐  QUICK DEPLOY  /ts-push vercel|railway|neon                  │
│                   /ts-monitor → /ts-alerts                      │
│                                                                 │
│ ⚡  TURBO MODES   /ts-turbo <name> "<idea>" --build=prototype   │
│                   /ts-turbo <name> --idea=file --build=mvp     │
│                   /ts-turbo-quick <name> --idea=file           │
│                                                                 │
│ 🔧  UTILITIES     /ts-fix | /ts-validate | /ts-status | /ts-ask │
│                                                                 │
│ 🆘  HELP          /ts-help | /ts-help <cmd> | <cmd> --help      │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Compact Mode (`/ts-quickref --compact`)

Ultra-compact one-liner format:

```
THE SYSTEM QUICK REF: /ts-new-project <name> | /ts-turbo <name> "<idea>" | /ts-architect | /ts-product /ts-plan /ts-analyze | /ts-build db|be|fe | /ts-integrate | /ts-docs /ts-security /ts-release | /ts-deploy <env> | /ts-push <target> | /ts-help <cmd>
```

### Stage-Specific Quick Reference

When called with `--stage` flag, show commands relevant to that stage:

#### `/ts-quickref --stage architecture`

```
📐 ARCHITECTURE STAGE QUICK REF

🔍  /ts-assess          Stack assessment & selection
🏗️  /ts-architect       Enterprise system design
✅  /ts-approve architecture-lock

TYPICAL FLOW: /ts-assess → /ts-architect → /ts-approve architecture-lock
```

#### `/ts-quickref --stage product`

```
📦 PRODUCT STAGE QUICK REF

👔  /ts-product         MVP definition & user stories
📅  /ts-plan            Project roadmap & sprints
💼  /ts-analyze         Business analysis (JSA)
✅  /ts-approve green-light

TYPICAL FLOW: /ts-product → /ts-plan → /ts-analyze → /ts-approve green-light
```

#### `/ts-quickref --stage development`

```
💻 DEVELOPMENT STAGE QUICK REF

🎯  /ts-develop         Implementation plan
🧪  /ts-test-plan       Test strategy
🗄️  /ts-build database   Schema, models, migrations
⚙️  /ts-build backend    APIs, services
🎨  /ts-build frontend   Components, pages
🔗  /ts-integrate       Connect components
🚪  /ts-gate            Quality gate
📝  /ts-signoff         QA approval
✅  /ts-approve development

TYPICAL FLOW: /ts-develop → /ts-test-plan →
/ts-build database → /ts-build backend → /ts-build frontend →
/ts-integrate → /ts-gate → /ts-signoff → /ts-approve development
```

#### `/ts-quickref --stage release`

```
🚀 RELEASE STAGE QUICK REF

📚  /ts-docs           Documentation
🔐  /ts-security       Security scans
📦  /ts-release        Release package
🏗️  /ts-infra          Infrastructure (Terraform)
🔄  /ts-pipeline       CI/CD workflows
🚀  /ts-deploy <env>   Deploy to environment
✅  /ts-verify <env>   Verify deployment
🔄  /ts-rollback <env> Rollback if needed
✅  /ts-approve launch

TYPICAL FLOW: /ts-docs → /ts-security → /ts-release →
/ts-infra → /ts-pipeline → /ts-deploy staging → /ts-verify staging →
/ts-deploy production → /ts-verify production → /ts-approve launch
```

#### `/ts-quickref --stage golive`

```
🌐 GO LIVE STAGE QUICK REF

🚀  /ts-push <target>   Deploy to managed platforms
    vercel             Frontend to Vercel
    railway            Backend to Railway
    neon               Database to Neon
📊  /ts-live-status    Check all deployments
🌐  /ts-domain <url>   Configure custom domain
📈  /ts-monitor        Set up monitoring
🚨  /ts-alerts         Configure alerting
📋  /ts-logs           View application logs
❤️  /ts-health         Health check services
📄  /ts-status-page    Public status page
🚨  /ts-incident       Incident management
📊  /ts-slo            SLO tracking

QUICK DEPLOY: /ts-push vercel && /ts-push railway && /ts-push neon
```

### Invalid Stage Handling

If invalid stage provided:

```
❌ Invalid stage 'xyz'. Valid stages: architecture, product, development, release, golive
💡 Try: /ts-quickref --stage development
💡 Or: /ts-quickref for full reference
```

### Command Categories for Quick Lookup

Also support quick category lookups:

```
/ts-quickref --turbo         # Turbo mode commands only
/ts-quickref --deploy        # Deployment commands only
/ts-quickref --utilities     # Utility commands only
```

#### `/ts-quickref --turbo`

```
⚡ TURBO MODE QUICK REF

🚀  /ts-turbo <name> "<idea>" [flags]
    --build=prototype|mvp|production
    --preset=static|fullstack-js|microservice
    --idea=file.txt|.md|.json|.yaml

🏃  /ts-turbo-quick <name> --idea=file

EXAMPLES:
/ts-turbo todo "task app with auth" --build=prototype
/ts-turbo blog --idea=ideas/blog.md --build=mvp
/ts-turbo enterprise --idea=ideas/complex.json --build=production
```

#### `/ts-quickref --deploy`

```
🚀 DEPLOYMENT QUICK REF

🏗️  /ts-deploy <env>       Deploy with Infrastructure as Code
🚀  /ts-push <target>      Deploy to managed platforms
✅  /ts-verify <env>       Verify deployment
🔄  /ts-rollback <env>     Rollback deployment
🌐  /ts-domain <domain>    Configure custom domain
💾  /ts-teardown <target>  Remove deployment

QUICK STACK: /ts-push neon && /ts-push railway && /ts-push vercel
```

#### `/ts-quickref --utilities`

```
🔧 UTILITIES QUICK REF

🐛  /ts-fix [type]         Auto-fix build errors
✅  /ts-validate [layer]   Build verification
📊  /ts-status            Project status
💬  /ts-ask "<question>"  Ask Founder-Advisor
📋  /ts-brief             Executive summary
📄  /ts-view [section]    View project sections
🆘  /ts-help [command]    Help system
📚  /ts-self-document     Generate documentation
```

## Error Handling

- **Invalid flag**: Show available flags and examples
- **Invalid stage**: List valid stages (architecture, product, development, release, golive)
- **Invalid category**: List valid categories (turbo, deploy, utilities)

## Integration with Status Command

The quick reference can be enhanced with project status context:

```
📊 CURRENT PROJECT: my-awesome-app
📍 STAGE: Development (in progress)
👤 OWNER: backend-developer

💡 SUGGESTED NEXT COMMANDS:
/ts-test backend          # Test current backend work
/ts-build frontend        # Move to frontend development
/ts-help build            # Get help with build command
```