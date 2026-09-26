import { Breadcrumbs } from "@/components/breadcrumbs";
import { CtaPair } from "@/components/cta-links";
import { FaqList } from "@/components/faq-list";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/site-chrome";
import { MoreServices } from "@/components/more-services";
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd } from "@/lib/seo";
import { photos } from "@/lib/photos";
import type { AddedService } from "@/lib/site";

export function AddedServicePage({ service }: { service: AddedService }) {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: service.navLabel, path: service.href },
        ])}
      />
      <JsonLd
        data={serviceJsonLd({
          name: service.searchTitle,
          description: service.description,
          path: service.href,
        })}
      />
      <JsonLd data={faqJsonLd([...service.faqs])} />
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: service.navLabel, href: service.href },
        ]}
      />
      <PageHero
        kicker={service.kicker}
        title={service.searchTitle}
        lede={service.lede}
        image={{
          label: service.image,
          photo: photos[service.photo],
          ratio: "portrait",
        }}
      >
        <CtaPair message={service.ctaMessage} />
      </PageHero>
      <article className="mx-auto max-w-3xl space-y-5 px-4 py-12 text-[0.95rem] leading-relaxed text-muted-foreground md:py-14 md:text-base">
        {service.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </article>
      <section className="mx-auto max-w-6xl px-4 pb-14 md:pb-16">
        <h2 className="font-heading text-[1.75rem] font-semibold md:text-3xl">
          {service.navLabel} questions
        </h2>
        <div className="mt-6">
          <FaqList items={[...service.faqs]} />
        </div>
      </section>
      <MoreServices current={service.href} />
    </>
  );
}
