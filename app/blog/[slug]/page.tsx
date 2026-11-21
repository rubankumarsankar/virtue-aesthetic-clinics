import * as React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Container } from "@components/common";
import { CtaBannerSection } from "@components/home";
import { blogPosts } from "@src/data/placeholder";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  return {
    title: `${post?.title || "Article"} | Virtue Aesthetic Clinic`,
    description: post?.excerpt || "Educational skin and hair health guide by Virtue Aesthetic Clinic.",
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug) || blogPosts[0];

  return (
    <main className="bg-[#FAF8F5] min-h-screen">
      <article className="bg-white border-b border-[#E9E2D9] py-14 sm:py-18">
        <Container size="default">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-sans font-medium text-[#52625A] hover:text-[#253C34] transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Articles</span>
          </Link>

          <div className="max-w-3xl">
            {post.tags?.[0] && (
              <span className="inline-block rounded-full bg-[#EDF2ED] px-3 py-1 font-sans text-[11px] font-semibold tracking-wider uppercase text-[#253C34] mb-3">
                {post.tags[0]}
              </span>
            )}

            <h1 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-normal text-[#202923] tracking-tight leading-tight">
              {post.title}
            </h1>

            <div className="flex items-center gap-4 mt-4 text-xs font-sans text-[#52625A]">
              <span>{post.publishedAt}</span>
              <span>•</span>
              <span>By {post.author}</span>
            </div>
          </div>

          {post.coverImageUrl && (
            <div className="relative aspect-[16/9] w-full max-w-3xl rounded-[20px] overflow-hidden bg-[#EDF2ED] mt-8 mb-8">
              <Image
                src={post.coverImageUrl}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
          )}

          <div className="max-w-3xl font-sans text-sm sm:text-base text-[#52625A] leading-relaxed space-y-4">
            <p className="text-lg text-[#202923] font-editorial italic">
              {post.excerpt}
            </p>
            <p>
              When considering treatment options for skin or hair concerns, a clinical consultation with a qualified dermatologist helps determine the underlying cause and ensures the treatment plan matches your specific skin type and health history.
            </p>
            <p>
              At Virtue Aesthetic Clinic in Ambattur, Chennai, consultations are structured to provide comprehensive assessment, transparent information about procedure timelines, and realistic expectations.
            </p>
          </div>

          <div className="mt-10 pt-6 border-t border-[#E9E2D9] max-w-3xl">
            <Link
              href="/contact#consultation"
              className="inline-flex items-center gap-2 rounded-full bg-[#253C34] px-6 py-3 font-sans text-sm font-medium text-white transition-all hover:bg-[#1B3028]"
            >
              <span>Book a Consultation with Our Dermatologists</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </article>

      <CtaBannerSection />
    </main>
  );
}
