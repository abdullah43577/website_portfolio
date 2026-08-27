import { Reveal } from "@/components/ui/reveal";
import { about } from "@/content/profile";

export function Principles() {
  return (
    <ul className="border-t border-border">
      {about.principles.map((principle, i) => (
        <Reveal as="li" key={principle.title} delay={i * 0.05}>
          <div className="flex gap-5 border-b border-border py-6">
            <span className="label-mono mt-1 shrink-0 tabular-nums">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <h3 className="text-base font-medium tracking-tight text-fg">
                {principle.title}
              </h3>
              <p className="mt-2 max-w-prose text-[15px] leading-relaxed text-fg-muted">
                {principle.body}
              </p>
            </div>
          </div>
        </Reveal>
      ))}
    </ul>
  );
}
