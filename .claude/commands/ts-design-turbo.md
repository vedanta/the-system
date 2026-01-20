# Design Department Turbo Mode: $ARGUMENTS

**Prototype-First Design Pipeline** - Create interactive prototypes in minutes, with optional comprehensive analysis.

## Usage

```bash
# Default: Prototype-first (3-4 minutes)
/ts-design-turbo [project-path] [--fidelity=medium]

# With optional analysis phases
/ts-design-turbo [project-path] --ux-analysis --api-discovery
/ts-design-turbo [project-path] --wireframes --docs
/ts-design-turbo [project-path] --all                    # Complete pipeline (12 min)

# Quality and presentation options
/ts-design-turbo [project-path] --fidelity=high --review-server
/ts-design-turbo [project-path] --domain=fintech --mobile
```

## Purpose

**Prototype-first approach**: Get interactive demos quickly, then optionally add comprehensive analysis. Default mode delivers 80% of the value in 25% of the time by focusing on what stakeholders actually want to see - working prototypes.

## New Architecture

### **Default Mode: Prototype-Only** ⚡ (3-4 minutes)
- **Quick project scan** (30 seconds)
- **Generate realistic sample data** (1 minute)
- **Create interactive prototypes** (2-3 minutes)
- **Package with simple README** (30 seconds)

### **Optional Phases with Switches** 🎛️
- **`--ux-analysis`**: Add comprehensive UX audit (+2-3 minutes)
- **`--api-discovery`**: Add complete API documentation (+3-4 minutes)
- **`--wireframes`**: Add enhanced wireframes with realistic content (+2-3 minutes)
- **`--docs`**: Add comprehensive documentation and specifications
- **`--all`**: Full 4-phase pipeline (current behavior, 12 minutes)

## Arguments

### Core Arguments
- **project-path**: Path to project directory (defaults to current directory)
- **--fidelity**: Prototype quality - `low`, `medium` (default), `high`
- **--domain**: Domain context - `fintech`, `ecommerce`, `healthcare`, `azure`, `aws`, `education`

### Optional Phase Switches
- **--ux-analysis**: Include comprehensive UX audit and accessibility analysis
- **--api-discovery**: Include complete API documentation and sample data generation
- **--wireframes**: Include enhanced wireframes with realistic content
- **--docs**: Include comprehensive documentation and component specifications
- **--all**: Include all phases (equivalent to --ux-analysis --api-discovery --wireframes --docs)

### Presentation Options
- **--review-server**: Start review server for stakeholder presentations
- **--mobile**: Generate mobile-optimized outputs (375px width)
- **--desktop**: Generate desktop outputs (1200px width, default)
- **--tablet**: Generate tablet outputs (768px width)
- **--analytics**: Enable interaction analytics and behavior tracking
- **--public**: Make review server accessible from network (requires --review-server)
- **--port**: Custom port for review server (default: 8080)

### Output Options
- **--save-to**: Custom output directory for all design artifacts
- **--format**: Wireframe format - `ascii`, `svg`, `both` (only applies with --wireframes)
- **--content**: Content strategy - `realistic`, `api-driven` (default)

### Development Handoff Options ✨ **OPT-IN ONLY**
- **--handoff**: Add development handoff package - `minimal`, `detailed`, `comprehensive` (none by default)
- **--handoff-format**: Framework targeting - `react`, `vue`, `angular`, `generic` (default)

**Note:** Default mode generates prototypes only. Handoff packages are opt-in to preserve rapid iteration speed.

## Examples

### **Rapid Prototyping** (90% of usage)

```bash
# Quick stakeholder demo (DEFAULT) - 3-4 minutes
/ts-design-turbo input/my-app
# → Prototypes only, pure speed

# High-fidelity demo for investors - 3-4 minutes
/ts-design-turbo input/startup-app --fidelity=high --review-server
# → Beautiful prototypes + review server

# Mobile-optimized demo - 3-4 minutes
/ts-design-turbo input/mobile-app --mobile --domain=ecommerce
# → Mobile-first responsive prototypes
```

### **Development Handoff** (10% of usage - Opt-In)

