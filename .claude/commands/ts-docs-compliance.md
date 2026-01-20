# Documentation Compliance: $ARGUMENTS

Check and fix documentation compliance against The System's documentation rules and standards.

## Usage

```bash
/ts-docs-compliance [options]
```

### Options

```bash
# Compliance checking modes
/ts-docs-compliance                         # Full compliance check with report
/ts-docs-compliance --check-only            # Check compliance without fixes
/ts-docs-compliance --fix                   # Apply automatic fixes where possible
/ts-docs-compliance --report                # Generate detailed compliance report

# Specific compliance areas
/ts-docs-compliance --structure             # Check file structure compliance
/ts-docs-compliance --writing              # Check writing standards compliance
/ts-docs-compliance --format               # Check agent/command format compliance
/ts-docs-compliance --statistics           # Check framework statistics accuracy
/ts-docs-compliance --links                # Check link integrity

# Output options
/ts-docs-compliance --verbose              # Detailed output with explanations
/ts-docs-compliance --quiet                # Minimal output, errors only
/ts-docs-compliance --json                 # Output results as JSON
```

## Purpose

Automate documentation quality assurance by checking compliance against The System's documentation rules defined in `docs/dev/DOCUMENTATION-RULES.md`. Ensures consistency, accuracy, and adherence to writing standards across all framework documentation.

## Process

### 1. **File Structure Compliance**
```bash
# Verify root directory organization
├── README.md                    ✓ Check presence and format
├── USER-GUIDE.md               ✓ Check presence and format
├── QUICKSTART.md               ✓ Check presence and format
├── CLAUDE.md                   ✓ Check presence and format
└── [other required files]     ✓ Validate against manifest

# Verify documentation hierarchy
├── /docs/user/                 ✓ User-facing documentation
├── /docs/dev/                  ✓ Development documentation
└── /docs/status/               ✓ Project status updates
```

### 2. **Writing Standards Compliance**
```bash
# Language violation detection
❌ "amazing", "awesome", "incredible", "perfect", "seamless"
❌ "ultra-fast", "lightning-fast", "blazing-fast"
❌ "in order to" → "to"
❌ "please note that" → (remove)

# Progressive disclosure validation
✓ README.md: Streamlined entry point
✓ QUICKSTART.md: 5-minute tutorial
✓ USER-GUIDE.md: Comprehensive reference
```

### 3. **Format Compliance**
```bash
# Agent documentation format
✓ YAML front matter present
✓ Required sections: Role, Expertise, Tools Available, Workflow Integration
✓ Consistent naming conventions

# Command documentation format
✓ Title format: "# Command Name: $ARGUMENTS"
✓ Required sections: Usage, Purpose, Examples, Process, Error Handling
✓ Proper syntax documentation
```

### 4. **Framework Statistics Accuracy**
```bash
# Auto-scan actual counts
agents_actual=$(ls .claude/agents/*.md | wc -l)
commands_actual=$(ls .claude/commands/*.md | wc -l)

# Compare with documented counts
grep -r "X agents" *.md docs/
grep -r "Y commands" *.md docs/

# Flag discrepancies for fixing
```

### 5. **Link Integrity Validation**
```bash
# Internal link validation
✓ Relative paths exist
✓ Cross-references work
✓ File references are valid

# Documentation hierarchy links
✓ README → QUICKSTART → USER-GUIDE navigation
✓ Reference links to docs/user/ and docs/dev/
```

## Examples

### Basic Compliance Check
```bash
/ts-docs-compliance

# Output:
╔══════════════════════════════════════════════════════════════╗
║  📋 DOCUMENTATION COMPLIANCE CHECK                           ║
╠══════════════════════════════════════════════════════════════╣
║                                                              ║
║  File Structure.................... ✅ 100% (12/12 files)  ║
║  Writing Standards................. ⚠️  95% (1 violation)   ║
║  Agent Format...................... ⚠️  70% (8/23 compliant) ║
║  Command Format.................... ⚠️  75% (41/55 compliant)║
║  Statistics Accuracy............... ❌  95% (1 discrepancy) ║
║  Link Integrity.................... ✅  98% (2 broken)      ║
║                                                              ║
╠══════════════════════════════════════════════════════════════╣
║  OVERALL COMPLIANCE: 85% - GOOD                             ║
╚══════════════════════════════════════════════════════════════╝

Issues Found:
⚠️  USER-GUIDE.md:277: Language violation "seamlessly"
❌  Command count: 54 documented vs 55 actual
❌  8 agents missing required format sections
❌  14 commands missing error handling sections

Run with --fix to apply automatic fixes.
```

### Apply Automatic Fixes
```bash
/ts-docs-compliance --fix

# Output:
🔧 Applying automatic fixes...

✅ Fixed: Updated command count 54 → 55 in 8 files
✅ Fixed: USER-GUIDE.md:277 "seamlessly" → "smoothly"
✅ Fixed: Updated documentation hierarchy reference
⚠️  Manual fix needed: 8 agents missing format sections
⚠️  Manual fix needed: 14 commands missing error handling

📊 Compliance improved: 85% → 90%
📋 See docs/dev/DOCUMENTATION-COMPLIANCE-REPORT.md for details
```

