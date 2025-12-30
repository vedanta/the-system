# The System - Mermaid Diagrams

Visual documentation for The System's organizational structure and workflows.

## Diagrams Included

| File | Description |
|------|-------------|
| `01-org-structure.mermaid` | Full organizational structure showing all 19 agents |
| `02-full-workflow.mermaid` | Complete workflow from intake to launch |
| `03-simplified-linear-flow.mermaid` | Simplified linear view of stages |
| `04-hitl-gates-flow.mermaid` | Human-in-the-loop approval gates |
| `05-stage3-build-test-cycle.mermaid` | Development build and test cycle |
| `06-stage4-deployment-flow.mermaid` | Stage 4 deployment process |
| `07-stage5-quick-deploy-flow.mermaid` | Stage 5 quick deploy to platforms |
| `08-all-19-agents.mermaid` | Overview of all 19 agents |

## How to Use

### Option 1: GitHub/GitLab
Just include the `.mermaid` files or embed in markdown:
```markdown
```mermaid
[paste diagram content here]
```
```

### Option 2: Mermaid Live Editor
1. Go to https://mermaid.live
2. Paste diagram content
3. Export as PNG/SVG

### Option 3: VS Code
Install "Mermaid Preview" extension

### Option 4: CLI
```bash
npm install -g @mermaid-js/mermaid-cli
mmdc -i diagram.mermaid -o diagram.png
```

## Stages Overview

```
Stage 1: Architecture    → 2 agents (Solution Architect, Enterprise Architect)
Stage 2: Product         → 3 agents (Product Lead, Planner, Analyst)
Stage 3: Development     → 6 agents (Principal, QA, DB, BE, FE, Integration)
Stage 4: Release         → 4 agents (Writer, Security, Release, DevOps)
Stage 5: Go Live         → 2 agents (SRE Deploy, SRE Ops)
─────────────────────────────────────
Total                    → 18 agents (+ Founder-Advisor = 19)
```

## HITL Gates

```
architecture-start  → Start Stage 1
architecture-lock   → Lock architecture, start Stage 2
green-light 🚦      → Approve for development (Stage 3)
development         → Approve for release (Stage 4)
release             → Approve release package
staging             → Approve staging deployment
production          → Approve production deployment
launch 🚀           → Final go-live approval
```

## Quick Reference

### Full IaC Path (Stage 1-4)
```
/ts-assess → /ts-architect → /ts-product → /ts-develop → /ts-docs → /ts-security → /ts-release → /ts-infra → /ts-pipeline → /ts-deploy
```

### Quick Deploy Path (Stage 5)
```
/ts-push neon → /ts-push railway → /ts-push vercel → /ts-monitor → /ts-alerts
```
