# New Project: $ARGUMENTS

Initialize a new project and start the intake process with Founder-Advisor.

## Steps

1. Copy `.claude/pipeline/projects/TEMPLATE.md` to `.claude/pipeline/projects/$ARGUMENTS.md`
2. Replace `[PROJECT_NAME]` with "$ARGUMENTS"
3. Replace `[TIMESTAMP]` with current date/time
4. Set Status to `INTAKE`
5. Set Current Owner to `founder-advisor`

6. Confirm: "✅ Project '$ARGUMENTS' initialized."

7. Immediately use the **founder-advisor** subagent with this context:
   "New project intake for '$ARGUMENTS'. Ask the founder about their idea."

The founder-advisor will then engage with the human to understand their idea.
