import type { MetadataRoute } from "next";
import { neighborhoods } from "@/lib/neighborhoods";
import { addedServices, getSiteUrl, services } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const routes = [
    "",
    "/services",
    ...services.map((service) => service.href),
    ...addedServices.map((service) => service.href),
    "/kumar-swamy-layout",
    "/bengaluru",
    ...neighborhoods.map((area) => area.href),
    "/about",
    "/contact",
  ];

  const high = new Set(["/contact", "/mixer-repair", "/geyser-repair", "/ups-repair", "/ceiling-fan"]);

  return routes.map((path) => ({
    url: `${base}${path}`,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : high.has(path) ? 0.9 : 0.8,
  }));
}
