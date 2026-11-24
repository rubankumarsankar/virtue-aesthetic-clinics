import { NextResponse, type NextRequest } from "next/server";

const SESSION_COOKIE = "vac_admin";

/**
 * Optimistic gate: bounce visitors without a session cookie to the login page early.
 * The real check (signature + expiry) happens in requireAdmin() for every read and action.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (pathname === "/admin/login") return NextResponse.next();

  if (!request.cookies.has(SESSION_COOKIE)) {
    const url = new URL("/admin/login", request.url);
    if (pathname !== "/admin") url.searchParams.set("next", pathname);
    return NextResponse.redirect(url);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/admin", "/admin/:path*"],
};
