import { pgTable, varchar, timestamp, text } from "drizzle-orm/pg-core";

export const profiles = pgTable("profiles", {
  id: varchar("id", { length: 255 }).primaryKey(), // ID de Clerk
  email: text("email").notNull(),
  name: text("name"),
  imageUrl: text("image_url"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Metadatos adicionales de la Organización (Stripe, Configuración, etc.)
export const organizationsMetadata = pgTable("organizations_metadata", {
  id: varchar("id", { length: 255 }).primaryKey(), // ID de la Organización en Clerk
  stripeCustomerId: text("stripe_customer_id"),
  subscriptionStatus: varchar("subscription_status", { length: 50 }).default("trialing"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
})