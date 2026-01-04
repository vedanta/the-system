# Validate Documentation System: $ARGUMENTS

Validate the lean documentation system implementation and performance.

## Usage

```bash
/ts-validate-docs                    # Run all validation tests
/ts-validate-docs --mode=lean       # Test lean documentation mode only
/ts-validate-docs --mode=full       # Test full documentation mode only
/ts-validate-docs --performance     # Test performance benchmarks only
/ts-validate-docs --quality         # Test documentation quality only
```

## Validation Tests

### 1. Mode Selection Logic Tests
```bash
/ts-validate-docs --test=mode-selection
```

**Tests:**
- Priority chain logic implementation
- Explicit flag override behavior
- Turbo mode speed-first override
- Build preset defaults integration
- System default fallback

### 2. Performance Validation Tests
```bash
/ts-validate-docs --test=performance
```

**Tests:**
- Lean mode generation time (target: 2-3 minutes)
- Full mode generation time (baseline: 20-30 minutes)
- Speed improvement measurement (target: 85% faster)
- Resource usage comparison

### 3. Quality Validation Tests
```bash
/ts-validate-docs --test=quality
```

**Tests:**
- Required files generation (lean: README, DEPLOYMENT, API)
- Content completeness validation
- Template rendering accuracy
- Technology stack integration

### 4. Integration Tests
```bash
/ts-validate-docs --test=integration
```

**Tests:**
- Command flag parsing accuracy
- Project handoff notes storage
- Technical writer agent integration
- Build preset configuration loading

## Process

1. **Setup Test Environment:**
   ```bash
   # Create test project directory
   mkdir -p output/docs-validation-test

   # Initialize test project with known configuration
   cp .claude/pipeline/projects/TEMPLATE.md output/docs-validation-test/test-project.md
   ```

2. **Mode Selection Validation:**
   ```python
   def test_documentation_mode_selection():
       # Test explicit flags
       assert parse_flags(['--docs=lean']) == 'lean'
       assert parse_flags(['--docs=full']) == 'full'
       assert parse_flags(['--lean']) == 'lean'
       assert parse_flags(['--full']) == 'full'

       # Test turbo override
       assert determine_mode(turbo=True, preset='production') == 'lean'

       # Test build preset defaults
       assert determine_mode(preset='prototype') == 'lean'
       assert determine_mode(preset='mvp') == 'lean'
       assert determine_mode(preset='production') == 'full'

       # Test system default
       assert determine_mode() == 'lean'
   ```

3. **Performance Benchmarking:**
   ```bash
   # Create sample projects for performance testing
   echo "Creating lean documentation performance test..."
   time /ts-docs --lean --test-mode

   echo "Creating full documentation performance test..."
   time /ts-docs --full --test-mode

   # Calculate performance improvement
   echo "Performance improvement: $((($FULL_TIME - $LEAN_TIME) / $FULL_TIME * 100))%"
   ```

4. **Quality Validation:**
   ```python
   def validate_lean_documentation_quality(output_dir):
       required_files = ['README.md', 'DEPLOYMENT.md']

       for file in required_files:
           file_path = f"{output_dir}/{file}"
           assert os.path.exists(file_path), f"Required file {file} missing"

           content = read_file(file_path)
           assert len(content) > 100, f"File {file} too short"
           assert validate_markdown_structure(content), f"Invalid markdown in {file}"

   def validate_full_documentation_quality(output_dir):
       required_dirs = ['docs/architecture', 'docs/guides', 'docs/operations']
       required_files = ['README.md', 'CONTRIBUTING.md', 'LICENSE']

       for dir in required_dirs:
           assert os.path.exists(f"{output_dir}/{dir}"), f"Required directory {dir} missing"

       for file in required_files:
           assert os.path.exists(f"{output_dir}/{file}"), f"Required file {file} missing"
   ```

5. **Integration Testing:**
   ```bash
   # Test command flag integration
   echo "Testing ts-docs command integration..."
   /ts-docs --lean --validate-only

   echo "Testing ts-turbo command integration..."
   /ts-turbo test-app "validation test" --docs=lean --validate-only

   # Verify handoff notes storage
   grep -q "Override Flags: --docs=lean" .claude/pipeline/projects/test-app.md
   ```

6. **Template Validation:**
   ```python
   def validate_lean_templates():
       template_dir = ".claude/knowledge/lean-docs-templates/"
       required_templates = [
           'lean-readme-template.md',
           'lean-deployment-template.md',
           'lean-api-template.md'
       ]

       for template in required_templates:
           path = f"{template_dir}/{template}"
           assert os.path.exists(path), f"Template {template} missing"

           content = read_file(path)
           assert "{PROJECT_NAME}" in content, f"Template {template} missing placeholders"
           assert validate_template_structure(content), f"Invalid template {template}"
   ```

## Validation Report

After running all tests, generate a validation report:

```markdown
# Documentation System Validation Report

## Test Summary
- **Mode Selection Tests:** PASSED ✅
- **Performance Tests:** PASSED ✅ (87% improvement)
- **Quality Tests:** PASSED ✅
- **Integration Tests:** PASSED ✅
- **Template Tests:** PASSED ✅

## Performance Results
- **Lean Mode Time:** 2.3 minutes (target: 2-3 minutes) ✅
- **Full Mode Time:** 28.7 minutes (baseline) ✅
- **Speed Improvement:** 87% faster ✅
- **Resource Usage:** 60% less CPU, 70% less memory ✅

## Quality Validation
- **Lean Documentation:** All required files generated with sufficient content ✅
- **Full Documentation:** Complete documentation suite generated ✅
- **Template Rendering:** All placeholders correctly replaced ✅
- **Markdown Validation:** All files pass markdown linting ✅

## Integration Validation
- **Command Flags:** All --docs flags correctly parsed ✅
- **Turbo Mode:** Defaults to lean documentation ✅
- **Build Presets:** Correct documentation mode selected ✅
- **Handoff Notes:** Flags correctly stored and retrieved ✅

## Overall Status: PASSED ✅

The lean documentation system is ready for production use.
```

## Error Handling

If validation fails:
1. Report specific test failures with detailed error messages
2. Provide troubleshooting suggestions
3. Generate debug output for investigation
4. Exit with non-zero status code

## Output

Display validation results in real-time:
```
╔══════════════════════════════════════════════════════════════╗
║  🧪 DOCUMENTATION SYSTEM VALIDATION                         ║
╠══════════════════════════════════════════════════════════════╣
║                                                              ║
║  Mode Selection Tests................... ✅ PASSED (5/5)    ║
║  Performance Tests...................... ✅ PASSED (4/4)    ║
║  Quality Tests.......................... ✅ PASSED (6/6)    ║
║  Integration Tests...................... ✅ PASSED (4/4)    ║
║  Template Tests......................... ✅ PASSED (3/3)    ║
║                                                              ║
║  Overall Performance Improvement: 87%                       ║
║  Lean Mode Generation Time: 2.3 minutes                     ║
║                                                              ║
╠══════════════════════════════════════════════════════════════╣
║  STATUS: ALL TESTS PASSED ✅                                ║
╚══════════════════════════════════════════════════════════════╝
```

## Continuous Validation

Add to CI/CD pipeline:
```yaml
# .github/workflows/validate-docs.yml
name: Validate Documentation System
on: [push, pull_request]

jobs:
  validate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Validate Documentation System
        run: /ts-validate-docs
```