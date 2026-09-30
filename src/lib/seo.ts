import type { Metadata } from "next";
import {
  addedServices,
  areasServed,
  getSiteUrl,
  isIndexableHost,
  siteConfig,
  services,
} from "@/lib/site";
import { primaryAreas } from "@/lib/areas";

type BuildMetaInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
};

export function buildMetadata({
  title,
  description,
  path,
  keywords,
}: BuildMetaInput): Metadata {
  const url = `${getSiteUrl()}${path === "/" ? "" : path}`;
  const brand = ` | ${siteConfig.name}`;
  const shortBrand = ` | ${siteConfig.shortName}`;
  const fullTitle = title.includes(siteConfig.name)
    ? title
    : title.length + brand.length <= 60
      ? `${title}${brand}`
      : title.length + shortBrand.length <= 60
        ? `${title}${shortBrand}`
        : title;
  const shareImage = {
    url: "/opengraph-image",
    width: 1200,
    height: 630,
    alt: `${siteConfig.name}, electrician in Kumaraswamy Layout, Bengaluru`,
  };

  return {
    title: {
      absolute: fullTitle,
    },
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url,
      siteName: siteConfig.name,
      title: fullTitle,
      description,
      images: [shareImage],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: ["/opengraph-image"],
    },
    robots: isIndexableHost()
      ? {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large" as const,
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        }
      : { index: false, follow: false },
  };
}

export function localBusinessJsonLd() {
  const url = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${url}/#website`,
        url: `${url}/`,
        name: siteConfig.name,
        inLanguage: "en-IN",
        publisher: { "@id": `${url}/#business` },
      },
      {
        "@type": "Electrician",
        "@id": `${url}/#business`,
        name: siteConfig.name,
        url: `${url}/`,
        telephone: siteConfig.phoneTel,
        priceRange: siteConfig.priceRange,
        description:
          "Mixer grinder repair and manufacturing, mixer spare parts, and house and building wiring from a workshop in Ilyas Nagar, Kumaraswamy Layout, Bengaluru.",
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "00:00",
          closes: "23:59",
        },
        image: [
          `${url}/images/hero-desktop-brand.jpg`,
          `${url}/opengraph-image`,
        ],
        logo: `${url}/brand/logo.png`,
        hasMap: siteConfig.mapsUrl,
        contactPoint: {
          "@type": "ContactPoint",
          telephone: siteConfig.phoneTel,
          contactType: "customer service",
          areaServed: "IN",
          availableLanguage: ["English", "Kannada"],
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: siteConfig.latitude,
          longitude: siteConfig.longitude,
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: `${siteConfig.street}, ${siteConfig.neighborhood}`,
          addressLocality: siteConfig.city,
          addressRegion: siteConfig.region,
          postalCode: siteConfig.postalCode,
          addressCountry: siteConfig.country,
        },
        areaServed: [
          ...primaryAreas.map((area) => ({
            "@type": "Place" as const,
            name: `${area.name}, Bengaluru`,
          })),
          ...areasServed
            .filter(
              (name) =>
                !primaryAreas.some((area) => area.name === name) &&
                name !== "South Bengaluru"
            )
            .map((name) => ({
              "@type": "Place" as const,
              name: `${name}, Bengaluru`,
            })),
          { "@type": "City" as const, name: "Bengaluru" },
        ],
        sameAs: [siteConfig.instagram],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Services",
          itemListElement: [...services, ...addedServices].map((service) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              "@id": `${url}${service.href}#service`,
              name: service.searchTitle,
              areaServed: "Bengaluru",
              url: `${url}${service.href}`,
            },
          })),
        },
      },
    ],
  };
}

export function breadcrumbJsonLd(
  items: { name: string; path: string }[]
) {
  const url = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${url}${item.path}`,
    })),
  };
}

export function serviceJsonLd(input: {
  name: string;
  description: string;
  path: string;
  serviceType?: string;
}) {
  const url = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}${input.path}#service`,
    name: input.name,
    description: input.description,
    serviceType: input.serviceType,
    url: `${url}${input.path}`,
    provider: { "@id": `${url}/#business` },
    areaServed: primaryAreas.map((area) => area.name),
  };
}

export function serviceListJsonLd(
  items: { name: string; path: string }[]
) {
  const url = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Electrical services from A One Electricals",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: `${url}${item.path}`,
    })),
  };
}

export function faqJsonLd(
  items: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
