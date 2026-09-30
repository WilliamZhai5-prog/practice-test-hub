# Practice Room

A Grade 12 practice-test library with public PDF downloads and a private owner upload area.

## Courses

- Functions 4U (MHF4U)
- Chemistry 4U (SCH4U)
- Data Management 4U (MDM4U)
- Physics 4U and Biology 4U: coming soon

## Features

Upload PDF tests up to 20 MB, organize by course and topic, download tests publicly, and remove tests from the owner area. Files use Cloudflare R2; metadata uses D1. Owner pages use Sites Sign in with ChatGPT. Upload and deletion endpoints enforce owner authorization on the server.

## Development

Requires Node.js 22.13 or later.

```sh
npm ci
npm run dev
npm run build
npm run db:generate
```

Set the private runtime variable `OWNER_EMAIL` to the email of the ChatGPT account allowed to manage tests. It is deliberately not stored in source. Without it, owner writes are denied. For local development, put it in an ignored `.env` file and use the local mock account described in the starter README.

The hosting manifest declares `DB` (D1) and `BUCKET` (R2). Apply the SQL migration in `drizzle/` before running the library against a new database. Production Sites publishing applies migrations and provisions bindings.

This is a Worker-backed application. GitHub stores the source; GitHub Pages cannot run its upload, authentication, D1 or R2 features. Deploy using Sites or a compatible Cloudflare Workers setup with the required auth and storage bindings.
