# Design Styles Management: $ARGUMENTS

Manage Design Department style library - list, view, delete, and get style recommendations.

## Usage

```bash
# List all styles
/ts-design-styles --list

# Show style details
/ts-design-styles --show="enterprise-console"

# Search styles by category
/ts-design-styles --category="enterprise"

# Search by tags
/ts-design-styles --tags="dashboard,minimal"

# Get recommendations for domain
/ts-design-styles --recommend="fintech"

# Delete a style
/ts-design-styles --delete="old-style"

# Clone/duplicate a style
/ts-design-styles --clone="enterprise-console" --new-name="enterprise-dark"

# Set default style
/ts-design-styles --set-default="modern-professional"

# Validate style library
/ts-design-styles --validate

# Show help
/ts-design-styles --help
```

## Commands and Arguments

### Core Management Commands

#### --list
Lists all available styles with basic metadata:
```
╔══════════════════════════════════════════════════════════════════╗
║  📋 STYLE LIBRARY (5 styles)                                    ║
╠══════════════════════════════════════════════════════════════════╣
║  modern-professional [DEFAULT]                                   ║
║  └─ Professional balanced interface for most applications        ║
║  └─ Category: professional | Tags: default, versatile           ║
║  └─ Created: 2024-01-24 | Usage: 0 | Rating: N/A               ║
║                                                                  ║
║  enterprise-console                                              ║
║  └─ Information-dense management console                        ║
║  └─ Category: enterprise | Tags: dashboard, admin, dense        ║
║  └─ Created: 2024-01-24 | Usage: 5 | Rating: 4.8/5            ║
╚══════════════════════════════════════════════════════════════════╝
```

#### --show="style-name"
Shows detailed information about a specific style:
```
╔══════════════════════════════════════════════════════════════════╗
║  🎨 STYLE DETAILS: enterprise-console                           ║
╠══════════════════════════════════════════════════════════════════╣
║  Description: Information-dense management console               ║
║  Category: enterprise | Version: 1.2.0                         ║
║  Created: 2024-01-24 | Last Updated: 2024-01-24                ║
║  Usage Count: 5 | Success Rating: 4.8/5                        ║
║                                                                  ║
║  Technical Specifications:                                       ║
║  • CSS Framework: Tailwind CSS                                  ║
║  • JS Framework: Alpine.js                                      ║
║  • Base Font Size: 13px                                         ║
║  • Layout Type: sidebar                                          ║
║  • Information Density: high                                    ║
║                                                                  ║
║  Domain Optimization:                                            ║
║  • Fintech: 9.2/10                                             ║
║  • DevOps: 8.8/10                                              ║
║  • Admin: 9.0/10                                               ║
║                                                                  ║
║  Tags: dashboard, admin, dense, sidebar                         ║
║  Components: 15 templates available                             ║
║  Accessibility: WCAG 2.1 AA compliant                          ║
╚══════════════════════════════════════════════════════════════════╝
```

### Search and Discovery Commands

#### --category="category-name"
Lists styles in specific category:
```bash
/ts-design-styles --category="enterprise"
# Returns: enterprise-console, corporate-clean, admin-dashboard

/ts-design-styles --category="modern"
# Returns: modern-minimal, startup-fresh, contemporary-clean
```

#### --tags="tag1,tag2"
Searches styles by tags (supports multiple tags with AND logic):
```bash
/ts-design-styles --tags="dashboard"
# Returns all styles tagged with "dashboard"

/ts-design-styles --tags="dashboard,minimal"
# Returns styles tagged with BOTH "dashboard" AND "minimal"
```

#### --recommend="domain"
Provides style recommendations for specific domain:
```
╔══════════════════════════════════════════════════════════════════╗
║  💡 RECOMMENDATIONS FOR: fintech                                 ║
╠══════════════════════════════════════════════════════════════════╣
║  1. enterprise-console (Score: 9.2/10)                          ║
║     └─ Information-dense layout ideal for trading platforms     ║
║     └─ High data density, professional appearance               ║
║                                                                  ║
║  2. fintech-professional (Score: 8.8/10)                        ║
║     └─ Financial services optimized design patterns             ║
║     └─ Compliance-ready, secure appearance                      ║
║                                                                  ║
║  3. modern-professional (Score: 8.0/10)                         ║
║     └─ Clean professional interface                             ║
║     └─ Good fallback for general business applications          ║
╚══════════════════════════════════════════════════════════════════╝
```

### Style Management Commands

#### --delete="style-name"
Removes style from library:
```
⚠️  DELETE STYLE: enterprise-old
This will permanently remove:
- Style definition file (.claude/styles/enterprise-old.md)
- Component templates (15 templates)
- Registry entries and references

Are you sure? (y/N): y

✅ Style 'enterprise-old' deleted successfully
✅ Registry updated
✅ Template files cleaned up
```

