# Combined AppKit

A personal full-stack component system built on the same architectural patterns as Databricks AppKit — pnpm monorepo, TypeScript throughout, Shadcn/Radix UI components, plugin-based data and AI access — skinned with the **Combined Design System** (royal blue · army green · brass gold).

Built for three use cases: **interactive React apps**, **high-style LinkedIn infographics** (via Remotion), and **ML/AI apps** running local models on a Mac mini.

---

## Design system

**Combined** is a Swiss/Bauhaus/Claymorphism hybrid — strict grid structure, purposeful color blocking, and soft clay shadows.

| Principle | Rule |
|---|---|
| Swiss structure | Strict grids, hairline rules, disciplined alignment. Every line means something. |
| Bauhaus color | Two independent color systems that never overlap — brand and semantic. |
| Clay depth | Soft layered shadows (`--clay`, `--clay-sm`, `--clay-press`) give surfaces a tactile lift. |

### Brand palette
`--royal #1F4E8F` · `--gold #C9A227` · `--green #4A5340`

### Semantic palette (outcomes only — never brand colors)
`--pos #117A37` · `--neg #C8102E` · `--warn #B26A00`

---

## Monorepo structure

```
combined-appkit/
├── packages/
│   ├── tokens/          @combined/tokens — CSS variables + Tailwind config
│   ├── ui/              @combined/ui     — 16 React components
│   └── core/            @combined/core   — Hono server factory + utilities
│
├── plugins/
│   ├── ai/              @combined/plugin-ai     — Groq + Ollama providers
│   ├── data/            @combined/plugin-data   — libSQL/Postgres + React hooks
│   └── export/          @combined/plugin-export — Remotion LinkedIn compositions
│
└── apps/
    └── studio/          Component explorer — localhost:3000
```

---

## Tech stack

| Layer | Technology |
|---|---|
| Language | TypeScript |
| Package manager | pnpm workspaces |
| Build orchestration | Turborepo |
| Frontend framework | React 19 |
| Dev server / bundler | Vite |
| Styling | Tailwind CSS (tokens via `@combined/tokens`) |
| Component primitives | Shadcn/ui + Radix UI |
| Backend server | Hono |
| Database (local) | libSQL / SQLite via `@libsql/client` |
| Database (production) | Postgres via `pg` |
| AI (cloud) | Groq — OpenAI-compatible API |
| AI (local) | Ollama — runs on Mac mini |
| Infographic rendering | Remotion |

---

## Component library — `@combined/ui`

| Category | Components |
|---|---|
| Actions | `Button` (5 variants · 3 sizes) |
| Status | `Badge` (6 variants) |
| Data | `StatCard`, `DataTable`, `Progress` |
| Feedback | `Alert` (4 variants), `EmptyState` |
| Forms | `Input`, `Textarea`, `Select`, `Label`, `Field`, `Switch`, `Checkbox` |
| Navigation | `Tabs` |
| Overlays | `Tooltip`, `Dropdown`, `Modal` |
| Loading | `Skeleton`, `SkeletonText`, `SkeletonTitle`, `SkeletonAvatar`, `SkeletonButton`, `SkeletonStat`, `Spinner` |
| Layout | `Card`, `Avatar` |

All interactive components (Tabs, Switch, Checkbox, Dropdown, Modal, Tooltip, Progress) are built on Radix UI primitives — fully keyboard navigable and ARIA-compliant.

---

## AI plugin — `@combined/plugin-ai`

Groq and Ollama implement the same `AIProvider` interface. Both use the OpenAI-compatible API so one client handles both — swap providers with a single env var.

```typescript
import { createAIFromEnv, useChat } from '@combined/plugin-ai'

const ai = createAIFromEnv() // reads AI_PROVIDER, GROQ_API_KEY, etc.

// In a component:
const { messages, send, loading } = useChat(ai)
```

| Provider | When to use |
|---|---|
| Groq | Speed, larger models, one-shot prompts |
| Ollama | Local Mac mini, private data, zero API cost |

Switch between them via `.env`:

```bash
AI_PROVIDER=groq    # cloud
AI_PROVIDER=ollama  # local Mac mini
```

---

## Data plugin — `@combined/plugin-data`

Same driver interface for local SQLite and production Postgres. Local dev uses libSQL (pure JS, no native build). Production points at Postgres via `DATABASE_URL`. Also accepts Turso cloud URLs for edge deployments.

```typescript
import { createDataFromEnv, useQuery } from '@combined/plugin-data'

const db = createDataFromEnv()

// In a component:
const { data, loading, error } = useQuery(db, 'SELECT * FROM games ORDER BY date DESC')
```

---

## Export plugin — `@combined/plugin-export`

Remotion compositions pre-wired with Combined tokens. Build infographics as React components, render them to pixel-perfect PNGs for LinkedIn.

```typescript
import { renderLinkedInPost } from '@combined/plugin-export'

await renderLinkedInPost(
  './plugins/export/src/Root.tsx',
  'StatInfographic',
  './output/post.png',
  {
    title: 'Season Highlights',
    stats: [
      { value: '48',  label: 'Wins',   delta: '▲ +5',  deltaType: 'pos' },
      { value: '91%', label: 'PK Pct', delta: '3rd in league' },
    ],
  }
)
```

### Built-in compositions

| Composition | Dimensions | Use |
|---|---|---|
| `StatInfographic` | 1200 × 627 | Dashboard stats → LinkedIn post |
| `TextCard` | 1080 × 1080 | Quote / headline → LinkedIn square |
| `TextCardDark` | 1080 × 1080 | Dark brand fill version |

Preview all compositions in the Remotion Studio:

```bash
pnpm --filter @combined/plugin-export studio
```

---

## Getting started

**Prerequisites:** Node.js ≥ 18, pnpm

```bash
# Install
git clone https://github.com/A-Henkaline/combined-appkit.git
cd combined-appkit
pnpm install

# Copy env and fill in your keys
cp .env.example .env

# Run the component studio
pnpm --filter @combined/studio dev
# → http://localhost:3000
```

### Environment variables

```bash
# AI
AI_PROVIDER=groq               # or 'ollama'
GROQ_API_KEY=gsk_...
GROQ_MODEL=llama-3.3-70b-versatile

OLLAMA_BASE_URL=http://localhost:11434/v1
OLLAMA_MODEL=llama3.2

# Database
DB_DRIVER=sqlite               # or 'postgres'
DB_PATH=./local.db             # or a libsql:// Turso URL
DATABASE_URL=postgresql://...  # for postgres
```

---

## Scripts

```bash
pnpm dev        # start all dev servers in parallel
pnpm build      # build all packages in dependency order
pnpm lint       # lint all packages
pnpm test       # test all packages
```

Or scope to one package:

```bash
pnpm --filter @combined/studio dev
pnpm --filter @combined/ui build
pnpm --filter @combined/plugin-export studio
```

---

## Dependency graph

```
@combined/tokens
       ↑
  @combined/ui   @combined/core
       ↑               ↑
  plugin-ai   plugin-data   plugin-export
       ↑              ↑            ↑
              apps (studio, your future apps)
```

`tokens` has no internal dependencies — it's the foundation. Everything flows upward. No circular dependencies.

---

## Re-skinning

To adapt the design system for a different project, change only the **brand block** in `packages/tokens/src/tokens.css` and `packages/tokens/src/tailwind.config.ts`. Structure, depth, typography, spacing, and semantics stay constant.

---

## License

MIT
