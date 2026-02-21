# Design Department Turbo Mode: $ARGUMENTS

**Prototype-First Design Pipeline** - Create interactive prototypes in minutes, with optional comprehensive analysis.

## Usage

```bash
# Default: Prototype-first (3-4 minutes)
/ts-design-turbo [project-path] [--fidelity=medium]

# Design spec file input ✨
/ts-design-turbo --spec=<design-spec-file> [--fidelity=medium]
/ts-design-turbo [project-name] --spec=<design-spec-file> [flags]

# NEW: Single-command app requirements → prototypes pipeline 🚀
/ts-design-turbo --app-spec=<app-requirements-file> [--save-spec=<output-design-spec>] [flags]

# App requirements to design spec transformation only 🔄
/ts-design-turbo --in-app-spec=<app-requirements-file> --out-design-spec=<output-design-spec> [options]

# With optional analysis phases
/ts-design-turbo [project-path] --ux-analysis --api-discovery
/ts-design-turbo --spec=specs/app.md --ux-analysis --api-discovery
/ts-design-turbo --app-spec=requirements/app.md --ux-analysis --api-discovery
/ts-design-turbo [project-path] --wireframes --docs
/ts-design-turbo --spec=input/dashboard.json --all      # Complete pipeline (12 min)

# Quality and presentation options
/ts-design-turbo [project-path] --fidelity=high --review-server
/ts-design-turbo --spec=specs/mobile.yaml --domain=fintech --mobile
/ts-design-turbo --app-spec=requirements/mobile.md --fidelity=high --mobile
```

## Purpose

**Complete idea-to-prototype pipeline**: Transform app requirements directly into interactive prototypes with auto-generated design specifications. The single-command `--app-spec=` mode delivers end-to-end value from requirements to working demos, while traditional modes offer specialized workflows for specific needs.

**Key Benefits:**
- 🚀 **Single Command**: App requirements → design spec → prototypes in 5-6 minutes
- ✨ **Intelligent Analysis**: Auto-detects domains, generates design systems, maps features to UI
- 🔄 **Flexible Workflows**: Choose between complete pipeline or specialized transformation/prototyping
- 📋 **Full Traceability**: Generated design specs, transformation logs, requirements mapping

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
- **--spec**: Design specification file - `.txt`, `.md`, `.json`, `.yaml` formats supported ✨
- **--app-spec**: App requirements file for single-command pipeline - `.txt`, `.md`, `.json`, `.yaml` formats 🚀 **NEW**
- **--save-spec**: Save intermediate design spec during app pipeline - optional file path 🚀 **NEW**
- **--in-app-spec**: App requirements/PRD file for transformation only - `.txt`, `.md`, `.json`, `.yaml` formats ✨
- **--out-design-spec**: Output design specification file path (transformation only) ✨
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

### Single-Command Pipeline Options 🚀 **NEW**
- **--save-spec-format**: Format for saved intermediate spec - `json` (default), `yaml`, `md`
- **--skip-spec-save**: Don't save intermediate design spec (saves time)
- **--spec-metadata**: Include transformation metadata in saved spec (default: true)

### Transformation Options 🔄
- **--out-format**: Force output format - `json`, `yaml`, `md` (overrides file extension)
- **--design-fidelity**: Spec complexity - `low`, `medium` (default), `high`
- **--include-sample-data**: Generate sample data definitions in spec
- **--include-user-flows**: Add user flow documentation to spec
- **--target-device**: Device targeting - `mobile`, `desktop`, `both` (default)
- **--style-theme**: Visual theme - `minimal`, `corporate`, `modern`, `playful`

**Note:** Default mode generates prototypes only. Handoff packages are opt-in to preserve rapid iteration speed.

## Examples

### **Single-Command Pipeline** 🚀 **NEW** (Recommended - 80% of usage)

