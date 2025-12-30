#!/bin/bash
# ============================================================================
# THE SYSTEM - Verification Script (Stage 1-5)
# ============================================================================
# Verifies all components are correctly installed through Stage 5
# ============================================================================

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Counters
PASS=0
FAIL=0
WARN=0

# Functions
check_pass() {
    echo -e "  ${GREEN}✓${NC} $1"
    PASS=$((PASS+1))
}

check_fail() {
    echo -e "  ${RED}✗${NC} $1"
    FAIL=$((FAIL+1))
}

check_warn() {
    echo -e "  ${YELLOW}⚠${NC} $1"
    WARN=$((WARN+1))
}

header() {
    echo ""
    echo -e "${BLUE}═══════════════════════════════════════════════════════════════${NC}"
    echo -e "${BLUE}  $1${NC}"
    echo -e "${BLUE}═══════════════════════════════════════════════════════════════${NC}"
}

# ============================================================================
# DETERMINE PROJECT ROOT
# ============================================================================

# Get the directory where this script is located
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
# Get the project root (parent of scripts directory)
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"

# ============================================================================
# START VERIFICATION
# ============================================================================

echo ""
echo "╔══════════════════════════════════════════════════════════════════╗"
echo "║           THE SYSTEM - Verification (Stage 1-5)                  ║"
echo "╚══════════════════════════════════════════════════════════════════╝"

# ----------------------------------------------------------------------------
header "1. DIRECTORY STRUCTURE"
# ----------------------------------------------------------------------------

for dir in "$PROJECT_ROOT/.claude" "$PROJECT_ROOT/.claude/agents" "$PROJECT_ROOT/.claude/commands" "$PROJECT_ROOT/.claude/config" "$PROJECT_ROOT/.claude/knowledge" "$PROJECT_ROOT/.claude/hooks" "$PROJECT_ROOT/.claude/pipeline" "$PROJECT_ROOT/.claude/pipeline/projects"; do
    if [ -d "$dir" ]; then
        check_pass "$dir/"
    else
        check_fail "$dir/ (missing)"
    fi
done

# ----------------------------------------------------------------------------
header "2. AGENTS (19 required)"
# ----------------------------------------------------------------------------

# Stage 1
for agent in "founder-advisor" "enterprise-architect" "solution-architect"; do
    if [ -f "$PROJECT_ROOT/.claude/agents/${agent}.md" ]; then
        check_pass "${agent}.md (Stage 1)"
    else
        check_fail "${agent}.md (missing)"
    fi
done

# Stage 2
for agent in "product-lead" "project-planner" "business-analyst"; do
    if [ -f "$PROJECT_ROOT/.claude/agents/${agent}.md" ]; then
        check_pass "${agent}.md (Stage 2)"
    else
        check_fail "${agent}.md (missing)"
    fi
done

# Stage 3
for agent in "principal-developer" "qa-engineer" "database-developer" "backend-developer" "frontend-developer" "integration-engineer"; do
    if [ -f "$PROJECT_ROOT/.claude/agents/${agent}.md" ]; then
        check_pass "${agent}.md (Stage 3)"
    else
        check_fail "${agent}.md (missing)"
    fi
done

# Stage 4
for agent in "technical-writer" "security-engineer" "release-engineer" "devops-engineer"; do
    if [ -f "$PROJECT_ROOT/.claude/agents/${agent}.md" ]; then
        check_pass "${agent}.md (Stage 4)"
    else
        check_fail "${agent}.md (missing)"
    fi
done

# Stage 5
for agent in "sre-deploy-engineer" "sre-ops-engineer"; do
    if [ -f "$PROJECT_ROOT/.claude/agents/${agent}.md" ]; then
        check_pass "${agent}.md (Stage 5)"
    else
        check_fail "${agent}.md (missing)"
    fi
done

# Utility Agents
for agent in "bug-fixer"; do
    if [ -f "$PROJECT_ROOT/.claude/agents/${agent}.md" ]; then
        check_pass "${agent}.md (Utility)"
    else
        check_fail "${agent}.md (missing)"
    fi
done

