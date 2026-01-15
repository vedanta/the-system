#!/usr/bin/env bash
#
# The System - Installation Script
#
# Install The System framework with a single command:
#   curl -fsSL https://raw.githubusercontent.com/vedanta/the-system/main/install.sh | bash
#   curl -fsSL https://raw.githubusercontent.com/vedanta/the-system/main/install.sh | bash -s -- --help
#
# Supports: Linux, macOS, bash, zsh
# Author: The System Framework Team
# Version: 1.0.0

set -euo pipefail

# Colors for output
readonly RED='\033[0;31m'
readonly GREEN='\033[0;32m'
readonly YELLOW='\033[1;33m'
readonly BLUE='\033[0;34m'
readonly PURPLE='\033[0;35m'
readonly CYAN='\033[0;36m'
readonly BOLD='\033[1m'
readonly DIM='\033[2m'
readonly NC='\033[0m' # No Color

# Installation configuration
readonly REPO_URL="https://github.com/vedanta/the-system"
readonly RAW_URL="https://raw.githubusercontent.com/vedanta/the-system/main"
readonly DEFAULT_INSTALL_DIR="$HOME/.the-system"
readonly MIN_NODE_VERSION="18"
readonly REQUIRED_COMMANDS=("git" "node" "npm")

# Global variables
INSTALL_DIR=""
VERBOSE=false
SKIP_DEPS=false
CLAUDE_CODE_PATH=""
INTERACTIVE=true
PROGRESS_WIDTH=50

# Logging functions
log() {
    echo -e "${GREEN}[INFO]${NC} $*" >&2
}

warn() {
    echo -e "${YELLOW}[WARN]${NC} $*" >&2
}

error() {
    echo -e "${RED}[ERROR]${NC} $*" >&2
}

debug() {
    if [[ "$VERBOSE" == "true" ]]; then
        echo -e "${CYAN}[DEBUG]${NC} $*" >&2
    fi
}

success() {
    echo -e "${GREEN}[SUCCESS]${NC} $*" >&2
}

# Interactive and progress functions
spinner() {
    local pid=$1
    local message="$2"
    local spin='⠋⠙⠹⠸⠼⠴⠦⠧⠇⠏'
    local i=0

    if [[ "$INTERACTIVE" != "true" ]]; then
        wait "$pid"
        return $?
    fi

    echo -n "$message "
    while kill -0 "$pid" 2>/dev/null; do
        printf "\b${spin:$i:1}"
        i=$(((i + 1) % ${#spin}))
        sleep 0.1
    done
    wait "$pid"
    local exit_code=$?
    if [[ $exit_code -eq 0 ]]; then
        printf "\b✓\n"
    else
        printf "\b✗\n"
    fi
    return $exit_code
}

progress_bar() {
    local current=$1
    local total=$2
    local message="$3"

    if [[ "$INTERACTIVE" != "true" ]]; then
        return 0
    fi

    local percentage=$((current * 100 / total))
    local filled=$((current * PROGRESS_WIDTH / total))
    local empty=$((PROGRESS_WIDTH - filled))

    printf "\r${CYAN}[${NC}"
    printf "%*s" "$filled" | tr ' ' '█'
    printf "%*s" "$empty" | tr ' ' '░'
    printf "${CYAN}]${NC} ${BOLD}%3d%%${NC} %s" "$percentage" "$message"

    if [[ "$current" -eq "$total" ]]; then
        echo ""
    fi
}

prompt_user() {
    local question="$1"
    local default="$2"
    local response

    if [[ "$INTERACTIVE" != "true" ]]; then
        echo "$default"
        return 0
    fi

    echo -e "${YELLOW}[PROMPT]${NC} $question"
    if [[ -n "$default" ]]; then
        echo -e "${DIM}Press Enter for default: $default${NC}"
    fi

    read -r response
    if [[ -z "$response" && -n "$default" ]]; then
        echo "$default"
    else
        echo "$response"
    fi
}

confirm() {
    local question="$1"
    local default="${2:-n}"

    if [[ "$INTERACTIVE" != "true" ]]; then
        [[ "$default" == "y" ]] && return 0 || return 1
    fi

    local prompt
    if [[ "$default" == "y" ]]; then
        prompt="$question ${DIM}[Y/n]${NC} "
    else
        prompt="$question ${DIM}[y/N]${NC} "
    fi

    while true; do
        echo -ne "${YELLOW}[CONFIRM]${NC} $prompt"
        read -r response

        case "${response,,}" in
            y|yes) return 0 ;;
            n|no) return 1 ;;
            "") [[ "$default" == "y" ]] && return 0 || return 1 ;;
            *) echo -e "${RED}Please answer yes or no.${NC}" ;;
        esac
    done
}

