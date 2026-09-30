import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { AreasServedLinks } from "@/components/areas-served-links";
import { CtaPair, TextNavLink } from "@/components/cta-links";
import { ImageSlot } from "@/components/image-slot";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/site-chrome";
import { breadcrumbJsonLd, buildMetadata, serviceJsonLd, serviceListJsonLd } from "@/lib/seo";
import { photos } from "@/lib/photos";
import { serviceDirectory } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Electrical & Mixer Repair Services in South Bengaluru",
  description:
    "Mixer grinder repair and manufacturing, spare parts, house and building wiring, fault finding and earthing from A One Electricals, Kumaraswamy Layout. Get a quote.",
  path: "/services",
  keywords: [
    "electrical services Bengaluru",
    "mixer repair Kumaraswamy Layout",
    "house wiring Bangalore",
    "geyser repair Kumaraswamy Layout",
    "UPS repair Bengaluru",
    "ceiling fan rewind Bangalore",
    "mixer spare parts",
  ],
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />
      <JsonLd
        data={serviceListJsonLd(
          serviceDirectory.map((service) => ({
            name: service.searchTitle,
            path: service.href,
          }))
        )}
      />
      <JsonLd
        data={serviceJsonLd({
          name: "Electrical services in Bengaluru",
          description:
            "Wiring, mixer repair, geyser, UPS, ceiling fan, spare parts, UPS wiring, gas stove service, water pump, washing machine, and air cooler repair from Kumaraswamy Layout.",
          path: "/services",
        })}
      />
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
        ]}
      />
      <PageHero
        kicker="Service index · South Bengaluru"
        title="Our services in South Bengaluru"
        lede="Mixer grinder repair and manufacturing, spare parts, house and building wiring, plus geyser, UPS, ceiling fan, and related appliance work from the Ilyas Nagar workshop."
        image={{
          label: "Workshop photograph",
          photo: photos.workshop,
          ratio: "portrait",
        }}
      >
        <CtaPair message="Hi A One Electricals, I need a service from Kumaraswamy Layout." />
      </PageHero>

      <section className="mx-auto max-w-6xl px-4 py-10 md:py-14">
        <ul className="grid gap-6 md:gap-8">
          {serviceDirectory.map((service) => (
            <li key={service.href}>
              <article className="grid gap-5 rounded-xl border border-border bg-card p-4 md:grid-cols-[14rem_1fr_auto] md:items-center md:gap-6 md:p-5">
                <ImageSlot
                  label={service.image}
                  photo={photos[service.photo]}
                  ratio="square"
                  sizes="(max-width: 768px) 92vw, 14rem"
                />
                <div>
                  <h2 className="font-heading text-[1.65rem] font-semibold md:text-3xl">
                    <Link href={service.href}>{service.searchTitle}</Link>
                  </h2>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                    {service.blurb}
                  </p>
                </div>
                <Link
                  href={service.href}
                  className="text-sm font-medium text-primary underline-offset-4 hover:underline"
                >
                  Read this service
                </Link>
              </article>
            </li>
          ))}
        </ul>
        <p className="mt-10 text-sm text-muted-foreground">
          Serving callers from{" "}
          <TextNavLink href="/areas/kumaraswamy-layout">Kumaraswamy Layout</TextNavLink> and{" "}
          <TextNavLink href="/areas">South Bengaluru areas</TextNavLink>. See{" "}
          <TextNavLink href="/about">who runs the shop</TextNavLink> or{" "}
          <TextNavLink href="/contact">call us</TextNavLink>.
        </p>
      </section>
      <AreasServedLinks />
    </>
  );
}
