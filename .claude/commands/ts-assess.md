# Technology Stack Assessment: $ARGUMENTS

Run AI-optimized technology stack assessment and selection.

## Usage

```bash
/ts-assess                    # Assess current project with standard options
/ts-assess --compare=3        # Compare top 3 stack options with detailed analysis
/ts-assess --build=prototype  # Override build preset selection
/ts-assess --preset=embedded  # Override architecture preset selection
/ts-assess --detailed         # Include comprehensive risk analysis and alternatives
/ts-assess --quick           # Fast assessment with minimal analysis (for turbo mode)
```

## Process

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

### Build Preset Overrides
- `--build=prototype` - Force prototype build (fastest, minimal agents)
- `--build=mvp` - Force MVP build (balanced quality and speed)
- `--build=production` - Force production build (comprehensive quality)

### Architecture Preset Overrides
- `--preset=static` - Force static site architecture
- `--preset=embedded` - Force embedded database architecture
- `--preset=fullstack-js` - Force full-stack JavaScript architecture
- `--preset=baas` - Force Backend-as-a-Service architecture
- `--preset=microservice` - Force microservice architecture

### Technology Overrides
- `--db=postgresql` - Override database selection
- `--db=mysql` - Use MySQL instead of default
- `--db=sqlite` - Use SQLite for embedded solutions
- `--auth=nextauth` - Override authentication system
- `--auth=clerk` - Use Clerk for managed authentication
- `--auth=none` - No authentication required

### Assessment Options
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