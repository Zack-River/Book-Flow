# BookFlow Context Index

This file serves as the memory bank and reference index for the BookFlow project. It maps out the documentation structure and holds the core understanding of the project's intent and architectural decisions.

## Documentation Map

- **Core Vision & Strategy**:
  - `README.md` — Core idea and tech stack requirements.
  - `NOTES.md` — Workflow rules and execution strategy.
  - `DESIGN.md` — Design vision and aesthetic guidelines.
  - `arch/bookflow-plan.md` — Preliminary 5-day execution plan, schema details, API mapping, and overall architecture.
  - `docs/CASE_STUDY.md` — The portfolio case study narrative (problem, solution, results).
  - `docs/BOOKFLOW_SPEC.md` — Product & Engineering Specifications.

- **Technical Architecture (To be populated)**:
  - `docs/PROJECT_STRUCTURE.md` — Final Next.js App Router structure.
  - `CONTRIBUTING.md` — Contribution rules and developer guidelines.
  - `docs/DATABASE.md` — Prisma schema, relations, and Neon DB logic.
  - `docs/ARCHITECTURE.md` — Server vs Client Component rules, State management, Auth.
  - `docs/API.md` — API documentation (sprint by sprint).

- **UI & Product Specs**:
  - `docs/product/BOOKFLOW-UI-SPEC.md` — UI behavior and intent (The "behavioral conversion engine").
  - `docs/design-system/DESIGN.md` — Design system tokens.
  - `docs/screens/` — Directory containing UX/UI references (`html/` for demo code, `png/` for mockups).

## Core Understanding

BookFlow is a generic, production-ready SaaS booking platform designed to serve as a high-impact portfolio piece. It is a "behavioral conversion engine" divided into 3 distinct roles:
1. **Customer**: Directory, Profiles, Booking Wizard, Dashboard (My Bookings).
2. **Provider**: Calendar, Availability Management, Upcoming Bookings, Revenue Analytics.
3. **Admin**: Platform Health, Users/Providers Management, System Analytics.

**Key Technical Decisions:**
- **Stack**: Next.js 15 (App Router), TypeScript, Tailwind CSS 4, shadcn/ui, Prisma + PostgreSQL (Neon), Clerk (Auth), Zustand.
- **Data Fetching**: 80-90% handled by Server Components, Server Actions, and Prisma.
- **Client State**: Zustand reserved strictly for transient UI state (Booking Wizard, Filters, Modals).
- **Styling**: Modern SaaS look (clean, soft shadows, neutral palette, `#2563EB` primary).

**Milestone/Execution Flow:**
The goal is to initialize the project accurately, configure the database and auth, and ensure the foundation strictly adheres to the server-first architecture and role-based access rules. Once initialized, documentation will be updated iteratively.
