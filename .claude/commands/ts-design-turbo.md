# Design Department Turbo Mode: $ARGUMENTS

Execute the complete Design Department pipeline autonomously - from UX analysis through interactive prototypes without manual intervention.

## Usage

```bash
/ts-design-turbo [project-path] [--fidelity=medium]
/ts-design-turbo [project-path] --domain=ecommerce --fidelity=high
/ts-design-turbo [project-path] --mobile --review-server --analytics
/ts-design-turbo [project-path] --format=svg --content=api-driven
/ts-design-turbo [project-path] --quick --fidelity=low
/ts-design-turbo --help
```

## Purpose

Automate the entire Design Department workflow in one command, eliminating manual intervention between phases. This command runs UX analysis, API discovery, enhanced wireframe generation, and interactive prototype creation sequentially with optimal settings.

## Arguments

- **project-path**: Path to project directory (defaults to current directory or detects from context)
- **--fidelity**: Prototype fidelity level - low, medium, or high (default: medium)
- **--domain**: Domain context for realistic content (azure|aws|fintech|ecommerce|healthcare|education)
- **--mobile**: Generate mobile-optimized outputs (375px width)
- **--desktop**: Generate desktop outputs (1200px width, default)
- **--tablet**: Generate tablet outputs (768px width)
- **--format**: Wireframe format - ascii, svg, or both (default: both)
- **--content**: Content strategy - realistic, placeholder, schema-based, api-driven (default: api-driven)
- **--review-server**: Start review server after completion
- **--analytics**: Enable interaction analytics and behavior tracking
- **--public**: Make review server accessible from network (requires --review-server)
- **--port**: Custom port for review server (default: 8080)
- **--quick**: Fast mode with reduced analysis depth and low fidelity
- **--save-to**: Custom output directory for all design artifacts

## Examples

```bash
# Basic turbo mode - complete pipeline with defaults
/ts-design-turbo output/my-project

# E-commerce focused with high fidelity and review server
/ts-design-turbo output/ecommerce-app --domain=ecommerce --fidelity=high --review-server

# Mobile-first design with analytics
/ts-design-turbo output/mobile-app --mobile --fidelity=medium --analytics

# Quick iteration mode for rapid feedback
/ts-design-turbo output/prototype --quick --review-server

# Enterprise presentation mode
/ts-design-turbo output/dashboard --domain=fintech --format=svg --fidelity=high --desktop

# Full-featured turbo with all options
/ts-design-turbo output/saas-app --domain=fintech --fidelity=high --format=both --mobile --analytics --review-server --public

# Custom output location
/ts-design-turbo output/legacy-app --save-to=design-artifacts --fidelity=medium
```

## Process

### Phase 0: Setup and Validation

1. **Parse Arguments and Flags**
   - Validate project path exists and is analyzable
   - Set default values for unspecified options
   - Determine domain context from project structure if not specified
   - Plan execution sequence with optimal flag combinations

2. **Project Detection and Preparation**
   - Auto-detect framework (React/Vue/Angular) and backend (FastAPI/Express/Django)
   - Estimate pipeline duration based on project size and fidelity level
   - Prepare output directory structure for design artifacts
   - Initialize progress tracking and logging

3. **Display Turbo Mode Announcement**
   ```
   ╔══════════════════════════════════════════════════════════════════╗
   ║  🎨 DESIGN TURBO MODE ACTIVATED                                  ║
   ╠══════════════════════════════════════════════════════════════════╣
   ║  Project: [PROJECT_NAME]                                         ║
   ║  Mode: Autonomous Design Pipeline                                ║
   ║  Fidelity: [low/medium/high]                                     ║
   ║  Domain: [domain-context]                                        ║
   ║  Phases: Analysis → API Discovery → Wireframes → Prototypes     ║
   ╚══════════════════════════════════════════════════════════════════╝
   ```

### Phase 1: UX Analysis (Auto-Execute)

4. **Launch UX Analyzer Agent**
   ```
   Agent: ux-analyzer
   Input: {
     projectPath: [specified-path],
     analysisDepth: [quick/deep based on --quick flag],
     accessibilityFocus: true,
     componentFilter: null  # Analyze all components
   }
   ```

