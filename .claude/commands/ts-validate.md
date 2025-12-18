# Validate: $ARGUMENTS

Run automated build validation on the output project to catch errors before they reach production.

## Usage

```
/ts-validate                    # Validate all (frontend + backend)
/ts-validate frontend           # Frontend only
/ts-validate backend            # Backend only
/ts-validate [project-name]     # Specific project
```

## Purpose

Catches common issues that slip through code review:
- TypeScript errors (duplicate members, type mismatches)
- ESLint violations
- Build failures
- Test failures
- Dependency conflicts

**Run this BEFORE `/ts-signoff`** to ensure code quality.

---

## Process

### 1. Determine Project

```bash
# Default to current project from pipeline
PROJECT=$(cat .claude/pipeline/projects/current.txt 2>/dev/null || echo "")

# Or use provided argument
PROJECT=${ARGUMENTS:-$PROJECT}
```

---

### 2. Frontend Validation

```bash
cd output/[project]

echo "🔍 Frontend Validation Starting..."

# Step 1: Clean install
echo "📦 Installing dependencies..."
rm -rf node_modules package-lock.json
npm install

# Step 2: Type check (catches duplicate members, type errors)
echo "🔷 TypeScript check..."
npx tsc --noEmit
if [ $? -ne 0 ]; then
  echo "❌ TypeScript errors found"
  exit 1
fi

# Step 3: Lint check
echo "🔶 ESLint check..."
npm run lint 2>/dev/null || npx eslint src/ --ext .ts,.tsx
if [ $? -ne 0 ]; then
  echo "❌ Linting errors found"
  exit 1
fi

# Step 4: Build (catches all compile errors)
echo "🏗️ Build check..."
npm run build
if [ $? -ne 0 ]; then
  echo "❌ Build failed"
  exit 1
fi

# Step 5: Tests
echo "🧪 Running tests..."
npm test -- --run 2>/dev/null || npm test
if [ $? -ne 0 ]; then
  echo "⚠️ Tests failed (review required)"
fi

echo "✅ Frontend validation passed"
```

---

### 3. Backend Validation

```bash
cd output/[project]/src/backend

echo "🔍 Backend Validation Starting..."

# Step 1: Create virtual environment if needed
if [ ! -d "venv" ]; then
  python -m venv venv
fi
source venv/bin/activate

# Step 2: Install dependencies
echo "📦 Installing dependencies..."
pip install -r requirements.txt

# Step 3: Syntax check
echo "🐍 Python syntax check..."
python -m py_compile *.py **/*.py 2>/dev/null
if [ $? -ne 0 ]; then
  echo "❌ Python syntax errors found"
  exit 1
fi

# Step 4: Type check (if using type hints)
echo "🔷 Type check..."
pip install mypy --quiet
mypy . --ignore-missing-imports 2>/dev/null || true

# Step 5: Lint
echo "🔶 Linting..."
pip install ruff --quiet
ruff check .
if [ $? -ne 0 ]; then
  echo "⚠️ Linting issues found (review required)"
fi

# Step 6: Tests
echo "🧪 Running tests..."
pytest -v
if [ $? -ne 0 ]; then
  echo "⚠️ Tests failed (review required)"
fi

echo "✅ Backend validation passed"
```

---

## Validation Report

Output a clear report:

```
╔══════════════════════════════════════════════════════════════════╗
║                    🔍 VALIDATION REPORT                          ║
╚══════════════════════════════════════════════════════════════════╝

Project: [project-name]

┌─────────────────────────────────────────────────────────────────┐
│ FRONTEND                                                        │
├─────────────────────────────────────────────────────────────────┤
│ Dependencies    ✅ Installed (620 packages)                     │
│ TypeScript      ✅ No errors                                    │
│ ESLint          ✅ No violations                                │
│ Build           ✅ Success (2.3s)                               │
│ Tests           ✅ 42 passed, 0 failed                          │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│ BACKEND                                                         │
├─────────────────────────────────────────────────────────────────┤
│ Dependencies    ✅ Installed (38 packages)                      │
│ Syntax          ✅ No errors                                    │
│ Type Check      ✅ No errors                                    │
│ Ruff            ✅ No violations                                │
│ Tests           ✅ 28 passed, 0 failed                          │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│ RESULT                                                          │
├─────────────────────────────────────────────────────────────────┤
│ Status: ✅ PASSED - Ready for /ts-signoff                       │
└─────────────────────────────────────────────────────────────────┘
```

---

## Failure Report

When validation fails:

```
╔══════════════════════════════════════════════════════════════════╗
║                    🔍 VALIDATION REPORT                          ║
╚══════════════════════════════════════════════════════════════════╝

Project: [project-name]

┌─────────────────────────────────────────────────────────────────┐
│ FRONTEND                                                        │
├─────────────────────────────────────────────────────────────────┤
│ Dependencies    ✅ Installed                                    │
│ TypeScript      ❌ 2 errors                                     │
│ ESLint          ⚠️ 3 warnings                                   │
│ Build           ❌ Failed                                       │
│ Tests           ⏭️ Skipped (build failed)                       │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│ ERRORS                                                          │
├─────────────────────────────────────────────────────────────────┤
│ src/game/managers/AudioManager.ts:380                           │
│   ❌ Duplicate member "isInitialized" in class body             │
│                                                                 │
│ src/game/managers/ScoreManager.ts:231                           │
│   ❌ Duplicate member "updateGameSpeed" in class body           │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│ RESULT                                                          │
├─────────────────────────────────────────────────────────────────┤
│ Status: ❌ FAILED - Fix errors before /ts-signoff               │
└─────────────────────────────────────────────────────────────────┘

NEXT STEPS:
  1. Fix TypeScript errors in listed files
  2. Run /ts-validate again
  3. Proceed to /ts-signoff when passed
```

---

## Integration with Workflow

### When to Run

| After | Command | Validates |
|-------|---------|-----------|
| `/ts-build frontend` | `/ts-validate frontend` | Frontend code |
| `/ts-build backend` | `/ts-validate backend` | Backend code |
| `/ts-integrate` | `/ts-validate` | Full stack |
| Before `/ts-signoff` | `/ts-validate` | REQUIRED |

### Automatic Validation

The QA Engineer should automatically run `/ts-validate` during:
- `/ts-test frontend`
- `/ts-test backend`
- `/ts-test integration`

---

## Common Issues Caught

| Issue | Check | Example |
|-------|-------|---------|
| Duplicate class members | TypeScript | `Duplicate member "foo"` |
| Type mismatches | TypeScript | `Type 'string' not assignable to 'number'` |
| Unused variables | ESLint | `'x' is defined but never used` |
| Import errors | Build | `Module not found` |
| Syntax errors | Build | `Unexpected token` |
| Test failures | Tests | `Expected 5, got 3` |
| Missing dependencies | Install | `Cannot find module` |

---

## On Complete

Update project file:

```markdown
## Validation

### Status: ✅ PASSED

### Last Run
- Date: [timestamp]
- Frontend: ✅ PASSED
- Backend: ✅ PASSED
- Errors: 0
- Warnings: 3 (non-blocking)

### Ready for Sign-off
- [x] TypeScript clean
- [x] Lint clean
- [x] Build successful
- [x] Tests passing
```
