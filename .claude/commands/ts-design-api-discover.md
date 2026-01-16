# API Discovery and UI Mapping: $ARGUMENTS

Discover APIs and generate realistic content for UI components based on backend endpoint analysis.

## Usage

```bash
/ts-design-api-discover [project-path]
/ts-design-api-discover [project-path] --framework=fastapi
/ts-design-api-discover [project-path] --openapi=swagger.json
/ts-design-api-discover [project-path] --generate-samples=100
/ts-design-api-discover [project-path] --ui-mapping
/ts-design-api-discover [project-path] --output=json
/ts-design-api-discover --help
```

## Purpose

Discover backend APIs, analyze data schemas, and generate realistic sample data to inform intelligent UI component generation. This command bridges the gap between backend API patterns and frontend UI requirements, enabling content-aware wireframes and prototypes.

## Arguments

- **project-path**: Path to backend source code directory (defaults to current directory)
- **--framework**: Backend framework (fastapi|express|django|auto) - default: auto-detect
- **--openapi**: Path to OpenAPI/Swagger specification file
- **--graphql**: Path to GraphQL schema file
- **--generate-samples**: Number of sample records to generate per endpoint (default: 20)
- **--ui-mapping**: Generate UI component mapping recommendations
- **--domain**: Domain context for realistic content (azure|aws|fintech|ecommerce)
- **--output**: Output format (markdown|json|both) - default: both
- **--save-to**: Custom output directory for API analysis results

## Examples

```bash
# Discover APIs in current backend project
/ts-design-api-discover

# Analyze specific FastAPI project with UI mapping
/ts-design-api-discover output/dfo-gui/src/backend --framework=fastapi --ui-mapping

# Use existing OpenAPI spec for analysis
/ts-design-api-discover my-project --openapi=docs/api-spec.json --generate-samples=50

# Domain-specific content generation for Azure cost optimization
/ts-design-api-discover output/dfo-gui --domain=azure --ui-mapping

# Generate comprehensive analysis with JSON output
/ts-design-api-discover my-api --output=json --generate-samples=100
```

## Prerequisites

This command works best when backend code follows standard patterns:
- **FastAPI**: Route decorators (@app.get, @app.post) with Pydantic models
- **Express**: Router definitions with clear endpoint patterns
- **Django**: REST framework ViewSets and serializers
- **OpenAPI**: Valid OpenAPI 3.0+ specifications

## Process

### Phase 1: Discovery and Framework Detection
1. **Project Analysis**
   - Detect backend framework from file patterns and dependencies
   - Locate API definition files (OpenAPI specs, GraphQL schemas)
   - Identify main application entry points
   - Scan for configuration and routing files

2. **Scope Planning**
   - Estimate number of endpoints to analyze
   - Determine analysis complexity based on schema depth
   - Plan sample data generation strategy
   - Set content domain context

### Phase 2: API Endpoint Discovery
3. **Launch API Discovery Specialist Agent**
   ```
   Agent: api-discovery-specialist
   Input: {
     projectPath: [specified-path],
     framework: [detected/specified],
     openApiSpec: [path-to-spec],
     domainContext: [azure/aws/fintech/etc],
     sampleSize: [number-of-samples],
     generateUIMapping: true/false
   }
   ```

4. **Framework-Specific Route Extraction**
   ```
   FastAPI Discovery:
   - Parse @app.get, @app.post, @app.put, @app.delete decorators
   - Extract Pydantic model definitions
   - Analyze request/response schemas
   - Identify authentication patterns

   Express Discovery:
   - Parse router.get, router.post patterns
   - Extract middleware usage
   - Analyze req/res object patterns
   - Identify validation schemas

   Django Discovery:
   - Parse ViewSets and generic views
   - Extract serializer definitions
   - Analyze URL patterns
   - Identify permission classes
   ```

5. **OpenAPI/GraphQL Schema Analysis**
   - Parse OpenAPI 3.0+ specifications completely
   - Extract all endpoint definitions and parameters
   - Analyze schema references and nested objects
   - Identify authentication and security schemes

### Phase 3: Schema Analysis and Data Modeling
6. **Data Model Extraction**
   - Parse TypeScript interfaces and type definitions
   - Analyze Pydantic models, SQLAlchemy entities
   - Extract field types, constraints, and relationships
   - Build complete data model dependency graph

7. **API Pattern Recognition**
   ```
   CRUD Pattern Detection:
   - GET /resources → List view pattern
   - GET /resources/{id} → Detail view pattern
   - POST /resources → Create form pattern
   - PUT/PATCH /resources/{id} → Edit form pattern
   - DELETE /resources/{id} → Confirmation dialog pattern

   Advanced Pattern Detection:
   - Search endpoints → Filter/search UI patterns
   - Pagination parameters → Paginated table patterns
   - File uploads → File management UI patterns
   - Bulk operations → Multi-select action patterns
   ```

