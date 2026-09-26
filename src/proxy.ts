import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const site = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (!site) return NextResponse.next();

  let canonical: URL;
  try {
    canonical = new URL(site);
  } catch {
    return NextResponse.next();
  }

  if (canonical.hostname.endsWith(".vercel.app")) return NextResponse.next();

  const host = request.headers.get("host")?.split(":")[0];
  if (!host?.endsWith(".vercel.app") || host === canonical.hostname) {
    return NextResponse.next();
  }

  const destination = new URL(
    `${request.nextUrl.pathname}${request.nextUrl.search}`,
    canonical
  );
  return NextResponse.redirect(destination, 301);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|brand/|images/).*)"],
};
