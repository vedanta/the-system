# Interactive Prototype Generation: $ARGUMENTS

Generate interactive HTML prototypes from wireframes and API analysis for stakeholder review and user testing.

## Usage

```bash
/ts-design-prototype [scope] [--fidelity=medium]
/ts-design-prototype [scope] --fidelity=low
/ts-design-prototype [scope] --fidelity=high --analytics
/ts-design-prototype [scope] --review-server
/ts-design-prototype [scope] --mobile --fidelity=medium
/ts-design-prototype [scope] --desktop --analytics --save-interactions
/ts-design-prototype --serve-existing
/ts-design-prototype --list-prototypes
/ts-design-prototype --help
```

## Purpose

Transform wireframes and API analysis into interactive HTML prototypes that stakeholders can browse, click through, and test. These prototypes bridge the gap between static wireframes and full implementation, enabling rapid feedback cycles and user validation before development begins.

## Arguments

- **scope**: Component name, page name, or "all" for complete application (defaults to "all")
- **--fidelity**: Prototype fidelity level - low, medium, or high (default: medium)
  - **low**: Basic HTML structure, minimal styling, core interactions only
  - **medium**: Professional styling, full interactivity, realistic data (default)
  - **high**: Pixel-perfect design, animations, advanced interactions, analytics
- **--mobile**: Generate mobile-optimized prototypes (375px width)
- **--desktop**: Generate desktop prototypes (1200px width, default)
- **--tablet**: Generate tablet prototypes (768px width)
- **--analytics**: Enable interaction analytics and user behavior tracking
- **--save-interactions**: Save user interactions to JSON for analysis
- **--review-server**: Start local review server for browsing prototypes
- **--port**: Custom port for review server (default: 8080)
- **--public**: Make review server accessible from network (default: localhost only)
- **--save-to**: Custom output directory for prototypes

## Examples

```bash
# Generate medium-fidelity prototype for entire application
/ts-design-prototype all

# Generate high-fidelity prototype with analytics for specific component
/ts-design-prototype VMDataTable --fidelity=high --analytics

# Generate mobile prototype with interaction tracking
/ts-design-prototype dashboard --mobile --save-interactions

# Generate prototype and immediately start review server
/ts-design-prototype all --fidelity=medium --review-server

# Start review server for existing prototypes
/ts-design-prototype --serve-existing --port=8080

# Generate low-fidelity prototype for rapid iteration
/ts-design-prototype login-flow --fidelity=low

# High-fidelity prototype with network access for stakeholder review
/ts-design-prototype all --fidelity=high --review-server --public --analytics

# List all available prototypes
/ts-design-prototype --list-prototypes
```

## Prerequisites

This command requires prior analysis from `/ts-design-analyze` and `/ts-design-wireframe`. For enhanced prototypes with realistic data, run `/ts-design-api-discover` first.

**Optimal Phase 3 Workflow:**
```bash
# Complete Design Department pipeline
/ts-design-analyze output/dfo-gui              # UX analysis
/ts-design-api-discover output/dfo-gui         # API discovery
/ts-design-wireframe all --content=api-driven  # Enhanced wireframes
/ts-design-prototype all --fidelity=medium     # Interactive prototypes
```

**Automatic prerequisite handling:**
```bash
# Missing analysis - automatically runs prerequisites
Analysis not found for current project
Running /ts-design-analyze automatically...
✅ Analysis complete

Wireframes not found for current project
Running /ts-design-wireframe automatically...
✅ Wireframes complete, proceeding with prototype generation
```

## Process

### Phase 1: Validation and Setup
1. **Input Validation**
   - Verify wireframes exist from `/ts-design-wireframe`
   - Load component analysis from `/ts-design-analyze`
   - Check for API discovery results from `/ts-design-api-discover` (optional)
   - Validate fidelity level and responsive requirements
   - Ensure output directory is writable

2. **Prototype Planning**
   - Determine component scope and dependencies
   - Select appropriate prototype templates based on fidelity level
   - Plan responsive breakpoint implementations
   - Configure analytics and interaction tracking if requested
   - Prepare mock data sources and API simulation

