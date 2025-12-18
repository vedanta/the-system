# Universal .gitignore Template
# Reference this when creating project .gitignore files

Use this template as a base and customize based on the project's tech stack.

---

## Full Template

```gitignore
# ============================================================================
# DEPENDENCIES
# ============================================================================

# Node
node_modules/
npm-debug.log*
yarn-debug.log*
yarn-error.log*
.pnpm-debug.log*

# Python
__pycache__/
*.py[cod]
*$py.class
*.so
.Python
build/
develop-eggs/
dist/
downloads/
eggs/
.eggs/
lib/
lib64/
parts/
sdist/
var/
wheels/
*.egg-info/
.installed.cfg
*.egg
pip-log.txt
pip-delete-this-directory.txt
venv/
.venv/
ENV/
env/
.env.local

# ============================================================================
# ENVIRONMENT & SECRETS
# ============================================================================

# Environment files
.env
.env.local
.env.development.local
.env.test.local
.env.production.local
.env*.local

# Secrets
*.pem
*.key
*.crt
*.p12
secrets/
.secrets/

# ============================================================================
# BUILD OUTPUT
# ============================================================================

# General
build/
dist/
out/
output/
target/

# Next.js
.next/
out/

# Nuxt.js
.nuxt/

# Gatsby
.cache/
public/

# Vite
dist/

# Python
*.pyc
*.pyo
*.pyd

# ============================================================================
# TESTING & COVERAGE
# ============================================================================

# Coverage
coverage/
.coverage
.coverage.*
htmlcov/
.tox/
.nox/
.pytest_cache/
nosetests.xml
coverage.xml
*.cover
*.py,cover

# Jest
jest/

# Playwright
test-results/
playwright-report/
playwright/.cache/

# ============================================================================
# IDE & EDITORS
# ============================================================================

# VS Code
.vscode/
*.code-workspace

# JetBrains (PyCharm, WebStorm, IntelliJ)
.idea/
*.iml
*.iws
*.ipr
out/

# Vim
*.swp
*.swo
*~

# Emacs
*~
\#*\#
/.emacs.desktop
/.emacs.desktop.lock
*.elc

# Sublime Text
*.sublime-workspace
*.sublime-project

# ============================================================================
# OS FILES
# ============================================================================

# macOS
.DS_Store
.AppleDouble
.LSOverride
._*
.Spotlight-V100
.Trashes

# Windows
Thumbs.db
ehthumbs.db
Desktop.ini
$RECYCLE.BIN/
*.lnk

# Linux
*~
.fuse_hidden*
.directory
.Trash-*

# ============================================================================
# LOGS & TEMP
# ============================================================================

# Logs
logs/
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
lerna-debug.log*

# Temp files
tmp/
temp/
*.tmp
*.temp
*.bak

# ============================================================================
# DATABASE
# ============================================================================

# SQLite
*.sqlite
*.sqlite3
*.db

# PostgreSQL
*.sql.gz

# ============================================================================
# DOCKER
# ============================================================================

# Docker (be careful - sometimes you want these)
# .docker/

# ============================================================================
# INFRASTRUCTURE
# ============================================================================

# Terraform
.terraform/
*.tfstate
*.tfstate.*
crash.log
*.tfvars
override.tf
override.tf.json
*_override.tf
*_override.tf.json

# ============================================================================
# MISC
# ============================================================================

# Package lock files (optional - some teams commit these)
# package-lock.json
# yarn.lock
# pnpm-lock.yaml

# Compiled files
*.com
*.class
*.dll
*.exe
*.o
*.so

# Archives
*.7z
*.dmg
*.gz
*.iso
*.jar
*.rar
*.tar
*.zip

# Editor backup files
*.bak
*.old
```

---

## Stack-Specific Additions

### Python/FastAPI
```gitignore
# Add to base
.mypy_cache/
.dmypy.json
dmypy.json
.ruff_cache/
celerybeat-schedule
celerybeat.pid
```

### Next.js/React
```gitignore
# Add to base
.vercel
.turbo
storybook-static/
```

### Full-Stack (Python + Node)
```gitignore
# Use full template above
```

### Database Heavy
```gitignore
# Add to base
migrations/*.pyc
alembic/versions/__pycache__/
prisma/migrations/**/migration_lock.toml
```

---

## Minimal Template (for simple projects)

```gitignore
# Dependencies
node_modules/
__pycache__/
venv/

# Environment
.env
.env.local

# Build
dist/
build/
.next/

# IDE
.vscode/
.idea/

# OS
.DS_Store
Thumbs.db

# Logs
*.log

# Testing
coverage/
.pytest_cache/
```
