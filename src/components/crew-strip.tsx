import { ImageSlot } from "@/components/image-slot";
import { photos } from "@/lib/photos";

const shots = [photos.buildingWiring, photos.mixerMotor, photos.geyser] as const;

export function CrewStrip() {
  return (
    <section aria-label="A One Electricals at work" className="bg-secondary">
      <div className="crew-strip flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 py-5 md:mx-auto md:grid md:max-w-6xl md:grid-cols-3 md:gap-5 md:overflow-visible md:px-4 md:py-10">
        {shots.map((shot) => (
          <ImageSlot
            key={shot.src}
            className="w-[82vw] shrink-0 snap-center md:w-auto"
            label={shot.alt}
            photo={shot}
            caption=""
            ratio="landscape"
            sizes="(max-width: 768px) 82vw, 33vw"
          />
        ))}
      </div>
    </section>
  );
}
