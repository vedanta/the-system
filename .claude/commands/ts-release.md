# Create Release Package: $ARGUMENTS

Engage the Release Engineer to create a production-ready release package.

## Process

1. Read the active project file from `.claude/pipeline/projects/`

2. Gate Check:
   - Verify Security validation completed
   - Security status must be PASS or CONDITIONAL
   - If FAIL: "⛔ Security issues must be resolved before release"

3. Use the **release-engineer** subagent to:
   - Determine version (semantic versioning)
   - Generate CHANGELOG.md
   - Create RELEASE_NOTES.md
   - Build release manifest
   - Configure production Docker Compose
   - Generate checksums
   - Create git tag

4. Output location:
   ```
   output/[project]/
   └── release/
       ├── VERSION
       ├── CHANGELOG.md
       ├── RELEASE_NOTES.md
       ├── manifest.json
       └── artifacts/
           ├── docker-compose.prod.yml
           └── checksums.txt
   ```

5. When complete:
   - Update project file with release version
   - Add to Audit Log: "Release Engineer: v[X.Y.Z] packaged"
   - Set status to `RELEASE_PACKAGED`
   - Prompt: "📦 Release v[X.Y.Z] packaged. Run `/ts-infra` to generate infrastructure."
