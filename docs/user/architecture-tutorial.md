# Architecture Tutorial: From Idea to Technical Design

**Master The System's architecture phase through practical, hands-on examples that turn ideas into solid technical foundations.**

---

## 🎯 5-Minute Quick Start

**Goal:** Transform your idea into a complete technical architecture in just 5 minutes.

### ⚡ Ultra-Fast Architecture Exploration (1-2 minutes)
```bash
# Start with pure architecture design
/ts-turbo arch-explore "social media scheduler for small businesses" --build-skip-stage=product --build-skip-stage=development

# Review the generated architecture decisions
/ts-view architecture
```

**What you get:** Complete system design, technology choices, and architectural patterns - no code, just the technical foundation.

---

## 🏗️ Understanding Architecture in The System

### What Happens in the Architecture Phase?

The **Enterprise Architect** agent analyzes your idea and makes comprehensive technical decisions:

1. **🔍 Requirements Analysis** - Understands what you're building
2. **🏗️ System Design** - Creates the overall architecture
3. **⚙️ Technology Selection** - Chooses your tech stack
4. **📋 Implementation Plan** - Defines development approach
5. **📝 Architecture Decisions** - Documents key choices (ADRs)

### Architecture vs. Product vs. Development

| Phase | Owner | Duration | Output | Purpose |
|-------|-------|----------|--------|---------|
| **Architecture** | Enterprise Architect | 2-5 min | Technical design | *How* to build it |
| **Product** | Product Lead | 3-5 min | User stories, MVP scope | *What* to build |
| **Development** | Dev Team | 10-30 min | Working code | *Actually* build it |

**💡 Key Insight:** Architecture answers "How should this be built?" while Product answers "What should we build?"

---

## 🎓 Step-by-Step Architecture Walkthrough

Let's walk through creating architecture for a **"Task Management App with Team Collaboration"**

### Step 1: Start the Architecture Phase
```bash
/ts-turbo task-arch "task management app with team collaboration and real-time updates" --build-skip-stage=product --build-skip-stage=development
```

### Step 2: Watch the Architecture Process
You'll see the Enterprise Architect work through:

```
📋 Analyzing Requirements...
- Task management with teams
- Real-time collaboration
- Multi-user system
- Need for persistence and sync

🏗️ Designing System Architecture...
- Database: PostgreSQL + Redis for caching
- Backend: FastAPI for REST APIs
- Frontend: Next.js with real-time components
- Real-time: WebSocket connections

⚙️ Selecting Technologies...
- Database Layer: PostgreSQL + Redis
- API Layer: FastAPI + SQLAlchemy
- Frontend: Next.js + TypeScript
- Real-time: Socket.IO
- Testing: pytest + Jest + Playwright
```

### Step 3: Review Architecture Decisions
```bash
# See the complete architecture
/ts-view architecture

# Check technology choices
/ts-view architecture.technology-stack

# Review system design patterns
/ts-view architecture.system-design
```

### Step 4: Understand the Output
The architecture includes:

- **📊 System Architecture Diagram**
- **⚙️ Complete Technology Stack**
- **🗄️ Database Schema Design**
- **🔗 API Design Patterns**
- **🏗️ Component Architecture**
- **📝 Architectural Decision Records (ADRs)**

---

## 💡 Architecture Patterns by Project Type

### 🌐 Static Website
```bash
/ts-turbo portfolio-arch "developer portfolio with blog" --preset=static --build-skip-stage=development
```
**Gets you:**
- Next.js static site generation
- Markdown-based content management
- Optimized build pipeline
- CDN deployment strategy

### 📱 Full-Stack Web App
```bash
/ts-turbo saas-arch "subscription management platform" --preset=fullstack-js --build-skip-stage=development
```
**Gets you:**
- Three-tier architecture (Frontend/API/Database)
- Authentication & authorization patterns
- Payment integration architecture
- Scalable data models

### 🔧 CLI Tool
```bash
/ts-turbo cli-arch "code generation tool" --preset=cli-tool --build-skip-stage=development
```
**Gets you:**
- Command-line interface design
- Plugin architecture
- Configuration management
- Package distribution strategy

