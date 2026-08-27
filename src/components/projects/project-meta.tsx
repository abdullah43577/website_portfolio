import type { Project } from "@/content/projects";

const statusLabels: Record<Project["status"], string> = {
  shipped: "Shipped",
  "in-development": "In development",
  archived: "Archived",
};

export function ProjectMeta({ project }: { project: Project }) {
  const rows = [
    { label: "Role", value: project.role },
    { label: "Timeline", value: project.period },
    { label: "Platforms", value: project.platforms.join(", ") },
    { label: "Status", value: statusLabels[project.status] },
  ];

  return (
    <dl className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
      {rows.map((row) => (
        <div key={row.label} className="bg-surface p-5 md:p-6">
          <dt className="label-mono">{row.label}</dt>
          <dd className="mt-2 text-[15px] leading-snug text-fg">{row.value}</dd>
        </div>
      ))}
    </dl>
  );
}
