# 🎯 **Persona Feature Implementation Plan**

## **📋 Implementation Overview**

**Goal:** Add `--persona` awareness to Design Turbo Mode for user-centric prototype generation

**Timeline:** 4-6 weeks (3 phases)
**Complexity:** Medium-High (requires new detection engine + UI adaptation)

---

## **🏗️ Architecture Design**

### **Current State:**
```
/ts-design-turbo input/project [--domain=fintech] [--fidelity=medium]
├── Framework Detection (basic)
├── Sample Data Generation
├── Generic Prototype Creation
└── Basic Documentation
```

### **Enhanced State:**
```
/ts-design-turbo input/project [--persona=consumer] [--complexity=simple]
├── Persona Detection Engine ✨ NEW
├── Codebase Analysis for Signals ✨ NEW
├── UI Pattern Selection ✨ NEW
├── Language Adaptation ✨ NEW
├── Persona-Aware Prototype Creation ✨ ENHANCED
└── Persona-Specific Documentation ✨ ENHANCED
```

---

## **📁 Code Structure Plan**

### **New Files to Create:**
```
.claude/commands/
├── ts-design-turbo.md                    # Update with persona flags

.claude/design/
├── personas/                             # ✨ NEW DIRECTORY
│   ├── persona-detector.md               # Persona detection logic
│   ├── persona-consumer.md               # Consumer persona patterns
│   ├── persona-business.md               # Business user patterns
│   ├── persona-developer.md              # Developer patterns
│   ├── persona-admin.md                  # Admin patterns
│   └── persona-executive.md              # Executive patterns
│
├── ui-patterns/                          # ✨ NEW DIRECTORY
│   ├── navigation-patterns.md            # Nav patterns per persona
│   ├── language-adaptation.md            # Terminology mapping
│   ├── complexity-levels.md              # UI complexity rules
│   └── component-library.md              # Persona-specific components
│
├── detection/                            # ✨ NEW DIRECTORY
│   ├── domain-signals.md                 # Domain → persona mapping
│   ├── codebase-analysis.md              # Code pattern analysis
│   ├── confidence-scoring.md             # Detection confidence logic
│   └── fallback-rules.md                 # Default resolution
│
└── templates/                            # ✨ NEW DIRECTORY
    ├── consumer-template.md              # Consumer UI templates
    ├── business-template.md              # Business UI templates
    ├── developer-template.md             # Developer UI templates
    └── shared-components.md              # Common components
```

### **Existing Files to Modify:**
```
.claude/commands/ts-design-turbo.md       # Add persona parameters
.claude/agents/prototype-developer.md     # Add persona awareness
.claude/agents/wireframe-generator.md     # Add persona patterns
```

---

## **🔧 Phase 1: Detection Engine (Week 1-2)**

### **1.1 Persona Detection Framework**

**File:** `.claude/design/personas/persona-detector.md`
```markdown
# Persona Detection Engine

## Detection Signals

### Domain Analysis (60% weight)
```yaml
Domain Mapping:
  fintech|finance|banking|budget → consumer
  personal|health|fitness|lifestyle → consumer
  saas|crm|sales|marketing → business-user
  api|cli|framework|library → developer
  admin|enterprise|management → admin
  dashboard|analytics|reporting → power-user
```

### Codebase Analysis (25% weight)
```yaml
Technology Signals:
  Mobile Frameworks: (React Native, Flutter) → consumer
  Business Libraries: (Chart.js, D3, analytics) → business-user
  CLI Tools: (Typer, Click, Commander) → developer
  Admin Patterns: (RBAC, user management) → admin
```

### Feature Analysis (15% weight)
```yaml
Feature Patterns:
  Personal Data Models: (user profiles, personal accounts) → consumer
  Business Workflows: (approvals, reporting, teams) → business-user
  Technical Configs: (environment vars, APIs) → developer
  System Management: (users, permissions, logs) → admin
```

## Confidence Scoring
- High (90%+): Auto-apply detected persona
- Medium (70-89%): Auto-apply but suggest alternatives
- Low (50-69%): Use business-user default, show suggestion
- Very Low (<50%): Silent fallback to business-user
```

### **1.2 Detection Algorithm Implementation**

**File:** `.claude/design/detection/domain-signals.md`
```markdown
# Domain Signal Detection

## Primary Keywords
```yaml
Consumer Indicators:
  High Confidence: personal, budget, finance, health, fitness, lifestyle
  Medium Confidence: mobile, consumer, individual, family

