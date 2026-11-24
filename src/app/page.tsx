import Hero from "@/components/home/Hero";
import Pillars from "@/components/home/Pillars";
import Concerns from "@/components/home/Concerns";
import CategoryGallery from "@/components/home/CategoryGallery";
import WhyChoose from "@/components/home/WhyChoose";
import Doctors from "@/components/home/Doctors";
import FeaturedTreatments from "@/components/home/FeaturedTreatments";
import Journey from "@/components/home/Journey";
import StoriesAndBlogs from "@/components/home/StoriesAndBlogs";
import Faq from "@/components/home/Faq";
import Location from "@/components/home/Location";
import FinalCta from "@/components/home/FinalCta";

export default function Home() {
  return (
    <>
      <Hero />
      <Pillars />
      <Concerns />
      <CategoryGallery />
      <WhyChoose />
      <Doctors />
      <FeaturedTreatments />
      <Journey />
      <StoriesAndBlogs />
      <Faq />
      <Location />
      <FinalCta />
    </>
  );
}