```bash
# Simplest usage: App requirements → prototypes (5-6 minutes)
/ts-design-turbo --app-spec=requirements/banking-app.md
# → Auto-generates design spec → creates prototypes

# High-fidelity with review server (5-6 minutes)
/ts-design-turbo --app-spec=requirements/startup.md --fidelity=high --review-server
# → Requirements → design spec → beautiful prototypes + review server

# Mobile-focused with saved design spec (5-6 minutes)
/ts-design-turbo --app-spec=requirements/mobile-app.json --mobile --save-spec=specs/mobile-design.json
# → Mobile-optimized pipeline + reusable design spec

# Complete analysis pipeline (8-10 minutes)
/ts-design-turbo --app-spec=requirements/enterprise.md --all --handoff=comprehensive --save-spec=specs/enterprise.yaml
# → Full pipeline: requirements → spec → prototypes → comprehensive handoff
```

### **Rapid Prototyping** (Traditional workflow - 15% of usage)

```bash
# Quick stakeholder demo (DEFAULT) - 3-4 minutes
/ts-design-turbo input/my-app
# → Prototypes only, pure speed

# Spec-driven prototyping ✨ - 3-4 minutes
/ts-design-turbo --spec=specs/dashboard.md
# → Prototypes matching exact spec requirements

# High-fidelity demo for investors - 3-4 minutes
/ts-design-turbo input/startup-app --fidelity=high --review-server
/ts-design-turbo --spec=input/pitch-deck.json --fidelity=high --review-server
# → Beautiful prototypes + review server

# Mobile-optimized demo - 3-4 minutes
/ts-design-turbo input/mobile-app --mobile --domain=ecommerce
/ts-design-turbo --spec=specs/mobile-banking.yaml --mobile
# → Mobile-first responsive prototypes
```

### **Development Handoff** (10% of usage - Opt-In)

```bash
# Prototypes + minimal dev guidance - 4-5 minutes
/ts-design-turbo input/production-app --handoff=minimal
/ts-design-turbo --spec=specs/api-dashboard.md --handoff=minimal
# → Prototypes + basic component specs and design tokens

# Prototypes + comprehensive handoff - 6-8 minutes
/ts-design-turbo input/production-app --handoff=detailed
/ts-design-turbo --spec=specs/design-system.json --handoff=detailed
# → Prototypes + full component specs, APIs, TypeScript interfaces

# Framework-specific handoff - 6-8 minutes
/ts-design-turbo input/react-app --handoff=detailed --handoff-format=react
/ts-design-turbo --spec=input/react-components.yaml --handoff=detailed --handoff-format=react
# → Prototypes + React-optimized development package

# Enterprise comprehensive package - 8-10 minutes
/ts-design-turbo input/enterprise-app --handoff=comprehensive
/ts-design-turbo --spec=specs/enterprise-portal.json --handoff=comprehensive
# → Prototypes + complete specifications, testing strategy, performance guide

# Complete design + development package - 12-15 minutes
/ts-design-turbo input/enterprise-app --all --handoff=comprehensive
/ts-design-turbo --spec=specs/complete-system.yaml --all --handoff=comprehensive
# → Full analysis pipeline + enterprise handoff documentation
```

### **App Requirements → Design Spec Transformation** 🔄 **NEW**