### 🏢 Microservices
```bash
/ts-turbo enterprise-arch "order management system" --preset=microservice --build-skip-stage=development
```
**Gets you:**
- Service decomposition strategy
- Inter-service communication patterns
- Data consistency approaches
- Deployment and monitoring architecture

---

## 🎯 Practical Architecture Examples

### Example 1: E-commerce Platform
```bash
# Start with architecture exploration
/ts-turbo ecommerce-arch "multi-vendor e-commerce marketplace" --build-skip-stage=product --build-skip-stage=development
```

**Architecture decisions you'll see:**
- **Database:** PostgreSQL with separate schemas for vendors, products, orders
- **Backend:** FastAPI microservices for catalog, payments, orders
- **Frontend:** Next.js with server-side rendering for SEO
- **Payments:** Stripe integration with webhook handling
- **Search:** Elasticsearch for product discovery
- **Files:** S3 for product images with CDN

### Example 2: Real-time Chat App
```bash
/ts-turbo chat-arch "slack-like team communication platform" --build-skip-stage=development
```

**Architecture decisions you'll see:**
- **Real-time:** Socket.IO for instant messaging
- **Database:** PostgreSQL for messages + Redis for presence
- **Backend:** FastAPI with async handling
- **Frontend:** Next.js with React Query for state management
- **Files:** S3 for file sharing
- **Notifications:** Push notifications via service workers

### Example 3: Data Analytics Dashboard
```bash
/ts-turbo analytics-arch "business intelligence dashboard with real-time metrics" --build-skip-stage=development
```

**Architecture decisions you'll see:**
- **Data Pipeline:** ETL processes for data ingestion
- **Database:** PostgreSQL + ClickHouse for analytics
- **Backend:** FastAPI with background task processing
- **Frontend:** Next.js with charting libraries
- **Caching:** Redis for query result caching
- **Real-time:** WebSockets for live dashboard updates

---

## 🔧 Advanced Architecture Techniques

### Understanding Architecture Decisions

When you run `/ts-view architecture`, you'll see sections like:

#### System Design
```markdown
## System Design

### Architecture Pattern: Three-Tier Architecture
- **Presentation Layer:** Next.js React application
- **Business Logic Layer:** FastAPI REST services
- **Data Layer:** PostgreSQL with Redis caching

### Key Design Decisions
1. **Stateless API Design:** RESTful services with JWT authentication
2. **Event-Driven Updates:** WebSocket connections for real-time features
3. **Microservices Approach:** Separate services for core domains
```

#### Technology Justifications
```markdown
## Technology Stack Rationale

### Database: PostgreSQL
- **Why:** Complex relational data with ACID requirements
- **Alternatives considered:** MongoDB (rejected - need strong consistency)
- **Trade-offs:** More complex than NoSQL, but better data integrity

### Frontend: Next.js
- **Why:** React with SSR for SEO, great developer experience
- **Alternatives considered:** Vue.js, pure React
- **Trade-offs:** Larger bundle size, but better performance and SEO
```

### Customizing Architecture Decisions

You can influence architecture through your project description:

```bash
# Emphasize performance
/ts-turbo fast-app "high-performance trading dashboard requiring sub-100ms response times"

# Emphasize security
/ts-turbo secure-app "healthcare platform with HIPAA compliance requirements"

# Emphasize scalability
/ts-turbo scale-app "social platform expecting millions of users"

# Emphasize simplicity
/ts-turbo simple-app "internal tool for small team, prioritize development speed"
```

---

## 🎛️ Architecture Customization

### Working with Preferences
The architecture phase reads from `.claude/config/preferences.yaml`. Key sections:

#### Database Preferences
```yaml
database:
  primary: postgresql  # mysql, mongodb, sqlite
  cache: redis
  search: elasticsearch  # optional
  queue: redis  # celery task queue
```

#### Cloud & Infrastructure
```yaml
cloud:
  provider: aws  # gcp, azure
  regions: [us-east-1]
  environments: [development, staging, production]
```

#### Framework Preferences
```yaml
backend:
  language: python  # typescript, go
  framework: fastapi  # django, express, gin

frontend:
  framework: nextjs  # react, vue
  language: typescript
  styling: tailwindcss  # styled-components, scss
```

