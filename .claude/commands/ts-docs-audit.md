# Documentation Audit: $ARGUMENTS

Comprehensive documentation audit system with structure validation, count verification, language rules compliance, and quality assessment.

## Usage

```bash
/ts-docs-audit [--scope=all] [--fix] [--report=detailed]
/ts-docs-audit --language-only
/ts-docs-audit --structure-only
/ts-docs-audit --counts-only
/ts-docs-audit --links-only
/ts-docs-audit --help
```

## Purpose

The Documentation Audit command provides comprehensive analysis and validation of The System's documentation ecosystem, ensuring accuracy, consistency, and professional quality across all user-facing and technical documentation.

The audit validates compliance with The System Writing Standards (`.claude/knowledge/writing-standards.md`), which define implementation requirements for technical documentation including terminology standards, language structure requirements, content organization standards, and quality validation requirements.

## Arguments

### **Scope Options**
- **--scope=all** (default) - Complete audit of all documentation aspects
- **--scope=user** - Focus on user-facing documentation only
- **--scope=technical** - Focus on technical and framework documentation
- **--scope=style** - Focus on Design Department documentation
- **--scope=commands** - Focus on command reference documentation

### **Audit Type Options**
- **--structure-only** - Directory structure, file organization, and discoverability
- **--counts-only** - Agent and command count validation across all files
- **--language-only** - Language rules, terminology, and writing quality
- **--links-only** - Cross-reference validation and link verification
- **--github-only** - GitHub markdown compatibility and display validation

### **Action Options**
- **--fix** - Automatically fix issues where possible (counts, formatting, etc.)
- **--report=summary** - Executive summary only
- **--report=detailed** (default) - Comprehensive detailed report
- **--report=json** - Machine-readable JSON output
- **--save-to=path** - Custom location for audit reports

### **Quality Options**
- **--strict** - Apply strict quality standards (enterprise-grade)
- **--recommendations** - Include improvement recommendations
- **--baseline** - Create quality baseline for future comparisons

## Process

### **Phase 1: Documentation Discovery and Cataloging**

```
╔══════════════════════════════════════════════════════════════════╗
║  📋 DOCUMENTATION AUDIT INITIATED                               ║
╠══════════════════════════════════════════════════════════════════╣
║  Scope: [all/user/technical/style/commands]                     ║
║  Mode: [structure/counts/language/links/github/complete]        ║
║  Auto-Fix: [enabled/disabled]                                   ║
║  Quality Level: [standard/strict]                               ║
╚══════════════════════════════════════════════════════════════════╝
```

#### **Step 1: Discovery and Classification**

1. **Launch Documentation Auditor Agent**
   ```
   Agent: documentation-auditor
   Mode: comprehensive-audit
   Input: {
     scope: [specified-scope],
     auditTypes: [selected-audit-types],
     autoFix: [true/false],
     qualityLevel: [standard/strict]
   }
   ```

2. **File Discovery and Classification**
   ```
   [Phase 1] 🔍 Discovering Documentation Files...
   ├── User Documentation: README.md, USER-GUIDE.md, QUICKSTART.md
   ├── Technical Documentation: CLAUDE.md, docs/user/*.md, docs/dev/*.md
   ├── Command Documentation: .claude/commands/*.md
   ├── Agent Documentation: .claude/agents/*.md
   ├── Style Documentation: docs/user/design-style-system.md
   └── Specialized Documentation: CHANGELOG.md, CONTRIBUTING.md, etc.
   ```

3. **Framework Statistics Collection**
   - Count actual agent files in `.claude/agents/`
   - Count actual command files in `.claude/commands/`
   - Identify documentation files referencing these counts
   - Create accuracy baseline for validation

### **Phase 2: Structural Audit**

#### **Step 2: Directory Structure Analysis**

```
[Phase 2A] 🏗️ Analyzing Documentation Structure...
├── Hierarchy Validation: Checking logical organization
├── File Naming: Validating naming conventions
├── Accessibility: Assessing discoverability paths
└── Completeness: Identifying missing documentation areas
```

1. **Organization Assessment**
   - Validate documentation hierarchy and logical flow
   - Check for orphaned or misplaced documentation files
   - Assess user journey paths through documentation
   - Identify gaps in coverage areas

2. **File Naming and Location Validation**
   - Verify adherence to naming conventions
   - Check for consistent file placement
   - Validate README presence in key directories
   - Assess cross-platform path compatibility

#### **Step 3: Count Accuracy Validation**

```
[Phase 2B] 🔢 Validating Framework Statistics...
├── Agent Count Verification: Cross-referencing actual vs documented
├── Command Count Verification: Cross-referencing actual vs documented
├── Badge Updates: Checking README badge accuracy
└── Script Alignment: Validating verification script expectations
```