### Specific Area Checks
```bash
# Check only writing standards
/ts-docs-compliance --writing
# Output: Found 1 language violation in USER-GUIDE.md

# Check only framework statistics
/ts-docs-compliance --statistics
# Output: Command count discrepancy: 54 documented vs 55 actual

# Generate detailed JSON report
/ts-docs-compliance --json > compliance-report.json
```

## Error Handling

### Common Issues and Solutions

**File Structure Issues**
```bash
❌ Missing required file: QUICKSTART.md
→ Run /ts-self-document to regenerate
→ Or create manually following template

❌ Incorrect documentation hierarchy
→ Check docs/dev/DOCUMENTATION-RULES.md for correct structure
→ Move files to match documented organization
```

**Writing Standards Violations**
```bash
❌ Marketing language detected: "amazing", "awesome"
→ Replace with functional descriptions
→ Use --fix flag for automatic replacement

❌ Verbose phrases found: "in order to"
→ Simplify to "to"
→ Use --fix flag for automatic cleanup
```

**Format Violations**
```bash
❌ Agent missing required sections
→ Add: Tools Available, Workflow Integration
→ Follow format in docs/dev/DOCUMENTATION-RULES.md

❌ Command missing error handling section
→ Add Error Handling section with common failure modes
→ Document troubleshooting steps
```

**Statistics Accuracy**
```bash
❌ Framework count discrepancy detected
→ Use --fix flag to auto-update all references
→ Or run python3 scripts/update-docs.py

❌ Outdated version references
→ Update version numbers across documentation
→ Check release notes for current version
```

## Integration

### Pre-commit Hook
```bash
# .git/hooks/pre-commit
#!/bin/bash
echo "Checking documentation compliance..."
/ts-docs-compliance --check-only --quiet
if [ $? -ne 0 ]; then
    echo "❌ Documentation compliance check failed"
    echo "Run '/ts-docs-compliance --fix' to resolve issues"
    exit 1
fi
echo "✅ Documentation compliance passed"
```

### CI/CD Pipeline
```yaml
# .github/workflows/docs-compliance.yml
name: Documentation Compliance
on: [push, pull_request]

jobs:
  compliance:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Check Documentation Compliance
        run: |
          /ts-docs-compliance --check-only
          if [ $? -ne 0 ]; then
            echo "Documentation compliance issues found"
            echo "See compliance report for details"
            exit 1
          fi
```

### Development Workflow
```bash
# Before submitting PRs
/ts-docs-compliance --fix           # Auto-fix issues
/ts-docs-compliance --check-only    # Verify compliance
git add .                           # Stage fixes
git commit -m "docs: fix compliance issues"

# Weekly maintenance
/ts-docs-compliance --report        # Generate full report
# Review manual fix recommendations
# Update documentation standards if needed
```

## Output Files

### Compliance Report
Generated at `docs/dev/DOCUMENTATION-COMPLIANCE-REPORT.md`:
```markdown
# Documentation Compliance Report

## Executive Summary
Overall Compliance: 90% ✅

## Detailed Findings
### File Structure: 100% ✅
### Writing Standards: 95% ⚠️
### Format Compliance: 72% ⚠️
### Statistics Accuracy: 100% ✅

## Action Items
1. Fix 8 agents missing format sections
2. Add error handling to 14 commands
3. Review and standardize section naming

## Compliance History
- 2025-01-17: 85% → 90% (applied auto-fixes)
- 2025-01-15: 82% → 85% (format improvements)
```

### JSON Output
```json
{
  "overall_compliance": 90,
  "timestamp": "2025-01-17T10:30:00Z",
  "areas": {
    "file_structure": {"score": 100, "status": "excellent"},
    "writing_standards": {"score": 95, "status": "excellent"},
    "agent_format": {"score": 70, "status": "needs_improvement"},
    "command_format": {"score": 75, "status": "needs_improvement"},
    "statistics_accuracy": {"score": 100, "status": "excellent"},
    "link_integrity": {"score": 98, "status": "excellent"}
  },
  "issues": [
    {
      "type": "format_violation",
      "severity": "medium",
      "file": "founder-advisor.md",
      "description": "Missing 'Tools Available' section",
      "auto_fixable": false
    }
  ],
  "fixes_applied": 5,
  "manual_fixes_needed": 12
}
```

## Best Practices

### Regular Compliance Checks
```bash
# Weekly maintenance schedule
/ts-docs-compliance --fix                    # Monday: Auto-fixes
/ts-docs-compliance --report                 # Wednesday: Full report
/ts-docs-compliance --check-only             # Friday: Final verification
```

### Team Collaboration
```bash
# Before major releases
/ts-docs-compliance --verbose               # Detailed review
# Address all format violations
# Update documentation standards if needed
# Generate fresh compliance baseline
```

### Documentation Standards Evolution
```bash
# When updating DOCUMENTATION-RULES.md
/ts-docs-compliance --check-only            # Test against new standards
# Update command logic for new rules
# Regenerate compliance reports
# Communicate changes to team
```

---

**Related Commands:**
- `/ts-validate-docs` - Validate documentation system performance
- `/ts-self-document` - Generate framework documentation
- `/ts-user-docs-update` - Update user documentation with current counts
- `/ts-help docs-compliance` - Interactive help for this command