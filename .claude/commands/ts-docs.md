# Generate Documentation: $ARGUMENTS

Engage the Technical Writer to create all project documentation.

## Process

1. Read the active project file from `.claude/pipeline/projects/`

2. Gate Check:
   - Verify Development is approved (Stage 3 complete)
   - If not: "⛔ Development must be approved before documentation"

3. Use the **technical-writer** subagent to create:
   - Technical Architecture Document
   - Implementation Architecture Document
   - Data Architecture Document
   - Deployment Guide
   - User Guide
   - Developer Guide
   - API Reference
   - Runbooks
   - README.md
   - CONTRIBUTING.md

4. Output location:
   ```
   output/[project]/
   ├── docs/
   │   ├── architecture/
   │   │   ├── TECHNICAL_ARCHITECTURE.md
   │   │   ├── IMPLEMENTATION_ARCHITECTURE.md
   │   │   ├── DATA_ARCHITECTURE.md
   │   │   └── diagrams/
   │   ├── guides/
   │   │   ├── DEPLOYMENT_GUIDE.md
   │   │   ├── USER_GUIDE.md
   │   │   ├── DEVELOPER_GUIDE.md
   │   │   └── API_REFERENCE.md
   │   └── operations/
   │       ├── runbooks/
   │       └── MONITORING.md
   ├── README.md
   ├── CONTRIBUTING.md
   └── LICENSE
   ```

5. When complete:
   - Update project file with documentation status
   - Add to Audit Log
   - Prompt: "📝 Documentation complete. Run `/ts-security` for security validation."
