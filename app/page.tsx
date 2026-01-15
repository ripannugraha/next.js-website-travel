import Hero from "@/components/hero/Hero"
import DestinationSection from "@/components/destination/DestinationSection"
import TestimonialSection from "@/components/testimonial/TestimonialSection"
import PackageSection from "@/components/packages/PackageSection"
import AdventureCTA from "@/components/cta/AdventureCTA"

export default function Home() {
  return (
    <>
      <Hero />
      <DestinationSection />
      <TestimonialSection />
      <PackageSection />
      <AdventureCTA />
    </>
  );
}