### Override for Specific Projects
```bash
# Force a specific database choice
/ts-turbo mongo-app "content management system requiring flexible schema"
# Mention "flexible schema" and "NoSQL" in description

# Request specific cloud provider
/ts-turbo gcp-app "machine learning platform using Google Cloud AI services"
# Mention "Google Cloud" in description

# Request specific framework
/ts-turbo django-app "traditional web application with admin interface"
# Mention "Django admin" or "traditional web app" in description
```

---

## 🔍 Architecture Review & Validation

### Understanding Your Architecture Output

After running architecture, always review these key sections:

1. **📋 System Overview** - High-level architecture summary
2. **🏗️ Component Design** - How pieces fit together
3. **🗄️ Data Architecture** - Database and data flow design
4. **🔗 API Design** - Service interfaces and contracts
5. **⚙️ Technology Stack** - All framework and tool choices
6. **📝 ADRs** - Key decision explanations

### Quality Checklist

Review your architecture against this checklist:

#### ✅ **Technical Foundation**
- [ ] Database choice matches data requirements
- [ ] Frontend framework suits user experience needs
- [ ] Backend framework handles expected scale
- [ ] Authentication approach is appropriate

#### ✅ **Scalability & Performance**
- [ ] Caching strategy for performance bottlenecks
- [ ] Database design supports expected query patterns
- [ ] API design allows for future mobile apps
- [ ] Real-time features use appropriate technology

#### ✅ **Security & Compliance**
- [ ] Authentication & authorization patterns defined
- [ ] Data encryption and security measures planned
- [ ] API security (rate limiting, validation) considered
- [ ] Compliance requirements (if any) addressed

#### ✅ **Development Experience**
- [ ] Technology choices align with team skills
- [ ] Development workflow and tooling planned
- [ ] Testing strategy covers all layers
- [ ] Deployment pipeline architecture defined

---

## 🚀 From Architecture to Development

### Architecture-First Development Workflow

```bash
# 1. Explore architecture (1-2 min)
/ts-turbo arch-design "task management with teams" --build-skip-stage=product --build-skip-stage=development

# 2. Review and refine architecture
/ts-view architecture

# 3. Add product planning if needed (5-8 min total)
/ts-turbo product-plan "task management with teams" --build-skip-stage=development

# 4. Build the full application (15-20 min total)
/ts-turbo task-app "task management with teams" --build=mvp
```

### Skip Architecture Phase
If you already have architecture decisions:

```bash
# Skip directly to product planning
/ts-turbo existing-app "add payment feature to existing e-commerce app" --build-skip-stage=architecture
```

Note: Skipping architecture is rarely recommended as it defines the technical foundation.

---

## 💡 Architecture Best Practices

### 1. Start Simple, Design for Growth
```bash
# Good: Simple start with growth path
/ts-turbo blog-app "personal blog that could become a platform"

# Better: Clear about future needs
/ts-turbo blog-platform "personal blog designed to support multiple authors later"
```

### 2. Be Specific About Requirements
```bash
# Vague: Generic requirements
/ts-turbo app "social app"

# Clear: Specific requirements
/ts-turbo social-app "Instagram-like photo sharing with real-time comments and stories"
```

### 3. Consider Non-Functional Requirements
```bash
# Include performance requirements
/ts-turbo trading-app "stock trading platform requiring sub-100ms API responses"

# Include security requirements
/ts-turbo medical-app "patient management system with HIPAA compliance"

# Include scale requirements
/ts-turbo social-platform "social network designed for 1M+ concurrent users"
```

### 4. Think About Team & Maintenance
```bash
# Consider team size
/ts-turbo startup-app "MVP for 2-person team prioritizing development speed"

# Consider long-term maintenance
/ts-turbo enterprise-app "system designed for 10+ year maintenance lifecycle"
```

---

## 🎯 Common Architecture Scenarios

### Scenario 1: MVP for Startup
**Goal:** Get to market fast, but built for growth

```bash
/ts-turbo startup-mvp "job board platform MVP optimized for rapid development and user validation"
```

