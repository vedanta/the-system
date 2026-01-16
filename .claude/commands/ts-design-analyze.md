# Design Analysis: $ARGUMENTS

Analyze existing codebase UX patterns and identify improvement opportunities using AI-driven design analysis.

## Usage

```bash
/ts-design-analyze [project-path]
/ts-design-analyze [project-path] --deep
/ts-design-analyze [project-path] --accessibility-focus
/ts-design-analyze [project-path] --usability-focus
/ts-design-analyze [project-path] --output=json
/ts-design-analyze --help
```

## Purpose

The Design Analysis command provides comprehensive UX and accessibility analysis of existing codebases to inform AI-driven UI generation. It serves as the foundation for the Design Department workflow by understanding current design patterns, identifying improvement opportunities, and establishing baselines for redesign efforts.

## Arguments

- **project-path**: Path to source code directory (defaults to current directory)
- **--deep**: Perform comprehensive analysis including performance and advanced patterns
- **--accessibility-focus**: Focus analysis on WCAG 2.1 compliance and accessibility issues
- **--usability-focus**: Focus analysis on Nielsen's usability heuristics and UX patterns
- **--framework**: Specify framework (react|vue|angular) to override auto-detection
- **--output**: Output format (markdown|json|summary) - default: markdown
- **--save-to**: Custom output directory for analysis results

## Examples

```bash
# Analyze current project with default settings
/ts-design-analyze

# Analyze specific project with comprehensive analysis
/ts-design-analyze output/dfo-gui --deep

# Focus on accessibility compliance
/ts-design-analyze output/dfo-gui --accessibility-focus

# Generate JSON output for integration with other tools
/ts-design-analyze output/dfo-gui --output=json --save-to=design-analysis/

# Analyze specific framework project
/ts-design-analyze my-vue-app --framework=vue --deep
```

## Process

### Phase 1: Setup and Discovery
1. **Project Validation**
   - Verify project path exists and contains source code
   - Detect frontend framework (React, Vue, Angular, or vanilla)
   - Identify package.json and dependencies
   - Check for existing design system or UI library usage

2. **Analysis Scope Planning**
   - Determine analysis depth based on flags
   - Set focus areas (accessibility, usability, or comprehensive)
   - Estimate analysis time and complexity
   - Create analysis plan and output structure

### Phase 2: Component Discovery and Analysis
3. **Launch UX Analyzer Agent**
   ```
   Agent: ux-analyzer
   Input: {
     projectPath: [specified-path],
     framework: [detected/specified],
     analysisDepth: [basic/deep],
     focus: [accessibility/usability/comprehensive],
     outputFormat: [markdown/json]
   }
   ```

4. **Component Tree Analysis**
   - Parse all component files (.tsx, .vue, .component.ts)
   - Build component dependency graph
   - Identify reusable components vs one-off components
   - Extract prop interfaces and component patterns

5. **Information Architecture Assessment**
   - Map routing structure and navigation patterns
   - Analyze page hierarchy and content organization
   - Identify user flow patterns and task completion paths
   - Assess breadcrumb and navigation consistency

### Phase 3: Quality and Compliance Assessment
6. **Accessibility Audit**
   - Check WCAG 2.1 compliance (Level A and AA)
   - Identify missing ARIA labels and semantic markup
   - Analyze color contrast and visual accessibility
   - Assess keyboard navigation patterns

7. **Usability Evaluation**
   - Apply Nielsen's 10 usability heuristics
   - Identify consistency and standards issues
   - Evaluate error handling and user feedback
   - Assess user control and flexibility

### Phase 4: Analysis and Reporting
8. **Pattern Recognition**
   - Identify design system usage and consistency
   - Analyze component reusability patterns
   - Detect UI library integration patterns
   - Map data fetching and state management patterns

9. **Generate Comprehensive Analysis Report**
   - Executive summary with key findings
   - Component inventory and quality assessment
   - Accessibility compliance report with specific issues
   - Usability heuristics evaluation with scores
   - Actionable improvement recommendations

### Phase 5: Output Generation and Integration
10. **Create Analysis Artifacts**
    - Primary analysis report (ux-analysis.md)
    - Component inventory (component-inventory.json)
    - Accessibility issues list (accessibility-issues.json)
    - User flow diagrams (user-flows.mmd)
    - Improvement recommendations (recommendations.md)

11. **Prepare for Next Steps**
    - Generate wireframe generation requirements
    - Prepare API discovery input requirements
    - Create component improvement specifications
    - Set up integration points for other Design Department agents

## Output Structure

