# Project Status

Show the current status of the active project.

## Process

1. Find the active project in `.claude/pipeline/projects/` (most recently modified .md file that isn't TEMPLATE.md)

2. Read the project file

3. Display status summary:
```
╔══════════════════════════════════════════════════════════════════╗
║  📊 PROJECT STATUS: [PROJECT_NAME]                               ║
╠══════════════════════════════════════════════════════════════════╣
║                                                                  ║
║  Overall Status: [STATUS]                                        ║
║  Current Owner:  [OWNER]                                         ║
║                                                                  ║
╠══════════════════════════════════════════════════════════════════╣
║  DEPARTMENTS                                                     ║
║                                                                  ║
║  🎩 Founder-Advisor    [Status] [Approvals]                      ║
║  📐 Architecture       [Status] [Artifacts X/6] [Approvals]      ║
║  📦 Product            [Status] [Approvals]                      ║
║  💻 Development        [Status] [Approvals]                      ║
║                                                                  ║
╠══════════════════════════════════════════════════════════════════╣
║  NEXT ACTION: [Recommended command]                              ║
╚══════════════════════════════════════════════════════════════════╝
```

4. Recommend next action based on current state