Business Indicators:
  High Confidence: saas, crm, business, enterprise, team, organization
  Medium Confidence: dashboard, analytics, reporting, management

Developer Indicators:
  High Confidence: api, cli, framework, library, sdk, toolkit
  Medium Confidence: integration, webhook, automation
```

## Technology Stack Analysis
```yaml
Frontend Frameworks:
  React Native/Flutter/Ionic → +30 consumer score
  React/Vue/Angular → +10 business score
  No frontend/CLI heavy → +30 developer score

Backend Patterns:
  FastAPI/Django REST → +20 business score
  CLI frameworks (Typer, Click) → +30 developer score
  Authentication/RBAC → +20 admin score
```
```

### **1.3 Fallback and Override System**

**File:** `.claude/design/detection/fallback-rules.md`
```markdown
# Default Resolution Rules

## Default Hierarchy
1. Explicit --persona flag (100% confidence)
2. High confidence detection (90%+)
3. Medium confidence with user prompt
4. Fallback to business-user default

## Override Examples
```bash
# Explicit override always wins
/ts-design-turbo input/enterprise-app --persona=consumer
# Forces consumer patterns even for enterprise codebase

# Confidence-based prompts
/ts-design-turbo input/personal-finance
# Detects: consumer (85% confidence)
# Prompts: "Detected personal finance app, using --persona=consumer. Override? [Y/n]"
```
```

---

## **🎨 Phase 2: UI Adaptation Engine (Week 3-4)**

### **2.1 Persona Pattern Library**

**File:** `.claude/design/personas/persona-consumer.md`
```markdown
# Consumer Persona Patterns

## Core Characteristics
- Non-technical end users
- Need guidance and explanations
- Prefer simple, clear actions
- Overwhelmed by complexity

## UI Patterns
```yaml
Navigation:
  Style: Simple, guided (3-4 main sections)
  Labels: Plain English ("My Money" not "Dashboard")
  Structure: Tab-based or card-based navigation

Layout:
  Density: Low information density
  Spacing: Generous white space
  Cards: Large, visual cards with icons
  Typography: Larger fonts, clear hierarchy

Language:
  Tone: Friendly, encouraging, supportive
  Technical Terms: Avoided or explained
  Actions: Clear, single-purpose buttons
  Help: Prominent, contextual guidance

