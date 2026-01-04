# Help: $ARGUMENTS

Interactive help system for The System commands.

## Usage

```
/ts-help                    # Show categorized command browser
/ts-help <command>          # Quick help for specific command
/ts-help --commands         # Flat list of all commands
/ts-help --stage <stage>    # Commands for specific stage
/ts-help --search <term>    # Search commands by keyword
```

### Examples

```
/ts-help                    # Browse all commands by category
/ts-help turbo              # Quick help for /ts-turbo
/ts-help --stage development # Development stage commands
/ts-help --search deploy    # Find deployment-related commands
/ts-help --commands         # Simple list of all commands
```

## Process

### 1. Parse Arguments

- **No arguments**: Show interactive command browser
- **Command name**: Show detailed help for specific command
- **--commands**: Show flat list of all commands with one-line descriptions
- **--stage <stage>**: Show commands relevant to specific stage
- **--search <term>**: Search command names and descriptions

### 2. Command Categories

Group commands by purpose for easy discovery:

```
📊 PROJECT MANAGEMENT (8)
├── ts-new-project      # Start new project
├── ts-status          # Check project status
├── ts-view            # View project sections
├── ts-brief           # Executive summary
├── ts-ask             # Ask Founder-Advisor
├── ts-exec-summary    # Full summary
├── ts-approve         # HITL gate approvals
└── ts-review          # Stage reviews

📐 ARCHITECTURE (1)
├── ts-architect       # Enterprise architect design

📦 PRODUCT (3)
├── ts-product         # Product Lead - MVP definition
├── ts-plan            # Project Planner - roadmap
└── ts-analyze         # Business Analyst - JSA

💻 DEVELOPMENT (7)
├── ts-develop         # Principal Developer - plan
├── ts-test-plan       # QA Engineer - test strategy
├── ts-build           # Development team - build layers
├── ts-test            # QA Engineer - test layers
├── ts-integrate       # Integration Engineer
├── ts-gate            # Principal Developer - quality gate
└── ts-signoff         # QA Engineer - final approval

🚀 RELEASE & DEPLOYMENT (8)
├── ts-docs            # Technical Writer
├── ts-security        # Security Engineer
├── ts-release         # Release Engineer
├── ts-infra           # DevOps - Terraform
├── ts-pipeline        # DevOps - CI/CD
├── ts-deploy          # DevOps - deploy to env
├── ts-verify          # DevOps - verify deployment
└── ts-rollback        # DevOps - rollback

🌐 GO LIVE & OPERATIONS (12)
├── ts-push            # SRE Deploy - managed platforms
├── ts-live-status     # SRE Deploy - check deployments
├── ts-live-env        # SRE Deploy - env variables
├── ts-domain          # SRE Deploy - custom domains
├── ts-teardown        # SRE Deploy - remove deployment
├── ts-monitor         # SRE Ops - monitoring stack
├── ts-alerts          # SRE Ops - alerting
├── ts-logs            # SRE Ops - view logs
├── ts-health          # SRE Ops - health checks
├── ts-status-page     # SRE Ops - public status
├── ts-incident        # SRE Ops - incident management
└── ts-slo             # SRE Ops - SLO tracking

🔧 UTILITIES (5)
├── ts-fix             # Bug Fixer - systematic fixes
├── ts-validate        # QA Engineer - build verification
├── ts-turbo           # System - autonomous Stages 1-4
├── ts-turbo-quick     # System - silent turbo mode
└── ts-self-document   # System - generate docs

🆘 HELP & REFERENCE (2)
├── ts-help            # This help system
└── ts-user-docs-update # Update user documentation
```

### 3. Interactive Command Browser

**Default behavior** (`/ts-help` with no arguments):

```
╔══════════════════════════════════════════════════════════════════╗
║  🆘 THE SYSTEM - COMMAND HELP                                    ║
╠══════════════════════════════════════════════════════════════════╣
║                                                                  ║
║  📊 PROJECT MANAGEMENT (8 commands)                              ║
║     /ts-new-project     Start new project                       ║
║     /ts-status         Check project status                     ║
║     /ts-brief          Executive summary                        ║
║     /ts-ask           Ask Founder-Advisor                       ║
║     ... and 4 more                                              ║
║                                                                  ║
║  💻 DEVELOPMENT (7 commands)                                     ║
║     /ts-build          Build database/backend/frontend          ║
║     /ts-test          Test specific layer                       ║
║     /ts-integrate     Connect all components                    ║
║     ... and 4 more                                              ║
║                                                                  ║
║  ⚡ QUICK START                                                   ║
║     /ts-turbo <name> "<idea>"        # Autonomous build         ║
║     /ts-new-project <name>           # Interactive start        ║
║     /ts-status                       # Check where you are     ║
║                                                                  ║
║  💡 TIPS                                                         ║
║     /ts-help <command>               # Detailed command help    ║
║     /ts-help --stage development     # Stage-specific commands  ║
║     /ts-help --search deploy         # Search commands         ║
║     <any-command> --help             # Quick usage              ║
║                                                                  ║
╚══════════════════════════════════════════════════════════════════╝
```