```bash
# Basic transformation: App requirements → Design spec
/ts-design-turbo --in-app-spec=requirements/banking-app.md --out-design-spec=specs/banking-ui.json

# High-fidelity spec with sample data
/ts-design-turbo --in-app-spec=docs/ecommerce-prd.yaml --out-design-spec=specs/store-design.yaml --design-fidelity=high --include-sample-data

# Mobile-focused transformation
/ts-design-turbo --in-app-spec=requirements/mobile-app.txt --out-design-spec=specs/mobile-ui.md --target-device=mobile --style-theme=modern

# Enterprise transformation with user flows
/ts-design-turbo --in-app-spec=requirements/enterprise.md --out-design-spec=specs/enterprise-design.json --include-user-flows --style-theme=corporate

# Two-step workflow: Requirements → Design Spec → Prototypes (legacy)
/ts-design-turbo --in-app-spec=requirements/app.md --out-design-spec=specs/design.json --include-sample-data
/ts-design-turbo --spec=specs/design.json --fidelity=high --review-server --handoff=detailed

# NEW: Single-command equivalent 🚀
/ts-design-turbo --app-spec=requirements/app.md --fidelity=high --review-server --handoff=detailed --save-spec=specs/design.json --include-sample-data
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

### **Mode Detection & Routing**

The command automatically detects the mode based on provided flags:

1. **Single-Command Pipeline** 🚀: `--app-spec=` present
   - App requirements → auto-generated design spec → prototypes
   - Optionally save intermediate design spec with `--save-spec=`
   - Complete end-to-end workflow in one command

2. **Transformation Mode** 🔄: `--in-app-spec=` and `--out-design-spec=` present
   - Convert app requirements → design specifications only
   - Output structured design spec file
   - No prototype generation

3. **Spec-Driven Mode** ✨: `--spec=` present
   - Generate prototypes from existing design spec
   - Enhanced with spec requirements
   - Standard prototype pipeline

4. **Default Mode** ⚡: Standard project-path analysis
   - Traditional prototype generation
   - Project scanning and analysis
   - Domain-based sample data

### **Single-Command Pipeline: App Requirements → Prototypes** 🚀 **NEW PRIMARY MODE**

**Implementation Note**: Show complete pipeline progress in real-time. Do not use Task tool which hides progress.

```
╔══════════════════════════════════════════════════════════════════╗
║  🚀 APP-TO-PROTOTYPE PIPELINE ACTIVATED                         ║
╠══════════════════════════════════════════════════════════════════╣
║  Input: [APP_SPEC_FILE]                                          ║
║  Pipeline: App Spec → Design Spec → Prototypes                  ║
║  Duration: 5-6 minutes → Complete prototype package             ║
║  Save Spec: [SAVE_SPEC_PATH] (optional)                         ║
╚══════════════════════════════════════════════════════════════════╝
```

#### **Phase 0: App Requirements Analysis** (45 seconds)
1. **Parse App Specification**
   - Read and validate app spec file format (.txt, .md, .json, .yaml)
   - Extract features, user stories, and business requirements
   - Identify user flows and navigation patterns
   - Parse embedded transformation preferences (JSON/YAML)

2. **Domain Intelligence Analysis**
   - Auto-detect domain context (fintech, ecommerce, healthcare, etc.)
   - Identify target devices and user personas
   - Classify technical requirements and integrations
   - Determine appropriate visual style themes

#### **Phase 1: In-Memory Design Spec Generation** (60 seconds)
3. **Screen & Component Mapping**
   - Map user flows to required screens/pages
   - Identify components needed for each feature
   - Determine navigation structure and hierarchy
   - Generate component specifications with props/states

4. **Visual Design System Creation**
   - Select domain-appropriate color palette
   - Define typography scale and font choices
   - Establish spacing system and layout patterns
   - Create component styling guidelines

   ```
   [Phase 1] ████████████████████ COMPLETE (60 sec)
   🎨 Generated: In-memory design specification ready for prototype creation
   ```

#### **Phase 2: Spec-Driven Prototype Creation** (3-4 minutes)
5. **Launch Enhanced Prototype Developer**
   ```
   Agent: prototype-developer
   Mode: app-spec-driven
   Input: {
     appSpec: [original-app-requirements],
     generatedDesignSpec: [in-memory-design-spec], 🚀 NEW
     fidelity: [low/medium/high],
     domain: [auto-detected-domain],
     sampleData: [app-requirements-driven-data],
     targetDevice: [mobile/desktop/both]
   }
   ```

6. **Generate App-Requirements-Driven Prototypes** ✨ **ENHANCED**
   - Create prototypes matching app requirements and generated design spec
   - Apply auto-generated colors, typography, and layout patterns
   - Use app-context realistic sample data throughout
   - Implement interactions derived from user flows
   - Generate component library matching requirements

   ```
   [Phase 2] ████████████████████ COMPLETE (3-4 min)
   🎯 Created: Complete prototypes directly from app requirements
   ```

#### **Phase 3: Optional Spec Saving & Documentation** (30 seconds)
7. **Save Intermediate Design Spec** (if `--save-spec=` provided)
   - Write generated design spec to specified file/format
   - Include transformation metadata and generation details
   - Create requirements-to-design mapping documentation
   - Add generation timestamp and source references

8. **Enhanced Documentation Generation**
   - Create README.md with full pipeline context
   - Document requirements → design → prototype decisions
   - Generate transformation log with all choices made

   ```
   [Phase 3] ████████████████████ COMPLETE (30 sec)
   📁 Packaged: Complete app-to-prototype pipeline results
   ```

### **Transformation Mode: App Requirements → Design Spec Only** 🔄

**Implementation Note**: Show transformation progress in real-time. Do not use Task tool which hides progress.

```
╔══════════════════════════════════════════════════════════════════╗
║  🔄 DESIGN TRANSFORMATION MODE ACTIVATED                        ║
╠══════════════════════════════════════════════════════════════════╣
║  Input: [APP_SPEC_FILE]                                          ║
║  Output: [DESIGN_SPEC_FILE]                                      ║
║  Format: [json/yaml/md]                                          ║
║  Duration: 2-3 minutes → Structured Design Spec                 ║
╚══════════════════════════════════════════════════════════════════╝
```

#### **Phase 0: App Requirements Analysis** (45 seconds)
1. **Parse App Specification**
   - Read and validate app spec file format (.txt, .md, .json, .yaml)
   - Extract features, user stories, and business requirements
   - Identify user flows and navigation patterns
   - Parse embedded transformation preferences (JSON/YAML)

2. **Domain Intelligence Analysis**
   - Auto-detect domain context (fintech, ecommerce, healthcare, etc.)
   - Identify target devices and user personas
   - Classify technical requirements and integrations
   - Determine appropriate visual style themes

#### **Phase 1: Design Requirements Generation** (60 seconds)
3. **Screen & Component Mapping**
   - Map user flows to required screens/pages
   - Identify components needed for each feature
   - Determine navigation structure and hierarchy
   - Generate component specifications with props/states

4. **Visual Design System Creation**
   - Select domain-appropriate color palette
   - Define typography scale and font choices
   - Establish spacing system and layout patterns
   - Create component styling guidelines

#### **Phase 2: Structured Spec Output** (30 seconds)
5. **Generate Design Specification**
   - Create structured spec in requested format (JSON/YAML/MD)
   - Include all visual design tokens and component specs
   - Add sample data structures matching app entities
   - Embed user flows and technical requirements

   ```
   [Phase 2] ████████████████████ COMPLETE (30 sec)
   📄 Generated: Structured design spec ready for prototype generation
   ```

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

#### **Phase 0: Input Analysis & Project Scan** ✨ **ENHANCED** (30 seconds)

**NEW: Spec File Processing** (if `--spec=` provided)
1. **Parse Design Specification**
   - Read and validate spec file format (.txt, .md, .json, .yaml)
   - Extract design requirements (colors, typography, components, screens)
   - Parse embedded flags from JSON/YAML files (override CLI flags)
   - Identify domain context from spec content

2. **Spec-Driven Configuration**
   - Apply spec-defined visual style (colors, fonts, layout patterns)
   - Configure component requirements from spec
   - Set domain context and target devices
   - Generate enhanced sample data matching spec entities

**Traditional Project Scan** (if project-path provided)
3. **Rapid Framework Detection**
   - Detect framework (React/Vue/Angular/FastAPI/Django)
   - Identify key UI patterns and components
   - Determine domain context if not specified

4. **Basic Sample Data Generation**
   - Generate 50+ realistic records based on domain/spec
   - Create domain-appropriate entity types
   - Apply realistic data patterns and relationships

#### **Phase 1: Direct Prototype Creation** (2-3 minutes)
3. **Launch Enhanced Prototype Developer**
   ```
   Agent: prototype-developer
   Mode: prototype-first
   Input: {
     projectPath: [specified-path],
     specFile: [parsed-spec-file], ✨ NEW
     specRequirements: [extracted-design-requirements], ✨ NEW
     quickScan: [phase-0-results],
     fidelity: [low/medium/high],
     domain: [fintech/ecommerce/etc],
     sampleData: [spec-driven-sample-data], ✨ ENHANCED
     standalone: true  # No dependencies on other phases
   }
   ```

4. **Generate Spec-Driven Interactive Prototypes** ✨ **ENHANCED**
   - Create prototypes matching spec screens/components (or 3-5 key interfaces if no spec)
   - Apply spec-defined colors, typography, and layout patterns
   - Use spec visual style or domain-appropriate professional styling
   - Integrate spec-driven realistic sample data throughout
   - Implement interactions defined in spec (or standard filtering, sorting, forms)
   - Generate component library matching spec requirements

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

**With Project Path:**
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

**With Spec File (`--spec=`):** ✨ **ENHANCED**
```
output/spec-name-design/
├── prototypes/                 # Spec-driven interactive demos
│   ├── index.html              # Navigation hub
│   ├── [screen-name].html      # One file per spec screen
│   ├── data/spec-data.js       # Sample data matching spec entities
│   ├── style/spec-theme.css    # Theme from spec colors/fonts
│   └── README.md               # Spec-aware quick start guide
├── spec-analysis/              # ✨ NEW: Spec analysis results
│   ├── parsed-spec.md          # Processed spec requirements
│   ├── design-tokens.json      # Extracted colors, fonts, spacing
│   └── component-specs.md      # Component requirements from spec
├── README.md                   # Enhanced with spec context
└── .turbo-mode-log             # Execution log with spec details
```

### **Single-Command Pipeline Output** 🚀 **NEW PRIMARY MODE**

**App Requirements → Prototypes (with optional spec saving):**
```
output/app-name-design/
├── prototypes/                 # App-driven interactive demos
│   ├── index.html              # Navigation hub
│   ├── [feature-screen].html   # Screens based on app requirements
│   ├── data/app-data.js        # Sample data matching app entities
│   ├── style/app-theme.css     # Theme from auto-generated design spec
│   └── README.md               # App-requirements-aware guide
├── generated-spec/             # ✨ Auto-generated design specification
│   ├── design-spec.json        # Complete design spec (always created)
│   ├── transformation-log.md   # Detailed analysis and decisions
│   ├── requirements-mapping.md # How app features mapped to design
│   └── component-specs.md      # Generated component specifications
├── saved-spec/                 # ✨ Only if --save-spec= provided
│   └── [saved-spec-filename]   # Copy of design spec in requested format
├── README.md                   # Enhanced with complete pipeline context
└── .design-pipeline-log        # Complete pipeline execution log
```

**Example with Saved Spec:**
```bash
/ts-design-turbo --app-spec=requirements/banking.md --save-spec=specs/banking-ui.json --handoff=detailed

