# Non-Negotiable Engineering Rules

## Mobile-First Enforcement

- Layouts must be authored mobile-first and progressively enhanced upward.
- Primary transactional actions must remain inside the bottom 33% thumb-zone on mobile screens.
- Any checkout or confirmation CTA that leaves the thumb-zone is a blocking defect.

## Styling System Enforcement

- Tailwind is mandatory for component and page styling.
- Raw CSS and inline styles are forbidden in TSX/JSX files.
- Global exceptions are only allowed inside app/globals.css.

## Type Safety Enforcement

- TypeScript strict typing is required.
- any is forbidden across the codebase.
- All external data contracts must be represented with explicit types.

## Scope Control and Change Authorization

- Agents must execute only the requested work or the explicitly assigned backlog item.
- For each new backlog task implementation, work must happen on a dedicated branch that includes the task id (format: `T-####`).
- Commits must be atomic and scoped to coherent change units, and should be created only when they are necessary to preserve a clear review trail.
- Code improvements, refactors, cleanups, and structural changes are forbidden unless they are strictly necessary to complete the assigned work or fix a blocking defect.
- Any non-essential improvement to code quality, architecture, or file organization requires explicit approval before execution.
- Proposed but non-essential improvements should be surfaced as recommendations, not implemented by default.

## Session Closure and Handoff Quality

- No agent session may end without a clear handoff entry in SESSION_LOG.md.
- Every handoff must capture completed work, open blockers, explicit next steps, decisions taken, and the reason for those decisions.
- If an agent intentionally avoids a change, defers work, narrows scope, or applies a workaround, the handoff must explain why.
- A handoff that omits rationale for material decisions is incomplete.

## OLED Dark Structure

- Structural mobile backgrounds must use pure black #000000.
- Elevated surfaces may use layered dark tones but cannot replace the primary structural black.
- Any deviation must be documented in SESSION_LOG.md with justification and approval.
