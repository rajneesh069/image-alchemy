// import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// const isPublicRoute = createRouteMatcher([
//   "/api/webhooks(.*)",
//   "/",
//   "/sign-in",
//   "/sign-up",
// ]);

// console.log(isPublicRoute);

// export default clerkMiddleware((auth, request) => {
//   if (!isPublicRoute(request)) {
//     auth().protect();
//   }
// });

// export const config = {
//   matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
// };
import { clerkMiddleware } from '@clerk/nextjs/server';

// Make sure that the `/api/webhooks/(.*)` route is not protected here
export default clerkMiddleware()

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};