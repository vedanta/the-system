# Start Architecture: $ARGUMENTS

Orchestrate the complete Architecture Department workflow: Solution Architect assessment followed by Enterprise Architect design.

## Process

### Phase 1: Prerequisites and Setup

1. **Read Project Context**
   - Load active project file from `.claude/pipeline/projects/`
   - Parse founder-advisor handoff and project requirements
   - Validate project is ready for architecture stage

2. **HITL Gate Check**
   - Verify "Founder approved to proceed to Architecture" is checked
   - If not: "⛔ Cannot start. Founder approval required. Run `/ts-approve architecture-start`"

3. **Initialize Architecture Department**
   - Update Architecture Department Status to `IN_PROGRESS`
   - Add to Audit Log: "Architecture workflow started - SA→EA orchestration"

### Phase 2: Solution Architect Assessment

4. **Technology Stack Assessment**
   - Execute Solution Architect assessment using embedded `/ts-assess` logic
   - Analyze project signals and requirements for AI-optimized stack selection
   - Apply multi-criteria scoring for Claude Code build success
   - Generate quantified technology recommendations
   - Lock technology stack decisions in project file

5. **SA Assessment Results**
   ```markdown
   ## 🤖 Solution Architect Assessment Complete

   **Recommended Stack:** [preset] ([score]/10 AI Success)
   **Claude Success Rate:** [percentage]%
   **Expected Debug Time:** [estimate]

   **EA Decision:** [skip/compressed/standard/full] mode
   **Reason:** [rationale for EA execution mode]
   ```

### Phase 3: EA Execution Decision

6. **Read SA Handoff Data**
   - Load `solution_architect_handoff` from project file
   - Extract `ea_decision` parameters (skip, mode, reason)
   - Validate handoff data structure and completeness

7. **EA Skip Logic**
   ```markdown
   IF sa_handoff.ea_decision.skip == true:
     - Skip Enterprise Architect entirely
     - Mark Architecture Department as COMPLETE
     - Create minimal architecture summary
     - Proceed directly to Product stage
     - Save 15-25 minutes for simple stacks

   ELSE:
     - Continue to Enterprise Architect execution
     - Use sa_handoff.ea_decision.mode (compressed/standard/full)
     - Pass locked technology stack to EA
   ```

### Phase 4: Enterprise Architect Design (Conditional)

8. **EA Prerequisites Check** (Only if not skipped)
   - Verify SA handoff data exists and is complete
   - Confirm technology stack is locked (`architecture.stack_locked = true`)
   - Validate SA assessment completion
   - Ensure founder approval for architecture design

9. **Launch Enterprise Architect** (Only if not skipped)
   - Use the **enterprise-architect** subagent with SA handoff context
   - Execute EA in mode determined by SA (compressed/standard/full)
   - Transform locked technology stack into comprehensive system design
   - Generate technology-specific implementation artifacts
   - Create architecture documentation using selected technologies

### Phase 5: Architecture Completion

10. **Workflow Summary**
    ```markdown
    ## 🏗️ Architecture Department Complete

    ### Solution Architect Summary
    - **Stack:** [sa_handoff.recommended_stack] ([sa_handoff.assessment_score]/10)
    - **Success Probability:** [sa_handoff.success_probability]%
    - **Technologies:** [frontend] + [backend] + [database] + [auth]

    ### Enterprise Architect Summary
    - **Execution:** [Skipped/Compressed/Standard/Full] mode
    - **Artifacts:** [count] design documents created
    - **Implementation Ready:** [Yes/No]

    ### Architecture Status
    - **Stack Locked:** ✅
    - **Design Complete:** ✅
    - **Ready for Product Stage:** ✅
    ```

11. **Final Status Update**
    - Update Architecture Department Status to `READY_FOR_REVIEW`
    - Add comprehensive audit log entries for SA and EA phases
    - Mark appropriate completion checkboxes in project file

12. **Next Steps Prompt**
    ```markdown
    🎉 Architecture workflow complete!

    **Next Actions:**
    - Run `/ts-review architecture` for Founder-Advisor review
    - After review: `/ts-approve architecture-lock` to proceed
    - Then: `/ts-product` to begin Product definition
    ```

## Command Integration

### Standalone Mode
```bash
/ts-architect                 # Full SA→EA workflow with HITL gates
```

### Turbo Mode Integration
```bash
/ts-turbo project "idea"      # SA→EA runs autonomously, skips gates
```

### Manual Override Mode
```bash
/ts-assess                    # Run SA assessment only
# Review SA results manually
/ts-approve stack-assessment  # Approve stack
/ts-architect --ea-only       # Run EA only (after SA complete)
```

## Skip Logic Examples

### High Skip Rate Scenarios (88% time reduction)
- **Prototype + Static:** Skip EA entirely (architecture = "Static JAMstack site")
- **Prototype + CLI-Script:** Skip EA entirely (architecture = "Single script application")

### Compressed Mode Scenarios (65% time reduction)
- **MVP + Fullstack-JS:** Run EA in compressed mode (essential artifacts only)
- **MVP + BaaS:** Run EA in compressed mode (focus on integration patterns)

### Full Mode Scenarios (Standard timing)
- **Production + Microservice:** Run EA in full mode (comprehensive architecture)
- **Any + Complex Features:** Run EA with detailed analysis

## Error Handling

### SA Assessment Failures
```
❌ Solution Architect Assessment Failed:
- Unable to detect viable technology stack
- Project signals insufficient for assessment
- Configuration conflicts detected

Falling back to default recommendations. Review manually with `/ts-assess --detailed`.
```

### EA Prerequisites Not Met
```
⛔ Enterprise Architect Cannot Proceed:
- SA handoff data missing or incomplete
- Technology stack not locked
- Assessment score too low for automatic handoff

Run `/ts-assess` to complete stack assessment first.
```

### Workflow Integration Issues
```
⚠️ Workflow Warning:
- SA→EA handoff data incomplete
- Using fallback EA execution mode
- Technology-specific guidance may be limited

Proceeding with standard EA workflow.
```

## Performance Metrics

### Expected Timing
- **SA Assessment:** 2-3 minutes
- **EA Skip:** 0 minutes (88% time savings)
- **EA Compressed:** 5-10 minutes (65% time savings)
- **EA Standard:** 15-25 minutes (baseline)
- **EA Full:** 30-45 minutes (production quality)

### Success Optimization
- **AI-Optimized Stacks:** 85-95% build success rate
- **Technology Lock:** Prevents architecture drift
- **Skip Logic:** Matches complexity to workflow depth
- **Handoff Quality:** Technology-specific implementation guidance
