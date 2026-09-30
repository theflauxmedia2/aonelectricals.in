import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { AreasServedLinks } from "@/components/areas-served-links";
import { CtaPair, TextNavLink, TextPhoneLink } from "@/components/cta-links";
import { FaqList } from "@/components/faq-list";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/site-chrome";
import { ImageSlot } from "@/components/image-slot";
import {
  breadcrumbJsonLd,
  buildMetadata,
  faqJsonLd,
  serviceJsonLd,
} from "@/lib/seo";
import { photos } from "@/lib/photos";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Mixer Grinder Repair in Kumaraswamy Layout & JP Nagar",
  description:
    "Motor rewinding, coupler, jar, blade and switch repair for Preethi, Sumeet, Butterfly, Prestige, Bajaj and more. Walk in at Ilyas Nagar or WhatsApp a photo for a quote.",
  path: "/mixer-repair",
  keywords: [
    "mixer grinder repair Kumaraswamy Layout",
    "mixer repair JP Nagar",
    "mixie repair near me",
    "mixer motor rewinding Bengaluru",
    "mixer coupler replacement",
  ],
});

const faqs = [
  {
    question: "Which mixer grinders do you repair in Bengaluru?",
    answer:
      "Home mixer grinders from Kumaraswamy Layout kitchens: wet jars that get stuck, dry jars that rattle, motors that smell burnt. Bring the machine, or send a photo of the name plate on WhatsApp. We repair what we can open. We are not every brand’s service centre.",
  },
  {
    question: "Do you manufacture mixers or only repair them?",
    answer:
      "Both. We make and repair mixers in the same shop: jars, blades, and motors for daily cooking, not for show.",
  },
  {
    question: "Can I WhatsApp a video instead of coming to Kumaraswamy Layout?",
    answer: `Yes. WhatsApp ${siteConfig.phoneDisplay} with a short clip of the noise or the jar that will not sit. We tell you if it is a coupling, a blade, or a motor that has to come in.`,
  },
];