1. **Statistical Accuracy Analysis**
   - Compare actual filesystem counts with documented counts
   - Identify all files containing count references
   - Flag inconsistencies and inaccuracies
   - Generate correction recommendations

2. **Verification Script Validation**
   - Check alignment between scripts/verify-the-system.sh and reality
   - Validate README badge accuracy
   - Ensure QUICKSTART commands match actual counts

### **Phase 3: Language Rules Audit**

#### **Step 4: Language Quality Assessment**

```
[Phase 3] 📝 Auditing Language Rules and Quality...
├── Terminology Consistency: Validating framework vocabulary
├── Tone and Voice: Checking professional consistency
├── Writing Standards: Assessing clarity and readability
├── Technical Accuracy: Verifying technical descriptions
└── User Experience: Evaluating user-facing language quality
```

1. **Terminology Consistency Analysis**
   - **Framework Terms**: Ensure consistent usage of "The System", "ASDO", "agents", "commands"
   - **Technical Terms**: Validate consistent technical vocabulary across files
   - **Command References**: Check `/ts-*` command formatting consistency
   - **Agent References**: Verify agent name consistency and capitalization

2. **Language Rules Compliance**
   ```yaml
   Language Standards:
     tone: professional, concise, action-oriented
     voice: second-person ("you"), active voice preferred
     terminology:
       - "The System" (capitalized, not "the system")
       - "agents" (lowercase unless proper noun)
       - "commands" (lowercase unless in code blocks)
       - "/ts-command" (always in code formatting)
     formatting:
       - Commands in code blocks: `/ts-command`
       - File paths in code: `.claude/agents/`
       - Emphasis: **bold** for importance, *italic* for emphasis
       - Lists: Use "✅" for benefits, "❌" for problems, "⚠️" for warnings
     structure:
       - Headers: Consistent hierarchy (##, ###, ####)
       - Tables: Aligned and complete
       - Code blocks: Proper language specification
   ```

3. **Writing Quality Assessment**
   - **Clarity**: Check for unclear or ambiguous language
   - **Conciseness**: Identify verbose or redundant sections
   - **Completeness**: Ensure adequate explanation depth
   - **Accessibility**: Validate language accessibility for diverse audiences

#### **Step 5: Technical Accuracy Validation**

```
[Phase 3B] 🔬 Validating Technical Accuracy...
├── Command Syntax: Verifying all command examples work
├── File Path References: Checking all path references are valid
├── Code Examples: Validating code block accuracy
└── Workflow Descriptions: Ensuring process accuracy
```

1. **Technical Content Validation**
   - Verify all command examples are syntactically correct
   - Validate file path references exist and are accurate
   - Check code examples for functionality
   - Ensure workflow descriptions match actual behavior

### **Phase 4: Cross-Reference and Link Validation**

#### **Step 6: Link Integrity Analysis**

```
[Phase 4] 🔗 Validating Cross-References and Links...
├── Internal Links: Checking relative path accuracy
├── Cross-Document References: Validating inter-file references
├── Table of Contents: Verifying TOC link functionality
└── External Links: Checking external URL accessibility
```

1. **Internal Link Validation**
   - Check all `[text](file.md)` references for accuracy
   - Validate table of contents links
   - Verify anchor links within documents
   - Test relative path accuracy

2. **Cross-Document Reference Validation**
   - Ensure referenced files exist
   - Validate section references across files
   - Check for broken relative paths
   - Verify external link accessibility

### **Phase 5: GitHub Compatibility Assessment**

#### **Step 7: GitHub Display Validation**

```
[Phase 5] 🐙 Validating GitHub Display Compatibility...
├── Markdown Rendering: Checking GitHub-specific formatting
├── Badge Accuracy: Validating README shield badges
├── Table Formatting: Ensuring proper table display
├── Emoji Support: Checking emoji rendering consistency
└── Code Block Highlighting: Validating syntax highlighting
```

1. **GitHub Markdown Compatibility**
   - Validate GitHub Flavored Markdown compatibility
   - Check table formatting and alignment
   - Verify code block language specification
   - Ensure emoji rendering consistency

2. **Badge and Shield Validation**
   - Verify README badge URLs and display
   - Check badge count accuracy
   - Validate shield.io badge functionality
   - Ensure professional badge appearance

### **Phase 6: Quality Assessment and Recommendations**

#### **Step 8: Comprehensive Quality Scoring**

```
[Phase 6] ⭐ Generating Quality Assessment...
├── Structure Score: Organization and discoverability rating
├── Accuracy Score: Technical and statistical accuracy rating
├── Language Score: Writing quality and consistency rating
├── Usability Score: User experience and accessibility rating
└── Overall Quality: Comprehensive documentation maturity score
```

