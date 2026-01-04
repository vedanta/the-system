# Changelog

All notable changes to The System ASDO framework will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.2] - 2025-01-03

### Added
- **Lean Documentation Mode**
  - Complete implementation with 3-minute generation target vs 20-30 minutes for full mode
  - Template system in `.claude/knowledge/lean-docs-templates/`
  - Priority chain for mode selection (flags → turbo → preset → default)
  - Agent-specific lean behavior with file count and time limits

- **Testing Suite for Lean Mode**
  - `test-lean-docs.sh` - Comprehensive lean documentation system testing
  - `test-lean-mode.sh` (3 variants) - Turbo mode lean execution testing
  - `test-lean-mode-simple.sh` - Simple pipe method for terminal compatibility
  - `validate-agent-compliance.sh` - Individual agent lean mode compliance testing
  - Terminal compatibility solutions for Claude CLI raw mode issues

- **Language Standards Enforcement**
  - Comprehensive marketing language elimination with regex validation
  - Direct, functional documentation standards with prohibited patterns
  - Enhanced `/ts-user-docs-update` command with language compliance checking
  - Technical Writer agent with critical language validation requirements

### Changed
- **Documentation Quality**
  - Eliminated all decorative/marketing language for 100% direct, functional communication
  - Updated taglines: "Work at the Speed of Thought" → "Configure Speed vs Quality"
  - Replaced promotional descriptions with precise, practical terminology
  - Enhanced visual presentation with new professional hero image

- **Project Structure**
  - Root directory reorganization: essential files only in root
  - Development files moved to `docs/dev/`, user files to `docs/user/`
  - Cleaner project presentation for professional first impression
  - Fixed internal links after file reorganization

- **Agent Enhancements**
  - Technical Writer agent updated with lean mode system and language standards
  - Enhanced documentation principles compliance validation
  - Improved agent intersection optimization for lean workflows

### Fixed
- Internal documentation links after file reorganization
- Terminal compatibility issues with Claude CLI in testing scripts
- Progressive disclosure structure validation
- Command count accuracy in scripts (46 → 48 commands)

## [1.1.0] - 2025-12-31

### Added
- **Help System Commands**
  - `/ts-help` - Interactive command browser showing all 48 commands grouped by category
  - `/ts-quickref` - Compact reference card with workflow patterns
  - `--help` flag support for major commands (`/ts-turbo --help`, `/ts-push --help`)
  - Search functionality: `/ts-help --search <term>`
  - Stage-specific help: `/ts-help --stage <stage>`

- **File-Based Ideas Input**
  - Support for `.txt`, `.md`, `.json`, `.yaml` project idea files
  - Updated commands: `/ts-new-project --idea=file`, `/ts-turbo --idea=file`, `/ts-turbo-quick --idea=file`
  - JSON/YAML flag merging: files can include build flags that override CLI flags
  - Organized workflow support with `ideas/` directory pattern

- **Solution Architect Agent**
  - 19th agent for AI-optimized technology assessment
  - `/ts-assess` command for technology stack evaluation
  - `ai-success-profiles.yaml` configuration with assessment data
  - Integration with `/ts-turbo` mode for automatic assessment

- **Build Presets System**
  - 3 build modes: prototype, MVP, production
  - `--build` flag support for `/ts-turbo` and `/ts-new-project`
  - Automatic signal detection from project descriptions
  - Agent optimization based on build complexity

- **Documentation**
  - 12 new Mermaid diagrams covering agent interactions and capabilities
  - Updated README.md and CLAUDE.md with accurate command counts
  - Contributing guidelines and branch naming standards
  - User documentation reorganization (USER-GUIDE.md, QUICKSTART.md)

### Changed
- **Framework Statistics**
  - Agent count: 18 → 19 (added Solution Architect)
  - Command count: 44 → 47 (added /ts-help, /ts-quickref, /ts-assess)
  - File format support: 0 → 4 formats (.txt, .md, .json, .yaml)

