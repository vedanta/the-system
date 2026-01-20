# The System Documentation Rules

**Comprehensive documentation standards for The System framework**

---

## 📚 Overview

This document defines the documentation standards, rules, and best practices for The System framework. All contributors must follow these guidelines to maintain consistency and quality across the documentation ecosystem.

---

## 🏗️ File Structure Standards

### **Root Directory Organization**

```
/
├── README.md                    # Main entry point - streamlined
├── USER-GUIDE.md               # Complete reference
├── QUICKSTART.md               # 5-minute tutorial
├── CLAUDE.md                   # Framework instructions
├── CONTRIBUTING.md             # Contribution guidelines
├── CHANGELOG.md                # Release history
├── README_DESIGN_DEPT.md       # Specialized department guides
├── DOCUMENTATION-SYSTEM-SUMMARY.md  # Documentation system overview
├── INSTALL.md                  # Installation guide
├── TEMPLATE_README.md          # Project template
└── CLA.md                      # Contributor License Agreement
```

### **Documentation Hierarchy**

- **`/docs/user/`** - User-facing documentation
  - Agent references, command guides, tutorials
  - Architecture explanations, workflow guides
  - Build presets, configuration options
- **`/docs/dev/`** - Development documentation
  - Implementation plans, design documents
  - Language fix reports, maintenance logs
  - Documentation compliance reports
- **`/docs/status/`** - Project status and updates
  - Project milestone reports and updates

---

## 📝 Writing Standards

### **❌ Language Violations to Avoid**

**Marketing Language (Automatically Detected & Fixed)**
- "amazing", "awesome", "incredible", "perfect", "seamless"
- "ultra-fast", "lightning-fast", "blazing-fast"
- "Work at the Speed of Thought" (promotional taglines)

**Verbose Phrases**
- "in order to" → "to"
- "please note that" → (remove entirely)
- "it should be noted that" → (remove)
- "for the purpose of" → "to"

**Superlatives Without Evidence**
- "perfect", "flawless", "ultimate"
- "revolutionary", "game-changing"
- "cutting-edge" (unless technically accurate)

### **✅ Preferred Language Patterns**

**Direct Language**
- Get straight to the point
- Use active voice
- Start with the most important information

**Functional Descriptions**
- "professional styling" not "amazing design"
- "3-4 minute build time" not "lightning fast"
- "comprehensive testing" not "bulletproof quality"

**Minimal Prose**
- Respectful of user time
- No unnecessary words or filler
- Every sentence should provide value

**Concrete Measurements**
- Specific timeframes: "3-4 minutes", "15-20 minutes"
- Exact counts: "23 agents", "56 commands"
- Measurable outcomes: "Production-ready", "WCAG 2.1 AA compliant"

---

## 🎯 Content Standards

### **Progressive Disclosure Hierarchy**

1. **README.md** (Main Entry Point)
   - Streamlined introduction
   - Quick start prominently featured
   - Value proposition clearly stated
   - Examples before explanations
   - Advanced details in collapsible sections

2. **QUICKSTART.md** (5-Minute Success)
   - Time-to-first-success goal: 5 minutes
   - Prerequisites clearly listed
   - Step-by-step tutorial format
   - Expected outcomes for each step
   - Success metrics at the end

3. **USER-GUIDE.md** (Comprehensive Reference)
   - Complete workflow documentation
   - All features and capabilities
   - Advanced configuration options
   - Troubleshooting and error handling

4. **Specialist Guides** (Deep Dives)
   - Department-specific documentation
   - Technical architecture details
   - Advanced use cases and patterns

### **Required Documentation Elements**

**For New Features**
- [ ] Clear usage examples
- [ ] Integration with existing workflow
- [ ] Error handling and edge cases
- [ ] Performance characteristics
- [ ] Related commands and concepts

**For Agents**
- [ ] Role and responsibilities
- [ ] Expertise areas and capabilities
- [ ] Available tools and permissions
- [ ] Workflow integration points
- [ ] Input/output specifications

**For Commands**
- [ ] Syntax and parameters
- [ ] Usage examples (basic and advanced)
- [ ] Expected outputs
- [ ] Error conditions
- [ ] Related commands

