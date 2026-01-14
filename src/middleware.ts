import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// Definimos las rutas que no requieren autenticacion
const isPublicRoute = createRouteMatcher([
    "/sign-in(.*)",
    "/sign-up(.*)",
    "/api/webhooks(.*)",
    "/"
])
// Rutas protegidas
const isProtectedRoute = createRouteMatcher(["/dashboard(.*)", "/api(.*)"]);

export default clerkMiddleware(async (auth, request) => {
    if (!isPublicRoute(request)) {
        auth.protect()
    }

    if (isProtectedRoute(request)) {
        const { userId, orgId, redirectToSignIn } = await auth();

        // Si no está autenticado, al login
        if (!userId) return redirectToSignIn();

        // Forzar selección de organización para rutas B2B
        // (Opcional: puedes permitir acceso a /profile sin org)
    }
});

export const config = {
    matcher: [
        // Skip Next.js internals and all static files, unless found in search params
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        // Always run for API routes
        '/(api|trpc)(.*)',
    ],
}