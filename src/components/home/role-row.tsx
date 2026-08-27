import type { Role } from "@/content/experience";

export function RoleRow({ role }: { role: Role }) {
  return (
    <div className="border-b border-border py-6">
      <div className="flex items-start justify-between gap-4">
        <p className="label-mono">{role.period}</p>
        {role.current ? (
          <span className="label-mono shrink-0 text-accent">Current</span>
        ) : null}
      </div>

      <h3 className="mt-3 text-lg font-medium tracking-tight text-fg">
        {role.title}
      </h3>
      <p className="mt-0.5 text-[15px] text-fg-muted">{role.org}</p>
      {role.note ? (
        <p className="mt-2.5 max-w-prose text-[14px] leading-relaxed text-fg-subtle">
          {role.note}
        </p>
      ) : null}
    </div>
  );
}
