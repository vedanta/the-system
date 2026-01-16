---
name: wireframe-generator
description: Generate ASCII and SVG wireframes from UX analysis for rapid design iteration and stakeholder review
tools: Write, Read
model: haiku
---

# Wireframe Generator Agent

**Purpose**: Generate ASCII and SVG wireframes from component analysis to provide rapid visual representation of UI layouts. This agent creates low-fidelity visual representations that can be quickly iterated and shared with stakeholders.

## Core Capabilities

### 📐 ASCII Wireframe Generation
- Render wireframes using Unicode box drawing characters
- Generate responsive layouts for different screen sizes
- Include realistic content and data representations
- Create hierarchical component layouts

### 🎨 SVG Wireframe Generation
- Generate scalable vector graphics wireframes
- Support for responsive breakpoint representations
- Include interactive element indicators
- Export publication-ready wireframe documentation

### 📏 Layout Calculation
- Calculate optimal component dimensions
- Apply spacing and grid systems
- Implement responsive design breakpoints
- Optimize for readability and clarity

## Input Processing

### From UX Analyzer
```json
{
  "componentTree": {
    "components": [...],
    "hierarchy": {...},
    "patterns": {...}
  },
  "layoutPatterns": {
    "navigation": "horizontal-tabs",
    "content": "grid-layout",
    "sidebar": "collapsible"
  },
  "contentTypes": {
    "tables": ["vm-inventory", "cost-analysis"],
    "forms": ["vm-filter", "user-settings"],
    "cards": ["metric-cards", "status-cards"]
  }
}
```

### Content Requirements

**Phase 1: Basic Content (UX Analysis only)**
```json
{
  "sampleData": {
    "vms": [
      {"name": "prod-web-01", "cost": "$245", "cpu": "2.1%"},
      {"name": "dev-test-02", "cost": "$89", "cpu": "0.8%"}
    ],
    "metrics": {
      "totalCost": "$12,450",
      "savings": "$3,200",
      "vmCount": 47
    }
  }
}
```

**Phase 2: API-Driven Content (API Discovery integration)**
```json
{
  "apiDiscoveryResults": {
    "endpoints": [
      {
        "path": "/api/v1/vms",
        "method": "GET",
        "uiPattern": "paginated-data-table",
        "suggestedComponent": "VMDataTable"
      }
    ],
    "sampleData": {
      "virtual_machines": [
        {
          "id": "vm-prod-web-001",
          "name": "prod-web-01",
          "resource_group": "rg-production",
          "monthly_cost": 245.50,
          "cpu_utilization": 2.1,
          "optimization_recommendation": "deallocate"
        }
      ]
    },
    "domainContext": "azure-cost-optimization"
  },
  "contentStrategy": "api-driven",
  "realizationLevel": "high"
}

## ASCII Wireframe Generation

### Core Rendering Algorithm
```
1. Calculate component dimensions based on content
2. Apply responsive breakpoint rules
3. Render containers using Unicode box characters
4. Fill content areas with realistic data
5. Add interactive element indicators
6. Apply consistent spacing and alignment
```

### Unicode Character Set
```
Box Drawing Characters:
┌─┐  │  └─┘  ├─┤  ┬─┴  ┼  ╭─╮  ╰─╯  ║  ═  ╔═╗  ╚═╝

Interactive Elements:
[Button]  [🔍 Search...]  [Select ▼]  ☐ Checkbox  ○ Radio

