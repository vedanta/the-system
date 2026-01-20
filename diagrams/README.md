# The System - Mermaid Diagrams

Visual documentation for The System's organizational structure and workflows.

## Diagrams Included

| File | Description |
|------|-------------|
| `01-org-structure.mermaid` | Full organizational structure showing all 23 agents |
| `02-full-workflow.mermaid` | Complete workflow from intake to launch |
| `03-simplified-linear-flow.mermaid` | Simplified linear view of stages |
| `04-hitl-gates-flow.mermaid` | Human-in-the-loop approval gates |
| `05-stage3-build-test-cycle.mermaid` | Development build and test cycle |
| `06-stage4-deployment-flow.mermaid` | Stage 4 deployment process |
| `07-stage5-quick-deploy-flow.mermaid` | Stage 5 quick deploy to platforms |
| `08-all-23-agents.mermaid` | Overview of all 23 agents |
| `09-agent-interactions.mermaid` | Comprehensive agent-to-agent interactions |
| `10-key-agent-interactions.mermaid` | Simplified key interaction patterns |
| `11-agent-capabilities-tools.mermaid` | Detailed agent capabilities and tool access |
| `12-agent-tools-matrix.mermaid` | Agent tool access matrix and specializations |

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
Design Department        → 4 agents (UX Analyzer, API Discovery, Wireframe, Prototype)
Stage 2: Product         → 3 agents (Product Lead, Planner, Analyst)
Stage 3: Development     → 6 agents (Principal, QA, DB, BE, FE, Integration)
Stage 4: Release         → 4 agents (Writer, Security, Release, DevOps)
Stage 5: Go Live         → 2 agents (SRE Deploy, SRE Ops)
Utility                  → 1 agent (Bug Fixer)
─────────────────────────────────────
Total                    → 22 agents (+ Founder-Advisor = 23)
```

## Agent Interactions

### 🔄 Comprehensive Interactions (`09-agent-interactions.mermaid`)
Shows detailed agent-to-agent relationships:
- **Communication flows** between all 23 agents
- **Review relationships** (who reviews whose work)
- **Handoff patterns** between stages
- **Coordination mechanisms** within teams
- **Cross-stage dependencies** and feedback loops

**Use when:** Understanding complete system coordination, debugging workflow issues, or designing new agent relationships.

### ⚡ Key Interaction Patterns (`10-key-agent-interactions.mermaid`)
Simplified view highlighting critical patterns:
- **Central Coordination Hub** (Founder-Advisor)
- **6 Core Interaction Patterns** (Architecture Assessment, Product Collaboration, QA Review Cycle, Release Pipeline, Operations Coordination, Emergency Support)
- **Stage Handoffs** between departments
- **Cross-stage Coordination** loops

**Use when:** Quick understanding of how agents work together, onboarding new users, or explaining system design.

## Agent Capabilities & Tools

### 🔧 Detailed Capabilities (`11-agent-capabilities-tools.mermaid`)
Comprehensive view of what each agent can actually DO:
- **Individual capabilities** for all 23 agents
- **Tool access levels** (Read, Write, Edit, Bash, Grep, WebSearch, etc.)
- **Specialized knowledge domains** and expertise areas
- **Primary outputs** and deliverables each agent produces
- **Tools legend** showing what each tool enables

**Use when:** Understanding agent expertise, assigning tasks appropriately, debugging capability gaps, or designing new agent roles.

### 📊 Tools Access Matrix (`12-agent-tools-matrix.mermaid`)
Simplified matrix showing tool access patterns:
- **4 Access Levels**: Full Access, Core Tools, Documentation Tools, Research Tools
- **Agent groupings** by tool access patterns
- **Specialized capabilities** organized by domain (AI-powered, Technical, Build, Operations, Support)
- **Clear tool → agent mappings** for quick reference

**Use when:** Quick tool access reference, understanding agent permissions, planning tool usage, or capability planning.

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
