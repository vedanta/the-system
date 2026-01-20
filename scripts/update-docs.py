#!/usr/bin/env python3
"""
The System - User Documentation Update System

Maintains accuracy and enforces documentation principles across all user-facing docs.
Scans framework, updates counts, validates links, checks language standards.
"""

import os
import re
import sys
import glob
import json
from pathlib import Path
from typing import Dict, List, Tuple, Optional, Set
from dataclasses import dataclass
from collections import defaultdict

# Documentation principles patterns
VERBOSE_PATTERNS = [
    r'\bit should be noted that\b',
    r'\bplease note that\b',
    r'\bin order to\b',
    r'\bfor the purpose of\b',
    r'\bit is important to note\b',
    r'\bit is worth mentioning\b',
    r'\bas previously mentioned\b',
    r'\ballow me to\b',
    r'\blet me explain\b',
]

PROMOTIONAL_PATTERNS = [
    r'\bamazing\b',
    r'\bawesome\b',
    r'\bincredible\b',
    r'\bfantastic\b',
    r'\brevolutionary\b',
    r'\bcutting-edge\b',
    r'\btransform your\b',
    r'\bunleash\b',
    r'\bsupercharge\b',
    r'\bperfect\b',
    r'\bseamlessly\b',
    r'\beffortlessly\b',
    r'\bultra-\b',
    r'\bsuper-\b',
    r'\bwork at the speed\b',
    r'\bsmart detection\b',
    r'\bintelligent (?!agent)\b',
]

@dataclass
class ValidationResult:
    """Result of validation check"""
    file_path: str
    issues: List[str]
    warnings: List[str]
    updates: List[str]

@dataclass
class FrameworkStats:
    """Current framework statistics"""
    agent_count: int
    command_count: int
    stage_count: int
    hitl_gates: int

