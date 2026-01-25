# Design Extract: $ARGUMENTS

Extract design patterns from projects or websites and save as reusable style definitions for the Design Department.

## Usage

```bash
# Extract from local project
/ts-design-extract input/project-name --name="style-name"

# Extract from URL (Phase 2)
/ts-design-extract https://example.com --name="style-name"

# Extract with comprehensive options
/ts-design-extract input/project --name="enterprise-console" --description="Dense management interface" --category="enterprise" --tags="dashboard,admin"

# Multi-page URL extraction (Phase 2)
/ts-design-extract https://site.com --pages="/dashboard,/settings" --name="multi-page-style"

# Deep analysis mode
/ts-design-extract https://linear.app --name="modern-minimal" --deep --responsive --screenshot

# Create default style from template
/ts-design-extract --create-default="modern-professional" --template="balanced"
```

## Arguments

- **source** (required): Local path (input/project) or URL (https://...)
- **--name** (required): Name for the style (lowercase, hyphenated)
- **--description**: Human-readable description of the style
- **--category**: Style category (enterprise, modern, minimal, etc.)
- **--tags**: Comma-separated tags for classification
- **--pages**: For URLs, specific pages to analyze (comma-separated)
- **--deep**: Enable deep analysis (components, interactions)
- **--responsive**: Analyze responsive patterns
- **--screenshot**: Capture visual screenshots (Phase 2)
- **--focus**: Focus analysis on specific elements (navigation,forms,tables)
- **--create-default**: Create a new default style from template
- **--template**: Template to base style on (balanced, dense, minimal)

## Process

### Phase 1: Source Analysis and Validation

#### Step 1: Input Validation
```
╔══════════════════════════════════════════════════════════════════╗
║  🎨 STYLE EXTRACTION INITIATED                                   ║
╠══════════════════════════════════════════════════════════════════╣
║  Source: [input/project-name OR https://example.com]             ║
║  Style Name: [style-name]                                        ║
║  Mode: [Local Project / URL Analysis / Template Creation]        ║
║  Analysis Depth: [Quick / Deep / Focused]                        ║
╚══════════════════════════════════════════════════════════════════╝
```

1. **Validate Input Parameters**
   - Check source path exists (for local) or URL is accessible
   - Validate style name follows naming conventions (lowercase, hyphenated)
   - Ensure style name doesn't conflict with existing styles
   - Verify required parameters are provided

2. **Determine Extraction Mode**
   - **Local Project**: Scan file system for HTML, CSS, JS files
   - **URL Analysis**: Use WebFetch for web content analysis (Phase 2)
   - **Template Creation**: Generate style from predefined templates
   - **Default Creation**: Special handling for creating system defaults

3. **Setup Analysis Environment**
   - Create temporary workspace for analysis
   - Initialize style-extractor agent with appropriate configuration
   - Set analysis parameters based on flags (deep, responsive, focused)
   - Prepare output directories for generated files

#### Step 2: Project Discovery and Scanning
For local projects:
```
[Phase 1] 🔍 Scanning Project Structure...
├── Discovering source files: *.html, *.css, *.js, *.tsx, *.vue
├── Detecting framework: React/Vue/Angular/Vanilla
├── Analyzing file organization and component structure
└── Cataloging assets: fonts, icons, images
```

1. **Launch Design Pattern Extractor**
   ```
   Agent: design-pattern-extractor
   Mode: local-project-analysis
   Input: {
     projectPath: [specified-path],
     analysisDepth: [quick/deep/focused],
     extractionOptions: [flags and settings],
     outputFormat: [style-definition]
   }
   ```

2. **File Discovery and Categorization**
   - Use Glob tool to find all relevant source files
   - Categorize files by type: HTML, CSS, JavaScript, Components
   - Identify framework usage and build system
   - Detect component organization patterns

3. **Initial Project Assessment**
   - Estimate project complexity and scale
   - Identify primary design patterns and frameworks
   - Assess information density and visual complexity
   - Determine extraction strategy based on project characteristics

### Phase 2: Pattern Recognition and Analysis

#### Step 3: Design Pattern Extraction
```
[Phase 2] 🎨 Extracting Design Patterns...
├── Color Palette Analysis: Extracting colors and custom properties
├── Typography System: Analyzing fonts, sizes, and hierarchy
├── Layout Patterns: Detecting navigation and grid systems
├── Component Catalog: Identifying reusable UI components
└── Responsive Strategy: Analyzing breakpoints and mobile patterns
```

1. **Color System Extraction**
   - Parse CSS for color declarations and custom properties
   - Identify primary, secondary, and semantic color palettes
   - Analyze color usage patterns and frequency
   - Generate accessibility compliance report (WCAG 2.1)

2. **Typography Analysis**
   - Extract font families, sizes, weights, and line heights
   - Calculate type scale and modular scale ratios
   - Analyze heading hierarchy and content structure
   - Document font loading strategies and fallbacks

3. **Layout and Navigation Pattern Recognition**
   - Identify layout methodology (Grid, Flexbox, traditional)
   - Extract navigation patterns (sidebar, topbar, hybrid)
   - Analyze spacing systems and container strategies
   - Document responsive breakpoints and behaviors

4. **Component Pattern Cataloging**
   - Extract button styles, variants, and interaction states
   - Analyze form elements and input styling patterns
   - Identify card layouts and content organization
   - Document table design and data presentation patterns

#### Step 4: Quality Assessment and Validation
```
[Phase 2] ✅ Validating Extracted Patterns...
├── Consistency Check: Ensuring pattern consistency across files
├── Accessibility Audit: Validating WCAG 2.1 compliance
├── Completeness Review: Checking for missing design tokens
└── Quality Scoring: Calculating extraction confidence scores
```

1. **Pattern Consistency Analysis**
   - Cross-reference patterns across multiple files
   - Identify inconsistencies and variations
   - Flag potential design system gaps
   - Calculate pattern confidence scores

2. **Accessibility Compliance Checking**
   - Validate color contrast ratios (WCAG 2.1 AA/AAA)
   - Check semantic markup and heading hierarchy
   - Assess keyboard navigation support
   - Generate accessibility improvement recommendations

3. **Completeness and Quality Assessment**
   - Ensure all major UI components are cataloged
   - Validate extraction accuracy against source files
   - Check for missing design tokens or incomplete patterns
   - Generate quality metrics and confidence scores

### Phase 3: Style Definition Generation

#### Step 5: Create Comprehensive Style Definition
```
[Phase 3] 📝 Generating Style Definition...
├── Metadata Creation: Building YAML frontmatter with classifications
├── Design Documentation: Documenting principles and guidelines
├── Technical Specifications: CSS framework and implementation details
├── Component Templates: Creating reusable HTML/CSS snippets
└── Usage Guidelines: Generating best practices and examples
```

1. **Generate Style Metadata**
   - Create comprehensive YAML frontmatter with all metadata
   - Calculate technical specifications (frameworks, dependencies)
   - Generate appropriate tags and category assignments
   - Document domain optimization and target use cases

2. **Create Design System Documentation**
   - Document inferred design principles and guidelines
   - Generate color palette documentation with usage notes
   - Create typography system documentation with scales
   - Document component usage patterns and best practices

3. **Generate Component Templates**
   - Extract reusable HTML/CSS snippets for key components
   - Create template variants for different component states
   - Document component props and customization points
   - Organize templates in hierarchical structure

4. **Create Implementation Guidelines**
   - Generate framework-specific setup instructions
   - Document required dependencies and build configuration
   - Create integration examples and code snippets
   - Provide performance optimization recommendations

#### Step 6: Asset Generation and Organization
```
[Phase 3] 🎨 Creating Supporting Assets...
├── Color Palette Export: CSS custom properties and documentation
├── Typography Assets: Font loading and responsive typography
├── Component Library: Organized template collection
└── Visual References: Screenshots and component galleries (if enabled)
```

1. **Color Palette Assets**
   - Generate CSS custom properties file
   - Create color palette documentation
   - Export accessibility-compliant color combinations
   - Generate color usage guidelines

2. **Typography and Layout Assets**
   - Create responsive typography CSS
   - Generate spacing scale definitions
   - Document grid system and layout patterns
   - Create responsive design guidelines

3. **Component Template Library**
   - Organize templates by component type
   - Create template documentation and examples
   - Generate component interaction specifications
   - Build template hierarchy and relationships

### Phase 4: Registration and Integration

#### Step 7: Style Registration and Validation
```
[Phase 4] 📋 Registering Style in Library...
├── Registry Integration: Adding style to central registry
├── Category Assignment: Organizing in appropriate categories
├── Recommendation Updates: Updating domain recommendations
└── Validation: Ensuring style integrity and completeness
```

1. **Register Style with Design Style Manager**
   ```
   Agent: design-style-manager
   Action: register_style
   Input: {
     styleName: [style-name],
     styleFile: [generated-definition-file],
     metadata: [extracted-metadata],
     category: [assigned-category]
   }
   ```

2. **Update Style Registry**
   - Add style entry to central registry
   - Update category assignments
   - Add to domain recommendation lists if appropriate
   - Generate initial usage statistics entry

3. **Validate Style Definition**
   - Check style definition completeness
   - Validate template rendering
   - Test component template functionality
   - Verify accessibility compliance

#### Step 8: Completion and Output Summary
```
[Complete] ✅ Style Extraction Complete!
╔══════════════════════════════════════════════════════════════════╗
║  Style Created: [style-name]                                     ║
║  Category: [category]                                            ║
║  Components: [count] templates created                           ║
║  Quality Score: [confidence-percentage]                          ║
║  Location: .claude/styles/[style-name].md                       ║
╚══════════════════════════════════════════════════════════════════╝
```

## Output Files Created

### Primary Style Definition
- **`.claude/styles/{name}.md`** - Complete style definition with metadata
  - YAML frontmatter with comprehensive metadata
  - Design principles and implementation guidelines
  - Color palette and typography system documentation
  - Component catalog with usage examples
  - Technical specifications and dependencies

### Component Templates
- **`.claude/styles/templates/{name}/`** - Reusable component templates
  - `navigation/` - Navigation component templates
  - `components/` - UI component templates (buttons, forms, cards)
  - `layouts/` - Layout pattern templates
  - Each template includes HTML structure and CSS styling

### Supporting Assets
- **`.claude/styles/assets/color-palettes/{name}.css`** - Color system CSS
- **`.claude/styles/assets/screenshots/{name}.png`** - Visual reference (if --screenshot)
- **Registry Updates** - Updated `.claude/styles/registry.json`

## Examples

### Extract DFO Enterprise Style
```bash
/ts-design-extract output/dfo-prototypes --name="enterprise-console" --description="Information-dense management console with sidebar navigation" --category="enterprise" --tags="dashboard,admin,dense,sidebar"
```

### Extract from Successful Website (Phase 2)
```bash
/ts-design-extract https://linear.app --name="modern-minimal" --description="Clean productivity interface with excellent typography" --deep --screenshot --tags="productivity,minimal,modern"
```

### Create Default Balanced Style
```bash
/ts-design-extract --create-default="modern-professional" --template="balanced" --description="Versatile professional interface suitable for most applications"
```

### Focused Component Extraction
```bash
/ts-design-extract input/design-system --name="component-library" --focus="buttons,forms,cards" --description="Reusable component library"
```

## Error Handling

### Common Error Scenarios
```bash
# Project path doesn't exist
Error: Project path 'nonexistent-project' not found
Suggestion: Check the path and ensure it contains a frontend application

# Style name already exists
Error: Style 'enterprise-console' already exists
Suggestion: Use a different name or delete the existing style with /ts-styles --delete

# Insufficient design patterns found
Warning: Limited design patterns detected in 'basic-project'
Suggestion: Ensure project contains substantial CSS and component files

# Malformed CSS or invalid files
Warning: Could not parse CSS file 'broken-styles.css'
Continuing: Analysis proceeding with remaining files
```

### Fallback Strategies
```bash
# Framework detection fails
Falling back to generic HTML/CSS analysis
Providing framework-agnostic component templates

# Color extraction incomplete
Using detected colors with system default fallbacks
Manual color palette review recommended

# Component recognition limited
Generating basic component templates based on HTML structure
Consider manual template enhancement for complex components
```

## Integration with Other Commands

### With /ts-styles Management
```bash
# Extract and immediately view
/ts-design-extract input/project --name="my-style"
/ts-styles --show="my-style"

# Extract and set as default
/ts-design-extract input/reference --name="new-default"
/ts-styles --set-default="new-default"
```

### With /ts-design-turbo Application
```bash
# Extract from reference and apply to new project
/ts-design-extract input/reference-app --name="reference-style"
/ts-design-turbo input/new-app --style="reference-style"
```

## Success Criteria

### Phase 1 (Local Projects)
- ✅ Successfully extract styles from local HTML/CSS projects
- ✅ Generate complete style definitions with proper metadata
- ✅ Create reusable component templates
- ✅ Register styles in central registry
- ✅ Maintain extraction quality score above 80%

### Phase 2 (URL Analysis)
- ✅ Extract styles from live websites using WebFetch
- ✅ Handle dynamic content and modern frameworks
- ✅ Support multi-page analysis
- ✅ Capture visual references and screenshots

### Quality Targets
- **Extraction Accuracy**: 90%+ pattern recognition accuracy
- **Performance**: Complete extraction in under 2 minutes for typical projects
- **Completeness**: Extract all major UI components and design tokens
- **Usability**: Generated styles successfully apply to new projects

This command establishes the foundation for building a comprehensive style library that enables design pattern reuse and consistency across all projects in The System framework.