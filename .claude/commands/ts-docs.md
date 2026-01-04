# Generate Documentation: $ARGUMENTS

Engage the Technical Writer to create project documentation with intelligent mode selection.

## Usage

```bash
/ts-docs                    # Use intelligent defaults
/ts-docs --lean            # Force lean documentation (2-3 min)
/ts-docs --full            # Force comprehensive documentation (20-30 min)
/ts-docs --docs=lean       # Alternative lean flag syntax
/ts-docs --docs=full       # Alternative full flag syntax
```

## Documentation Modes

**Lean Mode (2-3 minutes):**
- Essential documentation only (README, DEPLOYMENT, API)
- Rapid development and prototyping
- Turbo mode default

**Full Mode (20-30 minutes):**
- Comprehensive documentation suite
- Production systems and team collaboration
- Complete architecture, guides, and operations docs

## Process

1. **Documentation Mode Detection:**
   - Parse command arguments for documentation mode flags
   - Support flags: --lean, --full, --docs=lean, --docs=full
   - Record selected mode in project handoff notes for technical-writer agent
   - If no explicit flag provided, technical-writer will use intelligent defaults

2. Read the active project file from `.claude/pipeline/projects/`

3. **Flag Processing and Handoff:**
   - If --lean or --docs=lean detected: Add "Override Flags: --docs=lean" to project handoff notes
   - If --full or --docs=full detected: Add "Override Flags: --docs=full" to project handoff notes
   - Technical writer agent will read these flags and apply priority chain logic

4. Stage Skip Check (NEW):
   - Read project file Build Configuration section
   - Check if Release stage mode is set to 'skip'
   - If Release stage = skip:
     - Update Release Department Status to `SKIPPED`
     - Add to Audit Log: "Release stage skipped per CLI override (--build-skip-stage=release)"
     - Display: "⏭️ Release stage skipped. Proceeding to Go Live stage."
     - STOP execution (do not run technical-writer agent)

5. Gate Check:
   - Verify Development is approved (Stage 3 complete)
   - If not: "⛔ Development must be approved before documentation"

6. **Technical Writer Execution:**
   - Technical writer will determine documentation mode using priority chain:
     1. Explicit command flags (--docs=lean|full, --lean, --full)
     2. Turbo mode override (always lean for speed)
     3. Build preset defaults (prototype/mvp=lean, production=full)
     4. System default (lean)
   - Generate appropriate documentation based on selected mode

7. **Output Structure (Mode Dependent):**

   **Lean Mode Output (2-3 minutes):**
   ```
   output/[project]/
   ├── README.md           # Project overview with quick start
   ├── DEPLOYMENT.md       # Platform-specific deployment guide
   └── API.md             # Essential API reference (backend only)
   ```

   **Full Mode Output (20-30 minutes):**
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

8. When complete:
   - Update project file with documentation status
   - Add to Audit Log
   - Prompt: "📝 Documentation complete. Run `/ts-security` for security validation."
