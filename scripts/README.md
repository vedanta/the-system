# The System - Scripts Directory

This directory contains utility scripts for The System framework validation, testing, and maintenance.

## 📋 Scripts Overview

| Script | Language | Purpose | Usage Location |
|--------|----------|---------|----------------|
| `verify-the-system.sh` | Bash | Framework verification and health check | Any location |
| `validate-presets.py` | Python | Architecture presets validation | Project root |

---

## 🔍 verify-the-system.sh

### Purpose
Comprehensive verification script that validates The System framework installation and configuration across all 5 stages.

### Features
- ✅ **18 Agents Verification** - Checks all agent definition files
- ✅ **44 Commands Verification** - Validates all command files
- ✅ **Configuration Validation** - Verifies config files and settings
- ✅ **Stage 5 Support** - Includes Go Live & Operate validation
- ✅ **Cross-Location Compatible** - Works from any directory
- ✅ **Color-coded Output** - Clear visual feedback

### Usage

```bash
# From project root
./scripts/verify-the-system.sh

# From scripts directory
cd scripts && ./verify-the-system.sh

# View only errors/warnings
./scripts/verify-the-system.sh | grep -E "✗|⚠"
```

### What It Checks

#### 1. Directory Structure (8 checks)
- `.claude/` - Framework root directory
- `.claude/agents/` - Agent definitions
- `.claude/commands/` - Command definitions
- `.claude/config/` - Configuration files
- `.claude/knowledge/` - Knowledge base
- `.claude/hooks/` - Git hooks
- `.claude/pipeline/` - Pipeline templates
- `.claude/pipeline/projects/` - Project templates

#### 2. Agents (18 checks)
**Stage 1 - Architecture:**
- `founder-advisor.md`
- `enterprise-architect.md`

**Stage 2 - Product:**
- `product-lead.md`
- `project-planner.md`
- `business-analyst.md`

**Stage 3 - Development:**
- `principal-developer.md`
- `qa-engineer.md`
- `database-developer.md`
- `backend-developer.md`
- `frontend-developer.md`
- `integration-engineer.md`

**Stage 4 - Release & Deployment:**
- `technical-writer.md`
- `security-engineer.md`
- `release-engineer.md`
- `devops-engineer.md`

**Stage 5 - Go Live & Operate:**
- `sre-deploy-engineer.md`
- `sre-ops-engineer.md`

**Utility:**
- `bug-fixer.md`

#### 3. Commands (44 checks)
**Core Commands (8):**
- Core management and orchestration commands

**Stage 1 Commands (1):**
- Architecture design commands

**Stage 2 Commands (3):**
- Product definition commands

**Stage 3 Commands (7):**
- Development and testing commands

**Stage 4 Commands (8):**
- Release and deployment commands

**Stage 5 Commands (12):**
- Go Live and operations commands

**Utility Commands (5):**
- Bug fixing and validation commands

#### 4. Configuration Files
- `preferences.yaml` - Tech stack preferences
- `integrations.yaml` - Service integrations
- Go Live section validation

#### 5. Knowledge & Templates
- `architecture-standards.md`
- `TEMPLATE.md` project template
- Template section validation

#### 6. Root Files
- `CLAUDE.md` - Framework instructions
- `.env.example` - Environment template
- `.gitignore` - Git ignore rules

### Output Example

```
╔══════════════════════════════════════════════════════════════════╗
║           THE SYSTEM - Verification (Stage 1-5)                  ║
╚══════════════════════════════════════════════════════════════════╝

═══════════════════════════════════════════════════════════════
  1. DIRECTORY STRUCTURE
═══════════════════════════════════════════════════════════════
  ✓ .claude/
  ✓ .claude/agents/
  ✓ .claude/commands/
  ...

╔══════════════════════════════════════════════════════════════════╗
║                      VERIFICATION SUMMARY                        ║
╚══════════════════════════════════════════════════════════════════╝

  Passed:   87
  Failed:   0
  Warnings: 0

  ╔═══════════════════════════════════════════════════════════╗
  ║  ✓ THE SYSTEM IS CORRECTLY INSTALLED (Stage 1-5)         ║
  ╚═══════════════════════════════════════════════════════════╝
```

---

## 🧪 validate-presets.py

### Purpose
Advanced validation script for architecture presets configuration (`presets.yaml`). Ensures presets are properly configured for framework architecture selection.

