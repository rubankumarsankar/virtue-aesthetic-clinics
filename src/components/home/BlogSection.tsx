"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { Container } from "@components/common";
import { blogPosts } from "@src/data/placeholder";

/**
 * 09. AESTHETIC & SKIN HEALTH INSIGHTS (With Modern Stagger Motion)
 */
export function BlogSection() {
  const shouldReduceMotion = useReducedMotion();
  const easeLuxury = [0.21, 0.47, 0.32, 0.98] as const;

  return (
    <section className="bg-[#FAF8F5] py-16 sm:py-20 lg:py-24" id="insights">
      <Container size="default">
        {/* Section Header */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: easeLuxury }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8 sm:mb-12"
        >
          <div>
            <span className="font-sans text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-[#64796C] block mb-2 sm:mb-3">
              Aesthetic &amp; Skin Health Insights
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-normal text-[#202923] tracking-tight">
              Aesthetic &amp; Skin Health Insights
            </h2>
          </div>

          <div className="shrink-0">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 font-sans text-sm font-medium text-[#202923] hover:text-[#253C34] transition-colors group"
            >
              <span>View All Articles</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>

        {/* 3 Editorial Cards Grid with Stagger */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: index * 0.12, ease: easeLuxury }}
              whileHover={shouldReduceMotion ? {} : { y: -6 }}
              className="h-full"
            >
              <Link
                href={`/blog/${post.slug}`}
                className="group flex flex-col justify-between h-full overflow-hidden rounded-[20px] border border-[#E9E2D9] bg-white p-4 transition-shadow duration-300 hover:shadow-xl hover:border-[#C4A17B]/40"
              >
                <div>
                  {/* Photo Banner with rounded corners and zoom */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[14px] bg-[#EDF2ED] mb-4">
                    {post.coverImageUrl && (
                      <Image
                        src={post.coverImageUrl}
                        alt={post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-106"
                      />
                    )}
                  </div>

                  {/* Tag pill */}
                  {post.tags?.[0] && (
                    <span className="inline-block rounded-full bg-[#EDF2ED] px-3 py-1 font-sans text-[10px] font-semibold tracking-wider uppercase text-[#253C34] mb-2.5">
                      {post.tags[0]}
                    </span>
                  )}

                  {/* Title */}
                  <h3 className="font-editorial text-xl sm:text-2xl font-normal text-[#202923] group-hover:text-[#253C34] transition-colors line-clamp-2 leading-snug">
                    {post.title}
                  </h3>
                </div>

                {/* Date & Circular Arrow */}
                <div className="mt-5 pt-3.5 border-t border-[#E9E2D9]/60 flex items-center justify-between">
                  <span className="font-sans text-xs text-[#52625A]">
                    {post.publishedAt}
                  </span>

                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#E9E2D9] bg-white text-[#202923] transition-all duration-300 group-hover:bg-[#253C34] group-hover:text-white group-hover:border-[#253C34] group-hover:scale-105">
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
