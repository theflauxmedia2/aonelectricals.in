import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CtaPair, TextNavLink } from "@/components/cta-links";
import { ImageSlot } from "@/components/image-slot";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/site-chrome";
import { breadcrumbJsonLd, buildMetadata, serviceJsonLd, serviceListJsonLd } from "@/lib/seo";
import { photos } from "@/lib/photos";
import { serviceDirectory } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Services in Kumar Swamy Layout",
  description:
    "A One Electricals services from Kumar Swamy Layout, Bangalore: wiring, geyser, UPS, ceiling fan, UPS wiring, gas stove, water pump, washing machine, air cooler, and mixer repair. Call +91 70225 16735.",
  path: "/services",
  keywords: [
    "electrical services Bengaluru",
    "mixer repair Kumar Swamy Layout",
    "house wiring Bangalore",
    "geyser repair Kumar Swamy Layout",
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
            "Wiring, mixer repair, geyser, UPS, ceiling fan, spare parts, UPS wiring, gas stove service, water pump, washing machine, and air cooler repair from Kumar Swamy Layout.",
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
        kicker="Service index · Kumar Swamy Layout"
        title="Electrical services from Kumar Swamy Layout for kitchens, baths, and buildings across Bengaluru"
        lede="House wiring, geyser and UPS work, ceiling-fan repair, UPS wiring, gas stove service, water pump, washing machine, and air cooler repair. Mixer grinder work is at the shop too, listed at the end."
        image={{
          label: "Workshop photograph",
          photo: photos.workshop,
          ratio: "portrait",
        }}
      >
        <CtaPair message="Hi A One Electricals, I need a service from Kumar Swamy Layout." />
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
          <TextNavLink href="/kumar-swamy-layout">Kumar Swamy Layout</TextNavLink> and{" "}
          <TextNavLink href="/bengaluru">around Bengaluru</TextNavLink>. See{" "}
          <TextNavLink href="/about">who runs the shop</TextNavLink> or{" "}
          <TextNavLink href="/contact">call us</TextNavLink>.
        </p>
      </section>
    </>
  );
}
