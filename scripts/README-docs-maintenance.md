# The System - Documentation Maintenance Scripts

Comprehensive toolkit for maintaining accuracy and quality in The System's documentation.

## Scripts Overview

### 1. `maintain-docs.py` - Master Maintenance Script

**Primary script that runs complete documentation maintenance.**

```bash
# Full maintenance (recommended)
python3 scripts/maintain-docs.py

# Skip language fixes
python3 scripts/maintain-docs.py --no-language

# Only update counts
python3 scripts/maintain-docs.py --counts-only

# Custom directory
python3 scripts/maintain-docs.py /path/to/the-system
```

**What it does:**
- Scans framework files to get current agent/command counts
- Updates counts throughout all documentation
- Validates markdown links
- Fixes language principle violations
- Updates QUICKSTART.md
- Validates progressive disclosure structure
- Generates comprehensive reports

### 2. `update-docs.py` - Count Updates & Structure Validation

**Focused on keeping framework statistics accurate.**

```bash
python3 scripts/update-docs.py [path]
```

**Features:**
- Scans `.claude/agents/*.md` and `.claude/commands/*.md`
- Updates agent/command counts in all documentation
- Validates internal markdown links
- Checks for broken references
- Generates/updates QUICKSTART.md with current stats
- Validates progressive disclosure structure
- Creates detailed validation report

### 3. `fix-language-violations.py` - Language Standards Enforcement

**Enforces documentation language principles.**

```bash
python3 scripts/fix-language-violations.py [path]
```

**Language Fixes:**
- **Promotional language**: amazing → professional, awesome → functional
- **Marketing phrases**: "transform your" → "build from your"
- **Verbose phrases**: "in order to" → "to", "please note that" → (removed)
- **Superlatives**: "ultra-fast" → "fast", "perfect" → "optimal"
- **Marketing taglines**: "Work at the Speed of Thought" → "Configure Speed vs Quality"

### 4. `fix-broken-links.py` - Link Repair

**Fixes common broken link issues.**

```bash
python3 scripts/fix-broken-links.py
```

**Fixes:**
- Corrects common link paths
- Creates missing referenced files
- Updates link references to proper locations

## Documentation Principles Enforced

### Language Standards

**❌ Avoid:**
```markdown
- Amazing architecture that transforms your workflow
- Incredible performance with ultra-fast processing
- Perfect solution for seamless development
- Please note that in order to configure...
```

**✅ Use:**
```markdown
- Professional architecture that builds from your workflow
- Comprehensive performance with fast processing
- Optimal solution for efficient development
- Configure...
```

### Progressive Disclosure Structure

**Entry Points:**
1. **README.md** - Streamlined welcome (< 400 lines)
2. **QUICKSTART.md** - 5-minute onboarding
3. **USER-GUIDE.md** - Comprehensive reference

**User Documentation Hierarchy:**
```
docs/user/
├── workflow.md          # Complete workflow guide
├── architecture.md      # Architecture phase details
├── commands.md          # Command reference
├── agents.md           # Agent reference
├── examples.md         # Practical examples
└── build-presets.md    # Build configuration guide
```

## Generated Reports

### Documentation Update Report (`docs-update-report.md`)

Contains:
- Framework statistics (agents, commands, stages)
- Files processed and updated
- Broken links requiring attention
- Language principle violations
- Count updates applied
- Progressive disclosure validation

### Language Fixes Report (`language-fixes-report.md`)

Contains:
- Files changed with language fixes
- Specific fixes applied per file
- Files already clean
- Error files

## Usage Patterns

### Regular Maintenance

```bash
# Weekly maintenance
python3 scripts/maintain-docs.py

# After adding new agents/commands
python3 scripts/update-docs.py

# Before releases
python3 scripts/maintain-docs.py --no-language  # Preserve intentional language
```

### Development Workflow

```bash
# After framework changes
python3 scripts/update-docs.py

# Before committing user docs
python3 scripts/fix-language-violations.py

# Full check before PR
python3 scripts/maintain-docs.py
```

