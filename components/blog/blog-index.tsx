import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion";
import { PostCard } from "./post-card";
import { Pagination } from "./pagination";
import { getPostsPage, totalPages } from "@/lib/posts";

export function BlogIndex({ page }: { page: number }) {
  const items = getPostsPage(page);

  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Cabeçalho da seção */}
        <section className="border-b border-line bg-surface pt-32 pb-14 sm:pt-36 lg:pt-40">
          <Container>
            <FadeIn className="max-w-3xl">
              <Eyebrow className="mb-5">Blog</Eyebrow>
              <h1 className="text-h2 font-semibold tracking-tight text-ink">
                Conteúdos sobre o mercado de pagamentos
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-muted">
                Artigos sobre conciliação, White Label, compliance, tecnologia e
                expansão comercial para quem opera no mercado financeiro.
              </p>
            </FadeIn>
          </Container>
        </section>

        {/* Grade de artigos + paginação */}
        <section className="py-16 lg:py-20">
          <Container>
            <Stagger className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((post) => (
                <StaggerItem key={post.slug}>
                  <PostCard post={post} />
                </StaggerItem>
              ))}
            </Stagger>

            <Pagination current={page} total={totalPages} />

            <p className="mt-6 text-center text-sm text-faint">
              Página {page} de {totalPages}
            </p>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
