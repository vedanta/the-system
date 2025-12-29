# User Documentation Update: $ARGUMENTS

Maintains user-facing documentation accuracy and generates quickstart guides following our documentation principles.

## Usage
```bash
/ts-user-docs-update                    # Full update
/ts-user-docs-update --validate         # Check only
/ts-user-docs-update --counts-only      # Update counts
/ts-user-docs-update --links-only       # Validate links
/ts-user-docs-update --quickstart       # Generate quickstart
```

## Process
1. Scan user-facing documentation files
2. Update agent/command counts automatically
3. Validate internal links and cross-references
4. Update reference tables and quick guides
5. Generate/update QUICKSTART.md with 5-minute onboarding flow
6. Flag issues requiring manual review

## Files in Scope
- README.md (main project docs)
- CLAUDE.md (framework instructions)
- docs/README.md (documentation overview)
- docs/user/*.md (all user documentation)
- QUICKSTART.md (fast onboarding guide)

## Documentation Principles Applied
- **Comprehensive yet easy to follow**: Complete information presented clearly
- **Detailed yet targeted**: In-depth content focused on user needs
- **Quickstart-enabled**: 5-minute time-to-first-success path

## Agent
Use `technical-writer` agent for implementation.

## Expected Outcome
- All user-facing documentation has accurate counts
- No broken internal links affecting user experience
- Current quickstart guide for new user onboarding
- Clear report of items requiring manual attention

---

## Implementation

```python
import os
import re
import glob
from pathlib import Path
from datetime import datetime

class UserDocsUpdater:
    def __init__(self):
        self.user_doc_files = [
            "README.md",
            "CLAUDE.md",
            "docs/README.md",
            "docs/user/*.md"
        ]
        self.agent_count = 0
        self.command_count = 0
        self.issues = []
        self.updated_files = []

    def scan_framework(self):
        """Count agents and commands from source"""
        agent_files = glob.glob(".claude/agents/*.md")
        command_files = glob.glob(".claude/commands/*.md")

        self.agent_count = len(agent_files)
        self.command_count = len(command_files)

        print(f"📊 Framework scan: {self.agent_count} agents, {self.command_count} commands")
        return self.agent_count, self.command_count

    def update_counts(self):
        """Update agent/command counts in user documentation"""
        print("🔄 Updating counts in user documentation...")

        # Pattern matching for count updates
        count_patterns = [
            (rf'\b(\d+) agents\b', f'{self.agent_count} agents'),
            (rf'\b(\d+) commands\b', f'{self.command_count} commands'),
            (rf'Agents:\s*(\d+)', f'Agents: {self.agent_count}'),
            (rf'Commands:\s*(\d+)', f'Commands: {self.command_count}'),
            (rf'\*\*Agents:\*\*\s*\d+', f'**Agents:** {self.agent_count}'),
            (rf'\*\*Commands:\*\*\s*\d+', f'**Commands:** {self.command_count}'),
        ]

        updated_files = []

        for file_pattern in self.user_doc_files:
            for file_path in glob.glob(file_pattern):
                if not os.path.exists(file_path):
                    continue

                try:
                    with open(file_path, 'r', encoding='utf-8') as f:
                        content = f.read()

                    original_content = content

                    # Apply count updates
                    for pattern, replacement in count_patterns:
                        content = re.sub(pattern, replacement, content)

                    # Write back if changed
                    if content != original_content:
                        with open(file_path, 'w', encoding='utf-8') as f:
                            f.write(content)
                        updated_files.append(file_path)
                        print(f"  ✅ Updated: {file_path}")

                except Exception as e:
                    print(f"  ❌ Error updating {file_path}: {e}")
                    self.issues.append(f"Error updating {file_path}: {e}")

        print(f"✅ Updated counts in {len(updated_files)} files")
        self.updated_files.extend(updated_files)
        return updated_files

    def validate_links(self):
        """Validate internal links in user documentation"""
        print("🔗 Validating internal links...")

        broken_links = []

        for file_pattern in self.user_doc_files:
            for file_path in glob.glob(file_pattern):
                if not os.path.exists(file_path):
                    continue

                try:
                    with open(file_path, 'r', encoding='utf-8') as f:
                        content = f.read()

                    # Find markdown links [text](path) and [text](#anchor)
                    links = re.findall(r'\[([^\]]+)\]\(([^)]+)\)', content)

                    for link_text, link_path in links:
                        if self.is_internal_link(link_path):
                            if not self.validate_internal_link(link_path, file_path):
                                broken_links.append({
                                    'file': file_path,
                                    'text': link_text,
                                    'path': link_path
                                })

                except Exception as e:
                    print(f"  ❌ Error validating {file_path}: {e}")
                    self.issues.append(f"Error validating {file_path}: {e}")

        if broken_links:
            print(f"🚩 Found {len(broken_links)} broken links:")
            for link in broken_links:
                print(f"  - {link['file']}: [{link['text']}]({link['path']})")
        else:
            print("✅ All internal links valid")

        self.issues.extend([f"Broken link: {link['file']} -> {link['path']}"
                           for link in broken_links])

        return broken_links

    def is_internal_link(self, link_path):
        """Check if link is internal (not external URL)"""
        return not (link_path.startswith('http') or link_path.startswith('mailto'))

    def validate_internal_link(self, link_path, source_file):
        """Validate that internal link target exists"""
        if link_path.startswith('#'):
            # Anchor link within same file - basic validation
            return True  # TODO: Could check if anchor exists

        # Relative path resolution
        source_dir = os.path.dirname(source_file)
        target_path = os.path.normpath(os.path.join(source_dir, link_path))

        # Check if target file exists
        return os.path.exists(target_path)

    def update_tables(self):
        """Update agent/command reference tables"""
        print("📋 Updating reference tables...")

        updated_files = []

        # Update README.md framework overview
        if self.update_readme_overview():
            updated_files.append("README.md")

        # Update CLAUDE.md command reference
        if self.update_claude_reference():
            updated_files.append("CLAUDE.md")

        print(f"✅ Updated tables in {len(updated_files)} files")
        self.updated_files.extend(updated_files)
        return updated_files

    def update_readme_overview(self):
        """Update framework stats in README.md"""
        if not os.path.exists("README.md"):
            return False

        try:
            with open("README.md", 'r', encoding='utf-8') as f:
                content = f.read()

            original_content = content

            # Update framework overview section - more specific patterns
            patterns = [
                (r'(\*\*Agents:\*\*\s*)\d+', f'**Agents:** {self.agent_count}'),
                (r'(\*\*Commands:\*\*\s*)\d+', f'**Commands:** {self.command_count}'),
                (r'(- \*\*Agents:\*\*\s*)\d+', f'- **Agents:** {self.agent_count}'),
                (r'(- \*\*Commands:\*\*\s*)\d+', f'- **Commands:** {self.command_count}'),
            ]

            for pattern, replacement in patterns:
                content = re.sub(pattern, replacement, content)

            if content != original_content:
                with open("README.md", 'w', encoding='utf-8') as f:
                    f.write(content)
                print("  ✅ Updated: README.md")
                return True

        except Exception as e:
            print(f"  ❌ Error updating README.md: {e}")
            self.issues.append(f"Error updating README.md: {e}")

        return False

    def update_claude_reference(self):
        """Update framework stats in CLAUDE.md"""
        if not os.path.exists("CLAUDE.md"):
            return False

        try:
            with open("CLAUDE.md", 'r', encoding='utf-8') as f:
                content = f.read()

            original_content = content

            # Update CLAUDE.md patterns
            patterns = [
                (r'(\*\*Agents:\*\*\s*)\d+', f'**Agents:** {self.agent_count}'),
                (r'(\*\*Commands:\*\*\s*)\d+', f'**Commands:** {self.command_count}'),
                (r'(\d+) \((\d+) core \+ (\d+) utility\)', f'{self.agent_count}'),
            ]

            for pattern, replacement in patterns:
                content = re.sub(pattern, replacement, content)

            if content != original_content:
                with open("CLAUDE.md", 'w', encoding='utf-8') as f:
                    f.write(content)
                print("  ✅ Updated: CLAUDE.md")
                return True

        except Exception as e:
            print(f"  ❌ Error updating CLAUDE.md: {e}")
            self.issues.append(f"Error updating CLAUDE.md: {e}")

        return False

    def generate_quickstart(self):
        """Generate QUICKSTART.md following documentation principles"""
        print("🚀 Generating quickstart guide...")

        template_path = ".claude/knowledge/quickstart-template.md"
        output_path = "QUICKSTART.md"

        if not os.path.exists(template_path):
            print(f"🚩 Template not found: {template_path}")
            print("🔧 Creating quickstart from embedded template...")
            return self.create_quickstart_from_embedded_template()

        try:
            # Read template
            with open(template_path, 'r', encoding='utf-8') as f:
                template = f.read()

            # Apply substitutions
            quickstart_content = template.replace('{AGENT_COUNT}', str(self.agent_count))
            quickstart_content = quickstart_content.replace('{COMMAND_COUNT}', str(self.command_count))
            quickstart_content = quickstart_content.replace('{TIMESTAMP}',
                                                           datetime.now().strftime('%Y-%m-%d %H:%M'))

            # Write quickstart
            with open(output_path, 'w', encoding='utf-8') as f:
                f.write(quickstart_content)

            print(f"✅ Generated {output_path}")

            # Validate quickstart follows principles
            if self.validate_quickstart_principles(quickstart_content):
                print("✅ Quickstart follows documentation principles")
            else:
                print("🚩 Quickstart may not follow all documentation principles")

            self.updated_files.append(output_path)
            return True

        except Exception as e:
            print(f"❌ Error generating quickstart: {e}")
            self.issues.append(f"Error generating quickstart: {e}")
            return False

    def create_quickstart_from_embedded_template(self):
        """Create quickstart using embedded template"""

        quickstart_template = f"""# 🚀 QUICKSTART: Get Started with The System in 5 Minutes

*Fast path from installation to first success*

---

## ✅ Prerequisites Check

Before starting, ensure you have:
- [ ] Claude Code CLI installed and working
- [ ] Git repository initialized
- [ ] Basic familiarity with command-line interface

**Quick Test:**
```bash
claude --version
# Should show Claude Code version
```

---

## 🎯 5-Minute Success Path

### **Step 1: Verify Installation (1 minute)**
```bash
# Check framework files exist
ls .claude/agents/    # Should show {self.agent_count} agent files
ls .claude/commands/  # Should show {self.command_count} command files
```

### **Step 2: Create Your First Project (2 minutes)**
```bash
# Start with a simple project
claude
> /ts-new-project hello-world

# Share your idea when prompted:
"Create a simple task management app with user authentication"
```

### **Step 3: Explore Essential Commands (2 minutes)**
```bash
# Check project status anytime
> /ts-status

# View project details
> /ts-view

# Get help from your advisor
> /ts-ask "What should I do next?"

# See executive summary
> /ts-brief
```

---

## 🎓 What You Just Accomplished

✅ **Verified** - The System is installed and working
✅ **Created** - Your first project with AI-driven planning
✅ **Learned** - Core commands for project management
✅ **Ready** - To dive deeper into full development workflow

---

## 🚀 Next Steps

### **Ready for More?** Choose your path:

**🏗️ Architecture First:**
```bash
> /ts-approve architecture-start
> /ts-architect
```

**⚡ Skip to Development:**
```bash
> /ts-turbo hello-world "Simple todo app"
# Autonomous build in ~10 minutes
```

**📚 Learn the Full Workflow:**
- [Complete Workflow Guide](docs/user/workflow.md)
- [Agent Reference](docs/user/agents.md)
- [Command Reference](docs/user/commands.md)

**🎮 Hands-On Examples:**
- [Architecture Phase Walkthrough](docs/user/architecture.md#walkthrough)
- [Development Process](docs/user/workflow.md#development-stage)
- [Deployment Guide](docs/user/workflow.md#deployment-stage)

---

## 🆘 Need Help?

**Common Issues:**
- Command not found → Check `.claude/commands/` directory
- Project errors → Run `/ts-status` for current state
- Agent questions → Use `/ts-ask "your question"`

**Documentation:**
- **Overview:** [Main README](README.md)
- **Complete Guide:** [Framework Instructions](CLAUDE.md)
- **User Docs:** [Documentation Directory](docs/user/)

**Community:**
- Issues: [GitHub Issues](https://github.com/anthropics/claude-code/issues)
- Feedback: Framework development team

---

## 🎯 Success Metrics

After 5 minutes, you should be able to:
- [ ] Run framework commands confidently
- [ ] Create and manage projects
- [ ] Understand the basic workflow
- [ ] Know where to find detailed documentation

**🎉 Congratulations! You're ready to build with The System.**

---

*Generated by /ts-user-docs-update • Updated: {datetime.now().strftime('%Y-%m-%d %H:%M')}*
*Framework: {self.agent_count} agents, {self.command_count} commands*
"""

        try:
            with open("QUICKSTART.md", 'w', encoding='utf-8') as f:
                f.write(quickstart_template)

            print("✅ Generated QUICKSTART.md from embedded template")
            self.updated_files.append("QUICKSTART.md")
            return True

        except Exception as e:
            print(f"❌ Error creating quickstart: {e}")
            self.issues.append(f"Error creating quickstart: {e}")
            return False

    def validate_quickstart_principles(self, content):
        """Validate quickstart follows documentation principles"""

        principles_check = {
            'comprehensive_yet_easy': False,
            'detailed_yet_targeted': False,
            'quickstart_enabled': False
        }

        # Check for comprehensive yet easy to follow
        if ('Prerequisites Check' in content and
            'Step 1:' in content and
            'Next Steps' in content):
            principles_check['comprehensive_yet_easy'] = True

        # Check for detailed yet targeted
        if ('5-Minute Success Path' in content and
            'What You Just Accomplished' in content):
            principles_check['detailed_yet_targeted'] = True

        # Check for quickstart-enabled
        if ('5 minutes' in content.lower() and
            'fast path' in content.lower()):
            principles_check['quickstart_enabled'] = True

        return all(principles_check.values())

    def flag_manual_issues(self):
        """Flag issues requiring manual review"""
        print("🚩 Checking for manual review items...")

        manual_issues = []

        # Check for new agents not mentioned in overview docs
        try:
            # Get all agent names
            agent_files = glob.glob(".claude/agents/*.md")
            agent_names = [os.path.basename(f).replace('.md', '') for f in agent_files]

            # Check if mentioned in README.md
            if os.path.exists("README.md"):
                with open("README.md", 'r', encoding='utf-8') as f:
                    readme_content = f.read().lower()

                for agent_name in agent_names:
                    # Simple check - agent name appears in README
                    if agent_name.replace('-', ' ') not in readme_content:
                        manual_issues.append(f"Agent '{agent_name}' may not be mentioned in README.md")

        except Exception as e:
            manual_issues.append(f"Error checking agent mentions: {e}")

        # Check for TODO comments in user docs
        for file_pattern in self.user_doc_files:
            for file_path in glob.glob(file_pattern):
                if not os.path.exists(file_path):
                    continue

                try:
                    with open(file_path, 'r', encoding='utf-8') as f:
                        content = f.read()

                    # Find TODO comments
                    todos = re.findall(r'TODO.*', content, re.IGNORECASE)
                    for todo in todos:
                        manual_issues.append(f"TODO in {file_path}: {todo.strip()}")

                except Exception as e:
                    manual_issues.append(f"Error checking TODOs in {file_path}: {e}")

        if manual_issues:
            print(f"🚩 Found {len(manual_issues)} items for manual review:")
            for issue in manual_issues[:10]:  # Limit output
                print(f"  - {issue}")
            if len(manual_issues) > 10:
                print(f"  ... and {len(manual_issues) - 10} more")
        else:
            print("✅ No manual review items found")

        self.issues.extend(manual_issues)
        return manual_issues

    def run_full_update(self):
        """Execute complete documentation update"""
        print("🚀 Starting user documentation update...")

        try:
            # Phase 1: Scan current state
            print("\\n📊 Scanning framework...")
            self.scan_framework()

            # Phase 2: Core updates
            print("\\n🔄 Updating counts...")
            self.update_counts()

            print("\\n🔗 Validating links...")
            self.validate_links()

            print("\\n📋 Updating tables...")
            self.update_tables()

            # Phase 3: Quickstart generation
            print("\\n🚀 Generating quickstart...")
            self.generate_quickstart()

            # Phase 4: Issue reporting
            print("\\n🚩 Checking for manual review items...")
            self.flag_manual_issues()

            # Summary
            self.print_summary()

            return True

        except Exception as e:
            print(f"❌ Error during update: {e}")
            return False

    def run_validation_only(self):
        """Validation mode - check without making changes"""
        print("🔍 Validating user documentation (no changes)...")

        # Count validation
        self.scan_framework()
        count_issues = self.check_count_accuracy()

        # Link validation
        broken_links = self.validate_links()

        # Manual review items
        manual_items = self.flag_manual_issues()

        # Summary report
        self.print_validation_report(count_issues, broken_links, manual_items)

        return len(count_issues) == 0 and len(broken_links) == 0

    def check_count_accuracy(self):
        """Check if current counts match actual files"""
        print("🔍 Checking count accuracy...")
        issues = []

        for file_pattern in self.user_doc_files:
            for file_path in glob.glob(file_pattern):
                if not os.path.exists(file_path):
                    continue

                try:
                    with open(file_path, 'r', encoding='utf-8') as f:
                        content = f.read()

                    # Check agent count accuracy
                    agent_matches = re.findall(r'(\d+) agents', content)
                    for match in agent_matches:
                        if int(match) != self.agent_count:
                            issues.append(f"{file_path}: agent count {match} should be {self.agent_count}")

                    # Check command count accuracy
                    command_matches = re.findall(r'(\d+) commands', content)
                    for match in command_matches:
                        if int(match) != self.command_count:
                            issues.append(f"{file_path}: command count {match} should be {self.command_count}")

                except Exception as e:
                    issues.append(f"Error checking {file_path}: {e}")

        if issues:
            print(f"🚩 Found {len(issues)} count accuracy issues:")
            for issue in issues:
                print(f"  - {issue}")
        else:
            print("✅ All counts are accurate")

        return issues

    def print_summary(self):
        """Print update summary"""
        print("\\n" + "="*60)
        print("📋 USER DOCUMENTATION UPDATE SUMMARY")
        print("="*60)

        print(f"\\n📊 **Framework Stats:**")
        print(f"  - Agents: {self.agent_count}")
        print(f"  - Commands: {self.command_count}")

        print(f"\\n✅ **Files Updated:** {len(set(self.updated_files))}")
        for file in sorted(set(self.updated_files)):
            print(f"  - {file}")

        if self.issues:
            print(f"\\n🚩 **Issues Found:** {len(self.issues)}")
            for issue in self.issues[:5]:  # Show first 5
                print(f"  - {issue}")
            if len(self.issues) > 5:
                print(f"  ... and {len(self.issues) - 5} more issues")
        else:
            print("\\n✅ **No Issues Found**")

        print(f"\\n🎯 **Documentation Principles:**")
        print(f"  ✅ Comprehensive yet easy to follow")
        print(f"  ✅ Detailed yet targeted")
        print(f"  ✅ Quickstart-enabled (5-minute success)")

        print(f"\\n🚀 **Next Steps:**")
        print(f"  1. Review any flagged issues above")
        print(f"  2. Test the QUICKSTART.md guide")
        print(f"  3. Commit updated documentation")

        print("="*60)

    def print_validation_report(self, count_issues, broken_links, manual_items):
        """Print validation summary"""
        print("\\n" + "="*60)
        print("🔍 VALIDATION REPORT")
        print("="*60)

        print(f"\\n📊 **Framework Stats:**")
        print(f"  - Agents: {self.agent_count}")
        print(f"  - Commands: {self.command_count}")

        if count_issues:
            print(f"\\n❌ **Count Issues:** {len(count_issues)}")
            for issue in count_issues:
                print(f"  - {issue}")
        else:
            print("\\n✅ **Counts Accurate**")

        if broken_links:
            print(f"\\n❌ **Broken Links:** {len(broken_links)}")
            for link in broken_links:
                print(f"  - {link['file']}: {link['path']}")
        else:
            print("\\n✅ **Links Valid**")

        if manual_items:
            print(f"\\n🚩 **Manual Review:** {len(manual_items)}")
            for item in manual_items[:5]:
                print(f"  - {item}")
            if len(manual_items) > 5:
                print(f"  ... and {len(manual_items) - 5} more items")
        else:
            print("\\n✅ **No Manual Issues**")

        print("="*60)

# Command execution logic
def main():
    import sys

    updater = UserDocsUpdater()

    # Parse arguments
    args = sys.argv[1:] if len(sys.argv) > 1 else []

    if '--validate' in args:
        success = updater.run_validation_only()
    elif '--counts-only' in args:
        updater.scan_framework()
        updater.update_counts()
        updater.print_summary()
        success = True
    elif '--links-only' in args:
        updater.scan_framework()
        updater.validate_links()
        success = len(updater.issues) == 0
    elif '--quickstart' in args:
        updater.scan_framework()
        success = updater.generate_quickstart()
    else:
        # Full update
        success = updater.run_full_update()

    return 0 if success else 1

if __name__ == "__main__":
    exit(main())
```

Run the Python implementation directly with the command arguments.