# Create Project Plan: $ARGUMENTS

Engage the Project Planner to create roadmap and sprint plan.

## Process

1. Read the active project file from `.claude/pipeline/projects/`

2. Gate Check:
   - Verify MVP Definition exists
   - If not: "⛔ Cannot plan. MVP must be defined first. Run `product`"

3. Use the **project-planner** subagent to:
   - Create product roadmap
   - Plan MVP sprints
   - Estimate effort
   - Identify dependencies and risks

4. When complete, prompt:
   "Planning complete. Run `analyze` for business analysis."
