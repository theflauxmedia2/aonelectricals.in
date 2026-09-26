import Image from "next/image";
import { photos, type Photo } from "@/lib/photos";

const slides: Photo[] = [
  photos.geyser,
  photos.washer,
  photos.mixer,
  photos.gasStove,
  photos.upsWiring,
  photos.buildingWiring,
];

export function HeroSlider({
  sizes,
  priority = false,
}: {
  sizes: string;
  priority?: boolean;
}) {
  return (
    <div className="hero-slider absolute inset-0">
      {slides.map((photo, index) => (
        <div key={photo.src} className="hero-slide">
          <Image
            src={photo.src}
            alt={index === 0 ? photo.alt : ""}
            fill
            priority={priority && index === 0}
            sizes={sizes}
            className="object-cover"
            style={{ objectPosition: photo.position }}
          />
        </div>
      ))}
    </div>
  );
}