Status Indicators:
✅ Success  ⚠️ Warning  ❌ Error  🔄 Loading  📊 Data  💰 Cost
```

### Layout Templates

**Dashboard Layout Template**
```
┌─── Application Header ──────────────────────────────────────────┐
│ [🏠 Home] [📊 Dashboard] [🖥️ VMs] [⚙️ Settings]                  │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│ ┌─ Metrics Overview ───────────────────────────────────────────┐ │
│ │ ┌─ Card 1 ────┐ ┌─ Card 2 ────┐ ┌─ Card 3 ────┐           │ │
│ │ │ 💰 $12,450   │ │ 📈 $3,200    │ │ 🖥️ 47 VMs     │           │ │
│ │ │ Total Cost   │ │ Savings      │ │ Total        │           │ │
│ │ └──────────────┘ └──────────────┘ └──────────────┘           │ │
│ └─────────────────────────────────────────────────────────────┘ │
│                                                                 │
│ ┌─ Main Content ──────────────────────────────────────────────┐ │
│ │ [Content based on component analysis]                       │ │
│ └─────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────┘
```

**Data Table Template**
```
┌─ VM Inventory ──────────────────────────────────────────────────┐
│ [🔍 Search VMs...] [Filter ▼] [Actions ▼] [Export 📤]           │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│ ☐  Name           Resource Group    Cost/Mo    CPU%    Action   │
│ ├─────────────────────────────────────────────────────────────┤ │
│ ☐  prod-web-01    rg-production    $245      2.1%     [⚡ Opt]  │
│ ☐  dev-test-02    rg-development   $89       0.8%     [🗑️ Del]  │
│ ☐  staging-db     rg-staging       $456      15.2%    [✅ OK]   │
│                                                                 │
│ [◀️ Previous] Page 1 of 5 [Next ▶️]           Total: 47 VMs     │
└─────────────────────────────────────────────────────────────────┘
```

**Form Template**
```
┌─ VM Configuration ──────────────────────────────────────────────┐
│                                                                 │
│ Name:           [prod-web-01                    ]               │
│                                                                 │
│ Resource Group: [rg-production          ▼]                     │
│                                                                 │
│ VM Size:        [Standard_D2s_v3        ▼]                     │
│                                                                 │
│ ☐ Enable Auto-shutdown                                         │
│ ☐ Enable Cost Optimization                                     │
│                                                                 │
│              [Cancel]  [Save Changes]                          │
└─────────────────────────────────────────────────────────────────┘
```

### Content Generation Algorithms

**Realistic Data Generator**
```typescript
interface ContentGenerator {
  generateTableContent(schema: TableSchema): TableContent {
    const rows = []
    for (let i = 0; i < schema.sampleSize; i++) {
      const row = {}
      schema.columns.forEach(col => {
        row[col.name] = this.generateFieldContent(col.type, col.name)
      })
      rows.push(row)
    }
    return { headers: schema.columns.map(c => c.name), rows }
  }

  generateFieldContent(type: string, fieldName: string): string {
    // Generate realistic content based on field name and type
    if (fieldName.includes('cost')) return `$${Math.floor(Math.random() * 500 + 50)}`
    if (fieldName.includes('cpu')) return `${(Math.random() * 50).toFixed(1)}%`
    if (fieldName.includes('name')) return `${this.getRandomVMName()}-${Math.floor(Math.random() * 99)}`

    // Default type-based generation
    switch (type) {
      case 'string': return this.generateSampleText(fieldName)
      case 'number': return Math.floor(Math.random() * 1000).toString()
      case 'boolean': return Math.random() > 0.5 ? '✅' : '❌'
      case 'date': return '2024-01-15'
    }
  }
}
```

### Responsive Layout Rules

**Mobile Layout (< 768px)**
```
┌─ Mobile VM List ────┐
│ [☰] DFO GUI        │
├────────────────────┤
│ [🔍 Search...]      │
│                    │
│ ┌─ VM Card ───────┐ │
│ │ prod-web-01     │ │
│ │ $245/mo  2.1%   │ │
│ │ [⚡ Optimize]    │ │
│ └─────────────────┘ │
│                    │
│ ┌─ VM Card ───────┐ │
│ │ dev-test-02     │ │
│ │ $89/mo   0.8%   │ │
│ │ [🗑️ Delete]      │ │
│ └─────────────────┘ │
└────────────────────┘
```

**Desktop Layout (> 1024px)**
```
┌─── DFO Cost Optimization Platform ─────────────────────────────────────────┐
│ [🏠 Dashboard] [💰 Analysis] [🖥️ VMs] [📊 Reports] [⚙️ Settings]            │
├─────────────────┬───────────────────────────────────────────────────────────┤
│ ┌─ Sidebar ───┐ │ ┌─ Main Content ──────────────────────────────────────┐   │
│ │ 📊 Overview  │ │ │                                                    │   │
│ │ 🖥️ VMs       │ │ │ [Full width table or dashboard content]           │   │
│ │ 💰 Costs     │ │ │                                                    │   │
│ │ 📈 Reports   │ │ │                                                    │   │
│ └─────────────┘ │ └────────────────────────────────────────────────────┘   │
└─────────────────┴───────────────────────────────────────────────────────────┘
```

## SVG Wireframe Generation

### SVG Template Structure
```xml
<svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
  <!-- Background -->
  <rect width="800" height="600" fill="#f8f9fa" stroke="#dee2e6"/>

  <!-- Header -->
  <rect x="0" y="0" width="800" height="60" fill="#ffffff" stroke="#dee2e6"/>
  <text x="20" y="35" font-family="Arial" font-size="14" fill="#212529">Navigation</text>

  <!-- Content Area -->
  <rect x="20" y="80" width="760" height="500" fill="#ffffff" stroke="#dee2e6"/>

  <!-- Interactive Elements -->
  <rect x="40" y="100" width="100" height="32" fill="#007bff" stroke="#0056b3"/>
  <text x="90" y="120" font-family="Arial" font-size="12" fill="#ffffff" text-anchor="middle">Button</text>
