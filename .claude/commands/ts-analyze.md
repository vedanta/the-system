# Business Analysis: $ARGUMENTS

Engage the Business Analyst for JSA (Justification, Scale, Approach).

## Process

1. Read the active project file from `.claude/pipeline/projects/`

2. Gate Check:
   - Verify MVP Plan exists
   - If not: "⛔ Cannot analyze. Planning must be complete first. Run `plan`"

3. Use the **business-analyst** subagent to:
   - Analyze market size and competition
   - Model revenue and unit economics
   - Define GTM strategy
   - Assess risks and investment readiness
   - Provide Green Light recommendation

4. When complete, prompt:
   "Business Analysis complete. Run `review product` for Founder-Advisor Green Light review."
