import { authMiddleware } from "@clerk/nextjs";

// Set the paths that don't require the user to be signed in

export default authMiddleware({
  publicRoutes: [
    "/api/:path*",
    "/",
    "/sign-in",
    "/api/",
    "/sign-up",
    "/blog",
    "/about",
    "/what-we-do",
    "/contact",
  ],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
