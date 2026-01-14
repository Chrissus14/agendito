import { auth } from "@clerk/nextjs/server";
import { eq, and, isNull } from "drizzle-orm";

/**
 * Helper para inyectar filtros de seguridad B2B automáticamente
 * @param table La tabla de drizzle a filtrar
 */
export async function getTenantFilters(table: any) {
  const { orgId } = await auth();

  if (!orgId) throw new Error("No organization selected");

  return and(
    eq(table.organizationId, orgId),
    isNull(table.deletedAt) // Filtro de Soft Delete por defecto
  );
}