import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const hostname = request.headers.get("host") || "";

  // Redirect Vercel deployment domain to the real domain
  if (
    hostname === "acesoftsolution.vercel.app" ||
    hostname === "www.acesoftsolution.vercel.app"
  ) {
    const url = request.nextUrl.clone();

    url.protocol = "https:";
    url.hostname = "www.acesoftsolution.com";

    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Run middleware on all pages except Next.js internals
     * and common static files.
     */
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};