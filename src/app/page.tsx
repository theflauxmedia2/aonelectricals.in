import type { Metadata } from "next";
import Link from "next/link";
import { AreaRail } from "@/components/area-rail";
import { HeroSlider } from "@/components/hero-slider";
import { CrewStrip } from "@/components/crew-strip";
import { CtaPair, TextNavLink, TextPhoneLink } from "@/components/cta-links";
import { FaqList } from "@/components/faq-list";
import { ImageSlot } from "@/components/image-slot";
import { JsonLd } from "@/components/json-ld";
import { ServiceChips } from "@/components/service-chips";
import { photos } from "@/lib/photos";
import { buildMetadata, faqJsonLd } from "@/lib/seo";
import {
  defaultWhatsappMessage,
  addedServices,
  extraServices,
  featuredServices,
  siteConfig,
} from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Electrician in Kumar Swamy Layout",
  description:
    "A One Electricals at 8th Cross, Ilyas Nagar, Kumar Swamy Layout, Bangalore 560111: wiring, geyser, UPS, fan, mixer, stove, pump, washer, and cooler repair. Call +91 70225 16735.",
  path: "/",
  keywords: [
    "electrician Kumar Swamy Layout",
    "electrician Bengaluru",
    "house wiring Kumar Swamy Layout",
    "geyser repair Kumar Swamy Layout",
    "UPS repair Bengaluru",
    "ceiling fan rewind Bangalore",
    "mixer repair Kumar Swamy Layout",
    "A One Electricals",
  ],
});

const faqs = [
  {
    question: "Where is A One Electricals?",
    answer:
      "The workshop is at 8th Cross, Ilyas Nagar, Kumar Swamy Layout, Bengaluru 560111. We take mixer, geyser, UPS, ceiling-fan, spare-part, and wiring calls from around the city — Jayanagar, BTM, Banashankari, Bannerghatta Road, and further when you WhatsApp the job.",
  },
  {
    question: "Do you repair mixer grinders or only sell parts?",
    answer:
      "Both. We make and repair mixer grinders in the shop, and we keep the jars, blades, couplings, brushes, and motor parts that Bengaluru kitchens wear out.",
  },
  {
    question: "Can you wire a house or a new flat?",
    answer:
      "Yes. Building wiring is a core service: points, boards, concealed runs in new apartments, and repairs in older independent houses around Kumar Swamy Layout.",
  },
  {
    question: "How do I get a job started?",
    answer: `Call or WhatsApp ${siteConfig.phoneDisplay}. Send a photo of the mixer plate, geyser, UPS, fan, or the DB. We tell you whether to bring it to Kumar Swamy Layout or whether a visit makes sense.`,
  },
];