```bash
# Prototypes + minimal dev guidance - 4-5 minutes
/ts-design-turbo input/production-app --handoff=minimal
# → Prototypes + basic component specs and design tokens

# Prototypes + comprehensive handoff - 6-8 minutes
/ts-design-turbo input/production-app --handoff=detailed
# → Prototypes + full component specs, APIs, TypeScript interfaces

# Framework-specific handoff - 6-8 minutes
/ts-design-turbo input/react-app --handoff=detailed --handoff-format=react
# → Prototypes + React-optimized development package

# Enterprise comprehensive package - 8-10 minutes
/ts-design-turbo input/enterprise-app --handoff=comprehensive
# → Prototypes + complete specifications, testing strategy, performance guide

# Complete design + development package - 12-15 minutes
/ts-design-turbo input/enterprise-app --all --handoff=comprehensive
# → Full analysis pipeline + enterprise handoff documentation
```

### **Custom Combinations**

```bash
# Design presentation package
/ts-design-turbo input/fintech-app --wireframes --fidelity=high --review-server

# Mobile-first with analytics
/ts-design-turbo input/mobile-app --mobile --analytics --review-server

# Enterprise with security focus
/ts-design-turbo input/bank-app --domain=fintech --ux-analysis --fidelity=high
```

## Process

### **Default Mode: Streamlined Prototype Creation**

**Implementation Note**: Progress must be shown in real-time to the user during execution. Do not use Task tool which hides progress. Execute phases directly with progress updates.

```
╔══════════════════════════════════════════════════════════════════╗
║  🎨 DESIGN TURBO MODE ACTIVATED                                  ║
╠══════════════════════════════════════════════════════════════════╣
║  Project: [PROJECT_NAME]                                         ║
║  Mode: Prototype-First (⚡ Fast Mode)                            ║
║  Fidelity: [low/medium/high]                                     ║
║  Domain: [domain-context]                                        ║
║  Timeline: 3-4 minutes → Interactive Demo                        ║
╚══════════════════════════════════════════════════════════════════╝
```

#### **Phase 0: Quick Project Scan** (30 seconds)
1. **Rapid Framework Detection**
   - Detect framework (React/Vue/Angular/FastAPI/Django)
   - Identify key UI patterns and components
   - Determine domain context if not specified

2. **Basic Sample Data Generation**
   - Generate 50+ realistic records based on domain
   - Create domain-appropriate entity types
   - Apply realistic data patterns and relationships

#### **Phase 1: Direct Prototype Creation** (2-3 minutes)
3. **Launch Enhanced Prototype Developer**
   ```
   Agent: prototype-developer
   Mode: prototype-first
   Input: {
     projectPath: [specified-path],
     quickScan: [phase-0-results],
     fidelity: [low/medium/high],
     domain: [fintech/ecommerce/etc],
     sampleData: [generated-realistic-data],
     standalone: true  # No dependencies on other phases
   }
   ```

4. **Generate Interactive Prototypes**
   - Create 3-5 key interface prototypes with Alpine.js + Tailwind CSS
   - Apply domain-appropriate professional styling
   - Integrate realistic sample data throughout
   - Implement working interactions (filtering, sorting, forms)
   - Generate component library and documentation

   ```
   [Phase 1] ████████████████████ COMPLETE (2-3 min)
   🎯 Created: 5 interactive prototypes, professional styling, realistic data
   ```

#### **Phase 2: Tiered Handoff Package Generation** ✨ **NEW**

**Default: Minimal Handoff** (+30 seconds)
5. **Basic Component List**
   - Essential component names and purposes
   - Key props for major components
   - Basic styling patterns

6. **Core Design Tokens**
   - Primary colors and typography
   - Essential spacing values
   - CSS custom properties for consistency

**Enhanced: Detailed Handoff** (`--handoff=detailed`) (+3-4 minutes)
5. **Comprehensive Component Specifications**
   - Extract component patterns from prototypes
   - Document props, states, and interactions
   - Create reusable component library specs

6. **Complete Design System Export**
   - Extract design tokens (colors, typography, spacing)
   - Generate CSS custom properties and Tailwind config
   - Document responsive breakpoints and layout patterns

7. **API Integration Requirements**
   - Analyze prototype data dependencies
   - Create TypeScript interfaces for data models
   - Document required endpoints and transformations

