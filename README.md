# docs.cuibos.ro

CuibOS documentation site — built with [shadcn-docs-nuxt](https://github.com/ZTL-UwU/shadcn-docs-nuxt).

## Sections

| Section | Access | Description |
|---|---|---|
| **Ghid utilizator** | Public | How to use CuibOS (RO + EN) |
| **Referință API** | Basic Auth | REST endpoint docs for all microservices |
| **Arhitectură** | Basic Auth | System design, events, databases, deployment |

## Development

```bash
npm install
npm run dev     # http://localhost:3000
```

## Build

```bash
npm run build   # SSR (Node server)
npm run preview # Preview build locally
```

## Environment variables

| Variable | Required | Description |
|---|---|---|
| `DOCS_AUTH_USER` | No | Basic Auth username (default: `admin`) |
| `DOCS_AUTH_PASS` | No | Basic Auth password (if empty, auth is skipped) |

## i18n

- **Romanian** (default) — `content/` root
- **English** — `content/en/`

## Content structure

```
content/
├── index.md                    # Landing page (RO)
├── 1.guide/                    # User guide (RO)
├── 2.api/                      # API reference (RO)
├── 3.architecture/             # Architecture (RO)
└── en/
    ├── index.md                # Landing page (EN)
    ├── 1.guide/                # User guide (EN)
    ├── 2.api/                  # API reference (EN)
    └── 3.architecture/         # Architecture (EN)
```
