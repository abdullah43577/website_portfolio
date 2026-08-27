import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <Container>
      <div className="flex min-h-[60vh] flex-col justify-center py-24">
        <p className="label-mono">Error 404</p>
        <h1 className="text-title mt-5 max-w-[16ch] font-medium text-fg">
          This page doesn&apos;t exist.
        </h1>
        <p className="text-subtitle mt-5 max-w-prose text-fg-muted">
          The link is either out of date or was never right. The work is all
          still here.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button href="/">
            Back home
            <ArrowRight className="h-4 w-4" strokeWidth={1.8} />
          </Button>
          <Button href="/projects" variant="secondary">
            Browse the work
          </Button>
        </div>
      </div>
    </Container>
  );
}
