import { authMiddleware } from "@clerk/nextjs";
 
// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your Middleware
export default authMiddleware({});
 
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};

// Try accessing your app now by visiting http://localhost:3000.
// The Middleware will redirect you to your Sign Up page, provided by Clerk's Account Portal feature.
// If you want to make other routes public, check out the authMiddleware reference page.
// Go ahead and sign up to get access to your application.
// Your app is now fully protected by Clerk!