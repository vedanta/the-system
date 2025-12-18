# Create Test Plan: $ARGUMENTS

Engage QA Engineer to create test strategy and test cases.

## Process

1. Read the active project file

2. Gate Check:
   - Verify Implementation Plan exists from Principal Developer
   - If not: "⛔ Implementation plan required. Run `develop` first."

3. Use the **qa-engineer** subagent to:
   - Create test strategy document
   - Write test cases for Database layer (DB-TXXX)
   - Write test cases for Backend layer (BE-TXXX)
   - Write test cases for Frontend layer (FE-TXXX)
   - Define E2E test scenarios (E2E-XXX)
   - Set quality gates and acceptance criteria

4. Update project file with test strategy and test cases

5. When complete, prompt:
   "🧪 Test plan ready. Start development with `build database`"
