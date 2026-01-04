# Turbo Mode: $ARGUMENTS

Run The System stages 1-4 autonomously without HITL gates.

## Usage

```
/ts-turbo <project-name> "<idea description>" [--build=preset] [--preset=arch] [--docs=lean|full] [--build-skip-stage=stage] [--option=value]
/ts-turbo <project-name> --idea=<file-path> [--build=preset] [--preset=arch] [--docs=lean|full] [--build-skip-stage=stage] [--option=value]
```

### Documentation Mode Flags

```bash
--docs=lean              # Force lean documentation (2-3 min, default for turbo)
--docs=full              # Force comprehensive documentation (20-30 min)
--lean                   # Shorthand for lean documentation
--full                   # Shorthand for comprehensive documentation
```

**Note:** Turbo mode defaults to lean documentation for speed unless explicitly overridden with --docs=full or --full.

### Examples

```
# Basic usage with quoted idea (auto-detected presets)
/ts-turbo todo-app "A task management app with user auth, categories, and due date reminders"

# Basic usage with idea from file
/ts-turbo todo-app --idea=./ideas/task-manager.txt
/ts-turbo blog-platform --idea=input/blog-concept.md
/ts-turbo ecommerce --idea=/path/to/ideas/store.json

# With build preset for rapid prototyping
/ts-turbo demo-app "Quick demo for tomorrow's meeting" --build=prototype
/ts-turbo demo-app --idea=ideas/demo.txt --build=prototype

# With architecture preset override
/ts-turbo blog-platform "A markdown-based blog with auth, posts, comments, and RSS feed" --build=mvp --preset=static
/ts-turbo blog-platform --idea=ideas/blog.md --build=mvp --preset=static

# Production build with technology overrides
/ts-turbo invoice-tool "Invoice generator with PDF export, client management, and payment tracking" --build=production --db=postgresql --auth=clerk
/ts-turbo invoice-tool --idea=ideas/invoicing.json --build=production --db=postgresql --auth=clerk

# Multiple flags for precise control
/ts-turbo enterprise-platform "Business platform with advanced features" --build=production --preset=microservice --runtime=python --framework=fastapi
/ts-turbo enterprise-platform --idea=ideas/enterprise.yaml --build=production --preset=microservice

# Skip specific stages for custom workflows
/ts-turbo quick-prototype "Calculator app for demo" --build-skip-stage=product
/ts-turbo quick-prototype --idea=ideas/calculator.txt --build-skip-stage=product
/ts-turbo dev-iteration --idea=ideas/feature-test.md --build-skip-stage=product --build-skip-stage=release

# Documentation mode override examples
/ts-turbo client-demo "Demo app for presentation" --docs=full  # Force comprehensive docs
/ts-turbo mvp-app "Quick MVP validation" --build=production --docs=lean  # Production build with lean docs
/ts-turbo prototype --idea=ideas/concept.txt --lean  # Shorthand for lean docs

# JSON file with embedded flags (flags in file override CLI flags)
/ts-turbo my-app --idea=ideas/app-with-flags.json
```

### Supported File Formats

- **Text files** (`.txt`): Entire content used as idea description
- **Markdown files** (`.md`): Content used as idea, supports "# Idea" section
- **JSON files** (`.json`): Must contain `"idea"` field, can include `"flags"` object that overrides CLI flags
- **YAML files** (`.yaml`, `.yml`): Structured format with `idea` and optional `flags`

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

   **If --help flag detected, show help and exit:**
   ```
   ╔══════════════════════════════════════════════════════════════════╗
   ║  📖 /ts-turbo - Autonomous Development (Stages 1-4)             ║
   ╠══════════════════════════════════════════════════════════════════╣
   ║                                                                  ║
   ║  📝 SYNTAX                                                       ║
   ║     /ts-turbo <name> "<idea>" [flags]                            ║
   ║     /ts-turbo <name> --idea=file [flags]                         ║
   ║                                                                  ║
   ║  🚩 KEY FLAGS                                                    ║
   ║     --build=prototype|mvp|production                             ║
   ║     --preset=static|fullstack-js|microservice                   ║
   ║     --docs=lean|full (lean default)                             ║
   ║     --idea=file.txt|.md|.json|.yaml                             ║
   ║                                                                  ║
   ║  ⚡ QUICK EXAMPLES                                               ║
   ║     /ts-turbo todo "task app" --build=prototype                  ║
   ║     /ts-turbo blog --idea=ideas/blog.md --build=mvp             ║
   ║     /ts-turbo app --idea=ideas/enterprise.json                   ║
   ║                                                                  ║
   ║  💡 MORE HELP: /ts-help turbo                                    ║
   ║                                                                  ║
   ╚══════════════════════════════════════════════════════════════════╝
   ```

   **Otherwise, continue with normal argument parsing:**

   - Project name: First argument
   - **Idea source (choose one):**
     - Quoted idea: Everything in quotes after project name
     - File idea: `--idea=file-path` flag
   - **Build preset flag:** `--build=prototype|mvp|production`
   - **Architecture preset flag:** `--preset=static|embedded|fullstack-js|baas|microservice`
   - **Documentation mode flags:** `--docs=lean|full`, `--lean`, `--full` (defaults to lean in turbo)
   - **Stage skip flags:** `--build-skip-stage=product|development|release|golive`
   - **Technology override flags:**
     - `--db=postgresql|mysql|sqlite` - Override database selection
     - `--auth=nextauth|clerk|supabase|none` - Override authentication system
     - `--runtime=node|python|go` - Override runtime (for CLI apps)
     - `--framework=fastapi|express|fiber` - Override framework (for CLI apps)
   - **SA Assessment flags:**
     - `--detailed` - Include comprehensive risk analysis
     - `--compare=N` - Show comparison of top N stack options
     - `--quick` - Fast assessment for turbo mode (default for turbo)

   **If --idea flag provided:**
   - Read idea from file using the Read tool
   - Support file formats:
     - `.txt`: Use entire file content as idea
     - `.md`: Use entire content, or extract "# Idea" section if present
     - `.json`: Extract `idea` field, merge any `flags` with CLI flags (file flags take precedence)
     - `.yaml/.yml`: Extract `idea` field, merge any `flags` with CLI flags (file flags take precedence)
   - If file doesn't exist or can't be read: show error and exit
   - If file contains flags, merge them with CLI flags (file flags override CLI flags)

   **Examples with flags:**
   ```
   # Quoted ideas
   /ts-turbo todo-app "task manager" --build=prototype
   /ts-turbo blog-platform "markdown blog" --build=mvp --preset=static
   /ts-turbo enterprise-app "business platform" --build=production --db=postgresql --auth=clerk
   /ts-turbo quick-demo "demo app" --build-skip-stage=product --build-skip-stage=release
   /ts-turbo cli-tool "file processor" --preset=cli-tool --runtime=python --framework=click

   # File-based ideas
   /ts-turbo todo-app --idea=ideas/task-manager.txt --build=prototype
   /ts-turbo blog-platform --idea=ideas/blog.md --build=mvp --preset=static
   /ts-turbo enterprise-app --idea=ideas/enterprise.json --build=production
   /ts-turbo my-app --idea=ideas/with-flags.json  # JSON file contains both idea and flags
   ```

