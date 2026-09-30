import Image from "next/image";
import { cn } from "@/lib/utils";
import type { Photo } from "@/lib/photos";

const ratios = {
  portrait: "aspect-[4/5] sm:aspect-[4/5]",
  landscape: "aspect-[4/3] md:aspect-[16/10]",
  square: "aspect-[4/5] md:aspect-square",
  wide: "aspect-[16/10] md:aspect-[21/9]",
} as const;

export type ImageSlotProps = {
  label: string;
  caption?: string;
  ratio?: keyof typeof ratios;
  src?: string;
  /** Prefer an explicit alt; falls back to photo.alt, then label. */
  alt?: string;
  photo?: Photo;
  priority?: boolean;
  sizes?: string;
  className?: string;
  overlay?: string;
  fillHeight?: boolean;
  quality?: number;
};

export function ImageSlot({
  label,
  ratio = "portrait",
  src,
  alt,
  photo,
  priority = false,
  sizes = "(max-width: 768px) 92vw, 540px",
  className,
  overlay,
  fillHeight = false,
  quality,
}: ImageSlotProps) {
  const imageSrc = photo?.src ?? src;
  const imageAlt = alt ?? photo?.alt ?? label;
  const objectPosition = photo?.position ?? "50% 50%";

  return (
    <figure className={cn("min-w-0", fillHeight && "h-full", className)}>
      <div
        data-image-slot={label}
        className={cn(
          "slot-frame relative overflow-hidden rounded-2xl bg-muted min-h-[14rem]",
          fillHeight
            ? "h-full min-h-[28rem] aspect-auto lg:min-h-[34rem]"
            : ratios[ratio]
        )}
      >
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes={sizes}
            priority={priority}
            quality={quality}
            className="object-cover"
            style={{ objectPosition }}
          />
        ) : (
          <div className="absolute inset-0 flex flex-col justify-end bg-muted p-5">
            <p className="text-[0.7rem] text-muted-foreground">Photograph reserved</p>
            <p className="mt-1.5 max-w-[16rem] text-sm leading-snug text-foreground/75">
              {label}
            </p>
          </div>
        )}
        {overlay ? (
          <div className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-black/10 to-transparent p-4">
            <p className="font-heading text-xl leading-tight text-white">{overlay}</p>
          </div>
        ) : null}
      </div>
    </figure>
  );
}
