import { Container } from "./container";

type PageHeaderProps = {
  eyebrow: string;
  title: React.ReactNode;
  lede?: string;
  children?: React.ReactNode;
};

export function PageHeader({
  eyebrow,
  title,
  lede,
  children,
}: PageHeaderProps) {
  return (
    <div className="border-b border-border">
      <Container>
        <div className="py-16 md:py-24">
          <p className="label-mono mb-5 flex items-center gap-3">
            <span
              className="inline-block h-px w-6 bg-border-strong"
              aria-hidden
            />
            {eyebrow}
          </p>
          <h1 className="text-title max-w-[20ch] font-medium text-fg">
            {title}
          </h1>
          {lede ? (
            <p className="text-subtitle mt-6 max-w-prose text-fg-muted">
              {lede}
            </p>
          ) : null}
          {children ? <div className="mt-10">{children}</div> : null}
        </div>
      </Container>
    </div>
  );
}
