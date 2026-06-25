import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

const isPublicRoute = createRouteMatcher(['/', '/login(.*)', '/signup(.*)', '/api/webhook(.*)']);
const isAdminRoute = createRouteMatcher(['/admin(.*)']);
const isProviderRoute = createRouteMatcher(['/provider(.*)']);
const isCustomerRoute = createRouteMatcher(['/customer(.*)']);

export default clerkMiddleware(async (auth, req) => {
  if (isPublicRoute(req)) {
    return NextResponse.next();
  }

  const session = await auth();

  if (!session.userId) {
    return session.redirectToSignIn({ returnBackUrl: req.url });
  }

  // Retrieve role from Clerk session claims. 
  // It is expected that the Clerk user metadata has a `role` field.
  // Example: "admin", "provider", "customer"
  const role = session.sessionClaims?.metadata?.role || 'customer';

  // Protect Admin Routes
  if (isAdminRoute(req) && role !== 'admin') {
    return NextResponse.redirect(new URL('/', req.url));
  }

  // Protect Provider Routes
  if (isProviderRoute(req) && role !== 'provider') {
    // If not a provider, send them to the homepage or their respective dashboard
    return NextResponse.redirect(new URL('/', req.url));
  }

  // Protect Customer Routes
  if (isCustomerRoute(req) && role !== 'customer' && role !== 'admin') {
    return NextResponse.redirect(new URL('/', req.url));
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
