import type { Metadata } from "next";
import { AddedServicePage } from "@/components/added-service-page";
import { buildMetadata } from "@/lib/seo";
import { addedServices } from "@/lib/site";

const service = addedServices.find((item) => item.slug === "washing-machine")!;

export const metadata: Metadata = buildMetadata({
  title: service.metaTitle,
  description: service.description,
  path: service.href,
  keywords: [...service.keywords],
});

export default function WashingMachinePage() {
  return <AddedServicePage service={service} />;
}