1. **Quality Metrics Generation**
   ```yaml
   Quality Dimensions:
     structure:
       - organization_clarity: 0-100
       - file_naming_consistency: 0-100
       - navigation_ease: 0-100
     accuracy:
       - count_accuracy: 0-100
       - technical_correctness: 0-100
       - link_integrity: 0-100
     language:
       - terminology_consistency: 0-100
       - writing_clarity: 0-100
       - professional_tone: 0-100
     usability:
       - user_journey_clarity: 0-100
       - accessibility: 0-100
       - discoverability: 0-100
   ```

2. **Improvement Recommendations**
   - Prioritized action items for quality improvement
   - Specific fix recommendations for identified issues
   - Best practices guidance for ongoing maintenance
   - Quality baseline establishment for future audits

### **Phase 7: Auto-Fix and Report Generation**

#### **Step 9: Automatic Issue Resolution**

```
[Phase 7A] 🔧 Applying Automatic Fixes...
├── Count Corrections: Updating agent/command references
├── Link Repairs: Fixing broken internal references
├── Formatting Standardization: Applying consistent formatting
└── Badge Updates: Correcting README shield badges
```

1. **Automated Fixes (when --fix enabled)**
   - Update all count references to accurate numbers
   - Fix broken internal links where possible
   - Standardize formatting inconsistencies
   - Update README badges with correct statistics

2. **Manual Fix Recommendations**
   - Issues requiring human judgment
   - Complex language improvements
   - Structural reorganization suggestions
   - Strategic content improvements

#### **Step 10: Comprehensive Report Generation**

```
[Phase 7B] 📊 Generating Audit Report...
├── Executive Summary: High-level findings and recommendations
├── Detailed Analysis: Comprehensive issue breakdown
├── Quality Metrics: Scoring and benchmarking
├── Action Plan: Prioritized improvement roadmap
└── Compliance Status: Standards adherence assessment
```

1. **Report Formats**
   - **Summary Report**: Executive overview with key metrics
   - **Detailed Report**: Comprehensive analysis with examples
   - **JSON Export**: Machine-readable data for automation
   - **Action Plan**: Prioritized task list for improvements

## Output Structure

### **Default Report Output**

```
output/documentation-audit-[timestamp]/
├── audit-report.md              # Comprehensive detailed report
├── executive-summary.md         # High-level findings and recommendations
├── quality-metrics.json         # Quantified quality scores
├── issues-inventory.json        # Structured list of all identified issues
├── language-analysis.md         # Language rules compliance report
├── link-validation.json         # Cross-reference and link integrity results
├── auto-fix-log.md             # Record of automatic fixes applied
├── recommendations.md           # Prioritized improvement action plan
└── compliance-checklist.md     # Standards adherence assessment
```

### **Report Components**

#### **Executive Summary Format**
```markdown
# Documentation Audit Executive Summary

## Overall Quality Score: [X]/100

### Key Findings
✅ **Strengths:**
- Well-organized documentation structure
- Comprehensive coverage of framework features
- Professional writing quality

❌ **Critical Issues:**
- Agent count inconsistencies across 6 files
- 12 broken internal links requiring attention
- Terminology inconsistencies in technical sections

⚠️ **Recommendations:**
1. **URGENT**: Update agent/command counts in CLAUDE.md and USER-GUIDE.md
2. **HIGH**: Standardize terminology usage across all documentation
3. **MEDIUM**: Improve cross-reference link accuracy

### Quality Metrics
- **Structure**: 85/100 - Well organized, minor navigation improvements needed
- **Accuracy**: 72/100 - Count inconsistencies impact technical credibility
- **Language**: 88/100 - Professional tone, terminology standardization needed
- **Usability**: 90/100 - Excellent user experience, minor accessibility improvements
```

#### **Detailed Analysis Sections**
1. **Statistical Accuracy Report** - Complete breakdown of count inconsistencies
2. **Language Compliance Report** - Terminology and writing standards analysis
3. **Link Integrity Report** - Cross-reference validation results
4. **GitHub Compatibility Report** - Markdown rendering and display validation
5. **Quality Improvement Plan** - Actionable recommendations with priorities

## Examples

### **Complete Documentation Audit**
```bash
# Comprehensive audit with automatic fixes
/ts-docs-audit --fix --recommendations

# Result: Complete documentation quality assessment with auto-corrections applied
```

### **Focused Audits**
```bash
# Language rules compliance only
/ts-docs-audit --language-only --strict

# Count validation across all files
/ts-docs-audit --counts-only --fix

# User documentation focus
/ts-docs-audit --scope=user --report=summary

# GitHub compatibility check
/ts-docs-audit --github-only --recommendations
```

### **Quality Baseline Creation**
```bash
# Establish quality baseline for ongoing monitoring
/ts-docs-audit --baseline --report=json --save-to=docs/quality/

# Regular quality monitoring
/ts-docs-audit --scope=user --report=summary --recommendations
```

