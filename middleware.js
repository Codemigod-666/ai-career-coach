const { clerkMiddleware, createRouteMatcher } = require('@clerk/nextjs/server');
const { NextResponse } = require('next/server');

const isProtectedRoute = createRouteMatcher([
    "/dashboard(.*)",
    "/resume(.*)",
    "/interview(.*)",
    "/ai-cover-letter(.*)",
    "/onboarding(.*)",
])

module.exports = clerkMiddleware(async (auth, req) => {
    const { userId } = await auth()

    if (!userId && isProtectedRoute(req)) {
        const { redirectToSignIn } = await auth();
        return redirectToSignIn();
    }

    return NextResponse.next();
});

module.exports.config = {
    matcher: [
        // Skip Next.js internals and all static files, unless found in search params
        '/((?!_next|[^?]*\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        // Always run for API routes
        '/(api|trpc)(.*)',
    ],
};