### 4. Command-Specific Help

When called with a command name (`/ts-help turbo`):

```
╔══════════════════════════════════════════════════════════════════╗
║  📖 COMMAND: /ts-turbo                                           ║
╠══════════════════════════════════════════════════════════════════╣
║                                                                  ║
║  🎯 PURPOSE                                                      ║
║     Run Stages 1-4 autonomously without HITL gates              ║
║                                                                  ║
║  📝 SYNTAX                                                       ║
║     /ts-turbo <name> "<idea>" [flags]                            ║
║     /ts-turbo <name> --idea=file [flags]                        ║
║                                                                  ║
║  🚩 FLAGS                                                        ║
║     --build=prototype|mvp|production                             ║
║     --preset=static|fullstack-js|microservice|etc               ║
║     --idea=file.txt                                              ║
║                                                                  ║
║  📋 EXAMPLES                                                     ║
║     /ts-turbo todo "task app with auth" --build=prototype       ║
║     /ts-turbo blog --idea=ideas/blog.md --build=mvp             ║
║     /ts-turbo enterprise "CRM system" --build=production        ║
║                                                                  ║
║  🔗 RELATED COMMANDS                                             ║
║     /ts-turbo-quick    Silent version                           ║
║     /ts-new-project    Interactive alternative                  ║
║                                                                  ║
╚══════════════════════════════════════════════════════════════════╝
```

### 5. Stage-Specific Help

When called with stage filter (`/ts-help --stage development`):

```
💻 DEVELOPMENT STAGE COMMANDS

🏗️  /ts-develop        Create implementation plan
🧪  /ts-test-plan      Define test strategy
📊  /ts-build <layer>  Build database|backend|frontend
✅  /ts-test <layer>   Test specific layer
🔗  /ts-integrate      Connect all components
🚪  /ts-gate           Principal Developer quality gate
📝  /ts-signoff        Final QA approval

💡 TYPICAL DEVELOPMENT FLOW:
   /ts-develop → /ts-test-plan →
   /ts-build database → /ts-test database →
   /ts-build backend → /ts-test backend →
   /ts-build frontend → /ts-test frontend →
   /ts-integrate → /ts-test integration →
   /ts-gate → /ts-signoff →
   /ts-approve development
```

### 6. Search Functionality

When called with search (`/ts-help --search deploy`):

```
🔍 SEARCH RESULTS: "deploy"

📦  /ts-deploy          Deploy to environment
🚀  /ts-push            Quick deploy to managed platforms
📋  /ts-verify          Verify deployment
🔄  /ts-rollback        Rollback deployment
🌐  /ts-live-status     Check deployment status
💾  /ts-teardown        Remove deployment

💡 QUICK DEPLOY OPTIONS:
   /ts-push vercel      # Frontend to Vercel
   /ts-push railway     # Backend to Railway
   /ts-push neon        # Database to Neon
```

### 7. Flat Command List

When called with (`/ts-help --commands`):

```
THE SYSTEM - ALL COMMANDS (46)

ts-alerts           Configure alerting
ts-analyze          Business analysis (JSA)
ts-approve          HITL gate approvals
ts-architect        Enterprise architect design
ts-ask              Ask Founder-Advisor
ts-brief            Executive summary
ts-build            Build database/backend/frontend
...
[continues with all 48 commands and descriptions]
```

### 8. Error Handling

- **Invalid command**: "❌ Command 'xyz' not found. Try /ts-help --search xyz"
- **Invalid stage**: "❌ Stage 'xyz' not valid. Use: architecture, product, development, release, golive"
- **Empty search**: "💡 Try: /ts-help --search <keyword>"

### 9. Integration with Existing Commands

Add help hints to error messages in existing commands:

```
❌ /ts-build invalid-layer
💡 Usage: /ts-build <database|backend|frontend>
💡 Try: /ts-help build for detailed examples
```

### 10. Context-Aware Next Steps

Based on project status, suggest relevant commands:

```
✅ Architecture stage complete
💡 Next: /ts-product (define MVP) or /ts-approve architecture-lock
💡 Quick start: /ts-help --stage product
```