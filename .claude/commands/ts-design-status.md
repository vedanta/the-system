# Design Department Status Check: $ARGUMENTS

Check the current status of Design Department work, show completed phases, and provide next-step recommendations.

## Usage

```bash
/ts-design-status [project-path]
/ts-design-status [project-path] --detailed
/ts-design-status [project-path] --summary
/ts-design-status [project-path] --recommendations
/ts-design-status --list-projects
/ts-design-status --metrics-only
/ts-design-status --help
```

## Purpose

Provide comprehensive visibility into Design Department progress for any project. Shows completed phases, key metrics, file locations, and intelligent recommendations for next steps. Essential for tracking design workflow progress and planning stakeholder reviews.

## Arguments

- **project-path**: Path to project directory (defaults to current directory or auto-detect)
- **--detailed**: Show comprehensive details including file contents and analytics
- **--summary**: Show condensed summary suitable for executives and stakeholders
- **--recommendations**: Focus on next steps and optimization suggestions
- **--list-projects**: List all projects with design work and their status
- **--metrics-only**: Show only key performance metrics and statistics
- **--format**: Output format - console, markdown, json (default: console)
- **--save-to**: Save detailed status report to specified file

## Examples

```bash
# Basic status check for current project
/ts-design-status

# Detailed status with file analysis
/ts-design-status output/my-project --detailed

# Executive summary for stakeholder reporting
/ts-design-status output/ecommerce-app --summary --format=markdown

# Get next-step recommendations
/ts-design-status output/dashboard --recommendations

# Check all design projects
/ts-design-status --list-projects

# Performance metrics only
/ts-design-status output/my-project --metrics-only

# Save detailed report for documentation
/ts-design-status output/saas-app --detailed --save-to=design-status-report.md
```

## Process

### Phase 1: Project Detection and Analysis

1. **Project Path Resolution**
   - Auto-detect project from current directory context
   - Validate project path exists and is accessible
   - Check for Design Department artifacts and outputs
   - Identify project framework and technology stack

2. **Design Artifact Discovery**
   - Scan for UX analysis results (`*-analysis/`, `design-analysis-report.md`)
   - Check API discovery outputs (`api-inventory.json`, `sample-data.json`)
   - Locate wireframe files (`wireframes/`, `*.txt`, `*.svg`)
   - Find prototype artifacts (`prototypes/`, `index.html`, component libraries)
   - Detect review server configurations and analytics data

### Phase 2: Status Assessment and Metrics

3. **Phase Completion Analysis**
   ```yaml
   Phase 1 - UX Analysis:
     Status: Complete/In Progress/Not Started
     Artifacts: design-analysis-report.md, component-inventory.json
     Metrics: Components found, accessibility issues, layout patterns
     Timestamp: Last modified date
     Quality: File size, completeness check

   Phase 2 - API Discovery:
     Status: Complete/In Progress/Not Started/Skipped
     Artifacts: api-inventory.json, schema-analysis.json, sample-data.json
     Metrics: Endpoints discovered, data models, sample records
     Framework: Detected backend framework and confidence level
     Domain: Identified domain context and accuracy

   Phase 3 - Wireframes:
     Status: Complete/In Progress/Not Started
     Artifacts: wireframes/ directory, ASCII/SVG files
     Metrics: Wireframes generated, content realism level
     Quality: Enhancement level (basic vs API-driven)
     Responsive: Mobile/tablet/desktop variants available

   Phase 4 - Prototypes:
     Status: Complete/In Progress/Not Started
     Artifacts: prototypes/ directory, HTML files, component library
     Fidelity: Low/Medium/High fidelity level detected
     Analytics: Interaction tracking enabled/disabled
     Server: Review server configuration and accessibility
   ```

4. **Quality and Performance Metrics**
   - Content realism improvement percentage
   - Domain accuracy assessment
   - Component coverage analysis
   - API integration completeness
   - Stakeholder readiness score
   - Development readiness assessment

### Phase 3: Status Report Generation

