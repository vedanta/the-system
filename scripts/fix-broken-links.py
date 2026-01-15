#!/usr/bin/env python3
"""
The System - Broken Links Auto-Fixer

Fixes common broken link issues in documentation.
"""

import os
import sys
from pathlib import Path

def fix_quickstart_links():
    """Fix known broken links in QUICKSTART.md"""
    quickstart_path = Path("/Users/vedanta/the-system/QUICKSTART.md")

    if not quickstart_path.exists():
        return False

    content = quickstart_path.read_text()

    # Fix docs/architecture.md link (should point to docs/user/architecture.md)
    content = content.replace(
        '[docs/architecture.md](docs/architecture.md)',
        '[docs/user/architecture.md](docs/user/architecture.md)'
    )

    # Fix any other common link issues
    content = content.replace(
        'docs/architecture.md',
        'docs/user/architecture.md'
    )

    quickstart_path.write_text(content)
    print("✅ Fixed QUICKSTART.md links")
    return True

def create_missing_files():
    """Create any missing documentation files referenced in links"""
    base_path = Path("/Users/vedanta/the-system")

    # Check if docs/user/product-tutorial.md is needed
    product_tutorial_path = base_path / "docs/user/product-tutorial.md"
    if not product_tutorial_path.exists():
        product_tutorial_content = """# Product Planning Tutorial

Learn how to use The System's product planning capabilities.

## Overview

This tutorial covers the Product department (Stage 2) of The System framework.

## What You'll Learn

- How to define MVPs with the Product Lead
- Project planning with the Project Planner
- Business analysis with the Business Analyst

## Prerequisites

- Complete the [Architecture Tutorial](architecture-tutorial.md) first
- Have a project in Stage 1 (Architecture complete)

## Step-by-Step Guide

### 1. Product Lead - MVP Definition

```bash
/ts-product
```

The Product Lead will:
- Analyze your architecture and user requirements
- Define MVP features and user stories
- Create product requirements document (PRD)
- Prioritize features for initial release

### 2. Project Planner - Roadmap Creation

```bash
/ts-plan
```

The Project Planner will:
- Break down features into development sprints
- Estimate development effort
- Create detailed project roadmap
- Set milestone targets

### 3. Business Analyst - Market Analysis

```bash
/ts-analyze
```

The Business Analyst will:
- Research market opportunities
- Define revenue model
- Create go-to-market strategy
- Validate business assumptions

## Next Steps

After completing product planning:

1. Review all outputs: `/ts-review product`
2. Approve to proceed: `/ts-approve green-light`
3. Move to development: [Development Tutorial](workflow.md#development-stage)

## Common Issues

- **MVP too large**: Product Lead will help scope appropriately
- **Timeline concerns**: Project Planner provides realistic estimates
- **Market validation**: Business Analyst provides competitive research

## Help

- `/ts-help product` - Product planning commands
- `/ts-status` - Check current stage progress
- [Complete Workflow Guide](workflow.md) - Full framework workflow
"""
        product_tutorial_path.parent.mkdir(parents=True, exist_ok=True)
        product_tutorial_path.write_text(product_tutorial_content)
        print("✅ Created missing docs/user/product-tutorial.md")

def main():
    """Fix broken links and create missing files"""
    print("🔗 Fixing broken links...")

    # Fix quickstart links
    fix_quickstart_links()

    # Create missing files
    create_missing_files()

    print("✅ Link fixes complete")
    return 0

if __name__ == '__main__':
    sys.exit(main())