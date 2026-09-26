import type { Metadata } from "next";
import {
  addedServices,
  areasServed,
  getSiteUrl,
  isIndexableHost,
  siteConfig,
  services,
} from "@/lib/site";

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
  const fullTitle = title.includes(siteConfig.name)
    ? title
    : title.length + brand.length <= 60
      ? `${title}${brand}`
      : title;
  const shareImage = {
    url: "/opengraph-image",
    width: 1200,
    height: 630,
    alt: `${siteConfig.name}, electrician in Kumar Swamy Layout, Bengaluru`,
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
    "@type": "Electrician",
    "@id": `${url}/#business`,
    name: siteConfig.name,
    url,
    telephone: siteConfig.phoneTel,
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
      availableLanguage: "English",
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
    areaServed: areasServed.map((name) => ({
      "@type": name === "Bengaluru" ? "City" : "Place",
      name,
    })),
    sameAs: [siteConfig.instagram],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Electrical services in Bengaluru",
      itemListElement: [...services, ...addedServices].map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.searchTitle,
          areaServed: "Bengaluru",
          url: `${url}${service.href}`,
        },
      })),
    },
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
}) {
  const url = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    description: input.description,
    url: `${url}${input.path}`,
    provider: { "@id": `${url}/#business` },
    areaServed: [
      { "@type": "City", "name": "Bengaluru" },
      { "@type": "Place", "name": "Kumar Swamy Layout" },
    ],
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

export function websiteJsonLd() {
  const url = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${url}/#website`,
    name: siteConfig.name,
    url,
    inLanguage: "en-IN",
    publisher: { "@id": `${url}/#business` },
  };
}
