import { NextRequest } from "next/server";

/*
 * Match all request paths except for the ones making request to:
 * - api (API routes)
 * - _next (_next folder)
 * - favicon.ico, sitemap.xml, robots.txt (metadata files)
 * from any of the micro-frontends (/shell, /creator, /user)
 * any routes that doesn't start with /shell, /user or /creator won't be intercepted
 */
const uiPath =
  /^(\/(creator|shell|user))(?!.*(\/api|\/_next|\/favicon\.ico|\/sitemap\.xml|\/robots\.txt)).*$/;

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.match(uiPath)) {
    if (request.nextUrl.pathname.startsWith("/creator")) {
      // creator microfrontend
    }
  }
}
