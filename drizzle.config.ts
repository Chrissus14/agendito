// drizzle.config.ts
import { defineConfig } from "drizzle-kit"
import * as dotenv from "dotenv"
import { env } from "@lib/config/env";

dotenv.config({ path: ".env" })

export default defineConfig({
  schema: "./src/features/**/schema.ts", // Busca esquemas en todas las carpetas de features
  out: "./drizzle",
  dialect: 'postgresql',
  dbCredentials: {
    url: env.DATABASE_URL!,
  },
})
