import { getPublicServices } from "@/lib/services";
import FeaturedTreatmentsList from "./FeaturedTreatmentsList";

/** Server wrapper: services come from MySQL (cached, tag "services"), managed in /admin/services. */
export default async function FeaturedTreatments() {
  const services = await getPublicServices();
  return <FeaturedTreatmentsList services={services} />;
}
