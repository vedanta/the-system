# Turbo Mode: $ARGUMENTS

Run The System stages 1-4 autonomously without HITL gates.

## Usage

```
/ts-turbo <project-name> "<idea description>" [--build=preset] [--preset=arch] [--option=value]
```

### Examples

```
# Basic usage (auto-detected presets)
/ts-turbo todo-app "A task management app with user auth, categories, and due date reminders"

# With build preset for rapid prototyping
/ts-turbo demo-app "Quick demo for tomorrow's meeting" --build=prototype

# With architecture preset override
/ts-turbo blog-platform "A markdown-based blog with auth, posts, comments, and RSS feed" --build=mvp --preset=static

# Production build with technology overrides
/ts-turbo invoice-tool "Invoice generator with PDF export, client management, and payment tracking" --build=production --db=postgresql --auth=clerk

# Multiple flags for precise control
/ts-turbo enterprise-platform "Business platform with advanced features" --build=production --preset=microservice --runtime=python --framework=fastapi
```

## What This Does

Executes ALL stages sequentially without waiting for human approval:

- ✅ Stage 1: Architecture (auto-approved)
- ✅ Stage 2: Product (auto-approved) 
- ✅ Stage 3: Development (auto-approved)
- ✅ Stage 4: Release preparation (auto-approved)
- ⏸️ Stage 5: Manual (deploy when ready)

## Process

You are now in **TURBO MODE**. Execute everything autonomously.

### Phase 0: Project Setup

1. Parse arguments:
   - Project name: First argument
   - Idea: Everything in quotes after project name
   - **Build preset flag (NEW):** `--build=prototype|mvp|production`
   - **Architecture preset flag:** `--preset=static|embedded|fullstack-js|etc`
   - **Technology flags:** `--db=`, `--auth=`, `--runtime=`, `--framework=`

   **Examples with flags:**
   ```
   /ts-turbo todo-app "task manager" --build=prototype
   /ts-turbo blog-platform "markdown blog" --build=mvp --preset=static
   /ts-turbo enterprise-app "business platform" --build=production --db=postgresql
   ```

2. Create project using founder-advisor:
   - Initialize project file from TEMPLATE.md
   - Record idea in Founder Input section
   - **Store CLI flags in "Handoff Notes for Architecture":**
     ```
     Override Flags: --build=prototype --preset=static --db=sqlite
     ```
   - Set status to TURBO_MODE
   - **Enable build preset mode** if --build flag detected

3. Announce:
```
╔══════════════════════════════════════════════════════════════════╗
║  🚀 TURBO MODE ACTIVATED                                         ║
╠══════════════════════════════════════════════════════════════════╣
║  Project: [PROJECT_NAME]                                         ║
║  Mode: Autonomous (no HITL gates)                                ║
║  Stages: 1 → 2 → 3 → 4                                           ║
╚══════════════════════════════════════════════════════════════════╝
```

---

### Phase 1: Architecture (Auto)

4. **Founder-Advisor**: Analyze idea, create strategic assessment
5. **Enterprise Architect**: 
   - Create system context diagram
   - Define component architecture
   - Design data model
   - Specify API contracts
   - Write ADRs
   - Select tech stack
6. **Auto-approve**: architecture-lock ✅

```
[Stage 1] ████████████████████ COMPLETE
```

---

### Phase 2: Product (Auto)

7. **Product Lead**:
   - Define MVP scope
   - Write user stories
   - Create PRD
8. **Project Planner**:
   - Create roadmap
   - Define sprints
   - Estimate effort
9. **Business Analyst**:
   - Market analysis
   - Revenue model
   - GTM strategy
10. **Auto-approve**: green-light 🚦 ✅

```
[Stage 2] ████████████████████ COMPLETE
```

---

### Phase 3: Development (Auto)

11. **Principal Developer**: Create implementation plan
12. **QA Engineer**: Create test strategy and test cases
13. **Database Developer**: 
    - Create schema
    - Build models
    - Write migrations
