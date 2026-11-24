import Link from "next/link";
import type { ComponentProps } from "react";

type SmartLinkProps = Omit<ComponentProps<"a">, "href"> & { href: string };

/** Uses next/link for internal routes and a plain anchor for hash/external links. */
export default function SmartLink({ href, ...rest }: SmartLinkProps) {
  if (href.startsWith("/")) {
    return <Link href={href} {...rest} />;
  }
  return <a href={href} {...rest} />;
}
