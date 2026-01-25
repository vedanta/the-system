# The System Writing Standards

**Document Type:** Internal technical documentation
**Audience:** Engineers responsible for building, operating, or reviewing the system
**Purpose:** Define implementation requirements for documentation content and formatting

This document specifies mandatory writing standards for The System framework documentation. These standards ensure consistency, technical accuracy, and operational clarity across all documentation artifacts.

## Terminology Requirements

### Framework-Specific Terms
```yaml
Required_Terms:
  framework_name: "The System"  # Never "the system"
  framework_acronym: "ASDO"     # Autonomous Software Development Organization
  command_format: "`/ts-command`"  # Always code-formatted
  agent_reference: "agents"     # Never "AI agents"
  gate_reference: "Human-in-the-Loop" # Never "human in the loop"

Prohibited_Terms:
  - "the system" → "The System"
  - "AI agents" → "agents"
  - "ts commands" → "/ts-* commands"
  - "infrastructure-as-code" → "Infrastructure as Code"
```

### Technical Term Standards
- Commands: Always formatted as `code` with backticks
- File paths: Always formatted as `code` with backticks
- Agent count: "26 agents" (current accurate count)
- Command count: "59 commands" (current accurate count)
- Technology names: Use official capitalization (TypeScript, JavaScript, React)

## Language Structure Requirements

### Voice and Tense
```yaml
Person: second_person      # "you", never "one" or "the user"
Voice: active_preferred    # "Deploy the application" not "The application should be deployed"
Tense: present            # "The agent creates" not "The agent will create"
```

### Sentence Construction
- Maximum length: 35 words
- Preferred length: Under 25 words
- One main concept per sentence
- Subject-verb-object order for clarity
- Explicit pronoun references

### Paragraph Structure
- Maximum: 7 sentences
- Preferred: 3-5 sentences
- One main idea per paragraph
- Logical information flow between paragraphs

## Content Organization Standards

### Header Hierarchy
```yaml
Structure:
  H1: Document title only
  H2: Major functional sections
  H3: Implementation subsections
  H4: Technical details (maximum depth)

Format: Title Case
Examples:
  ✅ "Stage 3: Development Implementation"
  ❌ "development implementation"
```

### List Requirements
```yaml
Bullet_Lists:
  marker: "-" (hyphen)
  structure: parallel_grammar
  punctuation: consistent_within_list

Numbered_Lists:
  usage: sequential_steps OR priority_order
  format: actionable_items_when_applicable
```

## Formatting Implementation

### Emphasis Hierarchy
```yaml
Strong_Emphasis: "**text**"
  usage: critical_information, key_concepts, warnings
  examples: "**IMPORTANT**", "**The System**", "**26 agents**"

Mild_Emphasis: "*text*"
  usage: first_term_introduction, document_titles
  examples: "*Human-in-the-Loop*", "*User Guide*"

Code_Formatting: "`text`"
  usage: commands, file_paths, technical_terms, variables
  examples: "`/ts-deploy`", "`.claude/agents/`", "`TypeScript`"
```

### Visual Status Indicators
```yaml
Status_Markers:
  ✅: completed_items, benefits, positive_states
  ❌: problems, failures, missing_requirements
  ⚠️: warnings, constraints, important_conditions
  💡: implementation_notes, tips, additional_context

Process_Markers:
  🚀: execution_actions, deployment_operations
  🔧: configuration_tasks, technical_setup
  📋: documentation_references, planning_items
  🎯: objectives, key_requirements, targets
```

## Code Documentation Requirements

### Command Documentation Format
```yaml
Usage_Syntax: "/ts-command [required] [optional]"
Example_Format: "/ts-deploy staging"
Purpose_Description: active_voice_action_statement

Required_Elements:
  - Syntax specification
  - Functional example
  - Input requirements
  - Output expectations
  - Error conditions
```

### Code Block Standards
```yaml
Language_Tags: required_for_syntax_highlighting
Block_Format:
  ```bash
  /ts-command argument
  ```

Inline_Code: backtick_formatted
Examples: "`/ts-status`", "`.claude/agents/`", "`package.json`"
```

## Cross-Reference Implementation

### Internal Link Format
```yaml
Same_Document: "[Description](#section-anchor)"
Other_Document: "[Description](relative-path.md)"
External_Link: "[Service Name](https://url.com)"

Requirements:
  - descriptive_link_text (never "click here")
  - functional_relative_paths
  - section_anchor_accuracy
```