5. **Auto-Execute UX Analysis**
   - Component inventory and hierarchy analysis
   - Layout pattern detection and responsive design evaluation
   - Accessibility compliance assessment (WCAG 2.1 AA)
   - Interactive element identification and behavior mapping
   - Auto-approve: UX analysis ✅

   ```
   [Phase 1] ████████████████████ COMPLETE (2-3 min)
   📊 Found: 19 components, 5 layout patterns, 8 accessibility issues
   ```

### Phase 2: API Discovery (Auto-Execute)

6. **Launch API Discovery Specialist Agent**
   ```
   Agent: api-discovery-specialist
   Input: {
     projectPath: [specified-path],
     framework: [auto-detected],
     domainContext: [specified-domain],
     uiMapping: true,
     generateSamples: 50,
     contentStrategy: realistic
   }
   ```

7. **Auto-Execute API Discovery**
   - Backend framework detection and route extraction
   - Data model analysis and TypeScript interface generation
   - Domain-aware realistic sample data generation
   - UI component mapping recommendations
   - Auto-approve: API discovery ✅

   ```
   [Phase 2] ████████████████████ COMPLETE (3-4 min)
   🔍 Discovered: 14 endpoints, 23 data models, 6 sample entities
   ```

### Phase 3: Enhanced Wireframes (Auto-Execute)

8. **Launch Wireframe Generator Agent**
   ```
   Agent: wireframe-generator
   Input: {
     scope: "all",
     format: [ascii/svg/both from --format flag],
     breakpoint: [mobile/tablet/desktop from flags],
     content: "api-driven",  # Use API discovery results
     uxAnalysis: [phase-1-results],
     apiData: [phase-2-results],
     domainContext: [specified-domain]
   }
   ```

9. **Auto-Execute Enhanced Wireframe Generation**
   - Professional ASCII wireframes with realistic content
   - SVG wireframes for presentations (if requested)
   - Responsive variants for specified breakpoints
   - Interactive element indicators and component boundaries
   - Auto-approve: Enhanced wireframes ✅

   ```
   [Phase 3] ████████████████████ COMPLETE (2-3 min)
   📐 Generated: 4 wireframes, 350% content improvement, realistic data
   ```

### Phase 4: Interactive Prototypes (Auto-Execute)

10. **Launch Prototype Developer Agent**
    ```
    Agent: prototype-developer
    Input: {
      scope: "all",
      fidelity: [low/medium/high from --fidelity flag],
      breakpoint: [mobile/tablet/desktop from flags],
      analytics: [true/false from --analytics flag],
      saveInteractions: [true/false from --analytics flag],
      wireframes: [phase-3-results],
      apiAnalysis: [phase-2-results],
      mockData: [realistic-sample-data]
    }
    ```

11. **Auto-Execute Interactive Prototype Generation**
    - Generate fidelity-appropriate HTML prototypes
    - Alpine.js reactive components with realistic data
    - Tailwind CSS professional styling
    - Mock API integration with loading states and error handling
    - Auto-approve: Interactive prototypes ✅

    ```
    [Phase 4] ████████████████████ COMPLETE (4-5 min)
    🎯 Created: Interactive VM table, dashboard, 8 components, analytics ready
    ```

### Phase 5: Review Server & Finalization (Conditional)

12. **Launch Review Server (if --review-server flag)**
    ```javascript
    ReviewServer.start({
      port: [specified-port or 8080],
      public: [--public flag],
      analytics: [--analytics flag],
      prototypes: [generated-prototypes]
    })
    ```

