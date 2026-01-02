# Project Status: $ARGUMENTS

Show the current status of the active project with optional verbose intelligence dashboard.

## Usage

```bash
/ts-status                    # Basic status (current format)
/ts-status --verbose          # Comprehensive project intelligence dashboard
/ts-status --verbose --json   # Machine-readable verbose output
/ts-status --trail            # Agent execution trail only
/ts-status --tech             # Technology context only
/ts-status --performance      # Performance metrics only
```

## Process

### 1. Parse Arguments and Determine Output Mode

```bash
# Parse command line arguments
VERBOSE=false
JSON_OUTPUT=false
TRAIL_ONLY=false
TECH_ONLY=false
PERFORMANCE_ONLY=false

for arg in "$@"; do
    case $arg in
        --verbose) VERBOSE=true ;;
        --json) JSON_OUTPUT=true ;;
        --trail) TRAIL_ONLY=true ;;
        --tech) TECH_ONLY=true ;;
        --performance) PERFORMANCE_ONLY=true ;;
    esac
done
```

### 2. Find and Read Project Context

```bash
# Find the active project (most recently modified .md file that isn't TEMPLATE.md)
ACTIVE_PROJECT=$(find .claude/pipeline/projects/ -name "*.md" ! -name "TEMPLATE.md" -type f -printf '%T@ %p\n' | sort -n | tail -1 | cut -d' ' -f2-)

if [ -z "$ACTIVE_PROJECT" ]; then
    echo "❌ No active project found. Run /ts-new-project to create one."
    exit 1
fi

PROJECT_NAME=$(basename "$ACTIVE_PROJECT" .md)
```

### 3. Execute Appropriate Output Mode

#### **Basic Status Mode (Default)**

Display current 4-section status box:

```
╔══════════════════════════════════════════════════════════════════╗
║  📊 PROJECT STATUS: [PROJECT_NAME]                               ║
╠══════════════════════════════════════════════════════════════════╣
║                                                                  ║
║  Overall Status: [STATUS]                                        ║
║  Current Owner:  [OWNER]                                         ║
║                                                                  ║
╠══════════════════════════════════════════════════════════════════╣
║  DEPARTMENTS                                                     ║
║                                                                  ║
║  🎩 Founder-Advisor    [Status] [Approvals]                      ║
║  📐 Architecture       [Status] [Artifacts X/6] [Approvals]      ║
║  📦 Product            [Status] [Approvals]                      ║
║  💻 Development        [Status] [Approvals]                      ║
║                                                                  ║
╠══════════════════════════════════════════════════════════════════╣
║  NEXT ACTION: [Recommended command]                              ║
╚══════════════════════════════════════════════════════════════════╝
```

#### **Verbose Intelligence Mode (--verbose)**

Display comprehensive project intelligence dashboard with:

1. **Project Overview Header**
   ```
   ╔══════════════════════════════════════════════════════════════════╗
   ║  🎯 PROJECT INTELLIGENCE: [PROJECT_NAME]                         ║
   ╠══════════════════════════════════════════════════════════════════╣
   ║  Status: [STATUS] • Owner: [OWNER] • Day [X]                     ║
   ║  Build: [preset] ([target]min target) • Actual: [X]min elapsed   ║
   ║  Stack: [frontend] + [backend] + [database] + [auth]             ║
   ╚══════════════════════════════════════════════════════════════════╝
   ```

2. **Agent Trail & Timeline Analysis**
   - Parse Audit Log for complete agent execution history
   - Show timeline with day/phase organization
   - Display agent progress with time spent and outputs
   - Highlight current agent with detailed status
   - Show upcoming agents with estimates

3. **Technology Context Deep Dive**
   - Extract technology stack from SA/EA sections
   - Show AI optimization score and reasoning
   - Display architecture decisions (ADRs) summary
   - Present performance implications

4. **Current Work Detail**
   - Parse current agent's section for detailed progress
   - Show completed tasks, in-progress work, queued items
   - Extract specific technical implementation details
   - Provide completion estimates

5. **Deliverables & Artifacts**
   - Scan all department sections for artifact checklists
   - Show completed vs pending deliverables
   - Display output directory structure
   - Track quality metrics and coverage