### **CI/CD Integration**
```bash
# Automated quality gate for documentation changes
/ts-docs-audit --counts-only --links-only --report=json
# Exit code 0 = pass, non-zero = quality issues found
```

## Language Rules Standards

The Documentation Auditor validates compliance with The System Writing Standards as defined in `.claude/knowledge/writing-standards.md`. This comprehensive specification includes:

### **Framework Terminology Requirements**
- Required terms: "The System", "ASDO", "`/ts-command`" formatting
- Prohibited terms: "the system", "AI agents", "ts commands"
- Technical term standardization: "Human-in-the-Loop", "Infrastructure as Code"
- Agent/command count accuracy: 26 agents, 59 commands

### **Language Structure Implementation**
- Voice: Second person active ("you deploy" not "one deploys")
- Tense: Present ("the agent creates" not "will create")
- Sentence length: Maximum 35 words, preferred under 25 words
- Paragraph structure: 3-5 sentences maximum

### **Content Organization Standards**
- Header hierarchy: H1 (title), H2 (major sections), H3 (subsections), H4 (details)
- List formatting: Hyphen bullets, parallel grammar, consistent punctuation
- Emphasis hierarchy: `**bold**` for critical, `*italic*` for mild, `` `code` `` for technical

### **Quality Validation Requirements**
- Technical accuracy: 100% command syntax validity, file path verification
- Cross-reference integrity: All internal links functional
- Count accuracy: Agent/command statistics verified against filesystem
- Formatting compliance: Markdown standards, GitHub compatibility

**Reference:** Complete implementation details in `.claude/knowledge/writing-standards.md`

## Error Handling

### **Common Audit Scenarios**
```bash
# Large documentation base with many inconsistencies
Info: Found 47 count references across 23 files
Processing: Analyzing language consistency across 156 files
Recommendation: Run with --fix to auto-correct statistical inconsistencies

# Missing or corrupted documentation files
Warning: Cannot access docs/user/missing-file.md referenced in USER-GUIDE.md
Error: Required file README.md not found in expected location
Action: Manual intervention required for missing file resolution

# Language rule violations
Warning: Inconsistent terminology usage found in 8 files
- "the system" found 15 times (should be "The System")
- "/ts-command" not formatted as code in 6 instances
Recommendation: Review language standards in audit report

# Cross-reference validation failures
Error: 12 broken internal links found across documentation
Warning: 3 external links return 404 errors
Action: Check link-validation.json for detailed failure information
```

### **Auto-Fix Limitations**
```bash
# Issues requiring manual intervention
Manual Review Required:
- Complex language improvements requiring human judgment
- Structural reorganization recommendations
- External link repairs (requires content access verification)
- Ambiguous terminology where context determines correct usage

# Successful auto-fixes
Auto-Fixed Successfully:
- Agent count references (25 files updated)
- Command count references (18 files updated)
- Internal link path corrections (8 links repaired)
- Markdown formatting standardization (42 formatting fixes)
```

## Integration with The System

### **Quality Gates Integration**
```bash
# Documentation quality as part of release process
/ts-release → /ts-docs-audit --strict --fix
# Ensures documentation meets release quality standards

# User documentation updates
/ts-user-docs-update → /ts-docs-audit --counts-only
# Validates accuracy of automated documentation updates
```

### **Continuous Quality Monitoring**
```bash
# Weekly documentation health check
/ts-docs-audit --scope=user --report=summary

# Pre-release comprehensive audit
/ts-docs-audit --strict --fix --recommendations

# Post-update validation
/ts-docs-audit --counts-only --links-only
```

### **Documentation Maintenance Workflow**
```bash
# Monthly quality assessment
/ts-docs-audit --baseline --save-to=docs/quality/monthly/

# Quarterly comprehensive review
/ts-docs-audit --strict --recommendations --save-to=docs/quality/quarterly/

# Annual documentation architecture review
/ts-docs-audit --scope=all --report=detailed --recommendations
```

## Success Criteria

### **Quality Targets**
- **Structure Score**: 90+ (Excellent organization and discoverability)
- **Accuracy Score**: 95+ (All counts and technical details accurate)
- **Language Score**: 88+ (Professional, consistent, and clear)
- **Usability Score**: 92+ (Excellent user experience and accessibility)
- **Overall Quality**: 90+ (Enterprise-grade documentation standard)

### **Compliance Standards**
- ✅ **Zero count inconsistencies** across all documentation files
- ✅ **100% link integrity** for internal cross-references
- ✅ **Consistent terminology** according to framework standards
- ✅ **GitHub compatibility** with proper markdown rendering
- ✅ **Professional language quality** meeting enterprise standards

This command establishes comprehensive documentation quality assurance for The System, ensuring professional standards and technical accuracy across all user-facing and technical documentation.