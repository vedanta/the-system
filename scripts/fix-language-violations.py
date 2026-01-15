#!/usr/bin/env python3
"""
The System - Language Violations Auto-Fixer

Automatically fixes common language principle violations in documentation.
"""

import re
import sys
from pathlib import Path
from typing import Dict, List, Tuple

# Language principle fixes
LANGUAGE_FIXES = {
    # Promotional language fixes
    r'\bamazing\b': 'professional',
    r'\bawesome\b': 'functional',
    r'\bincredible\b': 'comprehensive',
    r'\bfantastic\b': 'effective',
    r'\brevolutionary\b': 'innovative',
    r'\bcutting-edge\b': 'modern',
    r'\btransform your\b': 'build from your',
    r'\bTransform your\b': 'Build from your',
    r'\bunleash\b': 'enable',
    r'\bsupercharge\b': 'enhance',
    r'\bperfect\b': 'optimal',
    r'\bPerfect\b': 'Optimal',
    r'\bseamlessly\b': 'efficiently',
    r'\bSeamlessly\b': 'Efficiently',
    r'\beffortlessly\b': 'easily',
    r'\bultra-\b': '',
    r'\bUltra-\b': '',
    r'\bULTRA-\b': '',
    r'\bsuper-\b': '',
    r'\bSuper-\b': '',
    r'\bwork at the speed\b': 'configure speed vs quality',
    r'\bWork at the Speed\b': 'Configure Speed vs Quality',
    r'\bsmart detection\b': 'keyword detection',
    r'\bSmart Detection\b': 'Keyword Detection',
    r'\bintelligent (?!agent)\b': 'automated ',
    r'\bIntelligent (?!agent)\b': 'Automated ',
    r'\bINTELLIGENT (?!agent)\b': 'AUTOMATED ',

    # Verbose phrase fixes
    r'\bit should be noted that\b': '',
    r'\bplease note that\b': '',
    r'\bin order to\b': 'to',
    r'\bfor the purpose of\b': 'to',
    r'\bit is important to note\b': '',
    r'\bit is worth mentioning\b': '',
    r'\bas previously mentioned\b': '',
    r'\ballow me to\b': '',
    r'\blet me explain\b': '',

    # Specific marketing taglines
    r'Work at the Speed of Thought': 'Configure Speed vs Quality',
    r'Smart/Intelligent Detection': 'Keyword Detection',

    # Example naming fixes
    r'my-awesome-project': 'my-project',
    r'my-amazing-app': 'my-app',
    r'awesome-app': 'my-app',
    r'amazing-project': 'my-project',
}

class LanguageFixer:
    """Auto-fixes language violations in documentation"""

    def __init__(self, root_path: str):
        self.root_path = Path(root_path)
        self.fixes_applied = {}

    def fix_file_content(self, content: str, file_path: str) -> Tuple[str, List[str]]:
        """Apply language fixes to file content"""
        fixes_applied = []
        original_content = content

        for pattern, replacement in LANGUAGE_FIXES.items():
            matches = list(re.finditer(pattern, content, re.IGNORECASE))
            if matches:
                content = re.sub(pattern, replacement, content, flags=re.IGNORECASE)
                fixes_applied.append(f"Fixed '{pattern}' -> '{replacement}' ({len(matches)} occurrences)")

        # Clean up any double spaces or extra whitespace created by removals
        if content != original_content:
            content = re.sub(r'\s+', ' ', content)  # Multiple spaces to single
            content = re.sub(r'^\s+', '', content, flags=re.MULTILINE)  # Leading spaces
            content = re.sub(r'\n\n\n+', '\n\n', content)  # Multiple newlines to double

        return content, fixes_applied

    def fix_file(self, file_path: Path) -> Dict:
        """Fix language violations in a single file"""
        try:
            content = file_path.read_text(encoding='utf-8')
            original_content = content

            # Apply fixes
            fixed_content, fixes = self.fix_file_content(content, str(file_path))

            result = {
                'file': str(file_path.relative_to(self.root_path)),
                'fixes_applied': fixes,
                'changed': fixed_content != original_content
            }

            # Write back if changed
            if result['changed']:
                file_path.write_text(fixed_content, encoding='utf-8')
                print(f"✅ Fixed {file_path.relative_to(self.root_path)} ({len(fixes)} fixes)")

            return result

        except Exception as e:
            return {
                'file': str(file_path.relative_to(self.root_path)),
                'error': str(e),
                'fixes_applied': [],
                'changed': False
            }

    def find_user_documentation_files(self) -> List[Path]:
        """Find user-facing documentation files only"""
        doc_files = []

        # Main user documentation files
        main_docs = [
            'README.md',
            'USER-GUIDE.md',
            'QUICKSTART.md',
            'COMMAND-REFERENCE.md'
        ]

        for doc in main_docs:
            file_path = self.root_path / doc
            if file_path.exists():
                doc_files.append(file_path)

        # User docs directory (skip dev docs to avoid changing technical terms)
        user_docs_dir = self.root_path / 'docs' / 'user'
        if user_docs_dir.exists():
            doc_files.extend(user_docs_dir.glob('*.md'))

        return doc_files

    def run(self):
        """Run language fixes on user documentation"""
        print("🔧 Starting Language Violations Auto-Fixer")
        print("=" * 50)

        # Find user documentation files
        doc_files = self.find_user_documentation_files()
        print(f"📋 Found {len(doc_files)} user documentation files to process")

        results = []
        total_fixes = 0
        files_changed = 0

        for file_path in doc_files:
            result = self.fix_file(file_path)
            results.append(result)

            if result['changed']:
                files_changed += 1
                total_fixes += len(result['fixes_applied'])

        # Generate summary report
        print("\n" + "=" * 50)
        print("📊 Language Fixes Complete")
        print(f"📄 Files processed: {len(doc_files)}")
        print(f"✅ Files changed: {files_changed}")
        print(f"🔧 Total fixes applied: {total_fixes}")

        # Save detailed report
        report_lines = ["# Language Violations Fix Report\n"]

        if files_changed > 0:
            report_lines.append("## Files Changed\n")
            for result in results:
                if result['changed']:
                    report_lines.append(f"### {result['file']}")
                    for fix in result['fixes_applied']:
                        report_lines.append(f"- ✅ {fix}")
                    report_lines.append("")

        # Files with no violations
        clean_files = [r for r in results if not r['changed'] and 'error' not in r]
        if clean_files:
            report_lines.append("## Files Already Clean\n")
            for result in clean_files:
                report_lines.append(f"- ✅ {result['file']}")
            report_lines.append("")

        # Errors
        error_files = [r for r in results if 'error' in r]
        if error_files:
            report_lines.append("## Errors\n")
            for result in error_files:
                report_lines.append(f"- ❌ {result['file']}: {result['error']}")
            report_lines.append("")

        report_content = "\n".join(report_lines)
        report_path = self.root_path / 'language-fixes-report.md'
        report_path.write_text(report_content, encoding='utf-8')

        print(f"📄 Detailed report saved to: {report_path.relative_to(self.root_path)}")

        return total_fixes > 0

def main():
    """Main entry point"""
    if len(sys.argv) > 1:
        root_path = sys.argv[1]
    else:
        root_path = os.getcwd()

    fixer = LanguageFixer(root_path)
    success = fixer.run()

    return 0

if __name__ == '__main__':
    import os
    sys.exit(main())