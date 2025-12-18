# Start Development: $ARGUMENTS

Engage the Principal Developer to create the implementation plan.

## Process

1. Read the active project file from `.claude/pipeline/projects/`

2. Gate Check:
   - Verify "🚦 GREEN LIGHT" is checked in Product Department
   - If not: "⛔ Cannot start development. GREEN LIGHT required."

3. If approved:
   - Update Development Department Status to `PLANNING`
   - Add to Audit Log: "Development started"
   
4. Use the **principal-developer** subagent to:
   - Analyze architecture and product specs
   - Create implementation plan
   - Assign tasks to DB, Backend, Frontend developers
   - Define coding standards

5. Create output directory structure:
   ```
   output/[project-name]/
   ├── docs/
   ├── src/
   │   ├── database/
   │   ├── backend/
   │   └── frontend/
   └── tests/
   ```

6. When complete, prompt:
   "📋 Implementation plan ready. Run `test-plan` for QA test strategy."