- **Enhanced Agent Capabilities**
  - 10 agents updated with build preset awareness
  - Enterprise Architect workflow optimization
  - QA Engineer enhanced validation requirements
  - All development agents support build complexity modes

### Fixed
- README badge layout issues
- 404 errors in documentation badges
- Framework documentation counts accuracy
- Quick Reference Card with Solution Architect commands

### Technical Details
- **Main Features**: 9 files changed, 869 insertions, 30 deletions
- **Solution Architect**: 15 files changed, 5,029 insertions, 606 deletions
- **Build Presets**: 20 files changed, 4,080+ insertions
- **Documentation**: 12 files changed, 1,015 insertions, 17 deletions
- **Breaking Changes**: None - fully backward compatible

## [1.0.0-basil] - 2025-12-26

### 🌿 **Release "Basil" - The Essential Foundation**

The first official release of The System - a complete Autonomous Software Development Organization (ASDO) framework. Like basil in cooking, this release provides the essential foundation that everything else builds upon.

### ✨ **Features**

#### **🏢 Complete ASDO Framework**
- **18 Specialized AI Agents** across 5 departments
- **44 Commands** covering full software development lifecycle
- **5-Stage Process** from architecture to operations
- **8 Human-in-the-Loop Gates** for quality control

#### **🏗️ Architecture Department**
- Enterprise Architect for system design and technical decisions

#### **📦 Product Department**
- Product Lead for MVP definition and user stories
- Project Planner for roadmaps and sprint planning
- Business Analyst for market analysis and GTM strategy

#### **💻 Development Department**
- Principal Developer for implementation planning and quality gates
- QA Engineer for testing strategy and sign-off
- Database Developer for schema and data layer
- Backend Developer for APIs and business logic
- Frontend Developer for UI and user experience
- Integration Engineer for component integration

#### **🚀 Release & Deployment Department**
- Technical Writer for comprehensive documentation
- Security Engineer for validation and compliance
- Release Engineer for versioning and packaging
- DevOps Engineer for infrastructure and CI/CD

#### **🌐 Operations Department**
- SRE Deploy Engineer for managed platform deployment
- SRE Ops Engineer for monitoring and incident response

#### **⚡ Autonomous Capabilities**
- **Turbo Mode** (`/ts-turbo`) - Fully autonomous development without HITL gates
- **Quick Deploy** (`/ts-push`) - Direct deployment to managed platforms
- **Complete Application Generation** - Full-stack apps with Docker, docs, and deployment

#### **🛠️ Technical Features**
- Full-stack application scaffolding (React + FastAPI + PostgreSQL)
- Docker containerization with development and production configs
- Comprehensive documentation generation
- Infrastructure as Code (Terraform) generation
- CI/CD pipeline generation (GitHub Actions)
- Security scanning and compliance checks
- Monitoring and alerting setup

#### **🎮 Proven Capabilities**
- Successfully generated complete Ludo Premium game application
- Full development lifecycle from concept to deployable code
- Premium UI/UX with animations, sound, and PWA capabilities
- Production-ready Docker setup with multi-service orchestration

### 🏗️ **Architecture**
- **Stage 1**: Architecture design and technical decisions
- **Stage 2**: Product definition and business planning
- **Stage 3**: Full-stack development with testing
- **Stage 4**: Release preparation and infrastructure
- **Stage 5**: Deployment and operations (optional)

### 🎯 **What Makes This Special**
- First autonomous software development organization framework
- Complete end-to-end application generation
- Premium quality output with production-ready code
- Comprehensive testing and quality assurance
- Ready-to-deploy applications with full documentation

### 📈 **Metrics**
- **18** AI agents working in coordination
- **44** available commands across all stages
- **5** development stages with clear gates
- **8** human approval points for quality control
- **100%** autonomous capability in turbo mode

---

*"Like basil enhances every dish it touches, The System Basil release provides the essential foundation that transforms software development from weeks to hours."*