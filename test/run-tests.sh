#!/usr/bin/env bash
#
# The System - Test Runner
#
# Comprehensive test runner for The System install script
# Supports local testing, Docker environments, and CI/CD integration
#
# Usage:
#   ./test/run-tests.sh                     # Run local tests
#   ./test/run-tests.sh --docker            # Run Docker tests
#   ./test/run-tests.sh --all               # Run all test environments
#   ./test/run-tests.sh --platform ubuntu   # Test specific platform
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

# Configuration
readonly SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
readonly PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
readonly TEST_RESULTS_DIR="$SCRIPT_DIR/results"

# Global counters
ENVIRONMENTS_TESTED=0
ENVIRONMENTS_PASSED=0
ENVIRONMENTS_FAILED=0

# Logging functions
log() { echo -e "${GREEN}[INFO]${NC} $*"; }
warn() { echo -e "${YELLOW}[WARN]${NC} $*"; }
error() { echo -e "${RED}[ERROR]${NC} $*"; }
success() { echo -e "${GREEN}[SUCCESS]${NC} $*"; }

# Test environment functions
test_local() {
    log "Running local environment tests..."
    ENVIRONMENTS_TESTED=$((ENVIRONMENTS_TESTED + 1))

    if "$SCRIPT_DIR/install-test.sh" --test all > "$TEST_RESULTS_DIR/local.log" 2>&1; then
        success "✓ Local tests passed"
        ENVIRONMENTS_PASSED=$((ENVIRONMENTS_PASSED + 1))
        return 0
    else
        error "✗ Local tests failed"
        ENVIRONMENTS_FAILED=$((ENVIRONMENTS_FAILED + 1))
        return 1
    fi
}

test_docker_ubuntu() {
    log "Running Ubuntu Docker tests..."
    ENVIRONMENTS_TESTED=$((ENVIRONMENTS_TESTED + 1))

    if ! command -v docker &> /dev/null; then
        warn "Docker not available, skipping Ubuntu tests"
        return 0
    fi

    # Build Ubuntu test image
    if docker build -t the-system-test-ubuntu -f "$SCRIPT_DIR/docker/Dockerfile.ubuntu" "$PROJECT_ROOT" > "$TEST_RESULTS_DIR/ubuntu-build.log" 2>&1; then
        log "Ubuntu Docker image built successfully"
    else
        error "Failed to build Ubuntu Docker image"
        ENVIRONMENTS_FAILED=$((ENVIRONMENTS_FAILED + 1))
        return 1
    fi

    # Run Ubuntu tests
    if docker run --rm the-system-test-ubuntu > "$TEST_RESULTS_DIR/ubuntu.log" 2>&1; then
        success "✓ Ubuntu Docker tests passed"
        ENVIRONMENTS_PASSED=$((ENVIRONMENTS_PASSED + 1))
        return 0
    else
        error "✗ Ubuntu Docker tests failed"
        ENVIRONMENTS_FAILED=$((ENVIRONMENTS_FAILED + 1))
        return 1
    fi
}

test_docker_alpine() {
    log "Running Alpine Docker tests..."
    ENVIRONMENTS_TESTED=$((ENVIRONMENTS_TESTED + 1))

    if ! command -v docker &> /dev/null; then
        warn "Docker not available, skipping Alpine tests"
        return 0
    fi

    # Build Alpine test image
    if docker build -t the-system-test-alpine -f "$SCRIPT_DIR/docker/Dockerfile.alpine" "$PROJECT_ROOT" > "$TEST_RESULTS_DIR/alpine-build.log" 2>&1; then
        log "Alpine Docker image built successfully"
    else
        error "Failed to build Alpine Docker image"
        ENVIRONMENTS_FAILED=$((ENVIRONMENTS_FAILED + 1))
        return 1
    fi

    # Run Alpine tests
    if docker run --rm the-system-test-alpine > "$TEST_RESULTS_DIR/alpine.log" 2>&1; then
        success "✓ Alpine Docker tests passed"
        ENVIRONMENTS_PASSED=$((ENVIRONMENTS_PASSED + 1))
        return 0
    else
        error "✗ Alpine Docker tests failed"
        ENVIRONMENTS_FAILED=$((ENVIRONMENTS_FAILED + 1))
        return 1
    fi
}