### Phase 4: Content Generation and UI Mapping
8. **Domain-Aware Sample Data Generation**
   ```
   Azure Cost Optimization Domain:
   - VM names: prod-web-01, staging-db-02
   - Resource groups: rg-production, rg-development
   - Costs: Realistic pricing for Azure VM sizes
   - Regions: eastus, westus2, centralus
   - Performance metrics: CPU%, memory%, network usage

   E-commerce Domain:
   - Product names: Realistic product catalog
   - Prices: Market-appropriate pricing
   - Categories: Standard retail categories
   - Customer data: Realistic demographics

   Financial Services Domain:
   - Account numbers: Properly formatted
   - Transaction amounts: Realistic ranges
   - Currency codes: Valid ISO codes
   - Interest rates: Market-appropriate rates
   ```

9. **UI Component Mapping and Recommendations**
   ```
   Endpoint Analysis → Component Suggestions:

   GET /api/vms?page=1&limit=20
   → VMDataTable component
     - Features: Pagination, filtering, sorting
     - Columns: Name, Cost, CPU%, Actions
     - Interactions: Select, bulk actions, detail navigation

   GET /api/vms/{id}
   → VMDetailCard component
     - Features: Detailed metrics, actions, history
     - Layout: Card-based information display
     - Interactions: Edit, delete, optimize

   POST /api/vms/{id}/optimize
   → OptimizationDialog component
     - Features: Action confirmation, progress tracking
     - Layout: Modal dialog with form controls
     - Interactions: Confirm, cancel, progress feedback
   ```

### Phase 5: Output Generation and Integration
10. **Generate API Analysis Artifacts**
    - API inventory with complete endpoint catalog
    - Schema analysis with TypeScript interface mappings
    - Realistic sample data sets for prototyping
    - UI component mapping recommendations
    - Integration guidance for Design Department

11. **Prepare Enhanced Design Inputs**
    - Enhanced component specifications with real data
    - API-driven wireframe generation instructions
    - Prototype development guidance with endpoints
    - Component implementation templates with API hooks

## Output Structure

### Default Output Location
```
[project-path]-api-analysis/
├── api-inventory.json             # Complete API catalog
├── schema-analysis.json           # Data models and relationships
├── sample-data.json               # Generated realistic content
├── ui-requirements.md             # Component mapping recommendations
├── integration-guide.md           # Development integration guidance
└── api-analysis-summary.md        # Executive summary report
```

### API Inventory Example
```json
{
  "discoveredAt": "2024-01-16T15:30:00Z",
  "framework": "fastapi",
  "baseUrl": "/api/v1",
  "totalEndpoints": 12,
  "authenticationMethod": "bearer-token",
  "endpoints": [
    {
      "path": "/api/v1/vms",
      "method": "GET",
      "operationId": "list_virtual_machines",
      "summary": "List virtual machines with pagination and filtering",
      "parameters": [
        {
          "name": "subscription_id",
          "in": "query",
          "type": "string",
          "required": false,
          "description": "Filter by Azure subscription"
        },
        {
          "name": "resource_group",
          "in": "query",
          "type": "string",
          "required": false,
          "description": "Filter by resource group"
        },
        {
          "name": "page",
          "in": "query",
          "type": "integer",
          "default": 1
        },
        {
          "name": "limit",
          "in": "query",
          "type": "integer",
          "default": 20,
          "maximum": 100
        }
      ],
      "response": {
        "type": "object",
        "properties": {
          "vms": {
            "type": "array",
            "items": {"$ref": "#/schemas/VirtualMachine"}
          },
          "total": {"type": "integer"},
          "page": {"type": "integer"},
          "pages": {"type": "integer"}
        }
      },
      "uiPattern": "paginated-data-table",
      "suggestedComponent": {
        "name": "VMDataTable",
        "features": ["pagination", "filtering", "sorting", "bulk-selection"],
        "columns": ["name", "resourceGroup", "monthlyCost", "cpuUtilization", "actions"]
      }
    }
  ]
}
```

### Sample Data Generation
```json
{
  "sampleSets": {
    "virtual_machines": [
      {
        "id": "vm-prod-web-001",
        "name": "prod-web-01",
        "resource_group": "rg-production",
        "subscription_id": "12345678-1234-1234-1234-123456789abc",
        "location": "eastus",
        "vm_size": "Standard_D4s_v3",
        "power_state": "running",
        "monthly_cost": 245.50,
        "cpu_utilization": 2.1,
        "memory_utilization": 15.8,
        "optimization_recommendation": "deallocate",
        "confidence_score": 0.95,
        "created_at": "2024-01-01T08:00:00Z",
        "last_updated": "2024-01-15T14:30:00Z"
      }
      // Additional 19+ realistic entries...
    ]
  },
  "generationRules": {
    "vm_names": "environment-service-number pattern (prod-web-01, dev-db-02)",
    "costs": "realistic Azure pricing based on VM size and environment",
    "utilization": "low for dev/test environments, varied for production",
    "regions": "common Azure regions (eastus, westus2, centralus)"
  }
}
```

