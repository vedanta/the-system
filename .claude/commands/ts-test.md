# Test Component: $ARGUMENTS

QA Engineer reviews a specific component or integration.

## Usage

- `test database` - QA reviews database work
- `test backend` - QA reviews backend work
- `test frontend` - QA reviews frontend work
- `test integration` - QA runs E2E and integration tests

## Process

1. Read the active project file

2. Use the **qa-engineer** subagent to review the specified component

3. Based on $ARGUMENTS:

---

### database

**Gate Check:**
- Database Developer has completed (status: DB_COMPLETE)
- If not: "⛔ Database development not complete. Run `build database` first."

**QA Actions:**
- Review schema design
- Run database tests (DB-TXXX)
- Verify data integrity constraints
- Check model relationships

**Decision:** PASS or FAIL

**If PASS:**
- Check "QA Review: PASS" in Database Developer section
- Update Audit Log
- "✅ Database QA PASSED. Run `build backend` to continue."

**If FAIL:**
- Document issues with specific test failures
- "🔴 Database QA FAILED. Issues found. Database Developer must revise."
- List specific issues and required fixes

---

### backend

**Gate Check:**
- Backend Developer has completed (status: BE_COMPLETE)
- If not: "⛔ Backend development not complete. Run `build backend` first."

**QA Actions:**
- Review API design
- Run API tests (BE-TXXX)
- Verify authentication/authorization
- Check error handling

**Decision:** PASS or FAIL

**If PASS:**
- Check "QA Review: PASS" in Backend Developer section
- Update Audit Log
- "✅ Backend QA PASSED. Run `build frontend` to continue."

**If FAIL:**
- Document issues with specific test failures
- "🔴 Backend QA FAILED. Issues found. Backend Developer must revise."
- List specific issues and required fixes

---

### frontend

**Gate Check:**
- Frontend Developer has completed (status: FE_COMPLETE)
- If not: "⛔ Frontend development not complete. Run `build frontend` first."

**QA Actions:**
- Review component structure
- Run component tests (FE-TXXX)
- Verify state management
- Check API integration

**Decision:** PASS or FAIL

**If PASS:**
- Check "QA Review: PASS" in Frontend Developer section
- Update Audit Log
- "✅ Frontend QA PASSED. Run `integrate` to connect components."

**If FAIL:**
- Document issues with specific test failures
- "🔴 Frontend QA FAILED. Issues found. Frontend Developer must revise."
- List specific issues and required fixes

---

### integration

**Gate Check:**
- All components passed individual QA (DB, BE, FE all PASS)
- Integration Engineer has completed (status: INTEGRATED)
- If not: "⛔ All components must pass QA and be integrated first."

**QA Actions:**
- Run E2E tests (E2E-XXX)
- Verify all integration points
- Test complete user flows
- Check performance baseline
- Security verification

**Decision:** PASS or FAIL

**If PASS:**
- Update Integration QA status to PASS
- Update Audit Log
- "✅ Integration QA PASSED. Run `gate` for Principal Developer review."

**If FAIL:**
- Document specific E2E failures
- Route back to relevant developer or Integration Engineer
- "🔴 Integration QA FAILED. Issues found in [component]. Must revise."