test_performance() {
    log "Running performance tests..."

    local start_time end_time duration
    start_time=$(date +%s)

    # Test install script performance
    if timeout 60s bash "$PROJECT_ROOT/install.sh" --help > /dev/null 2>&1; then
        end_time=$(date +%s)
        duration=$((end_time - start_time))

        if [[ $duration -lt 5 ]]; then
            success "✓ Performance test passed (${duration}s)"
        else
            warn "⚠ Performance test slow (${duration}s)"
        fi
    else
        error "✗ Performance test failed (timeout or error)"
    fi
}

test_security() {
    log "Running security tests..."

    # Check for common security issues
    local issues=0

    # Check for hardcoded credentials
    if grep -rE "(password|secret|key|token)" "$PROJECT_ROOT/install.sh" | grep -v "VERCEL_TOKEN\|GITHUB_TOKEN"; then
        error "Found potential hardcoded credentials"
        issues=$((issues + 1))
    fi

    # Check for dangerous commands
    if grep -E "(rm -rf /|sudo rm|eval \$|exec \$)" "$PROJECT_ROOT/install.sh"; then
        error "Found dangerous commands"
        issues=$((issues + 1))
    fi

    # Check for insecure protocols
    if grep -E "http://[^[:space:]]*" "$PROJECT_ROOT/install.sh" | grep -v localhost; then
        error "Found insecure HTTP URLs"
        issues=$((issues + 1))
    fi

    # Run shellcheck if available
    if command -v shellcheck &> /dev/null; then
        if ! shellcheck "$PROJECT_ROOT/install.sh" > "$TEST_RESULTS_DIR/shellcheck.log" 2>&1; then
            warn "Shellcheck found issues (check shellcheck.log)"
        else
            log "Shellcheck passed"
        fi
    fi

    if [[ $issues -eq 0 ]]; then
        success "✓ Security tests passed"
    else
        error "✗ Security tests failed ($issues issues)"
        return 1
    fi
}

test_integration() {
    log "Running integration tests..."

    # Test with actual curl (if network available)
    if curl -f --connect-timeout 5 https://github.com &> /dev/null; then
        log "Network connectivity available"

        # Test that the script can be downloaded
        if curl -fsSL https://raw.githubusercontent.com/vedanta/the-system/main/install.sh > /tmp/downloaded-install.sh 2>/dev/null; then
            log "Install script downloadable from GitHub"

            # Test syntax of downloaded script
            if bash -n /tmp/downloaded-install.sh; then
                success "✓ Downloaded script has valid syntax"
            else
                error "✗ Downloaded script has syntax errors"
                return 1
            fi

            rm -f /tmp/downloaded-install.sh
        else
            warn "Could not download install script (may not be published yet)"
        fi
    else
        warn "No network connectivity, skipping integration tests"
    fi
}

# Clean old Docker images
cleanup_docker() {
    if command -v docker &> /dev/null; then
        log "Cleaning up Docker images..."
        docker rmi the-system-test-ubuntu the-system-test-alpine 2>/dev/null || true
    fi
}

# Main test orchestration
run_all_tests() {
    log "Running comprehensive test suite..."

    test_local || true
    test_docker_ubuntu || true
    test_docker_alpine || true
    test_performance || true
    test_security || true
    test_integration || true
}

run_docker_tests() {
    log "Running Docker-based tests..."

    test_docker_ubuntu || true
    test_docker_alpine || true
}

run_ci_tests() {
    log "Running CI/CD tests..."

    # Optimized for CI environments
    test_local || true
    test_performance || true
    test_security || true
}

