# 🚀 The System - Installation Guide

Install The System autonomous development framework with a single command.

## Quick Start

```bash
# One-line installation
curl -fsSL https://raw.githubusercontent.com/vedanta/the-system/main/install.sh | bash
```

## Installation Options

### Basic Installation
```bash
curl -fsSL https://raw.githubusercontent.com/vedanta/the-system/main/install.sh | bash
```

### Custom Installation Directory
```bash
curl -fsSL https://raw.githubusercontent.com/vedanta/the-system/main/install.sh | bash -s -- --dir ~/my-system
```

### Verbose Installation (See All Details)
```bash
curl -fsSL https://raw.githubusercontent.com/vedanta/the-system/main/install.sh | bash -s -- --verbose
```

### Skip Dependency Checks (Advanced)
```bash
curl -fsSL https://raw.githubusercontent.com/vedanta/the-system/main/install.sh | bash -s -- --skip-deps
```

### Custom Claude Code Path
```bash
curl -fsSL https://raw.githubusercontent.com/vedanta/the-system/main/install.sh | bash -s -- --claude-path /path/to/claude
```

## System Requirements

### Operating Systems
- ✅ **Linux** (Ubuntu, CentOS, Debian, etc.)
- ✅ **macOS** (Intel and Apple Silicon)
- ❌ Windows (use WSL2 with Linux)

### Shell Support
- ✅ **bash** (recommended)
- ✅ **zsh** (recommended)
- ⚠️  Other shells (limited support)

### Dependencies

#### Required
- **Node.js** v18+ ([Install Node.js](https://nodejs.org/))
- **Git** ([Install Git](https://git-scm.com/downloads))
- **Claude Code CLI** ([Install Claude Code](https://claude.com/claude-code))

#### Optional
- **npm** (included with Node.js)
- **curl** (for installation script)

## What Gets Installed

The installation script will:

1. ✅ **Download** The System framework from GitHub
2. ✅ **Install** to `~/.the-system` (or custom directory)
3. ✅ **Verify** all 19 agents and 48+ commands
4. ✅ **Setup** shell integration (`ts` command)
5. ✅ **Configure** documentation and examples

### Directory Structure
```
~/.the-system/
├── .claude/               # 19 agents, 48 commands, configs
├── docs/                  # Comprehensive documentation
├── output/               # Generated projects go here
├── input/                # Reference materials
├── scripts/              # Verification and utilities
├── CLAUDE.md            # Framework instructions
├── README.md            # User documentation
└── install.sh           # This installation script
```

## Post-Installation

### 1. Verify Installation
```bash
cd ~/.the-system
claude
/ts-help
```

### 2. Start Your First Project
```bash
# Interactive mode
/ts-new-project my-app
# Follow the prompts...

# Or use Turbo mode (autonomous)
/ts-turbo my-app "Build a todo app with user auth"
```

### 3. Use Shell Integration
```bash
# Restart your shell or source your RC file
source ~/.bashrc  # or ~/.zshrc

# Now use 'ts' from anywhere
ts  # Opens Claude in The System directory
```

## Troubleshooting

### Common Issues

#### 1. Permission Denied
```bash
# Make sure you have write access to installation directory
ls -la ~/.the-system
# If needed, remove and reinstall
rm -rf ~/.the-system
curl -fsSL https://raw.githubusercontent.com/vedanta/the-system/main/install.sh | bash
```

#### 2. Node.js Version Too Old
```bash
# Check current version
node --version

# Install latest Node.js
# macOS with Homebrew:
brew install node

# Ubuntu/Debian:
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs
```

#### 3. Claude Code Not Found
```bash
# Install Claude Code first
# Visit: https://claude.com/claude-code

# Then specify custom path if needed
curl -fsSL https://raw.githubusercontent.com/vedanta/the-system/main/install.sh | bash -s -- --claude-path /path/to/claude
```

#### 4. Git Clone Fails
```bash
# Check git configuration
git config --global user.name "Your Name"
git config --global user.email "your@email.com"

# Test git access
git clone https://github.com/vedanta/the-system.git /tmp/test-clone
rm -rf /tmp/test-clone
```

### Getting Help

#### 1. Check Installation
```bash
cd ~/.the-system
./scripts/verify-the-system.sh
```

#### 2. Framework Help System
```bash
cd ~/.the-system
claude
/ts-help                    # Browse all commands
/ts-brief                   # Framework overview
/ts-status                  # Current project status
/ts-quickref               # Quick reference
```

#### 3. Community Support
- 📚 Documentation: `~/.the-system/docs/`
- 🐛 Issues: [GitHub Issues](https://github.com/vedanta/the-system/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/vedanta/the-system/discussions)

## Advanced Usage

### Development Installation
```bash
# For framework development/modification
git clone https://github.com/vedanta/the-system.git
cd the-system
./scripts/verify-the-system.sh
```

### Multiple Installations
```bash
# Install multiple versions
curl -fsSL https://raw.githubusercontent.com/vedanta/the-system/main/install.sh | bash -s -- --dir ~/.the-system-dev
curl -fsSL https://raw.githubusercontent.com/vedanta/the-system/main/install.sh | bash -s -- --dir ~/.the-system-prod
```

### Uninstallation
```bash
# Remove installation
rm -rf ~/.the-system

# Remove shell integration (manual)
# Edit ~/.bashrc or ~/.zshrc and remove:
# alias ts='cd "~/.the-system" && claude'
```

## Security Considerations

### Installation Security
- ✅ Script uses HTTPS for all downloads
- ✅ Verifies Git repository authenticity
- ✅ No elevated privileges required
- ✅ Installs to user directory only

### Runtime Security
- ✅ Framework generates code in sandboxed `output/` directory
- ✅ No automatic code execution
- ✅ All generated code is reviewable
- ✅ Security scanning built into release process

### Best Practices
- 🔒 Review generated code before deployment
- 🔒 Use version pinning for production
- 🔒 Regular framework updates
- 🔒 Separate development/production environments

---

## Installation Script Options Reference

| Option | Description | Default | Example |
|--------|-------------|---------|---------|
| `-d, --dir` | Installation directory | `~/.the-system` | `--dir ~/my-system` |
| `-v, --verbose` | Enable verbose output | `false` | `--verbose` |
| `-s, --skip-deps` | Skip dependency checks | `false` | `--skip-deps` |
| `-c, --claude-path` | Claude Code executable path | Auto-detect | `--claude-path /opt/claude` |
| `-h, --help` | Show help message | - | `--help` |

---

**Ready to build? Let The System take you from idea to production! 🏗️**