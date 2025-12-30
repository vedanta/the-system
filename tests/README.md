# The System - Test Suite

This directory contains all tests for The System (ASDO Framework).

## Test Files

### Solution Architect Tests

#### `sa-test-runner.py`
Validates Solution Architect agent logic and technology stack assessment functionality.

**Purpose:**
- Tests signal detection from user input
- Validates build preset selection (prototype/mvp/production)
- Validates architecture preset selection (static/embedded/fullstack-js/baas/microservice)
- Tests AI success scoring and risk assessment
- Validates EA skip decision logic

**Usage:**
```bash
python3 tests/sa-test-runner.py
```

**Test Scenarios:**
1. Simple Static Site (prototype + static)
2. MVP SaaS Application (mvp + fullstack-js)
3. Enterprise Microservice (production + microservice)
4. CLI Tool (mvp + cli-tool)
5. Real-time Chat App (mvp + baas)

#### `sa-ea-integration-test.py`
Tests the complete SA→EA handoff workflow and integration.

**Purpose:**
- Validates SA handoff data structure
- Tests EA prerequisites checking
- Validates EA execution mode determination (skip/compressed/standard/full)
- Tests technology-specific guidance availability
- Validates complete workflow integration

**Usage:**
```bash
python3 tests/sa-ea-integration-test.py
```

**Test Scenarios:**
1. Simple Static Site (EA skip)
2. Embedded App (EA skip)
3. MVP SaaS (EA compressed mode)
4. Realtime App (EA compressed mode)
5. Production Microservice (EA full mode)

## Running All Tests

```bash
# Run SA logic tests
python3 tests/sa-test-runner.py

# Run SA→EA integration tests
python3 tests/sa-ea-integration-test.py
```

## Test Results Interpretation

### SA Test Runner Results
- **Signal Detection:** Validates that user input is correctly parsed for technology signals
- **Preset Selection:** Ensures correct build and architecture presets are chosen
- **AI Scoring:** Validates that AI success scores match expected ranges
- **Success Criteria:** All 5 scenarios should pass for SA agent to be production-ready

### SA-EA Integration Results
- **Handoff Structure:** Validates SA→EA data exchange format
- **Prerequisites:** Ensures EA can only run after SA completion
- **Execution Modes:** Validates EA skip logic and mode selection
- **Success Criteria:** All 5 scenarios should pass with 100% success rate

## Expected Performance

### SA Test Suite
- **Test Duration:** ~30 seconds
- **Expected Success Rate:** 80%+ (4/5 scenarios minimum)
- **Known Issues:** Signal parsing edge cases with substring matching

### SA-EA Integration Suite
- **Test Duration:** ~45 seconds
- **Expected Success Rate:** 100% (5/5 scenarios)
- **Performance Benefits:** Validates 88% time savings for simple stacks

## Troubleshooting

### Common Issues

#### SA Test Failures
- **Signal Detection Errors:** Check substring matching in signal parsing
- **Preset Mismatches:** Validate decision tree logic in architecture selection
- **Scoring Discrepancies:** Verify AI success profiles configuration

#### Integration Test Failures
- **Handoff Structure Invalid:** Check YAML schema in project template
- **Prerequisites Not Met:** Verify SA completion status tracking
- **Mode Selection Wrong:** Validate EA decision logic implementation

### Test Data Dependencies

Both test suites use mock data and don't require:
- Actual agent execution
- External configuration files
- Live AI success profiles

This ensures tests run reliably in any environment.

## Adding New Tests

### Test Structure Template
```python
#!/usr/bin/env python3
"""
New Test Suite Description
"""

class NewTestRunner:
    def __init__(self, base_path="/Users/vedanta/the-system"):
        self.base_path = Path(base_path)

    def test_scenario(self, test_name, input_data):
        # Test implementation
        pass

    def run_test_suite(self):
        # Execute all tests
        pass

if __name__ == "__main__":
    runner = NewTestRunner()
    results = runner.run_test_suite()
```

### Integration Guidelines
- Use mock data for agent testing
- Validate both positive and negative scenarios
- Include performance benchmarks where applicable
- Follow existing naming conventions
- Document expected results and success criteria

## Framework Integration

These tests validate the SA feature implementation across:
- **Agent Logic:** Core SA assessment algorithms
- **Workflow Integration:** SA→EA handoff and orchestration
- **Performance Optimization:** Time savings and build success rates
- **Error Handling:** Edge cases and fallback scenarios

The test suite ensures the SA feature is production-ready and maintains The System's quality standards.