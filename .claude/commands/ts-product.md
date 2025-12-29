# Start Product Work: $ARGUMENTS

Engage the Product Lead to define MVP scope.

## Process

1. Read the active project file from `.claude/pipeline/projects/`

2. Stage Skip Check (NEW):
   - Read project file Build Configuration section
   - Check if Product stage mode is set to 'skip'
   - If Product stage = skip:
     - Update Product Department Status to `SKIPPED`
     - Add to Audit Log: "Product stage skipped per CLI override (--build-skip-stage=product)"
     - Display: "⏭️ Product stage skipped. Proceeding to Development stage."
     - STOP execution (do not run product-lead agent)

3. Gate Check:
   - Verify "Architecture Locked" is checked
   - If not: "⛔ Cannot start. Architecture must be locked first."

4. If approved:
   - Update Product Department Status to `IN_PROGRESS`
   - Add to Audit Log: "Product work started"

5. Use the **product-lead** subagent to:
   - Read the locked architecture
   - Define MVP scope
   - Write user stories
   - Create product requirements

6. When complete, prompt:
   "MVP defined. Run `plan` for roadmap and sprint planning."