### File Reference Standards
- File paths: Code-formatted with backticks
- Line references: `filename.ext:line_number`
- Directory references: Include trailing slash for clarity

## Quality Validation Requirements

### Technical Accuracy
```yaml
Mandatory_Checks:
  - command_syntax_verification
  - file_path_existence_validation
  - count_accuracy_enforcement (agents: 25, commands: 59)
  - cross_reference_functionality

Error_Conditions:
  - broken_internal_links: validation_failure
  - incorrect_counts: validation_failure
  - invalid_command_syntax: validation_failure
```

### Content Standards
```yaml
Information_Requirements:
  - prerequisites_explicitly_stated
  - assumptions_documented
  - failure_modes_identified
  - expected_outcomes_specified

Trade_off_Documentation:
  format: factual_presentation_without_advocacy
  content: constraints, alternatives, implications
```

## Document Type Specifications

### User-Facing Documentation
```yaml
README.md:
  purpose: framework_introduction, installation_guidance
  tone: instructional_with_clear_value_proposition
  structure: quick_start_emphasis, comprehensive_reference

USER-GUIDE.md:
  purpose: complete_operational_reference
  content: step_by_step_procedures, troubleshooting_guidance
  depth: comprehensive_coverage_with_practical_examples

QUICKSTART.md:
  purpose: minimal_viable_onboarding
  structure: action_oriented_steps
  constraint: maximum_5_minute_completion_time
```

### Technical Documentation
```yaml
CLAUDE.md:
  purpose: framework_implementation_reference
  audience: framework_developers, system_operators
  content: architecture_details, agent_specifications, workflow_definitions

docs/user/*.md:
  purpose: topic_specific_implementation_guidance
  structure: detailed_procedures_with_cross_references
  depth: sufficient_for_independent_execution
```

## Language Accessibility Requirements

### International Compatibility
```yaml
Word_Selection:
  - common_vocabulary_preferred
  - technical_terms_defined_on_first_use
  - cultural_references_avoided
  - idioms_eliminated

Sentence_Structure:
  - subject_verb_object_order
  - logical_information_sequence
  - clear_pronoun_antecedents
  - minimal_nested_clauses
```

## Implementation Validation

### Automated Checks
```yaml
Count_Validation:
  agents: 26 (filesystem_verified)
  commands: 59 (filesystem_verified)
  enforcement: all_references_must_match_actual_counts

Link_Validation:
  internal_links: must_resolve_to_existing_sections
  file_references: must_point_to_existing_files
  cross_references: must_maintain_accuracy_after_updates

Formatting_Validation:
  command_formatting: must_use_backtick_code_formatting
  file_path_formatting: must_use_backtick_code_formatting
  emphasis_hierarchy: must_follow_specified_markup_patterns
```

### Quality Metrics
```yaml
Readability_Targets:
  average_sentence_length: 15-20_words
  paragraph_length: 3-5_sentences
  technical_term_density: appropriate_for_audience

Accuracy_Requirements:
  technical_correctness: 100%
  cross_reference_integrity: 100%
  count_accuracy: 100%
  command_syntax_validity: 100%
```

## Enforcement Implementation

### Audit Integration
The `/ts-docs-audit` command validates compliance with these standards through automated analysis and manual review recommendations.

### Failure Conditions
```yaml
Validation_Failures:
  - incorrect_agent_command_counts
  - broken_cross_references
  - invalid_command_syntax_examples
  - inconsistent_terminology_usage
  - non_compliant_formatting_patterns

Resolution_Requirements:
  - automatic_fixes_where_possible
  - manual_review_flags_for_complex_issues
  - compliance_verification_before_release
```

## Constraints and Dependencies

### Technical Constraints
- Markdown compatibility with GitHub Flavored Markdown specification
- Code syntax highlighting dependency on language tag specification
- Badge accuracy dependency on shield.io service availability
- Cross-reference functionality dependency on relative path stability

### Update Dependencies
- Agent count updates require filesystem synchronization
- Command count updates require filesystem synchronization
- Cross-reference updates require path validation
- Terminology changes require comprehensive search and replace operations

This specification provides the implementation requirements for maintaining documentation quality and consistency across The System framework. Compliance with these standards ensures operational clarity and technical accuracy for system engineers.