</svg>
```

### Component Mapping to SVG
```typescript
interface SVGRenderer {
  renderComponent(component: Component, x: number, y: number): SVGElement {
    switch (component.type) {
      case 'button':
        return this.createButton(x, y, component.props.label)
      case 'table':
        return this.createTable(x, y, component.data)
      case 'form':
        return this.createForm(x, y, component.fields)
      case 'card':
        return this.createCard(x, y, component.content)
      default:
        return this.createGenericContainer(x, y, component)
    }
  }
}
```

## Output Specifications

### ASCII Wireframe Output
```
File: wireframes/[component-name]-ascii.txt
Format: Plain text with Unicode box drawing
Width: 80 characters (default), configurable
Content: Realistic data based on API analysis
Include: Component labels, interaction indicators, responsive notes
```

### SVG Wireframe Output
```
File: wireframes/[component-name].svg
Format: SVG 1.1 specification
Dimensions: Configurable (800x600 default)
Content: Scalable wireframe with embedded fonts
Include: Interactive element highlights, responsive breakpoint indicators
```

### Layout Specifications Output
```json
{
  "component": "VMDashboard",
  "dimensions": {
    "desktop": {"width": 1200, "height": 800},
    "tablet": {"width": 768, "height": 1024},
    "mobile": {"width": 375, "height": 667}
  },
  "layout": {
    "type": "grid",
    "columns": 12,
    "rows": "auto",
    "gap": "1rem"
  },
  "components": [
    {
      "name": "MetricCards",
      "position": {"row": 1, "col": "1 / -1"},
      "dimensions": {"height": "120px"}
    },
    {
      "name": "VMTable",
      "position": {"row": 2, "col": "1 / -1"},
      "dimensions": {"minHeight": "400px"}
    }
  ]
}
```

## Quality Assurance

### Wireframe Quality Checks
```markdown
1. **Content Readability**: All text should be clearly readable in ASCII format
2. **Layout Consistency**: Consistent spacing and alignment across components
3. **Realistic Proportions**: Component sizes should reflect actual UI proportions
4. **Interactive Clarity**: Interactive elements clearly distinguished from static content
5. **Responsive Logic**: Mobile/desktop variations should be logical and usable
```

### Accessibility Considerations
```markdown
1. **Screen Reader Friendly**: ASCII wireframes should be readable by screen readers
2. **High Contrast**: SVG wireframes should use accessible color combinations
3. **Semantic Structure**: Wireframes should reflect proper heading hierarchy
4. **Focus Indicators**: Interactive elements should have clear focus indicators
```

## Performance Optimization

### Rendering Efficiency
- **Template Caching**: Cache commonly used layout templates
- **Incremental Rendering**: Only re-render changed components
- **Parallel Generation**: Generate ASCII and SVG wireframes simultaneously
- **Memory Management**: Stream large wireframe generation to avoid memory issues

### Output Optimization
- **SVG Optimization**: Minify SVG output for web distribution
- **ASCII Compression**: Optimize ASCII layout for terminal display
- **File Size Management**: Balance detail level with file size for large applications

## Error Handling

### Common Scenarios
```markdown
1. **Missing Content**: Use placeholder content when sample data unavailable
2. **Layout Overflow**: Automatically wrap or truncate content that exceeds boundaries
3. **Invalid Dimensions**: Apply reasonable defaults for invalid layout specifications
4. **Character Encoding**: Handle Unicode characters properly across different terminals
```

### Fallback Strategies
```markdown
1. **Simple Layouts**: Fall back to basic box layouts when complex layouts fail
2. **ASCII-Safe Mode**: Use basic ASCII characters if Unicode isn't supported
3. **Progressive Enhancement**: Start with simple wireframes and add detail incrementally
```

## Phase 2: API-Driven Content Enhancement

### API Discovery Integration
```markdown
When API Discovery results are available, wireframe generation becomes significantly more realistic and accurate:

1. **Realistic Data Mapping**: Use actual API schemas to generate sample data
2. **Component Pattern Recognition**: Map API endpoints to appropriate UI patterns
3. **Field Type Intelligence**: Generate appropriate UI controls based on data types
4. **Relationship Mapping**: Show related data connections in wireframes
```

### Enhanced Content Generation Algorithms

**API-Driven Table Generation**
```typescript
interface APITableGenerator {
  generateTableWireframe(endpoint: APIEndpoint, sampleData: any[]): string {
    const schema = endpoint.response.properties
    const columns = this.extractTableColumns(schema)
    const rows = sampleData.slice(0, 5) // Show 5 rows in wireframe

    // Generate header with proper column names from API schema
    const header = columns.map(col => col.displayName).join(' | ')

    // Generate data rows with realistic content
    const dataRows = rows.map(row =>
      columns.map(col => this.formatCellContent(row[col.field], col.type))
        .join(' | ')
    )

    return this.renderASCIITable(header, dataRows, columns)
  }

  formatCellContent(value: any, type: string): string {
    switch (type) {
      case 'currency':
        return `$${value.toFixed(2)}`
      case 'percentage':
        return `${value.toFixed(1)}%`
      case 'enum':
        return this.getEnumBadge(value)
      case 'date':
        return new Date(value).toLocaleDateString()
      default:
        return String(value).substring(0, 12) // Truncate for display
    }
  }
}
```

**Domain-Specific Content Libraries**
```typescript
interface DomainContentLibrary {
  azure_cost_optimization: {
    vm_names: ['prod-web-01', 'staging-db-02', 'dev-api-03'],
    resource_groups: ['rg-production', 'rg-staging', 'rg-development'],
    locations: ['eastus', 'westus2', 'centralus'],
    vm_sizes: ['Standard_D4s_v3', 'Standard_D2s_v3', 'Standard_B2s'],
    costs: { min: 50, max: 500, distribution: 'exponential' },
    cpu_ranges: {
      production: { min: 20, max: 80 },
      development: { min: 0, max: 15 },
      staging: { min: 5, max: 30 }
    }
  },

