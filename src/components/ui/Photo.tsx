import Image from "next/image";

type PhotoProps = {
  src: string;
  alt: string;
  sizes: string;
  /** Use for the above-the-fold hero image (LCP). */
  eager?: boolean;
  objectPosition?: string;
};

/**
 * Fills its `.img` parent (which is position:relative + overflow:hidden).
 * The parent's ::after sheen still renders on top of the photo.
 */
export default function Photo({ src, alt, sizes, eager, objectPosition = "center" }: PhotoProps) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      loading={eager ? "eager" : "lazy"}
      fetchPriority={eager ? "high" : undefined}
      style={{ objectFit: "cover", objectPosition }}
    />
  );
}
