import { NextRequest, NextResponse } from "next/server";
import { useAuthStore } from "./app/store";
import { Role } from "./app/models";

/*
 * Match all request paths except for the ones making request to:
 * - _next (_next folder)
 * - favicon.ico, sitemap.xml, robots.txt (metadata files)
 * from any of the micro-frontends (/shell, /creator, /user)
 */
const nextAppPathRegex =
  /^(?!.*(\/_next|\/favicon\.ico|\/sitemap\.xml|\/robots\.txt)).*$/;

// only allowed if not authenticated
const isAuthPath = (path) =>
  ["/account/login"].findIndex((p) => path.startsWith(p)) !== -1;

// only allowed if authenticated
const isProtectedPath = (path) =>
  [
    "/creator",
    // isAuthenticated && '/user/continue_watching' // add continue watching pages later
  ]
    .filter((el) => el)
    .findIndex((p) => path.startsWith(p)) !== -1;

// bff endpoints
const isApiPath = (path) => ["/api/"].findIndex((p) => path.includes(p)) !== -1;

export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.match(nextAppPathRegex)) {
    if (request.nextUrl.pathname.startsWith("/account/logout")) {
      // logging out user
      // end session in backend
      // clear authState
      useAuthStore().getState().logout();
      // redirect to login page
      return NextResponse.redirect(new URL("/account/login", request.url));
    }

    // refresh token - update the state according to the token availability and expiry
    // notify the client that session is expired, if the token is present but expired (applies for both creator and user)

    // get the latest state after refresh token
    const { isAuthenticated, data } = useAuthStore().getState();

    // route guards
    if (isAuthPath(request.nextUrl.pathname)) {
      if (isAuthenticated) {
        // redirect to role home page
        return NextResponse.redirect(
          new URL(
            data.role === Role.CREATOR ? `/${Role.CREATOR}` : "/",
            request.url
          )
        );
      }
    }

    if (isProtectedPath(request.nextUrl.pathname)) {
      if (!isAuthenticated) {
        return NextResponse.redirect(new URL("/account/logout", request.url));
      }
    }

    if (isApiPath(request.nextUrl.pathname)) {
      // bff endpoints
      if (isAuthenticated) {
        // add necessary request headers
      }
    }
  }
}
