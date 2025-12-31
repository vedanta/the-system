# Contributing to The System

Thank you for contributing to **The System** - the Autonomous Software Development Organization (ASDO) framework!

## 🌿 Branch Naming Convention

### **Use Short, Descriptive Names (Max 20 Characters)**

#### **Prefixes:**
```bash
feat/     # New features
fix/      # Bug fixes
docs/     # Documentation updates
chore/    # Maintenance tasks
hotfix/   # Urgent fixes
```

#### **✅ Good Examples:**
```bash
feat/auth             # Authentication system
feat/api              # API improvements
feat/ui               # UI enhancements
feat/deploy           # Deployment features
feat/monitoring       # Monitoring setup
docs/api              # API documentation
docs/setup            # Setup guides
docs/diagrams         # Diagram updates
fix/badges            # Badge rendering issues
fix/build             # Build problems
fix/links             # Broken links
chore/deps            # Dependency updates
chore/cleanup         # Code cleanup
```

#### **❌ Avoid These Patterns:**
```bash
feature/solution-architect-implementation     # 42 chars - too long!
feature/user-docs-comprehensive-examples     # 41 chars - too long!
feature/update-diagrams-solution-architect   # 43 chars - too long!
```

### **Branch Lifecycle:**

#### **Create:**
```bash
git checkout main
git pull
git checkout -b feat/your-feature
```

#### **Work & Push:**
```bash
git push -u origin feat/your-feature
```

#### **After Merge:**
```bash
git branch -d feat/your-feature           # Delete local
git push origin --delete feat/your-feature # Delete remote
```

---

## 📋 Pull Request Guidelines

### **PR Title Format:**
```bash
[emoji] Brief description of changes

Examples:
✨ Add user authentication system
🐛 Fix badge rendering in README
📚 Update API documentation
🔧 Update dependencies to latest versions
```

### **PR Description Template:**
```markdown
## Summary
Brief description of what this PR does.

## Changes Made
- ✅ Specific change 1
- ✅ Specific change 2
- ✅ Specific change 3

## Testing
- [ ] Tests pass locally
- [ ] No breaking changes
- [ ] Documentation updated

## Impact
Description of what this affects and any special considerations.
```

---

## 🔧 Development Workflow

### **For Framework Changes:**
1. **Create feature branch** using naming convention
2. **Make focused changes** - one feature per branch
3. **Test thoroughly** - run `./scripts/verify-the-system.sh`
4. **Update documentation** if adding new agents/commands
5. **Create PR** with clear description
6. **Clean up branch** after merge

### **For Agent/Command Development:**
1. **Read existing patterns** in `.claude/agents/` and `.claude/commands/`
2. **Follow consistent structure** with existing files
3. **Test functionality** with real scenarios
4. **Update counts** in documentation if adding new components
5. **Run validation scripts** before submitting

### **For Documentation Updates:**
1. **Maintain progressive disclosure** (README → USER-GUIDE → detailed docs)
2. **Keep examples current** and functional
3. **Verify all links work** and counts are accurate
4. **Use consistent formatting** and emoji patterns

---

## 🧪 Testing & Validation

### **Before Submitting PRs:**
```bash
# Verify framework integrity
./scripts/verify-the-system.sh

# Validate architecture presets (if changed)
python3 scripts/validate-architecture-presets.py

# Validate build presets (if changed)
python3 scripts/validate-build-presets.py
```

### **For Agent Changes:**
- Test agent functionality with real projects
- Verify agent can access required tools
- Check integration with other agents
- Validate outputs match expected format

### **For Command Changes:**
- Test command execution in various scenarios
- Verify command arguments and options work
- Check error handling and edge cases
- Ensure command integrates properly with workflow

---

## 📊 Adding New Components

### **New Agents (19 → 20):**
1. Create `.claude/agents/your-agent.md`
2. Update `scripts/verify-the-system.sh` agent count
3. Update documentation counts (README, USER-GUIDE, etc.)
4. Add to appropriate diagrams in `diagrams/`
5. Test agent integration thoroughly

### **New Commands (46 → 47):**
1. Create `.claude/commands/ts-your-command.md`
2. Update `scripts/verify-the-system.sh` command count
3. Update documentation with new command
4. Add to Quick Reference sections
5. Test command functionality

### **New Diagrams:**
1. Create `.mermaid` file in `diagrams/`
2. Update `diagrams/README.md` with description
3. Follow existing color schemes and patterns
4. Test diagram renders correctly
5. Consider both GitHub and Mermaid Live Editor compatibility

---

## 🎯 Code Quality Standards

### **File Organization:**
- **Agents:** `.claude/agents/` - One agent per file
- **Commands:** `.claude/commands/` - One command per file
- **Config:** `.claude/config/` - YAML configuration files
- **Docs:** `docs/` - Structured documentation
- **Scripts:** `scripts/` - Validation and utility scripts

### **Naming Conventions:**
- **Files:** kebab-case (e.g., `solution-architect.md`)
- **Commands:** ts-prefix (e.g., `/ts-assess`)
- **Branches:** prefix/short-name (e.g., `feat/auth`)
- **Variables:** snake_case in configs

### **Documentation Style:**
- **Be concise** but comprehensive
- **Use examples** for complex concepts
- **Maintain consistency** with existing patterns
- **Update related docs** when making changes

---

## 🚀 Release Process

### **For Maintainers:**

1. **Verify all tests pass**
2. **Update version numbers** if applicable
3. **Update CHANGELOG.md** with release notes
4. **Tag release** with semantic versioning
5. **Update deployment** if needed

### **Version Strategy:**
- **Major:** Framework architecture changes
- **Minor:** New agents, commands, or significant features
- **Patch:** Bug fixes, documentation updates, minor improvements

---

## 🤝 Getting Help

### **Questions or Issues:**
- **Framework Questions:** Ask in GitHub Discussions
- **Bug Reports:** Open GitHub Issues with full context
- **Feature Requests:** Open GitHub Issues with clear use case
- **Documentation:** Check existing docs first, then ask

### **Quick References:**
- **Framework Overview:** [README.md](../README.md)
- **User Guide:** [USER-GUIDE.md](../USER-GUIDE.md)
- **Technical Reference:** [CLAUDE.md](../CLAUDE.md)
- **Validation Scripts:** [scripts/README.md](../scripts/README.md)

---

## ✨ Recognition

Contributors who follow these guidelines help maintain:
- ✅ **Clean, maintainable codebase**
- ✅ **Consistent user experience**
- ✅ **High-quality documentation**
- ✅ **Reliable framework operation**

Thank you for helping make **The System** better for everyone! 🎉

---

**Last Updated:** December 30, 2024
**Framework Version:** 1.1+