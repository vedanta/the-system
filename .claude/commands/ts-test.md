# Test: $ARGUMENTS

Run tests for a specific layer with mandatory build verification.

## Usage

```
/ts-test database       # Test database layer
/ts-test backend        # Test backend layer
/ts-test frontend       # Test frontend layer
/ts-test integration    # Test full integration
/ts-test all            # Test everything
```

---

## Process

### Invokes

- **QA Engineer** - Test execution and verification

---

## ⚠️ Build Verification First

**Every test run MUST start with build verification.**

If build fails, testing is BLOCKED. No exceptions.

---

## Frontend Testing (/ts-test frontend)

### Step 1: Build Verification (REQUIRED)

```bash
cd output/[project]

echo "═══════════════════════════════════════════════════════════"
echo "🔍 BUILD VERIFICATION"
echo "═══════════════════════════════════════════════════════════"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# TypeScript check - BLOCKER
echo "🔷 TypeScript check..."
npx tsc --noEmit
if [ $? -ne 0 ]; then
  echo ""
  echo "❌ BLOCKED: TypeScript errors found"
  echo "   Fix errors before running tests"
  echo ""
  exit 1
fi
echo "   ✅ TypeScript: Clean"

# Lint check
echo "🔶 Lint check..."
npm run lint 2>/dev/null || true

# Build check - BLOCKER
echo "🏗️ Build check..."
npm run build
if [ $? -ne 0 ]; then
  echo ""
  echo "❌ BLOCKED: Build failed"
  echo "   Fix build errors before running tests"
  echo ""
  exit 1
fi
echo "   ✅ Build: Successful"

echo ""
echo "✅ Build verification passed - proceeding to tests"
echo ""
```

### Step 2: Run Tests

```bash
echo "═══════════════════════════════════════════════════════════"
echo "🧪 RUNNING TESTS"
echo "═══════════════════════════════════════════════════════════"

# Run test suite
npm test -- --run

# Coverage report
npm test -- --coverage
```

### Step 3: Report Results

```markdown
## Frontend Test Results

### Build Verification
| Check | Status |
|-------|--------|
| Dependencies | ✅ Installed |
| TypeScript | ✅ Clean |
| ESLint | ✅ Clean |
| Build | ✅ Successful |

### Test Summary
| Metric | Value |
|--------|-------|
| Total Tests | 142 |
| Passed | 142 |
| Failed | 0 |
| Skipped | 0 |
| Coverage | 86% |

### Status: ✅ PASSED
```

---

## Backend Testing (/ts-test backend)

### Step 1: Build Verification (REQUIRED)

```bash
cd output/[project]/src/backend

echo "═══════════════════════════════════════════════════════════"
echo "🔍 BUILD VERIFICATION"
echo "═══════════════════════════════════════════════════════════"

# Install dependencies
echo "📦 Installing dependencies..."
pip install -r requirements.txt

# Syntax check - BLOCKER
echo "🐍 Syntax check..."
python -m py_compile main.py
for f in $(find . -name "*.py"); do
  python -m py_compile "$f"
  if [ $? -ne 0 ]; then
    echo ""
    echo "❌ BLOCKED: Syntax error in $f"
    exit 1
  fi
done
echo "   ✅ Syntax: Clean"

# Import check
echo "📥 Import check..."
python -c "from main import app" 2>/dev/null
if [ $? -ne 0 ]; then
  echo "   ⚠️ Import warning (check manually)"
fi

# Type check (optional)
echo "🔷 Type check..."
pip install mypy --quiet
mypy . --ignore-missing-imports 2>/dev/null || true

echo ""
echo "✅ Build verification passed - proceeding to tests"
echo ""
```

### Step 2: Run Tests

```bash
echo "═══════════════════════════════════════════════════════════"
echo "🧪 RUNNING TESTS"
echo "═══════════════════════════════════════════════════════════"

# Run pytest
pytest -v --tb=short

# Coverage
pytest --cov=. --cov-report=term-missing
```

### Step 3: Report Results

```markdown
## Backend Test Results

### Build Verification
| Check | Status |
|-------|--------|
| Dependencies | ✅ Installed |
| Syntax | ✅ Clean |
| Imports | ✅ Resolved |
| Type Check | ✅ Clean |

### Test Summary
| Metric | Value |
|--------|-------|
| Total Tests | 28 |
| Passed | 28 |
| Failed | 0 |
| Skipped | 0 |
| Coverage | 82% |

### Status: ✅ PASSED
```

---

## Database Testing (/ts-test database)

### Step 1: Verification

```bash
cd output/[project]/src/backend

echo "═══════════════════════════════════════════════════════════"
echo "🔍 DATABASE VERIFICATION"
echo "═══════════════════════════════════════════════════════════"

# Check models syntax
echo "🗄️ Model syntax check..."
python -c "from models import *; print('Models OK')"

# Check migrations
echo "📋 Migration check..."
alembic check 2>/dev/null || true
```

### Step 2: Run Tests

```bash
# Run database-specific tests
pytest tests/test_db*.py -v
pytest tests/test_models*.py -v
```

---

## Integration Testing (/ts-test integration)

### Step 1: Full Stack Verification

```bash
cd output/[project]

echo "═══════════════════════════════════════════════════════════"
echo "🔍 FULL STACK VERIFICATION"
echo "═══════════════════════════════════════════════════════════"

# Frontend build
echo "🎨 Frontend build..."
npm run build
if [ $? -ne 0 ]; then
  echo "❌ BLOCKED: Frontend build failed"
  exit 1
fi

# Backend check
echo "⚙️ Backend check..."
cd src/backend
python -m py_compile main.py
cd ../..

# Docker build
echo "🐳 Docker build..."
docker-compose build
if [ $? -ne 0 ]; then
  echo "❌ BLOCKED: Docker build failed"
  exit 1
fi

echo ""
echo "✅ Full stack verification passed"
echo ""
```

### Step 2: Run Integration Tests

```bash
# Start services
docker-compose up -d

# Wait for healthy
sleep 10

# Run E2E tests
npm run test:e2e

# Capture results
E2E_EXIT=$?

# Cleanup
docker-compose down

exit $E2E_EXIT
```

---

## Test All (/ts-test all)

Runs all test suites in order:

```bash
echo "Running all tests..."

/ts-test database
/ts-test backend
/ts-test frontend
/ts-test integration

echo "All tests complete"
```

---

## Failure Handling

If build verification fails:

```markdown
## Test Results: ❌ BLOCKED

### Build Verification Failed

| Check | Status | Details |
|-------|--------|---------|
| TypeScript | ❌ FAIL | 2 errors |
| Build | ⏭️ SKIP | Blocked by TypeScript |
| Tests | ⏭️ SKIP | Blocked by build |

### Errors

```
src/game/managers/AudioManager.ts:380
  error: Duplicate member "isInitialized" in class body

src/game/managers/ScoreManager.ts:231  
  error: Duplicate member "updateGameSpeed" in class body
```

### Required Actions

1. Fix the TypeScript errors listed above
2. Run `/ts-validate` to verify fixes
3. Re-run `/ts-test frontend`

### Status: ❌ BLOCKED - Cannot proceed until build passes
```

---

## On Complete

Update project file with test results:

```markdown
## Testing

### Frontend
- Build: ✅ Verified
- Tests: 142/142 passed
- Coverage: 86%

### Backend
- Build: ✅ Verified
- Tests: 28/28 passed
- Coverage: 82%

### Integration
- Docker: ✅ Built
- E2E: 12/12 passed

### Status: ✅ ALL TESTS PASSED
```