5. **Generate Console Output**
   ```
   ╔══════════════════════════════════════════════════════════════════╗
   ║  🎨 DESIGN DEPARTMENT STATUS                                     ║
   ╠══════════════════════════════════════════════════════════════════╣
   ║  Project: [PROJECT_NAME]                                         ║
   ║  Path: [PROJECT_PATH]                                            ║
   ║  Framework: [React/Vue/Angular] + [FastAPI/Express/Django]       ║
   ║  Domain: [ecommerce/fintech/azure/etc]                          ║
   ║  Last Updated: [TIMESTAMP]                                       ║
   ╠══════════════════════════════════════════════════════════════════╣
   ║  PHASE STATUS                                                    ║
   ╠══════════════════════════════════════════════════════════════════╣
   ║                                                                  ║
   ║  ✅ Phase 1: UX Analysis        │ 19 components, 5 patterns      ║
   ║     📁 design-analysis-report.md │ 3 accessibility issues       ║
   ║     📊 component-inventory.json  │ Updated: 2024-01-16 14:30     ║
   ║                                                                  ║
   ║  ✅ Phase 2: API Discovery      │ 14 endpoints, 23 models       ║
   ║     📁 api-inventory.json        │ FastAPI detected (95%)       ║
   ║     📊 sample-data.json          │ Domain: Azure cost optimization ║
   ║                                                                  ║
   ║  ✅ Phase 3: Enhanced Wireframes │ 4 wireframes, realistic data ║
   ║     📁 wireframes/               │ 350% content improvement     ║
   ║     🖼️  SVG + ASCII formats      │ Mobile + Desktop variants    ║
   ║                                                                  ║
   ║  ✅ Phase 4: Interactive Prototypes │ Medium fidelity           ║
   ║     📁 prototypes/index.html     │ Alpine.js + Tailwind CSS    ║
   ║     🌐 Review Server: http://localhost:8080                     ║
   ║     📊 Analytics: Enabled        │ 47 interactions tracked     ║
   ║                                                                  ║
   ╠══════════════════════════════════════════════════════════════════╣
   ║  METRICS & QUALITY                                               ║
   ╠══════════════════════════════════════════════════════════════════╣
   ║                                                                  ║
   ║  📈 Content Realism: 350% improvement over basic wireframes     ║
   ║  🎯 Domain Accuracy: 95% Azure cost optimization accuracy       ║
   ║  🧩 Component Coverage: 19/19 components (100%)                 ║
   ║  🔌 API Integration: 14/14 endpoints mapped (100%)              ║
   ║  👥 Stakeholder Readiness: 95% (ready for review)              ║
   ║  💻 Development Readiness: 90% (specs available)                ║
   ║                                                                  ║
   ╠══════════════════════════════════════════════════════════════════╣
   ║  NEXT STEPS                                                      ║
   ╠══════════════════════════════════════════════════════════════════╣
   ║                                                                  ║
   ║  🎯 Recommended Actions:                                         ║
   ║     1. Stakeholder review via http://localhost:8080             ║
   ║     2. Analytics review: 47 interactions captured               ║
   ║     3. Ready for development integration                         ║
   ║                                                                  ║
   ║  🚀 Continue with The System:                                    ║
   ║     /ts-develop                  # Start development phase       ║
   ║     /ts-build frontend          # Use component specifications  ║
   ║                                                                  ║
   ╚══════════════════════════════════════════════════════════════════╝
   ```

6. **Intelligent Next-Step Recommendations**
   ```yaml
   Scenario: All phases complete
   Recommendations:
     - "✅ Design pipeline complete - ready for stakeholder review"
     - "🌐 Review prototypes: http://localhost:8080"
     - "📊 Analyze user interactions in prototypes/analytics/"
     - "💻 Continue with /ts-develop for implementation"

   Scenario: Only UX analysis complete
   Recommendations:
     - "⚡ Run /ts-design-api-discover for realistic content"
     - "🎯 Or continue with /ts-design-wireframe for basic wireframes"
     - "⚡ Turbo mode: /ts-design-turbo for complete pipeline"

   Scenario: API discovery missing but wireframes exist
   Recommendations:
     - "⚠️ Wireframes use placeholder content"
     - "📈 Run /ts-design-api-discover to improve realism by 350%"
     - "🔄 Regenerate wireframes with --content=api-driven"

   Scenario: High-fidelity upgrade possible
   Recommendations:
     - "📈 Upgrade to high fidelity: /ts-design-prototype all --fidelity=high"
     - "🎨 Add analytics: /ts-design-prototype all --analytics"
     - "🌐 Start review server: /ts-design-prototype --review-server"
   ```

### Phase 4: Format-Specific Output

