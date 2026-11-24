import type { ReactNode } from "react";
import SiteChrome from "@/components/layout/SiteChrome";
import JsonLd from "@/components/seo/JsonLd";
import { clinicSchema, doctorSchemas, graph, websiteSchema } from "@/lib/seo";
import { getPublicServices } from "@/lib/services";

export default async function SiteLayout({ children }: { children: ReactNode }) {
  // Cached ("use cache" + tag), so this stays part of the static shell.
  const services = await getPublicServices();
  return (
    <>
      <JsonLd data={graph(clinicSchema(services), websiteSchema(), doctorSchemas())} />
      <SiteChrome>{children}</SiteChrome>
    </>
  );
}