---

## 🔧 Technical Standards

### **Framework Statistics (Auto-Updated)**

Current framework counts (maintained automatically):
- **Agents**: 23 (scanned from `.claude/agents/*.md`)
- **Commands**: 55 (scanned from `.claude/commands/*.md`)
- **Stages**: 5 (Architecture → Product → Development → Release → Operations)
- **HITL Gates**: 8 (Strategic decision points)

### **Agent Documentation Format**

```markdown
---
name: agent-name
description: Brief agent description (one line)
tools: Read, Write, Bash
model: inherit
---

# Agent Name

Brief description of the agent's role in The System.

## Role

Clear description of agent's responsibilities within the software development workflow.

## Expertise

- **Domain knowledge area 1**: Specific capabilities
- **Domain knowledge area 2**: Specific capabilities
- **Integration points**: How this agent works with others

## Tools Available

- **Tool Name**: Usage description and permissions
- **Tool Name**: Usage description and permissions

## Workflow Integration

How this agent fits into The System's five-stage workflow:
- When it's activated
- What triggers its involvement
- Dependencies on other agents
- Output expectations

## Input Processing

What information this agent expects and in what format.

## Output Generation

What this agent produces and how it's consumed by other agents or the user.
```

### **Command Documentation Format**

```markdown
# Command Name: $ARGUMENTS

Brief description of what this command accomplishes.

## Usage

```
/command-name <required-arg> [optional-arg] [--flag]
```

## Purpose

Detailed explanation of the command's role in the workflow.

## Examples

### Basic Usage
```bash
/command-name example
```

### Advanced Usage
```bash
/command-name advanced --with-flags
```

## Process

Step-by-step explanation of what the command does:
1. First action
2. Second action
3. Expected outcome

## Error Handling

Common error conditions and their resolutions.
```

### **Link Validation Standards**

- **Internal links**: Must use relative paths
- **Cross-references**: Must be validated and working
- **External links**: Should be stable and authoritative
- **File references**: Must exist in the repository

---

## 🤖 Automated Maintenance

### **Documentation Maintenance Scripts**

Located in `scripts/`:

1. **`maintain-docs.py`** - Master maintenance script
   - Updates framework statistics
   - Fixes language violations
   - Validates link integrity
   - Generates maintenance reports

2. **`update-docs.py`** - Count updates & structure validation
   - Scans framework files for current counts
   - Updates references across all documentation
   - Validates file structure compliance

3. **`fix-language-violations.py`** - Language standards enforcement
   - Detects and fixes marketing language
   - Removes verbose phrases
   - Ensures minimal prose standards

4. **`fix-broken-links.py`** - Link repair utility
   - Validates internal markdown links
   - Identifies broken references
   - Creates missing files when appropriate

### **Automated Quality Checks**

**Language Compliance**
- Scans for prohibited marketing terms
- Identifies verbose phrases
- Flags promotional language
- Suggests functional alternatives

**Accuracy Maintenance**
- Framework statistics updates
- Cross-reference validation
- Link integrity checks
- File structure compliance

**Report Generation**
- Documentation update reports
- Language violation reports
- Link validation summaries
- Structure compliance status

---

## 📋 Contribution Requirements

### **Documentation Changes Checklist**

**Before Submitting**
- [ ] Clear examples for new features included
- [ ] All count references updated (if framework changed)
- [ ] Consistent formatting with existing documentation
- [ ] All links tested and validated
- [ ] Language compliance verified (no marketing speak)
- [ ] Progressive disclosure principles followed

**During Review**
- [ ] Framework verification script passes
- [ ] Documentation builds without errors
- [ ] Examples are testable and accurate
- [ ] Integration with existing docs is seamless

### **Commit Message Standards**

