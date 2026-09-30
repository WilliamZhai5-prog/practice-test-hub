declare namespace Cloudflare {
  interface Env {
    DB?: D1Database;
    BUCKET?: R2Bucket;
  }
}

declare module 'cloudflare:workers' { interface Env { OWNER_EMAIL?: string; } }