7. **Summary Format (--summary)**
   ```markdown
   # Design Status Summary: [PROJECT_NAME]

   **Status:** ✅ Complete (4/4 phases)
   **Quality:** 95% stakeholder ready
   **Last Updated:** 2024-01-16 14:30

   ## Key Metrics
   - **Components:** 19 analyzed, 100% coverage
   - **APIs:** 14 endpoints discovered, realistic data generated
   - **Wireframes:** 4 enhanced with 350% content improvement
   - **Prototypes:** Medium fidelity, interactive, analytics enabled

   ## Next Steps
   1. Stakeholder review via prototype server
   2. Analytics review (47 interactions tracked)
   3. Development integration ready
   ```

8. **JSON Format (--format=json)**
   ```json
   {
     "project": {
       "name": "my-project",
       "path": "output/my-project",
       "framework": {
         "frontend": "React",
         "backend": "FastAPI",
         "confidence": 0.95
       },
       "domain": "azure-cost-optimization",
       "lastUpdated": "2024-01-16T14:30:00Z"
     },
     "phases": {
       "uxAnalysis": {
         "status": "complete",
         "artifacts": ["design-analysis-report.md", "component-inventory.json"],
         "metrics": {
           "components": 19,
           "layouts": 5,
           "accessibilityIssues": 3
         },
         "timestamp": "2024-01-16T13:15:00Z"
       },
       "apiDiscovery": {
         "status": "complete",
         "artifacts": ["api-inventory.json", "sample-data.json"],
         "metrics": {
           "endpoints": 14,
           "dataModels": 23,
           "sampleRecords": 50
         },
         "framework": "FastAPI",
         "domain": "azure-cost-optimization"
       },
       "wireframes": {
         "status": "complete",
         "artifacts": ["wireframes/", "4 wireframe files"],
         "quality": {
           "contentRealism": "350% improvement",
           "formats": ["ASCII", "SVG"],
           "responsive": ["mobile", "desktop"]
         }
       },
       "prototypes": {
         "status": "complete",
         "artifacts": ["prototypes/index.html", "component library"],
         "fidelity": "medium",
         "features": {
           "analytics": true,
           "reviewServer": "http://localhost:8080",
           "interactions": 47
         }
       }
     },
     "metrics": {
       "contentRealism": 3.5,
       "domainAccuracy": 0.95,
       "componentCoverage": 1.0,
       "apiIntegration": 1.0,
       "stakeholderReadiness": 0.95,
       "developmentReadiness": 0.90
     },
     "recommendations": [
       "Stakeholder review ready",
       "Analytics data available",
       "Continue with development phase"
     ]
   }
   ```

### Phase 5: Multi-Project Analysis (--list-projects)

9. **Project Discovery and Listing**
   - Scan output/ directory for projects with design artifacts
   - Check .claude/pipeline/projects/ for Design Department status
   - Analyze relative progress and completion rates
   - Generate comparative status report

10. **Multi-Project Status Display**
    ```
    ╔══════════════════════════════════════════════════════════════════╗
    ║  🎨 DESIGN DEPARTMENT - ALL PROJECTS                             ║
    ╠══════════════════════════════════════════════════════════════════╣
    ║                                                                  ║
    ║  📊 Project Overview:                                            ║
    ║     Total Projects: 5                                            ║
    ║     Complete: 2 ✅                                               ║
    ║     In Progress: 2 🔄                                            ║
    ║     Not Started: 1 ⭕                                            ║
    ║                                                                  ║
    ╠══════════════════════════════════════════════════════════════════╣
    ║  PROJECT STATUS                                                  ║
    ╠══════════════════════════════════════════════════════════════════╣
    ║                                                                  ║
    ║  ✅ ecommerce-app          │ 4/4 phases │ High fidelity        ║
    ║     📅 Updated: 2024-01-15  │ 🌐 Review ready                   ║
    ║                                                                  ║
    ║  ✅ dashboard-project      │ 4/4 phases │ Medium fidelity      ║
    ║     📅 Updated: 2024-01-14  │ 📊 Analytics: 127 interactions    ║
    ║                                                                  ║
    ║  🔄 saas-platform          │ 2/4 phases │ API discovery done   ║
    ║     📅 Updated: 2024-01-16  │ ⚡ Next: /ts-design-wireframe     ║
    ║                                                                  ║
    ║  🔄 mobile-app             │ 1/4 phases │ UX analysis only     ║
    ║     📅 Updated: 2024-01-13  │ ⚡ Next: /ts-design-api-discover  ║
    ║                                                                  ║
    ║  ⭕ new-project            │ 0/4 phases │ Not started          ║
    ║     📅 Created: 2024-01-16  │ ⚡ Start: /ts-design-analyze      ║
    ║                                                                  ║
    ╚══════════════════════════════════════════════════════════════════╝
    ```