### Default Output Location
```
[project-path]-design-analysis/
├── ux-analysis.md                 # Primary analysis report
├── component-inventory.json        # Structured component data
├── accessibility-issues.json       # WCAG compliance issues
├── user-flows.mmd                 # Mermaid user flow diagrams
├── recommendations.md             # Prioritized improvement recommendations
└── analysis-summary.json          # Machine-readable summary
```

### Analysis Report Structure
```markdown
# UX Analysis Report: [Project Name]

## Executive Summary
- **Framework**: React 18.2 with TypeScript
- **UI Library**: Tailwind CSS 3.3
- **Overall UX Score**: 7.2/10
- **Accessibility Compliance**: 73% WCAG 2.1 AA
- **Critical Issues**: 8 found
- **Components Analyzed**: 23

## Key Findings
### 🎯 Strengths
- Well-structured component hierarchy
- Consistent Tailwind CSS usage
- Good TypeScript implementation

### ⚠️ Areas for Improvement
- Missing accessibility labels on 15 interactive elements
- Inconsistent error handling patterns
- No loading states for async operations
- Poor mobile responsiveness on data tables

### 🚨 Critical Issues
- Color contrast below WCAG standards in 6 components
- No keyboard navigation support
- Missing form validation feedback

## Component Analysis
[Detailed component breakdown]

## Accessibility Assessment
[WCAG 2.1 compliance details]

## Usability Evaluation
[Nielsen's heuristics assessment]

## Recommendations
[Prioritized improvement plan]
```

### JSON Output Structure
```json
{
  "analysisMetadata": {
    "projectPath": "output/dfo-gui",
    "framework": "react",
    "analyzedAt": "2024-01-16T15:30:00Z",
    "analysisDepth": "comprehensive",
    "version": "1.0.0"
  },
  "summary": {
    "overallScore": 7.2,
    "accessibilityScore": 73,
    "usabilityScore": 8.1,
    "criticalIssues": 8,
    "componentsAnalyzed": 23
  },
  "components": [...],
  "accessibility": {...},
  "usability": {...},
  "recommendations": [...]
}
```

## Integration Points

### Input for Other Design Commands
- **ts-design-wireframe**: Uses component structure and layout patterns
- **ts-design-api-discover**: References component-to-API mapping requirements
- **ts-design-prototype**: Uses interaction patterns and user flows
- **ts-design-implement**: Uses accessibility requirements and improvement specifications

### Quality Gates
- Analysis must complete without critical errors
- Accessibility assessment must include WCAG 2.1 evaluation
- Component inventory must be comprehensive and accurate
- Recommendations must be specific and actionable

## Error Handling

### Common Scenarios
```bash
# Project path doesn't exist
Error: Project path 'nonexistent-project' not found
Suggestion: Check the path and ensure it contains a frontend application

# Unsupported framework detected
Warning: Framework 'svelte' not fully supported, running basic analysis
Continuing with generic component analysis...

# No components found
Error: No frontend components found in 'backend-only-project'
Suggestion: Ensure path points to frontend application directory

# Analysis timeout for large codebase
Warning: Analysis taking longer than expected for 150+ components
Consider using --summary flag for faster results on large codebases
```

### Fallback Strategies
```bash
# Framework auto-detection fails
Falling back to generic JavaScript/TypeScript analysis
Providing basic component structure without framework-specific patterns

# Component parsing fails
Skipping malformed component: src/components/BrokenComponent.tsx
Continuing analysis with remaining 22 components

# Accessibility analysis incomplete
Unable to complete accessibility audit - providing basic checklist
Manual accessibility review recommended
```

## Performance Considerations

### Large Codebase Handling
- **Pagination**: Process components in batches of 50
- **Selective Analysis**: Focus on main components if 100+ components found
- **Caching**: Cache parsed results for repeated analysis
- **Progress Reporting**: Show analysis progress for long-running operations

### Resource Management
- **Memory Limits**: Stream large file processing to avoid memory issues
- **Timeout Handling**: Set reasonable timeouts for component analysis
- **Parallel Processing**: Process independent components in parallel
- **Incremental Analysis**: Only re-analyze changed components on subsequent runs

## Success Criteria

Phase 1 implementation success is measured by:
- ✅ Successfully analyzes React applications with 5-20 components
- ✅ Generates readable analysis reports with actionable recommendations
- ✅ Identifies basic accessibility issues using WCAG 2.1 guidelines
- ✅ Provides component inventory suitable for wireframe generation
- ✅ Integrates seamlessly with existing `/ts-*` command structure
- ✅ Completes analysis of dfo-gui project within 2-3 minutes

This command establishes the foundation for AI-driven UI generation by providing comprehensive analysis of existing design patterns and quality assessment.