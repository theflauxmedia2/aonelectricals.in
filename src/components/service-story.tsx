import type { ReactNode } from "react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { AreasServedLinks } from "@/components/areas-served-links";
import { CtaPair } from "@/components/cta-links";
import { FaqList } from "@/components/faq-list";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/site-chrome";
import { MoreServices } from "@/components/more-services";
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd } from "@/lib/seo";
import { photos } from "@/lib/photos";
import type { Service } from "@/lib/site";

export function ServiceStory({
  service,
  kicker,
  title,
  lede,
  ctaMessage,
  faqs,
  jsonLdName,
  jsonLdDescription,
  children,
}: {
  service: Service;
  kicker: string;
  title: string;
  lede: string;
  ctaMessage: string;
  faqs: { question: string; answer: string }[];
  jsonLdName: string;
  jsonLdDescription: string;
  children: ReactNode;
}) {
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
          name: jsonLdName,
          description: jsonLdDescription,
          path: service.href,
        })}
      />
      <JsonLd data={faqJsonLd(faqs)} />
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: service.navLabel, href: service.href },
        ]}
      />
      <PageHero
        kicker={kicker}
        title={title}
        lede={lede}
        image={{
          label: service.image,
          photo: photos[service.photo],
          ratio: "portrait",
        }}
      >
        <CtaPair message={ctaMessage} />
      </PageHero>
      <article className="mx-auto max-w-3xl space-y-5 px-4 py-12 text-[0.95rem] leading-relaxed text-muted-foreground md:py-14 md:text-base">
        {children}
      </article>
      <section className="mx-auto max-w-6xl px-4 pb-14 md:pb-16">
        <h2 className="font-heading text-[1.75rem] font-semibold md:text-3xl">
          {service.navLabel} FAQs
        </h2>
        <div className="mt-6">
          <FaqList items={faqs} />
        </div>
      </section>
      <AreasServedLinks />
      <MoreServices current={service.href} />
    </>
  );
}
