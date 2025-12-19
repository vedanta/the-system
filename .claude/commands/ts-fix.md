# Fix: $ARGUMENTS

Systematically diagnose and fix build errors using the Bug Fixer agent.

## ⚠️ Not Part of Main Workflow

This is a **standalone utility** - use when things break, not as part of Stages 1-5.

---

## Usage

```
/ts-fix                    # Full diagnostic + fix all issues
/ts-fix typescript         # TypeScript errors only
/ts-fix dependencies       # Dependency conflicts only
/ts-fix lint               # Lint violations only (auto-fix)
/ts-fix scan               # Diagnostic only, no fixes
```

---

## Process

### Invokes

- **Bug Fixer** - Standalone utility agent

---

## Mode: Full Fix (/ts-fix)

### Step 1: Diagnostic Scan

```bash
echo "╔══════════════════════════════════════════════════════════════════╗"
echo "║  🔧 BUG FIXER                                                    ║"
echo "╚══════════════════════════════════════════════════════════════════╝"
echo ""

# Detect project
cd output/[project] 2>/dev/null || cd .

echo "📍 Project: $(basename $(pwd))"
echo ""

# Count errors by type
echo "📊 INITIAL ERROR COUNT"
echo "-----------------------------------------------------------"

TS_ERRORS=$(npx tsc --noEmit 2>&1 | grep "error TS" | wc -l | tr -d ' ')
echo "   TypeScript: $TS_ERRORS"

LINT_ERRORS=$(npm run lint 2>&1 | grep -c "error" || echo "0")
echo "   ESLint: $LINT_ERRORS"

npm run build 2>&1 > /dev/null
if [ $? -ne 0 ]; then
  echo "   Build: ❌ FAILING"
else
  echo "   Build: ✅ PASSING"
fi
```

### Step 2: Categorize Errors

```bash
echo ""
echo "📋 ERROR BREAKDOWN"
echo "-----------------------------------------------------------"

npx tsc --noEmit 2>&1 | grep "error TS" | \
  sed 's/.*error \(TS[0-9]*\):.*/\1/' | \
  sort | uniq -c | sort -rn | \
  while read count code; do
    case $code in
      TS2564) desc="Uninitialized property" ;;
      TS2300) desc="Duplicate identifier" ;;
      TS2322) desc="Type mismatch" ;;
      TS2339) desc="Property doesn't exist" ;;
      TS2345) desc="Argument type mismatch" ;;
      TS2304) desc="Cannot find name" ;;
      TS2307) desc="Cannot find module" ;;
      TS1205) desc="Re-export violation" ;;
      *) desc="Other" ;;
    esac
    printf "   %4d  %s  %s\n" "$count" "$code" "$desc"
  done
```

### Step 3: Fix by Category (Ordered)

Execute fixes in this order (quick wins first):

#### 3.1 Missing Dependencies

```bash
echo ""
echo "🔧 FIXING: Missing Dependencies"
echo "-----------------------------------------------------------"

# Check for missing @types/node
if npx tsc --noEmit 2>&1 | grep -q "Cannot find namespace 'NodeJS'"; then
  echo "   Installing @types/node..."
  npm install --save-dev @types/node
fi

# Check for other missing types
MISSING=$(npx tsc --noEmit 2>&1 | grep "Cannot find module '@types" | \
  sed "s/.*'@types\/\([^']*\)'.*/\1/" | sort -u)
if [ -n "$MISSING" ]; then
  for pkg in $MISSING; do
    echo "   Installing @types/$pkg..."
    npm install --save-dev @types/$pkg 2>/dev/null || true
  done
fi

# Verify
REMAINING=$(npx tsc --noEmit 2>&1 | grep "error TS" | wc -l | tr -d ' ')
echo "   ✓ Errors remaining: $REMAINING"
```

#### 3.2 Duplicate Members (TS2300)

```bash
echo ""
echo "🔧 FIXING: Duplicate Members"
echo "-----------------------------------------------------------"

# Find files with duplicates
npx tsc --noEmit 2>&1 | grep "TS2300" | \
  sed 's/\([^(]*\).*/\1/' | sort -u | \
  while read file; do
    echo "   Fixing: $file"
    # The agent will analyze and fix each file
  done
```

#### 3.3 Uninitialized Properties (TS2564)

```bash
echo ""
echo "🔧 FIXING: Uninitialized Properties"
echo "-----------------------------------------------------------"

# Find and fix - add definite assignment assertion (!)
npx tsc --noEmit 2>&1 | grep "TS2564" | head -20
# Agent fixes each by adding ! or initializer
```

#### 3.4 Type Issues

```bash
echo ""
echo "🔧 FIXING: Type Mismatches"
echo "-----------------------------------------------------------"

# These require more careful analysis
npx tsc --noEmit 2>&1 | grep "TS2322\|TS2345\|TS2339" | head -20
# Agent analyzes context and applies appropriate fix
```

### Step 4: Verify Fix

```bash
echo ""
echo "═══════════════════════════════════════════════════════════"
echo "🔍 VERIFICATION"
echo "═══════════════════════════════════════════════════════════"

# Final count
TS_ERRORS=$(npx tsc --noEmit 2>&1 | grep "error TS" | wc -l | tr -d ' ')
echo "   TypeScript: $TS_ERRORS"

# Build test
npm run build 2>&1 > /dev/null
if [ $? -eq 0 ]; then
  echo "   Build: ✅ PASSING"
  BUILD_STATUS="PASSING"
else
  echo "   Build: ❌ FAILING"
  BUILD_STATUS="FAILING"
fi
```

