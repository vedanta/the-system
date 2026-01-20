# Design Wireframe Generation: $ARGUMENTS

Generate ASCII and SVG wireframes from component analysis for rapid design iteration and stakeholder review.

## Usage

```bash
/ts-design-wireframe [scope] [--format=ascii]
/ts-design-wireframe [scope] --format=svg
/ts-design-wireframe [scope] --format=both
/ts-design-wireframe [scope] --mobile
/ts-design-wireframe [scope] --desktop
/ts-design-wireframe [scope] --content=realistic
/ts-design-wireframe [scope] --content=api-driven
/ts-design-wireframe --list-components
/ts-design-wireframe --help
```

## Purpose

Generate visual wireframes from UX analysis to provide rapid, low-fidelity representations of UI layouts. This command creates ASCII and SVG wireframes that can be quickly shared with stakeholders, iterated upon, and used as input for higher-fidelity prototyping.

## Arguments

- **scope**: Component name, page name, or "all" for complete application (defaults to "all")
- **--format**: Output format - ascii, svg, or both (default: ascii)
- **--mobile**: Generate mobile-responsive wireframes (375px width)
- **--desktop**: Generate desktop wireframes (1200px width, default)
- **--tablet**: Generate tablet wireframes (768px width)
- **--content**: Content type - realistic, placeholder, schema-based, or api-driven (default: realistic)
  - **realistic**: Generated sample data appropriate for application domain
  - **placeholder**: Generic Lorem ipsum and placeholder content
  - **schema-based**: Content based on TypeScript interfaces
  - **api-driven**: Content from API discovery results (requires /ts-design-api-discover)
- **--width**: Custom width for ASCII wireframes (default: 80 characters)
- **--interactive**: Include interactive element indicators
- **--save-to**: Custom output directory for wireframes

## Examples

```bash
# Generate ASCII wireframes for entire application
/ts-design-wireframe all

# Generate wireframes for specific component
/ts-design-wireframe VMDataTable --format=both

# Generate mobile wireframes with realistic content
/ts-design-wireframe dashboard --mobile --content=realistic

# Generate SVG wireframes for stakeholder presentation
/ts-design-wireframe all --format=svg --desktop

# List available components for wireframe generation
/ts-design-wireframe --list-components

# Generate wireframes with custom dimensions
/ts-design-wireframe dashboard --width=100 --interactive

# Generate API-driven wireframes (Phase 2)
/ts-design-wireframe all --content=api-driven --format=both
```

## Prerequisites

This command requires prior analysis from `/ts-design-analyze`. If no analysis exists, it will automatically run the analysis first.

**For API-driven content (`--content=api-driven`)**, this command also requires API discovery from `/ts-design-api-discover`.

```bash
# Automatic analysis if needed
Analysis not found for current project
Running /ts-design-analyze automatically...
✅ Analysis complete, proceeding with wireframe generation

# API-driven content workflow
API discovery not found for current project
To use --content=api-driven, first run:
/ts-design-api-discover [project-path]
```

**Enhanced Phase 2 Workflow:**
```bash
# Complete API-driven wireframe workflow
/ts-design-analyze output/dfo-gui              # UX analysis
/ts-design-api-discover output/dfo-gui         # API discovery
/ts-design-wireframe all --content=api-driven  # Enhanced wireframes
```

## Process

### Phase 1: Setup and Validation
1. **Input Validation**
   - Verify analysis data exists from previous `/ts-design-analyze`
   - Validate scope parameter (component name or "all")
   - Check output format and dimension requirements
   - Ensure output directory is writable

2. **Component Discovery**
   - Load component inventory from analysis results
   - Filter components based on scope parameter
   - Validate component data completeness
   - Prepare content generation requirements

### Phase 2: Content Preparation
3. **Content Strategy Selection**
   ```
   Realistic Content:
   - Use sample data from API discovery
   - Generate contextually appropriate content
   - Include proper data types and formats

   Placeholder Content:
   - Use generic placeholder text
   - Standard Lorem ipsum variations
   - Basic data type representations

   Schema-based Content:
   - Generate content from API schemas
   - Use TypeScript interface definitions
   - Maintain data structure accuracy
   ```

4. **Responsive Layout Planning**
   ```
   Mobile (< 768px):
   - Single column layouts
   - Stacked components
   - Simplified navigation
   - Touch-friendly interactions

   Tablet (768px - 1024px):
   - Two-column layouts where appropriate
   - Collapsible sidebars
   - Adaptive navigation

   Desktop (> 1024px):
   - Multi-column layouts
   - Full navigation
   - Detailed data tables
   - Rich interactions
   ```