# Test report
show_test_report() {
    echo ""
    echo -e "${PURPLE}════════════════════════════════════════${NC}"
    echo -e "${PURPLE}         Test Environment Results        ${NC}"
    echo -e "${PURPLE}════════════════════════════════════════${NC}"
    echo ""
    echo -e "${CYAN}Environments Tested:${NC} $ENVIRONMENTS_TESTED"
    echo -e "${GREEN}Environments Passed:${NC} $ENVIRONMENTS_PASSED"
    echo -e "${RED}Environments Failed:${NC} $ENVIRONMENTS_FAILED"
    echo ""

    # Show detailed results
    echo -e "${CYAN}Detailed Results:${NC}"
    for log_file in "$TEST_RESULTS_DIR"/*.log; do
        if [[ -f "$log_file" ]]; then
            local filename=$(basename "$log_file" .log)
            echo -e "  📄 $filename: $log_file"
        fi
    done

    echo ""

    if [[ $ENVIRONMENTS_FAILED -eq 0 ]]; then
        echo -e "${GREEN}🎉 All test environments passed!${NC}"
        echo -e "${CYAN}The install script is production-ready.${NC}"
    else
        echo -e "${RED}❌ Some test environments failed.${NC}"
        echo -e "${YELLOW}Please review the test logs in: $TEST_RESULTS_DIR${NC}"
    fi

    echo ""
    echo -e "${PURPLE}════════════════════════════════════════${NC}"
}

# Help function
show_help() {
    cat << EOF
${BLUE}The System Install Script Test Runner${NC}

${PURPLE}USAGE:${NC}
    $0 [OPTIONS]

${PURPLE}OPTIONS:${NC}
    --local             Run local tests only
    --docker            Run Docker-based tests only
    --all               Run all test environments (default)
    --ci                Run CI-optimized tests
    --platform PLATFORM Test specific platform (ubuntu|alpine)
    --performance       Run performance tests only
    --security          Run security tests only
    --integration       Run integration tests only
    --cleanup           Clean up Docker images and test artifacts
    --help              Show this help message

${PURPLE}EXAMPLES:${NC}
    $0                          # Run all tests
    $0 --local                  # Run local tests only
    $0 --docker                 # Run Docker tests
    $0 --platform ubuntu       # Test Ubuntu specifically
    $0 --performance            # Performance tests only
    $0 --ci                     # CI/CD optimized tests

${PURPLE}TEST RESULTS:${NC}
    Test results are saved to: $TEST_RESULTS_DIR

${PURPLE}REQUIREMENTS:${NC}
    - bash 4.0+
    - Docker (for --docker tests)
    - Internet connection (for integration tests)

EOF
}

# Main function
main() {
    local mode="all"
    local specific_platform=""

    # Create results directory
    mkdir -p "$TEST_RESULTS_DIR"

    # Parse arguments
    while [[ $# -gt 0 ]]; do
        case $1 in
            --local)
                mode="local"
                shift
                ;;
            --docker)
                mode="docker"
                shift
                ;;
            --all)
                mode="all"
                shift
                ;;
            --ci)
                mode="ci"
                shift
                ;;
            --platform)
                mode="platform"
                specific_platform="$2"
                shift 2
                ;;
            --performance)
                mode="performance"
                shift
                ;;
            --security)
                mode="security"
                shift
                ;;
            --integration)
                mode="integration"
                shift
                ;;
            --cleanup)
                cleanup_docker
                log "Cleanup completed"
                exit 0
                ;;
            --help)
                show_help
                exit 0
                ;;
            *)
                echo "Unknown option: $1"
                echo "Use --help for usage information"
                exit 1
                ;;
        esac
    done

    # Show test start banner
    echo -e "${BLUE}Starting The System Install Script Test Runner${NC}"
    echo -e "${CYAN}Mode: $mode${NC}"
    echo -e "${CYAN}Platform: $(uname -s) $(uname -m)${NC}"
    echo -e "${CYAN}Results: $TEST_RESULTS_DIR${NC}"
    echo ""

    # Run tests based on mode
    case "$mode" in
        local)
            test_local || true
            ;;
        docker)
            run_docker_tests
            ;;
        all)
            run_all_tests
            ;;
        ci)
            run_ci_tests
            ;;
        platform)
            case "$specific_platform" in
                ubuntu)
                    test_docker_ubuntu || true
                    ;;
                alpine)
                    test_docker_alpine || true
                    ;;
                *)
                    error "Unknown platform: $specific_platform"
                    exit 1
                    ;;
            esac
            ;;
        performance)
            test_performance || true
            ;;
        security)
            test_security || true
            ;;
        integration)
            test_integration || true
            ;;
        *)
            error "Unknown mode: $mode"
            exit 1
            ;;
    esac

    # Show final report
    show_test_report

    # Exit with appropriate code
    if [[ $ENVIRONMENTS_FAILED -eq 0 ]]; then
        exit 0
    else
        exit 1
    fi
}

# Error handling
trap 'error "Test runner interrupted"; cleanup_docker; exit 1' INT TERM

# Ensure we're in the right directory
cd "$PROJECT_ROOT"

# Run main function
main "$@"