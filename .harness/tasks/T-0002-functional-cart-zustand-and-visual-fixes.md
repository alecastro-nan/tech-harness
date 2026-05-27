# T-0002 Functional Cart with Persistent Zustand and Visual Fixes

## Context

Task T-0001 is considered finished, and the next priority is delivering a fully functional, user-friendly floating cart experience. The current implementation has visual defects and incomplete cart interactions:

- The "Return to Matrix" button appears visually broken (initially unreadable/too dark, only visible on hover).
- The cart scrollable region is too small, making added items hard to inspect.
- Floating cart UI pieces look inconsistent, as if they belong to different design systems.
- "Add" actions are not reliably adding items to the cart.
- Cart state management needs to move to persistent Zustand for a stable user experience.

Relevant likely locations:
- `components/ui/MiniCart.tsx`
- `components/ui/TopNav.tsx`
- `app/page.tsx`
- `app/catalog/page.tsx`
- `app/checkout/page.tsx`
- `lib/` (new shared cart store/helpers if needed)

## Scope

- Implement a persistent cart store using Zustand (with persistence enabled).
- Ensure all "add to cart" entry points correctly add products to cart state.
- Ensure cart logic supports accurate add/remove/update quantity operations.
- Ensure totals/subtotals are derived consistently from source cart state.
- Fix floating cart visual defects:
  - "Return to Matrix" button must be readable and accessible in default state and hover/focus states.
  - Scrollable cart list area must be usable and large enough to review cart items.
  - Cart container, items, controls, and actions must follow one coherent visual style.
- Preserve current route behavior while making cart interactions functional across home, catalog, mini-cart, and checkout views.

## Out of Scope

- Backend checkout integration or payment gateway work.
- Inventory synchronization with external systems.
- Full design-system overhaul outside cart-related UI.
- Introducing global state managers other than Zustand for cart domain.

## Implementation Plan

1. Audit current cart interaction flow (add/remove/quantity/totals) across home, catalog, mini-cart, and checkout.
2. Introduce a typed Zustand cart store with persistence:
   - State: items, derived totals helpers.
   - Actions: addItem, removeItem, incrementItem, decrementItem, setQuantity, clearCart.
   - Persistence key/version and safe hydration behavior.
3. Rewire existing cart-related UI components to consume the Zustand store.
4. Normalize "add" buttons so each uses a single reliable add-to-cart handler with product payload validation.
5. Fix cart visuals:
   - Correct "Return to Matrix" button default contrast and hover/focus styles.
   - Expand and stabilize scrollable cart list dimensions and overflow behavior.
   - Align typography, spacing, colors, borders, and button patterns for a consistent cart UI.
6. Verify cart math precision and update propagation after every mutation path.

## Validation Plan

- Manual checks:
  - Adding items from `/` and `/catalog` updates mini-cart immediately.
  - Increasing/decreasing/removing items behaves predictably and never desynchronizes totals.
  - Persisted cart survives page reload and route changes.
  - "Return to Matrix" button is clearly visible before hover and remains accessible on hover/focus.
  - Cart scroll area allows reviewing all items when list grows.
  - Floating cart visual language is consistent across header, list, totals, and action controls.
- Commands:
  - `pnpm lint`
  - `pnpm build`

## Risks / Notes

- Persistence hydration mismatches can cause UI flicker or stale values if not guarded in client components.
- Multiple product sources may have shape differences; add handler should normalize payloads.
- Styling fixes should avoid unintended regressions in non-cart components.

## Status

- State: Planned
- Owner: Unassigned
- Last Updated: 2026-05-27
