# Session Handshake Log

Use this file as the required handoff protocol between agents.

## Session Initialization Check (Required at Boot)

Fill this block immediately when an agent starts work.

- Timestamp:
- Active Role:
- Target Component(s):
- Objective Summary:

## In-Session Notes (Optional)

- Key observations:
- Design or logic constraints discovered:
- Files touched:

## Session Close Check (Required Before Exit)

Fill this block before ending or context exhaustion.

- Timestamp:
- Completed Tasks:
- Decisions Taken:
- Decision Rationale:
- Blockers Encountered:
- Explicit Next Steps for Incoming Agent:
- Validation Performed (build/lint/test/manual):

Handoff requirements:
- The handoff must be clear enough for the next agent to resume without re-discovering context.
- Every session closure must state what was changed, what was intentionally not changed, and why.
- Any tradeoff, rejected option, scope cut, or temporary workaround must include the reason it was chosen.
- If work is incomplete, the handoff must identify the exact remaining task, current blocker, and recommended next action.

## Handoff History

| Timestamp | Role | Scope | Completed | Decisions | Rationale | Blockers | Next Steps |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2026-05-26T00:00:00Z | Placeholder | Initialize template | Created SESSION_LOG.md template | Added initial template | Establish a required handoff format for future sessions | None | Replace this row with first real handoff |
