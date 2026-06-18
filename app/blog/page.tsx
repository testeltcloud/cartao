import type { Metadata } from "next";
import { BlogIndex } from "@/components/blog/blog-index";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Artigos sobre conciliação, White Label, compliance, tecnologia e expansão comercial no mercado de pagamentos.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return <BlogIndex page={1} />;
}
