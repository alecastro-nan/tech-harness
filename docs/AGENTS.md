<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

## Harness Execution Scope

- Agents must stay inside the explicitly requested task or the active item in `docs/TASKS.md`.
- `docs/TASKS.md` is the backlog index; each task listed there must have a detailed spec file in `.harness/tasks/`.
- Task specs in `.harness/tasks/` must include implementation breakdown and validation plan before execution starts.
- While implementing a new task, agents must create and work on a dedicated branch that includes the task id (for example: `feat/T-0001-short-title`).
- Agents should create atomic commits aligned to meaningful units of work, only when necessary to preserve clean and reviewable history.
- At task closure, agents must open a pull request from the task branch to `main` with a complete description.
- Pull request descriptions must follow `./.github/PULL_REQUEST_TEMPLATE.md` and include scope, validation evidence, risks, and follow-ups.
- Agents must not pursue opportunistic refactors, polish passes, cleanups, or architectural improvements unless they are strictly required to complete the assigned task or remove a blocking defect.
- If an agent identifies a non-essential improvement in code or file structure, it must ask for approval before making that change.
- File moves, renames, directory reshapes, dependency changes, and broad refactors always require approval unless they are strictly necessary to complete the assigned task.
- Before introducing new UI blocks, agents must corroborate whether reusable components already exist and reuse them when possible.
- When duplicated UI patterns are required by the active task, agents should extract atomic/reusable components as part of the scoped implementation.
- Reuse-oriented refactors must preserve behavior and avoid breaking changes.
- Every session-ending response must leave a clear handoff in `docs/SESSION_LOG.md`.
- That handoff must include the decisions taken during the session and the reason for each material decision, especially tradeoffs, deferred work, and scope cuts.
- The session-ending handoff must include the pull request number/link when a task is closed.
<!-- END:nextjs-agent-rules -->