**Results in:**
- Simple but scalable database design
- FastAPI for rapid backend development
- Next.js for fast frontend iteration
- Deployment-ready from day one
- Clear path to add features

### Scenario 2: Enterprise Integration
**Goal:** Integrate with existing systems, meet compliance

```bash
/ts-turbo enterprise-integration "employee onboarding system integrating with existing HR systems and requiring SOC2 compliance"
```

**Results in:**
- API-first design for integrations
- Strong authentication & authorization
- Audit trails and compliance features
- Enterprise deployment patterns
- Security-first architecture

### Scenario 3: High-Performance System
**Goal:** Handle high load, optimize for performance

```bash
/ts-turbo performance-app "real-time trading dashboard requiring sub-100ms latency and 10k concurrent users"
```

**Results in:**
- Optimized database design with indexes
- Redis caching strategy
- WebSocket connections for real-time
- CDN strategy for static assets
- Performance monitoring built-in

### Scenario 4: Content Management
**Goal:** Flexible content, easy for non-technical users

```bash
/ts-turbo cms-app "headless CMS for marketing team with visual editor and multi-site support"
```

**Results in:**
- Flexible content schema design
- API-first headless architecture
- Rich text editing capabilities
- Multi-tenancy considerations
- SEO optimization features

---

## ❓ Architecture FAQ

### Q: Can I change the architecture later?
**A:** Yes, but it's expensive. Architecture sets the foundation - changing databases or major frameworks later requires significant rework. Get the architecture right early.

### Q: What if I don't like the technology choices?
**A:** You can influence choices through:
1. **Description keywords** - Mention specific technologies you want
2. **Preferences.yaml** - Set default technology preferences
3. **Manual override** - Edit the architecture before proceeding

### Q: How detailed should my project description be?
**A:** Include:
- **Core functionality** - What the app does
- **Scale expectations** - How many users, how much data
- **Special requirements** - Real-time, mobile, compliance, performance
- **Team constraints** - Technology preferences, skill levels

### Q: Can I see example architectures?
**A:** Yes! Run quick architecture explorations:
```bash
/ts-turbo examples-ecommerce "e-commerce marketplace" --build-skip-stage=product --build-skip-stage=development
/ts-turbo examples-saas "SaaS subscription platform" --build-skip-stage=product --build-skip-stage=development
/ts-turbo examples-social "social media platform" --build-skip-stage=product --build-skip-stage=development
```

### Q: What if I need a technology not in the defaults?
**A:** Mention it specifically in your description:
```bash
/ts-turbo blockchain-app "NFT marketplace using Solidity smart contracts and Web3 integration"
/ts-turbo ml-app "recommendation engine using TensorFlow and real-time inference"
```

### Q: Should I always run architecture-only first?
**A:** For complex projects, yes:
1. Run architecture-only to understand the technical approach
2. Review and validate the design
3. Then run the full build process

For simple projects, you can go directly to full development.

---

## 🚀 Next Steps

After mastering architecture, explore:

1. **[Product Planning Tutorial](product-tutorial.md)** - Turn architecture into user stories
2. **[Development Workflow](workflow.md)** - From design to working code
3. **[Build Presets Guide](build-presets.md)** - Speed up your development process
4. **[Advanced Configuration](configuration.md)** - Customize technology defaults

### Quick Architecture Practice

Try these exercises to master architecture:

```bash
# 1. Compare architectures for the same idea (2 min each)
/ts-turbo simple-blog "personal blog" --preset=static --build-skip-stage=development
/ts-turbo platform-blog "multi-author publishing platform" --preset=fullstack-js --build-skip-stage=development

# 2. Explore different technology stacks (1-2 min each)
/ts-turbo python-api "REST API" --build-skip-stage=development  # Gets FastAPI
/ts-turbo node-api "REST API built with Node.js" --build-skip-stage=development  # Gets Express

# 3. Practice non-functional requirements (1-2 min each)
/ts-turbo scale-app "chat app for 1M users" --build-skip-stage=development
/ts-turbo secure-app "banking app with regulatory compliance" --build-skip-stage=development
```

**🎯 Master architecture, and everything else becomes faster and easier!**

---

*Updated by /ts-user-docs-update • Framework: 19 agents, 48 commands*