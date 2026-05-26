# Cyber-Performance Core Harness

## Stack

- Next.js App Router
- TypeScript (strict, no `any`)
- Tailwind CSS
- Biome for linting and formatting

## Visual Identity

The harness follows an Athletic Performance + Cyber-Tech direction optimized for dark surfaces:

- OLED-first dark canvas with pure black structural backgrounds
- Electric Lime and Cyber Cyan as high-contrast action accents
- Space Grotesk headlines + Inter body copy for technical readability
- HUD-inspired card framing and telemetry-forward visual rhythm

## Local Development

1. Install dependencies:

```bash
pnpm install
```

2. Start local server:

```bash
pnpm dev
```

3. Build production bundle:

```bash
pnpm build
```

4. Run production server:

```bash
pnpm start
```

5. Run quality checks:

```bash
pnpm lint
```

## Harness Routes

- `/` -> cyber run modular performance hub
- `/catalog` -> elite performance catalog
- `/command-center` -> performance metrics dashboard
- `/checkout` -> secure checkout protocol

## Governance Files

- `docs/ROLES.md` defines execution boundaries per agent persona.
- `docs/NON_NEGOTIABLE_RULES.md` defines hard engineering constraints.
- `docs/TASKS.md` is the master backlog index.
- `.harness/tasks/` stores one detailed task specification per backlog item.
- `docs/SESSION_LOG.md` is the handoff protocol for multi-turn agent work.