2. Create project using founder-advisor:
   - Initialize project file from TEMPLATE.md
   - **Record idea in Founder Input section:**
     - If idea from file: Record file path and extracted idea content
     - If quoted idea: Record the quoted idea text
   - **Store ALL flags in "Handoff Notes for Architecture":**
     ```
     Override Flags: --build=prototype --preset=static --docs=lean --build-skip-stage=product --db=sqlite
     Idea Source: [quoted text] OR [file: path/to/file.txt]
     Turbo Mode: ACTIVE (docs=lean default)
     ```
   - Set status to TURBO_MODE
   - **Enable build preset mode** if --build flag detected (from CLI or file)

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
5. **Solution Architect**:
   - Parse project signals from idea description and CLI flags
   - Select optimal build preset (prototype/mvp/production)
   - Evaluate architecture preset options using AI success metrics
   - Apply multi-criteria scoring for Claude Code build optimization
   - Generate quantified technology recommendations
   - Lock technology stack decisions
   - Determine EA execution mode (skip/compressed/standard/full)
6. **Auto-approve**: stack-assessment ✅
7. **EA Execution Decision**:
   - **If EA Skip (prototype + static/cli)**: Skip to Stage 2 (saves 15-25 minutes)
   - **If EA Execute**: Continue with Enterprise Architect design
8. **Enterprise Architect** (Conditional):
   - Read locked technology stack from SA handoff
   - Create technology-specific system architecture
   - Design implementation-ready components using locked stack
   - Generate stack-optimized deployment strategy
   - Execute in mode determined by SA (compressed/standard/full)
9. **Auto-approve**: architecture-lock ✅

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

**DOCUMENTATION MODE ENFORCEMENT:**
- **LEAN MODE (default turbo)**: Essential files only, 2-3 min total
- **FULL MODE (--docs=full)**: Comprehensive docs, 20-30 min total

**ALL Stage 4 agents receive documentation_mode flag:**
```yaml
documentation_mode: "lean"  # or "full"
turbo_mode: true
time_target: "2-3 minutes"  # for lean mode
```

24. **Technical Writer**:
    - **LEAN MODE**: README.md + DEPLOYMENT.md only (2 min)
    - **FULL MODE**: Architecture, API, user guides (8-12 min)
25. **Security Engineer**:
    - **LEAN MODE**: Basic security status only (30 sec)
    - **FULL MODE**: Comprehensive security reports (8-12 min)
26. **Release Engineer**:
    - **LEAN MODE**: Version bump only (15 sec)
    - **FULL MODE**: Changelog, release notes, artifacts (4-6 min)
27. **DevOps Engineer**:
    - **LEAN MODE**: Basic deploy script only (1 min)
    - **FULL MODE**: Terraform, CI/CD, Docker configs (15-20 min)
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
║  AI Stack Score: [SA_SCORE]/10 ([SA_SUCCESS_RATE]% success)     ║
║                                                                  ║
║  ✅ Stage 1: Architecture     - [Complete/EA Skipped]            ║
║  ✅ Stage 2: Product          - Complete                         ║
║  ✅ Stage 3: Development      - Complete                         ║
║  ✅ Stage 4: Release          - Complete                         ║
║                                                                  ║
║  🚀 Optimizations Applied:                                       ║
║  • AI-optimized technology stack selection                      ║
║  • [EA time savings: Saved 15-25 minutes] (if EA skipped)       ║
║  • Claude Code build success optimization                       ║
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