### Phase 2: Component Analysis and Preparation
3. **Component Dependency Mapping**
   ```
   Analysis Process:
   1. Parse wireframe specifications and component trees
   2. Identify interactive elements and their behaviors
   3. Map API endpoints to component data requirements
   4. Determine navigation flow and page relationships
   5. Plan state management and data sharing patterns
   ```

4. **Interactive Specification Generation**
   ```
   For Each Component:
   - Extract interactive elements (buttons, forms, tables, modals)
   - Define click behaviors and state transitions
   - Map data sources (API endpoints or mock data)
   - Specify animations and micro-interactions
   - Plan responsive behavior patterns
   ```

### Phase 3: Prototype Generation
5. **Launch Prototype Developer Agent**
   ```
   Agent: prototype-developer
   Input: {
     scope: [component-name/all],
     fidelity: [low/medium/high],
     breakpoint: [mobile/tablet/desktop],
     wireframes: [wireframe-specifications],
     apiAnalysis: [api-discovery-results],
     analytics: true/false,
     saveInteractions: true/false,
     components: [filtered-component-list],
     mockData: [realistic-sample-data]
   }
   ```

6. **Template Selection and Generation**
   ```
   Fidelity-Based Template Selection:

   Low Fidelity (1-2 hours):
   - Basic HTML5 semantic structure
   - Minimal CSS (system fonts, basic spacing)
   - Simple JavaScript for core interactions
   - Placeholder content and basic forms

   Medium Fidelity (2-4 hours):
   - Professional HTML structure with accessibility
   - Tailwind CSS for polished styling
   - Alpine.js for reactive components
   - Realistic data and full interaction patterns

   High Fidelity (4-8 hours):
   - Pixel-perfect HTML with advanced semantic markup
   - Custom CSS with animations and transitions
   - Advanced Alpine.js with complex state management
   - Full analytics integration and interaction tracking
   - Cross-browser compatibility testing
   ```

### Phase 4: Interactive Component Implementation
7. **Core Component Generation**
   ```javascript
   // Example: Medium-fidelity VM data table prototype
   <div x-data="vmDataTable()" class="bg-white shadow-lg rounded-lg overflow-hidden">
     <div class="px-6 py-4 border-b border-gray-200">
       <div class="flex justify-between items-center">
         <h3 class="text-lg font-medium text-gray-900">Virtual Machines</h3>
         <div class="flex space-x-2">
           <input x-model="searchTerm" placeholder="Search VMs..."
                  class="px-3 py-1 border rounded-md text-sm">
           <select x-model="resourceGroupFilter" class="px-3 py-1 border rounded-md text-sm">
             <option value="">All Resource Groups</option>
             <option value="rg-production">Production</option>
             <option value="rg-development">Development</option>
           </select>
         </div>
       </div>
     </div>

     <div class="overflow-x-auto">
       <table class="min-w-full divide-y divide-gray-200">
         <thead class="bg-gray-50">
           <tr>
             <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
               <button @click="sortBy('name')" class="flex items-center space-x-1">
                 <span>VM Name</span>
                 <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                   <path d="M5 8l5-5 5 5H5z"/><path d="M5 12l5 5 5-5H5z"/>
                 </svg>
               </button>
             </th>
             <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
               Resource Group
             </th>
             <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
               <button @click="sortBy('cost')" class="flex items-center space-x-1">
                 <span>Monthly Cost</span>
                 <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                   <path d="M5 8l5-5 5 5H5z"/><path d="M5 12l5 5 5-5H5z"/>
                 </svg>
               </button>
             </th>
             <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">CPU Usage</th>
             <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
           </tr>
         </thead>
         <tbody class="bg-white divide-y divide-gray-200">
           <template x-for="vm in filteredVMs" :key="vm.id">
             <tr class="hover:bg-gray-50" @click="selectVM(vm)">
               <td class="px-6 py-4 whitespace-nowrap">
                 <div class="flex items-center">
                   <div class="w-2 h-2 rounded-full mr-2"
                        :class="vm.status === 'running' ? 'bg-green-400' : 'bg-red-400'">
                   </div>
                   <span class="text-sm font-medium text-gray-900" x-text="vm.name"></span>
                 </div>
               </td>
               <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900" x-text="vm.resourceGroup"></td>
               <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900" x-text="'$' + vm.monthlyCost"></td>
               <td class="px-6 py-4 whitespace-nowrap">
                 <div class="flex items-center">
                   <div class="w-16 bg-gray-200 rounded-full h-2 mr-2">
                     <div class="bg-blue-600 h-2 rounded-full"
                          :style="'width: ' + vm.cpuUtilization + '%'"></div>
                   </div>
                   <span class="text-sm text-gray-900" x-text="vm.cpuUtilization + '%'"></span>
                 </div>
               </td>
               <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                 <button @click.stop="optimizeVM(vm)"
                         class="inline-flex items-center px-3 py-1 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                   Optimize
                 </button>
               </td>
             </tr>
           </template>
         </tbody>
       </table>
     </div>
   </div>
   ```

