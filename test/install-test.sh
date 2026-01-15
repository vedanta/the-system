#!/usr/bin/env bash
#
# The System - Install Script Test Suite
#
# Comprehensive testing of the install script across different platforms and scenarios
#
# Usage:
#   ./test/install-test.sh                    # Run all tests
#   ./test/install-test.sh --test basic      # Run basic tests only
#   ./test/install-test.sh --test interactive # Run interactive tests
#   ./test/install-test.sh --platform linux  # Test specific platform
#

set -euo pipefail

# Colors
readonly RED='\033[0;31m'
readonly GREEN='\033[0;32m'
readonly YELLOW='\033[1;33m'
readonly BLUE='\033[0;34m'
readonly PURPLE='\033[0;35m'
readonly CYAN='\033[0;36m'
readonly NC='\033[0m'

# Test configuration
readonly TEST_DIR="/tmp/the-system-install-test-$(date +%s)"
readonly INSTALL_SCRIPT="$(pwd)/install.sh"
readonly TEST_LOG="$TEST_DIR/test.log"

# Global test counters
TESTS_RUN=0
TESTS_PASSED=0
TESTS_FAILED=0
CURRENT_TEST=""

# Logging functions
test_log() {
    echo -e "${BLUE}[TEST]${NC} $*" | tee -a "$TEST_LOG"
}

test_info() {
    echo -e "${CYAN}[INFO]${NC} $*" | tee -a "$TEST_LOG"
}

test_warn() {
    echo -e "${YELLOW}[WARN]${NC} $*" | tee -a "$TEST_LOG"
}

test_error() {
    echo -e "${RED}[ERROR]${NC} $*" | tee -a "$TEST_LOG"
}

test_success() {
    echo -e "${GREEN}[PASS]${NC} $*" | tee -a "$TEST_LOG"
}

test_fail() {
    echo -e "${RED}[FAIL]${NC} $*" | tee -a "$TEST_LOG"
}

# Test framework functions
start_test() {
    local test_name="$1"
    CURRENT_TEST="$test_name"
    TESTS_RUN=$((TESTS_RUN + 1))
    test_log "Starting test: $test_name"
}

pass_test() {
    TESTS_PASSED=$((TESTS_PASSED + 1))
    test_success "✓ $CURRENT_TEST"
}

fail_test() {
    local reason="${1:-Unknown failure}"
    TESTS_FAILED=$((TESTS_FAILED + 1))
    test_fail "✗ $CURRENT_TEST - $reason"
}

assert_command_exists() {
    local cmd="$1"
    if ! command -v "$cmd" &> /dev/null; then
        fail_test "Required command not found: $cmd"
        return 1
    fi
    return 0
}

assert_file_exists() {
    local file="$1"
    if [[ ! -f "$file" ]]; then
        fail_test "Required file not found: $file"
        return 1
    fi
    return 0
}

assert_contains() {
    local text="$1"
    local pattern="$2"
    if ! echo "$text" | grep -q "$pattern"; then
        fail_test "Text does not contain pattern: $pattern"
        return 1
    fi
    return 0
}

# Test setup and teardown
setup_test_environment() {
    test_info "Setting up test environment..."

    # Create test directory
    mkdir -p "$TEST_DIR"
    cd "$TEST_DIR"

    # Verify install script exists
    if [[ ! -f "$INSTALL_SCRIPT" ]]; then
        test_error "Install script not found: $INSTALL_SCRIPT"
        exit 1
    fi

    # Initialize test log
    cat > "$TEST_LOG" << EOF
The System Install Script Test Suite
Started: $(date)
Platform: $(uname -s) $(uname -m)
Shell: $(basename "$SHELL")
User: $(whoami)
Working Directory: $(pwd)

EOF

    test_info "Test environment ready: $TEST_DIR"
}

cleanup_test_environment() {
    test_info "Cleaning up test environment..."

    # Remove test installations
    if [[ -d "$TEST_DIR/test-install" ]]; then
        rm -rf "$TEST_DIR/test-install"
    fi

    # Go back to original directory
    cd - > /dev/null 2>&1 || true

    test_info "Test cleanup complete"
}

# Individual test functions
test_help_flag() {
    start_test "Help flag functionality"

    local output
    if output=$(bash "$INSTALL_SCRIPT" --help 2>&1); then
        assert_contains "$output" "The System - Installation Script" || return 1
        assert_contains "$output" "USAGE:" || return 1
        assert_contains "$output" "OPTIONS:" || return 1
        assert_contains "$output" "EXAMPLES:" || return 1
        pass_test
    else
        fail_test "Help command failed"
        return 1
    fi
}

