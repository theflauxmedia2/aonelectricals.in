import type { MetadataRoute } from "next";
import { areas } from "@/lib/areas";
import { addedServices, getSiteUrl, services } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const routes = [
    "",
    "/services",
    ...services.map((service) => service.href),
    ...addedServices.map((service) => service.href),
    "/areas",
    ...areas.map((area) => area.href),
    "/about",
    "/contact",
  ];

  const high = new Set([
    "/contact",
    "/mixer-repair",
    "/building-wiring",
    "/spares",
    "/areas/kumaraswamy-layout",
    "/areas/jp-nagar",
  ]);

  const lastModified = new Date("2026-10-01");

  return routes.map((path) => ({
    url: `${base}${path}`,
    lastModified,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : high.has(path) ? 0.9 : 0.8,
  }));
}
