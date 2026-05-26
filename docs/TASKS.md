# Master Backlog Checklist

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
