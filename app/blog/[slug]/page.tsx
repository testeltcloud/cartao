import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import { Pill } from "@/components/ui/pill";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";
import { posts, getPostBySlug, formatDate } from "@/lib/posts";

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: { title: post.title, description: post.excerpt, type: "article" },
  };
}

export default async function ArticlePage({ params }: Params) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <Header />
      <main className="flex-1">
        <article className="pt-32 pb-20 sm:pt-36 lg:pt-40">
          <Container className="max-w-3xl">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-ink"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden />
              Voltar para o blog
            </Link>

            <div className="mt-8">
              <Pill tone="accent">{post.category}</Pill>
            </div>

            <h1 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
              {post.title}
            </h1>

            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-1 text-sm text-muted">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="h-4 w-4" aria-hidden />
                <time dateTime={post.date}>{formatDate(post.date)}</time>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <User className="h-4 w-4" aria-hidden />
                {post.author}
              </span>
            </div>

            <MediaPlaceholder
              kind="image"
              ratio="16/9"
              label="Imagem de destaque do artigo"
              className="mt-8"
            />

            {/* Corpo do artigo (placeholder — troque pelo conteúdo real / MDX) */}
            <div className="mt-10 space-y-5 text-lg leading-relaxed text-ink-soft">
              <p className="text-xl font-medium text-ink">{post.excerpt}</p>
              <p>
                Este é um conteúdo de exemplo. Substitua por seu artigo real
                (texto, imagens, listas e citações). A estrutura de tipografia,
                espaçamento e responsividade já está pronta para receber o
                conteúdo definitivo.
              </p>
              <p>
                Você pode conectar este espaço a um CMS ou a arquivos MDX
                mantendo os mesmos campos de <em>slug</em>, título, resumo, data,
                autor e categoria já definidos.
              </p>
            </div>
          </Container>
        </article>
      </main>
      <Footer />
    </>
  );
}
