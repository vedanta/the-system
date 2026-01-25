---
# Style Metadata
name: style-name
version: 1.0.0
self_reference: true
canonical_name: style-name
aliases: []
default_style: false

# Origin tracking
created_from: designed|extracted
created_date: 2024-01-24T15:30:00Z
created_by: system-design|user-extract|url-extract
extracted_url: null
last_updated: 2024-01-24T15:30:00Z

# Classification
description: Brief description of the style's appearance and use cases
category: professional|enterprise|modern|fintech|minimal|creative
subcategory: balanced|dense|clean|etc
tags: [tag1, tag2, tag3]
domain_optimized: [domain1, domain2, domain3]

# Technical specifications
css_framework: tailwind|bootstrap|custom
js_framework: alpinejs|vanilla|react|vue
icon_library: fontawesome|heroicons|custom
font_stack: system|custom|google
base_font_size: 14px
layout_type: flexible|sidebar|topnav|grid
responsive_strategy: mobile-first|desktop-first

# Complexity metrics
information_density: low|medium|high
visual_complexity: low|medium|high
interaction_complexity: low|medium|high
component_count: number
---

# Style Name

**Self-Name:** style-name
**Best For:** List of ideal use cases
**Information Density:** Density level description
**Theme:** Light/dark/adaptive theme information

## Design Philosophy

- Core design principle 1
- Core design principle 2
- Core design principle 3
- Target user experience goals

## Technical Implementation

- **CSS Framework:** Framework and version
- **JavaScript Framework:** Framework and version
- **Icon Library:** Icon system used
- **Font Strategy:** Font loading and fallback approach
- **Base Font Size:** Typography foundation
- **Layout Approach:** Navigation and content structure

## Color System

```css
:root {
  /* Primary Colors */
  --primary: #color;
  --primary-50: #color;
  --primary-100: #color;
  --primary-500: #color;
  --primary-600: #color;
  --primary-700: #color;
  --primary-900: #color;

  /* Neutral Colors */
  --gray-50: #color;
  --gray-100: #color;
  --gray-200: #color;
  --gray-300: #color;
  --gray-400: #color;
  --gray-500: #color;
  --gray-600: #color;
  --gray-700: #color;
  --gray-800: #color;
  --gray-900: #color;

  /* Semantic Colors */
  --success: #color;
  --success-50: #color;
  --success-100: #color;
  --warning: #color;
  --warning-50: #color;
  --warning-100: #color;
  --danger: #color;
  --danger-50: #color;
  --danger-100: #color;

  /* Surface Colors */
  --background: #color;
  --surface: #color;
  --surface-elevated: #color;
  --border: #color;
  --border-focus: #color;
}
```

## Typography System

```css
/* Font Configuration */
--font-family-base: font-stack;
--font-family-mono: mono-font-stack;

/* Font Sizes */
--font-size-xs: 0.75rem;
--font-size-sm: 0.875rem;
--font-size-base: 1rem;
--font-size-lg: 1.125rem;
--font-size-xl: 1.25rem;
--font-size-2xl: 1.5rem;
--font-size-3xl: 1.875rem;

/* Line Heights */
--line-height-tight: 1.25;
--line-height-normal: 1.5;
--line-height-relaxed: 1.625;

/* Font Weights */
--font-weight-normal: 400;
--font-weight-medium: 500;
--font-weight-semibold: 600;
--font-weight-bold: 700;
```

## Layout Patterns

### Navigation
- **Type:** Sidebar/topbar/mobile description
- **Structure:** Navigation organization approach
- **Responsive Behavior:** How navigation adapts to screen sizes

### Content Areas
- **Grid System:** Layout grid and container approach
- **Spacing:** Consistent spacing scale and application
- **Card System:** Card styling and content organization

### Information Hierarchy
- **Density:** Information layout density approach
- **Grouping:** Content grouping and section organization
- **Emphasis:** Visual hierarchy and attention management

## Component Catalog

### Buttons
```html
<!-- Primary Button -->
<button class="btn-primary">Primary Action</button>

<!-- Secondary Button -->
<button class="btn-secondary">Secondary Action</button>

<!-- Danger Button -->
<button class="btn-danger">Delete Action</button>
```

### Forms
```html
<!-- Input Field -->
<div class="form-group">
  <label class="form-label">Label</label>
  <input class="form-input" type="text" placeholder="Placeholder">
</div>

<!-- Select Field -->
<div class="form-group">
  <label class="form-label">Label</label>
  <select class="form-select">
    <option>Option 1</option>
  </select>
</div>
```

### Cards
```html
<!-- Basic Card -->
<div class="card">
  <div class="card-header">
    <h3>Card Title</h3>
  </div>
  <div class="card-body">
    Card content
  </div>
</div>

<!-- Metric Card -->
<div class="card metric-card">
  <div class="metric-value">1,234</div>
  <div class="metric-label">Active Users</div>
</div>
```

### Tables
```html
<!-- Data Table -->
<table class="table">
  <thead class="table-header">
    <tr>
      <th>Column 1</th>
      <th>Column 2</th>
    </tr>
  </thead>
  <tbody>
    <tr class="table-row">
      <td>Data 1</td>
      <td>Data 2</td>
    </tr>
  </tbody>
</table>
```

### Navigation
```html
<!-- Sidebar Navigation -->
<nav class="sidebar">
  <div class="sidebar-header">
    <h1>App Name</h1>
  </div>
  <div class="sidebar-nav">
    <a href="#" class="nav-item active">Dashboard</a>
    <a href="#" class="nav-item">Settings</a>
  </div>
</nav>
```

## Responsive Strategy

### Breakpoints
- **Mobile:** 0-767px
- **Tablet:** 768-1023px
- **Desktop:** 1024px+

### Responsive Patterns
- **Navigation:** How navigation adapts across breakpoints
- **Content:** Content reflow and reorganization strategy
- **Typography:** Font size and spacing adjustments

## Accessibility Features

### Color Accessibility
- **Contrast Ratios:** WCAG compliance details
- **Color Blindness:** Alternative indicators beyond color

### Keyboard Navigation
- **Focus Management:** Focus indicator styling
- **Tab Order:** Logical navigation flow

### Screen Reader Support
- **ARIA Labels:** Semantic markup approach
- **Content Structure:** Heading hierarchy and landmarks

## Usage Guidelines

### Best Practices
- When to use this style
- Ideal project types and domains
- Component combination guidelines

### Customization Notes
- Safe customization points
- Discouraged modifications
- Extension patterns

### Integration Notes
- Framework-specific setup instructions
- Required dependencies and setup
- Performance considerations

## Implementation Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Style Example</title>
    <script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        /* Style-specific CSS here */
    </style>
</head>
<body>
    <!-- Example implementation -->
</body>
</html>
```

## Version History

### Version 1.0.0
- Initial style creation
- Basic component set
- Core design principles established

### Future Versions
- Planned improvements
- Feature additions
- Breaking changes