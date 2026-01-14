import { drizzle } from "drizzle-orm/postgres-js"
import postgres from "postgres"
import { env } from "@lib/config/env";

const connectionString = env.DATABASE_URL!

// Deshabilitamos el prefetch en entornos serverless para evitar fugas de memoria
const client = postgres(connectionString, { prepare: false })

export const db = drizzle(client)