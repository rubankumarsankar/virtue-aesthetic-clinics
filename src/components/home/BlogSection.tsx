"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { Container } from "@components/common";

/**
 * 09. AESTHETIC & SKIN HEALTH INSIGHTS (Senior Visual Refinement Pass)
 * - Section breathing room: py-20 sm:py-24 lg:py-28
 * - Eyebrow: AESTHETIC & SKIN HEALTH INSIGHTS
 * - Heading: Aesthetic & Skin Health Insights
 * - 3 Editorial cards with category tag, title, date, read time, and circular arrow button
 */
export function BlogSection() {
  const shouldReduceMotion = useReducedMotion();
  const easeLuxury = [0.21, 0.47, 0.32, 0.98] as const;

  const articles = [
    {
      id: "clear-complexion",
      slug: "understanding-acne-scars",
      title: "How to Maintain a Clear, Healthy Complexion",
      category: "Skin Health",
      readTime: "5 min read",
      date: "Jun 12, 2025",
      imageUrl: "/images/blogs/skin-health.jpg",
    },
    {
      id: "skin-rejuvenation-guide",
      slug: "what-to-know-about-skin-pigmentation",
      title: "A Guide to Skin Rejuvenation Treatments",
      category: "Treatment Guides",
      readTime: "6 min read",
      date: "Jun 8, 2025",
      imageUrl: "/images/blogs/treatment-guide.jpg",
    },
    {
      id: "body-contouring-guide",
      slug: "hair-fall-and-thinning-when-to-seek-advice",
      title: "Non-Surgical Body Contouring: What to Know",
      category: "Expert Advice",
      readTime: "4 min read",
      date: "May 28, 2025",
      imageUrl: "/images/blogs/body-contouring.jpg",
    },
  ];

  return (
    <section className="bg-[#FAF8F5] py-20 sm:py-24 lg:py-28" id="insights">
      <Container size="default">
        {/* Section Header */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: easeLuxury }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 sm:mb-14"
        >
          <div>
            <span className="font-sans text-[11px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-[#52625A] block mb-2.5 sm:mb-3">
              Aesthetic &amp; Skin Health Insights
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-[46px] font-normal text-[#202923] tracking-tight leading-tight">
              Aesthetic &amp; Skin Health Insights
            </h2>
          </div>

          <div className="shrink-0">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 font-sans text-xs sm:text-sm font-medium text-[#202923] hover:text-[#253C34] transition-colors group"
            >
              <span>View All Articles</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>

        {/* 3 Editorial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {articles.map((post, index) => (
            <motion.div
              key={post.id}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: index * 0.1, ease: easeLuxury }}
              whileHover={shouldReduceMotion ? {} : { y: -5 }}
              className="h-full"
            >
              <Link
                href={`/blog/${post.slug}`}
                className="group flex flex-col justify-between h-full overflow-hidden rounded-[20px] sm:rounded-[22px] border border-[#E9E2D9] bg-white p-3.5 sm:p-4.5 transition-all duration-300 hover:shadow-lg hover:border-[#C4A17B]/50"
              >
                <div>
                  {/* Photo Banner with rounded corners */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[14px] bg-[#EDF2ED] mb-4">
                    <Image
                      src={post.imageUrl}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 380px"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>

                  {/* Category Pill Tag */}
                  <span className="inline-block rounded-full bg-[#FAF8F5] border border-[#E9E2D9] px-2.5 py-0.5 font-sans text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase text-[#52625A] mb-2">
                    {post.category}
                  </span>

                  {/* Article Title */}
                  <h3 className="font-editorial text-lg sm:text-[21px] font-normal text-[#202923] leading-snug group-hover:text-[#253C34] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                </div>

                {/* Card Meta & Circular Arrow Button */}
                <div className="mt-5 pt-3.5 border-t border-[#E9E2D9]/70 flex items-center justify-between text-xs text-[#52625A]">
                  <span className="font-sans font-medium">
                    {post.date} &middot; {post.readTime}
                  </span>

                  <div className="flex h-7.5 w-7.5 sm:h-8 sm:w-8 items-center justify-center rounded-full border border-[#E9E2D9] text-[#202923] transition-all duration-300 group-hover:bg-[#253C34] group-hover:text-white group-hover:border-[#253C34]">
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