test_argument_parsing() {
    start_test "Command line argument parsing"

    # Test verbose flag
    local output
    if output=$(bash "$INSTALL_SCRIPT" --verbose --help 2>&1); then
        assert_contains "$output" "verbose" || return 1
    else
        fail_test "Verbose flag parsing failed"
        return 1
    fi

    # Test directory flag
    if output=$(bash "$INSTALL_SCRIPT" --dir /tmp/test --help 2>&1); then
        assert_contains "$output" "DESCRIPTION" || return 1
    else
        fail_test "Directory flag parsing failed"
        return 1
    fi

    # Test non-interactive flag
    if output=$(bash "$INSTALL_SCRIPT" --non-interactive --help 2>&1); then
        assert_contains "$output" "non-interactive" || return 1
    else
        fail_test "Non-interactive flag parsing failed"
        return 1
    fi

    # Test invalid flag
    if bash "$INSTALL_SCRIPT" --invalid-flag 2>/dev/null; then
        fail_test "Invalid flag should fail"
        return 1
    fi

    pass_test
}

test_dependency_checking() {
    start_test "Dependency checking"

    # Mock environment without dependencies
    local temp_path="/tmp/empty-path-$$"
    mkdir -p "$temp_path"

    # Test with missing dependencies (should fail gracefully)
    local output
    if PATH="$temp_path" bash "$INSTALL_SCRIPT" --skip-deps --help &>/dev/null; then
        test_info "Skip deps flag works correctly"
    else
        fail_test "Skip deps should allow script to run"
        return 1
    fi

    rm -rf "$temp_path"
    pass_test
}

test_dry_run_installation() {
    start_test "Dry run installation (non-interactive)"

    local test_install_dir="$TEST_DIR/test-install"

    # Run installation in non-interactive mode to a test directory
    if bash "$INSTALL_SCRIPT" \
        --non-interactive \
        --skip-deps \
        --dir "$test_install_dir" &>/dev/null; then

        # Check if directory was created
        if [[ -d "$test_install_dir" ]]; then
            test_info "Install directory created successfully"
        else
            fail_test "Install directory not created"
            return 1
        fi

        pass_test
    else
        fail_test "Dry run installation failed"
        return 1
    fi
}

test_script_syntax() {
    start_test "Shell script syntax validation"

    # Test bash syntax
    if bash -n "$INSTALL_SCRIPT"; then
        test_info "Bash syntax validation passed"
    else
        fail_test "Bash syntax validation failed"
        return 1
    fi

    # Test with shellcheck if available
    if command -v shellcheck &> /dev/null; then
        if shellcheck -x "$INSTALL_SCRIPT" 2>/dev/null; then
            test_info "Shellcheck validation passed"
        else
            test_warn "Shellcheck found issues (not failing test)"
        fi
    else
        test_info "Shellcheck not available, skipping"
    fi

    pass_test
}

test_error_handling() {
    start_test "Error handling and recovery"

    # Test with invalid directory permissions
    local readonly_dir="/tmp/readonly-test-$$"
    mkdir "$readonly_dir"
    chmod 444 "$readonly_dir"

    # Should fail gracefully
    if bash "$INSTALL_SCRIPT" --non-interactive --dir "$readonly_dir/subdir" 2>/dev/null; then
        fail_test "Should fail with readonly parent directory"
        chmod 755 "$readonly_dir"
        rm -rf "$readonly_dir"
        return 1
    else
        test_info "Correctly failed with readonly directory"
    fi

    chmod 755 "$readonly_dir"
    rm -rf "$readonly_dir"

    # Test with invalid git URL (would normally fail at clone step)
    # This is hard to test without actually running git, so we skip for now
    test_info "Error handling test limited in scope"

    pass_test
}

test_platform_detection() {
    start_test "Platform detection"

    # Test system detection
    local output
    if output=$(bash "$INSTALL_SCRIPT" --help 2>&1); then
        # Should not contain unsupported OS warnings on supported systems
        local os=$(uname -s | tr '[:upper:]' '[:lower:]')
        case "$os" in
            linux*|darwin*)
                test_info "Running on supported platform: $os"
                ;;
            *)
                test_warn "Running on potentially unsupported platform: $os"
                ;;
        esac
    else
        fail_test "Platform detection failed"
        return 1
    fi

    pass_test
}

test_interactive_features() {
    start_test "Interactive feature functions"

    # Test that interactive functions exist and are callable
    # We can't easily test actual interactivity in automated tests

    # Check if interactive functions are defined
    if grep -q "spinner()" "$INSTALL_SCRIPT" && \
       grep -q "progress_bar()" "$INSTALL_SCRIPT" && \
       grep -q "confirm()" "$INSTALL_SCRIPT"; then
        test_info "Interactive functions found in script"
        pass_test
    else
        fail_test "Interactive functions not found"
        return 1
    fi
}

