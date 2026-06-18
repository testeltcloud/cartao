import Link from "next/link";
import { Calendar, User, ArrowRight } from "lucide-react";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";
import { Pill } from "@/components/ui/pill";
import { HoverLift } from "@/components/motion";
import { Logo } from "@/components/layout/logo";
import { formatDate, type Post } from "@/lib/posts";

export function PostCard({ post }: { post: Post }) {
  return (
    <HoverLift className="h-full">
      <Link
        href={`/blog/${post.slug}`}
        className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-background transition-colors duration-300 hover:border-line-strong hover:shadow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
      >
        {/* Imagem do artigo (slot) + badge de categoria + marca d'água */}
        <div className="relative">
          <MediaPlaceholder
            kind="image"
            ratio="16/9"
            label="Imagem do artigo"
            className="rounded-none border-0 border-b"
          />
          <span className="absolute left-3 top-3">
            <Pill tone="accent">{post.category}</Pill>
          </span>
          <span
            className="pointer-events-none absolute bottom-3 right-3 text-faint opacity-40"
            aria-hidden
          >
            <Logo showWordmark={false} />
          </span>
        </div>

        {/* Corpo */}
        <div className="flex flex-1 flex-col p-6">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5" aria-hidden />
              <time dateTime={post.date}>{formatDate(post.date)}</time>
            </span>
            <span className="inline-flex items-center gap-1.5">
              <User className="h-3.5 w-3.5" aria-hidden />
              {post.author}
            </span>
          </div>

          <h2 className="mt-3 text-lg font-semibold leading-snug tracking-tight text-ink">
            {post.title}
          </h2>

          <p className="mt-2.5 line-clamp-3 text-sm leading-relaxed text-muted">
            {post.excerpt}
          </p>

          <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
            Ler Artigo
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </span>
        </div>
      </Link>
    </HoverLift>
  );
}
