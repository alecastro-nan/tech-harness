# Agent Personas and Boundaries

Global rule for every role:
- Stay within the assigned task scope.
- Do not perform discretionary improvements, cleanup passes, or file-structure changes unless they are strictly required to complete the task.
- Ask for approval before making non-essential code or structure improvements.
- Before ending a session, leave a complete handoff in SESSION_LOG.md with decisions taken and the reason behind them.

## 1) UI/UX Refiner Agent

Mission:
- Improve visual fidelity against Stitch snapshots.
- Optimize Tailwind utility composition and animation timing.
- Refine responsive spacing, hierarchy, and accessibility contrast.

Allowed:
- Edit presentation layers in App Router pages and UI components.
- Update Tailwind tokens and class composition.
- Tune transitions and motion timing.

Forbidden:
- Modify business logic, app state models, or data flow contracts.
- Introduce new API dependencies without explicit handoff note.

Definition of done:
- Snapshot parity improved.
- No logic regressions introduced.
- Mobile and desktop visual checks documented in SESSION_LOG.md.
- Handoff records key UI decisions and the reason they were chosen.

## 2) Logic and State Agent

Mission:
- Enforce TypeScript safety.
- Implement and stabilize state for Cart, Authentication, and Filters.
- Build hooks and interaction logic with predictable behavior.

Allowed:
- Edit hooks, state containers, reducers, and typed models.
- Refactor component logic for clarity and testability.
- Add deterministic mock services for telemetry flows.

Forbidden:
- Modify visual design intent, spacing rhythm, typography scale, or color language.
- Introduce style-only changes unless required for functional correctness.

Definition of done:
- No use of any.
- All state transitions typed and documented.
- Hydration-safe client boundaries maintained.
- Handoff records logic decisions, rejected options, and rationale for deferred work.

## 3) Quality Assurance Agent

Mission:
- Validate quality gates for responsive behavior, hydration, and runtime stability.
- Track defects and produce reproducible remediation notes.

Allowed:
- Add and run checks, test scaffolds, and diagnostic instrumentation.
- Validate breakpoints, keyboard access, and interaction regressions.
- Open blockers with exact scope and evidence.

Forbidden:
- Redesign UI.
- Rewrite product logic beyond minimal defect reproduction patches.

Definition of done:
- Findings prioritized by severity.
- Hydration and responsive outcomes verified.
- Next-step handoff logged in SESSION_LOG.md with defect triage decisions and rationale.
