# 📝 User Documentation Update Tool
**Lightweight User-Facing Documentation Maintenance**

*Status: Design Phase*
*Priority: P1 (Quick Win)*
*Effort: 5-7 hours (1 day)*

---

## 🎯 Core Philosophy

**User-First Documentation Tool**: Keep user-facing documentation accurate and current with minimal effort.

**Documentation Principles**:
- **Comprehensive yet easy to follow** - Complete information presented clearly
- **Detailed yet targeted** - In-depth content focused on user needs
- **Quickstart-enabled** - Fast onboarding path for new users

**Focus**: Maintain the docs that users actually see and rely on for using The System.

---

## 🚨 Problem Statement

### **Current Pain Points**
1. **Stale Counts**: "18 agents, 44 commands" hardcoded in multiple files
2. **Broken Links**: Internal references break when files move
3. **Missing Updates**: New agents/commands don't appear in reference tables
4. **Example Drift**: Code examples become outdated
5. **No Quickstart**: Users need fast onboarding path to try The System

### **Documentation Principle Gaps**
- **Comprehensive yet easy**: Info scattered across multiple files
- **Detailed yet targeted**: Hard to find the right level of detail
- **Quickstart-enabled**: No fast path from discovery to first success

### **Not Solving (Intentionally)**
- Complex content generation
- Smart merging of manual vs auto content
- Multi-format output
- Deep validation of all content

---

## 🛠️ Simple Solution Design

### **Single Command: `/ts-user-docs-update`**

```bash
# Basic usage
/ts-user-docs-update                    # Full update: counts, links, quickstart, flag issues

# Modes
/ts-user-docs-update --validate         # Check only, no changes
/ts-user-docs-update --counts-only      # Just update agent/command counts
/ts-user-docs-update --links-only       # Just validate internal links
/ts-user-docs-update --quickstart       # Generate/update quickstart guide only
```

### **Scope: User-Facing Documentation Only**

**What Gets Updated:**
- `README.md` - Main project documentation
- `CLAUDE.md` - Framework instructions for users
- `docs/README.md` - Documentation overview
- `QUICKSTART.md` - Fast onboarding guide (NEW)
- `docs/user/*.md` - User documentation files:
  - `agents.md` - Agent reference
  - `commands.md` - Command reference
  - `workflow.md` - Workflow guide
  - `architecture.md` - Architecture overview
  - `configuration.md` - Configuration guide
  - `customization.md` - Customization guide
  - `hitl-gates.md` - HITL gates reference

**What's Excluded:**
- `docs/developer/` - Internal development docs
- `input/` - Reference materials (gitignored)
- `output/` - Generated projects (gitignored)
- Implementation plans and design docs

### **What It Does (5 Core Functions)**

#### **1. Auto-Update Counts** ⚡
```bash
# Find and replace in user-facing markdown files only:
"18 agents" → "X agents" (actual count from .claude/agents/)
"44 commands" → "Y commands" (actual count from .claude/commands/)

# Target files:
- README.md
- CLAUDE.md
- docs/README.md
- docs/user/*.md (agents, commands, workflow, etc.)
```

#### **2. Validate Internal Links** 🔗
```bash
# Check links in user docs only:
- Links from README.md to CLAUDE.md
- Links from user-guide.md to framework files
- Cross-references between user documentation
- Anchor links to sections within user docs

# Report broken links that impact user experience
```

#### **3. Update Agent/Command Tables** 📋
```bash
# Simple table updates in user-facing files:
# In README.md - update framework overview stats
# In CLAUDE.md - update command reference tables
# In docs/user/agents.md - update agent directory table
# In docs/user/commands.md - update command reference table

# Use simple regex replacements, focus on user-visible counts
```

#### **4. Flag Issues for Manual Review** 🚩
```bash
# Report but don't auto-fix:
- New agents not mentioned in overview docs
- New commands not in quick reference
- TODO comments in documentation
- Obvious typos in headings/titles
```