13. **Display Final Summary**
    ```
    ╔══════════════════════════════════════════════════════════════════╗
    ║  🎉 DESIGN TURBO MODE COMPLETE                                   ║
    ╠══════════════════════════════════════════════════════════════════╣
    ║                                                                  ║
    ║  Project: [PROJECT_NAME]                                         ║
    ║  Duration: [TOTAL_TIME] (~10 minutes)                            ║
    ║  Domain: [domain-context] with realistic content                 ║
    ║                                                                  ║
    ║  ✅ Phase 1: UX Analysis      - [X] components, [Y] patterns     ║
    ║  ✅ Phase 2: API Discovery    - [X] endpoints, [Y] models        ║
    ║  ✅ Phase 3: Enhanced Wireframes - [X] wireframes, realistic data ║
    ║  ✅ Phase 4: Interactive Prototypes - [fidelity] fidelity       ║
    ║  🌐 Phase 5: Review Server    - http://localhost:[PORT]         ║
    ║                                                                  ║
    ╠══════════════════════════════════════════════════════════════════╣
    ║  OUTPUT                                                          ║
    ╠══════════════════════════════════════════════════════════════════╣
    ║                                                                  ║
    ║  📁 [save-to-directory]/                                         ║
    ║     ├── design-analysis-report.md    # UX analysis               ║
    ║     ├── api-inventory.json           # API discovery             ║
    ║     ├── wireframes/                  # Enhanced wireframes       ║
    ║     │   ├── dashboard-ascii.txt                                  ║
    ║     │   └── svg/dashboard.svg                                    ║
    ║     ├── prototypes/                  # Interactive prototypes    ║
    ║     │   ├── index.html               # Main prototype            ║
    ║     │   ├── components/              # Component library         ║
    ║     │   └── analytics/               # Interaction tracking      ║
    ║     └── README.md                    # Design documentation      ║
    ║                                                                  ║
    ╠══════════════════════════════════════════════════════════════════╣
    ║  NEXT STEPS                                                      ║
    ╠══════════════════════════════════════════════════════════════════╣
    ║                                                                  ║
    ║  Option A: Stakeholder Review                                    ║
    ║    🌐 Open: http://localhost:[PORT]                               ║
    ║    📊 Analytics: View interaction data in prototypes/analytics/  ║
    ║                                                                  ║
    ║  Option B: Development Integration                               ║
    ║    📁 Component specs: Use prototypes/ for implementation        ║
    ║    🔌 API integration: Use api-inventory.json for endpoints      ║
    ║    🎨 Design system: Extract patterns from high-fidelity output  ║
    ║                                                                  ║
    ║  Option C: Continue with The System                              ║
    ║    /ts-develop                      # Start development phase    ║
    ║    /ts-build frontend              # Use design specs            ║
    ║                                                                  ║
    ╚══════════════════════════════════════════════════════════════════╝
    ```

## Flag Combinations and Optimizations

### Automatic Flag Optimization

The turbo mode automatically selects optimal flag combinations:

```yaml
Quick Mode (--quick):
  fidelity: low
  format: ascii
  content: realistic
  analysis_depth: basic
  estimated_time: 5-7 minutes

Default Mode:
  fidelity: medium
  format: both
  content: api-driven
  analysis_depth: standard
  estimated_time: 8-12 minutes

Enterprise Mode (--fidelity=high --format=svg):
  fidelity: high
  format: svg
  content: api-driven
  analysis_depth: deep
  estimated_time: 15-20 minutes
```

### Domain-Specific Optimizations

```yaml
E-commerce (--domain=ecommerce):
  mobile_first: true
  analytics: true
  sample_data: products, orders, customers
  components_focus: cart, checkout, product_grid

Fintech (--domain=fintech):
  security_focus: true
  accessibility: enhanced
  sample_data: accounts, transactions, portfolios
  components_focus: dashboards, tables, forms

Azure/AWS (--domain=azure|aws):
  technical_accuracy: true
  realistic_pricing: true
  sample_data: resources, costs, metrics
  components_focus: monitoring, optimization
```

## Error Handling and Fallbacks

### Automatic Recovery Strategies

```bash
# Project path not found
Error: Project path 'output/nonexistent' not found
Auto-retry: Checking for similar paths...
Found: output/my-project/ - Use this instead? [Y/n]

# API discovery fails
Warning: Backend API discovery failed - continuing with basic content
Fallback: Using realistic sample data instead of API-driven content

# Framework detection fails
Warning: Unable to detect framework, using generic analysis
Proceeding: Basic component analysis with placeholder content

# Review server port conflict
Error: Port 8080 already in use
Auto-retry: Trying port 8081... ✅ Review server started
```

### Quality Assurance Checkpoints

