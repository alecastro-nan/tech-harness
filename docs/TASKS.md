# Master Backlog Checklist

## Backlog Workflow

- Keep this file as the master backlog list.
- For every new task created here, create a matching spec in `.harness/tasks/`.
- Use a shared task id between both places with format `T-####` (for example: `T-0001`).
- Use `.harness/tasks/TEMPLATE.md` as the baseline for each task spec.
- Detailed execution breakdown and validation plan live in each task spec file.

## Task Registry (ID Format: T-####)

- [x] `T-0001` Replace Quantum Void card with Garmin Forerunner 165 Music and migrate displayed item prices to ARS using factor 1420. Spec: `.harness/tasks/T-0001-garmin-forerunner-165-music-and-ars-pricing.md`.
- [x] `T-0002` Implement functional persistent cart (Zustand), fix floating cart visual defects, and ensure add/remove/quantity flows are accurate. Spec: `.harness/tasks/T-0002-functional-cart-zustand-and-visual-fixes.md`.
- [x] `T-0003` Improve SEO, code quality, and security hardening using `.agents` skills for SEO/Next/React/Tailwind. Spec: `.harness/tasks/T-0003-seo-code-quality-and-security-hardening.md`.
- [x] `T-0004` Unify primary CTA buttons, improve checkout verification flow, and add toast notification system managed by Zustand. Spec: `.harness/tasks/T-0004-button-unification-verification-flow-and-toasts.md`.
- [x] `T-0005` Apply visual polish to cart overlay, sold-out catalog behavior, command-center placeholder state, and product detail pages. Spec: `.harness/tasks/T-0005-visual-polish-soldout-and-product-details.md`.

## Phase 1: High-Fidelity UI Skeleton Replicas (Importing from Stitch)

- [x] Import Stitch source HTML references into App Router route structure.
- [x] Translate core views to TypeScript TSX route files.
- [x] Add shared navigation/footer primitives for consistency.
- [x] Inject Cyber-Performance design tokens into Tailwind config.
- [x] Import snapshot assets into public/snapshots.
- [ ] Perform side-by-side visual pass against all Stitch screen references.

## Phase 2: Interactivity and Client-Side Hydration

- [x] Isolate mini-cart drawer into dedicated client component.
- [x] Isolate checkout verification input into dedicated client component.
- [ ] Implement persistent cart state and quantity editing.
- [ ] Implement authentication flow state machine and error states.
- [ ] Add mobile filter drawer with hydration-safe interactions.
- [ ] Run hydration diagnostics across all interactive routes.

## Phase 3: Integration and Telemetry Sync

- [ ] Create typed mock telemetry service for command-center charts.
- [ ] Wire dashboard cards to mock telemetry hooks.
- [ ] Add integration seams for future backend telemetry sync.
- [ ] Instrument performance metrics and route-level event logging.
- [ ] Validate telemetry fallback behavior under network failure.