8. **Implementation Guide**
   - Framework-specific setup instructions
   - Recommended project architecture
   - State management and routing patterns

**Comprehensive: Full Handoff** (`--handoff=comprehensive`) (+5-6 minutes)
- All detailed handoff content PLUS:
- Routing structure documentation
- Testing strategy and guidelines
- Performance optimization notes
- Accessibility compliance documentation

#### **Phase 3: Package and Document** (30 seconds)
9. **Generate Documentation**
   - Create README.md with quick start guide
   - Generate comprehensive handoff documentation
   - Package for immediate development and stakeholder review

   ```
   [Phase 3] ████████████████████ COMPLETE (30 sec)
   📁 Packaged: Documentation, handoff materials, project overview
   ```

## Execution Implementation

### **Step-by-Step Progress Tracking**

When executing this command, show real-time progress:

```bash
╔══════════════════════════════════════════════════════════════════╗
║  🎨 DESIGN TURBO MODE ACTIVATED                                  ║
║  Project: [project-name]                                         ║
║  Mode: Prototype-First + Minimal Handoff ⚡                      ║
║  Duration: 3-4 minutes → Interactive Demo + Dev Guidance        ║
╚══════════════════════════════════════════════════════════════════╝

[Phase 0] 🔍 Quick Project Scan...
[Phase 0] ▓▓▓▓▓▓▓▓▓▓ COMPLETE (30 sec)
✅ Framework detected, domain identified, sample data ready

[Phase 1] 🎨 Creating Interactive Prototypes...
[Phase 1] ▓▓▓▓▓▓▓░░░ 70% - Dashboard prototype complete
[Phase 1] ▓▓▓▓▓▓▓▓░░ 90% - All prototypes generated
[Phase 1] ▓▓▓▓▓▓▓▓▓▓ COMPLETE (2-3 min)
✅ 5 interactive prototypes with professional styling

[Phase 2] 📋 Generating Handoff Package...
[Phase 2] ▓▓▓▓▓▓▓▓▓▓ COMPLETE (30 sec)
✅ Component specs, design tokens, TypeScript interfaces ready

[Final] 📦 Packaging Complete!
✅ Prototypes ready for demo: output/[project]-design/prototypes/
✅ Development handoff: output/[project]-design/handoff/
✅ Total time: 3:45 minutes
```

### **Implementation Rules**

1. **Never use Task tool for ts-design-turbo execution** - it hides progress
2. **Show progress bars and phase completion** - keep user engaged
3. **Display incremental results** - "Dashboard complete", "Components extracted", etc.
4. **Time each phase** - show actual vs. estimated duration
5. **Clear success indicators** - checkmarks, file counts, next steps

### **With Optional Switches: Enhanced Pipeline**

When switches are used, additional phases run after the prototype creation:

#### **--ux-analysis Switch** (+2-3 minutes)
- Launch UX analyzer for comprehensive audit
- Generate accessibility compliance report
- Create component inventory and usability analysis
- Add ux-analysis/ directory to output

#### **--api-discovery Switch** (+3-4 minutes)
- Launch API discovery specialist
- Generate complete endpoint documentation
- Create TypeScript interfaces and schemas
- Add api-discovery/ directory to output

#### **--wireframes Switch** (+2-3 minutes)
- Launch wireframe generator using prototype data
- Generate ASCII and SVG wireframes with realistic content
- Create component specifications and layout patterns
- Add wireframes/ directory to output

#### **--docs Switch** (+1 minute)
- Generate comprehensive documentation
- Create MANIFEST.md with complete file inventory
- Add integration guides and implementation specs

## Output Structure

### **Default Mode Output** ✨ **Prototype-Only**

```
output/project-name-design/
├── prototypes/                 # Interactive demos
│   ├── index.html              # Navigation hub
│   ├── dashboard.html          # Main interfaces (3-5 files)
│   ├── data/mock-data.js       # Realistic sample data
│   └── README.md               # Quick start guide
├── README.md                   # Simple project overview
└── .turbo-mode-log             # Execution log
```

### **With Handoff Options**

