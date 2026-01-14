// Definición de tabla en Drizzle

import { pgTable, text, timestamp, uuid, varchar } from "drizzle-orm/pg-core"
import { profiles } from "../auth/schema"

export const documents = pgTable('documents', {
  id: uuid('id').defaultRandom().primaryKey(),
  title: text('title').notNull(),
  content: text('content'),
  // Seguridad B2B: Multi-tenancy
  organizationId: varchar("organization_id", { length: 255 }),
  userId: varchar("user_id", { length: 255 }).notNull().references(() => profiles.id),

  // Auditoría y Resiliencia
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
  deletedAt: timestamp("deleted_at"), // Soft Delete (null = activo)
})