# ----------------------------------------------------------------------------
header "3. COMMANDS (46 required)"
# ----------------------------------------------------------------------------

# Core commands
for cmd in "ts-new-project" "ts-status" "ts-view" "ts-brief" "ts-ask" "ts-approve" "ts-review" "ts-exec-summary"; do
    if [ -f "$PROJECT_ROOT/.claude/commands/${cmd}.md" ]; then
        check_pass "${cmd}.md (Core)"
    else
        check_fail "${cmd}.md (missing)"
    fi
done

# Stage 1
for cmd in "ts-architect" "ts-assess"; do
    if [ -f "$PROJECT_ROOT/.claude/commands/${cmd}.md" ]; then
        check_pass "${cmd}.md (Stage 1)"
    else
        check_fail "${cmd}.md (missing)"
    fi
done

# Stage 2
for cmd in "ts-product" "ts-plan" "ts-analyze"; do
    if [ -f "$PROJECT_ROOT/.claude/commands/${cmd}.md" ]; then
        check_pass "${cmd}.md (Stage 2)"
    else
        check_fail "${cmd}.md (missing)"
    fi
done

# Stage 3
for cmd in "ts-develop" "ts-test-plan" "ts-build" "ts-test" "ts-integrate" "ts-gate" "ts-signoff"; do
    if [ -f "$PROJECT_ROOT/.claude/commands/${cmd}.md" ]; then
        check_pass "${cmd}.md (Stage 3)"
    else
        check_fail "${cmd}.md (missing)"
    fi
done

# Stage 4
for cmd in "ts-docs" "ts-security" "ts-release" "ts-infra" "ts-pipeline" "ts-deploy" "ts-verify" "ts-rollback"; do
    if [ -f "$PROJECT_ROOT/.claude/commands/${cmd}.md" ]; then
        check_pass "${cmd}.md (Stage 4)"
    else
        check_fail "${cmd}.md (missing)"
    fi
done

# Stage 5
for cmd in "ts-push" "ts-live-status" "ts-live-env" "ts-domain" "ts-teardown" "ts-monitor" "ts-alerts" "ts-logs" "ts-health" "ts-status-page" "ts-incident" "ts-slo"; do
    if [ -f "$PROJECT_ROOT/.claude/commands/${cmd}.md" ]; then
        check_pass "${cmd}.md (Stage 5)"
    else
        check_fail "${cmd}.md (missing)"
    fi
done

# Utility commands
for cmd in "ts-fix" "ts-validate" "ts-turbo" "ts-turbo-quick" "ts-self-document" "ts-user-docs-update"; do
    if [ -f "$PROJECT_ROOT/.claude/commands/${cmd}.md" ]; then
        check_pass "${cmd}.md (Utility)"
    else
        check_fail "${cmd}.md (missing)"
    fi
done

# Check for duplicate prefixes (ts-ts-)
DUPLICATES=$(ls $PROJECT_ROOT/.claude/commands/ 2>/dev/null | grep -E "^ts-ts-" || true)
if [ -n "$DUPLICATES" ]; then
    check_fail "Found duplicate prefix files (ts-ts-*)"
fi

# ----------------------------------------------------------------------------
header "4. CONFIG FILES"
# ----------------------------------------------------------------------------

for cfg in "$PROJECT_ROOT/.claude/config/preferences.yaml" "$PROJECT_ROOT/.claude/config/integrations.yaml"; do
    if [ -f "$cfg" ]; then
        check_pass "$cfg"
    else
        check_fail "$cfg (missing)"
    fi
done

# Check for go_live section in preferences
if [ -f "$PROJECT_ROOT/.claude/config/preferences.yaml" ]; then
    if grep -q "go_live:" "$PROJECT_ROOT/.claude/config/preferences.yaml" 2>/dev/null; then
        check_pass "preferences.yaml has go_live section (Stage 5)"
    else
        check_warn "preferences.yaml missing go_live section (Stage 5)"
    fi
fi

# ----------------------------------------------------------------------------
header "5. KNOWLEDGE & TEMPLATES"
# ----------------------------------------------------------------------------

if [ -f "$PROJECT_ROOT/.claude/knowledge/architecture-standards.md" ]; then
    check_pass "architecture-standards.md"
