#!/usr/bin/env python3
"""
Solution Architect Agent Test Runner
Validates SA functionality with sample project scenarios
"""

import yaml
import json
from typing import Dict, List, Any
from pathlib import Path

class SATestRunner:
    """Test runner for Solution Architect agent logic validation"""

    def __init__(self, base_path: str = "/Users/vedanta/the-system"):
        self.base_path = Path(base_path)
        self.ai_profiles = self.load_ai_profiles()
        self.presets = self.load_presets()
        self.builds = self.load_builds()

    def load_ai_profiles(self) -> Dict[str, Any]:
        """Load AI Success Profiles configuration"""
        try:
            with open(self.base_path / ".claude/config/ai-success-profiles.yaml", 'r') as f:
                return yaml.safe_load(f)
        except FileNotFoundError:
            print("❌ AI Success Profiles not found - using mock data")
            return self.create_mock_ai_profiles()

    def load_presets(self) -> Dict[str, Any]:
        """Load architecture presets"""
        try:
            with open(self.base_path / ".claude/config/presets.yaml", 'r') as f:
                return yaml.safe_load(f)
        except FileNotFoundError:
            print("❌ Presets config not found - using mock data")
            return self.create_mock_presets()

    def load_builds(self) -> Dict[str, Any]:
        """Load build presets"""
        try:
            with open(self.base_path / ".claude/config/builds.yaml", 'r') as f:
                return yaml.safe_load(f)
        except FileNotFoundError:
            print("❌ Builds config not found - using mock data")
            return self.create_mock_builds()

    def create_mock_ai_profiles(self) -> Dict[str, Any]:
        """Create mock AI profiles for testing"""
        return {
            "preset_profiles": {
                "static": {"overall_ai_score": 9.4, "claude_success_rate": 0.95, "expected_debug_time": "0-1 hours"},
                "embedded": {"overall_ai_score": 8.6, "claude_success_rate": 0.90, "expected_debug_time": "1-3 hours"},
                "fullstack-js": {"overall_ai_score": 8.1, "claude_success_rate": 0.85, "expected_debug_time": "2-4 hours"},
                "baas": {"overall_ai_score": 7.2, "claude_success_rate": 0.78, "expected_debug_time": "3-5 hours"},
                "microservice": {"overall_ai_score": 6.4, "claude_success_rate": 0.68, "expected_debug_time": "6-10 hours"}
            },
            "assessment_config": {
                "weights": {
                    "claude_success_rate": 0.35,
                    "build_reliability": 0.20,
                    "debug_ease": 0.15,
                    "code_quality": 0.10,
                    "documentation": 0.10,
                    "ecosystem_stability": 0.05,
                    "traditional_factors": 0.05
                }
            }
        }

    def create_mock_presets(self) -> Dict[str, Any]:
        """Create mock presets for testing"""
        return {
            "presets": {
                "static": {"category": "web", "pattern": "jamstack", "tier": "single"},
                "embedded": {"category": "web", "pattern": "monolith", "tier": "single"},
                "fullstack-js": {"category": "web", "pattern": "monolith", "tier": "two", "default": True},
                "baas": {"category": "web", "pattern": "monolith", "tier": "two"},
                "microservice": {"category": "web", "pattern": "distributed", "tier": "three"}
            }
        }

    def create_mock_builds(self) -> Dict[str, Any]:
        """Create mock builds for testing"""
        return {
            "builds": {
                "prototype": {"target_time": "3-5 minutes", "complexity": "minimal"},
                "mvp": {"target_time": "15-20 minutes", "complexity": "moderate"},
                "production": {"target_time": "45-60 minutes", "complexity": "full"}
            }
        }

    def detect_signals(self, user_idea: str) -> Dict[str, List[str]]:
        """Simulate signal detection from user input"""
        user_idea_lower = user_idea.lower()

        signals = {
            'explicit': [],
            'performance': [],
            'scope': [],
            'intent': [],
            'context': [],
            'feature': []
        }

        # Explicit technology signals
        if 'nextjs' in user_idea_lower or 'next.js' in user_idea_lower:
            signals['explicit'].append('nextjs')
        if 'react' in user_idea_lower:
            signals['explicit'].append('react')
        if 'postgres' in user_idea_lower or 'postgresql' in user_idea_lower:
            signals['explicit'].append('postgresql')
        if 'mysql' in user_idea_lower:
            signals['explicit'].append('mysql')
        if 'fastapi' in user_idea_lower:
            signals['explicit'].append('fastapi')
        if 'microservice' in user_idea_lower:
            signals['explicit'].append('microservice')

        # Performance signals
        performance_keywords = ['quick', 'fast', 'rapid', 'prototype', 'demo', 'poc']
        for keyword in performance_keywords:
            if keyword in user_idea_lower:
                signals['performance'].append(keyword)

        # Scope signals
        scope_keywords = ['simple', 'basic', 'minimal', 'enterprise', 'complex', 'scalable']
        for keyword in scope_keywords:
            if keyword in user_idea_lower:
                signals['scope'].append(keyword)

        # Intent signals
        intent_keywords = ['mvp', 'launch', 'ship', 'production', 'deploy']
        for keyword in intent_keywords:
            if keyword in user_idea_lower:
                signals['intent'].append(keyword)

        # Context signals
        context_keywords = ['startup', 'enterprise', 'client', 'demo-day', 'hackathon']
        for keyword in context_keywords:
            if keyword in user_idea_lower:
                signals['context'].append(keyword)

        # Feature signals
        if 'auth' in user_idea_lower or 'login' in user_idea_lower or 'user' in user_idea_lower:
            signals['feature'].append('auth')
        if 'database' in user_idea_lower or 'data' in user_idea_lower or 'store' in user_idea_lower:
            signals['feature'].append('database')
        if 'realtime' in user_idea_lower or 'chat' in user_idea_lower or 'live' in user_idea_lower:
            signals['feature'].append('realtime')
        if 'dashboard' in user_idea_lower:
            signals['feature'].append('dashboard')
        if 'api' in user_idea_lower:
            signals['feature'].append('api')

        return signals

    def select_build_preset(self, signals: Dict[str, List[str]]) -> str:
        """Simulate build preset selection logic"""
        all_signals = [s for signal_list in signals.values() for s in signal_list]

        # Check for explicit build signals
        prototype_signals = ['prototype', 'quick', 'demo', 'poc', 'fast', 'rapid']
        production_signals = ['production', 'enterprise', 'scalable', 'business-critical']
        mvp_signals = ['mvp', 'launch', 'ship', 'startup']

        if any(s in all_signals for s in prototype_signals):
            return 'prototype'
        elif any(s in all_signals for s in production_signals):
            return 'production'
        elif any(s in all_signals for s in mvp_signals):
            return 'mvp'
        else:
            return 'mvp'  # Default

    def select_architecture_preset(self, signals: Dict[str, List[str]]) -> str:
        """Simulate architecture preset selection logic"""
        features = signals.get('feature', [])
        explicit = signals.get('explicit', [])
        all_signals = [s for signal_list in signals.values() for s in signal_list]

        # CLI detection
        if 'cli' in all_signals or 'command' in all_signals or 'script' in all_signals:
            if 'interactive' in all_signals or 'tui' in all_signals:
                return 'cli-tui'
            elif 'multiple' in all_signals or 'commands' in all_signals:
                return 'cli-tool'
            else:
                return 'cli-script'

        # Web decision tree
        if 'database' not in features and 'auth' not in features and 'api' not in features:
            return 'static'  # No persistent data

        if 'microservice' in explicit or 'fastapi' in explicit or ('python' in all_signals and 'ml' in all_signals):
            return 'microservice'

        if 'realtime' in features or 'chat' in all_signals or 'live' in all_signals:
            return 'baas'

        if 'auth' in features or 'user' in all_signals or 'multi-user' in all_signals:
            return 'fullstack-js'

        if 'database' in features or 'simple' in all_signals:
            return 'embedded'

        return 'fullstack-js'  # Default

    def calculate_ai_score(self, preset: str) -> Dict[str, Any]:
        """Calculate AI success score for preset"""
        try:
            profile = self.ai_profiles['preset_profiles'][preset]
            return {
                'preset': preset,
                'ai_score': profile['overall_ai_score'],
                'success_rate': profile['claude_success_rate'],
                'debug_time': profile['expected_debug_time'],
                'confidence': 'High' if profile['overall_ai_score'] >= 8.5 else 'Medium' if profile['overall_ai_score'] >= 7.0 else 'Low'
            }
        except KeyError:
            return {
                'preset': preset,
                'ai_score': 7.0,  # Default fallback
                'success_rate': 0.75,
                'debug_time': '3-5 hours',
                'confidence': 'Medium'
            }

    def assess_risks(self, preset: str, build: str) -> Dict[str, str]:
        """Assess risks for selected stack"""
        risk_levels = {
            'static': 'Low',
            'embedded': 'Low',
            'fullstack-js': 'Medium',
            'baas': 'Medium',
            'microservice': 'High'
        }

        overall_risk = risk_levels.get(preset, 'Medium')

        # Increase risk for production builds
        if build == 'production' and overall_risk == 'Low':
            overall_risk = 'Medium'
        elif build == 'production' and overall_risk == 'Medium':
            overall_risk = 'High'

        return {
            'overall_risk': overall_risk,
            'technical_risk': risk_levels.get(preset, 'Medium'),
            'ai_risk': 'Low' if preset in ['static', 'embedded'] else 'Medium' if preset in ['fullstack-js', 'baas'] else 'High',
            'delivery_risk': 'Low' if build == 'prototype' else 'Medium' if build == 'mvp' else 'High'
        }

    def should_skip_ea(self, preset: str, build: str, features: List[str]) -> Dict[str, Any]:
        """Determine if EA should be skipped"""

        # Force EA for production
        if build == 'production':
            return {'skip': False, 'mode': 'full', 'reason': 'Production builds require full architecture'}

        # Force EA for complex features
        if 'auth' in features or 'realtime' in features:
            mode = 'compressed' if build == 'mvp' else 'full'
            return {'skip': False, 'mode': mode, 'reason': 'Complex features require architecture design'}

        # Skip EA for simple stacks
        if build == 'prototype' and preset in ['static', 'cli-script']:
            return {'skip': True, 'mode': None, 'reason': 'Simple stack requires minimal architecture'}

        # Default to compressed EA
        return {'skip': False, 'mode': 'compressed', 'reason': 'Moderate complexity requires architecture guidance'}

    def run_assessment(self, user_idea: str, test_name: str = "") -> Dict[str, Any]:
        """Run complete stack assessment simulation"""
        print(f"\n🔍 Running Assessment: {test_name}")
        print(f"💭 User Idea: {user_idea}")

        # Step 1: Signal Detection
        signals = self.detect_signals(user_idea)
        print(f"📡 Signals Detected: {json.dumps(signals, indent=2)}")

        # Step 2: Build Selection
        build_preset = self.select_build_preset(signals)
        print(f"🏗️  Build Preset: {build_preset}")

        # Step 3: Architecture Selection
        arch_preset = self.select_architecture_preset(signals)
        print(f"🏛️  Architecture Preset: {arch_preset}")

        # Step 4: AI Scoring
        ai_assessment = self.calculate_ai_score(arch_preset)
        print(f"🤖 AI Assessment: {json.dumps(ai_assessment, indent=2)}")

        # Step 5: Risk Assessment
        risk_assessment = self.assess_risks(arch_preset, build_preset)
        print(f"⚠️  Risk Assessment: {json.dumps(risk_assessment, indent=2)}")

        # Step 6: EA Decision
        ea_decision = self.should_skip_ea(arch_preset, build_preset, signals.get('feature', []))
        print(f"🏗️  EA Decision: {json.dumps(ea_decision, indent=2)}")

        return {
            'user_idea': user_idea,
            'signals': signals,
            'build_preset': build_preset,
            'arch_preset': arch_preset,
            'ai_assessment': ai_assessment,
            'risk_assessment': risk_assessment,
            'ea_decision': ea_decision
        }

    def run_test_suite(self):
        """Run comprehensive test suite"""
        print("🧪 Solution Architect Agent Test Suite")
        print("=" * 50)

        test_scenarios = [
            {
                'name': 'Simple Static Site',
                'idea': 'Landing page for my startup with contact form',
                'expected_build': 'prototype',
                'expected_preset': 'static',
                'expected_ai_score_min': 9.0
            },
            {
                'name': 'MVP SaaS Application',
                'idea': 'SaaS dashboard with user authentication and database for expense tracking',
                'expected_build': 'mvp',
                'expected_preset': 'fullstack-js',
                'expected_ai_score_min': 7.5
            },
            {
                'name': 'Enterprise Microservice',
                'idea': 'Production microservice with FastAPI for enterprise ML processing',
                'expected_build': 'production',
                'expected_preset': 'microservice',
                'expected_ai_score_min': 6.0
            },
            {
                'name': 'CLI Tool',
                'idea': 'Command-line tool for processing files with multiple commands',
                'expected_build': 'mvp',
                'expected_preset': 'cli-tool',
                'expected_ai_score_min': 7.0
            },
            {
                'name': 'Real-time Chat App',
                'idea': 'Chat application with real-time messaging and user authentication',
                'expected_build': 'mvp',
                'expected_preset': 'baas',
                'expected_ai_score_min': 7.0
            }
        ]

        results = []
        passed_tests = 0
        total_tests = len(test_scenarios)

        for scenario in test_scenarios:
            result = self.run_assessment(scenario['idea'], scenario['name'])

            # Validate results
            build_correct = result['build_preset'] == scenario['expected_build']
            preset_correct = result['arch_preset'] == scenario['expected_preset']
            score_adequate = result['ai_assessment']['ai_score'] >= scenario['expected_ai_score_min']

            test_passed = build_correct and preset_correct and score_adequate
            if test_passed:
                passed_tests += 1

            print(f"\n✅ Test Results for {scenario['name']}:")
            print(f"   Build Preset: {'✅' if build_correct else '❌'} Expected: {scenario['expected_build']}, Got: {result['build_preset']}")
            print(f"   Arch Preset: {'✅' if preset_correct else '❌'} Expected: {scenario['expected_preset']}, Got: {result['arch_preset']}")
            print(f"   AI Score: {'✅' if score_adequate else '❌'} Expected: ≥{scenario['expected_ai_score_min']}, Got: {result['ai_assessment']['ai_score']}")
            print(f"   Overall: {'✅ PASS' if test_passed else '❌ FAIL'}")

            results.append({
                'scenario': scenario['name'],
                'result': result,
                'passed': test_passed,
                'validations': {
                    'build_correct': build_correct,
                    'preset_correct': preset_correct,
                    'score_adequate': score_adequate
                }
            })

        print(f"\n🎯 Test Suite Summary")
        print("=" * 30)
        print(f"Tests Passed: {passed_tests}/{total_tests}")
        print(f"Success Rate: {(passed_tests/total_tests)*100:.1f}%")

        if passed_tests == total_tests:
            print("🎉 All tests passed! SA agent logic is functioning correctly.")
        else:
            print("⚠️  Some tests failed. Review the logic and configuration.")

        return results

if __name__ == "__main__":
    # Initialize test runner
    test_runner = SATestRunner()

    # Run the test suite
    results = test_runner.run_test_suite()

    print(f"\n📋 Ready for Phase 2: EA Agent Modification")
    print("Next steps:")
    print("1. Review test results and fix any failures")
    print("2. Proceed with EA agent modifications")
    print("3. Implement SA→EA workflow integration")