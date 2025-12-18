# Start Architecture: $ARGUMENTS

Engage the Architecture Department to design the system.

## Process

1. Read the active project file from `.claude/pipeline/projects/`

2. Gate Check:
   - Verify "Founder approved to proceed to Architecture" is checked
   - If not: "⛔ Cannot start. Founder approval required. Run `approve architecture-start`"

3. If approved:
   - Update Architecture Department Status to `IN_PROGRESS`
   - Add to Audit Log: "Architecture started"
   
4. Use the **enterprise-architect** subagent to:
   - Read the project file and founder-advisor handoff
   - Create the full architecture
   - Document all artifacts
   - Prepare for review

5. When architect completes, prompt for review:
   "Architecture complete. Run `review architecture` for Founder-Advisor review."