# Creates:
output/banking-design/
├── prototypes/                 # Interactive banking prototypes
├── generated-spec/             # Auto-generated design analysis
├── handoff/                    # Development handoff materials
├── saved-spec/
│   └── banking-ui.json         # Reusable design spec
└── README.md                   # Complete pipeline documentation
```

### **Transformation Mode Output** 🔄

**App Requirements → Design Spec:**
```
[output-design-spec-file]       # Generated design specification
transformation-log.md           # ✨ Transformation analysis and decisions
```

**Example Outputs by Format:**

**JSON Output (`--out-design-spec=specs/app-ui.json`):**
```json
{
  "spec": {
    "name": "Generated from App Requirements",
    "domain": "auto_detected_domain",
    "screens": [...],
    "components": {...},
    "style": {...},
    "data_entities": [...]
  },
  "metadata": {
    "generated_from": "requirements/app.md",
    "generation_date": "2026-02-21T15:30:00Z",
    "transformation_settings": {...}
  }
}
```

**YAML Output (`--out-design-spec=specs/app-ui.yaml`):**
```yaml
spec:
  name: "Generated from App Requirements"
  domain: auto_detected_domain
  screens: [...]
  components: {...}
  style: {...}

metadata:
  generated_from: "requirements/app.md"
  generation_date: "2026-02-21T15:30:00Z"
