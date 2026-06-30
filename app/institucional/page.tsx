import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

import { MonolithHero } from "@/components/sections/institucional/monolith-hero";
import { ScaleMetrics } from "@/components/sections/institucional/scale-metrics";
import { BlueprintGrid } from "@/components/sections/institucional/blueprint-grid";
import { SculpturalTimeline } from "@/components/sections/institucional/sculptural-timeline";
import { MonolithCta } from "@/components/sections/institucional/monolith-cta";

export const metadata: Metadata = {
  title: "Institucional — LTCard",
  description:
    "A infraestrutura que move o seu futuro. Sólida como um monolito, ágil como o fluxo do capital.",
  alternates: { canonical: "/institucional" },
};

export default function InstitucionalPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-[#0a0a0a]">
        <MonolithHero />
        <ScaleMetrics />
        <BlueprintGrid />
        <SculpturalTimeline />
        <MonolithCta />
      </main>
      <Footer />
    </>
  );
}
