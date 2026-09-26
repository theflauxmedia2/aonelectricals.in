import { siteConfig } from "@/lib/site";

type ShopMapProps = {
  className?: string;
};

export function ShopMap({ className }: ShopMapProps) {
  return (
    <figure className={className}>
      <div className="overflow-hidden rounded-xl border border-border bg-card">
        <iframe
          title={`Map of ${siteConfig.name} at ${siteConfig.addressDisplay}`}
          src={siteConfig.mapsEmbedUrl}
          className="aspect-[4/3] min-h-64 w-full border-0 md:aspect-video md:min-h-80"
          loading="lazy"
          allowFullScreen
        />
      </div>
      <figcaption className="mt-3 text-sm text-muted-foreground">
        <a
          href={siteConfig.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline-offset-4 hover:underline"
        >
          Open {siteConfig.addressDisplay} in Google Maps
        </a>
      </figcaption>
    </figure>
  );
}