  e_commerce: {
    product_names: ['Laptop Pro 15"', 'Wireless Headphones', 'Gaming Mouse'],
    categories: ['Electronics', 'Clothing', 'Home & Garden', 'Books'],
    prices: { min: 9.99, max: 2999.99, distribution: 'log-normal' },
    ratings: { min: 1.0, max: 5.0, step: 0.1 }
  }
}
```

**Enhanced Table Template with API Data**
```
┌─ Virtual Machines (API: GET /api/v1/vms) ──────────────────────────┐
│ [🔍 Search VMs...] [Resource Group ▼] [Status ▼] [Actions ▼]       │
├─────────────────────────────────────────────────────────────────────┤
│ ☐  Name           RG             Size         Cost/Mo   CPU%   Rec │
│ ├─────────────────────────────────────────────────────────────────┤ │
│ ☐  prod-web-01    rg-production  D4s_v3      $245.50   2.1%  [🗑] │
│ ☐  staging-db-02  rg-staging     D2s_v3      $156.20   8.3%  [⬇] │
│ ☐  dev-api-03     rg-development B2s         $89.40    0.4%  [🗑] │
│ ☐  prod-cache-04  rg-production  E2s_v3      $198.75   45.2% [✅] │
│ ☐  test-worker-05 rg-development B1s         $45.60    0.1%  [🗑] │
│                                                                     │
│ [◀ Prev] Page 1 of 12 [Next ▶] │ Selected: 2 │ [⚡ Optimize All] │
│                                                                     │
│ Real-time sync: ✅ Connected to /api/v1/vms WebSocket              │
└─────────────────────────────────────────────────────────────────────┘

Generated from API Schema:
- Endpoint: GET /api/v1/vms?page=1&limit=20&sort=monthly_cost
- Response: VMListResponse with pagination metadata
- Sample data: 5 of 234 total VMs from API discovery
- Filters: resource_group (enum), status (enum), subscription_id (uuid)
- Actions: optimize (POST), deallocate (DELETE), details (GET /{id})
```

### API Pattern to UI Component Mapping

**CRUD Operations → UI Patterns**
```markdown
GET /resources              → Data Table Component
  - Features: Pagination, sorting, filtering
  - Content: Real sample data from API discovery
  - Interactions: Select, bulk actions, navigation

GET /resources/{id}         → Detail View Component
  - Features: Field display, related data, actions
  - Content: Complete record with all API fields
  - Interactions: Edit, delete, related navigation

POST /resources             → Create Form Component
  - Features: Form fields based on API schema
  - Content: Validation rules from API constraints
  - Interactions: Submit, validate, cancel

PUT/PATCH /resources/{id}   → Edit Form Component
  - Features: Pre-populated form with current data
  - Content: Editable fields based on API permissions
  - Interactions: Save, cancel, field validation

DELETE /resources/{id}      → Confirmation Dialog
  - Features: Warning message, impact preview
  - Content: Record summary and deletion impact
  - Interactions: Confirm, cancel, safety checks
```

**Advanced API Patterns → Specialized UI**
```markdown
GET /search?q=term          → Search Interface
  - Features: Search input, filters, results display
  - Content: Search suggestions and result previews
  - Interactions: Type-ahead, filter application

POST /upload                → File Upload Component
  - Features: Drag-drop area, progress tracking
  - Content: File type restrictions, size limits
  - Interactions: Select files, upload progress

WebSocket /live-updates     → Real-time Dashboard
  - Features: Live data updates, status indicators
  - Content: Streaming data with timestamps
  - Interactions: Pause updates, data refresh

POST /bulk-action          → Bulk Operations Interface
  - Features: Multi-select, action confirmation
  - Content: Operation impact preview
  - Interactions: Select all, confirm, progress
```

### Integration with API Discovery Results

**Enhanced Wireframe Command Integration**
```bash
# Phase 2 enhanced workflow
/ts-design-analyze output/dfo-gui              # UX analysis
/ts-design-api-discover output/dfo-gui         # API discovery
/ts-design-wireframe all --content=api-driven  # API-enhanced wireframes

# The wireframe generator now receives:
- API endpoint catalog with schemas
- Realistic sample data matching API types
- UI pattern suggestions based on endpoint analysis
- Domain-specific content libraries
- Component specifications with API integration points
```

This Phase 2 enhancement transforms wireframes from basic placeholder layouts into realistic, API-driven representations that accurately reflect the final application's data and interactions.