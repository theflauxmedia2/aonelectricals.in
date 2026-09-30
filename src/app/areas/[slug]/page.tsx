import { notFound } from "next/navigation";
import { AreaPage, areaMetadata } from "@/components/area-page";
import { areas, type AreaSlug } from "@/lib/areas";

export function generateStaticParams() {
  return areas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const match = areas.find((area) => area.slug === slug);
  if (!match) return {};
  return areaMetadata(match.slug as AreaSlug);
}

export default async function AreaSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const match = areas.find((area) => area.slug === slug);
  if (!match) notFound();
  return <AreaPage slug={match.slug as AreaSlug} />;
}