```

**Markdown Output (`--out-design-spec=specs/app-ui.md`):**
```markdown
# Generated Design Specification

*Generated from: requirements/app.md*
*Date: February 21, 2026*

## Visual Style
- **Domain**: Auto-detected from requirements
- **Colors**: Domain-appropriate palette
- **Typography**: Professional hierarchy

## Screens
### [Screen Name]
- **Components**: [component list]
- **User Flow**: [primary flow]
```

### **With Handoff Options**

**Minimal Handoff (`--handoff=minimal`):**
```
output/project-name-design/
├── prototypes/                 # Interactive demos
├── handoff/                    # ✨ Basic development guidance
│   ├── components.md           # Essential component specs (spec-aware)
│   ├── design-tokens.css       # Core CSS from spec or generated
│   ├── interfaces.ts           # TypeScript types for spec entities
│   ├── api-endpoints.md        # API requirements from spec
│   └── spec-compliance.md      # ✨ NEW: How prototypes match spec
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
# NEW: Spec file not found ✨
Error: Design spec file not found: specs/missing.md
Fallback: Continue with project-path scanning if provided, or use current directory

# NEW: Invalid spec format ✨
Warning: Invalid JSON in spec file specs/app.json, using text content as description
Proceeding: Treat entire file content as plain text design description

