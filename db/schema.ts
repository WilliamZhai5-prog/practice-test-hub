// Intentionally empty by default.
// Add Drizzle tables here when the site actually needs a database.
// See examples/d1/db/schema.ts for an opt-in example.
import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';
export const tests = sqliteTable('tests', { id: text('id').primaryKey(), course: text('course').notNull(), title: text('title').notNull(), unit: text('unit').notNull(), filename: text('filename').notNull(), size: integer('size').notNull(), created: text('created').notNull() });