## Integration with The System Status

### Project File Integration

The command integrates with The System's project tracking:

```yaml
# Read from .claude/pipeline/projects/[project].md
Design Department Status:
  - Phase 1 (UX Analysis): Complete ✅ [timestamp]
  - Phase 2 (API Discovery): Complete ✅ [timestamp]
  - Phase 3 (Enhanced Wireframes): Complete ✅ [timestamp]
  - Phase 4 (Interactive Prototypes): Complete ✅ [timestamp]

Design Metrics:
  - Components: 19 analyzed
  - APIs: 14 endpoints discovered
  - Content Improvement: 350%
  - Fidelity: Medium
  - Review Server: http://localhost:8080
  - Analytics: 47 interactions tracked

Next HITL Gate: Ready for /ts-develop
```

### Framework Status Integration

```bash
# Works with existing framework commands
/ts-status                    # Shows overall project status including design
/ts-view design-status        # Shows just design section of project file
/ts-design-status            # Detailed design-specific analysis
```

## Performance Considerations

### Fast Status Checks

```yaml
Quick Mode (default):
  - File existence checks only
  - Basic metrics from file headers
  - No deep content analysis
  - Response time: < 2 seconds

Detailed Mode (--detailed):
  - Full file content analysis
  - Component counting and validation
  - API endpoint verification
  - Response time: 5-10 seconds

Metrics Only (--metrics-only):
  - Extract key numbers only
  - No recommendations or next steps
  - Minimal output for automation
  - Response time: < 1 second
```

### Caching Strategy

```yaml
Status Cache (optional):
  - Cache expensive file analysis for 5 minutes
  - Invalidate on file modification
  - Speed up repeated status checks
  - Especially beneficial for --list-projects

File Modification Tracking:
  - Use file timestamps to detect changes
  - Skip re-analysis if files unchanged
  - Update cache incrementally
```

## Error Handling

### Common Scenarios

```bash
# No design work found
Status: No Design Department artifacts found
Recommendation: Start with /ts-design-analyze [project-path]

# Partial completion
Status: UX Analysis complete, API Discovery missing
Recommendation: Run /ts-design-api-discover for 350% content improvement

# Corrupted or incomplete files
Warning: design-analysis-report.md appears incomplete
Recommendation: Re-run /ts-design-analyze to regenerate

# Review server not running
Status: Prototypes complete but review server offline
Recommendation: /ts-design-prototype --review-server to start server
```

### Quality Validation

```yaml
File Integrity Checks:
  - JSON files parse correctly
  - HTML prototypes render without errors
  - Required sections present in markdown files
  - File sizes within expected ranges

Content Validation:
  - Component inventory has realistic counts (5-50 components)
  - API inventory has valid endpoint patterns
  - Sample data follows domain patterns
  - Wireframes contain expected sections
```

## Success Criteria

### Status Accuracy
- ✅ **Phase Detection**: 100% accurate identification of completed phases
- ✅ **Metrics Extraction**: Reliable counting of components, APIs, wireframes
- ✅ **Quality Assessment**: Accurate realism and readiness scoring
- ✅ **Recommendations**: Contextually appropriate next-step guidance

### Performance Benchmarks
- **Quick Status**: Under 2 seconds for basic phase status
- **Detailed Analysis**: Under 10 seconds for comprehensive analysis
- **Multi-Project**: Under 15 seconds for 10+ projects
- **Large Projects**: Scales to projects with 100+ components

### User Experience
- **Clear Visual Layout**: Easy-to-scan status information
- **Actionable Recommendations**: Specific next commands to run
- **Progress Indicators**: Clear sense of completion and quality
- **Integration Ready**: Seamless workflow with other ts-design commands

This command provides essential visibility into Design Department progress, enabling effective project management and ensuring stakeholders understand the current state of design work and what actions are needed to move forward.

---

*Note: ts-design-status integrates with The System's project tracking while providing Design Department-specific insights and recommendations for optimal workflow management.*