6. **Performance Intelligence**
   - Calculate elapsed time vs targets
   - Show efficiency metrics and projections
   - Identify bottlenecks and optimization opportunities
   - Present risk assessment with mitigations

7. **Actionable Next Steps**
   - Analyze current state to recommend immediate actions
   - Show critical path to completion
   - Provide troubleshooting guidance if issues detected

#### **Focused View Modes**

**Trail Mode (--trail):**
```
🧭 AGENT EXECUTION TRAIL
═══════════════════════════════════════════════════════════════════

📅 Day 1 - Foundation
├─ 🎩 founder-advisor (2min) ✅ Strategic analysis + GREEN LIGHT
├─ 🤖 solution-architect (3min) ✅ Stack optimization (Score: 8.5/10)
└─ 🏗️ enterprise-architect (4min) ✅ System design + ADRs

📅 Day 2 - Product & Development
├─ 👔 product-lead (2min) ✅ MVP scope + user stories
├─ 📅 project-planner (2min) ✅ Roadmap + sprint breakdown
├─ 💼 business-analyst (3min) ✅ Market analysis + GREEN LIGHT
├─ 👨‍💼 principal-developer (1min) ✅ Implementation planning
├─ 🧪 qa-engineer (30s) ✅ Test strategy
├─ 🗄️ database-developer (2min) ✅ Schema + models
└─ ⚙️ backend-developer (3min) 🔄 IN PROGRESS (67% complete)

⏳ UPCOMING: frontend-developer → integration-engineer → qa final
```

**Tech Mode (--tech):**
```
🔧 TECHNOLOGY CONTEXT
═══════════════════════════════════════════════════════════════════

💿 Stack Analysis (AI Score: 8.5/10)
├─ Build Preset: mvp (15-20min target)
├─ Architecture Preset: fullstack-js (optimal for rapid development)
└─ Success Factors: Strong TypeScript ecosystem + async patterns

🎨 Frontend: Next.js 14.0.4 + TypeScript
├─ Patterns: App router + Server components + Client boundaries
├─ State: React Query + Zustand for complex state management
└─ Testing: Vitest + Testing Library + MSW mocking

⚙️ Backend: FastAPI 0.104.1 + Python 3.12
├─ Patterns: Clean architecture + async/await + dependency injection
├─ Database: SQLAlchemy 2.0 + Alembic migrations + asyncpg
└─ Testing: pytest + pytest-asyncio + factory-boy fixtures

🗄️ Database: PostgreSQL 15 + pgvector
├─ Schema: Normalized design with team isolation patterns
├─ Performance: B-tree indexes + connection pooling + query optimization
└─ Backup: Automated daily backups to S3 with point-in-time recovery
```

**Performance Mode (--performance):**
```
📈 PERFORMANCE METRICS
═══════════════════════════════════════════════════════════════════

⏱️ Timeline Analysis
├─ Target: 15-20 minutes (MVP build preset)
├─ Elapsed: 8 minutes (53% progress)
├─ Projected Total: 15 minutes (on track)
└─ Efficiency: 1.2x faster than baseline

🚀 Agent Performance
├─ Total Agents: 8/19 used (42% - efficient for MVP)
├─ Fastest: qa-engineer test plan (30 seconds)
├─ Longest: enterprise-architect (4 minutes - complex system)
└─ Current: backend-developer (3min total, 2min remaining)

📊 Quality Metrics
├─ Code Quality: Professional + TypeScript strict mode
├─ Test Coverage: Backend 85% target, Frontend 75% target
├─ Security: OWASP compliance + audit trails
└─ Performance: API <200ms, Frontend <3s, DB optimized

⚠️ Risk Assessment: LOW
├─ Timeline Risk: On track for 15min delivery
├─ Technical Risk: Proven stack with high AI success rate
└─ Quality Risk: Comprehensive testing strategy in place
```

### 4. Data Extraction Logic

#### **Parse Project Sections**

