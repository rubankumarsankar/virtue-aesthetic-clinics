"use client";

import Image from "next/image";
import { useState } from "react";

type PhotoProps = {
  src: string;
  alt: string;
  sizes: string;
  /** Use for above-the-fold images (LCP): loads immediately and is shown without a fade. */
  eager?: boolean;
  objectPosition?: string;
};

/**
 * Fills its `.img` parent (position:relative + overflow:hidden). While a lazy image loads, the
 * parent's tinted background + shimmer shows through; once loaded the photo fades in.
 * Eager (hero) images skip the fade so Largest Contentful Paint isn't delayed.
 */
export default function Photo({ src, alt, sizes, eager, objectPosition = "center" }: PhotoProps) {
  const [loaded, setLoaded] = useState(false);
  const className = eager ? undefined : `ph${loaded ? " is-loaded" : ""}`;

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      loading={eager ? "eager" : "lazy"}
      fetchPriority={eager ? "high" : undefined}
      className={className}
      onLoad={eager ? undefined : () => setLoaded(true)}
      style={{ objectFit: "cover", objectPosition }}
    />
  );
}
