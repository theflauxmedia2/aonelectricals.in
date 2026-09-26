import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import Script from "next/script";
import { Fraunces, Outfit } from "next/font/google";
import { LeadDock } from "@/components/lead-dock";
import { ServicePrompt } from "@/components/service-prompt";
import { JsonLd } from "@/components/json-ld";
import { CircuitRail } from "@/components/circuit-rail";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { localBusinessJsonLd, websiteJsonLd } from "@/lib/seo";
import { getSiteUrl, isIndexableHost, siteConfig } from "@/lib/site";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const themeInit = `(function(){try{document.documentElement.classList.toggle("dark",localStorage.getItem("aone-theme")==="dark")}catch(e){}})();`;

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: "Electrician in Kumar Swamy Layout | A One Electricals",
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "A One Electricals in Kumar Swamy Layout, Bangalore: house wiring, geyser, UPS, ceiling fan, mixer repair, and spare parts. Call or WhatsApp +91 70225 16735.",
  applicationName: siteConfig.name,
  category: "Electrical services",
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  formatDetection: {
    telephone: true,
    email: false,
    address: true,
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: isIndexableHost()
    ? { index: true, follow: true }
    : { index: false, follow: false },
  other: {
    "geo.region": "IN-KA",
    "geo.placename": "Ilyas Nagar, Kumar Swamy Layout, Bengaluru",
    "geo.postalcode": "560111",
    "geo.position": `${siteConfig.latitude};${siteConfig.longitude}`,
    ICBM: `${siteConfig.latitude}, ${siteConfig.longitude}`,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFFFFF" },
    { media: "(prefers-color-scheme: dark)", color: "#111111" },
  ],
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en-IN"
      suppressHydrationWarning
      className={`${outfit.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Script id="aone-theme" strategy="beforeInteractive">
          {themeInit}
        </Script>
        <CircuitRail />
        <JsonLd data={localBusinessJsonLd()} />
        <JsonLd data={websiteJsonLd()} />
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="flex-1 pb-[calc(5.5rem+env(safe-area-inset-bottom))] md:pb-0">
          {children}
        </main>
        <SiteFooter />
        <LeadDock />
        <ServicePrompt />
      </body>
    </html>
  );
}
