# Build Component: $ARGUMENTS

Build a specific component (database, backend, frontend).

## Usage

- `build database` - Database Developer creates schema, models, migrations
- `build backend` - Backend Developer creates APIs, services
- `build frontend` - Frontend Developer creates components, pages

## Process

1. Read the active project file

2. Based on $ARGUMENTS:

### database

**Gate Check:** 
- Implementation Plan exists
- Test Plan exists with DB test cases

**Action:**
- Use **database-developer** subagent
- Read assigned tasks (DB-XXX)
- Read test cases to satisfy (DB-TXXX)

**Creates:**
```
output/[project]/src/database/
├── schema/
│   └── schema.sql
├── models/
│   ├── __init__.py
│   ├── base.py
│   └── [model].py
├── migrations/
│   └── 001_initial.sql
└── seeds/
    └── seed_data.sql

output/[project]/ts-tests/database/
├── __init__.py
├── conftest.py
└── test_models.py
```

**On complete:** "🗄️ Database complete. Run `test database` for QA review."

---

### backend

**Gate Check:**
- Database QA review: PASS
- If not passed: "⛔ Database must pass QA first. Run `test database`"

**Action:**
- Use **backend-developer** subagent
- Read assigned tasks (BE-XXX)
- Read test cases to satisfy (BE-TXXX)
- Reference database models

**Creates:**
```
output/[project]/src/backend/
├── __init__.py
├── main.py
├── config.py
├── dependencies.py
├── api/
│   ├── __init__.py
│   └── routes/
│       └── [resource].py
├── services/
│   └── [resource].py
├── schemas/
│   └── [resource].py
└── middleware/
    └── auth.py

output/[project]/ts-tests/backend/
├── __init__.py
├── conftest.py
└── test_api_[resource].py
```

**On complete:** "⚙️ Backend complete. Run `test backend` for QA review."

---

### frontend

**Gate Check:**
- Backend API design exists (can run parallel after API design)
- If no API design: "⛔ Backend API design required first."

**Action:**
- Use **frontend-developer** subagent
- Read assigned tasks (FE-XXX)
- Read test cases to satisfy (FE-TXXX)
- Reference backend API contracts

**Creates:**
```
output/[project]/src/frontend/
├── components/
│   ├── Button.tsx
│   ├── Input.tsx
│   ├── Card.tsx
│   └── index.ts
├── pages/
│   └── [Resource]Page.tsx
├── state/
│   └── authStore.ts
├── lib/
│   ├── api.ts
│   └── utils.ts
├── hooks/
│   └── use[Hook].ts
└── types/
    └── index.ts

output/[project]/ts-tests/frontend/
├── components/
│   └── Button.test.tsx
└── pages/
    └── [Resource]Page.test.tsx
```

**On complete:** "🎨 Frontend complete. Run `test frontend` for QA review."