### Quick Fixes

```bash
# Just fix language violations
python3 scripts/fix-language-violations.py

# Just update counts
python3 scripts/update-docs.py

# Fix specific link issues
python3 scripts/fix-broken-links.py
```

## Framework Statistics Tracked

Current framework (automatically updated):

- **Agents**: 19 (from `.claude/agents/*.md`)
- **Commands**: 49 (from `.claude/commands/*.md`)
- **Stages**: 5 (hardcoded)
- **HITL Gates**: 8 (hardcoded)

## Files Processed

### Main Documentation
- `README.md` - Entry point
- `USER-GUIDE.md` - Comprehensive guide
- `CLAUDE.md` - Framework instructions
- `QUICKSTART.md` - 5-minute onboarding

### User Documentation
- `docs/user/*.md` - All user-facing documentation
- `docs/README.md` - Documentation overview

### Reports Generated
- `docs-update-report.md` - Validation and update report
- `language-fixes-report.md` - Language fixes applied

## Error Handling

### Common Issues

**Missing Files:**
```
❌ Missing required files: QUICKSTART.md
✅ Solution: Script auto-generates missing QUICKSTART.md
```

**Broken Links:**
```
❌ Broken link: [Product Tutorial](product-tutorial.md)
✅ Solution: Run fix-broken-links.py or create missing file
```

**Language Violations:**
```
⚠️ Line 42: Promotional language 'amazing' - use functional description
✅ Solution: Run fix-language-violations.py for auto-fix
```

**Count Mismatches:**
```
✅ Updated count pattern: (\d+)\s+command
✅ Solution: Automatically updated by update-docs.py
```

### Manual Review Required

Some issues require manual attention:
- Complex broken links with anchors
- Context-specific language that shouldn't be changed
- Missing files that need custom content
- Structural documentation issues

## Integration with Development

### Pre-commit Hook Example

```bash
#!/bin/bash
# .git/hooks/pre-commit

# Run documentation maintenance before commits
if [[ $(git diff --cached --name-only | grep -E "\.(md)$") ]]; then
    echo "Documentation files changed, running maintenance..."
    python3 scripts/update-docs.py

    # Add any updated files
    git add -A
fi
```

### CI/CD Integration

```yaml
# .github/workflows/docs-validation.yml
name: Documentation Validation

on: [pull_request]

jobs:
  validate-docs:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Validate documentation
        run: |
          python3 scripts/maintain-docs.py --counts-only
          if [ $? -ne 0 ]; then
            echo "Documentation validation failed"
            exit 1
          fi
```

## Extending the System

### Adding New Language Rules

Edit `fix-language-violations.py`:

```python
LANGUAGE_FIXES = {
    # Add new patterns
    r'\bnew-bad-phrase\b': 'good-replacement',
    # ...existing patterns
}
```

### Adding New Validation Checks

Edit `update-docs.py`:

```python
def new_validation_check(self, content: str) -> List[str]:
    """Add new validation logic"""
    issues = []
    # Add validation logic
    return issues
```

### Adding New File Types

Update file discovery in both scripts to include new documentation patterns.

## Maintenance Schedule

**Recommended:**
- **Daily**: Run before committing documentation changes
- **Weekly**: Full maintenance run
- **Before releases**: Complete validation with manual review
- **After framework changes**: Update counts immediately

**Commands:**
```bash
# Daily
python3 scripts/update-docs.py

# Weekly
python3 scripts/maintain-docs.py

# Release
python3 scripts/maintain-docs.py
# Manual review of generated reports

# Framework changes
python3 scripts/update-docs.py
```

## Support

**For issues:**
1. Check generated reports for specific problems
2. Run individual scripts to isolate issues
3. Review script output for error messages
4. Check file permissions and paths

**For customization:**
1. Review script source code for patterns
2. Test changes on individual files first
3. Always backup documentation before bulk changes
4. Validate results with manual review