import Image from "next/image";
import avatar from "../../../public/avatar.png";
import { site } from "@/content/site";

export function HeroPortrait() {
  return (
    <figure className="relative w-full">
      <div className="flex aspect-square items-center justify-center rounded-xl border border-border bg-surface-2 p-10 xl:p-14">
        <Image
          src={avatar}
          alt={`${site.name}, ${site.role}`}
          priority
          sizes="(min-width: 1280px) 400px, 360px"
          className="h-full w-full object-contain dark:invert"
        />
      </div>
      <figcaption className="mt-4 flex items-center justify-between border-t border-border pt-4">
        <span className="label-mono">{site.location}</span>
        <span className="label-mono">GMT +1</span>
      </figcaption>
    </figure>
  );
}