8. **Mock API Service Implementation**
   ```javascript
   // Realistic API simulation based on discovered endpoints
   class MockAPIService {
     constructor() {
       this.data = window.MOCK_DATA || this.generateMockData()
       this.requestDelay = 150 // Realistic network delay
     }

     async getVMs(params = {}) {
       await this.delay(this.requestDelay)

       let vms = [...this.data.virtualMachines]

       // Apply filters
       if (params.subscription_id) {
         vms = vms.filter(vm => vm.subscription_id === params.subscription_id)
       }
       if (params.resource_group) {
         vms = vms.filter(vm => vm.resource_group === params.resource_group)
       }

       // Apply pagination
       const page = params.page || 1
       const limit = params.limit || 20
       const start = (page - 1) * limit
       const end = start + limit

       return {
         vms: vms.slice(start, end),
         total: vms.length,
         page: page,
         pages: Math.ceil(vms.length / limit)
       }
     }

     async optimizeVM(vmId) {
       await this.delay(800) // Longer delay for optimization

       const vm = this.data.virtualMachines.find(vm => vm.id === vmId)
       if (vm) {
         vm.optimization_status = 'optimizing'
         vm.estimated_savings = Math.floor(vm.monthly_cost * 0.25)
       }

       return { success: true, message: 'Optimization started', vm }
     }

     delay(ms) {
       return new Promise(resolve => setTimeout(resolve, ms))
     }
   }
   ```

### Phase 5: Analytics and Review Integration
9. **Analytics Integration (if enabled)**
   ```javascript
   // Comprehensive interaction tracking
   class PrototypeAnalytics {
     constructor(options = {}) {
       this.enabled = options.analytics || false
       this.saveInteractions = options.saveInteractions || false
       this.interactions = []
       this.sessionData = {
         sessionId: this.generateSessionId(),
         startTime: Date.now(),
         userAgent: navigator.userAgent,
         viewport: { width: window.innerWidth, height: window.innerHeight }
       }

       if (this.enabled) this.initializeTracking()
     }

     track(event, data = {}) {
       if (!this.enabled) return

       const interaction = {
         timestamp: Date.now(),
         event,
         data,
         page: window.location.pathname,
         sessionId: this.sessionData.sessionId
       }

       this.interactions.push(interaction)

       if (this.saveInteractions) {
         this.saveToLocalStorage(interaction)
       }

       // Log to console in development
       if (window.location.hostname === 'localhost') {
         console.log('📊 Analytics:', interaction)
       }
     }

     trackClick(element, customData = {}) {
       this.track('click', {
         element: element.tagName,
         text: element.textContent?.slice(0, 50),
         className: element.className,
         id: element.id,
         ...customData
       })
     }

     trackFormSubmit(formData, formId) {
       this.track('form_submit', {
         formId,
         fieldsCount: Object.keys(formData).length,
         hasValidationErrors: this.hasValidationErrors(formData)
       })
     }

     getAnalyticsReport() {
       return {
         session: this.sessionData,
         interactions: this.interactions,
         summary: {
           totalInteractions: this.interactions.length,
           clicksCount: this.interactions.filter(i => i.event === 'click').length,
           formsSubmitted: this.interactions.filter(i => i.event === 'form_submit').length,
           sessionDuration: Date.now() - this.sessionData.startTime
         }
       }
     }
   }
   ```

