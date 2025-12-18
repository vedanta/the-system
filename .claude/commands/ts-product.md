# Start Product Work: $ARGUMENTS

Engage the Product Lead to define MVP scope.

## Process

1. Read the active project file from `.claude/pipeline/projects/`

2. Gate Check:
   - Verify "Architecture Locked" is checked
   - If not: "⛔ Cannot start. Architecture must be locked first."

3. If approved:
   - Update Product Department Status to `IN_PROGRESS`
   - Add to Audit Log: "Product work started"
   
4. Use the **product-lead** subagent to:
   - Read the locked architecture
   - Define MVP scope
   - Write user stories
   - Create product requirements

5. When complete, prompt:
   "MVP defined. Run `plan` for roadmap and sprint planning."
