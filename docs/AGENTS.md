<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

## Harness Execution Scope

- Agents must stay inside the explicitly requested task or the active item in `docs/TASKS.md`.
- `docs/TASKS.md` is the backlog index; each task listed there must have a detailed spec file in `.harness/tasks/`.
- Task specs in `.harness/tasks/` must include implementation breakdown and validation plan before execution starts.
- Agents must not pursue opportunistic refactors, polish passes, cleanups, or architectural improvements unless they are strictly required to complete the assigned task or remove a blocking defect.
- If an agent identifies a non-essential improvement in code or file structure, it must ask for approval before making that change.
- File moves, renames, directory reshapes, dependency changes, and broad refactors always require approval unless they are strictly necessary to complete the assigned task.
- Every session-ending response must leave a clear handoff in `docs/SESSION_LOG.md`.
- That handoff must include the decisions taken during the session and the reason for each material decision, especially tradeoffs, deferred work, and scope cuts.
<!-- END:nextjs-agent-rules -->
