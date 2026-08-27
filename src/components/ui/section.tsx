import { Container } from "./container";
import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
  bordered?: boolean;
};

export function Section({ id, children, className, bordered }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-20 md:py-28 lg:py-32",
        bordered && "border-t border-border",
        className,
      )}
    >
      <Container>{children}</Container>
    </section>
  );
}
