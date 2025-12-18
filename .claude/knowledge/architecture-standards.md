# Architecture Standards

## Design Principles

### 1. Simplicity First
- Start simple, add complexity only when proven necessary
- Prefer boring, proven technologies
- Monolith-first for MVPs

### 2. Cloud-Native
- Design for cloud deployment
- Leverage managed services
- Infrastructure as Code

### 3. Security by Design
- Zero trust architecture
- Encrypt everything
- Principle of least privilege

### 4. Observable
- Logging, metrics, tracing from day one
- Design for debuggability

### 5. Cost-Conscious
- Right-size resources
- Monitor and optimize spend

---

## Technology Standards

### Backend
| Preferred | Acceptable |
|-----------|------------|
| Python FastAPI | Node.js, Go |
| PostgreSQL | MySQL |
| Redis | Memcached |

### Frontend
| Preferred | Acceptable |
|-----------|------------|
| React/Next.js | Vue 3, Svelte |
| Tailwind CSS | CSS Modules |

### Infrastructure
| Preferred | Acceptable |
|-----------|------------|
| AWS | GCP |
| ECS Fargate | EKS |
| Terraform | Pulumi |
| GitHub Actions | GitLab CI |

---

## Required Artifacts

Every architecture must include:

1. **System Context Diagram**
2. **Component Diagram**
3. **Data Model**
4. **API Contracts**
5. **Infrastructure Design**
6. **Security Architecture**

---

## ADR Requirements

Mandatory ADRs for:
- Database technology choice
- Authentication approach
- API style
- Hosting approach
- Any deviation from standards
