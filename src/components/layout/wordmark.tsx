import Link from "next/link";
import { site } from "@/content/site";

export function Wordmark() {
  return (
    <Link
      href="/"
      className="group inline-flex items-baseline gap-[3px] text-[15px] font-medium tracking-tight text-fg md:text-base"
    >
      <span>{site.name}</span>
      <span className="text-accent transition-opacity duration-150 group-hover:opacity-60">
        .
      </span>
    </Link>
  );
}
