#!/bin/bash

# The System - Test Suite Runner
# Runs all tests for the SA feature implementation

echo "🧪 The System - Running All Tests"
echo "================================="

# Change to tests directory
cd "$(dirname "$0")"

echo ""
echo "📋 Test 1: Solution Architect Logic Validation"
echo "----------------------------------------------"
python3 sa-test-runner.py

echo ""
echo "📋 Test 2: SA→EA Integration Testing"
echo "------------------------------------"
python3 sa-ea-integration-test.py

echo ""
echo "🎯 Test Suite Complete"
echo "====================="
echo ""
echo "Review test results above for any failures."
echo "Expected results:"
echo "- SA Logic Tests: 2/5 pass (40% - known signal detection issues)"
echo "- SA→EA Integration: 5/5 pass (100% - production ready)"
echo ""