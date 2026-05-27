# T-0004 Button Unification, Verification Flow, and Toast Messaging

## Context

After T-0003, the app still has duplicated CTA button styles, checkout verification UX gaps, and no centralized toast messaging for key user actions.

## Scope

- Create an atomic reusable button component and consolidate similar CTA styles.
- Apply the same CTA style currently used by the cart `Checkout` button to:
  - Home `Explore Elite Series`
  - Checkout `Authenticate and Finalize`
- Update checkout layout so `Authenticate and Finalize` stays at the page bottom in normal document flow (not floating/fixed).
- Refactor verification flow:
  - Hide `Waiting for Verification Code` and code slots by default.
  - Show `Send Code` button first.
  - Enable `Send Code` only when email is valid.
  - After click, show waiting section + verification inputs.
  - Keep `Send Code` visible; disable with 60s resend timer.
- Add subtle Tailwind press animation for product add buttons in cards.
- Add subtle Tailwind hover feedback for product add buttons in cards.
- Install a toast library and connect it to a dedicated Zustand store for app messaging.
- Trigger success toast every time a product is added to cart.
- Add a `Verificate` primary button below verification inputs, enabled only when the full numeric code is entered.
- Create a reusable `SecondActionButton` component and replace duplicated secondary CTA styles, including `Command Center`, `Send Code`, and `Return to Matrix`.

## Out of Scope

- Backend OTP delivery implementation.
- Auth provider integration.
- Visual redesign outside requested CTA/verification behavior.

## Implementation Plan

1. Add T-0004 branch-scoped implementation files and reusable atomic button component.
2. Replace CTA usages in Home, MiniCart, and Checkout with shared style/component.
3. Refactor checkout verification state machine (email validation, send/resend timer, conditional verification UI).
4. Remove floating checkout CTA positioning and anchor CTA at bottom in document flow.
5. Install toast library and create Zustand toast store + renderer component.
6. Wire add-to-cart action to dispatch success toasts through Zustand messaging.
7. Validate with lint/build and manual behavior checks.
8. Finalize secondary button reuse and verification submit gating logic.

## Validation Plan

- Commands:
  - `pnpm lint`
  - `pnpm build`
- Manual checks:
  - CTA style consistency across `Checkout`, `Explore Elite Series`, and `Authenticate and Finalize`.
  - Checkout CTA remains bottom-aligned without fixed/floating behavior.
  - Verification UI starts with only `Send Code`, then reveals waiting + code inputs post-send.
  - `Send Code` button remains visible and disabled for 60 seconds after send.
  - Add-to-cart button has subtle press animation.
  - Add-to-cart button has subtle hover feedback.
  - Adding a product always triggers success toast.
  - `Verificate` stays disabled until all numeric code inputs are completed.
  - `SecondActionButton` is reused by all matching secondary CTAs.

## Risks / Notes

- Shared CTA extraction must not regress existing interactions on links vs buttons.
- Timer logic must clean up intervals to avoid memory leaks.
- Toast rendering must avoid duplicate emission during re-renders.

## Status

- State: Done
- Owner: Copilot
- Last Updated: 2026-05-27
