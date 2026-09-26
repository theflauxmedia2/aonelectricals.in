import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CtaPair, TextPhoneLink } from "@/components/cta-links";
import { InquiryForm } from "@/components/inquiry-form";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/site-chrome";
import { ShopMap } from "@/components/shop-map";
import { SocialButtons } from "@/components/social-buttons";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";
import { photos } from "@/lib/photos";
import { getSiteUrl, siteConfig } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Contact A One Electricals",
  description:
    "Contact A One Electricals at 8th Cross, Ilyas Nagar, Kumar Swamy Layout, Bengaluru 560111. Call or WhatsApp +91 70225 16735 for mixer, geyser, UPS, ceiling fan, wiring, and spares.",
  path: "/contact",
  keywords: [
    "A One Electricals contact",
    "mixer repair WhatsApp Bengaluru",
    "electrician Kumar Swamy Layout phone",
    "A One Electricals Ilyas Nagar",
    "8th Cross Kumar Swamy Layout 560111",
  ],
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: `Contact ${siteConfig.name}`,
          url: `${getSiteUrl()}/contact`,
        }}
      />
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Contact", href: "/contact" },
        ]}
      />
      <PageHero
        kicker="Desk · live number"
        title="Call or WhatsApp A One Electricals in Kumar Swamy Layout"
        lede="The shop is at 8th Cross, Ilyas Nagar, Kumar Swamy Layout. Phone and WhatsApp are the same number. There is no email published here on purpose."
        image={{
          label: "Kumar Swamy Layout neighborhood",
          photo: photos.neighborhood,
          ratio: "portrait",
        }}
      >
        <CtaPair message="Hi A One Electricals, I want to talk about a job in Bengaluru." />
      </PageHero>

      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-[1fr_1.1fr] md:gap-10 md:py-14">
        <aside className="space-y-6">
          <div className="rounded-xl border border-border bg-card p-6">
            <h2 className="font-heading text-2xl">NAP we stand behind</h2>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <span className="kicker block">
                  Name
                </span>
                {siteConfig.name}
              </li>
              <li>
                <span className="kicker block">
                  Phone / WhatsApp
                </span>
                <TextPhoneLink />
              </li>
              <li>
                <span className="kicker block">
                  Hours
                </span>
                {siteConfig.hoursDisplay}. Call or WhatsApp{" "}
                <TextPhoneLink />.
              </li>
              <li>
                <span className="kicker block">
                  Address
                </span>
                <a
                  href={siteConfig.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline underline-offset-4"
                >
                  {siteConfig.addressDisplay}
                </a>
              </li>
              <li>
                <span className="kicker block">
                  Place
                </span>
                {siteConfig.neighborhood}, {siteConfig.city} {siteConfig.postalCode}
              </li>
              <li>
                <span className="kicker block">
                  Social
                </span>
                <SocialButtons className="mt-2" compact />
              </li>
            </ul>
          </div>
          <p className="text-sm text-muted-foreground">
            Walk in with a mixer at {siteConfig.addressDisplay}. The shop is{" "}
            {siteConfig.hoursDisplay.toLowerCase()}. Call or WhatsApp{" "}
            <TextPhoneLink /> before you come, so someone is free for the job.
          </p>
          <ShopMap />
        </aside>
        <InquiryForm />
      </section>
    </>
  );
}
