#!/usr/bin/env python3
"""
Build Presets Validation Script
===============================

Validates the builds.yaml configuration file for:
- Schema compliance
- Agent configuration consistency
- Stage mode validation
- Signal pattern validation
- Quality expectation completeness
- Conditional logic verification

Usage: python3 scripts/validate-build-presets.py
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
    build: str
    category: str
    message: str


class BuildValidator:
    def __init__(self):
        self.results: List[ValidationResult] = []
        self.builds_file = Path(".claude/config/builds.yaml")

        # Valid values
        self.valid_categories = {"speed", "balanced", "quality", "enterprise", "comprehensive"}
        self.valid_priorities = {"rapid_iteration", "ship_ready", "production_ready", "enterprise_grade", "enterprise_ready"}
        self.valid_complexities = {"minimal", "moderate", "comprehensive", "enterprise", "full"}
        self.valid_quality_levels = {"working_code", "shippable", "production_ready", "enterprise_grade", "enterprise"}

        # Valid agents (should match all known agents)
        self.valid_agents = {
            "founder-advisor", "enterprise-architect", "solution-architect", "database-developer",
            "backend-developer", "frontend-developer", "integration-engineer",
            "devops-engineer", "qa-engineer", "technical-writer", "product-lead",
            "project-planner", "business-analyst", "principal-developer",
            "security-engineer", "release-engineer", "sre-deploy-engineer",
            "sre-ops-engineer", "bug-fixer"
        }

        # Valid stage modes
        self.valid_stage_modes = {"skip", "compressed", "minimal", "lite", "standard", "full", "comprehensive"}

        # Valid stages
        self.valid_stages = {"architecture", "product", "development", "release", "go_live"}

        # Valid signal types
        self.valid_signal_types = {"explicit", "performance", "scope", "intent", "context"}

        # Valid quality dimensions
        self.valid_quality_dimensions = {
            "code_quality", "test_coverage", "documentation", "security",
            "performance", "maintainability", "scalability"
        }

        # Valid quality levels for dimensions
        self.valid_quality_values = {
            "none", "basic", "minimal", "standard", "comprehensive", "enterprise",
            "low", "medium", "high", "unoptimized", "optimized", "good", "excellent",
            "complete", "acceptable", "moderate", "planned"
        }

    def add_result(self, level: ValidationLevel, build: str, category: str, message: str):
        """Add a validation result"""
        self.results.append(ValidationResult(level, build, category, message))

    def validate(self) -> bool:
        """Run all validations"""
        if not self.builds_file.exists():
            self.add_result(ValidationLevel.ERROR, "system", "file",
                          f"Builds file not found: {self.builds_file}")
            return False

        try:
            with open(self.builds_file, 'r', encoding='utf-8') as f:
                self.data = yaml.safe_load(f)
        except yaml.YAMLError as e:
            self.add_result(ValidationLevel.ERROR, "system", "yaml",
                          f"YAML parsing error: {e}")
            return False

        self._validate_schema()
        self._validate_builds()
        self._validate_meta_consistency()

        return len([r for r in self.results if r.level == ValidationLevel.ERROR]) == 0

    def _validate_schema(self):
        """Validate root schema structure"""
        if not isinstance(self.data, dict):
            self.add_result(ValidationLevel.ERROR, "system", "schema",
                          "Root structure must be a dictionary")
            return

        required_keys = {"version", "meta", "builds"}
        for key in required_keys:
            if key not in self.data:
                self.add_result(ValidationLevel.ERROR, "system", "schema",
                              f"Missing required root key: {key}")

        # Validate meta section
        if "meta" in self.data:
            meta = self.data["meta"]
            meta_required = {"total_builds", "signal_types", "last_updated"}
            for key in meta_required:
                if key not in meta:
                    self.add_result(ValidationLevel.WARNING, "system", "meta",
                                  f"Missing recommended meta key: {key}")

    def _validate_builds(self):
        """Validate each build preset"""
        if "builds" not in self.data:
            return

        builds = self.data["builds"]
        if not isinstance(builds, dict):
            self.add_result(ValidationLevel.ERROR, "system", "builds",
                          "Builds section must be a dictionary")
            return

        for build_name, build_config in builds.items():
            self._validate_build(build_name, build_config)

    def _validate_build(self, build_name: str, config: Dict[str, Any]):
        """Validate a single build preset"""
        # Required fields
        required_fields = {
            "description", "category", "priority", "target_time",
            "target_agents", "complexity", "quality_level", "agents"
        }

        for field in required_fields:
            if field not in config:
                self.add_result(ValidationLevel.ERROR, build_name, "structure",
                              f"Missing required field: {field}")

        # Validate field values
        if "category" in config and config["category"] not in self.valid_categories:
            self.add_result(ValidationLevel.ERROR, build_name, "category",
                          f"Invalid category: {config['category']}")

        if "priority" in config and config["priority"] not in self.valid_priorities:
            self.add_result(ValidationLevel.ERROR, build_name, "priority",
                          f"Invalid priority: {config['priority']}")

        if "complexity" in config and config["complexity"] not in self.valid_complexities:
            self.add_result(ValidationLevel.ERROR, build_name, "complexity",
                          f"Invalid complexity: {config['complexity']}")

        if "quality_level" in config and config["quality_level"] not in self.valid_quality_levels:
            self.add_result(ValidationLevel.ERROR, build_name, "quality_level",
                          f"Invalid quality level: {config['quality_level']}")

        # Validate agents configuration
        if "agents" in config:
            self._validate_agents_config(build_name, config["agents"])

        # Validate stage modes
        if "stage_modes" in config:
            self._validate_stage_modes(build_name, config["stage_modes"])

        # Validate quality expectations
        if "quality" in config:
            self._validate_quality_config(build_name, config["quality"])

        # Validate signals
        if "signals" in config:
            self._validate_signals_config(build_name, config["signals"])

    def _validate_agents_config(self, build_name: str, agents_config: Dict[str, Any]):
        """Validate agents configuration"""
        required_sections = {"core_required", "always_included", "excluded"}

        for section in required_sections:
            if section not in agents_config:
                self.add_result(ValidationLevel.WARNING, build_name, "agents",
                              f"Missing agents section: {section}")

        # Validate agent lists
        all_mentioned_agents = set()

        for section_name, agents_list in agents_config.items():
            if section_name == "conditionally_included":
                # Special handling for conditional agents
                if not isinstance(agents_list, list):
                    self.add_result(ValidationLevel.ERROR, build_name, "agents",
                                  f"conditionally_included must be a list")
                    continue

                for item in agents_list:
                    if not isinstance(item, dict) or "agent" not in item:
                        self.add_result(ValidationLevel.ERROR, build_name, "agents",
                                      "conditionally_included items must have 'agent' field")
                        continue

                    agent_name = item["agent"]
                    if agent_name not in self.valid_agents:
                        self.add_result(ValidationLevel.ERROR, build_name, "agents",
                                      f"Unknown agent: {agent_name}")
                    all_mentioned_agents.add(agent_name)

                    # Check for required fields
                    if "condition" not in item:
                        self.add_result(ValidationLevel.WARNING, build_name, "agents",
                                      f"conditionally_included agent {agent_name} missing condition")
                    if "reason" not in item:
                        self.add_result(ValidationLevel.WARNING, build_name, "agents",
                                      f"conditionally_included agent {agent_name} missing reason")

            elif isinstance(agents_list, list):
                # Regular agent lists
                for agent_name in agents_list:
                    if agent_name not in self.valid_agents:
                        self.add_result(ValidationLevel.ERROR, build_name, "agents",
                                      f"Unknown agent in {section_name}: {agent_name}")
                    all_mentioned_agents.add(agent_name)

        # Check for conflicts
        core_required = set(agents_config.get("core_required", []))
        always_included = set(agents_config.get("always_included", []))
        excluded = set(agents_config.get("excluded", []))
        conditionally_included = {item["agent"] for item in agents_config.get("conditionally_included", [])
                                if isinstance(item, dict) and "agent" in item}

        # Check for overlaps
        if core_required & excluded:
            self.add_result(ValidationLevel.ERROR, build_name, "agents",
                          f"Agents cannot be both core_required and excluded: {core_required & excluded}")

        if always_included & excluded:
            self.add_result(ValidationLevel.ERROR, build_name, "agents",
                          f"Agents cannot be both always_included and excluded: {always_included & excluded}")

        # founder-advisor should always be core_required
        if "founder-advisor" not in core_required:
            self.add_result(ValidationLevel.WARNING, build_name, "agents",
                          "founder-advisor should typically be core_required")

    def _validate_stage_modes(self, build_name: str, stage_modes: Dict[str, str]):
        """Validate stage execution modes"""
        for stage, mode in stage_modes.items():
            if stage not in self.valid_stages:
                self.add_result(ValidationLevel.ERROR, build_name, "stage_modes",
                              f"Unknown stage: {stage}")

            if mode not in self.valid_stage_modes:
                self.add_result(ValidationLevel.ERROR, build_name, "stage_modes",
                              f"Invalid mode '{mode}' for stage '{stage}'")

        # Check for all stages being present
        missing_stages = self.valid_stages - set(stage_modes.keys())
        if missing_stages:
            self.add_result(ValidationLevel.INFO, build_name, "stage_modes",
                          f"Missing stage modes for: {missing_stages}")

    def _validate_quality_config(self, build_name: str, quality_config: Dict[str, str]):
        """Validate quality expectations"""
        for dimension, value in quality_config.items():
            if dimension not in self.valid_quality_dimensions:
                self.add_result(ValidationLevel.WARNING, build_name, "quality",
                              f"Unknown quality dimension: {dimension}")

            if value not in self.valid_quality_values:
                self.add_result(ValidationLevel.INFO, build_name, "quality",
                              f"Unknown quality value '{value}' for dimension '{dimension}'")

        # Check for completeness
        missing_dimensions = self.valid_quality_dimensions - set(quality_config.keys())
        if missing_dimensions:
            self.add_result(ValidationLevel.INFO, build_name, "quality",
                          f"Missing quality dimensions: {missing_dimensions}")

    def _validate_signals_config(self, build_name: str, signals_config: Dict[str, List[str]]):
        """Validate signal patterns"""
        for signal_type, patterns in signals_config.items():
            if signal_type not in self.valid_signal_types:
                self.add_result(ValidationLevel.WARNING, build_name, "signals",
                              f"Unknown signal type: {signal_type}")

            if not isinstance(patterns, list):
                self.add_result(ValidationLevel.ERROR, build_name, "signals",
                              f"Signal patterns for '{signal_type}' must be a list")

        # Check for completeness
        missing_types = self.valid_signal_types - set(signals_config.keys())
        if missing_types:
            self.add_result(ValidationLevel.INFO, build_name, "signals",
                          f"Missing signal types: {missing_types}")

    def _validate_meta_consistency(self):
        """Validate meta information consistency"""
        if "meta" not in self.data or "builds" not in self.data:
            return

        meta = self.data["meta"]
        builds = self.data["builds"]

        # Check total builds count
        if "total_builds" in meta:
            expected_count = meta["total_builds"]
            actual_count = len(builds)
            if expected_count != actual_count:
                self.add_result(ValidationLevel.WARNING, "system", "meta",
                              f"total_builds mismatch: expected {expected_count}, found {actual_count}")

        # Check signal types consistency
        if "signal_types" in meta:
            expected_types = set(meta["signal_types"])
            found_types = set()

            for build_config in builds.values():
                if "signals" in build_config:
                    found_types.update(build_config["signals"].keys())

            missing_types = expected_types - found_types
            extra_types = found_types - expected_types

            if missing_types:
                self.add_result(ValidationLevel.INFO, "system", "meta",
                              f"Signal types not used in builds: {missing_types}")
            if extra_types:
                self.add_result(ValidationLevel.INFO, "system", "meta",
                              f"Signal types not declared in meta: {extra_types}")

    def print_results(self):
        """Print validation results"""
        if not self.results:
            print("✅ No validation issues found!")
            return

        print("🔍 Validating Build Presets Configuration...")
        print("=" * 60)

        errors = [r for r in self.results if r.level == ValidationLevel.ERROR]
        warnings = [r for r in self.results if r.level == ValidationLevel.WARNING]
        infos = [r for r in self.results if r.level == ValidationLevel.INFO]

        if errors:
            print("\n❌ ERRORS:")
            for result in errors:
                print(f"  {result.build} ({result.category}): {result.message}")

        if warnings:
            print("\n⚠️  WARNINGS:")
            for result in warnings:
                print(f"  {result.build} ({result.category}): {result.message}")

        if infos:
            print("\nℹ️  INFO:")
            for result in infos:
                print(f"  {result.build} ({result.category}): {result.message}")

        print("\n" + "=" * 60)
        print("📊 Validation Summary:")
        print(f"  Errors:   {len(errors)}")
        print(f"  Warnings: {len(warnings)}")
        print(f"  Info:     {len(infos)}")

        if errors:
            print("\n❌ Build configuration has errors that must be fixed.")
            return False
        else:
            print("\n✅ Build configuration is valid!")
            return True


def main():
    """Main validation function"""
    validator = BuildValidator()

    # Change to project root if running from scripts directory
    if Path.cwd().name == "scripts":
        import os
        os.chdir("..")

    success = validator.validate()
    validator.print_results()

    # Exit with appropriate code
    sys.exit(0 if success else 1)


if __name__ == "__main__":
    main()