### Phase 3: Wireframe Generation
5. **Launch Wireframe Generator Agent**
   ```
   Agent: wireframe-generator
   Input: {
     scope: [component-name/all],
     format: [ascii/svg/both],
     breakpoint: [mobile/tablet/desktop],
     content: [realistic/placeholder/schema],
     dimensions: {
       width: [80/custom],
       responsive: true/false
     },
     components: [filtered-component-list],
     sampleData: [generated-content]
   }
   ```

6. **ASCII Wireframe Generation**
   ```
   Process:
   1. Calculate component dimensions based on content
   2. Apply responsive breakpoint rules
   3. Render containers using Unicode box characters
   4. Fill content areas with realistic/placeholder data
   5. Add interactive element indicators
   6. Apply consistent spacing and alignment
   ```

7. **SVG Wireframe Generation (if requested)**
   ```
   Process:
   1. Create scalable vector graphics templates
   2. Apply responsive design principles
   3. Include interactive element highlights
   4. Generate publication-ready wireframes
   5. Embed accessibility information
   6. Add responsive breakpoint annotations
   ```

### Phase 4: Output Generation and Organization
8. **Generate Wireframe Files**
   - Create ASCII wireframes (.txt files)
   - Generate SVG wireframes (.svg files) if requested
   - Include component metadata and specifications
   - Generate responsive variants if multiple breakpoints specified

9. **Create Wireframe Documentation**
   ```markdown
   # Wireframe Documentation: [Scope]

   ## Overview
   - Generated: 2024-01-16 15:45:00
   - Scope: [component-name/all]
   - Format: [ascii/svg/both]
   - Breakpoints: [mobile/tablet/desktop]

   ## Component Wireframes
   ### Dashboard Layout
   - File: wireframes/dashboard-ascii.txt
   - Dimensions: 80 characters wide
   - Components: MetricCards, VMTable, FilterPanel
   - Interactive Elements: 8 buttons, 3 forms, 1 table

   ### VMDataTable Component
   - File: wireframes/vm-data-table-ascii.txt
   - Type: Data table with sorting and filtering
   - Responsive: Mobile variant included
   - Sample Data: 5 VM records with realistic content

   ## Usage Instructions
   [How to interpret and use the wireframes]
   ```

## Output Structure

### Default Output Location
```
wireframes/
├── README.md                      # Wireframe documentation
├── dashboard-ascii.txt            # ASCII wireframe for dashboard
├── vm-data-table-ascii.txt        # ASCII wireframe for VM table
├── filter-panel-ascii.txt         # ASCII wireframe for filter panel
├── mobile/                        # Mobile variants (if generated)
│   ├── dashboard-mobile-ascii.txt
│   └── vm-table-mobile-ascii.txt
└── svg/                           # SVG variants (if generated)
    ├── dashboard.svg
    └── vm-data-table.svg
```

### ASCII Wireframe Example
```
File: wireframes/dashboard-ascii.txt

┌─── DFO Cost Optimization Dashboard ──────────────────────────────┐
│ [🏠 Dashboard] [💰 Analysis] [🖥️ VMs] [📊 Reports] [⚙️ Settings]  │
├───────────────────────────────────────────────────────────────────┤
│                                                                   │
│ ┌─ Overview Metrics ────────────────────────────────────────────┐ │
│ │ ┌─ Total Cost ──┐ ┌─ Savings ─────┐ ┌─ VMs ─────────┐        │ │
│ │ │ 💰 $12,450/mo  │ │ 📈 $3,200     │ │ 🖥️ 47 total    │        │ │
│ │ │ ↑ 5% vs last   │ │ ↓ 12% waste   │ │ 12 idle       │        │ │
│ │ └────────────────┘ └───────────────┘ └───────────────┘        │ │
│ └───────────────────────────────────────────────────────────────┘ │
│                                                                   │
│ ┌─ VM Inventory ────────────────────────────────────────────────┐ │
│ │ [🔍 Search VMs...] [Filter ▼] [Actions ▼] [📤 Export]         │ │
│ │                                                               │ │
│ │ ☐  Name           Resource Group    Cost/Mo    CPU%   Action │ │
│ │ ├─────────────────────────────────────────────────────────┤ │ │
│ │ ☐  prod-web-01    rg-production    $245      2.1%    [⚡Opt] │ │
│ │ ☐  dev-test-02    rg-development   $89       0.8%    [🗑Del] │ │
│ │ ☐  staging-db     rg-staging       $456      15.2%   [✅ OK] │ │
│ │                                                               │ │
│ │ [◀️ Previous] Page 1 of 5 [Next ▶️]           Total: 47 VMs   │ │
│ └───────────────────────────────────────────────────────────────┘ │
└───────────────────────────────────────────────────────────────────┘

Components: 3 main sections, 8 interactive elements
Responsive: Desktop layout - see mobile/ for mobile variant
Content: Realistic sample data based on DFO cost optimization domain
Interactive: All buttons and form elements marked with appropriate symbols
```