else
    check_fail "architecture-standards.md (missing)"
fi

if [ -f "$PROJECT_ROOT/.claude/pipeline/projects/TEMPLATE.md" ]; then
    check_pass "TEMPLATE.md"
else
    check_fail "TEMPLATE.md (missing)"
fi

# ----------------------------------------------------------------------------
header "6. ROOT FILES"
# ----------------------------------------------------------------------------

if [ -f "$PROJECT_ROOT/CLAUDE.md" ]; then
    check_pass "$PROJECT_ROOT/CLAUDE.md"
else
    check_fail "$PROJECT_ROOT/CLAUDE.md (missing)"
fi

if [ -f "$PROJECT_ROOT/.env.example" ]; then
    check_pass ".env.example"
else
    check_warn ".env.example (optional)"
fi

if [ -f "$PROJECT_ROOT/.gitignore" ]; then
    check_pass ".gitignore"
else
    check_warn ".gitignore (optional)"
fi

# ----------------------------------------------------------------------------
header "7. TEMPLATE SECTIONS"
# ----------------------------------------------------------------------------

TEMPLATE="$PROJECT_ROOT/.claude/pipeline/projects/TEMPLATE.md"
if [ -f "$TEMPLATE" ]; then
    for section in "Architecture Department" "Product Department" "Development Department" "Stage 4" "Stage 5" "SRE Deploy Engineer" "SRE Ops Engineer"; do
        if grep -q "$section" "$TEMPLATE" 2>/dev/null; then
            check_pass "Section: $section"
        else
            check_fail "Section: $section (missing)"
        fi
    done
fi

# ----------------------------------------------------------------------------
header "8. STAGE 5 SPECIFIC"
# ----------------------------------------------------------------------------

# Check for Stage 5 in $PROJECT_ROOT/CLAUDE.md
if [ -f "$PROJECT_ROOT/CLAUDE.md" ]; then
    if grep -q "Stage 5" "$PROJECT_ROOT/CLAUDE.md" 2>/dev/null; then
        check_pass "$PROJECT_ROOT/CLAUDE.md has Stage 5 documentation"
    else
        check_warn "$PROJECT_ROOT/CLAUDE.md missing Stage 5 documentation"
    fi
    
    if grep -q "ts-push" "$PROJECT_ROOT/CLAUDE.md" 2>/dev/null; then
        check_pass "$PROJECT_ROOT/CLAUDE.md has /ts-push command"
    else
        check_warn "$PROJECT_ROOT/CLAUDE.md missing /ts-push command"
    fi
fi

# ============================================================================
# SUMMARY
# ============================================================================

echo ""
echo "╔══════════════════════════════════════════════════════════════════╗"
echo "║                      VERIFICATION SUMMARY                        ║"
echo "╚══════════════════════════════════════════════════════════════════╝"
echo ""
echo -e "  ${GREEN}Passed:${NC}   $PASS"
echo -e "  ${RED}Failed:${NC}   $FAIL"
echo -e "  ${YELLOW}Warnings:${NC} $WARN"
echo ""

if [ $FAIL -eq 0 ]; then
    echo -e "  ${GREEN}╔═══════════════════════════════════════════════════════════╗${NC}"
    echo -e "  ${GREEN}║  ✓ THE SYSTEM IS CORRECTLY INSTALLED (Stage 1-5)         ║${NC}"
    echo -e "  ${GREEN}╚═══════════════════════════════════════════════════════════╝${NC}"
    echo ""
    echo "  Ready to use:"
    echo "    claude"
    echo "    /ts-new-project my-app"
    echo ""
    echo "  Quick deploy (Stage 5):"
    echo "    /ts-push vercel"
    echo "    /ts-push railway"
    echo "    /ts-push neon"
    echo ""
else
    echo -e "  ${RED}╔═══════════════════════════════════════════════════════════╗${NC}"
    echo -e "  ${RED}║  ✗ VERIFICATION FAILED - Fix issues above                 ║${NC}"
    echo -e "  ${RED}╚═══════════════════════════════════════════════════════════╝${NC}"
    echo ""
fi