export default function MixerRepairPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Mixer repair", path: "/mixer-repair" },
        ])}
      />
      <JsonLd
        data={serviceJsonLd({
          name: "Mixer grinder manufacturing and repair in Kumaraswamy Layout, Bengaluru",
          description:
            "Mixer making, motor repair, jar and coupling repair for Bengaluru kitchens.",
          path: "/mixer-repair",
        })}
      />
      <JsonLd data={faqJsonLd(faqs)} />
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: "Mixer repair", href: "/mixer-repair" },
        ]}
      />
      <PageHero
        kicker="Mixer repair · Kumaraswamy Layout"
        title="Mixer grinder repair in Kumaraswamy Layout, Bengaluru"
        lede="Motor rewinding, coupler, jar, blade and switch repair for Preethi, Sumeet, Butterfly, Prestige, Bajaj and more. Walk in at Ilyas Nagar or WhatsApp a photo for a quote."
        image={{
          label: "Open mixer at the shop",
          photo: photos.mixerMotor,
          alt: "Mixer grinder motor being repaired on the bench at A One Electricals",
          ratio: "portrait",
        }}
      >
        <CtaPair message="Hi A One Electricals, my mixer needs repair in Bengaluru." />
      </PageHero>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-[1fr_18rem] md:gap-12 md:py-16">
        <article className="space-y-5 text-[0.95rem] leading-relaxed text-muted-foreground md:text-base">
          <h2 className="font-heading text-[1.75rem] font-semibold text-foreground md:text-3xl">
            Why Kumaraswamy Layout mixers die — and what we rebuild
          </h2>
          <p>
            A mixer in a Bengaluru house is not a weekend gadget. It is idli batter at
            6 a.m., coconut for lunch, and dry spices after. The wet jar runs long
            enough to heat the bushing. The coupling turns into a smooth puck. Carbon
            brushes spark. Then someone searches “mixer repair near me” from Kumaraswamy Layout
            or Jayanagar 5th Block.
          </p>
          <p>
            {siteConfig.name} makes and repairs mixer grinders at the Kumaraswamy Layout
            shop. We open motors, repair them when the coil is burnt, fit new jars, and
            replace the small parts listed on our{" "}
            <TextNavLink href="/spares">spares page</TextNavLink>. If the job is
            wiring, that is a house visit — see{" "}
            <TextNavLink href="/building-wiring">building wiring</TextNavLink>. Same
            number for{" "}
            <TextNavLink href="/geyser-repair">geyser</TextNavLink>,{" "}
            <TextNavLink href="/ups-repair">UPS</TextNavLink>, and{" "}
            <TextNavLink href="/ceiling-fan">ceiling-fan repair</TextNavLink>.
          </p>
          <h2 className="font-heading text-[1.75rem] font-semibold text-foreground md:text-3xl">
            Common mixer problems we fix
          </h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong className="font-medium text-foreground">Motor hums, blade does not turn</strong>{" "}
              — usually a worn coupler between the motor and the jar.
            </li>
            <li>
              <strong className="font-medium text-foreground">Will not start at all</strong>{" "}
              — overload switch, speed switch, carbon brushes, or the cord.
            </li>
            <li>
              <strong className="font-medium text-foreground">Burning smell or smoke</strong>{" "}
              — an overheated or burnt winding; the motor comes apart on the bench.
            </li>
            <li>
              <strong className="font-medium text-foreground">Jar leaking at the base</strong>{" "}
              — a tired gasket or bushing in the wet jar.
            </li>
            <li>
              <strong className="font-medium text-foreground">Loud rattle or grinding noise</strong>{" "}
              — a loose blade assembly or a worn bearing.
            </li>
            <li>
              <strong className="font-medium text-foreground">Trips after 30 seconds</strong>{" "}
              — overload cutting in; often a jar packed too tight, sometimes the motor.
            </li>
          </ul>
          <h2 className="font-heading text-[1.75rem] font-semibold text-foreground md:text-3xl">
            Brands we repair
          </h2>
          <p>
            Preethi, Sumeet, Butterfly, Prestige, Bajaj, and the local-body mixers that
            Bengaluru kitchens run every morning. Send the name plate on WhatsApp if the
            brand is not listed here — we repair what we can open and say so when a part
            cannot be sourced.
          </p>
          <h2 className="font-heading text-[1.75rem] font-semibold text-foreground md:text-3xl">
            Commercial and 1–2 HP mixers
          </h2>
          <p>
            Darshinis, cafés, and PG kitchens bring heavy-duty and hotel-grade machines.
            We open the motor, rewind or replace what has failed, and tell you up front
            when a 2 HP part needs a longer lead time.
          </p>
          <h2 className="font-heading text-[1.75rem] font-semibold text-foreground md:text-3xl">
            Repair or replace?
          </h2>
          <p>
            A coupler, brush, or switch is a small repair. A burnt winding is a rewind.
            If the body is cracked and the motor is gone, we say a new mixer is the better
            spend — after the bench check, not before.
          </p>
          <h2 className="font-heading text-[1.75rem] font-semibold text-foreground md:text-3xl">
            What to send on the call
          </h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>A photo of the motor plate if it is still readable.</li>
            <li>Whether the jar spins and the blade does not — that is usually a coupling.</li>
            <li>Smoke, burning smell, or a trip after 30 seconds — that is motor territory.</li>
            <li>Your area in Bengaluru, so we know if you are walking in or sending a photo first.</li>
          </ul>
          <p>
            Call <TextPhoneLink />. Do not wait on a form that never rings a workshop.
          </p>
        </article>
        <aside className="space-y-4">
          <ImageSlot
            label="Motor / jar close-up"
            photo={photos.mixer}
            ratio="square"
            sizes="(max-width: 768px) 92vw, 18rem"
          />
          <p className="kicker mt-4">
            Shop note
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Manufacturing and repair share tools. If we cannot get a jar, we will say so
            on WhatsApp instead of inventing stock.
          </p>
        </aside>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-14 md:pb-16">
        <h2 className="font-heading text-[1.75rem] font-semibold md:text-3xl">Mixer FAQs</h2>
        <div className="mt-6">
          <FaqList items={faqs} />
        </div>
      </section>
      <AreasServedLinks heading="Drop-off and calls from South Bengaluru" />
    </>
  );
}