#### --clone="source" --new-name="target"
Duplicates existing style:
```bash
/ts-design-styles --clone="modern-professional" --new-name="modern-dark"

✅ Style cloned successfully
📁 Created: modern-dark.md
📋 Registry updated
🔄 Ready for customization
```

#### --set-default="style-name"
Sets a style as the system default:
```bash
/ts-design-styles --set-default="modern-professional"

✅ Default style updated
📋 Registry updated
🎨 'modern-professional' is now the system default
ℹ️  This affects all /ts-design-turbo commands without --style parameter
```

### Maintenance Commands

#### --validate
Validates style library integrity:
```
╔══════════════════════════════════════════════════════════════════╗
║  🔍 STYLE LIBRARY VALIDATION                                     ║
╠══════════════════════════════════════════════════════════════════╣
║  Registry Status: ✅ Valid                                       ║
║  Style Files: ✅ All 5 files found                              ║
║  Templates: ✅ All template files accessible                     ║
║  Default Style: ✅ 'modern-professional' exists                 ║
║  Categories: ✅ All category assignments valid                   ║
║  Recommendations: ✅ All recommended styles exist               ║
║                                                                  ║
║  Issues Found: 0                                                 ║
║  Orphaned Files: 0                                              ║
║  Broken References: 0                                            ║
╚══════════════════════════════════════════════════════════════════╝
```

## Process Implementation

### Phase 1: Command Processing

#### Step 1: Command Parsing and Validation
```
╔══════════════════════════════════════════════════════════════════╗
║  📋 STYLES MANAGEMENT                                            ║
╠══════════════════════════════════════════════════════════════════╣
║  Command: [list|show|search|recommend|delete|clone|validate]     ║
║  Parameters: [style-name, filters, options]                     ║
║  Mode: [view|modify|maintenance]                                 ║
╚══════════════════════════════════════════════════════════════════╝
```

1. **Parse Command Arguments**
   - Identify primary command (list, show, recommend, etc.)
   - Extract required parameters (style names, search criteria)
   - Validate parameter formats and requirements
   - Set command execution mode and context

2. **Validate Access and Permissions**
   - Check style library exists and is accessible
   - Validate registry file integrity
   - Ensure write permissions for modification commands
   - Handle read-only mode gracefully if needed

3. **Initialize Registry Manager**
   ```
   Agent: style-registry-manager
   Mode: [query|modify|maintenance]
   Input: {
     command: [parsed-command],
     parameters: [validated-parameters],
     context: [execution-context]
   }
   ```

### Phase 2: Command Execution

#### Step 2: Execute Primary Command Logic

**For Listing and Search Commands:**
```
[Query Mode] 🔍 Searching Style Library...
├── Loading registry and style definitions
├── Applying search filters and criteria
├── Sorting results by relevance and rating
└── Formatting output for display
```

1. **Load Registry and Style Data**
   - Read central registry from `.claude/styles/registry.json`
   - Load style definition files as needed
   - Build comprehensive style index for searching
   - Cache frequently accessed data for performance

2. **Apply Search Criteria and Filters**
   - Filter by category, tags, domain, or other criteria
   - Calculate relevance scores for search results
   - Sort results by rating, usage, or relevance
   - Paginate results if library is large

3. **Format and Display Results**
   - Generate formatted output tables and summaries
   - Include relevant metadata and statistics
   - Provide actionable next steps and related commands
   - Handle empty results with helpful suggestions

**For Recommendation Commands:**
```
[Recommendation] 💡 Generating Domain Recommendations...
├── Analyzing domain requirements and context
├── Scoring all styles for domain compatibility
├── Ranking styles by success metrics and fit
└── Generating recommendation explanations
```

1. **Analyze Domain Requirements**
   - Look up domain-specific requirements and conventions
   - Consider typical use cases and design patterns
   - Factor in technical constraints and user expectations
   - Weight criteria based on domain importance

2. **Score and Rank All Available Styles**
   - Calculate domain compatibility scores
   - Consider historical success metrics
   - Weight by style quality and completeness
   - Apply preference learning from past usage

3. **Generate Recommendations with Explanations**
   - Select top 3-5 recommended styles
   - Generate human-readable explanations for each recommendation
   - Include confidence scores and alternative options
   - Provide usage guidance and next steps

**For Management Commands:**
```
[Management] ⚙️ Executing Style Management Operation...
├── Validating operation safety and requirements
├── Creating backups for destructive operations
├── Executing requested changes with validation
└── Updating registry and cleaning up references
```

1. **Validate Operation Requirements**
   - Check style exists (for delete, clone, show operations)
   - Validate naming conventions (for clone operations)
   - Ensure no conflicts or dependencies
   - Confirm user intent for destructive operations