Color Palette:
  Primary: Warm, approachable blues (#3B82F6)
  Success: Gentle green (#10B981)
  Warning: Soft amber (#F59E0B)
  Error: Friendly red (#EF4444)
```

## Component Adaptations
```yaml
Tables:
  - Simplified columns (max 4-5)
  - Large touch targets for mobile
  - Clear visual separation
  - Prominent action buttons

Forms:
  - Single column layouts
  - Clear field labels and help text
  - Progressive disclosure (basic → advanced)
  - Confirmation for important actions

Charts:
  - Simple visualizations (bar, pie, line)
  - Clear legends and tooltips
  - Minimal data points per chart
  - Actionable insights prominently displayed
```
```

### **2.2 Language Adaptation Engine**

**File:** `.claude/design/ui-patterns/language-adaptation.md`
```markdown
# Language Adaptation by Persona

## Terminology Mapping
```yaml
Technical → Consumer:
  "Dashboard" → "My Overview"
  "Transaction Categorization" → "Organize Spending"
  "Cash Flow Analysis" → "Money In vs Out"
  "Merchant Identification" → "Where You Shopped"
  "Budget Variance" → "How You're Doing"
  "API Endpoints" → "Connections"
  "Authentication" → "Sign In"

Technical → Business:
  "Dashboard" → "Overview"
  "Transaction Categorization" → "Expense Management"
  "Cash Flow Analysis" → "Cash Flow Report"
  "API Endpoints" → "Data Integrations"
  "User Management" → "Team Management"

Business → Developer:
  "Overview" → "Dashboard"
  "Team Management" → "User Management API"
  "Reports" → "Data Export Endpoints"
  "Settings" → "Configuration"
```

## Action Button Language
```yaml
Consumer:
  - "Add My Transaction"
  - "See How I'm Doing"
  - "Organize My Spending"
  - "Get Help"

Business:
  - "Create Transaction"
  - "View Performance"
  - "Manage Categories"
  - "Support"

Developer:
  - "POST /transactions"
  - "View Metrics"
  - "Configure Rules"
  - "Documentation"
```
```

### **2.3 Navigation Pattern Adaptation**

**File:** `.claude/design/ui-patterns/navigation-patterns.md`
```markdown
# Navigation Patterns by Persona

## Consumer Navigation
```yaml
Pattern: Simple Tab Navigation
Structure:
  - "My Money" (overview)
  - "Spending" (transactions)
  - "Goals" (budgets/targets)
  - "Help" (support/guides)

Features:
  - Large touch targets
  - Icons with text labels
  - Breadcrumb navigation
  - Contextual help buttons
```

## Business Navigation
```yaml
Pattern: Dashboard + Sidebar
Structure:
  - "Dashboard" (metrics overview)
  - "Reports" (detailed analytics)
  - "Management" (bulk operations)
  - "Settings" (configuration)

Features:
  - Collapsible sidebar
  - Quick action toolbar
  - Search functionality
  - Export buttons prominent
```

## Developer Navigation
```yaml
Pattern: Technical Hierarchy
Structure:
  - "API" (endpoints/documentation)
  - "Integrations" (webhooks/connections)
  - "Config" (settings/environment)
  - "Logs" (debugging/monitoring)

Features:
  - Dense information display
  - Advanced search/filtering
  - Bulk operations
  - Raw data views available
```
```

---

## **⚡ Phase 3: Integration & Templates (Week 5-6)**

### **3.1 Enhanced Prototype Generation**

**File:** `.claude/agents/prototype-developer.md` (Modifications)
```markdown
# Enhanced Prototype Developer Agent

## NEW: Persona Awareness
When generating prototypes, adapt UI patterns based on detected/specified persona:

### Input Parameters (NEW)
```yaml
persona: consumer|business-user|power-user|developer|admin|executive
complexity: minimal|simple|standard|advanced
experience: novice|intermediate|expert
context: personal|team|organization
```

### Generation Logic (ENHANCED)
1. Apply persona-specific navigation patterns
2. Adapt language and terminology
3. Adjust information density and complexity
4. Select appropriate component variants
5. Generate persona-specific sample data

### Example Adaptations:
```yaml
FNX-1 + consumer persona:
  Navigation: "My Money" → "Spending" → "Goals" → "Help"
  Language: "Where did I spend?" instead of "Merchant Analysis"
  Features: Guided setup, contextual help, simplified views
  Data: Personal finance scenarios with explanations

FNX-1 + business persona:
  Navigation: "Dashboard" → "Reports" → "Analytics" → "Settings"
  Language: "Expense Management" instead of "Spending"
  Features: Bulk operations, export options, team management
  Data: Business expense scenarios with ROI metrics
```
```

### **3.2 Command Integration**

**File:** `.claude/commands/ts-design-turbo.md` (Updated)
```markdown
# Design Department Turbo Mode: Enhanced with Persona Awareness

## NEW Usage Options
```bash
# Auto-detect persona from codebase
/ts-design-turbo [project-path]

# Specify persona explicitly
/ts-design-turbo [project-path] --persona=consumer
/ts-design-turbo [project-path] --persona=business-user --complexity=advanced

# Combined persona + existing flags
/ts-design-turbo [project-path] --persona=developer --fidelity=high --api-discovery
```

## NEW Persona Parameters
```yaml
--persona: User persona type
  Options: consumer, business-user, power-user, developer, admin, executive
  Default: Auto-detected or business-user fallback

--complexity: UI complexity level
  Options: minimal, simple, standard, advanced
  Default: Inferred from persona (consumer=simple, developer=advanced)

--experience: User experience level
  Options: novice, intermediate, expert
  Default: Inferred from persona
```

## Enhanced Process
```yaml
Phase 0: Quick Project Scan + Persona Detection ✨ NEW
  - Framework detection (existing)
  - Persona signal analysis (NEW)
  - Confidence scoring and fallback logic (NEW)
  - User confirmation for medium confidence (NEW)

Phase 1: Persona-Aware Prototype Creation ✨ ENHANCED
  - Apply persona-specific UI patterns
  - Adapt language and terminology
  - Adjust complexity and information density
  - Generate persona-appropriate sample data

Phase 2: Enhanced Documentation ✨ ENHANCED
  - Persona-specific user guides
  - Targeted feature explanations
  - Appropriate technical depth
```
```

### **3.3 Testing Strategy**

**File:** `test-persona-implementation.md`
```markdown
# Persona Implementation Testing Plan

## Test Cases by Persona
```yaml
Consumer Persona (FNX-1):
  Input: Personal finance app codebase
  Expected: Simple navigation, plain English, guided flows
  Validation: Check for "My Money" vs "Dashboard" language

Business Persona (CRM):
  Input: Sales/CRM application codebase
  Expected: Professional dashboard, export features, metrics
  Validation: Check for business terminology and power features

Developer Persona (CLI Tool):
  Input: API/CLI framework codebase
  Expected: Technical interface, advanced controls, dense information
  Validation: Check for API-first language and technical depth
```

## Detection Accuracy Testing
```yaml
Test Scenarios:
  - Personal finance apps → consumer (90%+ confidence)
  - Business SaaS → business-user (85%+ confidence)
  - Developer tools → developer (90%+ confidence)
  - Enterprise admin → admin (80%+ confidence)

Edge Cases:
  - Mixed-purpose applications
  - Ambiguous domain language
  - Technical debt in consumer apps
```

## A/B Testing Plan
```yaml
Comparison Tests:
  1. Generic vs Persona-Aware Prototypes
  2. Auto-detected vs Manual persona selection
  3. Different complexity levels for same persona
  4. User preference validation surveys
```
```

---

## **🚀 Implementation Phases**

### **Week 1-2: Detection Foundation**
- [ ] Create persona detection engine structure
- [ ] Implement domain signal analysis
- [ ] Build confidence scoring system
- [ ] Add fallback logic and user prompts
- [ ] Test detection accuracy on sample codebases

### **Week 3-4: UI Adaptation**
- [ ] Create persona pattern libraries (5 personas)
- [ ] Implement language adaptation engine
- [ ] Build navigation pattern variants
- [ ] Create component adaptation logic
- [ ] Test UI generation variations

### **Week 5-6: Integration**
- [ ] Integrate detection with existing turbo mode
- [ ] Update prototype generation agent
- [ ] Add command-line parameter handling
- [ ] Create comprehensive testing suite
- [ ] Generate comparison examples

---

## **📊 Success Metrics**

### **Detection Accuracy:**
- [ ] 90%+ accuracy for clear domain signals
- [ ] 80%+ user satisfaction with auto-detected personas
- [ ] <5% false positive rate requiring manual override

### **UI Quality:**
- [ ] Persona-appropriate language in 95%+ of generated content
- [ ] Navigation patterns match persona conventions
- [ ] Complexity level appropriate for target user

### **User Adoption:**
- [ ] 70%+ users prefer persona-aware prototypes
- [ ] 50%+ increase in stakeholder approval ratings
- [ ] 30% reduction in prototype revision requests

---

## **🎯 Rollout Strategy**

### **Soft Launch (Week 7)**
```bash
# Maintain backward compatibility
/ts-design-turbo input/project        # Works as before
/ts-design-turbo input/project --persona=consumer  # New feature
```

### **Feature Announcement (Week 8)**
- Demo consumer vs business versions of same app
- Show detection accuracy on real codebases
- Highlight time savings from persona-appropriate prototypes

### **Full Integration (Week 9)**
- Auto-detection enabled by default
- User feedback collection
- Iteration based on real usage patterns

---

## **💡 Key Insights from Design Discussion**

### **Persona vs User-Type Decision**
- `--persona` is more UX-focused and intuitive than `--user-type`
- Aligns with standard design thinking terminology
- More approachable for non-technical stakeholders

### **Default Strategy**
- **Primary Default:** `business-user` (safe middle ground)
- **Auto-Detection:** High confidence signals override default
- **FNX-1 Specific:** Auto-detects to `consumer` based on personal finance domain

### **Value Proposition**
- Transforms generic prototypes into user-centric designs
- Matches actual target audience from the start
- Reduces revision cycles and improves stakeholder satisfaction
- Provides clear implementation guidance for developers

---

**Status:** Implementation plan ready for Phase 1 development
**Next Step:** Begin persona detection engine implementation
**Dependencies:** None (can start immediately)

This implementation will transform Design Turbo Mode from generic prototype generation to user-centric design that actually matches the intended audience! 🎯