#### **5. Generate/Update Quickstart Guide** 🚀
```bash
# Create QUICKSTART.md with essential onboarding flow:
# 1. Installation verification
# 2. First project creation (/ts-new-project hello-world)
# 3. Essential commands for immediate success
# 4. Links to detailed documentation

# Principles:
# - 5-minute time-to-first-success
# - Comprehensive yet easy to follow
# - Detailed yet targeted for new users
```

---

## 🏗️ Simple Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                     ts-user-docs-update                        │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  📊 Count       🔗 Link        📋 Table      🚀 Quickstart     │
│   Updater       Validator       Updater      Generator         │
│                                                                 │
│  • Scan dirs    • Check paths   • Regex      • Template        │
│  • Count files  • Test anchors  • Replace    • 5-min flow      │
│  • Replace      • Report broken • Simple     • Principles      │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────────┐ │
│  │                    Issue Reporter                       │ │
│  │                                                         │ │
│  │ • Flag new items                                        │ │
│  │ • List broken links                                     │ │
│  │ • Suggest manual fixes                                  │ │
│  │ • Report missing quickstart updates                     │ │
│  └─────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────┘
```

---

## 🔧 Implementation Plan

### **Single Implementation Phase (4-6 hours)**

#### **Step 1: Create Command (30 min)**
```bash
# Create simple command file
touch .claude/commands/ts-user-docs-update.md
```

#### **Step 2: Implement Core Functions (4-5 hours)**

**Count Updater (1 hour)**
```python
def update_counts():
    agent_count = len(glob(".claude/agents/*.md"))
    command_count = len(glob(".claude/commands/*.md"))

    # Simple regex replacements across all .md files
    for md_file in glob("**/*.md", recursive=True):
        content = read_file(md_file)
        content = re.sub(r'\d+ agents', f'{agent_count} agents', content)
        content = re.sub(r'\d+ commands', f'{command_count} commands', content)
        write_file(md_file, content)
```

**Link Validator (1 hour)**
```python
def validate_links():
    broken_links = []

    for md_file in glob("**/*.md", recursive=True):
        content = read_file(md_file)
        # Find markdown links [text](path) and [text](#anchor)
        links = re.findall(r'\[.*?\]\((.*?)\)', content)

        for link in links:
            if not validate_link(link):
                broken_links.append((md_file, link))

    return broken_links
```

**Table Updater (1 hour)**
```python
def update_tables():
    # Target specific known tables in key files
    # Use simple string replacement for agent/command listings

    # Example: Update README.md agent overview table
    update_readme_agent_table()

    # Example: Update CLAUDE.md command reference
    update_claude_command_reference()
```

**Issue Reporter (30 min)**
```python
def report_issues():
    # Check for new agents not in docs
    # Check for new commands not in quick reference
    # Flag TODO comments
    # Simple heuristic checks
```

**Quickstart Generator (1.5 hours)**
```python
def generate_quickstart():
    # Create QUICKSTART.md with template-based generation
    # Include:
    # - Prerequisites check
    # - Installation verification
    # - First project workflow (/ts-new-project hello-world)
    # - Essential commands for success
    # - Links to comprehensive documentation

    # Principles implemented:
    # - Comprehensive yet easy to follow
    # - Detailed yet targeted
    # - 5-minute time-to-first-success
```

#### **Step 3: Integration & Testing (1 hour)**
- Add to command structure
- Test on current documentation
- Verify no content corruption

#### **Step 4: Documentation (30 min)**
- Add usage instructions
- Document what it does/doesn't do

---

## 📁 Minimal File Changes

```
.claude/commands/
└── ts-user-docs-update.md         # NEW: User doc maintenance command

QUICKSTART.md                       # NEW: Fast onboarding guide