# NEW: Empty or malformed spec ✨
Warning: Empty or invalid spec file specs/empty.yaml
Fallback: Use generic business patterns with specified domain context

# NEW: App spec transformation errors 🔄
Error: App specification file not found: requirements/missing.md
Action: Command exits with error message and usage help

Warning: Unable to detect domain from app spec requirements/generic.txt
Fallback: Use generic business domain with minimal styling assumptions

Warning: No clear user flows found in app spec requirements/features-only.md
Fallback: Generate basic CRUD flows based on identified features

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

# 🚀 RECOMMENDED: Single-command pipeline (5-6 min)
/ts-design-turbo --app-spec=requirements/app.md           # App requirements → prototypes
/ts-design-turbo --app-spec=requirements/app.md --save-spec=specs/design.json  # + save design spec

# Traditional modes
/ts-design-turbo input/my-project          # Project analysis → prototype (3-4 min)
/ts-design-turbo --spec=specs/app.md       # Design spec → prototype (3-4 min)
/ts-design-turbo --in-app-spec=requirements/app.md --out-design-spec=specs/design.json  # Transform only
```

### **Common Patterns**
```bash
# Stakeholder demo
/ts-design-turbo input/app --fidelity=high --review-server
/ts-design-turbo --spec=specs/demo.yaml --fidelity=high --review-server

# Developer handoff
/ts-design-turbo input/app --api-discovery --docs
/ts-design-turbo --spec=specs/api-spec.json --handoff=detailed

# Design iteration
/ts-design-turbo input/app --wireframes --ux-analysis
/ts-design-turbo --spec=specs/iteration-v2.md --wireframes --ux-analysis

# Quick prototyping from spec files ✨
/ts-design-turbo --spec=input/wireframes.txt              # Plain text spec
/ts-design-turbo --spec=specs/mobile-app.md --mobile      # Markdown spec
/ts-design-turbo --spec=designs/dashboard.json --all      # JSON with embedded flags

# Single-command app pipeline workflow 🚀 (RECOMMENDED)
/ts-design-turbo --app-spec=requirements/banking.md --fidelity=high --review-server
/ts-design-turbo --app-spec=requirements/ecommerce.json --save-spec=specs/ecommerce-design.yaml --all