**Minimal Handoff (`--handoff=minimal`):**
```
output/project-name-design/
├── prototypes/                 # Interactive demos
├── handoff/                    # ✨ Basic development guidance
│   ├── components.md           # Essential component specs
│   ├── design-tokens.css       # Core CSS custom properties
│   ├── interfaces.ts           # Basic TypeScript types
│   └── api-endpoints.md        # Critical API endpoints
├── README.md                   # Enhanced project overview
└── .turbo-mode-log
```

**Detailed Handoff (`--handoff=detailed`):**
```
output/project-name-design/
├── prototypes/                 # Interactive demos
├── handoff/                    # ✨ Comprehensive development package
│   ├── component-specs.md      # Detailed component documentation
│   ├── design-system.json      # Complete design tokens
│   ├── api-requirements.md     # Backend integration specs
│   ├── data-models.ts          # Full TypeScript interfaces
│   └── implementation-guide.md # Framework setup guides
├── assets/                     # ✨ Extracted design assets
│   ├── icons/                  # SVG icons
│   ├── design-tokens.css       # CSS custom properties
│   └── component-library.css   # Reusable styles
├── README.md                   # Enhanced with handoff workflow
└── .turbo-mode-log
```

**Comprehensive Handoff (`--handoff=comprehensive`):**
```
output/project-name-design/
├── prototypes/                 # Interactive demos
├── handoff/                    # ✨ Complete development specifications
│   ├── component-specs.md      # Detailed component documentation
│   ├── design-system.json      # Complete design tokens
│   ├── api-requirements.md     # Backend integration specs
│   ├── data-models.ts          # TypeScript interfaces
│   ├── routing-structure.md    # Navigation architecture
│   ├── implementation-guide.md # Comprehensive setup guide
│   ├── testing-strategy.md     # QA and testing guidelines
│   └── performance-guide.md    # Optimization recommendations
├── assets/                     # Complete design assets
├── README.md                   # Full documentation
└── .turbo-mode-log
```

### **With Optional Switches**
```
output/project-name-design/
├── ux-analysis/               # --ux-analysis
│   └── ux-analysis-report.md
├── api-discovery/             # --api-discovery
│   ├── api-inventory.json
│   ├── sample-data.json
│   └── ui-requirements.md
├── wireframes/                # --wireframes
│   ├── *-ascii.txt
│   └── *.svg
├── prototypes/                # Always included
│   ├── index.html
│   ├── dashboard.html
│   ├── data/mock-data.js
│   └── README.md
├── handoff/                   ✨ Only with --handoff switch
│   ├── component-specs.md
│   ├── design-system.json
│   ├── api-requirements.md
│   ├── data-models.ts
│   ├── routing-structure.md
│   └── implementation-guide.md
├── assets/                    ✨ Only with --handoff switch
│   ├── icons/
│   ├── design-tokens.css
│   └── component-library.css
├── README.md                  # Enhanced with switch content
├── MANIFEST.md                # --docs or --all
└── .turbo-mode-log
```

## Performance Targets

### **Default Mode** ⚡ **Pure Speed**
- **Duration:** 3-4 minutes (prototypes only)
- **Output:** Interactive prototypes + simple README
- **Value:** 90% of stakeholder needs met with maximum speed

### **With Optional Switches** 🎛️
- **--handoff=minimal:** +30 seconds (4-5 minutes total)
- **--handoff=detailed:** +3-4 minutes (7-8 minutes total)
- **--handoff=comprehensive:** +5-6 minutes (9-10 minutes total)
- **Analysis switches:** +2-4 minutes each (--ux-analysis, --api-discovery, etc.)
- **--all flag:** 12-15 minutes (full analysis pipeline)

### **Quality Standards Maintained**
- **Professional styling:** Fintech/domain-appropriate design
- **Realistic data:** Domain-accurate sample content
- **Interactive features:** Working forms, charts, navigation
- **Accessibility:** WCAG 2.1 AA compliance
- **Documentation:** Essential setup and usage guides

## Flag Combinations and Optimizations

### **Automatic Mode Selection**

