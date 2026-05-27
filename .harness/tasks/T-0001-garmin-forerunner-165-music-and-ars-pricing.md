# T-0001 Garmin Forerunner 165 Music and ARS Pricing

## Context

Current catalog data includes a product card named "Quantum Void" on both home and catalog views. The task requires replacing that card's image/title with Garmin Forerunner 165 Music content and adding a short product description inside the card under the title. In addition, all displayed item prices must be converted to Argentine pesos (ARS) by multiplying the currently shown numeric values by 1420.

Relevant current locations:
- `app/page.tsx` (`featuredProducts` and card render)
- `app/catalog/page.tsx` (`products` and card render)
- `components/ui/MiniCart.tsx` (displayed item totals)
- `app/checkout/page.tsx` (line totals, subtotal, savings, total)

## Scope

- Replace the product entry identified by id `quantum-void` with Garmin Forerunner 165 Music data where it appears in product arrays.
- Update the product card text so Garmin Forerunner 165 Music has a concise description rendered inside the card directly below the title.
- Convert displayed item prices to ARS by multiplying existing shown values by `1420`.
- Ensure ARS formatting is consistently displayed where item prices/totals are visible to the user.

## Out of Scope

- Backend currency services or live exchange-rate integration.
- Broader catalog redesign unrelated to this product/currency task.
- Adding new payment providers or checkout business logic changes.

## Implementation Plan

1. Identify all price rendering points in the current UI (home, catalog, mini-cart, checkout).
2. Replace the `quantum-void` product metadata with Garmin Forerunner 165 Music values:
   - `name`: Garmin Forerunner 165 Music
   - `description`: short product description under title inside card
   - `image`: Garmin Forerunner 165 Music image URL/asset
3. Implement ARS conversion logic based on factor `1420` for all displayed item values.
4. Standardize currency output using ARS style (for example with `Intl.NumberFormat` and locale `es-AR`).
5. Validate visual output on home, catalog, mini-cart, and checkout routes.

## Validation Plan

- Manual UI checks:
  - `/` shows Garmin Forerunner 165 Music card instead of Quantum Void.
  - `/catalog` shows Garmin Forerunner 165 Music card instead of Quantum Void.
  - Card includes brief product description below title and inside the card.
  - All visible prices reflect previous displayed values multiplied by `1420`.
  - Price labels render as ARS consistently.
- Run lint/build validation after implementation:
  - `pnpm lint`
  - `pnpm build`

## Risks / Notes

- Some views may share seed price numbers while rendering totals differently; ensure every user-facing amount is converted once (avoid double conversion).
- Price formatting can drift between components if conversion/formatting is duplicated; prefer a shared helper if needed.

## Status

- State: Done
- Owner: Copilot
- Last Updated: 2026-05-27
