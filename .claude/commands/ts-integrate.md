# Integrate Components: $ARGUMENTS

Engage Integration Engineer to connect all components.

## Process

1. Read the active project file

2. Gate Check - ALL must be true:
   - Database QA Review: PASS ✓
   - Backend QA Review: PASS ✓
   - Frontend QA Review: PASS ✓
   
   If any failed: "⛔ All components must pass QA before integration.
   
   Status:
   - Database QA: [PASS/FAIL/PENDING]
   - Backend QA: [PASS/FAIL/PENDING]
   - Frontend QA: [PASS/FAIL/PENDING]
   
   Run `test [component]` for failed/pending components."

3. If all passed, use the **integration-engineer** subagent to:
   - Analyze all components
   - Connect Database to Backend
   - Connect Backend to Frontend
   - Set up environment configuration
   - Create Docker configuration
   - Verify E2E flows
   - Document integration points

4. Creates/updates:
   ```
   output/[project]/
   ├── docker-compose.yml
   ├── .env.example
   ├── README.md
   ├── src/
   │   ├── backend/
   │   │   ├── Dockerfile
   │   │   └── requirements.txt
   │   └── frontend/
   │       ├── Dockerfile
   │       └── package.json
   └── docs/
       └── integration-notes.md
   ```

5. When complete, prompt:
   "🔗 Integration complete. Run `test integration` for QA E2E testing."
