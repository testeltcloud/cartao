import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { FadeIn } from "@/components/motion";
import { cn } from "@/lib/utils";

type Crumb = { label: string; href?: string };

/** Cabeçalho padrão das páginas internas (abaixo do header fixo). */
export function PageHero({
  eyebrow,
  title,
  lead,
  breadcrumbs,
  children,
  align = "left",
  tone = "surface",
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  breadcrumbs?: Crumb[];
  children?: React.ReactNode;
  align?: "left" | "center";
  tone?: "surface" | "default";
}) {
  return (
    <section
      className={cn(
        "border-b border-line pt-20 pb-12 sm:pt-20 lg:pb-14",
        tone === "surface" ? "bg-surface" : "bg-background"
      )}
    >
      <Container>
        <div
          className={cn(
            "max-w-3xl",
            align === "center" && "mx-auto text-center"
          )}
        >
          {breadcrumbs && breadcrumbs.length > 0 && (
            <nav
              aria-label="Trilha de navegação"
              className={cn(
                "mb-6 flex flex-wrap items-center gap-1.5 text-sm text-muted",
                align === "center" && "justify-center"
              )}
            >
              {breadcrumbs.map((c, i) => (
                <span key={c.label} className="inline-flex items-center gap-1.5">
                  {i > 0 && (
                    <ChevronRight
                      className="h-3.5 w-3.5 text-faint"
                      aria-hidden
                    />
                  )}
                  {c.href ? (
                    <Link
                      href={c.href}
                      className="transition-colors hover:text-ink"
                    >
                      {c.label}
                    </Link>
                  ) : (
                    <span className="text-ink">{c.label}</span>
                  )}
                </span>
              ))}
            </nav>
          )}

          <FadeIn>
            {eyebrow && (
              <Eyebrow
                className={cn("mb-5", align === "center" && "justify-center")}
              >
                {eyebrow}
              </Eyebrow>
            )}
            <h1 className="text-h2 font-semibold tracking-tight text-ink">
              {title}
            </h1>
            {lead && (
              <p className="mt-5 text-lg leading-relaxed text-muted">{lead}</p>
            )}
            {children && <div className="mt-8">{children}</div>}
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