### UI Requirements Document
```markdown
# UI Component Requirements: DFO Cost Optimization

## VMDataTable Component
**Source API**: GET /api/v1/vms
**Pattern**: Server-side paginated data table

### Required Features:
1. **Data Display**
   - VM name with link to detail view
   - Resource group with filter dropdown
   - Monthly cost with currency formatting
   - CPU utilization with visual progress bar
   - Optimization recommendation with color-coded badges

2. **Interactions**
   - Column sorting (name, cost, cpu_utilization)
   - Multi-column filtering (resource_group, subscription_id)
   - Row selection (single and multi-select)
   - Bulk actions (optimize selected, export data)

3. **Data Management**
   - Server-side pagination (20 items per page)
   - Real-time updates via WebSocket or polling
   - Loading states during API calls
   - Error handling for network failures

### TypeScript Interface:
```typescript
interface VM {
  id: string
  name: string
  resource_group: string
  monthly_cost: number
  cpu_utilization: number
  optimization_recommendation: 'deallocate' | 'downsize' | 'optimize' | 'maintain'
}

interface VMTableProps {
  onSelectVM: (vm: VM) => void
  onBulkOptimize: (vmIds: string[]) => Promise<void>
  filters?: {
    subscription_id?: string
    resource_group?: string
  }
}
```
```

## Integration Points

### Enhanced Design Department Workflow
```bash
# Complete API-driven design workflow
/ts-design-analyze output/dfo-gui              # UX analysis
/ts-design-api-discover output/dfo-gui         # API discovery and mapping
/ts-design-wireframe all --content=realistic   # Enhanced wireframes with real data
/ts-design-prototype --api-integration         # Interactive prototypes with API calls
```

### Input for Other Design Commands
- **ts-design-wireframe**: Realistic sample data for wireframe content
- **ts-design-prototype**: API endpoints and schemas for interactive functionality
- **ts-design-implement**: TypeScript interfaces and API integration patterns

## Error Handling

### Common Scenarios
```bash
# No backend code found
Error: No API routes or schemas found in 'frontend-only-project'
Suggestion: Ensure path points to backend application directory

# Framework detection failed
Warning: Unable to auto-detect framework, trying generic analysis
Consider using --framework flag to specify: fastapi, express, django

# OpenAPI spec invalid
Error: Invalid OpenAPI specification at 'swagger.json'
ValidationErrors: [detailed schema validation errors]

# No sample data could be generated
Warning: Unable to generate realistic sample data - using generic placeholders
Consider specifying --domain flag for better context-aware generation
```

### Fallback Strategies
```bash
# Framework-specific parsing fails
Falling back to generic file pattern analysis
Searching for common API patterns in Python/JavaScript/TypeScript files

# Schema extraction incomplete
Partial schema analysis completed - some types may use generic placeholders
Manual schema review recommended for complete accuracy

# Domain context missing
Using generic sample data - consider adding --domain flag for industry-specific content
Available domains: azure, aws, fintech, ecommerce, healthcare, education
```

## Performance Considerations

### Large Codebase Optimization
- **Selective Analysis**: Focus on main API files if 100+ endpoints found
- **Schema Caching**: Cache parsed schema results for repeated analysis
- **Parallel Processing**: Process multiple API files simultaneously
- **Progress Reporting**: Show discovery progress for long-running operations

### Sample Data Generation
- **Batch Generation**: Generate sample data in configurable batch sizes
- **Memory Management**: Stream large dataset generation to disk
- **Relationship Consistency**: Maintain foreign key relationships across generated data
- **Realistic Distribution**: Use statistical distributions for more realistic data

## Success Criteria

Phase 2 implementation success is measured by:
- ✅ Discovers FastAPI endpoints in DFO backend with 90%+ accuracy
- ✅ Generates realistic VM cost optimization sample data
- ✅ Maps API endpoints to appropriate UI component patterns
- ✅ Produces TypeScript interfaces compatible with frontend components
- ✅ Integrates with Phase 1 wireframe generation for enhanced content
- ✅ Completes analysis of dfo-gui backend within 1-2 minutes

This command provides the intelligence needed to generate realistic, domain-aware UI components that properly integrate with existing API patterns and data structures.