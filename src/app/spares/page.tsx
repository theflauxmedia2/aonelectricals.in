import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CtaPair, TextNavLink } from "@/components/cta-links";
import { FaqList } from "@/components/faq-list";
import { ImageSlot } from "@/components/image-slot";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/site-chrome";
import {
  breadcrumbJsonLd,
  buildMetadata,
  faqJsonLd,
  serviceJsonLd,
} from "@/lib/seo";
import { photos } from "@/lib/photos";
import { spareCatalog } from "@/lib/site";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}): Promise<Metadata> {
  const { q } = await searchParams;
  const metadata = buildMetadata({
    title: "Mixer Spare Parts in Bangalore",
    description:
      "Mixer spare parts in Bengaluru from A One Electricals, Kumar Swamy Layout: jars, blades, couplings, carbon brushes, overload switches, and motors. Call +91 70225 16735.",
    path: "/spares",
    keywords: [
      "mixer spare parts Bengaluru",
      "mixer jar Kumar Swamy Layout",
      "mixer blade Bangalore",
      "mixer motor spare",
    ],
  });

  if (q?.trim()) {
    return {
      ...metadata,
      robots: { index: false, follow: true },
    };
  }

  return metadata;
}

const faqs = [
  {
    question: "Do I need the exact model number for a mixer jar?",
    answer:
      "A clear photo of the jar, the coupler, and the motor plate is usually enough. WhatsApp it. If the jar is a one-off local body, we will say whether a match exists instead of guessing.",
  },
  {
    question: "Can I pick up spares without a repair?",
    answer:
      "Yes. People walk in from Kumar Swamy Layout and nearby for blades, couplings, and overload switches. Repair is next to the same counter if the spare is not the whole story.",
  },
];

export default async function SparesPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;
  const query = q?.trim() ?? "";
  const results = query
    ? spareCatalog.filter((item) => {
        const haystack = `${item.name} ${item.summary} ${item.slug}`.toLowerCase();
        return haystack.includes(query.toLowerCase());
      })
    : spareCatalog;

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Spares", path: "/spares" },
        ])}
      />
      <JsonLd
        data={serviceJsonLd({
          name: "Mixer and electrical spare parts in Bengaluru",
          description:
            "Jars, blades, couplings, motors, switches, and carbon brushes from the Kumar Swamy Layout shop.",
          path: "/spares",
        })}
      />
      <JsonLd data={faqJsonLd(faqs)} />
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: "Spares", href: "/spares" },
        ]}
      />
      <PageHero
        kicker="Spares · Bengaluru kitchens"
        title="Mixer spare parts in Bengaluru — jars, blades, couplings, motors"
        lede="The part that failed is often a small piece inside an expensive mixer. Ask the Kumar Swamy Layout shop before you replace the whole machine."
        image={{
          label: "Spare jars and blades",
          photo: photos.spares,
          ratio: "portrait",
        }}
      >
        <CtaPair message="Hi A One Electricals, I need mixer spares in Bengaluru." />
      </PageHero>

      <section className="mx-auto max-w-6xl px-4 py-10 md:py-12">
        <form method="get" action="/spares" className="flex flex-col gap-3 sm:flex-row">
          <label htmlFor="spare-q" className="sr-only">
            Search spare parts
          </label>
          <input
            id="spare-q"
            name="q"
            defaultValue={query}
            placeholder="Search jars, blades, motors…"
            className="h-12 flex-1 rounded-lg border border-input bg-transparent px-3 text-base"
          />
          <button
            type="submit"
            className="h-12 rounded-lg bg-primary px-5 text-sm font-semibold text-primary-foreground"
          >
            Search spares
          </button>
        </form>
        <p className="mt-3 text-sm text-muted-foreground">
          Canonical list is this page. Search filters it; if nothing matches, call
          rather than assuming we do not stock it.
        </p>

        {results.length === 0 ? (
          <div
            role="status"
            className="mt-8 rounded-xl border border-dashed border-primary/30 p-8 text-center"
          >
            <h2 className="font-heading text-2xl">No spare matches “{query}”</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              That name is not on this list. WhatsApp a photo of the jar or
              motor. The shop often has the part even if it is not written here.
            </p>
            <div className="mt-6 flex justify-center">
              <CtaPair message={`Hi A One Electricals, I am looking for ${query} spares.`} />
            </div>
          </div>
        ) : (
          <ul className="mt-8 grid gap-5 md:grid-cols-2">
            {results.map((item) => {
              const photo =
                item.slug === "motors"
                  ? photos.mixerMotor
                  : item.slug === "switches"
                    ? photos.switch
                    : item.slug === "brushes"
                      ? photos.cable
                      : item.slug === "blades"
                        ? photos.sparesWide
                        : item.slug === "couplings"
                          ? photos.spares
                          : photos.mixer;
              return (
              <li key={item.slug} id={item.slug}>
                <article className="h-full overflow-hidden rounded-xl border border-border bg-card">
                  <ImageSlot
                    label={`${item.name} photograph`}
                    photo={photo}
                    caption=""
                    ratio="landscape"
                    sizes="(max-width: 768px) 92vw, 50vw"
                  />
                  <div className="p-5">
                    <h2 className="font-heading text-2xl tracking-tight">{item.name}</h2>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {item.summary}
                    </p>
                  </div>
                </article>
              </li>
              );
            })}
          </ul>
        )}

        <p className="mt-10 text-sm text-muted-foreground">
          Spares sit next to{" "}
          <TextNavLink href="/mixer-repair">mixer manufacturing and repair</TextNavLink>.
          If the motor is gone, do not buy a blade first.
        </p>
        <div className="mt-8">
          <FaqList items={faqs} />
        </div>
      </section>
    </>
  );
}