```python
def extract_project_intelligence(project_file):
    """Extract comprehensive project data for verbose status"""

    # Parse major sections
    sections = parse_markdown_sections(project_file)

    # Extract core metadata
    meta = extract_meta_section(sections['Meta'])
    build_config = extract_build_configuration(sections['Build Configuration'])
    performance = extract_performance_metrics(sections['Performance Metrics'])

    # Extract department status and artifacts
    founder = extract_founder_status(sections['Founder-Advisor Analysis'])
    solution_architect = extract_sa_status(sections['Solution Architect Assessment'])
    architecture = extract_architecture_status(sections['Architecture Department'])
    product = extract_product_status(sections['Product Department'])
    development = extract_development_status(sections['Development Department'])

    # Parse audit log for agent trail
    audit_log = extract_audit_log(sections['Audit Log'])
    agent_trail = analyze_agent_timeline(audit_log)

    # Calculate intelligence metrics
    progress = calculate_progress_metrics(agent_trail, performance)
    technology = extract_technology_context(solution_architect, architecture)
    next_actions = determine_next_actions(meta, development)

    return {
        'meta': meta,
        'build_config': build_config,
        'performance': performance,
        'agent_trail': agent_trail,
        'technology': technology,
        'progress': progress,
        'next_actions': next_actions,
        'departments': {
            'founder': founder,
            'architecture': architecture,
            'product': product,
            'development': development
        }
    }
```

#### **Analyze Agent Timeline**

```python
def analyze_agent_timeline(audit_log):
    """Build comprehensive agent execution timeline"""

    timeline = []
    for entry in audit_log:
        agent_info = {
            'timestamp': entry['timestamp'],
            'agent': entry['agent'],
            'action': entry['action'],
            'duration': calculate_duration(entry),
            'status': determine_status(entry),
            'outputs': extract_outputs(entry),
            'next_agent': predict_next_agent(entry)
        }
        timeline.append(agent_info)

    # Group by days and phases
    grouped_timeline = group_by_phases(timeline)

    # Add progress analysis
    for phase in grouped_timeline:
        phase['completion_percentage'] = calculate_phase_completion(phase)
        phase['time_efficiency'] = calculate_time_efficiency(phase)
        phase['quality_metrics'] = extract_quality_metrics(phase)

    return grouped_timeline
```

#### **Extract Technology Context**

```python
def extract_technology_context(sa_section, ea_section):
    """Extract comprehensive technology decisions and context"""

    # Parse Solution Architect decisions
    stack_locked = sa_section.get('technology_stack', {})
    ai_score = sa_section.get('assessment_score', 0)
    success_probability = sa_section.get('success_probability', 0)

    # Parse Enterprise Architect decisions
    adrs = ea_section.get('adrs', [])
    architecture_patterns = ea_section.get('patterns', {})

    # Build comprehensive tech profile
    tech_context = {
        'stack': {
            'frontend': {
                'technology': stack_locked.get('frontend'),
                'version': detect_version(stack_locked.get('frontend')),
                'patterns': extract_frontend_patterns(ea_section),
                'testing': extract_testing_framework(ea_section, 'frontend')
            },
            'backend': {
                'technology': stack_locked.get('backend'),
                'version': detect_version(stack_locked.get('backend')),
                'patterns': extract_backend_patterns(ea_section),
                'testing': extract_testing_framework(ea_section, 'backend')
            },
            'database': {
                'technology': stack_locked.get('database'),
                'version': detect_version(stack_locked.get('database')),
                'patterns': extract_database_patterns(ea_section),
                'performance': extract_db_performance_config(ea_section)
            }
        },
        'ai_optimization': {
            'score': ai_score,
            'success_probability': success_probability,
            'optimization_strategies': sa_section.get('success_strategies', []),
            'risk_factors': sa_section.get('risk_factors', [])
        },
        'architecture_decisions': adrs
    }

    return tech_context
```

### 5. Output Formatting

#### **Rich Console Output**

```python
def format_verbose_status(intelligence_data):
    """Format comprehensive project intelligence for console display"""

    output = []

    # Header with key metrics
    output.append(format_header(intelligence_data['meta'], intelligence_data['progress']))

    # Agent timeline and trail
    output.append(format_agent_timeline(intelligence_data['agent_trail']))

    # Technology context
    output.append(format_technology_context(intelligence_data['technology']))

    # Current work detail
    output.append(format_current_work_detail(intelligence_data['progress']))

    # Deliverables and artifacts
    output.append(format_deliverables(intelligence_data['departments']))

    # Performance intelligence
    output.append(format_performance_metrics(intelligence_data['performance']))

    # Actionable next steps
    output.append(format_next_actions(intelligence_data['next_actions']))

    return '\n'.join(output)
```

