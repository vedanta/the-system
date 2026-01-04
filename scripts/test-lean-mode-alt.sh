#!/bin/bash
# Lean Documentation Mode Validation Script (Alternative using script command)

set -e

echo "🧪 Testing Lean Documentation Mode Implementation..."

# Test configuration
TEST_PROJECT="lean-mode-test"
MAX_TIME=180  # 3 minutes
MAX_FILES=2   # README.md + DEPLOYMENT.md only

# Clean previous tests
echo "🧹 Cleaning previous test..."
rm -rf output/${TEST_PROJECT}

# Run lean mode test
echo "🚀 Starting lean mode test..."
start_time=$(date +%s)

# Execute turbo mode with explicit lean flag using script command
# Create a temporary script file
TEMP_SCRIPT=$(mktemp)
cat > "$TEMP_SCRIPT" << 'SCRIPT_EOF'
/ts-turbo lean-mode-test "Simple calculator app" --docs=lean
SCRIPT_EOF

# Run using script command to provide a pty
if command -v script >/dev/null 2>&1; then
    # Linux/macOS script command
    if [[ "$OSTYPE" == "darwin"* ]]; then
        # macOS version
        script -q /dev/null claude < "$TEMP_SCRIPT"
    else
        # Linux version
        script -qec "claude < $TEMP_SCRIPT" /dev/null
    fi
else
    echo "❌ 'script' command not found. Trying direct execution..."
    echo "/ts-turbo lean-mode-test \"Simple calculator app\" --docs=lean" | claude
fi

# Clean up
rm -f "$TEMP_SCRIPT"

end_time=$(date +%s)
execution_time=$((end_time - start_time))

# Count generated documentation files (excluding node_modules)
doc_files=$(find output/${TEST_PROJECT} -maxdepth 3 -name "*.md" -o -name "*.txt" | \
           grep -v node_modules | grep -v "/release/" | wc -l)

# Display results
echo ""
echo "📊 Lean Mode Test Results:"
echo "⏱️  Execution Time: ${execution_time}s (target: <${MAX_TIME}s)"
echo "📄 Documentation Files: ${doc_files} (target: ≤${MAX_FILES})"

# List generated files for analysis
echo ""
echo "📁 Generated Documentation Files:"
find output/${TEST_PROJECT} -maxdepth 3 -name "*.md" -o -name "*.txt" | \
grep -v node_modules | grep -v "/release/" | sort

# Validate results
echo ""
echo "🔍 Validation Results:"

if [ $execution_time -le $MAX_TIME ]; then
  echo "✅ PASS: Execution time within limits"
else
  echo "❌ FAIL: Execution time exceeded ${MAX_TIME}s"
  exit 1
fi

if [ $doc_files -le $MAX_FILES ]; then
  echo "✅ PASS: File count within limits"
else
  echo "❌ FAIL: Too many documentation files generated"
  echo "Expected: ≤${MAX_FILES}, Actual: ${doc_files}"
  exit 1
fi

# Check specific agent compliance
echo ""
echo "🤖 Agent Compliance Check:"

# Security files check
security_files=$(find output/${TEST_PROJECT}/security -name "*.md" -o -name "*.txt" 2>/dev/null | wc -l)
if [ $security_files -le 1 ]; then
  echo "✅ Security Engineer: COMPLIANT (${security_files} file)"
else
  echo "❌ Security Engineer: NON-COMPLIANT (${security_files} files)"
fi

# Release files check
release_files=$(find output/${TEST_PROJECT} -name "CHANGELOG.md" -o -name "RELEASE_NOTES.md" 2>/dev/null | wc -l)
if [ $release_files -eq 0 ]; then
  echo "✅ Release Engineer: COMPLIANT (version bump only)"
else
  echo "❌ Release Engineer: NON-COMPLIANT (${release_files} release docs found)"
fi

# Infrastructure files check
infra_files=$(find output/${TEST_PROJECT}/infra -name "*.md" 2>/dev/null | wc -l)
if [ $infra_files -eq 0 ]; then
  echo "✅ DevOps Engineer: COMPLIANT (basic script only)"
else
  echo "❌ DevOps Engineer: NON-COMPLIANT (${infra_files} infra docs found)"
fi

echo ""
echo "🎉 Lean documentation mode test PASSED!"
echo "🚀 Framework is ready for fast turbo execution"