# Technology Stack Assessment: $ARGUMENTS

Run AI-optimized technology stack assessment and selection for new projects, or analyze existing projects for completion strategies.

## Usage

### New Project Assessment
```bash
/ts-assess                    # Assess current project with standard options
/ts-assess --compare=3        # Compare top 3 stack options with detailed analysis
/ts-assess --build=prototype  # Override build preset selection
/ts-assess --preset=embedded  # Override architecture preset selection
/ts-assess --detailed         # Include comprehensive risk analysis and alternatives
/ts-assess --quick           # Fast assessment with minimal analysis (for turbo mode)
```

### Existing Project Analysis (Project Explorer)
```bash
/ts-assess --existing <project-name>           # Full existing project analysis
/ts-assess --existing <project-name> --legacy      # Legacy modernization focus
/ts-assess --existing <project-name> --completion  # Completion strategy focus
/ts-assess --existing <project-name> --report      # Generate detailed analysis report
/ts-assess --existing <project-name> --map         # Focus on architecture mapping
/ts-assess --existing <project-name> --gaps        # Focus on gap analysis
/ts-assess --existing <project-name> --health      # Code quality assessment
/ts-assess --existing <project-name> --security    # Comprehensive security analysis
```

## Process

### New Project Assessment (Default)

1. **Read Project Context**
   - Load active project file from `.claude/pipeline/projects/`
   - Parse founder-advisor handoff and project signals
   - Extract user requirements and context

2. **Prerequisites Check**
   - Verify project is in Architecture stage
   - Ensure founder-advisor analysis is complete
   - If not ready: "⛔ Prerequisites not met. Ensure founder-advisor has completed project analysis."

3. **Technology Assessment**
   - Use the **solution-architect** subagent to:
     - Analyze project signals and requirements
     - Select optimal build preset (prototype/mvp/production)
     - Evaluate architecture preset options using AI success metrics
     - Apply multi-criteria scoring for Claude Code optimization
     - Calculate success probabilities and risk assessment
     - Generate quantified technology recommendations
     - Determine agent intersection and workflow planning

4. **Output Assessment Results**
   ```markdown
   ## 🤖 AI-Optimized Stack Assessment Complete

   **Recommended Stack:** [preset] ([score]/10 AI Success)
   **Success Probability:** [percentage]%
   **Expected Debug Time:** [time estimate]

   ### Technology Decisions
   [Detailed breakdown with rationale]

   ### Next Steps
   [EA skip decision or handoff preparation]
   ```

5. **Update Project File**
   - Add Solution Architect Assessment section
   - Lock technology stack decisions
   - Set handoff status for Enterprise Architect
   - Update audit log with assessment completion

6. **Determine Next Action**
   - **If Simple Stack:** Skip EA entirely, proceed to development
   - **If Complex Stack:** Prepare handoff for Enterprise Architect
   - **If HITL Mode:** Wait for user approval of stack assessment

### Existing Project Analysis (--existing flag)

1. **Project Explorer Mode Activation**
   - Detect `--existing` flag in arguments
   - Switch to Project Explorer workflow
   - Parse project name from arguments and construct full path as `input/<project-name>`

2. **Project Path Validation**
   - Verify `input/<project-name>` directory exists
   - Check for recognizable project structure (package.json, requirements.txt, etc.)
   - Ensure read permissions on project files
   - If invalid: "⛔ Project not found or unreadable: input/[project-name]"

3. **Existing Project Analysis**
   - Use the **solution-architect** subagent in **Project Explorer mode** to:
     - **Phase 1:** Codebase discovery and technology stack detection
     - **Phase 2:** Gap analysis and completeness assessment
     - **Phase 3:** Completion strategy generation
     - **Phase 4:** System integration assessment

4. **Analysis Focus (based on subcommands)**
   - **Default (no subcommand):** Full comprehensive analysis
   - **--gaps:** Focus on missing components and blockers
   - **--health:** Code quality, security, and dependency assessment
   - **--completion:** Completion strategies and effort estimation
   - **--map:** Architecture patterns and component relationships
   - **--report:** Executive summary suitable for stakeholders
   - **--legacy:** Legacy modernization recommendations

5. **Output Analysis Results**
   ```markdown
   ## 🗺️ Project Explorer Analysis: [PROJECT_NAME]

   ### 📊 Codebase Assessment
   - **Technology Stack:** [Detected technologies]
   - **Completion Status:** [X% complete]
   - **Code Quality Score:** [Score/10]
   - **Recommended Strategy:** [Approach]

   ### 🔍 Gap Analysis
   [Critical missing components and blockers]

   ### 🏗️ Completion Strategy
   [Recommended approach with effort estimates]

   ### 🎯 System Integration Plan
   [How to integrate with The System workflow]
   ```

6. **Save Analysis Reports to Output Directory**
   - Create structured report directory: `output/[project-name]-analysis/`
   - Generate analysis reports based on command flags
   - Save comprehensive documentation and machine-readable data
   - Provide clear summary and next steps for each analysis

## Integration with Architecture Workflow

**Standalone Mode:**
```bash
/ts-assess                    # Run assessment independently
# User reviews results and approves manually
/ts-approve stack-assessment  # Approve recommended stack
```

**Integrated Mode:**
```bash
/ts-architect                 # Automatically runs SA → EA workflow
# Assessment runs first, then hands off to EA
```

**Turbo Mode:**
```bash
/ts-turbo project-name "idea" # Assessment auto-approved, EA skipped if simple
```

## Command Arguments

