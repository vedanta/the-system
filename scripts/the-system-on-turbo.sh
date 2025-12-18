#!/bin/bash
# ============================================================================
# THE SYSTEM - Turbo Mode Runner
# ============================================================================
# Run The System autonomously from the command line
#
# Usage:
#   ./the-system-on-turbo.sh <project-name> "<idea description>"
#
# Example:
#   ./the-system-on-turbo.sh my-app "Build a todo app with user auth and reminders"
#
# ============================================================================

set -e

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Check arguments
if [ -z "$1" ] || [ -z "$2" ]; then
    echo -e "${RED}Error: Missing arguments${NC}"
    echo ""
    echo "Usage: ./the-system-on-turbo.sh <project-name> \"<idea description>\""
    echo ""
    echo "Example:"
    echo "  ./the-system-on-turbo.sh my-app \"Build a todo app with user auth and reminders\""
    exit 1
fi

PROJECT="$1"
IDEA="$2"

# Banner
echo ""
echo -e "${PURPLE}╔══════════════════════════════════════════════════════════════════╗${NC}"
echo -e "${PURPLE}║  🚀 THE SYSTEM - TURBO MODE                                      ║${NC}"
echo -e "${PURPLE}╠══════════════════════════════════════════════════════════════════╣${NC}"
echo -e "${PURPLE}║  Project: ${CYAN}$PROJECT${PURPLE}$(printf '%*s' $((43 - ${#PROJECT})) '')║${NC}"
echo -e "${PURPLE}║  Mode: ${GREEN}Autonomous (no HITL gates)${PURPLE}                              ║${NC}"
echo -e "${PURPLE}╚══════════════════════════════════════════════════════════════════╝${NC}"
echo ""

# Confirm
echo -e "${YELLOW}Idea:${NC} $IDEA"
echo ""
read -p "Start autonomous build? (y/n) " -n 1 -r
echo ""

if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo -e "${RED}Aborted.${NC}"
    exit 1
fi

echo ""
echo -e "${CYAN}Starting Claude Code in turbo mode...${NC}"
echo ""

# Run Claude Code with turbo command
claude --dangerously-skip-permissions -p "
/ts-turbo $PROJECT \"$IDEA\"
"

# Done
echo ""
echo -e "${GREEN}╔══════════════════════════════════════════════════════════════════╗${NC}"
echo -e "${GREEN}║  ✅ TURBO MODE COMPLETE                                          ║${NC}"
echo -e "${GREEN}╚══════════════════════════════════════════════════════════════════╝${NC}"
echo ""
echo -e "Output: ${CYAN}output/$PROJECT/${NC}"
echo ""
echo -e "Next steps:"
echo -e "  ${BLUE}cd output/$PROJECT && docker-compose up${NC}  # Run locally"
echo -e "  ${BLUE}/ts-push vercel${NC}                          # Quick deploy"
echo ""