#### **JSON Output Structure**

```json
{
  "project_name": "my-app",
  "status": "IN_DEVELOPMENT",
  "current_owner": "backend-developer",
  "timeline": {
    "start_time": "2024-01-01T10:00:00Z",
    "elapsed_minutes": 8,
    "target_minutes": 18,
    "projected_total": 15,
    "efficiency_factor": 1.2,
    "remaining_time": 7
  },
  "technology": {
    "stack": {
      "frontend": "Next.js 14.0.4",
      "backend": "FastAPI 0.104.1",
      "database": "PostgreSQL 15",
      "auth": "Clerk"
    },
    "ai_score": 8.5,
    "success_probability": 0.89,
    "preset": "fullstack-js"
  },
  "agent_trail": [
    {
      "agent": "founder-advisor",
      "status": "COMPLETE",
      "duration_minutes": 2,
      "outputs": ["strategic_assessment", "green_light"],
      "timestamp": "2024-01-01T10:00:00Z"
    }
  ],
  "current_work": {
    "agent": "backend-developer",
    "progress_percentage": 67,
    "estimated_remaining_minutes": 2,
    "current_task": "Task management API endpoints",
    "completed_tasks": ["FastAPI foundation", "Authentication", "Database integration"],
    "queued_tasks": ["Comment system", "WebSocket layer"]
  },
  "deliverables": {
    "architecture": {"completed": 6, "total": 6},
    "product": {"completed": 3, "total": 3},
    "development": {"completed": 4, "total": 6}
  },
  "performance": {
    "on_track": true,
    "quality_level": "mvp",
    "risk_level": "LOW",
    "efficiency": "GOOD"
  },
  "next_actions": {
    "immediate": "Wait for backend-developer to complete API",
    "short_term": ["/ts-test backend", "Start frontend development"],
    "medium_term": ["/ts-integrate", "/ts-signoff"]
  },
  "risks": [
    {
      "category": "performance",
      "severity": "LOW",
      "description": "Database performance for large teams",
      "mitigation": "Connection pooling + indexing implemented"
    }
  ]
}
```

### 6. Recommend Next Action

Based on current state analysis:

```python
def determine_next_actions(project_state):
    """Analyze project state and recommend specific next actions"""

    current_status = project_state['meta']['status']
    current_owner = project_state['meta']['current_owner']
    department_status = project_state['departments']

    # Determine immediate action based on current state
    if current_status == "IN_DEVELOPMENT":
        if current_owner.endswith("-developer") and not is_agent_complete(current_owner):
            return f"Wait for {current_owner} to complete current work"
        elif current_owner == "qa-engineer":
            return f"/ts-signoff"
        else:
            return determine_next_development_command(department_status)

    elif current_status == "ARCHITECTURE":
        if not department_status['architecture']['locked']:
            return "/ts-architect"
        else:
            return "/ts-approve architecture-lock"

    # Add logic for other states...

    return "Run /ts-status --verbose for detailed analysis"
```

## Implementation Notes

### **File Structure**
```
.claude/commands/ts-status.md          # Enhanced command (this file)
.claude/lib/status-intelligence.py     # Core intelligence analysis (new)
.claude/lib/project-parser.py          # Project file parsing utilities (new)
.claude/lib/status-formatters.py       # Output formatting (new)
```

### **Dependencies**
- Rich console formatting library (for enhanced visual output)
- JSON processing for structured output
- Markdown parsing for project file analysis
- Date/time utilities for timeline analysis

### **Performance Considerations**
- Cache parsed project data for subsequent calls
- Lazy load detailed analysis only when needed
- Optimize file I/O for large project files
- Provide fast basic mode as default

### **Testing Strategy**
- Unit tests for all data extraction functions
- Integration tests with sample project files
- Output format validation for all modes
- Performance benchmarks for large projects

This enhanced `/ts-status` command transforms basic status reporting into comprehensive project intelligence, providing the detailed agent trail, technology context, and actionable insights you requested.