### Project Explorer Mode (--existing)
- `--existing <project-name>` - **Required:** Name of existing project (automatically looks in input/ directory)
- `--gaps` - Focus on gap analysis and missing components
- `--health` - Code quality and dependency assessment
- `--security` - Comprehensive security analysis and vulnerability assessment
- `--completion` - Completion strategies and effort estimation
- `--map` - Architecture patterns and component relationships
- `--report` - Executive summary suitable for stakeholders
- `--legacy` - Legacy modernization recommendations

### New Project Assessment Options

#### Build Preset Overrides
- `--build=prototype` - Force prototype build (fastest, minimal agents)
- `--build=mvp` - Force MVP build (balanced quality and speed)
- `--build=production` - Force production build (comprehensive quality)

#### Architecture Preset Overrides
- `--preset=static` - Force static site architecture
- `--preset=embedded` - Force embedded database architecture
- `--preset=fullstack-js` - Force full-stack JavaScript architecture
- `--preset=baas` - Force Backend-as-a-Service architecture
- `--preset=microservice` - Force microservice architecture

#### Technology Overrides
- `--db=postgresql` - Override database selection
- `--db=mysql` - Use MySQL instead of default
- `--db=sqlite` - Use SQLite for embedded solutions
- `--auth=nextauth` - Override authentication system
- `--auth=clerk` - Use Clerk for managed authentication
- `--auth=none` - No authentication required

#### Assessment Options
- `--detailed` - Include comprehensive risk analysis and alternatives
- `--compare=N` - Show comparison of top N stack options (2-5)
- `--quick` - Fast assessment for turbo mode (skip detailed analysis)
- `--explain` - Include detailed rationale for each technology choice

## Output Modes

### Standard Output
```markdown
## Stack Assessment Results
- Recommended preset with score
- Key technology choices
- Success probability and rationale
- Next steps (EA or skip)
```

### Detailed Output (--detailed)
```markdown
## Comprehensive Stack Assessment
- Multi-criteria scoring breakdown
- Risk analysis with mitigation strategies
- Alternative stack comparisons
- AI optimization recommendations
- Agent workflow planning
- Detailed success factors and failure modes
```

### Comparison Output (--compare=3)
```markdown
## Stack Options Comparison
| Preset | AI Score | Success Rate | Debug Time | Best For |
|--------|----------|--------------|------------|----------|
| [Top 3 options with detailed comparison]

## Recommendation Reasoning
[Why the top choice was selected over alternatives]
```

### Project Explorer Output (--existing)
Project Explorer analyses are saved to structured directories in the output folder:

```
output/[project-name]-analysis/
├── analysis-report.md          # Comprehensive analysis (default/--report)
├── executive-summary.md        # Stakeholder summary (--report)
├── gaps-report.md              # Gap analysis (--gaps)
├── health-report.md            # Code quality assessment (--health)
├── security-report.md          # Security analysis (--security)
├── completion-strategy.md      # Completion roadmap (--completion)
├── architecture-map.md         # Architecture analysis (--map)
├── technology-stack.json       # Machine-readable tech stack data
└── README.md                   # Report overview and navigation
```

**Command-Specific File Generation:**
- `--existing <project-name>` → analysis-report.md, executive-summary.md, technology-stack.json, README.md
- `--gaps` → gaps-report.md, README.md
- `--health` → health-report.md, README.md
- `--security` → security-report.md, README.md
- `--completion` → completion-strategy.md, README.md
- `--map` → architecture-map.md, README.md
- `--report` → All files (comprehensive analysis)

**Example Output Summary:**
```
🗺️ Project Explorer Analysis Complete!

📁 Reports saved to: output/my-legacy-app-analysis/
📊 Analysis type: --health --security --gaps
🎯 Recommended strategy: Refactor then complete

📋 Generated Files:
  ✅ gaps-report.md (2.1 KB)
  ✅ health-report.md (3.4 KB)
  ✅ security-report.md (4.8 KB)
  ✅ README.md (1.5 KB)

🚀 Next Steps:
  1. Review the analysis reports
  2. Address critical security vulnerabilities immediately
  3. Consider recommended completion strategy
  4. Use findings to inform new project creation

💡 View reports: cd output/my-legacy-app-analysis/
```

## Error Handling

### Prerequisites Not Met
```
⛔ Cannot run assessment:
- Project not in Architecture stage
- Founder-advisor analysis missing
- Invalid project file format

Please ensure project is properly initialized and founder-advisor has completed analysis.
```

### Configuration Issues
```
⚠️ Configuration Warning:
- AI success profiles missing - using fallback scoring
- Invalid override parameters - ignoring and using defaults
- Preset configuration inconsistency - using conservative defaults
```

### Assessment Failures
```
❌ Assessment Failed:
- Unable to parse project signals
- No viable architecture presets found
- Technology compatibility conflicts

Falling back to default recommendations with warnings.
```

## Integration Notes

**For Developers:**
- This command delegates all logic to the solution-architect agent
- The command handles argument parsing and project file management
- Assessment results are stored in PROJECT.md for EA handoff
- HITL gates are managed through separate approval commands

**For Users:**
- Use `/ts-assess` for manual stack assessment and review
- Use `/ts-architect` for full SA→EA workflow
- Use `/ts-turbo` for autonomous execution without gates
- Override any technology choices using command flags

**Workflow Integration:**
- Can run standalone for stack assessment only
- Integrates with `/ts-architect` for complete architecture workflow
- Supports turbo mode for autonomous execution
- Respects HITL gates and user approval requirements