14. **QA Engineer**: Review database (auto-pass)
15. **Backend Developer**:
    - Create API routes
    - Build services
    - Implement auth
16. **QA Engineer**: Review backend (auto-pass)
17. **Frontend Developer**:
    - Create components
    - Build pages
    - Implement state management
18. **QA Engineer**: Review frontend (auto-pass)
19. **Integration Engineer**:
    - Connect all components
    - Create Docker setup
    - Create .gitignore, README, .env.example
    - Verify E2E flow
20. **QA Engineer**: E2E testing (auto-pass)
21. **Principal Developer**: Quality gate review
22. **QA Engineer**: Final sign-off
23. **Auto-approve**: development ✅

```
[Stage 3] ████████████████████ COMPLETE
```

---

### Phase 4: Release (Auto)

24. **Technical Writer**:
    - Architecture documentation
    - Deployment guide
    - User guide
    - API reference
    - README
25. **Security Engineer**:
    - Dependency scan
    - SAST scan
    - Secrets detection
    - Generate security report
26. **Release Engineer**:
    - Determine version
    - Generate CHANGELOG
    - Create release notes
    - Build artifacts
27. **DevOps Engineer**:
    - Generate Terraform modules
    - Generate CI/CD pipelines (GitHub Actions)
    - Create deployment scripts
28. **Auto-approve**: release ✅

```
[Stage 4] ████████████████████ COMPLETE
```

---

### Phase 5: Summary

Display final summary:

```
╔══════════════════════════════════════════════════════════════════╗
║  🎉 TURBO MODE COMPLETE                                          ║
╠══════════════════════════════════════════════════════════════════╣
║                                                                  ║
║  Project: [PROJECT_NAME]                                         ║
║  Duration: [TIME]                                                ║
║                                                                  ║
║  ✅ Stage 1: Architecture     - Complete                         ║
║  ✅ Stage 2: Product          - Complete                         ║
║  ✅ Stage 3: Development      - Complete                         ║
║  ✅ Stage 4: Release          - Complete                         ║
║                                                                  ║
╠══════════════════════════════════════════════════════════════════╣
║  OUTPUT                                                          ║
╠══════════════════════════════════════════════════════════════════╣
║                                                                  ║
║  📁 output/[project]/                                            ║
║     ├── src/                   # Application code                ║
║     │   ├── frontend/          # Next.js app                     ║
║     │   └── backend/           # FastAPI app                     ║
║     ├── docs/                  # Documentation                   ║
║     ├── infra/                 # Terraform modules               ║
║     ├── .github/workflows/     # CI/CD pipelines                 ║
║     ├── docker-compose.yml     # Local development               ║
║     ├── .gitignore                                               ║
║     ├── .env.example                                             ║
║     └── README.md                                                ║
║                                                                  ║
╠══════════════════════════════════════════════════════════════════╣
║  NEXT STEPS                                                      ║
╠══════════════════════════════════════════════════════════════════╣
║                                                                  ║
║  Option A: Quick Deploy (Stage 5)                                ║
║    /ts-push neon              # Database                         ║
║    /ts-push railway           # Backend                          ║
║    /ts-push vercel            # Frontend                         ║
║                                                                  ║
║  Option B: Run Locally                                           ║
║    cd output/[project]                                           ║
║    docker-compose up                                             ║
║                                                                  ║
║  Option C: Deploy with IaC                                       ║
║    cd output/[project]/infra                                     ║
║    terraform init && terraform apply                             ║
║                                                                  ║
╚══════════════════════════════════════════════════════════════════╝
```

---

## Important Notes

1. **No HITL Gates** - All approvals are automatic
2. **No QA Blocks** - QA reviews auto-pass (code still generated)
3. **Security Still Matters** - If security scan finds CRITICAL issues, they're logged but don't block
4. **Review Recommended** - Review output before deploying to production

## Output Location

All generated code and artifacts will be in:
```
output/[project-name]/
```

## Audit Trail

The project file still captures all agent work:
```
.claude/pipeline/projects/[project-name].md
```