class DocumentationUpdater:
    """Main documentation update system"""

    def __init__(self, root_path: str):
        self.root_path = Path(root_path)
        self.results: Dict[str, ValidationResult] = {}
        self.framework_stats = FrameworkStats(0, 0, 5, 8)  # Defaults

    def scan_framework(self) -> FrameworkStats:
        """Scan framework files to get current counts"""
        print("🔍 Scanning framework structure...")

        # Count agents
        agent_files = list(self.root_path.glob('.claude/agents/*.md'))
        agent_count = len(agent_files)
        print(f"   Found {agent_count} agent files")

        # Count commands
        command_files = list(self.root_path.glob('.claude/commands/*.md'))
        command_count = len(command_files)
        print(f"   Found {command_count} command files")

        # Count stages (hardcoded as per framework design)
        stage_count = 5

        # Count HITL gates (hardcoded as per framework design)
        hitl_gates = 8

        self.framework_stats = FrameworkStats(
            agent_count=agent_count,
            command_count=command_count,
            stage_count=stage_count,
            hitl_gates=hitl_gates
        )

        print(f"📊 Framework stats: {agent_count} agents, {command_count} commands, {stage_count} stages, {hitl_gates} HITL gates")
        return self.framework_stats

    def find_documentation_files(self) -> List[Path]:
        """Find all documentation files to process"""
        doc_files = []

        # Main documentation files
        main_docs = [
            'README.md',
            'USER-GUIDE.md',
            'CLAUDE.md',
            'QUICKSTART.md'
        ]

        for doc in main_docs:
            file_path = self.root_path / doc
            if file_path.exists():
                doc_files.append(file_path)

        # Docs directory
        docs_dir = self.root_path / 'docs'
        if docs_dir.exists():
            doc_files.extend(docs_dir.glob('**/*.md'))

        return doc_files

    def update_counts_in_content(self, content: str, file_path: str) -> Tuple[str, List[str]]:
        """Update framework counts in content"""
        updates = []

        # Agent count patterns
        agent_patterns = [
            (r'(\*\*Agents:\*\*\s+)\d+', f'\\g<1>{self.framework_stats.agent_count}'),
            (r'(Agents:\s*)\d+', f'\\g<1>{self.framework_stats.agent_count}'),
            (r'(\d+)\s+agent', f'{self.framework_stats.agent_count} agent'),
            (r'(19)\s+specialized\s+AI\s+agents', f'{self.framework_stats.agent_count} specialized AI agents'),
        ]

        # Command count patterns
        command_patterns = [
            (r'(\*\*Commands:\*\*\s+)\d+', f'\\g<1>{self.framework_stats.command_count}'),
            (r'(Commands:\s*)\d+', f'\\g<1>{self.framework_stats.command_count}'),
            (r'(\d+)\s+command', f'{self.framework_stats.command_count} command'),
            (r'(48)\s+commands', f'{self.framework_stats.command_count} commands'),
        ]

        # Stage count patterns
        stage_patterns = [
            (r'(\*\*Stages:\*\*\s+)\d+', f'\\g<1>{self.framework_stats.stage_count}'),
            (r'(Stages:\s*)\d+', f'\\g<1>{self.framework_stats.stage_count}'),
        ]

        # HITL gates patterns
        hitl_patterns = [
            (r'(\*\*HITL\s+Gates:\*\*\s+)\d+', f'\\g<1>{self.framework_stats.hitl_gates}'),
            (r'(HITL\s+Gates:\s*)\d+', f'\\g<1>{self.framework_stats.hitl_gates}'),
        ]

        all_patterns = agent_patterns + command_patterns + stage_patterns + hitl_patterns

        for pattern, replacement in all_patterns:
            new_content = re.sub(pattern, replacement, content, flags=re.IGNORECASE)
            if new_content != content:
                updates.append(f"Updated count pattern: {pattern}")
                content = new_content

        return content, updates

    def validate_markdown_links(self, content: str, file_path: str) -> List[str]:
        """Validate internal markdown links"""
        issues = []

        # Find all markdown links [text](path)
        link_pattern = r'\[([^\]]+)\]\(([^)]+)\)'
        links = re.findall(link_pattern, content)

        for text, link in links:
            # Skip external links
            if link.startswith('http') or link.startswith('mailto'):
                continue

            # Remove anchors for file existence check
            file_link = link.split('#')[0] if '#' in link else link

            # Skip empty file links (anchor-only links)
            if not file_link:
                continue

            # Resolve relative to current file
            current_dir = Path(file_path).parent
            target_path = current_dir / file_link

            if not target_path.exists():
                issues.append(f"Broken link: [{text}]({link}) -> {target_path}")

        return issues

    def check_language_principles(self, content: str) -> List[str]:
        """Check for violations of language principles"""
        violations = []

        # Check for verbose patterns
        for pattern in VERBOSE_PATTERNS:
            matches = re.finditer(pattern, content, re.IGNORECASE)
            for match in matches:
                line_num = content[:match.start()].count('\n') + 1
                violations.append(f"Line {line_num}: Verbose phrase '{match.group()}' - consider direct alternative")

        # Check for promotional patterns
        for pattern in PROMOTIONAL_PATTERNS:
            matches = re.finditer(pattern, content, re.IGNORECASE)
            for match in matches:
                line_num = content[:match.start()].count('\n') + 1
                violations.append(f"Line {line_num}: Promotional language '{match.group()}' - use functional description")

        return violations

    def validate_file(self, file_path: Path) -> ValidationResult:
        """Validate and update a single documentation file"""
        print(f"📝 Processing {file_path.relative_to(self.root_path)}")

        try:
            content = file_path.read_text(encoding='utf-8')
            original_content = content

            issues = []
            warnings = []
            updates = []

            # Update framework counts
            content, count_updates = self.update_counts_in_content(content, str(file_path))
            updates.extend(count_updates)

            # Validate markdown links
            link_issues = self.validate_markdown_links(content, str(file_path))
            issues.extend(link_issues)

            # Check language principles
            language_violations = self.check_language_principles(content)
            warnings.extend(language_violations)

            # Write back if content changed
            if content != original_content:
                file_path.write_text(content, encoding='utf-8')
                updates.append("File updated with new counts")

            return ValidationResult(
                file_path=str(file_path.relative_to(self.root_path)),
                issues=issues,
                warnings=warnings,
                updates=updates
            )

        except Exception as e:
            return ValidationResult(
                file_path=str(file_path.relative_to(self.root_path)),
                issues=[f"Error processing file: {str(e)}"],
                warnings=[],
                updates=[]
            )

    def generate_quickstart(self) -> str:
        """Generate/update QUICKSTART.md content"""
        quickstart_content = f"""# The System - 5-Minute Quickstart

Get from idea to deployed application in 5 minutes.

## What is The System?

An autonomous software development framework with {self.framework_stats.agent_count} AI agents that builds production apps from your ideas.

## Quick Install

```bash
# Clone the framework
git clone https://github.com/vedanta/the-system.git
cd the-system

# Verify installation
./scripts/verify-the-system.sh
```

## 5-Minute App Creation

### Option 1: Supervised Mode (Recommended for first time)

```bash
# Start Claude Code in framework directory
claude

# Create new project
/ts-new-project my-app
# Describe your app idea when prompted

# Quick approval workflow
/ts-approve architecture-start
/ts-assess
/ts-architect
/ts-approve architecture-lock
/ts-approve green-light

# Auto-build complete application
/ts-turbo-continue my-app
```

### Option 2: Fully Autonomous (Turbo Mode)

```bash
claude

# One command - complete app
/ts-turbo my-app "A task management app with user authentication and categories"

# ⚡ Runs all {self.framework_stats.stage_count} stages automatically
# ⚡ Bypasses {self.framework_stats.hitl_gates} HITL gates
# ⚡ Generates complete project in output/my-app/
```

## Deploy in 30 Seconds

```bash
# Deploy to managed platforms
/ts-push vercel        # Frontend to Vercel
/ts-push railway       # Backend to Railway
/ts-push neon          # Database to Neon

# Check deployment
/ts-live-status
```

## What You Get

After 5 minutes, you have:

- ✅ **Full-stack application** with chosen tech stack
- ✅ **Production-ready code** with TypeScript, tests, documentation
- ✅ **Database schema** with migrations and models
- ✅ **Authentication system** integrated and configured
- ✅ **Deployment configuration** for major platforms
- ✅ **CI/CD pipelines** ready to use
- ✅ **Comprehensive documentation** including API reference

## Technology Stacks Available

| Frontend | Backend | Database | Auth |
|----------|---------|----------|------|
| Next.js | FastAPI | PostgreSQL | Clerk |
| React | Node.js | SQLite | NextAuth |
| Vue/Nuxt | Express | DuckDB | Custom JWT |
| Svelte | Python | MongoDB | |

## Common Commands

```bash
/ts-status              # Check current project status
/ts-help               # Browse all {self.framework_stats.command_count} commands
/ts-turbo --help       # Autonomous mode help
/ts-push --help        # Deployment options
```

## Next Steps

- **Tutorial:** [USER-GUIDE.md](USER-GUIDE.md) - Complete framework guide
- **Commands:** [docs/user/commands.md](docs/user/commands.md) - All {self.framework_stats.command_count} commands
- **Architecture:** [docs/architecture.md](docs/architecture.md) - Technical details

## Need Help?

```bash
claude
> /ts-help                    # Interactive command browser
> /ts-help turbo              # Specific command help
> /ts-quickref                # Quick reference card
```

**Time to first deployed app: 5 minutes** ⚡
"""
        return quickstart_content

    def update_quickstart(self):
        """Update or create QUICKSTART.md"""
        print("📄 Updating QUICKSTART.md...")

        quickstart_path = self.root_path / 'QUICKSTART.md'
        new_content = self.generate_quickstart()

        quickstart_path.write_text(new_content, encoding='utf-8')
        print(f"✅ Updated {quickstart_path.relative_to(self.root_path)}")

    def validate_progressive_disclosure(self) -> List[str]:
        """Validate progressive disclosure structure"""
        issues = []

        # Check if key files exist
        key_files = {
            'README.md': 'Main entry point',
            'QUICKSTART.md': '5-minute onboarding',
            'USER-GUIDE.md': 'Comprehensive guide'
        }

        for file_name, purpose in key_files.items():
            file_path = self.root_path / file_name
            if not file_path.exists():
                issues.append(f"Missing {purpose}: {file_name}")

        # Check README length (should be streamlined)
        readme_path = self.root_path / 'README.md'
        if readme_path.exists():
            content = readme_path.read_text()
            line_count = len(content.split('\n'))
            if line_count > 200:
                issues.append(f"README.md too long ({line_count} lines) - should be streamlined entry point")

        return issues

    def generate_report(self) -> str:
        """Generate comprehensive validation report"""
        report = []
        report.append("# Documentation Update Report")
        report.append(f"**Framework Stats:** {self.framework_stats.agent_count} agents, {self.framework_stats.command_count} commands, {self.framework_stats.stage_count} stages, {self.framework_stats.hitl_gates} HITL gates")
        report.append("")

        # Summary
        total_files = len(self.results)
        files_with_issues = len([r for r in self.results.values() if r.issues])
        files_with_warnings = len([r for r in self.results.values() if r.warnings])
        files_updated = len([r for r in self.results.values() if r.updates])

        report.append("## Summary")
        report.append(f"- **Files processed:** {total_files}")
        report.append(f"- **Files with issues:** {files_with_issues}")
        report.append(f"- **Files with warnings:** {files_with_warnings}")
        report.append(f"- **Files updated:** {files_updated}")
        report.append("")

        # Issues requiring attention
        if files_with_issues > 0:
            report.append("## 🚨 Issues Requiring Attention")
            for file_path, result in self.results.items():
                if result.issues:
                    report.append(f"### {result.file_path}")
                    for issue in result.issues:
                        report.append(f"- ❌ {issue}")
                    report.append("")

        # Language principle violations
        if files_with_warnings > 0:
            report.append("## ⚠️ Language Principle Violations")
            for file_path, result in self.results.items():
                if result.warnings:
                    report.append(f"### {result.file_path}")
                    for warning in result.warnings:
                        report.append(f"- ⚠️ {warning}")
                    report.append("")

        # Successful updates
        if files_updated > 0:
            report.append("## ✅ Successful Updates")
            for file_path, result in self.results.items():
                if result.updates:
                    report.append(f"### {result.file_path}")
                    for update in result.updates:
                        report.append(f"- ✅ {update}")
                    report.append("")

        # Progressive disclosure validation
        disclosure_issues = self.validate_progressive_disclosure()
        if disclosure_issues:
            report.append("## 📚 Progressive Disclosure Issues")
            for issue in disclosure_issues:
                report.append(f"- 📚 {issue}")
            report.append("")

        return "\n".join(report)

    def run(self):
        """Run the complete documentation update process"""
        print("🚀 Starting Documentation Update System")
        print("=" * 50)

        # Scan framework
        self.scan_framework()

        # Update quickstart
        self.update_quickstart()

        # Find and process all documentation files
        doc_files = self.find_documentation_files()
        print(f"\n📋 Found {len(doc_files)} documentation files to process")

        for file_path in doc_files:
            result = self.validate_file(file_path)
            self.results[str(file_path)] = result

        # Generate and save report
        report = self.generate_report()
        report_path = self.root_path / 'docs-update-report.md'
        report_path.write_text(report, encoding='utf-8')

        print("\n" + "=" * 50)
        print("📊 Documentation Update Complete")
        print(f"📄 Report saved to: {report_path.relative_to(self.root_path)}")

        # Print summary
        total_issues = sum(len(r.issues) for r in self.results.values())
        total_warnings = sum(len(r.warnings) for r in self.results.values())
        total_updates = sum(len(r.updates) for r in self.results.values())

        print(f"✅ {total_updates} updates made")
        if total_warnings > 0:
            print(f"⚠️  {total_warnings} language violations found")
        if total_issues > 0:
            print(f"❌ {total_issues} issues need manual review")

        return total_issues == 0

def main():
    """Main entry point"""
    if len(sys.argv) > 1:
        root_path = sys.argv[1]
    else:
        root_path = os.getcwd()

    if not os.path.exists(root_path):
        print(f"❌ Error: Path {root_path} does not exist")
        sys.exit(1)

    updater = DocumentationUpdater(root_path)
    success = updater.run()

    if not success:
        sys.exit(1)

if __name__ == '__main__':
    main()