show_step() {
    local step_num="$1"
    local total_steps="$2"
    local description="$3"

    echo ""
    echo -e "${PURPLE}Step $step_num/$total_steps:${NC} ${BOLD}$description${NC}"
    progress_bar "$step_num" "$total_steps" "Overall Progress"
    echo ""
}

# Help function
show_help() {
    cat << EOF
${BLUE}The System - Installation Script${NC}

${PURPLE}DESCRIPTION:${NC}
    Install The System autonomous development framework with a single command.
    Creates a complete AI-driven software development organization in your environment.

${PURPLE}USAGE:${NC}
    curl -fsSL https://raw.githubusercontent.com/vedanta/the-system/main/install.sh | bash
    curl -fsSL https://raw.githubusercontent.com/vedanta/the-system/main/install.sh | bash -s -- [OPTIONS]

${PURPLE}OPTIONS:${NC}
    -d, --dir DIR           Install directory (default: ~/.the-system)
    -v, --verbose           Enable verbose output
    -s, --skip-deps         Skip dependency checking
    -c, --claude-path PATH  Path to Claude Code executable
    -n, --non-interactive   Run without interactive prompts
    -h, --help              Show this help message

${PURPLE}EXAMPLES:${NC}
    # Basic installation
    curl -fsSL $RAW_URL/install.sh | bash

    # Custom installation directory
    curl -fsSL $RAW_URL/install.sh | bash -s -- --dir ~/my-system

    # Verbose installation with custom Claude path
    curl -fsSL $RAW_URL/install.sh | bash -s -- --verbose --claude-path /opt/claude/claude

${PURPLE}REQUIREMENTS:${NC}
    - Operating System: Linux or macOS
    - Shell: bash or zsh
    - Node.js: version $MIN_NODE_VERSION or higher
    - Git: latest version
    - Claude Code: installed and accessible

${PURPLE}WHAT GETS INSTALLED:${NC}
    ✓ The System framework (19 agents, 48+ commands)
    ✓ Configuration files and templates
    ✓ Documentation and examples
    ✓ Verification and health check scripts
    ✓ Shell integration (optional)

EOF
}

# System detection
detect_system() {
    local os
    os=$(uname -s | tr '[:upper:]' '[:lower:]')

    case "$os" in
        linux*|darwin*)
            debug "Detected OS: $os"
            return 0
            ;;
        *)
            error "Unsupported operating system: $os"
            error "The System supports Linux and macOS only"
            return 1
            ;;
    esac
}

detect_shell() {
    local shell_name
    shell_name=$(basename "$SHELL")

    case "$shell_name" in
        bash|zsh)
            debug "Detected shell: $shell_name"
            return 0
            ;;
        *)
            warn "Shell '$shell_name' may not be fully supported"
            warn "The System is optimized for bash and zsh"
            return 0
            ;;
    esac
}

# Dependency checking
check_command() {
    local cmd="$1"
    local required="${2:-true}"

    if command -v "$cmd" &> /dev/null; then
        debug "✓ Found command: $cmd"
        return 0
    else
        if [[ "$required" == "true" ]]; then
            error "✗ Required command not found: $cmd"
            return 1
        else
            warn "○ Optional command not found: $cmd"
            return 0
        fi
    fi
}

check_node_version() {
    local version
    if ! version=$(node --version 2>/dev/null); then
        error "Node.js is not installed"
        return 1
    fi

    local major_version
    major_version=$(echo "$version" | sed 's/v//' | cut -d'.' -f1)

    if [[ "$major_version" -lt "$MIN_NODE_VERSION" ]]; then
        error "Node.js version $major_version found, but version $MIN_NODE_VERSION+ required"
        error "Current version: $version"
        return 1
    fi

    debug "✓ Node.js version: $version (>= v$MIN_NODE_VERSION)"
    return 0
}

check_claude_code() {
    local claude_path="$1"

    if [[ -n "$claude_path" ]]; then
        if [[ -x "$claude_path" ]]; then
            debug "✓ Claude Code found at: $claude_path"
            return 0
        else
            error "Claude Code not found or not executable at: $claude_path"
            return 1
        fi
    fi

    # Try common locations
    local common_paths=(
        "claude"
        "$HOME/.local/bin/claude"
        "/usr/local/bin/claude"
        "/opt/claude/claude"
    )

    for path in "${common_paths[@]}"; do
        if command -v "$path" &> /dev/null; then
            CLAUDE_CODE_PATH="$path"
            debug "✓ Claude Code found: $path"
            return 0
        fi
    done

    warn "Claude Code not found in common locations"
    warn "Please ensure Claude Code is installed and in your PATH"
    warn "Visit: https://claude.com/claude-code for installation instructions"
    return 0  # Don't fail installation, just warn
}