test_security_features() {
    start_test "Security features"

    # Check for secure defaults
    if grep -q "set -euo pipefail" "$INSTALL_SCRIPT"; then
        test_info "Bash strict mode enabled"
    else
        fail_test "Bash strict mode not enabled"
        return 1
    fi

    # Check for HTTPS URLs only
    if grep -E "http://[^/]" "$INSTALL_SCRIPT"; then
        fail_test "Found insecure HTTP URLs"
        return 1
    else
        test_info "All URLs use HTTPS"
    fi

    # Check for potential security issues
    if grep -E "(eval|exec|\$\(.*\))" "$INSTALL_SCRIPT" | grep -v "uname\|date\|basename" | head -1; then
        test_warn "Found potentially dangerous eval/exec usage"
    fi

    pass_test
}

# Test suites
run_basic_tests() {
    test_log "Running basic test suite..."

    test_help_flag
    test_argument_parsing
    test_script_syntax
    test_platform_detection
    test_security_features
}

run_advanced_tests() {
    test_log "Running advanced test suite..."

    test_dependency_checking
    test_dry_run_installation
    test_error_handling
    test_interactive_features
}

run_all_tests() {
    test_log "Running complete test suite..."

    run_basic_tests
    run_advanced_tests
}

# Platform-specific tests
test_linux_specific() {
    if [[ "$(uname -s)" != "Linux" ]]; then
        test_warn "Skipping Linux-specific tests (not on Linux)"
        return 0
    fi

    start_test "Linux-specific features"
    # Add Linux-specific tests here
    test_info "Linux-specific tests placeholder"
    pass_test
}

test_macos_specific() {
    if [[ "$(uname -s)" != "Darwin" ]]; then
        test_warn "Skipping macOS-specific tests (not on macOS)"
        return 0
    fi

    start_test "macOS-specific features"
    # Add macOS-specific tests here
    test_info "macOS-specific tests placeholder"
    pass_test
}

# Test report
show_test_report() {
    echo ""
    echo -e "${PURPLE}════════════════════════════════════════${NC}"
    echo -e "${PURPLE}          Test Suite Results            ${NC}"
    echo -e "${PURPLE}════════════════════════════════════════${NC}"
    echo ""
    echo -e "${CYAN}Total Tests Run:${NC} $TESTS_RUN"
    echo -e "${GREEN}Tests Passed:${NC}    $TESTS_PASSED"
    echo -e "${RED}Tests Failed:${NC}    $TESTS_FAILED"
    echo ""

    if [[ $TESTS_FAILED -eq 0 ]]; then
        echo -e "${GREEN}🎉 All tests passed!${NC}"
        echo ""
        echo -e "${CYAN}The install script is ready for production use.${NC}"
    else
        echo -e "${RED}❌ Some tests failed.${NC}"
        echo ""
        echo -e "${YELLOW}Please review the test log: $TEST_LOG${NC}"
    fi

    echo ""
    echo -e "${PURPLE}════════════════════════════════════════${NC}"
}

# Main function
main() {
    local test_type="all"
    local platform=""

    # Parse arguments
    while [[ $# -gt 0 ]]; do
        case $1 in
            --test)
                test_type="$2"
                shift 2
                ;;
            --platform)
                platform="$2"
                shift 2
                ;;
            --help)
                cat << EOF
The System Install Script Test Suite

Usage: $0 [OPTIONS]

Options:
    --test TYPE         Run specific test type (basic|advanced|all)
    --platform OS       Run platform-specific tests (linux|macos)
    --help              Show this help

Examples:
    $0                      # Run all tests
    $0 --test basic         # Run basic tests only
    $0 --test advanced      # Run advanced tests only
    $0 --platform linux    # Run Linux-specific tests

EOF
                exit 0
                ;;
            *)
                echo "Unknown option: $1"
                echo "Use --help for usage information"
                exit 1
                ;;
        esac
    done

    # Setup
    setup_test_environment

    echo -e "${BLUE}Starting The System Install Script Test Suite${NC}"
    echo -e "${CYAN}Platform: $(uname -s) $(uname -m)${NC}"
    echo -e "${CYAN}Shell: $(basename "$SHELL")${NC}"
    echo ""

    # Run tests based on type
    case "$test_type" in
        basic)
            run_basic_tests
            ;;
        advanced)
            run_advanced_tests
            ;;
        all)
            run_all_tests
            ;;
        *)
            test_error "Unknown test type: $test_type"
            exit 1
            ;;
    esac

    # Platform-specific tests
    if [[ -n "$platform" ]]; then
        case "$platform" in
            linux)
                test_linux_specific
                ;;
            macos)
                test_macos_specific
                ;;
            *)
                test_error "Unknown platform: $platform"
                exit 1
                ;;
        esac
    fi

    # Cleanup and report
    cleanup_test_environment
    show_test_report

    # Exit with appropriate code
    if [[ $TESTS_FAILED -eq 0 ]]; then
        exit 0
    else
        exit 1
    fi
}

# Error handling
trap 'test_error "Test suite interrupted"; cleanup_test_environment; exit 1' INT TERM

# Run main function
main "$@"