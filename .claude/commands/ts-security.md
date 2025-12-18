# Security Validation: $ARGUMENTS

Engage the Security Engineer to perform security validation.

## Usage

- `/ts-security` - Full security scan
- `/ts-security production` - Pre-production security check

## Process

1. Read the active project file from `.claude/pipeline/projects/`

2. Gate Check:
   - Verify Documentation is complete
   - If not: "⛔ Documentation should be completed first"

3. Use the **security-engineer** subagent to perform:
   - Dependency vulnerability scan (pip audit, npm audit)
   - Static Application Security Testing (SAST)
   - Secrets detection (gitleaks, trufflehog)
   - Container image scanning (trivy)
   - Infrastructure security review (tfsec)
   - OWASP Top 10 compliance check

4. Output location:
   ```
   output/[project]/
   └── security/
       ├── reports/
       │   ├── dependency-audit.json
       │   ├── sast-report.json
       │   ├── secrets-scan.json
       │   ├── container-scan.json
       │   └── infrastructure-review.md
       ├── SECURITY_SUMMARY.md
       ├── REMEDIATION.md
       └── compliance/
           ├── owasp-checklist.md
           └── security-controls.md
   ```

5. Decision:

### PASS
- No critical or high findings
- All security controls verified
- Update status to `SECURITY_PASSED`
- Prompt: "✅ Security PASSED. Run `/ts-release` to create release package."

### CONDITIONAL
- No critical findings
- High findings have planned mitigations
- Update status to `SECURITY_CONDITIONAL`
- Prompt: "⚠️ Security CONDITIONAL. Staging OK, production requires fixes."

### FAIL
- Critical findings present, OR
- Secrets detected
- Update status to `SECURITY_FAILED`
- Prompt: "❌ Security FAILED. Deployment BLOCKED. See REMEDIATION.md"
- BLOCK further progress until resolved
