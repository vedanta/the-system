#!/usr/bin/env python3
"""
The System - Complete Documentation Maintenance System

Combines all documentation maintenance tasks into one comprehensive script.
- Scans framework for current stats
- Updates counts across all documentation
- Validates markdown links
- Fixes language principle violations
- Generates/updates quickstart guide
- Validates progressive disclosure
- Creates comprehensive reports
"""

import os
import sys
import argparse
from pathlib import Path

# Import our specific maintenance modules
sys.path.append(str(Path(__file__).parent))

class DocumentationMaintainer:
    """Master documentation maintenance system"""

    def __init__(self, root_path: str, fix_language: bool = True, update_counts: bool = True):
        self.root_path = Path(root_path)
        self.fix_language = fix_language
        self.update_counts = update_counts

    def run_full_maintenance(self):
        """Run complete documentation maintenance"""
        print("🔧 The System - Documentation Maintenance")
        print("=" * 60)
        print(f"📍 Working directory: {self.root_path}")
        print(f"🔤 Language fixes: {'Enabled' if self.fix_language else 'Disabled'}")
        print(f"🔢 Count updates: {'Enabled' if self.update_counts else 'Disabled'}")
        print()

        success = True

        try:
            # Step 1: Update counts and validate structure
            if self.update_counts:
                print("📊 Step 1: Updating counts and validating structure...")
                from update_docs import DocumentationUpdater
                updater = DocumentationUpdater(str(self.root_path))
                counts_success = updater.run()
                if not counts_success:
                    print("⚠️  Count updates completed with issues")
                    success = False
                print()

            # Step 2: Fix language violations
            if self.fix_language:
                print("🔤 Step 2: Fixing language violations...")
                from fix_language_violations import LanguageFixer
                fixer = LanguageFixer(str(self.root_path))
                fixer.run()
                print()

            # Step 3: Final validation
            print("✅ Step 3: Final validation...")
            self.run_final_validation()

            print("=" * 60)
            if success:
                print("🎉 Documentation maintenance completed successfully!")
            else:
                print("⚠️  Documentation maintenance completed with some issues")
                print("📄 Check the generated reports for details")

        except ImportError as e:
            print(f"❌ Error importing maintenance modules: {e}")
            print("Make sure update_docs.py and fix_language_violations.py are in the same directory")
            success = False
        except Exception as e:
            print(f"❌ Unexpected error during maintenance: {e}")
            success = False

        return success

    def run_final_validation(self):
        """Run final validation checks"""
        checks = [
            self.validate_required_files(),
            self.validate_readme_length(),
            self.validate_quickstart_structure(),
        ]

        passed = sum(checks)
        total = len(checks)

        print(f"📋 Final validation: {passed}/{total} checks passed")

        if passed == total:
            print("✅ All validation checks passed")
        else:
            print("⚠️  Some validation checks failed - see details above")

    def validate_required_files(self) -> bool:
        """Validate that required documentation files exist"""
        required_files = [
            'README.md',
            'USER-GUIDE.md',
            'QUICKSTART.md'
        ]

        missing = []
        for file_name in required_files:
            if not (self.root_path / file_name).exists():
                missing.append(file_name)

        if missing:
            print(f"❌ Missing required files: {', '.join(missing)}")
            return False
        else:
            print("✅ All required documentation files exist")
            return True

    def validate_readme_length(self) -> bool:
        """Validate README.md is appropriately sized for entry point"""
        readme_path = self.root_path / 'README.md'
        if not readme_path.exists():
            return False

        content = readme_path.read_text()
        line_count = len(content.split('\n'))

        # Reasonable length for entry point (not too long, not too short)
        if line_count > 400:
            print(f"⚠️  README.md is quite long ({line_count} lines) - consider streamlining")
            return False
        elif line_count < 50:
            print(f"⚠️  README.md is very short ({line_count} lines) - may need more content")
            return False
        else:
            print(f"✅ README.md length is appropriate ({line_count} lines)")
            return True

    def validate_quickstart_structure(self) -> bool:
        """Validate QUICKSTART.md has proper structure"""
        quickstart_path = self.root_path / 'QUICKSTART.md'
        if not quickstart_path.exists():
            print("❌ QUICKSTART.md does not exist")
            return False

        content = quickstart_path.read_text()

        required_sections = [
            '5-Minute Quickstart',
            'Quick Install',
            'What You Get',
            'Common Commands'
        ]

        missing_sections = []
        for section in required_sections:
            if section not in content:
                missing_sections.append(section)

        if missing_sections:
            print(f"❌ QUICKSTART.md missing sections: {', '.join(missing_sections)}")
            return False
        else:
            print("✅ QUICKSTART.md has proper structure")
            return True

def main():
    """Main entry point with command line arguments"""
    parser = argparse.ArgumentParser(
        description="The System Documentation Maintenance Tool",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Examples:
  python3 maintain-docs.py                    # Full maintenance
  python3 maintain-docs.py --no-language     # Skip language fixes
  python3 maintain-docs.py --no-counts       # Skip count updates
  python3 maintain-docs.py --counts-only     # Only update counts
        """
    )

    parser.add_argument(
        'path',
        nargs='?',
        default=os.getcwd(),
        help='Path to The System root directory (default: current directory)'
    )

    parser.add_argument(
        '--no-language',
        action='store_true',
        help='Skip language violation fixes'
    )

    parser.add_argument(
        '--no-counts',
        action='store_true',
        help='Skip count updates and structure validation'
    )

    parser.add_argument(
        '--counts-only',
        action='store_true',
        help='Only update counts, skip language fixes'
    )

    args = parser.parse_args()

    # Validate path
    if not os.path.exists(args.path):
        print(f"❌ Error: Path {args.path} does not exist")
        return 1

    # Set flags based on arguments
    fix_language = not args.no_language and not args.counts_only
    update_counts = not args.no_counts

    # Run maintenance
    maintainer = DocumentationMaintainer(
        root_path=args.path,
        fix_language=fix_language,
        update_counts=update_counts
    )

    success = maintainer.run_full_maintenance()
    return 0 if success else 1

if __name__ == '__main__':
    sys.exit(main())