2. **Execute Core Operation Logic**
   - **Delete**: Remove files, clean registry, update references
   - **Clone**: Copy files, generate new metadata, register new style
   - **Set Default**: Update registry default, validate style exists
   - **Validate**: Check integrity, find issues, suggest fixes

3. **Update Registry and Maintain Consistency**
   - Save updated registry with proper versioning
   - Clean up orphaned files and broken references
   - Update category and recommendation indexes
   - Verify operation completed successfully

### Phase 3: Results and Feedback

#### Step 3: Generate Results and User Feedback
```
[Results] ✅ Operation Complete!
├── Displaying formatted results and summaries
├── Providing actionable next steps and recommendations
├── Logging operation for usage analytics
└── Suggesting related commands and workflows
```

1. **Format Results for Display**
   - Generate appropriate visual formatting (tables, boxes)
   - Include relevant metadata and context
   - Highlight important information and warnings
   - Provide clear success/failure indicators

2. **Provide Actionable Next Steps**
   - Suggest logical follow-up commands
   - Provide usage examples for discovered styles
   - Include integration guidance for design workflows
   - Offer related style management operations

3. **Update Usage Analytics**
   - Log command usage for analytics and improvement
   - Track search patterns and popular styles
   - Update style success metrics and ratings
   - Record performance data for optimization

## Error Handling and Recovery

### Common Error Scenarios

#### Style Not Found
```bash
Error: Style 'nonexistent-style' not found in library

Available styles:
• modern-professional (default)
• enterprise-console
• modern-minimal

Suggestion: Use /ts-design-styles --list to see all available styles
```

#### Registry Corruption
```bash
Warning: Style registry appears corrupted
Attempting automatic recovery...

✅ Registry recovered from backup
⚠️  Some style metadata may have been lost
📋 Consider running /ts-design-styles --validate to verify integrity
```

#### Permission Issues
```bash
Error: Cannot write to style library directory
Cause: Insufficient permissions for .claude/styles/

Suggestion: Check file permissions or run with appropriate access rights
```

#### Dependency Conflicts
```bash
Warning: Cannot delete 'enterprise-console'
Reason: Style is set as domain default for 'fintech'

To proceed:
1. Set different domain default: /ts-design-styles --recommend="fintech"
2. Then retry deletion: /ts-design-styles --delete="enterprise-console"
```

### Recovery Strategies

#### Registry Backup and Recovery
- Automatic backup before destructive operations
- Rollback capability for failed operations
- Registry reconstruction from style files
- Validation and repair utilities

#### File System Issues
- Graceful handling of missing files
- Automatic cleanup of orphaned references
- Fallback to minimal functionality if registry unavailable
- Clear error messages with recovery instructions

## Integration with Other Commands

### With Style Extraction
```bash
# Extract and immediately review
/ts-style-extract input/project --name="new-style"
/ts-design-styles --show="new-style"

# Extract and set as default
/ts-style-extract --create-default="balanced-professional"
/ts-design-styles --set-default="balanced-professional"
```

### With Design Generation
```bash
# Find appropriate style for project
/ts-design-styles --recommend="healthcare"
/ts-design-turbo input/medical-app --style="clinical-clean"

# Clone and customize style
/ts-design-styles --clone="modern-professional" --new-name="medical-professional"
# Customize medical-professional.md manually
/ts-design-turbo input/medical-app --style="medical-professional"
```

### With Framework Management
```bash
# Validate style library before major framework updates
/ts-design-styles --validate
# List styles by technical requirements
/ts-design-styles --show="enterprise-console" # Check technical specs
```

## Performance Optimization

### Caching and Indexing
- **Registry Caching**: Keep registry in memory for repeated access
- **Search Indexing**: Pre-compute search indexes for tags and categories
- **Lazy Loading**: Load style definitions only when needed
- **Result Caching**: Cache recommendation results with TTL

### Large Library Handling
- **Pagination**: Display large style lists in manageable chunks
- **Filtering**: Allow progressive filtering to narrow results
- **Partial Loading**: Load only necessary metadata for list operations
- **Background Processing**: Perform validation and maintenance asynchronously

## Success Metrics

### Command Performance
- **Response Time**: All operations complete within 5 seconds
- **Search Accuracy**: 95%+ relevant results for search operations
- **User Satisfaction**: Clear, actionable output for all commands
- **Error Recovery**: Graceful handling of all error conditions

### Library Management
- **Registry Integrity**: 99.9% uptime and data consistency
- **Recommendation Quality**: High user adoption of recommended styles
- **Usage Analytics**: Clear insights into style popularity and success
- **Maintenance Efficiency**: Automated maintenance with minimal user intervention

This command establishes comprehensive style library management capabilities that enable users to effectively organize, discover, and utilize their growing collection of design patterns and style definitions.