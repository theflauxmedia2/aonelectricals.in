import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const CANONICAL_HOST = "aonelectricals.in";

export function proxy(request: NextRequest) {
  const site = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  let canonical: URL | null = null;

  if (site) {
    try {
      canonical = new URL(site);
    } catch {
      canonical = null;
    }
  }

  if (!canonical || canonical.hostname.endsWith(".vercel.app")) {
    canonical = new URL(`https://${CANONICAL_HOST}`);
  }

  const host = request.headers.get("host")?.split(":")[0]?.toLowerCase();
  if (!host || host === canonical.hostname || host === `www.${canonical.hostname}`) {
    return NextResponse.next();
  }

  // www <-> apex is handled by Vercel's domain settings; redirecting it here as
  // well creates a loop whenever the dashboard picks the other direction.
  const shouldRedirect =
    process.env.VERCEL_ENV === "production" && host.endsWith(".vercel.app");

  if (!shouldRedirect) {
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