Use [Conventional Commits](https://www.conventionalcommits.org/) format:

```bash
docs: update command reference with new validation features
docs(agents): add comprehensive database developer documentation
docs(fix): resolve broken links in architecture tutorial
docs(style): enforce minimal prose standards
```

**Commit Types for Documentation**
- `docs:` Documentation changes
- `docs(fix):` Documentation bug fixes
- `docs(feat):` New documentation features
- `docs(style):` Formatting and style changes

---

## 🎯 Quality Principles

### **Core Documentation Values**

1. **Minimal Prose** - Respectful of user time, every word has purpose
2. **Direct Communication** - No decorative or promotional language
3. **Functional Focus** - Describe capabilities, not subjective qualities
4. **Progressive Disclosure** - Right information at right depth level
5. **Quickstart-Enabled** - Always provide fast path to success
6. **Accuracy** - Keep all references and counts current
7. **Accessibility** - Clear headings, logical structure, scannable format

### **User Experience Standards**

**New User Journey**
1. **Hook** (README) → Clear value proposition in 30 seconds
2. **Quick Start** → Working example in 5 minutes
3. **Learn** (Guides) → Comprehensive understanding in 30 minutes
4. **Master** (Reference) → Expert-level usage as needed

**Information Architecture**
- **Inverted pyramid**: Most important information first
- **Scannable format**: Headers, bullets, code blocks
- **Logical flow**: Prerequisites → Examples → Details
- **Cross-linking**: Related concepts easily discoverable

---

## 🚀 Self-Documentation System

### **Automated Documentation Generation**

**Command**: `/ts-self-document`

**What it generates:**
- Complete agent reference documentation
- Comprehensive command documentation
- Framework architecture documentation
- Workflow and process guides
- Configuration and customization guides

**When to use:**
- After adding new agents or commands
- Before major releases
- When framework statistics change
- After significant architectural changes

**Output location:** `docs/` directory with structured subdirectories

### **Documentation Maintenance Workflow**

**Weekly Maintenance**
```bash
python3 scripts/maintain-docs.py
```

**After Framework Changes**
```bash
python3 scripts/update-docs.py
```

**Before Releases**
```bash
python3 scripts/maintain-docs.py
/ts-self-document  # Generate fresh reference docs
```

**In CI/CD Pipeline**
```bash
python3 scripts/maintain-docs.py --validate-only
```

---

## 🔍 Validation Rules

### **Structure Validation**

**File Organization**
- Root documentation follows manifest structure
- User docs in `/docs/user/`
- Development docs in `/docs/dev/`
- No orphaned or misplaced files

**Content Structure**
- Headers follow logical hierarchy (H1 → H2 → H3)
- Code blocks are properly formatted
- Lists use consistent formatting
- Tables have proper headers

### **Content Validation**

**Accuracy**
- Framework statistics are current
- Code examples are executable
- Links point to existing resources
- Version references are up-to-date

**Completeness**
- Required sections present
- Examples cover common use cases
- Error conditions documented
- Integration points explained

---

## 📞 Enforcement

### **Automated Enforcement**

**Pre-commit Hooks**
- Run language violation checks
- Validate link integrity
- Update framework statistics
- Generate compliance reports

**CI/CD Integration**
- Documentation builds successfully
- All validation rules pass
- Examples are testable
- Links are functional

### **Manual Review Process**

**Documentation PRs Require**
1. Maintainer review for technical accuracy
2. Style compliance verification
3. Integration testing with existing docs
4. User experience validation

**Review Criteria**
- Follows progressive disclosure principles
- Uses minimal prose standards
- Provides clear examples
- Integrates well with existing documentation

---

## 🎉 Success Metrics

### **Quality Indicators**

**User Experience**
- New users can get started in 5 minutes
- Common questions answered in documentation
- Low issue creation rate for documentation bugs
- Positive feedback on clarity and completeness

**Technical Quality**
- Zero broken links
- All framework statistics accurate
- All code examples executable
- Consistent formatting across all files

**Maintenance Efficiency**
- Automated tools catch 90%+ of issues
- Manual maintenance time minimal
- Framework changes don't break documentation
- Updates are quick and reliable

---

**Version**: 1.0
**Last Updated**: January 2025
**Framework**: 23 agents, 56 commands, 5 stages, 8 HITL gates

*This document is automatically maintained and should be updated whenever documentation standards evolve.*