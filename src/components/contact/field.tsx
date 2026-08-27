import { cn } from "@/lib/utils";

export const fieldClasses =
  "w-full rounded-lg border border-border bg-surface px-4 py-3 text-[15px] text-fg placeholder:text-fg-subtle transition-colors duration-150 hover:border-border-strong focus:border-accent focus:outline-none";

type FieldProps = {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
  className?: string;
};

export function Field({ label, htmlFor, children, className }: FieldProps) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <label htmlFor={htmlFor} className="label-mono">
        {label}
      </label>
      {children}
    </div>
  );
}