# No new agents needed - use technical-writer agent
# Simple template for quickstart generation
# No backup system initially (rely on git)
```

---

## 🎯 What Gets Fixed Automatically (User Impact Focus)

### **High-Impact, Low-Risk Updates**
- ✅ Agent count in README.md: "18 agents" → actual count
- ✅ Command count in CLAUDE.md: "44 commands" → actual count
- ✅ Framework overview stats in all user documentation
- ✅ Quick reference tables in user documentation
- ✅ QUICKSTART.md generation/updates: 5-minute onboarding flow
- ✅ Broken links between user docs: Report (don't auto-fix)

### **What Gets Flagged for Manual Review**
- 🚩 New agents not mentioned in user overview
- 🚩 New commands missing from user quick reference
- 🚩 Broken links that affect user experience
- 🚩 Outdated examples in user guides
- 🚩 TODO comments in user-facing documentation

---

## 🚫 What It Doesn't Do (By Design)

- ❌ Complex content generation
- ❌ Smart merging of content
- ❌ Template-based documentation
- ❌ Multi-format output
- ❌ Backup/restore (use git)
- ❌ Cross-reference mapping
- ❌ Content validation beyond links
- ❌ Example testing

---

## 📊 Expected Results (User Experience Focus)

### **Immediate User Benefits (Day 1)**
- Accurate counts in all user-facing documentation
- No broken links when users navigate documentation
- Up-to-date quick reference guides
- 5-minute maintenance vs 30+ minutes manual updates

### **Ongoing User Value**
- Users always see current framework capabilities
- No confusion from outdated agent/command counts
- Reliable cross-references between user documentation
- Faster onboarding with accurate guides

### **ROI Estimate**
- **Investment**: 5-7 hours development
- **User Impact**: Immediate accuracy + 5-minute onboarding
- **Maintenance Savings**: 15-20 minutes per documentation update
- **User Acquisition**: Faster onboarding = better adoption
- **Break-even**: After ~20 documentation updates
- **Confidence**: High (simple, low-risk changes)

---

## 🧪 Validation Approach

### **Simple Test Plan**
1. **Count Accuracy**: Verify counts match actual files
2. **Link Validation**: Test with known good/bad links
3. **No Content Loss**: Ensure no corruption of existing content
4. **Regression Test**: Compare before/after documentation

### **Safety Measures**
- **Git Required**: Only run in git repositories
- **Dry Run Mode**: `--validate` shows changes without applying
- **Simple Changes**: Only count/link updates, nothing complex
- **Manual Review**: Flag complex issues, don't auto-fix

---

## 🔄 Future Enhancements (If Successful)

### **Phase 2 (Optional, 2-4 hours each)**
1. **Template Updates**: Simple template-based section updates
2. **Example Validation**: Basic syntax checking of code examples
3. **External Link Checking**: HTTP link validation
4. **Auto-backup**: Simple backup before changes

### **Success Criteria for Phase 2**
- Phase 1 proves valuable
- Users request additional automation
- Manual review burden still significant

---

## 🎯 Success Criteria

### **Functional**
- [ ] Updates agent/command counts accurately
- [ ] Identifies broken internal links
- [ ] Completes in <30 seconds
- [ ] No false positives in link validation
- [ ] Does not corrupt existing content

### **User Experience**
- [ ] Clear, actionable output
- [ ] Easy to understand what changed
- [ ] Obvious what needs manual attention
- [ ] Integrates smoothly with existing workflow

---

## 💡 Key Design Decisions

### **Simplicity Over Completeness**
- Fix common issues automatically
- Flag complex issues for humans
- No attempt to solve every documentation problem

### **Low Risk, High Value**
- Only make changes we're 100% confident about
- Preserve all existing content
- Use git for backup/rollback

### **Build vs Buy vs Manual**
- This tool: Count updates, link validation
- Manual: Content writing, complex restructuring
- Future tools: Templates, smart merging (if needed)

---

## 🚀 Implementation Decision

**Recommendation**: Proceed with this simple approach

**Why**:
- Addresses 80% of documentation maintenance pain
- Low risk of content corruption
- Quick to implement and validate
- Can evolve based on actual usage patterns
- Provides immediate value

**Next Steps**:
1. Get approval for simple approach
2. Implement in single day
3. Test on current documentation
4. Evaluate effectiveness before considering complexity

---

**Document Version**: 1.0
**Author**: Framework Development Team
**Date**: December 28, 2024
**Status**: READY FOR REVIEW