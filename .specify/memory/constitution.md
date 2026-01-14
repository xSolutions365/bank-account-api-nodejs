<!--
SYNC IMPACT REPORT
==================
Version Change: [TEMPLATE] → 1.0.0
First ratification of the Bank Account API project constitution.

Modified Principles:
- NEW: Separation of Concerns (Full-stack architecture principle)
- NEW: REST API Design (Backend contract principle)
- NEW: Test-Driven Development (Quality assurance principle)
- NEW: Component Modularity (Frontend architecture principle)
- NEW: Type Safety (Static typing enforcement)

Added Sections:
- Core Principles (5 principles established)
- Technology Standards (Full-stack TypeScript with NestJS + React/Vite)
- Development Workflow (Git branching, testing requirements)
- Governance (Amendment process and compliance)

Templates Requiring Updates:
✅ plan-template.md - Already references constitution check
✅ spec-template.md - Already aligned with testable user stories
✅ tasks-template.md - Already supports user story organization and test-first approach

Follow-up TODOs:
- None: All placeholders filled with project-specific values
-->

# Bank Account API Constitution

## Core Principles

### I. Separation of Concerns
**MUST** maintain clear boundaries between frontend (bank-account-ui) and backend (bank-account-api) layers. Each layer operates independently with well-defined contracts via REST API. Backend handles business logic, data management, and validation. Frontend focuses on presentation, user interaction, and client-side validation. No business logic shall be duplicated across layers.

**Rationale**: Enables independent development, testing, and deployment of frontend and backend. Facilitates technology upgrades and team specialization. Prevents tight coupling and code duplication.

### II. REST API Design
**MUST** expose all backend functionality through RESTful HTTP endpoints. Controllers handle HTTP concerns only; business logic resides in service classes. API responses MUST use appropriate HTTP status codes and consistent JSON structures. All endpoints MUST be documented with expected inputs, outputs, and error scenarios.

**Rationale**: Ensures predictable, discoverable, and maintainable API contracts. Separates HTTP layer from business logic for better testability. Enables frontend and backend teams to work in parallel against agreed contracts.

### III. Test-Driven Development (NON-NEGOTIABLE)
**MUST** write tests before implementation. Test hierarchy: unit tests for models/services, integration tests for controllers/API workflows, end-to-end tests for complete user journeys. All new features MUST include corresponding test coverage. Tests MUST fail before implementation begins, then pass after correct implementation (Red-Green-Refactor).

**Rationale**: Ensures code correctness, prevents regressions, and provides living documentation. Forces clear thinking about requirements before coding. Creates safety net for refactoring and feature additions.

### IV. Component Modularity
**MUST** organize frontend code into reusable, single-responsibility components. Each React component focuses on one UI concern. Shared UI patterns extracted into common components (Header, Footer, Table). API calls isolated in dedicated service modules, never inline in components. Page components orchestrate layout, not business logic.

**Rationale**: Promotes code reuse, simplifies testing, and improves maintainability. Enables consistent UI/UX across the application. Facilitates component-level optimization and parallel development.

### V. Type Safety
**MUST** leverage TypeScript's static typing throughout the stack. All functions, parameters, and return values MUST have explicit type annotations. Models MUST define clear interfaces for data structures. No use of `any` type except with explicit justification. Configuration files MUST use TypeScript where supported.

**Rationale**: Catches errors at compile time, not runtime. Provides self-documenting code and IDE autocompletion. Enables safe refactoring with confidence. Enforces data contract consistency between frontend and backend.

## Technology Standards

**Stack**: Full-stack TypeScript Node.js application
- **Backend Framework**: NestJS 11.x (REST API with dependency injection)
- **Frontend Framework**: React 19.x with Vite 6.x build tool
- **UI Library**: Material-UI (MUI) 6.x for consistent design system
- **Language**: TypeScript 5.7.x across all projects
- **Testing**: Jest 29.x (backend), Mocha 11.x (frontend), Supertest for E2E
- **Code Quality**: ESLint 9.x, Prettier 3.x for consistent formatting
- **HTTP Client**: Axios for frontend API calls

**Build & Run**:
- Backend: `npm run start` (port 3000), `npm run start:dev` for watch mode
- Frontend: `npm run dev` (port 5173)
- Tests: `npm run test` (unit), `npm run test:e2e` (E2E), `npm run test:all`

**Versioning**: Semantic versioning (MAJOR.MINOR.PATCH) for API changes. MAJOR for breaking API changes, MINOR for backward-compatible features, PATCH for bug fixes.

## Development Workflow

**Branching Strategy**: Feature branches follow pattern `###-feature-name` where ### is issue/spec number. Branches created from main, merged via pull request after all tests pass.

**Testing Requirements**:
- **Unit Tests**: Required for all services, models, and utility functions
- **Integration Tests**: Required for all controllers and API endpoints
- **E2E Tests**: Required for critical user journeys (account viewing, data retrieval)
- **Coverage**: Aim for 80%+ coverage on business logic; 100% on critical paths

**Code Review Gates**:
- All tests passing (unit, integration, E2E)
- TypeScript compilation successful with no errors
- ESLint checks passing with no violations
- Type safety maintained (no `any` without justification)
- Constitution compliance verified

**Directory Structure**:
- `bank-account-api/src/` - Backend source (controllers, services, models)
- `bank-account-api/test/` - Backend tests (unit, integration, E2E)
- `bank-account-ui/src/` - Frontend source (components, pages, API services)
- `bank-account-ui/test/` - Frontend tests
- `.specify/` - Project specifications, plans, and governance

## Governance

This constitution supersedes all other development practices and guidelines. All code reviews, architectural decisions, and feature implementations MUST verify compliance with these principles.

**Amendment Process**:
1. Proposed changes documented with rationale and impact analysis
2. Review by team leads for alignment with project goals
3. Update version number per semantic versioning rules
4. Propagate changes to affected templates and documentation
5. Announce changes to all team members with migration guidance

**Compliance Verification**:
- Pre-commit hooks enforce linting and type checking
- Pull requests include constitution compliance checklist
- Quarterly audits review adherence to principles
- Technical debt explicitly tracked when exceptions required

**Complexity Justification**: Any violation of principles (e.g., using `any` type, skipping tests, breaking separation of concerns) MUST be documented with: (a) specific problem requiring exception, (b) simpler alternatives considered and rejected, (c) plan to refactor if/when possible.

**Version**: 1.0.0 | **Ratified**: 2026-01-14 | **Last Amended**: 2026-01-14
