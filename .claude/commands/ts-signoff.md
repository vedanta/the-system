# Sign-off: $ARGUMENTS

QA Engineer final sign-off for development stage.

## Prerequisites

**MANDATORY: Run `/ts-validate` before sign-off.**

```
/ts-validate
```

If validation fails, sign-off is BLOCKED.

---

## Usage

```
/ts-signoff              # Full sign-off
/ts-signoff conditional  # Sign-off with documented conditions
```

---

## Process

### Step 1: Verify Build Status

```bash
cd output/[project]

# These MUST pass - no exceptions
npx tsc --noEmit       # TypeScript
npm run build          # Frontend build

cd src/backend
python -m py_compile *.py   # Python syntax
```

**If ANY of these fail → SIGN-OFF BLOCKED**

---

### Step 2: Verify Test Status

Check that tests have been run and results are acceptable:

| Category | Required | Minimum Coverage |
|----------|----------|------------------|
| Unit Tests | ✅ Must pass | 80% |
| Integration Tests | ✅ Must pass | 70% |
| E2E Tests | ✅ Critical paths | N/A |

---

### Step 3: Review Open Issues

| Severity | Sign-off Rule |
|----------|---------------|
| Critical | ❌ BLOCKS sign-off |
| High | ❌ BLOCKS sign-off |
| Medium | ⚠️ Requires justification |
| Low | ✅ Can proceed (tracked) |

---

### Step 4: Generate Sign-off Report

```markdown
## QA Sign-off Report

### Project: [PROJECT]
### Date: [timestamp]
### QA Engineer: 🧪

---

### 1. Build Verification

| Check | Command | Status |
|-------|---------|--------|
| TypeScript | `npx tsc --noEmit` | ✅ PASS |
| Frontend Build | `npm run build` | ✅ PASS |
| Backend Syntax | `python -m py_compile` | ✅ PASS |
| Dependencies | `npm install` | ✅ PASS |

---

### 2. Test Results

| Suite | Total | Passed | Failed | Skipped | Coverage |
|-------|-------|--------|--------|---------|----------|
| Unit | 142 | 142 | 0 | 0 | 86% |
| Integration | 28 | 28 | 0 | 0 | 74% |
| E2E | 12 | 12 | 0 | 0 | N/A |

---

### 3. Quality Metrics

| Metric | Target | Actual | Status |
|--------|--------|--------|--------|
| Unit Coverage | ≥80% | 86% | ✅ |
| Integration Coverage | ≥70% | 74% | ✅ |
| Critical Bugs | 0 | 0 | ✅ |
| High Bugs | 0 | 0 | ✅ |
| Medium Bugs | ≤5 | 2 | ✅ |

---

### 4. Open Issues

| ID | Severity | Description | Status |
|----|----------|-------------|--------|
| #12 | Medium | Tooltip flickers on mobile | Accepted - non-critical |
| #15 | Low | Console warning on unmount | Tracked - will fix later |

---

### 5. Sign-off Decision

#### Status: ✅ APPROVED

#### Conditions: None

#### Notes:
- All automated checks pass
- Test coverage exceeds targets
- No blocking issues

---

### 6. Approvals

- [x] Build verification complete
- [x] Test execution complete
- [x] Coverage targets met
- [x] No blocking bugs
- [x] Documentation updated

---

### Sign-off

**QA Engineer: ✅ APPROVED**

Ready for: Stage 4 (Release)
```

---

## Sign-off Blocked Template

If sign-off cannot be granted:

```markdown
## QA Sign-off Report

### Project: [PROJECT]
### Date: [timestamp]

---

### Status: ❌ BLOCKED

---

### Blocking Issues

| Issue | Severity | Description |
|-------|----------|-------------|
| Build Failure | BLOCKER | TypeScript error in AudioManager.ts:380 |
| Build Failure | BLOCKER | Duplicate member "isInitialized" |

---

### Required Actions

1. Fix TypeScript error in `src/game/managers/AudioManager.ts`
   - Line 380: Duplicate member "isInitialized"
   - Solution: Rename property to `_initialized`

2. Fix TypeScript error in `src/game/managers/ScoreManager.ts`
   - Line 231: Duplicate member "updateGameSpeed"
   - Solution: Remove duplicate method

3. Run `/ts-validate` to verify fixes

4. Re-request `/ts-signoff`

---

### Sign-off

**QA Engineer: ❌ BLOCKED**

Cannot proceed until blocking issues resolved.
```

---

## On Complete

Update project file:

```markdown
## Stage 3: Development

### QA Sign-off: ✅ APPROVED
- Date: [timestamp]
- Build: ✅ Verified
- Tests: ✅ 182/182 passed
- Coverage: 86% unit, 74% integration
- Blockers: None

### Ready for Stage 4
```

---

## Handoff

After sign-off approved:

1. Update project status to "Development Complete"
2. Notify Founder-Advisor for review
3. Prepare for `/ts-approve development`