### SVG Wireframe Features
```xml
<!-- Generated: wireframes/svg/dashboard.svg -->
<svg width="1200" height="800" xmlns="http://www.w3.org/2000/svg">
  <!-- Responsive breakpoint indicators -->
  <text x="10" y="20" font-size="12" fill="#666">Desktop: 1200px</text>

  <!-- Component boundaries with labels -->
  <rect x="20" y="60" width="1160" height="100" fill="#f8f9fa" stroke="#dee2e6"/>
  <text x="30" y="80" font-size="14" fill="#495057">Navigation Header</text>

  <!-- Interactive element highlighting -->
  <rect x="100" y="200" width="120" height="40" fill="#007bff" stroke="#0056b3"/>
  <text x="160" y="225" font-size="12" fill="#fff" text-anchor="middle">Search VMs</text>

  <!-- Accessibility annotations -->
  <circle cx="90" cy="220" r="5" fill="#28a745"/>
  <text x="100" y="245" font-size="10" fill="#28a745">Accessible</text>
</svg>
```

## Content Generation

### Realistic Content Strategy
```typescript
interface ContentStrategy {
  // Domain-specific content for DFO cost optimization
  generateVMData(): VMSampleData {
    return [
      {
        name: "prod-web-01",
        resourceGroup: "rg-production",
        cost: "$245",
        cpu: "2.1%",
        status: "running",
        recommendation: "⚡ Optimize"
      },
      {
        name: "dev-test-02",
        resourceGroup: "rg-development",
        cost: "$89",
        cpu: "0.8%",
        status: "idle",
        recommendation: "🗑️ Delete"
      }
      // Additional realistic entries...
    ]
  }

  // Financial data patterns for cost optimization context
  generateCostMetrics(): CostMetrics {
    return {
      totalCost: "$12,450",
      potentialSavings: "$3,200",
      wastePercentage: "12%",
      trend: "↑ 5% vs last month"
    }
  }
}
```

## Integration Points

### Input Requirements
- **UX Analysis Data**: Component inventory and layout patterns from `/ts-design-analyze`
- **API Schema**: Data structure information for realistic content generation
- **Framework Context**: React/Vue/Angular specific rendering considerations

### Output for Other Commands
- **ts-design-prototype**: ASCII wireframes serve as layout foundation for interactive prototypes
- **ts-design-implement**: Wireframe specifications inform component generation
- **ts-design-review**: Wireframes used in stakeholder review packages

## Error Handling

### Common Scenarios
```bash
# No prior analysis found
Error: No design analysis found for current project
Solution: Run /ts-design-analyze first, or use --auto-analyze flag

# Invalid component scope
Error: Component 'InvalidComponent' not found in analysis
Available components: Dashboard, VMDataTable, FilterPanel, MetricCard
Solution: Use --list-components to see available options

# Output directory not writable
Error: Cannot write to wireframes/ directory
Solution: Check directory permissions or use --save-to option

# Content generation fails
Warning: Unable to generate realistic content, using placeholders
Proceeding with placeholder content...
```

### Fallback Strategies
```bash
# Unicode not supported in terminal
Warning: Unicode box drawing not supported, falling back to ASCII
Using basic ASCII characters: +--+|

# Large component scope
Warning: Generating wireframes for 25+ components may take several minutes
Consider using specific component names for faster generation

# Missing component data
Warning: Incomplete data for component 'CustomWidget'
Generating basic container wireframe with placeholder content
```

## Performance Considerations

### Optimization Strategies
- **Template Caching**: Cache common layout patterns for reuse
- **Incremental Generation**: Only regenerate changed components
- **Parallel Processing**: Generate multiple wireframes simultaneously
- **Content Reuse**: Reuse generated sample data across similar components

### Resource Management
- **Memory Limits**: Stream wireframe generation for large applications
- **File I/O**: Batch file writes to improve performance
- **Progress Reporting**: Show generation progress for multiple components

## Quality Assurance

### Wireframe Quality Checks
1. **Visual Clarity**: All text readable and components clearly defined
2. **Proportional Accuracy**: Components sized appropriately relative to each other
3. **Interactive Clarity**: Interactive elements clearly distinguished from static content
4. **Responsive Logic**: Mobile/desktop variants make logical sense
5. **Content Appropriateness**: Sample data relevant to application domain

### Success Criteria for Phase 1
- ✅ Generates readable ASCII wireframes for analyzed React components
- ✅ Includes realistic sample data appropriate for application domain
- ✅ Clearly indicates interactive elements and component boundaries
- ✅ Produces both desktop and mobile layout variants
- ✅ Integrates seamlessly with existing `/ts-*` command workflow
- ✅ Completes wireframe generation for dfo-gui in under 1 minute

This command provides the visual foundation for rapid design iteration and stakeholder communication, enabling quick feedback cycles before investing in high-fidelity prototypes.