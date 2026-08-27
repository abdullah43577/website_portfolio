import Image from "next/image";
import portrait from "../../../public/img2.jpg";
import { site } from "@/content/site";

export function HeroPortrait() {
  return (
    <figure className="relative w-full">
      <div className="overflow-hidden rounded-xl border border-border bg-surface-2">
        <Image
          src={portrait}
          alt={`${site.name}, ${site.role}`}
          priority
          sizes="(min-width: 1280px) 480px, (min-width: 1024px) 440px, 100vw"
          className="h-full w-full object-cover"
        />
      </div>
      <figcaption className="mt-4 flex items-center justify-between border-t border-border pt-4">
        <span className="label-mono">{site.location}</span>
        <span className="label-mono">GMT +1</span>
      </figcaption>
    </figure>
  );
}
