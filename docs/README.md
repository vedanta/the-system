# The System Documentation

**ASDO — Autonomous Software Development Organization**

> *An AI-powered software company in your terminal*

---

## Overview

**The System** is a comprehensive framework that simulates a complete software development organization with 18 specialized AI agents across 5 departments. It orchestrates the entire software development lifecycle from concept to production deployment and operations.

### Framework Statistics

- **Agents:** 18 specialized AI personas
- **Commands:** 44 slash commands
- **Stages:** 5 (Architecture → Product → Development → Release → Go Live)
- **HITL Gates:** 8 critical approval checkpoints
- **Platforms:** 13+ managed deployment targets

---

## Documentation Index

| Document | Description | Contents |
|----------|-------------|----------|
| **[Architecture](architecture.md)** | How The System works internally | System design, data flow, directory structure, core concepts |
| **[Agents](agents.md)** | Complete agents reference | All 18 agents by department with roles, tools, and responsibilities |
| **[Commands](commands.md)** | Complete commands reference | All 44 commands organized by stage with usage and parameters |
| **[Workflow](workflow.md)** | Stage-by-stage implementation guide | Step-by-step workflow from project inception to production |
| **[HITL Gates](hitl-gates.md)** | Human-in-the-loop approval system | All approval gates, what you're approving, and blocking conditions |
| **[Configuration](configuration.md)** | System configuration options | preferences.yaml and integrations.yaml documentation |
| **[Customization](customization.md)** | Extending The System | How to add agents, commands, and modify workflows |

---

## Quick Reference

### Core Commands
```bash
/ts-new-project my-app        # Start new project
/ts-status                    # Check current status
/ts-approve <gate>           # Approve at HITL gates
/ts-turbo my-app "idea"      # Autonomous mode (bypass gates)
```

### Workflow Overview
```
Stage 1: Architecture    → /ts-architect
Stage 2: Product         → /ts-product → /ts-plan → /ts-analyze
Stage 3: Development     → /ts-develop → /ts-build → /ts-integrate
Stage 4: Release         → /ts-docs → /ts-security → /ts-release
Stage 5: Go Live         → /ts-push → /ts-monitor → /ts-alerts
```

### Key Approval Gates
```
/ts-approve architecture-start    # Begin design
/ts-approve architecture-lock     # Lock technical decisions
/ts-approve green-light          # 🚦 Approve for development
/ts-approve development          # Code complete
/ts-approve release              # Release package ready
/ts-approve launch              # 🚀 Go live!
```

---

## Getting Started

### 1. Installation Verification
```bash
./verify-the-system.sh
```

### 2. Start Your First Project
```bash
# Launch Claude Code in The System directory
claude

# Create a new project
> /ts-new-project my-awesome-app

# Describe your idea to the Founder-Advisor
> "I want to build a task management app with AI-powered prioritization"

# Begin the workflow
> /ts-approve architecture-start
```

### 3. Follow the Workflow
The System will guide you through each stage with clear next steps and approval points.

---

## Architecture at a Glance

```
Human Founder (You)
        │
        ▼
   🎩 Founder-Advisor ──────────── Strategic oversight
        │
        ├── 📐 Architecture Dept ── System design
        ├── 📦 Product Dept      ── MVP & business analysis
        ├── 💻 Development Dept  ── Implementation & QA
        ├── 🚀 Release Dept      ── Docs, security, deployment
        └── 🌐 Operations Dept   ── Monitoring & live ops
```

### Data Flow
```
Human Input → Command → Agent(s) → Project File Update → Human Review
```

### Project Tracking
- All project state stored in `.claude/pipeline/projects/{project}.md`
- Markdown-based, human-readable, version-controlled
- Real-time status tracking and audit logs

---

## Key Features

### 🏢 **Organizational Structure**
- Clear separation of concerns across 5 departments
- Specialized agents with deep domain expertise
- Proper handoffs between stages

### 🚦 **Human-in-the-Loop Gates**
- Critical decisions require your approval
- You remain in control while agents do the work
- Review outputs before proceeding to next stage

### 📋 **Complete SDLC Coverage**
- From idea validation to production monitoring
- No gaps in the development lifecycle
- Professional-grade outputs at every stage

### 🔧 **Highly Customizable**
- Add your own agents and commands
- Modify workflows to fit your needs
- Configure tech stack preferences

### ⚡ **Autonomous Options**
- Turbo Mode for rapid prototyping
- Bypass approval gates when needed
- Full audit trail maintained

### 🚀 **Multiple Deployment Paths**
- **Stage 4:** Full Infrastructure as Code (Terraform, CI/CD)
- **Stage 5:** Quick deploy to managed platforms (Vercel, Railway, etc.)
- Choose based on your needs and timeline

---

## Philosophy

The System is built on these core principles:

1. **You are the Founder** — AI agents work for you, not the other way around
2. **Human-in-the-Loop** — Critical decisions require your approval
3. **Specialized Expertise** — Each agent has deep domain knowledge
4. **Living Documentation** — Project state is always current and accessible
5. **Flexible Workflow** — Skip stages, customize processes, add capabilities
6. **Production-Ready** — Generated code follows best practices
7. **Progressive Autonomy** — Start supervised, go autonomous when comfortable

---

## Support

- **Documentation:** You're reading it!
- **Issues:** Report at [GitHub Issues](https://github.com/anthropics/claude-code/issues)
- **Verification:** Run `./verify-the-system.sh` to check installation

---

## Framework Directories

```
the-system/
├── .claude/
│   ├── agents/           # 18 agent definitions
│   ├── commands/         # 44 command definitions
│   ├── config/           # System preferences & integrations
│   ├── knowledge/        # Architecture standards & templates
│   └── pipeline/         # Project tracking (projects/)
├── docs/                 # This documentation
├── diagrams/             # Mermaid workflow diagrams
├── output/               # Generated projects (ignored by git)
├── input/                # External references (ignored by git)
├── CLAUDE.md             # Main framework instructions
└── README.md             # Framework overview
```

---

<p align="center">
  <strong>The System</strong><br/>
  <em>ASDO — Autonomous Software Development Organization</em><br/>
  <sub>Transform ideas into production-ready software with AI agents</sub>
</p>