import type { MetadataRoute } from "next";
import { getSiteUrl, isIndexableHost } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  const base = getSiteUrl();
  const indexable = isIndexableHost();
  return {
    rules: {
      userAgent: "*",
      allow: indexable ? "/" : undefined,
      disallow: indexable ? undefined : "/",
    },
    sitemap: indexable ? `${base}/sitemap.xml` : undefined,
    host: indexable ? base : undefined,
  };
}
