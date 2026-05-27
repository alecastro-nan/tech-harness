# Task Specs

This directory stores one specification file per task listed in `docs/TASKS.md`.

## Purpose

- Keep `docs/TASKS.md` as the master backlog index.
- Keep implementation-ready details per task in this directory.

## Naming Convention

Use one file per task with a stable id prefix:

- `T-0001-short-title.md`
- `T-0002-short-title.md`

The id in this folder should match the id used in `docs/TASKS.md`.

## Required Sections Per Task Spec

Each task file should include at least:

1. Context
2. Scope
3. Out of Scope
4. Implementation Plan
5. Validation Plan
6. Risks / Notes
7. Status

## Authoring Flow

1. Add a new task entry in `docs/TASKS.md` with a new task id.
2. Create the corresponding file in `.harness/tasks/`.
3. Break down execution steps and validations in that file.
4. Start implementation on a dedicated branch that includes the task id (for example: `feat/T-0001-short-title`).
5. Create atomic commits for coherent work units only when needed to keep review history clear.
6. Update status in both places as work progresses.
7. When closing the task, open a pull request from the task branch to `main`.
8. Write the pull request description using `./.github/PULL_REQUEST_TEMPLATE.md`.
