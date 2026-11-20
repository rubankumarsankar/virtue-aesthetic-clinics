import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, User } from "lucide-react";
import { cn } from "@lib/utils";
import type { BlogPost } from "@src/types/index";

export interface BlogCardProps extends React.HTMLAttributes<HTMLDivElement> {
  post: BlogPost;
  href?: string;
}

/**
 * BlogCard
 * Editorial luxury article card for dermatological insights, skin care advice, and clinic news.
 */
export function BlogCard({ post, href, className, ...props }: BlogCardProps) {
  const targetHref = href || `/blog/${post.slug}`;

  return (
    <article
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-[18px] border border-[#E9E2D9] bg-[#FFFFFF] transition-all duration-300 hover:-translate-y-1 hover:shadow-md",
        className
      )}
      {...props}
    >
      {/* Cover Image */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#EDF2ED]">
        {post.coverImageUrl ? (
          <Image
            src={post.coverImageUrl}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center p-6 text-center">
            <span className="font-editorial text-sm italic text-[#64796C]">
              {post.title}
            </span>
          </div>
        )}

        {post.tags && post.tags.length > 0 && (
          <div className="absolute top-4 left-4 z-10">
            <span className="inline-block rounded-full bg-white/95 backdrop-blur-sm px-3 py-1 font-sans text-[11px] font-semibold uppercase tracking-wider text-[#253C34] shadow-xs">
              {post.tags[0]}
            </span>
          </div>
        )}
      </div>

      {/* Article Body */}
      <div className="flex flex-1 flex-col justify-between p-6">
        <div>
          {/* Metadata */}
          <div className="flex items-center gap-3 text-xs text-[#52625A] mb-2.5">
            {post.publishedAt && (
              <div className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5 text-[#C4A17B]" />
                <span>{post.publishedAt}</span>
              </div>
            )}
            {post.author && (
              <div className="flex items-center gap-1.5">
                <User className="h-3.5 w-3.5 text-[#C4A17B]" />
                <span>{post.author}</span>
              </div>
            )}
          </div>

          <h3 className="font-editorial text-2xl font-normal leading-snug text-[#202923] group-hover:text-[#253C34] transition-colors">
            {post.title}
          </h3>

          <p className="mt-2 text-body-luxury text-sm line-clamp-2 text-[#52625A]">
            {post.excerpt}
          </p>
        </div>

        <div className="mt-6 pt-4 border-t border-[#E9E2D9]/60">
          <Link
            href={targetHref}
            className="inline-flex items-center gap-1.5 font-sans text-sm font-medium text-[#253C34] transition-colors hover:text-[#1B3028]"
          >
            <span>Read Article</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </article>
  );
}

