import { cn } from "@/lib/utils";

type TagProps = {
  children: React.ReactNode;
  className?: string;
};

export function Tag({ children, className }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border border-border bg-surface-2 px-2 py-1 font-mono text-[11px] tracking-tight text-fg-muted",
        className,
      )}
    >
      {children}
    </span>
  );
}