10. **Review Server Implementation**
    ```javascript
    // Built-in review server for stakeholder access
    const ReviewServer = {
      start(options = {}) {
        const port = options.port || 8080
        const isPublic = options.public || false

        // Simple HTTP server implementation for prototype review
        this.createIndex(options.prototypes || [])
        this.serveStaticFiles()

        console.log(`🌐 Prototype Review Server running at:`)
        console.log(`   Local: http://localhost:${port}`)
        if (isPublic) {
          console.log(`   Network: http://${this.getLocalIP()}:${port}`)
        }

        return {
          port,
          url: `http://localhost:${port}`,
          networkUrl: isPublic ? `http://${this.getLocalIP()}:${port}` : null
        }
      }

      createIndex(prototypes) {
        // Generate navigation index for all prototypes
        const indexHTML = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Prototype Review - ${this.getProjectName()}</title>
          <script src="https://cdn.tailwindcss.com"></script>
        </head>
        <body class="bg-gray-50">
          <div class="max-w-7xl mx-auto py-12 px-4">
            <h1 class="text-3xl font-bold text-gray-900 mb-8">Prototype Review</h1>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              ${prototypes.map(p => `
                <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div class="p-6">
                    <h3 class="text-lg font-semibold text-gray-900 mb-2">${p.name}</h3>
                    <p class="text-gray-600 mb-4">${p.description}</p>
                    <div class="flex justify-between items-center">
                      <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        ${p.fidelity} fidelity
                      </span>
                      <a href="${p.url}"
                         class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                        View Prototype
                      </a>
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </body>
        </html>`

        return indexHTML
      }
    }
    ```

## Output Structure

### Default Output Location
```
prototypes/
├── index.html                     # Prototype navigation index
├── assets/                        # Shared assets and libraries
│   ├── css/                       # Tailwind CSS and custom styles
│   ├── js/                        # Alpine.js and utility libraries
│   └── data/                      # Mock data files
├── components/                    # Individual component prototypes
│   ├── vm-data-table/
│   │   ├── index.html             # Component prototype page
│   │   ├── data.json              # Mock data for component
│   │   └── analytics.json         # Interaction tracking (if enabled)
│   ├── dashboard/
│   │   ├── index.html
│   │   ├── data.json
│   │   └── styles.css             # Component-specific styles
│   └── filter-panel/
│       ├── index.html
│       └── data.json
├── pages/                         # Full page prototypes
│   ├── dashboard.html
│   ├── vm-management.html
│   └── settings.html
├── mobile/                        # Mobile variants (if generated)
│   ├── dashboard-mobile.html
│   └── vm-table-mobile.html
├── analytics/                     # Analytics and interaction data
│   ├── session-data.json
│   ├── interaction-log.json
│   └── analytics-report.html
└── README.md                      # Prototype documentation
```

### Fidelity-Based Output Examples

#### Low Fidelity Example
```html
<!-- prototypes/components/vm-data-table/index.html (Low Fidelity) -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>VM Data Table - Low Fidelity</title>
    <style>
        body { font-family: -apple-system, sans-serif; padding: 20px; }
        table { border-collapse: collapse; width: 100%; }
        th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
        th { background-color: #f5f5f5; }
        button { padding: 4px 8px; margin: 2px; }
        .search { margin-bottom: 10px; padding: 8px; border: 1px solid #ddd; }
    </style>
</head>
<body>
    <h2>VM Data Table (Low Fidelity)</h2>

    <input type="text" class="search" placeholder="Search VMs..." id="searchInput">
    <select id="filterSelect">
        <option>All Resource Groups</option>
        <option>Production</option>
        <option>Development</option>
    </select>

    <table id="vmTable">
        <thead>
            <tr>
                <th>VM Name</th>
                <th>Resource Group</th>
                <th>Monthly Cost</th>
                <th>CPU %</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>prod-web-01</td>
                <td>rg-production</td>
                <td>$245</td>
                <td>2.1%</td>
                <td><button onclick="alert('Optimize clicked')">Optimize</button></td>
            </tr>
            <tr>
                <td>dev-test-02</td>
                <td>rg-development</td>
                <td>$89</td>
                <td>0.8%</td>
                <td><button onclick="alert('Delete clicked')">Delete</button></td>
            </tr>
            <!-- Additional rows... -->
        </tbody>
    </table>

    <div style="margin-top: 10px;">
        <button onclick="alert('Previous page')">Previous</button>
        Page 1 of 5
        <button onclick="alert('Next page')">Next</button>
    </div>

    <script>
        // Basic interactivity
        document.getElementById('searchInput').addEventListener('input', function() {
            console.log('Search:', this.value)
        })
    </script>
</body>
</html>
```

#### Medium Fidelity Example
```html
<!-- prototypes/components/vm-data-table/index.html (Medium Fidelity) -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>VM Data Table - Medium Fidelity</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js" defer></script>
</head>
<body class="bg-gray-50">
    <div class="max-w-7xl mx-auto py-8 px-4">
        <div x-data="vmDataTable()" class="bg-white shadow-lg rounded-lg overflow-hidden">
            <!-- Complete medium-fidelity implementation as shown above -->
        </div>
    </div>

    <script src="assets/js/vm-data-table.js"></script>
    <script src="assets/js/mock-api.js"></script>
</body>
</html>
```

#### High Fidelity Example
```html
<!-- prototypes/components/vm-data-table/index.html (High Fidelity) -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>VM Data Table - High Fidelity</title>
    <link rel="stylesheet" href="assets/css/custom.css">
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js" defer></script>

    <!-- Advanced features for high fidelity -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/animate.css@4.1.1/animate.min.css">
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

    <style>
        /* Custom animations and micro-interactions */
        .vm-row { transition: all 0.2s ease-in-out; }
        .vm-row:hover { transform: translateY(-1px); box-shadow: 0 4px 12px rgba(0,0,0,0.1); }
        .optimization-indicator { animation: pulse 2s infinite; }

        /* Advanced responsive design */
        @media (max-width: 768px) {
            .vm-table { display: block; overflow-x: auto; }
            .mobile-card { display: block !important; }
        }
    </style>
</head>
<body class="bg-gradient-to-br from-gray-50 to-gray-100">
    <div class="max-w-7xl mx-auto py-8 px-4">
        <div x-data="advancedVMDataTable()"
             x-init="initializeAnalytics()"
             class="bg-white shadow-2xl rounded-xl overflow-hidden border border-gray-200">

            <!-- Advanced header with metrics and actions -->
            <div class="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4 text-white">
                <div class="flex justify-between items-center">
                    <div>
                        <h2 class="text-xl font-bold">Virtual Machine Management</h2>
                        <p class="text-blue-100 text-sm">Monitor and optimize your Azure infrastructure</p>
                    </div>
                    <div class="flex space-x-4 text-sm">
                        <div class="text-center">
                            <div class="text-2xl font-bold" x-text="totalVMs"></div>
                            <div class="text-blue-100">Total VMs</div>
                        </div>
                        <div class="text-center">
                            <div class="text-2xl font-bold text-green-300" x-text="'$' + potentialSavings"></div>
                            <div class="text-blue-100">Potential Savings</div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Advanced filter and search interface -->
            <div class="p-6 bg-gray-50 border-b">
                <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div class="relative">
                        <input x-model="searchTerm"
                               @input="trackSearch($event.target.value)"
                               placeholder="Search VMs..."
                               class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                        <svg class="absolute left-3 top-2.5 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                    </div>

                    <select x-model="resourceGroupFilter" @change="trackFilter('resource_group', $event.target.value)"
                            class="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                        <option value="">All Resource Groups</option>
                        <option value="rg-production">Production</option>
                        <option value="rg-development">Development</option>
                        <option value="rg-staging">Staging</option>
                    </select>

                    <select x-model="statusFilter" @change="trackFilter('status', $event.target.value)"
                            class="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                        <option value="">All Statuses</option>
                        <option value="running">Running</option>
                        <option value="stopped">Stopped</option>
                        <option value="deallocated">Deallocated</option>
                    </select>

                    <div class="flex space-x-2">
                        <button @click="exportData()"
                                @click="trackAction('export')"
                                class="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                            Export
                        </button>
                        <button @click="refreshData()"
                                @click="trackAction('refresh')"
                                class="flex-1 bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors">
                            Refresh
                        </button>
                    </div>
                </div>
            </div>

            <!-- Advanced data table with animations and micro-interactions -->
            <!-- [Implementation continues with sophisticated table, sorting, pagination, etc.] -->

        </div>
    </div>

    <!-- Advanced JavaScript implementation -->
    <script src="assets/js/advanced-vm-table.js"></script>
    <script src="assets/js/prototype-analytics.js"></script>
    <script src="assets/js/mock-api-advanced.js"></script>
</body>
</html>
```

## Integration Points

### Enhanced Design Department Workflow
```bash
# Complete end-to-end workflow
/ts-design-analyze output/dfo-gui              # UX analysis
/ts-design-api-discover output/dfo-gui         # API discovery
/ts-design-wireframe all --content=api-driven  # Enhanced wireframes
/ts-design-prototype all --fidelity=medium     # Interactive prototypes
/ts-design-prototype --review-server           # Stakeholder review
```

### Input from Other Commands
- **ts-design-analyze**: Component inventory, accessibility requirements, layout patterns
- **ts-design-api-discover**: Realistic sample data, API endpoint mappings, TypeScript interfaces
- **ts-design-wireframe**: Layout specifications, component dimensions, interaction patterns

### Output for Development Stage
- **ts-build frontend**: Interactive prototypes serve as implementation reference
- **ts-test integration**: Prototype behavior defines E2E test scenarios
- **ts-docs**: Prototypes included in technical documentation

## Error Handling

### Common Scenarios
```bash
# No wireframes found
Error: No wireframes found for current project
Solution: Run /ts-design-wireframe first, or use --auto-wireframe flag

# Invalid fidelity level
Error: Invalid fidelity level 'ultra' - must be low, medium, or high
Available options: low (basic), medium (default), high (advanced)

# Port already in use
Error: Port 8080 already in use for review server
Solution: Use --port flag to specify different port: --port=8081

# Missing API analysis for high fidelity
Warning: No API analysis found - high fidelity prototypes may have limited interactivity
Consider running /ts-design-api-discover first for enhanced prototypes
```

### Fallback Strategies
```bash
# Alpine.js CDN fails
Warning: Alpine.js CDN unavailable, using local fallback
Prototypes may have reduced interactivity in offline environments

# Tailwind CSS unavailable
Warning: Tailwind CSS unavailable, falling back to basic CSS
Prototypes will use simplified styling but remain functional

# Analytics service fails
Warning: Analytics tracking unavailable, continuing without interaction tracking
Prototypes will function normally but won't capture user behavior data
```

## Performance Considerations

### Optimization Strategies
- **Template Caching**: Cache common component templates for faster generation
- **Asset Optimization**: Minify CSS/JS for high-fidelity prototypes
- **Lazy Loading**: Load complex components on-demand in prototype navigation
- **Mock Data Streaming**: Generate large datasets progressively

### Resource Management
- **Memory Limits**: Stream prototype generation for large applications
- **File Size**: Optimize images and assets for web delivery
- **Network Performance**: Use CDN fallbacks for external dependencies

## Quality Assurance

### Prototype Quality Checks
1. **Functional Completeness**: All interactive elements respond correctly
2. **Visual Accuracy**: Matches wireframe specifications within fidelity constraints
3. **Responsive Design**: Works across specified breakpoints
4. **Accessibility**: Keyboard navigation and screen reader compatibility
5. **Performance**: Loads quickly and responds smoothly
6. **Cross-Browser**: Functions in modern browsers (Chrome, Firefox, Safari, Edge)

### Success Criteria for Phase 3
- ✅ Generates functional HTML prototypes from wireframes and API analysis
- ✅ Supports three distinct fidelity levels with appropriate quality differences
- ✅ Includes realistic data integration from API discovery results
- ✅ Provides built-in review server for stakeholder access
- ✅ Captures interaction analytics for user testing insights
- ✅ Integrates seamlessly with existing Design Department workflow
- ✅ Completes prototype generation for dfo-gui in under 5 minutes

This command completes the Design Department implementation by providing stakeholders with interactive, testable prototypes that bridge the gap between wireframes and full development, enabling rapid iteration and validation before code implementation begins.