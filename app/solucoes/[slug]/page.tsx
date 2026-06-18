import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SolutionPage } from "@/components/solutions/solution-page";
import { solutions, getSolution } from "@/lib/solutions";

export const dynamicParams = false;

export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolution(slug);
  if (!solution) return {};
  return {
    title: solution.navLabel,
    description: solution.lead,
    alternates: { canonical: `/solucoes/${solution.slug}` },
  };
}

export default async function SolutionRoute({ params }: Params) {
  const { slug } = await params;
  const solution = getSolution(slug);
  if (!solution) notFound();
  return <SolutionPage solution={solution} />;
}