### Step 5: Report

```markdown
╔══════════════════════════════════════════════════════════════════╗
║                    🔧 BUG FIXER REPORT                           ║
╚══════════════════════════════════════════════════════════════════╝

Project: [project-name]

┌─────────────────────────────────────────────────────────────────┐
│ BEFORE                                                          │
├─────────────────────────────────────────────────────────────────┤
│ TypeScript errors: 154                                          │
│ Build: ❌ FAILING                                               │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│ FIXES APPLIED                                                   │
├─────────────────────────────────────────────────────────────────┤
│ ✓ Installed @types/node                                         │
│ ✓ Fixed 4 duplicate members                                     │
│ ✓ Fixed 32 uninitialized properties                             │
│ ✓ Fixed 12 union type access errors                             │
│ ✓ Fixed 8 re-export violations                                  │
│ ✓ Fixed 53 type mismatches                                      │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│ AFTER                                                           │
├─────────────────────────────────────────────────────────────────┤
│ TypeScript errors: 0                                            │
│ Build: ✅ PASSING                                               │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│ STATUS                                                          │
├─────────────────────────────────────────────────────────────────┤
│ ✅ FIXED - Project builds successfully                          │
└─────────────────────────────────────────────────────────────────┘

NEXT STEPS:
  npm run dev              # Test locally
  /ts-validate frontend    # Full validation
```

---

## Mode: TypeScript Only (/ts-fix typescript)

Focus only on TypeScript errors:

```bash
# 1. Count
npx tsc --noEmit 2>&1 | grep "error TS" | wc -l

# 2. Categorize
npx tsc --noEmit 2>&1 | grep "error TS" | \
  sed 's/.*error \(TS[0-9]*\):.*/\1/' | sort | uniq -c | sort -rn

# 3. Fix each category
# 4. Verify
```

---

## Mode: Dependencies Only (/ts-fix dependencies)

Focus only on dependency issues:

```bash
# 1. Clean install
rm -rf node_modules package-lock.json

# 2. Install with legacy peer deps if needed
npm install --legacy-peer-deps

# 3. Check for missing types
npx tsc --noEmit 2>&1 | grep "Cannot find module" | \
  sed "s/.*'\(.*\)'.*/\1/" | sort -u

# 4. Install missing
npm install --save-dev @types/node @types/react

# 5. Verify
npm run build
```

---

## Mode: Lint Only (/ts-fix lint)

Auto-fix lint violations:

```bash
# Auto-fix what's possible
npm run lint -- --fix

# Or with npx
npx eslint src/ --ext .ts,.tsx --fix

# Report remaining
npm run lint
```

---

## Mode: Scan Only (/ts-fix scan)

Diagnostic only, no changes:

```bash
echo "📊 DIAGNOSTIC SCAN (no changes)"
echo ""

# TypeScript
echo "TypeScript:"
npx tsc --noEmit 2>&1 | grep "error TS" | \
  sed 's/.*error \(TS[0-9]*\):.*/\1/' | sort | uniq -c | sort -rn

# Lint
echo ""
echo "ESLint:"
npm run lint 2>&1 | tail -5

# Build
echo ""
echo "Build:"
npm run build 2>&1 > /dev/null && echo "✅ Passing" || echo "❌ Failing"
```

---

## Common Fix Patterns

### Duplicate Member
```typescript
// Before
private isInitialized: boolean;
public isInitialized(): boolean { return this.isInitialized; }

// After  
private _initialized: boolean;
public isInitialized(): boolean { return this._initialized; }
```

### Uninitialized Property
```typescript
// Before
private foo: string;  // TS2564

// After (choose one)
private foo!: string;           // Definite assignment
private foo?: string;           // Optional
private foo: string = '';       // Default value
```

### Union Type Access
```typescript
// Before
function process(x: A | B) {
  return x.propOnlyOnA;  // TS2339
}

// After
function process(x: A | B) {
  if ('propOnlyOnA' in x) {
    return x.propOnlyOnA;  // OK
  }
}
```

### Re-export with isolatedModules
```typescript
// Before
export { MyType } from './module';  // TS1205

// After
export type { MyType } from './module';
```

---

## Error Code Reference

| Code | Meaning | Quick Fix |
|------|---------|-----------|
| TS2564 | Uninitialized property | Add `!` or `?` or default |
| TS2300 | Duplicate identifier | Rename one |
| TS2322 | Type mismatch | Fix type or cast |
| TS2339 | Property doesn't exist | Type guard or fix type |
| TS2345 | Argument type wrong | Fix argument or parameter |
| TS2304 | Cannot find name | Import or declare |
| TS2307 | Cannot find module | Install package |
| TS1205 | Re-export violation | Add `type` keyword |

---

## When to Use

| Situation | Command |
|-----------|---------|
| Build broken, many errors | `/ts-fix` |
| Just TypeScript issues | `/ts-fix typescript` |
| npm install failing | `/ts-fix dependencies` |
| Lint blocking commit | `/ts-fix lint` |
| Want to see what's wrong | `/ts-fix scan` |
| After `/ts-validate` fails | `/ts-fix` |

---

## Integration with Workflow

```
/ts-validate frontend     →  ❌ FAILED (154 errors)
        ↓
/ts-fix                   →  Fix all issues
        ↓
/ts-validate frontend     →  ✅ PASSED
        ↓
/ts-signoff               →  Continue workflow
```
