import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogIndex } from "@/components/blog/blog-index";
import { totalPages, pageHref } from "@/lib/posts";

export const dynamicParams = false;

/** Gera estaticamente as páginas 2..N (a página 1 é /blog). */
export function generateStaticParams() {
  return Array.from({ length: Math.max(0, totalPages - 1) }, (_, i) => ({
    page: String(i + 2),
  }));
}

type Params = { params: Promise<{ page: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { page } = await params;
  return {
    title: `Blog — Página ${page}`,
    description: "Artigos sobre o mercado de pagamentos.",
    alternates: { canonical: pageHref(Number(page)) },
  };
}

export default async function BlogPaginated({ params }: Params) {
  const { page } = await params;
  const n = Number(page);

  // Páginas inválidas (não numérica, <2, ou acima do total) → 404.
  if (!Number.isInteger(n) || n < 2 || n > totalPages) {
    notFound();
  }

  return <BlogIndex page={n} />;
}