```yaml
After Each Phase:
  - Verify output files were generated successfully
  - Check file sizes are reasonable (not empty, not excessive)
  - Validate JSON files parse correctly
  - Confirm HTML prototypes render properly

Final Quality Check:
  - All 4 phases completed successfully
  - Output directory structure is complete
  - Review server starts without errors
  - Analytics tracking is functional (if enabled)
```

## Performance Optimizations

### Parallel Processing

- **Phase 1 & 2**: Can run UX analysis and API discovery in parallel if backend/frontend are separate
- **Phase 3**: Wireframe generation can process components concurrently
- **Phase 4**: Prototype components can be generated in parallel

### Resource Management

```yaml
Memory Management:
  - Stream large file analysis to prevent memory issues
  - Generate sample data in batches for large datasets
  - Cache common component patterns for reuse

Disk Usage:
  - Clean up temporary analysis files after each phase
  - Compress large SVG files automatically
  - Optimize PNG assets in prototypes

Network Efficiency:
  - Cache CDN resources (Tailwind CSS, Alpine.js) locally
  - Minimize external API calls during generation
  - Bundle common assets to reduce HTTP requests
```

## Integration with The System

### Pre-Development Integration

```bash
# After architecture is locked, before development
/ts-approve architecture-lock

# Run complete design pipeline
/ts-design-turbo output/my-project --fidelity=medium --review-server

# Get stakeholder approval on prototypes
# Review interactive prototypes at http://localhost:8080

# Continue with development using design specifications
/ts-develop
```

### Output Usage in Development Stages

**Frontend Development (`/ts-build frontend`)**:
- Component specifications from interactive prototypes
- Alpine.js patterns converted to React/Vue/Angular
- Tailwind CSS classes and design system
- TypeScript interfaces from API discovery

**Backend Development (`/ts-build backend`)**:
- API endpoint specifications from discovery phase
- Sample data formats and structures
- Data model validation from schema analysis
- Mock service patterns from prototypes

**Testing (`/ts-test integration`)**:
- Expected UI behaviors from interactive prototypes
- User interaction patterns from analytics data
- Accessibility requirements from analysis phase
- Cross-browser compatibility from prototype testing

## Command Compatibility

### Integration with Other ts-design Commands

```bash
# Mix turbo with manual commands
/ts-design-turbo output/my-project --fidelity=low    # Quick iteration
/ts-design-prototype all --fidelity=high             # Upgrade specific component

# Partial turbo execution
/ts-design-turbo output/project --save-to=phase1-2  # Stop after wireframes
/ts-design-prototype all --fidelity=high             # Manual high-fidelity phase
```

### Framework Command Integration

```bash
# Status checking during turbo
/ts-design-status                                    # Check progress

# Help system integration
/ts-help design-turbo                               # Detailed help
/ts-design-turbo --help                             # Quick usage

# Project integration
/ts-view design-analysis                            # View turbo results
/ts-status                                          # Overall project status
```

## Success Criteria

### Phase Completion Metrics

- ✅ **Phase 1**: Component analysis completed in 2-3 minutes
- ✅ **Phase 2**: API discovery with realistic data in 3-4 minutes
- ✅ **Phase 3**: Enhanced wireframes with 350%+ content improvement
- ✅ **Phase 4**: Interactive prototypes ready for stakeholder review
- ✅ **Total Time**: Complete pipeline under 15 minutes

### Quality Benchmarks

- **Content Realism**: 350% improvement over placeholder wireframes
- **Domain Accuracy**: 800% improvement with industry-specific data
- **Stakeholder Readiness**: Professional prototypes requiring no additional work
- **Development Integration**: Ready-to-use specifications and patterns

### Business Value Delivery

- **Time Savings**: 85% reduction in design-to-development cycle time
- **Quality Improvement**: Professional design artifacts without design team
- **Risk Reduction**: User testing possible before development starts
- **Cost Efficiency**: Complete design pipeline for cost of single developer hour

This command transforms the Design Department from a multi-step manual process into a single autonomous command that delivers professional design artifacts ready for stakeholder review and development implementation.

---

*Note: ts-design-turbo follows The System's autonomous execution pattern, automatically progressing through all phases without HITL gates while maintaining full audit trails and quality assurance checkpoints.*