# Legacy two-step transformation workflow 🔄
/ts-design-turbo --in-app-spec=requirements/banking.md --out-design-spec=specs/banking-ui.json
/ts-design-turbo --spec=specs/banking-ui.json --fidelity=high --review-server
```

---

## **Supported Spec File Formats** ✨ **NEW**

The `--spec=` flag accepts design specification files in multiple formats, similar to `/ts-turbo`'s `--idea=` feature:

### **1. Text Files (.txt)**
Plain text design descriptions:
```txt
Create a modern dashboard for a task management app. Include:
- Clean sidebar navigation with project lists
- Main content area with task cards in columns (To Do, In Progress, Done)
- Top header with user profile and search
- Dark mode support with professional color scheme
- Mobile responsive design
```

### **2. Markdown Files (.md)**
Structured design specifications with sections:
```markdown
# Mobile Banking App Design Spec

## Overview
Modern mobile-first banking application with clean, secure interface.

## Key Screens
- Login with biometric auth
- Account dashboard with balance cards
- Transaction history with search/filter
- Transfer money with contact picker

## Visual Style
- **Colors**: Navy primary (#1e3a8a), white backgrounds
- **Typography**: Inter font family, clear hierarchy
- **Components**: Card-based layout, rounded corners

## User Experience
- Thumb-friendly navigation (bottom tabs)
- Swipe gestures for quick actions
- Accessibility: High contrast mode, screen reader support
```

### **3. JSON Files (.json)**
Structured format with embedded flags support:
```json
{
  "spec": {
    "name": "E-commerce Dashboard",
    "domain": "ecommerce",
    "target_devices": ["desktop", "tablet"],
    "style": {
      "theme": "modern_minimal",
      "colors": {
        "primary": "#3b82f6",
        "secondary": "#64748b"
      },
      "typography": {
        "font_family": "Inter",
        "scale": "1.2"
      }
    },
    "screens": [
      {
        "name": "Product Dashboard",
        "components": ["header", "sidebar", "product_grid", "filters"],
        "layout": "sidebar_main"
      }
    ]
  },
  "flags": {
    "fidelity": "high",
    "handoff": "detailed",
    "review-server": true
  }
}
```

### **4. YAML Files (.yaml, .yml)**
Hierarchical design specifications:
```yaml
spec:
  name: "Healthcare Provider Portal"
  domain: healthcare

  visual_style:
    theme: professional_clean
    colors:
      primary: "#0ea5e9"
      accent: "#059669"

  screens:
    - name: "Patient Dashboard"
      priority: high
      components:
        - patient_search
        - appointment_calendar
        - vital_signs_display

  user_experience:
    accessibility: "WCAG 2.1 AA compliant"
    performance: "fast_load_critical_data"

flags:
  fidelity: high
  ux-analysis: true
  handoff: comprehensive
```

### **Flag Inheritance**
Like `/ts-turbo`, embedded `flags` in JSON/YAML files override command-line flags:
```bash
# CLI flags are overridden by spec file flags
/ts-design-turbo --spec=specs/app.json --fidelity=low
# → If app.json contains "fidelity": "high", high fidelity is used
```

---

## **App Specification Formats** 🔄 **NEW**

The `--in-app-spec=` flag accepts app requirements and PRD files for transformation into design specifications:

### **1. Text Files (.txt) - Simple Requirements**
```txt
Banking Mobile App Requirements

Core Features:
- Secure login with biometric support
- Account balance display with multiple accounts
- Transaction history with search and filtering
- Send money to contacts with address book integration
- Bill payment scheduling and reminders
- Push notifications for account activity

User Requirements:
- Must be mobile-first design
- Need quick access to account balances
- Frequently transfer money to family and friends
- Want to schedule recurring bill payments
- Need transaction categorization for budgeting

Business Requirements:
- Support for offline balance viewing
- WCAG 2.1 AA accessibility compliance
- Integration with existing core banking system
- Multi-factor authentication for transactions over $500
```

### **2. Markdown Files (.md) - Structured PRDs**
```markdown
# E-commerce Mobile App - Product Requirements

## Executive Summary
Modern e-commerce platform targeting millennials and Gen Z customers with emphasis on social shopping and sustainability.

## Core Features
### User Authentication
- Social login (Google, Apple, Facebook)
- Guest checkout option
- Profile management with preferences

### Product Catalog
- Visual search using camera
- AR try-on for fashion and furniture
- Personalized recommendations
- Sustainability ratings for products

### Shopping Experience
- Wishlist with sharing capabilities
- Cart abandonment recovery
- Multiple payment methods (Apple Pay, PayPal, BNPL)
- Real-time order tracking

## User Personas
- **Sarah, 28**: Busy professional who shops on mobile during commute
- **Mike, 24**: Tech-savvy student who compares prices and reads reviews
- **Lisa, 35**: Parent focused on sustainable and ethical purchases

## Technical Requirements
- Progressive Web App (PWA) capabilities
- Offline browsing of previously viewed products
- Push notifications for deals and order updates
- Integration with inventory management system
```

### **3. JSON Files (.json) - Structured Requirements**
```json
{
  "app_spec": {
    "name": "HealthTracker Pro",
    "domain": "healthcare",
    "target_users": ["patients", "caregivers", "healthcare_providers"],
    "core_features": [
      {
        "name": "Health Metrics Dashboard",
        "description": "Track vital signs, medications, appointments",
        "priority": "high",
        "user_flows": [
          "View daily health summary",
          "Log medication taken",
          "Schedule doctor appointment",
          "Share health data with provider"
        ]
      },
      {
        "name": "Symptom Tracker",
        "description": "Log symptoms and identify patterns",
        "priority": "high",
        "user_flows": [
          "Log new symptom with severity",
          "View symptom trends over time",
          "Generate symptom report for doctor"
        ]
      }
    ],
    "user_requirements": {
      "accessibility": "WCAG 2.1 AA compliant",
      "offline_support": "view_previous_data",
      "data_privacy": "HIPAA_compliant",
      "device_support": ["mobile", "tablet"]
    },
    "business_requirements": {
      "integrations": ["EHR_systems", "pharmacy_APIs", "insurance_APIs"],
      "compliance": ["HIPAA", "FDA_guidelines"],
      "monetization": "subscription_model"
    }
  },
  "transformation_preferences": {
    "style_theme": "medical_professional",
    "target_device": "mobile",
    "include_sample_data": true,
    "design_fidelity": "high"
  }
}
```

### **4. YAML Files (.yaml) - Hierarchical Requirements**
```yaml
app_spec:
  name: "Smart Home Dashboard"
  domain: "iot"
  target_audience: "homeowners aged 30-60"

  core_features:
    - name: "Device Control Center"
      description: "Control lights, thermostat, security system"
      priority: critical
      components:
        - device_grid
        - quick_actions
        - room_selector
        - device_status_indicators

    - name: "Energy Monitoring"
      description: "Track energy usage and costs"
      priority: high
      components:
        - usage_charts
        - cost_breakdown
        - efficiency_tips
        - historical_data

    - name: "Security Dashboard"
      description: "Monitor cameras, alarms, door locks"
      priority: critical
      components:
        - camera_feeds
        - alarm_status
        - access_logs
        - emergency_contacts

  user_requirements:
    ease_of_use: "one_touch_actions"
    accessibility: "large_buttons_high_contrast"
    reliability: "offline_fallback_controls"
    personalization: "custom_dashboards_per_user"

  technical_requirements:
    platforms: ["web", "mobile_app"]
    integrations: ["alexa", "google_home", "homekit"]
    real_time_updates: true
    offline_support: "basic_controls"

transformation_preferences:
  style_theme: "modern_tech"
  target_device: "both"
  design_fidelity: "high"
  include_user_flows: true
  include_sample_data: true
```

This prototype-first approach transforms Design Turbo Mode from a comprehensive but slow analysis tool into a **fast, practical utility** that delivers immediate stakeholder value while preserving the option for deep analysis when needed.

---

*Note: The prototype-first design prioritizes rapid stakeholder value delivery while maintaining professional quality and providing optional comprehensive analysis through switches.*