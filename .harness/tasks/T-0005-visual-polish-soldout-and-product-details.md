# T-0005 Visual Polish, Sold-Out States, and Product Details

## Context

After T-0004, the storefront still needs a visual polish pass focused on cart presentation, sold-out merchandising, and a proper product detail destination for catalog entries. The current command-center route also exposes placeholder telemetry content that should be replaced by a clear in-progress message.

## Scope

- Blur the full storefront shell when the mini-cart drawer is open, not only the header.
- Extend product domain data with a `soldOut` field.
- Mark `velocita-x1` and `pulse-tracer` as sold out.
- When a product is sold out:
  - Disable add-to-cart interactions.
  - Replace the visible price with a `Sold Out` label.
- Replace the `Command Center` route content with a `Coming Soon` placeholder message.
- Rename mini-cart secondary CTA from `Return to Matrix` to a shop-oriented label.
- Ensure product cards remain reusable and make each product title clickable to its detail page.
- Add a product detail page using the existing Stitch-derived visual language already imported in repo snapshots.

## Out of Scope

- Backend inventory synchronization.
- Real command-center telemetry implementation.
- External MCP/Google Stitch querying beyond the references already present in this repository.

## Implementation Plan

1. Create T-0005 branch-scoped changes and update backlog/spec tracking.
2. Introduce canonical product data with sold-out metadata and helpers for listing/detail views.
3. Update reusable product cards and add-to-cart button behavior for sold-out products.
4. Implement product detail route and metadata using current Stitch-derived visual patterns.
5. Replace command-center with a coming-soon placeholder.
6. Apply cart drawer blur to the full app shell using an isolated overlay/drawer rendering strategy.
7. Validate with lint/build and manual route/UI checks.

## Validation Plan

- Commands:
  - `pnpm lint`
  - `pnpm build`
- Manual checks:
  - Opening the cart blurs the full app shell behind the drawer.
  - `Velocita X-1` and `Pulse Tracer` show `Sold Out` and cannot be added to cart.
  - Product titles navigate to detail pages.
  - Detail pages render correctly and match the existing cyber-performance visual language.
  - `Command Center` only shows a coming-soon state.
  - Mini-cart secondary CTA label is updated.

## Risks / Notes

- Portal-based cart rendering must avoid hydration issues.
- Sold-out items must not break existing cart persistence for already-added items.
- Product detail route should remain consistent with current App Router conventions.

## Status

- State: Done
- Owner: Copilot
- Last Updated: 2026-05-27