```yaml
Default Mode (no switches):
  phases: quick-scan + prototype-only
  duration: 3-4 minutes
  output: prototypes/ only
  use_case: stakeholder_demos, rapid_iteration

Developer Mode (--api-discovery --docs):
  phases: quick-scan + prototype + api + docs
  duration: 6-8 minutes
  output: prototypes/ + api-discovery/ + enhanced docs
  use_case: development_handoff

Design Mode (--wireframes --ux-analysis):
  phases: quick-scan + prototype + wireframes + ux
  duration: 7-9 minutes
  output: prototypes/ + wireframes/ + ux-analysis/
  use_case: design_iteration, stakeholder_presentations

Complete Mode (--all):
  phases: all four phases (current behavior)
  duration: 12 minutes
  output: complete design package
  use_case: comprehensive_analysis, enterprise_projects
```

### **Fidelity Optimizations**

```yaml
Low Fidelity (--fidelity=low):
  duration: 2-3 minutes
  styling: basic_tailwind, minimal_interactions
  use_case: rapid_prototyping, concept_validation

Medium Fidelity (default):
  duration: 3-4 minutes
  styling: professional_design, working_interactions
  use_case: stakeholder_presentations, demos

High Fidelity (--fidelity=high):
  duration: 4-6 minutes
  styling: pixel_perfect, advanced_interactions
  use_case: investor_presentations, final_designs
```

## Migration and Backward Compatibility

### **Smooth Transition**
- **Current behavior preserved:** `--all` flag maintains 12-minute full pipeline
- **New default is opt-in:** Existing scripts continue working
- **Clear upgrade path:** Add switches as needed for more analysis

### **Migration Commands**
```bash
# Current usage (still works)
/ts-design-turbo input/my-project --all
# → Same 12-minute full pipeline as before

# Recommended new usage
/ts-design-turbo input/my-project
# → Fast 3-4 minute prototype-first approach

# Gradual adoption
/ts-design-turbo input/my-project --api-discovery    # Add API docs
/ts-design-turbo input/my-project --ux-analysis      # Add UX audit
/ts-design-turbo input/my-project --all             # Full analysis
```

## Success Metrics

### **Performance Improvements**
- ✅ **Default duration:** 3-4 minutes (75% faster)
- ✅ **Time to demo:** Under 5 minutes including setup
- ✅ **Stakeholder value:** 80% delivered in 25% of time

### **Quality Maintained**
- ✅ **Professional presentation:** Stakeholder-ready prototypes
- ✅ **Realistic content:** Domain-accurate sample data
- ✅ **Interactive features:** Working forms, charts, navigation
- ✅ **Documentation:** Clear setup and usage guides

### **Adoption Targets**
- **80%** of usage: Default prototype-first mode
- **15%** of usage: Single switch additions (--api-discovery, etc)
- **5%** of usage: Full analysis mode (--all flag)

## Error Handling and Fallbacks

### **Graceful Degradation**
```bash
# Framework detection fails
Warning: Unable to detect framework, using generic patterns
Proceeding: Generate prototypes with standard web components

# Domain detection fails
Warning: Domain not specified, using generic business patterns
Proceeding: Professional styling without domain-specific optimizations

# Sample data generation fails
Warning: Unable to generate realistic data, using placeholder content
Proceeding: Functional prototypes with generic sample data
```

### **Recovery Strategies**
- **Lightweight scanning:** Minimal requirements to proceed
- **Fallback content:** Always generate something usable
- **Progressive enhancement:** Add more sophistication as detection improves

---

## Help and Quick Reference

### **Quick Start**
```bash
/ts-design-turbo --help                    # Show this help
/ts-design-turbo input/my-project          # Default: prototype in 3-4 min
/ts-design-turbo input/my-project --all    # Full pipeline in 12 min
```

### **Common Patterns**
```bash
# Stakeholder demo
/ts-design-turbo input/app --fidelity=high --review-server

# Developer handoff
/ts-design-turbo input/app --api-discovery --docs

# Design iteration
/ts-design-turbo input/app --wireframes --ux-analysis
```

This prototype-first approach transforms Design Turbo Mode from a comprehensive but slow analysis tool into a **fast, practical utility** that delivers immediate stakeholder value while preserving the option for deep analysis when needed.

---

*Note: The prototype-first design prioritizes rapid stakeholder value delivery while maintaining professional quality and providing optional comprehensive analysis through switches.*