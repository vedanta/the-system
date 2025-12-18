# Executive Summary: $ARGUMENTS

Generate an executive summary of project progress, flow, and agent contributions.

## Process

1. Read the active project file from `.claude/pipeline/projects/`
2. Parse all sections for status and completions
3. Generate formatted executive summary

## Output Format

```markdown
╔══════════════════════════════════════════════════════════════════════════════╗
║                         EXECUTIVE SUMMARY                                    ║
║                         Project: [PROJECT_NAME]                              ║
╚══════════════════════════════════════════════════════════════════════════════╝

📊 STATUS OVERVIEW
──────────────────────────────────────────────────────────────────────────────
  Current Stage:    [INTAKE | ARCHITECTURE | PRODUCT | DEVELOPMENT | RELEASE]
  Current Owner:    [Agent Name]
  Overall Progress: [██████████░░░░░░░░░░] 50%
  Last Updated:     [Timestamp from audit log]


🚦 STAGE PROGRESS
──────────────────────────────────────────────────────────────────────────────

  Stage 1: Foundation & Architecture
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ [✅ COMPLETE | 🔄 IN PROGRESS | ⏳ PENDING | ❌ BLOCKED]                 │
  │                                                                         │
  │ ☑ Founder Input captured                                               │
  │ ☑ Founder-Advisor analysis complete                                    │
  │ ☑ Architecture designed                                                │
  │ ☑ Architecture locked                                                  │
  └─────────────────────────────────────────────────────────────────────────┘

  Stage 2: Product
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ [✅ COMPLETE | 🔄 IN PROGRESS | ⏳ PENDING | ❌ BLOCKED]                 │
  │                                                                         │
  │ ☑ MVP defined                                                          │
  │ ☑ Roadmap created                                                      │
  │ ☑ Business analysis complete                                           │
  │ ☑ GREEN LIGHT approved                                                 │
  └─────────────────────────────────────────────────────────────────────────┘

  Stage 3: Development
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ [✅ COMPLETE | 🔄 IN PROGRESS | ⏳ PENDING | ❌ BLOCKED]                 │
  │                                                                         │
  │ ☑ Implementation plan                                                  │
  │ ☑ Test strategy                                                        │
  │ ☑ Database layer (QA: PASS)                                            │
  │ ☑ Backend layer (QA: PASS)                                             │
  │ ☐ Frontend layer (QA: PENDING)                                         │
  │ ☐ Integration                                                          │
  │ ☐ Quality gates                                                        │
  └─────────────────────────────────────────────────────────────────────────┘

  Stage 4: Release & Deployment
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ [⏳ PENDING]                                                            │
  │                                                                         │
  │ ☐ Release build                                                        │
  │ ☐ Deployment                                                           │
  └─────────────────────────────────────────────────────────────────────────┘


👥 AGENT CONTRIBUTIONS
──────────────────────────────────────────────────────────────────────────────

  🎩 Founder-Advisor
  ├── ✅ Refined original idea
  ├── ✅ Strategic assessment provided
  ├── ✅ Architecture review complete
  └── ✅ Product review complete

  🏗️ Enterprise Architect
  ├── ✅ System context diagram
  ├── ✅ Component diagram
  ├── ✅ Data model
  ├── ✅ API contracts
  ├── ✅ Infrastructure design
  └── ✅ Security architecture

  👔 Product Lead
  ├── ✅ Target user persona
  ├── ✅ MVP scope defined
  ├── ✅ User stories written
  └── ✅ PRD complete

  📅 Project Planner
  ├── ✅ Roadmap created
  ├── ✅ Sprint plan complete
  └── ✅ Estimates provided

  💼 Business Analyst
  ├── ✅ Market analysis
  ├── ✅ Revenue model
  ├── ✅ GTM strategy
  └── ✅ Green light recommendation: 🟢 PROCEED

  👨‍💼 Principal Developer
  ├── ✅ Implementation plan
  ├── ✅ Tasks assigned (DB: 5, BE: 8, FE: 6)
  ├── ✅ Coding standards defined
  └── ⏳ Code review gate pending

  🧪 QA Engineer
  ├── ✅ Test strategy (45 test cases)
  ├── ✅ Database review: PASS
  ├── ✅ Backend review: PASS
  ├── ⏳ Frontend review: PENDING
  └── ⏳ Final sign-off: PENDING

  🗄️ Database Developer
  ├── ✅ Schema: 5 tables
  ├── ✅ Models: 5 created
  ├── ✅ Migrations: 1 initial
  └── ✅ Tests: 12 written

  ⚙️ Backend Developer
  ├── ✅ Endpoints: 15 APIs
  ├── ✅ Services: 5 created
  └── ✅ Tests: 18 written

  🎨 Frontend Developer
  ├── 🔄 Components: 8/12
  ├── 🔄 Pages: 3/5
  └── ⏳ Tests: PENDING

  🔗 Integration Engineer
  └── ⏳ Not started


📋 AUDIT TRAIL (Recent)
──────────────────────────────────────────────────────────────────────────────

  [2024-01-15 10:30] 🎩 Founder-Advisor    → Project initiated
  [2024-01-15 11:00] 👤 Founder            → Approved architecture start
  [2024-01-15 14:00] 🏗️ Enterprise Arch    → Architecture complete
  [2024-01-15 15:00] 🎩 Founder-Advisor    → Architecture reviewed
  [2024-01-15 15:30] 👤 Founder            → Architecture locked
  [2024-01-16 09:00] 👔 Product Lead       → MVP defined
  [2024-01-16 11:00] 📅 Project Planner    → Roadmap created
  [2024-01-16 14:00] 💼 Business Analyst   → JSA complete, GREEN LIGHT
  [2024-01-16 15:00] 👤 Founder            → GREEN LIGHT approved
  [2024-01-17 09:00] 👨‍💼 Principal Dev      → Implementation plan created
  [2024-01-17 10:00] 🧪 QA Engineer        → Test strategy complete
  [2024-01-17 14:00] 🗄️ Database Dev       → Database layer complete
  [2024-01-17 15:00] 🧪 QA Engineer        → Database QA: PASS
  [2024-01-18 09:00] ⚙️ Backend Dev        → Backend layer complete
  [2024-01-18 11:00] 🧪 QA Engineer        → Backend QA: PASS
  [2024-01-18 14:00] 🎨 Frontend Dev       → In progress...


⏭️ NEXT STEPS
──────────────────────────────────────────────────────────────────────────────

  1. Complete frontend development
     └── Run: /ts-build frontend

  2. QA frontend review
     └── Run: /ts-test frontend

  3. Integration
     └── Run: /ts-integrate


⚠️ BLOCKERS & RISKS
──────────────────────────────────────────────────────────────────────────────

  • None currently


📈 METRICS
──────────────────────────────────────────────────────────────────────────────

  Time in Stage:
  ├── Foundation:   2 days
  ├── Architecture: 1 day
  ├── Product:      1 day
  └── Development:  2 days (in progress)

  Artifacts Generated:
  ├── Documents:    12
  ├── Code Files:   45
  └── Test Files:   18

  Quality:
  ├── QA Gates Passed:  2/5
  ├── Test Coverage:    78% (target: 80%)
  └── Open Issues:      0

══════════════════════════════════════════════════════════════════════════════
                         End of Executive Summary
══════════════════════════════════════════════════════════════════════════════
```

## Instructions

1. Read the project file completely
2. Parse each section for checkboxes (☑/☐), status fields, and audit log
3. Calculate progress percentages
4. Identify current stage and owner
5. Extract agent contributions from each section
6. List recent audit entries (last 15)
7. Determine next steps based on current state
8. Identify any blockers or failed gates
9. Output the formatted summary

## Progress Calculation

```
Stage 1 (25%):
- Founder input: 5%
- Advisor analysis: 5%
- Architecture: 10%
- Architecture locked: 5%

Stage 2 (25%):
- Product Lead: 8%
- Planner: 8%
- Business Analyst: 7%
- Green Light: 2%

Stage 3 (40%):
- Implementation plan: 3%
- Test strategy: 3%
- Database + QA: 6%
- Backend + QA: 8%
- Frontend + QA: 8%
- Integration + QA: 6%
- Principal gate: 3%
- QA sign-off: 3%

Stage 4 (10%):
- Release: 5%
- Deployment: 5%
```

## Agent Status Icons

- ✅ Complete
- 🔄 In Progress
- ⏳ Pending
- ❌ Blocked/Failed
- ☑ Checkbox checked
- ☐ Checkbox unchecked
