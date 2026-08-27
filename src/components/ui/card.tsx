import { cn } from "@/lib/utils";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  interactive?: boolean;
};

export function Card({ children, className, interactive }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-border bg-surface",
        interactive &&
          "transition-colors duration-150 hover:border-border-strong hover:bg-surface-2",
        className,
      )}
    >
      {children}
    </div>
  );
}
