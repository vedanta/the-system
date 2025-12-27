#!/usr/bin/env python3
"""
Architecture Presets Validation Script
=====================================

Validates the presets.yaml configuration file for:
- Schema compliance
- Signal consistency
- Deploy target compatibility
- Agent relationships
- Required fields

Usage: python3 scripts/validate-presets.py
"""

import yaml
import sys
from pathlib import Path
from typing import Dict, List, Any, Set
from dataclasses import dataclass
from enum import Enum


class ValidationLevel(Enum):
    ERROR = "ERROR"
    WARNING = "WARNING"
    INFO = "INFO"


@dataclass
class ValidationResult:
    level: ValidationLevel
    preset: str
    category: str
    message: str


class PresetValidator:
    def __init__(self):
        self.results: List[ValidationResult] = []
        self.presets_file = Path(".claude/config/presets.yaml")

        # Valid values
        self.valid_categories = {"web", "cli"}
        self.valid_patterns = {"jamstack", "monolith", "distributed", "script", "package", "application"}
        self.valid_tiers = {"single", "two", "three"}
        self.valid_agents = {
            "founder-advisor", "enterprise-architect", "database-developer",
            "backend-developer", "frontend-developer", "integration-engineer",
            "devops-engineer", "qa-engineer", "technical-writer"
        }

        # Signal definitions
        self.preset_signals = {
            "cli", "persistent_data", "python_ml_compute", "realtime_core",
            "multi_user_ha", "interactive_tui", "multiple_commands"
        }

        self.option_signals = {
            "analytics", "csv_data", "edge", "cloudflare", "managed_auth",
            "firebase", "python", "go", "rust", "mysql", "planetscale"
        }

    def add_result(self, level: ValidationLevel, preset: str, category: str, message: str):
        """Add validation result"""
        self.results.append(ValidationResult(level, preset, category, message))

    def load_presets(self) -> Dict[str, Any]:
        """Load and parse presets.yaml"""
        try:
            with open(self.presets_file, 'r') as f:
                data = yaml.safe_load(f)
                return data
        except FileNotFoundError:
            self.add_result(
                ValidationLevel.ERROR,
                "system",
                "file",
                f"Presets file not found: {self.presets_file}"
            )
            return {}
        except yaml.YAMLError as e:
            self.add_result(
                ValidationLevel.ERROR,
                "system",
                "file",
                f"YAML parsing error: {e}"
            )
            return {}

    def validate_schema(self, presets: Dict[str, Any]):
        """Validate basic schema requirements"""
        if not presets:
            return

        if 'presets' not in presets:
            self.add_result(
                ValidationLevel.ERROR,
                "system",
                "schema",
                "Missing 'presets' root key"
            )
            return

        # Check metadata
        if 'version' not in presets:
            self.add_result(ValidationLevel.WARNING, "system", "metadata", "Missing version field")

        preset_count = len(presets['presets'])
        expected_count = presets.get('meta', {}).get('total_presets', 8)

        if preset_count != expected_count:
            self.add_result(
                ValidationLevel.ERROR,
                "system",
                "count",
                f"Expected {expected_count} presets, found {preset_count}"
            )

    def validate_preset_structure(self, preset_name: str, preset: Dict[str, Any]):
        """Validate individual preset structure"""
        required_fields = [
            'category', 'pattern', 'tier', 'description',
            'use_when', 'signals', 'stack', 'agents'
        ]

        for field in required_fields:
            if field not in preset:
                self.add_result(
                    ValidationLevel.ERROR,
                    preset_name,
                    "structure",
                    f"Missing required field: {field}"
                )

        # Validate category
        category = preset.get('category')
        if category not in self.valid_categories:
            self.add_result(
                ValidationLevel.ERROR,
                preset_name,
                "category",
                f"Invalid category '{category}'. Must be one of {self.valid_categories}"
            )

        # Validate pattern
        pattern = preset.get('pattern')
        if pattern not in self.valid_patterns:
            self.add_result(
                ValidationLevel.ERROR,
                preset_name,
                "pattern",
                f"Invalid pattern '{pattern}'. Must be one of {self.valid_patterns}"
            )

        # Validate tier
        tier = preset.get('tier')
        if tier not in self.valid_tiers:
            self.add_result(
                ValidationLevel.ERROR,
                preset_name,
                "tier",
                f"Invalid tier '{tier}'. Must be one of {self.valid_tiers}"
            )

    def validate_agents(self, preset_name: str, preset: Dict[str, Any]):
        """Validate agent configuration"""
        agents = preset.get('agents', {})

        if not agents:
            self.add_result(
                ValidationLevel.ERROR,
                preset_name,
                "agents",
                "Missing agents configuration"
            )
            return

        used_agents = set(agents.get('used', []))
        skipped_agents = set(agents.get('skipped', []))

        # Check for unknown agents
        all_agents = used_agents | skipped_agents
        unknown_agents = all_agents - self.valid_agents
        if unknown_agents:
            self.add_result(
                ValidationLevel.ERROR,
                preset_name,
                "agents",
                f"Unknown agents: {unknown_agents}"
            )

        # Check for overlapping agents
        overlap = used_agents & skipped_agents
        if overlap:
            self.add_result(
                ValidationLevel.ERROR,
                preset_name,
                "agents",
                f"Agents cannot be both used and skipped: {overlap}"
            )

        # Validate agent requirements by preset type
        category = preset.get('category')
        if category == 'web':
            # Web presets should include frontend-developer
            if 'frontend-developer' not in used_agents:
                self.add_result(
                    ValidationLevel.WARNING,
                    preset_name,
                    "agents",
                    "Web presets typically include frontend-developer"
                )

        elif category == 'cli':
            # CLI presets should include backend-developer
            if 'backend-developer' not in used_agents:
                self.add_result(
                    ValidationLevel.WARNING,
                    preset_name,
                    "agents",
                    "CLI presets typically include backend-developer"
                )

            # CLI presets should skip frontend-developer
            if 'frontend-developer' not in skipped_agents:
                self.add_result(
                    ValidationLevel.WARNING,
                    preset_name,
                    "agents",
                    "CLI presets typically skip frontend-developer"
                )

    def validate_signals(self, preset_name: str, preset: Dict[str, Any]):
        """Validate signal definitions"""
        signals = preset.get('signals', {})

        if not signals:
            self.add_result(
                ValidationLevel.WARNING,
                preset_name,
                "signals",
                "No signals defined for preset"
            )
            return

        positive_signals = set(signals.get('positive', []))
        negative_signals = set(signals.get('negative', []))

        # Check for signal conflicts
        conflict = positive_signals & negative_signals
        if conflict:
            self.add_result(
                ValidationLevel.ERROR,
                preset_name,
                "signals",
                f"Signals cannot be both positive and negative: {conflict}"
            )

        # Validate signal names
        all_signals = positive_signals | negative_signals
        unknown_signals = all_signals - self.preset_signals
        if unknown_signals:
            self.add_result(
                ValidationLevel.WARNING,
                preset_name,
                "signals",
                f"Unknown preset signals: {unknown_signals}"
            )

    def validate_options(self, preset_name: str, preset: Dict[str, Any]):
        """Validate option definitions and signals"""
        options = preset.get('options', {})

        for option_category, option_configs in options.items():
            if not isinstance(option_configs, dict):
                continue

            defaults_count = 0

            for option_name, option_config in option_configs.items():
                # Check for default option
                if option_config.get('default', False):
                    defaults_count += 1

                # Validate option signals
                option_signals = set(option_config.get('signals', []))
                unknown_option_signals = option_signals - self.option_signals
                if unknown_option_signals:
                    self.add_result(
                        ValidationLevel.INFO,
                        preset_name,
                        "option_signals",
                        f"Unknown option signals in {option_name}: {unknown_option_signals}"
                    )

            # Each option category should have exactly one default
            if defaults_count == 0:
                self.add_result(
                    ValidationLevel.ERROR,
                    preset_name,
                    "options",
                    f"No default option specified for {option_category}"
                )
            elif defaults_count > 1:
                self.add_result(
                    ValidationLevel.ERROR,
                    preset_name,
                    "options",
                    f"Multiple default options for {option_category}"
                )

    def validate_deploy_compatibility(self, preset_name: str, preset: Dict[str, Any]):
        """Validate deployment configuration"""
        deploy = preset.get('deploy', {})
        tier = preset.get('tier')
        deployables = preset.get('deployables')

        if not deploy:
            self.add_result(
                ValidationLevel.WARNING,
                preset_name,
                "deploy",
                "No deployment configuration specified"
            )
            return

        # Validate deploy targets match tier
        deploy_count = len([v for v in deploy.values() if v is not None])

        if deployables and deploy_count != deployables:
            self.add_result(
                ValidationLevel.WARNING,
                preset_name,
                "deploy",
                f"Deploy targets ({deploy_count}) don't match deployables ({deployables})"
            )

    def validate_preset_consistency(self, presets_data: Dict[str, Any]):
        """Validate consistency across presets"""
        presets = presets_data.get('presets', {})

        # Check for default preset
        web_presets = [name for name, preset in presets.items()
                      if preset.get('category') == 'web']
        default_presets = [name for name, preset in presets.items()
                          if preset.get('default', False)]

        if len(default_presets) == 0:
            self.add_result(
                ValidationLevel.ERROR,
                "system",
                "defaults",
                "No default preset specified"
            )
        elif len(default_presets) > 1:
            self.add_result(
                ValidationLevel.ERROR,
                "system",
                "defaults",
                f"Multiple default presets: {default_presets}"
            )

        # Validate category distribution
        web_count = len(web_presets)
        cli_presets = [name for name, preset in presets.items()
                      if preset.get('category') == 'cli']
        cli_count = len(cli_presets)

        expected_web = presets_data.get('meta', {}).get('web_presets', 5)
        expected_cli = presets_data.get('meta', {}).get('cli_presets', 3)

        if web_count != expected_web:
            self.add_result(
                ValidationLevel.WARNING,
                "system",
                "distribution",
                f"Expected {expected_web} web presets, found {web_count}"
            )

        if cli_count != expected_cli:
            self.add_result(
                ValidationLevel.WARNING,
                "system",
                "distribution",
                f"Expected {expected_cli} CLI presets, found {cli_count}"
            )

    def run_validation(self) -> bool:
        """Run complete validation suite"""
        print("🔍 Validating Architecture Presets Configuration...")
        print("=" * 60)

        # Load presets
        presets_data = self.load_presets()
        if not presets_data:
            return False

        # Run validation suites
        self.validate_schema(presets_data)
        self.validate_preset_consistency(presets_data)

        presets = presets_data.get('presets', {})
        for preset_name, preset in presets.items():
            self.validate_preset_structure(preset_name, preset)
            self.validate_agents(preset_name, preset)
            self.validate_signals(preset_name, preset)
            self.validate_options(preset_name, preset)
            self.validate_deploy_compatibility(preset_name, preset)

        # Report results
        return self.report_results()

    def report_results(self) -> bool:
        """Report validation results"""
        error_count = len([r for r in self.results if r.level == ValidationLevel.ERROR])
        warning_count = len([r for r in self.results if r.level == ValidationLevel.WARNING])
        info_count = len([r for r in self.results if r.level == ValidationLevel.INFO])

        # Group results by level
        errors = [r for r in self.results if r.level == ValidationLevel.ERROR]
        warnings = [r for r in self.results if r.level == ValidationLevel.WARNING]
        info = [r for r in self.results if r.level == ValidationLevel.INFO]

        # Print errors
        if errors:
            print("❌ ERRORS:")
            for result in errors:
                print(f"  {result.preset} ({result.category}): {result.message}")
            print()

        # Print warnings
        if warnings:
            print("⚠️  WARNINGS:")
            for result in warnings:
                print(f"  {result.preset} ({result.category}): {result.message}")
            print()

        # Print info
        if info:
            print("ℹ️  INFO:")
            for result in info:
                print(f"  {result.preset} ({result.category}): {result.message}")
            print()

        # Summary
        print("=" * 60)
        print(f"📊 Validation Summary:")
        print(f"  Errors:   {error_count}")
        print(f"  Warnings: {warning_count}")
        print(f"  Info:     {info_count}")
        print()

        if error_count == 0:
            print("✅ Presets configuration is valid!")
            return True
        else:
            print("❌ Presets configuration has errors that must be fixed.")
            return False


def main():
    """Main validation entry point"""
    validator = PresetValidator()

    # Check if presets file exists
    if not validator.presets_file.exists():
        print(f"❌ Presets file not found: {validator.presets_file}")
        print("Run this script from The System root directory.")
        sys.exit(1)

    # Run validation
    is_valid = validator.run_validation()

    # Exit with appropriate code
    sys.exit(0 if is_valid else 1)


if __name__ == "__main__":
    main()