const steps = [
  {
    n: "1",
    t: "Call or WhatsApp",
    d: "Name the fault. Mixer photo, geyser leak, UPS beep, or “need a wet jar.”",
  },
  {
    n: "2",
    t: "We tell you what to do",
    d: "Bring the mixer or fan to the shop in Kumar Swamy Layout, or we come for a geyser, UPS, or wiring job.",
  },
  {
    n: "3",
    t: "Repair, rewind, or wire",
    d: "No invented catalogue of prices on this site — you get the job scoped on the call.",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqJsonLd(faqs)} />
      <section data-home className="relative isolate overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-start gap-6 px-4 pb-8 pt-8 md:min-h-[calc(100dvh-5.5rem)] md:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] md:items-center md:gap-12 md:px-6 md:pb-10 md:pt-6 lg:gap-16">
          <div className="hero-copy relative z-20 flex min-w-0 flex-col justify-end max-md:min-h-[68dvh] max-md:pb-2 md:justify-center">
            <p className="kicker max-md:text-white/80">Kumar Swamy Layout, Bangalore</p>
            <h1 className="mt-3 min-w-0 font-heading text-[2.05rem] leading-[1.08] text-white sm:text-4xl md:mt-4 md:max-w-[12ch] md:text-[3.35rem] md:leading-[1.02] md:text-foreground lg:text-[3.85rem]">
              <span className="hero-line">Electrical repair </span>
              <span className="hero-line">and installation </span>
              <span className="hero-line">in Kumar Swamy </span>
              <span className="hero-line">Layout.</span>
              <span className="hero-rule" aria-hidden="true" />
            </h1>
            <p className="mt-4 max-w-lg text-[0.98rem] leading-relaxed text-white/80 md:mt-5 md:text-[1.05rem] md:text-muted-foreground">
              {siteConfig.name} is the neighborhood workshop on 8th Cross, Ilyas Nagar:
              house wiring, geyser and UPS work, ceiling-fan rewind, mixer repair, and
              the spare parts Bengaluru homes actually wear out. Call or WhatsApp{" "}
              <span className="max-md:text-white md:contents">
                <TextPhoneLink className="max-md:text-white max-md:underline" />
              </span>{" "}
              — we pick up jobs from around the city.
            </p>
            <div id="hero-ctas" className="mt-6 md:hidden">
              <CtaPair message={defaultWhatsappMessage} tone="onDark" />
            </div>
            <div className="mt-7 hidden md:block">
              <CtaPair message={defaultWhatsappMessage} />
            </div>
          </div>
          <div className="hero-media media-zoom absolute inset-0 z-0 md:relative md:inset-auto md:z-auto md:h-full md:min-h-[28rem] md:overflow-hidden md:rounded-2xl lg:min-h-[34rem]">
            <div className="slot-frame relative h-full overflow-hidden md:min-h-[28rem] md:rounded-2xl lg:min-h-[34rem]">
              <HeroSlider sizes="(max-width: 768px) 100vw, (min-width: 1280px) 560px, 50vw" priority />
            </div>
            <div className="hero-overlay pointer-events-none absolute inset-0 z-10 md:hidden" />
          </div>
        </div>
      </section>

      <ServiceChips />

      <CrewStrip />

      <AreaRail />

      <section className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-24">
        <h2 className="rise-in max-w-3xl font-heading text-[1.85rem] leading-[1.12] md:text-5xl">
          House wiring, repairs, and installation from our Bangalore shop in Kumar Swamy Layout.
        </h2>
        <ul className="mt-10 space-y-12 md:mt-20 md:space-y-24">
          {featuredServices.map((service, index) => (
            <li key={service.href} className="rise-in">
              <article className="grid items-center gap-5 md:grid-cols-2 md:gap-16">
                <ImageSlot
                  className={`media-zoom ${index % 2 === 1 ? "md:order-2" : ""}`}
                  label={service.image}
                  photo={photos[service.cardPhoto]}
                  ratio="landscape"
                  sizes="(max-width: 768px) 92vw, 50vw"
                />
                <div>
                  <p className="font-heading text-3xl text-primary">{service.kicker}</p>
                  <h3 className="mt-3 font-heading text-[1.75rem] leading-tight md:text-[2.6rem]">
                    <Link
                      href={service.href}
                      className="work-link transition-colors duration-[160ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:text-primary"
                    >
                      {service.title}
                    </Link>
                  </h3>
                  <p className="mt-4 max-w-md text-[0.98rem] leading-relaxed text-muted-foreground">
                    {service.blurb}
                  </p>
                  <Link
                    href={service.href}
                    className="work-link mt-6 inline-flex text-sm font-medium text-primary underline decoration-primary/40 underline-offset-4"
                  >
                    See {service.navLabel}
                  </Link>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-y border-border bg-secondary">
        <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-20">
          <h2 className="rise-in max-w-3xl font-heading text-[1.85rem] leading-[1.12] md:text-4xl">
            Geyser, UPS, ceiling fan, washing machine, and gas stove work from the same Kumar Swamy Layout number.
          </h2>
          <ul className="mt-8 grid gap-5 md:grid-cols-3 md:gap-6">
            {extraServices.map((service) => (
              <li key={service.href} className="rise-in">
                <Link href={service.href} className="bench-card block h-full overflow-hidden rounded-2xl bg-card">
                  <ImageSlot
                    className="media-zoom"
                    label={service.image}
                    photo={photos[service.cardPhoto]}
                    caption=""
                    ratio="landscape"
                    sizes="(max-width: 768px) 92vw, 33vw"
                  />
                  <div className="p-5">
                    <h3 className="font-heading text-[1.45rem] leading-tight">{service.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {service.blurb}
                    </p>
                  </div>
                </Link>
              </li>
            ))}
            {addedServices
              .filter(
                (service) =>
                  service.slug === "washing-machine" || service.slug === "gas-stove"
              )
              .map((service) => (
                <li key={service.href} className="rise-in">
                  <Link href={service.href} className="bench-card block h-full overflow-hidden rounded-2xl bg-card">
                    <ImageSlot
                      className="media-zoom"
                      label={service.image}
                      photo={photos[service.photo]}
                      caption=""
                      ratio="landscape"
                      sizes="(max-width: 768px) 92vw, 33vw"
                    />
                    <div className="p-5">
                      <h3 className="font-heading text-[1.45rem] leading-tight">{service.navLabel}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {service.blurb}
                      </p>
                    </div>
                  </Link>
                </li>
              ))}
          </ul>
          <p className="mt-8 max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
            The same number also covers{" "}
            <TextNavLink href="/ups-wiring">UPS wiring</TextNavLink>,{" "}
            <TextNavLink href="/water-pump">water pump repair</TextNavLink>, and{" "}
            <TextNavLink href="/air-cooler">air cooler repair</TextNavLink>.
          </p>
        </div>
      </section>

      <section className="border-y border-border bg-card">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-12 md:grid-cols-2 md:gap-12 md:py-20">
          <ImageSlot
            className="media-zoom"
            label="Kumar Swamy Layout workshop / shopfront"
            photo={photos.city}
            ratio="landscape"
            sizes="(max-width: 768px) 92vw, 50vw"
          />
          <div>
            <h2 className="font-heading text-[1.85rem] leading-tight md:text-4xl">
              A Kumar Swamy Layout shop that still takes calls from across the city
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground md:text-base">
              Most jobs are nearby: Kumar Swamy Layout, Jayanagar, and BTM. Geysers, UPS units, ceiling fans, and mixers all use the same phone number. The shop is in Kumar Swamy Layout, and we also take calls from the rest of the city.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              Read the neighborhood page for{" "}
              <TextNavLink href="/kumar-swamy-layout">electrical work in Kumar Swamy Layout</TextNavLink> or the
              city page for{" "}
              <TextNavLink href="/bengaluru">electrical work across Bengaluru</TextNavLink>
              .
            </p>
          </div>
        </div>
        <ol className="mx-auto grid max-w-6xl gap-px border-t border-border bg-border px-0 md:grid-cols-3">
          {steps.map((step) => (
            <li key={step.n} className="rise-in bg-card px-4 py-8 md:px-8 md:py-10">
              <p className="font-heading text-3xl text-primary">{step.n}</p>
              <h3 className="mt-3 font-heading text-2xl">{step.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.d}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 md:py-20">
        <h2 className="font-heading text-[1.85rem] leading-tight md:text-4xl">
          Questions Bengaluru callers actually ask
        </h2>
        <div className="mt-10">
          <FaqList items={faqs} />
        </div>
      </section>

      <section className="bg-[oklch(0.14_0_0)] text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-5 px-4 py-12 md:flex-row md:items-end md:justify-between md:gap-8 md:py-16">
          <div className="max-w-xl">
            <h2 className="font-heading text-[1.85rem] leading-tight md:text-4xl">
              Call the shop in Kumar Swamy Layout. Wiring, repair, or installation starts there.
            </h2>
          </div>
          <CtaPair tone="onDark" />
        </div>
      </section>
    </>
  );
}