check_dependencies() {
    if [[ "$SKIP_DEPS" == "true" ]]; then
        warn "Skipping dependency checks (--skip-deps)"
        return 0
    fi

    log "Checking system dependencies..."

    local failed=false

    # Check required commands
    for cmd in "${REQUIRED_COMMANDS[@]}"; do
        if ! check_command "$cmd"; then
            failed=true
        fi
    done

    # Check Node.js version specifically
    if ! check_node_version; then
        failed=true
    fi

    # Check Claude Code (warning only)
    check_claude_code "$CLAUDE_CODE_PATH"

    if [[ "$failed" == "true" ]]; then
        error "Dependency checks failed"
        error "Please install missing dependencies and try again"
        return 1
    fi

    success "All dependencies satisfied"
    return 0
}

# Installation functions
create_install_directory() {
    debug "Creating installation directory: $INSTALL_DIR"

    if [[ -d "$INSTALL_DIR" ]]; then
        warn "Installation directory already exists: $INSTALL_DIR"

        if [[ -d "$INSTALL_DIR/.git" ]]; then
            log "Existing installation detected - will update to latest version"
        else
            if confirm "Directory exists but is not a System installation. Continue?" "y"; then
                log "Proceeding with installation..."
            else
                error "Installation cancelled by user"
                return 1
            fi
        fi
    fi

    mkdir -p "$INSTALL_DIR" || {
        error "Failed to create installation directory: $INSTALL_DIR"
        return 1
    }

    debug "✓ Installation directory ready"
}

clone_repository() {
    log "Downloading The System framework..."

    # Remove existing directory if it exists
    if [[ -d "$INSTALL_DIR/.git" ]]; then
        debug "Existing git repository found, updating..."
        cd "$INSTALL_DIR"

        # Use spinner for git fetch
        (git fetch origin main --quiet) &
        local pid=$!
        spinner "$pid" "Fetching latest updates..."
        if [[ $? -ne 0 ]]; then
            error "Failed to fetch updates"
            return 1
        fi

        git reset --hard origin/main --quiet || {
            error "Failed to reset to latest version"
            return 1
        }
        log "Updated to latest version"
    else
        debug "Cloning repository..."

        # Use progress indicator for git clone
        {
            echo "Cloning into '$INSTALL_DIR'..."
            git clone "$REPO_URL" "$INSTALL_DIR" --progress 2>&1
        } &
        local pid=$!
        spinner "$pid" "Downloading framework..."

        if [[ $? -ne 0 ]]; then
            error "Failed to clone repository: $REPO_URL"
            return 1
        fi
    fi

    cd "$INSTALL_DIR"
    success "Framework downloaded successfully"
}

install_npm_dependencies() {
    log "Installing Node.js dependencies..."

    cd "$INSTALL_DIR"

    # Check if package.json exists
    if [[ ! -f "package.json" ]]; then
        debug "No package.json found, skipping npm install"
        return 0
    fi

    # Use spinner for npm install
    (npm install --production --silent) &
    local pid=$!
    spinner "$pid" "Installing dependencies..."

    if [[ $? -ne 0 ]]; then
        error "Failed to install npm dependencies"
        return 1
    fi

    success "Dependencies installed"
}

setup_shell_integration() {
    local shell_name
    shell_name=$(basename "$SHELL")

    local rc_file
    case "$shell_name" in
        bash)
            rc_file="$HOME/.bashrc"
            [[ -f "$HOME/.bash_profile" ]] && rc_file="$HOME/.bash_profile"
            ;;
        zsh)
            rc_file="$HOME/.zshrc"
            ;;
        *)
            warn "Unsupported shell for integration: $shell_name"
            return 0
            ;;
    esac

    # Check if alias already exists
    if grep -q "alias ts=" "$rc_file" 2>/dev/null; then
        debug "Shell alias already exists in $rc_file"
        return 0
    fi

    # Ask user if they want shell integration
    if confirm "Add 'ts' command for quick access to The System?" "y"; then
        log "Setting up shell integration..."

        local alias_line="alias ts='cd \"$INSTALL_DIR\" && claude'"

        echo "" >> "$rc_file"
        echo "# The System framework integration" >> "$rc_file"
        echo "$alias_line" >> "$rc_file"
        success "Shell integration added to $rc_file"
        log "Restart your shell or run: ${CYAN}source $rc_file${NC}"
    else
        log "Skipping shell integration"
        log "You can access The System by: ${CYAN}cd $INSTALL_DIR && claude${NC}"
    fi
}

run_verification() {
    log "Running installation verification..."

    cd "$INSTALL_DIR"

    if [[ -f "scripts/verify-the-system.sh" ]]; then
        chmod +x "scripts/verify-the-system.sh"
        if ./scripts/verify-the-system.sh; then
            success "Installation verification passed"
        else
            warn "Installation verification had issues (but installation completed)"
        fi
    else
        debug "Verification script not found, skipping"
    fi
}

