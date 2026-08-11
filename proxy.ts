import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const hostname = request.nextUrl.hostname;

  // Redirect Vercel deployment domain
  // to the production domain
  if (hostname === "acesoftsolution.vercel.app") {
    const url = request.nextUrl.clone();

    url.protocol = "https:";
    url.hostname = "www.acesoftsolution.com";

    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};