### Features
- ✅ **Schema Validation** - Validates YAML structure and required fields
- ✅ **Signal Consistency** - Checks preset and option signal definitions
- ✅ **Agent Relationships** - Validates agent usage patterns
- ✅ **Deploy Compatibility** - Verifies deployment configuration
- ✅ **Option Validation** - Ensures proper option defaults
- ✅ **Cross-Preset Consistency** - Validates relationships between presets

### Requirements
- Python 3.7+
- PyYAML library (`pip install pyyaml`)

### Usage

```bash
# Run from project root
python3 scripts/validate-presets.py

# With pip install
cd scripts && python3 validate-presets.py
```

### What It Validates

#### 1. Schema Compliance
- Root structure validation
- Required fields per preset
- Metadata consistency
- Preset count validation

#### 2. Preset Structure
**Required Fields:**
- `category` (web/cli)
- `pattern` (jamstack/monolith/distributed/script/package/application)
- `tier` (single/two/three)
- `description`
- `use_when`
- `signals`
- `stack`
- `agents`

#### 3. Agent Configuration
**Validation Rules:**
- No agent can be both used and skipped
- Web presets should include `frontend-developer`
- CLI presets should include `backend-developer`
- CLI presets should skip `frontend-developer`
- All agents must be known/valid

#### 4. Signal Definitions
**Preset Signals:**
- `cli`, `persistent_data`, `python_ml_compute`
- `realtime_core`, `multi_user_ha`, `interactive_tui`
- `multiple_commands`

**Option Signals:**
- `analytics`, `csv_data`, `edge`, `cloudflare`
- `managed_auth`, `firebase`, `python`, `go`
- `rust`, `mysql`, `planetscale`

#### 5. Options Validation
- Each option category must have exactly one default
- Option signals must be valid
- Option structure compliance

#### 6. Deployment Configuration
- Deploy targets match tier specification
- Deploy count matches deployables
- Deployment compatibility checks

### Output Example

```
🔍 Validating Architecture Presets Configuration...
============================================================

❌ ERRORS:
  jamstack-app (agents): Unknown agents: {'unknown-agent'}
  cli-tool (options): No default option specified for database

⚠️  WARNINGS:
  jamstack-app (agents): Web presets typically include frontend-developer
  system (distribution): Expected 5 web presets, found 4

ℹ️  INFO:
  cli-tool (option_signals): Unknown option signals in mysql: {'new_signal'}

============================================================
📊 Validation Summary:
  Errors:   2
  Warnings: 2
  Info:     1

❌ Presets configuration has errors that must be fixed.
```

---

## 🚀 Quick Usage Reference

### Daily Verification
```bash
# Quick health check
./scripts/verify-the-system.sh

# Presets validation
python3 scripts/validate-presets.py
```

### Integration Testing
```bash
# Full framework validation
./scripts/verify-the-system.sh && python3 scripts/validate-presets.py
echo "✅ All systems operational"
```

### Troubleshooting

#### verify-the-system.sh Issues
```bash
# Permission denied
chmod +x scripts/verify-the-system.sh

# Path issues - use absolute paths
cd /path/to/the-system
./scripts/verify-the-system.sh
```

#### validate-presets.py Issues
```bash
# Missing PyYAML
pip install pyyaml

# Python version
python3 --version  # Should be 3.7+

# File not found - run from project root
cd /path/to/the-system
python3 scripts/validate-presets.py
```

---

## 🔧 Development

### Adding New Scripts

1. **Create the script:**
```bash
touch scripts/my-script.sh
chmod +x scripts/my-script.sh
```

2. **Add documentation:**
- Update this README
- Add usage examples
- Document purpose and requirements

3. **Test thoroughly:**
```bash
# Test from different locations
cd /tmp && /path/to/the-system/scripts/my-script.sh
cd /path/to/the-system && ./scripts/my-script.sh
cd /path/to/the-system/scripts && ./my-script.sh
```

### Script Standards

#### Bash Scripts
- Use `#!/bin/bash` shebang
- Include help/usage functions
- Handle path resolution for cross-location usage
- Provide colored output for readability
- Exit with proper codes (0=success, 1=error)

#### Python Scripts
- Use `#!/usr/bin/env python3` shebang
- Include docstrings and type hints
- Handle missing dependencies gracefully
- Provide comprehensive error messages
- Use dataclasses for structured data

---

## 📚 Related Documentation

- [Main README](../README.md) - Framework overview
- [CLAUDE.md](../CLAUDE.md) - Complete framework reference
- [Architecture Documentation](../docs/) - Detailed guides
- [User Guide](../user-guide.md) - Getting started

---

**The System Scripts - Keeping your framework healthy and validated** 🛠️