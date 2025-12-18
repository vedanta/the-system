# Founder Brief: $ARGUMENTS

Get a concise executive summary from your Founder-Advisor.

## Process

1. Read the active project file

2. Use the **founder-advisor** subagent to provide:
   - Current status summary
   - What's been completed
   - What's in progress
   - Key decisions made
   - Blockers or concerns
   - Recommended next action

3. Format as a brief executive update:
```
╔══════════════════════════════════════════════════════════════════╗
║  📊 FOUNDER BRIEF: [PROJECT_NAME]                                ║
╠══════════════════════════════════════════════════════════════════╣
║                                                                  ║
║  STATUS: [Current Phase]                                         ║
║  OWNER:  [Current Agent]                                         ║
║                                                                  ║
║  ✅ COMPLETED:                                                   ║
║     • [Item]                                                     ║
║     • [Item]                                                     ║
║                                                                  ║
║  🔄 IN PROGRESS:                                                 ║
║     • [Item]                                                     ║
║                                                                  ║
║  ⚠️  CONCERNS:                                                   ║
║     • [Item]                                                     ║
║                                                                  ║
║  👉 NEXT ACTION: [Recommended command]                           ║
║                                                                  ║
╚══════════════════════════════════════════════════════════════════╝
```

If $ARGUMENTS contains a question, have the advisor answer it specifically.