show_completion_message() {
    echo ""
    success "🎉 The System installation completed successfully!"
    echo ""
    echo -e "${PURPLE}Installation Details:${NC}"
    echo -e "  📁 Location: ${CYAN}$INSTALL_DIR${NC}"
    echo -e "  🏢 Agents: ${CYAN}19 specialized AI agents${NC}"
    echo -e "  ⚡ Commands: ${CYAN}48+ framework commands${NC}"
    echo -e "  📚 Documentation: ${CYAN}$INSTALL_DIR/docs/${NC}"
    echo ""
    echo -e "${PURPLE}Getting Started:${NC}"
    echo -e "  1. ${BLUE}cd $INSTALL_DIR${NC}"
    echo -e "  2. ${BLUE}claude${NC}"
    echo -e "  3. ${BLUE}/ts-help${NC}                    # Browse all commands"
    echo -e "  4. ${BLUE}/ts-new-project my-app${NC}      # Start your first project"
    echo ""
    echo -e "${PURPLE}Quick Start Options:${NC}"
    echo -e "  🚀 ${BLUE}/ts-turbo my-app \"Your idea\"${NC}  # Autonomous development"
    echo -e "  📖 ${BLUE}/ts-quickref${NC}                  # Command reference"
    echo -e "  💡 ${BLUE}/ts-brief${NC}                     # Framework overview"
    echo ""
    echo -e "${PURPLE}Shell Integration:${NC}"
    echo -e "  Run ${BLUE}source ~/.$(basename "$SHELL")rc${NC} or restart your shell"
    echo -e "  Then use ${BLUE}ts${NC} from anywhere to enter The System"
    echo ""
    echo -e "${GREEN}Happy building! 🏗️${NC}"
}

# Argument parsing
parse_arguments() {
    while [[ $# -gt 0 ]]; do
        case $1 in
            -d|--dir)
                INSTALL_DIR="$2"
                shift 2
                ;;
            -v|--verbose)
                VERBOSE=true
                shift
                ;;
            -s|--skip-deps)
                SKIP_DEPS=true
                shift
                ;;
            -c|--claude-path)
                CLAUDE_CODE_PATH="$2"
                shift 2
                ;;
            -n|--non-interactive)
                INTERACTIVE=false
                shift
                ;;
            -h|--help)
                show_help
                exit 0
                ;;
            *)
                error "Unknown option: $1"
                error "Use --help for usage information"
                exit 1
                ;;
        esac
    done

    # Set default install directory if not provided
    if [[ -z "$INSTALL_DIR" ]]; then
        INSTALL_DIR="$DEFAULT_INSTALL_DIR"
    fi
}

# Main installation function
main() {
    # Parse command line arguments
    parse_arguments "$@"

    # Show installation header
    echo ""
    echo -e "${BLUE}┌─────────────────────────────────────────────┐${NC}"
    echo -e "${BLUE}│                                             │${NC}"
    echo -e "${BLUE}│           ${PURPLE}The System${NC} ${BLUE}Installation${NC}          ${BLUE}│${NC}"
    echo -e "${BLUE}│                                             │${NC}"
    echo -e "${BLUE}│     ${CYAN}Autonomous Software Development${NC}      ${BLUE}│${NC}"
    echo -e "${BLUE}│            ${CYAN}Organization Framework${NC}           ${BLUE}│${NC}"
    echo -e "${BLUE}│                                             │${NC}"
    echo -e "${BLUE}└─────────────────────────────────────────────┘${NC}"
    echo ""

    debug "Installation directory: $INSTALL_DIR"
    debug "Verbose mode: $VERBOSE"
    debug "Skip dependencies: $SKIP_DEPS"
    debug "Claude Code path: ${CLAUDE_CODE_PATH:-auto-detect}"
    debug "Interactive mode: $INTERACTIVE"

    # System compatibility checks
    show_step 1 7 "System Compatibility Check"
    detect_system || exit 1
    detect_shell

    # Dependency checks
    show_step 2 7 "Dependency Verification"
    check_dependencies || exit 1

    # Installation steps
    show_step 3 7 "Prepare Installation Directory"
    create_install_directory || exit 1

    show_step 4 7 "Download Framework"
    clone_repository || exit 1

    show_step 5 7 "Install Dependencies"
    install_npm_dependencies || exit 1

    show_step 6 7 "Configure Shell Integration"
    setup_shell_integration || exit 1

    show_step 7 7 "Verify Installation"
    run_verification || exit 1

    # Show completion message
    show_completion_message

    exit 0
}

# Error handling
trap 'error "Installation failed due to an error on line $LINENO"; exit 1' ERR

# Run main function with all arguments
main "$@"